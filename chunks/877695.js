n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(846293),
    c = n(775602),
    u = n(793574),
    m = n(688810),
    _ = n(9994),
    h = n(461888),
    p = n(179283),
    g = n(123213),
    A = n(86376),
    f = n(42780),
    x = n(860689),
    E = n(897288),
    C = n(168428),
    I = n(652215),
    T = n(985018),
    v = n(875871);
function N(e) {
    let { invite: t, isMemberOfGuild: n, message: a, onTransitionToInviteChannel: d, onAcceptInstantInvite: u } = e,
        m = l.useRef(null),
        [h, g] = l.useState(!0),
        [N, b] = l.useState(!1),
        y = t.state === I.elq.ACCEPTING,
        j = (0, s.bG)([c.A], () => c.A.useReducedMotion);
    l.useLayoutEffect(() => {
        b((m.current?.clientHeight ?? 0) > 292);
    }, [b]);
    let R = (0, _.oO)(t),
        L = l.useCallback(() => {
            !N || (h && g(!1));
        }, [h, N]),
        M = l.useCallback(() => {
            !N || h || g(!0);
        }, [h, N]),
        O = l.useMemo(
            () =>
                N && m.current?.clientHeight != null
                    ? {
                          height: h ? 292 : m.current.clientHeight + 36 + 48,
                          transition: j ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [h, N, j],
        );
    return null == R
        ? (0, i.jsx)(C.A, {})
        : (0, i.jsxs)(o.sqX, {
              className: r()(v.Gg, { [v.vk]: N && h }),
              onClick: L,
              style: O,
              "aria-label": T.intl.string(T.t.dcl9MQ),
              children: [
                  (0, i.jsxs)("div", {
                      className: v.uY,
                      ref: m,
                      children: [
                          (0, i.jsx)(f.J$, { profile: R, className: v.vK }),
                          (0, i.jsx)(f.CG, { profile: R }),
                          (0, i.jsx)(A.A, { profile: R }),
                          (0, i.jsx)(p.P, { profile: R, className: v.rb }),
                          (0, i.jsx)(E.A, {
                              guild: null != t.guild ? (0, x.DY)(t.guild) : null,
                              roles: t.roles,
                              className: v.Ei,
                          }),
                      ],
                  }),
                  N && !h
                      ? (0, i.jsx)("div", {
                            className: v.Se,
                            children: (0, i.jsx)(o.QWc, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: M,
                                text: T.intl.string(T.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, i.jsxs)("div", {
                      className: r()(v.qr, { [v.iK]: N }),
                      children: [
                          N && h ? (0, i.jsx)("div", { className: v.D7 }) : null,
                          (0, i.jsx)("div", {
                              className: r()(v.z8, { [v.it]: N && h }),
                              children: (0, i.jsx)("div", {
                                  className: v.UD,
                                  children: (0, i.jsx)(S, {
                                      invite: t,
                                      profile: R,
                                      isMemberOfGuild: n,
                                      message: a,
                                      submitting: y,
                                      onTransitionToInviteChannel: d,
                                      onAcceptInstantInvite: u,
                                  }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function S(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: a,
            message: r,
            submitting: s,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: c,
        } = e,
        { guildId: _, ctaType: p } = (0, h.Ay)(n, h.cn.INVITE, t.code),
        { analyticsLocations: A } = (0, m.Ay)(u.A.INVITE_EMBED),
        f = l.useCallback(() => {
            let e = a ? "transition" : "accept";
            (0, d.he)({ invite: t, action: e, inviter_id: r.author.id, invite_message_id: r.id }, A);
        }, [t, r, A, a]);
    return null == p
        ? null
        : (0, i.jsx)(g.Y, {
              guildId: _,
              ctaType: p,
              submitting: s,
              onGoToGuild: o,
              onAcceptInvite: c,
              onStartApplication: c,
              onComplete: f,
          });
}
