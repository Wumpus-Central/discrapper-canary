var e = n(85712),
    o = n(971428),
    i = n(6837),
    u = n(394370)('toStringTag'),
    s = Object,
    c =
        'Arguments' ===
        i(
            (function () {
                return arguments;
            })()
        ),
    f = function (t, r) {
        try {
            return t[r];
        } catch (t) {}
    };
t.exports = e
    ? i
    : function (t) {
          var r, n, e;
          return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (n = f((r = s(t)), u)) ? n : c ? i(r) : 'Object' === (e = i(r)) && o(r.callee) ? 'Arguments' : e;
      };
