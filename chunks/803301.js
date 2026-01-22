n.d(t, {
    A: () => T,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(652215),
    o = n(731854);

function l(e, t, n) {
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

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = null,
    p = null,
    _ = {},
    h = {};

function m(e, t) {
    return "".concat(e, ":").concat(t);
}

function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = _[e];
    if (null == r) return;
    let i = r[null != t ? t : s.eGj];
    if (null != i) {
        for (let t of Object.values(o.x)) (n === t || null == n) && (delete i[t], delete h[m(null != n ? n : t, e)]);
        _[e][null != t ? t : s.eGj] = i;
    }
}

function E(e, t, n, r) {
    var i;
    e in _ || (_[e] = {});
    let a = null != (i = _[e][null != t ? t : s.eGj]) ? i : {};
    (_[e][null != t ? t : s.eGj] = d(c({}, a), {
        [r]: {
            streamId: n,
        },
    })),
        delete h[m(r, e)];
}

function b(e) {
    let { user: t, sessionId: n } = e;
    (f = t.id), (p = n);
}

function y(e) {
    let { user: t, sessionId: n } = e;
    (f = t.id), (p = n);
}

function O(e) {
    let { userId: t, guildId: n, streamId: r, context: i } = e;
    null != r ? E(t, n, r, i) : g(t, n, i);
}

function A(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n;
        let { userId: r, sessionId: i, channelId: a, guildId: o } = t;
        if (null == a && r === f)
            if (i !== p) return e;
            else (_ = {}), (h = {});
        else {
            if (null != a || (null == (n = _[r]) ? void 0 : n[null != o ? o : s.eGj]) == null) return e;
            g(r, o);
        }
        return !0;
    }, !1);
}

function v(e) {
    let { videoStreamId: t, userId: n, streamKey: r, mediaContext: i } = e;
    h[m(i, n)] = {
        videoStreamId: t,
        userId: n,
        streamKey: r,
        mediaContext: i,
    };
}

function S(e) {
    let { mediaContext: t, userId: n } = e,
        r = m(t, n);
    if (null == h[r]) return !1;
    delete h[r];
}
class I extends (r = i.Ay.Store) {
    getStreamId(e, t) {
        var n, r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.x.DEFAULT;
        return null == (i = _[e]) || null == (r = i[null != t ? t : s.eGj]) || null == (n = r[a]) ? void 0 : n.streamId;
    }
    getUserStreamData(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.x.DEFAULT;
        return null == (r = _[e]) || null == (n = r[null != t ? t : s.eGj]) ? void 0 : n[i];
    }
    getTimedoutVideos() {
        return h;
    }
    getTimedoutVideo(e, t) {
        return h[m(e, t)];
    }
}
l(I, "displayName", "VideoStreamStore");
let T = new I(a.h, {
    CONNECTION_OPEN: b,
    OVERLAY_INITIALIZE: y,
    RTC_CONNECTION_VIDEO: O,
    VOICE_STATE_UPDATES: A,
    VIDEO_STREAM_READY_TIMEOUT: v,
    CLEAR_VIDEO_STREAM_READY_TIMEOUT: S,
});
