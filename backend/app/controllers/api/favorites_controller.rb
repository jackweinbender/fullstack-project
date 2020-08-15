class Api::FavoritesController < ApplicationController
    protect_from_forgery only: :index

    # No sense in extracting any of this to concerns, they're simple enough.
    # Although I didn't implement and auth/user functionality, I've 
    # included a user_id field anyway.

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
        Favorite.find_by({image_id: params[:id], user_id: 1}).destroy
        render json: Favorite.where(user_id: 1).pluck(:image_id)
    end

end
