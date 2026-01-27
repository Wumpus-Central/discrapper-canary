n.d(t, {
    A: () => a,
});
var r = n(627968);
n(64700);
var i = n(763754),
    l = n(635071),
    o = n(812299);

function a(e) {
    var t, n, a, s;
    let c = (0, i.Ay)(e.message),
        u = (0, o.y)({
            message: e.message,
            channel: e.channel,
            user: null != (t = null == (n = e.message) ? void 0 : n.author) ? t : e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage,
        }),
        d = {};
    return (
        null != u && (d[l.w.SYSTEM_TAG] = u),
        (0, r.jsx)(
            l.A,
            ((a = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)),
            (s = s =
                {
                    author: c,
                    decorations: d,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(s)).forEach(function (e) {
                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                  }),
            a),
        )
    );
}
