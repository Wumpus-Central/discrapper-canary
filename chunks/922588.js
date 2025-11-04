n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(120356),
    l = n.n(i),
    o = n(392711),
    c = n(442837),
    u = n(481060),
    s = n(607070),
    d = n(930826),
    _ = n(547245),
    m = n(308982),
    f = n(69376),
    h = n(670079),
    g = n(281200),
    v = n(260777),
    b = n(816906),
    I = n(91459);
let p = m.kg.getState();
function C(e) {
    let { channelId: t, guildId: n } = e,
        i = a.useRef(null),
        C = (0, c.e7)([s.Z], () => s.Z.useReducedMotion),
        [x, S] = a.useState(!1),
        [y, w] = a.useState(!0),
        [N, k] = a.useState(!1),
        { pickedMemberIds: Z, currentMemberId: P, shuffledOrder: T } = (0, m.E1)(t),
        E = (0, b.Z)(t),
        A = null == T,
        B = E.every((e) => Z.includes(e)),
        { animateToMember: M } = (0, v.Z)({
            containerRef: i,
            channelId: t,
            memberIds: E,
        }),
        O = a.useCallback(() => {
            var e;
            if (null == T) return;
            let n = null != (e = T.find((e) => !Z.includes(e))) ? e : null;
            null != n && p.pickName(t, n);
        }, [t, T, Z]),
        j = a.useCallback(() => {
            if (0 === E.length) return;
            let e = (0, o.shuffle)(E),
                n = e[0];
            C
                ? (p.setShuffledOrder(t, e), p.pickName(t, n))
                : (w(!1),
                  setTimeout(() => {
                      k(!0),
                          S(!0),
                          M(n, () => {
                              p.setShuffledOrder(t, e),
                                  p.pickName(t, n),
                                  S(!1),
                                  setTimeout(() => {
                                      k(!1), setTimeout(() => w(!0), 150);
                                  }, 300);
                          });
                  }, 150));
        }, [E, t, M, C]),
        L = a.useCallback(() => {
            p.reset(t), S(!1), k(!1), w(!0);
        }, [t]);
    return (0, r.jsx)("div", {
        className: I.container,
        ref: i,
        children: (0, r.jsxs)("div", {
            className: I.contentArea,
            children: [
                (0, r.jsxs)("div", {
                    className: I.leftPanel,
                    children: [
                        (0, r.jsx)("div", {
                            className: I.screenShareButtonContainer,
                            children: (0, r.jsx)(h.Z, {
                                channelId: t,
                                guildId: n,
                            }),
                        }),
                        (0, r.jsx)(_.Z, { channelId: t }),
                        (0, r.jsx)(
                            g.Z,
                            {
                                channelId: t,
                                showCountdown: Z.length >= 1 || x,
                                shuffling: x,
                            },
                            null != P ? P : "no-member",
                        ),
                        (0, r.jsxs)("div", {
                            className: I.buttonContainer,
                            children: [
                                (0, r.jsx)(u.Button, {
                                    icon: A ? u.DuK : void 0,
                                    text: A ? "Shuffle" : "Next",
                                    onClick: A ? j : O,
                                    disabled: E.length <= 1 || B || x,
                                    variant: "primary",
                                }),
                                (0, r.jsx)(u.Button, {
                                    text: "Reset",
                                    onClick: L,
                                    disabled: 0 === Z.length || x,
                                    variant: "secondary",
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: I.rightPanel,
                    children: [
                        (0, r.jsx)("div", {
                            className: l()(I.rouletteContainer, { [I.hidden]: !N }),
                            children: (0, r.jsx)(f.Z, {
                                channelId: t,
                                memberIds: E,
                                guildId: n,
                                currentMemberId: P,
                                shuffling: x,
                            }),
                        }),
                        (0, r.jsx)(u.zJl, {
                            className: l()(I.listScroller, { [I.hidden]: !y }),
                            children: (0, r.jsx)(d.Z, {
                                memberIds: null != T ? T : E,
                                guildId: n,
                                pickedMemberIds: Z,
                                currentMemberId: P,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
