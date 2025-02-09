n.d(t, { Z: () => f }), n(47120), n(653041);
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(314910),
    o = n(857192),
    l = n(517100),
    u = n(594174),
    c = n(231338),
    d = n(790522);
function f() {
    var e;
    let t = (0, r.e7)([o.default], () => o.default.isIdleStatusIndicatorEnabled),
        n = (0, r.e7)([u.default], () => {
            var e, t;
            return null !== (t = null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t;
        }),
        [f, _] = (0, r.Wu)([l.Z], () => [l.Z.isIdle(), l.Z.isAFK()]),
        p = [];
    return (
        f || _ || p.push('ACTIVE'),
        f && p.push('IDLE'),
        _ && p.push('AFK'),
        n && t
            ? (0, i.jsx)(s.ZP, {
                  children: (0, i.jsxs)('div', {
                      className: d.container,
                      children: [
                          (0, i.jsxs)('div', {
                              className: d.status,
                              children: [
                                  (0, i.jsx)(a.qbd, {
                                      status: p.includes('ACTIVE') ? c.Sk.ONLINE : c.Sk.IDLE,
                                      className: d.statusIndicator
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: 'IDLE STATUS:'
                                  }),
                                  (0, i.jsx)('div', {
                                      className: d.statusText,
                                      children: (0, i.jsx)(a.Text, {
                                          variant: 'text-md/bold',
                                          children: p.join(' + ')
                                      })
                                  })
                              ]
                          }),
                          f &&
                              (0, i.jsxs)(a.Text, {
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
