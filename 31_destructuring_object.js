// Generated by CoffeeScript 1.3.1
(function() {
  var a, address, fetchCustomer, _ref;

  fetchCustomer = function(id) {
    var customer;
    customer = {
      name: "Acme Corporation",
      address: "123 desert",
      attention: "Wile E. Coyote",
      email: "wile@acme.com"
    };
    return customer;
  };

  _ref = fetchCustomer(1), a = _ref.a, address = _ref.address;

  console.log("" + a + " " + address);

}).call(this);
