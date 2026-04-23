"use strict";
n.d(t, { A: () => R }), n(321073);
var r = n(812729),
    i = n.n(r),
    s = n(311907),
    a = n(562465),
    o = n(73153),
    l = n(77468),
    u = n(573648),
    c = n(139675),
    d = n(927813),
    _ = n(962173),
    f = n(351906),
    p = n(652215);
let h = +d.A.Millis.MINUTE,
    E = 5 * d.A.Millis.MINUTE,
    m = /live_user_(.*)-\{width\}/,
    g = null,
    A = 0,
    I = null,
    T = new Set(),
    S = {};
function y(e, t, n) {
    return a.Bo.get({
        url: `https://api.twitch.tv/helix${e}`,
        query: t,
        headers: { "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s", Authorization: `Bearer ${n}` },
        rejectWithError: !1,
    });
}
async function N(e, t) {
    let n = S[e];
    if (null != n) return n;
    let {
            body: { data: r },
        } = await y("/games", { id: e }, t),
        i = r[0]?.name;
    return (S[e] = i), i;
}
let v = new (class {
    _nextCheck;
    _started;
    constructor() {
        this._started = !1;
    }
    start() {
        this._started || ((this._started = !0), _.A.isFetching() ? l.A.fetch() : this._check());
    }
    stop() {
        (this._started = !1),
            (I = null),
            (A = 0),
            null != this._nextCheck && clearTimeout(this._nextCheck),
            o.h.dispatch({ type: "STREAMING_UPDATE", stream: null });
    }
    async _checkTwitch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (e.revoked || null == (t = t ?? e.accessToken)) return null;
        try {
            let {
                    body: { data: n },
                } = await y("/streams", { user_id: e.id, first: 1 }, t),
                r = n[0];
            if (null == r || "live" !== r.type) throw Error("no stream");
            let { thumbnail_url: i, game_id: s, title: a } = r,
                o = { large_image: null != i ? ((0, c.Di)(p.fg2.TWITCH, i) ?? void 0) : void 0 },
                l = await N(s, t),
                d = u.A.get(p.fg2.TWITCH),
                _ = m.exec(i)?.[1] ?? e.name,
                f = null != a && "" !== a ? a.slice(0, 128) : void 0,
                h = null != l && "" !== l ? l.slice(0, 128) : void 0;
            return {
                url: d.getPlatformUserUrl?.({ id: e.id, name: _ }),
                name: d.name,
                assets: o,
                details: f,
                state: h,
            };
        } catch (n) {
            if (401 === n.status && null == t)
                return l.A.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkTwitch(e, t))
                    .catch(() => null);
            return null;
        }
    }
    async _checkYouTube(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (((I = null), e.revoked || T.has(e.id))) return null;
        try {
            let {
                body: { items: n },
            } = await a.Bo.get({
                url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
                query: { part: "id,snippet", broadcastStatus: "active", broadcastType: "all" },
                headers: { Authorization: `Bearer ${null != t ? t : e.accessToken}` },
                oldFormErrors: !0,
                rejectWithError: !1,
            });
            if (n.length < 1) throw Error("no stream");
            let {
                    id: r,
                    snippet: { title: i, thumbnails: s },
                } = n[0],
                o = { large_image: (0, c.Di)(p.fg2.YOUTUBE, s.high.url) ?? void 0 },
                l = null != i && "" !== i ? i.slice(0, 128) : void 0;
            return (I = {
                url: `https://youtube.com/watch?v=${r}`,
                name: u.A.get(p.fg2.YOUTUBE).name,
                details: l,
                assets: o,
            });
        } catch (n) {
            if (401 === n.status && null == t)
                return l.A.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkYouTube(e, t))
                    .catch(() => null);
            return 403 === n.status && T.add(e.id), null;
        }
    }
    _check() {
        if (!this._started) return;
        let e = _.A.getAccounts();
        if (null == e) return;
        null != this._nextCheck && clearTimeout(this._nextCheck);
        let t = [p.fg2.TWITCH],
            n = Date.now();
        A <= n && (t.push(p.fg2.YOUTUBE), (A = n + E)),
            Promise.allSettled(
                e
                    .filter((e) => t.includes(e.type))
                    .map((e) => (e.type === p.fg2.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))),
            ).then((e) => {
                if (this._started) {
                    let t = e.find((e) => "fulfilled" === e.status && null != e.value)?.value;
                    null == t && null != I && (t = I), o.h.dispatch({ type: "STREAMING_UPDATE", stream: t });
                }
                this._scheduleCheck();
            });
    }
    _scheduleCheck() {
        this._started && (this._nextCheck = setTimeout(() => this._check(), h));
    }
})();
function C() {
    f.A.enabled ? v.start() : v.stop();
}
class O extends s.Ay.Store {
    static displayName = "ExternalStreamingStore";
    initialize() {
        C(), this.waitFor(_.A, f.A), this.syncWith([f.A], C);
    }
    getStream() {
        return g;
    }
}
let R = new O(o.h, {
    STREAMING_UPDATE: function (e) {
        if (i()(e.stream, g)) return !1;
        g = e.stream ?? null;
    },
    USER_CONNECTIONS_UPDATE: () => v._check(),
});
