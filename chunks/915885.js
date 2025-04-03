n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(566840),
    c = n(693546),
    u = n(826581),
    d = n(63568),
    p = n(246364),
    h = n(98493),
    f = n(434479),
    g = n(496675),
    m = n(527379),
    b = n(981631),
    y = n(388032);
function _(e) {
    let { guild: t, selected: n } = e,
        _ = (0, d.jS)(t.id, 'Guild Sidebar'),
        v = (0, l.e7)([g.Z], () => g.Z.can(b.Plq.KICK_MEMBERS, t)),
        O = (0, l.e7)([u.Z], () => u.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        j = _ && v && null != O ? O : 0;
    i.useEffect(() => {
        v &&
            _ &&
            t.hasFeature(b.oNc.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.hasFeature(b.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.Z.fetchGuildJoinRequests({
                guildId: t.id,
                status: p.wB.SUBMITTED,
                limit: h.p
            });
    }, [v, t, _]);
    let x = i.useCallback(() => {
            (0, m._X)(t.id);
        }, [t.id]),
        C = (0, s.XL)(t.id, o.z.MEMBERS_LAUNCH_UPSELL);
    return (0, r.jsx)('div', {
        ref: C,
        children: (0, r.jsx)(f.m, {
            id: 'members-'.concat(t.id),
            renderIcon: (e) =>
                (0, r.jsx)(a.BFJ, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            text: y.NW.string(y.t.oclz3d),
            selected: n,
            onClick: x,
            trailing: j > 0 ? (0, r.jsx)(a.mAB, { count: j }) : null
        })
    });
}
