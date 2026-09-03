var n = e(950059),
    o = e(309270),
    s = e(459547),
    i = e(61748)("toStringTag"),
    u = Object,
    c =
        "Arguments" ===
        s(
            (function () {
                return arguments;
            })(),
        ),
    a = function (t, r) {
        try {
            return t[r];
        } catch (t) {}
    };
t.exports = n
    ? s
    : function (t) {
          var r, e, n;
          return void 0 === t
              ? "Undefined"
              : null === t
                ? "Null"
                : "string" == typeof (e = a((r = u(t)), i))
                  ? e
                  : c
                    ? s(r)
                    : "Object" === (n = s(r)) && o(r.callee)
                      ? "Arguments"
                      : n;
      };
