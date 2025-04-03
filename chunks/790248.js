var n = {}.propertyIsEnumerable,
    e = Object.getOwnPropertyDescriptor;
r.f =
    e && !n.call({ 1: 2 }, 1)
        ? function (t) {
              var r = e(this, t);
              return !!r && r.enumerable;
          }
        : n;
