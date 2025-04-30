n.d(t, { Z: () => h });
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(167762),
    a = n(293273),
    s = n(594174),
    c = n(603618),
    u = n(388627),
    d = n(981631),
    p = n(852266);
function h(e) {
    let { locked: t } = e,
        n = (0, u.II)(),
        h = null == n ? void 0 : n.id,
        f = null == n ? void 0 : n.altId,
        m = (0, o.e7)([s.default], () => s.default.getCurrentUser()),
        g = null != f ? f : h,
        y = (0, o.e7)([a.Z], () => (null == g ? null : a.Z.getApplicationActivity(g)), [g]),
        O = (0, r.useCallback)(() => {}, []),
        v = (0, r.useCallback)(
            () =>
                (0, i.jsx)(c.lE, {
                    activity: y,
                    currentUser: m,
                    showInviteButton: !1
                }),
            [y, m]
        );
    return t
        ? null
        : (0, i.jsx)(l.r1, {
              containerClassName: p.container,
              listClassName: p.list,
              closePopout: O,
              renderHeader: v,
              appContext: d.IlC.OVERLAY
          });
}
