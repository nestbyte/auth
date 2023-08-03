CREATE EXTENSION pgcrypto;
DO $$ BEGIN
 CREATE TYPE "auth_provider" AS ENUM('local', 'google');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_credential" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_name" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"password" varchar(256),
	"provider" "auth_provider" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_credential_user_name_unique" UNIQUE("user_name"),
	CONSTRAINT "user_credential_email_unique" UNIQUE("email")
);
