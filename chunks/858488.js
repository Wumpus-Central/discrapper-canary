t.d(n, { Z: () => u }), t(388685);
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    a = t(699516),
    o = t(388032);
function u(e) {
    let { user: n, onAction: u, appContext: s } = e,
        c = n.id,
        [d, g] = (0, r.Wu)(
            [a.Z],
            () => {
                var e;
                return [a.Z.isFriend(c), null != (e = a.Z.getNickname(c)) ? e : null];
            },
            [c]
        );
    if (!d) return null;
    let Z = null == g ? o.NW.string(o.t.BGYkaG) : o.NW.string(o.t['8pOYUF']);
    return (0, l.jsx)(i.sNh, {
        id: null == g ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: Z,
        action: () => {
            null == u || u(),
                (0, i.ZDy)(
                    async () => {
                        let { default: e } = await t.e('25070').then(t.bind(t, 670794));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                (function (e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {},
                                            l = Object.keys(t);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                })
                                            )),
                                            l.forEach(function (n) {
                                                var l;
                                                (l = t[n]),
                                                    n in e
                                                        ? Object.defineProperty(e, n, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[n] = l);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        user: n,
                                        nickname: g
                                    },
                                    t
                                )
                            );
                    },
                    { contextKey: null != s ? (0, i.VnL)(s) : void 0 }
                );
        }
    });
}
