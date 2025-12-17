n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(704215),
    o = n(481060),
    s = n(566840),
    c = n(693546),
    u = n(826581),
    d = n(246364),
    f = n(98493),
    h = n(434479),
    p = n(496675),
    g = n(527379),
    b = n(981631),
    m = n(388032);
function y(e) {
    let { guild: t, selected: n } = e,
        y = (0, l.e7)([p.Z], () => p.Z.can(b.Plq.KICK_MEMBERS, t)),
        O = (0, l.e7)([u.Z], () => u.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        v = y && null != O ? O : 0;
    i.useEffect(() => {
        y &&
            t.features.has(b.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(b.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.Z.fetchGuildJoinRequests({
                guildId: t.id,
                status: d.wB.SUBMITTED,
                limit: f.p,
            });
    }, [y, t]);
    let j = i.useCallback(() => {
            (0, g._X)(t.id);
        }, [t.id]),
        C = (0, s.XL)(t.id, a.z.MEMBERS_LAUNCH_UPSELL);
    return (0, r.jsx)("div", {
        ref: C,
        children: (0, r.jsx)(h.m, {
            id: "members-".concat(t.id),
            renderIcon: (e) =>
                (0, r.jsx)(o.BFJ, {
                    size: "md",
                    color: "currentColor",
                    className: e,
                }),
            text: m.intl.string(m.t.oclz3Z),
            selected: n,
            onClick: j,
            trailing: v > 0 ? (0, r.jsx)(o.mAB, { count: v }) : null,
        }),
    });
}
