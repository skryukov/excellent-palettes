Rails.application.routes.draw do
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  root "palettes#index"

  resources :palettes
  resources :users, only: %i[] do
    get :sign_in, on: :collection
    post :session, to: "users#create_session", on: :collection
    delete :sign_out, on: :collection
  end
end
