"use strict";
n.d(t, { i: () => A });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(97808),
    l = n(778712),
    o = n(19575),
    d = n(562819),
    c = n(963977),
    u = n(375708),
    _ = n(31586);
let E = o.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu;
function A(e) {
    let {
            item: t,
            user: n,
            guildId: r,
            isHighlighted: s = !1,
            avatarSize: o = l._3.SIZE_152,
            avatarPlaceholderSrc: A,
            avatarSrcOverride: h,
            className: I,
        } = e,
        f = (0, d.Te)(o),
        {
            avatarDecorationSrc: p,
            eventHandlers: T,
            avatarPlaceholderSrc: m,
        } = (0, c.A)({ user: n, guildId: r, avatarDecorationOverride: t, size: f, onlyAnimateOnHoverOrFocus: !s }),
        g = u.intl.formatToPlainString(u.t.Do2lxE, { a11y_text: t.label }),
        S = (0, l.FT)(l._3.SIZE_152);
    return (0, i.jsx)(E, {
        ...T,
        avatarDecoration: p,
        src: s ? (h ?? n?.getAvatarURL(r, S, !0)) : (A ?? m),
        imageClassName: s ? _.WG : void 0,
        className: a()(I, _.my),
        size: o,
        "aria-label": g,
    });
}
