n.d(t, { A: () => A });
var i = n(17928),
    l = n(228366),
    a = n(652215),
    r = n(731854);
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
    let l = i[t ?? a.eGj];
    if (null != l) {
        for (let t of Object.values(r.x)) (n === t || null == n) && (delete l[t], delete u[c(n ?? t, e)]);
        d[e][t ?? a.eGj] = l;
    }
}
class E extends i.Ay.Store {
    static displayName = "VideoStreamStore";
    getStreamId(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.x.DEFAULT;
        return d[e]?.[t ?? a.eGj]?.[n]?.streamId;
    }
    getUserStreamData(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.x.DEFAULT;
        return d[e]?.[t ?? a.eGj]?.[n];
    }
    getTimedoutVideos() {
        return u;
    }
    getTimedoutVideo(e, t) {
        return u[c(e, t)];
    }
}
let A = new E(l.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t, sessionId: n } = e;
        (s = t.id), (o = n);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { user: t, sessionId: n } = e;
        (s = t.id), (o = n);
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { userId: t, guildId: n, streamId: i, context: l } = e;
        if (null != i) {
            let e;
            t in d || (d[t] = {}),
                (e = d[t][n ?? a.eGj] ?? {}),
                (d[t][n ?? a.eGj] = { ...e, [l]: { streamId: i } }),
                delete u[c(l, t)];
        } else h(t, n, l);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { userId: n, sessionId: i, channelId: l, guildId: r } = t;
            if (null == l && n === s)
                if (i !== o) return e;
                else (d = {}), (u = {});
            else {
                if (null != l || d[n]?.[r ?? a.eGj] == null) return e;
                h(n, r);
            }
            return !0;
        }, !1);
    },
    VIDEO_STREAM_READY_TIMEOUT: function (e) {
        let { videoStreamId: t, userId: n, streamKey: i, mediaContext: l } = e;
        u[c(l, n)] = { videoStreamId: t, userId: n, streamKey: i, mediaContext: l };
    },
    CLEAR_VIDEO_STREAM_READY_TIMEOUT: function (e) {
        let { mediaContext: t, userId: n } = e,
            i = c(t, n);
        if (null == u[i]) return !1;
        delete u[i];
    },
});
