"use strict";
n.d(t, { A: () => a, a: () => i }), n(134528), n(947204);
let i = "NativeAppStartup";
function r(e, t, n, i, r) {
    return `${e}:${t}:${n}:${i}:${r}`;
}
class s {
    channelsFetchStarted = new Set();
    channelsFetchedWithLocalMessages = new Set();
    channelsFetchedNetwork = new Set();
    fetchLogs = new Map();
    recordChannelFetchStart(e, t, n, i, s) {
        this.channelsFetchStarted.add(e),
            this.fetchLogs.set(r(e, t, n ?? null, i ?? null, s), {
                channelId: e,
                before: n ?? null,
                after: i ?? null,
                limit: s,
                startTime: Date.now(),
            });
    }
    recordChannelFetchedLocal(e, t, n, i, s, a) {
        this.channelsFetchedWithLocalMessages.add(e);
        let o = this.fetchLogs.get(r(e, t, n ?? null, i ?? null, s));
        null != o && (o.localMessageDetails = { loadTime: Date.now(), count: a.length, lastMessageId: a.at(-1)?.id });
    }
    recordChannelFetchedNetwork(e, t, n, i, s, a) {
        this.channelsFetchedNetwork.add(e);
        let o = this.fetchLogs.get(r(e, t, n ?? null, i ?? null, s));
        null != o && (o.networkMessageDetails = { loadTime: Date.now(), count: a.length, lastMessageId: a.at(-1)?.id });
    }
}
let a = new s();
