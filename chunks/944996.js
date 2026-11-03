s.d(t, { A: () => e2 });
var l = s(477900),
    n = s(582128),
    a = s(503698),
    r = s.n(a),
    i = s(97893),
    c = s(364522),
    o = s(62010),
    d = s(534514),
    u = s(834730),
    m = s(65593),
    x = s(742589),
    f = s(71393),
    h = s(949757),
    g = s(858899),
    v = s(989145),
    j = s(639519),
    p = s(322227),
    N = s(371169),
    y = s(391712);
async function b(e) {
    let { guildId: t, installScope: s, prompt: l, modelSettings: n, templateId: a } = e,
        r = await (0, N.gA)(
            null != s
                ? { guild_id: t, install_scope: s }
                : { guild_id: t, auto_install_scope: !0, prompt: (l ?? "").slice(0, 4e3) },
        );
    return ((0, p.ensureConnection)(r, { templateId: a }), (0, p.stageModelSettings)(r, n ?? y.A4), r);
}
async function A(e) {
    let { start: t, ...s } = e,
        l = await b(s);
    return (await t(l), l);
}
var E = s(381991),
    w = s(708679),
    C = s(567630),
    I = s(809526),
    S = s(105292);
class k extends Error {}
var P = s(705427),
    L = s(120234),
    R = s(398773),
    M = s(735769),
    _ = s(101766),
    O = s(506774);
let F = "ConjureProjectsPanelOpen";
var z = s(246338),
    G = s(89310),
    T = s(17928),
    D = s(821609),
    H = s(661531),
    q = s(775602),
    K = s(486020);
