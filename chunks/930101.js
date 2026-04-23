"use strict";
n.d(t, { H: () => N, X: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(132500),
    l = n(459192),
    d = n(939249),
    _ = n(922016),
    u = n(565645),
    c = n(58149),
    E = n(189551),
    h = n(954571),
    m = n(861626),
    f = n(34337),
    g = n(516287),
    p = n(652215),
    A = n(307731),
    I = n(788868),
    T = n(985018),
    S = n(675540);
let N = (e) => {
        let { node: t, tooltipPosition: n = f.Uk.position, enableClick: s = !0, channelId: o, messageId: c } = e,
            E = r.useRef(null),
            h = t.originalMatch?.[0],
            [g, p] = r.useState(!1),
            A = (e) =>
                (0, i.jsx)(u.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    src: t.src,
                    alt: h,
                    animated: !1,
                    channelId: o,
                    messageId: c,
                }),
            I = (e) =>
                (0, i.jsx)(l.u, {
                    asset: A("jumbo"),
                    title: t.name ?? "",
                    body: s ? T.intl.string(T.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...f.Uk,
                    position: n,
                    shouldShow: !g,
                    onTooltipShow: () => {
                        s && R({ emojiNode: t, isCustomEmoji: !1 });
                    },
                    children: (0, i.jsx)(d.D, {
                        ...e,
                        innerRef: E,
                        tag: "span",
                        onClick: (t) => {
                            p(!0), e?.onClick?.(t);
                        },
                        className: a()(S.qq, { [S._Y]: s, [S.gp]: t.jumboable }),
                        children: A(),
                    }),
                });
        return s
            ? (0, i.jsx)(_.Y, {
                  animation: _.Y.Animation.TRANSLATE,
                  scrollBehavior: "close",
                  align: "center",
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: "right",
                  onRequestClose: () => {
                      p(!1);
                  },
                  renderPopout: (e) => (0, i.jsx)(m.MV, { ...e, node: t }),
                  targetElementRef: E,
                  children: I,
              })
            : I();
    },
    C = (e) => {
        let { node: t, tooltipPosition: n = f.Uk.position, enableClick: s = !0, channelId: c, messageId: I } = e,
            N = (0, g.n)(),
            [C, O] = r.useState(String(Date.now())),
            [y, v] = r.useState(!1),
            [D, L] = r.useState(!1),
            b = r.useRef(null),
            w = (e) =>
                (0, i.jsx)(u.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: N,
                    channelId: c,
                    messageId: I,
                }),
            P = (0, o.A)(),
            k = (e) =>
                (0, i.jsx)(l.u, {
                    asset: w("jumbo"),
                    title: t.name,
                    body: s ? T.intl.string(T.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...f.Uk,
                    position: n,
                    shouldShow: !D,
                    onTooltipShow: () => {
                        v(!0),
                            s &&
                                (R({ emojiNode: t, isCustomEmoji: !0, nonce: P }),
                                (0, E.K)(A.EmojiInteractionPoint.CustomEmojiTooltipShown));
                    },
                    children: (0, i.jsx)(d.D, {
                        ...e,
                        innerRef: b,
                        onMouseEnter: () => {
                            e?.onMouseEnter?.();
                        },
                        onClick: s
                            ? (t) => {
                                  v(!1), L(!0), e?.onClick?.(t);
                              }
                            : void 0,
                        onMouseLeave: () => {
                            y && (h.default.track(p.HAw.CLOSE_POPOUT, { nonce: P }), v(!1));
                        },
                        tag: "span",
                        className: a()(S.qq, { [S._Y]: s, [S.gp]: t.jumboable }),
                        children: w(),
                    }),
                });
        return s
            ? (0, i.jsx)(_.Y, {
                  animation: _.Y.Animation.FADE,
                  scrollBehavior: "close",
                  align: "center",
                  onRequestClose: () => {
                      h.default.track(p.HAw.CLOSE_POPOUT, { nonce: P }), v(!1), L(!1);
                  },
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: "right",
                  renderPopout: (e) =>
                      (0, i.jsx)(m.iP, { ...e, node: t, refreshPositionKey: () => O(String(Date.now())), nonce: P }),
                  positionKey: C,
                  targetElementRef: b,
                  children: k,
              })
            : k();
    },
    R = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: i } = e;
        c.Ay.trackWithMetadata(p.HAw.EXPRESSION_TOOLTIP_VIEWED, {
            type: I.e.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: i,
        });
    };
