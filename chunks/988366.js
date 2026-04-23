var e = {}.propertyIsEnumerable,
    n = Object.getOwnPropertyDescriptor;
t.f =
    n && !e.call({ 1: 2 }, 1)
        ? function (r) {
              var t = n(this, r);
              return !!t && t.enumerable;
          }
        : e;
