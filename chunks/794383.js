"use strict";
n.d(t, { A: () => R }), n(321073);
var i = n(812729),
    r = n.n(i),
    s = n(17928),
    a = n(636537),
    o = n(228366),
    l = n(77468),
    u = n(573648),
    c = n(970928),
    d = n(927813),
    _ = n(30370),
    f = n(351906),
    h = n(652215);
let p = +d.A.Millis.MINUTE,
    E = 5 * d.A.Millis.MINUTE,
    m = /live_user_(.*)-\{width\}/,
    g = null,
    A = 0,
    I = null,
    T = new Set(),
    S = {};
function N(e, t, n) {
    return a.Bo.get({
        url: `https://api.twitch.tv/helix${e}`,
        query: t,
        headers: { "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s", Authorization: `Bearer ${n}` },
        rejectWithError: !1,
    });
}
async function y(e, t) {
    let n = S[e];
    if (null != n) return n;
    let {
            body: { data: i },
        } = await N("/games", { id: e }, t),
        r = i[0]?.name;
    return (S[e] = r), r;
}
let C = new (class {
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
                } = await N("/streams", { user_id: e.id, first: 1 }, t),
                i = n[0];
            if (null == i || "live" !== i.type) throw Error("no stream");
            let { thumbnail_url: r, game_id: s, title: a } = i,
                o = { large_image: null != r ? ((0, c.Di)(h.fg2.TWITCH, r) ?? void 0) : void 0 },
                l = await y(s, t),
                d = u.A.get(h.fg2.TWITCH),
                _ = m.exec(r)?.[1] ?? e.name,
                f = null != a && "" !== a ? a.slice(0, 128) : void 0,
                p = null != l && "" !== l ? l.slice(0, 128) : void 0;
            return {
                url: d.getPlatformUserUrl?.({ id: e.id, name: _ }),
                name: d.name,
                assets: o,
                details: f,
                state: p,
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
                    id: i,
                    snippet: { title: r, thumbnails: s },
                } = n[0],
                o = { large_image: (0, c.Di)(h.fg2.YOUTUBE, s.high.url) ?? void 0 },
                l = null != r && "" !== r ? r.slice(0, 128) : void 0;
            return (I = {
                url: `https://youtube.com/watch?v=${i}`,
                name: u.A.get(h.fg2.YOUTUBE).name,
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
        let t = [h.fg2.TWITCH],
            n = Date.now();
        A <= n && (t.push(h.fg2.YOUTUBE), (A = n + E)),
            Promise.allSettled(
                e
                    .filter((e) => t.includes(e.type))
                    .map((e) => (e.type === h.fg2.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))),
            ).then((e) => {
                if (this._started) {
                    let t = e.find((e) => "fulfilled" === e.status && null != e.value)?.value;
                    null == t && null != I && (t = I), o.h.dispatch({ type: "STREAMING_UPDATE", stream: t });
                }
                this._scheduleCheck();
            });
    }
    _scheduleCheck() {
        this._started && (this._nextCheck = setTimeout(() => this._check(), p));
    }
})();
function v() {
    f.A.enabled ? C.start() : C.stop();
}
class O extends s.Ay.Store {
    static displayName = "ExternalStreamingStore";
    initialize() {
        v(), this.waitFor(_.A, f.A), this.syncWith([f.A], v);
    }
    getStream() {
        return g;
    }
}
let R = new O(o.h, {
    STREAMING_UPDATE: function (e) {
        if (r()(e.stream, g)) return !1;
        g = e.stream ?? null;
    },
    USER_CONNECTIONS_UPDATE: () => C._check(),
});
