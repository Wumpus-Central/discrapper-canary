a.d(t, { i: () => f });
var n = a(627968);
a(64700);
var l = a(503698),
    r = a.n(l),
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
                isHighlighted: l = !1,
                avatarSize: s = o._3.SIZE_152,
                avatarPlaceholderSrc: c,
                className: f,
            } = e,
            _ = (0, d.Te)(s),
            {
                avatarDecorationSrc: b,
                eventHandlers: g,
                avatarPlaceholderSrc: x,
            } = (0, u.A)({
                user: a,
                avatarDecorationOverride: t?.type === i.R.AVATAR_DECORATION ? t : void 0,
                size: _,
                onlyAnimateOnHoverOrFocus: !l,
            }),
            v = h.intl.formatToPlainString(h.t.Do2lxE, { a11y_text: t.label });
        return (0, n.jsx)(m, {
            ...g,
            avatarDecoration: b,
            src: l ? a?.getAvatarURL(void 0, 152, !0) : (c ?? x),
            imageClassName: l ? p.WG : void 0,
            className: r()(f, p.my),
            size: s,
            "aria-label": v,
        });
    };
