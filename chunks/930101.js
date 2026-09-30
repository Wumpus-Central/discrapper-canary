n.d(t, { H: () => S, X: () => v });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(132500),
    o = n(683063),
    u = n(939249),
    c = n(922016),
    d = n(565645),
    m = n(95561),
    h = n(189551),
    p = n(174459),
    f = n(639245),
    g = n(684519),
    x = n(516287),
    A = n(652215),
    C = n(307731),
    E = n(202541),
    I = n(375708),
    y = n(17508);
function S(e) {
    let {
            node: t,
            tooltipPosition: n = g.Uk.position,
            enableClick: s = !0,
            focusable: a = !0,
            channelId: m,
            messageId: h,
        } = e,
        p = i.useRef(null),
        x = t.originalMatch?.[0],
        [A, C] = i.useState(!1);
    function E(e) {
        return (0, l.jsx)(d.A, {
            emojiName: t.name,
            size: e ?? (t.jumboable ? "jumbo" : "default"),
            src: t.src,
            alt: x,
            animated: !1,
            channelId: m,
            messageId: h,
        });
    }
    function S(e) {
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
                innerRef: p,
                tag: "span",
                tabIndex: a ? 0 : -1,
                onClick: (t) => {
                    (C(!0), e?.onClick?.(t));
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
              renderPopout: (e) => (0, l.jsx)(f.MV, { ...e, node: t }),
              targetElementRef: p,
              children: S,
          })
        : S();
}
let v = (e) => {
    let {
            node: t,
            tooltipPosition: n = g.Uk.position,
            enableClick: s = !0,
            focusable: m = !0,
            channelId: E,
            messageId: S,
        } = e,
        v = (0, x.n)(),
        [_, j] = i.useState(String(Date.now())),
        [b, T] = i.useState(!1),
        [R, O] = i.useState(!1),
        L = i.useRef(null);
    function M(e) {
        return (0, l.jsx)(d.A, {
            emojiName: t.name,
            size: e ?? (t.jumboable ? "jumbo" : "default"),
            emojiId: t.emojiId,
            animated: t.animated,
            isInteracting: v,
            channelId: E,
            messageId: S,
        });
    }
    let k = (0, a.A)();
    function w(e) {
        return (0, l.jsx)(o.u, {
            asset: M("jumbo"),
            title: t.name,
            body: s ? I.intl.string(I.t["515vjG"]) : "",
            ariaHidden: !0,
            ...g.Uk,
            position: n,
            shouldShow: !R,
            onTooltipShow: () => {
                (T(!0),
                    s &&
                        (N({ emojiNode: t, isCustomEmoji: !0, nonce: k }),
                        (0, h.K)(C.EmojiInteractionPoint.CustomEmojiTooltipShown)));
            },
            children: (0, l.jsx)(u.D, {
                ...e,
                innerRef: L,
                onMouseEnter: () => {
                    e?.onMouseEnter?.();
                },
                onClick: s
                    ? (t) => {
                          (T(!1), O(!0), e?.onClick?.(t));
                      }
                    : void 0,
                onMouseLeave: () => {
                    b && (p.default.track(A.HAw.CLOSE_POPOUT, { nonce: k }), T(!1));
                },
                tag: "span",
                tabIndex: m ? 0 : -1,
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
                  (p.default.track(A.HAw.CLOSE_POPOUT, { nonce: k }), T(!1), O(!1));
              },
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: function (e) {
                  return (0, l.jsx)(f.iP, { ...e, node: t, refreshPositionKey: () => j(String(Date.now())), nonce: k });
              },
              positionKey: _,
              targetElementRef: L,
              children: w,
          })
        : w();
};
function N(e) {
    let { emojiNode: t, isCustomEmoji: n, nonce: l } = e;
    m.Ay.trackWithMetadata(A.HAw.EXPRESSION_TOOLTIP_VIEWED, {
        type: E.e.EMOJI_IN_MESSAGE_HOVER,
        expression_id: t.emojiId,
        expression_name: t.name,
        is_animated: t.animated,
        is_custom: n,
        nonce: l,
    });
}
