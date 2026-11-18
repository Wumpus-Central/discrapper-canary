var l = t(477900),
    i = t(582128),
    s = t(574381),
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
    C = t(221501),
    b = t(887298),
    y = t(696016),
    v = t(683825),
    S = t(792996),
    E = t(899189);
let I = new WeakMap();
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channelId: n } = e,
                t = i.useRef(null),
                s = i.useRef(null),
                f = h.Q$.useSetting(),
                m = (0, r.bG)([A.Ay], () => A.Ay.getClipsWarningShown(n), [n]),
                { isNoticeVisible: w, dismissNotice: N } = (function (e, n) {
                    let t = (0, r.bG)([j.A], () => j.A.getRTCConnection()),
                        l = null == t || I.get(t) !== e,
                        [s, o] = i.useState(() => n && l),
                        [a, c] = i.useState(n);
                    return (
                        n !== a && (c(n), n && l && o(!0)),
                        i.useEffect(() => {
                            if (!s) return;
                            let n = j.A.getRTCConnection();
                            null != n && I.set(n, e);
                            let t = setTimeout(() => o(!1), y.Vi);
                            return () => clearTimeout(t);
                        }, [s, e]),
                        { isNoticeVisible: s, dismissNotice: i.useCallback(() => o(!1), []) }
                    );
                })(n, m),
                R = S.intl.string(f ? v.default.Q0dnKS : v.default.PaU7x6),
                G = S.intl.string(f ? v.default.j56Eyx : v.default["1PDyrY"]);
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(o.Y, {
                        targetElementRef: t,
                        position: "bottom",
                        align: "right",
                        animation: o.Y.Animation.NONE,
                        onRequestOpen: N,
                        renderPopout: (e) => {
                            let { closePopout: n } = e;
                            return (0, l.jsx)(p.A, { children: (0, l.jsx)(b.A, { closePopout: n }) });
                        },
                        children: (e, n) => {
                            let { isShown: i } = n;
                            return (0, l.jsx)(a.m, {
                                text: S.intl.string(S.t.DJXW3G),
                                shouldShow: !i && !w,
                                children: (0, l.jsxs)(c.D, {
                                    ...e,
                                    onMouseEnter: () => {
                                        (e.onMouseEnter?.(), N());
                                    },
                                    innerRef: t,
                                    className: E.jw,
                                    "aria-label": R,
                                    "aria-haspopup": "menu",
                                    children: [
                                        (0, l.jsx)(u.ClipsIcon, { size: "xxs", color: "currentColor" }),
                                        (0, l.jsxs)(d.E, {
                                            variant: "body-xs/semibold",
                                            color: "none",
                                            className: E.Pf,
                                            children: [
                                                S.intl.string(v.default.Q0dnKS),
                                                !f &&
                                                    (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            " \xb7 ",
                                                            (0, l.jsx)(d.E, {
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
                                            ref: s,
                                            className: E.ai,
                                            children: i
                                                ? (0, l.jsx)(x.ChevronLargeUpIcon, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                  })
                                                : (0, l.jsx)(g.ChevronLargeDownIcon, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                  }),
                                        }),
                                    ],
                                }),
                            });
                        },
                    }),
                    (0, l.jsx)(C.A, { targetElementRef: s, shouldShow: w, text: G, onRequestClose: N }),
                ],
            });
        },
        y: function (e) {
            return (0, r.bG)(
                [j.A, f.default, m.A, A.Ay],
                () => {
                    if (!(0, s.xl)() || null == e || j.A.getChannelId() !== e) return !1;
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
