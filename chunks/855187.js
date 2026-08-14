l.d(a, { A: () => v });
var t = l(477900);
l(582128);
var i = l(17928),
    n = l(638495),
    c = l(192308),
    o = l(477782),
    d = l(635739),
    r = l(39623),
    s = l(952572),
    u = l(280450),
    A = l(626822),
    p = l(731854),
    h = l(375708);
function v(e, a) {
    let v = (0, n.k)(),
        {
            videoEnabled: b,
            hasVideoDevice: f,
            videoSupported: y,
        } = (0, i.cf)([A.Ay], () => ({
            videoEnabled: A.Ay.isVideoEnabled(),
            hasVideoDevice: A.Ay.isVideoAvailable(),
            videoSupported: A.Ay.supports(p.O5.VIDEO),
        })),
        g = (0, i.bG)([u.default], () => u.default.getId() === e),
        M = (0, s.A)();
    return y && (!b || M) && g && f
        ? (0, t.jsx)(o.Dr, {
              id: "change-video-background",
              label: b ? h.intl.string(h.t.mZKxHb) : h.intl.string(h.t["vkV93/"]),
              action: function () {
                  (0, c.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([
                              l.e("411895"),
                              l.e("37393"),
                              l.e("238096"),
                              l.e("242903"),
                              l.e("758751"),
                              l.e("428367"),
                              l.e("264236"),
                              l.e("631644"),
                              l.e("809915"),
                              l.e("858337"),
                              l.e("220287"),
                              l.e("820683"),
                              l.e("706809"),
                              l.e("480436"),
                              l.e("597162"),
                              l.e("59778"),
                              l.e("195782"),
                              l.e("485160"),
                              l.e("410534"),
                          ]).then(l.bind(l, 308229));
                          return (a) => (0, t.jsx)(e, { ...a, videoEnabled: b });
                      },
                      { modalKey: "camera-preview", contextKey: null != a ? (0, c.modalContextFromAppContext)(a) : v },
                  );
              },
              icon: b ? d.f : r.b,
              leadingAccessory: { type: "icon", icon: b ? d.f : r.b },
          })
        : null;
}
