class CreateGame < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :score
      t.integer :compscore
      t.boolean :winner
      t.integer :user_id
      t.integer :match_id
      t.timestamps
    end
  end
end
