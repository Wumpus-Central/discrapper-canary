(n.r(t), n.d(t, { default: () => hV }));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    o = n(17928),
    u = n(858899),
    c = n(458518),
    d = n(976860),
    m = n(696451),
    f = n(71393),
    h = n(576705),
    p = n(666476),
    g = n(989145),
    x = n(319481);
(n(323874), n(14289), n(35956));
var j = n(77729),
    v = n(723702),
    b = n(264572).Buffer;
async function y(e, t) {
    if (v.isPlatformEmbedded) {
        let n = b.from(await e.arrayBuffer());
        if ("function" == typeof j.A.fileManager.saveWithDialog2) await j.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await j.A.fileManager.saveWithDialog(n, t);
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
var k = n(688954);
class w extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function C(e, t) {
    let n = await (0, k.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new w(n.status);
    return await n.blob();
}
var N = n(261425),
    A = n(105292);
async function S(e, t, n) {
    (0, x.ensureConnection)(e);
    let l = await (0, g.vX)(e, t);
    (0, x.sendUserMessage)(e, n, [l]);
}
function E(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, p.Oq)(e.size, t)
        ? null
        : A.intl.formatToPlainString(N.default.ThxcOX, { size: (0, p.sM)((0, p.Ju)(t)) });
}
async function I(e, t) {
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
        r = await C(e, l);
    await y(r, l);
}
function M(e) {
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
var _ = n(639519),
    P = n(361504);
let T = [
        { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
        { id: "claude-opus-5-5", label: "Claude Opus 5.5", provider: "anthropic" },
        { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5", provider: "anthropic" },
        { id: "claude-haiku-5-5", label: "Claude Haiku 5.5", provider: "anthropic" },
        { id: "gpt-6-astra", label: "GPT-6 Astra", provider: "openai", supports_fast: !0 },
        { id: "gpt-6.1-sol", label: "GPT-6.1 Sol", provider: "openai", supports_fast: !0 },
        { id: "gpt-6-luna", label: "GPT-6 Luna", provider: "openai", supports_fast: !0 },
        { id: "xai/grok-4.7", label: "Grok 4.7", provider: "xai" },
    ],
    R = { main: T, subagent: T, thinking: ["low", "medium", "high", "xhigh", "max"] },
    L = [
        { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
    ],
    $ = { main: L, subagent: L, thinking: R.thinking },
    D = { tier: "balanced", provider: "openai" },
    z = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
function O(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var q = n(950305),
    F = n(548118);
let U = "user";
var G = n(371169),
    B = n(260498),
    K = n(941985),
    V = n(16619),
    H = n(845329);
n(321073);
var W = n(503698),
    X = n.n(W),
    J = n(97893),
    Y = n(364522),
    Q = n(834730),
    Z = n(103557),
    ee = n(691885),
    et = n(821609),
    en = n(789645),
    el = n(289873),
    er = n(152367),
    ea = n(661531),
    ei = n(742589),
    es = n(265872),
    eo = n(980707),
    eu = n(477782),
    ec = n(81369),
    ed = n(664121);
let em = [
    { value: "user", icon: q.UserIcon, nameMessage: N.default.s1TsXl },
    { value: "guild", icon: ed.R, nameMessage: N.default.LlLIJw },
];
function ef(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = M(i.useCallback((e) => n(e, "user"), [n])),
        s = M(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(es.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: es.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(eo.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": A.intl.string(N.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(eu.rX, {
                            label: A.intl.string(N.default.NyVn6T),
                            children: em
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: A.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        eu.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(et.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: ec.H,
                        text: A.intl.string(N.default.NJGZA3),
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
var eh = n(939249);
function ep(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: r, children: i } = e;
    return (0, a.jsx)(eh.D, {
        "aria-disabled": l,
        "aria-label": n,
        className: t,
        onClick: l ? void 0 : r,
        children: i,
    });
}
var eg = n(865665),
    ex = n(373913);
let ej = { x: 5, y: 7 },
    ev = { x: 5, y: 4 };
function eb(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [r, s] = i.useState(!1);
    return (0, a.jsxs)("div", {
        className: ex.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, a.jsx)("ol", { className: t, children: l }),
            r ? (0, a.jsx)(eg.C, { area: 64, radius: n, color: ea.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var ey = n(864970),
    ek = n(707554),
    ew = n(297264),
    eC = n(770178),
    eN = n(765548),
    eA = n(276602),
    eS = n(885576),
    eE = n(662429);
let eI = "heading-xxl/semibold",
    eM = !1;
function e_() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, eN.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        r = (0, eC.w)(l, [], { fireOnMount: !0 }),
        s = (0, o.bG)([eA.A], () => eA.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || eM) return;
        let n = !1,
            l = 0;
        function r() {
            n ||
                (l = window.setTimeout(() => {
                    ((eM = !0), e.current?.play());
                }, 400));
        }
        let a = document.fonts;
        return (
            null == a ? r() : a.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(r, r),
            () => {
                ((n = !0), window.clearTimeout(l));
            }
        );
    }, [s, t]);
    let u = (0, o.bG)([eS.A], () => eS.A.isIdle()),
        c = i.useRef(u);
    i.useEffect(() => {
        let t = c.current && !u;
        ((c.current = u), t && eM && (e.current?.stop(), e.current?.play()));
    }, [u]);
    let d = A.intl.string(N.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: eE.x,
        children: t
            ? (0, a.jsx)(ek.H, { children: (0, a.jsx)(ey.o, { ref: e, text: d, variant: eI, delay: null }) })
            : (0, a.jsx)(ew.D, { variant: eI, children: d }),
    });
}
var eP = n(900797),
    eT = n(320448),
    eR = n(866665),
    eL = n(783977),
    e$ = n(344587),
    eD = n(534554),
    ez = n(392208),
    eO = n(822313),
    eq = n(837984),
    eF = n(359589),
    eU = n(254575);
function eG(e) {
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
function eB(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = eG(d),
        h = ez.P.indexOf(t.tier),
        p = d ? eP.t : eT._,
        g = ez.P.map(eD.D0),
        x = (0, eD.Tc)(t.tier),
        { text: j, phase: v } = (0, e$.Q)(x);
    return (0, a.jsx)("div", {
        className: eU.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: X()(eU.t$, { [eU.Zr]: u && c, [eU.GF]: !u }),
            role: "dialog",
            "aria-label": A.intl.string(N.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: X()(eU.Nr, eU.uO, { [eU.Zr]: d && f.entered, [eU.GF]: !d }),
                          children: (0, a.jsx)(eF.b, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${eU.Nr} ${eU.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eU.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: eU.y6,
                                    "aria-expanded": d,
                                    "aria-label": A.intl.string(N.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: A.intl.string(N.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(p, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: eU.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(Q.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: X()(eU.Z, { [eU.xQ]: "exit" === v, [eU.lm]: "enter" === v }),
                                    children: j,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: eU.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: eU.Nb,
                                    children: [
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: A.intl.string(N.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: A.intl.string(N.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(eq.A, {
                                    activeIndex: h,
                                    stops: g,
                                    ariaLabel: A.intl.string(N.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = ez.P[e];
                                        null != n && n !== t.tier && s((0, eD.CM)((0, eD.j6)(t, n)));
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
function eK(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, eO.A)(t, s),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = eG(f);
    return (0, a.jsx)(es.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(eB, {
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
            return (0, a.jsx)(eR.m, {
                text: A.intl.string(N.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(eh.D, {
                    innerRef: c,
                    className: o ?? eU.hZ,
                    "aria-label": A.intl.string(N.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(eL.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var eV = n(434279),
    eH = n(140735),
    eW = n(442433),
    eX = n(314116),
    eJ = n(652215),
    eY = n(746080),
    eQ = n(855793),
    eZ = n(287809),
    e0 = n(427262),
    e1 = n(245179),
    e2 = n(503275);
function e3(e) {
    let t = e?.id,
        n = e?.owner_user_id,
        l = (0, o.yK)(
            [e1.A],
            () =>
                null == t
                    ? []
                    : [
                          ...new Set(
                              e1.A.getMessages(t)
                                  .flatMap((e) => (null != e.user_id && e.user_id !== n ? [e.user_id] : []))
                                  .reverse(),
                          ),
                      ],
            [t, n],
        );
    i.useEffect(() => {
        null != n && ((0, e2.Y_)(n), l.forEach(e2.Y_));
    }, [n, l]);
    let r = (0, o.bG)([eZ.default], () => (null == n ? null : eZ.default.getUser(n)), [n]),
        a = (0, o.yK)([eZ.default], () => l.map((e) => eZ.default.getUser(e)).filter((e) => null != e), [l]);
    return i.useMemo(() => ({ creator: r ?? null, collaborators: a }), [r, a]);
}
var e5 = n(782603),
    e4 = n(780338),
    e6 = n(782134),
    e7 = n(113494),
    e8 = n(663417),
    e9 = n(70688),
    te = n(173936),
    tt = n(473935),
    tn = n(625903),
    tl = n(408278),
    tr = n(365199),
    ta = n(7437),
    ti = n(147036),
    ts = n(957565),
    to = n(785389),
    tu = n(123917),
    tc = n(860402);
let td = new Set();
var tm = n(329356),
    tf = n(442331),
    th = n(616334),
    tp = n(189714),
    tg = n(733791),
    tx = n(189213),
    tj = n(331322),
    tv = n(192308),
    tb = n(664619),
    ty = n(706935);
function tk(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [c, d] = i.useState(!1),
        [m, f] = i.useState(null),
        h = "delete" === l,
        p = h ? (0, tg.fI)(n) : (0, tg.Kd)(n),
        g = h ? null : (0, tg.L4)(n),
        x = (0, tg.Mi)(n),
        j = h
            ? A.intl.formatToPlainString(N.default.CJBhb2, { name: n.projectName })
            : A.intl.formatToPlainString(N.default.x6FvsZ, { app: n.appName });
    async function v() {
        (d(!0), f(null));
        let e = h ? (0, G.xx)(t.id) : (0, tb.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (d(!1), l?.ok !== !0)
            ? f(A.intl.string(h ? N.default["0XDHob"] : N.default.PJ2Fkn))
            : (h || (0, u.P0)({ text: (0, tg.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(tx.a, {
        ...r,
        role: "alertdialog",
        title: h ? j : (0, tg.WX)((0, ty.tb)(N.default.x6FvsZ, n.appName)),
        subtitle: h ? (0, tg.J)(n) : A.intl.string(N.default["8OKM1N"]),
        "aria-label": j,
        notice: null == m ? void 0 : { message: m, type: "critical", role: "alert" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: A.intl.string(h ? N.default.aC42bN : N.default.BGF8VT),
                variant: "critical-primary",
                loading: c,
                disabled: c,
                onClick: () => {
                    v().catch(() => {});
                },
            },
        ],
        children: (0, a.jsxs)(tj.B, {
            gap: 12,
            children: [
                p.length > 0 || null != g
                    ? (0, a.jsx)(ty.Ay, {
                          items: p,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: s, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != x ? (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: x }) : null,
            ],
        }),
    });
}
function tw(e) {
    (0, tv.openModal)((t) => (0, a.jsx)(tk, { ...t, ...e }));
}
var tC = n(587895);
function tN(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, c] = i.useState(null),
        d = (0, o.bG)([tC.A], () => tC.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        m = A.intl.formatToPlainString(N.default.m8KWic, { app: d });
    async function f() {
        (r(!0), c(null));
        let e = await (0, tb.R_)(t.id);
        (r(!1), e)
            ? ((0, u.P0)({ text: A.intl.formatToPlainString(N.default.b8LN7N, { app: d }), variant: "success" }),
              n.onClose())
            : c(A.intl.string(N.default["rE/0SD"]));
    }
    return (0, a.jsx)(tx.a, {
        ...n,
        role: "alertdialog",
        title: m,
        subtitle: A.intl.string(N.default.wve4kB),
        "aria-label": m,
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: A.intl.string(N.default.GqcQyH),
                variant: "critical-primary",
                loading: l,
                disabled: l,
                onClick: () => {
                    f().catch(() => {});
                },
            },
        ],
    });
}
var tA = n(552821);
let tS = [];
function tE(e) {
    (0, u.P0)({ text: e, variant: "critical" });
}
function tI(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: s,
            canRemix: c,
            onExport: d,
            onImport: m,
            onRemix: f,
            onConnectTool: h,
            onHistory: p,
            onRefresh: g,
            isRefreshing: x = !1,
            onTogglePreviewPaused: j,
            previewPaused: v = !1,
            previewPauseDisabled: b = !1,
            onClose: y,
            refreshApplicationId: k,
            previewProjectId: w,
            onCloseMenu: C,
        } = e,
        S = (0, tp.iI)(t),
        E = i.useContext(tm.bI),
        { pending: I, refresh: M } = (0, ta.A)(k ?? null),
        { pending: _, connect: P } = (function (e, t) {
            let [n, l] = i.useState(td),
                r = i.useRef(td),
                a = i.useCallback((e) => {
                    ((r.current = (0, to.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, to.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, tc.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, tu.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, to.rq)(l.error)
                                          ? A.intl.string(N.default["jCQ/1B"])
                                          : A.intl.string(N.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(w ?? null, tE),
        T = (0, o.bG)([tf.A], () => (null == w ? tS : tf.A.getDeclaredConnections(w))),
        R = i.useMemo(() => (0, to.Xl)(T), [T]),
        L = (0, tg.Bs)(t),
        $ = (0, tg.CU)(t) && s,
        D = (0, o.bG)(
            [B.Ay],
            () => {
                let e = B.Ay.getProject(t);
                return null != e && (0, B.jf)(e);
            },
            [t],
        ),
        z = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: A.intl.string(N.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString(N.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString(N.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != k, refreshPending: I, offers: R, connectPending: _ }),
        O = i.useMemo(() => new Map(T.map((e) => [e.type, e])), [T]),
        q = null != f && c,
        F = s && null != m,
        U = q || null != d || F || null != h || null != p,
        K = ts.p5 && null != l,
        V = ts.p5,
        H = S ? e5.BellIcon : e4.BellSlashIcon,
        W = v ? e6.PlayIcon : e7.PauseIcon;
    return (0, a.jsxs)(eo.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": A.intl.string(A.t.ogxXGq),
        onClose: C,
        onSelect: C,
        children: [
            null != g || null != j || null != y
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          null != g
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "refresh",
                                    icon: e8.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: e8.RefreshIcon },
                                    label: A.intl.string(N.default["p4B/7M"]),
                                    disabled: x,
                                    action: g,
                                })
                              : null,
                          null != j
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: W,
                                    leadingAccessory: { type: "icon", icon: W },
                                    label: A.intl.string(v ? N.default.ZKd2Cw : N.default.VHxerm),
                                    disabled: b,
                                    action: j,
                                })
                              : null,
                          null != y
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "close",
                                    icon: e9.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: e9.DoorExitIcon },
                                    label: A.intl.string(N.default["/TlGcK"]),
                                    action: y,
                                })
                              : null,
                      ],
                  })
                : null,
            z.length > 0
                ? (0, a.jsx)(eu.rX, {
                      children: z.map((e) =>
                          (0, a.jsx)(
                              eu.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void M();
                                      let t = null == e.connectionType ? null : O.get(e.connectionType);
                                      null != t && P(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(eu.rX, {
                children: (0, a.jsx)(eu.Dr, {
                    id: "mute",
                    label: A.intl.string(S ? N.default.s9rCuH : N.default["a+i/As"]),
                    icon: H,
                    leadingAccessory: { type: "icon", icon: H },
                    action: () => (0, tp.$L)(t, !S),
                }),
            }),
            U
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          q
                              ? (0, a.jsx)(eu.Dr, { id: "remix", label: A.intl.string(N.default.XWgAfc), action: f })
                              : null,
                          null != d
                              ? (0, a.jsx)(eu.Dr, { id: "export", label: A.intl.string(N.default.WsEEP7), action: d })
                              : null,
                          F
                              ? (0, a.jsx)(eu.Dr, { id: "import", label: A.intl.string(N.default.rWGY3e), action: m })
                              : null,
                          null != h
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "connect-tool",
                                    label: A.intl.string(N.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != p
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "history",
                                    label: A.intl.string(N.default["3hIVou"]),
                                    action: p,
                                })
                              : null,
                      ],
                  })
                : null,
            V
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          K
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "copy-link",
                                    label: A.intl.string(A.t.WqhZss),
                                    icon: te.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: te.LinkIcon },
                                    action: () =>
                                        (0, ts.C)((0, ti.n)(l, eY.VV.CONJURE, t), () =>
                                            (0, u.P0)({ text: A.intl.string(A.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eu.Dr, {
                              id: "copy-project-id",
                              label: A.intl.string(N.default["nm/zuU"]),
                              icon: tt.L,
                              leadingAccessory: { type: "icon", icon: tt.L },
                              action: () =>
                                  (0, ts.C)(t, () =>
                                      (0, u.P0)({ text: A.intl.string(N.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || D || L?.canRemoveBot === !0
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          s || D
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "settings",
                                    label: A.intl.string(N.default.FzfmQ8),
                                    icon: tn.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: tn.SettingsIcon },
                                    action: () =>
                                        (0, th.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: E,
                                        }),
                                })
                              : null,
                          L?.canRemoveBot === !0
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "remove-from-server",
                                    label: A.intl.formatToPlainString(N.default["3gKG2j"], { server: L.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        null != e && tw({ project: e, target: L, action: "remove" });
                                    },
                                })
                              : null,
                          $
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "unpublish",
                                    label: A.intl.string(N.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = B.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, tv.openModal)((t) => (0, a.jsx)(tN, { ...t, ...e })));
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "delete",
                                    label: A.intl.string(A.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        if (null != e && null != L) tw({ project: e, target: L, action: "delete" });
                                        else
                                            (0, eX.A)({
                                                title: A.intl.formatToPlainString(N.default.CJBhb2, { name: n }),
                                                subtitle: A.intl.string(N.default["0OmrVn"]),
                                                confirmText: A.intl.string(A.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, G.K)(t, () =>
                                                        (0, u.P0)({
                                                            text: A.intl.string(N.default["0XDHob"]),
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
function tM(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tI, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: tA.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(eR.m, {
                              text: A.intl.string(A.t["UKOtz+"]),
                              children: (0, a.jsx)(tl.K, {
                                  icon: tr.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": A.intl.string(A.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(ei.A.Icon, {
                              icon: tr.MoreHorizontalIcon,
                              tooltip: A.intl.string(A.t["UKOtz+"]),
                              "aria-label": A.intl.string(A.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: r,
                          }),
            });
        },
    });
}
var t_ = n(497183),
    tP = n(104171),
    tT = n(286739);
function tR(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: X()(tT.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(tP.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: tP.DN.SIZE_16 }),
    });
}
var tL = n(217846),
    t$ = n(536637),
    tD = n.n(t$),
    tz = n(941650);
function tO(e) {
    let t,
        n,
        l,
        r,
        s,
        { project: c, guildId: m, onSelect: h, onRemix: p, shared: g = !1 } = e,
        x =
            ((t = c.id),
            (n = c.name),
            (l = i.useRef(!1)),
            (r = i.useCallback(() => {
                l.current ||
                    ((l.current = !0),
                    (0, u.P0)({ text: A.intl.formatToPlainString(N.default.aN2JdD, { name: n }) }),
                    I(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[conjure] project export failed", t, e),
                                (0, u.P0)({
                                    text:
                                        409 === (n = e instanceof w ? e.status : null)
                                            ? A.intl.string(N.default["9oqbEw"])
                                            : 404 === n
                                              ? A.intl.string(N.default["0W8uLq"])
                                              : A.intl.string(N.default.N8753A),
                                    variant: "critical",
                                }));
                        })
                        .finally(() => {
                            l.current = !1;
                        }));
            }, [t, n])),
            {
                onExport: r,
                onImport: (s = M(
                    i.useCallback(
                        (e) => {
                            let l = E(e);
                            null != l
                                ? (0, u.P0)({ text: l, variant: "critical" })
                                : (0, eX.A)({
                                      title: A.intl.formatToPlainString(N.default["Gm+u1+"], { name: n }),
                                      subtitle: A.intl.string(N.default.M7H3sJ),
                                      confirmText: A.intl.string(N.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, d.pX)(eJ.BVt.CHANNEL(m, eY.VV.CONJURE, t));
                                          try {
                                              await S(t, e, A.intl.string(N.default.Owerd3));
                                          } catch {
                                              (0, u.P0)({
                                                  text: A.intl.string(N.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [t, n, m],
                    ),
                )).open,
                importInput: s.input,
            }),
        j =
            null == c.updated_at
                ? null
                : A.intl.formatToPlainString(N.default.AXydi3, { time: tD()(c.updated_at).fromNow() }),
        v = (0, eV.wu)(c),
        b =
            (0, o.bG)([f.A], () => (null == v ? null : (f.A.getGuild(v)?.name ?? null)), [v]) ??
            A.intl.string(N.default["3QFps8"]),
        y = (0, o.bG)([B.Ay], () => B.Ay.isProjectDeleting(c.id), [c.id]),
        k = (function (e) {
            let { creator: t, collaborators: n } = e3(e);
            return i.useMemo(
                () =>
                    null == t
                        ? null
                        : {
                              creator: t,
                              collaborators: n,
                              label: (function (e, t) {
                                  let n;
                                  return 0 === t.length
                                      ? A.intl.formatToPlainString(N.default.t5RWBS, { creator: e })
                                      : A.intl.formatToPlainString(N.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? A.intl.formatToPlainString(A.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? A.intl.formatToPlainString(A.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? A.intl.formatToPlainString(A.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : A.intl.formatToPlainString(A.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, e0.mG)(t),
                                  n.map((e) => (0, e0.mG)(e)),
                              ),
                          },
                [t, n],
            );
        })(g ? c : null),
        C = i.useId(),
        _ = (0, a.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", className: tz.j1, children: c.name }),
        P = {
            projectId: c.id,
            projectName: c.name,
            guildId: m,
            projectGuildId: c.guild_id,
            isOwner: (0, B.PV)(c),
            canRemix: (0, B.H_)(c),
            onRemix: p,
            onExport: x.onExport,
            onImport: x.onImport,
        };
    return (0, a.jsxs)("div", {
        className: X()(tz.OY, { [tz.Wy]: y }),
        "aria-busy": y,
        children: [
            (0, a.jsx)(eQ.Ay, { projectId: c.id }),
            y ? null : (0, a.jsx)(tL.a, { projectId: c.id }),
            (0, a.jsxs)(eh.D, {
                className: tz.W6,
                onClick: y ? void 0 : h,
                onMouseDown: y
                    ? void 0
                    : (e) => {
                          0 === e.button && (0, G.tf)(c.id);
                      },
                onContextMenu: function (e) {
                    y || (0, eW.jA)(e, () => (0, a.jsx)(tI, { ...P, onCloseMenu: eW.Z_ }));
                },
                tabIndex: y ? -1 : void 0,
                "aria-describedby": null != k ? C : void 0,
                children: [
                    (0, a.jsx)(t_.A, { project: c, size: "card", className: tz.VJ }),
                    (0, a.jsxs)("div", {
                        className: tz.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: tz.Ub,
                                children: [
                                    null != k ? (0, a.jsx)(eR.m, { text: k.label, ariaHidden: !0, children: _ }) : _,
                                    null == k || y ? null : (0, a.jsx)(tR, { creator: k, className: tz.rb }),
                                    y ? null : (0, a.jsx)(tL.n, { projectId: c.id, className: tz.fs }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: tz.h3,
                                children: [
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tz.Wb,
                                        children: y ? A.intl.string(N.default.Yh5pAc) : b,
                                    }),
                                    null == j || y
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: tz.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(Q.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tz.zM,
                                                      children: j,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != k ? (0, a.jsx)(eH.A, { id: C, children: k.label }) : null,
            (0, a.jsx)("div", {
                className: tz.M2,
                children: y
                    ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: tz.Pl,
                          children: [(0, a.jsx)(tM, { ...P, trigger: "iconButton" }), x.importInput],
                      }),
            }),
        ],
    });
}
var tq = n(246338);
let tF = "user",
    tU = "no-server",
    tG = new Map();
function tB(e) {
    return tG.get(e) ?? null;
}
function tK(e) {
    switch (e) {
        case "all":
        case tF:
        case tU:
            return null;
        default:
            return e;
    }
}
function tV(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tF:
            return "user" === e.install_scope;
        case tU:
            return null == (0, eV.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tH = n(506774);
let tW = "ConjureProjectsPanelOpen";
function tX() {
    return tH.w.get(tW) ?? null;
}
function tJ(e) {
    return `ConjureProjectsPanel:${e}`;
}
var tY = n(95264),
    tQ = n(631417);
function tZ(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i } = e,
        s = A.intl.string(N.default.FzfmQ8);
    return (0, a.jsx)(ei.A, {
        hideSearch: !0,
        toolbar: n,
        className: tQ.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: tQ.QF,
            children: [
                (0, a.jsx)(er.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: ea.A.colors.TEXT_STRONG,
                    className: tQ.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(ei.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(ei.A.Caret, {}),
                          ],
                      })
                    : null,
                null != r && null != i
                    ? (0, a.jsx)(eR.m, {
                          asContainer: !0,
                          text: s,
                          position: "bottom",
                          children: (0, a.jsx)(eh.D, {
                              className: tQ.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, a.jsx)(t_.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(ei.A.Title, { className: tQ.Qw, wrapperClassName: tQ.DD, children: t }),
            ],
        }),
    });
}
var t0 = n(683071),
    t1 = n(47167),
    t2 = n(808728),
    t3 = n(994500);
let t5 = "conjuring-help";
var t4 = n(173114);
function t6() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, o.cf)([eZ.default, f.A, t2.Ay, t3.A], () => {
                let e = eZ.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of f.A.getGuildsArray()) {
                    if (!t.features.has(eJ.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = t2.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, t1.m1)(t, eZ.default, t3.A) === t5;
                    });
                    if (null != n) return { isStaff: e, guildId: t.id, channelId: n.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != n
                    ? { kind: "channel", guildId: t, channelId: n }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = i.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, d.pX)(eJ.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, tu.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: t4.l,
              children: (0, a.jsx)(t0.w, {
                  type: "info",
                  iconAlign: "center",
                  message: A.intl.format(N.default["6anmu1"], { channel: t5, onNavigate: t }),
                  role: "none",
              }),
          });
}
var t7 = n(606128),
    t8 = n(323140);
function t9(e) {
    let {
            projects: t,
            idea: l,
            guildId: r,
            submitting: s,
            createError: c,
            createDisabled: d,
            conjureTarget: m,
            onConjureTargetChange: h,
            eligibleGuilds: p,
            modelSettings: g,
            onModelSettingsChange: x,
            onSelectProject: j,
            onIdeaChange: v,
            onCreate: b,
            onCreateFromTemplate: y,
            onStartTemplate: k,
            onSubmitTemplate: w,
            onCancelTemplate: C,
            onSkipTemplate: S,
            onImportNewProject: E,
            importing: I,
        } = e,
        [M, _] = i.useState(() => ({ guildId: r, filter: tB(r) })),
        T = (M.guildId === r ? M.filter : tB(r)) ?? r,
        L = i.useCallback(
            (e) => {
                (tG.set(r, e), _({ guildId: r, filter: e }));
            },
            [r],
        ),
        O = (0, o.yK)(
            [f.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = f.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, r),
            [t, r],
        ),
        K = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: er.D, label: A.intl.string(N.default["Xi/oIC"]) },
                { id: "conjure-filter-user", value: tF, leading: q.UserIcon, label: A.intl.string(N.default.kCSgmG) },
                { id: "conjure-filter-no-server", value: tU, leading: ed.R, label: A.intl.string(N.default["3QFps8"]) },
                ...O.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(F.Ay, { guild: e, size: F.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [O],
        ),
        V = (0, o.yK)(
            [B.Ay, f.A],
            () => {
                let e = tK(T);
                if (null != e) return B.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(f.A.getGuilds()))
                    B.Ay.hasFetchedGuildProjects(e.id) && t.push(...B.Ay.getSharedProjects(e.id));
                return t;
            },
            [T],
        );
    i.useEffect(() => {
        let e = tK(T);
        null == e || B.Ay.hasFetchedGuildProjects(e) || (0, G.hF)(e);
    }, [T]);
    let H = i.useMemo(() => V.filter((e) => tV(e, T)).sort(eV.Ds), [V, T]),
        W = i.useMemo(
            () => [
                {
                    label: A.intl.string(N.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: U,
                            label: A.intl.string(N.default.UPLaGM),
                            leading: q.UserIcon,
                        },
                        ...p.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(F.Ay, { guild: e, size: F.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [p],
        ),
        es = i.useMemo(
            () =>
                t
                    .filter((e) => tV(e, T))
                    .slice()
                    .sort(eV.Ds),
            [t, T],
        ),
        eo = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, tq.Ot)(e, r)
                    ? j(e.id)
                    : (0, u.P0)({ text: A.intl.string(N.default["XUl/cs"]) });
            },
            [r, j],
        ),
        eu = A.intl.string(N.default.ab1sMf),
        ec = [A.intl.string(N.default["9w+Chc"]), A.intl.string(N.default.WAvmdq), A.intl.string(N.default.SKsrzl)],
        em = [
            {
                id: "moderation-bot",
                name: A.intl.string(N.default.lGLnE8),
                description: A.intl.string(N.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: A.intl.string(N.default.uJKQTs),
                description: A.intl.string(N.default["+dKy/B"]),
            },
            { id: "rust-sphere", name: A.intl.string(N.default.iF5Oru), description: A.intl.string(N.default.NbDDO6) },
        ],
        eh = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: r,
                        eligibleGuilds: p,
                        onStart: (t) => k(e, t),
                        onSubmit: (t, n, l) => w(e, t, n, l),
                        onCancel: C,
                        onSkip: S,
                    }),
                    (0, tv.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("881965"), n.e("817855")]).then(
                                n.bind(n, 461122),
                            );
                            return (n) => (0, a.jsx)(e, { ...n, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                y(e);
            },
            [p, r, C, y, S, k, w],
        ),
        eg = A.intl.string(N.default.zzYLlW),
        ex =
            (i.useEffect(() => {
                (0, G.b8)();
            }, []),
            (0, o.bG)([B.Ay], () => {
                let e = B.Ay.getMaxProjects();
                return null != e && B.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - B.Ay.getOwnedProjects().length)
                    : null;
            })),
        ey = A.intl.string(N.default["2XcV3x"]),
        ek = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || b());
            },
            [d, b],
        ),
        ew = tK(T) ?? r,
        eC = (0, o.bG)([B.Ay], () => B.Ay.getGuildProjectsFetchState(ew), [ew]),
        eN = (0, o.bG)([B.Ay], () => B.Ay.getGuildProjectsFetchState(r), [r]),
        [eA, eS] = i.useState(tX),
        eE = i.useMemo(() => tH.w.get(tJ(r)) ?? !1, [r]),
        eI = "success" === eN,
        eM = (0, o.yK)([B.Ay], () => B.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => tV(e, r)),
        eP = eA ?? (!!eM || "error" === eN || (!eI && eE));
    i.useEffect(() => {
        eI && tH.w.set(tJ(r), eM);
    }, [eI, eM, r]);
    let eT = i.useCallback((e) => {
            (tH.w.set(tW, e), eS(e));
        }, []),
        eR = i.useCallback(() => eT(!eP), [eT, eP]),
        eL = i.useCallback(() => eT(!1), [eT]),
        e$ = A.intl.string(N.default.kar7jh),
        eD = eP ? e$ : A.intl.string(N.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: X()(t8.nj, t8.a0, t7.T),
        children: (0, a.jsxs)("div", {
            className: t8.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: t8.ps,
                    children: [
                        (0, a.jsx)(tZ, {
                            title: A.intl.string(N.default.uk6jhJ),
                            actions: (0, a.jsx)(ei.A.Icon, {
                                icon: J.Z,
                                tooltip: eD,
                                "aria-label": eD,
                                selected: eP,
                                onClick: eR,
                            }),
                        }),
                        (0, a.jsx)(Y.Ip, {
                            className: t8.Yy,
                            children: (0, a.jsx)("div", {
                                className: t8.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: X()(t8.Qs, t8.Ix),
                                    children: [
                                        (0, a.jsx)(t6, {}),
                                        (0, a.jsx)(e_, {}),
                                        (0, a.jsxs)("section", {
                                            className: t8.WI,
                                            "aria-label": eg,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t8.G9,
                                                    children: [
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eg,
                                                        }),
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: A.intl.string(N.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eb, {
                                                    listClassName: t8.Aw,
                                                    radius: ej,
                                                    children: em.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t8.EA,
                                                                children: (0, a.jsxs)(ep, {
                                                                    disabled: s,
                                                                    ariaLabel: A.intl.formatToPlainString(
                                                                        N.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: X()(t8.nx, t8.rz),
                                                                    onClick: () => eh(e),
                                                                    children: [
                                                                        (0, a.jsx)(Q.E, {
                                                                            className: t8.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(Q.E, {
                                                                            className: t8.BK,
                                                                            variant: "text-sm/normal",
                                                                            color: "text-subtle",
                                                                            children: e.description,
                                                                        }),
                                                                    ],
                                                                }),
                                                            },
                                                            e.id,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsxs)("section", {
                                            className: t8.WI,
                                            "aria-label": ey,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t8.G9,
                                                    children: [
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ey,
                                                        }),
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: A.intl.string(N.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eb, {
                                                    listClassName: t8.Aw,
                                                    radius: ev,
                                                    children: ec.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t8.EA,
                                                                children: (0, a.jsx)(ep, {
                                                                    disabled: s,
                                                                    className: t8.nx,
                                                                    onClick: () => b(e),
                                                                    children: (0, a.jsx)(Q.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: t8.un,
                                                                        children: e,
                                                                    }),
                                                                }),
                                                            },
                                                            e,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: t8.Yl,
                            children: (0, a.jsxs)("div", {
                                className: X()(t8.Qs, t8.DA),
                                children: [
                                    (0, a.jsx)(Z.f, {
                                        label: eu,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: l,
                                        placeholder: eu,
                                        error: c,
                                        onChange: v,
                                        onKeyDown: ek,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: t8.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: t8.gH,
                                                children: (0, a.jsx)(ee.l, {
                                                    selectionMode: "single",
                                                    label: A.intl.string(N.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: A.intl.string(N.default.NyVn6T),
                                                    options: W,
                                                    value: m,
                                                    onSelectionChange: h,
                                                    disabled: s,
                                                }),
                                            }),
                                            null != ex
                                                ? (0, a.jsx)(Q.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === ex ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === ex
                                                              ? A.intl.string(N.default.s28pGG)
                                                              : A.intl.formatToPlainString(N.default.Wy5aK4, {
                                                                    count: ex,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(eK, {
                                                settings: g ?? D,
                                                tiers: z,
                                                choices: (0, P.b)()
                                                    ? {
                                                          main: [...R.main, ...$.main],
                                                          subagent: [...R.subagent, ...$.subagent],
                                                          thinking: R.thinking,
                                                      }
                                                    : R,
                                                disabled: s,
                                                onChange: x,
                                            }),
                                            (0, a.jsx)(et.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: A.intl.string(A.t.CumH4u),
                                                disabled: d,
                                                loading: s,
                                                onClick: () => b(),
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: A.intl.string(N.default.NvvCzX),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("aside", {
                    className: t8.pA,
                    hidden: !eP,
                    "aria-label": A.intl.string(N.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: t8.IR,
                            children: [
                                (0, a.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: t8.RM,
                                    children: A.intl.string(N.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: t8.Ss,
                                    children: [
                                        (0, a.jsx)(ef, { importing: I, onImport: E }),
                                        (0, a.jsx)(ei.A.Icon, {
                                            icon: en.P,
                                            tooltip: e$,
                                            "aria-label": e$,
                                            onClick: eL,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(Y.Ip, {
                            className: t8.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: t8.Vw,
                                    children: (0, a.jsx)(ee.l, {
                                        selectionMode: "single",
                                        label: A.intl.string(N.default.U6TqU9),
                                        hideLabel: !0,
                                        options: K,
                                        value: T,
                                        onSelectionChange: L,
                                    }),
                                }),
                                (0, a.jsx)(Q.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: t8.wE,
                                    children: A.intl.string(N.default.JQpNkh),
                                }),
                                ("unattempted" === eC || "loading" === eC) && 0 === es.length
                                    ? (0, a.jsx)("div", { className: t8.E8, children: (0, a.jsx)(el.y, {}) })
                                    : "error" === eC && 0 === es.length
                                      ? (0, a.jsxs)("div", {
                                            className: t8.E8,
                                            children: [
                                                (0, a.jsx)(Q.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: t8.JS,
                                                    children: A.intl.string(N.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(et.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: A.intl.string(N.default["WFJ/vb"]),
                                                    onClick: () => (0, G.hF)(ew),
                                                }),
                                            ],
                                        })
                                      : 0 === es.length
                                        ? (0, a.jsx)("div", {
                                              className: t8.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: t8.ST,
                                                  children: [
                                                      (0, a.jsx)(er.D, { size: "lg", color: ea.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: t8.sI,
                                                          children: A.intl.string(N.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: t8.Dq,
                                              children: es.map((e) =>
                                                  (0, a.jsx)(
                                                      tO,
                                                      {
                                                          project: e,
                                                          guildId: r,
                                                          onSelect: () => eo(e),
                                                          onRemix: () => (0, tY.A)(e, r),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                H.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: t8.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: t8.uc,
                                                  children: [
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: A.intl.string(N.default["wFi8+o"]),
                                                      }),
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: A.intl.string(N.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: t8.Dq,
                                                  children: H.map((e) =>
                                                      (0, a.jsx)(
                                                          tO,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => eo(e),
                                                              onRemix: () => (0, tY.A)(e, r),
                                                              shared: !0,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ne = n(478016),
    nt = n(604525),
    nn = n(92446),
    nl = n(534890),
    nr = n(646270),
    na = n(31300),
    ni = n(831453),
    ns = n(270593),
    no = n(839214);
let nu = Object.freeze({ x: 0.5, y: 0.5 });
function nc(e) {
    return "" !== e.trim();
}
function nd(e) {
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
function nm(e) {
    let { kind: t, name: n } = nd(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function nf(e) {
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
let nh = "[conjure:selected] ",
    np = " \u2014 ";
function ng(e) {
    if (!e.startsWith(nh)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(nh.length),
        a = r.indexOf(np),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let nx = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    nj = new Map(),
    nv = new Set();
function nb(e) {
    return nj.get(e) ?? nx;
}
function ny(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? nj.set(e, t) : nj.delete(e), [...nv]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function nk(e) {
    let t = nb(e);
    t.active || ny(e, { ...t, active: !0 });
}
function nw(e) {
    let t = nb(e);
    t.active && ny(e, { ...t, active: !1 });
}
function nC(e) {
    nj.has(e) && ny(e, nx);
}
function nN(e, t) {
    let n = nb(e);
    n.active && ny(e, { ...n, context: t });
}
function nA(e, t) {
    return null != t && e.authorId === t;
}
function nS(e) {
    return (
        nv.add(e),
        () => {
            nv.delete(e);
        }
    );
}
function nE(e) {
    let t = i.useCallback(() => (null == e ? nx : nb(e)), [e]);
    return i.useSyncExternalStore(nS, t, t);
}
(n(134528), n(947204));
let nI = { past: [], present: [], future: [] };
function nM(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function n_(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function nP(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => n_(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: n_(e.from, t, n), to: n_(e.to, t, n) };
        case "text":
            return { ...e, at: n_(e.at, t, n) };
    }
}
function nT(e) {
    return e.some((e) => "erase" !== e.kind);
}
function nR(e, t) {
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
function nL(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function n$(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function nD(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => n$(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = n$(e.from, t),
                l = n$(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = n$(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function nz(e) {
    return nT(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let nO = [3, 6, 12],
    nq = [10, 20, 40],
    nF = (0, no.D)(() => ({ byProject: {} })),
    nU = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: nI,
        sketchDismissedFor: null,
    };
function nG(e) {
    return nF.getState().byProject[e] ?? null;
}
function nB(e, t) {
    let n = nG(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = nF.getState();
    nF.setState({ byProject: { ...r, [e]: l } });
}
function nK(e) {
    if (null == nG(e)) return;
    let { [e]: t, ...n } = nF.getState().byProject;
    (nF.setState({ byProject: n }), nC(e));
}
function nV(e, t) {
    null != nG(e) &&
        (nB(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? nk(e) : nw(e));
}
function nH(e, t) {
    nB(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return nM(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return nM(
                        e,
                        e.present.map((e) => (e.id === t.id ? nP(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : nM(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : nM(e, []);
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
function nW(e) {
    return nF.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var nX = n(39416);
function nJ(e) {
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
            className: nX.i5,
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
let nY = new Set(),
    nQ = null;
function nZ(e, t) {
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
                nY.add(t),
                () => {
                    nY.delete(t);
                }
            );
        }, [e]));
}
var n0 = n(885386);
function n1() {
    return n0.Q_.useSetting() || !1;
}
var n2 = n(573083),
    n3 = n(128761),
    n5 = n(12177),
    n4 = n(744627),
    n6 = n(513845),
    n7 = n(802905),
    n8 = n(951178);
let n9 = { width: 320, height: 240 };
var le = n(855859),
    lt = n(238490),
    ln = n(991690),
    ll = n(696645);
function lr(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function la(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, ll.X)(e.surface)
                : A.intl.formatToPlainString(N.default["6xVl+N"], {
                      surface: (0, ll.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return A.intl.string(N.default.y5GiL1);
        case "overlay":
            return A.intl.string(N.default["2940LX"]);
        case "bot":
            return A.intl.string(N.default.tjpaGN);
    }
}
var li = n(939398),
    ls = n(86147),
    lo = n(729475),
    lu = n(91242),
    lc = n(156548),
    ld = n(869146),
    lm = n(475815),
    lf = n(165610);
function lh(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, lc.cR)(t?.id ?? null),
        r = (0, n2.Zv)(n),
        i = (0, o.bG)(
            [ld.A, lu.A],
            () => null != t && ld.A.getWindowOpen(eJ.MLl.ACTIVITY_POPOUT) && lu.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, lf.x1)(t) || i || r) return null;
    let s = (0, lc.fl)(t.id);
    if (null == s || !(0, lm.Ub)(s)) return null;
    let u = A.intl.string(l ? A.t.Z7MyNB : A.t.OIDkcp);
    return (0, a.jsx)(ei.A.Icon, {
        tooltip: u,
        icon: l ? ls.z : lo.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, lc.U8)(t.id),
    });
}
var lp = n(559106),
    lg = n(847374),
    lx = n(704745);
function lj(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = A.intl.string(N.default.I2ucou);
    return (0, a.jsx)(es.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(eo.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(eu.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = lr(e);
                        return (0, a.jsx)(
                            eu.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: la(e),
                                checked: t === lr(n),
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
            return (0, a.jsx)(lp.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: lx.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.string(N.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: la(n),
                        }),
                        (0, a.jsx)(lg.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var lv = n(324641),
    lb = n(627363),
    ly = n(153207),
    lk = n(803101),
    lw = n(226178),
    lC = n(625180),
    lN = n(672929),
    lA = n(111534),
    lS = n(754027),
    lE = n(457827),
    lI = n(722701),
    lM = n(949616),
    l_ = n(962998),
    lP = n(535466),
    lT = n(321032),
    lR = n(277085);
let lL = [];
var l$ = n(17813);
function lD(e) {
    let { permissions: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsxs)(tj.B, {
              gap: 8,
              children: [
                  (0, a.jsx)(Q.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: A.intl.string(N.default["6U+4pJ"]),
                  }),
                  (0, a.jsx)(l$.A, { permissions: t }),
                  (0, a.jsx)(Q.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: A.intl.string(N.default.X8wPIB),
                  }),
              ],
          });
}
function lz(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: u } = e,
        { iconURL: c } = (0, lP.Ay)(t),
        [d, m] = i.useState(n),
        [f, h] = i.useState(l),
        [p, g] = i.useState(null),
        [x, j] = i.useState(null),
        [v, b] = i.useState(!1),
        y = d.trim(),
        k = y === n ? null : (0, lR.p)(y),
        w = p ?? c,
        C = (0, o.bG)([lI.A], () => lI.A.getPublishStatus(t)?.previewDevicePermissions ?? lL);
    function S() {
        (r(), u());
    }
    async function E(e) {
        if ((e.preventDefault(), v || null != k)) return;
        (b(!0), j(null));
        let r = await (0, tm.$l)(t, { name: y, icon: p, description: f }, { name: n, description: l });
        (b(!1), r) ? S() : j(A.intl.string(N.default.Fi7boI));
    }
    return (0, a.jsx)("form", {
        onSubmit: E,
        children: (0, a.jsx)(tx.a, {
            transitionState: s,
            onClose: u,
            title: A.intl.string(N.default.OmOWDq),
            subtitle: A.intl.string(N.default.Gzmlyg),
            size: "sm",
            actions: [
                { text: A.intl.string(N.default["bz/M68"]), variant: "secondary", onClick: S, disabled: v },
                {
                    text: A.intl.string(N.default.dyIV6M),
                    variant: "primary",
                    type: "submit",
                    loading: v,
                    disabled: null != k,
                },
            ],
            children: (0, a.jsxs)(tj.B, {
                gap: 24,
                children: [
                    (0, a.jsx)(lT.r, {
                        iconURL: w,
                        onIconChange: (e) => {
                            (g(e), j(null));
                        },
                        name: d,
                        nameError: k,
                        onNameChange: m,
                        description: f,
                        onDescriptionChange: h,
                        disabled: v,
                    }),
                    (0, a.jsx)(lD, { permissions: C }),
                    null != x
                        ? (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: x })
                        : null,
                ],
            }),
        }),
    });
}
var lO = n(516288);
function lq(e) {
    let { reason: t, message: n, onConfirm: l, transitionState: r, onClose: i } = e,
        s = (0, lO.t)(t, n);
    return (0, a.jsx)(tx.a, {
        transitionState: r,
        onClose: i,
        title: s.title,
        subtitle: s.body,
        size: "sm",
        actions:
            null == s.cancel
                ? [{ text: s.action, variant: "primary", onClick: i }]
                : [
                      { text: s.cancel, variant: "secondary", onClick: i },
                      {
                          text: s.action,
                          variant: "primary",
                          onClick: () => {
                              (i(), l?.());
                          },
                      },
                  ],
    });
}
let lF = {
    showPublishBlocked: function (e, t, n) {
        (0, tv.openModal)((l) => (0, a.jsx)(lq, { ...l, reason: e, message: t, onConfirm: n }));
    },
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, tv.openModal)(
                (t) =>
                    (0, a.jsx)(lz, {
                        ...t,
                        ...e,
                        onDone: () => {
                            n = !0;
                        },
                    }),
                { onCloseCallback: () => t(n) },
            );
        }),
    showError: (e) => (0, u.P0)({ text: e, variant: "critical" }),
};
var lU = n(58736),
    lG = n(333007),
    lB = n(621466),
    lK = n(775121),
    lV = n(826745),
    lH = n(285796),
    lW = n(73153);
let lX = [],
    lJ = 1,
    lY = (0, no.D)(() => ({ draftsByProject: {} }));
function lQ(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? lX;
}
function lZ(e, t) {
    return lQ(lY.getState(), e, t);
}
function l0(e, t, n) {
    let { draftsByProject: l } = lY.getState();
    lY.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function l1(e, t, n, l) {
    let r = lZ(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (l0(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function l2(e, t) {
    (0, g.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function l3(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && l2(e, t.ref.id));
}
function l5(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = lY.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? lX) n ? l3(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    lY.setState({ draftsByProject: i });
}
function l4(e) {
    return A.intl.formatToPlainString(N.default.JZ59Bo, { size: (0, p.sM)((0, p.Ju)(e)) });
}
function l6(e, t) {
    let n = lZ(e, t);
    if (0 !== n.length) {
        for (let t of n) l3(e, t);
        l0(e, t, lX);
    }
}
function l7(e, t) {
    let n = lZ(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (l0(e, t, lX), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function l8(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = lZ(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? l7(e, "chat") : [];
    (0, x.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(lW.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(lY.getState().draftsByProject)) l5(e, { deleteFromWorker: !0 });
}),
    lW.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        l5(t, { deleteFromWorker: !1 });
    }));
var l9 = n(922329);
async function re(e) {
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
var rt = n(153171);
function rn(e, t, n, l) {
    let r = lZ(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lJ++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (l0(e, t, [
            ...lZ(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void l1(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    l1(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  l1(e, t, n.localId, { status: "error", errorText: A.intl.string(N.default.E7dS5n) }),
                              p.o2 - 3e5,
                          )
                        : l2(e, a.id);
                },
                (l) => {
                    (console.error("[conjure] attachment upload failed", l),
                        l1(e, t, n.localId, { status: "error", errorText: A.intl.string(N.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= 10)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: A.intl.formatToPlainString(N.default.Q0aCVZ, { count: 10 }),
                    },
                };
            if (!(0, p.Oq)(e.size, t))
                return "image/png" === t && e.size <= p.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await re(e).catch(() => null);
                              return null != n && (0, p.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: l4(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: l4(t) } };
            let a = p.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function rl(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = lY.useState((e) => lQ(e, t, n)),
        a = i.useCallback((e) => rn(t, n, e, l), [t, n, l]),
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
                null != (r = (l = lZ(t, n)).find((t) => t.localId === e)) &&
                    (l3(t, r),
                    l0(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => l7(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function rr(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(l9.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: rt.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: rt.o1,
                onClick: () => n(t.localId),
                "aria-label": A.intl.string(N.default.Slam9g),
                children: (0, a.jsx)(lH.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var ra = n(470779);
function ri(e) {
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
            anchor: h = "chip",
            allowAttachments: p = !0,
            placeholder: g,
            label: x,
        } = e,
        {
            drafts: j,
            addFiles: v,
            pasteFiles: b,
            removeDraft: y,
            settled: k,
            takeRefs: w,
        } = rl({ projectId: t, surface: "design", onUploadFile: f }),
        C = i.useRef(null),
        S = (d || j.length > 0) && k && !m,
        E = i.useCallback(() => {
            if (!S) return;
            let e = w();
            u(e.length > 0 ? e : void 0);
        }, [S, w, u]),
        [I, M] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => M(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let _ = i.useRef(null),
        [P, T] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => T({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let R = P?.height ?? 44,
        L = l.left + 8,
        $ = l.top + 8,
        D = Math.max(n.x, L),
        z = Math.min(Math.max("point" === h ? n.y : n.y + 32 + 4, $), Math.max($, l.top + l.height - R - 8));
    return (0, a.jsxs)("div", {
        ref: _,
        className: X()(ra.M0, { [ra.ho]: I && !m, [ra.ET]: m }),
        style: { left: D, top: z },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: C,
                              type: "file",
                              multiple: !0,
                              className: ra.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (v(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(eR.m, {
                              position: "bottom",
                              text: A.intl.string(N.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: ra.tY,
                                  onClick: () => C.current?.click(),
                                  "aria-label": A.intl.string(N.default.lgvqSB),
                                  children: (0, a.jsx)(ec.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: ra.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(lV.y, {
                autoFocus: !0,
                rows: 1,
                className: ra.hF,
                value: s,
                placeholder: g ?? ("" === r ? A.intl.string(N.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": x ?? A.intl.string(N.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: m || !p ? void 0 : b,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), E());
                },
            }),
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: ra.ZO,
                      children: j.map((e) => (0, a.jsx)(rr, { draft: e, onRemove: y }, e.localId)),
                  })
                : null,
        ],
    });
}
function rs(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function ro(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function ru(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? rs(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = rs(e());
                l((e) => (ro(e, t) ? e : t));
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
var rc = n(876798),
    rd = n(48507),
    rm = n(193885),
    rf = n(744898),
    rh = n(803656),
    rp = n(241326),
    rg = n(972213);
function rx(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rj(e, t, n) {
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
let rv = rj("red", rx(ea.A.unsafe_rawColors.RED_400), () => A.intl.string(N.default.tvXfjt)),
    rb = [
        rv,
        rj("yellow", rx(ea.A.unsafe_rawColors.YELLOW_300), () => A.intl.string(N.default.FYuaJ1)),
        rj("green", rx(ea.A.unsafe_rawColors.GREEN_360), () => A.intl.string(N.default["Vv+paS"])),
        rj("blue", rx(ea.A.unsafe_rawColors.BLUE_345), () => A.intl.string(N.default.k9b1QJ)),
        rj("white", rx(ea.A.unsafe_rawColors.WHITE), () => A.intl.string(N.default["1sOXwH"])),
    ];
function ry(e) {
    return rb.find((t) => t.id === e) ?? rv;
}
function rk(e) {
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
function rw(e) {
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
function rC(e) {
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
function rN(e) {
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
let rA = nO.map((e) => rN(Math.min(16, e + 3))),
    rS = nq.map((e) => rN(Math.min(16, e / 2.5))),
    rE = [N.default.jZtZUr, N.default.cTQdD0, N.default.J3ucEg],
    rI = {
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
            label: () => A.intl.string(N.default.oIZQbm),
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
            label: () => A.intl.string(N.default.ARNVr7),
        },
    };
function rM(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(eR.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: nX.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(rc.k, {
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
function r_(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(eR.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tl.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function rP(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: nX.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: nX.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function rT(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = ry(n.colorId),
        h = rI[u],
        p = A.intl.string(N.default.hUm825),
        g = A.intl.string(N.default.n5IA3a),
        x = A.intl.string(N.default.r5dX6t),
        j = A.intl.string(N.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: nX.t$,
        children: [
            (0, a.jsx)("div", {
                className: nX.NT,
                children: (0, a.jsx)(rM, {
                    icon: rw,
                    label: A.intl.string(N.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => nV(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: nX.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": A.intl.string(N.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(rM, {
                        icon: rk,
                        label: A.intl.string(N.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => nV(t, "move"),
                    }),
                    (0, a.jsx)(rM, {
                        icon: rd.x,
                        label: A.intl.string(N.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => nV(t, "text"),
                    }),
                    (0, a.jsx)(rP, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rM, {
                                icon: rm.V,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (nV(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rA.map((n, l) =>
                                (0, a.jsx)(
                                    rM,
                                    {
                                        icon: n,
                                        label: A.intl.string(rE[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (nB(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), nw(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rP, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(rM, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (nV(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(rI).map((n) =>
                                (0, a.jsx)(
                                    rM,
                                    {
                                        icon: rI[n].icon,
                                        label: rI[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (nV(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rP, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rM, {
                                icon: rC,
                                label: g,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (nV(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            rS.map((n, l) =>
                                (0, a.jsx)(
                                    rM,
                                    {
                                        icon: n,
                                        label: A.intl.string(rE[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (nB(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), nw(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rP, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(r_, { icon: f.icon, label: j, onClick: e }),
                        children: (e) =>
                            rb.map((n) =>
                                (0, a.jsx)(
                                    rM,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                nB(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: nX.Gz, role: "separator" }),
                    (0, a.jsx)(r_, {
                        icon: rf.e,
                        label: A.intl.string((0, v.isMac)() ? N.default["j/XmBQ"] : N.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(r_, {
                        icon: rh.U,
                        label: A.intl.string((0, v.isMac)() ? N.default.C7jhpn : N.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(r_, {
                        icon: rp.TrashIcon,
                        label: A.intl.string(N.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: nX.Gz, role: "separator" }),
                    (0, a.jsx)(r_, { icon: rg.XLargeIcon, label: A.intl.string(N.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let rR = ea.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function rL(e, t, n) {
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
                    (e.strokeStyle = rR),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function r$(e) {
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
async function rD(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = r$(e),
            r = r$(e);
        if (null == l || null == r) return null;
        return (rL(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let rz = new Map(),
    rO = new Map(),
    rq = (0, no.D)(() => ({ byMessageKey: {} }));
function rF(e, t) {
    let { [e]: n, ...l } = rq.getState().byMessageKey;
    rq.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function rU(e, t) {
    null == t ? rz.delete(e) : rz.set(e, t);
}
function rG(e) {
    return rz.get(e)?.() ?? Promise.resolve(null);
}
let rB = { dx: 0, dy: 0 },
    rK = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    rV = 1;
function rH(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = nW(s),
        { active: u } = nE(s),
        c = (0, tv.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => nK(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && nk(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(rW, { projectId: s, state: o, resolveIframe: r });
}
function rW(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = ru(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [p, x] = i.useState(rB),
        j = i.useRef(null),
        v = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        C = i.useRef(null),
        S = i.useRef(0),
        { tool: E, history: I } = n,
        M = ry(n.colorId),
        _ = "pick" !== E,
        P = "marker" === n.tool ? nO[n.markerSize] : "eraser" === n.tool ? nq[n.eraserSize] : null,
        T = "move" === E ? (I.present.find((e) => e.id === f) ?? null) : null,
        R = null != r;
    (i.useLayoutEffect(() => {
        m(v.current?.offsetWidth ?? 0);
    }, [R]),
        i.useLayoutEffect(() => {
            k.current = s;
        }, [s]));
    let L = i.useCallback(async () => {
        let e = l();
        if (null == e) return null;
        let t = await (0, lv.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, lG.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, lv.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (rU(t, L), () => rU(t, null)), [t, L]);
    let $ = i.useCallback(
        (e) => {
            ((C.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === S.current &&
                    (S.current = requestAnimationFrame(() => {
                        S.current = 0;
                        let e = w.current,
                            t = C.current;
                        null != e &&
                            (e.toggleAttribute("data-visible", null != t),
                            null != t && (e.style.transform = `translate(${t.x}px, ${t.y}px)`));
                    })));
        },
        [r],
    );
    i.useEffect(() => () => cancelAnimationFrame(S.current), []);
    let D = i.useCallback(() => {
        let e = j.current;
        if (null == e || null == r) return;
        let t = window.devicePixelRatio,
            n = Math.round(r.width * t),
            l = Math.round(r.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let a = e.getContext("2d");
        if (null == a) return;
        (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, l), a.setTransform(t, 0, 0, t, 0, 0));
        let i = y.current,
            s = null == i ? I.present : I.present.map((e) => (e.id === i.id ? nP(e, p.dx, p.dy) : e)),
            o = b.current;
        rL(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, I.present, p]);
    i.useLayoutEffect(D, [D]);
    let z = i.useCallback(
            (e) =>
                null == r ? { x: 0, y: 0 } : { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height },
            [r],
        ),
        O = i.useCallback(() => {
            let e = k.current;
            if (null == e || null == r) return;
            k.current = null;
            let n = {
                id: `mark-${rV++}`,
                kind: "text",
                color: M.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (nR(n, r) && nH(t, { type: "commit", shape: n }), o(null));
        }, [t, M, r]),
        q = i.useCallback(() => {
            ((k.current = null), o(null));
        }, []),
        F = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != k.current) return void O();
                let t = z(e);
                switch (E) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == T ? null : nD(T, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? T
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = n$(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => n$(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (nL(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = n$(e.from, n),
                                                                  r = n$(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => nL(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = n$(e.from, n),
                                                                  r = n$(e.to, n),
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
                                                              let t = nD(e, n);
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
                                      })(I.present, t, r);
                        if ((h(a?.id ?? null), null == a)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (y.current = { id: a.id, origin: t }));
                        return;
                    }
                    case "text":
                        o({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!nT(I.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (b.current = {
                                id: `mark-${rV++}`,
                                kind: "erase",
                                width: nq[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (b.current = {
                                id: `mark-${rV++}`,
                                kind: "marker",
                                color: M.value,
                                width: nO[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (b.current = {
                                id: `mark-${rV++}`,
                                kind: E,
                                color: M.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                D();
            },
            [r, E, M, T, I.present, n.markerSize, n.eraserSize, z, O, D],
        ),
        U = i.useCallback(
            (e) => {
                $(e);
                let t = z(e),
                    n = y.current;
                if (null != n) return void x({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = b.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (b.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (b.current = { ...l, to: t }),
                    D());
            },
            [z, $, D],
        ),
        G = i.useCallback(() => {
            j.current?.removeAttribute("data-dragging");
            let e = y.current;
            if (null != e) {
                ((y.current = null), x(rB), nH(t, { type: "move", id: e.id, dx: p.dx, dy: p.dy }));
                return;
            }
            let n = b.current;
            ((b.current = null), null != n && null != r && nR(n, r) ? nH(t, { type: "commit", shape: n }) : D());
        }, [t, r, p, D]),
        B = i.useCallback(() => nK(t), [t]),
        K = i.useCallback(() => nH(t, { type: "undo" }), [t]),
        V = i.useCallback(() => nH(t, { type: "redo" }), [t]),
        H = i.useCallback(() => nH(t, { type: "clear" }), [t]),
        W = i.useRef({ tool: E, selected: T, exit: B, undo: K, redo: V });
    if (
        (i.useLayoutEffect(() => {
            W.current = { tool: E, selected: T, exit: B, undo: K, redo: V };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, lB.Cw)((0, lB.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != k.current
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
                    (e.preventDefault(), nH(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = rK[s];
                null != o && (e.preventDefault(), nV(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (_) return (lK.A.disable(), () => lK.A.enable());
        }, [_]),
        null == r)
    )
        return null;
    let X = Math.max(8, r.left - d - 8),
        J = null == T ? null : nD(null == y.current ? T : nP(T, p.dx, p.dy), r);
    return (0, lG.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: nX.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: nX.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: j,
                            className: nX.Ji,
                            "data-tool": E,
                            "data-interactive": _ && !u ? "" : void 0,
                            "aria-label": A.intl.string(N.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: F,
                            onPointerEnter: $,
                            onPointerLeave: () => $(null),
                            onPointerMove: U,
                            onPointerUp: G,
                            onPointerCancel: G,
                        }),
                        null == P || u
                            ? null
                            : (0, a.jsx)("div", {
                                  ref: w,
                                  className: nX.V$,
                                  "data-tool": E,
                                  "data-color": M.id,
                                  style: { width: P, height: P },
                                  "aria-hidden": !0,
                              }),
                        null == J
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: nX.r1,
                                  style: { left: J.x, top: J.y, width: J.width, height: J.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: nX.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: nX.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: nX.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: nX.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(ri, {
                          projectId: t,
                          anchor: "point",
                          at: { x: r.left + s.at.x * r.width, y: r.top + s.at.y * r.height },
                          bounds: r,
                          kind: "",
                          placeholder: A.intl.string(N.default["8gX1lw"]),
                          label: A.intl.string(N.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: s.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: O,
                          onUploadFile: (e) => (0, g.vX)(t, e),
                          onDismiss: q,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: nX.ej,
                    style: { left: X, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(rT, { projectId: t, state: n, onExit: B, onUndo: K, onRedo: V, onClear: H }),
                }),
            ],
        }),
        document.body,
    );
}
var rX = n(308081),
    rJ = n(689175),
    rY = n(65593),
    rQ = n(218394),
    rZ = n(115982),
    r0 = n(886540);
function r1(e) {
    return !(0, r0.BL)(e) && !0 !== e.stopRequested;
}
var r2 = n(104317),
    r3 = n(643278),
    r5 = n(566424),
    r4 = n(683063),
    r6 = n(138212);
function r7(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: X()(r6.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: X()(r6.wx, null != n && r6.o5, i),
                children: [
                    (0, a.jsx)(Q.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var r8 = n(148590);
function r9(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function ae(e) {
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
        [f, h] = i.useState(!l),
        [p, g] = i.useState(l);
    p !== l && (g(l), h(!l));
    let x = i.useCallback(() => h((e) => !e), []),
        j = f ? lg.a : eT._,
        v = null != n || l;
    return (0, a.jsxs)(r7, {
        ...d,
        title: t,
        trailing: v
            ? (0, a.jsxs)("span", {
                  className: r8.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(eh.D, {
                                className: r8.L$,
                                onClick: x,
                                "aria-expanded": f,
                                "aria-controls": m,
                                "aria-label": f ? s : r,
                                children: (0, a.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: f ? void 0 : r8.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: X()(r8.rf, o), hidden: !f, children: c })],
    });
}
var at = n(883646);
let an = [];
function al(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: X()(at.xL, {
            [at.Vb]: "in_progress" === t,
            [at.cT]: "completed" === t,
            [at.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return A.intl.string(N.default.KvBdun);
                case "in_progress":
                    return A.intl.string(N.default["m5G9+S"]);
                case "unfinished":
                    return A.intl.string(N.default.lRpwhD);
                default:
                    return A.intl.string(N.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(el.y, {
                type: el.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: at.Qd,
                itemClassName: at.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: at.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: at.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function ar(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : an), [n, t]),
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
        className: at.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    r4.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: at.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: at.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function aa(e) {
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
            ((t = (r ?? an).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? an),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: at.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: X()(at.AS, { [at.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(al, { status: n }),
                            (0, a.jsx)(Q.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: at.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: at.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(ar, { agents: u.get(e.id) ?? an, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: at.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(al, { status: "pending" }),
                          (0, a.jsx)(Q.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: at.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: at.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ai(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = A.intl.formatToPlainString(N.default["P/I+JW"], { completed: o, total: u }),
        d = A.intl.formatToPlainString(N.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(ae, {
        title: A.intl.string(N.default.RtzECX),
        meta: (0, a.jsx)(r9, { children: c }),
        superseded: s,
        showLabel: A.intl.string(N.default.RKyN9q),
        hideLabel: A.intl.string(N.default.xydHoj),
        className: at.Nr,
        bodyClassName: at.rf,
        beforeBody: r && !s ? (0, a.jsx)(eH.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(aa, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var as = n(308665),
    ao = n(59678),
    au = n(903847);
function ac(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        c = null != n,
        [d, m] = i.useState(n ?? "top"),
        [f, h] = i.useState(c),
        [p, g] = i.useState(!1),
        [x, j] = i.useState(!1),
        [v, b] = i.useState(c);
    (v !== c && (b(c), null != n ? (m(n), h(!0)) : (g(!1), j(!1))),
        i.useEffect(() => {
            if (c || !f) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [c, f]),
        i.useEffect(() => {
            if (!f || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => g(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [f, c]));
    let [y, k] = i.useState(!1),
        [w, C] = i.useState(!1),
        [S, E] = i.useState(x);
    (S !== x && (E(x), x ? k(!0) : C(!1)),
        i.useEffect(() => {
            if (x || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [x, y]),
        i.useEffect(() => {
            if (!y || !x) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => C(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [y, x]));
    let I = null != l && l.length > 0,
        M = i.useCallback(() => j((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: au.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: X()(au.vK, { [au.ho]: p && c, [au.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: X()(au.Rk, ao.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(r5.A, {
                                        glyph: (0, a.jsx)(as.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eh.D, {
                                    className: au.pZ,
                                    onClick: u,
                                    "aria-label": A.intl.string(N.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: X()(au.Rk, ao.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(r5.A, {
                                            glyph: (0, a.jsx)(as.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(eR.m, {
                                    text: A.intl.string(N.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eh.D, {
                                        className: au.BO,
                                        onClick: M,
                                        "aria-expanded": x,
                                        "aria-label": A.intl.string(N.default.RtzECX),
                                        children: (0, a.jsx)(r3.ClipboardListIcon, {
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
                  y && I
                      ? (0, a.jsx)("div", {
                            className: X()(au.vB, { [au.pg]: x && w, [au.ui]: !x }),
                            children: (0, a.jsx)(ai, {
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
var ad = n(195880);
function am(e) {
    let t = (0, V.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var af = n(736553),
    ah = n(382541);
async function ap(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, ah.dv)(e),
        i = new af.u();
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
var ag = n(890497),
    ax = n(29073),
    aj = n(590077);
function av(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = am(e),
                [s, o] = i.useState(null),
                [u, c] = i.useState([]),
                [d, m] = i.useState(t.prompt),
                [f, h] = i.useState(!1),
                [p, g] = i.useState(!1),
                x = i.useRef(new Map()),
                j = i.useRef(!1),
                v = i.useRef(!1),
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
                C = i.useCallback((e) => {
                    o(e.slice(0, 10));
                }, []),
                S = d.trim(),
                E = n && !f && (w.length > 0 ? "" !== S : u.length > 0),
                I = i.useCallback(
                    (t) => {
                        v.current ||
                            ((v.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : l8(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          A.intl.formatToPlainString(N.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = A.intl.formatToPlainString(N.default.jZlNst, { targets: l });
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
                    if (!E) return;
                    if (0 === w.length) return void I(u);
                    (h(!0), g(!1));
                    let l =
                        ((t = B.Ay.getProject(e)?.name ?? e),
                        (n = A.intl.formatToPlainString(N.default.ScoZLp, { name: t, projectId: e })),
                        `${S}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, ad.m)() }), x.current.set(e.projectId, t)),
                                ap(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: S }))];
                        if (t.length === w.length || j.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), o(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), g(!0));
                    });
                }, [E, I, u, e, w, S]),
                _ = i.useCallback(() => {
                    ((j.current = !0), u.length > 0 && !f && I(u), l());
                }, [I, u, l, f]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: C,
                prompt: d,
                setPrompt: m,
                sending: f,
                failed: p,
                canSubmit: E,
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
        className: X()(ax.nd, ax.jx),
        "aria-labelledby": c,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: ax.wx,
                children: [
                    (0, a.jsx)(Q.E, {
                        tag: "span",
                        id: c,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: ax.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tl.K, {
                        icon: en.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": A.intl.string(N.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: aj.r,
                children: [
                    0 === u.length
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: A.intl.string(N.default.TbbzW5),
                          })
                        : (0, a.jsx)(ag.Z, {
                              label: A.intl.string(N.default["29gr8j"]),
                              placeholder: A.intl.string(N.default.twlOb6),
                              options: u,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(Z.f, {
                        label: A.intl.string(N.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? A.intl.string(N.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ax.qr,
                children: (0, a.jsx)("div", {
                    className: ax.zt,
                    children: (0, a.jsx)(et.$, {
                        variant: "primary",
                        size: "sm",
                        text: A.intl.string(N.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
                    }),
                }),
            }),
        ],
    });
}
var ab = n(658675),
    ay = n(22231),
    ak = n(123292),
    aw = n(734057);
function aC(e) {
    return 0 === e.options.length && null == e.input;
}
let aN = {
        [eJ.rbe.GUILD_TEXT]: "text",
        [eJ.rbe.GUILD_VOICE]: "voice",
        [eJ.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [eJ.rbe.GUILD_STAGE_VOICE]: "stage",
        [eJ.rbe.GUILD_FORUM]: "forum",
        [eJ.rbe.GUILD_MEDIA]: "media",
    },
    aA = { channel: "#", role: "@", user: "@", project: "" },
    aS = {
        channel: [N.default["9+dfPT"], N.default.pGSJqE],
        role: [N.default["2VkCoD"], N.default.c8YlX8],
        user: [N.default.GZIAxl, N.default["4bptbQ"]],
        project: [N.default.twlOb6, N.default.twlOb6],
    };
function aE(e, t) {
    return A.intl.string(aS[e][+!!t]);
}
var aI = n(155078);
function aM(e) {
    return e.options.some((e) => null != e.image);
}
let a_ = [];
async function aP(e, t) {
    await (0, k.h)(e, "/agent/linked-apps", { method: "PUT", json: { caller_project_id: t } });
}
function aT(e, t) {
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
var aR = n(300344),
    aL = n(614733),
    a$ = n(904363),
    aD = n(950902),
    az = n(384017);
function aO(e) {
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
                        let l = null == (n = aw.A.getChannel(t)?.type) ? void 0 : aN[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = eZ.default.getUser(t)?.username;
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
        className: az.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(ag.Z, {
                  ...g,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(p(e), t),
              })
            : (0, a.jsx)(ag.Z, {
                  ...g,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : p([e]), t),
              }),
    });
}
function aq(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, aR.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(aO, { ...l, guildId: t, options: r, placeholder: aE("channel", !0 === l.question.multi_select) });
}
function aF(e) {
    let { guildId: t, ...n } = e,
        l = (0, a$.A)(t);
    return (0, a.jsx)(aO, { ...n, guildId: t, options: l, placeholder: aE("role", !0 === n.question.multi_select) });
}
function aU(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, aL.A)(t);
    return (0, a.jsx)(aO, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: aE("user", !0 === n.question.multi_select),
    });
}
function aG(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = am(t),
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
    return 0 === s.length ? n : (0, a.jsx)(aO, { ...l, options: s, placeholder: aE("project", !1) });
}
function aB(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, aD.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(aG, { projectId: t, fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(aq, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(aF, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(aU, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var aK = n(87221),
    aV = n(144228),
    aH = n(26430),
    aW = n(750943),
    aX = n(95477),
    aJ = n(256905),
    aY = n(490707),
    aQ = n(907702);
function aZ(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, aY._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: X()(aQ.Gt, aQ.b6),
              children: [
                  (0, a.jsx)(aK.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: A.intl.string(N.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: X()(aQ.Gt, { [aQ.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: aQ.Sl,
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
function a0(e) {
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
            onMeasured: h,
            onRemove: p,
        } = e,
        g = A.intl.formatToPlainString(N.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: X()(aQ.Vs, { [aQ.Q9]: s, [aQ.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(eh.D, {
                className: aQ.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => d(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), f(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": A.intl.formatToPlainString(N.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: u && c ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: aQ.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(aZ, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: h,
                                  })
                                : (0, a.jsx)("span", { className: aQ.Gt }),
                            (0, a.jsx)("span", {
                                className: aQ.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(ab.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(aV.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(Q.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: aQ.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, aI.E)(t) : "")
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
            null != p
                ? (0, a.jsx)("span", {
                      className: aQ.B4,
                      children: (0, a.jsx)(eR.m, {
                          text: A.intl.string(N.default.HQEXJM),
                          children: (0, a.jsx)(tl.K, {
                              icon: rp.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": A.intl.string(N.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: aQ.B4,
                        children: (0, a.jsx)(eR.m, {
                            text: A.intl.string(N.default["4/eeDD"]),
                            children: (0, a.jsx)(tl.K, {
                                icon: aH._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": g,
                                tabIndex: u && c ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function a1(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: u, own: c } = e,
        d = !0 === l.multi_select,
        { options: m } = l,
        f = m.length > 4 ? "gallery" : "row",
        h = i.useRef(null),
        p = i.useRef(new Map()),
        [x, j] = i.useState(null),
        v = null != x && m.some((e) => e.id === x) ? x : (m.find((e) => r.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, g.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, aJ.R)({
                                items: e.map((e, n) => {
                                    let l,
                                        r = p.current.get(t[n].id);
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
                (j(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || s || u(l));
            },
            [s, d, u, m],
        ),
        k =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: A.intl.string(N.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: aQ.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: h,
                className: X()(aQ.fF, "gallery" === f ? aQ.nV : aQ.nM, { [aQ.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            a0,
                            {
                                projectId: n,
                                option: e,
                                multi: d,
                                selected: r.includes(e.id),
                                disabled: s,
                                reachable: o,
                                tabbable: d || e.id === v,
                                onPick: (e) => {
                                    (j(e.id), u(e));
                                },
                                onView: b,
                                onArrow: y,
                                onMeasured: (t) => p.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != k
                        ? (0, a.jsx)(
                              a0,
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
            (0, a.jsx)(a2, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: A.intl.string(/\bicons?\b/i.test(l.question) ? N.default.qU4WN6 : N.default.cbMDDB),
            }),
        ],
    });
}
function a2(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(""),
        f = r ? 0 : -1,
        h = n.busy;
    function x() {
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
        className: aQ.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: aQ.QJ,
                children: [
                    (0, a.jsx)(et.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: aW.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(et.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: te.LinkIcon,
                              text: A.intl.string(N.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: aQ.Fg,
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
                                        (0, p.Oq)(a.size, r)
                                            ? (0, g.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: l4(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: aQ.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: aQ.Hs,
                              children: (0, a.jsx)(aX.k, {
                                  label: A.intl.string(N.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: A.intl.string(N.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), x())
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
                              className: aQ.gd,
                              children: [
                                  (0, a.jsx)(et.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: A.intl.string(N.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: x,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(ak.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: A.intl.string(N.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(Q.E, {
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
function a3(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eh.D, {
        className: X()(az.uK, { [az.ue]: l, [az.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": A.intl.formatToPlainString(c ? N.default["2p6UFz"] : N.default.AQbxhf, { answer: t.label }),
        "aria-describedby": d ? u : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: az.dy, children: (0, a.jsx)(ab.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: az.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: az.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: az.l8,
                        children: (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: az.ed,
                            children: t.label,
                        }),
                    }),
                    d
                        ? (0, a.jsx)(Q.E, {
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
                ? (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: az.rM,
                      children: A.intl.string(N.default.zku6r1),
                  })
                : null,
        ],
    });
}
function a5(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return aM(n)
        ? (0, a.jsx)(a1, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      a3,
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
let a4 = [],
    a6 = [];
function a7(e) {
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
        className: X()(az.Ge, az.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(Q.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: az.aK,
                      children: A.intl.string(N.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(a5, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: aT(o, u),
            }),
            aM(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: az.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: az.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(ay.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: X()(az.Pu, az.es), children: c }),
                      ],
                  }),
        ],
    });
}
function a8(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, u] = i.useState({}),
        [c, d] = i.useState({}),
        [m, f] = i.useState({}),
        [h, p] = i.useState({}),
        [x, j] = i.useState({}),
        [v, b] = i.useState(!1),
        [y, k] = i.useState(0),
        [w, C] = i.useState(null),
        [S, E] = i.useState(null),
        [I, M] = i.useState(null),
        [_, P] = i.useState(!1),
        T = i.useRef(null),
        [R, L] = i.useState(null),
        $ = i.useRef(null),
        D = i.useRef(0),
        z = null == r,
        O = l.questions.length,
        q = Math.min(y, O - 1),
        F = l.questions[q],
        [U, G] = i.useState({ id: F.id, expanded: !1 }),
        B = U.id === F.id && U.expanded,
        [K, V] = i.useState(null),
        H = c[F.id] ?? "",
        W = !0 === F.multi_select,
        J = aM(F),
        Y = W ? (m[F.id] ?? a4) : ((t = o[F.id]), t?.kind === "option" ? [t.optionId] : a_),
        Z = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = A.intl.string(N.default.wTsP5l),
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
                        if (o) return aT(h, m(i));
                        function p(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function x(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let j = t[d];
                        function v(t) {
                            (r((n) => {
                                let l = n[d];
                                return (
                                    null != l && (0, g.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                p({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === j ? { ...e, [d]: x(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: x(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, g.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                                error: { source: "upload", text: A.intl.string(N.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                p({ busy: "link", error: null }),
                                (0, g.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        p({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : A.intl.string(N.default.l79PMc),
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
        ee = Z.imageFor(F.id),
        el = Z.selectedFor(F),
        { text: er, phase: ea } = (0, e$.Q)(F.question),
        ei = er === F.question,
        es = ei && K?.id === F.id && K.truncated;
    i.useLayoutEffect(() => {
        if (null == R || B || !ei) return;
        function e() {
            if (null == R) return;
            let e = R.scrollHeight > R.clientHeight + 1;
            V((t) => (t?.id === F.id && t.truncated === e ? t : { id: F.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(R), () => t.disconnect());
    }, [ei, R, F.id, B]);
    let eo = A.intl.string(B ? A.t.iTcuma : A.t.dcl9MQ),
        eu = i.useCallback(
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
                            : Promise.allSettled(i.map((e) => aP(e, n))).then(t));
                }
            },
            [l, r, n],
        ),
        ec = i.useCallback(
            (e, t) => {
                D.current += 1;
                let n = D.current;
                (C({ direction: t, moves: n }),
                    E({ question: F, draft: H, selected: Y, ownImage: ee, ownSelected: el, direction: t, moves: n }),
                    P(!0),
                    k(e));
            },
            [H, ee, el, F, Y],
        ),
        ed = i.useCallback(() => {
            let e = T.current,
                t = $.current;
            null != e && null != t && M({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = T.current,
            t = $.current;
        if (null == e || null == t) return;
        ed();
        let n = new ResizeObserver(ed);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ed]);
    let em = w?.moves;
    i.useEffect(() => {
        if (null == em) return;
        let e = setTimeout(() => E(null), 400),
            t = setTimeout(() => P(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [em]);
    let ef = i.useCallback(
            (e) => {
                if (z) return;
                let t = { ...o, [F.id]: e };
                u(t);
                let n =
                    q < l.questions.length - 1
                        ? q + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, q);
                null == n ? eu(t) : ec(n, n < q ? "back" : "forward");
            },
            [o, l, z, q, F.id, eu, ec],
        ),
        ep = i.useCallback(() => {
            z || 0 === q || ec(q - 1, "back");
        }, [z, q, ec]),
        eg = q > 0 && !z,
        ex = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [F.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                J ? z || u((e) => ({ ...e, [F.id]: t })) : ef(t);
            },
            [z, J, F.id, ef],
        ),
        { multiPartFor: ej } = Z,
        ev = i.useMemo(() => {
            var e;
            let t, n;
            return W
                ? ((e = ej(F)),
                  (t = H.trim()),
                  (n = F.options.filter((e) => Y.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: Y,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [H, W, ej, F, Y]),
        eb = h[F.id] ?? a6,
        ey = i.useMemo(() => {
            var e, t;
            let n;
            return null != F.input
                ? ((e = F.input),
                  (t = x[F.id]),
                  (n = H.trim()),
                  {
                      kind: "entities",
                      entities: eb,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eb.map((t) => (t.name.startsWith(aA[e]) ? t.name : `${aA[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [H, x, eb, F.id, F.input]),
        ek = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [F.id]: e })), j((e) => ({ ...e, [F.id]: t })));
            },
            [F.id],
        ),
        ew = i.useCallback(() => b(!0), []),
        eC = i.useCallback(() => b(!1), []),
        eN = Z.controlsFor(F, z),
        eA = i.useCallback(() => {
            if (null != ey) {
                "" !== ey.text && ef(ey);
                return;
            }
            if (null != ev) {
                "" !== ev.text && ef(ev);
                return;
            }
            let e = H.trim();
            "" !== e && ef({ kind: "custom", text: e });
        }, [H, ev, ey, ef]),
        [eS, eE] = i.useState(!1),
        [eI, eM] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eE(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let e_ = i.useCallback(() => {
            null != s && (eM(!0), setTimeout(s, 150));
        }, [s]),
        eT = i.useMemo(
            () =>
                null != ey
                    ? "" !== ey.text
                        ? ey
                        : null
                    : null != ev
                      ? "" !== ev.text
                          ? ev
                          : null
                      : "" !== H.trim()
                        ? { kind: "custom", text: H.trim() }
                        : (o[F.id] ?? null),
            [o, H, ev, ey, F.id],
        ),
        eL = null != eT && !z,
        eD = q === O - 1,
        ez = i.useCallback(() => {
            null == eT || z || ef(eT);
        }, [z, eT, ef]),
        eO = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, lB.vq)(e.target, HTMLTextAreaElement) ||
                    (0, lB.vq)(e.target, HTMLInputElement) ||
                    ((!(0, lB.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eg
                            ? (e.preventDefault(), ep())
                            : "ArrowRight" === e.key && eL && (e.preventDefault(), ez())));
            },
            [eg, eL, ep, ez],
        ),
        eq = J
            ? null
            : (0, a.jsxs)("div", {
                  className: az.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: az.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(ay.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(lV.y, {
                          value: H,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [F.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eA());
                          },
                          placeholder: A.intl.string(aC(F) ? N.default.yLN1x6 : N.default["tOC+tn"]),
                          "aria-label": A.intl.formatToPlainString(N.default["4JeYPB"], { question: F.question }),
                          disabled: z,
                          rows: 1,
                          className: az.Pu,
                          "data-conjure-clarification-other": F.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: X()(az.$O, { [az.fI]: eS && !eI, [az.Oh]: eI }),
        role: "dialog",
        "aria-label": F.question,
        "data-conjure-clarification": l.id,
        "data-state": z ? "inert" : "open",
        "data-question-expanded": B ? "true" : void 0,
        "data-picker-open": v && !_ ? "true" : void 0,
        "data-step": q,
        tabIndex: -1,
        onKeyDown: eO,
        children: [
            (0, a.jsxs)("div", {
                className: az.rf,
                style: null == I ? void 0 : { height: I.heading + I.rows },
                "data-moving": _ ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: T,
                        className: az.wx,
                        children: [
                            (0, a.jsx)(Q.E, {
                                ref: L,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: B ? void 0 : 5,
                                className: X()(ax.TK, az.R_, { [az.TB]: "exit" === ea, [az.JU]: "enter" === ea }),
                                children: er,
                            }),
                            es || B
                                ? (0, a.jsx)("div", {
                                      className: ax.Q7,
                                      children: (0, a.jsx)(eR.m, {
                                          text: eo,
                                          children: (0, a.jsx)(tl.K, {
                                              icon: B ? eP.t : lg.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => G({ id: F.id, expanded: !B }),
                                              "aria-label": eo,
                                              "aria-controls": `${F.id}-label`,
                                              "aria-expanded": B,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(eh.D, {
                                      className: X()(ax.gb, ax.Q7),
                                      onClick: e_,
                                      "aria-label": A.intl.string(N.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(en.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: az.Cg,
                        style: null == I ? void 0 : { insetBlockStart: I.heading },
                        children: (0, a.jsxs)("div", {
                            className: az.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: $,
                                    className: az.Ge,
                                    role: "group",
                                    "aria-labelledby": `${F.id}-label`,
                                    "data-direction": w?.direction,
                                    "data-parity": null == w ? void 0 : w.moves % 2,
                                    children: [
                                        W
                                            ? (0, a.jsx)(Q.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: az.aK,
                                                  children: A.intl.string(N.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(a5, {
                                            projectId: n,
                                            question: F,
                                            selected: Y,
                                            disabled: z,
                                            onPick: (e) =>
                                                W
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [F.id]:
                                                                  ((n = t[F.id] ?? a4),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  F.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ex(e),
                                            own: eN,
                                        }),
                                        null != F.input
                                            ? (0, a.jsx)(aB, {
                                                  projectId: n,
                                                  question: F,
                                                  value: eb,
                                                  disabled: z,
                                                  onChange: ek,
                                                  onFocus: ew,
                                                  onBlur: eC,
                                                  fallback: !1 === F.allow_custom ? eq : null,
                                              })
                                            : null,
                                        !1 === F.allow_custom ? null : eq,
                                    ],
                                }),
                                null == S
                                    ? null
                                    : (0, a.jsx)(
                                          a7,
                                          {
                                              projectId: n,
                                              question: S.question,
                                              draft: S.draft,
                                              selected: S.selected,
                                              ownImage: S.ownImage,
                                              ownSelected: S.ownSelected,
                                              direction: S.direction,
                                              disabled: z,
                                          },
                                          S.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            O > 1 || W || J || null != F.input || aC(F)
                ? (0, a.jsxs)("div", {
                      className: ax.qr,
                      children: [
                          (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  O > 1
                                      ? A.intl.formatToPlainString(N.default.yzYUjq, { index: q + 1, total: O })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: ax.zt,
                              children: [
                                  eg
                                      ? (0, a.jsx)(ak.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: A.intl.string(N.default.Pk5lfA),
                                            onClick: ep,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(et.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: A.intl.string(eD ? A.t.geKm7t : N.default.w1nRmT),
                                      disabled: !eL,
                                      onClick: ez,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": eD ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var a9 = n(557744),
    ie = n(223347),
    it = n(894443),
    il = n(525530);
function ir(e, t) {
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
var ia = n(572253),
    ii = n(411236);
function is(e) {
    let { projectId: t, request: n, onDismiss: l, notifyAgent: r = !0 } = e,
        i = null != n.note && "" !== n.note ? n.note : A.intl.string(N.default.XuOf5s);
    return (0, a.jsx)(ia.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: r,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: r, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let u = (0, a.jsx)(et.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: r,
                disabled: !n,
                text: A.intl.string(N.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: ii.Mk,
                      onSubmit: o,
                      children: [
                          (0, a.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: A.intl.string(N.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: i,
                          }),
                          t,
                          (0, a.jsx)("div", { className: ii.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: X()(ax.nd, ax.jx),
                      "aria-label": A.intl.string(N.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: ax.wx,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: ax.TK,
                                      children: A.intl.string(N.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(eh.D, {
                                      className: X()(ax.gb, ax.Q7),
                                      onClick: l,
                                      "aria-label": A.intl.string(N.default["iq+Pte"]),
                                      children: (0, a.jsx)(en.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: ii.DQ,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: i,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: ax.qr,
                              children: (0, a.jsx)("div", { className: ax.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var io = n(874421),
    iu = n(932111),
    ic = n(404373),
    id = n(435558),
    im = n.n(id);
let ih = "ConjureComposerDrafts";
function ip() {
    return tH.w.get(ih) ?? {};
}
let ig = new Map(),
    ix = im().throttle(() => {
        if (0 === ig.size) return;
        let e = ip();
        for (let [t, n] of ig) "" === n ? delete e[t] : (e[t] = n);
        (ig.clear(), tH.w.set(ih, e));
    }, 1e3);
class ij extends o.Ay.Store {
    getDraft(e) {
        let t = ig.get(e);
        return null != t ? t : (ip()[e] ?? "");
    }
}
let iv = new ij(lW.h, {
    LOGOUT: function () {
        return (ig.clear(), ix.cancel(), tH.w.remove(ih), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (ig.set(t, n), ix(), "" === n && ix.flush(), !1);
    },
});
function ib(e) {
    return "" !== iv.getDraft(e).trim();
}
var iy = n(29080);
function ik(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, rZ.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, rZ.Lf)(r) }),
    };
}
var iw = n(520521),
    iC = n(216306),
    iN = n(60160),
    iA = n(16634),
    iS = n(651438);
function iE(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, rZ.SY)(n.steps),
        d = u ? (0, iS.Q)(n) : (0, iC.R)(o),
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
                                    className: ao.dO,
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
                                      className: ao.iq,
                                      children: (0, a.jsx)(iN.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(r5.A, {
        glyph: (0, a.jsx)(r4.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: (0, iC.O)(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ao.nC,
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
var iI = n(998445),
    iM = n(643210),
    i_ = n(648127),
    iP = n(372795),
    iT = n(163897);
let iR = "conjure-browser-viewer";
function iL(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [iM.A],
            () =>
                n.flatMap((e) => {
                    let n = iM.A.getTab(t, e);
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
        "aria-label": A.intl.string(N.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(i$, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function i$(e) {
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
        u = (0, tv.useHasModalOpen)(iR),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        h = (0, i_.i)(l.session);
    return (0, a.jsxs)(eh.D, {
        innerRef: s,
        className: X()(iT.Nr, f && iT.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, tv.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: iR },
                )
            );
        },
        "aria-label": A.intl.formatToPlainString(N.default.G3a822, { title: h }),
        children: [
            (0, a.jsxs)("div", {
                className: iT.Gt,
                children: [
                    (0, a.jsx)(iP.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: iT.Ji,
                        "aria-label": A.intl.formatToPlainString(N.default.rnwqXb, { name: h }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: iT.qf,
                              children: (0, a.jsx)(iI.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: iT.HS,
                              children: (0, a.jsx)(Q.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: A.intl.string(N.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: iT.pG,
                children: [
                    (0, a.jsx)("span", { className: X()(iT.W9, f && iT.oM) }),
                    (0, a.jsx)(Q.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: h,
                    }),
                ],
            }),
        ],
    });
}
var iD = n(268409);
let iz = new WeakMap(),
    iO = new WeakMap();
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
            [e1.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = iz.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = iO.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), iO.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (iz.set(e, n), n);
                })(e1.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: iD.h, children: (0, a.jsx)(iL, { projectId: t, sessionIds: u }) });
}
var iF = n(469393);
function iU(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, n3.lG)(t.authored_at);
    return (0, a.jsx)(r7, {
        title: A.intl.string(N.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: iF.r,
            children: [
                (0, a.jsxs)("div", {
                    className: iF.z,
                    children: [
                        (0, a.jsx)(Q.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(et.$, {
                          variant: "secondary",
                          size: "sm",
                          text: A.intl.string(N.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var iG = n(155718);
function iB(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let iK = ["command", "user_command", "message_command", "message"],
    iV = new Set([iG.kc.CHAT, iG.kc.USER, iG.kc.MESSAGE]);
function iH(e) {
    return e.type ?? iG.kc.CHAT;
}
function iW(e) {
    return iV.has(iH(e));
}
function iX(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function iJ(e, t) {
    let n = iK.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !iX(e)), ...n.filter(iX)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || iX(r) || l.push(r);
    }
    return iK.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function iY(e, t, n) {
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
    let s = e.commands.filter(iW).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (iH(e)) {
                    case iG.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case iG.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(iX),
        u = a.length > 0 ? iJ([...a, ...o], !0) : iJ("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var iQ = n(377941),
    iZ = n.n(iQ);
function i0(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function i1(e) {
    return e.type === iG.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === iG.kc.USER || e.type === iG.kc.MESSAGE
          ? ""
          : "/";
}
let i2 = {
        [n8.q7.APP_CHANNEL]: N.default["3/aHX6"],
        [n8.q7.VOICE_CHANNEL]: N.default["3/aHX6"],
        [n8.q7.ACTIVITY]: N.default["3/aHX6"],
        [n8.q7.OVERLAY]: N.default["rPpf5/"],
        [n8.q7.PROFILE_WIDGET]: null,
        [n8.q7.AUTOMOD]: null,
        [n8.q7.BOT]: null,
        [n8.q7.APPLICATION_COMMANDS]: null,
    },
    i3 = [n8.q7.ACTIVITY, n8.q7.APP_CHANNEL, n8.q7.VOICE_CHANNEL, n8.q7.OVERLAY];
function i5(e) {
    return i3.find((t) => iB(e, t)) ?? null;
}
var i4 = n(176999),
    i6 = (((l = {}).IMAGE = "image"), l),
    i7 = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    i8 = n(598748),
    i9 = n(773669);
let se = [],
    st = {},
    sn = {};
function sl(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function sr(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: i6.IMAGE,
        visibility: i7.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var sa = n(127258),
    si = n(803306),
    ss = n(320095),
    so = n(963852),
    su = n(95701),
    sc = n(889227);
let sd = new su.nA({ id: "1337", guild_id: "1337", type: eJ.rbe.GUILD_TEXT, name: "preview" });
function sm(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([eZ.default], () => eZ.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, si.nj)(new sc.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let sf = /^@\S+/;
var sh = n(97808),
    sp = n(778712),
    sg = n(486020),
    sx = n(46054),
    sj = n(200700);
let sv = {
        alert: { label: () => A.intl.string(N.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => A.intl.string(N.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => A.intl.string(N.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => A.intl.string(N.default.RGzFNK), blockedStyle: !1 },
    },
    sb = {
        blocked: { label: () => A.intl.string(N.default.YdnZ8q), tone: "red" },
        alert: { label: () => A.intl.string(N.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => A.intl.string(N.default.RGzFNK), tone: "green" },
    },
    sy = ["blocked", "alert", "allowed"],
    sk = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function sw(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : A.intl.formatToPlainString(A.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, sj.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? A.intl.formatToPlainString(A.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? A.intl.formatToPlainString(A.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? A.intl.formatToPlainString(A.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? A.intl.formatToPlainString(A.t.opVZ9q, { mins: n / 60 })
                                      : A.intl.formatToPlainString(A.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var sC = n(984097),
    sN = n(13673);
let sA = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function sS(e) {
    let { example: t } = e,
        n = sw(t);
    return null == n
        ? null
        : (0, a.jsx)(Q.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let sE = ["glazedgamer", "sprinkles", "donutking"];
function sI(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = sv[n.outcome];
    return (0, a.jsxs)("li", {
        className: X()(sC.nM, { [X()(sC.HV, sN.DX)]: s }),
        children: [
            (0, a.jsx)(eH.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: sC.my,
                children: (0, a.jsx)(sh.eu, {
                    src: (0, sg.AE)(void 0, void 0),
                    size: sp._3.SIZE_24,
                    "aria-label": A.intl.string(N.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: sC.fw,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), sx.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(sS, { example: n }) : null,
                ],
            }),
        ],
    });
}
function sM(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = sb[t.section],
        s = new Set(t.examples.map(sw)),
        o = 1 === s.size ? t.examples.map(sw)[0] : null;
    return (0, a.jsxs)("div", {
        className: sC.UO,
        children: [
            (0, a.jsxs)("div", {
                className: sC.RZ,
                children: [
                    (0, a.jsx)(Q.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: sA[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: sC.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(Q.E, {
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
                    (0, a.jsx)(sI, { example: e, username: sE[(n + t) % sE.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function s_(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            sy
                .map((e) => ({ section: e, examples: t.filter((t) => sk[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: sC.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: sC.hk,
                      children: (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    sM,
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
var sP = n(276293),
    sT = n(460905),
    sR = n(110384),
    sL = n(633018),
    s$ = n(763754),
    sD = n(217424),
    sz = n(194085),
    sO = n(20851),
    sq = n(692508),
    sF = n(798819);
function sU(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: X()(sF.item, sF.labelContainer, sF.colorDefault, {
            [sF.focused]: !0 === t.highlighted,
            [sF.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: sF.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: sF.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: X()(sF.label, sq.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: sF.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: sF.icon }),
                  })
                : null,
        ],
    });
}
function sG(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: X()(t, sq.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: A.intl.string(A.t["5IEsGx"]), icon: sR.W, muted: !0 }
                : { label: A.intl.string(A.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: X()(sF.menu, sq.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: sF.scroller,
            children: [
                (0, a.jsx)(sU, { item: s }),
                (0, a.jsx)("div", { className: sF.separator }),
                (0, a.jsx)(sU, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var sB = n(381941);
function sK() {}
function sV(e) {
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
        h,
        { projectId: p, exchanges: g } = e,
        {
            items: x,
            botIcon: j,
            appIconSrc: v,
        } = ((t = (0, o.bG)([eZ.default], () => eZ.default.getCurrentUser())),
        (n = (0, o.bG)([B.Ay], () => B.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, o.bG)([tC.A], () => tC.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? A.intl.string(N.default.JEYq8M)),
        (u = (0, o.bG)([eZ.default], () => (null != l ? eZ.default.getUser(l) : void 0), [l])),
        (d = sm("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = sm("31338", A.intl.string(N.default["9iAOsw"]), { discriminator: "0003" })),
        (h = sm("31339", (0, e0.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == h || null == m || null == f
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
                                      i = (0, ss.rh)({
                                          ...(0, so.Ay)({
                                              channelId: sd.id,
                                              content: e,
                                              author: t,
                                              type: l ?? eJ.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: eJ.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: sa.G.APPLICATION_COMMAND,
                                                        user: (0, so.Vi)(s),
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
                                              messageType: eJ.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: eJ.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(sf, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              g,
                              { bot: m, currentUser: t, viewer: h, member: f },
                              {
                                  targetMessage: A.intl.string(N.default["y+QYes"]),
                                  memberMessage: A.intl.string(N.default.BUTRDc),
                              },
                          ),
                [g, m, t, h, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === x.length) return null;
    let b = sd.name;
    return (0, a.jsxs)("div", {
        className: sq.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: sq.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sP.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: b }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: X()(sq.TE, `group-spacing-${sB.ES}`),
                children: x.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? sq.Rz : void 0,
                            children: [
                                (0, a.jsx)(sO.A, {
                                    message: n,
                                    channel: sd,
                                    author: (0, s$.FT)(n.author, sd),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(sD.A, { message: n, channel: sd }) : void 0,
                                    usernameClassName: r?.target === "user" ? sq.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: sq.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(sz.Ay, {
                                              children: [
                                                  (0, a.jsx)(sz.qv, {
                                                      label: A.intl.string(A.t.lfIHs4),
                                                      icon: sT.n,
                                                      onClick: sK,
                                                  }),
                                                  (0, a.jsx)(sz.qv, {
                                                      label: A.intl.string(A.t["5IEsGx"]),
                                                      icon: sR.W,
                                                      onClick: sK,
                                                  }),
                                                  (0, a.jsx)(sz.qv, {
                                                      label: A.intl.string(A.t["UKOtz+"]),
                                                      icon: tr.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: sK,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? sq.ET : sq.je,
                                          inert: !0,
                                          children: (0, a.jsx)(sG, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: v,
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
                    (0, a.jsx)(sL.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: A.intl.formatToPlainString(A.t["8lzR/R"], { channel: `#${b}` }),
                    }),
                ],
            }),
        ],
    });
}
var sH = n(332173);
function sW(e) {
    let { name: t } = e;
    return (0, a.jsxs)(sH.A, { children: ["/", t] });
}
function sX(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(iZ());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(sW, { name: e.name }, e.start) : e.text));
}
n(827669);
var sJ = n(687966),
    sY = n(757789),
    sQ = n(26137),
    sZ = n(430392),
    s0 = n(231483),
    s1 = n(323384);
let s2 = {
    frame: N.default.Z2bt4u,
    overlay_widget: N.default["0mGHfU"],
    user_widget: N.default.Jipr29,
    bot: N.default.EbvC13,
    commands: N.default.EbvC13,
    automod: N.default.tiMvei,
};
var s3 = n(573634);
let s5 = {
    frame: sJ.GameControllerIcon,
    overlay_widget: sY.V,
    user_widget: sQ.r,
    bot: sZ.RobotIcon,
    commands: sZ.RobotIcon,
    automod: s0.ShieldIcon,
};
function s4(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: X()(s3.e7, l),
        children: [(0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function s6(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: s3.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: s3.jw,
                    children: (0, a.jsx)(Q.E, {
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
function s7(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: s3.lj,
        children: [
            (0, a.jsx)("span", {
                className: X()(s3.Vo, s3.G),
                children: (0, a.jsx)(s1.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: s3.aV,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function s8(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: s3.wZ,
        children: t.map((e, t) => {
            let n = i1(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(sW, { name: e.name })
                                : (0, a.jsx)(sH.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function s9(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: s3.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: s3.Aw,
                    children: (0, a.jsx)(Q.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(sX, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function oe(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? s1.k : s5[t.kind],
        u = A.intl.string(s ? N.default.BM4Ymz : s2[t.kind]);
    return (0, a.jsxs)("section", {
        className: s3.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: s3.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: s3.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(Q.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: s3.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(Q.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(sX, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(s9, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: s3.PG, children: r }) : null,
        ],
    });
}
function ot(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: s3.aN,
        children: [
            (0, a.jsxs)("div", {
                className: s3.Lv,
                children: [(0, a.jsx)(ew.D, { variant: "heading-lg/semibold", color: "text-strong", children: r }), s],
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
                                let n = t.map(iZ()).join("|");
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
                            (0, a.jsx)("div", { className: s3.yF, role: "separator" }),
                            (0, a.jsx)(oe, {
                                experience: t,
                                bullets: n,
                                preview: u(t),
                                blocks: (function (e, t) {
                                    switch (t.kind) {
                                        case "frame":
                                            let n = (function (e, t) {
                                                if ("frame" !== t.kind) return null;
                                                let n = A.intl.string(N.default["6/3tGY"]),
                                                    l = [];
                                                if (t.surfaces.includes(n8.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(n8.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(n8.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        s4,
                                                        {
                                                            className: s3.Iw,
                                                            caption: A.intl.formatToPlainString(N.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: s3.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        s7,
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
                                                ...(n.usableInVoice ? [A.intl.string(N.default["4oGg2h"])] : []),
                                                ...(n.launchableAnywhere ? [A.intl.string(N.default.BTGCfR)] : []),
                                            ];
                                            return (
                                                r.length > 0 &&
                                                    l.push(
                                                        (0, a.jsx)(
                                                            s4,
                                                            {
                                                                caption: A.intl.string(N.default.MY6UGJ),
                                                                children: (0, a.jsx)(s6, { labels: r }),
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
                                                              s4,
                                                              {
                                                                  caption: A.intl.string(A.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(s8, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...[
                                                    {
                                                        key: "permissions",
                                                        caption: N.default["2UbW6r"],
                                                        names: e.bot_permissions,
                                                    },
                                                    {
                                                        key: "intents",
                                                        caption: N.default["7TKfpj"],
                                                        names: e.privileged_intents,
                                                    },
                                                ]
                                                    .flatMap((e) => {
                                                        let { key: t, caption: n, names: l } = e;
                                                        return null != l && l.length > 0
                                                            ? [{ key: t, caption: A.intl.string(n), labels: l.map(i0) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            s4,
                                                            { caption: n, children: (0, a.jsx)(s6, { labels: l }) },
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
var on = n(633075),
    ol = n(946356),
    or = n(58216),
    oa = n(27399);
function oi(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([eZ.default], () => eZ.default.getCurrentUser()),
        r = i.useMemo(() => new on.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: oa.H,
              children: (0, a.jsx)(ol.A.Overlay, {
                  className: oa.w,
                  children: (0, a.jsx)(or.A, {
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
var os = n(443863);
function oo(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = (0, aY._)(t, r),
        c = i.useCallback(() => {
            (0, g.PK)(t, r).then(
                (e) => {
                    (0, aJ.R)({
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
        : (0, a.jsx)(eh.D, {
              className: os.xX,
              onClick: c,
              "aria-label": A.intl.string(N.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: os.sN, onError: u }) : null,
          });
}
function ou(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = iB(c, n8.q7.APPLICATION_COMMANDS)),
            (l =
                iB(c, n8.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(iW)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : iY(c, l, {
                              message: A.intl.string(N.default.J7qggf),
                              reply: A.intl.string(N.default.nqYtiy),
                              event: A.intl.string(N.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = sn } = t,
                r = (0, o.bG)([i9.default], () => i9.default.locale),
                a = (0, o.bG)([B.Ay], () => {
                    let t = B.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(st);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, g.PK)(e, l.id).then(
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
                                                          ...sl(n),
                                                          ...(null != n.fallback ? { fallback: sl(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = i4.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[i8.m.WIDGET_TOP] || null == i[i8.m.WIDGET_BOTTOM]
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
                                                                    type: i4.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: i4.oG.NUMBER, value: a })
                                                                : (r[e] = { type: i4.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(sr),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: se,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(u, c),
        p = d?.superseded === !0,
        x = c.what_changed?.trim() ?? "",
        j =
            ((t = c.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === i1(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        v =
            null == (s = i5(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(iW)
                    ? iY({ ...c, bot: void 0 }, "commands", {
                          message: A.intl.string(N.default.J7qggf),
                          reply: A.intl.string(N.default.nqYtiy),
                          event: A.intl.string(N.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([B.Ay], () => B.Ay.getProject(u)?.name, [u]),
        k =
            p && null != d
                ? A.intl.formatToPlainString(N.default.YZ3qJs, { version: d.version })
                : A.intl.string(N.default["3b6e7o"]),
        w = p ? (0, a.jsx)(r9, { children: A.intl.string(N.default.hF2c41) }) : null;
    return (0, a.jsxs)(ae, {
        title: k,
        meta: w,
        superseded: p,
        showLabel: A.intl.string(N.default.yD8EJS),
        hideLabel: A.intl.string(N.default.nSPGNb),
        bodyClassName: os.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: os.Qs,
                children: (0, a.jsx)(ot, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(Q.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(sX, { text: c.summary, commandNames: j }),
                            }),
                            "" !== x
                                ? (0, a.jsxs)("section", {
                                      className: os.uW,
                                      children: [
                                          (0, a.jsx)(Q.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: A.intl.string(N.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(Q.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(sX, { text: x, commandNames: j }),
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
                                return e.id === v && null != c.design_image
                                    ? (0, a.jsx)(oo, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: A.intl.string(null == (t = i5(c)) ? N.default["3/aHX6"] : i2[t]),
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(oi, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(s_, { automod: c.automod })
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
                                        (r = l.some((e) => "command" === e.kind || iX(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(sV, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: j,
                }),
            }),
            null == m || p
                ? null
                : (0, a.jsxs)("div", {
                      className: os.qr,
                      children: [
                          (0, a.jsx)(et.$, {
                              variant: "primary",
                              size: "sm",
                              text: A.intl.string(N.default["6S+wRM"]),
                              onClick: m,
                          }),
                          (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: A.intl.string(N.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var oc = n(289565);
function od(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: oc.m, children: n })
        : (0, a.jsxs)("div", {
              className: oc.Z,
              children: [
                  n,
                  (0, a.jsx)(eR.m, {
                      text: A.intl.string(A.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tl.K, {
                          "aria-label": A.intl.string(A.t.WAI6xu),
                          icon: en.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function om(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "unpublished" === t.state);
}
function of(e, t) {
    return null != e && om(t, e.status);
}
let oh = new WeakMap();
function op(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, o.bG)([f.A], () => (null == n ? null : f.A.getGuild(n)));
    return (0, a.jsx)(tj.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(tj.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, a.jsx)(et.$, {
                    variant: "primary",
                    size: "sm",
                    loading: t.publishing,
                    disabled: t.disabled,
                    onClick: () => t.run("card"),
                    text: t.label,
                }),
                null != l
                    ? (0, a.jsxs)(tj.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: A.intl.string(N.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(F.Ay, { guild: l, size: F.Ay.Sizes.SMOL }),
                              (0, a.jsx)(Q.E, {
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
function og(e) {
    let { projectId: t, cta: n } = e,
        l = (0, tm.Ay)(t);
    return null != l && of(l, n)
        ? (0, a.jsx)(od, {
              children: (0, a.jsxs)(tj.B, {
                  gap: 8,
                  align: "start",
                  children: [
                      "new_ui" === n.reason
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: A.intl.string(N.default["9ZqzLo"]),
                            })
                          : null,
                      (0, a.jsx)(op, { publish: l }),
                      "new_ui" !== n.reason
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: A.intl.string(N.default.SifbJM),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var ox = n(303345),
    oj = n(44255),
    ov = n(416473),
    ob = n(289830);
function oy(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, o.bG)(
                    [B.Ay],
                    () => {
                        let t = B.Ay.getProject(e);
                        return null != t && (0, B.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                c = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, ov.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof ox.A ? e.message : A.intl.string(N.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? A.intl.formatToPlainString(N.default.orZDqY, { time: (0, oj.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, oj.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(r7, {
        title: A.intl.string(N.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: ob.r,
            children: [
                (0, a.jsxs)("div", {
                    className: ob.z,
                    children: [
                        (0, a.jsx)(Q.E, { variant: "text-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.string(N.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  role: "status",
                                  children: A.intl.string(N.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, a.jsx)(et.$, {
                          variant: "secondary",
                          size: "sm",
                          text: A.intl.string(N.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var ok = n(989271);
function ow(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(eh.D, {
        className: X()(ok.nM, { [ok.f1]: s, [ok.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": A.intl.formatToPlainString(N.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: ok.jo,
                children: [
                    n
                        ? (0, a.jsx)(ne.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ok.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(Q.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ok.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(Q.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function oC(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(r7, {
        title: A.intl.string(N.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                ow,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var oN = n(530557),
    oA = n(872162),
    oS = n(628284),
    oE = n(564963),
    oI = n(202723);
function oM(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tv.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: oN.R })), [r.fields]),
        d = (0, oE.bB)(l, s),
        m = X()(oI.Lo, { [oI.jY]: d });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(Q.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: A.intl.string(N.default.CTxtdV),
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
                        (0, a.jsx)(Q.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: A.intl.string(N.default.HCQvpO),
                        }),
                        (0, a.jsx)(oA.C, { label: A.intl.string(N.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: oI.Lo,
                      children: (0, a.jsx)(oA.C, { label: A.intl.string(N.default.HCQvpO), size: "xs", items: c }),
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
                                className: oI.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: oI.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(oS.y, {
                                            size: "xs",
                                            color: ea.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: A.intl.string(N.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(oA.C, { label: A.intl.string(N.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: oI.Lo,
                    children: [
                        (0, a.jsx)(Q.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: A.intl.string(null != o ? N.default.O0QIqj : N.default.HCQvpO),
                        }),
                        (0, a.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : A.intl.string(N.default.MPGSHL),
                        }),
                        (0, a.jsx)(oA.C, { label: A.intl.string(N.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: oI.sq,
                            children: (0, a.jsx)(et.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: A.intl.string(N.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var o_ = n(919790),
    oP = n(908492),
    oT = n(971824),
    oR = n(162052),
    oL = n(165648);
function o$(e) {
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
        x = i.useMemo(() => (0, rZ.Jf)(n, l), [n, l]),
        j = i.useMemo(
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
            className: ao.pj,
            "data-live": !1,
            children: (0, a.jsx)(r5.A, {
                glyph: (0, a.jsx)(iy.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: A.intl.string(N.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let v = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, rZ.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === j.steps.length && 0 === j.tasks.length && !y) return null;
    let k = j.tasks,
        w = (0, iw.n)(k.map((e) => e.taskId)),
        C = !p && (l || k.some((e) => "running" === e.task.status)),
        S = (0, iS.k)(k);
    return (0, a.jsxs)("ol", {
        className: ao.pj,
        "data-live": C,
        children: [
            (0, a.jsx)(r2.Ay, {
                projectId: t,
                steps: j.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: p,
                durationMs: v,
                connectsDown: k.length > 0,
                tier: x.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? (0, iw.p)(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          iE,
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
                      className: ao.YO,
                      children: (0, a.jsx)(ai, { todos: b, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function oD(e) {
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
            settingsRequest: h,
            publishCta: p,
            onPickIdea: g,
            pickedIdeaIds: x,
            onApprovePlan: j,
            sideReply: v = !1,
            sideReplyAcknowledges: b,
            hoistedProse: y = !1,
            hoistedAttachmentsHost: k,
            restoreProposal: w,
            onRestoreProposal: C,
            publishScheduleProposal: S,
            publishScheduleProposalCurrent: E = !1,
        } = e,
        I = i.useMemo(
            () => ik({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: M, lastStreamedMessage: _, showsClosingMessage: P, closingContent: T } = I,
        R = (y ? k : void 0) ?? I.attachmentsHost,
        L = P && !y,
        $ = null == u ? null : (0, a.jsx)(o_.A, { projectId: t, attachments: u }),
        D = null == $ ? null : (0, a.jsx)("div", { className: ao.MT, children: $ }),
        z = v
            ? (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return A.intl.string(N.default.Mv5OmK);
                          case "queued":
                              return A.intl.string(N.default["Po/2mi"]);
                          case "restarting":
                              return A.intl.string(N.default.Vj0woh);
                          default:
                              return A.intl.string(N.default.gY3L8p);
                      }
                  })(b),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: ao.ue,
        children: [
            M.length > 0 && !y
                ? (0, a.jsx)("ol", {
                      className: ao.dO,
                      children: M.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: ao.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: oL.PT,
                                          children: (0, oP.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === R && e === _ ? D : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(ou, { projectId: t, proposal: r, version: s, onApprove: j })
                : L
                  ? (0, a.jsxs)("div", {
                        className: X()(ao.ky, oR.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: X()(oL.PT, ao.cW),
                                children: (0, oP.U)(T, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === R ? D : null,
                            z,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: X()(ao.ky, oR.XR, { [oT.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(oM, {
                          projectId: t,
                          cardId: d ?? "",
                          request: c,
                          status: f,
                          awaiting: "open" === f ? m : void 0,
                      }),
                  })
                : null,
            null != h
                ? (0, a.jsx)("div", {
                      className: X()(ao.ky, oR.XR),
                      children: (0, a.jsx)(is, { projectId: t, request: h }),
                  })
                : null,
            "standalone" !== R && ("closing" !== R || L) ? null : $,
            null != p ? (0, a.jsx)(og, { projectId: t, cta: p }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(oC, { ideas: o, pickedIdeaIds: x, onPick: g }) : null,
            null != w ? (0, a.jsx)(iU, { proposal: w, onRestore: C }) : null,
            null != S ? (0, a.jsx)(oy, { projectId: t, proposal: S, current: E }) : null,
            L ? null : z,
        ],
    });
}
var oz = n(146806),
    oO = n(477262),
    oq = n(432017),
    oF = n(475358),
    oU = n(717400),
    oG = n(99677),
    oB = n(663341),
    oK = n(559647),
    oV = n(775602),
    oH = n(655098),
    oW = n(234320),
    oX = n(191023);
function oJ(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(l9.p, {
        name: A.intl.string(N.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: nX.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(oX.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: nX.OY,
                    children: (0, a.jsx)(ay.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(Q.E, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: A.intl.string(N.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: rt.o1,
            onClick: () => {
                nB(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": A.intl.string(N.default.N852dj),
            children: (0, a.jsx)(lH.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function oY(e) {
    let { send: t } = e;
    return (0, a.jsxs)(l9.p, {
        compact: !0,
        name: A.intl.string(N.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(Q.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: A.intl.string(N.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: rt.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(ak.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: A.intl.string(N.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var oQ = n(901173),
    oZ = n(161431),
    o0 = n(280450),
    o1 = n(659280),
    o2 = n(351906),
    o3 = n(407653),
    o5 = n(322915);
function o4(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([o2.A], () => o2.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      o1.Ay.User,
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
                      o1.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(o3.A, { projectId: n, file: e.file, className: o5.Vk }),
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
    return (0, a.jsx)(o1.Ay, {
        id: t,
        className: o5.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": A.intl.string(N.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(o6, { titleId: c, title: A.intl.string(N.default.Vb3sUg), children: h })
                    : null,
                p.length > 0
                    ? (0, a.jsx)(o6, { titleId: d, title: A.intl.string(N.default.zA5KLM), children: p })
                    : null,
            ],
        }),
    });
}
function o6(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(Q.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: o5.Gf, children: n }),
            l,
        ],
    });
}
var o7 = n(719442),
    o8 = n(355622),
    o9 = n(408018),
    ue = n(186306),
    ut = n(323350),
    un = n(35277),
    ul = n(820066),
    ur = n(683167),
    ua = n(267102),
    ui = n(259691);
let us = (0, su.createChannelRecord)({ id: "1", type: eJ.rbe.DM });
function uo(e) {
    let t = ul.VW.end(e, []);
    return { anchor: t, focus: t };
}
function uu(e) {
    return (0, ut.WO)(ul.VW.richValue(e), { mode: "raw" });
}
function uc(e, t) {
    ((e.children = (0, o9.x7)(t)), (e.selection = uo(e)), e.onChange());
}
function ud(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(iu.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(ui.A, { attachmentId: r }), n] });
}
var um = n(497437);
let uf = [
        {
            id: "add-images-videos",
            label: N.default["51+9lc"],
            icon: oO.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: N.default["10ljr2"],
            icon: oq.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: N.default.aotDee, icon: ec.H, accept: "" },
    ],
    uh = "text-md/normal",
    up = null;
function ug(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, f] = i.useState(0),
        [h, p] = i.useState(0),
        [g, x] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
            (p(i + a), f(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                m = 0 === d ? 1 : s / d,
                h = 0 === d ? 1 : o / d;
            x({
                frontFrom: 1e3 * (0, oz._R)(m),
                frontTo: 1e3 * (0, oz._R)(h),
                backFrom: 1e3 * (0, oz.T)(m),
                backTo: 1e3 * (0, oz.T)(h),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, v] = i.useState(0),
        [b, y] = i.useState(null),
        k = i.useRef(!1),
        w = i.useCallback(() => {
            (y(k.current ? (n ? "through" : "out") : n ? "in" : null), v((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        k.current = n;
    }, [n, t]);
    let C = "in" === b ? g.backFrom : g.frontFrom,
        S = "out" === b ? g.frontTo : g.backTo,
        E = (0, o.bG)([oV.Ay], () => oV.Ay.useReducedMotion),
        I = t === A.intl.string(N.default.Zc7gML),
        M = r === t && I;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: X()(um.VT, { [um.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && j > 0 && null != b ? j % 2 : void 0,
            "data-wipe-kind": l ? (b ?? void 0) : void 0,
            children: (0, a.jsx)(oF.e, { shortcut: "tab", className: um.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ey.o, {
                text: t,
                variant: uh,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: X()(um.xM, { [um.s2]: l }),
                onStart: w,
                onComplete: () => s(t),
            }),
            _(um.IS, n || (!E && "out" === b), u),
            (0, a.jsx)("span", {
                ref: c,
                className: um.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(Q.E, { variant: uh, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: um.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(Q.E, { variant: uh, tag: "span", className: um.xM, children: t }),
                          _(um.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let ux = i.memo(function (e) {
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
                hasPendingContext: j = !1,
                onDraftHasTextChange: v,
                modelSettings: b,
                onModelSettingsChange: y,
            } = e,
            k = (function (e) {
                let t = i.useContext(ua.Ay),
                    [n] = i.useState(() => {
                        let n = (0, o7.ie)();
                        return (
                            (n.children = (0, o9.x7)(e)),
                            (n.selection = uo(n)),
                            (0, ur.a)({
                                editor: n,
                                chatInputType: o8.oU.GENERIC_RICH_TEXTAREA,
                                channel: us,
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
                                    for (let [t, l] of ul.VW.nodes(e, { at: [], match: ul.l5.isText }))
                                        for (let e of t.text.matchAll(iu.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        ue.o.withMergedEntry(e, () =>
                                            ul.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    un.b.textToVoid(
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
            })(iv.getDraft(t)),
            [w, C] = i.useState(() => uu(k)),
            S = i.useRef(w),
            [E, I] = i.useState(null),
            M = i.useCallback(() => {
                let e = uu(k);
                e !== S.current &&
                    ((S.current = e),
                    lW.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }),
                    C(e));
                I(
                    (function (e) {
                        let { selection: t } = e;
                        if (null == t || !ul.ZF.isCollapsed(t)) return null;
                        let [n] = ul.VW.node(e, t.anchor.path);
                        return ul.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                    })(k),
                );
            }, [k, t]),
            _ = i.useCallback((e) => uc(k, e), [k]),
            P = "" !== w.trim();
        i.useEffect(() => v?.(P), [P, v]);
        let T = i.useRef(t);
        i.useLayoutEffect(() => {
            T.current !== t && ((T.current = t), uc(k, iv.getDraft(t)));
        }, [k, t]);
        let R = (0, o.bG)([oV.Ay], () => oV.Ay.isSubmitButtonEnabled),
            [L, $] = i.useState(!1);
        i.useEffect(() => {
            l || $(!1);
        }, [l]);
        let D = i.useRef(null),
            {
                drafts: z,
                addFiles: O,
                pasteFiles: q,
                removeDraft: F,
                settled: U,
                takeRefs: G,
            } = rl({ projectId: t, surface: "chat", onUploadFile: c }),
            K = nF.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && nz(n);
            }),
            V = "" !== w.trim() || z.length > 0 || j || K,
            H = n && V && U,
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
                let { creator: t, collaborators: n } = e3((0, o.bG)([B.Ay], () => B.Ay.getProject(e), [e])),
                    l = (0, o.bG)([o0.default], () => o0.default.getId());
                return i.useMemo(
                    () => [...(null != t ? [t] : []), ...n].filter((e) => e.id !== l && !e.bot),
                    [t, n, l],
                );
            })(t),
            Y = (0, oZ.rU)(t),
            [Q, Z] = i.useState(null),
            [ee, et] = i.useState(0),
            en = i.useMemo(() => (null != E && n ? (0, oQ.OG)(E, E.length) : null), [E, n]),
            el = en?.start ?? null;
        i.useEffect(() => {
            null == el ? Z(null) : (0, oZ.IP)(t);
        }, [el, t]);
        let er = el === Q ? null : en,
            ea = i.useMemo(() => (null == er ? [] : (0, oQ.l$)(J, Y, er.text)), [er, J, Y]),
            ei = er?.text;
        i.useEffect(() => et(0), [ei]);
        let ec = ea.length > 0,
            ed = Math.min(ee, Math.max(0, ea.length - 1)),
            em = i.useId(),
            ef = i.useCallback(
                (e) => {
                    let t = ea[e];
                    null != er &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (un.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                un.b.insertText(e, `${n} `));
                        })(k, er.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ea, er, k],
            ),
            eh = i.useCallback(() => {
                if (!H) return;
                let e = G(),
                    n = K
                        ? (function (e) {
                              let t = nG(e);
                              if (null == t || !nz(t)) return null;
                              let n = t.history.present,
                                  l = rG(e);
                              return (
                                  nB(e, (e) => ({ ...e, history: nI, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, x.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (rO.set(i, s),
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
                                              capture: (t) => (0 === t ? l : rG(e)),
                                              composite: (e) => rD(e, n),
                                              upload: (t) =>
                                                  (0, g.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, g.n6)(e, t.id),
                                              send: (n) => (0, x.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      rF(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (rO.delete(i),
                                                          window.setTimeout(() => {
                                                              (rF(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                s(w, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == up && (up = document.createElement("canvas").getContext("2d"));
                    let i = up;
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
                })(uv(ey.current), eP.current, (0, oQ.Lj)(w));
                ("" !== l && X(l), _(""), Z(null));
            }, [H, K, t, w, s, G, _]),
            ep = i.useCallback(
                (e) => {
                    (e.preventDefault(), eh());
                },
                [eh],
            ),
            eg = i.useCallback(() => {
                null == u || L || ($(!0), u());
            }, [u, L]),
            ex = null == h || "" !== w || !n || r || j ? null : h,
            ej = i.useCallback(
                (e) => {
                    if (ec && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ea.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), et((ed + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ef(ed));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), Z(er?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && l && null != u && !L) {
                        (e.preventDefault(), e.stopPropagation(), eg());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ex) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), _(ex));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eh());
                },
                [eh, d, l, u, L, eg, ex, _, ec, ea.length, ed, ef, er],
            ),
            ev = i.useCallback(
                (e) => {
                    n && q(e);
                },
                [n, q],
            );
        (0, oW.Vo)({
            event: eJ.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ev(t);
            },
        });
        let eb = i.useCallback(
                (e) => {
                    (O(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [O],
            ),
            ey = i.useRef(null),
            ek = i.useRef(null),
            ew = i.useCallback(() => {
                let e = S.current;
                f?.((0, oQ.Lj)(e), () => {
                    S.current === e && _("");
                });
            }, [f, _]),
            eC = i.useCallback((e) => {
                let t = D.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [eN, eA] = i.useState(0),
            [eS, eE] = i.useState(!1);
        i.useEffect(() => {
            if (0 === w.length) return void eE(!1);
            let e = uv(ey.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eA(t);
            }
            eE(!0);
            let t = setTimeout(() => eE(!1), uj);
            return () => clearTimeout(t);
        }, [w]);
        let eI = i.useMemo(() => ({ "--custom-glow-x": `${eN}px` }), [eN]),
            eM = eS ? ` ${um.EB}` : "",
            e_ = r
                ? A.intl.string(N.default.qqlUiW)
                : n
                  ? j
                      ? A.intl.string(N.default.knUjL3)
                      : p
                        ? A.intl.string(N.default.IevBEw)
                        : A.intl.string(l ? N.default["0BJa/0"] : N.default.TEeU7z)
                  : A.intl.string(N.default.zZ9NgM),
            eP = i.useRef(0),
            eT = i.useRef(null),
            e$ = i.useCallback((e) => {
                if ((eT.current?.disconnect(), null == e)) return;
                eP.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eP.current = e.clientWidth;
                });
                (t.observe(e), (eT.current = t));
            }, []),
            eD = i.useId(),
            ez = i.useId(),
            eO = null != ex,
            eq = W ?? ex ?? e_,
            eF = "" === w && "" !== eq;
        return (0, a.jsxs)("form", {
            onSubmit: ep,
            className: um.DA,
            children: [
                ec
                    ? (0, a.jsx)(o4, {
                          id: em,
                          projectId: t,
                          suggestions: ea,
                          selectedIndex: ed,
                          onHover: et,
                          onSelect: ef,
                      })
                    : null,
                z.length > 0 || K
                    ? (0, a.jsxs)("div", {
                          className: um.lN,
                          children: [
                              z.map((e) => (0, a.jsx)(rr, { draft: e, onRemove: F }, e.localId)),
                              K ? (0, a.jsx)(oJ, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${um.wg} ${um.LP}${eM}`, style: eI, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${um.wg} ${um.L3}${eM}`, style: eI, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: um.VA,
                    ref: ey,
                    children: [
                        (0, a.jsx)("input", {
                            ref: D,
                            type: "file",
                            multiple: !0,
                            onChange: eb,
                            className: um.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(es.Y, {
                            targetElementRef: ek,
                            position: "top",
                            align: "left",
                            animation: es.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(eo.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": A.intl.string(A.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(eu.rX, {
                                        children: [
                                            uf.map((e) =>
                                                (0, a.jsx)(
                                                    eu.Dr,
                                                    {
                                                        id: e.id,
                                                        label: A.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => eC(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(eu.Dr, {
                                                      id: "import-project",
                                                      label: A.intl.string(N.default["p/k5i7"]),
                                                      iconLeft: oU.q,
                                                      leadingAccessory: { type: "icon", icon: oU.q },
                                                      action: m,
                                                  })
                                                : null,
                                            null != f
                                                ? (0, a.jsx)(eu.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: A.intl.string(N.default["5HmLrK"]),
                                                      iconLeft: oG.t,
                                                      leadingAccessory: { type: "icon", icon: oG.t },
                                                      action: ew,
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
                                    ref: ek,
                                    type: "button",
                                    className: `${um.Y0} ${um.nu}`,
                                    disabled: !n,
                                    "aria-label": A.intl.string(A.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(oB.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: um.Qu,
                                    }),
                                });
                            },
                        }),
                        eF
                            ? (0, a.jsx)("div", {
                                  ref: e$,
                                  className: um.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(ug, { text: eq, offering: eO && null == W, typed: null != W }),
                              })
                            : null,
                        (0, a.jsx)(eH.A, { id: ez, children: A.intl.string(N.default.ldNl9x) }),
                        (0, a.jsx)(iu.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(oH.A, {
                                editor: k,
                                containerClassName: um.sq,
                                className: um.jp,
                                readOnly: !n,
                                canFocus: n,
                                onChange: M,
                                onBlur: () => I(null),
                                onKeyDown: ej,
                                onPaste: ev,
                                renderExtraElement: ud,
                                "aria-labelledby": ez,
                                "aria-describedby": eF ? eD : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ec,
                                "aria-controls": ec ? em : void 0,
                                "aria-activedescendant": ec ? ((0, o1.aI)(ed) ?? void 0) : void 0,
                            }),
                        }),
                        eF ? (0, a.jsx)(eH.A, { id: eD, children: e_ }) : null,
                        (0, a.jsx)("div", {
                            className: um.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(eR.m, {
                                          text: A.intl.string(N.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${um.Y0} ${um.$E}`,
                                              disabled: L,
                                              onClick: eg,
                                              "aria-label": A.intl.string(N.default.wiguT0),
                                              children: (0, a.jsx)(iy.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : b?.tierSettings != null && null != y
                                      ? (0, a.jsx)(eK, {
                                            settings: b.tierSettings,
                                            tiers: b.tiers,
                                            choices: b.choices,
                                            disabled: !n,
                                            onChange: y,
                                            className: `${um.Y0} ${um.$E}`,
                                            icon: (0, a.jsx)(eL.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        R
                            ? (0, a.jsxs)("div", {
                                  className: um.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: um.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: um.rt,
                                          disabled: !H,
                                          "aria-label": A.intl.string(N.default.rxW2cl),
                                          children: (0, a.jsx)(oK.SendMessageIcon, {
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
    uj = 1500;
function uv(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var ub = n(709753),
    uy = n(540338),
    uk = n(986109);
let uw = i.createContext(null);
function uC(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(uw),
        [d, m] = i.useState(() => oV.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: X()(uk.xk, { [uk.g5]: d, [uk.Qo]: s, [uk.q3]: o }),
        children: n,
    });
}
let uN = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n, justRemixed: l } = e;
            return (null != t && n) || l ? "card" : null;
        },
        dismissal: "app",
    },
    uA = new Map();
function uS(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function uE(e, t) {
    return null != e && e > 0 && e < t;
}
let uI = "ideas",
    uM = "live_behind",
    u_ = "conjureTipDismissals",
    uP = new Set(),
    uT = new Set(),
    uR = 0;
function uL() {
    let e = tH.w.get(u_);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function u$(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return uP.has(((n = e.id), `${t}:${n}`));
        case "app":
            return uL().app[t]?.includes(e.id) === !0;
        case "forever":
            return uL().forever.includes(e.id);
    }
}
function uD(e) {
    return (uT.add(e), () => uT.delete(e));
}
let uz = [12e4, 6e4];
var uO = n(292771);
function uq(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([oV.Ay], () => oV.Ay.useReducedMotion),
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
    let h = r.some((e) => e.leaving);
    return (
        i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [h, r]),
        (0, a.jsx)("div", {
            ref: c,
            className: uO.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: X()(uO.qd, e.leaving ? uO.dv : uO.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var uF = n(443865),
    uU = n(247171);
function uG(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: X()(uU.row, r),
        children: [
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: X()(uU.gutter, uU[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: uU.content, children: i }),
        ],
    });
}
var uB = n(716502);
function uK(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uG, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: uB.Nr,
        children: (0, a.jsxs)("section", {
            className: uB.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: uB.X8,
                          children: (0, a.jsx)(eR.m, {
                              text: A.intl.string(A.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tl.K, {
                                  "aria-label": A.intl.string(A.t.WAI6xu),
                                  icon: en.P,
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
function uV(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: uB.DD,
        children: t,
    });
}
function uH(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: uB.rf,
        children: t,
    });
}
function uW(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: uB.o1, children: t });
}
let uX = {
    ...uN,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(uK, {
            icon: uF.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(uV, { children: A.intl.string(N.default.OJlbhX) }),
                (0, a.jsx)(uH, { children: A.intl.string(N.default["3vJBni"]) }),
                (0, a.jsx)(uW, {
                    children: (0, a.jsx)(et.$, {
                        variant: "primary",
                        size: "sm",
                        text: A.intl.string(N.default["U/bLzU"]),
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
var uJ = n(830205);
function uY(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uG, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: uJ.aK,
        children: (0, a.jsxs)("div", {
            className: uJ.n8,
            children: [
                (0, a.jsx)(Q.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: uJ.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: uJ.X8,
                          children: (0, a.jsx)(eR.m, {
                              text: A.intl.string(A.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tl.K, {
                                  "aria-label": A.intl.string(A.t.WAI6xu),
                                  icon: en.P,
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
var uQ = n(95635);
let uZ = [
    {
        id: uM,
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
                (null != t.publishCta && of(n, t.publishCta)) ||
                uE(e.messagesSinceShown(uM), 10)
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
                ? (0, a.jsx)(uY, {
                      icon: uQ.UploadIcon,
                      onDismiss: l,
                      children: A.intl.format(N.default.fWfeZ8, { onPublish: () => n.run("outdated_notice") }),
                  })
                : null;
        },
    },
    uX,
    {
        id: uI,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(uN) ||
                0 === e.messagesSinceShown(uN.id) ||
                uE(e.messagesSinceShown(uI), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(uY, {
                icon: uF.LightbulbIcon,
                onDismiss: l,
                children: A.intl.format(N.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var u0 = n(817921);
function u1(e) {
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
                    ((s = (0, tm.Ay)(t)),
                    (u = (0, o.bG)([eZ.default], () => eZ.default.getCurrentUser()?.id)),
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
                        uz,
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
                                        if ((0, r0.BL)(n)) return n;
                                        if (!(0, r0.B0)(e, t)) break;
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
                        publishedSinceLastMessage: null != p && 0 === uS(n, p, u),
                        messagesSinceShown: (e) => {
                            let l = uA.get(`${t}:${e}`);
                            return null != l ? uS(n, l, u) : null;
                        },
                        isDismissed: (e) => u$(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(uD, () => uR);
            let { callout: x, hint: j } = (function (e, t, n) {
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
                })(e, g, (e) => u$(e, t)),
                v = [x, j].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of v)
                        0 !== g.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                uA.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                v.map((e) => ({
                    ...e,
                    options: {
                        context: g,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          if (!(null == e.dismissal || u$(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  uP.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = uL();
                                                  tH.w.set(
                                                      u_,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (uR++, uT.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(uZ, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(uC, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: u0.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(uq, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var u2 = n(52133),
    u3 = n(732159),
    u5 = n(888366),
    u4 = n(862026),
    u6 = n(291192);
function u7(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, u4.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: u6.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: u6.Sp,
                children: [
                    (0, a.jsx)("span", { className: u6.q3 }),
                    (0, a.jsxs)("span", {
                        className: u6.g8,
                        children: [
                            (0, a.jsx)(u5.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(Q.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: u6.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: u6.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(ak.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tv.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(u3.u, {
                                                                    ...t,
                                                                    title: A.intl.string(N.default["i+xjZM"]),
                                                                    subtitle: A.intl.string(N.default.fMBZmD),
                                                                    confirmText: A.intl.string(N.default.i5f3Uo),
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
                        ? (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
function u8(e) {
    return (0, o.bG)([B.Ay, tC.A], () => {
        let t = B.Ay.getProject(e);
        return null == t ? "" : (tC.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var u9 = n(951465),
    ce = n(369455);
function ct(e) {
    let { projectId: t, notice: n } = e,
        l = u8(t),
        r = (0, o.bG)([B.Ay, f.A], () => {
            let e = B.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (f.A.getGuild(e.guild_id)?.name ?? null);
        });
    return (0, a.jsxs)(Q.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            A.intl.format(
                !0 === n.channel_skipped
                    ? N.default.ev23Cw
                    : n.update
                      ? N.default.gQzuLC
                      : null == r
                        ? N.default.MOrR29
                        : N.default["/npn7F"],
                { name: l, server: r ?? "" },
            ),
            n.update && null != n.published_revision ? (0, a.jsx)(cn, { projectId: t, notice: n }) : null,
        ],
    });
}
function cn(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tm.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [lI.A, B.Ay],
                    () => {
                        let r = lI.A.getPublishStatus(e),
                            a = B.Ay.getProject(e);
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
                                (0, B.jf)(a),
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
                      ? A.intl.format(N.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    eh.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: ce.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, d.pX)(eJ.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : A.intl.format(N.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = B.Ay.getProject(e),
                                        a = null == r ? null : (0, tm.KL)(r, l);
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
                                null != e && (0, u9.A)(e);
                            },
                        }),
              ],
          });
}
var cl = n(940874),
    cr = n(565645),
    ca = n(187308),
    ci = n(981879);
function cs(e) {
    let { reaction: t } = e;
    return (0, a.jsx)("div", {
        className: ci.H,
        children: (0, a.jsx)(cr.A, {
            emojiId: t.emojiId,
            emojiName: t.emoji,
            animated: t.animated,
            shouldAnimate: !0,
            alt: (0, ca.pW)(t),
            size: "reaction",
        }),
    });
}
n(775443);
var co = n(616e3),
    cu = n(155899),
    cc = n(521981),
    cd = n(491182),
    cm = n(438729),
    cf = n(622868),
    ch = n(448368),
    cp = n(837528),
    cg = n(470964),
    cx = n(715628),
    cj = n(752636),
    cv = n(9842),
    cb = n(589022),
    cy = n(967198),
    ck = n(531685);
let cw = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function cC(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function cN(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function cA(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = cN(e, t),
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
    if (cC(r) && cC(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && cC(cN(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function cS(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([oV.Ay], () => oV.Ay.useReducedMotion),
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
                      for (; a > 0 && cA(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && cw.has(e.charAt(l - 1));) l--;
                                    return cw.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && cA(t, o);) o++;
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
var cE = n(624479),
    cI = n(890377),
    cM = n(180227);
function c_(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: X()(cM.QE, { [cM.Rn]: t }),
              children: (0, a.jsx)(sz.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          sz.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function cP(e) {
    return ts.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: A.intl.string(A.t.JrGD7E), icon: cE.CopyIcon, onClick: () => (0, ts.C)(e) }]
        : [];
}
function cT(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: A.intl.string(N.default.CXtLD2),
                          tooltip: A.intl.string(N.default.DOb1HM),
                          icon: cI.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: A.intl.string(N.default.urZwpN),
                          icon: en.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(c_, { groupStart: n, actions: [...r, ...cP(t)] });
}
function cR(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: A.intl.string(N.default.H8Jfhu), icon: rf.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: nn.BugIcon, onClick: r }];
    return (0, a.jsx)(c_, { groupStart: n, actions: [...i, ...cP(t), ...s] });
}
let cL = (0, su.createChannelRecord)({ id: "conjure-builder", type: eJ.rbe.DM }),
    c$ = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function cD(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: X()(cM.Yq, { [cM.x1]: t }), children: e });
}
function cz(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let cO = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function cq(e, t, n) {
    let { content: l } = (0, cg.A)(e, cO),
        r = i.useMemo(() => ((0, iu.aW)(e.content) ? (0, cc.z2)(oP.U, e, cO).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: cL, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(cm.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, cx.A)(s, r);
}
function cF(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, cp.m)(e, cL, t.usernameProfile, l),
        u = (0, cp.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([cy.A], () => cy.A.getGuildId()),
        d = (0, o.bG)([eZ.default], () => eZ.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = eZ.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(cb.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function cU(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, iu.aW)(n.content)
                          ? (0, cc.z2)(oP.U, n, e).content
                          : (0, cc.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: cM.GV,
                              children: [
                                  (0, a.jsx)(nt.x, {
                                      className: cM.Rj,
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
            [t3.A],
            () => ({
                isReplyAuthorBlocked: t3.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: t3.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, s$.X4)(n),
        m = (0, s$.X4)(t),
        f = cF(n);
    return (0, a.jsx)(ch.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: cL,
        referencedMessage: { state: cv.a.LOADED, message: n },
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
function cG(e) {
    let { message: t, author: n } = e,
        l = cF(t);
    return (0, a.jsx)(cf.Ay, {
        message: t,
        channel: cL,
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
function cB(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, e2.vm)(l),
        c = i.useMemo(() => (0, s$.FT)(u, null), [u]),
        d = i.useMemo(() => ng(t), [t]),
        m = d?.body ?? t,
        f = (0, oQ.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, so.Ay)({ channelId: cL.id, content: m, author: u });
            return (0, ss.rh)({ ...e, timestamp: cz(n, e.timestamp), state: eJ.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              cK,
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
function cK(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = cq(t, l);
    return (0, a.jsx)(cd.A, {
        className: cM.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(cG, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: cM.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: cM.GV,
                              children: [
                                  (0, a.jsx)(nt.x, {
                                      className: cM.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: cM.WO, children: u }),
                      ],
                  }),
        childrenAccessories: cD(i, "" !== l),
        childrenButtons: (0, a.jsx)(cT, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function cV(e) {
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
        { text: m, revealing: f } = cS(t, { streaming: (0, o.bG)([ck.A], () => c && ck.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, s$.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, e2.vm)(g),
        j = i.useMemo(() => (null == r ? null : ng(r.content)), [r]),
        v = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, so.Ay)({ channelId: cL.id, content: j?.body ?? r.content, author: x });
            return (0, ss.rh)({ ...e, id: r.id, timestamp: cz(r.createdAt, e.timestamp), state: eJ.cmJ.SENT });
        }, [r, j, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: cL.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, so.Ay)({ channelId: cL.id, content: "", author: c$ })),
        k = i.useMemo(
            () =>
                (0, ss.rh)({
                    ...y,
                    timestamp: cz(n, y.timestamp),
                    state: eJ.cmJ.SENT,
                    ...(null != b ? { type: eJ.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        C = i.useMemo(
            () => (0, cj.A)({ message: k, channel: cL, author: p, guildId: void 0, isGroupStart: u }),
            [k, p, u],
        ),
        N = cq(w, m, cM.OS);
    return (0, a.jsxs)("div", {
        className: cM.$4,
        "data-replying": null != v ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(cd.A, {
                className: cM.yE,
                author: p,
                childrenRepliedMessage:
                    null == v
                        ? null
                        : (0, a.jsx)(cU, { baseMessage: k, referenced: v, selected: j?.label, onJumpToReplied: s }),
                childrenHeader: C,
                childrenMessageContent: N,
                childrenAccessories: cD(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: cM.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(s1.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function cH(e) {
    let { onSelect: t, onClose: n = eW.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(eo.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": A.intl.string(A.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eu.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eu.Dr, {
                          id: "restore-version",
                          label: A.intl.string(N.default.H8Jfhu),
                          icon: rf.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eu.Dr, { id: "view-trace", label: "View Trace", icon: nn.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cW(e) {
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
        j =
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
        v = null != j && null != g ? () => cX(j, g) : void 0,
        b =
            ((t =
                n1() && "assistant" === x.role && (0, r0.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [co.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : co.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((nQ = { projectId: e, traceId: t }), [...nY])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(uC, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != v || null != y
                ? (e) => {
                      var t, n, l;
                      return (
                          (t = e),
                          (n = v),
                          (l = y),
                          void (0, eW.jA)(t, (e) => (0, a.jsx)(cH, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(cV, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(cR, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: v,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(oD, {
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
                              cX(
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
function cX(e, t) {
    (0, cu.F)({ onConfirm: () => t(e) });
}
var cJ = n(288539);
function cY(e, t, n) {
    return (0, a.jsx)(cJ.A, { userId: e, content: `@${t}` }, n);
}
function cQ(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => (0, e2.Y_)(l), [l]);
            let r = (0, o.bG)([eZ.default], () => (null == l ? null : eZ.default.getUser(l)), [l]),
                a = (0, e0.tx)(r),
                s = u8(e),
                u =
                    (0, o.bG)([f.A], () => (null == t.guild_id ? null : f.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? A.intl.string(N.default.R1tPlP),
                c = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == c
                        ? A.intl.format(N.default.Lwsrhg, { app: s, server: u })
                        : A.intl.format(N.default.qqePfT, { app: s, server: u, ...c });
                case "bot_removed":
                    return null == c
                        ? A.intl.format(N.default.mT7EQG, { app: s, server: u })
                        : A.intl.format(N.default["lA/crI"], { app: s, server: u, ...c });
                case "preview_bot_removed":
                    return null == c
                        ? A.intl.format(N.default["4LVIeo"], { app: s, server: u })
                        : A.intl.format(N.default.YJOV6D, { app: s, server: u, ...c });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == c
                        ? A.intl.format(N.default["4VQfid"], { channel: e, server: u })
                        : A.intl.format(N.default.RlMIJN, { channel: e, server: u, ...c });
                }
                case "remixed":
                    return A.intl.format(N.default.mHCXtm, { source: t.source_name });
            }
        })(n, l, cY),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([tf.A], () => null != t && t.length > 0 && ir({ keys: t }, tf.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: A.intl.string(N.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(Q.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(is, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let cZ = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    rq.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, iu.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cB, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(o_.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(oY, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(cs, { reaction: o.agentReaction })
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
                                    return (n) => (0, cl.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cV, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(o_.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(o$, {
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
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cV, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(ct, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cV, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(cQ, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(u7, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(o$, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(o$, {
                            projectId: l,
                            steps: c0,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(cW, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, u2.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, u2.A)(e.row, t.row, ["message"]) &&
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
                (0, u2.A)(e.replyTo, t.replyTo) &&
                (0, u2.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    c0 = [],
    c1 = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    c2 = new WeakMap();
function c3(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function c5(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let c4 = i.memo(function (e) {
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
            scrollerRef: h,
            stickToBottomRef: p,
            pinned: g,
            onUnpin: j,
            handleRef: v,
            onShowsLatestChange: b,
        } = e,
        y = i.useRef(null),
        [k, w] = i.useState(null),
        C = i.useCallback((e) => {
            ((y.current = e), w(e));
        }, []),
        [S, E] = i.useState(null),
        I = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(I.current), []);
    let M = i.useCallback((e) => {
            (E(e), window.clearTimeout(I.current), (I.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        _ = (0, o.bG)([lI.A], () => lI.A.getPublishStatus(t)),
        P = (0, o.bG)([eZ.default], () => eZ.default.getCurrentUser()?.id),
        T = i.useMemo(() => {
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
                                        let t = (0, rZ.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = c2.get(r);
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
                        let a = !(0, r0.BL)(e),
                            i = ik({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, rZ.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, rZ.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && c1.test(n.prose.content)) m = !0;
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
                                        turnActive: r1(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = c1.test(e.content ?? "");
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
                    (c2.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return om(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, _)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = oh.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), oh.set(t, n)), n);
                      })),
                m,
            );
        }, [n, _, m]),
        R = i.useMemo(() => T.map((e) => e.key), [T]),
        [L, $] = i.useState(null),
        D = (function (e, t, n) {
            if (null == t) return c3(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : c5(e, t.endKey, t.end - 1) + 1,
                a = c5(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), c3(e, a, r));
        })(R, L, g),
        z = i.useRef(D),
        O = i.useRef(R),
        q = i.useRef(T),
        F = i.useRef(null),
        U = i.useRef(null),
        G = i.useRef(new Set()),
        B = i.useCallback(() => {
            let e = h.current?.getScrollerNode(),
                t = y.current;
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
            F.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [h]),
        K = i.useCallback(() => {
            let e = h.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), c3(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), c3(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? c3(e, i, t.end) : null;
            })(O.current, z.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: p.current,
            });
            "older" === n ? (0, x.loadOlderHistory)(t) : null != n && $(n);
        }, [h, p, t]);
    i.useImperativeHandle(
        v,
        () => ({
            handleScroll() {
                (B(),
                    $((e) => {
                        let t = z.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    K());
            },
            recordAnchor: B,
            showLatest(e) {
                ((U.current = e ?? null), $(null));
            },
        }),
        [B, K],
    );
    let V = i.useRef(null),
        H = i.useCallback(
            (e) => {
                var n;
                let l;
                V.current = null;
                let r = y.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), $(z.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = q.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, x.loadOlderHistory)(t) && (V.current = e);
                    return;
                }
                (j(),
                    (U.current = () => {
                        (y.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    $(((n = O.current), c3(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, j, t],
        );
    (i.useEffect(() => {
        let e = V.current;
        null != e && H(e);
    }, [T, H]),
        i.useLayoutEffect(() => {
            if (null == k) return;
            let e = k.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    null != l && l !== e && ((e = l), p.current ? h.current?.scrollToBottom() : B());
                });
            return (t.observe(k), () => t.disconnect());
        }, [k, B, h, p]));
    let W = null == D.endKey;
    (i.useEffect(() => b?.(W), [W, b]),
        i.useLayoutEffect(() => {
            ((z.current = D), (O.current = R), (q.current = T));
        }),
        i.useLayoutEffect(() => {
            let e = h.current?.getScrollerNode(),
                t = y.current;
            if (null != e && null != t) {
                let n = F.current;
                if (p.current) h.current?.scrollToBottom();
                else if (null != n) {
                    let l = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === n.key,
                        ),
                        r = null == l ? 0 : l.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let l = U.current;
                ((U.current = null), l?.(), B(), K());
            }
            G.current = new Set(R);
        }, [T, R, D.start, D.end, h, p, B, K]));
    let J = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, r0.BL)(n) || "plan_implemented" === n.kind) return null;
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
        Z = i.useMemo(
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
                : (0, r0.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        er = (0, o.bG)([tf.A], () => tf.A.getSettings(t)?.secrets, [t]),
        ea = (0, ub.WT)(t),
        ei = i.useMemo(() => (0, oE.Mv)(n, er), [n, er]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: X()(uk.x7, uk.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: uk.Ub, children: (0, a.jsx)(el.y, {}) }),
            });
        let e = "unavailable" === l ? N.default.Td4Sf4 : N.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: uk.x7,
            children: (0, a.jsx)(uC, { role: "assistant", children: (0, a.jsx)(cV, { content: A.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(uw.Provider, {
        value: G,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: uk.x7,
            children: [
                T.slice(D.start, D.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cZ,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && S === n.id,
                                currentUserId: "user" === e.kind ? P : void 0,
                            },
                            e.key,
                        );
                    let l = n === et;
                    return (0, a.jsx)(
                        cZ,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? ee.get(n.in_reply_to) : void 0,
                            onJumpTo: H,
                            planVersion: Y.get(n.render_id),
                            pickedIdeaIds: Z.get(n.render_id),
                            secretRequestAwaiting: l ? en : void 0,
                            secretRequestStatus: ei.get(n.render_id),
                            settingsFloating: n.id === d,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === J ? c : void 0,
                            onRestoreVersion: f,
                        },
                        e.key,
                    );
                }),
                W
                    ? ea.map((e) =>
                          (0, a.jsx)(
                              uC,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(cV, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(uy.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && W
                    ? (0, a.jsx)(uC, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(cV, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(Q.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: A.intl.string(N.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                W ? (0, a.jsx)(u1, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var c6 = n(731084),
    c7 = n(823376),
    c8 = n(187447);
function c9(e) {
    let { activity: t, id: n } = e,
        l = (0, rQ.j)(),
        { text: r, revealing: s } = cS(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: c8.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(rJ.Ch, {
                ref: o,
                className: c8.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: X()(oL.PT, c8.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: sx.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var de = n(53659);
function dt(e) {
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
        h = i.useRef(null),
        p = i.useId(),
        [g, x] = i.useState(null),
        j = (0, c6.xu)({
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
        v = A.intl.string(j),
        b = j === c6.kx["0"],
        [y, k] = i.useState(m ?? v),
        w = (0, rQ.j)();
    (l || (0, c6.E4)(v, y) || (!w && !b)) && y !== v && k(v);
    let C = i.useRef(v);
    (i.useEffect(() => {
        C.current = v;
    }, [v]),
        i.useEffect(() => {
            f?.(y);
        }, [y, f]));
    let S = i.useRef(null),
        E = i.useRef(y);
    i.useEffect(() => {
        E.current = y;
    }, [y]);
    let I = i.useRef(b),
        M = i.useRef(0);
    (i.useEffect(() => {
        ((I.current = b), !b && (0, c6.E8)(E.current) && k(C.current));
    }, [b]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function n() {
                I.current
                    ? ((M.current = (0, c6.E8)(E.current) ? M.current + 1 : 0), k((0, c6.Ov)(M.current)))
                    : C.current !== E.current
                      ? k(C.current)
                      : S.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, c6.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [w]));
    let _ = null != t && "" !== t.text,
        P = t?.session ?? null,
        T = _ && null != P && g === P,
        R = i.useCallback(() => {
            _ && null != P && x((e) => (e === P ? null : P));
        }, [_, P]),
        L = i.useCallback(() => x(null), []);
    return (0, a.jsx)(es.Y, {
        targetElementRef: h,
        position: "top",
        align: "left",
        shouldShow: T,
        onRequestClose: L,
        renderPopout: () => (0, a.jsx)(c9, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(eh.D, {
                innerRef: h,
                className: X()(de.hF, _ && de.Xd),
                "aria-label": A.intl.string(
                    r
                        ? N.default.qqlUiW
                        : j === N.default.j8tmjK
                          ? N.default.j8tmjK
                          : b
                            ? c6.kx["0"]
                            : N.default["Uuj/gh"],
                ),
                "aria-expanded": T,
                "aria-describedby": T ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": A.intl.string(j),
                onClick: R,
                children: [
                    (0, a.jsx)("span", {
                        className: de.bl,
                        children: (0, a.jsx)(c7.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: de.xu,
                        "aria-hidden": !!u || !!b || void 0,
                        children: w
                            ? (0, a.jsx)(ey.o, {
                                  ref: S,
                                  text: y,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: c6.vg,
                                  delay: null,
                                  className: de.yE,
                              })
                            : (0, a.jsx)(Q.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: de.yE,
                                  children: y,
                              }),
                    }),
                ],
            }),
    });
}
var dn = n(85428),
    dl = n(885574),
    dr = n(242779),
    da = n(436804);
function di(e) {
    return e.toLocaleString();
}
function ds(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: da.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: da.mf,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [di((0, dr.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(Q.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    di(n.input_tokens),
                    " in \xb7 ",
                    di(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${di(n.cache_creation_input_tokens)} cache write \xb7 ${di(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function du(e) {
    let { project: t } = e,
        n = (0, dr.wU)(t.compaction),
        l = (0, dr.wU)(t.classifier),
        r = (0, dr.wV)(t.orchestrator, t.codegen),
        i = (0, dr.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: da.si,
        role: "dialog",
        "aria-label": A.intl.string(N.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: da.Q$,
                children: (0, a.jsxs)("div", {
                    className: da.mf,
                    children: [
                        (0, a.jsxs)(Q.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [di((0, dr.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(Q.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(ds, { label: A.intl.string(N.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(ds, { label: A.intl.string(N.default.ANCEo3), usage: n }),
            (0, a.jsx)(ds, { label: A.intl.string(N.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: da.mf,
                children: [
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: A.intl.string(N.default["8OUg09"]),
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, dr.sj)(i) ? "\u2014" : `${Math.round(100 * (0, dr.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function dc(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(du, { project: t }),
        children: (e) =>
            (0, a.jsx)(eh.D, {
                innerRef: n,
                className: da.Y$,
                "aria-label": A.intl.string(N.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(dl.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var dd = n(997421);
function dm(e) {
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
        p = (0, n2.Zv)(t),
        g = (0, o.bG)([lI.A], () => lI.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, j] = i.useState(null),
        v = i.useCallback(
            (e) =>
                j(
                    (0, c6.E8)(e) || e === A.intl.string(N.default.mKK6wB) || e === A.intl.string(N.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        b = null == f ? null : (0, c6.uc)(f),
        y = null != s,
        k = s ?? (n ? l : void 0),
        w = n || r || y || !0 === m;
    return (0, a.jsxs)("div", {
        className: dd.jf,
        children: [
            (0, a.jsxs)("div", {
                className: dd.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    w || u || p || g
                        ? (0, a.jsx)(dt, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: y,
                              recalling: u,
                              controlling: p,
                              publishPending: g && w,
                              publishing: g,
                              spoken: x,
                              onSpokenChange: v,
                          })
                        : null,
                    null != k ? (0, a.jsx)(dn.A, { startedAt: k }) : null,
                ],
            }),
            null != k ? (0, a.jsx)(dn.L, { startedAt: k }) : null,
            null == f || null == b
                ? null
                : (0, a.jsxs)("span", {
                      className: dd.BP,
                      children: [
                          (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": b.aria,
                              children: b.text,
                          }),
                          (0, a.jsx)(dc, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": A.intl.formatToPlainString(N.default["tCo+ZM"], { status: (0, c6.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: dd.XF,
                      children: (0, c6.Db)(h),
                  }),
        ],
    });
}
let df = ["wheel", "touchstart", "pointerdown", "keydown"];
var dh = n(698638),
    dp = n(608711);
let dg = [A.intl.string(N.default["9w+Chc"]), A.intl.string(N.default.WAvmdq), A.intl.string(N.default.SKsrzl)];
function dx(e) {
    let t,
        n,
        { projectId: l, restoreState: r, onRestoreVersion: s, onImportProject: c } = e,
        d = (0, o.bG)([e1.A], () => e1.A.getMessages(l), [l]),
        m = (0, o.bG)([x.default], () => x.default.getConnState(l), [l]),
        h = (0, o.bG)([e1.A], () => e1.A.getProjectUsage(l), [l]),
        p = (0, o.bG)([e1.A], () => e1.A.getThinkingActivity(l), [l]),
        j = (0, o.bG)([e1.A], () => e1.A.isCompacting(l), [l]),
        v = (0, o.bG)([e1.A], () => e1.A.isSaving(l), [l]),
        b = (0, o.bG)([a9.A], () => a9.A.getModelSettings(l), [l]),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        {
            stickToBottomRef: C,
            pinned: S,
            atBottom: E,
            unpin: I,
            releasePinHold: M,
            showsLatest: _,
            showsLatestRef: P,
            handleShowsLatestChange: T,
            updatePin: R,
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
                    for (let e of df) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of df) t.removeEventListener(e, u);
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
        })(k),
        L = i.useCallback(() => {
            function e() {
                let e = y.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (M(), P.current ? e() : w.current?.showLatest(e));
        }, [M, P]),
        $ = i.useCallback(() => {
            (R(), w.current?.handleScroll());
        }, [R]);
    (i.useLayoutEffect(() => {
        let e = y.current;
        if (null == e) return;
        let t = k.current?.getScrollerNode(),
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
                r && (C.current ? k.current?.scrollToBottom() : w.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [C]),
        i.useEffect(() => {
            (0, x.ensureConnection)(l);
        }, [l]),
        (0, ic.E1)(l, (0, rQ.j)()));
    let D = nE(l),
        z = (function (e) {
            let t = (0, tm.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, o.bG)([f.A], () => (null == n ? null : (f.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: A.intl.format("channel" === s ? N.default["1cm4fj"] : N.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(l),
        O =
            ((t = (0, o.bG)([it.A], () => it.A.getFailure(l))),
            (n = i.useCallback(() => (0, il.CM)(l), [l])),
            null == t
                ? null
                : {
                      message: A.intl.format(N.default.Up6Ssw, { reason: t }),
                      retry: { text: A.intl.string(N.default["ywA+ET"]), onClick: n },
                  }),
        q = (0, o.bG)([it.A], () => it.A.getSetupStartedAt(l), [l]),
        F = i.useCallback(
            (e, t) => {
                (0, x.sendUserMessage)(l, e, t);
            },
            [l],
        ),
        U = i.useCallback(
            (e, t, n) => {
                let r = n ?? F;
                0 === D.annotations.length
                    ? r(e, t)
                    : (r(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => nc(e.comment)),
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
                                      a.push(`${t + 1}. ${nf(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: D.annotations, metaComment: e, context: D.context }),
                          t,
                      ),
                      nC(l));
            },
            [D, F, l],
        ),
        G = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of rO)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, x.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = rO.get(e);
                            (rO.delete(e), rF(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(l) ||
                e1.A.isThinking(l)) &&
                (0, x.interruptTurn)(l);
        }, [l]),
        B = i.useCallback((e) => l8(l, e.implementation_prompt), [l]),
        [K, V] = (function (e) {
            let [t, n] = i.useState(() => ib(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? ib(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(l),
        H = i.useCallback(() => F(A.intl.string(N.default["t5CN3+"])), [F]),
        W = i.useCallback((e, t, n) => l8(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        X = i.useCallback((e) => (0, ie.X)(l, e), [l]),
        J = i.useCallback((e) => (0, g.vX)(l, e), [l]),
        Y = i.useCallback((e) => rn(l, "chat", Array.from(e), J), [l, J]),
        Z = i.useCallback(() => l8(l, A.intl.string(N.default.Zc7gML)), [l]),
        ee = r?.status === "restoring",
        el = "open" === m && !ee,
        er = d[d.length - 1],
        ea = null != er && "assistant" === er.role && null != er.proposal,
        [ei, es] = i.useState(null),
        eo = er?.clarification != null && er.clarification.id !== ei ? er.clarification : null,
        eu = i.useCallback(() => {
            null != eo && es(eo.id);
        }, [eo]),
        [ec, ed] = i.useState(null),
        em = (function (e) {
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
                                summary: A.intl.string(N.default["o2++BO"]),
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
        ef = er?.appBuildRequest != null && (0, r0.BL)(er) && er.appBuildRequest.id !== ec ? er.appBuildRequest : null,
        eh = em.request ?? (null == eo ? ef : null),
        ep = null == em.request ? eo : null,
        eg = null != eh && eh === em.request,
        { close: ex, sent: ej } = em,
        ev = em.request?.id,
        eb = i.useCallback(() => {
            eg ? ex() : null != eh && ed(eh.id);
        }, [eh, eg, ex]),
        ey = i.useCallback(
            (e) => {
                (null != ev && ej(ev),
                    (0, u.P0)({
                        text: A.intl.formatToPlainString(N.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [ev, ej],
        ),
        ek = (0, o.bG)([tf.A], () => tf.A.getSettings(l), [l]),
        [ew, eC] = i.useState(null),
        eN =
            null != er &&
            "assistant" === er.role &&
            null != er.settingsRequest &&
            (0, r0.BL)(er) &&
            er.id !== ew &&
            ir(er.settingsRequest, ek)
                ? er
                : null,
        eA = null == em.request ? eN : null,
        eS = eA?.settingsRequest ?? null,
        eE = i.useCallback(() => {
            null != eN && eC(eN.id);
        }, [eN]),
        eI = null != eS,
        [eM, e_] = i.useState(null),
        eP = ep?.id ?? eh?.id ?? eA?.id,
        eT = null != eo || null != eh || null != eN;
    i.useLayoutEffect(() => {
        let e = k.current?.getScrollerNode(),
            t = eM?.firstElementChild;
        if (null == eM || null == e || !(0, lB.vq)(t, HTMLElement) || null == eP) return;
        function n() {
            C.current && k.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eM.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eM, eP, k, C]);
    let eL = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, o.bG)([e1.A], () => e1.A.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, o.bG)([e1.A], () => e1.A.isHistoryUnavailable(l), [l]),
            connState: m,
        }),
        e$ = "loading" === eL && 0 === d.length,
        eD = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return dg[e % dg.length];
        }, [l]),
        ez = ea ? A.intl.string(N.default.Zc7gML) : "greeting" === eL && 0 === d.length ? eD : null,
        eO = i.useMemo(() => {
            for (let e = d.length - 1; e >= 0; e--) {
                let t = d[e];
                if ("assistant" === t.role && !(0, r0.BL)(t)) return t;
            }
        }, [d]),
        eq = null != eO,
        eF = null != eO ? (0, io.S)(eO) : void 0,
        eU = ea && el ? Z : void 0,
        eG = i.useCallback(() => l8(l, A.intl.string(N.default.EMgIuY)), [l]),
        [eB, eK] = i.useState(null),
        [eV, eH] = i.useState(eq);
    (eV !== eq && (eH(eq), eq || eK(null)),
        i.useEffect(() => {
            if (!eq) return;
            let e = k.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eK(null)
                        : eK(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eq, eO?.steps, _]));
    let eW = _ ? eB : "bottom",
        eX = i.useMemo(() => (null != eO ? (0, r2.b9)(eO.steps) : ""), [eO]),
        eJ = i.useMemo(() => (null != eO ? ((0, rZ.lt)(eO.steps) ?? eO.todos) : void 0), [eO]),
        eY = eO?.provisionalTodo,
        eQ = null != eO && r1(eO),
        eZ = i.useMemo(() => {
            var e;
            return null != eO ? ((e = eO.steps), (0, iS.k)((0, rZ.Jf)(e, !0).tasks)) : void 0;
        }, [eO]);
    return (0, a.jsxs)("section", {
        ref: y,
        "data-conjure-chat": !0,
        className: dp.TE,
        children: [
            el
                ? (0, a.jsx)(rY.A, {
                      title: A.intl.string(N.default.gy7byi),
                      description: A.intl.string(N.default["dkv/WO"]),
                      icons: dh.ir,
                      onDrop: Y,
                  })
                : null,
            (0, a.jsx)(ac, {
                onJumpToActivity: L,
                line: eX,
                placement: eq && "top" === eW ? "top" : null,
                todos: eJ,
                todosLive: eQ,
                provisionalTodo: eY,
                agents: eZ,
            }),
            (0, a.jsxs)("div", {
                className: dp.JX,
                children: [
                    (0, a.jsx)(rJ.Ch, {
                        ref: k,
                        onScroll: $,
                        scrollbarGutter: e$ ? "both-edges" : "stable",
                        className: [dp.N$, E ? null : dp.hB, eI ? dp.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(iu.Fu.Provider, {
                            value: l,
                            children: (0, a.jsx)(c4, {
                                projectId: l,
                                messages: d,
                                emptyState: eL,
                                floatingSettingsMessageId: eN?.id,
                                liveClarificationId: ep?.id,
                                onPickIdea: el ? B : void 0,
                                onAskForIdeas: el ? H : void 0,
                                draftHasText: K,
                                onApprovePlan: el ? eG : void 0,
                                onRestoreVersion: ee || eq ? void 0 : s,
                                scrollerRef: k,
                                stickToBottomRef: C,
                                pinned: S,
                                onUnpin: I,
                                handleRef: w,
                                onShowsLatestChange: T,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: dp.NJ,
                        children: (0, a.jsx)(dm, {
                            projectId: l,
                            thinking: eq,
                            turnStartedAt: eF,
                            restoring: ee,
                            remixStartedAt: q,
                            recalling: e$,
                            thinkingActivity: p,
                            compacting: j,
                            saving: v,
                            projectUsage: h,
                            connState: m,
                        }),
                    }),
                    null == ep
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e_,
                              className: eI ? `${dp.B5} ${dp.J9}` : dp.B5,
                              children: (0, a.jsx)(
                                  a8,
                                  { projectId: l, clarification: ep, onSubmit: el ? W : void 0, onDismiss: eu },
                                  ep.id,
                              ),
                          }),
                    null == eh
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e_,
                              className: dp.B5,
                              children: (0, a.jsx)(
                                  av,
                                  { projectId: l, request: eh, canSend: el, onDismiss: eb, onSent: eg ? ey : void 0 },
                                  eh.id,
                              ),
                          }),
                    null == eS
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == ep && null == eh ? e_ : void 0,
                              className: dp.B5,
                              children: (0, a.jsx)(is, { projectId: l, request: eS, onDismiss: eE }, eA?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: dp.Jx,
                children: [
                    (0, a.jsx)(ac, {
                        onJumpToActivity: L,
                        line: eX,
                        placement: eq && "bottom" === eW ? "bottom" : null,
                        todos: eJ,
                        todosLive: eQ,
                        provisionalTodo: eY,
                        agents: eZ,
                    }),
                    0 === D.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: dp.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: A.intl.formatToPlainString(N.default["7b49dS"], {
                                          count: D.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: A.intl.string(N.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(et.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: A.intl.string(N.default["/zOv9+"]),
                                      onClick: () => nC(l),
                                  }),
                              ],
                          }),
                    null == O
                        ? null
                        : (0, a.jsx)("div", {
                              className: dp.qB,
                              children: (0, a.jsx)(t0.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: O.message,
                                  action: O.retry,
                              }),
                          }),
                    null == z
                        ? null
                        : (0, a.jsxs)("div", {
                              className: dp.Db,
                              children: [
                                  (0, a.jsx)(t0.w, { type: "warning", role: "status", message: z.message }),
                                  (0, a.jsx)("div", {
                                      className: dp.jU,
                                      children: (0, a.jsx)(eR.m, {
                                          text: A.intl.string(A.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tl.K, {
                                              "aria-label": A.intl.string(A.t.WAI6xu),
                                              icon: en.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: z.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(ux, {
                        projectId: l,
                        canSend: el,
                        running: eq,
                        restoring: ee,
                        onSend: U,
                        hasPendingContext: D.annotations.length > 0,
                        onInterrupt: el ? G : void 0,
                        onUploadFile: J,
                        onImport: c,
                        onSendToOtherProjects: eT ? void 0 : em.open,
                        onApprove: eU,
                        suggestion: ez,
                        questionOpen: eT,
                        modelSettings: b,
                        onModelSettingsChange: X,
                        onDraftHasTextChange: V,
                    }),
                ],
            }),
        ],
    });
}
var dj = n(761508),
    dv = n(933294),
    db = n(207438),
    dy = n(683438);
function dk(e, t) {
    return String(e).padStart(t, "0");
}
function dw(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${dk(l.getHours(), 2)}:${dk(l.getMinutes(), 2)}:${dk(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${dk(l.getMilliseconds(), 3)}` : r;
}
var dC = n(667931);
let dN = {
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
    dA = { running: "Running", ok: "Done", error: "Failed" };
function dS(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function dE(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function dI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function dM(e) {
    return dE(e.count > 1 ? e.totalMs : e.end - e.start);
}
let d_ = ["Arguments", "Result", "Usage", "Details"];
function dP(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function dT(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function dR(e) {
    let t = (0, dC.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, dC.lp)(e) ? "interrupted" : "still running";
}
function dL(e) {
    return [dw(new Date(e.started_at).toISOString()) ?? "", dI(e.spans.length), (0, dC.Sj)((0, dC.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function d$(e) {
    let t = (0, dC.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, dC.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += dD(r, "in")),
                (l.output += dD(r, "out")),
                (l.cacheRead += dD(r, "cache_read")),
                (l.cacheWrite += dD(r, "cache_write")),
                (l.costUsd += dD(r, "cost_usd"))));
    }
    let r = dC.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function dD(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var dz = n(738188),
    dO = n(430993),
    dq = n(364840),
    dF = n(224640),
    dU = n(20742);
let dG = { collapsed: new Set(), revealed: new Set() };
var dB = n(872892);
let dK = {
    op: dB.Q,
    model: dB.i3,
    tool: dB.dH,
    setup: dB.kc,
    worktree: dB.Qx,
    sandbox: dB.QH,
    build: dB.F1,
    platform: dB.Op,
    other: dB.fv,
};
function dV(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      dI(t.calls, "model call"),
                      `${dS(t.input)} in`,
                      `${dS(t.output)} out`,
                      `${dS(t.cacheRead)} cache read`,
                      `${dS(t.cacheWrite)} cache write`,
                      dT(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: dB.M1,
        children: [
            (0, a.jsx)("div", {
                className: dB.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${dB.DJ} ${dK[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: dB.o1,
                children: dC.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${dE(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: dB.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${dB.nf} ${dK[e]}` }),
                                (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: dN[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(Q.E, {
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
                : (0, a.jsx)(Q.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function dH(e) {
    return `conjure-perf-trace-${e}`;
}
function dW(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: dB.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${dB.p0} ${s + o > 85 ? dB.EU : dB.jh}`,
                children: i,
            }),
        ],
    });
}
function dX(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? eT._ : lg.a,
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
    return (0, a.jsxs)(eh.D, {
        tag: "div",
        role: "treeitem",
        id: dH(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${dB.$y} ${r ? dB.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: dB.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(eh.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: dB.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: dB.YJ }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: dB.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${dB.nf} ${dK[t.category]}` }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: dB.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: dB.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: dB.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(dz.WarningIcon, { size: "xs", color: "currentColor", className: dB.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dW, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${dB.M0} ${dB.Nh}`
                    : t.running
                      ? `${dB.M0} ${dB.rF}`
                      : `${dB.M0} ${dK[t.category]}`,
                duration: dM(t),
            }),
        ],
    });
}
function dJ(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(eh.D, {
        tag: "div",
        role: "treeitem",
        id: dH(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${dB.$y} ${l ? dB.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: dB.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: dB.ai,
                        children: (0, a.jsx)(eT._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: dB.U9 }),
                    (0, a.jsx)("span", { className: `${dB.nf} ${dB.dL}` }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: dB.MQ,
                        children: dI(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dW, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${dB.M0} ${dB.ab} ${dB.dL}`,
                duration: dE(t.totalMs),
            }),
        ],
    });
}
function dY(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(Q.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: dB._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: dB.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${dB.nf} ${dK[t.category]}` }),
                          (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [dP("Start", `+${dE(e.start)}`), dP("Duration", dM(e))];
                      e.count > 1
                          ? t.push(
                                dP("Calls", String(e.count)),
                                dP("Longest call", dE(e.maxMs)),
                                dP("Spread over", dE(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(dP("Self time", dE(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(dP("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(dP("Notes", l.join(", "))),
                          null != e.span.error && t.push(dP("Error", e.span.error)));
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
                              s = "cost_usd" === t ? dT(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), dP(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...d_.flatMap((e) => {
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
                                      : (0, a.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: dB.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(Q.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(Q.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: dB.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(Q.E, {
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
function dQ(e) {
    let { trace: t } = e,
        n = i.useMemo(() => d$(t), [t]);
    return (0, a.jsx)(dV, { stats: n });
}
function dZ(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, dC.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? dG : (0, dC.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, dC.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, dC.x7)(t)), l((n) => (0, dC._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, dC.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dC.IE)(t, e);
                        null != n && l((e) => (0, dC.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dC.IE)(t, e);
                        null != n && l((e) => (0, dC.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, dC.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, dC.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, dC.hB)(t));
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
        f = (0, dC.dj)(t),
        h = i.useMemo(() => (0, dC.nF)(f), [f]),
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
                    null != t && (u(t.key), document.getElementById(dH(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(dO.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: dB.z,
                        children: [
                            (0, a.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: dR(t),
                            }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: dL(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${dI(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dQ, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: dB.KE,
                        children: [
                            (0, a.jsx)(et.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Time sinks",
                                onClick: n.reset,
                            }),
                            (0, a.jsx)(et.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(et.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(Q.E, {
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
                        "aria-activedescendant": null == o ? void 0 : dH(o),
                        className: dB.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: g,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dB.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: dB.So,
                                        children: (0, a.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: dB.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                Q.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${dB.io} ${(e / f) * 100 > 85 ? dB.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : dE(e),
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
                                          dX,
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
                                    : (0, a.jsx)(dJ, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(dq.j, { children: (0, a.jsx)(dY, { node: s }) }),
        ],
    });
}
function d0(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([co.A], () => co.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(dF.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(dU.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(dO.c, {
                      children: (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dZ, { trace: i }),
        ],
    });
}
let d1 = { running: dB.Vf, ok: dB.mo, error: dB.Sr };
function d2(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${dB.Om} ${d1[t]}`, role: "img", "aria-label": dA[t] });
}
function d3(e, t) {
    (0, tv.openModal)((n) => (0, a.jsx)(d0, { ...n, projectId: e, traceId: t }));
}
function d5(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => d3(t, n.id), [t, n.id]);
    return (0, a.jsxs)(eh.D, {
        className: dB.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: dB.sU,
                children: [
                    (0, a.jsx)(d2, { status: (0, dC.lQ)(n) }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: dB._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: dR(n),
                    }),
                ],
            }),
            (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: dL(n) }),
            null == l
                ? null
                : (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function d4(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            y(
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
    return (0, a.jsx)(es.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(eo.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(eu.rX, {
                    children: (0, a.jsx)(eu.Dr, {
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
            return (0, a.jsx)(tl.K, {
                ...e,
                buttonRef: l,
                icon: tr.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function d6(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([co.A], () => co.A.getTimingTraces(t), [t]),
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
                    let t = e.map(d$);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: dC.BF.map((e) => ({
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
              className: dB.Ie,
              children: [
                  (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(Q.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: dB.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: dB.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: dB.fH,
                              children: (0, a.jsx)(dy.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(d4, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(rJ.Ch, {
                      className: dB.XG,
                      children: [
                          (0, a.jsx)(dV, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(Q.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: dB.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(d5, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function d7(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function d8(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function d9(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function me(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function mt(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function mn(e) {
    return A.intl.string("preview" === e ? N.default["2yLYlG"] : N.default.eiAi57);
}
let ml = ["all", "preview", "stable", "web"];
function mr(e) {
    switch (e.reason) {
        case "local":
            return A.intl.string(N.default.mUeKML);
        case "unconfigured":
            return A.intl.string(N.default.bGefb5);
        case "unauthorized":
            return A.intl.string(N.default.KLx6Bb);
        default:
            return null != e.detail
                ? A.intl.formatToPlainString(N.default.t09Q6q, { detail: e.detail })
                : A.intl.string(N.default["t+tG59"]);
    }
}
function ma(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : A.intl.formatToPlainString(N.default["XO/bN4"], {
              p50: d7(e.memory_p50_bytes ?? 0),
              p999: d7(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let mi = {
    db: () => N.default["7l+DFG"],
    db_preview: () => N.default.FAuffi,
    runtime: () => N.default["Gkl+ab"],
    runtime_preview: () => N.default.ynpJzv,
    bot: () => N.default["5/i0cj"],
    bot_preview: () => N.default.m2jsnw,
};
var ms = n(911608),
    mo = n(177427);
function mu(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: mo.KE,
        children: [
            (0, a.jsx)("div", {
                className: mo.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(el.y, { type: el.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: A.intl.string(N.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: A.intl.formatToPlainString(N.default.INVO50, { time: me(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(et.$, { variant: "secondary", size: "sm", text: A.intl.string(N.default.oKEgiu), onClick: l }),
        ],
    });
}
function mc(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: mo.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(Q.E, { variant: "text-xs/semibold", color: "text-muted", className: mo.Gf, children: t }),
            n,
        ],
    });
}
function md(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: mo.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mo.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: mo.kS,
                        children: [i, (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: mo.kS,
                        children: [
                            s,
                            (0, a.jsx)(Q.E, {
                                variant: "text-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function mm(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: mo.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mo.x7,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(ms.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? mo.dh : void 0,
            }),
        ],
    });
}
function mf(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(md, {
            label: A.intl.string(N.default.SXP7pD),
            value: A.intl.string(N.default.E5hKVi),
            hint: mr(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(md, {
            label: A.intl.string(N.default.SXP7pD),
            value: "\u2014",
            hint: A.intl.string(N.default.AGvoMJ),
        });
    let l = ma(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(md, { label: A.intl.string(N.default["H/X+FI"]), value: d8(n.cpu_ms) }),
            null != l && (0, a.jsx)(md, { label: A.intl.string(N.default.lmFmMO), value: l }),
        ],
    });
}
function mh(e) {
    let { analytics: t } = e,
        n = A.intl.string(N.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(mc, {
            title: n,
            children: (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: mr(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? mi[t] : null) ? A.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(mc, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(Q.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: A.intl.string(N.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          md,
                          {
                              label: n,
                              value: A.intl.formatToPlainString(N.default["w/2voO"], { cpu: d8(t.cpu_ms) }),
                              hint: ma(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var mp = n(678708),
    mg = n(414499),
    mx = n(714800),
    mj = n(81466),
    mv = n(424383),
    mb = n(816943),
    my = n(268791),
    mk = n(514042),
    mw = n(872351),
    mC = n(708988),
    mN = n(150934),
    mA = n(417270);
let mS = "Restart Agent",
    mE = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function mI(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function mM(e, t) {
    return { label: e, value: null != t && "" !== t ? me(t) : "Unknown", icon: "calendar" };
}
function m_(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function mP(e, t, n, l) {
    let [r, a] = mE[n.status];
    return { label: e, value: `${m_(n.bytes)} of ${m_(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function mT(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = me(e.at);
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
let mR = { main: "Main vs Remote", wip: "WIP vs Remote" };
function mL(e) {
    let t = `container ${mI(e.local)} \xb7 remote ${mI(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: mR[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${d9(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${d9(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${d9(n)} Ahead, ${d9(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let m$ = ["main", "wip"];
var mD = n(400154);
let mz = {
        checkout: mp.FolderIcon,
        edit: ay.PencilIcon,
        remote: mg.h,
        commits: mx.e,
        calendar: mj.CalendarIcon,
        save: mv.L,
        objects: ed.R,
        download: mb.$,
        size: my.$,
        file: mk.FileIcon,
    },
    mO = {
        ok: [oS.y, ea.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [dz.WarningIcon, ea.A.colors.ICON_FEEDBACK_WARNING],
        error: [lH.a, ea.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [mw.z, ea.A.colors.ICON_MUTED],
        behind: [mC.M, ea.A.colors.ICON_MUTED],
    };
function mq(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([co.A], () => co.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, db.DK)(t), [t]),
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
                    `Updated ${me(r)}`,
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
    return (0, a.jsxs)(mc, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: mD.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(Q.E, {
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
                    if (!e.running || null != e.localError) return [mT(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            mT(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : d9(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = m$.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(mL))
                        : l.push(
                              { label: "Main", value: mI(e.heads.main), icon: "remote" },
                              { label: "WIP", value: mI(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? d9(e.commits) : "Unknown", icon: "commits" },
                            mM("Oldest Commit", e.oldest),
                            mM("Newest Commit", e.newest),
                            mT(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${d9(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${d9(t.loose)} loose (${d7(t.looseBytes)}) \xb7 ${d9(t.packed)} packed in ${n} (${d7(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${d9(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${d9(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                mP(
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
                                  mP("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = mz[r],
                        [o, u] = null != i ? mO[i] : [null, void 0];
                    return (0, a.jsx)(
                        md,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: ea.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function mF(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([co.A], () => co.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, db.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = co.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, db.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                lW.h.dispatch({
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
            let u = i.useCallback(() => (0, db.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: mS,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eX.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: mD.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: mD.nM,
                children: [
                    (0, a.jsx)(mN.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(et.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: mA.RetryIcon,
                        text: mS,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, a.jsx)(Q.E, {
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
                            return `Restarted \xb7 new instance since ${me(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${me(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function mU(e, t) {
    return (0, a.jsx)(md, {
        label: e,
        value: A.intl.formatToPlainString(N.default.yHJxuP, { count: d9((0, dr.aM)(t)) }),
        hint: `${d9(t.input_tokens)} in \xb7 ${d9(t.output_tokens)} out \xb7 ${d9(t.cache_read_input_tokens)} cache read`,
    });
}
function mG(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([co.A], () => co.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([co.A], () => co.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([co.A], () => co.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([co.A], () => co.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, db.Lj)(t), [t]),
        f = i.useCallback(() => (0, db.Lj)(t, !0), [t]),
        h = (0, o.bG)([co.A], () => co.A.getSandboxRestartState(t), [t]),
        p = (0, o.bG)([e1.A], () => e1.A.isThinking(t), [t]),
        g = i.useCallback(() => (0, db.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        v = n?.agent?.session ?? null,
        b = u?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: mD.Mf,
        children: [
            (0, a.jsx)(mu, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(mc, {
                title: A.intl.string(N.default.JghNal),
                children:
                    null == x
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: A.intl.string(N.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(md, {
                                      label: A.intl.string(N.default["9nqym2"]),
                                      value: d9((0, dr.a7)(x.cost_usd)),
                                      hint: A.intl.formatToPlainString(N.default.NCdUIh, { count: d9(x.turns) }),
                                  }),
                                  mU(A.intl.string(N.default.xtxP0e), x.orchestrator),
                                  mU(A.intl.string(N.default["9Sj3SX"]), x.codegen),
                                  mU(A.intl.string(N.default.ANCEo3), (0, dr.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(md, {
                                          label: A.intl.string(N.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${d9(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(mc, {
                title: A.intl.string(N.default.dZHPE5),
                children:
                    null == s
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: A.intl.string(N.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  mU(A.intl.string(N.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(md, {
                                      label: A.intl.string(N.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, dr.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(mc, {
                title: A.intl.string(N.default.NbRk9a),
                children: [
                    null != u && null != b
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(mm, {
                                      label: A.intl.string(N.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: b,
                                      formatValue: d9,
                                  }),
                                  (0, a.jsx)(md, {
                                      label: A.intl.string(N.default.mRbSns),
                                      value: `${d9(u.tokensBefore)} \u{2192} ${d9(u.tokensAfter)}`,
                                      hint: A.intl.formatToPlainString(N.default.Vq3skS, {
                                          count: d9(u.retainedMessages),
                                          time: me(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != b
                                      ? A.intl.formatToPlainString(N.default.GMLCNv, { ceiling: d9(b) })
                                      : A.intl.string(N.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(md, {
                            label: A.intl.string(N.default["4BX5KK"]),
                            value: `${d9(c.projected)} / ${d9(c.threshold)}`,
                            critical: !0,
                            hint: A.intl.formatToPlainString(N.default["6ngCax"], { time: me(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: mD.Lj,
                        children: [
                            (0, a.jsx)(et.$, {
                                variant: "secondary",
                                size: "sm",
                                text: A.intl.string(N.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: m,
                            }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof d && "compacted" !== d.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return A.intl.string(N.default.wox6Ev);
                                    if ("pending" === e) return A.intl.string(N.default.OcPHQ1);
                                    let t = me(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return A.intl.formatToPlainString(N.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? N.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? N.default.YZb4hK
                                              : N.default.ZoUSVK;
                                    return A.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(d),
                            }),
                            "object" == typeof d &&
                                !0 === d.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(et.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: A.intl.string(N.default.ZxG2AI),
                                            onClick: f,
                                        }),
                                        (0, a.jsx)(Q.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: A.intl.string(N.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: mD.Lj,
                        children: [
                            (0, a.jsx)(et.$, {
                                variant: "secondary",
                                size: "sm",
                                text: A.intl.string(N.default["5qCjBu"]),
                                loading: "pending" === h,
                                disabled: "pending" === h || p,
                                onClick: g,
                            }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof h && "restarted" !== h.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return A.intl.string(N.default.mlok8D);
                                    if ("pending" === e) return A.intl.string(N.default["1ugSyK"]);
                                    let t = me(e.observedAt);
                                    return A.intl.formatToPlainString(
                                        "restarted" === e.outcome ? N.default["76mfqO"] : N.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(mF, { projectId: t }),
                ],
            }),
            (0, a.jsx)(mq, { projectId: t }),
            (null != v || n?.analytics != null) &&
                (0, a.jsxs)(mc, {
                    title: A.intl.string(N.default.EsSzCS),
                    children: [
                        null != v &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(md, {
                                        label: A.intl.string(N.default.CLXHAs),
                                        value: me(v.instance_since),
                                        hint: A.intl.string(N.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(md, { label: A.intl.string(N.default["8V8e1Z"]), value: d9(v.sockets) }),
                                    (0, a.jsx)(md, {
                                        label: A.intl.string(N.default["4pBzYW"]),
                                        value: v.turn_inflight
                                            ? A.intl.string(N.default.Wv025I)
                                            : A.intl.string(N.default["7/lsFY"]),
                                    }),
                                    v.queued_messages > 0 &&
                                        (0, a.jsx)(md, {
                                            label: A.intl.string(N.default["3oUYnv"]),
                                            value: d9(v.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(mf, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(mc, {
                    title: A.intl.string(N.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(md, {
                            label: A.intl.string(N.default.IlDBN3),
                            value: d9(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(md, {
                            label: A.intl.string(N.default["ZdzKR+"]),
                            value: A.intl.formatToPlainString(N.default.yHJxuP, { count: d9(j.context_window_tokens) }),
                        }),
                        (0, a.jsx)(md, {
                            label: A.intl.string(N.default.cIhN2W),
                            value: A.intl.formatToPlainString(N.default.yHJxuP, {
                                count: d9(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(md, {
                            label: A.intl.string(N.default["+fOn/q"]),
                            value: d9(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(md, { label: A.intl.string(N.default.kIHga0), value: d9(j.max_build_attempts) }),
                        (0, a.jsx)(md, { label: A.intl.string(N.default.Iw03yW), value: d9(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var mB = n(237528),
    mK = n(629584),
    mV = n(531893);
function mH(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: mV.ut,
              children: (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: A.intl.string(N.default.h1SE6R),
              }),
          });
}
function mW(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: mV.qf,
              children: [
                  (0, a.jsx)(Q.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: A.intl.string(N.default.h1SE6R),
                  }),
                  (0, a.jsx)(Q.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: A.intl.string(N.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: mV.qf,
              children: [
                  (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function mX(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: mV.ps,
              children: (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: A.intl.string(N.default.V7Ri8H),
              }),
          })
        : null;
}
var mJ = n(109079);
let mY = i.memo(function (e) {
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
        className: mJ.vK,
        children: [
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: mJ.Mt,
                selectable: !0,
                children: dw(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: mJ.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: mJ.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: mJ.Cq, children: (0, a.jsx)(mB.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: mJ.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(mB.v, { text: A.intl.string(N.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(Q.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(eh.D, {
                                      className: mJ.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": A.intl.string(N.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(lg.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(eT._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(Q.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  A.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? N.default.kUhyUv : N.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(Q.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: mJ.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(Q.E, {
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
function mQ(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([dv.A], () => dv.A.getLogs(t), [t]),
        l = (0, o.bG)([dv.A], () => dv.A.getHistoryState(t, "logs")),
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
                ml.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return mn(e);
                            case "web":
                                return A.intl.string(N.default.IVzfVV);
                            default:
                                return A.intl.string(N.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: mJ.$F,
        children: [
            (0, a.jsxs)("div", {
                className: mJ.y4,
                children: [
                    (0, a.jsx)(mK.I, {
                        look: "pill",
                        "aria-label": A.intl.string(N.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: mJ.KT,
                        children: (0, a.jsx)(dy.I, {
                            query: u,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: A.intl.string(N.default["m2+37Y"]),
                            "aria-label": A.intl.string(N.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(mH, { state: l }),
            (0, a.jsxs)(rJ.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: mJ.sx,
                children: [
                    (0, a.jsx)(mX, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(mW, {
                              state: l,
                              emptyTitle: A.intl.string(N.default.S7qlPG),
                              emptyBody: A.intl.string(N.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: A.intl.string(N.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(mY, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function mZ(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(mc, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: A.intl.string(N.default.umcjif),
                      }),
        })
    );
}
function m0(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(md, {
                      label: A.intl.formatToPlainString(N.default["01ZMS4"], { env: mn(n) }),
                      value: ((t = l.connected), A.intl.string(t ? N.default.Wv025I : N.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(md, {
                      label: A.intl.string(N.default["z1dh+F"]),
                      value: d9(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${me(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(md, { label: A.intl.string(N.default.Iz5GnJ), value: d9(l.guild_count) }),
                  (0, a.jsx)(md, {
                      label: A.intl.string(N.default["7UqtNv"]),
                      value: d9(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? A.intl.formatToPlainString(N.default.MasSly, {
                                    code: l.last_close_code,
                                    time: me(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(md, {
                          label: A.intl.string(N.default["x3+JXJ"]),
                          value: d9(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(md, { label: mn(n), value: A.intl.string(N.default.lTHQss) });
}
function m1(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(md, {
        label: mn(t),
        value: A.intl.formatToPlainString(N.default["Xq+wHT"], {
            requests: d9(n.requests),
            failures: d9(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? A.intl.formatToPlainString(N.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: me(n.last_failure.at),
                  })
                : A.intl.formatToPlainString(N.default["7KlGT6"], { time: me(n.since) }),
    });
}
function m2(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(md, {
                label: A.intl.formatToPlainString(N.default["92gVTm"], { env: mn(t) }),
                value: d9(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    md,
                    {
                        label: A.intl.formatToPlainString(N.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? A.intl.formatToPlainString(N.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? A.intl.formatToPlainString(N.default.wxAWNv, { time: me(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function m3(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(md, {
        label: mn(t),
        value: A.intl.formatToPlainString(N.default.suAOj9, { calls: d9(n.calls), errors: d9(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function m5(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(mc, {
            title: t,
            children: (0, a.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: A.intl.string(N.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(mc, {
        title: t,
        children: [
            (0, a.jsx)(md, {
                label: A.intl.string(N.default.xtD4Zp),
                value: d9(n.requests),
                hint: A.intl.formatToPlainString(N.default["7KlGT6"], { time: me(n.since) }),
            }),
            (0, a.jsx)(md, { label: A.intl.string(N.default.gfRhR3), value: d9(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(mm, {
                              label: A.intl.string(N.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: d8,
                          }),
                          (0, a.jsx)(md, {
                              label: A.intl.string(N.default.mSKImM),
                              value: d8(r),
                              hint: A.intl.formatToPlainString(N.default.JqMU05, {
                                  total: d8(n.cpu_ms_total),
                                  wall: d8(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(md, {
                      label: A.intl.string(N.default.LEJ5r3),
                      value: A.intl.string(N.default["2Ekb2b"]),
                      hint: A.intl.string(N.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(md, { label: A.intl.string(N.default.xvmL1D), value: d8(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(md, { label: A.intl.string(N.default["4sQYwH"]), value: d9(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(md, {
                label: A.intl.string(N.default.bQenOy),
                value: d9(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: A.intl.formatToPlainString(N.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(md, { label: A.intl.string(N.default.xgpn4Y), value: mt(n.build) }),
        ],
    });
}
function m4(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: A.intl.string(N.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: A.intl.string(N.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: A.intl.string(N.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(mc, {
        title: A.intl.string(N.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(md, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(md, {
                                  label: A.intl.formatToPlainString(N.default.u7kJJ4, { env: n }),
                                  value: d7(l.r2_bytes),
                                  hint: A.intl.formatToPlainString(
                                      l.r2_truncated ? N.default.lH0oQw : N.default.m9h02S,
                                      { count: d9(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(mm, {
                                      label: A.intl.formatToPlainString(N.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: d7,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function m6(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: mD.Mf,
        children: [
            (0, a.jsx)(mu, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(m5, {
                            title: A.intl.string(N.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(m5, {
                            title: A.intl.string(N.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(m4, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(mZ, {
                                title: A.intl.string(N.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(m0, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(mZ, {
                                title: A.intl.string(N.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(m1, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(mZ, {
                                title: A.intl.string(N.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(m2, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(mZ, {
                                title: A.intl.string(N.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(m3, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(mh, { analytics: t.analytics }),
                        (0, a.jsxs)(mc, {
                            title: A.intl.string(N.default.fQMpFp),
                            children: [
                                (0, a.jsx)(md, {
                                    label: A.intl.string(N.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? mt(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(md, {
                                    label: A.intl.string(N.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? mt(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var m7 = n(592465);
function m8(e) {
    let { projectId: t, onClose: n } = e,
        l = n1(),
        [r, s] = i.useState(() => (l && nQ?.projectId === t ? "trace" : "logs")),
        c = (0, o.bG)([co.A], () => co.A.getStatus(t), [t]),
        d = (0, o.bG)([co.A], () => co.A.getFetchState(t), [t]),
        m = i.useCallback(() => {
            ((0, db.R7)(t), (0, db.DK)(t));
        }, [t]);
    (i.useEffect(() => m(), [m]), i.useEffect(() => (0, x.subscribeDebugBacklog)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == nQ || nQ.projectId !== e) return null;
            let { traceId: t } = nQ;
            return ((nQ = null), t);
        })(t);
        return null != e && (d3(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        nZ(t, () => {
            f() && s("trace");
        }));
    let h = i.useCallback(() => {
            (0, ts.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: co.A.getStatus(t),
                        last_turn_usage: co.A.getLastTurnUsage(t),
                        last_compaction: co.A.getLastCompaction(t),
                        last_compaction_decline: co.A.getLastCompactionDecline(t),
                        timing_traces: co.A.getTimingTraces(t),
                        logs: dv.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, u.P0)({ text: A.intl.string(N.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        p = A.intl.string(N.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: m7.nd,
        "aria-label": p,
        children: [
            (0, a.jsxs)(lU.Ay, {
                "aria-label": p,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(lU.Ay.Icon, {
                            icon: cE.CopyIcon,
                            tooltip: A.intl.string(N.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(lU.Ay.Icon, { icon: en.P, tooltip: A.intl.string(A.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(lU.Ay.ChannelIcon, { icon: nn.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(lU.Ay.Title, { children: p }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: m7.rf,
                children: [
                    (0, a.jsxs)(dj.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": A.intl.string(N.default.RvvWIh),
                        className: m7.vR,
                        children: [
                            (0, a.jsx)(dj.V.Item, { id: "logs", children: A.intl.string(N.default["+VRYCm"]) }),
                            (0, a.jsx)(dj.V.Item, { id: "worker", children: A.intl.string(N.default["50D0FZ"]) }),
                            (0, a.jsx)(dj.V.Item, { id: "agent", children: A.intl.string(N.default.UkbTK1) }),
                            l ? (0, a.jsx)(dj.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(mQ, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(m6, { status: c, fetchState: d, onRefresh: m })
                          : "trace" === r && l
                            ? (0, a.jsx)(d6, { projectId: t })
                            : (0, a.jsx)(mG, { projectId: t, status: c, fetchState: d, onRefresh: m }),
                ],
            }),
        ],
    });
}
var m9 = n(365912),
    fe = n(873715);
function ft(e) {
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
let fn = Object.freeze({ x: -1, y: -1 });
function fl(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = ft(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fr = n(192888);
function fa(e, t) {
    return (0, fr.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fl, () => ({ status: "failed" }));
}
var fi = n(108308);
let fs = { x: 25, y: 21 };
function fo(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fu(e, t, n, l) {
    let r = fo(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fc(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fd(e) {
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
function fm(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = nE(u),
        m = (0, n2.Zv)(u),
        f = (0, tv.useHasAnyModalOpen)(),
        h = (0, o.bG)([eZ.default], () => eZ.default.getCurrentUser()),
        p = h?.id ?? null,
        [j, v] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [C, S] = i.useState(null),
        [E, I] = i.useState(!1),
        M = i.useRef(null),
        _ = i.useRef(null),
        P = i.useRef(null),
        [T, R] = i.useState(null),
        [L, $] = i.useState(!1),
        [D, z] = i.useState(null),
        [O, q] = i.useState(null),
        F = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, K] = i.useState(null),
        V = c && !m && !f;
    null == D || (V && D.projectId === u) || z(null);
    let H = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != H) return () => l6(H, "design");
    }, [H]);
    let W = ru(r, V);
    i.useEffect(() => {
        if (!V || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fe.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? fd(t.response) : null;
                    null == n ? w(!0) : (v(n), nN(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), w(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [V, r, u]);
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!V || null == W || null == u) return;
        if (null == j) {
            X.current = W;
            return;
        }
        if (ro(X.current, W)) return;
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
                    (0, fe.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !en.current) return;
                        let l = fd(e.response);
                        null != l && (v(l), nN(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = ft(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = nb(u)).active &&
                                0 !== r.size &&
                                ny(u, {
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
    }, [V, W, j, d, u, r]),
        i.useEffect(() => {
            if (!V)
                return () => {
                    (S(null), z(null), K(null), v(null));
                };
        }, [V]));
    let J = i.useRef(null),
        Y = i.useRef(null),
        ee = i.useRef(!1),
        en = i.useRef(!1);
    i.useEffect(() => {
        ((en.current = V), V || ((J.current = null), (Y.current = null), (P.current = null), I(!1)));
    }, [V]);
    let el = i.useCallback(
            function e() {
                if (ee.current) return;
                let t = J.current;
                if (null == t) return;
                J.current = null;
                let n = r();
                null != n &&
                    ((ee.current = !0),
                    fa(n, t).then((t) => {
                        if (((ee.current = !1), en.current)) {
                            if ("picked" !== t.status || fj(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? S(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = nd(t.target);
                                (R((t) => (fx(t, e) ? t : e)),
                                    S((e) => {
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
        er = i.useCallback(() => {
            if (null == D) return;
            let e = !F.current;
            (q({ at: D.at, label: D.label, draft: D.draft, instant: e }), G(e), z(null));
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
            let e = setTimeout(() => q(null), fp);
            return () => clearTimeout(e);
        }, [O]));
    let ea = null == j || null == W || j.viewport.width < 1 ? 1 : W.width / j.viewport.width,
        ei = null != j || k,
        es = i.useMemo(() => j?.elements ?? [], [j]),
        eo = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eo.current = { rect: W, scale: ea };
    }, [W, ea]);
    let eu = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (l6(u, "design"),
                    K(null),
                    (F.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nd(e) }));
            },
            [u],
        ),
        ec = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        ed = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = _.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ed);
    let em = i.useCallback(
            (e) => {
                if (null == W || null != B) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ed(), I(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > fg || Math.abs(e.clientY - D.at.y) > fg) && (F.current = !0);
                    return;
                }
                if (!ei) return void S(null);
                let t = ec(e, W);
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
                        })(es, t.x, t.y),
                        n = null != e && fj(e, W, ea) ? null : e;
                    if (null != n) {
                        let e = nd(n);
                        R((t) => (fx(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Y.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Y.current = n), (J.current = n), el());
            },
            [W, ea, ei, ec, L, es, D, B, ed, el],
        ),
        ef = null == B ? null : d.find((e) => e.id === B.id),
        eh = V && (E || D?.target.marker != null || ef?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = r();
                null != e && fa(e, fn);
            };
    }, [eh, r]);
    let ep = i.useCallback(() => {
        (I(!1), S(null), (Y.current = null), (J.current = null));
    }, []);
    i.useEffect(() => {
        if (!V || !E || !ei || L || null != D || null != B) return;
        let e = P.current,
            { rect: t, scale: n } = eo.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Y.current = l), (J.current = l), el());
    }, [V, E, ei, L, D, B, el]);
    let eg = i.useCallback(
            (e) => {
                if (null != D || null != B) {
                    (er(), K(null));
                    return;
                }
                if (null == C || null == W) return;
                let t = ec(e, W);
                eu(
                    C,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? nu
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(C, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [C, W, ec, D, B, eu, er],
        ),
        ex = i.useCallback(() => {
            null != u && (S(null), null != nG(u) ? nK(u) : nC(u));
        }, [u]),
        ej = i.useCallback(() => {
            null != u &&
                (null != D
                    ? er()
                    : B?.confirmingRemove === !0
                      ? K({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? K(null)
                        : ex());
        }, [u, D, B, er, ex]),
        ev = i.useRef(ej),
        eb = i.useRef(u),
        ey = i.useRef(ex);
    i.useLayoutEffect(() => {
        ((ev.current = ej), (eb.current = u), (ey.current = ex));
    });
    let ek = i.useRef(null);
    i.useEffect(() => {
        if (V)
            return (
                lK.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        lK.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ev.current());
        }
        function t(e) {
            let t = e.target;
            !(0, lB.vq)(t) ||
                ek.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, m9.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eb.current || null == nG(eb.current)) && ey.current());
        }
    }, [V, s]);
    let ew = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ej());
                    return;
                }
                if (null != D || null != B || 0 === es.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == C ? -1 : es.findIndex((e) => e.ref === C.ref);
                    S(es[(n + (t ? 1 : -1) + es.length) % es.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != C &&
                    (e.preventDefault(),
                    eu(C, nu, { x: (W?.left ?? 0) + C.rect.x * ea, y: (W?.top ?? 0) + C.rect.y * ea }));
            },
            [u, D, B, es, C, eu, ej, W, ea],
        ),
        eC = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((nc(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, x.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = nd(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${nh}${r}${np}${nf(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        er(),
                        S(null)));
            },
            [u, D, er],
        ),
        eN = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, g.vX)(u, e)), [u]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != p && nc(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = nb(u)).annotations.find((t) => t.id === e)) &&
                        nA(l, p) &&
                        ny(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, p]),
        eS = i.useCallback(() => {
            if (null != u && null != B && null != p) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = nb(u)).annotations.find((t) => t.id === e)) &&
                        nA(n, p) &&
                        ny(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, B, p]),
        eE = c
            ? b
                ? A.intl.string(N.default["Eb/YV9"])
                : k
                  ? A.intl.string(N.default.FD30bh)
                  : A.intl.formatToPlainString(N.default.dTSqLF, { count: d.length })
            : "",
        eI = V && null != W,
        eM = E && null == B,
        e_ = D?.target ?? ef?.target ?? null,
        eP = D ?? O,
        eT = D ?? (O?.instant === !0 ? null : O),
        eR =
            null != ef && null != W
                ? (function (e, t) {
                      let { left: n, top: l } = fc(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fu(ef.target, ef.anchor, W, ea), W)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (ef?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ef;
            fa(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ef, r]),
        (0, lG.createPortal)(
            (0, a.jsxs)("div", {
                ref: ek,
                className: fi.Li,
                children: [
                    (0, a.jsx)(eH.A, {
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
                                      className: fi.MT,
                                      style: { left: W.left, top: W.top, width: W.width, height: W.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": A.intl.string(N.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: ep,
                                      onClick: eg,
                                      onKeyDown: ew,
                                  }),
                                  null != C && null == C.marker && null == D && null == B
                                      ? (0, a.jsx)(fv, { box: fo(C, W, ea) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: fi.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fi.xz,
                                          "data-shown": null != C && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(Q.E, {
                                              variant: "text-xs/medium",
                                              className: fi.Ux,
                                              children: [
                                                  null == T
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fi.Tl, children: T.kind }),
                                                  null == T || "" === T.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fi.kh,
                                                            children: [" ", T.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: _,
                                      className: fi.Y,
                                      children: eM ? (0, a.jsx)("div", { className: fi.u }) : null,
                                  }),
                                  null == eT
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fi.aZ,
                                            style: {
                                                transform: `translate3d(${eT.at.x + 20}px, ${eT.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fi.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(Q.E, {
                                                    variant: "text-xs/medium",
                                                    className: fi.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fi.Tl,
                                                            children: eT.label.kind,
                                                        }),
                                                        "" === eT.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fi.kh,
                                                                  children: [" ", eT.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != e_ && null == e_.marker
                                      ? (0, a.jsx)("div", { className: fi.D0, style: fo(e_, W, ea), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fu(e.target, e.anchor, W, ea),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fi.xL,
                                              style: { ...fc(n, W), width: 24, height: 24 },
                                              "aria-label": A.intl.formatToPlainString(N.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: nm(e.target),
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
                                                  (e.stopPropagation(), er(), K(l));
                                              },
                                              children: (0, a.jsx)(ff, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eP || null == u
                                      ? null
                                      : (0, a.jsx)(ri, {
                                            projectId: u,
                                            at: { x: eP.at.x + 20, y: eP.at.y + 20 },
                                            bounds: W,
                                            kind: eP.label.kind,
                                            value: eP.draft,
                                            canSubmit: null != D && nc(eP.draft),
                                            onChange: (e) => {
                                                null != D && z({ ...D, draft: e });
                                            },
                                            onSubmit: eC,
                                            onDismiss: er,
                                            onUploadFile: eN,
                                            closing: null == D,
                                        }),
                                  null != ef && null != B && null != eR
                                      ? (0, a.jsxs)(fh, {
                                            point: eR,
                                            frame: W,
                                            authorId: ef.authorId,
                                            title: nm(ef.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? K({ ...B, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || K(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(Z.f, {
                                                          autoFocus: !0,
                                                          label: A.intl.string(N.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: B.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => K({ ...B, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eA());
                                                          },
                                                      })
                                                    : (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: fi.aC,
                                                          children: ef.comment,
                                                      }),
                                                nA(ef, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: fi.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(Q.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fi.nv,
                                                                            children: A.intl.string(N.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: A.intl.string(N.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: A.intl.string(N.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: A.intl.string(N.default.friIzR),
                                                                            onClick: () =>
                                                                                K({
                                                                                    ...B,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        B.editing
                                                                            ? (0, a.jsx)(et.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nc(B.draft),
                                                                                  text: A.intl.string(N.default.iicRP9),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, a.jsx)(et.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: A.intl.string(
                                                                                      N.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
                                                                                          ...B,
                                                                                          editing: !0,
                                                                                          draft: ef.comment,
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
function ff(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([eZ.default], () => eZ.default.getUser(t), [t]);
    return (0, a.jsx)(sh.eu, {
        src: null == n ? null : sg.Ay.getUserAvatarURL(n),
        size: sp._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fh(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [v, b] = i.useState(fs);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = j.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        b((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: y,
            top: k,
            originX: w,
            originY: C,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - v.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - v.y, l), r)), originX: u.x - s, originY: u.y - o }),
        N = { left: y, top: k, "--custom-conjure-card-origin-x": `${w}px`, "--custom-conjure-card-origin-y": `${C}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: fi.Nr,
        style: N,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fi.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fi.ip, children: (0, a.jsx)(ff, { authorId: d }) }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fi.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fi.zI, children: g }),
        ],
    });
}
let fp = 300,
    fg = 2;
function fx(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fj(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fv(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fi.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fb = n(659723),
    fy = n(697744),
    fk = n(130324);
function fw(e) {
    let t = (0, fy.c)(),
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
    let r = (0, rQ.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function fC(e) {
    let { className: t } = e,
        { Component: n, events: l } = fw(3e4);
    return (0, a.jsxs)("div", {
        className: X()(t, fk.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: fk.ol,
                children: A.intl.string(N.default.AyiQEp),
            }),
        ],
    });
}
var fN = n(251363),
    fA = n(944142),
    fS = n(532247),
    fE = n(501628);
function fI(e) {
    let { progress: t } = e,
        { Component: n } = fw(1500),
        l = n0.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: fE.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: fE.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function fM(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([fA.A], () => (s ? fA.A.getLiveReload(t) : null), [s, t]),
        c = (0, lN.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, fS.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, fS.QP)(e, s)));
            let m = (0, o.bG)(
                    [lu.A],
                    () => {
                        let e = lu.A.getFrame(n);
                        return (0, lf.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, fN.ow)(null, n) && e();
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
        h = m ? null : (0, fS.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eH.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: fE.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(fI, { progress: h }),
                  })
                : null,
        ],
    });
}
var f_ = n(357858),
    fP = n(343030),
    fT = n(317608),
    fR = n(35367),
    fL = n(228946);
let f$ = { width: 1 / 0, height: 1 / 0 };
function fD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f$;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var fz = n(702083);
function fO(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([lA.A], () => ({
            mobile: lA.A.isBuilderPreviewMobile(),
            landscape: lA.A.isBuilderPreviewLandscape(),
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
        d = n ? fD(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: X()(fz.dw, { [fz.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: X()(fz.R9, { [fz.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var fq = n(347927);
function fF(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: X()(fq.Bf, l && fq.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: fq.Ux,
                children: [
                    (0, a.jsx)(ew.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(Q.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var fU = n(957272);
function fG(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, fR.A)({ applicationId: t, surface: n, launch: l });
    if (((0, fL.A)(t, n), s === fR.n.Launched)) {
        let e = (0, a.jsx)(fT.A, { frameId: i.id, level: fP.A.WithinAppContent, className: fU.Z7, overlay: r });
        return (0, lS.Q5)(n) ? (0, a.jsx)(fO, { children: e }) : e;
    }
    return (0, a.jsx)(fB, { state: s });
}
function fB(e) {
    let { state: t } = e;
    switch (t) {
        case fR.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: fU.qs,
                children: (0, a.jsx)(fF, {
                    title: A.intl.string(N.default["9kpdo7"]),
                    body: A.intl.string(N.default.iIA8Nj),
                }),
            });
        case fR.n.NoApplication:
            return (0, a.jsx)(fC, { className: fU.qs });
        case fR.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: fU.qs,
                children: (0, a.jsx)(fF, {
                    title: A.intl.string(N.default["7k4GyN"]),
                    body: A.intl.string(N.default.zdIy3R),
                }),
            });
        case fR.n.Error:
            return (0, a.jsxs)("div", {
                className: fU.qs,
                children: [
                    (0, a.jsx)(ew.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: A.intl.string(N.default.lTPbnG),
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: fU.tj,
                        children: A.intl.string(N.default.e6GiAZ),
                    }),
                ],
            });
        case fR.n.AwaitingLaunch:
        case fR.n.Loading:
            return (0, a.jsx)("div", { className: fU.qs, children: (0, a.jsx)(el.y, {}) });
    }
}
var fK = n(308528),
    fV = n(334738),
    fH = n(688438),
    fW = n(365971),
    fX = n(703462);
function fJ(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: fX.f,
        children: [
            (0, a.jsx)(s1.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function fY() {
    return (0, a.jsx)("div", { className: fX.f, children: (0, a.jsx)(el.y, {}) });
}
function fQ(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, lb.YY)(l),
        u = r?.bot?.id ?? null,
        c = (0, o.bG)([aw.A], () => {
            if (null == u) return null;
            let e = aw.A.getDMFromUserId(u);
            return null != e ? aw.A.getChannel(e) : null;
        });
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && fK.A.preload(eJ.ME, t);
        }, [t]),
        (n = (0, o.bG)([ck.A], () => ck.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, fW.Xg)();
            return (
                (0, fV.yl)(t, e),
                () => {
                    (0, fV.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        f = null != u && d === u;
    return (i.useEffect(() => {
        if (null == u || null != c) return;
        let e = !1;
        return (
            fK.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || m(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, c]),
    s && null == r)
        ? (0, a.jsx)(fY, {})
        : null == u || f
          ? (0, a.jsx)(fJ, { message: A.intl.string(N.default["VP/O8s"]) })
          : null == c
            ? (0, a.jsx)(fY, {})
            : (0, a.jsx)("div", {
                  className: fX.g,
                  children: (0, a.jsx)(fH.A, { channel: c, guild: null, chatInputType: o8.oU.SIDEBAR }, c.id),
              });
}
var fZ = n(887909),
    f0 = n(570962),
    f1 = n(998475);
function f2(e) {
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
    } = (0, fZ.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: f1.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: f1.rf,
                children: (0, a.jsx)(f0.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: f1.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: f1.z3,
                                      children: [
                                          (0, a.jsx)(ew.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, a.jsx)(Q.E, {
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
                                className: X()(f1.Qs, c ? f1.cw : null, d ? f1.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: f1.o1,
                      children: s.map((e, t) => (0, a.jsx)(et.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var f3 = n(765671),
    f5 = n(269094),
    f4 = n(714917),
    f6 = n(463660),
    f7 = n(582063);
let f8 = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function f9() {
    (0, u.P0)({ text: A.intl.string(N.default.jj3abP), variant: "critical" });
}
function he(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = A.intl.string(N.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(es.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(ht, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: f7.m2,
                        children: (0, a.jsx)(eR.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tl.K, {
                                "aria-label": r,
                                icon: tn.SettingsIcon,
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
                accept: f8.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (f8.includes(n.type)
                                ? n.size > p.aI
                                    ? (0, u.P0)({ text: A.intl.string(N.default.T8Spiu), variant: "critical" })
                                    : (0, f6.M$)(t, n).catch(f9)
                                : (0, u.P0)({ text: A.intl.string(N.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function ht(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([f4.A], () => f4.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eo.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": A.intl.string(N.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eu.rX, {
                children: [
                    (0, a.jsx)(eu.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: A.intl.string(N.default.uQpDky),
                        icon: aW.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eu.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: A.intl.string(N.default.AiAz8J),
                        icon: mA.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, f6.Og)(t).catch(f9));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eu.rX, {
                children: (0, a.jsx)(eu.fP, {
                    id: "conjure-overlay-background-blur",
                    label: A.intl.string(N.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, f6.Y1)(t, !i) || f9();
                    },
                }),
            }),
        ],
    });
}
let hn = "/assets/7cec34541705c795.webp";
function hl(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, fR.A)({ applicationId: t, surface: lf.ZN });
    return (i.useEffect(() => {
        let e = (0, lf.VA)(t, lf.ZN);
        return () => (0, lE.r)(e);
    }, [t]),
    r.state !== fR.n.Launched)
        ? (0, a.jsx)(fB, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(fB, { state: fR.n.Loading })
          : (0, a.jsx)(hr, { lifecycle: r, projectId: n, size: l });
}
function hr(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, f3.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: f7.JH,
        children: [
            (0, a.jsx)(ha, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: f7.dw,
                children: (0, a.jsx)("div", {
                    className: f7.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(f5.A, { frame: t.frame, application: t.application, className: f7.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(he, { projectId: n }) : null,
        ],
    });
}
function ha(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([f4.A], () => (null != t ? f4.A.getBackground(t) : null)),
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
                (0, f6.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(hn);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        h = null == l || (null != f && f === u) ? hn : f;
    return null != h && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: X()(f7.LO, { [f7.Ty]: n?.blur === !0 }),
              src: h,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  h === f && c(f);
              },
          })
        : null;
}
var hi = n(409478),
    hs = n(652227);
function ho(e) {
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
            overlayWidgetSize: m = n9,
            projectId: f,
            frameOverlay: h,
            paused: p = !1,
            onResume: g,
        } = e,
        x = (0, o.bG)([it.A], () => null != f && null != it.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: hs.qs, children: (0, a.jsx)(el.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: hs.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(el.y, {}) : (0, a.jsx)(f2, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: hs.RG,
                      children: [
                          (0, lt.yf)(u, c)
                              ? p
                                  ? (0, a.jsx)(hu, { projectId: f, onResume: g })
                                  : (0, a.jsx)(fG, { applicationId: t, surface: l, launch: r, frameOverlay: h })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: hs.qs,
                                        children: (0, a.jsx)(fF, {
                                            wide: !0,
                                            title: A.intl.string(N.default["08U+YO"]),
                                            body: A.intl.string(N.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(hi.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(hl, { applicationId: t, projectId: f, size: m })
                              : null,
                          "bot" === c && null != n ? (0, a.jsx)(fQ, { previewApplicationId: n }) : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: hs.qs, children: (0, a.jsx)(el.y, {}) })
              : (0, a.jsx)(fC, { className: hs.qs });
}
function hu(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, f_.Pu)(t),
        (0, a.jsx)("div", {
            className: hs.qs,
            children: (0, a.jsx)(fF, {
                wide: !0,
                title: A.intl.string(N.default.MMWEH2),
                body: A.intl.string(N.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(et.$, {
                              size: "sm",
                              variant: "primary",
                              icon: e6.PlayIcon,
                              text: A.intl.string(N.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var hc = n(175841),
    hd = n(750506),
    hm = n(867193),
    hf = n(539197),
    hh = n(977020);
function hp(e) {
    let { projectId: t } = e,
        n = (0, hf.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, hf.Ie)(e);
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
        className: hh.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [hf.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: X()(hh.hN, hh.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: X()(hh.hN, hh.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: X()(hh.UE, { [hh.SP]: n.shown, [hh.Vq]: n.pressed, [hh.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var hg = n(417760);
function hx(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, o.bG)([e1.A], () => null != e && e1.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, x.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, n2.CU)(n),
        c = "controlling" === t,
        d = A.intl.string(c ? (u ? N.default["VJW/5P"] : N.default["+hD2Iz"]) : N.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(et.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: A.intl.string(N.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: X()(hg.M0, hg.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(c7.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(hc.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "none", className: hg.ID, children: d }),
                  c ? (0, a.jsx)(eH.A, { children: A.intl.string(N.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: hg.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: hg.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: hg.sp,
                      children: [
                          (0, a.jsx)(hc.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(c7.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: hg.f4,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: hg.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(Q.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: hg.Rb,
                                            children: A.intl.string(N.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: hg.lC, children: m }) : null,
              ],
          });
}
function hj(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, n2.Zv)(null != n && n === l ? t : null),
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
        c = (0, tv.useHasAnyModalOpen)(),
        d = (0, lc.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, lc.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        j = "idle" !== u;
    i.useEffect(() => {
        if (!j) return;
        function e() {
            let e = rs(r());
            f((t) => (ro(t, e) ? t : e));
            let t = null == h ? null : rs(h);
            (x((e) => (ro(e, t) ? e : t)), null != h && (0, hm.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, hm.C)(0));
            }
        );
    }, [j, r, h]);
    let v = "idle" !== u && null != m,
        b = v && "controlling" === u && !c,
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
        C = (function () {
            let [e] = i.useContext(hd.uY),
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
            v
                ? (0, a.jsx)("div", {
                      ref: p,
                      className: hg.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: hg.QF,
                          children: (0, a.jsx)(hx, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, lG.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(eH.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? A.intl.string(N.default.oWcemF)
                                : "handoff" === u
                                  ? A.intl.string(N.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, lG.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: hg.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: hg.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(hp, { projectId: t }),
                          ],
                      }),
                      C,
                  )
                : null,
        ],
    });
}
var hv = n(399503),
    hb = n(853555),
    hy = n(271982),
    hk = n(187645);
let hw = new Map(),
    hC = !1;
function hN() {
    let e = new Map();
    for (let t of new Set([...e1.A.getActivityOrderedProjectIds(), ...(0, n2.T7)()])) {
        if (!(e1.A.isThinking(t) || (0, n2.wK)(t)) || n7.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = B.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, lS.Rc)(t);
            return (0, lf.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...hw]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            hw.delete(t),
            n.unregisterLookup(),
            hy.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        hw.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = hk.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    hA(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (hw.set(e, l),
                    (l.unregisterLookup = (0, hb.Ng)(e, () => (0, fN.n5)(n, t))),
                    hy.A.registerFrameTarget(t, n, fP.A.Backstage, void 0));
            })(t, n);
    for (let e of hw.values()) hA(e.element);
}
function hA(e) {
    let t = lA.A.isBuilderPreviewMobile();
    e.classList.toggle(hk.L, !t);
    let n = t ? fD(lA.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var hS = n(873727),
    hE = n(147248),
    hI = n(418842),
    hM = n(363195),
    h_ = n(818023);
let hP = null;
var hT = n(517461),
    hR = n(761929),
    hL = n(487336);
function h$(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, hT.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, id.clamp)(u, 360, n),
        m = (0, hR.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: hR.R.HORIZONTAL_LEFT,
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
        className: hL.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: hL.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: hL.kL, style: { width: d }, children: l }),
        ],
    });
}
var hD = n(541940);
function hz(e) {
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
            paused: h,
        } = e,
        [p, g] = i.useState(null),
        x = (0, lN.A)(l, s),
        j = x?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([hM.A], () => (0, hS.x4)(hM.A.theme)),
            l = (0, o.bG)([hE.A], () => hE.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([oV.Ay], () => ({
                reducedMotion: oV.Ay.useReducedMotion,
                fontScale: (0, hS.U0)(),
                highContrast: oV.Ay.isHighContrastModeEnabled,
                forcedColors: oV.Ay.useForcedColors,
                underlineLinks: oV.Ay.alwaysShowLinkDecorations,
            })),
            d = n0.hH.useSetting(),
            m = (0, hI.C)(),
            f = (0, o.bG)(
                [lu.A, lA.A],
                () =>
                    lA.A.isBuilderPreviewMobile() &&
                    lu.A.getFrame(t)?.applicationId === lA.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            p = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            j = i.useCallback(() => {
                let l = (0, fN.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, hS.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, fr.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, f, t, s, d, e, r, m, c]),
            v = i.useRef(j);
        i.useLayoutEffect(() => {
            v.current = j;
        });
        let b = i.useCallback(() => {
            h.current ||
                ((h.current = !0),
                queueMicrotask(() => {
                    ((h.current = !1), p.current || v.current());
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
                (j(), b());
            }, [b, j]),
            i.useLayoutEffect(() => {
                let n = (0, fN.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, fN.n5)(e, t) && ((x.current = null), b());
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
    })(p, j),
        i.useEffect(() => {
            if (null != t) return (0, hb.Ng)(t, () => (0, fN.n5)(p, j));
        }, [t, p, j]));
    let v = i.useCallback(() => (0, fN.ow)(p, j), [p, j]),
        b = i.useCallback(() => (f ? (0, fN.ow)(p, j) : p), [f, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: X()(hD.Mh, c),
                children: [
                    u,
                    h
                        ? null
                        : (0, a.jsx)(hj, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: b,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: g, className: hD.fm, children: d }),
                ],
            }),
            m,
            h
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fm, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: v,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(rH, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: v }),
                      ],
                  }),
        ],
    });
}
function hO(e) {
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
        onRestoreVersion: h,
        onImportProject: p,
        debugOpen: g = !1,
        onCloseDebug: j,
        restoreState: v,
        previewReady: b,
        previewGate: y,
        availability: k,
        activeMode: w,
        widgetApplicationId: C,
        overlayWidgetSize: S,
        previewPaused: E = !1,
        onResumePreview: I,
    } = e;
    (0, hv.k)(t, C);
    let M = s.type === ln.U.MAIN || (0, lS.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([lA.A], () => ({
            mobile: lA.A.isBuilderPreviewMobile(),
            landscape: lA.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? h_.aX.LANDSCAPE : h_.aX.PORTRAIT), (hP = e));
                else {
                    if (hP !== e) return;
                    ((l = h_.aX.UNHANDLED), (hP = null));
                }
                lW.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let _ = i.useRef(null),
        [P, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, rX.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, rX.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, n6.HV)(l), () => (0, n6.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, x.ensureConnection)(t),
                hC ||
                    ((hC = !0),
                    e1.A.addChangeListener(hN),
                    B.Ay.addChangeListener(hN),
                    lu.A.addChangeListener(hN),
                    lA.A.addChangeListener(hN),
                    n7.A.addChangeListener(hN),
                    (0, n2.W3)(hN),
                    hN()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = _.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let R = Math.max(360, P - 320),
        L = d || M;
    return (0, a.jsx)("div", {
        ref: _,
        className: hD.LB,
        children: (0, a.jsx)(hz, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, lt.yf)(k, w),
            paused: E,
            mainClassName: null == c ? void 0 : X()(hD.ez, { [hD.zt]: d }),
            content: (0, a.jsx)(ho, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: k,
                activeMode: w,
                widgetApplicationId: C,
                overlayWidgetSize: S,
                projectId: t,
                paused: E,
                onResume: I,
                frameOverlay: (0, a.jsx)(fM, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && L
                    ? (0, a.jsx)(h$, {
                          open: d,
                          maxWidth: R,
                          children: (0, a.jsx)("div", {
                              className: hD.cO,
                              children: g
                                  ? (0, a.jsx)(m8, { projectId: t, onClose: j ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(fb.A, { projectId: t }),
                                            (0, a.jsx)(lU.Ay, {
                                                "aria-label": A.intl.string(A.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(lU.Ay.Icon, {
                                                                  icon: en.P,
                                                                  tooltip: A.intl.string(N.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(lU.Ay.Title, {
                                                    children: A.intl.string(A.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: hD.cb,
                                                children: (0, a.jsx)(
                                                    dx,
                                                    {
                                                        projectId: t,
                                                        restoreState: v,
                                                        onRestoreVersion: h,
                                                        onImportProject: p,
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
function hq(e) {
    var t;
    let l,
        r,
        s,
        { project: c, projectsLoaded: m, onBack: f, guildId: h } = e,
        [p, g] = i.useState(!0),
        [j, b] = i.useState(!1),
        y = n1(),
        k = i.useCallback(() => g(!0), []),
        w = i.useCallback(() => {
            (b(!1), g(!0));
        }, []),
        { restoreState: C, handleRestoreVersion: I } = (function (e, t) {
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
                            let c = e.id;
                            function d() {
                                return s.current && a.current === c;
                            }
                            ((o.current = !0),
                                t(),
                                l({ entry: n, status: "restoring" }),
                                (0, n5.oB)(c, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    d() &&
                                                    (0, u.P0)({
                                                        text: A.intl.formatToPlainString(N.default.Z4n6LX, {
                                                            title: (0, n3.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, n4.c)(c, r);
                                                null != e && (0, u.P0)({ text: e, variant: "critical" });
                                            }
                                            d() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            d() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", c, e),
                                                (0, u.P0)({
                                                    text: A.intl.string(N.default["PSdo+w"]),
                                                    variant: "critical",
                                                }));
                                        },
                                    )
                                    .finally(() => {
                                        d() && (o.current = !1);
                                    }));
                        },
                        [e, t],
                    ),
                }
            );
        })(c, w),
        _ = c?.id ?? null,
        {
            integrationStatus: P,
            isPreviewApplicationLoading: T,
            checkingIntegration: R,
            previewReady: L,
            hasFrame: $,
            needsPermissionReview: D,
            installAuthorizeProps: z,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)(
                    [B.Ay, ly.A],
                    () => (null == r ? null : (B.Ay.getIntegrationStatus(r) ?? ly.A.getIntegrationStatus(r))),
                    [r],
                ),
                { data: c, isLoading: d } = (0, lb.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                p = (0, lt.Qg)({
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
                        await ((0, G.CG)(r)?.catch(() => (0, G.U1)(r, e.signal)) ?? (0, G.U1)(r, e.signal));
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
            let x = (0, lk.a)(e ?? null, u ?? null, t),
                j = i.useCallback(async () => {
                    null != e && (await (0, lk.$)(e, x));
                }, [x, e]),
                v = i.useCallback(async () => {
                    try {
                        await j();
                    } catch {}
                    await g();
                }, [g, j]),
                b = i.useMemo(() => {
                    let t = e?.preview_application_id;
                    return null == t || d || m
                        ? null
                        : {
                              ...(0, lw.i)({ applicationId: t, application: c ?? null, guildId: x }),
                              onClose: () => {
                                  v();
                              },
                          };
                }, [m, v, x, d, c, e?.preview_application_id]);
            return {
                integrationStatus: u,
                isPreviewApplicationLoading: d,
                checkingIntegration: m,
                previewReady: f,
                hasFrame: h,
                needsPermissionReview: p,
                installAuthorizeProps: b,
            };
        })(c, h),
        O =
            (0, o.bG)([lI.A], () => (null == _ ? void 0 : lI.A.getPublishStatus(_)?.previewAppChannels), [_]) ??
            P?.preview_app_channels,
        {
            availability: q,
            activeMode: F,
            setMode: U,
            frameSurface: K,
            frameSurfaceOptions: V,
            setFrameSurface: H,
            appChannel: W,
            setAppChannel: J,
            frameLaunchParams: Y,
            widgetApplicationId: Z,
        } = (0, li.p)({
            applicationId: c?.preview_application_id ?? null,
            previewApplicationId: c?.preview_application_id ?? null,
            declaredActivity: $,
            previewSupportedSurfaces: c?.preview_supported_surfaces,
            installScope: c?.install_scope ?? null,
            ownerAuthorizationRevoked: P?.owner_authorization_revoked === !0,
            supportsOverlay: c?.preview_supported_surfaces?.includes(n8.q7.OVERLAY) === !0,
            previewAppChannels: O,
        }),
        ee =
            ((t = (0, o.bG)(
                [e1.A],
                () =>
                    null == _
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(e1.A.getMessages(_)),
                [_],
            )),
            null != (l = t?.default_size) &&
            Number.isFinite(l.width) &&
            Number.isFinite(l.height) &&
            l.width > 0 &&
            l.height > 0
                ? l
                : n9);
    ((0, le.x)(_, (e) => {
        q.modes.includes(e) && U(e);
    }),
        nZ(_, () => {
            (g(!0), b(!0));
        }));
    let en = q.modes.includes("frame"),
        el = (0, o.bG)([n7.A], () => n7.A.isPaused(_), [_]),
        er = en && !el,
        {
            previewTargetOptions: ea,
            handleSelectPreviewTarget: es,
            mobilePreview: eo,
            mobilePreviewLabel: eu,
            handleToggleMobilePreview: ec,
            landscapePreview: ed,
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
                                          t === ln.U.APP_CHANNEL && n.length > 1
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
                f = (0, o.bG)([lA.A], () => lA.A.isBuilderPreviewMobile()),
                h = A.intl.string(f ? N.default.tKGF0Q : N.default.peqEOY),
                p = i.useCallback(() => (0, n6.GG)(!f), [f]),
                g = (0, o.bG)([lA.A], () => lA.A.isBuilderPreviewLandscape()),
                x = A.intl.string(g ? N.default.tunI2l : N.default.DoNdjA),
                j = i.useCallback(() => (0, n6.Lw)(!g), [g]),
                v = (0, lS.jS)(t),
                b = i.useMemo(() => (0, lS.Op)(v, l), [v, l]),
                y = (0, lN.A)(t?.preview_application_id ?? null, b),
                k = (0, lf.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || lC.A.refreshProxyTicket(y.id);
                }, [y, k]);
            return {
                previewTargetOptions: d,
                handleSelectPreviewTarget: m,
                mobilePreview: f,
                mobilePreviewLabel: h,
                handleToggleMobilePreview: p,
                landscapePreview: g,
                rotatePreviewLabel: x,
                handleRotatePreview: j,
                previewSurface: b,
                previewFrame: y,
                isRefreshing: k,
                handleRefresh: w,
            };
        })({
            project: c,
            modes: q.modes,
            frameSurface: K,
            frameSurfaceOptions: V,
            previewAppChannels: O,
            setMode: U,
            setFrameSurface: H,
            setAppChannel: J,
        }),
        ej = p && !j,
        ev = A.intl.string(ej ? N.default.JD6Oit : N.default.xjJAQm),
        eb = i.useCallback(() => {
            if (j) {
                (b(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [j]),
        ey = i.useCallback(() => g(!1), []),
        {
            designFeedbackActive: ek,
            designFeedbackToggleRef: eC,
            agentDrivingPreview: eN,
            designFeedbackLabel: eA,
            handleToggleDesignFeedback: eS,
        } = (function (e, t, n) {
            let { active: l } = nE(e);
            i.useEffect(() => {
                null != e && l && !t && nC(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, n2.Zv)(e),
                s = A.intl.string(a ? N.default.Sme0T0 : l ? N.default.vn5Rzu : N.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void nC(e);
                        (n(), nk(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(_, er, w),
        [eE] = i.useState(() => v.isPlatformEmbedded && (0, lv.qM)()),
        eI = null != nW(_);
    i.useEffect(() => {
        null != _ && eI && !er && nK(_);
    }, [_, eI, er]);
    let eM = i.useCallback(() => {
            null != _ &&
                (w(),
                (function (e) {
                    if (null != nG(e)) return;
                    let { byProject: t } = nF.getState();
                    nF.setState({ byProject: { ...t, [e]: nU } });
                })(_));
        }, [_, w]),
        e_ = i.useCallback(() => {
            null != _ && nK(_);
        }, [_]),
        eP = eI ? A.intl.string(N.default.tuQ5f3) : eA,
        eT = i.useCallback(() => {
            b((e) => !e && (g(!0), !0));
        }, []),
        eL = i.useCallback(() => b(!1), []),
        e$ = i.useCallback(() => {
            null != _ && (0, n6._j)(_);
        }, [_]),
        eD = i.useCallback(() => {
            null != _ && (el ? (0, n6._j)(_) : (0, n6.di)(_, ep?.id));
        }, [_, el, ep?.id]),
        ez = i.useCallback(() => {
            var e, t;
            (null != c && ((e = c.id), (t = ep?.id), (0, x.closeConnection)(e), (0, lE.r)(t)), f());
        }, [c, ep?.id, f]),
        eO =
            ((r = i.useCallback(() => {
                null != c && (k(), (0, x.sendUserMessage)(c.id, A.intl.string(N.default.oU20rd)));
            }, [c, k])),
            {
                onExport: r,
                onImport: (s = M(
                    i.useCallback(
                        (e) => {
                            if (null == c) return;
                            let t = c.id,
                                n = E(e);
                            null != n
                                ? (0, u.P0)({ text: n, variant: "critical" })
                                : (0, eX.A)({
                                      title: A.intl.formatToPlainString(N.default["Gm+u1+"], { name: c.name }),
                                      subtitle: A.intl.string(N.default.M7H3sJ),
                                      confirmText: A.intl.string(N.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          k();
                                          try {
                                              await S(t, e, A.intl.string(N.default.Owerd3));
                                          } catch {
                                              (0, u.P0)({
                                                  text: A.intl.string(N.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [c, k],
                    ),
                )).open,
                importInput: s.input,
            }),
        eq = i.useCallback(() => {
            null != c && (0, tY.A)(c, h);
        }, [c, h]),
        eF = (0, lt.JR)(F, D)
            ? { type: "permissions", authorizeProps: z }
            : R && null == P
              ? { type: "checking" }
              : void 0,
        eU = (0, o.bG)([B.Ay], () => null != _ && B.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == c && m) || eU) && (0, d.bG)(eJ.BVt.CHANNEL(h, eY.VV.CONJURE));
    }, [h, c, m, eU]);
    let {
            publishOptions: eG,
            publish: eB,
            publishing: eK,
            confirmation: eV,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...lF,
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
                c = (0, tm.Ay)(e, u),
                d = c?.publishing === !0;
            i.useEffect(() => {
                d && (s(), r(null));
            }, [d, s]);
            let m = d ? null : l;
            return { publishOptions: u, publish: c, publishing: d, confirmation: m };
        })(_, h, R || T),
        eH = (0, lM.L)(eB?.status ?? null),
        eW =
            null == eB
                ? null
                : (0, a.jsx)("div", {
                      className: t8.As,
                      onMouseDown:
                          null == _ || eB.disabled || eK
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, l_.dx)(_);
                                },
                      children: (0, a.jsx)(eR.m, {
                          text: eH,
                          asContainer: !0,
                          children: (0, a.jsx)(et.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eK ? hF : null != eV ? ne.U : void 0,
                              disabled: eB.disabled,
                              onClick: () => eB.run("header"),
                              text: eV ?? eB.label,
                          }),
                      }),
                  }),
        eQ = null == c ? void 0 : () => (0, th.A)(c.id, { guildId: h, isPreview: !0, publishOptions: eG }),
        eZ = (0, a.jsx)(tZ, {
            title: c?.name ?? A.intl.string(N.default.G1WwgK),
            breadcrumb: { title: A.intl.string(N.default.uk6jhJ), onClick: f },
            project: c,
            onOpenProjectSettings: eQ,
            actions:
                null == c
                    ? null
                    : (0, a.jsxs)("div", {
                          className: t8.FO,
                          children: [
                              (0, a.jsx)(lj, {
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
                                  })(F, K, W),
                                  onChange: es,
                              }),
                              en
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === F
                                                ? (0, a.jsx)(ei.A.Icon, {
                                                      icon: eo ? hB : hG,
                                                      tooltip: eu,
                                                      "aria-label": eu,
                                                      selected: eo,
                                                      onClick: ec,
                                                  })
                                                : null,
                                            eo && "frame" === F
                                                ? (0, a.jsx)(ei.A.Icon, {
                                                      icon: hK,
                                                      tooltip: em,
                                                      "aria-label": em,
                                                      selected: ed,
                                                      onClick: ef,
                                                  })
                                                : null,
                                            (0, a.jsx)(nJ, {
                                                enabled: eE && !eI && !eN && !el,
                                                onLongPress: eM,
                                                children: (0, a.jsx)(ei.A.Icon, {
                                                    ref: eC,
                                                    icon: nt.x,
                                                    iconClassName: t8.D8,
                                                    tooltip: eP,
                                                    "aria-label": eP,
                                                    selected: eI || ek,
                                                    disabled: el || (eN && !eI),
                                                    onClick: eI ? e_ : eS,
                                                }),
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" !== F || el
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(ns.A, { frame: ep }),
                                            (0, a.jsx)(lh, { frame: ep, controlProjectId: c.id }),
                                        ],
                                    }),
                              (0, a.jsx)("div", { className: t8.YJ }),
                              y
                                  ? (0, a.jsx)(ei.A.Icon, {
                                        icon: nn.BugIcon,
                                        tooltip: A.intl.string(N.default.Mt5k9d),
                                        "aria-label": A.intl.string(N.default.Mt5k9d),
                                        selected: j,
                                        onClick: eT,
                                    })
                                  : null,
                              (0, a.jsx)(ei.A.Icon, {
                                  icon: tn.SettingsIcon,
                                  tooltip: A.intl.string(N.default.I2XSKe),
                                  "aria-label": A.intl.string(N.default.I2XSKe),
                                  onClick: eQ,
                              }),
                              (0, a.jsx)(tM, {
                                  projectId: c.id,
                                  projectName: c.name,
                                  guildId: h,
                                  projectGuildId: c.guild_id,
                                  isOwner: (0, B.PV)(c),
                                  canRemix: (0, B.H_)(c),
                                  onRefresh: (0, lf.x1)(ep) ? ex : void 0,
                                  isRefreshing: eg,
                                  onTogglePreviewPaused: "frame" === F ? eD : void 0,
                                  previewPaused: el,
                                  previewPauseDisabled: !el && eN,
                                  onClose: ez,
                                  onExport: eO.onExport,
                                  onImport: eO.onImport,
                                  onRemix: eq,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = c.id),
                                          void (0, tv.openModalLazy)(async () => {
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
                                              restoreDisabled: C?.status === "restoring",
                                              onRestoreVersion: (e, t) => I(e, t, !0),
                                          }),
                                          void (0, tv.openModalLazy)(async () => {
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
                                      q.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== q.profileState
                                          ? Z
                                          : null,
                                  previewProjectId: c.id,
                              }),
                              ej
                                  ? null
                                  : (0, a.jsx)(ei.A.Icon, { icon: hU, tooltip: ev, "aria-label": ev, onClick: eb }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: X()(t8.nj, t7.T),
        children: [
            eO.importInput,
            (0, a.jsx)("main", {
                className: t8.JX,
                children:
                    null == c
                        ? (0, a.jsxs)("div", {
                              className: t8.j5,
                              children: [
                                  eZ,
                                  (0, a.jsxs)("div", {
                                      className: t8.sD,
                                      children: [
                                          (0, a.jsx)(ew.D, {
                                              variant: "heading-lg/semibold",
                                              children: A.intl.string(N.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(Q.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: A.intl.string(N.default.fINulo),
                                          }),
                                          (0, a.jsx)(et.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: A.intl.string(N.default["WFJ/vb"]),
                                              onClick: () => (0, G.hF)(h),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tm.bI.Provider, {
                              value: eG,
                              children: (0, a.jsx)(
                                  hO,
                                  {
                                      projectId: c.id,
                                      designFeedbackToggleRef: eC,
                                      applicationId: c.preview_application_id,
                                      previewApplicationId: c.preview_application_id,
                                      surface: eh,
                                      frameLaunchParams: Y,
                                      header: eZ,
                                      chatOpen: p,
                                      onCloseChat: ey,
                                      chatHeaderAction: eW,
                                      debugOpen: y && j,
                                      onCloseDebug: eL,
                                      onRestoreVersion: I,
                                      onImportProject: (0, B.PV)(c) ? eO.onImport : void 0,
                                      restoreState: C,
                                      previewReady: L,
                                      previewGate: eF,
                                      availability: q,
                                      activeMode: F,
                                      widgetApplicationId: Z,
                                      overlayWidgetSize: ee,
                                      previewPaused: el,
                                      onResumePreview: e$,
                                  },
                                  c.id,
                              ),
                          }),
            }),
        ],
    });
}
function hF() {
    return (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: t8.Hv, itemClassName: t8.C5 });
}
function hU(e) {
    return (0, a.jsx)(nl.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function hG(e) {
    return (0, a.jsx)(nr.u, { ...e, size: "custom", width: 20, height: 20 });
}
function hB(e) {
    return (0, a.jsx)(na.k, { ...e, size: "custom", width: 20, height: 20 });
}
function hK(e) {
    return (0, a.jsx)(ni.H, { ...e, size: "custom", width: 20, height: 20 });
}
function hV(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, o.yK)([B.Ay], () => B.Ay.getOwnedProjects()),
        s = (0, o.yK)([m.Ay], () => m.Ay.getSelfMember(n)?.roles ?? [], [n]),
        p = (0, o.bG)(
            [f.A, h.A],
            () => {
                let e = f.A.getGuild(n);
                return null != e && h.A.can(eJ.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [g, j] = i.useState(""),
        v = l ?? null,
        [b, y] = i.useState(!1),
        [k, w] = i.useState(null),
        C = (0, V.z9)("ConjureScreen"),
        [I, M] = i.useState(null),
        P = (0, c.o)().get(K.f_) === U;
    i.useEffect(() => {
        M(null);
    }, [n, P]);
    let T = i.useMemo(() => (!P && C.some((e) => e.id === n) ? n : U), [C, n, P]),
        R = I ?? T,
        L = R === U ? "user" : "guild",
        $ = R === U ? n : R,
        [z, q] = i.useState(null);
    (i.useEffect(() => {
        (0, G.hF)(n);
    }, [n, s, p]),
        i.useEffect(() => {
            (0, G.dm)(n, v);
        }, [n, v]));
    let F = i.useCallback(
            async (e, t, n, l) => {
                let r = await (0, G.gA)({ guild_id: t, install_scope: n });
                ((0, x.ensureConnection)(r, { templateId: l }),
                    (0, x.stageModelSettings)(r, z ?? D),
                    e(r),
                    (0, d.pX)(eJ.BVt.CHANNEL(t, eY.VV.CONJURE, r)),
                    j(""),
                    q(null));
            },
            [z],
        ),
        W = i.useCallback(
            async (e) => {
                let t = (e ?? g).trim(),
                    n = O({ idea: t, installScope: L, submitting: b });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && j(e), y(!0), w(null));
                    try {
                        await F((e) => (0, x.sendUserMessage)(e, t), $, L);
                    } catch (e) {
                        w((0, _.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [F, L, $, g, b],
        ),
        X = i.useCallback(
            async (e) => {
                if (!b) {
                    (y(!0), w(null));
                    try {
                        await F(
                            (t) => {
                                var n;
                                (0, x.sendUserMessage)(
                                    t,
                                    ((n = e.name),
                                    A.intl.formatToPlainString(N.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            $,
                            L,
                            e.id,
                        );
                    } catch (e) {
                        w((0, _.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [F, L, $, b],
        ),
        J = i.useCallback(
            async (e, t) => {
                let n = await (0, G.gA)({ guild_id: t, install_scope: "guild" });
                return (
                    (0, x.ensureConnection)(n, { templateId: e.id }),
                    (0, x.stageModelSettings)(n, z ?? D),
                    { projectId: n, intake: await (0, H.Yn)(n, e) }
                );
            },
            [z],
        ),
        Y = i.useCallback(async (e, t, n, l) => {
            (B.Ay.getProject(t)?.guild_id !== n &&
                (await (0, G.M7)(t, { guild_id: n, preview_guild_id: n }).catch((e) => {
                    throw new _.DS((0, _.hj)(e), (0, _.$k)(e));
                })),
                (0, x.sendUserMessage)(t, l, void 0, { templateId: e.id }),
                (0, d.pX)(eJ.BVt.CHANNEL(n, eY.VV.CONJURE, t)),
                q(null));
        }, []),
        Q = i.useCallback((e) => {
            (0, G.xx)(e).catch(() => void 0);
        }, []),
        Z = i.useCallback(
            (e) => {
                let t = B.Ay.getProject(e)?.guild_id ?? n;
                ((0, d.pX)(eJ.BVt.CHANNEL(t, eY.VV.CONJURE, e)), q(null));
            },
            [n],
        ),
        [ee, et] = i.useState(!1),
        en = i.useCallback(
            async (e, t) => {
                let l = E(e);
                if (null != l) return void (0, u.P0)({ text: l, variant: "critical" });
                et(!0);
                let r = null;
                try {
                    ((r = await (0, G.gA)({ guild_id: n, install_scope: t })),
                        (0, x.ensureConnection)(r),
                        (0, x.stageModelSettings)(r, z ?? D),
                        await S(r, e, A.intl.string(N.default["LUc7/5"])),
                        (0, d.pX)(eJ.BVt.CHANNEL(n, eY.VV.CONJURE, r)),
                        q(null));
                } catch {
                    (null != r && (await (0, G.xx)(r).catch(() => void 0)),
                        (0, u.P0)({ text: A.intl.string(N.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    et(!1);
                }
            },
            [n, z],
        ),
        el = i.useCallback(
            (e) => {
                (0, d.pX)(eJ.BVt.CHANNEL(n, eY.VV.CONJURE, e));
            },
            [n],
        ),
        er = i.useCallback(() => {
            (0, d.pX)(eJ.BVt.CHANNEL(n, eY.VV.CONJURE));
        }, [n]),
        ea = i.useCallback((e) => {
            (j(e), w(null));
        }, []),
        ei = (0, o.bG)(
            [B.Ay],
            () => {
                if (null == v) return null;
                let e = B.Ay.getProject(v);
                return null == e || (0, B.PV)(e) || e.guild_id === n ? e : null;
            },
            [v, n],
        ),
        es = (0, o.bG)([B.Ay], () => B.Ay.hasFetchedGuildProjects(n), [n]);
    return null != v
        ? (0, a.jsx)(hq, { project: ei, projectsLoaded: es, onBack: er, guildId: n }, v)
        : (0, a.jsx)(t9, {
              projects: r,
              modelSettings: z,
              onModelSettingsChange: q,
              idea: g,
              guildId: n,
              submitting: b,
              createError: k,
              createDisabled: "idea" === (t = O({ idea: g, installScope: L, submitting: b })) || "submitting" === t,
              onSelectProject: el,
              onIdeaChange: ea,
              onCreate: W,
              onCreateFromTemplate: X,
              onStartTemplate: J,
              onSubmitTemplate: Y,
              onCancelTemplate: Q,
              onSkipTemplate: Z,
              onImportNewProject: en,
              importing: ee,
              conjureTarget: R,
              onConjureTargetChange: M,
              eligibleGuilds: C,
          });
}
