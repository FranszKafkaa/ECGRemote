-- Database export via SQLPro (https://www.sqlprostudio.com/allapps.html)
-- Exported by marcelojanke at 13-04-2021 17:57.
-- WARNING: This file may contain descructive statements such as DROPs.
-- Please ensure that you are running the script at the proper location.

-- BEGIN TABLE req_txt_log
DROP TABLE IF EXISTS req_txt_log;
CREATE TABLE `req_txt_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_arquivo` varchar(45) NOT NULL,
  `data_arquivo` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `caminho_arquivo` text NOT NULL,
  `ip` varchar(15) NOT NULL,
  `json_data` text NOT NULL,
  `user_agent` text NOT NULL,
  `StatusCode` int NOT NULL,
  `rota` varchar(20) NOT NULL,
  `method` varchar(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=984 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- END TABLE req_txt_log

-- BEGIN TABLE user_data
DROP TABLE IF EXISTS user_data;
CREATE TABLE `user_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_req` varchar(20) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `json_data` text NOT NULL,
  `user_agent` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Inserting 52 rows into user_data
-- Insert batch #1

-- END TABLE user_data