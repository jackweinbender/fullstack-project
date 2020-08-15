class Api::BreedsController < ApplicationController
    def index 
        url = URI.parse('https://api.thecatapi.com/v1/breeds')

        breeds = JSON.parse(url.read).map{ |breed|
            { id: breed["id"], name: breed["name"] }
        }

        render json: breeds
    end
end
