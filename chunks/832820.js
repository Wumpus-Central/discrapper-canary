n.d(t, { Z: () => b }), n(704826), n(35282), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(793030),
    o = n(481060),
    s = n(596454),
    l = n(962293),
    c = n(328908),
    u = n(992970),
    d = n(317951),
    f = n(135793),
    _ = n(883998),
    p = n(576645),
    h = n(981631),
    m = n(388032),
    g = n(521338);
function E(e) {
    let { emojiConfetti: t } = e,
        n = i.useMemo(() => (null == t ? null : null == t.id ? t.optionallyDiverseSequence : t.name), [t]);
    return null == t
        ? (0, r.jsx)(o.EO4, {
              size: 'sm',
              color: 'currentColor'
          })
        : (0, r.jsx)(s.Z, {
              animated: !1,
              emojiId: t.id,
              emojiName: n
          });
}
let b = function (e) {
    let { channel: t } = e,
        n = (0, c.z8)(t.id),
        s = (0, c.OG)(t.id),
        { entitlement: b, numPotions: y } = (0, p.t6)(d.D1),
        O = i.useCallback(
            (e) => {
                (0, c.Hi)(e, t.id);
            },
            [t.id]
        ),
        v = i.useCallback(() => {
            (0, c.GA)(t.id);
        }, [t.id]),
        I = i.useMemo(() => (null != n ? n.name.replace(/_/g, ' ') : ''), [n]),
        S = i.useCallback(() => {
            (0, c.Hb)(t.id);
        }, [t.id]),
        T = i.useMemo(() => (null != y && y > 0 ? ((null == b ? void 0 : b.type) === h.qc2.DEVELOPER_GIFT ? m.intl.format(m.t['b+P6ra'], { numPotions: y }) : m.intl.format(m.t.RiQ4cn, { numPotions: y })) : m.intl.string(m.t.hvVgAQ)), [y, b]),
        [A, N] = i.useState(!1 === s);
    i.useEffect(() => {
        !1 === s && v();
    }, [s, v]);
    let C = i.useCallback(() => {
            N(!1);
        }, []),
        R = i.useCallback(
            (e) => {
                O(e), N(!1);
            },
            [O]
        ),
        P = i.useCallback(() => {
            (0, f.s)({
                channelId: t.id,
                onRedeem: () => {},
                buttonUseState: 'apply',
                source: u.YD.MessageConfettiBar
            });
        }, [t.id]);
    return (0, r.jsxs)('div', {
        className: g.bar,
        children: [
            (0, r.jsx)(_.Z, {
                channel: t,
                shouldShow: A,
                onRequestClose: C,
                setEmojiConfetti: R,
                position: 'top',
                align: 'left',
                children: () =>
                    (0, r.jsxs)(o.P3F, {
                        onClick: () => N(!A),
                        className: g.emojiSelectContainer,
                        children: [
                            (0, r.jsx)('div', {
                                className: g.emojiIconContainer,
                                children: (0, r.jsx)(E, { emojiConfetti: null != n ? n : void 0 })
                            }),
                            (0, r.jsx)(a.xv, {
                                variant: 'text-sm/medium',
                                children: null == n ? m.intl.string(m.t.mzfiGR) : m.intl.format(m.t.Hcd9OT, { emojiName: I })
                            })
                        ]
                    })
            }),
            (0, r.jsxs)('div', {
                className: g.end,
                children: [
                    (0, r.jsx)(o.zxk, {
                        look: o.zxk.Looks.LINK,
                        size: o.zxk.Sizes.SMALL,
                        onClick: P,
                        color: o.zxk.Colors.TRANSPARENT,
                        className: g.learnMoreButton,
                        children: (0, r.jsx)(a.xv, {
                            variant: 'text-sm/medium',
                            children: T
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: g.separator,
                        'aria-hidden': !0
                    }),
                    (0, r.jsx)(l.B, { onClick: S })
                ]
            })
        ]
    });
};
