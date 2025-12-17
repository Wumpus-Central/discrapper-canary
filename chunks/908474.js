n.d(t, { Z: () => _ });
var r = n(54381),
    l = n(473749),
    i = n(399606),
    a = n(481060),
    s = n(346486),
    o = n(69882),
    u = n(815790),
    c = n(893966),
    E = n(776767),
    d = n(388032);
function _(e) {
    let { member: t } = e,
        n = t.userId,
        _ = t.guildId,
        A = (0, i.e7)([c.Z], () => c.Z.getEnhancedMember(_, n), [n, _]),
        T = (null != A ? A : t).unusualDMActivityUntil,
        I = l.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, u.fv)(t, u.jq.JOINED_AT);
        }, []),
        m = l.useMemo(() => (null == t ? null : I(T)), [t, I, T]),
        f = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        g = l.useMemo(
            () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
            [t.communicationDisabledUntil],
        );
    return null != T || f
        ? (0, r.jsx)(a.gNt, {
              label: d.intl.string(d.t["7V3759"]),
              children: (0, r.jsxs)(E.WM, {
                  children: [
                      null != T &&
                          (0, r.jsx)(E._2, {
                              icon: (0, r.jsx)(a.b6m, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: E.Mn,
                                  height: E.Mn,
                              }),
                              name: (0, r.jsx)(a.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: d.intl.string(d.t.ZRnON3),
                              }),
                              description: (0, r.jsx)(a.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: m,
                              }),
                          }),
                      f &&
                          null != g &&
                          (0, r.jsx)(E._2, {
                              icon: (0, r.jsx)(a.YlB, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: E.Mn,
                                  height: E.Mn,
                              }),
                              name: (0, r.jsx)(a.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: d.intl.string(d.t["TJ8/tE"]),
                              }),
                              description: (0, r.jsx)(a.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: (0, r.jsx)(s.Z, {
                                      deadline: g,
                                      showUnits: !0,
                                      stopAtOneSec: !0,
                                  }),
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
