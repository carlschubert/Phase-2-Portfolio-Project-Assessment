post '/play' do
  match = Match.new(params[:article])
  match.user = current_user
  match.save
  erb :play
end

