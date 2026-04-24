l.d(t, { A: () => f });
var n = l(627968);
l(64700);
var i = l(17928),
    s = l(373495),
    a = l(192308),
    r = l(477782),
    c = l(635739),
    o = l(39623),
    d = l(952572),
    u = l(495544),
    h = l(969341),
    g = l(985018);
function f(e, t) {
    let f = (0, s.k)(),
        { videoEnabled: A, hasVideoDevice: v } = (0, i.cf)([h.Ay], () => ({
            videoEnabled: h.Ay.isVideoEnabled(),
            hasVideoDevice: h.Ay.isVideoAvailable(),
        })),
        _ = (0, i.bG)([u.default], () => u.default.getId() === e),
        m = (0, d.A)();
    return (!A || m) && _ && v
        ? (0, n.jsx)(r.Dr, {
              id: "change-video-background",
              label: A ? g.intl.string(g.t.mZKxHb) : g.intl.string(g.t["vkV93/"]),
              action: function () {
                  (0, a.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([l.e("28367"), l.e("95782"), l.e("18347")]).then(
                              l.bind(l, 308229),
                          );
                          return (t) => (0, n.jsx)(e, { ...t, videoEnabled: A });
                      },
                      { modalKey: "camera-preview", contextKey: null != t ? (0, a.modalContextFromAppContext)(t) : f },
                  );
              },
              icon: A ? c.f : o.b,
              leadingAccessory: { type: "icon", icon: A ? c.f : o.b },
          })
        : null;
}
