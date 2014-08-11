class RegistrationsController < Devise::RegistrationsController
    # before_filter do |c| c.is_admin("/") end

    def after_update_path_for(resource)
      :edit_user_registration
    end
end
