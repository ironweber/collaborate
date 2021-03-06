Collaborate::Application.routes.draw do
  resources :items

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  devise_for :users,
    :skip => [:sessions, :registrations, :passwords] 
    as :user do
        get 'signin' => 'devise/sessions#new', :as => :new_user_session
        post 'signin' => 'devise/sessions#create', :as => :user_session
        delete 'logout' => 'devise/sessions#destroy', :as => :destroy_user_session
        get 'signup' => 'registrations#new', :as => :new_user_registration
        post 'signup' => 'registrations#create', :as => :user_registration
        delete 'signup' => 'devise/registrations#destroy', :as => :delete_user_registration
        get 'account/edit' => 'devise/registrations#edit', :as => :edit_user_registration
        put 'account/edit' => 'registrations#update'
        get 'forgot-password' => 'devise/passwords#new', :as => :new_user_password
        post 'forgot-password' => 'devise/passwords#create', :as => :user_password
        get 'reset-password' => 'devise/passwords#edit', :as => :edit_user_password
        patch 'reset-password' => 'devise/passwords#update'
        put 'reset-password' => 'devise/passwords#update'
    end


  # You can have the root of your site routed with "root"
  root 'home#index'

  get "/404", :to => "errors#not_found"
  get "/422", :to => "errors#unacceptable"
  get "/500", :to => "errors#internal_error"


  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end
  
  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
