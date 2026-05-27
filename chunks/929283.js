"use strict";
n.d(t, { i: () => p });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(575593),
    o = n(97808),
    l = n(778712),
    u = n(19575),
    c = n(562819),
    d = n(963977),
    _ = n(375708),
    h = n(628538);
let f = u.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu,
    p = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: r = !1,
                avatarSize: o = l._3.SIZE_152,
                avatarPlaceholderSrc: u,
                className: p,
            } = e,
            E = (0, c.Te)(o),
            {
                avatarDecorationSrc: m,
                eventHandlers: g,
                avatarPlaceholderSrc: A,
            } = (0, d.A)({
                user: n,
                avatarDecorationOverride: t?.type === a.R.AVATAR_DECORATION ? t : void 0,
                size: E,
                onlyAnimateOnHoverOrFocus: !r,
            }),
            I = _.intl.formatToPlainString(_.t.Do2lxE, { a11y_text: t.label });
        return (0, i.jsx)(f, {
            ...g,
            avatarDecoration: m,
            src: r ? n?.getAvatarURL(void 0, 152, !0) : (u ?? A),
            imageClassName: r ? h.WG : void 0,
            className: s()(p, h.my),
            size: o,
            "aria-label": I,
        });
    };
