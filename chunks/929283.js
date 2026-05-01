n.d(t, { i: () => I });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(575593),
    l = n(97808),
    o = n(778712),
    d = n(19575),
    c = n(562819),
    _ = n(963977),
    E = n(985018),
    u = n(628538);
let A = d.Ay.getEnableHardwareAcceleration() ? l.Js : l.eu,
    I = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: a = !1,
                avatarSize: l = o._3.SIZE_152,
                avatarPlaceholderSrc: d,
                className: I,
            } = e,
            T = (0, c.Te)(l),
            {
                avatarDecorationSrc: h,
                eventHandlers: S,
                avatarPlaceholderSrc: N,
            } = (0, _.A)({
                user: n,
                avatarDecorationOverride: t?.type === s.R.AVATAR_DECORATION ? t : void 0,
                size: T,
                onlyAnimateOnHoverOrFocus: !a,
            }),
            f = E.intl.formatToPlainString(E.t.Do2lxE, { a11y_text: t.label });
        return (0, i.jsx)(A, {
            ...S,
            avatarDecoration: h,
            src: a ? n?.getAvatarURL(void 0, 152, !0) : (d ?? N),
            imageClassName: a ? u.WG : void 0,
            className: r()(I, u.my),
            size: l,
            "aria-label": f,
        });
    };
