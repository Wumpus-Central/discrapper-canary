"use strict";
n.d(t, { i: () => A });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(97808),
    l = n(778712),
    o = n(19575),
    d = n(562819),
    c = n(963977),
    u = n(375708),
    _ = n(628538);
let E = o.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu;
function A(e) {
    let {
            item: t,
            user: n,
            guildId: r,
            isHighlighted: s = !1,
            avatarSize: o = l._3.SIZE_152,
            avatarPlaceholderSrc: A,
            className: h,
        } = e,
        I = (0, d.Te)(o),
        {
            avatarDecorationSrc: f,
            eventHandlers: p,
            avatarPlaceholderSrc: T,
        } = (0, c.A)({ user: n, guildId: r, avatarDecorationOverride: t, size: I, onlyAnimateOnHoverOrFocus: !s }),
        m = u.intl.formatToPlainString(u.t.Do2lxE, { a11y_text: t.label }),
        g = (0, l.FT)(l._3.SIZE_152);
    return (0, i.jsx)(E, {
        ...p,
        avatarDecoration: f,
        src: s ? n?.getAvatarURL(r, g, !0) : (A ?? T),
        imageClassName: s ? _.WG : void 0,
        className: a()(h, _.my),
        size: o,
        "aria-label": m,
    });
}
