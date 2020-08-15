class Api::FavoritesController < ApplicationController
    protect_from_forgery only: :index
    def index 
        render json: Favorite.where(user_id: 1).pluck(:image_id)
    end

    def create
        Favorite.new({
            user_id: 1,
            image_id: params[:id],
        }).save
        render json: Favorite.where(user_id: 1).pluck(:image_id)
    end

    def destroy
        Favorite.find_by(image_id: params[:id]).destroy
        render json: Favorite.where(user_id: 1).pluck(:image_id)
    end

end
