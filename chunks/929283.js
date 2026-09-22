r.d(e, { i: () => _ });
var t = r(477900);
r(582128);
var i = r(503698),
    s = r.n(i),
    l = r(97808),
    n = r(778712),
    o = r(19575),
    c = r(562819),
    d = r(963977),
    v = r(375708),
    u = r(971817);
let p = o.Ay.getEnableHardwareAcceleration() ? l.Js : l.eu;
function _(a) {
    let {
            item: e,
            user: r,
            guildId: i,
            isHighlighted: l = !1,
            avatarSize: o = n._3.SIZE_152,
            avatarPlaceholderSrc: _,
            avatarSrcOverride: h,
            className: m,
        } = a,
        b = (0, c.Te)(o),
        {
            avatarDecorationSrc: A,
            eventHandlers: g,
            avatarPlaceholderSrc: k,
        } = (0, d.A)({ user: r, guildId: i, avatarDecorationOverride: e, size: b, onlyAnimateOnHoverOrFocus: !l }),
        y = v.intl.formatToPlainString(v.t.Do2lxE, { a11y_text: e.label }),
        E = (0, n.FT)(n._3.SIZE_152);
    return (0, t.jsx)(p, {
        ...g,
        avatarDecoration: A,
        src: l ? (h ?? r?.getAvatarURL(i, E, !0)) : (_ ?? k),
        imageClassName: l ? u.WG : void 0,
        className: s()(m, u.my),
        size: o,
        "aria-label": y,
    });
}
