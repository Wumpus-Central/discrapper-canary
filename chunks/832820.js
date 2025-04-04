n.d(t, { Z: () => b }), n(757143), n(301563), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(793030),
    a = n(481060),
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
    g = n(842321);
function E(e) {
    let { emojiConfetti: t } = e,
        n = i.useMemo(() => (null == t ? null : null == t.id ? t.optionallyDiverseSequence : t.name), [t]);
    return null == t
        ? (0, r.jsx)(a.EO4, {
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
        v = i.useCallback(
            (e) => {
                (0, c.Hi)(e, t.id);
            },
            [t.id]
        ),
        O = i.useCallback(() => {
            (0, c.GA)(t.id);
        }, [t.id]),
        I = i.useMemo(() => (null != n ? n.name.replace(/_/g, ' ') : ''), [n]),
        S = i.useCallback(() => {
            (0, c.Hb)(t.id);
        }, [t.id]),
        T = i.useMemo(() => (null != y && y > 0 ? ((null == b ? void 0 : b.type) === h.qc2.DEVELOPER_GIFT ? m.NW.format(m.t['b+P6ra'], { numPotions: y }) : m.NW.format(m.t.RiQ4cn, { numPotions: y })) : m.NW.string(m.t.hvVgAQ)), [y, b]),
        [N, A] = i.useState(!1 === s);
    i.useEffect(() => {
        !1 === s && O();
    }, [s, O]);
    let C = i.useCallback(() => {
            A(!1);
        }, []),
        R = i.useCallback(
            (e) => {
                v(e), A(!1);
            },
            [v]
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
                shouldShow: N,
                onRequestClose: C,
                setEmojiConfetti: R,
                position: 'top',
                align: 'left',
                children: () =>
                    (0, r.jsxs)(a.P3F, {
                        onClick: () => A(!N),
                        className: g.emojiSelectContainer,
                        children: [
                            (0, r.jsx)('div', {
                                className: g.emojiIconContainer,
                                children: (0, r.jsx)(E, { emojiConfetti: null != n ? n : void 0 })
                            }),
                            (0, r.jsx)(o.xv, {
                                variant: 'text-sm/medium',
                                children: null == n ? m.NW.string(m.t.mzfiGR) : m.NW.format(m.t.Hcd9OT, { emojiName: I })
                            })
                        ]
                    })
            }),
            (0, r.jsxs)('div', {
                className: g.end,
                children: [
                    (0, r.jsx)(a.zxk, {
                        look: a.zxk.Looks.LINK,
                        size: a.zxk.Sizes.SMALL,
                        onClick: P,
                        color: a.zxk.Colors.TRANSPARENT,
                        className: g.learnMoreButton,
                        children: (0, r.jsx)(o.xv, {
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
