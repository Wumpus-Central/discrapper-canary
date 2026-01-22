t.d(l, { A: () => c });
var n = t(627968),
    a = t(64700),
    s = t(397927),
    i = t(439303),
    d = t(183802),
    r = t(205830),
    o = t(770887);
function c(e) {
    let { analyticsSectionId: l, applicationId: t, guildId: c, sectionTitle: u, skuIds: f, variant: g = d.s.SMALL } = e,
        p = a.useMemo(
            () => ({
                pageSection: l,
                pageSectionTitle: u,
            }),
            [l, u],
        );
    return null == f || 0 === f.length
        ? null
        : (0, n.jsx)(i.E9, {
              newValue: p,
              children: (0, n.jsxs)("div", {
                  className: o.h,
                  children: [
                      null != u &&
                          u.length > 0 &&
                          (0, n.jsx)(s.Heading, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: o.G,
                              children: u,
                          }),
                      (0, n.jsx)(r.$, {
                          applicationId: t,
                          skuIds: f,
                          variant: g,
                          guildId: c,
                      }),
                  ],
              }),
          });
}
