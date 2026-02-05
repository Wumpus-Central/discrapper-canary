"use strict";
n.d(t, { i: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(575593),
    o = n(397927),
    l = n(954921),
    u = n(278539),
    c = n(837921),
    d = n(985018),
    _ = n(610003);
let f = c.Ay.getEnableHardwareAcceleration() ? o.JsQ : o.euF,
    p = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: i = !1,
                avatarSize: c = o._3J.SIZE_152,
                avatarPlaceholderSrc: p,
                className: h,
            } = e,
            m = (0, l.Te)(c),
            {
                avatarDecorationSrc: g,
                eventHandlers: E,
                avatarPlaceholderSrc: A,
            } = (0, u.A)({
                user: n,
                avatarDecorationOverride: t?.type === s.R.AVATAR_DECORATION ? t : void 0,
                size: m,
                onlyAnimateOnHoverOrFocus: !i,
            }),
            I = d.intl.formatToPlainString(d.t.Do2lxE, { a11y_text: t.label });
        return (0, r.jsx)(f, {
            ...E,
            avatarDecoration: g,
            src: i ? n?.getAvatarURL(void 0, 152, !0) : (p ?? A),
            imageClassName: i ? _.WG : void 0,
            className: a()(h, _.my),
            size: c,
            "aria-label": I,
        });
    };
