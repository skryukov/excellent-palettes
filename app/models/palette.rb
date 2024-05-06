class Palette < ApplicationRecord
  belongs_to :user

  serialize :colors, coder: JSON, type: Array, default: []

  validates :name, presence: true, uniqueness: true
  validates :colors, presence: true, length: { is: 5 }, uniqueness: true
end
