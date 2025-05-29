n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    s = n(120356),
    o = n.n(s),
    a = n(442837),
    l = n(481060),
    c = n(518738),
    u = n(786761),
    d = n(3148),
    p = n(753206),
    f = n(594174),
    g = n(5192),
    b = n(981631),
    m = n(388032),
    _ = n(264700);
function v(e) {
    var t;
    let { guildId: n, role: s, theme: v, content: h = m.intl.string(m.t['6OSasb']), className: O } = e,
        y = (0, a.e7)([f.default], () => f.default.getCurrentUser()),
        j = g.ZP.useName(n, null, y),
        x = (0, c.Kz)(s),
        C = i.useMemo(() => {
            var e, t;
            return (0, u.e5)(
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {},
                    (0, d.ZP)({
                        channelId: '0',
                        content: h,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: y
                    })
                )),
                (t = t =
                    {
                        state: b.yb.SENT,
                        id: '0'
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
                e)
            );
        }, [y, h]),
        S = {
            nick: j,
            colorString: null != (t = s.colorString) ? t : void 0
        };
    return (0, r.jsx)(l.f6W, {
        theme: v,
        children: (e) =>
            (0, r.jsx)('div', {
                className: o()(e, _.container, O),
                children: (0, r.jsx)(p.Z, {
                    hideTimestamp: !0,
                    author: S,
                    roleIcon: x,
                    message: C,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
