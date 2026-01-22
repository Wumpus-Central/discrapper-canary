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
n.d(t, {
    A: () => o,
    a: () => i,
}),
    n(134528),
    n(947204),
    n(896048);
let i = "NativeAppStartup";
function a(e, t, n, r, i) {
    return "".concat(e, ":").concat(t, ":").concat(n, ":").concat(r, ":").concat(i);
}
class s {
    recordChannelFetchStart(e, t, n, r, i) {
        this.channelsFetchStarted.add(e),
            this.fetchLogs.set(a(e, t, null != n ? n : null, null != r ? r : null, i), {
                channelId: e,
                before: null != n ? n : null,
                after: null != r ? r : null,
                limit: i,
                startTime: Date.now(),
            });
    }
    recordChannelFetchedLocal(e, t, n, r, i, s) {
        var o;
        this.channelsFetchedWithLocalMessages.add(e);
        let l = this.fetchLogs.get(a(e, t, null != n ? n : null, null != r ? r : null, i));
        null != l &&
            (l.localMessageDetails = {
                loadTime: Date.now(),
                count: s.length,
                lastMessageId: null == (o = s.at(-1)) ? void 0 : o.id,
            });
    }
    recordChannelFetchedNetwork(e, t, n, r, i, s) {
        var o;
        this.channelsFetchedNetwork.add(e);
        let l = this.fetchLogs.get(a(e, t, null != n ? n : null, null != r ? r : null, i));
        null != l &&
            (l.networkMessageDetails = {
                loadTime: Date.now(),
                count: s.length,
                lastMessageId: null == (o = s.at(-1)) ? void 0 : o.id,
            });
    }
    constructor() {
        r(this, "channelsFetchStarted", new Set()),
            r(this, "channelsFetchedWithLocalMessages", new Set()),
            r(this, "channelsFetchedNetwork", new Set()),
            r(this, "fetchLogs", new Map());
    }
}
let o = new s();
