class Usuario
  include Mongoid::Document
  include Mongoid::Timestamps

  field :usuario, type: String
  field :contraseña, type: String
  field :nombres, type: String
  field :apellidos, type: String
  field :correo, type: String
  field :edad, type: Integer
end
