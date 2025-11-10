t.d(n, { Z: () => o });
var l = t(951288);
t(647438);
var i = t(481060),
    a = t(840724),
    r = t(727366),
    d = t(693965);
function o(e) {
    let { applicationId: n, guildId: t, sectionTitle: o, skuIds: s, variant: c = a.Z.SMALL } = e;
    return null == s || 0 === s.length
        ? null
        : (0, l.jsxs)("div", {
              className: d.sectionContainer,
              children: [
                  null != o &&
                      (0, l.jsx)(i.Heading, {
                          variant: "heading-lg/semibold",
                          color: "header-primary",
                          lineClamp: 1,
                          className: d.sectionTitle,
                          children: o,
                      }),
                  (0, l.jsx)(r.t, {
                      applicationId: n,
                      skuIds: s,
                      variant: c,
                      guildId: t,
                  }),
              ],
          });
}
