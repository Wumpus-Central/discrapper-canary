n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    u = n(442837),
    a = n(481060),
    s = n(518738),
    c = n(786761),
    d = n(3148),
    f = n(753206),
    m = n(594174),
    p = n(5192),
    v = n(981631),
    g = n(388032),
    b = n(914933);
function E(e) {
    let { guildId: t, role: n, theme: l, content: E = g.intl.string(g.t["6OSasb"]), className: O } = e,
        y = (0, u.e7)([m.default], () => m.default.getCurrentUser()),
        S = p.ZP.useName(t, null, y),
        j = (0, s.Kz)(n),
        _ = i.useMemo(() => {
            var e, t;
            return (0, c.e5)(
                ((e = (function (e) {
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
                })(
                    {},
                    (0, d.ZP)({
                        channelId: "0",
                        content: E,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: y,
                    }),
                )),
                (t = t =
                    {
                        state: v.yb.SENT,
                        id: "0",
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e),
            );
        }, [y, E]),
        h = {
            nick: S,
            colorString: n.colorString,
            colorStrings: n.colorStrings,
        };
    return (0, r.jsx)(a.f6W, {
        theme: l,
        children: (e) =>
            (0, r.jsx)("div", {
                className: o()(e, b.container, O),
                children: (0, r.jsx)(f.Z, {
                    hideTimestamp: !0,
                    author: h,
                    roleIcon: j,
                    message: _,
                    isGroupStart: !0,
                    disableInteraction: !0,
                }),
            }),
    });
}
