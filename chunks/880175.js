function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function i(e, t, n, r) {
    return "".concat(e, ":").concat(t, ":").concat(n, ":").concat(r);
}
n.d(t, { Z: () => o }), n(388685);
class a {
    recordChannelFetchStart(e, t, n, r) {
        this.channelsFetchStarted.add(e),
            this.fetchLogs.set(i(e, null != t ? t : null, null != n ? n : null, r), {
                channelId: e,
                before: null != t ? t : null,
                after: null != n ? n : null,
                limit: r,
                startTime: Date.now(),
                hadLocalMessages: !1,
                fetchedFromNetwork: !1,
            });
    }
    recordChannelFetchedLocal(e, t, n, r) {
        this.channelsFetchedWithLocalMessages.add(e);
        let a = this.fetchLogs.get(i(e, null != t ? t : null, null != n ? n : null, r));
        null != a && (a.hadLocalMessages = !0);
    }
    recordChannelFetchedNetwork(e, t, n, r) {
        this.channelsFetchedNetwork.add(e);
        let a = this.fetchLogs.get(i(e, null != t ? t : null, null != n ? n : null, r));
        null != a && (a.fetchedFromNetwork = !0);
    }
    constructor() {
        r(this, "channelsFetchStarted", new Set()),
            r(this, "channelsFetchedWithLocalMessages", new Set()),
            r(this, "channelsFetchedNetwork", new Set()),
            r(this, "fetchLogs", new Map());
    }
}
let o = new a();
