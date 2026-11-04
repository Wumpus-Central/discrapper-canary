s.d(t, { A: () => tn });
var a = s(477900),
    n = s(582128),
    l = s(503698),
    r = s.n(l),
    i = s(97893),
    c = s(364522),
    o = s(62010),
    d = s(534514),
    u = s(834730),
    m = s(65593),
    h = s(742589),
    f = s(71393),
    x = s(949757),
    g = s(858899),
    v = s(989145),
    j = s(639519),
    p = s(322227),
    N = s(371169),
    y = s(391712);
async function b(e) {
    let { guildId: t, installScope: s, prompt: a, modelSettings: n, templateId: l } = e,
        r = await (0, N.gA)(
            null != s
                ? { guild_id: t, install_scope: s }
                : { guild_id: t, auto_install_scope: !0, prompt: (a ?? "").slice(0, 4e3) },
        );
    return ((0, p.ensureConnection)(r, { templateId: l }), (0, p.stageModelSettings)(r, n ?? y.A4), r);
}
async function A(e) {
    let { start: t, ...s } = e,
        a = await b(s);
    return (await t(a), a);
}
var w = s(381991),
    E = s(708679),
    C = s(567630),
    I = s(809526),
    S = s(105292);
class k extends Error {}
var P = s(705427),
    L = s(347111),
    O = s(120234),
    R = s(101766),
    M = s(506774);
let _ = "ConjureProjectsPanelOpen";
var F = s(246338);
let G = "conjure-home";
var D = s(89310),
    T = s(17928),
    z = s(89222),
    H = s(821609),
    q = s(661531),
    K = s(775602),
    U = s(486020);
function W() {
    return [
        {
            id: "server-calendar",
            category: "apps",
            shortPrompt: S.intl.string(I.default.qbaf5O),
            fullPrompt: S.intl.string(I.default.vo1ZBs),
            name: S.intl.string(I.default.Zx7B6B),
            authorAvatarSeed: "1",
        },
        {
            id: "cowboy-chat-bot",
            category: "chat_bot",
            shortPrompt: S.intl.string(I.default.i0y7Ld),
            fullPrompt: S.intl.string(I.default.Hddwvt),
            name: S.intl.string(I.default.dLyihE),
            authorAvatarSeed: "2",
        },
        {
            id: "library-voice-channel",
            category: "games",
            shortPrompt: S.intl.string(I.default.vYjIS6),
            fullPrompt: S.intl.string(I.default["4pASEG"]),
            name: S.intl.string(I.default.e8Jbz3),
            authorAvatarSeed: "3",
        },
        {
            id: "flappy-discord",
            category: "games",
            shortPrompt: S.intl.string(I.default.gtX7tS),
            fullPrompt: S.intl.string(I.default["Sfa50+"]),
            name: S.intl.string(I.default.Tbag5k),
            authorAvatarSeed: "4",
        },
        {
            id: "no-yelling",
            category: "automod",
            shortPrompt: S.intl.string(I.default.H8fuGK),
            fullPrompt: S.intl.string(I.default.XuiHpi),
            name: S.intl.string(I.default["5XJ55E"]),
            authorAvatarSeed: "5",
        },
        {
            id: "what-should-we-play",
            category: "apps",
            shortPrompt: S.intl.string(I.default.tZv5cM),
            fullPrompt: S.intl.string(I.default.qd87yI),
            name: S.intl.string(I.default["7KvZ91"]),
            authorAvatarSeed: "6",
        },
        {
            id: "kd-tracker",
            category: "overlay_widget",
            shortPrompt: S.intl.string(I.default.tqEROk),
            fullPrompt: S.intl.string(I.default.yym7Yj),
            name: S.intl.string(I.default.vRpB6m),
            authorAvatarSeed: "7",
        },
    ];
}
var $ = s(687966),
    B = s(323384),
    Y = s(632015),
    V = s(31300),
    X = s(231483),
    Z = s(430392);
let J = {
        "server-calendar": "/assets/1d701ea289cc99e6.svg",
        "cowboy-chat-bot": "/assets/56e489e9c5907add.svg",
        "library-voice-channel": "/assets/5813258afff68797.svg",
        "flappy-discord": "/assets/b43659b526f2e936.svg",
        "no-yelling": "/assets/54b5cda688395473.svg",
        "what-should-we-play": "/assets/fcb9220c49b6460a.svg",
        "kd-tracker": "/assets/05c0d07952b2d93f.svg",
    },
    Q = {
        games: $.GameControllerIcon,
        apps: B.k,
        profile_widget: Y.f,
        overlay_widget: V.k,
        automod: X.ShieldIcon,
        chat_bot: Z.RobotIcon,
    };
