"use strict";
n.d(t, { A: () => A });
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
    _ = n(505643),
    E = n(375708);
function A(e, t) {
    let A = (0, a.k)(),
        { videoEnabled: h, hasVideoDevice: I } = (0, r.cf)([_.Ay], () => ({
            videoEnabled: _.Ay.isVideoEnabled(),
            hasVideoDevice: _.Ay.isVideoAvailable(),
        })),
        f = (0, r.bG)([u.default], () => u.default.getId() === e),
        p = (0, c.A)();
    return (!h || p) && f && I
        ? (0, i.jsx)(l.Dr, {
              id: "change-video-background",
              label: h ? E.intl.string(E.t.mZKxHb) : E.intl.string(E.t["vkV93/"]),
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
                          return (t) => (0, i.jsx)(e, { ...t, videoEnabled: h });
                      },
                      { modalKey: "camera-preview", contextKey: null != t ? (0, s.modalContextFromAppContext)(t) : A },
                  );
              },
              icon: h ? o.f : d.b,
              leadingAccessory: { type: "icon", icon: h ? o.f : d.b },
          })
        : null;
}
