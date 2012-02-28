class TaxCalculator

	constructor: (tax = 10) ->
		this.tax = tax

	taxAmount: (price) -> price * (@tax/100)

	totalPrice: (price) -> price + (price * (@tax/100))
	#totalPrice: (price) -> price + @taxAmount(price)


calc = new TaxCalculator()
price = 100
tax = calc.taxAmount(price)
total = calc.totalPrice(price)

console.log "price $#{price}"
console.log "tax $ #{tax}"
console.log "total $#{total}"