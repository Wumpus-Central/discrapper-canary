n.d(t, { Z: () => p }), n(953529);
var r = n(200651),
    i = n(192379),
    c = n(120356),
    o = n.n(c),
    l = n(481060),
    a = n(480916),
    s = n(352075),
    u = n(20493);
let p = function (e) {
    let { title: t, description: n, agreement: c, disagreement: p, onAgree: g, onDisagree: f, imageClassName: d, agreementButtonColor: b = l.zxk.Colors.RED, modalType: m, channelId: O, guildId: y } = e;
    i.useEffect(() => {
        (0, a.YT)(m, O, y);
    }, [m, O, y]);
    let j = i.useCallback(() => {
            (0, a.qd)(a.iP.NSFW_CHANNEL_DISAGREE_CTA, m, O, y), null == f || f();
        }, [f, m, O, y]),
        h = i.useCallback(() => {
            (0, a.qd)(a.iP.NSFW_CHANNEL_AGREE_CTA, m, O, y), null == g || g();
        }, [g, m, O, y]);
    return (0, r.jsxs)(l.Kqy, {
        className: s.gatedContent,
        justify: 'center',
        align: 'center',
        direction: 'vertical',
        children: [
            (0, r.jsx)('div', { className: o()(s.image, d) }),
            (0, r.jsx)('div', {
                className: o()(s.title, u.marginBottom8),
                children: t
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/medium',
                className: o()(s.description, u.marginBottom20),
                children: n
            }),
            (0, r.jsxs)(l.Kqy, {
                direction: 'horizontal',
                justify: 'center',
                align: 'center',
                gap: 16,
                children: [
                    null != p && null != f
                        ? (0, r.jsx)(l.zxk, {
                              color: l.Ttl.PRIMARY,
                              onClick: j,
                              children: p
                          })
                        : null,
                    null != c && null != g
                        ? (0, r.jsx)(l.zxk, {
                              color: b,
                              onClick: h,
                              children: c
                          })
                        : null
                ]
            })
        ]
    });
};
