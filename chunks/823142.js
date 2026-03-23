"use strict";
n.d(t, { AV: () => R, Ay: () => y, P4: () => j, kD: () => O, sM: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(837381),
    o = n(311907),
    c = n(3026),
    d = n(990078),
    u = n(732955),
    h = n(397927),
    A = n(914430),
    m = n(442433),
    _ = n(676002),
    p = n(485947),
    g = n(924985),
    f = n(71393),
    x = n(576705),
    C = n(543465),
    E = n(551851),
    I = n(879124),
    N = n(652215),
    b = n(985018),
    S = n(33925);
function T(e) {
    e.stopPropagation();
}
let v = s.memo(function (e) {
        let t,
            {
                channel: l,
                connectChannelDragSource: u,
                connectChannelDropTarget: _,
                disableManageChannels: E,
                position: I,
                sortingPosition: v,
                hideIcon: y,
                children: j,
            } = e,
            R = (0, o.bG)([C.Ay], () => C.Ay.isChannelMuted(l.getGuildId(), l.id)),
            O = (0, o.bG)([g.A], () => g.A.isCollapsed(l.id)),
            L = (0, o.bG)([x.A], () => x.A.can(N.xBc.MANAGE_CHANNELS, l));
        t = null != v ? (I > v ? S.mU : S.TR) : S.fx;
        let M = s.useCallback(() => {
                O ? (0, A.fh)(l.id) : (0, A.Gv)(l.id);
            }, [l.id, O]),
            D = s.useCallback(
                (e) => {
                    if ("null" !== l.id) {
                        let t = f.A.getGuild(l.getGuildId());
                        null != t &&
                            (0, m.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("75149"), n.e("53378")]).then(
                                    n.bind(n, 725756),
                                );
                                return (n) => (0, i.jsx)(e, { ...n, channel: l, guild: t });
                            });
                    }
                },
                [l],
            ),
            G = s.useCallback(() => {
                let e = l.type === N.rbe.GUILD_CATEGORY ? null : l.type,
                    t = l.getGuildId();
                null != t &&
                    (0, h.mMO)(async () => {
                        let { default: s } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
                        return (n) =>
                            (0, i.jsx)(s, {
                                ...n,
                                channelType: e,
                                guildId: t,
                                categoryId: "null" !== l.id ? l.id : null,
                            });
                    });
            }, [l]),
            { role: U, tabIndex: P, ...w } = (0, r.rm)(l.id),
            k = s.useRef(null),
            V = s.useRef(null),
            B = (0, i.jsxs)("li", {
                className: t,
                "data-dnd-name": l.name,
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
                                    "aria-label": b.intl.formatToPlainString(b.t.y5l3J2, { categoryName: l.name }),
                                    "aria-expanded": !O,
                                    focusProps: { enabled: !1 },
                                    children: [
                                        (0, i.jsx)(p.A, {
                                            className: S.UU,
                                            children: (0, i.jsx)(c.A, { children: l.name }),
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
                                            ? (0, i.jsx)(d.m, {
                                                  text: b.intl.string(b.t["fUYU+j"]),
                                                  children: (0, i.jsx)(h.DUT, {
                                                      className: a()(S.c9, S.ih),
                                                      onClick: G,
                                                      tabIndex: P,
                                                      role: "button",
                                                      "aria-label": b.intl.string(b.t["fUYU+j"]),
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
        return null != _ && null != u ? _(u(B)) : B;
    }),
    y = (0, _.a)(v),
    j = s.memo(function (e) {
        let { name: t, onDismiss: n, className: s } = e;
        return (0, i.jsx)("li", {
            className: a()(s, S.fx),
            children: (0, i.jsxs)("div", {
                className: a()(S.Ki, S._V),
                children: [
                    (0, i.jsx)("div", {
                        className: S.rb,
                        children: (0, i.jsx)(p.A, { className: S.UU, children: (0, i.jsx)(c.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, i.jsx)(d.m, {
                              asContainer: !0,
                              text: b.intl.string(b.t["5qNmsU"]),
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
    R = s.memo(function (e) {
        let { category: t } = e,
            n = (0, o.bG)([E.A], () => E.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = s.useCallback(() => {
                n ? (0, I.T)(t.guild.id) : (0, I.E)(t.guild.id);
            }, [t.guild.id, n]);
        return (0, i.jsx)("div", {
            className: S.oA,
            children: (0, i.jsx)(u.$nd, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: h.HKD,
                text: n ? b.intl.string(b.t["/eB9Bg"]) : b.intl.string(b.t.Q2gPWl),
            }),
        });
    }),
    O = s.memo(function (e) {
        let { category: t, channel: n } = e,
            s = (0, o.bG)([E.A], () => E.A.isVoiceCategoryCollapsed(t.guild.id));
        return s || null == n || n.record.type === N.rbe.GUILD_CATEGORY
            ? s
                ? (0, i.jsx)("li", {
                      className: S.fx,
                      children: (0, i.jsx)("div", {
                          className: a()(S.Ki, S._V),
                          children: (0, i.jsx)(p.A, {
                              className: S.UU,
                              children: (0, i.jsx)(c.A, { children: b.intl.string(b.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, i.jsx)("div", { style: { height: 16 } });
    }),
    L = s.memo(function (e) {
        let { channel: t } = e;
        return (0, i.jsx)("li", {
            className: S.fx,
            children: (0, i.jsx)("div", {
                className: a()(S.Ki, S._V),
                children: (0, i.jsx)(p.A, { className: S.UU, children: (0, i.jsx)(c.A, { children: t.name }) }),
            }),
        });
    });
