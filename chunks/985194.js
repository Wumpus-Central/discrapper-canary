t.d(l, { A: () => a });
var s = t(562465),
    n = t(839214),
    r = t(652215);
let a = (0, n.D)((e, l) => ({
    imageHashes: [],
    isLoading: !1,
    guildId: null,
    abortController: null,
    cancelPendingFetch: () => {
        let { abortController: t } = l();
        null != t && (t.abort(), e({ abortController: null, isLoading: !1 }));
    },
    fetch: (t) => {
        let n = l();
        if (n.isLoading && n.guildId === t) return;
        n.cancelPendingFetch();
        let a = new AbortController();
        e({ isLoading: !0, guildId: t, abortController: a, imageHashes: [] }),
            s.Bo.get({
                url: r.Rsh.GUILD_VOICE_HANGOUT_RECENT_IMAGES(t),
                oldFormErrors: !0,
                rejectWithError: !1,
                signal: a.signal,
            })
                .then((s) => {
                    l().guildId === t && e({ imageHashes: s.body.image_hashes, isLoading: !1, abortController: null });
                })
                .catch(() => {
                    a.signal.aborted ||
                        (l().guildId === t && e({ imageHashes: [], isLoading: !1, abortController: null }));
                });
    },
}));
