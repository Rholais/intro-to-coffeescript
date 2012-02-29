(function() {
  var totalPrice, updateTotalPrice;

  totalPrice = function(price, discountPercent, taxPercent) {
    var discount, tax;
    if (discountPercent == null) discountPercent = 0;
    if (taxPercent == null) taxPercent = 10;
    discount = price * (discountPercent / 100);
    tax = (price - discount) * (taxPercent / 100);
    return price - discount + tax;
  };

  updateTotalPrice = function() {
    var discount, itemPrice, tax, total;
    itemPrice = $("#txtPrice").val();
    if ($("#txtDiscount").val() !== "") discount = $("#txtDiscount").val();
    if ($("#txtTax").val() !== "") tax = $("#txtTax").val();
    total = totalPrice(itemPrice, discount, tax);
    return $("#txtTotal").val(total);
  };

  $(function() {
    $("#txtPrice").change(updateTotalPrice);
    $("#txtDiscount").change(updateTotalPrice);
    $("#txtTax").change(updateTotalPrice);
  });

}).call(this);
