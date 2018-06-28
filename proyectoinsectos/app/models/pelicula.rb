class Pelicula
  include Mongoid::Document
  field :nombre, type: String
  field :año, type: Date
  field :synopsis, type: String
  field :categoria, type: String
  field :calidad, type: String
  field :url, type: String
end
