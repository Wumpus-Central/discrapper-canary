l.d(t, { A: () => r });
var s = l(562465),
    n = l(839214),
    i = l(652215);
let r = (0, n.D)((e, t) => ({
    imageHashes: [],
    isLoading: !1,
    guildId: null,
    abortController: null,
    cancelPendingFetch: () => {
        let { abortController: l } = t();
        null != l && (l.abort(), e({ abortController: null, isLoading: !1 }));
    },
    fetch: (l) => {
        let n = t();
        if (n.isLoading && n.guildId === l) return;
        n.cancelPendingFetch();
        let r = new AbortController();
        e({ isLoading: !0, guildId: l, abortController: r, imageHashes: [] }),
            s.Bo.get({
                url: i.Rsh.GUILD_VOICE_HANGOUT_RECENT_IMAGES(l),
                oldFormErrors: !0,
                rejectWithError: !1,
                signal: r.signal,
            })
                .then((s) => {
                    t().guildId === l && e({ imageHashes: s.body.image_hashes, isLoading: !1, abortController: null });
                })
                .catch(() => {
                    r.signal.aborted ||
                        (t().guildId === l && e({ imageHashes: [], isLoading: !1, abortController: null }));
                });
    },
}));
