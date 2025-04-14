n.d(t, { Z: () => d }), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(480916),
    c = n(352075),
    u = n(20493);
let d = function (e) {
    let { title: t, description: n, agreement: l, disagreement: d, onAgree: p, onDisagree: h, imageClassName: f, agreementButtonColor: m = a.zxk.Colors.RED, modalType: g, channelId: b, guildId: y } = e;
    i.useEffect(() => {
        (0, s.YT)(g, b, y);
    }, [g, b, y]);
    let _ = i.useCallback(() => {
            (0, s.qd)(s.iP.NSFW_CHANNEL_DISAGREE_CTA, g, b, y), null == h || h();
        }, [h, g, b, y]),
        C = i.useCallback(() => {
            (0, s.qd)(s.iP.NSFW_CHANNEL_AGREE_CTA, g, b, y), null == p || p();
        }, [p, g, b, y]);
    return (0, r.jsxs)(a.Kqy, {
        className: c.gatedContent,
        justify: 'center',
        align: 'center',
        direction: 'vertical',
        children: [
            (0, r.jsx)('div', { className: o()(c.image, f) }),
            (0, r.jsx)('div', {
                className: o()(c.title, u.marginBottom8),
                children: t
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/medium',
                className: o()(c.description, u.marginBottom20),
                children: n
            }),
            (0, r.jsxs)(a.Kqy, {
                direction: 'horizontal',
                justify: 'center',
                align: 'center',
                gap: 16,
                children: [
                    null != d && null != h
                        ? (0, r.jsx)(a.zxk, {
                              color: a.Ttl.PRIMARY,
                              onClick: _,
                              children: d
                          })
                        : null,
                    null != l && null != p
                        ? (0, r.jsx)(a.zxk, {
                              color: m,
                              onClick: C,
                              children: l
                          })
                        : null
                ]
            })
        ]
    });
};
