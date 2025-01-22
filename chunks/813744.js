r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(200651);
r(192379);
var s = r(442837),
    l = r(481060),
    u = r(314910),
    c = r(857192),
    d = r(517100),
    f = r(594174),
    p = r(231338),
    h = r(717855);
function _() {
    var e;
    let n = (0, s.e7)([c.default], () => c.default.isIdleStatusIndicatorEnabled),
        r = (0, s.e7)([f.default], () => {
            var e, n;
            return null !== (n = null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n;
        }),
        [i, a] = (0, s.Wu)([d.Z], () => [d.Z.isIdle(), d.Z.isAFK()]),
        _ = [];
    return (
        !i && !a && _.push('ACTIVE'),
        i && _.push('IDLE'),
        a && _.push('AFK'),
        r && n
            ? (0, o.jsx)(u.ZP, {
                  children: (0, o.jsxs)('div', {
                      className: h.container,
                      children: [
                          (0, o.jsxs)('div', {
                              className: h.status,
                              children: [
                                  (0, o.jsx)(l.Status, {
                                      status: _.includes('ACTIVE') ? p.Sk.ONLINE : p.Sk.IDLE,
                                      className: h.statusIndicator
                                  }),
                                  (0, o.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: 'IDLE STATUS:'
                                  }),
                                  (0, o.jsx)('div', {
                                      className: h.statusText,
                                      children: (0, o.jsx)(l.Text, {
                                          variant: 'text-md/bold',
                                          children: _.join(' + ')
                                      })
                                  })
                              ]
                          }),
                          i &&
                              (0, o.jsxs)(l.Text, {
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
