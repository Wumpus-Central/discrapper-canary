var c = l(477900);
l(582128);
var n = l(855986),
    i = l(638495),
    t = l(192308),
    o = l(477782),
    r = l(635739),
    d = l(39623),
    s = l(952572),
    u = l(46653),
    A = l(754712),
    h = l(731854),
    p = l(792996);
l.d(
    a,
    {},
    {
        A: function (e, a) {
            let v = (0, i.k)(),
                {
                    videoEnabled: g,
                    hasVideoDevice: y,
                    videoSupported: b,
                } = (0, n.cf)([A.Ay], () => ({
                    videoEnabled: A.Ay.isVideoEnabled(),
                    hasVideoDevice: A.Ay.isVideoAvailable(),
                    videoSupported: A.Ay.supports(h.O5.VIDEO),
                })),
                M = (0, n.bG)([u.default], () => u.default.getId() === e),
                Z = (0, s.A)();
            return b && (!g || Z) && M && y
                ? (0, c.jsx)(o.Dr, {
                      id: "change-video-background",
                      label: g ? p.intl.string(p.t.mZKxHb) : p.intl.string(p.t["vkV93/"]),
                      action: function () {
                          (0, t.mM)(
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
                                      l.e(480436),
                                      l.e(428367),
                                      l.e(943371),
                                      l.e(195782),
                                      l.e(655212),
                                      l.e(410534),
                                  ]).then(l.bind(l, 308229));
                                  return (a) => (0, c.jsx)(e, { ...a, videoEnabled: g });
                              },
                              { modalKey: "camera-preview", contextKey: null != a ? (0, t.TI)(a) : v },
                          );
                      },
                      icon: g ? r.BlurBackgroundIcon : d.EyeIcon,
                      leadingAccessory: { type: "icon", icon: g ? r.BlurBackgroundIcon : d.EyeIcon },
                  })
                : null;
        },
    },
);
