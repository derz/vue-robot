// vite.config.js
const path = require('path')

module.exports = {
	build: {
		lib: {
			entry: path.resolve(__dirname, 'index.js'),
			name: 'vue-robot'
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
}
