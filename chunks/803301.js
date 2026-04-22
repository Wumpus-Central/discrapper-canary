"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    s = n(652215),
    a = n(731854);
let o = null,
    l = null,
    u = {},
    d = {};
function c(e, t) {
    return `${e}:${t}`;
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = u[e];
    if (null == r) return;
    let i = r[t ?? s.eGj];
    if (null != i) {
        for (let t of Object.values(a.x)) (n === t || null == n) && (delete i[t], delete d[c(n ?? t, e)]);
        u[e][t ?? s.eGj] = i;
    }
}
class f extends r.Ay.Store {
    static displayName = "VideoStreamStore";
    getStreamId(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.x.DEFAULT;
        return u[e]?.[t ?? s.eGj]?.[n]?.streamId;
    }
    getUserStreamData(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.x.DEFAULT;
        return u[e]?.[t ?? s.eGj]?.[n];
    }
    getTimedoutVideos() {
        return d;
    }
    getTimedoutVideo(e, t) {
        return d[c(e, t)];
    }
}
let E = new f(i.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t, sessionId: n } = e;
        (o = t.id), (l = n);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { user: t, sessionId: n } = e;
        (o = t.id), (l = n);
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { userId: t, guildId: n, streamId: r, context: i } = e;
        if (null != r) {
            let e;
            t in u || (u[t] = {}),
                (e = u[t][n ?? s.eGj] ?? {}),
                (u[t][n ?? s.eGj] = { ...e, [i]: { streamId: r } }),
                delete d[c(i, t)];
        } else _(t, n, i);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { userId: n, sessionId: r, channelId: i, guildId: a } = t;
            if (null == i && n === o)
                if (r !== l) return e;
                else (u = {}), (d = {});
            else {
                if (null != i || u[n]?.[a ?? s.eGj] == null) return e;
                _(n, a);
            }
            return !0;
        }, !1);
    },
    VIDEO_STREAM_READY_TIMEOUT: function (e) {
        let { videoStreamId: t, userId: n, streamKey: r, mediaContext: i } = e;
        d[c(i, n)] = { videoStreamId: t, userId: n, streamKey: r, mediaContext: i };
    },
    CLEAR_VIDEO_STREAM_READY_TIMEOUT: function (e) {
        let { mediaContext: t, userId: n } = e,
            r = c(t, n);
        if (null == d[r]) return !1;
        delete d[r];
    },
});
