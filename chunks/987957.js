n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(417597),
    o = n(990078),
    d = n(192308),
    c = n(276293),
    u = n(772838),
    m = n(834730),
    g = n(408278),
    h = n(22231),
    x = n(47167),
    _ = n(713654),
    p = n(599119),
    A = n(202027),
    E = n(374084),
    f = n(111487),
    j = n(734057),
    N = n(71393),
    I = n(486020),
    C = n(132514),
    b = n(985018),
    v = n(327084);
let S = function (e) {
    let {
            guildId: t,
            action: s,
            actionIndex: S,
            onChange: T,
            onDelete: y,
            onDragStart: R,
            onDragComplete: L,
            onDragReset: D,
        } = e,
        O = (0, a.bG)([j.A], () => j.A.getChannel(s.channelId)),
        G = (0, a.bG)([N.A], () => N.A.getGuild(t)),
        M = (0, a.bG)([C.A], () => C.A.getPendingData()[s.channelId]),
        k = (0, x.Ay)(O),
        { customEmoji: U, unicodeEmoji: w } = (0, A.A)(s.emoji?.id, s.emoji?.name),
        P = null == s.emoji || null != U || null != w,
        B = I.Ay.getNewMemberActionIconURL({ channelId: s.channelId, icon: s.icon }),
        F = null != M ? M.iconData : B,
        H = null;
    null != O && (0, E.Rc)(O) ? P || (H = b.intl.string(b.t.wAkIZW)) : (H = b.intl.string(b.t.CbTEKP));
    let {
            drag: V,
            dragSourcePosition: z,
            drop: W,
            setIsDraggable: Y,
        } = (0, p.A)({
            type: "NEW_MEMBER_ACTION",
            index: S,
            optionId: s.channelId,
            onDragStart: R,
            onDragComplete: L,
            onDragReset: D,
        }),
        K = l.useCallback(() => {
            if (null != t)
                return (0, d.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("54569"), n.e("58203")]).then(n.bind(n, 251632));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guildId: t,
                            action: s,
                            onSave: (e, t, n) => T(S, e, t, n),
                            onDelete: () => y(S),
                        });
                });
        }, [t, s, S, T, y]);
    if (null == O || null == G) return null;
    let X = (0, _.gU)(O) ?? c.N;
    return (0, i.jsxs)("div", {
        className: v.L8,
        children: [
            (0, i.jsxs)("div", {
                className: r()(v.kv, { [v.A]: null != z && S < z, [v.Ze]: null != z && S > z, [v.e5]: null != H }),
                ref: (e) => {
                    V(W(e));
                },
                children: [
                    (0, i.jsx)("div", {
                        className: v.cK,
                        onMouseEnter: () => Y(!0),
                        onMouseLeave: () => Y(!1),
                        children: (0, i.jsx)(u.W, { size: "xs", color: "currentColor", className: v.co }),
                    }),
                    null != F
                        ? (0, i.jsx)("div", {
                              className: v.P0,
                              children: (0, i.jsx)("img", {
                                  src: F,
                                  className: v.Kk,
                                  width: 48,
                                  height: 48,
                                  alt: "",
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, i.jsx)("div", {
                              className: v.zV,
                              children: (0, i.jsx)(f.A, {
                                  emojiId: s.emoji?.id,
                                  emojiName: s.emoji?.name,
                                  size: f.g.MEDIUM,
                                  defaultComponent: (0, i.jsx)(X, {}),
                              }),
                          }),
                    (0, i.jsxs)("div", {
                        className: v.tV,
                        children: [
                            (0, i.jsx)(m.E, { variant: "text-md/semibold", color: "text-strong", children: s.title }),
                            (0, i.jsx)(m.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: b.intl.format(b.t.Ngk8Nr, { channelName: k }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(o.m, {
                        text: b.intl.string(b.t.bt75uw),
                        children: (0, i.jsx)(g.K, {
                            icon: h.R,
                            size: "sm",
                            variant: "primary",
                            onClick: K,
                            "aria-label": b.intl.string(b.t.bt75uw),
                        }),
                    }),
                ],
            }),
            null != H && (0, i.jsx)(m.E, { variant: "text-xs/medium", color: "text-feedback-critical", children: H }),
        ],
    });
};
