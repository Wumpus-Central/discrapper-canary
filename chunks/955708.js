e.r(n),
    e.d(n, {
        InappropriateConversationModalSlideKeys: function () {
            return r;
        }
    }),
    e(47120);
var r,
    o,
    i = e(200651),
    s = e(192379),
    a = e(481060),
    c = e(378298),
    l = e(473092),
    u = e(684471),
    d = e(745982),
    E = e(463439),
    N = e(388032),
    h = e(515562);
((o = r || (r = {}))[(o.INTRO = 0)] = 'INTRO'), (o[(o.SAFETY_TIPS = 1)] = 'SAFETY_TIPS'), (o[(o.TAKE_ACTION = 2)] = 'TAKE_ACTION');
n.default = (t) => {
    let { warningId: n, warningType: e, senderId: r, modalProps: o, channelId: f } = t,
        [_, I] = s.useState(0),
        C = s.useMemo(
            () => ({
                channelId: f,
                senderId: r,
                warningId: n,
                warningType: e,
                isNudgeWarning: !1
            }),
            [f, r, n, e]
        );
    s.useEffect(() => {
        (0, l.KQ)({
            ...C,
            viewName: l.pb.SAFETY_TAKEOVER_MODAL
        });
    }, [C]);
    let T = s.useCallback(
            (t) => {
                (0, l.qc)({
                    ...C,
                    cta: t
                });
            },
            [C]
        ),
        [A, p] = s.useState(!1);
    function g(t) {
        I(t);
    }
    return (0, i.jsxs)(a.ModalRoot, {
        transitionState: o.transitionState,
        children: [
            (0, i.jsx)('div', {
                className: h.container,
                children: (0, i.jsxs)(a.Slides, {
                    width: 440,
                    activeSlide: _,
                    centered: !1,
                    overflow: 'visible',
                    contentDisplay: 'flex',
                    children: [
                        (0, i.jsx)(a.Slide, {
                            id: 0,
                            children: (0, i.jsx)(u.Z, {
                                warningId: n,
                                senderId: r,
                                trackAnalyticsEvent: T,
                                onNavigate: g
                            })
                        }),
                        (0, i.jsx)(a.Slide, {
                            id: 1,
                            children: (0, i.jsx)(d.Z, {
                                warningId: n,
                                senderId: r,
                                trackAnalyticsEvent: T
                            })
                        }),
                        (0, i.jsx)(a.Slide, {
                            id: 2,
                            children: (0, i.jsx)(E.Z, {
                                warningId: n,
                                senderId: r,
                                trackAnalyticsEvent: T,
                                channelId: f,
                                hasReported: A,
                                onReport: function () {
                                    p(!0);
                                }
                            })
                        })
                    ]
                })
            }),
            (0, i.jsxs)(a.ModalFooter, {
                className: h.footer,
                children: [
                    (0, i.jsx)(a.Button, {
                        className: h.footerButton,
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.CUSTOM,
                        size: a.Button.Sizes.MIN,
                        onClick: function () {
                            o.onClose(), (0, c.T)(f, [n]), T(l.NM.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        children: N.intl.string(N.t.cpT0Cg)
                    }),
                    0 !== _ &&
                        (0, i.jsx)(a.Button, {
                            className: h.footerButton,
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.CUSTOM,
                            size: a.Button.Sizes.MIN,
                            onClick: () => g(0),
                            children: N.intl.string(N.t['13/7kZ'])
                        })
                ]
            })
        ]
    });
};
