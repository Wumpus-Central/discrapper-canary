n.d(e, { Z: () => o }), n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    d = n(699516),
    r = n(388032);
function o(t) {
    let { user: e, onAction: o } = t,
        s = e.id,
        [u, c] = (0, l.Wu)(
            [d.Z],
            () => {
                var t;
                return [d.Z.isFriend(s), null !== (t = d.Z.getNickname(s)) && void 0 !== t ? t : null];
            },
            [s]
        );
    if (!u) return null;
    let g = null == c ? r.intl.string(r.t.BGYkaG) : r.intl.string(r.t['8pOYUF']);
    return (0, i.jsx)(a.sNh, {
        id: null == c ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: g,
        action: () => {
            null == o || o(),
                (0, a.ZDy)(async () => {
                    let { default: t } = await n.e('25070').then(n.bind(n, 670794));
                    return (n) =>
                        (0, i.jsx)(t, {
                            user: e,
                            nickname: c,
                            ...n
                        });
                });
        }
    });
}
