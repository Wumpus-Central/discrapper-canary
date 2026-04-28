n.d(i, { A: () => v });
var a = n(627968);
n(64700);
var t = n(17928),
    d = n(373495),
    o = n(192308),
    l = n(477782),
    c = n(635739),
    r = n(39623),
    s = n(952572),
    u = n(495544),
    b = n(969341),
    p = n(985018);
function v(e, i) {
    let v = (0, d.k)(),
        { videoEnabled: y, hasVideoDevice: f } = (0, t.cf)([b.Ay], () => ({
            videoEnabled: b.Ay.isVideoEnabled(),
            hasVideoDevice: b.Ay.isVideoAvailable(),
        })),
        h = (0, t.bG)([u.default], () => u.default.getId() === e),
        A = (0, s.A)();
    return (!y || A) && h && f
        ? (0, a.jsx)(l.Dr, {
              id: "change-video-background",
              label: y ? p.intl.string(p.t.mZKxHb) : p.intl.string(p.t["vkV93/"]),
              action: function () {
                  (0, o.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("80813"),
                              n.e("77598"),
                              n.e("84074"),
                              n.e("66759"),
                              n.e("20287"),
                              n.e("28367"),
                              n.e("58337"),
                              n.e("18441"),
                              n.e("21690"),
                              n.e("31644"),
                              n.e("9915"),
                              n.e("20683"),
                              n.e("80436"),
                              n.e("6809"),
                              n.e("27838"),
                              n.e("97162"),
                              n.e("95782"),
                              n.e("85160"),
                              n.e("10534"),
                          ]).then(n.bind(n, 308229));
                          return (i) => (0, a.jsx)(e, { ...i, videoEnabled: y });
                      },
                      { modalKey: "camera-preview", contextKey: null != i ? (0, o.modalContextFromAppContext)(i) : v },
                  );
              },
              icon: y ? c.f : r.b,
              leadingAccessory: { type: "icon", icon: y ? c.f : r.b },
          })
        : null;
}
