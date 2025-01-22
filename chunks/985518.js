r.d(n, {
    Ct: function () {
        return p;
    },
    UP: function () {
        return d;
    },
    ZP: function () {
        return _;
    },
    rj: function () {
        return f;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(929991),
    s = r(480739),
    l = r(228392),
    u = r(6496);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function d(e) {
    return ''.concat(s.AT.FORUM_CHANNEL, '_').concat(e);
}
function f(e, n, r) {
    (0, o.a8)(d(e), n, r);
}
function p(e, n, r) {
    (0, o.FL)(d(e), n, r);
}
function h(e) {
    let { guildId: n, channelId: r, sessionId: i, trackedFeedItems: a, isForcedFlush: o } = e,
        s = [],
        u = [];
    for (let e of Object.keys(a)) {
        let n = a[e].computeSeenTimeDestructive(o);
        n > 0 && (s.push(e), u.push(n));
    }
    0 !== s.length &&
        (0, l.qs)({
            guildId: n,
            channelId: r,
            sessionId: i,
            postIds: s,
            additionalTimes: u
        });
}
class _ extends s.zQ {
    constructor({ guildId: e, channelId: n, windowId: r, isPaused: i }) {
        super({
            windowId: r,
            isPaused: i,
            id: d(n)
        }),
            c(this, 'guildId', void 0),
            c(this, 'channelId', void 0),
            c(this, 'sessionId', void 0),
            c(this, 'createFlushSeenItemsFunction', (e) => {
                let n = this.trackedFeedItems,
                    r = this.channelId,
                    i = this.guildId,
                    a = {
                        guildId: i,
                        channelId: r,
                        sessionId: this.sessionId,
                        trackedFeedItems: n,
                        isForcedFlush: null != e
                    };
                return () => h(a);
            }),
            (this.guildId = e),
            (this.channelId = n),
            (this.sessionId = (0, u.WW)(n));
    }
}
