a.d(t, { i: () => f });
var r = a(627968);
a(64700);
var n = a(503698),
    l = a.n(n),
    i = a(575593),
    s = a(97808),
    o = a(778712),
    c = a(19575),
    d = a(562819),
    u = a(963977),
    h = a(985018),
    p = a(628538);
let m = c.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu,
    f = (e) => {
        let {
                item: t,
                user: a,
                isHighlighted: n = !1,
                avatarSize: s = o._3.SIZE_152,
                avatarPlaceholderSrc: c,
                className: f,
            } = e,
            b = (0, d.Te)(s),
            {
                avatarDecorationSrc: _,
                eventHandlers: g,
                avatarPlaceholderSrc: x,
            } = (0, u.A)({
                user: a,
                avatarDecorationOverride: t?.type === i.R.AVATAR_DECORATION ? t : void 0,
                size: b,
                onlyAnimateOnHoverOrFocus: !n,
            }),
            v = h.intl.formatToPlainString(h.t.Do2lxE, { a11y_text: t.label });
        return (0, r.jsx)(m, {
            ...g,
            avatarDecoration: _,
            src: n ? a?.getAvatarURL(void 0, 152, !0) : (c ?? x),
            imageClassName: n ? p.WG : void 0,
            className: l()(f, p.my),
            size: s,
            "aria-label": v,
        });
    };
