n.d(t, { A: () => y }), n(321073);
var i = n(812729),
    r = n.n(i),
    a = n(17928),
    s = n(636537),
    l = n(228366),
    o = n(77468),
    d = n(573648),
    c = n(970928),
    u = n(927813),
    _ = n(30370),
    E = n(351906),
    A = n(652215);
let h = +u.A.Millis.MINUTE,
    I = 5 * u.A.Millis.MINUTE,
    f = /live_user_(.*)-\{width\}/,
    p = null,
    T = 0,
    m = null,
    g = new Set(),
    S = {};
function N(e, t, n) {
    return s.Bo.get({
        url: `https://api.twitch.tv/helix${e}`,
        query: t,
        headers: { "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s", Authorization: `Bearer ${n}` },
        rejectWithError: !1,
    });
}
async function C(e, t) {
    let n = S[e];
    if (null != n) return n;
    let {
            body: { data: i },
        } = await N("/games", { id: e }, t),
        r = i[0]?.name;
    return (S[e] = r), r;
}
let O = new (class {
    _nextCheck;
    _started;
    constructor() {
        this._started = !1;
    }
    start() {
        this._started || ((this._started = !0), _.A.isFetching() ? o.A.fetch() : this._check());
    }
    stop() {
        (this._started = !1),
            (m = null),
            (T = 0),
            null != this._nextCheck && clearTimeout(this._nextCheck),
            l.h.dispatch({ type: "STREAMING_UPDATE", stream: null });
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
            let { thumbnail_url: r, game_id: a, title: s } = i,
                l = { large_image: null != r ? ((0, c.Di)(A.fg2.TWITCH, r) ?? void 0) : void 0 },
                o = await C(a, t),
                u = d.A.get(A.fg2.TWITCH),
                _ = f.exec(r)?.[1] ?? e.name,
                E = null != s && "" !== s ? s.slice(0, 128) : void 0,
                h = null != o && "" !== o ? o.slice(0, 128) : void 0;
            return {
                url: u.getPlatformUserUrl?.({ id: e.id, name: _ }),
                name: u.name,
                assets: l,
                details: E,
                state: h,
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
        if (((m = null), e.revoked || g.has(e.id))) return null;
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
                    snippet: { title: r, thumbnails: a },
                } = n[0],
                l = { large_image: (0, c.Di)(A.fg2.YOUTUBE, a.high.url) ?? void 0 },
                o = null != r && "" !== r ? r.slice(0, 128) : void 0;
            return (m = {
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
            return 403 === n.status && g.add(e.id), null;
        }
    }
    _check() {
        if (!this._started) return;
        let e = _.A.getAccounts();
        if (null == e) return;
        null != this._nextCheck && clearTimeout(this._nextCheck);
        let t = [A.fg2.TWITCH],
            n = Date.now();
        T <= n && (t.push(A.fg2.YOUTUBE), (T = n + I)),
            Promise.allSettled(
                e
                    .filter((e) => t.includes(e.type))
                    .map((e) => (e.type === A.fg2.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))),
            ).then((e) => {
                if (this._started) {
                    let t = e.find((e) => "fulfilled" === e.status && null != e.value)?.value;
                    null == t && null != m && (t = m), l.h.dispatch({ type: "STREAMING_UPDATE", stream: t });
                }
                this._scheduleCheck();
            });
    }
    _scheduleCheck() {
        this._started && (this._nextCheck = setTimeout(() => this._check(), h));
    }
})();
function R() {
    E.A.enabled ? O.start() : O.stop();
}
class L extends a.Ay.Store {
    static displayName = "ExternalStreamingStore";
    initialize() {
        E.A.enabled && O.start(), this.waitFor(_.A, E.A), this.syncWith([E.A], R);
    }
    getStream() {
        return p;
    }
}
let y = new L(l.h, {
    STREAMING_UPDATE: function (e) {
        if (r()(e.stream, p)) return !1;
        p = e.stream ?? null;
    },
    USER_CONNECTIONS_UPDATE: () => O._check(),
});
