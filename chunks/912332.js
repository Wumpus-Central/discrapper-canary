n.d(t, {
    Np: () => c,
    l8: () => s,
    mc: () => o,
    so: () => r
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(822869);
let r = 'forward-modal';
function s(e) {
    let { message: t, source: s, initialSelectedDestinations: o = [], forwardOptions: c, onRequestSent: d } = e;
    (0, a.Lb)(t.channel_id, t.id, s),
        (0, l.ZDy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e('25292'), n.e('6380'), n.e('13485')]).then(n.bind(n, 930864));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        message: t,
                        initialSelectedDestinations: o,
                        forwardOptions: c,
                        onRequestSent: d
                    });
            },
            { modalKey: r }
        );
}
function o() {
    (0, l.Mr3)(r);
}
function c(e) {
    let { message: t, failedDestinations: a, forwardOptions: r } = e;
    (0, l.ZDy)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e('86590').then(n.bind(n, 384331));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                message: t,
                failedDestinations: a,
                forwardOptions: r
            });
    });
}
