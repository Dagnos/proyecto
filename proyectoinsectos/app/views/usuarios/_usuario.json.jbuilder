json.extract! usuario, :id, :usuario, :contraseña, :nombres, :apellidos, :correo, :edad, :created_at, :updated_at
json.url usuario_url(usuario, format: :json)
