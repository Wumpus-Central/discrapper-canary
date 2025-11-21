l.d(n, { Z: () => c });
var t = l(54381),
    i = l(473749),
    a = l(481060),
    o = l(590961),
    d = l(840724),
    r = l(727366),
    s = l(693965);
function c(e) {
    let { analyticsSectionId: n, applicationId: l, guildId: c, sectionTitle: u, skuIds: p, variant: g = d.Z.SMALL } = e,
        I = i.useMemo(
            () => ({
                section: n,
                sectionTitle: u,
            }),
            [n, u],
        );
    return null == p || 0 === p.length
        ? null
        : (0, t.jsx)(o.hL, {
              newValue: I,
              children: (0, t.jsxs)("div", {
                  className: s.sectionContainer,
                  children: [
                      null != u &&
                          (0, t.jsx)(a.Heading, {
                              variant: "heading-lg/semibold",
                              color: "header-primary",
                              lineClamp: 1,
                              className: s.sectionTitle,
                              children: u,
                          }),
                      (0, t.jsx)(r.t, {
                          applicationId: l,
                          skuIds: p,
                          variant: g,
                          guildId: c,
                      }),
                  ],
              }),
          });
}
