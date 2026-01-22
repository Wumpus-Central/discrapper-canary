n.d(t, { j: () => o }), n(989349);
var r = n(311907),
    i = n(707539),
    l = n(222823),
    a = n(661191),
    s = n(978914);
function o(e) {
    let t = (0, s.I)(e),
        n = (function (e) {
            let { lastMessageId: t, message: n, loaded: r } = e;
            return r && null != n ? a.default.extractTimestamp(n.id) : null != t ? a.default.extractTimestamp(t) : null;
        })(
            (function (e) {
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
            })({ lastMessageId: (0, r.bG)([l.Ay], () => l.Ay.lastMessageId(e.id)) }, t),
        );
    return null == n ? "" : (0, i.aK)(n);
}
