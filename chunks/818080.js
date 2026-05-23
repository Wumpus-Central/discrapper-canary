l.d(t, { $: () => tg, default: () => tv });
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
    w = l(834730),
    L = l(289873),
    M = l(139286),
    D = l(962125);
let S = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var P = l(449543),
    R = l(939249),
    T = l(27232),
    _ = l(505930),
    G = l(821609),
    z = l(933832),
    O = l(97808),
    H = l(778712),
    F = l(22231),
    K = l(429913),
    U = l(607470),
    $ = l(137177),
    B = l(495544),
    Q = l(287809),
    Y = l(372684),
    V = l(140423),
    X = l(602902),
    q = l(665039),
    W = l(16590),
    Z = l(375708),
    J = l(296364);
let ee = ["clowning around", "good times", "team vibes", "epic teamwork"];
function et(e) {
    let { clip: t, moment: l, onEdit: s } = e,
        n = (0, q.j)(t),
        { analyticsLocations: c } = (0, j.Ay)(),
        o = (0, K.h)(t.applicationId),
        u = B.default.getId(),
        g = (0, r.bG)([Q.default], () => {
            let e = t.users.find((e) => e !== u);
            return null != e ? Q.default.getUser(e) : null;
        }, [t.users, u]),
        v = null != g,
        { Icon: f } = l,
        C = v ? Z.intl.formatToPlainString(W.default.QJ7i8Z, { username: g.username }) : l.title,
        b = v ? ee[t.id.charCodeAt(0) % ee.length] : l.subtitle,
        A = t.type === Y.nQ.SCREENSHOT,
        N = t.type === Y.nQ.VOICE_CLIP,
        E = !A && !N && null != n,
        I = a.useRef(null),
        k = a.useCallback(() => {
            let e = I.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start]),
        L = a.useCallback(
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
        P = a.useCallback(() => {
            s(t);
        }, [s, t]),
        et = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, X.K)([t], { analyticsLocations: c });
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
                e.stopPropagation(), (0, V.R)({ clips: [t] });
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
        en = Z.intl.string(!0 === t.isFavorite ? W.default.IZsalP : W.default.ihBfyA);
    return (0, i.jsx)("div", {
        className: J.Ui,
        onMouseEnter: k,
        onMouseLeave: L,
        onFocus: M,
        onBlur: D,
        children: (0, i.jsxs)(R.D, {
            className: J.Nr,
            "aria-label": Z.intl.string(Z.t.bt75uw),
            onClick: P,
            children: [
                (0, i.jsxs)("div", {
                    className: J.hz,
                    children: [
                        "" !== t.thumbnail
                            ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: J.xn })
                            : (0, i.jsx)("div", { className: J.$$ }),
                        E
                            ? (0, i.jsx)(U.A, {
                                  preload: "none",
                                  poster: t.thumbnail,
                                  muted: !0,
                                  loop: !0,
                                  src: n ?? void 0,
                                  className: J.xn,
                                  ref: I,
                              })
                            : null,
                    ],
                }),
                (0, i.jsx)("div", { className: J.D7 }),
                null != o &&
                    (0, i.jsx)("div", {
                        className: J.uv,
                        "aria-hidden": "true",
                        children: (0, i.jsx)($.A, { game: o, size: $.M.XXSMALL, className: J.ns }),
                    }),
                (0, i.jsxs)("div", {
                    className: J.Nv,
                    children: [
                        es
                            ? (0, i.jsx)(
                                  d.m,
                                  {
                                      text: en,
                                      position: "top",
                                      children: (0, i.jsx)(p.K, {
                                          onClick: ea,
                                          icon: !0 === t.isFavorite ? T.G : _.y,
                                          "aria-label": en,
                                          variant: "overlay-secondary",
                                          size: "sm",
                                      }),
                                  },
                                  `${t.id}:favorite:${t.isFavorite}`,
                              )
                            : (0, i.jsx)(G.$, {
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: z.A,
                                  text: Z.intl.string(Z.t["R3BPH+"]),
                                  onClick: el,
                              }),
                        (0, i.jsx)(d.m, {
                            text: Z.intl.string(Z.t.oyYWHE),
                            position: "top",
                            children: (0, i.jsx)(p.K, {
                                onClick: ei,
                                icon: x.u,
                                "aria-label": Z.intl.string(Z.t.oyYWHE),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: J.Lw,
                    children: [
                        v && null != g
                            ? (0, i.jsx)(O.eu, {
                                  src: g.getAvatarURL(void 0, 32),
                                  size: H._3.SIZE_32,
                                  "aria-hidden": !0,
                              })
                            : (0, i.jsx)("div", {
                                  className: J.bG,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(f, { size: "md", color: "currentColor" }),
                              }),
                        (0, i.jsx)(m.D, { variant: "heading-md/extrabold", color: "always-white", children: C }),
                        (0, i.jsx)(w.E, { variant: "text-sm/medium", color: "always-white", children: b }),
                        (0, i.jsx)("div", { className: J.nP, "aria-hidden": "true" }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: J.o1,
                    children: [
                        (0, i.jsx)(G.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: F.R,
                            text: Z.intl.string(Z.t.bt75uw),
                            onClick: S,
                        }),
                        (0, i.jsx)(G.$, {
                            variant: "primary",
                            size: "sm",
                            icon: h.l,
                            text: Z.intl.string(Z.t.RDE0Sc),
                            onClick: et,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var el = l(175841),
    ei = l(369606),
    ea = l(845798),
    es = l(825860),
    en = l(926268);
let er = [
    { Icon: el.B, title: "LOL", subtitle: "lot of laughter" },
    { Icon: ei.O, title: "ACE", subtitle: "5 kills in 26 sec" },
    { Icon: ea.S, title: "WITH FRIENDS", subtitle: "clowning around" },
    { Icon: es.Y, title: "ON FIRE", subtitle: "3 wins in a row" },
    { Icon: T.G, title: "HIGHLIGHT", subtitle: "epic moment" },
    { Icon: en.C, title: "GOOD VIBES", subtitle: "fun with the squad" },
];
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var ec = l(452143);
function eo(e) {
    let { onEdit: t } = e,
        l = (0, r.yK)([C.A], () => C.A.getClips()),
        s = a.useMemo(() => ed(l), [l]),
        n = a.useMemo(
            () =>
                s
                    .map((e) => e.id)
                    .map((e) => {
                        let t = 0;
                        for (let l = 0; l < e.length; l++) t = (31 * t + e.charCodeAt(l)) | 0;
                        return er[Math.abs(t) % er.length];
                    }),
            [s],
        );
    return 0 === s.length
        ? null
        : (0, i.jsxs)("section", {
              className: ec.uW,
              "aria-label": Z.intl.string(W.default.efLpNC),
              children: [
                  (0, i.jsxs)("div", {
                      className: ec.wx,
                      children: [
                          (0, i.jsx)(w.E, {
                              variant: "text-lg/semibold",
                              color: "text-default",
                              children: Z.intl.string(W.default.I1h8uD),
                          }),
                          (0, i.jsx)(m.D, {
                              variant: "display-md",
                              color: "text-strong",
                              className: ec.R_,
                              children: Z.intl.string(W.default.efLpNC),
                          }),
                      ],
                  }),
                  (0, i.jsx)(P.A, {
                      className: ec.jG,
                      gap: 16,
                      edgeFade: 0,
                      hideActionsWhenDisabled: !0,
                      "aria-label": Z.intl.string(W.default.efLpNC),
                      children: s.map((e, l) => (0, i.jsx)(et, { clip: e, moment: n[l], onEdit: t }, e.id)),
                  }),
              ],
          });
}
var eu = l(989349),
    em = l.n(eu),
    ep = l(66455),
    eh = l(342952),
    ex = l(890856),
    eg = l(777666),
    ev = l(530005),
    ef = l(406810),
    ej = l(176781),
    eC = l(661531),
    ey = l(983851),
    eb = l(31300),
    eA = l(442433),
    eN = l(587895),
    eE = l(47167),
    eI = l(734057),
    ek = l(71393),
    ew = l(549685),
    eL = l(174459),
    eM = l(58703),
    eD = l(403362),
    eS = l(226421),
    eP = l(718812),
    eR = l(652215),
    eT = l(798594);
let e_ = function (e) {
    let { clip: t, actionsDisabled: s, isNew: d, onEdit: c, onClick: o } = e,
        u = (0, r.yK)([Q.default], () => t.users.map((e) => Q.default.getUser(e)).filter(eD.Vq)),
        m = (0, r.bG)([eI.A], () => (null != t.channelId ? eI.A.getChannel(t.channelId) : null)),
        p = (0, r.bG)([ek.A], () => (null != t.guildId ? ek.A.getGuild(t.guildId) : null)),
        { analyticsLocations: h } = (0, j.Ay)(f.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: v } = a.useContext(tg),
        [y, b] = a.useState(!1),
        A = a.useRef(null),
        N = (0, ep.A)(t.editMetadata?.start ?? 0),
        E = x.has(t.id),
        I = t.type === Y.nQ.SCREENSHOT,
        k = (0, eE.Ay)(m),
        L = "" === t.applicationName && null != k && "" !== k ? k : t.applicationName,
        M = (0, eM.Fe)(new Date(t.createdAt)),
        D = a.useMemo(() => {
            let e = [];
            return (
                t.type === Y.nQ.VOICE_CLIP
                    ? (p?.name != null && e.push(p.name), null != k && e.push(k))
                    : ("" !== L && null != L && e.push(L),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [L, p?.name, k, t.activity?.state, t.activity?.details, t.type]),
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
                              .filter(eD.Vq)
                        : [t];
                (0, eA.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([l.e("69006"), l.e("47105")]).then(l.bind(l, 325624));
                        return (l) =>
                            (0, i.jsx)(e, {
                                ...l,
                                clips: a,
                                actionsDisabled: s,
                                onShare: () => {
                                    eL.default.track(eR.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    c(t), eL.default.track(eR.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: S,
                                onAfterDelete: () => {
                                    eL.default.track(eR.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
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
        O = a.useCallback(
            (e) => {
                s ||
                    (e.shiftKey ? (e.preventDefault(), g(t.id)) : v ? g(t.id) : null != o && o(t),
                    eL.default.track(eR.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [s, v, g, t, o],
        );
    return (0, i.jsx)(j.f5, {
        value: h,
        children: (0, i.jsxs)(ex.s, {
            "aria-disabled": s,
            "aria-label": Z.intl.string(!0 === I ? Z.t["HO/oXl"] : Z.t.bt75uw),
            onClick: s ? void 0 : O,
            onContextMenu: z,
            className: n()(eT.QN, { [eT.r9]: s, [eT.in]: y, [eT.wH]: E }),
            onBlur: T,
            onFocus: P,
            onMouseOver: P,
            onMouseLeave: R,
            children: [
                (0, i.jsx)(eG, { clip: t, isNew: d, videoRef: A, onOpenContextMenu: G, actionsDisabled: s }),
                (0, i.jsxs)("div", {
                    className: eT.wI,
                    children: [
                        (0, i.jsx)(eH, { clip: t }),
                        (0, i.jsxs)("div", {
                            className: eT.i0,
                            children: [
                                (0, i.jsx)(ez, { clip: t }),
                                (0, i.jsx)(w.E, {
                                    className: eT.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: D,
                                }),
                                (0, i.jsx)(w.E, {
                                    className: eT.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: M,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: eT.jW,
                            children: (0, i.jsx)(eh.A, {
                                maxUsers: 3,
                                users: u,
                                size: H._3.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && P());
                                },
                                "aria-label": Z.intl.string(Z.t.WTozwe),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
function eG(e) {
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
            let a = em().duration(e),
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
        className: eT.QB,
        children: [
            (0, i.jsx)("div", { className: eT.ne }),
            !o && l && (0, i.jsx)(eg.Lp, { className: eT.Ad, text: Z.intl.string(Z.t.y2b7CA) }),
            !r &&
                (0, i.jsxs)("div", {
                    className: eT.g3,
                    children: [
                        (0, i.jsx)(
                            d.m,
                            {
                                text: Z.intl.string(t.isFavorite ? W.default.IZsalP : W.default.ihBfyA),
                                position: "top",
                                children: (0, i.jsx)(p.K, {
                                    onClick: g,
                                    icon: t.isFavorite ? T.G : _.y,
                                    "aria-label": Z.intl.string(Z.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, i.jsx)(p.K, {
                            onClick: v,
                            icon: ev.F,
                            "aria-label": Z.intl.string(Z.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, i.jsx)(eO, { clip: t, videoRef: s }),
            (0, i.jsxs)("div", {
                className: eT.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, i.jsxs)("div", {
                            className: eT.OH,
                            children: [
                                t.isTemporary && (0, i.jsx)(ef.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(w.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: Z.intl.string(Z.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, i.jsxs)("div", {
                            className: eT.OH,
                            children: [
                                x && (0, i.jsx)(ew.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(w.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: o ? Z.intl.string(Z.t["2Fp7OP"]) : h,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                u > 0 &&
                (0, i.jsx)("div", {
                    className: eT.X7,
                    children: (0, i.jsx)("div", { className: eT.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function ez(e) {
    let { clip: t } = e,
        l = (0, eP.h)(t),
        a = "" !== l;
    return (0, i.jsx)(w.E, {
        className: eT.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function eO(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, q.j)(t),
        s = t.type === Y.nQ.SCREENSHOT;
    return t.type === Y.nQ.VOICE_CLIP
        ? (0, i.jsx)(eS.A, { className: eT.fT })
        : s
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eT.fT })
          : null != a
            ? (0, i.jsx)(U.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: eT.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eT.fT })
              : (0, i.jsx)("div", {
                    className: n()(eT.fT, eT.Is),
                    children: (0, i.jsx)(ej.x, { color: eC.A.colors.ICON_MUTED }),
                });
}
function eH(e) {
    let { clip: t } = e,
        l = (0, r.bG)([eN.A], () => (null != t.applicationId ? eN.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: eT.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: eT.NH })
                : t.type === Y.nQ.VOICE_CLIP
                  ? (0, i.jsx)(ey.H, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)(eb.k, { size: "sm", color: "currentColor" }),
    });
}
function eF(e) {
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
var eK = l(702841),
    eU = l(687966),
    e$ = l(475358),
    eB = l(123292),
    eQ = l(292801),
    eY = l(780964),
    eV = l(766075),
    eX = l(532624),
    eq = l(350535),
    eW = l(572164),
    eZ = l(953932),
    eJ = l(311162);
function e0(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: eJ.Nr,
        children: [t, (0, i.jsx)(w.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function e2() {
    let e = (0, eK.bG)([eX.Ay], () => eX.Ay.getKeybindForAction(eR.hCu.SAVE_CLIP)),
        t = null != e ? eq.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: eJ.kR,
        children: [
            (0, i.jsx)(e0, {
                header: (0, i.jsx)(eU._, { size: "refresh_sm", color: eC.A.colors.ICON_DEFAULT }),
                description: Z.intl.string(W.default["4K56sP"]),
            }),
            (0, i.jsx)(e0, {
                header: null != t ? (0, i.jsx)(e$.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  Z.intl.format(W.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: eJ.JH,
                                      children: (0, i.jsx)(eB.Q, {
                                          text: Z.intl.string(W.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, eV.openUserSettings)(eY.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : Z.intl.string(W.default.HOUDUm),
            }),
            (0, i.jsx)(e0, {
                header: (0, i.jsx)(eQ.t, { size: "refresh_sm", color: eC.A.colors.ICON_DEFAULT }),
                description: Z.intl.string(W.default.DLzdl7),
            }),
        ],
    });
}
function e3(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eW.Et)();
    return (0, i.jsx)("div", {
        className: eJ.kL,
        children: (0, i.jsxs)("div", {
            className: eJ.Qs,
            children: [
                (0, i.jsx)(eF, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(m.D, {
                    className: eJ.wx,
                    variant: "heading-xl/semibold",
                    children: t ? Z.intl.string(W.default["+M2iLf"]) : Z.intl.string(W.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(w.E, {
                        className: eJ.h_,
                        variant: "text-md/medium",
                        children: Z.intl.string(W.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: eJ.SO, children: (0, i.jsx)(eZ.A, {}) }),
                l && !t && (0, i.jsx)(e2, {}),
            ],
        }),
    });
}
let e1 = 16 / 9;
var e7 = l(792852),
    e6 = l(352528);
let e5 = [0, 16, 0, 16],
    e8 = e5[1] + e5[3];
function e9(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: s, onEdit: n } = e,
        [d, c] = a.useState(!0),
        [o, u] = a.useState({ width: 0, height: 0 }),
        p = (0, r.bG)([C.A], () => C.A.getSettings().storageLocation),
        h = (0, r.yK)([C.A], () => C.A.getNewClipIds()),
        x = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0),
        g = (0, r.bG)([C.A], () => ed(C.A.getClips()).length > 0),
        v = (0, e7.P)((e) => e.selectedGameId),
        { enableAutoClipsReview: f } = S.useConfig({ location: "ClipsGalleryContent" }),
        j = f && g && null == v;
    (0, M.A)(
        {
            type: k.ImpressionTypes.MODAL,
            name: k.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: d },
        [t.length, d],
    );
    let b = a.useMemo(() => {
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
                    title: Z.intl.string(Z.t["kB2R/0"]),
                    description: t ? Z.intl.string(Z.t["6AXirz"]) : void 0,
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
        { width: A } = o,
        { tileWidth: N, columns: E } = a.useMemo(() => {
            var e, l;
            let i, a, s;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = A - e8) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (s = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: s }
            );
        }, [t.length, A]);
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
    let I = a.useMemo(() => b.map((e) => Math.ceil(e.clips.length / E)), [b, E]),
        P = a.useMemo(() => I.reduce((e, t) => e + t, 0), [I]),
        R = Math.floor(N / e1),
        T = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = b[l];
                if (null == r) return null;
                let d = a * E,
                    c = r.clips.slice(d, d + E);
                return (0, i.jsx)(
                    "div",
                    {
                        className: e6.UX,
                        children: c.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { width: N },
                                    children: (0, i.jsx)(e_, {
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
            [b, E, N, x, h, s, n],
        ),
        _ = a.useCallback(
            (e) => {
                let t = b[e];
                return t?.description != null ? 66 : 44;
            },
            [b],
        ),
        G = a.useCallback(
            (e) => {
                let t = b[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: e6.aE,
                              children: [
                                  (0, i.jsx)(m.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, i.jsx)(w.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: e6.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [b],
        );
    return d || 0 !== b.length
        ? d
            ? (0, i.jsx)("div", { className: e6.dc, children: (0, i.jsx)(L.y, {}) })
            : (0, i.jsx)(D.A, {
                  listPadding: e5,
                  renderListHeader: j ? () => (0, i.jsx)(eo, { onEdit: n }) : void 0,
                  listHeaderHeight: 520 * !!j,
                  renderRow: T,
                  renderSectionHeader: G,
                  rowCount: P,
                  rowCountBySection: I,
                  rowHeight: R + 68 + 16,
                  sectionHeaderHeight: _,
                  onResize: u,
              })
        : (0, i.jsx)(e3, { isEmptyBecauseQuery: l > 0 });
}
var e4 = l(922016),
    te = l(783977),
    tt = l(625903),
    tl = l(892547),
    ti = l(364522),
    ta = l(91871),
    ts = l.n(ta),
    tn = l(980707),
    tr = l(477782),
    td = l(583650);
function tc(e) {
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
        } = (0, e7.P)(),
        g = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = Q.default.getUser(e);
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
                        let t = ek.A.getGuild(e);
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
            () => (0 === C.trim().length ? g : g.filter((e) => ts()(C.toLowerCase(), e.name.toLowerCase()))),
            [g, C],
        ),
        k = a.useMemo(
            () => (0 === b.trim().length ? f : f.filter((e) => ts()(b.toLowerCase(), e.name.toLowerCase()))),
            [f, b],
        ),
        w = a.useMemo(
            () => (0 === N.trim().length ? v : v.filter((e) => ts()(N.toLowerCase(), e.toLowerCase()))),
            [v, N],
        ),
        L = s.size > 0 || null != n || null != r || null != d,
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
    return (0, i.jsxs)(tn.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": Z.intl.string(Z.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(tr.rX, {
                label: "Filter",
                children: [
                    g.length > 0 &&
                        (0, i.jsxs)(tr.Dr, {
                            id: "participants",
                            label: Z.intl.string(Z.t.YQ6dJg),
                            subtext: M,
                            children: [
                                g.length > 20 &&
                                    (0, i.jsx)(tr.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(td.V, {
                                                ...e,
                                                query: C,
                                                onChange: y,
                                                ref: t,
                                                placeholder: Z.intl.string(Z.t["5h0QOP"]),
                                            }),
                                    }),
                                I.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tr.sL,
                                        { id: `participant-${t}`, label: l, action: () => o(t), checked: s.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    f.length > 0 &&
                        (0, i.jsxs)(tr.Dr, {
                            id: "servers",
                            label: Z.intl.string(Z.t["5qyruI"]),
                            subtext: D,
                            children: [
                                f.length > 20 &&
                                    (0, i.jsx)(tr.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(td.V, {
                                                ...e,
                                                query: b,
                                                onChange: A,
                                                ref: t,
                                                placeholder: Z.intl.string(Z.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tr.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: Z.intl.string(Z.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                k.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tr.iD,
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
                        (0, i.jsxs)(tr.Dr, {
                            id: "activities",
                            label: Z.intl.string(Z.t.agRtPG),
                            subtext: S,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(tr.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(td.V, {
                                                ...e,
                                                query: N,
                                                onChange: E,
                                                ref: t,
                                                placeholder: Z.intl.string(Z.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tr.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: Z.intl.string(Z.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == n,
                                }),
                                w.map((e) =>
                                    (0, i.jsx)(
                                        tr.iD,
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
                        (0, i.jsxs)(tr.Dr, {
                            id: "years",
                            label: Z.intl.string(Z.t.w9zd68),
                            subtext: P,
                            children: [
                                (0, i.jsx)(tr.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: Z.intl.string(Z.t["2/yeUU"]),
                                    action: () => p(null),
                                    checked: null == d,
                                }),
                                j.map((e) =>
                                    (0, i.jsx)(
                                        tr.iD,
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
            (0, i.jsxs)(tr.rX, {
                label: Z.intl.string(Z.t.XvNMNk),
                children: [
                    (0, i.jsx)(tr.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: Z.intl.string(Z.t["4LLKx3"]),
                        action: () => h("descending"),
                        checked: "descending" === c,
                    }),
                    (0, i.jsx)(tr.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: Z.intl.string(Z.t["0gitSE"]),
                        action: () => h("ascending"),
                        checked: "ascending" === c,
                    }),
                ],
            }),
            L &&
                (0, i.jsx)(tr.rX, {
                    children: (0, i.jsx)(tr.Dr, { id: "clear-filters", label: Z.intl.string(Z.t.FbDgiu), action: x }),
                }),
        ],
    });
}
var to = l(174726);
let tu = a.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: s } = (0, e7.P)(),
            n = (0, eK.bG)([eX.Ay], () => eX.Ay.getKeybindForAction(eR.hCu.SAVE_CLIP)),
            r = (0, e7.P)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            c = a.useCallback(() => {
                (0, eV.openUserSettings)(eY.X.CLIPS_PANEL);
            }, []),
            o = a.useCallback(() => s(""), [s]),
            u = null != n ? eq.dI(n.shortcut, !0) : null,
            h = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: to.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: to.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: to.Pe,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: Z.intl.string(Z.t.z2jK6X),
                                }),
                                null != u && (0, i.jsx)(e$.e, { className: to.P, shortcut: u }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: to.$s,
                            children: [
                                (0, i.jsx)(d.m, {
                                    text: Z.intl.string(Z.t.X7yRDm),
                                    children: (0, i.jsx)(e4.Y, {
                                        position: "bottom",
                                        targetElementRef: h,
                                        renderPopout: (e) => (0, i.jsx)(tc, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, i.jsx)("div", {
                                                ref: h,
                                                children:
                                                    r > 0
                                                        ? (0, i.jsx)(G.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: Z.intl.formatToPlainString(W.default.JbyR1U, {
                                                                  count: r,
                                                              }),
                                                              icon: te.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, i.jsx)(p.K, {
                                                              icon: te.R,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": Z.intl.string(Z.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, i.jsx)(d.m, {
                                    text: Z.intl.string(Z.t["3D5yo/"]),
                                    children: (0, i.jsx)(p.K, {
                                        onClick: c,
                                        icon: tt.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": Z.intl.string(Z.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: to.MT,
                    children: (0, i.jsx)(tl.I, {
                        placeholder: Z.intl.string(Z.t["5h0QOP"]),
                        query: l,
                        onChange: s,
                        onClear: o,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    tm = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: s, onClick: r } = e;
        return (0, i.jsxs)(R.D, {
            className: n()(to.MV, { [to.wH]: s }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: to.tk,
                    children: [
                        a,
                        (0, i.jsx)(w.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: to.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: to.z2,
                    children: (0, i.jsx)(w.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tp(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: s, allClips: n } = e,
        r = (0, e7.P)((e) => e.selectedGameId),
        d = (0, e7.P)((e) => e.setSelectedGameId),
        c = a.useMemo(() => t.map((e) => e.applicationId), [t]),
        o = (0, K.A)(c),
        u = a.useCallback(() => d(null), [d]),
        p = a.useCallback(() => d("favorites"), [d]),
        h = a.useMemo(() => new Map(o.map((e) => [e?.id, e])), [o]);
    return (0, i.jsxs)("div", {
        className: to.pz,
        children: [
            (0, i.jsx)(tu, { allClips: n }),
            (0, i.jsxs)("div", {
                className: to.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: to.om,
                        children: (0, i.jsxs)("div", {
                            className: to.Ep,
                            children: [
                                (0, i.jsx)(tm, {
                                    name: Z.intl.string(Z.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, i.jsx)(ej.x, {}),
                                    isSelected: null === r,
                                    onClick: u,
                                }),
                                (0, i.jsx)(tm, {
                                    name: Z.intl.string(Z.t["9rlCk1"]),
                                    count: s.length,
                                    icon: (0, i.jsx)(T.G, {}),
                                    isSelected: "favorites" === r,
                                    onClick: p,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, i.jsxs)(ti.Ip, {
                            className: to.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: to.a9,
                                    children: Z.intl.string(Z.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: to.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: a } = e;
                                        return (0, i.jsx)(
                                            tm,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, i.jsx)($.A, { game: h.get(a), size: $.M.XSMALL }),
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
var th = l(409067),
    tx = l(847455);
let tg = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function tv(e) {
    let { channelId: t, onClose: s, onClipClick: k, transitionState: w, initialEditingClipId: L, ...M } = e;
    (0, I.A)();
    let { analyticsLocations: D } = (0, j.Ay)(f.A.CLIPS_GALLERY),
        [S, P] = a.useState(new Set()),
        { clipsByGame: R, filteredClips: T, favoriteClips: _, allClips: G } = (0, th.a)(),
        { onShareClick: z } = (0, E.A)(t),
        O = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0),
        [H, F] = a.useState(null != L ? "editing" : "gallery"),
        [K, U] = a.useState(L ?? null),
        $ = (0, r.bG)([C.A], () => (null != K ? C.A.getClipById(K) : null), [K]),
        B = a.useRef(H);
    (B.current = H), (a.useRef(K).current = K);
    let [Q, Y] = a.useState(null != L ? o.ip.ENTERED : o.ip.HIDDEN),
        V = a.useRef(null),
        X = (0, e7.P)((e) => e.selectedGameId),
        q = a.useMemo(
            () => (null == X || "favorites" === X ? null : (R.find((e) => e.applicationId === X) ?? null)),
            [X, R],
        ),
        W = a.useMemo(() => ("favorites" === X ? _ : (q?.filteredClips ?? T)), [X, q, T, _]),
        J = a.useMemo(
            () => ("favorites" === X ? Z.intl.string(Z.t["9rlCk1"]) : (q?.name ?? Z.intl.string(Z.t.dPVrEv))),
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
        children: (0, i.jsx)(tg.Provider, {
            value: ed,
            children: (0, i.jsx)(c.N, {
                onClose: s,
                transitionState: w,
                ...M,
                children: (0, i.jsxs)("div", {
                    className: tx.jT,
                    ref: V,
                    children: [
                        (0, i.jsxs)("div", {
                            className: n()(tx.PD, "gallery" === H && tx.vu),
                            "aria-hidden": "gallery" !== H,
                            children: [
                                (0, i.jsx)(tp, { clipsByGame: R, filteredClips: T, favoriteClips: _, allClips: G }),
                                (0, i.jsxs)("div", {
                                    className: tx.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: tx.$Q,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: J,
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: tx.$s,
                                                    children: [
                                                        es &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(d.m, {
                                                                        text: Z.intl.string(Z.t.RDE0Sc),
                                                                        children: (0, i.jsx)(p.K, {
                                                                            onClick: er,
                                                                            icon: h.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": Z.intl.string(Z.t.RDE0Sc),
                                                                            loading: O,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(d.m, {
                                                                        text: Z.intl.string(Z.t.oyYWHE),
                                                                        children: (0, i.jsx)(p.K, {
                                                                            onClick: en,
                                                                            icon: x.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": Z.intl.string(Z.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(p.K, {
                                                            onClick: s,
                                                            icon: g.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": Z.intl.string(Z.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(e9, {
                                            onEdit: el,
                                            channelId: t,
                                            filteredClips: W,
                                            totalClipCount: G.length,
                                            onClipClick: k,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: n()(tx.jN, "editing" === H && tx.vu),
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
