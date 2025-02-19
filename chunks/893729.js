n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    u = n(518738),
    d = n(786761),
    c = n(3148),
    h = n(753206),
    f = n(594174),
    p = n(5192),
    g = n(981631),
    v = n(388032),
    C = n(739292);
function E(e) {
    var t;
    let { guildId: n, role: l, theme: E, content: m = v.NW.string(v.t['6OSasb']), className: O } = e,
        S = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        b = p.ZP.useName(n, null, S),
        _ = (0, u.Kz)(l),
        I = r.useMemo(() => {
            var e, t;
            return (0, d.e5)(
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })(
                    {},
                    (0, c.ZP)({
                        channelId: '0',
                        content: m,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: S
                    })
                )),
                (t = t =
                    {
                        state: g.yb.SENT,
                        id: '0'
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
                e)
            );
        }, [S, m]),
        y = {
            nick: b,
            colorString: null !== (t = l.colorString) && void 0 !== t ? t : void 0
        };
    return (0, i.jsx)(a.f6W, {
        theme: E,
        children: (e) =>
            (0, i.jsx)('div', {
                className: o()(e, C.container, O),
                children: (0, i.jsx)(h.Z, {
                    hideTimestamp: !0,
                    author: y,
                    roleIcon: _,
                    message: I,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
