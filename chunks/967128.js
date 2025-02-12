n.d(t, {
    Kq: () => d,
    Ot: () => u,
    ZP: () => p,
    jz: () => h
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(534091),
    o = n(981631),
    c = n(61378);
function d(e) {
    let { locked: t = !1, channelType: n } = e,
        l = (0, r.bWb)().enabled,
        s = n === o.d4z.GUILD_VOICE || n === o.d4z.GUILD_STAGE_VOICE;
    if (!l)
        return (0, i.jsx)('div', {
            className: a()(c.emptyChannelIcon, c.emptyChannelIconSvg, {
                [c.locked]: t,
                [c.voiceChat]: s
            })
        });
    {
        let e = s ? r.kBi : t ? r.W4G : r.VL1;
        return (0, i.jsx)('div', {
            className: a()(c.emptyChannelIcon, c.emptyChannelIconComponent),
            children: (0, i.jsx)(e, {
                color: r.TVs.colors.WHITE,
                size: 'custom',
                width: 42,
                height: 42
            })
        });
    }
}
function u(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)(r.X6q, {
        'aria-hidden': 'true',
        className: a()(n, c.header),
        variant: 'heading-xxl/extrabold',
        children: t
    });
}
function h(e) {
    let { children: t } = e;
    return (0, i.jsx)(r.Text, {
        variant: 'text-md/normal',
        color: 'none',
        className: c.description,
        children: t
    });
}
let p = function (e) {
    let { className: t, channelId: n, children: l, ...r } = e;
    return (0, i.jsx)('div', {
        className: a()(t, c.container),
        id: (0, s.p)(n, n),
        ...r,
        children: l
    });
};
