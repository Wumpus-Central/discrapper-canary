let n, a, o;
function i(e) {
    for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
}
t(321073), t(393431), t(532706), t(42231), t(232424), t(949626), t(767709), t(65162);
let l = `
font-weight: bold;
color: purple;
`,
    s = () => {},
    u = () => {};
class d {
    name;
    nativeLoggerEnabled;
    constructor(e = "default") {
        (this.name = e), (this.nativeLoggerEnabled = !1);
    }
    enableNativeLogger(e) {
        this.nativeLoggerEnabled = e;
    }
    logDangerously = (() => {
        var e = this;
        return function (r) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
            s(e.name, "log", r, ...n), e.nativeLoggerEnabled && u?.(e.name, "log", r, ...n);
        };
    })();
    log = (() => {
        var e = this;
        return function (r) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
            i(r, ...n), s(e.name, "log", r, ...n), e.nativeLoggerEnabled && u?.(e.name, "log", r, ...n);
        };
    })();
    verboseDangerously = (() => {
        var e = this;
        return function (r) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
            s(e.name, "debug", r, ...n), e.nativeLoggerEnabled && u?.(e.name, "debug", r, ...n);
        };
    })();
    verbose = (() => {
        var e = this;
        return function (r) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
            i(r, ...n), s(e.name, "debug", r, ...n), e.nativeLoggerEnabled && u?.(e.name, "debug", r, ...n);
        };
    })();
    info = (() => {
        var e = this;
        return function (r) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
            i(r, ...n), s(e.name, "info", r, ...n), e.nativeLoggerEnabled && u?.(e.name, "info", r, ...n);
        };
    })();
    warn = (() => {
        var e = this;
        return function (r) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
            i(r, ...n), s(e.name, "warn", r, ...n), e.nativeLoggerEnabled && u?.(e.name, "warn", r, ...n);
        };
    })();
    error = (() => {
        var e = this;
        return function (r) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
            i(r, ...n), s(e.name, "error", r, ...n), e.nativeLoggerEnabled && u?.(e.name, "error", r, ...n);
        };
    })();
    trace = (() => {
        var e = this;
        return function (r) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
            s(e.name, "trace", r, ...n), e.nativeLoggerEnabled && u?.(e.name, "trace", r, ...n);
        };
    })();
    time = (e, r) => {
        let t = Date.now(),
            n = r();
        return this.log(e, Date.now() - t), n;
    };
    timeAsync = async (e, r) => {
        let t = Date.now(),
            n = await r();
        return this.log(e, `${Date.now() - t}ms`), n;
    };
    fileOnly = (() => {
        var e = this;
        return function (r) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
            s(e.name, "file-only", r, ...n), e.nativeLoggerEnabled && u?.(e.name, "file-only", r, ...n);
        };
    })();
}
var f,
    c,
    p,
    g =
        (((f = {})[(f.INITIALIZE = 0)] = "INITIALIZE"),
        (f[(f.RTC_TRANSFORM = 1)] = "RTC_TRANSFORM"),
        (f[(f.SET_KEY_RATCHET = 2)] = "SET_KEY_RATCHET"),
        (f[(f.UPDATE_SSRC = 3)] = "UPDATE_SSRC"),
        (f[(f.UPDATE_CODECS = 4)] = "UPDATE_CODECS"),
        (f[(f.DESTROY_USER = 5)] = "DESTROY_USER"),
        f),
    y = (((c = {})[(c.ENCRYPT = 0)] = "ENCRYPT"), (c[(c.DECRYPT = 1)] = "DECRYPT"), c),
    h = (((p = {})[(p.PROTOCOL_VERSION_CHANGED = 0)] = "PROTOCOL_VERSION_CHANGED"), p),
    m = t(214958),
    E = t.n(m);
let b = parseInt(E().version ?? "0", 10),
    v = null != E().ua && E().ua.indexOf("OculusBrowser") > -1;
