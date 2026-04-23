"use strict";
n.d(t, { A: () => a, a: () => r }), n(134528), n(947204);
let r = "NativeAppStartup";
function i(e, t, n, r, i) {
    return `${e}:${t}:${n}:${r}:${i}`;
}
class s {
    channelsFetchStarted = new Set();
    channelsFetchedWithLocalMessages = new Set();
    channelsFetchedNetwork = new Set();
    fetchLogs = new Map();
    recordChannelFetchStart(e, t, n, r, s) {
        this.channelsFetchStarted.add(e),
            this.fetchLogs.set(i(e, t, n ?? null, r ?? null, s), {
                channelId: e,
                before: n ?? null,
                after: r ?? null,
                limit: s,
                startTime: Date.now(),
            });
    }
    recordChannelFetchedLocal(e, t, n, r, s, a) {
        this.channelsFetchedWithLocalMessages.add(e);
        let o = this.fetchLogs.get(i(e, t, n ?? null, r ?? null, s));
        null != o && (o.localMessageDetails = { loadTime: Date.now(), count: a.length, lastMessageId: a.at(-1)?.id });
    }
    recordChannelFetchedNetwork(e, t, n, r, s, a) {
        this.channelsFetchedNetwork.add(e);
        let o = this.fetchLogs.get(i(e, t, n ?? null, r ?? null, s));
        null != o && (o.networkMessageDetails = { loadTime: Date.now(), count: a.length, lastMessageId: a.at(-1)?.id });
    }
}
let a = new s();
