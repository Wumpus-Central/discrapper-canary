let i;
n.d(t, { A: () => D }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var l = n(284009),
    a = n.n(l),
    r = n(735438),
    s = n.n(r),
    o = n(636537),
    d = n(823598),
    u = n(201327),
    c = n(451988),
    h = n(228366),
    E = n(626584),
    A = n(253932),
    _ = n(616356),
    p = n(495544),
    g = n(723702),
    f = n(19575),
    I = n(652896),
    S = n(325278),
    T = n(652215),
    m = n(731854);
let C = new c.Ep(),
    O = !1,
    N = window.document.createElement("canvas");
(N.width = 512), (N.height = 288);
let y = N.getContext("2d");
function R() {
    C.stop(), null != i && (i = null);
}
let L = s().debounce((e, t, n, i) => {
    v(e, (0, I._z)({ streamType: null != t ? S.U4.GUILD : S.U4.CALL, guildId: t, channelId: n, ownerId: i }));
}, 500);
async function v(e, t) {
    if (i !== e || ((0, g.isWeb)() && A.uh.getSetting()) || _.A.getIsActiveStreamPreviewDisabled(t)) return;
    let n = () => v(e, t);
    if (!O)
        try {
            var l, r;
            let n, s, c, E, A, _, I, S;
            (l = await ((r = e),
            (S = 0),
            (g.isPlatformEmbedded
                ? function (e, t) {
                      let n = (0, d.lE)();
                      return new Promise((l, a) => {
                          n.getNextVideoOutputFrame(e).then(
                              (e) => {
                                  try {
                                      null != e && t(e) && l(e);
                                  } catch (e) {
                                      a(e);
                                  }
                              },
                              (t) => {
                                  i === e && a(t);
                              },
                          );
                      });
                  }
                : function (e, t) {
                      let n = (0, u.yL)(e);
                      if (null == n) return Promise.resolve(new ImageData(0, 0));
                      let { width: i, height: l } = n.getVideoTracks()[0].getSettings(),
                          a = document.createElement("video"),
                          r = document.createElement("canvas");
                      (a.width = r.width = i ?? 512), (a.height = r.height = l ?? 288), (a.srcObject = n), a.play();
                      let s = r.getContext("2d");
                      return new Promise((e, n) => {
                          a.ontimeupdate = () => {
                              s?.drawImage(a, 0, 0, r.width, r.height);
                              let i = s?.getImageData(0, 0, r.width, r.height);
                              try {
                                  null != i && t(i) && e(i);
                              } catch (e) {
                                  n(e);
                              }
                          };
                      }).finally(() => {
                          (a.ontimeupdate = null), a.removeAttribute("srcObject"), a.load();
                      });
                  })(r, (e) => {
                if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
                if (++S > 60) throw Error(`Timed out awaiting non-black frame after ${60} frames`);
                return !1;
            }))),
                (n = 512 / l.width),
                (s = Math.min(n, 288 / l.height)),
                (c = l.width * s),
                (E = l.height * s),
                (N.width = c),
                (N.height = E),
                (_ = (A = window.document.createElement("canvas")).getContext("2d")),
                (A.width = l.width),
                (A.height = l.height),
                (I = new ImageData(l.data, l.width, l.height)),
                _?.putImageData(I, 0, 0),
                y?.drawImage(A, 0, 0, l.width, l.height, 0, 0, c, E);
            let m = N.toDataURL("image/jpeg");
            if (
                (h.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: t, previewURL: m }),
                g.isPlatformEmbedded)
            ) {
                let e = p.default.getToken();
                a()(null != e, "Auth token was null while sending screenshot."),
                    await f.Ay.makeChunkedRequest(
                        T.Rsh.STREAM_PREVIEW(t),
                        { thumbnail: m },
                        { method: "POST", token: e },
                    );
            } else
                await o.Bo.post({
                    url: T.Rsh.STREAM_PREVIEW(t),
                    body: { thumbnail: m },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        } catch (t) {
            new E.A("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t),
                i === e && C.start(6e4, n);
            return;
        }
    i === e && (O ? C.start(6e4, n) : C.start(3e5, n));
}
let D = {
    init() {
        h.h.subscribe("CONNECTION_OPEN", R),
            h.h.subscribe("LOGOUT", R),
            h.h.subscribe("STREAM_DELETE", R),
            h.h.subscribe("RTC_CONNECTION_VIDEO", (e) => {
                let { guildId: t, channelId: n, userId: l, streamId: a, context: r } = e;
                null == a ||
                    r !== m.x.STREAM ||
                    l !== p.default.getId() ||
                    __OVERLAY__ ||
                    (R(), (i = a), L(a, t, n, l));
            }),
            h.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
                let { videoState: t } = e;
                O = t === T.uPF.PAUSED;
            });
    },
};