(() => {
    if (!("u" > typeof window) || null != window.WebSocket) return E().name;
})(),
    v ||
        ("Firefox" === E().name && b >= 80) ||
        ("Chrome" === E().name && b >= 37) ||
        ("Opera" === E().name && b >= 66) ||
        ("Node.js" === E().name && b >= 6) ||
        ("Electron" === E().name && b >= 1) ||
        ("Safari" === E().name && b >= 13) ||
        E().name,
    "Chrome" === E().name ||
        "Safari" === E().name ||
        ("Firefox" === E().name && b >= 80) ||
        "Opera" === E().name ||
        E().name,
    "u" > typeof RTCPeerConnection && RTCPeerConnection.prototype.addTransceiver,
    "u" > typeof RTCRtpSender && ("transform" in RTCRtpSender.prototype || RTCRtpSender.prototype),
    ("Chrome" === E().name && b >= 58) || ("Safari" === E().name && b >= 15) || E().name,
    ("Chrome" === E().name && b >= 72) ||
        ("Safari" === E().name && b >= 11) ||
        ("Opera" === E().name && b >= 60) ||
        E().name;
let C = new d("LibDaveManager"),
    T = null,
    S = {
        onRuntimeInitialized: () => {
            C.info("DAVE loaded");
        },
    },
    R = new d("EncryptionWorker");
s = function (e, r, t) {
    for (var n = arguments.length, a = Array(n > 3 ? n - 3 : 0), o = 3; o < n; o++) a[o - 3] = arguments[o];
    "file-only" !== r && console[r](`%c[${e}]`, l, t, ...a);
};
let A = "uninitialized",
    w = new Map(),
    O = new Map(),
    P = [];
(self.onmessage = (e) => {
    D(e);
}),
    (self.onrtctransform = (e) => {
        L({ type: g.RTC_TRANSFORM, readable: e.transformer.readable, writable: e.transformer.writable });
    });
