l.d(t, { $: () => ly, default: () => lN });
var i = l(627968),
    a = l(64700),
    n = l(503698),
    s = l.n(n),
    r = l(17928),
    c = l(990078),
    o = l(521489),
    d = l(231723),
    u = l(97808),
    m = l(778712),
    h = l(192308),
    x = l(534514),
    g = l(408278),
    p = l(405433),
    f = l(241326),
    j = l(972213),
    v = l(775602),
    C = l(793574),
    b = l(688810),
    y = l(429913),
    N = l(137177),
    A = l(287809),
    k = l(274372),
    L = l(334686),
    E = l(315240),
    w = l(582633),
    P = l(309777),
    I = l(429364),
    D = l(352527),
    M = l(280483),
    S = l(111994);
l(321073);
var T = l(562708),
    R = l(834730),
    _ = l(289873),
    F = l(139286),
    O = l(962125),
    z = l(989349),
    H = l.n(z),
    G = l(66455),
    U = l(342952),
    K = l(890856),
    V = l(777666),
    $ = l(27232),
    Q = l(505930),
    Y = l(530005),
    X = l(406810),
    B = l(176781),
    q = l(661531),
    W = l(983851),
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
    ec = l(403362),
    eo = l(372684),
    ed = l(974293),
    eu = l(226421),
    em = l(284009),
    eh = l.n(em),
    ex = l(460905),
    eg = l(713608),
    ep = l(16590),
    ef = l(375708),
    ej = l(788332);
