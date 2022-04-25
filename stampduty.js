/* Stamp Duty Calculator Widget v1.5 */

function cw_sdlt_format_price(number_to_format) {
	number_to_format += '';
	x = number_to_format.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function cw_sdlt_calculate() {
	var is_secondary = document.getElementById('cw_sdlt_secondary').checked;
	var is_first_time_buyer = document.getElementById('cw_sdlt_first_time_buyer').checked;
	var is_not_uk_resident = document.getElementById('cw_sdlt_not_uk_resident').checked;
	var purchaseprice = parseInt(document.getElementById('cw_sdlt_purchaseprice').value);
	// var purchasedate = document.getElementById('cw_sdlt_purchasedate').value;

	var language_upto = 'Up to ';
		if(document.getElementById('cw-language-string-upto_label')) {
			language_upto = document.getElementById('cw-language-string-upto_label').innerHTML;
		}

	if(is_secondary) {
	// Second home or BTL
		if(is_not_uk_resident) {
			// + 2%
			var rates_30jun21 = [];
				rates_30jun21['a'] = [0, 500000, 3+2, language_upto+' &pound;500,000'];
				rates_30jun21['b'] = [500000, 925000, 8+2, '&pound;500,000 - &pound;925,000'];
				rates_30jun21['c'] = [925000, 1500000, 13+2, '&pound;925,000 - &pound;1,500,000'];
				rates_30jun21['d'] = [1500000, 999999999, 15+2, 'Above &pound;1,500,000'];

			var rates_30sep21 = [];
				rates_30sep21['a'] = [0, 250000, 3+2, language_upto+' &pound;250,000'];
				rates_30sep21['b'] = [250000, 925000, 8+2, '&pound;250,000 - &pound;925,000'];
				rates_30sep21['c'] = [925000, 1500000, 13+2, '&pound;925,000 - &pound;1,500,000'];
				rates_30sep21['d'] = [1500000, 999999999, 15+2, 'Above &pound;1,500,000'];

			var rates_1oct21 = [];
				rates_1oct21['a'] = [0, 125000, 3+2, language_upto+' &pound;125,000'];
				rates_1oct21['b'] = [125000, 250000, 5+2, '&pound;125,000 - &pound;250,000'];
				rates_1oct21['c'] = [250000, 925000, 8+2, '&pound;250,000 - &pound;925,000'];
				rates_1oct21['d'] = [925000, 1500000, 13+2, '&pound;925,000 - &pound;1,500,000'];
				rates_1oct21['e'] = [1500000, 999999999, 15+2, 'Above &pound;1,500,000'];

		} else {
			var rates_30jun21 = [];
				rates_30jun21['a'] = [0, 500000, 3, language_upto+' &pound;500,000'];
				rates_30jun21['b'] = [500000, 925000, 8, '&pound;500,000 - &pound;925,000'];
				rates_30jun21['c'] = [925000, 1500000, 13, '&pound;925,000 - &pound;1,500,000'];
				rates_30jun21['d'] = [1500000, 999999999, 15, 'Above &pound;1,500,000'];

			var rates_30sep21 = [];
				rates_30sep21['a'] = [0, 250000, 3, language_upto+' &pound;250,000'];
				rates_30sep21['b'] = [250000, 925000, 8, '&pound;250,000 - &pound;925,000'];
				rates_30sep21['c'] = [925000, 1500000, 13, '&pound;925,000 - &pound;1,500,000'];
				rates_30sep21['d'] = [1500000, 999999999, 15, 'Above &pound;1,500,000'];

			var rates_1oct21 = [];
				rates_1oct21['a'] = [0, 125000, 3, language_upto+' &pound;125,000'];
				rates_1oct21['b'] = [125000, 250000, 5, '&pound;125,000 - &pound;250,000'];
				rates_1oct21['c'] = [250000, 925000, 8, '&pound;250,000 - &pound;925,000'];
				rates_1oct21['d'] = [925000, 1500000, 13, '&pound;925,000 - &pound;1,500,000'];
				rates_1oct21['e'] = [1500000, 999999999, 15, 'Above &pound;1,500,000'];
		}
	} else if(is_first_time_buyer) {
	// First time buyer
		if(is_not_uk_resident) {
			// + 2%
			var rates_30jun21 = [];
				rates_30jun21['a'] = [0, 500000, 0+2, language_upto+' &pound;500,000'];
				rates_30jun21['b'] = [500000, 925000, 5+2, '&pound;500,000 - &pound;925,000'];
				rates_30jun21['c'] = [925000, 1500000, 10+2, '&pound;925,000 - &pound;1,500,000'];
				rates_30jun21['d'] = [1500000, 999999999, 12+2, 'Above &pound;1,500,000'];
			if(purchaseprice <= 500000) {
				var rates_30sep21 = [];
					rates_30sep21['a'] = [0, 300000, 0+2, language_upto+' &pound;300,000'];
					rates_30sep21['b'] = [300000, 500000, 5+2, '&pound;300,000 - &pound;500,000'];
			} else {
				// same as normal purchase
				var rates_30sep21 = [];
					rates_30sep21['a'] = [0, 250000, 0+2, language_upto+' &pound;250,000'];
					rates_30sep21['b'] = [250000, 925000, 5+2, '&pound;250,000 - &pound;925,000'];
					rates_30sep21['c'] = [925000, 1500000, 10+2, '&pound;925,000 - &pound;1,500,000'];
					rates_30sep21['d'] = [1500000, 999999999, 12+2, 'Above &pound;1,500,000'];
			}
			if(purchaseprice <= 500000) {
				var rates_1oct21 = [];
					rates_1oct21['a'] = [0, 300000, 0+2, language_upto+' &pound;300,000'];
					rates_1oct21['b'] = [300000, 500000, 5+2, '&pound;300,000 - &pound;500,000'];
			} else {
				// same as normal purchase
				var rates_1oct21 = [];
					rates_1oct21['a'] = [0, 125000, 0+2, language_upto+' &pound;125,000'];
					rates_1oct21['b'] = [125000, 250000, 2+2, '&pound;125,000 - &pound;250,000'];
					rates_1oct21['c'] = [250000, 925000, 5+2, '&pound;250,000 - &pound;925,000'];
					rates_1oct21['d'] = [925000, 1500000, 10+2, '&pound;925,000 - &pound;1,500,000'];
					rates_1oct21['e'] = [1500000, 999999999, 12+2, 'Above &pound;1,500,000'];
			}
		} else {
			var rates_30jun21 = [];
				rates_30jun21['a'] = [0, 500000, 0, language_upto+' &pound;500,000'];
				rates_30jun21['b'] = [500000, 925000, 5, '&pound;500,000 - &pound;925,000'];
				rates_30jun21['c'] = [925000, 1500000, 10, '&pound;925,000 - &pound;1,500,000'];
				rates_30jun21['d'] = [1500000, 999999999, 12, 'Above &pound;1,500,000'];
			if(purchaseprice <= 500000) {
				var rates_30sep21 = [];
					rates_30sep21['a'] = [0, 300000, 0, language_upto+' &pound;300,000'];
					rates_30sep21['b'] = [300000, 500000, 5, '&pound;300,000 - &pound;500,000'];
			} else {
				// same as normal purchase
				var rates_30sep21 = [];
					rates_30sep21['a'] = [0, 250000, 0, language_upto+' &pound;250,000'];
					rates_30sep21['b'] = [250000, 925000, 5, '&pound;250,000 - &pound;925,000'];
					rates_30sep21['c'] = [925000, 1500000, 10, '&pound;925,000 - &pound;1,500,000'];
					rates_30sep21['d'] = [1500000, 999999999, 12, 'Above &pound;1,500,000'];
			}
			if(purchaseprice <= 500000) {
				var rates_1oct21 = [];
					rates_1oct21['a'] = [0, 300000, 0, language_upto+' &pound;300,000'];
					rates_1oct21['b'] = [300000, 500000, 5, '&pound;300,000 - &pound;500,000'];
			} else {
				// same as normal purchase
				var rates_1oct21 = [];
					rates_1oct21['a'] = [0, 125000, 0, language_upto+' &pound;125,000'];
					rates_1oct21['b'] = [125000, 250000, 2, '&pound;125,000 - &pound;250,000'];
					rates_1oct21['c'] = [250000, 925000, 5, '&pound;250,000 - &pound;925,000'];
					rates_1oct21['d'] = [925000, 1500000, 10, '&pound;925,000 - &pound;1,500,000'];
					rates_1oct21['e'] = [1500000, 999999999, 12, 'Above &pound;1,500,000'];
			}
		}
	} else {
	// Normal purchase
		if(is_not_uk_resident) {
			// + 2%
			var rates_30jun21 = [];
				rates_30jun21['a'] = [0, 500000, 0+2, language_upto+' &pound;500,000'];
				rates_30jun21['b'] = [500000, 925000, 5+2, '&pound;500,000 - &pound;925,000'];
				rates_30jun21['c'] = [925000, 1500000, 10+2, '&pound;925,000 - &pound;1,500,000'];
				rates_30jun21['d'] = [1500000, 999999999, 12+2, 'Above &pound;1,500,000'];

			var rates_30sep21 = [];
				rates_30sep21['a'] = [0, 250000, 0+2, language_upto+' &pound;250,000'];
				rates_30sep21['b'] = [250000, 925000, 5+2, '&pound;250,000 - &pound;925,000'];
				rates_30sep21['c'] = [925000, 1500000, 10+2, '&pound;925,000 - &pound;1,500,000'];
				rates_30sep21['d'] = [1500000, 999999999, 12+2, 'Above &pound;1,500,000'];

			var rates_1oct21 = [];
				rates_1oct21['a'] = [0, 125000, 0+2, language_upto+' &pound;125,000'];
				rates_1oct21['b'] = [125000, 250000, 2+2, '&pound;125,000 - &pound;250,000'];
				rates_1oct21['c'] = [250000, 925000, 5+2, '&pound;250,000 - &pound;925,000'];
				rates_1oct21['d'] = [925000, 1500000, 10+2, '&pound;925,000 - &pound;1,500,000'];
				rates_1oct21['e'] = [1500000, 999999999, 12+2, 'Above &pound;1,500,000'];
		} else {
			var rates_30jun21 = [];
				rates_30jun21['a'] = [0, 500000, 0, language_upto+' &pound;500,000'];
				rates_30jun21['b'] = [500000, 925000, 5, '&pound;500,000 - &pound;925,000'];
				rates_30jun21['c'] = [925000, 1500000, 10, '&pound;925,000 - &pound;1,500,000'];
				rates_30jun21['d'] = [1500000, 999999999, 12, 'Above &pound;1,500,000'];

			var rates_30sep21 = [];
				rates_30sep21['a'] = [0, 250000, 0, language_upto+' &pound;250,000'];
				rates_30sep21['b'] = [250000, 925000, 5, '&pound;250,000 - &pound;925,000'];
				rates_30sep21['c'] = [925000, 1500000, 10, '&pound;925,000 - &pound;1,500,000'];
				rates_30sep21['d'] = [1500000, 999999999, 12, 'Above &pound;1,500,000'];

			var rates_1oct21 = [];
				rates_1oct21['a'] = [0, 125000, 0, language_upto+' &pound;125,000'];
				rates_1oct21['b'] = [125000, 250000, 2, '&pound;125,000 - &pound;250,000'];
				rates_1oct21['c'] = [250000, 925000, 5, '&pound;250,000 - &pound;925,000'];
				rates_1oct21['d'] = [925000, 1500000, 10, '&pound;925,000 - &pound;1,500,000'];
				rates_1oct21['e'] = [1500000, 999999999, 12, 'Above &pound;1,500,000'];
		}
	}

	// if(purchasedate == "30jun21") {
	// 	var rates = rates_30jun21;
	// } else if(purchasedate == "30sep21") {
	// 	var rates = rates_30sep21;
	// } else if(purchasedate == "1oct21") {
	// 	var rates = rates_1oct21;
	// }
	var rates = rates_1oct21;
	// console.log(rates);

	if(rates['a']) {
		var this_rate = rates['a'];
		var this_rate_from = this_rate[0];
		var this_rate_to = this_rate[1];
		var this_rate_percentage = this_rate[2];
		var this_rate_table_label = this_rate[3];
		if(purchaseprice > this_rate_to) {
			var rate_a_amount = this_rate_to - this_rate_from;
		} else {
			var rate_a_amount = purchaseprice - this_rate_from;
			if(rate_a_amount < 0) { rate_a_amount = 0; }
		}
	}

	if(rates['b']) {
		var this_rate = rates['b'];
		var this_rate_from = this_rate[0];
		var this_rate_to = this_rate[1];
		var this_rate_percentage = this_rate[2];
		var this_rate_table_label = this_rate[3];
		if(purchaseprice > this_rate_to) {
			var rate_b_amount = this_rate_to - this_rate_from;
		} else {
			var rate_b_amount = purchaseprice - this_rate_from;
			if(rate_b_amount < 0) { rate_b_amount = 0; }
		}
	}

	if(rates['c']) {
		var this_rate = rates['c'];
		var this_rate_from = this_rate[0];
		var this_rate_to = this_rate[1];
		var this_rate_percentage = this_rate[2];
		var this_rate_table_label = this_rate[3];
		if(purchaseprice > this_rate_to) {
			var rate_c_amount = this_rate_to - this_rate_from;
		} else {
			var rate_c_amount = purchaseprice - this_rate_from;
			if(rate_c_amount < 0) { rate_c_amount = 0; }
		}
	}

	if(rates['d']) {
		var this_rate = rates['d'];
		var this_rate_from = this_rate[0];
		var this_rate_to = this_rate[1];
		var this_rate_percentage = this_rate[2];
		var this_rate_table_label = this_rate[3];
		if(purchaseprice > this_rate_to) {
			var rate_d_amount = this_rate_to - this_rate_from;
		} else {
			var rate_d_amount = purchaseprice - this_rate_from;
			if(rate_d_amount < 0) { rate_d_amount = 0; }
		}
	}

	if(rates['e']) {
		var this_rate = rates['e'];
		var this_rate_from = this_rate[0];
		var this_rate_to = this_rate[1];
		var this_rate_percentage = this_rate[2];
		var this_rate_table_label = this_rate[3];
		if(purchaseprice > this_rate_to) {
			var rate_e_amount = this_rate_to - this_rate_from;
		} else {
			var rate_e_amount = purchaseprice - this_rate_from;
			if(rate_e_amount < 0) { rate_e_amount = 0; }
		}
	}

	if(rates['f']) {
		var this_rate = rates['f'];
		var this_rate_from = this_rate[0];
		var this_rate_to = this_rate[1];
		var this_rate_percentage = this_rate[2];
		var this_rate_table_label = this_rate[3];
		if(purchaseprice > this_rate_to) {
			var rate_f_amount = this_rate_to - this_rate_from;
		} else {
			var rate_f_amount = purchaseprice - this_rate_from;
			if(rate_f_amount < 0) { rate_f_amount = 0; }
		}
	}

	if(rates['g']) {
		var this_rate = rates['g'];
		var this_rate_from = this_rate[0];
		var this_rate_to = this_rate[1];
		var this_rate_percentage = this_rate[2];
		var this_rate_table_label = this_rate[3];
		if(purchaseprice > this_rate_to) {
			var rate_g_amount = this_rate_to - this_rate_from;
		} else {
			var rate_g_amount = purchaseprice - this_rate_from;
			if(rate_g_amount < 0) { rate_g_amount = 0; }
		}
	}

	if(rates['h']) {
		var this_rate = rates['h'];
		var this_rate_from = this_rate[0];
		var this_rate_to = this_rate[1];
		var this_rate_percentage = this_rate[2];
		var this_rate_table_label = this_rate[3];
		if(purchaseprice > this_rate_to) {
			var rate_h_amount = this_rate_to - this_rate_from;
		} else {
			var rate_h_amount = purchaseprice - this_rate_from;
			if(rate_h_amount < 0) { rate_h_amount = 0; }
		}
	}

	if(rates['a']) { var rate_a_total = parseInt((rate_a_amount/100)*rates['a'][2]); } else { var rate_a_total = 0; }
	if(rates['b']) { var rate_b_total = parseInt((rate_b_amount/100)*rates['b'][2]); } else { var rate_b_total = 0; }
	if(rates['c']) { var rate_c_total = parseInt((rate_c_amount/100)*rates['c'][2]); } else { var rate_c_total = 0; }
	if(rates['d']) { var rate_d_total = parseInt((rate_d_amount/100)*rates['d'][2]); } else { var rate_d_total = 0; }
	if(rates['e']) { var rate_e_total = parseInt((rate_e_amount/100)*rates['e'][2]); } else { var rate_e_total = 0; }
	if(rates['f']) { var rate_f_total = parseInt((rate_f_amount/100)*rates['f'][2]); } else { var rate_f_total = 0; }
	if(rates['g']) { var rate_g_total = parseInt((rate_g_amount/100)*rates['g'][2]); } else { var rate_g_total = 0; }
	if(rates['h']) { var rate_h_total = parseInt((rate_h_amount/100)*rates['h'][2]); } else { var rate_h_total = 0; }

	if(purchaseprice < 40000) {
		rate_a_total = 0;
	}

	var grand_total = rate_a_total+rate_b_total+rate_c_total+rate_d_total+rate_e_total+rate_f_total+rate_g_total+rate_h_total;
	var rate_percentage_total = ((grand_total/purchaseprice)*100).toFixed(1);

	var table_label_band = 'Band';
	if(document.getElementById('cw-language-string-band_label')) {
		var table_label_band = document.getElementById('cw-language-string-band_label').innerHTML;
	}
	var table_label_rate = 'Rate';
	if(document.getElementById('cw-language-string-rate_label')) {
		var table_label_rate = document.getElementById('cw-language-string-rate_label').innerHTML;
	}
	var table_label_amount = 'Amount';
	if(document.getElementById('cw-language-string-amount_label')) {
		var table_label_amount = document.getElementById('cw-language-string-amount_label').innerHTML;
	}
	var table_label_total = 'Total';
	if(document.getElementById('cw-language-string-total_label')) {
		var table_label_total = document.getElementById('cw-language-string-total_label').innerHTML;
	}
	var table_label_stamp_duty_due = 'Stamp Duty Due:';
	if(document.getElementById('cw-language-string-stamp_duty_due_label')) {
		var table_label_stamp_duty_due = document.getElementById('cw-language-string-stamp_duty_due_label').innerHTML;
	}

	var table_html = '<table cellpadding=0 cellspacing=0><thead>\
		<tr>\
			<th>'+table_label_rate+'</th>\
			<th>'+table_label_band+'</th>\
			<th>'+table_label_amount+'</th>\
		</tr></thead><tbody>\
	';
	// if(rate_a_total > 0) { 
		table_html += '<tr>\
			<td>'+rates['a'][3]+'</td>\
			<td>'+rates['a'][2]+'%</td>\
			<td>&pound;'+cw_sdlt_format_price(rate_a_total)+'</td>\
		</tr>';
	// }
	if(rate_b_total > 0) { 
		table_html += '<tr>\
			<td>'+rates['b'][3]+'</td>\
			<td>'+rates['b'][2]+'%</td>\
			<td>&pound;'+cw_sdlt_format_price(rate_b_total)+'</td>\
		</tr>';
	}
	if(rate_c_total > 0) { 
		table_html += '<tr>\
			<td>'+rates['c'][3]+'</td>\
			<td>'+rates['c'][2]+'%</td>\
			<td>&pound;'+cw_sdlt_format_price(rate_c_total)+'</td>\
		</tr>';
	}
	if(rate_d_total > 0) { 
		table_html += '<tr>\
			<td>'+rates['d'][3]+'</td>\
			<td>'+rates['d'][2]+'%</td>\
			<td>&pound;'+cw_sdlt_format_price(rate_d_total)+'</td>\
		</tr>';
	}
	if(rate_e_total > 0) { 
		table_html += '<tr>\
			<td>'+rates['e'][3]+'</td>\
			<td>'+rates['e'][2]+'%</td>\
			<td>&pound;'+cw_sdlt_format_price(rate_e_total)+'</td>\
		</tr>';
	}
	if(rate_f_total > 0) { 
		table_html += '<tr>\
			<td>'+rates['f'][3]+'</td>\
			<td>'+rates['f'][2]+'%</td>\
			<td>&pound;'+cw_sdlt_format_price(rate_f_total)+'</td>\
		</tr>';
	}
	if(rate_g_total > 0) { 
		table_html += '<tr>\
			<td>'+rates['g'][3]+'</td>\
			<td>'+rates['g'][2]+'%</td>\
			<td>&pound;'+cw_sdlt_format_price(rate_g_total)+'</td>\
		</tr>';
	}
	if(rate_h_total > 0) { 
		table_html += '<tr>\
			<td>'+rates['h'][3]+'</td>\
			<td>'+rates['h'][2]+'%</td>\
			<td>&pound;'+cw_sdlt_format_price(rate_h_total)+'</td>\
		</tr>';
	}
	

	table_html += '</tbody><tfoot><tr>\
		<td>Total</td>\
		<td>'+rate_percentage_total+'%</td>\
		<td>&pound;'+cw_sdlt_format_price(grand_total)+'</td>\
	</tr></tfoot>';

	table_html += '</table>';

	document.getElementById('cw-sdlt-results-total').innerHTML = table_label_stamp_duty_due+' <span>&pound;'+cw_sdlt_format_price(grand_total)+'</span>';
	document.getElementById('cw-sdlt-results-table').innerHTML = table_html;
	document.getElementById('cw-sdlt-results').style.display = 'block';

	return false;
}

// Used for WP version
// var cw_sdlt_form = document.getElementById('cw-sdlt');
// cw_sdlt_form.addEventListener('submit', function(e){
// 	e.preventDefault();
// 	cw_sdlt_calculate();
// }, false);