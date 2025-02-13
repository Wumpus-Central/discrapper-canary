var r = a(325008),
    n = a(34924),
    o = a(733669),
    _ = a(24033),
    i = a(966606),
    c = TypeError,
    s = Object.defineProperty,
    E = Object.getOwnPropertyDescriptor,
    l = 'enumerable',
    u = 'configurable',
    I = 'writable';
e.f = r
    ? o
        ? function (t, e, a) {
              if ((_(t), (e = i(e)), _(a), 'function' == typeof t && 'prototype' === e && 'value' in a && I in a && !a[I])) {
                  var r = E(t, e);
                  r &&
                      r[I] &&
                      ((t[e] = a.value),
                      (a = {
                          configurable: u in a ? a[u] : r[u],
                          enumerable: l in a ? a[l] : r[l],
                          writable: !1
                      }));
              }
              return s(t, e, a);
          }
        : s
    : function (t, e, a) {
          if ((_(t), (e = i(e)), _(a), n))
              try {
                  return s(t, e, a);
              } catch (t) {}
          if ('get' in a || 'set' in a) throw c('Accessors not supported');
          return 'value' in a && (t[e] = a.value), t;
      };
