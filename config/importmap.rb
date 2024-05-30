# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@fortune-sheet/react", to: "@fortune-sheet--react.js" # @0.19.7
pin "@formulajs/formulajs", to: "@formulajs--formulajs.js" # @2.9.3
pin "@fortune-sheet/core", to: "@fortune-sheet--core.js" # @0.19.7
pin "@fortune-sheet/formula-parser", to: "@fortune-sheet--formula-parser.js" # @0.2.11
pin "bessel" # @1.0.2
pin "dayjs" # @1.11.11
pin "jstat" # @1.9.6
pin "numeral" # @2.0.6
pin "react" # @18.3.1
pin "tiny-emitter" # @2.1.0
pin "uuid" # @8.3.2
pin "react-dom/client", to: "react-dom--client.js" # @18.3.1
pin "react-dom" # @18.3.1
pin "scheduler" # @0.23.2

# Using Skypack to fix resolution errors by resolving dependencies via CDN
# pin "immer" # @9.0.21
# fixes process is not defined error:
pin "immer", to: "https://cdn.skypack.dev/immer@9.0.21"
# pin "lodash" # @4.17.21
# fixes isPlainObject import error:
pin "lodash", to: "https://cdn.skypack.dev/lodash@4.17.21"
pin "turbo-mount", to: "turbo-mount.min.js"
pin "turbo-mount-initializer"
pin "turbo-mount/react", to: "turbo-mount/react.min.js"
pin "react-colorful" # @5.6.1
