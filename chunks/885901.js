s.d(t, { A: () => te });
var n = s(477900),
    a = s(582128),
    l = s(503698),
    r = s.n(l),
    i = s(97893),
    c = s(95362),
    o = s(805251),
    d = s(534514),
    u = s(834730),
    m = s(821609),
    h = s(65593),
    f = s(742589),
    x = s(949757),
    v = s(858899),
    g = s(989145),
    j = s(540665),
    p = s(639519),
    N = s(233470),
    y = s(391712);
async function b(e) {
    let { start: t, ...s } = e,
        n = await (async function (e) {
            let { guildId: t, modelSettings: s, templateId: n } = e,
                a = await (0, N.gA)(null != t ? { guild_id: t } : {});
            return ((0, j.ensureConnection)(a, { templateId: n }), (0, j.r2)(a, s ?? y.A4), a);
        })(s);
    return (await t(n), n);
}
var A = s(381991),
    E = s(191850),
    w = s(792996);
class C extends Error {}
var I = s(705427),
    S = s(347111),
    k = s(120234),
    P = s(101766),
    L = s(16619),
    R = s(506774);
let O = "ConjureProjectsPanelOpen",
    M = "conjure-home";
var F = s(89310),
    _ = s(855986),
    D = s(89222),
    G = s(646514),
    z = s(775602),
    T = s(486020);
function q() {
    return [
        {
            id: "server-calendar",
            category: "apps",
            shortPrompt: w.intl.string(E.default.qbaf5O),
            fullPrompt: w.intl.string(E.default.vo1ZBs),
            name: w.intl.string(E.default.Zx7B6B),
            authorAvatarSeed: "1",
        },
        {
            id: "cowboy-chat-bot",
            category: "chat_bot",
            shortPrompt: w.intl.string(E.default.i0y7Ld),
            fullPrompt: w.intl.string(E.default.Hddwvt),
            name: w.intl.string(E.default.dLyihE),
            authorAvatarSeed: "2",
        },
        {
            id: "library-voice-channel",
            category: "games",
            shortPrompt: w.intl.string(E.default.vYjIS6),
            fullPrompt: w.intl.string(E.default["4pASEG"]),
            name: w.intl.string(E.default.e8Jbz3),
            authorAvatarSeed: "3",
        },
        {
            id: "flappy-discord",
            category: "games",
            shortPrompt: w.intl.string(E.default.gtX7tS),
            fullPrompt: w.intl.string(E.default["Sfa50+"]),
            name: w.intl.string(E.default.Tbag5k),
            authorAvatarSeed: "4",
        },
        {
            id: "no-yelling",
            category: "automod",
            shortPrompt: w.intl.string(E.default.H8fuGK),
            fullPrompt: w.intl.string(E.default.XuiHpi),
            name: w.intl.string(E.default["5XJ55E"]),
            authorAvatarSeed: "5",
        },
        {
            id: "what-should-we-play",
            category: "apps",
            shortPrompt: w.intl.string(E.default.tZv5cM),
            fullPrompt: w.intl.string(E.default.qd87yI),
            name: w.intl.string(E.default["7KvZ91"]),
            authorAvatarSeed: "6",
        },
        {
            id: "kd-tracker",
            category: "overlay_widget",
            shortPrompt: w.intl.string(E.default.tqEROk),
            fullPrompt: w.intl.string(E.default.yym7Yj),
            name: w.intl.string(E.default.vRpB6m),
            authorAvatarSeed: "7",
        },
    ];
}
var H = s(687966),
    K = s(323384),
    W = s(632015),
    U = s(31300),
    $ = s(231483),
    B = s(430392);
let Y = {
        "server-calendar": "/assets/1d701ea289cc99e6.svg",
        "cowboy-chat-bot": "/assets/56e489e9c5907add.svg",
        "library-voice-channel": "/assets/5813258afff68797.svg",
        "flappy-discord": "/assets/b43659b526f2e936.svg",
        "no-yelling": "/assets/54b5cda688395473.svg",
        "what-should-we-play": "/assets/fcb9220c49b6460a.svg",
        "kd-tracker": "/assets/05c0d07952b2d93f.svg",
    },
    Z = {
        games: H.GameControllerIcon,
        apps: K.AppsIcon,
        profile_widget: W.WidgetsIcon,
        overlay_widget: U.ScreenIcon,
        automod: $.ShieldIcon,
        chat_bot: B.RobotIcon,
    };
