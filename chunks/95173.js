n.d(t, { A: () => d });
var l = n(627968),
    r = n(64700),
    a = n(417597),
    i = n(397927),
    s = n(576470),
    o = n(316031),
    E = n(157347),
    u = n(266047),
    c = n(829887),
    _ = n(985018);
function d(e) {
    let { member: t } = e,
        n = t.userId,
        d = t.guildId,
        g = ((0, a.bG)([u.A], () => u.A.getEnhancedMember(d, n), [n, d]) ?? t).unusualDMActivityUntil,
        A = r.useCallback((e) => {
            if (null == e) return null;
            let t = new Date(e).getTime();
            return (0, E.hL)(t, E.wN.JOINED_AT);
        }, []),
        T = r.useMemo(() => (null == t ? null : A(g)), [t, A, g]),
        I = r.useMemo(() => (0, o.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]),
        N = r.useMemo(
            () => (null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil)),
            [t.communicationDisabledUntil],
        );
    return null != g || I
        ? (0, l.jsx)(i.D0$, {
              label: _.intl.string(_.t["7V3759"]),
              children: (0, l.jsxs)(c.SQ, {
                  children: [
                      null != g &&
                          (0, l.jsx)(c.RU, {
                              icon: (0, l.jsx)(i.EF8, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: c.mb,
                                  height: c.mb,
                              }),
                              name: (0, l.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: _.intl.string(_.t.ZRnON3),
                              }),
                              description: (0, l.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: T,
                              }),
                          }),
                      I &&
                          null != N &&
                          (0, l.jsx)(c.RU, {
                              icon: (0, l.jsx)(i.gQi, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: c.mb,
                                  height: c.mb,
                              }),
                              name: (0, l.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: _.intl.string(_.t["TJ8/tE"]),
                              }),
                              description: (0, l.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: (0, l.jsx)(s.A, { deadline: N, showUnits: !0, stopAtOneSec: !0 }),
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
