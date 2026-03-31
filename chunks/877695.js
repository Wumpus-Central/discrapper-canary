n.d(t, { A: () => y });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(397927),
    d = n(846293),
    c = n(775602),
    u = n(793574),
    _ = n(688810),
    m = n(9994),
    h = n(461888),
    p = n(179283),
    g = n(123213),
    A = n(86376),
    x = n(42780),
    f = n(21599),
    C = n(860689),
    I = n(897288),
    E = n(168428),
    b = n(652215),
    v = n(985018),
    T = n(105544);
function y(e) {
    let { invite: t, isMemberOfGuild: n, message: r, onTransitionToInviteChannel: d, onAcceptInstantInvite: u } = e,
        _ = a.useRef(null),
        [h, g] = a.useState(!0),
        [f, y] = a.useState(!1),
        N = t.state === b.elq.ACCEPTING,
        j = (0, s.bG)([c.A], () => c.A.useReducedMotion);
    a.useLayoutEffect(() => {
        y((_.current?.clientHeight ?? 0) > 292);
    }, [y]);
    let L = (0, m.oO)(t),
        R = a.useCallback(() => {
            !f || (h && g(!1));
        }, [h, f]),
        P = a.useCallback(() => {
            !f || h || g(!0);
        }, [h, f]),
        w = a.useMemo(
            () =>
                f && _.current?.clientHeight != null
                    ? {
                          height: h ? 292 : _.current.clientHeight + 36 + 48,
                          transition: j ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [h, f, j],
        );
    return null == L
        ? (0, i.jsx)(E.A, {})
        : (0, i.jsxs)(o.sqX, {
              className: l()(T.Gg, { [T.vk]: f && h }),
              onClick: R,
              style: w,
              "aria-label": v.intl.string(v.t.dcl9MQ),
              children: [
                  (0, i.jsxs)("div", {
                      className: T.uY,
                      ref: _,
                      children: [
                          (0, i.jsx)(x.J$, { profile: L, className: T.vK }),
                          (0, i.jsx)(x.CG, { profile: L }),
                          (0, i.jsx)(A.A, { profile: L }),
                          (0, i.jsx)(p.P, { profile: L, className: T.rb }),
                          (0, i.jsx)(I.A, {
                              guild: null != t.guild ? (0, C.DY)(t.guild) : null,
                              roles: t.roles,
                              className: T.Ei,
                          }),
                      ],
                  }),
                  f && !h
                      ? (0, i.jsx)("div", {
                            className: T.Se,
                            children: (0, i.jsx)(o.QWc, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: P,
                                text: v.intl.string(v.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, i.jsxs)("div", {
                      className: l()(T.qr, { [T.iK]: f }),
                      children: [
                          f && h ? (0, i.jsx)("div", { className: T.D7 }) : null,
                          (0, i.jsx)("div", {
                              className: l()(T.z8, { [T.it]: f && h }),
                              children: (0, i.jsx)("div", {
                                  className: T.UD,
                                  children: (0, i.jsx)(S, {
                                      invite: t,
                                      profile: L,
                                      isMemberOfGuild: n,
                                      message: r,
                                      submitting: N,
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
            isMemberOfGuild: r,
            message: l,
            submitting: s,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: c,
        } = e,
        { guildId: m, ctaType: p } = (0, h.Ay)(n, h.cn.INVITE, t.code),
        { analyticsLocations: A } = (0, _.Ay)(u.A.INVITE_EMBED),
        x = a.useCallback(() => {
            let e = r ? "transition" : "accept";
            (0, d.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, f._U)(t.code, l.id),
                },
                A,
            );
        }, [t, l, A, r]);
    return null == p
        ? null
        : (0, i.jsx)(g.Y, {
              guildId: m,
              ctaType: p,
              submitting: s,
              onGoToGuild: o,
              onAcceptInvite: c,
              onStartApplication: c,
              onComplete: x,
          });
}
