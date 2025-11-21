l.d(n, { Z: () => c });
var t = l(54381),
    i = l(473749),
    a = l(481060),
    o = l(590961),
    r = l(840724),
    s = l(727366),
    d = l(693965);
function c(e) {
    let { analyticsSectionId: n, applicationId: l, guildId: c, sectionTitle: u, skuIds: g, variant: p = r.Z.SMALL } = e,
        _ = i.useMemo(
            () => ({
                pageSection: n,
                pageSectionTitle: u,
            }),
            [n, u],
        );
    return null == g || 0 === g.length
        ? null
        : (0, t.jsx)(o.hL, {
              newValue: _,
              children: (0, t.jsxs)("div", {
                  className: d.sectionContainer,
                  children: [
                      null != u &&
                          (0, t.jsx)(a.Heading, {
                              variant: "heading-lg/semibold",
                              color: "header-primary",
                              lineClamp: 1,
                              className: d.sectionTitle,
                              children: u,
                          }),
                      (0, t.jsx)(s.t, {
                          applicationId: l,
                          skuIds: g,
                          variant: p,
                          guildId: c,
                      }),
                  ],
              }),
          });
}
