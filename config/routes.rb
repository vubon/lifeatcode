Rails.application.routes.draw do
 	#pages system
  	get '/home' => 'pages#home'
  	get '/portfolio' => 'pages#portfolio'
  	get '/about' => 'pages#about'
  	root 'pages#home'
  	
end
