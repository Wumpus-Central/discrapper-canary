n.d(t, { Z: () => s }), n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(699516),
    o = n(388032);
function s(e) {
    let { user: t, onAction: s, appContext: u } = e,
        c = t.id,
        [d, g] = (0, l.Wu)(
            [a.Z],
            () => {
                var e;
                return [a.Z.isFriend(c), null != (e = a.Z.getNickname(c)) ? e : null];
            },
            [c]
        );
    if (!d) return null;
    let f = null == g ? o.NW.string(o.t.BGYkaG) : o.NW.string(o.t['8pOYUF']);
    return (0, i.jsx)(r.sNh, {
        id: null == g ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: f,
        action: () => {
            null == s || s(),
                (0, r.ZDy)(
                    async () => {
                        let { default: e } = await n.e('25070').then(n.bind(n, 670794));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                (function (e) {
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
                                    {
                                        user: t,
                                        nickname: g
                                    },
                                    n
                                )
                            );
                    },
                    { contextKey: null != u ? (0, r.VnL)(u) : void 0 }
                );
        }
    });
}
