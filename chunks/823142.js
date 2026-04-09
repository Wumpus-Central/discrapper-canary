n.d(t, { AV: () => O, Ay: () => j, P4: () => R, kD: () => L, sM: () => M });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(311907),
    d = n(3026),
    c = n(990078),
    u = n(732955),
    h = n(397927),
    A = n(914430),
    _ = n(442433),
    m = n(676002),
    p = n(47167),
    g = n(485947),
    f = n(924985),
    x = n(71393),
    E = n(576705),
    I = n(543465),
    C = n(551851),
    N = n(879124),
    T = n(652215),
    S = n(985018),
    b = n(71735);
function y(e) {
    e.stopPropagation();
}
let v = l.memo(function (e) {
        let t,
            {
                channel: s,
                connectChannelDragSource: u,
                connectChannelDropTarget: m,
                disableManageChannels: C,
                position: N,
                sortingPosition: v,
                hideIcon: j,
                children: R,
            } = e,
            O = (0, o.bG)([I.Ay], () => I.Ay.isChannelMuted(s.getGuildId(), s.id)),
            L = (0, o.bG)([f.A], () => f.A.isCollapsed(s.id)),
            M = (0, o.bG)([E.A], () => E.A.can(T.xBc.MANAGE_CHANNELS, s)),
            D = (0, p.Ay)(s);
        t = null != v ? (N > v ? b.mU : b.TR) : b.fx;
        let U = l.useCallback(() => {
                L ? (0, A.fh)(s.id) : (0, A.Gv)(s.id);
            }, [s.id, L]),
            G = l.useCallback(
                (e) => {
                    if ("null" !== s.id) {
                        let t = x.A.getGuild(s.getGuildId());
                        null != t &&
                            (0, _.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("75149"), n.e("53378")]).then(
                                    n.bind(n, 725756),
                                );
                                return (n) => (0, i.jsx)(e, { ...n, channel: s, guild: t });
                            });
                    }
                },
                [s],
            ),
            P = l.useCallback(() => {
                let e = s.type === T.rbe.GUILD_CATEGORY ? null : s.type,
                    t = s.getGuildId();
                null != t &&
                    (0, h.mMO)(async () => {
                        let { default: l } = await Promise.all([n.e("64233"), n.e("52719")]).then(n.bind(n, 409200));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                channelType: e,
                                guildId: t,
                                categoryId: "null" !== s.id ? s.id : null,
                            });
                    });
            }, [s]),
            { role: k, tabIndex: w, ...B } = (0, r.rm)(s.id),
            V = l.useRef(null),
            H = l.useRef(null),
            F = (0, i.jsxs)("li", {
                className: t,
                "data-dnd-name": D,
                children: [
                    (0, i.jsx)(h.vN3, {
                        focusTarget: V,
                        ringTarget: H,
                        offset: { left: 4, right: 4 },
                        children: (0, i.jsxs)("div", {
                            ref: H,
                            className: a()(b.Ki, b.iE, { [b.yZ]: L, [b.SU]: O, [b.vk]: !0 }),
                            onContextMenu: G,
                            children: [
                                (0, i.jsxs)(h.DUT, {
                                    innerRef: V,
                                    className: b.rb,
                                    tabIndex: w,
                                    ...B,
                                    onClick: U,
                                    "aria-label": S.intl.formatToPlainString(S.t.y5l3J2, { categoryName: D }),
                                    "aria-expanded": !L,
                                    focusProps: { enabled: !1 },
                                    children: [
                                        (0, i.jsx)(g.A, {
                                            className: b.UU,
                                            children: (0, i.jsx)(d.A, { children: D }),
                                        }),
                                        j
                                            ? null
                                            : (0, i.jsx)(h.abt, { size: "md", color: "currentColor", className: b.Kk }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    onClick: y,
                                    className: b.Y_,
                                    children:
                                        M && !C
                                            ? (0, i.jsx)(c.m, {
                                                  text: S.intl.string(S.t["fUYU+j"]),
                                                  children: (0, i.jsx)(h.DUT, {
                                                      className: a()(b.c9, b.ih),
                                                      onClick: P,
                                                      tabIndex: w,
                                                      role: "button",
                                                      "aria-label": S.intl.string(S.t["fUYU+j"]),
                                                      children: (0, i.jsx)(h.TIR, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: b.hs,
                                                      }),
                                                  }),
                                              })
                                            : null,
                                }),
                            ],
                        }),
                    }),
                    R,
                ],
            });
        return null != m && null != u ? m(u(F)) : F;
    }),
    j = (0, m.a)(v),
    R = l.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, i.jsx)("li", {
            className: a()(l, b.fx),
            children: (0, i.jsxs)("div", {
                className: a()(b.Ki, b._V),
                children: [
                    (0, i.jsx)("div", {
                        className: b.rb,
                        children: (0, i.jsx)(g.A, { className: b.UU, children: (0, i.jsx)(d.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, i.jsx)(c.m, {
                              asContainer: !0,
                              text: S.intl.string(S.t["5qNmsU"]),
                              children: (0, i.jsx)(h.DUT, {
                                  className: b.r,
                                  onClick: n,
                                  children: (0, i.jsx)(h.aXh, { size: "md", color: "currentColor", className: b.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    O = l.memo(function (e) {
        let { category: t } = e,
            n = (0, o.bG)([C.A], () => C.A.isVoiceCategoryCollapsed(t.guild.id)),
            s = l.useCallback(() => {
                n ? (0, N.T)(t.guild.id) : (0, N.E)(t.guild.id);
            }, [t.guild.id, n]);
        return (0, i.jsx)("div", {
            className: b.oA,
            children: (0, i.jsx)(u.$nd, {
                variant: "secondary",
                fullWidth: !0,
                onClick: s,
                icon: h.HKD,
                text: n ? S.intl.string(S.t["/eB9Bg"]) : S.intl.string(S.t.Q2gPWl),
            }),
        });
    }),
    L = l.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, o.bG)([C.A], () => C.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === T.rbe.GUILD_CATEGORY
            ? l
                ? (0, i.jsx)("li", {
                      className: b.fx,
                      children: (0, i.jsx)("div", {
                          className: a()(b.Ki, b._V),
                          children: (0, i.jsx)(g.A, {
                              className: b.UU,
                              children: (0, i.jsx)(d.A, { children: S.intl.string(S.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, i.jsx)("div", { style: { height: 16 } });
    }),
    M = l.memo(function (e) {
        let { channel: t } = e,
            n = (0, p.Ay)(t);
        return (0, i.jsx)("li", {
            className: b.fx,
            children: (0, i.jsx)("div", {
                className: a()(b.Ki, b._V),
                children: (0, i.jsx)(g.A, { className: b.UU, children: (0, i.jsx)(d.A, { children: n }) }),
            }),
        });
    });
