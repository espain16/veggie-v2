# register

## Post
==========
route /auth/register
==========
state={username, password}

# login 

## Post
===========
/auth/login
===========

state={username, password}



=============================================
# Food truck
=============================================

## get

=========================
/foodtruck
========================

## get By Id

=========================
/foodtruck/:id
========================


## post

=========================
/foodtruck/
========================

* post by
  * Name
  * Type




## put

=========================
/foodtruck/:id
========================

* post by
  * id
  * req.body  which is the the state

==============
### delete
==============
/foodtruck/:id



  
=============================================
# GeneralDashboard
=============================================

## get

=========================
/Allgeneraldashboard/
========================

## get By Id

=========================
/Allgeneraldashboard/:id
========================






=============================================
# Rate
=============================================
## get 

=========================
/Allrate
========================


## get

=========================
/rate
========================

## get By Id

=========================
/rate/:id
========================


## post

=========================
/rate/
========================

* post by
  * rating
  * comments
  * ft_id
  *user_id
  *restaurant_id




## put

=========================
/rate/:id
========================

* put by
  * id
  * req.body  which is the the state






=============================================
# Restaurant
=============================================

## get

=========================
/restaurant
========================

## get By Id

=========================
/restaurant/:id
========================


## post

=========================
/restaurant/
========================

* post by
  * Name
  * Type
  * City




## put

=========================
/restaurant/:id
========================

* put by
  * id
  * req.body  which is the the state

==============
### delete
==============
/restaurant/:id


