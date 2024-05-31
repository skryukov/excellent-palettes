class PalettesController < ApplicationController
  before_action :set_palette, only: %i[ show edit update destroy ]
  before_action :authorize_owner, only: %i[ edit update destroy ]

  # GET /palettes
  def index
    @palettes = Palette.eager_load(:user).all
  end

  # GET /palettes/1
  def show
  end

  # GET /palettes/new
  def new
    @palette = Palette.new
  end

  # GET /palettes/1/edit
  def edit
  end

  # POST /palettes
  def create
    @palette = Palette.new(palette_params.merge(user: current_user))

    if @palette.save
      redirect_to @palette, notice: "Palette was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /palettes/1
  def update
    if @palette.update(palette_params)
      redirect_to @palette, notice: "Palette was successfully updated.", status: :see_other
    else
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /palettes/1
  def destroy
    @palette.destroy!
    redirect_to palettes_url, notice: "Palette was successfully destroyed.", status: :see_other
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_palette
      @palette = Palette.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def palette_params
      params.require(:palette).permit(:name).merge({colors: params[:palette][:colors]&.split(" ") || [] })
    end

    def authorize_owner
      redirect_to root_path, alert: "You are not authorized to perform this action" unless @palette.user == current_user
    end
end
