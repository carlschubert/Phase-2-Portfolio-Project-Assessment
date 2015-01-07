class Game < ActiveRecord::Base
  belongs_to :user
  belongs_to :match
  # Remember to create a migration!
end
