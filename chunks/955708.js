n.d(e, {
    default: () => N,
    x: () => h
}),
    n(47120);
var s,
    i = n(200651),
    r = n(192379),
    o = n(481060),
    a = n(378298),
    c = n(473092),
    l = n(684471),
    d = n(745982),
    u = n(463439),
    E = n(388032),
    _ = n(273751),
    h = (((s = {})[(s.INTRO = 0)] = 'INTRO'), (s[(s.SAFETY_TIPS = 1)] = 'SAFETY_TIPS'), (s[(s.TAKE_ACTION = 2)] = 'TAKE_ACTION'), s);
let N = (t) => {
    let { warningId: e, warningType: n, senderId: s, modalProps: h, channelId: N } = t,
        [x, C] = r.useState(0),
        I = r.useMemo(
            () => ({
                channelId: N,
                senderId: s,
                warningId: e,
                warningType: n,
                isNudgeWarning: !1
            }),
            [N, s, e, n]
        );
    r.useEffect(() => {
        (0, c.KQ)({
            ...I,
            viewName: c.pb.SAFETY_TAKEOVER_MODAL
        });
    }, [I]);
    let A = r.useCallback(
            (t) => {
                (0, c.qc)({
                    ...I,
                    cta: t
                });
            },
            [I]
        ),
        [T, m] = r.useState(!1);
    function g(t) {
        C(t);
    }
    return (0, i.jsxs)(o.Y0X, {
        transitionState: h.transitionState,
        children: [
            (0, i.jsx)('div', {
                className: _.container,
                children: (0, i.jsxs)(o.MyZ, {
                    width: 440,
                    activeSlide: x,
                    centered: !1,
                    overflow: 'visible',
                    contentDisplay: 'flex',
                    children: [
                        (0, i.jsx)(o.Mi4, {
                            id: 0,
                            children: (0, i.jsx)(l.Z, {
                                warningId: e,
                                senderId: s,
                                trackAnalyticsEvent: A,
                                onNavigate: g
                            })
                        }),
                        (0, i.jsx)(o.Mi4, {
                            id: 1,
                            children: (0, i.jsx)(d.Z, {
                                warningId: e,
                                senderId: s,
                                trackAnalyticsEvent: A
                            })
                        }),
                        (0, i.jsx)(o.Mi4, {
                            id: 2,
                            children: (0, i.jsx)(u.Z, {
                                warningId: e,
                                senderId: s,
                                trackAnalyticsEvent: A,
                                channelId: N,
                                hasReported: T,
                                onReport: function () {
                                    m(!0);
                                }
                            })
                        })
                    ]
                })
            }),
            (0, i.jsxs)(o.mzw, {
                className: _.footer,
                children: [
                    (0, i.jsx)(o.zxk, {
                        className: _.footerButton,
                        look: o.zxk.Looks.LINK,
                        color: o.zxk.Colors.CUSTOM,
                        size: o.zxk.Sizes.MIN,
                        onClick: function () {
                            h.onClose(), (0, a.T)(N, [e]), A(c.NM.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        children: E.intl.string(E.t.cpT0Cg)
                    }),
                    0 !== x &&
                        (0, i.jsx)(o.zxk, {
                            className: _.footerButton,
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.CUSTOM,
                            size: o.zxk.Sizes.MIN,
                            onClick: () => g(0),
                            children: E.intl.string(E.t['13/7kZ'])
                        })
                ]
            })
        ]
    });
};
