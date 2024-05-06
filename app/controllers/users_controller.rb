class UsersController < ApplicationController
  def sign_in
  end

  def create_session
    user = User.find_by(username: params[:user][:username])
    if user&.authenticate(params[:user][:password])
      login(user)
      redirect_to root_path, notice: "Logged in successfully"
    else
      redirect_to sign_in_users_path, alert: "Invalid email or password"
    end
  end

  def sign_out
    logout
    redirect_to root_path, notice: "Logged out successfully"
  end
end
