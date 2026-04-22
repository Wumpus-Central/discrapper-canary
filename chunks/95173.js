n.d(t, { A: () => T });
var l = n(627968),
    a = n(64700),
    r = n(417597),
    i = n(452027),
    s = n(953822),
    E = n(834730),
    _ = n(60270),
    u = n(576470),
    o = n(316031),
    c = n(157347),
    d = n(266047),
    A = n(829887),
    g = n(985018);
function T(e) {
    let { member: t } = e,
        n = t.userId,
        T = t.guildId,
        I = ((0, r.bG)([d.A], () => d.A.getEnhancedMember(T, n), [n, T]) ?? t).unusualDMActivityUntil,
        N = a.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, c.hL)(t, c.wN.JOINED_AT);
        }, []),
        G = a.useMemo(() => (null == t ? null : N(I)), [t, N, I]),
        m = a.useMemo(() => (0, o.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        O = a.useMemo(
            () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
            [t.communicationDisabledUntil],
        );
    return null != I || m
        ? (0, l.jsx)(i.D, {
              label: g.intl.string(g.t["7V3759"]),
              children: (0, l.jsxs)(A.SQ, {
                  children: [
                      null != I &&
                          (0, l.jsx)(A.RU, {
                              icon: (0, l.jsx)(s.E, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: A.mb,
                                  height: A.mb,
                              }),
                              name: (0, l.jsx)(E.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t.ZRnON3),
                              }),
                              description: (0, l.jsx)(E.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: G,
                              }),
                          }),
                      m &&
                          null != O &&
                          (0, l.jsx)(A.RU, {
                              icon: (0, l.jsx)(_.g, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: A.mb,
                                  height: A.mb,
                              }),
                              name: (0, l.jsx)(E.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t["TJ8/tE"]),
                              }),
                              description: (0, l.jsx)(E.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: (0, l.jsx)(u.A, { deadline: O, showUnits: !0, stopAtOneSec: !0 }),
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
