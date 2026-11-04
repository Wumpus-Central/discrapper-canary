function i(e, t, n, i, r) {
    return `${e}:${t}:${n}:${i}:${r}`;
}
(n(134528), n(947204));
let r = new (class {
    channelsFetchStarted = new Set();
    channelsFetchedWithLocalMessages = new Set();
    channelsFetchedNetwork = new Set();
    fetchLogs = new Map();
    recordChannelFetchStart(e, t, n, r, a) {
        (this.channelsFetchStarted.add(e),
            this.fetchLogs.set(i(e, t, n ?? null, r ?? null, a), {
                channelId: e,
                before: n ?? null,
                after: r ?? null,
                limit: a,
                startTime: Date.now(),
            }));
    }
    recordChannelFetchedLocal(e, t, n, r, a, s) {
        this.channelsFetchedWithLocalMessages.add(e);
        let l = this.fetchLogs.get(i(e, t, n ?? null, r ?? null, a));
        null != l && (l.localMessageDetails = { loadTime: Date.now(), count: s.length, lastMessageId: s.at(-1)?.id });
    }
    recordChannelFetchedNetwork(e, t, n, r, a, s) {
        this.channelsFetchedNetwork.add(e);
        let l = this.fetchLogs.get(i(e, t, n ?? null, r ?? null, a));
        null != l && (l.networkMessageDetails = { loadTime: Date.now(), count: s.length, lastMessageId: s.at(-1)?.id });
    }
})();
n.d(t, {}, { A: r, a: "NativeAppStartup" });
