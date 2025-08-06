(n.d(t, { Z: () => h }), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(755721),
    o = n(481060),
    c = n(480916),
    u = n(352075),
    d = n(20493);
let h = function (e) {
    let { title: t, description: n, agreement: l, disagreement: h, onAgree: p, onDisagree: f, imageClassName: g, agreementButtonColor: m = s.zx.Colors.RED, modalType: b, channelId: y, guildId: x } = e;
    i.useEffect(() => {
        (0, c.YT)(b, y, x);
    }, [b, y, x]);
    let j = i.useCallback(() => {
            ((0, c.qd)(c.iP.NSFW_CHANNEL_DISAGREE_CTA, b, y, x), null == f || f());
        }, [f, b, y, x]),
        _ = i.useCallback(() => {
            ((0, c.qd)(c.iP.NSFW_CHANNEL_AGREE_CTA, b, y, x), null == p || p());
        }, [p, b, y, x]);
    return (0, r.jsxs)(o.Kqy, {
        className: u.gatedContent,
        justify: 'center',
        align: 'center',
        direction: 'vertical',
        children: [
            (0, r.jsx)('div', { className: a()(u.image, g) }),
            (0, r.jsx)('div', {
                className: a()(u.title, d.marginBottom8),
                children: t
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-md/medium',
                className: a()(u.description, d.marginBottom20),
                children: n
            }),
            (0, r.jsxs)(o.Kqy, {
                direction: 'horizontal',
                justify: 'center',
                align: 'center',
                gap: 16,
                children: [
                    null != h && null != f
                        ? (0, r.jsx)(o.zxk, {
                              variant: 'secondary',
                              text: h,
                              onClick: j
                          })
                        : null,
                    null != l && null != p
                        ? (0, r.jsx)(s.zx, {
                              color: m,
                              onClick: _,
                              children: l
                          })
                        : null
                ]
            })
        ]
    });
};
