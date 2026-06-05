l.d(t, { $: () => lb, default: () => lA });
var i = l(627968),
    a = l(64700),
    n = l(503698),
    s = l.n(n),
    r = l(17928),
    o = l(990078),
    c = l(521489),
    d = l(231723),
    u = l(97808),
    m = l(778712),
    h = l(192308),
    p = l(534514),
    x = l(408278),
    g = l(405433),
    f = l(241326),
    j = l(972213),
    v = l(775602),
    C = l(793574),
    y = l(688810),
    b = l(429913),
    A = l(137177),
    N = l(287809),
    k = l(274372),
    L = l(334686),
    E = l(315240),
    w = l(582633),
    I = l(309777),
    P = l(429364),
    M = l(352527),
    D = l(280483),
    S = l(111994);
l(321073);
var T = l(562708),
    R = l(834730),
    F = l(289873),
    _ = l(139286),
    O = l(962125),
    H = l(989349),
    z = l.n(H),
    G = l(66455),
    U = l(342952),
    K = l(890856),
    V = l(777666),
    $ = l(27232),
    Q = l(505930),
    Y = l(530005),
    B = l(406810),
    X = l(176781),
    W = l(661531),
    q = l(983851),
    Z = l(31300),
    J = l(442433),
    ee = l(587895),
    et = l(47167),
    el = l(607470),
    ei = l(734057),
    ea = l(71393),
    en = l(549685),
    es = l(174459),
    er = l(58703),
    eo = l(403362),
    ec = l(372684),
    ed = l(974293),
    eu = l(226421),
    em = l(284009),
    eh = l.n(em),
    ep = l(460905),
    ex = l(713608),
    eg = l(16590),
    ef = l(375708),
    ej = l(788332);
