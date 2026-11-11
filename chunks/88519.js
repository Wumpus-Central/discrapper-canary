var l = t(477900),
    s = t(582128),
    i = t(574381),
    r = t(855986),
    o = t(265872),
    a = t(866665),
    c = t(939249),
    u = t(176781),
    d = t(834730),
    x = t(138017),
    g = t(715482),
    h = t(253932),
    p = t(246356),
    f = t(46653),
    j = t(495867),
    m = t(977997),
    A = t(419490),
    b = t(221501),
    C = t(887298),
    v = t(696016),
    y = t(683825),
    E = t(792996),
    S = t(899189);
let I = new WeakMap();
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channelId: n } = e,
                t = s.useRef(null),
                i = h.Q$.useSetting(),
                f = (0, r.bG)([A.Ay], () => A.Ay.getClipsWarningShown(n), [n]),
                { isNoticeVisible: m, dismissNotice: w } = (function (e, n) {
                    let t = (0, r.bG)([j.A], () => j.A.getRTCConnection()),
                        l = null == t || I.get(t) !== e,
                        [i, o] = s.useState(() => n && l),
                        [a, c] = s.useState(n);
                    return (
                        n !== a && (c(n), n && l && o(!0)),
                        s.useEffect(() => {
                            if (!i) return;
                            let n = j.A.getRTCConnection();
                            null != n && I.set(n, e);
                            let t = setTimeout(() => o(!1), v.Vi);
                            return () => clearTimeout(t);
                        }, [i, e]),
                        { isNoticeVisible: i, dismissNotice: s.useCallback(() => o(!1), []) }
                    );
                })(n, f),
                N = E.intl.string(i ? y.default.Q0dnKS : y.default.PaU7x6),
                R = E.intl.string(i ? y.default.j56Eyx : y.default["1PDyrY"]);
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(o.Y, {
                        targetElementRef: t,
                        position: "bottom",
                        align: "right",
                        animation: o.Y.Animation.NONE,
                        onRequestOpen: w,
                        renderPopout: (e) => {
                            let { closePopout: n } = e;
                            return (0, l.jsx)(p.A, { children: (0, l.jsx)(C.A, { closePopout: n }) });
                        },
                        children: (e, n) => {
                            let { isShown: s } = n;
                            return (0, l.jsx)(a.m, {
                                text: E.intl.string(E.t.DJXW3G),
                                shouldShow: !s && !m,
                                children: (0, l.jsxs)(c.D, {
                                    ...e,
                                    onMouseEnter: () => {
                                        (e.onMouseEnter?.(), w());
                                    },
                                    innerRef: t,
                                    className: S.j,
                                    "aria-label": N,
                                    "aria-haspopup": "menu",
                                    children: [
                                        (0, l.jsx)(u.ClipsIcon, { size: "xxs", color: "currentColor" }),
                                        (0, l.jsxs)(d.E, {
                                            variant: "body-xs/semibold",
                                            color: "none",
                                            className: S.P,
                                            children: [
                                                E.intl.string(y.default.Q0dnKS),
                                                !i &&
                                                    (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            " \xb7 ",
                                                            (0, l.jsx)(d.E, {
                                                                tag: "span",
                                                                variant: "body-xs/semibold",
                                                                color: "text-muted",
                                                                children: E.intl.string(E.t.l4qZrp),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        s
                                            ? (0, l.jsx)(x.ChevronLargeUpIcon, { size: "xxs", color: "currentColor" })
                                            : (0, l.jsx)(g.ChevronLargeDownIcon, {
                                                  size: "xxs",
                                                  color: "currentColor",
                                              }),
                                    ],
                                }),
                            });
                        },
                    }),
                    (0, l.jsx)(b.A, { targetElementRef: t, shouldShow: m, text: R, onRequestClose: w }),
                ],
            });
        },
        y: function (e) {
            return (0, r.bG)(
                [j.A, f.default, m.A, A.Ay],
                () => {
                    if (!(0, i.xl)() || null == e || j.A.getChannelId() !== e) return !1;
                    let n = f.default.getId();
                    return Object.values(m.A.getVoiceStatesForChannel(e)).some((e) => {
                        let { userId: t } = e;
                        return t !== n && A.Ay.isClipsEnabledForUser(t);
                    });
                },
                [e],
            );
        },
    },
);
