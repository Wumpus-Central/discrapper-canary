"use strict";
n.d(t, { A: () => h });
var i = n(477900);
n(582128);
var r = n(17928),
    a = n(638495),
    s = n(192308),
    l = n(477782),
    o = n(635739),
    d = n(39623),
    c = n(952572),
    u = n(280450),
    _ = n(626822),
    E = n(731854),
    A = n(375708);
function h(e, t) {
    let h = (0, a.k)(),
        {
            videoEnabled: I,
            hasVideoDevice: f,
            videoSupported: p,
        } = (0, r.cf)([_.Ay], () => ({
            videoEnabled: _.Ay.isVideoEnabled(),
            hasVideoDevice: _.Ay.isVideoAvailable(),
            videoSupported: _.Ay.supports(E.O5.VIDEO),
        })),
        T = (0, r.bG)([u.default], () => u.default.getId() === e),
        m = (0, c.A)();
    return p && (!I || m) && T && f
        ? (0, i.jsx)(l.Dr, {
              id: "change-video-background",
              label: I ? A.intl.string(A.t.mZKxHb) : A.intl.string(A.t["vkV93/"]),
              action: function () {
                  (0, s.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("11895"),
                              n.e("37393"),
                              n.e("38096"),
                              n.e("42903"),
                              n.e("58751"),
                              n.e("28367"),
                              n.e("58337"),
                              n.e("20287"),
                              n.e("20683"),
                              n.e("6809"),
                              n.e("80436"),
                              n.e("97162"),
                              n.e("59778"),
                              n.e("95782"),
                              n.e("85160"),
                              n.e("10534"),
                          ]).then(n.bind(n, 308229));
                          return (t) => (0, i.jsx)(e, { ...t, videoEnabled: I });
                      },
                      { modalKey: "camera-preview", contextKey: null != t ? (0, s.modalContextFromAppContext)(t) : h },
                  );
              },
              icon: I ? o.f : d.b,
              leadingAccessory: { type: "icon", icon: I ? o.f : d.b },
          })
        : null;
}
