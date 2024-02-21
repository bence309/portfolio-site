provider "aws" {
  region = "eu-north-1" 
}

resource "aws_s3_bucket" "portfolio_bucket" {
  bucket = "portfolio-terraform-bence-bodi"
  force_destroy = true  # Ensure that the bucket can be destroyed even if it's not empty

  website {
    index_document = "index.html"
  }

  tags = {
    Name = "PortfolioWebsiteBucket"
  }
}

resource "aws_s3_bucket_object" "portfolio_website_files" {
  bucket = aws_s3_bucket.portfolio_bucket.bucket
  key    = "build"  # Remove the trailing slash to upload only the contents
  for_each = fileset("../build", "**/*")

  source = "../build/${each.value}"
}