n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(566840),
    c = n(693546),
    u = n(826581),
    d = n(246364),
    p = n(98493),
    h = n(434479),
    f = n(496675),
    g = n(527379),
    m = n(981631),
    b = n(388032);
function _(e) {
    let { guild: t, selected: n } = e,
        _ = (0, l.e7)([f.Z], () => f.Z.can(m.Plq.KICK_MEMBERS, t)),
        y = (0, l.e7)([u.Z], () => u.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        v = _ && null != y ? y : 0;
    i.useEffect(() => {
        _ &&
            t.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.Z.fetchGuildJoinRequests({
                guildId: t.id,
                status: d.wB.SUBMITTED,
                limit: p.p
            });
    }, [_, t]);
    let O = i.useCallback(() => {
            (0, g._X)(t.id);
        }, [t.id]),
        j = (0, s.XL)(t.id, o.z.MEMBERS_LAUNCH_UPSELL);
    return (0, r.jsx)('div', {
        ref: j,
        children: (0, r.jsx)(h.m, {
            id: 'members-'.concat(t.id),
            renderIcon: (e) =>
                (0, r.jsx)(a.BFJ, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            text: b.NW.string(b.t.oclz3d),
            selected: n,
            onClick: O,
            trailing: v > 0 ? (0, r.jsx)(a.mAB, { count: v }) : null
        })
    });
}
