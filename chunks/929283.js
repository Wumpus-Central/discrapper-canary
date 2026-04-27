"use strict";
r.d(t, { i: () => m });
var n = r(627968);
r(64700);
var i = r(503698),
    a = r.n(i),
    s = r(575593),
    l = r(97808),
    o = r(778712),
    c = r(19575),
    d = r(562819),
    u = r(963977),
    _ = r(985018),
    p = r(628538);
let f = c.Ay.getEnableHardwareAcceleration() ? l.Js : l.eu,
    m = (e) => {
        let {
                item: t,
                user: r,
                isHighlighted: i = !1,
                avatarSize: l = o._3.SIZE_152,
                avatarPlaceholderSrc: c,
                className: m,
            } = e,
            h = (0, d.Te)(l),
            {
                avatarDecorationSrc: g,
                eventHandlers: b,
                avatarPlaceholderSrc: A,
            } = (0, u.A)({
                user: r,
                avatarDecorationOverride: t?.type === s.R.AVATAR_DECORATION ? t : void 0,
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
            size: l,
            "aria-label": E,
        });
    };
