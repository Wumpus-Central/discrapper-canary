n.d(t, {
    Z: () => b,
    o: () => g,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(399606),
    l = n(481060),
    c = n(372769),
    u = n(914788),
    d = n(322192),
    f = n(981631),
    p = n(225753),
    _ = n(388032),
    m = n(641947);
let h = [18, 18, 16, 16, 14, 12, 10];
function g(e) {
    var t;
    return null != (t = h[e.length - 1]) ? t : h[h.length - 1];
}
let E = i.memo((e) => {
    let { guildId: t, className: n, customSubtext: i } = e,
        a = (0, s.e7)([u.Z], () => u.Z.getGuild(t));
    if (void 0 === a) return null;
    let h = a.features.has(f.GuildFeatures.VERIFIED) || a.features.has(f.GuildFeatures.PARTNERED),
        { name: g } = a;
    return (0, r.jsxs)("div", {
        className: o()(m.container, n),
        children: [
            (0, r.jsx)(d.Z, { guildId: t }),
            (0, r.jsxs)("div", {
                className: m.descriptors,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.header,
                        children: [
                            h
                                ? (0, r.jsx)(c.Z, {
                                      guild: a,
                                      tooltipPosition: "bottom",
                                      tooltipColor: l.aML.Colors.PRIMARY,
                                      className: m.guildBadge,
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
                        color: "text-subtle",
                        children:
                            null != i
                                ? i
                                : void 0 !== a.approximateMemberCount
                                  ? _.intl.format(p.default["5JmNgg"], { members: a.approximateMemberCount })
                                  : null,
                    }),
                ],
            }),
        ],
    });
});
E.displayName = "FamilyCenterActivityGuildRow";
let b = E;
