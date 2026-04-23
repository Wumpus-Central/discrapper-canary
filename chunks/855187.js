n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(373495),
    a = n(192308),
    r = n(477782),
    o = n(635739),
    c = n(39623),
    d = n(952572),
    u = n(495544),
    h = n(969341),
    _ = n(985018);
function g(e, t) {
    let g = (0, s.k)(),
        { videoEnabled: f, hasVideoDevice: A } = (0, l.cf)([h.Ay], () => ({
            videoEnabled: h.Ay.isVideoEnabled(),
            hasVideoDevice: h.Ay.isVideoAvailable(),
        })),
        m = (0, l.bG)([u.default], () => u.default.getId() === e),
        v = (0, d.A)();
    return (!f || v) && m && A
        ? (0, i.jsx)(r.Dr, {
              id: "change-video-background",
              label: f ? _.intl.string(_.t.mZKxHb) : _.intl.string(_.t["vkV93/"]),
              action: function () {
                  (0, a.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([n.e("95782"), n.e("60231")]).then(n.bind(n, 308229));
                          return (t) => (0, i.jsx)(e, { ...t, videoEnabled: f });
                      },
                      { modalKey: "camera-preview", contextKey: null != t ? (0, a.modalContextFromAppContext)(t) : g },
                  );
              },
              icon: f ? o.f : c.b,
              leadingAccessory: { type: "icon", icon: f ? o.f : c.b },
          })
        : null;
}
