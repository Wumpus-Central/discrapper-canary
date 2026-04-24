"use strict";
n.d(t, { i: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(575593),
    s = n(97808),
    o = n(778712),
    c = n(19575),
    u = n(562819),
    d = n(963977),
    _ = n(985018),
    p = n(628538);
let f = c.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu,
    h = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: i = !1,
                avatarSize: s = o._3.SIZE_152,
                avatarPlaceholderSrc: c,
                className: h,
            } = e,
            m = (0, u.Te)(s),
            {
                avatarDecorationSrc: g,
                eventHandlers: b,
                avatarPlaceholderSrc: A,
            } = (0, d.A)({
                user: n,
                avatarDecorationOverride: t?.type === l.R.AVATAR_DECORATION ? t : void 0,
                size: m,
                onlyAnimateOnHoverOrFocus: !i,
            }),
            E = _.intl.formatToPlainString(_.t.Do2lxE, { a11y_text: t.label });
        return (0, r.jsx)(f, {
            ...b,
            avatarDecoration: g,
            src: i ? n?.getAvatarURL(void 0, 152, !0) : (c ?? A),
            imageClassName: i ? p.WG : void 0,
            className: a()(h, p.my),
            size: s,
            "aria-label": E,
        });
    };
