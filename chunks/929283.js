"use strict";
n.d(t, { i: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(575593),
    o = n(397927),
    l = n(954921),
    u = n(278539),
    c = n(837921),
    d = n(940622),
    _ = n(985018),
    f = n(776205);
let p = c.Ay.getEnableHardwareAcceleration() ? o.JsQ : o.euF,
    h = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: i = !1,
                avatarSize: c = o._3J.SIZE_152,
                avatarPlaceholderSrc: h,
                className: m,
                showDefaultAvatar: E = !1,
                disableAnimation: g = !1,
            } = e,
            A = (0, l.Te)(c),
            I = (0, d.VU)(),
            {
                avatarDecorationSrc: T,
                eventHandlers: S,
                avatarPlaceholderSrc: y,
            } = (0, u.A)({
                user: n,
                avatarDecorationOverride: t?.type === a.R.AVATAR_DECORATION ? t : void 0,
                size: A,
                onlyAnimateOnHoverOrFocus: !i,
            }),
            v = null != I && "" !== I ? I : T,
            N = _.intl.formatToPlainString(_.t.Do2lxE, { a11y_text: t.label });
        return (0, r.jsx)(p, {
            ...(g ? {} : S),
            avatarDecoration: v,
            src: i && !E ? n?.getAvatarURL(void 0, 152, !0) : (h ?? y),
            imageClassName: i && !E ? f.WG : void 0,
            className: s()(m, f.my),
            size: c,
            "aria-label": N,
        });
    };
