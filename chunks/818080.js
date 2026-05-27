l.d(t, { $: () => tv, default: () => tf });
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
    R = l(152858),
    T = l(939249),
    _ = l(27232),
    G = l(505930),
    z = l(821609),
    O = l(933832),
    H = l(97808),
    U = l(778712),
    F = l(22231),
    K = l(429913),
    $ = l(607470),
    B = l(137177),
    Q = l(495544),
    Y = l(287809),
    V = l(372684),
    X = l(140423),
    q = l(602902),
    W = l(665039),
    Z = l(16590),
    J = l(375708),
    ee = l(296364);
let et = ["clowning around", "good times", "team vibes", "epic teamwork"];
function el(e) {
    let { clip: t, moment: l, onEdit: s } = e,
        n = (0, W.j)(t),
        { analyticsLocations: c } = (0, j.Ay)(),
        o = (0, K.h)(t.applicationId),
        u = Q.default.getId(),
        g = (0, r.bG)([Y.default], () => {
            let e = t.users.find((e) => e !== u);
            return null != e ? Y.default.getUser(e) : null;
        }, [t.users, u]),
        v = null != g,
        { Icon: f } = l,
        C = v ? J.intl.formatToPlainString(Z.default.QJ7i8Z, { username: g.username }) : l.title,
        b = v ? et[t.id.charCodeAt(0) % et.length] : l.subtitle,
        A = t.type === V.nQ.SCREENSHOT,
        N = t.type === V.nQ.VOICE_CLIP,
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
        R = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, q.K)([t], { analyticsLocations: c });
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
                e.stopPropagation(), (0, X.R)({ clips: [t] });
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
        en = J.intl.string(!0 === t.isFavorite ? Z.default.IZsalP : Z.default.ihBfyA);
    return (0, i.jsx)("div", {
        className: ee.Ui,
        onMouseEnter: k,
        onMouseLeave: L,
        onFocus: M,
        onBlur: D,
        children: (0, i.jsxs)(T.D, {
            className: ee.Nr,
            "aria-label": J.intl.string(J.t.bt75uw),
            onClick: P,
            children: [
                (0, i.jsxs)("div", {
                    className: ee.hz,
                    children: [
                        "" !== t.thumbnail
                            ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: ee.xn })
                            : (0, i.jsx)("div", { className: ee.$$ }),
                        E
                            ? (0, i.jsx)($.A, {
                                  preload: "none",
                                  poster: t.thumbnail,
                                  muted: !0,
                                  loop: !0,
                                  src: n ?? void 0,
                                  className: ee.xn,
                                  ref: I,
                              })
                            : null,
                    ],
                }),
                (0, i.jsx)("div", { className: ee.D7 }),
                null != o &&
                    (0, i.jsx)("div", {
                        className: ee.uv,
                        "aria-hidden": "true",
                        children: (0, i.jsx)(B.A, { game: o, size: B.M.XXSMALL, className: ee.ns }),
                    }),
                (0, i.jsxs)("div", {
                    className: ee.Nv,
                    children: [
                        es
                            ? (0, i.jsx)(
                                  d.m,
                                  {
                                      text: en,
                                      position: "top",
                                      children: (0, i.jsx)(p.K, {
                                          onClick: ea,
                                          icon: !0 === t.isFavorite ? _.G : G.y,
                                          "aria-label": en,
                                          variant: "overlay-secondary",
                                          size: "sm",
                                      }),
                                  },
                                  `${t.id}:favorite:${t.isFavorite}`,
                              )
                            : (0, i.jsx)(z.$, {
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: O.A,
                                  text: J.intl.string(J.t["R3BPH+"]),
                                  onClick: el,
                              }),
                        (0, i.jsx)(d.m, {
                            text: J.intl.string(J.t.oyYWHE),
                            position: "top",
                            children: (0, i.jsx)(p.K, {
                                onClick: ei,
                                icon: x.u,
                                "aria-label": J.intl.string(J.t.oyYWHE),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ee.Lw,
                    children: [
                        v && null != g
                            ? (0, i.jsx)(H.eu, {
                                  src: g.getAvatarURL(void 0, 32),
                                  size: U._3.SIZE_32,
                                  "aria-hidden": !0,
                              })
                            : (0, i.jsx)("div", {
                                  className: ee.bG,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(f, { size: "md", color: "currentColor" }),
                              }),
                        (0, i.jsx)(m.D, { variant: "heading-md/extrabold", color: "always-white", children: C }),
                        (0, i.jsx)(w.E, { variant: "text-sm/medium", color: "always-white", children: b }),
                        (0, i.jsx)("div", { className: ee.nP, "aria-hidden": "true" }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ee.o1,
                    children: [
                        (0, i.jsx)(z.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: F.R,
                            text: J.intl.string(J.t.bt75uw),
                            onClick: S,
                        }),
                        (0, i.jsx)(z.$, {
                            variant: "primary",
                            size: "sm",
                            icon: h.l,
                            text: J.intl.string(J.t.RDE0Sc),
                            onClick: R,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ei = l(175841),
    ea = l(369606),
    es = l(845798),
    en = l(825860),
    er = l(926268);
let ed = [
    { Icon: ei.B, title: "LOL", subtitle: "lot of laughter" },
    { Icon: ea.O, title: "ACE", subtitle: "5 kills in 26 sec" },
    { Icon: es.S, title: "WITH FRIENDS", subtitle: "clowning around" },
    { Icon: en.Y, title: "ON FIRE", subtitle: "3 wins in a row" },
    { Icon: _.G, title: "HIGHLIGHT", subtitle: "epic moment" },
    { Icon: er.C, title: "GOOD VIBES", subtitle: "fun with the squad" },
];
function ec(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var eo = l(452143);
function eu(e) {
    let { onEdit: t } = e,
        l = (0, r.yK)([C.A], () => C.A.getClips()),
        s = a.useMemo(() => ec(l), [l]),
        n = a.useMemo(
            () =>
                s
                    .map((e) => e.id)
                    .map((e) => {
                        let t = 0;
                        for (let l = 0; l < e.length; l++) t = (31 * t + e.charCodeAt(l)) | 0;
                        return ed[Math.abs(t) % ed.length];
                    }),
            [s],
        );
    return 0 === s.length
        ? null
        : (0, i.jsxs)("section", {
              className: eo.uW,
              "aria-label": J.intl.string(Z.default.efLpNC),
              children: [
                  (0, i.jsxs)("div", {
                      className: eo.wx,
                      children: [
                          (0, i.jsx)(w.E, {
                              variant: "text-lg/semibold",
                              color: "text-default",
                              children: J.intl.string(Z.default.I1h8uD),
                          }),
                          (0, i.jsx)(m.D, {
                              variant: "display-md",
                              color: "text-strong",
                              className: eo.R_,
                              children: J.intl.string(Z.default.efLpNC),
                          }),
                      ],
                  }),
                  (0, i.jsx)(P.A, {
                      className: eo.jG,
                      gap: 16,
                      edgeFade: 0,
                      scrollBehavior: R.Uf.ITEM,
                      hideActionsWhenDisabled: !0,
                      "aria-label": J.intl.string(Z.default.efLpNC),
                      children: s.map((e, l) => (0, i.jsx)(el, { clip: e, moment: n[l], onEdit: t }, e.id)),
                  }),
              ],
          });
}
var em = l(989349),
    ep = l.n(em),
    eh = l(66455),
    ex = l(342952),
    eg = l(890856),
    ev = l(777666),
    ef = l(530005),
    ej = l(406810),
    eC = l(176781),
    ey = l(661531),
    eb = l(983851),
    eA = l(31300),
    eN = l(442433),
    eE = l(587895),
    eI = l(47167),
    ek = l(734057),
    ew = l(71393),
    eL = l(549685),
    eM = l(174459),
    eD = l(58703),
    eS = l(403362),
    eP = l(226421),
    eR = l(718812),
    eT = l(652215),
    e_ = l(798594);
let eG = function (e) {
    let { clip: t, actionsDisabled: s, isNew: d, onEdit: c, onClick: o } = e,
        u = (0, r.yK)([Y.default], () => t.users.map((e) => Y.default.getUser(e)).filter(eS.Vq)),
        m = (0, r.bG)([ek.A], () => (null != t.channelId ? ek.A.getChannel(t.channelId) : null)),
        p = (0, r.bG)([ew.A], () => (null != t.guildId ? ew.A.getGuild(t.guildId) : null)),
        { analyticsLocations: h } = (0, j.Ay)(f.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: v } = a.useContext(tv),
        [y, b] = a.useState(!1),
        A = a.useRef(null),
        N = (0, eh.A)(t.editMetadata?.start ?? 0),
        E = x.has(t.id),
        I = t.type === V.nQ.SCREENSHOT,
        k = (0, eI.Ay)(m),
        L = "" === t.applicationName && null != k && "" !== k ? k : t.applicationName,
        M = (0, eD.Fe)(new Date(t.createdAt)),
        D = a.useMemo(() => {
            let e = [];
            return (
                t.type === V.nQ.VOICE_CLIP
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
                              .filter(eS.Vq)
                        : [t];
                (0, eN.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("4042"),
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
                                actionsDisabled: s,
                                onShare: () => {
                                    eM.default.track(eT.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    c(t), eM.default.track(eT.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: S,
                                onAfterDelete: () => {
                                    eM.default.track(eT.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
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
                    eM.default.track(eT.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [s, v, g, t, o],
        );
    return (0, i.jsx)(j.f5, {
        value: h,
        children: (0, i.jsxs)(eg.s, {
            "aria-disabled": s,
            "aria-label": J.intl.string(!0 === I ? J.t["HO/oXl"] : J.t.bt75uw),
            onClick: s ? void 0 : O,
            onContextMenu: z,
            className: n()(e_.QN, { [e_.r9]: s, [e_.in]: y, [e_.wH]: E }),
            onBlur: T,
            onFocus: P,
            onMouseOver: P,
            onMouseLeave: R,
            children: [
                (0, i.jsx)(ez, { clip: t, isNew: d, videoRef: A, onOpenContextMenu: G, actionsDisabled: s }),
                (0, i.jsxs)("div", {
                    className: e_.wI,
                    children: [
                        (0, i.jsx)(eU, { clip: t }),
                        (0, i.jsxs)("div", {
                            className: e_.i0,
                            children: [
                                (0, i.jsx)(eO, { clip: t }),
                                (0, i.jsx)(w.E, {
                                    className: e_.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: D,
                                }),
                                (0, i.jsx)(w.E, {
                                    className: e_.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: M,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: e_.jW,
                            children: (0, i.jsx)(ex.A, {
                                maxUsers: 3,
                                users: u,
                                size: U._3.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && P());
                                },
                                "aria-label": J.intl.string(J.t.WTozwe),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
function ez(e) {
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
            let a = ep().duration(e),
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
        className: e_.QB,
        children: [
            (0, i.jsx)("div", { className: e_.ne }),
            !o && l && (0, i.jsx)(ev.Lp, { className: e_.Ad, text: J.intl.string(J.t.y2b7CA) }),
            !r &&
                (0, i.jsxs)("div", {
                    className: e_.g3,
                    children: [
                        (0, i.jsx)(
                            d.m,
                            {
                                text: J.intl.string(t.isFavorite ? Z.default.IZsalP : Z.default.ihBfyA),
                                position: "top",
                                children: (0, i.jsx)(p.K, {
                                    onClick: g,
                                    icon: t.isFavorite ? _.G : G.y,
                                    "aria-label": J.intl.string(J.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, i.jsx)(p.K, {
                            onClick: v,
                            icon: ef.F,
                            "aria-label": J.intl.string(J.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, i.jsx)(eH, { clip: t, videoRef: s }),
            (0, i.jsxs)("div", {
                className: e_.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, i.jsxs)("div", {
                            className: e_.OH,
                            children: [
                                t.isTemporary && (0, i.jsx)(ej.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(w.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: J.intl.string(J.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, i.jsxs)("div", {
                            className: e_.OH,
                            children: [
                                x && (0, i.jsx)(eL.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(w.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: o ? J.intl.string(J.t["2Fp7OP"]) : h,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                u > 0 &&
                (0, i.jsx)("div", {
                    className: e_.X7,
                    children: (0, i.jsx)("div", { className: e_.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function eO(e) {
    let { clip: t } = e,
        l = (0, eR.h)(t),
        a = "" !== l;
    return (0, i.jsx)(w.E, {
        className: e_.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function eH(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, W.j)(t),
        s = t.type === V.nQ.SCREENSHOT;
    return t.type === V.nQ.VOICE_CLIP
        ? (0, i.jsx)(eP.A, { className: e_.fT })
        : s
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: e_.fT })
          : null != a
            ? (0, i.jsx)($.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: e_.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: e_.fT })
              : (0, i.jsx)("div", {
                    className: n()(e_.fT, e_.Is),
                    children: (0, i.jsx)(eC.x, { color: ey.A.colors.ICON_MUTED }),
                });
}
function eU(e) {
    let { clip: t } = e,
        l = (0, r.bG)([eE.A], () => (null != t.applicationId ? eE.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: e_.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: e_.NH })
                : t.type === V.nQ.VOICE_CLIP
                  ? (0, i.jsx)(eb.H, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)(eA.k, { size: "sm", color: "currentColor" }),
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
    e$ = l(687966),
    eB = l(475358),
    eQ = l(123292),
    eY = l(292801),
    eV = l(780964),
    eX = l(766075),
    eq = l(532624),
    eW = l(350535),
    eZ = l(572164),
    eJ = l(953932),
    e0 = l(311162);
function e2(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: e0.Nr,
        children: [t, (0, i.jsx)(w.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function e1() {
    let e = (0, eK.bG)([eq.Ay], () => eq.Ay.getKeybindForAction(eT.hCu.SAVE_CLIP)),
        t = null != e ? eW.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: e0.kR,
        children: [
            (0, i.jsx)(e2, {
                header: (0, i.jsx)(e$._, { size: "refresh_sm", color: ey.A.colors.ICON_DEFAULT }),
                description: J.intl.string(Z.default["4K56sP"]),
            }),
            (0, i.jsx)(e2, {
                header: null != t ? (0, i.jsx)(eB.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  J.intl.format(Z.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: e0.JH,
                                      children: (0, i.jsx)(eQ.Q, {
                                          text: J.intl.string(Z.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, eX.openUserSettings)(eV.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : J.intl.string(Z.default.HOUDUm),
            }),
            (0, i.jsx)(e2, {
                header: (0, i.jsx)(eY.t, { size: "refresh_sm", color: ey.A.colors.ICON_DEFAULT }),
                description: J.intl.string(Z.default.DLzdl7),
            }),
        ],
    });
}
function e3(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eZ.Et)();
    return (0, i.jsx)("div", {
        className: e0.kL,
        children: (0, i.jsxs)("div", {
            className: e0.Qs,
            children: [
                (0, i.jsx)(eF, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(m.D, {
                    className: e0.wx,
                    variant: "heading-xl/semibold",
                    children: t ? J.intl.string(Z.default["+M2iLf"]) : J.intl.string(Z.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(w.E, {
                        className: e0.h_,
                        variant: "text-md/medium",
                        children: J.intl.string(Z.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: e0.SO, children: (0, i.jsx)(eJ.A, {}) }),
                l && !t && (0, i.jsx)(e1, {}),
            ],
        }),
    });
}
let e7 = 16 / 9;
var e6 = l(792852),
    e5 = l(352528);
let e8 = [0, 16, 0, 16],
    e9 = e8[1] + e8[3];
function e4(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: s, onEdit: n } = e,
        [d, c] = a.useState(!0),
        [o, u] = a.useState({ width: 0, height: 0 }),
        p = (0, r.bG)([C.A], () => C.A.getSettings().storageLocation),
        h = (0, r.yK)([C.A], () => C.A.getNewClipIds()),
        x = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0),
        g = (0, r.bG)([C.A], () => ec(C.A.getClips()).length > 0),
        v = (0, e6.P)((e) => e.selectedGameId),
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
                    title: J.intl.string(J.t["kB2R/0"]),
                    description: t ? J.intl.string(J.t["6AXirz"]) : void 0,
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
                (i = Math.max(1, Math.floor(((l = A - e9) + 16) / 336))),
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
        R = Math.floor(N / e7),
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
                        className: e5.UX,
                        children: c.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { width: N },
                                    children: (0, i.jsx)(eG, {
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
                              className: e5.aE,
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
                                          className: e5.yV,
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
            ? (0, i.jsx)("div", { className: e5.dc, children: (0, i.jsx)(L.y, {}) })
            : (0, i.jsx)(D.A, {
                  listPadding: e8,
                  renderListHeader: j ? () => (0, i.jsx)(eu, { onEdit: n }) : void 0,
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
var te = l(922016),
    tt = l(783977),
    tl = l(625903),
    ti = l(892547),
    ta = l(364522),
    ts = l(91871),
    tn = l.n(ts),
    tr = l(980707),
    td = l(477782),
    tc = l(583650);
function to(e) {
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
        } = (0, e6.P)(),
        g = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = Y.default.getUser(e);
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
                        let t = ew.A.getGuild(e);
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
            () => (0 === C.trim().length ? g : g.filter((e) => tn()(C.toLowerCase(), e.name.toLowerCase()))),
            [g, C],
        ),
        k = a.useMemo(
            () => (0 === b.trim().length ? f : f.filter((e) => tn()(b.toLowerCase(), e.name.toLowerCase()))),
            [f, b],
        ),
        w = a.useMemo(
            () => (0 === N.trim().length ? v : v.filter((e) => tn()(N.toLowerCase(), e.toLowerCase()))),
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
    return (0, i.jsxs)(tr.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": J.intl.string(J.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(td.rX, {
                label: "Filter",
                children: [
                    g.length > 0 &&
                        (0, i.jsxs)(td.Dr, {
                            id: "participants",
                            label: J.intl.string(J.t.YQ6dJg),
                            subtext: M,
                            children: [
                                g.length > 20 &&
                                    (0, i.jsx)(td.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tc.V, {
                                                ...e,
                                                query: C,
                                                onChange: y,
                                                ref: t,
                                                placeholder: J.intl.string(J.t["5h0QOP"]),
                                            }),
                                    }),
                                I.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        td.sL,
                                        { id: `participant-${t}`, label: l, action: () => o(t), checked: s.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    f.length > 0 &&
                        (0, i.jsxs)(td.Dr, {
                            id: "servers",
                            label: J.intl.string(J.t["5qyruI"]),
                            subtext: D,
                            children: [
                                f.length > 20 &&
                                    (0, i.jsx)(td.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tc.V, {
                                                ...e,
                                                query: b,
                                                onChange: A,
                                                ref: t,
                                                placeholder: J.intl.string(J.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(td.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: J.intl.string(J.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                k.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        td.iD,
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
                        (0, i.jsxs)(td.Dr, {
                            id: "activities",
                            label: J.intl.string(J.t.agRtPG),
                            subtext: S,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(td.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tc.V, {
                                                ...e,
                                                query: N,
                                                onChange: E,
                                                ref: t,
                                                placeholder: J.intl.string(J.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(td.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: J.intl.string(J.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == n,
                                }),
                                w.map((e) =>
                                    (0, i.jsx)(
                                        td.iD,
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
                        (0, i.jsxs)(td.Dr, {
                            id: "years",
                            label: J.intl.string(J.t.w9zd68),
                            subtext: P,
                            children: [
                                (0, i.jsx)(td.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: J.intl.string(J.t["2/yeUU"]),
                                    action: () => p(null),
                                    checked: null == d,
                                }),
                                j.map((e) =>
                                    (0, i.jsx)(
                                        td.iD,
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
            (0, i.jsxs)(td.rX, {
                label: J.intl.string(J.t.XvNMNk),
                children: [
                    (0, i.jsx)(td.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: J.intl.string(J.t["4LLKx3"]),
                        action: () => h("descending"),
                        checked: "descending" === c,
                    }),
                    (0, i.jsx)(td.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: J.intl.string(J.t["0gitSE"]),
                        action: () => h("ascending"),
                        checked: "ascending" === c,
                    }),
                ],
            }),
            L &&
                (0, i.jsx)(td.rX, {
                    children: (0, i.jsx)(td.Dr, { id: "clear-filters", label: J.intl.string(J.t.FbDgiu), action: x }),
                }),
        ],
    });
}
var tu = l(174726);
let tm = a.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: s } = (0, e6.P)(),
            n = (0, eK.bG)([eq.Ay], () => eq.Ay.getKeybindForAction(eT.hCu.SAVE_CLIP)),
            r = (0, e6.P)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            c = a.useCallback(() => {
                (0, eX.openUserSettings)(eV.X.CLIPS_PANEL);
            }, []),
            o = a.useCallback(() => s(""), [s]),
            u = null != n ? eW.dI(n.shortcut, !0) : null,
            h = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: tu.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: tu.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tu.Pe,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: J.intl.string(J.t.z2jK6X),
                                }),
                                null != u && (0, i.jsx)(eB.e, { className: tu.P, shortcut: u }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tu.$s,
                            children: [
                                (0, i.jsx)(d.m, {
                                    text: J.intl.string(J.t.X7yRDm),
                                    children: (0, i.jsx)(te.Y, {
                                        position: "bottom",
                                        targetElementRef: h,
                                        renderPopout: (e) => (0, i.jsx)(to, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, i.jsx)("div", {
                                                ref: h,
                                                children:
                                                    r > 0
                                                        ? (0, i.jsx)(z.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: J.intl.formatToPlainString(Z.default.JbyR1U, {
                                                                  count: r,
                                                              }),
                                                              icon: tt.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, i.jsx)(p.K, {
                                                              icon: tt.R,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": J.intl.string(J.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, i.jsx)(d.m, {
                                    text: J.intl.string(J.t["3D5yo/"]),
                                    children: (0, i.jsx)(p.K, {
                                        onClick: c,
                                        icon: tl.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": J.intl.string(J.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tu.MT,
                    children: (0, i.jsx)(ti.I, {
                        placeholder: J.intl.string(J.t["5h0QOP"]),
                        query: l,
                        onChange: s,
                        onClear: o,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    tp = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: s, onClick: r } = e;
        return (0, i.jsxs)(T.D, {
            className: n()(tu.MV, { [tu.wH]: s }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: tu.tk,
                    children: [
                        a,
                        (0, i.jsx)(w.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tu.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tu.z2,
                    children: (0, i.jsx)(w.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function th(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: s, allClips: n } = e,
        r = (0, e6.P)((e) => e.selectedGameId),
        d = (0, e6.P)((e) => e.setSelectedGameId),
        c = a.useMemo(() => t.map((e) => e.applicationId), [t]),
        o = (0, K.A)(c),
        u = a.useCallback(() => d(null), [d]),
        p = a.useCallback(() => d("favorites"), [d]),
        h = a.useMemo(() => new Map(o.map((e) => [e?.id, e])), [o]);
    return (0, i.jsxs)("div", {
        className: tu.pz,
        children: [
            (0, i.jsx)(tm, { allClips: n }),
            (0, i.jsxs)("div", {
                className: tu.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: tu.om,
                        children: (0, i.jsxs)("div", {
                            className: tu.Ep,
                            children: [
                                (0, i.jsx)(tp, {
                                    name: J.intl.string(J.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, i.jsx)(eC.x, {}),
                                    isSelected: null === r,
                                    onClick: u,
                                }),
                                (0, i.jsx)(tp, {
                                    name: J.intl.string(J.t["9rlCk1"]),
                                    count: s.length,
                                    icon: (0, i.jsx)(_.G, {}),
                                    isSelected: "favorites" === r,
                                    onClick: p,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, i.jsxs)(ta.Ip, {
                            className: tu.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tu.a9,
                                    children: J.intl.string(J.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: tu.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: a } = e;
                                        return (0, i.jsx)(
                                            tp,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, i.jsx)(B.A, { game: h.get(a), size: B.M.XSMALL }),
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
var tx = l(409067),
    tg = l(847455);
let tv = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function tf(e) {
    let { channelId: t, onClose: s, onClipClick: k, transitionState: w, initialEditingClipId: L, ...M } = e;
    (0, I.A)();
    let { analyticsLocations: D } = (0, j.Ay)(f.A.CLIPS_GALLERY),
        [S, P] = a.useState(new Set()),
        { clipsByGame: R, filteredClips: T, favoriteClips: _, allClips: G } = (0, tx.a)(),
        { onShareClick: z } = (0, E.A)(t),
        O = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0),
        [H, U] = a.useState(null != L ? "editing" : "gallery"),
        [F, K] = a.useState(L ?? null),
        $ = (0, r.bG)([C.A], () => (null != F ? C.A.getClipById(F) : null), [F]),
        B = a.useRef(H);
    (B.current = H), (a.useRef(F).current = F);
    let [Q, Y] = a.useState(null != L ? o.ip.ENTERED : o.ip.HIDDEN),
        V = a.useRef(null),
        X = (0, e6.P)((e) => e.selectedGameId),
        q = a.useMemo(
            () => (null == X || "favorites" === X ? null : (R.find((e) => e.applicationId === X) ?? null)),
            [X, R],
        ),
        W = a.useMemo(() => ("favorites" === X ? _ : (q?.filteredClips ?? T)), [X, q, T, _]),
        Z = a.useMemo(
            () => ("favorites" === X ? J.intl.string(J.t["9rlCk1"]) : (q?.name ?? J.intl.string(J.t.dPVrEv))),
            [X, q],
        ),
        ee = a.useCallback(() => {
            U("editing"), v.A.useReducedMotion && Y(o.ip.ENTERED);
        }, []),
        et = a.useCallback((e) => {
            P((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        el = a.useCallback(
            (e) => {
                K(e.id), ee();
            },
            [ee],
        ),
        ei = a.useCallback(() => {
            v.A.useReducedMotion && K(null), U("gallery");
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
                "editing" === H && null != F
                    ? void (0, y.YK)(F)
                    : ((0, y.jA)(),
                      () => {
                          (0, y.jA)();
                      }),
            [H, F],
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
        children: (0, i.jsx)(tv.Provider, {
            value: ed,
            children: (0, i.jsx)(c.N, {
                onClose: s,
                transitionState: w,
                ...M,
                children: (0, i.jsxs)("div", {
                    className: tg.jT,
                    ref: V,
                    children: [
                        (0, i.jsxs)("div", {
                            className: n()(tg.PD, "gallery" === H && tg.vu),
                            "aria-hidden": "gallery" !== H,
                            children: [
                                (0, i.jsx)(th, { clipsByGame: R, filteredClips: T, favoriteClips: _, allClips: G }),
                                (0, i.jsxs)("div", {
                                    className: tg.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: tg.$Q,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: Z,
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: tg.$s,
                                                    children: [
                                                        es &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(d.m, {
                                                                        text: J.intl.string(J.t.RDE0Sc),
                                                                        children: (0, i.jsx)(p.K, {
                                                                            onClick: er,
                                                                            icon: h.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": J.intl.string(J.t.RDE0Sc),
                                                                            loading: O,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(d.m, {
                                                                        text: J.intl.string(J.t.oyYWHE),
                                                                        children: (0, i.jsx)(p.K, {
                                                                            onClick: en,
                                                                            icon: x.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": J.intl.string(J.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(p.K, {
                                                            onClick: s,
                                                            icon: g.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": J.intl.string(J.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(e4, {
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
                            className: n()(tg.jN, "editing" === H && tg.vu),
                            "aria-hidden": "editing" !== H,
                            onTransitionEnd: () => {
                                "gallery" === H ? (K(null), Y(o.ip.HIDDEN)) : "editing" === H && Y(o.ip.ENTERED);
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
