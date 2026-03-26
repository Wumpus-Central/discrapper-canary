"use strict";
n.d(t, { i: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(575593),
    o = n(397927),
    l = n(837921),
    u = n(562819),
    c = n(215689),
    d = n(985018),
    _ = n(330);
let f = l.Ay.getEnableHardwareAcceleration() ? o.JsQ : o.euF,
    p = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: i = !1,
                avatarSize: l = o._3J.SIZE_152,
                avatarPlaceholderSrc: p,
                className: h,
            } = e,
            m = (0, u.Te)(l),
            {
                avatarDecorationSrc: E,
                eventHandlers: g,
                avatarPlaceholderSrc: A,
            } = (0, c.A)({
                user: n,
                avatarDecorationOverride: t?.type === a.R.AVATAR_DECORATION ? t : void 0,
                size: m,
                onlyAnimateOnHoverOrFocus: !i,
            }),
            I = d.intl.formatToPlainString(d.t.Do2lxE, { a11y_text: t.label });
        return (0, r.jsx)(f, {
            ...g,
            avatarDecoration: E,
            src: i ? n?.getAvatarURL(void 0, 152, !0) : (p ?? A),
            imageClassName: i ? _.WG : void 0,
            className: s()(h, _.my),
            size: l,
            "aria-label": I,
        });
    };
