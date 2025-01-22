r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651);
r(192379);
var a = r(620662),
    o = r(841784),
    s = r(834353),
    l = r(802856),
    u = r(420660),
    c = r(374129),
    d = r(639351),
    f = r(103479),
    p = r(191764),
    h = r(238607),
    _ = r(414402),
    m = r(934393),
    g = r(715547),
    E = r(981631);
function v(e) {
    let { user: n, currentUser: r, activity: v, onAction: y, onClose: b } = e;
    return (0, l.Z)(v)
        ? (0, i.jsx)(m.Z, {
              platformType: E.ABu.XBOX,
              icon: () => (0, i.jsx)(d.Z, {}),
              onAction: y
          })
        : (0, s.Z)(v)
          ? (0, i.jsx)(m.Z, {
                platformType: E.ABu.PLAYSTATION,
                icon: () => (0, i.jsx)(c.Z, {}),
                onAction: y
            })
          : (0, u.Z)(v)
            ? (0, i.jsx)(g.Z, {
                  activity: v,
                  onAction: y
              })
            : (0, a.Z)(v, E.xjy.JOIN) || (0, o.Z)(v)
              ? (0, i.jsx)(h.Z, {
                    user: n,
                    currentUser: r,
                    activity: v,
                    onAction: y,
                    onClose: b
                })
              : (null == v ? void 0 : v.type) === E.IIU.HANG_STATUS
                ? (0, i.jsx)(p.Z, {
                      user: n,
                      activity: v,
                      onAction: y,
                      onClose: b
                  })
                : (null == v ? void 0 : v.buttons) != null && (null == v ? void 0 : v.buttons.length) >= 1
                  ? (0, i.jsx)(f.Z, {
                        user: n,
                        activity: v,
                        onAction: y
                    })
                  : (0, a.Z)(v, E.xjy.INSTANCE)
                    ? (0, i.jsx)(_.Z, {
                          user: n,
                          activity: v,
                          onAction: y
                      })
                    : null;
}
