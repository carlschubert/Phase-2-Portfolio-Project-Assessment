get '/scores/:id' do |id|
  @user = User.find(id)
  @games = @user.games
  @matches = @user.matches
  erb :scores
end