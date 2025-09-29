n.d(t, {
    Z: () => g,
    o: () => m,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(399606),
    s = n(481060),
    l = n(372769),
    c = n(914788),
    u = n(322192),
    d = n(981631),
    f = n(412297),
    _ = n(388032),
    p = n(537731);
let h = [18, 18, 16, 16, 14, 12, 10];
function m(e) {
    var t;
    return null != (t = h[e.length - 1]) ? t : h[h.length - 1];
}
let g = (e) => {
    let { guildId: t, className: n, customSubtext: i } = e,
        h = (0, o.e7)([c.Z], () => c.Z.getGuild(t));
    if (void 0 === h) return null;
    let m = h.features.has(d.oNc.VERIFIED) || h.features.has(d.oNc.PARTNERED),
        { name: g } = h;
    return (0, r.jsxs)("div", {
        className: a()(p.container, n),
        children: [
            (0, r.jsx)(u.Z, { guildId: t }),
            (0, r.jsxs)("div", {
                className: p.descriptors,
                children: [
                    (0, r.jsxs)("div", {
                        className: p.header,
                        children: [
                            m
                                ? (0, r.jsx)(l.Z, {
                                      guild: h,
                                      tooltipPosition: "bottom",
                                      tooltipColor: s.ua7.Colors.PRIMARY,
                                      className: p.guildBadge,
                                  })
                                : null,
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/semibold",
                                children: g,
                            }),
                        ],
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children:
                            null != i
                                ? i
                                : void 0 !== h.approximateMemberCount
                                  ? _.intl.format(f.default["5JmNgo"], { members: h.approximateMemberCount })
                                  : null,
                    }),
                ],
            }),
        ],
    });
};
