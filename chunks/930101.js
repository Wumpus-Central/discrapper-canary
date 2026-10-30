t.d(n, { H: () => C, X: () => E });
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
    x = t(639245),
    g = t(188645),
    j = t(516287),
    f = t(652215),
    A = t(307731),
    y = t(202541),
    k = t(105292),
    I = t(17508);
function C(e) {
    let {
            node: n,
            tooltipPosition: t = g.Uk.position,
            enableClick: i = !0,
            focusable: s = !0,
            channelId: m,
            messageId: h,
        } = e,
        p = a.useRef(null),
        j = n.originalMatch?.[0],
        [f, A] = a.useState(!1);
    function y(e) {
        return (0, l.jsx)(d.A, {
            emojiName: n.name,
            size: e ?? (n.jumboable ? "jumbo" : "default"),
            src: n.src,
            alt: j,
            animated: !1,
            channelId: m,
            messageId: h,
        });
    }
    function C(e) {
        return (0, l.jsx)(o.u, {
            asset: y("jumbo"),
            title: n.name ?? "",
            titleLineClamp: 1,
            body: i ? k.intl.string(k.t["515vjG"]) : "",
            ariaHidden: !0,
            ...g.Uk,
            position: t,
            shouldShow: !f,
            onTooltipShow: () => {
                i && v({ emojiNode: n, isCustomEmoji: !1 });
            },
            children: (0, l.jsx)(c.D, {
                ...e,
                innerRef: p,
                tag: "span",
                tabIndex: s ? 0 : -1,
                onClick: (n) => {
                    (A(!0), e?.onClick?.(n));
                },
                className: r()(I.qq, { [I._Y]: i, [I.gp]: n.jumboable }),
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
              renderPopout: (e) => (0, l.jsx)(x.MV, { ...e, node: n }),
              targetElementRef: p,
              children: C,
          })
        : C();
}
let E = (e) => {
    let {
            node: n,
            tooltipPosition: t = g.Uk.position,
            enableClick: i = !0,
            focusable: m = !0,
            channelId: y,
            messageId: C,
        } = e,
        E = (0, j.n)(),
        [N, b] = a.useState(String(Date.now())),
        [S, M] = a.useState(!1),
        [_, L] = a.useState(!1),
        w = a.useRef(null);
    function T(e) {
        return (0, l.jsx)(d.A, {
            emojiName: n.name,
            size: e ?? (n.jumboable ? "jumbo" : "default"),
            emojiId: n.emojiId,
            animated: n.animated,
            isInteracting: E,
            channelId: y,
            messageId: C,
        });
    }
    let O = (0, s.A)();
    function P(e) {
        return (0, l.jsx)(o.u, {
            asset: T("jumbo"),
            title: n.name,
            titleLineClamp: 1,
            body: i ? k.intl.string(k.t["515vjG"]) : "",
            ariaHidden: !0,
            ...g.Uk,
            position: t,
            shouldShow: !_,
            onTooltipShow: () => {
                (M(!0),
                    i &&
                        (v({ emojiNode: n, isCustomEmoji: !0, nonce: O }),
                        (0, h.K)(A.EmojiInteractionPoint.CustomEmojiTooltipShown)));
            },
            children: (0, l.jsx)(c.D, {
                ...e,
                innerRef: w,
                onMouseEnter: () => {
                    e?.onMouseEnter?.();
                },
                onClick: i
                    ? (n) => {
                          (M(!1), L(!0), e?.onClick?.(n));
                      }
                    : void 0,
                onMouseLeave: () => {
                    S && (p.default.track(f.HAw.CLOSE_POPOUT, { nonce: O }), M(!1));
                },
                tag: "span",
                tabIndex: m ? 0 : -1,
                className: r()(I.qq, { [I._Y]: i, [I.gp]: n.jumboable }),
                children: T(),
            }),
        });
    }
    return i
        ? (0, l.jsx)(u.Y, {
              animation: u.Y.Animation.FADE,
              scrollBehavior: "close",
              align: "center",
              onRequestClose: () => {
                  (p.default.track(f.HAw.CLOSE_POPOUT, { nonce: O }), M(!1), L(!1));
              },
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: function (e) {
                  return (0, l.jsx)(x.iP, { ...e, node: n, refreshPositionKey: () => b(String(Date.now())), nonce: O });
              },
              positionKey: N,
              targetElementRef: w,
              children: P,
          })
        : P();
};
function v(e) {
    let { emojiNode: n, isCustomEmoji: t, nonce: l } = e;
    m.Ay.trackWithMetadata(f.HAw.EXPRESSION_TOOLTIP_VIEWED, {
        type: y.e.EMOJI_IN_MESSAGE_HOVER,
        expression_id: n.emojiId,
        expression_name: n.name,
        is_animated: n.animated,
        is_custom: t,
        nonce: l,
    });
}
