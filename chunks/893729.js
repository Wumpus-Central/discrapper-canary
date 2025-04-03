r.d(t, { Z: () => b });
var n = r(200651),
    h = r(192379),
    v = r(120356),
    i = r.n(v),
    l = r(442837),
    o = r(481060),
    a = r(518738),
    s = r(786761),
    c = r(3148),
    f = r(753206),
    p = r(594174),
    Z = r(5192),
    u = r(981631),
    M = r(388032),
    d = r(264700);
function b(e) {
    var t;
    let { guildId: r, role: v, theme: b, content: H = M.NW.string(M.t['6OSasb']), className: y } = e,
        V = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        j = Z.ZP.useName(r, null, V),
        O = (0, a.Kz)(v),
        g = h.useMemo(() => {
            var e, t;
            return (0, s.e5)(
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })(
                    {},
                    (0, c.ZP)({
                        channelId: '0',
                        content: H,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: V
                    })
                )),
                (t = t =
                    {
                        state: u.yb.SENT,
                        id: '0'
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(t)).forEach(function (r) {
                          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                      }),
                e)
            );
        }, [V, H]),
        m = {
            nick: j,
            colorString: null != (t = v.colorString) ? t : void 0
        };
    return (0, n.jsx)(o.f6W, {
        theme: b,
        children: (e) =>
            (0, n.jsx)('div', {
                className: i()(e, d.container, y),
                children: (0, n.jsx)(f.Z, {
                    hideTimestamp: !0,
                    author: m,
                    roleIcon: O,
                    message: g,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
