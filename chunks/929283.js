r.d(e, { i: () => _ });
var t = r(627968);
r(64700);
var s = r(503698),
    i = r.n(s),
    n = r(97808),
    o = r(778712),
    l = r(19575),
    c = r(562819),
    p = r(963977),
    d = r(375708),
    v = r(628538);
let u = l.Ay.getEnableHardwareAcceleration() ? n.Js : n.eu;
function _(a) {
    let {
            item: e,
            user: r,
            guildId: s,
            isHighlighted: n = !1,
            avatarSize: l = o._3.SIZE_152,
            avatarPlaceholderSrc: _,
            className: g,
        } = a,
        h = (0, c.Te)(l),
        {
            avatarDecorationSrc: m,
            eventHandlers: b,
            avatarPlaceholderSrc: x,
        } = (0, p.A)({ user: r, guildId: s, avatarDecorationOverride: e, size: h, onlyAnimateOnHoverOrFocus: !n }),
        A = d.intl.formatToPlainString(d.t.Do2lxE, { a11y_text: e.label }),
        k = (0, o.FT)(o._3.SIZE_152);
    return (0, t.jsx)(u, {
        ...b,
        avatarDecoration: m,
        src: n ? r?.getAvatarURL(s, k, !0) : (_ ?? x),
        imageClassName: n ? v.WG : void 0,
        className: i()(g, v.my),
        size: l,
        "aria-label": A,
    });
}
