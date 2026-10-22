(n.r(t), n.d(t, { default: () => gF }));
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
    g = n(97893),
    p = n(364522),
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
    S = n(248675),
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
    R = n(639519),
    P = n(371169);
let T = { main: [], subagent: [], thinking: ["low", "medium", "high", "xhigh", "max"] },
    L = { tier: "balanced" },
    $ = { simple: { thinking: "high" }, balanced: { thinking: "high" }, complex: { thinking: "high" } };
var D = n(652215),
    z = n(746080);
async function O(e) {
    let { guildId: t, installScope: n, modelSettings: l, start: r } = e,
        a = await (0, P.gA)({ guild_id: t, install_scope: n });
    return (
        (0, _.ensureConnection)(a),
        (0, _.stageModelSettings)(a, l ?? L),
        await r(a),
        (0, u.pX)(D.BVt.CHANNEL(t, z.VV.CONJURE, a)),
        a
    );
}
var q = n(548118);
let F = "user";
var U = n(941985),
    G = n(16619),
    B = n(506774);
let K = "ConjureProjectsPanelOpen";
var H = n(89310),
    W = n(821609),
    V = n(775602),
    X = n(486020),
    Z = n(687966),
    Y = n(323384),
    J = n(632015),
    Q = n(231483),
    ee = n(430392);
