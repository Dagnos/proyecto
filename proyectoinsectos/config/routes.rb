Rails.application.routes.draw do
  resources :peliculas
  resources :usuarios

  root 'peliculas#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
