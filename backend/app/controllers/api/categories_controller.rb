class Api::CategoriesController < ApplicationController
    def index 
        url = URI.parse('https://api.thecatapi.com/v1/categories')
        render json: url.read
    end
end
