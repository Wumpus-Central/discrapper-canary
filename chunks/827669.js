let i = [],
    r = /^<@\$(\d+)>/,
    a = RegExp(r.source.replace(/^\^/, ""), "g");
n.d(
    t,
    {},
    {
        Dx: a,
        EZ: function (e) {
            if (!e.includes("<@$")) return i;
            let t = [...e.matchAll(a)].map((e) => e[1]);
            return t.length > 0 ? t : i;
        },
        KW: function (e) {
            return `<@$${e}>`;
        },
        P7: r,
    },
);
