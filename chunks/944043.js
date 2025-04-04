n.d(t, {
    Z: () => m,
    t: () => h
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(793030),
    s = n(442837),
    l = n(481060),
    c = n(194359),
    u = n(699516),
    d = n(502762),
    f = n(981631),
    _ = n(388032),
    p = n(432940),
    h = (function (e) {
        return (e[(e.PANEL = 0)] = 'PANEL'), (e[(e.MODAL = 1)] = 'MODAL'), (e[(e.POPOUT = 2)] = 'POPOUT'), e;
    })({});
function m(e) {
    let { user: t, source: n } = e,
        {
            isPendingIncoming: i,
            isBlocked: h,
            isIgnored: m
        } = (0, s.cj)([u.Z], () => ({
            isPendingIncoming: u.Z.getRelationshipType(t.id) === f.OGo.PENDING_INCOMING,
            isBlocked: u.Z.isBlocked(t.id),
            isIgnored: u.Z.isIgnored(t.id)
        }));
    return h || (m && !i)
        ? (0, r.jsxs)(d.Z.Overlay, {
              className: o()(p.container, { [p.panel]: 0 === n }),
              children: [
                  h &&
                      (0, r.jsx)(a.xv, {
                          variant: 'text-sm/semibold',
                          color: 'header-secondary',
                          children: _.NW.string(_.t['oC/fU1'])
                      }),
                  m &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.xv, {
                                  variant: 'text-sm/semibold',
                                  color: 'header-secondary',
                                  children: _.NW.string(_.t.HXz5Ag)
                              }),
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(a.xv, {
                                          variant: 'text-sm/semibold',
                                          color: 'header-secondary',
                                          children: '\u2022'
                                      }),
                                      (0, r.jsx)(a.xv, {
                                          variant: 'text-sm/semibold',
                                          color: 'header-secondary',
                                          children: _.NW.format(_.t.PrtAq6, {
                                              unignoreHook: (e, n) =>
                                                  (0, r.jsx)(
                                                      l.eee,
                                                      {
                                                          onClick: () => c.Z.unignoreUser(t.id, 'UserProfileRemediatedNotice'),
                                                          children: e
                                                      },
                                                      n
                                                  )
                                          })
                                      })
                                  ]
                              })
                          ]
                      })
              ]
          })
        : null;
}
