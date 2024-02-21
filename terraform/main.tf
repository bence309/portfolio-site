provider "aws" {
  region = "eu-north-1"
}

resource "aws_s3_bucket" "portfolio_bucket" {
  bucket = "portfolio-terraform-bence-bodi"
  acl    = "public-read"

  website {
    index_document = "index.html"
  }

  policy = <<POLICY
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Statement1",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::portfolio-terraform-bence-bodi/*"
        }
    ]
}
POLICY
}

resource "aws_s3_bucket_object" "portfolio_website_files" {
  bucket = aws_s3_bucket.portfolio_bucket.bucket
  key    = "build/"
  source = "../build/"
  recursive = true
  acl    = "public-read"
}