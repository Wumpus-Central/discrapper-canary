n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(118012),
    l = n(826640);
function c(e) {
    var t;
    let { name: n, className: i, state: c, isInline: u, onClick: d } = e,
        f = n + (u ? ':' : ''),
        p = null,
        _ = s.Z.Colors.HEADER_PRIMARY;
    (null == c ? void 0 : c.isActive) && !u ? (p = l.active) : (null == c ? void 0 : null === (t = c.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? (p = l.error) : (null == c ? void 0 : c.hasValue) && !u && (p = l.set);
    let h = (0, r.jsx)(s.Z, {
        size: u ? s.Z.Sizes.SIZE_16 : s.Z.Sizes.SIZE_14,
        color: _,
        className: o()(l.option, { [l.inline]: u }, p, i),
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
