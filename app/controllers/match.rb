put '/match' do
  match_params = params[:match][:winner]
  match = Match.last
  match.winner = match_params
  match.save
end


post '/match' do
  match = Match.new()
  match.user = current_user
  match.save
  erb :match
end