r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(200651);
r(192379);
var o = r(442837),
    l = r(481060),
    u = r(314910),
    c = r(857192),
    d = r(517100),
    f = r(594174),
    _ = r(231338),
    h = r(717855);
function p() {
    var e;
    let n = (0, o.e7)([c.default], () => c.default.isIdleStatusIndicatorEnabled),
        r = (0, o.e7)([f.default], () => {
            var e, n;
            return null !== (n = null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n;
        }),
        [i, a] = (0, o.Wu)([d.Z], () => [d.Z.isIdle(), d.Z.isAFK()]),
        p = [];
    return (
        !i && !a && p.push('ACTIVE'),
        i && p.push('IDLE'),
        a && p.push('AFK'),
        r && n
            ? (0, s.jsx)(u.ZP, {
                  children: (0, s.jsxs)('div', {
                      className: h.container,
                      children: [
                          (0, s.jsxs)('div', {
                              className: h.status,
                              children: [
                                  (0, s.jsx)(l.Status, {
                                      status: p.includes('ACTIVE') ? _.Sk.ONLINE : _.Sk.IDLE,
                                      className: h.statusIndicator
                                  }),
                                  (0, s.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: 'IDLE STATUS:'
                                  }),
                                  (0, s.jsx)('div', {
                                      className: h.statusText,
                                      children: (0, s.jsx)(l.Text, {
                                          variant: 'text-md/bold',
                                          children: p.join(' + ')
                                      })
                                  })
                              ]
                          }),
                          i &&
                              (0, s.jsxs)(l.Text, {
                                  variant: 'text-md/normal',
                                  children: [
                                      'Idle since:',
                                      ' ',
                                      new Date(null !== (e = d.Z.getIdleSince()) && void 0 !== e ? e : 0).toLocaleDateString(void 0, {
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
