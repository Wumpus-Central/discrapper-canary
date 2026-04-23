"use strict";
n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(192308);
let s = {
    show(e) {
        let { url: t, trustUrl: s, onConfirm: a, onCancel: o, isProtocol: l, contextKey: u } = e;
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await n.e("14782").then(n.bind(n, 885293));
                return (n) => (0, r.jsx)(e, { ...n, url: t, isProtocol: l, trustUrl: s, onConfirm: a, onCancel: o });
            },
            { contextKey: u },
        );
    },
};
