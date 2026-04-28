"use strict";
n.d(t, { i: () => m });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    l = n(575593),
    s = n(97808),
    o = n(778712),
    c = n(19575),
    d = n(562819),
    u = n(963977),
    _ = n(985018),
    p = n(628538);
let f = c.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu,
    m = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: a = !1,
                avatarSize: s = o._3.SIZE_152,
                avatarPlaceholderSrc: c,
                className: m,
            } = e,
            h = (0, d.Te)(s),
            {
                avatarDecorationSrc: g,
                eventHandlers: b,
                avatarPlaceholderSrc: A,
            } = (0, u.A)({
                user: n,
                avatarDecorationOverride: t?.type === l.R.AVATAR_DECORATION ? t : void 0,
                size: h,
                onlyAnimateOnHoverOrFocus: !a,
            }),
            E = _.intl.formatToPlainString(_.t.Do2lxE, { a11y_text: t.label });
        return (0, r.jsx)(f, {
            ...b,
            avatarDecoration: g,
            src: a ? n?.getAvatarURL(void 0, 152, !0) : (c ?? A),
            imageClassName: a ? p.WG : void 0,
            className: i()(m, p.my),
            size: s,
            "aria-label": E,
        });
    };
