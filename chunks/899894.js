n.d(t, { V: () => p });
var i = n(627968);
n(64700);
var l = n(989349),
    a = n.n(l),
    r = n(661531),
    s = n(192308),
    o = n(939249),
    c = n(738188),
    d = n(834730),
    u = n(123292),
    _ = n(239093),
    m = n(985018),
    h = n(89453);
function p(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        l = t.fields?.find((e) => e.rawName === _.AT.CLASSIFICATION_ID) ?? void 0,
        p = l?.rawValue ?? void 0,
        g = t.fields?.find((e) => e.rawName === _.AT.INCIDENT_TIMESTAMP) ?? void 0,
        f = null == g || null == g.rawValue ? void 0 : parseFloat(g.rawValue);
    return null == p || null == f
        ? null
        : (0, i.jsxs)(o.D, {
              onClick: () => {
                  (0, s.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("83518"), n.e("29211"), n.e("93992")]).then(
                          n.bind(n, 385430),
                      );
                      return (t) =>
                          (0, i.jsx)(e, {
                              classificationId: p,
                              source: _.XN.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose,
                          });
                  });
              },
              className: h.o3,
              children: [
                  (0, i.jsxs)("div", {
                      className: h.qZ,
                      children: [
                          (0, i.jsxs)("div", {
                              className: h.U1,
                              children: [
                                  (0, i.jsx)(c.i, { className: h.QW, color: r.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, i.jsx)(d.E, {
                                      variant: "text-md/semibold",
                                      children: m.intl.string(m.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: h.VU,
                              children: (0, i.jsx)(d.E, {
                                  variant: "text-xs/medium",
                                  children: m.intl.format(m.t.eevFb6, { daysAgo: a()().diff(a().unix(f), "days") }),
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: h.vv,
                              children: (0, i.jsx)(d.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: m.intl.string(m.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: h.xQ,
                      children: (0, i.jsx)(u.Q, { text: m.intl.string(m.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
