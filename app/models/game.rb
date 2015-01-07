class Game < ActiveRecord::Base
  belongs_to :user
  belongs_to :set
  # Remember to create a migration!
end
