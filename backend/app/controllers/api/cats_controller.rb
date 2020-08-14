class Api::CatsController < ApplicationController
    def index 
        render json: ["CATS"]
    end
end
