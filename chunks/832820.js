n.d(t, { Z: () => y }), n(757143), n(301563), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(481060),
    c = n(596454),
    u = n(962293),
    d = n(328908),
    f = n(992970),
    _ = n(317951),
    p = n(135793),
    h = n(883998),
    g = n(576645),
    m = n(981631),
    E = n(388032),
    v = n(646406);
function b(e) {
    let { emojiConfetti: t } = e,
        n = i.useMemo(() => (null == t ? null : null == t.id ? t.optionallyDiverseSequence : t.name), [t]);
    return null == t
        ? (0, r.jsx)(l.EO4, {
              size: 'sm',
              color: 'currentColor'
          })
        : (0, r.jsx)(c.Z, {
              animated: !1,
              emojiId: t.id,
              emojiName: n
          });
}
let y = function (e) {
    let { channel: t } = e,
        n = (0, d.z8)(t.id),
        o = (0, d.OG)(t.id),
        { entitlement: c, numPotions: y } = (0, g.t6)(_.D1),
        O = i.useCallback(
            (e) => {
                (0, d.Hi)(e, t.id);
            },
            [t.id]
        ),
        S = i.useCallback(() => {
            (0, d.GA)(t.id);
        }, [t.id]),
        I = i.useMemo(() => (null != n ? n.name.replace(/_/g, ' ') : ''), [n]),
        T = i.useCallback(() => {
            (0, d.Hb)(t.id);
        }, [t.id]),
        N = i.useMemo(() => (null != y && y > 0 ? ((null == c ? void 0 : c.type) === m.qc2.DEVELOPER_GIFT ? E.NW.format(E.t['b+P6ra'], { numPotions: y }) : E.NW.format(E.t.RiQ4cn, { numPotions: y })) : E.NW.string(E.t.hvVgAQ)), [y, c]),
        [A, C] = i.useState(!1 === o);
    i.useEffect(() => {
        !1 === o && S();
    }, [o, S]);
    let R = i.useCallback(() => {
            C(!1);
        }, []),
        P = i.useCallback(
            (e) => {
                O(e), C(!1);
            },
            [O]
        ),
        D = i.useCallback(() => {
            (0, p.s)({
                channelId: t.id,
                onRedeem: () => {},
                buttonUseState: 'apply',
                source: f.YD.MessageConfettiBar
            });
        }, [t.id]);
    return (0, r.jsxs)('div', {
        className: v.bar,
        children: [
            (0, r.jsx)(h.Z, {
                channel: t,
                shouldShow: A,
                onRequestClose: R,
                setEmojiConfetti: P,
                position: 'top',
                align: 'left',
                children: () =>
                    (0, r.jsxs)(l.P3F, {
                        onClick: () => C(!A),
                        className: a()(v.emojiSelectContainer),
                        children: [
                            (0, r.jsx)('div', {
                                className: v.emojiIconContainer,
                                children: (0, r.jsx)(b, { emojiConfetti: null != n ? n : void 0 })
                            }),
                            (0, r.jsx)(s.xv, {
                                variant: 'text-sm/medium',
                                children: null == n ? E.NW.string(E.t.mzfiGR) : E.NW.format(E.t.Hcd9OT, { emojiName: I })
                            })
                        ]
                    })
            }),
            (0, r.jsxs)('div', {
                className: v.end,
                children: [
                    (0, r.jsx)(l.zxk, {
                        look: l.zxk.Looks.LINK,
                        size: l.zxk.Sizes.SMALL,
                        onClick: D,
                        color: l.zxk.Colors.TRANSPARENT,
                        className: v.learnMoreButton,
                        children: (0, r.jsx)(s.xv, {
                            variant: 'text-sm/medium',
                            children: N
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: v.separator,
                        'aria-hidden': !0
                    }),
                    (0, r.jsx)(u.B, { onClick: T })
                ]
            })
        ]
    });
};
