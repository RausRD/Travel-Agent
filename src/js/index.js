// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import autoCompleteFunc from './modules/autocomplete'
autoCompleteFunc()

// Calendar
import { easepick } from '@easepick/core'
import { TimePlugin } from '@easepick/time-plugin'

const picker = new easepick.create({
	element: document.getElementById('datepicker'),
	css: [
		'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
		'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
	],
	// format: 'HH:mm, DD/MM/YY',
	zIndex: 10,
	plugins: [TimePlugin],
})
