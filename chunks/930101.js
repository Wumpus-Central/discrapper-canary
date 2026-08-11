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
    I = n(966245),
    f = n(516287),
    p = n(652215),
    T = n(307731),
    m = n(202541),
    g = n(375708),
    S = n(194668);
function N(e) {
    let {
            node: t,
            tooltipPosition: n = I.Uk.position,
            enableClick: a = !0,
            focusable: l = !0,
            channelId: _,
            messageId: E,
        } = e,
        A = r.useRef(null),
        f = t.originalMatch?.[0],
        [p, T] = r.useState(!1);
    function m(e) {
        return (0, i.jsx)(u.A, {
            emojiName: t.name,
            size: e ?? (t.jumboable ? "jumbo" : "default"),
            src: t.src,
            alt: f,
            animated: !1,
            channelId: _,
            messageId: E,
        });
    }
    function N(e) {
        return (0, i.jsx)(o.u, {
            asset: m("jumbo"),
            title: t.name ?? "",
            body: a ? g.intl.string(g.t["515vjG"]) : "",
            ariaHidden: !0,
            ...I.Uk,
            position: n,
            shouldShow: !p,
            onTooltipShow: () => {
                a && O({ emojiNode: t, isCustomEmoji: !1 });
            },
            children: (0, i.jsx)(d.D, {
                ...e,
                innerRef: A,
                tag: "span",
                tabIndex: l ? 0 : -1,
                onClick: (t) => {
                    T(!0), e?.onClick?.(t);
                },
                className: s()(S.qq, { [S._Y]: a, [S.gp]: t.jumboable }),
                children: m(),
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
                  T(!1);
              },
              renderPopout: (e) => (0, i.jsx)(h.MV, { ...e, node: t }),
              targetElementRef: A,
              children: N,
          })
        : N();
}
let C = (e) => {
    let {
            node: t,
            tooltipPosition: n = I.Uk.position,
            enableClick: a = !0,
            focusable: _ = !0,
            channelId: m,
            messageId: N,
        } = e,
        C = (0, f.n)(),
        [R, L] = r.useState(String(Date.now())),
        [D, y] = r.useState(!1),
        [v, b] = r.useState(!1),
        M = r.useRef(null);
    function P(e) {
        return (0, i.jsx)(u.A, {
            emojiName: t.name,
            size: e ?? (t.jumboable ? "jumbo" : "default"),
            emojiId: t.emojiId,
            animated: t.animated,
            isInteracting: C,
            channelId: m,
            messageId: N,
        });
    }
    let U = (0, l.A)();
    function w(e) {
        return (0, i.jsx)(o.u, {
            asset: P("jumbo"),
            title: t.name,
            body: a ? g.intl.string(g.t["515vjG"]) : "",
            ariaHidden: !0,
            ...I.Uk,
            position: n,
            shouldShow: !v,
            onTooltipShow: () => {
                y(!0),
                    a &&
                        (O({ emojiNode: t, isCustomEmoji: !0, nonce: U }),
                        (0, E.K)(T.EmojiInteractionPoint.CustomEmojiTooltipShown));
            },
            children: (0, i.jsx)(d.D, {
                ...e,
                innerRef: M,
                onMouseEnter: () => {
                    e?.onMouseEnter?.();
                },
                onClick: a
                    ? (t) => {
                          y(!1), b(!0), e?.onClick?.(t);
                      }
                    : void 0,
                onMouseLeave: () => {
                    D && (A.default.track(p.HAw.CLOSE_POPOUT, { nonce: U }), y(!1));
                },
                tag: "span",
                tabIndex: _ ? 0 : -1,
                className: s()(S.qq, { [S._Y]: a, [S.gp]: t.jumboable }),
                children: P(),
            }),
        });
    }
    return a
        ? (0, i.jsx)(c.Y, {
              animation: c.Y.Animation.FADE,
              scrollBehavior: "close",
              align: "center",
              onRequestClose: () => {
                  A.default.track(p.HAw.CLOSE_POPOUT, { nonce: U }), y(!1), b(!1);
              },
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: function (e) {
                  return (0, i.jsx)(h.iP, { ...e, node: t, refreshPositionKey: () => L(String(Date.now())), nonce: U });
              },
              positionKey: R,
              targetElementRef: M,
              children: w,
          })
        : w();
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
