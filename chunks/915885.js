n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(566840),
    c = n(693546),
    u = n(826581),
    d = n(246364),
    p = n(98493),
    f = n(434479),
    h = n(496675),
    g = n(527379),
    m = n(981631),
    b = n(388032);
function O(e) {
    let { guild: t, selected: n } = e,
        O = (0, l.e7)([h.Z], () => h.Z.can(m.Plq.KICK_MEMBERS, t)),
        _ = (0, l.e7)([u.Z], () => u.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        y = O && null != _ ? _ : 0;
    i.useEffect(() => {
        O &&
            t.features.has(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            c.Z.fetchGuildJoinRequests({
                guildId: t.id,
                status: d.wB.SUBMITTED,
                limit: p.p,
            });
    }, [O, t]);
    let v = i.useCallback(() => {
            (0, g._X)(t.id);
        }, [t.id]),
        j = (0, s.XL)(t.id, o.z.MEMBERS_LAUNCH_UPSELL);
    return (0, r.jsx)("div", {
        ref: j,
        children: (0, r.jsx)(f.m, {
            id: "members-".concat(t.id),
            renderIcon: (e) =>
                (0, r.jsx)(a.BFJ, {
                    size: "md",
                    color: "currentColor",
                    className: e,
                }),
            text: b.intl.string(b.t.oclz3d),
            selected: n,
            onClick: v,
            trailing: y > 0 ? (0, r.jsx)(a.mAB, { count: y }) : null,
        }),
    });
}
