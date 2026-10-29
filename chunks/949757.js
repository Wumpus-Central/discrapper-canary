i.d(e, { Hj: () => p, iG: () => f, vt: () => h, yN: () => g });
var a = i(477900),
    n = i(582128),
    r = i(666476),
    l = i(989145),
    c = i(889921),
    u = i(721507),
    o = i(716594),
    s = i(248675),
    d = i(105292);
async function p(t, e, i) {
    (0, c.ensureConnection)(t);
    let a = await (0, l.vX)(t, e);
    (0, c.sendUserMessage)(t, i, [a]);
}
function h(t) {
    let e = "" === t.type ? "application/octet-stream" : t.type;
    return (0, r.Oq)(t.size, e)
        ? null
        : d.intl.formatToPlainString(s.default.ThxcOX, { size: (0, r.sM)((0, r.Ju)(e)) });
}
async function f(t, e) {
    let i,
        a =
            ((i = e
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === i ? "conjure" : i}.zip`),
        n = await (0, o.c)(t, a);
    await (0, u.o)(n, a);
}
function g(t) {
    let e = n.useRef(null),
        i = n.useCallback(
            (e) => {
                let i = e.target.files?.[0] ?? null;
                ((e.target.value = ""), null != i && t(i));
            },
            [t],
        );
    return {
        open: () => e.current?.click(),
        input: (0, a.jsx)("input", {
            ref: e,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: i,
        }),
    };
}
