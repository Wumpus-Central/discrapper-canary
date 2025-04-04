n.d(t, { Z: () => I });
var r = n(200651);
n(192379);
var i = n(40851),
    o = n(620662),
    a = n(841784),
    s = n(834353),
    l = n(802856),
    c = n(420660),
    u = n(374129),
    d = n(639351),
    f = n(171368),
    _ = n(103479),
    p = n(238607),
    h = n(414402),
    m = n(934393),
    g = n(715547),
    E = n(981631),
    b = n(477839),
    y = n(388032),
    v = n(622802);
let O = (e) => {
    let { user: t, activity: n, onAction: o } = e,
        a = (0, i.Aq)(),
        s = (e) => {
            let { action: t } = e;
            a.dispatch(E.CkL.POPOUT_CLOSE), (0, f.closeUserProfileModal)(), null == o || o({ action: t });
        };
    return (0, r.jsx)(_.Z, {
        user: t,
        activity: n,
        onAction: s
    });
};
function I(e) {
    let { user: t, activity: n, onAction: i, onClose: f } = e;
    return null != n && n.application_id === b.bO
        ? ((n.buttons = [y.NW.string(v.Z['Fv/2Oz'])]),
          (n.metadata = { button_urls: [b.U8] }),
          (0, r.jsx)(O, {
              user: t,
              activity: n,
              onAction: i
          }))
        : (0, l.Z)(n)
          ? (0, r.jsx)(m.Z, {
                platformType: E.ABu.XBOX,
                icon: () => (0, r.jsx)(d.Z, {}),
                onAction: i
            })
          : (0, s.Z)(n)
            ? (0, r.jsx)(m.Z, {
                  platformType: E.ABu.PLAYSTATION,
                  icon: () => (0, r.jsx)(u.Z, {}),
                  onAction: i
              })
            : (0, c.Z)(n)
              ? (0, r.jsx)(g.Z, {
                    activity: n,
                    onAction: i
                })
              : (0, o.Z)(n, E.xjy.JOIN) || (0, a.Z)(n)
                ? (0, r.jsx)(p.Z, {
                      user: t,
                      activity: n,
                      onAction: i,
                      onClose: f
                  })
                : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1
                  ? (0, r.jsx)(_.Z, {
                        user: t,
                        activity: n,
                        onAction: i
                    })
                  : (0, o.Z)(n, E.xjy.INSTANCE)
                    ? (0, r.jsx)(h.Z, {
                          user: t,
                          activity: n,
                          onAction: i
                      })
                    : null;
}
