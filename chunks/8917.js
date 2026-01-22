let r;
n.d(t, { A: () => U }),
    n(927092),
    n(212978),
    n(834879),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(65821),
    n(492834);
var i = n(284009),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(562465),
    c = n(823598),
    u = n(201327),
    d = n(451988),
    f = n(73153),
    p = n(626584),
    _ = n(253932),
    h = n(616356),
    m = n(961350),
    g = n(723702),
    E = n(837921),
    b = n(652896),
    y = n(502075),
    O = n(652215),
    A = n(731854);
let v = 300000,
    S = 60000,
    I = new d.Ep(),
    T = !1,
    C = window.document.createElement("canvas"),
    N = 512,
    R = 288;
(C.width = 512), (C.height = R);
let w = C.getContext("2d");
function P() {
    I.stop(), null != r && (r = null);
}
let D = o().debounce((e, t, n, r) => {
    L(
        e,
        (0, b._z)({
            streamType: null != t ? y.U4.GUILD : y.U4.CALL,
            guildId: t,
            channelId: n,
            ownerId: r,
        }),
    );
}, 500);
function x(e) {
    let t = Math.min(N / e.width, R / e.height),
        n = e.width * t,
        r = e.height * t;
    (C.width = n), (C.height = r);
    let i = window.document.createElement("canvas"),
        a = i.getContext("2d");
    (i.width = e.width), (i.height = e.height);
    let s = new ImageData(e.data, e.width, e.height);
    null == a || a.putImageData(s, 0, 0), null == w || w.drawImage(i, 0, 0, e.width, e.height, 0, 0, n, r);
}
async function L(e, t) {
    if (r !== e || ((0, g.isWeb)() && _.uh.getSetting()) || h.A.getIsActiveStreamPreviewDisabled(t)) return;
    let n = () => L(e, t);
    if (!T)
        try {
            let n = await j(e, 60);
            x(n);
            let r = C.toDataURL("image/jpeg");
            if (
                (f.h.dispatch({
                    type: "STREAM_PREVIEW_FETCH_SUCCESS",
                    streamKey: t,
                    previewURL: r,
                }),
                g.isPlatformEmbedded)
            ) {
                let e = m.default.getToken();
                a()(null != e, "Auth token was null while sending screenshot."),
                    await E.Ay.makeChunkedRequest(
                        O.Rsh.STREAM_PREVIEW(t),
                        { thumbnail: r },
                        {
                            method: "POST",
                            token: e,
                        },
                    );
            } else
                await l.Bo.post({
                    url: O.Rsh.STREAM_PREVIEW(t),
                    body: { thumbnail: r },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        } catch (t) {
            new p.A("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t),
                r === e && I.start(S, n);
            return;
        }
    r === e && (T ? I.start(S, n) : I.start(v, n));
}
function j(e, t) {
    let n = 0;
    return (g.isPlatformEmbedded ? k : M)(e, (e) => {
        if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
        if (++n > t) throw Error("Timed out awaiting non-black frame after ".concat(t, " frames"));
        return !1;
    });
}
function M(e, t) {
    let n = (0, u.yL)(e);
    if (null == n) return Promise.resolve(new ImageData(0, 0));
    let { width: r, height: i } = n.getVideoTracks()[0].getSettings(),
        a = document.createElement("video"),
        s = document.createElement("canvas");
    (a.width = s.width = null != r ? r : N), (a.height = s.height = null != i ? i : R), (a.srcObject = n), a.play();
    let o = s.getContext("2d");
    return new Promise((e, n) => {
        a.ontimeupdate = () => {
            null == o || o.drawImage(a, 0, 0, s.width, s.height);
            let r = null == o ? void 0 : o.getImageData(0, 0, s.width, s.height);
            try {
                null != r && t(r) && e(r);
            } catch (e) {
                n(e);
            }
        };
    }).finally(() => {
        (a.ontimeupdate = null), a.removeAttribute("srcObject"), a.load();
    });
}
function k(e, t) {
    let n = (0, c.lE)();
    return new Promise((i, a) => {
        let s = (e) => {
            try {
                null != e && t(e) && i(e);
            } catch (e) {
                a(e);
            }
        };
        n.getNextVideoOutputFrame(e).then(s, (t) => {
            if (r === e) throw t;
        });
    });
}
let U = {
    init() {
        f.h.subscribe("CONNECTION_OPEN", P),
            f.h.subscribe("LOGOUT", P),
            f.h.subscribe("STREAM_DELETE", P),
            f.h.subscribe("RTC_CONNECTION_VIDEO", (e) => {
                let { guildId: t, channelId: n, userId: i, streamId: a, context: s } = e;
                null == a ||
                    s !== A.x.STREAM ||
                    i !== m.default.getId() ||
                    __OVERLAY__ ||
                    (P(), (r = a), D(a, t, n, i));
            }),
            f.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
                let { videoState: t } = e;
                T = t === O.uPF.PAUSED;
            });
    },
};
