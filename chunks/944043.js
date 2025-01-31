n.d(t, {
    Z: () => m,
    t: () => h
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(793030),
    o = n(442837),
    l = n(481060),
    u = n(194359),
    c = n(699516),
    d = n(502762),
    f = n(981631),
    _ = n(388032),
    p = n(267895),
    h = (function (e) {
        return (e[(e.PANEL = 0)] = 'PANEL'), (e[(e.MODAL = 1)] = 'MODAL'), (e[(e.POPOUT = 2)] = 'POPOUT'), e;
    })({});
function m(e) {
    let { user: t, source: n } = e,
        {
            isPendingIncoming: r,
            isBlocked: h,
            isIgnored: m
        } = (0, o.cj)([c.Z], () => ({
            isPendingIncoming: c.Z.getRelationshipType(t.id) === f.OGo.PENDING_INCOMING,
            isBlocked: c.Z.isBlocked(t.id),
            isIgnored: c.Z.isIgnored(t.id)
        }));
    return h || (m && !r)
        ? (0, i.jsxs)(d.Z.Overlay, {
              className: a()(p.container, { [p.panel]: 0 === n }),
              children: [
                  h &&
                      (0, i.jsx)(s.xv, {
                          variant: 'text-sm/semibold',
                          color: 'header-secondary',
                          children: _.intl.string(_.t['oC/fU1'])
                      }),
                  m &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(s.xv, {
                                  variant: 'text-sm/semibold',
                                  color: 'header-secondary',
                                  children: _.intl.string(_.t.HXz5Ag)
                              }),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(s.xv, {
                                          variant: 'text-sm/semibold',
                                          color: 'header-secondary',
                                          children: '\u2022'
                                      }),
                                      (0, i.jsx)(s.xv, {
                                          variant: 'text-sm/semibold',
                                          color: 'header-secondary',
                                          children: _.intl.format(_.t.PrtAq6, {
                                              unignoreHook: (e, n) =>
                                                  (0, i.jsx)(
                                                      l.eee,
                                                      {
                                                          onClick: () => u.Z.unignoreUser(t.id, 'UserProfileRemediatedNotice'),
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
