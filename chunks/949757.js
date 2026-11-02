a.d(e, { Hj: () => f, iG: () => h, vt: () => d, yN: () => E });
var i = a(477900),
    n = a(582128),
    r = a(666476),
    c = a(989145),
    o = a(322227),
    l = a(721507),
    p = a(716594),
    s = a(809526),
    u = a(105292);
async function f(t, e, a) {
    (0, o.ensureConnection)(t);
    let i = await (0, c.vX)(t, e);
    (0, o.sendUserMessage)(t, a, [i]);
}
function d(t) {
    let e = "" === t.type ? "application/octet-stream" : t.type;
    return (0, r.Oq)(t.size, e)
        ? null
        : u.intl.formatToPlainString(s.default.ThxcOX, { size: (0, r.sM)((0, r.Ju)(e)) });
}
async function h(t, e) {
    let a,
        i =
            ((a = e
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === a ? "conjure" : a}.zip`),
        n = await (0, p.c)(t, i);
    await (0, l.o)(n, i);
}
function E(t) {
    let e = n.useRef(null),
        a = n.useCallback(
            (e) => {
                let a = e.target.files?.[0] ?? null;
                ((e.target.value = ""), null != a && t(a));
            },
            [t],
        );
    return {
        open: () => e.current?.click(),
        input: (0, i.jsx)("input", {
            ref: e,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: a,
        }),
    };
}
