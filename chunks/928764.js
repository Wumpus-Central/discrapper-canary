n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(506774),
    c = n(990078),
    d = n(397927),
    u = n(843472),
    h = n(56562),
    m = n(765671),
    A = n(304072),
    p = n(390395),
    g = n(659195),
    f = n(505527),
    _ = n(467073),
    E = n(960538),
    x = n(898280),
    C = n(573163),
    S = n(260821),
    I = n(226698),
    T = n(376708),
    v = n(715757),
    N = n(390897),
    y = n(704860),
    b = n(152007),
    j = n(867455),
    R = n(734057),
    M = n(147036),
    D = n(957565),
    O = n(435470),
    L = n(473503),
    P = n(853742),
    w = n(652215),
    k = n(985018),
    U = n(733045),
    G = n(537790),
    F = n(767474),
    H = n(276170);
function B(e) {
    let { channel: t } = e,
        s = t.isArchivedThread(),
        a = (0, T.uW)(t),
        [r, c] = l.useState(!1),
        u = () => {
            c(!0),
                I.A.resolveFlag(t.id).then(() => {
                    c(!1);
                });
        };
    return a
        ? (0, i.jsx)(d.Button, {
              size: "sm",
              variant: "secondary",
              text: s ? k.intl.string(U.default["2Y4vkk"]) : k.intl.string(U.default.YIbR4r),
              onClick: () => {
                  !0 === o.w.get(N.f)
                      ? u()
                      : (0, d.mMO)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
                            return (t) => {
                                let { transitionState: n, onClose: l } = t;
                                return (0, i.jsx)(e, { transitionState: n, onClose: l, handleResolveFlag: u });
                            };
                        });
              },
              loading: r,
              icon: d.A9s,
              disabled: s,
          })
        : null;
}
function V(e) {
    let { postId: t, isFirstMessage: n, isLastItem: s = !1, parentChannelId: o } = e,
        { ref: I, width: T } = (0, m.Ay)(),
        [N, U] = l.useState(3),
        [V, K] = l.useState(!n),
        [W, z] = (0, A.A)(!1, 2e3),
        Y = (0, r.bG)([R.A], () => R.A.getChannel(t), [t]),
        { firstMessage: q } = (0, L.OA)(Y),
        J = (0, r.bG)([b.A], () => b.A.hasJoined(t)),
        { disableReactionUpdates: $, disableReactionCreates: Z, isLurking: X, isPendingMember: Q } = (0, _.A)(Y),
        ee = (0, v.W1)(Y),
        et = (0, r.bG)([R.A], () => R.A.getChannel(o)),
        en = (0, O.Ck)(et),
        ei = (0, r.bG)([p.A], () => p.A.shouldDisplayPrompt(t) && !0 === n, [t, n]),
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
        let e = I.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(el, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [es, ea] = l.useState(!0);
    if (
        (l.useEffect(() => {
            null == T || (U(Math.floor((T - 280) / 58)), ea(!1));
        }, [T]),
        null == Y || null == q)
    )
        return null;
    let er = q.reactions.length > 0,
        eo = () => {
            (0, P.jC)({ postId: Y.id, location: { section: w.JJy.CHANNEL_HEADER } }),
                (0, D.C)((0, M.af)(Y, et), () => z(!0));
        },
        ec = J ? d.A9s : d.XFE;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(G.kL, { [G.wx]: V }),
                ref: I,
                children: [
                    ee
                        ? (0, i.jsx)("div", { className: G.kX, children: (0, i.jsx)(y.A, { message: q, channel: Y }) })
                        : (0, i.jsxs)("div", {
                              className: a()(G.hY, { [G.Lq]: es }),
                              children: [
                                  !er &&
                                      !Z &&
                                      null != en &&
                                      (0, i.jsx)("div", {
                                          className: F.reactions,
                                          children: (0, i.jsx)(S.qT, {
                                              message: q,
                                              readOnly: !1,
                                              useChatFontScaling: !1,
                                              isLurking: X,
                                              isPendingMember: Q,
                                              emoji: en,
                                              type: f.v.NORMAL,
                                              hideCount: !0,
                                              count: 0,
                                              me: !1,
                                              burst_count: 0,
                                              me_burst: !1,
                                              emojiSize: "reaction",
                                          }),
                                      }),
                                  (0, i.jsx)(C.A, {
                                      message: q,
                                      channel: Y,
                                      disableReactionCreates: !0,
                                      disableReactionUpdates: $,
                                      isLurking: X,
                                      isPendingMember: Q,
                                      maxReactions: N,
                                      className: G.Br,
                                      useChatFontScaling: !1,
                                      isForumToolbar: !0,
                                      forceHideReactionCreates: !0,
                                  }),
                                  !Z &&
                                      (0, i.jsx)(E.t, {
                                          message: q,
                                          channel: Y,
                                          useChatFontScaling: !1,
                                          className: a()(H.secondary, G.vU, { [G.w$]: !er }),
                                          isForumToolbar: !0,
                                          children: !er && k.intl.string(k.t.xpOyTO),
                                      }),
                              ],
                          }),
                    (0, i.jsxs)("div", {
                        className: G.Uo,
                        children: [
                            ee
                                ? (0, i.jsx)(B, { channel: Y })
                                : !X &&
                                  (0, i.jsx)(c.m, {
                                      text: k.intl.string(k.t.F7oeDv),
                                      children: (0, i.jsx)(d.Button, {
                                          icon: ec,
                                          size: "sm",
                                          variant: "secondary",
                                          text: J ? k.intl.string(k.t["7OkUzs"]) : k.intl.string(k.t["3aOv+h"]),
                                          onClick: () => {
                                              J
                                                  ? j.A.leaveThread(Y, "Forum Toolbar")
                                                  : j.A.joinThread(Y, "Forum Toolbar");
                                          },
                                      }),
                                  }),
                            (0, i.jsx)(c.m, {
                                text: k.intl.string(k.t.WqhZss),
                                children: W
                                    ? (0, i.jsx)(d.Button, {
                                          icon: d.A9s,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: eo,
                                          text: k.intl.string(k.t.t5VZ88),
                                      })
                                    : (0, i.jsx)(d.K0, {
                                          icon: d.qYV,
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: eo,
                                          "aria-label": k.intl.string(k.t.WqhZss),
                                      }),
                            }),
                            !n &&
                                (0, i.jsx)(c.m, {
                                    text: k.intl.string(k.t.nFP4oa),
                                    children: (0, i.jsx)(d.K0, {
                                        icon: d.Dl6,
                                        size: "sm",
                                        variant: "secondary",
                                        onClick: () => {
                                            u.A.jumpToMessage({
                                                channelId: Y.id,
                                                messageId: Y.id,
                                                flash: !0,
                                                jumpType: h.US.INSTANT,
                                            });
                                        },
                                        "aria-label": k.intl.string(k.t.nFP4oa),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            ei && (0, i.jsx)(g.A, { threadId: t }),
            (0, i.jsx)(x.A, { channel: Y, isLastItem: s }),
        ],
    });
}
