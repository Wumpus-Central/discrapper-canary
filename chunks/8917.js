let r;
n.d(t, {
    A: () => U,
}),
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
    o = n(735438),
    s = n.n(o),
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
    y = n(652896),
    b = n(502075),
    O = n(652215),
    v = n(731854);
let A = 3e5,
    I = 6e4,
    S = new d.Ep(),
    T = !1,
    C = window.document.createElement("canvas"),
    N = 512,
    w = 288;
(C.width = 512), (C.height = w);
let R = C.getContext("2d");

function P() {
    S.stop(), null != r && (r = null);
}
let D = s().debounce((e, t, n, r) => {
    x(
        e,
        (0, y._z)({
            streamType: null != t ? b.U4.GUILD : b.U4.CALL,
            guildId: t,
            channelId: n,
            ownerId: r,
        }),
    );
}, 500);

function L(e) {
    let t = Math.min(N / e.width, w / e.height),
        n = e.width * t,
        r = e.height * t;
    (C.width = n), (C.height = r);
    let i = window.document.createElement("canvas"),
        a = i.getContext("2d");
    (i.width = e.width), (i.height = e.height);
    let o = new ImageData(e.data, e.width, e.height);
    null == a || a.putImageData(o, 0, 0), null == R || R.drawImage(i, 0, 0, e.width, e.height, 0, 0, n, r);
}
async function x(e, t) {
    if (r !== e || ((0, g.isWeb)() && _.uh.getSetting()) || h.A.getIsActiveStreamPreviewDisabled(t)) return;
    let n = () => x(e, t);
    if (!T)
        try {
            let n = await M(e, 60);
            L(n);
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
                        {
                            thumbnail: r,
                        },
                        {
                            method: "POST",
                            token: e,
                        },
                    );
            } else
                await l.Bo.post({
                    url: O.Rsh.STREAM_PREVIEW(t),
                    body: {
                        thumbnail: r,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        } catch (t) {
            new p.A("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t),
                r === e && S.start(I, n);
            return;
        }
    r === e && (T ? S.start(I, n) : S.start(A, n));
}

function M(e, t) {
    let n = 0;
    return (g.isPlatformEmbedded ? k : j)(e, (e) => {
        if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
        if (++n > t) throw Error("Timed out awaiting non-black frame after ".concat(t, " frames"));
        return !1;
    });
}

function j(e, t) {
    let n = (0, u.yL)(e);
    if (null == n) return Promise.resolve(new ImageData(0, 0));
    let { width: r, height: i } = n.getVideoTracks()[0].getSettings(),
        a = document.createElement("video"),
        o = document.createElement("canvas");
    (a.width = o.width = null != r ? r : N), (a.height = o.height = null != i ? i : w), (a.srcObject = n), a.play();
    let s = o.getContext("2d");
    return new Promise((e, n) => {
        a.ontimeupdate = () => {
            null == s || s.drawImage(a, 0, 0, o.width, o.height);
            let r = null == s ? void 0 : s.getImageData(0, 0, o.width, o.height);
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
        let o = (e) => {
            try {
                null != e && t(e) && i(e);
            } catch (e) {
                a(e);
            }
        };
        n.getNextVideoOutputFrame(e).then(o, (t) => {
            r === e && a(t);
        });
    });
}
let U = {
    init() {
        f.h.subscribe("CONNECTION_OPEN", P),
            f.h.subscribe("LOGOUT", P),
            f.h.subscribe("STREAM_DELETE", P),
            f.h.subscribe("RTC_CONNECTION_VIDEO", (e) => {
                let { guildId: t, channelId: n, userId: i, streamId: a, context: o } = e;
                null == a ||
                    o !== v.x.STREAM ||
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
