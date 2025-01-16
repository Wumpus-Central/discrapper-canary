n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(399606),
    a = n(481060),
    s = n(346486),
    o = n(69882),
    c = n(815790),
    d = n(893966),
    u = n(776767),
    h = n(388032),
    p = n(758570);
function m(e) {
    let { member: t } = e,
        n = t.userId,
        m = t.guildId,
        f = (0, r.e7)([d.Z], () => d.Z.getEnhancedMember(m, n), [n, m]),
        g = (null != f ? f : t).unusualDMActivityUntil,
        C = l.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, c.fv)(t, c.jq.JOINED_AT);
        }, []),
        x = l.useMemo(() => (null == t ? null : C(g)), [t, C, g]),
        v = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        _ = l.useMemo(() => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)), [t.communicationDisabledUntil]);
    return null != g || v
        ? (0, i.jsx)(a.FormItem, {
              title: h.intl.string(h.t['7V375+']),
              titleClassName: p.infoTitle,
              children: (0, i.jsxs)(u.WM, {
                  children: [
                      null != g &&
                          (0, i.jsx)(u._2, {
                              icon: (0, i.jsx)(a.ChatWarningIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: u.Mn,
                                  height: u.Mn
                              }),
                              name: (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: h.intl.string(h.t.ZRnONz)
                              }),
                              description: (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: x
                              })
                          }),
                      v &&
                          null != _ &&
                          (0, i.jsx)(u._2, {
                              icon: (0, i.jsx)(a.ClockWarningIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: u.Mn,
                                  height: u.Mn
                              }),
                              name: (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: h.intl.string(h.t['TJ8/tL'])
                              }),
                              description: (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-normal',
                                  children: (0, i.jsx)(s.Z, {
                                      deadline: _,
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
