n.d(t, { A: () => r, a: () => i }), n(134528), n(947204);
let i = "NativeAppStartup";
function l(e, t, n, i, l) {
    return `${e}:${t}:${n}:${i}:${l}`;
}
class a {
    channelsFetchStarted = new Set();
    channelsFetchedWithLocalMessages = new Set();
    channelsFetchedNetwork = new Set();
    fetchLogs = new Map();
    recordChannelFetchStart(e, t, n, i, a) {
        this.channelsFetchStarted.add(e),
            this.fetchLogs.set(l(e, t, n ?? null, i ?? null, a), {
                channelId: e,
                before: n ?? null,
                after: i ?? null,
                limit: a,
                startTime: Date.now(),
            });
    }
    recordChannelFetchedLocal(e, t, n, i, a, r) {
        this.channelsFetchedWithLocalMessages.add(e);
        let s = this.fetchLogs.get(l(e, t, n ?? null, i ?? null, a));
        null != s && (s.localMessageDetails = { loadTime: Date.now(), count: r.length, lastMessageId: r.at(-1)?.id });
    }
    recordChannelFetchedNetwork(e, t, n, i, a, r) {
        this.channelsFetchedNetwork.add(e);
        let s = this.fetchLogs.get(l(e, t, n ?? null, i ?? null, a));
        null != s && (s.networkMessageDetails = { loadTime: Date.now(), count: r.length, lastMessageId: r.at(-1)?.id });
    }
}
let r = new a();
