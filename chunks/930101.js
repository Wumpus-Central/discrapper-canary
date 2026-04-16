"use strict";
n.d(t, { H: () => S, X: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(835245),
    l = n(435371),
    u = n(397927),
    c = n(565645),
    d = n(58149),
    _ = n(189551),
    f = n(954571),
    p = n(767143),
    h = n(652176),
    m = n(516287),
    E = n(652215),
    g = n(307731),
    A = n(788868),
    I = n(985018),
    T = n(262340);
let S = (e) => {
        let { node: t, tooltipPosition: n = h.Uk.position, enableClick: s = !0, channelId: o, messageId: d } = e,
            _ = i.useRef(null),
            f = t.originalMatch?.[0],
            [m, E] = i.useState(!1),
            g = (e) =>
                (0, r.jsx)(c.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    src: t.src,
                    alt: f,
                    animated: !1,
                    channelId: o,
                    messageId: d,
                }),
            A = (e) =>
                (0, r.jsx)(l.un, {
                    asset: g("jumbo"),
                    title: t.name ?? "",
                    body: s ? I.intl.string(I.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...h.Uk,
                    position: n,
                    shouldShow: !m,
                    onTooltipShow: () => {
                        s && v({ emojiNode: t, isCustomEmoji: !1 });
                    },
                    children: (0, r.jsx)(u.DUT, {
                        ...e,
                        innerRef: _,
                        tag: "span",
                        onClick: (t) => {
                            E(!0), e?.onClick?.(t);
                        },
                        className: a()(T.qq, { [T._Y]: s, [T.gp]: t.jumboable }),
                        children: g(),
                    }),
                });
        if (!s) return A();
        let S = (e) => (0, r.jsx)(p.MV, { ...e, node: t });
        return (0, r.jsx)(u.YNO, {
            animation: u.YNO.Animation.TRANSLATE,
            scrollBehavior: "close",
            align: "center",
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            onRequestClose: () => {
                E(!1);
            },
            renderPopout: S,
            targetElementRef: _,
            children: A,
        });
    },
    y = (e) => {
        let { node: t, tooltipPosition: n = h.Uk.position, enableClick: s = !0, channelId: d, messageId: A } = e,
            S = (0, m.n)(),
            [y, N] = i.useState(String(Date.now())),
            [C, R] = i.useState(!1),
            [O, b] = i.useState(!1),
            D = i.useRef(null),
            L = (e) =>
                (0, r.jsx)(c.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: S,
                    channelId: d,
                    messageId: A,
                }),
            w = (0, o.A)(),
            M = (e) =>
                (0, r.jsx)(l.un, {
                    asset: L("jumbo"),
                    title: t.name,
                    body: s ? I.intl.string(I.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...h.Uk,
                    position: n,
                    shouldShow: !O,
                    onTooltipShow: () => {
                        R(!0),
                            s &&
                                (v({ emojiNode: t, isCustomEmoji: !0, nonce: w }),
                                (0, _.K)(g.EmojiInteractionPoint.CustomEmojiTooltipShown));
                    },
                    children: (0, r.jsx)(u.DUT, {
                        ...e,
                        innerRef: D,
                        onMouseEnter: () => {
                            e?.onMouseEnter?.();
                        },
                        onClick: s
                            ? (t) => {
                                  R(!1), b(!0), e?.onClick?.(t);
                              }
                            : void 0,
                        onMouseLeave: () => {
                            C && (f.default.track(E.HAw.CLOSE_POPOUT, { nonce: w }), R(!1));
                        },
                        tag: "span",
                        className: a()(T.qq, { [T._Y]: s, [T.gp]: t.jumboable }),
                        children: L(),
                    }),
                });
        if (!s) return M();
        let P = (e) => (0, r.jsx)(p.iP, { ...e, node: t, refreshPositionKey: () => N(String(Date.now())), nonce: w });
        return (0, r.jsx)(u.YNO, {
            animation: u.YNO.Animation.FADE,
            scrollBehavior: "close",
            align: "center",
            onRequestClose: () => {
                f.default.track(E.HAw.CLOSE_POPOUT, { nonce: w }), R(!1), b(!1);
            },
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            renderPopout: P,
            positionKey: y,
            targetElementRef: D,
            children: M,
        });
    },
    v = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: r } = e;
        d.Ay.trackWithMetadata(E.HAw.EXPRESSION_TOOLTIP_VIEWED, {
            type: A.e.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: r,
        });
    };
