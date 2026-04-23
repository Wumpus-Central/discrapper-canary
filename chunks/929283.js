n.d(t, { i: () => A });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(575593),
    _ = n(97808),
    l = n(778712),
    o = n(19575),
    E = n(562819),
    d = n(963977),
    c = n(985018),
    u = n(628538);
let I = o.Ay.getEnableHardwareAcceleration() ? _.Js : _.eu,
    A = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: r = !1,
                avatarSize: _ = l._3.SIZE_152,
                avatarPlaceholderSrc: o,
                className: A,
            } = e,
            T = (0, E.Te)(_),
            {
                avatarDecorationSrc: S,
                eventHandlers: N,
                avatarPlaceholderSrc: O,
            } = (0, d.A)({
                user: n,
                avatarDecorationOverride: t?.type === s.R.AVATAR_DECORATION ? t : void 0,
                size: T,
                onlyAnimateOnHoverOrFocus: !r,
            }),
            R = c.intl.formatToPlainString(c.t.Do2lxE, { a11y_text: t.label });
        return (0, i.jsx)(I, {
            ...N,
            avatarDecoration: S,
            src: r ? n?.getAvatarURL(void 0, 152, !0) : (o ?? O),
            imageClassName: r ? u.WG : void 0,
            className: a()(A, u.my),
            size: _,
            "aria-label": R,
        });
    };
