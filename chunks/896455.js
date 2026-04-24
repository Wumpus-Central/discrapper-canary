n.d(t, { default: () => c, t: () => u });
var i = n(627968),
    l = n(64700),
    s = n(189213),
    a = n(192308),
    r = n(151282),
    o = n(388096),
    d = n(985018);
let u = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";
function c(e) {
    let { channel: t, transitionState: n, onClose: c, defaultValue: h } = e,
        [m, p] = l.useState(h);
    return (0, i.jsx)(s.Modal, {
        transitionState: n,
        size: "md",
        title: d.intl.string(d.t["3+ii4F"]),
        onClose: c,
        actions: [
            { variant: "secondary", text: d.intl.string(d.t["ETE/oC"]), onClick: c },
            {
                variant: "primary",
                text: d.intl.string(d.t.iQ1SwX),
                onClick: () => {
                    (0, r.yF)({ channelId: t.id, scheduledTimestamp: m.toISOString() }), (0, a.closeModal)(u);
                },
            },
        ],
        children: (0, i.jsx)(o.A, { defaultValue: h, onChange: p }),
    });
}
