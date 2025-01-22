var i = r(200651);
r(192379);
var a = r(481060);
n.Z = {
    show(e) {
        let { url: n, trustUrl: o, onConfirm: s, onCancel: l, isProtocol: u, contextKey: c } = e;
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await r.e('85668').then(r.bind(r, 720553));
                return (r) =>
                    (0, i.jsx)(e, {
                        ...r,
                        url: n,
                        isProtocol: u,
                        trustUrl: o,
                        onConfirm: s,
                        onCancel: l
                    });
            },
            { contextKey: c }
        );
    }
};
