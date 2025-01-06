t.d(n, {
    u: function () {
        return u;
    }
});
var i = t(192379),
    l = t(731965),
    r = t(881052),
    a = t(972959),
    s = t(699553);
let c = {},
    o = (0, a.H)((e, n) => ({
        profiles: {},
        isFetchingGuild: (e) => null != n().fetchPromises[e],
        error: null,
        fetchPromises: {},
        fetchGuildProfile: async function (t) {
            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                a = n().fetchPromises[t];
            if (
                !(function (e) {
                    var n;
                    let t = Date.now(),
                        i = null !== (n = c[e]) && void 0 !== n ? n : 0;
                    return t - i > 60000;
                })(t) &&
                !i
            ) {
                var o;
                return null != a ? await a : Promise.resolve(null !== (o = n().profiles[t]) && void 0 !== o ? o : null);
            }
            c[t] = Date.now();
            try {
                if (null != a) return await a;
                {
                    let i = (async () => {
                        let i = await (0, s.C)(t),
                            r = n().profiles,
                            a = n().fetchPromises;
                        return null == a[t]
                            ? i
                            : (delete a[t],
                              (0, l.j)(() => {
                                  e({
                                      profiles: {
                                          ...r,
                                          [t]: i
                                      },
                                      error: null,
                                      fetchPromises: a
                                  });
                              }),
                              i);
                    })();
                    return (
                        (0, l.j)(() => {
                            e({
                                fetchPromises: {
                                    ...n().fetchPromises,
                                    [t]: i
                                }
                            });
                        }),
                        await i
                    );
                }
            } catch (s) {
                let i = new r.Hx(s),
                    a = n().fetchPromises;
                null != a[t] && delete a[t],
                    (0, l.j)(() => {
                        e({
                            error: i,
                            fetchPromises: a
                        });
                    });
            }
            return null;
        }
    }));
function u(e) {
    let n = o.useState((n) => (null != e ? n.profiles[e] : null), Object.is),
        t = o.useState((n) => null != e && null != n.fetchPromises[e], Object.is),
        l = o.useField('fetchGuildProfile');
    return {
        guildProfile: n,
        fetchGuildProfile: i.useCallback(
            async function () {
                let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (null == e) return null;
                try {
                    return await l(e, n);
                } catch (e) {
                    return null;
                }
            },
            [e, l]
        ),
        isFetching: t
    };
}
