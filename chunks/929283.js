n.d(t, { i: () => m });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(575593),
    s = n(97808),
    o = n(778712),
    u = n(837921),
    c = n(562819),
    d = n(215689),
    _ = n(985018),
    p = n(628538);
let h = u.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu,
    m = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: l = !1,
                avatarSize: s = o._3.SIZE_152,
                avatarPlaceholderSrc: u,
                className: m,
            } = e,
            A = (0, c.Te)(s),
            {
                avatarDecorationSrc: f,
                eventHandlers: g,
                avatarPlaceholderSrc: E,
            } = (0, d.A)({
                user: n,
                avatarDecorationOverride: t?.type === a.R.AVATAR_DECORATION ? t : void 0,
                size: A,
                onlyAnimateOnHoverOrFocus: !l,
            }),
            C = _.intl.formatToPlainString(_.t.Do2lxE, { a11y_text: t.label });
        return (0, r.jsx)(h, {
            ...g,
            avatarDecoration: f,
            src: l ? n?.getAvatarURL(void 0, 152, !0) : (u ?? E),
            imageClassName: l ? p.WG : void 0,
            className: i()(m, p.my),
            size: s,
            "aria-label": C,
        });
    };