let D = (e) => {
        let { data: r } = e;
        if ("initialized" !== A && r.type !== g.INITIALIZE) return void P.push(e);
        switch (r.type) {
            case g.INITIALIZE:
                _();
                break;
            case g.RTC_TRANSFORM:
                L(r);
                break;
            case g.SET_KEY_RATCHET:
                I(r);
                break;
            case g.UPDATE_SSRC:
                V(r);
                break;
            case g.UPDATE_CODECS:
                k(r);
                break;
            case g.DESTROY_USER:
                N(r);
                break;
            default:
                throw (R.error("DAVE worker unknown message type"), Error("Unsupported message type"));
        }
    },
    _ = async () => {
        if ("uninitialized" === A)
            for (let e of ((A = "initializing"),
            (n = await (null != T
                ? T
                : (T = new Promise((e, r) => {
                      t.e("16566")
                          .then(t.bind(t, 22389))
                          .then((t) => {
                              let { DaveModuleFactory: n } = t;
                              n(S)
                                  .then((r) => {
                                      C.info("Successfully initialized DAVE"), e(r);
                                  })
                                  .catch((e) => {
                                      C.error("Failed to initialize DAVE", e), r(e);
                                  });
                          })
                          .catch((e) => {
                              C.error("Failed to load DAVE module", e), r(e);
                          });
                  })))),
            (A = "initialized"),
            P))
                D(e);
    },
    L = (e) => {
        let { readable: r, writable: t } = e,
            n = new TransformStream({ transform: U });
        r.pipeThrough(n).pipeTo(t);
    },
    I = (e) => {
        let { userId: r, operation: t, protocolVersion: a, keyRatchet: o } = e,
            i = O.get(r);
        null == i && ((i = { audioSSRC: 0, videoSSRCs: [], cryptor: null }), O.set(r, i));
        let l = i.cryptor;
        if (null == l) {
            if (t === y.ENCRYPT) {
                let e = new n.Encryptor();
                e.SetProtocolVersionChangedCallback(() => {
                    M(e.GetProtocolVersion());
                }),
                    M(e.GetProtocolVersion()),
                    (l = e);
            } else l = new n.Decryptor();
            i.cryptor = l;
        }
        if (t === y.ENCRYPT) {
            let e = l;
            e.SetPassthroughMode(!o && a === n.kDisabledVersion), e.SetKeyRatchet(o);
        } else {
            let e = l;
            e.TransitionToPassthroughMode(!o && a === n.kDisabledVersion), e.TransitionToKeyRatchet(o);
        }
    },
    V = (e) => {
        let { userId: r, audioSsrc: t, videoSsrcs: n } = e,
            a = [t, ...n],
            o = O.get(r);
        for (let e of (null == o && ((o = { audioSSRC: t, videoSSRCs: n, cryptor: null }), O.set(r, o)),
        [o.audioSSRC, ...o.videoSSRCs]))
            a.includes(e) || w.get(e) !== r || w.delete(e);
        for (let e of a) e > 0 && w.set(e, r);
        (o.audioSSRC = t), (o.videoSSRCs = n);
    },
    k = (e) => {
        let { audioCodec: r, videoCodec: t } = e;
        (a = z(r)), (o = z(t));
    },
    N = (e) => {
        let { userId: r } = e,
            t = O.get(r);
        if (null == t) return;
        O.delete(r);
        let { audioSSRC: n, videoSSRCs: a } = t;
        for (let e of [n, ...a]) w.get(e) === r && w.delete(e);
    },
    M = (e) => {
        postMessage({ type: h.PROTOCOL_VERSION_CHANGED, protocolVersion: e });
    },
    U = (e, r) => {
        try {
            let t,
                a = e.getMetadata().synchronizationSource;
            if (null == a) return void R.warn("no ssrc found in frame metadata");
            let o = w.get(a);
            if (null == o) return void R.warn("no userId found for ssrc", a);
            let i = O.get(o);
            if (null == i) return void R.warn("no user found for userId", o);
            let l = i.cryptor;
            if (null == l) {
                1 !== O.size && R.warn("no cryptor found for userId", o);
                return;
            }
            if (l instanceof n.Encryptor) t = x(e, a, l);
            else {
                if (!(l instanceof n.Decryptor)) return void R.warn("unsupported cryptor type", l);
                t = H(e, l);
            }
            if (null == t) return;
            r.enqueue(t);
        } catch (e) {
            R.warn("error transforming frame", e);
        }
    },
    x = (e, r, t) => {
        if (0 === e.data.byteLength) return e;
        let i = e instanceof RTCEncodedAudioFrame ? n.MediaType.Audio : n.MediaType.Video,
            l = i === n.MediaType.Audio ? a : o;
        t.AssignSsrcToCodec(r, l);
        let s = t.GetMaxCiphertextByteSize(i, e.data.byteLength),
            u = n._malloc(s);
        try {
            let a = new Uint8Array(e.data);
            n.HEAPU8.set(a, u);
            let o = t.Encrypt(i, r, u, e.data.byteLength, s);
            if (0 === o) return null;
            let l = n.HEAPU8.subarray(u, u + o),
                d = new Uint8Array(o);
            d.set(l), (e.data = d.buffer);
        } finally {
            n._free(u);
        }
        return e;
    },
    H = (e, r) => {
        if (0 === e.data.byteLength) return e;
        let t = e instanceof RTCEncodedAudioFrame ? n.MediaType.Audio : n.MediaType.Video,
            a = r.GetMaxPlaintextByteSize(t, e.data.byteLength),
            o = n._malloc(a);
        try {
            let i = new Uint8Array(e.data);
            n.HEAPU8.set(i, o);
            let l = r.Decrypt(t, o, e.data.byteLength, a);
            if (0 === l) return null;
            let s = n.HEAPU8.subarray(o, o + l),
                u = new Uint8Array(l);
            return u.set(s), (e.data = u.buffer), e;
        } finally {
            n._free(o);
        }
    };
function z(e) {
    switch (e) {
        case "opus":
            return n.Codec.Opus;
        case "VP8":
            return n.Codec.VP8;
        case "VP9":
            return n.Codec.VP9;
        case "H264":
            return n.Codec.H264;
        case "H265":
            return n.Codec.H265;
        case "AV1":
            return n.Codec.AV1;
        default:
            return n.Codec.Unknown;
    }
}
