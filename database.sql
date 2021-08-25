-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 25 août 2021 à 16:25
-- Version du serveur : 10.4.20-MariaDB
-- Version de PHP : 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `football`
--
CREATE DATABASE IF NOT EXISTS `football` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `football`;

-- --------------------------------------------------------

--
-- Structure de la table `games`
--

CREATE TABLE `games` (
  `id` int(6) NOT NULL,
  `team1Id` int(6) NOT NULL,
  `team2Id` int(6) NOT NULL,
  `team1Score` int(6) NOT NULL,
  `team2Score` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `games`
--

INSERT INTO `games` (`id`, `team1Id`, `team2Id`, `team1Score`, `team2Score`) VALUES
(1, 2, 3, 2, 1),
(4, 3, 2, 0, 3),
(10, 4, 3, 3, 2),
(18, 22, 4, 5, 10),
(19, 3, 4, 8, 4),
(20, 4, 22, 6, 2);

-- --------------------------------------------------------

--
-- Structure de la table `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `country` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `players`
--

INSERT INTO `players` (`id`, `name`, `country`) VALUES
(1, 'Auguste', 'France'),
(2, 'Dany', 'Switzerland'),
(3, 'Arthur', 'Greece'),
(4, 'Greg', 'Switzerland'),
(5, 'Ricky', 'Russia'),
(6, 'Tony', 'Italia'),
(7, 'Georges', 'Belgium'),
(8, 'Fikate', 'Japan'),
(9, 'Kim', 'South Korea'),
(19, 'John', 'Austria'),
(20, 'Richard', 'Sweden'),
(21, 'Frank', 'Canada');

-- --------------------------------------------------------

--
-- Structure de la table `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `player1Id` int(11) DEFAULT NULL,
  `player2Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `teams`
--

INSERT INTO `teams` (`id`, `name`, `player1Id`, `player2Id`) VALUES
(1, 'Knicks', 2, 4),
(2, 'Pistons', 1, 8),
(3, 'Lakers', 5, 6),
(4, 'Raptors', 3, NULL),
(22, 'Bucks', 9, 19);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team1Id` (`team1Id`),
  ADD KEY `team2Id` (`team2Id`);

--
-- Index pour la table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `players`
--
ALTER TABLE `players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
