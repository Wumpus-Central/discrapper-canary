n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    s = n(481060),
    a = n(566840),
    c = n(693546),
    u = n(826581),
    d = n(246364),
    h = n(98493),
    p = n(434479),
    f = n(496675),
    g = n(527379),
    m = n(981631),
    b = n(388032);
function y(e) {
    let { guild: t, selected: n } = e,
        y = (0, l.e7)([f.Z], () => f.Z.can(m.Plq.KICK_MEMBERS, t)),
        _ = (0, l.e7)([u.Z], () => u.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        v = y && null != _ ? _ : 0;
    i.useEffect(() => {
        y &&
            t.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.Z.fetchGuildJoinRequests({
                guildId: t.id,
                status: d.wB.SUBMITTED,
                limit: h.p
            });
    }, [y, t]);
    let O = i.useCallback(() => {
            (0, g._X)(t.id);
        }, [t.id]),
        C = (0, a.XL)(t.id, o.z.MEMBERS_LAUNCH_UPSELL);
    return (0, r.jsx)('div', {
        ref: C,
        children: (0, r.jsx)(p.m, {
            id: 'members-'.concat(t.id),
            renderIcon: (e) =>
                (0, r.jsx)(s.BFJ, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            text: b.NW.string(b.t.oclz3d),
            selected: n,
            onClick: O,
            trailing: v > 0 ? (0, r.jsx)(s.mAB, { count: v }) : null
        })
    });
}
