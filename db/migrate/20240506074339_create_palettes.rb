class CreatePalettes < ActiveRecord::Migration[7.1]
  def change
    create_table :palettes do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name, null: false
      t.text :colors, null: false

      t.timestamps
    end
  end
end
