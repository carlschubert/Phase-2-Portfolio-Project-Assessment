get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/index' do
  erb :index
end

get '/about' do
  erb :about
end

