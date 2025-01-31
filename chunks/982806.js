n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var r = n(481060);
let a = {
    show(e) {
        let { url: t, trustUrl: a, onConfirm: s, onCancel: o, isProtocol: l, contextKey: u } = e;
        (0, r.ZDy)(
            async () => {
                let { default: e } = await n.e('85668').then(n.bind(n, 720553));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        url: t,
                        isProtocol: l,
                        trustUrl: a,
                        onConfirm: s,
                        onCancel: o
                    });
            },
            { contextKey: u }
        );
    }
};
