"use strict";
n.d(t, { A: () => M }), n(321073);
var r = n(812729),
    i = n.n(r),
    a = n(311907),
    s = n(562465),
    o = n(73153),
    l = n(77468),
    u = n(573648),
    c = n(139675),
    d = n(927813),
    _ = n(962173),
    f = n(351906),
    p = n(652215);
let h = "33kozedd0zs6fbauka98psnc7zwom2s",
    m = +d.A.Millis.MINUTE,
    g = (e) => `https://youtube.com/watch?v=${e}`,
    E = 5 * d.A.Millis.MINUTE,
    A = "https://api.twitch.tv/helix",
    I = /live_user_(.*)-\{width\}/,
    T = 128,
    y = null,
    S = 0,
    v = null,
    C = new Set(),
    b = {};
function N(e) {
    return I.exec(e)?.[1];
}
function R(e, t, n) {
    return s.Bo.get({
        url: `${A}${e}`,
        query: t,
        headers: { "Client-ID": h, Authorization: `Bearer ${n}` },
        rejectWithError: !1,
    });
}
async function O(e, t) {
    let n = b[e];
    if (null != n) return n;
    let {
            body: { data: r },
        } = await R("/games", { id: e }, t),
        i = r[0]?.name;
    return (b[e] = i), i;
}
class D {
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
            (v = null),
            (S = 0),
            null != this._nextCheck && clearTimeout(this._nextCheck),
            o.h.dispatch({ type: "STREAMING_UPDATE", stream: null });
    }
    async _checkTwitch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (e.revoked || null == (t = t ?? e.accessToken)) return null;
        try {
            let {
                    body: { data: n },
                } = await R("/streams", { user_id: e.id, first: 1 }, t),
                r = n[0];
            if (null == r || "live" !== r.type) throw Error("no stream");
            let { thumbnail_url: i, game_id: a, title: s } = r,
                o = { large_image: null != i ? ((0, c.Di)(p.fg2.TWITCH, i) ?? void 0) : void 0 },
                l = await O(a, t),
                d = u.A.get(p.fg2.TWITCH),
                _ = N(i) ?? e.name,
                f = null != s && "" !== s ? s.slice(0, T) : void 0,
                h = null != l && "" !== l ? l.slice(0, T) : void 0;
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
        if (((v = null), e.revoked || C.has(e.id))) return null;
        try {
            let {
                body: { items: n },
            } = await s.Bo.get({
                url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
                query: { part: "id,snippet", broadcastStatus: "active", broadcastType: "all" },
                headers: { Authorization: `Bearer ${null != t ? t : e.accessToken}` },
                oldFormErrors: !0,
                rejectWithError: !1,
            });
            if (n.length < 1) throw Error("no stream");
            let {
                    id: r,
                    snippet: { title: i, thumbnails: a },
                } = n[0],
                o = { large_image: (0, c.Di)(p.fg2.YOUTUBE, a.high.url) ?? void 0 },
                l = null != i && "" !== i ? i.slice(0, T) : void 0;
            return (v = { url: g(r), name: u.A.get(p.fg2.YOUTUBE).name, details: l, assets: o });
        } catch (n) {
            if (401 === n.status && null == t)
                return l.A.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkYouTube(e, t))
                    .catch(() => null);
            return 403 === n.status && C.add(e.id), null;
        }
    }
    _check() {
        if (!this._started) return;
        let e = _.A.getAccounts();
        if (null == e) return;
        null != this._nextCheck && clearTimeout(this._nextCheck);
        let t = [p.fg2.TWITCH],
            n = Date.now();
        S <= n && (t.push(p.fg2.YOUTUBE), (S = n + E)),
            Promise.allSettled(
                e
                    .filter((e) => t.includes(e.type))
                    .map((e) => (e.type === p.fg2.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))),
            ).then((e) => {
                if (this._started) {
                    let t = e.find((e) => "fulfilled" === e.status && null != e.value)?.value;
                    null == t && null != v && (t = v), o.h.dispatch({ type: "STREAMING_UPDATE", stream: t });
                }
                this._scheduleCheck();
            });
    }
    _scheduleCheck() {
        this._started && (this._nextCheck = setTimeout(() => this._check(), m));
    }
}
let L = new D();
function w() {
    f.A.enabled ? L.start() : L.stop();
}
function x(e) {
    if (i()(e.stream, y)) return !1;
    y = e.stream ?? null;
}
class P extends a.Ay.Store {
    static displayName = "ExternalStreamingStore";
    initialize() {
        w(), this.waitFor(_.A, f.A), this.syncWith([f.A], w);
    }
    getStream() {
        return y;
    }
}
let M = new P(o.h, { STREAMING_UPDATE: x, USER_CONNECTIONS_UPDATE: () => L._check() });
