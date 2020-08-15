class Api::CatsController < ApplicationController
    require 'open-uri'

    def index 
        url = URI.parse('https://api.thecatapi.com/v1/images/search')
        
        query = {
            limit: 10,
            api_key: "d57500fc-1283-4a86-b369-4d3ab4539425"
        }

        query[:breed_id] = params[:breed] if params[:breed]
        query[:category_ids] = params[:category] if params[:category]
        url.query = URI.encode_www_form(query)
        
        render json: url.read
    end
end
