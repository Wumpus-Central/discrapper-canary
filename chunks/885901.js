s.d(t, { A: () => te });
var l = s(477900),
    n = s(582128),
    a = s(503698),
    r = s.n(a),
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
        l = await (async function (e) {
            let { guildId: t, modelSettings: s, templateId: l } = e,
                n = await (0, N.gA)(null != t ? { guild_id: t } : {});
            return ((0, j.ensureConnection)(n, { templateId: l }), (0, j.r2)(n, s ?? y.A4), n);
        })(s);
    return (await t(l), l);
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
    U = s(632015),
    W = s(31300),
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
        profile_widget: U.WidgetsIcon,
        overlay_widget: W.ScreenIcon,
        automod: $.ShieldIcon,
        chat_bot: B.RobotIcon,
    };
var V = s(621466);
let X = "data-conjure-carousel-card";
var J = s(19493);
function Q(e) {
    e.preventDefault();
}
let ee = n.memo(function (e) {
        let { inspiration: t, onCopyPrompt: s, repeat: n = !1 } = e,
            a = Z[t.category];
        return (0, l.jsxs)("li", {
            className: J.AS,
            "aria-hidden": !!n || void 0,
            [X]: "",
            children: [
                (0, l.jsxs)("div", {
                    className: J.rl,
                    children: [
                        (0, l.jsx)("img", {
                            className: J.my,
                            src: (0, T.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, l.jsx)(u.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            className: J.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: J.Nr,
                    children: [
                        (0, l.jsxs)("div", {
                            className: J.xn,
                            children: [
                                (0, l.jsx)("img", { className: J.q_, src: t.image, alt: "" }),
                                (0, l.jsx)("div", {
                                    className: J.o1,
                                    children: (0, l.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: w.intl.string(E.default["6CQjTy"]),
                                        tabIndex: n ? -1 : void 0,
                                        onMouseDown: n ? Q : void 0,
                                        onClick: () => s(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: J.qr,
                            children: [
                                (0, l.jsx)("div", {
                                    className: J.Yl,
                                    "aria-hidden": !0,
                                    children: (0, l.jsx)(a, { size: "md", color: G.A.colors.ICON_STRONG }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: J.PJ,
                                    children: [
                                        (0, l.jsx)(u.E, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t.name,
                                        }),
                                        (0, l.jsx)(u.E, {
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
    et = n.memo(function (e) {
        var t;
        let { inspirations: s, onCopyPrompt: a } = e,
            r = (0, _.bG)([z.Ay], () => z.Ay.useReducedMotion),
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
                            let e = a.querySelector(`[${X}]`);
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
                    h = !1,
                    f = !1,
                    x = document.hasFocus(),
                    v = !0;
                function g() {
                    if (null == e || null == s) return;
                    n = (l = Array.from(s.querySelectorAll(`[${X}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
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
                        let { angleDeg: h, dropPx: f } =
                            ((i = m / a),
                            (u =
                                (a / ((4 * Math.PI) / 180)) *
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
                    ((f = (0, V.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), N());
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
            (0, l.jsx)("section", {
                ref: i,
                className: r ? J.vV : J.Dk,
                "aria-label": w.intl.string(E.default.Qc4S39),
                children: (0, l.jsx)("ul", {
                    ref: c,
                    className: J.u4,
                    children: Array.from({ length: o }, (e, t) =>
                        s.map((e) =>
                            (0, l.jsx)(ee, { inspiration: e, onCopyPrompt: a, repeat: t > 0 }, `${e.id}-${t}`),
                        ),
                    ),
                }),
            })
        );
    });
var es = s(683438),
    el = s(289873),
    en = s(123292),
    ea = s(441935),
    er = s(939249),
    ei = s(847374),
    ec = s(5127);
function eo(e) {
    let { onClick: t } = e;
    return (0, l.jsxs)(er.D, {
        className: r()(ec.ap, ec.jP),
        onClick: t,
        children: [
            (0, l.jsx)("span", {
                className: ec.DW,
                children: (0, l.jsx)(ei.ChevronSmallDownIcon, { size: "sm", color: "currentColor" }),
            }),
            (0, l.jsx)(u.E, { variant: "body-md/medium", color: "none", children: w.intl.string(E.default.Im1k9X) }),
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
        a = n.useId();
    return (0, l.jsxs)("section", {
        "aria-labelledby": null != t ? a : void 0,
        className: ej.uW,
        children: [
            null != t
                ? (0, l.jsx)(u.E, {
                      id: a,
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
            visibleItems: a,
            listRef: r,
            showMore: i,
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
        })(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ev.A, { listRef: r, projects: a, ...s }),
            null != i ? (0, l.jsx)(eo, { onClick: i }) : null,
        ],
    });
}
function ey(e) {
    let t,
        { guildId: s, archiveImport: a } = e,
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
        [f, v] = n.useState(""),
        g = n.useMemo(() => (0, ed.Z)(r, f), [r, f]),
        j = n.useMemo(() => (0, ed.Z)(i, f), [i, f]),
        p = a?.importArchive,
        y = (0, x.yN)(n.useCallback((e) => p?.(e), [p])),
        b = n.useCallback((e) => (0, A.A)(e.id, "home"), []),
        C = n.useCallback((e) => (0, l.jsx)(ex.S, { project: e, guildId: s }), [s]),
        I = n.useCallback((e, t) => (0, ex.V)(e, t, s), [s]),
        S = w.intl.string(E.default.BMn2lY),
        k = r.length > 0 || i.length > 0;
    return (0, l.jsxs)("aside", {
        className: ej.pz,
        "aria-label": S,
        children: [
            (0, l.jsxs)("div", {
                className: ej.wx,
                children: [
                    (0, l.jsx)(d.D, { variant: "heading-sm/semibold", color: "text-strong", children: S }),
                    null != a ? (0, l.jsx)(ea.A, { importing: a.importing, onClick: y.open }) : null,
                    y.input,
                ],
            }),
            (0, l.jsxs)(c.Ip, {
                className: ej.XG,
                fade: !0,
                children: [
                    k
                        ? (0, l.jsx)("div", {
                              className: ej.$P,
                              children: (0, l.jsx)(es.I, {
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
                        ? (0, l.jsx)(
                              ep,
                              {
                                  title: null,
                                  children: (0, l.jsx)(eN, {
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
                        ? (0, l.jsx)(ep, {
                              title: w.intl.string(E.default.YHDMK6),
                              children: (0, l.jsx)(ev.A, {
                                  projects: j,
                                  onSelect: b,
                                  renderProjectActions: C,
                                  onProjectContextMenu: I,
                              }),
                          })
                        : null,
                    k && 0 === g.length && 0 === j.length
                        ? (0, l.jsx)(u.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              className: ej.WD,
                              children: w.intl.string(E.default.X37fkR),
                          })
                        : k || "error" !== o
                          ? k || "success" === o
                              ? !k && h.length > 0
                                  ? (0, l.jsx)("div", {
                                        className: ej.E8,
                                        children: (0, l.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: w.intl.string(E.default["/I2lbz"]),
                                        }),
                                    })
                                  : null
                              : (0, l.jsx)("div", { className: ej.E8, children: (0, l.jsx)(el.y, {}) })
                          : (0, l.jsxs)("div", {
                                className: ej.E8,
                                children: [
                                    (0, l.jsx)(u.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: w.intl.string(E.default.DJAPMO),
                                    }),
                                    (0, l.jsx)(m.$, {
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
                ? (0, l.jsx)("div", {
                      className: ej.qr,
                      children: (0, l.jsx)(en.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: w.intl.formatToPlainString(E.default.vnoMFE, { count: h.length }),
                          onClick: () => (0, A.A)(null),
                      }),
                  })
                : k || "success" !== o
                  ? null
                  : (0, l.jsx)(eg.A, {}),
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
                                h = n ? Math.min(s, a + o) : Math.max(0, a - o);
                            (h !== d && ((d = h), l((e) => ({ ...e, length: h }))),
                                n && h === s
                                    ? l((e) => ({ ...e, length: h, phase: "holding" }))
                                    : n || 0 !== h
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
        variant: "body-md/normal",
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
    return (0, l.jsx)(u.E, { variant: "body-md/normal", color: "text-muted", className: ek.RC, children: t[a] });
}
function eO(e) {
    let { boxFocused: t } = e,
        s = n.useMemo(
            () =>
                q().map((e) => {
                    let { shortPrompt: t } = e;
                    return t;
                }),
            [],
        ),
        a = (0, _.bG)([z.Ay], () => z.Ay.useReducedMotion),
        r = (0, _.bG)([ew.A], () => ew.A.isFocused()),
        i = t || !r;
    return (0, l.jsx)("div", {
        className: ek.qf,
        "aria-hidden": !0,
        children: a ? (0, l.jsx)(eR, { prompts: s, paused: i }) : (0, l.jsx)(eL, { prompts: s, paused: i }),
    });
}
function eM(e) {
    let {
            idea: t,
            inputRef: s,
            onIdeaChange: a,
            onSubmit: i,
            submitting: c,
            submitDisabled: o,
            error: d,
            modelSettings: h,
            onModelSettingsChange: f,
            attachments: x,
            onImport: v,
        } = e,
        [g, j] = n.useState(!1),
        p = n.useRef(null),
        N = n.useId(),
        b = "" !== t,
        { addFiles: A, pasteFiles: C, removeAttachment: I } = x;
    n.useLayoutEffect(() => {
        let e = s.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, s]);
    let S = n.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || i());
        },
        [o, i],
    );
    return (0, l.jsxs)("div", {
        className: ek.kL,
        children: [
            (0, l.jsxs)("div", {
                ref: p,
                className: r()(ek.yk, { [ek.Sl]: null != d }),
                children: [
                    (0, l.jsxs)(u.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        className: ek.Ox,
                        children: [
                            (0, l.jsx)(eb.vN, {
                                ringTarget: p,
                                ringClassName: ek.Rg,
                                children: (0, l.jsx)("textarea", {
                                    ref: s,
                                    className: r()(ek.hF, eP.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": w.intl.string(E.default.cwrS1O),
                                    "aria-invalid": null != d,
                                    "aria-describedby": null != d ? N : void 0,
                                    onChange: (e) => a(e.currentTarget.value),
                                    onKeyDown: S,
                                    onPaste: (e) => C(e),
                                    onFocus: () => j(!0),
                                    onBlur: () => j(!1),
                                }),
                            }),
                            b ? null : (0, l.jsx)(eO, { boxFocused: g }),
                        ],
                    }),
                    x.attachments.length > 0
                        ? (0, l.jsx)("div", {
                              className: ek.ZO,
                              children: x.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, l.jsx)(eI.Nl, { draft: t, onRemove: I }, t.localId);
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
                                onAddFiles: A,
                                onImport: v,
                            }),
                            (0, l.jsxs)("div", {
                                className: ek.Rc,
                                children: [
                                    (0, l.jsx)(eS.A, {
                                        settings: h ?? y.A4,
                                        tiers: y.lO,
                                        choices: (0, y.Pu)(),
                                        disabled: c,
                                        onChange: f,
                                        className: ek.gb,
                                        icon: (0, l.jsx)(eA.FiltersHorizontalIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                        }),
                                    }),
                                    (0, l.jsx)(m.$, {
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
                ? (0, l.jsx)(u.E, {
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
    return (0, l.jsx)("span", { className: r()(eq.n8, t) });
}
let eK = {
    apps: function () {
        return (0, l.jsxs)("div", {
            className: eq.x,
            children: [
                (0, l.jsxs)("div", {
                    className: eq.My,
                    children: [
                        (0, l.jsx)("span", { className: eq._w }),
                        (0, l.jsx)("span", { className: eq._w }),
                        (0, l.jsx)("span", { className: eq._w }),
                    ],
                }),
                (0, l.jsx)(eH, { className: eq.Lm }),
                (0, l.jsx)("div", {
                    className: eq.Oh,
                    children: [0, 1, 2].map((e) =>
                        (0, l.jsxs)(
                            "div",
                            {
                                className: eq.ZW,
                                children: [
                                    (0, l.jsx)("span", { className: eq.NU }),
                                    0 === e
                                        ? (0, l.jsx)(eF.CircleCheckIcon, {
                                              size: "xs",
                                              color: G.A.colors.ICON_BRAND,
                                              className: eq._6,
                                          })
                                        : null,
                                    (0, l.jsx)(eH, { className: eq.Eg }),
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
            className: r()(eq.x, eq.jG),
            children: [
                (0, l.jsx)("span", { className: r()(eq.gg, eq.K1) }),
                (0, l.jsx)("span", { className: r()(eq.gg, eq.W2) }),
                (0, l.jsx)("span", { className: r()(eq.Fs, eq.A$) }),
                (0, l.jsx)("span", { className: r()(eq.Fs, eq.eP) }),
                (0, l.jsx)("span", { className: r()(eq.Fs, eq.kc) }),
                (0, l.jsx)("span", { className: r()(eq.Fs, eq.OE) }),
                (0, l.jsx)("span", { className: eq.OC }),
                (0, l.jsxs)("div", {
                    className: eq.si,
                    children: [
                        (0, l.jsx)(e_.TrophyIcon, { size: "xxs", color: G.A.colors.ICON_FEEDBACK_WARNING }),
                        (0, l.jsx)(u.E, {
                            variant: "body-xs/semibold",
                            color: "none",
                            className: eq.o9,
                            children: 128,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: eq.KQ,
                    children: [
                        (0, l.jsx)(eD.HeartIcon, { size: "xxs", color: G.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, l.jsx)(eD.HeartIcon, { size: "xxs", color: G.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, l.jsx)(eD.HeartIcon, { size: "xxs", color: G.A.colors.ICON_OVERLAY_LIGHT }),
                    ],
                }),
            ],
        });
    },
    bots: function () {
        return (0, l.jsxs)("div", {
            className: eq.x,
            children: [
                (0, l.jsxs)("div", {
                    className: eq.$y,
                    children: [(0, l.jsx)("span", { className: eq.m$ }), (0, l.jsx)(eH, { className: eq.Md })],
                }),
                (0, l.jsxs)("div", {
                    className: eq.iU,
                    children: [
                        (0, l.jsx)("span", {
                            className: r()(eq.my, eq.FY),
                            children: (0, l.jsx)(B.RobotIcon, { size: "xs", color: G.A.colors.ICON_OVERLAY_LIGHT }),
                        }),
                        (0, l.jsxs)("div", {
                            className: eq.OS,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eq.f9,
                                    children: [
                                        (0, l.jsx)(eH, { className: eq.iE }),
                                        (0, l.jsx)(u.E, {
                                            variant: "body-xs/semibold",
                                            color: "none",
                                            className: eq.AO,
                                            children: w.intl.string(E.default.VlgiLf),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(eH, { className: eq.xs }),
                                (0, l.jsx)(eH, { className: eq.Md }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    "profile-widgets": function () {
        return (0, l.jsxs)("div", {
            className: r()(eq.x, eq.ME),
            children: [
                (0, l.jsx)("span", { className: eq.CK }),
                (0, l.jsxs)("div", {
                    className: eq.kI,
                    children: [
                        (0, l.jsx)("span", { className: r()(eq.my, eq.jU) }),
                        (0, l.jsx)(eH, { className: eq.iE }),
                        (0, l.jsxs)("div", {
                            className: eq.Wy,
                            children: [
                                (0, l.jsx)("div", {
                                    className: eq.M1,
                                    children: [0, 1].map((e) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: eq.dJ,
                                                children: [
                                                    (0, l.jsx)(eH, { className: eq.cR }),
                                                    (0, l.jsx)(eH, { className: eq.Zh }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, l.jsx)("div", {
                                    className: eq.bW,
                                    children: [0, 1, 2, 3, 4, 5].map((e) =>
                                        (0, l.jsx)("span", { className: eq.QR }, e),
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
            className: eq.JH,
            children: [
                (0, l.jsx)("span", { className: eq.rx }),
                (0, l.jsx)("span", { className: eq.ny }),
                (0, l.jsx)("span", { className: eq.ZH }),
                (0, l.jsx)("div", {
                    className: eq.$Y,
                    children: [0, 1, 2].map((e) =>
                        (0, l.jsxs)(
                            "div",
                            {
                                className: eq.fn,
                                children: [
                                    (0, l.jsx)("span", { className: r()(eq._h, { [eq.zY]: 0 === e }) }),
                                    (0, l.jsx)(eH, { className: eq.Av }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, l.jsxs)("div", {
                    className: eq.Y5,
                    children: [
                        (0, l.jsx)(eG.ClockIcon, { size: "xxs", color: G.A.colors.ICON_OVERLAY_LIGHT }),
                        (0, l.jsx)(eH, { className: eq.jB }),
                    ],
                }),
            ],
        });
    },
    automod: function () {
        return (0, l.jsxs)("div", {
            className: eq.x,
            children: [
                (0, l.jsxs)("div", {
                    className: eq.iU,
                    children: [
                        (0, l.jsx)("span", { className: eq.my }),
                        (0, l.jsxs)("div", {
                            className: eq.OS,
                            children: [
                                (0, l.jsx)(eH, { className: eq.iE }),
                                (0, l.jsx)(eH, { className: r()(eq.xs, eq.pc) }),
                                (0, l.jsx)(eH, { className: r()(eq.Md, eq.pc) }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: eq.jC,
                    children: [
                        (0, l.jsx)($.ShieldIcon, { size: "sm", color: G.A.colors.ICON_FEEDBACK_CRITICAL }),
                        (0, l.jsxs)("div", {
                            className: eq.qQ,
                            children: [
                                (0, l.jsx)(eH, { className: r()(eq.Md, eq.k8) }),
                                (0, l.jsx)(eH, { className: r()(eq.nq, eq.k8) }),
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
        className: eq.GG,
        "aria-labelledby": e,
        children: (0, l.jsx)(ez.F, {
            component: (0, l.jsx)(d.D, {
                id: e,
                variant: "heading-lg/medium",
                children: w.intl.string(E.default.IiQEVd),
            }),
            children: (0, l.jsx)("ul", {
                className: eq.Vg,
                children: eT.map((e) => {
                    let { id: t, title: s, description: n } = e;
                    return (0, l.jsxs)(
                        "li",
                        {
                            className: eq.Vs,
                            children: [
                                (0, l.jsx)("div", {
                                    className: eq.Tn,
                                    "aria-hidden": !0,
                                    children: (0, l.jsx)(eU, { id: t }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: eq.pG,
                                    children: [
                                        (0, l.jsx)(d.D, {
                                            variant: "body-md/semibold",
                                            color: "text-strong",
                                            children: w.intl.string(s),
                                        }),
                                        (0, l.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            children: w.intl.string(n),
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
    eV = s(466280);
let eX = 1;
function eJ(e) {
    let t = (0, eV.Ft)(e),
        s = { localId: eX++, name: e.name, contentType: t };
    if ("too-large" === (0, eV.R9)(e, t))
        return { file: e, draft: { ...s, status: "error", errorText: (0, eZ.iW)(t) } };
    let l = eY.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...s, status: "ready", previewUrl: l } };
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
        a,
        y,
        { guildId: G, onConjurePage: z = !1 } = e,
        T = (0, _.bG)([D.A], () => D.A.getDraft(M));
    (0, k.N$)(T);
    let H = (0, P.A)(z ? "home" : null),
        [K, U] = n.useState(!1),
        [W, $] = n.useState(null),
        [B, Z] = n.useState(null),
        [V, X] = n.useState(() => R.w.get(O) ?? null ?? !0),
        J = n.useRef(null),
        Q = n.useMemo(() => q().map((e) => ({ ...e, image: Y[e.id] })), []),
        ee =
            ((s = e0.useField("attachments")),
            (a = (0, eV.sm)(e9)),
            {
                attachments: (y = n.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= 10) return e;
                            let t = (0, eV.XV)();
                            return e.map((e, s) =>
                                s < 10 || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(s),
                    [s],
                )),
                addFiles: e9,
                pasteFiles: a,
                removeAttachment: e5,
                hasErrors: y.some((e) => "error" === e.draft.status),
            }),
        { attachments: es, addFiles: el } = ee,
        en = z ? null : G,
        ea = ((t = (0, L.z9)("ConjureHomePage")), t.some((e) => e.id === G) || z),
        er = (function (e) {
            let { guildId: t, modelSettings: s } = e,
                [l, a] = n.useState(!1),
                r = n.useRef(!1);
            return {
                importing: l,
                importArchive: n.useCallback(
                    async (e) => {
                        if (r.current) return;
                        let l = (0, x.vt)(e);
                        if (null != l) return void (0, v.P0)({ text: l, variant: "critical" });
                        ((r.current = !0), a(!0));
                        try {
                            let l = await b({
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
                            (0, A.A)(l, "create");
                        } catch (e) {
                            (0, v.P0)({
                                text: e instanceof C ? w.intl.string(E.default["Q+l4Hv"]) : (0, p.mG)(e),
                                variant: "critical",
                            });
                        } finally {
                            ((r.current = !1), a(!1));
                        }
                    },
                    [t, s],
                ),
            };
        })({ guildId: en, modelSettings: B }),
        { importArchive: ei } = er,
        ec = K || er.importing,
        eo = "" !== T.trim() || es.length > 0,
        ed = ec || !eo || ee.hasErrors,
        eu = (0, x.yN)(ei),
        em = n.useCallback((e) => el(Array.from(e)), [el]);
    (0, F.p)(J);
    let eh = n.useCallback((e) => {
            ((0, S.I)(M, e), $(null));
        }, []),
        ef = n.useCallback(
            (e) => {
                eh(e);
                let t = J.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [eh],
        ),
        ex = n.useRef(!1),
        ev = n.useCallback(async () => {
            let e = T.trim();
            if (("" !== e || 0 !== es.length) && !ex.current) {
                ((ex.current = !0), U(!0), $(null));
                try {
                    let t = await (async function (e, t) {
                        let s = (function () {
                            let { attachments: e } = e0.getState();
                            return (e1([]), e);
                        })();
                        (0, S.I)(M, "");
                        let l = e2;
                        try {
                            let e = await t(s);
                            return (e6(s), e);
                        } catch (t) {
                            throw (
                                e2 !== l
                                    ? e6(s)
                                    : ("" === D.A.getDraft(M) && (0, S.I)(M, e),
                                      e1([...s, ...e0.getState().attachments])),
                                t
                            );
                        }
                    })(T, (t) =>
                        b({
                            guildId: en,
                            modelSettings: B,
                            start: async (s) => {
                                let l = [];
                                if (t.length > 0)
                                    try {
                                        l = await Promise.all(
                                            t.map((e) => {
                                                let { file: t } = e;
                                                return (async function (e, t) {
                                                    if ("fits" === (0, eV.R9)(t, (0, eV.Ft)(t))) return (0, g.vX)(e, t);
                                                    let s = await (0, eV.th)(t);
                                                    if (null == s) throw Error("attachment over its size limit");
                                                    return (0, g.vX)(e, s);
                                                })(s, t);
                                            }),
                                        );
                                    } catch {
                                        throw (await (0, N.xx)(s).catch(() => void 0), new e7());
                                    }
                                (0, j.dv)(s, e, l);
                            },
                        }),
                    );
                    ((ex.current = !1), U(!1), (0, A.A)(t, "create"));
                } catch (e) {
                    ($(e instanceof e7 ? w.intl.string(E.default["903H7m"]) : (0, p.mG)(e)), (ex.current = !1), U(!1));
                }
            }
        }, [T, B, en, es]),
        eg = n.useCallback((e) => {
            (R.w.set(O, e), X(e));
        }, []),
        ej = w.intl.string(V ? E.default.kar7jh : E.default.WSc5Y2);
    return (0, l.jsx)("div", {
        className: r()(e4.MY, e3.T),
        children: (0, l.jsxs)("div", {
            className: e4.Zp,
            children: [
                (0, l.jsxs)("main", {
                    className: e4.iW,
                    children: [
                        ec || !ea
                            ? null
                            : (0, l.jsx)(h.A, {
                                  title: w.intl.string(E.default.gy7byi),
                                  description: w.intl.string(E.default["dkv/WO"]),
                                  icons: e8.ir,
                                  onDrop: em,
                              }),
                        z
                            ? null
                            : (0, l.jsx)(I.A, {
                                  title: w.intl.string(E.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, l.jsx)(f.A.Icon, {
                                      icon: i.MenuIcon,
                                      color: "var(--icon-strong)",
                                      className: e4.FW,
                                      tooltip: ej,
                                      "aria-label": ej,
                                      selected: V,
                                      onClick: () => eg(!V),
                                  }),
                              }),
                        (0, l.jsx)(c.Ip, {
                            ref: H,
                            className: e4.XG,
                            children: (0, l.jsxs)("div", {
                                className: e4.Qs,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: r()(e4.Lv, { [e4.$O]: z }),
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: e4.ZK,
                                                children: [
                                                    (0, l.jsx)("div", {
                                                        children: (0, l.jsx)(o.E, {
                                                            type: { text: w.intl.string(E.default.y6T1Nu) },
                                                            variant: "primary",
                                                        }),
                                                    }),
                                                    (0, l.jsx)(d.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: e4.DD,
                                                        children: w.intl.string(
                                                            null != en ? E.default.gE0Peh : E.default.doYpEy,
                                                        ),
                                                    }),
                                                    (0, l.jsx)(u.E, {
                                                        variant: "body-md/normal",
                                                        color: "text-strong",
                                                        className: e4.VA,
                                                        children: w.intl.string(
                                                            null != en ? E.default.DskVcU : E.default.BH58fD,
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            ea
                                                ? (0, l.jsxs)("div", {
                                                      className: e4.ZK,
                                                      children: [
                                                          (0, l.jsx)(eM, {
                                                              idea: T,
                                                              inputRef: J,
                                                              onIdeaChange: eh,
                                                              onSubmit: ev,
                                                              submitting: ec,
                                                              submitDisabled: ed,
                                                              error: W,
                                                              modelSettings: B,
                                                              onModelSettingsChange: Z,
                                                              attachments: ee,
                                                              onImport: eu.open,
                                                          }),
                                                          eu.input,
                                                          (0, l.jsx)(u.E, {
                                                              variant: "footnote/normal",
                                                              color: "text-muted",
                                                              children: w.intl.string(E.default.hebdhA),
                                                          }),
                                                      ],
                                                  })
                                                : (0, l.jsxs)("div", {
                                                      className: e4.ZK,
                                                      children: [
                                                          (0, l.jsx)(u.E, {
                                                              variant: "body-md/normal",
                                                              color: "text-default",
                                                              children: w.intl.string(E.default["+aodaP"]),
                                                          }),
                                                          (0, l.jsx)("div", {
                                                              children: (0, l.jsx)(m.$, {
                                                                  variant: "primary",
                                                                  text: w.intl.string(E.default.q5uYqG),
                                                                  onClick: A.o,
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                        ],
                                    }),
                                    (0, l.jsx)(et, { inspirations: Q, onCopyPrompt: ef }),
                                    (0, l.jsx)(eW, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                V && !z ? (0, l.jsx)(ey, { guildId: G, archiveImport: ea ? er : null }) : null,
            ],
        }),
    });
}
