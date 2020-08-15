class Api::FavoritesController < ApplicationController

    def index 
        render json: Favorite.where(user_id: 1)
    end

    def create
        Favorite.new(params).save
        render json: Favorite.where(user_id: 1)
    end

    def destroy
        Favorite.find(params[:id]).destroy
        render json: Favorite.where(user_id: 1)
    end

end
