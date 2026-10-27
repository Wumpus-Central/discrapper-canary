a.d(t, { A: () => eV });
var s = a(477900),
    n = a(582128),
    l = a(503698),
    r = a.n(l),
    i = a(17928),
    o = a(97893),
    c = a(364522),
    u = a(297264),
    d = a(834730),
    m = a(65593),
    f = a(458518),
    h = a(742589),
    x = a(705427),
    g = a(120234),
    p = a(639519),
    v = a(889921),
    j = a(371169),
    N = a(391712);
async function b(e) {
    let { guildId: t, installScope: a, prompt: s, modelSettings: n, templateId: l } = e,
        r = await (0, j.gA)(
            null != a
                ? { guild_id: t, install_scope: a }
                : { guild_id: t, auto_install_scope: !0, prompt: (s ?? "").slice(0, 4e3) },
        );
    return ((0, v.ensureConnection)(r, { templateId: l }), (0, v.stageModelSettings)(r, n ?? N.A4), r);
}
async function y(e) {
    let { start: t, ...a } = e,
        s = await b(a);
    return (await t(s), s);
}
var C = a(15564),
    w = a(398773),
    A = a(735769),
    E = a(763218),
    S = a(381991),
    R = a(101766);
(a(976860), a(652215), a(746080));
var I = a(506774);
let k = "ConjureProjectsPanelOpen";
var O = a(708679),
    L = a(89310),
    P = a(821609),
    _ = a(661531),
    T = a(775602),
    U = a(486020),
    M = a(687966),
    F = a(323384),
    D = a(632015),
    z = a(231483),
    G = a(430392),
    H = a(248675),
    q = a(105292);
