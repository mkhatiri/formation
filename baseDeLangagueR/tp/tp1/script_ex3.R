#
# Script des TP d'introduction  a R
#
# Section 3: manipulation de donnees - distribution   
#
# TP de base
#
# Utilisation de package
# Menu "Package" RStudio
library(sensitivity)

# Contenu du package
library(help=sensitivity)

# Aide sur une fonction du package charge
help(sobol)

#
## Utilisation d'un echantillon stocke dans un fichier texte sur disque
## ---------------------------------------------------------------------
don <-read.table("poidsTaille.txt",header=TRUE)[,2:5]

class(don)   # data.frame
# Attributs de ce dataframe
attributes(don)
names(don) # nom des variables 

dim(don) # (nxp): n observations x P variables
dim(don)[1] # Taille de l'échantillon

# Visualiser les données
View(don) # Cliquer sur don dans la fenetre workspace

# Class et mode des variables contenues dans l'echantillon
class(don$GENRE)  # facteur
mode(don$GENRE)   # numeric
class(don$AGE)   # integer
mode(don$AGE)

# Le poids et la taille seront traites comme des variables numeriques (quantitatives)
don$TAILLE <- as.numeric(don$TAILLE)
don$POIDS <- as.numeric(don$POIDS)

# Statistiques de base
summary(don)

mean(don$TAILLE) # Moyenne
range(don$TAILLE) # etendue 
median(don$TAILLE) # mediane
quantile(don$TAILLE) # quantile
var(don$TAILLE) # variance

var_sb <- function(x) {
  n<- length(x)
  var(x)*n/(n-1)}

v_nb_taille <-var_sb(don$TAILLE)

# Histogramme
n <- 20
par(mfrow=c(1,2))
hist(don$POIDS,breaks=n,main='Histogramme des Poids',xlab='POIDS')
hist(don$TAILLE,breaks=n,main='Histogramme des Tailles',xlab='TAILLE')

# Extraire
# ----------
# la deuxieme ligne
don[2,]
#  la troisième colonne
don[,3]
# les lignes 1, 2 et 4
don[c(1,2,4),]
# les lignes 3 à 6 avec la commande :
don[3:6,]
#  tout sauf les colonnes 1 et 2
don[,-c(1,2)]
# toutes les lignes ayant une AGE supérieure à 70mois
don[don$AGE >70,]

#
# Reperer les donnees manquantes
# --------------------------------
# Echantillon
set.seed(23)
var <- rnorm(15,mean=0,sd=1)
var[c(7,8,14)] <- NA
#
# Identifier les données manquantes
select <- is.na(var)
which(select)
# Eliminer les individus ayant une donnée manquante
var2 <- var[!select]


