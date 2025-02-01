n.d(t, { Z: () => y }), n(757143), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(793030),
    l = n(481060),
    u = n(596454),
    c = n(962293),
    d = n(328908),
    f = n(317951),
    _ = n(135793),
    p = n(883998),
    h = n(576645),
    m = n(981631),
    g = n(388032),
    E = n(648624);
function v(e) {
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
let y = function (e) {
    let { channel: t } = e,
        n = (0, d.z8)(t.id),
        a = (0, d.OG)(t.id),
        { entitlement: u, numPotions: y } = (0, h.t6)(f.D1),
        I = r.useCallback(
            (e) => {
                (0, d.Hi)(e, t.id);
            },
            [t.id]
        ),
        T = r.useCallback(() => {
            (0, d.GA)(t.id);
        }, [t.id]),
        b = r.useMemo(() => (null != n ? n.name.replace(/_/g, ' ') : ''), [n]),
        S = r.useCallback(() => {
            (0, d.Hb)(t.id);
        }, [t.id]),
        A = r.useMemo(() => (null != y && y > 0 ? ((null == u ? void 0 : u.type) === m.qc2.DEVELOPER_GIFT ? g.intl.format(g.t['b+P6ra'], { numPotions: y }) : g.intl.format(g.t.RiQ4cn, { numPotions: y })) : g.intl.string(g.t.hvVgAQ)), [y, u]),
        [N, C] = r.useState(!1 === a);
    r.useEffect(() => {
        !1 === a && T();
    }, [a, T]);
    let R = r.useCallback(() => {
            C(!1);
        }, []),
        O = r.useCallback(
            (e) => {
                I(e), C(!1);
            },
            [I]
        ),
        D = r.useCallback(() => {
            (0, _.s)({
                channelId: t.id,
                onRedeem: () => {},
                buttonUseState: 'apply'
            });
        }, [t.id]);
    return (0, i.jsxs)('div', {
        className: E.bar,
        children: [
            (0, i.jsx)(p.Z, {
                channel: t,
                shouldShow: N,
                onRequestClose: R,
                setEmojiConfetti: O,
                position: 'top',
                align: 'left',
                children: () =>
                    (0, i.jsxs)(l.P3F, {
                        onClick: () => C(!N),
                        className: s()(E.emojiSelectContainer),
                        children: [
                            (0, i.jsx)('div', {
                                className: E.emojiIconContainer,
                                children: (0, i.jsx)(v, { emojiConfetti: null != n ? n : void 0 })
                            }),
                            (0, i.jsx)(o.xv, {
                                variant: 'text-sm/medium',
                                children: null == n ? g.intl.string(g.t.mzfiGR) : g.intl.format(g.t.Hcd9OT, { emojiName: b })
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: E.end,
                children: [
                    (0, i.jsx)(l.zxk, {
                        look: l.zxk.Looks.LINK,
                        size: l.zxk.Sizes.SMALL,
                        onClick: D,
                        color: l.zxk.Colors.TRANSPARENT,
                        className: E.learnMoreButton,
                        children: (0, i.jsx)(o.xv, {
                            variant: 'text-sm/medium',
                            children: A
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: E.separator,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(c.B, { onClick: S })
                ]
            })
        ]
    });
};
