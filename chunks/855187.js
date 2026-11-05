var i = l(477900);
l(582128);
var c = l(855986),
    t = l(638495),
    n = l(192308),
    d = l(477782),
    o = l(635739),
    s = l(39623),
    r = l(952572),
    u = l(46653),
    A = l(754712),
    h = l(731854),
    p = l(792996);
l.d(
    a,
    {},
    {
        A: function (e, a) {
            let v = (0, t.k)(),
                {
                    videoEnabled: f,
                    hasVideoDevice: y,
                    videoSupported: b,
                } = (0, c.cf)([A.Ay], () => ({
                    videoEnabled: A.Ay.isVideoEnabled(),
                    hasVideoDevice: A.Ay.isVideoAvailable(),
                    videoSupported: A.Ay.supports(h.O5.VIDEO),
                })),
                g = (0, c.bG)([u.default], () => u.default.getId() === e),
                M = (0, r.A)();
            return b && (!f || M) && g && y
                ? (0, i.jsx)(d.Dr, {
                      id: "change-video-background",
                      label: f ? p.intl.string(p.t.mZKxHb) : p.intl.string(p.t["vkV93/"]),
                      action: function () {
                          (0, n.mM)(
                              async () => {
                                  let { default: e } = await Promise.all([
                                      l.e(505866),
                                      l.e(775417),
                                      l.e(932696),
                                      l.e(25839),
                                      l.e(683084),
                                      l.e(650100),
                                      l.e(508702),
                                      l.e(264236),
                                      l.e(990189),
                                      l.e(44561),
                                      l.e(809915),
                                      l.e(721690),
                                      l.e(776750),
                                      l.e(631644),
                                      l.e(499941),
                                      l.e(858337),
                                      l.e(820683),
                                      l.e(220287),
                                      l.e(428367),
                                      l.e(480436),
                                      l.e(943371),
                                      l.e(195782),
                                      l.e(655212),
                                      l.e(410534),
                                  ]).then(l.bind(l, 308229));
                                  return (a) => (0, i.jsx)(e, { ...a, videoEnabled: f });
                              },
                              { modalKey: "camera-preview", contextKey: null != a ? (0, n.TI)(a) : v },
                          );
                      },
                      icon: f ? o.f : s.EyeIcon,
                      leadingAccessory: { type: "icon", icon: f ? o.f : s.EyeIcon },
                  })
                : null;
        },
    },
);
