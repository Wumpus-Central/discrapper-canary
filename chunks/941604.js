n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(32880),
    a = n(606256),
    r = n(985018);
let o = "DOWNLOAD_APPS";
function d() {
    let e = (0, l.useModalsStore)((e) => (0, l.hasModalOpenSelector)(e, o));
    return (0, i.jsx)(a.A, {
        id: "app-download-button",
        onClick: () => {
            (0, l.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("56423"), n.e("33255")]).then(n.bind(n, 987482));
                    return (t) => (0, i.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: o },
            );
        },
        selected: e,
        tooltip: r.intl.string(r.t.Z7jwrJ),
        icon: s.s,
    });
}
