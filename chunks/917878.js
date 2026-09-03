n.d(t, { A: () => s, a: () => i }), n(134528), n(947204);
let i = "NativeAppStartup";
function r(e, t, n, i, r) {
    return `${e}:${t}:${n}:${i}:${r}`;
}
class a {
    channelsFetchStarted = new Set();
    channelsFetchedWithLocalMessages = new Set();
    channelsFetchedNetwork = new Set();
    fetchLogs = new Map();
    recordChannelFetchStart(e, t, n, i, a) {
        this.channelsFetchStarted.add(e),
            this.fetchLogs.set(r(e, t, n ?? null, i ?? null, a), {
                channelId: e,
                before: n ?? null,
                after: i ?? null,
                limit: a,
                startTime: Date.now(),
            });
    }
    recordChannelFetchedLocal(e, t, n, i, a, s) {
        this.channelsFetchedWithLocalMessages.add(e);
        let l = this.fetchLogs.get(r(e, t, n ?? null, i ?? null, a));
        null != l && (l.localMessageDetails = { loadTime: Date.now(), count: s.length, lastMessageId: s.at(-1)?.id });
    }
    recordChannelFetchedNetwork(e, t, n, i, a, s) {
        this.channelsFetchedNetwork.add(e);
        let l = this.fetchLogs.get(r(e, t, n ?? null, i ?? null, a));
        null != l && (l.networkMessageDetails = { loadTime: Date.now(), count: s.length, lastMessageId: s.at(-1)?.id });
    }
}
let s = new a();
