a.d(t, { Hj: () => f, iG: () => h, vt: () => d, yN: () => g });
var n = a(477900),
    i = a(582128),
    r = a(666476),
    l = a(989145),
    o = a(322227),
    u = a(721507),
    c = a(716594),
    s = a(87501),
    p = a(105292);
async function f(e, t, a) {
    (0, o.ensureConnection)(e);
    let n = await (0, l.vX)(e, t);
    (0, o.sendUserMessage)(e, a, [n]);
}
function d(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, r.Oq)(e.size, t)
        ? null
        : p.intl.formatToPlainString(s.default.ThxcOX, { size: (0, r.sM)((0, r.Ju)(t)) });
}
async function h(e, t) {
    let a,
        n =
            ((a = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === a ? "conjure" : a}.zip`),
        i = await (0, c.c)(e, n);
    await (0, u.o)(i, n);
}
function g(e) {
    let t = i.useRef(null),
        a = i.useCallback(
            (t) => {
                let a = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != a && e(a));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, n.jsx)("input", {
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
