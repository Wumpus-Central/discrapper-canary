"use strict";
n.d(t, { i: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(575593),
    o = n(97808),
    l = n(778712),
    u = n(837921),
    c = n(562819),
    d = n(215689),
    _ = n(985018),
    f = n(628538);
let p = u.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu,
    h = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: i = !1,
                avatarSize: o = l._3.SIZE_152,
                avatarPlaceholderSrc: u,
                className: h,
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
                onlyAnimateOnHoverOrFocus: !i,
            }),
            I = _.intl.formatToPlainString(_.t.Do2lxE, { a11y_text: t.label });
        return (0, r.jsx)(p, {
            ...g,
            avatarDecoration: m,
            src: i ? n?.getAvatarURL(void 0, 152, !0) : (u ?? A),
            imageClassName: i ? f.WG : void 0,
            className: s()(h, f.my),
            size: o,
            "aria-label": I,
        });
    };
