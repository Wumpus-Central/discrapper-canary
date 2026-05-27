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
    d = n(495544),
    _ = n(761853),
    h = n(375708);
function f(e, t) {
    let f = (0, s.k)(),
        { videoEnabled: p, hasVideoDevice: E } = (0, r.cf)([_.Ay], () => ({
            videoEnabled: _.Ay.isVideoEnabled(),
            hasVideoDevice: _.Ay.isVideoAvailable(),
        })),
        m = (0, r.bG)([d.default], () => d.default.getId() === e),
        g = (0, c.A)();
    return (!p || g) && m && E
        ? (0, i.jsx)(o.Dr, {
              id: "change-video-background",
              label: p ? h.intl.string(h.t.mZKxHb) : h.intl.string(h.t["vkV93/"]),
              action: function () {
                  (0, a.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("1944"),
                              n.e("77857"),
                              n.e("28367"),
                              n.e("18441"),
                              n.e("21690"),
                              n.e("31644"),
                              n.e("9915"),
                              n.e("20287"),
                              n.e("58337"),
                              n.e("20683"),
                              n.e("80436"),
                              n.e("6809"),
                              n.e("97162"),
                              n.e("95782"),
                              n.e("39176"),
                              n.e("10534"),
                          ]).then(n.bind(n, 308229));
                          return (t) => (0, i.jsx)(e, { ...t, videoEnabled: p });
                      },
                      { modalKey: "camera-preview", contextKey: null != t ? (0, a.modalContextFromAppContext)(t) : f },
                  );
              },
              icon: p ? l.f : u.b,
              leadingAccessory: { type: "icon", icon: p ? l.f : u.b },
          })
        : null;
}
