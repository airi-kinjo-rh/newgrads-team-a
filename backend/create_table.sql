CREATE TABLE jira_table (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    `date` DATE NOT NULL,
    `total` INT UNSIGNED,
    `backlog` INT UNSIGNED,
    `in-progress` INT UNSIGNED,
    `in-check` INT UNSIGNED,
    `on-review` INT UNSIGNED,
    `done` INT UNSIGNED,
    `total-progress-rate` FLOAT UNSIGNED,
    `eng-progress-rate` FLOAT UNSIGNED,
    `date-to-all-in` INT UNSIGNED,
    `outstanding` INT UNSIGNED,
    `wip` INT UNSIGNED,
    `ideal-progress-rate` FLOAT UNSIGNED,
    `num-testers` INT UNSIGNED,
    `additional-testers` INT UNSIGNED,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` DATETIME
);
