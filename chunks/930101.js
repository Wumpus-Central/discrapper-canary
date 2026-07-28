"use strict";
n.d(t, { H: () => N, X: () => C });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(132500),
    o = n(459192),
    d = n(939249),
    c = n(922016),
    u = n(565645),
    _ = n(95561),
    E = n(189551),
    A = n(174459),
    h = n(639245),
    I = n(34337),
    f = n(516287),
    p = n(652215),
    T = n(307731),
    m = n(202541),
    g = n(375708),
    S = n(194668);
function N(e) {
    let { node: t, tooltipPosition: n = I.Uk.position, enableClick: a = !0, channelId: l, messageId: _ } = e,
        E = r.useRef(null),
        A = t.originalMatch?.[0],
        [f, p] = r.useState(!1);
    function T(e) {
        return (0, i.jsx)(u.A, {
            emojiName: t.name,
            size: e ?? (t.jumboable ? "jumbo" : "default"),
            src: t.src,
            alt: A,
            animated: !1,
            channelId: l,
            messageId: _,
        });
    }
    function m(e) {
        return (0, i.jsx)(o.u, {
            asset: T("jumbo"),
            title: t.name ?? "",
            body: a ? g.intl.string(g.t["515vjG"]) : "",
            ariaHidden: !0,
            ...I.Uk,
            position: n,
            shouldShow: !f,
            onTooltipShow: () => {
                a && O({ emojiNode: t, isCustomEmoji: !1 });
            },
            children: (0, i.jsx)(d.D, {
                ...e,
                innerRef: E,
                tag: "span",
                onClick: (t) => {
                    p(!0), e?.onClick?.(t);
                },
                className: s()(S.qq, { [S._Y]: a, [S.gp]: t.jumboable }),
                children: T(),
            }),
        });
    }
    return a
        ? (0, i.jsx)(c.Y, {
              animation: c.Y.Animation.TRANSLATE,
              scrollBehavior: "close",
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              onRequestClose: () => {
                  p(!1);
              },
              renderPopout: (e) => (0, i.jsx)(h.MV, { ...e, node: t }),
              targetElementRef: E,
              children: m,
          })
        : m();
}
let C = (e) => {
    let { node: t, tooltipPosition: n = I.Uk.position, enableClick: a = !0, channelId: _, messageId: m } = e,
        N = (0, f.n)(),
        [C, R] = r.useState(String(Date.now())),
        [L, y] = r.useState(!1),
        [D, v] = r.useState(!1),
        b = r.useRef(null);
    function M(e) {
        return (0, i.jsx)(u.A, {
            emojiName: t.name,
            size: e ?? (t.jumboable ? "jumbo" : "default"),
            emojiId: t.emojiId,
            animated: t.animated,
            isInteracting: N,
            channelId: _,
            messageId: m,
        });
    }
    let P = (0, l.A)();
    function U(e) {
        return (0, i.jsx)(o.u, {
            asset: M("jumbo"),
            title: t.name,
            body: a ? g.intl.string(g.t["515vjG"]) : "",
            ariaHidden: !0,
            ...I.Uk,
            position: n,
            shouldShow: !D,
            onTooltipShow: () => {
                y(!0),
                    a &&
                        (O({ emojiNode: t, isCustomEmoji: !0, nonce: P }),
                        (0, E.K)(T.EmojiInteractionPoint.CustomEmojiTooltipShown));
            },
            children: (0, i.jsx)(d.D, {
                ...e,
                innerRef: b,
                onMouseEnter: () => {
                    e?.onMouseEnter?.();
                },
                onClick: a
                    ? (t) => {
                          y(!1), v(!0), e?.onClick?.(t);
                      }
                    : void 0,
                onMouseLeave: () => {
                    L && (A.default.track(p.HAw.CLOSE_POPOUT, { nonce: P }), y(!1));
                },
                tag: "span",
                className: s()(S.qq, { [S._Y]: a, [S.gp]: t.jumboable }),
                children: M(),
            }),
        });
    }
    return a
        ? (0, i.jsx)(c.Y, {
              animation: c.Y.Animation.FADE,
              scrollBehavior: "close",
              align: "center",
              onRequestClose: () => {
                  A.default.track(p.HAw.CLOSE_POPOUT, { nonce: P }), y(!1), v(!1);
              },
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: function (e) {
                  return (0, i.jsx)(h.iP, { ...e, node: t, refreshPositionKey: () => R(String(Date.now())), nonce: P });
              },
              positionKey: C,
              targetElementRef: b,
              children: U,
          })
        : U();
};
function O(e) {
    let { emojiNode: t, isCustomEmoji: n, nonce: i } = e;
    _.Ay.trackWithMetadata(p.HAw.EXPRESSION_TOOLTIP_VIEWED, {
        type: m.e.EMOJI_IN_MESSAGE_HOVER,
        expression_id: t.emojiId,
        expression_name: t.name,
        is_animated: t.animated,
        is_custom: n,
        nonce: i,
    });
}
