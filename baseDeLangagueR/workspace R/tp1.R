#preier tp 2.2 Vecteur, matrice, tableau
#2.2.1 Créer un vecteur

d <- 4
e <- 12
y1 <- 1:12
y2 <- rep(c(d,d**d,sqrt(d)), each=3)
y2
y3 <- seq(1,20, by = 2)
y3
y4 <- seq(1,30, length = 10)
y4


Z1 <- matrix(1:12, byrow = T, nrow = 3)
Z1
Z2 <- matrix(1:12, byrow = T, nrow = 6, ncol = 4)
Z2
Z3 <- cbind(Z1,Z1)
Z3
Z1
Z1[1,3]
Z1[1,]

W = matrix(1:12, ncol=3, byrow = T)
W
V = c(1,5,9)
V

Z1%*%W
Z1+W
Z1*V
Z1%*%V


typeof(ethanol)

apply(ethanol, MARGIN = 2,  quantile)
summary(ethanol)

min(ethanol)

ethanol[3,]


a=1:4



som <- function(n , b){
  result <- sum(n:b)
  return(result)
  
}

  
a <- som(3,6)
a
a=5
a

