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
            isHighlighted: r = !1,
            avatarSize: s = l._3.SIZE_152,
            avatarPlaceholderSrc: o,
            className: A,
        } = e,
        h = (0, d.Te)(s),
        {
            avatarDecorationSrc: I,
            eventHandlers: f,
            avatarPlaceholderSrc: p,
        } = (0, c.A)({ user: n, avatarDecorationOverride: t, size: h, onlyAnimateOnHoverOrFocus: !r }),
        T = u.intl.formatToPlainString(u.t.Do2lxE, { a11y_text: t.label }),
        m = (0, l.FT)(l._3.SIZE_152);
    return (0, i.jsx)(E, {
        ...f,
        avatarDecoration: I,
        src: r ? n?.getAvatarURL(void 0, m, !0) : (o ?? p),
        imageClassName: r ? _.WG : void 0,
        className: a()(A, _.my),
        size: s,
        "aria-label": T,
    });
}
