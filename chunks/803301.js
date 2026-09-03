n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    a = n(652215),
    s = n(731854);
let l = null,
    o = null,
    d = {},
    c = {};
function u(e, t) {
    return `${e}:${t}`;
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = d[e];
    if (null == i) return;
    let r = i[t ?? a.eGj];
    if (null != r) {
        for (let t of Object.values(s.x)) (n === t || null == n) && (delete r[t], delete c[u(n ?? t, e)]);
        d[e][t ?? a.eGj] = r;
    }
}
class E extends i.Ay.Store {
    static displayName = "VideoStreamStore";
    getStreamId(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.x.DEFAULT;
        return d[e]?.[t ?? a.eGj]?.[n]?.streamId;
    }
    getUserStreamData(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.x.DEFAULT;
        return d[e]?.[t ?? a.eGj]?.[n];
    }
    getTimedoutVideos() {
        return c;
    }
    getTimedoutVideo(e, t) {
        return c[u(e, t)];
    }
}
let A = new E(r.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t, sessionId: n } = e;
        (l = t.id), (o = n);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { user: t, sessionId: n } = e;
        (l = t.id), (o = n);
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { userId: t, guildId: n, streamId: i, context: r } = e;
        if (null != i) {
            let e;
            t in d || (d[t] = {}),
                (e = d[t][n ?? a.eGj] ?? {}),
                (d[t][n ?? a.eGj] = { ...e, [r]: { streamId: i } }),
                delete c[u(r, t)];
        } else _(t, n, r);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { userId: n, sessionId: i, channelId: r, guildId: s } = t;
            if (null == r && n === l)
                if (i !== o) return e;
                else (d = {}), (c = {});
            else {
                if (null != r || d[n]?.[s ?? a.eGj] == null) return e;
                _(n, s);
            }
            return !0;
        }, !1);
    },
    VIDEO_STREAM_READY_TIMEOUT: function (e) {
        let { videoStreamId: t, userId: n, streamKey: i, mediaContext: r } = e;
        c[u(r, n)] = { videoStreamId: t, userId: n, streamKey: i, mediaContext: r };
    },
    CLEAR_VIDEO_STREAM_READY_TIMEOUT: function (e) {
        let { mediaContext: t, userId: n } = e,
            i = u(t, n);
        if (null == c[i]) return !1;
        delete c[i];
    },
});
