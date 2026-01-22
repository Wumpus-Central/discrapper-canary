n.d(t, { A: () => B }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(506774),
    c = n(990078),
    u = n(397927),
    d = n(843472),
    f = n(56562),
    p = n(765671),
    h = n(304072),
    b = n(390395),
    g = n(659195),
    m = n(505527),
    A = n(467073),
    y = n(960538),
    O = n(898280),
    j = n(573163),
    v = n(260821),
    x = n(226698),
    E = n(376708),
    _ = n(715757),
    C = n(390897),
    S = n(704860),
    I = n(152007),
    N = n(867455),
    T = n(734057),
    P = n(147036),
    w = n(957565),
    R = n(435470),
    D = n(473503),
    M = n(853742),
    L = n(652215),
    G = n(985018),
    k = n(641131),
    U = n(256366),
    V = n(233080),
    F = n(165180);
function H(e) {
    let { channel: t } = e,
        i = t.isArchivedThread(),
        a = (0, E.uW)(t),
        [s, c] = l.useState(!1),
        d = () => {
            c(!0),
                x.A.resolveFlag(t.id).then(() => {
                    c(!1);
                });
        };
    return a
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
              loading: s,
              icon: u.A9s,
              disabled: i,
          })
        : null;
}
function B(e) {
    let { postId: t, isFirstMessage: n, isLastItem: i = !1, parentChannelId: o } = e,
        { ref: x, width: E } = (0, p.Ay)(),
        [C, k] = l.useState(3),
        [B, K] = l.useState(!n),
        [W, z] = (0, h.A)(!1, 2000),
        Y = (0, s.bG)([T.A], () => T.A.getChannel(t), [t]),
        { firstMessage: q } = (0, D.OA)(Y),
        X = (0, s.bG)([I.A], () => I.A.hasJoined(t)),
        {
            disableReactionUpdates: J,
            disableReactionCreates: Q,
            isLurking: Z,
            isGuest: $,
            isPendingMember: ee,
        } = (0, A.A)(Y),
        et = (0, _.W1)(Y),
        en = (0, s.bG)([T.A], () => T.A.getChannel(o)),
        er = (0, R.Ck)(en),
        el = (0, s.bG)([b.A], () => b.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        ei = l.useCallback(
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
        let t = new IntersectionObserver(ei, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [ea, es] = l.useState(!0);
    if (
        (l.useEffect(() => {
            null == E || (k(Math.floor((E - 280) / 58)), es(!1));
        }, [E]),
        null == Y || null == q)
    )
        return null;
    let eo = q.reactions.length > 0,
        ec = () => {
            (0, M.jC)({
                postId: Y.id,
                location: { section: L.JJy.CHANNEL_HEADER },
            }),
                (0, w.C)((0, P.af)(Y, en), () => z(!0));
        },
        eu = X ? u.A9s : u.XFE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(U.kL, { [U.wx]: B }),
                ref: x,
                children: [
                    et
                        ? (0, r.jsx)("div", {
                              className: U.kX,
                              children: (0, r.jsx)(S.A, {
                                  message: q,
                                  channel: Y,
                              }),
                          })
                        : (0, r.jsxs)("div", {
                              className: a()(U.hY, { [U.Lq]: ea }),
                              children: [
                                  !eo &&
                                      !Q &&
                                      null != er &&
                                      (0, r.jsx)("div", {
                                          className: V.reactions,
                                          children: (0, r.jsx)(v.qT, {
                                              message: q,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: Z,
                                              isGuest: $,
                                              isPendingMember: ee,
                                              emoji: er,
                                              type: m.v.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: "reaction",
                                          }),
                                      }),
                                  (0, r.jsx)(j.A, {
                                      message: q,
                                      channel: Y,
                                      disableReactionCreates: !0,
                                      disableReactionUpdates: J,
                                      isLurking: Z,
                                      isGuest: $,
                                      isPendingMember: ee,
                                      maxReactions: C,
                                      className: U.Br,
                                      useChatFontScaling: !1,
                                      isForumToolbar: !0,
                                      forceHideReactionCreates: !0,
                                  }),
                                  !Q &&
                                      (0, r.jsx)(y.t, {
                                          message: q,
                                          channel: Y,
                                          useChatFontScaling: !1,
                                          className: a()(F.secondary, U.vU, { [U.w$]: !eo }),
                                          isForumToolbar: !0,
                                          children: !eo && G.intl.string(G.t.xpOyTO),
                                      }),
                              ],
                          }),
                    (0, r.jsxs)("div", {
                        className: U.Uo,
                        children: [
                            et
                                ? (0, r.jsx)(H, { channel: Y })
                                : !Z &&
                                  (0, r.jsx)(c.m, {
                                      text: G.intl.string(G.t.F7oeDv),
                                      children: (0, r.jsx)(u.Button, {
                                          icon: eu,
                                          size: "sm",
                                          variant: "secondary",
                                          text: X ? G.intl.string(G.t["7OkUzs"]) : G.intl.string(G.t["3aOv+h"]),
                                          onClick: () => {
                                              X
                                                  ? N.A.leaveThread(Y, "Forum Toolbar")
                                                  : N.A.joinThread(Y, "Forum Toolbar");
                                          },
                                      }),
                                  }),
                            (0, r.jsx)(c.m, {
                                text: G.intl.string(G.t.WqhZss),
                                children: W
                                    ? (0, r.jsx)(u.Button, {
                                          icon: u.A9s,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: ec,
                                          text: G.intl.string(G.t.t5VZ88),
                                      })
                                    : (0, r.jsx)(u.K0, {
                                          icon: u.qYV,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: ec,
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
                                                channelId: Y.id,
                                                messageId: Y.id,
                                                flash: !0,
                                                jumpType: f.US.INSTANT,
                                            });
                                        },
                                        "aria-label": G.intl.string(G.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            el && (0, r.jsx)(g.A, { threadId: t }),
            (0, r.jsx)(O.A, {
                channel: Y,
                isLastItem: i,
            }),
        ],
    });
}
