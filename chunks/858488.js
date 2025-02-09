e.d(n, { Z: () => r }), e(47120);
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    o = e(699516),
    d = e(388032);
function r(t) {
    let { user: n, onAction: r, appContext: s } = t,
        u = n.id,
        [c, g] = (0, l.Wu)(
            [o.Z],
            () => {
                var t;
                return [o.Z.isFriend(u), null !== (t = o.Z.getNickname(u)) && void 0 !== t ? t : null];
            },
            [u]
        );
    if (!c) return null;
    let Z = null == g ? d.intl.string(d.t.BGYkaG) : d.intl.string(d.t['8pOYUF']);
    return (0, i.jsx)(a.sNh, {
        id: null == g ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: Z,
        action: () => {
            null == r || r(),
                (0, a.ZDy)(
                    async () => {
                        let { default: t } = await e.e('25070').then(e.bind(e, 670794));
                        return (e) =>
                            (0, i.jsx)(t, {
                                user: n,
                                nickname: g,
                                ...e
                            });
                    },
                    { contextKey: null != s ? (0, a.VnL)(s) : void 0 }
                );
        }
    });
}
