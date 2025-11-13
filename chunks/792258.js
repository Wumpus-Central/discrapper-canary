n.d(t, {
    Z: () => b,
    o: () => g,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(399606),
    l = n(481060),
    c = n(372769),
    u = n(914788),
    d = n(322192),
    f = n(981631),
    _ = n(597754),
    p = n(388032),
    h = n(641947);
let m = [18, 18, 16, 16, 14, 12, 10];
function g(e) {
    var t;
    return null != (t = m[e.length - 1]) ? t : m[m.length - 1];
}
let E = i.memo((e) => {
    let { guildId: t, className: n, customSubtext: i } = e,
        a = (0, s.e7)([u.Z], () => u.Z.getGuild(t));
    if (void 0 === a) return null;
    let m = a.features.has(f.GuildFeatures.VERIFIED) || a.features.has(f.GuildFeatures.PARTNERED),
        { name: g } = a;
    return (0, r.jsxs)("div", {
        className: o()(h.container, n),
        children: [
            (0, r.jsx)(d.Z, { guildId: t }),
            (0, r.jsxs)("div", {
                className: h.descriptors,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.header,
                        children: [
                            m
                                ? (0, r.jsx)(c.Z, {
                                      guild: a,
                                      tooltipPosition: "bottom",
                                      tooltipColor: l.aML.Colors.PRIMARY,
                                      className: h.guildBadge,
                                  })
                                : null,
                            (0, r.jsx)(l.Text, {
                                variant: "text-md/semibold",
                                children: g,
                            }),
                        ],
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children:
                            null != i
                                ? i
                                : void 0 !== a.approximateMemberCount
                                  ? p.intl.format(_.default["5JmNgg"], { members: a.approximateMemberCount })
                                  : null,
                    }),
                ],
            }),
        ],
    });
});
E.displayName = "FamilyCenterActivityGuildRow";
let b = E;
