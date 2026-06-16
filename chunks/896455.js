n.d(t, { default: () => c, t: () => u });
var a = n(627968),
    i = n(64700),
    s = n(189213),
    l = n(192308),
    r = n(151282),
    d = n(388096),
    o = n(375708);
let u = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";
function c(e) {
    let { channel: t, transitionState: n, onClose: c, defaultValue: m } = e,
        [S, E] = i.useState(m);
    return (0, a.jsx)(s.Modal, {
        transitionState: n,
        size: "md",
        title: o.intl.string(o.t["3+ii4F"]),
        onClose: c,
        actions: [
            { variant: "secondary", text: o.intl.string(o.t["ETE/oC"]), onClick: c },
            {
                variant: "primary",
                text: o.intl.string(o.t.iQ1SwX),
                onClick: () => {
                    (0, r.yF)({ channelId: t.id, scheduledTimestamp: S.toISOString() }), (0, l.closeModal)(u);
                },
            },
        ],
        children: (0, a.jsx)(d.A, { defaultValue: m, onChange: E }),
    });
}
