"use strict";
let r;
n.d(t, { A: () => D }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(284009),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    l = n(562465),
    u = n(823598),
    c = n(201327),
    d = n(451988),
    _ = n(73153),
    f = n(626584),
    p = n(253932),
    h = n(616356),
    E = n(961350),
    m = n(723702),
    g = n(837921),
    A = n(652896),
    I = n(502075),
    T = n(652215),
    S = n(731854);
let y = new d.Ep(),
    N = !1,
    v = window.document.createElement("canvas");
(v.width = 512), (v.height = 288);
let C = v.getContext("2d");
function O() {
    y.stop(), null != r && (r = null);
}
let R = o().debounce((e, t, n, r) => {
    b(e, (0, A._z)({ streamType: null != t ? I.U4.GUILD : I.U4.CALL, guildId: t, channelId: n, ownerId: r }));
}, 500);
async function b(e, t) {
    if (r !== e || ((0, m.isWeb)() && p.uh.getSetting()) || h.A.getIsActiveStreamPreviewDisabled(t)) return;
    let n = () => b(e, t);
    if (!N)
        try {
            var i, a;
            let n, o, d, f, p, h, A, I;
            (i = await ((a = e),
            (I = 0),
            (m.isPlatformEmbedded
                ? function (e, t) {
                      let n = (0, u.lE)();
                      return new Promise((i, s) => {
                          n.getNextVideoOutputFrame(e).then(
                              (e) => {
                                  try {
                                      null != e && t(e) && i(e);
                                  } catch (e) {
                                      s(e);
                                  }
                              },
                              (t) => {
                                  r === e && s(t);
                              },
                          );
                      });
                  }
                : function (e, t) {
                      let n = (0, c.yL)(e);
                      if (null == n) return Promise.resolve(new ImageData(0, 0));
                      let { width: r, height: i } = n.getVideoTracks()[0].getSettings(),
                          s = document.createElement("video"),
                          a = document.createElement("canvas");
                      (s.width = a.width = r ?? 512), (s.height = a.height = i ?? 288), (s.srcObject = n), s.play();
                      let o = a.getContext("2d");
                      return new Promise((e, n) => {
                          s.ontimeupdate = () => {
                              o?.drawImage(s, 0, 0, a.width, a.height);
                              let r = o?.getImageData(0, 0, a.width, a.height);
                              try {
                                  null != r && t(r) && e(r);
                              } catch (e) {
                                  n(e);
                              }
                          };
                      }).finally(() => {
                          (s.ontimeupdate = null), s.removeAttribute("srcObject"), s.load();
                      });
                  })(a, (e) => {
                if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
                if (++I > 60) throw Error(`Timed out awaiting non-black frame after ${60} frames`);
                return !1;
            }))),
                (n = 512 / i.width),
                (o = Math.min(n, 288 / i.height)),
                (d = i.width * o),
                (f = i.height * o),
                (v.width = d),
                (v.height = f),
                (h = (p = window.document.createElement("canvas")).getContext("2d")),
                (p.width = i.width),
                (p.height = i.height),
                (A = new ImageData(i.data, i.width, i.height)),
                h?.putImageData(A, 0, 0),
                C?.drawImage(p, 0, 0, i.width, i.height, 0, 0, d, f);
            let S = v.toDataURL("image/jpeg");
            if (
                (_.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: t, previewURL: S }),
                m.isPlatformEmbedded)
            ) {
                let e = E.default.getToken();
                s()(null != e, "Auth token was null while sending screenshot."),
                    await g.Ay.makeChunkedRequest(
                        T.Rsh.STREAM_PREVIEW(t),
                        { thumbnail: S },
                        { method: "POST", token: e },
                    );
            } else
                await l.Bo.post({
                    url: T.Rsh.STREAM_PREVIEW(t),
                    body: { thumbnail: S },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        } catch (t) {
            new f.A("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t),
                r === e && y.start(6e4, n);
            return;
        }
    r === e && (N ? y.start(6e4, n) : y.start(3e5, n));
}
let D = {
    init() {
        _.h.subscribe("CONNECTION_OPEN", O),
            _.h.subscribe("LOGOUT", O),
            _.h.subscribe("STREAM_DELETE", O),
            _.h.subscribe("RTC_CONNECTION_VIDEO", (e) => {
                let { guildId: t, channelId: n, userId: i, streamId: s, context: a } = e;
                null == s ||
                    a !== S.x.STREAM ||
                    i !== E.default.getId() ||
                    __OVERLAY__ ||
                    (O(), (r = s), R(s, t, n, i));
            }),
            _.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
                let { videoState: t } = e;
                N = t === T.uPF.PAUSED;
            });
    },
};