function U() {
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
var W = s(687966),
    $ = s(323384),
    B = s(632015),
    Z = s(31300),
    Y = s(231483),
    V = s(430392);
let X = {
        "server-calendar": "/assets/1d701ea289cc99e6.svg",
        "cowboy-chat-bot": "/assets/56e489e9c5907add.svg",
        "library-voice-channel": "/assets/5813258afff68797.svg",
        "flappy-discord": "/assets/b43659b526f2e936.svg",
        "no-yelling": "/assets/54b5cda688395473.svg",
        "what-should-we-play": "/assets/fcb9220c49b6460a.svg",
        "kd-tracker": "/assets/05c0d07952b2d93f.svg",
    },
    J = {
        games: W.GameControllerIcon,
        apps: $.k,
        profile_widget: B.f,
        overlay_widget: Z.k,
        automod: Y.ShieldIcon,
        chat_bot: V.RobotIcon,
    };
var Q = s(621466);
let ee = "data-conjure-carousel-card";
var et = s(19493);
function es(e) {
    e.preventDefault();
}
let el = n.memo(function (e) {
        let { inspiration: t, onCopyPrompt: s, repeat: n = !1 } = e,
            a = J[t.category];
        return (0, l.jsxs)("li", {
            className: et.AS,
            "aria-hidden": !!n || void 0,
            [ee]: "",
            children: [
                (0, l.jsxs)("div", {
                    className: et.rl,
                    children: [
                        (0, l.jsx)("img", {
                            className: et.my,
                            src: (0, K.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, l.jsx)(u.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: et.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: et.Nr,
                    children: [
                        (0, l.jsxs)("div", {
                            className: et.xn,
                            children: [
                                (0, l.jsx)("img", { className: et.q_, src: t.image, alt: "" }),
                                (0, l.jsx)("div", {
                                    className: et.o1,
                                    children: (0, l.jsx)(D.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: S.intl.string(I.default["6CQjTy"]),
                                        tabIndex: n ? -1 : void 0,
                                        onMouseDown: n ? es : void 0,
                                        onClick: () => s(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: et.qr,
                            children: [
                                (0, l.jsx)("div", {
                                    className: et.Yl,
                                    "aria-hidden": !0,
                                    children: (0, l.jsx)(a, { size: "md", color: H.A.colors.ICON_STRONG }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: et.PJ,
                                    children: [
                                        (0, l.jsx)(u.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t.name,
                                        }),
                                        (0, l.jsx)(u.E, {
                                            variant: "text-sm/normal",
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
    en = n.memo(function (e) {
        var t;
        let { inspirations: s, onCopyPrompt: a } = e,
            r = (0, T.bG)([q.Ay], () => q.Ay.useReducedMotion),
            i = n.useRef(null),
            c = n.useRef(null),
            o = (function (e, t, s, l) {
                let [a, r] = n.useState(1);
                return (
                    n.useLayoutEffect(() => {
                        let n = e.current,
                            a = t.current;
                        if (!l || null == n || null == a || 0 === s) return;
                        function i() {
                            if (null == n || null == a) return;
                            let e = a.querySelector(`[${ee}]`);
                            if (null == e) return;
                            let t = parseFloat(getComputedStyle(a).columnGap),
                                l = e.offsetWidth + (Number.isNaN(t) ? 0 : t);
                            l <= 0 || r(Math.max(1, Math.ceil((n.clientWidth + 2 * l) / (l * s))));
                        }
                        i();
                        let c = new ResizeObserver(i);
                        return (c.observe(n), () => c.disconnect());
                    }, [e, t, s, l]),
                    l ? a : 1
                );
            })(i, c, s.length, !r);
        return (
            (t = !r),
            n.useEffect(() => {
                let e = i.current,
                    s = c.current;
                if (null == e || null == s) return;
                let l = [],
                    n = [],
                    a = 1,
                    r = 0,
                    o = 1,
                    d = 0,
                    u = 0,
                    m = null,
                    x = !1,
                    f = !1,
                    h = document.hasFocus(),
                    g = !0;
                function v() {
                    if (null == e || null == s) return;
                    n = (l = Array.from(s.querySelectorAll(`[${ee}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
                    let i = (a = l.length > 1 ? Math.abs(l[1].offsetLeft - l[0].offsetLeft) : 1) * l.length;
                    ((r = t && i >= e.clientWidth + 2 * a ? i : 0),
                        (o = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function j() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    l.forEach((e, s) => {
                        var l, i;
                        let c,
                            u,
                            m = n[s] - t;
                        r > 0 && (m = ((((m - d * o + (l = r) / 2) % l) + l) % l) - l / 2);
                        let { angleDeg: x, dropPx: f } =
                            ((i = m / a),
                            (u =
                                (a / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((c = Math.max(-12, Math.min(12, 4 * i))) * Math.PI) / 180))),
                            { angleDeg: c, dropPx: u });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + m - n[s]}px`),
                            e.style.setProperty("--custom-conjure-home-carousel-angle", `${x}deg`),
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
                    let e = t && !x && !f && h && g;
                    e && 0 === u
                        ? ((m = null), (u = requestAnimationFrame(p)))
                        : e || 0 === u || (cancelAnimationFrame(u), (u = 0));
                }
                function y() {
                    ((x = !0), N());
                }
                function b() {
                    ((x = !1), N());
                }
                function A() {
                    ((f = !0), N());
                }
                function E(t) {
                    ((f = (0, Q.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), N());
                }
                function w() {
                    ((h = !0), N());
                }
                function C() {
                    ((h = !1), N());
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
                    e.addEventListener("focusout", E),
                    window.addEventListener("focus", w),
                    window.addEventListener("blur", C),
                    () => {
                        (cancelAnimationFrame(u),
                            I.disconnect(),
                            S.disconnect(),
                            e.removeEventListener("scroll", j),
                            e.removeEventListener("pointerenter", y),
                            e.removeEventListener("pointerleave", b),
                            e.removeEventListener("focusin", A),
                            e.removeEventListener("focusout", E),
                            window.removeEventListener("focus", w),
                            window.removeEventListener("blur", C));
                    }
                );
            }, [i, c, t]),
            (0, l.jsx)("section", {
                ref: i,
                className: r ? et.vV : et.Dk,
                "aria-label": S.intl.string(I.default.Qc4S39),
                children: (0, l.jsx)("ul", {
                    ref: c,
                    className: et.u4,
                    children: Array.from({ length: o }, (e, t) =>
                        s.map((e) =>
                            (0, l.jsx)(el, { inspiration: e, onCopyPrompt: a, repeat: t > 0 }, `${e.id}-${t}`),
                        ),
                    ),
                }),
            })
        );
    });
var ea = s(289873),
    er = s(123292),
    ei = s(441935),
    ec = s(939249),
    eo = s(847374),
    ed = s(5127);
function eu(e) {
    let { onClick: t } = e;
    return (0, l.jsxs)(ec.D, {
        className: r()(ed.ap, ed.jP),
        onClick: t,
        children: [
            (0, l.jsx)("span", { className: ed.DW, children: (0, l.jsx)(eo.a, { size: "sm", color: "currentColor" }) }),
            (0, l.jsx)(u.E, { variant: "text-md/medium", color: "none", children: S.intl.string(I.default.Im1k9X) }),
        ],
    });
}
var em = s(260498),
    ex = s(741907);
function ef(e, t) {
    return e.guild_id === t || e.preview_guild_id === t;
}
var eh = s(602991),
    eg = s(186340),
    ev = s(919485),
    ej = s(588359),
    ep = s(638693);
function eN(e) {
    let { title: t, projects: s, onSelect: a, renderProjectActions: r, onProjectContextMenu: i } = e,
        {
            visibleItems: c,
            listRef: o,
            showMore: d,
        } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                [s, l] = n.useState(8),
                a = Math.max(s, 8 * Math.ceil((t + 1) / 8)),
                r = n.useRef(null),
                i = n.useRef(null);
            return (n.useLayoutEffect(() => {
                if (null == i.current) return;
                let e = r.current?.children[i.current]?.querySelector('[role="button"], button');
                ((i.current = null), e?.focus());
            }, [a]),
            a >= e.length)
                ? { visibleItems: e, listRef: r, showMore: null }
                : {
                      visibleItems: e.slice(0, a),
                      listRef: r,
                      showMore: () => {
                          let t = a + 8;
                          (t >= e.length && (i.current = a), l(t));
                      },
                  };
        })(s);
    return (0, l.jsxs)(ev.A, {
        title: t,
        className: ep.uW,
        children: [
            (0, l.jsx)(eg.A, {
                listRef: o,
                projects: c,
                onSelect: a,
                renderProjectActions: r,
                onProjectContextMenu: i,
            }),
            null != d ? (0, l.jsx)(eu, { onClick: d }) : null,
        ],
    });
}
function ey(e) {
    let t,
        { guildId: s, archiveImport: a } = e,
        {
            mine: r,
            shared: i,
            fetchState: o,
        } = ((t = (0, ex.UU)(() => em.Ay.getOwnedProjects().filter((e) => ef(e, s)), [s])),
        {
            mine: t,
            shared: (0, ex.UU)(() => em.Ay.getSharedProjects(s), [s]),
            fetchState: (0, T.bG)([em.Ay], () => em.Ay.getGuildProjectsFetchState(s), [s]),
        }),
        m = (0, T.yK)([em.Ay], () => em.Ay.getOwnedProjects().filter((e) => !ef(e, s)), [s]),
        { importArchive: x } = a,
        f = (0, h.yN)(n.useCallback((e) => x(e, "guild"), [x])),
        g = n.useCallback((e) => (0, E.A)(e.id, "home"), []),
        v = n.useCallback((e) => (0, l.jsx)(eh.S, { project: e, guildId: s }), [s]),
        j = n.useCallback((e, t) => (0, eh.V)(e, t, s), [s]),
        p = S.intl.string(I.default.BMn2lY),
        y = r.length > 0 || i.length > 0;
    return (0, l.jsxs)("aside", {
        className: ep.pz,
        "aria-label": p,
        children: [
            (0, l.jsxs)("div", {
                className: ep.wx,
                children: [
                    (0, l.jsx)(d.D, { variant: "heading-md/semibold", color: "text-strong", children: p }),
                    (0, l.jsx)(ei.A, { importing: a.importing, onClick: f.open }),
                    f.input,
                ],
            }),
            (0, l.jsxs)(c.Ip, {
                className: ep.XG,
                children: [
                    r.length > 0
                        ? (0, l.jsx)(
                              eN,
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
                        ? (0, l.jsx)(
                              eN,
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
                                ? (0, l.jsx)("div", {
                                      className: ep.E8,
                                      children: (0, l.jsx)(u.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: S.intl.string(I.default["/I2lbz"]),
                                      }),
                                  })
                                : null
                            : (0, l.jsx)("div", { className: ep.E8, children: (0, l.jsx)(ea.y, {}) })
                        : (0, l.jsxs)("div", {
                              className: ep.E8,
                              children: [
                                  (0, l.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: S.intl.string(I.default.DJAPMO),
                                  }),
                                  (0, l.jsx)(D.$, {
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
                ? (0, l.jsx)("div", {
                      className: ep.qr,
                      children: (0, l.jsx)(er.Q, {
                          variant: "secondary",
                          textVariant: "text-sm/medium",
                          text: S.intl.formatToPlainString(I.default.vnoMFE, { count: m.length }),
                          onClick: () => (0, E.A)(null),
                      }),
                  })
                : y || "success" !== o
                  ? null
                  : (0, l.jsx)(ej.A, {}),
        ],
    });
}
var eb = s(559106),
    eA = s(783977),
    eE = s(559647),
    ew = s(531685),
    eC = s(957071),
    eI = s(34595),
    eS = s(587157),
    ek = s(200160),
    eP = s(465410);
function eL(e) {
    let { prompts: t, paused: s } = e,
        { index: a, length: r } = (function (e, t) {
            let [s, l] = n.useState(() =>
                    t ? { index: 0, length: e[0].length, phase: "holding" } : { index: 0, length: 0, phase: "typing" },
                ),
                [a, r] = n.useState(t);
            t !== a && (r(t), t && l((t) => ({ ...t, length: e[t.index].length, phase: "holding" })));
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
                        let e = window.setTimeout(() => l((e) => ({ ...e, phase: "deleting" })), 1400);
                        return () => window.clearTimeout(e);
                    }
                    let n = "typing" === o,
                        a = i.current,
                        r = performance.now(),
                        d = a,
                        u = 0,
                        m = 0;
                    return (
                        (u = requestAnimationFrame(function t(i) {
                            let o = Math.floor((i - r) / (n ? 14 : 4)),
                                x = n ? Math.min(s, a + o) : Math.max(0, a - o);
                            (x !== d && ((d = x), l((e) => ({ ...e, length: x }))),
                                n && x === s
                                    ? l((e) => ({ ...e, length: x, phase: "holding" }))
                                    : n || 0 !== x
                                      ? (u = requestAnimationFrame(t))
                                      : (m = window.setTimeout(
                                            () => l({ index: (c + 1) % e.length, length: 0, phase: "typing" }),
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
    return (0, l.jsx)(u.E, {
        variant: "text-md/normal",
        color: "text-muted",
        className: ek.RC,
        children: t[a].slice(0, r),
    });
}
function eR(e) {
    let { prompts: t, paused: s } = e,
        a = (function (e, t) {
            let [s, l] = n.useState(0);
            return (
                n.useEffect(() => {
                    if (t || e < 2) return;
                    let s = window.setInterval(() => l((t) => (t + 1) % e), 2e3);
                    return () => window.clearInterval(s);
                }, [e, 2e3, t]),
                s
            );
        })(t.length, s);
    return (0, l.jsx)(u.E, { variant: "text-md/normal", color: "text-muted", className: ek.RC, children: t[a] });
}
function eM(e) {
    let { boxFocused: t } = e,
        s = n.useMemo(
            () =>
                U().map((e) => {
                    let { shortPrompt: t } = e;
                    return t;
                }),
            [],
        ),
        a = (0, T.bG)([q.Ay], () => q.Ay.useReducedMotion),
        r = (0, T.bG)([ew.A], () => ew.A.isFocused()),
        i = t || !r;
    return (0, l.jsx)("div", {
        className: ek.qf,
        "aria-hidden": !0,
        children: a ? (0, l.jsx)(eR, { prompts: s, paused: i }) : (0, l.jsx)(eL, { prompts: s, paused: i }),
    });
}
function e_(e) {
    let {
            idea: t,
            inputRef: s,
            onIdeaChange: a,
            onSubmit: i,
            submitting: c,
            submitDisabled: o,
            error: d,
            modelSettings: m,
            onModelSettingsChange: x,
            attachments: f,
            onImport: h,
        } = e,
        [g, v] = n.useState(!1),
        j = n.useRef(null),
        p = n.useId(),
        N = "" !== t,
        { addFiles: b, pasteFiles: A, removeAttachment: E } = f;
    n.useLayoutEffect(() => {
        let e = s.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, s]);
    let w = n.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || i());
        },
        [o, i],
    );
    return (0, l.jsxs)("div", {
        className: ek.kL,
        children: [
            (0, l.jsxs)("div", {
                ref: j,
                className: r()(ek.yk, { [ek.Sl]: null != d }),
                children: [
                    (0, l.jsxs)(u.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: ek.Ox,
                        children: [
                            (0, l.jsx)(eb.vN, {
                                ringTarget: j,
                                ringClassName: ek.Rg,
                                children: (0, l.jsx)("textarea", {
                                    ref: s,
                                    className: r()(ek.hF, eP.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": S.intl.string(I.default.cwrS1O),
                                    "aria-invalid": null != d,
                                    "aria-describedby": null != d ? p : void 0,
                                    onChange: (e) => a(e.currentTarget.value),
                                    onKeyDown: w,
                                    onPaste: (e) => A(e),
                                    onFocus: () => v(!0),
                                    onBlur: () => v(!1),
                                }),
                            }),
                            N ? null : (0, l.jsx)(eM, { boxFocused: g }),
                        ],
                    }),
                    f.attachments.length > 0
                        ? (0, l.jsx)("div", {
                              className: ek.ZO,
                              children: f.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, l.jsx)(eI.Nl, { draft: t, onRemove: E }, t.localId);
                              }),
                          })
                        : null,
                    (0, l.jsxs)("div", {
                        className: ek.KE,
                        children: [
                            (0, l.jsx)(eC.A, {
                                navId: "conjure-home-attach",
                                disabled: c,
                                buttonClassName: ek.gb,
                                iconClassName: ek.Xv,
                                onAddFiles: b,
                                onImport: h,
                            }),
                            (0, l.jsxs)("div", {
                                className: ek.Rc,
                                children: [
                                    (0, l.jsx)(eS.A, {
                                        settings: m ?? y.A4,
                                        tiers: y.lO,
                                        choices: (0, y.Pu)(),
                                        disabled: c,
                                        onChange: x,
                                        className: ek.gb,
                                        icon: (0, l.jsx)(eA.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, l.jsx)(D.$, {
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
                ? (0, l.jsx)(u.E, {
                      id: p,
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: d,
                  })
                : null,
        ],
    });
}
var eO = s(628284),
    eF = s(369606),
    ez = s(926268),
    eG = s(406810),
    eT = s(707554);
let eD = [
    { id: "apps", title: I.default["bvcT/Q"], description: I.default.ArcJqa },
    { id: "bots", title: I.default.KBHZfO, description: I.default.qNmKhG },
    { id: "games", title: I.default["JU01/4"], description: I.default.FXwLsv },
    { id: "automod", title: I.default["+EKk4D"], description: I.default.fpXK3z },
    { id: "overlay-widgets", title: I.default.uVOH1p, description: I.default.zm7y9u },
    { id: "profile-widgets", title: I.default.GUb2zA, description: I.default["v+F6qW"] },
];
var eH = s(651346);
function eq(e) {
    let { className: t } = e;
    return (0, l.jsx)("span", { className: r()(eH.n8, t) });
}
let eK = {
    apps: function () {
        return (0, l.jsxs)("div", {
            className: eH.x,
            children: [
                (0, l.jsxs)("div", {
                    className: eH.My,
                    children: [
                        (0, l.jsx)("span", { className: eH._w }),
                        (0, l.jsx)("span", { className: eH._w }),
                        (0, l.jsx)("span", { className: eH._w }),
                    ],
                }),
                (0, l.jsx)(eq, { className: eH.Lm }),
                (0, l.jsx)("div", {
                    className: eH.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, l.jsxs)(
                            "div",
                            {
                                className: eH.ZW,
                                children: [
                                    (0, l.jsx)("span", { className: eH.NU }),
                                    0 === e
                                        ? (0, l.jsx)(eO.y, {
                                              size: "xs",
                                              color: H.A.colors.ICON_BRAND,
                                              className: eH._6,
                                          })
                                        : null,
                                    (0, l.jsx)(eq, { className: eH.Eg }),
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
        return (0, l.jsxs)("div", {
            className: r()(eH.x, eH.jG),
            children: [
                (0, l.jsx)("span", { className: r()(eH.gg, eH.K1) }),
                (0, l.jsx)("span", { className: r()(eH.gg, eH.W2) }),
                (0, l.jsx)("span", { className: r()(eH.Fs, eH.A$) }),
                (0, l.jsx)("span", { className: r()(eH.Fs, eH.eP) }),
                (0, l.jsx)("span", { className: r()(eH.Fs, eH.kc) }),
                (0, l.jsx)("span", { className: r()(eH.Fs, eH.OE) }),
                (0, l.jsx)("span", { className: eH.OC }),
                (0, l.jsxs)("div", {
                    className: eH.si,
                    children: [
                        (0, l.jsx)(eF.TrophyIcon, { size: "xxs", color: H.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, l.jsx)(u.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: eH.o9,
                            children: 128,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: eH.KQ,
                    children: [
                        (0, l.jsx)(ez.HeartIcon, { size: "xxs", color: H.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, l.jsx)(ez.HeartIcon, { size: "xxs", color: H.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, l.jsx)(ez.HeartIcon, { size: "xxs", color: H.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, l.jsxs)("div", {
            className: eH.x,
            children: [
                (0, l.jsxs)("div", {
                    className: eH.$y,
                    children: [(0, l.jsx)("span", { className: eH.m$ }), (0, l.jsx)(eq, { className: eH.Md })],
                }),
                (0, l.jsxs)("div", {
                    className: eH.iU,
                    children: [
                        (0, l.jsx)("span", {
                            className: r()(eH.my, eH.FY),
                            children: (0, l.jsx)(V.RobotIcon, { size: "xs", color: H.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, l.jsxs)("div", {
                            className: eH.OS,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eH.f9,
                                    children: [
                                        (0, l.jsx)(eq, { className: eH.iE }),
                                        (0, l.jsx)(u.E, {
                                            variant: "text-xs/semibold",
                                            color: "none",
                                            className: eH.AO,
                                            children: S.intl.string(I.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(eq, { className: eH.xs }),
                                (0, l.jsx)(eq, { className: eH.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, l.jsxs)("div", {
            className: r()(eH.x, eH.ME),
            children: [
                (0, l.jsx)("span", { className: eH.CK }),
                (0, l.jsxs)("div", {
                    className: eH.kI,
                    children: [
                        (0, l.jsx)("span", { className: r()(eH.my, eH.jU) }),
                        (0, l.jsx)(eq, { className: eH.iE }),
                        (0, l.jsxs)("div", {
                            className: eH.Wy,
                            children: [
                                (0, l.jsx)("div", {
                                    className: eH.M1,
                                    children: [0, 1].map((e) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: eH.dJ,
                                                children: [
                                                    (0, l.jsx)(eq, { className: eH.cR }),
                                                    (0, l.jsx)(eq, { className: eH.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, l.jsx)("div", {
                                    className: eH.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, l.jsx)("span", { className: eH.QR }, e),
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
        return (0, l.jsxs)("div", {
            className: eH.JH,
            children: [
                (0, l.jsx)("span", { className: eH.rx }),
                (0, l.jsx)("span", { className: eH.ny }),
                (0, l.jsx)("span", { className: eH.ZH }),
                (0, l.jsx)("div", {
                    className: eH.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, l.jsxs)(
                            "div",
                            {
                                className: eH.fn,
                                children: [
                                    (0, l.jsx)("span", { className: r()(eH._h, { [eH.zY]: 0 === e }) }),
                                    (0, l.jsx)(eq, { className: eH.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, l.jsxs)("div", {
                    className: eH.Y5,
                    children: [
                        (0, l.jsx)(eG.ClockIcon, { size: "xxs", color: H.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, l.jsx)(eq, { className: eH.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, l.jsxs)("div", {
            className: eH.x,
            children: [
                (0, l.jsxs)("div", {
                    className: eH.iU,
                    children: [
                        (0, l.jsx)("span", { className: eH.my }),
                        (0, l.jsxs)("div", {
                            className: eH.OS,
                            children: [
                                (0, l.jsx)(eq, { className: eH.iE }),
                                (0, l.jsx)(eq, { className: r()(eH.xs, eH.pc) }),
                                (0, l.jsx)(eq, { className: r()(eH.Md, eH.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: eH.jC,
                    children: [
                        (0, l.jsx)(Y.ShieldIcon, { size: "sm", color: H.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, l.jsxs)("div", {
                            className: eH.qQ,
                            children: [
                                (0, l.jsx)(eq, { className: r()(eH.Md, eH.k8) }),
                                (0, l.jsx)(eq, { className: r()(eH.nq, eH.k8) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
};
function eU(e) {
    let { id: t } = e,
        s = eK[t];
    return (0, l.jsx)(s, {});
}
let eW = n.memo(function () {
    let e = n.useId();
    return (0, l.jsx)("section", {
        className: eH.GG,
        "aria-labelledby": e,
        children: (0, l.jsx)(eT.F, {
            component: (0, l.jsx)(d.D, {
                id: e,
                variant: "heading-lg/medium",
                children: S.intl.string(I.default.IiQEVd),
            }),
            children: (0, l.jsx)("ul", {
                className: eH.Vg,
                children: eD.map((e) => {
                    let { id: t, title: s, description: n } = e;
                    return (0, l.jsxs)(
                        "li",
                        {
                            className: eH.Vs,
                            children: [
                                (0, l.jsx)("div", {
                                    className: eH.Tn,
                                    "aria-hidden": !0,
                                    children: (0, l.jsx)(eU, { id: t }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: eH.pG,
                                    children: [
                                        (0, l.jsx)(d.D, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: S.intl.string(s),
                                        }),
                                        (0, l.jsx)(u.E, {
                                            variant: "text-sm/normal",
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
(s(323874), s(14289), s(35956));
var e$ = s(666476),
    eB = s(287111),
    eZ = s(177676);
let eY = 1;
function eV(e) {
    let t = (0, eZ.Ft)(e),
        s = { localId: eY++, name: e.name, contentType: t };
    if ("too-large" === (0, eZ.R9)(e, t))
        return { file: e, draft: { ...s, status: "error", errorText: (0, eB.iW)(t) } };
    let l = e$.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...s, status: "ready", previewUrl: l } };
}
function eX(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function eJ(e, t) {
    if ("fits" === (0, eZ.R9)(t, (0, eZ.Ft)(t))) return (0, v.vX)(e, t);
    let s = await (0, eZ.th)(t);
    if (null == s) throw Error("attachment over its size limit");
    return (0, v.vX)(e, s);
}
var eQ = s(698638),
    e0 = s(606128),
    e1 = s(260024);
class e9 extends Error {}
function e6(e) {
    let t = f.A.getGuild(e);
    return null != t && (0, z.sM)(t, "ConjureHomePage") ? "guild" : null;
}
function e2(e) {
    let { guildId: t, onConjurePage: s = !1 } = e,
        [a, f] = n.useState(() => M.A.getHomePrompt());
    (0, L.N$)(a);
    let p = (0, _.A)(s ? "home" : null),
        [y, b] = n.useState(!1),
        [z, T] = n.useState(null),
        [D, H] = n.useState(null),
        [q, K] = n.useState(() => O.w.get(F) ?? null ?? !0),
        W = n.useRef(null),
        $ = n.useMemo(() => U().map((e) => ({ ...e, image: X[e.id] })), []),
        B = (function () {
            let [e, t] = n.useState([]),
                s = n.useRef(e);
            (n.useLayoutEffect(() => {
                s.current = e;
            }),
                n.useEffect(() => () => s.current.forEach(eX), []));
            let l = n.useCallback((e) => {
                    if (0 === e.length) return;
                    let l = e.map(eV);
                    ((s.current = [...s.current, ...l]), t(s.current));
                }, []),
                a = (0, eZ.sm)(l),
                r = n.useCallback((e) => {
                    let l = s.current.find((t) => t.draft.localId === e);
                    null != l && (eX(l), (s.current = s.current.filter((e) => e !== l)), t(s.current));
                }, []),
                i = n.useCallback(() => {
                    (s.current.forEach(eX), (s.current = []), t(s.current));
                }, []),
                c = n.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= e$.lN) return e;
                            let t = (0, eZ.XV)();
                            return e.map((e, s) =>
                                s < e$.lN || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(e),
                    [e],
                );
            return {
                attachments: c,
                addFiles: l,
                pasteFiles: a,
                removeAttachment: r,
                clear: i,
                hasErrors: c.some((e) => "error" === e.draft.status),
            };
        })(),
        { attachments: Z, addFiles: Y, clear: V } = B,
        J = (function (e) {
            let { guildId: t, modelSettings: s } = e,
                [l, a] = n.useState(!1),
                r = n.useRef(!1);
            return {
                importing: l,
                importArchive: n.useCallback(
                    async (e, l) => {
                        if (r.current) return;
                        let n = (0, h.vt)(e);
                        if (null != n) return void (0, g.P0)({ text: n, variant: "critical" });
                        ((r.current = !0), a(!0));
                        try {
                            let n = (await (0, C.A)(e, t)) ?? l,
                                a = await A({
                                    guildId: t,
                                    installScope: n,
                                    modelSettings: s,
                                    start: async (t) => {
                                        try {
                                            let s = await (0, v.vX)(t, e);
                                            (0, w.P6)(t, S.intl.string(I.default["LUc7/5"]), [s]);
                                        } catch {
                                            try {
                                                await (0, N.xx)(t);
                                            } catch {}
                                            throw new k();
                                        }
                                    },
                                });
                            (0, E.A)(a, "create");
                        } catch (e) {
                            (0, g.P0)({
                                text: e instanceof k ? S.intl.string(I.default["Q+l4Hv"]) : (0, j.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((r.current = !1), a(!1));
                        }
                    },
                    [t, s],
                ),
            };
        })({ guildId: t, modelSettings: D }),
        { importArchive: Q } = J,
        ee = y || J.importing,
        et = "" !== a.trim() || Z.length > 0,
        es = ee || !et || B.hasErrors,
        el = (0, h.yN)(n.useCallback((e) => Q(e, s ? "user" : e6(t)), [Q, s, t])),
        ea = n.useCallback((e) => Y(Array.from(e)), [Y]);
    (0, G.p)(W);
    let er = n.useCallback((e) => {
            (f(e), (0, R.fZ)(e), T(null));
        }, []),
        ei = n.useCallback(
            (e) => {
                er(e);
                let t = W.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [er],
        ),
        ec = n.useRef(!1),
        eo = n.useCallback(async () => {
            let e = a.trim();
            if (("" !== e || 0 !== Z.length) && !ec.current) {
                ((ec.current = !0), b(!0), T(null));
                try {
                    let l = await A({
                        guildId: t,
                        installScope: s ? null : e6(t),
                        prompt: e,
                        modelSettings: D,
                        start: async (l) => {
                            let n = [];
                            if (Z.length > 0)
                                try {
                                    n = await Promise.all(
                                        Z.map((e) => {
                                            let { file: t } = e;
                                            return eJ(l, t);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, N.xx)(l).catch(() => void 0), new e9());
                                }
                            ((0, w.P6)(l, e, n, s ? void 0 : t), V());
                        },
                    });
                    (f(""), (0, R.fZ)(""), (ec.current = !1), b(!1), (0, E.A)(l, "create"));
                } catch (e) {
                    (T(e instanceof e9 ? S.intl.string(I.default["903H7m"]) : (0, j.mG)(e)), (ec.current = !1), b(!1));
                }
            }
        }, [a, D, t, s, Z, V]),
        ed = n.useCallback((e) => {
            (O.w.set(F, e), K(e));
        }, []),
        eu = S.intl.string(q ? I.default.kar7jh : I.default.WSc5Y2);
    return (0, l.jsx)("div", {
        className: r()(e1.MY, e0.T),
        children: (0, l.jsxs)("div", {
            className: e1.Zp,
            children: [
                (0, l.jsxs)("main", {
                    className: e1.iW,
                    children: [
                        ee
                            ? null
                            : (0, l.jsx)(m.A, {
                                  title: S.intl.string(I.default.gy7byi),
                                  description: S.intl.string(I.default["dkv/WO"]),
                                  icons: eQ.ir,
                                  onDrop: ea,
                              }),
                        s
                            ? null
                            : (0, l.jsx)(P.A, {
                                  title: S.intl.string(I.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, l.jsx)(x.A.Icon, {
                                      icon: i.Z,
                                      color: "var(--icon-strong)",
                                      className: e1.FW,
                                      tooltip: eu,
                                      "aria-label": eu,
                                      selected: q,
                                      onClick: () => ed(!q),
                                  }),
                              }),
                        (0, l.jsx)(c.Ip, {
                            ref: p,
                            className: e1.XG,
                            children: (0, l.jsxs)("div", {
                                className: e1.Qs,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: r()(e1.Lv, { [e1.$O]: s }),
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: e1.ZK,
                                                children: [
                                                    (0, l.jsx)("div", {
                                                        children: (0, l.jsx)(o.E, {
                                                            type: { text: S.intl.string(I.default.y6T1Nu) },
                                                            variant: "primary",
                                                        }),
                                                    }),
                                                    (0, l.jsx)(d.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: e1.DD,
                                                        children: S.intl.string(I.default.doYpEy),
                                                    }),
                                                    (0, l.jsx)(u.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: e1.VA,
                                                        children: S.intl.string(I.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: e1.ZK,
                                                children: [
                                                    (0, l.jsx)(e_, {
                                                        idea: a,
                                                        inputRef: W,
                                                        onIdeaChange: er,
                                                        onSubmit: eo,
                                                        submitting: ee,
                                                        submitDisabled: es,
                                                        error: z,
                                                        modelSettings: D,
                                                        onModelSettingsChange: H,
                                                        attachments: B,
                                                        onImport: el.open,
                                                    }),
                                                    el.input,
                                                    (0, l.jsx)(u.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: S.intl.string(I.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(en, { inspirations: $, onCopyPrompt: ei }),
                                    (0, l.jsx)(eW, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                q && !s ? (0, l.jsx)(ey, { guildId: t, archiveImport: J }) : null,
            ],
        }),
    });
}
