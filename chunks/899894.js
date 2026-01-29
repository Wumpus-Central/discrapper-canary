n.d(t, {
    V: () => d,
});
var r = n(627968);
n(64700);
var i = n(989349),
    l = n.n(i),
    a = n(827734),
    s = n(397927),
    o = n(239093),
    c = n(985018),
    u = n(153400);

function d(e) {
    var t, i, d, p, m;
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let f = e.message.embeds[0],
        g =
            null != (t = null == (p = f.fields) ? void 0 : p.find((e) => e.rawName === o.AT.CLASSIFICATION_ID))
                ? t
                : void 0,
        h = null != (i = null == g ? void 0 : g.rawValue) ? i : void 0,
        _ =
            null != (d = null == (m = f.fields) ? void 0 : m.find((e) => e.rawName === o.AT.INCIDENT_TIMESTAMP))
                ? d
                : void 0,
        b = null == _ || null == _.rawValue ? void 0 : parseFloat(_.rawValue);
    return null == h || null == b
        ? null
        : (0, r.jsxs)(s.DUT, {
              onClick: () => {
                  (0, s.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("83518"), n.e("9407"), n.e("1708")]).then(
                          n.bind(n, 956450),
                      );
                      return (t) =>
                          (0, r.jsx)(e, {
                              classificationId: h,
                              source: o.XN.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose,
                          });
                  });
              },
              className: u.o3,
              children: [
                  (0, r.jsxs)("div", {
                      className: u.qZ,
                      children: [
                          (0, r.jsxs)("div", {
                              className: u.U1,
                              children: [
                                  (0, r.jsx)(s.id, {
                                      className: u.QW,
                                      color: a.A.colors.ICON_FEEDBACK_CRITICAL,
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-md/semibold",
                                      children: c.intl.string(c.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: u.VU,
                              children: (0, r.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  children: c.intl.format(c.t.eevFb6, {
                                      daysAgo: l()().diff(l().unix(b), "days"),
                                  }),
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: u.vv,
                              children: (0, r.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: c.intl.string(c.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: u.xQ,
                      children: (0, r.jsx)(s.QWc, {
                          text: c.intl.string(c.t.zKnzwm),
                          variant: "secondary",
                      }),
                  }),
              ],
          });
}
