class CreateMatch < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.boolean :winner
      t.integer :user_id
      t.timestamps
    end
  end
end
