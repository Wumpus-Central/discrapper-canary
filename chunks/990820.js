"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(397927);
let a = (e) => `gift-selection-modal-${e.id}`;
function s(e) {
    let {
        giftRecipient: t,
        onClose: s,
        analyticsLocations: o,
        analyticsLocation: l,
        analyticsObject: u,
        giftMessage: c,
        giftingOrigin: d,
    } = e;
    return (0, i.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("2292"), n.e("29716"), n.e("50299")]).then(n.bind(n, 806677));
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
        { modalKey: a(t), onCloseCallback: s },
    );
}
