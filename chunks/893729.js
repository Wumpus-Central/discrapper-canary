n.d(t, { Z: () => C });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    a = n(481060),
    u = n(518738),
    c = n(786761),
    d = n(3148),
    h = n(753206),
    p = n(594174),
    g = n(5192),
    f = n(981631),
    v = n(388032),
    m = n(914933);
function C(e) {
    let { guildId: t, role: n, theme: s, content: C = v.intl.string(v.t["6OSasb"]), className: b } = e,
        y = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        O = g.ZP.useName(t, null, y),
        S = (0, u.Kz)(n),
        E = r.useMemo(() => {
            var e, t;
            return (0, c.e5)(
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })(
                    {},
                    (0, d.ZP)({
                        channelId: "0",
                        content: C,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: y,
                    }),
                )),
                (t = t =
                    {
                        state: f.yb.SENT,
                        id: "0",
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e),
            );
        }, [y, C]),
        _ = {
            nick: O,
            colorString: n.colorString,
            colorStrings: n.colorStrings,
        };
    return (0, i.jsx)(a.f6W, {
        theme: s,
        children: (e) =>
            (0, i.jsx)("div", {
                className: l()(e, m.container, b),
                children: (0, i.jsx)(h.Z, {
                    hideTimestamp: !0,
                    author: _,
                    roleIcon: S,
                    message: E,
                    isGroupStart: !0,
                    disableInteraction: !0,
                }),
            }),
    });
}
