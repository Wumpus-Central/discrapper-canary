n.d(t, {
    Kq: function () {
        return d;
    },
    Ot: function () {
        return u;
    },
    jz: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(534091),
    o = n(981631),
    c = n(246924);
function d(e) {
    let { locked: t = !1, channelType: n } = e,
        l = (0, a.useRedesignIconContext)().enabled,
        s = n === o.d4z.GUILD_VOICE || n === o.d4z.GUILD_STAGE_VOICE;
    if (!l)
        return (0, i.jsx)('div', {
            className: r()(c.emptyChannelIcon, c.emptyChannelIconSvg, {
                [c.locked]: t,
                [c.voiceChat]: s
            })
        });
    {
        let e = s ? a.ChatIcon : t ? a.TextLockIcon : a.TextIcon;
        return (0, i.jsx)('div', {
            className: r()(c.emptyChannelIcon, c.emptyChannelIconComponent),
            children: (0, i.jsx)(e, {
                color: a.tokens.colors.WHITE,
                size: 'custom',
                width: 42,
                height: 42
            })
        });
    }
}
function u(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)(a.Heading, {
        'aria-hidden': 'true',
        className: r()(n, c.header),
        variant: 'heading-xxl/extrabold',
        children: t
    });
}
function h(e) {
    let { children: t } = e;
    return (0, i.jsx)(a.Text, {
        variant: 'text-md/normal',
        color: 'none',
        className: c.description,
        children: t
    });
}
t.ZP = function (e) {
    let { className: t, channelId: n, children: l, ...a } = e;
    return (0, i.jsx)('div', {
        className: r()(t, c.container),
        id: (0, s.p)(n, n),
        ...a,
        children: l
    });
};
