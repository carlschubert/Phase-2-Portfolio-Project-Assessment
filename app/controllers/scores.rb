post '/scores' do
  p params
  game_params = {}
  params[:game].each do |key, value|
      game_params[key] = value
  end
  p game_params
  game = Game.new(game_params)
  game.user = current_user
  game.match = Match.last
  game.save
end

