var r = {}.propertyIsEnumerable,
    i = Object.getOwnPropertyDescriptor,
    a = i && !r.call({ 1: 2 }, 1);
n.f = a
    ? function (e) {
          var n = i(this, e);
          return !!n && n.enumerable;
      }
    : r;
