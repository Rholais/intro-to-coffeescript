// Generated by CoffeeScript 1.3.1
(function() {
  var address, fetchCustomer, name, _ref;

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

  _ref = fetchCustomer(1), name = _ref.name, address = _ref.address;

  console.log("" + name + ": " + address);

}).call(this);