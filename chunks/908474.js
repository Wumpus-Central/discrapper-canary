n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    a = n(399606),
    r = n(481060),
    s = n(346486),
    o = n(69882),
    c = n(815790),
    d = n(893966),
    u = n(776767),
    h = n(388032),
    p = n(859113);
function m(e) {
    let { member: t } = e,
        n = t.userId,
        m = t.guildId,
        f = (0, a.e7)([d.Z], () => d.Z.getEnhancedMember(m, n), [n, m]),
        g = (null != f ? f : t).unusualDMActivityUntil,
        _ = l.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, c.fv)(t, c.jq.JOINED_AT);
        }, []),
        C = l.useMemo(() => (null == t ? null : _(g)), [t, _, g]),
        x = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        v = l.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
    return null != g || x
        ? (0, i.jsx)(r.xJW, {
              title: h.intl.string(h.t['7V375+']),
              titleClassName: p.infoTitle,
              children: (0, i.jsxs)(u.WM, {
                  children: [
                      null != g &&
                          (0, i.jsx)(u._2, {
                              icon: (0, i.jsx)(r.b6m, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: u.Mn,
                                  height: u.Mn
                              }),
                              name: (0, i.jsx)(r.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: h.intl.string(h.t.ZRnONz)
                              }),
                              description: (0, i.jsx)(r.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: C
                              })
                          }),
                      x &&
                          null != v &&
                          (0, i.jsx)(u._2, {
                              icon: (0, i.jsx)(r.YlB, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: u.Mn,
                                  height: u.Mn
                              }),
                              name: (0, i.jsx)(r.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: h.intl.string(h.t['TJ8/tL'])
                              }),
                              description: (0, i.jsx)(r.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: (0, i.jsx)(s.Z, {
                                      deadline: v,
                                      showUnits: !0,
                                      stopAtOneSec: !0
                                  })
                              })
                          })
                  ]
              })
          })
        : null;
}
