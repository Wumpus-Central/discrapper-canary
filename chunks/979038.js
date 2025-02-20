n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(620662),
    o = n(841784),
    a = n(834353),
    s = n(802856),
    l = n(420660),
    c = n(374129),
    u = n(639351),
    d = n(103479),
    f = n(238607),
    p = n(414402),
    _ = n(934393),
    h = n(715547),
    m = n(981631);
function g(e) {
    let { user: t, activity: n, onAction: g, onClose: E } = e;
    return (0, s.Z)(n)
        ? (0, r.jsx)(_.Z, {
              platformType: m.ABu.XBOX,
              icon: () => (0, r.jsx)(u.Z, {}),
              onAction: g
          })
        : (0, a.Z)(n)
          ? (0, r.jsx)(_.Z, {
                platformType: m.ABu.PLAYSTATION,
                icon: () => (0, r.jsx)(c.Z, {}),
                onAction: g
            })
          : (0, l.Z)(n)
            ? (0, r.jsx)(h.Z, {
                  activity: n,
                  onAction: g
              })
            : (0, i.Z)(n, m.xjy.JOIN) || (0, o.Z)(n)
              ? (0, r.jsx)(f.Z, {
                    user: t,
                    activity: n,
                    onAction: g,
                    onClose: E
                })
              : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
                ? (0, r.jsx)(d.Z, {
                      user: t,
                      activity: n,
                      onAction: g
                  })
                : (0, i.Z)(n, m.xjy.INSTANCE)
                  ? (0, r.jsx)(p.Z, {
                        user: t,
                        activity: n,
                        onAction: g
                    })
                  : null;
}
