n.d(t, { A: () => k }), n(896048), n(747238), n(65821), n(321073), n(848778);
var r,
    i = n(812729),
    a = n.n(i),
    s = n(311907),
    o = n(562465),
    l = n(73153),
    c = n(77468),
    u = n(573648),
    d = n(139675),
    f = n(927813),
    p = n(962173),
    _ = n(351906),
    h = n(652215);
function m(e, t, n) {
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
let g = "33kozedd0zs6fbauka98psnc7zwom2s",
    E = +f.A.Millis.MINUTE,
    b = (e) => "https://youtube.com/watch?v=".concat(e),
    y = 5 * f.A.Millis.MINUTE,
    O = "https://api.twitch.tv/helix",
    A = /live_user_(.*)-\{width\}/,
    v = 128,
    S = null,
    I = 0,
    T = null,
    C = new Set(),
    N = {};
function R(e) {
    var t;
    return null == (t = A.exec(e)) ? void 0 : t[1];
}
function w(e, t, n) {
    return o.Bo.get({
        url: "".concat(O).concat(e),
        query: t,
        headers: {
            "Client-ID": g,
            Authorization: "Bearer ".concat(n),
        },
        rejectWithError: !1,
    });
}
async function P(e, t) {
    var n;
    let r = N[e];
    if (null != r) return r;
    let {
            body: { data: i },
        } = await w("/games", { id: e }, t),
        a = null == (n = i[0]) ? void 0 : n.name;
    return (N[e] = a), a;
}
class D {
    start() {
        this._started || ((this._started = !0), p.A.isFetching() ? c.A.fetch() : this._check());
    }
    stop() {
        (this._started = !1),
            (T = null),
            (I = 0),
            null != this._nextCheck && clearTimeout(this._nextCheck),
            l.h.dispatch({
                type: "STREAMING_UPDATE",
                stream: null,
            });
    }
    async _checkTwitch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
        try {
            var n, r, i;
            let {
                    body: { data: a },
                } = await w(
                    "/streams",
                    {
                        user_id: e.id,
                        first: 1,
                    },
                    t,
                ),
                s = a[0];
            if (null == s || "live" !== s.type) throw Error("no stream");
            let { thumbnail_url: o, game_id: l, title: c } = s,
                f = { large_image: null != o && null != (n = (0, d.Di)(h.fg2.TWITCH, o)) ? n : void 0 },
                p = await P(l, t),
                _ = u.A.get(h.fg2.TWITCH),
                m = null != (r = R(o)) ? r : e.name,
                g = null != c && "" !== c ? c.slice(0, v) : void 0,
                E = null != p && "" !== p ? p.slice(0, v) : void 0;
            return {
                url:
                    null == (i = _.getPlatformUserUrl)
                        ? void 0
                        : i.call(_, {
                              id: e.id,
                              name: m,
                          }),
                name: _.name,
                assets: f,
                details: g,
                state: E,
            };
        } catch (n) {
            if (401 === n.status && null == t)
                return c.A.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkTwitch(e, t))
                    .catch(() => null);
            return null;
        }
    }
    async _checkYouTube(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (((T = null), e.revoked || C.has(e.id))) return null;
        try {
            var n;
            let {
                body: { items: r },
            } = await o.Bo.get({
                url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
                query: {
                    part: "id,snippet",
                    broadcastStatus: "active",
                    broadcastType: "all",
                },
                headers: { Authorization: "Bearer ".concat(null != t ? t : e.accessToken) },
                oldFormErrors: !0,
                rejectWithError: !1,
            });
            if (r.length < 1) throw Error("no stream");
            let {
                    id: i,
                    snippet: { title: a, thumbnails: s },
                } = r[0],
                l = { large_image: null != (n = (0, d.Di)(h.fg2.YOUTUBE, s.high.url)) ? n : void 0 },
                c = null != a && "" !== a ? a.slice(0, v) : void 0;
            return (T = {
                url: b(i),
                name: u.A.get(h.fg2.YOUTUBE).name,
                details: c,
                assets: l,
            });
        } catch (n) {
            if (401 === n.status && null == t)
                return c.A.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkYouTube(e, t))
                    .catch(() => null);
            return 403 === n.status && C.add(e.id), null;
        }
    }
    _check() {
        if (!this._started) return;
        let e = p.A.getAccounts();
        if (null == e) return;
        null != this._nextCheck && clearTimeout(this._nextCheck);
        let t = [h.fg2.TWITCH],
            n = Date.now();
        I <= n && (t.push(h.fg2.YOUTUBE), (I = n + y)),
            Promise.allSettled(
                e
                    .filter((e) => t.includes(e.type))
                    .map((e) => (e.type === h.fg2.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))),
            ).then((e) => {
                if (this._started) {
                    var t;
                    let n = null == (t = e.find((e) => "fulfilled" === e.status && null != e.value)) ? void 0 : t.value;
                    null == n && null != T && (n = T),
                        l.h.dispatch({
                            type: "STREAMING_UPDATE",
                            stream: n,
                        });
                }
                this._scheduleCheck();
            });
    }
    _scheduleCheck() {
        this._started && (this._nextCheck = setTimeout(() => this._check(), E));
    }
    constructor() {
        m(this, "_nextCheck", void 0), m(this, "_started", void 0), (this._started = !1);
    }
}
let x = new D();
function L() {
    _.A.enabled ? x.start() : x.stop();
}
function j(e) {
    var t;
    if (a()(e.stream, S)) return !1;
    S = null != (t = e.stream) ? t : null;
}
class M extends (r = s.Ay.Store) {
    initialize() {
        L(), this.waitFor(p.A, _.A), this.syncWith([_.A], L);
    }
    getStream() {
        return S;
    }
}
m(M, "displayName", "ExternalStreamingStore");
let k = new M(l.h, {
    STREAMING_UPDATE: j,
    USER_CONNECTIONS_UPDATE: () => x._check(),
});
