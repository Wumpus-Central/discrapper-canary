(n.d(t, { Z: () => y }), n(704826), n(35282), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(793030),
    o = n(755721),
    s = n(481060),
    l = n(596454),
    c = n(962293),
    u = n(328908),
    d = n(992970),
    _ = n(317951),
    f = n(135793),
    p = n(883998),
    h = n(576645),
    m = n(981631),
    g = n(388032),
    E = n(521338);
function b(e) {
    let { emojiConfetti: t } = e,
        n = i.useMemo(() => (null == t ? null : null == t.id ? t.optionallyDiverseSequence : t.name), [t]);
    return null == t
        ? (0, r.jsx)(s.EO4, {
              size: 'sm',
              color: 'currentColor'
          })
        : (0, r.jsx)(l.Z, {
              animated: !1,
              emojiId: t.id,
              emojiName: n
          });
}
let y = function (e) {
    let { channel: t } = e,
        n = (0, u.z8)(t.id),
        l = (0, u.OG)(t.id),
        { entitlement: y, numPotions: O } = (0, h.t6)(_.D1),
        v = i.useCallback(
            (e) => {
                (0, u.Hi)(e, t.id);
            },
            [t.id]
        ),
        I = i.useCallback(() => {
            (0, u.GA)(t.id);
        }, [t.id]),
        T = i.useMemo(() => (null != n ? n.name.replace(/_/g, ' ') : ''), [n]),
        S = i.useCallback(() => {
            (0, u.Hb)(t.id);
        }, [t.id]),
        A = i.useMemo(() => (null != O && O > 0 ? ((null == y ? void 0 : y.type) === m.qc2.DEVELOPER_GIFT ? g.intl.format(g.t['b+P6ra'], { numPotions: O }) : g.intl.format(g.t.RiQ4cn, { numPotions: O })) : g.intl.string(g.t.hvVgAQ)), [O, y]),
        [N, C] = i.useState(!1 === l);
    i.useEffect(() => {
        !1 === l && I();
    }, [l, I]);
    let R = i.useCallback(() => {
            C(!1);
        }, []),
        P = i.useCallback(
            (e) => {
                (v(e), C(!1));
            },
            [v]
        ),
        w = i.useCallback(() => {
            (0, f.s)({
                channelId: t.id,
                onRedeem: () => {},
                buttonUseState: 'apply',
                source: d.YD.MessageConfettiBar
            });
        }, [t.id]),
        D = i.useRef(null);
    return (0, r.jsxs)('div', {
        className: E.bar,
        children: [
            (0, r.jsx)(p.Z, {
                channel: t,
                shouldShow: N,
                onRequestClose: R,
                setEmojiConfetti: P,
                positionRef: D,
                position: 'top',
                align: 'left',
                children: () =>
                    (0, r.jsxs)(s.P3F, {
                        innerRef: D,
                        onClick: () => C(!N),
                        className: E.emojiSelectContainer,
                        children: [
                            (0, r.jsx)('div', {
                                className: E.emojiIconContainer,
                                children: (0, r.jsx)(b, { emojiConfetti: null != n ? n : void 0 })
                            }),
                            (0, r.jsx)(a.xv, {
                                variant: 'text-sm/medium',
                                children: null == n ? g.intl.string(g.t.mzfiGR) : g.intl.format(g.t.Hcd9OT, { emojiName: T })
                            })
                        ]
                    })
            }),
            (0, r.jsxs)('div', {
                className: E.end,
                children: [
                    (0, r.jsx)(o.zx, {
                        look: o.zx.Looks.LINK,
                        size: o.zx.Sizes.SMALL,
                        onClick: w,
                        color: o.zx.Colors.TRANSPARENT,
                        className: E.learnMoreButton,
                        children: (0, r.jsx)(a.xv, {
                            variant: 'text-sm/medium',
                            children: A
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: E.separator,
                        'aria-hidden': !0
                    }),
                    (0, r.jsx)(c.B, { onClick: S })
                ]
            })
        ]
    });
};
