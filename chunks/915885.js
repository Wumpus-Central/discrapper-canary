n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(704215),
    o = n(481060),
    s = n(566840),
    c = n(693546),
    u = n(826581),
    d = n(63568),
    h = n(246364),
    p = n(98493),
    f = n(434479),
    m = n(496675),
    g = n(527379),
    v = n(981631),
    C = n(388032);
function x(e) {
    let { guild: t, selected: n } = e,
        x = (0, d.jS)(t.id, 'Guild Sidebar'),
        I = (0, r.e7)([m.Z], () => m.Z.can(v.Plq.KICK_MEMBERS, t)),
        _ = (0, r.e7)([u.Z], () => u.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        Z = x && I && null != _ ? _ : 0;
    l.useEffect(() => {
        I &&
            x &&
            c.Z.fetchGuildJoinRequests({
                guildId: t.id,
                status: h.wB.SUBMITTED,
                limit: p.p
            });
    }, [I, t.id, x]);
    let b = l.useCallback(() => {
            (0, g._X)(t.id);
        }, [t.id]),
        S = (0, s.XL)(t.id, a.z.MEMBERS_LAUNCH_UPSELL);
    return (0, i.jsx)('div', {
        ref: S,
        children: (0, i.jsx)(f.m, {
            id: 'members-'.concat(t.id),
            renderIcon: (e) =>
                (0, i.jsx)(o.GroupIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            text: C.intl.string(C.t.oclz3d),
            selected: n,
            onClick: b,
            trailing: Z > 0 ? (0, i.jsx)(o.NumberBadge, { count: Z }) : null
        })
    });
}
