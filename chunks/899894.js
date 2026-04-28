n.d(t, { V: () => A });
var i = n(627968);
n(64700);
var l = n(989349),
    s = n.n(l),
    a = n(661531),
    r = n(192308),
    o = n(939249),
    d = n(738188),
    c = n(834730),
    u = n(123292),
    m = n(239093),
    h = n(985018),
    g = n(89453);
function A(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        l = t.fields?.find((e) => e.rawName === m.AT.CLASSIFICATION_ID) ?? void 0,
        A = l?.rawValue ?? void 0,
        p = t.fields?.find((e) => e.rawName === m.AT.INCIDENT_TIMESTAMP) ?? void 0,
        x = null == p || null == p.rawValue ? void 0 : parseFloat(p.rawValue);
    return null == A || null == x
        ? null
        : (0, i.jsxs)(o.D, {
              onClick: () => {
                  (0, r.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("57352"),
                          n.e("13554"),
                          n.e("61137"),
                          n.e("92030"),
                          n.e("51194"),
                          n.e("29211"),
                      ]).then(n.bind(n, 385430));
                      return (t) =>
                          (0, i.jsx)(e, {
                              classificationId: A,
                              source: m.XN.SystemDM,
                              transitionState: t.transitionState,
                              onClose: t.onClose,
                          });
                  });
              },
              className: g.o3,
              children: [
                  (0, i.jsxs)("div", {
                      className: g.qZ,
                      children: [
                          (0, i.jsxs)("div", {
                              className: g.U1,
                              children: [
                                  (0, i.jsx)(d.i, { className: g.QW, color: a.A.colors.ICON_FEEDBACK_CRITICAL }),
                                  (0, i.jsx)(c.E, {
                                      variant: "text-md/semibold",
                                      children: h.intl.string(h.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: g.VU,
                              children: (0, i.jsx)(c.E, {
                                  variant: "text-xs/medium",
                                  children: h.intl.format(h.t.eevFb6, { daysAgo: s()().diff(s().unix(x), "days") }),
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: g.vv,
                              children: (0, i.jsx)(c.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: h.intl.string(h.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: g.xQ,
                      children: (0, i.jsx)(u.Q, { text: h.intl.string(h.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