var X = s(621466);
let V = "data-conjure-carousel-card";
var J = s(19493);
function Q(e) {
    e.preventDefault();
}
let ee = a.memo(function (e) {
        let { inspiration: t, onCopyPrompt: s, repeat: a = !1 } = e,
            l = Z[t.category];
        return (0, n.jsxs)("li", {
            className: J.AS,
            "aria-hidden": !!a || void 0,
            [V]: "",
            children: [
                (0, n.jsxs)("div", {
                    className: J.rl,
                    children: [
                        (0, n.jsx)("img", {
                            className: J.my,
                            src: (0, T.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, n.jsx)(u.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            className: J.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: J.Nr,
                    children: [
                        (0, n.jsxs)("div", {
                            className: J.xn,
                            children: [
                                (0, n.jsx)("img", { className: J.q_, src: t.image, alt: "" }),
                                (0, n.jsx)("div", {
                                    className: J.o1,
                                    children: (0, n.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: w.intl.string(E.default["6CQjTy"]),
                                        tabIndex: a ? -1 : void 0,
                                        onMouseDown: a ? Q : void 0,
                                        onClick: () => s(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: J.qr,
                            children: [
                                (0, n.jsx)("div", {
                                    className: J.Yl,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(l, { size: "md", color: G.A.colors.ICON_STRONG }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: J.PJ,
                                    children: [
                                        (0, n.jsx)(u.E, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t.name,
                                        }),
                                        (0, n.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: (function (e) {
                                                switch (e) {
                                                    case "games":
                                                        return w.intl.string(E.default["JU01/4"]);
                                                    case "apps":
                                                        return w.intl.string(E.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return w.intl.string(E.default.GUb2zA);
                                                    case "overlay_widget":
                                                        return w.intl.string(E.default.uVOH1p);
                                                    case "automod":
                                                        return w.intl.string(E.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return w.intl.string(E.default.KBHZfO);
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
    et = a.memo(function (e) {
        var t;
        let { inspirations: s, onCopyPrompt: l } = e,
            r = (0, _.bG)([z.Ay], () => z.Ay.useReducedMotion),
            i = a.useRef(null),
            c = a.useRef(null),
            o = (function (e, t, s, n) {
                let [l, r] = a.useState(1);
                return (
                    a.useLayoutEffect(() => {
                        let a = e.current,
                            l = t.current;
                        if (!n || null == a || null == l || 0 === s) return;
                        function i() {
                            if (null == a || null == l) return;
                            let e = l.querySelector(`[${V}]`);
                            if (null == e) return;
                            let t = parseFloat(getComputedStyle(l).columnGap),
                                n = e.offsetWidth + (Number.isNaN(t) ? 0 : t);
                            n <= 0 || r(Math.max(1, Math.ceil((a.clientWidth + 2 * n) / (n * s))));
                        }
                        i();
                        let c = new ResizeObserver(i);
                        return (c.observe(a), () => c.disconnect());
                    }, [e, t, s, n]),
                    n ? l : 1
                );
            })(i, c, s.length, !r);
        return (
            (t = !r),
            a.useEffect(() => {
                let e = i.current,
                    s = c.current;
                if (null == e || null == s) return;
                let n = [],
                    a = [],
                    l = 1,
                    r = 0,
                    o = 1,
                    d = 0,
                    u = 0,
                    m = null,
                    h = !1,
                    f = !1,
                    x = document.hasFocus(),
                    v = !0;
                function g() {
                    if (null == e || null == s) return;
                    a = (n = Array.from(s.querySelectorAll(`[${V}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
                    let i = (l = n.length > 1 ? Math.abs(n[1].offsetLeft - n[0].offsetLeft) : 1) * n.length;
                    ((r = t && i >= e.clientWidth + 2 * l ? i : 0),
                        (o = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function j() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    n.forEach((e, s) => {
                        var n, i;
                        let c,
                            u,
                            m = a[s] - t;
                        r > 0 && (m = ((((m - d * o + (n = r) / 2) % n) + n) % n) - n / 2);
                        let { angleDeg: h, dropPx: f } =
                            ((i = m / l),
                            (u =
                                (l / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((c = Math.max(-12, Math.min(12, 4 * i))) * Math.PI) / 180))),
                            { angleDeg: c, dropPx: u });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + m - a[s]}px`),
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
                    let e = t && !h && !f && x && v;
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
                function E(t) {
                    ((f = (0, X.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), N());
                }
                function w() {
                    ((x = !0), N());
                }
                function C() {
                    ((x = !1), N());
                }
                (g(), j(), N());
                let I = new ResizeObserver(() => {
                    (g(), j());
                });
                (I.observe(e), I.observe(s));
                let S = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((v = t.isIntersecting), N());
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
            (0, n.jsx)("section", {
                ref: i,
                className: r ? J.vV : J.Dk,
                "aria-label": w.intl.string(E.default.Qc4S39),
                children: (0, n.jsx)("ul", {
                    ref: c,
                    className: J.u4,
                    children: Array.from({ length: o }, (e, t) =>
                        s.map((e) =>
                            (0, n.jsx)(ee, { inspiration: e, onCopyPrompt: l, repeat: t > 0 }, `${e.id}-${t}`),
                        ),
                    ),
                }),
            })
        );
    });
var es = s(683438),
    en = s(289873),
    ea = s(123292),
    el = s(441935),
    er = s(939249),
    ei = s(847374),
    ec = s(5127);
function eo(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(er.D, {
        className: r()(ec.ap, ec.jP),
        onClick: t,
        children: [
            (0, n.jsx)("span", {
                className: ec.DW,
                children: (0, n.jsx)(ei.ChevronSmallDownIcon, { size: "sm", color: "currentColor" }),
            }),
            (0, n.jsx)(u.E, { variant: "body-md/medium", color: "none", children: w.intl.string(E.default.Im1k9X) }),
        ],
    });
}
var ed = s(996485),
    eu = s(260498),
    em = s(313537),
    eh = s(615890);
function ef(e) {
    return [...eu.Ay.getOwnedProjects(), ...eu.Ay.getSharedProjects(e)].filter((t) => (0, em.fL)(t) === e);
}
var ex = s(602991),
    ev = s(685105),
    eg = s(588359),
    ej = s(638693);
function ep(e) {
    let { title: t, children: s } = e,
        l = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": null != t ? l : void 0,
        className: ej.uW,
        children: [
            null != t
                ? (0, n.jsx)(u.E, {
                      id: l,
                      variant: "body-sm/medium",
                      color: "text-muted",
                      className: ej.Gf,
                      role: "heading",
                      "aria-level": 3,
                      children: t,
                  })
                : null,
            s,
        ],
    });
}
function eN(e) {
    let { projects: t, ...s } = e,
        {
            visibleItems: l,
            listRef: r,
            showMore: i,
        } = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                [s, n] = a.useState(8),
                l = Math.max(s, 8 * Math.ceil((t + 1) / 8)),
                r = a.useRef(null),
                i = a.useRef(null);
            return (a.useLayoutEffect(() => {
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
                          (t >= e.length && (i.current = l), n(t));
                      },
                  };
        })(t);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ev.A, { listRef: r, projects: l, ...s }),
            null != i ? (0, n.jsx)(eo, { onClick: i }) : null,
        ],
    });
}
function ey(e) {
    let t,
        { guildId: s, archiveImport: l } = e,
        {
            participating: r,
            shared: i,
            fetchState: o,
        } = ((t = (0, eh.U)(() => ef(s).filter((e) => eu.Ay.isRailProject(e)), [s])),
        {
            participating: t,
            shared: (0, eh.U)(() => ef(s).filter((e) => !eu.Ay.isRailProject(e)), [s]),
            fetchState: (0, _.bG)([eu.Ay], () => eu.Ay.getGuildProjectsFetchState(s), [s]),
        }),
        h = (0, _.yK)([eu.Ay], () => eu.Ay.getOwnedProjects().filter((e) => (0, em.fL)(e) !== s), [s]),
        [f, v] = a.useState(""),
        g = a.useMemo(() => (0, ed.Z)(r, f), [r, f]),
        j = a.useMemo(() => (0, ed.Z)(i, f), [i, f]),
        p = l?.importArchive,
        y = (0, x.yN)(a.useCallback((e) => p?.(e), [p])),
        b = a.useCallback((e) => (0, A.A)(e.id, "home"), []),
        C = a.useCallback((e) => (0, n.jsx)(ex.S, { project: e, guildId: s }), [s]),
        I = a.useCallback((e, t) => (0, ex.V)(e, t, s), [s]),
        S = w.intl.string(E.default.BMn2lY),
        k = r.length > 0 || i.length > 0;
    return (0, n.jsxs)("aside", {
        className: ej.pz,
        "aria-label": S,
        children: [
            (0, n.jsxs)("div", {
                className: ej.wx,
                children: [
                    (0, n.jsx)(d.D, { variant: "heading-sm/semibold", color: "text-strong", children: S }),
                    null != l ? (0, n.jsx)(el.A, { importing: l.importing, onClick: y.open }) : null,
                    y.input,
                ],
            }),
            (0, n.jsxs)(c.Ip, {
                className: ej.XG,
                fade: !0,
                children: [
                    k
                        ? (0, n.jsx)("div", {
                              className: ej.$P,
                              children: (0, n.jsx)(es.I, {
                                  query: f,
                                  onChange: v,
                                  onClear: () => v(""),
                                  size: "sm",
                                  placeholder: w.intl.string(E.default["2y8sUh"]),
                                  "aria-label": w.intl.string(E.default.u0kEN9),
                              }),
                          })
                        : null,
                    g.length > 0
                        ? (0, n.jsx)(
                              ep,
                              {
                                  title: null,
                                  children: (0, n.jsx)(eN, {
                                      projects: g,
                                      onSelect: b,
                                      renderProjectActions: C,
                                      onProjectContextMenu: I,
                                  }),
                              },
                              `${s}-participating`,
                          )
                        : null,
                    j.length > 0
                        ? (0, n.jsx)(ep, {
                              title: w.intl.string(E.default.YHDMK6),
                              children: (0, n.jsx)(ev.A, {
                                  projects: j,
                                  onSelect: b,
                                  renderProjectActions: C,
                                  onProjectContextMenu: I,
                              }),
                          })
                        : null,
                    k && 0 === g.length && 0 === j.length
                        ? (0, n.jsx)(u.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              className: ej.WD,
                              children: w.intl.string(E.default.X37fkR),
                          })
                        : k || "error" !== o
                          ? k || "success" === o
                              ? !k && h.length > 0
                                  ? (0, n.jsx)("div", {
                                        className: ej.E8,
                                        children: (0, n.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: w.intl.string(E.default["/I2lbz"]),
                                        }),
                                    })
                                  : null
                              : (0, n.jsx)("div", { className: ej.E8, children: (0, n.jsx)(en.y, {}) })
                          : (0, n.jsxs)("div", {
                                className: ej.E8,
                                children: [
                                    (0, n.jsx)(u.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: w.intl.string(E.default.DJAPMO),
                                    }),
                                    (0, n.jsx)(m.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: w.intl.string(E.default["WFJ/vb"]),
                                        onClick: () => (0, N.listProjects)(s),
                                    }),
                                ],
                            }),
                ],
            }),
            h.length > 0
                ? (0, n.jsx)("div", {
                      className: ej.qr,
                      children: (0, n.jsx)(ea.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: w.intl.formatToPlainString(E.default.vnoMFE, { count: h.length }),
                          onClick: () => (0, A.A)(null),
                      }),
                  })
                : k || "success" !== o
                  ? null
                  : (0, n.jsx)(eg.A, {}),
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
        { index: l, length: r } = (function (e, t) {
            let [s, n] = a.useState(() =>
                    t ? { index: 0, length: e[0].length, phase: "holding" } : { index: 0, length: 0, phase: "typing" },
                ),
                [l, r] = a.useState(t);
            t !== l && (r(t), t && n((t) => ({ ...t, length: e[t.index].length, phase: "holding" })));
            let i = a.useRef(s.length);
            a.useLayoutEffect(() => {
                i.current = s.length;
            });
            let { index: c, phase: o } = s;
            return (
                a.useEffect(() => {
                    if (t) return;
                    let s = e[c].length;
                    if ("holding" === o) {
                        let e = window.setTimeout(() => n((e) => ({ ...e, phase: "deleting" })), 1400);
                        return () => window.clearTimeout(e);
                    }
                    let a = "typing" === o,
                        l = i.current,
                        r = performance.now(),
                        d = l,
                        u = 0,
                        m = 0;
                    return (
                        (u = requestAnimationFrame(function t(i) {
                            let o = Math.floor((i - r) / (a ? 14 : 4)),
                                h = a ? Math.min(s, l + o) : Math.max(0, l - o);
                            (h !== d && ((d = h), n((e) => ({ ...e, length: h }))),
                                a && h === s
                                    ? n((e) => ({ ...e, length: h, phase: "holding" }))
                                    : a || 0 !== h
                                      ? (u = requestAnimationFrame(t))
                                      : (m = window.setTimeout(
                                            () => n({ index: (c + 1) % e.length, length: 0, phase: "typing" }),
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
    return (0, n.jsx)(u.E, {
        variant: "body-md/normal",
        color: "text-muted",
        className: ek.RC,
        children: t[l].slice(0, r),
    });
}
function eR(e) {
    let { prompts: t, paused: s } = e,
        l = (function (e, t) {
            let [s, n] = a.useState(0);
            return (
                a.useEffect(() => {
                    if (t || e < 2) return;
                    let s = window.setInterval(() => n((t) => (t + 1) % e), 2e3);
                    return () => window.clearInterval(s);
                }, [e, 2e3, t]),
                s
            );
        })(t.length, s);
    return (0, n.jsx)(u.E, { variant: "body-md/normal", color: "text-muted", className: ek.RC, children: t[l] });
}
function eO(e) {
    let { boxFocused: t } = e,
        s = a.useMemo(
            () =>
                q().map((e) => {
                    let { shortPrompt: t } = e;
                    return t;
                }),
            [],
        ),
        l = (0, _.bG)([z.Ay], () => z.Ay.useReducedMotion),
        r = (0, _.bG)([ew.A], () => ew.A.isFocused()),
        i = t || !r;
    return (0, n.jsx)("div", {
        className: ek.qf,
        "aria-hidden": !0,
        children: l ? (0, n.jsx)(eR, { prompts: s, paused: i }) : (0, n.jsx)(eL, { prompts: s, paused: i }),
    });
}
function eM(e) {
    let {
            idea: t,
            inputRef: s,
            onIdeaChange: l,
            onSubmit: i,
            submitting: c,
            submitDisabled: o,
            error: d,
            modelSettings: h,
            onModelSettingsChange: f,
            attachments: x,
            onImport: v,
        } = e,
        [g, j] = a.useState(!1),
        p = a.useRef(null),
        N = a.useId(),
        b = "" !== t,
        { addFiles: A, pasteFiles: C, removeAttachment: I } = x;
    a.useLayoutEffect(() => {
        let e = s.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, s]);
    let S = a.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || i());
        },
        [o, i],
    );
    return (0, n.jsxs)("div", {
        className: ek.kL,
        children: [
            (0, n.jsxs)("div", {
                ref: p,
                className: r()(ek.yk, { [ek.Sl]: null != d }),
                children: [
                    (0, n.jsxs)(u.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        className: ek.Ox,
                        children: [
                            (0, n.jsx)(eb.vN, {
                                ringTarget: p,
                                ringClassName: ek.Rg,
                                children: (0, n.jsx)("textarea", {
                                    ref: s,
                                    className: r()(ek.hF, eP.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": w.intl.string(E.default.cwrS1O),
                                    "aria-invalid": null != d,
                                    "aria-describedby": null != d ? N : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: S,
                                    onPaste: (e) => C(e),
                                    onFocus: () => j(!0),
                                    onBlur: () => j(!1),
                                }),
                            }),
                            b ? null : (0, n.jsx)(eO, { boxFocused: g }),
                        ],
                    }),
                    x.attachments.length > 0
                        ? (0, n.jsx)("div", {
                              className: ek.ZO,
                              children: x.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, n.jsx)(eI.Nl, { draft: t, onRemove: I }, t.localId);
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: ek.KE,
                        children: [
                            (0, n.jsx)(eC.A, {
                                navId: "conjure-home-attach",
                                disabled: c,
                                buttonClassName: ek.gb,
                                iconClassName: ek.Xv,
                                onAddFiles: A,
                                onImport: v,
                            }),
                            (0, n.jsxs)("div", {
                                className: ek.Rc,
                                children: [
                                    (0, n.jsx)(eS.A, {
                                        settings: h ?? y.A4,
                                        tiers: y.lO,
                                        choices: (0, y.Pu)(),
                                        disabled: c,
                                        onChange: f,
                                        className: ek.gb,
                                        icon: (0, n.jsx)(eA.FiltersHorizontalIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                        }),
                                    }),
                                    (0, n.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: eE.SendMessageIcon,
                                        text: w.intl.string(E.default.bNtzxp),
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
                ? (0, n.jsx)(u.E, {
                      id: N,
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
    e_ = s(369606),
    eD = s(926268),
    eG = s(406810),
    ez = s(707554);
let eT = [
    { id: "apps", title: E.default["bvcT/Q"], description: E.default.ArcJqa },
    { id: "bots", title: E.default.KBHZfO, description: E.default.qNmKhG },
    { id: "games", title: E.default["JU01/4"], description: E.default.FXwLsv },
    { id: "automod", title: E.default["+EKk4D"], description: E.default.fpXK3z },
    { id: "overlay-widgets", title: E.default.uVOH1p, description: E.default.zm7y9u },
    { id: "profile-widgets", title: E.default.GUb2zA, description: E.default["v+F6qW"] },
];
var eq = s(651346);
function eH(e) {
    let { className: t } = e;
    return (0, n.jsx)("span", { className: r()(eq.n8, t) });
}
let eK = {
    apps: function () {
        return (0, n.jsxs)("div", {
            className: eq.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eq.My,
                    children: [
                        (0, n.jsx)("span", { className: eq._w }),
                        (0, n.jsx)("span", { className: eq._w }),
                        (0, n.jsx)("span", { className: eq._w }),
                    ],
                }),
                (0, n.jsx)(eH, { className: eq.Lm }),
                (0, n.jsx)("div", {
                    className: eq.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: eq.ZW,
                                children: [
                                    (0, n.jsx)("span", { className: eq.NU }),
                                    0 === e
                                        ? (0, n.jsx)(eF.CircleCheckIcon, {
                                              size: "xs",
                                              color: G.A.colors.ICON_BRAND,
                                              className: eq._6,
                                          })
                                        : null,
                                    (0, n.jsx)(eH, { className: eq.Eg }),
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
        return (0, n.jsxs)("div", {
            className: r()(eq.x, eq.jG),
            children: [
                (0, n.jsx)("span", { className: r()(eq.gg, eq.K1) }),
                (0, n.jsx)("span", { className: r()(eq.gg, eq.W2) }),
                (0, n.jsx)("span", { className: r()(eq.Fs, eq.A$) }),
                (0, n.jsx)("span", { className: r()(eq.Fs, eq.eP) }),
                (0, n.jsx)("span", { className: r()(eq.Fs, eq.kc) }),
                (0, n.jsx)("span", { className: r()(eq.Fs, eq.OE) }),
                (0, n.jsx)("span", { className: eq.OC }),
                (0, n.jsxs)("div", {
                    className: eq.si,
                    children: [
                        (0, n.jsx)(e_.TrophyIcon, { size: "xxs", color: G.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, n.jsx)(u.E, {
                            variant: "body-xs/semibold",
                            color: "none",
                            className: eq.o9,
                            children: 128,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eq.KQ,
                    children: [
                        (0, n.jsx)(eD.HeartIcon, { size: "xxs", color: G.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(eD.HeartIcon, { size: "xxs", color: G.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsx)(eD.HeartIcon, { size: "xxs", color: G.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, n.jsxs)("div", {
            className: eq.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eq.$y,
                    children: [(0, n.jsx)("span", { className: eq.m$ }), (0, n.jsx)(eH, { className: eq.Md })],
                }),
                (0, n.jsxs)("div", {
                    className: eq.iU,
                    children: [
                        (0, n.jsx)("span", {
                            className: r()(eq.my, eq.FY),
                            children: (0, n.jsx)(B.RobotIcon, { size: "xs", color: G.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, n.jsxs)("div", {
                            className: eq.OS,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: eq.f9,
                                    children: [
                                        (0, n.jsx)(eH, { className: eq.iE }),
                                        (0, n.jsx)(u.E, {
                                            variant: "body-xs/semibold",
                                            color: "none",
                                            className: eq.AO,
                                            children: w.intl.string(E.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(eH, { className: eq.xs }),
                                (0, n.jsx)(eH, { className: eq.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, n.jsxs)("div", {
            className: r()(eq.x, eq.ME),
            children: [
                (0, n.jsx)("span", { className: eq.CK }),
                (0, n.jsxs)("div", {
                    className: eq.kI,
                    children: [
                        (0, n.jsx)("span", { className: r()(eq.my, eq.jU) }),
                        (0, n.jsx)(eH, { className: eq.iE }),
                        (0, n.jsxs)("div", {
                            className: eq.Wy,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eq.M1,
                                    children: [0, 1].map((e) =>
                                        (0, n.jsxs)(
                                            "div",
                                            {
                                                className: eq.dJ,
                                                children: [
                                                    (0, n.jsx)(eH, { className: eq.cR }),
                                                    (0, n.jsx)(eH, { className: eq.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, n.jsx)("div", {
                                    className: eq.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, n.jsx)("span", { className: eq.QR }, e),
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
        return (0, n.jsxs)("div", {
            className: eq.JH,
            children: [
                (0, n.jsx)("span", { className: eq.rx }),
                (0, n.jsx)("span", { className: eq.ny }),
                (0, n.jsx)("span", { className: eq.ZH }),
                (0, n.jsx)("div", {
                    className: eq.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: eq.fn,
                                children: [
                                    (0, n.jsx)("span", { className: r()(eq._h, { [eq.zY]: 0 === e }) }),
                                    (0, n.jsx)(eH, { className: eq.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, n.jsxs)("div", {
                    className: eq.Y5,
                    children: [
                        (0, n.jsx)(eG.ClockIcon, { size: "xxs", color: G.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, n.jsx)(eH, { className: eq.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, n.jsxs)("div", {
            className: eq.x,
            children: [
                (0, n.jsxs)("div", {
                    className: eq.iU,
                    children: [
                        (0, n.jsx)("span", { className: eq.my }),
                        (0, n.jsxs)("div", {
                            className: eq.OS,
                            children: [
                                (0, n.jsx)(eH, { className: eq.iE }),
                                (0, n.jsx)(eH, { className: r()(eq.xs, eq.pc) }),
                                (0, n.jsx)(eH, { className: r()(eq.Md, eq.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eq.jC,
                    children: [
                        (0, n.jsx)($.ShieldIcon, { size: "sm", color: G.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, n.jsxs)("div", {
                            className: eq.qQ,
                            children: [
                                (0, n.jsx)(eH, { className: r()(eq.Md, eq.k8) }),
                                (0, n.jsx)(eH, { className: r()(eq.nq, eq.k8) }),
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
        s = eK[t];
    return (0, n.jsx)(s, {});
}
let eU = a.memo(function () {
    let e = a.useId();
    return (0, n.jsx)("section", {
        className: eq.GG,
        "aria-labelledby": e,
        children: (0, n.jsx)(ez.F, {
            component: (0, n.jsx)(d.D, {
                id: e,
                variant: "heading-lg/medium",
                children: w.intl.string(E.default.IiQEVd),
            }),
            children: (0, n.jsx)("ul", {
                className: eq.Vg,
                children: eT.map((e) => {
                    let { id: t, title: s, description: a } = e;
                    return (0, n.jsxs)(
                        "li",
                        {
                            className: eq.Vs,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eq.Tn,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(eW, { id: t }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: eq.pG,
                                    children: [
                                        (0, n.jsx)(d.D, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: w.intl.string(s),
                                        }),
                                        (0, n.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            children: w.intl.string(a),
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
var e$ = s(73153);
(s(323874), s(14289), s(35956));
var eB = s(839214),
    eY = s(666476),
    eZ = s(287111),
    eX = s(466280);
let eV = 1;
function eJ(e) {
    let t = (0, eX.Ft)(e),
        s = { localId: eV++, name: e.name, contentType: t };
    if ("too-large" === (0, eX.R9)(e, t))
        return { file: e, draft: { ...s, status: "error", errorText: (0, eZ.iW)(t) } };
    let n = eY.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...s, status: "ready", previewUrl: n } };
}
function eQ(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
let e0 = (0, eB.D)(() => ({ attachments: [] }));
function e1(e) {
    e0.setState({ attachments: e });
}
function e9(e) {
    0 !== e.length && e1([...e0.getState().attachments, ...e.map(eJ)]);
}
function e5(e) {
    let { attachments: t } = e0.getState(),
        s = t.find((t) => t.draft.localId === e);
    null != s && (eQ(s), e1(t.filter((e) => e !== s)));
}
function e6(e) {
    e.forEach(eQ);
}
e$.h.subscribe("LOGOUT", function () {
    (e0.getState().attachments.forEach(eQ), e1([]));
});
let e2 = 0;
e$.h.subscribe("LOGOUT", () => {
    e2 += 1;
});
var e8 = s(698638),
    e3 = s(606128),
    e4 = s(260024);
class e7 extends Error {}
function te(e) {
    var t;
    let s,
        l,
        y,
        { guildId: G, onConjurePage: z = !1 } = e,
        T = (0, _.bG)([D.A], () => D.A.getDraft(M));
    (0, k.N$)(T);
    let H = (0, P.A)(z ? "home" : null),
        [K, W] = a.useState(!1),
        [U, $] = a.useState(null),
        [B, Z] = a.useState(null),
        [X, V] = a.useState(() => R.w.get(O) ?? null ?? !0),
        J = a.useRef(null),
        Q = a.useMemo(() => q().map((e) => ({ ...e, image: Y[e.id] })), []),
        ee =
            ((s = e0.useField("attachments")),
            (l = (0, eX.sm)(e9)),
            {
                attachments: (y = a.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= 10) return e;
                            let t = (0, eX.XV)();
                            return e.map((e, s) =>
                                s < 10 || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(s),
                    [s],
                )),
                addFiles: e9,
                pasteFiles: l,
                removeAttachment: e5,
                hasErrors: y.some((e) => "error" === e.draft.status),
            }),
        { attachments: es, addFiles: en } = ee,
        ea = z ? null : G,
        el = ((t = (0, L.z9)("ConjureHomePage")), t.some((e) => e.id === G) || z),
        er = (function (e) {
            let { guildId: t, modelSettings: s } = e,
                [n, l] = a.useState(!1),
                r = a.useRef(!1);
            return {
                importing: n,
                importArchive: a.useCallback(
                    async (e) => {
                        if (r.current) return;
                        let n = (0, x.vt)(e);
                        if (null != n) return void (0, v.P0)({ text: n, variant: "critical" });
                        ((r.current = !0), l(!0));
                        try {
                            let n = await b({
                                guildId: t,
                                modelSettings: s,
                                start: async (t) => {
                                    try {
                                        let s = await (0, g.vX)(t, e);
                                        (0, j.dv)(t, w.intl.string(E.default["LUc7/5"]), [s]);
                                    } catch {
                                        try {
                                            await (0, N.xx)(t);
                                        } catch {}
                                        throw new C();
                                    }
                                },
                            });
                            (0, A.A)(n, "create");
                        } catch (e) {
                            (0, v.P0)({
                                text: e instanceof C ? w.intl.string(E.default["Q+l4Hv"]) : (0, p.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((r.current = !1), l(!1));
                        }
                    },
                    [t, s],
                ),
            };
        })({ guildId: ea, modelSettings: B }),
        { importArchive: ei } = er,
        ec = K || er.importing,
        eo = "" !== T.trim() || es.length > 0,
        ed = ec || !eo || ee.hasErrors,
        eu = (0, x.yN)(ei),
        em = a.useCallback((e) => en(Array.from(e)), [en]);
    (0, F.p)(J);
    let eh = a.useCallback((e) => {
            ((0, S.I)(M, e), $(null));
        }, []),
        ef = a.useCallback(
            (e) => {
                eh(e);
                let t = J.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [eh],
        ),
        ex = a.useRef(!1),
        ev = a.useCallback(async () => {
            let e = T.trim();
            if (("" !== e || 0 !== es.length) && !ex.current) {
                ((ex.current = !0), W(!0), $(null));
                try {
                    let t = await (async function (e, t) {
                        let s = (function () {
                            let { attachments: e } = e0.getState();
                            return (e1([]), e);
                        })();
                        (0, S.I)(M, "");
                        let n = e2;
                        try {
                            let e = await t(s);
                            return (e6(s), e);
                        } catch (t) {
                            throw (
                                e2 !== n
                                    ? e6(s)
                                    : ("" === D.A.getDraft(M) && (0, S.I)(M, e),
                                      e1([...s, ...e0.getState().attachments])),
                                t
                            );
                        }
                    })(T, (t) =>
                        b({
                            guildId: ea,
                            modelSettings: B,
                            start: async (s) => {
                                let n = [];
                                if (t.length > 0)
                                    try {
                                        n = await Promise.all(
                                            t.map((e) => {
                                                let { file: t } = e;
                                                return (async function (e, t) {
                                                    if ("fits" === (0, eX.R9)(t, (0, eX.Ft)(t))) return (0, g.vX)(e, t);
                                                    let s = await (0, eX.th)(t);
                                                    if (null == s) throw Error("attachment over its size limit");
                                                    return (0, g.vX)(e, s);
                                                })(s, t);
                                            }),
                                        );
                                    } catch {
                                        throw (await (0, N.xx)(s).catch(() => void 0), new e7());
                                    }
                                (0, j.dv)(s, e, n);
                            },
                        }),
                    );
                    ((ex.current = !1), W(!1), (0, A.A)(t, "create"));
                } catch (e) {
                    ($(e instanceof e7 ? w.intl.string(E.default["903H7m"]) : (0, p.mG)(e)), (ex.current = !1), W(!1));
                }
            }
        }, [T, B, ea, es]),
        eg = a.useCallback((e) => {
            (R.w.set(O, e), V(e));
        }, []),
        ej = w.intl.string(X ? E.default.kar7jh : E.default.WSc5Y2);
    return (0, n.jsx)("div", {
        className: r()(e4.MY, e3.T),
        children: (0, n.jsxs)("div", {
            className: e4.Zp,
            children: [
                (0, n.jsxs)("main", {
                    className: e4.iW,
                    children: [
                        ec || !el
                            ? null
                            : (0, n.jsx)(h.A, {
                                  title: w.intl.string(E.default.gy7byi),
                                  description: w.intl.string(E.default["dkv/WO"]),
                                  icons: e8.ir,
                                  onDrop: em,
                              }),
                        z
                            ? null
                            : (0, n.jsx)(I.A, {
                                  title: w.intl.string(E.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, n.jsx)(f.A.Icon, {
                                      icon: i.MenuIcon,
                                      color: "var(--icon-strong)",
                                      className: e4.FW,
                                      tooltip: ej,
                                      "aria-label": ej,
                                      selected: X,
                                      onClick: () => eg(!X),
                                  }),
                              }),
                        (0, n.jsx)(c.Ip, {
                            ref: H,
                            className: e4.XG,
                            children: (0, n.jsxs)("div", {
                                className: e4.Qs,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: r()(e4.Lv, { [e4.$O]: z }),
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: e4.ZK,
                                                children: [
                                                    (0, n.jsx)("div", {
                                                        children: (0, n.jsx)(o.E, {
                                                            type: { text: w.intl.string(E.default.y6T1Nu) },
                                                            variant: "primary",
                                                        }),
                                                    }),
                                                    (0, n.jsx)(d.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: e4.DD,
                                                        children: w.intl.string(E.default.doYpEy),
                                                    }),
                                                    (0, n.jsx)(u.E, {
                                                        variant: "body-md/normal",
                                                        color: "text-strong",
                                                        className: e4.VA,
                                                        children: w.intl.string(E.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            el
                                                ? (0, n.jsxs)("div", {
                                                      className: e4.ZK,
                                                      children: [
                                                          (0, n.jsx)(eM, {
                                                              idea: T,
                                                              inputRef: J,
                                                              onIdeaChange: eh,
                                                              onSubmit: ev,
                                                              submitting: ec,
                                                              submitDisabled: ed,
                                                              error: U,
                                                              modelSettings: B,
                                                              onModelSettingsChange: Z,
                                                              attachments: ee,
                                                              onImport: eu.open,
                                                          }),
                                                          eu.input,
                                                          (0, n.jsx)(u.E, {
                                                              variant: "footnote/normal",
                                                              color: "text-muted",
                                                              children: w.intl.string(E.default.hebdhA),
                                                          }),
                                                      ],
                                                  })
                                                : (0, n.jsxs)("div", {
                                                      className: e4.ZK,
                                                      children: [
                                                          (0, n.jsx)(u.E, {
                                                              variant: "body-md/normal",
                                                              color: "text-default",
                                                              children: w.intl.string(E.default["+aodaP"]),
                                                          }),
                                                          (0, n.jsx)("div", {
                                                              children: (0, n.jsx)(m.$, {
                                                                  variant: "primary",
                                                                  text: w.intl.string(E.default.q5uYqG),
                                                                  onClick: A.o,
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                        ],
                                    }),
                                    (0, n.jsx)(et, { inspirations: Q, onCopyPrompt: ef }),
                                    (0, n.jsx)(eU, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                X && !z ? (0, n.jsx)(ey, { guildId: G, archiveImport: el ? er : null }) : null,
            ],
        }),
    });
}
