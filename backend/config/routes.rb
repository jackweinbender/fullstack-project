Rails.application.routes.draw do
  namespace :api do
    resources :cats, only: [:index]
    resources :breeds, only: [:index]
    resources :categories, only: [:index]
    resources :favorites, only: [:index, :create, :destroy]
  end
end
