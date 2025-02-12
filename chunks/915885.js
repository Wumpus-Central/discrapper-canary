n.d(t, { Z: () => C });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(704215),
    o = n(481060),
    s = n(566840),
    c = n(693546),
    d = n(826581),
    u = n(63568),
    h = n(246364),
    p = n(98493),
    m = n(434479),
    g = n(496675),
    f = n(527379),
    _ = n(981631),
    v = n(388032);
function C(e) {
    let { guild: t, selected: n } = e,
        C = (0, u.jS)(t.id, 'Guild Sidebar'),
        x = (0, r.e7)([g.Z], () => g.Z.can(_.Plq.KICK_MEMBERS, t)),
        Z = (0, r.e7)([d.Z], () => d.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        I = C && x && null != Z ? Z : 0;
    l.useEffect(() => {
        x &&
            C &&
            t.hasFeature(_.oNc.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.hasFeature(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.Z.fetchGuildJoinRequests({
                guildId: t.id,
                status: h.wB.SUBMITTED,
                limit: p.p
            });
    }, [x, t, C]);
    let b = l.useCallback(() => {
            (0, f._X)(t.id);
        }, [t.id]),
        S = (0, s.XL)(t.id, a.z.MEMBERS_LAUNCH_UPSELL);
    return (0, i.jsx)('div', {
        ref: S,
        children: (0, i.jsx)(m.m, {
            id: 'members-'.concat(t.id),
            renderIcon: (e) =>
                (0, i.jsx)(o.BFJ, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            text: v.intl.string(v.t.oclz3d),
            selected: n,
            onClick: b,
            trailing: I > 0 ? (0, i.jsx)(o.mAB, { count: I }) : null
        })
    });
}
