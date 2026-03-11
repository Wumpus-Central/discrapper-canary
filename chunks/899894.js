n.d(t, { V: () => u });
var i = n(627968);
n(64700);
var r = n(989349),
    l = n.n(r),
    a = n(827734),
    s = n(397927),
    o = n(239093),
    d = n(985018),
    c = n(972678);
function u(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        r = t.fields?.find((e) => e.rawName === o.AT.CLASSIFICATION_ID) ?? void 0,
        u = r?.rawValue ?? void 0,
        _ = t.fields?.find((e) => e.rawName === o.AT.INCIDENT_TIMESTAMP) ?? void 0,
        m = null == _ || null == _.rawValue ? void 0 : parseFloat(_.rawValue);
    return null == u || null == m
        ? null
        : (0, i.jsxs)(s.DUT, {
              onClick: () => {
                  (0, s.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("83518"), n.e("9407"), n.e("70660")]).then(
                          n.bind(n, 956450),
                      );
                      return (t) =>
                          (0, i.jsx)(e, {
                              classificationId: u,
                              source: o.XN.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose,
                          });
                  });
              },
              className: c.o3,
              children: [
                  (0, i.jsxs)("div", {
                      className: c.qZ,
                      children: [
                          (0, i.jsxs)("div", {
                              className: c.U1,
                              children: [
                                  (0, i.jsx)(s.id, { className: c.QW, color: a.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, i.jsx)(s.Text, {
                                      variant: "text-md/semibold",
                                      children: d.intl.string(d.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: c.VU,
                              children: (0, i.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  children: d.intl.format(d.t.eevFb6, { daysAgo: l()().diff(l().unix(m), "days") }),
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: c.vv,
                              children: (0, i.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: d.intl.string(d.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: c.xQ,
                      children: (0, i.jsx)(s.QWc, { text: d.intl.string(d.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
