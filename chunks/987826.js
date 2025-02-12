n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(118012),
    l = n(864876);
function u(e) {
    var t;
    let { name: n, className: r, state: u, isInline: c, onClick: d } = e,
        f = n + (c ? ':' : ''),
        _ = null,
        p = o.Z.Colors.HEADER_PRIMARY;
    (null == u ? void 0 : u.isActive) && !c ? (_ = l.active) : (null == u ? void 0 : null === (t = u.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? (_ = l.error) : (null == u ? void 0 : u.hasValue) && !c && (_ = l.set);
    let h = (0, i.jsx)(o.Z, {
        size: c ? o.Z.Sizes.SIZE_16 : o.Z.Sizes.SIZE_14,
        color: p,
        className: a()(l.option, { [l.inline]: c }, _, r),
        children: f
    });
    return null == d
        ? h
        : (0, i.jsx)(s.P3F, {
              className: l.clickable,
              onClick: () => d(n),
              children: h
          });
}
