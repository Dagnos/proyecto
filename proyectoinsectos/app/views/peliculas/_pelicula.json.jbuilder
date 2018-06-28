json.extract! pelicula, :id, :nombre, :año, :synopsis, :categoria, :calidad, :url, :created_at, :updated_at
json.url pelicula_url(pelicula, format: :json)
