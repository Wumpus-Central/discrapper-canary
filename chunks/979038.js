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
    let { user: n, activity: r, onAction: v, onClose: y } = e;
    return (0, l.Z)(r)
        ? (0, i.jsx)(m.Z, {
              platformType: E.ABu.XBOX,
              icon: () => (0, i.jsx)(d.Z, {}),
              onAction: v
          })
        : (0, s.Z)(r)
          ? (0, i.jsx)(m.Z, {
                platformType: E.ABu.PLAYSTATION,
                icon: () => (0, i.jsx)(c.Z, {}),
                onAction: v
            })
          : (0, u.Z)(r)
            ? (0, i.jsx)(g.Z, {
                  activity: r,
                  onAction: v
              })
            : (0, a.Z)(r, E.xjy.JOIN) || (0, o.Z)(r)
              ? (0, i.jsx)(h.Z, {
                    user: n,
                    activity: r,
                    onAction: v,
                    onClose: y
                })
              : (null == r ? void 0 : r.type) === E.IIU.HANG_STATUS
                ? (0, i.jsx)(p.Z, {
                      user: n,
                      activity: r,
                      onAction: v,
                      onClose: y
                  })
                : (null == r ? void 0 : r.buttons) != null && (null == r ? void 0 : r.buttons.length) >= 1
                  ? (0, i.jsx)(f.Z, {
                        user: n,
                        activity: r,
                        onAction: v
                    })
                  : (0, a.Z)(r, E.xjy.INSTANCE)
                    ? (0, i.jsx)(_.Z, {
                          user: n,
                          activity: r,
                          onAction: v
                      })
                    : null;
}
