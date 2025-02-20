var n = {}.propertyIsEnumerable,
    r = Object.getOwnPropertyDescriptor,
    i = r && !n.call({ 1: 2 }, 1);
t.f = i
    ? function (e) {
          var t = r(this, e);
          return !!t && t.enumerable;
      }
    : n;
