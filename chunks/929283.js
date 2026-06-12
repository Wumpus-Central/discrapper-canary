"use strict";
n.d(t, { i: () => f });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(97808),
    o = n(778712),
    l = n(19575),
    u = n(562819),
    c = n(963977),
    d = n(375708),
    _ = n(628538);
let h = l.Ay.getEnableHardwareAcceleration() ? a.Js : a.eu,
    f = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: r = !1,
                avatarSize: a = o._3.SIZE_152,
                avatarPlaceholderSrc: l,
                className: f,
            } = e,
            p = (0, u.Te)(a),
            {
                avatarDecorationSrc: E,
                eventHandlers: m,
                avatarPlaceholderSrc: g,
            } = (0, c.A)({ user: n, avatarDecorationOverride: t, size: p, onlyAnimateOnHoverOrFocus: !r }),
            A = d.intl.formatToPlainString(d.t.Do2lxE, { a11y_text: t.label });
        return (0, i.jsx)(h, {
            ...m,
            avatarDecoration: E,
            src: r ? n?.getAvatarURL(void 0, 152, !0) : (l ?? g),
            imageClassName: r ? _.WG : void 0,
            className: s()(f, _.my),
            size: a,
            "aria-label": A,
        });
    };
