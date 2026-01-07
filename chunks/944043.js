n.d(t, { Z: () => m });
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
    p = n(388032),
    _ = n(195581);
function m(e) {
    let { user: t, className: n } = e,
        {
            isPendingIncoming: i,
            isBlocked: m,
            isIgnored: h,
        } = (0, s.cj)([u.Z], () => ({
            isPendingIncoming: u.Z.getRelationshipType(t.id) === f.OGo.PENDING_INCOMING,
            isBlocked: u.Z.isBlocked(t.id),
            isIgnored: u.Z.isIgnored(t.id),
        }));
    return m || (h && !i)
        ? (0, r.jsxs)(d.Z.Overlay, {
              className: a()(_.container, n),
              children: [
                  m &&
                      (0, r.jsx)(o.xvT, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: p.intl.string(p.t["oC/fU6"]),
                      }),
                  h &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.xvT, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: p.intl.string(p.t.HXz5An),
                              }),
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(o.xvT, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: "\u2022",
                                      }),
                                      (0, r.jsx)(o.xvT, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: p.intl.format(p.t.PrtAqy, {
                                              unignoreHook: (e, n) =>
                                                  (0, r.jsx)(
                                                      l.eee,
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
