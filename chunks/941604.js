n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(606256),
    a = n(985018);
let r = "DOWNLOAD_APPS";
function o() {
    let e = (0, l.red)((e) => (0, l.fDT)(e, r));
    return (0, i.jsx)(s.A, {
        id: "app-download-button",
        onClick: () => {
            (0, l.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                    return (t) => (0, i.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: r },
            );
        },
        selected: e,
        tooltip: a.intl.string(a.t.Z7jwrJ),
        icon: l.s3U,
    });
}
