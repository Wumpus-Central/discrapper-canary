a.d(i, {
    ActivityAgeGateModal: () => o,
});
var n = a(627968),
    e = a(64700),
    l = a(158954),
    s = a(847599),
    r = a(985018);

function o(t) {
    let { application: i, onAgree: a, onClose: o, onDisagree: c, channelId: E, transitionState: A } = t;
    e.useEffect(() => {
        (0, s.Bf)(s.A5.NSFW_EMBEDDED_ACTIVITY, E);
    }, [E]);
    let C = e.useCallback(() => {
            (0, s.mU)(s.IY.NSFW_CHANNEL_AGREE_CTA, s.A5.NSFW_EMBEDDED_ACTIVITY, E), a(), o();
        }, [a, o, E]),
        _ = e.useCallback(() => {
            (0, s.mU)(s.IY.NSFW_CHANNEL_DISAGREE_CTA, s.A5.NSFW_EMBEDDED_ACTIVITY, E), c(), o();
        }, [c, o, E]);
    return (0, n.jsx)(l.Modal, {
        transitionState: A,
        title: r.intl.string(r.t.SSDPOF),
        subtitle: r.intl.formatToPlainString(r.t.OgmIqy, {
            applicationName: i.name,
        }),
        onClose: () => Promise.resolve(_()),
        actions: [
            {
                onClick: _,
                variant: "secondary",
                text: r.intl.string(r.t.hg1uxn),
            },
            {
                onClick: C,
                variant: "critical-primary",
                text: r.intl.string(r.t.wVq7uo),
            },
        ],
    });
}
