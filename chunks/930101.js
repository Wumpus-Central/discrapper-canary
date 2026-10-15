t.d(n, { H: () => I, X: () => E });
var l = t(477900),
    a = t(582128),
    r = t(503698),
    i = t.n(r),
    o = t(132500),
    s = t(683063),
    c = t(939249),
    u = t(922016),
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
function I(e) {
    let {
            node: n,
            tooltipPosition: t = x.Uk.position,
            enableClick: r = !0,
            focusable: o = !0,
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
    function I(e) {
        return (0, l.jsx)(s.u, {
            asset: A("jumbo"),
            title: n.name ?? "",
            body: r ? C.intl.string(C.t["515vjG"]) : "",
            ariaHidden: !0,
            ...x.Uk,
            position: t,
            shouldShow: !j,
            onTooltipShow: () => {
                r && N({ emojiNode: n, isCustomEmoji: !1 });
            },
            children: (0, l.jsx)(c.D, {
                ...e,
                innerRef: p,
                tag: "span",
                tabIndex: o ? 0 : -1,
                onClick: (n) => {
                    (y(!0), e?.onClick?.(n));
                },
                className: i()(k.qq, { [k._Y]: r, [k.gp]: n.jumboable }),
                children: A(),
            }),
        });
    }
    return r
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
              children: I,
          })
        : I();
}
let E = (e) => {
    let {
            node: n,
            tooltipPosition: t = x.Uk.position,
            enableClick: r = !0,
            focusable: m = !0,
            channelId: A,
            messageId: I,
        } = e,
        E = (0, f.n)(),
        [v, b] = a.useState(String(Date.now())),
        [S, L] = a.useState(!1),
        [M, T] = a.useState(!1),
        _ = a.useRef(null);
    function P(e) {
        return (0, l.jsx)(d.A, {
            emojiName: n.name,
            size: e ?? (n.jumboable ? "jumbo" : "default"),
            emojiId: n.emojiId,
            animated: n.animated,
            isInteracting: E,
            channelId: A,
            messageId: I,
        });
    }
    let O = (0, o.A)();
    function w(e) {
        return (0, l.jsx)(s.u, {
            asset: P("jumbo"),
            title: n.name,
            body: r ? C.intl.string(C.t["515vjG"]) : "",
            ariaHidden: !0,
            ...x.Uk,
            position: t,
            shouldShow: !M,
            onTooltipShow: () => {
                (L(!0),
                    r &&
                        (N({ emojiNode: n, isCustomEmoji: !0, nonce: O }),
                        (0, h.K)(y.EmojiInteractionPoint.CustomEmojiTooltipShown)));
            },
            children: (0, l.jsx)(c.D, {
                ...e,
                innerRef: _,
                onMouseEnter: () => {
                    e?.onMouseEnter?.();
                },
                onClick: r
                    ? (n) => {
                          (L(!1), T(!0), e?.onClick?.(n));
                      }
                    : void 0,
                onMouseLeave: () => {
                    S && (p.default.track(j.HAw.CLOSE_POPOUT, { nonce: O }), L(!1));
                },
                tag: "span",
                tabIndex: m ? 0 : -1,
                className: i()(k.qq, { [k._Y]: r, [k.gp]: n.jumboable }),
                children: P(),
            }),
        });
    }
    return r
        ? (0, l.jsx)(u.Y, {
              animation: u.Y.Animation.FADE,
              scrollBehavior: "close",
              align: "center",
              onRequestClose: () => {
                  (p.default.track(j.HAw.CLOSE_POPOUT, { nonce: O }), L(!1), T(!1));
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
