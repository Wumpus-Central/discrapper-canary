var i = e(477900),
    n = e(582128),
    r = e(564218),
    c = e(666476),
    l = e(989145),
    p = e(540665),
    s = e(716594),
    o = e(191850),
    u = e(792996);
e.d(
    a,
    {},
    {
        Hj: async function (t, a, e) {
            (0, p.ensureConnection)(t);
            let i = await (0, l.vX)(t, a);
            (0, p.dv)(t, e, [i]);
        },
        iG: async function (t, a) {
            let e,
                i =
                    ((e = a
                        .normalize("NFKD")
                        .replace(/[^a-zA-Z0-9]+/g, "-")
                        .replace(/^-+|-+$/g, "")
                        .slice(0, 64)
                        .replace(/-+$/g, "")
                        .toLowerCase()),
                    `${"" === e ? "conjure" : e}.zip`),
                n = await (0, s.c)(t, i);
            await (0, r.H)(n, i);
        },
        vt: function (t) {
            let a = "" === t.type ? "application/octet-stream" : t.type;
            return (0, c.Oq)(t.size, a)
                ? null
                : u.intl.formatToPlainString(o.default.ThxcOX, { size: (0, c.sM)((0, c.Ju)(a)) });
        },
        yN: function (t) {
            let a = n.useRef(null),
                e = n.useCallback(
                    (a) => {
                        let e = a.target.files?.[0] ?? null;
                        ((a.target.value = ""), null != e && t(e));
                    },
                    [t],
                );
            return {
                open: () => a.current?.click(),
                input: (0, i.jsx)("input", {
                    ref: a,
                    type: "file",
                    accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
                    hidden: !0,
                    "aria-hidden": !0,
                    tabIndex: -1,
                    onChange: e,
                }),
            };
        },
    },
);
