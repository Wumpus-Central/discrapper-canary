n.d(t, { Z: () => A });
var r = n(951288),
    l = n(647438),
    i = n(399606),
    a = n(481060),
    s = n(346486),
    o = n(69882),
    u = n(815790),
    c = n(893966),
    E = n(776767),
    d = n(388032),
    _ = n(87819);
function A(e) {
    let { member: t } = e,
        n = t.userId,
        A = t.guildId,
        T = (0, i.e7)([c.Z], () => c.Z.getEnhancedMember(A, n), [n, A]),
        m = (null != T ? T : t).unusualDMActivityUntil,
        I = l.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, u.fv)(t, u.jq.JOINED_AT);
        }, []),
        g = l.useMemo(() => (null == t ? null : I(m)), [t, I, m]),
        h = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        N = l.useMemo(
            () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
            [t.communicationDisabledUntil],
        );
    return null != m || h
        ? (0, r.jsx)(a.xJW, {
              title: d.intl.string(d.t["7V375+"]),
              titleClassName: _.infoTitle,
              children: (0, r.jsxs)(E.WM, {
                  children: [
                      null != m &&
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
                                  children: d.intl.string(d.t.ZRnONz),
                              }),
                              description: (0, r.jsx)(a.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: g,
                              }),
                          }),
                      h &&
                          null != N &&
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
                                  children: d.intl.string(d.t["TJ8/tL"]),
                              }),
                              description: (0, r.jsx)(a.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: (0, r.jsx)(s.Z, {
                                      deadline: N,
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
