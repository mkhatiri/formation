prodVect <- function(v,w)
{   
     if (! (is.numeric(v) & is.numeric(w)) )
       stop("v et w doivent etre numeriques")
  
     z <- v*w
  return(z)
}