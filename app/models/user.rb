class User < ActiveRecord::Base
  has_secure_password
  has_many :games
  has_many :sets

  # Remember to create a migration!
end
