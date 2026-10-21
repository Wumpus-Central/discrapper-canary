(n.r(t), n.d(t, { default: () => h1 }));
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
let H = "user";
var K = n(941985),
    V = n(16619),
    W = n(506774);
let X = "ConjureProjectsPanelOpen";
var J = n(89310),
    Z = n(821609),
    Y = n(775602),
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
                                                        return E.intl.string(S.default.GUb2zA);
                                                    case "automod":
                                                        return E.intl.string(S.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return E.intl.string(S.default.KBHZfO);
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
            r = (0, o.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
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
var ed = n(858899),
    em = n(789645),
    ef = n(265872),
    eh = n(980707),
    ep = n(477782),
    eg = n(81369),
    ex = n(666476),
    ev = n(989145);
(n(323874), n(14289), n(35956));
var ej = n(77729),
    eb = n(723702),
    ey = n(264572).Buffer;
async function ek(e, t) {
    if (eb.isPlatformEmbedded) {
        let n = ey.from(await e.arrayBuffer());
        if ("function" == typeof ej.A.fileManager.saveWithDialog2) await ej.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await ej.A.fileManager.saveWithDialog(n, t);
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
var ew = n(688954);
class eN extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function eC(e, t) {
    let n = await (0, ew.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new eN(n.status);
    return await n.blob();
}
async function eA(e, t, n) {
    (0, _.ensureConnection)(e);
    let l = await (0, ev.vX)(e, t);
    (0, _.sendUserMessage)(e, n, [l]);
}
function eS(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, ex.Oq)(e.size, t)
        ? null
        : E.intl.formatToPlainString(S.default.ThxcOX, { size: (0, ex.sM)((0, ex.Ju)(t)) });
}
async function eE(e, t) {
    let n,
        l =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "conjure" : n}.zip`),
        r = await eC(e, l);
    await ek(r, l);
}
function eI(e) {
    let t = i.useRef(null),
        n = i.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != n && e(n));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, a.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: n,
        }),
    };
}
var eM = n(950305),
    e_ = n(664121);
let eP = [
    { value: "user", icon: eM.UserIcon, nameMessage: S.default.s1TsXl },
    { value: "guild", icon: e_.R, nameMessage: S.default.LlLIJw },
];
function eR(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = eI(i.useCallback((e) => n(e, "user"), [n])),
        s = eI(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ef.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: ef.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(eh.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": E.intl.string(S.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(ep.rX, {
                            label: E.intl.string(S.default.NyVn6T),
                            children: eP
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: E.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        ep.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(Z.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: eg.H,
                        text: E.intl.string(S.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": r,
                    });
                },
            }),
            r.input,
            s.input,
        ],
    });
}
var eT = n(418811),
    eL = n(246338),
    e$ = n(290076),
    eD = n(442433),
    ez = n(314116),
    eO = n(260498),
    eF = n(782603),
    eq = n(780338),
    eU = n(782134),
    eG = n(113494),
    eB = n(663417),
    eH = n(70688),
    eK = n(173936),
    eV = n(473935),
    eW = n(625903),
    eX = n(408278),
    eJ = n(365199),
    eZ = n(7437),
    eY = n(147036),
    eQ = n(957565),
    e0 = n(785389),
    e1 = n(123917),
    e2 = n(860402);
let e3 = new Set();
var e5 = n(329356),
    e4 = n(442331),
    e6 = n(616334);
n(321073);
var e7 = n(189714),
    e8 = n(733791),
    e9 = n(189213),
    te = n(331322),
    tt = n(192308),
    tn = n(664619),
    tl = n(706935);
function tr(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = "delete" === l,
        h = f ? (0, e8.fI)(n) : (0, e8.Kd)(n),
        p = f ? null : (0, e8.L4)(n),
        g = (0, e8.Mi)(n),
        x = f
            ? E.intl.formatToPlainString(S.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(S.default.x6FvsZ, { app: n.appName });
    async function j() {
        (c(!0), m(null));
        let e = f ? (0, R.xx)(t.id) : (0, tn.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(E.intl.string(f ? S.default["0XDHob"] : S.default.PJ2Fkn))
            : (f || (0, ed.P0)({ text: (0, e8.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(e9.a, {
        ...r,
        role: "alertdialog",
        title: f ? x : (0, e8.WX)((0, tl.tb)(S.default.x6FvsZ, n.appName)),
        subtitle: f ? (0, e8.J)(n) : E.intl.string(S.default["8OKM1N"]),
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
        children: (0, a.jsxs)(te.B, {
            gap: 12,
            children: [
                h.length > 0 || null != p
                    ? (0, a.jsx)(tl.Ay, {
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
function ta(e) {
    (0, tt.openModal)((t) => (0, a.jsx)(tr, { ...t, ...e }));
}
var ti = n(587895);
function ts(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, u] = i.useState(null),
        c = (0, o.bG)([ti.A], () => ti.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        d = E.intl.formatToPlainString(S.default.m8KWic, { app: c });
    async function m() {
        (r(!0), u(null));
        let e = await (0, tn.R_)(t.id);
        (r(!1), e)
            ? ((0, ed.P0)({ text: E.intl.formatToPlainString(S.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : u(E.intl.string(S.default["rE/0SD"]));
    }
    return (0, a.jsx)(e9.a, {
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
var to = n(552821);
let tu = [];
function tc(e) {
    (0, ed.P0)({ text: e, variant: "critical" });
}
function td(e) {
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
        N = (0, e7.iI)(t),
        C = i.useContext(e5.bI),
        { pending: A, refresh: I } = (0, eZ.A)(y ?? null),
        { pending: M, connect: _ } = (function (e, t) {
            let [n, l] = i.useState(e3),
                r = i.useRef(e3),
                a = i.useCallback((e) => {
                    ((r.current = (0, e0.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, e0.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, e2.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, e1.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, e0.rq)(l.error)
                                          ? E.intl.string(S.default["jCQ/1B"])
                                          : E.intl.string(S.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(k ?? null, tc),
        P = (0, o.bG)([e4.A], () => (null == k ? tu : e4.A.getDeclaredConnections(k))),
        T = i.useMemo(() => (0, e0.Xl)(P), [P]),
        L = (0, e8.Bs)(t),
        $ = (0, e8.CU)(t) && s,
        D = (0, o.bG)(
            [eO.Ay],
            () => {
                let e = eO.Ay.getProject(t);
                return null != e && (0, eO.jf)(e);
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
        B = eQ.p5 && null != l,
        H = eQ.p5,
        K = N ? eF.BellIcon : eq.BellSlashIcon,
        V = v ? eU.PlayIcon : eG.PauseIcon;
    return (0, a.jsxs)(eh.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: w,
        onSelect: w,
        children: [
            null != p || null != x || null != b
                ? (0, a.jsxs)(ep.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "refresh",
                                    icon: eB.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: eB.RefreshIcon },
                                    label: E.intl.string(S.default["p4B/7M"]),
                                    disabled: g,
                                    action: p,
                                })
                              : null,
                          null != x
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: V,
                                    leadingAccessory: { type: "icon", icon: V },
                                    label: E.intl.string(v ? S.default.ZKd2Cw : S.default.VHxerm),
                                    disabled: j,
                                    action: x,
                                })
                              : null,
                          null != b
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "close",
                                    icon: eH.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: eH.DoorExitIcon },
                                    label: E.intl.string(S.default["/TlGcK"]),
                                    action: b,
                                })
                              : null,
                      ],
                  })
                : null,
            z.length > 0
                ? (0, a.jsx)(ep.rX, {
                      children: z.map((e) =>
                          (0, a.jsx)(
                              ep.Dr,
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
            (0, a.jsx)(ep.rX, {
                children: (0, a.jsx)(ep.Dr, {
                    id: "mute",
                    label: E.intl.string(N ? S.default.s9rCuH : S.default["a+i/As"]),
                    icon: K,
                    leadingAccessory: { type: "icon", icon: K },
                    action: () => (0, e7.$L)(t, !N),
                }),
            }),
            G
                ? (0, a.jsxs)(ep.rX, {
                      children: [
                          F
                              ? (0, a.jsx)(ep.Dr, { id: "remix", label: E.intl.string(S.default.XWgAfc), action: m })
                              : null,
                          null != c
                              ? (0, a.jsx)(ep.Dr, { id: "export", label: E.intl.string(S.default.WsEEP7), action: c })
                              : null,
                          q
                              ? (0, a.jsx)(ep.Dr, { id: "import", label: E.intl.string(S.default.rWGY3e), action: d })
                              : null,
                          null != f
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(S.default.yOIql5),
                                    action: f,
                                })
                              : null,
                          null != h
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "history",
                                    label: E.intl.string(S.default["3hIVou"]),
                                    action: h,
                                })
                              : null,
                      ],
                  })
                : null,
            H
                ? (0, a.jsxs)(ep.rX, {
                      children: [
                          B
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: eK.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: eK.LinkIcon },
                                    action: () =>
                                        (0, eQ.C)((0, eY.n)(l, U.VV.CONJURE, t), () =>
                                            (0, ed.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(ep.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(S.default["nm/zuU"]),
                              icon: eV.L,
                              leadingAccessory: { type: "icon", icon: eV.L },
                              action: () =>
                                  (0, eQ.C)(t, () =>
                                      (0, ed.P0)({ text: E.intl.string(S.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || D || L?.canRemoveBot === !0
                ? (0, a.jsxs)(ep.rX, {
                      children: [
                          s || D
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "settings",
                                    label: E.intl.string(S.default.FzfmQ8),
                                    icon: eW.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: eW.SettingsIcon },
                                    action: () =>
                                        (0, e6.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: C,
                                        }),
                                })
                              : null,
                          L?.canRemoveBot === !0
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(S.default["3gKG2j"], { server: L.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = eO.Ay.getProject(t);
                                        null != e && ta({ project: e, target: L, action: "remove" });
                                    },
                                })
                              : null,
                          $
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(S.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = eO.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, tt.openModal)((t) => (0, a.jsx)(ts, { ...t, ...e })));
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = eO.Ay.getProject(t);
                                        if (null != e && null != L) ta({ project: e, target: L, action: "delete" });
                                        else
                                            (0, ez.A)({
                                                title: E.intl.formatToPlainString(S.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(S.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, R.K)(t, () =>
                                                        (0, ed.P0)({
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
function tm(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(ef.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ef.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(td, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: to.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t["UKOtz+"]),
                              children: (0, a.jsx)(eX.K, {
                                  icon: eJ.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(y.A.Icon, {
                              icon: eJ.MoreHorizontalIcon,
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
var tf = n(95264);
function th(e, t) {
    let n,
        l,
        r,
        a,
        s,
        { onExport: o } =
            ((n = e.id),
            (l = e.name),
            (r = i.useRef(!1)),
            (a = i.useCallback(() => {
                r.current ||
                    ((r.current = !0),
                    (0, ed.P0)({ text: E.intl.formatToPlainString(S.default.aN2JdD, { name: l }) }),
                    eE(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[conjure] project export failed", n, e),
                                (0, ed.P0)({
                                    text:
                                        409 === (t = e instanceof eN ? e.status : null)
                                            ? E.intl.string(S.default["9oqbEw"])
                                            : 404 === t
                                              ? E.intl.string(S.default["0W8uLq"])
                                              : E.intl.string(S.default.N8753A),
                                    variant: "critical",
                                }));
                        })
                        .finally(() => {
                            r.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: a,
                onImport: (s = eI(
                    i.useCallback(
                        (e) => {
                            let r = eS(e);
                            null != r
                                ? (0, ed.P0)({ text: r, variant: "critical" })
                                : (0, ez.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: l }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, u.pX)(q.BVt.CHANNEL(t, U.VV.CONJURE, n));
                                          try {
                                              await eA(n, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, ed.P0)({
                                                  text: E.intl.string(S.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [n, l, t],
                    ),
                )).open,
                importInput: s.input,
            });
    return {
        projectId: e.id,
        projectName: e.name,
        guildId: t,
        projectGuildId: e.guild_id,
        isOwner: (0, eO.PV)(e),
        canRemix: (0, eO.H_)(e),
        onRemix: () => (0, tf.A)(e, t),
        onExport: o,
    };
}
function tp(e) {
    let { project: t, guildId: n } = e,
        l = th(t, n);
    return (0, a.jsx)(td, { ...l, onCloseMenu: eD.Z_ });
}
function tg(e) {
    let { project: t, guildId: n } = e,
        l = th(t, n);
    return (0, a.jsx)(tm, { ...l, trigger: "iconButton" });
}
var tx = n(638693);
class tv extends Error {}
function tj(e) {
    let { guildId: t, modelSettings: n, onClose: l } = e,
        r = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, eL.Ot)(e, t)
                    ? (0, u.pX)(q.BVt.CHANNEL(t, U.VV.CONJURE, e.id))
                    : (0, eT.A)(e);
            },
            [t],
        ),
        s = i.useCallback((e) => (0, a.jsx)(tg, { project: e, guildId: t }), [t]),
        o = i.useCallback(
            (e, n) => {
                (0, eD.jA)(e, () => (0, a.jsx)(tp, { project: n, guildId: t }));
            },
            [t],
        ),
        [c, d] = i.useState(!1),
        m = i.useCallback(
            async (e, l) => {
                let r = eS(e);
                if (null != r) return void (0, ed.P0)({ text: r, variant: "critical" });
                d(!0);
                try {
                    await G({
                        guildId: t,
                        installScope: l,
                        modelSettings: n,
                        start: async (t) => {
                            try {
                                await eA(t, e, E.intl.string(S.default["LUc7/5"]));
                            } catch {
                                throw (await (0, R.xx)(t).catch(() => void 0), new tv());
                            }
                        },
                    });
                } catch (e) {
                    (0, ed.P0)({
                        text: e instanceof tv ? E.intl.string(S.default["Q+l4Hv"]) : (0, P.mG)(e),
                        variant: "critical",
                    });
                } finally {
                    d(!1);
                }
            },
            [t, n],
        ),
        f = E.intl.string(S.default.dWgSAa),
        h = E.intl.string(S.default.kar7jh);
    return (0, a.jsxs)("aside", {
        className: tx.pz,
        "aria-label": f,
        children: [
            (0, a.jsxs)("div", {
                className: tx.wx,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-strong", children: f }),
                    (0, a.jsxs)("div", {
                        className: tx.$s,
                        children: [
                            (0, a.jsx)(eR, { importing: c, onImport: m }),
                            (0, a.jsx)(y.A.Icon, { icon: em.P, tooltip: h, "aria-label": h, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(g.Ip, {
                className: tx.XG,
                children: (0, a.jsx)(e$.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: s,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var tb = n(559106),
    ty = n(663341),
    tk = n(783977),
    tw = n(559647),
    tN = n(531685),
    tC = n(477262),
    tA = n(432017);
let tS = [
    {
        id: "add-images-videos",
        label: S.default["51+9lc"],
        icon: tC.s,
        accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
    },
    {
        id: "add-sounds",
        label: S.default["10ljr2"],
        icon: tA.T,
        accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
    },
    { id: "add-other-files", label: S.default.aotDee, icon: eg.H, accept: "" },
];
var tE = n(289873),
    tI = n(285796),
    tM = n(73153),
    t_ = n(839214);
let tP = [],
    tR = 1,
    tT = (0, t_.D)(() => ({ draftsByProject: {} }));
function tL(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? tP;
}
function t$(e, t) {
    return tL(tT.getState(), e, t);
}
function tD(e, t, n) {
    let { draftsByProject: l } = tT.getState();
    tT.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function tz(e, t, n, l) {
    let r = t$(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (tD(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function tO(e, t) {
    (0, ev.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function tF(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && tO(e, t.ref.id));
}
function tq(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = tT.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? tP) n ? tF(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    tT.setState({ draftsByProject: i });
}
function tU(e) {
    return E.intl.formatToPlainString(S.default.JZ59Bo, { size: (0, ex.sM)((0, ex.Ju)(e)) });
}
function tG(e, t) {
    let n = t$(e, t);
    if (0 !== n.length) {
        for (let t of n) tF(e, t);
        tD(e, t, tP);
    }
}
function tB(e, t) {
    let n = t$(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (tD(e, t, tP), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function tH(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = t$(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? tB(e, "chat") : [];
    (0, _.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(tM.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(tT.getState().draftsByProject)) tq(e, { deleteFromWorker: !0 });
}),
    tM.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        tq(t, { deleteFromWorker: !1 });
    }));
var tK = n(922329);
async function tV(e) {
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
var tW = n(153171);
let tX = ex.lN;
function tJ(e, t, n, l) {
    let r = t$(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: tR++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (tD(e, t, [
            ...t$(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void tz(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    tz(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  tz(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default.E7dS5n) }),
                              ex.o2 - 3e5,
                          )
                        : tO(e, a.id);
                },
                (l) => {
                    (console.error("[conjure] attachment upload failed", l),
                        tz(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= tX)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: E.intl.formatToPlainString(S.default.Q0aCVZ, { count: tX }),
                    },
                };
            if (!(0, ex.Oq)(e.size, t))
                return "image/png" === t && e.size <= ex.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await tV(e).catch(() => null);
                              return null != n && (0, ex.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: tU(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: tU(t) } };
            let a = ex.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function tZ(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = tT.useState((e) => tL(e, t, n)),
        a = i.useCallback((e) => tJ(t, n, e, l), [t, n, l]),
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
                null != (r = (l = t$(t, n)).find((t) => t.localId === e)) &&
                    (tF(t, r),
                    tD(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => tB(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function tY(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(tK.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(tE.y, { type: tE.t.SPINNING_CIRCLE_SIMPLE, className: tW.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: tW.o1,
                onClick: () => n(t.localId),
                "aria-label": E.intl.string(S.default.Slam9g),
                children: (0, a.jsx)(tI.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tQ = n(900797),
    t0 = n(320448),
    t1 = n(344587),
    t2 = n(534554),
    t3 = n(392208),
    t5 = n(822313),
    t4 = n(837984),
    t6 = n(359589),
    t7 = n(254575);
function t8(e) {
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
function t9(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = t8(d),
        p = t3.P.indexOf(t.tier),
        g = d ? tQ.t : t0._,
        x = t3.P.map(t2.D0),
        j = (0, t2.Tc)(t.tier),
        { text: b, phase: y } = (0, t1.Q)(j);
    return (0, a.jsx)("div", {
        className: t7.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: h()(t7.t$, { [t7.Zr]: u && c, [t7.GF]: !u }),
            role: "dialog",
            "aria-label": E.intl.string(S.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: h()(t7.Nr, t7.uO, { [t7.Zr]: d && f.entered, [t7.GF]: !d }),
                          children: (0, a.jsx)(t6.b, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${t7.Nr} ${t7.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: t7.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: t7.y6,
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
                                            className: t7.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: h()(t7.Z, { [t7.xQ]: "exit" === y, [t7.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: t7.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: t7.Nb,
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
                                (0, a.jsx)(t4.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: E.intl.string(S.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = t3.P[e];
                                        null != n && n !== t.tier && s((0, t2.CM)((0, t2.j6)(t, n)));
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
function ne(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, t5.A)(t, s),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = t8(f);
    return (0, a.jsx)(ef.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: ef.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(t9, {
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
                    className: o ?? t7.hZ,
                    "aria-label": E.intl.string(S.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(tk.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var nt = n(847374),
    nn = n(122485);
function nl(e) {
    let { target: t, guilds: n, onChange: l, disabled: r, className: s } = e,
        [o, u] = i.useState(!1),
        c = i.useRef(null),
        d = i.useCallback(() => u(!1), []);
    o && r && u(!1);
    let m = E.intl.string(S.default.NyVn6T),
        f = E.intl.string(S.default.UPLaGM),
        h = t === H ? null : (n.find((e) => e.id === t) ?? null),
        p = h?.name ?? f;
    return (0, a.jsx)(ef.Y, {
        targetElementRef: c,
        shouldShow: o,
        onRequestClose: d,
        position: "top",
        align: "left",
        animation: ef.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(eh.W, {
                navId: "conjure-home-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsxs)(ep.rX, {
                    label: m,
                    children: [
                        (0, a.jsx)(ep.iD, {
                            id: "conjure-home-target-user",
                            group: "conjure-home-target",
                            label: f,
                            checked: t === H,
                            action: () => {
                                (l(H), d());
                            },
                        }),
                        n.map((e) =>
                            (0, a.jsx)(
                                ep.iD,
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
            return (0, a.jsx)(tb.vN, {
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
                            className: nn.R,
                            "aria-hidden": !0,
                            children:
                                null != h
                                    ? (0, a.jsx)(B.Ay, { guild: h, size: B.Ay.Sizes.MINI, active: !0 })
                                    : (0, a.jsx)(eM.UserIcon, { size: "refresh_sm", color: "currentColor" }),
                        }),
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            lineClamp: 1,
                            className: nn.P,
                            children: p,
                        }),
                        (0, a.jsx)(nt.a, { size: "refresh_sm", color: "currentColor", "aria-hidden": !0 }),
                    ],
                }),
            });
        },
    });
}
var nr = n(200160);
function na(e) {
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
        className: nr.RC,
        children: [t[r].slice(0, s), l ? (0, a.jsx)("span", { className: nr.OW }) : null],
    });
}
function ni(e) {
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
    return (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", className: nr.RC, children: t[l] });
}
function ns(e) {
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
        l = (0, o.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        r = (0, o.bG)([tN.A], () => tN.A.isFocused()),
        s = t || !r;
    return (0, a.jsx)("div", {
        className: nr.qf,
        "aria-hidden": !0,
        children: l
            ? (0, a.jsx)(ni, { prompts: n, paused: s })
            : (0, a.jsx)(na, { prompts: n, paused: s, showCaret: !t }),
    });
}
function no(e) {
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
        className: nr.kL,
        children: [
            (0, a.jsxs)("div", {
                ref: b,
                className: h()(nr.yk, { [nr.Sl]: null != u }),
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: nr.Ox,
                        children: [
                            (0, a.jsx)(tb.vN, {
                                ringTarget: b,
                                ringClassName: nr.Rg,
                                children: (0, a.jsx)("textarea", {
                                    ref: n,
                                    className: nr.hF,
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
                            k ? null : (0, a.jsx)(ns, { boxFocused: x }),
                        ],
                    }),
                    g.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: nr.ZO,
                              children: g.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, a.jsx)(tY, { draft: t, onRemove: M }, t.localId);
                              }),
                          })
                        : null,
                    (0, a.jsxs)("div", {
                        className: nr.KE,
                        children: [
                            (0, a.jsx)("input", {
                                ref: N,
                                type: "file",
                                multiple: !0,
                                onChange: P,
                                className: nr.Fg,
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                            (0, a.jsx)(ef.Y, {
                                targetElementRef: C,
                                position: "top",
                                align: "left",
                                animation: ef.Y.Animation.NONE,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(eh.W, {
                                        "data-menu-migrated": !0,
                                        navId: "conjure-home-attach",
                                        "aria-label": w,
                                        onClose: t,
                                        onSelect: t,
                                        children: (0, a.jsx)(ep.rX, {
                                            children: tS.map((e) =>
                                                (0, a.jsx)(
                                                    ep.Dr,
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
                                        className: nr.gb,
                                        disabled: s,
                                        "aria-label": w,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": n,
                                        children: (0, a.jsx)(ty.PlusLargeIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                            className: nr.Xv,
                                        }),
                                    });
                                },
                            }),
                            (0, a.jsx)(nl, {
                                target: c,
                                guilds: d,
                                onChange: m,
                                disabled: s,
                                className: h()(nr.gb, nr.qU),
                            }),
                            (0, a.jsxs)("div", {
                                className: nr.Rc,
                                children: [
                                    (0, a.jsx)(ne, {
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
                                        className: nr.gb,
                                        icon: (0, a.jsx)(tk.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(Z.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: tw.SendMessageIcon,
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
var nu = n(628284),
    nc = n(369606),
    nd = n(926268),
    nm = n(406810),
    nf = n(707554),
    nh = n(651346);
function np(e) {
    let { className: t } = e;
    return (0, a.jsx)("span", { className: h()(nh.n8, t) });
}
let ng = [
        {
            id: "apps",
            title: S.default["bvcT/Q"],
            description: S.default.ArcJqa,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nh.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nh.My,
                            children: [
                                (0, a.jsx)("span", { className: nh._w }),
                                (0, a.jsx)("span", { className: nh._w }),
                                (0, a.jsx)("span", { className: nh._w }),
                            ],
                        }),
                        (0, a.jsx)(np, { className: nh.Lm }),
                        (0, a.jsx)("div", {
                            className: nh.Oh,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nh.ZW,
                                        children: [
                                            (0, a.jsx)("span", { className: nh.NU }),
                                            0 === e
                                                ? (0, a.jsx)(nu.y, {
                                                      size: "xs",
                                                      color: w.A.colors.ICON_BRAND,
                                                      className: nh._6,
                                                  })
                                                : null,
                                            (0, a.jsx)(np, { className: nh.Eg }),
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
            title: S.default["JU01/4"],
            description: S.default.FXwLsv,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: h()(nh.x, nh.jG),
                    children: [
                        (0, a.jsx)("span", { className: h()(nh.gg, nh.K1) }),
                        (0, a.jsx)("span", { className: h()(nh.gg, nh.W2) }),
                        (0, a.jsx)("span", { className: h()(nh.Fs, nh.A$) }),
                        (0, a.jsx)("span", { className: h()(nh.Fs, nh.eP) }),
                        (0, a.jsx)("span", { className: h()(nh.Fs, nh.kc) }),
                        (0, a.jsx)("span", { className: h()(nh.Fs, nh.OE) }),
                        (0, a.jsx)("span", { className: nh.OC }),
                        (0, a.jsxs)("div", {
                            className: nh.si,
                            children: [
                                (0, a.jsx)(nc.TrophyIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/bold",
                                    color: "none",
                                    className: nh.o9,
                                    children: 128,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nh.KQ,
                            children: [
                                (0, a.jsx)(nd.HeartIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(nd.HeartIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(nd.HeartIcon, { size: "xxs", color: w.A.colors.ICON_OVERLAY_LIGHT }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "bots",
            title: S.default.KBHZfO,
            description: S.default.qNmKhG,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nh.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nh.$y,
                            children: [(0, a.jsx)("span", { className: nh.m$ }), (0, a.jsx)(np, { className: nh.Md })],
                        }),
                        (0, a.jsxs)("div", {
                            className: nh.iU,
                            children: [
                                (0, a.jsx)("span", {
                                    className: h()(nh.my, nh.FY),
                                    children: (0, a.jsx)(er.RobotIcon, {
                                        size: "xs",
                                        color: w.A.colors.ICON_OVERLAY_LIGHT,
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: nh.OS,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: nh.f9,
                                            children: [
                                                (0, a.jsx)(np, { className: nh.iE }),
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-xs/bold",
                                                    color: "none",
                                                    className: nh.AO,
                                                    children: E.intl.string(S.default.VlgiLf),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(np, { className: nh.xs }),
                                        (0, a.jsx)(np, { className: nh.Md }),
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
            title: S.default.GUb2zA,
            description: S.default["v+F6qW"],
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: h()(nh.x, nh.ME),
                    children: [
                        (0, a.jsx)("span", { className: nh.CK }),
                        (0, a.jsxs)("div", {
                            className: nh.kI,
                            children: [
                                (0, a.jsx)("span", { className: h()(nh.my, nh.jU) }),
                                (0, a.jsx)(np, { className: nh.iE }),
                                (0, a.jsxs)("div", {
                                    className: nh.Wy,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: nh.M1,
                                            children: [0, 1].map((e) =>
                                                (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        className: nh.dJ,
                                                        children: [
                                                            (0, a.jsx)(np, { className: nh.cR }),
                                                            (0, a.jsx)(np, { className: nh.Zh }),
                                                        ],
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: nh.bW,
                                            children: [0, 1, 2, 3, 4, 5].map((e) =>
                                                (0, a.jsx)("span", { className: nh.QR }, e),
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
            title: S.default.uVOH1p,
            description: S.default.zm7y9u,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nh.JH,
                    children: [
                        (0, a.jsx)("span", { className: nh.rx }),
                        (0, a.jsx)("span", { className: nh.ny }),
                        (0, a.jsx)("span", { className: nh.ZH }),
                        (0, a.jsx)("div", {
                            className: nh.$Y,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nh.fn,
                                        children: [
                                            (0, a.jsx)("span", { className: h()(nh._h, { [nh.zY]: 0 === e }) }),
                                            (0, a.jsx)(np, { className: nh.Av }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsxs)("div", {
                            className: nh.Y5,
                            children: [
                                (0, a.jsx)(nm.ClockIcon, { size: "xxs", color: w.A.colors.ICON_OVERLAY_LIGHT }),
                                (0, a.jsx)(np, { className: nh.jB }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "automod",
            title: S.default["+EKk4D"],
            description: S.default.fpXK3z,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nh.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nh.iU,
                            children: [
                                (0, a.jsx)("span", { className: nh.my }),
                                (0, a.jsxs)("div", {
                                    className: nh.OS,
                                    children: [
                                        (0, a.jsx)(np, { className: nh.iE }),
                                        (0, a.jsx)(np, { className: h()(nh.xs, nh.pc) }),
                                        (0, a.jsx)(np, { className: h()(nh.Md, nh.pc) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nh.jC,
                            children: [
                                (0, a.jsx)(el.ShieldIcon, { size: "sm", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsxs)("div", {
                                    className: nh.qQ,
                                    children: [
                                        (0, a.jsx)(np, { className: h()(nh.Md, nh.k8) }),
                                        (0, a.jsx)(np, { className: h()(nh.nq, nh.k8) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    nx = i.memo(function () {
        let e = i.useId();
        return (0, a.jsx)("section", {
            className: nh.GG,
            "aria-labelledby": e,
            children: (0, a.jsx)(nf.F, {
                component: (0, a.jsx)(x.D, {
                    id: e,
                    variant: "heading-lg/medium",
                    children: E.intl.string(S.default.IiQEVd),
                }),
                children: (0, a.jsx)("ul", {
                    className: nh.Vg,
                    children: ng.map((e) => {
                        let { id: t, title: n, description: l, Visual: r } = e;
                        return (0, a.jsxs)(
                            "li",
                            {
                                className: nh.Vs,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: nh.Tn,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(r, {}),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: nh.pG,
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
function nv(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let nj = 1;
function nb(e) {
    let t = nv(e),
        n = { localId: nj++, name: e.name, contentType: t };
    if (
        !(0, ex.Oq)(e.size, t) &&
        !("image/png" === t && e.size <= ex.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas)
    )
        return { file: e, draft: { ...n, status: "error", errorText: tU(t) } };
    let l = ex.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: l } };
}
function ny(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function nk(e, t) {
    if ((0, ex.Oq)(t.size, nv(t))) return (0, ev.vX)(e, t);
    let n = await tV(t);
    if (null == n || !(0, ex.Oq)(n.size, n.type)) throw Error("attachment over its size limit");
    return (0, ev.vX)(e, n);
}
var nw = n(698638),
    nN = n(606128),
    nC = n(260024);
class nA extends Error {}
function nS(e) {
    let t,
        { guildId: n } = e,
        [l, r] = i.useState(""),
        [s, o] = i.useState(!1),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, k] = i.useState(() => W.w.get(X) ?? null ?? !0),
        w = i.useRef(null),
        N = (0, V.z9)("ConjureHomePage"),
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
        A = (0, b.o)().get(K.f_) === H,
        I = `${n}:${A}`,
        [T, L] = i.useState(null),
        $ = T?.context === I ? T.target : null,
        D = i.useCallback((e) => L({ context: I, target: e }), [I]),
        z = i.useCallback((e) => e === H || N.some((t) => t.id === e), [N]),
        O = !A && z(n) ? n : H,
        F = null != $ && z($) ? $ : O,
        q = F === H ? "user" : "guild",
        U = F === H ? n : F,
        B = (function () {
            let [e, t] = i.useState([]),
                n = i.useRef(e);
            (i.useLayoutEffect(() => {
                n.current = e;
            }),
                i.useEffect(() => () => n.current.forEach(ny), []));
            let l = i.useCallback((e) => {
                    if (0 === e.length) return;
                    let l = e.map(nb);
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
                    null != l && (ny(l), (n.current = n.current.filter((e) => e !== l)), t(n.current));
                }, []),
                s = i.useCallback(() => {
                    (n.current.forEach(ny), (n.current = []), t(n.current));
                }, []),
                o = i.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= ex.lN) return e;
                            let t = E.intl.formatToPlainString(S.default.Q0aCVZ, { count: ex.lN });
                            return e.map((e, n) =>
                                n < ex.lN || "error" === e.draft.status
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
        { attachments: Z, addFiles: Y, clear: Q } = B,
        ee =
            "idea" ===
                (t = (function (e) {
                    let { idea: t, installScope: n, submitting: l } = e;
                    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
                })({ idea: l, installScope: q, submitting: s })) ||
            "submitting" === t ||
            B.hasErrors,
        et = i.useCallback((e) => Y(Array.from(e)), [Y]);
    (0, J.p)(w);
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
                                            return nk(t, n);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, R.xx)(t).catch(() => void 0), new nA());
                                }
                            ((0, _.sendUserMessage)(t, e, n), Q());
                        },
                    });
                } catch (e) {
                    (c(e instanceof nA ? E.intl.string(S.default["903H7m"]) : (0, P.mG)(e)), (er.current = !1), o(!1));
                }
            }
        }, [l, q, d, U, Z, Q]),
        ei = i.useCallback((e) => {
            (W.w.set(X, e), k(e));
        }, []),
        es = i.useCallback(() => ei(!1), [ei]),
        eo = E.intl.string(f ? S.default.kar7jh : S.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: h()(nC.MY, nN.T),
        children: (0, a.jsxs)("div", {
            className: nC.Zp,
            children: [
                (0, a.jsxs)("main", {
                    className: nC.iW,
                    children: [
                        s
                            ? null
                            : (0, a.jsx)(j.A, {
                                  title: E.intl.string(S.default.gy7byi),
                                  description: E.intl.string(S.default["dkv/WO"]),
                                  icons: nw.ir,
                                  onDrop: et,
                              }),
                        (0, a.jsx)(M, {
                            title: E.intl.string(S.default.uk6jhJ),
                            transparent: !0,
                            actions: (0, a.jsx)(y.A.Icon, {
                                icon: p.Z,
                                color: "var(--icon-strong)",
                                className: nC.FW,
                                tooltip: eo,
                                "aria-label": eo,
                                selected: f,
                                onClick: () => ei(!f),
                            }),
                        }),
                        (0, a.jsx)(g.Ip, {
                            className: nC.XG,
                            children: (0, a.jsxs)("div", {
                                className: nC.Qs,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nC.Lv,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: nC.ZK,
                                                children: [
                                                    (0, a.jsx)(x.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: nC.DD,
                                                        children: E.intl.string(S.default.doYpEy),
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: nC.VA,
                                                        children: E.intl.string(S.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)("div", {
                                                className: nC.ZK,
                                                children: (0, a.jsx)(no, {
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
                                    (0, a.jsx)(nx, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                f ? (0, a.jsx)(tj, { guildId: n, modelSettings: d, onClose: es }) : null,
            ],
        }),
    });
}
var nE = n(478016),
    nI = n(604525),
    nM = n(92446),
    n_ = n(534890),
    nP = n(646270),
    nR = n(31300),
    nT = n(831453),
    nL = n(270593);
let n$ = Object.freeze({ x: 0.5, y: 0.5 });
function nD(e) {
    return "" !== e.trim();
}
function nz(e) {
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
function nO(e) {
    let { kind: t, name: n } = nz(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function nF(e) {
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
let nq = "[conjure:selected] ",
    nU = " \u2014 ";
function nG(e) {
    if (!e.startsWith(nq)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(nq.length),
        a = r.indexOf(nU),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let nB = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    nH = new Map(),
    nK = new Set();
function nV(e) {
    return nH.get(e) ?? nB;
}
function nW(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? nH.set(e, t) : nH.delete(e), [...nK]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function nX(e) {
    let t = nV(e);
    t.active || nW(e, { ...t, active: !0 });
}
function nJ(e) {
    let t = nV(e);
    t.active && nW(e, { ...t, active: !1 });
}
function nZ(e) {
    nH.has(e) && nW(e, nB);
}
function nY(e, t) {
    let n = nV(e);
    n.active && nW(e, { ...n, context: t });
}
function nQ(e, t) {
    return null != t && e.authorId === t;
}
function n0(e) {
    return (
        nK.add(e),
        () => {
            nK.delete(e);
        }
    );
}
function n1(e) {
    let t = i.useCallback(() => (null == e ? nB : nV(e)), [e]);
    return i.useSyncExternalStore(n0, t, t);
}
(n(134528), n(947204));
let n2 = { past: [], present: [], future: [] };
function n3(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function n5(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function n4(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => n5(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: n5(e.from, t, n), to: n5(e.to, t, n) };
        case "text":
            return { ...e, at: n5(e.at, t, n) };
    }
}
function n6(e) {
    return e.some((e) => "erase" !== e.kind);
}
function n7(e, t) {
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
function n8(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function n9(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function le(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => n9(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = n9(e.from, t),
                l = n9(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = n9(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function lt(e) {
    return n6(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let ln = [3, 6, 12],
    ll = [10, 20, 40],
    lr = (0, t_.D)(() => ({ byProject: {} })),
    la = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: n2,
        sketchDismissedFor: null,
    };
function li(e) {
    return lr.getState().byProject[e] ?? null;
}
function ls(e, t) {
    let n = li(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = lr.getState();
    lr.setState({ byProject: { ...r, [e]: l } });
}
function lo(e) {
    if (null == li(e)) return;
    let { [e]: t, ...n } = lr.getState().byProject;
    (lr.setState({ byProject: n }), nZ(e));
}
function lu(e, t) {
    null != li(e) &&
        (ls(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? nX(e) : nJ(e));
}
function lc(e, t) {
    ls(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return n3(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return n3(
                        e,
                        e.present.map((e) => (e.id === t.id ? n4(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : n3(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : n3(e, []);
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
function ld(e) {
    return lr.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var lm = n(39416);
function lf(e) {
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
            className: lm.i5,
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
var lh = n(245179);
let lp = new Set(),
    lg = null;
function lx(e, t) {
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
                lp.add(t),
                () => {
                    lp.delete(t);
                }
            );
        }, [e]));
}
var lv = n(885386);
function lj() {
    return lv.Q_.useSetting() || !1;
}
var lb = n(573083),
    ly = n(128761),
    lk = n(12177),
    lw = n(744627),
    lN = n(513845),
    lC = n(802905),
    lA = n(951178);
let lS = { width: 320, height: 240 };
var lE = n(855859),
    lI = n(238490),
    lM = n(991690),
    l_ = n(696645);
function lP(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function lR(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, l_.X)(e.surface)
                : E.intl.formatToPlainString(S.default["6xVl+N"], {
                      surface: (0, l_.X)(e.surface),
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
var lT = n(939398),
    lL = n(86147),
    l$ = n(729475),
    lD = n(91242),
    lz = n(156548),
    lO = n(869146),
    lF = n(475815),
    lq = n(165610);
function lU(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, lz.cR)(t?.id ?? null),
        r = (0, lb.Zv)(n),
        i = (0, o.bG)(
            [lO.A, lD.A],
            () => null != t && lO.A.getWindowOpen(q.MLl.ACTIVITY_POPOUT) && lD.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, lq.x1)(t) || i || r) return null;
    let s = (0, lz.fl)(t.id);
    if (null == s || !(0, lF.Ub)(s)) return null;
    let u = E.intl.string(l ? E.t.Z7MyNB : E.t.OIDkcp);
    return (0, a.jsx)(y.A.Icon, {
        tooltip: u,
        icon: l ? lL.z : l$.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, lz.U8)(t.id),
    });
}
var lG = n(704745);
function lB(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = E.intl.string(S.default.I2ucou);
    return (0, a.jsx)(ef.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: ef.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(eh.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(ep.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = lP(e);
                        return (0, a.jsx)(
                            ep.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: lR(e),
                                checked: t === lP(n),
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
            return (0, a.jsx)(tb.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: lG.h,
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
                            children: lR(n),
                        }),
                        (0, a.jsx)(nt.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var lH = n(324641),
    lK = n(627363),
    lV = n(153207),
    lW = n(803101),
    lX = n(226178),
    lJ = n(625180),
    lZ = n(672929),
    lY = n(111534),
    lQ = n(754027),
    l0 = n(457827),
    l1 = n(722701),
    l2 = n(949616),
    l3 = n(962998),
    l5 = n(535466),
    l4 = n(321032),
    l6 = n(277085);
let l7 = [];
var l8 = n(17813);
function l9(e) {
    let { permissions: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsxs)(te.B, {
              gap: 8,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default["6U+4pJ"]),
                  }),
                  (0, a.jsx)(l8.A, { permissions: t }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default.X8wPIB),
                  }),
              ],
          });
}
function re(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: u } = e,
        { iconURL: c } = (0, l5.Ay)(t),
        [d, m] = i.useState(n),
        [f, h] = i.useState(l),
        [p, g] = i.useState(null),
        [x, j] = i.useState(null),
        [b, y] = i.useState(!1),
        k = d.trim(),
        w = k === n ? null : (0, l6.p)(k),
        N = p ?? c,
        C = (0, o.bG)([l1.A], () => l1.A.getPublishStatus(t)?.previewDevicePermissions ?? l7);
    function A() {
        (r(), u());
    }
    async function I(e) {
        if ((e.preventDefault(), b || null != w)) return;
        (y(!0), j(null));
        let r = await (0, e5.$l)(t, { name: k, icon: p, description: f }, { name: n, description: l });
        (y(!1), r) ? A() : j(E.intl.string(S.default.Fi7boI));
    }
    return (0, a.jsx)("form", {
        onSubmit: I,
        children: (0, a.jsx)(e9.a, {
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
            children: (0, a.jsxs)(te.B, {
                gap: 24,
                children: [
                    (0, a.jsx)(l4.r, {
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
                    (0, a.jsx)(l9, { permissions: C }),
                    null != x
                        ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: x })
                        : null,
                ],
            }),
        }),
    });
}
var rt = n(373540),
    rn = n(144228);
function rl(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, o] = i.useState(t.selected_destination_id),
        u = E.intl.string(S.default.lJrOGW);
    return (0, a.jsx)(e9.a, {
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
        children: (0, a.jsx)(rn.z, {
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
let rr = {
    showPublishBlocked: rt.A,
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, tt.openModal)(
                (t) =>
                    (0, a.jsx)(re, {
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
            (0, tt.openModal)(
                (t) =>
                    (0, a.jsx)(rl, {
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
    showError: (e) => (0, ed.P0)({ text: e, variant: "critical" }),
};
var ra = n(58736),
    ri = n(333007),
    rs = n(775121),
    ro = n(826745),
    ru = n(470779);
function rc(e) {
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
        } = tZ({ projectId: t, surface: "design", onUploadFile: f }),
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
        className: h()(ru.M0, { [ru.ho]: _ && !m, [ru.ET]: m }),
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
                              className: ru.Fg,
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
                                  className: ru.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(S.default.lgvqSB),
                                  children: (0, a.jsx)(eg.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: ru.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(ro.y, {
                autoFocus: !0,
                rows: 1,
                className: ru.hF,
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
                      className: ru.ZO,
                      children: j.map((e) => (0, a.jsx)(tY, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function rd(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function rm(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rf(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? rd(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = rd(e());
                l((e) => (rm(e, t) ? e : t));
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
var rh = n(876798),
    rp = n(48507),
    rg = n(193885),
    rx = n(744898),
    rv = n(803656),
    rj = n(241326),
    rb = n(972213);
function ry(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rk(e, t, n) {
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
let rw = rk("red", ry(w.A.unsafe_rawColors.RED_400), () => E.intl.string(S.default.tvXfjt)),
    rN = [
        rw,
        rk("yellow", ry(w.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(S.default.FYuaJ1)),
        rk("green", ry(w.A.unsafe_rawColors.GREEN_360), () => E.intl.string(S.default["Vv+paS"])),
        rk("blue", ry(w.A.unsafe_rawColors.BLUE_345), () => E.intl.string(S.default.k9b1QJ)),
        rk("white", ry(w.A.unsafe_rawColors.WHITE), () => E.intl.string(S.default["1sOXwH"])),
    ];
function rC(e) {
    return rN.find((t) => t.id === e) ?? rw;
}
function rA(e) {
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
function rS(e) {
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
function rE(e) {
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
function rI(e) {
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
let rM = ln.map((e) => rI(Math.min(16, e + 3))),
    r_ = ll.map((e) => rI(Math.min(16, e / 2.5))),
    rP = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
    rR = {
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
function rT(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: lm.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(rh.k, {
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
function rL(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(eX.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function r$(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: lm.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: lm.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function rD(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rC(n.colorId),
        h = rR[u],
        p = E.intl.string(S.default.hUm825),
        g = E.intl.string(S.default.n5IA3a),
        x = E.intl.string(S.default.r5dX6t),
        v = E.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: lm.t$,
        children: [
            (0, a.jsx)("div", {
                className: lm.NT,
                children: (0, a.jsx)(rT, {
                    icon: rS,
                    label: E.intl.string(S.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => lu(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: lm.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": E.intl.string(S.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(rT, {
                        icon: rA,
                        label: E.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => lu(t, "move"),
                    }),
                    (0, a.jsx)(rT, {
                        icon: rp.x,
                        label: E.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => lu(t, "text"),
                    }),
                    (0, a.jsx)(r$, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rT, {
                                icon: rg.V,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (lu(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rM.map((n, l) =>
                                (0, a.jsx)(
                                    rT,
                                    {
                                        icon: n,
                                        label: E.intl.string(rP[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (ls(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), nJ(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r$, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(rT, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (lu(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(rR).map((n) =>
                                (0, a.jsx)(
                                    rT,
                                    {
                                        icon: rR[n].icon,
                                        label: rR[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (lu(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r$, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rT, {
                                icon: rE,
                                label: g,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (lu(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            r_.map((n, l) =>
                                (0, a.jsx)(
                                    rT,
                                    {
                                        icon: n,
                                        label: E.intl.string(rP[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (ls(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), nJ(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r$, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(rL, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rN.map((n) =>
                                (0, a.jsx)(
                                    rT,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                ls(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: lm.Gz, role: "separator" }),
                    (0, a.jsx)(rL, {
                        icon: rx.e,
                        label: E.intl.string((0, eb.isMac)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(rL, {
                        icon: rv.U,
                        label: E.intl.string((0, eb.isMac)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(rL, {
                        icon: rj.TrashIcon,
                        label: E.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: lm.Gz, role: "separator" }),
                    (0, a.jsx)(rL, { icon: rb.XLargeIcon, label: E.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let rz = w.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function rO(e, t, n) {
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
                    (e.strokeStyle = rz),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function rF(e) {
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
async function rq(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = rF(e),
            r = rF(e);
        if (null == l || null == r) return null;
        return (rO(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let rU = new Map(),
    rG = new Map(),
    rB = (0, t_.D)(() => ({ byMessageKey: {} }));
function rH(e, t) {
    let { [e]: n, ...l } = rB.getState().byMessageKey;
    rB.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function rK(e, t) {
    null == t ? rU.delete(e) : rU.set(e, t);
}
function rV(e) {
    return rU.get(e)?.() ?? Promise.resolve(null);
}
let rW = { dx: 0, dy: 0 },
    rX = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    rJ = 1;
function rZ(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = ld(s),
        { active: u } = n1(s),
        c = (0, tt.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => lo(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && nX(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(rY, { projectId: s, state: o, resolveIframe: r });
}
function rY(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = rf(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [p, g] = i.useState(rW),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        N = i.useRef(0),
        { tool: C, history: A } = n,
        I = rC(n.colorId),
        M = "pick" !== C,
        _ = "marker" === n.tool ? ln[n.markerSize] : "eraser" === n.tool ? ll[n.eraserSize] : null,
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
        let t = await (0, lH.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, ri.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, lH.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (rK(t, T), () => rK(t, null)), [t, T]);
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
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? n4(e, p.dx, p.dy) : e)),
            o = j.current;
        rO(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
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
                id: `mark-${rJ++}`,
                kind: "text",
                color: I.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (n7(n, r) && lc(t, { type: "commit", shape: n }), o(null));
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
                            l = null == P ? null : le(P, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? P
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = n9(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => n9(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (n8(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = n9(e.from, n),
                                                                  r = n9(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => n8(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = n9(e.from, n),
                                                                  r = n9(e.to, n),
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
                                                              let t = le(e, n);
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
                        if (!n6(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${rJ++}`,
                                kind: "erase",
                                width: ll[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${rJ++}`,
                                kind: "marker",
                                color: I.value,
                                width: ln[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${rJ++}`,
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
                ((b.current = null), g(rW), lc(t, { type: "move", id: e.id, dx: p.dx, dy: p.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && n7(n, r) ? lc(t, { type: "commit", shape: n }) : $());
        }, [t, r, p, $]),
        G = i.useCallback(() => lo(t), [t]),
        B = i.useCallback(() => lc(t, { type: "undo" }), [t]),
        H = i.useCallback(() => lc(t, { type: "redo" }), [t]),
        K = i.useCallback(() => lc(t, { type: "clear" }), [t]),
        V = i.useRef({ tool: C, selected: P, exit: G, undo: B, redo: H });
    if (
        (i.useLayoutEffect(() => {
            V.current = { tool: C, selected: P, exit: G, undo: B, redo: H };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, ei.Cw)((0, ei.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != y.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = V.current,
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
                    (e.preventDefault(), lc(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = rX[s];
                null != o && (e.preventDefault(), lu(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (M) return (rs.A.disable(), () => rs.A.enable());
        }, [M]),
        null == r)
    )
        return null;
    let W = Math.max(8, r.left - d - 8),
        X = null == P ? null : le(null == b.current ? P : n4(P, p.dx, p.dy), r);
    return (0, ri.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: lm.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: lm.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: lm.Ji,
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
                                  className: lm.V$,
                                  "data-tool": C,
                                  "data-color": I.id,
                                  style: { width: _, height: _ },
                                  "aria-hidden": !0,
                              }),
                        null == X
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: lm.r1,
                                  style: { left: X.x, top: X.y, width: X.width, height: X.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: lm.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: lm.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: lm.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: lm.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(rc, {
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
                          onUploadFile: (e) => (0, ev.vX)(t, e),
                          onDismiss: O,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: lm.ej,
                    style: { left: W, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(rD, { projectId: t, state: n, onExit: G, onUndo: B, onRedo: H, onClear: K }),
                }),
            ],
        }),
        document.body,
    );
}
var rQ = n(308081),
    r0 = n(689175),
    r1 = n(683071),
    r2 = n(218394),
    r3 = n(115982),
    r5 = n(886540);
function r4(e) {
    return !(0, r5.BL)(e) && !0 !== e.stopRequested;
}
var r6 = n(104317),
    r7 = n(643278),
    r8 = n(566424),
    r9 = n(683063),
    ae = n(140735),
    at = n(138212);
function an(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: h()(at.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: h()(at.wx, null != n && at.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var al = n(148590);
function ar(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function aa(e) {
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
        j = f ? nt.a : t0._,
        b = null != n || l;
    return (0, a.jsxs)(an, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: al.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(C.D, {
                                className: al.L$,
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
        headerClassName: f ? void 0 : al.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: h()(al.rf, o), hidden: !f, children: c })],
    });
}
var ai = n(883646);
let as = [];
function ao(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: h()(ai.xL, {
            [ai.Vb]: "in_progress" === t,
            [ai.cT]: "completed" === t,
            [ai.GZ]: "unfinished" === t,
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
            (0, a.jsx)(tE.y, {
                type: tE.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: ai.Qd,
                itemClassName: ai.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: ai.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: ai.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function au(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : as), [n, t]),
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
        className: ai.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    r9.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: ai.MA,
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
                      className: ai.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function ac(e) {
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
            ((t = (r ?? as).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? as),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: ai.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: h()(ai.AS, { [ai.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(ao, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: ai.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: ai.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(au, { agents: u.get(e.id) ?? as, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: ai.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(ao, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: ai.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: ai.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ad(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(S.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(S.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(aa, {
        title: E.intl.string(S.default.RtzECX),
        meta: (0, a.jsx)(ar, { children: c }),
        superseded: s,
        showLabel: E.intl.string(S.default.RKyN9q),
        hideLabel: E.intl.string(S.default.xydHoj),
        className: ai.Nr,
        bodyClassName: ai.rf,
        beforeBody: r && !s ? (0, a.jsx)(ae.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(ac, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var am = n(308665),
    af = n(59678),
    ah = n(903847);
function ap(e) {
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
              className: ah.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: h()(ah.vK, { [ah.ho]: g && c, [ah.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: h()(ah.Rk, af.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(r8.A, {
                                        glyph: (0, a.jsx)(am.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(C.D, {
                                    className: ah.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: h()(ah.Rk, af.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(r8.A, {
                                            glyph: (0, a.jsx)(am.Ay, {}),
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
                                        className: ah.BO,
                                        onClick: R,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(S.default.RtzECX),
                                        children: (0, a.jsx)(r7.ClipboardListIcon, {
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
                            className: h()(ah.vB, { [ah.pg]: v && A, [ah.ui]: !v }),
                            children: (0, a.jsx)(ad, {
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
var ag = n(195880);
function ax(e) {
    let t = (0, V.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var av = n(736553),
    aj = n(382541);
async function ab(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, aj.dv)(e),
        i = new av.u();
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
var ay = n(890497),
    ak = n(103557),
    aw = n(29073),
    aN = n(590077);
function aC(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = ax(e),
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
                                : tH(
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
                        ((t = eO.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(S.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, ag.m)() }), x.current.set(e.projectId, t)),
                                ab(e.projectId, l, t.nonce)
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
        className: h()(aw.nd, aw.jx),
        "aria-labelledby": c,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: aw.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: c,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: aw.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(eX.K, {
                        icon: em.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": E.intl.string(S.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: aN.r,
                children: [
                    0 === u.length
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TbbzW5),
                          })
                        : (0, a.jsx)(ay.Z, {
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
                    (0, a.jsx)(ak.f, {
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
                className: aw.qr,
                children: (0, a.jsx)("div", {
                    className: aw.zt,
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
var aA = n(658675),
    aS = n(22231),
    aE = n(123292),
    aI = n(734057),
    aM = n(287809);
function a_(e) {
    return 0 === e.options.length && null == e.input;
}
let aP = {
        [q.rbe.GUILD_TEXT]: "text",
        [q.rbe.GUILD_VOICE]: "voice",
        [q.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [q.rbe.GUILD_STAGE_VOICE]: "stage",
        [q.rbe.GUILD_FORUM]: "forum",
        [q.rbe.GUILD_MEDIA]: "media",
    },
    aR = { channel: "#", role: "@", user: "@", project: "" },
    aT = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
    };
function aL(e, t) {
    return E.intl.string(aT[e][+!!t]);
}
var a$ = n(155078);
function aD(e) {
    return e.options.some((e) => null != e.image);
}
let az = [];
async function aO(e, t) {
    await (0, ew.h)(e, "/agent/linked-apps", { method: "PUT", json: { caller_project_id: t } });
}
function aF(e, t) {
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
var aq = n(300344),
    aU = n(614733),
    aG = n(904363),
    aB = n(950902),
    aH = n(384017);
function aK(e) {
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
                        let l = null == (n = aI.A.getChannel(t)?.type) ? void 0 : aP[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = aM.default.getUser(t)?.username;
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
        className: aH.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(ay.Z, {
                  ...g,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(p(e), t),
              })
            : (0, a.jsx)(ay.Z, {
                  ...g,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : p([e]), t),
              }),
    });
}
function aV(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, aq.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(aK, { ...l, guildId: t, options: r, placeholder: aL("channel", !0 === l.question.multi_select) });
}
function aW(e) {
    let { guildId: t, ...n } = e,
        l = (0, aG.A)(t);
    return (0, a.jsx)(aK, { ...n, guildId: t, options: l, placeholder: aL("role", !0 === n.question.multi_select) });
}
function aX(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, aU.A)(t);
    return (0, a.jsx)(aK, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: aL("user", !0 === n.question.multi_select),
    });
}
function aJ(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = ax(t),
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
    return 0 === s.length ? n : (0, a.jsx)(aK, { ...l, options: s, placeholder: aL("project", !1) });
}
function aZ(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, aB.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(aJ, { projectId: t, fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(aV, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(aW, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(aX, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var aY = n(87221),
    aQ = n(26430),
    a0 = n(750943),
    a1 = n(95477),
    a2 = n(256905),
    a3 = n(490707),
    a5 = n(907702);
function a4(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, a3._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: h()(a5.Gt, a5.b6),
              children: [
                  (0, a.jsx)(aY.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: h()(a5.Gt, { [a5.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: a5.Sl,
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
function a6(e) {
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
        className: h()(a5.Vs, { [a5.Q9]: s, [a5.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(C.D, {
                className: a5.Up,
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
                        className: a5.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(a4, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: a5.Gt }),
                            (0, a.jsx)("span", {
                                className: a5.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(aA.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(rn.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: a5.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, a$.E)(t) : "")
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
                      className: a5.B4,
                      children: (0, a.jsx)(N.m, {
                          text: E.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(eX.K, {
                              icon: rj.TrashIcon,
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
                        className: a5.B4,
                        children: (0, a.jsx)(N.m, {
                            text: E.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(eX.K, {
                                icon: aQ._,
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
function a7(e) {
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
                    Promise.all(t.map((e) => (0, ev.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, a2.R)({
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
        className: a5.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: h()(a5.fF, "gallery" === f ? a5.nV : a5.nM, { [a5.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            a6,
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
                              a6,
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
            (0, a.jsx)(a8, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: E.intl.string(/\bicons?\b/i.test(l.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function a8(e) {
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
        className: a5.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: a5.QJ,
                children: [
                    (0, a.jsx)(Z.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: a0.X,
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
                              icon: eK.LinkIcon,
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
                        className: a5.Fg,
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
                                        (0, ex.Oq)(a.size, r)
                                            ? (0, ev.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: tU(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: a5.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: a5.Hs,
                              children: (0, a.jsx)(a1.k, {
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
                              className: a5.gd,
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
                                  (0, a.jsx)(aE.Q, {
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
function a9(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(C.D, {
        className: h()(aH.uK, { [aH.ue]: l, [aH.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: aH.dy, children: (0, a.jsx)(aA.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: aH.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: aH.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: aH.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: aH.ed,
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
                      className: aH.rM,
                      children: E.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function ie(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return aD(n)
        ? (0, a.jsx)(a7, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      a9,
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
let it = [],
    il = [];
function ir(e) {
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
        className: h()(aH.Ge, aH.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aH.aK,
                      children: E.intl.string(S.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(ie, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: aF(o, u),
            }),
            aD(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: aH.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: aH.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(aS.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: h()(aH.Pu, aH.es), children: c }),
                      ],
                  }),
        ],
    });
}
function ia(e) {
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
        [H, K] = i.useState({ id: B.id, expanded: !1 }),
        V = H.id === B.id && H.expanded,
        [W, X] = i.useState(null),
        J = c[B.id] ?? "",
        Y = !0 === B.multi_select,
        Q = aD(B),
        ee = Y ? (m[B.id] ?? it) : ((t = o[B.id]), t?.kind === "option" ? [t.optionId] : az),
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
                        if (o) return aF(h, m(i));
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
                                    null != l && (0, ev.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, ev.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                (0, ev.gm)(e, t).then(
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
        { text: er, phase: ea } = (0, t1.Q)(B.question),
        es = er === B.question,
        eo = es && W?.id === B.id && W.truncated;
    i.useLayoutEffect(() => {
        if (null == D || V || !es) return;
        function e() {
            if (null == D) return;
            let e = D.scrollHeight > D.clientHeight + 1;
            X((t) => (t?.id === B.id && t.truncated === e ? t : { id: B.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(D), () => t.disconnect());
    }, [es, D, B.id, V]);
    let eu = E.intl.string(V ? E.t.iTcuma : E.t.dcl9MQ),
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
                            : Promise.allSettled(i.map((e) => aO(e, n))).then(t));
                }
            },
            [l, r, n],
        ),
        ed = i.useCallback(
            (e, t) => {
                F.current += 1;
                let n = F.current;
                (I({ direction: t, moves: n }),
                    _({ question: B, draft: J, selected: ee, ownImage: en, ownSelected: el, direction: t, moves: n }),
                    L(!0),
                    w(e));
            },
            [J, en, el, B, ee],
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
                null == n ? ec(t) : ed(n, n < G ? "back" : "forward");
            },
            [o, l, q, G, B.id, ec, ed],
        ),
        eg = i.useCallback(() => {
            q || 0 === G || ed(G - 1, "back");
        }, [q, G, ed]),
        ex = G > 0 && !q,
        ej = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [B.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                Q ? q || u((e) => ({ ...e, [B.id]: t })) : ep(t);
            },
            [q, Q, B.id, ep],
        ),
        { multiPartFor: eb } = et,
        ey = i.useMemo(() => {
            var e;
            let t, n;
            return Y
                ? ((e = eb(B)),
                  (t = J.trim()),
                  (n = B.options.filter((e) => ee.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: ee,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [J, Y, eb, B, ee]),
        ek = p[B.id] ?? il,
        ew = i.useMemo(() => {
            var e, t;
            let n;
            return null != B.input
                ? ((e = B.input),
                  (t = x[B.id]),
                  (n = J.trim()),
                  {
                      kind: "entities",
                      entities: ek,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...ek.map((t) => (t.name.startsWith(aR[e]) ? t.name : `${aR[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [J, x, ek, B.id, B.input]),
        eN = i.useCallback(
            (e, t) => {
                (g((t) => ({ ...t, [B.id]: e })), j((e) => ({ ...e, [B.id]: t })));
            },
            [B.id],
        ),
        eC = i.useCallback(() => y(!0), []),
        eA = i.useCallback(() => y(!1), []),
        eS = et.controlsFor(B, q),
        eE = i.useCallback(() => {
            if (null != ew) {
                "" !== ew.text && ep(ew);
                return;
            }
            if (null != ey) {
                "" !== ey.text && ep(ey);
                return;
            }
            let e = J.trim();
            "" !== e && ep({ kind: "custom", text: e });
        }, [J, ey, ew, ep]),
        [eI, eM] = i.useState(!1),
        [e_, eP] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eM(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eR = i.useCallback(() => {
            null != s && (eP(!0), setTimeout(s, 150));
        }, [s]),
        eT = i.useMemo(
            () =>
                null != ew
                    ? "" !== ew.text
                        ? ew
                        : null
                    : null != ey
                      ? "" !== ey.text
                          ? ey
                          : null
                      : "" !== J.trim()
                        ? { kind: "custom", text: J.trim() }
                        : (o[B.id] ?? null),
            [o, J, ey, ew, B.id],
        ),
        eL = null != eT && !q,
        e$ = G === U - 1,
        eD = i.useCallback(() => {
            null == eT || q || ep(eT);
        }, [q, eT, ep]),
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
                  className: aH.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: aH.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(aS.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(ro.y, {
                          value: J,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [B.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eE());
                          },
                          placeholder: E.intl.string(a_(B) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                          "aria-label": E.intl.formatToPlainString(S.default["4JeYPB"], { question: B.question }),
                          disabled: q,
                          rows: 1,
                          className: aH.Pu,
                          "data-conjure-clarification-other": B.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: h()(aH.$O, { [aH.fI]: eI && !e_, [aH.Oh]: e_ }),
        role: "dialog",
        "aria-label": B.question,
        "data-conjure-clarification": l.id,
        "data-state": q ? "inert" : "open",
        "data-question-expanded": V ? "true" : void 0,
        "data-picker-open": b && !T ? "true" : void 0,
        "data-step": G,
        tabIndex: -1,
        onKeyDown: ez,
        children: [
            (0, a.jsxs)("div", {
                className: aH.rf,
                style: null == P ? void 0 : { height: P.heading + P.rows },
                "data-moving": T ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: $,
                        className: aH.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: z,
                                tag: "span",
                                id: `${B.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: V ? void 0 : 5,
                                className: h()(aw.TK, aH.R_, { [aH.TB]: "exit" === ea, [aH.JU]: "enter" === ea }),
                                children: er,
                            }),
                            eo || V
                                ? (0, a.jsx)("div", {
                                      className: aw.Q7,
                                      children: (0, a.jsx)(N.m, {
                                          text: eu,
                                          children: (0, a.jsx)(eX.K, {
                                              icon: V ? tQ.t : nt.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => K({ id: B.id, expanded: !V }),
                                              "aria-label": eu,
                                              "aria-controls": `${B.id}-label`,
                                              "aria-expanded": V,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(C.D, {
                                      className: h()(aw.gb, aw.Q7),
                                      onClick: eR,
                                      "aria-label": E.intl.string(S.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(em.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: aH.Cg,
                        style: null == P ? void 0 : { insetBlockStart: P.heading },
                        children: (0, a.jsxs)("div", {
                            className: aH.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: O,
                                    className: aH.Ge,
                                    role: "group",
                                    "aria-labelledby": `${B.id}-label`,
                                    "data-direction": A?.direction,
                                    "data-parity": null == A ? void 0 : A.moves % 2,
                                    children: [
                                        Y
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: aH.aK,
                                                  children: E.intl.string(S.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(ie, {
                                            projectId: n,
                                            question: B,
                                            selected: ee,
                                            disabled: q,
                                            onPick: (e) =>
                                                Y
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [B.id]:
                                                                  ((n = t[B.id] ?? it),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  B.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ej(e),
                                            own: eS,
                                        }),
                                        null != B.input
                                            ? (0, a.jsx)(aZ, {
                                                  projectId: n,
                                                  question: B,
                                                  value: ek,
                                                  disabled: q,
                                                  onChange: eN,
                                                  onFocus: eC,
                                                  onBlur: eA,
                                                  fallback: !1 === B.allow_custom ? eO : null,
                                              })
                                            : null,
                                        !1 === B.allow_custom ? null : eO,
                                    ],
                                }),
                                null == M
                                    ? null
                                    : (0, a.jsx)(
                                          ir,
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
            U > 1 || Y || Q || null != B.input || a_(B)
                ? (0, a.jsxs)("div", {
                      className: aw.qr,
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
                              className: aw.zt,
                              children: [
                                  ex
                                      ? (0, a.jsx)(aE.Q, {
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
var ii = n(557744),
    is = n(223347),
    io = n(894443),
    iu = n(525530);
function ic(e, t) {
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
var id = n(572253),
    im = n(411236);
function ih(e) {
    let { projectId: t, request: n, onDismiss: l, notifyAgent: r = !0 } = e,
        i = null != n.note && "" !== n.note ? n.note : E.intl.string(S.default.XuOf5s);
    return (0, a.jsx)(id.A, {
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
                      className: im.Mk,
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
                          (0, a.jsx)("div", { className: im.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: h()(aw.nd, aw.jx),
                      "aria-label": E.intl.string(S.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: aw.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: aw.TK,
                                      children: E.intl.string(S.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(C.D, {
                                      className: h()(aw.gb, aw.Q7),
                                      onClick: l,
                                      "aria-label": E.intl.string(S.default["iq+Pte"]),
                                      children: (0, a.jsx)(em.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: im.DQ,
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
                              className: aw.qr,
                              children: (0, a.jsx)("div", { className: aw.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var ip = n(935208),
    ig = n(932111),
    ix = n(404373),
    iv = n(435558),
    ij = n.n(iv);
let ib = "ConjureComposerDrafts";
function iy() {
    return W.w.get(ib) ?? {};
}
let ik = new Map(),
    iw = ij().throttle(() => {
        if (0 === ik.size) return;
        let e = iy();
        for (let [t, n] of ik) "" === n ? delete e[t] : (e[t] = n);
        (ik.clear(), W.w.set(ib, e));
    }, 1e3);
class iN extends o.Ay.Store {
    getDraft(e) {
        let t = ik.get(e);
        return null != t ? t : (iy()[e] ?? "");
    }
}
let iC = new iN(tM.h, {
    LOGOUT: function () {
        return (ik.clear(), iw.cancel(), W.w.remove(ib), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (ik.set(t, n), iw(), "" === n && iw.flush(), !1);
    },
});
function iA(e) {
    return "" !== iC.getDraft(e).trim();
}
var iS = n(29080);
function iE(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, r3.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, r3.Lf)(r) }),
    };
}
var iI = n(62617);
let iM = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    i_ = {
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
    iP = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, iI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, iI.Z)(),
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
                        () => (0, iI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, iI.Z)(),
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
                        () => (0, iI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, iI.Z)(),
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
                        () => (0, iI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, iI.Z)(),
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
                        () => (0, iI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, iI.Z)(),
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
                        () => (0, iI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, iI.Z)(),
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
                        () => (0, iI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, iI.Z)(),
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
                        () => (0, iI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, iI.Z)(),
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
                        () => (0, iI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, iI.Z)(),
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
                        () => (0, iI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, iI.Z)(),
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
                        () => (0, iI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, iI.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function iR(e) {
    return { ...iP[e], name: E.intl.string(i_[e]()) };
}
function iT(e) {
    return iM.includes(e) ? iR(e) : void 0;
}
function iL(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % iM.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, iM[(t + n) % iM.length]);
            }),
            l
        );
    })(e))
        t.set(n, iR(l));
    return t;
}
var i$ = n(615839);
function iD(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.KcFvbo);
}
var iz = n(60160),
    iO = n(16634);
function iF(e) {
    let t = (0, r3.SY)(e.steps);
    return null != t ? (0, r3.WQ)(t) : iD(e.task);
}
function iq(e) {
    let t = iL(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? iT(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: iD(e.task),
                      todoId: e.task.todoId,
                      line: iF(e),
                  },
              ];
    });
}
function iU(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, r3.SY)(n.steps),
        d = u
            ? iF(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(iD(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, i$.MB)(e.durationMs),
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
                                    className: af.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            iO.A,
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
                                      className: af.iq,
                                      children: (0, a.jsx)(iz.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(r8.A, {
        glyph: (0, a.jsx)(r9.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: iD(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: af.nC,
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
var iG = n(998445),
    iB = n(643210),
    iH = n(648127),
    iK = n(372795),
    iV = n(163897);
let iW = "conjure-browser-viewer";
function iX(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [iB.A],
            () =>
                n.flatMap((e) => {
                    let n = iB.A.getTab(t, e);
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
        className: iV.kR,
        "aria-label": E.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(iJ, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function iJ(e) {
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
        u = (0, tt.useHasModalOpen)(iW),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        p = (0, iH.i)(l.session);
    return (0, a.jsxs)(C.D, {
        innerRef: s,
        className: h()(iV.Nr, f && iV.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, tt.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: iW },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(S.default.G3a822, { title: p }),
        children: [
            (0, a.jsxs)("div", {
                className: iV.Gt,
                children: [
                    (0, a.jsx)(iK.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: iV.Ji,
                        "aria-label": E.intl.formatToPlainString(S.default.rnwqXb, { name: p }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: iV.qf,
                              children: (0, a.jsx)(iG.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: iV.HS,
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
                className: iV.pG,
                children: [
                    (0, a.jsx)("span", { className: h()(iV.W9, f && iV.oM) }),
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
var iZ = n(268409);
let iY = new WeakMap(),
    iQ = new WeakMap();
function i0(e) {
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
            [lh.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = iY.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = iQ.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), iQ.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (iY.set(e, n), n);
                })(lh.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: iZ.h, children: (0, a.jsx)(iX, { projectId: t, sessionIds: u }) });
}
var i1 = n(469393);
function i2(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, ly.lG)(t.authored_at);
    return (0, a.jsx)(an, {
        title: E.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: i1.r,
            children: [
                (0, a.jsxs)("div", {
                    className: i1.z,
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
var i3 = n(155718);
function i5(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let i4 = ["command", "user_command", "message_command", "message"],
    i6 = new Set([i3.kc.CHAT, i3.kc.USER, i3.kc.MESSAGE]);
function i7(e) {
    return e.type ?? i3.kc.CHAT;
}
function i8(e) {
    return i6.has(i7(e));
}
function i9(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function se(e, t) {
    let n = i4.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !i9(e)), ...n.filter(i9)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || i9(r) || l.push(r);
    }
    return i4.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function st(e, t, n) {
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
    let s = e.commands.filter(i8).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (i7(e)) {
                    case i3.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case i3.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(i9),
        u = a.length > 0 ? se([...a, ...o], !0) : se("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var sn = n(377941),
    sl = n.n(sn);
function sr(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function sa(e) {
    return e.type === i3.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === i3.kc.USER || e.type === i3.kc.MESSAGE
          ? ""
          : "/";
}
let si = {
        [lA.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [lA.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [lA.q7.ACTIVITY]: S.default["3/aHX6"],
        [lA.q7.OVERLAY]: S.default["rPpf5/"],
        [lA.q7.PROFILE_WIDGET]: null,
        [lA.q7.AUTOMOD]: null,
        [lA.q7.BOT]: null,
        [lA.q7.APPLICATION_COMMANDS]: null,
    },
    ss = [lA.q7.ACTIVITY, lA.q7.APP_CHANNEL, lA.q7.VOICE_CHANNEL, lA.q7.OVERLAY];
function so(e) {
    return ss.find((t) => i5(e, t)) ?? null;
}
var su = n(176999),
    sc = (((l = {}).IMAGE = "image"), l),
    sd = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    sm = n(598748),
    sf = n(773669);
let sh = [],
    sp = {},
    sg = {};
function sx(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function sv(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: sc.IMAGE,
        visibility: sd.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var sj = n(127258),
    sb = n(803306),
    sy = n(320095),
    sk = n(963852),
    sw = n(95701),
    sN = n(889227),
    sC = n(427262);
let sA = new sw.nA({ id: "1337", guild_id: "1337", type: q.rbe.GUILD_TEXT, name: "preview" });
function sS(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([aM.default], () => aM.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, sb.nj)(new sN.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let sE = /^@\S+/;
var sI = n(97808),
    sM = n(778712),
    s_ = n(46054),
    sP = n(200700);
let sR = {
        alert: { label: () => E.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    sT = {
        blocked: { label: () => E.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(S.default.RGzFNK), tone: "green" },
    },
    sL = ["blocked", "alert", "allowed"],
    s$ = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function sD(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, sP.getFriendlyDurationString)(n))
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
var sz = n(984097),
    sO = n(13673);
let sF = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function sq(e) {
    let { example: t } = e,
        n = sD(t);
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
let sU = ["glazedgamer", "sprinkles", "donutking"];
function sG(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = sR[n.outcome];
    return (0, a.jsxs)("li", {
        className: h()(sz.nM, { [h()(sz.HV, sO.DX)]: s }),
        children: [
            (0, a.jsx)(ae.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: sz.my,
                children: (0, a.jsx)(sI.eu, {
                    src: (0, Q.AE)(void 0, void 0),
                    size: sM._3.SIZE_24,
                    "aria-label": E.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: sz.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), s_.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(sq, { example: n }) : null,
                ],
            }),
        ],
    });
}
function sB(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = sT[t.section],
        s = new Set(t.examples.map(sD)),
        o = 1 === s.size ? t.examples.map(sD)[0] : null;
    return (0, a.jsxs)("div", {
        className: sz.UO,
        children: [
            (0, a.jsxs)("div", {
                className: sz.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: sF[r.tone],
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
                                      className: sz.IQ,
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
                className: sz.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(sG, { example: e, username: sU[(n + t) % sU.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function sH(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            sL
                .map((e) => ({ section: e, examples: t.filter((t) => s$[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: sz.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: sz.hk,
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
                    sB,
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
var sK = n(276293),
    sV = n(460905),
    sW = n(110384),
    sX = n(633018),
    sJ = n(763754),
    sZ = n(217424),
    sY = n(194085),
    sQ = n(20851),
    s0 = n(692508),
    s1 = n(798819);
function s2(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: h()(s1.item, s1.labelContainer, s1.colorDefault, {
            [s1.focused]: !0 === t.highlighted,
            [s1.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: s1.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: s1.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: h()(s1.label, s0.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: s1.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: s1.icon }),
                  })
                : null,
        ],
    });
}
function s3(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: h()(t, s0.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: sW.W, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: h()(s1.menu, s0.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: s1.scroller,
            children: [
                (0, a.jsx)(s2, { item: s }),
                (0, a.jsx)("div", { className: s1.separator }),
                (0, a.jsx)(s2, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var s5 = n(381941);
function s4() {}
function s6(e) {
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
        } = ((t = (0, o.bG)([aM.default], () => aM.default.getCurrentUser())),
        (n = (0, o.bG)([eO.Ay], () => eO.Ay.getProject(g))),
        (l = n?.application_id),
        (r = (0, o.bG)([ti.A], () => ti.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(S.default.JEYq8M)),
        (u = (0, o.bG)([aM.default], () => (null != l ? aM.default.getUser(l) : void 0), [l])),
        (d = sS("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = sS("31338", E.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (p = sS("31339", (0, sC.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, sy.rh)({
                                          ...(0, sk.Ay)({
                                              channelId: sA.id,
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
                                                        type: sj.G.APPLICATION_COMMAND,
                                                        user: (0, sk.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(sE, `<@${i.id}>`)), s),
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
    let k = sA.name;
    return (0, a.jsxs)("div", {
        className: s0.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: s0.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sK.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: h()(s0.TE, `group-spacing-${s5.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? s0.Rz : void 0,
                            children: [
                                (0, a.jsx)(sQ.A, {
                                    message: n,
                                    channel: sA,
                                    author: (0, sJ.FT)(n.author, sA),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(sZ.A, { message: n, channel: sA }) : void 0,
                                    usernameClassName: r?.target === "user" ? s0.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: s0.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(sY.Ay, {
                                              children: [
                                                  (0, a.jsx)(sY.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: sV.n,
                                                      onClick: s4,
                                                  }),
                                                  (0, a.jsx)(sY.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: sW.W,
                                                      onClick: s4,
                                                  }),
                                                  (0, a.jsx)(sY.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: eJ.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: s4,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? s0.ET : s0.je,
                                          inert: !0,
                                          children: (0, a.jsx)(s3, {
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
                className: s0.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sX.k, { size: "sm", color: "currentColor" }),
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
var s7 = n(332173);
function s8(e) {
    let { name: t } = e;
    return (0, a.jsxs)(s7.A, { children: ["/", t] });
}
function s9(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(sl());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(s8, { name: e.name }, e.start) : e.text));
}
n(827669);
var oe = n(757789),
    ot = n(26137);
let on = {
    frame: S.default.Z2bt4u,
    overlay_widget: S.default["0mGHfU"],
    user_widget: S.default.Jipr29,
    bot: S.default.EbvC13,
    commands: S.default.EbvC13,
    automod: S.default.tiMvei,
};
var ol = n(573634);
let or = {
    frame: ee.GameControllerIcon,
    overlay_widget: oe.V,
    user_widget: ot.r,
    bot: er.RobotIcon,
    commands: er.RobotIcon,
    automod: el.ShieldIcon,
};
function oa(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: h()(ol.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function oi(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: ol.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: ol.jw,
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
function os(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: ol.lj,
        children: [
            (0, a.jsx)("span", {
                className: h()(ol.Vo, ol.G),
                children: (0, a.jsx)(et.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: ol.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function oo(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: ol.wZ,
        children: t.map((e, t) => {
            let n = sa(e),
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
                                ? (0, a.jsx)(s8, { name: e.name })
                                : (0, a.jsx)(s7.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function ou(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: ol.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: ol.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(s9, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function oc(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? et.k : or[t.kind],
        u = E.intl.string(s ? S.default.BM4Ymz : on[t.kind]);
    return (0, a.jsxs)("section", {
        className: ol.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: ol.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: ol.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: ol.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(s9, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(ou, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: ol.PG, children: r }) : null,
        ],
    });
}
function od(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: ol.aN,
        children: [
            (0, a.jsxs)("div", {
                className: ol.Lv,
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
                                let n = t.map(sl()).join("|");
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
                            (0, a.jsx)("div", { className: ol.yF, role: "separator" }),
                            (0, a.jsx)(oc, {
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
                                                if (t.surfaces.includes(lA.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(lA.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(lA.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        oa,
                                                        {
                                                            className: ol.Iw,
                                                            caption: E.intl.formatToPlainString(S.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: ol.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        os,
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
                                                            oa,
                                                            {
                                                                caption: E.intl.string(S.default.MY6UGJ),
                                                                children: (0, a.jsx)(oi, { labels: r }),
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
                                                              oa,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(oo, { commands: e.commands }),
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
                                                            ? [{ key: t, caption: E.intl.string(n), labels: l.map(sr) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            oa,
                                                            { caption: n, children: (0, a.jsx)(oi, { labels: l }) },
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
var om = n(633075),
    of = n(946356),
    oh = n(58216),
    op = n(27399);
function og(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([aM.default], () => aM.default.getCurrentUser()),
        r = i.useMemo(() => new om.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: op.H,
              children: (0, a.jsx)(of.A.Overlay, {
                  className: op.w,
                  children: (0, a.jsx)(oh.A, {
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
var ox = n(443863);
function ov(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = (0, a3._)(t, r),
        c = i.useCallback(() => {
            (0, ev.PK)(t, r).then(
                (e) => {
                    (0, a2.R)({
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
              className: ox.xX,
              onClick: c,
              "aria-label": E.intl.string(S.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: ox.sN, onError: u }) : null,
          });
}
function oj(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = i5(c, lA.q7.APPLICATION_COMMANDS)),
            (l =
                i5(c, lA.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(i8)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : st(c, l, {
                              message: E.intl.string(S.default.J7qggf),
                              reply: E.intl.string(S.default.nqYtiy),
                              event: E.intl.string(S.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = sg } = t,
                r = (0, o.bG)([sf.default], () => sf.default.locale),
                a = (0, o.bG)([eO.Ay], () => {
                    let t = eO.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(sp);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, ev.PK)(e, l.id).then(
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
                                                          ...sx(n),
                                                          ...(null != n.fallback ? { fallback: sx(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = su.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[sm.m.WIDGET_TOP] || null == i[sm.m.WIDGET_BOTTOM]
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
                                                                    type: su.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: su.oG.NUMBER, value: a })
                                                                : (r[e] = { type: su.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(sv),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: sh,
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
                        .filter((e) => "/" === sa(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = so(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(i8)
                    ? st({ ...c, bot: void 0 }, "commands", {
                          message: E.intl.string(S.default.J7qggf),
                          reply: E.intl.string(S.default.nqYtiy),
                          event: E.intl.string(S.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([eO.Ay], () => eO.Ay.getProject(u)?.name, [u]),
        k =
            p && null != d
                ? E.intl.formatToPlainString(S.default.YZ3qJs, { version: d.version })
                : E.intl.string(S.default["3b6e7o"]),
        w = p ? (0, a.jsx)(ar, { children: E.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(aa, {
        title: k,
        meta: w,
        superseded: p,
        showLabel: E.intl.string(S.default.yD8EJS),
        hideLabel: E.intl.string(S.default.nSPGNb),
        bodyClassName: ox.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: ox.Qs,
                children: (0, a.jsx)(od, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(s9, { text: c.summary, commandNames: x }),
                            }),
                            "" !== g
                                ? (0, a.jsxs)("section", {
                                      className: ox.uW,
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
                                              children: (0, a.jsx)(s9, { text: g, commandNames: x }),
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
                                    ? (0, a.jsx)(ov, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: E.intl.string(null == (t = so(c)) ? S.default["3/aHX6"] : si[t]),
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(og, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(sH, { automod: c.automod })
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
                                        (r = l.some((e) => "command" === e.kind || i9(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(s6, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: x,
                }),
            }),
            null == m || p
                ? null
                : (0, a.jsxs)("div", {
                      className: ox.qr,
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
var ob = n(289565);
function oy(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: ob.m, children: n })
        : (0, a.jsxs)("div", {
              className: ob.Z,
              children: [
                  n,
                  (0, a.jsx)(N.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(eX.K, {
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          icon: em.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function ok(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "unpublished" === t.state);
}
function ow(e, t) {
    return null != e && ok(t, e.status);
}
let oN = new WeakMap();
function oC(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, o.bG)([d.A], () => (null == n ? null : d.A.getGuild(n)));
    return (0, a.jsx)(te.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(te.B, {
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
                    ? (0, a.jsxs)(te.B, {
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
function oA(e) {
    let { projectId: t, cta: n } = e,
        l = (0, e5.Ay)(t);
    return null != l && ow(l, n)
        ? (0, a.jsx)(oy, {
              children: (0, a.jsxs)(te.B, {
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
                      (0, a.jsx)(oC, { publish: l }),
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
var oS = n(303345),
    oE = n(44255),
    oI = n(416473),
    oM = n(289830);
function o_(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, o.bG)(
                    [eO.Ay],
                    () => {
                        let t = eO.Ay.getProject(e);
                        return null != t && (0, eO.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                c = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, oI.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof oS.A ? e.message : E.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(S.default.orZDqY, { time: (0, oE.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, oE.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(an, {
        title: E.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: oM.r,
            children: [
                (0, a.jsxs)("div", {
                    className: oM.z,
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
var oP = n(989271);
function oR(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(C.D, {
        className: h()(oP.nM, { [oP.f1]: s, [oP.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: oP.jo,
                children: [
                    n
                        ? (0, a.jsx)(nE.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: oP.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: oP.G9,
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
function oT(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(an, {
        title: E.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                oR,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var oL = n(530557),
    o$ = n(872162),
    oD = n(564963),
    oz = n(202723);
function oO(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tt.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: oL.R })), [r.fields]),
        d = (0, oD.bB)(l, s),
        m = h()(oz.Lo, { [oz.jY]: d });
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
                        (0, a.jsx)(o$.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: oz.Lo,
                      children: (0, a.jsx)(o$.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
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
                                className: oz.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: oz.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(nu.y, {
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
                            (0, a.jsx)(o$.C, { label: E.intl.string(S.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: oz.Lo,
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
                        (0, a.jsx)(o$.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: oz.sq,
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
var oF = n(919790),
    oq = n(908492),
    oU = n(971824),
    oG = n(162052),
    oB = n(165648);
function oH(e) {
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
        x = i.useMemo(() => (0, r3.Jf)(n, l), [n, l]),
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
            className: af.pj,
            "data-live": !1,
            children: (0, a.jsx)(r8.A, {
                glyph: (0, a.jsx)(iS.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, r3.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = iL(k.map((e) => e.taskId)),
        N = !p && (l || k.some((e) => "running" === e.task.status)),
        C = iq(k);
    return (0, a.jsxs)("ol", {
        className: af.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(r6.Ay, {
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
                let l = null != e.task.helperMark ? iT(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          iU,
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
            (0, a.jsx)(i0, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: af.YO,
                      children: (0, a.jsx)(ad, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function oK(e) {
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
            () => iE({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: P, lastStreamedMessage: R, showsClosingMessage: T, closingContent: L } = _,
        $ = (w ? N : void 0) ?? _.attachmentsHost,
        D = T && !w,
        z = null == u ? null : (0, a.jsx)(oF.A, { projectId: t, attachments: u }),
        O = null == z ? null : (0, a.jsx)("div", { className: af.MT, children: z }),
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
        className: af.ue,
        children: [
            P.length > 0 && !w
                ? (0, a.jsx)("ol", {
                      className: af.dO,
                      children: P.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: af.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: oB.PT,
                                          children: (0, oq.U)(e.content, !0, {
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
                ? (0, a.jsx)(oj, { projectId: t, proposal: r, version: s, onApprove: b })
                : D
                  ? (0, a.jsxs)("div", {
                        className: h()(af.ky, oG.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: h()(oB.PT, af.cW),
                                children: (0, oq.U)(L, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === $ ? O : null,
                            F,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: h()(af.ky, oG.XR, { [oU.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(oO, {
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
                      className: h()(af.ky, oG.XR),
                      children: (0, a.jsx)(ih, { projectId: t, request: p }),
                  })
                : null,
            "standalone" !== $ && ("closing" !== $ || D) ? null : z,
            null != g ? (0, a.jsx)(oA, { projectId: t, cta: g }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(oT, { ideas: o, pickedIdeaIds: j, onPick: x }) : null,
            null != C ? (0, a.jsx)(i2, { proposal: C, onRestore: A }) : null,
            null != I ? (0, a.jsx)(o_, { projectId: t, proposal: I, current: M }) : null,
            D ? null : F,
        ],
    });
}
var oV = n(864970),
    oW = n(146806),
    oX = n(475358),
    oJ = n(717400),
    oZ = n(99677),
    oY = n(655098),
    oQ = n(234320),
    o0 = n(191023);
function o1(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(tK.p, {
        name: E.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: lm.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(o0.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: lm.OY,
                    children: (0, a.jsx)(aS.PencilIcon, {
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
            className: tW.o1,
            onClick: () => {
                ls(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": E.intl.string(S.default.N852dj),
            children: (0, a.jsx)(tI.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function o2(e) {
    let { send: t } = e;
    return (0, a.jsxs)(tK.p, {
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
            "uploading" === t.status ? (0, a.jsx)(tE.y, { type: tE.t.SPINNING_CIRCLE_SIMPLE, className: tW.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(aE.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: E.intl.string(S.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var o3 = n(901173),
    o5 = n(161431),
    o4 = n(280450),
    o6 = n(503275),
    o7 = n(659280),
    o8 = n(351906),
    o9 = n(407653),
    ue = n(322915);
function ut(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([o8.A], () => o8.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      o7.Ay.User,
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
                      o7.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(o9.A, { projectId: n, file: e.file, className: ue.Vk }),
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
    return (0, a.jsx)(o7.Ay, {
        id: t,
        className: ue.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(un, { titleId: c, title: E.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                p.length > 0
                    ? (0, a.jsx)(un, { titleId: d, title: E.intl.string(S.default.zA5KLM), children: p })
                    : null,
            ],
        }),
    });
}
function un(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: ue.Gf, children: n }),
            l,
        ],
    });
}
var ul = n(719442),
    ur = n(355622),
    ua = n(408018),
    ui = n(186306),
    us = n(323350),
    uo = n(35277),
    uu = n(820066),
    uc = n(683167),
    ud = n(267102),
    um = n(259691);
let uf = (0, sw.createChannelRecord)({ id: "1", type: q.rbe.DM });
function uh(e) {
    let t = uu.VW.end(e, []);
    return { anchor: t, focus: t };
}
function up(e) {
    return (0, us.WO)(uu.VW.richValue(e), { mode: "raw" });
}
function ug(e, t) {
    ((e.children = (0, ua.x7)(t)), (e.selection = uh(e)), e.onChange());
}
function ux(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(ig.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(um.A, { attachmentId: r }), n] });
}
var uv = n(497437);
let uj = "text-md/normal",
    ub = null;
function uy(e) {
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
                frontFrom: 1e3 * (0, oW._R)(m),
                frontTo: 1e3 * (0, oW._R)(h),
                backFrom: 1e3 * (0, oW.T)(m),
                backTo: 1e3 * (0, oW.T)(h),
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
        M = (0, o.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        _ = t === E.intl.string(S.default.Zc7gML),
        P = r === t && _;
    function R(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: h()(uv.VT, { [uv.qk]: l }),
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
            children: (0, a.jsx)(oX.e, { shortcut: "tab", className: uv.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(oV.o, {
                text: t,
                variant: uj,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: h()(uv.xM, { [uv.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            R(uv.IS, n || (!M && "out" === k), u),
            (0, a.jsx)("span", {
                ref: c,
                className: uv.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: uj, tag: "span", children: t }),
            }),
            P
                ? (0, a.jsxs)("span", {
                      className: uv.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: uj, tag: "span", className: uv.xM, children: t }),
                          R(uv.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uk = i.memo(function (e) {
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
                let t = i.useContext(ud.Ay),
                    [n] = i.useState(() => {
                        let n = (0, ul.ie)();
                        return (
                            (n.children = (0, ua.x7)(e)),
                            (n.selection = uh(n)),
                            (0, uc.a)({
                                editor: n,
                                chatInputType: ur.oU.GENERIC_RICH_TEXTAREA,
                                channel: uf,
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
                                    for (let [t, l] of uu.VW.nodes(e, { at: [], match: uu.l5.isText }))
                                        for (let e of t.text.matchAll(ig.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        ui.o.withMergedEntry(e, () =>
                                            uu.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    uo.b.textToVoid(
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
            })(iC.getDraft(t)),
            [y, k] = i.useState(() => up(b)),
            w = i.useRef(y),
            [C, A] = i.useState(null),
            I = i.useCallback(() => {
                let e = up(b);
                e !== w.current &&
                    ((w.current = e),
                    tM.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }),
                    k(e));
                A(
                    (function (e) {
                        let { selection: t } = e;
                        if (null == t || !uu.ZF.isCollapsed(t)) return null;
                        let [n] = uu.VW.node(e, t.anchor.path);
                        return uu.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                    })(b),
                );
            }, [b, t]),
            M = i.useCallback((e) => ug(b, e), [b]),
            P = "" !== y.trim();
        i.useEffect(() => x?.(P), [P, x]);
        let R = i.useRef(t);
        i.useLayoutEffect(() => {
            R.current !== t && ((R.current = t), ug(b, iC.getDraft(t)));
        }, [b, t]);
        let T = (0, o.bG)([Y.Ay], () => Y.Ay.isSubmitButtonEnabled),
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
            } = tZ({ projectId: t, surface: "chat", onUploadFile: c }),
            H = lr.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && lt(n);
            }),
            K = "" !== y.trim() || z.length > 0 || g || H,
            V = n && K && G,
            [W, X] = i.useState(null);
        i.useEffect(() => {
            if (null == W) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => X(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [W]);
        let J = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: c } =
                        ((t = (0, o.bG)([eO.Ay], () => eO.Ay.getProject(e), [e])),
                        (n = t?.id),
                        (l = t?.owner_user_id),
                        (r = (0, o.yK)(
                            [lh.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              lh.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, o6.Y_)(l), r.forEach(o6.Y_));
                        }, [l, r]),
                        (a = (0, o.bG)([aM.default], () => (null == l ? null : aM.default.getUser(l)), [l])),
                        (s = (0, o.yK)(
                            [aM.default],
                            () => r.map((e) => aM.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    d = (0, o.bG)([o4.default], () => o4.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...c].filter((e) => e.id !== d && !e.bot),
                    [u, c, d],
                );
            })(t),
            Z = (0, o5.rU)(t),
            [Q, ee] = i.useState(null),
            [et, en] = i.useState(0),
            el = i.useMemo(() => (null != C && n ? (0, o3.OG)(C, C.length) : null), [C, n]),
            er = el?.start ?? null;
        i.useEffect(() => {
            null == er ? ee(null) : (0, o5.IP)(t);
        }, [er, t]);
        let ea = er === Q ? null : el,
            ei = i.useMemo(() => (null == ea ? [] : (0, o3.l$)(J, Z, ea.text)), [ea, J, Z]),
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
                            (uo.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                uo.b.insertText(e, `${n} `));
                        })(b, ea.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ei, ea, b],
            ),
            em = i.useCallback(() => {
                if (!V) return;
                let e = B(),
                    n = H
                        ? (function (e) {
                              let t = li(e);
                              if (null == t || !lt(t)) return null;
                              let n = t.history.present,
                                  l = rV(e);
                              return (
                                  ls(e, (e) => ({ ...e, history: n2, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, _.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (rG.set(i, s),
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
                                              capture: (t) => (0 === t ? l : rV(e)),
                                              composite: (e) => rq(e, n),
                                              upload: (t) =>
                                                  (0, ev.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, ev.n6)(e, t.id),
                                              send: (n) => (0, _.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      rH(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (rG.delete(i),
                                                          window.setTimeout(() => {
                                                              (rH(i, null),
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
                    null == ub && (ub = document.createElement("canvas").getContext("2d"));
                    let i = ub;
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
                })(uN(ew.current), eT.current, (0, o3.Lj)(y));
                ("" !== l && X(l), M(""), ee(null));
            }, [V, H, t, y, s, B, M]),
            eg = i.useCallback(
                (e) => {
                    (e.preventDefault(), em());
                },
                [em],
            ),
            ex = i.useCallback(() => {
                null == u || L || ($(!0), u());
            }, [u, L]),
            ej = null == h || "" !== y || !n || r || g ? null : h,
            eb = i.useCallback(
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
                        (e.preventDefault(), e.stopPropagation(), ex());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ej) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), M(ej));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), em());
                },
                [em, d, l, u, L, ex, ej, M, eo, ei.length, eu, ed, ea],
            ),
            ey = i.useCallback(
                (e) => {
                    n && F(e);
                },
                [n, F],
            );
        (0, oQ.Vo)({
            event: q.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ey(t);
            },
        });
        let ek = i.useCallback(
                (e) => {
                    (O(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [O],
            ),
            ew = i.useRef(null),
            eN = i.useRef(null),
            eC = i.useCallback(() => {
                let e = w.current;
                f?.((0, o3.Lj)(e), () => {
                    w.current === e && M("");
                });
            }, [f, M]),
            eA = i.useCallback((e) => {
                let t = D.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [eS, eE] = i.useState(0),
            [eI, eM] = i.useState(!1);
        i.useEffect(() => {
            if (0 === y.length) return void eM(!1);
            let e = uN(ew.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eE(t);
            }
            eM(!0);
            let t = setTimeout(() => eM(!1), uw);
            return () => clearTimeout(t);
        }, [y]);
        let e_ = i.useMemo(() => ({ "--custom-glow-x": `${eS}px` }), [eS]),
            eP = eI ? ` ${uv.EB}` : "",
            eR = r
                ? E.intl.string(S.default.qqlUiW)
                : n
                  ? g
                      ? E.intl.string(S.default.knUjL3)
                      : p
                        ? E.intl.string(S.default.IevBEw)
                        : E.intl.string(l ? S.default["0BJa/0"] : S.default.TEeU7z)
                  : E.intl.string(S.default.zZ9NgM),
            eT = i.useRef(0),
            eL = i.useRef(null),
            e$ = i.useCallback((e) => {
                if ((eL.current?.disconnect(), null == e)) return;
                eT.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eT.current = e.clientWidth;
                });
                (t.observe(e), (eL.current = t));
            }, []),
            eD = i.useId(),
            ez = i.useId(),
            eF = null != ej,
            eq = W ?? ej ?? eR,
            eU = "" === y && "" !== eq;
        return (0, a.jsxs)("form", {
            onSubmit: eg,
            className: uv.DA,
            children: [
                eo
                    ? (0, a.jsx)(ut, {
                          id: ec,
                          projectId: t,
                          suggestions: ei,
                          selectedIndex: eu,
                          onHover: en,
                          onSelect: ed,
                      })
                    : null,
                z.length > 0 || H
                    ? (0, a.jsxs)("div", {
                          className: uv.lN,
                          children: [
                              z.map((e) => (0, a.jsx)(tY, { draft: e, onRemove: U }, e.localId)),
                              H ? (0, a.jsx)(o1, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${uv.wg} ${uv.LP}${eP}`, style: e_, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${uv.wg} ${uv.L3}${eP}`, style: e_, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: uv.VA,
                    ref: ew,
                    children: [
                        (0, a.jsx)("input", {
                            ref: D,
                            type: "file",
                            multiple: !0,
                            onChange: ek,
                            className: uv.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(ef.Y, {
                            targetElementRef: eN,
                            position: "top",
                            align: "left",
                            animation: ef.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(eh.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(ep.rX, {
                                        children: [
                                            tS.map((e) =>
                                                (0, a.jsx)(
                                                    ep.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => eA(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(ep.Dr, {
                                                      id: "import-project",
                                                      label: E.intl.string(S.default["p/k5i7"]),
                                                      iconLeft: oJ.q,
                                                      leadingAccessory: { type: "icon", icon: oJ.q },
                                                      action: m,
                                                  })
                                                : null,
                                            null != f
                                                ? (0, a.jsx)(ep.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: E.intl.string(S.default["5HmLrK"]),
                                                      iconLeft: oZ.t,
                                                      leadingAccessory: { type: "icon", icon: oZ.t },
                                                      action: eC,
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
                                    ref: eN,
                                    type: "button",
                                    className: `${uv.Y0} ${uv.nu}`,
                                    disabled: !n,
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(ty.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: uv.Qu,
                                    }),
                                });
                            },
                        }),
                        eU
                            ? (0, a.jsx)("div", {
                                  ref: e$,
                                  className: uv.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(uy, { text: eq, offering: eF && null == W, typed: null != W }),
                              })
                            : null,
                        (0, a.jsx)(ae.A, { id: ez, children: E.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(ig.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(oY.A, {
                                editor: b,
                                containerClassName: uv.sq,
                                className: uv.jp,
                                readOnly: !n,
                                canFocus: n,
                                onChange: I,
                                onBlur: () => A(null),
                                onKeyDown: eb,
                                onPaste: ey,
                                renderExtraElement: ux,
                                "aria-labelledby": ez,
                                "aria-describedby": eU ? eD : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": eo,
                                "aria-controls": eo ? ec : void 0,
                                "aria-activedescendant": eo ? ((0, o7.aI)(eu) ?? void 0) : void 0,
                            }),
                        }),
                        eU ? (0, a.jsx)(ae.A, { id: eD, children: eR }) : null,
                        (0, a.jsx)("div", {
                            className: uv.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(N.m, {
                                          text: E.intl.string(S.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${uv.Y0} ${uv.$E}`,
                                              disabled: L,
                                              onClick: ex,
                                              "aria-label": E.intl.string(S.default.wiguT0),
                                              children: (0, a.jsx)(iS.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : v?.tierSettings != null && null != j
                                      ? (0, a.jsx)(ne, {
                                            settings: v.tierSettings,
                                            tiers: v.tiers,
                                            choices: v.choices,
                                            disabled: !n,
                                            onChange: j,
                                            className: `${uv.Y0} ${uv.$E}`,
                                            icon: (0, a.jsx)(tk.R, {
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
                                  className: uv.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: uv.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: uv.rt,
                                          disabled: !V,
                                          "aria-label": E.intl.string(S.default.rxW2cl),
                                          children: (0, a.jsx)(tw.SendMessageIcon, {
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
    uw = 1500;
function uN(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var uC = n(709753),
    uA = n(540338),
    uS = n(986109);
let uE = i.createContext(null);
function uI(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(uE),
        [d, m] = i.useState(() => Y.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: h()(uS.xk, { [uS.g5]: d, [uS.Qo]: s, [uS.q3]: o }),
        children: n,
    });
}
let uM = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n, justRemixed: l } = e;
            return (null != t && n) || l ? "card" : null;
        },
        dismissal: "app",
    },
    u_ = new Map();
function uP(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function uR(e, t) {
    return null != e && e > 0 && e < t;
}
let uT = "ideas",
    uL = "live_behind",
    u$ = "conjureTipDismissals",
    uD = new Set(),
    uz = new Set(),
    uO = 0;
function uF() {
    let e = W.w.get(u$);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function uq(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return uD.has(((n = e.id), `${t}:${n}`));
        case "app":
            return uF().app[t]?.includes(e.id) === !0;
        case "forever":
            return uF().forever.includes(e.id);
    }
}
function uU(e) {
    return (uz.add(e), () => uz.delete(e));
}
let uG = [12e4, 6e4];
var uB = n(292771);
function uH(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
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
            className: uB.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: h()(uB.qd, e.leaving ? uB.dv : uB.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var uK = n(443865),
    uV = n(247171);
function uW(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: h()(uV.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: h()(uV.gutter, uV[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: uV.content, children: i }),
        ],
    });
}
var uX = n(716502);
function uJ(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uW, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: uX.Nr,
        children: (0, a.jsxs)("section", {
            className: uX.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: uX.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(eX.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: em.P,
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
function uZ(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: uX.DD,
        children: t,
    });
}
function uY(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: uX.rf,
        children: t,
    });
}
function uQ(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: uX.o1, children: t });
}
let u0 = {
    ...uM,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(uJ, {
            icon: uK.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(uZ, { children: E.intl.string(S.default.OJlbhX) }),
                (0, a.jsx)(uY, { children: E.intl.string(S.default["3vJBni"]) }),
                (0, a.jsx)(uQ, {
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
var u1 = n(830205);
function u2(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uW, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: u1.aK,
        children: (0, a.jsxs)("div", {
            className: u1.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: u1.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: u1.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(eX.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: em.P,
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
var u3 = n(95635);
let u5 = [
    {
        id: uL,
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
                (null != t.publishCta && ow(n, t.publishCta)) ||
                uR(e.messagesSinceShown(uL), 10)
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
                ? (0, a.jsx)(u2, {
                      icon: u3.UploadIcon,
                      onDismiss: l,
                      children: E.intl.format(S.default.fWfeZ8, { onPublish: () => n.run("outdated_notice") }),
                  })
                : null;
        },
    },
    u0,
    {
        id: uT,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(uM) ||
                0 === e.messagesSinceShown(uM.id) ||
                uR(e.messagesSinceShown(uT), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(u2, {
                icon: uK.LightbulbIcon,
                onDismiss: l,
                children: E.intl.format(S.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var u4 = n(817921);
function u6(e) {
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
                    ((s = (0, e5.Ay)(t)),
                    (u = (0, o.bG)([aM.default], () => aM.default.getCurrentUser()?.id)),
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
                        uG,
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
                                        if ((0, r5.BL)(n)) return n;
                                        if (!(0, r5.B0)(e, t)) break;
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
                        publishedSinceLastMessage: null != p && 0 === uP(n, p, u),
                        messagesSinceShown: (e) => {
                            let l = u_.get(`${t}:${e}`);
                            return null != l ? uP(n, l, u) : null;
                        },
                        isDismissed: (e) => uq(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(uU, () => uO);
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
                })(e, g, (e) => uq(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== g.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                u_.set(`${e}:${t}`, n);
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
                                          if (!(null == e.dismissal || uq(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  uD.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = uF();
                                                  W.w.set(
                                                      u$,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (uO++, uz.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(u5, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(uI, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: u4.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(uH, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var u7 = n(52133),
    u8 = n(732159),
    u9 = n(888366),
    ce = n(862026),
    ct = n(291192);
function cn(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, ce.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: ct.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: ct.Sp,
                children: [
                    (0, a.jsx)("span", { className: ct.q3 }),
                    (0, a.jsxs)("span", {
                        className: ct.g8,
                        children: [
                            (0, a.jsx)(u9.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: ct.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ct.nM,
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
                                          (0, a.jsx)(aE.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tt.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(u8.u, {
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
function cl(e) {
    return (0, o.bG)([eO.Ay, ti.A], () => {
        let t = eO.Ay.getProject(e);
        return null == t ? "" : (ti.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var cr = n(951465),
    ca = n(369455);
function ci(e) {
    let { projectId: t, notice: n } = e,
        l = cl(t),
        r = (0, o.bG)([eO.Ay, d.A], () => {
            let e = eO.Ay.getProject(t);
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
            n.update && null != n.published_revision ? (0, a.jsx)(cs, { projectId: t, notice: n }) : null,
        ],
    });
}
function cs(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(e5.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [l1.A, eO.Ay],
                    () => {
                        let r = l1.A.getPublishStatus(e),
                            a = eO.Ay.getProject(e);
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
                                (0, eO.jf)(a),
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
                                        className: ca.Z,
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
                                        r = eO.Ay.getProject(e),
                                        a = null == r ? null : (0, e5.KL)(r, l);
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
                                null != e && (0, cr.A)(e);
                            },
                        }),
              ],
          });
}
var co = n(940874),
    cu = n(565645),
    cc = n(187308),
    cd = n(981879);
function cm(e) {
    let { reaction: t } = e;
    return (0, a.jsx)("div", {
        className: cd.H,
        children: (0, a.jsx)(cu.A, {
            emojiId: t.emojiId,
            emojiName: t.emoji,
            animated: t.animated,
            shouldAnimate: !0,
            alt: (0, cc.pW)(t),
            size: "reaction",
        }),
    });
}
n(775443);
var cf = n(616e3),
    ch = n(155899),
    cp = n(521981),
    cg = n(491182),
    cx = n(438729),
    cv = n(622868),
    cj = n(448368),
    cb = n(837528),
    cy = n(470964),
    ck = n(715628),
    cw = n(752636),
    cN = n(9842),
    cC = n(589022),
    cA = n(994500),
    cS = n(967198);
let cE = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function cI(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function cM(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function c_(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = cM(e, t),
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
    if (cI(r) && cI(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && cI(cM(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function cP(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
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
                      for (; a > 0 && c_(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && cE.has(e.charAt(l - 1));) l--;
                                    return cE.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && c_(t, o);) o++;
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
var cR = n(624479),
    cT = n(890377),
    cL = n(180227);
function c$(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: h()(cL.QE, { [cL.Rn]: t }),
              children: (0, a.jsx)(sY.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          sY.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function cD(e) {
    return eQ.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: cR.CopyIcon, onClick: () => (0, eQ.C)(e) }]
        : [];
}
function cz(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(S.default.CXtLD2),
                          tooltip: E.intl.string(S.default.DOb1HM),
                          icon: cT.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(S.default.urZwpN),
                          icon: em.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(c$, { groupStart: n, actions: [...r, ...cD(t)] });
}
function cO(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(S.default.H8Jfhu), icon: rx.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: nM.BugIcon, onClick: r }];
    return (0, a.jsx)(c$, { groupStart: n, actions: [...i, ...cD(t), ...s] });
}
let cF = (0, sw.createChannelRecord)({ id: "conjure-builder", type: q.rbe.DM }),
    cq = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function cU(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: h()(cL.Yq, { [cL.x1]: t }), children: e });
}
function cG(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let cB = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function cH(e, t, n) {
    let { content: l } = (0, cy.A)(e, cB),
        r = i.useMemo(() => ((0, ig.aW)(e.content) ? (0, cp.z2)(oq.U, e, cB).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: cF, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(cx.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, ck.A)(s, r);
}
function cK(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, cb.m)(e, cF, t.usernameProfile, l),
        u = (0, cb.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([cS.A], () => cS.A.getGuildId()),
        d = (0, o.bG)([aM.default], () => aM.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = aM.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(cC.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function cV(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, ig.aW)(n.content)
                          ? (0, cp.z2)(oq.U, n, e).content
                          : (0, cp.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: cL.GV,
                              children: [
                                  (0, a.jsx)(nI.x, {
                                      className: cL.Rj,
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
            [cA.A],
            () => ({
                isReplyAuthorBlocked: cA.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: cA.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, sJ.X4)(n),
        m = (0, sJ.X4)(t),
        f = cK(n);
    return (0, a.jsx)(cj.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: cF,
        referencedMessage: { state: cN.a.LOADED, message: n },
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
function cW(e) {
    let { message: t, author: n } = e,
        l = cK(t);
    return (0, a.jsx)(cv.Ay, {
        message: t,
        channel: cF,
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
function cX(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, o6.vm)(l),
        c = i.useMemo(() => (0, sJ.FT)(u, null), [u]),
        d = i.useMemo(() => nG(t), [t]),
        m = d?.body ?? t,
        f = (0, o3.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, sk.Ay)({ channelId: cF.id, content: m, author: u });
            return (0, sy.rh)({ ...e, timestamp: cG(n, e.timestamp), state: q.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              cJ,
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
function cJ(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = cH(t, l);
    return (0, a.jsx)(cg.A, {
        className: cL.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(cW, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: cL.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: cL.GV,
                              children: [
                                  (0, a.jsx)(nI.x, {
                                      className: cL.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: cL.WO, children: u }),
                      ],
                  }),
        childrenAccessories: cU(i, "" !== l),
        childrenButtons: (0, a.jsx)(cz, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function cZ(e) {
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
        { text: m, revealing: f } = cP(t, { streaming: (0, o.bG)([tN.A], () => c && tN.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, sJ.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, o6.vm)(g),
        v = i.useMemo(() => (null == r ? null : nG(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, sk.Ay)({ channelId: cF.id, content: v?.body ?? r.content, author: x });
            return (0, sy.rh)({ ...e, id: r.id, timestamp: cG(r.createdAt, e.timestamp), state: q.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: cF.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, sk.Ay)({ channelId: cF.id, content: "", author: cq })),
        k = i.useMemo(
            () =>
                (0, sy.rh)({
                    ...y,
                    timestamp: cG(n, y.timestamp),
                    state: q.cmJ.SENT,
                    ...(null != b ? { type: q.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        N = i.useMemo(
            () => (0, cw.A)({ message: k, channel: cF, author: p, guildId: void 0, isGroupStart: u }),
            [k, p, u],
        ),
        C = cH(w, m, cL.OS);
    return (0, a.jsxs)("div", {
        className: cL.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(cg.A, {
                className: cL.yE,
                author: p,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(cV, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: cU(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: cL.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(et.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function cY(e) {
    let { onSelect: t, onClose: n = eD.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(eh.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(ep.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(ep.Dr, {
                          id: "restore-version",
                          label: E.intl.string(S.default.H8Jfhu),
                          icon: rx.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(ep.Dr, { id: "view-trace", label: "View Trace", icon: nM.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cQ(e) {
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
        j = null != v && null != g ? () => c0(v, g) : void 0,
        b =
            ((t =
                lj() && "assistant" === x.role && (0, r5.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [cf.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : cf.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((lg = { projectId: e, traceId: t }), [...lp])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(uI, {
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
                          void (0, eD.jA)(t, (e) => (0, a.jsx)(cY, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(cZ, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(cO, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(oK, {
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
                              c0(
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
function c0(e, t) {
    (0, ch.F)({ onConfirm: () => t(e) });
}
var c1 = n(288539);
function c2(e, t, n) {
    return (0, a.jsx)(c1.A, { userId: e, content: `@${t}` }, n);
}
function c3(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => (0, o6.Y_)(l), [l]);
            let r = (0, o.bG)([aM.default], () => (null == l ? null : aM.default.getUser(l)), [l]),
                a = (0, sC.tx)(r),
                s = cl(e),
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
        })(n, l, c2),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([e4.A], () => null != t && t.length > 0 && ic({ keys: t }, e4.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: E.intl.string(S.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(ih, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let c5 = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    rB.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, ig.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(uI, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cX, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(oF.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(o2, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(cm, { reaction: o.agentReaction })
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
                                    return (n) => (0, co.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(uI, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cZ, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(oF.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(uI, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oH, {
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
                    return (0, a.jsx)(uI, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cZ, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(ci, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(uI, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cZ, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(c3, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(uI, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(cn, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(uI, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oH, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(uI, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oH, {
                            projectId: l,
                            steps: c4,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(cQ, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, u7.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, u7.A)(e.row, t.row, ["message"]) &&
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
                (0, u7.A)(e.replyTo, t.replyTo) &&
                (0, u7.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    c4 = [],
    c6 = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    c7 = new WeakMap();
function c8(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function c9(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let de = i.memo(function (e) {
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
        R = (0, o.bG)([l1.A], () => l1.A.getPublishStatus(t)),
        T = (0, o.bG)([aM.default], () => aM.default.getCurrentUser()?.id),
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
                                        let t = (0, r3.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = c7.get(r);
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
                        let a = !(0, r5.BL)(e),
                            i = iE({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, r3.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, r3.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && c6.test(n.prose.content)) m = !0;
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
                                        turnActive: r4(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = c6.test(e.content ?? "");
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
                    (c7.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return ok(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, R)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = oN.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), oN.set(t, n)), n);
                      })),
                m,
            );
        }, [n, R, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, z] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return c8(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : c9(e, t.endKey, t.end - 1) + 1,
                a = c9(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), c8(e, a, r));
        })($, D, x),
        F = i.useRef(O),
        q = i.useRef($),
        U = i.useRef(L),
        G = i.useRef(null),
        B = i.useRef(null),
        H = i.useRef(new Set()),
        K = i.useCallback(() => {
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
        V = i.useCallback(() => {
            let e = p.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), c8(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), c8(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? c8(e, i, t.end) : null;
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
                (K(),
                    z((e) => {
                        let t = F.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    V());
            },
            recordAnchor: K,
            showLatest(e) {
                ((B.current = e ?? null), z(null));
            },
        }),
        [K, V],
    );
    let W = i.useRef(null),
        X = i.useCallback(
            (e) => {
                var n;
                let l;
                W.current = null;
                let r = k.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), z(F.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), P(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, _.loadOlderHistory)(t) && (W.current = e);
                    return;
                }
                (j(),
                    (B.current = () => {
                        (k.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            P(e));
                    }),
                    z(((n = q.current), c8(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [P, j, t],
        );
    (i.useEffect(() => {
        let e = W.current;
        null != e && X(e);
    }, [L, X]),
        i.useLayoutEffect(() => {
            if (null == w) return;
            let e = w.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    null != l && l !== e && ((e = l), g.current ? p.current?.scrollToBottom() : K());
                });
            return (t.observe(w), () => t.disconnect());
        }, [w, K, p, g]));
    let J = null == O.endKey;
    (i.useEffect(() => y?.(J), [J, y]),
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
                ((B.current = null), l?.(), K(), V());
            }
            H.current = new Set($);
        }, [L, $, O.start, O.end, p, g, K, V]));
    let Z = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, r5.BL)(n) || "plan_implemented" === n.kind) return null;
                            if (null != n.proposal) return n.render_id;
                        }
                    }
                    return null;
                })(n),
            [n],
        ),
        Y = i.useMemo(
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
                : (0, r5.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        el = (0, o.bG)([e4.A], () => e4.A.getSettings(t)?.secrets, [t]),
        er = (0, uC.WT)(t),
        ea = i.useMemo(() => (0, oD.Mv)(n, el), [n, el]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: h()(uS.x7, uS.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: uS.Ub, children: (0, a.jsx)(tE.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: uS.x7,
            children: (0, a.jsx)(uI, { role: "assistant", children: (0, a.jsx)(cZ, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(uE.Provider, {
        value: H,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: uS.x7,
            children: [
                L.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            c5,
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
                        c5,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? ee.get(n.in_reply_to) : void 0,
                            onJumpTo: X,
                            planVersion: Y.get(n.render_id),
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
                J
                    ? er.map((e) =>
                          (0, a.jsx)(
                              uI,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(cZ, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(uA.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && J
                    ? (0, a.jsx)(uI, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(cZ, {
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
                J ? (0, a.jsx)(u6, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var dt = n(731084),
    dn = n(823376),
    dl = n(187447);
function dr(e) {
    let { activity: t, id: n } = e,
        l = (0, r2.j)(),
        { text: r, revealing: s } = cP(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: dl.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(r0.Ch, {
                ref: o,
                className: dl.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: h()(oB.PT, dl.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: s_.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var da = n(53659);
function di(e) {
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
        b = (0, dt.xu)({
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
        k = b === dt.kx["0"],
        [w, N] = i.useState(m ?? y),
        A = (0, r2.j)();
    (l || (0, dt.E4)(y, w) || (!A && !k)) && w !== y && N(y);
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
        ((P.current = k), !k && (0, dt.E8)(_.current) && N(I.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                P.current
                    ? ((R.current = (0, dt.E8)(_.current) ? R.current + 1 : 0), N((0, dt.Ov)(R.current)))
                    : I.current !== _.current
                      ? N(I.current)
                      : M.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, dt.FZ)),
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
    return (0, a.jsx)(ef.Y, {
        targetElementRef: p,
        position: "top",
        align: "left",
        shouldShow: $,
        onRequestClose: z,
        renderPopout: () => (0, a.jsx)(dr, { id: g, activity: t }),
        children: () =>
            (0, a.jsxs)(C.D, {
                innerRef: p,
                className: h()(da.hF, T && da.Xd),
                "aria-label": E.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : k
                            ? dt.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": $,
                "aria-describedby": $ ? g : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: D,
                children: [
                    (0, a.jsx)("span", {
                        className: da.bl,
                        children: (0, a.jsx)(dn.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: da.xu,
                        "aria-hidden": !!u || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(oV.o, {
                                  ref: M,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: dt.vg,
                                  delay: null,
                                  className: da.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: da.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let ds = { second: 1e3, minute: 6e4 };
function du(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = ds[t];
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
var dc = n(719374);
function dd(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = du(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: dc.$,
        "data-conjure-turn-timer": !0,
        children: (0, i$.C7)(l),
    });
}
function dm(e) {
    let { startedAt: t } = e,
        n = du(t, "minute");
    return (0, a.jsx)(ae.A, { role: "timer", children: (0, i$.Us)(n) });
}
var df = n(885574),
    dh = n(242779),
    dp = n(436804);
function dg(e) {
    return e.toLocaleString();
}
function dx(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: dp.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: dp.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [dg((0, dh.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    dg(n.input_tokens),
                    " in \xb7 ",
                    dg(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${dg(n.cache_creation_input_tokens)} cache write \xb7 ${dg(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function dv(e) {
    let { project: t } = e,
        n = (0, dh.wU)(t.compaction),
        l = (0, dh.wU)(t.classifier),
        r = (0, dh.wV)(t.orchestrator, t.codegen),
        i = (0, dh.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: dp.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: dp.Q$,
                children: (0, a.jsxs)("div", {
                    className: dp.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [dg((0, dh.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(dx, { label: E.intl.string(S.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(dx, { label: E.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(dx, { label: E.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: dp.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, dh.sj)(i) ? "\u2014" : `${Math.round(100 * (0, dh.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function dj(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ef.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(dv, { project: t }),
        children: (e) =>
            (0, a.jsx)(C.D, {
                innerRef: n,
                className: dp.Y$,
                "aria-label": E.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(df.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var db = n(997421);
function dy(e) {
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
        p = (0, lb.Zv)(t),
        g = (0, o.bG)([l1.A], () => l1.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, dt.E8)(e) || e === E.intl.string(S.default.mKK6wB) || e === E.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == f ? null : (0, dt.uc)(f),
        k = null != s,
        w = s ?? (n ? l : void 0),
        N = n || r || k || !0 === m;
    return (0, a.jsxs)("div", {
        className: db.jf,
        children: [
            (0, a.jsxs)("div", {
                className: db.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || p || g
                        ? (0, a.jsx)(di, {
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
                    null != w ? (0, a.jsx)(dd, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(dm, { startedAt: w }) : null,
            null == f || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: db.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(dj, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, dt.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: db.XF,
                      children: (0, dt.Db)(h),
                  }),
        ],
    });
}
let dk = ["wheel", "touchstart", "pointerdown", "keydown"];
var dw = n(608711);
let dN = [E.intl.string(S.default["9w+Chc"]), E.intl.string(S.default.WAvmdq), E.intl.string(S.default.SKsrzl)];
function dC(e) {
    let t,
        n,
        { projectId: l, restoreState: r, onRestoreVersion: s, onImportProject: u } = e,
        c = (0, o.bG)([lh.A], () => lh.A.getMessages(l), [l]),
        m = (0, o.bG)([_.default], () => _.default.getConnState(l), [l]),
        f = (0, o.bG)([lh.A], () => lh.A.getProjectUsage(l), [l]),
        h = (0, o.bG)([lh.A], () => lh.A.getThinkingActivity(l), [l]),
        p = (0, o.bG)([lh.A], () => lh.A.isCompacting(l), [l]),
        g = (0, o.bG)([lh.A], () => lh.A.isSaving(l), [l]),
        x = (0, o.bG)([ii.A], () => ii.A.getModelSettings(l), [l]),
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
                    for (let e of dk) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of dk) t.removeEventListener(e, u);
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
        (0, ix.E1)(l, (0, r2.j)()));
    let z = n1(l),
        O = (function (e) {
            let t = (0, e5.Ay)(e),
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
            ((t = (0, o.bG)([io.A], () => io.A.getFailure(l))),
            (n = i.useCallback(() => (0, iu.CM)(l), [l])),
            null == t
                ? null
                : {
                      message: E.intl.format(S.default.Up6Ssw, { reason: t }),
                      retry: { text: E.intl.string(S.default["ywA+ET"]), onClick: n },
                  }),
        q = (0, o.bG)([io.A], () => io.A.getSetupStartedAt(l), [l]),
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
                                  r = t.filter((e) => nD(e.comment)),
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
                                      a.push(`${t + 1}. ${nF(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: z.annotations, metaComment: e, context: z.context }),
                          t,
                      ),
                      nZ(l));
            },
            [z, U, l],
        ),
        B = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of rG)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, _.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = rG.get(e);
                            (rG.delete(e), rH(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(l) ||
                lh.A.isThinking(l)) &&
                (0, _.interruptTurn)(l);
        }, [l]),
        H = i.useCallback((e) => tH(l, e.implementation_prompt), [l]),
        [K, V] = (function (e) {
            let [t, n] = i.useState(() => iA(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? iA(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(l),
        W = i.useCallback(() => U(E.intl.string(S.default["t5CN3+"])), [U]),
        X = i.useCallback((e, t, n) => tH(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        J = i.useCallback((e) => (0, is.X)(l, e), [l]),
        Y = i.useCallback((e) => (0, ev.vX)(l, e), [l]),
        Q = i.useCallback((e) => tJ(l, "chat", Array.from(e), Y), [l, Y]),
        ee = i.useCallback(() => tH(l, E.intl.string(S.default.Zc7gML)), [l]),
        et = r?.status === "restoring",
        en = "open" === m && !et,
        el = c[c.length - 1],
        er = null != el && "assistant" === el.role && null != el.proposal,
        [ea, es] = i.useState(null),
        eo = el?.clarification != null && el.clarification.id !== ea ? el.clarification : null,
        eu = i.useCallback(() => {
            null != eo && es(eo.id);
        }, [eo]),
        [ec, ef] = i.useState(null),
        eh = (function (e) {
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
        ep = el?.appBuildRequest != null && (0, r5.BL)(el) && el.appBuildRequest.id !== ec ? el.appBuildRequest : null,
        eg = eh.request ?? (null == eo ? ep : null),
        ex = null == eh.request ? eo : null,
        ej = null != eg && eg === eh.request,
        { close: eb, sent: ey } = eh,
        ek = eh.request?.id,
        ew = i.useCallback(() => {
            ej ? eb() : null != eg && ef(eg.id);
        }, [eg, ej, eb]),
        eN = i.useCallback(
            (e) => {
                (null != ek && ey(ek),
                    (0, ed.P0)({
                        text: E.intl.formatToPlainString(S.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [ek, ey],
        ),
        eC = (0, o.bG)([e4.A], () => e4.A.getSettings(l), [l]),
        [eA, eS] = i.useState(null),
        eE =
            null != el &&
            "assistant" === el.role &&
            null != el.settingsRequest &&
            (0, r5.BL)(el) &&
            el.id !== eA &&
            ic(el.settingsRequest, eC)
                ? el
                : null,
        eI = null == eh.request ? eE : null,
        eM = eI?.settingsRequest ?? null,
        e_ = i.useCallback(() => {
            null != eE && eS(eE.id);
        }, [eE]),
        eP = null != eM,
        [eR, eT] = i.useState(null),
        eL = ex?.id ?? eg?.id ?? eI?.id,
        e$ = null != eo || null != eg || null != eE;
    i.useLayoutEffect(() => {
        let e = y.current?.getScrollerNode(),
            t = eR?.firstElementChild;
        if (null == eR || null == e || !(0, ei.vq)(t, HTMLElement) || null == eL) return;
        function n() {
            w.current && y.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eR.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eR, eL, y, w]);
    let eD = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, o.bG)([lh.A], () => lh.A.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, o.bG)([lh.A], () => lh.A.isHistoryUnavailable(l), [l]),
            connState: m,
        }),
        ez = "loading" === eD && 0 === c.length,
        eO = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return dN[e % dN.length];
        }, [l]),
        eF = er ? E.intl.string(S.default.Zc7gML) : "greeting" === eD && 0 === c.length ? eO : null,
        eq = i.useMemo(() => {
            for (let e = c.length - 1; e >= 0; e--) {
                let t = c[e];
                if ("assistant" === t.role && !(0, r5.BL)(t)) return t;
            }
        }, [c]),
        eU = null != eq,
        eG =
            null != eq
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = ip.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(eq)
                : void 0,
        eB = er && en ? ee : void 0,
        eH = i.useCallback(() => tH(l, E.intl.string(S.default.EMgIuY)), [l]),
        [eK, eV] = i.useState(null),
        [eW, eJ] = i.useState(eU);
    (eW !== eU && (eJ(eU), eU || eV(null)),
        i.useEffect(() => {
            if (!eU) return;
            let e = y.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eV(null)
                        : eV(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eU, eq?.steps, P]));
    let eZ = P ? eK : "bottom",
        eY = i.useMemo(() => (null != eq ? (0, r6.b9)(eq.steps) : ""), [eq]),
        eQ = i.useMemo(() => (null != eq ? ((0, r3.lt)(eq.steps) ?? eq.todos) : void 0), [eq]),
        e0 = eq?.provisionalTodo,
        e1 = null != eq && r4(eq),
        e2 = i.useMemo(() => {
            var e;
            return null != eq ? ((e = eq.steps), iq((0, r3.Jf)(e, !0).tasks)) : void 0;
        }, [eq]);
    return (0, a.jsxs)("section", {
        ref: b,
        "data-conjure-chat": !0,
        className: dw.TE,
        children: [
            en
                ? (0, a.jsx)(j.A, {
                      title: E.intl.string(S.default.gy7byi),
                      description: E.intl.string(S.default["dkv/WO"]),
                      icons: nw.ir,
                      onDrop: Q,
                  })
                : null,
            (0, a.jsx)(ap, {
                onJumpToActivity: $,
                line: eY,
                placement: eU && "top" === eZ ? "top" : null,
                todos: eQ,
                todosLive: e1,
                provisionalTodo: e0,
                agents: e2,
            }),
            (0, a.jsxs)("div", {
                className: dw.JX,
                children: [
                    (0, a.jsx)(r0.Ch, {
                        ref: y,
                        onScroll: D,
                        scrollbarGutter: ez ? "both-edges" : "stable",
                        className: [dw.N$, A ? null : dw.hB, eP ? dw.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(ig.Fu.Provider, {
                            value: l,
                            children: (0, a.jsx)(de, {
                                projectId: l,
                                messages: c,
                                emptyState: eD,
                                floatingSettingsMessageId: eE?.id,
                                liveClarificationId: ex?.id,
                                onPickIdea: en ? H : void 0,
                                onAskForIdeas: en ? W : void 0,
                                draftHasText: K,
                                onApprovePlan: en ? eH : void 0,
                                onRestoreVersion: et || eU ? void 0 : s,
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
                        className: dw.NJ,
                        children: (0, a.jsx)(dy, {
                            projectId: l,
                            thinking: eU,
                            turnStartedAt: eG,
                            restoring: et,
                            remixStartedAt: q,
                            recalling: ez,
                            thinkingActivity: h,
                            compacting: p,
                            saving: g,
                            projectUsage: f,
                            connState: m,
                        }),
                    }),
                    null == ex
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eT,
                              className: eP ? `${dw.B5} ${dw.J9}` : dw.B5,
                              children: (0, a.jsx)(
                                  ia,
                                  { projectId: l, clarification: ex, onSubmit: en ? X : void 0, onDismiss: eu },
                                  ex.id,
                              ),
                          }),
                    null == eg
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eT,
                              className: dw.B5,
                              children: (0, a.jsx)(
                                  aC,
                                  { projectId: l, request: eg, canSend: en, onDismiss: ew, onSent: ej ? eN : void 0 },
                                  eg.id,
                              ),
                          }),
                    null == eM
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == ex && null == eg ? eT : void 0,
                              className: dw.B5,
                              children: (0, a.jsx)(ih, { projectId: l, request: eM, onDismiss: e_ }, eI?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: dw.Jx,
                children: [
                    (0, a.jsx)(ap, {
                        onJumpToActivity: $,
                        line: eY,
                        placement: eU && "bottom" === eZ ? "bottom" : null,
                        todos: eQ,
                        todosLive: e1,
                        provisionalTodo: e0,
                        agents: e2,
                    }),
                    0 === z.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: dw.g0,
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
                                      onClick: () => nZ(l),
                                  }),
                              ],
                          }),
                    null == F
                        ? null
                        : (0, a.jsx)("div", {
                              className: dw.qB,
                              children: (0, a.jsx)(r1.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: F.message,
                                  action: F.retry,
                              }),
                          }),
                    null == O
                        ? null
                        : (0, a.jsxs)("div", {
                              className: dw.Db,
                              children: [
                                  (0, a.jsx)(r1.w, { type: "warning", role: "status", message: O.message }),
                                  (0, a.jsx)("div", {
                                      className: dw.jU,
                                      children: (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(eX.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
                                              icon: em.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: O.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(uk, {
                        projectId: l,
                        canSend: en,
                        running: eU,
                        restoring: et,
                        onSend: G,
                        hasPendingContext: z.annotations.length > 0,
                        onInterrupt: en ? B : void 0,
                        onUploadFile: Y,
                        onImport: u,
                        onSendToOtherProjects: e$ ? void 0 : eh.open,
                        onApprove: eB,
                        suggestion: eF,
                        questionOpen: e$,
                        modelSettings: x,
                        onModelSettingsChange: J,
                        onDraftHasTextChange: V,
                    }),
                ],
            }),
        ],
    });
}
var dA = n(761508),
    dS = n(933294),
    dE = n(207438),
    dI = n(683438);
function dM(e, t) {
    return String(e).padStart(t, "0");
}
function d_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${dM(l.getHours(), 2)}:${dM(l.getMinutes(), 2)}:${dM(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${dM(l.getMilliseconds(), 3)}` : r;
}
var dP = n(667931);
let dR = {
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
    dT = { running: "Running", ok: "Done", error: "Failed" };
function dL(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function d$(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function dD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function dz(e) {
    return d$(e.count > 1 ? e.totalMs : e.end - e.start);
}
let dO = ["Arguments", "Result", "Usage", "Details"];
function dF(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function dq(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function dU(e) {
    let t = (0, dP.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, dP.lp)(e) ? "interrupted" : "still running";
}
function dG(e) {
    return [d_(new Date(e.started_at).toISOString()) ?? "", dD(e.spans.length), (0, dP.Sj)((0, dP.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function dB(e) {
    let t = (0, dP.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, dP.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += dH(r, "in")),
                (l.output += dH(r, "out")),
                (l.cacheRead += dH(r, "cache_read")),
                (l.cacheWrite += dH(r, "cache_write")),
                (l.costUsd += dH(r, "cost_usd"))));
    }
    let r = dP.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function dH(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var dK = n(738188),
    dV = n(430993),
    dW = n(364840),
    dX = n(224640),
    dJ = n(20742);
let dZ = { collapsed: new Set(), revealed: new Set() };
var dY = n(872892);
let dQ = {
    op: dY.Q,
    model: dY.i3,
    tool: dY.dH,
    setup: dY.kc,
    worktree: dY.Qx,
    sandbox: dY.QH,
    build: dY.F1,
    platform: dY.Op,
    other: dY.fv,
};
function d0(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      dD(t.calls, "model call"),
                      `${dL(t.input)} in`,
                      `${dL(t.output)} out`,
                      `${dL(t.cacheRead)} cache read`,
                      `${dL(t.cacheWrite)} cache write`,
                      dq(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: dY.M1,
        children: [
            (0, a.jsx)("div", {
                className: dY.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${dY.DJ} ${dQ[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: dY.o1,
                children: dP.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${d$(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: dY.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${dY.nf} ${dQ[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: dR[e] }),
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
function d1(e) {
    return `conjure-perf-trace-${e}`;
}
function d2(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: dY.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${dY.p0} ${s + o > 85 ? dY.EU : dY.jh}`,
                children: i,
            }),
        ],
    });
}
function d3(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? t0._ : nt.a,
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
        id: d1(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${dY.$y} ${r ? dY.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: dY.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(C.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: dY.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: dY.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: dY.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${dY.nf} ${dQ[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: dY.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: dY.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: dY.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(dK.WarningIcon, { size: "xs", color: "currentColor", className: dY.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(d2, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${dY.M0} ${dY.Nh}`
                    : t.running
                      ? `${dY.M0} ${dY.rF}`
                      : `${dY.M0} ${dQ[t.category]}`,
                duration: dz(t),
            }),
        ],
    });
}
function d5(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: d1(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${dY.$y} ${l ? dY.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: dY.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: dY.ai,
                        children: (0, a.jsx)(t0._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: dY.U9 }),
                    (0, a.jsx)("span", { className: `${dY.nf} ${dY.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: dY.MQ,
                        children: dD(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(d2, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${dY.M0} ${dY.ab} ${dY.dL}`,
                duration: d$(t.totalMs),
            }),
        ],
    });
}
function d4(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: dY._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: dY.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${dY.nf} ${dQ[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [dF("Start", `+${d$(e.start)}`), dF("Duration", dz(e))];
                      e.count > 1
                          ? t.push(
                                dF("Calls", String(e.count)),
                                dF("Longest call", d$(e.maxMs)),
                                dF("Spread over", d$(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(dF("Self time", d$(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(dF("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(dF("Notes", l.join(", "))),
                          null != e.span.error && t.push(dF("Error", e.span.error)));
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
                              s = "cost_usd" === t ? dq(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), dF(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...dO.flatMap((e) => {
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
                                            className: dY.xd,
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
                                                            className: dY.vl,
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
function d6(e) {
    let { trace: t } = e,
        n = i.useMemo(() => dB(t), [t]);
    return (0, a.jsx)(d0, { stats: n });
}
function d7(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, dP.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? dZ : (0, dP.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, dP.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, dP.x7)(t)), l((n) => (0, dP._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, dP.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dP.IE)(t, e);
                        null != n && l((e) => (0, dP.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dP.IE)(t, e);
                        null != n && l((e) => (0, dP.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, dP.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, dP.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, dP.hB)(t));
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
        f = (0, dP.dj)(t),
        h = i.useMemo(() => (0, dP.nF)(f), [f]),
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
                    null != t && (u(t.key), document.getElementById(d1(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(dV.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: dY.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: dU(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: dG(t),
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
                                      children: `${dD(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(d6, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: dY.KE,
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
                        "aria-activedescendant": null == o ? void 0 : d1(o),
                        className: dY.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: g,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dY.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: dY.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: dY.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${dY.io} ${(e / f) * 100 > 85 ? dY.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : d$(e),
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
                                          d3,
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
                                    : (0, a.jsx)(d5, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(dW.j, { children: (0, a.jsx)(d4, { node: s }) }),
        ],
    });
}
function d8(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([cf.A], () => cf.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(dX.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(dJ.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(dV.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(d7, { trace: i }),
        ],
    });
}
let d9 = { running: dY.Vf, ok: dY.mo, error: dY.Sr };
function me(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${dY.Om} ${d9[t]}`, role: "img", "aria-label": dT[t] });
}
function mt(e, t) {
    (0, tt.openModal)((n) => (0, a.jsx)(d8, { ...n, projectId: e, traceId: t }));
}
function mn(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => mt(t, n.id), [t, n.id]);
    return (0, a.jsxs)(C.D, {
        className: dY.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: dY.sU,
                children: [
                    (0, a.jsx)(me, { status: (0, dP.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: dY._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: dU(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: dG(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function ml(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            ek(
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
    return (0, a.jsx)(ef.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ef.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(eh.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(ep.rX, {
                    children: (0, a.jsx)(ep.Dr, {
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
            return (0, a.jsx)(eX.K, {
                ...e,
                buttonRef: l,
                icon: eJ.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function mr(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([cf.A], () => cf.A.getTimingTraces(t), [t]),
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
                    let t = e.map(dB);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: dP.BF.map((e) => ({
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
              className: dY.Ie,
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
              className: dY.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: dY.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: dY.fH,
                              children: (0, a.jsx)(dI.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(ml, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(r0.Ch, {
                      className: dY.XG,
                      children: [
                          (0, a.jsx)(d0, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: dY.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(mn, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function ma(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function mi(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function ms(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function mo(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function mu(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function mc(e) {
    return E.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let md = ["all", "preview", "stable", "web"];
function mm(e) {
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
function mf(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: ma(e.memory_p50_bytes ?? 0),
              p999: ma(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let mh = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var mp = n(911608),
    mg = n(177427);
function mx(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: mg.KE,
        children: [
            (0, a.jsx)("div", {
                className: mg.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(tE.y, { type: tE.t.PULSING_ELLIPSIS })
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
                                  children: E.intl.formatToPlainString(S.default.INVO50, { time: mo(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(Z.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function mv(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: mg.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: mg.Gf, children: t }),
            n,
        ],
    });
}
function mj(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: mg.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mg.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: mg.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: mg.kS,
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
function mb(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: mg.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mg.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(mp.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? mg.dh : void 0,
            }),
        ],
    });
}
function my(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(mj, {
            label: E.intl.string(S.default.SXP7pD),
            value: E.intl.string(S.default.E5hKVi),
            hint: mm(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(mj, {
            label: E.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(S.default.AGvoMJ),
        });
    let l = mf(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(mj, { label: E.intl.string(S.default["H/X+FI"]), value: mi(n.cpu_ms) }),
            null != l && (0, a.jsx)(mj, { label: E.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function mk(e) {
    let { analytics: t } = e,
        n = E.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(mv, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: mm(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? mh[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(mv, {
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
                          mj,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(S.default["w/2voO"], { cpu: mi(t.cpu_ms) }),
                              hint: mf(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var mw = n(678708),
    mN = n(414499),
    mC = n(714800),
    mA = n(81466),
    mS = n(424383),
    mE = n(816943),
    mI = n(268791),
    mM = n(514042),
    m_ = n(872351),
    mP = n(708988),
    mR = n(150934),
    mT = n(417270);
let mL = "Restart Agent",
    m$ = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function mD(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function mz(e, t) {
    return { label: e, value: null != t && "" !== t ? mo(t) : "Unknown", icon: "calendar" };
}
function mO(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function mF(e, t, n, l) {
    let [r, a] = m$[n.status];
    return { label: e, value: `${mO(n.bytes)} of ${mO(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function mq(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = mo(e.at);
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
let mU = { main: "Main vs Remote", wip: "WIP vs Remote" };
function mG(e) {
    let t = `container ${mD(e.local)} \xb7 remote ${mD(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: mU[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${ms(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${ms(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${ms(n)} Ahead, ${ms(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let mB = ["main", "wip"];
var mH = n(400154);
let mK = {
        checkout: mw.FolderIcon,
        edit: aS.PencilIcon,
        remote: mN.h,
        commits: mC.e,
        calendar: mA.CalendarIcon,
        save: mS.L,
        objects: e_.R,
        download: mE.$,
        size: mI.$,
        file: mM.FileIcon,
    },
    mV = {
        ok: [nu.y, w.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [dK.WarningIcon, w.A.colors.ICON_FEEDBACK_WARNING],
        error: [tI.a, w.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [m_.z, w.A.colors.ICON_MUTED],
        behind: [mP.M, w.A.colors.ICON_MUTED],
    };
function mW(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([cf.A], () => cf.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, dE.DK)(t), [t]),
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
                    `Updated ${mo(r)}`,
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
    return (0, a.jsxs)(mv, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: mH.Lj,
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
                    if (!e.running || null != e.localError) return [mq(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            mq(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : ms(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = mB.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(mG))
                        : l.push(
                              { label: "Main", value: mD(e.heads.main), icon: "remote" },
                              { label: "WIP", value: mD(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? ms(e.commits) : "Unknown", icon: "commits" },
                            mz("Oldest Commit", e.oldest),
                            mz("Newest Commit", e.newest),
                            mq(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${ms(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${ms(t.loose)} loose (${ma(t.looseBytes)}) \xb7 ${ms(t.packed)} packed in ${n} (${ma(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${ms(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${ms(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                mF(
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
                                  mF("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = mK[r],
                        [o, u] = null != i ? mV[i] : [null, void 0];
                    return (0, a.jsx)(
                        mj,
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
function mX(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([cf.A], () => cf.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, dE.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = cf.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, dE.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                tM.h.dispatch({
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
            let u = i.useCallback(() => (0, dE.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: mL,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, ez.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: mH.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: mH.nM,
                children: [
                    (0, a.jsx)(mR.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(Z.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: mT.RetryIcon,
                        text: mL,
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
                            return `Restarted \xb7 new instance since ${mo(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${mo(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function mJ(e, t) {
    return (0, a.jsx)(mj, {
        label: e,
        value: E.intl.formatToPlainString(S.default.yHJxuP, { count: ms((0, dh.aM)(t)) }),
        hint: `${ms(t.input_tokens)} in \xb7 ${ms(t.output_tokens)} out \xb7 ${ms(t.cache_read_input_tokens)} cache read`,
    });
}
function mZ(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([cf.A], () => cf.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([cf.A], () => cf.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([cf.A], () => cf.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([cf.A], () => cf.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, dE.Lj)(t), [t]),
        f = i.useCallback(() => (0, dE.Lj)(t, !0), [t]),
        h = (0, o.bG)([cf.A], () => cf.A.getSandboxRestartState(t), [t]),
        p = (0, o.bG)([lh.A], () => lh.A.isThinking(t), [t]),
        g = i.useCallback(() => (0, dE.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = u?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: mH.Mf,
        children: [
            (0, a.jsx)(mx, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(mv, {
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
                                  (0, a.jsx)(mj, {
                                      label: E.intl.string(S.default["9nqym2"]),
                                      value: ms((0, dh.a7)(x.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default.NCdUIh, { count: ms(x.turns) }),
                                  }),
                                  mJ(E.intl.string(S.default.xtxP0e), x.orchestrator),
                                  mJ(E.intl.string(S.default["9Sj3SX"]), x.codegen),
                                  mJ(E.intl.string(S.default.ANCEo3), (0, dh.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(mj, {
                                          label: E.intl.string(S.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${ms(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(mv, {
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
                                  mJ(E.intl.string(S.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(mj, {
                                      label: E.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, dh.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(mv, {
                title: E.intl.string(S.default.NbRk9a),
                children: [
                    null != u && null != y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(mb, {
                                      label: E.intl.string(S.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: ms,
                                  }),
                                  (0, a.jsx)(mj, {
                                      label: E.intl.string(S.default.mRbSns),
                                      value: `${ms(u.tokensBefore)} \u{2192} ${ms(u.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: ms(u.retainedMessages),
                                          time: mo(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? E.intl.formatToPlainString(S.default.GMLCNv, { ceiling: ms(y) })
                                      : E.intl.string(S.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(mj, {
                            label: E.intl.string(S.default["4BX5KK"]),
                            value: `${ms(c.projected)} / ${ms(c.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default["6ngCax"], { time: mo(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: mH.Lj,
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
                                    let t = mo(e.observedAt);
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
                        className: mH.Lj,
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
                                    let t = mo(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(mX, { projectId: t }),
                ],
            }),
            (0, a.jsx)(mW, { projectId: t }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(mv, {
                    title: E.intl.string(S.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(mj, {
                                        label: E.intl.string(S.default.CLXHAs),
                                        value: mo(b.instance_since),
                                        hint: E.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(mj, { label: E.intl.string(S.default["8V8e1Z"]), value: ms(b.sockets) }),
                                    (0, a.jsx)(mj, {
                                        label: E.intl.string(S.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? E.intl.string(S.default.Wv025I)
                                            : E.intl.string(S.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(mj, {
                                            label: E.intl.string(S.default["3oUYnv"]),
                                            value: ms(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(my, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(mv, {
                    title: E.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(mj, {
                            label: E.intl.string(S.default.IlDBN3),
                            value: ms(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(mj, {
                            label: E.intl.string(S.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, { count: ms(j.context_window_tokens) }),
                        }),
                        (0, a.jsx)(mj, {
                            label: E.intl.string(S.default.cIhN2W),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, {
                                count: ms(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(mj, {
                            label: E.intl.string(S.default["+fOn/q"]),
                            value: ms(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(mj, { label: E.intl.string(S.default.kIHga0), value: ms(j.max_build_attempts) }),
                        (0, a.jsx)(mj, { label: E.intl.string(S.default.Iw03yW), value: ms(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var mY = n(237528),
    mQ = n(629584),
    m0 = n(531893);
function m1(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: m0.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.h1SE6R),
              }),
          });
}
function m2(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: m0.qf,
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
              className: m0.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function m3(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: m0.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var m5 = n(109079);
let m4 = i.memo(function (e) {
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
        className: m5.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: m5.Mt,
                selectable: !0,
                children: d_(n.ts) ?? n.ts,
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
                className: m5.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: m5.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: m5.Cq, children: (0, a.jsx)(mY.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: m5.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(mY.v, { text: E.intl.string(S.default.TrC9c8), variant: "redLight" }),
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
                                      className: m5.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": E.intl.string(S.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(nt.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(t0._, {
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
                                          className: m5.dF,
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
function m6(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([dS.A], () => dS.A.getLogs(t), [t]),
        l = (0, o.bG)([dS.A], () => dS.A.getHistoryState(t, "logs")),
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
                md.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return mc(e);
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
        className: m5.$F,
        children: [
            (0, a.jsxs)("div", {
                className: m5.y4,
                children: [
                    (0, a.jsx)(mQ.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: m5.KT,
                        children: (0, a.jsx)(dI.I, {
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
            n.length > 0 && (0, a.jsx)(m1, { state: l }),
            (0, a.jsxs)(r0.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: m5.sx,
                children: [
                    (0, a.jsx)(m3, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(m2, {
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
                          : d.map((e) => (0, a.jsx)(m4, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function m7(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(mv, {
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
function m8(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(mj, {
                      label: E.intl.formatToPlainString(S.default["01ZMS4"], { env: mc(n) }),
                      value: ((t = l.connected), E.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(mj, {
                      label: E.intl.string(S.default["z1dh+F"]),
                      value: ms(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${mo(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(mj, { label: E.intl.string(S.default.Iz5GnJ), value: ms(l.guild_count) }),
                  (0, a.jsx)(mj, {
                      label: E.intl.string(S.default["7UqtNv"]),
                      value: ms(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: mo(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(mj, {
                          label: E.intl.string(S.default["x3+JXJ"]),
                          value: ms(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(mj, { label: mc(n), value: E.intl.string(S.default.lTHQss) });
}
function m9(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(mj, {
        label: mc(t),
        value: E.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: ms(n.requests),
            failures: ms(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: mo(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["7KlGT6"], { time: mo(n.since) }),
    });
}
function fe(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(mj, {
                label: E.intl.formatToPlainString(S.default["92gVTm"], { env: mc(t) }),
                value: ms(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    mj,
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
                                  ? E.intl.formatToPlainString(S.default.wxAWNv, { time: mo(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function ft(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(mj, {
        label: mc(t),
        value: E.intl.formatToPlainString(S.default.suAOj9, { calls: ms(n.calls), errors: ms(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fn(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(mv, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(mv, {
        title: t,
        children: [
            (0, a.jsx)(mj, {
                label: E.intl.string(S.default.xtD4Zp),
                value: ms(n.requests),
                hint: E.intl.formatToPlainString(S.default["7KlGT6"], { time: mo(n.since) }),
            }),
            (0, a.jsx)(mj, { label: E.intl.string(S.default.gfRhR3), value: ms(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(mb, {
                              label: E.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: mi,
                          }),
                          (0, a.jsx)(mj, {
                              label: E.intl.string(S.default.mSKImM),
                              value: mi(r),
                              hint: E.intl.formatToPlainString(S.default.JqMU05, {
                                  total: mi(n.cpu_ms_total),
                                  wall: mi(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(mj, {
                      label: E.intl.string(S.default.LEJ5r3),
                      value: E.intl.string(S.default["2Ekb2b"]),
                      hint: E.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(mj, { label: E.intl.string(S.default.xvmL1D), value: mi(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(mj, { label: E.intl.string(S.default["4sQYwH"]), value: ms(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(mj, {
                label: E.intl.string(S.default.bQenOy),
                value: ms(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(mj, { label: E.intl.string(S.default.xgpn4Y), value: mu(n.build) }),
        ],
    });
}
function fl(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(mv, {
        title: E.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(mj, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(mj, {
                                  label: E.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: ma(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: ms(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(mb, {
                                      label: E.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: ma,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fr(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: mH.Mf,
        children: [
            (0, a.jsx)(mx, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fn, {
                            title: E.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fn, {
                            title: E.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fl, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(m7, {
                                title: E.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(m8, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(m7, {
                                title: E.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(m9, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(m7, {
                                title: E.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fe, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(m7, {
                                title: E.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ft, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(mk, { analytics: t.analytics }),
                        (0, a.jsxs)(mv, {
                            title: E.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(mj, {
                                    label: E.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? mu(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(mj, {
                                    label: E.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? mu(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fa = n(592465);
function fi(e) {
    let { projectId: t, onClose: n } = e,
        l = lj(),
        [r, s] = i.useState(() => (l && lg?.projectId === t ? "trace" : "logs")),
        u = (0, o.bG)([cf.A], () => cf.A.getStatus(t), [t]),
        c = (0, o.bG)([cf.A], () => cf.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, dE.R7)(t), (0, dE.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, _.subscribeDebugBacklog)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == lg || lg.projectId !== e) return null;
            let { traceId: t } = lg;
            return ((lg = null), t);
        })(t);
        return null != e && (mt(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        lx(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, eQ.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: cf.A.getStatus(t),
                        last_turn_usage: cf.A.getLastTurnUsage(t),
                        last_compaction: cf.A.getLastCompaction(t),
                        last_compaction_decline: cf.A.getLastCompactionDecline(t),
                        timing_traces: cf.A.getTimingTraces(t),
                        logs: dS.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, ed.P0)({ text: E.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: fa.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(ra.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(ra.Ay.Icon, {
                            icon: cR.CopyIcon,
                            tooltip: E.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(ra.Ay.Icon, { icon: em.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(ra.Ay.ChannelIcon, { icon: nM.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(ra.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: fa.rf,
                children: [
                    (0, a.jsxs)(dA.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(S.default.RvvWIh),
                        className: fa.vR,
                        children: [
                            (0, a.jsx)(dA.V.Item, { id: "logs", children: E.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(dA.V.Item, { id: "worker", children: E.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(dA.V.Item, { id: "agent", children: E.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(dA.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(m6, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(fr, { status: u, fetchState: c, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(mr, { projectId: t })
                            : (0, a.jsx)(mZ, { projectId: t, status: u, fetchState: c, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fs = n(365912),
    fo = n(873715);
function fu(e) {
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
let fc = Object.freeze({ x: -1, y: -1 });
function fd(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fu(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fm = n(192888);
function ff(e, t) {
    return (0, fm.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fd, () => ({ status: "failed" }));
}
var fh = n(108308);
let fp = { x: 25, y: 21 };
function fg(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fx(e, t, n, l) {
    let r = fg(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fv(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fj(e) {
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
function fb(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = n1(u),
        m = (0, lb.Zv)(u),
        f = (0, tt.useHasAnyModalOpen)(),
        h = (0, o.bG)([aM.default], () => aM.default.getCurrentUser()),
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
        [B, H] = i.useState(null),
        K = c && !m && !f;
    null == D || (K && D.projectId === u) || z(null);
    let V = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != V) return () => tG(V, "design");
    }, [V]);
    let W = rf(r, K);
    i.useEffect(() => {
        if (!K || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void k(!0);
        (b(!0), k(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fo.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? fj(t.response) : null;
                    null == n ? k(!0) : (x(n), nY(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (b(!1), k(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [K, r, u]);
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!K || null == W || null == u) return;
        if (null == g) {
            X.current = W;
            return;
        }
        if (rm(X.current, W)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            X.current = W;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fo.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ee.current) return;
                        let l = fj(e.response);
                        null != l && (x(l), nY(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fu(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = nV(u)).active &&
                                0 !== r.size &&
                                nW(u, {
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
    }, [K, W, g, d, u, r]),
        i.useEffect(() => {
            if (!K)
                return () => {
                    (N(null), z(null), H(null), x(null));
                };
        }, [K]));
    let J = i.useRef(null),
        Y = i.useRef(null),
        Q = i.useRef(!1),
        ee = i.useRef(!1);
    i.useEffect(() => {
        ((ee.current = K), K || ((J.current = null), (Y.current = null), (P.current = null), A(!1)));
    }, [K]);
    let et = i.useCallback(
            function e() {
                if (Q.current) return;
                let t = J.current;
                if (null == t) return;
                J.current = null;
                let n = r();
                null != n &&
                    ((Q.current = !0),
                    ff(n, t).then((t) => {
                        if (((Q.current = !1), ee.current)) {
                            if ("picked" !== t.status || fA(t.target, es.current.rect, es.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = nz(t.target);
                                (T((t) => (fC(t, e) ? t : e)),
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
            let e = setTimeout(() => F(null), fw);
            return () => clearTimeout(e);
        }, [O]));
    let el = null == g || null == W || g.viewport.width < 1 ? 1 : W.width / g.viewport.width,
        er = null != g || y,
        ea = i.useMemo(() => g?.elements ?? [], [g]),
        es = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        es.current = { rect: W, scale: el };
    }, [W, el]);
    let eo = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (tG(u, "design"),
                    H(null),
                    (q.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nz(e) }));
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
                if (null == W || null != B) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ec(), A(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > fN || Math.abs(e.clientY - D.at.y) > fN) && (q.current = !0);
                    return;
                }
                if (!er) return void N(null);
                let t = eu(e, W);
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
                        n = null != e && fA(e, W, el) ? null : e;
                    if (null != n) {
                        let e = nz(n);
                        T((t) => (fC(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Y.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Y.current = n), (J.current = n), et());
            },
            [W, el, er, eu, L, ea, D, B, ec, et],
        ),
        em = null == B ? null : d.find((e) => e.id === B.id),
        ef = K && (C || D?.target.marker != null || em?.target.marker != null);
    i.useEffect(() => {
        if (ef)
            return () => {
                let e = r();
                null != e && ff(e, fc);
            };
    }, [ef, r]);
    let eh = i.useCallback(() => {
        (A(!1), N(null), (Y.current = null), (J.current = null));
    }, []);
    i.useEffect(() => {
        if (!K || !C || !er || L || null != D || null != B) return;
        let e = P.current,
            { rect: t, scale: n } = es.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Y.current = l), (J.current = l), et());
    }, [K, C, er, L, D, B, et]);
    let ep = i.useCallback(
            (e) => {
                if (null != D || null != B) {
                    (en(), H(null));
                    return;
                }
                if (null == w || null == W) return;
                let t = eu(e, W);
                eo(
                    w,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? n$
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(w, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [w, W, eu, D, B, eo, en],
        ),
        eg = i.useCallback(() => {
            null != u && (N(null), null != li(u) ? lo(u) : nZ(u));
        }, [u]),
        ex = i.useCallback(() => {
            null != u &&
                (null != D
                    ? en()
                    : B?.confirmingRemove === !0
                      ? H({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? H(null)
                        : eg());
        }, [u, D, B, en, eg]),
        ej = i.useRef(ex),
        eb = i.useRef(u),
        ey = i.useRef(eg);
    i.useLayoutEffect(() => {
        ((ej.current = ex), (eb.current = u), (ey.current = eg));
    });
    let ek = i.useRef(null);
    i.useEffect(() => {
        if (K)
            return (
                rs.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rs.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            !(0, ei.vq)(t) ||
                ek.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fs.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eb.current || null == li(eb.current)) && ey.current());
        }
    }, [K, s]);
    let ew = i.useCallback(
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
                    eo(w, n$, { x: (W?.left ?? 0) + w.rect.x * el, y: (W?.top ?? 0) + w.rect.y * el }));
            },
            [u, D, B, ea, w, eo, ex, W, el],
        ),
        eN = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((nD(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, _.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = nz(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${nq}${r}${nU}${nF(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        en(),
                        N(null)));
            },
            [u, D, en],
        ),
        eC = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, ev.vX)(u, e)), [u]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != p && nD(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = nV(u)).annotations.find((t) => t.id === e)) &&
                        nQ(l, p) &&
                        nW(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    H({ ...B, editing: !1 }));
            }
        }, [u, B, p]),
        eS = i.useCallback(() => {
            if (null != u && null != B && null != p) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = nV(u)).annotations.find((t) => t.id === e)) &&
                        nQ(n, p) &&
                        nW(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    H(null));
            }
        }, [u, B, p]),
        eE = c
            ? j
                ? E.intl.string(S.default["Eb/YV9"])
                : y
                  ? E.intl.string(S.default.FD30bh)
                  : E.intl.formatToPlainString(S.default.dTSqLF, { count: d.length })
            : "",
        eI = K && null != W,
        eM = C && null == B,
        e_ = D?.target ?? em?.target ?? null,
        eP = D ?? O,
        eR = D ?? (O?.instant === !0 ? null : O),
        eT =
            null != em && null != W
                ? (function (e, t) {
                      let { left: n, top: l } = fv(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fx(em.target, em.anchor, W, el), W)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = em;
            ff(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [em, r]),
        (0, ri.createPortal)(
            (0, a.jsxs)("div", {
                ref: ek,
                className: fh.Li,
                children: [
                    (0, a.jsx)(ae.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    eI
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: fh.MT,
                                      style: { left: W.left, top: W.top, width: W.width, height: W.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": E.intl.string(S.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ed,
                                      onMouseLeave: eh,
                                      onClick: ep,
                                      onKeyDown: ew,
                                  }),
                                  null != w && null == w.marker && null == D && null == B
                                      ? (0, a.jsx)(fS, { box: fg(w, W, el) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: fh.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fh.xz,
                                          "data-shown": null != w && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: fh.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fh.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fh.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: fh.Y,
                                      children: eM ? (0, a.jsx)("div", { className: fh.u }) : null,
                                  }),
                                  null == eR
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fh.aZ,
                                            style: {
                                                transform: `translate3d(${eR.at.x + 20}px, ${eR.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fh.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: fh.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fh.Tl,
                                                            children: eR.label.kind,
                                                        }),
                                                        "" === eR.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fh.kh,
                                                                  children: [" ", eR.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != e_ && null == e_.marker
                                      ? (0, a.jsx)("div", { className: fh.D0, style: fg(e_, W, el), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fx(e.target, e.anchor, W, el),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fh.xL,
                                              style: { ...fv(n, W), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(S.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: nO(e.target),
                                              }),
                                              "aria-expanded": B?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == D && H(l);
                                              },
                                              onFocus: () => {
                                                  null == D && H(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), en(), H(l));
                                              },
                                              children: (0, a.jsx)(fy, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eP || null == u
                                      ? null
                                      : (0, a.jsx)(rc, {
                                            projectId: u,
                                            at: { x: eP.at.x + 20, y: eP.at.y + 20 },
                                            bounds: W,
                                            kind: eP.label.kind,
                                            value: eP.draft,
                                            canSubmit: null != D && nD(eP.draft),
                                            onChange: (e) => {
                                                null != D && z({ ...D, draft: e });
                                            },
                                            onSubmit: eN,
                                            onDismiss: en,
                                            onUploadFile: eC,
                                            closing: null == D,
                                        }),
                                  null != em && null != B && null != eT
                                      ? (0, a.jsxs)(fk, {
                                            point: eT,
                                            frame: W,
                                            authorId: em.authorId,
                                            title: nO(em.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? H({ ...B, confirmingRemove: !1 }) : H(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || H(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(ak.f, {
                                                          autoFocus: !0,
                                                          label: E.intl.string(S.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: B.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => H({ ...B, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eA());
                                                          },
                                                      })
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: fh.aC,
                                                          children: em.comment,
                                                      }),
                                                nQ(em, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: fh.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fh.nv,
                                                                            children: E.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(Z.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                H({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(Z.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
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
                                                                                H({
                                                                                    ...B,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        B.editing
                                                                            ? (0, a.jsx)(Z.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nD(B.draft),
                                                                                  text: E.intl.string(S.default.iicRP9),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, a.jsx)(Z.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: E.intl.string(
                                                                                      S.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      H({
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
function fy(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([aM.default], () => aM.default.getUser(t), [t]);
    return (0, a.jsx)(sI.eu, {
        src: null == n ? null : Q.Ay.getUserAvatarURL(n),
        size: sM._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fk(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(fp);
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
        className: fh.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fh.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fh.ip, children: (0, a.jsx)(fy, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fh.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fh.zI, children: g }),
        ],
    });
}
let fw = 300,
    fN = 2;
function fC(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fA(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fS(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fh.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fE = n(659723),
    fI = n(697744),
    fM = n(130324);
function f_(e) {
    let t = (0, fI.c)(),
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
    let r = (0, r2.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function fP(e) {
    let { className: t } = e,
        { Component: n, events: l } = f_(3e4);
    return (0, a.jsxs)("div", {
        className: h()(t, fM.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: fM.ol,
                children: E.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var fR = n(251363),
    fT = n(944142),
    fL = n(532247),
    f$ = n(501628);
function fD(e) {
    let { progress: t } = e,
        { Component: n } = f_(1500),
        l = lv.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: f$.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: f$.PM,
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
function fz(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([fT.A], () => (s ? fT.A.getLiveReload(t) : null), [s, t]),
        c = (0, lZ.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, fL.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, fL.QP)(e, s)));
            let m = (0, o.bG)(
                    [lD.A],
                    () => {
                        let e = lD.A.getFrame(n);
                        return (0, lq.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, fR.ow)(null, n) && e();
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
        h = m ? null : (0, fL.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ae.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: f$.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(fD, { progress: h }),
                  })
                : null,
        ],
    });
}
var fO = n(357858),
    fF = n(343030),
    fq = n(317608),
    fU = n(35367),
    fG = n(228946);
let fB = { width: 1 / 0, height: 1 / 0 };
function fH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fB;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var fK = n(702083);
function fV(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([lY.A], () => ({
            mobile: lY.A.isBuilderPreviewMobile(),
            landscape: lY.A.isBuilderPreviewLandscape(),
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
        d = n ? fH(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: h()(fK.dw, { [fK.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: h()(fK.R9, { [fK.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var fW = n(347927);
function fX(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: h()(fW.Bf, l && fW.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: fW.Ux,
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
var fJ = n(957272);
function fZ(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, fU.A)({ applicationId: t, surface: n, launch: l });
    if (((0, fG.A)(t, n), s === fU.n.Launched)) {
        let e = (0, a.jsx)(fq.A, { frameId: i.id, level: fF.A.WithinAppContent, className: fJ.Z7, overlay: r });
        return (0, lQ.Q5)(n) ? (0, a.jsx)(fV, { children: e }) : e;
    }
    return (0, a.jsx)(fY, { state: s });
}
function fY(e) {
    let { state: t } = e;
    switch (t) {
        case fU.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: fJ.qs,
                children: (0, a.jsx)(fX, {
                    title: E.intl.string(S.default["9kpdo7"]),
                    body: E.intl.string(S.default.iIA8Nj),
                }),
            });
        case fU.n.NoApplication:
            return (0, a.jsx)(fP, { className: fJ.qs });
        case fU.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: fJ.qs,
                children: (0, a.jsx)(fX, {
                    title: E.intl.string(S.default["7k4GyN"]),
                    body: E.intl.string(S.default.zdIy3R),
                }),
            });
        case fU.n.Error:
            return (0, a.jsxs)("div", {
                className: fJ.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: fJ.tj,
                        children: E.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case fU.n.AwaitingLaunch:
        case fU.n.Loading:
            return (0, a.jsx)("div", { className: fJ.qs, children: (0, a.jsx)(tE.y, {}) });
    }
}
var fQ = n(308528),
    f0 = n(334738),
    f1 = n(688438),
    f2 = n(365971),
    f3 = n(703462);
function f5(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: f3.f,
        children: [
            (0, a.jsx)(et.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function f4() {
    return (0, a.jsx)("div", { className: f3.f, children: (0, a.jsx)(tE.y, {}) });
}
function f6(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        c = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, o.bG)([aI.A], () => (null != c ? aI.A.getChannel(c) : null), [c]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && fQ.A.preload(q.ME, t);
        }, [t]),
        (n = (0, o.bG)([tN.A], () => tN.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, f2.Xg)();
            return (
                (0, f0.yl)(t, e),
                () => {
                    (0, f0.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, lN.CN)(l).then(
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
        ? (0, a.jsx)(f5, { message: E.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(f4, {})
          : (0, a.jsx)("div", {
                className: f3.g,
                children: (0, a.jsx)(f1.A, { channel: d, guild: null, chatInputType: ur.oU.SIDEBAR }, d.id),
            });
}
var f7 = n(887909),
    f8 = n(570962),
    f9 = n(998475);
function he(e) {
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
    } = (0, f7.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: f9.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: f9.rf,
                children: (0, a.jsx)(f8.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: f9.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: f9.z3,
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
                                className: h()(f9.Qs, c ? f9.cw : null, d ? f9.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: f9.o1,
                      children: s.map((e, t) => (0, a.jsx)(Z.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var ht = n(765671),
    hn = n(269094),
    hl = n(714917),
    hr = n(463660),
    ha = n(582063);
let hi = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function hs() {
    (0, ed.P0)({ text: E.intl.string(S.default.jj3abP), variant: "critical" });
}
function ho(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = E.intl.string(S.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ef.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(hu, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: ha.m2,
                        children: (0, a.jsx)(N.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(eX.K, {
                                "aria-label": r,
                                icon: eW.SettingsIcon,
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
                accept: hi.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (hi.includes(n.type)
                                ? n.size > ex.aI
                                    ? (0, ed.P0)({ text: E.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, hr.M$)(t, n).catch(hs)
                                : (0, ed.P0)({ text: E.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function hu(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([hl.A], () => hl.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eh.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": E.intl.string(S.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(ep.rX, {
                children: [
                    (0, a.jsx)(ep.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: E.intl.string(S.default.uQpDky),
                        icon: a0.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(ep.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(S.default.AiAz8J),
                        icon: mT.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, hr.Og)(t).catch(hs));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(ep.rX, {
                children: (0, a.jsx)(ep.fP, {
                    id: "conjure-overlay-background-blur",
                    label: E.intl.string(S.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, hr.Y1)(t, !i) || hs();
                    },
                }),
            }),
        ],
    });
}
let hc = "/assets/7cec34541705c795.webp";
function hd(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, fU.A)({ applicationId: t, surface: lq.ZN });
    return (i.useEffect(() => {
        let e = (0, lq.VA)(t, lq.ZN);
        return () => (0, l0.r)(e);
    }, [t]),
    r.state !== fU.n.Launched)
        ? (0, a.jsx)(fY, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(fY, { state: fU.n.Loading })
          : (0, a.jsx)(hm, { lifecycle: r, projectId: n, size: l });
}
function hm(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, ht.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: ha.JH,
        children: [
            (0, a.jsx)(hf, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: ha.dw,
                children: (0, a.jsx)("div", {
                    className: ha.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(hn.A, { frame: t.frame, application: t.application, className: ha.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(ho, { projectId: n }) : null,
        ],
    });
}
function hf(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([hl.A], () => (null != t ? hl.A.getBackground(t) : null)),
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
                (0, hr.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(hc);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        p = null == l || (null != f && f === u) ? hc : f;
    return null != p && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: h()(ha.LO, { [ha.Ty]: n?.blur === !0 }),
              src: p,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  p === f && c(f);
              },
          })
        : null;
}
var hh = n(409478),
    hp = n(652227);
function hg(e) {
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
            overlayWidgetSize: m = lS,
            projectId: f,
            frameOverlay: h,
            paused: p = !1,
            onResume: g,
        } = e,
        x = (0, o.bG)([io.A], () => null != f && null != io.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: hp.qs, children: (0, a.jsx)(tE.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: hp.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(tE.y, {}) : (0, a.jsx)(he, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: hp.RG,
                      children: [
                          (0, lI.yf)(u, c)
                              ? p
                                  ? (0, a.jsx)(hx, { projectId: f, onResume: g })
                                  : (0, a.jsx)(fZ, { applicationId: t, surface: l, launch: r, frameOverlay: h })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: hp.qs,
                                        children: (0, a.jsx)(fX, {
                                            wide: !0,
                                            title: E.intl.string(S.default["08U+YO"]),
                                            body: E.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(hh.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(hd, { applicationId: t, projectId: f, size: m })
                              : null,
                          "bot" === c && null != n && null != f
                              ? (0, a.jsx)(f6, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: hp.qs, children: (0, a.jsx)(tE.y, {}) })
              : (0, a.jsx)(fP, { className: hp.qs });
}
function hx(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, fO.Pu)(t),
        (0, a.jsx)("div", {
            className: hp.qs,
            children: (0, a.jsx)(fX, {
                wide: !0,
                title: E.intl.string(S.default.MMWEH2),
                body: E.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(Z.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eU.PlayIcon,
                              text: E.intl.string(S.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var hv = n(175841),
    hj = n(750506),
    hb = n(867193),
    hy = n(539197),
    hk = n(977020);
function hw(e) {
    let { projectId: t } = e,
        n = (0, hy.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, hy.Ie)(e);
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
        className: hk.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [hy.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: h()(hk.hN, hk.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: h()(hk.hN, hk.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: h()(hk.UE, { [hk.SP]: n.shown, [hk.Vq]: n.pressed, [hk.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var hN = n(417760);
function hC(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, o.bG)([lh.A], () => null != e && lh.A.isThinking(e)),
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
        u = (0, lb.CU)(n),
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
              className: h()(hN.M0, hN.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(dn.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(hv.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: hN.ID, children: d }),
                  c ? (0, a.jsx)(ae.A, { children: E.intl.string(S.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: hN.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: hN.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: hN.sp,
                      children: [
                          (0, a.jsx)(hv.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(dn.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: hN.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: hN.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: hN.Rb,
                                            children: E.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: hN.lC, children: m }) : null,
              ],
          });
}
function hA(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, lb.Zv)(null != n && n === l ? t : null),
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
        c = (0, tt.useHasAnyModalOpen)(),
        d = (0, lz.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, lz.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = rd(r());
            f((t) => (rm(t, e) ? t : e));
            let t = null == h ? null : rd(h);
            (x((e) => (rm(e, t) ? e : t)), null != h && (0, hb.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, hb.C)(0));
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
            let [e] = i.useContext(hj.uY),
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
                      className: hN.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: hN.QF,
                          children: (0, a.jsx)(hC, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, ri.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(ae.A, {
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
                ? (0, ri.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: hN.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: hN.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(hw, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var hS = n(399503),
    hE = n(853555),
    hI = n(271982),
    hM = n(187645);
let h_ = new Map(),
    hP = !1;
function hR() {
    let e = new Map();
    for (let t of new Set([...lh.A.getActivityOrderedProjectIds(), ...(0, lb.T7)()])) {
        if (!(lh.A.isThinking(t) || (0, lb.wK)(t)) || lC.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eO.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, lQ.Rc)(t);
            return (0, lq.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...h_]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            h_.delete(t),
            n.unregisterLookup(),
            hI.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        h_.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = hM.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    hT(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (h_.set(e, l),
                    (l.unregisterLookup = (0, hE.Ng)(e, () => (0, fR.n5)(n, t))),
                    hI.A.registerFrameTarget(t, n, fF.A.Backstage, void 0));
            })(t, n);
    for (let e of h_.values()) hT(e.element);
}
function hT(e) {
    let t = lY.A.isBuilderPreviewMobile();
    e.classList.toggle(hM.L, !t);
    let n = t ? fH(lY.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var hL = n(873727),
    h$ = n(147248),
    hD = n(418842),
    hz = n(363195),
    hO = n(818023);
let hF = null;
var hq = n(517461),
    hU = n(761929),
    hG = n(487336);
function hB(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, hq.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, iv.clamp)(u, 360, n),
        m = (0, hU.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: hU.R.HORIZONTAL_LEFT,
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
        className: hG.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: hG.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: hG.kL, style: { width: d }, children: l }),
        ],
    });
}
var hH = n(541940);
function hK(e) {
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
        v = (0, lZ.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([hz.A], () => (0, hL.x4)(hz.A.theme)),
            l = (0, o.bG)([h$.A], () => h$.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([Y.Ay], () => ({
                reducedMotion: Y.Ay.useReducedMotion,
                fontScale: (0, hL.U0)(),
                highContrast: Y.Ay.isHighContrastModeEnabled,
                forcedColors: Y.Ay.useForcedColors,
                underlineLinks: Y.Ay.alwaysShowLinkDecorations,
            })),
            d = lv.hH.useSetting(),
            m = (0, hD.C)(),
            f = (0, o.bG)(
                [lD.A, lY.A],
                () =>
                    lY.A.isBuilderPreviewMobile() &&
                    lD.A.getFrame(t)?.applicationId === lY.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            p = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, fR.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, hL.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, fm.W)(l, "set-env", i, {
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
                let n = (0, fR.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, fR.n5)(e, t) && ((x.current = null), b());
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
            if (null != t) return (0, hE.Ng)(t, () => (0, fR.n5)(g, j));
        }, [t, g, j]));
    let b = i.useCallback(() => (0, fR.ow)(g, j), [g, j]),
        y = i.useCallback(() => (f ? (0, fR.ow)(g, j) : g), [f, g, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: h()(hH.Mh, c),
                children: [
                    u,
                    p
                        ? null
                        : (0, a.jsx)(hA, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: hH.fm, children: d }),
                ],
            }),
            m,
            p
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fb, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(rZ, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function hV(e) {
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
    (0, hS.k)(t, N);
    let M = s.type === lM.U.MAIN || (0, lQ.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([lY.A], () => ({
            mobile: lY.A.isBuilderPreviewMobile(),
            landscape: lY.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? hO.aX.LANDSCAPE : hO.aX.PORTRAIT), (hF = e));
                else {
                    if (hF !== e) return;
                    ((l = hO.aX.UNHANDLED), (hF = null));
                }
                tM.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let P = i.useRef(null),
        [R, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, rQ.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, rQ.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, lN.HV)(l), () => (0, lN.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, _.ensureConnection)(t),
                hP ||
                    ((hP = !0),
                    lh.A.addChangeListener(hR),
                    eO.Ay.addChangeListener(hR),
                    lD.A.addChangeListener(hR),
                    lY.A.addChangeListener(hR),
                    lC.A.addChangeListener(hR),
                    (0, lb.W3)(hR),
                    hR()));
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
        className: hH.LB,
        children: (0, a.jsx)(hK, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, lI.yf)(k, w),
            paused: A,
            mainClassName: null == c ? void 0 : h()(hH.ez, { [hH.zt]: d }),
            content: (0, a.jsx)(hg, {
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
                frameOverlay: (0, a.jsx)(fz, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && $
                    ? (0, a.jsx)(hB, {
                          open: d,
                          maxWidth: L,
                          children: (0, a.jsx)("div", {
                              className: hH.cO,
                              children: x
                                  ? (0, a.jsx)(fi, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(fE.A, { projectId: t }),
                                            (0, a.jsx)(ra.Ay, {
                                                "aria-label": E.intl.string(E.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(ra.Ay.Icon, {
                                                                  icon: em.P,
                                                                  tooltip: E.intl.string(S.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(ra.Ay.Title, {
                                                    children: E.intl.string(E.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: hH.cb,
                                                children: (0, a.jsx)(
                                                    dC,
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
var hW = n(323140);
function hX(e) {
    var t;
    let l,
        r,
        s,
        { project: c, projectsLoaded: d, onBack: m, guildId: f } = e,
        [p, g] = i.useState(!0),
        [j, b] = i.useState(!1),
        k = lj(),
        w = i.useCallback(() => g(!0), []),
        C = i.useCallback(() => {
            (b(!1), g(!0));
        }, []),
        { restoreState: A, handleRestoreVersion: I } = (function (e, t) {
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
                                (0, lk.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, ed.P0)({
                                                        text: E.intl.formatToPlainString(S.default.Z4n6LX, {
                                                            title: (0, ly.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, lw.c)(u, r);
                                                null != e && (0, ed.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, ed.P0)({
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
        })(c, C),
        P = c?.id ?? null,
        {
            integrationStatus: T,
            isPreviewApplicationLoading: L,
            checkingIntegration: $,
            previewReady: D,
            hasFrame: z,
            needsPermissionReview: O,
            installAuthorizeProps: F,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)(
                    [eO.Ay, lV.A],
                    () => (null == r ? null : (eO.Ay.getIntegrationStatus(r) ?? lV.A.getIntegrationStatus(r))),
                    [r],
                ),
                { data: c, isLoading: d } = (0, lK.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                p = (0, lI.Qg)({
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
            let x = (0, lW.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, lW.$)(e, x));
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
                              ...(0, lX.i)({ applicationId: t, application: c ?? null, guildId: x }),
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
        })(c, f),
        G =
            (0, o.bG)([l1.A], () => (null == P ? void 0 : l1.A.getPublishStatus(P)?.previewAppChannels), [P]) ??
            T?.preview_app_channels,
        {
            availability: B,
            activeMode: H,
            setMode: K,
            frameSurface: V,
            frameSurfaceOptions: W,
            setFrameSurface: X,
            appChannel: J,
            setAppChannel: Y,
            frameLaunchParams: Q,
            widgetApplicationId: ee,
        } = (0, lT.p)({
            applicationId: c?.preview_application_id ?? null,
            previewApplicationId: c?.preview_application_id ?? null,
            declaredActivity: z,
            previewSupportedSurfaces: c?.preview_supported_surfaces,
            installScope: c?.install_scope ?? null,
            ownerAuthorizationRevoked: T?.owner_authorization_revoked === !0,
            supportsOverlay: c?.preview_supported_surfaces?.includes(lA.q7.OVERLAY) === !0,
            previewAppChannels: G,
        }),
        et =
            ((t = (0, o.bG)(
                [lh.A],
                () =>
                    null == P
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(lh.A.getMessages(P)),
                [P],
            )),
            null != (l = t?.default_size) &&
            Number.isFinite(l.width) &&
            Number.isFinite(l.height) &&
            l.width > 0 &&
            l.height > 0
                ? l
                : lS);
    ((0, lE.x)(P, (e) => {
        B.modes.includes(e) && K(e);
    }),
        lx(P, () => {
            (g(!0), b(!0));
        }));
    let en = B.modes.includes("frame"),
        el = (0, o.bG)([lC.A], () => lC.A.isPaused(P), [P]),
        er = en && !el,
        {
            previewTargetOptions: ea,
            handleSelectPreviewTarget: ei,
            mobilePreview: es,
            mobilePreviewLabel: eo,
            handleToggleMobilePreview: eu,
            landscapePreview: ec,
            rotatePreviewLabel: em,
            handleRotatePreview: ef,
            previewSurface: eh,
            previewFrame: ep,
            isRefreshing: eg,
            handleRefresh: ex,
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
                                          t === lM.U.APP_CHANNEL && n.length > 1
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
                f = (0, o.bG)([lY.A], () => lY.A.isBuilderPreviewMobile()),
                h = E.intl.string(f ? S.default.tKGF0Q : S.default.peqEOY),
                p = i.useCallback(() => (0, lN.GG)(!f), [f]),
                g = (0, o.bG)([lY.A], () => lY.A.isBuilderPreviewLandscape()),
                x = E.intl.string(g ? S.default.tunI2l : S.default.DoNdjA),
                v = i.useCallback(() => (0, lN.Lw)(!g), [g]),
                j = (0, lQ.jS)(t),
                b = i.useMemo(() => (0, lQ.Op)(j, l), [j, l]),
                y = (0, lZ.A)(t?.preview_application_id ?? null, b),
                k = (0, lq.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || lJ.A.refreshProxyTicket(y.id);
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
            project: c,
            modes: B.modes,
            frameSurface: V,
            frameSurfaceOptions: W,
            previewAppChannels: G,
            setMode: K,
            setFrameSurface: X,
            setAppChannel: Y,
        }),
        ev = p && !j,
        ej = E.intl.string(ev ? S.default.JD6Oit : S.default.xjJAQm),
        ey = i.useCallback(() => {
            if (j) {
                (b(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [j]),
        ek = i.useCallback(() => g(!1), []),
        {
            designFeedbackActive: ew,
            designFeedbackToggleRef: eN,
            agentDrivingPreview: eC,
            designFeedbackLabel: eE,
            handleToggleDesignFeedback: eM,
        } = (function (e, t, n) {
            let { active: l } = n1(e);
            i.useEffect(() => {
                null != e && l && !t && nZ(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, lb.Zv)(e),
                s = E.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void nZ(e);
                        (n(), nX(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(P, er, C),
        [e_] = i.useState(() => eb.isPlatformEmbedded && (0, lH.qM)()),
        eP = null != ld(P);
    i.useEffect(() => {
        null != P && eP && !er && lo(P);
    }, [P, eP, er]);
    let eR = i.useCallback(() => {
            null != P &&
                (C(),
                (function (e) {
                    if (null != li(e)) return;
                    let { byProject: t } = lr.getState();
                    lr.setState({ byProject: { ...t, [e]: la } });
                })(P));
        }, [P, C]),
        eT = i.useCallback(() => {
            null != P && lo(P);
        }, [P]),
        eL = eP ? E.intl.string(S.default.tuQ5f3) : eE,
        e$ = i.useCallback(() => {
            b((e) => !e && (g(!0), !0));
        }, []),
        eD = i.useCallback(() => b(!1), []),
        eF = i.useCallback(() => {
            null != P && (0, lN._j)(P);
        }, [P]),
        eq = i.useCallback(() => {
            null != P && (el ? (0, lN._j)(P) : (0, lN.di)(P, ep?.id));
        }, [P, el, ep?.id]),
        eU = i.useCallback(() => {
            var e, t;
            (null != c && ((e = c.id), (t = ep?.id), (0, _.closeConnection)(e), (0, l0.r)(t)), m());
        }, [c, ep?.id, m]),
        eG =
            ((r = i.useCallback(() => {
                null != c && (w(), (0, _.sendUserMessage)(c.id, E.intl.string(S.default.oU20rd)));
            }, [c, w])),
            {
                onExport: r,
                onImport: (s = eI(
                    i.useCallback(
                        (e) => {
                            if (null == c) return;
                            let t = c.id,
                                n = eS(e);
                            null != n
                                ? (0, ed.P0)({ text: n, variant: "critical" })
                                : (0, ez.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: c.name }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          w();
                                          try {
                                              await eA(t, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, ed.P0)({
                                                  text: E.intl.string(S.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [c, w],
                    ),
                )).open,
                importInput: s.input,
            }),
        eB = i.useCallback(() => {
            null != c && (0, tf.A)(c, f);
        }, [c, f]),
        eH = (0, lI.JR)(H, O)
            ? { type: "permissions", authorizeProps: F }
            : $ && null == T
              ? { type: "checking" }
              : void 0,
        eK = (0, o.bG)([eO.Ay], () => null != P && eO.Ay.isProjectDeleting(P), [P]);
    i.useEffect(() => {
        ((null == c && d) || eK) && (0, u.bG)(q.BVt.CHANNEL(f, U.VV.CONJURE));
    }, [f, c, d, eK]);
    let {
            publishOptions: eV,
            publish: eX,
            publishing: eJ,
            confirmation: eZ,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...rr,
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
                c = (0, e5.Ay)(e, u),
                d = c?.publishing === !0;
            i.useEffect(() => {
                d && (s(), r(null));
            }, [d, s]);
            let m = d ? null : l;
            return { publishOptions: u, publish: c, publishing: d, confirmation: m };
        })(P, f, $ || L),
        eY = (0, l2.L)(eX?.status ?? null),
        eQ =
            null == eX
                ? null
                : (0, a.jsx)("div", {
                      className: hW.As,
                      onMouseDown:
                          null == P || eX.disabled || eJ
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, l3.dx)(P);
                                },
                      children: (0, a.jsx)(N.m, {
                          text: eY,
                          asContainer: !0,
                          children: (0, a.jsx)(Z.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eJ ? hJ : null != eZ ? nE.U : void 0,
                              disabled: eX.disabled,
                              onClick: () => eX.run("header"),
                              text: eZ ?? eX.label,
                          }),
                      }),
                  }),
        e0 = null == c ? void 0 : () => (0, e6.A)(c.id, { guildId: f, isPreview: !0, publishOptions: eV }),
        e1 = (0, a.jsx)(M, {
            title: c?.name ?? E.intl.string(S.default.G1WwgK),
            breadcrumb: { title: E.intl.string(S.default.uk6jhJ), onClick: m },
            project: c,
            onOpenProjectSettings: e0,
            actions:
                null == c
                    ? null
                    : (0, a.jsxs)("div", {
                          className: hW.FO,
                          children: [
                              (0, a.jsx)(lB, {
                                  targets: ea,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(H, V, J),
                                  onChange: ei,
                              }),
                              en
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === H
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: es ? hQ : hY,
                                                      tooltip: eo,
                                                      "aria-label": eo,
                                                      selected: es,
                                                      onClick: eu,
                                                  })
                                                : null,
                                            es && "frame" === H
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: h0,
                                                      tooltip: em,
                                                      "aria-label": em,
                                                      selected: ec,
                                                      onClick: ef,
                                                  })
                                                : null,
                                            (0, a.jsx)(lf, {
                                                enabled: e_ && !eP && !eC && !el,
                                                onLongPress: eR,
                                                children: (0, a.jsx)(y.A.Icon, {
                                                    ref: eN,
                                                    icon: nI.x,
                                                    iconClassName: hW.D8,
                                                    tooltip: eL,
                                                    "aria-label": eL,
                                                    selected: eP || ew,
                                                    disabled: el || (eC && !eP),
                                                    onClick: eP ? eT : eM,
                                                }),
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" !== H || el
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(nL.A, { frame: ep }),
                                            (0, a.jsx)(lU, { frame: ep, controlProjectId: c.id }),
                                        ],
                                    }),
                              (0, a.jsx)("div", { className: hW.YJ }),
                              k
                                  ? (0, a.jsx)(y.A.Icon, {
                                        icon: nM.BugIcon,
                                        tooltip: E.intl.string(S.default.Mt5k9d),
                                        "aria-label": E.intl.string(S.default.Mt5k9d),
                                        selected: j,
                                        onClick: e$,
                                    })
                                  : null,
                              (0, a.jsx)(y.A.Icon, {
                                  icon: eW.SettingsIcon,
                                  tooltip: E.intl.string(S.default.I2XSKe),
                                  "aria-label": E.intl.string(S.default.I2XSKe),
                                  onClick: e0,
                              }),
                              (0, a.jsx)(tm, {
                                  projectId: c.id,
                                  projectName: c.name,
                                  guildId: f,
                                  projectGuildId: c.guild_id,
                                  isOwner: (0, eO.PV)(c),
                                  canRemix: (0, eO.H_)(c),
                                  onRefresh: (0, lq.x1)(ep) ? ex : void 0,
                                  isRefreshing: eg,
                                  onTogglePreviewPaused: "frame" === H ? eq : void 0,
                                  previewPaused: el,
                                  previewPauseDisabled: !el && eC,
                                  onClose: eU,
                                  onExport: eG.onExport,
                                  onImport: eG.onImport,
                                  onRemix: eB,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = c.id),
                                          void (0, tt.openModalLazy)(async () => {
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
                                              projectId: c.id,
                                              installScope: c.install_scope,
                                              restoreDisabled: A?.status === "restoring",
                                              onRestoreVersion: (e, t) => I(e, t, !0),
                                          }),
                                          void (0, tt.openModalLazy)(async () => {
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
                                      B.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== B.profileState
                                          ? ee
                                          : null,
                                  previewProjectId: c.id,
                              }),
                              ev
                                  ? null
                                  : (0, a.jsx)(y.A.Icon, { icon: hZ, tooltip: ej, "aria-label": ej, onClick: ey }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: h()(hW.nj, nN.T),
        children: [
            eG.importInput,
            (0, a.jsx)("main", {
                className: hW.JX,
                children:
                    null == c
                        ? (0, a.jsxs)("div", {
                              className: hW.j5,
                              children: [
                                  e1,
                                  (0, a.jsxs)("div", {
                                      className: hW.sD,
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
                                              onClick: () => (0, R.hF)(f),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(e5.bI.Provider, {
                              value: eV,
                              children: (0, a.jsx)(
                                  hV,
                                  {
                                      projectId: c.id,
                                      designFeedbackToggleRef: eN,
                                      applicationId: c.preview_application_id,
                                      previewApplicationId: c.preview_application_id,
                                      surface: eh,
                                      frameLaunchParams: Q,
                                      header: e1,
                                      chatOpen: p,
                                      onCloseChat: ek,
                                      chatHeaderAction: eQ,
                                      debugOpen: k && j,
                                      onCloseDebug: eD,
                                      onRestoreVersion: I,
                                      onImportProject: (0, eO.PV)(c) ? eG.onImport : void 0,
                                      restoreState: A,
                                      previewReady: D,
                                      previewGate: eH,
                                      availability: B,
                                      activeMode: H,
                                      widgetApplicationId: ee,
                                      overlayWidgetSize: et,
                                      previewPaused: el,
                                      onResumePreview: eF,
                                  },
                                  c.id,
                              ),
                          }),
            }),
        ],
    });
}
function hJ() {
    return (0, a.jsx)(tE.y, { type: tE.t.SPINNING_CIRCLE_SIMPLE, className: hW.Hv, itemClassName: hW.C5 });
}
function hZ(e) {
    return (0, a.jsx)(n_.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function hY(e) {
    return (0, a.jsx)(nP.u, { ...e, size: "custom", width: 20, height: 20 });
}
function hQ(e) {
    return (0, a.jsx)(nR.k, { ...e, size: "custom", width: 20, height: 20 });
}
function h0(e) {
    return (0, a.jsx)(nT.H, { ...e, size: "custom", width: 20, height: 20 });
}
function h1(e) {
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
            [eO.Ay],
            () => {
                if (null == s) return null;
                let e = eO.Ay.getProject(s);
                return null == e || (0, eO.PV)(e) || e.guild_id === t ? e : null;
            },
            [s, t],
        ),
        p = (0, o.bG)([eO.Ay], () => eO.Ay.hasFetchedGuildProjects(t), [t]);
    return null != s
        ? (0, a.jsx)(hX, { project: h, projectsLoaded: p, onBack: f, guildId: t }, s)
        : (0, a.jsx)(nS, { guildId: t });
}
