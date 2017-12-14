# Manipulation d'objet R

# creer des vecteurs
d<-4
e=12
y1 <- 1:12
y2 <-rep(c(d,d^2,sqrt(d)),c(3,3,3))
y3 <- seq(1,20,2)
y4 <- seq(1,30,length=10)

# Creer des matrices
Z1 <- matrix(y1,nrow=3,byrow=T)
Z2 <- rbind(Z1,Z1)
Z3 <- cbind(Z1,Z1)

# Afficher
Z1[1,3]
Z1[1,] # premiere ligne

# Operations

W<-matrix(y1,nrow=4,byrow=T)
V <-c(1,5,9)

Z1%*%W # produit matriciel

# Fonction et liste
prodsom <- function(V1,V2)
{Vprod <- V1*V2
 Vsomme <- V1 + V2
 res <- list(prod=Vprod,somme=Vsomme)
 return(res)
}

V1 <- seq(1,20,2)
V2 <- 2*c(1:10)
 V<-prodsom(V1,V2)

names(V)
V$prod
V$somme