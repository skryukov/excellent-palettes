user = User.find_or_create_by!(username: "user") do |u|
  u.password = "qwerty"
end

Palette.find_or_create_by!(user:, name: "Rainbow Road Rage") do |palette|
  palette.colors = %w[#FF00FF #00FFFF #FFFF00 #00FF00 #FF0000]
end

Palette.find_or_create_by!(user:, name: "Beige Bonanza") do |palette|
  palette.colors = %w[#F5F5DC #D2B48C #FFF8DC #F0E68C #E6E6FA]
end

Palette.find_or_create_by!(user:, name: "Comic Sans Carnival (use with Comic Sans font)") do |palette|
  palette.colors = %w[#FFC0CB #FFA500 #FFFF00 #008000 #0000FF]
end

Palette.find_or_create_by!(user:, name: "Pastel Purgatory") do |palette|
  palette.colors = %w[#FFD1DC #FFA07A #FFD700 #98FB98 #00FFFF]
end

Palette.find_or_create_by!(user:, name: "Neon Nightmare") do |palette|
  palette.colors = %w[#00FF00 #000080 #FF00FF #FFA500 #FFFF00]
end

Palette.find_or_create_by!(user:, name: "Black & White & Bland All Over") do |palette|
  palette.colors = %w[#000 #FFF #000 #FFF #000]
end
