n.d(t, { default: () => u, t: () => d });
var i = n(627968),
    l = n(64700),
    a = n(189213),
    s = n(192308),
    r = n(151282),
    o = n(388096),
    c = n(985018);
let d = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";
function u(e) {
    let { channel: t, transitionState: n, onClose: u, defaultValue: h } = e,
        [m, A] = l.useState(h);
    return (0, i.jsx)(a.Modal, {
        transitionState: n,
        size: "md",
        title: c.intl.string(c.t["3+ii4F"]),
        onClose: u,
        actions: [
            { variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: u },
            {
                variant: "primary",
                text: c.intl.string(c.t.iQ1SwX),
                onClick: () => {
                    (0, r.yF)({ channelId: t.id, scheduledTimestamp: m.toISOString() }), (0, s.closeModal)(d);
                },
            },
        ],
        children: (0, i.jsx)(o.A, { defaultValue: h, onChange: A }),
    });
}
