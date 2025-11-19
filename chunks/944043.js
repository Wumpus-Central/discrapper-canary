n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(442837),
    l = n(481060),
    c = n(194359),
    u = n(699516),
    d = n(502762),
    f = n(981631),
    _ = n(388032),
    p = n(649510);
function h(e) {
    let { user: t, className: n } = e,
        {
            isPendingIncoming: i,
            isBlocked: h,
            isIgnored: m,
        } = (0, s.cj)([u.Z], () => ({
            isPendingIncoming: u.Z.getRelationshipType(t.id) === f.OGo.PENDING_INCOMING,
            isBlocked: u.Z.isBlocked(t.id),
            isIgnored: u.Z.isIgnored(t.id),
        }));
    return h || (m && !i)
        ? (0, r.jsxs)(d.Z.Overlay, {
              className: a()(p.container, n),
              children: [
                  h &&
                      (0, r.jsx)(o.xvT, {
                          variant: "text-sm/semibold",
                          color: "header-secondary",
                          children: _.intl.string(_.t["oC/fU6"]),
                      }),
                  m &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.xvT, {
                                  variant: "text-sm/semibold",
                                  color: "header-secondary",
                                  children: _.intl.string(_.t.HXz5An),
                              }),
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(o.xvT, {
                                          variant: "text-sm/semibold",
                                          color: "header-secondary",
                                          children: "\u2022",
                                      }),
                                      (0, r.jsx)(o.xvT, {
                                          variant: "text-sm/semibold",
                                          color: "header-secondary",
                                          children: _.intl.format(_.t.PrtAqy, {
                                              unignoreHook: (e, n) =>
                                                  (0, r.jsx)(
                                                      l.Anchor,
                                                      {
                                                          onClick: () =>
                                                              c.Z.unignoreUser(t.id, "UserProfileRemediatedNotice"),
                                                          children: e,
                                                      },
                                                      n,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
              ],
          })
        : null;
}
