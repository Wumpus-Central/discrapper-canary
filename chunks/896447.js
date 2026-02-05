t.d(l, { A: () => c });
var n = t(627968),
    s = t(64700),
    a = t(397927),
    i = t(439303),
    d = t(183802),
    r = t(205830),
    o = t(770887);
function c(e) {
    let { analyticsSectionId: l, applicationId: t, guildId: c, sectionTitle: u, skuIds: g, variant: _ = d.s.SMALL } = e,
        p = s.useMemo(() => ({ pageSection: l, pageSectionTitle: u }), [l, u]);
    return null == g || 0 === g.length
        ? null
        : (0, n.jsx)(i.E9, {
              newValue: p,
              children: (0, n.jsxs)("div", {
                  className: o.h,
                  children: [
                      null != u &&
                          u.length > 0 &&
                          (0, n.jsx)(a.Heading, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: o.G,
                              children: u,
                          }),
                      (0, n.jsx)(r.$, { applicationId: t, skuIds: g, variant: _, guildId: c }),
                  ],
              }),
          });
}
