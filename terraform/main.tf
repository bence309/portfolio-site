provider "aws" {
  region = "eu-north-1" // Update with your desired region
}

// Define a map of file extensions to content types
locals {
  content_types = {
    ".html"    = "text/html",
    ".css"     = "text/css",
    ".js"      = "application/javascript",
    ".png"     = "image/png",
    ".json"    = "application/json",
    ".svg"     = "image/svg",
    ".txt"     = "text/plain",
    ".ico"     = "image/x-icon",
    ".css.map" = "application/octet-stream",
    ".ttf"     = "font/ttf",
    ".jfif"    = "image/jpeg",
    ".woff"    = "font/woff",
    ".eot"     = "application/vnd.ms-fontobject",
    // Add more file extensions and corresponding content types as needed
  }
}

// Create S3 bucket
resource "aws_s3_bucket" "portfolio_bucket" {
  bucket = "bence-terraform-portfolio" // Update with your desired bucket name

  force_destroy = true // Enable if you want Terraform to delete all objects in the bucket when destroying the resource

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_object" "portfolio_files" {
  for_each = fileset("${path.module}/../build", "**/*.*") // Path to your build folder

  bucket       = aws_s3_bucket.portfolio_bucket.bucket
  key          = each.value
  source       = "${path.module}/../build/${each.value}" // Path to your build folder
  content_type = each.value
}






// Configure IAM Policy to allow modifying bucket policies
resource "aws_iam_policy" "s3_bucket_policy" {
  name        = "S3BucketPolicyModificationPolicy"
  description = "Allows modification of S3 bucket policies"

  policy = jsonencode({
    Version   = "2012-10-17",
    Statement = [{
      Effect   = "Allow",
      Action   = "s3:PutBucketPolicy",
      Resource = aws_s3_bucket.portfolio_bucket.arn,
    }],
  })
}

// Attach IAM Policy to the IAM user or role used by Terraform
resource "aws_iam_user_policy_attachment" "s3_bucket_policy_attachment" {
  user       = "bence309@hotmail.com" // Replace with your IAM username
  policy_arn = aws_iam_policy.s3_bucket_policy.arn
}
