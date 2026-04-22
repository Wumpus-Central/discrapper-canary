n.d(t, { A: () => q });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(506774),
    c = n(990078),
    d = n(192308),
    u = n(821609),
    h = n(933832),
    m = n(782603),
    A = n(408278),
    g = n(173936),
    p = n(763175),
    _ = n(843472),
    f = n(56562),
    E = n(765671),
    C = n(304072),
    x = n(390395),
    S = n(659195),
    I = n(505527),
    N = n(467073),
    v = n(960538),
    T = n(898280),
    y = n(573163),
    b = n(260821),
    j = n(226698),
    R = n(376708),
    M = n(715757),
    L = n(390897),
    D = n(704860),
    P = n(152007),
    O = n(867455),
    w = n(734057),
    U = n(147036),
    k = n(957565),
    G = n(435470),
    F = n(473503),
    H = n(853742),
    B = n(652215),
    V = n(985018),
    z = n(297897),
    K = n(486995),
    W = n(10585),
    Y = n(813013);
function J(e) {
    let { channel: t } = e,
        a = t.isArchivedThread(),
        s = (0, R.uW)(t),
        [r, c] = l.useState(!1),
        m = () => {
            c(!0),
                j.A.resolveFlag(t.id).then(() => {
                    c(!1);
                });
        };
    return s
        ? (0, i.jsx)(u.$, {
              size: "sm",
              variant: "secondary",
              text: a ? V.intl.string(z.default["2Y4vkk"]) : V.intl.string(z.default.YIbR4r),
              onClick: () => {
                  !0 === o.w.get(L.f)
                      ? m()
                      : (0, d.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, i.jsx)(e, { transitionState: n, onClose: l, handleResolveFlag: m });
                            };
                        });
              },
              loading: r,
              icon: h.A,
              disabled: a,
          })
        : null;
}
function q(e) {
    let { postId: t, isFirstMessage: n, isLastItem: a = !1, parentChannelId: o } = e,
        { ref: d, width: j } = (0, E.Ay)(),
        [R, L] = l.useState(3),
        [z, q] = l.useState(!n),
        [$, Z] = (0, C.A)(!1, 2e3),
        X = (0, r.bG)([w.A], () => w.A.getChannel(t), [t]),
        { firstMessage: Q } = (0, F.OA)(X),
        ee = (0, r.bG)([P.A], () => P.A.hasJoined(t)),
        { disableReactionUpdates: et, disableReactionCreates: en, isLurking: ei, isPendingMember: el } = (0, N.A)(X),
        ea = (0, M.W1)(X),
        es = (0, r.bG)([w.A], () => w.A.getChannel(o)),
        er = (0, G.Ck)(es),
        eo = (0, r.bG)([x.A], () => x.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        ec = l.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    q((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n],
        );
    l.useLayoutEffect(() => {
        let e = d.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(ec, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [ed, eu] = l.useState(!0);
    if (
        (l.useEffect(() => {
            null == j || (L(Math.floor((j - 280) / 58)), eu(!1));
        }, [j]),
        null == X || null == Q)
    )
        return null;
    let eh = Q.reactions.length > 0,
        em = () => {
            (0, H.jC)({ postId: X.id, location: { section: B.JJy.CHANNEL_HEADER } }),
                (0, k.C)((0, U.af)(X, es), () => Z(!0));
        },
        eA = ee ? h.A : m.X;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: s()(K.kL, { [K.wx]: z }),
                ref: d,
                children: [
                    ea
                        ? (0, i.jsx)("div", { className: K.kX, children: (0, i.jsx)(D.A, { message: Q, channel: X }) })
                        : (0, i.jsxs)("div", {
                              className: s()(K.hY, { [K.Lq]: ed }),
                              children: [
                                  !eh &&
                                      !en &&
                                      null != er &&
                                      (0, i.jsx)("div", {
                                          className: W.reactions,
                                          children: (0, i.jsx)(b.qT, {
                                              message: Q,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: ei,
                                              isPendingMember: el,
                                              emoji: er,
                                              type: I.v.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: "reaction",
                                          }),
                                      }),
                                  (0, i.jsx)(y.A, {
                                      message: Q,
                                      channel: X,
                                      disableReactionCreates: !0,
                                      disableReactionUpdates: et,
                                      isLurking: ei,
                                      isPendingMember: el,
                                      maxReactions: R,
                                      className: K.Br,
                                      useChatFontScaling: !1,
                                      isForumToolbar: !0,
                                      forceHideReactionCreates: !0,
                                  }),
                                  !en &&
                                      (0, i.jsx)(v.t, {
                                          message: Q,
                                          channel: X,
                                          useChatFontScaling: !1,
                                          className: s()(Y.secondary, K.vU, { [K.w$]: !eh }),
                                          isForumToolbar: !0,
                                          children: !eh && V.intl.string(V.t.xpOyTO),
                                      }),
                              ],
                          }),
                    (0, i.jsxs)("div", {
                        className: K.Uo,
                        children: [
                            ea
                                ? (0, i.jsx)(J, { channel: X })
                                : !ei &&
                                  (0, i.jsx)(c.m, {
                                      text: V.intl.string(V.t.F7oeDv),
                                      children: (0, i.jsx)(u.$, {
                                          icon: eA,
                                          size: "sm",
                                          variant: "secondary",
                                          text: ee ? V.intl.string(V.t["7OkUzs"]) : V.intl.string(V.t["3aOv+h"]),
                                          onClick: () => {
                                              ee
                                                  ? O.A.leaveThread(X, "Forum Toolbar")
                                                  : O.A.joinThread(X, "Forum Toolbar");
                                          },
                                      }),
                                  }),
                            (0, i.jsx)(c.m, {
                                text: V.intl.string(V.t.WqhZss),
                                children: $
                                    ? (0, i.jsx)(u.$, {
                                          icon: h.A,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: em,
                                          text: V.intl.string(V.t.t5VZ88),
                                      })
                                    : (0, i.jsx)(A.K, {
                                          icon: g.q,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: em,
                                          "aria-label": V.intl.string(V.t.WqhZss),
                                      }),
                            }),
                            !n &&
                                (0, i.jsx)(c.m, {
                                    text: V.intl.string(V.t.nFP4oa),
                                    children: (0, i.jsx)(A.K, {
                                        icon: p.D,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => {
                                            _.A.jumpToMessage({
                                                channelId: X.id,
                                                messageId: X.id,
                                                flash: !0,
                                                jumpType: f.US.INSTANT,
                                            });
                                        },
                                        "aria-label": V.intl.string(V.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            eo && (0, i.jsx)(S.A, { threadId: t }),
            (0, i.jsx)(T.A, { channel: X, isLastItem: a }),
        ],
    });
}
