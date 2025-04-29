n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(118012),
    l = n(362560);
function c(e) {
    var t;
    let { name: n, className: i, state: c, isInline: u, onClick: d } = e,
        f = n + (u ? ':' : ''),
        _ = null,
        p = s.Z.Colors.HEADER_PRIMARY;
    (null == c ? void 0 : c.isActive) && !u ? (_ = l.active) : (null == c || null == (t = c.lastValidationResult) ? void 0 : t.success) === !1 ? (_ = l.error) : (null == c ? void 0 : c.hasValue) && !u && (_ = l.set);
    let h = (0, r.jsx)(s.Z, {
        size: u ? s.Z.Sizes.SIZE_16 : s.Z.Sizes.SIZE_14,
        color: p,
        className: o()(l.option, { [l.inline]: u }, _, i),
        children: f
    });
    return null == d
        ? h
        : (0, r.jsx)(a.P3F, {
              className: l.clickable,
              onClick: () => d(n),
              children: h
          });
}
