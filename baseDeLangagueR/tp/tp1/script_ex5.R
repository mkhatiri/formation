# ----------------- Lecture des donnees
don <-read.table("poidsTaille.txt",header=TRUE)[,2:5]

# ----------Ajustement de la loi

x11()
hist(POIDS,pr=T,col="lightblue",border="white",main="Histogramme de POIDS",cex.main=1.2)
lines(density(X1),col="blue",lwd=2)

x11()
boxplot(POIDS,horizontal = TRUE,col="orange",main="Boxplot de POIDS",cex.main=1.2)

x11()
plot(ecdf(POIDS),verticals=TRUE,do.points=FALSE,lwd=2,main="CDF empirique de POIDS",cex.main=1.2)

# ----------------------- Estimation
# Loi lognormale
fit_LN <- fitdistr(POIDS,"lognormal")
names(fit_LN)
param_LN <- fit_LN$estimate


# Loi normale
fit_N <- fitdistr(POIDS,"normal")
names(fit_N)
param_N <- fit_N$estimate

# --------------------- Ajustement graphique
x11()
hist(POIDS,pr=T,col="lightblue",border="white",ylim=c(0,0.45),main="Histogramme de POIDS",cex.main=1.2)
lines(seq(0,10,le=100),dlnorm(seq(0,10,le=100),param_LN[1],param_LN[2]),lwd=2,col="blue")
#curve(dlnorm(x,param_LN[1],param_LN[2]),add=T,lwd=2,col="blue") # mÍme chose que ligne precedante mais point par point
lines(seq(0,10,le=100),dnorm(seq(0,10,le=100),param_N[1],param_N[2]),lwd=2,col="red")
#curve(dnorm(x,param_N[1],param_N[2]),add=T,lwd=2,col="red") # mÍme chose que ligne precedante mais point par point
legend("topright",col=c("blue","red"),lty=c(1,1),lwd=c(2,2),c("loi lognormale","loi normale"))

x11()
plot(ecdf(POIDS),verticals=TRUE,do.points=FALSE,lwd=2,main="CDF empirique de X1",cex.main=1.2)
lines(seq(0,10,le=100),plnorm(seq(0,10,le=100),param_LN[1],param_LN[2]),lwd=2,col="blue")
#curve(plnorm(x,param_LN[1],param_LN[2]),add=T,lwd=2,col="blue") # mÍme chose que ligne precedante mais point par point
lines(seq(0,10,le=100),pnorm(seq(0,10,le=100),param_N[1],param_N[2]),lwd=2,col="red")
#curve(pnorm(x,param_N[1],param_N[2]),add=T,lwd=2,col="red") # mÍme chose que ligne precedante mais point par point
legend("topleft",col=c("blue","red"),lty=c(1,1),lwd=c(2,2),c("loi lognormale","loi normale"))

# ---------------Regression lineaire

POIDS <- as.numeric(don$POIDS)
TAILLE <- as.numeric(don$TAILLE)

formule1 <- POIDS ~ TAILLE
fit1 <- lm(formule1)
summary(fit1)
x11()
par(mfrow = c(2, 2))
plot(fit1)

x11()
plot(TAILLE,POIDS)
points(TAILLE,predict(fit1),col="blue")
abline(0,1)