"use strict";
n.d(t, { A: () => a });
var r = n(627968),
    i = n(397927);
let s = (e) => (null != e ? `gift-selection-modal-${e.id}` : "gift-selection-modal");
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
                n.e("12437"),
                n.e("3916"),
                n.e("55905"),
                n.e("29716"),
                n.e("65972"),
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
