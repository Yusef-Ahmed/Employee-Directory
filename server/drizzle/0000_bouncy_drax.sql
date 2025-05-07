CREATE TABLE `departments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(40) NOT NULL,
	CONSTRAINT `departments_id` PRIMARY KEY(`id`),
	CONSTRAINT `departments_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `employees` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fullName` varchar(20) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phoneNumber` varchar(15) NOT NULL,
	`status` boolean NOT NULL DEFAULT false,
	`departmentId` int,
	`jobTitleId` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp,
	`createdBy` int NOT NULL,
	`updatedBy` int,
	CONSTRAINT `employees_id` PRIMARY KEY(`id`),
	CONSTRAINT `employees_email_unique` UNIQUE(`email`),
	CONSTRAINT `employees_phoneNumber_unique` UNIQUE(`phoneNumber`)
);
--> statement-breakpoint
CREATE TABLE `hrs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fullName` varchar(20) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	CONSTRAINT `hrs_id` PRIMARY KEY(`id`),
	CONSTRAINT `hrs_fullName_unique` UNIQUE(`fullName`),
	CONSTRAINT `hrs_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `job_titles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(40) NOT NULL,
	CONSTRAINT `job_titles_id` PRIMARY KEY(`id`),
	CONSTRAINT `job_titles_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
ALTER TABLE `employees` ADD CONSTRAINT `employees_departmentId_departments_id_fk` FOREIGN KEY (`departmentId`) REFERENCES `departments`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `employees` ADD CONSTRAINT `employees_jobTitleId_job_titles_id_fk` FOREIGN KEY (`jobTitleId`) REFERENCES `job_titles`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `employees` ADD CONSTRAINT `employees_createdBy_hrs_id_fk` FOREIGN KEY (`createdBy`) REFERENCES `hrs`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `employees` ADD CONSTRAINT `employees_updatedBy_hrs_id_fk` FOREIGN KEY (`updatedBy`) REFERENCES `hrs`(`id`) ON DELETE no action ON UPDATE no action;