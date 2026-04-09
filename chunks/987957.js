"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(417597),
    o = n(990078),
    d = n(397927),
    c = n(47167),
    u = n(713654),
    m = n(599119),
    g = n(202027),
    x = n(374084),
    h = n(111487),
    _ = n(734057),
    A = n(71393),
    p = n(486020),
    f = n(132514),
    j = n(985018),
    N = n(574283);
let E = function (e) {
    let {
            guildId: t,
            action: l,
            actionIndex: E,
            onChange: C,
            onDelete: T,
            onDragStart: I,
            onDragComplete: b,
            onDragReset: v,
        } = e,
        S = (0, a.bG)([_.A], () => _.A.getChannel(l.channelId)),
        y = (0, a.bG)([A.A], () => A.A.getGuild(t)),
        R = (0, a.bG)([f.A], () => f.A.getPendingData()[l.channelId]),
        O = (0, c.Ay)(S),
        { customEmoji: G, unicodeEmoji: L } = (0, g.A)(l.emoji?.id, l.emoji?.name),
        D = null == l.emoji || null != G || null != L,
        M = p.Ay.getNewMemberActionIconURL({ channelId: l.channelId, icon: l.icon }),
        k = null != R ? R.iconData : M,
        U = null;
    null != S && (0, x.Rc)(S) ? D || (U = j.intl.string(j.t.wAkIZW)) : (U = j.intl.string(j.t.CbTEKP));
    let {
            drag: P,
            dragSourcePosition: w,
            drop: B,
            setIsDraggable: F,
        } = (0, m.A)({
            type: "NEW_MEMBER_ACTION",
            index: E,
            optionId: l.channelId,
            onDragStart: I,
            onDragComplete: b,
            onDragReset: v,
        }),
        H = s.useCallback(() => {
            if (null != t)
                return (0, d.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("54569"), n.e("39665")]).then(n.bind(n, 251632));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guildId: t,
                            action: l,
                            onSave: (e, t, n) => C(E, e, t, n),
                            onDelete: () => T(E),
                        });
                });
        }, [t, l, E, C, T]);
    if (null == S || null == y) return null;
    let V = (0, u.gU)(S) ?? d.N$i;
    return (0, i.jsxs)("div", {
        className: N.L8,
        children: [
            (0, i.jsxs)("div", {
                className: r()(N.kv, { [N.A]: null != w && E < w, [N.Ze]: null != w && E > w, [N.e5]: null != U }),
                ref: (e) => {
                    P(B(e));
                },
                children: [
                    (0, i.jsx)("div", {
                        className: N.cK,
                        onMouseEnter: () => F(!0),
                        onMouseLeave: () => F(!1),
                        children: (0, i.jsx)(d.WP0, { size: "xs", color: "currentColor", className: N.co }),
                    }),
                    null != k
                        ? (0, i.jsx)("div", {
                              className: N.P0,
                              children: (0, i.jsx)("img", {
                                  src: k,
                                  className: N.Kk,
                                  width: 48,
                                  height: 48,
                                  alt: "",
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, i.jsx)("div", {
                              className: N.zV,
                              children: (0, i.jsx)(h.A, {
                                  emojiId: l.emoji?.id,
                                  emojiName: l.emoji?.name,
                                  size: h.g.MEDIUM,
                                  defaultComponent: (0, i.jsx)(V, {}),
                              }),
                          }),
                    (0, i.jsxs)("div", {
                        className: N.tV,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: l.title,
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: j.intl.format(j.t.Ngk8Nr, { channelName: O }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(o.m, {
                        text: j.intl.string(j.t.bt75uw),
                        children: (0, i.jsx)(d.K0, {
                            icon: d.R2l,
                            size: "sm",
                            variant: "primary",
                            onClick: H,
                            "aria-label": j.intl.string(j.t.bt75uw),
                        }),
                    }),
                ],
            }),
            null != U &&
                (0, i.jsx)(d.Text, { variant: "text-xs/medium", color: "text-feedback-critical", children: U }),
        ],
    });
};
