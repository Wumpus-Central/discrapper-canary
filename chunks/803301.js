var i = n(855986),
    r = n(73153);
n(652215);
var a = n(731854);
let s = null,
    l = null,
    o = {},
    d = {};
function c(e, t) {
    return `${e}:${t}`;
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = o[e];
    if (null == i) return;
    let r = i[t ?? "null"];
    if (null != r) {
        for (let t of Object.values(a.x)) (n === t || null == n) && (delete r[t], delete d[c(n ?? t, e)]);
        o[e][t ?? "null"] = r;
    }
}
class _ extends i.Ay.Store {
    static displayName = "VideoStreamStore";
    getStreamId(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.x.DEFAULT;
        return o[e]?.[t ?? "null"]?.[n]?.streamId;
    }
    getUserStreamData(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.x.DEFAULT;
        return o[e]?.[t ?? "null"]?.[n];
    }
    getTimedoutVideos() {
        return d;
    }
    getTimedoutVideo(e, t) {
        return d[c(e, t)];
    }
}
let E = new _(r.h, {
    CONNECTION_OPEN: function (e) {
        let { user: t, sessionId: n } = e;
        ((s = t.id), (l = n));
    },
    OVERLAY_INITIALIZE: function (e) {
        let { user: t, sessionId: n } = e;
        ((s = t.id), (l = n));
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { userId: t, guildId: n, streamId: i, context: r } = e;
        if (null != i) {
            let e;
            (t in o || (o[t] = {}),
                (e = o[t][n ?? "null"] ?? {}),
                (o[t][n ?? "null"] = { ...e, [r]: { streamId: i } }),
                delete d[c(r, t)]);
        } else u(t, n, r);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { userId: n, sessionId: i, channelId: r, guildId: a } = t;
            if (null == r && n === s)
                if (i !== l) return e;
                else ((o = {}), (d = {}));
            else {
                if (null != r || o[n]?.[a ?? "null"] == null) return e;
                u(n, a);
            }
            return !0;
        }, !1);
    },
    VIDEO_STREAM_READY_TIMEOUT: function (e) {
        let { videoStreamId: t, userId: n, streamKey: i, mediaContext: r } = e;
        d[c(r, n)] = { videoStreamId: t, userId: n, streamKey: i, mediaContext: r };
    },
    CLEAR_VIDEO_STREAM_READY_TIMEOUT: function (e) {
        let { mediaContext: t, userId: n } = e,
            i = c(t, n);
        if (null == d[i]) return !1;
        delete d[i];
    },
});
n.d(t, {}, { A: E });
