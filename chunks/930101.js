"use strict";
n.d(t, { H: () => v, X: () => S });
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
    C = n(307731),
    E = n(202541),
    I = n(375708),
    y = n(17508);
function v(e) {
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
        [A, C] = i.useState(!1);
    function E(e) {
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
    function v(e) {
        return (0, l.jsx)(o.u, {
            asset: E("jumbo"),
            title: t.name ?? "",
            body: s ? I.intl.string(I.t["515vjG"]) : "",
            ariaHidden: !0,
            ...g.Uk,
            position: n,
            shouldShow: !A,
            onTooltipShow: () => {
                s && N({ emojiNode: t, isCustomEmoji: !1 });
            },
            children: (0, l.jsx)(u.D, {
                ...e,
                innerRef: f,
                tag: "span",
                tabIndex: a ? 0 : -1,
                onClick: (t) => {
                    C(!0), e?.onClick?.(t);
                },
                className: r()(y.qq, { [y._Y]: s, [y.gp]: t.jumboable }),
                children: E(),
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
                  C(!1);
              },
              renderPopout: (e) => (0, l.jsx)(p.MV, { ...e, node: t }),
              targetElementRef: f,
              children: v,
          })
        : v();
}
let S = (e) => {
    let {
            node: t,
            tooltipPosition: n = g.Uk.position,
            enableClick: s = !0,
            focusable: h = !0,
            channelId: E,
            messageId: v,
        } = e,
        S = (0, x.n)(),
        [_, T] = i.useState(String(Date.now())),
        [j, b] = i.useState(!1),
        [R, O] = i.useState(!1),
        M = i.useRef(null);
    function L(e) {
        return (0, l.jsx)(d.A, {
            emojiName: t.name,
            size: e ?? (t.jumboable ? "jumbo" : "default"),
            emojiId: t.emojiId,
            animated: t.animated,
            isInteracting: S,
            channelId: E,
            messageId: v,
        });
    }
    let w = (0, a.A)();
    function k(e) {
        return (0, l.jsx)(o.u, {
            asset: L("jumbo"),
            title: t.name,
            body: s ? I.intl.string(I.t["515vjG"]) : "",
            ariaHidden: !0,
            ...g.Uk,
            position: n,
            shouldShow: !R,
            onTooltipShow: () => {
                b(!0),
                    s &&
                        (N({ emojiNode: t, isCustomEmoji: !0, nonce: w }),
                        (0, m.K)(C.EmojiInteractionPoint.CustomEmojiTooltipShown));
            },
            children: (0, l.jsx)(u.D, {
                ...e,
                innerRef: M,
                onMouseEnter: () => {
                    e?.onMouseEnter?.();
                },
                onClick: s
                    ? (t) => {
                          b(!1), O(!0), e?.onClick?.(t);
                      }
                    : void 0,
                onMouseLeave: () => {
                    j && (f.default.track(A.HAw.CLOSE_POPOUT, { nonce: w }), b(!1));
                },
                tag: "span",
                tabIndex: h ? 0 : -1,
                className: r()(y.qq, { [y._Y]: s, [y.gp]: t.jumboable }),
                children: L(),
            }),
        });
    }
    return s
        ? (0, l.jsx)(c.Y, {
              animation: c.Y.Animation.FADE,
              scrollBehavior: "close",
              align: "center",
              onRequestClose: () => {
                  f.default.track(A.HAw.CLOSE_POPOUT, { nonce: w }), b(!1), O(!1);
              },
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: function (e) {
                  return (0, l.jsx)(p.iP, { ...e, node: t, refreshPositionKey: () => T(String(Date.now())), nonce: w });
              },
              positionKey: _,
              targetElementRef: M,
              children: k,
          })
        : k();
};
function N(e) {
    let { emojiNode: t, isCustomEmoji: n, nonce: l } = e;
    h.Ay.trackWithMetadata(A.HAw.EXPRESSION_TOOLTIP_VIEWED, {
        type: E.e.EMOJI_IN_MESSAGE_HOVER,
        expression_id: t.emojiId,
        expression_name: t.name,
        is_animated: t.animated,
        is_custom: n,
        nonce: l,
    });
}
