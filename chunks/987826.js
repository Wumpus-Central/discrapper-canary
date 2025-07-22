n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(362560);
function l(e) {
    var t;
    let { name: n, className: i, state: l, isInline: c, onClick: u } = e,
        d = n + (c ? ':' : ''),
        f = null;
    (null == l ? void 0 : l.isActive) && !c ? (f = s.active) : (null == l || null == (t = l.lastValidationResult) ? void 0 : t.success) === !1 ? (f = s.error) : (null == l ? void 0 : l.hasValue) && !c && (f = s.set);
    let _ = (0, r.jsx)(o.Text, {
        variant: c ? 'text-md/normal' : 'text-sm/normal',
        color: 'text-primary',
        className: a()(s.option, { [s.inline]: c }, f, i),
        children: d
    });
    return null == u
        ? _
        : (0, r.jsx)(o.P3F, {
              className: s.clickable,
              onClick: () => u(n),
              children: _
          });
}
