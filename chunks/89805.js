a.d(i, { ActivityAgeGateModal: () => c });
var n = a(477900),
    e = a(582128),
    s = a(189213),
    l = a(306537),
    r = a(375708);
function c(t) {
    let { application: i, onAgree: a, onClose: c, onDisagree: o, channelId: E, transitionState: A } = t;
    e.useEffect(() => {
        (0, l.Bf)(l.A5.NSFW_EMBEDDED_ACTIVITY, E);
    }, [E]);
    let C = e.useCallback(() => {
            ((0, l.mU)(l.IY.NSFW_CHANNEL_AGREE_CTA, l.A5.NSFW_EMBEDDED_ACTIVITY, E), a(), c());
        }, [a, c, E]),
        _ = e.useCallback(() => {
            ((0, l.mU)(l.IY.NSFW_CHANNEL_DISAGREE_CTA, l.A5.NSFW_EMBEDDED_ACTIVITY, E), o(), c());
        }, [o, c, E]);
    return (0, n.jsx)(s.a, {
        transitionState: A,
        title: r.intl.string(r.t.SSDPOF),
        subtitle: r.intl.formatToPlainString(r.t.OgmIqy, { applicationName: i.name }),
        onClose: () => Promise.resolve(_()),
        actions: [
            { onClick: _, variant: "secondary", text: r.intl.string(r.t.hg1uxn) },
            { onClick: C, variant: "critical-primary", text: r.intl.string(r.t.wVq7uo) },
        ],
    });
}
