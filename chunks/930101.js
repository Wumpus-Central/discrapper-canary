"use strict";
n.d(t, { H: () => S, X: () => v });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(132500),
    o = n(459192),
    u = n(939249),
    c = n(922016),
    d = n(565645),
    h = n(95561),
    m = n(189551),
    f = n(174459),
    p = n(639245),
    g = n(966245),
    x = n(516287),
    A = n(652215),
    E = n(307731),
    C = n(202541),
    I = n(375708),
    y = n(194668);
function S(e) {
    let {
            node: t,
            tooltipPosition: n = g.Uk.position,
            enableClick: s = !0,
            focusable: a = !0,
            channelId: h,
            messageId: m,
        } = e,
        f = i.useRef(null),
        x = t.originalMatch?.[0],
        [A, E] = i.useState(!1);
    function C(e) {
        return (0, l.jsx)(d.A, {
            emojiName: t.name,
            size: e ?? (t.jumboable ? "jumbo" : "default"),
            src: t.src,
            alt: x,
            animated: !1,
            channelId: h,
            messageId: m,
        });
    }
    function S(e) {
        return (0, l.jsx)(o.u, {
            asset: C("jumbo"),
            title: t.name ?? "",
            body: s ? I.intl.string(I.t["515vjG"]) : "",
            ariaHidden: !0,
            ...g.Uk,
            position: n,
            shouldShow: !A,
            onTooltipShow: () => {
                s && _({ emojiNode: t, isCustomEmoji: !1 });
            },
            children: (0, l.jsx)(u.D, {
                ...e,
                innerRef: f,
                tag: "span",
                tabIndex: a ? 0 : -1,
                onClick: (t) => {
                    E(!0), e?.onClick?.(t);
                },
                className: r()(y.qq, { [y._Y]: s, [y.gp]: t.jumboable }),
                children: C(),
            }),
        });
    }
    return s
        ? (0, l.jsx)(c.Y, {
              animation: c.Y.Animation.TRANSLATE,
              scrollBehavior: "close",
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              onRequestClose: () => {
                  E(!1);
              },
              renderPopout: (e) => (0, l.jsx)(p.MV, { ...e, node: t }),
              targetElementRef: f,
              children: S,
          })
        : S();
}
let v = (e) => {
    let {
            node: t,
            tooltipPosition: n = g.Uk.position,
            enableClick: s = !0,
            focusable: h = !0,
            channelId: C,
            messageId: S,
        } = e,
        v = (0, x.n)(),
        [N, T] = i.useState(String(Date.now())),
        [j, b] = i.useState(!1),
        [R, L] = i.useState(!1),
        O = i.useRef(null);
    function M(e) {
        return (0, l.jsx)(d.A, {
            emojiName: t.name,
            size: e ?? (t.jumboable ? "jumbo" : "default"),
            emojiId: t.emojiId,
            animated: t.animated,
            isInteracting: v,
            channelId: C,
            messageId: S,
        });
    }
    let w = (0, a.A)();
    function k(e) {
        return (0, l.jsx)(o.u, {
            asset: M("jumbo"),
            title: t.name,
            body: s ? I.intl.string(I.t["515vjG"]) : "",
            ariaHidden: !0,
            ...g.Uk,
            position: n,
            shouldShow: !R,
            onTooltipShow: () => {
                b(!0),
                    s &&
                        (_({ emojiNode: t, isCustomEmoji: !0, nonce: w }),
                        (0, m.K)(E.EmojiInteractionPoint.CustomEmojiTooltipShown));
            },
            children: (0, l.jsx)(u.D, {
                ...e,
                innerRef: O,
                onMouseEnter: () => {
                    e?.onMouseEnter?.();
                },
                onClick: s
                    ? (t) => {
                          b(!1), L(!0), e?.onClick?.(t);
                      }
                    : void 0,
                onMouseLeave: () => {
                    j && (f.default.track(A.HAw.CLOSE_POPOUT, { nonce: w }), b(!1));
                },
                tag: "span",
                tabIndex: h ? 0 : -1,
                className: r()(y.qq, { [y._Y]: s, [y.gp]: t.jumboable }),
                children: M(),
            }),
        });
    }
    return s
        ? (0, l.jsx)(c.Y, {
              animation: c.Y.Animation.FADE,
              scrollBehavior: "close",
              align: "center",
              onRequestClose: () => {
                  f.default.track(A.HAw.CLOSE_POPOUT, { nonce: w }), b(!1), L(!1);
              },
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: function (e) {
                  return (0, l.jsx)(p.iP, { ...e, node: t, refreshPositionKey: () => T(String(Date.now())), nonce: w });
              },
              positionKey: N,
              targetElementRef: O,
              children: k,
          })
        : k();
};
function _(e) {
    let { emojiNode: t, isCustomEmoji: n, nonce: l } = e;
    h.Ay.trackWithMetadata(A.HAw.EXPRESSION_TOOLTIP_VIEWED, {
        type: C.e.EMOJI_IN_MESSAGE_HOVER,
        expression_id: t.emojiId,
        expression_name: t.name,
        is_animated: t.animated,
        is_custom: n,
        nonce: l,
    });
}
