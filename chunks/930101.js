t.d(n, { H: () => C, X: () => k });
var l = t(477900),
    r = t(582128),
    a = t(503698),
    i = t.n(a),
    o = t(132500),
    s = t(683063),
    c = t(939249),
    u = t(922016),
    d = t(565645),
    m = t(95561),
    h = t(189551),
    p = t(174459),
    g = t(639245),
    f = t(188645),
    A = t(516287),
    y = t(652215),
    x = t(307731),
    E = t(202541),
    j = t(375708),
    I = t(17508);
function C(e) {
    let {
            node: n,
            tooltipPosition: t = f.Uk.position,
            enableClick: a = !0,
            focusable: o = !0,
            channelId: m,
            messageId: h,
        } = e,
        p = r.useRef(null),
        A = n.originalMatch?.[0],
        [y, x] = r.useState(!1);
    function E(e) {
        return (0, l.jsx)(d.A, {
            emojiName: n.name,
            size: e ?? (n.jumboable ? "jumbo" : "default"),
            src: n.src,
            alt: A,
            animated: !1,
            channelId: m,
            messageId: h,
        });
    }
    function C(e) {
        return (0, l.jsx)(s.u, {
            asset: E("jumbo"),
            title: n.name ?? "",
            body: a ? j.intl.string(j.t["515vjG"]) : "",
            ariaHidden: !0,
            ...f.Uk,
            position: t,
            shouldShow: !y,
            onTooltipShow: () => {
                a && v({ emojiNode: n, isCustomEmoji: !1 });
            },
            children: (0, l.jsx)(c.D, {
                ...e,
                innerRef: p,
                tag: "span",
                tabIndex: o ? 0 : -1,
                onClick: (n) => {
                    (x(!0), e?.onClick?.(n));
                },
                className: i()(I.qq, { [I._Y]: a, [I.gp]: n.jumboable }),
                children: E(),
            }),
        });
    }
    return a
        ? (0, l.jsx)(u.Y, {
              animation: u.Y.Animation.TRANSLATE,
              scrollBehavior: "close",
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              onRequestClose: () => {
                  x(!1);
              },
              renderPopout: (e) => (0, l.jsx)(g.MV, { ...e, node: n }),
              targetElementRef: p,
              children: C,
          })
        : C();
}
let k = (e) => {
    let {
            node: n,
            tooltipPosition: t = f.Uk.position,
            enableClick: a = !0,
            focusable: m = !0,
            channelId: E,
            messageId: C,
        } = e,
        k = (0, A.n)(),
        [N, S] = r.useState(String(Date.now())),
        [b, T] = r.useState(!1),
        [L, M] = r.useState(!1),
        _ = r.useRef(null);
    function P(e) {
        return (0, l.jsx)(d.A, {
            emojiName: n.name,
            size: e ?? (n.jumboable ? "jumbo" : "default"),
            emojiId: n.emojiId,
            animated: n.animated,
            isInteracting: k,
            channelId: E,
            messageId: C,
        });
    }
    let R = (0, o.A)();
    function O(e) {
        return (0, l.jsx)(s.u, {
            asset: P("jumbo"),
            title: n.name,
            body: a ? j.intl.string(j.t["515vjG"]) : "",
            ariaHidden: !0,
            ...f.Uk,
            position: t,
            shouldShow: !L,
            onTooltipShow: () => {
                (T(!0),
                    a &&
                        (v({ emojiNode: n, isCustomEmoji: !0, nonce: R }),
                        (0, h.K)(x.EmojiInteractionPoint.CustomEmojiTooltipShown)));
            },
            children: (0, l.jsx)(c.D, {
                ...e,
                innerRef: _,
                onMouseEnter: () => {
                    e?.onMouseEnter?.();
                },
                onClick: a
                    ? (n) => {
                          (T(!1), M(!0), e?.onClick?.(n));
                      }
                    : void 0,
                onMouseLeave: () => {
                    b && (p.default.track(y.HAw.CLOSE_POPOUT, { nonce: R }), T(!1));
                },
                tag: "span",
                tabIndex: m ? 0 : -1,
                className: i()(I.qq, { [I._Y]: a, [I.gp]: n.jumboable }),
                children: P(),
            }),
        });
    }
    return a
        ? (0, l.jsx)(u.Y, {
              animation: u.Y.Animation.FADE,
              scrollBehavior: "close",
              align: "center",
              onRequestClose: () => {
                  (p.default.track(y.HAw.CLOSE_POPOUT, { nonce: R }), T(!1), M(!1));
              },
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: function (e) {
                  return (0, l.jsx)(g.iP, { ...e, node: n, refreshPositionKey: () => S(String(Date.now())), nonce: R });
              },
              positionKey: N,
              targetElementRef: _,
              children: O,
          })
        : O();
};
function v(e) {
    let { emojiNode: n, isCustomEmoji: t, nonce: l } = e;
    m.Ay.trackWithMetadata(y.HAw.EXPRESSION_TOOLTIP_VIEWED, {
        type: E.e.EMOJI_IN_MESSAGE_HOVER,
        expression_id: n.emojiId,
        expression_name: n.name,
        is_animated: n.animated,
        is_custom: t,
        nonce: l,
    });
}
