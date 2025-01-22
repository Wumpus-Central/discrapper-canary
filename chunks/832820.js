var i = r(757143);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(793030),
    d = r(481060),
    f = r(596454),
    p = r(962293),
    h = r(63063),
    _ = r(328908),
    m = r(883998),
    g = r(981631),
    E = r(388032),
    v = r(648624);
function y(e) {
    let { channel: n } = e,
        r = (0, _.z8)(n.id),
        i = s.useCallback(
            (e) => {
                (0, _.Hi)(e, n.id);
            },
            [n.id]
        ),
        a = s.useMemo(() => (null != r ? r.name.replace(/_/g, ' ') : ''), [r]),
        l = s.useCallback(() => {
            (0, _.Hb)(n.id);
        }, [n.id]);
    return (0, o.jsxs)('div', {
        className: v.bar,
        children: [
            (0, o.jsxs)('div', {
                className: v.beginning,
                children: [
                    (0, o.jsx)('div', {
                        className: v.emojiButtonContainer,
                        children: (0, o.jsx)(b, {
                            channel: n,
                            setEmojiConfetti: i,
                            emojiConfetti: null != r ? r : void 0
                        })
                    }),
                    (0, o.jsx)(c.xv, {
                        variant: 'text-sm/medium',
                        color: 'interactive-hover',
                        children: null == r ? E.intl.string(E.t.mzfiGR) : E.intl.format(E.t.Hcd9OT, { emojiName: a })
                    })
                ]
            }),
            (0, o.jsxs)('div', {
                className: v.end,
                children: [
                    (0, o.jsx)(c.xv, {
                        variant: 'text-sm/medium',
                        children: E.intl.format(E.t['jerM9/'], { helpCenterLink: h.Z.getArticleURL(g.BhN.CONFETTI_POTION) })
                    }),
                    (0, o.jsx)(p.B, { onClick: l })
                ]
            })
        ]
    });
}
function b(e) {
    let { channel: n, setEmojiConfetti: r, emojiConfetti: i } = e,
        [a, l] = s.useState(!1),
        c = s.useCallback(() => {
            l(!1);
        }, []),
        p = s.useCallback(
            (e) => {
                r(e), l(!1);
            },
            [r]
        ),
        h = s.useMemo(() => (null == i ? null : null == i.id ? i.optionallyDiverseSequence : i.name), [i]);
    return (0, o.jsx)(m.Z, {
        channel: n,
        shouldShow: a,
        onRequestClose: c,
        setEmojiConfetti: p,
        position: 'top',
        align: 'left',
        children: () =>
            (0, o.jsx)(d.Button, {
                look: d.Button.Looks.BLANK,
                size: d.Button.Sizes.NONE,
                onClick: () => l(!a),
                className: u()(v.emojiButton, { [v.selected]: a }),
                innerClassName: v.emojiButtonInner,
                children:
                    null == i
                        ? (0, o.jsx)(d.ReactionIcon, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, o.jsx)(f.Z, {
                              animated: !1,
                              emojiId: i.id,
                              emojiName: h
                          })
            })
    });
}
n.Z = y;
