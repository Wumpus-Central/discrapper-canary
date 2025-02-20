n.d(t, { Z: () => f }), n(47120), n(653041);
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(314910),
    s = n(857192),
    l = n(517100),
    c = n(594174),
    u = n(231338),
    d = n(968253);
function f() {
    var e;
    let t = (0, i.e7)([s.default], () => s.default.isIdleStatusIndicatorEnabled),
        n = (0, i.e7)([c.default], () => {
            var e, t;
            return null !== (t = null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t;
        }),
        [f, p] = (0, i.Wu)([l.Z], () => [l.Z.isIdle(), l.Z.isAFK()]),
        _ = [];
    return (
        f || p || _.push('ACTIVE'),
        f && _.push('IDLE'),
        p && _.push('AFK'),
        n && t
            ? (0, r.jsx)(a.ZP, {
                  children: (0, r.jsxs)('div', {
                      className: d.container,
                      children: [
                          (0, r.jsxs)('div', {
                              className: d.status,
                              children: [
                                  (0, r.jsx)(o.qbd, {
                                      status: _.includes('ACTIVE') ? u.Sk.ONLINE : u.Sk.IDLE,
                                      className: d.statusIndicator
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      children: 'IDLE STATUS:'
                                  }),
                                  (0, r.jsx)('div', {
                                      className: d.statusText,
                                      children: (0, r.jsx)(o.Text, {
                                          variant: 'text-md/bold',
                                          children: _.join(' + ')
                                      })
                                  })
                              ]
                          }),
                          f &&
                              (0, r.jsxs)(o.Text, {
                                  variant: 'text-md/normal',
                                  children: [
                                      'Idle since:',
                                      ' ',
                                      new Date(null !== (e = l.Z.getIdleSince()) && void 0 !== e ? e : 0).toLocaleDateString(void 0, {
                                          year: 'numeric',
                                          day: 'numeric',
                                          month: 'numeric',
                                          hour: 'numeric',
                                          minute: 'numeric',
                                          second: 'numeric'
                                      })
                                  ]
                              })
                      ]
                  })
              })
            : null
    );
}
