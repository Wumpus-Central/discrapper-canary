n.d(t, { Z: () => u }), n(388685);
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    o = n(699516),
    a = n(388032);
function u(e) {
    let { user: t, onAction: u, appContext: c } = e,
        s = t.id,
        [d, f] = (0, r.Wu)(
            [o.Z],
            () => {
                var e;
                return [o.Z.isFriend(s), null != (e = o.Z.getNickname(s)) ? e : null];
            },
            [s]
        );
    if (!d) return null;
    let g = null == f ? a.intl.string(a.t.BGYkaG) : a.intl.string(a.t['8pOYUF']);
    return (0, l.jsx)(i.sNh, {
        id: null == f ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: g,
        action: () => {
            null == u || u(),
                (0, i.ZDy)(
                    async () => {
                        let { default: e } = await n.e('25070').then(n.bind(n, 670794));
                        return (n) =>
                            (0, l.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = l);
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
