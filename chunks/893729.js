r.d(t, { Z: () => M });
var n = r(200651),
    i = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    a = r(481060),
    c = r(518738),
    h = r(786761),
    v = r(3148),
    u = r(753206),
    f = r(594174),
    p = r(5192),
    d = r(981631),
    b = r(388032),
    Z = r(264700);
function M(e) {
    var t;
    let { guildId: r, role: s, theme: M, content: g = b.NW.string(b.t['6OSasb']), className: j } = e,
        O = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        y = p.ZP.useName(r, null, O),
        m = (0, c.Kz)(s),
        H = i.useMemo(() => {
            var e, t;
            return (0, h.e5)(
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
                    (0, v.ZP)({
                        channelId: '0',
                        content: g,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: O
                    })
                )),
                (t = t =
                    {
                        state: d.yb.SENT,
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
        }, [O, g]),
        V = {
            nick: y,
            colorString: null != (t = s.colorString) ? t : void 0
        };
    return (0, n.jsx)(a.f6W, {
        theme: M,
        children: (e) =>
            (0, n.jsx)('div', {
                className: o()(e, Z.container, j),
                children: (0, n.jsx)(u.Z, {
                    hideTimestamp: !0,
                    author: V,
                    roleIcon: m,
                    message: H,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
