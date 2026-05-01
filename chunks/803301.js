"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(652215),
    a = n(731854);
let o = null,
    l = null,
    u = {},
    c = {};
function d(e, t) {
    return `${e}:${t}`;
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = u[e];
    if (null == i) return;
    let r = i[t ?? s.eGj];
    if (null != r) {
        for (let t of Object.values(a.x)) (n === t || null == n) && (delete r[t], delete c[d(n ?? t, e)]);
        u[e][t ?? s.eGj] = r;
    }
}
class f extends i.Ay.Store {
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
        return c;
    }
    getTimedoutVideo(e, t) {
        return c[d(e, t)];
    }
}
let h = new f(r.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t, sessionId: n } = e;
        (o = t.id), (l = n);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { user: t, sessionId: n } = e;
        (o = t.id), (l = n);
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { userId: t, guildId: n, streamId: i, context: r } = e;
        if (null != i) {
            let e;
            t in u || (u[t] = {}),
                (e = u[t][n ?? s.eGj] ?? {}),
                (u[t][n ?? s.eGj] = { ...e, [r]: { streamId: i } }),
                delete c[d(r, t)];
        } else _(t, n, r);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { userId: n, sessionId: i, channelId: r, guildId: a } = t;
            if (null == r && n === o)
                if (i !== l) return e;
                else (u = {}), (c = {});
            else {
                if (null != r || u[n]?.[a ?? s.eGj] == null) return e;
                _(n, a);
            }
            return !0;
        }, !1);
    },
    VIDEO_STREAM_READY_TIMEOUT: function (e) {
        let { videoStreamId: t, userId: n, streamKey: i, mediaContext: r } = e;
        c[d(r, n)] = { videoStreamId: t, userId: n, streamKey: i, mediaContext: r };
    },
    CLEAR_VIDEO_STREAM_READY_TIMEOUT: function (e) {
        let { mediaContext: t, userId: n } = e,
            i = d(t, n);
        if (null == c[i]) return !1;
        delete c[i];
    },
});
