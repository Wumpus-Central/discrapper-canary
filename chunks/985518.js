n.d(t, {
    Ct: () => u,
    UP: () => l,
    ZP: () => f,
    rj: () => c
}),
    n(653041),
    n(47120);
var r = n(929991),
    i = n(480739),
    o = n(228392),
    a = n(6496);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    return ''.concat(i.AT.FORUM_CHANNEL, '_').concat(e);
}
function c(e, t, n) {
    (0, r.a8)(l(e), t, n);
}
function u(e, t, n) {
    (0, r.FL)(l(e), t, n);
}
function d(e) {
    let { guildId: t, channelId: n, sessionId: r, trackedFeedItems: i, isForcedFlush: a } = e,
        s = [],
        l = [];
    for (let e of Object.keys(i)) {
        let t = i[e].computeSeenTimeDestructive(a);
        t > 0 && (s.push(e), l.push(t));
    }
    0 !== s.length &&
        (0, o.qs)({
            guildId: t,
            channelId: n,
            sessionId: r,
            postIds: s,
            additionalTimes: l
        });
}
class f extends i.zQ {
    constructor({ guildId: e, channelId: t, windowId: n, isPaused: r }) {
        super({
            windowId: n,
            isPaused: r,
            id: l(t)
        }),
            s(this, 'guildId', void 0),
            s(this, 'channelId', void 0),
            s(this, 'sessionId', void 0),
            s(this, 'createFlushSeenItemsFunction', (e) => {
                let t = this.trackedFeedItems,
                    n = this.channelId,
                    r = {
                        guildId: this.guildId,
                        channelId: n,
                        sessionId: this.sessionId,
                        trackedFeedItems: t,
                        isForcedFlush: null != e
                    };
                return () => d(r);
            }),
            (this.guildId = e),
            (this.channelId = t),
            (this.sessionId = (0, a.WW)(t));
    }
}
