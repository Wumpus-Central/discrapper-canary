let i;
n.d(t, { A: () => D }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var r = n(284009),
    l = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(636537),
    d = n(823598),
    u = n(201327),
    c = n(451988),
    h = n(228366),
    E = n(626584),
    _ = n(253932),
    p = n(616356),
    A = n(495544),
    f = n(723702),
    g = n(19575),
    I = n(652896),
    T = n(325278),
    S = n(652215),
    m = n(731854);
let O = new c.Ep(),
    C = !1,
    N = window.document.createElement("canvas");
(N.width = 512), (N.height = 288);
let y = N.getContext("2d");
function R() {
    O.stop(), null != i && (i = null);
}
let L = s().debounce((e, t, n, i) => {
    v(e, (0, I._z)({ streamType: null != t ? T.U4.GUILD : T.U4.CALL, guildId: t, channelId: n, ownerId: i }));
}, 500);
async function v(e, t) {
    if (i !== e || ((0, f.isWeb)() && _.uh.getSetting()) || p.A.getIsActiveStreamPreviewDisabled(t)) return;
    let n = () => v(e, t);
    if (!C)
        try {
            var r, a;
            let n, s, c, E, _, p, I, T;
            (r = await ((a = e),
            (T = 0),
            (f.isPlatformEmbedded
                ? function (e, t) {
                      let n = (0, d.lE)();
                      return new Promise((r, l) => {
                          n.getNextVideoOutputFrame(e).then(
                              (e) => {
                                  try {
                                      null != e && t(e) && r(e);
                                  } catch (e) {
                                      l(e);
                                  }
                              },
                              (t) => {
                                  i === e && l(t);
                              },
                          );
                      });
                  }
                : function (e, t) {
                      let n = (0, u.yL)(e);
                      if (null == n) return Promise.resolve(new ImageData(0, 0));
                      let { width: i, height: r } = n.getVideoTracks()[0].getSettings(),
                          l = document.createElement("video"),
                          a = document.createElement("canvas");
                      (l.width = a.width = i ?? 512), (l.height = a.height = r ?? 288), (l.srcObject = n), l.play();
                      let s = a.getContext("2d");
                      return new Promise((e, n) => {
                          l.ontimeupdate = () => {
                              s?.drawImage(l, 0, 0, a.width, a.height);
                              let i = s?.getImageData(0, 0, a.width, a.height);
                              try {
                                  null != i && t(i) && e(i);
                              } catch (e) {
                                  n(e);
                              }
                          };
                      }).finally(() => {
                          (l.ontimeupdate = null), l.removeAttribute("srcObject"), l.load();
                      });
                  })(a, (e) => {
                if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
                if (++T > 60) throw Error(`Timed out awaiting non-black frame after ${60} frames`);
                return !1;
            }))),
                (n = 512 / r.width),
                (s = Math.min(n, 288 / r.height)),
                (c = r.width * s),
                (E = r.height * s),
                (N.width = c),
                (N.height = E),
                (p = (_ = window.document.createElement("canvas")).getContext("2d")),
                (_.width = r.width),
                (_.height = r.height),
                (I = new ImageData(r.data, r.width, r.height)),
                p?.putImageData(I, 0, 0),
                y?.drawImage(_, 0, 0, r.width, r.height, 0, 0, c, E);
            let m = N.toDataURL("image/jpeg");
            if (
                (h.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: t, previewURL: m }),
                f.isPlatformEmbedded)
            ) {
                let e = A.default.getToken();
                l()(null != e, "Auth token was null while sending screenshot."),
                    await g.Ay.makeChunkedRequest(
                        S.Rsh.STREAM_PREVIEW(t),
                        { thumbnail: m },
                        { method: "POST", token: e },
                    );
            } else
                await o.Bo.post({
                    url: S.Rsh.STREAM_PREVIEW(t),
                    body: { thumbnail: m },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        } catch (t) {
            new E.A("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t),
                i === e && O.start(6e4, n);
            return;
        }
    i === e && (C ? O.start(6e4, n) : O.start(3e5, n));
}
let D = {
    init() {
        h.h.subscribe("CONNECTION_OPEN", R),
            h.h.subscribe("LOGOUT", R),
            h.h.subscribe("STREAM_DELETE", R),
            h.h.subscribe("RTC_CONNECTION_VIDEO", (e) => {
                let { guildId: t, channelId: n, userId: r, streamId: l, context: a } = e;
                null == l ||
                    a !== m.x.STREAM ||
                    r !== A.default.getId() ||
                    __OVERLAY__ ||
                    (R(), (i = l), L(l, t, n, r));
            }),
            h.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
                let { videoState: t } = e;
                C = t === S.uPF.PAUSED;
            });
    },
};
