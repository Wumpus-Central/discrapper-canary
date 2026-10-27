a.d(t, { Hj: () => h, iG: () => g, vt: () => f, yN: () => d });
var i = a(477900),
    n = a(582128),
    r = a(666476),
    l = a(989145),
    c = a(319481),
    o = a(721507),
    s = a(716594),
    u = a(248675),
    p = a(105292);
async function h(e, t, a) {
    (0, c.ensureConnection)(e);
    let i = await (0, l.vX)(e, t);
    (0, c.sendUserMessage)(e, a, [i]);
}
function f(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, r.Oq)(e.size, t)
        ? null
        : p.intl.formatToPlainString(u.default.ThxcOX, { size: (0, r.sM)((0, r.Ju)(t)) });
}
async function g(e, t) {
    let a,
        i =
            ((a = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === a ? "conjure" : a}.zip`),
        n = await (0, s.c)(e, i);
    await (0, o.o)(n, i);
}
function d(e) {
    let t = n.useRef(null),
        a = n.useCallback(
            (t) => {
                let a = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != a && e(a));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, i.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: a,
        }),
    };
}
