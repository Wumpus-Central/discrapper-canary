n.d(t, { Z: () => p }), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    c = n.n(o),
    s = n(481060),
    a = n(480916),
    l = n(600164),
    u = n(258083),
    g = n(802138);
let p = function (e) {
    let { title: t, description: n, agreement: o, disagreement: p, onAgree: f, onDisagree: d, imageClassName: b, agreementButtonColor: m = s.zxk.Colors.RED, modalType: O, channelId: y, guildId: j } = e;
    i.useEffect(() => {
        (0, a.YT)(O, y, j);
    }, [O, y, j]);
    let E = i.useCallback(() => {
            (0, a.qd)(a.iP.NSFW_CHANNEL_DISAGREE_CTA, O, y, j), null == d || d();
        }, [d, O, y, j]),
        h = i.useCallback(() => {
            (0, a.qd)(a.iP.NSFW_CHANNEL_AGREE_CTA, O, y, j), null == f || f();
        }, [f, O, y, j]);
    return (0, r.jsxs)(l.Z, {
        className: u.gatedContent,
        justify: l.Z.Justify.CENTER,
        align: l.Z.Align.CENTER,
        direction: l.Z.Direction.VERTICAL,
        children: [
            (0, r.jsx)('div', { className: c()(u.image, b) }),
            (0, r.jsx)('div', {
                className: c()(u.title, g.marginBottom8),
                children: t
            }),
            (0, r.jsx)('div', {
                className: c()(u.description, g.marginBottom20),
                children: n
            }),
            (0, r.jsxs)(l.Z, {
                justify: l.Z.Justify.CENTER,
                align: l.Z.Align.CENTER,
                grow: 0,
                children: [
                    null != p && null != d
                        ? (0, r.jsx)(s.zxk, {
                              className: u.action,
                              size: s.PhG.LARGE,
                              color: s.Ttl.PRIMARY,
                              onClick: E,
                              children: p
                          })
                        : null,
                    null != o && null != f
                        ? (0, r.jsx)(s.zxk, {
                              className: u.action,
                              color: m,
                              size: s.PhG.LARGE,
                              onClick: h,
                              children: o
                          })
                        : null
                ]
            })
        ]
    });
};