function ev(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eh()(l?.type === ec.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, r.bG)([N.default], () => N.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(o.m, {
        text: ef.intl.string(eg.default.vTTkFF),
        children: (0, i.jsxs)("div", {
            className: ej.S,
            children: [
                (0, i.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: ej.$, alt: n }),
                (0, i.jsx)(R.E, {
                    color: "always-white",
                    variant: "text-xs/bold",
                    children: ef.intl.formatToPlainString(eg.default.QJ7i8Z, { username: n }),
                }),
            ],
        }),
    });
}
function eC(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, i.jsx)(o.m, {
        text: a,
        children: (0, i.jsxs)("div", {
            className: ej.S,
            children: [
                (0, i.jsx)(t, { size: "xxs", color: "white" }),
                (0, i.jsx)(R.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function ey(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === ec.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case ec.Gy.DISTRIBUTED:
            return (0, i.jsx)(ev, { clip: t });
        case ec.Gy.LAUGHTER:
            return (0, i.jsx)(eC, {
                icon: ep.n,
                text: ef.intl.string(eg.default.bTC23D),
                tooltipText: ef.intl.string(eg.default["ry+jxm"]),
            });
        case ec.Gy.GAME_EVENT:
            return (0, i.jsx)(eC, {
                icon: ex.q,
                text: t.decision.signal.title ?? "",
                tooltipText: ef.intl.string(eg.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eb = l(665039),
    eA = l(718812),
    eN = l(652215),
    ek = l(798594);
let eL = function (e) {
    let { clip: t, actionsDisabled: n, isNew: o, onEdit: c, onClick: d, onHoverChange: u } = e,
        h = (0, r.yK)([N.default], () => t.users.map((e) => N.default.getUser(e)).filter(eo.Vq)),
        p = (0, r.bG)([ei.A], () => (null != t.channelId ? ei.A.getChannel(t.channelId) : null)),
        x = (0, r.bG)([ea.A], () => (null != t.guildId ? ea.A.getGuild(t.guildId) : null)),
        { analyticsLocations: g } = (0, y.Ay)(C.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: j, isMultiSelectMode: v } = a.useContext(lb),
        [b, A] = a.useState(!1),
        L = a.useRef(null),
        E = (0, G.A)(t.editMetadata?.start ?? 0),
        w = f.has(t.id),
        I = t.type === ec.nQ.SCREENSHOT,
        P = (0, et.Ay)(p),
        M = "" === t.applicationName && null != P && "" !== P ? P : t.applicationName,
        D = (0, er.Fe)(new Date(t.createdAt)),
        S = a.useMemo(() => {
            let e = [];
            return (
                t.type === ec.nQ.VOICE_CLIP
                    ? (x?.name != null && e.push(x.name), null != P && e.push(P))
                    : ("" !== M && null != M && e.push(M),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [M, x?.name, P, t.activity?.state, t.activity?.details, t.type]),
        T = a.useCallback(() => {
            let e = L.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        F = a.useCallback(() => {
            if ((u?.("" !== t.thumbnail ? t.thumbnail : null), !0 === I)) return;
            let e = L.current;
            null != e && e.paused && ((e.currentTime = E.current), L.current?.play());
        }, [I, E, u, t.thumbnail]),
        _ = a.useCallback(() => {
            if ((u?.(null), !0 === I)) return;
            let e = L.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [I, t.editMetadata?.start, u]),
        O = a.useCallback(
            (e) => {
                (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) || _();
            },
            [_],
        ),
        H = a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        z = a.useCallback(() => {
            A(!1);
        }, []),
        V = a.useCallback(
            (e) => {
                A(!0), L.current?.pause();
                let a =
                    v && f.size > 0
                        ? Array.from(f)
                              .map((e) => k.Ay.getClipById(e))
                              .filter(eo.Vq)
                        : [t];
                (0, J.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("45143"),
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
                                    es.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        clip_runtime: (0, ed.GN)(),
                                    });
                                },
                                onEdit: () => {
                                    c(t),
                                        es.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            clip_runtime: (0, ed.GN)(),
                                        });
                                },
                                onBeforeDelete: T,
                                onAfterDelete: () => {
                                    es.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        clip_runtime: (0, ed.GN)(),
                                    });
                                },
                            });
                    },
                    { onClose: z },
                );
            },
            [t, v, f, n, T, z, c],
        ),
        $ = a.useCallback(
            (e) => {
                n || (e.preventDefault(), e.stopPropagation(), V(e));
            },
            [n, V],
        ),
        Q = a.useCallback(
            (e) => {
                n ||
                    (e.shiftKey ? (e.preventDefault(), j(t.id)) : v ? j(t.id) : null != d && d(t),
                    es.default.track(eN.HAw.CLIP_GALLERY_CARD_CLICKED, { clip_runtime: (0, ed.GN)() }));
            },
            [n, v, j, t, d],
        );
    return (0, i.jsx)(y.f5, {
        value: g,
        children: (0, i.jsx)("div", {
            className: ek.o8,
            onBlur: O,
            children: (0, i.jsxs)(K.s, {
                "aria-disabled": n,
                "aria-label": ef.intl.string(!0 === I ? ef.t["HO/oXl"] : ef.t.bt75uw),
                onClick: n ? void 0 : Q,
                onContextMenu: $,
                className: s()(ek.QN, { [ek.r9]: n, [ek.in]: b, [ek.wH]: w }),
                onFocus: F,
                onMouseOver: F,
                onMouseLeave: _,
                children: [
                    (0, i.jsx)(eE, { clip: t, isNew: o, videoRef: L, onOpenContextMenu: V, actionsDisabled: n }),
                    (0, i.jsxs)("div", {
                        className: ek.wI,
                        children: [
                            (0, i.jsx)(eP, { clip: t }),
                            (0, i.jsxs)("div", {
                                className: ek.i0,
                                children: [
                                    (0, i.jsx)(ew, { clip: t }),
                                    (0, i.jsx)(R.E, {
                                        className: ek.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: S,
                                    }),
                                    (0, i.jsx)(R.E, {
                                        className: ek.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: D,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: ek.jW,
                                children: (0, i.jsx)(U.A, {
                                    maxUsers: 3,
                                    users: h,
                                    size: m._3.SIZE_24,
                                    onFocusOverflow: (e) => {
                                        let t = e.relatedTarget,
                                            l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                        t?.parentElement === l ||
                                            (t?.parentElement?.parentElement?.parentElement !== l && F());
                                    },
                                    onClickOverflow: H,
                                    "aria-label": ef.intl.string(ef.t.WTozwe),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
function eE(e) {
    let { clip: t, isNew: l, videoRef: n, onOpenContextMenu: s, actionsDisabled: r } = e,
        c = 0 === t.length,
        d = !0 === t.pending,
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
    let { durationDisplay: h, isClipEdited: p } = a.useMemo(() => {
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
            let a = z().duration(e),
                n = a.minutes(),
                s = a.seconds();
            return 0 === n
                ? { durationDisplay: `${s}s`, isClipEdited: i }
                : { durationDisplay: `${n}:${s.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [t.length, t.editMetadata]),
        g = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), E.XK(t);
            },
            [t],
        ),
        f = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, i.jsxs)("div", {
        className: ek.QB,
        children: [
            (0, i.jsx)("div", { className: ek.ne }),
            (0, i.jsx)(eI, { clip: t, videoRef: n }),
            (0, i.jsxs)("div", {
                className: ek.ry,
                children: [
                    !d && l && (0, i.jsx)(V.Lp, { text: ef.intl.string(ef.t.y2b7CA) }),
                    (0, i.jsx)(ey, { clip: t }),
                ],
            }),
            !r &&
                (0, i.jsxs)("div", {
                    className: ek.g3,
                    children: [
                        (0, i.jsx)(o.m, {
                            text: ef.intl.string(t.isFavorite ? eg.default.IZsalP : eg.default.ihBfyA),
                            position: "top",
                            children: (0, i.jsx)(x.K, {
                                onClick: g,
                                icon: t.isFavorite ? $.G : Q.y,
                                "aria-label": ef.intl.string(ef.t.k8fFjp),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)(x.K, {
                            onClick: f,
                            icon: Y.F,
                            "aria-label": ef.intl.string(ef.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                className: ek.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, i.jsxs)("div", {
                            className: ek.OH,
                            children: [
                                t.isTemporary && (0, i.jsx)(B.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(R.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: ef.intl.string(ef.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, i.jsxs)("div", {
                            className: ek.OH,
                            children: [
                                p && (0, i.jsx)(en.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(R.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: d ? ef.intl.string(ef.t["2Fp7OP"]) : h,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                u > 0 &&
                (0, i.jsx)("div", {
                    className: ek.X7,
                    children: (0, i.jsx)("div", { className: ek.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function ew(e) {
    let { clip: t } = e,
        l = (0, eA.h)(t),
        a = "" !== l;
    return (0, i.jsx)(R.E, {
        className: ek.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function eI(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, eb.j)(t),
        n = t.type === ec.nQ.SCREENSHOT;
    return t.type === ec.nQ.VOICE_CLIP
        ? (0, i.jsx)(eu.A, { className: ek.fT })
        : n
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: ek.fT })
          : null != a
            ? (0, i.jsx)(el.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: ek.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: ek.fT })
              : (0, i.jsx)("div", {
                    className: s()(ek.fT, ek.Is),
                    children: (0, i.jsx)(X.x, { color: W.A.colors.ICON_MUTED }),
                });
}
function eP(e) {
    let { clip: t } = e,
        l = (0, r.bG)([ee.A], () => (null != t.applicationId ? ee.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: ek.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: ek.NH })
                : t.type === ec.nQ.VOICE_CLIP
                  ? (0, i.jsx)(q.H, { size: "sm" })
                  : (0, i.jsx)(Z.k, { size: "sm" }),
    });
}
function eM(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: n, width: s = 288, height: r = 162 } = e;
    return (0, i.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/469fc21d7c695426b2a4476c47ce30c6ff93031a6c38a6bdf12f95264ae547f6.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: n ?? "img",
    });
}
var eD = l(702841),
    eS = l(687966),
    eT = l(475358),
    eR = l(123292),
    eF = l(292801),
    e_ = l(780964),
    eO = l(766075),
    eH = l(532624),
    ez = l(350535),
    eG = l(572164),
    eU = l(953932),
    eK = l(311162);
function eV(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: eK.Nr,
        children: [t, (0, i.jsx)(R.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function e$() {
    let e = (0, eD.bG)([eH.Ay], () => eH.Ay.getKeybindForAction(eN.hCu.SAVE_CLIP)),
        t = null != e ? ez.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: eK.kR,
        children: [
            (0, i.jsx)(eV, {
                header: (0, i.jsx)(eS._, { size: "refresh_sm", color: W.A.colors.ICON_DEFAULT }),
                description: ef.intl.string(eg.default["4K56sP"]),
            }),
            (0, i.jsx)(eV, {
                header: null != t ? (0, i.jsx)(eT.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  ef.intl.format(eg.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: eK.JH,
                                      children: (0, i.jsx)(eR.Q, {
                                          text: ef.intl.string(eg.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, eO.openUserSettings)(e_.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : ef.intl.string(eg.default.HOUDUm),
            }),
            (0, i.jsx)(eV, {
                header: (0, i.jsx)(eF.t, { size: "refresh_sm", color: W.A.colors.ICON_DEFAULT }),
                description: ef.intl.string(eg.default.DLzdl7),
            }),
        ],
    });
}
function eQ(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eG.Et)();
    return (0, i.jsx)("div", {
        className: eK.kL,
        children: (0, i.jsxs)("div", {
            className: eK.Qs,
            children: [
                (0, i.jsx)(eM, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(p.D, {
                    className: eK.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ef.intl.string(eg.default["+M2iLf"]) : ef.intl.string(eg.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(R.E, {
                        className: eK.h_,
                        variant: "text-md/medium",
                        children: ef.intl.string(eg.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: eK.SO, children: (0, i.jsx)(eU.A, {}) }),
                l && !t && (0, i.jsx)(e$, {}),
            ],
        }),
    });
}
let eY = 16 / 9;
var eB = l(621466),
    eX = l(61491),
    eW = l(821609),
    eq = l(22231),
    eZ = l(549973),
    eJ = l(609174),
    e0 = l(619744),
    e1 = l(82716),
    e2 = l(585579),
    e3 = l(226870),
    e9 = l(285072),
    e7 = l(742007);
function e5(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: n, onEdit: s } = e;
    return (0, i.jsx)(eJ.Cl, {
        clip: t,
        children: (0, i.jsx)(e6, { actionsDisabled: l, isNew: a, onClick: n, onEdit: s }),
    });
}
function e6(e) {
    let { actionsDisabled: t, isNew: n, onClick: r, onEdit: o } = e,
        c = (0, eJ.Y_)(),
        { analyticsLocations: d } = (0, y.Ay)(C.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: u, toggleClipSelection: m, isMultiSelectMode: h } = a.useContext(lb),
        [p, x] = a.useState(!1),
        [g, f] = a.useState(!1),
        [j, v] = a.useState(!1),
        [b, A] = a.useState(0),
        N = u.has(c.id),
        L = c.type === ec.nQ.SCREENSHOT,
        E = (g || p) && !N;
    a.useEffect(() => {
        if (!E || L) return;
        let e = window.setTimeout(() => v(!0), 150);
        return () => {
            window.clearTimeout(e), v(!1);
        };
    }, [E, L]);
    let w = a.useRef(null),
        I = a.useCallback(() => {
            w.current?.releaseSource();
        }, []),
        P = a.useCallback(() => x(!1), []),
        M = a.useCallback(
            (e) => {
                x(!0);
                let a =
                    h && u.size > 0
                        ? Array.from(u)
                              .map((e) => k.Ay.getClipById(e))
                              .filter(eo.Vq)
                        : [c];
                (0, J.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("45143"),
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
                                    es.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    o(c), es.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: I,
                                onAfterDelete: () => {
                                    es.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: P },
                );
            },
            [c, h, u, t, P, o, I],
        ),
        D = a.useCallback(
            (e) => {
                t || (e.preventDefault(), e.stopPropagation(), M(e));
            },
            [t, M],
        ),
        S = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), M(e);
            },
            [M],
        ),
        T = a.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    o(c),
                    es.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
            },
            [o, c],
        ),
        R = a.useCallback(
            (e) => {
                !t &&
                    (!(0, eB.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") && e.currentTarget.contains(e.target))) &&
                    (e.shiftKey ? (e.preventDefault(), m(c.id)) : h ? m(c.id) : null != r && r(c),
                    es.default.track(eN.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [t, h, m, c, r],
        );
    return (0, i.jsx)(y.f5, {
        value: d,
        children: (0, i.jsxs)(K.s, {
            "aria-disabled": t,
            "aria-label": ef.intl.string(L ? ef.t["HO/oXl"] : ef.t.bt75uw),
            onClick: t ? void 0 : R,
            onContextMenu: D,
            className: s()(e7.Nr, { [e7.r9]: t, [e7.in]: p, [e7.wH]: N }),
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            children: [
                (0, i.jsx)("div", {
                    className: e7.w7,
                    children: (0, i.jsxs)(e4, {
                        ref: w,
                        isPlaying: j,
                        onProgressChange: A,
                        children: [
                            (0, i.jsx)(e8, { isNew: n }),
                            E && !t ? (0, i.jsx)(te, { onMenu: S, onBeforeDelete: I }) : (0, i.jsx)(tt, {}),
                            (0, i.jsx)("div", { className: e7.dH, "aria-hidden": "true" }),
                        ],
                    }),
                }),
                (0, i.jsx)(tl, { showHoverState: E, playbackProgress: b, onEdit: T }),
            ],
        }),
    });
}
let e4 = a.forwardRef((e, t) => {
    let { isPlaying: l, onProgressChange: a, children: n } = e;
    return (0, i.jsx)(e3.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: a,
        children: (0, i.jsx)(e9.h, { isVisible: !0, children: n }),
    });
});
function e8(e) {
    let { isNew: t } = e,
        l = (0, eJ.Y_)(),
        a = !0 === l.pending;
    return (0, i.jsxs)("div", {
        className: e7.zV,
        children: [
            !a &&
                t &&
                (0, i.jsx)("div", {
                    className: e7.Ad,
                    children: (0, i.jsx)(R.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        children: ef.intl.string(ef.t.y2b7CA),
                    }),
                }),
            (0, i.jsx)(ey, { clip: l }),
        ],
    });
}
function te(e) {
    let { onMenu: t, onBeforeDelete: l } = e;
    return (0, i.jsxs)("div", {
        className: e7.Mw,
        children: [
            (0, i.jsx)(o.m, {
                text: ef.intl.string(ef.t["UKOtz+"]),
                children: (0, i.jsx)(x.K, {
                    onClick: t,
                    icon: Y.F,
                    "aria-label": ef.intl.string(ef.t["UKOtz+"]),
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, i.jsx)(e0.k, { onBeforeDelete: l }),
            (0, i.jsx)(e1.z, {}),
        ],
    });
}
function tt() {
    let e = (0, eJ.Y_)(),
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
            return { durationDisplay: (0, eX.rB)(a), isClipEdited: i };
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, i.jsxs)("div", {
              className: s()(e7.cH, e7._s),
              children: [
                  r && (0, i.jsx)(en.A, { color: "white", width: 14, height: 14 }),
                  (0, i.jsx)(R.E, {
                      variant: "text-xs/bold",
                      color: "always-white",
                      tabularNumbers: !0,
                      children: l ? ef.intl.string(ef.t["2Fp7OP"]) : n,
                  }),
              ],
          });
}
function tl(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: a } = e,
        n = (0, eJ.Y_)(),
        s = n.type === ec.nQ.SCREENSHOT,
        o = (0, r.yK)([N.default], () => n.users.map((e) => N.default.getUser(e)).filter(eo.Vq)),
        c = (0, r.bG)([ei.A], () => (null != n.channelId ? ei.A.getChannel(n.channelId) : null)),
        d = (0, r.bG)([ea.A], () => (null != n.guildId ? ea.A.getGuild(n.guildId) : null)),
        u = (0, et.Ay)(c),
        h = "" === n.applicationName && null != u && "" !== u ? u : n.applicationName,
        p = (0, eZ.e)({ timestamp: n.createdAt }),
        x = d?.name;
    return (0, i.jsxs)("div", {
        className: e7.yu,
        children: [
            (0, i.jsxs)("div", {
                className: e7.$,
                children: [
                    (0, i.jsx)(ti, {}),
                    o.length > 0 &&
                        (0, i.jsx)("span", {
                            className: e7.HD,
                            "data-clips-avatars": "true",
                            children: (0, i.jsx)(U.A, {
                                maxUsers: 3,
                                users: o,
                                size: m._3.SIZE_16,
                                "aria-label": ef.intl.string(ef.t.WTozwe),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                className: e7.SO,
                children: t
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              !s &&
                                  (0, i.jsx)("div", {
                                      className: e7.z5,
                                      "aria-hidden": "true",
                                      children: (0, i.jsx)("div", { className: e7.TE, style: { width: `${l}%` } }),
                                  }),
                              (0, i.jsxs)("div", {
                                  className: e7.E_,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: e7.lO,
                                          children: (0, i.jsx)(eW.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              icon: eq.R,
                                              text: ef.intl.string(ef.t.bt75uw),
                                              onClick: a,
                                              fullWidth: !0,
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: e7.lO,
                                          children: (0, i.jsx)(e2.E, { variant: "primary" }),
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)("div", {
                                  className: e7.Pb,
                                  children: [
                                      (0, i.jsx)(ta, {}),
                                      (0, i.jsx)(R.E, {
                                          className: e7.gO,
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: h,
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: e7.eg,
                                  children: [
                                      null != x &&
                                          "" !== x &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(R.E, {
                                                      className: e7.gO,
                                                      variant: "text-xs/normal",
                                                      color: "text-muted",
                                                      children: x,
                                                  }),
                                                  (0, i.jsx)("span", { className: e7.TG, "aria-hidden": "true" }),
                                              ],
                                          }),
                                      (0, i.jsx)(R.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: ef.intl.format(eg.default["0QCBug"], { time: p }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
            }),
        ],
    });
}
function ti() {
    let e = (0, eJ.Y_)(),
        t = (0, eA.h)(e),
        l = "" !== t;
    return (0, i.jsx)(R.E, {
        className: e7.DD,
        variant: "text-sm/semibold",
        color: "text-default",
        children: l ? t : e.name,
    });
}
function ta() {
    let e = (0, eJ.Y_)(),
        t = (0, r.bG)([ee.A], () => (null != e.applicationId ? ee.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: e7.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, i.jsx)("img", { src: l, alt: "", className: e7.T_ })
                : e.type === ec.nQ.VOICE_CLIP
                  ? (0, i.jsx)(q.H, { size: "xs", color: "currentColor" })
                  : (0, i.jsx)(Z.k, { size: "xs", color: "currentColor" }),
    });
}
e4.displayName = "CardThumbnail";
var tn = l(792852);
function ts(e) {
    return Math.min(45 * e, 520);
}
var tr = l(352528),
    to = l(32122);
let tc = [0, 16, 0, 16],
    td = tc[1] + tc[3];
function tu(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s, isLoading: o } = e,
        [c, d] = a.useState({ width: 0, height: 0 }),
        u = (0, r.yK)([k.Ay], () => k.Ay.getNewClipIds()),
        m = (0, r.bG)([k.Ay], () => k.Ay.getExportingClipIds().length > 0),
        { enabled: h } = L.O.useConfig({ location: "ClipsGalleryContent" }),
        x = h ? e5 : eL,
        g = (0, tn.P)((e) => e.activeMainLink),
        f = (0, tn.P)((e) => e.gameFacet),
        j = (0, tn.P)((e) => e.clippedWithFacet);
    (0, _.A)(
        {
            type: T.ImpressionTypes.MODAL,
            name: T.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: o },
        [t.length, o],
    );
    let C = a.useMemo(() => {
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
                    title: ef.intl.string(ef.t["kB2R/0"]),
                    description: t ? ef.intl.string(ef.t["6AXirz"]) : void 0,
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
        { width: y } = c,
        { tileWidth: b, columns: A } = a.useMemo(() => {
            var e, l;
            let i, a, n;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = y - td) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (n = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: n }
            );
        }, [t.length, y]),
        N = a.useMemo(() => C.map((e) => Math.ceil(e.clips.length / A)), [C, A]),
        E = a.useMemo(() => N.reduce((e, t) => e + t, 0), [N]),
        w = Math.floor(b / eY),
        I = C.length > 0 ? `${g}:${f ?? ""}:${j ?? ""}` : null,
        P = (function (e) {
            let t = (0, r.bG)([v.A], () => v.A.useReducedMotion),
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
        })(I),
        M = h && P,
        D = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = C[l];
                if (null == r) return null;
                let o = a * A,
                    c = r.clips.slice(o, o + A);
                return (0, i.jsx)(
                    "div",
                    {
                        className: tr.UX,
                        children: c.map((t, l) => {
                            let a = { width: b };
                            return (
                                M && (a["--custom-entrance-delay"] = `${ts(e + l)}ms`),
                                (0, i.jsx)(
                                    "div",
                                    {
                                        className: M ? to.$ : void 0,
                                        style: a,
                                        children: (0, i.jsx)(x, {
                                            actionsDisabled: m,
                                            isNew: u.includes(t.id),
                                            onClick: n ?? s,
                                            onEdit: s,
                                            clip: t,
                                        }),
                                    },
                                    `${I ?? "static"}:${t.id}`,
                                )
                            );
                        }),
                    },
                    `row-${l}-${a}`,
                );
            },
            [C, A, b, m, u, n, s, x, M, I],
        ),
        S = a.useCallback(
            (e) => {
                let t = C[e];
                return t?.description != null ? 66 : 44;
            },
            [C],
        ),
        H = a.useCallback(
            (e) => {
                let t = C[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: tr.aE,
                              children: [
                                  (0, i.jsx)(p.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, i.jsx)(R.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: tr.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [C],
        );
    return o || 0 !== C.length
        ? o && 0 === C.length
            ? (0, i.jsx)("div", { className: tr.dc, children: (0, i.jsx)(F.y, {}) })
            : (0, i.jsx)(O.A, {
                  listPadding: tc,
                  renderRow: D,
                  renderSectionHeader: H,
                  rowCount: E,
                  rowCountBySection: N,
                  rowHeight: w + (h ? 96 : 68) + 16,
                  sectionHeaderHeight: S,
                  onResize: d,
              })
        : (0, i.jsx)(eQ, { isEmptyBecauseQuery: l > 0 });
}
var tm = l(922016),
    th = l(783977),
    tp = l(625903),
    tx = l(892547),
    tg = l(939249),
    tf = l(364522),
    tj = l(91871),
    tv = l.n(tj),
    tC = l(980707),
    ty = l(477782),
    tb = l(583650);
function tA(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: n,
            selectedActivity: s,
            selectedGuildId: r,
            dateFilter: o,
            sortOrder: c,
            toggleUserId: d,
            setSelectedActivity: u,
            setSelectedGuildId: m,
            setDateFilter: h,
            setSortOrder: p,
            clearFilters: x,
        } = (0, tn.P)(),
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
                })(o),
            [o],
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
                        let t = N.default.getUser(e);
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
                        let t = ea.A.getGuild(e);
                        null != t && l.push({ guildId: e, name: t.name });
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        y = a.useMemo(
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
        [b, A] = a.useState(""),
        [k, L] = a.useState(""),
        [E, w] = a.useState(""),
        I = a.useMemo(
            () => (0 === b.trim().length ? j : j.filter((e) => tv()(b.toLowerCase(), e.name.toLowerCase()))),
            [j, b],
        ),
        P = a.useMemo(
            () => (0 === k.trim().length ? C : C.filter((e) => tv()(k.toLowerCase(), e.name.toLowerCase()))),
            [C, k],
        ),
        M = a.useMemo(
            () => (0 === E.trim().length ? v : v.filter((e) => tv()(E.toLowerCase(), e.toLowerCase()))),
            [v, E],
        ),
        D = n.size > 0 || null != s || null != r || null != g,
        T = a.useMemo(() => {
            if (0 !== n.size)
                return j
                    .filter((e) => n.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [n, j]),
        R = a.useMemo(() => {
            if (null == r) return;
            let e = C.find((e) => e.guildId === r);
            return e?.name;
        }, [r, C]),
        F = a.useMemo(() => s ?? void 0, [s]),
        _ = a.useMemo(() => (null != g ? String(g) : void 0), [g]);
    return (0, i.jsxs)(tC.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": ef.intl.string(ef.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(ty.rX, {
                label: "Filter",
                children: [
                    j.length > 0 &&
                        (0, i.jsxs)(ty.Dr, {
                            id: "participants",
                            label: ef.intl.string(ef.t.YQ6dJg),
                            subtext: T,
                            children: [
                                j.length > 20 &&
                                    (0, i.jsx)(ty.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tb.V, {
                                                ...e,
                                                query: b,
                                                onChange: A,
                                                ref: t,
                                                placeholder: ef.intl.string(ef.t["5h0QOP"]),
                                            }),
                                    }),
                                I.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        ty.sL,
                                        { id: `participant-${t}`, label: l, action: () => d(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    C.length > 0 &&
                        (0, i.jsxs)(ty.Dr, {
                            id: "servers",
                            label: ef.intl.string(ef.t["5qyruI"]),
                            subtext: R,
                            children: [
                                C.length > 20 &&
                                    (0, i.jsx)(ty.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tb.V, {
                                                ...e,
                                                query: k,
                                                onChange: L,
                                                ref: t,
                                                placeholder: ef.intl.string(ef.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(ty.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: ef.intl.string(ef.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                P.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        ty.iD,
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
                        (0, i.jsxs)(ty.Dr, {
                            id: "activities",
                            label: ef.intl.string(ef.t.agRtPG),
                            subtext: F,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(ty.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tb.V, {
                                                ...e,
                                                query: E,
                                                onChange: w,
                                                ref: t,
                                                placeholder: ef.intl.string(ef.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(ty.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: ef.intl.string(ef.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == s,
                                }),
                                M.map((e) =>
                                    (0, i.jsx)(
                                        ty.iD,
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
                    y.length > 0 &&
                        (0, i.jsxs)(ty.Dr, {
                            id: "years",
                            label: ef.intl.string(ef.t.w9zd68),
                            subtext: _,
                            children: [
                                (0, i.jsx)(ty.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: ef.intl.string(ef.t["2/yeUU"]),
                                    action: () => f(null),
                                    checked: null == g,
                                }),
                                y.map((e) =>
                                    (0, i.jsx)(
                                        ty.iD,
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
            (0, i.jsxs)(ty.rX, {
                label: ef.intl.string(ef.t.XvNMNk),
                children: [
                    (0, i.jsx)(ty.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: ef.intl.string(ef.t["4LLKx3"]),
                        action: () => p(S.mu.MOST_RECENT),
                        checked: c === S.mu.MOST_RECENT,
                    }),
                    (0, i.jsx)(ty.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: ef.intl.string(ef.t["0gitSE"]),
                        action: () => p(S.mu.OLDEST),
                        checked: c === S.mu.OLDEST,
                    }),
                ],
            }),
            D &&
                (0, i.jsx)(ty.rX, {
                    children: (0, i.jsx)(ty.Dr, { id: "clear-filters", label: ef.intl.string(ef.t.FbDgiu), action: x }),
                }),
        ],
    });
}
var tN = l(7689),
    tk = l(332837),
    tL = l(175841),
    tE = l(724993);
function tw(e) {
    let { icon: t, label: l, trailer: a, isSelected: n, isDisabled: r = !1, onClick: o } = e,
        c = r && !n;
    return (0, i.jsxs)(tg.D, {
        onClick: c ? void 0 : o,
        className: s()(tE.nM, { [tE.CZ]: n, [tE.lr]: c }),
        "aria-pressed": n,
        "aria-disabled": c,
        children: [
            (0, i.jsx)("span", { className: tE.aL, children: t }),
            (0, i.jsx)(R.E, {
                variant: "text-md/medium",
                color: "currentColor",
                className: tE.xZ,
                lineClamp: 1,
                children: l,
            }),
            null != a && (0, i.jsx)("span", { className: tE.iP, children: a }),
        ],
    });
}
function tI() {
    let e = (0, r.bG)([eH.Ay], () => eH.Ay.getKeybindForAction(eN.hCu.SAVE_CLIP)),
        t = (0, tn.P)((e) => e.setActiveMainLink),
        l = (0, tn.P)((e) => e.setGameFacet),
        n = (0, tn.P)((e) => e.setClippedWithFacet),
        s = (0, tn.P)((e) => e.setPendingSearchFocus),
        c = a.useCallback(() => {
            (0, eO.openUserSettings)(e_.X.CLIPS_PANEL);
        }, []),
        d = a.useCallback(() => {
            l(null), n(null), t(S.oH.ALL_CLIPS), s(!0);
        }, [l, n, t, s]),
        u = null != e ? ez.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: tE.aN,
        children: [
            (0, i.jsxs)("div", {
                className: tE.pR,
                children: [
                    (0, i.jsx)(p.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: ef.intl.string(ef.t.z2jK6X),
                    }),
                    null != u && (0, i.jsx)(eT.e, { shortcut: u }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: tE.XL,
                children: [
                    (0, i.jsx)(o.m, {
                        text: ef.intl.string(ef.t["5h0QOP"]),
                        children: (0, i.jsx)(x.K, {
                            onClick: d,
                            icon: tN.$,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": ef.intl.string(ef.t["5h0QOP"]),
                        }),
                    }),
                    (0, i.jsx)(o.m, {
                        text: ef.intl.string(ef.t["3D5yo/"]),
                        children: (0, i.jsx)(x.K, {
                            onClick: c,
                            icon: tp.Z,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": ef.intl.string(ef.t["3D5yo/"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function tP(e) {
    let t,
        l,
        n,
        s,
        r,
        o,
        c,
        d,
        u,
        m,
        h,
        { mainLinkCounts: p, mainLinkNewCounts: x } = e,
        g = (0, tn.P)((e) => e.activeMainLink),
        f =
            ((t = (0, tn.P)((e) => e.setActiveMainLink)),
            (l = (0, tn.P)((e) => e.setGameFacet)),
            (n = (0, tn.P)((e) => e.setClippedWithFacet)),
            (s = (0, tn.P)((e) => e.clearFilters)),
            a.useCallback(
                (e) => {
                    t(e), l(null), n(null), s();
                },
                [t, l, n, s],
            )),
        j = (0, tn.P)((e) => e.gameFacet),
        v = (0, tn.P)((e) => e.clippedWithFacet),
        C = null != j || null != v;
    return (0, i.jsxs)("div", {
        className: tE.uW,
        children: [
            (0, i.jsx)(tw, {
                icon: (0, i.jsx)(tk.f, { size: "sm", color: "currentColor" }),
                label: ef.intl.string(ef.t.Ym2Ri6),
                isSelected: ((r = S.oH.HOME), !C && g === r),
                onClick: () => f(S.oH.HOME),
            }),
            (0, i.jsx)(tw, {
                icon: (0, i.jsx)(X.x, { size: "sm", color: "currentColor" }),
                label: ef.intl.string(ef.t.dPVrEv),
                trailer: (0, i.jsx)(tM, { count: x.allClips }),
                isSelected: ((o = S.oH.ALL_CLIPS), !C && g === o),
                isDisabled: 0 === p.allClips && ((c = S.oH.ALL_CLIPS), !!C || g !== c),
                onClick: () => f(S.oH.ALL_CLIPS),
            }),
            (0, i.jsx)(tw, {
                icon: (0, i.jsx)(tL.B, { size: "sm", color: "currentColor" }),
                label: ef.intl.string(eg.default.ikNKf1),
                trailer: (0, i.jsx)(tM, { count: x.autoClips }),
                isSelected: ((d = S.oH.AUTO_CLIPS), !C && g === d),
                isDisabled: 0 === p.autoClips && ((u = S.oH.AUTO_CLIPS), !!C || g !== u),
                onClick: () => f(S.oH.AUTO_CLIPS),
            }),
            (0, i.jsx)(tw, {
                icon: (0, i.jsx)($.G, { size: "sm", color: "currentColor" }),
                label: ef.intl.string(ef.t["9rlCk1"]),
                trailer: (0, i.jsx)(tM, { count: x.favorites }),
                isSelected: ((m = S.oH.FAVORITES), !C && g === m),
                isDisabled: 0 === p.favorites && ((h = S.oH.FAVORITES), !!C || g !== h),
                onClick: () => f(S.oH.FAVORITES),
            }),
        ],
    });
}
function tM(e) {
    let { count: t } = e;
    return t <= 0 ? null : (0, i.jsx)(V.hV, { count: t });
}
function tD(e) {
    let t,
        l,
        n,
        r,
        { gamesFacet: o } = e,
        c = (0, tn.P)((e) => e.gameFacet),
        d =
            ((t = (0, tn.P)((e) => e.setGameFacet)),
            (l = (0, tn.P)((e) => e.setClippedWithFacet)),
            (n = (0, tn.P)((e) => e.setActiveMainLink)),
            (r = (0, tn.P)((e) => e.clearFilters)),
            a.useCallback(
                (e, i) => {
                    null == i
                        ? "game" === e
                            ? t(null)
                            : l(null)
                        : ("game" === e ? t(i) : l(i), "game" === e ? l(null) : t(null), n(S.oH.ALL_CLIPS), r());
                },
                [t, l, n, r],
            )),
        u = a.useMemo(() => o.map((e) => e.key), [o]),
        m = (0, b.A)(u),
        h = a.useMemo(() => new Map(m.map((e) => [e?.id, e])), [m]);
    return 0 === o.length
        ? null
        : (0, i.jsxs)(tf.Ip, {
              className: s()(tE.uW, tE.fC),
              fade: !0,
              children: [
                  (0, i.jsx)(p.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: tE.a9,
                      children: ef.intl.string(ef.t.URyqtP),
                  }),
                  (0, i.jsx)("div", {
                      className: tE._A,
                      children: o.map((e) =>
                          (0, i.jsx)(
                              tw,
                              {
                                  icon: (0, i.jsx)(A.A, { game: h.get(e.key), size: A.M.XSMALL }),
                                  label: e.name,
                                  trailer: (0, i.jsx)(tM, { count: e.newCount }),
                                  isSelected: c === e.key,
                                  isDisabled: e.isDisabled,
                                  onClick: () => d("game", c === e.key ? null : e.key),
                              },
                              e.key,
                          ),
                      ),
                  }),
              ],
          });
}
function tS(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: a } = e;
    return (0, i.jsxs)("div", {
        className: tE.pz,
        children: [
            (0, i.jsx)(tI, {}),
            (0, i.jsxs)("div", {
                className: tE.wp,
                children: [
                    (0, i.jsx)(tP, { mainLinkCounts: l, mainLinkNewCounts: a }),
                    (0, i.jsx)(tD, { gamesFacet: t }),
                ],
            }),
        ],
    });
}
var tT = l(174726);
let tR = a.memo(function (e) {
        let { withHeaderFilters: t, allClips: l } = e,
            n = (0, tn.P)((e) => e.query),
            s = (0, tn.P)((e) => e.setQuery),
            r = (0, tn.P)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.dateFilter),
            ),
            c = (0, eD.bG)([eH.Ay], () => eH.Ay.getKeybindForAction(eN.hCu.SAVE_CLIP)),
            d = a.useCallback(() => {
                (0, eO.openUserSettings)(e_.X.CLIPS_PANEL);
            }, []),
            u = a.useCallback(() => s(""), [s]),
            m = null != c ? ez.dI(c.shortcut, !0) : null,
            h = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: tT.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: tT.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tT.Pe,
                            children: [
                                (0, i.jsx)(p.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: ef.intl.string(ef.t.z2jK6X),
                                }),
                                null != m && (0, i.jsx)(eT.e, { className: tT.P, shortcut: m }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tT.$s,
                            children: [
                                t &&
                                    (0, i.jsx)(o.m, {
                                        text: ef.intl.string(ef.t.X7yRDm),
                                        children: (0, i.jsx)(tm.Y, {
                                            position: "bottom",
                                            targetElementRef: h,
                                            renderPopout: (e) => (0, i.jsx)(tA, { ...e, allClips: l }),
                                            children: (e) =>
                                                (0, i.jsx)("div", {
                                                    ref: h,
                                                    children:
                                                        r > 0
                                                            ? (0, i.jsx)(eW.$, {
                                                                  size: "sm",
                                                                  variant: "secondary",
                                                                  ...e,
                                                                  text: ef.intl.formatToPlainString(eg.default.JbyR1U, {
                                                                      count: r,
                                                                  }),
                                                                  icon: th.R,
                                                                  iconPosition: "end",
                                                              })
                                                            : (0, i.jsx)(x.K, {
                                                                  icon: th.R,
                                                                  ...e,
                                                                  size: "sm",
                                                                  variant: "icon-only",
                                                                  "aria-label": ef.intl.string(ef.t.X7yRDm),
                                                              }),
                                                }),
                                        }),
                                    }),
                                (0, i.jsx)(o.m, {
                                    text: ef.intl.string(ef.t["3D5yo/"]),
                                    children: (0, i.jsx)(x.K, {
                                        onClick: d,
                                        icon: tp.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ef.intl.string(ef.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                t &&
                    (0, i.jsx)("div", {
                        className: tT.MT,
                        children: (0, i.jsx)(tx.I, {
                            placeholder: ef.intl.string(ef.t["5h0QOP"]),
                            query: n,
                            onChange: s,
                            onClear: u,
                            size: "md",
                        }),
                    }),
            ],
        });
    }),
    tF = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: n, onClick: r } = e;
        return (0, i.jsxs)(tg.D, {
            className: s()(tT.MV, { [tT.wH]: n }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: tT.tk,
                    children: [
                        a,
                        (0, i.jsx)(R.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tT.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tT.z2,
                    children: (0, i.jsx)(R.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function t_(e) {
    let { enabled: t } = L.O.useConfig({ location: "ClipsGallerySidebar" });
    return t
        ? (0, i.jsx)(tS, {
              gamesFacet: e.gamesFacet,
              distributedClipInitiatorsFacet: e.distributedClipInitiatorsFacet,
              mainLinkCounts: e.mainLinkCounts,
              mainLinkNewCounts: e.mainLinkNewCounts,
          })
        : (0, i.jsx)(tO, {
              allClips: e.allClips,
              filteredClips: e.filteredClips,
              withHeaderFilters: e.withHeaderFilters,
          });
}
function tO(e) {
    let { allClips: t, filteredClips: l, withHeaderFilters: n } = e,
        s = (0, tn.P)((e) => e.gameFacet),
        r = (0, tn.P)((e) => e.activeMainLink),
        o = (0, tn.P)((e) => e.setGameFacet),
        c = (0, tn.P)((e) => e.setActiveMainLink),
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
        x = (0, b.A)(h),
        g = a.useMemo(() => new Map(x.map((e) => [e?.id, e])), [x]),
        f = a.useCallback(() => {
            c(S.oH.ALL_CLIPS), o(null);
        }, [c, o]),
        j = a.useCallback(() => {
            c(S.oH.FAVORITES), o(null);
        }, [c, o]),
        v = a.useCallback(
            (e) => {
                o(e), c(S.oH.ALL_CLIPS);
            },
            [o, c],
        ),
        C = null == s && r === S.oH.ALL_CLIPS,
        y = null == s && r === S.oH.FAVORITES;
    return (0, i.jsxs)("div", {
        className: tT.pz,
        children: [
            (0, i.jsx)(tR, { withHeaderFilters: n, allClips: t }),
            (0, i.jsxs)("div", {
                className: tT.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: tT.om,
                        children: (0, i.jsxs)("div", {
                            className: tT.Ep,
                            children: [
                                (0, i.jsx)(tF, {
                                    name: ef.intl.string(ef.t.dPVrEv),
                                    count: u,
                                    icon: (0, i.jsx)(X.x, {}),
                                    isSelected: C,
                                    onClick: f,
                                }),
                                (0, i.jsx)(tF, {
                                    name: ef.intl.string(ef.t["9rlCk1"]),
                                    count: m,
                                    icon: (0, i.jsx)($.G, {}),
                                    isSelected: y,
                                    onClick: j,
                                }),
                            ],
                        }),
                    }),
                    d.length > 0 &&
                        (0, i.jsxs)(tf.Ip, {
                            className: tT.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(p.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tT.a9,
                                    children: ef.intl.string(ef.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: tT.Ep,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            tF,
                                            {
                                                name: e.name,
                                                count: e.count,
                                                icon: (0, i.jsx)(A.A, {
                                                    game: g.get(e.applicationId),
                                                    size: A.M.XSMALL,
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
var tH = l(847374),
    tz = l(112173),
    tG = l(548118),
    tU = l(441349),
    tK = l(789645),
    tV = l(939546),
    t$ = l(99478);
function tQ(e) {
    return e.setHours(0, 0, 0, 0), e.getTime();
}
function tY(e) {
    return e.setHours(23, 59, 59, 999), e.getTime();
}
function tB(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tV.Xj)();
    return { preset: "custom", after: null != e ? tQ(e.toDate(l)) : null, before: null != t ? tY(t.toDate(l)) : null };
}
function tX(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new t$.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tW = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tq(e) {
    return tW.format(new Date(e));
}
function tZ(e) {
    switch (e.preset) {
        case "today":
            return ef.intl.string(eg.default.yOAWWM);
        case "yesterday":
            return ef.intl.string(eg.default["PtV/Ti"]);
        case "last-3-days":
            return ef.intl.string(eg.default.xfmv7I);
        case "this-year":
            return ef.intl.string(eg.default["+eE7zX"]);
        case "last-year":
            return ef.intl.string(eg.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tq(e.after) : null,
                l = null != e.before ? tq(e.before) : null;
            if (null != t && null != l)
                return ef.intl.formatToPlainString(eg.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return ef.intl.formatToPlainString(eg.default.k1FkTL, { date: t });
            if (null != l) return ef.intl.formatToPlainString(eg.default["4NlpHD"], { date: l });
            return ef.intl.string(eg.default.tv9apA);
        }
    }
}
var tJ = l(817480);
function t0(e) {
    let { closePopout: t } = e,
        l = (0, tn.P)((e) => e.dateFilter),
        n = (0, tn.P)((e) => e.setDateFilter),
        [r, c] = a.useState(l?.preset === "custom"),
        [d, u] = a.useState(() => (l?.preset === "custom" ? tX(l.after) : null)),
        [m, h] = a.useState(() => (l?.preset === "custom" ? tX(l.before) : null)),
        p = a.useMemo(
            () => [
                { key: "today", label: ef.intl.string(eg.default.yOAWWM) },
                { key: "yesterday", label: ef.intl.string(eg.default["PtV/Ti"]) },
                { key: "last-3-days", label: ef.intl.string(eg.default.xfmv7I) },
                { key: "this-year", label: ef.intl.string(eg.default["+eE7zX"]) },
                { key: "last-year", label: ef.intl.string(eg.default.Nwj9v0) },
            ],
            [],
        ),
        g = l?.preset ?? null,
        f = r && "custom" !== g ? null : g,
        j = a.useMemo(() => (0, tV.Ec)((0, tV.Xj)()), []),
        v = a.useCallback(
            (e) => {
                n(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tQ(new Date(t)), before: tY(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tQ(new Date(l)), before: tY(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return l.setDate(l.getDate() - 2), { preset: e, after: tQ(l), before: tY(new Date(t)) };
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
        y = a.useCallback(
            (e) => {
                u(e), n(tB(e, m));
            },
            [m, n],
        ),
        b = a.useCallback(
            (e) => {
                h(e), n(tB(d, e));
            },
            [d, n],
        ),
        A = a.useCallback(() => {
            u(null), h(null), n(null);
        }, [n]),
        N = null != d || null != m;
    return (0, i.jsxs)("div", {
        className: s()(tJ.SW, r && tJ.Td),
        children: [
            (0, i.jsxs)("div", {
                className: tJ.sh,
                children: [
                    (0, i.jsx)(R.E, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: tJ.a9,
                        children: ef.intl.string(eg.default.upqksT),
                    }),
                    (0, i.jsxs)("div", {
                        className: tJ.eF,
                        children: [
                            p.map((e) =>
                                (0, i.jsx)(
                                    tg.D,
                                    {
                                        className: s()(tJ.zD, f === e.key && tJ.pH),
                                        onClick: () => v(e.key),
                                        "aria-pressed": f === e.key,
                                        children: (0, i.jsx)(R.E, {
                                            variant: "text-sm/medium",
                                            color: "currentColor",
                                            children: e.label,
                                        }),
                                    },
                                    e.key,
                                ),
                            ),
                            (0, i.jsxs)(tg.D, {
                                className: s()(tJ.zD, tJ.Kl, (r || "custom" === g) && tJ.pH),
                                onClick: C,
                                "aria-expanded": r,
                                children: [
                                    (0, i.jsx)(R.E, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        children: ef.intl.string(eg.default.tv9apA),
                                    }),
                                    (0, i.jsx)(R.E, {
                                        variant: "text-md/medium",
                                        color: "text-muted",
                                        className: tJ.Xt,
                                        children: r ? "\u25C0" : "\u25B6",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: tJ.ML,
                "aria-hidden": !r,
                children: [
                    (0, i.jsxs)("div", {
                        className: tJ.U6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tJ._2,
                                children: [
                                    (0, i.jsx)(R.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: tJ.bk,
                                        "aria-hidden": !0,
                                        children: ef.intl.string(eg.default["96vZuU"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: tJ.h0,
                                        children: [
                                            (0, i.jsx)(tU.l, {
                                                label: ef.intl.string(eg.default["96vZuU"]),
                                                hideLabel: !0,
                                                value: d,
                                                onChange: y,
                                                maxValue: m ?? j,
                                            }),
                                            null != d &&
                                                (0, i.jsx)(o.m, {
                                                    text: ef.intl.string(ef.t.VkKicb),
                                                    children: (0, i.jsx)(x.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tK.P,
                                                        onClick: () => y(null),
                                                        "aria-label": ef.intl.string(ef.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: tJ._2,
                                children: [
                                    (0, i.jsx)(R.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: tJ.bk,
                                        "aria-hidden": !0,
                                        children: ef.intl.string(eg.default["GL51/b"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: tJ.h0,
                                        children: [
                                            (0, i.jsx)(tU.l, {
                                                label: ef.intl.string(eg.default["GL51/b"]),
                                                hideLabel: !0,
                                                value: m,
                                                onChange: b,
                                                minValue: d ?? void 0,
                                                maxValue: j,
                                            }),
                                            null != m &&
                                                (0, i.jsx)(o.m, {
                                                    text: ef.intl.string(ef.t.VkKicb),
                                                    children: (0, i.jsx)(x.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tK.P,
                                                        onClick: () => b(null),
                                                        "aria-label": ef.intl.string(ef.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    N &&
                        (0, i.jsx)("div", {
                            className: tJ.dS,
                            children: (0, i.jsx)(eR.Q, { size: "sm", text: ef.intl.string(ef.t.VkKicb), onClick: A }),
                        }),
                ],
            }),
        ],
    });
}
var t1 = l(103552),
    t2 = l(914427),
    t3 = l(213424);
function t9(e) {
    let {
            triggerLabel: t,
            options: l,
            selectedKeys: n,
            onToggle: s,
            multiSelect: r,
            searchPlaceholder: o,
            emptyStateText: c,
        } = e,
        d = a.useRef(null),
        u = a.useMemo(() => new Set(n), [n]),
        m = a.useCallback(
            (e) => {
                let t;
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tv()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, i.jsxs)(
                            t1.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, i.jsx)("span", { className: t3.H, children: e.icon }),
                                    (0, i.jsx)(t1.x4.Label, { children: e.label }),
                                    r ? (0, i.jsx)(t1.x4.Checkbox, {}) : (0, i.jsx)(t1.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = n.size > 0 ? `${t} (${n.size})` : t;
    return (0, i.jsx)(tm.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(t2.p, {
                "aria-label": t,
                placeholder: o,
                value: u,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: c ?? ef.intl.string(ef.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(eW.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tH.a,
                iconPosition: "end",
            }),
    });
}
var t7 = l(941886);
function t5(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: n } = e;
    return (0, i.jsxs)("div", {
        className: t7.Io,
        children: [
            null != l && (0, i.jsx)("span", { className: t7.Kk, children: l }),
            (0, i.jsx)(R.E, {
                className: t7.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, i.jsx)(tg.D, {
                className: t7.DT,
                onClick: a,
                "aria-label": n ?? ef.intl.string(ef.t.N86XcP),
                children: (0, i.jsx)(tK.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t6 = l(841765);
let t4 = { all: eg.default.lscwjQ, auto: eg.default.xrOIkz, manual: eg.default.D7HSLJ };
function t8() {
    let e = (0, tn.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? tZ(e) : ef.intl.string(eg.default.upqksT);
    return (0, i.jsx)(tm.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(t0, { closePopout: t });
        },
        children: (e) =>
            (0, i.jsx)(eW.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tH.a,
                iconPosition: "end",
            }),
    });
}
function le() {
    let e = (0, tn.P)((e) => e.sortOrder),
        t = (0, tn.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        n = (e) => {
            t(e);
        },
        s = e === S.mu.OLDEST ? ef.intl.string(ef.t["0gitSE"]) : ef.intl.string(ef.t["4LLKx3"]);
    return (0, i.jsx)(tm.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, i.jsx)(tC.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": ef.intl.string(ef.t.XvNMNk),
                onClose: l,
                onSelect: void 0,
                children: (0, i.jsxs)(ty.rX, {
                    children: [
                        (0, i.jsx)(ty.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: ef.intl.string(ef.t["4LLKx3"]),
                            action: () => {
                                n(S.mu.MOST_RECENT), l();
                            },
                            checked: e === S.mu.MOST_RECENT,
                        }),
                        (0, i.jsx)(ty.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: ef.intl.string(ef.t["0gitSE"]),
                            action: () => {
                                n(S.mu.OLDEST), l();
                            },
                            checked: e === S.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(eW.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: s, icon: tz.J }),
    });
}
function lt() {
    let e = (0, tn.P)((e) => e.clipMethodFilter),
        t = (0, tn.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null),
        n = (e) => {
            t(e);
        };
    return (0, i.jsx)(tm.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, i.jsx)(tC.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": ef.intl.string(eg.default["kIqbb/"]),
                onClose: l,
                onSelect: void 0,
                children: (0, i.jsxs)(ty.rX, {
                    children: [
                        (0, i.jsx)(ty.iD, {
                            id: "method-all",
                            group: "method",
                            label: ef.intl.string(eg.default.lscwjQ),
                            action: () => {
                                n("all"), l();
                            },
                            checked: "all" === e,
                        }),
                        (0, i.jsx)(ty.iD, {
                            id: "method-auto",
                            group: "method",
                            label: ef.intl.string(eg.default.xrOIkz),
                            action: () => {
                                n("auto"), l();
                            },
                            checked: "auto" === e,
                        }),
                        (0, i.jsx)(ty.iD, {
                            id: "method-manual",
                            group: "method",
                            label: ef.intl.string(eg.default.D7HSLJ),
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
            (0, i.jsx)(eW.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: ef.intl.string(eg.default["kIqbb/"]),
                icon: tH.a,
                iconPosition: "end",
            }),
    });
}
function ll(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: n } = e,
        s = (0, tn.P)((e) => e.query),
        r = (0, tn.P)((e) => e.setQuery),
        o = (0, tn.P)((e) => e.pendingSearchFocus),
        c = (0, tn.P)((e) => e.setPendingSearchFocus),
        d = a.useRef(null),
        h = (0, tn.P)((e) => e.activeMainLink),
        p = (0, tn.P)((e) => e.clipMethodFilter),
        x = (0, tn.P)((e) => e.setClipMethodFilter),
        g = (0, tn.P)((e) => e.gameFacet),
        f = (0, tn.P)((e) => e.clippedWithFacet),
        j = (0, tn.P)((e) => e.selectedGameIds),
        v = (0, tn.P)((e) => e.selectedUserIds),
        C = (0, tn.P)((e) => e.selectedGuildId),
        y = (0, tn.P)((e) => e.selectedActivity),
        k = (0, tn.P)((e) => e.dateFilter),
        L = (0, tn.P)((e) => e.toggleGameId),
        E = (0, tn.P)((e) => e.toggleUserId),
        w = (0, tn.P)((e) => e.setSelectedGuildId),
        I = (0, tn.P)((e) => e.setSelectedActivity),
        P = (0, tn.P)((e) => e.setDateFilter),
        M = (0, tn.P)((e) => e.clearFilters);
    a.useEffect(() => {
        o && (d.current?.focus(), c(!1));
    }, [o, c]);
    let D = a.useMemo(() => l.map((e) => e.key), [l]),
        T = (0, b.A)(D),
        R = a.useMemo(() => new Map(T.map((e) => [e?.id, e])), [T]),
        F = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, i.jsx)(A.A, { game: R.get(e.key), size: A.M.XSMALL }),
                })),
            [l, R],
        ),
        _ = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = ea.A.getGuild(e);
                        null != t && l.push({ key: e, label: t.name, guild: t });
                    }
                    return l.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), l;
                })(t),
            [t],
        ),
        O = a.useMemo(
            () =>
                _.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, i.jsx)(tG.Ay, { guild: e.guild, size: tG.Ay.Sizes.MINI }),
                })),
            [_],
        ),
        H = a.useMemo(() => new Map(_.map((e) => [e.key, e.guild])), [_]),
        z = a.useMemo(
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
        G = a.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = N.default.getUser(l.key);
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
                    icon: (0, i.jsx)(u.eu, { src: e.avatarUrl, size: m._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [n],
        ),
        U = a.useMemo(() => (null != C ? new Set([C]) : new Set()), [C]),
        K = a.useMemo(() => (null != y ? new Set([y]) : new Set()), [y]),
        V = a.useCallback(
            (e) => {
                w(C === e ? null : e);
            },
            [C, w],
        ),
        $ = a.useCallback(
            (e) => {
                I(y === e ? null : e);
            },
            [y, I],
        ),
        Q = null == g,
        Y = null == f,
        B = h !== S.oH.AUTO_CLIPS,
        X = ef.intl.string(t4[p]),
        W = (0, i.jsxs)(i.Fragment, {
            children: [
                Q &&
                    Array.from(j).map((e) => {
                        let t = F.find((t) => t.key === e);
                        return (0, i.jsx)(
                            t5,
                            {
                                label: t?.label ?? e,
                                icon: (0, i.jsx)(A.A, { game: R.get(e), size: A.M.XSMALL }),
                                onRemove: () => L(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != k && (0, i.jsx)(t5, { label: tZ(k), onRemove: () => P(null) }, "date"),
                null != C &&
                    (0, i.jsx)(
                        t5,
                        {
                            label: O.find((e) => e.key === C)?.label ?? C,
                            icon:
                                null != H.get(C)
                                    ? (0, i.jsx)(tG.Ay, { guild: H.get(C), size: tG.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => w(null),
                        },
                        "guild",
                    ),
                Y && Array.from(v).map((e) => (0, i.jsx)(li, { userId: e, onRemove: () => E(e) }, `user-${e}`)),
                null != y && (0, i.jsx)(t5, { label: y, onRemove: () => I(null) }, "activity"),
                B && "all" !== p && (0, i.jsx)(t5, { label: X, onRemove: () => x("all") }, "method"),
            ],
        }),
        q = (Q && j.size > 0) || null != k || null != C || (Y && v.size > 0) || null != y || (B && "all" !== p);
    return (0, i.jsxs)("div", {
        className: t6.kT,
        children: [
            (0, i.jsxs)("div", {
                className: t6.HL,
                children: [
                    (0, i.jsx)("div", {
                        className: t6.MT,
                        children: (0, i.jsx)(tx.I, {
                            ref: d,
                            placeholder: ef.intl.string(ef.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: t6.Zq,
                        children: [
                            B && (0, i.jsx)(lt, {}),
                            Q &&
                                F.length > 0 &&
                                (0, i.jsx)(t9, {
                                    triggerLabel: ef.intl.string(ef.t.URyqtP),
                                    options: F,
                                    selectedKeys: j,
                                    onToggle: L,
                                    multiSelect: !0,
                                    searchPlaceholder: ef.intl.string(ef.t["5h0QOP"]),
                                }),
                            (0, i.jsx)(t8, {}),
                            O.length > 0 &&
                                (0, i.jsx)(t9, {
                                    triggerLabel: ef.intl.string(ef.t["5qyruI"]),
                                    options: O,
                                    selectedKeys: U,
                                    onToggle: V,
                                    multiSelect: !1,
                                    searchPlaceholder: ef.intl.string(ef.t["5h0QOP"]),
                                }),
                            Y &&
                                G.length > 0 &&
                                (0, i.jsx)(t9, {
                                    triggerLabel: ef.intl.string(ef.t.YQ6dJg),
                                    options: G,
                                    selectedKeys: v,
                                    onToggle: (e) => E(e),
                                    multiSelect: !0,
                                    searchPlaceholder: ef.intl.string(ef.t["5h0QOP"]),
                                }),
                            z.length > 0 &&
                                (0, i.jsx)(t9, {
                                    triggerLabel: ef.intl.string(ef.t.agRtPG),
                                    options: z,
                                    selectedKeys: K,
                                    onToggle: $,
                                    multiSelect: !1,
                                    searchPlaceholder: ef.intl.string(ef.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: t6.QZ, children: (0, i.jsx)(le, {}) }),
                ],
            }),
            q &&
                (0, i.jsxs)("div", {
                    className: t6.eH,
                    children: [
                        W,
                        (0, i.jsx)(eR.Q, {
                            size: "sm",
                            variant: "primary",
                            text: ef.intl.string(ef.t.O8k7O4),
                            onClick: M,
                        }),
                    ],
                }),
        ],
    });
}
function li(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, r.bG)([N.default], () => N.default.getUser(t), [t]);
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(t5, {
        label: n,
        icon: (0, i.jsx)(u.eu, { src: a.getAvatarURL(null, 32), size: m._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
let la = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var ln = l(505124),
    ls = l(43990),
    lr = l(449543),
    lo = l(152858);
function lc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var ld = l(452143);
function lu(e) {
    let { clips: t, onEdit: l } = e,
        n = a.useMemo(() => lc(t), [t]),
        { backgroundComponent: r, handleHoverChange: o } = (function () {
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
                                { src: e.previousThumbnail, className: ld.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, i.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${ld.Tp} ${ld.h9}`, alt: "", "aria-hidden": !0 },
                                e.thumbnail,
                            ),
                    ],
                }),
                handleHoverChange: n,
            };
        })(),
        { enabled: c } = L.O.useConfig({ location: "AutoClipsReviewCarousel" }),
        d = (0, tn.P)((e) => e.setActiveMainLink);
    return 0 === n.length
        ? null
        : (0, i.jsx)(ls.N, {
              theme: ln.NJ.DARK,
              children: (e) =>
                  (0, i.jsxs)("section", {
                      className: s()(ld.uW, e),
                      "aria-label": ef.intl.string(eg.default.efLpNC),
                      children: [
                          r,
                          (0, i.jsxs)("div", {
                              className: ld.wx,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: ld.mX,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: ld.UP,
                                              children: [
                                                  (0, i.jsx)(tL.B, { size: "refresh_sm", color: "white" }),
                                                  (0, i.jsx)(R.E, {
                                                      variant: "text-md/medium",
                                                      color: "always-white",
                                                      children: ef.intl.string(eg.default.I1h8uD),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(p.D, {
                                              variant: "display-md",
                                              color: "always-white",
                                              className: ld.DD,
                                              children: ef.intl.string(eg.default.efLpNC),
                                          }),
                                      ],
                                  }),
                                  c &&
                                      (0, i.jsx)("div", {
                                          className: ld.BX,
                                          children: (0, i.jsx)(eW.$, {
                                              variant: "overlay-primary",
                                              size: "sm",
                                              onClick: () => d(S.oH.AUTO_CLIPS),
                                              text: ef.intl.string(eg.default.gCay1w),
                                          }),
                                      }),
                              ],
                          }),
                          (0, i.jsx)(lr.A, {
                              className: ld.jG,
                              gap: 16,
                              edgeFade: 0,
                              scrollBehavior: lo.Uf.ITEM,
                              hideActionsWhenDisabled: !0,
                              "aria-label": ef.intl.string(eg.default.efLpNC),
                              children: n.map((e) => {
                                  let t = "" !== e.thumbnail ? e.thumbnail : null;
                                  return (0, i.jsx)(
                                      "div",
                                      {
                                          className: c ? ld.v2 : ld.cW,
                                          onMouseEnter: c ? () => o(t) : void 0,
                                          onMouseLeave: c ? () => o(null) : void 0,
                                          onFocus: () => o(t),
                                          onBlur: (e) => {
                                              (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) ||
                                                  o(null);
                                          },
                                          children: c
                                              ? (0, i.jsx)(e5, {
                                                    clip: e,
                                                    actionsDisabled: !1,
                                                    isNew: !1,
                                                    onEdit: l,
                                                    onClick: l,
                                                })
                                              : (0, i.jsx)(eL, {
                                                    clip: e,
                                                    actionsDisabled: !1,
                                                    isNew: !1,
                                                    onEdit: l,
                                                    onClick: l,
                                                    onHoverChange: o,
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
var lm = l(770178),
    lh = l(765548),
    lp = l(569926),
    lx = l(486020),
    lg = l(251287);
function lf(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: n,
            onEdit: o,
            onClipClick: c,
            animateEntrance: d,
            entranceRowOffset: u,
        } = e,
        { data: h } = (0, lp.I)(t.applicationId),
        x = (0, tn.P)((e) => e.setGameFacet),
        g = (0, tn.P)((e) => e.setActiveMainLink),
        f = t.applicationId,
        j = null != f && "" !== f,
        v = a.useCallback(() => {
            null != f && "" !== f && (x(f), g(S.oH.ALL_CLIPS));
        }, [f, x, g]),
        C = a.useCallback(() => {
            j ? v() : g(S.oH.ALL_CLIPS);
        }, [j, v, g]),
        y = a.useMemo(
            () =>
                null == h
                    ? null
                    : null != h.bannerHash && "" !== h.bannerHash
                      ? (lx.Ay.getGameAssetURL({ id: h.id, hash: h.bannerHash, size: 1024, keepAspectRatio: !0 }) ??
                        null)
                      : (h.screenshotUrls?.[0] ?? null),
            [h],
        ),
        b = (0, r.yK)([N.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => N.default.getUser(e)).filter(eo.Vq);
        }),
        k = (0, eZ.e)({ timestamp: t.startedAt }),
        [L, E] = a.useState(800),
        w = (0, lh.A)((e) => {
            E(e.target.clientWidth);
        }),
        I = (0, lm.w)(w),
        P = Math.max(1, (L - 32) / 3),
        M = a.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        D = t.clips.length > 6;
    return (0, i.jsxs)("section", {
        className: lg.dZ,
        children: [
            (0, i.jsx)("div", {
                className: s()(lg.tB, null == y && lg.rD),
                style: null != y ? { backgroundImage: `url(${y})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, i.jsxs)("div", {
                className: lg.wx,
                children: [
                    j
                        ? (0, i.jsx)(K.s, {
                              "aria-label": t.applicationName,
                              onClick: v,
                              className: lg.Zn,
                              children: (0, i.jsx)(A.A, {
                                  className: lg.Gt,
                                  game: h,
                                  size: A.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, i.jsx)(A.A, { className: lg.Gt, game: h, size: A.M.MEDIUM, "aria-hidden": !0 }),
                    (0, i.jsxs)("div", {
                        className: lg.TK,
                        children: [
                            j
                                ? (0, i.jsx)(K.s, {
                                      "aria-label": t.applicationName,
                                      onClick: v,
                                      className: lg.wb,
                                      children: (0, i.jsx)(p.D, {
                                          variant: "text-md/semibold",
                                          color: "text-default",
                                          className: lg.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, i.jsx)(p.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      className: lg.mO,
                                      children: t.applicationName,
                                  }),
                            (0, i.jsxs)("div", {
                                className: lg.mI,
                                children: [
                                    (0, i.jsx)(R.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ef.intl.format(eg.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    (0, i.jsx)("span", { className: lg.TG, "aria-hidden": "true" }),
                                    (0, i.jsx)(R.E, { variant: "text-xs/normal", color: "text-muted", children: k }),
                                    b.length > 0 &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)("span", { className: lg.TG, "aria-hidden": "true" }),
                                                (0, i.jsx)(U.A, { users: b, maxUsers: 5, size: m._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                ref: I,
                className: lg.Vg,
                children: M.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: lg.UX,
                            children: e.map((e, a) => {
                                let s = { width: P };
                                return (
                                    d && (s["--custom-entrance-delay"] = `${ts(u + t + a)}ms`),
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: d ? to.$ : void 0,
                                            style: s,
                                            children: (0, i.jsx)(e5, {
                                                clip: e,
                                                actionsDisabled: n,
                                                isNew: l.includes(e.id),
                                                onClick: c ?? o,
                                                onEdit: o,
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
            D &&
                (0, i.jsx)("div", {
                    className: lg.Vc,
                    children: (0, i.jsx)(eW.$, {
                        variant: "secondary",
                        size: "sm",
                        text: ef.intl.string(eg.default.pqk9U0),
                        onClick: C,
                    }),
                }),
        ],
    });
}
var lj = l(177435);
function lv(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: n, onClipClick: s, isLoading: o } = e,
        { enableAutoClipsReview: c } = la.useConfig({ location: "ClipsGalleryHome" }),
        d = a.useMemo(() => lc(t), [t]),
        u = c && d.length > 0,
        m = (0, r.yK)([k.Ay], () => k.Ay.getNewClipIds()),
        h = (0, r.bG)([k.Ay], () => k.Ay.getExportingClipIds().length > 0),
        x = (0, tn.P)((e) => e.setActiveMainLink),
        g = a.useCallback(() => {
            x(S.oH.ALL_CLIPS);
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
        j = (0, r.bG)([v.A], () => v.A.useReducedMotion),
        C = a.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of f) e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3)));
            return e;
        }, [f]);
    return f.length > 0 || u
        ? (0, i.jsx)(tf.Ip, {
              className: lj.iR,
              fade: !0,
              children: (0, i.jsxs)("div", {
                  className: lj.Qs,
                  children: [
                      u && (0, i.jsx)(lu, { clips: t, onEdit: n }),
                      f.length > 0 &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(p.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-default",
                                      children: ef.intl.string(eg.default.zfTWDE),
                                  }),
                                  f.map((e, t) =>
                                      (0, i.jsx)(
                                          lf,
                                          {
                                              session: e,
                                              recentClipIds: m,
                                              actionsDisabled: h,
                                              onEdit: n,
                                              onClipClick: s,
                                              animateEntrance: !j,
                                              entranceRowOffset: C[t] ?? 0,
                                          },
                                          e.id,
                                      ),
                                  ),
                                  (0, i.jsx)("div", {
                                      className: lj.dp,
                                      children: (0, i.jsx)(eW.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: ef.intl.string(eg.default.RQtkop),
                                          onClick: g,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : o
          ? (0, i.jsx)("div", { className: lj.dc, children: (0, i.jsx)(F.y, {}) })
          : (0, i.jsx)(eQ, { isEmptyBecauseQuery: l > 0 });
}
var lC = l(409067),
    ly = l(847455);
let lb = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function lA(e) {
    let {
        channelId: t,
        onClose: n,
        onClipClick: T,
        transitionState: R,
        initialEditingClipId: F,
        initialMainLink: _ = S.oH.HOME,
        ...O
    } = e;
    (0, D.A)();
    let { analyticsLocations: H } = (0, y.Ay)(C.A.CLIPS_GALLERY),
        [z, G] = a.useState(new Set()),
        {
            gamesFacet: U,
            participantsFacet: K,
            distributedClipInitiatorsFacet: V,
            filteredClips: $,
            mainLinkCounts: Q,
            mainLinkNewCounts: Y,
            allClips: B,
        } = (0, lC.ad)(),
        { enabled: X } = L.O.useConfig({ location: "ClipsGalleryModal" }),
        W = (0, r.bG)([k.Ay], () => k.Ay.getSettings().storageLocation),
        [q, Z] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            Z(!0);
            try {
                await (0, E.Fb)(W);
            } finally {
                Z(!1);
            }
        })().catch(() => {});
    }, [W]);
    let { onShareClick: J } = (0, M.A)(t);
    a.useEffect(
        () => () => {
            tn.P.getState().resetAll(), (0, E.Su)();
        },
        [],
    ),
        a.useEffect(() => {
            if (!X) return;
            let e = tn.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(_);
        }, [X, _]);
    let ee = (0, r.bG)([k.Ay], () => k.Ay.getExportingClipIds().length > 0),
        [et, el] = a.useState(null != F ? "editing" : "gallery"),
        [ei, ea] = a.useState(F ?? null),
        en = (0, r.bG)([k.Ay], () => (null != ei ? k.Ay.getClipById(ei) : null), [ei]),
        es = a.useRef(et);
    (es.current = et), (a.useRef(ei).current = ei);
    let [er, eo] = a.useState(null != F ? d.ip.ENTERED : d.ip.HIDDEN),
        ec = a.useRef(null),
        ed = (0, tn.P)((e) => e.gameFacet),
        eu = (0, tn.P)((e) => e.clippedWithFacet),
        em = (0, tn.P)((e) => e.activeMainLink),
        eh = (0, tn.P)((e) => e.currentPage),
        ep = (0, tn.P)(
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
        em === S.oH.HOME && ep && tn.P.getState().setActiveMainLink(S.oH.ALL_CLIPS);
    }, [em, ep]);
    let ex = a.useMemo(() => (null != ed ? [ed] : []), [ed]),
        ej = (0, b.A)(ex)[0] ?? null,
        ev = (0, r.bG)([N.default], () => (null != eu ? N.default.getUser(eu) : null), [eu]),
        eC = a.useMemo(() => {
            if (null != ed) {
                let e = U.find((e) => e.key === ed)?.name ?? ef.intl.string(ef.t.dPVrEv);
                return { icon: (0, i.jsx)(A.A, { game: ej, size: A.M.SMALL, "aria-hidden": !0 }), title: e };
            }
            if (null != eu) {
                let e = null != ev ? (ev.globalName ?? ev.username) : eu;
                return {
                    icon:
                        null != ev
                            ? (0, i.jsx)(u.eu, {
                                  src: ev.getAvatarURL(null, 32),
                                  size: m._3.SIZE_24,
                                  "aria-hidden": !0,
                              })
                            : null,
                    title: e,
                };
            }
            return em === S.oH.FAVORITES
                ? { icon: null, title: ef.intl.string(ef.t["9rlCk1"]) }
                : em === S.oH.AUTO_CLIPS
                  ? { icon: null, title: ef.intl.string(eg.default.ikNKf1) }
                  : em === S.oH.HOME
                    ? { icon: null, title: ef.intl.string(ef.t.Ym2Ri6) }
                    : { icon: null, title: ef.intl.string(ef.t.dPVrEv) };
        }, [ed, eu, em, U, ej, ev]),
        ey = a.useCallback(() => {
            el("editing"), v.A.useReducedMotion && eo(d.ip.ENTERED);
        }, []),
        eb = a.useCallback((e) => {
            G((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        eA = a.useCallback(
            (e) => {
                ea(e.id), ey();
            },
            [ey],
        ),
        eN = a.useCallback(() => {
            v.A.useReducedMotion && ea(null), el("gallery");
        }, []);
    a.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === es.current && (e.stopPropagation(), eN());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [eN, n]),
        a.useEffect(
            () =>
                "editing" === et && null != ei
                    ? void (0, E.YK)(ei)
                    : ((0, E.TE)(),
                      () => {
                          (0, E.TE)();
                      }),
            [et, ei],
        );
    let ek = a.useCallback(() => {
            G(new Set());
        }, []),
        eL = z.size > 0,
        eE = a.useCallback(() => {
            let e = B.filter((e) => z.has(e.id));
            (0, h.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, i.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                ek(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [B, z, ek]),
        ew = a.useCallback(async () => {
            let e = B.filter((e) => z.has(e.id));
            await J({ clips: e }), ek();
        }, [B, z, J, ek]),
        eI = a.useMemo(
            () => ({ selectedClipIds: z, toggleClipSelection: eb, clearSelection: ek, isMultiSelectMode: eL }),
            [z, eb, ek, eL],
        );
    return (0, i.jsx)(y.f5, {
        value: H,
        children: (0, i.jsx)(lb.Provider, {
            value: eI,
            children: (0, i.jsx)(c.N, {
                onClose: n,
                transitionState: R,
                ...O,
                children: (0, i.jsxs)("div", {
                    className: ly.jT,
                    ref: ec,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(ly.PD, "gallery" === et && ly.vu),
                            inert: "gallery" !== et,
                            children: [
                                (0, i.jsx)(t_, {
                                    gamesFacet: U,
                                    participantsFacet: K,
                                    distributedClipInitiatorsFacet: V,
                                    mainLinkCounts: Q,
                                    mainLinkNewCounts: Y,
                                    allClips: B,
                                    filteredClips: $,
                                    withHeaderFilters: !X,
                                }),
                                (0, i.jsxs)("div", {
                                    className: ly.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: ly.$Q,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: ly.Rj,
                                                    children: [
                                                        eC.icon,
                                                        (0, i.jsx)(p.D, {
                                                            variant: "heading-md/medium",
                                                            color: "text-default",
                                                            children: eC.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: ly.$s,
                                                    children: [
                                                        eL &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(o.m, {
                                                                        text: ef.intl.string(ef.t.RDE0Sc),
                                                                        children: (0, i.jsx)(x.K, {
                                                                            onClick: ew,
                                                                            icon: g.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ef.intl.string(ef.t.RDE0Sc),
                                                                            loading: ee,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(o.m, {
                                                                        text: ef.intl.string(ef.t.oyYWHE),
                                                                        children: (0, i.jsx)(x.K, {
                                                                            onClick: eE,
                                                                            icon: f.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ef.intl.string(ef.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(x.K, {
                                                            onClick: n,
                                                            icon: j.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": ef.intl.string(ef.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        X && eh === S.fB.HOME
                                            ? (0, i.jsx)(lv, {
                                                  filteredClips: $,
                                                  totalClipCount: B.length,
                                                  onEdit: eA,
                                                  onClipClick: T,
                                                  isLoading: q,
                                              })
                                            : (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      X &&
                                                          (0, i.jsx)(ll, {
                                                              allClips: B,
                                                              gamesFacet: U,
                                                              participantsFacet: K,
                                                          }),
                                                      (0, i.jsx)(tu, {
                                                          onEdit: eA,
                                                          channelId: t,
                                                          filteredClips: $,
                                                          totalClipCount: B.length,
                                                          onClipClick: T,
                                                          isLoading: q,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: s()(ly.jN, "editing" === et && ly.vu),
                            inert: "editing" !== et,
                            onTransitionEnd: () => {
                                "gallery" === et ? (ea(null), eo(d.ip.HIDDEN)) : "editing" === et && eo(d.ip.ENTERED);
                            },
                            children:
                                null != en &&
                                (0, i.jsxs)(P.p, {
                                    clip: en,
                                    modalContainerRef: ec,
                                    children: [
                                        (0, i.jsx)(w.A, { transitionState: er, onClose: eN }),
                                        (0, i.jsx)(I.A, { channelId: t, onClose: eN }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
