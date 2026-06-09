l.d(t, { $: () => lL, default: () => lE });
var i = l(627968),
    a = l(64700),
    n = l(503698),
    s = l.n(n),
    r = l(935399),
    c = l(517846),
    o = l(17928),
    d = l(990078),
    u = l(521489),
    m = l(231723),
    h = l(97808),
    x = l(778712),
    p = l(192308),
    g = l(534514),
    f = l(408278),
    j = l(405433),
    v = l(241326),
    C = l(972213),
    b = l(775602),
    y = l(793574),
    N = l(688810),
    A = l(429913),
    k = l(137177),
    L = l(27620),
    E = l(540999),
    w = l(287809),
    P = l(274372),
    I = l(334686),
    D = l(315240),
    S = l(582633),
    M = l(309777),
    T = l(429364),
    _ = l(352527),
    R = l(280483),
    F = l(111994);
l(321073);
var O = l(562708),
    H = l(834730),
    z = l(289873),
    G = l(139286),
    U = l(962125),
    K = l(989349),
    V = l.n(K),
    $ = l(66455),
    Q = l(342952),
    Y = l(890856),
    X = l(812993),
    B = l(27232),
    q = l(505930),
    W = l(530005),
    Z = l(406810),
    J = l(176781),
    ee = l(661531),
    et = l(983851),
    el = l(31300),
    ei = l(442433),
    ea = l(587895),
    en = l(47167),
    es = l(607470),
    er = l(734057),
    ec = l(71393),
    eo = l(549685),
    ed = l(174459),
    eu = l(58703),
    em = l(403362),
    eh = l(372684),
    ex = l(974293),
    ep = l(226421),
    eg = l(284009),
    ef = l.n(eg),
    ej = l(460905),
    ev = l(713608),
    eC = l(16590),
    eb = l(375708),
    ey = l(788332);
