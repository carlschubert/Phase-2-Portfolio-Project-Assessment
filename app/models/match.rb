class Match < ActiveRecord::Base
  belongs_to :user
  has_many :games
  # Remember to create a migration!
end
