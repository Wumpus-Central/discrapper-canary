n.d(t, { Z: () => s }), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(480916),
    o = n(469438);
let s = function (e) {
    let {
        title: t,
        description: n,
        agreement: s,
        disagreement: c,
        onAgree: u,
        onDisagree: d,
        modalType: p,
        channelId: h,
        guildId: f,
    } = e;
    i.useEffect(() => {
        (0, a.YT)(p, h, f);
    }, [p, h, f]);
    let m = i.useCallback(() => {
            (0, a.qd)(a.iP.NSFW_CHANNEL_DISAGREE_CTA, p, h, f), null == d || d();
        }, [d, p, h, f]),
        g = i.useCallback(() => {
            (0, a.qd)(a.iP.NSFW_CHANNEL_AGREE_CTA, p, h, f), null == u || u();
        }, [u, p, h, f]);
    return (0, r.jsxs)(l.Kqy, {
        justify: "center",
        align: "center",
        direction: "vertical",
        gap: 16,
        className: o.gatedContent,
        children: [
            (0, r.jsxs)(l.Kqy, {
                gap: 8,
                justify: "center",
                align: "center",
                direction: "vertical",
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-lg/semibold",
                        className: o.title,
                        children: t,
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/medium",
                        className: o.description,
                        color: "text-muted",
                        children: n,
                    }),
                ],
            }),
            (0, r.jsxs)(l.Kqy, {
                direction: "horizontal",
                justify: "center",
                align: "center",
                gap: 16,
                children: [
                    null != c && null != d
                        ? (0, r.jsx)(l.zxk, {
                              variant: "secondary",
                              text: c,
                              onClick: m,
                          })
                        : null,
                    null != s && null != u
                        ? (0, r.jsx)(l.zxk, {
                              onClick: g,
                              text: s,
                          })
                        : null,
                ],
            }),
        ],
    });
};
