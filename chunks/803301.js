"use strict";
n.d(t, { A: () => T });
var r = n(311907),
    i = n(73153),
    a = n(652215),
    s = n(731854);
let o = null,
    l = null,
    u = {},
    c = {};
function d(e, t) {
    return `${e}:${t}`;
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = u[e];
    if (null == r) return;
    let i = r[t ?? a.eGj];
    if (null != i) {
        for (let t of Object.values(s.x)) (n === t || null == n) && (delete i[t], delete c[d(n ?? t, e)]);
        u[e][t ?? a.eGj] = i;
    }
}
function f(e, t, n, r) {
    e in u || (u[e] = {});
    let i = u[e][t ?? a.eGj] ?? {};
    (u[e][t ?? a.eGj] = { ...i, [r]: { streamId: n } }), delete c[d(r, e)];
}
function p(e) {
    let { user: t, sessionId: n } = e;
    (o = t.id), (l = n);
}
function h(e) {
    let { user: t, sessionId: n } = e;
    (o = t.id), (l = n);
}
function m(e) {
    let { userId: t, guildId: n, streamId: r, context: i } = e;
    null != r ? f(t, n, r, i) : _(t, n, i);
}
function g(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, sessionId: r, channelId: i, guildId: s } = t;
        if (null == i && n === o)
            if (r !== l) return e;
            else (u = {}), (c = {});
        else {
            if (null != i || u[n]?.[s ?? a.eGj] == null) return e;
            _(n, s);
        }
        return !0;
    }, !1);
}
function E(e) {
    let { videoStreamId: t, userId: n, streamKey: r, mediaContext: i } = e;
    c[d(i, n)] = { videoStreamId: t, userId: n, streamKey: r, mediaContext: i };
}
function A(e) {
    let { mediaContext: t, userId: n } = e,
        r = d(t, n);
    if (null == c[r]) return !1;
    delete c[r];
}
class I extends r.Ay.Store {
    static displayName = "VideoStreamStore";
    getStreamId(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.x.DEFAULT;
        return u[e]?.[t ?? a.eGj]?.[n]?.streamId;
    }
    getUserStreamData(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.x.DEFAULT;
        return u[e]?.[t ?? a.eGj]?.[n];
    }
    getTimedoutVideos() {
        return c;
    }
    getTimedoutVideo(e, t) {
        return c[d(e, t)];
    }
}
let T = new I(i.h, {
    CONNECTION_OPEN: p,
    OVERLAY_INITIALIZE: h,
    RTC_CONNECTION_VIDEO: m,
    VOICE_STATE_UPDATES: g,
    VIDEO_STREAM_READY_TIMEOUT: E,
    CLEAR_VIDEO_STREAM_READY_TIMEOUT: A,
});
