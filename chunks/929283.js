r.d(e, { i: () => _ });
var t = r(627968);
r(64700);
var s = r(503698),
    i = r.n(s),
    o = r(97808),
    n = r(778712),
    l = r(19575),
    c = r(562819),
    d = r(963977),
    p = r(375708),
    v = r(922618);
let u = l.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function _(a) {
    let {
            item: e,
            user: r,
            isHighlighted: s = !1,
            avatarSize: o = n._3.SIZE_152,
            avatarPlaceholderSrc: l,
            className: _,
        } = a,
        g = (0, c.Te)(o),
        {
            avatarDecorationSrc: h,
            eventHandlers: m,
            avatarPlaceholderSrc: b,
        } = (0, d.A)({ user: r, avatarDecorationOverride: e, size: g, onlyAnimateOnHoverOrFocus: !s }),
        x = p.intl.formatToPlainString(p.t.Do2lxE, { a11y_text: e.label }),
        A = (0, n.FT)(n._3.SIZE_152);
    return (0, t.jsx)(u, {
        ...m,
        avatarDecoration: h,
        src: s ? r?.getAvatarURL(void 0, A, !0) : (l ?? b),
        imageClassName: s ? v.WG : void 0,
        className: i()(_, v.my),
        size: o,
        "aria-label": x,
    });
}
