class Api::GroupsController < ApplicationController
  before_action :set_group, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token
  # GET /groups
  # GET /groups.json
  def index
    @groups = Group.all
    render json: @groups
  end

  # GET /groups/1
  # GET /groups/1.json
  def show
    render json: Group.find(params[:id])
  end

  # GET /groups/new
  def new
    @group = Group.new
  end

  # GET /groups/1/edit
  def edit
  end

  # POST /groups
  # POST /groups.json
  def create
    @group = Group.new(group_params)

    if @group.save
      render json: @group
    else
      head :unprocessable_entity
    end
    # respond_to do |format|
    #   if @group.save
    #     format.html { redirect_to @group, notice: 'Group was successfully created.' }
    #     format.json { render :show, status: :created, location: @group }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @group.errors, status: :unprocessable_entity }
    #   end
    # end

  end

  # PATCH/PUT /groups/1
  # PATCH/PUT /groups/1.json
  def update
    # respond_to do |format|
    #   if @group.update(group_params)
    #     format.html { redirect_to @group, notice: 'Group was successfully updated.' }
    #     format.json { render :show, status: :ok, location: @group }
    #   else
    #     format.html { render :edit }
    #     format.json { render json: @group.errors, status: :unprocessable_entity }
    #   end
    # end
    if @group.update(group_params)
      render json: @group
    else
      head :unprocessable_entity
    end
  end

  # DELETE /groups/1
  # DELETE /groups/1.json
  def destroy
    @group.destroy
    head :no_content
    # respond_to do |format|
    #   format.html { redirect_to groups_url, notice: 'Group was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group
      @group = Group.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def group_params
      params.require(:group).permit(:title)
    end
end
