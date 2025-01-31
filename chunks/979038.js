n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(620662),
    a = n(841784),
    s = n(834353),
    o = n(802856),
    l = n(420660),
    u = n(374129),
    c = n(639351),
    d = n(103479),
    f = n(238607),
    _ = n(414402),
    p = n(934393),
    h = n(715547),
    m = n(981631);
function g(e) {
    let { user: t, activity: n, onAction: g, onClose: E } = e;
    return (0, o.Z)(n)
        ? (0, i.jsx)(p.Z, {
              platformType: m.ABu.XBOX,
              icon: () => (0, i.jsx)(c.Z, {}),
              onAction: g
          })
        : (0, s.Z)(n)
          ? (0, i.jsx)(p.Z, {
                platformType: m.ABu.PLAYSTATION,
                icon: () => (0, i.jsx)(u.Z, {}),
                onAction: g
            })
          : (0, l.Z)(n)
            ? (0, i.jsx)(h.Z, {
                  activity: n,
                  onAction: g
              })
            : (0, r.Z)(n, m.xjy.JOIN) || (0, a.Z)(n)
              ? (0, i.jsx)(f.Z, {
                    user: t,
                    activity: n,
                    onAction: g,
                    onClose: E
                })
              : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
                ? (0, i.jsx)(d.Z, {
                      user: t,
                      activity: n,
                      onAction: g
                  })
                : (0, r.Z)(n, m.xjy.INSTANCE)
                  ? (0, i.jsx)(_.Z, {
                        user: t,
                        activity: n,
                        onAction: g
                    })
                  : null;
}
