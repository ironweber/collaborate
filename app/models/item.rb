class Item < ActiveRecord::Base
	validates :url, :presence => true
    validates :description, :presence => true
end
