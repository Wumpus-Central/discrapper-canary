t.d(n, { Z: () => c });
var l = t(54381),
    i = t(473749),
    a = t(481060),
    o = t(590961),
    s = t(840724),
    r = t(727366),
    d = t(693965);
function c(e) {
    let { analyticsSectionId: n, applicationId: t, guildId: c, sectionTitle: u, skuIds: g, variant: p = s.Z.SMALL } = e,
        _ = i.useMemo(
            () => ({
                pageSection: n,
                pageSectionTitle: u,
            }),
            [n, u],
        );
    return null == g || 0 === g.length
        ? null
        : (0, l.jsx)(o.hL, {
              newValue: _,
              children: (0, l.jsxs)("div", {
                  className: d.sectionContainer,
                  children: [
                      null != u &&
                          u.length > 0 &&
                          (0, l.jsx)(a.Heading, {
                              variant: "heading-lg/semibold",
                              color: "header-primary",
                              lineClamp: 1,
                              className: d.sectionTitle,
                              children: u,
                          }),
                      (0, l.jsx)(r.t, {
                          applicationId: t,
                          skuIds: g,
                          variant: p,
                          guildId: c,
                      }),
                  ],
              }),
          });
}
