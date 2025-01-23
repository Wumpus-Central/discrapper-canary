t.d(n, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(699516),
    u = t(388032);
function o(e) {
    let { user: n, onAction: o } = e,
        d = n.id,
        [s, c] = (0, i.Wu)(
            [a.Z],
            () => {
                var e;
                return [a.Z.isFriend(d), null !== (e = a.Z.getNickname(d)) && void 0 !== e ? e : null];
            },
            [d]
        );
    if (!s) return null;
    let Z = null == c ? u.intl.string(u.t.BGYkaG) : u.intl.string(u.t['8pOYUF']);
    return (0, l.jsx)(r.MenuItem, {
        id: null == c ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: Z,
        action: () => {
            null == o || o(),
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await t.e('25070').then(t.bind(t, 670794));
                    return (t) =>
                        (0, l.jsx)(e, {
                            user: n,
                            nickname: c,
                            ...t
                        });
                });
        }
    });
}
