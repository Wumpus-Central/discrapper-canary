t.d(l, { A: () => c });
var n = t(627968),
    s = t(64700),
    a = t(534514),
    i = t(439303),
    r = t(183802),
    o = t(205830),
    d = t(259238);
function c(e) {
    let { analyticsSectionId: l, sectionTitle: t, skuIds: c, variant: u = r.s.SMALL } = e,
        _ = s.useMemo(() => ({ pageSection: l, pageSectionTitle: t }), [l, t]);
    return null == c || 0 === c.length
        ? null
        : (0, n.jsx)(i.E9, {
              newValue: _,
              children: (0, n.jsxs)("div", {
                  className: d.h,
                  children: [
                      null != t &&
                          t.length > 0 &&
                          (0, n.jsx)(a.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              className: d.G,
                              children: t,
                          }),
                      (0, n.jsx)(o.$, { skuIds: c, variant: u }),
                  ],
              }),
          });
}
