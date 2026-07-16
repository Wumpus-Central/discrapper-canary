n.d(t, { default: () => c, t: () => u });
var a = n(627968),
    i = n(64700),
    s = n(189213),
    l = n(192308),
    r = n(151282),
    o = n(388096),
    d = n(375708);
let u = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";
function c(e) {
    let { channel: t, transitionState: n, onClose: c, defaultValue: S } = e,
        [E, m] = i.useState(S);
    return (0, a.jsx)(s.Modal, {
        transitionState: n,
        size: "md",
        title: d.intl.string(d.t["3+ii4F"]),
        onClose: c,
        actions: [
            { variant: "secondary", text: d.intl.string(d.t["ETE/oC"]), onClick: c },
            {
                variant: "primary",
                text: d.intl.string(d.t.iQ1SwX),
                onClick: function () {
                    (0, r.yF)({ channelId: t.id, scheduledTimestamp: E.toISOString() }), (0, l.closeModal)(u);
                },
            },
        ],
        children: (0, a.jsx)(o.A, { defaultValue: S, onChange: m }),
    });
}
