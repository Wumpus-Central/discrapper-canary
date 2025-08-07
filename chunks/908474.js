n.d(t, { Z: () => A });
var r = n(255367),
    l = n(73800),
    s = n(399606),
    i = n(481060),
    a = n(346486),
    o = n(69882),
    u = n(815790),
    c = n(893966),
    d = n(776767),
    E = n(388032),
    _ = n(12740);
function A(e) {
    let { member: t } = e,
        n = t.userId,
        A = t.guildId,
        T = (0, s.e7)([c.Z], () => c.Z.getEnhancedMember(A, n), [n, A]),
        m = (null != T ? T : t).unusualDMActivityUntil,
        I = l.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, u.fv)(t, u.jq.JOINED_AT);
        }, []),
        g = l.useMemo(() => (null == t ? null : I(m)), [t, I, m]),
        f = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        N = l.useMemo(
            () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
            [t.communicationDisabledUntil],
        );
    return null != m || f
        ? (0, r.jsx)(i.xJW, {
              title: E.intl.string(E.t["7V375+"]),
              titleClassName: _.infoTitle,
              children: (0, r.jsxs)(d.WM, {
                  children: [
                      null != m &&
                          (0, r.jsx)(d._2, {
                              icon: (0, r.jsx)(i.b6m, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: d.Mn,
                                  height: d.Mn,
                              }),
                              name: (0, r.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: E.intl.string(E.t.ZRnONz),
                              }),
                              description: (0, r.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: g,
                              }),
                          }),
                      f &&
                          null != N &&
                          (0, r.jsx)(d._2, {
                              icon: (0, r.jsx)(i.YlB, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: d.Mn,
                                  height: d.Mn,
                              }),
                              name: (0, r.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: E.intl.string(E.t["TJ8/tL"]),
                              }),
                              description: (0, r.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: (0, r.jsx)(a.Z, {
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
