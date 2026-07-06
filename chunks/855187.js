"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(638495),
    a = n(192308),
    o = n(477782),
    l = n(635739),
    u = n(39623),
    c = n(952572),
    d = n(280450),
    _ = n(451409),
    h = n(375708);
function f(e, t) {
    let f = (0, s.k)(),
        { videoEnabled: E, hasVideoDevice: p } = (0, r.cf)([_.Ay], () => ({
            videoEnabled: _.Ay.isVideoEnabled(),
            hasVideoDevice: _.Ay.isVideoAvailable(),
        })),
        m = (0, r.bG)([d.default], () => d.default.getId() === e),
        g = (0, c.A)();
    return (!E || g) && m && p
        ? (0, i.jsx)(o.Dr, {
              id: "change-video-background",
              label: E ? h.intl.string(h.t.mZKxHb) : h.intl.string(h.t["vkV93/"]),
              action: function () {
                  (0, a.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("12410"),
                              n.e("64345"),
                              n.e("5288"),
                              n.e("25695"),
                              n.e("66759"),
                              n.e("28367"),
                              n.e("20287"),
                              n.e("58337"),
                              n.e("20683"),
                              n.e("6809"),
                              n.e("80436"),
                              n.e("97162"),
                              n.e("59778"),
                              n.e("95782"),
                              n.e("85160"),
                              n.e("10534"),
                          ]).then(n.bind(n, 308229));
                          return (t) => (0, i.jsx)(e, { ...t, videoEnabled: E });
                      },
                      { modalKey: "camera-preview", contextKey: null != t ? (0, a.modalContextFromAppContext)(t) : f },
                  );
              },
              icon: E ? l.f : u.b,
              leadingAccessory: { type: "icon", icon: E ? l.f : u.b },
          })
        : null;
}
