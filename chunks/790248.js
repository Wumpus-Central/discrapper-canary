var n = {}.propertyIsEnumerable,
    i = Object.getOwnPropertyDescriptor,
    r = i && !n.call({ 1: 2 }, 1);
t.f = r
    ? function (e) {
          var t = i(this, e);
          return !!t && t.enumerable;
      }
    : n;