function ev(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eh()(l?.type === eo.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, r.bG)([A.default], () => A.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(c.m, {
        text: ef.intl.string(ep.default.vTTkFF),
        children: (0, i.jsxs)("div", {
            className: ej.S,
            children: [
                (0, i.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: ej.$, alt: n }),
                (0, i.jsx)(R.E, {
                    color: "always-white",
                    variant: "text-xs/bold",
                    children: ef.intl.formatToPlainString(ep.default.QJ7i8Z, { username: n }),
                }),
            ],
        }),
    });
}
function eC(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, i.jsx)(c.m, {
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
function eb(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === eo.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case eo.Gy.DISTRIBUTED:
            return (0, i.jsx)(ev, { clip: t });
        case eo.Gy.LAUGHTER:
            return (0, i.jsx)(eC, {
                icon: ex.n,
                text: ef.intl.string(ep.default.bTC23D),
                tooltipText: ef.intl.string(ep.default["ry+jxm"]),
            });
        case eo.Gy.GAME_EVENT:
            return (0, i.jsx)(eC, {
                icon: eg.q,
                text: t.decision.signal.title ?? "",
                tooltipText: ef.intl.string(ep.default["347DBb"]),
            });
        default:
            return null;
    }
}
var ey = l(665039),
    eN = l(718812),
    eA = l(652215),
    ek = l(798594);
let eL = function (e) {
    let { clip: t, actionsDisabled: n, isNew: c, onEdit: o, onClick: d, onHoverChange: u } = e,
        h = (0, r.yK)([A.default], () => t.users.map((e) => A.default.getUser(e)).filter(ec.Vq)),
        x = (0, r.bG)([ei.A], () => (null != t.channelId ? ei.A.getChannel(t.channelId) : null)),
        g = (0, r.bG)([ea.A], () => (null != t.guildId ? ea.A.getGuild(t.guildId) : null)),
        { analyticsLocations: p } = (0, b.Ay)(C.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: j, isMultiSelectMode: v } = a.useContext(ly),
        [y, N] = a.useState(!1),
        L = a.useRef(null),
        E = (0, G.A)(t.editMetadata?.start ?? 0),
        w = f.has(t.id),
        P = t.type === eo.nQ.SCREENSHOT,
        I = (0, et.Ay)(x),
        D = "" === t.applicationName && null != I && "" !== I ? I : t.applicationName,
        M = (0, er.Fe)(new Date(t.createdAt)),
        S = a.useMemo(() => {
            let e = [];
            return (
                t.type === eo.nQ.VOICE_CLIP
                    ? (g?.name != null && e.push(g.name), null != I && e.push(I))
                    : ("" !== D && null != D && e.push(D),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [D, g?.name, I, t.activity?.state, t.activity?.details, t.type]),
        T = a.useCallback(() => {
            let e = L.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        _ = a.useCallback(() => {
            if ((u?.("" !== t.thumbnail ? t.thumbnail : null), !0 === P)) return;
            let e = L.current;
            null != e && e.paused && ((e.currentTime = E.current), L.current?.play());
        }, [P, E, u, t.thumbnail]),
        F = a.useCallback(() => {
            if ((u?.(null), !0 === P)) return;
            let e = L.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [P, t.editMetadata?.start, u]),
        O = a.useCallback(
            (e) => {
                (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) || F();
            },
            [F],
        ),
        z = a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        H = a.useCallback(() => {
            N(!1);
        }, []),
        V = a.useCallback(
            (e) => {
                N(!0), L.current?.pause();
                let a =
                    v && f.size > 0
                        ? Array.from(f)
                              .map((e) => k.Ay.getClipById(e))
                              .filter(ec.Vq)
                        : [t];
                (0, J.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("53575"),
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
                                    es.default.track(eA.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        clip_runtime: (0, ed.GN)(),
                                    });
                                },
                                onEdit: () => {
                                    o(t),
                                        es.default.track(eA.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            clip_runtime: (0, ed.GN)(),
                                        });
                                },
                                onBeforeDelete: T,
                                onAfterDelete: () => {
                                    es.default.track(eA.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        clip_runtime: (0, ed.GN)(),
                                    });
                                },
                            });
                    },
                    { onClose: H },
                );
            },
            [t, v, f, n, T, H, o],
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
                    es.default.track(eA.HAw.CLIP_GALLERY_CARD_CLICKED, { clip_runtime: (0, ed.GN)() }));
            },
            [n, v, j, t, d],
        );
    return (0, i.jsx)(b.f5, {
        value: p,
        children: (0, i.jsx)("div", {
            className: ek.o8,
            onBlur: O,
            children: (0, i.jsxs)(K.s, {
                "aria-disabled": n,
                "aria-label": ef.intl.string(!0 === P ? ef.t["HO/oXl"] : ef.t.bt75uw),
                onClick: n ? void 0 : Q,
                onContextMenu: $,
                className: s()(ek.QN, { [ek.r9]: n, [ek.in]: y, [ek.wH]: w }),
                onFocus: _,
                onMouseOver: _,
                onMouseLeave: F,
                children: [
                    (0, i.jsx)(eE, { clip: t, isNew: c, videoRef: L, onOpenContextMenu: V, actionsDisabled: n }),
                    (0, i.jsxs)("div", {
                        className: ek.wI,
                        children: [
                            (0, i.jsx)(eI, { clip: t }),
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
                                        children: M,
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
                                            (t?.parentElement?.parentElement?.parentElement !== l && _());
                                    },
                                    onClickOverflow: z,
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
        o = 0 === t.length,
        d = !0 === t.pending,
        [u, m] = a.useState(0);
    a.useEffect(() => {
        let e = n.current;
        if (null == e || o) return;
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
    }, [n, o, t.editMetadata]);
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
            let a = H().duration(e),
                n = a.minutes(),
                s = a.seconds();
            return 0 === n
                ? { durationDisplay: `${s}s`, isClipEdited: i }
                : { durationDisplay: `${n}:${s.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [t.length, t.editMetadata]),
        p = a.useCallback(
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
            (0, i.jsx)(eP, { clip: t, videoRef: n }),
            (0, i.jsxs)("div", {
                className: ek.ry,
                children: [
                    !d && l && (0, i.jsx)(V.Lp, { text: ef.intl.string(ef.t.y2b7CA) }),
                    (0, i.jsx)(eb, { clip: t }),
                ],
            }),
            !r &&
                (0, i.jsxs)("div", {
                    className: ek.g3,
                    children: [
                        (0, i.jsx)(c.m, {
                            text: ef.intl.string(t.isFavorite ? ep.default.IZsalP : ep.default.ihBfyA),
                            position: "top",
                            children: (0, i.jsx)(g.K, {
                                onClick: p,
                                icon: t.isFavorite ? $.G : Q.y,
                                "aria-label": ef.intl.string(ef.t.k8fFjp),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)(g.K, {
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
                                t.isTemporary && (0, i.jsx)(X.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(R.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: ef.intl.string(ef.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !o &&
                        (0, i.jsxs)("div", {
                            className: ek.OH,
                            children: [
                                x && (0, i.jsx)(en.A, { color: "white", width: 16, height: 16 }),
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
            !o &&
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
        l = (0, eN.h)(t),
        a = "" !== l;
    return (0, i.jsx)(R.E, {
        className: ek.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function eP(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, ey.j)(t),
        n = t.type === eo.nQ.SCREENSHOT;
    return t.type === eo.nQ.VOICE_CLIP
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
                    children: (0, i.jsx)(B.x, { color: q.A.colors.ICON_MUTED }),
                });
}
function eI(e) {
    let { clip: t } = e,
        l = (0, r.bG)([ee.A], () => (null != t.applicationId ? ee.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: ek.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: ek.NH })
                : t.type === eo.nQ.VOICE_CLIP
                  ? (0, i.jsx)(W.H, { size: "sm" })
                  : (0, i.jsx)(Z.k, { size: "sm" }),
    });
}
function eD(e) {
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
var eM = l(702841),
    eS = l(687966),
    eT = l(475358),
    eR = l(123292),
    e_ = l(292801),
    eF = l(780964),
    eO = l(766075),
    ez = l(532624),
    eH = l(350535),
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
    let e = (0, eM.bG)([ez.Ay], () => ez.Ay.getKeybindForAction(eA.hCu.SAVE_CLIP)),
        t = null != e ? eH.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: eK.kR,
        children: [
            (0, i.jsx)(eV, {
                header: (0, i.jsx)(eS._, { size: "refresh_sm", color: q.A.colors.ICON_DEFAULT }),
                description: ef.intl.string(ep.default["4K56sP"]),
            }),
            (0, i.jsx)(eV, {
                header: null != t ? (0, i.jsx)(eT.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  ef.intl.format(ep.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: eK.JH,
                                      children: (0, i.jsx)(eR.Q, {
                                          text: ef.intl.string(ep.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, eO.openUserSettings)(eF.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : ef.intl.string(ep.default.HOUDUm),
            }),
            (0, i.jsx)(eV, {
                header: (0, i.jsx)(e_.t, { size: "refresh_sm", color: q.A.colors.ICON_DEFAULT }),
                description: ef.intl.string(ep.default.DLzdl7),
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
                (0, i.jsx)(eD, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(x.D, {
                    className: eK.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ef.intl.string(ep.default["+M2iLf"]) : ef.intl.string(ep.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(R.E, {
                        className: eK.h_,
                        variant: "text-md/medium",
                        children: ef.intl.string(ep.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: eK.SO, children: (0, i.jsx)(eU.A, {}) }),
                l && !t && (0, i.jsx)(e$, {}),
            ],
        }),
    });
}
let eY = 16 / 9;
var eX = l(621466),
    eB = l(61491),
    eq = l(821609),
    eW = l(22231),
    eZ = l(549973),
    eJ = l(609174),
    e0 = l(619744),
    e1 = l(82716),
    e2 = l(585579),
    e3 = l(226870),
    e5 = l(285072),
    e9 = l(742007);
function e7(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: n, onEdit: s } = e;
    return (0, i.jsx)(eJ.Cl, {
        clip: t,
        children: (0, i.jsx)(e6, { actionsDisabled: l, isNew: a, onClick: n, onEdit: s }),
    });
}
function e6(e) {
    let { actionsDisabled: t, isNew: n, onClick: r, onEdit: c } = e,
        o = (0, eJ.Y_)(),
        { analyticsLocations: d } = (0, b.Ay)(C.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: u, toggleClipSelection: m, isMultiSelectMode: h } = a.useContext(ly),
        [x, g] = a.useState(!1),
        [p, f] = a.useState(!1),
        [j, v] = a.useState(!1),
        [y, N] = a.useState(0),
        A = u.has(o.id),
        L = o.type === eo.nQ.SCREENSHOT,
        E = (p || x) && !A;
    a.useEffect(() => {
        if (!E || L) return;
        let e = window.setTimeout(() => v(!0), 150);
        return () => {
            window.clearTimeout(e), v(!1);
        };
    }, [E, L]);
    let w = a.useRef(null),
        P = a.useCallback(() => {
            w.current?.releaseSource();
        }, []),
        I = a.useCallback(() => g(!1), []),
        D = a.useCallback(
            (e) => {
                g(!0);
                let a =
                    h && u.size > 0
                        ? Array.from(u)
                              .map((e) => k.Ay.getClipById(e))
                              .filter(ec.Vq)
                        : [o];
                (0, J.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("53575"),
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
                                    es.default.track(eA.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    c(o), es.default.track(eA.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: P,
                                onAfterDelete: () => {
                                    es.default.track(eA.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: I },
                );
            },
            [o, h, u, t, I, c, P],
        ),
        M = a.useCallback(
            (e) => {
                t || (e.preventDefault(), e.stopPropagation(), D(e));
            },
            [t, D],
        ),
        S = a.useCallback(
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
                    es.default.track(eA.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
            },
            [c, o],
        ),
        R = a.useCallback(
            (e) => {
                !t &&
                    (!(0, eX.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") && e.currentTarget.contains(e.target))) &&
                    (e.shiftKey ? (e.preventDefault(), m(o.id)) : h ? m(o.id) : null != r && r(o),
                    es.default.track(eA.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [t, h, m, o, r],
        );
    return (0, i.jsx)(b.f5, {
        value: d,
        children: (0, i.jsxs)(K.s, {
            "aria-disabled": t,
            "aria-label": ef.intl.string(L ? ef.t["HO/oXl"] : ef.t.bt75uw),
            onClick: t ? void 0 : R,
            onContextMenu: M,
            className: s()(e9.Nr, { [e9.r9]: t, [e9.in]: x, [e9.wH]: A }),
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            children: [
                (0, i.jsx)("div", {
                    className: e9.w7,
                    children: (0, i.jsxs)(e4, {
                        ref: w,
                        isPlaying: j,
                        onProgressChange: N,
                        children: [
                            (0, i.jsx)(e8, { isNew: n }),
                            E && !t ? (0, i.jsx)(te, { onMenu: S, onBeforeDelete: P }) : (0, i.jsx)(tt, {}),
                            (0, i.jsx)("div", { className: e9.dH, "aria-hidden": "true" }),
                        ],
                    }),
                }),
                (0, i.jsx)(tl, { showHoverState: E, playbackProgress: y, onEdit: T }),
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
        children: (0, i.jsx)(e5.h, { isVisible: !0, children: n }),
    });
});
function e8(e) {
    let { isNew: t } = e,
        l = (0, eJ.Y_)(),
        a = !0 === l.pending;
    return (0, i.jsxs)("div", {
        className: e9.zV,
        children: [
            !a &&
                t &&
                (0, i.jsx)("div", {
                    className: e9.Ad,
                    children: (0, i.jsx)(R.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        children: ef.intl.string(ef.t.y2b7CA),
                    }),
                }),
            (0, i.jsx)(eb, { clip: l }),
        ],
    });
}
function te(e) {
    let { onMenu: t, onBeforeDelete: l } = e;
    return (0, i.jsxs)("div", {
        className: e9.Mw,
        children: [
            (0, i.jsx)(c.m, {
                text: ef.intl.string(ef.t["UKOtz+"]),
                children: (0, i.jsx)(g.K, {
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
            return { durationDisplay: (0, eB.rB)(a), isClipEdited: i };
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, i.jsxs)("div", {
              className: s()(e9.cH, e9._s),
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
        s = n.type === eo.nQ.SCREENSHOT,
        c = (0, r.yK)([A.default], () => n.users.map((e) => A.default.getUser(e)).filter(ec.Vq)),
        o = (0, r.bG)([ei.A], () => (null != n.channelId ? ei.A.getChannel(n.channelId) : null)),
        d = (0, r.bG)([ea.A], () => (null != n.guildId ? ea.A.getGuild(n.guildId) : null)),
        u = (0, et.Ay)(o),
        h = "" === n.applicationName && null != u && "" !== u ? u : n.applicationName,
        x = (0, eZ.e)({ timestamp: n.createdAt }),
        g = d?.name;
    return (0, i.jsxs)("div", {
        className: e9.yu,
        children: [
            (0, i.jsxs)("div", {
                className: e9.$,
                children: [
                    (0, i.jsx)(ti, {}),
                    c.length > 0 &&
                        (0, i.jsx)("span", {
                            className: e9.HD,
                            "data-clips-avatars": "true",
                            children: (0, i.jsx)(U.A, {
                                maxUsers: 3,
                                users: c,
                                size: m._3.SIZE_16,
                                "aria-label": ef.intl.string(ef.t.WTozwe),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                className: e9.SO,
                children: t
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              !s &&
                                  (0, i.jsx)("div", {
                                      className: e9.z5,
                                      "aria-hidden": "true",
                                      children: (0, i.jsx)("div", { className: e9.TE, style: { width: `${l}%` } }),
                                  }),
                              (0, i.jsxs)("div", {
                                  className: e9.E_,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: e9.lO,
                                          children: (0, i.jsx)(eq.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              icon: eW.R,
                                              text: ef.intl.string(ef.t.bt75uw),
                                              onClick: a,
                                              fullWidth: !0,
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: e9.lO,
                                          children: (0, i.jsx)(e2.E, { variant: "primary" }),
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)("div", {
                                  className: e9.Pb,
                                  children: [
                                      (0, i.jsx)(ta, {}),
                                      (0, i.jsx)(R.E, {
                                          className: e9.gO,
                                          variant: "text-xs/medium",
                                          color: "text-muted",
                                          children: h,
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: e9.eg,
                                  children: [
                                      null != g &&
                                          "" !== g &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(R.E, {
                                                      className: e9.gO,
                                                      variant: "text-xs/normal",
                                                      color: "text-muted",
                                                      children: g,
                                                  }),
                                                  (0, i.jsx)("span", { className: e9.TG, "aria-hidden": "true" }),
                                              ],
                                          }),
                                      (0, i.jsx)(R.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: ef.intl.format(ep.default["0QCBug"], { time: x }),
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
        t = (0, eN.h)(e),
        l = "" !== t;
    return (0, i.jsx)(R.E, {
        className: e9.DD,
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
        className: e9.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, i.jsx)("img", { src: l, alt: "", className: e9.T_ })
                : e.type === eo.nQ.VOICE_CLIP
                  ? (0, i.jsx)(W.H, { size: "xs", color: "currentColor" })
                  : (0, i.jsx)(Z.k, { size: "xs", color: "currentColor" }),
    });
}
e4.displayName = "CardThumbnail";
var tn = l(792852);
function ts(e) {
    return Math.min(45 * e, 520);
}
var tr = l(352528),
    tc = l(32122);
let to = [0, 16, 0, 16],
    td = to[1] + to[3];
function tu(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s, isLoading: c } = e,
        [o, d] = a.useState({ width: 0, height: 0 }),
        u = (0, r.yK)([k.Ay], () => k.Ay.getNewClipIds()),
        m = (0, r.bG)([k.Ay], () => k.Ay.getExportingClipIds().length > 0),
        { enabled: h } = L.O.useConfig({ location: "ClipsGalleryContent" }),
        g = h ? e7 : eL,
        p = (0, tn.P)((e) => e.activeMainLink),
        f = (0, tn.P)((e) => e.gameFacet),
        j = (0, tn.P)((e) => e.clippedWithFacet);
    (0, F.A)(
        {
            type: T.ImpressionTypes.MODAL,
            name: T.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: c },
        [t.length, c],
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
        { width: b } = o,
        { tileWidth: y, columns: N } = a.useMemo(() => {
            var e, l;
            let i, a, n;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = b - td) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (n = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: n }
            );
        }, [t.length, b]),
        A = a.useMemo(() => C.map((e) => Math.ceil(e.clips.length / N)), [C, N]),
        E = a.useMemo(() => A.reduce((e, t) => e + t, 0), [A]),
        w = Math.floor(y / eY),
        P = C.length > 0 ? `${p}:${f ?? ""}:${j ?? ""}` : null,
        I = (function (e) {
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
        })(P),
        D = h && I,
        M = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = C[l];
                if (null == r) return null;
                let c = a * N,
                    o = r.clips.slice(c, c + N);
                return (0, i.jsx)(
                    "div",
                    {
                        className: tr.UX,
                        children: o.map((t, l) => {
                            let a = { width: y };
                            return (
                                D && (a["--custom-entrance-delay"] = `${ts(e + l)}ms`),
                                (0, i.jsx)(
                                    "div",
                                    {
                                        className: D ? tc.$ : void 0,
                                        style: a,
                                        children: (0, i.jsx)(g, {
                                            actionsDisabled: m,
                                            isNew: u.includes(t.id),
                                            onClick: n ?? s,
                                            onEdit: s,
                                            clip: t,
                                        }),
                                    },
                                    `${P ?? "static"}:${t.id}`,
                                )
                            );
                        }),
                    },
                    `row-${l}-${a}`,
                );
            },
            [C, N, y, m, u, n, s, g, D, P],
        ),
        S = a.useCallback(
            (e) => {
                let t = C[e];
                return t?.description != null ? 66 : 44;
            },
            [C],
        ),
        z = a.useCallback(
            (e) => {
                let t = C[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: tr.aE,
                              children: [
                                  (0, i.jsx)(x.D, {
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
    return c || 0 !== C.length
        ? c && 0 === C.length
            ? (0, i.jsx)("div", { className: tr.dc, children: (0, i.jsx)(_.y, {}) })
            : (0, i.jsx)(O.A, {
                  listPadding: to,
                  renderRow: M,
                  renderSectionHeader: z,
                  rowCount: E,
                  rowCountBySection: A,
                  rowHeight: w + (h ? 96 : 68) + 16,
                  sectionHeaderHeight: S,
                  onResize: d,
              })
        : (0, i.jsx)(eQ, { isEmptyBecauseQuery: l > 0 });
}
var tm = l(922016),
    th = l(783977),
    tx = l(625903),
    tg = l(892547),
    tp = l(939249),
    tf = l(364522),
    tj = l(91871),
    tv = l.n(tj),
    tC = l(980707),
    tb = l(477782),
    ty = l(583650);
function tN(e) {
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
            clearFilters: g,
        } = (0, tn.P)(),
        p = a.useMemo(
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
                        let t = A.default.getUser(e);
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
        [k, L] = a.useState(""),
        [E, w] = a.useState(""),
        P = a.useMemo(
            () => (0 === y.trim().length ? j : j.filter((e) => tv()(y.toLowerCase(), e.name.toLowerCase()))),
            [j, y],
        ),
        I = a.useMemo(
            () => (0 === k.trim().length ? C : C.filter((e) => tv()(k.toLowerCase(), e.name.toLowerCase()))),
            [C, k],
        ),
        D = a.useMemo(
            () => (0 === E.trim().length ? v : v.filter((e) => tv()(E.toLowerCase(), e.toLowerCase()))),
            [v, E],
        ),
        M = n.size > 0 || null != s || null != r || null != p,
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
        _ = a.useMemo(() => s ?? void 0, [s]),
        F = a.useMemo(() => (null != p ? String(p) : void 0), [p]);
    return (0, i.jsxs)(tC.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": ef.intl.string(ef.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(tb.rX, {
                label: "Filter",
                children: [
                    j.length > 0 &&
                        (0, i.jsxs)(tb.Dr, {
                            id: "participants",
                            label: ef.intl.string(ef.t.YQ6dJg),
                            subtext: T,
                            children: [
                                j.length > 20 &&
                                    (0, i.jsx)(tb.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(ty.V, {
                                                ...e,
                                                query: y,
                                                onChange: N,
                                                ref: t,
                                                placeholder: ef.intl.string(ef.t["5h0QOP"]),
                                            }),
                                    }),
                                P.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tb.sL,
                                        { id: `participant-${t}`, label: l, action: () => d(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    C.length > 0 &&
                        (0, i.jsxs)(tb.Dr, {
                            id: "servers",
                            label: ef.intl.string(ef.t["5qyruI"]),
                            subtext: R,
                            children: [
                                C.length > 20 &&
                                    (0, i.jsx)(tb.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(ty.V, {
                                                ...e,
                                                query: k,
                                                onChange: L,
                                                ref: t,
                                                placeholder: ef.intl.string(ef.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tb.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: ef.intl.string(ef.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                I.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tb.iD,
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
                        (0, i.jsxs)(tb.Dr, {
                            id: "activities",
                            label: ef.intl.string(ef.t.agRtPG),
                            subtext: _,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(tb.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(ty.V, {
                                                ...e,
                                                query: E,
                                                onChange: w,
                                                ref: t,
                                                placeholder: ef.intl.string(ef.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tb.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: ef.intl.string(ef.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == s,
                                }),
                                D.map((e) =>
                                    (0, i.jsx)(
                                        tb.iD,
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
                        (0, i.jsxs)(tb.Dr, {
                            id: "years",
                            label: ef.intl.string(ef.t.w9zd68),
                            subtext: F,
                            children: [
                                (0, i.jsx)(tb.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: ef.intl.string(ef.t["2/yeUU"]),
                                    action: () => f(null),
                                    checked: null == p,
                                }),
                                b.map((e) =>
                                    (0, i.jsx)(
                                        tb.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => f(e),
                                            checked: p === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(tb.rX, {
                label: ef.intl.string(ef.t.XvNMNk),
                children: [
                    (0, i.jsx)(tb.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: ef.intl.string(ef.t["4LLKx3"]),
                        action: () => x(S.mu.MOST_RECENT),
                        checked: o === S.mu.MOST_RECENT,
                    }),
                    (0, i.jsx)(tb.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: ef.intl.string(ef.t["0gitSE"]),
                        action: () => x(S.mu.OLDEST),
                        checked: o === S.mu.OLDEST,
                    }),
                ],
            }),
            M &&
                (0, i.jsx)(tb.rX, {
                    children: (0, i.jsx)(tb.Dr, { id: "clear-filters", label: ef.intl.string(ef.t.FbDgiu), action: g }),
                }),
        ],
    });
}
var tA = l(7689),
    tk = l(332837),
    tL = l(175841),
    tE = l(724993);
function tw(e) {
    let { icon: t, label: l, trailer: a, isSelected: n, isDisabled: r = !1, onClick: c } = e,
        o = r && !n;
    return (0, i.jsxs)(tp.D, {
        onClick: o ? void 0 : c,
        className: s()(tE.nM, { [tE.CZ]: n, [tE.lr]: o }),
        "aria-pressed": n,
        "aria-disabled": o,
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
function tP() {
    let e = (0, r.bG)([ez.Ay], () => ez.Ay.getKeybindForAction(eA.hCu.SAVE_CLIP)),
        t = (0, tn.P)((e) => e.setActiveMainLink),
        l = (0, tn.P)((e) => e.setGameFacet),
        n = (0, tn.P)((e) => e.setClippedWithFacet),
        s = (0, tn.P)((e) => e.setPendingSearchFocus),
        o = a.useCallback(() => {
            (0, eO.openUserSettings)(eF.X.CLIPS_PANEL);
        }, []),
        d = a.useCallback(() => {
            l(null), n(null), t(S.oH.ALL_CLIPS), s(!0);
        }, [l, n, t, s]),
        u = null != e ? eH.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: tE.aN,
        children: [
            (0, i.jsxs)("div", {
                className: tE.pR,
                children: [
                    (0, i.jsx)(x.D, {
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
                    (0, i.jsx)(c.m, {
                        text: ef.intl.string(ef.t["5h0QOP"]),
                        children: (0, i.jsx)(g.K, {
                            onClick: d,
                            icon: tA.$,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": ef.intl.string(ef.t["5h0QOP"]),
                        }),
                    }),
                    (0, i.jsx)(c.m, {
                        text: ef.intl.string(ef.t["3D5yo/"]),
                        children: (0, i.jsx)(g.K, {
                            onClick: o,
                            icon: tx.Z,
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
function tI(e) {
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
        { mainLinkCounts: x, mainLinkNewCounts: g } = e,
        p = (0, tn.P)((e) => e.activeMainLink),
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
                isSelected: ((r = S.oH.HOME), !C && p === r),
                onClick: () => f(S.oH.HOME),
            }),
            (0, i.jsx)(tw, {
                icon: (0, i.jsx)(B.x, { size: "sm", color: "currentColor" }),
                label: ef.intl.string(ef.t.dPVrEv),
                trailer: (0, i.jsx)(tD, { count: g.allClips }),
                isSelected: ((c = S.oH.ALL_CLIPS), !C && p === c),
                isDisabled: 0 === x.allClips && ((o = S.oH.ALL_CLIPS), !!C || p !== o),
                onClick: () => f(S.oH.ALL_CLIPS),
            }),
            (0, i.jsx)(tw, {
                icon: (0, i.jsx)(tL.B, { size: "sm", color: "currentColor" }),
                label: ef.intl.string(ep.default.ikNKf1),
                trailer: (0, i.jsx)(tD, { count: g.autoClips }),
                isSelected: ((d = S.oH.AUTO_CLIPS), !C && p === d),
                isDisabled: 0 === x.autoClips && ((u = S.oH.AUTO_CLIPS), !!C || p !== u),
                onClick: () => f(S.oH.AUTO_CLIPS),
            }),
            (0, i.jsx)(tw, {
                icon: (0, i.jsx)($.G, { size: "sm", color: "currentColor" }),
                label: ef.intl.string(ef.t["9rlCk1"]),
                trailer: (0, i.jsx)(tD, { count: g.favorites }),
                isSelected: ((m = S.oH.FAVORITES), !C && p === m),
                isDisabled: 0 === x.favorites && ((h = S.oH.FAVORITES), !!C || p !== h),
                onClick: () => f(S.oH.FAVORITES),
            }),
        ],
    });
}
function tD(e) {
    let { count: t } = e;
    return t <= 0 ? null : (0, i.jsx)(V.hV, { count: t });
}
function tM(e) {
    let t,
        l,
        n,
        r,
        { gamesFacet: c } = e,
        o = (0, tn.P)((e) => e.gameFacet),
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
        u = a.useMemo(() => c.map((e) => e.key), [c]),
        m = (0, y.A)(u),
        h = a.useMemo(() => new Map(m.map((e) => [e?.id, e])), [m]);
    return 0 === c.length
        ? null
        : (0, i.jsxs)(tf.Ip, {
              className: s()(tE.uW, tE.fC),
              fade: !0,
              children: [
                  (0, i.jsx)(x.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: tE.a9,
                      children: ef.intl.string(ef.t.URyqtP),
                  }),
                  (0, i.jsx)("div", {
                      className: tE._A,
                      children: c.map((e) =>
                          (0, i.jsx)(
                              tw,
                              {
                                  icon: (0, i.jsx)(N.A, { game: h.get(e.key), size: N.M.XSMALL }),
                                  label: e.name,
                                  trailer: (0, i.jsx)(tD, { count: e.newCount }),
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
function tS(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: a } = e;
    return (0, i.jsxs)("div", {
        className: tE.pz,
        children: [
            (0, i.jsx)(tP, {}),
            (0, i.jsxs)("div", {
                className: tE.wp,
                children: [
                    (0, i.jsx)(tI, { mainLinkCounts: l, mainLinkNewCounts: a }),
                    (0, i.jsx)(tM, { gamesFacet: t }),
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
            o = (0, eM.bG)([ez.Ay], () => ez.Ay.getKeybindForAction(eA.hCu.SAVE_CLIP)),
            d = a.useCallback(() => {
                (0, eO.openUserSettings)(eF.X.CLIPS_PANEL);
            }, []),
            u = a.useCallback(() => s(""), [s]),
            m = null != o ? eH.dI(o.shortcut, !0) : null,
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
                                (0, i.jsx)(x.D, {
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
                                    (0, i.jsx)(c.m, {
                                        text: ef.intl.string(ef.t.X7yRDm),
                                        children: (0, i.jsx)(tm.Y, {
                                            position: "bottom",
                                            targetElementRef: h,
                                            renderPopout: (e) => (0, i.jsx)(tN, { ...e, allClips: l }),
                                            children: (e) =>
                                                (0, i.jsx)("div", {
                                                    ref: h,
                                                    children:
                                                        r > 0
                                                            ? (0, i.jsx)(eq.$, {
                                                                  size: "sm",
                                                                  variant: "secondary",
                                                                  ...e,
                                                                  text: ef.intl.formatToPlainString(ep.default.JbyR1U, {
                                                                      count: r,
                                                                  }),
                                                                  icon: th.R,
                                                                  iconPosition: "end",
                                                              })
                                                            : (0, i.jsx)(g.K, {
                                                                  icon: th.R,
                                                                  ...e,
                                                                  size: "sm",
                                                                  variant: "icon-only",
                                                                  "aria-label": ef.intl.string(ef.t.X7yRDm),
                                                              }),
                                                }),
                                        }),
                                    }),
                                (0, i.jsx)(c.m, {
                                    text: ef.intl.string(ef.t["3D5yo/"]),
                                    children: (0, i.jsx)(g.K, {
                                        onClick: d,
                                        icon: tx.Z,
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
                        children: (0, i.jsx)(tg.I, {
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
    t_ = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: n, onClick: r } = e;
        return (0, i.jsxs)(tp.D, {
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
function tF(e) {
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
        c = (0, tn.P)((e) => e.setGameFacet),
        o = (0, tn.P)((e) => e.setActiveMainLink),
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
        g = (0, y.A)(h),
        p = a.useMemo(() => new Map(g.map((e) => [e?.id, e])), [g]),
        f = a.useCallback(() => {
            o(S.oH.ALL_CLIPS), c(null);
        }, [o, c]),
        j = a.useCallback(() => {
            o(S.oH.FAVORITES), c(null);
        }, [o, c]),
        v = a.useCallback(
            (e) => {
                c(e), o(S.oH.ALL_CLIPS);
            },
            [c, o],
        ),
        C = null == s && r === S.oH.ALL_CLIPS,
        b = null == s && r === S.oH.FAVORITES;
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
                                (0, i.jsx)(t_, {
                                    name: ef.intl.string(ef.t.dPVrEv),
                                    count: u,
                                    icon: (0, i.jsx)(B.x, {}),
                                    isSelected: C,
                                    onClick: f,
                                }),
                                (0, i.jsx)(t_, {
                                    name: ef.intl.string(ef.t["9rlCk1"]),
                                    count: m,
                                    icon: (0, i.jsx)($.G, {}),
                                    isSelected: b,
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
                                (0, i.jsx)(x.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tT.a9,
                                    children: ef.intl.string(ef.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: tT.Ep,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            t_,
                                            {
                                                name: e.name,
                                                count: e.count,
                                                icon: (0, i.jsx)(N.A, {
                                                    game: p.get(e.applicationId),
                                                    size: N.M.XSMALL,
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
var tz = l(847374),
    tH = l(112173),
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
function tX(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tV.Xj)();
    return { preset: "custom", after: null != e ? tQ(e.toDate(l)) : null, before: null != t ? tY(t.toDate(l)) : null };
}
function tB(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new t$.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tq = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tW(e) {
    return tq.format(new Date(e));
}
function tZ(e) {
    switch (e.preset) {
        case "today":
            return ef.intl.string(ep.default.yOAWWM);
        case "yesterday":
            return ef.intl.string(ep.default["PtV/Ti"]);
        case "last-3-days":
            return ef.intl.string(ep.default.xfmv7I);
        case "this-year":
            return ef.intl.string(ep.default["+eE7zX"]);
        case "last-year":
            return ef.intl.string(ep.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tW(e.after) : null,
                l = null != e.before ? tW(e.before) : null;
            if (null != t && null != l)
                return ef.intl.formatToPlainString(ep.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return ef.intl.formatToPlainString(ep.default.k1FkTL, { date: t });
            if (null != l) return ef.intl.formatToPlainString(ep.default["4NlpHD"], { date: l });
            return ef.intl.string(ep.default.tv9apA);
        }
    }
}
var tJ = l(817480);
function t0(e) {
    let { closePopout: t } = e,
        l = (0, tn.P)((e) => e.dateFilter),
        n = (0, tn.P)((e) => e.setDateFilter),
        [r, o] = a.useState(l?.preset === "custom"),
        [d, u] = a.useState(() => (l?.preset === "custom" ? tB(l.after) : null)),
        [m, h] = a.useState(() => (l?.preset === "custom" ? tB(l.before) : null)),
        x = a.useMemo(
            () => [
                { key: "today", label: ef.intl.string(ep.default.yOAWWM) },
                { key: "yesterday", label: ef.intl.string(ep.default["PtV/Ti"]) },
                { key: "last-3-days", label: ef.intl.string(ep.default.xfmv7I) },
                { key: "this-year", label: ef.intl.string(ep.default["+eE7zX"]) },
                { key: "last-year", label: ef.intl.string(ep.default.Nwj9v0) },
            ],
            [],
        ),
        p = l?.preset ?? null,
        f = r && "custom" !== p ? null : p,
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
            o((e) => !e);
        }, []),
        b = a.useCallback(
            (e) => {
                u(e), n(tX(e, m));
            },
            [m, n],
        ),
        y = a.useCallback(
            (e) => {
                h(e), n(tX(d, e));
            },
            [d, n],
        ),
        N = a.useCallback(() => {
            u(null), h(null), n(null);
        }, [n]),
        A = null != d || null != m;
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
                        children: ef.intl.string(ep.default.upqksT),
                    }),
                    (0, i.jsxs)("div", {
                        className: tJ.eF,
                        children: [
                            x.map((e) =>
                                (0, i.jsx)(
                                    tp.D,
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
                            (0, i.jsxs)(tp.D, {
                                className: s()(tJ.zD, tJ.Kl, (r || "custom" === p) && tJ.pH),
                                onClick: C,
                                "aria-expanded": r,
                                children: [
                                    (0, i.jsx)(R.E, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        children: ef.intl.string(ep.default.tv9apA),
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
                                        children: ef.intl.string(ep.default["96vZuU"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: tJ.h0,
                                        children: [
                                            (0, i.jsx)(tU.l, {
                                                label: ef.intl.string(ep.default["96vZuU"]),
                                                hideLabel: !0,
                                                value: d,
                                                onChange: b,
                                                maxValue: m ?? j,
                                            }),
                                            null != d &&
                                                (0, i.jsx)(c.m, {
                                                    text: ef.intl.string(ef.t.VkKicb),
                                                    children: (0, i.jsx)(g.K, {
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
                            (0, i.jsxs)("div", {
                                className: tJ._2,
                                children: [
                                    (0, i.jsx)(R.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: tJ.bk,
                                        "aria-hidden": !0,
                                        children: ef.intl.string(ep.default["GL51/b"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: tJ.h0,
                                        children: [
                                            (0, i.jsx)(tU.l, {
                                                label: ef.intl.string(ep.default["GL51/b"]),
                                                hideLabel: !0,
                                                value: m,
                                                onChange: y,
                                                minValue: d ?? void 0,
                                                maxValue: j,
                                            }),
                                            null != m &&
                                                (0, i.jsx)(c.m, {
                                                    text: ef.intl.string(ef.t.VkKicb),
                                                    children: (0, i.jsx)(g.K, {
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
                        ],
                    }),
                    A &&
                        (0, i.jsx)("div", {
                            className: tJ.dS,
                            children: (0, i.jsx)(eR.Q, { size: "sm", text: ef.intl.string(ef.t.VkKicb), onClick: N }),
                        }),
                ],
            }),
        ],
    });
}
var t1 = l(103552),
    t2 = l(914427),
    t3 = l(213424);
function t5(e) {
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
                placeholder: c,
                value: u,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: o ?? ef.intl.string(ef.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(eq.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tz.a,
                iconPosition: "end",
            }),
    });
}
var t9 = l(941886);
function t7(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: n } = e;
    return (0, i.jsxs)("div", {
        className: t9.Io,
        children: [
            null != l && (0, i.jsx)("span", { className: t9.Kk, children: l }),
            (0, i.jsx)(R.E, {
                className: t9.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, i.jsx)(tp.D, {
                className: t9.DT,
                onClick: a,
                "aria-label": n ?? ef.intl.string(ef.t.N86XcP),
                children: (0, i.jsx)(tK.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t6 = l(841765);
let t4 = { all: ep.default.lscwjQ, auto: ep.default.xrOIkz, manual: ep.default.D7HSLJ };
function t8() {
    let e = (0, tn.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? tZ(e) : ef.intl.string(ep.default.upqksT);
    return (0, i.jsx)(tm.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(t0, { closePopout: t });
        },
        children: (e) =>
            (0, i.jsx)(eq.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tz.a,
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
                children: (0, i.jsxs)(tb.rX, {
                    children: [
                        (0, i.jsx)(tb.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: ef.intl.string(ef.t["4LLKx3"]),
                            action: () => {
                                n(S.mu.MOST_RECENT), l();
                            },
                            checked: e === S.mu.MOST_RECENT,
                        }),
                        (0, i.jsx)(tb.iD, {
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
            (0, i.jsx)(eq.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: s, icon: tH.J }),
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
                "aria-label": ef.intl.string(ep.default["kIqbb/"]),
                onClose: l,
                onSelect: void 0,
                children: (0, i.jsxs)(tb.rX, {
                    children: [
                        (0, i.jsx)(tb.iD, {
                            id: "method-all",
                            group: "method",
                            label: ef.intl.string(ep.default.lscwjQ),
                            action: () => {
                                n("all"), l();
                            },
                            checked: "all" === e,
                        }),
                        (0, i.jsx)(tb.iD, {
                            id: "method-auto",
                            group: "method",
                            label: ef.intl.string(ep.default.xrOIkz),
                            action: () => {
                                n("auto"), l();
                            },
                            checked: "auto" === e,
                        }),
                        (0, i.jsx)(tb.iD, {
                            id: "method-manual",
                            group: "method",
                            label: ef.intl.string(ep.default.D7HSLJ),
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
            (0, i.jsx)(eq.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: ef.intl.string(ep.default["kIqbb/"]),
                icon: tz.a,
                iconPosition: "end",
            }),
    });
}
function ll(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: n } = e,
        s = (0, tn.P)((e) => e.query),
        r = (0, tn.P)((e) => e.setQuery),
        c = (0, tn.P)((e) => e.pendingSearchFocus),
        o = (0, tn.P)((e) => e.setPendingSearchFocus),
        d = a.useRef(null),
        h = (0, tn.P)((e) => e.activeMainLink),
        x = (0, tn.P)((e) => e.clipMethodFilter),
        g = (0, tn.P)((e) => e.setClipMethodFilter),
        p = (0, tn.P)((e) => e.gameFacet),
        f = (0, tn.P)((e) => e.clippedWithFacet),
        j = (0, tn.P)((e) => e.selectedGameIds),
        v = (0, tn.P)((e) => e.selectedUserIds),
        C = (0, tn.P)((e) => e.selectedGuildId),
        b = (0, tn.P)((e) => e.selectedActivity),
        k = (0, tn.P)((e) => e.dateFilter),
        L = (0, tn.P)((e) => e.toggleGameId),
        E = (0, tn.P)((e) => e.toggleUserId),
        w = (0, tn.P)((e) => e.setSelectedGuildId),
        P = (0, tn.P)((e) => e.setSelectedActivity),
        I = (0, tn.P)((e) => e.setDateFilter),
        D = (0, tn.P)((e) => e.clearFilters);
    a.useEffect(() => {
        c && (d.current?.focus(), o(!1));
    }, [c, o]);
    let M = a.useMemo(() => l.map((e) => e.key), [l]),
        T = (0, y.A)(M),
        R = a.useMemo(() => new Map(T.map((e) => [e?.id, e])), [T]),
        _ = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, i.jsx)(N.A, { game: R.get(e.key), size: N.M.XSMALL }),
                })),
            [l, R],
        ),
        F = a.useMemo(
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
                F.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, i.jsx)(tG.Ay, { guild: e.guild, size: tG.Ay.Sizes.MINI }),
                })),
            [F],
        ),
        z = a.useMemo(() => new Map(F.map((e) => [e.key, e.guild])), [F]),
        H = a.useMemo(
            () =>
                null == p
                    ? []
                    : (function (e) {
                          let t = new Set();
                          for (let l of e)
                              l.activity?.state != null && "" !== l.activity.state && t.add(l.activity.state),
                                  l.activity?.details != null && "" !== l.activity.details && t.add(l.activity.details);
                          return Array.from(t).sort((e, t) => e.toLowerCase().localeCompare(t.toLowerCase()));
                      })(t.filter((e) => e.applicationId === p)).map((e) => ({ key: e, label: e })),
            [t, p],
        ),
        G = a.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = A.default.getUser(l.key);
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
        K = a.useMemo(() => (null != b ? new Set([b]) : new Set()), [b]),
        V = a.useCallback(
            (e) => {
                w(C === e ? null : e);
            },
            [C, w],
        ),
        $ = a.useCallback(
            (e) => {
                P(b === e ? null : e);
            },
            [b, P],
        ),
        Q = null == p,
        Y = null == f,
        X = h !== S.oH.AUTO_CLIPS,
        B = ef.intl.string(t4[x]),
        q = (0, i.jsxs)(i.Fragment, {
            children: [
                Q &&
                    Array.from(j).map((e) => {
                        let t = _.find((t) => t.key === e);
                        return (0, i.jsx)(
                            t7,
                            {
                                label: t?.label ?? e,
                                icon: (0, i.jsx)(N.A, { game: R.get(e), size: N.M.XSMALL }),
                                onRemove: () => L(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != k && (0, i.jsx)(t7, { label: tZ(k), onRemove: () => I(null) }, "date"),
                null != C &&
                    (0, i.jsx)(
                        t7,
                        {
                            label: O.find((e) => e.key === C)?.label ?? C,
                            icon:
                                null != z.get(C)
                                    ? (0, i.jsx)(tG.Ay, { guild: z.get(C), size: tG.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => w(null),
                        },
                        "guild",
                    ),
                Y && Array.from(v).map((e) => (0, i.jsx)(li, { userId: e, onRemove: () => E(e) }, `user-${e}`)),
                null != b && (0, i.jsx)(t7, { label: b, onRemove: () => P(null) }, "activity"),
                X && "all" !== x && (0, i.jsx)(t7, { label: B, onRemove: () => g("all") }, "method"),
            ],
        }),
        W = (Q && j.size > 0) || null != k || null != C || (Y && v.size > 0) || null != b || (X && "all" !== x);
    return (0, i.jsxs)("div", {
        className: t6.kT,
        children: [
            (0, i.jsxs)("div", {
                className: t6.HL,
                children: [
                    (0, i.jsx)("div", {
                        className: t6.MT,
                        children: (0, i.jsx)(tg.I, {
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
                            X && (0, i.jsx)(lt, {}),
                            Q &&
                                _.length > 0 &&
                                (0, i.jsx)(t5, {
                                    triggerLabel: ef.intl.string(ef.t.URyqtP),
                                    options: _,
                                    selectedKeys: j,
                                    onToggle: L,
                                    multiSelect: !0,
                                    searchPlaceholder: ef.intl.string(ef.t["5h0QOP"]),
                                }),
                            (0, i.jsx)(t8, {}),
                            O.length > 0 &&
                                (0, i.jsx)(t5, {
                                    triggerLabel: ef.intl.string(ef.t["5qyruI"]),
                                    options: O,
                                    selectedKeys: U,
                                    onToggle: V,
                                    multiSelect: !1,
                                    searchPlaceholder: ef.intl.string(ef.t["5h0QOP"]),
                                }),
                            Y &&
                                G.length > 0 &&
                                (0, i.jsx)(t5, {
                                    triggerLabel: ef.intl.string(ef.t.YQ6dJg),
                                    options: G,
                                    selectedKeys: v,
                                    onToggle: (e) => E(e),
                                    multiSelect: !0,
                                    searchPlaceholder: ef.intl.string(ef.t["5h0QOP"]),
                                }),
                            H.length > 0 &&
                                (0, i.jsx)(t5, {
                                    triggerLabel: ef.intl.string(ef.t.agRtPG),
                                    options: H,
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
            W &&
                (0, i.jsxs)("div", {
                    className: t6.eH,
                    children: [
                        q,
                        (0, i.jsx)(eR.Q, {
                            size: "sm",
                            variant: "primary",
                            text: ef.intl.string(ef.t.O8k7O4),
                            onClick: D,
                        }),
                    ],
                }),
        ],
    });
}
function li(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, r.bG)([A.default], () => A.default.getUser(t), [t]);
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(t7, {
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
    lc = l(152858);
function lo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var ld = l(452143);
function lu(e) {
    let { clips: t, onEdit: l } = e,
        n = a.useMemo(() => lo(t), [t]),
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
        { enabled: o } = L.O.useConfig({ location: "AutoClipsReviewCarousel" }),
        d = (0, tn.P)((e) => e.setActiveMainLink);
    return 0 === n.length
        ? null
        : (0, i.jsx)(ls.N, {
              theme: ln.NJ.DARK,
              children: (e) =>
                  (0, i.jsxs)("section", {
                      className: s()(ld.uW, e),
                      "aria-label": ef.intl.string(ep.default.efLpNC),
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
                                                      children: ef.intl.string(ep.default.I1h8uD),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(x.D, {
                                              variant: "display-md",
                                              color: "always-white",
                                              className: ld.DD,
                                              children: ef.intl.string(ep.default.efLpNC),
                                          }),
                                      ],
                                  }),
                                  o &&
                                      (0, i.jsx)("div", {
                                          className: ld.BX,
                                          children: (0, i.jsx)(eq.$, {
                                              variant: "overlay-primary",
                                              size: "sm",
                                              onClick: () => d(S.oH.AUTO_CLIPS),
                                              text: ef.intl.string(ep.default.gCay1w),
                                          }),
                                      }),
                              ],
                          }),
                          (0, i.jsx)(lr.A, {
                              className: ld.jG,
                              gap: 16,
                              edgeFade: 0,
                              scrollBehavior: lc.Uf.ITEM,
                              hideActionsWhenDisabled: !0,
                              "aria-label": ef.intl.string(ep.default.efLpNC),
                              children: n.map((e) => {
                                  let t = "" !== e.thumbnail ? e.thumbnail : null;
                                  return (0, i.jsx)(
                                      "div",
                                      {
                                          className: o ? ld.v2 : ld.cW,
                                          onMouseEnter: o ? () => c(t) : void 0,
                                          onMouseLeave: o ? () => c(null) : void 0,
                                          onFocus: () => c(t),
                                          onBlur: (e) => {
                                              (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) ||
                                                  c(null);
                                          },
                                          children: o
                                              ? (0, i.jsx)(e7, {
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
var lm = l(770178),
    lh = l(765548),
    lx = l(569926),
    lg = l(486020),
    lp = l(251287);
function lf(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: n,
            onEdit: c,
            onClipClick: o,
            animateEntrance: d,
            entranceRowOffset: u,
        } = e,
        { data: h } = (0, lx.I)(t.applicationId),
        g = (0, tn.P)((e) => e.setGameFacet),
        p = (0, tn.P)((e) => e.setActiveMainLink),
        f = t.applicationId,
        j = null != f && "" !== f,
        v = a.useCallback(() => {
            null != f && "" !== f && (g(f), p(S.oH.ALL_CLIPS));
        }, [f, g, p]),
        C = a.useCallback(() => {
            j ? v() : p(S.oH.ALL_CLIPS);
        }, [j, v, p]),
        b = a.useMemo(
            () =>
                null == h
                    ? null
                    : null != h.bannerHash && "" !== h.bannerHash
                      ? (lg.Ay.getGameAssetURL({ id: h.id, hash: h.bannerHash, size: 1024, keepAspectRatio: !0 }) ??
                        null)
                      : (h.screenshotUrls?.[0] ?? null),
            [h],
        ),
        y = (0, r.yK)([A.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => A.default.getUser(e)).filter(ec.Vq);
        }),
        k = (0, eZ.e)({ timestamp: t.startedAt }),
        [L, E] = a.useState(800),
        w = (0, lh.A)((e) => {
            E(e.target.clientWidth);
        }),
        P = (0, lm.w)(w),
        I = Math.max(1, (L - 32) / 3),
        D = a.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        M = t.clips.length > 6;
    return (0, i.jsxs)("section", {
        className: lp.dZ,
        children: [
            (0, i.jsx)("div", {
                className: s()(lp.tB, null == b && lp.rD),
                style: null != b ? { backgroundImage: `url(${b})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, i.jsxs)("div", {
                className: lp.wx,
                children: [
                    j
                        ? (0, i.jsx)(K.s, {
                              "aria-label": t.applicationName,
                              onClick: v,
                              className: lp.Zn,
                              children: (0, i.jsx)(N.A, {
                                  className: lp.Gt,
                                  game: h,
                                  size: N.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, i.jsx)(N.A, { className: lp.Gt, game: h, size: N.M.MEDIUM, "aria-hidden": !0 }),
                    (0, i.jsxs)("div", {
                        className: lp.TK,
                        children: [
                            j
                                ? (0, i.jsx)(K.s, {
                                      "aria-label": t.applicationName,
                                      onClick: v,
                                      className: lp.wb,
                                      children: (0, i.jsx)(x.D, {
                                          variant: "text-md/semibold",
                                          color: "text-default",
                                          className: lp.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, i.jsx)(x.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      className: lp.mO,
                                      children: t.applicationName,
                                  }),
                            (0, i.jsxs)("div", {
                                className: lp.mI,
                                children: [
                                    (0, i.jsx)(R.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ef.intl.format(ep.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    (0, i.jsx)("span", { className: lp.TG, "aria-hidden": "true" }),
                                    (0, i.jsx)(R.E, { variant: "text-xs/normal", color: "text-muted", children: k }),
                                    y.length > 0 &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)("span", { className: lp.TG, "aria-hidden": "true" }),
                                                (0, i.jsx)(U.A, { users: y, maxUsers: 5, size: m._3.SIZE_16 }),
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
                className: lp.Vg,
                children: D.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: lp.UX,
                            children: e.map((e, a) => {
                                let s = { width: I };
                                return (
                                    d && (s["--custom-entrance-delay"] = `${ts(u + t + a)}ms`),
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: d ? tc.$ : void 0,
                                            style: s,
                                            children: (0, i.jsx)(e7, {
                                                clip: e,
                                                actionsDisabled: n,
                                                isNew: l.includes(e.id),
                                                onClick: o ?? c,
                                                onEdit: c,
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
            M &&
                (0, i.jsx)("div", {
                    className: lp.Vc,
                    children: (0, i.jsx)(eq.$, {
                        variant: "secondary",
                        size: "sm",
                        text: ef.intl.string(ep.default.pqk9U0),
                        onClick: C,
                    }),
                }),
        ],
    });
}
var lj = l(177435);
function lv(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: n, onClipClick: s, isLoading: c } = e,
        { enableAutoClipsReview: o } = la.useConfig({ location: "ClipsGalleryHome" }),
        d = a.useMemo(() => lo(t), [t]),
        u = o && d.length > 0,
        m = (0, r.yK)([k.Ay], () => k.Ay.getNewClipIds()),
        h = (0, r.bG)([k.Ay], () => k.Ay.getExportingClipIds().length > 0),
        g = (0, tn.P)((e) => e.setActiveMainLink),
        p = a.useCallback(() => {
            g(S.oH.ALL_CLIPS);
        }, [g]),
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
                                  (0, i.jsx)(x.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-default",
                                      children: ef.intl.string(ep.default.zfTWDE),
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
                                      children: (0, i.jsx)(eq.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: ef.intl.string(ep.default.RQtkop),
                                          onClick: p,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : c
          ? (0, i.jsx)("div", { className: lj.dc, children: (0, i.jsx)(_.y, {}) })
          : (0, i.jsx)(eQ, { isEmptyBecauseQuery: l > 0 });
}
var lC = l(409067),
    lb = l(847455);
let ly = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function lN(e) {
    let {
        channelId: t,
        onClose: n,
        onClipClick: T,
        transitionState: R,
        initialEditingClipId: _,
        initialMainLink: F = S.oH.HOME,
        ...O
    } = e;
    (0, M.A)();
    let { analyticsLocations: z } = (0, b.Ay)(C.A.CLIPS_GALLERY),
        [H, G] = a.useState(new Set()),
        {
            gamesFacet: U,
            participantsFacet: K,
            distributedClipInitiatorsFacet: V,
            filteredClips: $,
            mainLinkCounts: Q,
            mainLinkNewCounts: Y,
            allClips: X,
        } = (0, lC.ad)(),
        { enabled: B } = L.O.useConfig({ location: "ClipsGalleryModal" }),
        q = (0, r.bG)([k.Ay], () => k.Ay.getSettings().storageLocation),
        [W, Z] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            Z(!0);
            try {
                await (0, E.Fb)(q);
            } finally {
                Z(!1);
            }
        })().catch(() => {});
    }, [q]);
    let { onShareClick: J } = (0, D.A)(t);
    a.useEffect(
        () => () => {
            tn.P.getState().resetAll(), (0, E.Su)();
        },
        [],
    ),
        a.useEffect(() => {
            if (!B) return;
            let e = tn.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(F);
        }, [B, F]);
    let ee = (0, r.bG)([k.Ay], () => k.Ay.getExportingClipIds().length > 0),
        [et, el] = a.useState(null != _ ? "editing" : "gallery"),
        [ei, ea] = a.useState(_ ?? null),
        en = (0, r.bG)([k.Ay], () => (null != ei ? k.Ay.getClipById(ei) : null), [ei]),
        es = a.useRef(et);
    (es.current = et), (a.useRef(ei).current = ei);
    let [er, ec] = a.useState(null != _ ? d.ip.ENTERED : d.ip.HIDDEN),
        eo = a.useRef(null),
        ed = (0, tn.P)((e) => e.gameFacet),
        eu = (0, tn.P)((e) => e.clippedWithFacet),
        em = (0, tn.P)((e) => e.activeMainLink),
        eh = (0, tn.P)((e) => e.currentPage),
        ex = (0, tn.P)(
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
        em === S.oH.HOME && ex && tn.P.getState().setActiveMainLink(S.oH.ALL_CLIPS);
    }, [em, ex]);
    let eg = a.useMemo(() => (null != ed ? [ed] : []), [ed]),
        ej = (0, y.A)(eg)[0] ?? null,
        ev = (0, r.bG)([A.default], () => (null != eu ? A.default.getUser(eu) : null), [eu]),
        eC = a.useMemo(() => {
            if (null != ed) {
                let e = U.find((e) => e.key === ed)?.name ?? ef.intl.string(ef.t.dPVrEv);
                return { icon: (0, i.jsx)(N.A, { game: ej, size: N.M.SMALL, "aria-hidden": !0 }), title: e };
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
                  ? { icon: null, title: ef.intl.string(ep.default.ikNKf1) }
                  : em === S.oH.HOME
                    ? { icon: null, title: ef.intl.string(ef.t.Ym2Ri6) }
                    : { icon: null, title: ef.intl.string(ef.t.dPVrEv) };
        }, [ed, eu, em, U, ej, ev]),
        eb = a.useCallback(() => {
            el("editing"), v.A.useReducedMotion && ec(d.ip.ENTERED);
        }, []),
        ey = a.useCallback((e) => {
            G((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        eN = a.useCallback(
            (e) => {
                ea(e.id), eb();
            },
            [eb],
        ),
        eA = a.useCallback(() => {
            v.A.useReducedMotion && ea(null), el("gallery");
        }, []);
    a.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === es.current && (e.stopPropagation(), eA());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [eA, n]),
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
        eL = H.size > 0,
        eE = a.useCallback(() => {
            let e = X.filter((e) => H.has(e.id));
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
        }, [X, H, ek]),
        ew = a.useCallback(async () => {
            let e = X.filter((e) => H.has(e.id));
            await J({ clips: e }), ek();
        }, [X, H, J, ek]),
        eP = a.useMemo(
            () => ({ selectedClipIds: H, toggleClipSelection: ey, clearSelection: ek, isMultiSelectMode: eL }),
            [H, ey, ek, eL],
        );
    return (0, i.jsx)(b.f5, {
        value: z,
        children: (0, i.jsx)(ly.Provider, {
            value: eP,
            children: (0, i.jsx)(o.N, {
                onClose: n,
                transitionState: R,
                ...O,
                children: (0, i.jsxs)("div", {
                    className: lb.jT,
                    ref: eo,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(lb.PD, "gallery" === et && lb.vu),
                            inert: "gallery" !== et,
                            children: [
                                (0, i.jsx)(tF, {
                                    gamesFacet: U,
                                    participantsFacet: K,
                                    distributedClipInitiatorsFacet: V,
                                    mainLinkCounts: Q,
                                    mainLinkNewCounts: Y,
                                    allClips: X,
                                    filteredClips: $,
                                    withHeaderFilters: !B,
                                }),
                                (0, i.jsxs)("div", {
                                    className: lb.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: lb.$Q,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: lb.Rj,
                                                    children: [
                                                        eC.icon,
                                                        (0, i.jsx)(x.D, {
                                                            variant: "heading-md/medium",
                                                            color: "text-default",
                                                            children: eC.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: lb.$s,
                                                    children: [
                                                        eL &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(c.m, {
                                                                        text: ef.intl.string(ef.t.RDE0Sc),
                                                                        children: (0, i.jsx)(g.K, {
                                                                            onClick: ew,
                                                                            icon: p.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ef.intl.string(ef.t.RDE0Sc),
                                                                            loading: ee,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(c.m, {
                                                                        text: ef.intl.string(ef.t.oyYWHE),
                                                                        children: (0, i.jsx)(g.K, {
                                                                            onClick: eE,
                                                                            icon: f.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ef.intl.string(ef.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(g.K, {
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
                                        B && eh === S.fB.HOME
                                            ? (0, i.jsx)(lv, {
                                                  filteredClips: $,
                                                  totalClipCount: X.length,
                                                  onEdit: eN,
                                                  onClipClick: T,
                                                  isLoading: W,
                                              })
                                            : (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      B &&
                                                          (0, i.jsx)(ll, {
                                                              allClips: X,
                                                              gamesFacet: U,
                                                              participantsFacet: K,
                                                          }),
                                                      (0, i.jsx)(tu, {
                                                          onEdit: eN,
                                                          channelId: t,
                                                          filteredClips: $,
                                                          totalClipCount: X.length,
                                                          onClipClick: T,
                                                          isLoading: W,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: s()(lb.jN, "editing" === et && lb.vu),
                            inert: "editing" !== et,
                            onTransitionEnd: () => {
                                switch (et) {
                                    case "gallery":
                                        ea(null), ec(d.ip.HIDDEN);
                                        break;
                                    case "editing":
                                        ec(d.ip.ENTERED);
                                }
                            },
                            children:
                                null != en &&
                                (0, i.jsxs)(I.p, {
                                    clip: en,
                                    modalContainerRef: eo,
                                    children: [
                                        (0, i.jsx)(w.A, { transitionState: er, onClose: eA }),
                                        (0, i.jsx)(P.A, { channelId: t, onClose: eA }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
