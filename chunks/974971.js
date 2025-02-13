var r = a(525305),
    n = a(354848),
    o = a(332916),
    _ = a(641236)('toStringTag'),
    i = Object,
    c =
        'Arguments' ===
        o(
            (function () {
                return arguments;
            })()
        ),
    s = function (t, e) {
        try {
            return t[e];
        } catch (t) {}
    };
t.exports = r
    ? o
    : function (t) {
          var e, a, r;
          return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (a = s((e = i(t)), _)) ? a : c ? o(e) : 'Object' === (r = o(e)) && n(e.callee) ? 'Arguments' : r;
      };
