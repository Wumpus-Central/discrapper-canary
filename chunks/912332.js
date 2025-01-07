t.d(n, {
    Np: function () {
        return u;
    },
    l8: function () {
        return o;
    },
    mc: function () {
        return s;
    },
    so: function () {
        return l;
    }
});
var a = t(200651);
t(192379);
var r = t(481060),
    i = t(822869);
let l = 'forward-modal';
function o(e) {
    let { message: n, source: o, initialSelectedDestinations: s = [], forwardOptions: u, onRequestSent: c } = e;
    (0, i.Lb)(n.channel_id, n.id, o),
        (0, r.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([t.e('6380'), t.e('19566')]).then(t.bind(t, 930864));
                return (t) =>
                    (0, a.jsx)(e, {
                        ...t,
                        message: n,
                        initialSelectedDestinations: s,
                        forwardOptions: u,
                        onRequestSent: c
                    });
            },
            { modalKey: l }
        );
}
function s() {
    (0, r.closeModal)(l);
}
function u(e) {
    let { message: n, failedDestinations: i, forwardOptions: l } = e;
    (0, r.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await t.e('86590').then(t.bind(t, 384331));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                message: n,
                failedDestinations: i,
                forwardOptions: l
            });
    });
}
