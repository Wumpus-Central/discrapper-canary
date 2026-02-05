"use strict";
n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(397927);
let a = {
    show(e) {
        let { url: t, trustUrl: a, onConfirm: s, onCancel: o, isProtocol: l, contextKey: u } = e;
        (0, i.mMO)(
            async () => {
                let { default: e } = await n.e("14782").then(n.bind(n, 885293));
                return (n) => (0, r.jsx)(e, { ...n, url: t, isProtocol: l, trustUrl: a, onConfirm: s, onCancel: o });
            },
            { contextKey: u },
        );
    },
};
