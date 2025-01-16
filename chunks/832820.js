var i = r(47120);
var a = r(757143);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(793030),
    d = r(481060),
    f = r(596454),
    _ = r(962293),
    h = r(63063),
    p = r(883998),
    m = r(981631),
    g = r(388032),
    E = r(648624);
function v(e) {
    let { channel: n } = e,
        r = o.useCallback(() => {}, []),
        [i, a] = o.useState(),
        l = o.useMemo(() => (null != i ? i.name.replace(/_/g, ' ') : ''), [i]);
    return (0, s.jsxs)('div', {
        className: E.bar,
        children: [
            (0, s.jsxs)('div', {
                className: E.beginning,
                children: [
                    (0, s.jsx)('div', {
                        className: E.emojiButtonContainer,
                        children: (0, s.jsx)(I, {
                            channel: n,
                            setEmojiConfetti: a,
                            emojiConfetti: null != i ? i : void 0
                        })
                    }),
                    (0, s.jsx)(c.xv, {
                        variant: 'text-sm/medium',
                        color: 'interactive-hover',
                        children: null == i ? g.intl.string(g.t.mzfiGR) : g.intl.format(g.t.Hcd9OT, { emojiName: l })
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: E.end,
                children: [
                    (0, s.jsx)(c.xv, {
                        variant: 'text-sm/medium',
                        children: g.intl.format(g.t['jerM9/'], { helpCenterLink: h.Z.getArticleURL(m.BhN.CONFETTI_POTION) })
                    }),
                    (0, s.jsx)(_.B, { onClick: r })
                ]
            })
        ]
    });
}
function I(e) {
    let { channel: n, setEmojiConfetti: r, emojiConfetti: i } = e,
        [a, l] = o.useState(!1),
        c = o.useCallback(() => {
            l(!1);
        }, []),
        _ = o.useCallback(
            (e) => {
                r(e), l(!1);
            },
            [r]
        ),
        h = o.useMemo(() => (null == i ? null : null == i.id ? i.optionallyDiverseSequence : i.name), [i]);
    return (0, s.jsx)(p.Z, {
        channel: n,
        shouldShow: a,
        onRequestClose: c,
        setEmojiConfetti: _,
        position: 'top',
        align: 'left',
        children: () =>
            (0, s.jsx)(d.Button, {
                look: d.Button.Looks.BLANK,
                size: d.Button.Sizes.NONE,
                onClick: () => l(!a),
                className: u()(E.emojiButton, { [E.selected]: a }),
                innerClassName: E.emojiButtonInner,
                children:
                    null == i
                        ? (0, s.jsx)(d.ReactionIcon, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, s.jsx)(f.Z, {
                              animated: !1,
                              emojiId: i.id,
                              emojiName: h
                          })
            })
    });
}
n.Z = v;
