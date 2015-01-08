get '/login' do
  if request.xhr?
    erb :'auth/login', layout: false
  else
  erb :'auth/login'
  end
end

get '/signup' do
  if request.xhr?
    erb :'auth/signup', layout: false
  else
  erb :'auth/signup'
  end
end

get '/logout' do
  session[:user_id] = nil
  redirect '/index'
end

post '/login' do
  user = User.find_by(name: params[:user][:name])

  if user && user.authenticate(params[:user][:password])
    session[:user_id] = user.id
    redirect '/index'
  else
    redirect '/login'
  end
end

post '/signup' do
  params[:user][:admin] = false
  User.create(params[:user])
  redirect '/index'
end