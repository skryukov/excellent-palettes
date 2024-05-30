class Palette < ApplicationRecord
  belongs_to :user

  serialize :colors, coder: JSON, type: Array, default: []

  validates :name, presence: true, uniqueness: true
  validates :colors, presence: true, length: { is: 5 }, uniqueness: true

  after_initialize :set_colors

  private

  def set_colors
    self.colors = Array.new(5) { '#' + SecureRandom.hex(3) } unless self.colors.present?
  end
end
