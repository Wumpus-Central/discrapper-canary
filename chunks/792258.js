n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(468194),
    s = n(399606),
    l = n(481060),
    c = n(372769),
    u = n(601964),
    d = n(914788),
    f = n(981631),
    _ = n(345909),
    p = n(388032),
    h = n(987588);
let m = [18, 18, 16, 16, 14, 12, 10];
function g(e) {
    var t;
    return null != (t = m[e.length - 1]) ? t : m[m.length - 1];
}
let E = (e) => {
    let { guildId: t } = e,
        n = (0, s.e7)([d.Z], () => d.Z.getGuild(t));
    if (void 0 === n) return null;
    let i = n.features.has(f.oNc.VERIFIED) || n.features.has(f.oNc.PARTNERED),
        { name: E } = n,
        b = (0, u.EB)(n, 40, !0),
        y = null,
        O = m[m.length - 1];
    return (
        null == n.icon && null != E && (O = g((y = (0, o.Zg)(E)))),
        (0, r.jsxs)("div", {
            className: h.container,
            children: [
                (0, r.jsxs)("div", {
                    style: { fontSize: O },
                    children: [
                        null != y
                            ? (0, r.jsx)("div", {
                                  className: a()(h.childWrapper, h.acronym),
                                  "aria-hidden": !0,
                                  children: y,
                              })
                            : null,
                        null != b
                            ? (0, r.jsx)(l.qEK, {
                                  src: b,
                                  size: l.EFr.SIZE_40,
                                  "aria-hidden": !0,
                              })
                            : null,
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: h.descriptors,
                    children: [
                        (0, r.jsxs)("div", {
                            className: h.header,
                            children: [
                                i
                                    ? (0, r.jsx)(c.Z, {
                                          guild: n,
                                          tooltipPosition: "bottom",
                                          tooltipColor: l.ua7.Colors.PRIMARY,
                                          className: h.guildBadge,
                                      })
                                    : null,
                                (0, r.jsx)(l.Text, {
                                    variant: "text-md/semibold",
                                    children: E,
                                }),
                            ],
                        }),
                        void 0 !== n.approximateMemberCount
                            ? (0, r.jsx)(l.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  children: p.intl.format(_.default["5JmNgo"], { members: n.approximateMemberCount }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
