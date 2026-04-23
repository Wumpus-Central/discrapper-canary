"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(782603),
    l = n(67414),
    s = n(147036),
    a = n(888675),
    o = n(652215),
    c = n(905792);
function u(e) {
    let { giftIntentType: t, recipientUser: n, channel: u } = e;
    return (0, i.jsx)(a.A, {
        contentClassName: c.o9,
        iconContainerClassName: c.zc,
        iconNode: (0, i.jsx)(r.X, { colorClass: c.Kk }),
        children: (0, i.jsx)(l.A, {
            giftIntentType: t,
            recipientUser: n,
            analyticsPage: (0, s.DJ)(u),
            analyticsSection: o.JJy.CHANNEL,
        }),
    });
}
