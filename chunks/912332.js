t.d(n, {
    Np: () => c,
    l8: () => o,
    mc: () => s,
    so: () => l
});
var a = t(200651);
t(192379);
var i = t(481060),
    r = t(822869);
let l = 'forward-modal';
function o(e) {
    let { message: n, source: o, initialSelectedDestinations: s = [], forwardOptions: c, onRequestSent: u } = e;
    (0, r.Lb)(n.channel_id, n.id, o),
        (0, i.ZDy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([t.e('25292'), t.e('6380'), t.e('91717')]).then(t.bind(t, 930864));
                return (t) =>
                    (0, a.jsx)(e, {
                        ...t,
                        message: n,
                        initialSelectedDestinations: s,
                        forwardOptions: c,
                        onRequestSent: u
                    });
            },
            { modalKey: l }
        );
}
function s() {
    (0, i.Mr3)(l);
}
function c(e) {
    let { message: n, failedDestinations: r, forwardOptions: l } = e;
    (0, i.ZDy)(async () => {
        let { ForwardFailedAlertModal: e } = await t.e('86590').then(t.bind(t, 384331));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                message: n,
                failedDestinations: r,
                forwardOptions: l
            });
    });
}
