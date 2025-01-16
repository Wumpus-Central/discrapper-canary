r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(118012),
    u = r(952670);
function c(e) {
    var n;
    let { name: r, className: a, state: c, isInline: d, onClick: f } = e,
        _ = r + (d ? ':' : ''),
        h = null,
        p = l.Z.Colors.HEADER_PRIMARY;
    (null == c ? void 0 : c.isActive) && !d ? (h = u.active) : (null == c ? void 0 : null === (n = c.lastValidationResult) || void 0 === n ? void 0 : n.success) === !1 ? (h = u.error) : (null == c ? void 0 : c.hasValue) && !d && (h = u.set);
    let m = (0, i.jsx)(l.Z, {
        size: d ? l.Z.Sizes.SIZE_16 : l.Z.Sizes.SIZE_14,
        color: p,
        className: s()(u.option, { [u.inline]: d }, h, a),
        children: _
    });
    return null == f
        ? m
        : (0, i.jsx)(o.Clickable, {
              className: u.clickable,
              onClick: () => f(r),
              children: m
          });
}
