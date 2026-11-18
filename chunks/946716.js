var r = n(620632),
    l = n(319400),
    i = n(39418),
    o = n(652215);
n.d(
    e,
    {},
    {
        $: async function (t) {
            let { timeout: e } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
                return (await r.Bo.get({ url: o.Rsh.COLLECTIBLES_SEARCH, query: t, rejectWithError: !0, timeout: e }))
                    .body;
            } catch (e) {
                let t = new l.LG(e);
                throw ((0, i.o)(t), t);
            }
        },
    },
);
