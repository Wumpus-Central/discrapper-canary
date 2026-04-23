n.d(t, { A: () => a, a: () => i }), n(134528), n(947204);
let i = "NativeAppStartup";
function r(e, t, n, i, r) {
    return `${e}:${t}:${n}:${i}:${r}`;
}
class l {
    channelsFetchStarted = new Set();
    channelsFetchedWithLocalMessages = new Set();
    channelsFetchedNetwork = new Set();
    fetchLogs = new Map();
    recordChannelFetchStart(e, t, n, i, l) {
        this.channelsFetchStarted.add(e),
            this.fetchLogs.set(r(e, t, n ?? null, i ?? null, l), {
                channelId: e,
                before: n ?? null,
                after: i ?? null,
                limit: l,
                startTime: Date.now(),
            });
    }
    recordChannelFetchedLocal(e, t, n, i, l, a) {
        this.channelsFetchedWithLocalMessages.add(e);
        let s = this.fetchLogs.get(r(e, t, n ?? null, i ?? null, l));
        null != s && (s.localMessageDetails = { loadTime: Date.now(), count: a.length, lastMessageId: a.at(-1)?.id });
    }
    recordChannelFetchedNetwork(e, t, n, i, l, a) {
        this.channelsFetchedNetwork.add(e);
        let s = this.fetchLogs.get(r(e, t, n ?? null, i ?? null, l));
        null != s && (s.networkMessageDetails = { loadTime: Date.now(), count: a.length, lastMessageId: a.at(-1)?.id });
    }
}
let a = new l();