let et = { games: Z.GameControllerIcon, apps: Y.k, profile_widget: J.f, automod: Q.ShieldIcon, chat_bot: ee.RobotIcon };
var en = n(621466);
let el = "data-conjure-carousel-card";
var er = n(19493);
let ea = i.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n } = e,
            l = et[t.category];
        return (0, a.jsxs)("li", {
            className: er.AS,
            [el]: "",
            children: [
                (0, a.jsxs)("div", {
                    className: er.rl,
                    children: [
                        (0, a.jsx)("img", {
                            className: er.my,
                            src: (0, X.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: er.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: er.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: er.xn,
                            children: [
                                (0, a.jsx)("img", { className: er.q_, src: t.image, alt: "" }),
                                (0, a.jsx)("div", {
                                    className: er.o1,
                                    children: (0, a.jsx)(W.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: E.intl.string(S.default["6CQjTy"]),
                                        onClick: () => n(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: er.qr,
                            children: [
                                (0, a.jsx)("div", {
                                    className: er.Yl,
                                    "aria-hidden": !0,
                                    children: (0, a.jsx)(l, { size: "md", color: w.A.colors.ICON_STRONG }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: er.PJ,
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
    ei = i.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: l } = e,
            r = (0, o.bG)([V.Ay], () => V.Ay.useReducedMotion),
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
                    g = document.hasFocus(),
                    p = !0;
                function x() {
                    null != e &&
                        null != n &&
                        ((r = (l = Array.from(n.querySelectorAll(`[${el}]`))).map(
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
                    let e = t && !f && !h && g && p;
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
                    ((h = (0, en.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), b());
                }
                function C() {
                    ((g = !0), b());
                }
                function A() {
                    ((g = !1), b());
                }
                (x(), v(), b());
                let S = new ResizeObserver(() => {
                    (x(), v());
                });
                (S.observe(e), S.observe(n));
                let E = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((p = t.isIntersecting), b());
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
                className: r ? er.vV : er.Dk,
                "aria-label": E.intl.string(S.default.Qc4S39),
                children: (0, a.jsx)("ul", {
                    ref: u,
                    className: er.u4,
                    children: n.map((e) => (0, a.jsx)(ea, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var es = n(858899),
    eo = n(789645),
    eu = n(265872),
    ec = n(980707),
    ed = n(477782),
    em = n(81369),
    ef = n(666476),
    eh = n(989145);
(n(323874), n(14289), n(35956));
var eg = n(77729),
    ep = n(723702),
    ex = n(264572).Buffer;
async function ev(e, t) {
    if (ep.isPlatformEmbedded) {
        let n = ex.from(await e.arrayBuffer());
        if ("function" == typeof eg.A.fileManager.saveWithDialog2) await eg.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await eg.A.fileManager.saveWithDialog(n, t);
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
var ej = n(688954);
class eb extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function ey(e, t) {
    let n = await (0, ej.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new eb(n.status);
    return await n.blob();
}
async function ek(e, t, n) {
    (0, _.ensureConnection)(e);
    let l = await (0, eh.vX)(e, t);
    (0, _.sendUserMessage)(e, n, [l]);
}
function ew(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, ef.Oq)(e.size, t)
        ? null
        : E.intl.formatToPlainString(S.default.ThxcOX, { size: (0, ef.sM)((0, ef.Ju)(t)) });
}
async function eN(e, t) {
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
        r = await ey(e, l);
    await ev(r, l);
}
function eC(e) {
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
var eA = n(950305),
    eS = n(664121);
let eE = [
    { value: "user", icon: eA.UserIcon, nameMessage: S.default.s1TsXl },
    { value: "guild", icon: eS.R, nameMessage: S.default.LlLIJw },
];
function eI(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = eC(i.useCallback((e) => n(e, "user"), [n])),
        s = eC(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eu.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: eu.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(ec.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": E.intl.string(S.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(ed.rX, {
                            label: E.intl.string(S.default.NyVn6T),
                            children: eE
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: E.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        ed.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(W.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: em.H,
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
var eM = n(418811),
    e_ = n(246338),
    eR = n(290076),
    eP = n(442433),
    eT = n(314116),
    eL = n(260498),
    e$ = n(782603),
    eD = n(780338),
    ez = n(782134),
    eO = n(113494),
    eq = n(663417),
    eF = n(70688),
    eU = n(173936),
    eG = n(473935),
    eB = n(625903),
    eK = n(408278),
    eH = n(365199),
    eW = n(7437),
    eV = n(147036),
    eX = n(957565),
    eZ = n(785389),
    eY = n(123917),
    eJ = n(860402);
let eQ = new Set();
var e0 = n(534223),
    e1 = n(442331),
    e2 = n(616334);
n(321073);
var e3 = n(189714),
    e4 = n(733791),
    e5 = n(189213),
    e6 = n(331322),
    e7 = n(192308),
    e8 = n(664619),
    e9 = n(706935);
function te(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = "delete" === l,
        h = f ? (0, e4.fI)(n) : (0, e4.Kd)(n),
        g = f ? null : (0, e4.L4)(n),
        p = (0, e4.Mi)(n),
        x = f
            ? E.intl.formatToPlainString(S.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(S.default.x6FvsZ, { app: n.appName });
    async function j() {
        (c(!0), m(null));
        let e = f ? (0, P.xx)(t.id) : (0, e8.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(E.intl.string(f ? S.default["0XDHob"] : S.default.PJ2Fkn))
            : (f || (0, es.P0)({ text: (0, e4.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(e5.a, {
        ...r,
        role: "alertdialog",
        title: f ? x : (0, e4.WX)((0, e9.tb)(S.default.x6FvsZ, n.appName)),
        subtitle: f ? (0, e4.J)(n) : E.intl.string(S.default["8OKM1N"]),
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
        children: (0, a.jsxs)(e6.B, {
            gap: 12,
            children: [
                h.length > 0 || null != g
                    ? (0, a.jsx)(e9.Ay, {
                          items: h,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: s, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != p ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: p }) : null,
            ],
        }),
    });
}
function tt(e) {
    (0, e7.openModal)((t) => (0, a.jsx)(te, { ...t, ...e }));
}
var tn = n(587895);
function tl(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, u] = i.useState(null),
        c = (0, o.bG)([tn.A], () => tn.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        d = E.intl.formatToPlainString(S.default.m8KWic, { app: c });
    async function m() {
        (r(!0), u(null));
        let e = await (0, e8.R_)(t.id);
        (r(!1), e)
            ? ((0, es.P0)({ text: E.intl.formatToPlainString(S.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : u(E.intl.string(S.default["rE/0SD"]));
    }
    return (0, a.jsx)(e5.a, {
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
var tr = n(552821);
let ta = [];
function ti(e) {
    (0, es.P0)({ text: e, variant: "critical" });
}
function ts(e) {
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
            onRefresh: g,
            isRefreshing: p = !1,
            onTogglePreviewPaused: x,
            previewPaused: v = !1,
            previewPauseDisabled: j = !1,
            onClose: b,
            refreshApplicationId: y,
            previewProjectId: k,
            onCloseMenu: w,
        } = e,
        N = (0, e3.iI)(t),
        C = i.useContext(e0.bI),
        { pending: A, refresh: I } = (0, eW.A)(y ?? null),
        { pending: M, connect: _ } = (function (e, t) {
            let [n, l] = i.useState(eQ),
                r = i.useRef(eQ),
                a = i.useCallback((e) => {
                    ((r.current = (0, eZ.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, eZ.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, eJ.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, eY.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, eZ.rq)(l.error)
                                          ? E.intl.string(S.default["jCQ/1B"])
                                          : E.intl.string(S.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(k ?? null, ti),
        R = (0, o.bG)([e1.A], () => (null == k ? ta : e1.A.getDeclaredConnections(k))),
        T = i.useMemo(() => (0, eZ.Xl)(R), [R]),
        L = (0, e4.Bs)(t),
        $ = (0, e4.CU)(t) && s,
        D = (0, o.bG)(
            [eL.Ay],
            () => {
                let e = eL.Ay.getProject(t);
                return null != e && (0, eL.jf)(e);
            },
            [t],
        ),
        O = (function (e) {
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
        q = i.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        F = null != m && u,
        U = s && null != d,
        G = F || null != c || U || null != f || null != h,
        B = eX.p5 && null != l,
        K = eX.p5,
        H = N ? e$.BellIcon : eD.BellSlashIcon,
        W = v ? ez.PlayIcon : eO.PauseIcon;
    return (0, a.jsxs)(ec.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: w,
        onSelect: w,
        children: [
            null != g || null != x || null != b
                ? (0, a.jsxs)(ed.rX, {
                      children: [
                          null != g
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "refresh",
                                    icon: eq.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: eq.RefreshIcon },
                                    label: E.intl.string(S.default["p4B/7M"]),
                                    disabled: p,
                                    action: g,
                                })
                              : null,
                          null != x
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: W,
                                    leadingAccessory: { type: "icon", icon: W },
                                    label: E.intl.string(v ? S.default.ZKd2Cw : S.default.VHxerm),
                                    disabled: j,
                                    action: x,
                                })
                              : null,
                          null != b
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "close",
                                    icon: eF.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: eF.DoorExitIcon },
                                    label: E.intl.string(S.default["/TlGcK"]),
                                    action: b,
                                })
                              : null,
                      ],
                  })
                : null,
            O.length > 0
                ? (0, a.jsx)(ed.rX, {
                      children: O.map((e) =>
                          (0, a.jsx)(
                              ed.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void I();
                                      let t = null == e.connectionType ? null : q.get(e.connectionType);
                                      null != t && _(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(ed.rX, {
                children: (0, a.jsx)(ed.Dr, {
                    id: "mute",
                    label: E.intl.string(N ? S.default.s9rCuH : S.default["a+i/As"]),
                    icon: H,
                    leadingAccessory: { type: "icon", icon: H },
                    action: () => (0, e3.$L)(t, !N),
                }),
            }),
            G
                ? (0, a.jsxs)(ed.rX, {
                      children: [
                          F
                              ? (0, a.jsx)(ed.Dr, { id: "remix", label: E.intl.string(S.default.XWgAfc), action: m })
                              : null,
                          null != c
                              ? (0, a.jsx)(ed.Dr, { id: "export", label: E.intl.string(S.default.WsEEP7), action: c })
                              : null,
                          U
                              ? (0, a.jsx)(ed.Dr, { id: "import", label: E.intl.string(S.default.rWGY3e), action: d })
                              : null,
                          null != f
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(S.default.yOIql5),
                                    action: f,
                                })
                              : null,
                          null != h
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "history",
                                    label: E.intl.string(S.default["3hIVou"]),
                                    action: h,
                                })
                              : null,
                      ],
                  })
                : null,
            K
                ? (0, a.jsxs)(ed.rX, {
                      children: [
                          B
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: eU.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: eU.LinkIcon },
                                    action: () =>
                                        (0, eX.C)((0, eV.n)(l, z.VV.CONJURE, t), () =>
                                            (0, es.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(ed.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(S.default["nm/zuU"]),
                              icon: eG.L,
                              leadingAccessory: { type: "icon", icon: eG.L },
                              action: () =>
                                  (0, eX.C)(t, () =>
                                      (0, es.P0)({ text: E.intl.string(S.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || D || L?.canRemoveBot === !0
                ? (0, a.jsxs)(ed.rX, {
                      children: [
                          s || D
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "settings",
                                    label: E.intl.string(S.default.FzfmQ8),
                                    icon: eB.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: eB.SettingsIcon },
                                    action: () =>
                                        (0, e2.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: C,
                                        }),
                                })
                              : null,
                          L?.canRemoveBot === !0
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(S.default["3gKG2j"], { server: L.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = eL.Ay.getProject(t);
                                        null != e && tt({ project: e, target: L, action: "remove" });
                                    },
                                })
                              : null,
                          $
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(S.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = eL.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, e7.openModal)((t) => (0, a.jsx)(tl, { ...t, ...e })));
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(ed.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = eL.Ay.getProject(t);
                                        if (null != e && null != L) tt({ project: e, target: L, action: "delete" });
                                        else
                                            (0, eT.A)({
                                                title: E.intl.formatToPlainString(S.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(S.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, P.K)(t, () =>
                                                        (0, es.P0)({
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
function to(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eu.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(ts, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: tr.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t["UKOtz+"]),
                              children: (0, a.jsx)(eK.K, {
                                  icon: eH.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(y.A.Icon, {
                              icon: eH.MoreHorizontalIcon,
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
var tu = n(95264);
function tc(e, t) {
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
                    (0, es.P0)({ text: E.intl.formatToPlainString(S.default.aN2JdD, { name: l }) }),
                    eN(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[conjure] project export failed", n, e),
                                (0, es.P0)({
                                    text:
                                        409 === (t = e instanceof eb ? e.status : null)
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
                onImport: (s = eC(
                    i.useCallback(
                        (e) => {
                            let r = ew(e);
                            null != r
                                ? (0, es.P0)({ text: r, variant: "critical" })
                                : (0, eT.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: l }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, u.pX)(D.BVt.CHANNEL(t, z.VV.CONJURE, n));
                                          try {
                                              await ek(n, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, es.P0)({
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
        isOwner: (0, eL.PV)(e),
        canRemix: (0, eL.H_)(e),
        onRemix: () => (0, tu.A)(e, t),
        onExport: o,
    };
}
function td(e) {
    let { project: t, guildId: n } = e,
        l = tc(t, n);
    return (0, a.jsx)(ts, { ...l, onCloseMenu: eP.Z_ });
}
function tm(e) {
    let { project: t, guildId: n } = e,
        l = tc(t, n);
    return (0, a.jsx)(to, { ...l, trigger: "iconButton" });
}
var tf = n(638693);
class th extends Error {}
function tg(e) {
    let { guildId: t, modelSettings: n, onClose: l } = e,
        r = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, e_.Ot)(e, t)
                    ? (0, u.pX)(D.BVt.CHANNEL(t, z.VV.CONJURE, e.id))
                    : (0, eM.A)(e);
            },
            [t],
        ),
        s = i.useCallback((e) => (0, a.jsx)(tm, { project: e, guildId: t }), [t]),
        o = i.useCallback(
            (e, n) => {
                (0, eP.jA)(e, () => (0, a.jsx)(td, { project: n, guildId: t }));
            },
            [t],
        ),
        [c, d] = i.useState(!1),
        m = i.useCallback(
            async (e, l) => {
                let r = ew(e);
                if (null != r) return void (0, es.P0)({ text: r, variant: "critical" });
                d(!0);
                try {
                    await O({
                        guildId: t,
                        installScope: l,
                        modelSettings: n,
                        start: async (t) => {
                            try {
                                await ek(t, e, E.intl.string(S.default["LUc7/5"]));
                            } catch {
                                throw (await (0, P.xx)(t).catch(() => void 0), new th());
                            }
                        },
                    });
                } catch (e) {
                    (0, es.P0)({
                        text: e instanceof th ? E.intl.string(S.default["Q+l4Hv"]) : (0, R.mG)(e),
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
        className: tf.pz,
        "aria-label": f,
        children: [
            (0, a.jsxs)("div", {
                className: tf.wx,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-strong", children: f }),
                    (0, a.jsxs)("div", {
                        className: tf.$s,
                        children: [
                            (0, a.jsx)(eI, { importing: c, onImport: m }),
                            (0, a.jsx)(y.A.Icon, { icon: eo.P, tooltip: h, "aria-label": h, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(p.Ip, {
                className: tf.XG,
                children: (0, a.jsx)(eR.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: s,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var tp = n(559106),
    tx = n(663341),
    tv = n(783977),
    tj = n(559647),
    tb = n(531685),
    ty = n(477262),
    tk = n(432017);
let tw = [
    {
        id: "add-images-videos",
        label: S.default["51+9lc"],
        icon: ty.s,
        accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
    },
    {
        id: "add-sounds",
        label: S.default["10ljr2"],
        icon: tk.T,
        accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
    },
    { id: "add-other-files", label: S.default.aotDee, icon: em.H, accept: "" },
];
var tN = n(289873),
    tC = n(285796),
    tA = n(73153),
    tS = n(839214);
let tE = [],
    tI = 1,
    tM = (0, tS.D)(() => ({ draftsByProject: {} }));
function t_(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? tE;
}
function tR(e, t) {
    return t_(tM.getState(), e, t);
}
function tP(e, t, n) {
    let { draftsByProject: l } = tM.getState();
    tM.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function tT(e, t, n, l) {
    let r = tR(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (tP(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function tL(e, t) {
    (0, eh.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function t$(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && tL(e, t.ref.id));
}
function tD(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = tM.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? tE) n ? t$(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    tM.setState({ draftsByProject: i });
}
function tz(e) {
    return E.intl.formatToPlainString(S.default.JZ59Bo, { size: (0, ef.sM)((0, ef.Ju)(e)) });
}
function tO(e, t) {
    let n = tR(e, t);
    if (0 !== n.length) {
        for (let t of n) t$(e, t);
        tP(e, t, tE);
    }
}
function tq(e, t) {
    let n = tR(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (tP(e, t, tE), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function tF(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = tR(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? tq(e, "chat") : [];
    (0, _.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(tA.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(tM.getState().draftsByProject)) tD(e, { deleteFromWorker: !0 });
}),
    tA.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        tD(t, { deleteFromWorker: !1 });
    }));
var tU = n(922329);
async function tG(e) {
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
var tB = n(153171);
let tK = ef.lN;
function tH(e, t, n, l) {
    let r = tR(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: tI++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (tP(e, t, [
            ...tR(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void tT(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    tT(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  tT(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default.E7dS5n) }),
                              ef.o2 - 3e5,
                          )
                        : tL(e, a.id);
                },
                (l) => {
                    (console.error("[conjure] attachment upload failed", l),
                        tT(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= tK)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: E.intl.formatToPlainString(S.default.Q0aCVZ, { count: tK }),
                    },
                };
            if (!(0, ef.Oq)(e.size, t))
                return "image/png" === t && e.size <= ef.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await tG(e).catch(() => null);
                              return null != n && (0, ef.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: tz(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: tz(t) } };
            let a = ef.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function tW(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = tM.useState((e) => t_(e, t, n)),
        a = i.useCallback((e) => tH(t, n, e, l), [t, n, l]),
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
                null != (r = (l = tR(t, n)).find((t) => t.localId === e)) &&
                    (t$(t, r),
                    tP(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => tq(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function tV(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(tU.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(tN.y, { type: tN.t.SPINNING_CIRCLE_SIMPLE, className: tB.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: tB.o1,
                onClick: () => n(t.localId),
                "aria-label": E.intl.string(S.default.Slam9g),
                children: (0, a.jsx)(tC.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tX = n(900797),
    tZ = n(320448),
    tY = n(344587),
    tJ = n(534554),
    tQ = n(392208),
    t0 = n(822313),
    t1 = n(837984),
    t2 = n(359589),
    t3 = n(254575);
function t4(e) {
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
function t5(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = t4(d),
        g = tQ.P.indexOf(t.tier),
        p = d ? tX.t : tZ._,
        x = tQ.P.map(tJ.D0),
        j = (0, tJ.Tc)(t.tier),
        { text: b, phase: y } = (0, tY.Q)(j);
    return (0, a.jsx)("div", {
        className: t3.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: h()(t3.t$, { [t3.Zr]: u && c, [t3.GF]: !u }),
            role: "dialog",
            "aria-label": E.intl.string(S.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: h()(t3.Nr, t3.uO, { [t3.Zr]: d && f.entered, [t3.GF]: !d }),
                          children: (0, a.jsx)(t2.b, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${t3.Nr} ${t3.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: t3.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: t3.y6,
                                    "aria-expanded": d,
                                    "aria-label": E.intl.string((0, tJ.FC)(l)),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: E.intl.string(S.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(p, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: t3.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: h()(t3.Z, { [t3.xQ]: "exit" === y, [t3.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: t3.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: t3.Nb,
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
                                (0, a.jsx)(t1.A, {
                                    activeIndex: g,
                                    stops: x,
                                    ariaLabel: E.intl.string(S.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = tQ.P[e];
                                        null != n && n !== t.tier && s((0, tJ.CM)((0, tJ.j6)(t, n)));
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
function t6(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, t0.A)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: p } = t4(f);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: eu.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(t5, {
                settings: d,
                tiers: n ?? null,
                choices: l,
                disabled: r,
                onChange: m,
                placement: t,
                open: f,
                entered: p,
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
                    className: o ?? t3.hZ,
                    "aria-label": E.intl.string(S.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(tv.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var t7 = n(847374),
    t8 = n(122485);
function t9(e) {
    let { target: t, guilds: n, onChange: l, disabled: r, className: s } = e,
        [o, u] = i.useState(!1),
        c = i.useRef(null),
        d = i.useCallback(() => u(!1), []);
    o && r && u(!1);
    let m = E.intl.string(S.default.NyVn6T),
        f = E.intl.string(S.default.UPLaGM),
        h = t === F ? null : (n.find((e) => e.id === t) ?? null),
        g = h?.name ?? f;
    return (0, a.jsx)(eu.Y, {
        targetElementRef: c,
        shouldShow: o,
        onRequestClose: d,
        position: "top",
        align: "left",
        animation: eu.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(ec.W, {
                navId: "conjure-home-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsxs)(ed.rX, {
                    label: m,
                    children: [
                        (0, a.jsx)(ed.iD, {
                            id: "conjure-home-target-user",
                            group: "conjure-home-target",
                            label: f,
                            checked: t === F,
                            action: () => {
                                (l(F), d());
                            },
                        }),
                        n.map((e) =>
                            (0, a.jsx)(
                                ed.iD,
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
            return (0, a.jsx)(tp.vN, {
                children: (0, a.jsxs)("button", {
                    ...l,
                    ref: c,
                    type: "button",
                    className: s,
                    disabled: r,
                    "aria-label": E.intl.formatToPlainString(S.default.Lyx6pW, { name: g }),
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: () => u((e) => !e),
                    children: [
                        (0, a.jsx)("span", {
                            className: t8.R,
                            "aria-hidden": !0,
                            children:
                                null != h
                                    ? (0, a.jsx)(q.Ay, { guild: h, size: q.Ay.Sizes.MINI, active: !0 })
                                    : (0, a.jsx)(eA.UserIcon, { size: "refresh_sm", color: "currentColor" }),
                        }),
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            lineClamp: 1,
                            className: t8.P,
                            children: g,
                        }),
                        (0, a.jsx)(t7.a, { size: "refresh_sm", color: "currentColor", "aria-hidden": !0 }),
                    ],
                }),
            });
        },
    });
}
var ne = n(200160),
    nt = n(465410);
function nn(e) {
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
        className: ne.RC,
        children: [t[r].slice(0, s), l ? (0, a.jsx)("span", { className: ne.OW }) : null],
    });
}
function nl(e) {
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
    return (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", className: ne.RC, children: t[l] });
}
function nr(e) {
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
        l = (0, o.bG)([V.Ay], () => V.Ay.useReducedMotion),
        r = (0, o.bG)([tb.A], () => tb.A.isFocused()),
        s = t || !r;
    return (0, a.jsx)("div", {
        className: ne.qf,
        "aria-hidden": !0,
        children: l
            ? (0, a.jsx)(nl, { prompts: n, paused: s })
            : (0, a.jsx)(nn, { prompts: n, paused: s, showCaret: !t }),
    });
}
function na(e) {
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
            onModelSettingsChange: g,
            attachments: p,
        } = e,
        [x, j] = i.useState(!1),
        b = i.useRef(null),
        y = i.useId(),
        k = "" !== t,
        w = E.intl.string(E.t.d56gCa),
        N = i.useRef(null),
        C = i.useRef(null),
        { addFiles: A, pasteFiles: I, removeAttachment: M } = p,
        _ = i.useCallback((e) => {
            let t = N.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        R = i.useCallback(
            (e) => {
                (A(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [A],
        ),
        P = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || r());
            },
            [o, r],
        );
    return (0, a.jsxs)("div", {
        className: ne.kL,
        children: [
            (0, a.jsxs)("div", {
                ref: b,
                className: h()(ne.yk, { [ne.Sl]: null != u }),
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: ne.Ox,
                        children: [
                            (0, a.jsx)(tp.vN, {
                                ringTarget: b,
                                ringClassName: ne.Rg,
                                children: (0, a.jsx)("textarea", {
                                    ref: n,
                                    className: h()(ne.hF, nt.dv),
                                    rows: 3,
                                    value: t,
                                    "aria-label": E.intl.string(S.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? y : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: P,
                                    onPaste: (e) => I(e),
                                    onFocus: () => j(!0),
                                    onBlur: () => j(!1),
                                }),
                            }),
                            k ? null : (0, a.jsx)(nr, { boxFocused: x }),
                        ],
                    }),
                    p.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: ne.ZO,
                              children: p.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, a.jsx)(tV, { draft: t, onRemove: M }, t.localId);
                              }),
                          })
                        : null,
                    (0, a.jsxs)("div", {
                        className: ne.KE,
                        children: [
                            (0, a.jsx)("input", {
                                ref: N,
                                type: "file",
                                multiple: !0,
                                onChange: R,
                                className: ne.Fg,
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                            (0, a.jsx)(eu.Y, {
                                targetElementRef: C,
                                position: "top",
                                align: "left",
                                animation: eu.Y.Animation.NONE,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(ec.W, {
                                        "data-menu-migrated": !0,
                                        navId: "conjure-home-attach",
                                        "aria-label": w,
                                        onClose: t,
                                        onSelect: t,
                                        children: (0, a.jsx)(ed.rX, {
                                            children: tw.map((e) =>
                                                (0, a.jsx)(
                                                    ed.Dr,
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
                                        className: ne.gb,
                                        disabled: s,
                                        "aria-label": w,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": n,
                                        children: (0, a.jsx)(tx.PlusLargeIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                            className: ne.Xv,
                                        }),
                                    });
                                },
                            }),
                            (0, a.jsx)(t9, {
                                target: c,
                                guilds: d,
                                onChange: m,
                                disabled: s,
                                className: h()(ne.gb, ne.qU),
                            }),
                            (0, a.jsxs)("div", {
                                className: ne.Rc,
                                children: [
                                    (0, a.jsx)(t6, {
                                        settings: f ?? L,
                                        tiers: $,
                                        choices: T,
                                        disabled: s,
                                        onChange: g,
                                        className: ne.gb,
                                        icon: (0, a.jsx)(tv.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(W.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: tj.SendMessageIcon,
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
var ni = n(628284),
    ns = n(369606),
    no = n(926268),
    nu = n(406810),
    nc = n(707554),
    nd = n(651346);
function nm(e) {
    let { className: t } = e;
    return (0, a.jsx)("span", { className: h()(nd.n8, t) });
}
let nf = [
        {
            id: "apps",
            title: S.default["bvcT/Q"],
            description: S.default.ArcJqa,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nd.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nd.My,
                            children: [
                                (0, a.jsx)("span", { className: nd._w }),
                                (0, a.jsx)("span", { className: nd._w }),
                                (0, a.jsx)("span", { className: nd._w }),
                            ],
                        }),
                        (0, a.jsx)(nm, { className: nd.Lm }),
                        (0, a.jsx)("div", {
                            className: nd.Oh,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nd.ZW,
                                        children: [
                                            (0, a.jsx)("span", { className: nd.NU }),
                                            0 === e
                                                ? (0, a.jsx)(ni.y, {
                                                      size: "xs",
                                                      color: w.A.colors.ICON_BRAND,
                                                      className: nd._6,
                                                  })
                                                : null,
                                            (0, a.jsx)(nm, { className: nd.Eg }),
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
                    className: h()(nd.x, nd.jG),
                    children: [
                        (0, a.jsx)("span", { className: h()(nd.gg, nd.K1) }),
                        (0, a.jsx)("span", { className: h()(nd.gg, nd.W2) }),
                        (0, a.jsx)("span", { className: h()(nd.Fs, nd.A$) }),
                        (0, a.jsx)("span", { className: h()(nd.Fs, nd.eP) }),
                        (0, a.jsx)("span", { className: h()(nd.Fs, nd.kc) }),
                        (0, a.jsx)("span", { className: h()(nd.Fs, nd.OE) }),
                        (0, a.jsx)("span", { className: nd.OC }),
                        (0, a.jsxs)("div", {
                            className: nd.si,
                            children: [
                                (0, a.jsx)(ns.TrophyIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/bold",
                                    color: "none",
                                    className: nd.o9,
                                    children: 128,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nd.KQ,
                            children: [
                                (0, a.jsx)(no.HeartIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(no.HeartIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(no.HeartIcon, { size: "xxs", color: w.A.colors.ICON_OVERLAY_LIGHT }),
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
                    className: nd.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nd.$y,
                            children: [(0, a.jsx)("span", { className: nd.m$ }), (0, a.jsx)(nm, { className: nd.Md })],
                        }),
                        (0, a.jsxs)("div", {
                            className: nd.iU,
                            children: [
                                (0, a.jsx)("span", {
                                    className: h()(nd.my, nd.FY),
                                    children: (0, a.jsx)(ee.RobotIcon, {
                                        size: "xs",
                                        color: w.A.colors.ICON_OVERLAY_LIGHT,
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: nd.OS,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: nd.f9,
                                            children: [
                                                (0, a.jsx)(nm, { className: nd.iE }),
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-xs/bold",
                                                    color: "none",
                                                    className: nd.AO,
                                                    children: E.intl.string(S.default.VlgiLf),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(nm, { className: nd.xs }),
                                        (0, a.jsx)(nm, { className: nd.Md }),
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
                    className: h()(nd.x, nd.ME),
                    children: [
                        (0, a.jsx)("span", { className: nd.CK }),
                        (0, a.jsxs)("div", {
                            className: nd.kI,
                            children: [
                                (0, a.jsx)("span", { className: h()(nd.my, nd.jU) }),
                                (0, a.jsx)(nm, { className: nd.iE }),
                                (0, a.jsxs)("div", {
                                    className: nd.Wy,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: nd.M1,
                                            children: [0, 1].map((e) =>
                                                (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        className: nd.dJ,
                                                        children: [
                                                            (0, a.jsx)(nm, { className: nd.cR }),
                                                            (0, a.jsx)(nm, { className: nd.Zh }),
                                                        ],
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: nd.bW,
                                            children: [0, 1, 2, 3, 4, 5].map((e) =>
                                                (0, a.jsx)("span", { className: nd.QR }, e),
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
                    className: nd.JH,
                    children: [
                        (0, a.jsx)("span", { className: nd.rx }),
                        (0, a.jsx)("span", { className: nd.ny }),
                        (0, a.jsx)("span", { className: nd.ZH }),
                        (0, a.jsx)("div", {
                            className: nd.$Y,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nd.fn,
                                        children: [
                                            (0, a.jsx)("span", { className: h()(nd._h, { [nd.zY]: 0 === e }) }),
                                            (0, a.jsx)(nm, { className: nd.Av }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsxs)("div", {
                            className: nd.Y5,
                            children: [
                                (0, a.jsx)(nu.ClockIcon, { size: "xxs", color: w.A.colors.ICON_OVERLAY_LIGHT }),
                                (0, a.jsx)(nm, { className: nd.jB }),
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
                    className: nd.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nd.iU,
                            children: [
                                (0, a.jsx)("span", { className: nd.my }),
                                (0, a.jsxs)("div", {
                                    className: nd.OS,
                                    children: [
                                        (0, a.jsx)(nm, { className: nd.iE }),
                                        (0, a.jsx)(nm, { className: h()(nd.xs, nd.pc) }),
                                        (0, a.jsx)(nm, { className: h()(nd.Md, nd.pc) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nd.jC,
                            children: [
                                (0, a.jsx)(Q.ShieldIcon, { size: "sm", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsxs)("div", {
                                    className: nd.qQ,
                                    children: [
                                        (0, a.jsx)(nm, { className: h()(nd.Md, nd.k8) }),
                                        (0, a.jsx)(nm, { className: h()(nd.nq, nd.k8) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    nh = i.memo(function () {
        let e = i.useId();
        return (0, a.jsx)("section", {
            className: nd.GG,
            "aria-labelledby": e,
            children: (0, a.jsx)(nc.F, {
                component: (0, a.jsx)(x.D, {
                    id: e,
                    variant: "heading-lg/medium",
                    children: E.intl.string(S.default.IiQEVd),
                }),
                children: (0, a.jsx)("ul", {
                    className: nd.Vg,
                    children: nf.map((e) => {
                        let { id: t, title: n, description: l, Visual: r } = e;
                        return (0, a.jsxs)(
                            "li",
                            {
                                className: nd.Vs,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: nd.Tn,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(r, {}),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: nd.pG,
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
function ng(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let np = 1;
function nx(e) {
    let t = ng(e),
        n = { localId: np++, name: e.name, contentType: t };
    if (
        !(0, ef.Oq)(e.size, t) &&
        !("image/png" === t && e.size <= ef.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas)
    )
        return { file: e, draft: { ...n, status: "error", errorText: tz(t) } };
    let l = ef.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: l } };
}
function nv(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function nj(e, t) {
    if ((0, ef.Oq)(t.size, ng(t))) return (0, eh.vX)(e, t);
    let n = await tG(t);
    if (null == n || !(0, ef.Oq)(n.size, n.type)) throw Error("attachment over its size limit");
    return (0, eh.vX)(e, n);
}
var nb = n(698638),
    ny = n(606128),
    nk = n(260024);
class nw extends Error {}
function nN(e) {
    let t,
        { guildId: n } = e,
        [l, r] = i.useState(""),
        [s, o] = i.useState(!1),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, k] = i.useState(() => B.w.get(K) ?? null ?? !0),
        w = i.useRef(null),
        N = (0, G.z9)("ConjureHomePage"),
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
        A = (0, b.o)().get(U.f_) === F,
        I = `${n}:${A}`,
        [T, L] = i.useState(null),
        $ = T?.context === I ? T.target : null,
        D = i.useCallback((e) => L({ context: I, target: e }), [I]),
        z = i.useCallback((e) => e === F || N.some((t) => t.id === e), [N]),
        q = !A && z(n) ? n : F,
        W = null != $ && z($) ? $ : q,
        V = W === F ? "user" : "guild",
        X = W === F ? n : W,
        Z = (function () {
            let [e, t] = i.useState([]),
                n = i.useRef(e);
            (i.useLayoutEffect(() => {
                n.current = e;
            }),
                i.useEffect(() => () => n.current.forEach(nv), []));
            let l = i.useCallback((e) => {
                    if (0 === e.length) return;
                    let l = e.map(nx);
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
                    null != l && (nv(l), (n.current = n.current.filter((e) => e !== l)), t(n.current));
                }, []),
                s = i.useCallback(() => {
                    (n.current.forEach(nv), (n.current = []), t(n.current));
                }, []),
                o = i.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= ef.lN) return e;
                            let t = E.intl.formatToPlainString(S.default.Q0aCVZ, { count: ef.lN });
                            return e.map((e, n) =>
                                n < ef.lN || "error" === e.draft.status
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
        { attachments: Y, addFiles: J, clear: Q } = Z,
        ee =
            "idea" ===
                (t = (function (e) {
                    let { idea: t, installScope: n, submitting: l } = e;
                    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
                })({ idea: l, installScope: V, submitting: s })) ||
            "submitting" === t ||
            Z.hasErrors,
        et = i.useCallback((e) => J(Array.from(e)), [J]);
    (0, H.p)(w);
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
                    await O({
                        guildId: X,
                        installScope: V,
                        modelSettings: d,
                        start: async (t) => {
                            let n = [];
                            if (Y.length > 0)
                                try {
                                    n = await Promise.all(
                                        Y.map((e) => {
                                            let { file: n } = e;
                                            return nj(t, n);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, P.xx)(t).catch(() => void 0), new nw());
                                }
                            ((0, _.sendUserMessage)(t, e, n), Q());
                        },
                    });
                } catch (e) {
                    (c(e instanceof nw ? E.intl.string(S.default["903H7m"]) : (0, R.mG)(e)), (er.current = !1), o(!1));
                }
            }
        }, [l, V, d, X, Y, Q]),
        es = i.useCallback((e) => {
            (B.w.set(K, e), k(e));
        }, []),
        eo = i.useCallback(() => es(!1), [es]),
        eu = E.intl.string(f ? S.default.kar7jh : S.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: h()(nk.MY, ny.T),
        children: (0, a.jsxs)("div", {
            className: nk.Zp,
            children: [
                (0, a.jsxs)("main", {
                    className: nk.iW,
                    children: [
                        s
                            ? null
                            : (0, a.jsx)(j.A, {
                                  title: E.intl.string(S.default.gy7byi),
                                  description: E.intl.string(S.default["dkv/WO"]),
                                  icons: nb.ir,
                                  onDrop: et,
                              }),
                        (0, a.jsx)(M, {
                            title: E.intl.string(S.default.uk6jhJ),
                            transparent: !0,
                            actions: (0, a.jsx)(y.A.Icon, {
                                icon: g.Z,
                                color: "var(--icon-strong)",
                                className: nk.FW,
                                tooltip: eu,
                                "aria-label": eu,
                                selected: f,
                                onClick: () => es(!f),
                            }),
                        }),
                        (0, a.jsx)(p.Ip, {
                            className: nk.XG,
                            children: (0, a.jsxs)("div", {
                                className: nk.Qs,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nk.Lv,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: nk.ZK,
                                                children: [
                                                    (0, a.jsx)(x.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: nk.DD,
                                                        children: E.intl.string(S.default.doYpEy),
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: nk.VA,
                                                        children: E.intl.string(S.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: nk.ZK,
                                                children: [
                                                    (0, a.jsx)(na, {
                                                        idea: l,
                                                        inputRef: w,
                                                        onIdeaChange: en,
                                                        onSubmit: ea,
                                                        submitting: s,
                                                        submitDisabled: ee,
                                                        error: u,
                                                        target: W,
                                                        eligibleGuilds: N,
                                                        onTargetChange: D,
                                                        modelSettings: d,
                                                        onModelSettingsChange: m,
                                                        attachments: Z,
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-xxs/normal",
                                                        color: "text-muted",
                                                        children: E.intl.string(S.default.hebdhA),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(ei, { inspirations: C, onCopyPrompt: el }),
                                    (0, a.jsx)(nh, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                f ? (0, a.jsx)(tg, { guildId: n, modelSettings: d, onClose: eo }) : null,
            ],
        }),
    });
}
var nC = n(478016),
    nA = n(604525),
    nS = n(92446),
    nE = n(534890),
    nI = n(646270),
    nM = n(31300),
    n_ = n(831453),
    nR = n(71048);
let nP = Object.freeze({ x: 0.5, y: 0.5 });
function nT(e) {
    return "" !== e.trim();
}
function nL(e) {
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
function n$(e) {
    let { kind: t, name: n } = nL(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function nD(e) {
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
let nz = "[conjure:selected] ",
    nO = " \u2014 ";
function nq(e) {
    if (!e.startsWith(nz)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(nz.length),
        a = r.indexOf(nO),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let nF = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    nU = new Map(),
    nG = new Set();
function nB(e) {
    return nU.get(e) ?? nF;
}
function nK(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? nU.set(e, t) : nU.delete(e), [...nG]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function nH(e) {
    let t = nB(e);
    t.active || nK(e, { ...t, active: !0 });
}
function nW(e) {
    let t = nB(e);
    t.active && nK(e, { ...t, active: !1 });
}
function nV(e) {
    nU.has(e) && nK(e, nF);
}
function nX(e, t) {
    let n = nB(e);
    n.active && nK(e, { ...n, context: t });
}
function nZ(e, t) {
    return null != t && e.authorId === t;
}
function nY(e) {
    return (
        nG.add(e),
        () => {
            nG.delete(e);
        }
    );
}
function nJ(e) {
    let t = i.useCallback(() => (null == e ? nF : nB(e)), [e]);
    return i.useSyncExternalStore(nY, t, t);
}
(n(134528), n(947204));
let nQ = { past: [], present: [], future: [] };
function n0(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function n1(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function n2(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => n1(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: n1(e.from, t, n), to: n1(e.to, t, n) };
        case "text":
            return { ...e, at: n1(e.at, t, n) };
    }
}
function n3(e) {
    return e.some((e) => "erase" !== e.kind);
}
function n4(e, t) {
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
function n5(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function n6(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function n7(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => n6(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = n6(e.from, t),
                l = n6(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = n6(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function n8(e) {
    return n3(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let n9 = [3, 6, 12],
    le = [10, 20, 40],
    lt = (0, tS.D)(() => ({ byProject: {} })),
    ln = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: nQ,
        sketchDismissedFor: null,
    };
function ll(e) {
    return lt.getState().byProject[e] ?? null;
}
function lr(e, t) {
    let n = ll(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = lt.getState();
    lt.setState({ byProject: { ...r, [e]: l } });
}
function la(e) {
    if (null == ll(e)) return;
    let { [e]: t, ...n } = lt.getState().byProject;
    (lt.setState({ byProject: n }), nV(e));
}
function li(e, t) {
    null != ll(e) &&
        (lr(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? nH(e) : nW(e));
}
function ls(e, t) {
    lr(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return n0(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return n0(
                        e,
                        e.present.map((e) => (e.id === t.id ? n2(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : n0(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : n0(e, []);
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
function lo(e) {
    return lt.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var lu = n(39416);
function lc(e) {
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
            className: lu.i5,
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
var ld = n(91242),
    lm = n(457827),
    lf = n(802905),
    lh = n(245179),
    lg = n(573083);
function lp(e) {
    return lh.A.isThinking(e) || (0, lg.wK)(e);
}
var lx = n(35525),
    lv = n(881511);
let lj = new Set();
function lb(e, t) {
    if (!(lj.has(t) || (lp(e) && !lf.A.isPaused(e))))
        for (let e of ld.A.getAllFrames())
            e.applicationId === t &&
                (0, lv.D)(e) &&
                !(lx.A.isInHostWindow(e) || (lx.A.isActivityPopoutOpen() && ld.A.getMainFrame()?.id === e.id)) &&
                (0, lm.r)(e.id);
}
let ly = new Set(),
    lk = null;
function lw(e, t) {
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
                ly.add(t),
                () => {
                    ly.delete(t);
                }
            );
        }, [e]));
}
var lN = n(885386);
function lC() {
    return lN.Q_.useSetting() || !1;
}
var lA = n(128761),
    lS = n(12177),
    lE = n(967008),
    lI = n(513845),
    lM = n(951178);
let l_ = { width: 320, height: 240 };
var lR = n(855859),
    lP = n(238490),
    lT = n(991690),
    lL = n(696645);
function l$(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function lD(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, lL.X)(e.surface)
                : E.intl.formatToPlainString(S.default["6xVl+N"], {
                      surface: (0, lL.X)(e.surface),
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
var lz = n(939398),
    lO = n(86147),
    lq = n(729475),
    lF = n(156548),
    lU = n(869146),
    lG = n(475815),
    lB = n(165610);
function lK(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, lF.cR)(t?.id ?? null),
        r = (0, lg.Zv)(n),
        i = (0, o.bG)(
            [lU.A, ld.A],
            () => null != t && lU.A.getWindowOpen(D.MLl.ACTIVITY_POPOUT) && ld.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, lB.x1)(t) || i || r) return null;
    let s = (0, lF.fl)(t.id);
    if (null == s || !(0, lG.Ub)(s)) return null;
    let u = E.intl.string(l ? E.t.Z7MyNB : E.t.OIDkcp);
    return (0, a.jsx)(y.A.Icon, {
        tooltip: u,
        icon: l ? lO.z : lq.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, lF.U8)(t.id),
    });
}
var lH = n(704745);
function lW(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = E.intl.string(S.default.I2ucou);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: eu.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(ec.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(ed.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = l$(e);
                        return (0, a.jsx)(
                            ed.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: lD(e),
                                checked: t === l$(n),
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
            return (0, a.jsx)(tp.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: lH.h,
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
                            children: lD(n),
                        }),
                        (0, a.jsx)(t7.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var lV = n(324641),
    lX = n(627363),
    lZ = n(153207),
    lY = n(803101),
    lJ = n(226178),
    lQ = n(625180),
    l0 = n(672929),
    l1 = n(111534),
    l2 = n(754027),
    l3 = n(722701),
    l4 = n(962998),
    l5 = n(983851),
    l6 = n(794083),
    l7 = n(715641),
    l8 = n(750943),
    l9 = n(95477),
    re = n(103557),
    rt = n(47167),
    rn = n(946274),
    rl = n(535466),
    rr = n(961553),
    ra = n(277085),
    ri = n(808728),
    rs = n(498642);
let ro = [],
    ru = [
        [lM.q7.BOT, S.default.UnoAgo],
        [lM.q7.ACTIVITY, S.default["I88/iG"]],
        [lM.q7.PROFILE_WIDGET, S.default.gXY1x1],
        [lM.q7.AUTOMOD, S.default.Q9ruoM],
    ],
    rc = { screen_capture: S.default["8/7kE7"], connect_user_to_voice: S.default.uvDWXa },
    rd = { initial: S.default.NUZBwo, notPublished: S.default.Gdz7pg, published: S.default["6E9W4F"] },
    rm = new Set(),
    rf = new Set(),
    rh = "data-conjure-publish-trigger";
function rg(e) {
    return (
        rf.add(e),
        () => {
            rf.delete(e);
        }
    );
}
function rp(e, t) {
    if (rm.has(e) !== t) for (let n of (t ? rm.add(e) : rm.delete(e), rf)) n();
}
function rx(e) {
    rp(e, !rm.has(e));
}
var rv = n(566553);
let rj = { screen_capture: nM.k, connect_user_to_voice: l5.H },
    rb = {
        [lM.q7.BOT]: ee.RobotIcon,
        [lM.q7.ACTIVITY]: l6.b,
        [lM.q7.PROFILE_WIDGET]: l7.b,
        [lM.q7.AUTOMOD]: Q.ShieldIcon,
    },
    ry = { initial: rv.LK, notPublished: rv.i$, published: rv.kg };
function rk(e) {
    let { project: t, publish: n, menu: l, children: r } = e,
        s = t.id,
        o = i.useRef(null),
        u = i.useSyncExternalStore(rg, () => rm.has(s));
    return (
        i.useEffect(
            () => () => {
                rp(s, !1);
            },
            [s],
        ),
        (0, a.jsx)(eu.Y, {
            targetElementRef: o,
            shouldShow: u,
            onRequestOpen: () => rx(s),
            onRequestClose: (e, t) => {
                let n = e?.target;
                ("system:click_outside" === t &&
                    (0, en.vq)(n, Element) &&
                    n.closest(`[${rh}]`)?.getAttribute(rh) === s) ||
                    rp(s, !1);
            },
            position: "bottom",
            align: "right",
            spacing: 8,
            animation: eu.Y.Animation.FADE,
            renderPopout: () => (0, a.jsx)(rw, { project: t, publish: n, menu: l }),
            children: (e) => (0, a.jsx)("div", { ref: o, className: rv.hZ, ...{ [rh]: s }, children: r(e) }),
        })
    );
}
function rw(e) {
    let { project: t, publish: n, menu: l } = e,
        r = (function (e, t) {
            var n, l, r, a;
            let s,
                u,
                c,
                m,
                f,
                h,
                {
                    liveName: g,
                    liveDescription: p,
                    channels: x,
                    guild: v,
                    memberCount: j,
                } = ((n = e.id),
                (l = t.guildId),
                (s = (0, o.bG)([eL.Ay], () => eL.Ay.getProject(n) ?? null, [n])),
                (u = s?.application_id ?? null),
                (c = (0, o.bG)([tn.A], () => (null == u ? null : (tn.A.getApplication(u) ?? null)), [u])),
                (m = (0, o.bG)([d.A], () => (null == l ? null : (d.A.getGuild(l) ?? null)), [l])),
                (f = (0, o.bG)([rs.A], () => (null == l ? null : (rs.A.getMemberCount(l) ?? null)), [l])),
                (h = (0, o.yK)(
                    [ri.Ay],
                    () =>
                        null == l || null == u
                            ? []
                            : ri.Ay.getChannels(l)
                                  [ri.I6].filter((e) => {
                                      let { channel: t } = e;
                                      return (0, e_.us)(t) === u;
                                  })
                                  .map((e) => {
                                      let { channel: t } = e;
                                      return t;
                                  }),
                    [l, u],
                )),
                {
                    project: s,
                    liveName: c?.name ?? s?.name ?? "",
                    liveDescription: c?.description?.trim() ?? "",
                    channels: h,
                    guild: m,
                    memberCount: f,
                }),
                b = (0, rr.A)(e.id),
                y = ((r = e.id), (0, o.bG)([l3.A], () => l3.A.getPublishStatus(r)?.previewDevicePermissions ?? ro)),
                [k, w] = i.useState(e.name),
                [N, C] = i.useState(!1),
                A =
                    null == (a = t.status) || "unpublished" === a.state
                        ? "initial"
                        : "up_to_date" === a.state
                          ? "published"
                          : "notPublished",
                I = "initial" === A,
                M = I && (0, eL.PV)(e),
                _ = (I ? e.preview_supported_surfaces : e.supported_surfaces) ?? [],
                R = k.trim(),
                T = M ? (0, ra.p)(R) : null,
                L = t.status?.previewAppChannels ?? [],
                $ = t.status?.publishedAt,
                D = null == $ ? null : (0, lA.lG)($).relative;
            async function z() {
                if (N || null != T) return !1;
                C(!0);
                try {
                    return (M && (R !== e.name || b.changed) && (await (0, P.CW)(e.id, { ...b.changes, name: R })), !0);
                } finally {
                    C(!1);
                }
            }
            return {
                mode: A,
                initial: I,
                editable: M,
                identity: b,
                name: k,
                setName: w,
                nameError: T,
                displayName: I ? e.name : g,
                description: I ? b.description : p,
                initialChannelNames:
                    0 === L.length && _.includes(lM.q7.APP_CHANNEL) ? [E.intl.string(S.default.xI4N6Q)] : L,
                channels: x,
                components: ru
                    .filter((e) => {
                        let [t] = e;
                        return _.includes(t);
                    })
                    .map((e) => {
                        let [t, n] = e;
                        return { surface: t, label: E.intl.string(n) };
                    }),
                devicePermissions: I ? y : [],
                sharing:
                    null != v
                        ? {
                              guild: v,
                              caption: null != j ? E.intl.formatToPlainString(S.default.ZpZxK9, { count: j }) : null,
                          }
                        : "user" === e.install_scope
                          ? { guild: null, caption: E.intl.string(S.default.RUhWLH) }
                          : null,
                statusText: E.intl.string(rd[A]),
                lastPublishedText: null == D ? null : E.intl.formatToPlainString(S.default["/6YRCf"], { time: D }),
                ctaText: I ? t.label : E.intl.string(S.default.KHg4Dk),
                ctaVariant: "published" === A ? "secondary" : "primary",
                saving: N,
                save: z,
            };
        })(t, n),
        { mode: s, initial: u, editable: c, identity: m, sharing: f } = r,
        h = i.useRef(null),
        g = [
            ...(u
                ? r.initialChannelNames.map((e) => (0, a.jsx)(rC, { icon: Y.k, label: e }, e))
                : r.channels.map((e) => (0, a.jsx)(rA, { channel: e }, e.id))),
            ...r.components.map((e) => {
                let { surface: t, label: n } = e;
                return (0, a.jsx)(rC, { icon: rb[t], label: n }, t);
            }),
        ];
    async function p() {
        try {
            if (!(await r.save())) return;
        } catch {
            (0, es.P0)({ text: E.intl.string(S.default.Fi7boI), variant: "critical" });
            return;
        }
        (n.run("header"), rp(t.id, !1));
    }
    return (0, a.jsxs)("div", {
        className: rv.nd,
        role: "dialog",
        "aria-label": u ? r.name : r.displayName,
        children: [
            (0, a.jsxs)("div", {
                className: rv.M0,
                children: [
                    (0, a.jsxs)("div", {
                        className: rv.wx,
                        children: [
                            c
                                ? null != m.iconURL
                                    ? (0, a.jsxs)(C.D, {
                                          className: rv.gb,
                                          "aria-label": E.intl.string(E.t["6yrpFR"]),
                                          onClick: () => h.current?.activateUploadDialogue(),
                                          children: [
                                              (0, a.jsx)("img", { className: rv.Dp, src: m.iconURL, alt: "" }),
                                              (0, a.jsx)("span", {
                                                  className: rv.E7,
                                                  "aria-hidden": !0,
                                                  children: (0, a.jsx)(l8.X, { size: "xs", color: "currentColor" }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t["MsUY/S"]),
                                          children: (0, a.jsx)(eK.K, {
                                              icon: l8.X,
                                              size: "md",
                                              variant: "secondary",
                                              "aria-label": E.intl.string(E.t["MsUY/S"]),
                                              onClick: () => h.current?.activateUploadDialogue(),
                                          }),
                                      })
                                : (0, a.jsx)(A.A, { project: t, size: "card" }),
                            c
                                ? (0, a.jsx)(rn.Ay, {
                                      ref: h,
                                      className: rv.Fg,
                                      multiple: !1,
                                      filters: [{ name: E.intl.string(E.t["Sp2NF+"]), extensions: rl.En }],
                                      maxFileSizeBytes: rl.Q0,
                                      onChange: m.setIcon,
                                      onFileSizeError: () =>
                                          (0, es.P0)({ text: E.intl.string(S.default.ZTAAMc), variant: "critical" }),
                                      "aria-hidden": !0,
                                  })
                                : null,
                            l,
                        ],
                    }),
                    c
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: rv.ZZ,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "text-sm/normal",
                                              color: "text-subtle",
                                              "aria-hidden": !0,
                                              children: E.intl.string(S.default.knevPu),
                                          }),
                                          (0, a.jsx)(l9.k, {
                                              label: E.intl.string(S.default.knevPu),
                                              hideLabel: !0,
                                              value: r.name,
                                              onChange: r.setName,
                                              error: r.nameError,
                                              maxLength: lM.eq,
                                              fullWidth: !0,
                                          }),
                                      ],
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: rv.ZZ,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "text-sm/normal",
                                              color: "text-subtle",
                                              "aria-hidden": !0,
                                              children: E.intl.string(S.default.ynaGa1),
                                          }),
                                          (0, a.jsx)(re.f, {
                                              label: E.intl.string(S.default.ynaGa1),
                                              hideLabel: !0,
                                              placeholder: E.intl.string(S.default["I+3UTL"]),
                                              value: m.description,
                                              onChange: m.setDescription,
                                              maxLength: lM.HR,
                                              rows: 3,
                                              maxRows: 6,
                                              autosize: !0,
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: r.displayName,
                                  }),
                                  "" !== r.description
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            lineClamp: 2,
                                            children: r.description,
                                        })
                                      : null,
                              ],
                          }),
                    (0, a.jsx)(rN, { title: E.intl.string(S.default.BqNMms), rows: g }),
                    (0, a.jsx)(rN, {
                        title: E.intl.string(S.default.LnqeFd),
                        rows: r.devicePermissions.map((e) =>
                            (0, a.jsx)(rC, { icon: rj[e], label: E.intl.string(rc[e]) }, e),
                        ),
                    }),
                ],
            }),
            null != f
                ? (0, a.jsxs)("div", {
                      className: rv.KO,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: E.intl.string(S.default.yCgX8i),
                          }),
                          (0, a.jsxs)("div", {
                              className: rv.Kk,
                              children: [
                                  null != f.guild
                                      ? (0, a.jsx)(q.Ay, {
                                            guild: f.guild,
                                            size: q.Ay.Sizes.MEDIUM,
                                            active: !0,
                                            className: rv.$f,
                                            "aria-hidden": !0,
                                        })
                                      : (0, a.jsx)("span", {
                                            className: rv.qU,
                                            children: (0, a.jsx)(eA.UserIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                        }),
                                  (0, a.jsxs)("div", {
                                      className: rv.qg,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: f.guild?.name ?? E.intl.string(S.default["37xgkF"]),
                                          }),
                                          null != f.caption
                                              ? (0, a.jsx)(v.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-subtle",
                                                    children: f.caption,
                                                })
                                              : null,
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("div", {
                className: rv.qr,
                children: [
                    (0, a.jsx)("span", { className: ry[s], "aria-hidden": !0 }),
                    (0, a.jsxs)("div", {
                        className: rv.qg,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: r.statusText,
                            }),
                            null != r.lastPublishedText
                                ? (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-subtle",
                                      children: r.lastPublishedText,
                                  })
                                : null,
                        ],
                    }),
                    (0, a.jsx)(W.$, {
                        variant: r.ctaVariant,
                        size: "sm",
                        text: r.ctaText,
                        disabled: n.disabled || null != r.nameError,
                        loading: n.publishing || r.saving,
                        onClick: p,
                    }),
                ],
            }),
        ],
    });
}
function rN(e) {
    let { title: t, rows: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: rv.mK,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: t }),
                  (0, a.jsx)("div", { children: n }),
              ],
          });
}
function rC(e) {
    let { icon: t, label: n } = e;
    return (0, a.jsxs)("div", {
        className: rv.CT,
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor", className: rv.Pw, "aria-hidden": !0 }),
            (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: n }),
        ],
    });
}
function rA(e) {
    let { channel: t } = e;
    return (0, a.jsx)(rC, { icon: Y.k, label: (0, rt.Ay)(t) ?? "" });
}
var rS = n(373540),
    rE = n(144228);
function rI(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, o] = i.useState(t.selected_destination_id),
        u = E.intl.string(S.default.lJrOGW);
    return (0, a.jsx)(e5.a, {
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
        children: (0, a.jsx)(rE.z, {
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
let rM = {
    showPublishBlocked: rS.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, e7.openModal)(
                (t) =>
                    (0, a.jsx)(rI, {
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
    showError: (e) => (0, es.P0)({ text: e, variant: "critical" }),
};
var r_ = n(58736),
    rR = n(333007),
    rP = n(775121),
    rT = n(826745),
    rL = n(470779);
function r$(e) {
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
            anchor: g = "chip",
            allowAttachments: p = !0,
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
        } = tW({ projectId: t, surface: "design", onUploadFile: f }),
        A = i.useRef(null),
        I = (d || j.length > 0) && w && !m,
        M = i.useCallback(() => {
            if (!I) return;
            let e = C();
            u(e.length > 0 ? e : void 0);
        }, [I, C, u]),
        [_, R] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => R(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let P = i.useRef(null),
        [T, L] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = P.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => L({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let $ = T?.height ?? 44,
        D = l.left + 8,
        z = l.top + 8,
        O = Math.max(n.x, D),
        q = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, z), Math.max(z, l.top + l.height - $ - 8));
    return (0, a.jsxs)("div", {
        ref: P,
        className: h()(rL.M0, { [rL.ho]: _ && !m, [rL.ET]: m }),
        style: { left: O, top: q },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: rL.Fg,
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
                                  className: rL.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(S.default.lgvqSB),
                                  children: (0, a.jsx)(em.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: rL.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(rT.y, {
                autoFocus: !0,
                rows: 1,
                className: rL.hF,
                value: s,
                placeholder: x ?? ("" === r ? E.intl.string(S.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? E.intl.string(S.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: m || !p ? void 0 : y,
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
                      className: rL.ZO,
                      children: j.map((e) => (0, a.jsx)(tV, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function rD(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function rz(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rO(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? rD(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = rD(e());
                l((e) => (rz(e, t) ? e : t));
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
var rq = n(876798),
    rF = n(48507),
    rU = n(193885),
    rG = n(744898),
    rB = n(803656),
    rK = n(241326),
    rH = n(972213);
function rW(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rV(e, t, n) {
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
let rX = rV("red", rW(w.A.unsafe_rawColors.RED_400), () => E.intl.string(S.default.tvXfjt)),
    rZ = [
        rX,
        rV("yellow", rW(w.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(S.default.FYuaJ1)),
        rV("green", rW(w.A.unsafe_rawColors.GREEN_360), () => E.intl.string(S.default["Vv+paS"])),
        rV("blue", rW(w.A.unsafe_rawColors.BLUE_345), () => E.intl.string(S.default.k9b1QJ)),
        rV("white", rW(w.A.unsafe_rawColors.WHITE), () => E.intl.string(S.default["1sOXwH"])),
    ];
function rY(e) {
    return rZ.find((t) => t.id === e) ?? rX;
}
function rJ(e) {
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
function rQ(e) {
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
function r0(e) {
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
function r1(e) {
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
let r2 = n9.map((e) => r1(Math.min(16, e + 3))),
    r3 = le.map((e) => r1(Math.min(16, e / 2.5))),
    r4 = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
    r5 = {
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
function r6(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: lu.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(rq.k, {
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
function r7(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(eK.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function r8(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: lu.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: lu.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function r9(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rY(n.colorId),
        h = r5[u],
        g = E.intl.string(S.default.hUm825),
        p = E.intl.string(S.default.n5IA3a),
        x = E.intl.string(S.default.r5dX6t),
        v = E.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: lu.t$,
        children: [
            (0, a.jsx)("div", {
                className: lu.NT,
                children: (0, a.jsx)(r6, {
                    icon: rQ,
                    label: E.intl.string(S.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => li(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: lu.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": E.intl.string(S.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(r6, {
                        icon: rJ,
                        label: E.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => li(t, "move"),
                    }),
                    (0, a.jsx)(r6, {
                        icon: rF.x,
                        label: E.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => li(t, "text"),
                    }),
                    (0, a.jsx)(r8, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(r6, {
                                icon: rU.V,
                                label: g,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (li(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            r2.map((n, l) =>
                                (0, a.jsx)(
                                    r6,
                                    {
                                        icon: n,
                                        label: E.intl.string(r4[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (lr(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), nW(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r8, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(r6, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (li(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(r5).map((n) =>
                                (0, a.jsx)(
                                    r6,
                                    {
                                        icon: r5[n].icon,
                                        label: r5[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (li(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r8, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(r6, {
                                icon: r0,
                                label: p,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (li(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            r3.map((n, l) =>
                                (0, a.jsx)(
                                    r6,
                                    {
                                        icon: n,
                                        label: E.intl.string(r4[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (lr(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), nW(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r8, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(r7, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rZ.map((n) =>
                                (0, a.jsx)(
                                    r6,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                lr(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: lu.Gz, role: "separator" }),
                    (0, a.jsx)(r7, {
                        icon: rG.e,
                        label: E.intl.string((0, ep.isMac)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(r7, {
                        icon: rB.U,
                        label: E.intl.string((0, ep.isMac)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(r7, {
                        icon: rK.TrashIcon,
                        label: E.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: lu.Gz, role: "separator" }),
                    (0, a.jsx)(r7, { icon: rH.XLargeIcon, label: E.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let ae = w.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function at(e, t, n) {
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
                    (e.strokeStyle = ae),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function an(e) {
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
async function al(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = an(e),
            r = an(e);
        if (null == l || null == r) return null;
        return (at(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let ar = new Map(),
    aa = new Map(),
    ai = (0, tS.D)(() => ({ byMessageKey: {} }));
function as(e, t) {
    let { [e]: n, ...l } = ai.getState().byMessageKey;
    ai.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function ao(e, t) {
    null == t ? ar.delete(e) : ar.set(e, t);
}
function au(e) {
    return ar.get(e)?.() ?? Promise.resolve(null);
}
let ac = { dx: 0, dy: 0 },
    ad = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    am = 1;
function af(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = lo(s),
        { active: u } = nJ(s),
        c = (0, e7.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => la(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && nH(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(ah, { projectId: s, state: o, resolveIframe: r });
}
function ah(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = rO(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [g, p] = i.useState(ac),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        N = i.useRef(0),
        { tool: C, history: A } = n,
        I = rY(n.colorId),
        M = "pick" !== C,
        _ = "marker" === n.tool ? n9[n.markerSize] : "eraser" === n.tool ? le[n.eraserSize] : null,
        R = "move" === C ? (A.present.find((e) => e.id === f) ?? null) : null,
        P = null != r;
    (i.useLayoutEffect(() => {
        m(v.current?.offsetWidth ?? 0);
    }, [P]),
        i.useLayoutEffect(() => {
            y.current = s;
        }, [s]));
    let T = i.useCallback(async () => {
        let e = l();
        if (null == e) return null;
        let t = await (0, lV.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, rR.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, lV.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (ao(t, T), () => ao(t, null)), [t, T]);
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
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? n2(e, g.dx, g.dy) : e)),
            o = j.current;
        at(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, A.present, g]);
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
                id: `mark-${am++}`,
                kind: "text",
                color: I.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (n4(n, r) && ls(t, { type: "commit", shape: n }), o(null));
        }, [t, I, r]),
        O = i.useCallback(() => {
            ((y.current = null), o(null));
        }, []),
        q = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != y.current) return void z();
                let t = D(e);
                switch (C) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == R ? null : n7(R, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? R
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = n6(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => n6(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (n5(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = n6(e.from, n),
                                                                  r = n6(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => n5(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = n6(e.from, n),
                                                                  r = n6(e.to, n),
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
                                                              let t = n7(e, n);
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
                        if (!n3(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${am++}`,
                                kind: "erase",
                                width: le[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${am++}`,
                                kind: "marker",
                                color: I.value,
                                width: n9[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${am++}`,
                                kind: C,
                                color: I.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                $();
            },
            [r, C, I, R, A.present, n.markerSize, n.eraserSize, D, z, $],
        ),
        F = i.useCallback(
            (e) => {
                L(e);
                let t = D(e),
                    n = b.current;
                if (null != n) return void p({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
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
                ((b.current = null), p(ac), ls(t, { type: "move", id: e.id, dx: g.dx, dy: g.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && n4(n, r) ? ls(t, { type: "commit", shape: n }) : $());
        }, [t, r, g, $]),
        G = i.useCallback(() => la(t), [t]),
        B = i.useCallback(() => ls(t, { type: "undo" }), [t]),
        K = i.useCallback(() => ls(t, { type: "redo" }), [t]),
        H = i.useCallback(() => ls(t, { type: "clear" }), [t]),
        W = i.useRef({ tool: C, selected: R, exit: G, undo: B, redo: K });
    if (
        (i.useLayoutEffect(() => {
            W.current = { tool: C, selected: R, exit: G, undo: B, redo: K };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, en.Cw)((0, en.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), ls(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = ad[s];
                null != o && (e.preventDefault(), li(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (M) return (rP.A.disable(), () => rP.A.enable());
        }, [M]),
        null == r)
    )
        return null;
    let V = Math.max(8, r.left - d - 8),
        X = null == R ? null : n7(null == b.current ? R : n2(R, g.dx, g.dy), r);
    return (0, rR.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: lu.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: lu.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: lu.Ji,
                            "data-tool": C,
                            "data-interactive": M && !u ? "" : void 0,
                            "aria-label": E.intl.string(S.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: q,
                            onPointerEnter: L,
                            onPointerLeave: () => L(null),
                            onPointerMove: F,
                            onPointerUp: U,
                            onPointerCancel: U,
                        }),
                        null == _ || u
                            ? null
                            : (0, a.jsx)("div", {
                                  ref: k,
                                  className: lu.V$,
                                  "data-tool": C,
                                  "data-color": I.id,
                                  style: { width: _, height: _ },
                                  "aria-hidden": !0,
                              }),
                        null == X
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: lu.r1,
                                  style: { left: X.x, top: X.y, width: X.width, height: X.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: lu.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: lu.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: lu.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: lu.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(r$, {
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
                          onUploadFile: (e) => (0, eh.vX)(t, e),
                          onDismiss: O,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: lu.ej,
                    style: { left: V, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(r9, { projectId: t, state: n, onExit: G, onUndo: B, onRedo: K, onClear: H }),
                }),
            ],
        }),
        document.body,
    );
}
var ag = n(308081),
    ap = n(689175),
    ax = n(683071),
    av = n(218394),
    aj = n(115982),
    ab = n(886540);
function ay(e) {
    return !(0, ab.BL)(e) && !0 !== e.stopRequested;
}
var ak = n(104317),
    aw = n(643278),
    aN = n(566424),
    aC = n(683063),
    aA = n(140735),
    aS = n(138212);
function aE(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: h()(aS.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: h()(aS.wx, null != n && aS.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var aI = n(148590);
function aM(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function a_(e) {
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
        [f, g] = i.useState(!l),
        [p, x] = i.useState(l);
    p !== l && (x(l), g(!l));
    let v = i.useCallback(() => g((e) => !e), []),
        j = f ? t7.a : tZ._,
        b = null != n || l;
    return (0, a.jsxs)(aE, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: aI.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(C.D, {
                                className: aI.L$,
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
        headerClassName: f ? void 0 : aI.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: h()(aI.rf, o), hidden: !f, children: c })],
    });
}
var aR = n(883646);
let aP = [];
function aT(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: h()(aR.xL, {
            [aR.Vb]: "in_progress" === t,
            [aR.cT]: "completed" === t,
            [aR.GZ]: "unfinished" === t,
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
            (0, a.jsx)(tN.y, {
                type: tN.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: aR.Qd,
                itemClassName: aR.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: aR.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: aR.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function aL(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : aP), [n, t]),
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
    let g = o.slice(0, 3),
        p = o.length - g.length;
    return (0, a.jsxs)("span", {
        className: aR.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    aC.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: aR.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: aR.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function a$(e) {
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
            ((t = (r ?? aP).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? aP),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: aR.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: h()(aR.AS, { [aR.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(aT, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: aR.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: aR.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(aL, { agents: u.get(e.id) ?? aP, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: aR.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(aT, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: aR.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: aR.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function aD(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(S.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(S.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(a_, {
        title: E.intl.string(S.default.RtzECX),
        meta: (0, a.jsx)(aM, { children: c }),
        superseded: s,
        showLabel: E.intl.string(S.default.RKyN9q),
        hideLabel: E.intl.string(S.default.xydHoj),
        className: aR.Nr,
        bodyClassName: aR.rf,
        beforeBody: r && !s ? (0, a.jsx)(aA.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(a$, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var az = n(308665),
    aO = n(59678),
    aq = n(903847);
function aF(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        c = null != n,
        [d, m] = i.useState(n ?? "top"),
        [f, g] = i.useState(c),
        [p, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(c);
    (b !== c && (y(c), null != n ? (m(n), g(!0)) : (x(!1), j(!1))),
        i.useEffect(() => {
            if (c || !f) return;
            let e = setTimeout(() => g(!1), 150);
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
    let R = null != l && l.length > 0,
        P = i.useCallback(() => j((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: aq.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: h()(aq.vK, { [aq.ho]: p && c, [aq.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: h()(aq.Rk, aO.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(aN.A, {
                                        glyph: (0, a.jsx)(az.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(C.D, {
                                    className: aq.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: h()(aq.Rk, aO.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(aN.A, {
                                            glyph: (0, a.jsx)(az.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          R
                              ? (0, a.jsx)(N.m, {
                                    text: E.intl.string(S.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(C.D, {
                                        className: aq.BO,
                                        onClick: P,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(S.default.RtzECX),
                                        children: (0, a.jsx)(aw.ClipboardListIcon, {
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
                  k && R
                      ? (0, a.jsx)("div", {
                            className: h()(aq.vB, { [aq.pg]: v && A, [aq.ui]: !v }),
                            children: (0, a.jsx)(aD, {
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
var aU = n(195880);
function aG(e) {
    let t = (0, G.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var aB = n(736553),
    aK = n(642785);
async function aH(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, aK.dv)(e),
        i = new aB.u();
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
var aW = n(890497),
    aV = n(29073),
    aX = n(590077);
function aZ(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = aG(e),
                [s, o] = i.useState(null),
                [u, c] = i.useState([]),
                [d, m] = i.useState(t.prompt),
                [f, h] = i.useState(!1),
                [g, p] = i.useState(!1),
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
                                : tF(
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
                    (h(!0), p(!1));
                    let l =
                        ((t = eL.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(S.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, aU.m)() }), x.current.set(e.projectId, t)),
                                aH(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: C }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), o(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
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
                failed: g,
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
        className: h()(aV.nd, aV.jx),
        "aria-labelledby": c,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: aV.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: c,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: aV.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(eK.K, {
                        icon: eo.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": E.intl.string(S.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: aX.r,
                children: [
                    0 === u.length
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TbbzW5),
                          })
                        : (0, a.jsx)(aW.Z, {
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
                    (0, a.jsx)(re.f, {
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
                className: aV.qr,
                children: (0, a.jsx)("div", {
                    className: aV.zt,
                    children: (0, a.jsx)(W.$, {
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
var aY = n(658675),
    aJ = n(22231),
    aQ = n(123292),
    a0 = n(691885),
    a1 = n(360047);
function a2(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: o } = e,
        u = i.useMemo(() => a1.Hi.map((e) => ({ id: e, value: e, label: (0, a1.hU)(e) })), []);
    return (0, a.jsx)(a0.l, {
        label: t,
        hideLabel: n,
        autoFocus: l,
        options: u,
        value: r,
        selectionMode: "single",
        fullWidth: !0,
        disabled: s,
        onSelectionChange: o,
    });
}
var a3 = n(734057),
    a4 = n(287809);
function a5(e) {
    return 0 === e.options.length && null == e.input;
}
let a6 = {
        [D.rbe.GUILD_TEXT]: "text",
        [D.rbe.GUILD_VOICE]: "voice",
        [D.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [D.rbe.GUILD_STAGE_VOICE]: "stage",
        [D.rbe.GUILD_FORUM]: "forum",
        [D.rbe.GUILD_MEDIA]: "media",
    },
    a7 = { channel: "#", role: "@", user: "@", project: "" },
    a8 = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
    };
function a9(e, t) {
    return E.intl.string(a8[e][+!!t]);
}
var ie = n(155078);
function it(e) {
    return e.options.some((e) => null != e.image);
}
let il = [];
function ir(e, t) {
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
var ia = n(300344),
    ii = n(614733),
    is = n(904363),
    io = n(950902),
    iu = n(384017);
function ic(e) {
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
    function g(e) {
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
                        let l = null == (n = a3.A.getChannel(t)?.type) ? void 0 : a6[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = a4.default.getUser(t)?.username;
                        return { kind: e, ...(null == n ? {} : { username: n }) };
                    }
                    return { kind: e };
                })(t, e),
            }))
        );
    }
    let p = {
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
        className: iu.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(aW.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(aW.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function id(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, ia.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(ic, { ...l, guildId: t, options: r, placeholder: a9("channel", !0 === l.question.multi_select) });
}
function im(e) {
    let { guildId: t, ...n } = e,
        l = (0, is.A)(t);
    return (0, a.jsx)(ic, { ...n, guildId: t, options: l, placeholder: a9("role", !0 === n.question.multi_select) });
}
function ih(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, ii.A)(t);
    return (0, a.jsx)(ic, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: a9("user", !0 === n.question.multi_select),
    });
}
function ig(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = aG(t),
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
    return 0 === s.length ? n : (0, a.jsx)(ic, { ...l, options: s, placeholder: a9("project", !1) });
}
function ip(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, io.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(ig, { projectId: t, fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(id, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(im, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(ih, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var ix = n(87221),
    iv = n(26430),
    ij = n(256905),
    ib = n(490707),
    iy = n(907702);
function ik(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, ib._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: h()(iy.Gt, iy.b6),
              children: [
                  (0, a.jsx)(ix.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: h()(iy.Gt, { [iy.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: iy.Sl,
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
function iw(e) {
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
            onMeasured: g,
            onRemove: p,
        } = e,
        x = E.intl.formatToPlainString(S.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: h()(iy.Vs, { [iy.Q9]: s, [iy.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(C.D, {
                className: iy.Up,
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
                        className: iy.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(ik, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: iy.Gt }),
                            (0, a.jsx)("span", {
                                className: iy.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(aY.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(rE.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: iy.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, ie.E)(t) : "")
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
                      className: iy.B4,
                      children: (0, a.jsx)(N.m, {
                          text: E.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(eK.K, {
                              icon: rK.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": E.intl.string(S.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: iy.B4,
                        children: (0, a.jsx)(N.m, {
                            text: E.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(eK.K, {
                                icon: iv._,
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
function iN(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: u, own: c } = e,
        d = !0 === l.multi_select,
        { options: m } = l,
        f = m.length > 4 ? "gallery" : "row",
        g = i.useRef(null),
        p = i.useRef(new Map()),
        [x, v] = i.useState(null),
        j = null != x && m.some((e) => e.id === x) ? x : (m.find((e) => r.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, eh.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, ij.R)({
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
                (v(l.id), g.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || s || u(l));
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
        className: iy.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: g,
                className: h()(iy.fF, "gallery" === f ? iy.nV : iy.nM, { [iy.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            iw,
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
                              iw,
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
            (0, a.jsx)(iC, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: E.intl.string(/\bicons?\b/i.test(l.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function iC(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(""),
        f = r ? 0 : -1,
        h = n.busy;
    function g() {
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
        className: iy.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: iy.QJ,
                children: [
                    (0, a.jsx)(W.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: l8.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(W.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: eU.LinkIcon,
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
                        className: iy.Fg,
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
                                        (0, ef.Oq)(a.size, r)
                                            ? (0, eh.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: tz(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: iy.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: iy.Hs,
                              children: (0, a.jsx)(l9.k, {
                                  label: E.intl.string(S.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: E.intl.string(S.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), g())
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
                              className: iy.gd,
                              children: [
                                  (0, a.jsx)(W.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(S.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(aQ.Q, {
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
function iA(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(C.D, {
        className: h()(iu.uK, { [iu.ue]: l, [iu.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: iu.dy, children: (0, a.jsx)(aY.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: iu.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: iu.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: iu.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: iu.ed,
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
                      className: iu.rM,
                      children: E.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function iS(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return it(n)
        ? (0, a.jsx)(iN, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      iA,
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
let iE = [],
    iI = [];
function iM(e) {
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
        className: h()(iu.Ge, iu.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: iu.aK,
                      children: E.intl.string(S.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(iS, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: ir(o, u),
            }),
            it(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: iu.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: iu.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(aJ.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: h()(iu.Pu, iu.es), children: c }),
                      ],
                  }),
        ],
    });
}
function i_(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, u] = i.useState({}),
        [c, d] = i.useState({}),
        [m, f] = i.useState({}),
        [g, p] = i.useState({}),
        [x, j] = i.useState({}),
        [b, y] = i.useState({}),
        [k, w] = i.useState(!1),
        [A, I] = i.useState(0),
        [M, _] = i.useState(null),
        [R, P] = i.useState(null),
        [T, L] = i.useState(null),
        [$, D] = i.useState(!1),
        z = i.useRef(null),
        [O, q] = i.useState(null),
        F = i.useRef(null),
        U = i.useRef(0),
        G = null == r,
        B = l.questions.length,
        K = Math.min(A, B - 1),
        H = l.questions[K],
        [V, X] = i.useState({ id: H.id, expanded: !1 }),
        Z = V.id === H.id && V.expanded,
        [Y, J] = i.useState(null),
        Q = c[H.id] ?? "",
        ee = !0 === H.multi_select,
        et = it(H),
        el = ee ? (m[H.id] ?? iE) : ((t = o[H.id]), t?.kind === "option" ? [t.optionId] : il),
        er = (function (e, t, n) {
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
                        if (o) return ir(h, m(i));
                        function g(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function p(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let x = t[d];
                        function v(t) {
                            (r((n) => {
                                let l = n[d];
                                return (
                                    null != l && (0, eh.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, eh.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                (g({ busy: "upload", error: null }),
                                    e.then(
                                        (e) => {
                                            "errorText" in e
                                                ? g({ busy: null, error: { source: "upload", text: e.errorText } })
                                                : v({ attachment: e });
                                        },
                                        () =>
                                            g({
                                                busy: null,
                                                error: { source: "upload", text: E.intl.string(S.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, eh.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
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
        ea = er.imageFor(H.id),
        ei = er.selectedFor(H),
        { text: es, phase: eu } = (0, tY.Q)(H.question),
        ec = es === H.question,
        ed = ec && Y?.id === H.id && Y.truncated;
    i.useLayoutEffect(() => {
        if (null == O || Z || !ec) return;
        function e() {
            if (null == O) return;
            let e = O.scrollHeight > O.clientHeight + 1;
            J((t) => (t?.id === H.id && t.truncated === e ? t : { id: H.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(O), () => t.disconnect());
    }, [ec, O, H.id, Z]);
    let em = E.intl.string(Z ? E.t.iTcuma : E.t.dcl9MQ),
        ef = i.useCallback(
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
                            return !0 === t.link && n?.kind === "entities"
                                ? n.entities.map((e) => ({ target: e.id, build: b[t.id] }))
                                : [];
                        })).length
                            ? t()
                            : Promise.allSettled(
                                  i.map((e) => {
                                      let { target: t, build: l } = e;
                                      return (0, a1.Ol)(t, n, l);
                                  }),
                              ).then(t));
                }
            },
            [l, b, r, n],
        ),
        eg = i.useCallback(
            (e, t) => {
                U.current += 1;
                let n = U.current;
                (_({ direction: t, moves: n }),
                    P({ question: H, draft: Q, selected: el, ownImage: ea, ownSelected: ei, direction: t, moves: n }),
                    D(!0),
                    I(e));
            },
            [Q, ea, ei, H, el],
        ),
        ep = i.useCallback(() => {
            let e = z.current,
                t = F.current;
            null != e && null != t && L({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = z.current,
            t = F.current;
        if (null == e || null == t) return;
        ep();
        let n = new ResizeObserver(ep);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ep]);
    let ex = M?.moves;
    i.useEffect(() => {
        if (null == ex) return;
        let e = setTimeout(() => P(null), 400),
            t = setTimeout(() => D(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ex]);
    let ev = i.useCallback(
            (e) => {
                if (G) return;
                let t = { ...o, [H.id]: e };
                u(t);
                let n =
                    K < l.questions.length - 1
                        ? K + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, K);
                null == n ? ef(t) : eg(n, n < K ? "back" : "forward");
            },
            [o, l, G, K, H.id, ef, eg],
        ),
        ej = i.useCallback(() => {
            G || 0 === K || eg(K - 1, "back");
        }, [G, K, eg]),
        eb = K > 0 && !G,
        ey = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [H.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                et ? G || u((e) => ({ ...e, [H.id]: t })) : ev(t);
            },
            [G, et, H.id, ev],
        ),
        { multiPartFor: ek } = er,
        ew = i.useMemo(() => {
            var e;
            let t, n;
            return ee
                ? ((e = ek(H)),
                  (t = Q.trim()),
                  (n = H.options.filter((e) => el.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: el,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [Q, ee, ek, H, el]),
        eN = g[H.id] ?? iI,
        eC = i.useMemo(() => {
            var e, t;
            let n;
            return null != H.input
                ? ((e = H.input),
                  (t = x[H.id]),
                  (n = Q.trim()),
                  {
                      kind: "entities",
                      entities: eN,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eN.map((t) => (t.name.startsWith(a7[e]) ? t.name : `${a7[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [Q, x, eN, H.id, H.input]),
        eA = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [H.id]: e })), j((e) => ({ ...e, [H.id]: t })));
            },
            [H.id],
        ),
        eS = i.useCallback(() => w(!0), []),
        eE = i.useCallback(() => w(!1), []),
        eI = er.controlsFor(H, G),
        eM = i.useCallback(() => {
            if (null != eC) {
                "" !== eC.text && ev(eC);
                return;
            }
            if (null != ew) {
                "" !== ew.text && ev(ew);
                return;
            }
            let e = Q.trim();
            "" !== e && ev({ kind: "custom", text: e });
        }, [Q, ew, eC, ev]),
        [e_, eR] = i.useState(!1),
        [eP, eT] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eR(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eL = i.useCallback(() => {
            null != s && (eT(!0), setTimeout(s, 150));
        }, [s]),
        e$ = i.useMemo(
            () =>
                null != eC
                    ? "" !== eC.text
                        ? eC
                        : null
                    : null != ew
                      ? "" !== ew.text
                          ? ew
                          : null
                      : "" !== Q.trim()
                        ? { kind: "custom", text: Q.trim() }
                        : (o[H.id] ?? null),
            [o, Q, ew, eC, H.id],
        ),
        eD = null != e$ && !G,
        ez = K === B - 1,
        eO = i.useCallback(() => {
            null == e$ || G || ev(e$);
        }, [G, e$, ev]),
        eq = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, en.vq)(e.target, HTMLTextAreaElement) ||
                    (0, en.vq)(e.target, HTMLInputElement) ||
                    ((!(0, en.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eb
                            ? (e.preventDefault(), ej())
                            : "ArrowRight" === e.key && eD && (e.preventDefault(), eO())));
            },
            [eb, eD, ej, eO],
        ),
        eF = et
            ? null
            : (0, a.jsxs)("div", {
                  className: iu.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: iu.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(aJ.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(rT.y, {
                          value: Q,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [H.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eM());
                          },
                          placeholder: E.intl.string(a5(H) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                          "aria-label": E.intl.formatToPlainString(S.default["4JeYPB"], { question: H.question }),
                          disabled: G,
                          rows: 1,
                          className: iu.Pu,
                          "data-conjure-clarification-other": H.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: h()(iu.$O, { [iu.fI]: e_ && !eP, [iu.Oh]: eP }),
        role: "dialog",
        "aria-label": H.question,
        "data-conjure-clarification": l.id,
        "data-state": G ? "inert" : "open",
        "data-question-expanded": Z ? "true" : void 0,
        "data-picker-open": k && !$ ? "true" : void 0,
        "data-step": K,
        tabIndex: -1,
        onKeyDown: eq,
        children: [
            (0, a.jsxs)("div", {
                className: iu.rf,
                style: null == T ? void 0 : { height: T.heading + T.rows },
                "data-moving": $ ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: z,
                        className: iu.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: q,
                                tag: "span",
                                id: `${H.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: Z ? void 0 : 5,
                                className: h()(aV.TK, iu.R_, { [iu.TB]: "exit" === eu, [iu.JU]: "enter" === eu }),
                                children: es,
                            }),
                            ed || Z
                                ? (0, a.jsx)("div", {
                                      className: aV.Q7,
                                      children: (0, a.jsx)(N.m, {
                                          text: em,
                                          children: (0, a.jsx)(eK.K, {
                                              icon: Z ? tX.t : t7.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => X({ id: H.id, expanded: !Z }),
                                              "aria-label": em,
                                              "aria-controls": `${H.id}-label`,
                                              "aria-expanded": Z,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(C.D, {
                                      className: h()(aV.gb, aV.Q7),
                                      onClick: eL,
                                      "aria-label": E.intl.string(S.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(eo.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: iu.Cg,
                        style: null == T ? void 0 : { insetBlockStart: T.heading },
                        children: (0, a.jsxs)("div", {
                            className: iu.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: F,
                                    className: iu.Ge,
                                    role: "group",
                                    "aria-labelledby": `${H.id}-label`,
                                    "data-direction": M?.direction,
                                    "data-parity": null == M ? void 0 : M.moves % 2,
                                    children: [
                                        ee
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: iu.aK,
                                                  children: E.intl.string(S.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(iS, {
                                            projectId: n,
                                            question: H,
                                            selected: el,
                                            disabled: G,
                                            onPick: (e) =>
                                                ee
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [H.id]:
                                                                  ((n = t[H.id] ?? iE),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  H.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ey(e),
                                            own: eI,
                                        }),
                                        null != H.input
                                            ? (0, a.jsx)(ip, {
                                                  projectId: n,
                                                  question: H,
                                                  value: eN,
                                                  disabled: G,
                                                  onChange: eA,
                                                  onFocus: eS,
                                                  onBlur: eE,
                                                  fallback: !1 === H.allow_custom ? eF : null,
                                              })
                                            : null,
                                        !0 === H.link && eN.length > 0 && null == b[H.id]
                                            ? (0, a.jsx)("div", {
                                                  className: iu.X_,
                                                  children: (0, a.jsx)(aQ.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: E.intl.string(S.default.eCzCxC),
                                                      disabled: G,
                                                      onClick: () => y((e) => ({ ...e, [H.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === H.link && eN.length > 0 && null != b[H.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: iu.$y,
                                                  onFocus: eS,
                                                  onBlur: eE,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: E.intl.string(S.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(a2, {
                                                          label: E.intl.string(S.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: b[H.id] ?? "auto",
                                                          disabled: G,
                                                          onChange: (e) => y((t) => ({ ...t, [H.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        !1 === H.allow_custom ? null : eF,
                                    ],
                                }),
                                null == R
                                    ? null
                                    : (0, a.jsx)(
                                          iM,
                                          {
                                              projectId: n,
                                              question: R.question,
                                              draft: R.draft,
                                              selected: R.selected,
                                              ownImage: R.ownImage,
                                              ownSelected: R.ownSelected,
                                              direction: R.direction,
                                              disabled: G,
                                          },
                                          R.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            B > 1 || ee || et || null != H.input || a5(H)
                ? (0, a.jsxs)("div", {
                      className: aV.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  B > 1
                                      ? E.intl.formatToPlainString(S.default.yzYUjq, { index: K + 1, total: B })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: aV.zt,
                              children: [
                                  eb
                                      ? (0, a.jsx)(aQ.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: E.intl.string(S.default.Pk5lfA),
                                            onClick: ej,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(W.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(ez ? E.t.geKm7t : S.default.w1nRmT),
                                      disabled: !eD,
                                      onClick: eO,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": ez ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var iR = n(557744),
    iP = n(223347),
    iT = n(894443),
    iL = n(525530),
    i$ = n(564963);
let iD = new Set(["select", "channel", "role", "user"]);
function iz(e, t) {
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
function iO(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
let iq = new Set(),
    iF = new Set();
function iU(e) {
    return (
        iF.add(e),
        () => {
            iF.delete(e);
        }
    );
}
function iG() {
    return i.useSyncExternalStore(iU, () => iq);
}
function iB(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, ab.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function iK(e, t, n) {
    if (!n || null == t) return !1;
    let l = iO(e, t);
    return l.length > 0 && !iz({ keys: l }, t);
}
var iH = n(1665),
    iW = n(360236),
    iV = n(411236);
function iX(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: c,
            summary: d,
            markSaved: m,
        } = (function (e, t, n) {
            let l = iG(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!iq.has(n)) for (let e of ((iq = new Set([...iq, n])), iF)) e();
                    } else a(!0);
                }, [n]),
                c = (0, o.bG)([e1.A], () => iK(t, e1.A.getSettings(e), s), [e, t, s]);
            return {
                done: c,
                superseded: (0, o.bG)([lh.A], () => null != n && iB(lh.A.getMessages(e)).has(n), [e, n]),
                summary: (0, o.yK)(
                    [e1.A, a3.A],
                    () => {
                        var n;
                        let l = e1.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => a3.A.getChannel(e)?.name ?? null),
                              iO(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: E.intl.formatToPlainString(S.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return E.intl.string(S.default.CJq1rY);
                                                      case "checkbox":
                                                          return E.intl.string(
                                                              !0 === t ? S.default.nXtpn3 : S.default["0vfaMW"],
                                                          );
                                                      case "select":
                                                          return l
                                                              .map(
                                                                  (t) =>
                                                                      e.options?.find((e) => e.value === t)?.label ?? t,
                                                              )
                                                              .join(", ");
                                                      case "channel":
                                                          return l
                                                              .map((e) => {
                                                                  let t = n(e);
                                                                  return null != t
                                                                      ? `#${t}`
                                                                      : E.intl.string(S.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "role":
                                                      case "user":
                                                          return E.intl.string(S.default.Fw9G9A);
                                                      default:
                                                          return l.join(", ");
                                                  }
                                              })(t, r, n),
                                          }),
                                      },
                                  ];
                              })).map((e) => e.text);
                    },
                    [e, t],
                ),
                markSaved: u,
            };
        })(t, n, l),
        f = null == r && u;
    if (c && !f)
        return (0, a.jsx)("article", {
            className: iV.Mk,
            children: (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: E.intl.string(S.default["+uXDk+"]),
            }),
        });
    if (f)
        return (0, a.jsxs)("article", {
            className: iV.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: iV.Ol,
                    children: [
                        (0, a.jsx)(ni.y, { size: "xs", color: w.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: E.intl.string(S.default.AxBLLy),
                        }),
                    ],
                }),
                d.length > 0
                    ? (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: d.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let g = null != n.note && "" !== n.note ? n.note : E.intl.string(S.default.XuOf5s);
    return (0, a.jsx)(iW.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: s,
        onSaved: m,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: l, submit: i } = e;
            async function s(e) {
                (e.preventDefault(), await i());
            }
            let o = (0, a.jsx)(W.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: E.intl.string(S.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: iV.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(S.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(iH.A, { text: g, variant: "text-sm/normal", color: "text-default" }),
                          t,
                          (0, a.jsx)("div", { className: iV.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: h()(aV.nd, aV.jx),
                      "aria-label": E.intl.string(S.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: aV.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: aV.TK,
                                      children: E.intl.string(S.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(C.D, {
                                      className: h()(aV.gb, aV.Q7),
                                      onClick: r,
                                      "aria-label": E.intl.string(S.default["iq+Pte"]),
                                      children: (0, a.jsx)(eo.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: iV.DQ,
                              children: [
                                  (0, a.jsx)(iH.A, { text: g, variant: "text-sm/normal", color: "text-default" }),
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: aV.qr,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: iV.xE,
                                      children: E.intl.string(S.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: aV.zt,
                                      children: [
                                          (0, a.jsx)(W.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: E.intl.string(S.default["9J3OG8"]),
                                          }),
                                          o,
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    });
}
var iZ = n(935208),
    iY = n(932111),
    iJ = n(404373),
    iQ = n(435558),
    i0 = n.n(iQ);
let i1 = "ConjureComposerDrafts";
function i2() {
    return B.w.get(i1) ?? {};
}
let i3 = new Map(),
    i4 = i0().throttle(() => {
        if (0 === i3.size) return;
        let e = i2();
        for (let [t, n] of i3) "" === n ? delete e[t] : (e[t] = n);
        (i3.clear(), B.w.set(i1, e));
    }, 1e3);
class i5 extends o.Ay.Store {
    getDraft(e) {
        let t = i3.get(e);
        return null != t ? t : (i2()[e] ?? "");
    }
}
let i6 = new i5(tA.h, {
    LOGOUT: function () {
        return (i3.clear(), i4.cancel(), B.w.remove(i1), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (i3.set(t, n), i4(), "" === n && i4.flush(), !1);
    },
});
function i7(e) {
    return "" !== i6.getDraft(e).trim();
}
var i8 = n(29080);
function i9(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, aj.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, aj.Lf)(r) }),
    };
}
var se = n(62617);
let st = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    sn = {
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
    sl = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, se.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, se.Z)(),
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
                        () => (0, se.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, se.Z)(),
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
                        () => (0, se.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, se.Z)(),
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
                        () => (0, se.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, se.Z)(),
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
                        () => (0, se.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, se.Z)(),
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
                        () => (0, se.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, se.Z)(),
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
                        () => (0, se.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, se.Z)(),
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
                        () => (0, se.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, se.Z)(),
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
                        () => (0, se.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, se.Z)(),
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
                        () => (0, se.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, se.Z)(),
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
                        () => (0, se.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, se.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function sr(e) {
    return { ...sl[e], name: E.intl.string(sn[e]()) };
}
function sa(e) {
    return st.includes(e) ? sr(e) : void 0;
}
function si(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % st.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, st[(t + n) % st.length]);
            }),
            l
        );
    })(e))
        t.set(n, sr(l));
    return t;
}
var ss = n(615839);
function so(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.KcFvbo);
}
var su = n(60160),
    sc = n(16634);
function sd(e) {
    let t = (0, aj.SY)(e.steps);
    return null != t ? (0, aj.WQ)(t) : so(e.task);
}
function sm(e) {
    let t = si(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? sa(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: so(e.task),
                      todoId: e.task.todoId,
                      line: sd(e),
                  },
              ];
    });
}
function sf(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, aj.SY)(n.steps),
        d = u
            ? sd(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(so(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, ss.MB)(e.durationMs),
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
                                    className: aO.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            sc.A,
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
                                      className: aO.iq,
                                      children: (0, a.jsx)(su.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(aN.A, {
        glyph: (0, a.jsx)(aC.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: so(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: aO.nC,
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
var sh = n(998445),
    sg = n(643210),
    sp = n(648127),
    sx = n(372795),
    sv = n(163897);
let sj = "conjure-browser-viewer";
function sb(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [sg.A],
            () =>
                n.flatMap((e) => {
                    let n = sg.A.getTab(t, e);
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
        className: sv.kR,
        "aria-label": E.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(sy, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function sy(e) {
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
        u = (0, e7.useHasModalOpen)(sj),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        g = (0, sp.i)(l.session);
    return (0, a.jsxs)(C.D, {
        innerRef: s,
        className: h()(sv.Nr, f && sv.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, e7.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: sj },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(S.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: sv.Gt,
                children: [
                    (0, a.jsx)(sx.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: sv.Ji,
                        "aria-label": E.intl.formatToPlainString(S.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: sv.qf,
                              children: (0, a.jsx)(sh.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: sv.HS,
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
                className: sv.pG,
                children: [
                    (0, a.jsx)("span", { className: h()(sv.W9, f && sv.oM) }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: g,
                    }),
                ],
            }),
        ],
    });
}
var sk = n(268409);
let sw = new WeakMap(),
    sN = new WeakMap();
function sC(e) {
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
                    let t = sw.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = sN.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), sN.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (sw.set(e, n), n);
                })(lh.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: sk.h, children: (0, a.jsx)(sb, { projectId: t, sessionIds: u }) });
}
var sA = n(469393);
function sS(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, lA.lG)(t.authored_at);
    return (0, a.jsx)(aE, {
        title: E.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: sA.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sA.z,
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
                    ? (0, a.jsx)(W.$, {
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
var sE = n(155718);
function sI(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let sM = ["command", "user_command", "message_command", "message"],
    s_ = new Set([sE.kc.CHAT, sE.kc.USER, sE.kc.MESSAGE]);
function sR(e) {
    return e.type ?? sE.kc.CHAT;
}
function sP(e) {
    return s_.has(sR(e));
}
function sT(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function sL(e, t) {
    let n = sM.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !sT(e)), ...n.filter(sT)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || sT(r) || l.push(r);
    }
    return sM.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function s$(e, t, n) {
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
    let s = e.commands.filter(sP).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (sR(e)) {
                    case sE.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case sE.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(sT),
        u = a.length > 0 ? sL([...a, ...o], !0) : sL("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var sD = n(377941),
    sz = n.n(sD);
function sO(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function sq(e) {
    return e.type === sE.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === sE.kc.USER || e.type === sE.kc.MESSAGE
          ? ""
          : "/";
}
let sF = {
        [lM.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [lM.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [lM.q7.ACTIVITY]: S.default["3/aHX6"],
        [lM.q7.OVERLAY]: S.default["rPpf5/"],
        [lM.q7.PROFILE_WIDGET]: null,
        [lM.q7.AUTOMOD]: null,
        [lM.q7.BOT]: null,
        [lM.q7.APPLICATION_COMMANDS]: null,
    },
    sU = [lM.q7.ACTIVITY, lM.q7.APP_CHANNEL, lM.q7.VOICE_CHANNEL, lM.q7.OVERLAY];
function sG(e) {
    return sU.find((t) => sI(e, t)) ?? null;
}
var sB = n(176999),
    sK = (((l = {}).IMAGE = "image"), l),
    sH = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    sW = n(598748),
    sV = n(773669);
let sX = [],
    sZ = {},
    sY = {};
function sJ(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function sQ(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: sK.IMAGE,
        visibility: sH.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var s0 = n(127258),
    s1 = n(803306),
    s2 = n(320095),
    s3 = n(963852),
    s4 = n(95701),
    s5 = n(889227),
    s6 = n(427262);
let s7 = new s4.nA({ id: "1337", guild_id: "1337", type: D.rbe.GUILD_TEXT, name: "preview" });
function s8(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([a4.default], () => a4.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, s1.nj)(new s5.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let s9 = /^@\S+/;
var oe = n(97808),
    ot = n(778712),
    on = n(46054),
    ol = n(200700);
let or = {
        alert: { label: () => E.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    oa = {
        blocked: { label: () => E.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(S.default.RGzFNK), tone: "green" },
    },
    oi = ["blocked", "alert", "allowed"],
    os = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function oo(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, ol.getFriendlyDurationString)(n))
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
var ou = n(984097),
    oc = n(13673);
let od = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function om(e) {
    let { example: t } = e,
        n = oo(t);
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
let of = ["glazedgamer", "sprinkles", "donutking"];
function oh(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = or[n.outcome];
    return (0, a.jsxs)("li", {
        className: h()(ou.nM, { [h()(ou.HV, oc.DX)]: s }),
        children: [
            (0, a.jsx)(aA.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: ou.my,
                children: (0, a.jsx)(oe.eu, {
                    src: (0, X.AE)(void 0, void 0),
                    size: ot._3.SIZE_24,
                    "aria-label": E.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ou.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), on.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(om, { example: n }) : null,
                ],
            }),
        ],
    });
}
function og(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = oa[t.section],
        s = new Set(t.examples.map(oo)),
        o = 1 === s.size ? t.examples.map(oo)[0] : null;
    return (0, a.jsxs)("div", {
        className: ou.UO,
        children: [
            (0, a.jsxs)("div", {
                className: ou.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: od[r.tone],
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
                                      className: ou.IQ,
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
                className: ou.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(oh, { example: e, username: of[(n + t) % of.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function op(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            oi
                .map((e) => ({ section: e, examples: t.filter((t) => os[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: ou.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: ou.hk,
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
                    og,
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
var ox = n(276293),
    ov = n(460905),
    oj = n(110384),
    ob = n(633018),
    oy = n(763754),
    ok = n(217424),
    ow = n(194085),
    oN = n(20851),
    oC = n(692508),
    oA = n(798819);
function oS(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: h()(oA.item, oA.labelContainer, oA.colorDefault, {
            [oA.focused]: !0 === t.highlighted,
            [oA.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: oA.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: oA.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: h()(oA.label, oC.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: oA.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: oA.icon }),
                  })
                : null,
        ],
    });
}
function oE(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: h()(t, oC.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: oj.W, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: h()(oA.menu, oC.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: oA.scroller,
            children: [
                (0, a.jsx)(oS, { item: s }),
                (0, a.jsx)("div", { className: oA.separator }),
                (0, a.jsx)(oS, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var oI = n(381941);
function oM() {}
function o_(e) {
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
        g,
        { projectId: p, exchanges: x } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, o.bG)([a4.default], () => a4.default.getCurrentUser())),
        (n = (0, o.bG)([eL.Ay], () => eL.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, o.bG)([tn.A], () => tn.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(S.default.JEYq8M)),
        (u = (0, o.bG)([a4.default], () => (null != l ? a4.default.getUser(l) : void 0), [l])),
        (d = s8("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = s8("31338", E.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (g = s8("31339", (0, s6.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == m || null == f
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
                                      i = (0, s2.rh)({
                                          ...(0, s3.Ay)({
                                              channelId: s7.id,
                                              content: e,
                                              author: t,
                                              type: l ?? D.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: D.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: s0.G.APPLICATION_COMMAND,
                                                        user: (0, s3.Vi)(s),
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
                                              messageType: D.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: D.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(s9, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              x,
                              { bot: m, currentUser: t, viewer: g, member: f },
                              {
                                  targetMessage: E.intl.string(S.default["y+QYes"]),
                                  memberMessage: E.intl.string(S.default.BUTRDc),
                              },
                          ),
                [x, m, t, g, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = s7.name;
    return (0, a.jsxs)("div", {
        className: oC.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: oC.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ox.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: h()(oC.TE, `group-spacing-${oI.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? oC.Rz : void 0,
                            children: [
                                (0, a.jsx)(oN.A, {
                                    message: n,
                                    channel: s7,
                                    author: (0, oy.FT)(n.author, s7),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(ok.A, { message: n, channel: s7 }) : void 0,
                                    usernameClassName: r?.target === "user" ? oC.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: oC.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(ow.Ay, {
                                              children: [
                                                  (0, a.jsx)(ow.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: ov.n,
                                                      onClick: oM,
                                                  }),
                                                  (0, a.jsx)(ow.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: oj.W,
                                                      onClick: oM,
                                                  }),
                                                  (0, a.jsx)(ow.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: eH.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: oM,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? oC.ET : oC.je,
                                          inert: !0,
                                          children: (0, a.jsx)(oE, {
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
                className: oC.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ob.k, { size: "sm", color: "currentColor" }),
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
var oR = n(332173);
function oP(e) {
    let { name: t } = e;
    return (0, a.jsxs)(oR.A, { children: ["/", t] });
}
function oT(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(sz());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(oP, { name: e.name }, e.start) : e.text));
}
n(827669);
var oL = n(757789),
    o$ = n(26137);
let oD = {
    frame: S.default.Z2bt4u,
    overlay_widget: S.default["0mGHfU"],
    user_widget: S.default.Jipr29,
    bot: S.default.EbvC13,
    commands: S.default.EbvC13,
    automod: S.default.tiMvei,
};
var oz = n(573634);
let oO = {
    frame: Z.GameControllerIcon,
    overlay_widget: oL.V,
    user_widget: o$.r,
    bot: ee.RobotIcon,
    commands: ee.RobotIcon,
    automod: Q.ShieldIcon,
};
function oq(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: h()(oz.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function oF(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: oz.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: oz.jw,
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
function oU(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: oz.lj,
        children: [
            (0, a.jsx)("span", {
                className: h()(oz.Vo, oz.G),
                children: (0, a.jsx)(Y.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: oz.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function oG(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: oz.wZ,
        children: t.map((e, t) => {
            let n = sq(e),
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
                                ? (0, a.jsx)(oP, { name: e.name })
                                : (0, a.jsx)(oR.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function oB(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: oz.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: oz.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(oT, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function oK(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? Y.k : oO[t.kind],
        u = E.intl.string(s ? S.default.BM4Ymz : oD[t.kind]);
    return (0, a.jsxs)("section", {
        className: oz.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: oz.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: oz.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: oz.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(oT, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(oB, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: oz.PG, children: r }) : null,
        ],
    });
}
function oH(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: oz.aN,
        children: [
            (0, a.jsxs)("div", {
                className: oz.Lv,
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
                                let n = t.map(sz()).join("|");
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
                            (0, a.jsx)("div", { className: oz.yF, role: "separator" }),
                            (0, a.jsx)(oK, {
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
                                                if (t.surfaces.includes(lM.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(lM.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(lM.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        oq,
                                                        {
                                                            className: oz.Iw,
                                                            caption: E.intl.formatToPlainString(S.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: oz.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        oU,
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
                                                            oq,
                                                            {
                                                                caption: E.intl.string(S.default.MY6UGJ),
                                                                children: (0, a.jsx)(oF, { labels: r }),
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
                                                              oq,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(oG, { commands: e.commands }),
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
                                                            ? [{ key: t, caption: E.intl.string(n), labels: l.map(sO) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            oq,
                                                            { caption: n, children: (0, a.jsx)(oF, { labels: l }) },
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
var oW = n(633075),
    oV = n(946356),
    oX = n(58216),
    oZ = n(27399);
function oY(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([a4.default], () => a4.default.getCurrentUser()),
        r = i.useMemo(() => new oW.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: oZ.H,
              children: (0, a.jsx)(oV.A.Overlay, {
                  className: oZ.w,
                  children: (0, a.jsx)(oX.A, {
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
var oJ = n(443863);
function oQ(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = (0, ib._)(t, r),
        c = i.useCallback(() => {
            (0, eh.PK)(t, r).then(
                (e) => {
                    (0, ij.R)({
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
              className: oJ.xX,
              onClick: c,
              "aria-label": E.intl.string(S.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: oJ.sN, onError: u }) : null,
          });
}
function o0(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = sI(c, lM.q7.APPLICATION_COMMANDS)),
            (l =
                sI(c, lM.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(sP)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : s$(c, l, {
                              message: E.intl.string(S.default.J7qggf),
                              reply: E.intl.string(S.default.nqYtiy),
                              event: E.intl.string(S.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = sY } = t,
                r = (0, o.bG)([sV.default], () => sV.default.locale),
                a = (0, o.bG)([eL.Ay], () => {
                    let t = eL.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(sZ);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, eh.PK)(e, l.id).then(
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
                                                          ...sJ(n),
                                                          ...(null != n.fallback ? { fallback: sJ(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = sB.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[sW.m.WIDGET_TOP] || null == i[sW.m.WIDGET_BOTTOM]
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
                                                                    type: sB.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: sB.oG.NUMBER, value: a })
                                                                : (r[e] = { type: sB.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(sQ),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: sX,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(u, c),
        g = d?.superseded === !0,
        p = c.what_changed?.trim() ?? "",
        x =
            ((t = c.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === sq(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = sG(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(sP)
                    ? s$({ ...c, bot: void 0 }, "commands", {
                          message: E.intl.string(S.default.J7qggf),
                          reply: E.intl.string(S.default.nqYtiy),
                          event: E.intl.string(S.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([eL.Ay], () => eL.Ay.getProject(u)?.name, [u]),
        k =
            g && null != d
                ? E.intl.formatToPlainString(S.default.YZ3qJs, { version: d.version })
                : E.intl.string(S.default["3b6e7o"]),
        w = g ? (0, a.jsx)(aM, { children: E.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(a_, {
        title: k,
        meta: w,
        superseded: g,
        showLabel: E.intl.string(S.default.yD8EJS),
        hideLabel: E.intl.string(S.default.nSPGNb),
        bodyClassName: oJ.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: oJ.Qs,
                children: (0, a.jsx)(oH, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(oT, { text: c.summary, commandNames: x }),
                            }),
                            "" !== p
                                ? (0, a.jsxs)("section", {
                                      className: oJ.uW,
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
                                              children: (0, a.jsx)(oT, { text: p, commandNames: x }),
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
                                    ? (0, a.jsx)(oQ, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: E.intl.string(null == (t = sG(c)) ? S.default["3/aHX6"] : sF[t]),
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(oY, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(op, { automod: c.automod })
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
                                        (r = l.some((e) => "command" === e.kind || sT(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(o_, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: x,
                }),
            }),
            null == m || g
                ? null
                : (0, a.jsxs)("div", {
                      className: oJ.qr,
                      children: [
                          (0, a.jsx)(W.$, {
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
var o1 = n(289565);
function o2(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: o1.m, children: n })
        : (0, a.jsxs)("div", {
              className: o1.Z,
              children: [
                  n,
                  (0, a.jsx)(N.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(eK.K, {
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          icon: eo.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function o3(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "unpublished" === t.state);
}
function o4(e, t) {
    return null != e && o3(t, e.status);
}
let o5 = new WeakMap();
var o6 = n(175841),
    o7 = n(27232),
    o8 = n(505930),
    o9 = n(385081);
let ue = "conjurePublishRatings",
    ut = [1, 2, 3, 4, 5],
    un = { 1: S.default.GhbsGA, 2: S.default.cm0nwU, 3: S.default.kGvlh2, 4: S.default.dVBSUg, 5: S.default.DKlgF7 };
function ul(e) {
    return E.intl.string(un[e]);
}
let ur = new Set(),
    ua = 0;
function ui() {
    return B.w.get(ue) ?? {};
}
function us(e, t) {
    return ui()[e]?.[t] ?? null;
}
function uo(e) {
    return (ur.add(e), () => ur.delete(e));
}
function uu(e) {
    let { rating: t, ...n } = e,
        {
            text: l,
            setText: r,
            canSend: s,
            send: o,
        } = (function (e) {
            let [t, n] = i.useState("");
            return {
                text: t,
                setText: n,
                canSend: "" !== t.trim(),
                send: () => {
                    let n;
                    "" !== (n = t.trim().slice(0, 256)) && (0, o9.Fz)(e, n);
                },
            };
        })(t),
        u = E.intl.string(S.default.IqkF07);
    return (0, a.jsx)(e5.a, {
        ...n,
        title: u,
        actions: [
            {
                variant: "primary",
                text: E.intl.string(S.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (o(), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(re.f, {
            label: u,
            hideLabel: !0,
            placeholder: E.intl.string(S.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var uc = n(54100);
function ud(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: uc.mo,
        role: "status",
        children: [
            (0, a.jsx)(o6.SparklesIcon, { size: "xs", color: "currentColor", className: uc.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? E.intl.string(S.default["nIc9/M"])
                        : 3 === t
                          ? E.intl.string(S.default.ausj8U)
                          : E.intl.string(S.default.HilSjw),
            }),
        ],
    });
}
function um(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: o } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(uo, () => ua),
                {
                    rating: us(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != us(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, o9.gw)(i);
                            let s = ui();
                            return (B.w.set(ue, { ...s, [t]: { ...s[t], [n]: l } }), ua++, ur.forEach((e) => e()), i);
                        })({ projectId: t, turnId: n, rating: e, cta: l, status: r });
                        return null != a && e <= 2 ? a : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r }),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, g] = i.useState(!1),
        p = i.useId(),
        x = i.useId(),
        j = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!f) return;
            let e = setTimeout(() => g(!1), 420);
            return () => clearTimeout(e);
        }, [f]),
        null != s && !f)
    )
        return (0, a.jsx)(ud, { rating: s });
    let b = null != s,
        y = b ? s : (d ?? u),
        k = b || (null == d && null != u);
    function w(e) {
        if (b) return;
        (c(e), m(null), g(!0));
        let t = o(e);
        null != t && (0, e7.openModal)((e) => (0, a.jsx)(uu, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: uc.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: uc.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: x,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: h()(uc.Pf, { [uc.KH]: null == y }),
                        children: E.intl.string(S.default.mTV326),
                    }),
                    ut.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: h()(uc.Pf, { [uc.KH]: y === e }),
                                children: ul(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": x,
                className: uc.uf,
                children: ut.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? o7.StarIcon : o8.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: uc.uK,
                            onMouseEnter: () => {
                                b || m(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: p,
                                    value: e,
                                    checked: !1,
                                    onChange: () => {
                                        j.current ? c(e) : w(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((j.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), w(e)));
                                    },
                                    onKeyUp: () => {
                                        j.current = !1;
                                    },
                                    className: uc.hF,
                                    "aria-label": E.intl.formatToPlainString(S.default.NU7Dex, {
                                        rating: e,
                                        label: ul(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: h()(uc.d4, { [uc.cO]: t, [uc.Ng]: t && k }),
                                        children: (0, a.jsx)(n, {
                                            size: "xs",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    t && k ? `picked-${y}` : "idle",
                                ),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function uf(e) {
    let { projectId: t, publish: n } = e;
    return (0, a.jsx)("span", {
        ...{ [rh]: t },
        children: (0, a.jsx)(W.$, {
            variant: "primary",
            size: "sm",
            loading: n.publishing,
            text: n.label,
            onClick: () => rx(t),
        }),
    });
}
function uh(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, e0.Ay)(t);
    return null != r && o4(r, l)
        ? (0, a.jsx)(o2, {
              children: (0, a.jsxs)(e6.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(uf, { projectId: t, publish: r }),
                      null != n ? (0, a.jsx)(um, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var ug = n(303345),
    up = n(44255),
    ux = n(416473),
    uv = n(289830);
function uj(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, o.bG)(
                    [eL.Ay],
                    () => {
                        let t = eL.Ay.getProject(e);
                        return null != t && (0, eL.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                c = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, ux.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof ug.A ? e.message : E.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(S.default.orZDqY, { time: (0, up.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, up.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(aE, {
        title: E.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: uv.r,
            children: [
                (0, a.jsxs)("div", {
                    className: uv.z,
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
                    ? (0, a.jsx)(W.$, {
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
var ub = n(989271);
function uy(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(C.D, {
        className: h()(ub.nM, { [ub.f1]: s, [ub.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: ub.jo,
                children: [
                    n
                        ? (0, a.jsx)(nC.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ub.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ub.G9,
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
function uk(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(aE, {
        title: E.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                uy,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var uw = n(530557),
    uN = n(872162),
    uC = n(202723);
function uA(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, e7.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: uw.R })), [r.fields]),
        d = (0, i$.bB)(l, s),
        m = h()(uC.Lo, { [uC.jY]: d });
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
                        (0, a.jsx)(uN.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: uC.Lo,
                      children: (0, a.jsx)(uN.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
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
                                className: uC.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: uC.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(ni.y, {
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
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                selectable: !0,
                                children: r.fields
                                    .map((e) => e.label)
                                    .map((e) =>
                                        E.intl.formatToPlainString(S.default["Z+FC3j"], {
                                            label: e,
                                            value: E.intl.string(S.default.CJq1rY),
                                        }),
                                    )
                                    .join(" \xb7 "),
                            }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: uC.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: E.intl.string(null != o ? S.default.O0QIqj : S.default.HCQvpO),
                        }),
                        (0, a.jsx)(iH.A, {
                            text: null != r.note && "" !== r.note ? r.note : E.intl.string(S.default.MPGSHL),
                            variant: "text-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(uN.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: uC.sq,
                            children: (0, a.jsx)(W.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: E.intl.string(S.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var uS = n(919790),
    uE = n(908492),
    uI = n(971824),
    uM = n(162052),
    u_ = n(165648);
function uR(e) {
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
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = i.useMemo(() => (0, aj.Jf)(n, l), [n, l]),
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
            className: aO.pj,
            "data-live": !1,
            children: (0, a.jsx)(aN.A, {
                glyph: (0, a.jsx)(i8.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, aj.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = si(k.map((e) => e.taskId)),
        N = !g && (l || k.some((e) => "running" === e.task.status)),
        C = sm(k);
    return (0, a.jsxs)("ol", {
        className: aO.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(ak.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: j,
                connectsDown: k.length > 0,
                tier: x.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? sa(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          sf,
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
            (0, a.jsx)(sC, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: aO.YO,
                      children: (0, a.jsx)(aD, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function uP(e) {
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
            settingsRequest: g,
            settingsAskId: p,
            publishCta: x,
            turnId: j,
            onPickIdea: b,
            pickedIdeaIds: y,
            onApprovePlan: k,
            sideReply: w = !1,
            sideReplyAcknowledges: N,
            hoistedProse: C = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: I,
            onRestoreProposal: M,
            publishScheduleProposal: _,
            publishScheduleProposalCurrent: R = !1,
        } = e,
        P = i.useMemo(
            () => i9({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: T, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = P,
        z = (C ? A : void 0) ?? P.attachmentsHost,
        O = $ && !C,
        q = null == u ? null : (0, a.jsx)(uS.A, { projectId: t, attachments: u }),
        F = null == q ? null : (0, a.jsx)("div", { className: aO.MT, children: q }),
        U = w
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
                  })(N),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: aO.ue,
        children: [
            T.length > 0 && !C
                ? (0, a.jsx)("ol", {
                      className: aO.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: aO.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: u_.PT,
                                          children: (0, uE.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === z && e === L ? F : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(o0, { projectId: t, proposal: r, version: s, onApprove: k })
                : O
                  ? (0, a.jsxs)("div", {
                        className: h()(aO.ky, uM.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: h()(u_.PT, aO.cW),
                                children: (0, uE.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === z ? F : null,
                            U,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: h()(aO.ky, uM.XR, { [uI.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(uA, {
                          projectId: t,
                          cardId: d ?? "",
                          request: c,
                          status: f,
                          awaiting: "open" === f ? m : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, a.jsx)("div", {
                      className: h()(aO.ky, uM.XR),
                      children: (0, a.jsx)(iX, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== z && ("closing" !== z || O) ? null : q,
            null != x ? (0, a.jsx)(uh, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(uk, { ideas: o, pickedIdeaIds: y, onPick: b }) : null,
            null != I ? (0, a.jsx)(sS, { proposal: I, onRestore: M }) : null,
            null != _ ? (0, a.jsx)(uj, { projectId: t, proposal: _, current: R }) : null,
            O ? null : U,
        ],
    });
}
var uT = n(864970),
    uL = n(146806),
    u$ = n(475358),
    uD = n(717400),
    uz = n(99677),
    uO = n(655098),
    uq = n(234320),
    uF = n(191023);
function uU(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(tU.p, {
        name: E.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: lu.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(uF.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: lu.OY,
                    children: (0, a.jsx)(aJ.PencilIcon, {
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
            className: tB.o1,
            onClick: () => {
                lr(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": E.intl.string(S.default.N852dj),
            children: (0, a.jsx)(tC.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function uG(e) {
    let { send: t } = e;
    return (0, a.jsxs)(tU.p, {
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
            "uploading" === t.status ? (0, a.jsx)(tN.y, { type: tN.t.SPINNING_CIRCLE_SIMPLE, className: tB.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(aQ.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: E.intl.string(S.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var uB = n(901173),
    uK = n(161431),
    uH = n(280450),
    uW = n(503275),
    uV = n(659280),
    uX = n(351906),
    uZ = n(407653),
    uY = n(322915);
function uJ(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([uX.A], () => uX.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      uV.Ay.User,
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
                      uV.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(uZ.A, { projectId: n, file: e.file, className: uY.Vk }),
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        f = l.findIndex((e) => "file" === e.kind),
        h = -1 === f ? m : m.slice(0, f),
        g = -1 === f ? [] : m.slice(f);
    return (0, a.jsx)(uV.Ay, {
        id: t,
        className: uY.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(uQ, { titleId: c, title: E.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(uQ, { titleId: d, title: E.intl.string(S.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function uQ(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: uY.Gf, children: n }),
            l,
        ],
    });
}
var u0 = n(719442),
    u1 = n(355622),
    u2 = n(408018),
    u3 = n(186306),
    u4 = n(323350),
    u5 = n(35277),
    u6 = n(820066),
    u7 = n(683167),
    u8 = n(267102),
    u9 = n(259691);
let ce = (0, s4.createChannelRecord)({ id: "1", type: D.rbe.DM });
function ct(e) {
    let t = u6.VW.end(e, []);
    return { anchor: t, focus: t };
}
function cn(e) {
    return (0, u4.WO)(u6.VW.richValue(e), { mode: "raw" });
}
function cl(e, t) {
    ((e.children = (0, u2.x7)(t)), (e.selection = ct(e)), e.onChange());
}
function cr(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(iY.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(u9.A, { attachmentId: r }), n] });
}
var ca = n(497437);
let ci = "text-md/normal",
    cs = null;
function co(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, f] = i.useState(0),
        [g, p] = i.useState(0),
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
            (p(i + a), f(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                m = 0 === d ? 1 : s / d,
                h = 0 === d ? 1 : o / d;
            j({
                frontFrom: 1e3 * (0, uL._R)(m),
                frontTo: 1e3 * (0, uL._R)(h),
                backFrom: 1e3 * (0, uL.T)(m),
                backTo: 1e3 * (0, uL.T)(h),
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
        M = (0, o.bG)([V.Ay], () => V.Ay.useReducedMotion),
        _ = t === E.intl.string(S.default.Zc7gML),
        R = r === t && _;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: h()(ca.VT, { [ca.qk]: l }),
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
            children: (0, a.jsx)(u$.e, { shortcut: "tab", className: ca.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(uT.o, {
                text: t,
                variant: ci,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: h()(ca.xM, { [ca.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            P(ca.IS, n || (!M && "out" === k), u),
            (0, a.jsx)("span", {
                ref: c,
                className: ca.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: ci, tag: "span", children: t }),
            }),
            R
                ? (0, a.jsxs)("span", {
                      className: ca.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: ci, tag: "span", className: ca.xM, children: t }),
                          P(ca.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let cu = i.memo(function (e) {
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
                suggestion: g,
                questionOpen: p = !1,
                hasPendingContext: x = !1,
                onDraftHasTextChange: v,
                modelSettings: j,
                onModelSettingsChange: b,
            } = e,
            y = (function (e) {
                let t = i.useContext(u8.Ay),
                    [n] = i.useState(() => {
                        let n = (0, u0.ie)();
                        return (
                            (n.children = (0, u2.x7)(e)),
                            (n.selection = ct(n)),
                            (0, u7.a)({
                                editor: n,
                                chatInputType: u1.oU.GENERIC_RICH_TEXTAREA,
                                channel: ce,
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
                                    for (let [t, l] of u6.VW.nodes(e, { at: [], match: u6.l5.isText }))
                                        for (let e of t.text.matchAll(iY.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        u3.o.withMergedEntry(e, () =>
                                            u6.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    u5.b.textToVoid(
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
            })(i6.getDraft(t)),
            [k, w] = i.useState(() => cn(y)),
            C = i.useRef(k),
            [A, I] = i.useState(null),
            M = i.useCallback(() => {
                let e = cn(y);
                e !== C.current &&
                    ((C.current = e),
                    tA.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }),
                    w(e));
                I(
                    (function (e) {
                        let { selection: t } = e;
                        if (null == t || !u6.ZF.isCollapsed(t)) return null;
                        let [n] = u6.VW.node(e, t.anchor.path);
                        return u6.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                    })(y),
                );
            }, [y, t]),
            R = i.useCallback((e) => cl(y, e), [y]),
            P = "" !== k.trim();
        i.useEffect(() => v?.(P), [P, v]);
        let T = i.useRef(t);
        i.useLayoutEffect(() => {
            T.current !== t && ((T.current = t), cl(y, i6.getDraft(t)));
        }, [y, t]);
        let L = (0, o.bG)([V.Ay], () => V.Ay.isSubmitButtonEnabled),
            [$, z] = i.useState(!1);
        i.useEffect(() => {
            l || z(!1);
        }, [l]);
        let O = i.useRef(null),
            {
                drafts: q,
                addFiles: F,
                pasteFiles: U,
                removeDraft: G,
                settled: B,
                takeRefs: K,
            } = tW({ projectId: t, surface: "chat", onUploadFile: c }),
            H = lt.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && n8(n);
            }),
            W = "" !== k.trim() || q.length > 0 || x || H,
            X = n && W && B,
            [Z, Y] = i.useState(null);
        i.useEffect(() => {
            if (null == Z) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => Y(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [Z]);
        let J = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: c } =
                        ((t = (0, o.bG)([eL.Ay], () => eL.Ay.getProject(e), [e])),
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
                            null != l && ((0, uW.Y_)(l), r.forEach(uW.Y_));
                        }, [l, r]),
                        (a = (0, o.bG)([a4.default], () => (null == l ? null : a4.default.getUser(l)), [l])),
                        (s = (0, o.yK)(
                            [a4.default],
                            () => r.map((e) => a4.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    d = (0, o.bG)([uH.default], () => uH.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...c].filter((e) => e.id !== d && !e.bot),
                    [u, c, d],
                );
            })(t),
            Q = (0, uK.rU)(t),
            [ee, et] = i.useState(null),
            [en, el] = i.useState(0),
            er = i.useMemo(() => (null != A && n ? (0, uB.OG)(A, A.length) : null), [A, n]),
            ea = er?.start ?? null;
        i.useEffect(() => {
            null == ea ? et(null) : (0, uK.IP)(t);
        }, [ea, t]);
        let ei = ea === ee ? null : er,
            es = i.useMemo(() => (null == ei ? [] : (0, uB.l$)(J, Q, ei.text)), [ei, J, Q]),
            eo = ei?.text;
        i.useEffect(() => el(0), [eo]);
        let em = es.length > 0,
            ef = Math.min(en, Math.max(0, es.length - 1)),
            eg = i.useId(),
            ep = i.useCallback(
                (e) => {
                    let t = es[e];
                    null != ei &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (u5.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                u5.b.insertText(e, `${n} `));
                        })(y, ei.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [es, ei, y],
            ),
            ex = i.useCallback(() => {
                if (!X) return;
                let e = K(),
                    n = H
                        ? (function (e) {
                              let t = ll(e);
                              if (null == t || !n8(t)) return null;
                              let n = t.history.present,
                                  l = au(e);
                              return (
                                  lr(e, (e) => ({ ...e, history: nQ, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, _.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (aa.set(i, s),
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
                                              capture: (t) => (0 === t ? l : au(e)),
                                              composite: (e) => al(e, n),
                                              upload: (t) =>
                                                  (0, eh.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, eh.n6)(e, t.id),
                                              send: (n) => (0, _.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      as(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (aa.delete(i),
                                                          window.setTimeout(() => {
                                                              (as(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                s(k, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == cs && (cs = document.createElement("canvas").getContext("2d"));
                    let i = cs;
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
                })(cd(eN.current), e$.current, (0, uB.Lj)(k));
                ("" !== l && Y(l), R(""), et(null));
            }, [X, H, t, k, s, K, R]),
            ev = i.useCallback(
                (e) => {
                    (e.preventDefault(), ex());
                },
                [ex],
            ),
            ej = i.useCallback(() => {
                null == u || $ || (z(!0), u());
            }, [u, $]),
            eb = null == g || "" !== k || !n || r || x ? null : g,
            ey = i.useCallback(
                (e) => {
                    if (em && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = es.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), el((ef + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ep(ef));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), et(ei?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && l && null != u && !$) {
                        (e.preventDefault(), e.stopPropagation(), ej());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eb) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), R(eb));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ex());
                },
                [ex, d, l, u, $, ej, eb, R, em, es.length, ef, ep, ei],
            ),
            ek = i.useCallback(
                (e) => {
                    n && U(e);
                },
                [n, U],
            );
        (0, uq.Vo)({
            event: D.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ek(t);
            },
        });
        let ew = i.useCallback(
                (e) => {
                    (F(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [F],
            ),
            eN = i.useRef(null),
            eC = i.useRef(null),
            eA = i.useCallback(() => {
                let e = C.current;
                f?.((0, uB.Lj)(e), () => {
                    C.current === e && R("");
                });
            }, [f, R]),
            eS = i.useCallback((e) => {
                let t = O.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [eE, eI] = i.useState(0),
            [eM, e_] = i.useState(!1);
        i.useEffect(() => {
            if (0 === k.length) return void e_(!1);
            let e = cd(eN.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eI(t);
            }
            e_(!0);
            let t = setTimeout(() => e_(!1), cc);
            return () => clearTimeout(t);
        }, [k]);
        let eR = i.useMemo(() => ({ "--custom-glow-x": `${eE}px` }), [eE]),
            eP = eM ? ` ${ca.EB}` : "",
            eT = r
                ? E.intl.string(S.default.qqlUiW)
                : n
                  ? x
                      ? E.intl.string(S.default.knUjL3)
                      : p
                        ? E.intl.string(S.default.IevBEw)
                        : E.intl.string(l ? S.default["0BJa/0"] : S.default.TEeU7z)
                  : E.intl.string(S.default.zZ9NgM),
            e$ = i.useRef(0),
            eD = i.useRef(null),
            ez = i.useCallback((e) => {
                if ((eD.current?.disconnect(), null == e)) return;
                e$.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    e$.current = e.clientWidth;
                });
                (t.observe(e), (eD.current = t));
            }, []),
            eO = i.useId(),
            eq = i.useId(),
            eF = null != eb,
            eU = Z ?? eb ?? eT,
            eG = "" === k && "" !== eU;
        return (0, a.jsxs)("form", {
            onSubmit: ev,
            className: ca.DA,
            children: [
                em
                    ? (0, a.jsx)(uJ, {
                          id: eg,
                          projectId: t,
                          suggestions: es,
                          selectedIndex: ef,
                          onHover: el,
                          onSelect: ep,
                      })
                    : null,
                q.length > 0 || H
                    ? (0, a.jsxs)("div", {
                          className: ca.lN,
                          children: [
                              q.map((e) => (0, a.jsx)(tV, { draft: e, onRemove: G }, e.localId)),
                              H ? (0, a.jsx)(uU, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${ca.wg} ${ca.LP}${eP}`, style: eR, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${ca.wg} ${ca.L3}${eP}`, style: eR, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: ca.VA,
                    ref: eN,
                    children: [
                        (0, a.jsx)("input", {
                            ref: O,
                            type: "file",
                            multiple: !0,
                            onChange: ew,
                            className: ca.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(eu.Y, {
                            targetElementRef: eC,
                            position: "top",
                            align: "left",
                            animation: eu.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(ec.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(ed.rX, {
                                        children: [
                                            tw.map((e) =>
                                                (0, a.jsx)(
                                                    ed.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => eS(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(ed.Dr, {
                                                      id: "import-project",
                                                      label: E.intl.string(S.default["p/k5i7"]),
                                                      iconLeft: uD.q,
                                                      leadingAccessory: { type: "icon", icon: uD.q },
                                                      action: m,
                                                  })
                                                : null,
                                            null != f
                                                ? (0, a.jsx)(ed.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: E.intl.string(S.default["5HmLrK"]),
                                                      iconLeft: uz.t,
                                                      leadingAccessory: { type: "icon", icon: uz.t },
                                                      action: eA,
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
                                    ref: eC,
                                    type: "button",
                                    className: `${ca.Y0} ${ca.nu}`,
                                    disabled: !n,
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(tx.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: ca.Qu,
                                    }),
                                });
                            },
                        }),
                        eG
                            ? (0, a.jsx)("div", {
                                  ref: ez,
                                  className: ca.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(co, { text: eU, offering: eF && null == Z, typed: null != Z }),
                              })
                            : null,
                        (0, a.jsx)(aA.A, { id: eq, children: E.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(iY.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(uO.A, {
                                editor: y,
                                containerClassName: h()(ca.sq, nt.dv),
                                className: ca.jp,
                                readOnly: !n,
                                canFocus: n,
                                onChange: M,
                                onBlur: () => I(null),
                                onKeyDown: ey,
                                onPaste: ek,
                                renderExtraElement: cr,
                                "aria-labelledby": eq,
                                "aria-describedby": eG ? eO : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": em,
                                "aria-controls": em ? eg : void 0,
                                "aria-activedescendant": em ? ((0, uV.aI)(ef) ?? void 0) : void 0,
                            }),
                        }),
                        eG ? (0, a.jsx)(aA.A, { id: eO, children: eT }) : null,
                        (0, a.jsx)("div", {
                            className: ca.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(N.m, {
                                          text: E.intl.string(S.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${ca.Y0} ${ca.$E}`,
                                              disabled: $,
                                              onClick: ej,
                                              "aria-label": E.intl.string(S.default.wiguT0),
                                              children: (0, a.jsx)(i8.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : j?.tierSettings != null && null != b
                                      ? (0, a.jsx)(t6, {
                                            settings: j.tierSettings,
                                            tiers: j.tiers,
                                            choices: j.choices,
                                            disabled: !n,
                                            onChange: b,
                                            className: `${ca.Y0} ${ca.$E}`,
                                            icon: (0, a.jsx)(tv.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        L
                            ? (0, a.jsxs)("div", {
                                  className: ca.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: ca.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: ca.rt,
                                          disabled: !X,
                                          "aria-label": E.intl.string(S.default.rxW2cl),
                                          children: (0, a.jsx)(tj.SendMessageIcon, {
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
    cc = 1500;
function cd(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var cm = n(709753),
    cf = n(540338),
    ch = n(986109);
let cg = i.createContext(null);
function cp(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(cg),
        [d, m] = i.useState(() => V.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: h()(ch.xk, { [ch.g5]: d, [ch.Qo]: s, [ch.q3]: o }),
        children: n,
    });
}
let cx = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n, justRemixed: l } = e;
            return (null != t && n) || l ? "card" : null;
        },
        dismissal: "app",
    },
    cv = new Map();
function cj(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function cb(e, t) {
    return null != e && e > 0 && e < t;
}
let cy = "ideas",
    ck = "live_behind",
    cw = "conjureTipDismissals",
    cN = new Set(),
    cC = new Set(),
    cA = 0;
function cS() {
    let e = B.w.get(cw);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function cE(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return cN.has(((n = e.id), `${t}:${n}`));
        case "app":
            return cS().app[t]?.includes(e.id) === !0;
        case "forever":
            return cS().forever.includes(e.id);
    }
}
function cI(e) {
    return (cC.add(e), () => cC.delete(e));
}
let cM = [12e4, 6e4];
var c_ = n(292771);
function cR(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([V.Ay], () => V.Ay.useReducedMotion),
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
        let g = f.current !== u;
        if (((f.current = u), !g || l || null == s || null == i || null == a || null == h)) return;
        let p = i.width / Math.max(1, h.width);
        (a.animate(
            [
                {
                    transform: `translate(${i.left - h.left}px, ${i.top - h.top}px) scale(${p})`,
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
    let g = r.some((e) => e.leaving);
    return (
        i.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [g, r]),
        (0, a.jsx)("div", {
            ref: c,
            className: c_.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: h()(c_.qd, e.leaving ? c_.dv : c_.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var cP = n(443865),
    cT = n(247171);
function cL(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: h()(cT.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: h()(cT.gutter, cT[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: cT.content, children: i }),
        ],
    });
}
var c$ = n(716502);
function cD(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(cL, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: c$.Nr,
        children: (0, a.jsxs)("section", {
            className: c$.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: c$.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(eK.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eo.P,
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
function cz(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: c$.DD,
        children: t,
    });
}
function cO(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: c$.rf,
        children: t,
    });
}
function cq(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: c$.o1, children: t });
}
let cF = {
    ...cx,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(cD, {
            icon: cP.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(cz, { children: E.intl.string(S.default.OJlbhX) }),
                (0, a.jsx)(cO, { children: E.intl.string(S.default["3vJBni"]) }),
                (0, a.jsx)(cq, {
                    children: (0, a.jsx)(W.$, {
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
var cU = n(830205);
function cG(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(cL, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: cU.aK,
        children: (0, a.jsxs)("div", {
            className: cU.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: cU.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: cU.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(eK.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eo.P,
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
var cB = n(95635);
let cK = [
    {
        id: ck,
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
                (null != t.publishCta && o4(n, t.publishCta)) ||
                cb(e.messagesSinceShown(ck), 10)
                ? null
                : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l
                ? (0, a.jsx)(cG, {
                      icon: cB.UploadIcon,
                      onDismiss: r,
                      children: (0, a.jsx)("span", {
                          ...{ [rh]: n },
                          children: E.intl.format(S.default.fWfeZ8, { onPublish: () => rx(n) }),
                      }),
                  })
                : null;
        },
    },
    cF,
    {
        id: cy,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(cx) ||
                0 === e.messagesSinceShown(cx.id) ||
                cb(e.messagesSinceShown(cy), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(cG, {
                icon: cP.LightbulbIcon,
                onDismiss: l,
                children: E.intl.format(S.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var cH = n(817921);
function cW(e) {
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
                g,
                p =
                    ((s = (0, e0.Ay)(t)),
                    (u = (0, o.bG)([a4.default], () => a4.default.getCurrentUser()?.id)),
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
                        cM,
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
                                        if ((0, ab.BL)(n)) return n;
                                        if (!(0, ab.B0)(e, t)) break;
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
                            (g = (function (e) {
                                for (let t = e.length - 1; t >= 0; t--)
                                    if ("publish_notice" === e[t].kind) return e[t].created_at;
                                return null;
                            })(n)),
                        justRemixed: c?.projectEvent?.type === "remixed",
                        publishedSinceLastMessage: null != g && 0 === cj(n, g, u),
                        messagesSinceShown: (e) => {
                            let l = cv.get(`${t}:${e}`);
                            return null != l ? cj(n, l, u) : null;
                        },
                        isDismissed: (e) => cE(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(cI, () => cA);
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
                })(e, p, (e) => cE(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== p.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                cv.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                j.map((e) => ({
                    ...e,
                    options: {
                        context: p,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          if (!(null == e.dismissal || cE(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  cN.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = cS();
                                                  B.w.set(
                                                      cw,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (cA++, cC.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(cK, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(cp, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: cH.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(cR, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var cV = n(52133),
    cX = n(732159),
    cZ = n(888366),
    cY = n(862026),
    cJ = n(291192);
function cQ(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, cY.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: cJ.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: cJ.Sp,
                children: [
                    (0, a.jsx)("span", { className: cJ.q3 }),
                    (0, a.jsxs)("span", {
                        className: cJ.g8,
                        children: [
                            (0, a.jsx)(cZ.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: cJ.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cJ.nM,
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
                                          (0, a.jsx)(aQ.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, e7.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(cX.u, {
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
function c0(e) {
    return (0, o.bG)([eL.Ay, tn.A], () => {
        let t = eL.Ay.getProject(e);
        return null == t ? "" : (tn.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var c1 = n(951465),
    c2 = n(369455);
function c3(e) {
    let { projectId: t, notice: n } = e,
        l = c0(t),
        r = (0, o.bG)([eL.Ay, d.A], () => {
            let e = eL.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (d.A.getGuild(e.guild_id)?.name ?? null);
        });
    return (0, a.jsxs)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            E.intl.format(
                !0 === n.commands_failed
                    ? S.default["PrQg+B"]
                    : !0 === n.channel_skipped
                      ? S.default.ev23Cw
                      : n.update
                        ? S.default.gQzuLC
                        : null == r
                          ? S.default.MOrR29
                          : S.default["/npn7F"],
                { name: l, server: r ?? "" },
            ),
            n.update && null != n.published_revision ? (0, a.jsx)(c4, { projectId: t, notice: n }) : null,
        ],
    });
}
function c4(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(e0.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [l3.A, eL.Ay],
                    () => {
                        let r = l3.A.getPublishStatus(e),
                            a = eL.Ay.getProject(e);
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
                                (0, eL.jf)(a),
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
                                        className: c2.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, u.pX)(D.BVt.CHANNEL(t, n, l));
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
                                        r = eL.Ay.getProject(e),
                                        a = null == r ? null : (0, e0.KL)(r, l);
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
                                null != e && (0, c1.A)(e);
                            },
                        }),
              ],
          });
}
var c5 = n(940874),
    c6 = n(505527),
    c7 = n(930390),
    c8 = n(521981),
    c9 = n(491182),
    de = n(438729),
    dt = n(622868),
    dn = n(448368),
    dl = n(837528),
    dr = n(470964),
    da = n(715628),
    di = n(752636),
    ds = n(9842),
    du = n(589022),
    dc = n(994500),
    dd = n(967198);
let dm = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function df(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function dh(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function dg(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = dh(e, t),
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
    if (df(r) && df(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && df(dh(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function dp(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([V.Ay], () => V.Ay.useReducedMotion),
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
                      for (; a > 0 && dg(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && dm.has(e.charAt(l - 1));) l--;
                                    return dm.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && dg(t, o);) o++;
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
var dx = n(624479),
    dv = n(890377),
    dj = n(180227);
function db(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: h()(dj.QE, { [dj.Rn]: t }),
              children: (0, a.jsx)(ow.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          ow.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function dy(e) {
    return eX.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: dx.CopyIcon, onClick: () => (0, eX.C)(e) }]
        : [];
}
function dk(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(S.default.CXtLD2),
                          tooltip: E.intl.string(S.default.DOb1HM),
                          icon: dv.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(S.default.urZwpN),
                          icon: eo.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(db, { groupStart: n, actions: [...r, ...dy(t)] });
}
function dw(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(S.default.H8Jfhu), icon: rG.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: nS.BugIcon, onClick: r }];
    return (0, a.jsx)(db, { groupStart: n, actions: [...i, ...dy(t), ...s] });
}
let dN = (0, s4.createChannelRecord)({ id: "conjure-builder", type: D.rbe.DM }),
    dC = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function dA(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: h()(dj.Yq, { [dj.x1]: t }), children: e });
}
function dS(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let dE = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function dI(e, t, n) {
    let { content: l } = (0, dr.A)(e, dE),
        r = i.useMemo(() => ((0, iY.aW)(e.content) ? (0, c8.z2)(uE.U, e, dE).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: dN, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(de.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, da.A)(s, r);
}
function dM(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, dl.m)(e, dN, t.usernameProfile, l),
        u = (0, dl.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([dd.A], () => dd.A.getGuildId()),
        d = (0, o.bG)([a4.default], () => a4.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = a4.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(du.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function d_(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, iY.aW)(n.content)
                          ? (0, c8.z2)(uE.U, n, e).content
                          : (0, c8.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: dj.GV,
                              children: [
                                  (0, a.jsx)(nA.x, {
                                      className: dj.Rj,
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
            [dc.A],
            () => ({
                isReplyAuthorBlocked: dc.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: dc.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, oy.X4)(n),
        m = (0, oy.X4)(t),
        f = dM(n);
    return (0, a.jsx)(dn.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: dN,
        referencedMessage: { state: ds.a.LOADED, message: n },
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
function dR(e) {
    let { message: t, author: n } = e,
        l = dM(t);
    return (0, a.jsx)(dt.Ay, {
        message: t,
        channel: dN,
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
function dP(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, uW.vm)(l),
        c = i.useMemo(() => (0, oy.FT)(u, null), [u]),
        d = i.useMemo(() => nq(t), [t]),
        m = d?.body ?? t,
        f = (0, uB.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, s3.Ay)({ channelId: dN.id, content: m, author: u });
            return (0, s2.rh)({ ...e, timestamp: dS(n, e.timestamp), state: D.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              dT,
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
function dT(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = dI(t, l);
    return (0, a.jsx)(c9.A, {
        className: dj.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(dR, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: dj.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: dj.GV,
                              children: [
                                  (0, a.jsx)(nA.x, {
                                      className: dj.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: dj.WO, children: u }),
                      ],
                  }),
        childrenAccessories: dA(i, "" !== l),
        childrenButtons: (0, a.jsx)(dk, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function dL(e) {
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
        { text: m, revealing: f } = dp(t, { streaming: (0, o.bG)([tb.A], () => c && tb.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, oy.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, uW.vm)(p),
        v = i.useMemo(() => (null == r ? null : nq(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, s3.Ay)({ channelId: dN.id, content: v?.body ?? r.content, author: x });
            return (0, s2.rh)({ ...e, id: r.id, timestamp: dS(r.createdAt, e.timestamp), state: D.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: dN.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, s3.Ay)({ channelId: dN.id, content: "", author: dC })),
        k = i.useMemo(
            () =>
                (0, s2.rh)({
                    ...y,
                    timestamp: dS(n, y.timestamp),
                    state: D.cmJ.SENT,
                    ...(null != b ? { type: D.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        N = i.useMemo(
            () => (0, di.A)({ message: k, channel: dN, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        C = dI(w, m, dj.OS);
    return (0, a.jsxs)("div", {
        className: dj.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(c9.A, {
                className: dj.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(d_, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: dA(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u ? (0, a.jsx)("img", { className: dj.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var d$ = n(981879);
function dD(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, s2.rh)(
                    { ...(0, s3.Ay)({ channelId: dN.id, content: "" }), id: `conjure:${t}`, state: D.cmJ.SENT },
                    {
                        reactions: [
                            {
                                emoji: { id: n.emojiId, name: n.emoji, animated: !0 === n.animated },
                                me: !1,
                                me_burst: !1,
                                count: 1,
                                burst_count: 0,
                            },
                        ],
                    },
                ),
            [t, n],
        );
    return (
        i.useEffect(() => {
            let e = { id: n.emojiId, name: n.emoji };
            function t() {
                (tA.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: dN.id,
                    messageId: l.id,
                    users: [dC],
                    emoji: e,
                    reactionType: c6.v.NORMAL,
                }),
                    tA.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: dN.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: c6.v.NORMAL,
                    }));
            }
            return (
                t(),
                tA.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    tA.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: d$.H,
            children: (0, a.jsx)(c7.A, {
                message: l,
                channel: dN,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
n(775443);
var dz = n(616e3),
    dO = n(155899);
function dq(e) {
    let { onSelect: t, onClose: n = eP.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(ec.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(ed.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(ed.Dr, {
                          id: "restore-version",
                          label: E.intl.string(S.default.H8Jfhu),
                          icon: rG.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(ed.Dr, { id: "view-trace", label: "View Trace", icon: nS.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function dF(e) {
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
            onApprovePlan: g,
            onRestoreVersion: p,
        } = e,
        x = n.message,
        v =
            null != p
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
        j = null != v && null != p ? () => dU(v, p) : void 0,
        b =
            ((t =
                lC() && "assistant" === x.role && (0, ab.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [dz.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : dz.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((lk = { projectId: e, traceId: t }), [...ly])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(cp, {
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
                          void (0, eP.jA)(t, (e) => (0, a.jsx)(dq, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(dL, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(dw, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(uP, {
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
                settingsAskId: x.id,
                publishCta: n.active ? null : x.publishCta,
                turnId: (0, ab.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != w && null != p && f
                        ? () =>
                              dU(
                                  {
                                      sha: w.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: w.authored_at,
                                      subject: w.subject,
                                  },
                                  p,
                              )
                        : void 0,
            }),
        }),
    });
}
function dU(e, t) {
    (0, dO.F)({ onConfirm: () => t(e) });
}
var dG = n(288539);
function dB(e, t, n) {
    return (0, a.jsx)(dG.A, { userId: e, content: `@${t}` }, n);
}
function dK(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, uW.Y_)(l);
            }, [l]);
            let r = (0, o.bG)([a4.default], () => (null == l ? null : a4.default.getUser(l)), [l]),
                a = (0, s6.tx)(r),
                s = c0(e),
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
        })(n, l, dB),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([e1.A], () => null != t && t.length > 0 && iz({ keys: t }, e1.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: E.intl.string(S.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(iX, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let dH = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    ai.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, iY.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(cp, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dP, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(uS.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(uG, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(dD, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, c5.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(cp, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dL, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(uS.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(cp, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uR, {
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
                    return (0, a.jsx)(cp, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dL, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(c3, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(cp, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dL, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(dK, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(cp, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(cQ, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(cp, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uR, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(cp, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uR, {
                            projectId: l,
                            steps: dW,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(dF, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, cV.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, cV.A)(e.row, t.row, ["message"]) &&
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
                (0, cV.A)(e.replyTo, t.replyTo) &&
                (0, cV.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    dW = [],
    dV = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    dX = new WeakMap();
function dZ(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function dY(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let dJ = i.memo(function (e) {
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
            scrollerRef: g,
            stickToBottomRef: p,
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
    let R = i.useCallback((e) => {
            (I(e), window.clearTimeout(M.current), (M.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        P = (0, o.bG)([l3.A], () => l3.A.getPublishStatus(t)),
        T = (0, o.bG)([a4.default], () => a4.default.getCurrentUser()?.id),
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
                                        let t = (0, aj.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = dX.get(r);
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
                        let a = !(0, ab.BL)(e),
                            i = i9({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, aj.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, aj.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && dV.test(n.prose.content)) m = !0;
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
                                        turnActive: ay(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = dV.test(e.content ?? "");
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
                    (dX.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return o3(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, P)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = o5.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), o5.set(t, n)), n);
                      })),
                m,
            );
        }, [n, P, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, z] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return dZ(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : dY(e, t.endKey, t.end - 1) + 1,
                a = dY(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), dZ(e, a, r));
        })($, D, x),
        q = i.useRef(O),
        F = i.useRef($),
        U = i.useRef(L),
        G = i.useRef(null),
        B = i.useRef(null),
        K = i.useRef(new Set()),
        H = i.useCallback(() => {
            let e = g.current?.getScrollerNode(),
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
        }, [g]),
        W = i.useCallback(() => {
            let e = g.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), dZ(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), dZ(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? dZ(e, i, t.end) : null;
            })(F.current, q.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: p.current,
            });
            "older" === n ? (0, _.loadOlderHistory)(t) : null != n && z(n);
        }, [g, p, t]);
    i.useImperativeHandle(
        b,
        () => ({
            handleScroll() {
                (H(),
                    z((e) => {
                        let t = q.current;
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
                    (j(), z(q.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), R(e));
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
                            R(e));
                    }),
                    z(((n = F.current), dZ(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [R, j, t],
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
                    null != l && l !== e && ((e = l), p.current ? g.current?.scrollToBottom() : H());
                });
            return (t.observe(w), () => t.disconnect());
        }, [w, H, g, p]));
    let Z = null == O.endKey;
    (i.useEffect(() => y?.(Z), [Z, y]),
        i.useLayoutEffect(() => {
            ((q.current = O), (F.current = $), (U.current = L));
        }),
        i.useLayoutEffect(() => {
            let e = g.current?.getScrollerNode(),
                t = k.current;
            if (null != e && null != t) {
                let n = G.current;
                if (p.current) g.current?.scrollToBottom();
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
        }, [L, $, O.start, O.end, g, p, H, W]));
    let Y = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, ab.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, ab.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        el = (0, o.bG)([e1.A], () => e1.A.getSettings(t)?.secrets, [t]),
        er = (0, cm.WT)(t),
        ea = i.useMemo(() => (0, i$.Mv)(n, el), [n, el]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: h()(ch.x7, ch.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: ch.Ub, children: (0, a.jsx)(tN.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: ch.x7,
            children: (0, a.jsx)(cp, { role: "assistant", children: (0, a.jsx)(dL, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(cg.Provider, {
        value: K,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: ch.x7,
            children: [
                L.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            dH,
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
                        dH,
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
                            onApprovePlan: n.render_id === Y ? c : void 0,
                            onRestoreVersion: f,
                        },
                        e.key,
                    );
                }),
                Z
                    ? er.map((e) =>
                          (0, a.jsx)(
                              cp,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(dL, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(cf.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && Z
                    ? (0, a.jsx)(cp, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(dL, {
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
                Z ? (0, a.jsx)(cW, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var dQ = n(731084),
    d0 = n(823376),
    d1 = n(187447);
function d2(e) {
    let { activity: t, id: n } = e,
        l = (0, av.j)(),
        { text: r, revealing: s } = dp(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: d1.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(ap.Ch, {
                ref: o,
                className: d1.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: h()(u_.PT, d1.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: on.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var d3 = n(53659);
function d4(e) {
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
        g = i.useRef(null),
        p = i.useId(),
        [x, j] = i.useState(null),
        b = (0, dQ.xu)({
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
        k = b === dQ.kx["0"],
        [w, N] = i.useState(m ?? y),
        A = (0, av.j)();
    (l || (0, dQ.E4)(y, w) || (!A && !k)) && w !== y && N(y);
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
    let R = i.useRef(k),
        P = i.useRef(0);
    (i.useEffect(() => {
        ((R.current = k), !k && (0, dQ.E8)(_.current) && N(I.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                R.current
                    ? ((P.current = (0, dQ.E8)(_.current) ? P.current + 1 : 0), N((0, dQ.Ov)(P.current)))
                    : I.current !== _.current
                      ? N(I.current)
                      : M.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, dQ.FZ)),
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
    return (0, a.jsx)(eu.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: $,
        onRequestClose: z,
        renderPopout: () => (0, a.jsx)(d2, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(C.D, {
                innerRef: g,
                className: h()(d3.hF, T && d3.Xd),
                "aria-label": E.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : k
                            ? dQ.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": $,
                "aria-describedby": $ ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: D,
                children: [
                    (0, a.jsx)("span", {
                        className: d3.bl,
                        children: (0, a.jsx)(d0.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: d3.xu,
                        "aria-hidden": !!u || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(uT.o, {
                                  ref: M,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: dQ.vg,
                                  delay: null,
                                  className: d3.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: d3.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let d5 = { second: 1e3, minute: 6e4 };
function d6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = d5[t];
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
var d7 = n(719374);
function d8(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = d6(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: d7.$,
        "data-conjure-turn-timer": !0,
        children: (0, ss.C7)(l),
    });
}
function d9(e) {
    let { startedAt: t } = e,
        n = d6(t, "minute");
    return (0, a.jsx)(aA.A, { role: "timer", children: (0, ss.Us)(n) });
}
var me = n(885574),
    mt = n(242779),
    mn = n(436804);
function ml(e) {
    return e.toLocaleString();
}
function mr(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: mn.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: mn.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [ml((0, mt.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    ml(n.input_tokens),
                    " in \xb7 ",
                    ml(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${ml(n.cache_creation_input_tokens)} cache write \xb7 ${ml(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function ma(e) {
    let { project: t } = e,
        n = (0, mt.wU)(t.compaction),
        l = (0, mt.wU)(t.classifier),
        r = (0, mt.wV)(t.orchestrator, t.codegen),
        i = (0, mt.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: mn.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: mn.Q$,
                children: (0, a.jsxs)("div", {
                    className: mn.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [ml((0, mt.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(mr, { label: E.intl.string(S.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(mr, { label: E.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(mr, { label: E.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: mn.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, mt.sj)(i) ? "\u2014" : `${Math.round(100 * (0, mt.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function mi(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eu.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(ma, { project: t }),
        children: (e) =>
            (0, a.jsx)(C.D, {
                innerRef: n,
                className: mn.Y$,
                "aria-label": E.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(me.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var ms = n(997421);
function mo(e) {
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
        g = (0, lg.Zv)(t),
        p = (0, o.bG)([l3.A], () => l3.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, dQ.E8)(e) || e === E.intl.string(S.default.mKK6wB) || e === E.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == f ? null : (0, dQ.uc)(f),
        k = null != s,
        w = s ?? (n ? l : void 0),
        N = n || r || k || !0 === m;
    return (0, a.jsxs)("div", {
        className: ms.jf,
        children: [
            (0, a.jsxs)("div", {
                className: ms.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || g || p
                        ? (0, a.jsx)(d4, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: k,
                              recalling: u,
                              controlling: g,
                              publishPending: p && N,
                              publishing: p,
                              spoken: x,
                              onSpokenChange: b,
                          })
                        : null,
                    null != w ? (0, a.jsx)(d8, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(d9, { startedAt: w }) : null,
            null == f || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: ms.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(mi, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, dQ.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: ms.XF,
                      children: (0, dQ.Db)(h),
                  }),
        ],
    });
}
let mu = ["wheel", "touchstart", "pointerdown", "keydown"];
var mc = n(608711);
let md = [E.intl.string(S.default["9w+Chc"]), E.intl.string(S.default.WAvmdq), E.intl.string(S.default.SKsrzl)];
function mm(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        c,
        { projectId: m, restoreState: f, onRestoreVersion: h, onImportProject: g } = e,
        p = (0, o.bG)([lh.A], () => lh.A.getMessages(m), [m]),
        x = (0, o.bG)([_.default], () => _.default.getConnState(m), [m]),
        b = (0, o.bG)([lh.A], () => lh.A.getProjectUsage(m), [m]),
        y = (0, o.bG)([lh.A], () => lh.A.getThinkingActivity(m), [m]),
        k = (0, o.bG)([lh.A], () => lh.A.isCompacting(m), [m]),
        w = (0, o.bG)([lh.A], () => lh.A.isSaving(m), [m]),
        C = (0, o.bG)([iR.A], () => iR.A.getModelSettings(m), [m]),
        A = i.useRef(null),
        I = i.useRef(null),
        M = i.useRef(null),
        {
            stickToBottomRef: R,
            pinned: P,
            atBottom: T,
            unpin: L,
            releasePinHold: $,
            showsLatest: D,
            showsLatestRef: z,
            handleShowsLatestChange: O,
            updatePin: q,
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
                    for (let e of mu) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of mu) t.removeEventListener(e, u);
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
        })(I),
        F = i.useCallback(() => {
            function e() {
                let e = A.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            ($(), z.current ? e() : M.current?.showLatest(e));
        }, [$, z]),
        U = i.useCallback(() => {
            (q(), M.current?.handleScroll());
        }, [q]);
    (i.useLayoutEffect(() => {
        let e = A.current;
        if (null == e) return;
        let t = I.current?.getScrollerNode(),
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
                r && (R.current ? I.current?.scrollToBottom() : M.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [R]),
        i.useEffect(() => {
            (0, _.ensureConnection)(m);
        }, [m]),
        (0, iJ.E1)(m, (0, av.j)()));
    let G = nJ(m),
        B = (function (e) {
            let t = (0, e0.Ay)(e),
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
        })(m),
        K =
            ((l = (0, o.bG)([iT.A], () => iT.A.getFailure(m))),
            (r = i.useCallback(() => (0, iL.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: E.intl.format(S.default.Up6Ssw, { reason: l }),
                      retry: { text: E.intl.string(S.default["ywA+ET"]), onClick: r },
                  }),
        H = (0, o.bG)([iT.A], () => iT.A.getSetupStartedAt(m), [m]),
        V = i.useCallback(
            (e, t) => {
                (0, _.sendUserMessage)(m, e, t);
            },
            [m],
        ),
        X = i.useCallback(
            (e, t, n) => {
                let l = n ?? V;
                0 === G.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => nT(e.comment)),
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
                                      a.push(`${t + 1}. ${nD(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: G.annotations, metaComment: e, context: G.context }),
                          t,
                      ),
                      nV(m));
            },
            [G, V, m],
        ),
        Z = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of aa)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, _.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = aa.get(e);
                            (aa.delete(e), as(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                lh.A.isThinking(m)) &&
                (0, _.interruptTurn)(m);
        }, [m]),
        Y = i.useCallback((e) => tF(m, e.implementation_prompt), [m]),
        [J, Q] = (function (e) {
            let [t, n] = i.useState(() => i7(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? i7(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(m),
        ee = i.useCallback(() => V(E.intl.string(S.default["t5CN3+"])), [V]),
        et = i.useCallback((e, t, n) => tF(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        el = i.useCallback((e) => (0, iP.X)(m, e), [m]),
        er = i.useCallback((e) => (0, eh.vX)(m, e), [m]),
        ea = i.useCallback((e) => tH(m, "chat", Array.from(e), er), [m, er]),
        ei = i.useCallback(() => tF(m, E.intl.string(S.default.Zc7gML)), [m]),
        eu = f?.status === "restoring",
        ec = "open" === x && !eu,
        ed = p[p.length - 1],
        em = null != ed && "assistant" === ed.role && null != ed.proposal,
        [ef, eg] = i.useState(null),
        ep = ed?.clarification != null && ed.clarification.id !== ef ? ed.clarification : null,
        ex = i.useCallback(() => {
            null != ep && eg(ep.id);
        }, [ep]),
        [ev, ej] = i.useState(null),
        eb = (function (e) {
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
        })(m),
        ey = ed?.appBuildRequest != null && (0, ab.BL)(ed) && ed.appBuildRequest.id !== ev ? ed.appBuildRequest : null,
        ek = eb.request ?? (null == ep ? ey : null),
        ew = null == eb.request ? ep : null,
        eN = null != ek && ek === eb.request,
        { close: eC, sent: eA } = eb,
        eS = eb.request?.id,
        eE = i.useCallback(() => {
            eN ? eC() : null != ek && ej(ek.id);
        }, [ek, eN, eC]),
        eI = i.useCallback(
            (e) => {
                (null != eS && eA(eS),
                    (0, es.P0)({
                        text: E.intl.formatToPlainString(S.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eS, eA],
        ),
        eM = (0, o.bG)([e1.A], () => e1.A.getSettings(m), [m]),
        [e_, eR] = i.useState(null),
        eP = iG(),
        eT =
            null != ed &&
            ((t = ed.id),
            (s = (0, i$.Mv)(p, eM?.secrets)),
            (u = iB(p)),
            p.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, ab.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !iK(e.settingsRequest, eM, eP.has(e.id)))),
            )),
        eL =
            null != ed &&
            "assistant" === ed.role &&
            null != ed.settingsRequest &&
            null == ed.secretRequest &&
            (0, ab.BL)(ed) &&
            ed.id !== e_ &&
            ((n = ed.settingsRequest),
            (c = n.keys ?? []),
            null != eM &&
                0 !== c.length &&
                c.every((e) => {
                    let t = eM.schema.find((t) => t.key === e);
                    return null != t && iD.has(t.type);
                })) &&
            iz(ed.settingsRequest, eM) &&
            !eT
                ? ed
                : null,
        e$ = null == eb.request ? eL : null,
        eD = e$?.settingsRequest ?? null,
        ez = i.useCallback(() => {
            null != eL && eR(eL.id);
        }, [eL]),
        eO = null != eD,
        [eq, eF] = i.useState(null),
        eU = ew?.id ?? ek?.id ?? e$?.id,
        eG = null != ep || null != ek || null != eL;
    i.useLayoutEffect(() => {
        let e = I.current?.getScrollerNode(),
            t = eq?.firstElementChild;
        if (null == eq || null == e || !(0, en.vq)(t, HTMLElement) || null == eU) return;
        function n() {
            R.current && I.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eq.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eq, eU, I, R]);
    let eB = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, o.bG)([lh.A], () => lh.A.hasLoadedHistory(m), [m]),
            historyUnavailable: (0, o.bG)([lh.A], () => lh.A.isHistoryUnavailable(m), [m]),
            connState: x,
        }),
        eH = "loading" === eB && 0 === p.length,
        eW = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return md[e % md.length];
        }, [m]),
        eV = em ? E.intl.string(S.default.Zc7gML) : "greeting" === eB && 0 === p.length ? eW : null,
        eX = i.useMemo(() => {
            for (let e = p.length - 1; e >= 0; e--) {
                let t = p[e];
                if ("assistant" === t.role && !(0, ab.BL)(t)) return t;
            }
        }, [p]),
        eZ = null != eX,
        eY =
            null != eX
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = iZ.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(eX)
                : void 0,
        eJ = em && ec ? ei : void 0,
        eQ = i.useCallback(() => tF(m, E.intl.string(S.default.EMgIuY)), [m]),
        [e2, e3] = i.useState(null),
        [e4, e5] = i.useState(eZ);
    (e4 !== eZ && (e5(eZ), eZ || e3(null)),
        i.useEffect(() => {
            if (!eZ) return;
            let e = I.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? e3(null)
                        : e3(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eZ, eX?.steps, D]));
    let e6 = D ? e2 : "bottom",
        e7 = i.useMemo(() => (null != eX ? (0, ak.b9)(eX.steps) : ""), [eX]),
        e8 = i.useMemo(() => (null != eX ? ((0, aj.lt)(eX.steps) ?? eX.todos) : void 0), [eX]),
        e9 = eX?.provisionalTodo,
        te = null != eX && ay(eX),
        tt = i.useMemo(() => {
            var e;
            return null != eX ? ((e = eX.steps), sm((0, aj.Jf)(e, !0).tasks)) : void 0;
        }, [eX]);
    return (0, a.jsxs)("section", {
        ref: A,
        "data-conjure-chat": !0,
        className: mc.TE,
        children: [
            ec
                ? (0, a.jsx)(j.A, {
                      title: E.intl.string(S.default.gy7byi),
                      description: E.intl.string(S.default["dkv/WO"]),
                      icons: nb.ir,
                      onDrop: ea,
                  })
                : null,
            (0, a.jsx)(aF, {
                onJumpToActivity: F,
                line: e7,
                placement: eZ && "top" === e6 ? "top" : null,
                todos: e8,
                todosLive: te,
                provisionalTodo: e9,
                agents: tt,
            }),
            (0, a.jsxs)("div", {
                className: mc.JX,
                children: [
                    (0, a.jsx)(ap.Ch, {
                        ref: I,
                        onScroll: U,
                        scrollbarGutter: eH ? "both-edges" : "stable",
                        className: [mc.N$, T ? null : mc.hB, eO ? mc.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(iY.Fu.Provider, {
                            value: m,
                            children: (0, a.jsx)(dJ, {
                                projectId: m,
                                messages: p,
                                emptyState: eB,
                                floatingSettingsMessageId: eL?.id,
                                liveClarificationId: ew?.id,
                                onPickIdea: ec ? Y : void 0,
                                onAskForIdeas: ec ? ee : void 0,
                                draftHasText: J,
                                onApprovePlan: ec ? eQ : void 0,
                                onRestoreVersion: eu || eZ ? void 0 : h,
                                scrollerRef: I,
                                stickToBottomRef: R,
                                pinned: P,
                                onUnpin: L,
                                handleRef: M,
                                onShowsLatestChange: O,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: mc.NJ,
                        children: (0, a.jsx)(mo, {
                            projectId: m,
                            thinking: eZ,
                            turnStartedAt: eY,
                            restoring: eu,
                            remixStartedAt: H,
                            recalling: eH,
                            thinkingActivity: y,
                            compacting: k,
                            saving: w,
                            projectUsage: b,
                            connState: x,
                        }),
                    }),
                    null == ew
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eF,
                              className: eO ? `${mc.B5} ${mc.J9}` : mc.B5,
                              children: (0, a.jsx)(
                                  i_,
                                  { projectId: m, clarification: ew, onSubmit: ec ? et : void 0, onDismiss: ex },
                                  ew.id,
                              ),
                          }),
                    null == ek
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eF,
                              className: mc.B5,
                              children: (0, a.jsx)(
                                  aZ,
                                  { projectId: m, request: ek, canSend: ec, onDismiss: eE, onSent: eN ? eI : void 0 },
                                  ek.id,
                              ),
                          }),
                    null == eD
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == ew && null == ek ? eF : void 0,
                              className: mc.B5,
                              children: (0, a.jsx)(
                                  iX,
                                  { askId: e$?.id, projectId: m, request: eD, onDismiss: ez },
                                  e$?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: mc.Jx,
                children: [
                    (0, a.jsx)(aF, {
                        onJumpToActivity: F,
                        line: e7,
                        placement: eZ && "bottom" === e6 ? "bottom" : null,
                        todos: e8,
                        todosLive: te,
                        provisionalTodo: e9,
                        agents: tt,
                    }),
                    0 === G.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: mc.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(S.default["7b49dS"], {
                                          count: G.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(S.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(W.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(S.default["/zOv9+"]),
                                      onClick: () => nV(m),
                                  }),
                              ],
                          }),
                    null == K
                        ? null
                        : (0, a.jsx)("div", {
                              className: mc.qB,
                              children: (0, a.jsx)(ax.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: K.message,
                                  action: K.retry,
                              }),
                          }),
                    null == B
                        ? null
                        : (0, a.jsxs)("div", {
                              className: mc.Db,
                              children: [
                                  (0, a.jsx)(ax.w, { type: "warning", role: "status", message: B.message }),
                                  (0, a.jsx)("div", {
                                      className: mc.jU,
                                      children: (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(eK.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
                                              icon: eo.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: B.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(cu, {
                        projectId: m,
                        canSend: ec,
                        running: eZ,
                        restoring: eu,
                        onSend: X,
                        hasPendingContext: G.annotations.length > 0,
                        onInterrupt: ec ? Z : void 0,
                        onUploadFile: er,
                        onImport: g,
                        onSendToOtherProjects: eG ? void 0 : eb.open,
                        onApprove: eJ,
                        suggestion: eV,
                        questionOpen: eG,
                        modelSettings: C,
                        onModelSettingsChange: el,
                        onDraftHasTextChange: Q,
                    }),
                ],
            }),
        ],
    });
}
var mf = n(761508),
    mh = n(933294),
    mg = n(207438),
    mp = n(683438);
function mx(e, t) {
    return String(e).padStart(t, "0");
}
function mv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${mx(l.getHours(), 2)}:${mx(l.getMinutes(), 2)}:${mx(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${mx(l.getMilliseconds(), 3)}` : r;
}
var mj = n(667931);
let mb = {
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
    my = { running: "Running", ok: "Done", error: "Failed" };
function mk(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function mw(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function mN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function mC(e) {
    return mw(e.count > 1 ? e.totalMs : e.end - e.start);
}
let mA = ["Arguments", "Result", "Usage", "Details"];
function mS(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function mE(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function mI(e) {
    let t = (0, mj.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, mj.lp)(e) ? "interrupted" : "still running";
}
function mM(e) {
    return [mv(new Date(e.started_at).toISOString()) ?? "", mN(e.spans.length), (0, mj.Sj)((0, mj.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function m_(e) {
    let t = (0, mj.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, mj.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += mR(r, "in")),
                (l.output += mR(r, "out")),
                (l.cacheRead += mR(r, "cache_read")),
                (l.cacheWrite += mR(r, "cache_write")),
                (l.costUsd += mR(r, "cost_usd"))));
    }
    let r = mj.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function mR(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var mP = n(738188),
    mT = n(430993),
    mL = n(364840),
    m$ = n(224640),
    mD = n(20742);
let mz = { collapsed: new Set(), revealed: new Set() };
var mO = n(872892);
let mq = {
    op: mO.Q,
    model: mO.i3,
    tool: mO.dH,
    setup: mO.kc,
    worktree: mO.Qx,
    sandbox: mO.QH,
    build: mO.F1,
    platform: mO.Op,
    other: mO.fv,
};
function mF(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      mN(t.calls, "model call"),
                      `${mk(t.input)} in`,
                      `${mk(t.output)} out`,
                      `${mk(t.cacheRead)} cache read`,
                      `${mk(t.cacheWrite)} cache write`,
                      mE(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: mO.M1,
        children: [
            (0, a.jsx)("div", {
                className: mO.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${mO.DJ} ${mq[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: mO.o1,
                children: mj.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${mw(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: mO.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${mO.nf} ${mq[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: mb[e] }),
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
function mU(e) {
    return `conjure-perf-trace-${e}`;
}
function mG(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: mO.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${mO.p0} ${s + o > 85 ? mO.EU : mO.jh}`,
                children: i,
            }),
        ],
    });
}
function mB(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? tZ._ : t7.a,
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
        id: mU(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${mO.$y} ${r ? mO.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: mO.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(C.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: mO.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: mO.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: mO.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${mO.nf} ${mq[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: mO.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: mO.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: mO.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(mP.WarningIcon, { size: "xs", color: "currentColor", className: mO.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(mG, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${mO.M0} ${mO.Nh}`
                    : t.running
                      ? `${mO.M0} ${mO.rF}`
                      : `${mO.M0} ${mq[t.category]}`,
                duration: mC(t),
            }),
        ],
    });
}
function mK(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: mU(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${mO.$y} ${l ? mO.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: mO.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: mO.ai,
                        children: (0, a.jsx)(tZ._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: mO.U9 }),
                    (0, a.jsx)("span", { className: `${mO.nf} ${mO.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: mO.MQ,
                        children: mN(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(mG, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${mO.M0} ${mO.ab} ${mO.dL}`,
                duration: mw(t.totalMs),
            }),
        ],
    });
}
function mH(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: mO._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: mO.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${mO.nf} ${mq[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [mS("Start", `+${mw(e.start)}`), mS("Duration", mC(e))];
                      e.count > 1
                          ? t.push(
                                mS("Calls", String(e.count)),
                                mS("Longest call", mw(e.maxMs)),
                                mS("Spread over", mw(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(mS("Self time", mw(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(mS("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(mS("Notes", l.join(", "))),
                          null != e.span.error && t.push(mS("Error", e.span.error)));
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
                              s = "cost_usd" === t ? mE(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), mS(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...mA.flatMap((e) => {
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
                                            className: mO.xd,
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
                                                            className: mO.vl,
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
function mW(e) {
    let { trace: t } = e,
        n = i.useMemo(() => m_(t), [t]);
    return (0, a.jsx)(mF, { stats: n });
}
function mV(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, mj.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? mz : (0, mj.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, mj.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, mj.x7)(t)), l((n) => (0, mj._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, mj.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mj.IE)(t, e);
                        null != n && l((e) => (0, mj.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mj.IE)(t, e);
                        null != n && l((e) => (0, mj.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, mj.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, mj.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, mj.hB)(t));
                }, [t]),
                g = o.find((e) => e.key === r);
            return {
                rows: o,
                collapsed: n.collapsed,
                selectedKey: r,
                selected: g?.kind === "node" ? g.node : null,
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
        f = (0, mj.dj)(t),
        h = i.useMemo(() => (0, mj.nF)(f), [f]),
        g = h.length > 1 ? ((h[1] - h[0]) / f) * 100 : 100,
        p = i.useCallback(
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
                    null != t && (u(t.key), document.getElementById(mU(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(mT.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: mO.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: mI(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: mM(t),
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
                                      children: `${mN(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(mW, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: mO.KE,
                        children: [
                            (0, a.jsx)(W.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(W.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(W.$, {
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
                        "aria-activedescendant": null == o ? void 0 : mU(o),
                        className: mO.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: mO.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: mO.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: mO.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${mO.io} ${(e / f) * 100 > 85 ? mO.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : mw(e),
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
                                          mB,
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
                                    : (0, a.jsx)(mK, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(mL.j, { children: (0, a.jsx)(mH, { node: s }) }),
        ],
    });
}
function mX(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([dz.A], () => dz.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(m$.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(mD.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(mT.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(mV, { trace: i }),
        ],
    });
}
let mZ = { running: mO.Vf, ok: mO.mo, error: mO.Sr };
function mY(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${mO.Om} ${mZ[t]}`, role: "img", "aria-label": my[t] });
}
function mJ(e, t) {
    (0, e7.openModal)((n) => (0, a.jsx)(mX, { ...n, projectId: e, traceId: t }));
}
function mQ(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => mJ(t, n.id), [t, n.id]);
    return (0, a.jsxs)(C.D, {
        className: mO.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: mO.sU,
                children: [
                    (0, a.jsx)(mY, { status: (0, mj.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: mO._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: mI(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: mM(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function m0(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            ev(
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
    return (0, a.jsx)(eu.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eu.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(ec.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(ed.rX, {
                    children: (0, a.jsx)(ed.Dr, {
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
            return (0, a.jsx)(eK.K, {
                ...e,
                buttonRef: l,
                icon: eH.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function m1(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([dz.A], () => dz.A.getTimingTraces(t), [t]),
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
                    let t = e.map(m_);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: mj.BF.map((e) => ({
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
              className: mO.Ie,
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
              className: mO.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: mO.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: mO.fH,
                              children: (0, a.jsx)(mp.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(m0, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(ap.Ch, {
                      className: mO.XG,
                      children: [
                          (0, a.jsx)(mF, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: mO.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(mQ, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function m2(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function m3(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function m4(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function m5(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function m6(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function m7(e) {
    return E.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let m8 = ["all", "preview", "stable", "web"];
function m9(e) {
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
function fe(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: m2(e.memory_p50_bytes ?? 0),
              p999: m2(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let ft = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var fn = n(911608),
    fl = n(177427);
function fr(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fl.KE,
        children: [
            (0, a.jsx)("div", {
                className: fl.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(tN.y, { type: tN.t.PULSING_ELLIPSIS })
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
                                  children: E.intl.formatToPlainString(S.default.INVO50, { time: m5(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(W.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function fa(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: fl.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: fl.Gf, children: t }),
            n,
        ],
    });
}
function fi(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: fl.N8,
        children: [
            (0, a.jsxs)("div", {
                className: fl.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: fl.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: fl.kS,
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
function fs(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: fl.N8,
        children: [
            (0, a.jsxs)("div", {
                className: fl.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(fn.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? fl.dh : void 0,
            }),
        ],
    });
}
function fo(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(fi, {
            label: E.intl.string(S.default.SXP7pD),
            value: E.intl.string(S.default.E5hKVi),
            hint: m9(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(fi, {
            label: E.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(S.default.AGvoMJ),
        });
    let l = fe(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(fi, { label: E.intl.string(S.default["H/X+FI"]), value: m3(n.cpu_ms) }),
            null != l && (0, a.jsx)(fi, { label: E.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function fu(e) {
    let { analytics: t } = e,
        n = E.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(fa, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: m9(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? ft[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(fa, {
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
                          fi,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(S.default["w/2voO"], { cpu: m3(t.cpu_ms) }),
                              hint: fe(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var fc = n(678708),
    fd = n(414499),
    fm = n(714800),
    ff = n(81466),
    fh = n(424383),
    fg = n(816943),
    fp = n(268791),
    fx = n(514042),
    fv = n(872351),
    fj = n(708988),
    fb = n(150934),
    fy = n(417270);
let fk = "Restart Agent",
    fw = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fN(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function fC(e, t) {
    return { label: e, value: null != t && "" !== t ? m5(t) : "Unknown", icon: "calendar" };
}
function fA(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function fS(e, t, n, l) {
    let [r, a] = fw[n.status];
    return { label: e, value: `${fA(n.bytes)} of ${fA(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function fE(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = m5(e.at);
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
let fI = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fM(e) {
    let t = `container ${fN(e.local)} \xb7 remote ${fN(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fI[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${m4(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${m4(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${m4(n)} Ahead, ${m4(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let f_ = ["main", "wip"];
var fR = n(400154);
let fP = {
        checkout: fc.FolderIcon,
        edit: aJ.PencilIcon,
        remote: fd.h,
        commits: fm.e,
        calendar: ff.CalendarIcon,
        save: fh.L,
        objects: eS.R,
        download: fg.$,
        size: fp.$,
        file: fx.FileIcon,
    },
    fT = {
        ok: [ni.y, w.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [mP.WarningIcon, w.A.colors.ICON_FEEDBACK_WARNING],
        error: [tC.a, w.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [fv.z, w.A.colors.ICON_MUTED],
        behind: [fj.M, w.A.colors.ICON_MUTED],
    };
function fL(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([dz.A], () => dz.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, mg.DK)(t), [t]),
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
                    `Updated ${m5(r)}`,
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
    return (0, a.jsxs)(fa, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fR.Lj,
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
                    if (!e.running || null != e.localError) return [fE(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            fE(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : m4(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = f_.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fM))
                        : l.push(
                              { label: "Main", value: fN(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fN(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? m4(e.commits) : "Unknown", icon: "commits" },
                            fC("Oldest Commit", e.oldest),
                            fC("Newest Commit", e.newest),
                            fE(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${m4(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${m4(t.loose)} loose (${m2(t.looseBytes)}) \xb7 ${m4(t.packed)} packed in ${n} (${m2(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${m4(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${m4(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                fS(
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
                                  fS("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fP[r],
                        [o, u] = null != i ? fT[i] : [null, void 0];
                    return (0, a.jsx)(
                        fi,
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
function f$(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([dz.A], () => dz.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, mg.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = dz.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, mg.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                tA.h.dispatch({
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
            let u = i.useCallback(() => (0, mg.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: fk,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eT.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: fR.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fR.nM,
                children: [
                    (0, a.jsx)(fb.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(W.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: fy.RetryIcon,
                        text: fk,
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
                            return `Restarted \xb7 new instance since ${m5(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${m5(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fD(e, t) {
    return (0, a.jsx)(fi, {
        label: e,
        value: E.intl.formatToPlainString(S.default.yHJxuP, { count: m4((0, mt.aM)(t)) }),
        hint: `${m4(t.input_tokens)} in \xb7 ${m4(t.output_tokens)} out \xb7 ${m4(t.cache_read_input_tokens)} cache read`,
    });
}
function fz(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([dz.A], () => dz.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([dz.A], () => dz.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([dz.A], () => dz.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([dz.A], () => dz.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, mg.Lj)(t), [t]),
        f = i.useCallback(() => (0, mg.Lj)(t, !0), [t]),
        h = (0, o.bG)([dz.A], () => dz.A.getSandboxRestartState(t), [t]),
        g = (0, o.bG)([lh.A], () => lh.A.isThinking(t), [t]),
        p = i.useCallback(() => (0, mg.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = u?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: fR.Mf,
        children: [
            (0, a.jsx)(fr, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(fa, {
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
                                  (0, a.jsx)(fi, {
                                      label: E.intl.string(S.default["9nqym2"]),
                                      value: m4((0, mt.a7)(x.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default.NCdUIh, { count: m4(x.turns) }),
                                  }),
                                  fD(E.intl.string(S.default.xtxP0e), x.orchestrator),
                                  fD(E.intl.string(S.default["9Sj3SX"]), x.codegen),
                                  fD(E.intl.string(S.default.ANCEo3), (0, mt.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(fi, {
                                          label: E.intl.string(S.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${m4(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(fa, {
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
                                  fD(E.intl.string(S.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(fi, {
                                      label: E.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, mt.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(fa, {
                title: E.intl.string(S.default.NbRk9a),
                children: [
                    null != u && null != y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(fs, {
                                      label: E.intl.string(S.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: m4,
                                  }),
                                  (0, a.jsx)(fi, {
                                      label: E.intl.string(S.default.mRbSns),
                                      value: `${m4(u.tokensBefore)} \u{2192} ${m4(u.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: m4(u.retainedMessages),
                                          time: m5(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? E.intl.formatToPlainString(S.default.GMLCNv, { ceiling: m4(y) })
                                      : E.intl.string(S.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(fi, {
                            label: E.intl.string(S.default["4BX5KK"]),
                            value: `${m4(c.projected)} / ${m4(c.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default["6ngCax"], { time: m5(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fR.Lj,
                        children: [
                            (0, a.jsx)(W.$, {
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
                                    let t = m5(e.observedAt);
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
                                        (0, a.jsx)(W.$, {
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
                        className: fR.Lj,
                        children: [
                            (0, a.jsx)(W.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["5qCjBu"]),
                                loading: "pending" === h,
                                disabled: "pending" === h || g,
                                onClick: p,
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
                                    let t = m5(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(f$, { projectId: t }),
                ],
            }),
            (0, a.jsx)(fL, { projectId: t }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(fa, {
                    title: E.intl.string(S.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(fi, {
                                        label: E.intl.string(S.default.CLXHAs),
                                        value: m5(b.instance_since),
                                        hint: E.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(fi, { label: E.intl.string(S.default["8V8e1Z"]), value: m4(b.sockets) }),
                                    (0, a.jsx)(fi, {
                                        label: E.intl.string(S.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? E.intl.string(S.default.Wv025I)
                                            : E.intl.string(S.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(fi, {
                                            label: E.intl.string(S.default["3oUYnv"]),
                                            value: m4(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(fo, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(fa, {
                    title: E.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(fi, {
                            label: E.intl.string(S.default.IlDBN3),
                            value: m4(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(fi, {
                            label: E.intl.string(S.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, { count: m4(j.context_window_tokens) }),
                        }),
                        (0, a.jsx)(fi, {
                            label: E.intl.string(S.default.cIhN2W),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, {
                                count: m4(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(fi, {
                            label: E.intl.string(S.default["+fOn/q"]),
                            value: m4(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(fi, { label: E.intl.string(S.default.kIHga0), value: m4(j.max_build_attempts) }),
                        (0, a.jsx)(fi, { label: E.intl.string(S.default.Iw03yW), value: m4(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fO = n(237528),
    fq = n(629584),
    fF = n(531893);
function fU(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fF.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.h1SE6R),
              }),
          });
}
function fG(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fF.qf,
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
              className: fF.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fB(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fF.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var fK = n(109079);
let fH = i.memo(function (e) {
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
        className: fK.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fK.Mt,
                selectable: !0,
                children: mv(n.ts) ?? n.ts,
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
                className: fK.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fK.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fK.Cq, children: (0, a.jsx)(fO.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fK.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fO.v, { text: E.intl.string(S.default.TrC9c8), variant: "redLight" }),
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
                                      className: fK.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": E.intl.string(S.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(t7.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(tZ._, {
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
                                          className: fK.dF,
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
function fW(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([mh.A], () => mh.A.getLogs(t), [t]),
        l = (0, o.bG)([mh.A], () => mh.A.getHistoryState(t, "logs")),
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
        g = i.useMemo(
            () =>
                m8.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return m7(e);
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
        className: fK.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fK.y4,
                children: [
                    (0, a.jsx)(fq.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fK.KT,
                        children: (0, a.jsx)(mp.I, {
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
            n.length > 0 && (0, a.jsx)(fU, { state: l }),
            (0, a.jsxs)(ap.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: fK.sx,
                children: [
                    (0, a.jsx)(fB, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fG, {
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
                          : d.map((e) => (0, a.jsx)(fH, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fV(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(fa, {
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
function fX(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(fi, {
                      label: E.intl.formatToPlainString(S.default["01ZMS4"], { env: m7(n) }),
                      value: ((t = l.connected), E.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(fi, {
                      label: E.intl.string(S.default["z1dh+F"]),
                      value: m4(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${m5(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(fi, { label: E.intl.string(S.default.Iz5GnJ), value: m4(l.guild_count) }),
                  (0, a.jsx)(fi, {
                      label: E.intl.string(S.default["7UqtNv"]),
                      value: m4(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: m5(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(fi, {
                          label: E.intl.string(S.default["x3+JXJ"]),
                          value: m4(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(fi, { label: m7(n), value: E.intl.string(S.default.lTHQss) });
}
function fZ(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(fi, {
        label: m7(t),
        value: E.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: m4(n.requests),
            failures: m4(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: m5(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["7KlGT6"], { time: m5(n.since) }),
    });
}
function fY(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(fi, {
                label: E.intl.formatToPlainString(S.default["92gVTm"], { env: m7(t) }),
                value: m4(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    fi,
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
                                  ? E.intl.formatToPlainString(S.default.wxAWNv, { time: m5(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fJ(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(fi, {
        label: m7(t),
        value: E.intl.formatToPlainString(S.default.suAOj9, { calls: m4(n.calls), errors: m4(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fQ(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(fa, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(fa, {
        title: t,
        children: [
            (0, a.jsx)(fi, {
                label: E.intl.string(S.default.xtD4Zp),
                value: m4(n.requests),
                hint: E.intl.formatToPlainString(S.default["7KlGT6"], { time: m5(n.since) }),
            }),
            (0, a.jsx)(fi, { label: E.intl.string(S.default.gfRhR3), value: m4(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fs, {
                              label: E.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: m3,
                          }),
                          (0, a.jsx)(fi, {
                              label: E.intl.string(S.default.mSKImM),
                              value: m3(r),
                              hint: E.intl.formatToPlainString(S.default.JqMU05, {
                                  total: m3(n.cpu_ms_total),
                                  wall: m3(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(fi, {
                      label: E.intl.string(S.default.LEJ5r3),
                      value: E.intl.string(S.default["2Ekb2b"]),
                      hint: E.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(fi, { label: E.intl.string(S.default.xvmL1D), value: m3(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(fi, { label: E.intl.string(S.default["4sQYwH"]), value: m4(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(fi, {
                label: E.intl.string(S.default.bQenOy),
                value: m4(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(fi, { label: E.intl.string(S.default.xgpn4Y), value: m6(n.build) }),
        ],
    });
}
function f0(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(fa, {
        title: E.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(fi, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(fi, {
                                  label: E.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: m2(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: m4(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(fs, {
                                      label: E.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: m2,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function f1(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fR.Mf,
        children: [
            (0, a.jsx)(fr, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fQ, {
                            title: E.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fQ, {
                            title: E.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(f0, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(fV, {
                                title: E.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fX, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(fV, {
                                title: E.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fZ, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(fV, {
                                title: E.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fY, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(fV, {
                                title: E.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fJ, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(fu, { analytics: t.analytics }),
                        (0, a.jsxs)(fa, {
                            title: E.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(fi, {
                                    label: E.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? m6(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(fi, {
                                    label: E.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? m6(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var f2 = n(592465);
function f3(e) {
    let { projectId: t, onClose: n } = e,
        l = lC(),
        [r, s] = i.useState(() => (l && lk?.projectId === t ? "trace" : "logs")),
        u = (0, o.bG)([dz.A], () => dz.A.getStatus(t), [t]),
        c = (0, o.bG)([dz.A], () => dz.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, mg.R7)(t), (0, mg.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, _.subscribeDebugBacklog)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == lk || lk.projectId !== e) return null;
            let { traceId: t } = lk;
            return ((lk = null), t);
        })(t);
        return null != e && (mJ(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        lw(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, eX.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: dz.A.getStatus(t),
                        last_turn_usage: dz.A.getLastTurnUsage(t),
                        last_compaction: dz.A.getLastCompaction(t),
                        last_compaction_decline: dz.A.getLastCompactionDecline(t),
                        timing_traces: dz.A.getTimingTraces(t),
                        logs: mh.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, es.P0)({ text: E.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: f2.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(r_.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(r_.Ay.Icon, {
                            icon: dx.CopyIcon,
                            tooltip: E.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(r_.Ay.Icon, { icon: eo.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(r_.Ay.ChannelIcon, { icon: nS.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(r_.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: f2.rf,
                children: [
                    (0, a.jsxs)(mf.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(S.default.RvvWIh),
                        className: f2.vR,
                        children: [
                            (0, a.jsx)(mf.V.Item, { id: "logs", children: E.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(mf.V.Item, { id: "worker", children: E.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(mf.V.Item, { id: "agent", children: E.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(mf.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(fW, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(f1, { status: u, fetchState: c, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(m1, { projectId: t })
                            : (0, a.jsx)(fz, { projectId: t, status: u, fetchState: c, onRefresh: d }),
                ],
            }),
        ],
    });
}
var f4 = n(365912),
    f5 = n(873715);
function f6(e) {
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
let f7 = Object.freeze({ x: -1, y: -1 });
function f8(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = f6(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var f9 = n(192888);
function he(e, t) {
    return (0, f9.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(f8, () => ({ status: "failed" }));
}
var ht = n(108308);
let hn = { x: 25, y: 21 };
function hl(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function hr(e, t, n, l) {
    let r = hl(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function ha(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function hi(e) {
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
function hs(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = nJ(u),
        m = (0, lg.Zv)(u),
        f = (0, e7.useHasAnyModalOpen)(),
        h = (0, o.bG)([a4.default], () => a4.default.getCurrentUser()),
        g = h?.id ?? null,
        [p, x] = i.useState(null),
        [j, b] = i.useState(!1),
        [y, k] = i.useState(!1),
        [w, N] = i.useState(null),
        [C, A] = i.useState(!1),
        I = i.useRef(null),
        M = i.useRef(null),
        R = i.useRef(null),
        [P, T] = i.useState(null),
        [L, $] = i.useState(!1),
        [D, z] = i.useState(null),
        [O, q] = i.useState(null),
        F = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, K] = i.useState(null),
        H = c && !m && !f;
    null == D || (H && D.projectId === u) || z(null);
    let V = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != V) return () => tO(V, "design");
    }, [V]);
    let X = rO(r, H);
    i.useEffect(() => {
        if (!H || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void k(!0);
        (b(!0), k(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, f5.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? hi(t.response) : null;
                    null == n ? k(!0) : (x(n), nX(u, { url: n.url, title: n.title, viewport: n.viewport }));
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
    let Z = i.useRef(null);
    (i.useEffect(() => {
        if (!H || null == X || null == u) return;
        if (null == p) {
            Z.current = X;
            return;
        }
        if (rz(Z.current, X)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            Z.current = X;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, f5.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ee.current) return;
                        let l = hi(e.response);
                        null != l && (x(l), nX(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = f6(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = nB(u)).active &&
                                0 !== r.size &&
                                nK(u, {
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
    }, [H, X, p, d, u, r]),
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
        ((ee.current = H), H || ((Y.current = null), (J.current = null), (R.current = null), A(!1)));
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
                    he(n, t).then((t) => {
                        if (((Q.current = !1), ee.current)) {
                            if ("picked" !== t.status || hf(t.target, es.current.rect, es.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = nL(t.target);
                                (T((t) => (hm(t, e) ? t : e)),
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
        el = i.useCallback(() => {
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
            let e = setTimeout(() => q(null), hc);
            return () => clearTimeout(e);
        }, [O]));
    let er = null == p || null == X || p.viewport.width < 1 ? 1 : X.width / p.viewport.width,
        ea = null != p || y,
        ei = i.useMemo(() => p?.elements ?? [], [p]),
        es = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        es.current = { rect: X, scale: er };
    }, [X, er]);
    let eo = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (tO(u, "design"),
                    K(null),
                    (F.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nL(e) }));
            },
            [u],
        ),
        eu = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / er, y: (e.clientY - t.top) / er }), [er]),
        ec = i.useCallback(() => {
            let e = R.current;
            if (null == e) return;
            let t = I.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = M.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ec);
    let ed = i.useCallback(
            (e) => {
                if (null == X || null != B) return;
                if (((R.current = { x: e.clientX, y: e.clientY }), ec(), A(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > hd || Math.abs(e.clientY - D.at.y) > hd) && (F.current = !0);
                    return;
                }
                if (!ea) return void N(null);
                let t = eu(e, X);
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
                        })(ei, t.x, t.y),
                        n = null != e && hf(e, X, er) ? null : e;
                    if (null != n) {
                        let e = nL(n);
                        T((t) => (hm(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = J.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((J.current = n), (Y.current = n), et());
            },
            [X, er, ea, eu, L, ei, D, B, ec, et],
        ),
        em = null == B ? null : d.find((e) => e.id === B.id),
        ef = H && (C || D?.target.marker != null || em?.target.marker != null);
    i.useEffect(() => {
        if (ef)
            return () => {
                let e = r();
                null != e && he(e, f7);
            };
    }, [ef, r]);
    let eg = i.useCallback(() => {
        (A(!1), N(null), (J.current = null), (Y.current = null));
    }, []);
    i.useEffect(() => {
        if (!H || !C || !ea || L || null != D || null != B) return;
        let e = R.current,
            { rect: t, scale: n } = es.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((J.current = l), (Y.current = l), et());
    }, [H, C, ea, L, D, B, et]);
    let ep = i.useCallback(
            (e) => {
                if (null != D || null != B) {
                    (el(), K(null));
                    return;
                }
                if (null == w || null == X) return;
                let t = eu(e, X);
                eo(
                    w,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? nP
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(w, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [w, X, eu, D, B, eo, el],
        ),
        ex = i.useCallback(() => {
            null != u && (N(null), null != ll(u) ? la(u) : nV(u));
        }, [u]),
        ev = i.useCallback(() => {
            null != u &&
                (null != D
                    ? el()
                    : B?.confirmingRemove === !0
                      ? K({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? K(null)
                        : ex());
        }, [u, D, B, el, ex]),
        ej = i.useRef(ev),
        eb = i.useRef(u),
        ey = i.useRef(ex);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = u), (ey.current = ex));
    });
    let ek = i.useRef(null);
    i.useEffect(() => {
        if (H)
            return (
                rP.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rP.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            !(0, en.vq)(t) ||
                ek.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, f4.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eb.current || null == ll(eb.current)) && ey.current());
        }
    }, [H, s]);
    let ew = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != D || null != B || 0 === ei.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == w ? -1 : ei.findIndex((e) => e.ref === w.ref);
                    N(ei[(n + (t ? 1 : -1) + ei.length) % ei.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != w &&
                    (e.preventDefault(),
                    eo(w, nP, { x: (X?.left ?? 0) + w.rect.x * er, y: (X?.top ?? 0) + w.rect.y * er }));
            },
            [u, D, B, ei, w, eo, ev, X, er],
        ),
        eN = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((nT(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, _.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = nL(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${nz}${r}${nO}${nD(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        el(),
                        N(null)));
            },
            [u, D, el],
        ),
        eC = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, eh.vX)(u, e)), [u]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != g && nT(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = nB(u)).annotations.find((t) => t.id === e)) &&
                        nZ(l, g) &&
                        nK(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, g]),
        eS = i.useCallback(() => {
            if (null != u && null != B && null != g) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = nB(u)).annotations.find((t) => t.id === e)) &&
                        nZ(n, g) &&
                        nK(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, B, g]),
        eE = c
            ? j
                ? E.intl.string(S.default["Eb/YV9"])
                : y
                  ? E.intl.string(S.default.FD30bh)
                  : E.intl.formatToPlainString(S.default.dTSqLF, { count: d.length })
            : "",
        eI = H && null != X,
        eM = C && null == B,
        e_ = D?.target ?? em?.target ?? null,
        eR = D ?? O,
        eP = D ?? (O?.instant === !0 ? null : O),
        eT =
            null != em && null != X
                ? (function (e, t) {
                      let { left: n, top: l } = ha(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(hr(em.target, em.anchor, X, er), X)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = em;
            he(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [em, r]),
        (0, rR.createPortal)(
            (0, a.jsxs)("div", {
                ref: ek,
                className: ht.Li,
                children: [
                    (0, a.jsx)(aA.A, {
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
                                      className: ht.MT,
                                      style: { left: X.left, top: X.top, width: X.width, height: X.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": E.intl.string(S.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ed,
                                      onMouseLeave: eg,
                                      onClick: ep,
                                      onKeyDown: ew,
                                  }),
                                  null != w && null == w.marker && null == D && null == B
                                      ? (0, a.jsx)(hh, { box: hl(w, X, er) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: ht.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: ht.xz,
                                          "data-shown": null != w && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: ht.Ux,
                                              children: [
                                                  null == P
                                                      ? null
                                                      : (0, a.jsx)("span", { className: ht.Tl, children: P.kind }),
                                                  null == P || "" === P.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: ht.kh,
                                                            children: [" ", P.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: ht.Y,
                                      children: eM ? (0, a.jsx)("div", { className: ht.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: ht.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: ht.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: ht.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: ht.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: ht.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != e_ && null == e_.marker
                                      ? (0, a.jsx)("div", { className: ht.D0, style: hl(e_, X, er), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = hr(e.target, e.anchor, X, er),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: ht.xL,
                                              style: { ...ha(n, X), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(S.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: n$(e.target),
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
                                                  (e.stopPropagation(), el(), K(l));
                                              },
                                              children: (0, a.jsx)(ho, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eR || null == u
                                      ? null
                                      : (0, a.jsx)(r$, {
                                            projectId: u,
                                            at: { x: eR.at.x + 20, y: eR.at.y + 20 },
                                            bounds: X,
                                            kind: eR.label.kind,
                                            value: eR.draft,
                                            canSubmit: null != D && nT(eR.draft),
                                            onChange: (e) => {
                                                null != D && z({ ...D, draft: e });
                                            },
                                            onSubmit: eN,
                                            onDismiss: el,
                                            onUploadFile: eC,
                                            closing: null == D,
                                        }),
                                  null != em && null != B && null != eT
                                      ? (0, a.jsxs)(hu, {
                                            point: eT,
                                            frame: X,
                                            authorId: em.authorId,
                                            title: n$(em.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? K({ ...B, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || K(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(re.f, {
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
                                                                  (e.preventDefault(), eA());
                                                          },
                                                      })
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: ht.aC,
                                                          children: em.comment,
                                                      }),
                                                nZ(em, g)
                                                    ? (0, a.jsx)("div", {
                                                          className: ht.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: ht.nv,
                                                                            children: E.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(W.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(W.$, {
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
                                                                        (0, a.jsx)(W.$, {
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
                                                                            ? (0, a.jsx)(W.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nT(B.draft),
                                                                                  text: E.intl.string(S.default.iicRP9),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, a.jsx)(W.$, {
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
function ho(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([a4.default], () => a4.default.getUser(t), [t]);
    return (0, a.jsx)(oe.eu, {
        src: null == n ? null : X.Ay.getUserAvatarURL(n),
        size: ot._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function hu(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(hn);
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
        className: ht.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: ht.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: ht.ip, children: (0, a.jsx)(ho, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: ht.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: ht.zI, children: p }),
        ],
    });
}
let hc = 300,
    hd = 2;
function hm(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function hf(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function hh(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: ht.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var hg = n(659723),
    hp = n(697744),
    hx = n(130324);
function hv(e) {
    let t = (0, hp.c)(),
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
    let r = (0, av.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function hj(e) {
    let { className: t } = e,
        { Component: n, events: l } = hv(3e4);
    return (0, a.jsxs)("div", {
        className: h()(t, hx.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: hx.ol,
                children: E.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var hb = n(251363),
    hy = n(944142),
    hk = n(532247),
    hw = n(501628);
function hN(e) {
    let { progress: t } = e,
        { Component: n } = hv(1500),
        l = lN.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: hw.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: hw.PM,
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
function hC(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([hy.A], () => (s ? hy.A.getLiveReload(t) : null), [s, t]),
        c = (0, l0.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, hk.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, hk.QP)(e, s)));
            let m = (0, o.bG)(
                    [ld.A],
                    () => {
                        let e = ld.A.getFrame(n);
                        return (0, lB.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, hb.ow)(null, n) && e();
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
        h = m ? null : (0, hk.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(aA.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: hw.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(hN, { progress: h }),
                  })
                : null,
        ],
    });
}
var hA = n(357858),
    hS = n(343030),
    hE = n(317608),
    hI = n(35367),
    hM = n(771293);
let h_ = { width: 1 / 0, height: 1 / 0 };
function hR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h_;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var hP = n(702083);
function hT(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([l1.A], () => ({
            mobile: l1.A.isBuilderPreviewMobile(),
            landscape: l1.A.isBuilderPreviewLandscape(),
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
        d = n ? hR(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: h()(hP.dw, { [hP.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: h()(hP.R9, { [hP.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var hL = n(347927);
function h$(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: h()(hL.Bf, l && hL.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: hL.Ux,
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
var hD = n(957272);
function hz(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, hI.A)({ applicationId: t, surface: n, launch: l });
    if (((0, hM.A)(t, n), s === hI.n.Launched)) {
        let e = (0, a.jsx)(hE.A, { frameId: i.id, level: hS.A.WithinAppContent, className: hD.Z7, overlay: r });
        return (0, l2.Q5)(n) ? (0, a.jsx)(hT, { children: e }) : e;
    }
    return (0, a.jsx)(hO, { state: s });
}
function hO(e) {
    let { state: t } = e;
    switch (t) {
        case hI.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: hD.qs,
                children: (0, a.jsx)(h$, {
                    title: E.intl.string(S.default["9kpdo7"]),
                    body: E.intl.string(S.default.iIA8Nj),
                }),
            });
        case hI.n.NoApplication:
            return (0, a.jsx)(hj, { className: hD.qs });
        case hI.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: hD.qs,
                children: (0, a.jsx)(h$, {
                    title: E.intl.string(S.default["7k4GyN"]),
                    body: E.intl.string(S.default.zdIy3R),
                }),
            });
        case hI.n.Error:
            return (0, a.jsxs)("div", {
                className: hD.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: hD.tj,
                        children: E.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case hI.n.AwaitingLaunch:
        case hI.n.Loading:
            return (0, a.jsx)("div", { className: hD.qs, children: (0, a.jsx)(tN.y, {}) });
    }
}
var hq = n(308528),
    hF = n(334738),
    hU = n(688438),
    hG = n(365971),
    hB = n(703462);
function hK(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: hB.f,
        children: [
            (0, a.jsx)(Y.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function hH() {
    return (0, a.jsx)("div", { className: hB.f, children: (0, a.jsx)(tN.y, {}) });
}
function hW(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        c = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, o.bG)([a3.A], () => (null != c ? a3.A.getChannel(c) : null), [c]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && hq.A.preload(D.ME, t);
        }, [t]),
        (n = (0, o.bG)([tb.A], () => tb.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, hG.Xg)();
            return (
                (0, hF.yl)(t, e),
                () => {
                    (0, hF.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, lI.CN)(l).then(
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
        ? (0, a.jsx)(hK, { message: E.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(hH, {})
          : (0, a.jsx)("div", {
                className: hB.g,
                children: (0, a.jsx)(hU.A, { channel: d, guild: null, chatInputType: u1.oU.SIDEBAR }, d.id),
            });
}
var hV = n(887909),
    hX = n(570962),
    hZ = n(998475);
function hY(e) {
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
    } = (0, hV.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: hZ.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: hZ.rf,
                children: (0, a.jsx)(hX.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: hZ.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: hZ.z3,
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
                                className: h()(hZ.Qs, c ? hZ.cw : null, d ? hZ.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: hZ.o1,
                      children: s.map((e, t) => (0, a.jsx)(W.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var hJ = n(765671),
    hQ = n(269094),
    h0 = n(714917),
    h1 = n(463660),
    h2 = n(582063);
let h3 = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function h4() {
    (0, es.P0)({ text: E.intl.string(S.default.jj3abP), variant: "critical" });
}
function h5(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = E.intl.string(S.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eu.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(h6, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: h2.m2,
                        children: (0, a.jsx)(N.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(eK.K, {
                                "aria-label": r,
                                icon: eB.SettingsIcon,
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
                accept: h3.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (h3.includes(n.type)
                                ? n.size > ef.aI
                                    ? (0, es.P0)({ text: E.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, h1.M$)(t, n).catch(h4)
                                : (0, es.P0)({ text: E.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function h6(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([h0.A], () => h0.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(ec.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": E.intl.string(S.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(ed.rX, {
                children: [
                    (0, a.jsx)(ed.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: E.intl.string(S.default.uQpDky),
                        icon: l8.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(ed.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(S.default.AiAz8J),
                        icon: fy.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, h1.Og)(t).catch(h4));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(ed.rX, {
                children: (0, a.jsx)(ed.fP, {
                    id: "conjure-overlay-background-blur",
                    label: E.intl.string(S.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, h1.Y1)(t, !i) || h4();
                    },
                }),
            }),
        ],
    });
}
let h7 = "/assets/7cec34541705c795.webp";
function h8(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, hI.A)({ applicationId: t, surface: lB.ZN });
    return (i.useEffect(() => {
        let e = (0, lB.VA)(t, lB.ZN);
        return () => (0, lm.r)(e);
    }, [t]),
    r.state !== hI.n.Launched)
        ? (0, a.jsx)(hO, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(hO, { state: hI.n.Loading })
          : (0, a.jsx)(h9, { lifecycle: r, projectId: n, size: l });
}
function h9(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, hJ.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: h2.JH,
        children: [
            (0, a.jsx)(ge, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: h2.dw,
                children: (0, a.jsx)("div", {
                    className: h2.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(hQ.A, { frame: t.frame, application: t.application, className: h2.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(h5, { projectId: n }) : null,
        ],
    });
}
function ge(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([h0.A], () => (null != t ? h0.A.getBackground(t) : null)),
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
                (0, h1.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(h7);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        g = null == l || (null != f && f === u) ? h7 : f;
    return null != g && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: h()(h2.LO, { [h2.Ty]: n?.blur === !0 }),
              src: g,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  g === f && c(f);
              },
          })
        : null;
}
var gt = n(409478),
    gn = n(652227);
function gl(e) {
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
            overlayWidgetSize: m = l_,
            projectId: f,
            frameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, o.bG)([iT.A], () => null != f && null != iT.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: gn.qs, children: (0, a.jsx)(tN.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: gn.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(tN.y, {}) : (0, a.jsx)(hY, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: gn.RG,
                      children: [
                          (0, lP.yf)(u, c)
                              ? g
                                  ? (0, a.jsx)(gr, { projectId: f, onResume: p })
                                  : (0, a.jsx)(hz, { applicationId: t, surface: l, launch: r, frameOverlay: h })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: gn.qs,
                                        children: (0, a.jsx)(h$, {
                                            wide: !0,
                                            title: E.intl.string(S.default["08U+YO"]),
                                            body: E.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(gt.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(h8, { applicationId: t, projectId: f, size: m })
                              : null,
                          "bot" === c && null != n && null != f
                              ? (0, a.jsx)(hW, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: gn.qs, children: (0, a.jsx)(tN.y, {}) })
              : (0, a.jsx)(hj, { className: gn.qs });
}
function gr(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, hA.Pu)(t),
        (0, a.jsx)("div", {
            className: gn.qs,
            children: (0, a.jsx)(h$, {
                wide: !0,
                title: E.intl.string(S.default.MMWEH2),
                body: E.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(W.$, {
                              size: "sm",
                              variant: "primary",
                              icon: ez.PlayIcon,
                              text: E.intl.string(S.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var ga = n(750506),
    gi = n(867193),
    gs = n(539197),
    go = n(977020);
function gu(e) {
    let { projectId: t } = e,
        n = (0, gs.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, gs.Ie)(e);
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
        className: go.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [gs.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: h()(go.hN, go.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: h()(go.hN, go.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: h()(go.UE, { [go.SP]: n.shown, [go.Vq]: n.pressed, [go.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var gc = n(417760);
function gd(e) {
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
        u = (0, lg.CU)(n),
        c = "controlling" === t,
        d = E.intl.string(c ? (u ? S.default["VJW/5P"] : S.default["+hD2Iz"]) : S.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(W.$, {
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
              className: h()(gc.M0, gc.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(d0.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(o6.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: gc.ID, children: d }),
                  c ? (0, a.jsx)(aA.A, { children: E.intl.string(S.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: gc.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: gc.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: gc.sp,
                      children: [
                          (0, a.jsx)(o6.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(d0.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: gc.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: gc.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: gc.Rb,
                                            children: E.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: gc.lC, children: m }) : null,
              ],
          });
}
function gm(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, lg.Zv)(null != n && n === l ? t : null),
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
        c = (0, e7.useHasAnyModalOpen)(),
        d = (0, lF.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, lF.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = rD(r());
            f((t) => (rz(t, e) ? t : e));
            let t = null == h ? null : rD(h);
            (x((e) => (rz(e, t) ? e : t)), null != h && (0, gi.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, gi.C)(0));
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
                  })(m, p),
        N = (function () {
            let [e] = i.useContext(ga.uY),
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
                      ref: g,
                      className: gc.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: gc.QF,
                          children: (0, a.jsx)(gd, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, rR.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(aA.A, {
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
                ? (0, rR.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: gc.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: gc.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(gu, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var gf = n(399503),
    gh = n(853555),
    gg = n(271982),
    gp = n(187645);
let gx = new Map(),
    gv = !1;
function gj() {
    let e = new Map();
    for (let t of new Set([...lh.A.getActivityOrderedProjectIds(), ...(0, lg.T7)()])) {
        if (!lp(t) || lf.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eL.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, l2.Rc)(t);
            return (0, lB.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [t, n] of [...gx])
        e.get(t) !== n.frameId &&
            (function (e, t) {
                (gx.delete(e), t.unregisterLookup(), gg.A.removeFrameTarget(t.frameId, t.element), t.element.remove());
                let n = ld.A.getFrame(t.frameId)?.applicationId;
                null != n && setTimeout(() => lb(e, n), 0);
            })(t, n);
    for (let [t, n] of e)
        gx.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = gp.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    gb(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (gx.set(e, l),
                    (l.unregisterLookup = (0, gh.Ng)(e, () => (0, hb.n5)(n, t))),
                    gg.A.registerFrameTarget(t, n, hS.A.Backstage, void 0));
            })(t, n);
    for (let e of gx.values()) gb(e.element);
}
function gb(e) {
    let t = l1.A.isBuilderPreviewMobile();
    e.classList.toggle(gp.L, !t);
    let n = t ? hR(l1.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var gy = n(873727),
    gk = n(147248),
    gw = n(418842),
    gN = n(363195),
    gC = n(818023);
let gA = null;
var gS = n(517461),
    gE = n(761929),
    gI = n(487336);
function gM(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, gS.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, iQ.clamp)(u, 360, n),
        m = (0, gE.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: gE.R.HORIZONTAL_LEFT,
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
        className: gI.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: gI.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: gI.kL, style: { width: d }, children: l }),
        ],
    });
}
var g_ = n(541940);
function gR(e) {
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
            paused: g,
        } = e,
        [p, x] = i.useState(null),
        v = (0, l0.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([gN.A], () => (0, gy.x4)(gN.A.theme)),
            l = (0, o.bG)([gk.A], () => gk.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([V.Ay], () => ({
                reducedMotion: V.Ay.useReducedMotion,
                fontScale: (0, gy.U0)(),
                highContrast: V.Ay.isHighContrastModeEnabled,
                forcedColors: V.Ay.useForcedColors,
                underlineLinks: V.Ay.alwaysShowLinkDecorations,
            })),
            d = lN.hH.useSetting(),
            m = (0, gw.C)(),
            f = (0, o.bG)(
                [ld.A, l1.A],
                () =>
                    l1.A.isBuilderPreviewMobile() &&
                    ld.A.getFrame(t)?.applicationId === l1.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            g = i.useRef(!1),
            p = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, hb.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, gy.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, f9.W)(l, "set-env", i, {
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
                    ((h.current = !1), g.current || j.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (g.current = !1),
                () => {
                    g.current = !0;
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
                let n = (0, hb.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, hb.n5)(e, t) && ((x.current = null), b());
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
            if (null != t) return (0, gh.Ng)(t, () => (0, hb.n5)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, hb.ow)(p, j), [p, j]),
        y = i.useCallback(() => (f ? (0, hb.ow)(p, j) : p), [f, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: h()(g_.Mh, c),
                children: [
                    u,
                    g
                        ? null
                        : (0, a.jsx)(gm, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: g_.fm, children: d }),
                ],
            }),
            m,
            g
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(hs, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(af, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function gP(e) {
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
        onRestoreVersion: g,
        onImportProject: p,
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
    (0, gf.k)(t, N);
    let M = s.type === lT.U.MAIN || (0, l2.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([l1.A], () => ({
            mobile: l1.A.isBuilderPreviewMobile(),
            landscape: l1.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? gC.aX.LANDSCAPE : gC.aX.PORTRAIT), (gA = e));
                else {
                    if (gA !== e) return;
                    ((l = gC.aX.UNHANDLED), (gA = null));
                }
                tA.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let R = i.useRef(null),
        [P, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, ag.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, ag.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, lI.HV)(l), () => (0, lI.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, _.ensureConnection)(t),
                gv ||
                    ((gv = !0),
                    lh.A.addChangeListener(gj),
                    eL.Ay.addChangeListener(gj),
                    ld.A.addChangeListener(gj),
                    l1.A.addChangeListener(gj),
                    lf.A.addChangeListener(gj),
                    (0, lg.W3)(gj),
                    gj()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = R.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let L = Math.max(360, P - 320),
        $ = d || M;
    return (0, a.jsx)("div", {
        ref: R,
        className: g_.LB,
        children: (0, a.jsx)(gR, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, lP.yf)(k, w),
            paused: A,
            mainClassName: null == c ? void 0 : h()(g_.ez, { [g_.zt]: d }),
            content: (0, a.jsx)(gl, {
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
                frameOverlay: (0, a.jsx)(hC, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && $
                    ? (0, a.jsx)(gM, {
                          open: d,
                          maxWidth: L,
                          children: (0, a.jsx)("div", {
                              className: g_.cO,
                              children: x
                                  ? (0, a.jsx)(f3, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(hg.Ay, { projectId: t }),
                                            (0, a.jsx)(r_.Ay, {
                                                "aria-label": E.intl.string(E.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(r_.Ay.Icon, {
                                                                  icon: eo.P,
                                                                  tooltip: E.intl.string(S.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(r_.Ay.Title, {
                                                    children: E.intl.string(E.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: g_.cb,
                                                children: (0, a.jsx)(
                                                    mm,
                                                    {
                                                        projectId: t,
                                                        restoreState: j,
                                                        onRestoreVersion: g,
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
var gT = n(323140);
function gL(e) {
    var t, l;
    let r,
        s,
        c,
        { project: d, projectsLoaded: m, onBack: f, guildId: g } = e,
        [p, j] = i.useState(!0),
        [b, k] = i.useState(!1),
        w = lC(),
        N = i.useCallback(() => j(!0), []),
        C = i.useCallback(() => {
            (k(!1), j(!0));
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
                                (0, lS.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, es.P0)({
                                                        text: E.intl.formatToPlainString(S.default.Z4n6LX, {
                                                            title: (0, lA.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, lE.c)(u, r);
                                                null != e && (0, es.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, es.P0)({
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
        })(d, C),
        R = d?.id ?? null;
    ((t = d?.preview_application_id ?? null),
        i.useEffect(() => {
            if (null != R && null != t)
                return (
                    lj.add(t),
                    () => {
                        (lj.delete(t), lb(R, t));
                    }
                );
        }, [R, t]));
    let {
            integrationStatus: T,
            isPreviewApplicationLoading: L,
            checkingIntegration: $,
            previewReady: O,
            hasFrame: q,
            needsPermissionReview: F,
            installAuthorizeProps: U,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)(
                    [eL.Ay, lZ.A],
                    () => (null == r ? null : (eL.Ay.getIntegrationStatus(r) ?? lZ.A.getIntegrationStatus(r))),
                    [r],
                ),
                { data: c, isLoading: d } = (0, lX.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                g = (0, lP.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: u?.integration_installed ?? null,
                    botPermissionsChanged: u?.bot_permissions_changed === !0,
                }),
                p = i.useCallback(async () => {
                    if (null == r || a.current !== r) return;
                    s.current?.abort();
                    let e = new AbortController();
                    ((s.current = e), l(null));
                    try {
                        await ((0, P.CG)(r)?.catch(() => (0, P.U1)(r, e.signal)) ?? (0, P.U1)(r, e.signal));
                    } catch {
                    } finally {
                        e.signal.aborted || s.current !== e || a.current !== r || l(r);
                    }
                }, [r]);
            i.useEffect(
                () => (
                    p(),
                    () => {
                        (s.current?.abort(), (s.current = null));
                    }
                ),
                [p],
            );
            let x = (0, lY.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, lY.$)(e, x));
                }, [x, e]),
                j = i.useCallback(async () => {
                    try {
                        await v();
                    } catch {}
                    await p();
                }, [p, v]),
                b = i.useMemo(() => {
                    let t = e?.preview_application_id;
                    return null == t || d || m
                        ? null
                        : {
                              ...(0, lJ.i)({ applicationId: t, application: c ?? null, guildId: x }),
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
                needsPermissionReview: g,
                installAuthorizeProps: b,
            };
        })(d, g),
        G =
            (0, o.bG)([l3.A], () => (null == R ? void 0 : l3.A.getPublishStatus(R)?.previewAppChannels), [R]) ??
            T?.preview_app_channels,
        {
            availability: B,
            activeMode: K,
            setMode: H,
            frameSurface: V,
            frameSurfaceOptions: X,
            setFrameSurface: Z,
            appChannel: Y,
            setAppChannel: J,
            frameLaunchParams: Q,
            widgetApplicationId: ee,
        } = (0, lz.p)({
            applicationId: d?.preview_application_id ?? null,
            previewApplicationId: d?.preview_application_id ?? null,
            declaredActivity: q,
            previewSupportedSurfaces: d?.preview_supported_surfaces,
            installScope: d?.install_scope ?? null,
            ownerAuthorizationRevoked: T?.owner_authorization_revoked === !0,
            supportsOverlay: d?.preview_supported_surfaces?.includes(lM.q7.OVERLAY) === !0,
            previewAppChannels: G,
        }),
        et =
            ((l = (0, o.bG)(
                [lh.A],
                () =>
                    null == R
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(lh.A.getMessages(R)),
                [R],
            )),
            null != (r = l?.default_size) &&
            Number.isFinite(r.width) &&
            Number.isFinite(r.height) &&
            r.width > 0 &&
            r.height > 0
                ? r
                : l_);
    ((0, lR.x)(R, (e) => {
        B.modes.includes(e) && H(e);
    }),
        lw(R, () => {
            (j(!0), k(!0));
        }));
    let en = B.modes.includes("frame"),
        el = (0, o.bG)([lf.A], () => lf.A.isPaused(R), [R]),
        er = en && !el,
        {
            previewTargetOptions: ea,
            handleSelectPreviewTarget: ei,
            mobilePreview: eo,
            mobilePreviewLabel: eu,
            handleToggleMobilePreview: ec,
            landscapePreview: ed,
            rotatePreviewLabel: em,
            handleRotatePreview: ef,
            previewSurface: eh,
            previewFrame: eg,
            isRefreshing: ex,
            handleRefresh: ev,
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
                                          t === lT.U.APP_CHANNEL && n.length > 1
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
                f = (0, o.bG)([l1.A], () => l1.A.isBuilderPreviewMobile()),
                h = E.intl.string(f ? S.default.tKGF0Q : S.default.peqEOY),
                g = i.useCallback(() => (0, lI.GG)(!f), [f]),
                p = (0, o.bG)([l1.A], () => l1.A.isBuilderPreviewLandscape()),
                x = E.intl.string(p ? S.default.tunI2l : S.default.DoNdjA),
                v = i.useCallback(() => (0, lI.Lw)(!p), [p]),
                j = (0, l2.jS)(t),
                b = i.useMemo(() => (0, l2.Op)(j, l), [j, l]),
                y = (0, l0.A)(t?.preview_application_id ?? null, b),
                k = (0, lB.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || lQ.A.refreshProxyTicket(y.id);
                }, [y, k]);
            return {
                previewTargetOptions: d,
                handleSelectPreviewTarget: m,
                mobilePreview: f,
                mobilePreviewLabel: h,
                handleToggleMobilePreview: g,
                landscapePreview: p,
                rotatePreviewLabel: x,
                handleRotatePreview: v,
                previewSurface: b,
                previewFrame: y,
                isRefreshing: k,
                handleRefresh: w,
            };
        })({
            project: d,
            modes: B.modes,
            frameSurface: V,
            frameSurfaceOptions: X,
            previewAppChannels: G,
            setMode: H,
            setFrameSurface: Z,
            setAppChannel: J,
        }),
        ej = p && !b,
        eb = E.intl.string(ej ? S.default.JD6Oit : S.default.xjJAQm),
        ey = i.useCallback(() => {
            if (b) {
                (k(!1), j(!0));
                return;
            }
            j((e) => !e);
        }, [b]),
        eN = i.useCallback(() => j(!1), []),
        {
            designFeedbackActive: eA,
            designFeedbackToggleRef: eS,
            agentDrivingPreview: eE,
            designFeedbackLabel: eI,
            handleToggleDesignFeedback: eM,
        } = (function (e, t, n) {
            let { active: l } = nJ(e);
            i.useEffect(() => {
                null != e && l && !t && nV(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, lg.Zv)(e),
                s = E.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void nV(e);
                        (n(), nH(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(R, er, C),
        [e_] = i.useState(() => ep.isPlatformEmbedded && (0, lV.qM)()),
        eR = null != lo(R);
    i.useEffect(() => {
        null != R && eR && !er && la(R);
    }, [R, eR, er]);
    let eP = i.useCallback(() => {
            null != R &&
                (C(),
                (function (e) {
                    if (null != ll(e)) return;
                    let { byProject: t } = lt.getState();
                    lt.setState({ byProject: { ...t, [e]: ln } });
                })(R));
        }, [R, C]),
        e$ = i.useCallback(() => {
            null != R && la(R);
        }, [R]),
        eD = eR ? E.intl.string(S.default.tuQ5f3) : eI,
        ez = i.useCallback(() => {
            k((e) => !e && (j(!0), !0));
        }, []),
        eO = i.useCallback(() => k(!1), []),
        eq = i.useCallback(() => {
            null != R && (0, lI._j)(R);
        }, [R]),
        eF = i.useCallback(() => {
            null != R && (el ? (0, lI._j)(R) : (0, lI.di)(R, eg?.id));
        }, [R, el, eg?.id]),
        eU = i.useCallback(() => {
            var e, t;
            (null != d && ((e = d.id), (t = eg?.id), (0, _.closeConnection)(e), (0, lm.r)(t)), f());
        }, [d, eg?.id, f]),
        eG =
            ((s = i.useCallback(() => {
                null != d && (N(), (0, _.sendUserMessage)(d.id, E.intl.string(S.default.oU20rd)));
            }, [d, N])),
            {
                onExport: s,
                onImport: (c = eC(
                    i.useCallback(
                        (e) => {
                            if (null == d) return;
                            let t = d.id,
                                n = ew(e);
                            null != n
                                ? (0, es.P0)({ text: n, variant: "critical" })
                                : (0, eT.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: d.name }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          N();
                                          try {
                                              await ek(t, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, es.P0)({
                                                  text: E.intl.string(S.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [d, N],
                    ),
                )).open,
                importInput: c.input,
            }),
        eK = i.useCallback(() => {
            null != d && (0, tu.A)(d, g);
        }, [d, g]),
        eH = (0, lP.JR)(K, F)
            ? { type: "permissions", authorizeProps: U }
            : $ && null == T
              ? { type: "checking" }
              : void 0,
        eW = (0, o.bG)([eL.Ay], () => null != R && eL.Ay.isProjectDeleting(R), [R]);
    i.useEffect(() => {
        ((null == d && m) || eW) && (0, u.bG)(D.BVt.CHANNEL(g, z.VV.CONJURE));
    }, [g, d, m, eW]);
    let {
            publishOptions: eV,
            publish: eX,
            publishing: eZ,
            confirmation: eY,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...rM,
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
                c = (0, e0.Ay)(e, u),
                d = c?.publishing === !0;
            i.useEffect(() => {
                d && (s(), r(null));
            }, [d, s]);
            let m = d ? null : l;
            return { publishOptions: u, publish: c, publishing: d, confirmation: m };
        })(R, g, $ || L),
        eJ =
            null == d
                ? null
                : (0, a.jsx)(to, {
                      projectId: d.id,
                      projectName: d.name,
                      guildId: g,
                      projectGuildId: d.guild_id,
                      isOwner: (0, eL.PV)(d),
                      canRemix: (0, eL.H_)(d),
                      onRefresh: (0, lB.x1)(eg) ? ev : void 0,
                      isRefreshing: ex,
                      onTogglePreviewPaused: "frame" === K ? eF : void 0,
                      previewPaused: el,
                      previewPauseDisabled: !el && eE,
                      onClose: eU,
                      onExport: eG.onExport,
                      onImport: eG.onImport,
                      onRemix: eK,
                      onConnectTool: () => {
                          var e;
                          return (
                              (e = d.id),
                              void (0, e7.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([n.e("834460"), n.e("960521")]).then(
                                      n.bind(n, 699760),
                                  );
                                  return (n) => (0, a.jsx)(t, { ...n, projectId: e });
                              })
                          );
                      },
                      onHistory: () => {
                          var e;
                          return (
                              (e = {
                                  projectId: d.id,
                                  installScope: d.install_scope,
                                  restoreDisabled: A?.status === "restoring",
                                  onRestoreVersion: (e, t) => I(e, t, !0),
                              }),
                              void (0, e7.openModalLazy)(async () => {
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
                          B.modes.includes("widget") && "unavailable-authorization-revoked" !== B.profileState
                              ? ee
                              : null,
                      previewProjectId: d.id,
                  }),
        eQ =
            null == eX || null == d
                ? null
                : (0, a.jsx)("div", {
                      className: gT.As,
                      onMouseDown:
                          null == R || eX.disabled || eZ
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, l4.dx)(R);
                                },
                      children: (0, a.jsx)(rk, {
                          project: d,
                          publish: eX,
                          menu: eJ,
                          children: (e) =>
                              (0, a.jsx)(W.$, {
                                  size: "sm",
                                  variant: eX.status?.state === "up_to_date" ? "secondary" : "primary",
                                  icon: eZ ? g$ : null != eY ? nC.U : void 0,
                                  text: eY ?? eX.label,
                                  ...e,
                              }),
                      }),
                  }),
        e1 = null == d ? void 0 : () => (0, e2.A)(d.id, { guildId: g, isPreview: !0, publishOptions: eV }),
        e3 = (0, a.jsx)(M, {
            title: d?.name ?? E.intl.string(S.default.G1WwgK),
            breadcrumb: { title: E.intl.string(S.default.uk6jhJ), onClick: f },
            project: d,
            onOpenProjectSettings: e1,
            actions:
                null == d
                    ? null
                    : (0, a.jsxs)("div", {
                          className: gT.FO,
                          children: [
                              (0, a.jsx)(lW, {
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
                                  })(K, V, Y),
                                  onChange: ei,
                              }),
                              en
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === K
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: eo ? gO : gz,
                                                      tooltip: eu,
                                                      "aria-label": eu,
                                                      selected: eo,
                                                      onClick: ec,
                                                  })
                                                : null,
                                            eo && "frame" === K
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: gq,
                                                      tooltip: em,
                                                      "aria-label": em,
                                                      selected: ed,
                                                      onClick: ef,
                                                  })
                                                : null,
                                            (0, a.jsx)(lc, {
                                                enabled: e_ && !eR && !eE && !el,
                                                onLongPress: eP,
                                                children: (0, a.jsx)(y.A.Icon, {
                                                    ref: eS,
                                                    icon: nA.x,
                                                    iconClassName: gT.D8,
                                                    tooltip: eD,
                                                    "aria-label": eD,
                                                    selected: eR || eA,
                                                    disabled: el || (eE && !eR),
                                                    onClick: eR ? e$ : eM,
                                                }),
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" !== K || el
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(nR.A, { frame: eg }),
                                            (0, a.jsx)(lK, { frame: eg, controlProjectId: d.id }),
                                        ],
                                    }),
                              (0, a.jsx)("div", { className: gT.YJ }),
                              w
                                  ? (0, a.jsx)(y.A.Icon, {
                                        icon: nS.BugIcon,
                                        tooltip: E.intl.string(S.default.Mt5k9d),
                                        "aria-label": E.intl.string(S.default.Mt5k9d),
                                        selected: b,
                                        onClick: ez,
                                    })
                                  : null,
                              (0, a.jsx)(y.A.Icon, {
                                  icon: eB.SettingsIcon,
                                  tooltip: E.intl.string(S.default.I2XSKe),
                                  "aria-label": E.intl.string(S.default.I2XSKe),
                                  onClick: e1,
                              }),
                              eJ,
                              ej
                                  ? null
                                  : (0, a.jsx)(y.A.Icon, { icon: gD, tooltip: eb, "aria-label": eb, onClick: ey }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: h()(gT.nj, ny.T),
        children: [
            eG.importInput,
            (0, a.jsx)("main", {
                className: gT.JX,
                children:
                    null == d
                        ? (0, a.jsxs)("div", {
                              className: gT.j5,
                              children: [
                                  e3,
                                  (0, a.jsxs)("div", {
                                      className: gT.sD,
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
                                          (0, a.jsx)(W.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: E.intl.string(S.default["WFJ/vb"]),
                                              onClick: () => (0, P.hF)(g),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(e0.bI.Provider, {
                              value: eV,
                              children: (0, a.jsx)(
                                  gP,
                                  {
                                      projectId: d.id,
                                      designFeedbackToggleRef: eS,
                                      applicationId: d.preview_application_id,
                                      previewApplicationId: d.preview_application_id,
                                      surface: eh,
                                      frameLaunchParams: Q,
                                      header: e3,
                                      chatOpen: p,
                                      onCloseChat: eN,
                                      chatHeaderAction: eQ,
                                      debugOpen: w && b,
                                      onCloseDebug: eO,
                                      onRestoreVersion: I,
                                      onImportProject: (0, eL.PV)(d) ? eG.onImport : void 0,
                                      restoreState: A,
                                      previewReady: O,
                                      previewGate: eH,
                                      availability: B,
                                      activeMode: K,
                                      widgetApplicationId: ee,
                                      overlayWidgetSize: et,
                                      previewPaused: el,
                                      onResumePreview: eq,
                                  },
                                  d.id,
                              ),
                          }),
            }),
        ],
    });
}
function g$() {
    return (0, a.jsx)(tN.y, { type: tN.t.SPINNING_CIRCLE_SIMPLE, className: gT.Hv, itemClassName: gT.C5 });
}
function gD(e) {
    return (0, a.jsx)(nE.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function gz(e) {
    return (0, a.jsx)(nI.u, { ...e, size: "custom", width: 20, height: 20 });
}
function gO(e) {
    return (0, a.jsx)(nM.k, { ...e, size: "custom", width: 20, height: 20 });
}
function gq(e) {
    return (0, a.jsx)(n_.H, { ...e, size: "custom", width: 20, height: 20 });
}
function gF(e) {
    let { guildId: t, projectId: n } = e,
        l = (0, o.yK)([c.Ay], () => c.Ay.getSelfMember(t)?.roles ?? [], [t]),
        r = (0, o.bG)(
            [d.A, m.A],
            () => {
                let e = d.A.getGuild(t);
                return null != e && m.A.can(D.xBc.MANAGE_GUILD, e);
            },
            [t],
        ),
        s = n ?? null;
    (i.useEffect(() => {
        (0, P.hF)(t);
    }, [t, l, r]),
        i.useEffect(() => {
            (0, P.dm)(t, s);
        }, [t, s]));
    let f = i.useCallback(() => {
            (0, u.pX)(D.BVt.CHANNEL(t, z.VV.CONJURE));
        }, [t]),
        h = (0, o.bG)(
            [eL.Ay],
            () => {
                if (null == s) return null;
                let e = eL.Ay.getProject(s);
                return null == e || (0, eL.PV)(e) || e.guild_id === t ? e : null;
            },
            [s, t],
        ),
        g = (0, o.bG)([eL.Ay], () => eL.Ay.hasFetchedGuildProjects(t), [t]);
    return null != s
        ? (0, a.jsx)(gL, { project: h, projectsLoaded: g, onBack: f, guildId: t }, s)
        : (0, a.jsx)(nN, { guildId: t });
}
