n.d(t, { Z: () => v });
var i = n(951288),
    r = n(647438),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    a = n(481060),
    c = n(518738),
    u = n(786761),
    d = n(3148),
    h = n(753206),
    p = n(594174),
    g = n(5192),
    f = n(981631),
    m = n(388032),
    b = n(914933);
function v(e) {
    let { guildId: t, role: n, theme: s, content: v = m.intl.string(m.t["6OSasb"]), className: C } = e,
        _ = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        y = g.ZP.useName(t, null, _),
        O = (0, c.Kz)(n),
        S = r.useMemo(() => {
            var e, t;
            return (0, u.e5)(
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
                        content: v,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: _,
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
        }, [_, v]),
        E = {
            nick: y,
            colorString: n.colorString,
            colorStrings: n.colorStrings,
        };
    return (0, i.jsx)(a.f6W, {
        theme: s,
        children: (e) =>
            (0, i.jsx)("div", {
                className: l()(e, b.container, C),
                children: (0, i.jsx)(h.Z, {
                    hideTimestamp: !0,
                    author: E,
                    roleIcon: O,
                    message: S,
                    isGroupStart: !0,
                    disableInteraction: !0,
                }),
            }),
    });
}
