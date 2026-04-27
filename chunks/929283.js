"use strict";
r.d(t, { i: () => m });
var n = r(627968);
r(64700);
var i = r(503698),
    a = r.n(i),
    l = r(575593),
    s = r(97808),
    o = r(778712),
    c = r(19575),
    u = r(562819),
    d = r(963977),
    _ = r(985018),
    p = r(628538);
let f = c.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu,
    m = (e) => {
        let {
                item: t,
                user: r,
                isHighlighted: i = !1,
                avatarSize: s = o._3.SIZE_152,
                avatarPlaceholderSrc: c,
                className: m,
            } = e,
            h = (0, u.Te)(s),
            {
                avatarDecorationSrc: g,
                eventHandlers: b,
                avatarPlaceholderSrc: A,
            } = (0, d.A)({
                user: r,
                avatarDecorationOverride: t?.type === l.R.AVATAR_DECORATION ? t : void 0,
                size: h,
                onlyAnimateOnHoverOrFocus: !i,
            }),
            E = _.intl.formatToPlainString(_.t.Do2lxE, { a11y_text: t.label });
        return (0, n.jsx)(f, {
            ...b,
            avatarDecoration: g,
            src: i ? r?.getAvatarURL(void 0, 152, !0) : (c ?? A),
            imageClassName: i ? p.WG : void 0,
            className: a()(m, p.my),
            size: s,
            "aria-label": E,
        });
    };
