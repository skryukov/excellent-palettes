class ApplicationController < ActionController::Base

  def current_user
    Current.user ||= session[:user_id] && User.find_by(id: session[:user_id])
  end
  helper_method :current_user

  def login(user)
    reset_session
    session[:user_id] = user.id
    Current.user = user
  end

  def logout
    reset_session
    Current.user = nil
  end
end
