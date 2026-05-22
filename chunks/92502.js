l.d(t, { $: () => tx, default: () => tg });
var i = l(627968),
    a = l(64700),
    s = l(503698),
    n = l.n(s),
    r = l(17928),
    d = l(990078),
    c = l(521489),
    o = l(231723),
    u = l(192308),
    m = l(534514),
    p = l(408278),
    h = l(405433),
    x = l(241326),
    g = l(972213),
    v = l(775602),
    f = l(793574),
    j = l(688810),
    C = l(274372),
    y = l(607814),
    b = l(556316),
    A = l(309777),
    N = l(429364),
    E = l(352527),
    I = l(280483);
l(321073);
var k = l(562708),
    L = l(834730),
    w = l(289873),
    M = l(139286),
    D = l(962125),
    S = l(449543),
    P = l(939249),
    R = l(27232),
    T = l(505930),
    _ = l(821609),
    G = l(933832),
    z = l(97808),
    O = l(778712),
    H = l(22231),
    F = l(429913),
    K = l(607470),
    U = l(137177),
    $ = l(495544),
    B = l(287809),
    Q = l(372684),
    Y = l(140423),
    V = l(602902),
    X = l(665039),
    q = l(16590),
    W = l(375708),
    Z = l(296364);
let J = ["clowning around", "good times", "team vibes", "epic teamwork"];
function ee(e) {
    let { clip: t, moment: l, onEdit: s } = e,
        n = (0, X.j)(t),
        { analyticsLocations: c } = (0, j.Ay)(),
        o = (0, F.h)(t.applicationId),
        u = $.default.getId(),
        g = (0, r.bG)([B.default], () => {
            let e = t.users.find((e) => e !== u);
            return null != e ? B.default.getUser(e) : null;
        }, [t.users, u]),
        v = null != g,
        { Icon: f } = l,
        C = v ? W.intl.formatToPlainString(q.default.QJ7i8Z, { username: g.username }) : l.title,
        b = v ? J[t.id.charCodeAt(0) % J.length] : l.subtitle,
        A = t.type === Q.nQ.SCREENSHOT,
        N = t.type === Q.nQ.VOICE_CLIP,
        E = !A && !N && null != n,
        I = a.useRef(null),
        k = a.useCallback(() => {
            let e = I.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start]),
        w = a.useCallback(
            (e) => {
                let l = I.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
                let i = document.activeElement;
                null != i && e.currentTarget.contains(i) && !i.matches(":focus-visible") && i.blur();
            },
            [t.editMetadata?.start],
        ),
        M = a.useCallback(() => {
            let e = I.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start]),
        D = a.useCallback(
            (e) => {
                if (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) return;
                let l = I.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
            },
            [t.editMetadata?.start],
        ),
        S = a.useCallback(
            (e) => {
                e.stopPropagation(), s(t);
            },
            [s, t],
        ),
        ee = a.useCallback(() => {
            s(t);
        }, [s, t]),
        et = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, V.K)([t], { analyticsLocations: c });
            },
            [t, c],
        ),
        el = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, y.w7)(t.id);
            },
            [t.id],
        ),
        ei = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, Y.R)({ clips: [t] });
            },
            [t],
        ),
        ea = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, y.XK)(t);
            },
            [t],
        ),
        es = !0 !== t.isTemporary,
        en = W.intl.string(!0 === t.isFavorite ? q.default.IZsalP : q.default.ihBfyA);
    return (0, i.jsx)("div", {
        className: Z.Ui,
        onMouseEnter: k,
        onMouseLeave: w,
        onFocus: M,
        onBlur: D,
        children: (0, i.jsxs)(P.D, {
            className: Z.Nr,
            "aria-label": W.intl.string(W.t.bt75uw),
            onClick: ee,
            children: [
                (0, i.jsxs)("div", {
                    className: Z.hz,
                    children: [
                        "" !== t.thumbnail
                            ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: Z.xn })
                            : (0, i.jsx)("div", { className: Z.$$ }),
                        E
                            ? (0, i.jsx)(K.A, {
                                  preload: "none",
                                  poster: t.thumbnail,
                                  muted: !0,
                                  loop: !0,
                                  src: n ?? void 0,
                                  className: Z.xn,
                                  ref: I,
                              })
                            : null,
                    ],
                }),
                (0, i.jsx)("div", { className: Z.D7 }),
                null != o &&
                    (0, i.jsx)("div", {
                        className: Z.uv,
                        "aria-hidden": "true",
                        children: (0, i.jsx)(U.A, { game: o, size: U.M.XXSMALL, className: Z.ns }),
                    }),
                (0, i.jsxs)("div", {
                    className: Z.Nv,
                    children: [
                        es
                            ? (0, i.jsx)(
                                  d.m,
                                  {
                                      text: en,
                                      position: "top",
                                      children: (0, i.jsx)(p.K, {
                                          onClick: ea,
                                          icon: !0 === t.isFavorite ? R.G : T.y,
                                          "aria-label": en,
                                          variant: "overlay-secondary",
                                          size: "sm",
                                      }),
                                  },
                                  `${t.id}:favorite:${t.isFavorite}`,
                              )
                            : (0, i.jsx)(_.$, {
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: G.A,
                                  text: W.intl.string(W.t["R3BPH+"]),
                                  onClick: el,
                              }),
                        (0, i.jsx)(d.m, {
                            text: W.intl.string(W.t.oyYWHE),
                            position: "top",
                            children: (0, i.jsx)(p.K, {
                                onClick: ei,
                                icon: x.u,
                                "aria-label": W.intl.string(W.t.oyYWHE),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: Z.Lw,
                    children: [
                        v && null != g
                            ? (0, i.jsx)(z.eu, {
                                  src: g.getAvatarURL(void 0, 32),
                                  size: O._3.SIZE_32,
                                  "aria-hidden": !0,
                              })
                            : (0, i.jsx)("div", {
                                  className: Z.bG,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(f, { size: "md", color: "currentColor" }),
                              }),
                        (0, i.jsx)(m.D, { variant: "heading-md/extrabold", color: "always-white", children: C }),
                        (0, i.jsx)(L.E, { variant: "text-sm/medium", color: "always-white", children: b }),
                        (0, i.jsx)("div", { className: Z.nP, "aria-hidden": "true" }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: Z.o1,
                    children: [
                        (0, i.jsx)(_.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: H.R,
                            text: W.intl.string(W.t.bt75uw),
                            onClick: S,
                        }),
                        (0, i.jsx)(_.$, {
                            variant: "primary",
                            size: "sm",
                            icon: h.l,
                            text: W.intl.string(W.t.RDE0Sc),
                            onClick: et,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var et = l(175841),
    el = l(369606),
    ei = l(845798),
    ea = l(825860),
    es = l(926268);
let en = [
    { Icon: et.B, title: "LOL", subtitle: "lot of laughter" },
    { Icon: el.O, title: "ACE", subtitle: "5 kills in 26 sec" },
    { Icon: ei.S, title: "WITH FRIENDS", subtitle: "clowning around" },
    { Icon: ea.Y, title: "ON FIRE", subtitle: "3 wins in a row" },
    { Icon: R.G, title: "HIGHLIGHT", subtitle: "epic moment" },
    { Icon: es.C, title: "GOOD VIBES", subtitle: "fun with the squad" },
];
function er(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var ed = l(452143);
function ec(e) {
    let { onEdit: t } = e,
        l = (0, r.yK)([C.A], () => C.A.getClips()),
        s = a.useMemo(() => er(l), [l]),
        n = a.useMemo(
            () =>
                s
                    .map((e) => e.id)
                    .map((e) => {
                        let t = 0;
                        for (let l = 0; l < e.length; l++) t = (31 * t + e.charCodeAt(l)) | 0;
                        return en[Math.abs(t) % en.length];
                    }),
            [s],
        );
    return 0 === s.length
        ? null
        : (0, i.jsxs)("section", {
              className: ed.uW,
              "aria-label": W.intl.string(q.default.efLpNC),
              children: [
                  (0, i.jsxs)("div", {
                      className: ed.wx,
                      children: [
                          (0, i.jsx)(L.E, {
                              variant: "text-lg/semibold",
                              color: "text-default",
                              children: W.intl.string(q.default.I1h8uD),
                          }),
                          (0, i.jsx)(m.D, {
                              variant: "display-md",
                              color: "text-strong",
                              className: ed.R_,
                              children: W.intl.string(q.default.efLpNC),
                          }),
                      ],
                  }),
                  (0, i.jsx)(S.A, {
                      className: ed.jG,
                      gap: 16,
                      edgeFade: 0,
                      hideActionsWhenDisabled: !0,
                      "aria-label": W.intl.string(q.default.efLpNC),
                      children: s.map((e, l) => (0, i.jsx)(ee, { clip: e, moment: n[l], onEdit: t }, e.id)),
                  }),
              ],
          });
}
var eo = l(989349),
    eu = l.n(eo),
    em = l(66455),
    ep = l(342952),
    eh = l(890856),
    ex = l(777666),
    eg = l(530005),
    ev = l(406810),
    ef = l(176781),
    ej = l(661531),
    eC = l(983851),
    ey = l(31300),
    eb = l(442433),
    eA = l(587895),
    eN = l(47167),
    eE = l(734057),
    eI = l(71393),
    ek = l(549685),
    eL = l(174459),
    ew = l(58703),
    eM = l(403362),
    eD = l(226421),
    eS = l(718812),
    eP = l(652215),
    eR = l(798594);
let eT = function (e) {
    let { clip: t, actionsDisabled: s, isNew: d, onEdit: c, onClick: o } = e,
        u = (0, r.yK)([B.default], () => t.users.map((e) => B.default.getUser(e)).filter(eM.Vq)),
        m = (0, r.bG)([eE.A], () => (null != t.channelId ? eE.A.getChannel(t.channelId) : null)),
        p = (0, r.bG)([eI.A], () => (null != t.guildId ? eI.A.getGuild(t.guildId) : null)),
        { analyticsLocations: h } = (0, j.Ay)(f.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: v } = a.useContext(tx),
        [y, b] = a.useState(!1),
        A = a.useRef(null),
        N = (0, em.A)(t.editMetadata?.start ?? 0),
        E = x.has(t.id),
        I = t.type === Q.nQ.SCREENSHOT,
        k = (0, eN.Ay)(m),
        w = "" === t.applicationName && null != k && "" !== k ? k : t.applicationName,
        M = (0, ew.Fe)(new Date(t.createdAt)),
        D = a.useMemo(() => {
            let e = [];
            return (
                t.type === Q.nQ.VOICE_CLIP
                    ? (p?.name != null && e.push(p.name), null != k && e.push(k))
                    : ("" !== w && null != w && e.push(w),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [w, p?.name, k, t.activity?.state, t.activity?.details, t.type]),
        S = a.useCallback(() => {
            let e = A.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        P = a.useCallback(() => {
            if (!0 === I) return;
            let e = A.current;
            null != e && e.paused && ((e.currentTime = N.current), A.current?.play());
        }, [I, N]),
        R = a.useCallback(() => {
            if (!0 === I) return;
            let e = A.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [I, t.editMetadata?.start]),
        T = a.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && R();
            },
            [R],
        ),
        _ = a.useCallback(() => {
            b(!1);
        }, []),
        G = a.useCallback(
            (e) => {
                b(!0), A.current?.pause();
                let a =
                    v && x.size > 0
                        ? Array.from(x)
                              .map((e) => C.A.getClipById(e))
                              .filter(eM.Vq)
                        : [t];
                (0, eb.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([l.e("69006"), l.e("70229")]).then(l.bind(l, 875796));
                        return (l) =>
                            (0, i.jsx)(e, {
                                ...l,
                                clips: a,
                                actionsDisabled: s,
                                onShare: () => {
                                    eL.default.track(eP.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    c(t), eL.default.track(eP.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: S,
                                onAfterDelete: () => {
                                    eL.default.track(eP.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: _ },
                );
            },
            [t, v, x, s, S, _, c],
        ),
        z = a.useCallback(
            (e) => {
                s || (e.preventDefault(), e.stopPropagation(), G(e));
            },
            [s, G],
        ),
        H = a.useCallback(
            (e) => {
                s ||
                    (e.shiftKey ? (e.preventDefault(), g(t.id)) : v ? g(t.id) : null != o && o(t),
                    eL.default.track(eP.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [s, v, g, t, o],
        );
    return (0, i.jsx)(j.f5, {
        value: h,
        children: (0, i.jsxs)(eh.s, {
            "aria-disabled": s,
            "aria-label": W.intl.string(!0 === I ? W.t["HO/oXl"] : W.t.bt75uw),
            onClick: s ? void 0 : H,
            onContextMenu: z,
            className: n()(eR.QN, { [eR.r9]: s, [eR.in]: y, [eR.wH]: E }),
            onBlur: T,
            onFocus: P,
            onMouseOver: P,
            onMouseLeave: R,
            children: [
                (0, i.jsx)(e_, { clip: t, isNew: d, videoRef: A, onOpenContextMenu: G, actionsDisabled: s }),
                (0, i.jsxs)("div", {
                    className: eR.wI,
                    children: [
                        (0, i.jsx)(eO, { clip: t }),
                        (0, i.jsxs)("div", {
                            className: eR.i0,
                            children: [
                                (0, i.jsx)(eG, { clip: t }),
                                (0, i.jsx)(L.E, {
                                    className: eR.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: D,
                                }),
                                (0, i.jsx)(L.E, {
                                    className: eR.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: M,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: eR.jW,
                            children: (0, i.jsx)(ep.A, {
                                maxUsers: 3,
                                users: u,
                                size: O._3.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && P());
                                },
                                "aria-label": W.intl.string(W.t.WTozwe),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
function e_(e) {
    let { clip: t, isNew: l, videoRef: s, onOpenContextMenu: n, actionsDisabled: r } = e,
        c = 0 === t.length,
        o = !0 === t.pending,
        [u, m] = a.useState(0);
    a.useEffect(() => {
        let e = s.current;
        if (null == e || c) return;
        let l = null,
            i = () => {
                if (e.paused || e.ended) {
                    (l = null), m(0);
                    return;
                }
                let a = t.editMetadata?.start ?? 0,
                    s = t.editMetadata?.end ?? e.duration,
                    n = ((e.currentTime - a) / (s - a)) * 100;
                m(isNaN(n) ? 0 : Math.max(0, Math.min(100, n))), (l = requestAnimationFrame(i));
            },
            a = () => {
                null == l && (l = requestAnimationFrame(i));
            },
            n = () => {
                null != l && (cancelAnimationFrame(l), (l = null), m(0));
            };
        return (
            e.addEventListener("play", a),
            e.addEventListener("pause", n),
            e.addEventListener("ended", n),
            e.paused || a(),
            () => {
                null != l && (cancelAnimationFrame(l), m(0)),
                    e.removeEventListener("play", a),
                    e.removeEventListener("pause", n),
                    e.removeEventListener("ended", n);
            }
        );
    }, [s, c, t.editMetadata]);
    let { durationDisplay: h, isClipEdited: x } = a.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                i = !1;
            if (null != t.editMetadata) {
                let a = null != l && 1e3 * l < t.length,
                    s =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (i = a || s), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let a = eu().duration(e),
                s = a.minutes(),
                n = a.seconds();
            return 0 === s
                ? { durationDisplay: `${n}s`, isClipEdited: i }
                : { durationDisplay: `${s}:${n.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [t.length, t.editMetadata]),
        g = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), y.XK(t);
            },
            [t],
        ),
        v = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || n(e);
            },
            [r, n],
        );
    return (0, i.jsxs)("div", {
        className: eR.QB,
        children: [
            (0, i.jsx)("div", { className: eR.ne }),
            !o && l && (0, i.jsx)(ex.Lp, { className: eR.Ad, text: W.intl.string(W.t.y2b7CA) }),
            !r &&
                (0, i.jsxs)("div", {
                    className: eR.g3,
                    children: [
                        (0, i.jsx)(
                            d.m,
                            {
                                text: W.intl.string(t.isFavorite ? q.default.IZsalP : q.default.ihBfyA),
                                position: "top",
                                children: (0, i.jsx)(p.K, {
                                    onClick: g,
                                    icon: t.isFavorite ? R.G : T.y,
                                    "aria-label": W.intl.string(W.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, i.jsx)(p.K, {
                            onClick: v,
                            icon: eg.F,
                            "aria-label": W.intl.string(W.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, i.jsx)(ez, { clip: t, videoRef: s }),
            (0, i.jsxs)("div", {
                className: eR.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, i.jsxs)("div", {
                            className: eR.OH,
                            children: [
                                t.isTemporary && (0, i.jsx)(ev.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(L.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: W.intl.string(W.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, i.jsxs)("div", {
                            className: eR.OH,
                            children: [
                                x && (0, i.jsx)(ek.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(L.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: o ? W.intl.string(W.t["2Fp7OP"]) : h,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                u > 0 &&
                (0, i.jsx)("div", {
                    className: eR.X7,
                    children: (0, i.jsx)("div", { className: eR.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function eG(e) {
    let { clip: t } = e,
        l = (0, eS.h)(t),
        a = "" !== l;
    return (0, i.jsx)(L.E, {
        className: eR.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function ez(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, X.j)(t),
        s = t.type === Q.nQ.SCREENSHOT;
    return t.type === Q.nQ.VOICE_CLIP
        ? (0, i.jsx)(eD.A, { className: eR.fT })
        : s
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eR.fT })
          : null != a
            ? (0, i.jsx)(K.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: eR.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eR.fT })
              : (0, i.jsx)("div", {
                    className: n()(eR.fT, eR.Is),
                    children: (0, i.jsx)(ef.x, { color: ej.A.colors.ICON_MUTED }),
                });
}
function eO(e) {
    let { clip: t } = e,
        l = (0, r.bG)([eA.A], () => (null != t.applicationId ? eA.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: eR.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: eR.NH })
                : t.type === Q.nQ.VOICE_CLIP
                  ? (0, i.jsx)(eC.H, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)(ey.k, { size: "sm", color: "currentColor" }),
    });
}
function eH(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: s, width: n = 288, height: r = 162 } = e;
    return (0, i.jsx)("img", {
        style: { width: n, height: r },
        src: "https://cdn.discordapp.com/assets/content/469fc21d7c695426b2a4476c47ce30c6ff93031a6c38a6bdf12f95264ae547f6.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: s ?? "img",
    });
}
var eF = l(702841),
    eK = l(687966),
    eU = l(475358),
    e$ = l(123292),
    eB = l(292801),
    eQ = l(780964),
    eY = l(766075),
    eV = l(532624),
    eX = l(350535),
    eq = l(572164),
    eW = l(953932),
    eZ = l(311162);
function eJ(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: eZ.Nr,
        children: [t, (0, i.jsx)(L.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function e0() {
    let e = (0, eF.bG)([eV.Ay], () => eV.Ay.getKeybindForAction(eP.hCu.SAVE_CLIP)),
        t = null != e ? eX.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: eZ.kR,
        children: [
            (0, i.jsx)(eJ, {
                header: (0, i.jsx)(eK._, { size: "refresh_sm", color: ej.A.colors.ICON_DEFAULT }),
                description: W.intl.string(q.default["4K56sP"]),
            }),
            (0, i.jsx)(eJ, {
                header: null != t ? (0, i.jsx)(eU.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  W.intl.format(q.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: eZ.JH,
                                      children: (0, i.jsx)(e$.Q, {
                                          text: W.intl.string(q.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, eY.openUserSettings)(eQ.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : W.intl.string(q.default.HOUDUm),
            }),
            (0, i.jsx)(eJ, {
                header: (0, i.jsx)(eB.t, { size: "refresh_sm", color: ej.A.colors.ICON_DEFAULT }),
                description: W.intl.string(q.default.DLzdl7),
            }),
        ],
    });
}
function e2(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eq.Et)();
    return (0, i.jsx)("div", {
        className: eZ.kL,
        children: (0, i.jsxs)("div", {
            className: eZ.Qs,
            children: [
                (0, i.jsx)(eH, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(m.D, {
                    className: eZ.wx,
                    variant: "heading-xl/semibold",
                    children: t ? W.intl.string(q.default["+M2iLf"]) : W.intl.string(q.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(L.E, {
                        className: eZ.h_,
                        variant: "text-md/medium",
                        children: W.intl.string(q.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: eZ.SO, children: (0, i.jsx)(eW.A, {}) }),
                l && !t && (0, i.jsx)(e0, {}),
            ],
        }),
    });
}
let e7 = 16 / 9;
var e3 = l(792852),
    e1 = l(352528);
let e6 = [0, 16, 0, 16],
    e5 = e6[1] + e6[3];
function e9(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: s, onEdit: n } = e,
        [d, c] = a.useState(!0),
        [o, u] = a.useState({ width: 0, height: 0 }),
        p = (0, r.bG)([C.A], () => C.A.getSettings().storageLocation),
        h = (0, r.yK)([C.A], () => C.A.getNewClipIds()),
        x = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0),
        g = (0, r.bG)([C.A], () => er(C.A.getClips()).length > 0),
        v = (0, e3.P)((e) => e.selectedGameId),
        f = g && null == v;
    (0, M.A)(
        {
            type: k.ImpressionTypes.MODAL,
            name: k.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: d },
        [t.length, d],
    );
    let j = a.useMemo(() => {
            let e = [],
                l = new Map(),
                i = [],
                a = new Date();
            a.setHours(0, 0, 0, 0);
            let s = a.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        a = new Date(t);
                    if ((a.setHours(0, 0, 0, 0), a.getTime() === s)) i.push(e);
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
                    title: W.intl.string(W.t["kB2R/0"]),
                    description: t ? W.intl.string(W.t["6AXirz"]) : void 0,
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
        { tileWidth: A, columns: N } = a.useMemo(() => {
            var e, l;
            let i, a, s;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = b - e5) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (s = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: s }
            );
        }, [t.length, b]);
    a.useEffect(() => {
        !(async function () {
            c(!0);
            try {
                await y.Fb(p);
            } finally {
                c(!1);
            }
        })();
    }, [p]);
    let E = a.useMemo(() => j.map((e) => Math.ceil(e.clips.length / N)), [j, N]),
        I = a.useMemo(() => E.reduce((e, t) => e + t, 0), [E]),
        S = Math.floor(A / e7),
        P = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = j[l];
                if (null == r) return null;
                let d = a * N,
                    c = r.clips.slice(d, d + N);
                return (0, i.jsx)(
                    "div",
                    {
                        className: e1.UX,
                        children: c.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { width: A },
                                    children: (0, i.jsx)(eT, {
                                        actionsDisabled: x,
                                        isNew: h.includes(e.id),
                                        onClick: s ?? n,
                                        onEdit: n,
                                        clip: e,
                                    }),
                                },
                                e.id,
                            ),
                        ),
                    },
                    `row-${l}-${a}`,
                );
            },
            [j, N, A, x, h, s, n],
        ),
        R = a.useCallback(
            (e) => {
                let t = j[e];
                return t?.description != null ? 66 : 44;
            },
            [j],
        ),
        T = a.useCallback(
            (e) => {
                let t = j[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: e1.aE,
                              children: [
                                  (0, i.jsx)(m.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, i.jsx)(L.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: e1.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [j],
        );
    return d || 0 !== j.length
        ? d
            ? (0, i.jsx)("div", { className: e1.dc, children: (0, i.jsx)(w.y, {}) })
            : (0, i.jsx)(D.A, {
                  listPadding: e6,
                  renderListHeader: f ? () => (0, i.jsx)(ec, { onEdit: n }) : void 0,
                  listHeaderHeight: 520 * !!f,
                  renderRow: P,
                  renderSectionHeader: T,
                  rowCount: I,
                  rowCountBySection: E,
                  rowHeight: S + 68 + 16,
                  sectionHeaderHeight: R,
                  onResize: u,
              })
        : (0, i.jsx)(e2, { isEmptyBecauseQuery: l > 0 });
}
var e8 = l(922016),
    e4 = l(783977),
    te = l(625903),
    tt = l(892547),
    tl = l(364522),
    ti = l(91871),
    ta = l.n(ti),
    ts = l(980707),
    tn = l(477782),
    tr = l(583650);
function td(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: s,
            selectedActivity: n,
            selectedGuildId: r,
            selectedYear: d,
            sortOrder: c,
            toggleUserId: o,
            setSelectedActivity: u,
            setSelectedGuildId: m,
            setSelectedYear: p,
            setSortOrder: h,
            clearFilters: x,
        } = (0, e3.P)(),
        g = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = B.default.getUser(e);
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
        f = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = eI.A.getGuild(e);
                        null != t && l.push({ guildId: e, name: t.name });
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        j = a.useMemo(
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
        [C, y] = a.useState(""),
        [b, A] = a.useState(""),
        [N, E] = a.useState(""),
        I = a.useMemo(
            () => (0 === C.trim().length ? g : g.filter((e) => ta()(C.toLowerCase(), e.name.toLowerCase()))),
            [g, C],
        ),
        k = a.useMemo(
            () => (0 === b.trim().length ? f : f.filter((e) => ta()(b.toLowerCase(), e.name.toLowerCase()))),
            [f, b],
        ),
        L = a.useMemo(
            () => (0 === N.trim().length ? v : v.filter((e) => ta()(N.toLowerCase(), e.toLowerCase()))),
            [v, N],
        ),
        w = s.size > 0 || null != n || null != r || null != d,
        M = a.useMemo(() => {
            if (0 !== s.size)
                return g
                    .filter((e) => s.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [s, g]),
        D = a.useMemo(() => {
            if (null == r) return;
            let e = f.find((e) => e.guildId === r);
            return e?.name;
        }, [r, f]),
        S = a.useMemo(() => n ?? void 0, [n]),
        P = a.useMemo(() => (null != d ? String(d) : void 0), [d]);
    return (0, i.jsxs)(ts.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": W.intl.string(W.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(tn.rX, {
                label: "Filter",
                children: [
                    g.length > 0 &&
                        (0, i.jsxs)(tn.Dr, {
                            id: "participants",
                            label: W.intl.string(W.t.YQ6dJg),
                            subtext: M,
                            children: [
                                g.length > 20 &&
                                    (0, i.jsx)(tn.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tr.V, {
                                                ...e,
                                                query: C,
                                                onChange: y,
                                                ref: t,
                                                placeholder: W.intl.string(W.t["5h0QOP"]),
                                            }),
                                    }),
                                I.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tn.sL,
                                        { id: `participant-${t}`, label: l, action: () => o(t), checked: s.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    f.length > 0 &&
                        (0, i.jsxs)(tn.Dr, {
                            id: "servers",
                            label: W.intl.string(W.t["5qyruI"]),
                            subtext: D,
                            children: [
                                f.length > 20 &&
                                    (0, i.jsx)(tn.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tr.V, {
                                                ...e,
                                                query: b,
                                                onChange: A,
                                                ref: t,
                                                placeholder: W.intl.string(W.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tn.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: W.intl.string(W.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                k.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tn.iD,
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
                        (0, i.jsxs)(tn.Dr, {
                            id: "activities",
                            label: W.intl.string(W.t.agRtPG),
                            subtext: S,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(tn.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tr.V, {
                                                ...e,
                                                query: N,
                                                onChange: E,
                                                ref: t,
                                                placeholder: W.intl.string(W.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tn.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: W.intl.string(W.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == n,
                                }),
                                L.map((e) =>
                                    (0, i.jsx)(
                                        tn.iD,
                                        {
                                            id: `activity-${e}`,
                                            group: "activity",
                                            label: e,
                                            action: () => u(e),
                                            checked: n === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    j.length > 0 &&
                        (0, i.jsxs)(tn.Dr, {
                            id: "years",
                            label: W.intl.string(W.t.w9zd68),
                            subtext: P,
                            children: [
                                (0, i.jsx)(tn.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: W.intl.string(W.t["2/yeUU"]),
                                    action: () => p(null),
                                    checked: null == d,
                                }),
                                j.map((e) =>
                                    (0, i.jsx)(
                                        tn.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => p(e),
                                            checked: d === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(tn.rX, {
                label: W.intl.string(W.t.XvNMNk),
                children: [
                    (0, i.jsx)(tn.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: W.intl.string(W.t["4LLKx3"]),
                        action: () => h("descending"),
                        checked: "descending" === c,
                    }),
                    (0, i.jsx)(tn.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: W.intl.string(W.t["0gitSE"]),
                        action: () => h("ascending"),
                        checked: "ascending" === c,
                    }),
                ],
            }),
            w &&
                (0, i.jsx)(tn.rX, {
                    children: (0, i.jsx)(tn.Dr, { id: "clear-filters", label: W.intl.string(W.t.FbDgiu), action: x }),
                }),
        ],
    });
}
var tc = l(174726);
let to = a.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: s } = (0, e3.P)(),
            n = (0, eF.bG)([eV.Ay], () => eV.Ay.getKeybindForAction(eP.hCu.SAVE_CLIP)),
            r = (0, e3.P)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            c = a.useCallback(() => {
                (0, eY.openUserSettings)(eQ.X.CLIPS_PANEL);
            }, []),
            o = a.useCallback(() => s(""), [s]),
            u = null != n ? eX.dI(n.shortcut, !0) : null,
            h = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: tc.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: tc.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tc.Pe,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: W.intl.string(W.t.z2jK6X),
                                }),
                                null != u && (0, i.jsx)(eU.e, { className: tc.P, shortcut: u }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tc.$s,
                            children: [
                                (0, i.jsx)(d.m, {
                                    text: W.intl.string(W.t.X7yRDm),
                                    children: (0, i.jsx)(e8.Y, {
                                        position: "bottom",
                                        targetElementRef: h,
                                        renderPopout: (e) => (0, i.jsx)(td, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, i.jsx)("div", {
                                                ref: h,
                                                children:
                                                    r > 0
                                                        ? (0, i.jsx)(_.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: W.intl.formatToPlainString(q.default.JbyR1U, {
                                                                  count: r,
                                                              }),
                                                              icon: e4.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, i.jsx)(p.K, {
                                                              icon: e4.R,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": W.intl.string(W.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, i.jsx)(d.m, {
                                    text: W.intl.string(W.t["3D5yo/"]),
                                    children: (0, i.jsx)(p.K, {
                                        onClick: c,
                                        icon: te.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": W.intl.string(W.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tc.MT,
                    children: (0, i.jsx)(tt.I, {
                        placeholder: W.intl.string(W.t["5h0QOP"]),
                        query: l,
                        onChange: s,
                        onClear: o,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    tu = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: s, onClick: r } = e;
        return (0, i.jsxs)(P.D, {
            className: n()(tc.MV, { [tc.wH]: s }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: tc.tk,
                    children: [
                        a,
                        (0, i.jsx)(L.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tc.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tc.z2,
                    children: (0, i.jsx)(L.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tm(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: s, allClips: n } = e,
        r = (0, e3.P)((e) => e.selectedGameId),
        d = (0, e3.P)((e) => e.setSelectedGameId),
        c = a.useMemo(() => t.map((e) => e.applicationId), [t]),
        o = (0, F.A)(c),
        u = a.useCallback(() => d(null), [d]),
        p = a.useCallback(() => d("favorites"), [d]),
        h = a.useMemo(() => new Map(o.map((e) => [e?.id, e])), [o]);
    return (0, i.jsxs)("div", {
        className: tc.pz,
        children: [
            (0, i.jsx)(to, { allClips: n }),
            (0, i.jsxs)("div", {
                className: tc.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: tc.om,
                        children: (0, i.jsxs)("div", {
                            className: tc.Ep,
                            children: [
                                (0, i.jsx)(tu, {
                                    name: W.intl.string(W.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, i.jsx)(ef.x, {}),
                                    isSelected: null === r,
                                    onClick: u,
                                }),
                                (0, i.jsx)(tu, {
                                    name: W.intl.string(W.t["9rlCk1"]),
                                    count: s.length,
                                    icon: (0, i.jsx)(R.G, {}),
                                    isSelected: "favorites" === r,
                                    onClick: p,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, i.jsxs)(tl.Ip, {
                            className: tc.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tc.a9,
                                    children: W.intl.string(W.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: tc.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: a } = e;
                                        return (0, i.jsx)(
                                            tu,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, i.jsx)(U.A, { game: h.get(a), size: U.M.XSMALL }),
                                                isSelected: r === a,
                                                onClick: () => d(a),
                                            },
                                            a,
                                        );
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var tp = l(409067),
    th = l(847455);
let tx = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function tg(e) {
    let { channelId: t, onClose: s, onClipClick: k, transitionState: L, initialEditingClipId: w, ...M } = e;
    (0, I.A)();
    let { analyticsLocations: D } = (0, j.Ay)(f.A.CLIPS_GALLERY),
        [S, P] = a.useState(new Set()),
        { clipsByGame: R, filteredClips: T, favoriteClips: _, allClips: G } = (0, tp.a)(),
        { onShareClick: z } = (0, E.A)(t),
        O = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0),
        [H, F] = a.useState(null != w ? "editing" : "gallery"),
        [K, U] = a.useState(w ?? null),
        $ = (0, r.bG)([C.A], () => (null != K ? C.A.getClipById(K) : null), [K]),
        B = a.useRef(H);
    (B.current = H), (a.useRef(K).current = K);
    let [Q, Y] = a.useState(null != w ? o.ip.ENTERED : o.ip.HIDDEN),
        V = a.useRef(null),
        X = (0, e3.P)((e) => e.selectedGameId),
        q = a.useMemo(
            () => (null == X || "favorites" === X ? null : (R.find((e) => e.applicationId === X) ?? null)),
            [X, R],
        ),
        Z = a.useMemo(() => ("favorites" === X ? _ : (q?.filteredClips ?? T)), [X, q, T, _]),
        J = a.useMemo(
            () => ("favorites" === X ? W.intl.string(W.t["9rlCk1"]) : (q?.name ?? W.intl.string(W.t.dPVrEv))),
            [X, q],
        ),
        ee = a.useCallback(() => {
            F("editing"), v.A.useReducedMotion && Y(o.ip.ENTERED);
        }, []),
        et = a.useCallback((e) => {
            P((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        el = a.useCallback(
            (e) => {
                U(e.id), ee();
            },
            [ee],
        ),
        ei = a.useCallback(() => {
            v.A.useReducedMotion && U(null), F("gallery");
        }, []);
    a.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === B.current && (e.stopPropagation(), ei());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [ei, s]),
        a.useEffect(
            () =>
                "editing" === H && null != K
                    ? void (0, y.YK)(K)
                    : ((0, y.jA)(),
                      () => {
                          (0, y.jA)();
                      }),
            [H, K],
        );
    let ea = a.useCallback(() => {
            P(new Set());
        }, []),
        es = S.size > 0,
        en = a.useCallback(() => {
            let e = G.filter((e) => S.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, i.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                ea(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [G, S, ea]),
        er = a.useCallback(async () => {
            let e = G.filter((e) => S.has(e.id));
            await z({ clips: e }), ea();
        }, [G, S, z, ea]),
        ed = a.useMemo(
            () => ({ selectedClipIds: S, toggleClipSelection: et, clearSelection: ea, isMultiSelectMode: es }),
            [S, et, ea, es],
        );
    return (0, i.jsx)(j.f5, {
        value: D,
        children: (0, i.jsx)(tx.Provider, {
            value: ed,
            children: (0, i.jsx)(c.N, {
                onClose: s,
                transitionState: L,
                ...M,
                children: (0, i.jsxs)("div", {
                    className: th.jT,
                    ref: V,
                    children: [
                        (0, i.jsxs)("div", {
                            className: n()(th.PD, "gallery" === H && th.vu),
                            "aria-hidden": "gallery" !== H,
                            children: [
                                (0, i.jsx)(tm, { clipsByGame: R, filteredClips: T, favoriteClips: _, allClips: G }),
                                (0, i.jsxs)("div", {
                                    className: th.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: th.$Q,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: J,
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: th.$s,
                                                    children: [
                                                        es &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(d.m, {
                                                                        text: W.intl.string(W.t.RDE0Sc),
                                                                        children: (0, i.jsx)(p.K, {
                                                                            onClick: er,
                                                                            icon: h.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": W.intl.string(W.t.RDE0Sc),
                                                                            loading: O,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(d.m, {
                                                                        text: W.intl.string(W.t.oyYWHE),
                                                                        children: (0, i.jsx)(p.K, {
                                                                            onClick: en,
                                                                            icon: x.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": W.intl.string(W.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(p.K, {
                                                            onClick: s,
                                                            icon: g.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": W.intl.string(W.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(e9, {
                                            onEdit: el,
                                            channelId: t,
                                            filteredClips: Z,
                                            totalClipCount: G.length,
                                            onClipClick: k,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: n()(th.jN, "editing" === H && th.vu),
                            "aria-hidden": "editing" !== H,
                            onTransitionEnd: () => {
                                "gallery" === H ? (U(null), Y(o.ip.HIDDEN)) : "editing" === H && Y(o.ip.ENTERED);
                            },
                            children:
                                null != $ &&
                                (0, i.jsxs)(N.p, {
                                    clip: $,
                                    modalContainerRef: V,
                                    children: [
                                        (0, i.jsx)(b.A, { transitionState: Q, onClose: ei }),
                                        (0, i.jsx)(A.A, { channelId: t, onClose: ei }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
