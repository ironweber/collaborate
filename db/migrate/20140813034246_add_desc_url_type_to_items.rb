class AddDescUrlTypeToItems < ActiveRecord::Migration
  def change
    add_column :items, :description, :string
    add_column :items, :url, :string
    add_column :items, :type, :string
  end
end
