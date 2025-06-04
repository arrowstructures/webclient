# Database Setup for Newsletter Application

This folder contains SQL scripts to set up and maintain the database for the Newsletter application.

## Quick Setup

For a quick setup of a new Supabase instance, run the `setup.sql` script in the Supabase SQL Editor. This script contains all the necessary commands to create tables, indexes, and policies.

## Storage Setup

The `storage-setup.sql` script contains commands to set up the storage bucket and policies for article thumbnails. These commands need to be run by a Supabase admin or through the dashboard UI.

## Migrations

The `migrations` folder contains individual migration scripts that can be run in sequence to set up the database incrementally:

1. `01-initial-schema.sql` - Creates the articles table and basic indexes
2. `02-enable-rls.sql` - Sets up Row Level Security policies
3. `03-user-trigger.sql` - Creates a trigger to add a welcome article for new users
4. `04-additional-indexes.sql` - Adds additional indexes for better performance

## Manual Storage Bucket Setup

If you're unable to run the storage setup SQL commands, you can manually create the storage bucket through the Supabase dashboard:

1. Go to the Storage section in your Supabase dashboard
2. Click "Create a new bucket"
3. Name the bucket "articles"
4. Check "Public bucket" to make the bucket public
5. Set up the following policies:
   - Allow authenticated users to upload files
   - Allow users to update their own files
   - Allow users to delete their own files
   - Allow public access to read files

## Sample Data

The `setup.sql` script includes commented-out sample data that you can uncomment and modify to add initial articles to your database.
