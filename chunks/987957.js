"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(417597),
    o = n(990078),
    d = n(397927),
    c = n(713654),
    u = n(599119),
    m = n(202027),
    g = n(374084),
    x = n(111487),
    h = n(734057),
    _ = n(71393),
    p = n(486020),
    A = n(132514),
    f = n(985018),
    j = n(659233);
let N = function (e) {
    let {
            guildId: t,
            action: l,
            actionIndex: N,
            onChange: E,
            onDelete: b,
            onDragStart: T,
            onDragComplete: C,
            onDragReset: I,
        } = e,
        v = (0, a.bG)([h.A], () => h.A.getChannel(l.channelId)),
        S = (0, a.bG)([_.A], () => _.A.getGuild(t)),
        y = (0, a.bG)([A.A], () => A.A.getPendingData()[l.channelId]),
        { customEmoji: R, unicodeEmoji: O } = (0, m.A)(l.emoji?.id, l.emoji?.name),
        G = null == l.emoji || null != R || null != O,
        L = p.Ay.getNewMemberActionIconURL({ channelId: l.channelId, icon: l.icon }),
        D = null != y ? y.iconData : L,
        M = null;
    null != v && (0, g.Rc)(v) ? G || (M = f.intl.string(f.t.wAkIZW)) : (M = f.intl.string(f.t.CbTEKP));
    let {
            drag: k,
            dragSourcePosition: U,
            drop: P,
            setIsDraggable: w,
        } = (0, u.A)({
            type: "NEW_MEMBER_ACTION",
            index: N,
            optionId: l.channelId,
            onDragStart: T,
            onDragComplete: C,
            onDragReset: I,
        }),
        B = s.useCallback(() => {
            if (null != t)
                return (0, d.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("54569"), n.e("76945")]).then(n.bind(n, 251632));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guildId: t,
                            action: l,
                            onSave: (e, t, n) => E(N, e, t, n),
                            onDelete: () => b(N),
                        });
                });
        }, [t, l, N, E, b]);
    if (null == v || null == S) return null;
    let F = (0, c.gU)(v) ?? d.N$i;
    return (0, i.jsxs)("div", {
        className: j.L8,
        children: [
            (0, i.jsxs)("div", {
                className: r()(j.kv, { [j.A]: null != U && N < U, [j.Ze]: null != U && N > U, [j.e5]: null != M }),
                ref: (e) => {
                    k(P(e));
                },
                children: [
                    (0, i.jsx)("div", {
                        className: j.cK,
                        onMouseEnter: () => w(!0),
                        onMouseLeave: () => w(!1),
                        children: (0, i.jsx)(d.WP0, { size: "xs", color: "currentColor", className: j.co }),
                    }),
                    null != D
                        ? (0, i.jsx)("div", {
                              className: j.P0,
                              children: (0, i.jsx)("img", {
                                  src: D,
                                  className: j.Kk,
                                  width: 48,
                                  height: 48,
                                  alt: "",
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, i.jsx)("div", {
                              className: j.zV,
                              children: (0, i.jsx)(x.A, {
                                  emojiId: l.emoji?.id,
                                  emojiName: l.emoji?.name,
                                  size: x.g.MEDIUM,
                                  defaultComponent: (0, i.jsx)(F, {}),
                              }),
                          }),
                    (0, i.jsxs)("div", {
                        className: j.tV,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: l.title,
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: f.intl.format(f.t.Ngk8Nr, { channelName: v.name }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(o.m, {
                        text: f.intl.string(f.t.bt75uw),
                        children: (0, i.jsx)(d.K0, {
                            icon: d.R2l,
                            size: "sm",
                            variant: "primary",
                            onClick: B,
                            "aria-label": f.intl.string(f.t.bt75uw),
                        }),
                    }),
                ],
            }),
            null != M &&
                (0, i.jsx)(d.Text, { variant: "text-xs/medium", color: "text-feedback-critical", children: M }),
        ],
    });
};
