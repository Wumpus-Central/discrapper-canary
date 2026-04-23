n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(638495),
    a = n(192308),
    r = n(477782),
    o = n(635739),
    d = n(39623),
    c = n(952572),
    u = n(961350),
    h = n(430452),
    _ = n(985018);
function g(e, t) {
    let g = (0, s.k)(),
        { videoEnabled: A, hasVideoDevice: f } = (0, l.cf)([h.Ay], () => ({
            videoEnabled: h.Ay.isVideoEnabled(),
            hasVideoDevice: h.Ay.isVideoAvailable(),
        })),
        m = (0, l.bG)([u.default], () => u.default.getId() === e),
        v = (0, c.A)();
    return (!A || v) && m && f
        ? (0, i.jsx)(r.Dr, {
              id: "change-video-background",
              label: A ? _.intl.string(_.t.mZKxHb) : _.intl.string(_.t["vkV93/"]),
              action: function () {
                  (0, a.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([n.e("95782"), n.e("60231")]).then(n.bind(n, 308229));
                          return (t) => (0, i.jsx)(e, { ...t, videoEnabled: A });
                      },
                      { modalKey: "camera-preview", contextKey: null != t ? (0, a.modalContextFromAppContext)(t) : g },
                  );
              },
              icon: A ? o.f : d.b,
              leadingAccessory: { type: "icon", icon: A ? o.f : d.b },
          })
        : null;
}
