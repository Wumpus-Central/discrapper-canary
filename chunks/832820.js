n.d(t, { Z: () => v }), n(757143), n(301563), n(47120);
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
    g = n(388032),
    m = n(646406);
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
let v = function (e) {
    let { channel: t } = e,
        n = (0, c.z8)(t.id),
        s = (0, c.OG)(t.id),
        { entitlement: v, numPotions: b } = (0, p.t6)(d.D1),
        y = i.useCallback(
            (e) => {
                (0, c.Hi)(e, t.id);
            },
            [t.id]
        ),
        O = i.useCallback(() => {
            (0, c.GA)(t.id);
        }, [t.id]),
        S = i.useMemo(() => (null != n ? n.name.replace(/_/g, ' ') : ''), [n]),
        I = i.useCallback(() => {
            (0, c.Hb)(t.id);
        }, [t.id]),
        T = i.useMemo(() => (null != b && b > 0 ? ((null == v ? void 0 : v.type) === h.qc2.DEVELOPER_GIFT ? g.NW.format(g.t['b+P6ra'], { numPotions: b }) : g.NW.format(g.t.RiQ4cn, { numPotions: b })) : g.NW.string(g.t.hvVgAQ)), [b, v]),
        [N, A] = i.useState(!1 === s);
    i.useEffect(() => {
        !1 === s && O();
    }, [s, O]);
    let C = i.useCallback(() => {
            A(!1);
        }, []),
        R = i.useCallback(
            (e) => {
                y(e), A(!1);
            },
            [y]
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
        className: m.bar,
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
                        className: m.emojiSelectContainer,
                        children: [
                            (0, r.jsx)('div', {
                                className: m.emojiIconContainer,
                                children: (0, r.jsx)(E, { emojiConfetti: null != n ? n : void 0 })
                            }),
                            (0, r.jsx)(o.xv, {
                                variant: 'text-sm/medium',
                                children: null == n ? g.NW.string(g.t.mzfiGR) : g.NW.format(g.t.Hcd9OT, { emojiName: S })
                            })
                        ]
                    })
            }),
            (0, r.jsxs)('div', {
                className: m.end,
                children: [
                    (0, r.jsx)(a.zxk, {
                        look: a.zxk.Looks.LINK,
                        size: a.zxk.Sizes.SMALL,
                        onClick: P,
                        color: a.zxk.Colors.TRANSPARENT,
                        className: m.learnMoreButton,
                        children: (0, r.jsx)(o.xv, {
                            variant: 'text-sm/medium',
                            children: T
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: m.separator,
                        'aria-hidden': !0
                    }),
                    (0, r.jsx)(l.B, { onClick: I })
                ]
            })
        ]
    });
};
