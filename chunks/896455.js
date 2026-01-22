n.d(t, {
    default: () => d,
    t: () => u,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(158954),
    a = n(397927),
    s = n(151282),
    o = n(388096),
    c = n(985018);
let u = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";
function d(e) {
    let { channel: t, transitionState: n, onClose: d, defaultValue: f } = e,
        [p, h] = l.useState(f);
    return (0, r.jsx)(i.Modal, {
        transitionState: n,
        size: "md",
        title: c.intl.string(c.t["3+ii4F"]),
        onClose: d,
        actions: [
            {
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oC"]),
                onClick: d,
            },
            {
                variant: "primary",
                text: c.intl.string(c.t.iQ1SwX),
                onClick: () => {
                    (0, s.yF)({
                        channelId: t.id,
                        scheduledTimestamp: p.toISOString(),
                    }),
                        (0, a.OoC)(u);
                },
            },
        ],
        children: (0, r.jsx)(o.A, {
            defaultValue: f,
            onChange: h,
        }),
    });
}
