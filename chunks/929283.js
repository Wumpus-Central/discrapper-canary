r.d(e, { i: () => _ });
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
    _ = (a) => {
        let {
                item: e,
                user: r,
                isHighlighted: s = !1,
                avatarSize: o = l._3.SIZE_152,
                avatarPlaceholderSrc: n,
                className: _,
            } = a,
            g = (0, c.Te)(o),
            {
                avatarDecorationSrc: h,
                eventHandlers: m,
                avatarPlaceholderSrc: b,
            } = (0, d.A)({ user: r, avatarDecorationOverride: e, size: g, onlyAnimateOnHoverOrFocus: !s }),
            x = p.intl.formatToPlainString(p.t.Do2lxE, { a11y_text: e.label }),
            A = (0, l.FT)(l._3.SIZE_152);
        return (0, t.jsx)(u, {
            ...m,
            avatarDecoration: h,
            src: s ? r?.getAvatarURL(void 0, A, !0) : (n ?? b),
            imageClassName: s ? v.WG : void 0,
            className: i()(_, v.my),
            size: o,
            "aria-label": x,
        });
    };
