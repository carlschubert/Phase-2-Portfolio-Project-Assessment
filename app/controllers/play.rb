get '/play/new', auth: :user do |id|
  erb :play
end

