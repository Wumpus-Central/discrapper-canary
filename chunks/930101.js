"use strict";
n.d(t, { H: () => v, X: () => y });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(132500),
    o = n(459192),
    c = n(939249),
    u = n(922016),
    d = n(565645),
    h = n(58149),
    m = n(189551),
    p = n(954571),
    f = n(861626),
    g = n(34337),
    _ = n(516287),
    x = n(652215),
    C = n(307731),
    A = n(788868),
    E = n(985018),
    I = n(675540);
let v = (e) => {
        let { node: t, tooltipPosition: n = g.Uk.position, enableClick: s = !0, channelId: r, messageId: h } = e,
            m = i.useRef(null),
            p = t.originalMatch?.[0],
            [_, x] = i.useState(!1),
            C = (e) =>
                (0, l.jsx)(d.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    src: t.src,
                    alt: p,
                    animated: !1,
                    channelId: r,
                    messageId: h,
                }),
            A = (e) =>
                (0, l.jsx)(o.u, {
                    asset: C("jumbo"),
                    title: t.name ?? "",
                    body: s ? E.intl.string(E.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...g.Uk,
                    position: n,
                    shouldShow: !_,
                    onTooltipShow: () => {
                        s && b({ emojiNode: t, isCustomEmoji: !1 });
                    },
                    children: (0, l.jsx)(c.D, {
                        ...e,
                        innerRef: m,
                        tag: "span",
                        onClick: (t) => {
                            x(!0), e?.onClick?.(t);
                        },
                        className: a()(I.qq, { [I._Y]: s, [I.gp]: t.jumboable }),
                        children: C(),
                    }),
                });
        return s
            ? (0, l.jsx)(u.Y, {
                  animation: u.Y.Animation.TRANSLATE,
                  scrollBehavior: "close",
                  align: "center",
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: "right",
                  onRequestClose: () => {
                      x(!1);
                  },
                  renderPopout: (e) => (0, l.jsx)(f.MV, { ...e, node: t }),
                  targetElementRef: m,
                  children: A,
              })
            : A();
    },
    y = (e) => {
        let { node: t, tooltipPosition: n = g.Uk.position, enableClick: s = !0, channelId: h, messageId: A } = e,
            v = (0, _.n)(),
            [y, S] = i.useState(String(Date.now())),
            [N, j] = i.useState(!1),
            [T, w] = i.useState(!1),
            R = i.useRef(null),
            L = (e) =>
                (0, l.jsx)(d.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: v,
                    channelId: h,
                    messageId: A,
                }),
            k = (0, r.A)(),
            O = (e) =>
                (0, l.jsx)(o.u, {
                    asset: L("jumbo"),
                    title: t.name,
                    body: s ? E.intl.string(E.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...g.Uk,
                    position: n,
                    shouldShow: !T,
                    onTooltipShow: () => {
                        j(!0),
                            s &&
                                (b({ emojiNode: t, isCustomEmoji: !0, nonce: k }),
                                (0, m.K)(C.EmojiInteractionPoint.CustomEmojiTooltipShown));
                    },
                    children: (0, l.jsx)(c.D, {
                        ...e,
                        innerRef: R,
                        onMouseEnter: () => {
                            e?.onMouseEnter?.();
                        },
                        onClick: s
                            ? (t) => {
                                  j(!1), w(!0), e?.onClick?.(t);
                              }
                            : void 0,
                        onMouseLeave: () => {
                            N && (p.default.track(x.HAw.CLOSE_POPOUT, { nonce: k }), j(!1));
                        },
                        tag: "span",
                        className: a()(I.qq, { [I._Y]: s, [I.gp]: t.jumboable }),
                        children: L(),
                    }),
                });
        return s
            ? (0, l.jsx)(u.Y, {
                  animation: u.Y.Animation.FADE,
                  scrollBehavior: "close",
                  align: "center",
                  onRequestClose: () => {
                      p.default.track(x.HAw.CLOSE_POPOUT, { nonce: k }), j(!1), w(!1);
                  },
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: "right",
                  renderPopout: (e) =>
                      (0, l.jsx)(f.iP, { ...e, node: t, refreshPositionKey: () => S(String(Date.now())), nonce: k }),
                  positionKey: y,
                  targetElementRef: R,
                  children: O,
              })
            : O();
    },
    b = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: l } = e;
        h.Ay.trackWithMetadata(x.HAw.EXPRESSION_TOOLTIP_VIEWED, {
            type: A.e.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: l,
        });
    };
