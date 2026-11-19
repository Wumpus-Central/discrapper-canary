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
    g = t(253932),
    h = t(246356),
    p = t(46653),
    f = t(495867),
    A = t(977997),
    j = t(419490),
    m = t(221501),
    C = t(887298),
    b = t(696016),
    y = t(683825),
    v = t(792996),
    S = t(899189);
let E = new WeakMap();
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channelId: n } = e,
                t = i.useRef(null),
                p = i.useRef(null),
                A = g.Q$.useSetting(),
                I = (0, s.bG)([j.Ay], () => j.Ay.getClipsWarningShown(n), [n]),
                { isNoticeVisible: w, dismissNotice: N } = (function (e, n) {
                    let t = (0, s.bG)([f.A], () => f.A.getRTCConnection()),
                        l = null == t || E.get(t) !== e,
                        [r, o] = i.useState(() => n && l),
                        [a, c] = i.useState(n);
                    return (
                        n !== a && (c(n), n && l && o(!0)),
                        i.useEffect(() => {
                            if (!r) return;
                            let n = f.A.getRTCConnection();
                            null != n && E.set(n, e);
                            let t = setTimeout(() => o(!1), b.Vi);
                            return () => clearTimeout(t);
                        }, [r, e]),
                        { isNoticeVisible: r, dismissNotice: i.useCallback(() => o(!1), []) }
                    );
                })(n, I),
                R = v.intl.string(A ? y.default.Q0dnKS : y.default.PaU7x6),
                G = v.intl.string(A ? y.default.j56Eyx : y.default["1PDyrY"]);
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.Y, {
                        targetElementRef: t,
                        position: "bottom",
                        align: "right",
                        animation: r.Y.Animation.NONE,
                        onRequestOpen: N,
                        renderPopout: (e) => {
                            let { closePopout: n } = e;
                            return (0, l.jsx)(h.A, { children: (0, l.jsx)(C.A, { closePopout: n }) });
                        },
                        children: (e, n) => {
                            let { isShown: i } = n;
                            return (0, l.jsx)(o.m, {
                                text: v.intl.string(v.t.DJXW3G),
                                shouldShow: !i && !w,
                                children: (0, l.jsxs)(a.D, {
                                    ...e,
                                    onMouseEnter: () => {
                                        (e.onMouseEnter?.(), N());
                                    },
                                    innerRef: t,
                                    className: S.jw,
                                    "aria-label": R,
                                    "aria-haspopup": "menu",
                                    children: [
                                        (0, l.jsx)(c.ClipsIcon, { size: "xxs", color: "currentColor" }),
                                        (0, l.jsxs)(u.E, {
                                            variant: "body-xs/semibold",
                                            color: "none",
                                            className: S.Pf,
                                            children: [
                                                v.intl.string(y.default.Q0dnKS),
                                                !A &&
                                                    (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            " \xb7 ",
                                                            (0, l.jsx)(u.E, {
                                                                tag: "span",
                                                                variant: "body-xs/semibold",
                                                                color: "text-muted",
                                                                children: v.intl.string(v.t.l4qZrp),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        (0, l.jsx)("span", {
                                            ref: p,
                                            className: S.ai,
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
                    (0, l.jsx)(m.A, { targetElementRef: p, shouldShow: w, text: G, onRequestClose: N }),
                ],
            });
        },
        y: function (e) {
            return (0, s.bG)(
                [f.A, p.default, A.A, j.Ay],
                () => {
                    if (null == e || f.A.getChannelId() !== e) return !1;
                    let n = p.default.getId();
                    return Object.values(A.A.getVoiceStatesForChannel(e)).some((e) => {
                        let { userId: t } = e;
                        return t !== n && j.Ay.isClipsEnabledForUser(t);
                    });
                },
                [e],
            );
        },
    },
);
