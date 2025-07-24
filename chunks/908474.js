t.d(e, { Z: () => h });
var n = t(255367),
    r = t(73800),
    l = t(399606),
    i = t(481060),
    s = t(346486),
    a = t(69882),
    o = t(815790),
    g = t(893966),
    f = t(776767),
    v = t(388032),
    c = t(12740);
function h(A) {
    let { member: e } = A,
        t = e.userId,
        h = e.guildId,
        E = (0, l.e7)([g.Z], () => g.Z.getEnhancedMember(h, t), [t, h]),
        u = (null != E ? E : e).unusualDMActivityUntil,
        d = r.useCallback((A) => {
            if (null == A) return null;
            let e = new Date(A).getTime();
            return (0, o.fv)(e, o.jq.JOINED_AT);
        }, []),
        C = r.useMemo(() => (null == e ? null : d(u)), [e, d, u]),
        B = r.useMemo(() => (0, a.J)(e.communicationDisabledUntil), [e.communicationDisabledUntil]),
        w = r.useMemo(() => (null == e.communicationDisabledUntil ? new Date() : new Date(e.communicationDisabledUntil)), [e.communicationDisabledUntil]);
    return null != u || B
        ? (0, n.jsx)(i.xJW, {
              title: v.intl.string(v.t['7V375+']),
              titleClassName: c.infoTitle,
              children: (0, n.jsxs)(f.WM, {
                  children: [
                      null != u &&
                          (0, n.jsx)(f._2, {
                              icon: (0, n.jsx)(i.b6m, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: f.Mn,
                                  height: f.Mn
                              }),
                              name: (0, n.jsx)(i.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-default',
                                  children: v.intl.string(v.t.ZRnONz)
                              }),
                              description: (0, n.jsx)(i.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-default',
                                  children: C
                              })
                          }),
                      B &&
                          null != w &&
                          (0, n.jsx)(f._2, {
                              icon: (0, n.jsx)(i.YlB, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: f.Mn,
                                  height: f.Mn
                              }),
                              name: (0, n.jsx)(i.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-default',
                                  children: v.intl.string(v.t['TJ8/tL'])
                              }),
                              description: (0, n.jsx)(i.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-default',
                                  children: (0, n.jsx)(s.Z, {
                                      deadline: w,
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
