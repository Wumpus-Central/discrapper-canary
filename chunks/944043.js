r.d(n, {
    Z: function () {
        return g;
    },
    t: function () {
        return i;
    }
});
var i,
    a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(793030),
    u = r(442837),
    c = r(481060),
    d = r(194359),
    f = r(699516),
    p = r(502762),
    h = r(981631),
    _ = r(388032),
    m = r(267895);
function g(e) {
    let { user: n, source: r } = e,
        {
            isPendingIncoming: i,
            isBlocked: o,
            isIgnored: g
        } = (0, u.cj)([f.Z], () => ({
            isPendingIncoming: f.Z.getRelationshipType(n.id) === h.OGo.PENDING_INCOMING,
            isBlocked: f.Z.isBlocked(n.id),
            isIgnored: f.Z.isIgnored(n.id)
        }));
    return o || (g && !i)
        ? (0, a.jsxs)(p.Z.Overlay, {
              className: s()(m.container, { [m.panel]: 0 === r }),
              children: [
                  o &&
                      (0, a.jsx)(l.xv, {
                          variant: 'text-sm/semibold',
                          color: 'header-secondary',
                          children: _.intl.string(_.t['oC/fU1'])
                      }),
                  g &&
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(l.xv, {
                                  variant: 'text-sm/semibold',
                                  color: 'header-secondary',
                                  children: _.intl.string(_.t.HXz5Ag)
                              }),
                              (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(l.xv, {
                                          variant: 'text-sm/semibold',
                                          color: 'header-secondary',
                                          children: '\u2022'
                                      }),
                                      (0, a.jsx)(l.xv, {
                                          variant: 'text-sm/semibold',
                                          color: 'header-secondary',
                                          children: _.intl.format(_.t.PrtAq6, {
                                              unignoreHook: (e, r) =>
                                                  (0, a.jsx)(
                                                      c.Anchor,
                                                      {
                                                          onClick: () => d.Z.unignoreUser(n.id, 'UserProfileRemediatedNotice'),
                                                          children: e
                                                      },
                                                      r
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
!(function (e) {
    (e[(e.PANEL = 0)] = 'PANEL'), (e[(e.MODAL = 1)] = 'MODAL'), (e[(e.POPOUT = 2)] = 'POPOUT');
})(i || (i = {}));
