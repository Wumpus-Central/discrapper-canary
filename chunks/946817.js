let n, a, o;
t(321073), t(393431), t(532706), t(42231), t(232424), t(949626), t(767709), t(65162);
var i = t(118356),
    l = t(206607),
    s = t(214958),
    d = t.n(s);
let u = parseInt(d().version ?? "0", 10),
    c = null != d().ua && d().ua.indexOf("OculusBrowser") > -1;
(() => {
    if (!("u" > typeof window) || null != window.WebSocket) return d().name;
})(),
    c ||
        ("Firefox" === d().name && u >= 80) ||
        ("Chrome" === d().name && u >= 37) ||
        ("Opera" === d().name && u >= 66) ||
        ("Node.js" === d().name && u >= 6) ||
        ("Electron" === d().name && u >= 1) ||
        ("Safari" === d().name && u >= 13) ||
        d().name,
    "Chrome" === d().name ||
        "Safari" === d().name ||
        ("Firefox" === d().name && u >= 80) ||
        "Opera" === d().name ||
        d().name,
    "u" > typeof RTCPeerConnection && RTCPeerConnection.prototype.addTransceiver,
    "u" > typeof RTCRtpSender && ("transform" in RTCRtpSender.prototype || RTCRtpSender.prototype),
    ("Chrome" === d().name && u >= 58) || ("Safari" === d().name && u >= 15) || d().name,
    ("Chrome" === d().name && u >= 72) ||
        ("Safari" === d().name && u >= 11) ||
        ("Opera" === d().name && u >= 60) ||
        d().name;
let f = new i.Vy("LibDaveManager"),
    p = null,
    y = {
        onRuntimeInitialized: () => {
            f.info("DAVE loaded");
        },
    },
    m = new i.Vy("EncryptionWorker");
(0, i.$o)(i.gZ);
let h = "uninitialized",
    b = new Map(),
    C = new Map(),
    S = [];
(self.onmessage = (e) => {
    w(e);
}),
    (self.onrtctransform = (e) => {
        A({ type: l.lA.RTC_TRANSFORM, readable: e.transformer.readable, writable: e.transformer.writable });
    });
