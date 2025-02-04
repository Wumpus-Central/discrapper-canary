n.d(t, { Z: () => I }), n(757143), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(793030),
    l = n(481060),
    u = n(596454),
    c = n(962293),
    d = n(328908),
    f = n(992970),
    _ = n(317951),
    p = n(135793),
    h = n(883998),
    m = n(576645),
    g = n(981631),
    E = n(388032),
    v = n(648624);
function y(e) {
    let { emojiConfetti: t } = e,
        n = r.useMemo(() => (null == t ? null : null == t.id ? t.optionallyDiverseSequence : t.name), [t]);
    return (0, i.jsx)(i.Fragment, {
        children:
            null == t
                ? (0, i.jsx)(l.EO4, {
                      size: 'sm',
                      color: 'currentColor'
                  })
                : (0, i.jsx)(u.Z, {
                      animated: !1,
                      emojiId: t.id,
                      emojiName: n
                  })
    });
}
let I = function (e) {
    let { channel: t } = e,
        n = (0, d.z8)(t.id),
        a = (0, d.OG)(t.id),
        { entitlement: u, numPotions: I } = (0, m.t6)(_.D1),
        b = r.useCallback(
            (e) => {
                (0, d.Hi)(e, t.id);
            },
            [t.id]
        ),
        T = r.useCallback(() => {
            (0, d.GA)(t.id);
        }, [t.id]),
        S = r.useMemo(() => (null != n ? n.name.replace(/_/g, ' ') : ''), [n]),
        A = r.useCallback(() => {
            (0, d.Hb)(t.id);
        }, [t.id]),
        N = r.useMemo(() => (null != I && I > 0 ? ((null == u ? void 0 : u.type) === g.qc2.DEVELOPER_GIFT ? E.intl.format(E.t['b+P6ra'], { numPotions: I }) : E.intl.format(E.t.RiQ4cn, { numPotions: I })) : E.intl.string(E.t.hvVgAQ)), [I, u]),
        [C, R] = r.useState(!1 === a);
    r.useEffect(() => {
        !1 === a && T();
    }, [a, T]);
    let O = r.useCallback(() => {
            R(!1);
        }, []),
        D = r.useCallback(
            (e) => {
                b(e), R(!1);
            },
            [b]
        ),
        x = r.useCallback(() => {
            (0, p.s)({
                channelId: t.id,
                onRedeem: () => {},
                buttonUseState: 'apply',
                source: f.YD.MessageConfettiBar
            });
        }, [t.id]);
    return (0, i.jsxs)('div', {
        className: v.bar,
        children: [
            (0, i.jsx)(h.Z, {
                channel: t,
                shouldShow: C,
                onRequestClose: O,
                setEmojiConfetti: D,
                position: 'top',
                align: 'left',
                children: () =>
                    (0, i.jsxs)(l.P3F, {
                        onClick: () => R(!C),
                        className: s()(v.emojiSelectContainer),
                        children: [
                            (0, i.jsx)('div', {
                                className: v.emojiIconContainer,
                                children: (0, i.jsx)(y, { emojiConfetti: null != n ? n : void 0 })
                            }),
                            (0, i.jsx)(o.xv, {
                                variant: 'text-sm/medium',
                                children: null == n ? E.intl.string(E.t.mzfiGR) : E.intl.format(E.t.Hcd9OT, { emojiName: S })
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: v.end,
                children: [
                    (0, i.jsx)(l.zxk, {
                        look: l.zxk.Looks.LINK,
                        size: l.zxk.Sizes.SMALL,
                        onClick: x,
                        color: l.zxk.Colors.TRANSPARENT,
                        className: v.learnMoreButton,
                        children: (0, i.jsx)(o.xv, {
                            variant: 'text-sm/medium',
                            children: N
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: v.separator,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(c.B, { onClick: A })
                ]
            })
        ]
    });
};
