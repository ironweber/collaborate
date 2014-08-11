class ChangeItemColumnNames < ActiveRecord::Migration
  def change
      rename_column :items, :title, :description
      rename_column :items, :link, :url
  end
end
