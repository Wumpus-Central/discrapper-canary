"use strict";
n.d(t, { H: () => y, X: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(835245),
    l = n(459192),
    u = n(939249),
    c = n(922016),
    d = n(565645),
    _ = n(95561),
    h = n(189551),
    f = n(174459),
    p = n(639245),
    E = n(34337),
    m = n(516287),
    g = n(652215),
    A = n(307731),
    I = n(788868),
    T = n(375708),
    S = n(675540);
let y = (e) => {
        let { node: t, tooltipPosition: n = E.Uk.position, enableClick: s = !0, channelId: o, messageId: _ } = e,
            h = r.useRef(null),
            f = t.originalMatch?.[0],
            [m, g] = r.useState(!1),
            A = (e) =>
                (0, i.jsx)(d.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    src: t.src,
                    alt: f,
                    animated: !1,
                    channelId: o,
                    messageId: _,
                }),
            I = (e) =>
                (0, i.jsx)(l.u, {
                    asset: A("jumbo"),
                    title: t.name ?? "",
                    body: s ? T.intl.string(T.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...E.Uk,
                    position: n,
                    shouldShow: !m,
                    onTooltipShow: () => {
                        s && N({ emojiNode: t, isCustomEmoji: !1 });
                    },
                    children: (0, i.jsx)(u.D, {
                        ...e,
                        innerRef: h,
                        tag: "span",
                        onClick: (t) => {
                            g(!0), e?.onClick?.(t);
                        },
                        className: a()(S.qq, { [S._Y]: s, [S.gp]: t.jumboable }),
                        children: A(),
                    }),
                });
        return s
            ? (0, i.jsx)(c.Y, {
                  animation: c.Y.Animation.TRANSLATE,
                  scrollBehavior: "close",
                  align: "center",
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: "right",
                  onRequestClose: () => {
                      g(!1);
                  },
                  renderPopout: (e) => (0, i.jsx)(p.MV, { ...e, node: t }),
                  targetElementRef: h,
                  children: I,
              })
            : I();
    },
    C = (e) => {
        let { node: t, tooltipPosition: n = E.Uk.position, enableClick: s = !0, channelId: _, messageId: I } = e,
            y = (0, m.n)(),
            [C, v] = r.useState(String(Date.now())),
            [R, O] = r.useState(!1),
            [b, D] = r.useState(!1),
            L = r.useRef(null),
            w = (e) =>
                (0, i.jsx)(d.A, {
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
                (0, i.jsx)(l.u, {
                    asset: w("jumbo"),
                    title: t.name,
                    body: s ? T.intl.string(T.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...E.Uk,
                    position: n,
                    shouldShow: !b,
                    onTooltipShow: () => {
                        O(!0),
                            s &&
                                (N({ emojiNode: t, isCustomEmoji: !0, nonce: M }),
                                (0, h.K)(A.EmojiInteractionPoint.CustomEmojiTooltipShown));
                    },
                    children: (0, i.jsx)(u.D, {
                        ...e,
                        innerRef: L,
                        onMouseEnter: () => {
                            e?.onMouseEnter?.();
                        },
                        onClick: s
                            ? (t) => {
                                  O(!1), D(!0), e?.onClick?.(t);
                              }
                            : void 0,
                        onMouseLeave: () => {
                            R && (f.default.track(g.HAw.CLOSE_POPOUT, { nonce: M }), O(!1));
                        },
                        tag: "span",
                        className: a()(S.qq, { [S._Y]: s, [S.gp]: t.jumboable }),
                        children: w(),
                    }),
                });
        return s
            ? (0, i.jsx)(c.Y, {
                  animation: c.Y.Animation.FADE,
                  scrollBehavior: "close",
                  align: "center",
                  onRequestClose: () => {
                      f.default.track(g.HAw.CLOSE_POPOUT, { nonce: M }), O(!1), D(!1);
                  },
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: "right",
                  renderPopout: (e) =>
                      (0, i.jsx)(p.iP, { ...e, node: t, refreshPositionKey: () => v(String(Date.now())), nonce: M }),
                  positionKey: C,
                  targetElementRef: L,
                  children: P,
              })
            : P();
    },
    N = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: i } = e;
        _.Ay.trackWithMetadata(g.HAw.EXPRESSION_TOOLTIP_VIEWED, {
            type: I.e.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: i,
        });
    };
