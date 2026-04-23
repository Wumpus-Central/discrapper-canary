"use strict";
n.d(t, { H: () => y, X: () => N });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(835245),
    l = n(459192),
    u = n(939249),
    c = n(265872),
    d = n(565645),
    _ = n(58149),
    f = n(189551),
    p = n(954571),
    h = n(767143),
    E = n(652176),
    m = n(516287),
    g = n(652215),
    A = n(307731),
    I = n(788868),
    T = n(985018),
    S = n(675540);
let y = (e) => {
        let { node: t, tooltipPosition: n = E.Uk.position, enableClick: s = !0, channelId: o, messageId: _ } = e,
            f = i.useRef(null),
            p = t.originalMatch?.[0],
            [m, g] = i.useState(!1),
            A = (e) =>
                (0, r.jsx)(d.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    src: t.src,
                    alt: p,
                    animated: !1,
                    channelId: o,
                    messageId: _,
                }),
            I = (e) =>
                (0, r.jsx)(l.u, {
                    asset: A("jumbo"),
                    title: t.name ?? "",
                    body: s ? T.intl.string(T.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...E.Uk,
                    position: n,
                    shouldShow: !m,
                    onTooltipShow: () => {
                        s && v({ emojiNode: t, isCustomEmoji: !1 });
                    },
                    children: (0, r.jsx)(u.D, {
                        ...e,
                        innerRef: f,
                        tag: "span",
                        onClick: (t) => {
                            g(!0), e?.onClick?.(t);
                        },
                        className: a()(S.qq, { [S._Y]: s, [S.gp]: t.jumboable }),
                        children: A(),
                    }),
                });
        return s
            ? (0, r.jsx)(c.Y, {
                  animation: c.Y.Animation.TRANSLATE,
                  scrollBehavior: "close",
                  align: "center",
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: "right",
                  onRequestClose: () => {
                      g(!1);
                  },
                  renderPopout: (e) => (0, r.jsx)(h.MV, { ...e, node: t }),
                  targetElementRef: f,
                  children: I,
              })
            : I();
    },
    N = (e) => {
        let { node: t, tooltipPosition: n = E.Uk.position, enableClick: s = !0, channelId: _, messageId: I } = e,
            y = (0, m.n)(),
            [N, C] = i.useState(String(Date.now())),
            [O, R] = i.useState(!1),
            [b, D] = i.useState(!1),
            L = i.useRef(null),
            w = (e) =>
                (0, r.jsx)(d.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: y,
                    channelId: _,
                    messageId: I,
                }),
            M = (0, o.A)(),
            P = (e) =>
                (0, r.jsx)(l.u, {
                    asset: w("jumbo"),
                    title: t.name,
                    body: s ? T.intl.string(T.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...E.Uk,
                    position: n,
                    shouldShow: !b,
                    onTooltipShow: () => {
                        R(!0),
                            s &&
                                (v({ emojiNode: t, isCustomEmoji: !0, nonce: M }),
                                (0, f.K)(A.EmojiInteractionPoint.CustomEmojiTooltipShown));
                    },
                    children: (0, r.jsx)(u.D, {
                        ...e,
                        innerRef: L,
                        onMouseEnter: () => {
                            e?.onMouseEnter?.();
                        },
                        onClick: s
                            ? (t) => {
                                  R(!1), D(!0), e?.onClick?.(t);
                              }
                            : void 0,
                        onMouseLeave: () => {
                            O && (p.default.track(g.HAw.CLOSE_POPOUT, { nonce: M }), R(!1));
                        },
                        tag: "span",
                        className: a()(S.qq, { [S._Y]: s, [S.gp]: t.jumboable }),
                        children: w(),
                    }),
                });
        return s
            ? (0, r.jsx)(c.Y, {
                  animation: c.Y.Animation.FADE,
                  scrollBehavior: "close",
                  align: "center",
                  onRequestClose: () => {
                      p.default.track(g.HAw.CLOSE_POPOUT, { nonce: M }), R(!1), D(!1);
                  },
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: "right",
                  renderPopout: (e) =>
                      (0, r.jsx)(h.iP, { ...e, node: t, refreshPositionKey: () => C(String(Date.now())), nonce: M }),
                  positionKey: N,
                  targetElementRef: L,
                  children: P,
              })
            : P();
    },
    v = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: r } = e;
        _.Ay.trackWithMetadata(g.HAw.EXPRESSION_TOOLTIP_VIEWED, {
            type: I.e.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: r,
        });
    };
