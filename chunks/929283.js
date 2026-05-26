r.d(e, { i: () => g });
var t = r(627968);
r(64700);
var s = r(503698),
    i = r.n(s),
    o = r(575593),
    l = r(97808),
    n = r(778712),
    c = r(19575),
    d = r(562819),
    p = r(963977),
    v = r(375708),
    A = r(628538);
let u = c.Ay.getEnableHardwareAcceleration() ? l.Js : l.eu,
    g = (a) => {
        let {
                item: e,
                user: r,
                isHighlighted: s = !1,
                avatarSize: l = n._3.SIZE_152,
                avatarPlaceholderSrc: c,
                className: g,
            } = a,
            h = (0, d.Te)(l),
            {
                avatarDecorationSrc: m,
                eventHandlers: _,
                avatarPlaceholderSrc: b,
            } = (0, p.A)({
                user: r,
                avatarDecorationOverride: e?.type === o.R.AVATAR_DECORATION ? e : void 0,
                size: h,
                onlyAnimateOnHoverOrFocus: !s,
            }),
            x = v.intl.formatToPlainString(v.t.Do2lxE, { a11y_text: e.label });
        return (0, t.jsx)(u, {
            ..._,
            avatarDecoration: m,
            src: s ? r?.getAvatarURL(void 0, 152, !0) : (c ?? b),
            imageClassName: s ? A.WG : void 0,
            className: i()(g, A.my),
            size: l,
            "aria-label": x,
        });
    };
