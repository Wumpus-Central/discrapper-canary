var l = t(477900),
    i = t(582128),
    s = t(855986),
    r = t(265872),
    o = t(866665),
    a = t(939249),
    c = t(176781),
    u = t(834730),
    d = t(138017),
    x = t(715482),
    g = t(793574),
    p = t(253932),
    h = t(246356),
    A = t(46653),
    f = t(495867),
    C = t(977997),
    j = t(129230),
    m = t(419490),
    y = t(221501),
    I = t(887298),
    _ = t(696016),
    b = t(652215),
    E = t(636107),
    S = t(792996),
    v = t(899189);
let P = new WeakMap();
function w() {
    j.default.track(b.HAw.TOOLTIP_VIEWED, { type: "clips_in_use_chip" });
}
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channelId: n } = e,
                t = i.useRef(null),
                A = i.useRef(null),
                C = p.Q$.useSetting(),
                L = (0, s.bG)([m.Ay], () => m.Ay.getClipsWarningShown(n), [n]),
                { isNoticeVisible: N, dismissNotice: R } = (function (e, n) {
                    let t = (0, s.bG)([f.A], () => f.A.getRTCConnection()),
                        l = null == t || P.get(t) !== e,
                        [r, o] = i.useState(() => n && l),
                        [a, c] = i.useState(n);
                    return (
                        n !== a && (c(n), n && l && o(!0)),
                        i.useEffect(() => {
                            if (!r) return;
                            j.default.track(b.HAw.TOOLTIP_VIEWED, { type: "clips_in_use_chip_notice" });
                            let n = f.A.getRTCConnection();
                            null != n && P.set(n, e);
                            let t = setTimeout(() => o(!1), _.Vi);
                            return () => clearTimeout(t);
                        }, [r, e]),
                        { isNoticeVisible: r, dismissNotice: i.useCallback(() => o(!1), []) }
                    );
                })(n, L),
                T = S.intl.string(C ? E.default.Q0dnKS : E.default.PaU7x6),
                k = S.intl.string(C ? E.default.j56Eyx : E.default["1PDyrY"]);
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.Y, {
                        targetElementRef: t,
                        position: "bottom",
                        align: "right",
                        animation: r.Y.Animation.NONE,
                        onRequestOpen: function () {
                            (j.default.track(b.HAw.OPEN_POPOUT, {
                                type: "Clips In Call Voice Menu",
                                location: g.A.CLIPS_EA_IN_CALL_CLIPS_CHIP,
                            }),
                                R());
                        },
                        renderPopout: (e) => {
                            let { closePopout: n } = e;
                            return (0, l.jsx)(h.A, { children: (0, l.jsx)(I.A, { closePopout: n }) });
                        },
                        children: (e, n) => {
                            let { isShown: i } = n;
                            return (0, l.jsx)(o.m, {
                                text: S.intl.string(S.t.DJXW3G),
                                shouldShow: !i && !N,
                                onTooltipShow: w,
                                children: (0, l.jsxs)(a.D, {
                                    ...e,
                                    onMouseEnter: () => {
                                        (e.onMouseEnter?.(), R());
                                    },
                                    innerRef: t,
                                    className: v.jw,
                                    "aria-label": T,
                                    "aria-haspopup": "menu",
                                    children: [
                                        (0, l.jsx)(c.ClipsIcon, { size: "xxs", color: "currentColor" }),
                                        (0, l.jsxs)(u.E, {
                                            variant: "body-xs/semibold",
                                            color: "none",
                                            className: v.Pf,
                                            children: [
                                                S.intl.string(E.default.Q0dnKS),
                                                !C &&
                                                    (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            " \xb7 ",
                                                            (0, l.jsx)(u.E, {
                                                                tag: "span",
                                                                variant: "body-xs/semibold",
                                                                color: "text-muted",
                                                                children: S.intl.string(S.t.l4qZrp),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        (0, l.jsx)("span", {
                                            ref: A,
                                            className: v.ai,
                                            children: i
                                                ? (0, l.jsx)(d.ChevronLargeUpIcon, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                  })
                                                : (0, l.jsx)(x.ChevronLargeDownIcon, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                  }),
                                        }),
                                    ],
                                }),
                            });
                        },
                    }),
                    (0, l.jsx)(y.A, { targetElementRef: A, shouldShow: N, text: k, onRequestClose: R }),
                ],
            });
        },
        y: function (e) {
            return (0, s.bG)(
                [f.A, A.default, C.A, m.Ay],
                () => {
                    if (null == e || f.A.getChannelId() !== e) return !1;
                    let n = A.default.getId();
                    return Object.values(C.A.getVoiceStatesForChannel(e)).some((e) => {
                        let { userId: t } = e;
                        return t !== n && m.Ay.isClipsEnabledForUser(t);
                    });
                },
                [e],
            );
        },
    },
);
