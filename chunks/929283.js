"use strict";
n.d(t, { i: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(575593),
    o = n(397927),
    l = n(954921),
    u = n(278539),
    c = n(837921),
    d = n(985018),
    _ = n(776205);
let f = c.Ay.getEnableHardwareAcceleration() ? o.JsQ : o.euF,
    p = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: i = !1,
                avatarSize: c = o._3J.SIZE_152,
                avatarPlaceholderSrc: p,
                className: h,
                showDefaultAvatar: m = !1,
                disableAnimation: E = !1,
            } = e,
            g = (0, l.Te)(c),
            {
                avatarDecorationSrc: A,
                eventHandlers: I,
                avatarPlaceholderSrc: T,
            } = (0, u.A)({
                user: n,
                avatarDecorationOverride: t?.type === a.R.AVATAR_DECORATION ? t : void 0,
                size: g,
                onlyAnimateOnHoverOrFocus: !i,
            }),
            S = d.intl.formatToPlainString(d.t.Do2lxE, { a11y_text: t.label });
        return (0, r.jsx)(f, {
            ...(E ? {} : I),
            avatarDecoration: A,
            src: i && !m ? n?.getAvatarURL(void 0, 152, !0) : (p ?? T),
            imageClassName: i && !m ? _.WG : void 0,
            className: s()(h, _.my),
            size: c,
            "aria-label": S,
        });
    };