let w = (e) => {
        let { data: r } = e;
        if ("initialized" !== h && r.type !== l.lA.INITIALIZE) return void S.push(e);
        switch (r.type) {
            case l.lA.INITIALIZE:
                T();
                break;
            case l.lA.RTC_TRANSFORM:
                A(r);
                break;
            case l.lA.SET_KEY_RATCHET:
                g(r);
                break;
            case l.lA.UPDATE_SSRC:
                R(r);
                break;
            case l.lA.UPDATE_CODECS:
                E(r);
                break;
            case l.lA.DESTROY_USER:
                v(r);
                break;
            default:
                throw (m.error("DAVE worker unknown message type"), Error("Unsupported message type"));
        }
    },
    T = async () => {
        if ("uninitialized" === h)
            for (let e of ((h = "initializing"),
            (n = await (null != p
                ? p
                : (p = new Promise((e, r) => {
                      Promise.all([t.e("95625"), t.e("74086"), t.e("63197"), t.e("18269"), t.e("16566")])
                          .then(t.bind(t, 22389))
                          .then((t) => {
                              let { DaveModuleFactory: n } = t;
                              n(y)
                                  .then((r) => {
                                      f.info("Successfully initialized DAVE"), e(r);
                                  })
                                  .catch((e) => {
                                      f.error("Failed to initialize DAVE", e), r(e);
                                  });
                          })
                          .catch((e) => {
                              f.error("Failed to load DAVE module", e), r(e);
                          });
                  })))),
            (h = "initialized"),
            S))
                w(e);
    },
    A = (e) => {
        let { readable: r, writable: t } = e,
            n = new TransformStream({ transform: O });
        r.pipeThrough(n).pipeTo(t);
    },
    g = (e) => {
        let { userId: r, operation: t, protocolVersion: a, keyRatchet: o } = e,
            i = C.get(r);
        null == i && ((i = { audioSSRC: 0, videoSSRCs: [], cryptor: null }), C.set(r, i));
        let s = i.cryptor;
        if (null == s) {
            if (t === l.jU.ENCRYPT) {
                let e = new n.Encryptor();
                e.SetProtocolVersionChangedCallback(() => {
                    P(e.GetProtocolVersion());
                }),
                    P(e.GetProtocolVersion()),
                    (s = e);
            } else s = new n.Decryptor();
            i.cryptor = s;
        }
        if (t === l.jU.ENCRYPT) {
            let e = s;
            e.SetPassthroughMode(!o && a === n.kDisabledVersion), e.SetKeyRatchet(o);
        } else {
            let e = s;
            e.TransitionToPassthroughMode(!o && a === n.kDisabledVersion), e.TransitionToKeyRatchet(o);
        }
    },
    R = (e) => {
        let { userId: r, audioSsrc: t, videoSsrcs: n } = e,
            a = [t, ...n],
            o = C.get(r);
        for (let e of (null == o && ((o = { audioSSRC: t, videoSSRCs: n, cryptor: null }), C.set(r, o)),
        [o.audioSSRC, ...o.videoSSRCs]))
            a.includes(e) || b.get(e) !== r || b.delete(e);
        for (let e of a) e > 0 && b.set(e, r);
        (o.audioSSRC = t), (o.videoSSRCs = n);
    },
    E = (e) => {
        let { audioCodec: r, videoCodec: t } = e;
        (a = M(r)), (o = M(t));
    },
    v = (e) => {
        let { userId: r } = e,
            t = C.get(r);
        if (null == t) return;
        C.delete(r);
        let { audioSSRC: n, videoSSRCs: a } = t;
        for (let e of [n, ...a]) b.get(e) === r && b.delete(e);
    },
    P = (e) => {
        postMessage({ type: l.h5.PROTOCOL_VERSION_CHANGED, protocolVersion: e });
    },
    O = (e, r) => {
        try {
            let t,
                a = e.getMetadata().synchronizationSource;
            if (null == a) return void m.warn("no ssrc found in frame metadata");
            let o = b.get(a);
            if (null == o) return void m.warn("no userId found for ssrc", a);
            let i = C.get(o);
            if (null == i) return void m.warn("no user found for userId", o);
            let l = i.cryptor;
            if (null == l) {
                1 !== C.size && m.warn("no cryptor found for userId", o);
                return;
            }
            if (l instanceof n.Encryptor) t = V(e, a, l);
            else {
                if (!(l instanceof n.Decryptor)) return void m.warn("unsupported cryptor type", l);
                t = k(e, l);
            }
            if (null == t) return;
            r.enqueue(t);
        } catch (e) {
            m.warn("error transforming frame", e);
        }
    },
    V = (e, r, t) => {
        if (0 === e.data.byteLength) return e;
        let i = e instanceof RTCEncodedAudioFrame ? n.MediaType.Audio : n.MediaType.Video,
            l = i === n.MediaType.Audio ? a : o;
        t.AssignSsrcToCodec(r, l);
        let s = t.GetMaxCiphertextByteSize(i, e.data.byteLength),
            d = n._malloc(s);
        try {
            let a = new Uint8Array(e.data);
            n.HEAPU8.set(a, d);
            let o = t.Encrypt(i, r, d, e.data.byteLength, s);
            if (0 === o) return null;
            let l = n.HEAPU8.subarray(d, d + o),
                u = new Uint8Array(o);
            u.set(l), (e.data = u.buffer);
        } finally {
            n._free(d);
        }
        return e;
    },
    k = (e, r) => {
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
                d = new Uint8Array(l);
            return d.set(s), (e.data = d.buffer), e;
        } finally {
            n._free(o);
        }
    };
function M(e) {
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
