n.d(t, { y: () => d });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(777207),
    s = n(962293),
    l = n(45251),
    c = n(388032),
    u = n(653048);
function d(e) {
    let { pendingScheduledMessage: t } = e,
        { channelId: n, scheduledTimestamp: i } = t;
    function d(e) {
        e.stopPropagation(), (0, l.pO)(n);
    }
    return (0, r.jsx)('div', {
        className: u.clipContainer,
        children: (0, r.jsx)('div', {
            className: u.container,
            children: (0, r.jsxs)('div', {
                className: u.scheduledMessageBar,
                children: [
                    (0, r.jsx)(a.x, {
                        color: 'header-secondary',
                        className: o()(u.text, u.scheduledMessageBarLabel),
                        variant: 'text-sm/normal',
                        children: c.NW.formatToPlainString(c.t.MQcRX1, { timestamp: new Date(i).valueOf() })
                    }),
                    (0, r.jsx)('div', {
                        className: u.actions,
                        children: (0, r.jsx)(s.B, { onClick: d })
                    })
                ]
            })
        })
    });
}