var ee = s(621466);
let et = "data-conjure-carousel-card";
var es = s(19493);
function ea(e) {
    e.preventDefault();
}
let en = n.memo(function (e) {
        let { inspiration: t, onCopyPrompt: s, repeat: n = !1 } = e,
            l = Q[t.category];
        return (0, a.jsxs)("li", {
            className: es.AS,
            "aria-hidden": !!n || void 0,
            [et]: "",
            children: [
                (0, a.jsxs)("div", {
                    className: es.rl,
                    children: [
                        (0, a.jsx)("img", {
                            className: es.my,
                            src: (0, U.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(u.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            className: es.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: es.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: es.xn,
                            children: [
                                (0, a.jsx)("img", { className: es.q_, src: t.image, alt: "" }),
                                (0, a.jsx)("div", {
                                    className: es.o1,
                                    children: (0, a.jsx)(H.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: S.intl.string(I.default["6CQjTy"]),
                                        tabIndex: n ? -1 : void 0,
                                        onMouseDown: n ? ea : void 0,
                                        onClick: () => s(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: es.qr,
                            children: [
                                (0, a.jsx)("div", {
                                    className: es.Yl,
                                    "aria-hidden": !0,
                                    children: (0, a.jsx)(l, { size: "md", color: q.A.colors.ICON_STRONG }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: es.PJ,
                                    children: [
                                        (0, a.jsx)(u.E, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t.name,
                                        }),
                                        (0, a.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: (function (e) {
                                                switch (e) {
                                                    case "games":
                                                        return S.intl.string(I.default["JU01/4"]);
                                                    case "apps":
                                                        return S.intl.string(I.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return S.intl.string(I.default.GUb2zA);
                                                    case "overlay_widget":
                                                        return S.intl.string(I.default.uVOH1p);
                                                    case "automod":
                                                        return S.intl.string(I.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return S.intl.string(I.default.KBHZfO);
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
    el = n.memo(function (e) {
        var t;
        let { inspirations: s, onCopyPrompt: l } = e,
            r = (0, T.bG)([K.Ay], () => K.Ay.useReducedMotion),
            i = n.useRef(null),
            c = n.useRef(null),
            o = (function (e, t, s, a) {
                let [l, r] = n.useState(1);
                return (
                    n.useLayoutEffect(() => {
                        let n = e.current,
                            l = t.current;
                        if (!a || null == n || null == l || 0 === s) return;
                        function i() {
                            if (null == n || null == l) return;
                            let e = l.querySelector(`[${et}]`);
                            if (null == e) return;
                            let t = parseFloat(getComputedStyle(l).columnGap),
                                a = e.offsetWidth + (Number.isNaN(t) ? 0 : t);
                            a <= 0 || r(Math.max(1, Math.ceil((n.clientWidth + 2 * a) / (a * s))));
                        }
                        i();
                        let c = new ResizeObserver(i);
                        return (c.observe(n), () => c.disconnect());
                    }, [e, t, s, a]),
                    a ? l : 1
                );
            })(i, c, s.length, !r);
        return (
            (t = !r),
            n.useEffect(() => {
                let e = i.current,
                    s = c.current;
                if (null == e || null == s) return;
                let a = [],
                    n = [],
                    l = 1,
                    r = 0,
                    o = 1,
                    d = 0,
                    u = 0,
                    m = null,
                    h = !1,
                    f = !1,
                    x = document.hasFocus(),
                    g = !0;
                function v() {
                    if (null == e || null == s) return;
                    n = (a = Array.from(s.querySelectorAll(`[${et}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
                    let i = (l = a.length > 1 ? Math.abs(a[1].offsetLeft - a[0].offsetLeft) : 1) * a.length;
                    ((r = t && i >= e.clientWidth + 2 * l ? i : 0),
                        (o = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function j() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    a.forEach((e, s) => {
                        var a, i;
                        let c,
                            u,
                            m = n[s] - t;
                        r > 0 && (m = ((((m - d * o + (a = r) / 2) % a) + a) % a) - a / 2);
                        let { angleDeg: h, dropPx: f } =
                            ((i = m / l),
                            (u =
                                (l / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((c = Math.max(-12, Math.min(12, 4 * i))) * Math.PI) / 180))),
                            { angleDeg: c, dropPx: u });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + m - n[s]}px`),
                            e.style.setProperty("--custom-conjure-home-carousel-angle", `${h}deg`),
                            e.style.setProperty("--custom-conjure-home-carousel-drop", `${f}px`));
                    });
                }
                function p(e) {
                    (null != m && r > 0 && (d = (d + (30 * (e - m)) / 1e3) % r),
                        (m = e),
                        j(),
                        (u = requestAnimationFrame(p)));
                }
                function N() {
                    let e = t && !h && !f && x && g;
                    e && 0 === u
                        ? ((m = null), (u = requestAnimationFrame(p)))
                        : e || 0 === u || (cancelAnimationFrame(u), (u = 0));
                }
                function y() {
                    ((h = !0), N());
                }
                function b() {
                    ((h = !1), N());
                }
                function A() {
                    ((f = !0), N());
                }
                function w(t) {
                    ((f = (0, ee.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), N());
                }
                function E() {
                    ((x = !0), N());
                }
                function C() {
                    ((x = !1), N());
                }
                (v(), j(), N());
                let I = new ResizeObserver(() => {
                    (v(), j());
                });
                (I.observe(e), I.observe(s));
                let S = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((g = t.isIntersecting), N());
                });
                return (
                    S.observe(e),
                    e.addEventListener("scroll", j, { passive: !0 }),
                    e.addEventListener("pointerenter", y),
                    e.addEventListener("pointerleave", b),
                    e.addEventListener("focusin", A),
                    e.addEventListener("focusout", w),
                    window.addEventListener("focus", E),
                    window.addEventListener("blur", C),
                    () => {
                        (cancelAnimationFrame(u),
                            I.disconnect(),
                            S.disconnect(),
                            e.removeEventListener("scroll", j),
                            e.removeEventListener("pointerenter", y),
                            e.removeEventListener("pointerleave", b),
                            e.removeEventListener("focusin", A),
                            e.removeEventListener("focusout", w),
                            window.removeEventListener("focus", E),
                            window.removeEventListener("blur", C));
                    }
                );
            }, [i, c, t]),
            (0, a.jsx)("section", {
                ref: i,
                className: r ? es.vV : es.Dk,
                "aria-label": S.intl.string(I.default.Qc4S39),
                children: (0, a.jsx)("ul", {
                    ref: c,
                    className: es.u4,
                    children: Array.from({ length: o }, (e, t) =>
                        s.map((e) =>
                            (0, a.jsx)(en, { inspiration: e, onCopyPrompt: l, repeat: t > 0 }, `${e.id}-${t}`),
                        ),
                    ),
                }),
            })
        );
    });
var er = s(289873),
    ei = s(123292),
    ec = s(441935),
    eo = s(939249),
    ed = s(847374),
    eu = s(5127);
function em(e) {
    let { onClick: t } = e;
    return (0, a.jsxs)(eo.D, {
        className: r()(eu.ap, eu.jP),
        onClick: t,
        children: [
            (0, a.jsx)("span", { className: eu.DW, children: (0, a.jsx)(ed.a, { size: "sm", color: "currentColor" }) }),
            (0, a.jsx)(u.E, { variant: "body-md/medium", color: "none", children: S.intl.string(I.default.Im1k9X) }),
        ],
    });
}
var eh = s(260498),
    ef = s(741907);
function ex(e, t) {
    return e.guild_id === t || e.preview_guild_id === t;
}
var eg = s(602991),
    ev = s(186340),
    ej = s(919485),
    ep = s(588359),
    eN = s(638693);
function ey(e) {
    let { title: t, projects: s, onSelect: l, renderProjectActions: r, onProjectContextMenu: i } = e,
        {
            visibleItems: c,
            listRef: o,
            showMore: d,
        } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                [s, a] = n.useState(8),
                l = Math.max(s, 8 * Math.ceil((t + 1) / 8)),
                r = n.useRef(null),
                i = n.useRef(null);
            return (n.useLayoutEffect(() => {
                if (null == i.current) return;
                let e = r.current?.children[i.current]?.querySelector('[role="button"], button');
                ((i.current = null), e?.focus());
            }, [l]),
            l >= e.length)
                ? { visibleItems: e, listRef: r, showMore: null }
                : {
                      visibleItems: e.slice(0, l),
                      listRef: r,
                      showMore: () => {
                          let t = l + 8;
                          (t >= e.length && (i.current = l), a(t));
                      },
                  };
        })(s);
    return (0, a.jsxs)(ej.A, {
        title: t,
        className: eN.uW,
        children: [
            (0, a.jsx)(ev.A, {
                listRef: o,
                projects: c,
                onSelect: l,
                renderProjectActions: r,
                onProjectContextMenu: i,
            }),
            null != d ? (0, a.jsx)(em, { onClick: d }) : null,
        ],
    });
}
function eb(e) {
    let t,
        { guildId: s, archiveImport: l } = e,
        {
            mine: r,
            shared: i,
            fetchState: o,
        } = ((t = (0, ef.UU)(() => eh.Ay.getOwnedProjects().filter((e) => ex(e, s)), [s])),
        {
            mine: t,
            shared: (0, ef.UU)(() => eh.Ay.getSharedProjects(s), [s]),
            fetchState: (0, T.bG)([eh.Ay], () => eh.Ay.getGuildProjectsFetchState(s), [s]),
        }),
        m = (0, T.yK)([eh.Ay], () => eh.Ay.getOwnedProjects().filter((e) => !ex(e, s)), [s]),
        { importArchive: h } = l,
        f = (0, x.yN)(n.useCallback((e) => h(e, "guild"), [h])),
        g = n.useCallback((e) => (0, w.A)(e.id, "home"), []),
        v = n.useCallback((e) => (0, a.jsx)(eg.S, { project: e, guildId: s }), [s]),
        j = n.useCallback((e, t) => (0, eg.V)(e, t, s), [s]),
        p = S.intl.string(I.default.BMn2lY),
        y = r.length > 0 || i.length > 0;
    return (0, a.jsxs)("aside", {
        className: eN.pz,
        "aria-label": p,
        children: [
            (0, a.jsxs)("div", {
                className: eN.wx,
                children: [
                    (0, a.jsx)(d.D, { variant: "heading-sm/semibold", color: "text-strong", children: p }),
                    (0, a.jsx)(ec.A, { importing: l.importing, onClick: f.open }),
                    f.input,
                ],
            }),
            (0, a.jsxs)(c.Ip, {
                className: eN.XG,
                children: [
                    r.length > 0
                        ? (0, a.jsx)(
                              ey,
                              {
                                  title: S.intl.string(I.default["8LfMqp"]),
                                  projects: r,
                                  onSelect: g,
                                  renderProjectActions: v,
                                  onProjectContextMenu: j,
                              },
                              `${s}-mine`,
                          )
                        : null,
                    i.length > 0
                        ? (0, a.jsx)(
                              ey,
                              {
                                  title: S.intl.string(I.default.YHDMK6),
                                  projects: i,
                                  onSelect: g,
                                  renderProjectActions: v,
                                  onProjectContextMenu: j,
                              },
                              `${s}-shared`,
                          )
                        : null,
                    y || "error" !== o
                        ? y || "success" === o
                            ? !y && m.length > 0
                                ? (0, a.jsx)("div", {
                                      className: eN.E8,
                                      children: (0, a.jsx)(u.E, {
                                          variant: "body-sm/normal",
                                          color: "text-muted",
                                          children: S.intl.string(I.default["/I2lbz"]),
                                      }),
                                  })
                                : null
                            : (0, a.jsx)("div", { className: eN.E8, children: (0, a.jsx)(er.y, {}) })
                        : (0, a.jsxs)("div", {
                              className: eN.E8,
                              children: [
                                  (0, a.jsx)(u.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: S.intl.string(I.default.DJAPMO),
                                  }),
                                  (0, a.jsx)(H.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: S.intl.string(I.default["WFJ/vb"]),
                                      onClick: () => (0, N.listProjects)(s),
                                  }),
                              ],
                          }),
                ],
            }),
            m.length > 0
                ? (0, a.jsx)("div", {
                      className: eN.qr,
                      children: (0, a.jsx)(ei.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: S.intl.formatToPlainString(I.default.vnoMFE, { count: m.length }),
                          onClick: () => (0, w.A)(null),
                      }),
                  })
                : y || "success" !== o
                  ? null
                  : (0, a.jsx)(ep.A, {}),
        ],
    });
}
var eA = s(559106),
    ew = s(783977),
    eE = s(559647),
    eC = s(531685),
    eI = s(957071),
    eS = s(34595),
    ek = s(587157),
    eP = s(200160),
    eL = s(465410);
function eO(e) {
    let { prompts: t, paused: s } = e,
        { index: l, length: r } = (function (e, t) {
            let [s, a] = n.useState(() =>
                    t ? { index: 0, length: e[0].length, phase: "holding" } : { index: 0, length: 0, phase: "typing" },
                ),
                [l, r] = n.useState(t);
            t !== l && (r(t), t && a((t) => ({ ...t, length: e[t.index].length, phase: "holding" })));
            let i = n.useRef(s.length);
            n.useLayoutEffect(() => {
                i.current = s.length;
            });
            let { index: c, phase: o } = s;
            return (
                n.useEffect(() => {
                    if (t) return;
                    let s = e[c].length;
                    if ("holding" === o) {
                        let e = window.setTimeout(() => a((e) => ({ ...e, phase: "deleting" })), 1400);
                        return () => window.clearTimeout(e);
                    }
                    let n = "typing" === o,
                        l = i.current,
                        r = performance.now(),
                        d = l,
                        u = 0,
                        m = 0;
                    return (
                        (u = requestAnimationFrame(function t(i) {
                            let o = Math.floor((i - r) / (n ? 14 : 4)),
                                h = n ? Math.min(s, l + o) : Math.max(0, l - o);
                            (h !== d && ((d = h), a((e) => ({ ...e, length: h }))),
                                n && h === s
                                    ? a((e) => ({ ...e, length: h, phase: "holding" }))
                                    : n || 0 !== h
                                      ? (u = requestAnimationFrame(t))
                                      : (m = window.setTimeout(
                                            () => a({ index: (c + 1) % e.length, length: 0, phase: "typing" }),
                                            250,
                                        )));
                        })),
                        () => {
                            (cancelAnimationFrame(u), window.clearTimeout(m));
                        }
                    );
                }, [e, t, c, o]),
                s
            );
        })(t, s);
    return (0, a.jsx)(u.E, {
        variant: "body-md/normal",
        color: "text-muted",
        className: eP.RC,
        children: t[l].slice(0, r),
    });
}
function eR(e) {
    let { prompts: t, paused: s } = e,
        l = (function (e, t) {
            let [s, a] = n.useState(0);
            return (
                n.useEffect(() => {
                    if (t || e < 2) return;
                    let s = window.setInterval(() => a((t) => (t + 1) % e), 2e3);
                    return () => window.clearInterval(s);
                }, [e, 2e3, t]),
                s
            );
        })(t.length, s);
    return (0, a.jsx)(u.E, { variant: "body-md/normal", color: "text-muted", className: eP.RC, children: t[l] });
}
function eM(e) {
    let { boxFocused: t } = e,
        s = n.useMemo(
            () =>
                W().map((e) => {
                    let { shortPrompt: t } = e;
                    return t;
                }),
            [],
        ),
        l = (0, T.bG)([K.Ay], () => K.Ay.useReducedMotion),
        r = (0, T.bG)([eC.A], () => eC.A.isFocused()),
        i = t || !r;
    return (0, a.jsx)("div", {
        className: eP.qf,
        "aria-hidden": !0,
        children: l ? (0, a.jsx)(eR, { prompts: s, paused: i }) : (0, a.jsx)(eO, { prompts: s, paused: i }),
    });
}
function e_(e) {
    let {
            idea: t,
            inputRef: s,
            onIdeaChange: l,
            onSubmit: i,
            submitting: c,
            submitDisabled: o,
            error: d,
            modelSettings: m,
            onModelSettingsChange: h,
            attachments: f,
            onImport: x,
        } = e,
        [g, v] = n.useState(!1),
        j = n.useRef(null),
        p = n.useId(),
        N = "" !== t,
        { addFiles: b, pasteFiles: A, removeAttachment: w } = f;
    n.useLayoutEffect(() => {
        let e = s.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, s]);
    let E = n.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || i());
        },
        [o, i],
    );
    return (0, a.jsxs)("div", {
        className: eP.kL,
        children: [
            (0, a.jsxs)("div", {
                ref: j,
                className: r()(eP.yk, { [eP.Sl]: null != d }),
                children: [
                    (0, a.jsxs)(u.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        className: eP.Ox,
                        children: [
                            (0, a.jsx)(eA.vN, {
                                ringTarget: j,
                                ringClassName: eP.Rg,
                                children: (0, a.jsx)("textarea", {
                                    ref: s,
                                    className: r()(eP.hF, eL.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": S.intl.string(I.default.cwrS1O),
                                    "aria-invalid": null != d,
                                    "aria-describedby": null != d ? p : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: E,
                                    onPaste: (e) => A(e),
                                    onFocus: () => v(!0),
                                    onBlur: () => v(!1),
                                }),
                            }),
                            N ? null : (0, a.jsx)(eM, { boxFocused: g }),
                        ],
                    }),
                    f.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: eP.ZO,
                              children: f.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, a.jsx)(eS.Nl, { draft: t, onRemove: w }, t.localId);
                              }),
                          })
                        : null,
                    (0, a.jsxs)("div", {
                        className: eP.KE,
                        children: [
                            (0, a.jsx)(eI.A, {
                                navId: "conjure-home-attach",
                                disabled: c,
                                buttonClassName: eP.gb,
                                iconClassName: eP.Xv,
                                onAddFiles: b,
                                onImport: x,
                            }),
                            (0, a.jsxs)("div", {
                                className: eP.Rc,
                                children: [
                                    (0, a.jsx)(ek.A, {
                                        settings: m ?? y.A4,
                                        tiers: y.lO,
                                        choices: (0, y.Pu)(),
                                        disabled: c,
                                        onChange: h,
                                        className: eP.gb,
                                        icon: (0, a.jsx)(ew.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(H.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: eE.SendMessageIcon,
                                        text: S.intl.string(I.default.bNtzxp),
                                        disabled: o,
                                        loading: c,
                                        onClick: i,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != d
                ? (0, a.jsx)(u.E, {
                      id: p,
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: d,
                  })
                : null,
        ],
    });
}
var eF = s(628284),
    eG = s(369606),
    eD = s(926268),
    eT = s(406810),
    ez = s(707554);
let eH = [
    { id: "apps", title: I.default["bvcT/Q"], description: I.default.ArcJqa },
    { id: "bots", title: I.default.KBHZfO, description: I.default.qNmKhG },
    { id: "games", title: I.default["JU01/4"], description: I.default.FXwLsv },
    { id: "automod", title: I.default["+EKk4D"], description: I.default.fpXK3z },
    { id: "overlay-widgets", title: I.default.uVOH1p, description: I.default.zm7y9u },
    { id: "profile-widgets", title: I.default.GUb2zA, description: I.default["v+F6qW"] },
];
var eq = s(651346);
function eK(e) {
    let { className: t } = e;
    return (0, a.jsx)("span", { className: r()(eq.n8, t) });
}
let eU = {
    apps: function () {
        return (0, a.jsxs)("div", {
            className: eq.x,
            children: [
                (0, a.jsxs)("div", {
                    className: eq.My,
                    children: [
                        (0, a.jsx)("span", { className: eq._w }),
                        (0, a.jsx)("span", { className: eq._w }),
                        (0, a.jsx)("span", { className: eq._w }),
                    ],
                }),
                (0, a.jsx)(eK, { className: eq.Lm }),
                (0, a.jsx)("div", {
                    className: eq.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, a.jsxs)(
                            "div",
                            {
                                className: eq.ZW,
                                children: [
                                    (0, a.jsx)("span", { className: eq.NU }),
                                    0 === e
                                        ? (0, a.jsx)(eF.y, {
                                              size: "xs",
                                              color: q.A.colors.ICON_BRAND,
                                              className: eq._6,
                                          })
                                        : null,
                                    (0, a.jsx)(eK, { className: eq.Eg }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            ],
        });
    },
    games: function () {
        return (0, a.jsxs)("div", {
            className: r()(eq.x, eq.jG),
            children: [
                (0, a.jsx)("span", { className: r()(eq.gg, eq.K1) }),
                (0, a.jsx)("span", { className: r()(eq.gg, eq.W2) }),
                (0, a.jsx)("span", { className: r()(eq.Fs, eq.A$) }),
                (0, a.jsx)("span", { className: r()(eq.Fs, eq.eP) }),
                (0, a.jsx)("span", { className: r()(eq.Fs, eq.kc) }),
                (0, a.jsx)("span", { className: r()(eq.Fs, eq.OE) }),
                (0, a.jsx)("span", { className: eq.OC }),
                (0, a.jsxs)("div", {
                    className: eq.si,
                    children: [
                        (0, a.jsx)(eG.TrophyIcon, { size: "xxs", color: q.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, a.jsx)(u.E, {
                            variant: "body-xs/semibold",
                            color: "none",
                            className: eq.o9,
                            children: 128,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eq.KQ,
                    children: [
                        (0, a.jsx)(eD.HeartIcon, { size: "xxs", color: q.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, a.jsx)(eD.HeartIcon, { size: "xxs", color: q.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, a.jsx)(eD.HeartIcon, { size: "xxs", color: q.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, a.jsxs)("div", {
            className: eq.x,
            children: [
                (0, a.jsxs)("div", {
                    className: eq.$y,
                    children: [(0, a.jsx)("span", { className: eq.m$ }), (0, a.jsx)(eK, { className: eq.Md })],
                }),
                (0, a.jsxs)("div", {
                    className: eq.iU,
                    children: [
                        (0, a.jsx)("span", {
                            className: r()(eq.my, eq.FY),
                            children: (0, a.jsx)(Z.RobotIcon, { size: "xs", color: q.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, a.jsxs)("div", {
                            className: eq.OS,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: eq.f9,
                                    children: [
                                        (0, a.jsx)(eK, { className: eq.iE }),
                                        (0, a.jsx)(u.E, {
                                            variant: "body-xs/semibold",
                                            color: "none",
                                            className: eq.AO,
                                            children: S.intl.string(I.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(eK, { className: eq.xs }),
                                (0, a.jsx)(eK, { className: eq.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, a.jsxs)("div", {
            className: r()(eq.x, eq.ME),
            children: [
                (0, a.jsx)("span", { className: eq.CK }),
                (0, a.jsxs)("div", {
                    className: eq.kI,
                    children: [
                        (0, a.jsx)("span", { className: r()(eq.my, eq.jU) }),
                        (0, a.jsx)(eK, { className: eq.iE }),
                        (0, a.jsxs)("div", {
                            className: eq.Wy,
                            children: [
                                (0, a.jsx)("div", {
                                    className: eq.M1,
                                    children: [0, 1].map((e) =>
                                        (0, a.jsxs)(
                                            "div",
                                            {
                                                className: eq.dJ,
                                                children: [
                                                    (0, a.jsx)(eK, { className: eq.cR }),
                                                    (0, a.jsx)(eK, { className: eq.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, a.jsx)("div", {
                                    className: eq.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, a.jsx)("span", { className: eq.QR }, e),
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "overlay-widgets": function () {
        return (0, a.jsxs)("div", {
            className: eq.JH,
            children: [
                (0, a.jsx)("span", { className: eq.rx }),
                (0, a.jsx)("span", { className: eq.ny }),
                (0, a.jsx)("span", { className: eq.ZH }),
                (0, a.jsx)("div", {
                    className: eq.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, a.jsxs)(
                            "div",
                            {
                                className: eq.fn,
                                children: [
                                    (0, a.jsx)("span", { className: r()(eq._h, { [eq.zY]: 0 === e }) }),
                                    (0, a.jsx)(eK, { className: eq.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, a.jsxs)("div", {
                    className: eq.Y5,
                    children: [
                        (0, a.jsx)(eT.ClockIcon, { size: "xxs", color: q.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, a.jsx)(eK, { className: eq.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, a.jsxs)("div", {
            className: eq.x,
            children: [
                (0, a.jsxs)("div", {
                    className: eq.iU,
                    children: [
                        (0, a.jsx)("span", { className: eq.my }),
                        (0, a.jsxs)("div", {
                            className: eq.OS,
                            children: [
                                (0, a.jsx)(eK, { className: eq.iE }),
                                (0, a.jsx)(eK, { className: r()(eq.xs, eq.pc) }),
                                (0, a.jsx)(eK, { className: r()(eq.Md, eq.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eq.jC,
                    children: [
                        (0, a.jsx)(X.ShieldIcon, { size: "sm", color: q.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, a.jsxs)("div", {
                            className: eq.qQ,
                            children: [
                                (0, a.jsx)(eK, { className: r()(eq.Md, eq.k8) }),
                                (0, a.jsx)(eK, { className: r()(eq.nq, eq.k8) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
};
function eW(e) {
    let { id: t } = e,
        s = eU[t];
    return (0, a.jsx)(s, {});
}
let e$ = n.memo(function () {
    let e = n.useId();
    return (0, a.jsx)("section", {
        className: eq.GG,
        "aria-labelledby": e,
        children: (0, a.jsx)(ez.F, {
            component: (0, a.jsx)(d.D, {
                id: e,
                variant: "heading-lg/medium",
                children: S.intl.string(I.default.IiQEVd),
            }),
            children: (0, a.jsx)("ul", {
                className: eq.Vg,
                children: eH.map((e) => {
                    let { id: t, title: s, description: n } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: eq.Vs,
                            children: [
                                (0, a.jsx)("div", {
                                    className: eq.Tn,
                                    "aria-hidden": !0,
                                    children: (0, a.jsx)(eW, { id: t }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: eq.pG,
                                    children: [
                                        (0, a.jsx)(d.D, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: S.intl.string(s),
                                        }),
                                        (0, a.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            children: S.intl.string(n),
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
var eB = s(73153);
(s(323874), s(14289), s(35956));
var eY = s(839214),
    eV = s(666476),
    eX = s(287111),
    eZ = s(177676);
let eJ = 1;
function eQ(e) {
    let t = (0, eZ.Ft)(e),
        s = { localId: eJ++, name: e.name, contentType: t };
    if ("too-large" === (0, eZ.R9)(e, t))
        return { file: e, draft: { ...s, status: "error", errorText: (0, eX.iW)(t) } };
    let a = eV.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...s, status: "ready", previewUrl: a } };
}
function e0(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
let e1 = (0, eY.D)(() => ({ attachments: [] }));
function e2(e) {
    e1.setState({ attachments: e });
}
function e6(e) {
    0 !== e.length && e2([...e1.getState().attachments, ...e.map(eQ)]);
}
function e9(e) {
    let { attachments: t } = e1.getState(),
        s = t.find((t) => t.draft.localId === e);
    null != s && (e0(s), e2(t.filter((e) => e !== s)));
}
function e3(e) {
    e.forEach(e0);
}
async function e8(e, t) {
    if ("fits" === (0, eZ.R9)(t, (0, eZ.Ft)(t))) return (0, v.vX)(e, t);
    let s = await (0, eZ.th)(t);
    if (null == s) throw Error("attachment over its size limit");
    return (0, v.vX)(e, s);
}
eB.h.subscribe("LOGOUT", function () {
    (e1.getState().attachments.forEach(e0), e2([]));
});
let e5 = 0;
async function e4(e, t) {
    let s = (function () {
        let { attachments: e } = e1.getState();
        return (e2([]), e);
    })();
    (0, L.I)(G, "");
    let a = e5;
    try {
        let e = await t(s);
        return (e3(s), e);
    } catch (t) {
        throw (
            e5 !== a ? e3(s) : ("" === z.A.getDraft(G) && (0, L.I)(G, e), e2([...s, ...e1.getState().attachments])), t
        );
    }
}
eB.h.subscribe("LOGOUT", () => {
    e5 += 1;
});
var e7 = s(698638),
    te = s(606128),
    tt = s(260024);
class ts extends Error {}
function ta(e) {
    let t = f.A.getGuild(e);
    return null != t && (0, F.sM)(t, "ConjureHomePage") ? "guild" : null;
}
function tn(e) {
    let t,
        s,
        l,
        { guildId: f, onConjurePage: p = !1 } = e,
        y = (0, T.bG)([z.A], () => z.A.getDraft(G));
    (0, O.N$)(y);
    let b = (0, R.A)(p ? "home" : null),
        [F, H] = n.useState(!1),
        [q, K] = n.useState(null),
        [U, $] = n.useState(null),
        [B, Y] = n.useState(() => M.w.get(_) ?? null ?? !0),
        V = n.useRef(null),
        X = n.useMemo(() => W().map((e) => ({ ...e, image: J[e.id] })), []),
        Z =
            ((t = e1.useField("attachments")),
            (s = (0, eZ.sm)(e6)),
            {
                attachments: (l = n.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= eV.lN) return e;
                            let t = (0, eZ.XV)();
                            return e.map((e, s) =>
                                s < eV.lN || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(t),
                    [t],
                )),
                addFiles: e6,
                pasteFiles: s,
                removeAttachment: e9,
                hasErrors: l.some((e) => "error" === e.draft.status),
            }),
        { attachments: Q, addFiles: ee } = Z,
        et = (function (e) {
            let { guildId: t, modelSettings: s } = e,
                [a, l] = n.useState(!1),
                r = n.useRef(!1);
            return {
                importing: a,
                importArchive: n.useCallback(
                    async (e, a) => {
                        if (r.current) return;
                        let n = (0, x.vt)(e);
                        if (null != n) return void (0, g.P0)({ text: n, variant: "critical" });
                        ((r.current = !0), l(!0));
                        try {
                            let n = (await (0, C.A)(e, t)) ?? a,
                                l = await A({
                                    guildId: t,
                                    installScope: n,
                                    modelSettings: s,
                                    start: async (t) => {
                                        try {
                                            let s = await (0, v.vX)(t, e);
                                            (0, E.P6)(t, S.intl.string(I.default["LUc7/5"]), [s]);
                                        } catch {
                                            try {
                                                await (0, N.xx)(t);
                                            } catch {}
                                            throw new k();
                                        }
                                    },
                                });
                            (0, w.A)(l, "create");
                        } catch (e) {
                            (0, g.P0)({
                                text: e instanceof k ? S.intl.string(I.default["Q+l4Hv"]) : (0, j.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((r.current = !1), l(!1));
                        }
                    },
                    [t, s],
                ),
            };
        })({ guildId: f, modelSettings: U }),
        { importArchive: es } = et,
        ea = F || et.importing,
        en = "" !== y.trim() || Q.length > 0,
        er = ea || !en || Z.hasErrors,
        ei = (0, x.yN)(n.useCallback((e) => es(e, p ? "user" : ta(f)), [es, p, f])),
        ec = n.useCallback((e) => ee(Array.from(e)), [ee]);
    (0, D.p)(V);
    let eo = n.useCallback((e) => {
            ((0, L.I)(G, e), K(null));
        }, []),
        ed = n.useCallback(
            (e) => {
                eo(e);
                let t = V.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [eo],
        ),
        eu = n.useRef(!1),
        em = n.useCallback(async () => {
            let e = y.trim();
            if (("" !== e || 0 !== Q.length) && !eu.current) {
                ((eu.current = !0), H(!0), K(null));
                try {
                    let t = await e4(y, (t) =>
                        A({
                            guildId: f,
                            installScope: p ? null : ta(f),
                            prompt: e,
                            modelSettings: U,
                            start: async (s) => {
                                let a = [];
                                if (t.length > 0)
                                    try {
                                        a = await Promise.all(
                                            t.map((e) => {
                                                let { file: t } = e;
                                                return e8(s, t);
                                            }),
                                        );
                                    } catch {
                                        throw (await (0, N.xx)(s).catch(() => void 0), new ts());
                                    }
                                (0, E.P6)(s, e, a, p ? void 0 : f);
                            },
                        }),
                    );
                    ((eu.current = !1), H(!1), (0, w.A)(t, "create"));
                } catch (e) {
                    (K(e instanceof ts ? S.intl.string(I.default["903H7m"]) : (0, j.mG)(e)), (eu.current = !1), H(!1));
                }
            }
        }, [y, U, f, p, Q]),
        eh = n.useCallback((e) => {
            (M.w.set(_, e), Y(e));
        }, []),
        ef = S.intl.string(B ? I.default.kar7jh : I.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: r()(tt.MY, te.T),
        children: (0, a.jsxs)("div", {
            className: tt.Zp,
            children: [
                (0, a.jsxs)("main", {
                    className: tt.iW,
                    children: [
                        ea
                            ? null
                            : (0, a.jsx)(m.A, {
                                  title: S.intl.string(I.default.gy7byi),
                                  description: S.intl.string(I.default["dkv/WO"]),
                                  icons: e7.ir,
                                  onDrop: ec,
                              }),
                        p
                            ? null
                            : (0, a.jsx)(P.A, {
                                  title: S.intl.string(I.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, a.jsx)(h.A.Icon, {
                                      icon: i.Z,
                                      color: "var(--icon-strong)",
                                      className: tt.FW,
                                      tooltip: ef,
                                      "aria-label": ef,
                                      selected: B,
                                      onClick: () => eh(!B),
                                  }),
                              }),
                        (0, a.jsx)(c.Ip, {
                            ref: b,
                            className: tt.XG,
                            children: (0, a.jsxs)("div", {
                                className: tt.Qs,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: r()(tt.Lv, { [tt.$O]: p }),
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: tt.ZK,
                                                children: [
                                                    (0, a.jsx)("div", {
                                                        children: (0, a.jsx)(o.E, {
                                                            type: { text: S.intl.string(I.default.y6T1Nu) },
                                                            variant: "primary",
                                                        }),
                                                    }),
                                                    (0, a.jsx)(d.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: tt.DD,
                                                        children: S.intl.string(I.default.doYpEy),
                                                    }),
                                                    (0, a.jsx)(u.E, {
                                                        variant: "body-md/normal",
                                                        color: "text-strong",
                                                        className: tt.VA,
                                                        children: S.intl.string(I.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: tt.ZK,
                                                children: [
                                                    (0, a.jsx)(e_, {
                                                        idea: y,
                                                        inputRef: V,
                                                        onIdeaChange: eo,
                                                        onSubmit: em,
                                                        submitting: ea,
                                                        submitDisabled: er,
                                                        error: q,
                                                        modelSettings: U,
                                                        onModelSettingsChange: $,
                                                        attachments: Z,
                                                        onImport: ei.open,
                                                    }),
                                                    ei.input,
                                                    (0, a.jsx)(u.E, {
                                                        variant: "footnote/normal",
                                                        color: "text-muted",
                                                        children: S.intl.string(I.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(el, { inspirations: X, onCopyPrompt: ed }),
                                    (0, a.jsx)(e$, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                B && !p ? (0, a.jsx)(eb, { guildId: f, archiveImport: et }) : null,
            ],
        }),
    });
}
