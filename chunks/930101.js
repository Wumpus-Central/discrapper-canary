"use strict";
n.d(t, { H: () => v, X: () => y });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(835245),
    o = n(459192),
    c = n(939249),
    u = n(265872),
    d = n(565645),
    h = n(58149),
    m = n(189551),
    p = n(954571),
    f = n(767143),
    g = n(652176),
    _ = n(516287),
    x = n(652215),
    A = n(307731),
    C = n(788868),
    E = n(985018),
    I = n(675540);
let v = (e) => {
        let { node: t, tooltipPosition: n = g.Uk.position, enableClick: s = !0, channelId: a, messageId: h } = e,
            m = l.useRef(null),
            p = t.originalMatch?.[0],
            [_, x] = l.useState(!1),
            A = (e) =>
                (0, i.jsx)(d.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    src: t.src,
                    alt: p,
                    animated: !1,
                    channelId: a,
                    messageId: h,
                }),
            C = (e) =>
                (0, i.jsx)(o.u, {
                    asset: A("jumbo"),
                    title: t.name ?? "",
                    body: s ? E.intl.string(E.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...g.Uk,
                    position: n,
                    shouldShow: !_,
                    onTooltipShow: () => {
                        s && S({ emojiNode: t, isCustomEmoji: !1 });
                    },
                    children: (0, i.jsx)(c.D, {
                        ...e,
                        innerRef: m,
                        tag: "span",
                        onClick: (t) => {
                            x(!0), e?.onClick?.(t);
                        },
                        className: r()(I.qq, { [I._Y]: s, [I.gp]: t.jumboable }),
                        children: A(),
                    }),
                });
        return s
            ? (0, i.jsx)(u.Y, {
                  animation: u.Y.Animation.TRANSLATE,
                  scrollBehavior: "close",
                  align: "center",
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: "right",
                  onRequestClose: () => {
                      x(!1);
                  },
                  renderPopout: (e) => (0, i.jsx)(f.MV, { ...e, node: t }),
                  targetElementRef: m,
                  children: C,
              })
            : C();
    },
    y = (e) => {
        let { node: t, tooltipPosition: n = g.Uk.position, enableClick: s = !0, channelId: h, messageId: C } = e,
            v = (0, _.n)(),
            [y, b] = l.useState(String(Date.now())),
            [N, T] = l.useState(!1),
            [j, R] = l.useState(!1),
            w = l.useRef(null),
            L = (e) =>
                (0, i.jsx)(d.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: v,
                    channelId: h,
                    messageId: C,
                }),
            M = (0, a.A)(),
            k = (e) =>
                (0, i.jsx)(o.u, {
                    asset: L("jumbo"),
                    title: t.name,
                    body: s ? E.intl.string(E.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...g.Uk,
                    position: n,
                    shouldShow: !j,
                    onTooltipShow: () => {
                        T(!0),
                            s &&
                                (S({ emojiNode: t, isCustomEmoji: !0, nonce: M }),
                                (0, m.K)(A.EmojiInteractionPoint.CustomEmojiTooltipShown));
                    },
                    children: (0, i.jsx)(c.D, {
                        ...e,
                        innerRef: w,
                        onMouseEnter: () => {
                            e?.onMouseEnter?.();
                        },
                        onClick: s
                            ? (t) => {
                                  T(!1), R(!0), e?.onClick?.(t);
                              }
                            : void 0,
                        onMouseLeave: () => {
                            N && (p.default.track(x.HAw.CLOSE_POPOUT, { nonce: M }), T(!1));
                        },
                        tag: "span",
                        className: r()(I.qq, { [I._Y]: s, [I.gp]: t.jumboable }),
                        children: L(),
                    }),
                });
        return s
            ? (0, i.jsx)(u.Y, {
                  animation: u.Y.Animation.FADE,
                  scrollBehavior: "close",
                  align: "center",
                  onRequestClose: () => {
                      p.default.track(x.HAw.CLOSE_POPOUT, { nonce: M }), T(!1), R(!1);
                  },
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: "right",
                  renderPopout: (e) =>
                      (0, i.jsx)(f.iP, { ...e, node: t, refreshPositionKey: () => b(String(Date.now())), nonce: M }),
                  positionKey: y,
                  targetElementRef: w,
                  children: k,
              })
            : k();
    },
    S = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: i } = e;
        h.Ay.trackWithMetadata(x.HAw.EXPRESSION_TOOLTIP_VIEWED, {
            type: C.e.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: i,
        });
    };
