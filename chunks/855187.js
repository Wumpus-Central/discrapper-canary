l.d(a, { A: () => p });
var t = l(627968);
l(64700);
var i = l(17928),
    n = l(638495),
    c = l(192308),
    d = l(477782),
    o = l(635739),
    r = l(39623),
    s = l(952572),
    A = l(280450),
    h = l(451409),
    u = l(375708);
function p(e, a) {
    let p = (0, n.k)(),
        { videoEnabled: v, hasVideoDevice: b } = (0, i.cf)([h.Ay], () => ({
            videoEnabled: h.Ay.isVideoEnabled(),
            hasVideoDevice: h.Ay.isVideoAvailable(),
        })),
        f = (0, i.bG)([A.default], () => A.default.getId() === e),
        g = (0, s.A)();
    return (!v || g) && f && b
        ? (0, t.jsx)(d.Dr, {
              id: "change-video-background",
              label: v ? u.intl.string(u.t.mZKxHb) : u.intl.string(u.t["vkV93/"]),
              action: function () {
                  (0, c.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([
                              l.e("71906"),
                              l.e("41113"),
                              l.e("99368"),
                              l.e("38687"),
                              l.e("80391"),
                              l.e("28367"),
                              l.e("20287"),
                              l.e("58337"),
                              l.e("20683"),
                              l.e("6809"),
                              l.e("80436"),
                              l.e("97162"),
                              l.e("59778"),
                              l.e("95782"),
                              l.e("85160"),
                              l.e("10534"),
                          ]).then(l.bind(l, 308229));
                          return (a) => (0, t.jsx)(e, { ...a, videoEnabled: v });
                      },
                      { modalKey: "camera-preview", contextKey: null != a ? (0, c.modalContextFromAppContext)(a) : p },
                  );
              },
              icon: v ? o.f : r.b,
              leadingAccessory: { type: "icon", icon: v ? o.f : r.b },
          })
        : null;
}
