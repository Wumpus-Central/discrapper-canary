t.d(n, { H: () => E, X: () => I });
var l = t(477900),
    a = t(582128),
    i = t(503698),
    r = t.n(i),
    s = t(132500),
    o = t(683063),
    c = t(939249),
    u = t(265872),
    d = t(565645),
    m = t(666860),
    h = t(189551),
    p = t(174459),
    g = t(639245),
    x = t(188645),
    f = t(516287),
    j = t(652215),
    y = t(307731),
    A = t(202541),
    C = t(105292),
    k = t(17508);
function E(e) {
    let {
            node: n,
            tooltipPosition: t = x.Uk.position,
            enableClick: i = !0,
            focusable: s = !0,
            channelId: m,
            messageId: h,
        } = e,
        p = a.useRef(null),
        f = n.originalMatch?.[0],
        [j, y] = a.useState(!1);
    function A(e) {
        return (0, l.jsx)(d.A, {
            emojiName: n.name,
            size: e ?? (n.jumboable ? "jumbo" : "default"),
            src: n.src,
            alt: f,
            animated: !1,
            channelId: m,
            messageId: h,
        });
    }
    function E(e) {
        return (0, l.jsx)(o.u, {
            asset: A("jumbo"),
            title: n.name ?? "",
            titleLineClamp: 1,
            body: i ? C.intl.string(C.t["515vjG"]) : "",
            ariaHidden: !0,
            ...x.Uk,
            position: t,
            shouldShow: !j,
            onTooltipShow: () => {
                i && N({ emojiNode: n, isCustomEmoji: !1 });
            },
            children: (0, l.jsx)(c.D, {
                ...e,
                innerRef: p,
                tag: "span",
                tabIndex: s ? 0 : -1,
                onClick: (n) => {
                    (y(!0), e?.onClick?.(n));
                },
                className: r()(k.qq, { [k._Y]: i, [k.gp]: n.jumboable }),
                children: A(),
            }),
        });
    }
    return i
        ? (0, l.jsx)(u.Y, {
              animation: u.Y.Animation.TRANSLATE,
              scrollBehavior: "close",
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              onRequestClose: () => {
                  y(!1);
              },
              renderPopout: (e) => (0, l.jsx)(g.MV, { ...e, node: n }),
              targetElementRef: p,
              children: E,
          })
        : E();
}
let I = (e) => {
    let {
            node: n,
            tooltipPosition: t = x.Uk.position,
            enableClick: i = !0,
            focusable: m = !0,
            channelId: A,
            messageId: E,
        } = e,
        I = (0, f.n)(),
        [v, b] = a.useState(String(Date.now())),
        [S, L] = a.useState(!1),
        [T, M] = a.useState(!1),
        _ = a.useRef(null);
    function P(e) {
        return (0, l.jsx)(d.A, {
            emojiName: n.name,
            size: e ?? (n.jumboable ? "jumbo" : "default"),
            emojiId: n.emojiId,
            animated: n.animated,
            isInteracting: I,
            channelId: A,
            messageId: E,
        });
    }
    let O = (0, s.A)();
    function w(e) {
        return (0, l.jsx)(o.u, {
            asset: P("jumbo"),
            title: n.name,
            titleLineClamp: 1,
            body: i ? C.intl.string(C.t["515vjG"]) : "",
            ariaHidden: !0,
            ...x.Uk,
            position: t,
            shouldShow: !T,
            onTooltipShow: () => {
                (L(!0),
                    i &&
                        (N({ emojiNode: n, isCustomEmoji: !0, nonce: O }),
                        (0, h.K)(y.EmojiInteractionPoint.CustomEmojiTooltipShown)));
            },
            children: (0, l.jsx)(c.D, {
                ...e,
                innerRef: _,
                onMouseEnter: () => {
                    e?.onMouseEnter?.();
                },
                onClick: i
                    ? (n) => {
                          (L(!1), M(!0), e?.onClick?.(n));
                      }
                    : void 0,
                onMouseLeave: () => {
                    S && (p.default.track(j.HAw.CLOSE_POPOUT, { nonce: O }), L(!1));
                },
                tag: "span",
                tabIndex: m ? 0 : -1,
                className: r()(k.qq, { [k._Y]: i, [k.gp]: n.jumboable }),
                children: P(),
            }),
        });
    }
    return i
        ? (0, l.jsx)(u.Y, {
              animation: u.Y.Animation.FADE,
              scrollBehavior: "close",
              align: "center",
              onRequestClose: () => {
                  (p.default.track(j.HAw.CLOSE_POPOUT, { nonce: O }), L(!1), M(!1));
              },
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: function (e) {
                  return (0, l.jsx)(g.iP, { ...e, node: n, refreshPositionKey: () => b(String(Date.now())), nonce: O });
              },
              positionKey: v,
              targetElementRef: _,
              children: w,
          })
        : w();
};
function N(e) {
    let { emojiNode: n, isCustomEmoji: t, nonce: l } = e;
    m.Ay.trackWithMetadata(j.HAw.EXPRESSION_TOOLTIP_VIEWED, {
        type: A.e.EMOJI_IN_MESSAGE_HOVER,
        expression_id: n.emojiId,
        expression_name: n.name,
        is_animated: n.animated,
        is_custom: t,
        nonce: l,
    });
}
