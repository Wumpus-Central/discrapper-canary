n.d(t, { Z: () => A });
var r = n(255367),
    l = n(73800),
    i = n(399606),
    s = n(481060),
    a = n(346486),
    o = n(69882),
    u = n(815790),
    c = n(893966),
    E = n(776767),
    d = n(388032),
    _ = n(12740);
function A(e) {
    let { member: t } = e,
        n = t.userId,
        A = t.guildId,
        T = (0, i.e7)([c.Z], () => c.Z.getEnhancedMember(A, n), [n, A]),
        I = (null != T ? T : t).unusualDMActivityUntil,
        g = l.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, u.fv)(t, u.jq.JOINED_AT);
        }, []),
        m = l.useMemo(() => (null == t ? null : g(I)), [t, g, I]),
        f = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        O = l.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
    return null != I || f
        ? (0, r.jsx)(s.xJW, {
              title: d.intl.string(d.t['7V375+']),
              titleClassName: _.infoTitle,
              children: (0, r.jsxs)(E.WM, {
                  children: [
                      null != I &&
                          (0, r.jsx)(E._2, {
                              icon: (0, r.jsx)(s.b6m, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: E.Mn,
                                  height: E.Mn
                              }),
                              name: (0, r.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-default',
                                  children: d.intl.string(d.t.ZRnONz)
                              }),
                              description: (0, r.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-default',
                                  children: m
                              })
                          }),
                      f &&
                          null != O &&
                          (0, r.jsx)(E._2, {
                              icon: (0, r.jsx)(s.YlB, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: E.Mn,
                                  height: E.Mn
                              }),
                              name: (0, r.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-default',
                                  children: d.intl.string(d.t['TJ8/tL'])
                              }),
                              description: (0, r.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-default',
                                  children: (0, r.jsx)(a.Z, {
                                      deadline: O,
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
