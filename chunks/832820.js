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
    m = r(317951),
    g = r(883998),
    E = r(576645),
    v = r(981631),
    y = r(388032),
    b = r(648624);
function I(e) {
    let { channel: n } = e,
        r = (0, _.z8)(n.id),
        { entitlement: i, numPotions: a } = (0, E.t6)(m.D1),
        l = s.useCallback(
            (e) => {
                (0, _.Hi)(e, n.id);
            },
            [n.id]
        ),
        u = s.useMemo(() => (null != r ? r.name.replace(/_/g, ' ') : ''), [r]),
        d = s.useCallback(() => {
            (0, _.Hb)(n.id);
        }, [n.id]),
        f = s.useMemo(() => {
            if (null != a && a > 0) return (null == i ? void 0 : i.type) === v.qc2.DEVELOPER_GIFT ? y.intl.format(y.t['b+P6ra'], { numPotions: a }) : y.intl.format(y.t.RiQ4cn, { numPotions: a });
            return y.intl.format(y.t['jerM9/'], { helpCenterLink: h.Z.getArticleURL(v.BhN.CONFETTI_POTION) });
        }, [a, i]);
    return (0, o.jsxs)('div', {
        className: b.bar,
        children: [
            (0, o.jsxs)('div', {
                className: b.beginning,
                children: [
                    (0, o.jsx)('div', {
                        className: b.emojiButtonContainer,
                        children: (0, o.jsx)(T, {
                            channel: n,
                            setEmojiConfetti: l,
                            emojiConfetti: null != r ? r : void 0
                        })
                    }),
                    (0, o.jsx)(c.xv, {
                        variant: 'text-sm/medium',
                        color: 'interactive-hover',
                        children: null == r ? y.intl.string(y.t.mzfiGR) : y.intl.format(y.t.Hcd9OT, { emojiName: u })
                    })
                ]
            }),
            (0, o.jsxs)('div', {
                className: b.end,
                children: [
                    (0, o.jsx)(c.xv, {
                        variant: 'text-sm/medium',
                        children: f
                    }),
                    (0, o.jsx)(p.B, { onClick: d })
                ]
            })
        ]
    });
}
function T(e) {
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
    return (0, o.jsx)(g.Z, {
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
                className: u()(b.emojiButton, { [b.selected]: a }),
                innerClassName: b.emojiButtonInner,
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
n.Z = I;
