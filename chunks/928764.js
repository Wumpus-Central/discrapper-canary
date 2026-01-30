n.d(t, {
    A: () => F,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(506774),
    c = n(990078),
    u = n(397927),
    d = n(843472),
    h = n(56562),
    p = n(765671),
    g = n(304072),
    f = n(390395),
    m = n(659195),
    b = n(505527),
    A = n(467073),
    y = n(960538),
    O = n(898280),
    _ = n(573163),
    j = n(260821),
    x = n(226698),
    v = n(376708),
    E = n(715757),
    C = n(390897),
    S = n(704860),
    I = n(152007),
    N = n(867455),
    T = n(734057),
    P = n(147036),
    w = n(957565),
    R = n(435470),
    D = n(473503),
    L = n(853742),
    M = n(652215),
    G = n(985018),
    k = n(641131),
    U = n(256366),
    V = n(233080),
    B = n(165180);

function H(e) {
    let { channel: t } = e,
        i = t.isArchivedThread(),
        s = (0, v.uW)(t),
        [a, c] = l.useState(!1),
        d = () => {
            c(!0),
                x.A.resolveFlag(t.id).then(() => {
                    c(!1);
                });
        };
    return s
        ? (0, r.jsx)(u.Button, {
              size: "sm",
              variant: "secondary",
              text: i ? G.intl.string(k.default["2Y4vkk"]) : G.intl.string(k.default.YIbR4r),
              onClick: () => {
                  !0 === o.w.get(C.f)
                      ? d()
                      : (0, u.mMO)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, r.jsx)(e, {
                                    transitionState: n,
                                    onClose: l,
                                    handleResolveFlag: d,
                                });
                            };
                        });
              },
              loading: a,
              icon: u.A9s,
              disabled: i,
          })
        : null;
}

function F(e) {
    let { postId: t, isFirstMessage: n, isLastItem: i = !1, parentChannelId: o } = e,
        { ref: x, width: v } = (0, p.Ay)(),
        [C, k] = l.useState(3),
        [F, K] = l.useState(!n),
        [Y, W] = (0, g.A)(!1, 2e3),
        z = (0, a.bG)([T.A], () => T.A.getChannel(t), [t]),
        { firstMessage: q } = (0, D.OA)(z),
        X = (0, a.bG)([I.A], () => I.A.hasJoined(t)),
        { disableReactionUpdates: J, disableReactionCreates: Q, isLurking: Z, isPendingMember: $ } = (0, A.A)(z),
        ee = (0, E.W1)(z),
        et = (0, a.bG)([T.A], () => T.A.getChannel(o)),
        en = (0, R.Ck)(et),
        er = (0, a.bG)([f.A], () => f.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        el = l.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    K((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    l.useLayoutEffect(() => {
        let e = x.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(el, {
            threshold: 1,
        });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [ei, es] = l.useState(!0);
    if (
        (l.useEffect(() => {
            null == v || (k(Math.floor((v - 280) / 58)), es(!1));
        }, [v]),
        null == z || null == q)
    )
        return null;
    let ea = q.reactions.length > 0,
        eo = () => {
            (0, L.jC)({
                postId: z.id,
                location: {
                    section: M.JJy.CHANNEL_HEADER,
                },
            }),
                (0, w.C)((0, P.af)(z, et), () => W(!0));
        },
        ec = X ? u.A9s : u.XFE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: s()(U.kL, {
                    [U.wx]: F,
                }),
                ref: x,
                children: [
                    ee
                        ? (0, r.jsx)("div", {
                              className: U.kX,
                              children: (0, r.jsx)(S.A, {
                                  message: q,
                                  channel: z,
                              }),
                          })
                        : (0, r.jsxs)("div", {
                              className: s()(U.hY, {
                                  [U.Lq]: ei,
                              }),
                              children: [
                                  !ea &&
                                      !Q &&
                                      null != en &&
                                      (0, r.jsx)("div", {
                                          className: V.reactions,
                                          children: (0, r.jsx)(j.qT, {
                                              message: q,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: Z,
                                              isPendingMember: $,
                                              emoji: en,
                                              type: b.v.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: "reaction",
                                          }),
                                      }),
                                  (0, r.jsx)(_.A, {
                                      message: q,
                                      channel: z,
                                      disableReactionCreates: !0,
                                      disableReactionUpdates: J,
                                      isLurking: Z,
                                      isPendingMember: $,
                                      maxReactions: C,
                                      className: U.Br,
                                      useChatFontScaling: !1,
                                      isForumToolbar: !0,
                                      forceHideReactionCreates: !0,
                                  }),
                                  !Q &&
                                      (0, r.jsx)(y.t, {
                                          message: q,
                                          channel: z,
                                          useChatFontScaling: !1,
                                          className: s()(B.secondary, U.vU, {
                                              [U.w$]: !ea,
                                          }),
                                          isForumToolbar: !0,
                                          children: !ea && G.intl.string(G.t.xpOyTO),
                                      }),
                              ],
                          }),
                    (0, r.jsxs)("div", {
                        className: U.Uo,
                        children: [
                            ee
                                ? (0, r.jsx)(H, {
                                      channel: z,
                                  })
                                : !Z &&
                                  (0, r.jsx)(c.m, {
                                      text: G.intl.string(G.t.F7oeDv),
                                      children: (0, r.jsx)(u.Button, {
                                          icon: ec,
                                          size: "sm",
                                          variant: "secondary",
                                          text: X ? G.intl.string(G.t["7OkUzs"]) : G.intl.string(G.t["3aOv+h"]),
                                          onClick: () => {
                                              X
                                                  ? N.A.leaveThread(z, "Forum Toolbar")
                                                  : N.A.joinThread(z, "Forum Toolbar");
                                          },
                                      }),
                                  }),
                            (0, r.jsx)(c.m, {
                                text: G.intl.string(G.t.WqhZss),
                                children: Y
                                    ? (0, r.jsx)(u.Button, {
                                          icon: u.A9s,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: eo,
                                          text: G.intl.string(G.t.t5VZ88),
                                      })
                                    : (0, r.jsx)(u.K0, {
                                          icon: u.qYV,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: eo,
                                          "aria-label": G.intl.string(G.t.WqhZss),
                                      }),
                            }),
                            !n &&
                                (0, r.jsx)(c.m, {
                                    text: G.intl.string(G.t.nFP4oa),
                                    children: (0, r.jsx)(u.K0, {
                                        icon: u.Dl6,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => {
                                            d.A.jumpToMessage({
                                                channelId: z.id,
                                                messageId: z.id,
                                                flash: !0,
                                                jumpType: h.US.INSTANT,
                                            });
                                        },
                                        "aria-label": G.intl.string(G.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            er &&
                (0, r.jsx)(m.A, {
                    threadId: t,
                }),
            (0, r.jsx)(O.A, {
                channel: z,
                isLastItem: i,
            }),
        ],
    });
}
