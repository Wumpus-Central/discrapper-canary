n.d(t, { Z: () => u }), n(388685);
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(699516),
    a = n(388032);
function u(e) {
    let { user: t, onAction: u, appContext: c } = e,
        s = t.id,
        [d, f] = (0, l.Wu)(
            [o.Z],
            () => {
                var e;
                return [o.Z.isFriend(s), null != (e = o.Z.getNickname(s)) ? e : null];
            },
            [s]
        );
    if (!d) return null;
    let g = null == f ? a.NW.string(a.t.BGYkaG) : a.NW.string(a.t['8pOYUF']);
    return (0, r.jsx)(i.sNh, {
        id: null == f ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: g,
        action: () => {
            null == u || u(),
                (0, i.ZDy)(
                    async () => {
                        let { default: e } = await n.e('25070').then(n.bind(n, 670794));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                (function (e) {
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
                                    {
                                        user: t,
                                        nickname: f
                                    },
                                    n
                                )
                            );
                    },
                    { contextKey: null != c ? (0, i.VnL)(c) : void 0 }
                );
        }
    });
}
