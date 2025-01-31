n.d(l, { u: () => o });
var i = n(192379),
    t = n(731965),
    a = n(881052),
    s = n(972959),
    r = n(699553);
let c = {},
    d = (0, s.H)((e, l) => ({
        profiles: {},
        isFetchingGuild: (e) => null != l().fetchPromises[e],
        error: null,
        fetchPromises: {},
        fetchGuildProfile: async function (n) {
            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                s = l().fetchPromises[n];
            if (
                !(function (e) {
                    var l;
                    let n = Date.now();
                    return n - (null !== (l = c[e]) && void 0 !== l ? l : 0) > 60000;
                })(n) &&
                !i
            ) {
                var d;
                return null != s ? await s : Promise.resolve(null !== (d = l().profiles[n]) && void 0 !== d ? d : null);
            }
            c[n] = Date.now();
            try {
                if (null != s) return await s;
                {
                    let i = (async () => {
                        let i = await (0, r.C)(n),
                            a = l().profiles,
                            s = l().fetchPromises;
                        return (
                            null == s[n] ||
                                (delete s[n],
                                (0, t.j)(() => {
                                    e({
                                        profiles: {
                                            ...a,
                                            [n]: i
                                        },
                                        error: null,
                                        fetchPromises: s
                                    });
                                })),
                            i
                        );
                    })();
                    return (
                        (0, t.j)(() => {
                            e({
                                fetchPromises: {
                                    ...l().fetchPromises,
                                    [n]: i
                                }
                            });
                        }),
                        await i
                    );
                }
            } catch (r) {
                let i = new a.Hx(r),
                    s = l().fetchPromises;
                null != s[n] && delete s[n],
                    (0, t.j)(() => {
                        e({
                            error: i,
                            fetchPromises: s
                        });
                    });
            }
            return null;
        }
    }));
function o(e) {
    let l = d.useState((l) => (null != e ? l.profiles[e] : null), Object.is),
        n = d.useState((l) => null != e && null != l.fetchPromises[e], Object.is),
        t = d.useField('fetchGuildProfile');
    return {
        guildProfile: l,
        fetchGuildProfile: i.useCallback(
            async function () {
                let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (null == e) return null;
                try {
                    return await t(e, l);
                } catch (e) {
                    return null;
                }
            },
            [e, t]
        ),
        isFetching: n
    };
}
