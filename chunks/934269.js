t.d(n, { u: () => d });
var l = t(192379),
    i = t(731965),
    r = t(881052),
    a = t(972959),
    s = t(699553);
let o = {},
    c = (0, a.H)((e, n) => ({
        profiles: {},
        isFetchingGuild: (e) => null != n().fetchPromises[e],
        error: null,
        fetchPromises: {},
        fetchGuildProfile: async function (t) {
            let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                a = n().fetchPromises[t];
            if (
                !(function (e) {
                    var n;
                    let t = Date.now();
                    return t - (null !== (n = o[e]) && void 0 !== n ? n : 0) > 60000;
                })(t) &&
                !l
            ) {
                var c;
                return null != a ? await a : Promise.resolve(null !== (c = n().profiles[t]) && void 0 !== c ? c : null);
            }
            o[t] = Date.now();
            try {
                if (null != a) return await a;
                {
                    let l = (async () => {
                        let l = await (0, s.C)(t),
                            r = n().profiles,
                            a = n().fetchPromises;
                        return (
                            null == a[t] ||
                                (delete a[t],
                                (0, i.j)(() => {
                                    e({
                                        profiles: {
                                            ...r,
                                            [t]: l
                                        },
                                        error: null,
                                        fetchPromises: a
                                    });
                                })),
                            l
                        );
                    })();
                    return (
                        (0, i.j)(() => {
                            e({
                                fetchPromises: {
                                    ...n().fetchPromises,
                                    [t]: l
                                }
                            });
                        }),
                        await l
                    );
                }
            } catch (s) {
                let l = new r.Hx(s),
                    a = n().fetchPromises;
                null != a[t] && delete a[t],
                    (0, i.j)(() => {
                        e({
                            error: l,
                            fetchPromises: a
                        });
                    });
            }
            return null;
        }
    }));
function d(e) {
    let n = c.useState((n) => (null != e ? n.profiles[e] : null), Object.is),
        t = c.useState((n) => null != e && null != n.fetchPromises[e], Object.is),
        i = c.useField('fetchGuildProfile');
    return {
        guildProfile: n,
        fetchGuildProfile: l.useCallback(
            async function () {
                let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (null == e) return null;
                try {
                    return await i(e, n);
                } catch (e) {
                    return null;
                }
            },
            [e, i]
        ),
        isFetching: t
    };
}
