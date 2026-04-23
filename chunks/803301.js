n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    l = n(652215),
    a = n(731854);
let s = null,
    o = null,
    d = {},
    u = {};
function c(e, t) {
    return `${e}:${t}`;
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = d[e];
    if (null == i) return;
    let r = i[t ?? l.eGj];
    if (null != r) {
        for (let t of Object.values(a.x)) (n === t || null == n) && (delete r[t], delete u[c(n ?? t, e)]);
        d[e][t ?? l.eGj] = r;
    }
}
class E extends i.Ay.Store {
    static displayName = "VideoStreamStore";
    getStreamId(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.x.DEFAULT;
        return d[e]?.[t ?? l.eGj]?.[n]?.streamId;
    }
    getUserStreamData(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.x.DEFAULT;
        return d[e]?.[t ?? l.eGj]?.[n];
    }
    getTimedoutVideos() {
        return u;
    }
    getTimedoutVideo(e, t) {
        return u[c(e, t)];
    }
}
let _ = new E(r.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t, sessionId: n } = e;
        (s = t.id), (o = n);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { user: t, sessionId: n } = e;
        (s = t.id), (o = n);
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { userId: t, guildId: n, streamId: i, context: r } = e;
        if (null != i) {
            let e;
            t in d || (d[t] = {}),
                (e = d[t][n ?? l.eGj] ?? {}),
                (d[t][n ?? l.eGj] = { ...e, [r]: { streamId: i } }),
                delete u[c(r, t)];
        } else h(t, n, r);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { userId: n, sessionId: i, channelId: r, guildId: a } = t;
            if (null == r && n === s)
                if (i !== o) return e;
                else (d = {}), (u = {});
            else {
                if (null != r || d[n]?.[a ?? l.eGj] == null) return e;
                h(n, a);
            }
            return !0;
        }, !1);
    },
    VIDEO_STREAM_READY_TIMEOUT: function (e) {
        let { videoStreamId: t, userId: n, streamKey: i, mediaContext: r } = e;
        u[c(r, n)] = { videoStreamId: t, userId: n, streamKey: i, mediaContext: r };
    },
    CLEAR_VIDEO_STREAM_READY_TIMEOUT: function (e) {
        let { mediaContext: t, userId: n } = e,
            i = c(t, n);
        if (null == u[i]) return !1;
        delete u[i];
    },
});
