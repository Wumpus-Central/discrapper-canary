n.d(t, { A: () => D }), n(321073);
var i = n(812729),
    a = n.n(i),
    r = n(17928),
    s = n(636537),
    l = n(228366),
    o = n(77468),
    d = n(573648),
    c = n(970928),
    _ = n(927813),
    E = n(30370),
    u = n(351906),
    A = n(652215);
let I = +_.A.Millis.MINUTE,
    T = 5 * _.A.Millis.MINUTE,
    h = /live_user_(.*)-\{width\}/,
    S = null,
    N = 0,
    f = null,
    p = new Set(),
    m = {};
function O(e, t, n) {
    return s.Bo.get({
        url: `https://api.twitch.tv/helix${e}`,
        query: t,
        headers: { "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s", Authorization: `Bearer ${n}` },
        rejectWithError: !1,
    });
}
async function C(e, t) {
    let n = m[e];
    if (null != n) return n;
    let {
            body: { data: i },
        } = await O("/games", { id: e }, t),
        a = i[0]?.name;
    return (m[e] = a), a;
}
let R = new (class {
    _nextCheck;
    _started;
    constructor() {
        this._started = !1;
    }
    start() {
        this._started || ((this._started = !0), E.A.isFetching() ? o.A.fetch() : this._check());
    }
    stop() {
        (this._started = !1),
            (f = null),
            (N = 0),
            null != this._nextCheck && clearTimeout(this._nextCheck),
            l.h.dispatch({ type: "STREAMING_UPDATE", stream: null });
    }
    async _checkTwitch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (e.revoked || null == (t = t ?? e.accessToken)) return null;
        try {
            let {
                    body: { data: n },
                } = await O("/streams", { user_id: e.id, first: 1 }, t),
                i = n[0];
            if (null == i || "live" !== i.type) throw Error("no stream");
            let { thumbnail_url: a, game_id: r, title: s } = i,
                l = { large_image: null != a ? ((0, c.Di)(A.fg2.TWITCH, a) ?? void 0) : void 0 },
                o = await C(r, t),
                _ = d.A.get(A.fg2.TWITCH),
                E = h.exec(a)?.[1] ?? e.name,
                u = null != s && "" !== s ? s.slice(0, 128) : void 0,
                I = null != o && "" !== o ? o.slice(0, 128) : void 0;
            return {
                url: _.getPlatformUserUrl?.({ id: e.id, name: E }),
                name: _.name,
                assets: l,
                details: u,
                state: I,
            };
        } catch (n) {
            if (401 === n.status && null == t)
                return o.A.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkTwitch(e, t))
                    .catch(() => null);
            return null;
        }
    }
    async _checkYouTube(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (((f = null), e.revoked || p.has(e.id))) return null;
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
                    id: i,
                    snippet: { title: a, thumbnails: r },
                } = n[0],
                l = { large_image: (0, c.Di)(A.fg2.YOUTUBE, r.high.url) ?? void 0 },
                o = null != a && "" !== a ? a.slice(0, 128) : void 0;
            return (f = {
                url: `https://youtube.com/watch?v=${i}`,
                name: d.A.get(A.fg2.YOUTUBE).name,
                details: o,
                assets: l,
            });
        } catch (n) {
            if (401 === n.status && null == t)
                return o.A.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkYouTube(e, t))
                    .catch(() => null);
            return 403 === n.status && p.add(e.id), null;
        }
    }
    _check() {
        if (!this._started) return;
        let e = E.A.getAccounts();
        if (null == e) return;
        null != this._nextCheck && clearTimeout(this._nextCheck);
        let t = [A.fg2.TWITCH],
            n = Date.now();
        N <= n && (t.push(A.fg2.YOUTUBE), (N = n + T)),
            Promise.allSettled(
                e
                    .filter((e) => t.includes(e.type))
                    .map((e) => (e.type === A.fg2.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))),
            ).then((e) => {
                if (this._started) {
                    let t = e.find((e) => "fulfilled" === e.status && null != e.value)?.value;
                    null == t && null != f && (t = f), l.h.dispatch({ type: "STREAMING_UPDATE", stream: t });
                }
                this._scheduleCheck();
            });
    }
    _scheduleCheck() {
        this._started && (this._nextCheck = setTimeout(() => this._check(), I));
    }
})();
function g() {
    u.A.enabled ? R.start() : R.stop();
}
class L extends r.Ay.Store {
    static displayName = "ExternalStreamingStore";
    initialize() {
        g(), this.waitFor(E.A, u.A), this.syncWith([u.A], g);
    }
    getStream() {
        return S;
    }
}
let D = new L(l.h, {
    STREAMING_UPDATE: function (e) {
        if (a()(e.stream, S)) return !1;
        S = e.stream ?? null;
    },
    USER_CONNECTIONS_UPDATE: () => R._check(),
});
