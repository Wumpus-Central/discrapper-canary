n.d(t, { i: () => m });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(575593),
    u = n(97808),
    o = n(778712),
    s = n(19575),
    d = n(562819),
    c = n(963977),
    A = n(985018),
    f = n(628538);
let p = s.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu,
    m = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: l = !1,
                avatarSize: u = o._3.SIZE_152,
                avatarPlaceholderSrc: s,
                className: m,
            } = e,
            y = (0, d.Te)(u),
            {
                avatarDecorationSrc: I,
                eventHandlers: g,
                avatarPlaceholderSrc: E,
            } = (0, c.A)({
                user: n,
                avatarDecorationOverride: t?.type === a.R.AVATAR_DECORATION ? t : void 0,
                size: y,
                onlyAnimateOnHoverOrFocus: !l,
            }),
            h = A.intl.formatToPlainString(A.t.Do2lxE, { a11y_text: t.label });
        return (0, r.jsx)(p, {
            ...g,
            avatarDecoration: I,
            src: l ? n?.getAvatarURL(void 0, 152, !0) : (s ?? E),
            imageClassName: l ? f.WG : void 0,
            className: i()(m, f.my),
            size: u,
            "aria-label": h,
        });
    };
