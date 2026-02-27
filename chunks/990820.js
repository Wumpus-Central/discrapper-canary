"use strict";
n.d(t, { A: () => a });
var r = n(627968),
    i = n(397927);
let s = (e) => `gift-selection-modal-${e.id}`;
function a(e) {
    let {
        giftRecipient: t,
        onClose: a,
        analyticsLocations: o,
        analyticsLocation: l,
        analyticsObject: u,
        giftMessage: c,
        giftingOrigin: d,
    } = e;
    return (0, i.mMO)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("2292"),
                n.e("18731"),
                n.e("95320"),
                n.e("29716"),
                n.e("99430"),
                n.e("24795"),
            ]).then(n.bind(n, 806677));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    giftRecipient: t,
                    analyticsLocations: o,
                    analyticsLocation: l,
                    analyticsObject: u,
                    giftMessage: c,
                    giftingOrigin: d,
                });
        },
        { modalKey: s(t), onCloseCallback: a },
    );
}
