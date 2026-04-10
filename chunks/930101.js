"use strict";
n.d(t, { H: () => T, X: () => S });
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
    m = n(652215),
    E = n(307731),
    g = n(788868),
    A = n(985018),
    I = n(262340);
let T = (e) => {
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
            T = (e) =>
                (0, r.jsx)(l.un, {
                    asset: g("jumbo"),
                    title: t.name ?? "",
                    body: s ? A.intl.string(A.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...h.Uk,
                    position: n,
                    shouldShow: !m,
                    onTooltipShow: () => {
                        s && y({ emojiNode: t, isCustomEmoji: !1 });
                    },
                    children: (0, r.jsx)(u.DUT, {
                        ...e,
                        innerRef: _,
                        tag: "span",
                        onClick: (t) => {
                            E(!0), e?.onClick?.(t);
                        },
                        className: a()(I.qq, { [I._Y]: s, [I.gp]: t.jumboable }),
                        children: g(),
                    }),
                });
        if (!s) return T();
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
            children: T,
        });
    },
    S = (e) => {
        let {
                node: t,
                isInteracting: n,
                tooltipPosition: s = h.Uk.position,
                enableClick: d = !0,
                channelId: g,
                messageId: T,
            } = e,
            [S, v] = i.useState(String(Date.now())),
            [N, C] = i.useState(!1),
            [R, O] = i.useState(!1),
            b = i.useRef(null),
            D = (e) =>
                (0, r.jsx)(c.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: n,
                    channelId: g,
                    messageId: T,
                }),
            L = (0, o.A)(),
            w = (e) =>
                (0, r.jsx)(l.un, {
                    asset: D("jumbo"),
                    title: t.name,
                    body: d ? A.intl.string(A.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...h.Uk,
                    position: s,
                    shouldShow: !R,
                    onTooltipShow: () => {
                        C(!0),
                            d &&
                                (y({ emojiNode: t, isCustomEmoji: !0, nonce: L }),
                                (0, _.K)(E.EmojiInteractionPoint.CustomEmojiTooltipShown));
                    },
                    children: (0, r.jsx)(u.DUT, {
                        ...e,
                        innerRef: b,
                        onMouseEnter: () => {
                            e?.onMouseEnter?.();
                        },
                        onClick: d
                            ? (t) => {
                                  C(!1), O(!0), e?.onClick?.(t);
                              }
                            : void 0,
                        onMouseLeave: () => {
                            N && (f.default.track(m.HAw.CLOSE_POPOUT, { nonce: L }), C(!1));
                        },
                        tag: "span",
                        className: a()(I.qq, { [I._Y]: d, [I.gp]: t.jumboable }),
                        children: D(),
                    }),
                });
        if (!d) return w();
        let M = (e) => (0, r.jsx)(p.iP, { ...e, node: t, refreshPositionKey: () => v(String(Date.now())), nonce: L });
        return (0, r.jsx)(u.YNO, {
            animation: u.YNO.Animation.FADE,
            scrollBehavior: "close",
            align: "center",
            onRequestClose: () => {
                f.default.track(m.HAw.CLOSE_POPOUT, { nonce: L }), C(!1), O(!1);
            },
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            renderPopout: M,
            positionKey: S,
            targetElementRef: b,
            children: w,
        });
    },
    y = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: r } = e;
        d.Ay.trackWithMetadata(m.HAw.EXPRESSION_TOOLTIP_VIEWED, {
            type: g.e.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: r,
        });
    };
