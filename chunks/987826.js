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
        _ = null;
    (null == l ? void 0 : l.isActive) && !c ? (_ = s.active) : (null == l || null == (t = l.lastValidationResult) ? void 0 : t.success) === !1 ? (_ = s.error) : (null == l ? void 0 : l.hasValue) && !c && (_ = s.set);
    let f = (0, r.jsx)(o.Text, {
        variant: c ? 'text-md/normal' : 'text-sm/normal',
        color: 'text-primary',
        className: a()(s.option, { [s.inline]: c }, _, i),
        children: d
    });
    return null == u
        ? f
        : (0, r.jsx)(o.P3F, {
              className: s.clickable,
              onClick: () => u(n),
              children: f
          });
}
