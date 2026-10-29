t.d(n, { H: () => I, X: () => k });
var l = t(477900),
    a = t(582128),
    i = t(503698),
    r = t.n(i),
    s = t(132500),
    o = t(683063),
    c = t(939249),
    u = t(265872),
    d = t(788026),
    m = t(666860),
    h = t(189551),
    p = t(174459),
    g = t(639245),
    f = t(188645),
    x = t(516287),
    j = t(652215),
    A = t(307731),
    y = t(202541),
    C = t(105292),
    E = t(17508);
function I(e) {
    let {
            node: n,
            tooltipPosition: t = f.Uk.position,
            enableClick: i = !0,
            focusable: s = !0,
            channelId: m,
            messageId: h,
        } = e,
        p = a.useRef(null),
        x = n.originalMatch?.[0],
        [j, A] = a.useState(!1);
    function y(e) {
        return (0, l.jsx)(d.A, {
            emojiName: n.name,
            size: e ?? (n.jumboable ? "jumbo" : "default"),
            src: n.src,
            alt: x,
            animated: !1,
            channelId: m,
            messageId: h,
        });
    }
    function I(e) {
        return (0, l.jsx)(o.u, {
            asset: y("jumbo"),
            title: n.name ?? "",
            titleLineClamp: 1,
            body: i ? C.intl.string(C.t["515vjG"]) : "",
            ariaHidden: !0,
            ...f.Uk,
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
                    (A(!0), e?.onClick?.(n));
                },
                className: r()(E.qq, { [E._Y]: i, [E.gp]: n.jumboable }),
                children: y(),
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
                  A(!1);
              },
              renderPopout: (e) => (0, l.jsx)(g.MV, { ...e, node: n }),
              targetElementRef: p,
              children: I,
          })
        : I();
}
let k = (e) => {
    let {
            node: n,
            tooltipPosition: t = f.Uk.position,
            enableClick: i = !0,
            focusable: m = !0,
            channelId: y,
            messageId: I,
        } = e,
        k = (0, x.n)(),
        [v, b] = a.useState(String(Date.now())),
        [S, M] = a.useState(!1),
        [L, T] = a.useState(!1),
        _ = a.useRef(null);
    function w(e) {
        return (0, l.jsx)(d.A, {
            emojiName: n.name,
            size: e ?? (n.jumboable ? "jumbo" : "default"),
            emojiId: n.emojiId,
            animated: n.animated,
            isInteracting: k,
            channelId: y,
            messageId: I,
        });
    }
    let O = (0, s.A)();
    function P(e) {
        return (0, l.jsx)(o.u, {
            asset: w("jumbo"),
            title: n.name,
            titleLineClamp: 1,
            body: i ? C.intl.string(C.t["515vjG"]) : "",
            ariaHidden: !0,
            ...f.Uk,
            position: t,
            shouldShow: !L,
            onTooltipShow: () => {
                (M(!0),
                    i &&
                        (N({ emojiNode: n, isCustomEmoji: !0, nonce: O }),
                        (0, h.K)(A.EmojiInteractionPoint.CustomEmojiTooltipShown)));
            },
            children: (0, l.jsx)(c.D, {
                ...e,
                innerRef: _,
                onMouseEnter: () => {
                    e?.onMouseEnter?.();
                },
                onClick: i
                    ? (n) => {
                          (M(!1), T(!0), e?.onClick?.(n));
                      }
                    : void 0,
                onMouseLeave: () => {
                    S && (p.default.track(j.HAw.CLOSE_POPOUT, { nonce: O }), M(!1));
                },
                tag: "span",
                tabIndex: m ? 0 : -1,
                className: r()(E.qq, { [E._Y]: i, [E.gp]: n.jumboable }),
                children: w(),
            }),
        });
    }
    return i
        ? (0, l.jsx)(u.Y, {
              animation: u.Y.Animation.FADE,
              scrollBehavior: "close",
              align: "center",
              onRequestClose: () => {
                  (p.default.track(j.HAw.CLOSE_POPOUT, { nonce: O }), M(!1), T(!1));
              },
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: function (e) {
                  return (0, l.jsx)(g.iP, { ...e, node: n, refreshPositionKey: () => b(String(Date.now())), nonce: O });
              },
              positionKey: v,
              targetElementRef: _,
              children: P,
          })
        : P();
};
function N(e) {
    let { emojiNode: n, isCustomEmoji: t, nonce: l } = e;
    m.Ay.trackWithMetadata(j.HAw.EXPRESSION_TOOLTIP_VIEWED, {
        type: y.e.EMOJI_IN_MESSAGE_HOVER,
        expression_id: n.emojiId,
        expression_name: n.name,
        is_animated: n.animated,
        is_custom: t,
        nonce: l,
    });
}
