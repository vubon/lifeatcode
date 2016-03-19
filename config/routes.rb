Rails.application.routes.draw do
 	#pages system
  	get '/home' => 'pages#home'
  	get '/portfolio' => 'pages#portfolio'
  	get '/about' => 'pages#about'
  	
  	root 'pages#home'
  	
  	#contact page 
  	match '/contacts', to: 'contacts#new', via: 'get'
    resources "contacts", only: [:new, :create]
  	
end
