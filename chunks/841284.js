n.d(t, { y: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(777207),
    o = n(962293),
    l = n(45251),
    u = n(388032),
    c = n(522513);
function d(e) {
    let { pendingScheduledMessage: t } = e,
        { channelId: n, scheduledTimestamp: r } = t;
    function d(e) {
        e.stopPropagation(), (0, l.pO)(n);
    }
    return (0, i.jsx)('div', {
        className: c.clipContainer,
        children: (0, i.jsx)('div', {
            className: c.container,
            children: (0, i.jsxs)('div', {
                className: c.scheduledMessageBar,
                children: [
                    (0, i.jsx)(s.x, {
                        color: 'header-secondary',
                        className: a()(c.text, c.scheduledMessageBarLabel),
                        variant: 'text-sm/normal',
                        children: u.intl.formatToPlainString(u.t.MQcRX1, { timestamp: new Date(r).valueOf() })
                    }),
                    (0, i.jsx)('div', {
                        className: c.actions,
                        children: (0, i.jsx)(o.B, { onClick: d })
                    })
                ]
            })
        })
    });
}
