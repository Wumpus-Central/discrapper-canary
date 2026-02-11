n.d(t, { AV: () => R, Ay: () => y, P4: () => j, kD: () => O, sM: () => L });
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
    m = n(442433),
    p = n(676002),
    g = n(485947),
    _ = n(924985),
    f = n(71393),
    x = n(576705),
    C = n(543465),
    E = n(551851),
    I = n(879124),
    b = n(652215),
    N = n(985018),
    S = n(587079);
function T(e) {
    e.stopPropagation();
}
let v = l.memo(function (e) {
        let t,
            {
                channel: s,
                connectChannelDragSource: u,
                connectChannelDropTarget: p,
                disableManageChannels: E,
                position: I,
                sortingPosition: v,
                hideIcon: y,
                children: j,
            } = e,
            R = (0, o.bG)([C.Ay], () => C.Ay.isChannelMuted(s.getGuildId(), s.id)),
            O = (0, o.bG)([_.A], () => _.A.isCollapsed(s.id)),
            L = (0, o.bG)([x.A], () => x.A.can(b.xBc.MANAGE_CHANNELS, s));
        t = null != v ? (I > v ? S.mU : S.TR) : S.fx;
        let M = l.useCallback(() => {
                O ? (0, A.fh)(s.id) : (0, A.Gv)(s.id);
            }, [s.id, O]),
            D = l.useCallback(
                (e) => {
                    if ("null" !== s.id) {
                        let t = f.A.getGuild(s.getGuildId());
                        null != t &&
                            (0, m.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("75149"), n.e("53378")]).then(
                                    n.bind(n, 725756),
                                );
                                return (n) => (0, i.jsx)(e, { ...n, channel: s, guild: t });
                            });
                    }
                },
                [s],
            ),
            G = l.useCallback(() => {
                let e = s.type === b.rbe.GUILD_CATEGORY ? null : s.type,
                    t = s.getGuildId();
                null != t &&
                    (0, h.mMO)(async () => {
                        let { default: l } = await Promise.all([n.e("64233"), n.e("10923")]).then(n.bind(n, 409200));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                channelType: e,
                                guildId: t,
                                categoryId: "null" !== s.id ? s.id : null,
                            });
                    });
            }, [s]),
            { role: U, tabIndex: P, ...w } = (0, r.rm)(s.id),
            k = l.useRef(null),
            V = l.useRef(null),
            B = (0, i.jsxs)("li", {
                className: t,
                "data-dnd-name": s.name,
                children: [
                    (0, i.jsx)(h.vN3, {
                        focusTarget: k,
                        ringTarget: V,
                        offset: { left: 4, right: 4 },
                        children: (0, i.jsxs)("div", {
                            ref: V,
                            className: a()(S.Ki, S.iE, { [S.yZ]: O, [S.SU]: R, [S.vk]: !0 }),
                            onContextMenu: D,
                            children: [
                                (0, i.jsxs)(h.DUT, {
                                    innerRef: k,
                                    className: S.rb,
                                    tabIndex: P,
                                    ...w,
                                    onClick: M,
                                    "aria-label": N.intl.formatToPlainString(N.t.y5l3J2, { categoryName: s.name }),
                                    "aria-expanded": !O,
                                    focusProps: { enabled: !1 },
                                    children: [
                                        (0, i.jsx)(g.A, {
                                            className: S.UU,
                                            children: (0, i.jsx)(d.A, { children: s.name }),
                                        }),
                                        y
                                            ? null
                                            : (0, i.jsx)(h.abt, { size: "md", color: "currentColor", className: S.Kk }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    onClick: T,
                                    className: S.Y_,
                                    children:
                                        L && !E
                                            ? (0, i.jsx)(c.m, {
                                                  text: N.intl.string(N.t["fUYU+j"]),
                                                  children: (0, i.jsx)(h.DUT, {
                                                      className: a()(S.c9, S.ih),
                                                      onClick: G,
                                                      tabIndex: P,
                                                      role: "button",
                                                      "aria-label": N.intl.string(N.t["fUYU+j"]),
                                                      children: (0, i.jsx)(h.TIR, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: S.hs,
                                                      }),
                                                  }),
                                              })
                                            : null,
                                }),
                            ],
                        }),
                    }),
                    j,
                ],
            });
        return null != p && null != u ? p(u(B)) : B;
    }),
    y = (0, p.a)(v),
    j = l.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, i.jsx)("li", {
            className: a()(l, S.fx),
            children: (0, i.jsxs)("div", {
                className: a()(S.Ki, S._V),
                children: [
                    (0, i.jsx)("div", {
                        className: S.rb,
                        children: (0, i.jsx)(g.A, { className: S.UU, children: (0, i.jsx)(d.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, i.jsx)(c.m, {
                              asContainer: !0,
                              text: N.intl.string(N.t["5qNmsU"]),
                              children: (0, i.jsx)(h.DUT, {
                                  className: S.r,
                                  onClick: n,
                                  children: (0, i.jsx)(h.aXh, { size: "md", color: "currentColor", className: S.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    R = l.memo(function (e) {
        let { category: t } = e,
            n = (0, o.bG)([E.A], () => E.A.isVoiceCategoryCollapsed(t.guild.id)),
            s = l.useCallback(() => {
                n ? (0, I.T)(t.guild.id) : (0, I.E)(t.guild.id);
            }, [t.guild.id, n]);
        return (0, i.jsx)("div", {
            className: S.oA,
            children: (0, i.jsx)(u.$nd, {
                variant: "secondary",
                fullWidth: !0,
                onClick: s,
                icon: h.HKD,
                text: n ? N.intl.string(N.t["/eB9Bg"]) : N.intl.string(N.t.Q2gPWl),
            }),
        });
    }),
    O = l.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, o.bG)([E.A], () => E.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === b.rbe.GUILD_CATEGORY
            ? l
                ? (0, i.jsx)("li", {
                      className: S.fx,
                      children: (0, i.jsx)("div", {
                          className: a()(S.Ki, S._V),
                          children: (0, i.jsx)(g.A, {
                              className: S.UU,
                              children: (0, i.jsx)(d.A, { children: N.intl.string(N.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, i.jsx)("div", { style: { height: 16 } });
    }),
    L = l.memo(function (e) {
        let { channel: t } = e;
        return (0, i.jsx)("li", {
            className: S.fx,
            children: (0, i.jsx)("div", {
                className: a()(S.Ki, S._V),
                children: (0, i.jsx)(g.A, { className: S.UU, children: (0, i.jsx)(d.A, { children: t.name }) }),
            }),
        });
    });
