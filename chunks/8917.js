"use strict";
let r;
n.d(t, { A: () => G }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(284009),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(562465),
    u = n(823598),
    c = n(201327),
    d = n(451988),
    _ = n(73153),
    f = n(626584),
    p = n(253932),
    h = n(616356),
    m = n(961350),
    g = n(723702),
    E = n(837921),
    A = n(652896),
    I = n(502075),
    T = n(652215),
    y = n(731854);
let S = 3e5,
    v = 6e4,
    C = new d.Ep(),
    b = !1,
    N = window.document.createElement("canvas"),
    R = 512,
    O = 288;
(N.width = 512), (N.height = O);
let D = N.getContext("2d");
function L() {
    C.stop(), null != r && (r = null);
}
let w = o().debounce((e, t, n, r) => {
    P(e, (0, A._z)({ streamType: null != t ? I.U4.GUILD : I.U4.CALL, guildId: t, channelId: n, ownerId: r }));
}, 500);
function x(e) {
    let t = Math.min(R / e.width, O / e.height),
        n = e.width * t,
        r = e.height * t;
    (N.width = n), (N.height = r);
    let i = window.document.createElement("canvas"),
        a = i.getContext("2d");
    (i.width = e.width), (i.height = e.height);
    let s = new ImageData(e.data, e.width, e.height);
    a?.putImageData(s, 0, 0), D?.drawImage(i, 0, 0, e.width, e.height, 0, 0, n, r);
}
async function P(e, t) {
    if (r !== e || ((0, g.isWeb)() && p.uh.getSetting()) || h.A.getIsActiveStreamPreviewDisabled(t)) return;
    let n = () => P(e, t);
    if (!b)
        try {
            let n = await M(e, 60);
            x(n);
            let r = N.toDataURL("image/jpeg");
            if (
                (_.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: t, previewURL: r }),
                g.isPlatformEmbedded)
            ) {
                let e = m.default.getToken();
                a()(null != e, "Auth token was null while sending screenshot."),
                    await E.Ay.makeChunkedRequest(
                        T.Rsh.STREAM_PREVIEW(t),
                        { thumbnail: r },
                        { method: "POST", token: e },
                    );
            } else
                await l.Bo.post({
                    url: T.Rsh.STREAM_PREVIEW(t),
                    body: { thumbnail: r },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        } catch (t) {
            new f.A("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t),
                r === e && C.start(v, n);
            return;
        }
    r === e && (b ? C.start(v, n) : C.start(S, n));
}
function M(e, t) {
    let n = 0;
    return (g.isPlatformEmbedded ? U : k)(e, (e) => {
        if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
        if (++n > t) throw Error(`Timed out awaiting non-black frame after ${t} frames`);
        return !1;
    });
}
function k(e, t) {
    let n = (0, c.yL)(e);
    if (null == n) return Promise.resolve(new ImageData(0, 0));
    let { width: r, height: i } = n.getVideoTracks()[0].getSettings(),
        a = document.createElement("video"),
        s = document.createElement("canvas");
    (a.width = s.width = r ?? R), (a.height = s.height = i ?? O), (a.srcObject = n), a.play();
    let o = s.getContext("2d");
    return new Promise((e, n) => {
        a.ontimeupdate = () => {
            o?.drawImage(a, 0, 0, s.width, s.height);
            let r = o?.getImageData(0, 0, s.width, s.height);
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
function U(e, t) {
    let n = (0, u.lE)();
    return new Promise((i, a) => {
        let s = (e) => {
            try {
                null != e && t(e) && i(e);
            } catch (e) {
                a(e);
            }
        };
        n.getNextVideoOutputFrame(e).then(s, (t) => {
            r === e && a(t);
        });
    });
}
let G = {
    init() {
        _.h.subscribe("CONNECTION_OPEN", L),
            _.h.subscribe("LOGOUT", L),
            _.h.subscribe("STREAM_DELETE", L),
            _.h.subscribe("RTC_CONNECTION_VIDEO", (e) => {
                let { guildId: t, channelId: n, userId: i, streamId: a, context: s } = e;
                null == a ||
                    s !== y.x.STREAM ||
                    i !== m.default.getId() ||
                    __OVERLAY__ ||
                    (L(), (r = a), w(a, t, n, i));
            }),
            _.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
                let { videoState: t } = e;
                b = t === T.uPF.PAUSED;
            });
    },
};
