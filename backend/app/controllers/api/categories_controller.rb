class Api::CategoriesController < ApplicationController
    def index 
        render json: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", ]
    end
end
