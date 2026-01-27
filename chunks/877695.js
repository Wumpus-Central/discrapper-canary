n.d(t, {
    A: () => j,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(846293),
    u = n(775602),
    d = n(793574),
    p = n(688810),
    m = n(9994),
    f = n(461888),
    g = n(179283),
    h = n(123213),
    _ = n(86376),
    b = n(42780),
    A = n(860689),
    y = n(897288),
    v = n(168428),
    x = n(652215),
    O = n(985018),
    E = n(875871);

function j(e) {
    let { invite: t, isMemberOfGuild: n, message: l, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        p = i.useRef(null),
        [f, h] = i.useState(!0),
        [j, I] = i.useState(!1),
        S = t.state === x.elq.ACCEPTING,
        T = (0, s.bG)([u.A], () => u.A.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        I((null != (e = null == (t = p.current) ? void 0 : t.clientHeight) ? e : 0) > 292);
    }, [I]);
    let N = (0, m.oO)(t),
        P = i.useCallback(() => {
            !j || (f && h(!1));
        }, [f, j]),
        w = i.useCallback(() => {
            !j || f || h(!0);
        }, [f, j]),
        R = i.useMemo(() => {
            var e;
            return j && (null == (e = p.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: f ? 292 : p.current.clientHeight + 36 + 48,
                      transition: T ? void 0 : "height 0.2s ease",
                  }
                : {};
        }, [f, j, T]);
    return null == N
        ? (0, r.jsx)(v.A, {})
        : (0, r.jsxs)(o.sqX, {
              className: a()(E.Gg, {
                  [E.vk]: j && f,
              }),
              onClick: P,
              style: R,
              "aria-label": O.intl.string(O.t.dcl9MQ),
              children: [
                  (0, r.jsxs)("div", {
                      className: E.uY,
                      ref: p,
                      children: [
                          (0, r.jsx)(b.J$, {
                              profile: N,
                              className: E.vK,
                          }),
                          (0, r.jsx)(b.CG, {
                              profile: N,
                          }),
                          (0, r.jsx)(_.A, {
                              profile: N,
                          }),
                          (0, r.jsx)(g.P, {
                              profile: N,
                              className: E.rb,
                          }),
                          (0, r.jsx)(y.A, {
                              guild: null != t.guild ? (0, A.DY)(t.guild) : null,
                              roles: t.roles,
                              className: E.Ei,
                          }),
                      ],
                  }),
                  j && !f
                      ? (0, r.jsx)("div", {
                            className: E.Se,
                            children: (0, r.jsx)(o.QWc, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: w,
                                text: O.intl.string(O.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, r.jsxs)("div", {
                      className: a()(E.qr, {
                          [E.iK]: j,
                      }),
                      children: [
                          j && f
                              ? (0, r.jsx)("div", {
                                    className: E.D7,
                                })
                              : null,
                          (0, r.jsx)("div", {
                              className: a()(E.z8, {
                                  [E.it]: j && f,
                              }),
                              children: (0, r.jsx)("div", {
                                  className: E.UD,
                                  children: (0, r.jsx)(C, {
                                      invite: t,
                                      profile: N,
                                      isMemberOfGuild: n,
                                      message: l,
                                      submitting: S,
                                      onTransitionToInviteChannel: c,
                                      onAcceptInstantInvite: d,
                                  }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}

function C(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: l,
            message: a,
            submitting: s,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: u,
        } = e,
        { guildId: m, ctaType: g } = (0, f.Ay)(n, f.cn.INVITE, t.code),
        { analyticsLocations: _ } = (0, p.Ay)(d.A.INVITE_EMBED),
        b = i.useCallback(() => {
            let e = l ? "transition" : "accept";
            (0, c.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: a.author.id,
                    invite_message_id: a.id,
                },
                _,
            );
        }, [t, a, _, l]);
    return null == g
        ? null
        : (0, r.jsx)(h.Y, {
              guildId: m,
              ctaType: g,
              submitting: s,
              onGoToGuild: o,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: b,
          });
}
