s.d(e, { i: () => g });
var t = s(627968);
s(64700);
var r = s(503698),
    i = s.n(r),
    o = s(97808),
    n = s(778712),
    l = s(19575),
    c = s(562819),
    d = s(963977),
    p = s(375708),
    v = s(628538);
let u = l.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function g(a) {
    let {
            item: e,
            user: s,
            isHighlighted: r = !1,
            avatarSize: o = n._3.SIZE_152,
            avatarPlaceholderSrc: l,
            className: g,
        } = a,
        _ = (0, c.Te)(o),
        {
            avatarDecorationSrc: h,
            eventHandlers: m,
            avatarPlaceholderSrc: x,
        } = (0, d.A)({ user: s, avatarDecorationOverride: e, size: _, onlyAnimateOnHoverOrFocus: !r }),
        b = p.intl.formatToPlainString(p.t.Do2lxE, { a11y_text: e.label }),
        A = (0, n.FT)(n._3.SIZE_152);
    return (0, t.jsx)(u, {
        ...m,
        avatarDecoration: h,
        src: r ? s?.getAvatarURL(void 0, A, !0) : (l ?? x),
        imageClassName: r ? v.WG : void 0,
        className: i()(g, v.my),
        size: o,
        "aria-label": b,
    });
}
