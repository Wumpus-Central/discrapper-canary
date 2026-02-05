"use strict";
n.d(t, { H: () => T, X: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(307731),
    E = n(788868),
    A = n(985018),
    I = n(611853);
let T = (e) => {
        let { node: t, tooltipPosition: n = h.Uk.position, enableClick: a = !0, channelId: o, messageId: d } = e,
            _ = i.useRef(null),
            f = t.originalMatch?.[0],
            [m, g] = i.useState(!1),
            E = (e) =>
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
                    asset: E("jumbo"),
                    title: t.name ?? "",
                    body: a ? A.intl.string(A.t["515vjG"]) : "",
                    ariaHidden: !0,
                    ...h.Uk,
                    position: n,
                    shouldShow: !m,
                    onTooltipShow: () => {
                        a && S({ emojiNode: t, isCustomEmoji: !1 });
                    },
                    children: (0, r.jsx)(u.DUT, {
                        ...e,
                        innerRef: _,
                        tag: "span",
                        onClick: (t) => {
                            g(!0), e?.onClick?.(t);
                        },
                        className: s()(I.qq, { [I._Y]: a, [I.gp]: t.jumboable }),
                        children: E(),
                    }),
                });
        if (!a) return T();
        let y = (e) => (0, r.jsx)(p.MV, { ...e, node: t });
        return (0, r.jsx)(u.YNO, {
            animation: u.YNO.Animation.TRANSLATE,
            align: "center",
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            onRequestClose: () => {
                g(!1);
            },
            renderPopout: y,
            targetElementRef: _,
            children: T,
        });
    },
    y = (e) => {
        let {
                node: t,
                isInteracting: n,
                tooltipPosition: a = h.Uk.position,
                enableClick: d = !0,
                channelId: E,
                messageId: T,
            } = e,
            [y, v] = i.useState(String(Date.now())),
            [C, b] = i.useState(!1),
            [N, R] = i.useState(!1),
            O = i.useRef(null),
            D = (e) =>
                (0, r.jsx)(c.A, {
                    emojiName: t.name,
                    size: e ?? (t.jumboable ? "jumbo" : "default"),
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: n,
                    channelId: E,
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
                    position: a,
                    shouldShow: !N,
                    onTooltipShow: () => {
                        b(!0),
                            d &&
                                (S({ emojiNode: t, isCustomEmoji: !0, nonce: L }),
                                (0, _.K)(g.Vl.CustomEmojiTooltipShown));
                    },
                    children: (0, r.jsx)(u.DUT, {
                        ...e,
                        innerRef: O,
                        onMouseEnter: () => {
                            e?.onMouseEnter?.();
                        },
                        onClick: d
                            ? (t) => {
                                  b(!1), R(!0), e?.onClick?.(t);
                              }
                            : void 0,
                        onMouseLeave: () => {
                            C && (f.default.track(m.HAw.CLOSE_POPOUT, { nonce: L }), b(!1));
                        },
                        tag: "span",
                        className: s()(I.qq, { [I._Y]: d, [I.gp]: t.jumboable }),
                        children: D(),
                    }),
                });
        if (!d) return w();
        let x = (e) => (0, r.jsx)(p.iP, { ...e, node: t, refreshPositionKey: () => v(String(Date.now())), nonce: L });
        return (0, r.jsx)(u.YNO, {
            animation: u.YNO.Animation.FADE,
            align: "center",
            onRequestClose: () => {
                f.default.track(m.HAw.CLOSE_POPOUT, { nonce: L }), b(!1), R(!1);
            },
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            renderPopout: x,
            positionKey: y,
            targetElementRef: O,
            children: w,
        });
    },
    S = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: r } = e;
        d.Ay.trackWithMetadata(m.HAw.EXPRESSION_TOOLTIP_VIEWED, {
            type: E.e.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: r,
        });
    };
