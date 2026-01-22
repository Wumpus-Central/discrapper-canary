n.d(t, { A: () => N }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(846293),
    u = n(775602),
    d = n(793574),
    f = n(688810),
    p = n(9994),
    _ = n(461888),
    h = n(179283),
    m = n(123213),
    g = n(86376),
    E = n(42780),
    b = n(860689),
    y = n(897288),
    O = n(168428),
    A = n(652215),
    v = n(985018),
    S = n(875871);
let I = 292,
    T = 36,
    C = 48;
function N(e) {
    let { invite: t, isMemberOfGuild: n, message: a, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        f = i.useRef(null),
        [_, m] = i.useState(!0),
        [N, w] = i.useState(!1),
        P = t.state === A.elq.ACCEPTING,
        D = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        w((null != (e = null == (t = f.current) ? void 0 : t.clientHeight) ? e : 0) > I);
    }, [w]);
    let x = (0, p.oO)(t),
        L = i.useCallback(() => {
            !N || (_ && m(!1));
        }, [_, N]),
        j = i.useCallback(() => {
            !N || _ || m(!0);
        }, [_, N]),
        M = i.useMemo(() => {
            var e;
            return N && (null == (e = f.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: _ ? I : f.current.clientHeight + T + C,
                      transition: D ? void 0 : "height 0.2s ease",
                  }
                : {};
        }, [_, N, D]);
    return null == x
        ? (0, r.jsx)(O.A, {})
        : (0, r.jsxs)(l.sqX, {
              className: s()(S.Gg, { [S.vk]: N && _ }),
              onClick: L,
              style: M,
              "aria-label": v.intl.string(v.t.dcl9MQ),
              children: [
                  (0, r.jsxs)("div", {
                      className: S.uY,
                      ref: f,
                      children: [
                          (0, r.jsx)(E.J$, {
                              profile: x,
                              className: S.vK,
                          }),
                          (0, r.jsx)(E.CG, { profile: x }),
                          (0, r.jsx)(g.A, { profile: x }),
                          (0, r.jsx)(h.P, {
                              profile: x,
                              className: S.rb,
                          }),
                          (0, r.jsx)(y.A, {
                              guild: null != t.guild ? (0, b.DY)(t.guild) : null,
                              roles: t.roles,
                              className: S.Ei,
                          }),
                      ],
                  }),
                  N && !_
                      ? (0, r.jsx)("div", {
                            className: S.Se,
                            children: (0, r.jsx)(l.QWc, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: j,
                                text: v.intl.string(v.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, r.jsxs)("div", {
                      className: s()(S.qr, { [S.iK]: N }),
                      children: [
                          N && _ ? (0, r.jsx)("div", { className: S.D7 }) : null,
                          (0, r.jsx)("div", {
                              className: s()(S.z8, { [S.it]: N && _ }),
                              children: (0, r.jsx)("div", {
                                  className: S.UD,
                                  children: (0, r.jsx)(R, {
                                      invite: t,
                                      profile: x,
                                      isMemberOfGuild: n,
                                      message: a,
                                      submitting: P,
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
function R(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: a,
            message: s,
            submitting: o,
            onTransitionToInviteChannel: l,
            onAcceptInstantInvite: u,
        } = e,
        { guildId: p, ctaType: h } = (0, _.Ay)(n, _.cn.INVITE, t.code),
        { analyticsLocations: g } = (0, f.Ay)(d.A.INVITE_EMBED),
        E = i.useCallback(() => {
            let e = a ? "transition" : "accept";
            (0, c.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: s.author.id,
                    invite_message_id: s.id,
                },
                g,
            );
        }, [t, s, g, a]);
    return null == h
        ? null
        : (0, r.jsx)(m.Y, {
              guildId: p,
              ctaType: h,
              submitting: o,
              onGoToGuild: l,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: E,
          });
}
