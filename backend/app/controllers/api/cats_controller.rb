class Api::CatsController < ApplicationController
    def index 
        if params[:breed]
            render json: [
                {
                    id: "N-94oSJ5T",
                    url: "https://cdn2.thecatapi.com/images/N-94oSJ5T.jpg",
                    width: 1920,
                    height: 1280,
                },{
                    id: "N-94oSJ5T",
                    url: "https://cdn2.thecatapi.com/images/N-94oSJ5T.jpg",
                    width: 1920,
                    height: 1280,
                }]
        else
            render json: [{
                id: "itfFA4NWS",
                url: "https://cdn2.thecatapi.com/images/itfFA4NWS.jpg",
                width: 1280,
                height: 914,
            },
            {
                id: "0XYvRd7oD",
                url: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
                width: 1204,
                height: 1445,
            },]
        end
                    
        #         else
        # render json: [
            
        #     {
        #         id: "9x1zk_Qdr",
        #         url: "https://cdn2.thecatapi.com/images/9x1zk_Qdr.jpg",
        #         width: 1204,
        #         height: 1107,
        #     },
        #     {
        #         id: "Kq8__jmkT",
        #         url: "https://cdn2.thecatapi.com/images/Kq8__jmkT.jpg",
        #         width: 1527,
        #         height: 1286,
        #     },
        #     {
        #         id: "TGuAku7fM",
        #         url: "https://cdn2.thecatapi.com/images/TGuAku7fM.jpg",
        #         width: 1920,
        #         height: 1279,
        #     },
        #     {
        #         id: "p6x60nX6U",
        #         url: "https://cdn2.thecatapi.com/images/p6x60nX6U.jpg",
        #         width: 1032,
        #         height: 774,
        #     },
        #     {
        #         id: "tv8tNeYaU",
        #         url: "https://cdn2.thecatapi.com/images/tv8tNeYaU.jpg",
        #         width: 1600,
        #         height: 1200,
        #     },
        #     {
        #         id: "g1j3wRjgx",
        #         url: "https://cdn2.thecatapi.com/images/g1j3wRjgx.jpg",
        #         width: 1024,
        #         height: 1024,
        #     },
        # ];
        # end
    end
end
