l.d(n, { Z: () => o });
var t = l(951288);
l(647438);
var i = l(481060),
    a = l(840724),
    r = l(727366),
    d = l(693965);
function o(e) {
    let { applicationId: n, guildId: l, sectionTitle: o, skuIds: s, variant: c = a.Z.SMALL } = e;
    return null == s || 0 === s.length
        ? null
        : (0, t.jsxs)("div", {
              className: d.sectionContainer,
              children: [
                  null != o &&
                      (0, t.jsx)(i.Heading, {
                          variant: "heading-lg/semibold",
                          color: "header-primary",
                          lineClamp: 1,
                          className: d.sectionTitle,
                          children: o,
                      }),
                  (0, t.jsx)(r.t, {
                      applicationId: n,
                      skuIds: s,
                      variant: c,
                      guildId: l,
                  }),
              ],
          });
}
