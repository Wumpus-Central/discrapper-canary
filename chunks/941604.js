"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(606256),
    r = n(985018);
let a = "DOWNLOAD_APPS";
function o() {
    let e = (0, s.red)((e) => (0, s.fDT)(e, a));
    return (0, i.jsx)(l.A, {
        id: "app-download-button",
        onClick: () => {
            (0, s.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                    return (t) => (0, i.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: a },
            );
        },
        selected: e,
        tooltip: r.intl.string(r.t.Z7jwrJ),
        icon: s.s3U,
    });
}
