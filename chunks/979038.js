n.d(t, { Z: () => T });
var r = n(200651);
n(192379);
var i = n(40851),
    a = n(620662),
    o = n(841784),
    s = n(834353),
    l = n(802856),
    c = n(420660),
    u = n(750154),
    d = n(374129),
    f = n(639351),
    _ = n(171368),
    p = n(103479),
    h = n(238607),
    m = n(414402),
    g = n(934393),
    E = n(803663),
    b = n(715547),
    y = n(981631),
    v = n(477839),
    O = n(388032),
    I = n(622802);
let S = (e) => {
    let { user: t, activity: n, onAction: a } = e,
        o = (0, i.Aq)(),
        s = (e) => {
            let { action: t } = e;
            o.dispatch(y.CkL.POPOUT_CLOSE), (0, _.closeUserProfileModal)(), null == a || a({ action: t });
        };
    return (0, r.jsx)(p.Z, {
        user: t,
        activity: n,
        onAction: s
    });
};
function T(e) {
    let { user: t, activity: n, onAction: i, onClose: _ } = e;
    return null != n && n.application_id === v.bO
        ? ((n.buttons = [O.NW.string(I.Z['Fv/2Oz'])]),
          (n.metadata = { button_urls: [v.U8] }),
          (0, r.jsx)(S, {
              user: t,
              activity: n,
              onAction: i
          }))
        : (0, l.Z)(n)
          ? (0, r.jsx)(g.Z, {
                platformType: y.ABu.XBOX,
                icon: () => (0, r.jsx)(f.Z, {}),
                onAction: i
            })
          : (0, s.Z)(n)
            ? (0, r.jsx)(g.Z, {
                  platformType: y.ABu.PLAYSTATION,
                  icon: () => (0, r.jsx)(d.Z, {}),
                  onAction: i
              })
            : (0, c.Z)(n)
              ? (0, r.jsx)(b.Z, {
                    activity: n,
                    onAction: i
                })
              : (0, a.Z)(n, y.xjy.JOIN) || (0, o.Z)(n)
                ? (0, r.jsx)(h.Z, {
                      user: t,
                      activity: n,
                      onAction: i,
                      onClose: _
                  })
                : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
                  ? (0, r.jsx)(p.Z, {
                        user: t,
                        activity: n,
                        onAction: i
                    })
                  : (0, a.Z)(n, y.xjy.INSTANCE)
                    ? (0, r.jsx)(m.Z, {
                          user: t,
                          activity: n,
                          onAction: i
                      })
                    : (0, u.dS)(n)
                      ? (0, r.jsx)(E.Z, {
                            activity: n,
                            onAction: i,
                            onClose: _
                        })
                      : null;
}
