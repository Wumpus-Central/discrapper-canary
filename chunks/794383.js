n.d(t, { A: () => g }), n(321073);
var i = n(812729),
    r = n.n(i),
    a = n(17928),
    s = n(636537),
    _ = n(228366),
    l = n(77468),
    o = n(573648),
    E = n(970928),
    d = n(927813),
    c = n(30370),
    u = n(351906),
    I = n(652215);
let A = +d.A.Millis.MINUTE,
    T = 5 * d.A.Millis.MINUTE,
    S = /live_user_(.*)-\{width\}/,
    N = null,
    O = 0,
    R = null,
    f = new Set(),
    C = {};
function p(e, t, n) {
    return s.Bo.get({
        url: `https://api.twitch.tv/helix${e}`,
        query: t,
        headers: { "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s", Authorization: `Bearer ${n}` },
        rejectWithError: !1,
    });
}
async function m(e, t) {
    let n = C[e];
    if (null != n) return n;
    let {
            body: { data: i },
        } = await p("/games", { id: e }, t),
        r = i[0]?.name;
    return (C[e] = r), r;
}
let L = new (class {
    _nextCheck;
    _started;
    constructor() {
        this._started = !1;
    }
    start() {
        this._started || ((this._started = !0), c.A.isFetching() ? l.A.fetch() : this._check());
    }
    stop() {
        (this._started = !1),
            (R = null),
            (O = 0),
            null != this._nextCheck && clearTimeout(this._nextCheck),
            _.h.dispatch({ type: "STREAMING_UPDATE", stream: null });
    }
    async _checkTwitch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (e.revoked || null == (t = t ?? e.accessToken)) return null;
        try {
            let {
                    body: { data: n },
                } = await p("/streams", { user_id: e.id, first: 1 }, t),
                i = n[0];
            if (null == i || "live" !== i.type) throw Error("no stream");
            let { thumbnail_url: r, game_id: a, title: s } = i,
                _ = { large_image: null != r ? ((0, E.Di)(I.fg2.TWITCH, r) ?? void 0) : void 0 },
                l = await m(a, t),
                d = o.A.get(I.fg2.TWITCH),
                c = S.exec(r)?.[1] ?? e.name,
                u = null != s && "" !== s ? s.slice(0, 128) : void 0,
                A = null != l && "" !== l ? l.slice(0, 128) : void 0;
            return {
                url: d.getPlatformUserUrl?.({ id: e.id, name: c }),
                name: d.name,
                assets: _,
                details: u,
                state: A,
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
        if (((R = null), e.revoked || f.has(e.id))) return null;
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
                _ = { large_image: (0, E.Di)(I.fg2.YOUTUBE, a.high.url) ?? void 0 },
                l = null != r && "" !== r ? r.slice(0, 128) : void 0;
            return (R = {
                url: `https://youtube.com/watch?v=${i}`,
                name: o.A.get(I.fg2.YOUTUBE).name,
                details: l,
                assets: _,
            });
        } catch (n) {
            if (401 === n.status && null == t)
                return l.A.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkYouTube(e, t))
                    .catch(() => null);
            return 403 === n.status && f.add(e.id), null;
        }
    }
    _check() {
        if (!this._started) return;
        let e = c.A.getAccounts();
        if (null == e) return;
        null != this._nextCheck && clearTimeout(this._nextCheck);
        let t = [I.fg2.TWITCH],
            n = Date.now();
        O <= n && (t.push(I.fg2.YOUTUBE), (O = n + T)),
            Promise.allSettled(
                e
                    .filter((e) => t.includes(e.type))
                    .map((e) => (e.type === I.fg2.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))),
            ).then((e) => {
                if (this._started) {
                    let t = e.find((e) => "fulfilled" === e.status && null != e.value)?.value;
                    null == t && null != R && (t = R), _.h.dispatch({ type: "STREAMING_UPDATE", stream: t });
                }
                this._scheduleCheck();
            });
    }
    _scheduleCheck() {
        this._started && (this._nextCheck = setTimeout(() => this._check(), A));
    }
})();
function D() {
    u.A.enabled ? L.start() : L.stop();
}
class h extends a.Ay.Store {
    static displayName = "ExternalStreamingStore";
    initialize() {
        D(), this.waitFor(c.A, u.A), this.syncWith([u.A], D);
    }
    getStream() {
        return N;
    }
}
let g = new h(_.h, {
    STREAMING_UPDATE: function (e) {
        if (r()(e.stream, N)) return !1;
        N = e.stream ?? null;
    },
    USER_CONNECTIONS_UPDATE: () => L._check(),
});
