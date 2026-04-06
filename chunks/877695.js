n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(110259),
    o = n(311907),
    d = n(397927),
    c = n(846293),
    u = n(775602),
    _ = n(793574),
    m = n(688810),
    h = n(139286),
    p = n(9994),
    g = n(461888),
    A = n(179283),
    x = n(123213),
    f = n(86376),
    C = n(42780),
    E = n(21599),
    I = n(860689),
    v = n(897288),
    b = n(168428),
    T = n(652215),
    N = n(985018),
    y = n(105544);
function S(e) {
    let { invite: t, isMemberOfGuild: n, message: s, onTransitionToInviteChannel: c, onAcceptInstantInvite: g } = e,
        x = l.useRef(null),
        [S, L] = l.useState(!0),
        [R, P] = l.useState(!1),
        D = t.state === T.elq.ACCEPTING,
        M = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        { analyticsLocations: w } = (0, m.Ay)(_.A.INVITE_EMBED);
    (0, h.A)({
        name: a.ImpressionNames.INVITE_EMBED,
        type: a.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, E._U)(t.code, s.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: w,
        },
    }),
        l.useLayoutEffect(() => {
            P((x.current?.clientHeight ?? 0) > 292);
        }, [P]);
    let k = (0, p.oO)(t),
        O = l.useCallback(() => {
            !R || (S && L(!1));
        }, [S, R]),
        U = l.useCallback(() => {
            !R || S || L(!0);
        }, [S, R]),
        B = l.useMemo(
            () =>
                R && x.current?.clientHeight != null
                    ? {
                          height: S ? 292 : x.current.clientHeight + 36 + 48,
                          transition: M ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [S, R, M],
        );
    return null == k
        ? (0, i.jsx)(b.A, {})
        : (0, i.jsxs)(d.sqX, {
              className: r()(y.Gg, { [y.vk]: R && S }),
              onClick: O,
              style: B,
              "aria-label": N.intl.string(N.t.dcl9MQ),
              children: [
                  (0, i.jsxs)("div", {
                      className: y.uY,
                      ref: x,
                      children: [
                          (0, i.jsx)(C.J$, { profile: k, className: y.vK }),
                          (0, i.jsx)(C.CG, { profile: k }),
                          (0, i.jsx)(f.A, { profile: k }),
                          (0, i.jsx)(A.P, { profile: k, className: y.rb }),
                          (0, i.jsx)(v.A, {
                              guild: null != t.guild ? (0, I.DY)(t.guild) : null,
                              roles: t.roles,
                              className: y.Ei,
                          }),
                      ],
                  }),
                  R && !S
                      ? (0, i.jsx)("div", {
                            className: y.Se,
                            children: (0, i.jsx)(d.QWc, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: U,
                                text: N.intl.string(N.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, i.jsxs)("div", {
                      className: r()(y.qr, { [y.iK]: R }),
                      children: [
                          R && S ? (0, i.jsx)("div", { className: y.D7 }) : null,
                          (0, i.jsx)("div", {
                              className: r()(y.z8, { [y.it]: R && S }),
                              children: (0, i.jsx)("div", {
                                  className: y.UD,
                                  children: (0, i.jsx)(j, {
                                      invite: t,
                                      profile: k,
                                      isMemberOfGuild: n,
                                      message: s,
                                      submitting: D,
                                      onTransitionToInviteChannel: c,
                                      onAcceptInstantInvite: g,
                                  }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function j(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: s,
            message: r,
            submitting: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: u, ctaType: h } = (0, g.Ay)(n, g.cn.INVITE, t.code),
        { analyticsLocations: p } = (0, m.Ay)(_.A.INVITE_EMBED),
        A = l.useCallback(() => {
            let e = s ? "transition" : "accept";
            (0, c.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: r.author.id,
                    invite_message_id: r.id,
                    invite_instance_id: (0, E._U)(t.code, r.id),
                },
                p,
            );
        }, [t, r, p, s]);
    return null == h
        ? null
        : (0, i.jsx)(x.Y, {
              guildId: u,
              ctaType: h,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: A,
          });
}
