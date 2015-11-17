Rails.application.routes.draw do
 	#pages system
  	get '/home' => 'pages#home'
  	root 'pages#home'
  	
end
