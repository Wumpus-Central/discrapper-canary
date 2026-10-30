l.d(t, { default: () => lh });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(562708),
    o = l(935399),
    c = l(517846),
    u = l(17928),
    d = l(192308),
    m = l(521489),
    f = l(231723),
    h = l(297264),
    x = l(62010),
    g = l(403581),
    p = l(834730),
    j = l(866665),
    y = l(408278),
    v = l(7689),
    C = l(972213),
    b = l(765671),
    k = l(765548),
    A = l(775602),
    N = l(793574),
    E = l(688810),
    w = l(139286),
    P = l(429913),
    L = l(769015),
    I = l(27620),
    M = l(540999),
    S = l(287809),
    D = l(723702),
    T = l(915725),
    _ = l(614584),
    R = l(362081),
    H = l(465268),
    F = l(96065),
    z = l(245116),
    O = l(352527),
    U = l(280483),
    G = l(111994);
l(321073);
var K = l(118057),
    V = l(289873),
    $ = l(962125),
    q = l(915089),
    B = l(62617);
function Y(e) {
    let { alt: t, ariaLabel: l, ariaHidden: i, role: s, width: r, height: o, className: c, style: u } = e,
        d = a.useMemo(
            () => (0, B.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [r, o, u],
        );
    return (0, n.jsx)("img", {
        style: d,
        src: "https://cdn.discordapp.com/assets/content/1e6b3a97c86291528609222cdeb8b18fdcce3270f796106d4af3d0f7fa3cce18.svg",
        className: (0, B.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var Q = l(702841),
    X = l(687966),
    W = l(661531),
    Z = l(475358),
    J = l(123292),
    ee = l(292801),
    et = l(780964),
    el = l(766075),
    en = l(532624),
    ea = l(350535),
    ei = l(572164),
    es = l(953932),
    er = l(652215),
    eo = l(507216),
    ec = l(105292),
    eu = l(71967);
function ed(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: eu.Nr,
        children: [t, (0, n.jsx)(p.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function em() {
    let e = (0, Q.bG)([en.Ay], () => en.Ay.getKeybindForAction(er.hCu.SAVE_CLIP)),
        t = null != e ? ea.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: eu.kR,
        children: [
            (0, n.jsx)(ed, {
                header: (0, n.jsx)(X.GameControllerIcon, { size: "refresh_sm", color: W.A.colors.ICON_DEFAULT }),
                description: ec.intl.string(eo.default["4K56sP"]),
            }),
            (0, n.jsx)(ed, {
                header: null != t ? (0, n.jsx)(Z.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  ec.intl.format(eo.default.BIwQis, { keybind: t }),
                                  (0, n.jsx)("div", {
                                      className: eu.JH,
                                      children: (0, n.jsx)(J.Q, {
                                          text: ec.intl.string(eo.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, el.openUserSettings)(et.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : ec.intl.string(eo.default.HOUDUm),
            }),
            (0, n.jsx)(ed, {
                header: (0, n.jsx)(ee.t, { size: "refresh_sm", color: W.A.colors.ICON_DEFAULT }),
                description: ec.intl.string(eo.default.DLzdl7),
            }),
        ],
    });
}
function ef(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, ei.E)();
    return (0, n.jsx)("div", {
        className: eu.kL,
        children: (0, n.jsxs)("div", {
            className: eu.Qs,
            children: [
                (0, n.jsx)(Y, { width: 213, height: 135, alt: "" }),
                (0, n.jsx)(h.D, {
                    className: eu.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ec.intl.string(eo.default["+M2iLf"]) : ec.intl.string(eo.default.m2GEpP),
                }),
                t &&
                    (0, n.jsx)(p.E, {
                        className: eu.h_,
                        variant: "text-md/medium",
                        children: ec.intl.string(eo.default.xkY5xS),
                    }),
                !l && (0, n.jsx)("div", { className: eu.SO, children: (0, n.jsx)(es.A, {}) }),
                l && !t && (0, n.jsx)(em, {}),
            ],
        }),
    });
}
let eh = 4 / 3;
var ex = l(621466),
    eg = l(61491),
    ep = l(342952),
    ej = l(890856),
    ey = l(939249),
    ev = l(820081),
    eC = l(365199),
    eb = l(778712),
    ek = l(821609),
    eA = l(22231),
    eN = l(983851),
    eE = l(31300),
    ew = l(442433),
    eP = l(587895),
    eL = l(927813),
    eI = l(995273);
function eM(e) {
    let { timestamp: t, abbreviated: l = !0 } = e,
        [n, i] = a.useState(() => (0, eI.jb)(t, l));
    return (
        a.useEffect(() => {
            i((0, eI.jb)(t, l));
            let e = Date.now() - t;
            if (e > eL.A.Millis.DAY) return;
            let n = e >= eL.A.Millis.HOUR ? eL.A.Millis.HOUR : eL.A.Millis.MINUTE,
                a = setInterval(
                    () => {
                        i((0, eI.jb)(t, l));
                    },
                    n,
                    n - (e % n),
                );
            return () => clearInterval(a);
        }, [t, l]),
        n
    );
}
var eS = l(549685),
    eD = l(174459),
    eT = l(403362),
    e_ = l(53677),
    eR = l(609174),
    eH = l(619744),
    eF = l(82716),
    ez = l(449397),
    eO = l(930317),
    eU = l(285072),
    eG = l(284009),
    eK = l.n(eG),
    eV = l(460905),
    e$ = l(374816),
    eq = l(696016),
    eB = l(153511);
function eY(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eK()(l?.type === eq.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, u.bG)([S.default], () => S.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(j.m, {
        text: ec.intl.string(eo.default.vTTkFF),
        children: (0, n.jsxs)("div", {
            className: eB.S,
            children: [
                (0, n.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: eB.$, alt: i }),
                (0, n.jsx)(p.E, {
                    color: "text-overlay-light",
                    variant: "text-xs/medium",
                    children: ec.intl.formatToPlainString(eo.default.QJ7i8Z, { username: i }),
                }),
            ],
        }),
    });
}
function eQ(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, n.jsx)(j.m, {
        text: a,
        children: (0, n.jsxs)("div", {
            className: eB.S,
            children: [
                (0, n.jsx)(t, { size: "xxs", color: "currentColor" }),
                (0, n.jsx)(p.E, { color: "text-overlay-light", variant: "text-xs/medium", children: l }),
            ],
        }),
    });
}
function eX(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === eq.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case eq.Gy.DISTRIBUTED:
            return (0, n.jsx)(eY, { clip: t });
        case eq.Gy.LAUGHTER:
            return (0, n.jsx)(eQ, {
                icon: eV.n,
                text: ec.intl.string(eo.default.bTC23D),
                tooltipText: ec.intl.string(eo.default["ry+jxm"]),
            });
        case eq.Gy.SHOUTING:
            return (0, n.jsx)(eQ, {
                icon: eV.n,
                text: ec.intl.string(eo.default["3gqpuo"]),
                tooltipText: ec.intl.string(eo.default["ry+jxm"]),
            });
        case eq.Gy.GAME_EVENT: {
            let e = (0, e$.u6)(t.applicationId, eq.Gy.GAME_EVENT, t.decision.signal.eventName);
            if (null == e) return null;
            return (0, n.jsx)(eQ, {
                icon: e,
                text: (0, e$.PZ)(t.applicationId, eq.Gy.GAME_EVENT, t.decision.signal.eventName) ?? "",
                tooltipText: ec.intl.string(eo.default["347DBb"]),
            });
        }
        default:
            return null;
    }
}
var eW = l(718812),
    eZ = l(721610),
    eJ = l(686320),
    e0 = l(175764);
function e1(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r } = e;
    return (0, n.jsx)(eR.Cl, {
        clip: t,
        children: (0, n.jsx)(e2, { actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r }),
    });
}
function e2(e) {
    let { actionsDisabled: t, isNew: i, onClick: r, onEdit: o, gridItemProps: c } = e,
        d = (0, eR.Y_)(),
        m = !0 === d.pending,
        f = t || m,
        { analyticsLocations: h } = (0, E.Ay)(N.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: p, picker: j } = a.useContext(eZ.$),
        y = j?.allowMultiSelect ?? !0,
        v = null != j ? (0, eJ.$)(j.action).label : void 0,
        [C, b] = a.useState(!1),
        [k, w] = a.useState(!1),
        [P, L] = a.useState(!1),
        [I, M] = a.useState(!1),
        [S, D] = a.useState(0),
        _ = x.has(d.id),
        R = d.type === eq.nQ.SCREENSHOT,
        H = "auto" === d.clipMethod,
        F = (0, u.bG)([A.Ay], () => A.Ay.keyboardModeEnabled),
        z = (k || C || (P && F)) && !_,
        O = a.useCallback(() => L(!0), []),
        U = a.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || L(!1);
        }, []);
    a.useEffect(() => {
        if (!z || R || m) return;
        let e = window.setTimeout(() => M(!0), 150);
        return () => {
            (window.clearTimeout(e), M(!1));
        };
    }, [z, R, m]);
    let G = a.useRef(null),
        K = a.useCallback(() => {
            G.current?.releaseSource();
        }, []),
        $ = a.useCallback((e) => {
            G.current?.seek(e);
        }, []),
        q = a.useCallback(() => b(!1), []),
        B = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), g(d.id));
            },
            [g, d.id],
        ),
        Y = a.useCallback(
            (e) => {
                b(!0);
                let t =
                    p && x.size > 0
                        ? Array.from(x)
                              .map((e) => T.Ay.getClipById(e))
                              .filter(eT.Vq)
                        : [d];
                (0, ew.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("249169"),
                            l.e("657266"),
                            l.e("272396"),
                            l.e("595429"),
                            l.e("311930"),
                            l.e("320891"),
                            l.e("531279"),
                            l.e("371863"),
                            l.e("398793"),
                            l.e("338601"),
                            l.e("669006"),
                            l.e("886456"),
                            l.e("218489"),
                            l.e("218307"),
                            l.e("6896"),
                        ]).then(l.bind(l, 553075));
                        return (l) =>
                            (0, n.jsx)(e, {
                                ...l,
                                analyticsLocations: h,
                                clips: t,
                                actionsDisabled: f,
                                onMainAction: null != j ? () => j.onPick(d) : void 0,
                                mainAction: j?.action,
                                onShare: () => {
                                    eD.default.track(er.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...e_.lc(),
                                        ...e_.Zy(d),
                                    });
                                },
                                onEdit: () => {
                                    (o(d),
                                        eD.default.track(er.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...e_.lc(),
                                            ...e_.Zy(d),
                                        }));
                                },
                                onBeforeDelete: K,
                                onAfterDelete: () => {
                                    eD.default.track(er.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...e_.lc(),
                                        ...e_.Zy(d),
                                    });
                                },
                            });
                    },
                    { onClose: q },
                );
            },
            [d, p, x, f, q, o, K, j, h],
        ),
        Q = a.useCallback(
            (e) => {
                f || (e.preventDefault(), e.stopPropagation(), Y(e));
            },
            [f, Y],
        ),
        X = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), Y(e));
            },
            [Y],
        ),
        W = a.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    o(d),
                    eD.default.track(er.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" }));
            },
            [o, d],
        ),
        Z = a.useCallback(
            (e) => {
                !f &&
                    (!(0, ex.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            null == e.target.closest("[data-clips-select]") &&
                            e.currentTarget.contains(e.target))) &&
                    (y && e.shiftKey ? (e.preventDefault(), g(d.id)) : y && p ? g(d.id) : null != r && r(d),
                    eD.default.track(er.HAw.CLIP_GALLERY_CARD_CLICKED, { ...e_.lc(), ...e_.Zy(d) }));
            },
            [f, y, p, g, d, r],
        );
    return (0, n.jsx)(E.f5, {
        value: h,
        children: (0, n.jsx)("div", {
            className: e0.hl,
            onFocus: O,
            onBlur: U,
            children: (0, n.jsx)(ej.s, {
                "aria-disabled": f,
                "aria-label": v ?? ec.intl.string(R ? ec.t["HO/oXl"] : ec.t.bt75uw),
                onClick: f ? void 0 : Z,
                onContextMenu: Q,
                buttonProps: null != c ? { role: "button", id: c.id, tabIndex: c.tabIndex } : void 0,
                buttonRef: c?.ref,
                onFocus: c?.onFocus,
                className: s()(e0.Nr, { [e0.r9]: f, [e0.in]: C, [e0.wH]: _ }),
                onMouseEnter: () => w(!0),
                onMouseLeave: () => w(!1),
                children: (0, n.jsx)("div", {
                    className: e0.w7,
                    children: (0, n.jsxs)(e3, {
                        ref: G,
                        isPlaying: I,
                        onProgressChange: D,
                        children: [
                            m && (0, n.jsx)("div", { className: e0.mi, children: (0, n.jsx)(V.y, {}) }),
                            (0, n.jsx)("div", {
                                className: s()(e0.w$, { [e0.t7]: z, [e0.Vg]: H }),
                                inert: !0,
                                "aria-hidden": "true",
                            }),
                            (0, n.jsx)(e5, {
                                isNew: i,
                                showHoverActions: z && !f,
                                showSelect: y && (z || _),
                                isSelected: _,
                                onToggleSelect: B,
                                onMenu: X,
                                onBeforeDelete: K,
                            }),
                            (0, n.jsx)(e8, { showHoverState: z, playbackProgress: S, onEdit: W, onSeek: $ }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function e3(e) {
    let { isPlaying: t, onProgressChange: l, children: a, ref: i } = e;
    return (0, n.jsx)(eO.d, {
        ref: i,
        isPlaying: t,
        preload: "none",
        onProgressChange: l,
        children: (0, n.jsx)(eU.h, { isVisible: !0, className: e0.Lw, children: a }),
    });
}
function e5(e) {
    let {
            isNew: t,
            showHoverActions: l,
            showSelect: a,
            isSelected: i,
            onToggleSelect: r,
            onMenu: o,
            onBeforeDelete: c,
        } = e,
        u = (0, eR.Y_)(),
        d = !0 === u.pending;
    return (0, n.jsxs)("div", {
        className: e0.wx,
        children: [
            (0, n.jsxs)("div", {
                className: e0.LD,
                children: [
                    a &&
                        (0, n.jsx)(ey.D, {
                            "aria-label": ec.intl.string(ec.t.XqMe3N),
                            "aria-pressed": i,
                            onClick: r,
                            "data-clips-select": "true",
                            className: s()(e0.UJ, { [e0.ZK]: i }),
                            children: i && (0, n.jsx)(ev.B, { size: "xs", color: "currentColor" }),
                        }),
                    !d &&
                        t &&
                        (0, n.jsx)("div", {
                            className: e0.Ad,
                            children: (0, n.jsx)(p.E, {
                                variant: "text-xs/bold",
                                color: "text-overlay-light",
                                children: ec.intl.string(ec.t.y2b7CA),
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: e0.IE,
                children: [
                    (u.isFavorite || l) &&
                        (0, n.jsx)("div", {
                            className: s()({ [e0.L6]: u.isFavorite }),
                            children: (0, n.jsx)(eF.z, {}),
                        }),
                    l &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(j.m, {
                                    text: ec.intl.string(ec.t["UKOtz+"]),
                                    children: (0, n.jsx)(y.K, {
                                        onClick: o,
                                        icon: eC.MoreHorizontalIcon,
                                        "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                                        variant: "overlay-secondary",
                                        size: "sm",
                                    }),
                                }),
                                (0, n.jsx)(eH.k, { onBeforeDelete: c }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function e8(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: i, onSeek: r } = e,
        o = (0, eR.Y_)(),
        c = o.type === eq.nQ.SCREENSHOT,
        d = a.useRef(null),
        m = a.useRef(!1),
        f = a.useCallback(
            (e) => {
                let t = d.current;
                if (null == t) return;
                let l = t.getBoundingClientRect();
                0 === l.width || r(Math.max(0, Math.min(100, 100 * ((e - l.left) / l.width))));
            },
            [r],
        ),
        h = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.preventDefault(),
                    (m.current = !0),
                    e.currentTarget.setPointerCapture(e.pointerId),
                    f(e.clientX));
            },
            [f],
        ),
        x = a.useCallback(
            (e) => {
                m.current && f(e.clientX);
            },
            [f],
        ),
        g = a.useCallback((e) => {
            ((m.current = !1),
                e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
        }, []),
        j = (0, u.yK)([S.default], () => o.users.map((e) => S.default.getUser(e)).filter(eT.Vq)),
        y = eM({ timestamp: o.createdAt }),
        v = o.decision?.signal?.type,
        C = null != v && v !== eq.Gy.MANUAL,
        b =
            j.length > 0
                ? (0, n.jsx)("span", {
                      className: e0.HD,
                      "data-clips-avatars": "true",
                      children: (0, n.jsx)(ep.A, {
                          maxUsers: 3,
                          users: j,
                          size: eb._3.SIZE_16,
                          "aria-label": ec.intl.string(ec.t.WTozwe),
                      }),
                  })
                : null;
    return (0, n.jsx)("div", {
        className: e0.qr,
        children: (0, n.jsxs)("div", {
            className: e0.Zn,
            children: [
                (0, n.jsxs)("div", {
                    className: e0.$,
                    children: [
                        (0, n.jsxs)("div", { className: e0.gH, children: [(0, n.jsx)(e6, {}), (0, n.jsx)(e7, {})] }),
                        t ? b : null,
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: s()(e0.SO, { [e0.AK]: t && !c, [e0.I_]: t && c }),
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(e0.KW, { [e0.g3]: t }),
                            inert: t,
                            "aria-hidden": t,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: e0.Tf,
                                    children: [
                                        (0, n.jsx)(eX, { clip: o }),
                                        C && (0, n.jsx)("span", { className: e0.TG, "aria-hidden": "true" }),
                                        b,
                                        (0, n.jsx)(p.E, {
                                            variant: "text-xs/normal",
                                            color: "none",
                                            children: ec.intl.format(eo.default["0QCBug"], { time: y }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: e0.av, children: (0, n.jsx)(e9, {}) }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: s()(e0.Ax, { [e0.Mg]: t }),
                            inert: !t,
                            children: [
                                !c &&
                                    (0, n.jsx)("div", {
                                        ref: d,
                                        className: e0.hr,
                                        onPointerDown: h,
                                        onPointerMove: x,
                                        onPointerUp: g,
                                        "data-clips-progress": "true",
                                        "aria-hidden": "true",
                                        children: (0, n.jsx)("div", {
                                            className: e0.z5,
                                            children: (0, n.jsx)("div", {
                                                className: e0.TE,
                                                style: { width: `${l}%` },
                                                children: (0, n.jsx)("div", {
                                                    className: e0.GT,
                                                    "aria-hidden": "true",
                                                }),
                                            }),
                                        }),
                                    }),
                                (0, n.jsxs)("div", {
                                    className: e0.E_,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: e0.lO,
                                            children: (0, n.jsx)(ek.$, {
                                                variant: "overlay-secondary",
                                                size: "sm",
                                                icon: eA.PencilIcon,
                                                text: ec.intl.string(ec.t.bt75uw),
                                                onClick: i,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: e0.lO,
                                            children: (0, n.jsx)(ez.e, { variant: "primary" }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function e9() {
    let e = (0, eR.Y_)(),
        t = 0 === e.length,
        l = !0 === e.pending,
        i = (function (e) {
            if (null == e.editMetadata) return !1;
            function t(e, t) {
                return 100 > Math.abs(e - t);
            }
            let l =
                    !t(1e3 * e.editMetadata.start, e.originalStartMs ?? 0) ||
                    !t(1e3 * e.editMetadata.end, e.originalEndMs ?? e.length),
                n =
                    !1 === e.editMetadata.applicationAudio ||
                    !1 === e.editMetadata.voiceAudio ||
                    !1 === e.editMetadata.soundboardAudio;
            return l || n;
        })(e),
        s = a.useMemo(() => {
            let t = e.length;
            if (null != e.editMetadata) {
                let l = e.editMetadata.end - e.editMetadata.start;
                1e3 * l < e.length && (t = 1e3 * l);
            }
            let l = Math.floor(t / 1e3);
            return (0, eg.rB)(l);
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, n.jsxs)("div", {
              className: e0.p0,
              children: [
                  i && (0, n.jsx)(eS.A, { color: "white", width: 14, height: 14 }),
                  (0, n.jsx)(p.E, {
                      variant: "text-xs/medium",
                      color: "text-overlay-light",
                      tabularNumbers: !0,
                      children: l ? ec.intl.string(ec.t["2Fp7OP"]) : s,
                  }),
              ],
          });
}
function e7() {
    let e = (0, eR.Y_)(),
        t = (0, eW.h)(e),
        l = "" !== t;
    return (0, n.jsx)(p.E, {
        className: e0.DD,
        variant: "text-sm/semibold",
        color: "text-overlay-light",
        children: l ? t : e.name,
    });
}
function e6() {
    let e = (0, eR.Y_)(),
        t = (0, u.bG)([eP.A], () => (null != e.applicationId ? eP.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: e0.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: e0.T_ })
                : e.type === eq.nQ.VOICE_CLIP
                  ? (0, n.jsx)(eN.H, { size: "xs", color: "currentColor" })
                  : (0, n.jsx)(eE.k, { size: "xs", color: "currentColor" }),
    });
}
e3.displayName = "CardThumbnail";
var e4 = l(792852);
function te(e) {
    return Math.min(45 * e, 520);
}
var tt = l(91440),
    tl = l(762831);
function tn(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: i, onEdit: s, isLoading: r, topInset: o = 0 } = e,
        [c, d] = a.useState({ width: 0, height: 0 }),
        m = (0, u.yK)([T.Ay], () => T.Ay.getNewClipIds()),
        f = (0, u.bG)([T.Ay], () => T.Ay.getExportingClipIds().size > 0),
        x = (0, e4.P)((e) => e.activeMainLink),
        g = (0, e4.P)((e) => e.gameFacet),
        j = (0, e4.P)((e) => e.clippedWithFacet),
        y = a.useMemo(() => {
            let e = [],
                l = new Map(),
                n = [],
                a = new Date();
            a.setHours(0, 0, 0, 0);
            let i = a.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        a = new Date(t);
                    if ((a.setHours(0, 0, 0, 0), a.getTime() === i)) n.push(e);
                    else {
                        let n = new Date(t).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            a = l.get(n) ?? [];
                        l.set(n, [...a, e]);
                    }
                }),
                n.length > 0)
            ) {
                let t = n.some((e) => "auto" === e.clipMethod);
                e.push({
                    type: "today",
                    title: ec.intl.string(ec.t["kB2R/0"]),
                    description: t ? ec.intl.string(ec.t["6AXirz"]) : void 0,
                    clips: n,
                });
            }
            return (
                Array.from(l.entries()).forEach((t) => {
                    let [l, n] = t;
                    e.push({ type: "monthyear", title: l, clips: n });
                }),
                e
            );
        }, [t]),
        v = a.useMemo(() => [o, 24, 0, 24], [o]),
        { width: C } = c,
        { tileWidth: b, columns: k } = a.useMemo(() => {
            var e, l;
            let n, a, i;
            return (
                (e = t.length),
                (n = Math.max(1, Math.floor(((l = C - 48) + 20) / 340))),
                (a = Math.max(320, (l - 20 * (n - 1)) / n)),
                (i = Math.ceil(e / n)),
                { tileWidth: a, columns: n, rows: i }
            );
        }, [t.length, C, 48]),
        N = (0, q.GV)(),
        E = a.useRef(null),
        w = a.useMemo(() => {
            let e = Math.max(1, k),
                t = [];
            for (let l of y) {
                let n = Math.ceil(l.clips.length / e);
                for (let a = 0; a < n; a++) t.push(Math.min(e, l.clips.length - a * e));
            }
            return t;
        }, [y, k]),
        P = a.useCallback(
            (e, t, l) =>
                new Promise((e) => {
                    E.current?.scrollRowIntoView(t);
                    let n = 0;
                    requestAnimationFrame(function t() {
                        null != document.querySelector(l) || n >= 10 ? e() : (n++, requestAnimationFrame(t));
                    });
                }),
            [],
        ),
        {
            getContainerProps: L,
            getItemProps: I,
            getRowProps: M,
        } = (0, K.A)({ navId: N, columnCounts: w, prepareFocus: P }),
        S = a.useMemo(() => y.map((e) => Math.ceil(e.clips.length / k)), [y, k]),
        D = a.useMemo(() => S.reduce((e, t) => e + t, 0), [S]),
        _ = Math.floor(b / eh) + 20,
        R = y.length > 0 ? `${x}:${g ?? ""}:${j ?? ""}` : null,
        H = (function (e) {
            let t = (0, u.bG)([A.Ay], () => A.Ay.useReducedMotion),
                [l, n] = a.useState(null),
                [i, s] = a.useState(null);
            return (
                e !== l && (n(e), null != e && s(e)),
                a.useEffect(() => {
                    if (null == i) return;
                    let e = window.setTimeout(() => s(null), 1200);
                    return () => window.clearTimeout(e);
                }, [i]),
                !t && null != i
            );
        })(R),
        F = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = y[l];
                if (null == r) return null;
                let o = a * k,
                    c = r.clips.slice(o, o + k);
                return (0, n.jsx)(
                    "div",
                    {
                        className: tt.UX,
                        ...M(e),
                        children: c.map((t, l) => {
                            let a = { width: b };
                            return (
                                H && (a["--custom-entrance-delay"] = `${te(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: H ? tl.$ : void 0,
                                        style: a,
                                        children: (0, n.jsx)(e1, {
                                            actionsDisabled: f,
                                            isNew: m.includes(t.id),
                                            onClick: i ?? s,
                                            onEdit: s,
                                            clip: t,
                                            gridItemProps: I(l, e),
                                        }),
                                    },
                                    `${R ?? "static"}:${t.id}`,
                                )
                            );
                        }),
                    },
                    `row-${l}-${a}`,
                );
            },
            [y, k, b, f, m, i, s, M, I, H, R],
        ),
        z = a.useCallback(
            (e) => {
                let t = y[e];
                return t?.description != null ? 66 : 44;
            },
            [y],
        ),
        O = a.useCallback(
            (e) => {
                let t = y[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: tt.aE,
                              children: [
                                  (0, n.jsx)(h.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, n.jsx)(p.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: tt.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [y],
        );
    if (!r && 0 === y.length) return (0, n.jsx)(ef, { isEmptyBecauseQuery: l > 0 });
    if (r && 0 === y.length) return (0, n.jsx)("div", { className: tt.dc, children: (0, n.jsx)(V.y, {}) });
    let U = (0, n.jsx)($.A, {
            ref: E,
            role: "none presentation",
            className: tt.Vb,
            listPadding: v,
            renderRow: F,
            renderSectionHeader: O,
            rowCount: D,
            rowCountBySection: S,
            rowHeight: _,
            sectionHeaderHeight: z,
            onResize: d,
        }),
        { onFocus: G, ...B } = L();
    return (0, n.jsx)("div", { className: tt.UT, ...B, children: U });
}
var ta = l(405433),
    ti = l(241326),
    ts = l(27232),
    tr = l(505930),
    to = l(322911);
function tc(e) {
    let {
            selectedCount: t,
            allSelectedFavorited: l,
            onClear: a,
            onFavorite: i,
            onDelete: s,
            onShare: r,
            isSharing: o = !1,
        } = e,
        c = t > 10,
        u = ec.intl.string(l ? eo.default.IZsalP : eo.default.ihBfyA),
        d = (0, n.jsx)(ek.$, {
            variant: "primary",
            size: "sm",
            icon: ta.ShareIcon,
            text: ec.intl.string(ec.t.RDE0Sc),
            onClick: r,
            disabled: c,
            loading: o,
        });
    return (0, n.jsxs)("div", {
        "aria-label": ec.intl.string(ec.t.z2jK6X),
        role: "region",
        className: to.M0,
        children: [
            (0, n.jsxs)("div", {
                className: to.h5,
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: ec.intl.format(eo.default.cSfYIv, { count: t }),
                    }),
                    (0, n.jsx)("span", { className: to.Om, "aria-hidden": "true" }),
                    (0, n.jsx)(ey.D, {
                        className: to.IU,
                        onClick: a,
                        children: (0, n.jsx)(p.E, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: ec.intl.string(ec.t.VkKicb),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: to.o1,
                children: [
                    (0, n.jsx)(j.m, {
                        text: ec.intl.string(ec.t.oyYWHE),
                        children: (0, n.jsx)(y.K, {
                            onClick: s,
                            icon: ti.TrashIcon,
                            size: "sm",
                            variant: "secondary",
                            "aria-label": ec.intl.string(ec.t.oyYWHE),
                        }),
                    }),
                    (0, n.jsx)(
                        j.m,
                        {
                            text: u,
                            children: (0, n.jsx)(y.K, {
                                onClick: i,
                                icon: l ? ts.StarIcon : tr.y,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": u,
                            }),
                        },
                        `favorite:${l}`,
                    ),
                    (0, n.jsx)(j.m, {
                        text: c ? ec.intl.string(eo.default.qpw1d9) : null,
                        asContainer: !0,
                        children: d,
                    }),
                ],
            }),
        ],
    });
}
var tu = l(70860);
function td(e) {
    let { onClose: t } = e,
        i = a.useRef(null);
    return (
        a.useEffect(() => {
            let e = i.current;
            if (null == e) return;
            e.focus();
            let t = !1,
                n = null;
            return (
                l
                    .e("175426")
                    .then(l.bind(l, 582420))
                    .then((l) => {
                        let { startDoggoGame: a } = l;
                        t || (n = a(e));
                    })
                    .catch(() => {}),
                () => {
                    ((t = !0), n?.());
                }
            );
        }, []),
        (0, n.jsxs)("div", {
            className: tu.kL,
            children: [
                (0, n.jsx)("canvas", { ref: i, className: tu.Ji, tabIndex: 0, "aria-label": "Doggo Game" }),
                (0, n.jsx)("div", {
                    className: tu.b,
                    children: (0, n.jsx)(y.K, {
                        onClick: t,
                        icon: C.XLargeIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": ec.intl.string(ec.t.cpT0Cq),
                    }),
                }),
            ],
        })
    );
}
let tm = [
    "arrowup",
    "arrowup",
    "arrowdown",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "arrowleft",
    "arrowright",
    "b",
    "a",
];
var tf = l(265872),
    th = l(847374),
    tx = l(980707),
    tg = l(477782),
    tp = l(112173),
    tj = l(97808),
    ty = l(683438),
    tv = l(548118),
    tC = l(71393),
    tb = l(341923),
    tk = l(305866),
    tA = l(441349),
    tN = l(789645),
    tE = l(620409),
    tw = l(569737);
function tP(e) {
    return (e.setHours(0, 0, 0, 0), e.getTime());
}
function tL(e) {
    return (e.setHours(23, 59, 59, 999), e.getTime());
}
function tI(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tE.Xj)();
    return { preset: "custom", after: null != e ? tP(e.toDate(l)) : null, before: null != t ? tL(t.toDate(l)) : null };
}
function tM(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tw.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tS = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tD(e) {
    return tS.format(new Date(e));
}
function tT(e) {
    switch (e.preset) {
        case "today":
            return ec.intl.string(eo.default.yOAWWM);
        case "yesterday":
            return ec.intl.string(eo.default["PtV/Ti"]);
        case "last-3-days":
            return ec.intl.string(eo.default.xfmv7I);
        case "this-year":
            return ec.intl.string(eo.default["+eE7zX"]);
        case "last-year":
            return ec.intl.string(eo.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tD(e.after) : null,
                l = null != e.before ? tD(e.before) : null;
            if (null != t && null != l)
                return ec.intl.formatToPlainString(eo.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return ec.intl.formatToPlainString(eo.default.k1FkTL, { date: t });
            if (null != l) return ec.intl.formatToPlainString(eo.default["4NlpHD"], { date: l });
            return ec.intl.string(eo.default.tv9apA);
        }
    }
}
var t_ = l(435021);
function tR(e) {
    let { closePopout: t } = e,
        l = (0, e4.P)((e) => e.dateFilter),
        i = (0, e4.P)((e) => e.setDateFilter),
        [r, o] = a.useState(l?.preset === "custom"),
        [c, u] = a.useState(() => (l?.preset === "custom" ? tM(l.after) : null)),
        [d, m] = a.useState(() => (l?.preset === "custom" ? tM(l.before) : null)),
        f = a.useMemo(
            () => [
                { key: "today", label: ec.intl.string(eo.default.yOAWWM) },
                { key: "yesterday", label: ec.intl.string(eo.default["PtV/Ti"]) },
                { key: "last-3-days", label: ec.intl.string(eo.default.xfmv7I) },
                { key: "this-year", label: ec.intl.string(eo.default["+eE7zX"]) },
                { key: "last-year", label: ec.intl.string(eo.default.Nwj9v0) },
            ],
            [],
        ),
        h = l?.preset ?? null,
        x = r && "custom" !== h ? null : h,
        g = a.useMemo(() => (0, tE.Ec)((0, tE.Xj)()), []),
        v = a.useCallback(
            (e) => {
                (i(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tP(new Date(t)), before: tL(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tP(new Date(l)), before: tL(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 2), { preset: e, after: tP(l), before: tL(new Date(t)) }
                                );
                            }
                            case "this-year": {
                                let l = t.getFullYear();
                                return {
                                    preset: e,
                                    after: new Date(l, 0, 1, 0, 0, 0, 0).getTime(),
                                    before: new Date(l, 11, 31, 23, 59, 59, 999).getTime(),
                                };
                            }
                            case "last-year": {
                                let l = t.getFullYear() - 1;
                                return {
                                    preset: e,
                                    after: new Date(l, 0, 1, 0, 0, 0, 0).getTime(),
                                    before: new Date(l, 11, 31, 23, 59, 59, 999).getTime(),
                                };
                            }
                        }
                    })(e),
                ),
                    t());
            },
            [i, t],
        ),
        C = a.useCallback(() => {
            o((e) => !e);
        }, []),
        b = a.useCallback(
            (e) => {
                (u(e), i(tI(e, d)));
            },
            [d, i],
        ),
        k = a.useCallback(
            (e) => {
                (m(e), i(tI(c, e)));
            },
            [c, i],
        ),
        A = a.useCallback(() => {
            (u(null), m(null), i(null));
        }, [i]),
        N = null != c || null != d,
        E = a.useRef(null),
        w = a.useCallback(() => Array.from(E.current?.querySelectorAll('[role="button"]') ?? []), []),
        P = a.useCallback(
            (e) => {
                if ("ArrowDown" !== e.key && "ArrowUp" !== e.key) return;
                let t = w();
                if (0 === t.length) return;
                (e.preventDefault(), e.stopPropagation());
                let l = t.indexOf(e.target);
                if (-1 === l) return void ("ArrowDown" === e.key ? t[0] : t[t.length - 1])?.focus();
                let n = Math.min(t.length - 1, Math.max(0, l + ("ArrowDown" === e.key ? 1 : -1)));
                t[n]?.focus();
            },
            [w],
        ),
        L = a.useCallback(
            (e) => {
                let l = e.relatedTarget;
                (null != l && (e.currentTarget.contains(l) || null != l.closest('[role="dialog"]'))) || t();
            },
            [t],
        );
    return (0, n.jsx)(tk.l, {
        "aria-label": ec.intl.string(eo.default.upqksT),
        onBlur: L,
        children: (0, n.jsxs)("div", {
            className: s()(t_.SW, r && t_.Td),
            children: [
                (0, n.jsxs)("div", {
                    className: t_.sh,
                    children: [
                        (0, n.jsx)(p.E, {
                            variant: "eyebrow",
                            color: "text-muted",
                            className: t_.a9,
                            children: ec.intl.string(eo.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: E,
                            className: t_.eF,
                            onKeyDown: P,
                            children: [
                                f.map((e) =>
                                    (0, n.jsx)(
                                        ey.D,
                                        {
                                            className: s()(t_.zD, x === e.key && t_.pH),
                                            onClick: () => v(e.key),
                                            "aria-pressed": x === e.key,
                                            children: (0, n.jsx)(p.E, {
                                                variant: "text-sm/medium",
                                                color: "currentColor",
                                                children: e.label,
                                            }),
                                        },
                                        e.key,
                                    ),
                                ),
                                (0, n.jsxs)(ey.D, {
                                    className: s()(t_.zD, t_.Kl, (r || "custom" === h) && t_.pH),
                                    onClick: C,
                                    "aria-expanded": r,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "currentColor",
                                            children: ec.intl.string(eo.default.tv9apA),
                                        }),
                                        (0, n.jsx)(p.E, {
                                            variant: "text-md/medium",
                                            color: "text-muted",
                                            className: t_.Xt,
                                            children: r ? "\u25C0" : "\u25B6",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: t_.ML,
                    "aria-hidden": !r,
                    children: [
                        (0, n.jsxs)("div", {
                            className: t_.U6,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: t_._2,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: t_.bk,
                                            "aria-hidden": !0,
                                            children: ec.intl.string(eo.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: t_.h0,
                                            children: [
                                                (0, n.jsx)(tA.l, {
                                                    label: ec.intl.string(eo.default["96vZuU"]),
                                                    hideLabel: !0,
                                                    value: c,
                                                    onChange: b,
                                                    maxValue: d ?? g,
                                                }),
                                                null != c &&
                                                    (0, n.jsx)(j.m, {
                                                        text: ec.intl.string(ec.t.VkKicb),
                                                        children: (0, n.jsx)(y.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tN.P,
                                                            onClick: () => b(null),
                                                            "aria-label": ec.intl.string(ec.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: t_._2,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: t_.bk,
                                            "aria-hidden": !0,
                                            children: ec.intl.string(eo.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: t_.h0,
                                            children: [
                                                (0, n.jsx)(tA.l, {
                                                    label: ec.intl.string(eo.default["GL51/b"]),
                                                    hideLabel: !0,
                                                    value: d,
                                                    onChange: k,
                                                    minValue: c ?? void 0,
                                                    maxValue: g,
                                                }),
                                                null != d &&
                                                    (0, n.jsx)(j.m, {
                                                        text: ec.intl.string(ec.t.VkKicb),
                                                        children: (0, n.jsx)(y.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tN.P,
                                                            onClick: () => k(null),
                                                            "aria-label": ec.intl.string(ec.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        N &&
                            (0, n.jsx)("div", {
                                className: t_.dS,
                                children: (0, n.jsx)(J.Q, {
                                    size: "sm",
                                    text: ec.intl.string(ec.t.VkKicb),
                                    onClick: A,
                                }),
                            }),
                    ],
                }),
            ],
        }),
    });
}
var tH = l(91871),
    tF = l.n(tH),
    tz = l(190199),
    tO = l(914427),
    tU = l(724141);
function tG(e) {
    let {
            triggerLabel: t,
            options: l,
            selectedKeys: i,
            onToggle: s,
            multiSelect: r,
            searchPlaceholder: o,
            emptyStateText: c,
        } = e,
        u = a.useRef(null),
        d = a.useMemo(() => new Set(i), [i]),
        m = a.useCallback(
            (e) => {
                let t;
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tF()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, n.jsxs)(
                            tz.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, n.jsx)("span", { className: tU.H, children: e.icon }),
                                    (0, n.jsx)(tz.x4.Label, { children: e.label }),
                                    r ? (0, n.jsx)(tz.x4.Checkbox, {}) : (0, n.jsx)(tz.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        f = i.size > 0 ? `${t} (${i.size})` : t;
    return (0, n.jsx)(tf.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: u,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(tO.p, {
                "aria-label": t,
                placeholder: o,
                value: d,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: c ?? ec.intl.string(ec.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(ek.$, {
                ...e,
                buttonRef: u,
                size: "sm",
                variant: "secondary",
                text: f,
                icon: th.a,
                iconPosition: "end",
            }),
    });
}
var tK = l(187671);
function tV(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: i } = e;
    return (0, n.jsxs)("div", {
        className: tK.Io,
        children: [
            null != l && (0, n.jsx)("span", { className: tK.Kk, children: l }),
            (0, n.jsx)(p.E, {
                className: tK.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, n.jsx)(ey.D, {
                className: tK.DT,
                onClick: a,
                "aria-label": i ?? ec.intl.string(ec.t.N86XcP),
                children: (0, n.jsx)(tN.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t$ = l(401756);
let tq = { all: eo.default.lscwjQ, auto: eo.default.xrOIkz, manual: eo.default.D7HSLJ };
function tB() {
    let e = (0, e4.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? tT(e) : ec.intl.string(eo.default.upqksT);
    return (0, n.jsx)(tf.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tR, { closePopout: t });
        },
        children: (e) =>
            (0, n.jsx)(ek.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: th.a,
                iconPosition: "end",
            }),
    });
}
function tY() {
    let e = (0, e4.P)((e) => e.sortOrder),
        t = (0, e4.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        i = e === G.mu.OLDEST ? ec.intl.string(ec.t["0gitSE"]) : ec.intl.string(ec.t["4LLKx3"]);
    return (0, n.jsx)(tf.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tx.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": ec.intl.string(ec.t.XvNMNk),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(tg.rX, {
                    children: [
                        (0, n.jsx)(tg.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: ec.intl.string(ec.t["4LLKx3"]),
                            action: () => {
                                (t(G.mu.MOST_RECENT), a());
                            },
                            checked: e === G.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(tg.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: ec.intl.string(ec.t["0gitSE"]),
                            action: () => {
                                (t(G.mu.OLDEST), a());
                            },
                            checked: e === G.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(ek.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: i, icon: tp.J }),
    });
}
function tQ() {
    let e = (0, e4.P)((e) => e.clipMethodFilter),
        t = (0, e4.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null);
    return (0, n.jsx)(tf.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tx.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": ec.intl.string(eo.default["kIqbb/"]),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(tg.rX, {
                    children: [
                        (0, n.jsx)(tg.iD, {
                            id: "method-all",
                            group: "method",
                            label: ec.intl.string(eo.default.lscwjQ),
                            action: () => {
                                (t("all"), a());
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(tg.iD, {
                            id: "method-auto",
                            group: "method",
                            label: ec.intl.string(eo.default.xrOIkz),
                            action: () => {
                                (t("auto"), a());
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(tg.iD, {
                            id: "method-manual",
                            group: "method",
                            label: ec.intl.string(eo.default.D7HSLJ),
                            action: () => {
                                (t("manual"), a());
                            },
                            checked: "manual" === e,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(ek.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: ec.intl.string(eo.default["kIqbb/"]),
                icon: th.a,
                iconPosition: "end",
            }),
    });
}
function tX(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: i } = e,
        s = (0, e4.P)((e) => e.query),
        r = (0, e4.P)((e) => e.setQuery),
        o = (0, e4.P)((e) => e.pendingSearchFocus),
        c = (0, e4.P)((e) => e.setPendingSearchFocus),
        u = a.useRef(null),
        d = (0, e4.P)((e) => e.activeMainLink),
        m = (0, e4.P)((e) => e.clipMethodFilter),
        f = (0, e4.P)((e) => e.setClipMethodFilter),
        h = (0, e4.P)((e) => e.gameFacet),
        x = (0, e4.P)((e) => e.clippedWithFacet),
        g = (0, e4.P)((e) => e.selectedGameIds),
        p = (0, e4.P)((e) => e.selectedUserIds),
        j = (0, e4.P)((e) => e.selectedGuildId),
        y = (0, e4.P)((e) => e.selectedActivity),
        v = (0, e4.P)((e) => e.dateFilter),
        C = (0, e4.P)((e) => e.toggleGameId),
        b = (0, e4.P)((e) => e.toggleUserId),
        k = (0, e4.P)((e) => e.setSelectedGuildId),
        A = (0, e4.P)((e) => e.setSelectedActivity),
        N = (0, e4.P)((e) => e.setDateFilter),
        E = (0, e4.P)((e) => e.clearFilters);
    a.useEffect(() => {
        o && (u.current?.focus(), c(!1));
    }, [o, c]);
    let w = a.useRef(null);
    a.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != h ? [h] : Array.from(g),
            date_filter_range: null != v ? v.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != j,
            filtered_by_participants: null != x || p.size > 0,
            filtered_by_favorites: d === G.oH.FAVORITES,
            filtered_by_activity: null != y,
        };
        if (
            !(
                "" !== e.type_filter ||
                e.game_filter_application_ids.length > 0 ||
                "" !== e.date_filter_range ||
                e.filtered_by_server ||
                e.filtered_by_participants ||
                e.filtered_by_favorites ||
                e.filtered_by_activity
            )
        ) {
            w.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== w.current && ((w.current = t), eD.default.track(er.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, h, g, v, j, x, p, d, y]);
    let I = a.useMemo(() => l.map((e) => e.key), [l]),
        M = (0, P.A)(I),
        D = a.useMemo(() => new Map(M.map((e) => [e?.id, e])), [M]),
        T = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, n.jsx)(L.A, { game: D.get(e.key), size: L.M.XSMALL }),
                })),
            [l, D],
        ),
        _ = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = tC.A.getGuild(e);
                        null != t && l.push({ key: e, label: t.name, guild: t });
                    }
                    return (l.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), l);
                })(t),
            [t],
        ),
        R = a.useMemo(
            () =>
                _.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, n.jsx)(tv.Ay, { guild: e.guild, size: tv.Ay.Sizes.MINI }),
                })),
            [_],
        ),
        H = a.useMemo(() => new Map(_.map((e) => [e.key, e.guild])), [_]),
        F = a.useMemo(
            () =>
                null == h
                    ? []
                    : (function (e) {
                          let t = new Set();
                          for (let l of e)
                              (l.activity?.state != null && "" !== l.activity.state && t.add(l.activity.state),
                                  l.activity?.details != null &&
                                      "" !== l.activity.details &&
                                      t.add(l.activity.details));
                          return Array.from(t).sort((e, t) => e.toLowerCase().localeCompare(t.toLowerCase()));
                      })(t.filter((e) => e.applicationId === h)).map((e) => ({ key: e, label: e })),
            [t, h],
        ),
        z = a.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = S.default.getUser(l.key);
                        null != e &&
                            t.push({
                                key: l.key,
                                label: e.globalName ?? e.username,
                                avatarUrl: e.getAvatarURL(null, 32),
                            });
                    }
                    return (t.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), t);
                })(i).map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, n.jsx)(tj.eu, { src: e.avatarUrl, size: eb._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [i],
        ),
        O = a.useMemo(() => (null != j ? new Set([j]) : new Set()), [j]),
        U = a.useMemo(() => (null != y ? new Set([y]) : new Set()), [y]),
        K = a.useCallback(
            (e) => {
                k(j === e ? null : e);
            },
            [j, k],
        ),
        V = a.useCallback(
            (e) => {
                A(y === e ? null : e);
            },
            [y, A],
        ),
        $ = null == h,
        q = null == x,
        B = (0, tb.HN)() && d !== G.oH.AUTO_CLIPS,
        Y = ec.intl.string(tq[m]),
        Q = (0, n.jsxs)(n.Fragment, {
            children: [
                $ &&
                    Array.from(g).map((e) => {
                        let t = T.find((t) => t.key === e);
                        return (0, n.jsx)(
                            tV,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(L.A, { game: D.get(e), size: L.M.XSMALL }),
                                onRemove: () => C(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != v && (0, n.jsx)(tV, { label: tT(v), onRemove: () => N(null) }, "date"),
                null != j &&
                    (0, n.jsx)(
                        tV,
                        {
                            label: R.find((e) => e.key === j)?.label ?? j,
                            icon:
                                null != H.get(j)
                                    ? (0, n.jsx)(tv.Ay, { guild: H.get(j), size: tv.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => k(null),
                        },
                        "guild",
                    ),
                q && Array.from(p).map((e) => (0, n.jsx)(tW, { userId: e, onRemove: () => b(e) }, `user-${e}`)),
                null != y && (0, n.jsx)(tV, { label: y, onRemove: () => A(null) }, "activity"),
                B && "all" !== m && (0, n.jsx)(tV, { label: Y, onRemove: () => f("all") }, "method"),
            ],
        }),
        X = ($ && g.size > 0) || null != v || null != j || (q && p.size > 0) || null != y || (B && "all" !== m);
    return (0, n.jsxs)("div", {
        className: t$.kT,
        children: [
            (0, n.jsxs)("div", {
                className: t$.HL,
                children: [
                    (0, n.jsx)("div", {
                        className: t$.MT,
                        children: (0, n.jsx)(ty.I, {
                            ref: u,
                            placeholder: ec.intl.string(ec.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: t$.Zq,
                        children: [
                            B && (0, n.jsx)(tQ, {}),
                            $ &&
                                T.length > 0 &&
                                (0, n.jsx)(tG, {
                                    triggerLabel: ec.intl.string(ec.t.URyqtP),
                                    options: T,
                                    selectedKeys: g,
                                    onToggle: C,
                                    multiSelect: !0,
                                    searchPlaceholder: ec.intl.string(ec.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(tB, {}),
                            R.length > 0 &&
                                (0, n.jsx)(tG, {
                                    triggerLabel: ec.intl.string(ec.t["5qyruI"]),
                                    options: R,
                                    selectedKeys: O,
                                    onToggle: K,
                                    multiSelect: !1,
                                    searchPlaceholder: ec.intl.string(ec.t["5h0QOP"]),
                                }),
                            q &&
                                z.length > 0 &&
                                (0, n.jsx)(tG, {
                                    triggerLabel: ec.intl.string(ec.t.YQ6dJg),
                                    options: z,
                                    selectedKeys: p,
                                    onToggle: (e) => b(e),
                                    multiSelect: !0,
                                    searchPlaceholder: ec.intl.string(ec.t["5h0QOP"]),
                                }),
                            F.length > 0 &&
                                (0, n.jsx)(tG, {
                                    triggerLabel: ec.intl.string(ec.t.agRtPG),
                                    options: F,
                                    selectedKeys: U,
                                    onToggle: V,
                                    multiSelect: !1,
                                    searchPlaceholder: ec.intl.string(ec.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(tY, {}),
                        ],
                    }),
                ],
            }),
            X &&
                (0, n.jsxs)("div", {
                    className: t$.eH,
                    children: [
                        Q,
                        (0, n.jsx)(J.Q, {
                            size: "sm",
                            variant: "primary",
                            text: ec.intl.string(ec.t.O8k7O4),
                            onClick: E,
                        }),
                    ],
                }),
        ],
    });
}
function tW(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, u.bG)([S.default], () => S.default.getUser(t), [t]);
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(tV, {
        label: i,
        icon: (0, n.jsx)(tj.eu, { src: a.getAvatarURL(null, 32), size: eb._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var tZ = l(689175),
    tJ = l(449543),
    t0 = l(152858);
function t1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var t2 = l(329924);
function t3(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: i } = e,
        s = a.useMemo(() => t1(t), [t]),
        r = (0, e4.P)((e) => e.setActiveMainLink),
        o = (0, q.GV)(),
        c = a.useMemo(() => [s.length], [s.length]),
        { getContainerProps: u, getItemProps: d, getRowProps: m } = (0, K.A)({ navId: o, columnCounts: c }),
        { onFocus: f, onKeyDown: p, ...j } = u(),
        y = a.useCallback(
            (e) => {
                if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                    (e.preventDefault(),
                        e.stopPropagation(),
                        i?.("ArrowUp" === e.key ? "up" : "down", e.currentTarget));
                    return;
                }
                p(e);
            },
            [p, i],
        ),
        v = { ...j, onKeyDown: y };
    return 0 === s.length
        ? null
        : (0, n.jsxs)("section", {
              className: t2.uW,
              "aria-label": ec.intl.string(eo.default.efLpNC),
              children: [
                  (0, n.jsxs)("div", {
                      className: t2.wx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: t2.mX,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: t2.UP,
                                      children: [
                                          (0, n.jsx)(h.D, {
                                              variant: "heading-lg/medium",
                                              color: "text-default",
                                              children: ec.intl.string(eo.default.I1h8uD),
                                          }),
                                          (0, n.jsx)(x.E, { type: "early_access", variant: "primary", icon: g.t }),
                                      ],
                                  }),
                                  (0, n.jsx)(h.D, {
                                      variant: "display-md",
                                      color: "text-default",
                                      className: t2.DD,
                                      children: ec.intl.string(eo.default.efLpNC),
                                  }),
                              ],
                          }),
                          (0, n.jsx)("div", {
                              className: t2.BX,
                              children: (0, n.jsx)(ek.$, {
                                  variant: "overlay-primary",
                                  size: "sm",
                                  onClick: () => r(G.oH.AUTO_CLIPS),
                                  text: ec.intl.string(eo.default.gCay1w),
                              }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(tJ.A, {
                      className: t2.jG,
                      gap: 16,
                      edgeFade: 0,
                      scrollBehavior: t0.Uf.ITEM,
                      hideActionsWhenDisabled: !0,
                      "aria-label": ec.intl.string(eo.default.efLpNC),
                      gridContainerProps: v,
                      gridRowProps: m(0),
                      children: s.map((e, t) =>
                          (0, n.jsx)(
                              "div",
                              {
                                  className: t2.v2,
                                  children: (0, n.jsx)(e1, {
                                      clip: e,
                                      actionsDisabled: !1,
                                      isNew: !1,
                                      onEdit: l,
                                      onClick: l,
                                      gridItemProps: d(t, 0),
                                  }),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
var t5 = l(770178),
    t8 = l(202163),
    t9 = l(68408);
function t7(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: i,
            onEdit: r,
            onClipClick: o,
            animateEntrance: c,
            entranceRowOffset: d,
            onEdgeNavigate: m,
        } = e,
        { gameRecord: f } = (0, t8.A)(t.applicationId),
        { onShareSession: x } = a.useContext(eZ.$),
        g = a.useCallback(() => {
            x?.(t.clips);
        }, [x, t.clips]),
        j = (0, e4.P)((e) => e.setGameFacet),
        y = (0, e4.P)((e) => e.setActiveMainLink),
        v = t.applicationId,
        C = null != v && "" !== v,
        b = a.useCallback(() => {
            null != v && "" !== v && (j(v), y(G.oH.ALL_CLIPS));
        }, [v, j, y]),
        A = a.useCallback(() => {
            C ? b() : y(G.oH.ALL_CLIPS);
        }, [C, b, y]),
        N = a.useMemo(() => (null == f ? null : (f.getBannerURL(1024) ?? f.screenshotUrls?.[0] ?? null)), [f]),
        E = (0, u.yK)([S.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => S.default.getUser(e)).filter(eT.Vq);
        }),
        w = a.useMemo(() => t.clips.filter((e) => "auto" === e.clipMethod).length, [t.clips]),
        P = eM({ timestamp: t.startedAt }),
        [I, M] = a.useState(800),
        D = (0, k.A)((e) => {
            M(e.target.clientWidth);
        }),
        T = (0, t5.w)(D),
        _ = Math.max(1, (I - 40) / 3),
        R = a.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        H = t.clips.length > 6,
        F = (0, q.GV)(),
        z = a.useMemo(() => R.map((e) => e.length), [R]),
        { getContainerProps: O, getItemProps: U, getRowProps: V } = (0, K.A)({ navId: F, columnCounts: z }),
        { onFocus: $, onKeyDown: B, ...Y } = O(),
        Q = a.useCallback(
            (e) => {
                if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                    let t = Array.from(e.currentTarget.querySelectorAll('[role="row"]')),
                        l = t.findIndex((t) => t.contains(e.target)),
                        n =
                            -1 !== l && "ArrowUp" === e.key && 0 === l
                                ? "up"
                                : -1 !== l && "ArrowDown" === e.key && l === t.length - 1
                                  ? "down"
                                  : null;
                    if (null != n) {
                        (e.preventDefault(), e.stopPropagation(), m(n, e.currentTarget));
                        return;
                    }
                }
                B(e);
            },
            [B, m],
        );
    return (0, n.jsxs)("section", {
        className: t9.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(t9.tB, null == N && t9.rD),
                style: null != N ? { backgroundImage: `url(${N})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: t9.wx,
                children: [
                    C
                        ? (0, n.jsx)(ej.s, {
                              "aria-label": t.applicationName,
                              onClick: b,
                              className: t9.Zn,
                              children: (0, n.jsx)(L.A, {
                                  className: t9.Gt,
                                  game: f,
                                  size: L.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(L.A, { className: t9.Gt, game: f, size: L.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: t9.TK,
                        children: [
                            C
                                ? (0, n.jsx)(ej.s, {
                                      "aria-label": t.applicationName,
                                      onClick: b,
                                      className: t9.wb,
                                      children: (0, n.jsx)(h.D, {
                                          variant: "text-md/medium",
                                          color: "text-default",
                                          className: t9.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(h.D, {
                                      variant: "text-md/medium",
                                      color: "text-default",
                                      className: t9.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: t9.mI,
                                children: [
                                    (0, n.jsx)(p.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ec.intl.format(eo.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    w > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: t9.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(p.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: ec.intl.format(eo.default.eRrt7X, { count: w }),
                                                }),
                                            ],
                                        }),
                                    (0, n.jsx)("span", { className: t9.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: P }),
                                    E.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: t9.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(ep.A, { users: E, maxUsers: 5, size: eb._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    t.clips.length > 0 &&
                        null != x &&
                        (0, n.jsx)("div", {
                            className: t9.$s,
                            children: (0, n.jsx)(ek.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: ta.ShareIcon,
                                text: ec.intl.string(eo.default.l34lLs),
                                onClick: g,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                ref: T,
                className: t9.Vg,
                ...Y,
                tabIndex: -1,
                onKeyDown: Q,
                children: R.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: t9.UX,
                            ...V(t),
                            children: e.map((e, a) => {
                                let s = { width: _ };
                                return (
                                    c && (s["--custom-entrance-delay"] = `${te(d + t + a)}ms`),
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: c ? tl.$ : void 0,
                                            style: s,
                                            children: (0, n.jsx)(e1, {
                                                clip: e,
                                                actionsDisabled: i,
                                                isNew: l.includes(e.id),
                                                onClick: o ?? r,
                                                onEdit: r,
                                                gridItemProps: U(a, t),
                                            }),
                                        },
                                        e.id,
                                    )
                                );
                            }),
                        },
                        `row-${t}`,
                    ),
                ),
            }),
            H &&
                (0, n.jsx)("div", {
                    className: t9.Vc,
                    children: (0, n.jsx)(ek.$, {
                        variant: "secondary",
                        size: "sm",
                        text: ec.intl.string(eo.default.pqk9U0),
                        onClick: A,
                    }),
                }),
        ],
    });
}
var t6 = l(799888);
function t4(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: i, onClipClick: s, isLoading: r, onScroll: o } = e,
        c = (0, tb.HN)(),
        d = a.useMemo(() => t1(t), [t]),
        m = c && d.length > 0,
        f = (0, u.yK)([T.Ay], () => T.Ay.getNewClipIds()),
        x = (0, u.bG)([T.Ay], () => T.Ay.getExportingClipIds().size > 0),
        g = (0, e4.P)((e) => e.setActiveMainLink),
        p = a.useCallback(() => {
            g(G.oH.ALL_CLIPS);
        }, [g]),
        j = a.useMemo(() => {
            let e = m ? new Set(d.map((e) => e.id)) : null;
            return (function (e) {
                let t = [...e].sort((e, t) => t.createdAt - e.createdAt),
                    l = [],
                    n = null;
                for (let e of t) {
                    let t = n?.clips[n.clips.length - 1],
                        a = null != n && n.applicationId === e.applicationId,
                        i = null != t && t.createdAt - e.createdAt <= 144e5;
                    null != n && a && i
                        ? n.clips.push(e)
                        : ((n = {
                              id: e.id,
                              applicationId: e.applicationId,
                              applicationName: e.applicationName,
                              startedAt: e.createdAt,
                              clips: [e],
                          }),
                          l.push(n));
                }
                return l;
            })(null == e ? t : t.filter((t) => !e.has(t.id))).slice(0, 3);
        }, [t, m, d]),
        y = (0, u.bG)([A.Ay], () => A.Ay.useReducedMotion),
        v = a.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of j) (e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3))));
            return e;
        }, [j]),
        C = a.useRef(null),
        b = a.useCallback((e, t) => {
            let l = C.current;
            if (null == l) return;
            let n = Array.from(l.querySelectorAll('[role="grid"]')),
                a = n.indexOf(t);
            if (-1 === a) return;
            let i = n["down" === e ? a + 1 : a - 1];
            if (null == i) return;
            let s = Array.from(i.querySelectorAll('[role="button"]')).filter((e) => /-\d+-\d+$/.test(e.id)),
                r = "down" === e ? s[0] : s[s.length - 1];
            r?.focus();
        }, []),
        k = a.useCallback(
            (e) => {
                o?.(e.currentTarget.scrollTop);
            },
            [o],
        );
    return j.length > 0 || m
        ? (0, n.jsx)(tZ.Ch, {
              className: t6.iR,
              fade: !0,
              onScroll: k,
              children: (0, n.jsxs)("div", {
                  className: t6.Qs,
                  ref: C,
                  children: [
                      m &&
                          (0, n.jsx)("div", {
                              className: t6.Dk,
                              children: (0, n.jsx)(t3, { clips: t, onEdit: i, onEdgeNavigate: b }),
                          }),
                      j.length > 0 &&
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(h.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-default",
                                      children: ec.intl.string(eo.default.zfTWDE),
                                  }),
                                  j.map((e, t) =>
                                      (0, n.jsx)(
                                          t7,
                                          {
                                              session: e,
                                              recentClipIds: f,
                                              actionsDisabled: x,
                                              onEdit: i,
                                              onClipClick: s,
                                              animateEntrance: !y,
                                              entranceRowOffset: v[t] ?? 0,
                                              onEdgeNavigate: b,
                                          },
                                          e.id,
                                      ),
                                  ),
                                  (0, n.jsx)("div", {
                                      className: t6.dp,
                                      children: (0, n.jsx)(ek.$, {
                                          variant: "primary",
                                          text: ec.intl.string(eo.default.RQtkop),
                                          onClick: p,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : r
          ? (0, n.jsx)("div", { className: t6.dc, children: (0, n.jsx)(V.y, {}) })
          : (0, n.jsx)(ef, { isEmptyBecauseQuery: l > 0 });
}
var le = l(837381),
    lt = l(741918),
    ll = l(812993),
    ln = l(332837),
    la = l(176781),
    li = l(650684),
    ls = l(364522),
    lr = l(625903),
    lo = l(260762),
    lc = l(599428);
function lu(e) {
    let { itemId: t, icon: l, label: a, onClick: i, isSelected: r = !1, isDisabled: o = !1, badgeCount: c = 0 } = e,
        u = o && !r,
        d = (0, le.rm)(t);
    return (0, n.jsx)(j.m, {
        text: a,
        position: "right",
        children: (0, n.jsxs)(ey.D, {
            ...d,
            role: "button",
            onClick: u ? void 0 : i,
            "aria-pressed": r,
            "aria-disabled": u,
            "aria-label": a,
            className: s()(lc.AY, { [lc.Hy]: r, [lc.Is]: u }),
            children: [l, c > 0 && (0, n.jsx)("span", { className: lc.e, children: (0, n.jsx)(ll.hV, { count: c }) })],
        }),
    });
}
function ld(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: i } = e,
        r = (0, e4.P)((e) => e.activeMainLink),
        o = (0, e4.P)((e) => e.gameFacet),
        c = (0, e4.P)((e) => e.clippedWithFacet),
        u = (0, e4.P)((e) => e.setActiveMainLink),
        d = (0, e4.P)((e) => e.setGameFacet),
        m = (0, e4.P)((e) => e.setClippedWithFacet),
        f = (0, e4.P)((e) => e.clearFilters),
        h = (0, e4.P)((e) => e.setPendingContentFocus),
        x = (0, tb.HN)(),
        g = null != o || null != c;
    function p(e) {
        return !g && r === e;
    }
    let j = a.useRef(!1),
        y = a.useCallback(() => {
            j.current && h(!0);
        }, [h]),
        v = a.useCallback(
            (e) => {
                (u(e), d(null), m(null), f(), y());
            },
            [u, d, m, f, y],
        ),
        C = a.useCallback(
            (e) => {
                (d(o === e ? null : e), m(null), u(G.oH.ALL_CLIPS), f(), y());
            },
            [o, d, m, u, f, y],
        ),
        b = a.useCallback(() => {
            (0, el.openUserSettings)(et.X.CLIPS_PANEL);
        }, []),
        k = a.useMemo(() => t.map((e) => e.key), [t]),
        A = (0, P.A)(k),
        N = a.useMemo(() => new Map(A.map((e) => [e?.id, e])), [A]),
        E = (0, q.GV)(),
        w = (0, lo.A)(E),
        { setFocus: I } = w,
        M = o ?? r;
    a.useEffect(() => {
        I(M);
    }, [I, M]);
    let { ref: S, onKeyDown: D, ...T } = (0, le.LT)(w),
        _ = a.useCallback(
            (e) => {
                j.current = e.key === lt.D$.ENTER || e.key === lt.D$.SPACE;
                try {
                    D(e);
                } finally {
                    j.current = !1;
                }
            },
            [D],
        );
    return (0, n.jsx)(le.hD, {
        navigator: w,
        children: (0, n.jsxs)("div", {
            className: lc.H$,
            ...T,
            tabIndex: -1,
            onKeyDown: _,
            ref: S,
            children: [
                (0, n.jsxs)("div", {
                    className: s()(lc.o3, lc.A9),
                    children: [
                        (0, n.jsx)(lu, {
                            itemId: G.oH.HOME,
                            icon: (0, n.jsx)(ln.HomeIcon, { size: "sm", color: "currentColor" }),
                            label: ec.intl.string(eo.default.iVqj8B),
                            isSelected: p(G.oH.HOME),
                            onClick: () => v(G.oH.HOME),
                        }),
                        (0, n.jsx)(lu, {
                            itemId: G.oH.ALL_CLIPS,
                            icon: (0, n.jsx)(la.x, { size: "sm", color: "currentColor" }),
                            label: ec.intl.string(ec.t.dPVrEv),
                            isSelected: p(G.oH.ALL_CLIPS),
                            isDisabled: 0 === l.allClips,
                            badgeCount: i.allClips,
                            onClick: () => v(G.oH.ALL_CLIPS),
                        }),
                        x &&
                            (0, n.jsx)(lu, {
                                itemId: G.oH.AUTO_CLIPS,
                                icon: (0, n.jsx)(li.e, { size: "sm", color: "currentColor" }),
                                label: ec.intl.string(eo.default.ikNKf1),
                                isSelected: p(G.oH.AUTO_CLIPS),
                                isDisabled: 0 === l.autoClips,
                                badgeCount: i.autoClips,
                                onClick: () => v(G.oH.AUTO_CLIPS),
                            }),
                        (0, n.jsx)(lu, {
                            itemId: G.oH.FAVORITES,
                            icon: (0, n.jsx)(ts.StarIcon, { size: "sm", color: "currentColor" }),
                            label: ec.intl.string(ec.t["9rlCk1"]),
                            isSelected: p(G.oH.FAVORITES),
                            onClick: () => v(G.oH.FAVORITES),
                        }),
                    ],
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: lc.Gz }),
                            (0, n.jsx)(ls.Ip, {
                                className: s()(lc.UZ, lc.A9),
                                fade: !0,
                                children: t.map((e) => {
                                    let t = o === e.key;
                                    return (0, n.jsx)(
                                        lu,
                                        {
                                            itemId: e.key,
                                            icon: (0, n.jsx)(L.A, {
                                                game: N.get(e.key),
                                                size: L.M.SMALL,
                                                className: lc.az,
                                            }),
                                            label: e.name,
                                            isSelected: t,
                                            isDisabled: e.isDisabled,
                                            badgeCount: e.newCount,
                                            onClick: () => C(e.key),
                                        },
                                        e.key,
                                    );
                                }),
                            }),
                        ],
                    }),
                (0, n.jsx)("div", {
                    className: s()(lc.Ms, lc.A9),
                    children: (0, n.jsx)(lu, {
                        itemId: "settings",
                        icon: (0, n.jsx)(lr.SettingsIcon, { size: "sm", color: "currentColor" }),
                        label: ec.intl.string(ec.t["3D5yo/"]),
                        onClick: b,
                    }),
                }),
            ],
        }),
    });
}
var lm = l(409067),
    lf = l(314484);
function lh(e) {
    var t, i;
    let K,
        V,
        $,
        {
            channelId: q,
            onClose: B,
            picker: Y,
            transitionState: Q,
            initialEditingClipId: X,
            initialMainLink: W = G.oH.HOME,
            ...Z
        } = e;
    (0, U.A)();
    let { analyticsLocations: J } = (0, E.Ay)(N.A.CLIPS_GALLERY),
        ee = Y?.onPick,
        et = Y?.allowMultiSelect ?? !0,
        [el, en] = a.useState(new Set()),
        ea = a.useRef(null),
        ei = (0, k.A)((e) => {
            let t = ea.current;
            if (null == t) return;
            let l = Math.min(1, Math.max(0, e) / 40);
            t.style.setProperty("--custom-clips-header-solid-opacity", `${l}`);
        }),
        {
            gamesFacet: es,
            participantsFacet: er,
            filteredClips: eu,
            mainLinkCounts: ed,
            mainLinkNewCounts: em,
            allClips: ef,
        } = (0, lm.ad)(Y?.filterClip),
        eh = (0, u.bG)([T.Ay], () => T.Ay.getSettings().storageLocation),
        [ex, eg] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            eg(!0);
            try {
                await (0, _.Fb)(eh);
            } finally {
                eg(!1);
            }
        })().catch(() => {});
    }, [eh]);
    let { onShareClick: ep } = (0, O.A)(q);
    (a.useEffect(
        () => () => {
            (e4.P.getState().resetAll(), (0, _.Su)());
        },
        [],
    ),
        a.useEffect(() => {
            let e = e4.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(W);
        }, [W]),
        (0, o.l0)(() => {
            T.Ay.hasClips() && M.A.isDeveloper && I.Ay.fireSurveyAction(c.w.POPULATED_CLIP_GALLERY_CLOSED);
        }));
    let ej = (0, u.bG)([T.Ay], () => T.Ay.getExportingClipIds().size > 0),
        [ey, ev] = a.useState(null != X ? "editing" : "gallery"),
        [eC, eb] = a.useState(X ?? null),
        ek = (0, u.bG)([T.Ay], () => (null != eC ? T.Ay.getClipById(eC) : null), [eC]),
        eA = (0, d.useIsModalAtTop)(eq.nm),
        [eN, eE] = a.useState(!1);
    ((t = a.useCallback(() => eE(!0), [])),
        (i = eA && "gallery" === ey && !eN),
        (K = a.useRef(Array(tm.length).fill(""))),
        (V = a.useRef(0)),
        ($ = a.useRef(t)),
        a.useEffect(() => {
            $.current = t;
        }, [t]),
        a.useEffect(() => {
            if (!i) return;
            let e = K.current;
            function t(t) {
                var l;
                if (
                    !t.ctrlKey &&
                    !t.metaKey &&
                    !t.altKey &&
                    (null == (l = t.target) ||
                        "string" != typeof l.tagName ||
                        ("INPUT" !== l.tagName && "TEXTAREA" !== l.tagName && !0 !== l.isContentEditable))
                ) {
                    ((e[V.current] = t.key.toLowerCase()), (V.current = (V.current + 1) % tm.length));
                    for (let t = 0; t < tm.length; t++) if (e[(V.current + t) % tm.length] !== tm[t]) return;
                    $.current();
                }
            }
            return (
                document.addEventListener("keydown", t, { capture: !0, passive: !0 }),
                () => {
                    (document.removeEventListener("keydown", t, { capture: !0 }), e.fill(""), (V.current = 0));
                }
            );
        }, [i]),
        a.useEffect(() => {
            if (eN)
                return (
                    document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0)
                );
            function e(e) {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation());
            }
        }, [eN]));
    let ew = a.useRef(ey);
    ((ew.current = ey), (a.useRef(eC).current = eC));
    let [eP, eL] = a.useState(null != X ? f.ip.ENTERED : f.ip.HIDDEN),
        eI = a.useRef(null),
        eM = (0, e4.P)((e) => e.gameFacet),
        eS = (0, e4.P)((e) => e.clippedWithFacet),
        eD = (0, e4.P)((e) => e.activeMainLink),
        eT = (0, e4.P)((e) => e.currentPage),
        e_ = eT === G.fB.HOME,
        { ref: eR, height: eH = 64 } = (0, b.Ay)(eT),
        eF = 68 + eH,
        ez = e_ ? 68 : eF - 16;
    a.useLayoutEffect(() => {
        ei(0);
    }, [eT, ei]);
    let eO = (0, e4.P)((e) => e.pendingContentFocus),
        eU = (0, e4.P)((e) => e.setPendingContentFocus),
        eG = a.useRef(null);
    a.useEffect(() => {
        if (!eO) return;
        let e = 0,
            t = 0;
        return (
            (t = requestAnimationFrame(function l() {
                let n = eG.current?.querySelector('[role="grid"] [role="button"]');
                if (null != n) {
                    (n.focus(), eU(!1));
                    return;
                }
                if (e++ < 10) {
                    t = requestAnimationFrame(l);
                    return;
                }
                eU(!1);
            })),
            () => cancelAnimationFrame(t)
        );
    }, [eO, eU]);
    let eK = (0, e4.P)(
        (e) =>
            "" !== e.query.trim() ||
            e.selectedGameIds.size > 0 ||
            e.selectedUserIds.size > 0 ||
            null != e.selectedGuildId ||
            null != e.selectedActivity ||
            null != e.dateFilter ||
            "all" !== e.clipMethodFilter,
    );
    a.useEffect(() => {
        eD === G.oH.HOME && eK && e4.P.getState().setActiveMainLink(G.oH.ALL_CLIPS);
    }, [eD, eK]);
    let eV = a.useMemo(() => (null != eM ? [eM] : []), [eM]),
        e$ = (0, P.A)(eV)[0] ?? null,
        eB = (0, u.bG)([S.default], () => (null != eS ? S.default.getUser(eS) : null), [eS]),
        eY = a.useMemo(() => {
            if (null != eM) return es.find((e) => e.key === eM)?.name ?? ec.intl.string(ec.t.dPVrEv);
            if (null != eS) return null != eB ? (eB.globalName ?? eB.username) : eS;
            switch (eD) {
                case G.oH.FAVORITES:
                    return ec.intl.string(ec.t["9rlCk1"]);
                case G.oH.AUTO_CLIPS:
                    return ec.intl.string(eo.default.ikNKf1);
                case G.oH.HOME:
                    return ec.intl.string(eo.default.iVqj8B);
                default:
                    return ec.intl.string(ec.t.dPVrEv);
            }
        }, [eM, eS, eD, es, eB]),
        eQ = a.useMemo(() => {
            if (null != eM) return es.find((e) => e.key === eM)?.count ?? 0;
            if (null != eS) return er.find((e) => e.key === eS)?.count ?? 0;
            switch (eD) {
                case G.oH.HOME:
                    return null;
                case G.oH.AUTO_CLIPS:
                    return ed.autoClips;
                case G.oH.FAVORITES:
                    return ed.favorites;
                default:
                    return ed.allClips;
            }
        }, [eM, eS, eD, es, er, ed]),
        eX = a.useCallback(() => {
            (ev("editing"), A.Ay.useReducedMotion && eL(f.ip.ENTERED));
        }, []),
        eW = a.useCallback((e) => {
            en((t) => {
                let l = new Set(t);
                return (l.has(e) ? l.delete(e) : l.add(e), l);
            });
        }, []),
        eJ = a.useCallback(
            (e) => {
                (eb(e.id), eX());
            },
            [eX],
        ),
        e0 = a.useRef(null != X),
        e1 = a.useCallback(() => {
            ((e0.current = !1), A.Ay.useReducedMotion && eb(null), ev("gallery"));
        }, []),
        e2 = a.useCallback(() => {
            e0.current ? B() : e1();
        }, [e1, B]);
    (a.useEffect(() => {
        function e(e) {
            "Escape" === e.key && "editing" === ew.current && eA && (e.stopPropagation(), e2());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [e2, B, eA]),
        a.useEffect(() => {
            function e(e) {
                if (
                    ("f" !== e.key && "F" !== e.key) ||
                    e.altKey ||
                    e.shiftKey ||
                    ((0, D.isMac)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !eA ||
                    "gallery" !== ew.current
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let t = e4.P.getState();
                (t.currentPage === G.fB.HOME && t.setActiveMainLink(G.oH.ALL_CLIPS), t.setPendingSearchFocus(!0));
            }
            return (document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0));
        }, [eA]),
        a.useEffect(
            () =>
                "editing" === ey && null != eC
                    ? void (0, _.YK)(eC)
                    : ((0, _.TE)(),
                      () => {
                          (0, _.TE)();
                      }),
            [ey, eC],
        ));
    let e3 = a.useCallback(() => {
            en(new Set());
        }, []),
        e5 = el.size > 0,
        e8 = a.useCallback(() => {
            let e = ef.filter((e) => el.has(e.id));
            (0, d.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("913367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, n.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                (e3(), l.onClose());
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [ef, el, e3]),
        e9 = a.useCallback(async () => {
            let e = ef.filter((e) => el.has(e.id));
            await ep({ clips: e, onShared: e3 });
        }, [ef, el, ep, e3]),
        e7 = a.useCallback(
            async (e) => {
                0 !== e.length && (en(new Set(e.map((e) => e.id))), await ep({ clips: e }), e3());
            },
            [ep, e3],
        ),
        e6 = a.useCallback(() => {
            let e = e4.P.getState();
            (e.setGameFacet(null),
                e.setClippedWithFacet(null),
                e.setActiveMainLink(G.oH.ALL_CLIPS),
                e.setPendingSearchFocus(!0));
        }, []),
        te = a.useMemo(() => {
            let e = ef.filter((e) => el.has(e.id));
            return e.length > 0 && e.every((e) => e.isFavorite);
        }, [ef, el]),
        tt = a.useCallback(async () => {
            let e = ef.filter((e) => el.has(e.id)),
                t = !te;
            (await Promise.all(e.filter((e) => e.isFavorite !== t).map((e) => (0, _.Yy)(e.id, { isFavorite: t }, !0))),
                e3());
        }, [ef, el, te, e3]),
        tl = a.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                ef.forEach((n) => {
                    switch (n.decision?.signal?.type) {
                        case eq.Gy.MANUAL:
                            l++;
                            break;
                        case eq.Gy.DISTRIBUTED:
                            t++;
                            break;
                        case void 0:
                            break;
                        default:
                            e++;
                    }
                }),
                {
                    number_of_clips_loaded: ef.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: eD,
                }
            );
        }, [ef, eD]);
    (0, w.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: tl },
        { disableTrack: ex },
        [tl, ex],
    );
    let ta = a.useMemo(
        () => ({
            selectedClipIds: el,
            toggleClipSelection: eW,
            clearSelection: e3,
            isMultiSelectMode: e5,
            picker: Y,
            onShareSession: et ? e7 : void 0,
        }),
        [el, eW, e3, e5, Y, et, e7],
    );
    return (0, n.jsx)(E.f5, {
        value: J,
        children: (0, n.jsx)(eZ.$.Provider, {
            value: ta,
            children: (0, n.jsx)(m.N, {
                onClose: B,
                transitionState: Q,
                "aria-label": eN ? "Doggo Game" : void 0,
                ...Z,
                children: eN
                    ? (0, n.jsx)(td, { onClose: B })
                    : (0, n.jsxs)("div", {
                          className: lf.jT,
                          ref: eI,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: s()(lf.PD, "gallery" === ey && lf.vu),
                                  inert: "gallery" !== ey,
                                  children: [
                                      (0, n.jsx)(ld, { gamesFacet: es, mainLinkCounts: ed, mainLinkNewCounts: em }),
                                      (0, n.jsxs)("div", {
                                          className: lf.Qs,
                                          ref: eG,
                                          style: {
                                              "--custom-clips-header-height": "68px",
                                              "--custom-clips-scroll-inset": `${ez}px`,
                                          },
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  ref: ea,
                                                  className: s()(lf.$Q, !e_ && lf.iF),
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: lf.ev,
                                                          children: [
                                                              null != eM &&
                                                                  (0, n.jsx)(L.A, {
                                                                      game: e$,
                                                                      size: L.M.SMALL,
                                                                      className: lf.Ve,
                                                                      "aria-hidden": !0,
                                                                  }),
                                                              (0, n.jsx)(h.D, {
                                                                  variant: "heading-md/semibold",
                                                                  color: "text-default",
                                                                  className: lf.Yn,
                                                                  children: eY,
                                                              }),
                                                              null == eM &&
                                                                  null == eS &&
                                                                  eD === G.oH.AUTO_CLIPS &&
                                                                  (0, n.jsx)(x.E, {
                                                                      icon: g.t,
                                                                      type: "early_access",
                                                                      variant: "primary",
                                                                  }),
                                                              null != eQ &&
                                                                  !eK &&
                                                                  (0, n.jsxs)("div", {
                                                                      className: lf.Vl,
                                                                      children: [
                                                                          (0, n.jsx)("span", {
                                                                              className: lf.FK,
                                                                              "aria-hidden": "true",
                                                                          }),
                                                                          (0, n.jsx)(p.E, {
                                                                              variant: "text-md/normal",
                                                                              color: "text-muted",
                                                                              children: ec.intl.format(
                                                                                  eo.default["+YIqQM"],
                                                                                  { count: eQ },
                                                                              ),
                                                                          }),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, n.jsxs)("div", {
                                                          className: lf.$s,
                                                          children: [
                                                              (0, n.jsx)(j.m, {
                                                                  position: "bottom",
                                                                  text: ec.intl.string(ec.t["5h0QOP"]),
                                                                  children: (0, n.jsx)(y.K, {
                                                                      onClick: e6,
                                                                      icon: v.MagnifyingGlassIcon,
                                                                      size: "sm",
                                                                      variant: "icon-only",
                                                                      "aria-label": ec.intl.string(ec.t["5h0QOP"]),
                                                                  }),
                                                              }),
                                                              (0, n.jsx)(j.m, {
                                                                  position: "bottom",
                                                                  text: ec.intl.string(ec.t.cpT0Cq),
                                                                  children: (0, n.jsx)(y.K, {
                                                                      onClick: B,
                                                                      icon: C.XLargeIcon,
                                                                      size: "sm",
                                                                      variant: "icon-only",
                                                                      "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                                                  }),
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                              e_
                                                  ? (0, n.jsx)(t4, {
                                                        filteredClips: eu,
                                                        totalClipCount: ef.length,
                                                        onEdit: eJ,
                                                        onClipClick: ee,
                                                        isLoading: ex,
                                                        onScroll: ei,
                                                    })
                                                  : (0, n.jsxs)("div", {
                                                        className: lf.LG,
                                                        children: [
                                                            (0, n.jsx)("div", {
                                                                className: lf.oP,
                                                                ref: eR,
                                                                children: (0, n.jsx)(tX, {
                                                                    allClips: ef,
                                                                    gamesFacet: es,
                                                                    participantsFacet: er,
                                                                }),
                                                            }),
                                                            (0, n.jsx)(tn, {
                                                                onEdit: eJ,
                                                                channelId: q,
                                                                filteredClips: eu,
                                                                totalClipCount: ef.length,
                                                                onClipClick: ee,
                                                                isLoading: ex,
                                                                topInset: eF,
                                                            }),
                                                        ],
                                                    }),
                                              et &&
                                                  e5 &&
                                                  (0, n.jsx)(tc, {
                                                      selectedCount: el.size,
                                                      allSelectedFavorited: te,
                                                      onClear: e3,
                                                      onFavorite: tt,
                                                      onDelete: e8,
                                                      onShare: e9,
                                                      isSharing: ej,
                                                  }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: s()(lf.jN, "editing" === ey && lf.vu),
                                  inert: "editing" !== ey,
                                  onTransitionEnd: () => {
                                      switch (ey) {
                                          case "gallery":
                                              (eb(null), eL(f.ip.HIDDEN));
                                              break;
                                          case "editing":
                                              eL(f.ip.ENTERED);
                                      }
                                  },
                                  children:
                                      null != ek &&
                                      (0, n.jsx)(R.p, {
                                          clip: ek,
                                          modalContainerRef: eI,
                                          children: (0, n.jsxs)(
                                              z.JQ,
                                              {
                                                  children: [
                                                      (0, n.jsx)(F.A, { transitionState: eP, onClose: e2, onBack: e1 }),
                                                      (0, n.jsx)(H.A, { channelId: q, onClose: e2, onExit: B }),
                                                  ],
                                              },
                                              ek.id,
                                          ),
                                      }),
                              }),
                          ],
                      }),
            }),
        }),
    });
}
