(n.r(t), n.d(t, { default: () => hB }));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    o = n(17928),
    u = n(976860),
    c = n(696451),
    d = n(71393),
    m = n(576705),
    f = n(503698),
    h = n.n(f),
    p = n(97893),
    g = n(364522),
    x = n(297264),
    v = n(834730),
    j = n(65593),
    b = n(458518),
    y = n(742589),
    k = n(152367),
    w = n(661531),
    N = n(866665),
    C = n(939249),
    A = n(497183),
    S = n(261425),
    E = n(105292),
    I = n(631417);
function M(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i, transparent: s = !1 } = e,
        o = E.intl.string(S.default.FzfmQ8);
    return (0, a.jsx)(y.A, {
        hideSearch: !0,
        transparent: s,
        toolbar: n,
        className: I.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: I.QF,
            children: [
                (0, a.jsx)(k.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: w.A.colors.ICON_STRONG,
                    className: I.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(y.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(y.A.Caret, {}),
                          ],
                      })
                    : null,
                null != r && null != i
                    ? (0, a.jsx)(N.m, {
                          asContainer: !0,
                          text: o,
                          position: "bottom",
                          children: (0, a.jsx)(C.D, {
                              className: I.FF,
                              onClick: i,
                              "aria-label": o,
                              children: (0, a.jsx)(A.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(y.A.Title, { className: I.Qw, wrapperClassName: I.DD, children: t }),
            ],
        }),
    });
}
var _ = n(319481),
    P = n(639519),
    R = n(371169),
    T = n(361504);
let L = [
        { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
        { id: "claude-opus-5-5", label: "Claude Opus 5.5", provider: "anthropic" },
        { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5", provider: "anthropic" },
        { id: "claude-haiku-5-5", label: "Claude Haiku 5.5", provider: "anthropic" },
        { id: "gpt-6-astra", label: "GPT-6 Astra", provider: "openai", supports_fast: !0 },
        { id: "gpt-6.1-sol", label: "GPT-6.1 Sol", provider: "openai", supports_fast: !0 },
        { id: "gpt-6-luna", label: "GPT-6 Luna", provider: "openai", supports_fast: !0 },
        { id: "xai/grok-4.7", label: "Grok 4.7", provider: "xai" },
    ],
    $ = { main: L, subagent: L, thinking: ["low", "medium", "high", "xhigh", "max"] },
    D = [
        { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
    ],
    z = { main: D, subagent: D, thinking: $.thinking },
    O = { tier: "balanced", provider: "openai" },
    F = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
var q = n(652215),
    U = n(746080);
async function G(e) {
    let { guildId: t, installScope: n, modelSettings: l, start: r } = e,
        a = await (0, R.gA)({ guild_id: t, install_scope: n });
    return (
        (0, _.ensureConnection)(a),
        (0, _.stageModelSettings)(a, l ?? O),
        await r(a),
        (0, u.pX)(q.BVt.CHANNEL(t, U.VV.CONJURE, a)),
        a
    );
}
var B = n(548118);
let K = "user";
var H = n(941985),
    W = n(16619),
    V = n(506774);
let X = "ConjureProjectsPanelOpen";
var Y = n(89310),
    Z = n(821609),
    J = n(775602),
    Q = n(486020),
    ee = n(687966),
    et = n(323384),
    en = n(632015),
    el = n(231483),
    er = n(430392);
let ea = {
    games: ee.GameControllerIcon,
    apps: et.k,
    profile_widget: en.f,
    automod: el.ShieldIcon,
    chat_bot: er.RobotIcon,
};
var ei = n(621466);
let es = "data-conjure-carousel-card";
var eo = n(19493);
let eu = i.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n } = e,
            l = ea[t.category];
        return (0, a.jsxs)("li", {
            className: eo.AS,
            [es]: "",
            children: [
                (0, a.jsxs)("div", {
                    className: eo.rl,
                    children: [
                        (0, a.jsx)("img", {
                            className: eo.my,
                            src: (0, Q.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: eo.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eo.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eo.xn,
                            children: [
                                (0, a.jsx)("img", { className: eo.q_, src: t.image, alt: "" }),
                                (0, a.jsx)("div", {
                                    className: eo.o1,
                                    children: (0, a.jsx)(Z.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: E.intl.string(S.default["6CQjTy"]),
                                        onClick: () => n(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: eo.qr,
                            children: [
                                (0, a.jsx)("div", {
                                    className: eo.Yl,
                                    "aria-hidden": !0,
                                    children: (0, a.jsx)(l, { size: "md", color: w.A.colors.ICON_STRONG }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: eo.PJ,
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t.name,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: (function (e) {
                                                switch (e) {
                                                    case "games":
                                                        return E.intl.string(S.default["JU01/4"]);
                                                    case "apps":
                                                        return E.intl.string(S.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return E.intl.string(S.default["Vz5Wb+"]);
                                                    case "automod":
                                                        return E.intl.string(S.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return E.intl.string(S.default.W9OYc6);
                                                }
                                            })(t.category),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    ec = i.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: l } = e,
            r = (0, o.bG)([J.Ay], () => J.Ay.useReducedMotion),
            s = i.useRef(null),
            u = i.useRef(null);
        return (
            (t = !r),
            i.useEffect(() => {
                let e = s.current,
                    n = u.current;
                if (null == e || null == n) return;
                let l = [],
                    r = [],
                    a = 1,
                    i = 0,
                    o = 1,
                    c = 0,
                    d = 0,
                    m = null,
                    f = !1,
                    h = !1,
                    p = document.hasFocus(),
                    g = !0;
                function x() {
                    null != e &&
                        null != n &&
                        ((r = (l = Array.from(n.querySelectorAll(`[${es}]`))).map(
                            (e) => e.offsetLeft + e.offsetWidth / 2,
                        )),
                        (a = l.length > 1 ? Math.abs(l[1].offsetLeft - l[0].offsetLeft) : 1),
                        (i = t ? a * l.length : 0),
                        (o = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function v() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    l.forEach((e, n) => {
                        var l;
                        let s,
                            u,
                            d = r[n] - t;
                        i > 0 && (d = ((((d - c * o + i / 2) % i) + i) % i) - i / 2);
                        let { angleDeg: m, dropPx: f } =
                            ((l = d / a),
                            (u =
                                (a / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((s = Math.max(-12, Math.min(12, 4 * l))) * Math.PI) / 180))),
                            { angleDeg: s, dropPx: u });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + d - r[n]}px`),
                            e.style.setProperty("--custom-conjure-home-carousel-angle", `${m}deg`),
                            e.style.setProperty("--custom-conjure-home-carousel-drop", `${f}px`));
                    });
                }
                function j(e) {
                    (null != m && i > 0 && (c = (c + (30 * (e - m)) / 1e3) % i),
                        (m = e),
                        v(),
                        (d = requestAnimationFrame(j)));
                }
                function b() {
                    let e = t && !f && !h && p && g;
                    e && 0 === d
                        ? ((m = null), (d = requestAnimationFrame(j)))
                        : e || 0 === d || (cancelAnimationFrame(d), (d = 0));
                }
                function y() {
                    ((f = !0), b());
                }
                function k() {
                    ((f = !1), b());
                }
                function w() {
                    ((h = !0), b());
                }
                function N(t) {
                    ((h = (0, ei.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), b());
                }
                function C() {
                    ((p = !0), b());
                }
                function A() {
                    ((p = !1), b());
                }
                (x(), v(), b());
                let S = new ResizeObserver(() => {
                    (x(), v());
                });
                (S.observe(e), S.observe(n));
                let E = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((g = t.isIntersecting), b());
                });
                return (
                    E.observe(e),
                    e.addEventListener("scroll", v, { passive: !0 }),
                    e.addEventListener("pointerenter", y),
                    e.addEventListener("pointerleave", k),
                    e.addEventListener("focusin", w),
                    e.addEventListener("focusout", N),
                    window.addEventListener("focus", C),
                    window.addEventListener("blur", A),
                    () => {
                        (cancelAnimationFrame(d),
                            S.disconnect(),
                            E.disconnect(),
                            e.removeEventListener("scroll", v),
                            e.removeEventListener("pointerenter", y),
                            e.removeEventListener("pointerleave", k),
                            e.removeEventListener("focusin", w),
                            e.removeEventListener("focusout", N),
                            window.removeEventListener("focus", C),
                            window.removeEventListener("blur", A));
                    }
                );
            }, [s, u, t]),
            (0, a.jsx)("section", {
                ref: s,
                className: r ? eo.vV : eo.Dk,
                "aria-label": E.intl.string(S.default.Qc4S39),
                children: (0, a.jsx)("ul", {
                    ref: u,
                    className: eo.u4,
                    children: n.map((e) => (0, a.jsx)(eu, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var ed = n(789645),
    em = n(418811),
    ef = n(246338),
    eh = n(290076),
    ep = n(638693);
function eg(e) {
    let { guildId: t, onClose: n } = e,
        l = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, ef.Ot)(e, t)
                    ? (0, u.pX)(q.BVt.CHANNEL(t, U.VV.CONJURE, e.id))
                    : (0, em.A)(e);
            },
            [t],
        ),
        r = E.intl.string(S.default.dWgSAa),
        s = E.intl.string(S.default.kar7jh);
    return (0, a.jsxs)("aside", {
        className: ep.pz,
        "aria-label": r,
        children: [
            (0, a.jsxs)("div", {
                className: ep.wx,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-strong", children: r }),
                    (0, a.jsx)(y.A.Icon, { icon: ed.P, tooltip: s, "aria-label": s, onClick: n }),
                ],
            }),
            (0, a.jsx)(g.Ip, { className: ep.XG, children: (0, a.jsx)(eh.A, { onSelect: l, guildId: t }) }),
        ],
    });
}
var ex = n(559106),
    ev = n(265872),
    ej = n(980707),
    eb = n(477782),
    ey = n(663341),
    ek = n(783977),
    ew = n(559647),
    eN = n(531685),
    eC = n(477262),
    eA = n(432017),
    eS = n(81369);
let eE = [
    {
        id: "add-images-videos",
        label: S.default["51+9lc"],
        icon: eC.s,
        accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
    },
    {
        id: "add-sounds",
        label: S.default["10ljr2"],
        icon: eA.T,
        accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
    },
    { id: "add-other-files", label: S.default.aotDee, icon: eS.H, accept: "" },
];
(n(323874), n(14289), n(35956));
var eI = n(289873),
    eM = n(285796),
    e_ = n(666476),
    eP = n(73153),
    eR = n(839214),
    eT = n(989145);
let eL = [],
    e$ = 1,
    eD = (0, eR.D)(() => ({ draftsByProject: {} }));
function ez(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? eL;
}
function eO(e, t) {
    return ez(eD.getState(), e, t);
}
function eF(e, t, n) {
    let { draftsByProject: l } = eD.getState();
    eD.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function eq(e, t, n, l) {
    let r = eO(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (eF(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function eU(e, t) {
    (0, eT.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function eG(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && eU(e, t.ref.id));
}
function eB(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = eD.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? eL) n ? eG(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    eD.setState({ draftsByProject: i });
}
function eK(e) {
    return E.intl.formatToPlainString(S.default.JZ59Bo, { size: (0, e_.sM)((0, e_.Ju)(e)) });
}
function eH(e, t) {
    let n = eO(e, t);
    if (0 !== n.length) {
        for (let t of n) eG(e, t);
        eF(e, t, eL);
    }
}
function eW(e, t) {
    let n = eO(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (eF(e, t, eL), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function eV(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = eO(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? eW(e, "chat") : [];
    (0, _.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(eP.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(eD.getState().draftsByProject)) eB(e, { deleteFromWorker: !0 });
}),
    eP.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        eB(t, { deleteFromWorker: !1 });
    }));
var eX = n(922329);
async function eY(e) {
    let t = new Worker(new URL("/assets/" + n.u("638664"), n.b));
    try {
        let n = await new Promise((n) => {
            (t.addEventListener("message", (e) => {
                let { data: t } = e;
                return n(t);
            }),
                t.addEventListener("error", () => n(null)),
                t.addEventListener("messageerror", () => n(null)),
                t.postMessage(e));
        });
        if (null == n) return null;
        return new File([n], `${e.name.replace(/\.png$/i, "")}.webp`, {
            type: "image/webp",
            lastModified: e.lastModified,
        });
    } finally {
        t.terminate();
    }
}
var eZ = n(153171);
let eJ = e_.lN;
function eQ(e, t, n, l) {
    let r = eO(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: e$++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (eF(e, t, [
            ...eO(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void eq(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    eq(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  eq(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default.E7dS5n) }),
                              e_.o2 - 3e5,
                          )
                        : eU(e, a.id);
                },
                (l) => {
                    (console.error("[conjure] attachment upload failed", l),
                        eq(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= eJ)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: E.intl.formatToPlainString(S.default.Q0aCVZ, { count: eJ }),
                    },
                };
            if (!(0, e_.Oq)(e.size, t))
                return "image/png" === t && e.size <= e_.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await eY(e).catch(() => null);
                              return null != n && (0, e_.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: eK(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: eK(t) } };
            let a = e_.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function e0(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = eD.useState((e) => ez(e, t, n)),
        a = i.useCallback((e) => eQ(t, n, e, l), [t, n, l]),
        s = i.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), a(t));
            },
            [a],
        ),
        o = i.useCallback(
            (e) => {
                let l, r;
                null != (r = (l = eO(t, n)).find((t) => t.localId === e)) &&
                    (eG(t, r),
                    eF(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => eW(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function e1(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(eX.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(eI.y, { type: eI.t.SPINNING_CIRCLE_SIMPLE, className: eZ.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: eZ.o1,
                onClick: () => n(t.localId),
                "aria-label": E.intl.string(S.default.Slam9g),
                children: (0, a.jsx)(eM.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var e2 = n(900797),
    e3 = n(320448),
    e5 = n(344587),
    e4 = n(534554),
    e6 = n(392208),
    e7 = n(822313),
    e8 = n(837984),
    e9 = n(359589),
    te = n(254575);
function tt(e) {
    let [t, n] = i.useState(e),
        [l, r] = i.useState(!1),
        [a, s] = i.useState(e);
    return (
        a !== e && (s(e), e ? n(!0) : r(!1)),
        i.useEffect(() => {
            if (e || !t) return;
            let l = setTimeout(() => n(!1), 150);
            return () => clearTimeout(l);
        }, [e, t]),
        i.useEffect(() => {
            if (!t || !e) return;
            let n = 0,
                l = requestAnimationFrame(() => {
                    n = requestAnimationFrame(() => r(!0));
                });
            return () => {
                (cancelAnimationFrame(l), cancelAnimationFrame(n));
            };
        }, [t, e]),
        { mounted: t, entered: l }
    );
}
function tn(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = tt(d),
        p = e6.P.indexOf(t.tier),
        g = d ? e2.t : e3._,
        x = e6.P.map(e4.D0),
        j = (0, e4.Tc)(t.tier),
        { text: b, phase: y } = (0, e5.Q)(j);
    return (0, a.jsx)("div", {
        className: te.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: h()(te.t$, { [te.Zr]: u && c, [te.GF]: !u }),
            role: "dialog",
            "aria-label": E.intl.string(S.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: h()(te.Nr, te.uO, { [te.Zr]: d && f.entered, [te.GF]: !d }),
                          children: (0, a.jsx)(e9.b, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${te.Nr} ${te.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: te.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: te.y6,
                                    "aria-expanded": d,
                                    "aria-label": E.intl.string(S.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: E.intl.string(S.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(g, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: te.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: h()(te.Z, { [te.xQ]: "exit" === y, [te.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: te.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: te.Nb,
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: E.intl.string(S.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: E.intl.string(S.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(e8.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: E.intl.string(S.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = e6.P[e];
                                        null != n && n !== t.tier && s((0, e4.CM)((0, e4.j6)(t, n)));
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function tl(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, e7.A)(t, s),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = tt(f);
    return (0, a.jsx)(ev.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: ev.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(tn, {
                settings: d,
                tiers: n ?? null,
                choices: l,
                disabled: r,
                onChange: m,
                placement: t,
                open: f,
                entered: g,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsx)(N.m, {
                text: E.intl.string(S.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(C.D, {
                    innerRef: c,
                    className: o ?? te.hZ,
                    "aria-label": E.intl.string(S.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(ek.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tr = n(950305),
    ta = n(847374),
    ti = n(122485);
function ts(e) {
    let { target: t, guilds: n, onChange: l, disabled: r, className: s } = e,
        [o, u] = i.useState(!1),
        c = i.useRef(null),
        d = i.useCallback(() => u(!1), []);
    o && r && u(!1);
    let m = E.intl.string(S.default.NyVn6T),
        f = E.intl.string(S.default.UPLaGM),
        h = t === K ? null : (n.find((e) => e.id === t) ?? null),
        p = h?.name ?? f;
    return (0, a.jsx)(ev.Y, {
        targetElementRef: c,
        shouldShow: o,
        onRequestClose: d,
        position: "top",
        align: "left",
        animation: ev.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(ej.W, {
                navId: "conjure-home-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsxs)(eb.rX, {
                    label: m,
                    children: [
                        (0, a.jsx)(eb.iD, {
                            id: "conjure-home-target-user",
                            group: "conjure-home-target",
                            label: f,
                            checked: t === K,
                            action: () => {
                                (l(K), d());
                            },
                        }),
                        n.map((e) =>
                            (0, a.jsx)(
                                eb.iD,
                                {
                                    id: `conjure-home-target-${e.id}`,
                                    group: "conjure-home-target",
                                    label: e.name,
                                    checked: t === e.id,
                                    action: () => {
                                        (l(e.id), d());
                                    },
                                },
                                e.id,
                            ),
                        ),
                    ],
                }),
            });
        },
        children: (e, t) => {
            let { onClick: n, ...l } = e,
                { isShown: i } = t;
            return (0, a.jsx)(ex.vN, {
                children: (0, a.jsxs)("button", {
                    ...l,
                    ref: c,
                    type: "button",
                    className: s,
                    disabled: r,
                    "aria-label": E.intl.formatToPlainString(S.default.Lyx6pW, { name: p }),
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: () => u((e) => !e),
                    children: [
                        (0, a.jsx)("span", {
                            className: ti.R,
                            "aria-hidden": !0,
                            children:
                                null != h
                                    ? (0, a.jsx)(B.Ay, { guild: h, size: B.Ay.Sizes.MINI, active: !0 })
                                    : (0, a.jsx)(tr.UserIcon, { size: "refresh_sm", color: "currentColor" }),
                        }),
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            lineClamp: 1,
                            className: ti.P,
                            children: p,
                        }),
                        (0, a.jsx)(ta.a, { size: "refresh_sm", color: "currentColor", "aria-hidden": !0 }),
                    ],
                }),
            });
        },
    });
}
var to = n(200160);
function tu(e) {
    let { prompts: t, paused: n, showCaret: l } = e,
        { index: r, length: s } = (function (e, t) {
            let [n, l] = i.useState({ index: 0, length: 0, phase: "typing" }),
                r = i.useRef(n.length);
            i.useLayoutEffect(() => {
                r.current = n.length;
            });
            let { index: a, phase: s } = n;
            return (
                i.useEffect(() => {
                    if (t) return;
                    let n = e[a].length;
                    if ("holding" === s) {
                        let e = window.setTimeout(() => l((e) => ({ ...e, phase: "deleting" })), 1400);
                        return () => window.clearTimeout(e);
                    }
                    let i = "typing" === s,
                        o = r.current,
                        u = performance.now(),
                        c = o,
                        d = 0,
                        m = 0;
                    return (
                        (d = requestAnimationFrame(function t(r) {
                            let s = Math.floor((r - u) / (i ? 14 : 4)),
                                f = i ? Math.min(n, o + s) : Math.max(0, o - s);
                            (f !== c && ((c = f), l((e) => ({ ...e, length: f }))),
                                i && f === n
                                    ? l((e) => ({ ...e, length: f, phase: "holding" }))
                                    : i || 0 !== f
                                      ? (d = requestAnimationFrame(t))
                                      : (m = window.setTimeout(
                                            () => l({ index: (a + 1) % e.length, length: 0, phase: "typing" }),
                                            250,
                                        )));
                        })),
                        () => {
                            (cancelAnimationFrame(d), window.clearTimeout(m));
                        }
                    );
                }, [e, t, a, s]),
                n
            );
        })(t, n);
    return (0, a.jsxs)(v.E, {
        variant: "text-md/normal",
        color: "text-muted",
        className: to.RC,
        children: [t[r].slice(0, s), l ? (0, a.jsx)("span", { className: to.OW }) : null],
    });
}
function tc(e) {
    let { prompts: t, paused: n } = e,
        l = (function (e, t) {
            let [n, l] = i.useState(0);
            return (
                i.useEffect(() => {
                    if (t || e < 2) return;
                    let n = window.setInterval(() => l((t) => (t + 1) % e), 2e3);
                    return () => window.clearInterval(n);
                }, [e, 2e3, t]),
                n
            );
        })(t.length, n);
    return (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", className: to.RC, children: t[l] });
}
function td(e) {
    let { boxFocused: t } = e,
        n = i.useMemo(
            () => [
                E.intl.string(S.default.J2o8Ae),
                E.intl.string(S.default["wn+Bzd"]),
                E.intl.string(S.default["6DCVy3"]),
                E.intl.string(S.default.iRbnRD),
                E.intl.string(S.default["p/zqml"]),
            ],
            [],
        ),
        l = (0, o.bG)([J.Ay], () => J.Ay.useReducedMotion),
        r = (0, o.bG)([eN.A], () => eN.A.isFocused()),
        s = t || !r;
    return (0, a.jsx)("div", {
        className: to.qf,
        "aria-hidden": !0,
        children: l
            ? (0, a.jsx)(tc, { prompts: n, paused: s })
            : (0, a.jsx)(tu, { prompts: n, paused: s, showCaret: !t }),
    });
}
function tm(e) {
    let {
            idea: t,
            inputRef: n,
            onIdeaChange: l,
            onSubmit: r,
            submitting: s,
            submitDisabled: o,
            error: u,
            target: c,
            eligibleGuilds: d,
            onTargetChange: m,
            modelSettings: f,
            onModelSettingsChange: p,
            attachments: g,
        } = e,
        [x, j] = i.useState(!1),
        b = i.useRef(null),
        y = i.useId(),
        k = "" !== t,
        w = E.intl.string(E.t.d56gCa),
        N = i.useRef(null),
        C = i.useRef(null),
        { addFiles: A, pasteFiles: I, removeAttachment: M } = g,
        _ = i.useCallback((e) => {
            let t = N.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        P = i.useCallback(
            (e) => {
                (A(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [A],
        ),
        R = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || r());
            },
            [o, r],
        );
    return (0, a.jsxs)("div", {
        className: to.kL,
        children: [
            (0, a.jsxs)("div", {
                ref: b,
                className: h()(to.yk, { [to.Sl]: null != u }),
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: to.Ox,
                        children: [
                            (0, a.jsx)(ex.vN, {
                                ringTarget: b,
                                ringClassName: to.Rg,
                                children: (0, a.jsx)("textarea", {
                                    ref: n,
                                    className: to.hF,
                                    rows: 3,
                                    value: t,
                                    "aria-label": E.intl.string(S.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? y : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: R,
                                    onPaste: (e) => I(e),
                                    onFocus: () => j(!0),
                                    onBlur: () => j(!1),
                                }),
                            }),
                            k ? null : (0, a.jsx)(td, { boxFocused: x }),
                        ],
                    }),
                    g.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: to.ZO,
                              children: g.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, a.jsx)(e1, { draft: t, onRemove: M }, t.localId);
                              }),
                          })
                        : null,
                    (0, a.jsxs)("div", {
                        className: to.KE,
                        children: [
                            (0, a.jsx)("input", {
                                ref: N,
                                type: "file",
                                multiple: !0,
                                onChange: P,
                                className: to.Fg,
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                            (0, a.jsx)(ev.Y, {
                                targetElementRef: C,
                                position: "top",
                                align: "left",
                                animation: ev.Y.Animation.NONE,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(ej.W, {
                                        "data-menu-migrated": !0,
                                        navId: "conjure-home-attach",
                                        "aria-label": w,
                                        onClose: t,
                                        onSelect: t,
                                        children: (0, a.jsx)(eb.rX, {
                                            children: eE.map((e) =>
                                                (0, a.jsx)(
                                                    eb.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => _(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    });
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t;
                                    return (0, a.jsx)("button", {
                                        ...e,
                                        ref: C,
                                        type: "button",
                                        className: to.gb,
                                        disabled: s,
                                        "aria-label": w,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": n,
                                        children: (0, a.jsx)(ey.PlusLargeIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                            className: to.Xv,
                                        }),
                                    });
                                },
                            }),
                            (0, a.jsx)(ts, {
                                target: c,
                                guilds: d,
                                onChange: m,
                                disabled: s,
                                className: h()(to.gb, to.qU),
                            }),
                            (0, a.jsxs)("div", {
                                className: to.Rc,
                                children: [
                                    (0, a.jsx)(tl, {
                                        settings: f ?? O,
                                        tiers: F,
                                        choices: (0, T.b)()
                                            ? {
                                                  main: [...$.main, ...z.main],
                                                  subagent: [...$.subagent, ...z.subagent],
                                                  thinking: $.thinking,
                                              }
                                            : $,
                                        disabled: s,
                                        onChange: p,
                                        className: to.gb,
                                        icon: (0, a.jsx)(ek.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(Z.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: ew.SendMessageIcon,
                                        text: E.intl.string(S.default.bNtzxp),
                                        disabled: o,
                                        loading: s,
                                        onClick: r,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != u
                ? (0, a.jsx)(v.E, {
                      id: y,
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: u,
                  })
                : null,
        ],
    });
}
var tf = n(628284),
    th = n(369606),
    tp = n(926268),
    tg = n(406810),
    tx = n(707554),
    tv = n(651346);
function tj(e) {
    let { className: t } = e;
    return (0, a.jsx)("span", { className: h()(tv.n8, t) });
}
let tb = [
        {
            id: "apps",
            title: S.default["NhivS+"],
            description: S.default.ArcJqa,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: tv.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tv.My,
                            children: [
                                (0, a.jsx)("span", { className: tv._w }),
                                (0, a.jsx)("span", { className: tv._w }),
                                (0, a.jsx)("span", { className: tv._w }),
                            ],
                        }),
                        (0, a.jsx)(tj, { className: tv.Lm }),
                        (0, a.jsx)("div", {
                            className: tv.Oh,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: tv.ZW,
                                        children: [
                                            (0, a.jsx)("span", { className: tv.NU }),
                                            0 === e
                                                ? (0, a.jsx)(tf.y, {
                                                      size: "xs",
                                                      color: w.A.colors.ICON_BRAND,
                                                      className: tv._6,
                                                  })
                                                : null,
                                            (0, a.jsx)(tj, { className: tv.Eg }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                });
            },
        },
        {
            id: "games",
            title: S.default.BiUcOj,
            description: S.default.FXwLsv,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: h()(tv.x, tv.jG),
                    children: [
                        (0, a.jsx)("span", { className: h()(tv.gg, tv.K1) }),
                        (0, a.jsx)("span", { className: h()(tv.gg, tv.W2) }),
                        (0, a.jsx)("span", { className: h()(tv.Fs, tv.A$) }),
                        (0, a.jsx)("span", { className: h()(tv.Fs, tv.eP) }),
                        (0, a.jsx)("span", { className: h()(tv.Fs, tv.kc) }),
                        (0, a.jsx)("span", { className: h()(tv.Fs, tv.OE) }),
                        (0, a.jsx)("span", { className: tv.OC }),
                        (0, a.jsxs)("div", {
                            className: tv.si,
                            children: [
                                (0, a.jsx)(th.TrophyIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/bold",
                                    color: "none",
                                    className: tv.o9,
                                    children: 128,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: tv.KQ,
                            children: [
                                (0, a.jsx)(tp.HeartIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(tp.HeartIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(tp.HeartIcon, { size: "xxs", color: w.A.colors.ICON_OVERLAY_LIGHT }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "bots",
            title: S.default["rSo/yG"],
            description: S.default.qNmKhG,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: tv.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tv.$y,
                            children: [(0, a.jsx)("span", { className: tv.m$ }), (0, a.jsx)(tj, { className: tv.Md })],
                        }),
                        (0, a.jsxs)("div", {
                            className: tv.iU,
                            children: [
                                (0, a.jsx)("span", {
                                    className: h()(tv.my, tv.FY),
                                    children: (0, a.jsx)(er.RobotIcon, {
                                        size: "xs",
                                        color: w.A.colors.ICON_OVERLAY_LIGHT,
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: tv.OS,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: tv.f9,
                                            children: [
                                                (0, a.jsx)(tj, { className: tv.iE }),
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-xs/bold",
                                                    color: "none",
                                                    className: tv.AO,
                                                    children: E.intl.string(S.default.VlgiLf),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(tj, { className: tv.xs }),
                                        (0, a.jsx)(tj, { className: tv.Md }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "profile-widgets",
            title: S.default.ukMCXh,
            description: S.default["v+F6qW"],
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: h()(tv.x, tv.ME),
                    children: [
                        (0, a.jsx)("span", { className: tv.CK }),
                        (0, a.jsxs)("div", {
                            className: tv.kI,
                            children: [
                                (0, a.jsx)("span", { className: h()(tv.my, tv.jU) }),
                                (0, a.jsx)(tj, { className: tv.iE }),
                                (0, a.jsxs)("div", {
                                    className: tv.Wy,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: tv.M1,
                                            children: [0, 1].map((e) =>
                                                (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        className: tv.dJ,
                                                        children: [
                                                            (0, a.jsx)(tj, { className: tv.cR }),
                                                            (0, a.jsx)(tj, { className: tv.Zh }),
                                                        ],
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: tv.bW,
                                            children: [0, 1, 2, 3, 4, 5].map((e) =>
                                                (0, a.jsx)("span", { className: tv.QR }, e),
                                            ),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "overlay-widgets",
            title: S.default["6aNfPh"],
            description: S.default.zm7y9u,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: tv.JH,
                    children: [
                        (0, a.jsx)("span", { className: tv.rx }),
                        (0, a.jsx)("span", { className: tv.ny }),
                        (0, a.jsx)("span", { className: tv.ZH }),
                        (0, a.jsx)("div", {
                            className: tv.$Y,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: tv.fn,
                                        children: [
                                            (0, a.jsx)("span", { className: h()(tv._h, { [tv.zY]: 0 === e }) }),
                                            (0, a.jsx)(tj, { className: tv.Av }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsxs)("div", {
                            className: tv.Y5,
                            children: [
                                (0, a.jsx)(tg.ClockIcon, { size: "xxs", color: w.A.colors.ICON_OVERLAY_LIGHT }),
                                (0, a.jsx)(tj, { className: tv.jB }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "automod",
            title: S.default["1w6KRE"],
            description: S.default.fpXK3z,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: tv.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tv.iU,
                            children: [
                                (0, a.jsx)("span", { className: tv.my }),
                                (0, a.jsxs)("div", {
                                    className: tv.OS,
                                    children: [
                                        (0, a.jsx)(tj, { className: tv.iE }),
                                        (0, a.jsx)(tj, { className: h()(tv.xs, tv.pc) }),
                                        (0, a.jsx)(tj, { className: h()(tv.Md, tv.pc) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: tv.jC,
                            children: [
                                (0, a.jsx)(el.ShieldIcon, { size: "sm", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsxs)("div", {
                                    className: tv.qQ,
                                    children: [
                                        (0, a.jsx)(tj, { className: h()(tv.Md, tv.k8) }),
                                        (0, a.jsx)(tj, { className: h()(tv.nq, tv.k8) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    ty = i.memo(function () {
        let e = i.useId();
        return (0, a.jsx)("section", {
            className: tv.GG,
            "aria-labelledby": e,
            children: (0, a.jsx)(tx.F, {
                component: (0, a.jsx)(x.D, {
                    id: e,
                    variant: "heading-lg/medium",
                    children: E.intl.string(S.default.IiQEVd),
                }),
                children: (0, a.jsx)("ul", {
                    className: tv.Vg,
                    children: tb.map((e) => {
                        let { id: t, title: n, description: l, Visual: r } = e;
                        return (0, a.jsxs)(
                            "li",
                            {
                                className: tv.Vs,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: tv.Tn,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(r, {}),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: tv.pG,
                                        children: [
                                            (0, a.jsx)(x.D, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: E.intl.string(n),
                                            }),
                                            (0, a.jsx)(v.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: E.intl.string(l),
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                }),
            }),
        });
    });
function tk(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let tw = 1;
function tN(e) {
    let t = tk(e),
        n = { localId: tw++, name: e.name, contentType: t };
    if (
        !(0, e_.Oq)(e.size, t) &&
        !("image/png" === t && e.size <= e_.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas)
    )
        return { file: e, draft: { ...n, status: "error", errorText: eK(t) } };
    let l = e_.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: l } };
}
function tC(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function tA(e, t) {
    if ((0, e_.Oq)(t.size, tk(t))) return (0, eT.vX)(e, t);
    let n = await eY(t);
    if (null == n || !(0, e_.Oq)(n.size, n.type)) throw Error("attachment over its size limit");
    return (0, eT.vX)(e, n);
}
var tS = n(698638),
    tE = n(606128),
    tI = n(260024);
class tM extends Error {}
function t_(e) {
    let t,
        { guildId: n } = e,
        [l, r] = i.useState(""),
        [s, o] = i.useState(!1),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, k] = i.useState(() => V.w.get(X) ?? null ?? !0),
        w = i.useRef(null),
        N = (0, W.z9)("ConjureHomePage"),
        C = i.useMemo(
            () => [
                {
                    id: "flappy",
                    category: "games",
                    shortPrompt: E.intl.string(S.default.gtX7tS),
                    fullPrompt: E.intl.string(S.default["Sfa50+"]),
                    name: E.intl.string(S.default.Tbag5k),
                    image: "/assets/b43659b526f2e936.svg",
                    authorAvatarSeed: "1",
                },
                {
                    id: "raid-calendar",
                    category: "apps",
                    shortPrompt: E.intl.string(S.default.GNGB59),
                    fullPrompt: E.intl.string(S.default.lxwxNm),
                    name: E.intl.string(S.default["rzB/bE"]),
                    image: "/assets/1d701ea289cc99e6.svg",
                    authorAvatarSeed: "2",
                },
                {
                    id: "aram-widget",
                    category: "profile_widget",
                    shortPrompt: E.intl.string(S.default.RzNoHJ),
                    fullPrompt: E.intl.string(S.default.VfUFEt),
                    name: E.intl.string(S.default.RYGHMF),
                    image: "/assets/05c0d07952b2d93f.svg",
                    authorAvatarSeed: "3",
                },
                {
                    id: "trivia",
                    category: "games",
                    shortPrompt: E.intl.string(S.default.TGN39X),
                    fullPrompt: E.intl.string(S.default.gilNLG),
                    name: E.intl.string(S.default.vvwBlz),
                    image: "/assets/5813258afff68797.svg",
                    authorAvatarSeed: "4",
                },
                {
                    id: "spoilers-automod",
                    category: "automod",
                    shortPrompt: E.intl.string(S.default.Gw756q),
                    fullPrompt: E.intl.string(S.default["d/WMHR"]),
                    name: E.intl.string(S.default["v9+fAY"]),
                    image: "/assets/54b5cda688395473.svg",
                    authorAvatarSeed: "5",
                },
                {
                    id: "movie-night",
                    category: "apps",
                    shortPrompt: E.intl.string(S.default.u4UWGH),
                    fullPrompt: E.intl.string(S.default.ofBNNy),
                    name: E.intl.string(S.default.DQQdZL),
                    image: "/assets/fcb9220c49b6460a.svg",
                    authorAvatarSeed: "6",
                },
                {
                    id: "welcome-bot",
                    category: "chat_bot",
                    shortPrompt: E.intl.string(S.default["T3+H3J"]),
                    fullPrompt: E.intl.string(S.default.ryeSuC),
                    name: E.intl.string(S.default["3deXbx"]),
                    image: "/assets/56e489e9c5907add.svg",
                    authorAvatarSeed: "7",
                },
            ],
            [],
        ),
        A = (0, b.o)().get(H.f_) === K,
        I = `${n}:${A}`,
        [T, L] = i.useState(null),
        $ = T?.context === I ? T.target : null,
        D = i.useCallback((e) => L({ context: I, target: e }), [I]),
        z = i.useCallback((e) => e === K || N.some((t) => t.id === e), [N]),
        O = !A && z(n) ? n : K,
        F = null != $ && z($) ? $ : O,
        q = F === K ? "user" : "guild",
        U = F === K ? n : F,
        B = (function () {
            let [e, t] = i.useState([]),
                n = i.useRef(e);
            (i.useLayoutEffect(() => {
                n.current = e;
            }),
                i.useEffect(() => () => n.current.forEach(tC), []));
            let l = i.useCallback((e) => {
                    if (0 === e.length) return;
                    let l = e.map(tN);
                    ((n.current = [...n.current, ...l]), t(n.current));
                }, []),
                r = i.useCallback(
                    (e) => {
                        if (e.defaultPrevented) return;
                        let t = Array.from(e.clipboardData?.files ?? []);
                        0 !== t.length && (e.preventDefault(), l(t));
                    },
                    [l],
                ),
                a = i.useCallback((e) => {
                    let l = n.current.find((t) => t.draft.localId === e);
                    null != l && (tC(l), (n.current = n.current.filter((e) => e !== l)), t(n.current));
                }, []),
                s = i.useCallback(() => {
                    (n.current.forEach(tC), (n.current = []), t(n.current));
                }, []),
                o = i.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= e_.lN) return e;
                            let t = E.intl.formatToPlainString(S.default.Q0aCVZ, { count: e_.lN });
                            return e.map((e, n) =>
                                n < e_.lN || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(e),
                    [e],
                );
            return {
                attachments: o,
                addFiles: l,
                pasteFiles: r,
                removeAttachment: a,
                clear: s,
                hasErrors: o.some((e) => "error" === e.draft.status),
            };
        })(),
        { attachments: Z, addFiles: J, clear: Q } = B,
        ee =
            "idea" ===
                (t = (function (e) {
                    let { idea: t, installScope: n, submitting: l } = e;
                    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
                })({ idea: l, installScope: q, submitting: s })) ||
            "submitting" === t ||
            B.hasErrors,
        et = i.useCallback((e) => J(Array.from(e)), [J]);
    (0, Y.p)(w);
    let en = i.useCallback((e) => {
            (r(e), c(null));
        }, []),
        el = i.useCallback(
            (e) => {
                en(e);
                let t = w.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [en],
        ),
        er = i.useRef(!1),
        ea = i.useCallback(async () => {
            let e = l.trim();
            if ("" !== e && !er.current) {
                ((er.current = !0), o(!0), c(null));
                try {
                    await G({
                        guildId: U,
                        installScope: q,
                        modelSettings: d,
                        start: async (t) => {
                            let n = [];
                            if (Z.length > 0)
                                try {
                                    n = await Promise.all(
                                        Z.map((e) => {
                                            let { file: n } = e;
                                            return tA(t, n);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, R.xx)(t).catch(() => void 0), new tM());
                                }
                            ((0, _.sendUserMessage)(t, e, n), Q());
                        },
                    });
                } catch (e) {
                    (c(e instanceof tM ? E.intl.string(S.default["903H7m"]) : (0, P.mG)(e)), (er.current = !1), o(!1));
                }
            }
        }, [l, q, d, U, Z, Q]),
        ei = i.useCallback((e) => {
            (V.w.set(X, e), k(e));
        }, []),
        es = i.useCallback(() => ei(!1), [ei]),
        eo = E.intl.string(f ? S.default.kar7jh : S.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: h()(tI.MY, tE.T),
        children: (0, a.jsxs)("div", {
            className: tI.Zp,
            children: [
                (0, a.jsxs)("main", {
                    className: tI.iW,
                    children: [
                        s
                            ? null
                            : (0, a.jsx)(j.A, {
                                  title: E.intl.string(S.default.gy7byi),
                                  description: E.intl.string(S.default["dkv/WO"]),
                                  icons: tS.ir,
                                  onDrop: et,
                              }),
                        (0, a.jsx)(M, {
                            title: E.intl.string(S.default.uk6jhJ),
                            transparent: !0,
                            actions: (0, a.jsx)(y.A.Icon, {
                                icon: p.Z,
                                color: "var(--icon-strong)",
                                className: tI.FW,
                                tooltip: eo,
                                "aria-label": eo,
                                selected: f,
                                onClick: () => ei(!f),
                            }),
                        }),
                        (0, a.jsx)(g.Ip, {
                            className: tI.XG,
                            children: (0, a.jsxs)("div", {
                                className: tI.Qs,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: tI.Lv,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: tI.ZK,
                                                children: [
                                                    (0, a.jsx)(x.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: tI.DD,
                                                        children: E.intl.string(S.default.doYpEy),
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: tI.VA,
                                                        children: E.intl.string(S.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)("div", {
                                                className: tI.ZK,
                                                children: (0, a.jsx)(tm, {
                                                    idea: l,
                                                    inputRef: w,
                                                    onIdeaChange: en,
                                                    onSubmit: ea,
                                                    submitting: s,
                                                    submitDisabled: ee,
                                                    error: u,
                                                    target: F,
                                                    eligibleGuilds: N,
                                                    onTargetChange: D,
                                                    modelSettings: d,
                                                    onModelSettingsChange: m,
                                                    attachments: B,
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(ec, { inspirations: C, onCopyPrompt: el }),
                                    (0, a.jsx)(ty, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                f ? (0, a.jsx)(eg, { guildId: n, onClose: es }) : null,
            ],
        }),
    });
}
var tP = n(260498),
    tR = n(478016),
    tT = n(604525),
    tL = n(92446),
    t$ = n(625903),
    tD = n(534890),
    tz = n(646270),
    tO = n(31300),
    tF = n(831453),
    tq = n(270593),
    tU = n(723702);
n(321073);
let tG = Object.freeze({ x: 0.5, y: 0.5 });
function tB(e) {
    return "" !== e.trim();
}
function tK(e) {
    let t = e.name.trim(),
        n = (function (e) {
            switch (e.role) {
                case "button":
                    return "Button";
                case "link":
                    return "Link";
                case "heading":
                    return "Heading";
                case "textbox":
                    return "Input";
                case "checkbox":
                    return "Checkbox";
                case "radio":
                    return "Radio";
                case "combobox":
                    return "Dropdown";
                case "slider":
                    return "Slider";
                case "switch":
                    return "Toggle";
                case "img":
                    return "Image";
                case "list":
                    return "List";
                case "listitem":
                    return "List item";
                case "tab":
                    return "Tab";
                case "menuitem":
                    return "Menu item";
                case "dialog":
                    return "Dialog";
                case "progressbar":
                    return "Progress bar";
                case "separator":
                    return "Divider";
                case "label":
                    return "Label";
            }
            switch (e.tag) {
                case "img":
                case "picture":
                    return "Image";
                case "svg":
                    return "Icon";
                case "video":
                    return "Video";
                case "canvas":
                    return "Canvas";
                case "p":
                case "span":
                case "strong":
                case "em":
                case "small":
                case "blockquote":
                case "code":
                case "li":
                    return "Text";
                case "form":
                    return "Form";
                case "ul":
                case "ol":
                    return "List";
                case "table":
                    return "Table";
                case "header":
                    return "Header";
                case "footer":
                    return "Footer";
                case "nav":
                    return "Navigation";
                case "section":
                case "article":
                case "main":
                case "aside":
                case "figure":
                    return "Section";
                case "div":
                    return "Container";
            }
            return null;
        })(e);
    return null == n
        ? "" === t
            ? { kind: "" !== e.role ? e.role : e.tag, name: "" }
            : { kind: "", name: t }
        : { kind: n, name: t };
}
function tH(e) {
    let { kind: t, name: n } = tK(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function tW(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let n = e.name.trim();
    return (
        "" !== n && t.push(`name="${n}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        null != e.marker && t.push(`marker="${e.marker}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let tV = "[conjure:selected] ",
    tX = " \u2014 ";
function tY(e) {
    if (!e.startsWith(tV)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(tV.length),
        a = r.indexOf(tX),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let tZ = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    tJ = new Map(),
    tQ = new Set();
function t0(e) {
    return tJ.get(e) ?? tZ;
}
function t1(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? tJ.set(e, t) : tJ.delete(e), [...tQ]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function t2(e) {
    let t = t0(e);
    t.active || t1(e, { ...t, active: !0 });
}
function t3(e) {
    let t = t0(e);
    t.active && t1(e, { ...t, active: !1 });
}
function t5(e) {
    tJ.has(e) && t1(e, tZ);
}
function t4(e, t) {
    let n = t0(e);
    n.active && t1(e, { ...n, context: t });
}
function t6(e, t) {
    return null != t && e.authorId === t;
}
function t7(e) {
    return (
        tQ.add(e),
        () => {
            tQ.delete(e);
        }
    );
}
function t8(e) {
    let t = i.useCallback(() => (null == e ? tZ : t0(e)), [e]);
    return i.useSyncExternalStore(t7, t, t);
}
(n(134528), n(947204));
let t9 = { past: [], present: [], future: [] };
function ne(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function nt(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function nn(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => nt(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: nt(e.from, t, n), to: nt(e.to, t, n) };
        case "text":
            return { ...e, at: nt(e.at, t, n) };
    }
}
function nl(e) {
    return e.some((e) => "erase" !== e.kind);
}
function nr(e, t) {
    switch (e.kind) {
        case "marker":
            return e.points.length > 1;
        case "erase":
            return e.points.length > 0;
        case "circle":
        case "square": {
            let n = e.width * t.width;
            return Math.abs(e.to.x - e.from.x) * t.width >= n && Math.abs(e.to.y - e.from.y) * t.height >= n;
        }
        case "text":
            return "" !== e.text.trim();
    }
}
function na(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function ni(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function ns(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => ni(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = ni(e.from, t),
                l = ni(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = ni(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function no(e) {
    return nl(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let nu = [3, 6, 12],
    nc = [10, 20, 40],
    nd = (0, eR.D)(() => ({ byProject: {} })),
    nm = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: t9,
        sketchDismissedFor: null,
    };
function nf(e) {
    return nd.getState().byProject[e] ?? null;
}
function nh(e, t) {
    let n = nf(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = nd.getState();
    nd.setState({ byProject: { ...r, [e]: l } });
}
function np(e) {
    if (null == nf(e)) return;
    let { [e]: t, ...n } = nd.getState().byProject;
    (nd.setState({ byProject: n }), t5(e));
}
function ng(e, t) {
    null != nf(e) &&
        (nh(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? t2(e) : t3(e));
}
function nx(e, t) {
    nh(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return ne(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return ne(
                        e,
                        e.present.map((e) => (e.id === t.id ? nn(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : ne(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : ne(e, []);
                case "undo": {
                    let t = e.past.at(-1);
                    if (null == t) return e;
                    return { past: e.past.slice(0, -1), present: t, future: [e.present, ...e.future] };
                }
                case "redo": {
                    let [t, ...n] = e.future;
                    if (null == t) return e;
                    return { past: [...e.past, e.present], present: t, future: n };
                }
            }
        })(e.history, t);
        return n === e.history ? e : { ...e, history: n };
    });
}
function nv(e) {
    return nd.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var nj = n(39416);
function nb(e) {
    let { enabled: t, onLongPress: n, children: l } = e,
        [r] = i.useState(() =>
            (function () {
                let e = null,
                    t = !1;
                function n() {
                    (null != e && clearTimeout(e), (e = null));
                }
                function l() {
                    (n(), (t = !1));
                }
                return {
                    press: (n) => {
                        (l(),
                            (e = setTimeout(() => {
                                ((e = null), (t = !0), n());
                            }, 500)));
                    },
                    release: () => {
                        (n(), t && (e = setTimeout(l, 0)));
                    },
                    cancel: l,
                    takeClick: () => {
                        let e = !t;
                        return ((t = !1), e);
                    },
                };
            })(),
        );
    return (
        i.useEffect(() => r.cancel, [r]),
        (0, a.jsx)("span", {
            className: nj.i5,
            onPointerDown: (e) => {
                t && 0 === e.button ? r.press(n) : r.cancel();
            },
            onPointerUp: r.release,
            onPointerLeave: (e) => {
                0 !== e.buttons && r.cancel();
            },
            onPointerCancel: r.cancel,
            onClickCapture: (e) => {
                r.takeClick() || (e.preventDefault(), e.stopPropagation());
            },
            children: l,
        })
    );
}
var ny = n(314116),
    nk = n(858899),
    nw = n(77729),
    nN = n(264572).Buffer;
async function nC(e, t) {
    if (tU.isPlatformEmbedded) {
        let n = nN.from(await e.arrayBuffer());
        if ("function" == typeof nw.A.fileManager.saveWithDialog2) await nw.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await nw.A.fileManager.saveWithDialog(n, t);
            } catch {}
        return;
    }
    let n = URL.createObjectURL(e);
    try {
        let e = document.createElement("a");
        ((e.href = n), (e.download = t), (e.rel = "noopener"), e.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(n), 0);
    }
}
var nA = n(688954);
async function nS(e, t, n) {
    (0, _.ensureConnection)(e);
    let l = await (0, eT.vX)(e, t);
    (0, _.sendUserMessage)(e, n, [l]);
}
var nE = n(245179);
let nI = new Set(),
    nM = null;
function n_(e, t) {
    let n = i.useRef(t);
    (i.useLayoutEffect(() => {
        n.current = t;
    }),
        i.useEffect(() => {
            if (null == e) return;
            let t = (t) => {
                t === e && n.current();
            };
            return (
                nI.add(t),
                () => {
                    nI.delete(t);
                }
            );
        }, [e]));
}
var nP = n(885386);
function nR() {
    return nP.Q_.useSetting() || !1;
}
var nT = n(573083),
    nL = n(192308),
    n$ = n(128761),
    nD = n(12177),
    nz = n(744627),
    nO = n(513845),
    nF = n(802905),
    nq = n(951178);
let nU = { width: 320, height: 240 };
var nG = n(855859),
    nB = n(238490),
    nK = n(991690),
    nH = n(696645);
function nW(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function nV(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, nH.X)(e.surface)
                : E.intl.formatToPlainString(S.default["6xVl+N"], {
                      surface: (0, nH.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return E.intl.string(S.default.y5GiL1);
        case "overlay":
            return E.intl.string(S.default["2940LX"]);
        case "bot":
            return E.intl.string(S.default.tjpaGN);
    }
}
var nX = n(939398),
    nY = n(86147),
    nZ = n(729475),
    nJ = n(91242),
    nQ = n(156548),
    n0 = n(869146),
    n1 = n(475815),
    n2 = n(165610);
function n3(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, nQ.cR)(t?.id ?? null),
        r = (0, nT.Zv)(n),
        i = (0, o.bG)(
            [n0.A, nJ.A],
            () => null != t && n0.A.getWindowOpen(q.MLl.ACTIVITY_POPOUT) && nJ.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, n2.x1)(t) || i || r) return null;
    let s = (0, nQ.fl)(t.id);
    if (null == s || !(0, n1.Ub)(s)) return null;
    let u = E.intl.string(l ? E.t.Z7MyNB : E.t.OIDkcp);
    return (0, a.jsx)(y.A.Icon, {
        tooltip: u,
        icon: l ? nY.z : nZ.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, nQ.U8)(t.id),
    });
}
var n5 = n(704745);
function n4(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = E.intl.string(S.default.I2ucou);
    return (0, a.jsx)(ev.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: ev.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(ej.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(eb.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = nW(e);
                        return (0, a.jsx)(
                            eb.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: nV(e),
                                checked: t === nW(n),
                                action: () => {
                                    (l(e), u());
                                },
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: l, ...r } = e,
                { isShown: i } = t;
            return (0, a.jsx)(ex.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: n5.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: E.intl.string(S.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: nV(n),
                        }),
                        (0, a.jsx)(ta.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var n6 = n(324641),
    n7 = n(627363),
    n8 = n(153207),
    n9 = n(803101),
    le = n(226178),
    lt = n(625180),
    ln = n(672929),
    ll = n(111534),
    lr = n(754027),
    la = n(782603),
    li = n(780338),
    ls = n(782134),
    lo = n(113494),
    lu = n(663417),
    lc = n(70688),
    ld = n(173936),
    lm = n(473935),
    lf = n(408278),
    lh = n(365199),
    lp = n(7437),
    lg = n(147036),
    lx = n(957565),
    lv = n(785389),
    lj = n(123917),
    lb = n(860402);
let ly = new Set();
var lk = n(329356),
    lw = n(442331),
    lN = n(616334),
    lC = n(189714),
    lA = n(733791),
    lS = n(189213),
    lE = n(331322),
    lI = n(664619),
    lM = n(706935);
function l_(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = "delete" === l,
        h = f ? (0, lA.fI)(n) : (0, lA.Kd)(n),
        p = f ? null : (0, lA.L4)(n),
        g = (0, lA.Mi)(n),
        x = f
            ? E.intl.formatToPlainString(S.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(S.default.x6FvsZ, { app: n.appName });
    async function j() {
        (c(!0), m(null));
        let e = f ? (0, R.xx)(t.id) : (0, lI.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(E.intl.string(f ? S.default["0XDHob"] : S.default.PJ2Fkn))
            : (f || (0, nk.P0)({ text: (0, lA.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(lS.a, {
        ...r,
        role: "alertdialog",
        title: f ? x : (0, lA.WX)((0, lM.tb)(S.default.x6FvsZ, n.appName)),
        subtitle: f ? (0, lA.J)(n) : E.intl.string(S.default["8OKM1N"]),
        "aria-label": x,
        notice: null == d ? void 0 : { message: d, type: "critical", role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: E.intl.string(f ? S.default.aC42bN : S.default.BGF8VT),
                variant: "critical-primary",
                loading: u,
                disabled: u,
                onClick: () => {
                    j().catch(() => {});
                },
            },
        ],
        children: (0, a.jsxs)(lE.B, {
            gap: 12,
            children: [
                h.length > 0 || null != p
                    ? (0, a.jsx)(lM.Ay, {
                          items: h,
                          optionalItem:
                              null == p
                                  ? void 0
                                  : { item: p, checked: s, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != g ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: g }) : null,
            ],
        }),
    });
}
function lP(e) {
    (0, nL.openModal)((t) => (0, a.jsx)(l_, { ...t, ...e }));
}
var lR = n(587895);
function lT(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, u] = i.useState(null),
        c = (0, o.bG)([lR.A], () => lR.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        d = E.intl.formatToPlainString(S.default.m8KWic, { app: c });
    async function m() {
        (r(!0), u(null));
        let e = await (0, lI.R_)(t.id);
        (r(!1), e)
            ? ((0, nk.P0)({ text: E.intl.formatToPlainString(S.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : u(E.intl.string(S.default["rE/0SD"]));
    }
    return (0, a.jsx)(lS.a, {
        ...n,
        role: "alertdialog",
        title: d,
        subtitle: E.intl.string(S.default.wve4kB),
        "aria-label": d,
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: E.intl.string(S.default.GqcQyH),
                variant: "critical-primary",
                loading: l,
                disabled: l,
                onClick: () => {
                    m().catch(() => {});
                },
            },
        ],
    });
}
var lL = n(552821);
let l$ = [];
function lD(e) {
    (0, nk.P0)({ text: e, variant: "critical" });
}
function lz(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: s,
            canRemix: u,
            onExport: c,
            onImport: d,
            onRemix: m,
            onConnectTool: f,
            onHistory: h,
            onRefresh: p,
            isRefreshing: g = !1,
            onTogglePreviewPaused: x,
            previewPaused: v = !1,
            previewPauseDisabled: j = !1,
            onClose: b,
            refreshApplicationId: y,
            previewProjectId: k,
            onCloseMenu: w,
        } = e,
        N = (0, lC.iI)(t),
        C = i.useContext(lk.bI),
        { pending: A, refresh: I } = (0, lp.A)(y ?? null),
        { pending: M, connect: _ } = (function (e, t) {
            let [n, l] = i.useState(ly),
                r = i.useRef(ly),
                a = i.useCallback((e) => {
                    ((r.current = (0, lv.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, lv.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, lb.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, lj.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, lv.rq)(l.error)
                                          ? E.intl.string(S.default["jCQ/1B"])
                                          : E.intl.string(S.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(k ?? null, lD),
        P = (0, o.bG)([lw.A], () => (null == k ? l$ : lw.A.getDeclaredConnections(k))),
        T = i.useMemo(() => (0, lv.Xl)(P), [P]),
        L = (0, lA.Bs)(t),
        $ = (0, lA.CU)(t) && s,
        D = (0, o.bG)(
            [tP.Ay],
            () => {
                let e = tP.Ay.getProject(t);
                return null != e && (0, tP.jf)(e);
            },
            [t],
        ),
        z = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: E.intl.string(S.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: E.intl.formatToPlainString(S.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: E.intl.formatToPlainString(S.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != y, refreshPending: A, offers: T, connectPending: M }),
        O = i.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        F = null != m && u,
        q = s && null != d,
        G = F || null != c || q || null != f || null != h,
        B = lx.p5 && null != l,
        K = lx.p5,
        H = N ? la.BellIcon : li.BellSlashIcon,
        W = v ? ls.PlayIcon : lo.PauseIcon;
    return (0, a.jsxs)(ej.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: w,
        onSelect: w,
        children: [
            null != p || null != x || null != b
                ? (0, a.jsxs)(eb.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(eb.Dr, {
                                    id: "refresh",
                                    icon: lu.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: lu.RefreshIcon },
                                    label: E.intl.string(S.default["p4B/7M"]),
                                    disabled: g,
                                    action: p,
                                })
                              : null,
                          null != x
                              ? (0, a.jsx)(eb.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: W,
                                    leadingAccessory: { type: "icon", icon: W },
                                    label: E.intl.string(v ? S.default.ZKd2Cw : S.default.VHxerm),
                                    disabled: j,
                                    action: x,
                                })
                              : null,
                          null != b
                              ? (0, a.jsx)(eb.Dr, {
                                    id: "close",
                                    icon: lc.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: lc.DoorExitIcon },
                                    label: E.intl.string(S.default["/TlGcK"]),
                                    action: b,
                                })
                              : null,
                      ],
                  })
                : null,
            z.length > 0
                ? (0, a.jsx)(eb.rX, {
                      children: z.map((e) =>
                          (0, a.jsx)(
                              eb.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void I();
                                      let t = null == e.connectionType ? null : O.get(e.connectionType);
                                      null != t && _(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(eb.rX, {
                children: (0, a.jsx)(eb.Dr, {
                    id: "mute",
                    label: E.intl.string(N ? S.default.s9rCuH : S.default["a+i/As"]),
                    icon: H,
                    leadingAccessory: { type: "icon", icon: H },
                    action: () => (0, lC.$L)(t, !N),
                }),
            }),
            G
                ? (0, a.jsxs)(eb.rX, {
                      children: [
                          F
                              ? (0, a.jsx)(eb.Dr, { id: "remix", label: E.intl.string(S.default.XWgAfc), action: m })
                              : null,
                          null != c
                              ? (0, a.jsx)(eb.Dr, { id: "export", label: E.intl.string(S.default.WsEEP7), action: c })
                              : null,
                          q
                              ? (0, a.jsx)(eb.Dr, { id: "import", label: E.intl.string(S.default.rWGY3e), action: d })
                              : null,
                          null != f
                              ? (0, a.jsx)(eb.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(S.default.yOIql5),
                                    action: f,
                                })
                              : null,
                          null != h
                              ? (0, a.jsx)(eb.Dr, {
                                    id: "history",
                                    label: E.intl.string(S.default["3hIVou"]),
                                    action: h,
                                })
                              : null,
                      ],
                  })
                : null,
            K
                ? (0, a.jsxs)(eb.rX, {
                      children: [
                          B
                              ? (0, a.jsx)(eb.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: ld.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: ld.LinkIcon },
                                    action: () =>
                                        (0, lx.C)((0, lg.n)(l, U.VV.CONJURE, t), () =>
                                            (0, nk.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eb.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(S.default["nm/zuU"]),
                              icon: lm.L,
                              leadingAccessory: { type: "icon", icon: lm.L },
                              action: () =>
                                  (0, lx.C)(t, () =>
                                      (0, nk.P0)({ text: E.intl.string(S.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || D || L?.canRemoveBot === !0
                ? (0, a.jsxs)(eb.rX, {
                      children: [
                          s || D
                              ? (0, a.jsx)(eb.Dr, {
                                    id: "settings",
                                    label: E.intl.string(S.default.FzfmQ8),
                                    icon: t$.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: t$.SettingsIcon },
                                    action: () =>
                                        (0, lN.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: C,
                                        }),
                                })
                              : null,
                          L?.canRemoveBot === !0
                              ? (0, a.jsx)(eb.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(S.default["3gKG2j"], { server: L.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = tP.Ay.getProject(t);
                                        null != e && lP({ project: e, target: L, action: "remove" });
                                    },
                                })
                              : null,
                          $
                              ? (0, a.jsx)(eb.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(S.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = tP.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, nL.openModal)((t) => (0, a.jsx)(lT, { ...t, ...e })));
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(eb.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = tP.Ay.getProject(t);
                                        if (null != e && null != L) lP({ project: e, target: L, action: "delete" });
                                        else
                                            (0, ny.A)({
                                                title: E.intl.formatToPlainString(S.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(S.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, R.K)(t, () =>
                                                        (0, nk.P0)({
                                                            text: E.intl.string(S.default["0XDHob"]),
                                                            variant: "critical",
                                                        }),
                                                    );
                                                },
                                            });
                                    },
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
function lO(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(ev.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ev.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(lz, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: lL.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t["UKOtz+"]),
                              children: (0, a.jsx)(lf.K, {
                                  icon: lh.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(y.A.Icon, {
                              icon: lh.MoreHorizontalIcon,
                              tooltip: E.intl.string(E.t["UKOtz+"]),
                              "aria-label": E.intl.string(E.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: r,
                          }),
            });
        },
    });
}
var lF = n(457827),
    lq = n(722701),
    lU = n(949616),
    lG = n(962998),
    lB = n(535466),
    lK = n(321032),
    lH = n(277085);
let lW = [];
var lV = n(17813);
function lX(e) {
    let { permissions: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsxs)(lE.B, {
              gap: 8,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default["6U+4pJ"]),
                  }),
                  (0, a.jsx)(lV.A, { permissions: t }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default.X8wPIB),
                  }),
              ],
          });
}
function lY(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: u } = e,
        { iconURL: c } = (0, lB.Ay)(t),
        [d, m] = i.useState(n),
        [f, h] = i.useState(l),
        [p, g] = i.useState(null),
        [x, j] = i.useState(null),
        [b, y] = i.useState(!1),
        k = d.trim(),
        w = k === n ? null : (0, lH.p)(k),
        N = p ?? c,
        C = (0, o.bG)([lq.A], () => lq.A.getPublishStatus(t)?.previewDevicePermissions ?? lW);
    function A() {
        (r(), u());
    }
    async function I(e) {
        if ((e.preventDefault(), b || null != w)) return;
        (y(!0), j(null));
        let r = await (0, lk.$l)(t, { name: k, icon: p, description: f }, { name: n, description: l });
        (y(!1), r) ? A() : j(E.intl.string(S.default.Fi7boI));
    }
    return (0, a.jsx)("form", {
        onSubmit: I,
        children: (0, a.jsx)(lS.a, {
            transitionState: s,
            onClose: u,
            title: E.intl.string(S.default.OmOWDq),
            subtitle: E.intl.string(S.default.Gzmlyg),
            size: "sm",
            actions: [
                { text: E.intl.string(S.default["bz/M68"]), variant: "secondary", onClick: A, disabled: b },
                {
                    text: E.intl.string(S.default.dyIV6M),
                    variant: "primary",
                    type: "submit",
                    loading: b,
                    disabled: null != w,
                },
            ],
            children: (0, a.jsxs)(lE.B, {
                gap: 24,
                children: [
                    (0, a.jsx)(lK.r, {
                        iconURL: N,
                        onIconChange: (e) => {
                            (g(e), j(null));
                        },
                        name: d,
                        nameError: w,
                        onNameChange: m,
                        description: f,
                        onDescriptionChange: h,
                        disabled: b,
                    }),
                    (0, a.jsx)(lX, { permissions: C }),
                    null != x
                        ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: x })
                        : null,
                ],
            }),
        }),
    });
}
var lZ = n(373540),
    lJ = n(144228);
function lQ(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, o] = i.useState(t.selected_destination_id),
        u = E.intl.string(S.default.lJrOGW);
    return (0, a.jsx)(lS.a, {
        transitionState: l,
        onClose: r,
        title: u,
        size: "sm",
        actions: [
            { text: E.intl.string(S.default.y83r6D), variant: "secondary", onClick: r },
            {
                text: E.intl.string(S.default.zh1Izp),
                variant: "primary",
                onClick: () => {
                    (n(s), r());
                },
            },
        ],
        children: (0, a.jsx)(lJ.z, {
            label: u,
            options: t.destinations.map((e) => {
                let { id: t, label: n } = e;
                return { name: n, value: t };
            }),
            value: s,
            onChange: o,
        }),
    });
}
let l0 = {
    showPublishBlocked: lZ.A,
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, nL.openModal)(
                (t) =>
                    (0, a.jsx)(lY, {
                        ...t,
                        ...e,
                        onDone: () => {
                            n = !0;
                        },
                    }),
                { onCloseCallback: () => t(n) },
            );
        }),
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, nL.openModal)(
                (t) =>
                    (0, a.jsx)(lQ, {
                        ...t,
                        options: e,
                        onDone: (e) => {
                            n = e;
                        },
                    }),
                { onCloseCallback: () => t(n) },
            );
        });
    },
    showError: (e) => (0, nk.P0)({ text: e, variant: "critical" }),
};
var l1 = n(95264),
    l2 = n(58736),
    l3 = n(333007),
    l5 = n(775121),
    l4 = n(826745),
    l6 = n(470779);
function l7(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: o,
            onSubmit: u,
            onDismiss: c,
            canSubmit: d,
            closing: m,
            onUploadFile: f,
            anchor: p = "chip",
            allowAttachments: g = !0,
            placeholder: x,
            label: v,
        } = e,
        {
            drafts: j,
            addFiles: b,
            pasteFiles: y,
            removeDraft: k,
            settled: w,
            takeRefs: C,
        } = e0({ projectId: t, surface: "design", onUploadFile: f }),
        A = i.useRef(null),
        I = (d || j.length > 0) && w && !m,
        M = i.useCallback(() => {
            if (!I) return;
            let e = C();
            u(e.length > 0 ? e : void 0);
        }, [I, C, u]),
        [_, P] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => P(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let R = i.useRef(null),
        [T, L] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = R.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => L({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let $ = T?.height ?? 44,
        D = l.left + 8,
        z = l.top + 8,
        O = Math.max(n.x, D),
        F = Math.min(Math.max("point" === p ? n.y : n.y + 32 + 4, z), Math.max(z, l.top + l.height - $ - 8));
    return (0, a.jsxs)("div", {
        ref: R,
        className: h()(l6.M0, { [l6.ho]: _ && !m, [l6.ET]: m }),
        style: { left: O, top: F },
        "data-testid": "conjure-design-compose-bar",
        children: [
            g
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: l6.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(N.m, {
                              position: "bottom",
                              text: E.intl.string(S.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: l6.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(S.default.lgvqSB),
                                  children: (0, a.jsx)(eS.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: l6.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(l4.y, {
                autoFocus: !0,
                rows: 1,
                className: l6.hF,
                value: s,
                placeholder: x ?? ("" === r ? E.intl.string(S.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? E.intl.string(S.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: m || !g ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), M());
                },
            }),
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: l6.ZO,
                      children: j.map((e) => (0, a.jsx)(e1, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function l8(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function l9(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function re(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? l8(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = l8(e());
                l((e) => (l9(e, t) ? e : t));
            }
            n();
            let r = window.setInterval(n, 250);
            return (
                window.addEventListener("resize", n),
                () => {
                    (window.clearInterval(r), window.removeEventListener("resize", n));
                }
            );
        }, [t, e]),
        n
    );
}
var rt = n(876798),
    rn = n(48507),
    rl = n(193885),
    rr = n(744898),
    ra = n(803656),
    ri = n(241326),
    rs = n(972213);
function ro(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function ru(e, t, n) {
    return {
        id: e,
        value: t,
        label: n,
        icon: function (e) {
            let { colorClass: n } = e;
            return (0, a.jsx)("svg", {
                className: n,
                width: 20,
                height: 20,
                viewBox: "0 0 24 24",
                "aria-hidden": !0,
                children: (0, a.jsx)("circle", {
                    cx: 12,
                    cy: 12,
                    r: 8,
                    fill: t,
                    stroke: "currentColor",
                    strokeWidth: 1.5,
                }),
            });
        },
    };
}
let rc = ru("red", ro(w.A.unsafe_rawColors.RED_400), () => E.intl.string(S.default.tvXfjt)),
    rd = [
        rc,
        ru("yellow", ro(w.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(S.default.FYuaJ1)),
        ru("green", ro(w.A.unsafe_rawColors.GREEN_360), () => E.intl.string(S.default["Vv+paS"])),
        ru("blue", ro(w.A.unsafe_rawColors.BLUE_345), () => E.intl.string(S.default.k9b1QJ)),
        ru("white", ro(w.A.unsafe_rawColors.WHITE), () => E.intl.string(S.default["1sOXwH"])),
    ];
function rm(e) {
    return rd.find((t) => t.id === e) ?? rc;
}
function rf(e) {
    let { colorClass: t } = e;
    return (0, a.jsx)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: (0, a.jsx)("path", {
            d: "M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        }),
    });
}
function rh(e) {
    let { colorClass: t } = e;
    return (0, a.jsxs)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: [
            (0, a.jsx)("path", {
                d: "M10 4H5.5A1.5 1.5 0 0 0 4 5.5V10M4 14v4.5A1.5 1.5 0 0 0 5.5 20H10M14 4h4.5A1.5 1.5 0 0 1 20 5.5V10",
                stroke: "currentColor",
                strokeWidth: 1.8,
                strokeLinecap: "round",
            }),
            (0, a.jsx)("path", { d: "M13 13v8l2.3-2.2 1.6 3.2 1.6-.8-1.6-3.1 3.1-.1L13 13Z", fill: "currentColor" }),
        ],
    });
}
function rp(e) {
    let { colorClass: t } = e;
    return (0, a.jsx)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: (0, a.jsx)("path", {
            d: "M14.5 4.5 20 10l-8.5 8.5H7L4 15.5a1.5 1.5 0 0 1 0-2.1L14.5 4.5ZM9.5 9.5l5.5 5.5M7 18.5h13",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinejoin: "round",
        }),
    });
}
function rg(e) {
    return function (t) {
        let { colorClass: n } = t;
        return (0, a.jsx)("svg", {
            className: n,
            width: 20,
            height: 20,
            viewBox: "0 0 24 24",
            "aria-hidden": !0,
            children: (0, a.jsx)("circle", { cx: 12, cy: 12, r: e / 2, fill: "currentColor" }),
        });
    };
}
let rx = nu.map((e) => rg(Math.min(16, e + 3))),
    rv = nc.map((e) => rg(Math.min(16, e / 2.5))),
    rj = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
    rb = {
        circle: {
            icon: function (e) {
                let { colorClass: t } = e;
                return (0, a.jsx)("svg", {
                    className: t,
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, a.jsx)("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeWidth: 2 }),
                });
            },
            label: () => E.intl.string(S.default.oIZQbm),
        },
        square: {
            icon: function (e) {
                let { colorClass: t } = e;
                return (0, a.jsx)("svg", {
                    className: t,
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, a.jsx)("rect", {
                        x: 5,
                        y: 5,
                        width: 14,
                        height: 14,
                        rx: 1.5,
                        stroke: "currentColor",
                        strokeWidth: 2,
                    }),
                });
            },
            label: () => E.intl.string(S.default.ARNVr7),
        },
    };
function ry(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: nj.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(rt.k, {
                icon: t,
                size: "sm",
                variant: "icon-only",
                pressed: l,
                "aria-label": n,
                onClick: r,
            }),
        }),
    });
}
function rk(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(lf.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function rw(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: nj.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: nj.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function rN(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rm(n.colorId),
        h = rb[u],
        p = E.intl.string(S.default.hUm825),
        g = E.intl.string(S.default.n5IA3a),
        x = E.intl.string(S.default.r5dX6t),
        v = E.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: nj.t$,
        children: [
            (0, a.jsx)("div", {
                className: nj.NT,
                children: (0, a.jsx)(ry, {
                    icon: rh,
                    label: E.intl.string(S.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => ng(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: nj.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": E.intl.string(S.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(ry, {
                        icon: rf,
                        label: E.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => ng(t, "move"),
                    }),
                    (0, a.jsx)(ry, {
                        icon: rn.x,
                        label: E.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => ng(t, "text"),
                    }),
                    (0, a.jsx)(rw, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(ry, {
                                icon: rl.V,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (ng(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rx.map((n, l) =>
                                (0, a.jsx)(
                                    ry,
                                    {
                                        icon: n,
                                        label: E.intl.string(rj[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (nh(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), t3(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rw, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(ry, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (ng(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(rb).map((n) =>
                                (0, a.jsx)(
                                    ry,
                                    {
                                        icon: rb[n].icon,
                                        label: rb[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (ng(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rw, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(ry, {
                                icon: rp,
                                label: g,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (ng(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            rv.map((n, l) =>
                                (0, a.jsx)(
                                    ry,
                                    {
                                        icon: n,
                                        label: E.intl.string(rj[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (nh(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), t3(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rw, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(rk, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rd.map((n) =>
                                (0, a.jsx)(
                                    ry,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                nh(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: nj.Gz, role: "separator" }),
                    (0, a.jsx)(rk, {
                        icon: rr.e,
                        label: E.intl.string((0, tU.isMac)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(rk, {
                        icon: ra.U,
                        label: E.intl.string((0, tU.isMac)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(rk, {
                        icon: ri.TrashIcon,
                        label: E.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: nj.Gz, role: "separator" }),
                    (0, a.jsx)(rk, { icon: rs.XLargeIcon, label: E.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let rC = w.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function rA(e, t, n) {
    function l(e) {
        return e * n.width;
    }
    function r(e) {
        return e * n.height;
    }
    for (let n of ((e.lineCap = "round"), (e.lineJoin = "round"), t))
        switch (
            ((e.globalCompositeOperation = "erase" === n.kind ? "destination-out" : "source-over"),
            "erase" !== n.kind && ((e.strokeStyle = n.color), (e.fillStyle = n.color)),
            n.kind)
        ) {
            case "marker":
            case "erase": {
                let [t, ...a] = n.points;
                if (null == t) break;
                for (let i of ((e.lineWidth = l(n.width)),
                e.beginPath(),
                e.moveTo(l(t.x), r(t.y)),
                0 === a.length && e.lineTo(l(t.x), r(t.y)),
                a))
                    e.lineTo(l(i.x), r(i.y));
                e.stroke();
                break;
            }
            case "square":
                ((e.lineWidth = l(n.width)),
                    e.strokeRect(
                        l(Math.min(n.from.x, n.to.x)),
                        r(Math.min(n.from.y, n.to.y)),
                        l(Math.abs(n.to.x - n.from.x)),
                        r(Math.abs(n.to.y - n.from.y)),
                    ));
                break;
            case "circle":
                ((e.lineWidth = l(n.width)),
                    e.beginPath(),
                    e.ellipse(
                        l((n.from.x + n.to.x) / 2),
                        r((n.from.y + n.to.y) / 2),
                        l(Math.abs(n.to.x - n.from.x) / 2),
                        r(Math.abs(n.to.y - n.from.y) / 2),
                        0,
                        0,
                        2 * Math.PI,
                    ),
                    e.stroke());
                break;
            case "text": {
                let t = l(n.size);
                ((e.font = `600 ${t}px sans-serif`),
                    (e.textBaseline = "top"),
                    (e.lineWidth = 0.18 * t),
                    (e.strokeStyle = rC),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function rS(e) {
    if ("u" > typeof OffscreenCanvas) {
        let t = new OffscreenCanvas(e.width, e.height),
            n = t.getContext("2d");
        return null == n
            ? null
            : { canvas: t, ctx: n, toBlob: () => t.convertToBlob({ type: "image/webp", quality: 0.92 }) };
    }
    let t = document.createElement("canvas");
    ((t.width = e.width), (t.height = e.height));
    let n = t.getContext("2d");
    return null == n ? null : { canvas: t, ctx: n, toBlob: () => new Promise((e) => t.toBlob(e, "image/webp", 0.92)) };
}
async function rE(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = rS(e),
            r = rS(e);
        if (null == l || null == r) return null;
        return (rA(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let rI = new Map(),
    rM = new Map(),
    r_ = (0, eR.D)(() => ({ byMessageKey: {} }));
function rP(e, t) {
    let { [e]: n, ...l } = r_.getState().byMessageKey;
    r_.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function rR(e, t) {
    null == t ? rI.delete(e) : rI.set(e, t);
}
function rT(e) {
    return rI.get(e)?.() ?? Promise.resolve(null);
}
let rL = { dx: 0, dy: 0 },
    r$ = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    rD = 1;
function rz(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = nv(s),
        { active: u } = t8(s),
        c = (0, nL.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => np(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && t2(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(rO, { projectId: s, state: o, resolveIframe: r });
}
function rO(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = re(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [p, g] = i.useState(rL),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        N = i.useRef(0),
        { tool: C, history: A } = n,
        I = rm(n.colorId),
        M = "pick" !== C,
        _ = "marker" === n.tool ? nu[n.markerSize] : "eraser" === n.tool ? nc[n.eraserSize] : null,
        P = "move" === C ? (A.present.find((e) => e.id === f) ?? null) : null,
        R = null != r;
    (i.useLayoutEffect(() => {
        m(v.current?.offsetWidth ?? 0);
    }, [R]),
        i.useLayoutEffect(() => {
            y.current = s;
        }, [s]));
    let T = i.useCallback(async () => {
        let e = l();
        if (null == e) return null;
        let t = await (0, n6.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, l3.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, n6.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (rR(t, T), () => rR(t, null)), [t, T]);
    let L = i.useCallback(
        (e) => {
            ((w.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === N.current &&
                    (N.current = requestAnimationFrame(() => {
                        N.current = 0;
                        let e = k.current,
                            t = w.current;
                        null != e &&
                            (e.toggleAttribute("data-visible", null != t),
                            null != t && (e.style.transform = `translate(${t.x}px, ${t.y}px)`));
                    })));
        },
        [r],
    );
    i.useEffect(() => () => cancelAnimationFrame(N.current), []);
    let $ = i.useCallback(() => {
        let e = x.current;
        if (null == e || null == r) return;
        let t = window.devicePixelRatio,
            n = Math.round(r.width * t),
            l = Math.round(r.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let a = e.getContext("2d");
        if (null == a) return;
        (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, l), a.setTransform(t, 0, 0, t, 0, 0));
        let i = b.current,
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? nn(e, p.dx, p.dy) : e)),
            o = j.current;
        rA(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, A.present, p]);
    i.useLayoutEffect($, [$]);
    let D = i.useCallback(
            (e) =>
                null == r ? { x: 0, y: 0 } : { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height },
            [r],
        ),
        z = i.useCallback(() => {
            let e = y.current;
            if (null == e || null == r) return;
            y.current = null;
            let n = {
                id: `mark-${rD++}`,
                kind: "text",
                color: I.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (nr(n, r) && nx(t, { type: "commit", shape: n }), o(null));
        }, [t, I, r]),
        O = i.useCallback(() => {
            ((y.current = null), o(null));
        }, []),
        F = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != y.current) return void z();
                let t = D(e);
                switch (C) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == P ? null : ns(P, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? P
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = ni(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => ni(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (na(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = ni(e.from, n),
                                                                  r = ni(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => na(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = ni(e.from, n),
                                                                  r = ni(e.to, n),
                                                                  a = Math.abs(r.x - t.x) / 2,
                                                                  i = Math.abs(r.y - t.y) / 2;
                                                              if (0 === a || 0 === i) return !1;
                                                              let s = (t.x + r.x) / 2,
                                                                  o = (t.y + r.y) / 2;
                                                              return (
                                                                  Math.abs(
                                                                      Math.hypot((l.x - s) / a, (l.y - o) / i) - 1,
                                                                  ) <=
                                                                  (6 + (e.width * n.width) / 2) / Math.min(a, i)
                                                              );
                                                          }
                                                          case "text": {
                                                              let t = ns(e, n);
                                                              return (
                                                                  l.x >= t.x - 6 &&
                                                                  l.x <= t.x + t.width + 6 &&
                                                                  l.y >= t.y - 6 &&
                                                                  l.y <= t.y + t.height + 6
                                                              );
                                                          }
                                                      }
                                                  })(e[l], t, n)
                                              )
                                                  return e[l];
                                          return null;
                                      })(A.present, t, r);
                        if ((h(a?.id ?? null), null == a)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (b.current = { id: a.id, origin: t }));
                        return;
                    }
                    case "text":
                        o({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!nl(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${rD++}`,
                                kind: "erase",
                                width: nc[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${rD++}`,
                                kind: "marker",
                                color: I.value,
                                width: nu[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${rD++}`,
                                kind: C,
                                color: I.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                $();
            },
            [r, C, I, P, A.present, n.markerSize, n.eraserSize, D, z, $],
        ),
        q = i.useCallback(
            (e) => {
                L(e);
                let t = D(e),
                    n = b.current;
                if (null != n) return void g({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = j.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (j.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (j.current = { ...l, to: t }),
                    $());
            },
            [D, L, $],
        ),
        U = i.useCallback(() => {
            x.current?.removeAttribute("data-dragging");
            let e = b.current;
            if (null != e) {
                ((b.current = null), g(rL), nx(t, { type: "move", id: e.id, dx: p.dx, dy: p.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && nr(n, r) ? nx(t, { type: "commit", shape: n }) : $());
        }, [t, r, p, $]),
        G = i.useCallback(() => np(t), [t]),
        B = i.useCallback(() => nx(t, { type: "undo" }), [t]),
        K = i.useCallback(() => nx(t, { type: "redo" }), [t]),
        H = i.useCallback(() => nx(t, { type: "clear" }), [t]),
        W = i.useRef({ tool: C, selected: P, exit: G, undo: B, redo: K });
    if (
        (i.useLayoutEffect(() => {
            W.current = { tool: C, selected: P, exit: G, undo: B, redo: K };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, ei.Cw)((0, ei.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != y.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = W.current,
                    s = e.key.toLowerCase();
                if (e.metaKey || e.ctrlKey) {
                    if (e.altKey || ("z" !== s && "y" !== s)) return;
                    (e.preventDefault(), "y" === s || e.shiftKey ? i() : a());
                    return;
                }
                if (e.altKey) return;
                if ("Escape" === e.key) {
                    if ("pick" === n) return;
                    (e.preventDefault(), null != l ? h(null) : r());
                    return;
                }
                if (("Delete" === e.key || "Backspace" === e.key) && null != l) {
                    (e.preventDefault(), nx(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = r$[s];
                null != o && (e.preventDefault(), ng(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (M) return (l5.A.disable(), () => l5.A.enable());
        }, [M]),
        null == r)
    )
        return null;
    let V = Math.max(8, r.left - d - 8),
        X = null == P ? null : ns(null == b.current ? P : nn(P, p.dx, p.dy), r);
    return (0, l3.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: nj.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: nj.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: nj.Ji,
                            "data-tool": C,
                            "data-interactive": M && !u ? "" : void 0,
                            "aria-label": E.intl.string(S.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: F,
                            onPointerEnter: L,
                            onPointerLeave: () => L(null),
                            onPointerMove: q,
                            onPointerUp: U,
                            onPointerCancel: U,
                        }),
                        null == _ || u
                            ? null
                            : (0, a.jsx)("div", {
                                  ref: k,
                                  className: nj.V$,
                                  "data-tool": C,
                                  "data-color": I.id,
                                  style: { width: _, height: _ },
                                  "aria-hidden": !0,
                              }),
                        null == X
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: nj.r1,
                                  style: { left: X.x, top: X.y, width: X.width, height: X.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: nj.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: nj.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: nj.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: nj.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(l7, {
                          projectId: t,
                          anchor: "point",
                          at: { x: r.left + s.at.x * r.width, y: r.top + s.at.y * r.height },
                          bounds: r,
                          kind: "",
                          placeholder: E.intl.string(S.default["8gX1lw"]),
                          label: E.intl.string(S.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: s.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: z,
                          onUploadFile: (e) => (0, eT.vX)(t, e),
                          onDismiss: O,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: nj.ej,
                    style: { left: V, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(rN, { projectId: t, state: n, onExit: G, onUndo: B, onRedo: K, onClear: H }),
                }),
            ],
        }),
        document.body,
    );
}
var rF = n(308081),
    rq = n(689175),
    rU = n(683071),
    rG = n(218394),
    rB = n(115982),
    rK = n(886540);
function rH(e) {
    return !(0, rK.BL)(e) && !0 !== e.stopRequested;
}
var rW = n(104317),
    rV = n(643278),
    rX = n(566424),
    rY = n(683063),
    rZ = n(140735),
    rJ = n(138212);
function rQ(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: h()(rJ.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: h()(rJ.wx, null != n && rJ.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var r0 = n(148590);
function r1(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function r2(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: o,
            beforeBody: u,
            children: c,
            ...d
        } = e,
        m = i.useId(),
        [f, p] = i.useState(!l),
        [g, x] = i.useState(l);
    g !== l && (x(l), p(!l));
    let v = i.useCallback(() => p((e) => !e), []),
        j = f ? ta.a : e3._,
        b = null != n || l;
    return (0, a.jsxs)(rQ, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: r0.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(C.D, {
                                className: r0.L$,
                                onClick: v,
                                "aria-expanded": f,
                                "aria-controls": m,
                                "aria-label": f ? s : r,
                                children: (0, a.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: f ? void 0 : r0.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: h()(r0.rf, o), hidden: !f, children: c })],
    });
}
var r3 = n(883646);
let r5 = [];
function r4(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: h()(r3.xL, {
            [r3.Vb]: "in_progress" === t,
            [r3.cT]: "completed" === t,
            [r3.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return E.intl.string(S.default.KvBdun);
                case "in_progress":
                    return E.intl.string(S.default["m5G9+S"]);
                case "unfinished":
                    return E.intl.string(S.default.lRpwhD);
                default:
                    return E.intl.string(S.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(eI.y, {
                type: eI.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: r3.Qd,
                itemClassName: r3.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: r3.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: r3.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function r6(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : r5), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [c, d] = i.useState(s),
        [m, f] = i.useState(!1);
    c !== s && (d(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && f(!1));
    let h = o.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        i.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let p = o.slice(0, 3),
        g = o.length - p.length;
    return (0, a.jsxs)("span", {
        className: r3.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    rY.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: r3.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: r3.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function r7(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: s = !0 } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [r, a] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                r !== t && (a(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        u =
            ((t = (r ?? r5).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map();
                        for (let n of e) {
                            if (null == n.todoId || "" === n.todoId) continue;
                            let e = t.get(n.todoId);
                            null != e ? e.push(n) : t.set(n.todoId, [n]);
                        }
                        return t;
                    })(r ?? r5),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: r3.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: h()(r3.AS, { [r3.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(r4, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: r3.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: r3.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(r6, { agents: u.get(e.id) ?? r5, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: r3.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(r4, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: r3.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: r3.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function r8(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(S.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(S.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(r2, {
        title: E.intl.string(S.default.RtzECX),
        meta: (0, a.jsx)(r1, { children: c }),
        superseded: s,
        showLabel: E.intl.string(S.default.RKyN9q),
        hideLabel: E.intl.string(S.default.xydHoj),
        className: r3.Nr,
        bodyClassName: r3.rf,
        beforeBody: r && !s ? (0, a.jsx)(rZ.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(r7, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var r9 = n(308665),
    ae = n(59678),
    at = n(903847);
function an(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        c = null != n,
        [d, m] = i.useState(n ?? "top"),
        [f, p] = i.useState(c),
        [g, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(c);
    (b !== c && (y(c), null != n ? (m(n), p(!0)) : (x(!1), j(!1))),
        i.useEffect(() => {
            if (c || !f) return;
            let e = setTimeout(() => p(!1), 150);
            return () => clearTimeout(e);
        }, [c, f]),
        i.useEffect(() => {
            if (!f || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [f, c]));
    let [k, w] = i.useState(!1),
        [A, I] = i.useState(!1),
        [M, _] = i.useState(v);
    (M !== v && (_(v), v ? w(!0) : I(!1)),
        i.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => w(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        i.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => I(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let P = null != l && l.length > 0,
        R = i.useCallback(() => j((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: at.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: h()(at.vK, { [at.ho]: g && c, [at.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: h()(at.Rk, ae.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(rX.A, {
                                        glyph: (0, a.jsx)(r9.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(C.D, {
                                    className: at.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: h()(at.Rk, ae.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(rX.A, {
                                            glyph: (0, a.jsx)(r9.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          P
                              ? (0, a.jsx)(N.m, {
                                    text: E.intl.string(S.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(C.D, {
                                        className: at.BO,
                                        onClick: R,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(S.default.RtzECX),
                                        children: (0, a.jsx)(rV.ClipboardListIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  k && P
                      ? (0, a.jsx)("div", {
                            className: h()(at.vB, { [at.pg]: v && A, [at.ui]: !v }),
                            children: (0, a.jsx)(r8, {
                                todos: l,
                                provisional: s,
                                agents: o,
                                live: r,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var al = n(195880);
function ar(e) {
    let t = (0, W.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var aa = n(736553),
    ai = n(382541);
async function as(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, ai.dv)(e),
        i = new aa.u();
    try {
        await new Promise((e, s) => {
            ((l = setTimeout(() => s(Error("Timed out sending the message")), 2e4)),
                i.open({
                    url: a,
                    ticket: r,
                    onEvent: (l) => {
                        if ("hello" === l.type)
                            try {
                                i.sendUserMessage(t, n);
                            } catch (e) {
                                s(e);
                            }
                        else
                            "user_message" === l.type && l.nonce === n
                                ? e()
                                : "step" === l.type &&
                                  "turn_result" === l.kind &&
                                  "error" === l.result &&
                                  null == l.turn_id &&
                                  s(Error(l.summary ?? "The message was refused"));
                    },
                    onClose: () => s(Error("Connection closed before the message was stored")),
                }));
        });
    } finally {
        (clearTimeout(l), i.close());
    }
}
var ao = n(890497),
    au = n(103557),
    ac = n(29073),
    ad = n(590077);
function am(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = ar(e),
                [s, o] = i.useState(null),
                [u, c] = i.useState([]),
                [d, m] = i.useState(t.prompt),
                [f, h] = i.useState(!1),
                [p, g] = i.useState(!1),
                x = i.useRef(new Map()),
                v = i.useRef(!1),
                j = i.useRef(!1),
                b = i.useMemo(() => a.filter((e) => !u.some((t) => t.target.projectId === e.projectId)), [a, u]),
                y = i.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                k = i.useMemo(() => {
                    let e = s ?? y;
                    return b.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, b]),
                w = i.useMemo(() => b.filter((e) => k.includes(e.projectId)), [b, k]),
                N = i.useCallback((e) => {
                    o(e.slice(0, 10));
                }, []),
                C = d.trim(),
                A = n && !f && (w.length > 0 ? "" !== C : u.length > 0),
                I = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : eV(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          E.intl.formatToPlainString(S.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = E.intl.formatToPlainString(S.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                M = i.useCallback(() => {
                    let t, n;
                    if (!A) return;
                    if (0 === w.length) return void I(u);
                    (h(!0), g(!1));
                    let l =
                        ((t = tP.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(S.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, al.m)() }), x.current.set(e.projectId, t)),
                                as(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: C }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), o(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), g(!0));
                    });
                }, [A, I, u, e, w, C]),
                _ = i.useCallback(() => {
                    ((v.current = !0), u.length > 0 && !f && I(u), l());
                }, [I, u, l, f]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: N,
                prompt: d,
                setPrompt: m,
                sending: f,
                failed: p,
                canSubmit: A,
                submit: M,
                dismiss: _,
            };
        })(t, n, l, r, s),
        u = i.useMemo(
            () =>
                o.projects.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [o.projects],
        ),
        c = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: h()(ac.nd, ac.jx),
        "aria-labelledby": c,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: ac.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: c,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: ac.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(lf.K, {
                        icon: ed.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": E.intl.string(S.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ad.r,
                children: [
                    0 === u.length
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TbbzW5),
                          })
                        : (0, a.jsx)(ao.Z, {
                              label: E.intl.string(S.default["29gr8j"]),
                              placeholder: E.intl.string(S.default.twlOb6),
                              options: u,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(au.f, {
                        label: E.intl.string(S.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? E.intl.string(S.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ac.qr,
                children: (0, a.jsx)("div", {
                    className: ac.zt,
                    children: (0, a.jsx)(Z.$, {
                        variant: "primary",
                        size: "sm",
                        text: E.intl.string(S.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
                    }),
                }),
            }),
        ],
    });
}
var af = n(658675),
    ah = n(22231),
    ap = n(123292),
    ag = n(734057),
    ax = n(287809);
function av(e) {
    return 0 === e.options.length && null == e.input;
}
let aj = {
        [q.rbe.GUILD_TEXT]: "text",
        [q.rbe.GUILD_VOICE]: "voice",
        [q.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [q.rbe.GUILD_STAGE_VOICE]: "stage",
        [q.rbe.GUILD_FORUM]: "forum",
        [q.rbe.GUILD_MEDIA]: "media",
    },
    ab = { channel: "#", role: "@", user: "@", project: "" },
    ay = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
    };
function ak(e, t) {
    return E.intl.string(ay[e][+!!t]);
}
var aw = n(155078);
function aN(e) {
    return e.options.some((e) => null != e.image);
}
let aC = [];
async function aA(e, t) {
    await (0, nA.h)(e, "/agent/linked-apps", { method: "PUT", json: { caller_project_id: t } });
}
function aS(e, t) {
    return {
        image: e,
        selected: t,
        busy: null,
        error: null,
        onPick: () => void 0,
        onRemove: () => void 0,
        onUpload: () => void 0,
        onLink: () => Promise.resolve(!1),
    };
}
var aE = n(300344),
    aI = n(614733),
    aM = n(904363),
    a_ = n(950902),
    aP = n(384017);
function aR(e) {
    let {
            guildId: t,
            question: n,
            value: l,
            disabled: r,
            onChange: i,
            onFocus: s,
            onBlur: o,
            options: u,
            placeholder: c,
            onQueryChange: d,
            matchSorterOptions: m,
        } = e,
        f = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function p(e) {
        var t, r;
        return (
            (t = n.input ?? "channel"),
            (r = (e) => u.find((t) => t.value === e)?.label),
            e.slice(0, 10).map((e) => ({
                id: e,
                name: r(e) ?? l.find((t) => t.id === e)?.name ?? e,
                ...(function (e, t) {
                    if ("channel" === e) {
                        var n;
                        let l = null == (n = ag.A.getChannel(t)?.type) ? void 0 : aj[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = ax.default.getUser(t)?.username;
                        return { kind: e, ...(null == n ? {} : { username: n }) };
                    }
                    return { kind: e };
                })(t, e),
            }))
        );
    }
    let g = {
        options: u,
        placeholder: c,
        disabled: r,
        onQueryChange: d,
        matchSorterOptions: m,
        onFocus: s,
        onBlur: o,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, a.jsx)("div", {
        className: aP.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(ao.Z, {
                  ...g,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(p(e), t),
              })
            : (0, a.jsx)(ao.Z, {
                  ...g,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : p([e]), t),
              }),
    });
}
function aT(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, aE.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(aR, { ...l, guildId: t, options: r, placeholder: ak("channel", !0 === l.question.multi_select) });
}
function aL(e) {
    let { guildId: t, ...n } = e,
        l = (0, aM.A)(t);
    return (0, a.jsx)(aR, { ...n, guildId: t, options: l, placeholder: ak("role", !0 === n.question.multi_select) });
}
function a$(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, aI.A)(t);
    return (0, a.jsx)(aR, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: ak("user", !0 === n.question.multi_select),
    });
}
function aD(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = ar(t),
        s = i.useMemo(
            () =>
                r.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [r],
        );
    return 0 === s.length ? n : (0, a.jsx)(aR, { ...l, options: s, placeholder: ak("project", !1) });
}
function az(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, a_.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(aD, { projectId: t, fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(aT, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(aL, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(a$, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var aO = n(87221),
    aF = n(26430),
    aq = n(750943),
    aU = n(95477),
    aG = n(256905),
    aB = n(490707),
    aK = n(907702);
function aH(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, aB._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: h()(aK.Gt, aK.b6),
              children: [
                  (0, a.jsx)(aO.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: h()(aK.Gt, { [aK.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: aK.Sl,
                            onLoad: (e) => {
                                d(s);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && r({ width: t, height: n });
                            },
                            onError: u,
                            draggable: !1,
                        })
                      : null,
          });
}
function aW(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: i,
            selected: s,
            disabled: o,
            reachable: u,
            tabbable: c,
            onPick: d,
            onView: m,
            onArrow: f,
            onMeasured: p,
            onRemove: g,
        } = e,
        x = E.intl.formatToPlainString(S.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: h()(aK.Vs, { [aK.Q9]: s, [aK.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(C.D, {
                className: aK.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => d(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), f(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": E.intl.formatToPlainString(S.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: u && c ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: aK.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(aH, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: aK.Gt }),
                            (0, a.jsx)("span", {
                                className: aK.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(af.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(lJ.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: aK.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, aw.E)(t) : "")
                                ? (function (e) {
                                      let t = e.toLowerCase().split(".");
                                      if (t.length < 2 || /^\d+$/.test(t[t.length - 1]) || e.includes(":")) return e;
                                      let [n, l] = t.slice(-2),
                                          r = t.length > 2 && 2 === l.length && n.length <= 3;
                                      return t.slice(r ? -3 : -2).join(".");
                                  })(n)
                                : r.label,
                    }),
                ],
            }),
            null != g
                ? (0, a.jsx)("span", {
                      className: aK.B4,
                      children: (0, a.jsx)(N.m, {
                          text: E.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(lf.K, {
                              icon: ri.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: g,
                              disabled: o,
                              "aria-label": E.intl.string(S.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: aK.B4,
                        children: (0, a.jsx)(N.m, {
                            text: E.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(lf.K, {
                                icon: aF._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": x,
                                tabIndex: u && c ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function aV(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: u, own: c } = e,
        d = !0 === l.multi_select,
        { options: m } = l,
        f = m.length > 4 ? "gallery" : "row",
        p = i.useRef(null),
        g = i.useRef(new Map()),
        [x, v] = i.useState(null),
        j = null != x && m.some((e) => e.id === x) ? x : (m.find((e) => r.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, eT.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, aG.R)({
                                items: e.map((e, n) => {
                                    let l,
                                        r = g.current.get(t[n].id);
                                    return {
                                        type: "IMAGE",
                                        url: e,
                                        original: e,
                                        alt: t[n].label,
                                        ...(null != r
                                            ? ((l = Math.max(1, 480 / Math.max(r.width, r.height))),
                                              { width: Math.round(r.width * l), height: Math.round(r.height * l) })
                                            : {}),
                                    };
                                }),
                                startingIndex: l,
                                shouldHideMediaOptions: !0,
                                location: "ConjureClarificationImageOptions",
                            });
                        },
                        () => {},
                    );
            },
            [m, n],
        ),
        y = i.useCallback(
            (e, t) => {
                let n = (m.findIndex((t) => t.id === e.id) + t + m.length) % m.length,
                    l = m[n];
                (v(l.id), p.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || s || u(l));
            },
            [s, d, u, m],
        ),
        k =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: E.intl.string(S.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: aK.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: h()(aK.fF, "gallery" === f ? aK.nV : aK.nM, { [aK.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            aW,
                            {
                                projectId: n,
                                option: e,
                                multi: d,
                                selected: r.includes(e.id),
                                disabled: s,
                                reachable: o,
                                tabbable: d || e.id === j,
                                onPick: (e) => {
                                    (v(e.id), u(e));
                                },
                                onView: b,
                                onArrow: y,
                                onMeasured: (t) => g.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != k
                        ? (0, a.jsx)(
                              aW,
                              {
                                  projectId: n,
                                  option: k,
                                  multi: d,
                                  selected: c.selected,
                                  disabled: s,
                                  reachable: o,
                                  tabbable: !0,
                                  onPick: c.onPick,
                                  onView: () => void 0,
                                  onArrow: () => void 0,
                                  onMeasured: () => void 0,
                                  onRemove: c.onRemove,
                              },
                              k.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(aX, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: E.intl.string(/\bicons?\b/i.test(l.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function aX(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(""),
        f = r ? 0 : -1,
        h = n.busy;
    function p() {
        "" !== d.trim() &&
            null == h &&
            n.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, a.jsxs)("div", {
        className: aK.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: aK.QJ,
                children: [
                    (0, a.jsx)(Z.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: aq.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(Z.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: ld.LinkIcon,
                              text: E.intl.string(S.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: aK.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            var l, r;
                            let a = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""),
                                null != a &&
                                    n.onUpload(
                                        ((l = a.name),
                                        (r = a.type),
                                        (0, e_.Oq)(a.size, r)
                                            ? (0, eT.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: eK(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: aK.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: aK.Hs,
                              children: (0, a.jsx)(aU.k, {
                                  label: E.intl.string(S.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: E.intl.string(S.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), p())
                                          : "Escape" === e.key && (e.stopPropagation(), c(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == h && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                              className: aK.gd,
                              children: [
                                  (0, a.jsx)(Z.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(S.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(ap.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: E.intl.string(S.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      "data-conjure-own-image-error": !0,
                      children: n.error.text,
                  })
                : null,
        ],
    });
}
function aY(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(C.D, {
        className: h()(aP.uK, { [aP.ue]: l, [aP.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": E.intl.formatToPlainString(c ? S.default["2p6UFz"] : S.default.AQbxhf, { answer: t.label }),
        "aria-describedby": d ? u : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: aP.dy, children: (0, a.jsx)(af.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: aP.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: aP.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: aP.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: aP.ed,
                            children: t.label,
                        }),
                    }),
                    d
                        ? (0, a.jsx)(v.E, {
                              tag: "span",
                              id: u,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            c
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: aP.rM,
                      children: E.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function aZ(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return aN(n)
        ? (0, a.jsx)(aV, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      aY,
                      {
                          option: e,
                          position: t + 1,
                          disabled: r,
                          selected: u ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let aJ = [],
    aQ = [];
function a0(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: i,
            disabled: s,
            ownImage: o,
            ownSelected: u,
        } = e,
        c = "" === l.trim() ? null : l,
        d = !0 === n.multi_select;
    return (0, a.jsxs)("div", {
        className: h()(aP.Ge, aP.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aP.aK,
                      children: E.intl.string(S.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(aZ, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: aS(o, u),
            }),
            aN(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: aP.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: aP.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(ah.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: h()(aP.Pu, aP.es), children: c }),
                      ],
                  }),
        ],
    });
}
function a1(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, u] = i.useState({}),
        [c, d] = i.useState({}),
        [m, f] = i.useState({}),
        [p, g] = i.useState({}),
        [x, j] = i.useState({}),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(0),
        [A, I] = i.useState(null),
        [M, _] = i.useState(null),
        [P, R] = i.useState(null),
        [T, L] = i.useState(!1),
        $ = i.useRef(null),
        [D, z] = i.useState(null),
        O = i.useRef(null),
        F = i.useRef(0),
        q = null == r,
        U = l.questions.length,
        G = Math.min(k, U - 1),
        B = l.questions[G],
        [K, H] = i.useState({ id: B.id, expanded: !1 }),
        W = K.id === B.id && K.expanded,
        [V, X] = i.useState(null),
        Y = c[B.id] ?? "",
        J = !0 === B.multi_select,
        Q = aN(B),
        ee = J ? (m[B.id] ?? aJ) : ((t = o[B.id]), t?.kind === "option" ? [t.optionId] : aC),
        et = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = E.intl.string(S.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                m = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
                    [t, l, o],
                ),
                f = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let d = i.id,
                            f = !0 === i.multi_select,
                            h = l[d] ?? null;
                        if (o) return aS(h, m(i));
                        function p(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function g(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let x = t[d];
                        function v(t) {
                            (r((n) => {
                                let l = n[d];
                                return (
                                    null != l && (0, eT.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                p({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: g(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: g(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, eT.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (e[d]?.kind !== "image") return e;
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }));
                            },
                            onUpload: (e) => {
                                (p({ busy: "upload", error: null }),
                                    e.then(
                                        (e) => {
                                            "errorText" in e
                                                ? p({ busy: null, error: { source: "upload", text: e.errorText } })
                                                : v({ attachment: e });
                                        },
                                        () =>
                                            p({
                                                busy: null,
                                                error: { source: "upload", text: E.intl.string(S.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                p({ busy: "link", error: null }),
                                (0, eT.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        p({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : E.intl.string(S.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, l, e, m, n, a],
                );
            return { imageFor: d, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(n, o, u),
        en = et.imageFor(B.id),
        el = et.selectedFor(B),
        { text: er, phase: ea } = (0, e5.Q)(B.question),
        es = er === B.question,
        eo = es && V?.id === B.id && V.truncated;
    i.useLayoutEffect(() => {
        if (null == D || W || !es) return;
        function e() {
            if (null == D) return;
            let e = D.scrollHeight > D.clientHeight + 1;
            X((t) => (t?.id === B.id && t.truncated === e ? t : { id: B.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(D), () => t.disconnect());
    }, [es, D, B.id, W]);
    let eu = E.intl.string(W ? E.t.iTcuma : E.t.dcl9MQ),
        ec = i.useCallback(
            (e) => {
                var t;
                if (null == r) return;
                let a = l.questions
                    .map((t, n) => ({ question: t, index: n, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: n, answer: l } = e;
                        return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                    })
                    .join("\n");
                if ("" !== a) {
                    let i;
                    ((t = () => {
                        let t;
                        return r(
                            a,
                            (t = l.questions.flatMap((t) => {
                                let n = e[t.id];
                                if (null == n || "" === n.text.trim()) return [];
                                let l = "option" === n.kind ? [n.optionId] : "multi" === n.kind ? n.optionIds : [],
                                    r =
                                        "custom" === n.kind
                                            ? n.text.trim()
                                            : "multi" === n.kind || "entities" === n.kind
                                              ? n.custom
                                              : void 0,
                                    a = "entities" === n.kind ? n.entities : [],
                                    i = "entities" === n.kind && a.length > 0 ? n.guildId : void 0,
                                    s = "image" === n.kind || "multi" === n.kind ? n.attachment : void 0;
                                return [
                                    {
                                        question_id: t.id,
                                        option_ids: l,
                                        ...(null != r && "" !== r ? { custom: r } : {}),
                                        ...(null != s ? { attachment_id: s.id } : {}),
                                        ...(a.length > 0 ? { entities: a } : {}),
                                        ...(null != i ? { guild_id: i } : {}),
                                    },
                                ];
                            })).length > 0
                                ? { clarification_id: l.id, answers: t }
                                : null,
                            l.questions.flatMap((t) => {
                                let n = e[t.id];
                                return null == n || "" === n.text.trim()
                                    ? []
                                    : "image" === n.kind || ("multi" === n.kind && null != n.attachment)
                                      ? [n.attachment]
                                      : [];
                            }),
                        );
                    }),
                        0 ===
                        (i = l.questions.flatMap((t) => {
                            let n = e[t.id];
                            return !0 === t.link && n?.kind === "entities" ? n.entities.map((e) => e.id) : [];
                        })).length
                            ? t()
                            : Promise.allSettled(i.map((e) => aA(e, n))).then(t));
                }
            },
            [l, r, n],
        ),
        em = i.useCallback(
            (e, t) => {
                F.current += 1;
                let n = F.current;
                (I({ direction: t, moves: n }),
                    _({ question: B, draft: Y, selected: ee, ownImage: en, ownSelected: el, direction: t, moves: n }),
                    L(!0),
                    w(e));
            },
            [Y, en, el, B, ee],
        ),
        ef = i.useCallback(() => {
            let e = $.current,
                t = O.current;
            null != e && null != t && R({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = $.current,
            t = O.current;
        if (null == e || null == t) return;
        ef();
        let n = new ResizeObserver(ef);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ef]);
    let eh = A?.moves;
    i.useEffect(() => {
        if (null == eh) return;
        let e = setTimeout(() => _(null), 400),
            t = setTimeout(() => L(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [eh]);
    let ep = i.useCallback(
            (e) => {
                if (q) return;
                let t = { ...o, [B.id]: e };
                u(t);
                let n =
                    G < l.questions.length - 1
                        ? G + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, G);
                null == n ? ec(t) : em(n, n < G ? "back" : "forward");
            },
            [o, l, q, G, B.id, ec, em],
        ),
        eg = i.useCallback(() => {
            q || 0 === G || em(G - 1, "back");
        }, [q, G, em]),
        ex = G > 0 && !q,
        ev = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [B.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                Q ? q || u((e) => ({ ...e, [B.id]: t })) : ep(t);
            },
            [q, Q, B.id, ep],
        ),
        { multiPartFor: ej } = et,
        eb = i.useMemo(() => {
            var e;
            let t, n;
            return J
                ? ((e = ej(B)),
                  (t = Y.trim()),
                  (n = B.options.filter((e) => ee.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: ee,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [Y, J, ej, B, ee]),
        ey = p[B.id] ?? aQ,
        ek = i.useMemo(() => {
            var e, t;
            let n;
            return null != B.input
                ? ((e = B.input),
                  (t = x[B.id]),
                  (n = Y.trim()),
                  {
                      kind: "entities",
                      entities: ey,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...ey.map((t) => (t.name.startsWith(ab[e]) ? t.name : `${ab[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [Y, x, ey, B.id, B.input]),
        ew = i.useCallback(
            (e, t) => {
                (g((t) => ({ ...t, [B.id]: e })), j((e) => ({ ...e, [B.id]: t })));
            },
            [B.id],
        ),
        eN = i.useCallback(() => y(!0), []),
        eC = i.useCallback(() => y(!1), []),
        eA = et.controlsFor(B, q),
        eS = i.useCallback(() => {
            if (null != ek) {
                "" !== ek.text && ep(ek);
                return;
            }
            if (null != eb) {
                "" !== eb.text && ep(eb);
                return;
            }
            let e = Y.trim();
            "" !== e && ep({ kind: "custom", text: e });
        }, [Y, eb, ek, ep]),
        [eE, eI] = i.useState(!1),
        [eM, e_] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eI(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eP = i.useCallback(() => {
            null != s && (e_(!0), setTimeout(s, 150));
        }, [s]),
        eR = i.useMemo(
            () =>
                null != ek
                    ? "" !== ek.text
                        ? ek
                        : null
                    : null != eb
                      ? "" !== eb.text
                          ? eb
                          : null
                      : "" !== Y.trim()
                        ? { kind: "custom", text: Y.trim() }
                        : (o[B.id] ?? null),
            [o, Y, eb, ek, B.id],
        ),
        eL = null != eR && !q,
        e$ = G === U - 1,
        eD = i.useCallback(() => {
            null == eR || q || ep(eR);
        }, [q, eR, ep]),
        ez = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, ei.vq)(e.target, HTMLTextAreaElement) ||
                    (0, ei.vq)(e.target, HTMLInputElement) ||
                    ((!(0, ei.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ex
                            ? (e.preventDefault(), eg())
                            : "ArrowRight" === e.key && eL && (e.preventDefault(), eD())));
            },
            [ex, eL, eg, eD],
        ),
        eO = Q
            ? null
            : (0, a.jsxs)("div", {
                  className: aP.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: aP.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(ah.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(l4.y, {
                          value: Y,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [B.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eS());
                          },
                          placeholder: E.intl.string(av(B) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                          "aria-label": E.intl.formatToPlainString(S.default["4JeYPB"], { question: B.question }),
                          disabled: q,
                          rows: 1,
                          className: aP.Pu,
                          "data-conjure-clarification-other": B.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: h()(aP.$O, { [aP.fI]: eE && !eM, [aP.Oh]: eM }),
        role: "dialog",
        "aria-label": B.question,
        "data-conjure-clarification": l.id,
        "data-state": q ? "inert" : "open",
        "data-question-expanded": W ? "true" : void 0,
        "data-picker-open": b && !T ? "true" : void 0,
        "data-step": G,
        tabIndex: -1,
        onKeyDown: ez,
        children: [
            (0, a.jsxs)("div", {
                className: aP.rf,
                style: null == P ? void 0 : { height: P.heading + P.rows },
                "data-moving": T ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: $,
                        className: aP.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: z,
                                tag: "span",
                                id: `${B.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: W ? void 0 : 5,
                                className: h()(ac.TK, aP.R_, { [aP.TB]: "exit" === ea, [aP.JU]: "enter" === ea }),
                                children: er,
                            }),
                            eo || W
                                ? (0, a.jsx)("div", {
                                      className: ac.Q7,
                                      children: (0, a.jsx)(N.m, {
                                          text: eu,
                                          children: (0, a.jsx)(lf.K, {
                                              icon: W ? e2.t : ta.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => H({ id: B.id, expanded: !W }),
                                              "aria-label": eu,
                                              "aria-controls": `${B.id}-label`,
                                              "aria-expanded": W,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(C.D, {
                                      className: h()(ac.gb, ac.Q7),
                                      onClick: eP,
                                      "aria-label": E.intl.string(S.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(ed.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: aP.Cg,
                        style: null == P ? void 0 : { insetBlockStart: P.heading },
                        children: (0, a.jsxs)("div", {
                            className: aP.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: O,
                                    className: aP.Ge,
                                    role: "group",
                                    "aria-labelledby": `${B.id}-label`,
                                    "data-direction": A?.direction,
                                    "data-parity": null == A ? void 0 : A.moves % 2,
                                    children: [
                                        J
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: aP.aK,
                                                  children: E.intl.string(S.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(aZ, {
                                            projectId: n,
                                            question: B,
                                            selected: ee,
                                            disabled: q,
                                            onPick: (e) =>
                                                J
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [B.id]:
                                                                  ((n = t[B.id] ?? aJ),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  B.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ev(e),
                                            own: eA,
                                        }),
                                        null != B.input
                                            ? (0, a.jsx)(az, {
                                                  projectId: n,
                                                  question: B,
                                                  value: ey,
                                                  disabled: q,
                                                  onChange: ew,
                                                  onFocus: eN,
                                                  onBlur: eC,
                                                  fallback: !1 === B.allow_custom ? eO : null,
                                              })
                                            : null,
                                        !1 === B.allow_custom ? null : eO,
                                    ],
                                }),
                                null == M
                                    ? null
                                    : (0, a.jsx)(
                                          a0,
                                          {
                                              projectId: n,
                                              question: M.question,
                                              draft: M.draft,
                                              selected: M.selected,
                                              ownImage: M.ownImage,
                                              ownSelected: M.ownSelected,
                                              direction: M.direction,
                                              disabled: q,
                                          },
                                          M.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            U > 1 || J || Q || null != B.input || av(B)
                ? (0, a.jsxs)("div", {
                      className: ac.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  U > 1
                                      ? E.intl.formatToPlainString(S.default.yzYUjq, { index: G + 1, total: U })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: ac.zt,
                              children: [
                                  ex
                                      ? (0, a.jsx)(ap.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: E.intl.string(S.default.Pk5lfA),
                                            onClick: eg,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(Z.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(e$ ? E.t.geKm7t : S.default.w1nRmT),
                                      disabled: !eL,
                                      onClick: eD,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": e$ ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var a2 = n(557744),
    a3 = n(223347),
    a5 = n(894443),
    a4 = n(525530);
function a6(e, t) {
    return (
        null != t &&
        (e.keys ?? []).some((e) => {
            let n = t.schema.find((t) => t.key === e);
            if (null == n) return !1;
            if ("secret" === n.type) return t.secrets.find((t) => t.name === e)?.set !== !0;
            let l = t.values[e];
            return null == l || "" === l;
        })
    );
}
var a7 = n(572253),
    a8 = n(411236);
function a9(e) {
    let { projectId: t, request: n, onDismiss: l, notifyAgent: r = !0 } = e,
        i = null != n.note && "" !== n.note ? n.note : E.intl.string(S.default.XuOf5s);
    return (0, a.jsx)(a7.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: r,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: r, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let u = (0, a.jsx)(Z.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: r,
                disabled: !n,
                text: E.intl.string(S.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: a8.Mk,
                      onSubmit: o,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(S.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: i,
                          }),
                          t,
                          (0, a.jsx)("div", { className: a8.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: h()(ac.nd, ac.jx),
                      "aria-label": E.intl.string(S.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: ac.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: ac.TK,
                                      children: E.intl.string(S.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(C.D, {
                                      className: h()(ac.gb, ac.Q7),
                                      onClick: l,
                                      "aria-label": E.intl.string(S.default["iq+Pte"]),
                                      children: (0, a.jsx)(ed.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: a8.DQ,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: i,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: ac.qr,
                              children: (0, a.jsx)("div", { className: ac.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var ie = n(935208),
    it = n(932111),
    il = n(404373),
    ir = n(435558),
    ia = n.n(ir);
let ii = "ConjureComposerDrafts";
function is() {
    return V.w.get(ii) ?? {};
}
let io = new Map(),
    iu = ia().throttle(() => {
        if (0 === io.size) return;
        let e = is();
        for (let [t, n] of io) "" === n ? delete e[t] : (e[t] = n);
        (io.clear(), V.w.set(ii, e));
    }, 1e3);
class ic extends o.Ay.Store {
    getDraft(e) {
        let t = io.get(e);
        return null != t ? t : (is()[e] ?? "");
    }
}
let id = new ic(eP.h, {
    LOGOUT: function () {
        return (io.clear(), iu.cancel(), V.w.remove(ii), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (io.set(t, n), iu(), "" === n && iu.flush(), !1);
    },
});
function im(e) {
    return "" !== id.getDraft(e).trim();
}
var ih = n(29080);
function ip(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, rB.B4)(r),
        c = u.filter((e) => "message" === e.type).at(-1),
        d =
            !i &&
            null != c &&
            ((t = c.content),
            (n = t.trim()),
            (l = a.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? c
                : null,
        m = u.filter((e) => e !== d),
        f = m.filter((e) => "message" === e.type).at(-1),
        h = !i && !s && "" !== a.trim();
    return {
        streamed: m,
        lastStreamedMessage: f,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? a.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, rB.Lf)(r) }),
    };
}
var ig = n(62617);
let ix = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    iv = {
        snail: () => S.default.ABeVsS,
        goat: () => S.default.dhXay8,
        frog: () => S.default.SHeweG,
        bunny: () => S.default.FytFE1,
        cat: () => S.default["5c+sHs"],
        caterpillar: () => S.default["/FYcne"],
        butterfly: () => S.default["Ib/AxK"],
        dog: () => S.default.zDjBR1,
        spider: () => S.default["6sxyrN"],
        bee: () => S.default.cVtefg,
        bot: () => S.default.MjCw0v,
    },
    ij = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, ig.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, ig.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, ig.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, ig.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, ig.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, ig.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, ig.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, ig.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, ig.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, ig.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, ig.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, ig.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, ig.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, ig.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, ig.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, ig.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, ig.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, ig.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, ig.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, ig.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, ig.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, ig.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function ib(e) {
    return { ...ij[e], name: E.intl.string(iv[e]()) };
}
function iy(e) {
    return ix.includes(e) ? ib(e) : void 0;
}
function ik(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % ix.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, ix[(t + n) % ix.length]);
            }),
            l
        );
    })(e))
        t.set(n, ib(l));
    return t;
}
var iw = n(615839);
function iN(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.KcFvbo);
}
var iC = n(60160),
    iA = n(16634);
function iS(e) {
    let t = (0, rB.SY)(e.steps);
    return null != t ? (0, rB.WQ)(t) : iN(e.task);
}
function iE(e) {
    let t = ik(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? iy(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: iN(e.task),
                      todoId: e.task.todoId,
                      line: iS(e),
                  },
              ];
    });
}
function iI(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, rB.SY)(n.steps),
        d = u
            ? iS(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(iN(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, iw.MB)(e.durationMs),
                              });
                          return E.intl.formatToPlainString(S.default.nmI9Uh, { task: t });
                      default:
                          return E.intl.formatToPlainString(S.default.nmI9Uh, { task: t });
                  }
              })(o),
        m = u ? c : void 0,
        f =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: ae.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            iA.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: ae.iq,
                                      children: (0, a.jsx)(iC.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(rX.A, {
        glyph: (0, a.jsx)(rY.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: iN(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ae.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: r,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
var iM = n(998445),
    i_ = n(643210),
    iP = n(648127),
    iR = n(372795),
    iT = n(163897);
let iL = "conjure-browser-viewer";
function i$(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [i_.A],
            () =>
                n.flatMap((e) => {
                    let n = i_.A.getTab(t, e);
                    return null == n ? [] : [n];
                }),
            [t, n],
        );
    if (0 === l.length) return null;
    let r = l.map((e) => {
        let { session: t } = e;
        return t.id;
    });
    return (0, a.jsx)("ul", {
        className: iT.kR,
        "aria-label": E.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(iD, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function iD(e) {
    let { projectId: t, tab: l, sessionIds: r } = e,
        [s, o] = (function () {
            let [e, t] = i.useState(null),
                [n, l] = i.useState(!1);
            return (
                i.useEffect(() => {
                    if (null == e) return;
                    let t = new IntersectionObserver(
                        (e) => {
                            let [t] = e;
                            return l(t?.isIntersecting ?? !1);
                        },
                        { rootMargin: "200px" },
                    );
                    return (t.observe(e), () => t.disconnect());
                }, [e]),
                [t, n]
            );
        })(),
        u = (0, nL.useHasModalOpen)(iL),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        p = (0, iP.i)(l.session);
    return (0, a.jsxs)(C.D, {
        innerRef: s,
        className: h()(iT.Nr, f && iT.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, nL.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: iL },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(S.default.G3a822, { title: p }),
        children: [
            (0, a.jsxs)("div", {
                className: iT.Gt,
                children: [
                    (0, a.jsx)(iR.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: iT.Ji,
                        "aria-label": E.intl.formatToPlainString(S.default.rnwqXb, { name: p }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: iT.qf,
                              children: (0, a.jsx)(iM.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: iT.HS,
                              children: (0, a.jsx)(v.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: E.intl.string(S.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: iT.pG,
                children: [
                    (0, a.jsx)("span", { className: h()(iT.W9, f && iT.oM) }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: p,
                    }),
                ],
            }),
        ],
    });
}
var iz = n(268409);
let iO = new WeakMap(),
    iF = new WeakMap();
function iq(e) {
    let { projectId: t, steps: n, tree: l, segment: r } = e,
        s = i.useMemo(
            () =>
                (function (e, t) {
                    let n = new Map();
                    for (let t of [...e.steps, ...e.tasks.flatMap((e) => e.steps)])
                        for (let e of t.browserSessions) n.has(e) || n.set(e, t.segment);
                    return [...n]
                        .filter((e) => {
                            let [, n] = e;
                            return null == t || n === t;
                        })
                        .map((e) => {
                            let [t] = e;
                            return t;
                        });
                })(l, r),
            [l, r],
        ),
        u = (0, o.yK)(
            [nE.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = iO.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = iF.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), iF.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (iO.set(e, n), n);
                })(nE.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: iz.h, children: (0, a.jsx)(i$, { projectId: t, sessionIds: u }) });
}
var iU = n(469393);
function iG(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, n$.lG)(t.authored_at);
    return (0, a.jsx)(rQ, {
        title: E.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: iU.r,
            children: [
                (0, a.jsxs)("div", {
                    className: iU.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(Z.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(S.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var iB = n(155718);
function iK(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let iH = ["command", "user_command", "message_command", "message"],
    iW = new Set([iB.kc.CHAT, iB.kc.USER, iB.kc.MESSAGE]);
function iV(e) {
    return e.type ?? iB.kc.CHAT;
}
function iX(e) {
    return iW.has(iV(e));
}
function iY(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function iZ(e, t) {
    let n = iH.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !iY(e)), ...n.filter(iY)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || iY(r) || l.push(r);
    }
    return iH.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function iJ(e, t, n) {
    let l = e.bot?.example_exchanges ?? [],
        r = { kind: "event", user: "", bot: n.event };
    if ("events" === t) {
        let e = l.slice(0, 3).map((e) => {
            let { bot: t } = e;
            return "" !== t.trim() ? { ...r, bot: t } : r;
        });
        return e.length > 0 ? e : [r];
    }
    let a = l.flatMap((e) => {
            let { user: n, bot: l } = e;
            return "" === n.trim()
                ? []
                : [
                      {
                          kind: "messages" !== t && n.trimStart().startsWith("/") ? "command" : "message",
                          user: n,
                          bot: l,
                      },
                  ];
        }),
        i = { kind: "message", user: n.message, bot: n.reply };
    if ("messages" === t && 0 === a.length) return [i];
    let s = e.commands.filter(iX).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (iV(e)) {
                    case iB.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case iB.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(iY),
        u = a.length > 0 ? iZ([...a, ...o], !0) : iZ("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var iQ = n(377941),
    i0 = n.n(iQ);
function i1(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function i2(e) {
    return e.type === iB.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === iB.kc.USER || e.type === iB.kc.MESSAGE
          ? ""
          : "/";
}
let i3 = {
        [nq.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [nq.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [nq.q7.ACTIVITY]: S.default["3/aHX6"],
        [nq.q7.OVERLAY]: S.default["rPpf5/"],
        [nq.q7.PROFILE_WIDGET]: null,
        [nq.q7.AUTOMOD]: null,
        [nq.q7.BOT]: null,
        [nq.q7.APPLICATION_COMMANDS]: null,
    },
    i5 = [nq.q7.ACTIVITY, nq.q7.APP_CHANNEL, nq.q7.VOICE_CHANNEL, nq.q7.OVERLAY];
function i4(e) {
    return i5.find((t) => iK(e, t)) ?? null;
}
var i6 = n(176999),
    i7 = (((l = {}).IMAGE = "image"), l),
    i8 = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    i9 = n(598748),
    se = n(773669);
let st = [],
    sn = {},
    sl = {};
function sr(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function sa(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: i7.IMAGE,
        visibility: i8.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var si = n(127258),
    ss = n(803306),
    so = n(320095),
    su = n(963852),
    sc = n(95701),
    sd = n(889227),
    sm = n(427262);
let sf = new sc.nA({ id: "1337", guild_id: "1337", type: q.rbe.GUILD_TEXT, name: "preview" });
function sh(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([ax.default], () => ax.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, ss.nj)(new sd.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let sp = /^@\S+/;
var sg = n(97808),
    sx = n(778712),
    sv = n(46054),
    sj = n(200700);
let sb = {
        alert: { label: () => E.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    sy = {
        blocked: { label: () => E.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(S.default.RGzFNK), tone: "green" },
    },
    sk = ["blocked", "alert", "allowed"],
    sw = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function sN(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, sj.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? E.intl.formatToPlainString(E.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? E.intl.formatToPlainString(E.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? E.intl.formatToPlainString(E.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? E.intl.formatToPlainString(E.t.opVZ9q, { mins: n / 60 })
                                      : E.intl.formatToPlainString(E.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var sC = n(984097),
    sA = n(13673);
let sS = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function sE(e) {
    let { example: t } = e,
        n = sN(t);
    return null == n
        ? null
        : (0, a.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let sI = ["glazedgamer", "sprinkles", "donutking"];
function sM(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = sb[n.outcome];
    return (0, a.jsxs)("li", {
        className: h()(sC.nM, { [h()(sC.HV, sA.DX)]: s }),
        children: [
            (0, a.jsx)(rZ.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: sC.my,
                children: (0, a.jsx)(sg.eu, {
                    src: (0, Q.AE)(void 0, void 0),
                    size: sx._3.SIZE_24,
                    "aria-label": E.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: sC.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), sv.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(sE, { example: n }) : null,
                ],
            }),
        ],
    });
}
function s_(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = sy[t.section],
        s = new Set(t.examples.map(sN)),
        o = 1 === s.size ? t.examples.map(sN)[0] : null;
    return (0, a.jsxs)("div", {
        className: sC.UO,
        children: [
            (0, a.jsxs)("div", {
                className: sC.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: sS[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: sC.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, a.jsx)("ul", {
                className: sC.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(sM, { example: e, username: sI[(n + t) % sI.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function sP(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            sk
                .map((e) => ({ section: e, examples: t.filter((t) => sw[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: sC.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: sC.hk,
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    s_,
                    {
                        group: e,
                        firstIndex: l.slice(0, t).reduce((e, t) => {
                            let { examples: n } = t;
                            return e + n.length;
                        }, 0),
                    },
                    e.section,
                ),
            ),
        ],
    });
}
var sR = n(276293),
    sT = n(460905),
    sL = n(110384),
    s$ = n(633018),
    sD = n(763754),
    sz = n(217424),
    sO = n(194085),
    sF = n(20851),
    sq = n(692508),
    sU = n(798819);
function sG(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: h()(sU.item, sU.labelContainer, sU.colorDefault, {
            [sU.focused]: !0 === t.highlighted,
            [sU.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: sU.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: sU.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: h()(sU.label, sq.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: sU.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: sU.icon }),
                  })
                : null,
        ],
    });
}
function sB(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: h()(t, sq.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: sL.W, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: h()(sU.menu, sq.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: sU.scroller,
            children: [
                (0, a.jsx)(sG, { item: s }),
                (0, a.jsx)("div", { className: sU.separator }),
                (0, a.jsx)(sG, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var sK = n(381941);
function sH() {}
function sW(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        c,
        d,
        m,
        f,
        p,
        { projectId: g, exchanges: x } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, o.bG)([ax.default], () => ax.default.getCurrentUser())),
        (n = (0, o.bG)([tP.Ay], () => tP.Ay.getProject(g))),
        (l = n?.application_id),
        (r = (0, o.bG)([lR.A], () => lR.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(S.default.JEYq8M)),
        (u = (0, o.bG)([ax.default], () => (null != l ? ax.default.getUser(l) : void 0), [l])),
        (d = sh("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = sh("31338", E.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (p = sh("31339", (0, sm.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == p || null == m || null == f
                        ? []
                        : (function (e, t, n) {
                              var l, r, a;
                              let { bot: i, currentUser: s, viewer: o, member: u } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: n,
                                          messageType: l,
                                          menu: r,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      a = String(c.length + 1),
                                      i = (0, so.rh)({
                                          ...(0, su.Ay)({
                                              channelId: sf.id,
                                              content: e,
                                              author: t,
                                              type: l ?? q.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: q.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: si.G.APPLICATION_COMMAND,
                                                        user: (0, su.Vi)(s),
                                                    },
                                                }
                                              : {}),
                                      });
                                  c.push({ key: a, record: i, isCommandReply: null != n, menu: r });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          d(t.bot, i, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: q.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? n.memberMessage : n.targetMessage, e ? u : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: q.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(sp, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              x,
                              { bot: m, currentUser: t, viewer: p, member: f },
                              {
                                  targetMessage: E.intl.string(S.default["y+QYes"]),
                                  memberMessage: E.intl.string(S.default.BUTRDc),
                              },
                          ),
                [x, m, t, p, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = sf.name;
    return (0, a.jsxs)("div", {
        className: sq.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: sq.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sR.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: h()(sq.TE, `group-spacing-${sK.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? sq.Rz : void 0,
                            children: [
                                (0, a.jsx)(sF.A, {
                                    message: n,
                                    channel: sf,
                                    author: (0, sD.FT)(n.author, sf),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(sz.A, { message: n, channel: sf }) : void 0,
                                    usernameClassName: r?.target === "user" ? sq.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: sq.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(sO.Ay, {
                                              children: [
                                                  (0, a.jsx)(sO.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: sT.n,
                                                      onClick: sH,
                                                  }),
                                                  (0, a.jsx)(sO.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: sL.W,
                                                      onClick: sH,
                                                  }),
                                                  (0, a.jsx)(sO.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: lh.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: sH,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? sq.ET : sq.je,
                                          inert: !0,
                                          children: (0, a.jsx)(sB, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: y,
                                          }),
                                      })
                                    : null,
                            ],
                        },
                        t,
                    );
                }),
            }),
            (0, a.jsxs)("div", {
                className: sq.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(s$.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: E.intl.formatToPlainString(E.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
var sV = n(332173);
function sX(e) {
    let { name: t } = e;
    return (0, a.jsxs)(sV.A, { children: ["/", t] });
}
function sY(e) {
    let { text: t, commandNames: n } = e,
        l = (function (e, t) {
            if (null == t) return null;
            let n = [],
                l = 0;
            for (let r of e.matchAll(t)) {
                let t = (r.index ?? 0) + r[1].length;
                (t > l && n.push({ kind: "text", text: e.slice(l, t), start: l }),
                    n.push({ kind: "command", name: r[2], start: t }),
                    (l = t + 1 + r[2].length));
            }
            return 0 === n.length ? null : (l < e.length && n.push({ kind: "text", text: e.slice(l), start: l }), n);
        })(
            t,
            i.useMemo(
                () =>
                    (function (e) {
                        if (0 === e.length) return null;
                        let t = [...e].sort((e, t) => t.length - e.length).map(i0());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(sX, { name: e.name }, e.start) : e.text));
}
n(827669);
var sZ = n(757789),
    sJ = n(26137);
let sQ = {
    frame: S.default.Z2bt4u,
    overlay_widget: S.default["0mGHfU"],
    user_widget: S.default.Jipr29,
    bot: S.default.EbvC13,
    commands: S.default.EbvC13,
    automod: S.default.tiMvei,
};
var s0 = n(573634);
let s1 = {
    frame: ee.GameControllerIcon,
    overlay_widget: sZ.V,
    user_widget: sJ.r,
    bot: er.RobotIcon,
    commands: er.RobotIcon,
    automod: el.ShieldIcon,
};
function s2(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: h()(s0.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function s3(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: s0.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: s0.jw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        tag: "span",
                        children: e,
                    }),
                },
                e,
            ),
        ),
    });
}
function s5(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: s0.lj,
        children: [
            (0, a.jsx)("span", {
                className: h()(s0.Vo, s0.G),
                children: (0, a.jsx)(et.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: s0.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function s4(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: s0.wZ,
        children: t.map((e, t) => {
            let n = i2(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(sX, { name: e.name })
                                : (0, a.jsx)(sV.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function s6(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: s0.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: s0.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(sY, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function s7(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? et.k : s1[t.kind],
        u = E.intl.string(s ? S.default.BM4Ymz : sQ[t.kind]);
    return (0, a.jsxs)("section", {
        className: s0.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: s0.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: s0.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: s0.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(sY, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(s6, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: s0.PG, children: r }) : null,
        ],
    });
}
function s8(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: s0.aN,
        children: [
            (0, a.jsxs)("div", {
                className: s0.Lv,
                children: [(0, a.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: r }), s],
            }),
            ((t = o.experiences ?? []),
            (n = t
                .filter((e) => {
                    let { kind: t } = e;
                    return "commands" === t;
                })
                .flatMap((e) => {
                    let { changes: t } = e;
                    return t.filter(
                        (e) =>
                            !(function (e, t) {
                                if (0 === t.length) return !1;
                                let n = t.map(i0()).join("|");
                                return RegExp(`(?<![\\p{L}\\p{N}/.:])/(?:${n})(?![\\p{L}\\p{N}_-])`, "iu").test(e);
                            })(e, c),
                    );
                })),
            (l = t.find((e) => {
                let { kind: t } = e;
                return "bot" === t;
            })),
            t.flatMap((e) =>
                "commands" === e.kind
                    ? null != l
                        ? []
                        : [{ experience: e, bullets: n }]
                    : e === l
                      ? [{ experience: e, bullets: [...e.changes, ...n] }]
                      : [{ experience: e, bullets: e.changes }],
            )).map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: s0.yF, role: "separator" }),
                            (0, a.jsx)(s7, {
                                experience: t,
                                bullets: n,
                                preview: u(t),
                                blocks: (function (e, t) {
                                    switch (t.kind) {
                                        case "frame":
                                            let n = (function (e, t) {
                                                if ("frame" !== t.kind) return null;
                                                let n = E.intl.string(S.default["6/3tGY"]),
                                                    l = [];
                                                if (t.surfaces.includes(nq.q7.APP_CHANNEL)) {
                                                    let r = e.app_channel_names ?? [];
                                                    l = (
                                                        null != t.app_channels && t.app_channels.length > 0
                                                            ? t.app_channels
                                                            : r.length > 0
                                                              ? r.map((e) => ({ name: e }))
                                                              : [
                                                                    {
                                                                        name: t.name
                                                                            .toLowerCase()
                                                                            .replace(/[^\p{L}\p{N}]+/gu, "-")
                                                                            .replace(/^-+|-+$/g, ""),
                                                                    },
                                                                ]
                                                    ).map((e) => {
                                                        let { name: t, description: l } = e,
                                                            r = l?.trim() ?? "";
                                                        return { name: t, description: "" !== r ? r : n };
                                                    });
                                                }
                                                return {
                                                    channels: l,
                                                    launchableAnywhere: t.surfaces.includes(nq.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(nq.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        s2,
                                                        {
                                                            className: s0.Iw,
                                                            caption: E.intl.formatToPlainString(S.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: s0.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        s5,
                                                                        { name: t, description: n },
                                                                        t,
                                                                    );
                                                                }),
                                                            }),
                                                        },
                                                        "channels",
                                                    ),
                                                );
                                            let r = [
                                                ...(n.usableInVoice ? [E.intl.string(S.default["4oGg2h"])] : []),
                                                ...(n.launchableAnywhere ? [E.intl.string(S.default.BTGCfR)] : []),
                                            ];
                                            return (
                                                r.length > 0 &&
                                                    l.push(
                                                        (0, a.jsx)(
                                                            s2,
                                                            {
                                                                caption: E.intl.string(S.default.MY6UGJ),
                                                                children: (0, a.jsx)(s3, { labels: r }),
                                                            },
                                                            "features",
                                                        ),
                                                    ),
                                                l
                                            );
                                        case "bot":
                                        case "commands":
                                            return [
                                                ...(0 === e.commands.length
                                                    ? []
                                                    : [
                                                          (0, a.jsx)(
                                                              s2,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(s4, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...[
                                                    {
                                                        key: "permissions",
                                                        caption: S.default["2UbW6r"],
                                                        names: e.bot_permissions,
                                                    },
                                                    {
                                                        key: "intents",
                                                        caption: S.default["7TKfpj"],
                                                        names: e.privileged_intents,
                                                    },
                                                ]
                                                    .flatMap((e) => {
                                                        let { key: t, caption: n, names: l } = e;
                                                        return null != l && l.length > 0
                                                            ? [{ key: t, caption: E.intl.string(n), labels: l.map(i1) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            s2,
                                                            { caption: n, children: (0, a.jsx)(s3, { labels: l }) },
                                                            t,
                                                        );
                                                    }),
                                            ];
                                        default:
                                            return [];
                                    }
                                })(o, t),
                                commandNames: c,
                            }),
                        ],
                    },
                    t.id,
                );
            }),
        ],
    });
}
var s9 = n(633075),
    oe = n(946356),
    ot = n(58216),
    on = n(27399);
function ol(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([ax.default], () => ax.default.getCurrentUser()),
        r = i.useMemo(() => new s9.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: on.H,
              children: (0, a.jsx)(oe.A.Overlay, {
                  className: on.w,
                  children: (0, a.jsx)(ot.A, {
                      user: l,
                      widget: r,
                      allowEditing: !1,
                      disableInteraction: !0,
                      interactiveLinks: !0,
                      disableCTA: !0,
                      rendererProps: n,
                  }),
              }),
          });
}
var or = n(443863);
function oa(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = (0, aB._)(t, r),
        c = i.useCallback(() => {
            (0, eT.PK)(t, r).then(
                (e) => {
                    (0, aG.R)({
                        items: [{ type: "IMAGE", url: e, alt: l }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "ConjureChat",
                    });
                },
                () => {},
            );
        }, [t, r, l]);
    return o
        ? null
        : (0, a.jsx)(C.D, {
              className: or.xX,
              onClick: c,
              "aria-label": E.intl.string(S.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: or.sN, onError: u }) : null,
          });
}
function oi(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = iK(c, nq.q7.APPLICATION_COMMANDS)),
            (l =
                iK(c, nq.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(iX)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : iJ(c, l, {
                              message: E.intl.string(S.default.J7qggf),
                              reply: E.intl.string(S.default.nqYtiy),
                              event: E.intl.string(S.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = sl } = t,
                r = (0, o.bG)([se.default], () => se.default.locale),
                a = (0, o.bG)([tP.Ay], () => {
                    let t = tP.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(sn);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, eT.PK)(e, l.id).then(
                                            (e) => [n, e],
                                            () => null,
                                        );
                                    }),
                                ).then(
                                    (e) => {
                                        r || l(Object.fromEntries(e.filter((e) => null != e)));
                                    },
                                    () => {},
                                ),
                                () => {
                                    r = !0;
                                }
                            );
                        }, [e, t]),
                        n
                    );
                })(e, l.images),
                u = i.useMemo(
                    () =>
                        null == n
                            ? null
                            : (function (e, t, n, l) {
                                  let r = {};
                                  for (let [t, n] of Object.entries(e.surfaces))
                                      null != n &&
                                          (r[t] = (function (e) {
                                              let t = {};
                                              for (let [n, l] of Object.entries(e.components)) {
                                                  let e = {};
                                                  for (let [t, n] of Object.entries(l.fields))
                                                      e[t] = {
                                                          ...sr(n),
                                                          ...(null != n.fallback ? { fallback: sr(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = i6.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[i9.m.WIDGET_TOP] || null == i[i9.m.WIDGET_BOTTOM]
                                      ? null
                                      : {
                                            locale: l,
                                            surfaceConfigs: i,
                                            isLoading: !1,
                                            hasIdentity: !0,
                                            resolutionContext: {
                                                data: (function (e, t, n) {
                                                    let l = (function (e) {
                                                            let t = new Map();
                                                            for (let n of Object.values(e.surfaces))
                                                                for (let e of Object.values(n?.components ?? {}))
                                                                    for (let n of Object.values(e.fields))
                                                                        "data" !== n.value_type ||
                                                                            t.has(n.value) ||
                                                                            t.set(n.value, n.presentation_type);
                                                            return t;
                                                        })(e),
                                                        r = {};
                                                    for (let [e, a] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === l.get(e)) {
                                                            let t = n[String(a)];
                                                            null != t &&
                                                                (r[e] = {
                                                                    type: i6.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: i6.oG.NUMBER, value: a })
                                                                : (r[e] = { type: i6.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(sa),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: st,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(u, c),
        p = d?.superseded === !0,
        g = c.what_changed?.trim() ?? "",
        x =
            ((t = c.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === i2(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = i4(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(iX)
                    ? iJ({ ...c, bot: void 0 }, "commands", {
                          message: E.intl.string(S.default.J7qggf),
                          reply: E.intl.string(S.default.nqYtiy),
                          event: E.intl.string(S.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([tP.Ay], () => tP.Ay.getProject(u)?.name, [u]),
        k =
            p && null != d
                ? E.intl.formatToPlainString(S.default.YZ3qJs, { version: d.version })
                : E.intl.string(S.default["3b6e7o"]),
        w = p ? (0, a.jsx)(r1, { children: E.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(r2, {
        title: k,
        meta: w,
        superseded: p,
        showLabel: E.intl.string(S.default.yD8EJS),
        hideLabel: E.intl.string(S.default.nSPGNb),
        bodyClassName: or.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: or.Qs,
                children: (0, a.jsx)(s8, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(sY, { text: c.summary, commandNames: x }),
                            }),
                            "" !== g
                                ? (0, a.jsxs)("section", {
                                      className: or.uW,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: E.intl.string(S.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(sY, { text: g, commandNames: x }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    proposal: c,
                    renderPreview: function (e) {
                        switch (e.kind) {
                            case "frame":
                            case "overlay_widget":
                                let t;
                                return e.id === j && null != c.design_image
                                    ? (0, a.jsx)(oa, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: E.intl.string(null == (t = i4(c)) ? S.default["3/aHX6"] : i3[t]),
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(ol, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(sP, { automod: c.automod })
                                    : null;
                            case "commands":
                            case "bot": {
                                let t = (function (e, t, n) {
                                    var l;
                                    let r;
                                    if ("commands" === e.kind) return n;
                                    let a = (e.example_exchanges ?? [])
                                        .filter((e) => {
                                            let { bot: t } = e;
                                            return "" !== t.trim();
                                        })
                                        .slice(0, 3)
                                        .map((e) => {
                                            let { user: t, bot: n } = e,
                                                l = t.trim();
                                            return "" === l
                                                ? { kind: "event", user: "", bot: n }
                                                : { kind: l.startsWith("/") ? "command" : "message", user: l, bot: n };
                                        });
                                    return (
                                        (l = a.length > 0 ? a : t),
                                        (r = l.some((e) => "command" === e.kind || iY(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(sW, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: x,
                }),
            }),
            null == m || p
                ? null
                : (0, a.jsxs)("div", {
                      className: or.qr,
                      children: [
                          (0, a.jsx)(Z.$, {
                              variant: "primary",
                              size: "sm",
                              text: E.intl.string(S.default["6S+wRM"]),
                              onClick: m,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: E.intl.string(S.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var os = n(289565);
function oo(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: os.m, children: n })
        : (0, a.jsxs)("div", {
              className: os.Z,
              children: [
                  n,
                  (0, a.jsx)(N.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(lf.K, {
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          icon: ed.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function ou(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "unpublished" === t.state);
}
function oc(e, t) {
    return null != e && ou(t, e.status);
}
let od = new WeakMap();
function om(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, o.bG)([d.A], () => (null == n ? null : d.A.getGuild(n)));
    return (0, a.jsx)(lE.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(lE.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, a.jsx)(Z.$, {
                    variant: "primary",
                    size: "sm",
                    loading: t.publishing,
                    disabled: t.disabled,
                    onClick: () => t.run("card"),
                    text: t.label,
                }),
                null != l
                    ? (0, a.jsxs)(lE.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: E.intl.string(S.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(B.Ay, { guild: l, size: B.Ay.Sizes.SMOL }),
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  lineClamp: 1,
                                  children: (function (e) {
                                      let t = Array.from(e);
                                      if (t.length <= 24) return e;
                                      let n = t.slice(0, 23).join("");
                                      return `${n.trimEnd()}\u{2026}`;
                                  })(l.name),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function of(e) {
    let { projectId: t, cta: n } = e,
        l = (0, lk.Ay)(t);
    return null != l && oc(l, n)
        ? (0, a.jsx)(oo, {
              children: (0, a.jsxs)(lE.B, {
                  gap: 8,
                  align: "start",
                  children: [
                      "new_ui" === n.reason
                          ? (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: E.intl.string(S.default["9ZqzLo"]),
                            })
                          : null,
                      (0, a.jsx)(om, { publish: l }),
                      "new_ui" !== n.reason
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: E.intl.string(S.default.SifbJM),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var oh = n(303345),
    op = n(44255),
    og = n(416473),
    ox = n(289830);
function ov(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, o.bG)(
                    [tP.Ay],
                    () => {
                        let t = tP.Ay.getProject(e);
                        return null != t && (0, tP.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                c = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, og.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof oh.A ? e.message : E.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(S.default.orZDqY, { time: (0, op.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, op.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(rQ, {
        title: E.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: ox.r,
            children: [
                (0, a.jsxs)("div", {
                    className: ox.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "text-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: E.intl.string(S.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  role: "status",
                                  children: E.intl.string(S.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, a.jsx)(Z.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(S.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var oj = n(989271);
function ob(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(C.D, {
        className: h()(oj.nM, { [oj.f1]: s, [oj.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: oj.jo,
                children: [
                    n
                        ? (0, a.jsx)(tR.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: oj.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: oj.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function oy(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(rQ, {
        title: E.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                ob,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var ok = n(530557),
    ow = n(872162),
    oN = n(564963),
    oC = n(202723);
function oA(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, nL.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: ok.R })), [r.fields]),
        d = (0, oN.bB)(l, s),
        m = h()(oC.Lo, { [oC.jY]: d });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: E.intl.string(S.default.CTxtdV),
                  }),
              },
              s,
          )
        : "inactive" === s
          ? (0, a.jsxs)(
                "article",
                {
                    className: m,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: E.intl.string(S.default.HCQvpO),
                        }),
                        (0, a.jsx)(ow.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: oC.Lo,
                      children: (0, a.jsx)(ow.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                  },
                  s,
              )
            : "received" === s
              ? (0, a.jsxs)(
                    "article",
                    {
                        className: m,
                        children: [
                            (0, a.jsxs)("div", {
                                className: oC.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: oC.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(tf.y, {
                                            size: "xs",
                                            color: w.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(v.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: E.intl.string(S.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(ow.C, { label: E.intl.string(S.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: oC.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: E.intl.string(null != o ? S.default.O0QIqj : S.default.HCQvpO),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : E.intl.string(S.default.MPGSHL),
                        }),
                        (0, a.jsx)(ow.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: oC.sq,
                            children: (0, a.jsx)(Z.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: E.intl.string(S.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var oS = n(919790),
    oE = n(908492),
    oI = n(971824),
    oM = n(162052),
    o_ = n(165648);
function oP(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: r = l,
            checklistSuperseded: s = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: c,
            provisionalTodo: d,
            segment: m,
            hostsChecklist: f = !0,
            reportsDuration: h = !0,
            closed: p = !1,
            segmentDurationMs: g,
        } = e,
        x = i.useMemo(() => (0, rB.Jf)(n, l), [n, l]),
        v = i.useMemo(
            () =>
                null == m
                    ? x
                    : {
                          ...x,
                          steps: x.steps.filter((e) => e.segment === m),
                          tasks: x.tasks.filter((e) => e.task.segment === m),
                      },
            [x, m],
        );
    if (u)
        return (0, a.jsx)("ol", {
            className: ae.pj,
            "data-live": !1,
            children: (0, a.jsx)(rX.A, {
                glyph: (0, a.jsx)(ih.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, rB.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = ik(k.map((e) => e.taskId)),
        N = !p && (l || k.some((e) => "running" === e.task.status)),
        C = iE(k);
    return (0, a.jsxs)("ol", {
        className: ae.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(rW.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: p,
                durationMs: j,
                connectsDown: k.length > 0,
                tier: x.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? iy(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          iI,
                          {
                              projectId: t,
                              lane: e,
                              Illocon: r.Illocon,
                              tint: r.tint,
                              name: null != l && null != e.task.helperName ? e.task.helperName : r.name,
                              connectsDown: n < k.length - 1,
                          },
                          e.taskId,
                      );
            }),
            (0, a.jsx)(iq, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: ae.YO,
                      children: (0, a.jsx)(r8, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function oR(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: o,
            attachments: u,
            secretRequest: c,
            secretRequestId: d,
            secretRequestAwaiting: m,
            secretRequestStatus: f = "open",
            settingsRequest: p,
            publishCta: g,
            onPickIdea: x,
            pickedIdeaIds: j,
            onApprovePlan: b,
            sideReply: y = !1,
            sideReplyAcknowledges: k,
            hoistedProse: w = !1,
            hoistedAttachmentsHost: N,
            restoreProposal: C,
            onRestoreProposal: A,
            publishScheduleProposal: I,
            publishScheduleProposalCurrent: M = !1,
        } = e,
        _ = i.useMemo(
            () => ip({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: P, lastStreamedMessage: R, showsClosingMessage: T, closingContent: L } = _,
        $ = (w ? N : void 0) ?? _.attachmentsHost,
        D = T && !w,
        z = null == u ? null : (0, a.jsx)(oS.A, { projectId: t, attachments: u }),
        O = null == z ? null : (0, a.jsx)("div", { className: ae.MT, children: z }),
        F = y
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return E.intl.string(S.default.Mv5OmK);
                          case "queued":
                              return E.intl.string(S.default["Po/2mi"]);
                          case "restarting":
                              return E.intl.string(S.default.Vj0woh);
                          default:
                              return E.intl.string(S.default.gY3L8p);
                      }
                  })(k),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: ae.ue,
        children: [
            P.length > 0 && !w
                ? (0, a.jsx)("ol", {
                      className: ae.dO,
                      children: P.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: ae.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: o_.PT,
                                          children: (0, oE.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === $ && e === R ? O : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(oi, { projectId: t, proposal: r, version: s, onApprove: b })
                : D
                  ? (0, a.jsxs)("div", {
                        className: h()(ae.ky, oM.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: h()(o_.PT, ae.cW),
                                children: (0, oE.U)(L, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === $ ? O : null,
                            F,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: h()(ae.ky, oM.XR, { [oI.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(oA, {
                          projectId: t,
                          cardId: d ?? "",
                          request: c,
                          status: f,
                          awaiting: "open" === f ? m : void 0,
                      }),
                  })
                : null,
            null != p
                ? (0, a.jsx)("div", {
                      className: h()(ae.ky, oM.XR),
                      children: (0, a.jsx)(a9, { projectId: t, request: p }),
                  })
                : null,
            "standalone" !== $ && ("closing" !== $ || D) ? null : z,
            null != g ? (0, a.jsx)(of, { projectId: t, cta: g }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(oy, { ideas: o, pickedIdeaIds: j, onPick: x }) : null,
            null != C ? (0, a.jsx)(iG, { proposal: C, onRestore: A }) : null,
            null != I ? (0, a.jsx)(ov, { projectId: t, proposal: I, current: M }) : null,
            D ? null : F,
        ],
    });
}
var oT = n(864970),
    oL = n(146806),
    o$ = n(475358),
    oD = n(717400),
    oz = n(99677),
    oO = n(655098),
    oF = n(234320),
    oq = n(191023);
function oU(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(eX.p, {
        name: E.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: nj.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(oq.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: nj.OY,
                    children: (0, a.jsx)(ah.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(v.E, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: E.intl.string(S.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: eZ.o1,
            onClick: () => {
                nh(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": E.intl.string(S.default.N852dj),
            children: (0, a.jsx)(eM.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function oG(e) {
    let { send: t } = e;
    return (0, a.jsxs)(eX.p, {
        compact: !0,
        name: E.intl.string(S.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: E.intl.string(S.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(eI.y, { type: eI.t.SPINNING_CIRCLE_SIMPLE, className: eZ.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(ap.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: E.intl.string(S.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var oB = n(901173),
    oK = n(161431),
    oH = n(280450),
    oW = n(503275),
    oV = n(659280),
    oX = n(351906),
    oY = n(407653),
    oZ = n(322915);
function oJ(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([oX.A], () => oX.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      oV.Ay.User,
                      {
                          index: t,
                          user: e.user,
                          nick: null,
                          status: null,
                          hidePersonalInformation: u,
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.user.id,
                  )
                : (0, a.jsx)(
                      oV.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(oY.A, { projectId: n, file: e.file, className: oZ.Vk }),
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        f = l.findIndex((e) => "file" === e.kind),
        h = -1 === f ? m : m.slice(0, f),
        p = -1 === f ? [] : m.slice(f);
    return (0, a.jsx)(oV.Ay, {
        id: t,
        className: oZ.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(oQ, { titleId: c, title: E.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                p.length > 0
                    ? (0, a.jsx)(oQ, { titleId: d, title: E.intl.string(S.default.zA5KLM), children: p })
                    : null,
            ],
        }),
    });
}
function oQ(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: oZ.Gf, children: n }),
            l,
        ],
    });
}
var o0 = n(719442),
    o1 = n(355622),
    o2 = n(408018),
    o3 = n(186306),
    o5 = n(323350),
    o4 = n(35277),
    o6 = n(820066),
    o7 = n(683167),
    o8 = n(267102),
    o9 = n(259691);
let ue = (0, sc.createChannelRecord)({ id: "1", type: q.rbe.DM });
function ut(e) {
    let t = o6.VW.end(e, []);
    return { anchor: t, focus: t };
}
function un(e) {
    return (0, o5.WO)(o6.VW.richValue(e), { mode: "raw" });
}
function ul(e, t) {
    ((e.children = (0, o2.x7)(t)), (e.selection = ut(e)), e.onChange());
}
function ur(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(it.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(o9.A, { attachmentId: r }), n] });
}
var ua = n(497437);
let ui = "text-md/normal",
    us = null;
function uo(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, f] = i.useState(0),
        [p, g] = i.useState(0),
        [x, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = d.current;
        function l() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = c.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (g(i + a), f(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                m = 0 === d ? 1 : s / d,
                h = 0 === d ? 1 : o / d;
            j({
                frontFrom: 1e3 * (0, oL._R)(m),
                frontTo: 1e3 * (0, oL._R)(h),
                backFrom: 1e3 * (0, oL.T)(m),
                backTo: 1e3 * (0, oL.T)(h),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = i.useState(0),
        [k, w] = i.useState(null),
        N = i.useRef(!1),
        C = i.useCallback(() => {
            (w(N.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        N.current = n;
    }, [n, t]);
    let A = "in" === k ? x.backFrom : x.frontFrom,
        I = "out" === k ? x.frontTo : x.backTo,
        M = (0, o.bG)([J.Ay], () => J.Ay.useReducedMotion),
        _ = t === E.intl.string(S.default.Zc7gML),
        P = r === t && _;
    function R(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: h()(ua.VT, { [ua.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, I - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(o$.e, { shortcut: "tab", className: ua.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(oT.o, {
                text: t,
                variant: ui,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: h()(ua.xM, { [ua.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            R(ua.IS, n || (!M && "out" === k), u),
            (0, a.jsx)("span", {
                ref: c,
                className: ua.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: ui, tag: "span", children: t }),
            }),
            P
                ? (0, a.jsxs)("span", {
                      className: ua.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: ui, tag: "span", className: ua.xM, children: t }),
                          R(ua.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uu = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                running: l,
                restoring: r = !1,
                onSend: s,
                onInterrupt: u,
                onUploadFile: c,
                onApprove: d,
                onImport: m,
                onSendToOtherProjects: f,
                suggestion: h,
                questionOpen: p = !1,
                hasPendingContext: g = !1,
                onDraftHasTextChange: x,
                modelSettings: v,
                onModelSettingsChange: j,
            } = e,
            b = (function (e) {
                let t = i.useContext(o8.Ay),
                    [n] = i.useState(() => {
                        let n = (0, o0.ie)();
                        return (
                            (n.children = (0, o2.x7)(e)),
                            (n.selection = ut(n)),
                            (0, o7.a)({
                                editor: n,
                                chatInputType: o1.oU.GENERIC_RICH_TEXTAREA,
                                channel: ue,
                                windowContext: t,
                                previewMarkdown: !0,
                                updateState: (e, t, n) => {
                                    let { value: l, selection: r } = n;
                                    (void 0 !== l && (e.children = l), null != r && (e.selection = r), e.onChange());
                                },
                            }),
                            (function (e) {
                                let { onChange: t } = e;
                                e.onChange = () => {
                                    let n = [];
                                    for (let [t, l] of o6.VW.nodes(e, { at: [], match: o6.l5.isText }))
                                        for (let e of t.text.matchAll(it.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        o3.o.withMergedEntry(e, () =>
                                            o6.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    o4.b.textToVoid(
                                                        e,
                                                        { type: "hostInlineVoid", raw: t, children: [{ text: "" }] },
                                                        {
                                                            anchor: { path: l, offset: r },
                                                            focus: { path: l, offset: a },
                                                        },
                                                    );
                                            }),
                                        ),
                                        t());
                                };
                            })(n),
                            n
                        );
                    });
                return (i.useLayoutEffect(() => n.onChange(), [n]), n);
            })(id.getDraft(t)),
            [y, k] = i.useState(() => un(b)),
            w = i.useRef(y),
            [C, A] = i.useState(null),
            I = i.useCallback(() => {
                let e = un(b);
                e !== w.current &&
                    ((w.current = e),
                    eP.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }),
                    k(e));
                A(
                    (function (e) {
                        let { selection: t } = e;
                        if (null == t || !o6.ZF.isCollapsed(t)) return null;
                        let [n] = o6.VW.node(e, t.anchor.path);
                        return o6.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                    })(b),
                );
            }, [b, t]),
            M = i.useCallback((e) => ul(b, e), [b]),
            P = "" !== y.trim();
        i.useEffect(() => x?.(P), [P, x]);
        let R = i.useRef(t);
        i.useLayoutEffect(() => {
            R.current !== t && ((R.current = t), ul(b, id.getDraft(t)));
        }, [b, t]);
        let T = (0, o.bG)([J.Ay], () => J.Ay.isSubmitButtonEnabled),
            [L, $] = i.useState(!1);
        i.useEffect(() => {
            l || $(!1);
        }, [l]);
        let D = i.useRef(null),
            {
                drafts: z,
                addFiles: O,
                pasteFiles: F,
                removeDraft: U,
                settled: G,
                takeRefs: B,
            } = e0({ projectId: t, surface: "chat", onUploadFile: c }),
            K = nd.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && no(n);
            }),
            H = "" !== y.trim() || z.length > 0 || g || K,
            W = n && H && G,
            [V, X] = i.useState(null);
        i.useEffect(() => {
            if (null == V) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => X(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [V]);
        let Y = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: c } =
                        ((t = (0, o.bG)([tP.Ay], () => tP.Ay.getProject(e), [e])),
                        (n = t?.id),
                        (l = t?.owner_user_id),
                        (r = (0, o.yK)(
                            [nE.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              nE.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, oW.Y_)(l), r.forEach(oW.Y_));
                        }, [l, r]),
                        (a = (0, o.bG)([ax.default], () => (null == l ? null : ax.default.getUser(l)), [l])),
                        (s = (0, o.yK)(
                            [ax.default],
                            () => r.map((e) => ax.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    d = (0, o.bG)([oH.default], () => oH.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...c].filter((e) => e.id !== d && !e.bot),
                    [u, c, d],
                );
            })(t),
            Z = (0, oK.rU)(t),
            [Q, ee] = i.useState(null),
            [et, en] = i.useState(0),
            el = i.useMemo(() => (null != C && n ? (0, oB.OG)(C, C.length) : null), [C, n]),
            er = el?.start ?? null;
        i.useEffect(() => {
            null == er ? ee(null) : (0, oK.IP)(t);
        }, [er, t]);
        let ea = er === Q ? null : el,
            ei = i.useMemo(() => (null == ea ? [] : (0, oB.l$)(Y, Z, ea.text)), [ea, Y, Z]),
            es = ea?.text;
        i.useEffect(() => en(0), [es]);
        let eo = ei.length > 0,
            eu = Math.min(et, Math.max(0, ei.length - 1)),
            ec = i.useId(),
            ed = i.useCallback(
                (e) => {
                    let t = ei[e];
                    null != ea &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (o4.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                o4.b.insertText(e, `${n} `));
                        })(b, ea.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ei, ea, b],
            ),
            em = i.useCallback(() => {
                if (!W) return;
                let e = B(),
                    n = K
                        ? (function (e) {
                              let t = nf(e);
                              if (null == t || !no(t)) return null;
                              let n = t.history.present,
                                  l = rT(e);
                              return (
                                  nh(e, (e) => ({ ...e, history: t9, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, _.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (rM.set(i, s),
                                          (s.job = (function (e) {
                                              let t = 0,
                                                  n = null,
                                                  l = null,
                                                  r = null,
                                                  a = !1,
                                                  i = !1,
                                                  s = !1;
                                              async function o() {
                                                  if (!(a || i || s)) {
                                                      ((a = !0), e.update("uploading", l));
                                                      try {
                                                          if (((n ??= await e.capture(t++)), null == n))
                                                              throw Error("capture failed");
                                                          if (((l ??= await e.composite(n)), null == l))
                                                              throw Error("composite failed");
                                                          if (
                                                              (null == r || (await e.isStaged(r)) || (r = null),
                                                              s ||
                                                                  (e.update("uploading", l),
                                                                  (r ??= await e.upload(l)),
                                                                  s))
                                                          )
                                                              return;
                                                          if (!e.send(r)) throw Error("send failed");
                                                          ((i = !0), e.update("sent", l));
                                                      } catch {
                                                          s || e.update("failed", l);
                                                      } finally {
                                                          a = !1;
                                                      }
                                                  }
                                              }
                                              function u() {
                                                  o().catch(() => {});
                                              }
                                              return (
                                                  u(),
                                                  {
                                                      retry: u,
                                                      cancel: () => {
                                                          s = !0;
                                                      },
                                                  }
                                              );
                                          })({
                                              capture: (t) => (0 === t ? l : rT(e)),
                                              composite: (e) => rE(e, n),
                                              upload: (t) =>
                                                  (0, eT.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, eT.n6)(e, t.id),
                                              send: (n) => (0, _.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      rP(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (rM.delete(i),
                                                          window.setTimeout(() => {
                                                              (rP(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                s(y, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == us && (us = document.createElement("canvas").getContext("2d"));
                    let i = us;
                    if (null == i) return a;
                    let s = getComputedStyle(e);
                    i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let o =
                        t > 0
                            ? t
                            : ((l = parseFloat(s.paddingInlineStart)),
                              (r = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(r) ? 0 : r));
                    if (o <= 0 || i.measureText(a).width <= o) return a;
                    let u = 0,
                        c = a.length;
                    for (; u < c;) {
                        let e = Math.ceil((u + c) / 2);
                        i.measureText(a.slice(0, e)).width <= o ? (u = e) : (c = e - 1);
                    }
                    let d = a.slice(0, u),
                        m = d.lastIndexOf(" ");
                    return (m > 0 ? d.slice(0, m) : d).trimEnd();
                })(ud(eC.current), eO.current, (0, oB.Lj)(y));
                ("" !== l && X(l), M(""), ee(null));
            }, [W, K, t, y, s, B, M]),
            ef = i.useCallback(
                (e) => {
                    (e.preventDefault(), em());
                },
                [em],
            ),
            eh = i.useCallback(() => {
                null == u || L || ($(!0), u());
            }, [u, L]),
            ep = null == h || "" !== y || !n || r || g ? null : h,
            eg = i.useCallback(
                (e) => {
                    if (eo && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ei.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), en((eu + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ed(eu));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), ee(ea?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && l && null != u && !L) {
                        (e.preventDefault(), e.stopPropagation(), eh());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ep) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), M(ep));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), em());
                },
                [em, d, l, u, L, eh, ep, M, eo, ei.length, eu, ed, ea],
            ),
            ex = i.useCallback(
                (e) => {
                    n && F(e);
                },
                [n, F],
            );
        (0, oF.Vo)({
            event: q.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ex(t);
            },
        });
        let eN = i.useCallback(
                (e) => {
                    (O(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [O],
            ),
            eC = i.useRef(null),
            eA = i.useRef(null),
            eS = i.useCallback(() => {
                let e = w.current;
                f?.((0, oB.Lj)(e), () => {
                    w.current === e && M("");
                });
            }, [f, M]),
            eI = i.useCallback((e) => {
                let t = D.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [eM, e_] = i.useState(0),
            [eR, eL] = i.useState(!1);
        i.useEffect(() => {
            if (0 === y.length) return void eL(!1);
            let e = ud(eC.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && e_(t);
            }
            eL(!0);
            let t = setTimeout(() => eL(!1), uc);
            return () => clearTimeout(t);
        }, [y]);
        let e$ = i.useMemo(() => ({ "--custom-glow-x": `${eM}px` }), [eM]),
            eD = eR ? ` ${ua.EB}` : "",
            ez = r
                ? E.intl.string(S.default.qqlUiW)
                : n
                  ? g
                      ? E.intl.string(S.default.knUjL3)
                      : p
                        ? E.intl.string(S.default.IevBEw)
                        : E.intl.string(l ? S.default["0BJa/0"] : S.default.TEeU7z)
                  : E.intl.string(S.default.zZ9NgM),
            eO = i.useRef(0),
            eF = i.useRef(null),
            eq = i.useCallback((e) => {
                if ((eF.current?.disconnect(), null == e)) return;
                eO.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eO.current = e.clientWidth;
                });
                (t.observe(e), (eF.current = t));
            }, []),
            eU = i.useId(),
            eG = i.useId(),
            eB = null != ep,
            eK = V ?? ep ?? ez,
            eH = "" === y && "" !== eK;
        return (0, a.jsxs)("form", {
            onSubmit: ef,
            className: ua.DA,
            children: [
                eo
                    ? (0, a.jsx)(oJ, {
                          id: ec,
                          projectId: t,
                          suggestions: ei,
                          selectedIndex: eu,
                          onHover: en,
                          onSelect: ed,
                      })
                    : null,
                z.length > 0 || K
                    ? (0, a.jsxs)("div", {
                          className: ua.lN,
                          children: [
                              z.map((e) => (0, a.jsx)(e1, { draft: e, onRemove: U }, e.localId)),
                              K ? (0, a.jsx)(oU, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${ua.wg} ${ua.LP}${eD}`, style: e$, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${ua.wg} ${ua.L3}${eD}`, style: e$, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: ua.VA,
                    ref: eC,
                    children: [
                        (0, a.jsx)("input", {
                            ref: D,
                            type: "file",
                            multiple: !0,
                            onChange: eN,
                            className: ua.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(ev.Y, {
                            targetElementRef: eA,
                            position: "top",
                            align: "left",
                            animation: ev.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(ej.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(eb.rX, {
                                        children: [
                                            eE.map((e) =>
                                                (0, a.jsx)(
                                                    eb.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => eI(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(eb.Dr, {
                                                      id: "import-project",
                                                      label: E.intl.string(S.default["p/k5i7"]),
                                                      iconLeft: oD.q,
                                                      leadingAccessory: { type: "icon", icon: oD.q },
                                                      action: m,
                                                  })
                                                : null,
                                            null != f
                                                ? (0, a.jsx)(eb.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: E.intl.string(S.default["5HmLrK"]),
                                                      iconLeft: oz.t,
                                                      leadingAccessory: { type: "icon", icon: oz.t },
                                                      action: eS,
                                                  })
                                                : null,
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) => {
                                let { isShown: l } = t;
                                return (0, a.jsx)("button", {
                                    ...e,
                                    ref: eA,
                                    type: "button",
                                    className: `${ua.Y0} ${ua.nu}`,
                                    disabled: !n,
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(ey.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: ua.Qu,
                                    }),
                                });
                            },
                        }),
                        eH
                            ? (0, a.jsx)("div", {
                                  ref: eq,
                                  className: ua.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(uo, { text: eK, offering: eB && null == V, typed: null != V }),
                              })
                            : null,
                        (0, a.jsx)(rZ.A, { id: eG, children: E.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(it.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(oO.A, {
                                editor: b,
                                containerClassName: ua.sq,
                                className: ua.jp,
                                readOnly: !n,
                                canFocus: n,
                                onChange: I,
                                onBlur: () => A(null),
                                onKeyDown: eg,
                                onPaste: ex,
                                renderExtraElement: ur,
                                "aria-labelledby": eG,
                                "aria-describedby": eH ? eU : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": eo,
                                "aria-controls": eo ? ec : void 0,
                                "aria-activedescendant": eo ? ((0, oV.aI)(eu) ?? void 0) : void 0,
                            }),
                        }),
                        eH ? (0, a.jsx)(rZ.A, { id: eU, children: ez }) : null,
                        (0, a.jsx)("div", {
                            className: ua.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(N.m, {
                                          text: E.intl.string(S.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${ua.Y0} ${ua.$E}`,
                                              disabled: L,
                                              onClick: eh,
                                              "aria-label": E.intl.string(S.default.wiguT0),
                                              children: (0, a.jsx)(ih.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : v?.tierSettings != null && null != j
                                      ? (0, a.jsx)(tl, {
                                            settings: v.tierSettings,
                                            tiers: v.tiers,
                                            choices: v.choices,
                                            disabled: !n,
                                            onChange: j,
                                            className: `${ua.Y0} ${ua.$E}`,
                                            icon: (0, a.jsx)(ek.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        T
                            ? (0, a.jsxs)("div", {
                                  className: ua.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: ua.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: ua.rt,
                                          disabled: !W,
                                          "aria-label": E.intl.string(S.default.rxW2cl),
                                          children: (0, a.jsx)(ew.SendMessageIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
            ],
        });
    }),
    uc = 1500;
function ud(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var um = n(709753),
    uf = n(540338),
    uh = n(986109);
let up = i.createContext(null);
function ug(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(up),
        [d, m] = i.useState(() => J.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
        f = i.useCallback((e) => {
            e.target === e.currentTarget && m(!0);
        }, []);
    return (0, a.jsx)("li", {
        onContextMenu: u,
        onAnimationEnd: d ? void 0 : f,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: h()(uh.xk, { [uh.g5]: d, [uh.Qo]: s, [uh.q3]: o }),
        children: n,
    });
}
let ux = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n, justRemixed: l } = e;
            return (null != t && n) || l ? "card" : null;
        },
        dismissal: "app",
    },
    uv = new Map();
function uj(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function ub(e, t) {
    return null != e && e > 0 && e < t;
}
let uy = "ideas",
    uk = "live_behind",
    uw = "conjureTipDismissals",
    uN = new Set(),
    uC = new Set(),
    uA = 0;
function uS() {
    let e = V.w.get(uw);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function uE(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return uN.has(((n = e.id), `${t}:${n}`));
        case "app":
            return uS().app[t]?.includes(e.id) === !0;
        case "forever":
            return uS().forever.includes(e.id);
    }
}
function uI(e) {
    return (uC.add(e), () => uC.delete(e));
}
let uM = [12e4, 6e4];
var u_ = n(292771);
function uP(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([J.Ay], () => J.Ay.useReducedMotion),
        [r, s] = i.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let c = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(null),
        f = i.useRef(u);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = c.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = d.current,
            s = m.current,
            o = r?.offsetHeight ?? 0,
            h =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((d.current = h), (m.current = o));
        let p = f.current !== u;
        if (((f.current = u), !p || l || null == s || null == i || null == a || null == h)) return;
        let g = i.width / Math.max(1, h.width);
        (a.animate(
            [
                {
                    transform: `translate(${i.left - h.left}px, ${i.top - h.top}px) scale(${g})`,
                    transformOrigin: "top left",
                },
                { transform: "none", transformOrigin: "top left" },
            ],
            { duration: 260, easing: "cubic-bezier(0.2, 0, 0, 1)" },
        ),
            n.animate([{ height: `${s}px` }, { height: `${o}px` }], {
                duration: 260,
                easing: "cubic-bezier(0.2, 0, 0, 1)",
            }));
    });
    let p = r.some((e) => e.leaving);
    return (
        i.useEffect(() => {
            if (!p) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [p, r]),
        (0, a.jsx)("div", {
            ref: c,
            className: u_.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: h()(u_.qd, e.leaving ? u_.dv : u_.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var uR = n(443865),
    uT = n(247171);
function uL(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: h()(uT.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: h()(uT.gutter, uT[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: uT.content, children: i }),
        ],
    });
}
var u$ = n(716502);
function uD(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uL, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: u$.Nr,
        children: (0, a.jsxs)("section", {
            className: u$.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: u$.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(lf.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: ed.P,
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: n,
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
function uz(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: u$.DD,
        children: t,
    });
}
function uO(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: u$.rf,
        children: t,
    });
}
function uF(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: u$.o1, children: t });
}
let uq = {
    ...ux,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(uD, {
            icon: uR.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(uz, { children: E.intl.string(S.default.OJlbhX) }),
                (0, a.jsx)(uO, { children: E.intl.string(S.default["3vJBni"]) }),
                (0, a.jsx)(uF, {
                    children: (0, a.jsx)(Z.$, {
                        variant: "primary",
                        size: "sm",
                        text: E.intl.string(S.default["U/bLzU"]),
                        disabled: null == n,
                        onClick: () => {
                            (l?.(), n?.());
                        },
                    }),
                }),
            ],
        });
    },
};
var uU = n(830205);
function uG(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uL, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: uU.aK,
        children: (0, a.jsxs)("div", {
            className: uU.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: uU.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: uU.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(lf.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: ed.P,
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: n,
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
var uB = n(95635);
let uK = [
    {
        id: uk,
        priority: 2,
        resolve: function (e) {
            let { turn: t, publish: n, draftHasText: l, idleMs: r } = e;
            return null == t ||
                l ||
                null == n ||
                n.publishing ||
                !n.isUpdate ||
                null != n.disabledReason ||
                r < 12e4 ||
                (null != t.publishCta && oc(n, t.publishCta)) ||
                ub(e.messagesSinceShown(uk), 10)
                ? null
                : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { publish: n },
                dismiss: l,
            } = t;
            return null != n
                ? (0, a.jsx)(uG, {
                      icon: uB.UploadIcon,
                      onDismiss: l,
                      children: E.intl.format(S.default.fWfeZ8, { onPublish: () => n.run("outdated_notice") }),
                  })
                : null;
        },
    },
    uq,
    {
        id: uy,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(ux) ||
                0 === e.messagesSinceShown(ux.id) ||
                ub(e.messagesSinceShown(uy), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(uG, {
                icon: uR.LightbulbIcon,
                onDismiss: l,
                children: E.intl.format(S.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var uH = n(817921);
function uW(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            var a;
            let s,
                u,
                c,
                d,
                m,
                f,
                h,
                p,
                g =
                    ((s = (0, lk.Ay)(t)),
                    (u = (0, o.bG)([ax.default], () => ax.default.getCurrentUser()?.id)),
                    (m = (function (e, t) {
                        let [n, l] = i.useState(() => Date.now());
                        return (
                            i.useEffect(() => {
                                if (null == e) return;
                                let r = (function (e, t, n, l) {
                                    let r = t.map((t) => e + t);
                                    if (r.some((e) => e > n && e <= l)) return 0;
                                    let a = r.filter((e) => e > l);
                                    return a.length > 0 ? Math.min(...a) - l : null;
                                })(e, t, n, Date.now());
                                if (null == r) return;
                                let a = setTimeout(() => l(Date.now()), r);
                                return () => clearTimeout(a);
                            }, [e, t, n]),
                            n
                        );
                    })(
                        (d =
                            null != (c = n.at(-1))
                                ? Math.max(c.created_at, c.finished_at ?? 0, c.settled_at ?? 0)
                                : null),
                        uM,
                    )),
                    (h =
                        null ==
                            (f = (function (e) {
                                for (let t = e.length - 1; t >= 0; t--) {
                                    let n = e[t];
                                    if (
                                        "publish_notice" !== n.kind &&
                                        "project_event" !== n.kind &&
                                        "context_boundary" !== n.kind
                                    ) {
                                        if ("user" === n.role) return null;
                                        if ((0, rK.BL)(n)) return n;
                                        if (!(0, rK.B0)(e, t)) break;
                                    }
                                }
                                return null;
                            })(n)) ||
                        null != (a = f).awaitingUser ||
                        null != a.secretRequest ||
                        null != a.settingsRequest ||
                        (a.intake?.questions.length ?? 0) > 0
                            ? null
                            : f),
                    {
                        projectId: t,
                        turn: h,
                        publish: s,
                        draftHasText: l,
                        idleMs: null != d ? Math.max(0, m - d) : 0,
                        hasPublished:
                            null !=
                            (p = (function (e) {
                                for (let t = e.length - 1; t >= 0; t--)
                                    if ("publish_notice" === e[t].kind) return e[t].created_at;
                                return null;
                            })(n)),
                        justRemixed: c?.projectEvent?.type === "remixed",
                        publishedSinceLastMessage: null != p && 0 === uj(n, p, u),
                        messagesSinceShown: (e) => {
                            let l = uv.get(`${t}:${e}`);
                            return null != l ? uj(n, l, u) : null;
                        },
                        isDismissed: (e) => uE(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(uI, () => uA);
            let { callout: x, hint: v } = (function (e, t, n) {
                    let l = { callout: null, hint: null };
                    for (let r of [...e].sort((e, t) => t.priority - e.priority)) {
                        if (null != l.callout && null != l.hint) break;
                        if (n(r)) continue;
                        let e = r.resolve(t);
                        null != e &&
                            ("hint" === e
                                ? (l.hint ??= { tip: r, presentation: e })
                                : (l.callout ??= { tip: r, presentation: e }));
                    }
                    return l;
                })(e, g, (e) => uE(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== g.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                uv.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                j.map((e) => ({
                    ...e,
                    options: {
                        context: g,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          if (!(null == e.dismissal || uE(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  uN.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = uS();
                                                  V.w.set(
                                                      uw,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (uA++, uC.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(uK, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(ug, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: uH.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(uP, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var uV = n(52133),
    uX = n(732159),
    uY = n(888366),
    uZ = n(862026),
    uJ = n(291192);
function uQ(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, uZ.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: uJ.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: uJ.Sp,
                children: [
                    (0, a.jsx)("span", { className: uJ.q3 }),
                    (0, a.jsxs)("span", {
                        className: uJ.g8,
                        children: [
                            (0, a.jsx)(uY.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: uJ.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: uJ.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(ap.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, nL.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(uX.u, {
                                                                    ...t,
                                                                    title: E.intl.string(S.default["i+xjZM"]),
                                                                    subtitle: E.intl.string(S.default.fMBZmD),
                                                                    confirmText: E.intl.string(S.default.i5f3Uo),
                                                                    onConfirm: e,
                                                                }),
                                                            ),
                                                        ))
                                                      : s.onPress();
                                              },
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    null != r.note
                        ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
function u0(e) {
    return (0, o.bG)([tP.Ay, lR.A], () => {
        let t = tP.Ay.getProject(e);
        return null == t ? "" : (lR.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var u1 = n(951465),
    u2 = n(369455);
function u3(e) {
    let { projectId: t, notice: n } = e,
        l = u0(t),
        r = (0, o.bG)([tP.Ay, d.A], () => {
            let e = tP.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (d.A.getGuild(e.guild_id)?.name ?? null);
        });
    return (0, a.jsxs)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            E.intl.format(
                !0 === n.channel_skipped
                    ? S.default.ev23Cw
                    : n.update
                      ? S.default.gQzuLC
                      : null == r
                        ? S.default.MOrR29
                        : S.default["/npn7F"],
                { name: l, server: r ?? "" },
            ),
            n.update && null != n.published_revision ? (0, a.jsx)(u5, { projectId: t, notice: n }) : null,
        ],
    });
}
function u5(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(lk.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [lq.A, tP.Ay],
                    () => {
                        let r = lq.A.getPublishStatus(e),
                            a = tP.Ay.getProject(e);
                        return {
                            sent:
                                null == l ? null : (r?.patchNotesSent?.find((e) => e.publishedRevision === l) ?? null),
                            canOffer:
                                null != l &&
                                t.update &&
                                l === r?.publishedRevision &&
                                null != n &&
                                null != a &&
                                "user" !== a.install_scope &&
                                (0, tP.jf)(a),
                        };
                    },
                    [e, l, t.update, n],
                );
            return null != r
                ? { state: "sent", sent: r }
                : a && null != l && null != n
                  ? { state: "offer", publishedRevision: l, fallbackGuildId: n }
                  : null;
        })(t, n);
    return null == l
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  " ",
                  "sent" === l.state
                      ? E.intl.format(S.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    C.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: u2.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, u.pX)(q.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : E.intl.format(S.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = tP.Ay.getProject(e),
                                        a = null == r ? null : (0, lk.KL)(r, l);
                                    return null == r || null == a
                                        ? null
                                        : {
                                              projectId: e,
                                              guildId: a,
                                              applicationId: r.application_id,
                                              projectName: r.name,
                                              publishedRevision: n,
                                          };
                                })(t, l);
                                null != e && (0, u1.A)(e);
                            },
                        }),
              ],
          });
}
var u4 = n(940874),
    u6 = n(565645),
    u7 = n(187308),
    u8 = n(981879);
function u9(e) {
    let { reaction: t } = e;
    return (0, a.jsx)("div", {
        className: u8.H,
        children: (0, a.jsx)(u6.A, {
            emojiId: t.emojiId,
            emojiName: t.emoji,
            animated: t.animated,
            shouldAnimate: !0,
            alt: (0, u7.pW)(t),
            size: "reaction",
        }),
    });
}
var ce = n(442433);
n(775443);
var ct = n(616e3),
    cn = n(155899),
    cl = n(521981),
    cr = n(491182),
    ca = n(438729),
    ci = n(622868),
    cs = n(448368),
    co = n(837528),
    cu = n(470964),
    cc = n(715628),
    cd = n(752636),
    cm = n(9842),
    cf = n(589022),
    ch = n(994500),
    cp = n(967198);
let cg = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function cx(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function cv(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function cj(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = cv(e, t),
        a = e.codePointAt(t);
    if (
        (null != a &&
            (8205 === a ||
                (a >= 65024 && a <= 65039) ||
                (a >= 127995 && a <= 127999) ||
                (a >= 768 && a <= 879) ||
                (a >= 8400 && a <= 8447) ||
                (a >= 65056 && a <= 65071) ||
                (a >= 917536 && a <= 917631))) ||
        8205 === r
    )
        return !0;
    if (cx(r) && cx(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && cx(cv(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function cb(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([J.Ay], () => J.Ay.useReducedMotion),
        r = n && !l,
        [a, s] = i.useState(() => ({ target: e, length: e.length })),
        u = a;
    (u.target !== e &&
        (u = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let r = Math.min(l, t.length),
                          a = 0;
                      for (; a < r && e.charCodeAt(a) === t.charCodeAt(a);) a++;
                      for (; a > 0 && cj(t, a);) a--;
                      return a;
                  })(u.target, e, u.length)
                : e.length,
        }),
        r || u.length === e.length || (u = { target: e, length: e.length }),
        u !== a && s(u));
    let c = r && u.length < e.length,
        d = i.useRef(u);
    i.useLayoutEffect(() => {
        d.current = u;
    });
    let m = i.useRef(0),
        f = i.useRef(0);
    (i.useEffect(() => {
        if (c)
            return (
                (f.current = 0),
                (m.current = requestAnimationFrame(function e(t) {
                    let n = 0 === f.current ? 32 : t - f.current;
                    if (n >= 32) {
                        f.current = t;
                        let e = d.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    r = Math.min(Math.max(n, 0), t.length),
                                    a = t.length - r;
                                if (a <= 0) return r;
                                if (a > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, a / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && cg.has(e.charAt(l - 1));) l--;
                                    return cg.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && cj(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    m.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(m.current)
            );
    }, [c]),
        i.useEffect(() => {
            if (c)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [c]));
    let h = Math.min(u.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var cy = n(624479),
    ck = n(890377),
    cw = n(180227);
function cN(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: h()(cw.QE, { [cw.Rn]: t }),
              children: (0, a.jsx)(sO.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          sO.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function cC(e) {
    return lx.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: cy.CopyIcon, onClick: () => (0, lx.C)(e) }]
        : [];
}
function cA(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(S.default.CXtLD2),
                          tooltip: E.intl.string(S.default.DOb1HM),
                          icon: ck.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(S.default.urZwpN),
                          icon: ed.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(cN, { groupStart: n, actions: [...r, ...cC(t)] });
}
function cS(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(S.default.H8Jfhu), icon: rr.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: tL.BugIcon, onClick: r }];
    return (0, a.jsx)(cN, { groupStart: n, actions: [...i, ...cC(t), ...s] });
}
let cE = (0, sc.createChannelRecord)({ id: "conjure-builder", type: q.rbe.DM }),
    cI = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function cM(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: h()(cw.Yq, { [cw.x1]: t }), children: e });
}
function c_(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let cP = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function cR(e, t, n) {
    let { content: l } = (0, cu.A)(e, cP),
        r = i.useMemo(() => ((0, it.aW)(e.content) ? (0, cl.z2)(oE.U, e, cP).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: cE, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(ca.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, cc.A)(s, r);
}
function cT(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, co.m)(e, cE, t.usernameProfile, l),
        u = (0, co.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([cp.A], () => cp.A.getGuildId()),
        d = (0, o.bG)([ax.default], () => ax.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = ax.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(cf.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
            },
            [d, c, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: m,
        guildId: c ?? void 0,
    };
}
function cL(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, it.aW)(n.content)
                          ? (0, cl.z2)(oE.U, n, e).content
                          : (0, cl.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: cw.GV,
                              children: [
                                  (0, a.jsx)(tT.x, {
                                      className: cw.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  l,
                              ],
                          }),
                          t,
                      ],
                  });
        }, [n, l]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: c } = (0, o.cf)(
            [ch.A],
            () => ({
                isReplyAuthorBlocked: ch.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: ch.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, sD.X4)(n),
        m = (0, sD.X4)(t),
        f = cT(n);
    return (0, a.jsx)(cs.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: cE,
        referencedMessage: { state: cm.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: c,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: f.renderPopout,
        showAvatarPopout: f.showAvatarPopout,
        showUsernamePopout: f.showUsernamePopout,
        onClickAvatar: f.onClickAvatar,
        onClickUsername: f.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: f.onPopoutRequestClose,
    });
}
function c$(e) {
    let { message: t, author: n } = e,
        l = cT(t);
    return (0, a.jsx)(ci.Ay, {
        message: t,
        channel: cE,
        author: n,
        guildId: l.guildId,
        subscribeToGroupId: t.id,
        renderPopout: l.renderPopout,
        showAvatarPopout: l.showAvatarPopout,
        showUsernamePopout: l.showUsernamePopout,
        onClickAvatar: l.onClickAvatar,
        onClickUsername: l.onClickUsername,
        onPopoutRequestClose: l.onPopoutRequestClose,
    });
}
function cD(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, oW.vm)(l),
        c = i.useMemo(() => (0, sD.FT)(u, null), [u]),
        d = i.useMemo(() => tY(t), [t]),
        m = d?.body ?? t,
        f = (0, oB.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, su.Ay)({ channelId: cE.id, content: m, author: u });
            return (0, so.rh)({ ...e, timestamp: c_(n, e.timestamp), state: q.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              cz,
              {
                  message: h,
                  author: c,
                  content: m,
                  selected: d?.label,
                  accessories: r,
                  groupStart: s,
                  onQueuedAction: o,
              },
              f,
          );
}
function cz(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = cR(t, l);
    return (0, a.jsx)(cr.A, {
        className: cw.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(c$, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: cw.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: cw.GV,
                              children: [
                                  (0, a.jsx)(tT.x, {
                                      className: cw.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: cw.WO, children: u }),
                      ],
                  }),
        childrenAccessories: cM(i, "" !== l),
        childrenButtons: (0, a.jsx)(cA, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function cO(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: c = !1,
            buttons: d,
        } = e,
        { text: m, revealing: f } = cb(t, { streaming: (0, o.bG)([eN.A], () => c && eN.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, sD.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, oW.vm)(g),
        v = i.useMemo(() => (null == r ? null : tY(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, su.Ay)({ channelId: cE.id, content: v?.body ?? r.content, author: x });
            return (0, so.rh)({ ...e, id: r.id, timestamp: c_(r.createdAt, e.timestamp), state: q.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: cE.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, su.Ay)({ channelId: cE.id, content: "", author: cI })),
        k = i.useMemo(
            () =>
                (0, so.rh)({
                    ...y,
                    timestamp: c_(n, y.timestamp),
                    state: q.cmJ.SENT,
                    ...(null != b ? { type: q.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        N = i.useMemo(
            () => (0, cd.A)({ message: k, channel: cE, author: p, guildId: void 0, isGroupStart: u }),
            [k, p, u],
        ),
        C = cR(w, m, cw.OS);
    return (0, a.jsxs)("div", {
        className: cw.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(cr.A, {
                className: cw.yE,
                author: p,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(cL, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: cM(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: cw.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(et.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function cF(e) {
    let { onSelect: t, onClose: n = ce.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(ej.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eb.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eb.Dr, {
                          id: "restore-version",
                          label: E.intl.string(S.default.H8Jfhu),
                          icon: rr.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eb.Dr, { id: "view-trace", label: "View Trace", icon: tL.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cq(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: i,
            planVersion: s,
            pickedIdeaIds: u,
            secretRequestAwaiting: c,
            secretRequestStatus: d,
            settingsFloating: m = !1,
            isNewest: f = !1,
            onPickIdea: h,
            onApprovePlan: p,
            onRestoreVersion: g,
        } = e,
        x = n.message,
        v =
            null != g
                ? "assistant" !== x.role || null == x.sourceSha
                    ? null
                    : {
                          sha: x.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(x.created_at).toISOString(),
                          subject: x.content,
                      }
                : null,
        j = null != v && null != g ? () => cU(v, g) : void 0,
        b =
            ((t =
                nR() && "assistant" === x.role && (0, rK.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [ct.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : ct.A.getTimingTraces(l).findLast((e) => {
                                  let { name: n, spans: l } = e;
                                  return "turn" === n && l.find((e) => null == e.parent)?.attrs?.turn_id === t;
                              });
                    return null == e || e.live ? null : e.id;
                },
                [l, t],
            )),
        y =
            null != b
                ? () =>
                      (function (e, t) {
                          for (let n of ((nM = { projectId: e, traceId: t }), [...nI])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(ug, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != j || null != y
                ? (e) => {
                      var t, n, l;
                      return (
                          (t = e),
                          (n = j),
                          (l = y),
                          void (0, ce.jA)(t, (e) => (0, a.jsx)(cF, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(cO, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(cS, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(oR, {
                projectId: l,
                steps: x.steps,
                content: "",
                proposal: x.proposal,
                planVersion: s,
                interrupted: !0 === x.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: x.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : x.ideas,
                pickedIdeaIds: null == x.ideas ? void 0 : u,
                attachments: x.attachments,
                secretRequest: n.active ? void 0 : x.secretRequest,
                secretRequestId: x.render_id,
                secretRequestAwaiting: c,
                secretRequestStatus: d,
                settingsRequest: n.active || m ? void 0 : x.settingsRequest,
                publishCta: n.active ? null : x.publishCta,
                onPickIdea: h,
                onApprovePlan: p,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != w && null != g && f
                        ? () =>
                              cU(
                                  {
                                      sha: w.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: w.authored_at,
                                      subject: w.subject,
                                  },
                                  g,
                              )
                        : void 0,
            }),
        }),
    });
}
function cU(e, t) {
    (0, cn.F)({ onConfirm: () => t(e) });
}
var cG = n(288539);
function cB(e, t, n) {
    return (0, a.jsx)(cG.A, { userId: e, content: `@${t}` }, n);
}
function cK(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => (0, oW.Y_)(l), [l]);
            let r = (0, o.bG)([ax.default], () => (null == l ? null : ax.default.getUser(l)), [l]),
                a = (0, sm.tx)(r),
                s = u0(e),
                u =
                    (0, o.bG)([d.A], () => (null == t.guild_id ? null : d.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? E.intl.string(S.default.R1tPlP),
                c = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == c
                        ? E.intl.format(S.default.Lwsrhg, { app: s, server: u })
                        : E.intl.format(S.default.qqePfT, { app: s, server: u, ...c });
                case "bot_removed":
                    return null == c
                        ? E.intl.format(S.default.mT7EQG, { app: s, server: u })
                        : E.intl.format(S.default["lA/crI"], { app: s, server: u, ...c });
                case "preview_bot_removed":
                    return null == c
                        ? E.intl.format(S.default["4LVIeo"], { app: s, server: u })
                        : E.intl.format(S.default.YJOV6D, { app: s, server: u, ...c });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == c
                        ? E.intl.format(S.default["4VQfid"], { channel: e, server: u })
                        : E.intl.format(S.default.RlMIJN, { channel: e, server: u, ...c });
                }
                case "remixed":
                    return E.intl.format(S.default.mHCXtm, { source: t.source_name });
            }
        })(n, l, cB),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([lw.A], () => null != t && t.length > 0 && a6({ keys: t }, lw.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: E.intl.string(S.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(a9, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let cH = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    r_.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, it.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(ug, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cD, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(oS.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(oG, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(u9, { reaction: o.agentReaction })
                                                  : null,
                                          ],
                                      })
                                    : void 0,
                            onQueuedAction: (function (e, t, n) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === n
                                )
                                    return (n) => (0, u4.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(ug, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cO, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(oS.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(ug, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oP, {
                            projectId: l,
                            steps: o.steps,
                            segment: n.segment,
                            active: n.active,
                            closed: n.closed,
                            segmentDurationMs: n.segmentDurationMs,
                            reportsDuration: n.reportsDuration,
                            hostsChecklist: n.hostsChecklist,
                            turnActive: n.turnActive,
                            checklistSuperseded: n.checklistSuperseded,
                            durationMs: null != o.finished_at ? o.finished_at - o.created_at : void 0,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "publishNotice":
                    return (0, a.jsx)(ug, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cO, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(u3, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(ug, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cO, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(cK, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(ug, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(uQ, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(ug, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oP, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(ug, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oP, {
                            projectId: l,
                            steps: cW,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(cq, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, uV.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, uV.A)(e.row, t.row, ["message"]) &&
                e.row.kind === t.row.kind &&
                (function (e, t, n) {
                    if (t === n) return !0;
                    switch (e) {
                        case "user":
                            return (
                                t.id === n.id &&
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.user_id === n.user_id &&
                                t.agentReaction === n.agentReaction &&
                                t.attachments === n.attachments &&
                                t.disposition === n.disposition
                            );
                        case "prose":
                            return t.created_at === n.created_at && t.attachments === n.attachments;
                        case "publishNotice":
                            return (
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.publishNotice === n.publishNotice
                            );
                        case "projectEvent":
                            return (
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.projectEvent === n.projectEvent
                            );
                        case "contextBoundary":
                            return t.contextSwitch === n.contextSwitch;
                        default:
                            return !1;
                    }
                })(e.row.kind, e.row.message, t.row.message) &&
                (0, uV.A)(e.replyTo, t.replyTo) &&
                (0, uV.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    cW = [],
    cV = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cX = new WeakMap();
function cY(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cZ(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cJ = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: u,
            onApprovePlan: c,
            floatingSettingsMessageId: d,
            liveClarificationId: m,
            onRestoreVersion: f,
            scrollerRef: p,
            stickToBottomRef: g,
            pinned: x,
            onUnpin: j,
            handleRef: b,
            onShowsLatestChange: y,
        } = e,
        k = i.useRef(null),
        [w, N] = i.useState(null),
        C = i.useCallback((e) => {
            ((k.current = e), N(e));
        }, []),
        [A, I] = i.useState(null),
        M = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(M.current), []);
    let P = i.useCallback((e) => {
            (I(e), window.clearTimeout(M.current), (M.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        R = (0, o.bG)([lq.A], () => lq.A.getPublishStatus(t)),
        T = (0, o.bG)([ax.default], () => ax.default.getCurrentUser()?.id),
        L = i.useMemo(() => {
            let e;
            return (function (e, t) {
                let n = [],
                    l = (function (e) {
                        let t = new Set(),
                            n = !1;
                        for (let l = e.length - 1; l >= 0; l--) {
                            let r = e[l];
                            null != r &&
                                null !=
                                    (function (e) {
                                        if ("assistant" !== e.role) return null;
                                        let t = (0, rB.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = cX.get(r);
                    if (null != i && i.superseded === e && i.liveCard === a) {
                        n.push(...i.planned);
                        continue;
                    }
                    let s = (function (e, t, n) {
                        let l = [];
                        function r(e, t) {
                            l.push({ row: e, groupable: { key: e.key, ...t } });
                        }
                        if ("user" === e.role)
                            return (
                                r(
                                    { kind: "user", key: e.render_id, message: e, groupStart: !1 },
                                    { actor: "user", authorId: e.user_id, boundary: void 0 },
                                ),
                                l
                            );
                        if ("publish_notice" === e.kind) {
                            let t = `${e.render_id}:publish`;
                            return (
                                r(
                                    { kind: "publishNotice", key: t, message: e, groupStart: !1 },
                                    { actor: "assistant", boundary: t },
                                ),
                                l
                            );
                        }
                        if ("context_boundary" === e.kind) {
                            let t = `${e.render_id}:contextBoundary`;
                            return (
                                r(
                                    { kind: "contextBoundary", key: t, message: e, groupStart: !1 },
                                    { actor: null, boundary: t },
                                ),
                                l
                            );
                        }
                        if ("project_event" === e.kind) {
                            let t = `${e.render_id}:projectEvent`;
                            return (
                                r(
                                    { kind: "projectEvent", key: t, message: e, groupStart: !1 },
                                    { actor: "assistant", boundary: t },
                                ),
                                l
                            );
                        }
                        let a = !(0, rK.BL)(e),
                            i = ip({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, rB.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, rB.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && cV.test(n.prose.content)) m = !0;
                            else if (null != n.prose && n.prose.key !== i.replyKey) {
                                let t = `${e.render_id}:${n.key}`;
                                r(
                                    {
                                        kind: "prose",
                                        key: t,
                                        message: e,
                                        groupStart: !1,
                                        content: n.prose.content,
                                        hostsAttachments:
                                            "streamed" === i.attachmentsHost &&
                                            n.prose.key === s &&
                                            null != e.attachments,
                                        streaming: a && n.index === d && !n.hasWork,
                                    },
                                    { actor: "assistant", boundary: t },
                                );
                            }
                            (n.hasWork || n.hasTodos) &&
                                r(
                                    {
                                        kind: "activity",
                                        key: `${e.render_id}:work-${n.index}`,
                                        message: e,
                                        groupStart: !1,
                                        segment: n.index,
                                        active: n.index === c,
                                        closed: n.index !== c,
                                        ...(null != n.durationMs ? { segmentDurationMs: n.durationMs } : {}),
                                        reportsDuration: n.index === u,
                                        hostsChecklist: n.hasTodos,
                                        turnActive: rH(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = cV.test(e.content ?? "");
                        if (
                            (!0 === e.interrupted || m || f
                                ? r(
                                      {
                                          kind: "interrupted",
                                          key: `${e.render_id}:interrupted`,
                                          message: e,
                                          groupStart: !1,
                                      },
                                      { actor: null, boundary: void 0 },
                                  )
                                : o.every((e) => !e.hasTodos) &&
                                  (e.todos?.length ?? 0) > 0 &&
                                  r(
                                      {
                                          kind: "legacyTodos",
                                          key: `${e.render_id}:todos`,
                                          message: e,
                                          groupStart: !1,
                                          checklistSuperseded: t,
                                      },
                                      { actor: null, boundary: void 0 },
                                  ),
                            (i.showsClosingMessage && !f) ||
                                null != e.proposal ||
                                (null != e.clarification && !n) ||
                                null != e.restoreProposal ||
                                null != e.publishScheduleProposal ||
                                (!a &&
                                    (null != e.ideas ||
                                        null != e.publishCta ||
                                        null != e.secretRequest ||
                                        null != e.settingsRequest)) ||
                                "standalone" === i.attachmentsHost)
                        ) {
                            let t = `${e.render_id}:closing`;
                            r(
                                {
                                    kind: "closing",
                                    key: t,
                                    message: e,
                                    groupStart: !1,
                                    active: a,
                                    attachmentsHost: i.attachmentsHost,
                                    content: i.closingContent,
                                    sideReply: "side_reply" === e.kind,
                                },
                                {
                                    actor: "assistant",
                                    boundary: t,
                                    separate: null != e.proposal || null != e.clarification || "side_reply" === e.kind,
                                },
                            );
                        }
                        return l;
                    })(r, e, a);
                    (cX.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
                }
                let r = (function (e) {
                    let t,
                        n,
                        l = [],
                        r = null,
                        a = !1,
                        i = !1;
                    for (let s of e) {
                        if (null == s.actor) {
                            (l.push(!1), (r = null), (t = void 0), (a = !1), (i = !1), (n = void 0));
                            continue;
                        }
                        let e = !a || r !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || i;
                        (e && ((r = s.actor), (t = s.authorId), (a = !0), (i = !0 === s.separate), (n = s.boundary)),
                            l.push(e));
                    }
                    return l;
                })(n.map((e) => e.groupable));
                return n.map((e, t) => ({ ...e.row, groupStart: r[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        let l = e[n].publishCta;
                        if (null != l) return ou(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, R)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = od.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), od.set(t, n)), n);
                      })),
                m,
            );
        }, [n, R, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, z] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return cY(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cZ(e, t.endKey, t.end - 1) + 1,
                a = cZ(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), cY(e, a, r));
        })($, D, x),
        F = i.useRef(O),
        q = i.useRef($),
        U = i.useRef(L),
        G = i.useRef(null),
        B = i.useRef(null),
        K = i.useRef(new Set()),
        H = i.useCallback(() => {
            let e = p.current?.getScrollerNode(),
                t = k.current;
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect().top,
                l = t.querySelectorAll("[data-conjure-row-key]"),
                r = 0,
                a = l.length - 1,
                i = null;
            for (; r <= a;) {
                let e = (r + a) >> 1;
                l[e].getBoundingClientRect().bottom > n ? ((i = l[e]), (a = e - 1)) : (r = e + 1);
            }
            let s = i?.dataset.conjureRowKey;
            G.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [p]),
        W = i.useCallback(() => {
            let e = p.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cY(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cY(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? cY(e, i, t.end) : null;
            })(q.current, F.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: g.current,
            });
            "older" === n ? (0, _.loadOlderHistory)(t) : null != n && z(n);
        }, [p, g, t]);
    i.useImperativeHandle(
        b,
        () => ({
            handleScroll() {
                (H(),
                    z((e) => {
                        let t = F.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    W());
            },
            recordAnchor: H,
            showLatest(e) {
                ((B.current = e ?? null), z(null));
            },
        }),
        [H, W],
    );
    let V = i.useRef(null),
        X = i.useCallback(
            (e) => {
                var n;
                let l;
                V.current = null;
                let r = k.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), z(F.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), P(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, _.loadOlderHistory)(t) && (V.current = e);
                    return;
                }
                (j(),
                    (B.current = () => {
                        (k.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            P(e));
                    }),
                    z(((n = q.current), cY(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [P, j, t],
        );
    (i.useEffect(() => {
        let e = V.current;
        null != e && X(e);
    }, [L, X]),
        i.useLayoutEffect(() => {
            if (null == w) return;
            let e = w.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    null != l && l !== e && ((e = l), g.current ? p.current?.scrollToBottom() : H());
                });
            return (t.observe(w), () => t.disconnect());
        }, [w, H, p, g]));
    let Y = null == O.endKey;
    (i.useEffect(() => y?.(Y), [Y, y]),
        i.useLayoutEffect(() => {
            ((F.current = O), (q.current = $), (U.current = L));
        }),
        i.useLayoutEffect(() => {
            let e = p.current?.getScrollerNode(),
                t = k.current;
            if (null != e && null != t) {
                let n = G.current;
                if (g.current) p.current?.scrollToBottom();
                else if (null != n) {
                    let l = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === n.key,
                        ),
                        r = null == l ? 0 : l.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let l = B.current;
                ((B.current = null), l?.(), H(), W());
            }
            K.current = new Set($);
        }, [L, $, O.start, O.end, p, g, H, W]));
    let Z = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, rK.BL)(n) || "plan_implemented" === n.kind) return null;
                            if (null != n.proposal) return n.render_id;
                        }
                    }
                    return null;
                })(n),
            [n],
        ),
        J = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        n = null,
                        l = 0;
                    for (let r of e)
                        if ("assistant" === r.role) {
                            if ("plan_implemented" === r.kind) {
                                ((n = null), (l = 0));
                                continue;
                            }
                            null != r.proposal &&
                                (null != n && t.set(n, { version: l, superseded: !0 }),
                                (l += 1),
                                t.set(r.render_id, { version: l, superseded: !1 }),
                                (n = r.render_id));
                        }
                    return t;
                })(n),
            [n],
        ),
        Q = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        n = new Set();
                    for (let l = e.length - 1; l >= 0; l--) {
                        let r = e[l];
                        if ("user" === r.role) {
                            n.add(r.content.trim());
                            continue;
                        }
                        if (null == r.ideas) continue;
                        let a = new Set();
                        for (let e of r.ideas) n.has(e.implementation_prompt.trim()) && a.add(e.id);
                        t.set(r.render_id, a);
                    }
                    return t;
                })(n),
            [n],
        ),
        ee = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map();
                    for (let n of e)
                        "user" !== n.role ||
                            t.has(n.id) ||
                            t.set(n.id, {
                                id: n.id,
                                content: n.content,
                                ...(null != n.user_id ? { userId: n.user_id } : {}),
                                createdAt: n.created_at,
                            });
                    return t;
                })(n),
            [n],
        ),
        et = n.at(-1),
        en =
            (et?.role !== "assistant" || null == et.awaitingUser || null == et.secretRequest
                ? null
                : (0, rK.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        el = (0, o.bG)([lw.A], () => lw.A.getSettings(t)?.secrets, [t]),
        er = (0, um.WT)(t),
        ea = i.useMemo(() => (0, oN.Mv)(n, el), [n, el]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: h()(uh.x7, uh.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: uh.Ub, children: (0, a.jsx)(eI.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: uh.x7,
            children: (0, a.jsx)(ug, { role: "assistant", children: (0, a.jsx)(cO, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(up.Provider, {
        value: K,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: uh.x7,
            children: [
                L.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cH,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && A === n.id,
                                currentUserId: "user" === e.kind ? T : void 0,
                            },
                            e.key,
                        );
                    let l = n === et;
                    return (0, a.jsx)(
                        cH,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? ee.get(n.in_reply_to) : void 0,
                            onJumpTo: X,
                            planVersion: J.get(n.render_id),
                            pickedIdeaIds: Q.get(n.render_id),
                            secretRequestAwaiting: l ? en : void 0,
                            secretRequestStatus: ea.get(n.render_id),
                            settingsFloating: n.id === d,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === Z ? c : void 0,
                            onRestoreVersion: f,
                        },
                        e.key,
                    );
                }),
                Y
                    ? er.map((e) =>
                          (0, a.jsx)(
                              ug,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(cO, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(uf.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && Y
                    ? (0, a.jsx)(ug, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(cO, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: E.intl.string(S.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                Y ? (0, a.jsx)(uW, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cQ = n(731084),
    c0 = n(823376),
    c1 = n(187447);
function c2(e) {
    let { activity: t, id: n } = e,
        l = (0, rG.j)(),
        { text: r, revealing: s } = cb(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: c1.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(rq.Ch, {
                ref: o,
                className: c1.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: h()(o_.PT, c1.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: sv.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var c3 = n(53659);
function c5(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: s = !1,
            recalling: o = !1,
            controlling: u = !1,
            publishPending: c = !1,
            publishing: d = !1,
            spoken: m,
            onSpokenChange: f,
        } = e,
        p = i.useRef(null),
        g = i.useId(),
        [x, j] = i.useState(null),
        b = (0, cQ.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            remixing: s,
            recalling: o,
            controlling: u,
            publishPending: c,
            publishing: d,
        }),
        y = E.intl.string(b),
        k = b === cQ.kx["0"],
        [w, N] = i.useState(m ?? y),
        A = (0, rG.j)();
    (l || (0, cQ.E4)(y, w) || (!A && !k)) && w !== y && N(y);
    let I = i.useRef(y);
    (i.useEffect(() => {
        I.current = y;
    }, [y]),
        i.useEffect(() => {
            f?.(w);
        }, [w, f]));
    let M = i.useRef(null),
        _ = i.useRef(w);
    i.useEffect(() => {
        _.current = w;
    }, [w]);
    let P = i.useRef(k),
        R = i.useRef(0);
    (i.useEffect(() => {
        ((P.current = k), !k && (0, cQ.E8)(_.current) && N(I.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                P.current
                    ? ((R.current = (0, cQ.E8)(_.current) ? R.current + 1 : 0), N((0, cQ.Ov)(R.current)))
                    : I.current !== _.current
                      ? N(I.current)
                      : M.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, cQ.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [A]));
    let T = null != t && "" !== t.text,
        L = t?.session ?? null,
        $ = T && null != L && x === L,
        D = i.useCallback(() => {
            T && null != L && j((e) => (e === L ? null : L));
        }, [T, L]),
        z = i.useCallback(() => j(null), []);
    return (0, a.jsx)(ev.Y, {
        targetElementRef: p,
        position: "top",
        align: "left",
        shouldShow: $,
        onRequestClose: z,
        renderPopout: () => (0, a.jsx)(c2, { id: g, activity: t }),
        children: () =>
            (0, a.jsxs)(C.D, {
                innerRef: p,
                className: h()(c3.hF, T && c3.Xd),
                "aria-label": E.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : k
                            ? cQ.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": $,
                "aria-describedby": $ ? g : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: D,
                children: [
                    (0, a.jsx)("span", {
                        className: c3.bl,
                        children: (0, a.jsx)(c0.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: c3.xu,
                        "aria-hidden": !!u || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(oT.o, {
                                  ref: M,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: cQ.vg,
                                  delay: null,
                                  className: c3.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: c3.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let c4 = { second: 1e3, minute: 6e4 };
function c6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = c4[t];
            return (
                !(function t() {
                    let a = Date.now();
                    (l(a), (n = setTimeout(t, r - ((((a - e) % r) + r) % r))));
                })(),
                () => clearTimeout(n)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, n - e)
    );
}
var c7 = n(719374);
function c8(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = c6(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: c7.$,
        "data-conjure-turn-timer": !0,
        children: (0, iw.C7)(l),
    });
}
function c9(e) {
    let { startedAt: t } = e,
        n = c6(t, "minute");
    return (0, a.jsx)(rZ.A, { role: "timer", children: (0, iw.Us)(n) });
}
var de = n(885574),
    dt = n(242779),
    dn = n(436804);
function dl(e) {
    return e.toLocaleString();
}
function dr(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: dn.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: dn.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [dl((0, dt.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    dl(n.input_tokens),
                    " in \xb7 ",
                    dl(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${dl(n.cache_creation_input_tokens)} cache write \xb7 ${dl(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function da(e) {
    let { project: t } = e,
        n = (0, dt.wU)(t.compaction),
        l = (0, dt.wU)(t.classifier),
        r = (0, dt.wV)(t.orchestrator, t.codegen),
        i = (0, dt.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: dn.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: dn.Q$,
                children: (0, a.jsxs)("div", {
                    className: dn.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [dl((0, dt.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(dr, { label: E.intl.string(S.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(dr, { label: E.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(dr, { label: E.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: dn.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, dt.sj)(i) ? "\u2014" : `${Math.round(100 * (0, dt.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function di(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ev.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(da, { project: t }),
        children: (e) =>
            (0, a.jsx)(C.D, {
                innerRef: n,
                className: dn.Y$,
                "aria-label": E.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(de.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var ds = n(997421);
function du(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: u = !1,
            thinkingActivity: c,
            compacting: d,
            saving: m,
            projectUsage: f,
            connState: h,
        } = e,
        p = (0, nT.Zv)(t),
        g = (0, o.bG)([lq.A], () => lq.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, cQ.E8)(e) || e === E.intl.string(S.default.mKK6wB) || e === E.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == f ? null : (0, cQ.uc)(f),
        k = null != s,
        w = s ?? (n ? l : void 0),
        N = n || r || k || !0 === m;
    return (0, a.jsxs)("div", {
        className: ds.jf,
        children: [
            (0, a.jsxs)("div", {
                className: ds.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || p || g
                        ? (0, a.jsx)(c5, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: k,
                              recalling: u,
                              controlling: p,
                              publishPending: g && N,
                              publishing: g,
                              spoken: x,
                              onSpokenChange: b,
                          })
                        : null,
                    null != w ? (0, a.jsx)(c8, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(c9, { startedAt: w }) : null,
            null == f || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: ds.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(di, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, cQ.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: ds.XF,
                      children: (0, cQ.Db)(h),
                  }),
        ],
    });
}
let dc = ["wheel", "touchstart", "pointerdown", "keydown"];
var dd = n(608711);
let dm = [E.intl.string(S.default["9w+Chc"]), E.intl.string(S.default.WAvmdq), E.intl.string(S.default.SKsrzl)];
function df(e) {
    let t,
        n,
        { projectId: l, restoreState: r, onRestoreVersion: s, onImportProject: u } = e,
        c = (0, o.bG)([nE.A], () => nE.A.getMessages(l), [l]),
        m = (0, o.bG)([_.default], () => _.default.getConnState(l), [l]),
        f = (0, o.bG)([nE.A], () => nE.A.getProjectUsage(l), [l]),
        h = (0, o.bG)([nE.A], () => nE.A.getThinkingActivity(l), [l]),
        p = (0, o.bG)([nE.A], () => nE.A.isCompacting(l), [l]),
        g = (0, o.bG)([nE.A], () => nE.A.isSaving(l), [l]),
        x = (0, o.bG)([a2.A], () => a2.A.getModelSettings(l), [l]),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        {
            stickToBottomRef: w,
            pinned: C,
            atBottom: A,
            unpin: I,
            releasePinHold: M,
            showsLatest: P,
            showsLatestRef: R,
            handleShowsLatestChange: T,
            updatePin: L,
        } = (function (e) {
            let t = i.useRef(!0),
                [n, l] = i.useState(!0),
                [r, a] = i.useState(!0),
                s = i.useRef(!1),
                o = i.useCallback(() => {
                    ((s.current = !0), (t.current = !1), l(!1));
                }, []),
                u = i.useCallback(() => {
                    s.current = !1;
                }, []),
                [c, d] = i.useState(!0),
                m = i.useRef(!0),
                f = i.useCallback((e) => {
                    ((m.current = e), d(e));
                }, []);
            i.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of dc) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of dc) t.removeEventListener(e, u);
                    };
                }
            }, [e, u]);
            let h = i.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    i = !s.current && r < 32 && m.current;
                t.current = i;
                let o = r > 1 || !m.current;
                (a((e) => (!o === e ? e : !o)), l((e) => (e === i ? e : i)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: o,
                releasePinHold: u,
                showsLatest: c,
                showsLatestRef: m,
                handleShowsLatestChange: f,
                updatePin: h,
            };
        })(y),
        $ = i.useCallback(() => {
            function e() {
                let e = b.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (M(), R.current ? e() : k.current?.showLatest(e));
        }, [M, R]),
        D = i.useCallback(() => {
            (L(), k.current?.handleScroll());
        }, [L]);
    (i.useLayoutEffect(() => {
        let e = b.current;
        if (null == e) return;
        let t = y.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            l = t?.getBoundingClientRect().height,
            r = new ResizeObserver((t) => {
                let r = !1;
                for (let a of t)
                    if (a.target === e) {
                        let e = a.contentRect.width;
                        if (e === n) continue;
                        ((n = e), (r = !0));
                    } else {
                        let e = a.contentRect.height;
                        if (e === l) continue;
                        ((l = e), (r = !0));
                    }
                r && (w.current ? y.current?.scrollToBottom() : k.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [w]),
        i.useEffect(() => {
            (0, _.ensureConnection)(l);
        }, [l]),
        (0, il.E1)(l, (0, rG.j)()));
    let z = t8(l),
        O = (function (e) {
            let t = (0, lk.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, o.bG)([d.A], () => (null == n ? null : (d.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: E.intl.format("channel" === s ? S.default["1cm4fj"] : S.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(l),
        F =
            ((t = (0, o.bG)([a5.A], () => a5.A.getFailure(l))),
            (n = i.useCallback(() => (0, a4.CM)(l), [l])),
            null == t
                ? null
                : {
                      message: E.intl.format(S.default.Up6Ssw, { reason: t }),
                      retry: { text: E.intl.string(S.default["ywA+ET"]), onClick: n },
                  }),
        q = (0, o.bG)([a5.A], () => a5.A.getSetupStartedAt(l), [l]),
        U = i.useCallback(
            (e, t) => {
                (0, _.sendUserMessage)(l, e, t);
            },
            [l],
        ),
        G = i.useCallback(
            (e, t, n) => {
                let r = n ?? U;
                0 === z.annotations.length
                    ? r(e, t)
                    : (r(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => tB(e.comment)),
                                  a = [];
                              if (
                                  (a.push(
                                      `My design feedback: ${1 === r.length ? "1 comment" : `${r.length} comments`} on the app.`,
                                  ),
                                  null != l)
                              ) {
                                  let e = l.title.trim(),
                                      t = "" !== e ? `${e} (${l.url})` : l.url;
                                  (a.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
                                      a.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              r.forEach((e, t) => {
                                  let n;
                                  (a.push(""),
                                      a.push(`${t + 1}. ${tW(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: z.annotations, metaComment: e, context: z.context }),
                          t,
                      ),
                      t5(l));
            },
            [z, U, l],
        ),
        B = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of rM)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, _.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = rM.get(e);
                            (rM.delete(e), rP(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(l) ||
                nE.A.isThinking(l)) &&
                (0, _.interruptTurn)(l);
        }, [l]),
        K = i.useCallback((e) => eV(l, e.implementation_prompt), [l]),
        [H, W] = (function (e) {
            let [t, n] = i.useState(() => im(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? im(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(l),
        V = i.useCallback(() => U(E.intl.string(S.default["t5CN3+"])), [U]),
        X = i.useCallback((e, t, n) => eV(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        Y = i.useCallback((e) => (0, a3.X)(l, e), [l]),
        J = i.useCallback((e) => (0, eT.vX)(l, e), [l]),
        Q = i.useCallback((e) => eQ(l, "chat", Array.from(e), J), [l, J]),
        ee = i.useCallback(() => eV(l, E.intl.string(S.default.Zc7gML)), [l]),
        et = r?.status === "restoring",
        en = "open" === m && !et,
        el = c[c.length - 1],
        er = null != el && "assistant" === el.role && null != el.proposal,
        [ea, es] = i.useState(null),
        eo = el?.clarification != null && el.clarification.id !== ea ? el.clarification : null,
        eu = i.useCallback(() => {
            null != eo && es(eo.id);
        }, [eo]),
        [ec, em] = i.useState(null),
        ef = (function (e) {
            let [t, n] = i.useState(null),
                l = i.useRef(null),
                r = i.useCallback((e) => {
                    ((l.current = e), n(e));
                }, []),
                a = t?.projectId === e ? t : null,
                s = i.useCallback(
                    (t, n) =>
                        r({
                            projectId: e,
                            request: {
                                id: `manual:${e}:${Date.now()}`,
                                summary: E.intl.string(S.default["o2++BO"]),
                                prompt: t.trim().slice(0, 4e3),
                            },
                            clearComposer: n,
                        }),
                    [e, r],
                ),
                o = i.useCallback(() => r(null), [r]),
                u = i.useCallback(
                    (e) => {
                        let t = l.current;
                        t?.request.id === e && (t.clearComposer(), r(null));
                    },
                    [r],
                );
            return { request: a?.request ?? null, open: s, close: o, sent: u };
        })(l),
        eh = el?.appBuildRequest != null && (0, rK.BL)(el) && el.appBuildRequest.id !== ec ? el.appBuildRequest : null,
        ep = ef.request ?? (null == eo ? eh : null),
        eg = null == ef.request ? eo : null,
        ex = null != ep && ep === ef.request,
        { close: ev, sent: ej } = ef,
        eb = ef.request?.id,
        ey = i.useCallback(() => {
            ex ? ev() : null != ep && em(ep.id);
        }, [ep, ex, ev]),
        ek = i.useCallback(
            (e) => {
                (null != eb && ej(eb),
                    (0, nk.P0)({
                        text: E.intl.formatToPlainString(S.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eb, ej],
        ),
        ew = (0, o.bG)([lw.A], () => lw.A.getSettings(l), [l]),
        [eN, eC] = i.useState(null),
        eA =
            null != el &&
            "assistant" === el.role &&
            null != el.settingsRequest &&
            (0, rK.BL)(el) &&
            el.id !== eN &&
            a6(el.settingsRequest, ew)
                ? el
                : null,
        eS = null == ef.request ? eA : null,
        eE = eS?.settingsRequest ?? null,
        eI = i.useCallback(() => {
            null != eA && eC(eA.id);
        }, [eA]),
        eM = null != eE,
        [e_, eP] = i.useState(null),
        eR = eg?.id ?? ep?.id ?? eS?.id,
        eL = null != eo || null != ep || null != eA;
    i.useLayoutEffect(() => {
        let e = y.current?.getScrollerNode(),
            t = e_?.firstElementChild;
        if (null == e_ || null == e || !(0, ei.vq)(t, HTMLElement) || null == eR) return;
        function n() {
            w.current && y.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - e_.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [e_, eR, y, w]);
    let e$ = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, o.bG)([nE.A], () => nE.A.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, o.bG)([nE.A], () => nE.A.isHistoryUnavailable(l), [l]),
            connState: m,
        }),
        eD = "loading" === e$ && 0 === c.length,
        ez = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return dm[e % dm.length];
        }, [l]),
        eO = er ? E.intl.string(S.default.Zc7gML) : "greeting" === e$ && 0 === c.length ? ez : null,
        eF = i.useMemo(() => {
            for (let e = c.length - 1; e >= 0; e--) {
                let t = c[e];
                if ("assistant" === t.role && !(0, rK.BL)(t)) return t;
            }
        }, [c]),
        eq = null != eF,
        eU =
            null != eF
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = ie.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(eF)
                : void 0,
        eG = er && en ? ee : void 0,
        eB = i.useCallback(() => eV(l, E.intl.string(S.default.EMgIuY)), [l]),
        [eK, eH] = i.useState(null),
        [eW, eX] = i.useState(eq);
    (eW !== eq && (eX(eq), eq || eH(null)),
        i.useEffect(() => {
            if (!eq) return;
            let e = y.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eH(null)
                        : eH(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eq, eF?.steps, P]));
    let eY = P ? eK : "bottom",
        eZ = i.useMemo(() => (null != eF ? (0, rW.b9)(eF.steps) : ""), [eF]),
        eJ = i.useMemo(() => (null != eF ? ((0, rB.lt)(eF.steps) ?? eF.todos) : void 0), [eF]),
        e0 = eF?.provisionalTodo,
        e1 = null != eF && rH(eF),
        e2 = i.useMemo(() => {
            var e;
            return null != eF ? ((e = eF.steps), iE((0, rB.Jf)(e, !0).tasks)) : void 0;
        }, [eF]);
    return (0, a.jsxs)("section", {
        ref: b,
        "data-conjure-chat": !0,
        className: dd.TE,
        children: [
            en
                ? (0, a.jsx)(j.A, {
                      title: E.intl.string(S.default.gy7byi),
                      description: E.intl.string(S.default["dkv/WO"]),
                      icons: tS.ir,
                      onDrop: Q,
                  })
                : null,
            (0, a.jsx)(an, {
                onJumpToActivity: $,
                line: eZ,
                placement: eq && "top" === eY ? "top" : null,
                todos: eJ,
                todosLive: e1,
                provisionalTodo: e0,
                agents: e2,
            }),
            (0, a.jsxs)("div", {
                className: dd.JX,
                children: [
                    (0, a.jsx)(rq.Ch, {
                        ref: y,
                        onScroll: D,
                        scrollbarGutter: eD ? "both-edges" : "stable",
                        className: [dd.N$, A ? null : dd.hB, eM ? dd.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(it.Fu.Provider, {
                            value: l,
                            children: (0, a.jsx)(cJ, {
                                projectId: l,
                                messages: c,
                                emptyState: e$,
                                floatingSettingsMessageId: eA?.id,
                                liveClarificationId: eg?.id,
                                onPickIdea: en ? K : void 0,
                                onAskForIdeas: en ? V : void 0,
                                draftHasText: H,
                                onApprovePlan: en ? eB : void 0,
                                onRestoreVersion: et || eq ? void 0 : s,
                                scrollerRef: y,
                                stickToBottomRef: w,
                                pinned: C,
                                onUnpin: I,
                                handleRef: k,
                                onShowsLatestChange: T,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: dd.NJ,
                        children: (0, a.jsx)(du, {
                            projectId: l,
                            thinking: eq,
                            turnStartedAt: eU,
                            restoring: et,
                            remixStartedAt: q,
                            recalling: eD,
                            thinkingActivity: h,
                            compacting: p,
                            saving: g,
                            projectUsage: f,
                            connState: m,
                        }),
                    }),
                    null == eg
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eP,
                              className: eM ? `${dd.B5} ${dd.J9}` : dd.B5,
                              children: (0, a.jsx)(
                                  a1,
                                  { projectId: l, clarification: eg, onSubmit: en ? X : void 0, onDismiss: eu },
                                  eg.id,
                              ),
                          }),
                    null == ep
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eP,
                              className: dd.B5,
                              children: (0, a.jsx)(
                                  am,
                                  { projectId: l, request: ep, canSend: en, onDismiss: ey, onSent: ex ? ek : void 0 },
                                  ep.id,
                              ),
                          }),
                    null == eE
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eg && null == ep ? eP : void 0,
                              className: dd.B5,
                              children: (0, a.jsx)(a9, { projectId: l, request: eE, onDismiss: eI }, eS?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: dd.Jx,
                children: [
                    (0, a.jsx)(an, {
                        onJumpToActivity: $,
                        line: eZ,
                        placement: eq && "bottom" === eY ? "bottom" : null,
                        todos: eJ,
                        todosLive: e1,
                        provisionalTodo: e0,
                        agents: e2,
                    }),
                    0 === z.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: dd.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(S.default["7b49dS"], {
                                          count: z.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(S.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(Z.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(S.default["/zOv9+"]),
                                      onClick: () => t5(l),
                                  }),
                              ],
                          }),
                    null == F
                        ? null
                        : (0, a.jsx)("div", {
                              className: dd.qB,
                              children: (0, a.jsx)(rU.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: F.message,
                                  action: F.retry,
                              }),
                          }),
                    null == O
                        ? null
                        : (0, a.jsxs)("div", {
                              className: dd.Db,
                              children: [
                                  (0, a.jsx)(rU.w, { type: "warning", role: "status", message: O.message }),
                                  (0, a.jsx)("div", {
                                      className: dd.jU,
                                      children: (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(lf.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
                                              icon: ed.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: O.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(uu, {
                        projectId: l,
                        canSend: en,
                        running: eq,
                        restoring: et,
                        onSend: G,
                        hasPendingContext: z.annotations.length > 0,
                        onInterrupt: en ? B : void 0,
                        onUploadFile: J,
                        onImport: u,
                        onSendToOtherProjects: eL ? void 0 : ef.open,
                        onApprove: eG,
                        suggestion: eO,
                        questionOpen: eL,
                        modelSettings: x,
                        onModelSettingsChange: Y,
                        onDraftHasTextChange: W,
                    }),
                ],
            }),
        ],
    });
}
var dh = n(761508),
    dp = n(933294),
    dg = n(207438),
    dx = n(683438);
function dv(e, t) {
    return String(e).padStart(t, "0");
}
function dj(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${dv(l.getHours(), 2)}:${dv(l.getMinutes(), 2)}:${dv(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${dv(l.getMilliseconds(), 3)}` : r;
}
var db = n(667931);
let dy = {
        op: "Operation",
        model: "Model",
        tool: "Tool",
        setup: "Setup",
        worktree: "Git worktree",
        sandbox: "Sandbox",
        build: "Build",
        platform: "Platform",
        other: "Other",
    },
    dk = { running: "Running", ok: "Done", error: "Failed" };
function dw(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function dN(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function dC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function dA(e) {
    return dN(e.count > 1 ? e.totalMs : e.end - e.start);
}
let dS = ["Arguments", "Result", "Usage", "Details"];
function dE(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function dI(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function dM(e) {
    let t = (0, db.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, db.lp)(e) ? "interrupted" : "still running";
}
function d_(e) {
    return [dj(new Date(e.started_at).toISOString()) ?? "", dC(e.spans.length), (0, db.Sj)((0, db.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function dP(e) {
    let t = (0, db.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, db.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += dR(r, "in")),
                (l.output += dR(r, "out")),
                (l.cacheRead += dR(r, "cache_read")),
                (l.cacheWrite += dR(r, "cache_write")),
                (l.costUsd += dR(r, "cost_usd"))));
    }
    let r = db.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function dR(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var dT = n(738188),
    dL = n(430993),
    d$ = n(364840),
    dD = n(224640),
    dz = n(20742);
let dO = { collapsed: new Set(), revealed: new Set() };
var dF = n(872892);
let dq = {
    op: dF.Q,
    model: dF.i3,
    tool: dF.dH,
    setup: dF.kc,
    worktree: dF.Qx,
    sandbox: dF.QH,
    build: dF.F1,
    platform: dF.Op,
    other: dF.fv,
};
function dU(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      dC(t.calls, "model call"),
                      `${dw(t.input)} in`,
                      `${dw(t.output)} out`,
                      `${dw(t.cacheRead)} cache read`,
                      `${dw(t.cacheWrite)} cache write`,
                      dI(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: dF.M1,
        children: [
            (0, a.jsx)("div", {
                className: dF.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${dF.DJ} ${dq[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: dF.o1,
                children: db.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${dN(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: dF.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${dF.nf} ${dq[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: dy[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(v.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: l,
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            null == n
                ? null
                : (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function dG(e) {
    return `conjure-perf-trace-${e}`;
}
function dB(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: dF.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${dF.p0} ${s + o > 85 ? dF.EU : dF.jh}`,
                children: i,
            }),
        ],
    });
}
function dK(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? e3._ : ta.a,
        m = i.useCallback(
            (e) => {
                (e.shiftKey && u(t.key), s(t.key));
            },
            [t.key, u, s],
        ),
        f = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? u(t.key) : o(t.key));
            },
            [t.key, u, o],
        );
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: dG(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${dF.$y} ${r ? dF.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: dF.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(C.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: dF.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: dF.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: dF.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${dF.nf} ${dq[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: dF.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: dF.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: dF.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(dT.WarningIcon, { size: "xs", color: "currentColor", className: dF.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dB, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${dF.M0} ${dF.Nh}`
                    : t.running
                      ? `${dF.M0} ${dF.rF}`
                      : `${dF.M0} ${dq[t.category]}`,
                duration: dA(t),
            }),
        ],
    });
}
function dH(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: dG(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${dF.$y} ${l ? dF.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: dF.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: dF.ai,
                        children: (0, a.jsx)(e3._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: dF.U9 }),
                    (0, a.jsx)("span", { className: `${dF.nf} ${dF.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: dF.MQ,
                        children: dC(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dB, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${dF.M0} ${dF.ab} ${dF.dL}`,
                duration: dN(t.totalMs),
            }),
        ],
    });
}
function dW(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: dF._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: dF.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${dF.nf} ${dq[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [dE("Start", `+${dN(e.start)}`), dE("Duration", dA(e))];
                      e.count > 1
                          ? t.push(
                                dE("Calls", String(e.count)),
                                dE("Longest call", dN(e.maxMs)),
                                dE("Spread over", dN(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(dE("Self time", dN(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(dE("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(dE("Notes", l.join(", "))),
                          null != e.span.error && t.push(dE("Error", e.span.error)));
                      let r = new Map();
                      for (let [t, n] of Object.entries({
                          ...e.span.attrs,
                          ...(1 === e.count ? e.span.details : null),
                      })) {
                          var a, i;
                          let l =
                                  ((a = e),
                                  "args" === (i = t) || i.startsWith("arg ")
                                      ? "Arguments"
                                      : "result" === i || "result_chars" === i
                                        ? "Result"
                                        : "model" === a.service
                                          ? "Usage"
                                          : "Details"),
                              s = "cost_usd" === t ? dI(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), dE(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...dS.flatMap((e) => {
                              let t = r.get(e);
                              return null == t ? [] : [{ title: e, rows: t }];
                          }),
                      ];
                  })(t).map((e) => {
                      let { title: t, rows: n } = e;
                      return (0, a.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  null == t
                                      ? null
                                      : (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: dF.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(v.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: dF.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(v.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            tabularNumbers: !0,
                                                            selectable: !0,
                                                            children: n,
                                                        }),
                                              ],
                                          },
                                          t,
                                      );
                                  }),
                              ],
                          },
                          t ?? "timing",
                      );
                  }),
              ],
          });
}
function dV(e) {
    let { trace: t } = e,
        n = i.useMemo(() => dP(t), [t]);
    return (0, a.jsx)(dU, { stats: n });
}
function dX(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, db.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? dO : (0, db.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, db.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, db.x7)(t)), l((n) => (0, db._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, db.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, db.IE)(t, e);
                        null != n && l((e) => (0, db.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, db.IE)(t, e);
                        null != n && l((e) => (0, db.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, db.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, db.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, db.hB)(t));
                }, [t]),
                p = o.find((e) => e.key === r);
            return {
                rows: o,
                collapsed: n.collapsed,
                selectedKey: r,
                selected: p?.kind === "node" ? p.node : null,
                toggle: u,
                reveal: c,
                expandSubtree: d,
                select: a,
                expandAll: m,
                collapseAll: f,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: m } = n,
        f = (0, db.dj)(t),
        h = i.useMemo(() => (0, db.nF)(f), [f]),
        p = h.length > 1 ? ((h[1] - h[0]) / f) * 100 : 100,
        g = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === o),
                    a = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == a) return;
                else if ("smaller" === a.kind && ("ArrowRight" === e.key || "Enter" === e.key)) d(a.parentKey);
                else if ("node" === a.kind && "ArrowRight" === e.key && e.shiftKey) m(a.key);
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) c(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    c(a.key);
                }
                (e.preventDefault(),
                    null != t && (u(t.key), document.getElementById(dG(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(dL.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: dF.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: dM(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: d_(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${dC(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dV, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: dF.KE,
                        children: [
                            (0, a.jsx)(Z.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(Z.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(Z.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == o ? void 0 : dG(o),
                        className: dF.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: g,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dF.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: dF.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: dF.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${dF.io} ${(e / f) * 100 > 85 ? dF.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : dN(e),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            l.map((e) =>
                                "node" === e.kind
                                    ? (0, a.jsx)(
                                          dK,
                                          {
                                              node: e.node,
                                              extent: f,
                                              collapsed: r.has(e.key),
                                              selected: e.key === o,
                                              onSelect: u,
                                              onToggle: c,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(dH, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(d$.j, { children: (0, a.jsx)(dW, { node: s }) }),
        ],
    });
}
function dY(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([ct.A], () => ct.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(dD.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(dz.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(dL.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dX, { trace: i }),
        ],
    });
}
let dZ = { running: dF.Vf, ok: dF.mo, error: dF.Sr };
function dJ(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${dF.Om} ${dZ[t]}`, role: "img", "aria-label": dk[t] });
}
function dQ(e, t) {
    (0, nL.openModal)((n) => (0, a.jsx)(dY, { ...n, projectId: e, traceId: t }));
}
function d0(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => dQ(t, n.id), [t, n.id]);
    return (0, a.jsxs)(C.D, {
        className: dF.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: dF.sU,
                children: [
                    (0, a.jsx)(dJ, { status: (0, db.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: dF._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: dM(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: d_(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function d1(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            nC(
                new Blob(
                    [
                        JSON.stringify({
                            kind: "conjure.timing_traces",
                            version: 1,
                            project_id: t,
                            exported_at: new Date().toISOString(),
                            traces: n,
                        }),
                    ],
                    { type: "application/json" },
                ),
                `conjure-traces-${t}.json`,
            ).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(ev.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ev.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(ej.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(eb.rX, {
                    children: (0, a.jsx)(eb.Dr, {
                        id: "export",
                        label: "Export as JSON",
                        disabled: 0 === n.length,
                        action: r,
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsx)(lf.K, {
                ...e,
                buttonRef: l,
                icon: lh.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function d2(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([ct.A], () => ct.A.getTimingTraces(t), [t]),
        [l, r] = i.useState(""),
        s = i.useMemo(() => {
            let e;
            return "" === (e = l.trim().toLowerCase())
                ? n
                : n.filter((t) =>
                      (function (e) {
                          let t = [e.name];
                          for (let n of e.spans)
                              for (let e of (t.push(n.name, n.error ?? ""),
                              [...Object.values(n.attrs ?? {}), ...Object.values(n.details ?? {})]))
                                  t.push(String(e));
                          return t.join(" ").toLowerCase();
                      })(t).includes(e),
                  );
        }, [n, l]),
        u = i.useMemo(() => [...s].reverse(), [s]),
        c = i.useMemo(
            () =>
                (function (e) {
                    let t = e.map(dP);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: db.BF.map((e) => ({
                            category: e,
                            ms: n((t) => t.categories.find((t) => t.category === e)?.ms ?? 0),
                        })),
                        busyMs: n((e) => e.busyMs),
                        model: {
                            calls: n((e) => e.model.calls),
                            input: n((e) => e.model.input),
                            output: n((e) => e.model.output),
                            cacheRead: n((e) => e.model.cacheRead),
                            cacheWrite: n((e) => e.model.cacheWrite),
                            costUsd: n((e) => e.model.costUsd),
                        },
                    };
                })(s),
            [s],
        );
    return 0 === n.length
        ? (0, a.jsxs)("div", {
              className: dF.Ie,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: dF.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: dF.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: dF.fH,
                              children: (0, a.jsx)(dx.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(d1, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(rq.Ch, {
                      className: dF.XG,
                      children: [
                          (0, a.jsx)(dU, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: dF.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(d0, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function d3(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function d5(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function d4(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function d6(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function d7(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function d8(e) {
    return E.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let d9 = ["all", "preview", "stable", "web"];
function me(e) {
    switch (e.reason) {
        case "local":
            return E.intl.string(S.default.mUeKML);
        case "unconfigured":
            return E.intl.string(S.default.bGefb5);
        case "unauthorized":
            return E.intl.string(S.default.KLx6Bb);
        default:
            return null != e.detail
                ? E.intl.formatToPlainString(S.default.t09Q6q, { detail: e.detail })
                : E.intl.string(S.default["t+tG59"]);
    }
}
function mt(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: d3(e.memory_p50_bytes ?? 0),
              p999: d3(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let mn = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var ml = n(911608),
    mr = n(177427);
function ma(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: mr.KE,
        children: [
            (0, a.jsx)("div", {
                className: mr.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(eI.y, { type: eI.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: E.intl.string(S.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: E.intl.formatToPlainString(S.default.INVO50, { time: d6(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(Z.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function mi(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: mr.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: mr.Gf, children: t }),
            n,
        ],
    });
}
function ms(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: mr.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mr.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: mr.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: mr.kS,
                        children: [
                            s,
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function mo(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: mr.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mr.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(ml.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? mr.dh : void 0,
            }),
        ],
    });
}
function mu(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(ms, {
            label: E.intl.string(S.default.SXP7pD),
            value: E.intl.string(S.default.E5hKVi),
            hint: me(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(ms, {
            label: E.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(S.default.AGvoMJ),
        });
    let l = mt(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ms, { label: E.intl.string(S.default["H/X+FI"]), value: d5(n.cpu_ms) }),
            null != l && (0, a.jsx)(ms, { label: E.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function mc(e) {
    let { analytics: t } = e,
        n = E.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(mi, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: me(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? mn[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(mi, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          ms,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(S.default["w/2voO"], { cpu: d5(t.cpu_ms) }),
                              hint: mt(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var md = n(678708),
    mm = n(414499),
    mf = n(714800),
    mh = n(81466),
    mp = n(424383),
    mg = n(664121),
    mx = n(816943),
    mv = n(268791),
    mj = n(514042),
    mb = n(872351),
    my = n(708988),
    mk = n(150934),
    mw = n(417270);
let mN = "Restart Agent",
    mC = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function mA(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function mS(e, t) {
    return { label: e, value: null != t && "" !== t ? d6(t) : "Unknown", icon: "calendar" };
}
function mE(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function mI(e, t, n, l) {
    let [r, a] = mC[n.status];
    return { label: e, value: `${mE(n.bytes)} of ${mE(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function mM(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = d6(e.at);
    return e.ok
        ? { label: "Last Save", value: `OK (${e.status ?? "saved"})`, hint: t, icon: "save", state: "ok" }
        : {
              label: "Last Save",
              value: "Failed",
              hint: null != e.error ? `${t} \xb7 ${e.error}` : t,
              icon: "save",
              state: "error",
          };
}
let m_ = { main: "Main vs Remote", wip: "WIP vs Remote" };
function mP(e) {
    let t = `container ${mA(e.local)} \xb7 remote ${mA(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: m_[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${d4(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${d4(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${d4(n)} Ahead, ${d4(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let mR = ["main", "wip"];
var mT = n(400154);
let mL = {
        checkout: md.FolderIcon,
        edit: ah.PencilIcon,
        remote: mm.h,
        commits: mf.e,
        calendar: mh.CalendarIcon,
        save: mp.L,
        objects: mg.R,
        download: mx.$,
        size: mv.$,
        file: mj.FileIcon,
    },
    m$ = {
        ok: [tf.y, w.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [dT.WarningIcon, w.A.colors.ICON_FEEDBACK_WARNING],
        error: [eM.a, w.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [mb.z, w.A.colors.ICON_MUTED],
        behind: [my.M, w.A.colors.ICON_MUTED],
    };
function mD(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([ct.A], () => ct.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, dg.DK)(t), [t]),
        },
        l = (function (e) {
            let { pending: t, error: n, info: l, observedAt: r } = e;
            if (t) return { line: "Reading the repository", critical: !1 };
            if (null != n) return { line: n, critical: !0 };
            if (null == r) return { line: "", critical: !1 };
            let a = [];
            if (null != l) {
                l.running
                    ? null != l.localError
                        ? a.push([`Workspace unreadable: ${l.localError}`, !0])
                        : null != l.localWarning && a.push(["Read stopped early; some rows were not read", !0])
                    : a.push(["Workspace not running", !1]);
                let { status: e, error: t } = l.remote;
                ("missing" === e && a.push(["Remote repository missing", !0]),
                    "error" === e && a.push([`Remote read failed: ${t ?? "unknown error"}`, !0]),
                    "disabled" === e && a.push(["Source repositories are off", !1]));
            }
            return {
                line: [
                    `Updated ${d6(r)}`,
                    ...a.map((e) => {
                        let [t] = e;
                        return t;
                    }),
                ].join(" \xb7 "),
                critical: a.some((e) => {
                    let [, t] = e;
                    return t;
                }),
            };
        })(n);
    return (0, a.jsxs)(mi, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: mT.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        role: "status",
                        color: l.critical ? "text-feedback-critical" : "text-muted",
                        children: l.line,
                    }),
            }),
            null != n.info &&
                (function (e) {
                    var t;
                    let n;
                    if (!e.running || null != e.localError) return [mM(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            mM(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : d4(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = mR.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(mP))
                        : l.push(
                              { label: "Main", value: mA(e.heads.main), icon: "remote" },
                              { label: "WIP", value: mA(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? d4(e.commits) : "Unknown", icon: "commits" },
                            mS("Oldest Commit", e.oldest),
                            mS("Newest Commit", e.newest),
                            mM(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${d4(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${d4(t.loose)} loose (${d3(t.looseBytes)}) \xb7 ${d4(t.packed)} packed in ${n} (${d3(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${d4(t.garbage)} garbage files` : void 0,
                                    icon: "objects",
                                }),
                            ));
                    let a = (function (e) {
                        if (null == e.partialClone) return null;
                        let t = { label: "Partial Clone", icon: "download" };
                        return e.partialClone
                            ? null == e.missingObjects
                                ? { ...t, value: "Yes", hint: "Counting objects not downloaded didn't finish in time." }
                                : {
                                      ...t,
                                      value: `Yes \xb7 ${d4(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                mI(
                                    "Repository Size",
                                    "size",
                                    e.localBytes,
                                    "Local copy: every commit, but only the file versions this container has read.",
                                ),
                            ),
                        null === e.largestFile
                            ? l.push({
                                  label: "Largest File",
                                  value: "Unknown",
                                  hint: "The scan for it didn't finish in time.",
                                  icon: "file",
                              })
                            : null != e.largestFile &&
                              l.push(
                                  mI("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = mL[r],
                        [o, u] = null != i ? m$[i] : [null, void 0];
                    return (0, a.jsx)(
                        ms,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: w.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function mz(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([ct.A], () => ct.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, dg.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = ct.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, dg.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                eP.h.dispatch({
                                    type: "CONJURE_RESTART_AGENT_RESULT",
                                    projectId: e,
                                    outcome: "timed_out",
                                    reason: "No new agent instance answered within 60 s",
                                    observedAt: new Date().toISOString(),
                                }),
                            Math.max(5e3, r + 6e4 - Date.now()),
                        );
                    return () => {
                        (clearInterval(n), clearTimeout(l));
                    };
                }, [e, r]));
            let u = i.useCallback(() => (0, dg.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: mN,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, ny.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: mT.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: mT.nM,
                children: [
                    (0, a.jsx)(mk.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(Z.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: mw.RetryIcon,
                        text: mN,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                role: "status",
                color: "failed" === n.phase ? "text-feedback-critical" : "text-muted",
                children: (function (e) {
                    switch (e.phase) {
                        case "idle":
                            return "Starts a new agent instance; the container keeps running.";
                        case "pending":
                            return "Asking the worker to restart.";
                        case "restarting":
                            return "Restarting; waiting for a new instance to answer.";
                        case "restarted":
                            return `Restarted \xb7 new instance since ${d6(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${d6(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function mO(e, t) {
    return (0, a.jsx)(ms, {
        label: e,
        value: E.intl.formatToPlainString(S.default.yHJxuP, { count: d4((0, dt.aM)(t)) }),
        hint: `${d4(t.input_tokens)} in \xb7 ${d4(t.output_tokens)} out \xb7 ${d4(t.cache_read_input_tokens)} cache read`,
    });
}
function mF(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([ct.A], () => ct.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([ct.A], () => ct.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([ct.A], () => ct.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([ct.A], () => ct.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, dg.Lj)(t), [t]),
        f = i.useCallback(() => (0, dg.Lj)(t, !0), [t]),
        h = (0, o.bG)([ct.A], () => ct.A.getSandboxRestartState(t), [t]),
        p = (0, o.bG)([nE.A], () => nE.A.isThinking(t), [t]),
        g = i.useCallback(() => (0, dg.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = u?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: mT.Mf,
        children: [
            (0, a.jsx)(ma, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(mi, {
                title: E.intl.string(S.default.JghNal),
                children:
                    null == x
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(ms, {
                                      label: E.intl.string(S.default["9nqym2"]),
                                      value: d4((0, dt.a7)(x.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default.NCdUIh, { count: d4(x.turns) }),
                                  }),
                                  mO(E.intl.string(S.default.xtxP0e), x.orchestrator),
                                  mO(E.intl.string(S.default["9Sj3SX"]), x.codegen),
                                  mO(E.intl.string(S.default.ANCEo3), (0, dt.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(ms, {
                                          label: E.intl.string(S.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${d4(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(mi, {
                title: E.intl.string(S.default.dZHPE5),
                children:
                    null == s
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  mO(E.intl.string(S.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(ms, {
                                      label: E.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, dt.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(mi, {
                title: E.intl.string(S.default.NbRk9a),
                children: [
                    null != u && null != y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(mo, {
                                      label: E.intl.string(S.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: d4,
                                  }),
                                  (0, a.jsx)(ms, {
                                      label: E.intl.string(S.default.mRbSns),
                                      value: `${d4(u.tokensBefore)} \u{2192} ${d4(u.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: d4(u.retainedMessages),
                                          time: d6(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? E.intl.formatToPlainString(S.default.GMLCNv, { ceiling: d4(y) })
                                      : E.intl.string(S.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(ms, {
                            label: E.intl.string(S.default["4BX5KK"]),
                            value: `${d4(c.projected)} / ${d4(c.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default["6ngCax"], { time: d6(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: mT.Lj,
                        children: [
                            (0, a.jsx)(Z.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: m,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof d && "compacted" !== d.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return E.intl.string(S.default.wox6Ev);
                                    if ("pending" === e) return E.intl.string(S.default.OcPHQ1);
                                    let t = d6(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return E.intl.formatToPlainString(S.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? S.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? S.default.YZb4hK
                                              : S.default.ZoUSVK;
                                    return E.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(d),
                            }),
                            "object" == typeof d &&
                                !0 === d.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(Z.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: E.intl.string(S.default.ZxG2AI),
                                            onClick: f,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: E.intl.string(S.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: mT.Lj,
                        children: [
                            (0, a.jsx)(Z.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["5qCjBu"]),
                                loading: "pending" === h,
                                disabled: "pending" === h || p,
                                onClick: g,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof h && "restarted" !== h.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return E.intl.string(S.default.mlok8D);
                                    if ("pending" === e) return E.intl.string(S.default["1ugSyK"]);
                                    let t = d6(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(mz, { projectId: t }),
                ],
            }),
            (0, a.jsx)(mD, { projectId: t }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(mi, {
                    title: E.intl.string(S.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(ms, {
                                        label: E.intl.string(S.default.CLXHAs),
                                        value: d6(b.instance_since),
                                        hint: E.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(ms, { label: E.intl.string(S.default["8V8e1Z"]), value: d4(b.sockets) }),
                                    (0, a.jsx)(ms, {
                                        label: E.intl.string(S.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? E.intl.string(S.default.Wv025I)
                                            : E.intl.string(S.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(ms, {
                                            label: E.intl.string(S.default["3oUYnv"]),
                                            value: d4(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(mu, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(mi, {
                    title: E.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(ms, {
                            label: E.intl.string(S.default.IlDBN3),
                            value: d4(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(ms, {
                            label: E.intl.string(S.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, { count: d4(j.context_window_tokens) }),
                        }),
                        (0, a.jsx)(ms, {
                            label: E.intl.string(S.default.cIhN2W),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, {
                                count: d4(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(ms, {
                            label: E.intl.string(S.default["+fOn/q"]),
                            value: d4(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(ms, { label: E.intl.string(S.default.kIHga0), value: d4(j.max_build_attempts) }),
                        (0, a.jsx)(ms, { label: E.intl.string(S.default.Iw03yW), value: d4(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var mq = n(237528),
    mU = n(629584),
    mG = n(531893);
function mB(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: mG.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.h1SE6R),
              }),
          });
}
function mK(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: mG.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: E.intl.string(S.default.h1SE6R),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: mG.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function mH(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: mG.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var mW = n(109079);
let mV = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = i.useState(!1),
        o = i.useId(),
        u = i.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let n = e.indexOf("{"),
                        l = e.indexOf("["),
                        r = -1 === n ? l : -1 === l ? n : Math.min(n, l);
                    if (-1 === r) return null;
                    let a = e.slice(r).trim();
                    if (a.length < 2) return null;
                    try {
                        t = JSON.parse(a);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let i = e.slice(0, r).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: i, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: i, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(n.message),
            [n.message],
        ),
        c = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: mW.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: mW.Mt,
                selectable: !0,
                children: dj(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: mW.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: mW.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: mW.Cq, children: (0, a.jsx)(mq.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: mW.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(mq.v, { text: E.intl.string(S.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(C.D, {
                                      className: mW.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": E.intl.string(S.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(ta.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(e3._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  E.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? S.default.kUhyUv : S.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(v.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: mW.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: c,
                              selectable: !0,
                              children: n.message,
                          }),
                ],
            }),
        ],
    });
});
function mX(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([dp.A], () => dp.A.getLogs(t), [t]),
        l = (0, o.bG)([dp.A], () => dp.A.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [u, c] = i.useState(""),
        d = i.useMemo(() => {
            let e;
            return (
                (e = u.trim().toLowerCase()),
                n.filter((t) => {
                    var n;
                    let { log: l } = t;
                    return (
                        "string" == typeof l.message &&
                        "string" == typeof l.level &&
                        "string" == typeof l.ts &&
                        ("all" === r ||
                            ("preview" === (n = l.source) || "stable" === n || "web" === n ? n : "other") === r) &&
                        ("" === e ||
                            l.message.toLowerCase().includes(e) ||
                            l.level.includes(e) ||
                            (l.source?.toLowerCase().includes(e) ?? !1))
                    );
                })
            );
        }, [n, r, u]),
        m = i.useRef(null),
        f = i.useRef(!0);
    i.useEffect(() => {
        f.current && m.current?.scrollToBottom();
    }, [d]);
    let h = i.useCallback(() => {
            let e = m.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        p = i.useMemo(
            () =>
                d9.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return d8(e);
                            case "web":
                                return E.intl.string(S.default.IVzfVV);
                            default:
                                return E.intl.string(S.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: mW.$F,
        children: [
            (0, a.jsxs)("div", {
                className: mW.y4,
                children: [
                    (0, a.jsx)(mU.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: mW.KT,
                        children: (0, a.jsx)(dx.I, {
                            query: u,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: E.intl.string(S.default["m2+37Y"]),
                            "aria-label": E.intl.string(S.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(mB, { state: l }),
            (0, a.jsxs)(rq.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: mW.sx,
                children: [
                    (0, a.jsx)(mH, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(mK, {
                              state: l,
                              emptyTitle: E.intl.string(S.default.S7qlPG),
                              emptyBody: E.intl.string(S.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: E.intl.string(S.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(mV, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function mY(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(mi, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: E.intl.string(S.default.umcjif),
                      }),
        })
    );
}
function mZ(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(ms, {
                      label: E.intl.formatToPlainString(S.default["01ZMS4"], { env: d8(n) }),
                      value: ((t = l.connected), E.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(ms, {
                      label: E.intl.string(S.default["z1dh+F"]),
                      value: d4(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${d6(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(ms, { label: E.intl.string(S.default.Iz5GnJ), value: d4(l.guild_count) }),
                  (0, a.jsx)(ms, {
                      label: E.intl.string(S.default["7UqtNv"]),
                      value: d4(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: d6(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(ms, {
                          label: E.intl.string(S.default["x3+JXJ"]),
                          value: d4(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(ms, { label: d8(n), value: E.intl.string(S.default.lTHQss) });
}
function mJ(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(ms, {
        label: d8(t),
        value: E.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: d4(n.requests),
            failures: d4(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: d6(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["7KlGT6"], { time: d6(n.since) }),
    });
}
function mQ(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ms, {
                label: E.intl.formatToPlainString(S.default["92gVTm"], { env: d8(t) }),
                value: d4(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    ms,
                    {
                        label: E.intl.formatToPlainString(S.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? E.intl.formatToPlainString(S.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? E.intl.formatToPlainString(S.default.wxAWNv, { time: d6(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function m0(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(ms, {
        label: d8(t),
        value: E.intl.formatToPlainString(S.default.suAOj9, { calls: d4(n.calls), errors: d4(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function m1(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(mi, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(mi, {
        title: t,
        children: [
            (0, a.jsx)(ms, {
                label: E.intl.string(S.default.xtD4Zp),
                value: d4(n.requests),
                hint: E.intl.formatToPlainString(S.default["7KlGT6"], { time: d6(n.since) }),
            }),
            (0, a.jsx)(ms, { label: E.intl.string(S.default.gfRhR3), value: d4(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(mo, {
                              label: E.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: d5,
                          }),
                          (0, a.jsx)(ms, {
                              label: E.intl.string(S.default.mSKImM),
                              value: d5(r),
                              hint: E.intl.formatToPlainString(S.default.JqMU05, {
                                  total: d5(n.cpu_ms_total),
                                  wall: d5(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(ms, {
                      label: E.intl.string(S.default.LEJ5r3),
                      value: E.intl.string(S.default["2Ekb2b"]),
                      hint: E.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(ms, { label: E.intl.string(S.default.xvmL1D), value: d5(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(ms, { label: E.intl.string(S.default["4sQYwH"]), value: d4(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(ms, {
                label: E.intl.string(S.default.bQenOy),
                value: d4(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(ms, { label: E.intl.string(S.default.xgpn4Y), value: d7(n.build) }),
        ],
    });
}
function m2(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(mi, {
        title: E.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(ms, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(ms, {
                                  label: E.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: d3(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: d4(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(mo, {
                                      label: E.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: d3,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function m3(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: mT.Mf,
        children: [
            (0, a.jsx)(ma, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(m1, {
                            title: E.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(m1, {
                            title: E.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(m2, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(mY, {
                                title: E.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mZ, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(mY, {
                                title: E.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mJ, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(mY, {
                                title: E.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mQ, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(mY, {
                                title: E.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(m0, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(mc, { analytics: t.analytics }),
                        (0, a.jsxs)(mi, {
                            title: E.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(ms, {
                                    label: E.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? d7(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(ms, {
                                    label: E.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? d7(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var m5 = n(592465);
function m4(e) {
    let { projectId: t, onClose: n } = e,
        l = nR(),
        [r, s] = i.useState(() => (l && nM?.projectId === t ? "trace" : "logs")),
        u = (0, o.bG)([ct.A], () => ct.A.getStatus(t), [t]),
        c = (0, o.bG)([ct.A], () => ct.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, dg.R7)(t), (0, dg.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, _.subscribeDebugBacklog)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == nM || nM.projectId !== e) return null;
            let { traceId: t } = nM;
            return ((nM = null), t);
        })(t);
        return null != e && (dQ(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        n_(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, lx.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: ct.A.getStatus(t),
                        last_turn_usage: ct.A.getLastTurnUsage(t),
                        last_compaction: ct.A.getLastCompaction(t),
                        last_compaction_decline: ct.A.getLastCompactionDecline(t),
                        timing_traces: ct.A.getTimingTraces(t),
                        logs: dp.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, nk.P0)({ text: E.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: m5.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(l2.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(l2.Ay.Icon, {
                            icon: cy.CopyIcon,
                            tooltip: E.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(l2.Ay.Icon, { icon: ed.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(l2.Ay.ChannelIcon, { icon: tL.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(l2.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: m5.rf,
                children: [
                    (0, a.jsxs)(dh.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(S.default.RvvWIh),
                        className: m5.vR,
                        children: [
                            (0, a.jsx)(dh.V.Item, { id: "logs", children: E.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(dh.V.Item, { id: "worker", children: E.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(dh.V.Item, { id: "agent", children: E.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(dh.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(mX, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(m3, { status: u, fetchState: c, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(d2, { projectId: t })
                            : (0, a.jsx)(mF, { projectId: t, status: u, fetchState: c, onRefresh: d }),
                ],
            }),
        ],
    });
}
var m6 = n(365912),
    m7 = n(873715);
function m8(e) {
    if (null == e || "string" != typeof e.ref || "string" != typeof e.tag) return null;
    let t = e.rect;
    if (
        null == t ||
        "number" != typeof t.x ||
        "number" != typeof t.y ||
        "number" != typeof t.width ||
        "number" != typeof t.height
    )
        return null;
    let n = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (n.value = e.value),
        "string" == typeof e.path && "" !== e.path && (n.path = e.path),
        "string" == typeof e.marker && (n.marker = e.marker),
        n
    );
}
n(884868);
let m9 = Object.freeze({ x: -1, y: -1 });
function fe(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = m8(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var ft = n(192888);
function fn(e, t) {
    return (0, ft.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fe, () => ({ status: "failed" }));
}
var fl = n(108308);
let fr = { x: 25, y: 21 };
function fa(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fi(e, t, n, l) {
    let r = fa(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fs(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fo(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let n = t.viewport?.width,
        l = t.viewport?.height;
    return "number" != typeof n || "number" != typeof l || n < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: n, height: l },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function fu(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = t8(u),
        m = (0, nT.Zv)(u),
        f = (0, nL.useHasAnyModalOpen)(),
        h = (0, o.bG)([ax.default], () => ax.default.getCurrentUser()),
        p = h?.id ?? null,
        [g, x] = i.useState(null),
        [j, b] = i.useState(!1),
        [y, k] = i.useState(!1),
        [w, N] = i.useState(null),
        [C, A] = i.useState(!1),
        I = i.useRef(null),
        M = i.useRef(null),
        P = i.useRef(null),
        [R, T] = i.useState(null),
        [L, $] = i.useState(!1),
        [D, z] = i.useState(null),
        [O, F] = i.useState(null),
        q = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, K] = i.useState(null),
        H = c && !m && !f;
    null == D || (H && D.projectId === u) || z(null);
    let W = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != W) return () => eH(W, "design");
    }, [W]);
    let V = re(r, H);
    i.useEffect(() => {
        if (!H || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void k(!0);
        (b(!0), k(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, m7.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? fo(t.response) : null;
                    null == n ? k(!0) : (x(n), t4(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (b(!1), k(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [H, r, u]);
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!H || null == V || null == u) return;
        if (null == g) {
            X.current = V;
            return;
        }
        if (l9(X.current, V)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            X.current = V;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, m7.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ee.current) return;
                        let l = fo(e.response);
                        null != l && (x(l), t4(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = m8(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = t0(u)).active &&
                                0 !== r.size &&
                                t1(u, {
                                    ...n,
                                    annotations: n.annotations.map((e) => {
                                        let t = r.get(e.id);
                                        return null == t ? e : { ...e, target: t };
                                    }),
                                }));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [H, V, g, d, u, r]),
        i.useEffect(() => {
            if (!H)
                return () => {
                    (N(null), z(null), K(null), x(null));
                };
        }, [H]));
    let Y = i.useRef(null),
        J = i.useRef(null),
        Q = i.useRef(!1),
        ee = i.useRef(!1);
    i.useEffect(() => {
        ((ee.current = H), H || ((Y.current = null), (J.current = null), (P.current = null), A(!1)));
    }, [H]);
    let et = i.useCallback(
            function e() {
                if (Q.current) return;
                let t = Y.current;
                if (null == t) return;
                Y.current = null;
                let n = r();
                null != n &&
                    ((Q.current = !0),
                    fn(n, t).then((t) => {
                        if (((Q.current = !1), ee.current)) {
                            if ("picked" !== t.status || fp(t.target, es.current.rect, es.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = tK(t.target);
                                (T((t) => (fh(t, e) ? t : e)),
                                    N((e) => {
                                        var n;
                                        return ((n = t.target),
                                        null == e || null == n
                                            ? e === n
                                            : e.ref === n.ref &&
                                              e.rect.x === n.rect.x &&
                                              e.rect.y === n.rect.y &&
                                              e.rect.width === n.rect.width &&
                                              e.rect.height === n.rect.height)
                                            ? e
                                            : t.target;
                                    }));
                            }
                            e();
                        }
                    }));
            },
            [r],
        ),
        en = i.useCallback(() => {
            if (null == D) return;
            let e = !q.current;
            (F({ at: D.at, label: D.label, draft: D.draft, instant: e }), G(e), z(null));
        }, [D]);
    (i.useEffect(() => {
        if (!U) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [U]),
        i.useEffect(() => {
            if (null == O) return;
            let e = setTimeout(() => F(null), fm);
            return () => clearTimeout(e);
        }, [O]));
    let el = null == g || null == V || g.viewport.width < 1 ? 1 : V.width / g.viewport.width,
        er = null != g || y,
        ea = i.useMemo(() => g?.elements ?? [], [g]),
        es = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        es.current = { rect: V, scale: el };
    }, [V, el]);
    let eo = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (eH(u, "design"),
                    K(null),
                    (q.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: n, label: tK(e) }));
            },
            [u],
        ),
        eu = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / el, y: (e.clientY - t.top) / el }), [el]),
        ec = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = I.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = M.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ec);
    let ed = i.useCallback(
            (e) => {
                if (null == V || null != B) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ec(), A(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > ff || Math.abs(e.clientY - D.at.y) > ff) && (q.current = !0);
                    return;
                }
                if (!er) return void N(null);
                let t = eu(e, V);
                if (L) {
                    let e = (function (e, t, n) {
                            let l = null,
                                r = 1 / 0;
                            for (let a of e) {
                                let { x: e, y: i, width: s, height: o } = a.rect;
                                if (s < 1 || o < 1 || t < e || n < i || t > e + s || n > i + o) continue;
                                let u = s * o;
                                u < r && ((l = a), (r = u));
                            }
                            return l;
                        })(ea, t.x, t.y),
                        n = null != e && fp(e, V, el) ? null : e;
                    if (null != n) {
                        let e = tK(n);
                        T((t) => (fh(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = J.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((J.current = n), (Y.current = n), et());
            },
            [V, el, er, eu, L, ea, D, B, ec, et],
        ),
        em = null == B ? null : d.find((e) => e.id === B.id),
        ef = H && (C || D?.target.marker != null || em?.target.marker != null);
    i.useEffect(() => {
        if (ef)
            return () => {
                let e = r();
                null != e && fn(e, m9);
            };
    }, [ef, r]);
    let eh = i.useCallback(() => {
        (A(!1), N(null), (J.current = null), (Y.current = null));
    }, []);
    i.useEffect(() => {
        if (!H || !C || !er || L || null != D || null != B) return;
        let e = P.current,
            { rect: t, scale: n } = es.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((J.current = l), (Y.current = l), et());
    }, [H, C, er, L, D, B, et]);
    let ep = i.useCallback(
            (e) => {
                if (null != D || null != B) {
                    (en(), K(null));
                    return;
                }
                if (null == w || null == V) return;
                let t = eu(e, V);
                eo(
                    w,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? tG
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(w, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [w, V, eu, D, B, eo, en],
        ),
        eg = i.useCallback(() => {
            null != u && (N(null), null != nf(u) ? np(u) : t5(u));
        }, [u]),
        ex = i.useCallback(() => {
            null != u &&
                (null != D
                    ? en()
                    : B?.confirmingRemove === !0
                      ? K({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? K(null)
                        : eg());
        }, [u, D, B, en, eg]),
        ev = i.useRef(ex),
        ej = i.useRef(u),
        eb = i.useRef(eg);
    i.useLayoutEffect(() => {
        ((ev.current = ex), (ej.current = u), (eb.current = eg));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (H)
            return (
                l5.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        l5.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ev.current());
        }
        function t(e) {
            let t = e.target;
            !(0, ei.vq)(t) ||
                ey.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, m6.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ej.current || null == nf(ej.current)) && eb.current());
        }
    }, [H, s]);
    let ek = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ex());
                    return;
                }
                if (null != D || null != B || 0 === ea.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == w ? -1 : ea.findIndex((e) => e.ref === w.ref);
                    N(ea[(n + (t ? 1 : -1) + ea.length) % ea.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != w &&
                    (e.preventDefault(),
                    eo(w, tG, { x: (V?.left ?? 0) + w.rect.x * el, y: (V?.top ?? 0) + w.rect.y * el }));
            },
            [u, D, B, ea, w, eo, ex, V, el],
        ),
        ew = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((tB(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, _.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = tK(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${tV}${r}${tX}${tW(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        en(),
                        N(null)));
            },
            [u, D, en],
        ),
        eN = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, eT.vX)(u, e)), [u]),
        eC = i.useCallback(() => {
            if (null != u && null != B && null != p && tB(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = t0(u)).annotations.find((t) => t.id === e)) &&
                        t6(l, p) &&
                        t1(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, p]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != p) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = t0(u)).annotations.find((t) => t.id === e)) &&
                        t6(n, p) &&
                        t1(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, B, p]),
        eS = c
            ? j
                ? E.intl.string(S.default["Eb/YV9"])
                : y
                  ? E.intl.string(S.default.FD30bh)
                  : E.intl.formatToPlainString(S.default.dTSqLF, { count: d.length })
            : "",
        eE = H && null != V,
        eI = C && null == B,
        eM = D?.target ?? em?.target ?? null,
        e_ = D ?? O,
        eP = D ?? (O?.instant === !0 ? null : O),
        eR =
            null != em && null != V
                ? (function (e, t) {
                      let { left: n, top: l } = fs(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fi(em.target, em.anchor, V, el), V)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = em;
            fn(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [em, r]),
        (0, l3.createPortal)(
            (0, a.jsxs)("div", {
                ref: ey,
                className: fl.Li,
                children: [
                    (0, a.jsx)(rZ.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eS,
                    }),
                    eE
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: fl.MT,
                                      style: { left: V.left, top: V.top, width: V.width, height: V.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": E.intl.string(S.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ed,
                                      onMouseLeave: eh,
                                      onClick: ep,
                                      onKeyDown: ek,
                                  }),
                                  null != w && null == w.marker && null == D && null == B
                                      ? (0, a.jsx)(fg, { box: fa(w, V, el) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: fl.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fl.xz,
                                          "data-shown": null != w && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: fl.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fl.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fl.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: fl.Y,
                                      children: eI ? (0, a.jsx)("div", { className: fl.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fl.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fl.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: fl.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fl.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fl.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, a.jsx)("div", { className: fl.D0, style: fa(eM, V, el), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fi(e.target, e.anchor, V, el),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fl.xL,
                                              style: { ...fs(n, V), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(S.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: tH(e.target),
                                              }),
                                              "aria-expanded": B?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == D && K(l);
                                              },
                                              onFocus: () => {
                                                  null == D && K(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), en(), K(l));
                                              },
                                              children: (0, a.jsx)(fc, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == e_ || null == u
                                      ? null
                                      : (0, a.jsx)(l7, {
                                            projectId: u,
                                            at: { x: e_.at.x + 20, y: e_.at.y + 20 },
                                            bounds: V,
                                            kind: e_.label.kind,
                                            value: e_.draft,
                                            canSubmit: null != D && tB(e_.draft),
                                            onChange: (e) => {
                                                null != D && z({ ...D, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: en,
                                            onUploadFile: eN,
                                            closing: null == D,
                                        }),
                                  null != em && null != B && null != eR
                                      ? (0, a.jsxs)(fd, {
                                            point: eR,
                                            frame: V,
                                            authorId: em.authorId,
                                            title: tH(em.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? K({ ...B, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || K(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(au.f, {
                                                          autoFocus: !0,
                                                          label: E.intl.string(S.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: B.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => K({ ...B, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eC());
                                                          },
                                                      })
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: fl.aC,
                                                          children: em.comment,
                                                      }),
                                                t6(em, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: fl.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fl.nv,
                                                                            children: E.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(Z.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(Z.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eA,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(Z.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default.friIzR),
                                                                            onClick: () =>
                                                                                K({
                                                                                    ...B,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        B.editing
                                                                            ? (0, a.jsx)(Z.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !tB(B.draft),
                                                                                  text: E.intl.string(S.default.iicRP9),
                                                                                  onClick: eC,
                                                                              })
                                                                            : (0, a.jsx)(Z.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: E.intl.string(
                                                                                      S.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
                                                                                          ...B,
                                                                                          editing: !0,
                                                                                          draft: em.comment,
                                                                                      }),
                                                                              }),
                                                                    ],
                                                                }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : null,
                              ],
                          })
                        : null,
                ],
            }),
            document.body,
        )
    );
}
function fc(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([ax.default], () => ax.default.getUser(t), [t]);
    return (0, a.jsx)(sg.eu, {
        src: null == n ? null : Q.Ay.getUserAvatarURL(n),
        size: sx._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fd(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(fr);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = j.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: k,
            top: w,
            originX: N,
            originY: C,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - b.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - b.y, l), r)), originX: u.x - s, originY: u.y - o }),
        A = { left: k, top: w, "--custom-conjure-card-origin-x": `${N}px`, "--custom-conjure-card-origin-y": `${C}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: fl.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fl.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fl.ip, children: (0, a.jsx)(fc, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fl.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fl.zI, children: g }),
        ],
    });
}
let fm = 300,
    ff = 2;
function fh(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fp(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fg(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fl.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fx = n(659723),
    fv = n(697744),
    fj = n(130324);
function fb(e) {
    let t = (0, fv.c)(),
        { events: n, getDuration: l } = t;
    i.useEffect(() => {
        let e = null,
            t = 0;
        return (
            (e = requestAnimationFrame(function r() {
                ((e = null), null != l()) ? n.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(r));
            })),
            () => {
                null != e && cancelAnimationFrame(e);
            }
        );
    }, [n, l]);
    let r = (0, rG.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function fy(e) {
    let { className: t } = e,
        { Component: n, events: l } = fb(3e4);
    return (0, a.jsxs)("div", {
        className: h()(t, fj.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: fj.ol,
                children: E.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var fk = n(251363),
    fw = n(944142),
    fN = n(532247),
    fC = n(501628);
function fA(e) {
    let { progress: t } = e,
        { Component: n } = fb(1500),
        l = nP.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: fC.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: fC.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function fS(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([fw.A], () => (s ? fw.A.getLiveReload(t) : null), [s, t]),
        c = (0, ln.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, fN.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, fN.QP)(e, s)));
            let m = (0, o.bG)(
                    [nJ.A],
                    () => {
                        let e = nJ.A.getFrame(n);
                        return (0, n2.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                f = i.useRef(m),
                h = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((f.current = m), m && (h.current = !0));
                }, [m]),
                i.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return a(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, fk.ow)(null, n) && e();
                    }
                    ((h.current = f.current), document.addEventListener("load", t, !0));
                    let l = window.setTimeout(() => {
                            h.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", t, !0), window.clearTimeout(l), window.clearTimeout(i));
                    };
                }, [r, n]),
                r
            );
        })(d, m, c),
        h = m ? null : (0, fN.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(rZ.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: fC.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(fA, { progress: h }),
                  })
                : null,
        ],
    });
}
var fE = n(357858),
    fI = n(343030),
    fM = n(317608),
    f_ = n(35367),
    fP = n(228946);
let fR = { width: 1 / 0, height: 1 / 0 };
function fT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fR;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var fL = n(702083);
function f$(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([ll.A], () => ({
            mobile: ll.A.isBuilderPreviewMobile(),
            landscape: ll.A.isBuilderPreviewLandscape(),
        })),
        r = i.useRef(null),
        [s, u] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = r.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            u((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
    }, []);
    let c = null != s && s.width > 0 ? s : null,
        d = n ? fT(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: h()(fL.dw, { [fL.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: h()(fL.R9, { [fL.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var fD = n(347927);
function fz(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: h()(fD.Bf, l && fD.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: fD.Ux,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var fO = n(957272);
function fF(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, f_.A)({ applicationId: t, surface: n, launch: l });
    if (((0, fP.A)(t, n), s === f_.n.Launched)) {
        let e = (0, a.jsx)(fM.A, { frameId: i.id, level: fI.A.WithinAppContent, className: fO.Z7, overlay: r });
        return (0, lr.Q5)(n) ? (0, a.jsx)(f$, { children: e }) : e;
    }
    return (0, a.jsx)(fq, { state: s });
}
function fq(e) {
    let { state: t } = e;
    switch (t) {
        case f_.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: fO.qs,
                children: (0, a.jsx)(fz, {
                    title: E.intl.string(S.default["9kpdo7"]),
                    body: E.intl.string(S.default.iIA8Nj),
                }),
            });
        case f_.n.NoApplication:
            return (0, a.jsx)(fy, { className: fO.qs });
        case f_.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: fO.qs,
                children: (0, a.jsx)(fz, {
                    title: E.intl.string(S.default["7k4GyN"]),
                    body: E.intl.string(S.default.zdIy3R),
                }),
            });
        case f_.n.Error:
            return (0, a.jsxs)("div", {
                className: fO.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: fO.tj,
                        children: E.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case f_.n.AwaitingLaunch:
        case f_.n.Loading:
            return (0, a.jsx)("div", { className: fO.qs, children: (0, a.jsx)(eI.y, {}) });
    }
}
var fU = n(308528),
    fG = n(334738),
    fB = n(688438),
    fK = n(365971),
    fH = n(703462);
function fW(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: fH.f,
        children: [
            (0, a.jsx)(et.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function fV() {
    return (0, a.jsx)("div", { className: fH.f, children: (0, a.jsx)(eI.y, {}) });
}
function fX(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        c = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, o.bG)([ag.A], () => (null != c ? ag.A.getChannel(c) : null), [c]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && fU.A.preload(q.ME, t);
        }, [t]),
        (n = (0, o.bG)([eN.A], () => eN.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, fK.Xg)();
            return (
                (0, fG.yl)(t, e),
                () => {
                    (0, fG.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, nO.CN)(l).then(
                (t) => {
                    e || u({ previewApplicationId: r, channelId: t });
                },
                () => {
                    e || f(r);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [l, r, d, h]),
    h)
        ? (0, a.jsx)(fW, { message: E.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(fV, {})
          : (0, a.jsx)("div", {
                className: fH.g,
                children: (0, a.jsx)(fB.A, { channel: d, guild: null, chatInputType: o1.oU.SIDEBAR }, d.id),
            });
}
var fY = n(887909),
    fZ = n(570962),
    fJ = n(998475);
function fQ(e) {
    let {
        label: t,
        title: n,
        subtitle: l,
        header: r,
        body: i,
        actions: s,
        nextStep: o,
        appDetails: u,
        hasContentBackground: c,
        noPadding: d,
        obscured: m,
    } = (0, fY.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: fJ.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: fJ.rf,
                children: (0, a.jsx)(fZ.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: fJ.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: fJ.z3,
                                      children: [
                                          (0, a.jsx)(x.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, a.jsx)(v.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: l,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            r,
                            (0, a.jsxs)("div", {
                                className: h()(fJ.Qs, c ? fJ.cw : null, d ? fJ.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: fJ.o1,
                      children: s.map((e, t) => (0, a.jsx)(Z.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var f0 = n(765671),
    f1 = n(269094),
    f2 = n(714917),
    f3 = n(463660),
    f5 = n(582063);
let f4 = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function f6() {
    (0, nk.P0)({ text: E.intl.string(S.default.jj3abP), variant: "critical" });
}
function f7(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = E.intl.string(S.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ev.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(f8, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: f5.m2,
                        children: (0, a.jsx)(N.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(lf.K, {
                                "aria-label": r,
                                icon: t$.SettingsIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                onClick: t,
                            }),
                        }),
                    });
                },
            }),
            (0, a.jsx)("input", {
                ref: l,
                type: "file",
                accept: f4.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (f4.includes(n.type)
                                ? n.size > e_.aI
                                    ? (0, nk.P0)({ text: E.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, f3.M$)(t, n).catch(f6)
                                : (0, nk.P0)({ text: E.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function f8(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([f2.A], () => f2.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(ej.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": E.intl.string(S.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eb.rX, {
                children: [
                    (0, a.jsx)(eb.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: E.intl.string(S.default.uQpDky),
                        icon: aq.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eb.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(S.default.AiAz8J),
                        icon: mw.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, f3.Og)(t).catch(f6));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eb.rX, {
                children: (0, a.jsx)(eb.fP, {
                    id: "conjure-overlay-background-blur",
                    label: E.intl.string(S.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, f3.Y1)(t, !i) || f6();
                    },
                }),
            }),
        ],
    });
}
let f9 = "/assets/7cec34541705c795.webp";
function he(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, f_.A)({ applicationId: t, surface: n2.ZN });
    return (i.useEffect(() => {
        let e = (0, n2.VA)(t, n2.ZN);
        return () => (0, lF.r)(e);
    }, [t]),
    r.state !== f_.n.Launched)
        ? (0, a.jsx)(fq, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(fq, { state: f_.n.Loading })
          : (0, a.jsx)(ht, { lifecycle: r, projectId: n, size: l });
}
function ht(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, f0.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: f5.JH,
        children: [
            (0, a.jsx)(hn, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: f5.dw,
                children: (0, a.jsx)("div", {
                    className: f5.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(f1.A, { frame: t.frame, application: t.application, className: f5.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(f7, { projectId: n }) : null,
        ],
    });
}
function hn(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([f2.A], () => (null != t ? f2.A.getBackground(t) : null)),
        l = n?.imageEtag ?? null,
        [r, s] = i.useState(null),
        [u, c] = i.useState(null),
        [d, m] = i.useState(!1);
    (i.useEffect(() => {
        if (null != n) return;
        let e = setTimeout(() => m(!0), 2e3);
        return () => clearTimeout(e);
    }, [n]),
        i.useEffect(() => {
            if (null == t || null == l) return;
            let e = !1;
            return (
                (0, f3.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(f9);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        p = null == l || (null != f && f === u) ? f9 : f;
    return null != p && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: h()(f5.LO, { [f5.Ty]: n?.blur === !0 }),
              src: p,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  p === f && c(f);
              },
          })
        : null;
}
var hl = n(409478),
    hr = n(652227);
function ha(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            frameLaunchParams: r,
            previewReady: i,
            previewGate: s,
            availability: u,
            activeMode: c,
            widgetApplicationId: d,
            overlayWidgetSize: m = nU,
            projectId: f,
            frameOverlay: h,
            paused: p = !1,
            onResume: g,
        } = e,
        x = (0, o.bG)([a5.A], () => null != f && null != a5.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: hr.qs, children: (0, a.jsx)(eI.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: hr.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(eI.y, {}) : (0, a.jsx)(fQ, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: hr.RG,
                      children: [
                          (0, nB.yf)(u, c)
                              ? p
                                  ? (0, a.jsx)(hi, { projectId: f, onResume: g })
                                  : (0, a.jsx)(fF, { applicationId: t, surface: l, launch: r, frameOverlay: h })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: hr.qs,
                                        children: (0, a.jsx)(fz, {
                                            wide: !0,
                                            title: E.intl.string(S.default["08U+YO"]),
                                            body: E.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(hl.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(he, { applicationId: t, projectId: f, size: m })
                              : null,
                          "bot" === c && null != n && null != f
                              ? (0, a.jsx)(fX, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: hr.qs, children: (0, a.jsx)(eI.y, {}) })
              : (0, a.jsx)(fy, { className: hr.qs });
}
function hi(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, fE.Pu)(t),
        (0, a.jsx)("div", {
            className: hr.qs,
            children: (0, a.jsx)(fz, {
                wide: !0,
                title: E.intl.string(S.default.MMWEH2),
                body: E.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(Z.$, {
                              size: "sm",
                              variant: "primary",
                              icon: ls.PlayIcon,
                              text: E.intl.string(S.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var hs = n(175841),
    ho = n(750506),
    hu = n(867193),
    hc = n(539197),
    hd = n(977020);
function hm(e) {
    let { projectId: t } = e,
        n = (0, hc.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, hc.Ie)(e);
                        n((e) =>
                            null != e &&
                            e.left === t.left &&
                            e.top === t.top &&
                            e.width === t.width &&
                            e.height === t.height
                                ? e
                                : t,
                        );
                    }
                    t();
                    let l = window.setInterval(t, 250);
                    return (
                        window.addEventListener("resize", t),
                        () => {
                            (window.clearInterval(l), window.removeEventListener("resize", t));
                        }
                    );
                }, [e]),
                null == e ? null : t
            );
        })(n?.iframe ?? null);
    if (null == n || null == l) return null;
    let { left: r, top: s, width: o, height: u, scale: c } = l;
    function d(e, t) {
        return { "--custom-conjure-cursor-x": `${e * c}px`, "--custom-conjure-cursor-y": `${t * c}px` };
    }
    return (0, a.jsxs)("div", {
        className: hd.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [hc.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: h()(hd.hN, hd.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: h()(hd.hN, hd.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: h()(hd.UE, { [hd.SP]: n.shown, [hd.Vq]: n.pressed, [hd.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var hf = n(417760);
function hh(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, o.bG)([nE.A], () => null != e && nE.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, _.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, nT.CU)(n),
        c = "controlling" === t,
        d = E.intl.string(c ? (u ? S.default["VJW/5P"] : S.default["+hD2Iz"]) : S.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(Z.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: E.intl.string(S.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: h()(hf.M0, hf.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(c0.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(hs.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: hf.ID, children: d }),
                  c ? (0, a.jsx)(rZ.A, { children: E.intl.string(S.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: hf.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: hf.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: hf.sp,
                      children: [
                          (0, a.jsx)(hs.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(c0.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: hf.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: hf.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: hf.Rb,
                                            children: E.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: hf.lC, children: m }) : null,
              ],
          });
}
function hp(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, nT.Zv)(null != n && n === l ? t : null),
        u = (function (e) {
            let [t, n] = i.useState(e),
                [l, r] = i.useState(!1);
            return (e !== t && (n(e), r(!e)),
            i.useEffect(() => {
                if (!l) return;
                let e = setTimeout(() => r(!1), 2400);
                return () => clearTimeout(e);
            }, [l]),
            e)
                ? "controlling"
                : l
                  ? "handoff"
                  : "idle";
        })(o),
        c = (0, nL.useHasAnyModalOpen)(),
        d = (0, nQ.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, nQ.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = l8(r());
            f((t) => (l9(t, e) ? t : e));
            let t = null == h ? null : l8(h);
            (x((e) => (l9(e, t) ? e : t)), null != h && (0, hu.C)(h.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let n = null == h ? null : new ResizeObserver(e);
        return (
            null != h && n?.observe(h),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    n?.disconnect(),
                    null != h && (0, hu.C)(0));
            }
        );
    }, [v, r, h]);
    let j = "idle" !== u && null != m,
        b = j && "controlling" === u && !c,
        y = null != m && m.width < 420,
        k = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
        w =
            null == m
                ? void 0
                : (function (e, t) {
                      if (null == t) return { left: e.left, top: e.top, width: e.width, height: e.height };
                      let n = Math.min(e.left, t.left),
                          l = Math.min(e.top, t.top);
                      return {
                          left: n,
                          top: l,
                          width: Math.max(e.left + e.width, t.left + t.width) - n,
                          height: Math.max(e.top + e.height, t.top + t.height) - l,
                      };
                  })(m, g),
        N = (function () {
            let [e] = i.useContext(ho.uY),
                [t] = i.useState(() => document.createElement("div"));
            return (
                i.useLayoutEffect(() => {
                    if (null != e) return (e.prepend(t), () => t.remove());
                }, [e, t]),
                null == e ? document.body : t
            );
        })();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            j
                ? (0, a.jsx)("div", {
                      ref: p,
                      className: hf.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: hf.QF,
                          children: (0, a.jsx)(hh, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, l3.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(rZ.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? E.intl.string(S.default.oWcemF)
                                : "handoff" === u
                                  ? E.intl.string(S.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, l3.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: hf.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: hf.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(hm, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var hg = n(399503),
    hx = n(853555),
    hv = n(271982),
    hj = n(187645);
let hb = new Map(),
    hy = !1;
function hk() {
    let e = new Map();
    for (let t of new Set([...nE.A.getActivityOrderedProjectIds(), ...(0, nT.T7)()])) {
        if (!(nE.A.isThinking(t) || (0, nT.wK)(t)) || nF.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = tP.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, lr.Rc)(t);
            return (0, n2.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...hb]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            hb.delete(t),
            n.unregisterLookup(),
            hv.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        hb.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = hj.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    hw(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (hb.set(e, l),
                    (l.unregisterLookup = (0, hx.Ng)(e, () => (0, fk.n5)(n, t))),
                    hv.A.registerFrameTarget(t, n, fI.A.Backstage, void 0));
            })(t, n);
    for (let e of hb.values()) hw(e.element);
}
function hw(e) {
    let t = ll.A.isBuilderPreviewMobile();
    e.classList.toggle(hj.L, !t);
    let n = t ? fT(ll.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var hN = n(873727),
    hC = n(147248),
    hA = n(418842),
    hS = n(363195),
    hE = n(818023);
let hI = null;
var hM = n(517461),
    h_ = n(761929),
    hP = n(487336);
function hR(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, hM.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, ir.clamp)(u, 360, n),
        m = (0, h_.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: h_.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        f = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), m(e));
            },
            [m],
        );
    return (0, a.jsxs)("div", {
        className: hP.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: hP.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: hP.kL, style: { width: d }, children: l }),
        ],
    });
}
var hT = n(541940);
function hL(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: c,
            content: d,
            sidebar: m,
            showsFrame: f,
            paused: p,
        } = e,
        [g, x] = i.useState(null),
        v = (0, ln.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([hS.A], () => (0, hN.x4)(hS.A.theme)),
            l = (0, o.bG)([hC.A], () => hC.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([J.Ay], () => ({
                reducedMotion: J.Ay.useReducedMotion,
                fontScale: (0, hN.U0)(),
                highContrast: J.Ay.isHighContrastModeEnabled,
                forcedColors: J.Ay.useForcedColors,
                underlineLinks: J.Ay.alwaysShowLinkDecorations,
            })),
            d = nP.hH.useSetting(),
            m = (0, hA.C)(),
            f = (0, o.bG)(
                [nJ.A, ll.A],
                () =>
                    ll.A.isBuilderPreviewMobile() &&
                    nJ.A.getFrame(t)?.applicationId === ll.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            p = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, fk.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, hN.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, ft.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, f, t, s, d, e, r, m, c]),
            j = i.useRef(v);
        i.useLayoutEffect(() => {
            j.current = v;
        });
        let b = i.useCallback(() => {
            h.current ||
                ((h.current = !0),
                queueMicrotask(() => {
                    ((h.current = !1), p.current || j.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (p.current = !1),
                () => {
                    p.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                b();
            }, [l, b]),
            i.useLayoutEffect(() => {
                (v(), b());
            }, [b, v]),
            i.useLayoutEffect(() => {
                let n = (0, fk.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, fk.n5)(e, t) && ((x.current = null), b());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, b]),
            i.useEffect(() => {
                let e = new MutationObserver(b);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [b]));
    })(g, j),
        i.useEffect(() => {
            if (null != t) return (0, hx.Ng)(t, () => (0, fk.n5)(g, j));
        }, [t, g, j]));
    let b = i.useCallback(() => (0, fk.ow)(g, j), [g, j]),
        y = i.useCallback(() => (f ? (0, fk.ow)(g, j) : g), [f, g, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: h()(hT.Mh, c),
                children: [
                    u,
                    p
                        ? null
                        : (0, a.jsx)(hp, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: hT.fm, children: d }),
                ],
            }),
            m,
            p
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fu, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(rz, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function h$(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: s,
        frameLaunchParams: u,
        header: c,
        chatOpen: d,
        onCloseChat: m,
        chatHeaderAction: f,
        onRestoreVersion: p,
        onImportProject: g,
        debugOpen: x = !1,
        onCloseDebug: v,
        restoreState: j,
        previewReady: b,
        previewGate: y,
        availability: k,
        activeMode: w,
        widgetApplicationId: N,
        overlayWidgetSize: C,
        previewPaused: A = !1,
        onResumePreview: I,
    } = e;
    (0, hg.k)(t, N);
    let M = s.type === nK.U.MAIN || (0, lr.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([ll.A], () => ({
            mobile: ll.A.isBuilderPreviewMobile(),
            landscape: ll.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? hE.aX.LANDSCAPE : hE.aX.PORTRAIT), (hI = e));
                else {
                    if (hI !== e) return;
                    ((l = hE.aX.UNHANDLED), (hI = null));
                }
                eP.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let P = i.useRef(null),
        [R, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, rF.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, rF.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, nO.HV)(l), () => (0, nO.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, _.ensureConnection)(t),
                hy ||
                    ((hy = !0),
                    nE.A.addChangeListener(hk),
                    tP.Ay.addChangeListener(hk),
                    nJ.A.addChangeListener(hk),
                    ll.A.addChangeListener(hk),
                    nF.A.addChangeListener(hk),
                    (0, nT.W3)(hk),
                    hk()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = P.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let L = Math.max(360, R - 320),
        $ = d || M;
    return (0, a.jsx)("div", {
        ref: P,
        className: hT.LB,
        children: (0, a.jsx)(hL, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, nB.yf)(k, w),
            paused: A,
            mainClassName: null == c ? void 0 : h()(hT.ez, { [hT.zt]: d }),
            content: (0, a.jsx)(ha, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: k,
                activeMode: w,
                widgetApplicationId: N,
                overlayWidgetSize: C,
                projectId: t,
                paused: A,
                onResume: I,
                frameOverlay: (0, a.jsx)(fS, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && $
                    ? (0, a.jsx)(hR, {
                          open: d,
                          maxWidth: L,
                          children: (0, a.jsx)("div", {
                              className: hT.cO,
                              children: x
                                  ? (0, a.jsx)(m4, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(fx.A, { projectId: t }),
                                            (0, a.jsx)(l2.Ay, {
                                                "aria-label": E.intl.string(E.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(l2.Ay.Icon, {
                                                                  icon: ed.P,
                                                                  tooltip: E.intl.string(S.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(l2.Ay.Title, {
                                                    children: E.intl.string(E.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: hT.cb,
                                                children: (0, a.jsx)(
                                                    df,
                                                    {
                                                        projectId: t,
                                                        restoreState: j,
                                                        onRestoreVersion: p,
                                                        onImportProject: g,
                                                    },
                                                    t,
                                                ),
                                            }),
                                        ],
                                    }),
                          }),
                      })
                    : null,
        }),
    });
}
var hD = n(323140);
function hz(e) {
    var t, l;
    let r,
        s,
        c,
        d,
        m,
        { project: f, projectsLoaded: p, onBack: g, guildId: j } = e,
        [b, k] = i.useState(!0),
        [w, C] = i.useState(!1),
        A = nR(),
        I = i.useCallback(() => k(!0), []),
        P = i.useCallback(() => {
            (C(!1), k(!0));
        }, []),
        { restoreState: T, handleRestoreVersion: L } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(!0),
                o = i.useRef(!1);
            return (
                (a.current = r),
                i.useEffect(
                    () => (
                        (s.current = !0),
                        () => {
                            s.current = !1;
                        }
                    ),
                    [],
                ),
                {
                    restoreState: n,
                    handleRestoreVersion: i.useCallback(
                        function (n) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (null == e || o.current) return;
                            let u = e.id;
                            function c() {
                                return s.current && a.current === u;
                            }
                            ((o.current = !0),
                                t(),
                                l({ entry: n, status: "restoring" }),
                                (0, nD.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, nk.P0)({
                                                        text: E.intl.formatToPlainString(S.default.Z4n6LX, {
                                                            title: (0, n$.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, nz.c)(u, r);
                                                null != e && (0, nk.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, nk.P0)({
                                                    text: E.intl.string(S.default["PSdo+w"]),
                                                    variant: "critical",
                                                }));
                                        },
                                    )
                                    .finally(() => {
                                        c() && (o.current = !1);
                                    }));
                        },
                        [e, t],
                    ),
                }
            );
        })(f, P),
        $ = f?.id ?? null,
        {
            integrationStatus: D,
            isPreviewApplicationLoading: z,
            checkingIntegration: O,
            previewReady: F,
            hasFrame: G,
            needsPermissionReview: B,
            installAuthorizeProps: K,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)(
                    [tP.Ay, n8.A],
                    () => (null == r ? null : (tP.Ay.getIntegrationStatus(r) ?? n8.A.getIntegrationStatus(r))),
                    [r],
                ),
                { data: c, isLoading: d } = (0, n7.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                p = (0, nB.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: u?.integration_installed ?? null,
                    botPermissionsChanged: u?.bot_permissions_changed === !0,
                }),
                g = i.useCallback(async () => {
                    if (null == r || a.current !== r) return;
                    s.current?.abort();
                    let e = new AbortController();
                    ((s.current = e), l(null));
                    try {
                        await ((0, R.CG)(r)?.catch(() => (0, R.U1)(r, e.signal)) ?? (0, R.U1)(r, e.signal));
                    } catch {
                    } finally {
                        e.signal.aborted || s.current !== e || a.current !== r || l(r);
                    }
                }, [r]);
            i.useEffect(
                () => (
                    g(),
                    () => {
                        (s.current?.abort(), (s.current = null));
                    }
                ),
                [g],
            );
            let x = (0, n9.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, n9.$)(e, x));
                }, [x, e]),
                j = i.useCallback(async () => {
                    try {
                        await v();
                    } catch {}
                    await g();
                }, [g, v]),
                b = i.useMemo(() => {
                    let t = e?.preview_application_id;
                    return null == t || d || m
                        ? null
                        : {
                              ...(0, le.i)({ applicationId: t, application: c ?? null, guildId: x }),
                              onClose: () => {
                                  j();
                              },
                          };
                }, [m, j, x, d, c, e?.preview_application_id]);
            return {
                integrationStatus: u,
                isPreviewApplicationLoading: d,
                checkingIntegration: m,
                previewReady: f,
                hasFrame: h,
                needsPermissionReview: p,
                installAuthorizeProps: b,
            };
        })(f, j),
        H =
            (0, o.bG)([lq.A], () => (null == $ ? void 0 : lq.A.getPublishStatus($)?.previewAppChannels), [$]) ??
            D?.preview_app_channels,
        {
            availability: W,
            activeMode: V,
            setMode: X,
            frameSurface: Y,
            frameSurfaceOptions: J,
            setFrameSurface: Q,
            appChannel: ee,
            setAppChannel: et,
            frameLaunchParams: en,
            widgetApplicationId: el,
        } = (0, nX.p)({
            applicationId: f?.preview_application_id ?? null,
            previewApplicationId: f?.preview_application_id ?? null,
            declaredActivity: G,
            previewSupportedSurfaces: f?.preview_supported_surfaces,
            installScope: f?.install_scope ?? null,
            ownerAuthorizationRevoked: D?.owner_authorization_revoked === !0,
            supportsOverlay: f?.preview_supported_surfaces?.includes(nq.q7.OVERLAY) === !0,
            previewAppChannels: H,
        }),
        er =
            ((t = (0, o.bG)(
                [nE.A],
                () =>
                    null == $
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(nE.A.getMessages($)),
                [$],
            )),
            null != (r = t?.default_size) &&
            Number.isFinite(r.width) &&
            Number.isFinite(r.height) &&
            r.width > 0 &&
            r.height > 0
                ? r
                : nU);
    ((0, nG.x)($, (e) => {
        W.modes.includes(e) && X(e);
    }),
        n_($, () => {
            (k(!0), C(!0));
        }));
    let ea = W.modes.includes("frame"),
        ei = (0, o.bG)([nF.A], () => nF.A.isPaused($), [$]),
        es = ea && !ei,
        {
            previewTargetOptions: eo,
            handleSelectPreviewTarget: eu,
            mobilePreview: ec,
            mobilePreviewLabel: ed,
            handleToggleMobilePreview: em,
            landscapePreview: ef,
            rotatePreviewLabel: eh,
            handleRotatePreview: ep,
            previewSurface: eg,
            previewFrame: ex,
            isRefreshing: ev,
            handleRefresh: ej,
        } = (function (e) {
            let {
                    project: t,
                    modes: n,
                    frameSurface: l,
                    frameSurfaceOptions: r,
                    previewAppChannels: a,
                    setMode: s,
                    setFrameSurface: u,
                    setAppChannel: c,
                } = e,
                d = i.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return e.flatMap((e) =>
                                "frame" === e
                                    ? t.flatMap((t) =>
                                          t === nK.U.APP_CHANNEL && n.length > 1
                                              ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                              : [{ mode: e, surface: t }],
                                      )
                                    : [{ mode: e }],
                            );
                        })(n, r, a),
                    [n, r, a],
                ),
                m = i.useCallback(
                    (e) => {
                        ("frame" === e.mode && (u(e.surface), null != e.appChannel && c?.(e.appChannel)), s(e.mode));
                    },
                    [c, u, s],
                ),
                f = (0, o.bG)([ll.A], () => ll.A.isBuilderPreviewMobile()),
                h = E.intl.string(f ? S.default.tKGF0Q : S.default.peqEOY),
                p = i.useCallback(() => (0, nO.GG)(!f), [f]),
                g = (0, o.bG)([ll.A], () => ll.A.isBuilderPreviewLandscape()),
                x = E.intl.string(g ? S.default.tunI2l : S.default.DoNdjA),
                v = i.useCallback(() => (0, nO.Lw)(!g), [g]),
                j = (0, lr.jS)(t),
                b = i.useMemo(() => (0, lr.Op)(j, l), [j, l]),
                y = (0, ln.A)(t?.preview_application_id ?? null, b),
                k = (0, n2.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || lt.A.refreshProxyTicket(y.id);
                }, [y, k]);
            return {
                previewTargetOptions: d,
                handleSelectPreviewTarget: m,
                mobilePreview: f,
                mobilePreviewLabel: h,
                handleToggleMobilePreview: p,
                landscapePreview: g,
                rotatePreviewLabel: x,
                handleRotatePreview: v,
                previewSurface: b,
                previewFrame: y,
                isRefreshing: k,
                handleRefresh: w,
            };
        })({
            project: f,
            modes: W.modes,
            frameSurface: Y,
            frameSurfaceOptions: J,
            previewAppChannels: H,
            setMode: X,
            setFrameSurface: Q,
            setAppChannel: et,
        }),
        eb = b && !w,
        ey = E.intl.string(eb ? S.default.JD6Oit : S.default.xjJAQm),
        ek = i.useCallback(() => {
            if (w) {
                (C(!1), k(!0));
                return;
            }
            k((e) => !e);
        }, [w]),
        ew = i.useCallback(() => k(!1), []),
        {
            designFeedbackActive: eN,
            designFeedbackToggleRef: eC,
            agentDrivingPreview: eA,
            designFeedbackLabel: eS,
            handleToggleDesignFeedback: eE,
        } = (function (e, t, n) {
            let { active: l } = t8(e);
            i.useEffect(() => {
                null != e && l && !t && t5(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, nT.Zv)(e),
                s = E.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void t5(e);
                        (n(), t2(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })($, es, P),
        [eI] = i.useState(() => tU.isPlatformEmbedded && (0, n6.qM)()),
        eM = null != nv($);
    i.useEffect(() => {
        null != $ && eM && !es && np($);
    }, [$, eM, es]);
    let eP = i.useCallback(() => {
            null != $ &&
                (P(),
                (function (e) {
                    if (null != nf(e)) return;
                    let { byProject: t } = nd.getState();
                    nd.setState({ byProject: { ...t, [e]: nm } });
                })($));
        }, [$, P]),
        eR = i.useCallback(() => {
            null != $ && np($);
        }, [$]),
        eT = eM ? E.intl.string(S.default.tuQ5f3) : eS,
        eL = i.useCallback(() => {
            C((e) => !e && (k(!0), !0));
        }, []),
        e$ = i.useCallback(() => C(!1), []),
        eD = i.useCallback(() => {
            null != $ && (0, nO._j)($);
        }, [$]),
        ez = i.useCallback(() => {
            null != $ && (ei ? (0, nO._j)($) : (0, nO.di)($, ex?.id));
        }, [$, ei, ex?.id]),
        eO = i.useCallback(() => {
            var e, t;
            (null != f && ((e = f.id), (t = ex?.id), (0, _.closeConnection)(e), (0, lF.r)(t)), g());
        }, [f, ex?.id, g]),
        eF =
            ((s = i.useCallback(() => {
                null != f && (I(), (0, _.sendUserMessage)(f.id, E.intl.string(S.default.oU20rd)));
            }, [f, I])),
            (l = i.useCallback(
                (e) => {
                    let t;
                    if (null == f) return;
                    let n = f.id,
                        l =
                            ((t = "" === e.type ? "application/octet-stream" : e.type),
                            (0, e_.Oq)(e.size, t)
                                ? null
                                : E.intl.formatToPlainString(S.default.ThxcOX, { size: (0, e_.sM)((0, e_.Ju)(t)) }));
                    null != l
                        ? (0, nk.P0)({ text: l, variant: "critical" })
                        : (0, ny.A)({
                              title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: f.name }),
                              subtitle: E.intl.string(S.default.M7H3sJ),
                              confirmText: E.intl.string(S.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  I();
                                  try {
                                      await nS(n, e, E.intl.string(S.default.Owerd3));
                                  } catch {
                                      (0, nk.P0)({ text: E.intl.string(S.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [f, I],
            )),
            (c = i.useRef(null)),
            (d = i.useCallback(
                (e) => {
                    let t = e.target.files?.[0] ?? null;
                    ((e.target.value = ""), null != t && l(t));
                },
                [l],
            )),
            {
                onExport: s,
                onImport: (m = {
                    open: () => c.current?.click(),
                    input: (0, a.jsx)("input", {
                        ref: c,
                        type: "file",
                        accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
                        hidden: !0,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        onChange: d,
                    }),
                }).open,
                importInput: m.input,
            }),
        eq = i.useCallback(() => {
            null != f && (0, l1.A)(f, j);
        }, [f, j]),
        eU = (0, nB.JR)(V, B)
            ? { type: "permissions", authorizeProps: K }
            : O && null == D
              ? { type: "checking" }
              : void 0,
        eG = (0, o.bG)([tP.Ay], () => null != $ && tP.Ay.isProjectDeleting($), [$]);
    i.useEffect(() => {
        ((null == f && p) || eG) && (0, u.bG)(q.BVt.CHANNEL(j, U.VV.CONJURE));
    }, [j, f, p, eG]);
    let {
            publishOptions: eB,
            publish: eK,
            publishing: eH,
            confirmation: eW,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...l0,
                        showConfirmation: (e) => {
                            (s(),
                                r(e),
                                (a.current = window.setTimeout(() => {
                                    ((a.current = null), r(null));
                                }, 1500)));
                        },
                    }),
                    [s],
                ),
                u = i.useMemo(() => ({ guildId: t, platform: o, busy: n }), [t, o, n]),
                c = (0, lk.Ay)(e, u),
                d = c?.publishing === !0;
            i.useEffect(() => {
                d && (s(), r(null));
            }, [d, s]);
            let m = d ? null : l;
            return { publishOptions: u, publish: c, publishing: d, confirmation: m };
        })($, j, O || z),
        eV = (0, lU.L)(eK?.status ?? null),
        eX =
            null == eK
                ? null
                : (0, a.jsx)("div", {
                      className: hD.As,
                      onMouseDown:
                          null == $ || eK.disabled || eH
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, lG.dx)($);
                                },
                      children: (0, a.jsx)(N.m, {
                          text: eV,
                          asContainer: !0,
                          children: (0, a.jsx)(Z.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eH ? hO : null != eW ? tR.U : void 0,
                              disabled: eK.disabled,
                              onClick: () => eK.run("header"),
                              text: eW ?? eK.label,
                          }),
                      }),
                  }),
        eY = null == f ? void 0 : () => (0, lN.A)(f.id, { guildId: j, isPreview: !0, publishOptions: eB }),
        eZ = (0, a.jsx)(M, {
            title: f?.name ?? E.intl.string(S.default.G1WwgK),
            breadcrumb: { title: E.intl.string(S.default.uk6jhJ), onClick: g },
            project: f,
            onOpenProjectSettings: eY,
            actions:
                null == f
                    ? null
                    : (0, a.jsxs)("div", {
                          className: hD.FO,
                          children: [
                              (0, a.jsx)(n4, {
                                  targets: eo,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(V, Y, ee),
                                  onChange: eu,
                              }),
                              ea
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === V
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: ec ? hU : hq,
                                                      tooltip: ed,
                                                      "aria-label": ed,
                                                      selected: ec,
                                                      onClick: em,
                                                  })
                                                : null,
                                            ec && "frame" === V
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: hG,
                                                      tooltip: eh,
                                                      "aria-label": eh,
                                                      selected: ef,
                                                      onClick: ep,
                                                  })
                                                : null,
                                            (0, a.jsx)(nb, {
                                                enabled: eI && !eM && !eA && !ei,
                                                onLongPress: eP,
                                                children: (0, a.jsx)(y.A.Icon, {
                                                    ref: eC,
                                                    icon: tT.x,
                                                    iconClassName: hD.D8,
                                                    tooltip: eT,
                                                    "aria-label": eT,
                                                    selected: eM || eN,
                                                    disabled: ei || (eA && !eM),
                                                    onClick: eM ? eR : eE,
                                                }),
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" !== V || ei
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(tq.A, { frame: ex }),
                                            (0, a.jsx)(n3, { frame: ex, controlProjectId: f.id }),
                                        ],
                                    }),
                              (0, a.jsx)("div", { className: hD.YJ }),
                              A
                                  ? (0, a.jsx)(y.A.Icon, {
                                        icon: tL.BugIcon,
                                        tooltip: E.intl.string(S.default.Mt5k9d),
                                        "aria-label": E.intl.string(S.default.Mt5k9d),
                                        selected: w,
                                        onClick: eL,
                                    })
                                  : null,
                              (0, a.jsx)(y.A.Icon, {
                                  icon: t$.SettingsIcon,
                                  tooltip: E.intl.string(S.default.I2XSKe),
                                  "aria-label": E.intl.string(S.default.I2XSKe),
                                  onClick: eY,
                              }),
                              (0, a.jsx)(lO, {
                                  projectId: f.id,
                                  projectName: f.name,
                                  guildId: j,
                                  projectGuildId: f.guild_id,
                                  isOwner: (0, tP.PV)(f),
                                  canRemix: (0, tP.H_)(f),
                                  onRefresh: (0, n2.x1)(ex) ? ej : void 0,
                                  isRefreshing: ev,
                                  onTogglePreviewPaused: "frame" === V ? ez : void 0,
                                  previewPaused: ei,
                                  previewPauseDisabled: !ei && eA,
                                  onClose: eO,
                                  onExport: eF.onExport,
                                  onImport: eF.onImport,
                                  onRemix: eq,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = f.id),
                                          void (0, nL.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("834460"),
                                                  n.e("960521"),
                                              ]).then(n.bind(n, 699760));
                                              return (n) => (0, a.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onHistory: () => {
                                      var e;
                                      return (
                                          (e = {
                                              projectId: f.id,
                                              installScope: f.install_scope,
                                              restoreDisabled: T?.status === "restoring",
                                              onRestoreVersion: (e, t) => L(e, t, !0),
                                          }),
                                          void (0, nL.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("323079"),
                                                  n.e("437655"),
                                                  n.e("420238"),
                                                  n.e("586467"),
                                                  n.e("231782"),
                                                  n.e("526192"),
                                                  n.e("437578"),
                                              ]).then(n.bind(n, 209233));
                                              return (n) => (0, a.jsx)(t, { ...n, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      W.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== W.profileState
                                          ? el
                                          : null,
                                  previewProjectId: f.id,
                              }),
                              eb
                                  ? null
                                  : (0, a.jsx)(y.A.Icon, { icon: hF, tooltip: ey, "aria-label": ey, onClick: ek }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: h()(hD.nj, tE.T),
        children: [
            eF.importInput,
            (0, a.jsx)("main", {
                className: hD.JX,
                children:
                    null == f
                        ? (0, a.jsxs)("div", {
                              className: hD.j5,
                              children: [
                                  eZ,
                                  (0, a.jsxs)("div", {
                                      className: hD.sD,
                                      children: [
                                          (0, a.jsx)(x.D, {
                                              variant: "heading-lg/semibold",
                                              children: E.intl.string(S.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: E.intl.string(S.default.fINulo),
                                          }),
                                          (0, a.jsx)(Z.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: E.intl.string(S.default["WFJ/vb"]),
                                              onClick: () => (0, R.hF)(j),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(lk.bI.Provider, {
                              value: eB,
                              children: (0, a.jsx)(
                                  h$,
                                  {
                                      projectId: f.id,
                                      designFeedbackToggleRef: eC,
                                      applicationId: f.preview_application_id,
                                      previewApplicationId: f.preview_application_id,
                                      surface: eg,
                                      frameLaunchParams: en,
                                      header: eZ,
                                      chatOpen: b,
                                      onCloseChat: ew,
                                      chatHeaderAction: eX,
                                      debugOpen: A && w,
                                      onCloseDebug: e$,
                                      onRestoreVersion: L,
                                      onImportProject: (0, tP.PV)(f) ? eF.onImport : void 0,
                                      restoreState: T,
                                      previewReady: F,
                                      previewGate: eU,
                                      availability: W,
                                      activeMode: V,
                                      widgetApplicationId: el,
                                      overlayWidgetSize: er,
                                      previewPaused: ei,
                                      onResumePreview: eD,
                                  },
                                  f.id,
                              ),
                          }),
            }),
        ],
    });
}
function hO() {
    return (0, a.jsx)(eI.y, { type: eI.t.SPINNING_CIRCLE_SIMPLE, className: hD.Hv, itemClassName: hD.C5 });
}
function hF(e) {
    return (0, a.jsx)(tD.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function hq(e) {
    return (0, a.jsx)(tz.u, { ...e, size: "custom", width: 20, height: 20 });
}
function hU(e) {
    return (0, a.jsx)(tO.k, { ...e, size: "custom", width: 20, height: 20 });
}
function hG(e) {
    return (0, a.jsx)(tF.H, { ...e, size: "custom", width: 20, height: 20 });
}
function hB(e) {
    let { guildId: t, projectId: n } = e,
        l = (0, o.yK)([c.Ay], () => c.Ay.getSelfMember(t)?.roles ?? [], [t]),
        r = (0, o.bG)(
            [d.A, m.A],
            () => {
                let e = d.A.getGuild(t);
                return null != e && m.A.can(q.xBc.MANAGE_GUILD, e);
            },
            [t],
        ),
        s = n ?? null;
    (i.useEffect(() => {
        (0, R.hF)(t);
    }, [t, l, r]),
        i.useEffect(() => {
            (0, R.dm)(t, s);
        }, [t, s]));
    let f = i.useCallback(() => {
            (0, u.pX)(q.BVt.CHANNEL(t, U.VV.CONJURE));
        }, [t]),
        h = (0, o.bG)(
            [tP.Ay],
            () => {
                if (null == s) return null;
                let e = tP.Ay.getProject(s);
                return null == e || (0, tP.PV)(e) || e.guild_id === t ? e : null;
            },
            [s, t],
        ),
        p = (0, o.bG)([tP.Ay], () => tP.Ay.hasFetchedGuildProjects(t), [t]);
    return null != s
        ? (0, a.jsx)(hz, { project: h, projectsLoaded: p, onBack: f, guildId: t }, s)
        : (0, a.jsx)(t_, { guildId: t });
}
