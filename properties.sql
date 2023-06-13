-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema property_search
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `property_search` ;

-- -----------------------------------------------------
-- Schema property_search
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `property_search` ;
USE `property_search` ;

-- -----------------------------------------------------
-- Table `property_search`.`properties`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `property_search`.`properties` ;

CREATE TABLE IF NOT EXISTS `property_search`.`properties` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `beds` INT NOT NULL,
  `baths` INT NOT NULL,
  `sqft` INT NOT NULL,
  `status` VARCHAR(45) NULL DEFAULT 'new',
  `isJaylinFriendly` TINYINT NOT NULL DEFAULT 0,
  `url` VARCHAR(600) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
