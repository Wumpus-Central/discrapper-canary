n.d(t, { AV: () => R, Ay: () => v, P4: () => j, kD: () => O, sM: () => L });
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
    g = n(485947),
    p = n(924985),
    f = n(71393),
    x = n(576705),
    E = n(543465),
    I = n(551851),
    C = n(879124),
    N = n(652215),
    T = n(985018),
    S = n(71735);
function b(e) {
    e.stopPropagation();
}
let y = l.memo(function (e) {
        let t,
            {
                channel: s,
                connectChannelDragSource: u,
                connectChannelDropTarget: m,
                disableManageChannels: I,
                position: C,
                sortingPosition: y,
                hideIcon: v,
                children: j,
            } = e,
            R = (0, o.bG)([E.Ay], () => E.Ay.isChannelMuted(s.getGuildId(), s.id)),
            O = (0, o.bG)([p.A], () => p.A.isCollapsed(s.id)),
            L = (0, o.bG)([x.A], () => x.A.can(N.xBc.MANAGE_CHANNELS, s));
        t = null != y ? (C > y ? S.mU : S.TR) : S.fx;
        let M = l.useCallback(() => {
                O ? (0, A.fh)(s.id) : (0, A.Gv)(s.id);
            }, [s.id, O]),
            D = l.useCallback(
                (e) => {
                    if ("null" !== s.id) {
                        let t = f.A.getGuild(s.getGuildId());
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
            U = l.useCallback(() => {
                let e = s.type === N.rbe.GUILD_CATEGORY ? null : s.type,
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
            { role: G, tabIndex: P, ...k } = (0, r.rm)(s.id),
            w = l.useRef(null),
            B = l.useRef(null),
            V = (0, i.jsxs)("li", {
                className: t,
                "data-dnd-name": s.name,
                children: [
                    (0, i.jsx)(h.vN3, {
                        focusTarget: w,
                        ringTarget: B,
                        offset: { left: 4, right: 4 },
                        children: (0, i.jsxs)("div", {
                            ref: B,
                            className: a()(S.Ki, S.iE, { [S.yZ]: O, [S.SU]: R, [S.vk]: !0 }),
                            onContextMenu: D,
                            children: [
                                (0, i.jsxs)(h.DUT, {
                                    innerRef: w,
                                    className: S.rb,
                                    tabIndex: P,
                                    ...k,
                                    onClick: M,
                                    "aria-label": T.intl.formatToPlainString(T.t.y5l3J2, { categoryName: s.name }),
                                    "aria-expanded": !O,
                                    focusProps: { enabled: !1 },
                                    children: [
                                        (0, i.jsx)(g.A, {
                                            className: S.UU,
                                            children: (0, i.jsx)(d.A, { children: s.name }),
                                        }),
                                        v
                                            ? null
                                            : (0, i.jsx)(h.abt, { size: "md", color: "currentColor", className: S.Kk }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    onClick: b,
                                    className: S.Y_,
                                    children:
                                        L && !I
                                            ? (0, i.jsx)(c.m, {
                                                  text: T.intl.string(T.t["fUYU+j"]),
                                                  children: (0, i.jsx)(h.DUT, {
                                                      className: a()(S.c9, S.ih),
                                                      onClick: U,
                                                      tabIndex: P,
                                                      role: "button",
                                                      "aria-label": T.intl.string(T.t["fUYU+j"]),
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
        return null != m && null != u ? m(u(V)) : V;
    }),
    v = (0, m.a)(y),
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
                              text: T.intl.string(T.t["5qNmsU"]),
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
            n = (0, o.bG)([I.A], () => I.A.isVoiceCategoryCollapsed(t.guild.id)),
            s = l.useCallback(() => {
                n ? (0, C.T)(t.guild.id) : (0, C.E)(t.guild.id);
            }, [t.guild.id, n]);
        return (0, i.jsx)("div", {
            className: S.oA,
            children: (0, i.jsx)(u.$nd, {
                variant: "secondary",
                fullWidth: !0,
                onClick: s,
                icon: h.HKD,
                text: n ? T.intl.string(T.t["/eB9Bg"]) : T.intl.string(T.t.Q2gPWl),
            }),
        });
    }),
    O = l.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, o.bG)([I.A], () => I.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === N.rbe.GUILD_CATEGORY
            ? l
                ? (0, i.jsx)("li", {
                      className: S.fx,
                      children: (0, i.jsx)("div", {
                          className: a()(S.Ki, S._V),
                          children: (0, i.jsx)(g.A, {
                              className: S.UU,
                              children: (0, i.jsx)(d.A, { children: T.intl.string(T.t["V/u9Dy"]) }),
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
