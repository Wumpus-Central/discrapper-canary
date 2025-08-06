n.d(t, { p: () => s });
var r = n(573654),
    i = n(73800);
function o(e) {
    if ("string" != typeof e.type) {
        var t = e.type.displayName || e.type.name || "the component";
        throw Error(
            "Only native element nodes can now be passed to React DnD connectors." +
                "You can either wrap ".concat(t, " into a <div>, or turn it into a ") +
                "drag source or a drop target itself.",
        );
    }
}
function a(e) {
    return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!(0, i.isValidElement)(t)) {
            var r = t;
            return e(r, n), r;
        }
        var a = t;
        return (
            o(a),
            c(
                a,
                n
                    ? function (t) {
                          return e(t, n);
                      }
                    : e,
            )
        );
    };
}
function s(e) {
    var t = {};
    return (
        Object.keys(e).forEach(function (n) {
            var r = e[n];
            if (n.endsWith("Ref")) t[n] = e[n];
            else {
                var i = a(r);
                t[n] = function () {
                    return i;
                };
            }
        }),
        t
    );
}
function l(e, t) {
    "function" == typeof e ? e(t) : (e.current = t);
}
function c(e, t) {
    var n = e.ref;
    return ((0, r.k)(
        "string" != typeof n,
        "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs",
    ),
    n)
        ? (0, i.cloneElement)(e, {
              ref: function (e) {
                  l(n, e), l(t, e);
              },
          })
        : (0, i.cloneElement)(e, { ref: t });
}