let W = { games: M.GameControllerIcon, apps: F.k, profile_widget: D.f, automod: z.ShieldIcon, chat_bot: G.RobotIcon };
var B = a(621466);
let J = "data-conjure-carousel-card";
var $ = a(19493);
let V = n.memo(function (e) {
        let { inspiration: t, onCopyPrompt: a } = e,
            n = W[t.category];
        return (0, s.jsxs)("li", {
            className: $.AS,
            [J]: "",
            children: [
                (0, s.jsxs)("div", {
                    className: $.rl,
                    children: [
                        (0, s.jsx)("img", {
                            className: $.my,
                            src: (0, U.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, s.jsx)(d.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: $.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: $.Nr,
                    children: [
                        (0, s.jsxs)("div", {
                            className: $.xn,
                            children: [
                                (0, s.jsx)("img", { className: $.q_, src: t.image, alt: "" }),
                                (0, s.jsx)("div", {
                                    className: $.o1,
                                    children: (0, s.jsx)(P.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: q.intl.string(H.default["6CQjTy"]),
                                        onClick: () => a(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: $.qr,
                            children: [
                                (0, s.jsx)("div", {
                                    className: $.Yl,
                                    "aria-hidden": !0,
                                    children: (0, s.jsx)(n, { size: "md", color: _.A.colors.ICON_STRONG }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: $.PJ,
                                    children: [
                                        (0, s.jsx)(d.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t.name,
                                        }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: (function (e) {
                                                switch (e) {
                                                    case "games":
                                                        return q.intl.string(H.default["JU01/4"]);
                                                    case "apps":
                                                        return q.intl.string(H.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return q.intl.string(H.default.GUb2zA);
                                                    case "automod":
                                                        return q.intl.string(H.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return q.intl.string(H.default.KBHZfO);
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
    Y = n.memo(function (e) {
        var t;
        let { inspirations: a, onCopyPrompt: l } = e,
            r = (0, i.bG)([T.Ay], () => T.Ay.useReducedMotion),
            o = n.useRef(null),
            c = n.useRef(null);
        return (
            (t = !r),
            n.useEffect(() => {
                let e = o.current,
                    a = c.current;
                if (null == e || null == a) return;
                let s = [],
                    n = [],
                    l = 1,
                    r = 0,
                    i = 1,
                    u = 0,
                    d = 0,
                    m = null,
                    f = !1,
                    h = !1,
                    x = document.hasFocus(),
                    g = !0;
                function p() {
                    if (null == e || null == a) return;
                    n = (s = Array.from(a.querySelectorAll(`[${J}]`))).map((e) => e.offsetLeft + e.offsetWidth / 2);
                    let o = (l = s.length > 1 ? Math.abs(s[1].offsetLeft - s[0].offsetLeft) : 1) * s.length;
                    ((r = t && o >= e.clientWidth + 2 * l ? o : 0),
                        (i = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function v() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    s.forEach((e, a) => {
                        var s;
                        let o,
                            c,
                            d = n[a] - t;
                        r > 0 && (d = ((((d - u * i + r / 2) % r) + r) % r) - r / 2);
                        let { angleDeg: m, dropPx: f } =
                            ((s = d / l),
                            (c =
                                (l / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((o = Math.max(-12, Math.min(12, 4 * s))) * Math.PI) / 180))),
                            { angleDeg: o, dropPx: c });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + d - n[a]}px`),
                            e.style.setProperty("--custom-conjure-home-carousel-angle", `${m}deg`),
                            e.style.setProperty("--custom-conjure-home-carousel-drop", `${f}px`));
                    });
                }
                function j(e) {
                    (null != m && r > 0 && (u = (u + (30 * (e - m)) / 1e3) % r),
                        (m = e),
                        v(),
                        (d = requestAnimationFrame(j)));
                }
                function N() {
                    let e = t && !f && !h && x && g;
                    e && 0 === d
                        ? ((m = null), (d = requestAnimationFrame(j)))
                        : e || 0 === d || (cancelAnimationFrame(d), (d = 0));
                }
                function b() {
                    ((f = !0), N());
                }
                function y() {
                    ((f = !1), N());
                }
                function C() {
                    ((h = !0), N());
                }
                function w(t) {
                    ((h = (0, B.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), N());
                }
                function A() {
                    ((x = !0), N());
                }
                function E() {
                    ((x = !1), N());
                }
                (p(), v(), N());
                let S = new ResizeObserver(() => {
                    (p(), v());
                });
                (S.observe(e), S.observe(a));
                let R = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((g = t.isIntersecting), N());
                });
                return (
                    R.observe(e),
                    e.addEventListener("scroll", v, { passive: !0 }),
                    e.addEventListener("pointerenter", b),
                    e.addEventListener("pointerleave", y),
                    e.addEventListener("focusin", C),
                    e.addEventListener("focusout", w),
                    window.addEventListener("focus", A),
                    window.addEventListener("blur", E),
                    () => {
                        (cancelAnimationFrame(d),
                            S.disconnect(),
                            R.disconnect(),
                            e.removeEventListener("scroll", v),
                            e.removeEventListener("pointerenter", b),
                            e.removeEventListener("pointerleave", y),
                            e.removeEventListener("focusin", C),
                            e.removeEventListener("focusout", w),
                            window.removeEventListener("focus", A),
                            window.removeEventListener("blur", E));
                    }
                );
            }, [o, c, t]),
            (0, s.jsx)("section", {
                ref: o,
                className: r ? $.vV : $.Dk,
                "aria-label": q.intl.string(H.default.Qc4S39),
                children: (0, s.jsx)("ul", {
                    ref: c,
                    className: $.u4,
                    children: a.map((e) => (0, s.jsx)(V, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var K = a(858899),
    Q = a(789645),
    Z = a(265872),
    X = a(980707),
    ee = a(477782),
    et = a(81369),
    ea = a(949757),
    es = a(950305),
    en = a(664121);
let el = [
    { value: "user", icon: es.UserIcon, nameMessage: H.default.s1TsXl },
    { value: "guild", icon: en.R, nameMessage: H.default.LlLIJw },
];
function er(e) {
    let { importing: t, onImport: a } = e,
        l = n.useRef(null),
        r = (0, ea.yN)(n.useCallback((e) => a(e, "user"), [a])),
        i = (0, ea.yN)(n.useCallback((e) => a(e, "guild"), [a])),
        o = { user: r.open, guild: i.open };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(Z.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: Z.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, s.jsx)(X.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": q.intl.string(H.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, s.jsx)(ee.rX, {
                            label: q.intl.string(H.default.NyVn6T),
                            children: el
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: q.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, s.jsx)(
                                        ee.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, a) => {
                    let { isShown: n } = a;
                    return (0, s.jsx)(P.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: et.H,
                        text: q.intl.string(H.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": n,
                    });
                },
            }),
            r.input,
            i.input,
        ],
    });
}
var ei = a(574790),
    eo = a(380654),
    ec = a(638693);
class eu extends Error {}
function ed(e) {
    let { guildId: t, modelSettings: a, onClose: l } = e,
        r = n.useCallback((e) => (0, S.Ay)(e.id), []),
        i = n.useCallback((e) => (0, s.jsx)(eo.S, { project: e, guildId: t }), [t]),
        o = n.useCallback((e, a) => (0, eo.V)(e, a, t), [t]),
        [d, m] = n.useState(!1),
        f = n.useCallback(
            async (e, s) => {
                let n = (0, ea.vt)(e);
                if (null != n) return void (0, K.P0)({ text: n, variant: "critical" });
                m(!0);
                try {
                    let n = await y({
                        guildId: t,
                        installScope: s,
                        modelSettings: a,
                        start: async (t) => {
                            try {
                                await (0, ea.Hj)(t, e, q.intl.string(H.default["LUc7/5"]));
                            } catch {
                                throw (await (0, j.xx)(t).catch(() => void 0), new eu());
                            }
                        },
                    });
                    (0, S.Ay)(n);
                } catch (e) {
                    (0, K.P0)({
                        text: e instanceof eu ? q.intl.string(H.default["Q+l4Hv"]) : (0, p.mG)(e),
                        variant: "critical",
                    });
                } finally {
                    m(!1);
                }
            },
            [t, a],
        ),
        x = q.intl.string(H.default.dWgSAa),
        g = q.intl.string(H.default.kar7jh);
    return (0, s.jsxs)("aside", {
        className: ec.pz,
        "aria-label": x,
        children: [
            (0, s.jsxs)("div", {
                className: ec.wx,
                children: [
                    (0, s.jsx)(u.D, { variant: "heading-md/semibold", color: "text-strong", children: x }),
                    (0, s.jsxs)("div", {
                        className: ec.$s,
                        children: [
                            (0, s.jsx)(er, { importing: d, onImport: f }),
                            (0, s.jsx)(h.A.Icon, { icon: Q.P, tooltip: g, "aria-label": g, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(c.Ip, {
                className: ec.XG,
                children: (0, s.jsx)(ei.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: i,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var em = a(559106),
    ef = a(663341),
    eh = a(783977),
    ex = a(559647),
    eg = a(531685),
    ep = a(46175),
    ev = a(34595),
    ej = a(587157),
    eN = a(200160),
    eb = a(465410);
function ey(e) {
    let { prompts: t, paused: a, showCaret: l } = e,
        { index: r, length: i } = (function (e, t) {
            let [a, s] = n.useState(() =>
                    t ? { index: 0, length: e[0].length, phase: "holding" } : { index: 0, length: 0, phase: "typing" },
                ),
                [l, r] = n.useState(t);
            t !== l && (r(t), t && s((t) => ({ ...t, length: e[t.index].length, phase: "holding" })));
            let i = n.useRef(a.length);
            n.useLayoutEffect(() => {
                i.current = a.length;
            });
            let { index: o, phase: c } = a;
            return (
                n.useEffect(() => {
                    if (t) return;
                    let a = e[o].length;
                    if ("holding" === c) {
                        let e = window.setTimeout(() => s((e) => ({ ...e, phase: "deleting" })), 1400);
                        return () => window.clearTimeout(e);
                    }
                    let n = "typing" === c,
                        l = i.current,
                        r = performance.now(),
                        u = l,
                        d = 0,
                        m = 0;
                    return (
                        (d = requestAnimationFrame(function t(i) {
                            let c = Math.floor((i - r) / (n ? 14 : 4)),
                                f = n ? Math.min(a, l + c) : Math.max(0, l - c);
                            (f !== u && ((u = f), s((e) => ({ ...e, length: f }))),
                                n && f === a
                                    ? s((e) => ({ ...e, length: f, phase: "holding" }))
                                    : n || 0 !== f
                                      ? (d = requestAnimationFrame(t))
                                      : (m = window.setTimeout(
                                            () => s({ index: (o + 1) % e.length, length: 0, phase: "typing" }),
                                            250,
                                        )));
                        })),
                        () => {
                            (cancelAnimationFrame(d), window.clearTimeout(m));
                        }
                    );
                }, [e, t, o, c]),
                a
            );
        })(t, a);
    return (0, s.jsxs)(d.E, {
        variant: "text-md/normal",
        color: "text-muted",
        className: eN.RC,
        children: [t[r].slice(0, i), l ? (0, s.jsx)("span", { className: eN.OW }) : null],
    });
}
function eC(e) {
    let { prompts: t, paused: a } = e,
        l = (function (e, t) {
            let [a, s] = n.useState(0);
            return (
                n.useEffect(() => {
                    if (t || e < 2) return;
                    let a = window.setInterval(() => s((t) => (t + 1) % e), 2e3);
                    return () => window.clearInterval(a);
                }, [e, 2e3, t]),
                a
            );
        })(t.length, a);
    return (0, s.jsx)(d.E, { variant: "text-md/normal", color: "text-muted", className: eN.RC, children: t[l] });
}
function ew(e) {
    let { boxFocused: t } = e,
        a = n.useMemo(
            () => [
                q.intl.string(H.default.J2o8Ae),
                q.intl.string(H.default["wn+Bzd"]),
                q.intl.string(H.default["6DCVy3"]),
                q.intl.string(H.default.iRbnRD),
                q.intl.string(H.default["p/zqml"]),
            ],
            [],
        ),
        l = (0, i.bG)([T.Ay], () => T.Ay.useReducedMotion),
        r = (0, i.bG)([eg.A], () => eg.A.isFocused()),
        o = t || !r;
    return (0, s.jsx)("div", {
        className: eN.qf,
        "aria-hidden": !0,
        children: l
            ? (0, s.jsx)(eC, { prompts: a, paused: o })
            : (0, s.jsx)(ey, { prompts: a, paused: o, showCaret: !t }),
    });
}
function eA(e) {
    let {
            idea: t,
            inputRef: a,
            onIdeaChange: l,
            onSubmit: i,
            submitting: o,
            submitDisabled: c,
            error: u,
            modelSettings: m,
            onModelSettingsChange: f,
            attachments: h,
        } = e,
        [x, g] = n.useState(!1),
        p = n.useRef(null),
        v = n.useId(),
        j = "" !== t,
        b = q.intl.string(q.t.d56gCa),
        y = n.useRef(null),
        C = n.useRef(null),
        { addFiles: w, pasteFiles: A, removeAttachment: E } = h,
        S = n.useCallback((e) => {
            let t = y.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        R = n.useCallback(
            (e) => {
                (w(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [w],
        );
    n.useLayoutEffect(() => {
        let e = a.current;
        null != e &&
            (e.scrollHeight <= e.clientHeight && (e.style.height = "auto"), (e.style.height = `${e.scrollHeight}px`));
    }, [t, a]);
    let I = n.useCallback(
        (e) => {
            "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || i());
        },
        [c, i],
    );
    return (0, s.jsxs)("div", {
        className: eN.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: p,
                className: r()(eN.yk, { [eN.Sl]: null != u }),
                children: [
                    (0, s.jsxs)(d.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: eN.Ox,
                        children: [
                            (0, s.jsx)(em.vN, {
                                ringTarget: p,
                                ringClassName: eN.Rg,
                                children: (0, s.jsx)("textarea", {
                                    ref: a,
                                    className: r()(eN.hF, eb.yL),
                                    rows: 3,
                                    value: t,
                                    "aria-label": q.intl.string(H.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? v : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: I,
                                    onPaste: (e) => A(e),
                                    onFocus: () => g(!0),
                                    onBlur: () => g(!1),
                                }),
                            }),
                            j ? null : (0, s.jsx)(ew, { boxFocused: x }),
                        ],
                    }),
                    h.attachments.length > 0
                        ? (0, s.jsx)("div", {
                              className: eN.ZO,
                              children: h.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, s.jsx)(ev.Nl, { draft: t, onRemove: E }, t.localId);
                              }),
                          })
                        : null,
                    (0, s.jsxs)("div", {
                        className: eN.KE,
                        children: [
                            (0, s.jsx)("input", {
                                ref: y,
                                type: "file",
                                multiple: !0,
                                onChange: R,
                                className: eN.Fg,
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                            (0, s.jsx)(Z.Y, {
                                targetElementRef: C,
                                position: "top",
                                align: "left",
                                animation: Z.Y.Animation.NONE,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, s.jsx)(X.W, {
                                        "data-menu-migrated": !0,
                                        navId: "conjure-home-attach",
                                        "aria-label": b,
                                        onClose: t,
                                        onSelect: t,
                                        children: (0, s.jsx)(ee.rX, {
                                            children: ep._.map((e) =>
                                                (0, s.jsx)(
                                                    ee.Dr,
                                                    {
                                                        id: e.id,
                                                        label: q.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => S(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    });
                                },
                                children: (e, t) => {
                                    let { isShown: a } = t;
                                    return (0, s.jsx)("button", {
                                        ...e,
                                        ref: C,
                                        type: "button",
                                        className: eN.gb,
                                        disabled: o,
                                        "aria-label": b,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": a,
                                        children: (0, s.jsx)(ef.PlusLargeIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                            className: eN.Xv,
                                        }),
                                    });
                                },
                            }),
                            (0, s.jsxs)("div", {
                                className: eN.Rc,
                                children: [
                                    (0, s.jsx)(ej.A, {
                                        settings: m ?? N.A4,
                                        tiers: N.lO,
                                        choices: (0, N.Pu)(),
                                        disabled: o,
                                        onChange: f,
                                        className: eN.gb,
                                        icon: (0, s.jsx)(eh.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, s.jsx)(P.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: ex.SendMessageIcon,
                                        text: q.intl.string(H.default.bNtzxp),
                                        disabled: c,
                                        loading: o,
                                        onClick: i,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != u
                ? (0, s.jsx)(d.E, {
                      id: v,
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: u,
                  })
                : null,
        ],
    });
}
var eE = a(628284),
    eS = a(369606),
    eR = a(926268),
    eI = a(406810),
    ek = a(707554),
    eO = a(651346);
function eL(e) {
    let { className: t } = e;
    return (0, s.jsx)("span", { className: r()(eO.n8, t) });
}
let eP = [
        {
            id: "apps",
            title: H.default["bvcT/Q"],
            description: H.default.ArcJqa,
            Visual: function () {
                return (0, s.jsxs)("div", {
                    className: eO.x,
                    children: [
                        (0, s.jsxs)("div", {
                            className: eO.My,
                            children: [
                                (0, s.jsx)("span", { className: eO._w }),
                                (0, s.jsx)("span", { className: eO._w }),
                                (0, s.jsx)("span", { className: eO._w }),
                            ],
                        }),
                        (0, s.jsx)(eL, { className: eO.Lm }),
                        (0, s.jsx)("div", {
                            className: eO.Oh,
                            children: [0, 1, 2].map((e) =>
                                (0, s.jsxs)(
                                    "div",
                                    {
                                        className: eO.ZW,
                                        children: [
                                            (0, s.jsx)("span", { className: eO.NU }),
                                            0 === e
                                                ? (0, s.jsx)(eE.y, {
                                                      size: "xs",
                                                      color: _.A.colors.ICON_BRAND,
                                                      className: eO._6,
                                                  })
                                                : null,
                                            (0, s.jsx)(eL, { className: eO.Eg }),
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
            title: H.default["JU01/4"],
            description: H.default.FXwLsv,
            Visual: function () {
                return (0, s.jsxs)("div", {
                    className: r()(eO.x, eO.jG),
                    children: [
                        (0, s.jsx)("span", { className: r()(eO.gg, eO.K1) }),
                        (0, s.jsx)("span", { className: r()(eO.gg, eO.W2) }),
                        (0, s.jsx)("span", { className: r()(eO.Fs, eO.A$) }),
                        (0, s.jsx)("span", { className: r()(eO.Fs, eO.eP) }),
                        (0, s.jsx)("span", { className: r()(eO.Fs, eO.kc) }),
                        (0, s.jsx)("span", { className: r()(eO.Fs, eO.OE) }),
                        (0, s.jsx)("span", { className: eO.OC }),
                        (0, s.jsxs)("div", {
                            className: eO.si,
                            children: [
                                (0, s.jsx)(eS.TrophyIcon, { size: "xxs", color: _.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, s.jsx)(d.E, {
                                    variant: "text-xs/bold",
                                    color: "none",
                                    className: eO.o9,
                                    children: 128,
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eO.KQ,
                            children: [
                                (0, s.jsx)(eR.HeartIcon, { size: "xxs", color: _.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, s.jsx)(eR.HeartIcon, { size: "xxs", color: _.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, s.jsx)(eR.HeartIcon, { size: "xxs", color: _.A.colors.ICON_OVERLAY_LIGHT }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "bots",
            title: H.default.KBHZfO,
            description: H.default.qNmKhG,
            Visual: function () {
                return (0, s.jsxs)("div", {
                    className: eO.x,
                    children: [
                        (0, s.jsxs)("div", {
                            className: eO.$y,
                            children: [(0, s.jsx)("span", { className: eO.m$ }), (0, s.jsx)(eL, { className: eO.Md })],
                        }),
                        (0, s.jsxs)("div", {
                            className: eO.iU,
                            children: [
                                (0, s.jsx)("span", {
                                    className: r()(eO.my, eO.FY),
                                    children: (0, s.jsx)(G.RobotIcon, {
                                        size: "xs",
                                        color: _.A.colors.ICON_OVERLAY_LIGHT,
                                    }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: eO.OS,
                                    children: [
                                        (0, s.jsxs)("div", {
                                            className: eO.f9,
                                            children: [
                                                (0, s.jsx)(eL, { className: eO.iE }),
                                                (0, s.jsx)(d.E, {
                                                    variant: "text-xs/bold",
                                                    color: "none",
                                                    className: eO.AO,
                                                    children: q.intl.string(H.default.VlgiLf),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(eL, { className: eO.xs }),
                                        (0, s.jsx)(eL, { className: eO.Md }),
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
            title: H.default.GUb2zA,
            description: H.default["v+F6qW"],
            Visual: function () {
                return (0, s.jsxs)("div", {
                    className: r()(eO.x, eO.ME),
                    children: [
                        (0, s.jsx)("span", { className: eO.CK }),
                        (0, s.jsxs)("div", {
                            className: eO.kI,
                            children: [
                                (0, s.jsx)("span", { className: r()(eO.my, eO.jU) }),
                                (0, s.jsx)(eL, { className: eO.iE }),
                                (0, s.jsxs)("div", {
                                    className: eO.Wy,
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: eO.M1,
                                            children: [0, 1].map((e) =>
                                                (0, s.jsxs)(
                                                    "div",
                                                    {
                                                        className: eO.dJ,
                                                        children: [
                                                            (0, s.jsx)(eL, { className: eO.cR }),
                                                            (0, s.jsx)(eL, { className: eO.Zh }),
                                                        ],
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                        (0, s.jsx)("div", {
                                            className: eO.bW,
                                            children: [0, 1, 2, 3, 4, 5].map((e) =>
                                                (0, s.jsx)("span", { className: eO.QR }, e),
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
            title: H.default.uVOH1p,
            description: H.default.zm7y9u,
            Visual: function () {
                return (0, s.jsxs)("div", {
                    className: eO.JH,
                    children: [
                        (0, s.jsx)("span", { className: eO.rx }),
                        (0, s.jsx)("span", { className: eO.ny }),
                        (0, s.jsx)("span", { className: eO.ZH }),
                        (0, s.jsx)("div", {
                            className: eO.$Y,
                            children: [0, 1, 2].map((e) =>
                                (0, s.jsxs)(
                                    "div",
                                    {
                                        className: eO.fn,
                                        children: [
                                            (0, s.jsx)("span", { className: r()(eO._h, { [eO.zY]: 0 === e }) }),
                                            (0, s.jsx)(eL, { className: eO.Av }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, s.jsxs)("div", {
                            className: eO.Y5,
                            children: [
                                (0, s.jsx)(eI.ClockIcon, { size: "xxs", color: _.A.colors.ICON_OVERLAY_LIGHT }),
                                (0, s.jsx)(eL, { className: eO.jB }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "automod",
            title: H.default["+EKk4D"],
            description: H.default.fpXK3z,
            Visual: function () {
                return (0, s.jsxs)("div", {
                    className: eO.x,
                    children: [
                        (0, s.jsxs)("div", {
                            className: eO.iU,
                            children: [
                                (0, s.jsx)("span", { className: eO.my }),
                                (0, s.jsxs)("div", {
                                    className: eO.OS,
                                    children: [
                                        (0, s.jsx)(eL, { className: eO.iE }),
                                        (0, s.jsx)(eL, { className: r()(eO.xs, eO.pc) }),
                                        (0, s.jsx)(eL, { className: r()(eO.Md, eO.pc) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eO.jC,
                            children: [
                                (0, s.jsx)(z.ShieldIcon, { size: "sm", color: _.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, s.jsxs)("div", {
                                    className: eO.qQ,
                                    children: [
                                        (0, s.jsx)(eL, { className: r()(eO.Md, eO.k8) }),
                                        (0, s.jsx)(eL, { className: r()(eO.nq, eO.k8) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    e_ = n.memo(function () {
        let e = n.useId();
        return (0, s.jsx)("section", {
            className: eO.GG,
            "aria-labelledby": e,
            children: (0, s.jsx)(ek.F, {
                component: (0, s.jsx)(u.D, {
                    id: e,
                    variant: "heading-lg/medium",
                    children: q.intl.string(H.default.IiQEVd),
                }),
                children: (0, s.jsx)("ul", {
                    className: eO.Vg,
                    children: eP.map((e) => {
                        let { id: t, title: a, description: n, Visual: l } = e;
                        return (0, s.jsxs)(
                            "li",
                            {
                                className: eO.Vs,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: eO.Tn,
                                        "aria-hidden": !0,
                                        children: (0, s.jsx)(l, {}),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: eO.pG,
                                        children: [
                                            (0, s.jsx)(u.D, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: q.intl.string(a),
                                            }),
                                            (0, s.jsx)(d.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: q.intl.string(n),
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
(a(323874), a(14289), a(35956));
var eT = a(666476),
    eU = a(287111),
    eM = a(989145),
    eF = a(139255);
function eD(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let ez = 1;
function eG(e) {
    let t = eD(e),
        a = { localId: ez++, name: e.name, contentType: t };
    if (
        !(0, eT.Oq)(e.size, t) &&
        !("image/png" === t && e.size <= eT.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas)
    )
        return { file: e, draft: { ...a, status: "error", errorText: (0, eU.iW)(t) } };
    let s = eT.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...a, status: "ready", previewUrl: s } };
}
function eH(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function eq(e, t) {
    if ((0, eT.Oq)(t.size, eD(t))) return (0, eM.vX)(e, t);
    let a = await (0, eF.c)(t);
    if (null == a || !(0, eT.Oq)(a.size, a.type)) throw Error("attachment over its size limit");
    return (0, eM.vX)(e, a);
}
var eW = a(698638),
    eB = a(606128),
    eJ = a(260024);
class e$ extends Error {}
function eV(e) {
    let t,
        { guildId: a, onConjurePage: l = !1 } = e,
        [v, N] = n.useState(() => (l ? A.A.getHomePrompt() : ""));
    (0, g.N$)(v);
    let b = n.useRef(v);
    (n.useLayoutEffect(() => {
        b.current = v;
    }),
        n.useEffect(() => {
            if (l) return () => (0, w.fZ)(b.current);
        }, [l]));
    let P = (0, R.A)(l ? "home" : null),
        [_, T] = n.useState(!1),
        [U, M] = n.useState(null),
        [F, D] = n.useState(null),
        [z, G] = n.useState(() => I.w.get(k) ?? null ?? !0),
        W = n.useRef(null),
        B = n.useMemo(
            () => [
                {
                    id: "flappy",
                    category: "games",
                    shortPrompt: q.intl.string(H.default.gtX7tS),
                    fullPrompt: q.intl.string(H.default["Sfa50+"]),
                    name: q.intl.string(H.default.Tbag5k),
                    image: "/assets/b43659b526f2e936.svg",
                    authorAvatarSeed: "1",
                },
                {
                    id: "raid-calendar",
                    category: "apps",
                    shortPrompt: q.intl.string(H.default.GNGB59),
                    fullPrompt: q.intl.string(H.default.lxwxNm),
                    name: q.intl.string(H.default["rzB/bE"]),
                    image: "/assets/1d701ea289cc99e6.svg",
                    authorAvatarSeed: "2",
                },
                {
                    id: "aram-widget",
                    category: "profile_widget",
                    shortPrompt: q.intl.string(H.default.RzNoHJ),
                    fullPrompt: q.intl.string(H.default.VfUFEt),
                    name: q.intl.string(H.default.RYGHMF),
                    image: "/assets/05c0d07952b2d93f.svg",
                    authorAvatarSeed: "3",
                },
                {
                    id: "trivia",
                    category: "games",
                    shortPrompt: q.intl.string(H.default.TGN39X),
                    fullPrompt: q.intl.string(H.default.gilNLG),
                    name: q.intl.string(H.default.vvwBlz),
                    image: "/assets/5813258afff68797.svg",
                    authorAvatarSeed: "4",
                },
                {
                    id: "spoilers-automod",
                    category: "automod",
                    shortPrompt: q.intl.string(H.default.Gw756q),
                    fullPrompt: q.intl.string(H.default["d/WMHR"]),
                    name: q.intl.string(H.default["v9+fAY"]),
                    image: "/assets/54b5cda688395473.svg",
                    authorAvatarSeed: "5",
                },
                {
                    id: "movie-night",
                    category: "apps",
                    shortPrompt: q.intl.string(H.default.u4UWGH),
                    fullPrompt: q.intl.string(H.default.ofBNNy),
                    name: q.intl.string(H.default.DQQdZL),
                    image: "/assets/fcb9220c49b6460a.svg",
                    authorAvatarSeed: "6",
                },
                {
                    id: "welcome-bot",
                    category: "chat_bot",
                    shortPrompt: q.intl.string(H.default["T3+H3J"]),
                    fullPrompt: q.intl.string(H.default.ryeSuC),
                    name: q.intl.string(H.default["3deXbx"]),
                    image: "/assets/56e489e9c5907add.svg",
                    authorAvatarSeed: "7",
                },
            ],
            [],
        ),
        J = "user" === (0, f.o)().get("target") || l,
        $ = (function () {
            let [e, t] = n.useState([]),
                a = n.useRef(e);
            (n.useLayoutEffect(() => {
                a.current = e;
            }),
                n.useEffect(() => () => a.current.forEach(eH), []));
            let s = n.useCallback((e) => {
                    if (0 === e.length) return;
                    let s = e.map(eG);
                    ((a.current = [...a.current, ...s]), t(a.current));
                }, []),
                l = n.useCallback(
                    (e) => {
                        if (e.defaultPrevented) return;
                        let t = Array.from(e.clipboardData?.files ?? []);
                        0 !== t.length && (e.preventDefault(), s(t));
                    },
                    [s],
                ),
                r = n.useCallback((e) => {
                    let s = a.current.find((t) => t.draft.localId === e);
                    null != s && (eH(s), (a.current = a.current.filter((e) => e !== s)), t(a.current));
                }, []),
                i = n.useCallback(() => {
                    (a.current.forEach(eH), (a.current = []), t(a.current));
                }, []),
                o = n.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= eT.lN) return e;
                            let t = q.intl.formatToPlainString(H.default.Q0aCVZ, { count: eT.lN });
                            return e.map((e, a) =>
                                a < eT.lN || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(e),
                    [e],
                );
            return {
                attachments: o,
                addFiles: s,
                pasteFiles: l,
                removeAttachment: r,
                clear: i,
                hasErrors: o.some((e) => "error" === e.draft.status),
            };
        })(),
        { attachments: V, addFiles: K, clear: Q } = $,
        Z =
            "idea" ===
                (t = (function (e) {
                    let { idea: t, installScope: a, submitting: s } = e;
                    return s ? "submitting" : "" === t.trim() ? "idea" : null == a ? "scope" : null;
                })({ idea: v, installScope: null, submitting: _ })) ||
            "submitting" === t ||
            $.hasErrors,
        X = n.useCallback((e) => K(Array.from(e)), [K]),
        ee = n.useContext(C.A),
        et = (0, E.l)(),
        ea = (0, i.bG)([A.A], () => A.A.isOverlayOpen());
    (0, L.p)(W, ee ? et : !ea);
    let es = n.useCallback((e) => {
            (N(e), M(null));
        }, []),
        en = n.useCallback(
            (e) => {
                es(e);
                let t = W.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [es],
        ),
        el = n.useRef(!1),
        er = n.useCallback(async () => {
            let e = v.trim();
            if ("" !== e && !el.current) {
                ((el.current = !0), T(!0), M(null));
                try {
                    let t = await y({
                        guildId: a,
                        installScope: J ? "user" : null,
                        prompt: e,
                        modelSettings: F,
                        start: async (t) => {
                            let a = [];
                            if (V.length > 0)
                                try {
                                    a = await Promise.all(
                                        V.map((e) => {
                                            let { file: a } = e;
                                            return eq(t, a);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, j.xx)(t).catch(() => void 0), new e$());
                                }
                            ((0, O.P6)(t, e, a), Q());
                        },
                    });
                    (N(""), (b.current = ""), (el.current = !1), T(!1), (0, S.Ay)(t));
                } catch (e) {
                    (M(e instanceof e$ ? q.intl.string(H.default["903H7m"]) : (0, p.mG)(e)), (el.current = !1), T(!1));
                }
            }
        }, [v, J, F, a, V, Q]),
        ei = n.useCallback((e) => {
            (I.w.set(k, e), G(e));
        }, []),
        eo = n.useCallback(() => ei(!1), [ei]),
        ec = q.intl.string(z ? H.default.kar7jh : H.default.WSc5Y2);
    return (0, s.jsx)("div", {
        className: r()(eJ.MY, eB.T),
        children: (0, s.jsxs)("div", {
            className: eJ.Zp,
            children: [
                (0, s.jsxs)("main", {
                    className: eJ.iW,
                    children: [
                        _
                            ? null
                            : (0, s.jsx)(m.A, {
                                  title: q.intl.string(H.default.gy7byi),
                                  description: q.intl.string(H.default["dkv/WO"]),
                                  icons: eW.ir,
                                  onDrop: X,
                              }),
                        l
                            ? null
                            : (0, s.jsx)(x.A, {
                                  title: q.intl.string(H.default.uk6jhJ),
                                  transparent: !0,
                                  actions: (0, s.jsx)(h.A.Icon, {
                                      icon: o.Z,
                                      color: "var(--icon-strong)",
                                      className: eJ.FW,
                                      tooltip: ec,
                                      "aria-label": ec,
                                      selected: z,
                                      onClick: () => ei(!z),
                                  }),
                              }),
                        (0, s.jsx)(c.Ip, {
                            ref: P,
                            className: eJ.XG,
                            children: (0, s.jsxs)("div", {
                                className: eJ.Qs,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: r()(eJ.Lv, { [eJ.$O]: l }),
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: eJ.ZK,
                                                children: [
                                                    (0, s.jsx)(u.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: eJ.DD,
                                                        children: q.intl.string(H.default.doYpEy),
                                                    }),
                                                    (0, s.jsx)(d.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: eJ.VA,
                                                        children: q.intl.string(H.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, s.jsxs)("div", {
                                                className: eJ.ZK,
                                                children: [
                                                    (0, s.jsx)(eA, {
                                                        idea: v,
                                                        inputRef: W,
                                                        onIdeaChange: es,
                                                        onSubmit: er,
                                                        submitting: _,
                                                        submitDisabled: Z,
                                                        error: U,
                                                        modelSettings: F,
                                                        onModelSettingsChange: D,
                                                        attachments: $,
                                                    }),
                                                    (0, s.jsx)(d.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: q.intl.string(H.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(Y, { inspirations: B, onCopyPrompt: en }),
                                    (0, s.jsx)(e_, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                z && !l ? (0, s.jsx)(ed, { guildId: a, modelSettings: F, onClose: eo }) : null,
            ],
        }),
    });
}
