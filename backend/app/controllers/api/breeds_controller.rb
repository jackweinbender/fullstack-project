class Api::BreedsController < ApplicationController
    def index 
        render json: ["Breed 1", "Breed 2", "Breed 3", "Breed 4", "Breed 5", ]
    end
end
