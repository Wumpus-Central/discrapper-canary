n.d(t, { V: () => p });
var i = n(627968);
n(64700);
var l = n(989349),
    a = n.n(l),
    s = n(827734),
    r = n(192308),
    o = n(939249),
    d = n(738188),
    c = n(834730),
    u = n(123292),
    m = n(239093),
    _ = n(985018),
    h = n(89453);
function p(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        l = t.fields?.find((e) => e.rawName === m.AT.CLASSIFICATION_ID) ?? void 0,
        p = l?.rawValue ?? void 0,
        g = t.fields?.find((e) => e.rawName === m.AT.INCIDENT_TIMESTAMP) ?? void 0,
        A = null == g || null == g.rawValue ? void 0 : parseFloat(g.rawValue);
    return null == p || null == A
        ? null
        : (0, i.jsxs)(o.D, {
              onClick: () => {
                  (0, r.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("83518"), n.e("9407"), n.e("93992")]).then(
                          n.bind(n, 956450),
                      );
                      return (t) =>
                          (0, i.jsx)(e, {
                              classificationId: p,
                              source: m.XN.SystemDM,
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
                                  (0, i.jsx)(d.i, { className: h.QW, color: s.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, i.jsx)(c.E, {
                                      variant: "text-md/semibold",
                                      children: _.intl.string(_.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: h.VU,
                              children: (0, i.jsx)(c.E, {
                                  variant: "text-xs/medium",
                                  children: _.intl.format(_.t.eevFb6, { daysAgo: a()().diff(a().unix(A), "days") }),
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: h.vv,
                              children: (0, i.jsx)(c.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: _.intl.string(_.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: h.xQ,
                      children: (0, i.jsx)(u.Q, { text: _.intl.string(_.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
