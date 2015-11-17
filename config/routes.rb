Rails.application.routes.draw do
 	#pages system
  	get 'pages/home' => 'pages#home'
  	get 'pages/portfolio' => 'pages#portfolio'
  	get 'pages/about' => 'pages#about'
  	root 'pages#home'
  	
end
