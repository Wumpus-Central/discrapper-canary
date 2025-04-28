var r = {}.propertyIsEnumerable,
    e = Object.getOwnPropertyDescriptor;
n.f =
    e && !r.call({ 1: 2 }, 1)
        ? function (t) {
              var n = e(this, t);
              return !!n && n.enumerable;
          }
        : r;
