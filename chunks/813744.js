(n.d(t, { Z: () => _ }), n(388685), n(539854));
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(314910),
    s = n(857192),
    l = n(517100),
    c = n(594174),
    u = n(231338),
    d = n(113024);
function _() {
    var e;
    let t = (0, i.e7)([s.default], () => s.default.isIdleStatusIndicatorEnabled),
        n = (0, i.e7)([c.default], () => {
            var e, t;
            return null != (t = null == (e = c.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
        }),
        [_, f] = (0, i.Wu)([l.Z], () => [l.Z.isIdle(), l.Z.isAFK()]),
        p = [];
    return (
        _ || f || p.push('ACTIVE'),
        _ && p.push('IDLE'),
        f && p.push('AFK'),
        n && t
            ? (0, r.jsx)(o.ZP, {
                  children: (0, r.jsxs)('div', {
                      className: d.container,
                      children: [
                          (0, r.jsxs)('div', {
                              className: d.status,
                              children: [
                                  (0, r.jsx)(a.qbd, {
                                      status: p.includes('ACTIVE') ? u.Sk.ONLINE : u.Sk.IDLE,
                                      className: d.statusIndicator
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: 'IDLE STATUS:'
                                  }),
                                  (0, r.jsx)('div', {
                                      className: d.statusText,
                                      children: (0, r.jsx)(a.Text, {
                                          variant: 'text-md/bold',
                                          children: p.join(' + ')
                                      })
                                  })
                              ]
                          }),
                          _ &&
                              (0, r.jsxs)(a.Text, {
                                  variant: 'text-md/normal',
                                  children: [
                                      'Idle since:',
                                      ' ',
                                      new Date(null != (e = l.Z.getIdleSince()) ? e : 0).toLocaleDateString(void 0, {
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
