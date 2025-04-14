n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    u = n(518738),
    c = n(786761),
    d = n(3148),
    f = n(753206),
    p = n(594174),
    g = n(5192),
    v = n(981631),
    m = n(388032),
    b = n(264700);
function h(e) {
    var t;
    let { guildId: n, role: l, theme: h, content: O = m.NW.string(m.t['6OSasb']), className: y } = e,
        j = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
        S = g.ZP.useName(n, null, j),
        E = (0, u.Kz)(l),
        D = i.useMemo(() => {
            var e, t;
            return (0, c.e5)(
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
                        content: O,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: j
                    })
                )),
                (t = t =
                    {
                        state: v.yb.SENT,
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
        }, [j, O]),
        w = {
            nick: S,
            colorString: null != (t = l.colorString) ? t : void 0
        };
    return (0, r.jsx)(s.f6W, {
        theme: h,
        children: (e) =>
            (0, r.jsx)('div', {
                className: o()(e, b.container, y),
                children: (0, r.jsx)(f.Z, {
                    hideTimestamp: !0,
                    author: w,
                    roleIcon: E,
                    message: D,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
