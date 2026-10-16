(n.r(t), n.d(t, { default: () => hi }));
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
    x = n(723312);
(n(323874), n(14289), n(35956));
var v = n(77729),
    j = n(723702),
    b = n(264572).Buffer;
async function y(e, t) {
    if (j.isPlatformEmbedded) {
        let n = b.from(await e.arrayBuffer());
        if ("function" == typeof v.A.fileManager.saveWithDialog2) await v.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await v.A.fileManager.saveWithDialog(n, t);
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
async function N(e, t) {
    let n = await (0, k.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new w(n.status);
    return await n.blob();
}
var C = n(261425),
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
        : A.intl.formatToPlainString(C.default.ThxcOX, { size: (0, p.sM)((0, p.Ju)(t)) });
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
        r = await N(e, l);
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
var F = n(950305),
    q = n(548118);
let U = "user";
var G = n(371169),
    B = n(260498),
    K = n(941985),
    V = n(16619),
    H = n(952644);
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
    es = n(922016),
    eo = n(980707),
    eu = n(477782),
    ec = n(81369),
    ed = n(664121);
let em = [
    { value: "user", icon: F.UserIcon, nameMessage: C.default.s1TsXl },
    { value: "guild", icon: ed.R, nameMessage: C.default.LlLIJw },
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
                        "aria-label": A.intl.string(C.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(eu.rX, {
                            label: A.intl.string(C.default.NyVn6T),
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
                        text: A.intl.string(C.default.NJGZA3),
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
let ev = { x: 5, y: 7 },
    ej = { x: 5, y: 4 };
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
    eN = n(770178),
    eC = n(765548),
    eA = n(595528),
    eS = n(885576),
    eE = n(662429);
let eI = "heading-xxl/semibold",
    eM = !1;
function e_() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, eC.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        r = (0, eN.w)(l, [], { fireOnMount: !0 }),
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
    let d = A.intl.string(C.default["+5XyCR"]);
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
    eO = n(837984),
    eF = n(359589),
    eq = n(254575);
function eU(e) {
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
function eG(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = eU(d),
        h = ez.P.indexOf(t.tier),
        p = d ? eP.t : eT._,
        g = ez.P.map(eD.D0),
        x = (0, eD.Tc)(t.tier),
        { text: v, phase: j } = (0, e$.Q)(x);
    return (0, a.jsx)("div", {
        className: eq.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: X()(eq.t$, { [eq.Zr]: u && c, [eq.GF]: !u }),
            role: "dialog",
            "aria-label": A.intl.string(C.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: X()(eq.Nr, eq.uO, { [eq.Zr]: d && f.entered, [eq.GF]: !d }),
                          children: (0, a.jsx)(eF.bR, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${eq.Nr} ${eq.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eq.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: eq.y6,
                                    "aria-expanded": d,
                                    "aria-label": A.intl.string(C.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: A.intl.string(C.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(p, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: eq.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(Q.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: X()(eq.Z, { [eq.xQ]: "exit" === j, [eq.lm]: "enter" === j }),
                                    children: v,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: eq.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: eq.Nb,
                                    children: [
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: A.intl.string(C.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: A.intl.string(C.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(eO.A, {
                                    activeIndex: h,
                                    stops: g,
                                    ariaLabel: A.intl.string(C.default.aBPQxX),
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
function eB(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, eF.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = eU(f);
    return (0, a.jsx)(es.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(eG, {
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
                text: A.intl.string(C.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(eh.D, {
                    innerRef: c,
                    className: o ?? eq.hZ,
                    "aria-label": A.intl.string(C.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(eL.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var eK = n(434279),
    eV = n(140735),
    eH = n(442433),
    eW = n(314116),
    eX = n(652215),
    eJ = n(746080),
    eY = n(855793),
    eQ = n(287809),
    eZ = n(427262),
    e0 = n(245179),
    e1 = n(503275);
function e2(e) {
    let t = e?.id,
        n = e?.owner_user_id,
        l = (0, o.yK)(
            [e0.A],
            () =>
                null == t
                    ? []
                    : [
                          ...new Set(
                              e0.A.getMessages(t)
                                  .flatMap((e) => (null != e.user_id && e.user_id !== n ? [e.user_id] : []))
                                  .reverse(),
                          ),
                      ],
            [t, n],
        );
    i.useEffect(() => {
        null != n && ((0, e1.Y_)(n), l.forEach(e1.Y_));
    }, [n, l]);
    let r = (0, o.bG)([eQ.default], () => (null == n ? null : eQ.default.getUser(n)), [n]),
        a = (0, o.yK)([eQ.default], () => l.map((e) => eQ.default.getUser(e)).filter((e) => null != e), [l]);
    return i.useMemo(() => ({ creator: r ?? null, collaborators: a }), [r, a]);
}
var e3 = n(782603),
    e5 = n(780338),
    e6 = n(663417),
    e4 = n(70688),
    e7 = n(173936),
    e8 = n(473935),
    e9 = n(625903),
    te = n(408278),
    tt = n(365199),
    tn = n(7437),
    tl = n(147036),
    tr = n(957565),
    ta = n(785389),
    ti = n(123917),
    ts = n(860402);
let to = new Set();
var tu = n(329356),
    tc = n(442331),
    td = n(616334),
    tm = n(189714),
    tf = n(733791),
    th = n(189213),
    tp = n(331322),
    tg = n(192308),
    tx = n(664619),
    tv = n(706935);
function tj(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [c, d] = i.useState(!1),
        [m, f] = i.useState(null),
        h = "delete" === l,
        p = h ? (0, tf.fI)(n) : (0, tf.Kd)(n),
        g = h ? null : (0, tf.L4)(n),
        x = (0, tf.Mi)(n),
        v = h
            ? A.intl.formatToPlainString(C.default.CJBhb2, { name: n.projectName })
            : A.intl.formatToPlainString(C.default.x6FvsZ, { app: n.appName });
    async function j() {
        (d(!0), f(null));
        let e = h ? (0, G.xx)(t.id) : (0, tx.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (d(!1), l?.ok !== !0)
            ? f(A.intl.string(h ? C.default["0XDHob"] : C.default.PJ2Fkn))
            : (h || (0, u.P0)({ text: (0, tf.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(th.a, {
        ...r,
        role: "alertdialog",
        title: h ? v : (0, tf.WX)((0, tv.tb)(C.default.x6FvsZ, n.appName)),
        subtitle: h ? (0, tf.J)(n) : A.intl.string(C.default["8OKM1N"]),
        "aria-label": v,
        notice: null == m ? void 0 : { message: m, type: "critical", role: "alert" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: A.intl.string(h ? C.default.aC42bN : C.default.BGF8VT),
                variant: "critical-primary",
                loading: c,
                disabled: c,
                onClick: () => {
                    j().catch(() => {});
                },
            },
        ],
        children: (0, a.jsxs)(tp.B, {
            gap: 12,
            children: [
                p.length > 0 || null != g
                    ? (0, a.jsx)(tv.Ay, {
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
function tb(e) {
    (0, tg.openModal)((t) => (0, a.jsx)(tj, { ...t, ...e }));
}
var ty = n(587895);
function tk(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, c] = i.useState(null),
        d = (0, o.bG)([ty.A], () => ty.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        m = A.intl.formatToPlainString(C.default.m8KWic, { app: d });
    async function f() {
        (r(!0), c(null));
        let e = await (0, tx.R_)(t.id);
        (r(!1), e)
            ? ((0, u.P0)({ text: A.intl.formatToPlainString(C.default.b8LN7N, { app: d }), variant: "success" }),
              n.onClose())
            : c(A.intl.string(C.default["rE/0SD"]));
    }
    return (0, a.jsx)(th.a, {
        ...n,
        role: "alertdialog",
        title: m,
        subtitle: A.intl.string(C.default.wve4kB),
        "aria-label": m,
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: A.intl.string(C.default.GqcQyH),
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
var tw = n(552821);
let tN = [];
function tC(e) {
    (0, u.P0)({ text: e, variant: "critical" });
}
function tA(e) {
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
            onClose: v,
            refreshApplicationId: j,
            previewProjectId: b,
            onCloseMenu: y,
        } = e,
        k = (0, tm.iI)(t),
        w = i.useContext(tu.bI),
        { pending: N, refresh: S } = (0, tn.A)(j ?? null),
        { pending: E, connect: I } = (function (e, t) {
            let [n, l] = i.useState(to),
                r = i.useRef(to),
                a = i.useCallback((e) => {
                    ((r.current = (0, ta.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, ta.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, ts.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, ti.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, ta.rq)(l.error)
                                          ? A.intl.string(C.default["jCQ/1B"])
                                          : A.intl.string(C.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(b ?? null, tC),
        M = (0, o.bG)([tc.A], () => (null == b ? tN : tc.A.getDeclaredConnections(b))),
        _ = i.useMemo(() => (0, ta.Xl)(M), [M]),
        P = (0, tf.Bs)(t),
        T = (0, tf.CU)(t) && s,
        R = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: A.intl.string(C.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString(C.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString(C.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != j, refreshPending: N, offers: _, connectPending: E }),
        L = i.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        $ = null != f && c,
        D = s && null != m,
        z = $ || null != d || D || null != h || null != p,
        O = tr.p5 && null != l,
        F = tr.p5,
        q = k ? e3.BellIcon : e5.BellSlashIcon;
    return (0, a.jsxs)(eo.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": A.intl.string(A.t.ogxXGq),
        onClose: y,
        onSelect: y,
        children: [
            null != g || null != v
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          null != g
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "refresh",
                                    icon: e6.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: e6.RefreshIcon },
                                    label: A.intl.string(C.default["p4B/7M"]),
                                    disabled: x,
                                    action: g,
                                })
                              : null,
                          null != v
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "close",
                                    icon: e4.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: e4.DoorExitIcon },
                                    label: A.intl.string(C.default["/TlGcK"]),
                                    action: v,
                                })
                              : null,
                      ],
                  })
                : null,
            R.length > 0
                ? (0, a.jsx)(eu.rX, {
                      children: R.map((e) =>
                          (0, a.jsx)(
                              eu.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void S();
                                      let t = null == e.connectionType ? null : L.get(e.connectionType);
                                      null != t && I(t);
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
                    label: A.intl.string(k ? C.default.s9rCuH : C.default["a+i/As"]),
                    icon: q,
                    leadingAccessory: { type: "icon", icon: q },
                    action: () => (0, tm.$L)(t, !k),
                }),
            }),
            z
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          $
                              ? (0, a.jsx)(eu.Dr, { id: "remix", label: A.intl.string(C.default.XWgAfc), action: f })
                              : null,
                          null != d
                              ? (0, a.jsx)(eu.Dr, { id: "export", label: A.intl.string(C.default.WsEEP7), action: d })
                              : null,
                          D
                              ? (0, a.jsx)(eu.Dr, { id: "import", label: A.intl.string(C.default.rWGY3e), action: m })
                              : null,
                          null != h
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "connect-tool",
                                    label: A.intl.string(C.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != p
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "history",
                                    label: A.intl.string(C.default["3hIVou"]),
                                    action: p,
                                })
                              : null,
                      ],
                  })
                : null,
            F
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          O
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "copy-link",
                                    label: A.intl.string(A.t.WqhZss),
                                    icon: e7.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: e7.LinkIcon },
                                    action: () =>
                                        (0, tr.C)((0, tl.n)(l, eJ.VV.CONJURE, t), () =>
                                            (0, u.P0)({ text: A.intl.string(A.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eu.Dr, {
                              id: "copy-project-id",
                              label: A.intl.string(C.default["nm/zuU"]),
                              icon: e8.L,
                              leadingAccessory: { type: "icon", icon: e8.L },
                              action: () =>
                                  (0, tr.C)(t, () =>
                                      (0, u.P0)({ text: A.intl.string(C.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || P?.canRemoveBot === !0
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          s
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "settings",
                                    label: A.intl.string(C.default.FzfmQ8),
                                    icon: e9.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: e9.SettingsIcon },
                                    action: () =>
                                        (0, td.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: w,
                                        }),
                                })
                              : null,
                          P?.canRemoveBot === !0
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "remove-from-server",
                                    label: A.intl.formatToPlainString(C.default["3gKG2j"], { server: P.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        null != e && tb({ project: e, target: P, action: "remove" });
                                    },
                                })
                              : null,
                          T
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "unpublish",
                                    label: A.intl.string(C.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = B.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, tg.openModal)((t) => (0, a.jsx)(tk, { ...t, ...e })));
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
                                        if (null != e && null != P) tb({ project: e, target: P, action: "delete" });
                                        else
                                            (0, eW.A)({
                                                title: A.intl.formatToPlainString(C.default.CJBhb2, { name: n }),
                                                subtitle: A.intl.string(C.default["0OmrVn"]),
                                                confirmText: A.intl.string(A.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, G.K)(t, () =>
                                                        (0, u.P0)({
                                                            text: A.intl.string(C.default["0XDHob"]),
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
function tS(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tA, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: tw.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(eR.m, {
                              text: A.intl.string(A.t["UKOtz+"]),
                              children: (0, a.jsx)(te.K, {
                                  icon: tt.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": A.intl.string(A.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(ei.A.Icon, {
                              icon: tt.MoreHorizontalIcon,
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
var tE = n(497183),
    tI = n(104171),
    tM = n(286739);
function t_(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: X()(tM.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(tI.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: tI.DN.SIZE_16 }),
    });
}
var tP = n(217846),
    tT = n(536637),
    tR = n.n(tT),
    tL = n(941650);
function t$(e) {
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
                    (0, u.P0)({ text: A.intl.formatToPlainString(C.default.aN2JdD, { name: n }) }),
                    I(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[conjure] project export failed", t, e),
                                (0, u.P0)({
                                    text:
                                        409 === (n = e instanceof w ? e.status : null)
                                            ? A.intl.string(C.default["9oqbEw"])
                                            : 404 === n
                                              ? A.intl.string(C.default["0W8uLq"])
                                              : A.intl.string(C.default.N8753A),
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
                                : (0, eW.A)({
                                      title: A.intl.formatToPlainString(C.default["Gm+u1+"], { name: n }),
                                      subtitle: A.intl.string(C.default.M7H3sJ),
                                      confirmText: A.intl.string(C.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, d.pX)(eX.BVt.CHANNEL(m, eJ.VV.CONJURE, t));
                                          try {
                                              await S(t, e, A.intl.string(C.default.Owerd3));
                                          } catch {
                                              (0, u.P0)({
                                                  text: A.intl.string(C.default["Q+l4Hv"]),
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
        v =
            null == c.updated_at
                ? null
                : A.intl.formatToPlainString(C.default.AXydi3, { time: tR()(c.updated_at).fromNow() }),
        j = (0, eK.wu)(c),
        b =
            (0, o.bG)([f.A], () => (null == j ? null : (f.A.getGuild(j)?.name ?? null)), [j]) ??
            A.intl.string(C.default["3QFps8"]),
        y = (0, o.bG)([B.Ay], () => B.Ay.isProjectDeleting(c.id), [c.id]),
        k = (function (e) {
            let { creator: t, collaborators: n } = e2(e);
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
                                      ? A.intl.formatToPlainString(C.default.t5RWBS, { creator: e })
                                      : A.intl.formatToPlainString(C.default["b5uCe/"], {
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
                                  (0, eZ.mG)(t),
                                  n.map((e) => (0, eZ.mG)(e)),
                              ),
                          },
                [t, n],
            );
        })(g ? c : null),
        N = i.useId(),
        _ = (0, a.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", className: tL.j1, children: c.name }),
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
        className: X()(tL.OY, { [tL.Wy]: y }),
        "aria-busy": y,
        children: [
            (0, a.jsx)(eY.Ay, { projectId: c.id }),
            y ? null : (0, a.jsx)(tP.a, { projectId: c.id }),
            (0, a.jsxs)(eh.D, {
                className: tL.W6,
                onClick: y ? void 0 : h,
                onContextMenu: function (e) {
                    y || (0, eH.jA)(e, () => (0, a.jsx)(tA, { ...P, onCloseMenu: eH.Z_ }));
                },
                tabIndex: y ? -1 : void 0,
                "aria-describedby": null != k ? N : void 0,
                children: [
                    (0, a.jsx)(tE.A, { project: c, size: "card", className: tL.VJ }),
                    (0, a.jsxs)("div", {
                        className: tL.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: tL.Ub,
                                children: [
                                    null != k ? (0, a.jsx)(eR.m, { text: k.label, ariaHidden: !0, children: _ }) : _,
                                    null == k || y ? null : (0, a.jsx)(t_, { creator: k, className: tL.rb }),
                                    y ? null : (0, a.jsx)(tP.n, { projectId: c.id, className: tL.fs }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: tL.h3,
                                children: [
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tL.Wb,
                                        children: y ? A.intl.string(C.default.Yh5pAc) : b,
                                    }),
                                    null == v || y
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: tL.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(Q.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tL.zM,
                                                      children: v,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != k ? (0, a.jsx)(eV.A, { id: N, children: k.label }) : null,
            (0, a.jsx)("div", {
                className: tL.M2,
                children: y
                    ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: tL.Pl,
                          children: [(0, a.jsx)(tS, { ...P, trigger: "iconButton" }), x.importInput],
                      }),
            }),
        ],
    });
}
var tD = n(246338);
let tz = "user",
    tO = "no-server",
    tF = new Map();
function tq(e) {
    return tF.get(e) ?? null;
}
function tU(e) {
    switch (e) {
        case "all":
        case tz:
        case tO:
            return null;
        default:
            return e;
    }
}
function tG(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tz:
            return "user" === e.install_scope;
        case tO:
            return null == (0, eK.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tB = n(506774);
let tK = "ConjureProjectsPanelOpen";
function tV() {
    return tB.w.get(tK) ?? null;
}
function tH(e) {
    return `ConjureProjectsPanel:${e}`;
}
var tW = n(95264),
    tX = n(631417);
function tJ(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i } = e,
        s = A.intl.string(C.default.FzfmQ8);
    return (0, a.jsx)(ei.A, {
        hideSearch: !0,
        toolbar: n,
        className: tX.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: tX.QF,
            children: [
                (0, a.jsx)(er.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: ea.A.colors.TEXT_STRONG,
                    className: tX.Kk,
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
                              className: tX.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, a.jsx)(tE.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(ei.A.Title, { className: tX.Qw, wrapperClassName: tX.DD, children: t }),
            ],
        }),
    });
}
var tY = n(683071),
    tQ = n(47167),
    tZ = n(808728),
    t0 = n(994500);
let t1 = "conjuring-help";
var t2 = n(173114);
function t3() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, o.cf)([eQ.default, f.A, tZ.Ay, t0.A], () => {
                let e = eQ.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of f.A.getGuildsArray()) {
                    if (!t.features.has(eX.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = tZ.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, tQ.m1)(t, eQ.default, t0.A) === t1;
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
                    ? (0, d.pX)(eX.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, ti.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: t2.l,
              children: (0, a.jsx)(tY.w, {
                  type: "info",
                  iconAlign: "center",
                  message: A.intl.format(C.default["6anmu1"], { channel: t1, onNavigate: t }),
                  role: "none",
              }),
          });
}
var t5 = n(606128),
    t6 = n(323140);
function t4(e) {
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
            onSelectProject: v,
            onIdeaChange: j,
            onCreate: b,
            onCreateFromTemplate: y,
            onStartTemplate: k,
            onSubmitTemplate: w,
            onCancelTemplate: N,
            onSkipTemplate: S,
            onImportNewProject: E,
            importing: I,
        } = e,
        [M, _] = i.useState(() => ({ guildId: r, filter: tq(r) })),
        T = (M.guildId === r ? M.filter : tq(r)) ?? r,
        L = i.useCallback(
            (e) => {
                (tF.set(r, e), _({ guildId: r, filter: e }));
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
                { id: "conjure-filter-all", value: "all", leading: er.D, label: A.intl.string(C.default["Xi/oIC"]) },
                { id: "conjure-filter-user", value: tz, leading: F.UserIcon, label: A.intl.string(C.default.kCSgmG) },
                { id: "conjure-filter-no-server", value: tO, leading: ed.R, label: A.intl.string(C.default["3QFps8"]) },
                ...O.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(q.Ay, { guild: e, size: q.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [O],
        ),
        V = (0, o.yK)(
            [B.Ay, f.A],
            () => {
                let e = tU(T);
                if (null != e) return B.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(f.A.getGuilds()))
                    B.Ay.hasFetchedGuildProjects(e.id) && t.push(...B.Ay.getSharedProjects(e.id));
                return t;
            },
            [T],
        );
    i.useEffect(() => {
        let e = tU(T);
        null == e || B.Ay.hasFetchedGuildProjects(e) || (0, G.hF)(e);
    }, [T]);
    let H = i.useMemo(() => V.filter((e) => tG(e, T)).sort(eK.Ds), [V, T]),
        W = i.useMemo(
            () => [
                {
                    label: A.intl.string(C.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: U,
                            label: A.intl.string(C.default.UPLaGM),
                            leading: F.UserIcon,
                        },
                        ...p.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(q.Ay, { guild: e, size: q.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [p],
        ),
        es = i.useMemo(
            () =>
                t
                    .filter((e) => tG(e, T))
                    .slice()
                    .sort(eK.Ds),
            [t, T],
        ),
        eo = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, tD.Ot)(e, r)
                    ? v(e.id)
                    : (0, u.P0)({ text: A.intl.string(C.default["XUl/cs"]) });
            },
            [r, v],
        ),
        eu = A.intl.string(C.default.ab1sMf),
        ec = [A.intl.string(C.default["9w+Chc"]), A.intl.string(C.default.WAvmdq), A.intl.string(C.default.SKsrzl)],
        em = [
            {
                id: "moderation-bot",
                name: A.intl.string(C.default.lGLnE8),
                description: A.intl.string(C.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: A.intl.string(C.default.uJKQTs),
                description: A.intl.string(C.default["+dKy/B"]),
            },
            { id: "rust-sphere", name: A.intl.string(C.default.iF5Oru), description: A.intl.string(C.default.NbDDO6) },
        ],
        eh = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: r,
                        eligibleGuilds: p,
                        onStart: (t) => k(e.name, t),
                        onSubmit: (t, n, l) => w(e, t, n, l),
                        onCancel: N,
                        onSkip: S,
                    }),
                    (0, tg.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("881965"), n.e("166781")]).then(
                                n.bind(n, 790028),
                            );
                            return (n) => (0, a.jsx)(e, { ...n, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                y(e);
            },
            [p, r, N, y, S, k, w],
        ),
        eg = A.intl.string(C.default.zzYLlW),
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
        ey = A.intl.string(C.default["2XcV3x"]),
        ek = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || b());
            },
            [d, b],
        ),
        ew = tU(T) ?? r,
        eN = (0, o.bG)([B.Ay], () => B.Ay.getGuildProjectsFetchState(ew), [ew]),
        eC = (0, o.bG)([B.Ay], () => B.Ay.getGuildProjectsFetchState(r), [r]),
        [eA, eS] = i.useState(tV),
        eE = i.useMemo(() => tB.w.get(tH(r)) ?? !1, [r]),
        eI = "success" === eC,
        eM = (0, o.yK)([B.Ay], () => B.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => tG(e, r)),
        eP = eA ?? (!!eM || "error" === eC || (!eI && eE));
    i.useEffect(() => {
        eI && tB.w.set(tH(r), eM);
    }, [eI, eM, r]);
    let eT = i.useCallback((e) => {
            (tB.w.set(tK, e), eS(e));
        }, []),
        eR = i.useCallback(() => eT(!eP), [eT, eP]),
        eL = i.useCallback(() => eT(!1), [eT]),
        e$ = A.intl.string(C.default.kar7jh),
        eD = eP ? e$ : A.intl.string(C.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: X()(t6.nj, t6.a0, t5.T),
        children: (0, a.jsxs)("div", {
            className: t6.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: t6.ps,
                    children: [
                        (0, a.jsx)(tJ, {
                            title: A.intl.string(C.default.uk6jhJ),
                            actions: (0, a.jsx)(ei.A.Icon, {
                                icon: J.Z,
                                tooltip: eD,
                                "aria-label": eD,
                                selected: eP,
                                onClick: eR,
                            }),
                        }),
                        (0, a.jsx)(Y.Ip, {
                            className: t6.Yy,
                            children: (0, a.jsx)("div", {
                                className: t6.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: X()(t6.Qs, t6.Ix),
                                    children: [
                                        (0, a.jsx)(t3, {}),
                                        (0, a.jsx)(e_, {}),
                                        (0, a.jsxs)("section", {
                                            className: t6.WI,
                                            "aria-label": eg,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t6.G9,
                                                    children: [
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eg,
                                                        }),
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: A.intl.string(C.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eb, {
                                                    listClassName: t6.Aw,
                                                    radius: ev,
                                                    children: em.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t6.EA,
                                                                children: (0, a.jsxs)(ep, {
                                                                    disabled: s,
                                                                    ariaLabel: A.intl.formatToPlainString(
                                                                        C.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: X()(t6.nx, t6.rz),
                                                                    onClick: () => eh(e),
                                                                    children: [
                                                                        (0, a.jsx)(Q.E, {
                                                                            className: t6.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(Q.E, {
                                                                            className: t6.BK,
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
                                            className: t6.WI,
                                            "aria-label": ey,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t6.G9,
                                                    children: [
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ey,
                                                        }),
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: A.intl.string(C.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eb, {
                                                    listClassName: t6.Aw,
                                                    radius: ej,
                                                    children: ec.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t6.EA,
                                                                children: (0, a.jsx)(ep, {
                                                                    disabled: s,
                                                                    className: t6.nx,
                                                                    onClick: () => b(e),
                                                                    children: (0, a.jsx)(Q.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: t6.un,
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
                            className: t6.Yl,
                            children: (0, a.jsxs)("div", {
                                className: X()(t6.Qs, t6.DA),
                                children: [
                                    (0, a.jsx)(Z.f, {
                                        label: eu,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: l,
                                        placeholder: eu,
                                        error: c,
                                        onChange: j,
                                        onKeyDown: ek,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: t6.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: t6.gH,
                                                children: (0, a.jsx)(ee.l, {
                                                    selectionMode: "single",
                                                    label: A.intl.string(C.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: A.intl.string(C.default.NyVn6T),
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
                                                              ? A.intl.string(C.default.s28pGG)
                                                              : A.intl.formatToPlainString(C.default.Wy5aK4, {
                                                                    count: ex,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(eB, {
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
                                        children: A.intl.string(C.default.NvvCzX),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("aside", {
                    className: t6.pA,
                    hidden: !eP,
                    "aria-label": A.intl.string(C.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: t6.IR,
                            children: [
                                (0, a.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: t6.RM,
                                    children: A.intl.string(C.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: t6.Ss,
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
                            className: t6.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: t6.Vw,
                                    children: (0, a.jsx)(ee.l, {
                                        selectionMode: "single",
                                        label: A.intl.string(C.default.U6TqU9),
                                        hideLabel: !0,
                                        options: K,
                                        value: T,
                                        onSelectionChange: L,
                                    }),
                                }),
                                (0, a.jsx)(Q.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: t6.wE,
                                    children: A.intl.string(C.default.JQpNkh),
                                }),
                                ("unattempted" === eN || "loading" === eN) && 0 === es.length
                                    ? (0, a.jsx)("div", { className: t6.E8, children: (0, a.jsx)(el.y, {}) })
                                    : "error" === eN && 0 === es.length
                                      ? (0, a.jsxs)("div", {
                                            className: t6.E8,
                                            children: [
                                                (0, a.jsx)(Q.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: t6.JS,
                                                    children: A.intl.string(C.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(et.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: A.intl.string(C.default["WFJ/vb"]),
                                                    onClick: () => (0, G.hF)(ew),
                                                }),
                                            ],
                                        })
                                      : 0 === es.length
                                        ? (0, a.jsx)("div", {
                                              className: t6.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: t6.ST,
                                                  children: [
                                                      (0, a.jsx)(er.D, { size: "lg", color: ea.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: t6.sI,
                                                          children: A.intl.string(C.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: t6.Dq,
                                              children: es.map((e) =>
                                                  (0, a.jsx)(
                                                      t$,
                                                      {
                                                          project: e,
                                                          guildId: r,
                                                          onSelect: () => eo(e),
                                                          onRemix: () => (0, tW.A)(e, r),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                H.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: t6.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: t6.uc,
                                                  children: [
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: A.intl.string(C.default["wFi8+o"]),
                                                      }),
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: A.intl.string(C.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: t6.Dq,
                                                  children: H.map((e) =>
                                                      (0, a.jsx)(
                                                          t$,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => eo(e),
                                                              onRemix: () => (0, tW.A)(e, r),
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
var t7 = n(478016),
    t8 = n(604525),
    t9 = n(92446),
    ne = n(534890),
    nt = n(646270),
    nn = n(31300),
    nl = n(831453),
    nr = n(270593),
    na = n(839214);
let ni = Object.freeze({ x: 0.5, y: 0.5 });
function ns(e) {
    return "" !== e.trim();
}
function no(e) {
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
function nu(e) {
    let { kind: t, name: n } = no(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function nc(e) {
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
let nd = "[conjure:selected] ",
    nm = " \u2014 ";
function nf(e) {
    if (!e.startsWith(nd)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(nd.length),
        a = r.indexOf(nm),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let nh = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    np = new Map(),
    ng = new Set();
function nx(e) {
    return np.get(e) ?? nh;
}
function nv(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? np.set(e, t) : np.delete(e), [...ng]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function nj(e) {
    let t = nx(e);
    t.active || nv(e, { ...t, active: !0 });
}
function nb(e) {
    let t = nx(e);
    t.active && nv(e, { ...t, active: !1 });
}
function ny(e) {
    np.has(e) && nv(e, nh);
}
function nk(e, t) {
    let n = nx(e);
    n.active && nv(e, { ...n, context: t });
}
function nw(e, t) {
    return null != t && e.authorId === t;
}
function nN(e) {
    return (
        ng.add(e),
        () => {
            ng.delete(e);
        }
    );
}
function nC(e) {
    let t = i.useCallback(() => (null == e ? nh : nx(e)), [e]);
    return i.useSyncExternalStore(nN, t, t);
}
(n(134528), n(947204));
let nA = { past: [], present: [], future: [] };
function nS(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function nE(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function nI(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => nE(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: nE(e.from, t, n), to: nE(e.to, t, n) };
        case "text":
            return { ...e, at: nE(e.at, t, n) };
    }
}
function nM(e) {
    return e.some((e) => "erase" !== e.kind);
}
function n_(e, t) {
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
function nP(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function nT(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function nR(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => nT(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = nT(e.from, t),
                l = nT(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = nT(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function nL(e) {
    return nM(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let n$ = [3, 6, 12],
    nD = [10, 20, 40],
    nz = (0, na.D)(() => ({ byProject: {} })),
    nO = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: nA,
        sketchDismissedFor: null,
    };
function nF(e) {
    return nz.getState().byProject[e] ?? null;
}
function nq(e, t) {
    let n = nF(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = nz.getState();
    nz.setState({ byProject: { ...r, [e]: l } });
}
function nU(e) {
    if (null == nF(e)) return;
    let { [e]: t, ...n } = nz.getState().byProject;
    (nz.setState({ byProject: n }), ny(e));
}
function nG(e, t) {
    null != nF(e) &&
        (nq(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? nj(e) : nb(e));
}
function nB(e, t) {
    nq(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return nS(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return nS(
                        e,
                        e.present.map((e) => (e.id === t.id ? nI(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : nS(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : nS(e, []);
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
function nK(e) {
    return nz.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var nV = n(39416);
function nH(e) {
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
            className: nV.i5,
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
let nW = new Set(),
    nX = null;
function nJ(e, t) {
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
                nW.add(t),
                () => {
                    nW.delete(t);
                }
            );
        }, [e]));
}
var nY = n(885386);
function nQ() {
    return nY.Q_.useSetting() || !1;
}
var nZ = n(573083),
    n0 = n(128761),
    n1 = n(12177),
    n2 = n(744627),
    n3 = n(951178);
let n5 = { width: 320, height: 240 };
var n6 = n(855859),
    n4 = n(238490),
    n7 = n(991690),
    n8 = n(696645);
function n9(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function le(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, n8.XV)(e.surface)
                : A.intl.formatToPlainString(C.default["6xVl+N"], {
                      surface: (0, n8.XV)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return A.intl.string(C.default.y5GiL1);
        case "overlay":
            return A.intl.string(C.default["2940LX"]);
        case "bot":
            return A.intl.string(C.default.tjpaGN);
    }
}
var lt = n(598748),
    ln = n(294323),
    ll = n(627363),
    lr = n(457827),
    la = n(25451),
    li = n(280450),
    ls = n(373677),
    lo = n(754027),
    lu = n(165610);
let lc = [];
var ld = n(86147),
    lm = n(729475),
    lf = n(91242),
    lh = n(869146),
    lp = n(475815),
    lg = n(621466);
function lx(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function lv(e) {
    let t, n;
    return (
        null != e &&
        ((n =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, lg.vq)(n, Element) ? n.getAttribute("data-frame-id") : null) === e)
    );
}
function lj(e) {
    return (0, lp.a3)(document, e);
}
function lb(e) {
    return i.useSyncExternalStore(lj, () => lv(e));
}
function ly(e) {
    let { frame: t, controlProjectId: n } = e,
        l = lb(t?.id ?? null),
        r = (0, nZ.Zv)(n),
        i = (0, o.bG)(
            [lh.A, lf.A],
            () => null != t && lh.A.getWindowOpen(eX.MLl.ACTIVITY_POPOUT) && lf.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, lu.x1)(t) || i || r) return null;
    let s = lx(t.id);
    if (null == s || !(0, lp.Ub)(s)) return null;
    let u = A.intl.string(l ? A.t.Z7MyNB : A.t.OIDkcp);
    return (0, a.jsx)(ei.A.Icon, {
        tooltip: u,
        icon: l ? ld.z : lm.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = lx((e = t.id))) && (0, lp.Ub)(n) && (lv(e) ? (0, lp.sP)(n) : (0, lp.tl)(n));
        },
    });
}
var lk = n(559106),
    lw = n(847374),
    lN = n(704745);
function lC(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = A.intl.string(C.default.I2ucou);
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
                        let t = n9(e);
                        return (0, a.jsx)(
                            eu.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: le(e),
                                checked: t === n9(n),
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
            return (0, a.jsx)(lk.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: lN.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.string(C.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: le(n),
                        }),
                        (0, a.jsx)(lw.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var lA = n(324641),
    lS = n(803101),
    lE = n(226178),
    lI = n(625180),
    lM = n(672929),
    l_ = n(111534),
    lP = n(513845),
    lT = n(722701),
    lR = n(949616),
    lL = n(535466),
    l$ = n(321032),
    lD = n(277085);
function lz(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: o } = e,
        { iconURL: u } = (0, lL.Ay)(t),
        [c, d] = i.useState(n),
        [m, f] = i.useState(l),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        [v, j] = i.useState(!1),
        b = c.trim(),
        y = b === n ? null : (0, lD.p)(b),
        k = h ?? u;
    function w() {
        (r(), o());
    }
    async function N(e) {
        if ((e.preventDefault(), v || null != y)) return;
        (j(!0), x(null));
        let r = await (0, tu.$l)(t, { name: b, icon: h, description: m }, { name: n, description: l });
        (j(!1), r) ? w() : x(A.intl.string(C.default.Fi7boI));
    }
    return (0, a.jsx)("form", {
        onSubmit: N,
        children: (0, a.jsx)(th.a, {
            transitionState: s,
            onClose: o,
            title: A.intl.string(C.default.OmOWDq),
            subtitle: A.intl.string(C.default.Gzmlyg),
            size: "sm",
            actions: [
                { text: A.intl.string(C.default["bz/M68"]), variant: "secondary", onClick: w, disabled: v },
                {
                    text: A.intl.string(C.default.dyIV6M),
                    variant: "primary",
                    type: "submit",
                    loading: v,
                    disabled: null != y,
                },
            ],
            children: (0, a.jsxs)(tp.B, {
                gap: 24,
                children: [
                    (0, a.jsx)(l$.r, {
                        iconURL: k,
                        onIconChange: (e) => {
                            (p(e), x(null));
                        },
                        name: c,
                        nameError: y,
                        onNameChange: d,
                        description: m,
                        onDescriptionChange: f,
                        disabled: v,
                    }),
                    null != g
                        ? (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: g })
                        : null,
                ],
            }),
        }),
    });
}
var lO = n(516288);
function lF(e) {
    let { reason: t, message: n, onConfirm: l, transitionState: r, onClose: i } = e,
        s = (0, lO.t)(t, n);
    return (0, a.jsx)(th.a, {
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
let lq = {
    showPublishBlocked: function (e, t, n) {
        (0, tg.openModal)((l) => (0, a.jsx)(lF, { ...l, reason: e, message: t, onConfirm: n }));
    },
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, tg.openModal)(
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
    lB = n(775121),
    lK = n(826745),
    lV = n(285796),
    lH = n(73153);
let lW = [],
    lX = 1,
    lJ = (0, na.D)(() => ({ draftsByProject: {} }));
function lY(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? lW;
}
function lQ(e, t) {
    return lY(lJ.getState(), e, t);
}
function lZ(e, t, n) {
    let { draftsByProject: l } = lJ.getState();
    lJ.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function l0(e, t, n, l) {
    let r = lQ(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (lZ(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function l1(e, t) {
    (0, g.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function l2(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && l1(e, t.ref.id));
}
function l3(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = lJ.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? lW) n ? l2(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    lJ.setState({ draftsByProject: i });
}
function l5(e) {
    return A.intl.formatToPlainString(C.default.JZ59Bo, { size: (0, p.sM)((0, p.Ju)(e)) });
}
function l6(e, t) {
    let n = lQ(e, t);
    if (0 !== n.length) {
        for (let t of n) l2(e, t);
        lZ(e, t, lW);
    }
}
function l4(e, t) {
    let n = lQ(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (lZ(e, t, lW), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function l7(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = lQ(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? l4(e, "chat") : [];
    (0, x.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(lH.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(lJ.getState().draftsByProject)) l3(e, { deleteFromWorker: !0 });
}),
    lH.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        l3(t, { deleteFromWorker: !1 });
    }));
var l8 = n(922329);
async function l9(e) {
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
var re = n(153171);
function rt(e, t, n, l) {
    let r = lQ(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lX++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (lZ(e, t, [
            ...lQ(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void l0(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    l0(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  l0(e, t, n.localId, { status: "error", errorText: A.intl.string(C.default.E7dS5n) }),
                              p.o2 - 3e5,
                          )
                        : l1(e, a.id);
                },
                (l) => {
                    (console.error("[conjure] attachment upload failed", l),
                        l0(e, t, n.localId, { status: "error", errorText: A.intl.string(C.default["kUw/b1"]) }));
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
                        errorText: A.intl.formatToPlainString(C.default.Q0aCVZ, { count: 10 }),
                    },
                };
            if (!(0, p.Oq)(e.size, t))
                return "image/png" === t && e.size <= p.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await l9(e).catch(() => null);
                              return null != n && (0, p.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: l5(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: l5(t) } };
            let a = p.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function rn(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = lJ.useState((e) => lY(e, t, n)),
        a = i.useCallback((e) => rt(t, n, e, l), [t, n, l]),
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
                null != (r = (l = lQ(t, n)).find((t) => t.localId === e)) &&
                    (l2(t, r),
                    lZ(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => l4(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function rl(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(l8.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: re.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: re.o1,
                onClick: () => n(t.localId),
                "aria-label": A.intl.string(C.default.Slam9g),
                children: (0, a.jsx)(lV.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var rr = n(470779);
function ra(e) {
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
            drafts: v,
            addFiles: j,
            pasteFiles: b,
            removeDraft: y,
            settled: k,
            takeRefs: w,
        } = rn({ projectId: t, surface: "design", onUploadFile: f }),
        N = i.useRef(null),
        S = (d || v.length > 0) && k && !m,
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
        className: X()(rr.M0, { [rr.ho]: I && !m, [rr.ET]: m }),
        style: { left: D, top: z },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: N,
                              type: "file",
                              multiple: !0,
                              className: rr.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (j(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(eR.m, {
                              position: "bottom",
                              text: A.intl.string(C.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: rr.tY,
                                  onClick: () => N.current?.click(),
                                  "aria-label": A.intl.string(C.default.lgvqSB),
                                  children: (0, a.jsx)(ec.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: rr.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(lK.y, {
                autoFocus: !0,
                rows: 1,
                className: rr.hF,
                value: s,
                placeholder: g ?? ("" === r ? A.intl.string(C.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": x ?? A.intl.string(C.default.KCYqWL),
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
            v.length > 0
                ? (0, a.jsx)("div", {
                      className: rr.ZO,
                      children: v.map((e) => (0, a.jsx)(rl, { draft: e, onRemove: y }, e.localId)),
                  })
                : null,
        ],
    });
}
function ri(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function rs(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function ro(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? ri(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = ri(e());
                l((e) => (rs(e, t) ? e : t));
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
var ru = n(876798),
    rc = n(48507),
    rd = n(193885),
    rm = n(744898),
    rf = n(803656),
    rh = n(241326),
    rp = n(972213);
function rg(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rx(e, t, n) {
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
let rv = rx("red", rg(ea.A.unsafe_rawColors.RED_400), () => A.intl.string(C.default.tvXfjt)),
    rj = [
        rv,
        rx("yellow", rg(ea.A.unsafe_rawColors.YELLOW_300), () => A.intl.string(C.default.FYuaJ1)),
        rx("green", rg(ea.A.unsafe_rawColors.GREEN_360), () => A.intl.string(C.default["Vv+paS"])),
        rx("blue", rg(ea.A.unsafe_rawColors.BLUE_345), () => A.intl.string(C.default.k9b1QJ)),
        rx("white", rg(ea.A.unsafe_rawColors.WHITE), () => A.intl.string(C.default["1sOXwH"])),
    ];
function rb(e) {
    return rj.find((t) => t.id === e) ?? rv;
}
function ry(e) {
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
function rk(e) {
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
function rw(e) {
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
let rC = n$.map((e) => rN(Math.min(16, e + 3))),
    rA = nD.map((e) => rN(Math.min(16, e / 2.5))),
    rS = [C.default.jZtZUr, C.default.cTQdD0, C.default.J3ucEg],
    rE = {
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
            label: () => A.intl.string(C.default.oIZQbm),
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
            label: () => A.intl.string(C.default.ARNVr7),
        },
    };
function rI(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(eR.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: nV.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(ru.k, {
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
function rM(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(eR.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(te.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function r_(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: nV.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: nV.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function rP(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rb(n.colorId),
        h = rE[u],
        p = A.intl.string(C.default.hUm825),
        g = A.intl.string(C.default.n5IA3a),
        x = A.intl.string(C.default.r5dX6t),
        v = A.intl.string(C.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: nV.t$,
        children: [
            (0, a.jsx)("div", {
                className: nV.NT,
                children: (0, a.jsx)(rI, {
                    icon: rk,
                    label: A.intl.string(C.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => nG(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: nV.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": A.intl.string(C.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(rI, {
                        icon: ry,
                        label: A.intl.string(C.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => nG(t, "move"),
                    }),
                    (0, a.jsx)(rI, {
                        icon: rc.x,
                        label: A.intl.string(C.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => nG(t, "text"),
                    }),
                    (0, a.jsx)(r_, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rI, {
                                icon: rd.V,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (nG(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rC.map((n, l) =>
                                (0, a.jsx)(
                                    rI,
                                    {
                                        icon: n,
                                        label: A.intl.string(rS[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (nq(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), nb(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r_, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(rI, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (nG(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(rE).map((n) =>
                                (0, a.jsx)(
                                    rI,
                                    {
                                        icon: rE[n].icon,
                                        label: rE[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (nG(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r_, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rI, {
                                icon: rw,
                                label: g,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (nG(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            rA.map((n, l) =>
                                (0, a.jsx)(
                                    rI,
                                    {
                                        icon: n,
                                        label: A.intl.string(rS[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (nq(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), nb(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r_, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(rM, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rj.map((n) =>
                                (0, a.jsx)(
                                    rI,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                nq(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: nV.Gz, role: "separator" }),
                    (0, a.jsx)(rM, {
                        icon: rm.e,
                        label: A.intl.string((0, j.isMac)() ? C.default["j/XmBQ"] : C.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(rM, {
                        icon: rf.U,
                        label: A.intl.string((0, j.isMac)() ? C.default.C7jhpn : C.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(rM, {
                        icon: rh.TrashIcon,
                        label: A.intl.string(C.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: nV.Gz, role: "separator" }),
                    (0, a.jsx)(rM, { icon: rp.XLargeIcon, label: A.intl.string(C.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let rT = ea.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function rR(e, t, n) {
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
                    (e.strokeStyle = rT),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function rL(e) {
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
async function r$(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = rL(e),
            r = rL(e);
        if (null == l || null == r) return null;
        return (rR(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let rD = new Map(),
    rz = new Map(),
    rO = (0, na.D)(() => ({ byMessageKey: {} }));
function rF(e, t) {
    let { [e]: n, ...l } = rO.getState().byMessageKey;
    rO.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function rq(e, t) {
    null == t ? rD.delete(e) : rD.set(e, t);
}
function rU(e) {
    return rD.get(e)?.() ?? Promise.resolve(null);
}
let rG = { dx: 0, dy: 0 },
    rB = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    rK = 1;
function rV(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = nK(s),
        { active: u } = nC(s),
        c = (0, tg.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => nU(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && nj(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(rH, { projectId: s, state: o, resolveIframe: r });
}
function rH(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = ro(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [p, x] = i.useState(rG),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        N = i.useRef(null),
        S = i.useRef(0),
        { tool: E, history: I } = n,
        M = rb(n.colorId),
        _ = "pick" !== E,
        P = "marker" === n.tool ? n$[n.markerSize] : "eraser" === n.tool ? nD[n.eraserSize] : null,
        T = "move" === E ? (I.present.find((e) => e.id === f) ?? null) : null,
        R = null != r;
    (i.useLayoutEffect(() => {
        m(j.current?.offsetWidth ?? 0);
    }, [R]),
        i.useLayoutEffect(() => {
            k.current = s;
        }, [s]));
    let L = i.useCallback(async () => {
        let e = l();
        if (null == e) return null;
        let t = await (0, lA.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, lG.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, lA.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (rq(t, L), () => rq(t, null)), [t, L]);
    let $ = i.useCallback(
        (e) => {
            ((N.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === S.current &&
                    (S.current = requestAnimationFrame(() => {
                        S.current = 0;
                        let e = w.current,
                            t = N.current;
                        null != e &&
                            (e.toggleAttribute("data-visible", null != t),
                            null != t && (e.style.transform = `translate(${t.x}px, ${t.y}px)`));
                    })));
        },
        [r],
    );
    i.useEffect(() => () => cancelAnimationFrame(S.current), []);
    let D = i.useCallback(() => {
        let e = v.current;
        if (null == e || null == r) return;
        let t = window.devicePixelRatio,
            n = Math.round(r.width * t),
            l = Math.round(r.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let a = e.getContext("2d");
        if (null == a) return;
        (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, l), a.setTransform(t, 0, 0, t, 0, 0));
        let i = y.current,
            s = null == i ? I.present : I.present.map((e) => (e.id === i.id ? nI(e, p.dx, p.dy) : e)),
            o = b.current;
        rR(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
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
                id: `mark-${rK++}`,
                kind: "text",
                color: M.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (n_(n, r) && nB(t, { type: "commit", shape: n }), o(null));
        }, [t, M, r]),
        F = i.useCallback(() => {
            ((k.current = null), o(null));
        }, []),
        q = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != k.current) return void O();
                let t = z(e);
                switch (E) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == T ? null : nR(T, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? T
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = nT(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => nT(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (nP(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = nT(e.from, n),
                                                                  r = nT(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => nP(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = nT(e.from, n),
                                                                  r = nT(e.to, n),
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
                                                              let t = nR(e, n);
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
                        if (!nM(I.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (b.current = {
                                id: `mark-${rK++}`,
                                kind: "erase",
                                width: nD[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (b.current = {
                                id: `mark-${rK++}`,
                                kind: "marker",
                                color: M.value,
                                width: n$[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (b.current = {
                                id: `mark-${rK++}`,
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
            v.current?.removeAttribute("data-dragging");
            let e = y.current;
            if (null != e) {
                ((y.current = null), x(rG), nB(t, { type: "move", id: e.id, dx: p.dx, dy: p.dy }));
                return;
            }
            let n = b.current;
            ((b.current = null), null != n && null != r && n_(n, r) ? nB(t, { type: "commit", shape: n }) : D());
        }, [t, r, p, D]),
        B = i.useCallback(() => nU(t), [t]),
        K = i.useCallback(() => nB(t, { type: "undo" }), [t]),
        V = i.useCallback(() => nB(t, { type: "redo" }), [t]),
        H = i.useCallback(() => nB(t, { type: "clear" }), [t]),
        W = i.useRef({ tool: E, selected: T, exit: B, undo: K, redo: V });
    if (
        (i.useLayoutEffect(() => {
            W.current = { tool: E, selected: T, exit: B, undo: K, redo: V };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, lg.Cw)((0, lg.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), nB(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = rB[s];
                null != o && (e.preventDefault(), nG(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (_) return (lB.A.disable(), () => lB.A.enable());
        }, [_]),
        null == r)
    )
        return null;
    let X = Math.max(8, r.left - d - 8),
        J = null == T ? null : nR(null == y.current ? T : nI(T, p.dx, p.dy), r);
    return (0, lG.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: nV.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: nV.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: v,
                            className: nV.Ji,
                            "data-tool": E,
                            "data-interactive": _ && !u ? "" : void 0,
                            "aria-label": A.intl.string(C.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: q,
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
                                  className: nV.V$,
                                  "data-tool": E,
                                  "data-color": M.id,
                                  style: { width: P, height: P },
                                  "aria-hidden": !0,
                              }),
                        null == J
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: nV.r1,
                                  style: { left: J.x, top: J.y, width: J.width, height: J.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: nV.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: nV.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: nV.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: nV.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(ra, {
                          projectId: t,
                          anchor: "point",
                          at: { x: r.left + s.at.x * r.width, y: r.top + s.at.y * r.height },
                          bounds: r,
                          kind: "",
                          placeholder: A.intl.string(C.default["8gX1lw"]),
                          label: A.intl.string(C.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: s.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: O,
                          onUploadFile: (e) => (0, g.vX)(t, e),
                          onDismiss: F,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: j,
                    className: nV.ej,
                    style: { left: X, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(rP, { projectId: t, state: n, onExit: B, onUndo: K, onRedo: V, onClear: H }),
                }),
            ],
        }),
        document.body,
    );
}
var rW = n(308081);
function rX(e) {
    lH.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
var rJ = n(689175),
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
    r6 = n(683063),
    r4 = n(138212);
function r7(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: X()(r4.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: X()(r4.wx, null != n && r4.o5, i),
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
        v = f ? lw.a : eT._,
        j = null != n || l;
    return (0, a.jsxs)(r7, {
        ...d,
        title: t,
        trailing: j
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
                                children: (0, a.jsx)(v, { size: "xs", color: "currentColor" }),
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
                    return A.intl.string(C.default.KvBdun);
                case "in_progress":
                    return A.intl.string(C.default["m5G9+S"]);
                case "unfinished":
                    return A.intl.string(C.default.lRpwhD);
                default:
                    return A.intl.string(C.default.sPGeWi);
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
                    r6.u,
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
    let c = A.intl.formatToPlainString(C.default["P/I+JW"], { completed: o, total: u }),
        d = A.intl.formatToPlainString(C.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(ae, {
        title: A.intl.string(C.default.RtzECX),
        meta: (0, a.jsx)(r9, { children: c }),
        superseded: s,
        showLabel: A.intl.string(C.default.RKyN9q),
        hideLabel: A.intl.string(C.default.xydHoj),
        className: at.Nr,
        bodyClassName: at.rf,
        beforeBody: r && !s ? (0, a.jsx)(eV.A, { role: "status", "aria-live": "polite", children: d }) : null,
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
        [x, v] = i.useState(!1),
        [j, b] = i.useState(c);
    (j !== c && (b(c), null != n ? (m(n), h(!0)) : (g(!1), v(!1))),
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
        [w, N] = i.useState(!1),
        [S, E] = i.useState(x);
    (S !== x && (E(x), x ? k(!0) : N(!1)),
        i.useEffect(() => {
            if (x || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [x, y]),
        i.useEffect(() => {
            if (!y || !x) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => N(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [y, x]));
    let I = null != l && l.length > 0,
        M = i.useCallback(() => v((e) => !e), []);
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
                                    "aria-label": A.intl.string(C.default.hEK6qu),
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
                                    text: A.intl.string(C.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eh.D, {
                                        className: au.BO,
                                        onClick: M,
                                        "aria-expanded": x,
                                        "aria-label": A.intl.string(C.default.RtzECX),
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
var ad = n(890497);
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
var af = n(382541);
async function ah(e, t, n) {
    let [l, r] = await Promise.all([(0, af.d)(t), (0, af.d)(e)]),
        a = await fetch(`${l.baseUrl}/agent/app-build-request?${new URLSearchParams({ ticket: l.ticket })}`, {
            method: "POST",
            body: JSON.stringify({ caller_ticket: r.ticket, prompt: n }),
        });
    if (!a.ok) throw Error(`app build request failed: ${a.status}`);
}
var ap = n(29073),
    ag = n(590077);
function ax(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r } = e,
        s = (function (e, t, n) {
            let l = am(e),
                [r, a] = i.useState(null),
                [s, o] = i.useState(t.prompt),
                [u, c] = i.useState(!1),
                [d, m] = i.useState(!1),
                f = l.some((e) => e.projectId === t.project_id) ? t.project_id : null,
                h = r ?? f ?? null,
                p = l.find((e) => e.projectId === h) ?? null,
                g = s.trim(),
                x = n && !u && null != p && "" !== g,
                v = i.useCallback(() => {
                    x &&
                        null != p &&
                        (c(!0),
                        m(!1),
                        ah(e, p.projectId, g).then(
                            () => {
                                let t;
                                return l7(
                                    e,
                                    ((t = A.intl.formatToPlainString(C.default.jZlNst, {
                                        name: p.name,
                                        projectId: p.projectId,
                                    })),
                                    `${t}

${g}`),
                                );
                            },
                            () => {
                                (c(!1), m(!0));
                            },
                        ));
                }, [x, e, p, g]);
            return {
                projects: l,
                targetId: h,
                setTargetId: a,
                prompt: s,
                setPrompt: o,
                sending: u,
                failed: d,
                canSubmit: x,
                submit: v,
            };
        })(t, n, l),
        o = i.useMemo(
            () =>
                s.projects.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [s.projects],
        ),
        u = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: X()(ap.nd, ap.jx),
        "aria-labelledby": u,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: ap.wx,
                children: [
                    (0, a.jsx)(Q.E, {
                        tag: "span",
                        id: u,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: ap.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(te.K, {
                        icon: en.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: r,
                        "aria-label": A.intl.string(C.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ag.r,
                children: [
                    0 === o.length
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: A.intl.string(C.default.TbbzW5),
                          })
                        : (0, a.jsx)(ad.Z, {
                              label: A.intl.string(C.default["29gr8j"]),
                              placeholder: A.intl.string(C.default.twlOb6),
                              options: o,
                              selectionMode: "single",
                              value: s.targetId,
                              onSelectionChange: s.setTargetId,
                              disabled: s.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(Z.f, {
                        label: A.intl.string(C.default.XZNsDA),
                        value: s.prompt,
                        onChange: s.setPrompt,
                        maxLength: 4e3,
                        disabled: s.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: s.failed ? A.intl.string(C.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ap.qr,
                children: (0, a.jsx)("div", {
                    className: ap.zt,
                    children: (0, a.jsx)(et.$, {
                        variant: "primary",
                        size: "sm",
                        text: A.intl.string(C.default.gG4j6o),
                        disabled: !s.canSubmit,
                        loading: s.sending,
                        onClick: s.submit,
                    }),
                }),
            }),
        ],
    });
}
var av = n(658675),
    aj = n(22231),
    ab = n(123292),
    ay = n(734057);
let ak = {
        [eX.rbe.GUILD_TEXT]: "text",
        [eX.rbe.GUILD_VOICE]: "voice",
        [eX.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [eX.rbe.GUILD_STAGE_VOICE]: "stage",
        [eX.rbe.GUILD_FORUM]: "forum",
        [eX.rbe.GUILD_MEDIA]: "media",
    },
    aw = { channel: "#", role: "@", user: "@", project: "" },
    aN = {
        channel: [C.default["9+dfPT"], C.default.pGSJqE],
        role: [C.default["2VkCoD"], C.default.c8YlX8],
        user: [C.default.GZIAxl, C.default["4bptbQ"]],
        project: [C.default.twlOb6, C.default.twlOb6],
    };
function aC(e, t) {
    return A.intl.string(aN[e][+!!t]);
}
var aA = n(155078);
function aS(e) {
    return e.options.some((e) => null != e.image);
}
let aE = [];
async function aI(e, t) {
    await (0, k.h)(e, "/agent/linked-apps", { method: "PUT", json: { caller_project_id: t } });
}
function aM(e, t) {
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
var a_ = n(300344),
    aP = n(614733),
    aT = n(904363),
    aR = n(950902),
    aL = n(384017);
function a$(e) {
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
                        let l = null == (n = ay.A.getChannel(t)?.type) ? void 0 : ak[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = eQ.default.getUser(t)?.username;
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
        className: aL.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(ad.Z, {
                  ...g,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(p(e), t),
              })
            : (0, a.jsx)(ad.Z, {
                  ...g,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : p([e]), t),
              }),
    });
}
function aD(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, a_.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(a$, { ...l, guildId: t, options: r, placeholder: aC("channel", !0 === l.question.multi_select) });
}
function az(e) {
    let { guildId: t, ...n } = e,
        l = (0, aT.A)(t);
    return (0, a.jsx)(a$, { ...n, guildId: t, options: l, placeholder: aC("role", !0 === n.question.multi_select) });
}
function aO(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, aP.A)(t);
    return (0, a.jsx)(a$, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: aC("user", !0 === n.question.multi_select),
    });
}
function aF(e) {
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
    return 0 === s.length ? n : (0, a.jsx)(a$, { ...l, options: s, placeholder: aC("project", !1) });
}
function aq(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, aR.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(aF, { projectId: t, fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(aD, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(az, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(aO, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var aU = n(87221),
    aG = n(144228),
    aB = n(26430),
    aK = n(750943),
    aV = n(95477),
    aH = n(256905);
function aW(e, t) {
    let [n, l] = i.useState(null),
        [r, a] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let n = !1;
            return (
                (0, g.PK)(e, t).then(
                    (e) => {
                        n || l(e);
                    },
                    () => {
                        n || (0 === s ? o(1) : a(!0));
                    },
                ),
                () => {
                    n = !0;
                }
            );
        }, [e, t, s]),
        {
            src: n,
            gone: r,
            handleError: i.useCallback(() => {
                (l(null),
                    (0, g.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : a(!0);
                        },
                        () => a(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
var aX = n(907702);
function aJ(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = aW(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: X()(aX.Gt, aX.b6),
              children: [
                  (0, a.jsx)(aU.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: A.intl.string(C.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: X()(aX.Gt, { [aX.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: aX.Sl,
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
function aY(e) {
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
        g = A.intl.formatToPlainString(C.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: X()(aX.Vs, { [aX.Q9]: s, [aX.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(eh.D, {
                className: aX.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => d(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), f(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": A.intl.formatToPlainString(C.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: u && c ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: aX.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(aJ, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: h,
                                  })
                                : (0, a.jsx)("span", { className: aX.Gt }),
                            (0, a.jsx)("span", {
                                className: aX.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(av.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(aG.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(Q.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: aX.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, aA.E)(t) : "")
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
                      className: aX.B4,
                      children: (0, a.jsx)(eR.m, {
                          text: A.intl.string(C.default.HQEXJM),
                          children: (0, a.jsx)(te.K, {
                              icon: rh.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": A.intl.string(C.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: aX.B4,
                        children: (0, a.jsx)(eR.m, {
                            text: A.intl.string(C.default["4/eeDD"]),
                            children: (0, a.jsx)(te.K, {
                                icon: aB._,
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
function aQ(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: u, own: c } = e,
        d = !0 === l.multi_select,
        { options: m } = l,
        f = m.length > 4 ? "gallery" : "row",
        h = i.useRef(null),
        p = i.useRef(new Map()),
        [x, v] = i.useState(null),
        j = null != x && m.some((e) => e.id === x) ? x : (m.find((e) => r.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, g.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, aH.R)({
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
                                location: "VibegrationsClarificationImageOptions",
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
                (v(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || s || u(l));
            },
            [s, d, u, m],
        ),
        k =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: A.intl.string(C.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: aX.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: h,
                className: X()(aX.fF, "gallery" === f ? aX.nV : aX.nM, { [aX.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            aY,
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
                                onMeasured: (t) => p.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != k
                        ? (0, a.jsx)(
                              aY,
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
            (0, a.jsx)(aZ, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: A.intl.string(/\bicons?\b/i.test(l.question) ? C.default.qU4WN6 : C.default.cbMDDB),
            }),
        ],
    });
}
function aZ(e) {
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
        className: aX.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: aX.QJ,
                children: [
                    (0, a.jsx)(et.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: aK.X,
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
                              icon: e7.LinkIcon,
                              text: A.intl.string(C.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: aX.Fg,
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
                                            : Promise.resolve({ errorText: l5(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: aX.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: aX.Hs,
                              children: (0, a.jsx)(aV.k, {
                                  label: A.intl.string(C.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: A.intl.string(C.default.AVhvn8),
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
                              className: aX.gd,
                              children: [
                                  (0, a.jsx)(et.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: A.intl.string(C.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: x,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(ab.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: A.intl.string(C.default.eXZL4X),
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
function a0(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eh.D, {
        className: X()(aL.uK, { [aL.ue]: l, [aL.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": A.intl.formatToPlainString(c ? C.default["2p6UFz"] : C.default.AQbxhf, { answer: t.label }),
        "aria-describedby": d ? u : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: aL.dy, children: (0, a.jsx)(av.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: aL.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: aL.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: aL.l8,
                        children: (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: aL.ed,
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
                      className: aL.rM,
                      children: A.intl.string(C.default.zku6r1),
                  })
                : null,
        ],
    });
}
function a1(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return aS(n)
        ? (0, a.jsx)(aQ, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      a0,
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
let a2 = [],
    a3 = [];
function a5(e) {
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
        className: X()(aL.Ge, aL.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(Q.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aL.aK,
                      children: A.intl.string(C.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(a1, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: aM(o, u),
            }),
            aS(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: aL.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: aL.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(aj.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: X()(aL.Pu, aL.es), children: c }),
                      ],
                  }),
        ],
    });
}
function a6(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, u] = i.useState({}),
        [c, d] = i.useState({}),
        [m, f] = i.useState({}),
        [h, p] = i.useState({}),
        [x, v] = i.useState({}),
        [j, b] = i.useState(!1),
        [y, k] = i.useState(0),
        [w, N] = i.useState(null),
        [S, E] = i.useState(null),
        [I, M] = i.useState(null),
        [_, P] = i.useState(!1),
        T = i.useRef(null),
        [R, L] = i.useState(null),
        $ = i.useRef(null),
        D = i.useRef(0),
        z = null == r,
        O = l.questions.length,
        F = Math.min(y, O - 1),
        q = l.questions[F],
        [U, G] = i.useState({ id: q.id, expanded: !1 }),
        B = U.id === q.id && U.expanded,
        [K, V] = i.useState(null),
        H = c[q.id] ?? "",
        W = !0 === q.multi_select,
        J = aS(q),
        Y = W ? (m[q.id] ?? a2) : ((t = o[q.id]), t?.kind === "option" ? [t.optionId] : aE),
        Z = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = A.intl.string(C.default.wTsP5l),
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
                        if (o) return aM(h, m(i));
                        function p(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function x(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let v = t[d];
                        function j(t) {
                            (r((n) => {
                                let l = n[d];
                                return (
                                    null != l && (0, g.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                p({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === v ? { ...e, [d]: x(t) } : e)));
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
                                                : j({ attachment: e });
                                        },
                                        () =>
                                            p({
                                                busy: null,
                                                error: { source: "upload", text: A.intl.string(C.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                p({ busy: "link", error: null }),
                                (0, g.gm)(e, t).then(
                                    (e) => (j({ attachment: e }), !0),
                                    (e) => (
                                        p({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : A.intl.string(C.default.l79PMc),
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
        ee = Z.imageFor(q.id),
        el = Z.selectedFor(q),
        { text: er, phase: ea } = (0, e$.Q)(q.question),
        ei = er === q.question,
        es = ei && K?.id === q.id && K.truncated;
    i.useLayoutEffect(() => {
        if (null == R || B || !ei) return;
        function e() {
            if (null == R) return;
            let e = R.scrollHeight > R.clientHeight + 1;
            V((t) => (t?.id === q.id && t.truncated === e ? t : { id: q.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(R), () => t.disconnect());
    }, [ei, R, q.id, B]);
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
                            : Promise.allSettled(i.map((e) => aI(e, n))).then(t));
                }
            },
            [l, r, n],
        ),
        ec = i.useCallback(
            (e, t) => {
                D.current += 1;
                let n = D.current;
                (N({ direction: t, moves: n }),
                    E({ question: q, draft: H, selected: Y, ownImage: ee, ownSelected: el, direction: t, moves: n }),
                    P(!0),
                    k(e));
            },
            [H, ee, el, q, Y],
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
                let t = { ...o, [q.id]: e };
                u(t);
                let n =
                    F < l.questions.length - 1
                        ? F + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, F);
                null == n ? eu(t) : ec(n, n < F ? "back" : "forward");
            },
            [o, l, z, F, q.id, eu, ec],
        ),
        ep = i.useCallback(() => {
            z || 0 === F || ec(F - 1, "back");
        }, [z, F, ec]),
        eg = F > 0 && !z,
        ex = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [q.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                J ? z || u((e) => ({ ...e, [q.id]: t })) : ef(t);
            },
            [z, J, q.id, ef],
        ),
        { multiPartFor: ev } = Z,
        ej = i.useMemo(() => {
            var e;
            let t, n;
            return W
                ? ((e = ev(q)),
                  (t = H.trim()),
                  (n = q.options.filter((e) => Y.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: Y,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [H, W, ev, q, Y]),
        eb = h[q.id] ?? a3,
        ey = i.useMemo(() => {
            var e, t;
            let n;
            return null != q.input
                ? ((e = q.input),
                  (t = x[q.id]),
                  (n = H.trim()),
                  {
                      kind: "entities",
                      entities: eb,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eb.map((t) => (t.name.startsWith(aw[e]) ? t.name : `${aw[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [H, x, eb, q.id, q.input]),
        ek = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [q.id]: e })), v((e) => ({ ...e, [q.id]: t })));
            },
            [q.id],
        ),
        ew = i.useCallback(() => b(!0), []),
        eN = i.useCallback(() => b(!1), []),
        eC = Z.controlsFor(q, z),
        eA = i.useCallback(() => {
            if (null != ey) {
                "" !== ey.text && ef(ey);
                return;
            }
            if (null != ej) {
                "" !== ej.text && ef(ej);
                return;
            }
            let e = H.trim();
            "" !== e && ef({ kind: "custom", text: e });
        }, [H, ej, ey, ef]),
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
                    : null != ej
                      ? "" !== ej.text
                          ? ej
                          : null
                      : "" !== H.trim()
                        ? { kind: "custom", text: H.trim() }
                        : (o[q.id] ?? null),
            [o, H, ej, ey, q.id],
        ),
        eL = null != eT && !z,
        eD = F === O - 1,
        ez = i.useCallback(() => {
            null == eT || z || ef(eT);
        }, [z, eT, ef]),
        eO = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, lg.vq)(e.target, HTMLTextAreaElement) ||
                    (0, lg.vq)(e.target, HTMLInputElement) ||
                    ((!(0, lg.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eg
                            ? (e.preventDefault(), ep())
                            : "ArrowRight" === e.key && eL && (e.preventDefault(), ez())));
            },
            [eg, eL, ep, ez],
        ),
        eF = J
            ? null
            : (0, a.jsxs)("div", {
                  className: aL.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: aL.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(aj.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(lK.y, {
                          value: H,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [q.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eA());
                          },
                          placeholder: A.intl.string(C.default["tOC+tn"]),
                          "aria-label": A.intl.formatToPlainString(C.default["4JeYPB"], { question: q.question }),
                          disabled: z,
                          rows: 1,
                          className: aL.Pu,
                          "data-conjure-clarification-other": q.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: X()(aL.$O, { [aL.fI]: eS && !eI, [aL.Oh]: eI }),
        role: "dialog",
        "aria-label": q.question,
        "data-conjure-clarification": l.id,
        "data-state": z ? "inert" : "open",
        "data-question-expanded": B ? "true" : void 0,
        "data-picker-open": j && !_ ? "true" : void 0,
        "data-step": F,
        tabIndex: -1,
        onKeyDown: eO,
        children: [
            (0, a.jsxs)("div", {
                className: aL.rf,
                style: null == I ? void 0 : { height: I.heading + I.rows },
                "data-moving": _ ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: T,
                        className: aL.wx,
                        children: [
                            (0, a.jsx)(Q.E, {
                                ref: L,
                                tag: "span",
                                id: `${q.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: B ? void 0 : 5,
                                className: X()(ap.TK, aL.R_, { [aL.TB]: "exit" === ea, [aL.JU]: "enter" === ea }),
                                children: er,
                            }),
                            es || B
                                ? (0, a.jsx)("div", {
                                      className: ap.Q7,
                                      children: (0, a.jsx)(eR.m, {
                                          text: eo,
                                          children: (0, a.jsx)(te.K, {
                                              icon: B ? eP.t : lw.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => G({ id: q.id, expanded: !B }),
                                              "aria-label": eo,
                                              "aria-controls": `${q.id}-label`,
                                              "aria-expanded": B,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(eh.D, {
                                      className: X()(ap.gb, ap.Q7),
                                      onClick: e_,
                                      "aria-label": A.intl.string(C.default.qVXlk0),
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
                        className: aL.Cg,
                        style: null == I ? void 0 : { insetBlockStart: I.heading },
                        children: (0, a.jsxs)("div", {
                            className: aL.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: $,
                                    className: aL.Ge,
                                    role: "group",
                                    "aria-labelledby": `${q.id}-label`,
                                    "data-direction": w?.direction,
                                    "data-parity": null == w ? void 0 : w.moves % 2,
                                    children: [
                                        W
                                            ? (0, a.jsx)(Q.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: aL.aK,
                                                  children: A.intl.string(C.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(a1, {
                                            projectId: n,
                                            question: q,
                                            selected: Y,
                                            disabled: z,
                                            onPick: (e) =>
                                                W
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [q.id]:
                                                                  ((n = t[q.id] ?? a2),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  q.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ex(e),
                                            own: eC,
                                        }),
                                        null != q.input
                                            ? (0, a.jsx)(aq, {
                                                  projectId: n,
                                                  question: q,
                                                  value: eb,
                                                  disabled: z,
                                                  onChange: ek,
                                                  onFocus: ew,
                                                  onBlur: eN,
                                                  fallback: !1 === q.allow_custom ? eF : null,
                                              })
                                            : null,
                                        !1 === q.allow_custom ? null : eF,
                                    ],
                                }),
                                null == S
                                    ? null
                                    : (0, a.jsx)(
                                          a5,
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
            O > 1 || W || J || null != q.input
                ? (0, a.jsxs)("div", {
                      className: ap.qr,
                      children: [
                          (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  O > 1
                                      ? A.intl.formatToPlainString(C.default.yzYUjq, { index: F + 1, total: O })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: ap.zt,
                              children: [
                                  eg
                                      ? (0, a.jsx)(ab.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: A.intl.string(C.default.Pk5lfA),
                                            onClick: ep,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(et.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: A.intl.string(eD ? A.t.geKm7t : C.default.w1nRmT),
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
var a4 = n(557744),
    a7 = n(223347),
    a8 = n(894443),
    a9 = n(525530),
    ie = n(572253),
    it = n(411236);
function il(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        r = null != n.note && "" !== n.note ? n.note : A.intl.string(C.default.XuOf5s);
    return (0, a.jsx)(ie.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: i, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let u = (0, a.jsx)(et.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !n,
                text: A.intl.string(C.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: it.Mk,
                      onSubmit: o,
                      children: [
                          (0, a.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: A.intl.string(C.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: r,
                          }),
                          t,
                          (0, a.jsx)("div", { className: it.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: X()(ap.nd, ap.jx),
                      "aria-label": A.intl.string(C.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: ap.wx,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: ap.TK,
                                      children: A.intl.string(C.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(eh.D, {
                                      className: X()(ap.gb, ap.Q7),
                                      onClick: l,
                                      "aria-label": A.intl.string(C.default["iq+Pte"]),
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
                              className: it.DQ,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: r,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: ap.qr,
                              children: (0, a.jsx)("div", { className: ap.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var ir = n(874421),
    ia = n(404373),
    ii = n(435558),
    is = n.n(ii);
let io = "ConjureComposerDrafts";
function iu() {
    return tB.w.get(io) ?? {};
}
let ic = new Map(),
    id = is().throttle(() => {
        if (0 === ic.size) return;
        let e = iu();
        for (let [t, n] of ic) "" === n ? delete e[t] : (e[t] = n);
        (ic.clear(), tB.w.set(io, e));
    }, 1e3);
class im extends o.Ay.Store {
    getDraft(e) {
        let t = ic.get(e);
        return null != t ? t : (iu()[e] ?? "");
    }
}
let ih = new im(lH.h, {
    LOGOUT: function () {
        return (ic.clear(), id.cancel(), tB.w.remove(io), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (ic.set(t, n), id(), "" === n && id.flush(), !1);
    },
});
function ip(e) {
    return "" !== ih.getDraft(e).trim();
}
var ig = n(29080),
    ix = n(46054);
function iv(e) {
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
var ij = n(520521),
    ib = n(216306),
    iy = n(60160),
    ik = n(16634),
    iw = n(651438);
function iN(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, rZ.SY)(n.steps),
        d = u ? (0, iw.Q)(n) : (0, ib.R)(o),
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
                                            ik.A,
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
                                      children: (0, a.jsx)(iy.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(r5.A, {
        glyph: (0, a.jsx)(r6.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: (0, ib.O)(o),
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
var iC = n(998445),
    iA = n(643210),
    iS = n(648127),
    iE = n(372795),
    iI = n(163897);
let iM = "conjure-browser-viewer";
function i_(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [iA.A],
            () =>
                n.flatMap((e) => {
                    let n = iA.A.getTab(t, e);
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
        className: iI.kR,
        "aria-label": A.intl.string(C.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(iP, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function iP(e) {
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
        u = (0, tg.useHasModalOpen)(iM),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        h = (0, iS.i)(l.session);
    return (0, a.jsxs)(eh.D, {
        innerRef: s,
        className: X()(iI.Nr, f && iI.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, tg.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: iM },
                )
            );
        },
        "aria-label": A.intl.formatToPlainString(C.default.G3a822, { title: h }),
        children: [
            (0, a.jsxs)("div", {
                className: iI.Gt,
                children: [
                    (0, a.jsx)(iE.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: iI.Ji,
                        "aria-label": A.intl.formatToPlainString(C.default.rnwqXb, { name: h }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: iI.qf,
                              children: (0, a.jsx)(iC.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: iI.HS,
                              children: (0, a.jsx)(Q.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: A.intl.string(C.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: iI.pG,
                children: [
                    (0, a.jsx)("span", { className: X()(iI.W9, f && iI.oM) }),
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
var iT = n(268409);
let iR = new WeakMap(),
    iL = new WeakMap();
function i$(e) {
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
            [e0.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = iR.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = iL.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), iL.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (iR.set(e, n), n);
                })(e0.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: iT.h, children: (0, a.jsx)(i_, { projectId: t, sessionIds: u }) });
}
var iD = n(469393);
function iz(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, n0.lG)(t.authored_at);
    return (0, a.jsx)(r7, {
        title: A.intl.string(C.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: iD.r,
            children: [
                (0, a.jsxs)("div", {
                    className: iD.z,
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
                          text: A.intl.string(C.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var iO = n(155718);
function iF(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
(n3.q7.APP_CHANNEL,
    C.default.zrk93C,
    n3.q7.VOICE_CHANNEL,
    C.default.r5Ra0p,
    n3.q7.ACTIVITY,
    A.t.IC5Ann,
    n3.q7.OVERLAY,
    C.default.liTNf3,
    n3.q7.PROFILE_WIDGET,
    C.default["EswAi+"],
    n3.q7.AUTOMOD,
    C.default.DnWMLj,
    n3.q7.BOT,
    C.default.VFWfz1,
    n3.q7.APPLICATION_COMMANDS,
    C.default.w7JaEP);
let iq = ["command", "user_command", "message_command", "message"],
    iU = new Set([iO.kc.CHAT, iO.kc.USER, iO.kc.MESSAGE]);
function iG(e) {
    return e.type ?? iO.kc.CHAT;
}
function iB(e) {
    return iU.has(iG(e));
}
function iK(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function iV(e, t) {
    let n = iq.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !iK(e)), ...n.filter(iK)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || iK(r) || l.push(r);
    }
    return iq.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function iH(e, t, n) {
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
    let s = e.commands.filter(iB).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (iG(e)) {
                    case iO.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case iO.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(iK),
        u = a.length > 0 ? iV([...a, ...o], !0) : iV("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var iW = n(377941),
    iX = n.n(iW);
function iJ(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function iY(e) {
    return e.type === iO.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === iO.kc.USER || e.type === iO.kc.MESSAGE
          ? ""
          : "/";
}
let iQ = {
        [n3.q7.APP_CHANNEL]: C.default["3/aHX6"],
        [n3.q7.VOICE_CHANNEL]: C.default["3/aHX6"],
        [n3.q7.ACTIVITY]: C.default["3/aHX6"],
        [n3.q7.OVERLAY]: C.default["rPpf5/"],
        [n3.q7.PROFILE_WIDGET]: null,
        [n3.q7.AUTOMOD]: null,
        [n3.q7.BOT]: null,
        [n3.q7.APPLICATION_COMMANDS]: null,
    },
    iZ = [n3.q7.ACTIVITY, n3.q7.APP_CHANNEL, n3.q7.VOICE_CHANNEL, n3.q7.OVERLAY];
function i0(e) {
    return iZ.find((t) => iF(e, t)) ?? null;
}
var i1 = n(176999),
    i2 = (((l = {}).IMAGE = "image"), l),
    i3 = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    i5 = n(773669);
let i6 = [],
    i4 = {},
    i7 = {};
function i8(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function i9(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: i2.IMAGE,
        visibility: i3.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var se = n(127258),
    st = n(803306),
    sn = n(320095),
    sl = n(963852),
    sr = n(95701),
    sa = n(889227);
let si = new sr.nA({ id: "1337", guild_id: "1337", type: eX.rbe.GUILD_TEXT, name: "preview" });
function ss(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([eQ.default], () => eQ.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, st.nj)(new sa.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let so = /^@\S+/;
var su = n(97808),
    sc = n(778712),
    sd = n(486020),
    sm = n(200700);
let sf = {
        alert: { label: () => A.intl.string(C.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => A.intl.string(C.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => A.intl.string(C.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => A.intl.string(C.default.RGzFNK), blockedStyle: !1 },
    },
    sh = {
        blocked: { label: () => A.intl.string(C.default.YdnZ8q), tone: "red" },
        alert: { label: () => A.intl.string(C.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => A.intl.string(C.default.RGzFNK), tone: "green" },
    },
    sp = ["blocked", "alert", "allowed"],
    sg = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function sx(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : A.intl.formatToPlainString(A.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, sm.getFriendlyDurationString)(n))
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
var sv = n(984097),
    sj = n(13673);
let sb = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function sy(e) {
    let { example: t } = e,
        n = sx(t);
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
let sk = ["glazedgamer", "sprinkles", "donutking"];
function sw(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = sf[n.outcome];
    return (0, a.jsxs)("li", {
        className: X()(sv.nM, { [X()(sv.HV, sj.DX)]: s }),
        children: [
            (0, a.jsx)(eV.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: sv.my,
                children: (0, a.jsx)(su.eu, {
                    src: (0, sd.AE)(void 0, void 0),
                    size: sc._3.SIZE_24,
                    "aria-label": A.intl.string(C.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: sv.fw,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), ix.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(sy, { example: n }) : null,
                ],
            }),
        ],
    });
}
function sN(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = sh[t.section],
        s = new Set(t.examples.map(sx)),
        o = 1 === s.size ? t.examples.map(sx)[0] : null;
    return (0, a.jsxs)("div", {
        className: sv.UO,
        children: [
            (0, a.jsxs)("div", {
                className: sv.RZ,
                children: [
                    (0, a.jsx)(Q.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: sb[r.tone],
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
                                      className: sv.IQ,
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
                className: sv.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(sw, { example: e, username: sk[(n + t) % sk.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function sC(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            sp
                .map((e) => ({ section: e, examples: t.filter((t) => sg[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: sv.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: sv.hk,
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
                    sN,
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
var sA = n(276293),
    sS = n(460905),
    sE = n(110384),
    sI = n(633018),
    sM = n(763754),
    s_ = n(217424),
    sP = n(194085),
    sT = n(20851),
    sR = n(692508),
    sL = n(798819);
function s$(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: X()(sL.item, sL.labelContainer, sL.colorDefault, {
            [sL.focused]: !0 === t.highlighted,
            [sL.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: sL.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: sL.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: X()(sL.label, sR.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: sL.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: sL.icon }),
                  })
                : null,
        ],
    });
}
function sD(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: X()(t, sR.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: A.intl.string(A.t["5IEsGx"]), icon: sE.W, muted: !0 }
                : { label: A.intl.string(A.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: X()(sL.menu, sR.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: sL.scroller,
            children: [
                (0, a.jsx)(s$, { item: s }),
                (0, a.jsx)("div", { className: sL.separator }),
                (0, a.jsx)(s$, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var sz = n(381941);
function sO() {}
function sF(e) {
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
            botIcon: v,
            appIconSrc: j,
        } = ((t = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser())),
        (n = (0, o.bG)([B.Ay], () => B.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, o.bG)([ty.A], () => ty.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? A.intl.string(C.default.JEYq8M)),
        (u = (0, o.bG)([eQ.default], () => (null != l ? eQ.default.getUser(l) : void 0), [l])),
        (d = ss("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = ss("31338", A.intl.string(C.default["9iAOsw"]), { discriminator: "0003" })),
        (h = ss("31339", (0, eZ.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, sn.rh)({
                                          ...(0, sl.Ay)({
                                              channelId: si.id,
                                              content: e,
                                              author: t,
                                              type: l ?? eX.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: eX.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: se.G.APPLICATION_COMMAND,
                                                        user: (0, sl.Vi)(s),
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
                                              messageType: eX.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: eX.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(so, `<@${i.id}>`)), s),
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
                                  targetMessage: A.intl.string(C.default["y+QYes"]),
                                  memberMessage: A.intl.string(C.default.BUTRDc),
                              },
                          ),
                [g, m, t, h, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === x.length) return null;
    let b = si.name;
    return (0, a.jsxs)("div", {
        className: sR.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: sR.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sA.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: b }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: X()(sR.TE, `group-spacing-${sz.ES}`),
                children: x.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? sR.Rz : void 0,
                            children: [
                                (0, a.jsx)(sT.A, {
                                    message: n,
                                    channel: si,
                                    author: (0, sM.FT)(n.author, si),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (v ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(s_.A, { message: n, channel: si }) : void 0,
                                    usernameClassName: r?.target === "user" ? sR.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: sR.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(sP.Ay, {
                                              children: [
                                                  (0, a.jsx)(sP.qv, {
                                                      label: A.intl.string(A.t.lfIHs4),
                                                      icon: sS.n,
                                                      onClick: sO,
                                                  }),
                                                  (0, a.jsx)(sP.qv, {
                                                      label: A.intl.string(A.t["5IEsGx"]),
                                                      icon: sE.W,
                                                      onClick: sO,
                                                  }),
                                                  (0, a.jsx)(sP.qv, {
                                                      label: A.intl.string(A.t["UKOtz+"]),
                                                      icon: tt.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: sO,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? sR.ET : sR.je,
                                          inert: !0,
                                          children: (0, a.jsx)(sD, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: j,
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
                className: sR.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sI.k, { size: "sm", color: "currentColor" }),
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
var sq = n(332173);
function sU(e) {
    let { name: t } = e;
    return (0, a.jsxs)(sq.A, { children: ["/", t] });
}
function sG(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(iX());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(sU, { name: e.name }, e.start) : e.text));
}
n(827669);
var sB = n(687966),
    sK = n(757789),
    sV = n(26137),
    sH = n(430392),
    sW = n(231483),
    sX = n(323384),
    sJ = n(573634);
let sY = {
    frame: { icon: sB.GameControllerIcon, label: C.default.Z2bt4u },
    overlay_widget: { icon: sK.V, label: C.default["0mGHfU"] },
    user_widget: { icon: sV.r, label: C.default.Jipr29 },
    bot: { icon: sH.RobotIcon, label: C.default.EbvC13 },
    commands: { icon: sH.RobotIcon, label: C.default.EbvC13 },
    automod: { icon: sW.ShieldIcon, label: C.default.tiMvei },
};
function sQ(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: X()(sJ.e7, l),
        children: [(0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function sZ(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: sJ.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: sJ.jw,
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
function s0(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: sJ.lj,
        children: [
            (0, a.jsx)("span", {
                className: X()(sJ.Vo, sJ.G),
                children: (0, a.jsx)(sX.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: sJ.aV,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function s1(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: sJ.wZ,
        children: t.map((e, t) => {
            let n = iY(e),
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
                                ? (0, a.jsx)(sU, { name: e.name })
                                : (0, a.jsx)(sq.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function s2(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: sJ.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: sJ.Aw,
                    children: (0, a.jsx)(Q.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(sG, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function s3(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        { icon: s, label: o } = sY[t.kind],
        u = A.intl.string(o);
    return (0, a.jsxs)("section", {
        className: sJ.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: sJ.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: sJ.Vo,
                        children: (0, a.jsx)(s, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(Q.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: sJ.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(Q.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(sG, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(s2, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: sJ.PG, children: r }) : null,
        ],
    });
}
function s5(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: sJ.aN,
        children: [
            (0, a.jsxs)("div", {
                className: sJ.Lv,
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
                                let n = t.map(iX()).join("|");
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
                            (0, a.jsx)("div", { className: sJ.yF, role: "separator" }),
                            (0, a.jsx)(s3, {
                                experience: t,
                                bullets: n,
                                preview: u(t),
                                blocks: (function (e, t) {
                                    switch (t.kind) {
                                        case "frame":
                                            let n = (function (e, t) {
                                                if ("frame" !== t.kind) return null;
                                                let n = A.intl.string(C.default["6/3tGY"]),
                                                    l = [];
                                                if (t.surfaces.includes(n3.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(n3.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(n3.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        sQ,
                                                        {
                                                            className: sJ.Iw,
                                                            caption: A.intl.formatToPlainString(C.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: sJ.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        s0,
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
                                                ...(n.usableInVoice ? [A.intl.string(C.default["4oGg2h"])] : []),
                                                ...(n.launchableAnywhere ? [A.intl.string(C.default.BTGCfR)] : []),
                                            ];
                                            return (
                                                r.length > 0 &&
                                                    l.push(
                                                        (0, a.jsx)(
                                                            sQ,
                                                            {
                                                                caption: A.intl.string(C.default.MY6UGJ),
                                                                children: (0, a.jsx)(sZ, { labels: r }),
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
                                                              sQ,
                                                              {
                                                                  caption: A.intl.string(A.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(s1, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...[
                                                    {
                                                        key: "permissions",
                                                        caption: C.default["2UbW6r"],
                                                        names: e.bot_permissions,
                                                    },
                                                    {
                                                        key: "intents",
                                                        caption: C.default["7TKfpj"],
                                                        names: e.privileged_intents,
                                                    },
                                                ].flatMap((e) => {
                                                    let { key: t, caption: n, names: l } = e;
                                                    return null != l && l.length > 0
                                                        ? [
                                                              (0, a.jsx)(
                                                                  sQ,
                                                                  {
                                                                      caption: A.intl.string(n),
                                                                      children: (0, a.jsx)(sZ, { labels: l.map(iJ) }),
                                                                  },
                                                                  t,
                                                              ),
                                                          ]
                                                        : [];
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
var s6 = n(633075),
    s4 = n(946356),
    s7 = n(58216),
    s8 = n(27399);
function s9(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        r = i.useMemo(() => new s6.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: s8.H,
              children: (0, a.jsx)(s4.A.Overlay, {
                  className: s8.w,
                  children: (0, a.jsx)(s7.A, {
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
var oe = n(443863);
function ot(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = aW(t, r),
        c = i.useCallback(() => {
            (0, g.PK)(t, r).then(
                (e) => {
                    (0, aH.R)({
                        items: [{ type: "IMAGE", url: e, alt: l }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, r, l]);
    return o
        ? null
        : (0, a.jsx)(eh.D, {
              className: oe.xX,
              onClick: c,
              "aria-label": A.intl.string(C.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: oe.sN, onError: u }) : null,
          });
}
function on(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = iF(c, n3.q7.APPLICATION_COMMANDS)),
            (l =
                iF(c, n3.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(iB)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : iH(c, l, {
                              message: A.intl.string(C.default.J7qggf),
                              reply: A.intl.string(C.default.nqYtiy),
                              event: A.intl.string(C.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = i7 } = t,
                r = (0, o.bG)([i5.default], () => i5.default.locale),
                a = (0, o.bG)([B.Ay], () => {
                    let t = B.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(i4);
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
                                                          ...i8(n),
                                                          ...(null != n.fallback ? { fallback: i8(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = i1.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[lt.m.WIDGET_TOP] || null == i[lt.m.WIDGET_BOTTOM]
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
                                                                    type: i1.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: i1.oG.NUMBER, value: a })
                                                                : (r[e] = { type: i1.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(i9),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: i6,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(u, c),
        p = d?.superseded === !0,
        x = c.what_changed?.trim() ?? "",
        v =
            ((t = c.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === iY(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = i0(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(iB)
                    ? iH({ ...c, bot: void 0 }, "commands", {
                          message: A.intl.string(C.default.J7qggf),
                          reply: A.intl.string(C.default.nqYtiy),
                          event: A.intl.string(C.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([B.Ay], () => B.Ay.getProject(u)?.name, [u]),
        k =
            p && null != d
                ? A.intl.formatToPlainString(C.default.YZ3qJs, { version: d.version })
                : A.intl.string(C.default["3b6e7o"]),
        w = p ? (0, a.jsx)(r9, { children: A.intl.string(C.default.hF2c41) }) : null;
    return (0, a.jsxs)(ae, {
        title: k,
        meta: w,
        superseded: p,
        showLabel: A.intl.string(C.default.yD8EJS),
        hideLabel: A.intl.string(C.default.nSPGNb),
        bodyClassName: oe.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: oe.Qs,
                children: (0, a.jsx)(s5, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(Q.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(sG, { text: c.summary, commandNames: v }),
                            }),
                            "" !== x
                                ? (0, a.jsxs)("section", {
                                      className: oe.uW,
                                      children: [
                                          (0, a.jsx)(Q.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: A.intl.string(C.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(Q.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(sG, { text: x, commandNames: v }),
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
                                    ? (0, a.jsx)(ot, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: A.intl.string(null == (t = i0(c)) ? C.default["3/aHX6"] : iQ[t]),
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(s9, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(sC, { automod: c.automod })
                                    : null;
                            case "commands":
                                return b.length > 0 ? (0, a.jsx)(sF, { projectId: u, exchanges: b }) : null;
                            case "bot": {
                                var n;
                                let t,
                                    l = (e.example_exchanges ?? [])
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
                                        }),
                                    r =
                                        ((n = l.length > 0 ? l : f),
                                        (t = n.some((e) => "command" === e.kind || iK(e))),
                                        0 === b.length || t ? n.slice(0, 3) : [...n.slice(0, 2), b[0]]);
                                return r.length > 0 ? (0, a.jsx)(sF, { projectId: u, exchanges: r }) : null;
                            }
                        }
                    },
                    commandNames: v,
                }),
            }),
            null == m || p
                ? null
                : (0, a.jsxs)("div", {
                      className: oe.qr,
                      children: [
                          (0, a.jsx)(et.$, {
                              variant: "primary",
                              size: "sm",
                              text: A.intl.string(C.default["6S+wRM"]),
                              onClick: m,
                          }),
                          (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: A.intl.string(C.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var ol = n(289565);
function or(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: ol.m, children: n })
        : (0, a.jsxs)("div", {
              className: ol.Z,
              children: [
                  n,
                  (0, a.jsx)(eR.m, {
                      text: A.intl.string(A.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(te.K, {
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
function oa(e) {
    return null != e && e.status?.state === "unpublished";
}
let oi = new WeakMap();
function os(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, o.bG)([f.A], () => (null == n ? null : f.A.getGuild(n)));
    return (0, a.jsx)(tp.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(tp.B, {
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
                    ? (0, a.jsxs)(tp.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: A.intl.string(C.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(q.Ay, { guild: l, size: q.Ay.Sizes.SMOL }),
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
function oo(e) {
    let { projectId: t } = e,
        n = (0, tu.Ay)(t);
    return null != n && oa(n) ? (0, a.jsx)(or, { children: (0, a.jsx)(os, { publish: n }) }) : null;
}
var ou = n(989271);
function oc(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(eh.D, {
        className: X()(ou.nM, { [ou.f1]: s, [ou.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": A.intl.formatToPlainString(C.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: ou.jo,
                children: [
                    n
                        ? (0, a.jsx)(t7.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ou.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(Q.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ou.G9,
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
function od(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(r7, {
        title: A.intl.string(C.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                oc,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var om = n(530557),
    of = n(872162),
    oh = n(628284),
    op = n(564963),
    og = n(202723);
function ox(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tg.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: om.R })), [r.fields]),
        d = (0, op.bB)(l, s),
        m = X()(og.Lo, { [og.jY]: d });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(Q.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: A.intl.string(C.default.CTxtdV),
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
                            children: A.intl.string(C.default.HCQvpO),
                        }),
                        (0, a.jsx)(of.C, { label: A.intl.string(C.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: og.Lo,
                      children: (0, a.jsx)(of.C, { label: A.intl.string(C.default.HCQvpO), size: "xs", items: c }),
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
                                className: og.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: og.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(oh.y, {
                                            size: "xs",
                                            color: ea.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: A.intl.string(C.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(of.C, { label: A.intl.string(C.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: og.Lo,
                    children: [
                        (0, a.jsx)(Q.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: A.intl.string(null != o ? C.default.O0QIqj : C.default.HCQvpO),
                        }),
                        (0, a.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : A.intl.string(C.default.MPGSHL),
                        }),
                        (0, a.jsx)(of.C, { label: A.intl.string(C.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: og.sq,
                            children: (0, a.jsx)(et.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: A.intl.string(C.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var ov = n(919790),
    oj = n(971824),
    ob = n(162052),
    oy = n(165648);
function ok(e) {
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
            className: ao.pj,
            "data-live": !1,
            children: (0, a.jsx)(r5.A, {
                glyph: (0, a.jsx)(ig.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: A.intl.string(C.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, rZ.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = (0, ij.n)(k.map((e) => e.taskId)),
        N = !p && (l || k.some((e) => "running" === e.task.status)),
        S = (0, iw.k)(k);
    return (0, a.jsxs)("ol", {
        className: ao.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(r2.Ay, {
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
                let l = null != e.task.helperMark ? (0, ij.p)(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          iN,
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
            (0, a.jsx)(i$, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: ao.YO,
                      children: (0, a.jsx)(ai, { todos: b, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function ow(e) {
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
            onApprovePlan: v,
            sideReply: j = !1,
            sideReplyAcknowledges: b,
            hoistedProse: y = !1,
            hoistedAttachmentsHost: k,
            restoreProposal: w,
            onRestoreProposal: N,
        } = e,
        S = i.useMemo(
            () => iv({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: _ } = S,
        P = (y ? k : void 0) ?? S.attachmentsHost,
        T = M && !y,
        R = null == u ? null : (0, a.jsx)(ov.A, { projectId: t, attachments: u }),
        L = null == R ? null : (0, a.jsx)("div", { className: ao.MT, children: R }),
        $ = j
            ? (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return A.intl.string(C.default.Mv5OmK);
                          case "queued":
                              return A.intl.string(C.default["Po/2mi"]);
                          case "restarting":
                              return A.intl.string(C.default.Vj0woh);
                          default:
                              return A.intl.string(C.default.gY3L8p);
                      }
                  })(b),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: ao.ue,
        children: [
            E.length > 0 && !y
                ? (0, a.jsx)("ol", {
                      className: ao.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: ao.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: oy.PT,
                                          children: ix.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === P && e === I ? L : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(on, { projectId: t, proposal: r, version: s, onApprove: v })
                : T
                  ? (0, a.jsxs)("div", {
                        className: X()(ao.ky, ob.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: X()(oy.PT, ao.cW),
                                children: ix.A.parse(_, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === P ? L : null,
                            $,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: X()(ao.ky, ob.XR, { [oj.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(ox, {
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
                      className: X()(ao.ky, ob.XR),
                      children: (0, a.jsx)(il, { projectId: t, request: h }),
                  })
                : null,
            "standalone" !== P && ("closing" !== P || T) ? null : R,
            null != p ? (0, a.jsx)(oo, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(od, { ideas: o, pickedIdeaIds: x, onPick: g }) : null,
            null != w ? (0, a.jsx)(iz, { proposal: w, onRestore: N }) : null,
            T ? null : $,
        ],
    });
}
var oN = n(146806),
    oC = n(477262),
    oA = n(432017),
    oS = n(475358),
    oE = n(717400),
    oI = n(663341),
    oM = n(559647),
    o_ = n(775602),
    oP = n(234320),
    oT = n(191023);
function oR(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(l8.p, {
        name: A.intl.string(C.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: nV.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(oT.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: nV.OY,
                    children: (0, a.jsx)(aj.PencilIcon, {
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
            children: A.intl.string(C.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: re.o1,
            onClick: () => {
                nq(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": A.intl.string(C.default.N852dj),
            children: (0, a.jsx)(lV.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function oL(e) {
    let { send: t } = e;
    return (0, a.jsxs)(l8.p, {
        compact: !0,
        name: A.intl.string(C.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(Q.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: A.intl.string(C.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: re.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(ab.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: A.intl.string(C.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var o$ = n(901173),
    oD = n(659280),
    oz = n(351906),
    oO = n(322915);
function oF(e) {
    let { id: t, users: n, selectedIndex: l, onHover: r, onSelect: i } = e,
        s = (0, o.bG)([oz.A], () => oz.A.hidePersonalInformation ?? !1);
    return 0 === n.length
        ? null
        : (0, a.jsxs)(oD.Ay, {
              id: t,
              className: oO.n,
              onMouseDown: (e) => e.preventDefault(),
              children: [
                  (0, a.jsx)(oD.Ay.Title, { title: A.intl.string(C.default.Vb3sUg) }),
                  (0, a.jsx)("div", {
                      id: t,
                      role: "listbox",
                      "aria-labelledby": (0, oD.Sz)(t),
                      children: n.map((e, t) =>
                          (0, a.jsx)(
                              oD.Ay.User,
                              {
                                  index: t,
                                  user: e,
                                  nick: null,
                                  status: null,
                                  hidePersonalInformation: s,
                                  selected: t === l,
                                  onHover: r,
                                  onClick: i,
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
var oq = n(497437);
let oU = [
        {
            id: "add-images-videos",
            label: C.default["51+9lc"],
            icon: oC.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: C.default["10ljr2"],
            icon: oA.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: C.default.aotDee, icon: ec.H, accept: "" },
    ],
    oG = "text-md/normal",
    oB = null;
function oK(e) {
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
                frontFrom: 1e3 * (0, oN._R)(m),
                frontTo: 1e3 * (0, oN._R)(h),
                backFrom: 1e3 * (0, oN.T)(m),
                backTo: 1e3 * (0, oN.T)(h),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [v, j] = i.useState(0),
        [b, y] = i.useState(null),
        k = i.useRef(!1),
        w = i.useCallback(() => {
            (y(k.current ? (n ? "through" : "out") : n ? "in" : null), j((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        k.current = n;
    }, [n, t]);
    let N = "in" === b ? g.backFrom : g.frontFrom,
        S = "out" === b ? g.frontTo : g.backTo,
        E = (0, o.bG)([o_.Ay], () => o_.Ay.useReducedMotion),
        I = t === A.intl.string(C.default.Zc7gML),
        M = r === t && I;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: X()(oq.VT, { [oq.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${N}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - N)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && v > 0 && null != b ? v % 2 : void 0,
            "data-wipe-kind": l ? (b ?? void 0) : void 0,
            children: (0, a.jsx)(oS.e, { shortcut: "tab", className: oq.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ey.o, {
                text: t,
                variant: oG,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: X()(oq.xM, { [oq.s2]: l }),
                onStart: w,
                onComplete: () => s(t),
            }),
            _(oq.IS, n || (!E && "out" === b), u),
            (0, a.jsx)("span", {
                ref: c,
                className: oq.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(Q.E, { variant: oG, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: oq.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(Q.E, { variant: oG, tag: "span", className: oq.xM, children: t }),
                          _(oq.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let oV = i.memo(function (e) {
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
                suggestion: f,
                questionOpen: h = !1,
                hasPendingContext: p = !1,
                onDraftHasTextChange: v,
                modelSettings: j,
                onModelSettingsChange: b,
            } = e,
            [y, k] = i.useState(() => ih.getDraft(t)),
            w = i.useCallback(
                (e) => {
                    (lH.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }), k(e));
                },
                [t],
            ),
            N = "" !== y.trim();
        i.useEffect(() => v?.(N), [N, v]);
        let [S, E] = i.useState(t);
        S !== t && (E(t), k(ih.getDraft(t)));
        let I = (0, o.bG)([o_.Ay], () => o_.Ay.isSubmitButtonEnabled),
            [M, _] = i.useState(!1);
        i.useEffect(() => {
            l || _(!1);
        }, [l]);
        let P = i.useRef(null),
            {
                drafts: T,
                addFiles: R,
                pasteFiles: L,
                removeDraft: $,
                settled: D,
                takeRefs: z,
            } = rn({ projectId: t, surface: "chat", onUploadFile: c }),
            O = nz.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && nL(n);
            }),
            F = "" !== y.trim() || T.length > 0 || p || O,
            q = n && F && D,
            [U, G] = i.useState(null);
        i.useEffect(() => {
            if (null == U) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => G(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [U]);
        let K = (function (e) {
                let { creator: t, collaborators: n } = e2((0, o.bG)([B.Ay], () => B.Ay.getProject(e), [e])),
                    l = (0, o.bG)([li.default], () => li.default.getId());
                return i.useMemo(
                    () => [...(null != t ? [t] : []), ...n].filter((e) => e.id !== l && !e.bot),
                    [t, n, l],
                );
            })(t),
            [V, H] = i.useState(null),
            [W, X] = i.useState(null),
            [J, Y] = i.useState(0),
            Q = i.useMemo(() => (null != V && n ? (0, o$.OG)(y, V) : null), [y, V, n]),
            Z = Q?.start ?? null;
        i.useEffect(() => {
            null == Z && X(null);
        }, [Z]);
        let ee = Z === W ? null : Q,
            et = i.useMemo(() => (null == ee ? [] : (0, o$.l$)(K, ee.text)), [ee, K]),
            en = ee?.text;
        i.useEffect(() => Y(0), [en]);
        let el = et.length > 0,
            er = Math.min(J, Math.max(0, et.length - 1)),
            ea = i.useId(),
            ei = i.useRef(null);
        i.useLayoutEffect(() => {
            let e = ei.current;
            null != e && ((ei.current = null), ej.current?.querySelector("textarea")?.setSelectionRange(e, e));
        }, [y]);
        let ec = i.useCallback((e) => {
                H(e.currentTarget.selectionStart);
            }, []),
            ed = i.useCallback(
                (e) => {
                    let t = et[e];
                    if (null == ee || null == t) return;
                    let n = (0, o$.S$)(y, ee, t);
                    ((ei.current = n.caret), H(n.caret), w(n.value));
                },
                [et, ee, y, w],
            ),
            em = i.useCallback(() => {
                if (!q) return;
                let e = z(),
                    n = O
                        ? (function (e) {
                              let t = nF(e);
                              if (null == t || !nL(t)) return null;
                              let n = t.history.present,
                                  l = rU(e);
                              return (
                                  nq(e, (e) => ({ ...e, history: nA, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, x.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (rz.set(i, s),
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
                                              capture: (t) => (0 === t ? l : rU(e)),
                                              composite: (e) => r$(e, n),
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
                                                          (rz.delete(i),
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
                s((0, o$.gg)(y, K), e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == oB && (oB = document.createElement("canvas").getContext("2d"));
                    let i = oB;
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
                })(ej.current?.querySelector("textarea") ?? null, eI.current, y);
                ("" !== l && G(l), w(""), X(null));
            }, [q, O, t, y, s, z, w, K]),
            ef = i.useCallback(
                (e) => {
                    (e.preventDefault(), em());
                },
                [em],
            ),
            eh = i.useCallback(() => {
                null == u || M || (_(!0), u());
            }, [u, M]),
            ep = null == f || "" !== y || !n || r || p ? null : f,
            eg = i.useCallback(
                (e) => {
                    if (el && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = et.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), Y((er + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ed(er));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), X(ee?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && l && null != u && !M) {
                        (e.preventDefault(), e.stopPropagation(), eh());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ep) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), w(ep));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), em());
                },
                [em, d, l, u, M, eh, ep, w, el, et.length, er, ed, ee],
            ),
            ex = i.useCallback(
                (e) => {
                    n && L(e);
                },
                [n, L],
            );
        (0, oP.Vo)({
            event: eX.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ex(t);
            },
        });
        let ev = i.useCallback(
                (e) => {
                    (R(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [R],
            ),
            ej = i.useRef(null),
            eb = i.useRef(null),
            ey = i.useCallback((e) => {
                let t = P.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [ek, ew] = i.useState(0),
            [eN, eC] = i.useState(!1);
        i.useEffect(() => {
            if (0 === y.length) return void eC(!1);
            let e = ej.current?.querySelector("textarea");
            if (null != e) {
                let t = oX(e);
                null != t && ew(t);
            }
            eC(!0);
            let t = setTimeout(() => eC(!1), oH);
            return () => clearTimeout(t);
        }, [y]);
        let eA = i.useMemo(() => ({ "--custom-glow-x": `${ek}px` }), [ek]),
            eS = eN ? ` ${oq.EB}` : "",
            eE = r
                ? A.intl.string(C.default.qqlUiW)
                : n
                  ? p
                      ? A.intl.string(C.default.knUjL3)
                      : h
                        ? A.intl.string(C.default.IevBEw)
                        : A.intl.string(l ? C.default["0BJa/0"] : C.default.TEeU7z)
                  : A.intl.string(C.default.zZ9NgM),
            eI = i.useRef(0),
            eM = i.useRef(null),
            e_ = i.useCallback((e) => {
                if ((eM.current?.disconnect(), null == e)) return;
                eI.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eI.current = e.clientWidth;
                });
                (t.observe(e), (eM.current = t));
            }, []),
            eP = i.useId(),
            eT = null != ep,
            e$ = U ?? ep ?? eE,
            eD = "" === y && "" !== e$;
        return (0, a.jsxs)("form", {
            onSubmit: ef,
            className: oq.DA,
            children: [
                el ? (0, a.jsx)(oF, { id: ea, users: et, selectedIndex: er, onHover: Y, onSelect: ed }) : null,
                T.length > 0 || O
                    ? (0, a.jsxs)("div", {
                          className: oq.lN,
                          children: [
                              T.map((e) => (0, a.jsx)(rl, { draft: e, onRemove: $ }, e.localId)),
                              O ? (0, a.jsx)(oR, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${oq.wg} ${oq.LP}${eS}`, style: eA, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${oq.wg} ${oq.L3}${eS}`, style: eA, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: oq.VA,
                    ref: ej,
                    children: [
                        (0, a.jsx)("input", {
                            ref: P,
                            type: "file",
                            multiple: !0,
                            onChange: ev,
                            className: oq.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(es.Y, {
                            targetElementRef: eb,
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
                                            oU.map((e) =>
                                                (0, a.jsx)(
                                                    eu.Dr,
                                                    {
                                                        id: e.id,
                                                        label: A.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => ey(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(eu.Dr, {
                                                      id: "import-project",
                                                      label: A.intl.string(C.default["p/k5i7"]),
                                                      iconLeft: oE.q,
                                                      leadingAccessory: { type: "icon", icon: oE.q },
                                                      action: m,
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
                                    ref: eb,
                                    type: "button",
                                    className: `${oq.Y0} ${oq.nu}`,
                                    disabled: !n,
                                    "aria-label": A.intl.string(A.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(oI.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: oq.Qu,
                                    }),
                                });
                            },
                        }),
                        eD
                            ? (0, a.jsx)("div", {
                                  ref: e_,
                                  className: oq.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(oK, { text: e$, offering: eT && null == U, typed: null != U }),
                              })
                            : null,
                        (0, a.jsx)(lK.y, {
                            value: y,
                            onChange: (e) => {
                                (w(e.currentTarget.value), H(e.currentTarget.selectionStart));
                            },
                            onSelect: ec,
                            onBlur: () => H(null),
                            onKeyDown: eg,
                            onPaste: ex,
                            placeholder: eD ? "" : eE,
                            disabled: !n,
                            "aria-label": A.intl.string(C.default.ldNl9x),
                            "aria-describedby": eD ? eP : void 0,
                            "aria-autocomplete": "list",
                            "aria-haspopup": "listbox",
                            "aria-expanded": el,
                            "aria-controls": el ? ea : void 0,
                            "aria-activedescendant": el ? ((0, oD.aI)(er) ?? void 0) : void 0,
                            rows: 1,
                            className: oq.jp,
                        }),
                        eD ? (0, a.jsx)(eV.A, { id: eP, children: eE }) : null,
                        (0, a.jsx)("div", {
                            className: oq.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(eR.m, {
                                          text: A.intl.string(C.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${oq.Y0} ${oq.$E}`,
                                              disabled: M,
                                              onClick: eh,
                                              "aria-label": A.intl.string(C.default.wiguT0),
                                              children: (0, a.jsx)(ig.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : j?.tierSettings != null && null != b
                                      ? (0, a.jsx)(eB, {
                                            settings: j.tierSettings,
                                            tiers: j.tiers,
                                            choices: j.choices,
                                            disabled: !n,
                                            onChange: b,
                                            className: `${oq.Y0} ${oq.$E}`,
                                            icon: (0, a.jsx)(eL.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        I
                            ? (0, a.jsxs)("div", {
                                  className: oq.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: oq.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: oq.rt,
                                          disabled: !q,
                                          "aria-label": A.intl.string(C.default.rxW2cl),
                                          children: (0, a.jsx)(oM.SendMessageIcon, {
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
    oH = 1500,
    oW = [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-indent",
        "text-transform",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
    ];
function oX(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = oX.mirror;
            if (null != e) return e;
            let t = document.createElement("div");
            return (
                t.setAttribute("aria-hidden", "true"),
                (t.style.position = "absolute"),
                (t.style.top = "0"),
                (t.style.left = "-9999px"),
                (t.style.visibility = "hidden"),
                (t.style.boxSizing = "border-box"),
                (t.style.whiteSpace = "pre-wrap"),
                (t.style.overflowWrap = "break-word"),
                document.body.appendChild(t),
                (oX.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of oW) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let r = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + r - e.scrollLeft);
}
oX.mirror = null;
var oJ = n(986109);
let oY = i.createContext(null);
function oQ(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(oY),
        [d, m] = i.useState(() => o_.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: X()(oJ.xk, { [oJ.g5]: d, [oJ.Qo]: s, [oJ.q3]: o }),
        children: n,
    });
}
let oZ = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n } = e;
            return null != t && n ? "card" : null;
        },
        dismissal: "app",
    },
    o0 = new Map();
function o1(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function o2(e, t) {
    return null != e && e > 0 && e < t;
}
let o3 = "ideas",
    o5 = "live_behind",
    o6 = "conjureTipDismissals",
    o4 = new Set(),
    o7 = new Set(),
    o8 = 0;
function o9() {
    let e = tB.w.get(o6);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function ue(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return o4.has(((n = e.id), `${t}:${n}`));
        case "app":
            return o9().app[t]?.includes(e.id) === !0;
        case "forever":
            return o9().forever.includes(e.id);
    }
}
function ut(e) {
    return (o7.add(e), () => o7.delete(e));
}
let un = [12e4, 6e4];
var ul = n(292771);
function ur(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([o_.Ay], () => o_.Ay.useReducedMotion),
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
            className: ul.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: X()(ul.qd, e.leaving ? ul.dv : ul.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var ua = n(443865),
    ui = n(247171);
function us(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: X()(ui.row, r),
        children: [
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: X()(ui.gutter, ui[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: ui.content, children: i }),
        ],
    });
}
var uo = n(716502);
function uu(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(us, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: uo.Nr,
        children: (0, a.jsxs)("section", {
            className: uo.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: uo.X8,
                          children: (0, a.jsx)(eR.m, {
                              text: A.intl.string(A.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(te.K, {
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
function uc(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: uo.DD,
        children: t,
    });
}
function ud(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: uo.rf,
        children: t,
    });
}
function um(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: uo.o1, children: t });
}
let uf = {
    ...oZ,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(uu, {
            icon: ua.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(uc, { children: A.intl.string(C.default.OJlbhX) }),
                (0, a.jsx)(ud, { children: A.intl.string(C.default["3vJBni"]) }),
                (0, a.jsx)(um, {
                    children: (0, a.jsx)(et.$, {
                        variant: "primary",
                        size: "sm",
                        text: A.intl.string(C.default["U/bLzU"]),
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
var uh = n(830205);
function up(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(us, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: uh.aK,
        children: (0, a.jsxs)("div", {
            className: uh.n8,
            children: [
                (0, a.jsx)(Q.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: uh.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: uh.X8,
                          children: (0, a.jsx)(eR.m, {
                              text: A.intl.string(A.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(te.K, {
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
var ug = n(95635);
let ux = [
    {
        id: o5,
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
                (null != t.publishCta && oa(n)) ||
                o2(e.messagesSinceShown(o5), 10)
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
                ? (0, a.jsx)(up, {
                      icon: ug.UploadIcon,
                      onDismiss: l,
                      children: A.intl.format(C.default.fWfeZ8, { onPublish: () => n.run("outdated_notice") }),
                  })
                : null;
        },
    },
    uf,
    {
        id: o3,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(oZ) ||
                0 === e.messagesSinceShown(oZ.id) ||
                o2(e.messagesSinceShown(o3), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(up, {
                icon: ua.LightbulbIcon,
                onDismiss: l,
                children: A.intl.format(C.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var uv = n(817921);
function uj(e) {
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
                    ((s = (0, tu.Ay)(t)),
                    (u = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()?.id)),
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
                        un,
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
                        publishedSinceLastMessage: null != p && 0 === o1(n, p, u),
                        messagesSinceShown: (e) => {
                            let l = o0.get(`${t}:${e}`);
                            return null != l ? o1(n, l, u) : null;
                        },
                        isDismissed: (e) => ue(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(ut, () => o8);
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
                })(e, g, (e) => ue(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== g.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                o0.set(`${e}:${t}`, n);
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
                                          if (!(null == e.dismissal || ue(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  o4.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = o9();
                                                  tB.w.set(
                                                      o6,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (o8++, o7.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(ux, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(oQ, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: uv.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(ur, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var ub = n(52133),
    uy = n(732159),
    uk = n(888366),
    uw = n(862026),
    uN = n(291192);
function uC(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, uw.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: uN.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: uN.Sp,
                children: [
                    (0, a.jsx)("span", { className: uN.q3 }),
                    (0, a.jsxs)("span", {
                        className: uN.g8,
                        children: [
                            (0, a.jsx)(uk.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(Q.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: uN.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: uN.nM,
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
                                          (0, a.jsx)(ab.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tg.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(uy.u, {
                                                                    ...t,
                                                                    title: A.intl.string(C.default["i+xjZM"]),
                                                                    subtitle: A.intl.string(C.default.fMBZmD),
                                                                    confirmText: A.intl.string(C.default.i5f3Uo),
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
function uA(e) {
    return (0, o.bG)([B.Ay, ty.A], () => {
        let t = B.Ay.getProject(e);
        return null == t ? "" : (ty.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var uS = n(951465),
    uE = n(369455);
function uI(e) {
    let { projectId: t, notice: n } = e,
        l = uA(t),
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
                    ? C.default.ev23Cw
                    : n.update
                      ? C.default.gQzuLC
                      : null == r
                        ? C.default.MOrR29
                        : C.default["/npn7F"],
                { name: l, server: r ?? "" },
            ),
            n.update && null != n.published_revision ? (0, a.jsx)(uM, { projectId: t, notice: n }) : null,
        ],
    });
}
function uM(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tu.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [lT.A, B.Ay],
                    () => {
                        let r = lT.A.getPublishStatus(e),
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
                      ? A.intl.format(C.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    eh.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: uE.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, d.pX)(eX.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : A.intl.format(C.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = B.Ay.getProject(e),
                                        a = null == r ? null : (0, tu.KL)(r, l);
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
                                null != e && (0, uS.A)(e);
                            },
                        }),
              ],
          });
}
var u_ = n(940874);
n(775443);
var uP = n(616e3),
    uT = n(155899),
    uR = n(521981),
    uL = n(491182),
    u$ = n(438729),
    uD = n(622868),
    uz = n(448368),
    uO = n(837528),
    uF = n(470964),
    uq = n(715628),
    uU = n(752636),
    uG = n(9842),
    uB = n(589022),
    uK = n(967198),
    uV = n(531685);
let uH = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function uW(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function uX(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function uJ(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = uX(e, t),
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
    if (uW(r) && uW(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && uW(uX(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function uY(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([o_.Ay], () => o_.Ay.useReducedMotion),
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
                      for (; a > 0 && uJ(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && uH.has(e.charAt(l - 1));) l--;
                                    return uH.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && uJ(t, o);) o++;
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
var uQ = n(624479),
    uZ = n(890377),
    u0 = n(180227);
function u1(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: X()(u0.QE, { [u0.Rn]: t }),
              children: (0, a.jsx)(sP.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          sP.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function u2(e) {
    return tr.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: A.intl.string(A.t.JrGD7E), icon: uQ.CopyIcon, onClick: () => (0, tr.C)(e) }]
        : [];
}
function u3(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: A.intl.string(C.default.CXtLD2),
                          tooltip: A.intl.string(C.default.DOb1HM),
                          icon: uZ.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: A.intl.string(C.default.urZwpN),
                          icon: en.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(u1, { groupStart: n, actions: [...r, ...u2(t)] });
}
function u5(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: A.intl.string(C.default.H8Jfhu), icon: rm.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: t9.BugIcon, onClick: r }];
    return (0, a.jsx)(u1, { groupStart: n, actions: [...i, ...u2(t), ...s] });
}
let u6 = (0, sr.createChannelRecord)({ id: "conjure-builder", type: eX.rbe.DM }),
    u4 = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function u7(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: X()(u0.Yq, { [u0.x1]: t }), children: e });
}
function u8(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function u9(e, t, n) {
    let { content: l } = (0, uF.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: u6, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(u$.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, uq.A)(r, l);
}
function ce(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, uO.m)(e, u6, t.usernameProfile, l),
        u = (0, uO.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([uK.A], () => uK.A.getGuildId()),
        d = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = eQ.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(uB.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function ct(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = "" !== n.content ? (0, uR.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: u0.GV,
                              children: [
                                  (0, a.jsx)(t8.x, {
                                      className: u0.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  l,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [n, l]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: c } = (0, o.cf)(
            [t0.A],
            () => ({
                isReplyAuthorBlocked: t0.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: t0.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, sM.X4)(n),
        m = (0, sM.X4)(t),
        f = ce(n);
    return (0, a.jsx)(uz.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: u6,
        referencedMessage: { state: uG.a.LOADED, message: n },
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
function cn(e) {
    let { message: t, author: n } = e,
        l = ce(t);
    return (0, a.jsx)(uD.Ay, {
        message: t,
        channel: u6,
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
function cl(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, e1.vm)(l),
        c = i.useMemo(() => (0, sM.FT)(u, null), [u]),
        d = i.useMemo(() => nf(t), [t]),
        m = d?.body ?? t,
        f = (0, o$.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, sl.Ay)({ channelId: u6.id, content: m, author: u });
            return (0, sn.rh)({ ...e, timestamp: u8(n, e.timestamp), state: eX.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              cr,
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
function cr(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = u9(t, l);
    return (0, a.jsx)(uL.A, {
        className: u0.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(cn, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: u0.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: u0.GV,
                              children: [
                                  (0, a.jsx)(t8.x, {
                                      className: u0.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: u0.WO, children: u }),
                      ],
                  }),
        childrenAccessories: u7(i, "" !== l),
        childrenButtons: (0, a.jsx)(u3, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function ca(e) {
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
        { text: m, revealing: f } = uY(t, { streaming: (0, o.bG)([uV.A], () => c && uV.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, sM.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, e1.vm)(g),
        v = i.useMemo(() => (null == r ? null : nf(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, sl.Ay)({ channelId: u6.id, content: v?.body ?? r.content, author: x });
            return (0, sn.rh)({ ...e, id: r.id, timestamp: u8(r.createdAt, e.timestamp), state: eX.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: u6.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, sl.Ay)({ channelId: u6.id, content: "", author: u4 })),
        k = i.useMemo(
            () =>
                (0, sn.rh)({
                    ...y,
                    timestamp: u8(n, y.timestamp),
                    state: eX.cmJ.SENT,
                    ...(null != b ? { type: eX.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        N = i.useMemo(
            () => (0, uU.A)({ message: k, channel: u6, author: p, guildId: void 0, isGroupStart: u }),
            [k, p, u],
        ),
        C = u9(w, m, u0.OS);
    return (0, a.jsxs)("div", {
        className: u0.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(uL.A, {
                className: u0.yE,
                author: p,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(ct, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: u7(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: u0.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(sX.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function ci(e) {
    let { onSelect: t, onClose: n = eH.Z_, onRestoreVersion: l, onViewTrace: r } = e;
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
                          label: A.intl.string(C.default.H8Jfhu),
                          icon: rm.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eu.Dr, { id: "view-trace", label: "View Trace", icon: t9.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cs(e) {
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
        j = null != v && null != g ? () => co(v, g) : void 0,
        b =
            ((t =
                nQ() && "assistant" === x.role && (0, r0.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [uP.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : uP.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((nX = { projectId: e, traceId: t }), [...nW])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(oQ, {
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
                          void (0, eH.jA)(t, (e) => (0, a.jsx)(ci, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(ca, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(u5, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(ow, {
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
                onRestoreProposal:
                    null != w && null != g && f
                        ? () =>
                              co(
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
function co(e, t) {
    (0, uT.F)({ onConfirm: () => t(e) });
}
var cu = n(288539);
function cc(e, t, n) {
    return (0, a.jsx)(cu.A, { userId: e, content: `@${t}` }, n);
}
function cd(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => (0, e1.Y_)(l), [l]);
            let r = (0, o.bG)([eQ.default], () => (null == l ? null : eQ.default.getUser(l)), [l]),
                a = (0, eZ.tx)(r),
                s = uA(e),
                u =
                    (0, o.bG)([f.A], () => (null == t.guild_id ? null : f.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? A.intl.string(C.default.R1tPlP),
                c = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == c
                        ? A.intl.format(C.default.Lwsrhg, { app: s, server: u })
                        : A.intl.format(C.default.qqePfT, { app: s, server: u, ...c });
                case "bot_removed":
                    return null == c
                        ? A.intl.format(C.default.mT7EQG, { app: s, server: u })
                        : A.intl.format(C.default["lA/crI"], { app: s, server: u, ...c });
                case "preview_bot_removed":
                    return null == c
                        ? A.intl.format(C.default["4LVIeo"], { app: s, server: u })
                        : A.intl.format(C.default.YJOV6D, { app: s, server: u, ...c });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == c
                        ? A.intl.format(C.default["4VQfid"], { channel: e, server: u })
                        : A.intl.format(C.default.RlMIJN, { channel: e, server: u, ...c });
                }
            }
        })(t, n, cc);
    return (0, a.jsx)(Q.E, { variant: "text-md/normal", color: "text-default", children: l });
}
let cm = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    rO.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = null != o.attachments && o.attachments.length > 0 ? o.attachments : null;
                    return (0, a.jsx)(oQ, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cl, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != e || null != u
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != e ? (0, a.jsx)(ov.A, { projectId: l, attachments: e }) : null,
                                              null != u ? (0, a.jsx)(oL, { send: u }) : null,
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
                                    return (n) => (0, u_.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(oQ, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(ca, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(ov.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(oQ, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(ok, {
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
                    return (0, a.jsx)(oQ, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(ca, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(uI, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(oQ, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(ca, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(cd, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(oQ, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(uC, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(oQ, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(ok, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(oQ, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(ok, {
                            projectId: l,
                            steps: cf,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(cs, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, ub.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, ub.A)(e.row, t.row, ["message"]) &&
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
                (0, ub.A)(e.replyTo, t.replyTo) &&
                (0, ub.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    cf = [],
    ch = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cp = new WeakMap();
function cg(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cx(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cv = i.memo(function (e) {
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
            onUnpin: v,
            handleRef: j,
            onShowsLatestChange: b,
        } = e,
        y = i.useRef(null),
        [k, w] = i.useState(null),
        N = i.useCallback((e) => {
            ((y.current = e), w(e));
        }, []),
        [S, E] = i.useState(null),
        I = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(I.current), []);
    let M = i.useCallback((e) => {
            (E(e), window.clearTimeout(I.current), (I.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        _ = (0, o.bG)([lT.A], () => lT.A.getPublishStatus(t)?.state ?? null),
        P = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()?.id),
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
                        i = cp.get(r);
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
                            i = iv({
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
                            if (null != n.prose && ch.test(n.prose.content)) m = !0;
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
                        let f = ch.test(e.content ?? "");
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
                    (cp.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                    if ("unpublished" !== t) return null;
                    for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                    return null;
                })(n, _)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = oi.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), oi.set(t, n)), n);
                      })),
                m,
            );
        }, [n, _, m]),
        R = i.useMemo(() => T.map((e) => e.key), [T]),
        [L, $] = i.useState(null),
        D = (function (e, t, n) {
            if (null == t) return cg(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cx(e, t.endKey, t.end - 1) + 1,
                a = cx(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), cg(e, a, r));
        })(R, L, g),
        z = i.useRef(D),
        O = i.useRef(R),
        F = i.useRef(T),
        q = i.useRef(null),
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
            q.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [h]),
        K = i.useCallback(() => {
            let e = h.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cg(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cg(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? cg(e, i, t.end) : null;
            })(O.current, z.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: p.current,
            });
            "older" === n ? (0, x.loadOlderHistory)(t) : null != n && $(n);
        }, [h, p, t]);
    i.useImperativeHandle(
        j,
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
                    (v(), $(z.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = F.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, x.loadOlderHistory)(t) && (V.current = e);
                    return;
                }
                (v(),
                    (U.current = () => {
                        (y.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    $(((n = O.current), cg(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, v, t],
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
            ((z.current = D), (O.current = R), (F.current = T));
        }),
        i.useLayoutEffect(() => {
            let e = h.current?.getScrollerNode(),
                t = y.current;
            if (null != e && null != t) {
                let n = q.current;
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
        er = (0, o.bG)([tc.A], () => tc.A.getSettings(t)?.secrets, [t]),
        ea = i.useMemo(() => (0, op.Mv)(n, er), [n, er]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: X()(oJ.x7, oJ.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: oJ.Ub, children: (0, a.jsx)(el.y, {}) }),
            });
        let e = "unavailable" === l ? C.default.Td4Sf4 : C.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: oJ.x7,
            children: (0, a.jsx)(oQ, { role: "assistant", children: (0, a.jsx)(ca, { content: A.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(oY.Provider, {
        value: G,
        children: (0, a.jsxs)("ol", {
            ref: N,
            className: oJ.x7,
            children: [
                T.slice(D.start, D.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cm,
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
                        cm,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? ee.get(n.in_reply_to) : void 0,
                            onJumpTo: H,
                            planVersion: Y.get(n.render_id),
                            pickedIdeaIds: Z.get(n.render_id),
                            secretRequestAwaiting: l ? en : void 0,
                            secretRequestStatus: ea.get(n.render_id),
                            settingsFloating: n.id === d,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === J ? c : void 0,
                            onRestoreVersion: f,
                        },
                        e.key,
                    );
                }),
                null != en && W
                    ? (0, a.jsx)(oQ, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(ca, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(Q.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: A.intl.string(C.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                W ? (0, a.jsx)(uj, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cj = n(731084),
    cb = n(823376),
    cy = n(187447);
function ck(e) {
    let { activity: t, id: n } = e,
        l = (0, rQ.j)(),
        { text: r, revealing: s } = uY(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: cy.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(rJ.Ch, {
                ref: o,
                className: cy.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: X()(oy.PT, cy.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: ix.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cw = n(53659);
function cN(e) {
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
        v = (0, cj.xu)({
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
        j = A.intl.string(v),
        b = v === cj.kx["0"],
        [y, k] = i.useState(m ?? j),
        w = (0, rQ.j)();
    (l || (0, cj.E4)(j, y) || (!w && !b)) && y !== j && k(j);
    let N = i.useRef(j);
    (i.useEffect(() => {
        N.current = j;
    }, [j]),
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
        ((I.current = b), !b && (0, cj.E8)(E.current) && k(N.current));
    }, [b]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function n() {
                I.current
                    ? ((M.current = (0, cj.E8)(E.current) ? M.current + 1 : 0), k((0, cj.Ov)(M.current)))
                    : N.current !== E.current
                      ? k(N.current)
                      : S.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, cj.FZ)),
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
        renderPopout: () => (0, a.jsx)(ck, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(eh.D, {
                innerRef: h,
                className: X()(cw.hF, _ && cw.Xd),
                "aria-label": A.intl.string(
                    r
                        ? C.default.qqlUiW
                        : v === C.default.j8tmjK
                          ? C.default.j8tmjK
                          : b
                            ? cj.kx["0"]
                            : C.default["Uuj/gh"],
                ),
                "aria-expanded": T,
                "aria-describedby": T ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": A.intl.string(v),
                onClick: R,
                children: [
                    (0, a.jsx)("span", {
                        className: cw.bl,
                        children: (0, a.jsx)(cb.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: cw.xu,
                        "aria-hidden": !!u || !!b || void 0,
                        children: w
                            ? (0, a.jsx)(ey.o, {
                                  ref: S,
                                  text: y,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: cj.vg,
                                  delay: null,
                                  className: cw.yE,
                              })
                            : (0, a.jsx)(Q.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: cw.yE,
                                  children: y,
                              }),
                    }),
                ],
            }),
    });
}
var cC = n(85428),
    cA = n(885574),
    cS = n(242779),
    cE = n(436804);
function cI(e) {
    return e.toLocaleString();
}
function cM(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cE.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cE.mf,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [cI((0, cS.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(Q.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    cI(n.input_tokens),
                    " in \xb7 ",
                    cI(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cI(n.cache_creation_input_tokens)} cache write \xb7 ${cI(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function c_(e) {
    let { project: t } = e,
        n = (0, cS.wU)(t.compaction),
        l = (0, cS.wU)(t.classifier),
        r = (0, cS.wV)(t.orchestrator, t.codegen),
        i = (0, cS.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: cE.si,
        role: "dialog",
        "aria-label": A.intl.string(C.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cE.Q$,
                children: (0, a.jsxs)("div", {
                    className: cE.mf,
                    children: [
                        (0, a.jsxs)(Q.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [cI((0, cS.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(Q.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cM, { label: A.intl.string(C.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(cM, { label: A.intl.string(C.default.ANCEo3), usage: n }),
            (0, a.jsx)(cM, { label: A.intl.string(C.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cE.mf,
                children: [
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: A.intl.string(C.default["8OUg09"]),
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cS.sj)(i) ? "\u2014" : `${Math.round(100 * (0, cS.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cP(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(c_, { project: t }),
        children: (e) =>
            (0, a.jsx)(eh.D, {
                innerRef: n,
                className: cE.Y$,
                "aria-label": A.intl.string(C.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cA.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cT = n(997421);
function cR(e) {
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
        p = (0, nZ.Zv)(t),
        g = (0, o.bG)([lT.A], () => lT.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, v] = i.useState(null),
        j = i.useCallback(
            (e) =>
                v(
                    (0, cj.E8)(e) || e === A.intl.string(C.default.mKK6wB) || e === A.intl.string(C.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        b = null == f ? null : (0, cj.uc)(f),
        y = null != s,
        k = s ?? (n ? l : void 0),
        w = n || r || y || !0 === m;
    return (0, a.jsxs)("div", {
        className: cT.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cT.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    w || u || p || g
                        ? (0, a.jsx)(cN, {
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
                              onSpokenChange: j,
                          })
                        : null,
                    null != k ? (0, a.jsx)(cC.A, { startedAt: k }) : null,
                ],
            }),
            null != k ? (0, a.jsx)(cC.L, { startedAt: k }) : null,
            null == f || null == b
                ? null
                : (0, a.jsxs)("span", {
                      className: cT.BP,
                      children: [
                          (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": b.aria,
                              children: b.text,
                          }),
                          (0, a.jsx)(cP, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": A.intl.formatToPlainString(C.default["tCo+ZM"], { status: (0, cj.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: cT.XF,
                      children: (0, cj.Db)(h),
                  }),
        ],
    });
}
let cL = ["wheel", "touchstart", "pointerdown", "keydown"];
var c$ = n(698638),
    cD = n(608711);
let cz = [A.intl.string(C.default["9w+Chc"]), A.intl.string(C.default.WAvmdq), A.intl.string(C.default.SKsrzl)];
function cO(e) {
    var t;
    let n,
        l,
        { projectId: r, restoreState: s, onRestoreVersion: u, onImportProject: c } = e,
        d = (0, o.bG)([e0.A], () => e0.A.getMessages(r), [r]),
        m = (0, o.bG)([x.default], () => x.default.getConnState(r), [r]),
        h = (0, o.bG)([e0.A], () => e0.A.getProjectUsage(r), [r]),
        p = (0, o.bG)([e0.A], () => e0.A.getThinkingActivity(r), [r]),
        v = (0, o.bG)([e0.A], () => e0.A.isCompacting(r), [r]),
        j = (0, o.bG)([e0.A], () => e0.A.isSaving(r), [r]),
        b = (0, o.bG)([a4.A], () => a4.A.getModelSettings(r), [r]),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        {
            stickToBottomRef: N,
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
                    for (let e of cL) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of cL) t.removeEventListener(e, u);
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
                r && (N.current ? k.current?.scrollToBottom() : w.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [N]),
        i.useEffect(() => {
            (0, x.ensureConnection)(r);
        }, [r]),
        (0, ia.E1)(r, (0, rQ.j)()));
    let D = nC(r),
        z = (function (e) {
            let t = (0, tu.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, o.bG)([f.A], () => (null == n ? null : (f.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: A.intl.format("channel" === s ? C.default["1cm4fj"] : C.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(r),
        O =
            ((n = (0, o.bG)([a8.A], () => a8.A.getFailure(r))),
            (l = i.useCallback(() => (0, a9.CM)(r), [r])),
            null == n
                ? null
                : {
                      message: A.intl.format(C.default.Up6Ssw, { reason: n }),
                      retry: { text: A.intl.string(C.default["ywA+ET"]), onClick: l },
                  }),
        F = (0, o.bG)([a8.A], () => a8.A.getSetupStartedAt(r), [r]),
        q = i.useCallback(
            (e, t) => {
                (0, x.sendUserMessage)(r, e, t);
            },
            [r],
        ),
        U = i.useCallback(
            (e, t, n) => {
                let l = n ?? q;
                0 === D.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => ns(e.comment)),
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
                                      a.push(`${t + 1}. ${nc(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: D.annotations, metaComment: e, context: D.context }),
                          t,
                      ),
                      ny(r));
            },
            [D, q, r],
        ),
        G = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of rz)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, x.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = rz.get(e);
                            (rz.delete(e), rF(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(r) ||
                e0.A.isThinking(r)) &&
                (0, x.interruptTurn)(r);
        }, [r]),
        B = i.useCallback((e) => l7(r, e.implementation_prompt), [r]),
        [K, V] = (function (e) {
            let [t, n] = i.useState(() => ip(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? ip(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(r),
        H = i.useCallback(() => q(A.intl.string(C.default["t5CN3+"])), [q]),
        W = i.useCallback((e, t, n) => l7(r, e, { clarificationAnswers: t, attachments: n }), [r]),
        X = i.useCallback((e) => (0, a7.X)(r, e), [r]),
        J = i.useCallback((e) => (0, g.vX)(r, e), [r]),
        Y = i.useCallback((e) => rt(r, "chat", Array.from(e), J), [r, J]),
        Z = i.useCallback(() => l7(r, A.intl.string(C.default.Zc7gML)), [r]),
        ee = s?.status === "restoring",
        el = "open" === m && !ee,
        er = d[d.length - 1],
        ea = null != er && "assistant" === er.role && null != er.proposal,
        [ei, es] = i.useState(null),
        eo = er?.clarification != null && er.clarification.id !== ei ? er.clarification : null,
        eu = i.useCallback(() => {
            null != eo && es(eo.id);
        }, [eo]),
        [ec, ed] = i.useState(null),
        em =
            er?.appBuildRequest != null && null == eo && (0, r0.BL)(er) && er.appBuildRequest.id !== ec
                ? er.appBuildRequest
                : null,
        ef = i.useCallback(() => {
            null != em && ed(em.id);
        }, [em]),
        eh = (0, o.bG)([tc.A], () => tc.A.getSettings(r), [r]),
        [ep, eg] = i.useState(null),
        ex =
            null != er &&
            "assistant" === er.role &&
            null != er.settingsRequest &&
            (0, r0.BL)(er) &&
            er.id !== ep &&
            ((t = er.settingsRequest),
            null != eh &&
                (t.keys ?? []).some((e) => {
                    let t = eh.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return eh.secrets.find((t) => t.name === e)?.set !== !0;
                    let n = eh.values[e];
                    return null == n || "" === n;
                }))
                ? er
                : null,
        ev = ex?.settingsRequest ?? null,
        ej = i.useCallback(() => {
            null != ex && eg(ex.id);
        }, [ex]),
        eb = null != ev,
        [ey, ek] = i.useState(null),
        ew = eo?.id ?? em?.id ?? ex?.id;
    i.useLayoutEffect(() => {
        let e = k.current?.getScrollerNode(),
            t = ey?.firstElementChild;
        if (null == ey || null == e || !(0, lg.vq)(t, HTMLElement) || null == ew) return;
        function n() {
            N.current && k.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - ey.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [ey, ew, k, N]);
    let eN = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, o.bG)([e0.A], () => e0.A.hasLoadedHistory(r), [r]),
            historyUnavailable: (0, o.bG)([e0.A], () => e0.A.isHistoryUnavailable(r), [r]),
            connState: m,
        }),
        eC = "loading" === eN && 0 === d.length,
        eA = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < r.length; t++) e = (31 * e + r.charCodeAt(t)) % 0x7fffffff;
            return cz[e % cz.length];
        }, [r]),
        eS = ea ? A.intl.string(C.default.Zc7gML) : "greeting" === eN && 0 === d.length ? eA : null,
        eE = i.useMemo(() => {
            for (let e = d.length - 1; e >= 0; e--) {
                let t = d[e];
                if ("assistant" === t.role && !(0, r0.BL)(t)) return t;
            }
        }, [d]),
        eI = null != eE,
        eM = null != eE ? (0, ir.S)(eE) : void 0,
        e_ = ea && el ? Z : void 0,
        eP = i.useCallback(() => l7(r, A.intl.string(C.default.EMgIuY)), [r]),
        [eT, eL] = i.useState(null),
        [e$, eD] = i.useState(eI);
    (e$ !== eI && (eD(eI), eI || eL(null)),
        i.useEffect(() => {
            if (!eI) return;
            let e = k.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eL(null)
                        : eL(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eI, eE?.steps, _]));
    let ez = _ ? eT : "bottom",
        eO = i.useMemo(() => (null != eE ? (0, r2.b9)(eE.steps) : ""), [eE]),
        eF = i.useMemo(() => (null != eE ? ((0, rZ.lt)(eE.steps) ?? eE.todos) : void 0), [eE]),
        eq = eE?.provisionalTodo,
        eU = null != eE && r1(eE),
        eG = i.useMemo(() => {
            var e;
            return null != eE ? ((e = eE.steps), (0, iw.k)((0, rZ.Jf)(e, !0).tasks)) : void 0;
        }, [eE]);
    return (0, a.jsxs)("section", {
        ref: y,
        "data-conjure-chat": !0,
        className: cD.TE,
        children: [
            el
                ? (0, a.jsx)(rY.A, {
                      title: A.intl.string(C.default.gy7byi),
                      description: A.intl.string(C.default["dkv/WO"]),
                      icons: c$.ir,
                      onDrop: Y,
                  })
                : null,
            (0, a.jsx)(ac, {
                onJumpToActivity: L,
                line: eO,
                placement: eI && "top" === ez ? "top" : null,
                todos: eF,
                todosLive: eU,
                provisionalTodo: eq,
                agents: eG,
            }),
            (0, a.jsxs)("div", {
                className: cD.JX,
                children: [
                    (0, a.jsx)(rJ.Ch, {
                        ref: k,
                        onScroll: $,
                        scrollbarGutter: eC ? "both-edges" : "stable",
                        className: [cD.N$, E ? null : cD.hB, eb ? cD.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(cv, {
                            projectId: r,
                            messages: d,
                            emptyState: eN,
                            floatingSettingsMessageId: ex?.id,
                            liveClarificationId: eo?.id,
                            onPickIdea: el ? B : void 0,
                            onAskForIdeas: el ? H : void 0,
                            draftHasText: K,
                            onApprovePlan: el ? eP : void 0,
                            onRestoreVersion: ee || eI ? void 0 : u,
                            scrollerRef: k,
                            stickToBottomRef: N,
                            pinned: S,
                            onUnpin: I,
                            handleRef: w,
                            onShowsLatestChange: T,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: cD.NJ,
                        children: (0, a.jsx)(cR, {
                            projectId: r,
                            thinking: eI,
                            turnStartedAt: eM,
                            restoring: ee,
                            remixStartedAt: F,
                            recalling: eC,
                            thinkingActivity: p,
                            compacting: v,
                            saving: j,
                            projectUsage: h,
                            connState: m,
                        }),
                    }),
                    null == eo
                        ? null
                        : (0, a.jsx)("div", {
                              ref: ek,
                              className: eb ? `${cD.B5} ${cD.J9}` : cD.B5,
                              children: (0, a.jsx)(
                                  a6,
                                  { projectId: r, clarification: eo, onSubmit: el ? W : void 0, onDismiss: eu },
                                  eo.id,
                              ),
                          }),
                    null == em
                        ? null
                        : (0, a.jsx)("div", {
                              ref: ek,
                              className: cD.B5,
                              children: (0, a.jsx)(
                                  ax,
                                  { projectId: r, request: em, canSend: el, onDismiss: ef },
                                  em.id,
                              ),
                          }),
                    null == ev
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eo && null == em ? ek : void 0,
                              className: cD.B5,
                              children: (0, a.jsx)(il, { projectId: r, request: ev, onDismiss: ej }, ex?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cD.Jx,
                children: [
                    (0, a.jsx)(ac, {
                        onJumpToActivity: L,
                        line: eO,
                        placement: eI && "bottom" === ez ? "bottom" : null,
                        todos: eF,
                        todosLive: eU,
                        provisionalTodo: eq,
                        agents: eG,
                    }),
                    0 === D.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cD.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: A.intl.formatToPlainString(C.default["7b49dS"], {
                                          count: D.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: A.intl.string(C.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(et.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: A.intl.string(C.default["/zOv9+"]),
                                      onClick: () => ny(r),
                                  }),
                              ],
                          }),
                    null == O
                        ? null
                        : (0, a.jsx)("div", {
                              className: cD.qB,
                              children: (0, a.jsx)(tY.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: O.message,
                                  action: O.retry,
                              }),
                          }),
                    null == z
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cD.Db,
                              children: [
                                  (0, a.jsx)(tY.w, { type: "warning", role: "status", message: z.message }),
                                  (0, a.jsx)("div", {
                                      className: cD.jU,
                                      children: (0, a.jsx)(eR.m, {
                                          text: A.intl.string(A.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(te.K, {
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
                    (0, a.jsx)(oV, {
                        projectId: r,
                        canSend: el,
                        running: eI,
                        restoring: ee,
                        onSend: U,
                        hasPendingContext: D.annotations.length > 0,
                        onInterrupt: el ? G : void 0,
                        onUploadFile: J,
                        onImport: c,
                        onApprove: e_,
                        suggestion: eS,
                        questionOpen: null != eo || null != em || null != ev,
                        modelSettings: b,
                        onModelSettingsChange: X,
                        onDraftHasTextChange: V,
                    }),
                ],
            }),
        ],
    });
}
var cF = n(761508),
    cq = n(933294),
    cU = n(207438),
    cG = n(683438);
function cB(e, t) {
    return String(e).padStart(t, "0");
}
function cK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cB(l.getHours(), 2)}:${cB(l.getMinutes(), 2)}:${cB(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cB(l.getMilliseconds(), 3)}` : r;
}
var cV = n(667931);
let cH = {
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
    cW = { running: "Running", ok: "Done", error: "Failed" };
function cX(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function cJ(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cY(e) {
    return cX(Math.round(e));
}
function cQ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cZ(e) {
    return cY(e.count > 1 ? e.totalMs : e.end - e.start);
}
let c0 = ["Arguments", "Result", "Usage", "Details"];
function c1(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function c2(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function c3(e) {
    let t = (0, cV.bM)(e)?.end;
    return null != t ? cX(t) : (0, cV.lp)(e) ? "interrupted" : "still running";
}
function c5(e) {
    return [cK(new Date(e.started_at).toISOString()) ?? "", cQ(e.spans.length), (0, cV.Sj)((0, cV.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function c6(e) {
    let t = (0, cV.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, cV.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += c4(r, "in")),
                (l.output += c4(r, "out")),
                (l.cacheRead += c4(r, "cache_read")),
                (l.cacheWrite += c4(r, "cache_write")),
                (l.costUsd += c4(r, "cost_usd"))));
    }
    let r = cV.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function c4(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var c7 = n(738188),
    c8 = n(430993),
    c9 = n(364840),
    de = n(224640),
    dt = n(20742);
let dn = { collapsed: new Set(), revealed: new Set() };
var dl = n(872892);
let dr = {
    op: dl.Q,
    model: dl.i3,
    tool: dl.dH,
    setup: dl.kc,
    worktree: dl.Qx,
    sandbox: dl.QH,
    build: dl.F1,
    platform: dl.Op,
    other: dl.fv,
};
function da(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cQ(t.calls, "model call"),
                      `${cJ(t.input)} in`,
                      `${cJ(t.output)} out`,
                      `${cJ(t.cacheRead)} cache read`,
                      `${cJ(t.cacheWrite)} cache write`,
                      c2(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: dl.M1,
        children: [
            (0, a.jsx)("div", {
                className: dl.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${dl.DJ} ${dr[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: dl.o1,
                children: cV.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cY(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: dl.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${dl.nf} ${dr[e]}` }),
                                (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: cH[e] }),
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
function di(e) {
    return `conjure-perf-trace-${e}`;
}
function ds(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: dl.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${dl.p0} ${s + o > 85 ? dl.EU : dl.jh}`,
                children: i,
            }),
        ],
    });
}
function du(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? eT._ : lw.a,
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
        id: di(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${dl.$y} ${r ? dl.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: dl.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(eh.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: dl.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: dl.YJ }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: dl.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${dl.nf} ${dr[t.category]}` }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: dl.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: dl.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: dl.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(c7.WarningIcon, { size: "xs", color: "currentColor", className: dl.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(ds, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${dl.M0} ${dl.Nh}`
                    : t.running
                      ? `${dl.M0} ${dl.rF}`
                      : `${dl.M0} ${dr[t.category]}`,
                duration: cZ(t),
            }),
        ],
    });
}
function dc(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(eh.D, {
        tag: "div",
        role: "treeitem",
        id: di(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${dl.$y} ${l ? dl.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: dl.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: dl.ai,
                        children: (0, a.jsx)(eT._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: dl.U9 }),
                    (0, a.jsx)("span", { className: `${dl.nf} ${dl.dL}` }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: dl.MQ,
                        children: cQ(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(ds, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${dl.M0} ${dl.ab} ${dl.dL}`,
                duration: cY(t.totalMs),
            }),
        ],
    });
}
function dd(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(Q.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: dl._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: dl.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${dl.nf} ${dr[t.category]}` }),
                          (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [c1("Start", `+${cY(e.start)}`), c1("Duration", cZ(e))];
                      e.count > 1
                          ? t.push(
                                c1("Calls", String(e.count)),
                                c1("Longest call", cY(e.maxMs)),
                                c1("Spread over", cY(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(c1("Self time", cY(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(c1("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(c1("Notes", l.join(", "))),
                          null != e.span.error && t.push(c1("Error", e.span.error)));
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
                              s = "cost_usd" === t ? c2(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), c1(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...c0.flatMap((e) => {
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
                                            className: dl.xd,
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
                                                            className: dl.vl,
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
function dm(e) {
    let { trace: t } = e,
        n = i.useMemo(() => c6(t), [t]);
    return (0, a.jsx)(da, { stats: n });
}
function df(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, cV.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? dn : (0, cV.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, cV.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cV.x7)(t)), l((n) => (0, cV._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, cV.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cV.IE)(t, e);
                        null != n && l((e) => (0, cV.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cV.IE)(t, e);
                        null != n && l((e) => (0, cV.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, cV.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, cV.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, cV.hB)(t));
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
        f = (0, cV.dj)(t),
        h = i.useMemo(() => (0, cV.nF)(f), [f]),
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
                    null != t && (u(t.key), document.getElementById(di(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(c8.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: dl.z,
                        children: [
                            (0, a.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: c3(t),
                            }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: c5(t),
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
                                      children: `${cQ(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dm, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: dl.KE,
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
                        "aria-activedescendant": null == o ? void 0 : di(o),
                        className: dl.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: g,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dl.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: dl.So,
                                        children: (0, a.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: dl.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                Q.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${dl.io} ${(e / f) * 100 > 85 ? dl.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cY(e),
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
                                          du,
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
                                    : (0, a.jsx)(dc, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(c9.j, { children: (0, a.jsx)(dd, { node: s }) }),
        ],
    });
}
function dh(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([uP.A], () => uP.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(de.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(dt.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(c8.c, {
                      children: (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(df, { trace: i }),
        ],
    });
}
let dp = { running: dl.Vf, ok: dl.mo, error: dl.Sr };
function dg(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${dl.Om} ${dp[t]}`, role: "img", "aria-label": cW[t] });
}
function dx(e, t) {
    (0, tg.openModal)((n) => (0, a.jsx)(dh, { ...n, projectId: e, traceId: t }));
}
function dv(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => dx(t, n.id), [t, n.id]);
    return (0, a.jsxs)(eh.D, {
        className: dl.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: dl.sU,
                children: [
                    (0, a.jsx)(dg, { status: (0, cV.lQ)(n) }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: dl._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: c3(n),
                    }),
                ],
            }),
            (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: c5(n) }),
            null == l
                ? null
                : (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dj(e) {
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
            return (0, a.jsx)(te.K, {
                ...e,
                buttonRef: l,
                icon: tt.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function db(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([uP.A], () => uP.A.getTimingTraces(t), [t]),
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
                    let t = e.map(c6);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cV.BF.map((e) => ({
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
              className: dl.Ie,
              children: [
                  (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(Q.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: "Turns and project operations over 100ms show up here as they run.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: dl.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: dl.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: dl.fH,
                              children: (0, a.jsx)(cG.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dj, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(rJ.Ch, {
                      className: dl.XG,
                      children: [
                          (0, a.jsx)(da, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(Q.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: dl.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(dv, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dy(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dk(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dw(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dN(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dC(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dA(e) {
    return A.intl.string("preview" === e ? C.default["2yLYlG"] : C.default.eiAi57);
}
let dS = ["all", "preview", "stable", "web"];
function dE(e) {
    switch (e.reason) {
        case "local":
            return A.intl.string(C.default.mUeKML);
        case "unconfigured":
            return A.intl.string(C.default.bGefb5);
        case "unauthorized":
            return A.intl.string(C.default.KLx6Bb);
        default:
            return null != e.detail
                ? A.intl.formatToPlainString(C.default.t09Q6q, { detail: e.detail })
                : A.intl.string(C.default["t+tG59"]);
    }
}
function dI(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : A.intl.formatToPlainString(C.default["XO/bN4"], {
              p50: dy(e.memory_p50_bytes ?? 0),
              p999: dy(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dM = {
    db: () => C.default["7l+DFG"],
    db_preview: () => C.default.FAuffi,
    runtime: () => C.default["Gkl+ab"],
    runtime_preview: () => C.default.ynpJzv,
    bot: () => C.default["5/i0cj"],
    bot_preview: () => C.default.m2jsnw,
};
var d_ = n(911608),
    dP = n(177427);
function dT(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dP.KE,
        children: [
            (0, a.jsx)("div", {
                className: dP.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(el.y, { type: el.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: A.intl.string(C.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: A.intl.formatToPlainString(C.default.INVO50, { time: dN(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(et.$, { variant: "secondary", size: "sm", text: A.intl.string(C.default.oKEgiu), onClick: l }),
        ],
    });
}
function dR(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dP.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(Q.E, { variant: "text-xs/semibold", color: "text-muted", className: dP.Gf, children: t }),
            n,
        ],
    });
}
function dL(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dP.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dP.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dP.kS,
                        children: [i, (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dP.kS,
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
function d$(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dP.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dP.x7,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(d_.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dP.dh : void 0,
            }),
        ],
    });
}
function dD(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dL, {
            label: A.intl.string(C.default.SXP7pD),
            value: A.intl.string(C.default.E5hKVi),
            hint: dE(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dL, {
            label: A.intl.string(C.default.SXP7pD),
            value: "\u2014",
            hint: A.intl.string(C.default.AGvoMJ),
        });
    let l = dI(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dL, { label: A.intl.string(C.default["H/X+FI"]), value: dk(n.cpu_ms) }),
            null != l && (0, a.jsx)(dL, { label: A.intl.string(C.default.lmFmMO), value: l }),
        ],
    });
}
function dz(e) {
    let { analytics: t } = e,
        n = A.intl.string(C.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dR, {
            title: n,
            children: (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: dE(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dM[t] : null) ? A.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dR, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(Q.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: A.intl.string(C.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dL,
                          {
                              label: n,
                              value: A.intl.formatToPlainString(C.default["w/2voO"], { cpu: dk(t.cpu_ms) }),
                              hint: dI(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dO = n(678708),
    dF = n(414499),
    dq = n(714800),
    dU = n(81466),
    dG = n(424383),
    dB = n(816943),
    dK = n(268791),
    dV = n(514042),
    dH = n(872351),
    dW = n(708988),
    dX = n(150934),
    dJ = n(417270);
let dY = "Restart Agent",
    dQ = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dZ(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function d0(e, t) {
    return { label: e, value: null != t && "" !== t ? dN(t) : "Unknown", icon: "calendar" };
}
function d1(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function d2(e, t, n, l) {
    let [r, a] = dQ[n.status];
    return { label: e, value: `${d1(n.bytes)} of ${d1(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function d3(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dN(e.at);
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
let d5 = { main: "Main vs Remote", wip: "WIP vs Remote" };
function d6(e) {
    let t = `container ${dZ(e.local)} \xb7 remote ${dZ(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: d5[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dw(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dw(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dw(n)} Ahead, ${dw(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let d4 = ["main", "wip"];
var d7 = n(400154);
let d8 = {
        checkout: dO.FolderIcon,
        edit: aj.PencilIcon,
        remote: dF.h,
        commits: dq.e,
        calendar: dU.CalendarIcon,
        save: dG.L,
        objects: ed.R,
        download: dB.$,
        size: dK.$,
        file: dV.FileIcon,
    },
    d9 = {
        ok: [oh.y, ea.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [c7.WarningIcon, ea.A.colors.ICON_FEEDBACK_WARNING],
        error: [lV.a, ea.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dH.z, ea.A.colors.ICON_MUTED],
        behind: [dW.M, ea.A.colors.ICON_MUTED],
    };
function me(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([uP.A], () => uP.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cU.DK)(t), [t]),
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
                    `Updated ${dN(r)}`,
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
    return (0, a.jsxs)(dR, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: d7.Lj,
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
                    if (!e.running || null != e.localError) return [d3(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            d3(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dw(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = d4.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(d6))
                        : l.push(
                              { label: "Main", value: dZ(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dZ(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dw(e.commits) : "Unknown", icon: "commits" },
                            d0("Oldest Commit", e.oldest),
                            d0("Newest Commit", e.newest),
                            d3(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dw(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dw(t.loose)} loose (${dy(t.looseBytes)}) \xb7 ${dw(t.packed)} packed in ${n} (${dy(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dw(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dw(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                d2(
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
                                  d2("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = d8[r],
                        [o, u] = null != i ? d9[i] : [null, void 0];
                    return (0, a.jsx)(
                        dL,
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
function mt(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([uP.A], () => uP.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cU.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = uP.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cU.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                lH.h.dispatch({
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
            let u = i.useCallback(() => (0, cU.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dY,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eW.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: d7.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: d7.nM,
                children: [
                    (0, a.jsx)(dX.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(et.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dJ.RetryIcon,
                        text: dY,
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
                            return `Restarted \xb7 new instance since ${dN(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dN(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function mn(e, t) {
    return (0, a.jsx)(dL, {
        label: e,
        value: A.intl.formatToPlainString(C.default.yHJxuP, { count: dw((0, cS.aM)(t)) }),
        hint: `${dw(t.input_tokens)} in \xb7 ${dw(t.output_tokens)} out \xb7 ${dw(t.cache_read_input_tokens)} cache read`,
    });
}
function ml(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([uP.A], () => uP.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([uP.A], () => uP.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([uP.A], () => uP.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([uP.A], () => uP.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, cU.Lj)(t), [t]),
        f = i.useCallback(() => (0, cU.Lj)(t, !0), [t]),
        h = (0, o.bG)([uP.A], () => uP.A.getSandboxRestartState(t), [t]),
        p = (0, o.bG)([e0.A], () => e0.A.isThinking(t), [t]),
        g = i.useCallback(() => (0, cU.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        v = n?.agent?.limits ?? null,
        j = n?.agent?.session ?? null,
        b = u?.promptCeiling ?? v?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: d7.Mf,
        children: [
            (0, a.jsx)(dT, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(dR, {
                title: A.intl.string(C.default.JghNal),
                children:
                    null == x
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: A.intl.string(C.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dL, {
                                      label: A.intl.string(C.default["9nqym2"]),
                                      value: dw((0, cS.a7)(x.cost_usd)),
                                      hint: A.intl.formatToPlainString(C.default.NCdUIh, { count: dw(x.turns) }),
                                  }),
                                  mn(A.intl.string(C.default.xtxP0e), x.orchestrator),
                                  mn(A.intl.string(C.default["9Sj3SX"]), x.codegen),
                                  mn(A.intl.string(C.default.ANCEo3), (0, cS.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dL, {
                                          label: A.intl.string(C.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dw(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dR, {
                title: A.intl.string(C.default.dZHPE5),
                children:
                    null == s
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: A.intl.string(C.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  mn(A.intl.string(C.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(dL, {
                                      label: A.intl.string(C.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, cS.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dR, {
                title: A.intl.string(C.default.NbRk9a),
                children: [
                    null != u && null != b
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(d$, {
                                      label: A.intl.string(C.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: b,
                                      formatValue: dw,
                                  }),
                                  (0, a.jsx)(dL, {
                                      label: A.intl.string(C.default.mRbSns),
                                      value: `${dw(u.tokensBefore)} \u{2192} ${dw(u.tokensAfter)}`,
                                      hint: A.intl.formatToPlainString(C.default.Vq3skS, {
                                          count: dw(u.retainedMessages),
                                          time: dN(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != b
                                      ? A.intl.formatToPlainString(C.default.GMLCNv, { ceiling: dw(b) })
                                      : A.intl.string(C.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(dL, {
                            label: A.intl.string(C.default["4BX5KK"]),
                            value: `${dw(c.projected)} / ${dw(c.threshold)}`,
                            critical: !0,
                            hint: A.intl.formatToPlainString(C.default["6ngCax"], { time: dN(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: d7.Lj,
                        children: [
                            (0, a.jsx)(et.$, {
                                variant: "secondary",
                                size: "sm",
                                text: A.intl.string(C.default["1EiJeb"]),
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
                                    if ("idle" === e) return A.intl.string(C.default.wox6Ev);
                                    if ("pending" === e) return A.intl.string(C.default.OcPHQ1);
                                    let t = dN(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return A.intl.formatToPlainString(C.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? C.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? C.default.YZb4hK
                                              : C.default.ZoUSVK;
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
                                            text: A.intl.string(C.default.ZxG2AI),
                                            onClick: f,
                                        }),
                                        (0, a.jsx)(Q.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: A.intl.string(C.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: d7.Lj,
                        children: [
                            (0, a.jsx)(et.$, {
                                variant: "secondary",
                                size: "sm",
                                text: A.intl.string(C.default["5qCjBu"]),
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
                                    if ("idle" === e) return A.intl.string(C.default.mlok8D);
                                    if ("pending" === e) return A.intl.string(C.default["1ugSyK"]);
                                    let t = dN(e.observedAt);
                                    return A.intl.formatToPlainString(
                                        "restarted" === e.outcome ? C.default["76mfqO"] : C.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(mt, { projectId: t }),
                ],
            }),
            (0, a.jsx)(me, { projectId: t }),
            (null != j || n?.analytics != null) &&
                (0, a.jsxs)(dR, {
                    title: A.intl.string(C.default.EsSzCS),
                    children: [
                        null != j &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dL, {
                                        label: A.intl.string(C.default.CLXHAs),
                                        value: dN(j.instance_since),
                                        hint: A.intl.string(C.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dL, { label: A.intl.string(C.default["8V8e1Z"]), value: dw(j.sockets) }),
                                    (0, a.jsx)(dL, {
                                        label: A.intl.string(C.default["4pBzYW"]),
                                        value: j.turn_inflight
                                            ? A.intl.string(C.default.Wv025I)
                                            : A.intl.string(C.default["7/lsFY"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, a.jsx)(dL, {
                                            label: A.intl.string(C.default["3oUYnv"]),
                                            value: dw(j.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(dD, { analytics: n.analytics }),
                    ],
                }),
            null != v &&
                (0, a.jsxs)(dR, {
                    title: A.intl.string(C.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dL, {
                            label: A.intl.string(C.default.IlDBN3),
                            value: dw(v.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dL, {
                            label: A.intl.string(C.default["ZdzKR+"]),
                            value: A.intl.formatToPlainString(C.default.yHJxuP, { count: dw(v.context_window_tokens) }),
                        }),
                        (0, a.jsx)(dL, {
                            label: A.intl.string(C.default.cIhN2W),
                            value: A.intl.formatToPlainString(C.default.yHJxuP, {
                                count: dw(v.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dL, {
                            label: A.intl.string(C.default["+fOn/q"]),
                            value: dw(v.max_user_message_chars),
                        }),
                        (0, a.jsx)(dL, { label: A.intl.string(C.default.kIHga0), value: dw(v.max_build_attempts) }),
                        (0, a.jsx)(dL, { label: A.intl.string(C.default.Iw03yW), value: dw(v.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var mr = n(237528),
    ma = n(629584),
    mi = n(531893);
function ms(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: mi.ut,
              children: (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: A.intl.string(C.default.h1SE6R),
              }),
          });
}
function mo(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: mi.qf,
              children: [
                  (0, a.jsx)(Q.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: A.intl.string(C.default.h1SE6R),
                  }),
                  (0, a.jsx)(Q.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: A.intl.string(C.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: mi.qf,
              children: [
                  (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function mu(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: mi.ps,
              children: (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: A.intl.string(C.default.V7Ri8H),
              }),
          })
        : null;
}
var mc = n(109079);
let md = i.memo(function (e) {
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
        className: mc.vK,
        children: [
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: mc.Mt,
                selectable: !0,
                children: cK(n.ts) ?? n.ts,
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
                className: mc.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: mc.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: mc.Cq, children: (0, a.jsx)(mr.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: mc.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(mr.v, { text: A.intl.string(C.default.TrC9c8), variant: "redLight" }),
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
                                      className: mc.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": A.intl.string(C.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(lw.a, {
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
                                                      "[\u2026]" === u.marker ? C.default.kUhyUv : C.default["N+fphl"],
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
                                          className: mc.dF,
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
function mm(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([cq.A], () => cq.A.getLogs(t), [t]),
        l = (0, o.bG)([cq.A], () => cq.A.getHistoryState(t, "logs")),
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
                dS.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dA(e);
                            case "web":
                                return A.intl.string(C.default.IVzfVV);
                            default:
                                return A.intl.string(C.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: mc.$F,
        children: [
            (0, a.jsxs)("div", {
                className: mc.y4,
                children: [
                    (0, a.jsx)(ma.I, {
                        look: "pill",
                        "aria-label": A.intl.string(C.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: mc.KT,
                        children: (0, a.jsx)(cG.I, {
                            query: u,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: A.intl.string(C.default["m2+37Y"]),
                            "aria-label": A.intl.string(C.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(ms, { state: l }),
            (0, a.jsxs)(rJ.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: mc.sx,
                children: [
                    (0, a.jsx)(mu, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(mo, {
                              state: l,
                              emptyTitle: A.intl.string(C.default.S7qlPG),
                              emptyBody: A.intl.string(C.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: A.intl.string(C.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(md, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function mf(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dR, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: A.intl.string(C.default.umcjif),
                      }),
        })
    );
}
function mh(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dL, {
                      label: A.intl.formatToPlainString(C.default["01ZMS4"], { env: dA(n) }),
                      value: ((t = l.connected), A.intl.string(t ? C.default.Wv025I : C.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dL, {
                      label: A.intl.string(C.default["z1dh+F"]),
                      value: dw(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dN(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dL, { label: A.intl.string(C.default.Iz5GnJ), value: dw(l.guild_count) }),
                  (0, a.jsx)(dL, {
                      label: A.intl.string(C.default["7UqtNv"]),
                      value: dw(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? A.intl.formatToPlainString(C.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dN(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dL, {
                          label: A.intl.string(C.default["x3+JXJ"]),
                          value: dw(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dL, { label: dA(n), value: A.intl.string(C.default.lTHQss) });
}
function mp(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dL, {
        label: dA(t),
        value: A.intl.formatToPlainString(C.default["Xq+wHT"], {
            requests: dw(n.requests),
            failures: dw(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? A.intl.formatToPlainString(C.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dN(n.last_failure.at),
                  })
                : A.intl.formatToPlainString(C.default["7KlGT6"], { time: dN(n.since) }),
    });
}
function mg(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dL, {
                label: A.intl.formatToPlainString(C.default["92gVTm"], { env: dA(t) }),
                value: dw(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dL,
                    {
                        label: A.intl.formatToPlainString(C.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? A.intl.formatToPlainString(C.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? A.intl.formatToPlainString(C.default.wxAWNv, { time: dN(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function mx(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dL, {
        label: dA(t),
        value: A.intl.formatToPlainString(C.default.suAOj9, { calls: dw(n.calls), errors: dw(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function mv(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dR, {
            title: t,
            children: (0, a.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: A.intl.string(C.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dR, {
        title: t,
        children: [
            (0, a.jsx)(dL, {
                label: A.intl.string(C.default.xtD4Zp),
                value: dw(n.requests),
                hint: A.intl.formatToPlainString(C.default["7KlGT6"], { time: dN(n.since) }),
            }),
            (0, a.jsx)(dL, { label: A.intl.string(C.default.gfRhR3), value: dw(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(d$, {
                              label: A.intl.string(C.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dk,
                          }),
                          (0, a.jsx)(dL, {
                              label: A.intl.string(C.default.mSKImM),
                              value: dk(r),
                              hint: A.intl.formatToPlainString(C.default.JqMU05, {
                                  total: dk(n.cpu_ms_total),
                                  wall: dk(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dL, {
                      label: A.intl.string(C.default.LEJ5r3),
                      value: A.intl.string(C.default["2Ekb2b"]),
                      hint: A.intl.string(C.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dL, { label: A.intl.string(C.default.xvmL1D), value: dk(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dL, { label: A.intl.string(C.default["4sQYwH"]), value: dw(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(dL, {
                label: A.intl.string(C.default.bQenOy),
                value: dw(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: A.intl.formatToPlainString(C.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dL, { label: A.intl.string(C.default.xgpn4Y), value: dC(n.build) }),
        ],
    });
}
function mj(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: A.intl.string(C.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: A.intl.string(C.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: A.intl.string(C.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dR, {
        title: A.intl.string(C.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dL, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dL, {
                                  label: A.intl.formatToPlainString(C.default.u7kJJ4, { env: n }),
                                  value: dy(l.r2_bytes),
                                  hint: A.intl.formatToPlainString(
                                      l.r2_truncated ? C.default.lH0oQw : C.default.m9h02S,
                                      { count: dw(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(d$, {
                                      label: A.intl.formatToPlainString(C.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dy,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function mb(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: d7.Mf,
        children: [
            (0, a.jsx)(dT, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(mv, {
                            title: A.intl.string(C.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mv, {
                            title: A.intl.string(C.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mj, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(mf, {
                                title: A.intl.string(C.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mh, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(mf, {
                                title: A.intl.string(C.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mp, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(mf, {
                                title: A.intl.string(C.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mg, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(mf, {
                                title: A.intl.string(C.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mx, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dz, { analytics: t.analytics }),
                        (0, a.jsxs)(dR, {
                            title: A.intl.string(C.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dL, {
                                    label: A.intl.string(C.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dC(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dL, {
                                    label: A.intl.string(C.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dC(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var my = n(592465);
function mk(e) {
    let { projectId: t, onClose: n } = e,
        l = nQ(),
        [r, s] = i.useState(() => (l && nX?.projectId === t ? "trace" : "logs")),
        c = (0, o.bG)([uP.A], () => uP.A.getStatus(t), [t]),
        d = (0, o.bG)([uP.A], () => uP.A.getFetchState(t), [t]),
        m = i.useCallback(() => {
            ((0, cU.R7)(t), (0, cU.DK)(t));
        }, [t]);
    (i.useEffect(() => m(), [m]), i.useEffect(() => (0, x.subscribeDebugBacklog)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == nX || nX.projectId !== e) return null;
            let { traceId: t } = nX;
            return ((nX = null), t);
        })(t);
        return null != e && (dx(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        nJ(t, () => {
            f() && s("trace");
        }));
    let h = i.useCallback(() => {
            (0, tr.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: uP.A.getStatus(t),
                        last_turn_usage: uP.A.getLastTurnUsage(t),
                        last_compaction: uP.A.getLastCompaction(t),
                        last_compaction_decline: uP.A.getLastCompactionDecline(t),
                        timing_traces: uP.A.getTimingTraces(t),
                        logs: cq.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, u.P0)({ text: A.intl.string(C.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        p = A.intl.string(C.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: my.nd,
        "aria-label": p,
        children: [
            (0, a.jsxs)(lU.Ay, {
                "aria-label": p,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(lU.Ay.Icon, {
                            icon: uQ.CopyIcon,
                            tooltip: A.intl.string(C.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(lU.Ay.Icon, { icon: en.P, tooltip: A.intl.string(A.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(lU.Ay.ChannelIcon, { icon: t9.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(lU.Ay.Title, { children: p }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: my.rf,
                children: [
                    (0, a.jsxs)(cF.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": A.intl.string(C.default.RvvWIh),
                        className: my.vR,
                        children: [
                            (0, a.jsx)(cF.V.Item, { id: "logs", children: A.intl.string(C.default["+VRYCm"]) }),
                            (0, a.jsx)(cF.V.Item, { id: "worker", children: A.intl.string(C.default["50D0FZ"]) }),
                            (0, a.jsx)(cF.V.Item, { id: "agent", children: A.intl.string(C.default.UkbTK1) }),
                            l ? (0, a.jsx)(cF.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(mm, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(mb, { status: c, fetchState: d, onRefresh: m })
                          : "trace" === r && l
                            ? (0, a.jsx)(db, { projectId: t })
                            : (0, a.jsx)(ml, { projectId: t, status: c, fetchState: d, onRefresh: m }),
                ],
            }),
        ],
    });
}
var mw = n(365912),
    mN = n(873715);
function mC(e) {
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
let mA = Object.freeze({ x: -1, y: -1 });
function mS(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = mC(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var mE = n(192888);
function mI(e, t) {
    return (0, mE.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(mS, () => ({ status: "failed" }));
}
var mM = n(108308);
let m_ = { x: 25, y: 21 };
function mP(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function mT(e, t, n, l) {
    let r = mP(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function mR(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function mL(e) {
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
function m$(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = nC(u),
        m = (0, nZ.Zv)(u),
        f = (0, tg.useHasAnyModalOpen)(),
        h = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        p = h?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [N, S] = i.useState(null),
        [E, I] = i.useState(!1),
        M = i.useRef(null),
        _ = i.useRef(null),
        P = i.useRef(null),
        [T, R] = i.useState(null),
        [L, $] = i.useState(!1),
        [D, z] = i.useState(null),
        [O, F] = i.useState(null),
        q = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, K] = i.useState(null),
        V = c && !m && !f;
    null == D || (V && D.projectId === u) || z(null);
    let H = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != H) return () => l6(H, "design");
    }, [H]);
    let W = ro(r, V);
    i.useEffect(() => {
        if (!V || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, mN.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? mL(t.response) : null;
                    null == n ? w(!0) : (j(n), nk(u, { url: n.url, title: n.title, viewport: n.viewport }));
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
        if (null == v) {
            X.current = W;
            return;
        }
        if (rs(X.current, W)) return;
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
                    (0, mN.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !en.current) return;
                        let l = mL(e.response);
                        null != l && (j(l), nk(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = mC(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = nx(u)).active &&
                                0 !== r.size &&
                                nv(u, {
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
    }, [V, W, v, d, u, r]),
        i.useEffect(() => {
            if (!V)
                return () => {
                    (S(null), z(null), K(null), j(null));
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
                    mI(n, t).then((t) => {
                        if (((ee.current = !1), en.current)) {
                            if ("picked" !== t.status || mU(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? S(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = no(t.target);
                                (R((t) => (mq(t, e) ? t : e)),
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
            let e = setTimeout(() => F(null), mO);
            return () => clearTimeout(e);
        }, [O]));
    let ea = null == v || null == W || v.viewport.width < 1 ? 1 : W.width / v.viewport.width,
        ei = null != v || k,
        es = i.useMemo(() => v?.elements ?? [], [v]),
        eo = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eo.current = { rect: W, scale: ea };
    }, [W, ea]);
    let eu = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (l6(u, "design"),
                    K(null),
                    (q.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: n, label: no(e) }));
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
                    (Math.abs(e.clientX - D.at.x) > mF || Math.abs(e.clientY - D.at.y) > mF) && (q.current = !0);
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
                        n = null != e && mU(e, W, ea) ? null : e;
                    if (null != n) {
                        let e = no(n);
                        R((t) => (mq(t, e) ? t : e));
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
                null != e && mI(e, mA);
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
                if (null == N || null == W) return;
                let t = ec(e, W);
                eu(
                    N,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? ni
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(N, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [N, W, ec, D, B, eu, er],
        ),
        ex = i.useCallback(() => {
            null != u && (S(null), null != nF(u) ? nU(u) : ny(u));
        }, [u]),
        ev = i.useCallback(() => {
            null != u &&
                (null != D
                    ? er()
                    : B?.confirmingRemove === !0
                      ? K({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? K(null)
                        : ex());
        }, [u, D, B, er, ex]),
        ej = i.useRef(ev),
        eb = i.useRef(u),
        ey = i.useRef(ex);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = u), (ey.current = ex));
    });
    let ek = i.useRef(null);
    i.useEffect(() => {
        if (V)
            return (
                lB.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        lB.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            !(0, lg.vq)(t) ||
                ek.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, mw.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eb.current || null == nF(eb.current)) && ey.current());
        }
    }, [V, s]);
    let ew = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != D || null != B || 0 === es.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == N ? -1 : es.findIndex((e) => e.ref === N.ref);
                    S(es[(n + (t ? 1 : -1) + es.length) % es.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != N &&
                    (e.preventDefault(),
                    eu(N, ni, { x: (W?.left ?? 0) + N.rect.x * ea, y: (W?.top ?? 0) + N.rect.y * ea }));
            },
            [u, D, B, es, N, eu, ev, W, ea],
        ),
        eN = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((ns(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, x.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = no(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${nd}${r}${nm}${nc(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        er(),
                        S(null)));
            },
            [u, D, er],
        ),
        eC = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, g.vX)(u, e)), [u]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != p && ns(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = nx(u)).annotations.find((t) => t.id === e)) &&
                        nw(l, p) &&
                        nv(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, p]),
        eS = i.useCallback(() => {
            if (null != u && null != B && null != p) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = nx(u)).annotations.find((t) => t.id === e)) &&
                        nw(n, p) &&
                        nv(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, B, p]),
        eE = c
            ? b
                ? A.intl.string(C.default["Eb/YV9"])
                : k
                  ? A.intl.string(C.default.FD30bh)
                  : A.intl.formatToPlainString(C.default.dTSqLF, { count: d.length })
            : "",
        eI = V && null != W,
        eM = E && null == B,
        e_ = D?.target ?? ef?.target ?? null,
        eP = D ?? O,
        eT = D ?? (O?.instant === !0 ? null : O),
        eR =
            null != ef && null != W
                ? (function (e, t) {
                      let { left: n, top: l } = mR(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(mT(ef.target, ef.anchor, W, ea), W)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (ef?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ef;
            mI(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ef, r]),
        (0, lG.createPortal)(
            (0, a.jsxs)("div", {
                ref: ek,
                className: mM.Li,
                children: [
                    (0, a.jsx)(eV.A, {
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
                                      className: mM.MT,
                                      style: { left: W.left, top: W.top, width: W.width, height: W.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": A.intl.string(C.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: ep,
                                      onClick: eg,
                                      onKeyDown: ew,
                                  }),
                                  null != N && null == N.marker && null == D && null == B
                                      ? (0, a.jsx)(mG, { box: mP(N, W, ea) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: mM.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: mM.xz,
                                          "data-shown": null != N && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(Q.E, {
                                              variant: "text-xs/medium",
                                              className: mM.Ux,
                                              children: [
                                                  null == T
                                                      ? null
                                                      : (0, a.jsx)("span", { className: mM.Tl, children: T.kind }),
                                                  null == T || "" === T.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: mM.kh,
                                                            children: [" ", T.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: _,
                                      className: mM.Y,
                                      children: eM ? (0, a.jsx)("div", { className: mM.u }) : null,
                                  }),
                                  null == eT
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: mM.aZ,
                                            style: {
                                                transform: `translate3d(${eT.at.x + 20}px, ${eT.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: mM.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(Q.E, {
                                                    variant: "text-xs/medium",
                                                    className: mM.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: mM.Tl,
                                                            children: eT.label.kind,
                                                        }),
                                                        "" === eT.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: mM.kh,
                                                                  children: [" ", eT.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != e_ && null == e_.marker
                                      ? (0, a.jsx)("div", { className: mM.D0, style: mP(e_, W, ea), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = mT(e.target, e.anchor, W, ea),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: mM.xL,
                                              style: { ...mR(n, W), width: 24, height: 24 },
                                              "aria-label": A.intl.formatToPlainString(C.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: nu(e.target),
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
                                              children: (0, a.jsx)(mD, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eP || null == u
                                      ? null
                                      : (0, a.jsx)(ra, {
                                            projectId: u,
                                            at: { x: eP.at.x + 20, y: eP.at.y + 20 },
                                            bounds: W,
                                            kind: eP.label.kind,
                                            value: eP.draft,
                                            canSubmit: null != D && ns(eP.draft),
                                            onChange: (e) => {
                                                null != D && z({ ...D, draft: e });
                                            },
                                            onSubmit: eN,
                                            onDismiss: er,
                                            onUploadFile: eC,
                                            closing: null == D,
                                        }),
                                  null != ef && null != B && null != eR
                                      ? (0, a.jsxs)(mz, {
                                            point: eR,
                                            frame: W,
                                            authorId: ef.authorId,
                                            title: nu(ef.target),
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
                                                          label: A.intl.string(C.default.KCYqWL),
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
                                                          className: mM.aC,
                                                          children: ef.comment,
                                                      }),
                                                nw(ef, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: mM.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(Q.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: mM.nv,
                                                                            children: A.intl.string(C.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: A.intl.string(C.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: A.intl.string(C.default.friIzR),
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
                                                                            text: A.intl.string(C.default.friIzR),
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
                                                                                  disabled: !ns(B.draft),
                                                                                  text: A.intl.string(C.default.iicRP9),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, a.jsx)(et.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: A.intl.string(
                                                                                      C.default["6eW9lg"],
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
function mD(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([eQ.default], () => eQ.default.getUser(t), [t]);
    return (0, a.jsx)(su.eu, {
        src: null == n ? null : sd.Ay.getUserAvatarURL(n),
        size: sc._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function mz(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(m_);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        b((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: y,
            top: k,
            originX: w,
            originY: N,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, l), r)), originX: u.x - s, originY: u.y - o }),
        C = { left: y, top: k, "--custom-conjure-card-origin-x": `${w}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: mM.Nr,
        style: C,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: mM.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: mM.ip, children: (0, a.jsx)(mD, { authorId: d }) }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: mM.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: mM.zI, children: g }),
        ],
    });
}
let mO = 300,
    mF = 2;
function mq(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function mU(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function mG(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: mM.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var mB = n(659723),
    mK = n(697744),
    mV = n(130324);
function mH(e) {
    let t = (0, mK.c)(),
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
function mW(e) {
    let { className: t } = e,
        { Component: n, events: l } = mH(3e4);
    return (0, a.jsxs)("div", {
        className: X()(t, mV.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: mV.ol,
                children: A.intl.string(C.default.AyiQEp),
            }),
        ],
    });
}
var mX = n(251363),
    mJ = n(944142),
    mY = n(532247),
    mQ = n(501628);
function mZ(e) {
    let { progress: t } = e,
        { Component: n } = mH(1500),
        l = nY.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: mQ.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: mQ.PM,
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
function m0(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([mJ.A], () => (s ? mJ.A.getLiveReload(t) : null), [s, t]),
        c = (0, lM.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = (function (e, t) {
            let n = (0, mY.dv)(e),
                [l, r] = i.useState(null),
                [a, s] = i.useState(n);
            a !== n && (s(n), r(null == n ? (0, mY.QP)(e, a) : null));
            let u = (0, o.bG)(
                    [lf.A],
                    () => {
                        let e = lf.A.getFrame(t);
                        return (0, lu.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                c = i.useRef(u),
                d = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((c.current = u), u && (d.current = !0));
                }, [u]),
                i.useEffect(() => {
                    if (null == l) return;
                    function e() {
                        return r(null);
                    }
                    function n(n) {
                        null != n.target && n.target === (0, mX.ow)(null, t) && e();
                    }
                    ((d.current = c.current), document.addEventListener("load", n, !0));
                    let a = window.setTimeout(() => {
                            d.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", n, !0), window.clearTimeout(a), window.clearTimeout(i));
                    };
                }, [l, t]),
                l
            );
        })(d, c),
        f = (0, mY.h_)(d, u?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eV.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, a.jsx)("div", {
                      className: mQ.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(mZ, { progress: f }),
                  })
                : null,
        ],
    });
}
var m1 = n(343030),
    m2 = n(317608),
    m3 = n(338941),
    m5 = n(964404);
let m6 = { width: 1 / 0, height: 1 / 0 };
function m4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m6;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var m7 = n(702083);
function m8(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([l_.A], () => ({
            mobile: l_.A.isBuilderPreviewMobile(),
            landscape: l_.A.isBuilderPreviewLandscape(),
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
        d = n ? m4(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: X()(m7.dw, { [m7.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: X()(m7.R9, { [m7.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var m9 = n(347927);
function fe(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: X()(m9.Bf, l && m9.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: m9.Ux,
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
var ft = n(957272);
function fn(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: s, state: o } = (0, m3.A)({ applicationId: t, surface: n, launch: l }),
        u = (0, lu.VA)(t, n);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = lf.A.getFrame(e);
                    if (null == t || lh.A.getWindowOpen(eX.MLl.ACTIVITY_POPOUT)) return;
                    let n = lf.A.getMainFrame()?.id === e;
                    t.intent === lu.sV.MAIN
                        ? (n || lI.A.promoteFrame(e), lI.A.resetFrameLayoutModes(e))
                        : n && lI.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = lf.A.getFrame(u)) &&
                        ((0, lu.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        m5.Ay.allowConjurePictureInPictureOnNavigateAway
                            ? (e.intent === lu.sV.INLINE && lI.A.promoteFrame(u),
                              lI.A.updateFrameLayoutMode({ frameId: u, layoutMode: lu.y0.PIP }))
                            : e.intent === lu.sV.MAIN && lI.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        o === m3.n.Launched)
    ) {
        let e = (0, a.jsx)(m2.A, { frameId: s.id, level: m1.A.WithinAppContent, className: ft.Z7, overlay: r });
        return (0, lo.Q5)(n) ? (0, a.jsx)(m8, { children: e }) : e;
    }
    return (0, a.jsx)(fl, { state: o });
}
function fl(e) {
    let { state: t } = e;
    switch (t) {
        case m3.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: ft.qs,
                children: (0, a.jsx)(fe, {
                    title: A.intl.string(C.default["9kpdo7"]),
                    body: A.intl.string(C.default.iIA8Nj),
                }),
            });
        case m3.n.NoApplication:
            return (0, a.jsx)(mW, { className: ft.qs });
        case m3.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: ft.qs,
                children: (0, a.jsx)(fe, {
                    title: A.intl.string(C.default["7k4GyN"]),
                    body: A.intl.string(C.default.zdIy3R),
                }),
            });
        case m3.n.Error:
            return (0, a.jsxs)("div", {
                className: ft.qs,
                children: [
                    (0, a.jsx)(ew.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: A.intl.string(C.default.lTPbnG),
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: ft.tj,
                        children: A.intl.string(C.default.e6GiAZ),
                    }),
                ],
            });
        case m3.n.AwaitingLaunch:
        case m3.n.Loading:
            return (0, a.jsx)("div", { className: ft.qs, children: (0, a.jsx)(el.y, {}) });
    }
}
var fr = n(308528),
    fa = n(334738),
    fi = n(688438),
    fs = n(355622),
    fo = n(365971),
    fu = n(703462);
function fc(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: fu.f,
        children: [
            (0, a.jsx)(sX.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function fd() {
    return (0, a.jsx)("div", { className: fu.f, children: (0, a.jsx)(el.y, {}) });
}
function fm(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, ll.YY)(l),
        u = r?.bot?.id ?? null,
        c = (0, o.bG)([ay.A], () => {
            if (null == u) return null;
            let e = ay.A.getDMFromUserId(u);
            return null != e ? ay.A.getChannel(e) : null;
        });
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && fr.A.preload(eX.ME, t);
        }, [t]),
        (n = (0, o.bG)([uV.A], () => uV.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, fo.Xg)();
            return (
                (0, fa.yl)(t, e),
                () => {
                    (0, fa.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        f = null != u && d === u;
    return (i.useEffect(() => {
        if (null == u || null != c) return;
        let e = !1;
        return (
            fr.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || m(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, c]),
    s && null == r)
        ? (0, a.jsx)(fd, {})
        : null == u || f
          ? (0, a.jsx)(fc, { message: A.intl.string(C.default["VP/O8s"]) })
          : null == c
            ? (0, a.jsx)(fd, {})
            : (0, a.jsx)("div", {
                  className: fu.g,
                  children: (0, a.jsx)(fi.A, { channel: c, guild: null, chatInputType: fs.oU.SIDEBAR }, c.id),
              });
}
var ff = n(887909),
    fh = n(570962),
    fp = n(998475);
function fg(e) {
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
    } = (0, ff.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: fp.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: fp.rf,
                children: (0, a.jsx)(fh.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: fp.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: fp.z3,
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
                                className: X()(fp.Qs, c ? fp.cw : null, d ? fp.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: fp.o1,
                      children: s.map((e, t) => (0, a.jsx)(et.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var fx = n(765671),
    fv = n(269094),
    fj = n(714917),
    fb = n(463660),
    fy = n(582063);
let fk = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function fw() {
    (0, u.P0)({ text: A.intl.string(C.default.jj3abP), variant: "critical" });
}
function fN(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = A.intl.string(C.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(es.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(fC, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: fy.m2,
                        children: (0, a.jsx)(eR.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(te.K, {
                                "aria-label": r,
                                icon: e9.SettingsIcon,
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
                accept: fk.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (fk.includes(n.type)
                                ? n.size > p.aI
                                    ? (0, u.P0)({ text: A.intl.string(C.default.T8Spiu), variant: "critical" })
                                    : (0, fb.M$)(t, n).catch(fw)
                                : (0, u.P0)({ text: A.intl.string(C.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function fC(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([fj.A], () => fj.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eo.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": A.intl.string(C.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eu.rX, {
                children: [
                    (0, a.jsx)(eu.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: A.intl.string(C.default.uQpDky),
                        icon: aK.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eu.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: A.intl.string(C.default.AiAz8J),
                        icon: dJ.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, fb.Og)(t).catch(fw));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eu.rX, {
                children: (0, a.jsx)(eu.fP, {
                    id: "conjure-overlay-background-blur",
                    label: A.intl.string(C.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, fb.Y1)(t, !i) || fw();
                    },
                }),
            }),
        ],
    });
}
let fA = "/assets/7cec34541705c795.webp";
function fS(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, m3.A)({ applicationId: t, surface: lu.ZN });
    return (i.useEffect(() => {
        let e = (0, lu.VA)(t, lu.ZN);
        return () => (0, lr.r)(e);
    }, [t]),
    r.state !== m3.n.Launched)
        ? (0, a.jsx)(fl, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(fl, { state: m3.n.Loading })
          : (0, a.jsx)(fE, { lifecycle: r, projectId: n, size: l });
}
function fE(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, fx.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: fy.JH,
        children: [
            (0, a.jsx)(fI, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: fy.dw,
                children: (0, a.jsx)("div", {
                    className: fy.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(fv.A, { frame: t.frame, application: t.application, className: fy.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(fN, { projectId: n }) : null,
        ],
    });
}
function fI(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([fj.A], () => (null != t ? fj.A.getBackground(t) : null)),
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
                (0, fb.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(fA);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        h = null == l || (null != f && f === u) ? fA : f;
    return null != h && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: X()(fy.LO, { [fy.Ty]: n?.blur === !0 }),
              src: h,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  h === f && c(f);
              },
          })
        : null;
}
var fM = n(409478),
    f_ = n(652227);
function fP(e) {
    let {
        applicationId: t,
        previewApplicationId: n,
        surface: l,
        frameLaunchParams: r,
        previewReady: i,
        previewGate: s,
        availability: o,
        activeMode: u,
        widgetApplicationId: c,
        overlayWidgetSize: d = n5,
        projectId: m,
        frameOverlay: f,
    } = e;
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: f_.qs, children: (0, a.jsx)(el.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: f_.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(el.y, {}) : (0, a.jsx)(fg, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: f_.RG,
                      children: [
                          (0, n4.yf)(o, u)
                              ? (0, a.jsx)(fn, { applicationId: t, surface: l, launch: r, frameOverlay: f })
                              : null,
                          "widget" === u && null != c
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: f_.qs,
                                        children: (0, a.jsx)(fe, {
                                            wide: !0,
                                            title: A.intl.string(C.default["08U+YO"]),
                                            body: A.intl.string(C.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(fM.A, { applicationId: c })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(fS, { applicationId: t, projectId: m, size: d })
                              : null,
                          "bot" === u && null != n ? (0, a.jsx)(fm, { previewApplicationId: n }) : null,
                      ],
                  })
            : (0, a.jsx)(mW, { className: f_.qs });
}
var fT = n(175841),
    fR = n(750506),
    fL = n(867193),
    f$ = n(539197),
    fD = n(977020);
function fz(e) {
    let { projectId: t } = e,
        n = (0, f$.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, f$.Ie)(e);
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
        className: fD.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [f$.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: X()(fD.hN, fD.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: X()(fD.hN, fD.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: X()(fD.UE, { [fD.SP]: n.shown, [fD.Vq]: n.pressed, [fD.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var fO = n(417760);
function fF(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, o.bG)([e0.A], () => null != e && e0.A.isThinking(e)),
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
        u = (0, nZ.CU)(n),
        c = "controlling" === t,
        d = A.intl.string(c ? (u ? C.default["VJW/5P"] : C.default["+hD2Iz"]) : C.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(et.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: A.intl.string(C.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: X()(fO.M0, fO.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(cb.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(fT.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "none", className: fO.ID, children: d }),
                  c ? (0, a.jsx)(eV.A, { children: A.intl.string(C.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: fO.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: fO.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: fO.sp,
                      children: [
                          (0, a.jsx)(fT.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(cb.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: fO.f4,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: fO.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(Q.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: fO.Rb,
                                            children: A.intl.string(C.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: fO.lC, children: m }) : null,
              ],
          });
}
function fq(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, nZ.Zv)(null != n && n === l ? t : null),
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
        c = (0, tg.useHasAnyModalOpen)(),
        d = lb(s);
    i.useEffect(() => {
        o &&
            d &&
            null != s &&
            (function (e) {
                if (!lv(e)) return;
                let t = lx(e);
                null != t && (0, lp.sP)(t);
            })(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = ri(r());
            f((t) => (rs(t, e) ? t : e));
            let t = null == h ? null : ri(h);
            (x((e) => (rs(e, t) ? e : t)), null != h && (0, fL.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, fL.C)(0));
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
            let [e] = i.useContext(fR.uY),
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
                      className: fO.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: fO.QF,
                          children: (0, a.jsx)(fF, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, lG.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(eV.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? A.intl.string(C.default.oWcemF)
                                : "handoff" === u
                                  ? A.intl.string(C.default["h+i1r9"])
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
                                  className: fO.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: fO.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(fz, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var fU = n(399503),
    fG = n(853555),
    fB = n(558960),
    fK = n(187645);
let fV = new Map(),
    fH = !1;
function fW() {
    let e = new Map();
    for (let t of new Set([...e0.A.getActivityOrderedProjectIds(), ...(0, nZ.T7)()])) {
        if (!(e0.A.isThinking(t) || (0, nZ.wK)(t))) continue;
        let n = (function (e) {
            let t = B.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, lo.Rc)(t);
            return (0, lu.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...fV]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            fV.delete(t),
            n.unregisterLookup(),
            fB.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        fV.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fK.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    fX(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (fV.set(e, l),
                    (l.unregisterLookup = (0, fG.Ng)(e, () => (0, mX.n5)(n, t))),
                    fB.A.registerFrameTarget(t, n, m1.A.Backstage, void 0));
            })(t, n);
    for (let e of fV.values()) fX(e.element);
}
function fX(e) {
    let t = l_.A.isBuilderPreviewMobile();
    e.classList.toggle(fK.L, !t);
    let n = t ? m4(l_.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var fJ = n(873727),
    fY = n(147248),
    fQ = n(418842),
    fZ = n(363195),
    f0 = n(818023);
let f1 = null;
var f2 = n(602853),
    f3 = n(517461),
    f5 = n(761929),
    f6 = n(487336);
function f4(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, f2.r)(ea.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, f3.V)("ConjureChatSidebarWidth", 460),
        [d, m] = i.useState(u ?? 460),
        f = (0, ii.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? f + s : 0);
    }, [f, t, s, l]);
    let h = (0, f5.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: c,
            orientation: f5.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, a.jsxs)("div", {
        className: f6.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: f6.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: f6.kL, style: { width: f }, children: r }),
        ],
    });
}
var f7 = n(541940);
function f8(e) {
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
        } = e,
        [h, p] = i.useState(null),
        g = (0, lM.A)(l, s),
        x = g?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([fZ.A], () => (0, fJ.x4)(fZ.A.theme)),
            l = (0, o.bG)([fY.A], () => fY.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([o_.Ay], () => ({
                reducedMotion: o_.Ay.useReducedMotion,
                fontScale: (0, fJ.U0)(),
                highContrast: o_.Ay.isHighContrastModeEnabled,
                forcedColors: o_.Ay.useForcedColors,
                underlineLinks: o_.Ay.alwaysShowLinkDecorations,
            })),
            d = nY.hH.useSetting(),
            m = (0, fQ.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            p = i.useRef(0),
            g = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, mX.n5)(e, t);
                if (null == l) return;
                g.current = l;
                let i = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, fJ.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                };
                (0, mE.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, t, s, d, e, r, m, c]),
            v = i.useRef(x);
        i.useLayoutEffect(() => {
            v.current = x;
        });
        let j = i.useCallback(() => {
            f.current ||
                ((f.current = !0),
                queueMicrotask(() => {
                    ((f.current = !1), h.current || v.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (h.current = !1),
                () => {
                    h.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                j();
            }, [l, j]),
            i.useLayoutEffect(() => {
                (x(), j());
            }, [j, x]),
            i.useLayoutEffect(() => {
                let n = (0, mX.n5)(e, t);
                null != n && n !== g.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, mX.n5)(e, t) && ((g.current = null), j());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, j]),
            i.useEffect(() => {
                let e = new MutationObserver(j);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [j]));
    })(h, x),
        i.useEffect(() => {
            if (null != t) return (0, fG.Ng)(t, () => (0, mX.n5)(h, x));
        }, [t, h, x]));
    let v = i.useCallback(() => (0, mX.ow)(h, x), [h, x]),
        j = i.useCallback(() => (f ? (0, mX.ow)(h, x) : h), [f, h, x]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: X()(f7.Mh, c),
                children: [
                    u,
                    (0, a.jsx)(fq, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveTarget: j,
                        frameId: x,
                    }),
                    (0, a.jsx)("div", { ref: p, className: f7.fm, children: d }),
                ],
            }),
            m,
            (0, a.jsx)(m$, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: v,
                toggleRef: n,
            }),
            (0, a.jsx)(rV, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: v }),
        ],
    });
}
function f9(e) {
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
        onCloseDebug: v,
        restoreState: j,
        previewReady: b,
        previewGate: y,
        availability: k,
        activeMode: w,
        widgetApplicationId: N,
        overlayWidgetSize: S,
    } = e;
    (0, fU.k)(t, N);
    let E = s.type === n7.U.MAIN || (0, lo.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([l_.A], () => ({
            mobile: l_.A.isBuilderPreviewMobile(),
            landscape: l_.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? f0.aX.LANDSCAPE : f0.aX.PORTRAIT), (f1 = e));
                else {
                    if (f1 !== e) return;
                    ((l = f0.aX.UNHANDLED), (f1 = null));
                }
                lH.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? l : null);
    let I = i.useRef(null),
        [M, _] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, rW.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, rW.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (E) return ((0, lP.HV)(l), () => (0, lP.HV)(null));
        }, [l, E]),
        i.useEffect(() => {
            null != t &&
                ((0, x.ensureConnection)(t),
                fH ||
                    ((fH = !0),
                    e0.A.addChangeListener(fW),
                    B.Ay.addChangeListener(fW),
                    lf.A.addChangeListener(fW),
                    l_.A.addChangeListener(fW),
                    (0, nZ.W3)(fW),
                    fW()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = I.current;
            if (null == e) return;
            function t() {
                null != e && _(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []),
        i.useLayoutEffect(() => () => rX(0), []));
    let P = Math.max(360, M - 320),
        T = d || E;
    return (0, a.jsx)("div", {
        ref: I,
        className: f7.LB,
        children: (0, a.jsx)(f8, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, n4.yf)(k, w),
            mainClassName: null == c ? void 0 : X()(f7.ez, { [f7.zt]: d }),
            content: (0, a.jsx)(fP, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: k,
                activeMode: w,
                widgetApplicationId: N,
                overlayWidgetSize: S,
                projectId: t,
                frameOverlay: (0, a.jsx)(m0, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && T
                    ? (0, a.jsx)(f4, {
                          open: d,
                          maxWidth: P,
                          onWidthChange: rX,
                          children: (0, a.jsx)("div", {
                              className: f7.cO,
                              children: g
                                  ? (0, a.jsx)(mk, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(mB.A, { projectId: t }),
                                            (0, a.jsx)(lU.Ay, {
                                                "aria-label": A.intl.string(A.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(lU.Ay.Icon, {
                                                                  icon: en.P,
                                                                  tooltip: A.intl.string(C.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(lU.Ay.Title, {
                                                    children: A.intl.string(A.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: f7.cb,
                                                children: (0, a.jsx)(
                                                    cO,
                                                    {
                                                        projectId: t,
                                                        restoreState: j,
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
function he(e) {
    var t;
    let l,
        r,
        s,
        { project: c, projectsLoaded: m, onBack: f, guildId: h } = e,
        [p, g] = i.useState(!0),
        [v, b] = i.useState(!1),
        y = nQ(),
        k = i.useCallback(() => g(!0), []),
        w = i.useCallback(() => {
            (b(!1), g(!0));
        }, []),
        { restoreState: N, handleRestoreVersion: I } = (function (e, t) {
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
                                (0, n1.oB)(c, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    d() &&
                                                    (0, u.P0)({
                                                        text: A.intl.formatToPlainString(C.default.Z4n6LX, {
                                                            title: (0, n0.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, n2.c)(c, r);
                                                null != e && (0, u.P0)({ text: e, variant: "critical" });
                                            }
                                            d() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            d() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", c, e),
                                                (0, u.P0)({
                                                    text: A.intl.string(C.default["PSdo+w"]),
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
            let u = (0, o.bG)([B.Ay], () => (null == r ? null : B.Ay.getIntegrationStatus(r)), [r]),
                { data: c, isLoading: d } = (0, ll.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                p = (0, n4.Qg)({
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
                        await (0, G.U1)(r, e.signal);
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
            let x = (0, lS.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, lS.$)(e, x));
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
                              ...(0, lE.i)({ applicationId: t, application: c ?? null, guildId: x }),
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
        })(c, h),
        O = (0, o.bG)([lT.A], () => (null == _ ? void 0 : lT.A.getPublishStatus(_)?.previewAppChannels), [_]),
        {
            availability: F,
            activeMode: q,
            setMode: U,
            frameSurface: K,
            frameSurfaceOptions: V,
            setFrameSurface: H,
            appChannel: W,
            setAppChannel: J,
            frameLaunchParams: Y,
            widgetApplicationId: Z,
        } = (function (e) {
            var t, n, l;
            let {
                    applicationId: r,
                    previewApplicationId: a,
                    declaredActivity: s,
                    previewSupportedSurfaces: u,
                    installScope: c,
                    ownerAuthorizationRevoked: d,
                    mainCardOnly: m = !1,
                    supportsOverlay: f = !1,
                    previewAppChannels: h = lc,
                } = e,
                [p, g] = i.useState(null),
                [x, v] = i.useState(null),
                [j, b] = i.useState(null),
                [y, k] = i.useState(r);
            y !== r && (k(r), g(null), v(null), b(null));
            let w = null != a && a === r ? a : null,
                N = (0, o.bG)([li.default], () => li.default.getId()),
                { applicationWidgetConfig: C } = (0, ln.A)(N, w ?? void 0),
                A = C?.surfaces,
                S = (0, n4.yZ)({
                    widgetTop: A?.[lt.m.WIDGET_TOP] != null,
                    widgetBottom: A?.[lt.m.WIDGET_BOTTOM] != null,
                    miniProfile: A?.[lt.m.MINI_PROFILE] != null,
                }),
                E = null != w && (m ? S.hasMainCard : S.hasAny),
                { data: I } = (0, ll.YY)(a ?? void 0),
                M = null != a && I?.bot?.id != null,
                { data: _, isLoading: P } = (0, ll.YY)(r ?? void 0),
                T = s || (0, la.X)(_),
                R = null != r && P && null == _,
                L = (0, n4.P5)(u, {
                    legacy: { hasFrame: T, hasProfileWidget: E, hasBotDm: M },
                    widgetResolvable: null != w,
                    botDmResolvable: M,
                }),
                $ = (0, n4.Xm)({ installScope: c, ...L, hasOverlay: f, ownerAuthorizationRevoked: d }),
                D = i.useMemo(() => (0, ls.hR)(u), [u]),
                z = (0, ls.PH)(x, D),
                O =
                    ((t = j),
                    (n = z),
                    (l = h),
                    n !== n7.U.APP_CHANNEL || l.length < 2 ? null : null != t && l.includes(t) ? t : l[0]),
                F = i.useMemo(() => (null == O ? void 0 : { customId: O }), [O]);
            return (
                i.useEffect(() => {
                    if (null != r)
                        for (let e of (0, lo.Mm)(r)) {
                            let t = e.surface.type !== (0, ls.BR)(z),
                                n = (((0, lu.x1)(e) ? e.data.launch.customId : e.launch?.customId) ?? null) !== O;
                            (t || n) && (0, lr.r)(e.id);
                        }
                }, [r, z, O]),
                {
                    availability: $,
                    isResolving: R,
                    activeMode: R ? null : (0, n4.Qs)(p, $),
                    setMode: g,
                    frameSurface: z,
                    frameSurfaceOptions: D,
                    setFrameSurface: v,
                    appChannel: O,
                    setAppChannel: b,
                    frameLaunchParams: F,
                    widgetApplicationId: w,
                }
            );
        })({
            applicationId: c?.preview_application_id ?? null,
            previewApplicationId: c?.preview_application_id ?? null,
            declaredActivity: $,
            previewSupportedSurfaces: c?.preview_supported_surfaces,
            installScope: c?.install_scope ?? null,
            ownerAuthorizationRevoked: P?.owner_authorization_revoked === !0,
            supportsOverlay: c?.preview_supported_surfaces?.includes(n3.q7.OVERLAY) === !0,
            previewAppChannels: O,
        }),
        ee =
            ((t = (0, o.bG)(
                [e0.A],
                () =>
                    null == _
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(e0.A.getMessages(_)),
                [_],
            )),
            null != (l = t?.default_size) &&
            Number.isFinite(l.width) &&
            Number.isFinite(l.height) &&
            l.width > 0 &&
            l.height > 0
                ? l
                : n5);
    ((0, n6.x)(_, (e) => {
        F.modes.includes(e) && U(e);
    }),
        nJ(_, () => {
            (g(!0), b(!0));
        }));
    let en = F.modes.includes("frame"),
        {
            previewTargetOptions: el,
            handleSelectPreviewTarget: er,
            mobilePreview: ea,
            mobilePreviewLabel: es,
            handleToggleMobilePreview: eo,
            landscapePreview: eu,
            rotatePreviewLabel: ec,
            handleRotatePreview: ed,
            previewSurface: em,
            previewFrame: ef,
            isRefreshing: eh,
            handleRefresh: ep,
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
                                          t === n7.U.APP_CHANNEL && n.length > 1
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
                f = (0, o.bG)([l_.A], () => l_.A.isBuilderPreviewMobile()),
                h = A.intl.string(f ? C.default.tKGF0Q : C.default.peqEOY),
                p = i.useCallback(() => (0, lP.GG)(!f), [f]),
                g = (0, o.bG)([l_.A], () => l_.A.isBuilderPreviewLandscape()),
                x = A.intl.string(g ? C.default.tunI2l : C.default.DoNdjA),
                v = i.useCallback(() => (0, lP.Lw)(!g), [g]),
                j = (0, lo.jS)(t),
                b = i.useMemo(() => (0, lo.Op)(j, l), [j, l]),
                y = (0, lM.A)(t?.preview_application_id ?? null, b),
                k = (0, lu.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || lI.A.refreshProxyTicket(y.id);
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
            modes: F.modes,
            frameSurface: K,
            frameSurfaceOptions: V,
            previewAppChannels: O,
            setMode: U,
            setFrameSurface: H,
            setAppChannel: J,
        }),
        eg = p && !v,
        ex = A.intl.string(eg ? C.default.JD6Oit : C.default.xjJAQm),
        ev = i.useCallback(() => {
            if (v) {
                (b(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [v]),
        ej = i.useCallback(() => g(!1), []),
        {
            designFeedbackActive: eb,
            designFeedbackToggleRef: ey,
            agentDrivingPreview: ek,
            designFeedbackLabel: eN,
            handleToggleDesignFeedback: eC,
        } = (function (e, t, n) {
            let { active: l } = nC(e);
            i.useEffect(() => {
                null != e && l && !t && ny(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, nZ.Zv)(e),
                s = A.intl.string(a ? C.default.Sme0T0 : l ? C.default.vn5Rzu : C.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void ny(e);
                        (n(), nj(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(_, en, w),
        [eA] = i.useState(() => j.isPlatformEmbedded && (0, lA.qM)()),
        eS = null != nK(_);
    i.useEffect(() => {
        null != _ && eS && !en && nU(_);
    }, [_, eS, en]);
    let eE = i.useCallback(() => {
            null != _ &&
                (w(),
                (function (e) {
                    if (null != nF(e)) return;
                    let { byProject: t } = nz.getState();
                    nz.setState({ byProject: { ...t, [e]: nO } });
                })(_));
        }, [_, w]),
        eI = i.useCallback(() => {
            null != _ && nU(_);
        }, [_]),
        eM = eS ? A.intl.string(C.default.tuQ5f3) : eN,
        e_ = i.useCallback(() => {
            b((e) => !e && (g(!0), !0));
        }, []),
        eP = i.useCallback(() => b(!1), []),
        eT = i.useCallback(() => {
            var e, t;
            (null != c && ((e = c.id), (t = ef?.id), (0, x.closeConnection)(e), (0, lr.r)(t)), f());
        }, [c, ef?.id, f]),
        eL =
            ((r = i.useCallback(() => {
                null != c && (k(), (0, x.sendUserMessage)(c.id, A.intl.string(C.default.oU20rd)));
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
                                : (0, eW.A)({
                                      title: A.intl.formatToPlainString(C.default["Gm+u1+"], { name: c.name }),
                                      subtitle: A.intl.string(C.default.M7H3sJ),
                                      confirmText: A.intl.string(C.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          k();
                                          try {
                                              await S(t, e, A.intl.string(C.default.Owerd3));
                                          } catch {
                                              (0, u.P0)({
                                                  text: A.intl.string(C.default["Q+l4Hv"]),
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
        e$ = i.useCallback(() => {
            null != c && (0, tW.A)(c, h);
        }, [c, h]),
        eD = (0, n4.JR)(q, D)
            ? { type: "permissions", authorizeProps: z }
            : R && null == P
              ? { type: "checking" }
              : void 0,
        ez = (0, o.bG)([B.Ay], () => null != _ && B.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == c && m) || ez) && (0, d.bG)(eX.BVt.CHANNEL(h, eJ.VV.CONJURE));
    }, [h, c, m, ez]);
    let {
            publishOptions: eO,
            publish: eF,
            publishing: eq,
            confirmation: eU,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...lq,
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
                c = (0, tu.Ay)(e, u),
                d = c?.publishing === !0;
            i.useEffect(() => {
                d && (s(), r(null));
            }, [d, s]);
            let m = d ? null : l;
            return { publishOptions: u, publish: c, publishing: d, confirmation: m };
        })(_, h, R || T),
        eG = (0, lR.L)(eF?.status ?? null),
        eB =
            null == eF
                ? null
                : (0, a.jsx)("div", {
                      className: t6.As,
                      children: (0, a.jsx)(eR.m, {
                          text: eG,
                          asContainer: !0,
                          children: (0, a.jsx)(et.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eq ? ht : null != eU ? t7.U : void 0,
                              disabled: eF.disabled,
                              onClick: () => eF.run("header"),
                              text: eU ?? eF.label,
                          }),
                      }),
                  }),
        eK = null == c ? void 0 : () => (0, td.A)(c.id, { guildId: h, isPreview: !0, publishOptions: eO }),
        eV = (0, a.jsx)(tJ, {
            title: c?.name ?? A.intl.string(C.default.G1WwgK),
            breadcrumb: { title: A.intl.string(C.default.uk6jhJ), onClick: f },
            project: c,
            onOpenProjectSettings: eK,
            actions:
                null == c
                    ? null
                    : (0, a.jsxs)("div", {
                          className: t6.FO,
                          children: [
                              (0, a.jsx)(lC, {
                                  targets: el,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(q, K, W),
                                  onChange: er,
                              }),
                              en
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === q
                                                ? (0, a.jsx)(ei.A.Icon, {
                                                      icon: ea ? hr : hl,
                                                      tooltip: es,
                                                      "aria-label": es,
                                                      selected: ea,
                                                      onClick: eo,
                                                  })
                                                : null,
                                            ea && "frame" === q
                                                ? (0, a.jsx)(ei.A.Icon, {
                                                      icon: ha,
                                                      tooltip: ec,
                                                      "aria-label": ec,
                                                      selected: eu,
                                                      onClick: ed,
                                                  })
                                                : null,
                                            (0, a.jsx)(nH, {
                                                enabled: eA && !eS && !ek,
                                                onLongPress: eE,
                                                children: (0, a.jsx)(ei.A.Icon, {
                                                    ref: ey,
                                                    icon: t8.x,
                                                    iconClassName: t6.D8,
                                                    tooltip: eM,
                                                    "aria-label": eM,
                                                    selected: eS || eb,
                                                    disabled: ek && !eS,
                                                    onClick: eS ? eI : eC,
                                                }),
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === q
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(nr.A, { frame: ef }),
                                            (0, a.jsx)(ly, { frame: ef, controlProjectId: c.id }),
                                        ],
                                    })
                                  : null,
                              (0, a.jsx)("div", { className: t6.YJ }),
                              y
                                  ? (0, a.jsx)(ei.A.Icon, {
                                        icon: t9.BugIcon,
                                        tooltip: A.intl.string(C.default.Mt5k9d),
                                        "aria-label": A.intl.string(C.default.Mt5k9d),
                                        selected: v,
                                        onClick: e_,
                                    })
                                  : null,
                              (0, a.jsx)(ei.A.Icon, {
                                  icon: e9.SettingsIcon,
                                  tooltip: A.intl.string(C.default.I2XSKe),
                                  "aria-label": A.intl.string(C.default.I2XSKe),
                                  onClick: eK,
                              }),
                              (0, a.jsx)(tS, {
                                  projectId: c.id,
                                  projectName: c.name,
                                  guildId: h,
                                  projectGuildId: c.guild_id,
                                  isOwner: (0, B.PV)(c),
                                  canRemix: (0, B.H_)(c),
                                  onRefresh: (0, lu.x1)(ef) ? ep : void 0,
                                  isRefreshing: eh,
                                  onClose: eT,
                                  onExport: eL.onExport,
                                  onImport: eL.onImport,
                                  onRemix: e$,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = c.id),
                                          void (0, tg.openModalLazy)(async () => {
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
                                              restoreDisabled: N?.status === "restoring",
                                              onRestoreVersion: (e, t) => I(e, t, !0),
                                          }),
                                          void (0, tg.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("323079"),
                                                  n.e("437655"),
                                                  n.e("620019"),
                                                  n.e("586467"),
                                                  n.e("231782"),
                                                  n.e("526192"),
                                                  n.e("551087"),
                                              ]).then(n.bind(n, 438834));
                                              return (n) => (0, a.jsx)(t, { ...n, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      F.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== F.profileState
                                          ? Z
                                          : null,
                                  previewProjectId: c.id,
                              }),
                              eg
                                  ? null
                                  : (0, a.jsx)(ei.A.Icon, { icon: hn, tooltip: ex, "aria-label": ex, onClick: ev }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: X()(t6.nj, t5.T),
        children: [
            eL.importInput,
            (0, a.jsx)("main", {
                className: t6.JX,
                children:
                    null == c
                        ? (0, a.jsxs)("div", {
                              className: t6.j5,
                              children: [
                                  eV,
                                  (0, a.jsxs)("div", {
                                      className: t6.sD,
                                      children: [
                                          (0, a.jsx)(ew.D, {
                                              variant: "heading-lg/semibold",
                                              children: A.intl.string(C.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(Q.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: A.intl.string(C.default.fINulo),
                                          }),
                                          (0, a.jsx)(et.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: A.intl.string(C.default["WFJ/vb"]),
                                              onClick: () => (0, G.hF)(h),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tu.bI.Provider, {
                              value: eO,
                              children: (0, a.jsx)(
                                  f9,
                                  {
                                      projectId: c.id,
                                      designFeedbackToggleRef: ey,
                                      applicationId: c.preview_application_id,
                                      previewApplicationId: c.preview_application_id,
                                      surface: em,
                                      frameLaunchParams: Y,
                                      header: eV,
                                      chatOpen: p,
                                      onCloseChat: ej,
                                      chatHeaderAction: eB,
                                      debugOpen: y && v,
                                      onCloseDebug: eP,
                                      onRestoreVersion: I,
                                      onImportProject: (0, B.PV)(c) ? eL.onImport : void 0,
                                      restoreState: N,
                                      previewReady: L,
                                      previewGate: eD,
                                      availability: F,
                                      activeMode: q,
                                      widgetApplicationId: Z,
                                      overlayWidgetSize: ee,
                                  },
                                  c.id,
                              ),
                          }),
            }),
        ],
    });
}
function ht() {
    return (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: t6.Hv, itemClassName: t6.C5 });
}
function hn(e) {
    return (0, a.jsx)(ne.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function hl(e) {
    return (0, a.jsx)(nt.u, { ...e, size: "custom", width: 20, height: 20 });
}
function hr(e) {
    return (0, a.jsx)(nn.k, { ...e, size: "custom", width: 20, height: 20 });
}
function ha(e) {
    return (0, a.jsx)(nl.H, { ...e, size: "custom", width: 20, height: 20 });
}
function hi(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, o.yK)([B.Ay], () => B.Ay.getOwnedProjects()),
        s = (0, o.yK)([m.Ay], () => m.Ay.getSelfMember(n)?.roles ?? [], [n]),
        p = (0, o.bG)(
            [f.A, h.A],
            () => {
                let e = f.A.getGuild(n);
                return null != e && h.A.can(eX.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [g, v] = i.useState(""),
        j = l ?? null,
        [b, y] = i.useState(!1),
        [k, w] = i.useState(null),
        N = (0, V.z9)("VibegrationsScreen"),
        [I, M] = i.useState(null),
        P = (0, c.o)().get(K.f_) === U;
    i.useEffect(() => {
        M(null);
    }, [n, P]);
    let T = i.useMemo(() => (!P && N.some((e) => e.id === n) ? n : U), [N, n, P]),
        R = I ?? T,
        L = R === U ? "user" : "guild",
        $ = R === U ? n : R,
        [z, F] = i.useState(null);
    (i.useEffect(() => {
        (0, G.hF)(n);
    }, [n, s, p]),
        i.useEffect(() => {
            (0, G.dm)(n, j);
        }, [n, j]));
    let q = i.useCallback(
            async (e, t, n) => {
                let l = await (0, G.gA)({ guild_id: t, install_scope: n });
                ((0, x.ensureConnection)(l),
                    (0, x.stageModelSettings)(l, z ?? D),
                    e(l),
                    (0, d.pX)(eX.BVt.CHANNEL(t, eJ.VV.CONJURE, l)),
                    v(""),
                    F(null));
            },
            [z],
        ),
        W = i.useCallback(
            async (e) => {
                let t = (e ?? g).trim(),
                    n = O({ idea: t, installScope: L, submitting: b });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && v(e), y(!0), w(null));
                    try {
                        await q((e) => (0, x.sendUserMessage)(e, t), $, L);
                    } catch (e) {
                        w((0, _.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [q, L, $, g, b],
        ),
        X = i.useCallback(
            async (e) => {
                if (!b) {
                    (y(!0), w(null));
                    try {
                        await q(
                            (t) => {
                                var n;
                                (0, x.sendUserMessage)(
                                    t,
                                    ((n = e.name),
                                    A.intl.formatToPlainString(C.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            $,
                            L,
                        );
                    } catch (e) {
                        w((0, _.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [q, L, $, b],
        ),
        J = i.useCallback(
            async (e, t) => {
                let n = await (0, G.gA)({ guild_id: t, install_scope: "guild" });
                return (
                    (0, x.ensureConnection)(n),
                    (0, x.stageModelSettings)(n, z ?? D),
                    (0, x.sendUserMessage)(n, (0, H.Wl)(e)),
                    n
                );
            },
            [z],
        ),
        Y = i.useCallback(async (e, t, n, l) => {
            if (B.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, G.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new _.DS((0, _.hj)(e), e.status);
            }
            ((0, x.sendUserMessage)(t, l, void 0, { templateId: e.id }),
                (0, d.pX)(eX.BVt.CHANNEL(n, eJ.VV.CONJURE, t)),
                F(null));
        }, []),
        Q = i.useCallback((e) => {
            (0, G.xx)(e).catch(() => void 0);
        }, []),
        Z = i.useCallback(
            (e) => {
                let t = B.Ay.getProject(e)?.guild_id ?? n;
                ((0, d.pX)(eX.BVt.CHANNEL(t, eJ.VV.CONJURE, e)), F(null));
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
                        await S(r, e, A.intl.string(C.default["LUc7/5"])),
                        (0, d.pX)(eX.BVt.CHANNEL(n, eJ.VV.CONJURE, r)),
                        F(null));
                } catch {
                    (null != r && (await (0, G.xx)(r).catch(() => void 0)),
                        (0, u.P0)({ text: A.intl.string(C.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    et(!1);
                }
            },
            [n, z],
        ),
        el = i.useCallback(
            (e) => {
                (0, d.pX)(eX.BVt.CHANNEL(n, eJ.VV.CONJURE, e));
            },
            [n],
        ),
        er = i.useCallback(() => {
            (0, d.pX)(eX.BVt.CHANNEL(n, eJ.VV.CONJURE));
        }, [n]),
        ea = i.useCallback((e) => {
            (v(e), w(null));
        }, []),
        ei = (0, o.bG)(
            [B.Ay],
            () => {
                if (null == j) return null;
                let e = B.Ay.getProject(j);
                return null == e || (0, B.PV)(e) || e.guild_id === n ? e : null;
            },
            [j, n],
        ),
        es = (0, o.bG)([B.Ay], () => B.Ay.hasFetchedGuildProjects(n), [n]);
    return null != j
        ? (0, a.jsx)(he, { project: ei, projectsLoaded: es, onBack: er, guildId: n }, j)
        : (0, a.jsx)(t4, {
              projects: r,
              modelSettings: z,
              onModelSettingsChange: F,
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
              eligibleGuilds: N,
          });
}
