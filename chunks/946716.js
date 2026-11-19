var n = e(620632),
    i = e(319400),
    a = e(39418),
    o = e(652215);
e.d(
    r,
    {},
    {
        $: async function (t) {
            let { timeout: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
                return (await n.Bo.get({ url: o.Rsh.COLLECTIBLES_SEARCH, query: t, rejectWithError: !0, timeout: r }))
                    .body;
            } catch (r) {
                let t = new i.LG(r);
                throw ((0, a.o)(t), t);
            }
        },
    },
);
