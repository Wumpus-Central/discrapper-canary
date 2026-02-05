"use strict";
n.d(t, { A: () => s, a: () => r }), n(134528), n(947204);
let r = "NativeAppStartup";
function i(e, t, n, r, i) {
    return `${e}:${t}:${n}:${r}:${i}`;
}
class a {
    channelsFetchStarted = new Set();
    channelsFetchedWithLocalMessages = new Set();
    channelsFetchedNetwork = new Set();
    fetchLogs = new Map();
    recordChannelFetchStart(e, t, n, r, a) {
        this.channelsFetchStarted.add(e),
            this.fetchLogs.set(i(e, t, n ?? null, r ?? null, a), {
                channelId: e,
                before: n ?? null,
                after: r ?? null,
                limit: a,
                startTime: Date.now(),
            });
    }
    recordChannelFetchedLocal(e, t, n, r, a, s) {
        this.channelsFetchedWithLocalMessages.add(e);
        let o = this.fetchLogs.get(i(e, t, n ?? null, r ?? null, a));
        null != o && (o.localMessageDetails = { loadTime: Date.now(), count: s.length, lastMessageId: s.at(-1)?.id });
    }
    recordChannelFetchedNetwork(e, t, n, r, a, s) {
        this.channelsFetchedNetwork.add(e);
        let o = this.fetchLogs.get(i(e, t, n ?? null, r ?? null, a));
        null != o && (o.networkMessageDetails = { loadTime: Date.now(), count: s.length, lastMessageId: s.at(-1)?.id });
    }
}
let s = new a();
