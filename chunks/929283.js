r.d(e, { i: () => g });
var t = r(627968);
r(64700);
var s = r(503698),
    i = r.n(s),
    o = r(97808),
    l = r(778712),
    n = r(19575),
    c = r(562819),
    d = r(963977),
    p = r(375708),
    v = r(628538);
let u = n.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu,
    g = (a) => {
        let {
                item: e,
                user: r,
                isHighlighted: s = !1,
                avatarSize: o = l._3.SIZE_152,
                avatarPlaceholderSrc: n,
                className: g,
            } = a,
            h = (0, c.Te)(o),
            {
                avatarDecorationSrc: m,
                eventHandlers: b,
                avatarPlaceholderSrc: x,
            } = (0, d.A)({ user: r, avatarDecorationOverride: e, size: h, onlyAnimateOnHoverOrFocus: !s }),
            A = p.intl.formatToPlainString(p.t.Do2lxE, { a11y_text: e.label });
        return (0, t.jsx)(u, {
            ...b,
            avatarDecoration: m,
            src: s ? r?.getAvatarURL(void 0, 152, !0) : (n ?? x),
            imageClassName: s ? v.WG : void 0,
            className: i()(g, v.my),
            size: o,
            "aria-label": A,
        });
    };
