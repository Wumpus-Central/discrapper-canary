n.d(t, { A: () => eu });
var s = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(435558),
    o = n.n(r),
    u = n(554146),
    c = n(263775),
    d = n(409617),
    m = n(38021),
    h = n(831544),
    x = n(834730),
    g = n(265872),
    p = n(900797),
    C = n(847374),
    f = n(939249),
    j = n(789645),
    I = n(267102),
    N = n(253932),
    v = n(49999),
    S = n(683825),
    A = n(792996),
    y = n(204915);
function E(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = l.useRef(null),
        { theme: r } = (0, m.wR)(),
        o = (0, I.Us)(),
        u = l.useCallback(async () => {
            let { default: e } = await n.e(827037).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: l, updatePosition: i } = t;
                return null != a.current
                    ? (0, s.jsx)(e, {
                          onClose: n,
                          onSelect: n,
                          position: l,
                          onHeightUpdate: i,
                          target: a.current,
                          theme: r,
                          context: o,
                      })
                    : null;
            };
        }, [r, o]);
    return (0, s.jsxs)("div", {
        ref: a,
        className: y.G0,
        children: [
            (0, s.jsxs)("div", {
                className: y.R4,
                children: [
                    (0, s.jsx)(h.MicrophoneIcon, { size: "xs", color: "currentColor" }),
                    (0, s.jsxs)("div", {
                        className: y.Qs,
                        children: [
                            (0, s.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: A.intl.string(S.default.y080Rd),
                            }),
                            (0, s.jsx)(g.Q, {
                                targetElementRef: a,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    (N.Q$.getSetting() && t(v.i.TAKE_ACTION), i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        l = n ? p.ChevronSmallUpIcon : C.ChevronSmallDownIcon;
                                    return (0, s.jsxs)(f.D, {
                                        ...e,
                                        className: y.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, s.jsx)(x.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: y.hk,
                                                children: A.intl.string(S.default.B2F9tM),
                                            }),
                                            (0, s.jsx)(l, { size: "xs", color: "currentColor" }),
                                        ],
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(f.D, {
                className: y.VN,
                "aria-label": A.intl.string(A.t.cpT0Cq),
                onClick: () => t(v.i.USER_DISMISS),
                children: (0, s.jsx)(j.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var _ = n(650684),
    M = n(818349),
    b = n(419490);
function O(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = l.useRef(null),
        { theme: r } = (0, m.wR)(),
        o = (0, I.Us)(),
        u = l.useCallback(async () => {
            let { default: e } = await n.e(827037).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: l, updatePosition: i } = t;
                return null != a.current
                    ? (0, s.jsx)(e, {
                          onClose: n,
                          onSelect: n,
                          position: l,
                          onHeightUpdate: i,
                          target: a.current,
                          theme: r,
                          context: o,
                      })
                    : null;
            };
        }, [r, o]);
    return (0, s.jsxs)("div", {
        ref: a,
        className: y.G0,
        children: [
            (0, s.jsxs)("div", {
                className: y.R4,
                children: [
                    (0, s.jsx)(_.ClipsAutoIcon, { size: "xs", color: "currentColor" }),
                    (0, s.jsxs)("div", {
                        className: y.Qs,
                        children: [
                            (0, s.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: A.intl.string(S.default.Lym9gZ),
                            }),
                            (0, s.jsx)(g.Q, {
                                targetElementRef: a,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    let { clipsSettings: e } = b.Ay.getState();
                                    ("auto" === (0, M.r)(e.clipsEnabled, b.Ay.getEnableAutoclipping()) &&
                                        t(v.i.TAKE_ACTION),
                                        i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        l = n ? p.ChevronSmallUpIcon : C.ChevronSmallDownIcon;
                                    return (0, s.jsxs)(f.D, {
                                        ...e,
                                        className: y.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, s.jsx)(x.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: y.hk,
                                                children: A.intl.string(S.default.iHA2eT),
                                            }),
                                            (0, s.jsx)(l, { size: "xs", color: "currentColor" }),
                                        ],
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(f.D, {
                className: y.VN,
                "aria-label": A.intl.string(A.t.cpT0Cq),
                onClick: () => t(v.i.USER_DISMISS),
                children: (0, s.jsx)(j.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var P = n(176781);
function L(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = l.useRef(null),
        { theme: r } = (0, m.wR)(),
        o = (0, I.Us)(),
        u = l.useCallback(async () => {
            let { default: e } = await n.e(827037).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: l, updatePosition: i } = t;
                return null != a.current
                    ? (0, s.jsx)(e, {
                          onClose: n,
                          onSelect: n,
                          position: l,
                          onHeightUpdate: i,
                          target: a.current,
                          theme: r,
                          context: o,
                      })
                    : null;
            };
        }, [r, o]);
    return (0, s.jsxs)("div", {
        ref: a,
        className: y.G0,
        children: [
            (0, s.jsxs)("div", {
                className: y.R4,
                children: [
                    (0, s.jsx)(P.ClipsIcon, { size: "xs", color: "currentColor" }),
                    (0, s.jsxs)("div", {
                        className: y.Qs,
                        children: [
                            (0, s.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: A.intl.string(S.default["G+P4p/"]),
                            }),
                            (0, s.jsx)(g.Q, {
                                targetElementRef: a,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    (b.Ay.getState().clipsSettings.clipsEnabled && t(v.i.TAKE_ACTION), i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        l = n ? p.ChevronSmallUpIcon : C.ChevronSmallDownIcon;
                                    return (0, s.jsxs)(f.D, {
                                        ...e,
                                        className: y.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, s.jsx)(x.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: y.hk,
                                                children: A.intl.string(S.default.vxs365),
                                            }),
                                            (0, s.jsx)(l, { size: "xs", color: "currentColor" }),
                                        ],
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(f.D, {
                className: y.VN,
                "aria-label": A.intl.string(A.t.cpT0Cq),
                onClick: () => t(v.i.USER_DISMISS),
                children: (0, s.jsx)(j.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var R = n(607399),
    w = n(855986),
    T = n(596344),
    U = n(287809),
    k = n(898105);
n(938796);
var W = n(665260),
    D = n(33358),
    H = n(294520),
    F = n(288254),
    G = n(734057),
    V = n(464132),
    q = n(652215);
function z(e) {
    return (0, W.Lt)(e.flags ?? 0, q.sbO.IS_CLIP);
}
function X(e) {
    return e.attachments.some(z);
}
let Q = new WeakMap();
function B(e, t) {
    let n = Q.get(e);
    if (null != n && n.currentUserId === t) return n.messageId;
    let s = e.findNewest((e) => e.author.id !== t && X(e))?.id ?? null;
    return (Q.set(e, { currentUserId: t, messageId: s }), s);
}
let Y = [
    { id: "received", content: u.M.AUTOCLIPPING_EARLY_ACCESS_RECEIVED_CLIP_NOTICE, claim: "received" },
    {
        id: "manual_sent",
        content: u.M.AUTOCLIPPING_EARLY_ACCESS_SENT_MANUAL_CLIP_NOTICE,
        claim: "manual_sent_instance",
    },
    {
        id: "voice_inclusion",
        content: u.M.AUTOCLIPPING_EARLY_ACCESS_FRIEND_CLIP_VOICE_NOTICE,
        claim: "voice_inclusion",
    },
];
function K(e) {
    let { message: t } = e,
        {
            notice: n,
            markAsDismissed: i,
            onMenuOpenChange: a,
        } = (function (e) {
            let t = l.useId(),
                [n, s] = l.useState(null),
                i = {
                    received: (function (e, t, n) {
                        let s = (0, I.Us)(),
                            l = "off" === (0, V.U)().value,
                            i = (0, D.P)(e),
                            a = e.channel_id,
                            r = e.id,
                            o = (0, w.bG)([G.A], () => G.A.getChannel(a), [a]),
                            u = (0, w.bG)([U.default], () => U.default.getCurrentUser()?.id),
                            c = e.author.id !== u && X(e) && (l || n) && !R.Fr && s === q.BRT.APP,
                            m = (0, d._C)("received"),
                            h = null == m ? "none" : m === t ? "self" : "other",
                            x = (0, w.bG)([T.A], () => c && "none" === h && B(T.A.getMessages(a), u) === r, [
                                c,
                                h,
                                a,
                                r,
                                u,
                            ]),
                            g =
                                c &&
                                (x || "self" === h) &&
                                e.attachments.some(
                                    (e) =>
                                        z(e) &&
                                        null ==
                                            (0, H.iW)(e, i, (0, W.Lt)(e.flags ?? 0, q.sbO.IS_SPOILER) || (0, F.BV)(o)),
                                ),
                            { enabled: p } = (0, k.r)("useReceivedClipNudge");
                        return g && p;
                    })(e, t, "received" === n),
                    manual_sent: (function (e, t, n) {
                        let s = (0, I.Us)(),
                            l = "auto" === (0, V.U)().value,
                            i = (0, d._C)("manual_sent") === e.id,
                            a = (0, d._C)("manual_sent_instance"),
                            r = (0, w.bG)([U.default], () => U.default.getCurrentUser()?.id),
                            o =
                                i &&
                                (null == a || a === t) &&
                                e.author.id === r &&
                                (!l || n) &&
                                !R.Fr &&
                                s === q.BRT.APP,
                            { enabled: u } = (0, k.r)("useManualClipSentNudge");
                        return o && u;
                    })(e, t, "manual_sent" === n),
                    voice_inclusion: (function (e, t, n) {
                        let s = (0, I.Us)(),
                            l = N.Q$.useSetting(),
                            i = (0, d._C)("voice_inclusion"),
                            a = (0, w.bG)([U.default], () => U.default.getCurrentUser()?.id),
                            r = e.author.id !== a && (!l || n) && !R.Fr && s === q.BRT.APP && X(e),
                            o = e.channel_id,
                            u = e.id,
                            c = (0, w.bG)([T.A], () => r && null == i && B(T.A.getMessages(o), a) === u, [
                                r,
                                i,
                                o,
                                u,
                                a,
                            ]),
                            m = r && (c || i === t),
                            { enabled: h } = (0, k.r)("useClipsVoiceInclusionNudge");
                        return m && h;
                    })(e, t, "voice_inclusion" === n),
                },
                a = (0, d.wc)(e.id),
                r = Y.filter((e) => {
                    let { id: t } = e;
                    return i[t] && (null == a || a === t);
                }),
                o = (0, d.Jk)(),
                u = r
                    .map((e) => {
                        let { claim: t } = e;
                        return t;
                    })
                    .join(" ");
            (l.useLayoutEffect(() => {
                let e = u.split(" ");
                for (let { claim: n } of Y) e.includes(n) ? (0, d.K)(n, t) : (0, d.Rx)(n, t);
            }, [u, o, t]),
                l.useLayoutEffect(
                    () => () =>
                        Y.forEach((e) => {
                            let { claim: n } = e;
                            return (0, d.Rx)(n, t);
                        }),
                    [t],
                ));
            let m = r.filter((e) => {
                    let { claim: n } = e;
                    return o[n] === t;
                }),
                [h, x] = (0, c.kn)(
                    m.map((e) => {
                        let { content: t } = e;
                        return t;
                    }),
                ),
                g =
                    Y.find((e) => {
                        let { content: t } = e;
                        return t === h;
                    })?.id ?? null,
                p = e.id;
            return (
                l.useEffect(() => {
                    null != g && (0, d.Mi)(p, g);
                }, [p, g]),
                {
                    notice: g,
                    markAsDismissed: x,
                    onMenuOpenChange: function (e) {
                        s(e ? g : null);
                    },
                }
            );
        })(t);
    switch (n) {
        case "received":
            return (0, s.jsx)(L, { markAsDismissed: i, onMenuOpenChange: a });
        case "manual_sent":
            return (0, s.jsx)(O, { markAsDismissed: i, onMenuOpenChange: a });
        case "voice_inclusion":
            return (0, s.jsx)(E, { markAsDismissed: i, onMenuOpenChange: a });
        case null:
            return null;
    }
}
var $ = n(643612),
    Z = n(448381),
    J = n(96782),
    ee = n(838541),
    et = n(882469);
function en(e) {
    let { visualMediaItems: t, maxWidth: n } = e,
        l = t.length;
    if (1 === l) return (0, s.jsx)(es, { itemsForLayout: t, isSingleImage: !0, maxWidth: n });
    if (2 === l) return (0, s.jsx)(el, { itemsForLayout: t, maxWidth: n });
    if (3 === l) return (0, s.jsx)(ei, { itemsForLayout: t, maxWidth: n });
    if (4 === l) return (0, s.jsx)(ea, { itemsForLayout: t, maxWidth: n });
    let i = l % 3;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            1 === i && (0, s.jsx)(es, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            2 === i && (0, s.jsx)(el, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            0 === i
                ? (0, s.jsx)(er, { itemsForLayout: t, maxWidth: n })
                : (0, s.jsx)(er, { itemsForLayout: t.slice(i), maxWidth: n }),
        ],
    });
}
function es(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: l } = e,
        i = t[0];
    return (0, s.jsx)("div", {
        className: a()(et.EO, { [et.Gj]: l, [et.Kv]: !l }),
        children: (0, s.jsx)(eo, { props: i, useFullWidth: !l, isSingleItem: !0, maxWidth: n }),
    });
}
function el(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        l = Math.round((n - 4) / 2);
    return (0, s.jsx)("div", {
        className: et.SQ,
        children: t.map((e) =>
            (0, s.jsx)(
                "div",
                { className: et.XE, children: (0, s.jsx)(eo, { props: e, maxWidth: l, maxHeight: l }) },
                e.item.uniqueId,
            ),
        ),
    });
}
function ei(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        l = Math.round((2 * (n - 4)) / 3),
        i = l / 2;
    return (0, s.jsxs)("div", {
        className: a()(et.SQ, et.o_),
        children: [
            (0, s.jsx)("div", { className: et.es, children: (0, s.jsx)(eo, { props: t[0], maxWidth: l }) }),
            (0, s.jsx)("div", {
                className: et.N$,
                children: (0, s.jsx)("div", {
                    className: et._i,
                    children: t
                        .splice(1)
                        .map((e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    className: et.$w,
                                    children: (0, s.jsx)(eo, { props: e, maxWidth: i, maxHeight: 173 }),
                                },
                                e.item.uniqueId,
                            ),
                        ),
                }),
            }),
        ],
    });
}
function ea(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        l = Math.round((n - 4) / 2);
    return (0, s.jsx)("div", {
        className: et.av,
        children: t.map((e) =>
            (0, s.jsx)(eo, { props: e, maxWidth: l, maxHeight: 173, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function er(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        l = Math.round((n - 8) / 3);
    return (0, s.jsx)("div", {
        className: et._f,
        children: t.map((e) =>
            (0, s.jsx)(eo, { props: e, maxWidth: l, maxHeight: l, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function eo(e) {
    var t, n;
    let {
            props: l,
            maxWidth: i = 550,
            maxHeight: r = 350,
            useFullWidth: o = !0,
            isSingleItem: u = !1,
            displayGridItem: c,
        } = e,
        d = l.item.type,
        m = {
            ...l,
            ...("IMAGE" === d &&
                ((t = l.className), { className: a()(t, et.s_), imgContainerClassName: et.nh, imgClassName: et.g2 })),
            ...(("VIDEO" === d || "CLIP" === d) && ((n = l.className), { className: a()(n, et.g2) })),
            displayGridItem: c,
            mediaLayoutType: ee.d.MOSAIC,
            maxWidth: i,
            maxHeight: r,
            useFullWidth: o,
            isSingleMosaicItem: u,
        };
    return (0, s.jsx)($.G.Provider, { value: l.gifFavoriteButton, children: (0, s.jsx)(J.Ay, { ...m }) });
}
let eu = function (e) {
    var t;
    let { items: n, isInAppComponentsV2: i = !1 } = e,
        { visualMediaItems: r, nonVisualMediaItems: u } =
            ((t = n),
            l.useMemo(() => {
                let [e, n] = o().partition(t, (e) => (0, Z.Xg)(e.item.type));
                return { visualMediaItems: e, nonVisualMediaItems: n };
            }, [t])),
        c = n[0]?.message;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            r.length > 0 &&
                (0, s.jsx)("div", {
                    className: a()(et.XU, { [et.dM]: i, [et.eO]: 1 === r.length && "CLIP" === r[0].item.type }),
                    children: (0, s.jsx)(en, { visualMediaItems: r, maxWidth: i ? 600 : 550 }),
                }),
            u.length > 0 &&
                (0, s.jsx)("div", {
                    className: et.s,
                    children: u.map((e) =>
                        (0, s.jsx)(
                            "div",
                            { className: et.Br, children: (0, s.jsx)(eo, { props: e }) },
                            e.item.uniqueId,
                        ),
                    ),
                }),
            !i && null != c && X(c) ? (0, s.jsx)(K, { message: c }) : null,
        ],
    });
};
