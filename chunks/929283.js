r.d(e, { i: () => _ });
var t = r(477900);
r(582128);
var s = r(503698),
    i = r.n(s),
    n = r(97808),
    o = r(778712),
    l = r(19575),
    c = r(562819),
    p = r(963977),
    d = r(375708),
    v = r(31586);
let u = l.Ay.getEnableHardwareAcceleration() ? n.Js : n.eu;
function _(a) {
    let {
            item: e,
            user: r,
            guildId: s,
            isHighlighted: n = !1,
            avatarSize: l = o._3.SIZE_152,
            avatarPlaceholderSrc: _,
            avatarSrcOverride: g,
            className: h,
        } = a,
        m = (0, c.Te)(l),
        {
            avatarDecorationSrc: b,
            eventHandlers: x,
            avatarPlaceholderSrc: A,
        } = (0, p.A)({ user: r, guildId: s, avatarDecorationOverride: e, size: m, onlyAnimateOnHoverOrFocus: !n }),
        k = d.intl.formatToPlainString(d.t.Do2lxE, { a11y_text: e.label }),
        y = (0, o.FT)(o._3.SIZE_152);
    return (0, t.jsx)(u, {
        ...x,
        avatarDecoration: b,
        src: n ? (g ?? r?.getAvatarURL(s, y, !0)) : (_ ?? A),
        imageClassName: n ? v.WG : void 0,
        className: i()(h, v.my),
        size: l,
        "aria-label": k,
    });
}
