Rails.application.routes.draw do
  resources :tickets, only: [:create]
  resources :users, only: [:show, :create]
  # resources :cast_members
  resources :productions, only: [ :index, :show, :create, :update, :destroy]
  # Custome Route
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/authorized', to: 'users#show'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
