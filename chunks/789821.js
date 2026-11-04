let r = /[\t\n,]/g,
    i = /\s{2,}/g,
    l = /[*"']/g;
t.d(
    n,
    {},
    {
        HR: function (e) {
            return e.sort((e, n) => {
                let t = e.replaceAll(l, ""),
                    r = n.replaceAll(l, "");
                return t.localeCompare(r);
            });
        },
        Mv: function (e) {
            return e.join(", ");
        },
        Uq: function (e) {
            return Array.from(new Set(e));
        },
        c_: function (e) {
            return e
                .split(r)
                .map((e) => e.replace(i, " ").trim())
                .filter((e) => e.length > 0);
        },
        ir: function (e) {
            return e.includes("\n") || e.includes(",");
        },
    },
);