function eN(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    ef()(l?.type === eh.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, o.bG)([w.default], () => w.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(d.m, {
        text: eb.intl.string(eC.default.vTTkFF),
        children: (0, i.jsxs)("div", {
            className: ey.S,
            children: [
                (0, i.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: ey.$, alt: n }),
                (0, i.jsx)(H.E, {
                    color: "always-white",
                    variant: "text-xs/bold",
                    children: eb.intl.formatToPlainString(eC.default.QJ7i8Z, { username: n }),
                }),
            ],
        }),
    });
}
function eA(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, i.jsx)(d.m, {
        text: a,
        children: (0, i.jsxs)("div", {
            className: ey.S,
            children: [
                (0, i.jsx)(t, { size: "xxs", color: "white" }),
                (0, i.jsx)(H.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function ek(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === eh.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case eh.Gy.DISTRIBUTED:
            return (0, i.jsx)(eN, { clip: t });
        case eh.Gy.LAUGHTER:
            return (0, i.jsx)(eA, {
                icon: ej.n,
                text: eb.intl.string(eC.default.bTC23D),
                tooltipText: eb.intl.string(eC.default["ry+jxm"]),
            });
        case eh.Gy.GAME_EVENT:
            return (0, i.jsx)(eA, {
                icon: ev.q,
                text: t.decision.signal.title ?? "",
                tooltipText: eb.intl.string(eC.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eL = l(665039),
    eE = l(718812),
    ew = l(652215),
    eP = l(798594);
let eI = function (e) {
    let { clip: t, actionsDisabled: n, isNew: r, onEdit: c, onClick: d, onHoverChange: u } = e,
        m = (0, o.yK)([w.default], () => t.users.map((e) => w.default.getUser(e)).filter(em.Vq)),
        h = (0, o.bG)([er.A], () => (null != t.channelId ? er.A.getChannel(t.channelId) : null)),
        p = (0, o.bG)([ec.A], () => (null != t.guildId ? ec.A.getGuild(t.guildId) : null)),
        { analyticsLocations: g } = (0, N.Ay)(y.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: j, isMultiSelectMode: v } = a.useContext(lL),
        [C, b] = a.useState(!1),
        A = a.useRef(null),
        k = (0, $.A)(t.editMetadata?.start ?? 0),
        L = f.has(t.id),
        E = t.type === eh.nQ.SCREENSHOT,
        I = (0, en.Ay)(h),
        D = "" === t.applicationName && null != I && "" !== I ? I : t.applicationName,
        S = (0, eu.Fe)(new Date(t.createdAt)),
        M = a.useMemo(() => {
            let e = [];
            return (
                t.type === eh.nQ.VOICE_CLIP
                    ? (p?.name != null && e.push(p.name), null != I && e.push(I))
                    : ("" !== D && null != D && e.push(D),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [D, p?.name, I, t.activity?.state, t.activity?.details, t.type]),
        T = a.useCallback(() => {
            let e = A.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        _ = a.useCallback(() => {
            if ((u?.("" !== t.thumbnail ? t.thumbnail : null), !0 === E)) return;
            let e = A.current;
            null != e && e.paused && ((e.currentTime = k.current), A.current?.play());
        }, [E, k, u, t.thumbnail]),
        R = a.useCallback(() => {
            if ((u?.(null), !0 === E)) return;
            let e = A.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [E, t.editMetadata?.start, u]),
        F = a.useCallback(
            (e) => {
                (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) || R();
            },
            [R],
        ),
        O = a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        z = a.useCallback(() => {
            b(!1);
        }, []),
        G = a.useCallback(
            (e) => {
                b(!0), A.current?.pause();
                let a =
                    v && f.size > 0
                        ? Array.from(f)
                              .map((e) => P.Ay.getClipById(e))
                              .filter(em.Vq)
                        : [t];
                (0, ei.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("39852"),
                            l.e("6619"),
                            l.e("95429"),
                            l.e("91211"),
                            l.e("38601"),
                            l.e("69006"),
                            l.e("18307"),
                            l.e("86456"),
                            l.e("24043"),
                        ]).then(l.bind(l, 197126));
                        return (l) =>
                            (0, i.jsx)(e, {
                                ...l,
                                clips: a,
                                actionsDisabled: n,
                                onShare: () => {
                                    ed.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        clip_runtime: (0, ex.GN)(),
                                    });
                                },
                                onEdit: () => {
                                    c(t),
                                        ed.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            clip_runtime: (0, ex.GN)(),
                                        });
                                },
                                onBeforeDelete: T,
                                onAfterDelete: () => {
                                    ed.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        clip_runtime: (0, ex.GN)(),
                                    });
                                },
                            });
                    },
                    { onClose: z },
                );
            },
            [t, v, f, n, T, z, c],
        ),
        U = a.useCallback(
            (e) => {
                n || (e.preventDefault(), e.stopPropagation(), G(e));
            },
            [n, G],
        ),
        K = a.useCallback(
            (e) => {
                n ||
                    (e.shiftKey ? (e.preventDefault(), j(t.id)) : v ? j(t.id) : null != d && d(t),
                    ed.default.track(ew.HAw.CLIP_GALLERY_CARD_CLICKED, { clip_runtime: (0, ex.GN)() }));
            },
            [n, v, j, t, d],
        );
    return (0, i.jsx)(N.f5, {
        value: g,
        children: (0, i.jsx)("div", {
            className: eP.o8,
            onBlur: F,
            children: (0, i.jsxs)(Y.s, {
                "aria-disabled": n,
                "aria-label": eb.intl.string(!0 === E ? eb.t["HO/oXl"] : eb.t.bt75uw),
                onClick: n ? void 0 : K,
                onContextMenu: U,
                className: s()(eP.QN, { [eP.r9]: n, [eP.in]: C, [eP.wH]: L }),
                onFocus: _,
                onMouseOver: _,
                onMouseLeave: R,
                children: [
                    (0, i.jsx)(eD, { clip: t, isNew: r, videoRef: A, onOpenContextMenu: G, actionsDisabled: n }),
                    (0, i.jsxs)("div", {
                        className: eP.wI,
                        children: [
                            (0, i.jsx)(eT, { clip: t }),
                            (0, i.jsxs)("div", {
                                className: eP.i0,
                                children: [
                                    (0, i.jsx)(eS, { clip: t }),
                                    (0, i.jsx)(H.E, {
                                        className: eP.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: M,
                                    }),
                                    (0, i.jsx)(H.E, {
                                        className: eP.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: S,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: eP.jW,
                                children: (0, i.jsx)(Q.A, {
                                    maxUsers: 3,
                                    users: m,
                                    size: x._3.SIZE_24,
                                    onFocusOverflow: (e) => {
                                        let t = e.relatedTarget,
                                            l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                        t?.parentElement === l ||
                                            (t?.parentElement?.parentElement?.parentElement !== l && _());
                                    },
                                    onClickOverflow: O,
                                    "aria-label": eb.intl.string(eb.t.WTozwe),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
function eD(e) {
    let { clip: t, isNew: l, videoRef: n, onOpenContextMenu: s, actionsDisabled: r } = e,
        c = 0 === t.length,
        o = !0 === t.pending,
        [u, m] = a.useState(0);
    a.useEffect(() => {
        let e = n.current;
        if (null == e || c) return;
        let l = null,
            i = () => {
                if (e.paused || e.ended) {
                    (l = null), m(0);
                    return;
                }
                let a = t.editMetadata?.start ?? 0,
                    n = t.editMetadata?.end ?? e.duration,
                    s = ((e.currentTime - a) / (n - a)) * 100;
                m(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (l = requestAnimationFrame(i));
            },
            a = () => {
                null == l && (l = requestAnimationFrame(i));
            },
            s = () => {
                null != l && (cancelAnimationFrame(l), (l = null), m(0));
            };
        return (
            e.addEventListener("play", a),
            e.addEventListener("pause", s),
            e.addEventListener("ended", s),
            e.paused || a(),
            () => {
                null != l && (cancelAnimationFrame(l), m(0)),
                    e.removeEventListener("play", a),
                    e.removeEventListener("pause", s),
                    e.removeEventListener("ended", s);
            }
        );
    }, [n, c, t.editMetadata]);
    let { durationDisplay: h, isClipEdited: x } = a.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                i = !1;
            if (null != t.editMetadata) {
                let a = null != l && 1e3 * l < t.length,
                    n =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (i = a || n), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let a = V().duration(e),
                n = a.minutes(),
                s = a.seconds();
            return 0 === n
                ? { durationDisplay: `${s}s`, isClipEdited: i }
                : { durationDisplay: `${n}:${s.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [t.length, t.editMetadata]),
        p = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), D.XK(t);
            },
            [t],
        ),
        g = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, i.jsxs)("div", {
        className: eP.QB,
        children: [
            (0, i.jsx)("div", { className: eP.ne }),
            (0, i.jsx)(eM, { clip: t, videoRef: n }),
            (0, i.jsxs)("div", {
                className: eP.ry,
                children: [
                    !o && l && (0, i.jsx)(X.Lp, { text: eb.intl.string(eb.t.y2b7CA) }),
                    (0, i.jsx)(ek, { clip: t }),
                ],
            }),
            !r &&
                (0, i.jsxs)("div", {
                    className: eP.g3,
                    children: [
                        (0, i.jsx)(d.m, {
                            text: eb.intl.string(t.isFavorite ? eC.default.IZsalP : eC.default.ihBfyA),
                            position: "top",
                            children: (0, i.jsx)(f.K, {
                                onClick: p,
                                icon: t.isFavorite ? B.G : q.y,
                                "aria-label": eb.intl.string(eb.t.k8fFjp),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)(f.K, {
                            onClick: g,
                            icon: W.F,
                            "aria-label": eb.intl.string(eb.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                className: eP.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, i.jsxs)("div", {
                            className: eP.OH,
                            children: [
                                t.isTemporary && (0, i.jsx)(Z.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(H.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: eb.intl.string(eb.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, i.jsxs)("div", {
                            className: eP.OH,
                            children: [
                                x && (0, i.jsx)(eo.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(H.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: o ? eb.intl.string(eb.t["2Fp7OP"]) : h,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                u > 0 &&
                (0, i.jsx)("div", {
                    className: eP.X7,
                    children: (0, i.jsx)("div", { className: eP.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function eS(e) {
    let { clip: t } = e,
        l = (0, eE.h)(t),
        a = "" !== l;
    return (0, i.jsx)(H.E, {
        className: eP.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function eM(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, eL.j)(t),
        n = t.type === eh.nQ.SCREENSHOT;
    return t.type === eh.nQ.VOICE_CLIP
        ? (0, i.jsx)(ep.A, { className: eP.fT })
        : n
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eP.fT })
          : null != a
            ? (0, i.jsx)(es.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: eP.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eP.fT })
              : (0, i.jsx)("div", {
                    className: s()(eP.fT, eP.Is),
                    children: (0, i.jsx)(J.x, { color: ee.A.colors.ICON_MUTED }),
                });
}
function eT(e) {
    let { clip: t } = e,
        l = (0, o.bG)([ea.A], () => (null != t.applicationId ? ea.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: eP.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: eP.NH })
                : t.type === eh.nQ.VOICE_CLIP
                  ? (0, i.jsx)(et.H, { size: "sm" })
                  : (0, i.jsx)(el.k, { size: "sm" }),
    });
}
function e_(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: n, width: s = 288, height: r = 162 } = e;
    return (0, i.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/5cbe59588641e0337b4a5e93e16f0ab02d494b2033f96505d343d31aae29d89c.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: n ?? "img",
    });
}
var eR = l(702841),
    eF = l(687966),
    eO = l(475358),
    eH = l(123292),
    ez = l(292801),
    eG = l(780964),
    eU = l(766075),
    eK = l(532624),
    eV = l(350535),
    e$ = l(572164),
    eQ = l(953932),
    eY = l(311162);
function eX(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: eY.Nr,
        children: [t, (0, i.jsx)(H.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function eB() {
    let e = (0, eR.bG)([eK.Ay], () => eK.Ay.getKeybindForAction(ew.hCu.SAVE_CLIP)),
        t = null != e ? eV.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: eY.kR,
        children: [
            (0, i.jsx)(eX, {
                header: (0, i.jsx)(eF._, { size: "refresh_sm", color: ee.A.colors.ICON_DEFAULT }),
                description: eb.intl.string(eC.default["4K56sP"]),
            }),
            (0, i.jsx)(eX, {
                header: null != t ? (0, i.jsx)(eO.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  eb.intl.format(eC.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: eY.JH,
                                      children: (0, i.jsx)(eH.Q, {
                                          text: eb.intl.string(eC.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, eU.openUserSettings)(eG.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : eb.intl.string(eC.default.HOUDUm),
            }),
            (0, i.jsx)(eX, {
                header: (0, i.jsx)(ez.t, { size: "refresh_sm", color: ee.A.colors.ICON_DEFAULT }),
                description: eb.intl.string(eC.default.DLzdl7),
            }),
        ],
    });
}
function eq(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, e$.Et)();
    return (0, i.jsx)("div", {
        className: eY.kL,
        children: (0, i.jsxs)("div", {
            className: eY.Qs,
            children: [
                (0, i.jsx)(e_, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(g.D, {
                    className: eY.wx,
                    variant: "heading-xl/semibold",
                    children: t ? eb.intl.string(eC.default["+M2iLf"]) : eb.intl.string(eC.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(H.E, {
                        className: eY.h_,
                        variant: "text-md/medium",
                        children: eb.intl.string(eC.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: eY.SO, children: (0, i.jsx)(eQ.A, {}) }),
                l && !t && (0, i.jsx)(eB, {}),
            ],
        }),
    });
}
let eW = 16 / 9;
var eZ = l(621466),
    eJ = l(61491),
    e0 = l(821609),
    e1 = l(22231),
    e2 = l(549973),
    e3 = l(609174),
    e9 = l(619744),
    e5 = l(82716),
    e7 = l(585579),
    e4 = l(226870),
    e6 = l(285072),
    e8 = l(742007);
function te(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: n, onEdit: s } = e;
    return (0, i.jsx)(e3.Cl, {
        clip: t,
        children: (0, i.jsx)(tt, { actionsDisabled: l, isNew: a, onClick: n, onEdit: s }),
    });
}
function tt(e) {
    let { actionsDisabled: t, isNew: n, onClick: r, onEdit: c } = e,
        o = (0, e3.Y_)(),
        { analyticsLocations: d } = (0, N.Ay)(y.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: u, toggleClipSelection: m, isMultiSelectMode: h } = a.useContext(lL),
        [x, p] = a.useState(!1),
        [g, f] = a.useState(!1),
        [j, v] = a.useState(!1),
        [C, b] = a.useState(0),
        A = u.has(o.id),
        k = o.type === eh.nQ.SCREENSHOT,
        L = (g || x) && !A;
    a.useEffect(() => {
        if (!L || k) return;
        let e = window.setTimeout(() => v(!0), 150);
        return () => {
            window.clearTimeout(e), v(!1);
        };
    }, [L, k]);
    let E = a.useRef(null),
        w = a.useCallback(() => {
            E.current?.releaseSource();
        }, []),
        I = a.useCallback(() => p(!1), []),
        D = a.useCallback(
            (e) => {
                p(!0);
                let a =
                    h && u.size > 0
                        ? Array.from(u)
                              .map((e) => P.Ay.getClipById(e))
                              .filter(em.Vq)
                        : [o];
                (0, ei.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("39852"),
                            l.e("6619"),
                            l.e("95429"),
                            l.e("91211"),
                            l.e("38601"),
                            l.e("69006"),
                            l.e("18307"),
                            l.e("86456"),
                            l.e("24043"),
                        ]).then(l.bind(l, 197126));
                        return (l) =>
                            (0, i.jsx)(e, {
                                ...l,
                                clips: a,
                                actionsDisabled: t,
                                onShare: () => {
                                    ed.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    c(o), ed.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: w,
                                onAfterDelete: () => {
                                    ed.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: I },
                );
            },
            [o, h, u, t, I, c, w],
        ),
        S = a.useCallback(
            (e) => {
                t || (e.preventDefault(), e.stopPropagation(), D(e));
            },
            [t, D],
        ),
        M = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), D(e);
            },
            [D],
        ),
        T = a.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    c(o),
                    ed.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
            },
            [c, o],
        ),
        _ = a.useCallback(
            (e) => {
                !t &&
                    (!(0, eZ.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") && e.currentTarget.contains(e.target))) &&
                    (e.shiftKey ? (e.preventDefault(), m(o.id)) : h ? m(o.id) : null != r && r(o),
                    ed.default.track(ew.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [t, h, m, o, r],
        );
    return (0, i.jsx)(N.f5, {
        value: d,
        children: (0, i.jsxs)(Y.s, {
            "aria-disabled": t,
            "aria-label": eb.intl.string(k ? eb.t["HO/oXl"] : eb.t.bt75uw),
            onClick: t ? void 0 : _,
            onContextMenu: S,
            className: s()(e8.Nr, { [e8.r9]: t, [e8.in]: x, [e8.wH]: A }),
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            children: [
                (0, i.jsx)("div", {
                    className: e8.w7,
                    children: (0, i.jsxs)(tl, {
                        ref: E,
                        isPlaying: j,
                        onProgressChange: b,
                        children: [
                            (0, i.jsx)(ti, { isNew: n }),
                            L && !t ? (0, i.jsx)(ta, { onMenu: M, onBeforeDelete: w }) : (0, i.jsx)(tn, {}),
                            (0, i.jsx)("div", { className: e8.dH, "aria-hidden": "true" }),
                        ],
                    }),
                }),
                (0, i.jsx)(ts, { showHoverState: L, playbackProgress: C, onEdit: T }),
            ],
        }),
    });
}
let tl = a.forwardRef((e, t) => {
    let { isPlaying: l, onProgressChange: a, children: n } = e;
    return (0, i.jsx)(e4.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: a,
        children: (0, i.jsx)(e6.h, { isVisible: !0, children: n }),
    });
});
function ti(e) {
    let { isNew: t } = e,
        l = (0, e3.Y_)(),
        a = !0 === l.pending;
    return (0, i.jsxs)("div", {
        className: e8.zV,
        children: [
            !a &&
                t &&
                (0, i.jsx)("div", {
                    className: e8.Ad,
                    children: (0, i.jsx)(H.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        children: eb.intl.string(eb.t.y2b7CA),
                    }),
                }),
            (0, i.jsx)(ek, { clip: l }),
        ],
    });
}
function ta(e) {
    let { onMenu: t, onBeforeDelete: l } = e;
    return (0, i.jsxs)("div", {
        className: e8.Mw,
        children: [
            (0, i.jsx)(d.m, {
                text: eb.intl.string(eb.t["UKOtz+"]),
                children: (0, i.jsx)(f.K, {
                    onClick: t,
                    icon: W.F,
                    "aria-label": eb.intl.string(eb.t["UKOtz+"]),
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, i.jsx)(e9.k, { onBeforeDelete: l }),
            (0, i.jsx)(e5.z, {}),
        ],
    });
}
function tn() {
    let e = (0, e3.Y_)(),
        t = 0 === e.length,
        l = !0 === e.pending,
        { durationDisplay: n, isClipEdited: r } = a.useMemo(() => {
            let t = e.length,
                l = null != e.editMetadata ? e.editMetadata.end - e.editMetadata.start : null,
                i = !1;
            if (null != e.editMetadata) {
                let a = null != l && 1e3 * l < e.length,
                    n =
                        !1 === e.editMetadata.applicationAudio ||
                        !1 === e.editMetadata.voiceAudio ||
                        !1 === e.editMetadata.soundboardAudio;
                (i = a || n), null != l && 1e3 * l < e.length && (t = 1e3 * l);
            }
            let a = Math.floor(t / 1e3);
            return { durationDisplay: (0, eJ.rB)(a), isClipEdited: i };
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, i.jsxs)("div", {
              className: s()(e8.cH, e8._s),
              children: [
                  r && (0, i.jsx)(eo.A, { color: "white", width: 14, height: 14 }),
                  (0, i.jsx)(H.E, {
                      variant: "text-xs/bold",
                      color: "always-white",
                      tabularNumbers: !0,
                      children: l ? eb.intl.string(eb.t["2Fp7OP"]) : n,
                  }),
              ],
          });
}
function ts(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: a } = e,
        n = (0, e3.Y_)(),
        s = n.type === eh.nQ.SCREENSHOT,
        r = (0, o.yK)([w.default], () => n.users.map((e) => w.default.getUser(e)).filter(em.Vq)),
        c = (0, o.bG)([er.A], () => (null != n.channelId ? er.A.getChannel(n.channelId) : null)),
        d = (0, o.bG)([ec.A], () => (null != n.guildId ? ec.A.getGuild(n.guildId) : null)),
        u = (0, en.Ay)(c),
        m = "" === n.applicationName && null != u && "" !== u ? u : n.applicationName,
        h = (0, e2.e)({ timestamp: n.createdAt }),
        p = d?.name;
    return (0, i.jsxs)("div", {
        className: e8.yu,
        children: [
            (0, i.jsxs)("div", {
                className: e8.$,
                children: [
                    (0, i.jsx)(tr, {}),
                    r.length > 0 &&
                        (0, i.jsx)("span", {
                            className: e8.HD,
                            "data-clips-avatars": "true",
                            children: (0, i.jsx)(Q.A, {
                                maxUsers: 3,
                                users: r,
                                size: x._3.SIZE_16,
                                "aria-label": eb.intl.string(eb.t.WTozwe),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                className: e8.SO,
                children: t
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              !s &&
                                  (0, i.jsx)("div", {
                                      className: e8.z5,
                                      "aria-hidden": "true",
                                      children: (0, i.jsx)("div", { className: e8.TE, style: { width: `${l}%` } }),
                                  }),
                              (0, i.jsxs)("div", {
                                  className: e8.E_,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: e8.lO,
                                          children: (0, i.jsx)(e0.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              icon: e1.R,
                                              text: eb.intl.string(eb.t.bt75uw),
                                              onClick: a,
                                              fullWidth: !0,
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: e8.lO,
                                          children: (0, i.jsx)(e7.E, { variant: "primary" }),
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)("div", {
                                  className: e8.Pb,
                                  children: [
                                      (0, i.jsx)(tc, {}),
                                      (0, i.jsx)(H.E, {
                                          className: e8.gO,
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: m,
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: e8.eg,
                                  children: [
                                      null != p &&
                                          "" !== p &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(H.E, {
                                                      className: e8.gO,
                                                      variant: "text-xs/normal",
                                                      color: "text-muted",
                                                      children: p,
                                                  }),
                                                  (0, i.jsx)("span", { className: e8.TG, "aria-hidden": "true" }),
                                              ],
                                          }),
                                      (0, i.jsx)(H.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: eb.intl.format(eC.default["0QCBug"], { time: h }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
            }),
        ],
    });
}
function tr() {
    let e = (0, e3.Y_)(),
        t = (0, eE.h)(e),
        l = "" !== t;
    return (0, i.jsx)(H.E, {
        className: e8.DD,
        variant: "text-sm/semibold",
        color: "text-default",
        children: l ? t : e.name,
    });
}
function tc() {
    let e = (0, e3.Y_)(),
        t = (0, o.bG)([ea.A], () => (null != e.applicationId ? ea.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: e8.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, i.jsx)("img", { src: l, alt: "", className: e8.T_ })
                : e.type === eh.nQ.VOICE_CLIP
                  ? (0, i.jsx)(et.H, { size: "xs", color: "currentColor" })
                  : (0, i.jsx)(el.k, { size: "xs", color: "currentColor" }),
    });
}
tl.displayName = "CardThumbnail";
var to = l(792852);
function td(e) {
    return Math.min(45 * e, 520);
}
var tu = l(352528),
    tm = l(32122);
let th = [0, 16, 0, 16],
    tx = th[1] + th[3];
function tp(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s, isLoading: r } = e,
        [c, d] = a.useState({ width: 0, height: 0 }),
        u = (0, o.yK)([P.Ay], () => P.Ay.getNewClipIds()),
        m = (0, o.bG)([P.Ay], () => P.Ay.getExportingClipIds().length > 0),
        { enabled: h } = I.O.useConfig({ location: "ClipsGalleryContent" }),
        x = h ? te : eI,
        p = (0, to.P)((e) => e.activeMainLink),
        f = (0, to.P)((e) => e.gameFacet),
        j = (0, to.P)((e) => e.clippedWithFacet);
    (0, G.A)(
        {
            type: O.ImpressionTypes.MODAL,
            name: O.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: r },
        [t.length, r],
    );
    let v = a.useMemo(() => {
            let e = [],
                l = new Map(),
                i = [],
                a = new Date();
            a.setHours(0, 0, 0, 0);
            let n = a.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        a = new Date(t);
                    if ((a.setHours(0, 0, 0, 0), a.getTime() === n)) i.push(e);
                    else {
                        let i = new Date(t).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            a = l.get(i) ?? [];
                        l.set(i, [...a, e]);
                    }
                }),
                i.length > 0)
            ) {
                let t = i.some((e) => e.isTemporary);
                e.push({
                    type: "today",
                    title: eb.intl.string(eb.t["kB2R/0"]),
                    description: t ? eb.intl.string(eb.t["6AXirz"]) : void 0,
                    clips: i,
                });
            }
            return (
                Array.from(l.entries()).forEach((t) => {
                    let [l, i] = t;
                    e.push({ type: "monthyear", title: l, clips: i });
                }),
                e
            );
        }, [t]),
        { width: C } = c,
        { tileWidth: y, columns: N } = a.useMemo(() => {
            var e, l;
            let i, a, n;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = C - tx) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (n = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: n }
            );
        }, [t.length, C]),
        A = a.useMemo(() => v.map((e) => Math.ceil(e.clips.length / N)), [v, N]),
        k = a.useMemo(() => A.reduce((e, t) => e + t, 0), [A]),
        L = Math.floor(y / eW),
        E = v.length > 0 ? `${p}:${f ?? ""}:${j ?? ""}` : null,
        w = (function (e) {
            let t = (0, o.bG)([b.A], () => b.A.useReducedMotion),
                [l, i] = a.useState(null),
                [n, s] = a.useState(null);
            return (
                e !== l && (i(e), null != e && s(e)),
                a.useEffect(() => {
                    if (null == n) return;
                    let e = window.setTimeout(() => s(null), 1200);
                    return () => window.clearTimeout(e);
                }, [n]),
                !t && null != n
            );
        })(E),
        D = h && w,
        S = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = v[l];
                if (null == r) return null;
                let c = a * N,
                    o = r.clips.slice(c, c + N);
                return (0, i.jsx)(
                    "div",
                    {
                        className: tu.UX,
                        children: o.map((t, l) => {
                            let a = { width: y };
                            return (
                                D && (a["--custom-entrance-delay"] = `${td(e + l)}ms`),
                                (0, i.jsx)(
                                    "div",
                                    {
                                        className: D ? tm.$ : void 0,
                                        style: a,
                                        children: (0, i.jsx)(x, {
                                            actionsDisabled: m,
                                            isNew: u.includes(t.id),
                                            onClick: n ?? s,
                                            onEdit: s,
                                            clip: t,
                                        }),
                                    },
                                    `${E ?? "static"}:${t.id}`,
                                )
                            );
                        }),
                    },
                    `row-${l}-${a}`,
                );
            },
            [v, N, y, m, u, n, s, x, D, E],
        ),
        M = a.useCallback(
            (e) => {
                let t = v[e];
                return t?.description != null ? 66 : 44;
            },
            [v],
        ),
        T = a.useCallback(
            (e) => {
                let t = v[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: tu.aE,
                              children: [
                                  (0, i.jsx)(g.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, i.jsx)(H.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: tu.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [v],
        );
    return r || 0 !== v.length
        ? r && 0 === v.length
            ? (0, i.jsx)("div", { className: tu.dc, children: (0, i.jsx)(z.y, {}) })
            : (0, i.jsx)(U.A, {
                  listPadding: th,
                  renderRow: S,
                  renderSectionHeader: T,
                  rowCount: k,
                  rowCountBySection: A,
                  rowHeight: L + (h ? 96 : 68) + 16,
                  sectionHeaderHeight: M,
                  onResize: d,
              })
        : (0, i.jsx)(eq, { isEmptyBecauseQuery: l > 0 });
}
var tg = l(922016),
    tf = l(783977),
    tj = l(625903),
    tv = l(892547),
    tC = l(939249),
    tb = l(364522),
    ty = l(91871),
    tN = l.n(ty),
    tA = l(980707),
    tk = l(477782),
    tL = l(583650);
function tE(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: n,
            selectedActivity: s,
            selectedGuildId: r,
            dateFilter: c,
            sortOrder: o,
            toggleUserId: d,
            setSelectedActivity: u,
            setSelectedGuildId: m,
            setDateFilter: h,
            setSortOrder: x,
            clearFilters: p,
        } = (0, to.P)(),
        g = a.useMemo(
            () =>
                (function (e) {
                    if (null == e || null == e.after || null == e.before) return null;
                    let t = new Date(e.after),
                        l = new Date(e.before);
                    return t.getFullYear() !== l.getFullYear() ||
                        0 !== t.getMonth() ||
                        1 !== t.getDate() ||
                        11 !== l.getMonth() ||
                        31 !== l.getDate()
                        ? null
                        : t.getFullYear();
                })(c),
            [c],
        ),
        f = a.useCallback(
            (e) => {
                null == e
                    ? h(null)
                    : h({
                          preset: "custom",
                          after: new Date(e, 0, 1, 0, 0, 0, 0).getTime(),
                          before: new Date(e, 11, 31, 23, 59, 59, 999).getTime(),
                      });
            },
            [h],
        ),
        j = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = w.default.getUser(e);
                        if (null != t) {
                            let i = t.globalName ?? t.username;
                            l.push({ userId: e, name: i });
                        }
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        v = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e)
                        l.activity?.state != null && t.add(l.activity.state),
                            l.activity?.details != null && t.add(l.activity.details);
                    return Array.from(t).sort((e, t) => e.localeCompare(t));
                })(l),
            [l],
        ),
        C = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = ec.A.getGuild(e);
                        null != t && l.push({ guildId: e, name: t.name });
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        b = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) {
                        let e = new Date(l.createdAt).getFullYear();
                        t.add(e);
                    }
                    return Array.from(t).sort((e, t) => t - e);
                })(l),
            [l],
        ),
        [y, N] = a.useState(""),
        [A, k] = a.useState(""),
        [L, E] = a.useState(""),
        P = a.useMemo(
            () => (0 === y.trim().length ? j : j.filter((e) => tN()(y.toLowerCase(), e.name.toLowerCase()))),
            [j, y],
        ),
        I = a.useMemo(
            () => (0 === A.trim().length ? C : C.filter((e) => tN()(A.toLowerCase(), e.name.toLowerCase()))),
            [C, A],
        ),
        D = a.useMemo(
            () => (0 === L.trim().length ? v : v.filter((e) => tN()(L.toLowerCase(), e.toLowerCase()))),
            [v, L],
        ),
        S = n.size > 0 || null != s || null != r || null != g,
        M = a.useMemo(() => {
            if (0 !== n.size)
                return j
                    .filter((e) => n.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [n, j]),
        T = a.useMemo(() => {
            if (null == r) return;
            let e = C.find((e) => e.guildId === r);
            return e?.name;
        }, [r, C]),
        _ = a.useMemo(() => s ?? void 0, [s]),
        R = a.useMemo(() => (null != g ? String(g) : void 0), [g]);
    return (0, i.jsxs)(tA.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": eb.intl.string(eb.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(tk.rX, {
                label: "Filter",
                children: [
                    j.length > 0 &&
                        (0, i.jsxs)(tk.Dr, {
                            id: "participants",
                            label: eb.intl.string(eb.t.YQ6dJg),
                            subtext: M,
                            children: [
                                j.length > 20 &&
                                    (0, i.jsx)(tk.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tL.V, {
                                                ...e,
                                                query: y,
                                                onChange: N,
                                                ref: t,
                                                placeholder: eb.intl.string(eb.t["5h0QOP"]),
                                            }),
                                    }),
                                P.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tk.sL,
                                        { id: `participant-${t}`, label: l, action: () => d(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    C.length > 0 &&
                        (0, i.jsxs)(tk.Dr, {
                            id: "servers",
                            label: eb.intl.string(eb.t["5qyruI"]),
                            subtext: T,
                            children: [
                                C.length > 20 &&
                                    (0, i.jsx)(tk.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tL.V, {
                                                ...e,
                                                query: A,
                                                onChange: k,
                                                ref: t,
                                                placeholder: eb.intl.string(eb.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tk.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: eb.intl.string(eb.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                I.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tk.iD,
                                        {
                                            id: `server-${t}`,
                                            group: "server",
                                            label: l,
                                            action: () => m(t),
                                            checked: r === t,
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    v.length > 0 &&
                        (0, i.jsxs)(tk.Dr, {
                            id: "activities",
                            label: eb.intl.string(eb.t.agRtPG),
                            subtext: _,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(tk.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tL.V, {
                                                ...e,
                                                query: L,
                                                onChange: E,
                                                ref: t,
                                                placeholder: eb.intl.string(eb.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tk.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: eb.intl.string(eb.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == s,
                                }),
                                D.map((e) =>
                                    (0, i.jsx)(
                                        tk.iD,
                                        {
                                            id: `activity-${e}`,
                                            group: "activity",
                                            label: e,
                                            action: () => u(e),
                                            checked: s === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    b.length > 0 &&
                        (0, i.jsxs)(tk.Dr, {
                            id: "years",
                            label: eb.intl.string(eb.t.w9zd68),
                            subtext: R,
                            children: [
                                (0, i.jsx)(tk.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: eb.intl.string(eb.t["2/yeUU"]),
                                    action: () => f(null),
                                    checked: null == g,
                                }),
                                b.map((e) =>
                                    (0, i.jsx)(
                                        tk.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => f(e),
                                            checked: g === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(tk.rX, {
                label: eb.intl.string(eb.t.XvNMNk),
                children: [
                    (0, i.jsx)(tk.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: eb.intl.string(eb.t["4LLKx3"]),
                        action: () => x(F.mu.MOST_RECENT),
                        checked: o === F.mu.MOST_RECENT,
                    }),
                    (0, i.jsx)(tk.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: eb.intl.string(eb.t["0gitSE"]),
                        action: () => x(F.mu.OLDEST),
                        checked: o === F.mu.OLDEST,
                    }),
                ],
            }),
            S &&
                (0, i.jsx)(tk.rX, {
                    children: (0, i.jsx)(tk.Dr, { id: "clear-filters", label: eb.intl.string(eb.t.FbDgiu), action: p }),
                }),
        ],
    });
}
var tw = l(7689),
    tP = l(332837),
    tI = l(175841),
    tD = l(724993);
function tS(e) {
    let { icon: t, label: l, trailer: a, isSelected: n, isDisabled: r = !1, onClick: c } = e,
        o = r && !n;
    return (0, i.jsxs)(tC.D, {
        onClick: o ? void 0 : c,
        className: s()(tD.nM, { [tD.CZ]: n, [tD.lr]: o }),
        "aria-pressed": n,
        "aria-disabled": o,
        children: [
            (0, i.jsx)("span", { className: tD.aL, children: t }),
            (0, i.jsx)(H.E, {
                variant: "text-md/medium",
                color: "currentColor",
                className: tD.xZ,
                lineClamp: 1,
                children: l,
            }),
            null != a && (0, i.jsx)("span", { className: tD.iP, children: a }),
        ],
    });
}
function tM() {
    let e = (0, o.bG)([eK.Ay], () => eK.Ay.getKeybindForAction(ew.hCu.SAVE_CLIP)),
        t = (0, to.P)((e) => e.setActiveMainLink),
        l = (0, to.P)((e) => e.setGameFacet),
        n = (0, to.P)((e) => e.setClippedWithFacet),
        s = (0, to.P)((e) => e.setPendingSearchFocus),
        r = a.useCallback(() => {
            (0, eU.openUserSettings)(eG.X.CLIPS_PANEL);
        }, []),
        c = a.useCallback(() => {
            l(null), n(null), t(F.oH.ALL_CLIPS), s(!0);
        }, [l, n, t, s]),
        u = null != e ? eV.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: tD.aN,
        children: [
            (0, i.jsxs)("div", {
                className: tD.pR,
                children: [
                    (0, i.jsx)(g.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: eb.intl.string(eb.t.z2jK6X),
                    }),
                    null != u && (0, i.jsx)(eO.e, { shortcut: u }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: tD.XL,
                children: [
                    (0, i.jsx)(d.m, {
                        text: eb.intl.string(eb.t["5h0QOP"]),
                        children: (0, i.jsx)(f.K, {
                            onClick: c,
                            icon: tw.$,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": eb.intl.string(eb.t["5h0QOP"]),
                        }),
                    }),
                    (0, i.jsx)(d.m, {
                        text: eb.intl.string(eb.t["3D5yo/"]),
                        children: (0, i.jsx)(f.K, {
                            onClick: r,
                            icon: tj.Z,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": eb.intl.string(eb.t["3D5yo/"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function tT(e) {
    let t,
        l,
        n,
        s,
        r,
        c,
        o,
        d,
        u,
        m,
        h,
        { mainLinkCounts: x, mainLinkNewCounts: p } = e,
        g = (0, to.P)((e) => e.activeMainLink),
        f =
            ((t = (0, to.P)((e) => e.setActiveMainLink)),
            (l = (0, to.P)((e) => e.setGameFacet)),
            (n = (0, to.P)((e) => e.setClippedWithFacet)),
            (s = (0, to.P)((e) => e.clearFilters)),
            a.useCallback(
                (e) => {
                    t(e), l(null), n(null), s();
                },
                [t, l, n, s],
            )),
        j = (0, to.P)((e) => e.gameFacet),
        v = (0, to.P)((e) => e.clippedWithFacet),
        C = null != j || null != v;
    return (0, i.jsxs)("div", {
        className: tD.uW,
        children: [
            (0, i.jsx)(tS, {
                icon: (0, i.jsx)(tP.f, { size: "sm", color: "currentColor" }),
                label: eb.intl.string(eb.t.Ym2Ri6),
                isSelected: ((r = F.oH.HOME), !C && g === r),
                onClick: () => f(F.oH.HOME),
            }),
            (0, i.jsx)(tS, {
                icon: (0, i.jsx)(J.x, { size: "sm", color: "currentColor" }),
                label: eb.intl.string(eb.t.dPVrEv),
                trailer: (0, i.jsx)(t_, { count: p.allClips }),
                isSelected: ((c = F.oH.ALL_CLIPS), !C && g === c),
                isDisabled: 0 === x.allClips && ((o = F.oH.ALL_CLIPS), !!C || g !== o),
                onClick: () => f(F.oH.ALL_CLIPS),
            }),
            (0, i.jsx)(tS, {
                icon: (0, i.jsx)(tI.B, { size: "sm", color: "currentColor" }),
                label: eb.intl.string(eC.default.ikNKf1),
                trailer: (0, i.jsx)(t_, { count: p.autoClips }),
                isSelected: ((d = F.oH.AUTO_CLIPS), !C && g === d),
                isDisabled: 0 === x.autoClips && ((u = F.oH.AUTO_CLIPS), !!C || g !== u),
                onClick: () => f(F.oH.AUTO_CLIPS),
            }),
            (0, i.jsx)(tS, {
                icon: (0, i.jsx)(B.G, { size: "sm", color: "currentColor" }),
                label: eb.intl.string(eb.t["9rlCk1"]),
                trailer: (0, i.jsx)(t_, { count: p.favorites }),
                isSelected: ((m = F.oH.FAVORITES), !C && g === m),
                isDisabled: 0 === x.favorites && ((h = F.oH.FAVORITES), !!C || g !== h),
                onClick: () => f(F.oH.FAVORITES),
            }),
        ],
    });
}
function t_(e) {
    let { count: t } = e;
    return t <= 0 ? null : (0, i.jsx)(X.hV, { count: t });
}
function tR(e) {
    let t,
        l,
        n,
        r,
        { gamesFacet: c } = e,
        o = (0, to.P)((e) => e.gameFacet),
        d =
            ((t = (0, to.P)((e) => e.setGameFacet)),
            (l = (0, to.P)((e) => e.setClippedWithFacet)),
            (n = (0, to.P)((e) => e.setActiveMainLink)),
            (r = (0, to.P)((e) => e.clearFilters)),
            a.useCallback(
                (e, i) => {
                    null == i
                        ? "game" === e
                            ? t(null)
                            : l(null)
                        : ("game" === e ? t(i) : l(i), "game" === e ? l(null) : t(null), n(F.oH.ALL_CLIPS), r());
                },
                [t, l, n, r],
            )),
        u = a.useMemo(() => c.map((e) => e.key), [c]),
        m = (0, A.A)(u),
        h = a.useMemo(() => new Map(m.map((e) => [e?.id, e])), [m]);
    return 0 === c.length
        ? null
        : (0, i.jsxs)(tb.Ip, {
              className: s()(tD.uW, tD.fC),
              fade: !0,
              children: [
                  (0, i.jsx)(g.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: tD.a9,
                      children: eb.intl.string(eb.t.URyqtP),
                  }),
                  (0, i.jsx)("div", {
                      className: tD._A,
                      children: c.map((e) =>
                          (0, i.jsx)(
                              tS,
                              {
                                  icon: (0, i.jsx)(k.A, { game: h.get(e.key), size: k.M.XSMALL }),
                                  label: e.name,
                                  trailer: (0, i.jsx)(t_, { count: e.newCount }),
                                  isSelected: o === e.key,
                                  isDisabled: e.isDisabled,
                                  onClick: () => d("game", o === e.key ? null : e.key),
                              },
                              e.key,
                          ),
                      ),
                  }),
              ],
          });
}
function tF(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: a } = e;
    return (0, i.jsxs)("div", {
        className: tD.pz,
        children: [
            (0, i.jsx)(tM, {}),
            (0, i.jsxs)("div", {
                className: tD.wp,
                children: [
                    (0, i.jsx)(tT, { mainLinkCounts: l, mainLinkNewCounts: a }),
                    (0, i.jsx)(tR, { gamesFacet: t }),
                ],
            }),
        ],
    });
}
var tO = l(174726);
let tH = a.memo(function (e) {
        let { withHeaderFilters: t, allClips: l } = e,
            n = (0, to.P)((e) => e.query),
            s = (0, to.P)((e) => e.setQuery),
            r = (0, to.P)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.dateFilter),
            ),
            c = (0, eR.bG)([eK.Ay], () => eK.Ay.getKeybindForAction(ew.hCu.SAVE_CLIP)),
            o = a.useCallback(() => {
                (0, eU.openUserSettings)(eG.X.CLIPS_PANEL);
            }, []),
            u = a.useCallback(() => s(""), [s]),
            m = null != c ? eV.dI(c.shortcut, !0) : null,
            h = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: tO.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: tO.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tO.Pe,
                            children: [
                                (0, i.jsx)(g.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: eb.intl.string(eb.t.z2jK6X),
                                }),
                                null != m && (0, i.jsx)(eO.e, { className: tO.P, shortcut: m }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tO.$s,
                            children: [
                                t &&
                                    (0, i.jsx)(d.m, {
                                        text: eb.intl.string(eb.t.X7yRDm),
                                        children: (0, i.jsx)(tg.Y, {
                                            position: "bottom",
                                            targetElementRef: h,
                                            renderPopout: (e) => (0, i.jsx)(tE, { ...e, allClips: l }),
                                            children: (e) =>
                                                (0, i.jsx)("div", {
                                                    ref: h,
                                                    children:
                                                        r > 0
                                                            ? (0, i.jsx)(e0.$, {
                                                                  size: "sm",
                                                                  variant: "secondary",
                                                                  ...e,
                                                                  text: eb.intl.formatToPlainString(eC.default.JbyR1U, {
                                                                      count: r,
                                                                  }),
                                                                  icon: tf.R,
                                                                  iconPosition: "end",
                                                              })
                                                            : (0, i.jsx)(f.K, {
                                                                  icon: tf.R,
                                                                  ...e,
                                                                  size: "sm",
                                                                  variant: "icon-only",
                                                                  "aria-label": eb.intl.string(eb.t.X7yRDm),
                                                              }),
                                                }),
                                        }),
                                    }),
                                (0, i.jsx)(d.m, {
                                    text: eb.intl.string(eb.t["3D5yo/"]),
                                    children: (0, i.jsx)(f.K, {
                                        onClick: o,
                                        icon: tj.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eb.intl.string(eb.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                t &&
                    (0, i.jsx)("div", {
                        className: tO.MT,
                        children: (0, i.jsx)(tv.I, {
                            placeholder: eb.intl.string(eb.t["5h0QOP"]),
                            query: n,
                            onChange: s,
                            onClear: u,
                            size: "md",
                        }),
                    }),
            ],
        });
    }),
    tz = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: n, onClick: r } = e;
        return (0, i.jsxs)(tC.D, {
            className: s()(tO.MV, { [tO.wH]: n }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: tO.tk,
                    children: [
                        a,
                        (0, i.jsx)(H.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tO.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tO.z2,
                    children: (0, i.jsx)(H.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tG(e) {
    let { enabled: t } = I.O.useConfig({ location: "ClipsGallerySidebar" });
    return t
        ? (0, i.jsx)(tF, {
              gamesFacet: e.gamesFacet,
              distributedClipInitiatorsFacet: e.distributedClipInitiatorsFacet,
              mainLinkCounts: e.mainLinkCounts,
              mainLinkNewCounts: e.mainLinkNewCounts,
          })
        : (0, i.jsx)(tU, {
              allClips: e.allClips,
              filteredClips: e.filteredClips,
              withHeaderFilters: e.withHeaderFilters,
          });
}
function tU(e) {
    let { allClips: t, filteredClips: l, withHeaderFilters: n } = e,
        s = (0, to.P)((e) => e.gameFacet),
        r = (0, to.P)((e) => e.activeMainLink),
        c = (0, to.P)((e) => e.setGameFacet),
        o = (0, to.P)((e) => e.setActiveMainLink),
        {
            legacyGames: d,
            allClipsCount: u,
            favoritesCount: m,
        } = a.useMemo(() => {
            let e = new Map(),
                i = new Set(l);
            for (let l of t) {
                if (null == l.applicationId) continue;
                let t = i.has(l),
                    a = e.get(l.applicationId);
                null == a
                    ? e.set(l.applicationId, {
                          name: l.applicationName,
                          count: +!!t,
                          mostRecentClipCreatedAt: l.createdAt,
                      })
                    : (t && (a.count += 1),
                      l.createdAt > a.mostRecentClipCreatedAt && (a.mostRecentClipCreatedAt = l.createdAt));
            }
            let a = 0;
            for (let e of l) e.isFavorite && (a += 1);
            return {
                legacyGames: Array.from(e.entries())
                    .map((e) => {
                        let [t, l] = e;
                        return { applicationId: t, ...l };
                    })
                    .sort((e, t) => t.mostRecentClipCreatedAt - e.mostRecentClipCreatedAt),
                allClipsCount: l.length,
                favoritesCount: a,
            };
        }, [t, l]),
        h = a.useMemo(() => d.map((e) => e.applicationId), [d]),
        x = (0, A.A)(h),
        p = a.useMemo(() => new Map(x.map((e) => [e?.id, e])), [x]),
        f = a.useCallback(() => {
            o(F.oH.ALL_CLIPS), c(null);
        }, [o, c]),
        j = a.useCallback(() => {
            o(F.oH.FAVORITES), c(null);
        }, [o, c]),
        v = a.useCallback(
            (e) => {
                c(e), o(F.oH.ALL_CLIPS);
            },
            [c, o],
        ),
        C = null == s && r === F.oH.ALL_CLIPS,
        b = null == s && r === F.oH.FAVORITES;
    return (0, i.jsxs)("div", {
        className: tO.pz,
        children: [
            (0, i.jsx)(tH, { withHeaderFilters: n, allClips: t }),
            (0, i.jsxs)("div", {
                className: tO.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: tO.om,
                        children: (0, i.jsxs)("div", {
                            className: tO.Ep,
                            children: [
                                (0, i.jsx)(tz, {
                                    name: eb.intl.string(eb.t.dPVrEv),
                                    count: u,
                                    icon: (0, i.jsx)(J.x, {}),
                                    isSelected: C,
                                    onClick: f,
                                }),
                                (0, i.jsx)(tz, {
                                    name: eb.intl.string(eb.t["9rlCk1"]),
                                    count: m,
                                    icon: (0, i.jsx)(B.G, {}),
                                    isSelected: b,
                                    onClick: j,
                                }),
                            ],
                        }),
                    }),
                    d.length > 0 &&
                        (0, i.jsxs)(tb.Ip, {
                            className: tO.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(g.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tO.a9,
                                    children: eb.intl.string(eb.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: tO.Ep,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            tz,
                                            {
                                                name: e.name,
                                                count: e.count,
                                                icon: (0, i.jsx)(k.A, {
                                                    game: p.get(e.applicationId),
                                                    size: k.M.XSMALL,
                                                }),
                                                isSelected: s === e.applicationId,
                                                onClick: () => v(e.applicationId),
                                            },
                                            e.applicationId,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var tK = l(847374),
    tV = l(112173),
    t$ = l(548118),
    tQ = l(441349),
    tY = l(789645),
    tX = l(939546),
    tB = l(99478);
function tq(e) {
    return e.setHours(0, 0, 0, 0), e.getTime();
}
function tW(e) {
    return e.setHours(23, 59, 59, 999), e.getTime();
}
function tZ(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tX.Xj)();
    return { preset: "custom", after: null != e ? tq(e.toDate(l)) : null, before: null != t ? tW(t.toDate(l)) : null };
}
function tJ(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tB.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let t0 = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function t1(e) {
    return t0.format(new Date(e));
}
function t2(e) {
    switch (e.preset) {
        case "today":
            return eb.intl.string(eC.default.yOAWWM);
        case "yesterday":
            return eb.intl.string(eC.default["PtV/Ti"]);
        case "last-3-days":
            return eb.intl.string(eC.default.xfmv7I);
        case "this-year":
            return eb.intl.string(eC.default["+eE7zX"]);
        case "last-year":
            return eb.intl.string(eC.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? t1(e.after) : null,
                l = null != e.before ? t1(e.before) : null;
            if (null != t && null != l)
                return eb.intl.formatToPlainString(eC.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return eb.intl.formatToPlainString(eC.default.k1FkTL, { date: t });
            if (null != l) return eb.intl.formatToPlainString(eC.default["4NlpHD"], { date: l });
            return eb.intl.string(eC.default.tv9apA);
        }
    }
}
var t3 = l(817480);
function t9(e) {
    let { closePopout: t } = e,
        l = (0, to.P)((e) => e.dateFilter),
        n = (0, to.P)((e) => e.setDateFilter),
        [r, c] = a.useState(l?.preset === "custom"),
        [o, u] = a.useState(() => (l?.preset === "custom" ? tJ(l.after) : null)),
        [m, h] = a.useState(() => (l?.preset === "custom" ? tJ(l.before) : null)),
        x = a.useMemo(
            () => [
                { key: "today", label: eb.intl.string(eC.default.yOAWWM) },
                { key: "yesterday", label: eb.intl.string(eC.default["PtV/Ti"]) },
                { key: "last-3-days", label: eb.intl.string(eC.default.xfmv7I) },
                { key: "this-year", label: eb.intl.string(eC.default["+eE7zX"]) },
                { key: "last-year", label: eb.intl.string(eC.default.Nwj9v0) },
            ],
            [],
        ),
        p = l?.preset ?? null,
        g = r && "custom" !== p ? null : p,
        j = a.useMemo(() => (0, tX.Ec)((0, tX.Xj)()), []),
        v = a.useCallback(
            (e) => {
                n(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tq(new Date(t)), before: tW(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tq(new Date(l)), before: tW(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return l.setDate(l.getDate() - 2), { preset: e, after: tq(l), before: tW(new Date(t)) };
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
                    t();
            },
            [n, t],
        ),
        C = a.useCallback(() => {
            c((e) => !e);
        }, []),
        b = a.useCallback(
            (e) => {
                u(e), n(tZ(e, m));
            },
            [m, n],
        ),
        y = a.useCallback(
            (e) => {
                h(e), n(tZ(o, e));
            },
            [o, n],
        ),
        N = a.useCallback(() => {
            u(null), h(null), n(null);
        }, [n]),
        A = null != o || null != m;
    return (0, i.jsxs)("div", {
        className: s()(t3.SW, r && t3.Td),
        children: [
            (0, i.jsxs)("div", {
                className: t3.sh,
                children: [
                    (0, i.jsx)(H.E, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: t3.a9,
                        children: eb.intl.string(eC.default.upqksT),
                    }),
                    (0, i.jsxs)("div", {
                        className: t3.eF,
                        children: [
                            x.map((e) =>
                                (0, i.jsx)(
                                    tC.D,
                                    {
                                        className: s()(t3.zD, g === e.key && t3.pH),
                                        onClick: () => v(e.key),
                                        "aria-pressed": g === e.key,
                                        children: (0, i.jsx)(H.E, {
                                            variant: "text-sm/medium",
                                            color: "currentColor",
                                            children: e.label,
                                        }),
                                    },
                                    e.key,
                                ),
                            ),
                            (0, i.jsxs)(tC.D, {
                                className: s()(t3.zD, t3.Kl, (r || "custom" === p) && t3.pH),
                                onClick: C,
                                "aria-expanded": r,
                                children: [
                                    (0, i.jsx)(H.E, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        children: eb.intl.string(eC.default.tv9apA),
                                    }),
                                    (0, i.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        color: "text-muted",
                                        className: t3.Xt,
                                        children: r ? "\u25C0" : "\u25B6",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: t3.ML,
                "aria-hidden": !r,
                children: [
                    (0, i.jsxs)("div", {
                        className: t3.U6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: t3._2,
                                children: [
                                    (0, i.jsx)(H.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: t3.bk,
                                        "aria-hidden": !0,
                                        children: eb.intl.string(eC.default["96vZuU"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: t3.h0,
                                        children: [
                                            (0, i.jsx)(tQ.l, {
                                                label: eb.intl.string(eC.default["96vZuU"]),
                                                hideLabel: !0,
                                                value: o,
                                                onChange: b,
                                                maxValue: m ?? j,
                                            }),
                                            null != o &&
                                                (0, i.jsx)(d.m, {
                                                    text: eb.intl.string(eb.t.VkKicb),
                                                    children: (0, i.jsx)(f.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tY.P,
                                                        onClick: () => b(null),
                                                        "aria-label": eb.intl.string(eb.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: t3._2,
                                children: [
                                    (0, i.jsx)(H.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: t3.bk,
                                        "aria-hidden": !0,
                                        children: eb.intl.string(eC.default["GL51/b"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: t3.h0,
                                        children: [
                                            (0, i.jsx)(tQ.l, {
                                                label: eb.intl.string(eC.default["GL51/b"]),
                                                hideLabel: !0,
                                                value: m,
                                                onChange: y,
                                                minValue: o ?? void 0,
                                                maxValue: j,
                                            }),
                                            null != m &&
                                                (0, i.jsx)(d.m, {
                                                    text: eb.intl.string(eb.t.VkKicb),
                                                    children: (0, i.jsx)(f.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tY.P,
                                                        onClick: () => y(null),
                                                        "aria-label": eb.intl.string(eb.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    A &&
                        (0, i.jsx)("div", {
                            className: t3.dS,
                            children: (0, i.jsx)(eH.Q, { size: "sm", text: eb.intl.string(eb.t.VkKicb), onClick: N }),
                        }),
                ],
            }),
        ],
    });
}
var t5 = l(103552),
    t7 = l(914427),
    t4 = l(213424);
function t6(e) {
    let {
            triggerLabel: t,
            options: l,
            selectedKeys: n,
            onToggle: s,
            multiSelect: r,
            searchPlaceholder: c,
            emptyStateText: o,
        } = e,
        d = a.useRef(null),
        u = a.useMemo(() => new Set(n), [n]),
        m = a.useCallback(
            (e) => {
                let t;
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tN()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, i.jsxs)(
                            t5.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, i.jsx)("span", { className: t4.H, children: e.icon }),
                                    (0, i.jsx)(t5.x4.Label, { children: e.label }),
                                    r ? (0, i.jsx)(t5.x4.Checkbox, {}) : (0, i.jsx)(t5.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = n.size > 0 ? `${t} (${n.size})` : t;
    return (0, i.jsx)(tg.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(t7.p, {
                "aria-label": t,
                placeholder: c,
                value: u,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: o ?? eb.intl.string(eb.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(e0.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tK.a,
                iconPosition: "end",
            }),
    });
}
var t8 = l(941886);
function le(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: n } = e;
    return (0, i.jsxs)("div", {
        className: t8.Io,
        children: [
            null != l && (0, i.jsx)("span", { className: t8.Kk, children: l }),
            (0, i.jsx)(H.E, {
                className: t8.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, i.jsx)(tC.D, {
                className: t8.DT,
                onClick: a,
                "aria-label": n ?? eb.intl.string(eb.t.N86XcP),
                children: (0, i.jsx)(tY.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var lt = l(841765);
let ll = { all: eC.default.lscwjQ, auto: eC.default.xrOIkz, manual: eC.default.D7HSLJ };
function li() {
    let e = (0, to.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? t2(e) : eb.intl.string(eC.default.upqksT);
    return (0, i.jsx)(tg.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(t9, { closePopout: t });
        },
        children: (e) =>
            (0, i.jsx)(e0.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tK.a,
                iconPosition: "end",
            }),
    });
}
function la() {
    let e = (0, to.P)((e) => e.sortOrder),
        t = (0, to.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        n = (e) => {
            t(e);
        },
        s = e === F.mu.OLDEST ? eb.intl.string(eb.t["0gitSE"]) : eb.intl.string(eb.t["4LLKx3"]);
    return (0, i.jsx)(tg.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, i.jsx)(tA.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": eb.intl.string(eb.t.XvNMNk),
                onClose: l,
                onSelect: void 0,
                children: (0, i.jsxs)(tk.rX, {
                    children: [
                        (0, i.jsx)(tk.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: eb.intl.string(eb.t["4LLKx3"]),
                            action: () => {
                                n(F.mu.MOST_RECENT), l();
                            },
                            checked: e === F.mu.MOST_RECENT,
                        }),
                        (0, i.jsx)(tk.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: eb.intl.string(eb.t["0gitSE"]),
                            action: () => {
                                n(F.mu.OLDEST), l();
                            },
                            checked: e === F.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(e0.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: s, icon: tV.J }),
    });
}
function ln() {
    let e = (0, to.P)((e) => e.clipMethodFilter),
        t = (0, to.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null),
        n = (e) => {
            t(e);
        };
    return (0, i.jsx)(tg.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, i.jsx)(tA.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": eb.intl.string(eC.default["kIqbb/"]),
                onClose: l,
                onSelect: void 0,
                children: (0, i.jsxs)(tk.rX, {
                    children: [
                        (0, i.jsx)(tk.iD, {
                            id: "method-all",
                            group: "method",
                            label: eb.intl.string(eC.default.lscwjQ),
                            action: () => {
                                n("all"), l();
                            },
                            checked: "all" === e,
                        }),
                        (0, i.jsx)(tk.iD, {
                            id: "method-auto",
                            group: "method",
                            label: eb.intl.string(eC.default.xrOIkz),
                            action: () => {
                                n("auto"), l();
                            },
                            checked: "auto" === e,
                        }),
                        (0, i.jsx)(tk.iD, {
                            id: "method-manual",
                            group: "method",
                            label: eb.intl.string(eC.default.D7HSLJ),
                            action: () => {
                                n("manual"), l();
                            },
                            checked: "manual" === e,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(e0.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: eb.intl.string(eC.default["kIqbb/"]),
                icon: tK.a,
                iconPosition: "end",
            }),
    });
}
function ls(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: n } = e,
        s = (0, to.P)((e) => e.query),
        r = (0, to.P)((e) => e.setQuery),
        c = (0, to.P)((e) => e.pendingSearchFocus),
        o = (0, to.P)((e) => e.setPendingSearchFocus),
        d = a.useRef(null),
        u = (0, to.P)((e) => e.activeMainLink),
        m = (0, to.P)((e) => e.clipMethodFilter),
        p = (0, to.P)((e) => e.setClipMethodFilter),
        g = (0, to.P)((e) => e.gameFacet),
        f = (0, to.P)((e) => e.clippedWithFacet),
        j = (0, to.P)((e) => e.selectedGameIds),
        v = (0, to.P)((e) => e.selectedUserIds),
        C = (0, to.P)((e) => e.selectedGuildId),
        b = (0, to.P)((e) => e.selectedActivity),
        y = (0, to.P)((e) => e.dateFilter),
        N = (0, to.P)((e) => e.toggleGameId),
        L = (0, to.P)((e) => e.toggleUserId),
        E = (0, to.P)((e) => e.setSelectedGuildId),
        P = (0, to.P)((e) => e.setSelectedActivity),
        I = (0, to.P)((e) => e.setDateFilter),
        D = (0, to.P)((e) => e.clearFilters);
    a.useEffect(() => {
        c && (d.current?.focus(), o(!1));
    }, [c, o]);
    let S = a.useRef(null);
    a.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != g ? [g] : Array.from(j),
            date_filter_range: null != y ? y.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != C,
            filtered_by_participants: null != f || v.size > 0,
            filtered_by_favorites: u === F.oH.FAVORITES,
            filtered_by_activity: null != b,
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
            S.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== S.current && ((S.current = t), ed.default.track(ew.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, g, j, y, C, f, v, u, b]);
    let M = a.useMemo(() => l.map((e) => e.key), [l]),
        T = (0, A.A)(M),
        _ = a.useMemo(() => new Map(T.map((e) => [e?.id, e])), [T]),
        R = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, i.jsx)(k.A, { game: _.get(e.key), size: k.M.XSMALL }),
                })),
            [l, _],
        ),
        O = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = ec.A.getGuild(e);
                        null != t && l.push({ key: e, label: t.name, guild: t });
                    }
                    return l.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), l;
                })(t),
            [t],
        ),
        H = a.useMemo(
            () =>
                O.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, i.jsx)(t$.Ay, { guild: e.guild, size: t$.Ay.Sizes.MINI }),
                })),
            [O],
        ),
        z = a.useMemo(() => new Map(O.map((e) => [e.key, e.guild])), [O]),
        G = a.useMemo(
            () =>
                null == g
                    ? []
                    : (function (e) {
                          let t = new Set();
                          for (let l of e)
                              l.activity?.state != null && "" !== l.activity.state && t.add(l.activity.state),
                                  l.activity?.details != null && "" !== l.activity.details && t.add(l.activity.details);
                          return Array.from(t).sort((e, t) => e.toLowerCase().localeCompare(t.toLowerCase()));
                      })(t.filter((e) => e.applicationId === g)).map((e) => ({ key: e, label: e })),
            [t, g],
        ),
        U = a.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = w.default.getUser(l.key);
                        null != e &&
                            t.push({
                                key: l.key,
                                label: e.globalName ?? e.username,
                                avatarUrl: e.getAvatarURL(null, 32),
                            });
                    }
                    return t.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), t;
                })(n).map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, i.jsx)(h.eu, { src: e.avatarUrl, size: x._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [n],
        ),
        K = a.useMemo(() => (null != C ? new Set([C]) : new Set()), [C]),
        V = a.useMemo(() => (null != b ? new Set([b]) : new Set()), [b]),
        $ = a.useCallback(
            (e) => {
                E(C === e ? null : e);
            },
            [C, E],
        ),
        Q = a.useCallback(
            (e) => {
                P(b === e ? null : e);
            },
            [b, P],
        ),
        Y = null == g,
        X = null == f,
        B = u !== F.oH.AUTO_CLIPS,
        q = eb.intl.string(ll[m]),
        W = (0, i.jsxs)(i.Fragment, {
            children: [
                Y &&
                    Array.from(j).map((e) => {
                        let t = R.find((t) => t.key === e);
                        return (0, i.jsx)(
                            le,
                            {
                                label: t?.label ?? e,
                                icon: (0, i.jsx)(k.A, { game: _.get(e), size: k.M.XSMALL }),
                                onRemove: () => N(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != y && (0, i.jsx)(le, { label: t2(y), onRemove: () => I(null) }, "date"),
                null != C &&
                    (0, i.jsx)(
                        le,
                        {
                            label: H.find((e) => e.key === C)?.label ?? C,
                            icon:
                                null != z.get(C)
                                    ? (0, i.jsx)(t$.Ay, { guild: z.get(C), size: t$.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => E(null),
                        },
                        "guild",
                    ),
                X && Array.from(v).map((e) => (0, i.jsx)(lr, { userId: e, onRemove: () => L(e) }, `user-${e}`)),
                null != b && (0, i.jsx)(le, { label: b, onRemove: () => P(null) }, "activity"),
                B && "all" !== m && (0, i.jsx)(le, { label: q, onRemove: () => p("all") }, "method"),
            ],
        }),
        Z = (Y && j.size > 0) || null != y || null != C || (X && v.size > 0) || null != b || (B && "all" !== m);
    return (0, i.jsxs)("div", {
        className: lt.kT,
        children: [
            (0, i.jsxs)("div", {
                className: lt.HL,
                children: [
                    (0, i.jsx)("div", {
                        className: lt.MT,
                        children: (0, i.jsx)(tv.I, {
                            ref: d,
                            placeholder: eb.intl.string(eb.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: lt.Zq,
                        children: [
                            B && (0, i.jsx)(ln, {}),
                            Y &&
                                R.length > 0 &&
                                (0, i.jsx)(t6, {
                                    triggerLabel: eb.intl.string(eb.t.URyqtP),
                                    options: R,
                                    selectedKeys: j,
                                    onToggle: N,
                                    multiSelect: !0,
                                    searchPlaceholder: eb.intl.string(eb.t["5h0QOP"]),
                                }),
                            (0, i.jsx)(li, {}),
                            H.length > 0 &&
                                (0, i.jsx)(t6, {
                                    triggerLabel: eb.intl.string(eb.t["5qyruI"]),
                                    options: H,
                                    selectedKeys: K,
                                    onToggle: $,
                                    multiSelect: !1,
                                    searchPlaceholder: eb.intl.string(eb.t["5h0QOP"]),
                                }),
                            X &&
                                U.length > 0 &&
                                (0, i.jsx)(t6, {
                                    triggerLabel: eb.intl.string(eb.t.YQ6dJg),
                                    options: U,
                                    selectedKeys: v,
                                    onToggle: (e) => L(e),
                                    multiSelect: !0,
                                    searchPlaceholder: eb.intl.string(eb.t["5h0QOP"]),
                                }),
                            G.length > 0 &&
                                (0, i.jsx)(t6, {
                                    triggerLabel: eb.intl.string(eb.t.agRtPG),
                                    options: G,
                                    selectedKeys: V,
                                    onToggle: Q,
                                    multiSelect: !1,
                                    searchPlaceholder: eb.intl.string(eb.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: lt.QZ, children: (0, i.jsx)(la, {}) }),
                ],
            }),
            Z &&
                (0, i.jsxs)("div", {
                    className: lt.eH,
                    children: [
                        W,
                        (0, i.jsx)(eH.Q, {
                            size: "sm",
                            variant: "primary",
                            text: eb.intl.string(eb.t.O8k7O4),
                            onClick: D,
                        }),
                    ],
                }),
        ],
    });
}
function lr(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, o.bG)([w.default], () => w.default.getUser(t), [t]);
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(le, {
        label: n,
        icon: (0, i.jsx)(h.eu, { src: a.getAvatarURL(null, 32), size: x._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
let lc = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var lo = l(505124),
    ld = l(43990),
    lu = l(449543),
    lm = l(152858);
function lh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var lx = l(452143);
function lp(e) {
    let { clips: t, onEdit: l } = e,
        n = a.useMemo(() => lh(t), [t]),
        { backgroundComponent: r, handleHoverChange: c } = (function () {
            let [e, t] = a.useState({ previousThumbnail: null, thumbnail: null }),
                l = a.useRef(null);
            a.useEffect(
                () => () => {
                    null != l.current && window.clearTimeout(l.current);
                },
                [],
            );
            let n = a.useCallback((e) => {
                null != l.current && (window.clearTimeout(l.current), (l.current = null)),
                    null != e
                        ? t((t) => {
                              if (t.thumbnail === e) return t;
                              let l = t.thumbnail ?? t.previousThumbnail;
                              return { previousThumbnail: l !== e ? l : null, thumbnail: e };
                          })
                        : (l.current = window.setTimeout(() => {
                              t((e) => ({ previousThumbnail: e.thumbnail ?? e.previousThumbnail, thumbnail: null })),
                                  (l.current = null);
                          }, 2e3));
            }, []);
            return {
                backgroundComponent: (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != e.previousThumbnail &&
                            (0, i.jsx)(
                                "img",
                                { src: e.previousThumbnail, className: lx.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, i.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${lx.Tp} ${lx.h9}`, alt: "", "aria-hidden": !0 },
                                e.thumbnail,
                            ),
                    ],
                }),
                handleHoverChange: n,
            };
        })(),
        { enabled: o } = I.O.useConfig({ location: "AutoClipsReviewCarousel" }),
        d = (0, to.P)((e) => e.setActiveMainLink);
    return 0 === n.length
        ? null
        : (0, i.jsx)(ld.N, {
              theme: lo.NJ.DARK,
              children: (e) =>
                  (0, i.jsxs)("section", {
                      className: s()(lx.uW, e),
                      "aria-label": eb.intl.string(eC.default.efLpNC),
                      children: [
                          r,
                          (0, i.jsxs)("div", {
                              className: lx.wx,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: lx.mX,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: lx.UP,
                                              children: [
                                                  (0, i.jsx)(tI.B, { size: "refresh_sm", color: "white" }),
                                                  (0, i.jsx)(H.E, {
                                                      variant: "text-md/medium",
                                                      color: "always-white",
                                                      children: eb.intl.string(eC.default.I1h8uD),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(g.D, {
                                              variant: "display-md",
                                              color: "always-white",
                                              className: lx.DD,
                                              children: eb.intl.string(eC.default.efLpNC),
                                          }),
                                      ],
                                  }),
                                  o &&
                                      (0, i.jsx)("div", {
                                          className: lx.BX,
                                          children: (0, i.jsx)(e0.$, {
                                              variant: "overlay-primary",
                                              size: "sm",
                                              onClick: () => d(F.oH.AUTO_CLIPS),
                                              text: eb.intl.string(eC.default.gCay1w),
                                          }),
                                      }),
                              ],
                          }),
                          (0, i.jsx)(lu.A, {
                              className: lx.jG,
                              gap: 16,
                              edgeFade: 0,
                              scrollBehavior: lm.Uf.ITEM,
                              hideActionsWhenDisabled: !0,
                              "aria-label": eb.intl.string(eC.default.efLpNC),
                              children: n.map((e) => {
                                  let t = "" !== e.thumbnail ? e.thumbnail : null;
                                  return (0, i.jsx)(
                                      "div",
                                      {
                                          className: o ? lx.v2 : lx.cW,
                                          onMouseEnter: o ? () => c(t) : void 0,
                                          onMouseLeave: o ? () => c(null) : void 0,
                                          onFocus: () => c(t),
                                          onBlur: (e) => {
                                              (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) ||
                                                  c(null);
                                          },
                                          children: o
                                              ? (0, i.jsx)(te, {
                                                    clip: e,
                                                    actionsDisabled: !1,
                                                    isNew: !1,
                                                    onEdit: l,
                                                    onClick: l,
                                                })
                                              : (0, i.jsx)(eI, {
                                                    clip: e,
                                                    actionsDisabled: !1,
                                                    isNew: !1,
                                                    onEdit: l,
                                                    onClick: l,
                                                    onHoverChange: c,
                                                }),
                                      },
                                      e.id,
                                  );
                              }),
                          }),
                      ],
                  }),
          });
}
var lg = l(770178),
    lf = l(765548),
    lj = l(569926),
    lv = l(486020),
    lC = l(251287);
function lb(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: n,
            onEdit: r,
            onClipClick: c,
            animateEntrance: d,
            entranceRowOffset: u,
        } = e,
        { data: m } = (0, lj.I)(t.applicationId),
        h = (0, to.P)((e) => e.setGameFacet),
        p = (0, to.P)((e) => e.setActiveMainLink),
        f = t.applicationId,
        j = null != f && "" !== f,
        v = a.useCallback(() => {
            null != f && "" !== f && (h(f), p(F.oH.ALL_CLIPS));
        }, [f, h, p]),
        C = a.useCallback(() => {
            j ? v() : p(F.oH.ALL_CLIPS);
        }, [j, v, p]),
        b = a.useMemo(
            () =>
                null == m
                    ? null
                    : null != m.bannerHash && "" !== m.bannerHash
                      ? (lv.Ay.getGameAssetURL({ id: m.id, hash: m.bannerHash, size: 1024, keepAspectRatio: !0 }) ??
                        null)
                      : (m.screenshotUrls?.[0] ?? null),
            [m],
        ),
        y = (0, o.yK)([w.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => w.default.getUser(e)).filter(em.Vq);
        }),
        N = (0, e2.e)({ timestamp: t.startedAt }),
        [A, L] = a.useState(800),
        E = (0, lf.A)((e) => {
            L(e.target.clientWidth);
        }),
        P = (0, lg.w)(E),
        I = Math.max(1, (A - 32) / 3),
        D = a.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        S = t.clips.length > 6;
    return (0, i.jsxs)("section", {
        className: lC.dZ,
        children: [
            (0, i.jsx)("div", {
                className: s()(lC.tB, null == b && lC.rD),
                style: null != b ? { backgroundImage: `url(${b})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, i.jsxs)("div", {
                className: lC.wx,
                children: [
                    j
                        ? (0, i.jsx)(Y.s, {
                              "aria-label": t.applicationName,
                              onClick: v,
                              className: lC.Zn,
                              children: (0, i.jsx)(k.A, {
                                  className: lC.Gt,
                                  game: m,
                                  size: k.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, i.jsx)(k.A, { className: lC.Gt, game: m, size: k.M.MEDIUM, "aria-hidden": !0 }),
                    (0, i.jsxs)("div", {
                        className: lC.TK,
                        children: [
                            j
                                ? (0, i.jsx)(Y.s, {
                                      "aria-label": t.applicationName,
                                      onClick: v,
                                      className: lC.wb,
                                      children: (0, i.jsx)(g.D, {
                                          variant: "text-md/semibold",
                                          color: "text-default",
                                          className: lC.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, i.jsx)(g.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      className: lC.mO,
                                      children: t.applicationName,
                                  }),
                            (0, i.jsxs)("div", {
                                className: lC.mI,
                                children: [
                                    (0, i.jsx)(H.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eb.intl.format(eC.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    (0, i.jsx)("span", { className: lC.TG, "aria-hidden": "true" }),
                                    (0, i.jsx)(H.E, { variant: "text-xs/normal", color: "text-muted", children: N }),
                                    y.length > 0 &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)("span", { className: lC.TG, "aria-hidden": "true" }),
                                                (0, i.jsx)(Q.A, { users: y, maxUsers: 5, size: x._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                ref: P,
                className: lC.Vg,
                children: D.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: lC.UX,
                            children: e.map((e, a) => {
                                let s = { width: I };
                                return (
                                    d && (s["--custom-entrance-delay"] = `${td(u + t + a)}ms`),
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: d ? tm.$ : void 0,
                                            style: s,
                                            children: (0, i.jsx)(te, {
                                                clip: e,
                                                actionsDisabled: n,
                                                isNew: l.includes(e.id),
                                                onClick: c ?? r,
                                                onEdit: r,
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
            S &&
                (0, i.jsx)("div", {
                    className: lC.Vc,
                    children: (0, i.jsx)(e0.$, {
                        variant: "secondary",
                        size: "sm",
                        text: eb.intl.string(eC.default.pqk9U0),
                        onClick: C,
                    }),
                }),
        ],
    });
}
var ly = l(177435);
function lN(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: n, onClipClick: s, isLoading: r } = e,
        { enableAutoClipsReview: c } = lc.useConfig({ location: "ClipsGalleryHome" }),
        d = a.useMemo(() => lh(t), [t]),
        u = c && d.length > 0,
        m = (0, o.yK)([P.Ay], () => P.Ay.getNewClipIds()),
        h = (0, o.bG)([P.Ay], () => P.Ay.getExportingClipIds().length > 0),
        x = (0, to.P)((e) => e.setActiveMainLink),
        p = a.useCallback(() => {
            x(F.oH.ALL_CLIPS);
        }, [x]),
        f = a.useMemo(() => {
            let e = u ? new Set(d.map((e) => e.id)) : null;
            return (function (e) {
                let t = [...e].sort((e, t) => t.createdAt - e.createdAt),
                    l = [],
                    i = null;
                for (let e of t) {
                    let t = i?.clips[i.clips.length - 1],
                        a = null != i && i.applicationId === e.applicationId,
                        n = null != t && t.createdAt - e.createdAt <= 144e5;
                    null != i && a && n
                        ? i.clips.push(e)
                        : ((i = {
                              id: e.id,
                              applicationId: e.applicationId,
                              applicationName: e.applicationName,
                              startedAt: e.createdAt,
                              clips: [e],
                          }),
                          l.push(i));
                }
                return l;
            })(null == e ? t : t.filter((t) => !e.has(t.id))).slice(0, 3);
        }, [t, u, d]),
        j = (0, o.bG)([b.A], () => b.A.useReducedMotion),
        v = a.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of f) e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3)));
            return e;
        }, [f]);
    return f.length > 0 || u
        ? (0, i.jsx)(tb.Ip, {
              className: ly.iR,
              fade: !0,
              children: (0, i.jsxs)("div", {
                  className: ly.Qs,
                  children: [
                      u && (0, i.jsx)(lp, { clips: t, onEdit: n }),
                      f.length > 0 &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(g.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-default",
                                      children: eb.intl.string(eC.default.zfTWDE),
                                  }),
                                  f.map((e, t) =>
                                      (0, i.jsx)(
                                          lb,
                                          {
                                              session: e,
                                              recentClipIds: m,
                                              actionsDisabled: h,
                                              onEdit: n,
                                              onClipClick: s,
                                              animateEntrance: !j,
                                              entranceRowOffset: v[t] ?? 0,
                                          },
                                          e.id,
                                      ),
                                  ),
                                  (0, i.jsx)("div", {
                                      className: ly.dp,
                                      children: (0, i.jsx)(e0.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: eb.intl.string(eC.default.RQtkop),
                                          onClick: p,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : r
          ? (0, i.jsx)("div", { className: ly.dc, children: (0, i.jsx)(z.y, {}) })
          : (0, i.jsx)(eq, { isEmptyBecauseQuery: l > 0 });
}
var lA = l(409067),
    lk = l(847455);
let lL = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function lE(e) {
    let {
        channelId: t,
        onClose: n,
        onClipClick: O,
        transitionState: H,
        initialEditingClipId: z,
        initialMainLink: G = F.oH.HOME,
        ...U
    } = e;
    (0, R.A)();
    let { analyticsLocations: K } = (0, N.Ay)(y.A.CLIPS_GALLERY),
        [V, $] = a.useState(new Set()),
        {
            gamesFacet: Q,
            participantsFacet: Y,
            distributedClipInitiatorsFacet: X,
            filteredClips: B,
            mainLinkCounts: q,
            mainLinkNewCounts: W,
            allClips: Z,
        } = (0, lA.ad)(),
        { enabled: J } = I.O.useConfig({ location: "ClipsGalleryModal" }),
        ee = (0, o.bG)([P.Ay], () => P.Ay.getSettings().storageLocation),
        [et, el] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            el(!0);
            try {
                await (0, D.Fb)(ee);
            } finally {
                el(!1);
            }
        })().catch(() => {});
    }, [ee]);
    let { onShareClick: ei } = (0, _.A)(t);
    a.useEffect(
        () => () => {
            to.P.getState().resetAll(), (0, D.Su)();
        },
        [],
    ),
        a.useEffect(() => {
            if (!J) return;
            let e = to.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(G);
        }, [J, G]),
        (0, r.l0)(() => {
            P.Ay.getClipIds().length > 0 && E.A.isDeveloper && L.Ay.fireSurveyAction(c.w.POPULATED_CLIP_GALLERY_CLOSED);
        });
    let ea = (0, o.bG)([P.Ay], () => P.Ay.getExportingClipIds().length > 0),
        [en, es] = a.useState(null != z ? "editing" : "gallery"),
        [er, ec] = a.useState(z ?? null),
        eo = (0, o.bG)([P.Ay], () => (null != er ? P.Ay.getClipById(er) : null), [er]),
        ed = a.useRef(en);
    (ed.current = en), (a.useRef(er).current = er);
    let [eu, em] = a.useState(null != z ? m.ip.ENTERED : m.ip.HIDDEN),
        eh = a.useRef(null),
        ex = (0, to.P)((e) => e.gameFacet),
        ep = (0, to.P)((e) => e.clippedWithFacet),
        eg = (0, to.P)((e) => e.activeMainLink),
        ef = (0, to.P)((e) => e.currentPage),
        ej = (0, to.P)(
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
        eg === F.oH.HOME && ej && to.P.getState().setActiveMainLink(F.oH.ALL_CLIPS);
    }, [eg, ej]);
    let ev = a.useMemo(() => (null != ex ? [ex] : []), [ex]),
        ey = (0, A.A)(ev)[0] ?? null,
        eN = (0, o.bG)([w.default], () => (null != ep ? w.default.getUser(ep) : null), [ep]),
        eA = a.useMemo(() => {
            if (null != ex) {
                let e = Q.find((e) => e.key === ex)?.name ?? eb.intl.string(eb.t.dPVrEv);
                return { icon: (0, i.jsx)(k.A, { game: ey, size: k.M.SMALL, "aria-hidden": !0 }), title: e };
            }
            if (null != ep) {
                let e = null != eN ? (eN.globalName ?? eN.username) : ep;
                return {
                    icon:
                        null != eN
                            ? (0, i.jsx)(h.eu, {
                                  src: eN.getAvatarURL(null, 32),
                                  size: x._3.SIZE_24,
                                  "aria-hidden": !0,
                              })
                            : null,
                    title: e,
                };
            }
            return eg === F.oH.FAVORITES
                ? { icon: null, title: eb.intl.string(eb.t["9rlCk1"]) }
                : eg === F.oH.AUTO_CLIPS
                  ? { icon: null, title: eb.intl.string(eC.default.ikNKf1) }
                  : eg === F.oH.HOME
                    ? { icon: null, title: eb.intl.string(eb.t.Ym2Ri6) }
                    : { icon: null, title: eb.intl.string(eb.t.dPVrEv) };
        }, [ex, ep, eg, Q, ey, eN]),
        ek = a.useCallback(() => {
            es("editing"), b.A.useReducedMotion && em(m.ip.ENTERED);
        }, []),
        eL = a.useCallback((e) => {
            $((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        eE = a.useCallback(
            (e) => {
                ec(e.id), ek();
            },
            [ek],
        ),
        ew = a.useCallback(() => {
            b.A.useReducedMotion && ec(null), es("gallery");
        }, []);
    a.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === ed.current && (e.stopPropagation(), ew());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [ew, n]),
        a.useEffect(
            () =>
                "editing" === en && null != er
                    ? void (0, D.YK)(er)
                    : ((0, D.TE)(),
                      () => {
                          (0, D.TE)();
                      }),
            [en, er],
        );
    let eP = a.useCallback(() => {
            $(new Set());
        }, []),
        eI = V.size > 0,
        eD = a.useCallback(() => {
            let e = Z.filter((e) => V.has(e.id));
            (0, p.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, i.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                eP(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [Z, V, eP]),
        eS = a.useCallback(async () => {
            let e = Z.filter((e) => V.has(e.id));
            await ei({ clips: e }), eP();
        }, [Z, V, ei, eP]),
        eM = a.useMemo(
            () => ({ selectedClipIds: V, toggleClipSelection: eL, clearSelection: eP, isMultiSelectMode: eI }),
            [V, eL, eP, eI],
        );
    return (0, i.jsx)(N.f5, {
        value: K,
        children: (0, i.jsx)(lL.Provider, {
            value: eM,
            children: (0, i.jsx)(u.N, {
                onClose: n,
                transitionState: H,
                ...U,
                children: (0, i.jsxs)("div", {
                    className: lk.jT,
                    ref: eh,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(lk.PD, "gallery" === en && lk.vu),
                            inert: "gallery" !== en,
                            children: [
                                (0, i.jsx)(tG, {
                                    gamesFacet: Q,
                                    participantsFacet: Y,
                                    distributedClipInitiatorsFacet: X,
                                    mainLinkCounts: q,
                                    mainLinkNewCounts: W,
                                    allClips: Z,
                                    filteredClips: B,
                                    withHeaderFilters: !J,
                                }),
                                (0, i.jsxs)("div", {
                                    className: lk.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: lk.$Q,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: lk.Rj,
                                                    children: [
                                                        eA.icon,
                                                        (0, i.jsx)(g.D, {
                                                            variant: "heading-md/medium",
                                                            color: "text-default",
                                                            children: eA.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: lk.$s,
                                                    children: [
                                                        eI &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(d.m, {
                                                                        text: eb.intl.string(eb.t.RDE0Sc),
                                                                        children: (0, i.jsx)(f.K, {
                                                                            onClick: eS,
                                                                            icon: j.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": eb.intl.string(eb.t.RDE0Sc),
                                                                            loading: ea,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(d.m, {
                                                                        text: eb.intl.string(eb.t.oyYWHE),
                                                                        children: (0, i.jsx)(f.K, {
                                                                            onClick: eD,
                                                                            icon: v.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": eb.intl.string(eb.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(f.K, {
                                                            onClick: n,
                                                            icon: C.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": eb.intl.string(eb.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        J && ef === F.fB.HOME
                                            ? (0, i.jsx)(lN, {
                                                  filteredClips: B,
                                                  totalClipCount: Z.length,
                                                  onEdit: eE,
                                                  onClipClick: O,
                                                  isLoading: et,
                                              })
                                            : (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      J &&
                                                          (0, i.jsx)(ls, {
                                                              allClips: Z,
                                                              gamesFacet: Q,
                                                              participantsFacet: Y,
                                                          }),
                                                      (0, i.jsx)(tp, {
                                                          onEdit: eE,
                                                          channelId: t,
                                                          filteredClips: B,
                                                          totalClipCount: Z.length,
                                                          onClipClick: O,
                                                          isLoading: et,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: s()(lk.jN, "editing" === en && lk.vu),
                            inert: "editing" !== en,
                            onTransitionEnd: () => {
                                switch (en) {
                                    case "gallery":
                                        ec(null), em(m.ip.HIDDEN);
                                        break;
                                    case "editing":
                                        em(m.ip.ENTERED);
                                }
                            },
                            children:
                                null != eo &&
                                (0, i.jsxs)(T.p, {
                                    clip: eo,
                                    modalContainerRef: eh,
                                    children: [
                                        (0, i.jsx)(S.A, { transitionState: eu, onClose: ew }),
                                        (0, i.jsx)(M.A, { channelId: t, onClose: ew }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
