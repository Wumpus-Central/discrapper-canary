n.d(t, { AV: () => R, Ay: () => v, P4: () => y, kD: () => O, sM: () => L });
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
    g = n(442433),
    m = n(676002),
    p = n(485947),
    _ = n(924985),
    x = n(71393),
    f = n(576705),
    E = n(543465),
    C = n(551851),
    I = n(879124),
    S = n(652215),
    b = n(985018),
    N = n(33925);
function T(e) {
    e.stopPropagation();
}
let j = l.memo(function (e) {
        let t,
            {
                channel: s,
                connectChannelDragSource: u,
                connectChannelDropTarget: m,
                disableManageChannels: C,
                position: I,
                sortingPosition: j,
                hideIcon: v,
                children: y,
            } = e,
            R = (0, o.bG)([E.Ay], () => E.Ay.isChannelMuted(s.getGuildId(), s.id)),
            O = (0, o.bG)([_.A], () => _.A.isCollapsed(s.id)),
            L = (0, o.bG)([f.A], () => f.A.can(S.xBc.MANAGE_CHANNELS, s));
        t = null != j ? (I > j ? N.mU : N.TR) : N.fx;
        let D = l.useCallback(() => {
                O ? (0, A.fh)(s.id) : (0, A.Gv)(s.id);
            }, [s.id, O]),
            M = l.useCallback(
                (e) => {
                    if ("null" !== s.id) {
                        let t = x.A.getGuild(s.getGuildId());
                        null != t &&
                            (0, g.L3)(e, async () => {
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
                let e = s.type === S.rbe.GUILD_CATEGORY ? null : s.type,
                    t = s.getGuildId();
                null != t &&
                    (0, h.mMO)(async () => {
                        let { default: l } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                channelType: e,
                                guildId: t,
                                categoryId: "null" !== s.id ? s.id : null,
                            });
                    });
            }, [s]),
            { role: U, tabIndex: P, ...k } = (0, r.rm)(s.id),
            w = l.useRef(null),
            V = l.useRef(null),
            B = (0, i.jsxs)("li", {
                className: t,
                "data-dnd-name": s.name,
                children: [
                    (0, i.jsx)(h.vN3, {
                        focusTarget: w,
                        ringTarget: V,
                        offset: { left: 4, right: 4 },
                        children: (0, i.jsxs)("div", {
                            ref: V,
                            className: a()(N.Ki, N.iE, { [N.yZ]: O, [N.SU]: R, [N.vk]: !0 }),
                            onContextMenu: M,
                            children: [
                                (0, i.jsxs)(h.DUT, {
                                    innerRef: w,
                                    className: N.rb,
                                    tabIndex: P,
                                    ...k,
                                    onClick: D,
                                    "aria-label": b.intl.formatToPlainString(b.t.y5l3J2, { categoryName: s.name }),
                                    "aria-expanded": !O,
                                    focusProps: { enabled: !1 },
                                    children: [
                                        (0, i.jsx)(p.A, {
                                            className: N.UU,
                                            children: (0, i.jsx)(d.A, { children: s.name }),
                                        }),
                                        v
                                            ? null
                                            : (0, i.jsx)(h.abt, { size: "md", color: "currentColor", className: N.Kk }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    onClick: T,
                                    className: N.Y_,
                                    children:
                                        L && !C
                                            ? (0, i.jsx)(c.m, {
                                                  text: b.intl.string(b.t["fUYU+j"]),
                                                  children: (0, i.jsx)(h.DUT, {
                                                      className: a()(N.c9, N.ih),
                                                      onClick: G,
                                                      tabIndex: P,
                                                      role: "button",
                                                      "aria-label": b.intl.string(b.t["fUYU+j"]),
                                                      children: (0, i.jsx)(h.TIR, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: N.hs,
                                                      }),
                                                  }),
                                              })
                                            : null,
                                }),
                            ],
                        }),
                    }),
                    y,
                ],
            });
        return null != m && null != u ? m(u(B)) : B;
    }),
    v = (0, m.a)(j),
    y = l.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, i.jsx)("li", {
            className: a()(l, N.fx),
            children: (0, i.jsxs)("div", {
                className: a()(N.Ki, N._V),
                children: [
                    (0, i.jsx)("div", {
                        className: N.rb,
                        children: (0, i.jsx)(p.A, { className: N.UU, children: (0, i.jsx)(d.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, i.jsx)(c.m, {
                              asContainer: !0,
                              text: b.intl.string(b.t["5qNmsU"]),
                              children: (0, i.jsx)(h.DUT, {
                                  className: N.r,
                                  onClick: n,
                                  children: (0, i.jsx)(h.aXh, { size: "md", color: "currentColor", className: N.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    R = l.memo(function (e) {
        let { category: t } = e,
            n = (0, o.bG)([C.A], () => C.A.isVoiceCategoryCollapsed(t.guild.id)),
            s = l.useCallback(() => {
                n ? (0, I.T)(t.guild.id) : (0, I.E)(t.guild.id);
            }, [t.guild.id, n]);
        return (0, i.jsx)("div", {
            className: N.oA,
            children: (0, i.jsx)(u.$nd, {
                variant: "secondary",
                fullWidth: !0,
                onClick: s,
                icon: h.HKD,
                text: n ? b.intl.string(b.t["/eB9Bg"]) : b.intl.string(b.t.Q2gPWl),
            }),
        });
    }),
    O = l.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, o.bG)([C.A], () => C.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === S.rbe.GUILD_CATEGORY
            ? l
                ? (0, i.jsx)("li", {
                      className: N.fx,
                      children: (0, i.jsx)("div", {
                          className: a()(N.Ki, N._V),
                          children: (0, i.jsx)(p.A, {
                              className: N.UU,
                              children: (0, i.jsx)(d.A, { children: b.intl.string(b.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, i.jsx)("div", { style: { height: 16 } });
    }),
    L = l.memo(function (e) {
        let { channel: t } = e;
        return (0, i.jsx)("li", {
            className: N.fx,
            children: (0, i.jsx)("div", {
                className: a()(N.Ki, N._V),
                children: (0, i.jsx)(p.A, { className: N.UU, children: (0, i.jsx)(d.A, { children: t.name }) }),
            }),
        });
    });
