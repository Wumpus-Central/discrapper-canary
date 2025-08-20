t.d(e, { Z: () => h });
var n = t(951288),
    r = t(647438),
    l = t(399606),
    i = t(481060),
    s = t(346486),
    a = t(69882),
    o = t(815790),
    g = t(893966),
    c = t(776767),
    f = t(388032),
    v = t(87819);
function h(A) {
    let { member: e } = A,
        t = e.userId,
        h = e.guildId,
        u = (0, l.e7)([g.Z], () => g.Z.getEnhancedMember(h, t), [t, h]),
        d = (null != u ? u : e).unusualDMActivityUntil,
        E = r.useCallback((A) => {
            if (null == A) return null;
            let e = new Date(A).getTime();
            return (0, o.fv)(e, o.jq.JOINED_AT);
        }, []),
        C = r.useMemo(() => (null == e ? null : E(d)), [e, E, d]),
        B = r.useMemo(() => (0, a.J)(e.communicationDisabledUntil), [e.communicationDisabledUntil]),
        w = r.useMemo(
            () => (null == e.communicationDisabledUntil ? new Date() : new Date(e.communicationDisabledUntil)),
            [e.communicationDisabledUntil],
        );
    return null != d || B
        ? (0, n.jsx)(i.xJW, {
              title: f.intl.string(f.t["7V375+"]),
              titleClassName: v.infoTitle,
              children: (0, n.jsxs)(c.WM, {
                  children: [
                      null != d &&
                          (0, n.jsx)(c._2, {
                              icon: (0, n.jsx)(i.b6m, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: c.Mn,
                                  height: c.Mn,
                              }),
                              name: (0, n.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: f.intl.string(f.t.ZRnONz),
                              }),
                              description: (0, n.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: C,
                              }),
                          }),
                      B &&
                          null != w &&
                          (0, n.jsx)(c._2, {
                              icon: (0, n.jsx)(i.YlB, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: c.Mn,
                                  height: c.Mn,
                              }),
                              name: (0, n.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: f.intl.string(f.t["TJ8/tL"]),
                              }),
                              description: (0, n.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: (0, n.jsx)(s.Z, {
                                      deadline: w,
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
