(n.d(t, { Z: () => p }), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(755721),
    s = n(481060),
    c = n(480916),
    u = n(352075),
    d = n(20493);
let p = function (e) {
    let { title: t, description: n, agreement: l, disagreement: p, onAgree: h, onDisagree: f, imageClassName: m, agreementButtonColor: g = o.zx.Colors.RED, modalType: b, channelId: _, guildId: y } = e;
    i.useEffect(() => {
        (0, c.YT)(b, _, y);
    }, [b, _, y]);
    let C = i.useCallback(() => {
            ((0, c.qd)(c.iP.NSFW_CHANNEL_DISAGREE_CTA, b, _, y), null == f || f());
        }, [f, b, _, y]),
        x = i.useCallback(() => {
            ((0, c.qd)(c.iP.NSFW_CHANNEL_AGREE_CTA, b, _, y), null == h || h());
        }, [h, b, _, y]);
    return (0, r.jsxs)(s.Kqy, {
        className: u.gatedContent,
        justify: 'center',
        align: 'center',
        direction: 'vertical',
        children: [
            (0, r.jsx)('div', { className: a()(u.image, m) }),
            (0, r.jsx)('div', {
                className: a()(u.title, d.marginBottom8),
                children: t
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/medium',
                className: a()(u.description, d.marginBottom20),
                children: n
            }),
            (0, r.jsxs)(s.Kqy, {
                direction: 'horizontal',
                justify: 'center',
                align: 'center',
                gap: 16,
                children: [
                    null != p && null != f
                        ? (0, r.jsx)(s.zxk, {
                              variant: 'secondary',
                              text: p,
                              onClick: C
                          })
                        : null,
                    null != l && null != h
                        ? (0, r.jsx)(o.zx, {
                              color: g,
                              onClick: x,
                              children: l
                          })
                        : null
                ]
            })
        ]
    });
};
