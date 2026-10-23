(n.r(t), n.d(t, { default: () => p6 }));
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
    P = n(639519),
    R = n(371169);
let T = { main: [], subagent: [], thinking: ["low", "medium", "high", "xhigh", "max"] },
    L = { tier: "balanced" },
    $ = { simple: { thinking: "high" }, balanced: { thinking: "high" }, complex: { thinking: "high" } };
var D = n(652215),
    q = n(746080);
async function O(e) {
    let { guildId: t, installScope: n, prompt: l, modelSettings: r, start: a } = e,
        i = await (0, R.gA)(
            null != n ? { guild_id: t, install_scope: n } : { guild_id: t, auto_install_scope: !0, prompt: l ?? "" },
        );
    return (
        (0, _.ensureConnection)(i),
        (0, _.stageModelSettings)(i, r ?? L),
        await a(i),
        (0, u.pX)(D.BVt.CHANNEL(t, q.VV.CONJURE, i)),
        i
    );
}
var z = n(260498),
    F = n(941985),
    U = n(506774);
let G = "ConjureProjectsPanelOpen";
var B = n(636537),
    K = n(73153),
    H = n(195880);
function V(e, t) {
    K.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: e, draft: t });
}
var W = n(245179),
    X = n(435558),
    Z = n.n(X);
let Y = "ConjureComposerDrafts";
function J() {
    return U.w.get(Y) ?? {};
}
let Q = new Map(),
    ee = Z().throttle(() => {
        if (0 === Q.size) return;
        let e = J();
        for (let [t, n] of Q) "" === n ? delete e[t] : (e[t] = n);
        (Q.clear(), U.w.set(Y, e));
    }, 1e3);
class et extends o.Ay.Store {
    getDraft(e) {
        let t = Q.get(e);
        return null != t ? t : (J()[e] ?? "");
    }
}
let en = new et(K.h, {
    LOGOUT: function () {
        return (Q.clear(), ee.cancel(), U.w.remove(Y), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (Q.set(t, n), ee(), "" === n && ee.flush(), !1);
    },
});
(n(323874), n(14289), n(35956));
var el = n(839214),
    er = n(666476),
    ea = n(989145);
let ei = [],
    es = 1,
    eo = (0, el.D)(() => ({ draftsByProject: {} }));
function eu(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? ei;
}
function ec(e, t) {
    return eu(eo.getState(), e, t);
}
function ed(e, t, n) {
    let { draftsByProject: l } = eo.getState();
    eo.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function em(e, t, n, l) {
    let r = ec(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (ed(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function ef(e, t) {
    (0, ea.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function eh(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && ef(e, t.ref.id));
}
function ep(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = eo.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? ei) n ? eh(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    eo.setState({ draftsByProject: i });
}
function eg(e) {
    return E.intl.formatToPlainString(S.default.JZ59Bo, { size: (0, er.sM)((0, er.Ju)(e)) });
}
function ex(e, t, n) {
    if (0 === n.length) return;
    let l = n.map((e) => {
        let { draft: t, upload: n } = e;
        return { draft: { ...t, localId: es++ }, upload: n };
    });
    for (let { draft: n, upload: r } of (ed(e, t, [
        ...ec(e, t),
        ...l.map((e) => {
            let { draft: t } = e;
            return t;
        }),
    ]),
    l))
        r?.().then(
            (l) => {
                if ("errorText" in l) return void em(e, t, n.localId, { status: "error", errorText: l.errorText });
                let { converted: r, ...a } = l;
                em(e, t, n.localId, { ...r, status: "ready", ref: a })
                    ? setTimeout(
                          () => em(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default.E7dS5n) }),
                          er.o2 - 3e5,
                      )
                    : ef(e, a.id);
            },
            (l) => {
                (console.error("[conjure] attachment upload failed", l),
                    em(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default["kUw/b1"]) }));
            },
        );
}
function ev(e, t) {
    let n = ec(e, t);
    if (0 !== n.length) {
        for (let t of n) eh(e, t);
        ed(e, t, ei);
    }
}
function ej(e, t) {
    let n = ec(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (ed(e, t, ei), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function eb(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = ec(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? ej(e, "chat") : [];
    (0, _.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(K.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(eo.getState().draftsByProject)) ep(e, { deleteFromWorker: !0 });
}),
    K.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        ep(t, { deleteFromWorker: !1 });
    }));
var ey = n(975189);
let ek = "ConjureHeldPrompts",
    ew = new Map(),
    eN = new Map();
function eC(e, t) {
    let n =
        ew.get(e) ??
        (async () => {
            try {
                await t();
            } catch (t) {
                throw (ew.delete(e), t);
            }
        })();
    return (ew.set(e, n), n);
}
function eA() {
    return U.w.get(ek) ?? {};
}
function eS(e) {
    let { [e]: t, ...n } = eA();
    U.w.set(ek, n);
}
function eE(e, t, n) {
    (eS(e),
        (0, _.withdrawUserMessage)(e, t.nonce),
        "" === en.getDraft(e) && V(e, t.message),
        0 === ec(e, "chat").length &&
            ex(
                e,
                "chat",
                t.attachments.map((e) => ({
                    draft: { name: e.name, contentType: e.content_type, status: "ready", ref: e },
                })),
            ),
        n());
}
function eI(e, t) {
    if (0 === e.length) return {};
    let n = e.find((e) => e.id === t);
    return {
        input: "server",
        note: E.intl.string(S.default.SU9K9U),
        ...(null != n ? { default_entities: [{ id: n.id, name: n.name, kind: "server" }] } : {}),
    };
}
function eM(e) {
    return {
        id: e.id,
        questions: e.questions.map((e) => ({
            id: e.id,
            question: e.question,
            recommendation_reason: "",
            options: [],
            allow_custom: !1,
            note: E.intl.string(S.default.ZKPaWY),
        })),
    };
}
async function e_(e, t, n) {
    let l = await B.Bo.put({
        url: `${D.Rsh.CONJURE_PROJECT(e)}/install-scope`,
        body: { install_scope: t, ...(null != n ? { guild_id: n } : {}) },
        rejectWithError: !0,
    });
    K.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: l.body });
}
var eP = n(89310),
    eR = n(821609),
    eT = n(775602),
    eL = n(486020),
    e$ = n(687966),
    eD = n(323384),
    eq = n(632015),
    eO = n(231483),
    ez = n(430392);
let eF = {
    games: e$.GameControllerIcon,
    apps: eD.k,
    profile_widget: eq.f,
    automod: eO.ShieldIcon,
    chat_bot: ez.RobotIcon,
};
var eU = n(621466);
let eG = "data-conjure-carousel-card";
var eB = n(19493);
let eK = i.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n } = e,
            l = eF[t.category];
        return (0, a.jsxs)("li", {
            className: eB.AS,
            [eG]: "",
            children: [
                (0, a.jsxs)("div", {
                    className: eB.rl,
                    children: [
                        (0, a.jsx)("img", {
                            className: eB.my,
                            src: (0, eL.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: eB.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eB.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eB.xn,
                            children: [
                                (0, a.jsx)("img", { className: eB.q_, src: t.image, alt: "" }),
                                (0, a.jsx)("div", {
                                    className: eB.o1,
                                    children: (0, a.jsx)(eR.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: E.intl.string(S.default["6CQjTy"]),
                                        onClick: () => n(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: eB.qr,
                            children: [
                                (0, a.jsx)("div", {
                                    className: eB.Yl,
                                    "aria-hidden": !0,
                                    children: (0, a.jsx)(l, { size: "md", color: w.A.colors.ICON_STRONG }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: eB.PJ,
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
    eH = i.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: l } = e,
            r = (0, o.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
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
                        ((r = (l = Array.from(n.querySelectorAll(`[${eG}]`))).map(
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
                    ((h = (0, eU.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), b());
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
                className: r ? eB.vV : eB.Dk,
                "aria-label": E.intl.string(S.default.Qc4S39),
                children: (0, a.jsx)("ul", {
                    ref: u,
                    className: eB.u4,
                    children: n.map((e) => (0, a.jsx)(eK, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var eV = n(858899),
    eW = n(789645),
    eX = n(265872),
    eZ = n(980707),
    eY = n(477782),
    eJ = n(81369),
    eQ = n(77729),
    e0 = n(723702),
    e1 = n(264572).Buffer;
async function e2(e, t) {
    if (e0.isPlatformEmbedded) {
        let n = e1.from(await e.arrayBuffer());
        if ("function" == typeof eQ.A.fileManager.saveWithDialog2) await eQ.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await eQ.A.fileManager.saveWithDialog(n, t);
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
var e3 = n(688954);
class e5 extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function e4(e, t) {
    let n = await (0, e3.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new e5(n.status);
    return await n.blob();
}
async function e6(e, t, n) {
    (0, _.ensureConnection)(e);
    let l = await (0, ea.vX)(e, t);
    (0, _.sendUserMessage)(e, n, [l]);
}
function e7(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, er.Oq)(e.size, t)
        ? null
        : E.intl.formatToPlainString(S.default.ThxcOX, { size: (0, er.sM)((0, er.Ju)(t)) });
}
async function e8(e, t) {
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
        r = await e4(e, l);
    await e2(r, l);
}
function e9(e) {
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
var te = n(950305),
    tt = n(664121);
let tn = [
    { value: "user", icon: te.UserIcon, nameMessage: S.default.s1TsXl },
    { value: "guild", icon: tt.R, nameMessage: S.default.LlLIJw },
];
function tl(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = e9(i.useCallback((e) => n(e, "user"), [n])),
        s = e9(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eX.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: eX.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(eZ.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": E.intl.string(S.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(eY.rX, {
                            label: E.intl.string(S.default.NyVn6T),
                            children: tn
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: E.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        eY.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(eR.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: eJ.H,
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
var tr = n(418811),
    ta = n(246338),
    ti = n(290076),
    ts = n(442433),
    to = n(314116),
    tu = n(782603),
    tc = n(780338),
    td = n(782134),
    tm = n(113494),
    tf = n(663417),
    th = n(70688),
    tp = n(173936),
    tg = n(473935),
    tx = n(625903),
    tv = n(408278),
    tj = n(365199),
    tb = n(7437),
    ty = n(147036),
    tk = n(957565),
    tw = n(785389),
    tN = n(123917),
    tC = n(860402);
let tA = new Set();
var tS = n(893067),
    tE = n(442331),
    tI = n(616334);
n(321073);
var tM = n(189714),
    t_ = n(733791),
    tP = n(189213),
    tR = n(331322),
    tT = n(192308),
    tL = n(664619),
    t$ = n(706935);
function tD(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = "delete" === l,
        h = f ? (0, t_.fI)(n) : (0, t_.Kd)(n),
        p = f ? null : (0, t_.L4)(n),
        g = (0, t_.Mi)(n),
        x = f
            ? E.intl.formatToPlainString(S.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(S.default.x6FvsZ, { app: n.appName });
    async function j() {
        (c(!0), m(null));
        let e = f ? (0, R.xx)(t.id) : (0, tL.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(E.intl.string(f ? S.default["0XDHob"] : S.default.PJ2Fkn))
            : (f || (0, eV.P0)({ text: (0, t_.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(tP.a, {
        ...r,
        role: "alertdialog",
        title: f ? x : (0, t_.WX)((0, t$.tb)(S.default.x6FvsZ, n.appName)),
        subtitle: f ? (0, t_.J)(n) : E.intl.string(S.default["8OKM1N"]),
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
        children: (0, a.jsxs)(tR.B, {
            gap: 12,
            children: [
                h.length > 0 || null != p
                    ? (0, a.jsx)(t$.Ay, {
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
function tq(e) {
    (0, tT.openModal)((t) => (0, a.jsx)(tD, { ...t, ...e }));
}
var tO = n(587895);
function tz(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, u] = i.useState(null),
        c = (0, o.bG)([tO.A], () => tO.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        d = E.intl.formatToPlainString(S.default.m8KWic, { app: c });
    async function m() {
        (r(!0), u(null));
        let e = await (0, tL.R_)(t.id);
        (r(!1), e)
            ? ((0, eV.P0)({ text: E.intl.formatToPlainString(S.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : u(E.intl.string(S.default["rE/0SD"]));
    }
    return (0, a.jsx)(tP.a, {
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
var tF = n(552821);
let tU = [];
function tG(e) {
    (0, eV.P0)({ text: e, variant: "critical" });
}
function tB(e) {
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
        N = (0, tM.iI)(t),
        C = i.useContext(tS.bI),
        { pending: A, refresh: I } = (0, tb.A)(y ?? null),
        { pending: M, connect: _ } = (function (e, t) {
            let [n, l] = i.useState(tA),
                r = i.useRef(tA),
                a = i.useCallback((e) => {
                    ((r.current = (0, tw.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, tw.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, tC.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, tN.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, tw.rq)(l.error)
                                          ? E.intl.string(S.default["jCQ/1B"])
                                          : E.intl.string(S.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(k ?? null, tG),
        P = (0, o.bG)([tE.A], () => (null == k ? tU : tE.A.getDeclaredConnections(k))),
        T = i.useMemo(() => (0, tw.Xl)(P), [P]),
        L = (0, t_.Bs)(t),
        $ = (0, t_.CU)(t) && s,
        D = (0, o.bG)(
            [z.Ay],
            () => {
                let e = z.Ay.getProject(t);
                return null != e && (0, z.jf)(e);
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
        F = i.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        U = null != m && u,
        G = s && null != d,
        B = U || null != c || G || null != f || null != h,
        K = tk.p5 && null != l,
        H = tk.p5,
        V = N ? tu.BellIcon : tc.BellSlashIcon,
        W = v ? td.PlayIcon : tm.PauseIcon;
    return (0, a.jsxs)(eZ.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: w,
        onSelect: w,
        children: [
            null != p || null != x || null != b
                ? (0, a.jsxs)(eY.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "refresh",
                                    icon: tf.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: tf.RefreshIcon },
                                    label: E.intl.string(S.default["p4B/7M"]),
                                    disabled: g,
                                    action: p,
                                })
                              : null,
                          null != x
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: W,
                                    leadingAccessory: { type: "icon", icon: W },
                                    label: E.intl.string(v ? S.default.ZKd2Cw : S.default.VHxerm),
                                    disabled: j,
                                    action: x,
                                })
                              : null,
                          null != b
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "close",
                                    icon: th.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: th.DoorExitIcon },
                                    label: E.intl.string(S.default["/TlGcK"]),
                                    action: b,
                                })
                              : null,
                      ],
                  })
                : null,
            O.length > 0
                ? (0, a.jsx)(eY.rX, {
                      children: O.map((e) =>
                          (0, a.jsx)(
                              eY.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void I();
                                      let t = null == e.connectionType ? null : F.get(e.connectionType);
                                      null != t && _(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(eY.rX, {
                children: (0, a.jsx)(eY.Dr, {
                    id: "mute",
                    label: E.intl.string(N ? S.default.s9rCuH : S.default["a+i/As"]),
                    icon: V,
                    leadingAccessory: { type: "icon", icon: V },
                    action: () => (0, tM.$L)(t, !N),
                }),
            }),
            B
                ? (0, a.jsxs)(eY.rX, {
                      children: [
                          U
                              ? (0, a.jsx)(eY.Dr, { id: "remix", label: E.intl.string(S.default.XWgAfc), action: m })
                              : null,
                          null != c
                              ? (0, a.jsx)(eY.Dr, { id: "export", label: E.intl.string(S.default.WsEEP7), action: c })
                              : null,
                          G
                              ? (0, a.jsx)(eY.Dr, { id: "import", label: E.intl.string(S.default.rWGY3e), action: d })
                              : null,
                          null != f
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(S.default.yOIql5),
                                    action: f,
                                })
                              : null,
                          null != h
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "history",
                                    label: E.intl.string(S.default["3hIVou"]),
                                    action: h,
                                })
                              : null,
                      ],
                  })
                : null,
            H
                ? (0, a.jsxs)(eY.rX, {
                      children: [
                          K
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: tp.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: tp.LinkIcon },
                                    action: () =>
                                        (0, tk.C)((0, ty.n)(l, q.VV.CONJURE, t), () =>
                                            (0, eV.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eY.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(S.default["nm/zuU"]),
                              icon: tg.L,
                              leadingAccessory: { type: "icon", icon: tg.L },
                              action: () =>
                                  (0, tk.C)(t, () =>
                                      (0, eV.P0)({ text: E.intl.string(S.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || D || L?.canRemoveBot === !0
                ? (0, a.jsxs)(eY.rX, {
                      children: [
                          s || D
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "settings",
                                    label: E.intl.string(S.default.FzfmQ8),
                                    icon: tx.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: tx.SettingsIcon },
                                    action: () =>
                                        (0, tI.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: C,
                                        }),
                                })
                              : null,
                          L?.canRemoveBot === !0
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(S.default["3gKG2j"], { server: L.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = z.Ay.getProject(t);
                                        null != e && tq({ project: e, target: L, action: "remove" });
                                    },
                                })
                              : null,
                          $
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(S.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = z.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, tT.openModal)((t) => (0, a.jsx)(tz, { ...t, ...e })));
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(eY.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = z.Ay.getProject(t);
                                        if (null != e && null != L) tq({ project: e, target: L, action: "delete" });
                                        else
                                            (0, to.A)({
                                                title: E.intl.formatToPlainString(S.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(S.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, R.K)(t, () =>
                                                        (0, eV.P0)({
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
function tK(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(eX.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eX.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tB, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: tF.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t["UKOtz+"]),
                              children: (0, a.jsx)(tv.K, {
                                  icon: tj.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(y.A.Icon, {
                              icon: tj.MoreHorizontalIcon,
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
var tH = n(95264);
function tV(e, t) {
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
                    (0, eV.P0)({ text: E.intl.formatToPlainString(S.default.aN2JdD, { name: l }) }),
                    e8(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[conjure] project export failed", n, e),
                                (0, eV.P0)({
                                    text:
                                        409 === (t = e instanceof e5 ? e.status : null)
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
                onImport: (s = e9(
                    i.useCallback(
                        (e) => {
                            let r = e7(e);
                            null != r
                                ? (0, eV.P0)({ text: r, variant: "critical" })
                                : (0, to.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: l }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, u.pX)(D.BVt.CHANNEL(t, q.VV.CONJURE, n));
                                          try {
                                              await e6(n, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, eV.P0)({
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
        isOwner: (0, z.PV)(e),
        canRemix: (0, z.H_)(e),
        onRemix: () => (0, tH.A)(e, t),
        onExport: o,
    };
}
function tW(e) {
    let { project: t, guildId: n } = e,
        l = tV(t, n);
    return (0, a.jsx)(tB, { ...l, onCloseMenu: ts.Z_ });
}
function tX(e) {
    let { project: t, guildId: n } = e,
        l = tV(t, n);
    return (0, a.jsx)(tK, { ...l, trigger: "iconButton" });
}
var tZ = n(638693);
class tY extends Error {}
function tJ(e) {
    let { guildId: t, modelSettings: n, onClose: l } = e,
        r = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, ta.Ot)(e, t)
                    ? (0, u.pX)(D.BVt.CHANNEL(t, q.VV.CONJURE, e.id))
                    : (0, tr.A)(e);
            },
            [t],
        ),
        s = i.useCallback((e) => (0, a.jsx)(tX, { project: e, guildId: t }), [t]),
        o = i.useCallback(
            (e, n) => {
                (0, ts.jA)(e, () => (0, a.jsx)(tW, { project: n, guildId: t }));
            },
            [t],
        ),
        [c, d] = i.useState(!1),
        m = i.useCallback(
            async (e, l) => {
                let r = e7(e);
                if (null != r) return void (0, eV.P0)({ text: r, variant: "critical" });
                d(!0);
                try {
                    await O({
                        guildId: t,
                        installScope: l,
                        modelSettings: n,
                        start: async (t) => {
                            try {
                                await e6(t, e, E.intl.string(S.default["LUc7/5"]));
                            } catch {
                                throw (await (0, R.xx)(t).catch(() => void 0), new tY());
                            }
                        },
                    });
                } catch (e) {
                    (0, eV.P0)({
                        text: e instanceof tY ? E.intl.string(S.default["Q+l4Hv"]) : (0, P.mG)(e),
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
        className: tZ.pz,
        "aria-label": f,
        children: [
            (0, a.jsxs)("div", {
                className: tZ.wx,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-strong", children: f }),
                    (0, a.jsxs)("div", {
                        className: tZ.$s,
                        children: [
                            (0, a.jsx)(tl, { importing: c, onImport: m }),
                            (0, a.jsx)(y.A.Icon, { icon: eW.P, tooltip: h, "aria-label": h, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(g.Ip, {
                className: tZ.XG,
                children: (0, a.jsx)(ti.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: s,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var tQ = n(559106),
    t0 = n(663341),
    t1 = n(783977),
    t2 = n(559647),
    t3 = n(531685),
    t5 = n(477262),
    t4 = n(432017);
let t6 = [
    {
        id: "add-images-videos",
        label: S.default["51+9lc"],
        icon: t5.s,
        accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
    },
    {
        id: "add-sounds",
        label: S.default["10ljr2"],
        icon: t4.T,
        accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
    },
    { id: "add-other-files", label: S.default.aotDee, icon: eJ.H, accept: "" },
];
var t7 = n(289873),
    t8 = n(285796),
    t9 = n(922329);
async function ne(e) {
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
var nt = n(153171);
let nn = er.lN;
function nl(e, t, n, l) {
    let r = ec(e, t).length;
    ex(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= nn)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: E.intl.formatToPlainString(S.default.Q0aCVZ, { count: nn }),
                    },
                };
            if (!(0, er.Oq)(e.size, t))
                return "image/png" === t && e.size <= er.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await ne(e).catch(() => null);
                              return null != n && (0, er.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: eg(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: eg(t) } };
            let a = er.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function nr(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = eo.useState((e) => eu(e, t, n)),
        a = i.useCallback((e) => nl(t, n, e, l), [t, n, l]),
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
                null != (r = (l = ec(t, n)).find((t) => t.localId === e)) &&
                    (eh(t, r),
                    ed(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => ej(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function na(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(t9.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(t7.y, { type: t7.t.SPINNING_CIRCLE_SIMPLE, className: nt.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: nt.o1,
                onClick: () => n(t.localId),
                "aria-label": E.intl.string(S.default.Slam9g),
                children: (0, a.jsx)(t8.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var ni = n(900797),
    ns = n(320448),
    no = n(344587),
    nu = n(534554),
    nc = n(392208),
    nd = n(822313),
    nm = n(837984),
    nf = n(359589),
    nh = n(254575);
function np(e) {
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
function ng(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = np(d),
        p = nc.P.indexOf(t.tier),
        g = d ? ni.t : ns._,
        x = nc.P.map(nu.D0),
        j = (0, nu.Tc)(t.tier),
        { text: b, phase: y } = (0, no.Q)(j);
    return (0, a.jsx)("div", {
        className: nh.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: h()(nh.t$, { [nh.Zr]: u && c, [nh.GF]: !u }),
            role: "dialog",
            "aria-label": E.intl.string(S.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: h()(nh.Nr, nh.uO, { [nh.Zr]: d && f.entered, [nh.GF]: !d }),
                          children: (0, a.jsx)(nf.b, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${nh.Nr} ${nh.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nh.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: nh.y6,
                                    "aria-expanded": d,
                                    "aria-label": E.intl.string((0, nu.FC)(l)),
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
                                            className: nh.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: h()(nh.Z, { [nh.xQ]: "exit" === y, [nh.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nh.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: nh.Nb,
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
                                (0, a.jsx)(nm.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: E.intl.string(S.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = nc.P[e];
                                        null != n && n !== t.tier && s((0, nu.CM)((0, nu.j6)(t, n)));
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
function nx(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, nd.A)(t, s),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = np(f);
    return (0, a.jsx)(eX.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: eX.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(ng, {
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
                    className: o ?? nh.hZ,
                    "aria-label": E.intl.string(S.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(t1.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var nv = n(200160),
    nj = n(465410);
function nb(e) {
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
        className: nv.RC,
        children: [t[r].slice(0, s), l ? (0, a.jsx)("span", { className: nv.OW }) : null],
    });
}
function ny(e) {
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
    return (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", className: nv.RC, children: t[l] });
}
function nk(e) {
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
        l = (0, o.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        r = (0, o.bG)([t3.A], () => t3.A.isFocused()),
        s = t || !r;
    return (0, a.jsx)("div", {
        className: nv.qf,
        "aria-hidden": !0,
        children: l
            ? (0, a.jsx)(ny, { prompts: n, paused: s })
            : (0, a.jsx)(nb, { prompts: n, paused: s, showCaret: !t }),
    });
}
function nw(e) {
    let {
            idea: t,
            inputRef: n,
            onIdeaChange: l,
            onSubmit: r,
            submitting: s,
            submitDisabled: o,
            error: u,
            modelSettings: c,
            onModelSettingsChange: d,
            attachments: m,
        } = e,
        [f, p] = i.useState(!1),
        g = i.useRef(null),
        x = i.useId(),
        j = "" !== t,
        b = E.intl.string(E.t.d56gCa),
        y = i.useRef(null),
        k = i.useRef(null),
        { addFiles: w, pasteFiles: N, removeAttachment: C } = m,
        A = i.useCallback((e) => {
            let t = y.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        I = i.useCallback(
            (e) => {
                (w(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [w],
        ),
        M = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || r());
            },
            [o, r],
        );
    return (0, a.jsxs)("div", {
        className: nv.kL,
        children: [
            (0, a.jsxs)("div", {
                ref: g,
                className: h()(nv.yk, { [nv.Sl]: null != u }),
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: nv.Ox,
                        children: [
                            (0, a.jsx)(tQ.vN, {
                                ringTarget: g,
                                ringClassName: nv.Rg,
                                children: (0, a.jsx)("textarea", {
                                    ref: n,
                                    className: h()(nv.hF, nj.dv),
                                    rows: 3,
                                    value: t,
                                    "aria-label": E.intl.string(S.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? x : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: M,
                                    onPaste: (e) => N(e),
                                    onFocus: () => p(!0),
                                    onBlur: () => p(!1),
                                }),
                            }),
                            j ? null : (0, a.jsx)(nk, { boxFocused: f }),
                        ],
                    }),
                    m.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: nv.ZO,
                              children: m.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, a.jsx)(na, { draft: t, onRemove: C }, t.localId);
                              }),
                          })
                        : null,
                    (0, a.jsxs)("div", {
                        className: nv.KE,
                        children: [
                            (0, a.jsx)("input", {
                                ref: y,
                                type: "file",
                                multiple: !0,
                                onChange: I,
                                className: nv.Fg,
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                            (0, a.jsx)(eX.Y, {
                                targetElementRef: k,
                                position: "top",
                                align: "left",
                                animation: eX.Y.Animation.NONE,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(eZ.W, {
                                        "data-menu-migrated": !0,
                                        navId: "conjure-home-attach",
                                        "aria-label": b,
                                        onClose: t,
                                        onSelect: t,
                                        children: (0, a.jsx)(eY.rX, {
                                            children: t6.map((e) =>
                                                (0, a.jsx)(
                                                    eY.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => A(e.accept),
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
                                        ref: k,
                                        type: "button",
                                        className: nv.gb,
                                        disabled: s,
                                        "aria-label": b,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": n,
                                        children: (0, a.jsx)(t0.PlusLargeIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                            className: nv.Xv,
                                        }),
                                    });
                                },
                            }),
                            (0, a.jsxs)("div", {
                                className: nv.Rc,
                                children: [
                                    (0, a.jsx)(nx, {
                                        settings: c ?? L,
                                        tiers: $,
                                        choices: T,
                                        disabled: s,
                                        onChange: d,
                                        className: nv.gb,
                                        icon: (0, a.jsx)(t1.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(eR.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: t2.SendMessageIcon,
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
                      id: x,
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: u,
                  })
                : null,
        ],
    });
}
var nN = n(628284),
    nC = n(369606),
    nA = n(926268),
    nS = n(406810),
    nE = n(707554),
    nI = n(651346);
function nM(e) {
    let { className: t } = e;
    return (0, a.jsx)("span", { className: h()(nI.n8, t) });
}
let n_ = [
        {
            id: "apps",
            title: S.default["bvcT/Q"],
            description: S.default.ArcJqa,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: nI.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nI.My,
                            children: [
                                (0, a.jsx)("span", { className: nI._w }),
                                (0, a.jsx)("span", { className: nI._w }),
                                (0, a.jsx)("span", { className: nI._w }),
                            ],
                        }),
                        (0, a.jsx)(nM, { className: nI.Lm }),
                        (0, a.jsx)("div", {
                            className: nI.Oh,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nI.ZW,
                                        children: [
                                            (0, a.jsx)("span", { className: nI.NU }),
                                            0 === e
                                                ? (0, a.jsx)(nN.y, {
                                                      size: "xs",
                                                      color: w.A.colors.ICON_BRAND,
                                                      className: nI._6,
                                                  })
                                                : null,
                                            (0, a.jsx)(nM, { className: nI.Eg }),
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
                    className: h()(nI.x, nI.jG),
                    children: [
                        (0, a.jsx)("span", { className: h()(nI.gg, nI.K1) }),
                        (0, a.jsx)("span", { className: h()(nI.gg, nI.W2) }),
                        (0, a.jsx)("span", { className: h()(nI.Fs, nI.A$) }),
                        (0, a.jsx)("span", { className: h()(nI.Fs, nI.eP) }),
                        (0, a.jsx)("span", { className: h()(nI.Fs, nI.kc) }),
                        (0, a.jsx)("span", { className: h()(nI.Fs, nI.OE) }),
                        (0, a.jsx)("span", { className: nI.OC }),
                        (0, a.jsxs)("div", {
                            className: nI.si,
                            children: [
                                (0, a.jsx)(nC.TrophyIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/bold",
                                    color: "none",
                                    className: nI.o9,
                                    children: 128,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nI.KQ,
                            children: [
                                (0, a.jsx)(nA.HeartIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(nA.HeartIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(nA.HeartIcon, { size: "xxs", color: w.A.colors.ICON_OVERLAY_LIGHT }),
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
                    className: nI.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nI.$y,
                            children: [(0, a.jsx)("span", { className: nI.m$ }), (0, a.jsx)(nM, { className: nI.Md })],
                        }),
                        (0, a.jsxs)("div", {
                            className: nI.iU,
                            children: [
                                (0, a.jsx)("span", {
                                    className: h()(nI.my, nI.FY),
                                    children: (0, a.jsx)(ez.RobotIcon, {
                                        size: "xs",
                                        color: w.A.colors.ICON_OVERLAY_LIGHT,
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: nI.OS,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: nI.f9,
                                            children: [
                                                (0, a.jsx)(nM, { className: nI.iE }),
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-xs/bold",
                                                    color: "none",
                                                    className: nI.AO,
                                                    children: E.intl.string(S.default.VlgiLf),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(nM, { className: nI.xs }),
                                        (0, a.jsx)(nM, { className: nI.Md }),
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
                    className: h()(nI.x, nI.ME),
                    children: [
                        (0, a.jsx)("span", { className: nI.CK }),
                        (0, a.jsxs)("div", {
                            className: nI.kI,
                            children: [
                                (0, a.jsx)("span", { className: h()(nI.my, nI.jU) }),
                                (0, a.jsx)(nM, { className: nI.iE }),
                                (0, a.jsxs)("div", {
                                    className: nI.Wy,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: nI.M1,
                                            children: [0, 1].map((e) =>
                                                (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        className: nI.dJ,
                                                        children: [
                                                            (0, a.jsx)(nM, { className: nI.cR }),
                                                            (0, a.jsx)(nM, { className: nI.Zh }),
                                                        ],
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: nI.bW,
                                            children: [0, 1, 2, 3, 4, 5].map((e) =>
                                                (0, a.jsx)("span", { className: nI.QR }, e),
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
                    className: nI.JH,
                    children: [
                        (0, a.jsx)("span", { className: nI.rx }),
                        (0, a.jsx)("span", { className: nI.ny }),
                        (0, a.jsx)("span", { className: nI.ZH }),
                        (0, a.jsx)("div", {
                            className: nI.$Y,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: nI.fn,
                                        children: [
                                            (0, a.jsx)("span", { className: h()(nI._h, { [nI.zY]: 0 === e }) }),
                                            (0, a.jsx)(nM, { className: nI.Av }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsxs)("div", {
                            className: nI.Y5,
                            children: [
                                (0, a.jsx)(nS.ClockIcon, { size: "xxs", color: w.A.colors.ICON_OVERLAY_LIGHT }),
                                (0, a.jsx)(nM, { className: nI.jB }),
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
                    className: nI.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nI.iU,
                            children: [
                                (0, a.jsx)("span", { className: nI.my }),
                                (0, a.jsxs)("div", {
                                    className: nI.OS,
                                    children: [
                                        (0, a.jsx)(nM, { className: nI.iE }),
                                        (0, a.jsx)(nM, { className: h()(nI.xs, nI.pc) }),
                                        (0, a.jsx)(nM, { className: h()(nI.Md, nI.pc) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: nI.jC,
                            children: [
                                (0, a.jsx)(eO.ShieldIcon, { size: "sm", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsxs)("div", {
                                    className: nI.qQ,
                                    children: [
                                        (0, a.jsx)(nM, { className: h()(nI.Md, nI.k8) }),
                                        (0, a.jsx)(nM, { className: h()(nI.nq, nI.k8) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    nP = i.memo(function () {
        let e = i.useId();
        return (0, a.jsx)("section", {
            className: nI.GG,
            "aria-labelledby": e,
            children: (0, a.jsx)(nE.F, {
                component: (0, a.jsx)(x.D, {
                    id: e,
                    variant: "heading-lg/medium",
                    children: E.intl.string(S.default.IiQEVd),
                }),
                children: (0, a.jsx)("ul", {
                    className: nI.Vg,
                    children: n_.map((e) => {
                        let { id: t, title: n, description: l, Visual: r } = e;
                        return (0, a.jsxs)(
                            "li",
                            {
                                className: nI.Vs,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: nI.Tn,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(r, {}),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: nI.pG,
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
function nR(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let nT = 1;
function nL(e) {
    let t = nR(e),
        n = { localId: nT++, name: e.name, contentType: t };
    if (
        !(0, er.Oq)(e.size, t) &&
        !("image/png" === t && e.size <= er.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas)
    )
        return { file: e, draft: { ...n, status: "error", errorText: eg(t) } };
    let l = er.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: l } };
}
function n$(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function nD(e, t) {
    if ((0, er.Oq)(t.size, nR(t))) return (0, ea.vX)(e, t);
    let n = await ne(t);
    if (null == n || !(0, er.Oq)(n.size, n.type)) throw Error("attachment over its size limit");
    return (0, ea.vX)(e, n);
}
var nq = n(698638),
    nO = n(606128),
    nz = n(260024);
class nF extends Error {}
function nU(e) {
    let t,
        { guildId: n } = e,
        [l, r] = i.useState(""),
        [s, o] = i.useState(!1),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, k] = i.useState(() => U.w.get(G) ?? null ?? !0),
        w = i.useRef(null),
        N = i.useMemo(
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
        C = "user" === (0, b.o)().get(F.f_),
        A = (function () {
            let [e, t] = i.useState([]),
                n = i.useRef(e);
            (i.useLayoutEffect(() => {
                n.current = e;
            }),
                i.useEffect(() => () => n.current.forEach(n$), []));
            let l = i.useCallback((e) => {
                    if (0 === e.length) return;
                    let l = e.map(nL);
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
                    null != l && (n$(l), (n.current = n.current.filter((e) => e !== l)), t(n.current));
                }, []),
                s = i.useCallback(() => {
                    (n.current.forEach(n$), (n.current = []), t(n.current));
                }, []),
                o = i.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= er.lN) return e;
                            let t = E.intl.formatToPlainString(S.default.Q0aCVZ, { count: er.lN });
                            return e.map((e, n) =>
                                n < er.lN || "error" === e.draft.status
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
        { attachments: I, addFiles: T, clear: L } = A,
        $ =
            "idea" ===
                (t = (function (e) {
                    let { idea: t, installScope: n, submitting: l } = e;
                    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
                })({ idea: l, installScope: null, submitting: s })) ||
            "submitting" === t ||
            A.hasErrors,
        D = i.useCallback((e) => T(Array.from(e)), [T]);
    (0, eP.p)(w);
    let q = i.useCallback((e) => {
            (r(e), c(null));
        }, []),
        B = i.useCallback(
            (e) => {
                q(e);
                let t = w.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [q],
        ),
        K = i.useRef(!1),
        V = i.useCallback(async () => {
            let e = l.trim();
            if ("" !== e && !K.current) {
                ((K.current = !0), o(!0), c(null));
                try {
                    await O({
                        guildId: n,
                        installScope: C ? "user" : null,
                        prompt: e,
                        modelSettings: d,
                        start: async (t) => {
                            var n;
                            let l = [];
                            if (I.length > 0)
                                try {
                                    l = await Promise.all(
                                        I.map((e) => {
                                            let { file: n } = e;
                                            return nD(t, n);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, R.xx)(t).catch(() => void 0), new nF());
                                }
                            (z.Ay.getProject(t)?.install_scope_setup != null
                                ? ((n = l),
                                  U.w.set(ek, { ...eA(), [t]: { message: e, attachments: n, nonce: (0, H.m)() } }))
                                : (0, _.sendUserMessage)(t, e, l),
                                L());
                        },
                    });
                } catch (e) {
                    (c(e instanceof nF ? E.intl.string(S.default["903H7m"]) : (0, P.mG)(e)), (K.current = !1), o(!1));
                }
            }
        }, [l, C, d, n, I, L]),
        W = i.useCallback((e) => {
            (U.w.set(G, e), k(e));
        }, []),
        X = i.useCallback(() => W(!1), [W]),
        Z = E.intl.string(f ? S.default.kar7jh : S.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: h()(nz.MY, nO.T),
        children: (0, a.jsxs)("div", {
            className: nz.Zp,
            children: [
                (0, a.jsxs)("main", {
                    className: nz.iW,
                    children: [
                        s
                            ? null
                            : (0, a.jsx)(j.A, {
                                  title: E.intl.string(S.default.gy7byi),
                                  description: E.intl.string(S.default["dkv/WO"]),
                                  icons: nq.ir,
                                  onDrop: D,
                              }),
                        (0, a.jsx)(M, {
                            title: E.intl.string(S.default.uk6jhJ),
                            transparent: !0,
                            actions: (0, a.jsx)(y.A.Icon, {
                                icon: p.Z,
                                color: "var(--icon-strong)",
                                className: nz.FW,
                                tooltip: Z,
                                "aria-label": Z,
                                selected: f,
                                onClick: () => W(!f),
                            }),
                        }),
                        (0, a.jsx)(g.Ip, {
                            className: nz.XG,
                            children: (0, a.jsxs)("div", {
                                className: nz.Qs,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nz.Lv,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: nz.ZK,
                                                children: [
                                                    (0, a.jsx)(x.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: nz.DD,
                                                        children: E.intl.string(S.default.doYpEy),
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: nz.VA,
                                                        children: E.intl.string(S.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: nz.ZK,
                                                children: [
                                                    (0, a.jsx)(nw, {
                                                        idea: l,
                                                        inputRef: w,
                                                        onIdeaChange: q,
                                                        onSubmit: V,
                                                        submitting: s,
                                                        submitDisabled: $,
                                                        error: u,
                                                        modelSettings: d,
                                                        onModelSettingsChange: m,
                                                        attachments: A,
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
                                    (0, a.jsx)(eH, { inspirations: N, onCopyPrompt: B }),
                                    (0, a.jsx)(nP, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                f ? (0, a.jsx)(tJ, { guildId: n, modelSettings: d, onClose: X }) : null,
            ],
        }),
    });
}
var nG = n(478016),
    nB = n(604525),
    nK = n(92446),
    nH = n(534890),
    nV = n(646270),
    nW = n(31300),
    nX = n(831453),
    nZ = n(71048);
let nY = Object.freeze({ x: 0.5, y: 0.5 });
function nJ(e) {
    return "" !== e.trim();
}
function nQ(e) {
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
function n0(e) {
    let { kind: t, name: n } = nQ(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function n1(e) {
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
let n2 = "[conjure:selected] ",
    n3 = " \u2014 ";
function n5(e) {
    if (!e.startsWith(n2)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(n2.length),
        a = r.indexOf(n3),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let n4 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    n6 = new Map(),
    n7 = new Set();
function n8(e) {
    return n6.get(e) ?? n4;
}
function n9(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? n6.set(e, t) : n6.delete(e), [...n7]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function le(e) {
    let t = n8(e);
    t.active || n9(e, { ...t, active: !0 });
}
function lt(e) {
    let t = n8(e);
    t.active && n9(e, { ...t, active: !1 });
}
function ln(e) {
    n6.has(e) && n9(e, n4);
}
function ll(e, t) {
    let n = n8(e);
    n.active && n9(e, { ...n, context: t });
}
function lr(e, t) {
    return null != t && e.authorId === t;
}
function la(e) {
    return (
        n7.add(e),
        () => {
            n7.delete(e);
        }
    );
}
function li(e) {
    let t = i.useCallback(() => (null == e ? n4 : n8(e)), [e]);
    return i.useSyncExternalStore(la, t, t);
}
(n(134528), n(947204));
let ls = { past: [], present: [], future: [] };
function lo(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function lu(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function lc(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => lu(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: lu(e.from, t, n), to: lu(e.to, t, n) };
        case "text":
            return { ...e, at: lu(e.at, t, n) };
    }
}
function ld(e) {
    return e.some((e) => "erase" !== e.kind);
}
function lm(e, t) {
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
function lf(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function lh(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function lp(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => lh(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = lh(e.from, t),
                l = lh(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = lh(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function lg(e) {
    return ld(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let lx = [3, 6, 12],
    lv = [10, 20, 40],
    lj = (0, el.D)(() => ({ byProject: {} })),
    lb = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: ls,
        sketchDismissedFor: null,
    };
function ly(e) {
    return lj.getState().byProject[e] ?? null;
}
function lk(e, t) {
    let n = ly(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = lj.getState();
    lj.setState({ byProject: { ...r, [e]: l } });
}
function lw(e) {
    if (null == ly(e)) return;
    let { [e]: t, ...n } = lj.getState().byProject;
    (lj.setState({ byProject: n }), ln(e));
}
function lN(e, t) {
    null != ly(e) &&
        (lk(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? le(e) : lt(e));
}
function lC(e, t) {
    lk(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return lo(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return lo(
                        e,
                        e.present.map((e) => (e.id === t.id ? lc(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : lo(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : lo(e, []);
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
function lA(e) {
    return lj.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var lS = n(39416);
function lE(e) {
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
            className: lS.i5,
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
var lI = n(91242),
    lM = n(457827),
    l_ = n(802905),
    lP = n(573083);
function lR(e) {
    return W.A.isThinking(e) || (0, lP.wK)(e);
}
var lT = n(35525),
    lL = n(881511);
let l$ = new Set();
function lD(e, t) {
    if (!(l$.has(t) || (lR(e) && !l_.A.isPaused(e))))
        for (let e of lI.A.getAllFrames())
            e.applicationId === t &&
                (0, lL.D)(e) &&
                !(lT.A.isInHostWindow(e) || (lT.A.isActivityPopoutOpen() && lI.A.getMainFrame()?.id === e.id)) &&
                (0, lM.r)(e.id);
}
let lq = new Set(),
    lO = null;
function lz(e, t) {
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
                lq.add(t),
                () => {
                    lq.delete(t);
                }
            );
        }, [e]));
}
var lF = n(885386);
function lU() {
    return lF.Q_.useSetting() || !1;
}
var lG = n(128761),
    lB = n(12177),
    lK = n(967008),
    lH = n(513845),
    lV = n(951178);
let lW = { width: 320, height: 240 };
var lX = n(855859),
    lZ = n(238490),
    lY = n(991690),
    lJ = n(696645);
function lQ(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function l0(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, lJ.X)(e.surface)
                : E.intl.formatToPlainString(S.default["6xVl+N"], {
                      surface: (0, lJ.X)(e.surface),
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
var l1 = n(939398),
    l2 = n(86147),
    l3 = n(729475),
    l5 = n(156548),
    l4 = n(869146),
    l6 = n(475815),
    l7 = n(165610);
function l8(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, l5.cR)(t?.id ?? null),
        r = (0, lP.Zv)(n),
        i = (0, o.bG)(
            [l4.A, lI.A],
            () => null != t && l4.A.getWindowOpen(D.MLl.ACTIVITY_POPOUT) && lI.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, l7.x1)(t) || i || r) return null;
    let s = (0, l5.fl)(t.id);
    if (null == s || !(0, l6.Ub)(s)) return null;
    let u = E.intl.string(l ? E.t.Z7MyNB : E.t.OIDkcp);
    return (0, a.jsx)(y.A.Icon, {
        tooltip: u,
        icon: l ? l2.z : l3.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, l5.U8)(t.id),
    });
}
var l9 = n(847374),
    re = n(704745);
function rt(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = E.intl.string(S.default.I2ucou);
    return (0, a.jsx)(eX.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: eX.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(eZ.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(eY.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = lQ(e);
                        return (0, a.jsx)(
                            eY.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: l0(e),
                                checked: t === lQ(n),
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
            return (0, a.jsx)(tQ.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: re.h,
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
                            children: l0(n),
                        }),
                        (0, a.jsx)(l9.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var rn = n(324641),
    rl = n(627363),
    rr = n(153207),
    ra = n(803101),
    ri = n(226178),
    rs = n(625180),
    ro = n(672929),
    ru = n(111534),
    rc = n(754027),
    rd = n(722701),
    rm = n(962998),
    rf = n(983851),
    rh = n(794083),
    rp = n(715641),
    rg = n(750943),
    rx = n(95477),
    rv = n(103557),
    rj = n(47167),
    rb = n(548118),
    ry = n(946274),
    rk = n(535466),
    rw = n(961553),
    rN = n(277085),
    rC = n(811587),
    rA = n(808728),
    rS = n(498642);
let rE = [],
    rI = [
        [lV.q7.BOT, S.default.UnoAgo],
        [lV.q7.ACTIVITY, S.default["I88/iG"]],
        [lV.q7.PROFILE_WIDGET, S.default.gXY1x1],
        [lV.q7.AUTOMOD, S.default.Q9ruoM],
    ],
    rM = { screen_capture: S.default["8/7kE7"], connect_user_to_voice: S.default.uvDWXa },
    r_ = { initial: S.default.NUZBwo, notPublished: S.default.Gdz7pg, published: S.default["6E9W4F"] },
    rP = new Set(),
    rR = new Set(),
    rT = "data-conjure-publish-trigger";
function rL(e) {
    return (
        rR.add(e),
        () => {
            rR.delete(e);
        }
    );
}
function r$(e, t) {
    if (rP.has(e) !== t) for (let n of (t ? rP.add(e) : rP.delete(e), rR)) n();
}
function rD(e) {
    r$(e, !rP.has(e));
}
var rq = n(566553);
let rO = { screen_capture: nW.k, connect_user_to_voice: rf.H },
    rz = {
        [lV.q7.BOT]: ez.RobotIcon,
        [lV.q7.ACTIVITY]: rh.b,
        [lV.q7.PROFILE_WIDGET]: rp.b,
        [lV.q7.AUTOMOD]: eO.ShieldIcon,
    },
    rF = { initial: rq.LK, notPublished: rq.i$, published: rq.kg };
function rU(e) {
    let { project: t, publish: n, menu: l, children: r } = e,
        s = t.id,
        o = i.useRef(null),
        u = i.useSyncExternalStore(rL, () => rP.has(s));
    return (
        i.useEffect(
            () => () => {
                r$(s, !1);
            },
            [s],
        ),
        (0, a.jsx)(eX.Y, {
            targetElementRef: o,
            shouldShow: u,
            onRequestOpen: () => rD(s),
            onRequestClose: (e, t) => {
                let n = e?.target;
                ("system:click_outside" === t &&
                    (0, eU.vq)(n, Element) &&
                    n.closest(`[${rT}]`)?.getAttribute(rT) === s) ||
                    r$(s, !1);
            },
            position: "bottom",
            align: "right",
            spacing: 8,
            animation: eX.Y.Animation.FADE,
            renderPopout: () => (0, a.jsx)(rG, { project: t, publish: n, menu: l }),
            children: (e) => (0, a.jsx)("div", { ref: o, className: rq.hZ, ...{ [rT]: s }, children: r(e) }),
        })
    );
}
function rG(e) {
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
                    liveName: p,
                    liveDescription: g,
                    channels: x,
                    guild: v,
                    memberCount: j,
                } = ((n = e.id),
                (l = t.guildId),
                (s = (0, o.bG)([z.Ay], () => z.Ay.getProject(n) ?? null, [n])),
                (u = s?.application_id ?? null),
                (c = (0, o.bG)([tO.A], () => (null == u ? null : (tO.A.getApplication(u) ?? null)), [u])),
                (m = (0, o.bG)([d.A], () => (null == l ? null : (d.A.getGuild(l) ?? null)), [l])),
                (f = (0, o.bG)([rS.A], () => (null == l ? null : (rS.A.getMemberCount(l) ?? null)), [l])),
                (h = (0, o.yK)(
                    [rA.Ay],
                    () =>
                        null == l || null == u
                            ? []
                            : rA.Ay.getChannels(l)
                                  [rA.I6].filter((e) => {
                                      let { channel: t } = e;
                                      return (0, ta.us)(t) === u;
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
                b = (0, rw.A)(e.id),
                y = ((r = e.id), (0, o.bG)([rd.A], () => rd.A.getPublishStatus(r)?.previewDevicePermissions ?? rE)),
                [k, w] = i.useState(e.name),
                [N, C] = i.useState(!1),
                A =
                    null != (a = t.status) && (0, rC.lE)(a.publishState)
                        ? "live_outdated" === a.publishState
                            ? "notPublished"
                            : "published"
                        : "initial",
                I = "initial" === A,
                M = I && (0, z.PV)(e),
                _ = (I ? e.preview_supported_surfaces : e.supported_surfaces) ?? [],
                P = k.trim(),
                T = M ? (0, rN.p)(P) : null,
                L = t.status?.previewAppChannels ?? [],
                $ = t.status?.publishedAt,
                D = null == $ ? null : (0, lG.lG)($).relative;
            async function q() {
                if (N || null != T) return !1;
                C(!0);
                try {
                    return (M && (P !== e.name || b.changed) && (await (0, R.CW)(e.id, { ...b.changes, name: P })), !0);
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
                displayName: I ? e.name : p,
                description: I ? b.description : g,
                initialChannelNames:
                    0 === L.length && _.includes(lV.q7.APP_CHANNEL) ? [E.intl.string(S.default.xI4N6Q)] : L,
                channels: x,
                components: rI
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
                statusText: E.intl.string(r_[A]),
                lastPublishedText: null == D ? null : E.intl.formatToPlainString(S.default["/6YRCf"], { time: D }),
                ctaText: I ? t.label : E.intl.string(S.default.KHg4Dk),
                ctaVariant: "published" === A ? "secondary" : "primary",
                saving: N,
                save: q,
            };
        })(t, n),
        { mode: s, initial: u, editable: c, identity: m, sharing: f } = r,
        h = i.useRef(null),
        p = [
            ...(u
                ? r.initialChannelNames.map((e) => (0, a.jsx)(rK, { icon: eD.k, label: e }, e))
                : r.channels.map((e) => (0, a.jsx)(rH, { channel: e }, e.id))),
            ...r.components.map((e) => {
                let { surface: t, label: n } = e;
                return (0, a.jsx)(rK, { icon: rz[t], label: n }, t);
            }),
        ];
    async function g() {
        try {
            if (!(await r.save())) return;
        } catch {
            (0, eV.P0)({ text: E.intl.string(S.default.Fi7boI), variant: "critical" });
            return;
        }
        (n.run("header"), r$(t.id, !1));
    }
    return (0, a.jsxs)("div", {
        className: rq.nd,
        role: "dialog",
        "aria-label": u ? r.name : r.displayName,
        children: [
            (0, a.jsxs)("div", {
                className: rq.M0,
                children: [
                    (0, a.jsxs)("div", {
                        className: rq.wx,
                        children: [
                            c
                                ? null != m.iconURL
                                    ? (0, a.jsxs)(C.D, {
                                          className: rq.gb,
                                          "aria-label": E.intl.string(E.t["6yrpFR"]),
                                          onClick: () => h.current?.activateUploadDialogue(),
                                          children: [
                                              (0, a.jsx)("img", { className: rq.Dp, src: m.iconURL, alt: "" }),
                                              (0, a.jsx)("span", {
                                                  className: rq.E7,
                                                  "aria-hidden": !0,
                                                  children: (0, a.jsx)(rg.X, { size: "xs", color: "currentColor" }),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t["MsUY/S"]),
                                          children: (0, a.jsx)(tv.K, {
                                              icon: rg.X,
                                              size: "md",
                                              variant: "secondary",
                                              "aria-label": E.intl.string(E.t["MsUY/S"]),
                                              onClick: () => h.current?.activateUploadDialogue(),
                                          }),
                                      })
                                : (0, a.jsx)(A.A, { project: t, size: "card" }),
                            c
                                ? (0, a.jsx)(ry.Ay, {
                                      ref: h,
                                      className: rq.Fg,
                                      multiple: !1,
                                      filters: [{ name: E.intl.string(E.t["Sp2NF+"]), extensions: rk.En }],
                                      maxFileSizeBytes: rk.Q0,
                                      onChange: m.setIcon,
                                      onFileSizeError: () =>
                                          (0, eV.P0)({ text: E.intl.string(S.default.ZTAAMc), variant: "critical" }),
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
                                      className: rq.ZZ,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "text-sm/normal",
                                              color: "text-subtle",
                                              "aria-hidden": !0,
                                              children: E.intl.string(S.default.knevPu),
                                          }),
                                          (0, a.jsx)(rx.k, {
                                              label: E.intl.string(S.default.knevPu),
                                              hideLabel: !0,
                                              value: r.name,
                                              onChange: r.setName,
                                              error: r.nameError,
                                              maxLength: lV.eq,
                                              fullWidth: !0,
                                          }),
                                      ],
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: rq.ZZ,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "text-sm/normal",
                                              color: "text-subtle",
                                              "aria-hidden": !0,
                                              children: E.intl.string(S.default.ynaGa1),
                                          }),
                                          (0, a.jsx)(rv.f, {
                                              label: E.intl.string(S.default.ynaGa1),
                                              hideLabel: !0,
                                              placeholder: E.intl.string(S.default["I+3UTL"]),
                                              value: m.description,
                                              onChange: m.setDescription,
                                              maxLength: lV.HR,
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
                    (0, a.jsx)(rB, { title: E.intl.string(S.default.BqNMms), rows: p }),
                    (0, a.jsx)(rB, {
                        title: E.intl.string(S.default.LnqeFd),
                        rows: r.devicePermissions.map((e) =>
                            (0, a.jsx)(rK, { icon: rO[e], label: E.intl.string(rM[e]) }, e),
                        ),
                    }),
                ],
            }),
            null != f
                ? (0, a.jsxs)("div", {
                      className: rq.KO,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: E.intl.string(S.default.yCgX8i),
                          }),
                          (0, a.jsxs)("div", {
                              className: rq.Kk,
                              children: [
                                  null != f.guild
                                      ? (0, a.jsx)(rb.Ay, {
                                            guild: f.guild,
                                            size: rb.Ay.Sizes.MEDIUM,
                                            active: !0,
                                            className: rq.$f,
                                            "aria-hidden": !0,
                                        })
                                      : (0, a.jsx)("span", {
                                            className: rq.qU,
                                            children: (0, a.jsx)(te.UserIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                        }),
                                  (0, a.jsxs)("div", {
                                      className: rq.qg,
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
                className: rq.qr,
                children: [
                    (0, a.jsx)("span", { className: rF[s], "aria-hidden": !0 }),
                    (0, a.jsxs)("div", {
                        className: rq.qg,
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
                    (0, a.jsx)(eR.$, {
                        variant: r.ctaVariant,
                        size: "sm",
                        text: r.ctaText,
                        disabled: n.disabled || null != r.nameError,
                        loading: (n.publishing && !(u && n.showsProgress)) || r.saving,
                        onClick: g,
                    }),
                ],
            }),
        ],
    });
}
function rB(e) {
    let { title: t, rows: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: rq.mK,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: t }),
                  (0, a.jsx)("div", { children: n }),
              ],
          });
}
function rK(e) {
    let { icon: t, label: n } = e;
    return (0, a.jsxs)("div", {
        className: rq.CT,
        children: [
            (0, a.jsx)(t, { size: "xs", color: "currentColor", className: rq.Pw, "aria-hidden": !0 }),
            (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: n }),
        ],
    });
}
function rH(e) {
    let { channel: t } = e;
    return (0, a.jsx)(rK, { icon: eD.k, label: (0, rj.Ay)(t) ?? "" });
}
var rV = n(373540),
    rW = n(144228);
function rX(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, o] = i.useState(t.selected_destination_id),
        u = E.intl.string(S.default.lJrOGW);
    return (0, a.jsx)(tP.a, {
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
        children: (0, a.jsx)(rW.z, {
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
let rZ = {
    showPublishBlocked: rV.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, tT.openModal)(
                (t) =>
                    (0, a.jsx)(rX, {
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
    showError: (e) => (0, eV.P0)({ text: e, variant: "critical" }),
};
var rY = n(58736),
    rJ = n(333007),
    rQ = n(775121),
    r0 = n(826745),
    r1 = n(470779);
function r2(e) {
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
        } = nr({ projectId: t, surface: "design", onUploadFile: f }),
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
        q = l.top + 8,
        O = Math.max(n.x, D),
        z = Math.min(Math.max("point" === p ? n.y : n.y + 32 + 4, q), Math.max(q, l.top + l.height - $ - 8));
    return (0, a.jsxs)("div", {
        ref: R,
        className: h()(r1.M0, { [r1.ho]: _ && !m, [r1.ET]: m }),
        style: { left: O, top: z },
        "data-testid": "conjure-design-compose-bar",
        children: [
            g
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: r1.Fg,
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
                                  className: r1.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(S.default.lgvqSB),
                                  children: (0, a.jsx)(eJ.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: r1.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(r0.y, {
                autoFocus: !0,
                rows: 1,
                className: r1.hF,
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
                      className: r1.ZO,
                      children: j.map((e) => (0, a.jsx)(na, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function r3(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function r5(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function r4(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? r3(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = r3(e());
                l((e) => (r5(e, t) ? e : t));
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
var r6 = n(876798),
    r7 = n(48507),
    r8 = n(193885),
    r9 = n(744898),
    ae = n(803656),
    at = n(241326),
    an = n(972213);
function al(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function ar(e, t, n) {
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
let aa = ar("red", al(w.A.unsafe_rawColors.RED_400), () => E.intl.string(S.default.tvXfjt)),
    ai = [
        aa,
        ar("yellow", al(w.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(S.default.FYuaJ1)),
        ar("green", al(w.A.unsafe_rawColors.GREEN_360), () => E.intl.string(S.default["Vv+paS"])),
        ar("blue", al(w.A.unsafe_rawColors.BLUE_345), () => E.intl.string(S.default.k9b1QJ)),
        ar("white", al(w.A.unsafe_rawColors.WHITE), () => E.intl.string(S.default["1sOXwH"])),
    ];
function as(e) {
    return ai.find((t) => t.id === e) ?? aa;
}
function ao(e) {
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
function au(e) {
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
function ac(e) {
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
function ad(e) {
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
let am = lx.map((e) => ad(Math.min(16, e + 3))),
    af = lv.map((e) => ad(Math.min(16, e / 2.5))),
    ah = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
    ap = {
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
function ag(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: lS.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(r6.k, {
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
function ax(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tv.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function av(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: lS.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: lS.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function aj(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = as(n.colorId),
        h = ap[u],
        p = E.intl.string(S.default.hUm825),
        g = E.intl.string(S.default.n5IA3a),
        x = E.intl.string(S.default.r5dX6t),
        v = E.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: lS.t$,
        children: [
            (0, a.jsx)("div", {
                className: lS.NT,
                children: (0, a.jsx)(ag, {
                    icon: au,
                    label: E.intl.string(S.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => lN(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: lS.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": E.intl.string(S.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(ag, {
                        icon: ao,
                        label: E.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => lN(t, "move"),
                    }),
                    (0, a.jsx)(ag, {
                        icon: r7.x,
                        label: E.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => lN(t, "text"),
                    }),
                    (0, a.jsx)(av, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(ag, {
                                icon: r8.V,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (lN(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            am.map((n, l) =>
                                (0, a.jsx)(
                                    ag,
                                    {
                                        icon: n,
                                        label: E.intl.string(ah[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (lk(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), lt(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(av, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(ag, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (lN(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(ap).map((n) =>
                                (0, a.jsx)(
                                    ag,
                                    {
                                        icon: ap[n].icon,
                                        label: ap[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (lN(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(av, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(ag, {
                                icon: ac,
                                label: g,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (lN(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            af.map((n, l) =>
                                (0, a.jsx)(
                                    ag,
                                    {
                                        icon: n,
                                        label: E.intl.string(ah[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (lk(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), lt(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(av, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(ax, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            ai.map((n) =>
                                (0, a.jsx)(
                                    ag,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                lk(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: lS.Gz, role: "separator" }),
                    (0, a.jsx)(ax, {
                        icon: r9.e,
                        label: E.intl.string((0, e0.isMac)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(ax, {
                        icon: ae.U,
                        label: E.intl.string((0, e0.isMac)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(ax, {
                        icon: at.TrashIcon,
                        label: E.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: lS.Gz, role: "separator" }),
                    (0, a.jsx)(ax, { icon: an.XLargeIcon, label: E.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let ab = w.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function ay(e, t, n) {
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
                    (e.strokeStyle = ab),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function ak(e) {
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
async function aw(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = ak(e),
            r = ak(e);
        if (null == l || null == r) return null;
        return (ay(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let aN = new Map(),
    aC = new Map(),
    aA = (0, el.D)(() => ({ byMessageKey: {} }));
function aS(e, t) {
    let { [e]: n, ...l } = aA.getState().byMessageKey;
    aA.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function aE(e, t) {
    null == t ? aN.delete(e) : aN.set(e, t);
}
function aI(e) {
    return aN.get(e)?.() ?? Promise.resolve(null);
}
let aM = { dx: 0, dy: 0 },
    a_ = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    aP = 1;
function aR(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = lA(s),
        { active: u } = li(s),
        c = (0, tT.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => lw(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && le(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(aT, { projectId: s, state: o, resolveIframe: r });
}
function aT(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = r4(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [p, g] = i.useState(aM),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        N = i.useRef(0),
        { tool: C, history: A } = n,
        I = as(n.colorId),
        M = "pick" !== C,
        _ = "marker" === n.tool ? lx[n.markerSize] : "eraser" === n.tool ? lv[n.eraserSize] : null,
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
        let t = await (0, rn.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, rJ.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, rn.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (aE(t, T), () => aE(t, null)), [t, T]);
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
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? lc(e, p.dx, p.dy) : e)),
            o = j.current;
        ay(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, A.present, p]);
    i.useLayoutEffect($, [$]);
    let D = i.useCallback(
            (e) =>
                null == r ? { x: 0, y: 0 } : { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height },
            [r],
        ),
        q = i.useCallback(() => {
            let e = y.current;
            if (null == e || null == r) return;
            y.current = null;
            let n = {
                id: `mark-${aP++}`,
                kind: "text",
                color: I.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (lm(n, r) && lC(t, { type: "commit", shape: n }), o(null));
        }, [t, I, r]),
        O = i.useCallback(() => {
            ((y.current = null), o(null));
        }, []),
        z = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != y.current) return void q();
                let t = D(e);
                switch (C) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == P ? null : lp(P, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? P
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = lh(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => lh(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (lf(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = lh(e.from, n),
                                                                  r = lh(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => lf(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = lh(e.from, n),
                                                                  r = lh(e.to, n),
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
                                                              let t = lp(e, n);
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
                        if (!ld(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${aP++}`,
                                kind: "erase",
                                width: lv[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${aP++}`,
                                kind: "marker",
                                color: I.value,
                                width: lx[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${aP++}`,
                                kind: C,
                                color: I.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                $();
            },
            [r, C, I, P, A.present, n.markerSize, n.eraserSize, D, q, $],
        ),
        F = i.useCallback(
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
                ((b.current = null), g(aM), lC(t, { type: "move", id: e.id, dx: p.dx, dy: p.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && lm(n, r) ? lC(t, { type: "commit", shape: n }) : $());
        }, [t, r, p, $]),
        G = i.useCallback(() => lw(t), [t]),
        B = i.useCallback(() => lC(t, { type: "undo" }), [t]),
        K = i.useCallback(() => lC(t, { type: "redo" }), [t]),
        H = i.useCallback(() => lC(t, { type: "clear" }), [t]),
        V = i.useRef({ tool: C, selected: P, exit: G, undo: B, redo: K });
    if (
        (i.useLayoutEffect(() => {
            V.current = { tool: C, selected: P, exit: G, undo: B, redo: K };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, eU.Cw)((0, eU.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), lC(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = a_[s];
                null != o && (e.preventDefault(), lN(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (M) return (rQ.A.disable(), () => rQ.A.enable());
        }, [M]),
        null == r)
    )
        return null;
    let W = Math.max(8, r.left - d - 8),
        X = null == P ? null : lp(null == b.current ? P : lc(P, p.dx, p.dy), r);
    return (0, rJ.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: lS.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: lS.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: lS.Ji,
                            "data-tool": C,
                            "data-interactive": M && !u ? "" : void 0,
                            "aria-label": E.intl.string(S.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: z,
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
                                  className: lS.V$,
                                  "data-tool": C,
                                  "data-color": I.id,
                                  style: { width: _, height: _ },
                                  "aria-hidden": !0,
                              }),
                        null == X
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: lS.r1,
                                  style: { left: X.x, top: X.y, width: X.width, height: X.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: lS.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: lS.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: lS.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: lS.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(r2, {
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
                          onSubmit: q,
                          onUploadFile: (e) => (0, ea.vX)(t, e),
                          onDismiss: O,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: lS.ej,
                    style: { left: W, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(aj, { projectId: t, state: n, onExit: G, onUndo: B, onRedo: K, onClear: H }),
                }),
            ],
        }),
        document.body,
    );
}
var aL = n(308081),
    a$ = n(689175),
    aD = n(683071),
    aq = n(218394),
    aO = n(115982),
    az = n(886540);
function aF(e) {
    return !(0, az.BL)(e) && !0 !== e.stopRequested;
}
var aU = n(104317),
    aG = n(643278),
    aB = n(566424),
    aK = n(683063),
    aH = n(140735),
    aV = n(138212);
function aW(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: h()(aV.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: h()(aV.wx, null != n && aV.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var aX = n(148590);
function aZ(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function aY(e) {
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
        j = f ? l9.a : ns._,
        b = null != n || l;
    return (0, a.jsxs)(aW, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: aX.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(C.D, {
                                className: aX.L$,
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
        headerClassName: f ? void 0 : aX.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: h()(aX.rf, o), hidden: !f, children: c })],
    });
}
var aJ = n(883646);
let aQ = [];
function a0(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: h()(aJ.xL, {
            [aJ.Vb]: "in_progress" === t,
            [aJ.cT]: "completed" === t,
            [aJ.GZ]: "unfinished" === t,
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
            (0, a.jsx)(t7.y, {
                type: t7.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: aJ.Qd,
                itemClassName: aJ.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: aJ.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: aJ.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function a1(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : aQ), [n, t]),
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
        className: aJ.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    aK.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: aJ.MA,
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
                      className: aJ.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function a2(e) {
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
            ((t = (r ?? aQ).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? aQ),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: aJ.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: h()(aJ.AS, { [aJ.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(a0, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: aJ.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: aJ.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(a1, { agents: u.get(e.id) ?? aQ, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: aJ.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(a0, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: aJ.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: aJ.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function a3(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(S.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(S.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(aY, {
        title: E.intl.string(S.default.RtzECX),
        meta: (0, a.jsx)(aZ, { children: c }),
        superseded: s,
        showLabel: E.intl.string(S.default.RKyN9q),
        hideLabel: E.intl.string(S.default.xydHoj),
        className: aJ.Nr,
        bodyClassName: aJ.rf,
        beforeBody: r && !s ? (0, a.jsx)(aH.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(a2, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var a5 = n(308665),
    a4 = n(59678),
    a6 = n(903847);
function a7(e) {
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
              className: a6.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: h()(a6.vK, { [a6.ho]: g && c, [a6.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: h()(a6.Rk, a4.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(aB.A, {
                                        glyph: (0, a.jsx)(a5.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(C.D, {
                                    className: a6.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: h()(a6.Rk, a4.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(aB.A, {
                                            glyph: (0, a.jsx)(a5.Ay, {}),
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
                                        className: a6.BO,
                                        onClick: R,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(S.default.RtzECX),
                                        children: (0, a.jsx)(aG.ClipboardListIcon, {
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
                            className: h()(a6.vB, { [a6.pg]: v && A, [a6.ui]: !v }),
                            children: (0, a.jsx)(a3, {
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
var a8 = n(16619);
function a9(e) {
    let t = (0, a8.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var ie = n(736553),
    it = n(642785);
async function il(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, it.dv)(e),
        i = new ie.u();
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
var ir = n(890497),
    ia = n(29073),
    ii = n(590077);
function is(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = a9(e),
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
                                : eb(
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
                        ((t = z.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(S.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, H.m)() }), x.current.set(e.projectId, t)),
                                il(e.projectId, l, t.nonce)
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
        className: h()(ia.nd, ia.jx),
        "aria-labelledby": c,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: ia.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: c,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: ia.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tv.K, {
                        icon: eW.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": E.intl.string(S.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ii.r,
                children: [
                    0 === u.length
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TbbzW5),
                          })
                        : (0, a.jsx)(ir.Z, {
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
                    (0, a.jsx)(rv.f, {
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
                className: ia.qr,
                children: (0, a.jsx)("div", {
                    className: ia.zt,
                    children: (0, a.jsx)(eR.$, {
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
var io = n(658675),
    iu = n(22231),
    ic = n(123292),
    id = n(691885),
    im = n(360047);
function ih(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: o } = e,
        u = i.useMemo(() => im.Hi.map((e) => ({ id: e, value: e, label: (0, im.hU)(e) })), []);
    return (0, a.jsx)(id.l, {
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
var ip = n(734057),
    ig = n(287809);
function ix(e) {
    return 0 === e.options.length && null == e.input;
}
let iv = {
        [D.rbe.GUILD_TEXT]: "text",
        [D.rbe.GUILD_VOICE]: "voice",
        [D.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [D.rbe.GUILD_STAGE_VOICE]: "stage",
        [D.rbe.GUILD_FORUM]: "forum",
        [D.rbe.GUILD_MEDIA]: "media",
    },
    ij = { channel: "#", role: "@", user: "@", project: "", server: "" },
    ib = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
        server: [S.default.ZWXDeI, S.default.ZWXDeI],
    };
function iy(e, t) {
    return E.intl.string(ib[e][+!!t]);
}
var ik = n(155078);
function iw(e) {
    return e.options.some((e) => null != e.image);
}
let iN = [];
function iC(e, t) {
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
var iA = n(300344),
    iS = n(614733),
    iE = n(904363),
    iI = n(950902),
    iM = n(384017);
function i_(e) {
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
                        let l = null == (n = ip.A.getChannel(t)?.type) ? void 0 : iv[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = ig.default.getUser(t)?.username;
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
        className: iM.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(ir.Z, {
                  ...g,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(p(e), t),
              })
            : (0, a.jsx)(ir.Z, {
                  ...g,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : p([e]), t),
              }),
    });
}
function iP(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, iA.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(i_, { ...l, guildId: t, options: r, placeholder: iy("channel", !0 === l.question.multi_select) });
}
function iR(e) {
    let { guildId: t, ...n } = e,
        l = (0, iE.A)(t);
    return (0, a.jsx)(i_, { ...n, guildId: t, options: l, placeholder: iy("role", !0 === n.question.multi_select) });
}
function iT(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, iS.A)(t);
    return (0, a.jsx)(i_, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: iy("user", !0 === n.question.multi_select),
    });
}
function iL(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = a9(t),
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
    return 0 === s.length ? n : (0, a.jsx)(i_, { ...l, options: s, placeholder: iy("project", !1) });
}
function i$(e) {
    let t = e.target;
    (0, eU.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function iD(e) {
    let { fallback: t, ...n } = e,
        l = (0, a8.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(rb.Ay, { guild: e, size: rb.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: i$,
              onMouseUp: i$,
              children: (0, a.jsx)(i_, { ...n, options: r, placeholder: iy("server", !1) }),
          });
}
function iq(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, iI.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(iL, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(iD, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(iP, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(iR, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(iT, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var iO = n(87221),
    iz = n(26430),
    iF = n(256905),
    iU = n(490707),
    iG = n(907702);
function iB(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, iU._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: h()(iG.Gt, iG.b6),
              children: [
                  (0, a.jsx)(iO.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: h()(iG.Gt, { [iG.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: iG.Sl,
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
function iK(e) {
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
        className: h()(iG.Vs, { [iG.Q9]: s, [iG.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(C.D, {
                className: iG.Up,
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
                        className: iG.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(iB, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: iG.Gt }),
                            (0, a.jsx)("span", {
                                className: iG.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(io.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(rW.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: iG.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, ik.E)(t) : "")
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
                      className: iG.B4,
                      children: (0, a.jsx)(N.m, {
                          text: E.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(tv.K, {
                              icon: at.TrashIcon,
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
                        className: iG.B4,
                        children: (0, a.jsx)(N.m, {
                            text: E.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(tv.K, {
                                icon: iz._,
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
function iH(e) {
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
                    Promise.all(t.map((e) => (0, ea.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, iF.R)({
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
        className: iG.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: h()(iG.fF, "gallery" === f ? iG.nV : iG.nM, { [iG.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            iK,
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
                              iK,
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
            (0, a.jsx)(iV, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: E.intl.string(/\bicons?\b/i.test(l.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function iV(e) {
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
        className: iG.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: iG.QJ,
                children: [
                    (0, a.jsx)(eR.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: rg.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(eR.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: tp.LinkIcon,
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
                        className: iG.Fg,
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
                                        (0, er.Oq)(a.size, r)
                                            ? (0, ea.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: eg(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: iG.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: iG.Hs,
                              children: (0, a.jsx)(rx.k, {
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
                              className: iG.gd,
                              children: [
                                  (0, a.jsx)(eR.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(S.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(ic.Q, {
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
function iW(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(C.D, {
        className: h()(iM.uK, { [iM.ue]: l, [iM.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: iM.dy, children: (0, a.jsx)(io.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: iM.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: iM.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: iM.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: iM.ed,
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
                      className: iM.rM,
                      children: E.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function iX(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return iw(n)
        ? (0, a.jsx)(iH, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      iW,
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
let iZ = [],
    iY = [];
function iJ(e) {
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
        className: h()(iM.Ge, iM.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: iM.aK,
                      children: E.intl.string(S.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(iX, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: iC(o, u),
            }),
            iw(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: iM.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: iM.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(iu.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: h()(iM.Pu, iM.es), children: c }),
                      ],
                  }),
        ],
    });
}
function iQ(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: o,
            onBack: u,
            backText: c,
            hideSubmit: d = !1,
            headingLines: m = 5,
        } = e,
        [f, p] = i.useState({}),
        [g, x] = i.useState({}),
        [j, b] = i.useState({}),
        [y, k] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [w, A] = i.useState({}),
        [I, M] = i.useState({}),
        [_, P] = i.useState(!1),
        [R, T] = i.useState(0),
        [L, $] = i.useState(null),
        [D, q] = i.useState(null),
        [O, z] = i.useState(null),
        [F, U] = i.useState(!1),
        G = i.useRef(null),
        [B, K] = i.useState(null),
        H = i.useRef(null),
        V = i.useRef(0),
        W = null == r,
        X = l.questions.length,
        Z = Math.min(R, X - 1),
        Y = l.questions[Z],
        [J, Q] = i.useState({ id: Y.id, expanded: !1 }),
        ee = J.id === Y.id && J.expanded,
        [et, en] = i.useState(null),
        el = g[Y.id] ?? "",
        er = !0 === Y.multi_select,
        ei = iw(Y),
        es = er ? (j[Y.id] ?? iZ) : ((t = f[Y.id]), t?.kind === "option" ? [t.optionId] : iN),
        eo = (function (e, t, n) {
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
                        if (o) return iC(h, m(i));
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
                                    null != l && (0, ea.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, ea.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                (0, ea.gm)(e, t).then(
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
        })(n, f, p),
        eu = eo.imageFor(Y.id),
        ec = eo.selectedFor(Y),
        { text: ed, phase: em } = (0, no.Q)(Y.question),
        ef = ed === Y.question,
        eh = ef && et?.id === Y.id && et.truncated;
    i.useLayoutEffect(() => {
        if (null == B || ee || !ef) return;
        function e() {
            if (null == B) return;
            let e = B.scrollHeight > B.clientHeight + 1;
            en((t) => (t?.id === Y.id && t.truncated === e ? t : { id: Y.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(B), () => t.disconnect());
    }, [ef, B, Y.id, ee]);
    let ep = E.intl.string(ee ? E.t.iTcuma : E.t.dcl9MQ),
        eg = i.useCallback(
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
                                ? n.entities.map((e) => ({ target: e.id, build: I[t.id] }))
                                : [];
                        })).length
                            ? t()
                            : Promise.allSettled(
                                  i.map((e) => {
                                      let { target: t, build: l } = e;
                                      return (0, im.Ol)(t, n, l);
                                  }),
                              ).then(t));
                }
            },
            [l, I, r, n],
        ),
        ex = i.useCallback(
            (e, t) => {
                V.current += 1;
                let n = V.current;
                ($({ direction: t, moves: n }),
                    q({ question: Y, draft: el, selected: es, ownImage: eu, ownSelected: ec, direction: t, moves: n }),
                    U(!0),
                    T(e));
            },
            [el, eu, ec, Y, es],
        ),
        ev = i.useCallback(() => {
            let e = G.current,
                t = H.current;
            null != e && null != t && z({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = G.current,
            t = H.current;
        if (null == e || null == t) return;
        ev();
        let n = new ResizeObserver(ev);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ev]);
    let ej = L?.moves;
    i.useEffect(() => {
        if (null == ej) return;
        let e = setTimeout(() => q(null), 400),
            t = setTimeout(() => U(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ej]);
    let eb = i.useCallback(
            (e) => {
                if (W) return;
                let t = { ...f, [Y.id]: e };
                p(t);
                let n =
                    Z < l.questions.length - 1
                        ? Z + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, Z);
                null == n ? eg(t) : ex(n, n < Z ? "back" : "forward");
            },
            [f, l, W, Z, Y.id, eg, ex],
        ),
        ey = i.useCallback(() => {
            W || 0 === Z || ex(Z - 1, "back");
        }, [W, Z, ex]),
        ek = 0 !== Z || W ? void 0 : u,
        ew = (Z > 0 && !W) || null != ek,
        eN = i.useCallback(
            (e) => {
                x((e) => ({ ...e, [Y.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                ei ? W || p((e) => ({ ...e, [Y.id]: t })) : eb(t);
            },
            [W, ei, Y.id, eb],
        ),
        { multiPartFor: eC } = eo,
        eA = i.useMemo(() => {
            var e;
            let t, n;
            return er
                ? ((e = eC(Y)),
                  (t = el.trim()),
                  (n = Y.options.filter((e) => es.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: es,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [el, er, eC, Y, es]),
        eS = y[Y.id] ?? iY,
        eE = i.useMemo(() => {
            var e, t;
            let n;
            return null != Y.input
                ? ((e = Y.input),
                  (t = w[Y.id]),
                  (n = el.trim()),
                  {
                      kind: "entities",
                      entities: eS,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eS.map((t) => (t.name.startsWith(ij[e]) ? t.name : `${ij[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [el, w, eS, Y.id, Y.input]),
        eI = i.useCallback(
            (e, t) => {
                (k((t) => ({ ...t, [Y.id]: e })), A((e) => ({ ...e, [Y.id]: t })));
            },
            [Y.id],
        ),
        eM = i.useCallback(() => P(!0), []),
        e_ = i.useCallback(() => P(!1), []),
        eP = eo.controlsFor(Y, W),
        eT = i.useCallback(() => {
            if (null != eE) {
                "" !== eE.text && eb(eE);
                return;
            }
            if (null != eA) {
                "" !== eA.text && eb(eA);
                return;
            }
            let e = el.trim();
            "" !== e && eb({ kind: "custom", text: e });
        }, [el, eA, eE, eb]),
        [eL, e$] = i.useState(!1),
        [eD, eq] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => e$(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eO = i.useCallback(() => {
            null != s && (eq(!0), setTimeout(s, 150));
        }, [s]),
        ez = i.useMemo(
            () =>
                null != eE
                    ? "" !== eE.text
                        ? eE
                        : null
                    : null != eA
                      ? "" !== eA.text
                          ? eA
                          : null
                      : "" !== el.trim()
                        ? { kind: "custom", text: el.trim() }
                        : (f[Y.id] ?? null),
            [f, el, eA, eE, Y.id],
        ),
        eF = null != ez && !W,
        eG = Z === X - 1,
        eB = i.useCallback(() => {
            null == ez || W || eb(ez);
        }, [W, ez, eb]),
        eK = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, eU.vq)(e.target, HTMLTextAreaElement) ||
                    (0, eU.vq)(e.target, HTMLInputElement) ||
                    ((!(0, eU.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ew
                            ? (e.preventDefault(), (ek ?? ey)())
                            : "ArrowRight" === e.key && eF && (e.preventDefault(), eB())));
            },
            [ek, ew, eF, ey, eB],
        ),
        eH = ei
            ? null
            : (0, a.jsxs)("div", {
                  className: iM.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: iM.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(iu.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(r0.y, {
                          value: el,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              x((e) => ({ ...e, [Y.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eT());
                          },
                          placeholder: E.intl.string(ix(Y) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                          "aria-label": E.intl.formatToPlainString(S.default["4JeYPB"], { question: Y.question }),
                          disabled: W,
                          rows: 1,
                          className: iM.Pu,
                          "data-conjure-clarification-other": Y.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: h()(iM.$O, { [iM.fI]: eL && !eD, [iM.Oh]: eD }),
        role: "dialog",
        "aria-label": Y.question,
        "data-conjure-clarification": l.id,
        "data-state": W ? "inert" : "open",
        "data-question-expanded": ee ? "true" : void 0,
        "data-picker-open": _ && !F ? "true" : void 0,
        "data-step": Z,
        tabIndex: -1,
        onKeyDown: eK,
        children: [
            (0, a.jsxs)("div", {
                className: iM.rf,
                style: null == O ? void 0 : { height: O.heading + O.rows },
                "data-moving": F ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: G,
                        className: iM.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: K,
                                tag: "span",
                                id: `${Y.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: ee ? void 0 : m,
                                className: h()(ia.TK, iM.R_, { [iM.TB]: "exit" === em, [iM.JU]: "enter" === em }),
                                children: ed,
                            }),
                            eh || ee
                                ? (0, a.jsx)("div", {
                                      className: ia.Q7,
                                      children: (0, a.jsx)(N.m, {
                                          text: ep,
                                          children: (0, a.jsx)(tv.K, {
                                              icon: ee ? ni.t : l9.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => Q({ id: Y.id, expanded: !ee }),
                                              "aria-label": ep,
                                              "aria-controls": `${Y.id}-label`,
                                              "aria-expanded": ee,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(C.D, {
                                      className: h()(ia.gb, ia.Q7),
                                      onClick: eO,
                                      "aria-label": E.intl.string(S.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(eW.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: iM.Cg,
                        style: null == O ? void 0 : { insetBlockStart: O.heading },
                        children: (0, a.jsxs)("div", {
                            className: iM.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: H,
                                    className: iM.Ge,
                                    role: "group",
                                    "aria-labelledby": `${Y.id}-label`,
                                    "data-direction": L?.direction,
                                    "data-parity": null == L ? void 0 : L.moves % 2,
                                    children: [
                                        er
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: iM.aK,
                                                  children: E.intl.string(S.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(iX, {
                                            projectId: n,
                                            question: Y,
                                            selected: es,
                                            disabled: W,
                                            onPick: (e) =>
                                                er
                                                    ? b((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [Y.id]:
                                                                  ((n = t[Y.id] ?? iZ),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  Y.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eN(e),
                                            own: eP,
                                        }),
                                        null != Y.input
                                            ? (0, a.jsx)(iq, {
                                                  projectId: n,
                                                  question: Y,
                                                  value: eS,
                                                  disabled: W,
                                                  onChange: eI,
                                                  onFocus: eM,
                                                  onBlur: e_,
                                                  fallback: !1 === Y.allow_custom ? eH : null,
                                              })
                                            : null,
                                        !0 === Y.link && eS.length > 0 && null == I[Y.id]
                                            ? (0, a.jsx)("div", {
                                                  className: iM.X_,
                                                  children: (0, a.jsx)(ic.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: E.intl.string(S.default.eCzCxC),
                                                      disabled: W,
                                                      onClick: () => M((e) => ({ ...e, [Y.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === Y.link && eS.length > 0 && null != I[Y.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: iM.$y,
                                                  onFocus: eM,
                                                  onBlur: e_,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: E.intl.string(S.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(ih, {
                                                          label: E.intl.string(S.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: I[Y.id] ?? "auto",
                                                          disabled: W,
                                                          onChange: (e) => M((t) => ({ ...t, [Y.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        null != Y.note
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: iM.aK,
                                                  children: Y.note,
                                              })
                                            : null,
                                        !1 === Y.allow_custom ? null : eH,
                                    ],
                                }),
                                null == D
                                    ? null
                                    : (0, a.jsx)(
                                          iJ,
                                          {
                                              projectId: n,
                                              question: D.question,
                                              draft: D.draft,
                                              selected: D.selected,
                                              ownImage: D.ownImage,
                                              ownSelected: D.ownSelected,
                                              direction: D.direction,
                                              disabled: W,
                                          },
                                          D.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            X > 1 || er || ei || null != Y.input || null != u || ix(Y)
                ? (0, a.jsxs)("div", {
                      className: ia.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  X > 1
                                      ? E.intl.formatToPlainString(S.default.yzYUjq, { index: Z + 1, total: X })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: ia.zt,
                              children: [
                                  ew
                                      ? (0, a.jsx)(ic.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: c ?? E.intl.string(S.default.Pk5lfA),
                                            onClick: ek ?? ey,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  d
                                      ? null
                                      : (0, a.jsx)(eR.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eG
                                                ? (o ?? E.intl.string(E.t.geKm7t))
                                                : E.intl.string(S.default.w1nRmT),
                                            disabled: !eF,
                                            onClick: eB,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eG ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var i0 = n(557744),
    i1 = n(223347),
    i2 = n(894443),
    i3 = n(525530);
let i5 = "scope-setup:q0",
    i4 = `${i5}:0`,
    i6 = `${i5}:1`;
function i7(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([z.Ay], () => z.Ay.getProject(t), [t]),
        l = (0, a8.z9)("ConjureScopeSetupCard"),
        [r, s] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = n?.install_scope_setup,
        h = "server" === r || (null == r && "choose_server" === f),
        p = n?.guild_id,
        g = i.useMemo(
            () =>
                h
                    ? {
                          id: l.length > 0 ? "server-setup" : "server-setup-empty",
                          questions: [
                              {
                                  id: "server-setup:q0",
                                  question: E.intl.string(l.length > 0 ? S.default.ZWXDeI : S.default["u5+Qhu"]),
                                  recommendation_reason: "",
                                  allow_custom: !1,
                                  options: l.length > 0 ? [] : [{ id: i4, label: E.intl.string(S.default.qLYOpH) }],
                                  ...eI(l, p),
                              },
                          ],
                      }
                    : {
                          id: "scope-setup",
                          questions: [
                              {
                                  id: i5,
                                  question: E.intl.string(S.default.ickKBI),
                                  recommendation_reason: "",
                                  allow_custom: !1,
                                  options: [
                                      {
                                          id: i4,
                                          label: E.intl.string(S.default.qLYOpH),
                                          detail: E.intl.string(S.default.QSKvUE),
                                      },
                                      {
                                          id: i6,
                                          label: E.intl.string(S.default.QV5C7b),
                                          detail: E.intl.string(S.default["ZzHR4/"]),
                                      },
                                  ],
                              },
                          ],
                      },
            [h, l, p],
        );
    if (null == f) return null;
    if (null == n || !(0, z.PV)(n)) return (0, a.jsx)(iQ, { projectId: t, clarification: eM(g), hideSubmit: !0 });
    async function x(e, n) {
        (c(!0), m(null));
        try {
            await eC(`settle:${t}`, async () => {
                try {
                    await e_(t, e, n);
                } catch (e) {
                    if (409 !== e.status) throw e;
                    await (0, R.U1)(t);
                }
            });
        } catch (e) {
            (c(!1), m(null != n && 403 === e.status ? "server" : "failed"));
        }
    }
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(
                iQ,
                {
                    projectId: t,
                    clarification: g,
                    onSubmit: u
                        ? void 0
                        : function (e, t) {
                              let n = t?.answers[0];
                              if (null == n) return;
                              let l = n.entities?.[0]?.id;
                              n.option_ids.includes(i6) ? s("server") : null != l ? x("guild", l) : x("user", null);
                          },
                    submitText: E.intl.string(E.t["cY+Oob"]),
                    onBack: h && !u ? () => s("scope") : void 0,
                },
                g.id,
            ),
            null != d
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: E.intl.string("server" === d ? S.default["XXKd+7"] : S.default.jNVZ3e),
                  })
                : null,
        ],
    });
}
function i8(e) {
    let { projectId: t, clarification: n, offer: l, onKept: r } = e,
        { scope: s, feature: u } = l,
        c = (0, o.bG)([z.Ay], () => z.Ay.getProject(t), [t]),
        d = (0, a8.z9)("ConjureScopeSwitchCard"),
        [m, f] = i.useState(!1),
        [h, p] = i.useState(null),
        g = c?.guild_id,
        x = i.useMemo(() => {
            let [e] = n.questions,
                t = E.intl.formatToPlainString("guild" === s ? S.default["jh/iy+"] : S.default.d7jxeT, { feature: u });
            return {
                id: n.id,
                questions: [
                    "guild" === s
                        ? { ...e, question: t, allow_custom: !1, ...eI(d, g) }
                        : {
                              ...e,
                              question: t,
                              allow_custom: !1,
                              options: [{ id: `${e.id}:0`, label: E.intl.string(S.default.TVRkVh) }],
                          },
                ],
            };
        }, [n, u, d, g, s]);
    if (null == c || !(0, z.PV)(c))
        return (0, a.jsx)(iQ, { projectId: t, clarification: eM(x), headingLines: 1, hideSubmit: !0 }, x.id);
    async function j(e) {
        (f(!0), p(null));
        try {
            var l;
            await ((l = n.id),
            eC(`switch:${t}:${l}`, async () => {
                await e_(t, s, e);
                let n = "guild" === s ? S.default["8+EcCu"] : S.default["U7+Yeh"];
                if (!(0, _.sendUserMessage)(t, E.intl.string(n))) throw Error("Not connected");
            }));
        } catch (e) {
            (f(!1), p(409 === e.status ? "locked" : "failed"));
        }
    }
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)(
                iQ,
                {
                    projectId: t,
                    clarification: x,
                    headingLines: 1,
                    onSubmit: m
                        ? void 0
                        : function (e, t) {
                              let n = t?.answers[0]?.entities?.[0];
                              "user" === s ? j(null) : null != n && j(n.id);
                          },
                    submitText: E.intl.string("guild" === s ? S.default.Ua7yKM : S.default.TVRkVh),
                    onBack: m
                        ? void 0
                        : function () {
                              (p(null), (0, ey.b4)(t, "keep install scope", (e) => e.sendKeepInstallScope()))
                                  ? r()
                                  : p("failed");
                          },
                    hideSubmit: "user" === s,
                    backText: E.intl.string("guild" === s ? S.default["4WnIqd"] : S.default["am+p7p"]),
                },
                x.id,
            ),
            null != h
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: E.intl.string("locked" === h ? S.default.irUT0N : S.default.jNVZ3e),
                  })
                : null,
        ],
    });
}
var i9 = n(564963);
let se = new Set(["select", "channel", "role", "user"]);
function st(e, t) {
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
function sn(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
let sl = new Set(),
    sr = new Set();
function sa(e) {
    return (
        sr.add(e),
        () => {
            sr.delete(e);
        }
    );
}
function si() {
    return i.useSyncExternalStore(sa, () => sl);
}
function ss(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, az.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function so(e, t, n) {
    if (!n || null == t) return !1;
    let l = sn(e, t);
    return l.length > 0 && !st({ keys: l }, t);
}
var su = n(1665),
    sc = n(11120),
    sd = n(411236);
function sm(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: c,
            summary: d,
            markSaved: m,
        } = (function (e, t, n) {
            let l = si(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!sl.has(n)) for (let e of ((sl = new Set([...sl, n])), sr)) e();
                    } else a(!0);
                }, [n]),
                c = (0, o.bG)([tE.A], () => so(t, tE.A.getSettings(e), s), [e, t, s]);
            return {
                done: c,
                superseded: (0, o.bG)([W.A], () => null != n && ss(W.A.getMessages(e)).has(n), [e, n]),
                summary: (0, o.yK)(
                    [tE.A, ip.A],
                    () => {
                        var n;
                        let l = tE.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => ip.A.getChannel(e)?.name ?? null),
                              sn(t, l).flatMap((e) => {
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
                                                      case "game":
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
            className: sd.Mk,
            children: (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: E.intl.string(S.default["+uXDk+"]),
            }),
        });
    if (f)
        return (0, a.jsxs)("article", {
            className: sd.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: sd.Ol,
                    children: [
                        (0, a.jsx)(nN.y, { size: "xs", color: w.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
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
    let p = null != n.note && "" !== n.note ? n.note : E.intl.string(S.default.XuOf5s);
    return (0, a.jsx)(sc.A, {
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
            let o = (0, a.jsx)(eR.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: E.intl.string(S.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: sd.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(S.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(su.A, { text: p, variant: "text-sm/normal", color: "text-default" }),
                          t,
                          (0, a.jsx)("div", { className: sd.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: h()(ia.nd, ia.jx),
                      "aria-label": E.intl.string(S.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: ia.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: ia.TK,
                                      children: E.intl.string(S.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(C.D, {
                                      className: h()(ia.gb, ia.Q7),
                                      onClick: r,
                                      "aria-label": E.intl.string(S.default["iq+Pte"]),
                                      children: (0, a.jsx)(eW.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: sd.DQ,
                              children: [
                                  (0, a.jsx)(su.A, { text: p, variant: "text-sm/normal", color: "text-default" }),
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: ia.qr,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: sd.xE,
                                      children: E.intl.string(S.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: ia.zt,
                                      children: [
                                          (0, a.jsx)(eR.$, {
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
var sf = n(935208),
    sh = n(932111),
    sp = n(404373);
function sg(e) {
    return "" !== en.getDraft(e).trim();
}
var sx = n(29080);
function sv(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, aO.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, aO.Lf)(r) }),
    };
}
var sj = n(62617);
let sb = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    sy = {
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
    sk = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, sj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, sj.Z)(),
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
                        () => (0, sj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, sj.Z)(),
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
                        () => (0, sj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, sj.Z)(),
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
                        () => (0, sj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, sj.Z)(),
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
                        () => (0, sj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, sj.Z)(),
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
                        () => (0, sj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, sj.Z)(),
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
                        () => (0, sj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, sj.Z)(),
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
                        () => (0, sj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, sj.Z)(),
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
                        () => (0, sj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, sj.Z)(),
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
                        () => (0, sj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, sj.Z)(),
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
                        () => (0, sj.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, sj.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function sw(e) {
    return { ...sk[e], name: E.intl.string(sy[e]()) };
}
function sN(e) {
    return sb.includes(e) ? sw(e) : void 0;
}
function sC(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % sb.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, sb[(t + n) % sb.length]);
            }),
            l
        );
    })(e))
        t.set(n, sw(l));
    return t;
}
var sA = n(615839);
function sS(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.KcFvbo);
}
var sE = n(60160),
    sI = n(16634);
function sM(e) {
    let t = (0, aO.SY)(e.steps);
    return null != t ? (0, aO.WQ)(t) : sS(e.task);
}
function s_(e) {
    let t = sC(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? sN(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: sS(e.task),
                      todoId: e.task.todoId,
                      line: sM(e),
                  },
              ];
    });
}
function sP(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, aO.SY)(n.steps),
        d = u
            ? sM(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(sS(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, sA.MB)(e.durationMs),
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
                                    className: a4.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            sI.A,
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
                                      className: a4.iq,
                                      children: (0, a.jsx)(sE.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(aB.A, {
        glyph: (0, a.jsx)(aK.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: sS(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: a4.nC,
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
var sR = n(998445),
    sT = n(643210),
    sL = n(648127),
    s$ = n(372795),
    sD = n(163897);
let sq = "conjure-browser-viewer";
function sO(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [sT.A],
            () =>
                n.flatMap((e) => {
                    let n = sT.A.getTab(t, e);
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
        className: sD.kR,
        "aria-label": E.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(sz, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function sz(e) {
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
        u = (0, tT.useHasModalOpen)(sq),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        p = (0, sL.i)(l.session);
    return (0, a.jsxs)(C.D, {
        innerRef: s,
        className: h()(sD.Nr, f && sD.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, tT.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: sq },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(S.default.G3a822, { title: p }),
        children: [
            (0, a.jsxs)("div", {
                className: sD.Gt,
                children: [
                    (0, a.jsx)(s$.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: sD.Ji,
                        "aria-label": E.intl.formatToPlainString(S.default.rnwqXb, { name: p }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: sD.qf,
                              children: (0, a.jsx)(sR.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: sD.HS,
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
                className: sD.pG,
                children: [
                    (0, a.jsx)("span", { className: h()(sD.W9, f && sD.oM) }),
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
var sF = n(268409);
let sU = new WeakMap(),
    sG = new WeakMap();
function sB(e) {
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
            [W.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = sU.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = sG.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), sG.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (sU.set(e, n), n);
                })(W.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: sF.h, children: (0, a.jsx)(sO, { projectId: t, sessionIds: u }) });
}
var sK = n(469393);
function sH(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, lG.lG)(t.authored_at);
    return (0, a.jsx)(aW, {
        title: E.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: sK.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sK.z,
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
                    ? (0, a.jsx)(eR.$, {
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
var sV = n(155718);
function sW(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let sX = ["command", "user_command", "message_command", "message"],
    sZ = new Set([sV.kc.CHAT, sV.kc.USER, sV.kc.MESSAGE]);
function sY(e) {
    return e.type ?? sV.kc.CHAT;
}
function sJ(e) {
    return sZ.has(sY(e));
}
function sQ(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function s0(e, t) {
    let n = sX.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !sQ(e)), ...n.filter(sQ)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || sQ(r) || l.push(r);
    }
    return sX.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function s1(e, t, n) {
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
    let s = e.commands.filter(sJ).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (sY(e)) {
                    case sV.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case sV.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(sQ),
        u = a.length > 0 ? s0([...a, ...o], !0) : s0("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var s2 = n(377941),
    s3 = n.n(s2);
function s5(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function s4(e) {
    return e.type === sV.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === sV.kc.USER || e.type === sV.kc.MESSAGE
          ? ""
          : "/";
}
let s6 = {
        [lV.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [lV.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [lV.q7.ACTIVITY]: S.default["3/aHX6"],
        [lV.q7.OVERLAY]: S.default["rPpf5/"],
        [lV.q7.PROFILE_WIDGET]: null,
        [lV.q7.AUTOMOD]: null,
        [lV.q7.BOT]: null,
        [lV.q7.APPLICATION_COMMANDS]: null,
    },
    s7 = [lV.q7.ACTIVITY, lV.q7.APP_CHANNEL, lV.q7.VOICE_CHANNEL, lV.q7.OVERLAY];
function s8(e) {
    return s7.find((t) => sW(e, t)) ?? null;
}
var s9 = n(176999),
    oe = (((l = {}).IMAGE = "image"), l),
    ot = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    on = n(598748),
    ol = n(773669);
let or = [],
    oa = {},
    oi = {};
function os(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function oo(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: oe.IMAGE,
        visibility: ot.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var ou = n(127258),
    oc = n(803306),
    od = n(320095),
    om = n(963852),
    of = n(95701),
    oh = n(889227),
    op = n(427262);
let og = new of.nA({ id: "1337", guild_id: "1337", type: D.rbe.GUILD_TEXT, name: "preview" });
function ox(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([ig.default], () => ig.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, oc.nj)(new oh.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let ov = /^@\S+/;
var oj = n(97808),
    ob = n(778712),
    oy = n(46054),
    ok = n(200700);
let ow = {
        alert: { label: () => E.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    oN = {
        blocked: { label: () => E.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(S.default.RGzFNK), tone: "green" },
    },
    oC = ["blocked", "alert", "allowed"],
    oA = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function oS(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, ok.getFriendlyDurationString)(n))
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
var oE = n(984097),
    oI = n(13673);
let oM = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function o_(e) {
    let { example: t } = e,
        n = oS(t);
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
let oP = ["glazedgamer", "sprinkles", "donutking"];
function oR(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = ow[n.outcome];
    return (0, a.jsxs)("li", {
        className: h()(oE.nM, { [h()(oE.HV, oI.DX)]: s }),
        children: [
            (0, a.jsx)(aH.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: oE.my,
                children: (0, a.jsx)(oj.eu, {
                    src: (0, eL.AE)(void 0, void 0),
                    size: ob._3.SIZE_24,
                    "aria-label": E.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: oE.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), oy.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(o_, { example: n }) : null,
                ],
            }),
        ],
    });
}
function oT(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = oN[t.section],
        s = new Set(t.examples.map(oS)),
        o = 1 === s.size ? t.examples.map(oS)[0] : null;
    return (0, a.jsxs)("div", {
        className: oE.UO,
        children: [
            (0, a.jsxs)("div", {
                className: oE.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: oM[r.tone],
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
                                      className: oE.IQ,
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
                className: oE.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(oR, { example: e, username: oP[(n + t) % oP.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function oL(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            oC
                .map((e) => ({ section: e, examples: t.filter((t) => oA[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: oE.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: oE.hk,
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
                    oT,
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
var o$ = n(276293),
    oD = n(460905),
    oq = n(110384),
    oO = n(633018),
    oz = n(763754),
    oF = n(217424),
    oU = n(194085),
    oG = n(20851),
    oB = n(692508),
    oK = n(798819);
function oH(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: h()(oK.item, oK.labelContainer, oK.colorDefault, {
            [oK.focused]: !0 === t.highlighted,
            [oK.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: oK.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: oK.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: h()(oK.label, oB.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: oK.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: oK.icon }),
                  })
                : null,
        ],
    });
}
function oV(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: h()(t, oB.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: oq.W, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: h()(oK.menu, oB.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: oK.scroller,
            children: [
                (0, a.jsx)(oH, { item: s }),
                (0, a.jsx)("div", { className: oK.separator }),
                (0, a.jsx)(oH, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var oW = n(381941);
function oX() {}
function oZ(e) {
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
        } = ((t = (0, o.bG)([ig.default], () => ig.default.getCurrentUser())),
        (n = (0, o.bG)([z.Ay], () => z.Ay.getProject(g))),
        (l = n?.application_id),
        (r = (0, o.bG)([tO.A], () => tO.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(S.default.JEYq8M)),
        (u = (0, o.bG)([ig.default], () => (null != l ? ig.default.getUser(l) : void 0), [l])),
        (d = ox("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = ox("31338", E.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (p = ox("31339", (0, op.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, od.rh)({
                                          ...(0, om.Ay)({
                                              channelId: og.id,
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
                                                        type: ou.G.APPLICATION_COMMAND,
                                                        user: (0, om.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(ov, `<@${i.id}>`)), s),
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
    let k = og.name;
    return (0, a.jsxs)("div", {
        className: oB.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: oB.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(o$.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: h()(oB.TE, `group-spacing-${oW.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? oB.Rz : void 0,
                            children: [
                                (0, a.jsx)(oG.A, {
                                    message: n,
                                    channel: og,
                                    author: (0, oz.FT)(n.author, og),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(oF.A, { message: n, channel: og }) : void 0,
                                    usernameClassName: r?.target === "user" ? oB.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: oB.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(oU.Ay, {
                                              children: [
                                                  (0, a.jsx)(oU.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: oD.n,
                                                      onClick: oX,
                                                  }),
                                                  (0, a.jsx)(oU.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: oq.W,
                                                      onClick: oX,
                                                  }),
                                                  (0, a.jsx)(oU.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: tj.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: oX,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? oB.ET : oB.je,
                                          inert: !0,
                                          children: (0, a.jsx)(oV, {
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
                className: oB.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(oO.k, { size: "sm", color: "currentColor" }),
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
var oY = n(332173);
function oJ(e) {
    let { name: t } = e;
    return (0, a.jsxs)(oY.A, { children: ["/", t] });
}
function oQ(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(s3());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(oJ, { name: e.name }, e.start) : e.text));
}
n(827669);
var o0 = n(757789),
    o1 = n(26137);
let o2 = {
    frame: S.default.Z2bt4u,
    overlay_widget: S.default["0mGHfU"],
    user_widget: S.default.Jipr29,
    bot: S.default.EbvC13,
    commands: S.default.EbvC13,
    automod: S.default.tiMvei,
};
var o3 = n(573634);
let o5 = {
    frame: e$.GameControllerIcon,
    overlay_widget: o0.V,
    user_widget: o1.r,
    bot: ez.RobotIcon,
    commands: ez.RobotIcon,
    automod: eO.ShieldIcon,
};
function o4(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: h()(o3.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function o6(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: o3.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: o3.jw,
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
function o7(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: o3.lj,
        children: [
            (0, a.jsx)("span", {
                className: h()(o3.Vo, o3.G),
                children: (0, a.jsx)(eD.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: o3.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function o8(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: o3.wZ,
        children: t.map((e, t) => {
            let n = s4(e),
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
                                ? (0, a.jsx)(oJ, { name: e.name })
                                : (0, a.jsx)(oY.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function o9(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: o3.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: o3.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(oQ, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function ue(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? eD.k : o5[t.kind],
        u = E.intl.string(s ? S.default.BM4Ymz : o2[t.kind]);
    return (0, a.jsxs)("section", {
        className: o3.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: o3.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: o3.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: o3.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(oQ, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(o9, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: o3.PG, children: r }) : null,
        ],
    });
}
function ut(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: o3.aN,
        children: [
            (0, a.jsxs)("div", {
                className: o3.Lv,
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
                                let n = t.map(s3()).join("|");
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
                            (0, a.jsx)("div", { className: o3.yF, role: "separator" }),
                            (0, a.jsx)(ue, {
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
                                                if (t.surfaces.includes(lV.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(lV.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(lV.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        o4,
                                                        {
                                                            className: o3.Iw,
                                                            caption: E.intl.formatToPlainString(S.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: o3.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        o7,
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
                                                            o4,
                                                            {
                                                                caption: E.intl.string(S.default.MY6UGJ),
                                                                children: (0, a.jsx)(o6, { labels: r }),
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
                                                              o4,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(o8, { commands: e.commands }),
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
                                                            ? [{ key: t, caption: E.intl.string(n), labels: l.map(s5) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            o4,
                                                            { caption: n, children: (0, a.jsx)(o6, { labels: l }) },
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
var un = n(633075),
    ul = n(946356),
    ur = n(58216),
    ua = n(27399);
function ui(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([ig.default], () => ig.default.getCurrentUser()),
        r = i.useMemo(() => new un.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: ua.H,
              children: (0, a.jsx)(ul.A.Overlay, {
                  className: ua.w,
                  children: (0, a.jsx)(ur.A, {
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
var us = n(443863);
function uo(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = (0, iU._)(t, r),
        c = i.useCallback(() => {
            (0, ea.PK)(t, r).then(
                (e) => {
                    (0, iF.R)({
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
              className: us.xX,
              onClick: c,
              "aria-label": E.intl.string(S.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: us.sN, onError: u }) : null,
          });
}
function uu(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = sW(c, lV.q7.APPLICATION_COMMANDS)),
            (l =
                sW(c, lV.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(sJ)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : s1(c, l, {
                              message: E.intl.string(S.default.J7qggf),
                              reply: E.intl.string(S.default.nqYtiy),
                              event: E.intl.string(S.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = oi } = t,
                r = (0, o.bG)([ol.default], () => ol.default.locale),
                a = (0, o.bG)([z.Ay], () => {
                    let t = z.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(oa);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, ea.PK)(e, l.id).then(
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
                                                          ...os(n),
                                                          ...(null != n.fallback ? { fallback: os(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = s9.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[on.m.WIDGET_TOP] || null == i[on.m.WIDGET_BOTTOM]
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
                                                                    type: s9.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: s9.oG.NUMBER, value: a })
                                                                : (r[e] = { type: s9.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(oo),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: or,
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
                        .filter((e) => "/" === s4(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = s8(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(sJ)
                    ? s1({ ...c, bot: void 0 }, "commands", {
                          message: E.intl.string(S.default.J7qggf),
                          reply: E.intl.string(S.default.nqYtiy),
                          event: E.intl.string(S.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([z.Ay], () => z.Ay.getProject(u)?.name, [u]),
        k =
            p && null != d
                ? E.intl.formatToPlainString(S.default.YZ3qJs, { version: d.version })
                : E.intl.string(S.default["3b6e7o"]),
        w = p ? (0, a.jsx)(aZ, { children: E.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(aY, {
        title: k,
        meta: w,
        superseded: p,
        showLabel: E.intl.string(S.default.yD8EJS),
        hideLabel: E.intl.string(S.default.nSPGNb),
        bodyClassName: us.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: us.Qs,
                children: (0, a.jsx)(ut, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(oQ, { text: c.summary, commandNames: x }),
                            }),
                            "" !== g
                                ? (0, a.jsxs)("section", {
                                      className: us.uW,
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
                                              children: (0, a.jsx)(oQ, { text: g, commandNames: x }),
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
                                    ? (0, a.jsx)(uo, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: E.intl.string(null == (t = s8(c)) ? S.default["3/aHX6"] : s6[t]),
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(ui, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(oL, { automod: c.automod })
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
                                        (r = l.some((e) => "command" === e.kind || sQ(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(oZ, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: x,
                }),
            }),
            null == m || p
                ? null
                : (0, a.jsxs)("div", {
                      className: us.qr,
                      children: [
                          (0, a.jsx)(eR.$, {
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
var uc = n(289565);
function ud(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: uc.m, children: n })
        : (0, a.jsxs)("div", {
              className: uc.Z,
              children: [
                  n,
                  (0, a.jsx)(N.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tv.K, {
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          icon: eW.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function um(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function uf(e, t) {
    return null != e && um(t, e.status);
}
let uh = new WeakMap();
var up = n(175841),
    ug = n(27232),
    ux = n(505930),
    uv = n(385081);
let uj = "conjurePublishRatings",
    ub = [1, 2, 3, 4, 5],
    uy = { 1: S.default.GhbsGA, 2: S.default.cm0nwU, 3: S.default.kGvlh2, 4: S.default.dVBSUg, 5: S.default.DKlgF7 };
function uk(e) {
    return E.intl.string(uy[e]);
}
let uw = new Set(),
    uN = 0;
function uC() {
    return U.w.get(uj) ?? {};
}
function uA(e, t) {
    return uC()[e]?.[t] ?? null;
}
function uS(e) {
    return (uw.add(e), () => uw.delete(e));
}
function uE(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, uv.Fz)(e, n);
                },
            };
        })(t),
        u = E.intl.string(S.default.IqkF07);
    return (0, a.jsx)(tP.a, {
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
        children: (0, a.jsx)(rv.f, {
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
var uI = n(54100);
function uM(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: uI.mo,
        role: "status",
        children: [
            (0, a.jsx)(up.SparklesIcon, { size: "xs", color: "currentColor", className: uI.dQ, "aria-hidden": !0 }),
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
function u_(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: o } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(uS, () => uN),
                {
                    rating: uA(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != uA(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, uv.gw)(i);
                            let s = uC();
                            return (U.w.set(uj, { ...s, [t]: { ...s[t], [n]: l } }), uN++, uw.forEach((e) => e()), i);
                        })({ projectId: t, turnId: n, rating: e, cta: l, status: r });
                        return null != a && e <= 2 ? a : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r }),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, p] = i.useState(!1),
        g = i.useId(),
        x = i.useId(),
        j = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!f) return;
            let e = setTimeout(() => p(!1), 420);
            return () => clearTimeout(e);
        }, [f]),
        null != s && !f)
    )
        return (0, a.jsx)(uM, { rating: s });
    let b = null != s,
        y = b ? s : (d ?? u),
        k = b || (null == d && null != u);
    function w(e) {
        if (b) return;
        (c(e), m(null), p(!0));
        let t = o(e);
        null != t && (0, tT.openModal)((e) => (0, a.jsx)(uE, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: uI.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: uI.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: x,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: h()(uI.Pf, { [uI.KH]: null == y }),
                        children: E.intl.string(S.default.mTV326),
                    }),
                    ub.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: h()(uI.Pf, { [uI.KH]: y === e }),
                                children: uk(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": x,
                className: uI.uf,
                children: ub.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? ug.StarIcon : ux.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: uI.uK,
                            onMouseEnter: () => {
                                b || m(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: g,
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
                                    className: uI.hF,
                                    "aria-label": E.intl.formatToPlainString(S.default.NU7Dex, {
                                        rating: e,
                                        label: uk(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: h()(uI.d4, { [uI.cO]: t, [uI.Ng]: t && k }),
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
function uP(e) {
    let { projectId: t, publish: n } = e;
    return (0, a.jsx)("span", {
        ...{ [rT]: t },
        children: (0, a.jsx)(eR.$, {
            variant: "primary",
            size: "sm",
            loading: n.publishing && !n.showsProgress,
            text: n.label,
            onClick: () => rD(t),
        }),
    });
}
function uR(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, tS.Ay)(t);
    return null != r && uf(r, l)
        ? (0, a.jsx)(ud, {
              children: (0, a.jsxs)(tR.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(uP, { projectId: t, publish: r }),
                      null != n ? (0, a.jsx)(u_, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var uT = n(303345),
    uL = n(44255),
    u$ = n(416473),
    uD = n(289830);
function uq(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, o.bG)(
                    [z.Ay],
                    () => {
                        let t = z.Ay.getProject(e);
                        return null != t && (0, z.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                c = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, u$.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof uT.A ? e.message : E.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(S.default.orZDqY, { time: (0, uL.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, uL.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(aW, {
        title: E.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: uD.r,
            children: [
                (0, a.jsxs)("div", {
                    className: uD.z,
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
                    ? (0, a.jsx)(eR.$, {
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
var uO = n(989271);
function uz(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(C.D, {
        className: h()(uO.nM, { [uO.f1]: s, [uO.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: uO.jo,
                children: [
                    n
                        ? (0, a.jsx)(nG.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: uO.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: uO.G9,
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
function uF(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(aW, {
        title: E.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                uz,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var uU = n(530557),
    uG = n(872162),
    uB = n(202723);
function uK(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tT.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: uU.R })), [r.fields]),
        d = (0, i9.bB)(l, s),
        m = h()(uB.Lo, { [uB.jY]: d });
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
                        (0, a.jsx)(uG.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: uB.Lo,
                      children: (0, a.jsx)(uG.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
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
                                className: uB.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: uB.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(nN.y, {
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
                    className: uB.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: E.intl.string(null != o ? S.default.O0QIqj : S.default.HCQvpO),
                        }),
                        (0, a.jsx)(su.A, {
                            text: null != r.note && "" !== r.note ? r.note : E.intl.string(S.default.MPGSHL),
                            variant: "text-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(uG.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: uB.sq,
                            children: (0, a.jsx)(eR.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: E.intl.string(S.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var uH = n(919790),
    uV = n(908492),
    uW = n(971824),
    uX = n(162052),
    uZ = n(165648);
function uY(e) {
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
        x = i.useMemo(() => (0, aO.Jf)(n, l), [n, l]),
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
            className: a4.pj,
            "data-live": !1,
            children: (0, a.jsx)(aB.A, {
                glyph: (0, a.jsx)(sx.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, aO.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = sC(k.map((e) => e.taskId)),
        N = !p && (l || k.some((e) => "running" === e.task.status)),
        C = s_(k);
    return (0, a.jsxs)("ol", {
        className: a4.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(aU.Ay, {
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
                let l = null != e.task.helperMark ? sN(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          sP,
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
            (0, a.jsx)(sB, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: a4.YO,
                      children: (0, a.jsx)(a3, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function uJ(e) {
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
            settingsAskId: g,
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
            publishScheduleProposalCurrent: P = !1,
        } = e,
        R = i.useMemo(
            () => sv({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: T, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = R,
        q = (C ? A : void 0) ?? R.attachmentsHost,
        O = $ && !C,
        z = null == u ? null : (0, a.jsx)(uH.A, { projectId: t, attachments: u }),
        F = null == z ? null : (0, a.jsx)("div", { className: a4.MT, children: z }),
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
        className: a4.ue,
        children: [
            T.length > 0 && !C
                ? (0, a.jsx)("ol", {
                      className: a4.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: a4.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: uZ.PT,
                                          children: (0, uV.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === q && e === L ? F : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(uu, { projectId: t, proposal: r, version: s, onApprove: k })
                : O
                  ? (0, a.jsxs)("div", {
                        className: h()(a4.ky, uX.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: h()(uZ.PT, a4.cW),
                                children: (0, uV.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === q ? F : null,
                            U,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: h()(a4.ky, uX.XR, { [uW.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(uK, {
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
                      className: h()(a4.ky, uX.XR),
                      children: (0, a.jsx)(sm, { projectId: t, request: p, askId: g }),
                  })
                : null,
            "standalone" !== q && ("closing" !== q || O) ? null : z,
            null != x ? (0, a.jsx)(uR, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(uF, { ideas: o, pickedIdeaIds: y, onPick: b }) : null,
            null != I ? (0, a.jsx)(sH, { proposal: I, onRestore: M }) : null,
            null != _ ? (0, a.jsx)(uq, { projectId: t, proposal: _, current: P }) : null,
            O ? null : U,
        ],
    });
}
var uQ = n(864970),
    u0 = n(146806),
    u1 = n(475358),
    u2 = n(717400),
    u3 = n(99677),
    u5 = n(655098),
    u4 = n(234320),
    u6 = n(191023);
function u7(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(t9.p, {
        name: E.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: lS.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(u6.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: lS.OY,
                    children: (0, a.jsx)(iu.PencilIcon, {
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
            className: nt.o1,
            onClick: () => {
                lk(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": E.intl.string(S.default.N852dj),
            children: (0, a.jsx)(t8.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function u8(e) {
    let { send: t } = e;
    return (0, a.jsxs)(t9.p, {
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
            "uploading" === t.status ? (0, a.jsx)(t7.y, { type: t7.t.SPINNING_CIRCLE_SIMPLE, className: nt.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(ic.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: E.intl.string(S.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var u9 = n(901173),
    ce = n(161431),
    ct = n(280450),
    cn = n(503275),
    cl = n(659280),
    cr = n(351906),
    ca = n(407653),
    ci = n(322915);
function cs(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([cr.A], () => cr.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      cl.Ay.User,
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
                      cl.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(ca.A, { projectId: n, file: e.file, className: ci.Vk }),
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
    return (0, a.jsx)(cl.Ay, {
        id: t,
        className: ci.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(co, { titleId: c, title: E.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                p.length > 0
                    ? (0, a.jsx)(co, { titleId: d, title: E.intl.string(S.default.zA5KLM), children: p })
                    : null,
            ],
        }),
    });
}
function co(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: ci.Gf, children: n }),
            l,
        ],
    });
}
var cu = n(719442),
    cc = n(355622),
    cd = n(408018),
    cm = n(186306),
    cf = n(323350),
    ch = n(35277),
    cp = n(820066),
    cg = n(683167),
    cx = n(267102),
    cv = n(259691);
let cj = (0, of.createChannelRecord)({ id: "1", type: D.rbe.DM });
function cb(e) {
    let t = cp.VW.end(e, []);
    return { anchor: t, focus: t };
}
function cy(e) {
    return (0, cf.WO)(cp.VW.richValue(e), { mode: "raw" });
}
function ck(e, t) {
    ((e.children = (0, cd.x7)(t)), (e.selection = cb(e)), e.onChange());
}
function cw(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(sh.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(cv.A, { attachmentId: r }), n] });
}
var cN = n(497437);
let cC = "text-md/normal",
    cA = null;
function cS(e) {
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
                frontFrom: 1e3 * (0, u0._R)(m),
                frontTo: 1e3 * (0, u0._R)(h),
                backFrom: 1e3 * (0, u0.T)(m),
                backTo: 1e3 * (0, u0.T)(h),
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
        M = (0, o.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        _ = t === E.intl.string(S.default.Zc7gML),
        P = r === t && _;
    function R(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: h()(cN.VT, { [cN.qk]: l }),
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
            children: (0, a.jsx)(u1.e, { shortcut: "tab", className: cN.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(uQ.o, {
                text: t,
                variant: cC,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: h()(cN.xM, { [cN.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            R(cN.IS, n || (!M && "out" === k), u),
            (0, a.jsx)("span", {
                ref: c,
                className: cN.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: cC, tag: "span", children: t }),
            }),
            P
                ? (0, a.jsxs)("span", {
                      className: cN.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: cC, tag: "span", className: cN.xM, children: t }),
                          R(cN.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let cE = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                running: r,
                restoring: s = !1,
                onSend: u,
                onInterrupt: c,
                onUploadFile: d,
                onApprove: m,
                onImport: f,
                onSendToOtherProjects: p,
                suggestion: g,
                questionOpen: x = !1,
                hasPendingContext: v = !1,
                onDraftHasTextChange: j,
                modelSettings: b,
                onModelSettingsChange: y,
            } = e,
            k = n && !l,
            w = (function (e) {
                let t = i.useContext(cx.Ay),
                    [n] = i.useState(() => {
                        let n = (0, cu.ie)();
                        return (
                            (n.children = (0, cd.x7)(e)),
                            (n.selection = cb(n)),
                            (0, cg.a)({
                                editor: n,
                                chatInputType: cc.oU.GENERIC_RICH_TEXTAREA,
                                channel: cj,
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
                                    for (let [t, l] of cp.VW.nodes(e, { at: [], match: cp.l5.isText }))
                                        for (let e of t.text.matchAll(sh.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        cm.o.withMergedEntry(e, () =>
                                            cp.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    ch.b.textToVoid(
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
            })(en.getDraft(t)),
            [C, A] = i.useState(() => cy(w)),
            I = i.useRef(C),
            [M, P] = i.useState(null),
            R = i.useCallback(() => {
                let e = cy(w);
                (e !== I.current && ((I.current = e), V(t, e), A(e)),
                    P(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !cp.ZF.isCollapsed(t)) return null;
                            let [n] = cp.VW.node(e, t.anchor.path);
                            return cp.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(w),
                    ));
            }, [w, t]),
            T = i.useCallback((e) => ck(w, e), [w]),
            L = "" !== C.trim();
        i.useEffect(() => j?.(L), [L, j]);
        let $ = i.useRef(t);
        i.useLayoutEffect(() => {
            $.current !== t && (($.current = t), ck(w, en.getDraft(t)));
        }, [w, t]);
        let q = (0, o.bG)([eT.Ay], () => eT.Ay.isSubmitButtonEnabled),
            [O, F] = i.useState(!1);
        i.useEffect(() => {
            r || F(!1);
        }, [r]);
        let U = i.useRef(null),
            {
                drafts: G,
                addFiles: B,
                pasteFiles: K,
                removeDraft: H,
                settled: X,
                takeRefs: Z,
            } = nr({ projectId: t, surface: "chat", onUploadFile: d }),
            Y = lj.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && lg(n);
            }),
            J = "" !== C.trim() || G.length > 0 || v || Y,
            Q = k && J && X,
            [ee, et] = i.useState(null);
        i.useEffect(() => {
            if (null == ee) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => et(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [ee]);
        let el = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: c } =
                        ((t = (0, o.bG)([z.Ay], () => z.Ay.getProject(e), [e])),
                        (n = t?.id),
                        (l = t?.owner_user_id),
                        (r = (0, o.yK)(
                            [W.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              W.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, cn.Y_)(l), r.forEach(cn.Y_));
                        }, [l, r]),
                        (a = (0, o.bG)([ig.default], () => (null == l ? null : ig.default.getUser(l)), [l])),
                        (s = (0, o.yK)(
                            [ig.default],
                            () => r.map((e) => ig.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    d = (0, o.bG)([ct.default], () => ct.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...c].filter((e) => e.id !== d && !e.bot),
                    [u, c, d],
                );
            })(t),
            er = (0, ce.rU)(t),
            [ei, es] = i.useState(null),
            [eo, eu] = i.useState(0),
            ec = i.useMemo(() => (null != M && k ? (0, u9.OG)(M, M.length) : null), [M, k]),
            ed = ec?.start ?? null;
        i.useEffect(() => {
            null == ed ? es(null) : (0, ce.IP)(t);
        }, [ed, t]);
        let em = ed === ei ? null : ec,
            ef = i.useMemo(() => (null == em ? [] : (0, u9.l$)(el, er, em.text)), [em, el, er]),
            eh = em?.text;
        i.useEffect(() => eu(0), [eh]);
        let ep = ef.length > 0,
            eg = Math.min(eo, Math.max(0, ef.length - 1)),
            ex = i.useId(),
            ev = i.useCallback(
                (e) => {
                    let t = ef[e];
                    null != em &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (ch.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                ch.b.insertText(e, `${n} `));
                        })(w, em.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ef, em, w],
            ),
            ej = i.useCallback(() => {
                if (!Q) return;
                let e = Z(),
                    n = Y
                        ? (function (e) {
                              let t = ly(e);
                              if (null == t || !lg(t)) return null;
                              let n = t.history.present,
                                  l = aI(e);
                              return (
                                  lk(e, (e) => ({ ...e, history: ls, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, _.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (aC.set(i, s),
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
                                              capture: (t) => (0 === t ? l : aI(e)),
                                              composite: (e) => aw(e, n),
                                              upload: (t) =>
                                                  (0, ea.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, ea.n6)(e, t.id),
                                              send: (n) => (0, _.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      aS(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (aC.delete(i),
                                                          window.setTimeout(() => {
                                                              (aS(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                u(C, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == cA && (cA = document.createElement("canvas").getContext("2d"));
                    let i = cA;
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
                })(cM(eA.current), eq.current, (0, u9.Lj)(C));
                ("" !== l && et(l), T(""), es(null));
            }, [Q, Y, t, C, u, Z, T]),
            eb = i.useCallback(
                (e) => {
                    (e.preventDefault(), ej());
                },
                [ej],
            ),
            ey = i.useCallback(() => {
                null == c || O || (F(!0), c());
            }, [c, O]),
            ek = null == g || "" !== C || !k || s || v ? null : g,
            ew = i.useCallback(
                (e) => {
                    if (ep && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ef.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eu((eg + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ev(eg));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), es(em?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && r && null != c && !O) {
                        (e.preventDefault(), e.stopPropagation(), ey());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ek) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), T(ek));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != m && (e.preventDefault(), m());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ej());
                },
                [ej, m, r, c, O, ey, ek, T, ep, ef.length, eg, ev, em],
            ),
            eN = i.useCallback(
                (e) => {
                    k && K(e);
                },
                [k, K],
            );
        (0, u4.Vo)({
            event: D.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eN(t);
            },
        });
        let eC = i.useCallback(
                (e) => {
                    (B(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [B],
            ),
            eA = i.useRef(null),
            eS = i.useRef(null),
            eE = i.useCallback(() => {
                let e = I.current;
                p?.((0, u9.Lj)(e), () => {
                    I.current === e && T("");
                });
            }, [p, T]),
            eI = i.useCallback((e) => {
                let t = U.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [eM, e_] = i.useState(0),
            [eP, eR] = i.useState(!1);
        i.useEffect(() => {
            if (0 === C.length) return void eR(!1);
            let e = cM(eA.current);
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
            eR(!0);
            let t = setTimeout(() => eR(!1), cI);
            return () => clearTimeout(t);
        }, [C]);
        let eL = i.useMemo(() => ({ "--custom-glow-x": `${eM}px` }), [eM]),
            e$ = eP ? ` ${cN.EB}` : "",
            eD = s
                ? E.intl.string(S.default.qqlUiW)
                : l
                  ? E.intl.string(S.default.GcFRaY)
                  : k
                    ? v
                        ? E.intl.string(S.default.knUjL3)
                        : x
                          ? E.intl.string(S.default.IevBEw)
                          : E.intl.string(r ? S.default["0BJa/0"] : S.default.TEeU7z)
                    : E.intl.string(S.default.zZ9NgM),
            eq = i.useRef(0),
            eO = i.useRef(null),
            ez = i.useCallback((e) => {
                if ((eO.current?.disconnect(), null == e)) return;
                eq.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eq.current = e.clientWidth;
                });
                (t.observe(e), (eO.current = t));
            }, []),
            eF = i.useId(),
            eU = i.useId(),
            eG = null != ek,
            eB = ee ?? ek ?? eD,
            eK = "" === C && "" !== eB;
        return (0, a.jsxs)("form", {
            onSubmit: eb,
            className: cN.DA,
            children: [
                ep
                    ? (0, a.jsx)(cs, {
                          id: ex,
                          projectId: t,
                          suggestions: ef,
                          selectedIndex: eg,
                          onHover: eu,
                          onSelect: ev,
                      })
                    : null,
                G.length > 0 || Y
                    ? (0, a.jsxs)("div", {
                          className: cN.lN,
                          children: [
                              G.map((e) => (0, a.jsx)(na, { draft: e, onRemove: H }, e.localId)),
                              Y ? (0, a.jsx)(u7, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${cN.wg} ${cN.LP}${e$}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${cN.wg} ${cN.L3}${e$}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: cN.VA,
                    ref: eA,
                    children: [
                        (0, a.jsx)("input", {
                            ref: U,
                            type: "file",
                            multiple: !0,
                            onChange: eC,
                            className: cN.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(eX.Y, {
                            targetElementRef: eS,
                            position: "top",
                            align: "left",
                            animation: eX.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(eZ.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(eY.rX, {
                                        children: [
                                            t6.map((e) =>
                                                (0, a.jsx)(
                                                    eY.Dr,
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
                                            null != f
                                                ? (0, a.jsx)(eY.Dr, {
                                                      id: "import-project",
                                                      label: E.intl.string(S.default["p/k5i7"]),
                                                      iconLeft: u2.q,
                                                      leadingAccessory: { type: "icon", icon: u2.q },
                                                      action: f,
                                                  })
                                                : null,
                                            null != p
                                                ? (0, a.jsx)(eY.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: E.intl.string(S.default["5HmLrK"]),
                                                      iconLeft: u3.t,
                                                      leadingAccessory: { type: "icon", icon: u3.t },
                                                      action: eE,
                                                  })
                                                : null,
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) => {
                                let { isShown: n } = t;
                                return (0, a.jsx)("button", {
                                    ...e,
                                    ref: eS,
                                    type: "button",
                                    className: `${cN.Y0} ${cN.nu}`,
                                    disabled: !k,
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": n,
                                    children: (0, a.jsx)(t0.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: cN.Qu,
                                    }),
                                });
                            },
                        }),
                        eK
                            ? (0, a.jsx)("div", {
                                  ref: ez,
                                  className: cN.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(cS, { text: eB, offering: eG && null == ee, typed: null != ee }),
                              })
                            : null,
                        (0, a.jsx)(aH.A, { id: eU, children: E.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(sh.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(u5.A, {
                                editor: w,
                                containerClassName: h()(cN.sq, nj.dv),
                                className: cN.jp,
                                readOnly: !k,
                                canFocus: k,
                                onChange: R,
                                onBlur: () => P(null),
                                onKeyDown: ew,
                                onPaste: eN,
                                renderExtraElement: cw,
                                "aria-labelledby": eU,
                                "aria-describedby": eK ? eF : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ep,
                                "aria-controls": ep ? ex : void 0,
                                "aria-activedescendant": ep ? ((0, cl.aI)(eg) ?? void 0) : void 0,
                            }),
                        }),
                        eK ? (0, a.jsx)(aH.A, { id: eF, children: eD }) : null,
                        (0, a.jsx)("div", {
                            className: cN.Sz,
                            children:
                                r && null != c
                                    ? (0, a.jsx)(N.m, {
                                          text: E.intl.string(S.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${cN.Y0} ${cN.$E}`,
                                              disabled: O,
                                              onClick: ey,
                                              "aria-label": E.intl.string(S.default.wiguT0),
                                              children: (0, a.jsx)(sx.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : b?.tierSettings != null && null != y
                                      ? (0, a.jsx)(nx, {
                                            settings: b.tierSettings,
                                            tiers: b.tiers,
                                            choices: b.choices,
                                            disabled: !k,
                                            onChange: y,
                                            className: `${cN.Y0} ${cN.$E}`,
                                            icon: (0, a.jsx)(t1.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        q
                            ? (0, a.jsxs)("div", {
                                  className: cN.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: cN.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: cN.rt,
                                          disabled: !Q,
                                          "aria-label": E.intl.string(S.default.rxW2cl),
                                          children: (0, a.jsx)(t2.SendMessageIcon, {
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
    cI = 1500;
function cM(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var c_ = n(709753),
    cP = n(540338),
    cR = n(986109);
let cT = i.createContext(null);
function cL(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(cT),
        [d, m] = i.useState(() => eT.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: h()(cR.xk, { [cR.g5]: d, [cR.Qo]: s, [cR.q3]: o }),
        children: n,
    });
}
let c$ = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n, justRemixed: l } = e;
            return (null != t && n) || l ? "card" : null;
        },
        dismissal: "app",
    },
    cD = new Map();
function cq(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function cO(e, t) {
    return null != e && e > 0 && e < t;
}
let cz = "ideas",
    cF = "live_behind",
    cU = "conjureTipDismissals",
    cG = new Set(),
    cB = new Set(),
    cK = 0;
function cH() {
    let e = U.w.get(cU);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function cV(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return cG.has(((n = e.id), `${t}:${n}`));
        case "app":
            return cH().app[t]?.includes(e.id) === !0;
        case "forever":
            return cH().forever.includes(e.id);
    }
}
function cW(e) {
    return (cB.add(e), () => cB.delete(e));
}
let cX = [12e4, 6e4];
var cZ = n(292771);
function cY(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
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
            className: cZ.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: h()(cZ.qd, e.leaving ? cZ.dv : cZ.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var cJ = n(443865),
    cQ = n(247171);
function c0(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: h()(cQ.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: h()(cQ.gutter, cQ[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: cQ.content, children: i }),
        ],
    });
}
var c1 = n(716502);
function c2(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(c0, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: c1.Nr,
        children: (0, a.jsxs)("section", {
            className: c1.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: c1.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tv.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eW.P,
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
function c3(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: c1.DD,
        children: t,
    });
}
function c5(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: c1.rf,
        children: t,
    });
}
function c4(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: c1.o1, children: t });
}
let c6 = {
    ...c$,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(c2, {
            icon: cJ.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(c3, { children: E.intl.string(S.default.OJlbhX) }),
                (0, a.jsx)(c5, { children: E.intl.string(S.default["3vJBni"]) }),
                (0, a.jsx)(c4, {
                    children: (0, a.jsx)(eR.$, {
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
var c7 = n(830205);
function c8(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(c0, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: c7.aK,
        children: (0, a.jsxs)("div", {
            className: c7.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: c7.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: c7.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tv.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: eW.P,
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
var c9 = n(95635);
let de = [
    {
        id: cF,
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
                (null != t.publishCta && uf(n, t.publishCta)) ||
                cO(e.messagesSinceShown(cF), 10)
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
                ? (0, a.jsx)(c8, {
                      icon: c9.UploadIcon,
                      onDismiss: r,
                      children: (0, a.jsx)("span", {
                          ...{ [rT]: n },
                          children: E.intl.format(S.default.fWfeZ8, { onPublish: () => rD(n) }),
                      }),
                  })
                : null;
        },
    },
    c6,
    {
        id: cz,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(c$) ||
                0 === e.messagesSinceShown(c$.id) ||
                cO(e.messagesSinceShown(cz), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(c8, {
                icon: cJ.LightbulbIcon,
                onDismiss: l,
                children: E.intl.format(S.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var dt = n(817921);
function dn(e) {
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
                    ((s = (0, tS.Ay)(t)),
                    (u = (0, o.bG)([ig.default], () => ig.default.getCurrentUser()?.id)),
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
                        cX,
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
                                        if ((0, az.BL)(n)) return n;
                                        if (!(0, az.B0)(e, t)) break;
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
                        publishedSinceLastMessage: null != p && 0 === cq(n, p, u),
                        messagesSinceShown: (e) => {
                            let l = cD.get(`${t}:${e}`);
                            return null != l ? cq(n, l, u) : null;
                        },
                        isDismissed: (e) => cV(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(cW, () => cK);
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
                })(e, g, (e) => cV(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== g.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                cD.set(`${e}:${t}`, n);
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
                                          if (!(null == e.dismissal || cV(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  cG.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = cH();
                                                  U.w.set(
                                                      cU,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (cK++, cB.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(de, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(cL, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: dt.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(cY, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var dl = n(52133),
    dr = n(732159),
    da = n(888366),
    di = n(862026),
    ds = n(291192);
function du(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, di.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: ds.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: ds.Sp,
                children: [
                    (0, a.jsx)("span", { className: ds.q3 }),
                    (0, a.jsxs)("span", {
                        className: ds.g8,
                        children: [
                            (0, a.jsx)(da.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: ds.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ds.nM,
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
                                          (0, a.jsx)(ic.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tT.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(dr.u, {
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
function dc(e) {
    return (0, o.bG)([z.Ay, tO.A], () => {
        let t = z.Ay.getProject(e);
        return null == t ? "" : (tO.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var dd = n(951465),
    dm = n(369455);
function df(e) {
    let { projectId: t, notice: n } = e,
        l = dc(t),
        r = (0, o.bG)([z.Ay, d.A], () => {
            let e = z.Ay.getProject(t);
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
            n.update && null != n.published_revision ? (0, a.jsx)(dh, { projectId: t, notice: n }) : null,
        ],
    });
}
function dh(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tS.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [rd.A, z.Ay],
                    () => {
                        let r = rd.A.getPublishStatus(e),
                            a = z.Ay.getProject(e);
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
                                (0, z.jf)(a),
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
                                        className: dm.Z,
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
                                        r = z.Ay.getProject(e),
                                        a = null == r ? null : (0, tS.KL)(r, l);
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
                                null != e && (0, dd.A)(e);
                            },
                        }),
              ],
          });
}
var dp = n(940874),
    dg = n(505527),
    dx = n(930390),
    dv = n(521981),
    dj = n(491182),
    db = n(438729),
    dy = n(622868),
    dk = n(448368),
    dw = n(837528),
    dN = n(470964),
    dC = n(715628),
    dA = n(752636),
    dS = n(9842),
    dE = n(589022),
    dI = n(994500),
    dM = n(967198);
let d_ = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function dP(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function dR(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function dT(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = dR(e, t),
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
    if (dP(r) && dP(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && dP(dR(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function dL(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
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
                      for (; a > 0 && dT(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && d_.has(e.charAt(l - 1));) l--;
                                    return d_.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && dT(t, o);) o++;
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
var d$ = n(624479),
    dD = n(890377),
    dq = n(180227);
function dO(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: h()(dq.QE, { [dq.Rn]: t }),
              children: (0, a.jsx)(oU.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          oU.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function dz(e) {
    return tk.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: d$.CopyIcon, onClick: () => (0, tk.C)(e) }]
        : [];
}
function dF(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(S.default.CXtLD2),
                          tooltip: E.intl.string(S.default.DOb1HM),
                          icon: dD.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(S.default.urZwpN),
                          icon: eW.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(dO, { groupStart: n, actions: [...r, ...dz(t)] });
}
function dU(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(S.default.H8Jfhu), icon: r9.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: nK.BugIcon, onClick: r }];
    return (0, a.jsx)(dO, { groupStart: n, actions: [...i, ...dz(t), ...s] });
}
let dG = (0, of.createChannelRecord)({ id: "conjure-builder", type: D.rbe.DM }),
    dB = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function dK(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: h()(dq.Yq, { [dq.x1]: t }), children: e });
}
function dH(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let dV = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function dW(e, t, n) {
    let { content: l } = (0, dN.A)(e, dV),
        r = i.useMemo(() => ((0, sh.aW)(e.content) ? (0, dv.z2)(uV.U, e, dV).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: dG, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(db.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, dC.A)(s, r);
}
function dX(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, dw.m)(e, dG, t.usernameProfile, l),
        u = (0, dw.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([dM.A], () => dM.A.getGuildId()),
        d = (0, o.bG)([ig.default], () => ig.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = ig.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(dE.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function dZ(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, sh.aW)(n.content)
                          ? (0, dv.z2)(uV.U, n, e).content
                          : (0, dv.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: dq.GV,
                              children: [
                                  (0, a.jsx)(nB.x, {
                                      className: dq.Rj,
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
            [dI.A],
            () => ({
                isReplyAuthorBlocked: dI.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: dI.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, oz.X4)(n),
        m = (0, oz.X4)(t),
        f = dX(n);
    return (0, a.jsx)(dk.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: dG,
        referencedMessage: { state: dS.a.LOADED, message: n },
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
function dY(e) {
    let { message: t, author: n } = e,
        l = dX(t);
    return (0, a.jsx)(dy.Ay, {
        message: t,
        channel: dG,
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
function dJ(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, cn.vm)(l),
        c = i.useMemo(() => (0, oz.FT)(u, null), [u]),
        d = i.useMemo(() => n5(t), [t]),
        m = d?.body ?? t,
        f = (0, u9.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, om.Ay)({ channelId: dG.id, content: m, author: u });
            return (0, od.rh)({ ...e, timestamp: dH(n, e.timestamp), state: D.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              dQ,
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
function dQ(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = dW(t, l);
    return (0, a.jsx)(dj.A, {
        className: dq.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(dY, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: dq.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: dq.GV,
                              children: [
                                  (0, a.jsx)(nB.x, {
                                      className: dq.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: dq.WO, children: u }),
                      ],
                  }),
        childrenAccessories: dK(i, "" !== l),
        childrenButtons: (0, a.jsx)(dF, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function d0(e) {
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
        { text: m, revealing: f } = dL(t, { streaming: (0, o.bG)([t3.A], () => c && t3.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, oz.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, cn.vm)(g),
        v = i.useMemo(() => (null == r ? null : n5(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, om.Ay)({ channelId: dG.id, content: v?.body ?? r.content, author: x });
            return (0, od.rh)({ ...e, id: r.id, timestamp: dH(r.createdAt, e.timestamp), state: D.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: dG.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, om.Ay)({ channelId: dG.id, content: "", author: dB })),
        k = i.useMemo(
            () =>
                (0, od.rh)({
                    ...y,
                    timestamp: dH(n, y.timestamp),
                    state: D.cmJ.SENT,
                    ...(null != b ? { type: D.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        N = i.useMemo(
            () => (0, dA.A)({ message: k, channel: dG, author: p, guildId: void 0, isGroupStart: u }),
            [k, p, u],
        ),
        C = dW(w, m, dq.OS);
    return (0, a.jsxs)("div", {
        className: dq.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(dj.A, {
                className: dq.yE,
                author: p,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(dZ, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: dK(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u ? (0, a.jsx)("img", { className: dq.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var d1 = n(981879);
function d2(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, od.rh)(
                    { ...(0, om.Ay)({ channelId: dG.id, content: "" }), id: `conjure:${t}`, state: D.cmJ.SENT },
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
                (K.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: dG.id,
                    messageId: l.id,
                    users: [dB],
                    emoji: e,
                    reactionType: dg.v.NORMAL,
                }),
                    K.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: dG.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: dg.v.NORMAL,
                    }));
            }
            return (
                t(),
                K.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    K.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: d1.H,
            children: (0, a.jsx)(dx.A, {
                message: l,
                channel: dG,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
n(775443);
var d3 = n(616e3),
    d5 = n(155899);
function d4(e) {
    let { onSelect: t, onClose: n = ts.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(eZ.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eY.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eY.Dr, {
                          id: "restore-version",
                          label: E.intl.string(S.default.H8Jfhu),
                          icon: r9.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eY.Dr, { id: "view-trace", label: "View Trace", icon: nK.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function d6(e) {
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
        j = null != v && null != g ? () => d7(v, g) : void 0,
        b =
            ((t =
                lU() && "assistant" === x.role && (0, az.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [d3.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : d3.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((lO = { projectId: e, traceId: t }), [...lq])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(cL, {
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
                          void (0, ts.jA)(t, (e) => (0, a.jsx)(d4, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(d0, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(dU, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(uJ, {
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
                turnId: (0, az.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: p,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != w && null != g && f
                        ? () =>
                              d7(
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
function d7(e, t) {
    (0, d5.F)({ onConfirm: () => t(e) });
}
var d8 = n(288539);
function d9(e, t, n) {
    return (0, a.jsx)(d8.A, { userId: e, content: `@${t}` }, n);
}
function me(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, cn.Y_)(l);
            }, [l]);
            let r = (0, o.bG)([ig.default], () => (null == l ? null : ig.default.getUser(l)), [l]),
                a = (0, op.tx)(r),
                s = dc(e),
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
        })(n, l, d9),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([tE.A], () => null != t && t.length > 0 && st({ keys: t }, tE.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: E.intl.string(S.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(sm, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let mt = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    aA.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, sh.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(cL, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dJ, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(uH.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(u8, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(d2, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, dp.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(cL, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(d0, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(uH.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(cL, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uY, {
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
                    return (0, a.jsx)(cL, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(d0, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(df, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(cL, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(d0, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(me, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(cL, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(du, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(cL, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uY, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(cL, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(uY, {
                            projectId: l,
                            steps: mn,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(d6, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, dl.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, dl.A)(e.row, t.row, ["message"]) &&
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
                (0, dl.A)(e.replyTo, t.replyTo) &&
                (0, dl.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    mn = [],
    ml = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    mr = new WeakMap();
function ma(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function mi(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let ms = i.memo(function (e) {
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
        R = (0, o.bG)([rd.A], () => rd.A.getPublishStatus(t)),
        T = (0, o.bG)([ig.default], () => ig.default.getCurrentUser()?.id),
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
                                        let t = (0, aO.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = mr.get(r);
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
                        let a = !(0, az.BL)(e),
                            i = sv({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, aO.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, aO.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && ml.test(n.prose.content)) m = !0;
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
                                        turnActive: aF(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = ml.test(e.content ?? "");
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
                    (mr.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return um(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, R)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = uh.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), uh.set(t, n)), n);
                      })),
                m,
            );
        }, [n, R, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, q] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return ma(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : mi(e, t.endKey, t.end - 1) + 1,
                a = mi(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), ma(e, a, r));
        })($, D, x),
        z = i.useRef(O),
        F = i.useRef($),
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
        V = i.useCallback(() => {
            let e = p.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), ma(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), ma(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? ma(e, i, t.end) : null;
            })(F.current, z.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: g.current,
            });
            "older" === n ? (0, _.loadOlderHistory)(t) : null != n && q(n);
        }, [p, g, t]);
    i.useImperativeHandle(
        b,
        () => ({
            handleScroll() {
                (H(),
                    q((e) => {
                        let t = z.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    V());
            },
            recordAnchor: H,
            showLatest(e) {
                ((B.current = e ?? null), q(null));
            },
        }),
        [H, V],
    );
    let W = i.useRef(null),
        X = i.useCallback(
            (e) => {
                var n;
                let l;
                W.current = null;
                let r = k.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), q(z.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), P(e));
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
                    q(((n = F.current), ma(n, (l = Math.max(0, a - 30)), l + 60))));
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
                    null != l && l !== e && ((e = l), g.current ? p.current?.scrollToBottom() : H());
                });
            return (t.observe(w), () => t.disconnect());
        }, [w, H, p, g]));
    let Z = null == O.endKey;
    (i.useEffect(() => y?.(Z), [Z, y]),
        i.useLayoutEffect(() => {
            ((z.current = O), (F.current = $), (U.current = L));
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
                ((B.current = null), l?.(), H(), V());
            }
            K.current = new Set($);
        }, [L, $, O.start, O.end, p, g, H, V]));
    let Y = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, az.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, az.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        el = (0, o.bG)([tE.A], () => tE.A.getSettings(t)?.secrets, [t]),
        er = (0, c_.WT)(t),
        ea = i.useMemo(() => (0, i9.Mv)(n, el), [n, el]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: h()(cR.x7, cR.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: cR.Ub, children: (0, a.jsx)(t7.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: cR.x7,
            children: (0, a.jsx)(cL, { role: "assistant", children: (0, a.jsx)(d0, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(cT.Provider, {
        value: K,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: cR.x7,
            children: [
                L.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            mt,
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
                        mt,
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
                              cL,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(d0, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(cP.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && Z
                    ? (0, a.jsx)(cL, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(d0, {
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
                Z ? (0, a.jsx)(dn, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var mo = n(731084),
    mu = n(823376),
    mc = n(187447);
function md(e) {
    let { activity: t, id: n } = e,
        l = (0, aq.j)(),
        { text: r, revealing: s } = dL(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: mc.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(a$.Ch, {
                ref: o,
                className: mc.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: h()(uZ.PT, mc.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: oy.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var mm = n(53659);
function mf(e) {
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
        b = (0, mo.xu)({
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
        k = b === mo.kx["0"],
        [w, N] = i.useState(m ?? y),
        A = (0, aq.j)();
    (l || (0, mo.E4)(y, w) || (!A && !k)) && w !== y && N(y);
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
        ((P.current = k), !k && (0, mo.E8)(_.current) && N(I.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                P.current
                    ? ((R.current = (0, mo.E8)(_.current) ? R.current + 1 : 0), N((0, mo.Ov)(R.current)))
                    : I.current !== _.current
                      ? N(I.current)
                      : M.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, mo.FZ)),
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
        q = i.useCallback(() => j(null), []);
    return (0, a.jsx)(eX.Y, {
        targetElementRef: p,
        position: "top",
        align: "left",
        shouldShow: $,
        onRequestClose: q,
        renderPopout: () => (0, a.jsx)(md, { id: g, activity: t }),
        children: () =>
            (0, a.jsxs)(C.D, {
                innerRef: p,
                className: h()(mm.hF, T && mm.Xd),
                "aria-label": E.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : k
                            ? mo.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": $,
                "aria-describedby": $ ? g : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: D,
                children: [
                    (0, a.jsx)("span", {
                        className: mm.bl,
                        children: (0, a.jsx)(mu.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: mm.xu,
                        "aria-hidden": !!u || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(uQ.o, {
                                  ref: M,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: mo.vg,
                                  delay: null,
                                  className: mm.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: mm.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let mh = { second: 1e3, minute: 6e4 };
function mp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = mh[t];
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
var mg = n(719374);
function mx(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = mp(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: mg.$,
        "data-conjure-turn-timer": !0,
        children: (0, sA.C7)(l),
    });
}
function mv(e) {
    let { startedAt: t } = e,
        n = mp(t, "minute");
    return (0, a.jsx)(aH.A, { role: "timer", children: (0, sA.Us)(n) });
}
var mj = n(885574),
    mb = n(242779),
    my = n(436804);
function mk(e) {
    return e.toLocaleString();
}
function mw(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: my.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: my.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [mk((0, mb.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    mk(n.input_tokens),
                    " in \xb7 ",
                    mk(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${mk(n.cache_creation_input_tokens)} cache write \xb7 ${mk(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function mN(e) {
    let { project: t } = e,
        n = (0, mb.wU)(t.compaction),
        l = (0, mb.wU)(t.classifier),
        r = (0, mb.wV)(t.orchestrator, t.codegen),
        i = (0, mb.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: my.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: my.Q$,
                children: (0, a.jsxs)("div", {
                    className: my.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [mk((0, mb.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(mw, { label: E.intl.string(S.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(mw, { label: E.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(mw, { label: E.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: my.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, mb.sj)(i) ? "\u2014" : `${Math.round(100 * (0, mb.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function mC(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eX.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(mN, { project: t }),
        children: (e) =>
            (0, a.jsx)(C.D, {
                innerRef: n,
                className: my.Y$,
                "aria-label": E.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(mj.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var mA = n(997421);
function mS(e) {
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
        p = (0, lP.Zv)(t),
        g = (0, o.bG)([rd.A], () => rd.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, mo.E8)(e) || e === E.intl.string(S.default.mKK6wB) || e === E.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == f ? null : (0, mo.uc)(f),
        k = null != s,
        w = s ?? (n ? l : void 0),
        N = n || r || k || !0 === m;
    return (0, a.jsxs)("div", {
        className: mA.jf,
        children: [
            (0, a.jsxs)("div", {
                className: mA.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || p || g
                        ? (0, a.jsx)(mf, {
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
                    null != w ? (0, a.jsx)(mx, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(mv, { startedAt: w }) : null,
            null == f || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: mA.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(mC, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, mo.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: mA.XF,
                      children: (0, mo.Db)(h),
                  }),
        ],
    });
}
let mE = ["wheel", "touchstart", "pointerdown", "keydown"];
var mI = n(608711);
let mM = [E.intl.string(S.default["9w+Chc"]), E.intl.string(S.default.WAvmdq), E.intl.string(S.default.SKsrzl)];
function m_(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        c,
        { projectId: m, restoreState: f, onRestoreVersion: h, onImportProject: p } = e,
        g = (0, o.bG)([W.A], () => W.A.getMessages(m), [m]),
        x = (0, o.bG)([_.default], () => _.default.getConnState(m), [m]),
        b = (0, o.bG)([W.A], () => W.A.getProjectUsage(m), [m]),
        y = (0, o.bG)([W.A], () => W.A.getThinkingActivity(m), [m]),
        k = (0, o.bG)([W.A], () => W.A.isCompacting(m), [m]),
        w = (0, o.bG)([W.A], () => W.A.isSaving(m), [m]),
        C = (0, o.bG)([z.Ay], () => z.Ay.getProject(m)?.install_scope_setup != null, [m]),
        A = (0, o.bG)([i0.A], () => i0.A.getModelSettings(m), [m]),
        I = i.useRef(null),
        M = i.useRef(null),
        P = i.useRef(null),
        {
            stickToBottomRef: R,
            pinned: T,
            atBottom: L,
            unpin: $,
            releasePinHold: D,
            showsLatest: q,
            showsLatestRef: O,
            handleShowsLatestChange: F,
            updatePin: G,
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
                    for (let e of mE) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of mE) t.removeEventListener(e, u);
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
        })(M),
        B = i.useCallback(() => {
            function e() {
                let e = I.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (D(), O.current ? e() : P.current?.showLatest(e));
        }, [D, O]),
        K = i.useCallback(() => {
            (G(), P.current?.handleScroll());
        }, [G]);
    (i.useLayoutEffect(() => {
        let e = I.current;
        if (null == e) return;
        let t = M.current?.getScrollerNode(),
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
                r && (R.current ? M.current?.scrollToBottom() : P.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [R]),
        i.useEffect(() => {
            (0, _.ensureConnection)(m);
        }, [m]),
        (0, sp.E1)(m, (0, aq.j)()));
    let H = li(m),
        V = (function (e) {
            let t = (0, tS.Ay)(e),
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
        X =
            ((l = (0, o.bG)([i2.A], () => i2.A.getFailure(m))),
            (r = i.useCallback(() => (0, i3.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: E.intl.format(S.default.Up6Ssw, { reason: l }),
                      retry: { text: E.intl.string(S.default["ywA+ET"]), onClick: r },
                  }),
        Z = (0, o.bG)([i2.A], () => i2.A.getSetupStartedAt(m), [m]),
        Y = i.useCallback(
            (e, t) => {
                (0, _.sendUserMessage)(m, e, t);
            },
            [m],
        ),
        J = i.useCallback(
            (e, t, n) => {
                let l = n ?? Y;
                0 === H.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => nJ(e.comment)),
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
                                      a.push(`${t + 1}. ${n1(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: H.annotations, metaComment: e, context: H.context }),
                          t,
                      ),
                      ln(m));
            },
            [H, Y, m],
        ),
        Q = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of aC)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, _.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = aC.get(e);
                            (aC.delete(e), aS(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                W.A.isThinking(m)) &&
                (0, _.interruptTurn)(m);
        }, [m]),
        ee = i.useCallback((e) => eb(m, e.implementation_prompt), [m]),
        [et, en] = (function (e) {
            let [t, n] = i.useState(() => sg(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? sg(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(m),
        el = i.useCallback(() => Y(E.intl.string(S.default["t5CN3+"])), [Y]),
        er = i.useCallback((e, t, n) => eb(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        ei = i.useCallback((e) => (0, i1.X)(m, e), [m]),
        es = i.useCallback((e) => (0, ea.vX)(m, e), [m]),
        eo = i.useCallback((e) => nl(m, "chat", Array.from(e), es), [m, es]),
        eu = i.useCallback(() => eb(m, E.intl.string(S.default.Zc7gML)), [m]),
        ec = f?.status === "restoring",
        ed = "open" === x && !ec,
        em = g[g.length - 1],
        ef = null != em && "assistant" === em.role && null != em.proposal,
        [eh, ep] = i.useState(null),
        eg = em?.clarification != null && em.clarification.id !== eh ? em.clarification : null,
        ex = i.useCallback(() => {
            null != eg && ep(eg.id);
        }, [eg]),
        [ev, ej] = i.useState(null),
        ey = (function (e) {
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
        ew = em?.appBuildRequest != null && (0, az.BL)(em) && em.appBuildRequest.id !== ev ? em.appBuildRequest : null,
        eC = ey.request ?? (null == eg ? ew : null),
        eI = null == ey.request ? eg : null,
        eM = null != eC && eC === ey.request,
        { close: e_, sent: eP } = ey,
        eT = ey.request?.id,
        eL = i.useCallback(() => {
            eM ? e_() : null != eC && ej(eC.id);
        }, [eC, eM, e_]),
        e$ = i.useCallback(
            (e) => {
                (null != eT && eP(eT),
                    (0, eV.P0)({
                        text: E.intl.formatToPlainString(S.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eT, eP],
        ),
        eD = (0, o.bG)([tE.A], () => tE.A.getSettings(m), [m]),
        [eq, eO] = i.useState(null),
        ez = si(),
        eF =
            null != em &&
            ((t = em.id),
            (s = (0, i9.Mv)(g, eD?.secrets)),
            (u = ss(g)),
            g.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, az.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !so(e.settingsRequest, eD, ez.has(e.id)))),
            )),
        eG =
            null != em &&
            "assistant" === em.role &&
            null != em.settingsRequest &&
            null == em.secretRequest &&
            (0, az.BL)(em) &&
            em.id !== eq &&
            ((n = em.settingsRequest),
            (c = n.keys ?? []),
            null != eD &&
                0 !== c.length &&
                c.every((e) => {
                    let t = eD.schema.find((t) => t.key === e);
                    return null != t && se.has(t.type);
                })) &&
            st(em.settingsRequest, eD) &&
            !eF
                ? em
                : null,
        eB = null == ey.request ? eG : null,
        eK = eB?.settingsRequest ?? null,
        eH = i.useCallback(() => {
            null != eG && eO(eG.id);
        }, [eG]),
        eX = null != eK,
        [eZ, eY] = i.useState(null),
        eJ = eI?.id ?? eC?.id ?? eB?.id ?? (C ? "scope-setup" : void 0),
        eQ = null != eg || null != eC || null != eG || C;
    i.useLayoutEffect(() => {
        let e = M.current?.getScrollerNode(),
            t = eZ?.firstElementChild;
        if (null == eZ || null == e || !(0, eU.vq)(t, HTMLElement) || null == eJ) return;
        function n() {
            R.current && M.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eZ.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eZ, eJ, M, R]);
    let e0 = (0, o.bG)([W.A], () => W.A.hasLoadedHistory(m), [m]),
        e1 = (0, o.bG)([z.Ay], () => null != z.Ay.getProject(m), [m]),
        [e2, e3] = i.useState(0);
    i.useLayoutEffect(() => {
        !(function (e, t) {
            let n = eA()[e],
                l = z.Ay.getProject(e);
            if (null == n || null == l || !W.A.hasLoadedHistory(e)) return;
            let r = W.A.getMessages(e),
                a = (0, _.optimisticMessageId)(n.nonce);
            if (!0 === n.sent) {
                let i = r.some((e) => "user" === e.role && !0 !== e.held && e.id !== a && e.content === n.message),
                    s = W.A.getHistoryLoads(e) > (eN.get(e) ?? 0);
                i
                    ? eS(e)
                    : !s ||
                      null != l.install_scope_setup ||
                      W.A.isHistoryUnavailable(e) ||
                      W.A.isThinking(e) ||
                      eE(e, n, t);
                return;
            }
            if (null != l.install_scope_setup) {
                r.some((e) => e.id === a) ||
                    (0, _.showUserMessage)(e, n.message, n.attachments, { held: !0, nonce: n.nonce });
                return;
            }
            "open" === _.default.getConnState(e) &&
                (U.w.set(ek, { ...eA(), [e]: { ...n, sent: !0 } }),
                eN.set(e, W.A.getHistoryLoads(e)),
                (0, _.sendUserMessage)(e, n.message, n.attachments, { nonce: n.nonce }) || eE(e, n, t));
        })(m, () => e3((e) => e + 1));
    }, [m, e1, e0, g, C, x]);
    let e5 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: e0,
            historyUnavailable: (0, o.bG)([W.A], () => W.A.isHistoryUnavailable(m), [m]),
            connState: x,
        }),
        e4 = "loading" === e5 && 0 === g.length,
        e6 = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return mM[e % mM.length];
        }, [m]),
        e7 = ef ? E.intl.string(S.default.Zc7gML) : "greeting" === e5 && 0 === g.length ? e6 : null,
        e8 = i.useMemo(() => {
            for (let e = g.length - 1; e >= 0; e--) {
                let t = g[e];
                if ("assistant" === t.role && !(0, az.BL)(t)) return t;
            }
        }, [g]),
        e9 = null != e8,
        te =
            null != e8
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = sf.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(e8)
                : void 0,
        tt = ef && ed ? eu : void 0,
        tn = i.useCallback(() => eb(m, E.intl.string(S.default.EMgIuY)), [m]),
        [tl, tr] = i.useState(null),
        [ta, ti] = i.useState(e9);
    (ta !== e9 && (ti(e9), e9 || tr(null)),
        i.useEffect(() => {
            if (!e9) return;
            let e = M.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? tr(null)
                        : tr(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [e9, e8?.steps, q]));
    let ts = q ? tl : "bottom",
        to = i.useMemo(() => (null != e8 ? (0, aU.b9)(e8.steps) : ""), [e8]),
        tu = i.useMemo(() => (null != e8 ? ((0, aO.lt)(e8.steps) ?? e8.todos) : void 0), [e8]),
        tc = e8?.provisionalTodo,
        td = null != e8 && aF(e8),
        tm = i.useMemo(() => {
            var e;
            return null != e8 ? ((e = e8.steps), s_((0, aO.Jf)(e, !0).tasks)) : void 0;
        }, [e8]);
    return (0, a.jsxs)("section", {
        ref: I,
        "data-conjure-chat": !0,
        className: mI.TE,
        children: [
            ed
                ? (0, a.jsx)(j.A, {
                      title: E.intl.string(S.default.gy7byi),
                      description: E.intl.string(S.default["dkv/WO"]),
                      icons: nq.ir,
                      onDrop: eo,
                  })
                : null,
            (0, a.jsx)(a7, {
                onJumpToActivity: B,
                line: to,
                placement: e9 && "top" === ts ? "top" : null,
                todos: tu,
                todosLive: td,
                provisionalTodo: tc,
                agents: tm,
            }),
            (0, a.jsxs)("div", {
                className: mI.JX,
                children: [
                    (0, a.jsx)(a$.Ch, {
                        ref: M,
                        onScroll: K,
                        scrollbarGutter: e4 ? "both-edges" : "stable",
                        className: [mI.N$, L ? null : mI.hB, eX ? mI.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(sh.Fu.Provider, {
                            value: m,
                            children: (0, a.jsx)(ms, {
                                projectId: m,
                                messages: g,
                                emptyState: e5,
                                floatingSettingsMessageId: eG?.id,
                                liveClarificationId: eI?.id,
                                onPickIdea: ed ? ee : void 0,
                                onAskForIdeas: ed ? el : void 0,
                                draftHasText: et,
                                onApprovePlan: ed ? tn : void 0,
                                onRestoreVersion: ec || e9 ? void 0 : h,
                                scrollerRef: M,
                                stickToBottomRef: R,
                                pinned: T,
                                onUnpin: $,
                                handleRef: P,
                                onShowsLatestChange: F,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: mI.NJ,
                        children: (0, a.jsx)(mS, {
                            projectId: m,
                            thinking: e9,
                            turnStartedAt: te,
                            restoring: ec,
                            remixStartedAt: Z,
                            recalling: e4,
                            thinkingActivity: y,
                            compacting: k,
                            saving: w,
                            projectUsage: b,
                            connState: x,
                        }),
                    }),
                    C
                        ? (0, a.jsx)("div", { ref: eY, className: mI.B5, children: (0, a.jsx)(i7, { projectId: m }) })
                        : null,
                    null == eI
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eY,
                              className: eX ? `${mI.B5} ${mI.J9}` : mI.B5,
                              children:
                                  null != eI.install_scope_switch
                                      ? (0, a.jsx)(
                                            i8,
                                            {
                                                projectId: m,
                                                clarification: eI,
                                                offer: eI.install_scope_switch,
                                                onKept: ex,
                                            },
                                            eI.id,
                                        )
                                      : (0, a.jsx)(
                                            iQ,
                                            {
                                                projectId: m,
                                                clarification: eI,
                                                onSubmit: ed ? er : void 0,
                                                onDismiss: ex,
                                            },
                                            eI.id,
                                        ),
                          }),
                    null == eC
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eY,
                              className: mI.B5,
                              children: (0, a.jsx)(
                                  is,
                                  { projectId: m, request: eC, canSend: ed, onDismiss: eL, onSent: eM ? e$ : void 0 },
                                  eC.id,
                              ),
                          }),
                    null == eK
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eI && null == eC ? eY : void 0,
                              className: mI.B5,
                              children: (0, a.jsx)(
                                  sm,
                                  { askId: eB?.id, projectId: m, request: eK, onDismiss: eH },
                                  eB?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: mI.Jx,
                children: [
                    (0, a.jsx)(a7, {
                        onJumpToActivity: B,
                        line: to,
                        placement: e9 && "bottom" === ts ? "bottom" : null,
                        todos: tu,
                        todosLive: td,
                        provisionalTodo: tc,
                        agents: tm,
                    }),
                    0 === H.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: mI.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(S.default["7b49dS"], {
                                          count: H.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(S.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(eR.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(S.default["/zOv9+"]),
                                      onClick: () => ln(m),
                                  }),
                              ],
                          }),
                    null == X
                        ? null
                        : (0, a.jsx)("div", {
                              className: mI.qB,
                              children: (0, a.jsx)(aD.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: X.message,
                                  action: X.retry,
                              }),
                          }),
                    null == V
                        ? null
                        : (0, a.jsxs)("div", {
                              className: mI.Db,
                              children: [
                                  (0, a.jsx)(aD.w, { type: "warning", role: "status", message: V.message }),
                                  (0, a.jsx)("div", {
                                      className: mI.jU,
                                      children: (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tv.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
                                              icon: eW.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: V.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(
                        cE,
                        {
                            projectId: m,
                            canSend: ed,
                            running: e9,
                            restoring: ec,
                            onSend: J,
                            hasPendingContext: H.annotations.length > 0,
                            onInterrupt: ed ? Q : void 0,
                            onUploadFile: es,
                            onImport: p,
                            onSendToOtherProjects: eQ ? void 0 : ey.open,
                            onApprove: tt,
                            suggestion: e7,
                            questionOpen: eQ,
                            modelSettings: A,
                            onModelSettingsChange: ei,
                            onDraftHasTextChange: en,
                            inputLocked: C,
                        },
                        e2,
                    ),
                ],
            }),
        ],
    });
}
var mP = n(761508),
    mR = n(933294),
    mT = n(207438),
    mL = n(683438);
function m$(e, t) {
    return String(e).padStart(t, "0");
}
function mD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${m$(l.getHours(), 2)}:${m$(l.getMinutes(), 2)}:${m$(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${m$(l.getMilliseconds(), 3)}` : r;
}
var mq = n(667931);
let mO = {
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
    mz = { running: "Running", ok: "Done", error: "Failed" };
function mF(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function mU(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function mG(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function mB(e) {
    return mU(e.count > 1 ? e.totalMs : e.end - e.start);
}
let mK = ["Arguments", "Result", "Usage", "Details"];
function mH(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function mV(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function mW(e) {
    let t = (0, mq.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, mq.lp)(e) ? "interrupted" : "still running";
}
function mX(e) {
    return [mD(new Date(e.started_at).toISOString()) ?? "", mG(e.spans.length), (0, mq.Sj)((0, mq.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function mZ(e) {
    let t = (0, mq.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, mq.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += mY(r, "in")),
                (l.output += mY(r, "out")),
                (l.cacheRead += mY(r, "cache_read")),
                (l.cacheWrite += mY(r, "cache_write")),
                (l.costUsd += mY(r, "cost_usd"))));
    }
    let r = mq.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function mY(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var mJ = n(738188),
    mQ = n(430993),
    m0 = n(364840),
    m1 = n(224640),
    m2 = n(20742);
let m3 = { collapsed: new Set(), revealed: new Set() };
var m5 = n(872892);
let m4 = {
    op: m5.Q,
    model: m5.i3,
    tool: m5.dH,
    setup: m5.kc,
    worktree: m5.Qx,
    sandbox: m5.QH,
    build: m5.F1,
    platform: m5.Op,
    other: m5.fv,
};
function m6(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      mG(t.calls, "model call"),
                      `${mF(t.input)} in`,
                      `${mF(t.output)} out`,
                      `${mF(t.cacheRead)} cache read`,
                      `${mF(t.cacheWrite)} cache write`,
                      mV(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: m5.M1,
        children: [
            (0, a.jsx)("div", {
                className: m5.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${m5.DJ} ${m4[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: m5.o1,
                children: mq.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${mU(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: m5.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${m5.nf} ${m4[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: mO[e] }),
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
function m7(e) {
    return `conjure-perf-trace-${e}`;
}
function m8(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: m5.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${m5.p0} ${s + o > 85 ? m5.EU : m5.jh}`,
                children: i,
            }),
        ],
    });
}
function m9(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? ns._ : l9.a,
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
        id: m7(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${m5.$y} ${r ? m5.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: m5.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(C.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: m5.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: m5.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: m5.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${m5.nf} ${m4[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: m5.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: m5.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: m5.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(mJ.WarningIcon, { size: "xs", color: "currentColor", className: m5.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(m8, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${m5.M0} ${m5.Nh}`
                    : t.running
                      ? `${m5.M0} ${m5.rF}`
                      : `${m5.M0} ${m4[t.category]}`,
                duration: mB(t),
            }),
        ],
    });
}
function fe(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: m7(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${m5.$y} ${l ? m5.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: m5.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: m5.ai,
                        children: (0, a.jsx)(ns._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: m5.U9 }),
                    (0, a.jsx)("span", { className: `${m5.nf} ${m5.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: m5.MQ,
                        children: mG(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(m8, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${m5.M0} ${m5.ab} ${m5.dL}`,
                duration: mU(t.totalMs),
            }),
        ],
    });
}
function ft(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: m5._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: m5.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${m5.nf} ${m4[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [mH("Start", `+${mU(e.start)}`), mH("Duration", mB(e))];
                      e.count > 1
                          ? t.push(
                                mH("Calls", String(e.count)),
                                mH("Longest call", mU(e.maxMs)),
                                mH("Spread over", mU(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(mH("Self time", mU(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(mH("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(mH("Notes", l.join(", "))),
                          null != e.span.error && t.push(mH("Error", e.span.error)));
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
                              s = "cost_usd" === t ? mV(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), mH(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...mK.flatMap((e) => {
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
                                            className: m5.xd,
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
                                                            className: m5.vl,
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
function fn(e) {
    let { trace: t } = e,
        n = i.useMemo(() => mZ(t), [t]);
    return (0, a.jsx)(m6, { stats: n });
}
function fl(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, mq.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? m3 : (0, mq.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, mq.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, mq.x7)(t)), l((n) => (0, mq._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, mq.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mq.IE)(t, e);
                        null != n && l((e) => (0, mq.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, mq.IE)(t, e);
                        null != n && l((e) => (0, mq.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, mq.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, mq.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, mq.hB)(t));
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
        f = (0, mq.dj)(t),
        h = i.useMemo(() => (0, mq.nF)(f), [f]),
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
                    null != t && (u(t.key), document.getElementById(m7(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(mQ.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: m5.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: mW(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: mX(t),
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
                                      children: `${mG(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(fn, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: m5.KE,
                        children: [
                            (0, a.jsx)(eR.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Time sinks",
                                onClick: n.reset,
                            }),
                            (0, a.jsx)(eR.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(eR.$, {
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
                        "aria-activedescendant": null == o ? void 0 : m7(o),
                        className: m5.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: g,
                        children: [
                            (0, a.jsxs)("div", {
                                className: m5.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: m5.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: m5.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${m5.io} ${(e / f) * 100 > 85 ? m5.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : mU(e),
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
                                          m9,
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
                                    : (0, a.jsx)(fe, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(m0.j, { children: (0, a.jsx)(ft, { node: s }) }),
        ],
    });
}
function fr(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([d3.A], () => d3.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(m1.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(m2.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(mQ.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(fl, { trace: i }),
        ],
    });
}
let fa = { running: m5.Vf, ok: m5.mo, error: m5.Sr };
function fi(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${m5.Om} ${fa[t]}`, role: "img", "aria-label": mz[t] });
}
function fs(e, t) {
    (0, tT.openModal)((n) => (0, a.jsx)(fr, { ...n, projectId: e, traceId: t }));
}
function fo(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => fs(t, n.id), [t, n.id]);
    return (0, a.jsxs)(C.D, {
        className: m5.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: m5.sU,
                children: [
                    (0, a.jsx)(fi, { status: (0, mq.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: m5._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: mW(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: mX(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function fu(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            e2(
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
    return (0, a.jsx)(eX.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eX.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(eZ.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(eY.rX, {
                    children: (0, a.jsx)(eY.Dr, {
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
            return (0, a.jsx)(tv.K, {
                ...e,
                buttonRef: l,
                icon: tj.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function fc(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([d3.A], () => d3.A.getTimingTraces(t), [t]),
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
                    let t = e.map(mZ);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: mq.BF.map((e) => ({
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
              className: m5.Ie,
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
              className: m5.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: m5.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: m5.fH,
                              children: (0, a.jsx)(mL.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(fu, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(a$.Ch, {
                      className: m5.XG,
                      children: [
                          (0, a.jsx)(m6, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: m5.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(fo, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function fd(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function fm(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function ff(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function fh(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function fp(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function fg(e) {
    return E.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let fx = ["all", "preview", "stable", "web"];
function fv(e) {
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
function fj(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: fd(e.memory_p50_bytes ?? 0),
              p999: fd(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let fb = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var fy = n(911608),
    fk = n(177427);
function fw(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fk.KE,
        children: [
            (0, a.jsx)("div", {
                className: fk.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(t7.y, { type: t7.t.PULSING_ELLIPSIS })
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
                                  children: E.intl.formatToPlainString(S.default.INVO50, { time: fh(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(eR.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function fN(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: fk.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: fk.Gf, children: t }),
            n,
        ],
    });
}
function fC(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: fk.N8,
        children: [
            (0, a.jsxs)("div", {
                className: fk.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: fk.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: fk.kS,
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
function fA(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: fk.N8,
        children: [
            (0, a.jsxs)("div", {
                className: fk.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(fy.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? fk.dh : void 0,
            }),
        ],
    });
}
function fS(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(fC, {
            label: E.intl.string(S.default.SXP7pD),
            value: E.intl.string(S.default.E5hKVi),
            hint: fv(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(fC, {
            label: E.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(S.default.AGvoMJ),
        });
    let l = fj(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(fC, { label: E.intl.string(S.default["H/X+FI"]), value: fm(n.cpu_ms) }),
            null != l && (0, a.jsx)(fC, { label: E.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function fE(e) {
    let { analytics: t } = e,
        n = E.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(fN, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: fv(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? fb[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(fN, {
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
                          fC,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(S.default["w/2voO"], { cpu: fm(t.cpu_ms) }),
                              hint: fj(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var fI = n(678708),
    fM = n(414499),
    f_ = n(714800),
    fP = n(81466),
    fR = n(424383),
    fT = n(816943),
    fL = n(268791),
    f$ = n(514042),
    fD = n(872351),
    fq = n(708988),
    fO = n(150934),
    fz = n(417270);
let fF = "Restart Agent",
    fU = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fG(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function fB(e, t) {
    return { label: e, value: null != t && "" !== t ? fh(t) : "Unknown", icon: "calendar" };
}
function fK(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function fH(e, t, n, l) {
    let [r, a] = fU[n.status];
    return { label: e, value: `${fK(n.bytes)} of ${fK(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function fV(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = fh(e.at);
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
let fW = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fX(e) {
    let t = `container ${fG(e.local)} \xb7 remote ${fG(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fW[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${ff(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${ff(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${ff(n)} Ahead, ${ff(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fZ = ["main", "wip"];
var fY = n(400154);
let fJ = {
        checkout: fI.FolderIcon,
        edit: iu.PencilIcon,
        remote: fM.h,
        commits: f_.e,
        calendar: fP.CalendarIcon,
        save: fR.L,
        objects: tt.R,
        download: fT.$,
        size: fL.$,
        file: f$.FileIcon,
    },
    fQ = {
        ok: [nN.y, w.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [mJ.WarningIcon, w.A.colors.ICON_FEEDBACK_WARNING],
        error: [t8.a, w.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [fD.z, w.A.colors.ICON_MUTED],
        behind: [fq.M, w.A.colors.ICON_MUTED],
    };
function f0(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([d3.A], () => d3.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, mT.DK)(t), [t]),
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
                    `Updated ${fh(r)}`,
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
    return (0, a.jsxs)(fN, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fY.Lj,
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
                    if (!e.running || null != e.localError) return [fV(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            fV(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : ff(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fZ.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fX))
                        : l.push(
                              { label: "Main", value: fG(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fG(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? ff(e.commits) : "Unknown", icon: "commits" },
                            fB("Oldest Commit", e.oldest),
                            fB("Newest Commit", e.newest),
                            fV(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${ff(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${ff(t.loose)} loose (${fd(t.looseBytes)}) \xb7 ${ff(t.packed)} packed in ${n} (${fd(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${ff(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${ff(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                fH(
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
                                  fH("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fJ[r],
                        [o, u] = null != i ? fQ[i] : [null, void 0];
                    return (0, a.jsx)(
                        fC,
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
function f1(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([d3.A], () => d3.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, mT.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = d3.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, mT.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                K.h.dispatch({
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
            let u = i.useCallback(() => (0, mT.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: fF,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, to.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: fY.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fY.nM,
                children: [
                    (0, a.jsx)(fO.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(eR.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: fz.RetryIcon,
                        text: fF,
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
                            return `Restarted \xb7 new instance since ${fh(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${fh(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function f2(e, t) {
    return (0, a.jsx)(fC, {
        label: e,
        value: E.intl.formatToPlainString(S.default.yHJxuP, { count: ff((0, mb.aM)(t)) }),
        hint: `${ff(t.input_tokens)} in \xb7 ${ff(t.output_tokens)} out \xb7 ${ff(t.cache_read_input_tokens)} cache read`,
    });
}
function f3(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([d3.A], () => d3.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([d3.A], () => d3.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([d3.A], () => d3.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([d3.A], () => d3.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, mT.Lj)(t), [t]),
        f = i.useCallback(() => (0, mT.Lj)(t, !0), [t]),
        h = (0, o.bG)([d3.A], () => d3.A.getSandboxRestartState(t), [t]),
        p = (0, o.bG)([W.A], () => W.A.isThinking(t), [t]),
        g = i.useCallback(() => (0, mT.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = u?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: fY.Mf,
        children: [
            (0, a.jsx)(fw, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(fN, {
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
                                  (0, a.jsx)(fC, {
                                      label: E.intl.string(S.default["9nqym2"]),
                                      value: ff((0, mb.a7)(x.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default.NCdUIh, { count: ff(x.turns) }),
                                  }),
                                  f2(E.intl.string(S.default.xtxP0e), x.orchestrator),
                                  f2(E.intl.string(S.default["9Sj3SX"]), x.codegen),
                                  f2(E.intl.string(S.default.ANCEo3), (0, mb.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(fC, {
                                          label: E.intl.string(S.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${ff(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(fN, {
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
                                  f2(E.intl.string(S.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(fC, {
                                      label: E.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, mb.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(fN, {
                title: E.intl.string(S.default.NbRk9a),
                children: [
                    null != u && null != y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(fA, {
                                      label: E.intl.string(S.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: ff,
                                  }),
                                  (0, a.jsx)(fC, {
                                      label: E.intl.string(S.default.mRbSns),
                                      value: `${ff(u.tokensBefore)} \u{2192} ${ff(u.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: ff(u.retainedMessages),
                                          time: fh(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? E.intl.formatToPlainString(S.default.GMLCNv, { ceiling: ff(y) })
                                      : E.intl.string(S.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(fC, {
                            label: E.intl.string(S.default["4BX5KK"]),
                            value: `${ff(c.projected)} / ${ff(c.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default["6ngCax"], { time: fh(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fY.Lj,
                        children: [
                            (0, a.jsx)(eR.$, {
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
                                    let t = fh(e.observedAt);
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
                                        (0, a.jsx)(eR.$, {
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
                        className: fY.Lj,
                        children: [
                            (0, a.jsx)(eR.$, {
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
                                    let t = fh(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(f1, { projectId: t }),
                ],
            }),
            (0, a.jsx)(f0, { projectId: t }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(fN, {
                    title: E.intl.string(S.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(fC, {
                                        label: E.intl.string(S.default.CLXHAs),
                                        value: fh(b.instance_since),
                                        hint: E.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(fC, { label: E.intl.string(S.default["8V8e1Z"]), value: ff(b.sockets) }),
                                    (0, a.jsx)(fC, {
                                        label: E.intl.string(S.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? E.intl.string(S.default.Wv025I)
                                            : E.intl.string(S.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(fC, {
                                            label: E.intl.string(S.default["3oUYnv"]),
                                            value: ff(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(fS, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(fN, {
                    title: E.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(fC, {
                            label: E.intl.string(S.default.IlDBN3),
                            value: ff(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(fC, {
                            label: E.intl.string(S.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, { count: ff(j.context_window_tokens) }),
                        }),
                        (0, a.jsx)(fC, {
                            label: E.intl.string(S.default.cIhN2W),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, {
                                count: ff(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(fC, {
                            label: E.intl.string(S.default["+fOn/q"]),
                            value: ff(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(fC, { label: E.intl.string(S.default.kIHga0), value: ff(j.max_build_attempts) }),
                        (0, a.jsx)(fC, { label: E.intl.string(S.default.Iw03yW), value: ff(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var f5 = n(237528),
    f4 = n(629584),
    f6 = n(531893);
function f7(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: f6.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.h1SE6R),
              }),
          });
}
function f8(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: f6.qf,
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
              className: f6.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function f9(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: f6.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var he = n(109079);
let ht = i.memo(function (e) {
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
        className: he.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: he.Mt,
                selectable: !0,
                children: mD(n.ts) ?? n.ts,
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
                className: he.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: he.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: he.Cq, children: (0, a.jsx)(f5.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: he.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(f5.v, { text: E.intl.string(S.default.TrC9c8), variant: "redLight" }),
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
                                      className: he.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": E.intl.string(S.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(l9.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(ns._, {
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
                                          className: he.dF,
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
function hn(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([mR.A], () => mR.A.getLogs(t), [t]),
        l = (0, o.bG)([mR.A], () => mR.A.getHistoryState(t, "logs")),
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
                fx.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return fg(e);
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
        className: he.$F,
        children: [
            (0, a.jsxs)("div", {
                className: he.y4,
                children: [
                    (0, a.jsx)(f4.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: he.KT,
                        children: (0, a.jsx)(mL.I, {
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
            n.length > 0 && (0, a.jsx)(f7, { state: l }),
            (0, a.jsxs)(a$.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: he.sx,
                children: [
                    (0, a.jsx)(f9, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(f8, {
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
                          : d.map((e) => (0, a.jsx)(ht, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function hl(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(fN, {
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
function hr(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(fC, {
                      label: E.intl.formatToPlainString(S.default["01ZMS4"], { env: fg(n) }),
                      value: ((t = l.connected), E.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(fC, {
                      label: E.intl.string(S.default["z1dh+F"]),
                      value: ff(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${fh(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(fC, { label: E.intl.string(S.default.Iz5GnJ), value: ff(l.guild_count) }),
                  (0, a.jsx)(fC, {
                      label: E.intl.string(S.default["7UqtNv"]),
                      value: ff(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: fh(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(fC, {
                          label: E.intl.string(S.default["x3+JXJ"]),
                          value: ff(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(fC, { label: fg(n), value: E.intl.string(S.default.lTHQss) });
}
function ha(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(fC, {
        label: fg(t),
        value: E.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: ff(n.requests),
            failures: ff(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: fh(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["7KlGT6"], { time: fh(n.since) }),
    });
}
function hi(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(fC, {
                label: E.intl.formatToPlainString(S.default["92gVTm"], { env: fg(t) }),
                value: ff(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    fC,
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
                                  ? E.intl.formatToPlainString(S.default.wxAWNv, { time: fh(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function hs(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(fC, {
        label: fg(t),
        value: E.intl.formatToPlainString(S.default.suAOj9, { calls: ff(n.calls), errors: ff(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function ho(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(fN, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(fN, {
        title: t,
        children: [
            (0, a.jsx)(fC, {
                label: E.intl.string(S.default.xtD4Zp),
                value: ff(n.requests),
                hint: E.intl.formatToPlainString(S.default["7KlGT6"], { time: fh(n.since) }),
            }),
            (0, a.jsx)(fC, { label: E.intl.string(S.default.gfRhR3), value: ff(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fA, {
                              label: E.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: fm,
                          }),
                          (0, a.jsx)(fC, {
                              label: E.intl.string(S.default.mSKImM),
                              value: fm(r),
                              hint: E.intl.formatToPlainString(S.default.JqMU05, {
                                  total: fm(n.cpu_ms_total),
                                  wall: fm(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(fC, {
                      label: E.intl.string(S.default.LEJ5r3),
                      value: E.intl.string(S.default["2Ekb2b"]),
                      hint: E.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(fC, { label: E.intl.string(S.default.xvmL1D), value: fm(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(fC, { label: E.intl.string(S.default["4sQYwH"]), value: ff(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(fC, {
                label: E.intl.string(S.default.bQenOy),
                value: ff(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(fC, { label: E.intl.string(S.default.xgpn4Y), value: fp(n.build) }),
        ],
    });
}
function hu(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(fN, {
        title: E.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(fC, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(fC, {
                                  label: E.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: fd(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: ff(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(fA, {
                                      label: E.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: fd,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function hc(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fY.Mf,
        children: [
            (0, a.jsx)(fw, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(ho, {
                            title: E.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(ho, {
                            title: E.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(hu, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(hl, {
                                title: E.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(hr, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(hl, {
                                title: E.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ha, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(hl, {
                                title: E.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(hi, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(hl, {
                                title: E.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(hs, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(fE, { analytics: t.analytics }),
                        (0, a.jsxs)(fN, {
                            title: E.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(fC, {
                                    label: E.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? fp(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(fC, {
                                    label: E.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? fp(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var hd = n(592465);
function hm(e) {
    let { projectId: t, onClose: n } = e,
        l = lU(),
        [r, s] = i.useState(() => (l && lO?.projectId === t ? "trace" : "logs")),
        u = (0, o.bG)([d3.A], () => d3.A.getStatus(t), [t]),
        c = (0, o.bG)([d3.A], () => d3.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, mT.R7)(t), (0, mT.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, _.subscribeDebugBacklog)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == lO || lO.projectId !== e) return null;
            let { traceId: t } = lO;
            return ((lO = null), t);
        })(t);
        return null != e && (fs(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        lz(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, tk.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: d3.A.getStatus(t),
                        last_turn_usage: d3.A.getLastTurnUsage(t),
                        last_compaction: d3.A.getLastCompaction(t),
                        last_compaction_decline: d3.A.getLastCompactionDecline(t),
                        timing_traces: d3.A.getTimingTraces(t),
                        logs: mR.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, eV.P0)({ text: E.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: hd.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(rY.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(rY.Ay.Icon, {
                            icon: d$.CopyIcon,
                            tooltip: E.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(rY.Ay.Icon, { icon: eW.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(rY.Ay.ChannelIcon, { icon: nK.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(rY.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: hd.rf,
                children: [
                    (0, a.jsxs)(mP.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(S.default.RvvWIh),
                        className: hd.vR,
                        children: [
                            (0, a.jsx)(mP.V.Item, { id: "logs", children: E.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(mP.V.Item, { id: "worker", children: E.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(mP.V.Item, { id: "agent", children: E.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(mP.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(hn, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(hc, { status: u, fetchState: c, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(fc, { projectId: t })
                            : (0, a.jsx)(f3, { projectId: t, status: u, fetchState: c, onRefresh: d }),
                ],
            }),
        ],
    });
}
var hf = n(365912),
    hh = n(873715);
function hp(e) {
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
let hg = Object.freeze({ x: -1, y: -1 });
function hx(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = hp(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var hv = n(192888);
function hj(e, t) {
    return (0, hv.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(hx, () => ({ status: "failed" }));
}
var hb = n(108308);
let hy = { x: 25, y: 21 };
function hk(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function hw(e, t, n, l) {
    let r = hk(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function hN(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function hC(e) {
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
function hA(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = li(u),
        m = (0, lP.Zv)(u),
        f = (0, tT.useHasAnyModalOpen)(),
        h = (0, o.bG)([ig.default], () => ig.default.getCurrentUser()),
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
        [D, q] = i.useState(null),
        [O, z] = i.useState(null),
        F = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, K] = i.useState(null),
        H = c && !m && !f;
    null == D || (H && D.projectId === u) || q(null);
    let V = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != V) return () => ev(V, "design");
    }, [V]);
    let W = r4(r, H);
    i.useEffect(() => {
        if (!H || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void k(!0);
        (b(!0), k(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, hh.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? hC(t.response) : null;
                    null == n ? k(!0) : (x(n), ll(u, { url: n.url, title: n.title, viewport: n.viewport }));
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
        if (!H || null == W || null == u) return;
        if (null == g) {
            X.current = W;
            return;
        }
        if (r5(X.current, W)) return;
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
                    (0, hh.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !Q.current) return;
                        let l = hC(e.response);
                        null != l && (x(l), ll(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = hp(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = n8(u)).active &&
                                0 !== r.size &&
                                n9(u, {
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
    }, [H, W, g, d, u, r]),
        i.useEffect(() => {
            if (!H)
                return () => {
                    (N(null), q(null), K(null), x(null));
                };
        }, [H]));
    let Z = i.useRef(null),
        Y = i.useRef(null),
        J = i.useRef(!1),
        Q = i.useRef(!1);
    i.useEffect(() => {
        ((Q.current = H), H || ((Z.current = null), (Y.current = null), (P.current = null), A(!1)));
    }, [H]);
    let ee = i.useCallback(
            function e() {
                if (J.current) return;
                let t = Z.current;
                if (null == t) return;
                Z.current = null;
                let n = r();
                null != n &&
                    ((J.current = !0),
                    hj(n, t).then((t) => {
                        if (((J.current = !1), Q.current)) {
                            if ("picked" !== t.status || hP(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = nQ(t.target);
                                (T((t) => (h_(t, e) ? t : e)),
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
        et = i.useCallback(() => {
            if (null == D) return;
            let e = !F.current;
            (z({ at: D.at, label: D.label, draft: D.draft, instant: e }), G(e), q(null));
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
            let e = setTimeout(() => z(null), hI);
            return () => clearTimeout(e);
        }, [O]));
    let en = null == g || null == W || g.viewport.width < 1 ? 1 : W.width / g.viewport.width,
        el = null != g || y,
        er = i.useMemo(() => g?.elements ?? [], [g]),
        ei = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ei.current = { rect: W, scale: en };
    }, [W, en]);
    let es = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (ev(u, "design"),
                    K(null),
                    (F.current = !1),
                    q({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nQ(e) }));
            },
            [u],
        ),
        eo = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / en, y: (e.clientY - t.top) / en }), [en]),
        eu = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = I.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = M.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(eu);
    let ec = i.useCallback(
            (e) => {
                if (null == W || null != B) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), eu(), A(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > hM || Math.abs(e.clientY - D.at.y) > hM) && (F.current = !0);
                    return;
                }
                if (!el) return void N(null);
                let t = eo(e, W);
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
                        })(er, t.x, t.y),
                        n = null != e && hP(e, W, en) ? null : e;
                    if (null != n) {
                        let e = nQ(n);
                        T((t) => (h_(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Y.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Y.current = n), (Z.current = n), ee());
            },
            [W, en, el, eo, L, er, D, B, eu, ee],
        ),
        ed = null == B ? null : d.find((e) => e.id === B.id),
        em = H && (C || D?.target.marker != null || ed?.target.marker != null);
    i.useEffect(() => {
        if (em)
            return () => {
                let e = r();
                null != e && hj(e, hg);
            };
    }, [em, r]);
    let ef = i.useCallback(() => {
        (A(!1), N(null), (Y.current = null), (Z.current = null));
    }, []);
    i.useEffect(() => {
        if (!H || !C || !el || L || null != D || null != B) return;
        let e = P.current,
            { rect: t, scale: n } = ei.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Y.current = l), (Z.current = l), ee());
    }, [H, C, el, L, D, B, ee]);
    let eh = i.useCallback(
            (e) => {
                if (null != D || null != B) {
                    (et(), K(null));
                    return;
                }
                if (null == w || null == W) return;
                let t = eo(e, W);
                es(
                    w,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? nY
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(w, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [w, W, eo, D, B, es, et],
        ),
        ep = i.useCallback(() => {
            null != u && (N(null), null != ly(u) ? lw(u) : ln(u));
        }, [u]),
        eg = i.useCallback(() => {
            null != u &&
                (null != D
                    ? et()
                    : B?.confirmingRemove === !0
                      ? K({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? K(null)
                        : ep());
        }, [u, D, B, et, ep]),
        ex = i.useRef(eg),
        ej = i.useRef(u),
        eb = i.useRef(ep);
    i.useLayoutEffect(() => {
        ((ex.current = eg), (ej.current = u), (eb.current = ep));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (H)
            return (
                rQ.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rQ.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            !(0, eU.vq)(t) ||
                ey.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, hf.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ej.current || null == ly(ej.current)) && eb.current());
        }
    }, [H, s]);
    let ek = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eg());
                    return;
                }
                if (null != D || null != B || 0 === er.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == w ? -1 : er.findIndex((e) => e.ref === w.ref);
                    N(er[(n + (t ? 1 : -1) + er.length) % er.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != w &&
                    (e.preventDefault(),
                    es(w, nY, { x: (W?.left ?? 0) + w.rect.x * en, y: (W?.top ?? 0) + w.rect.y * en }));
            },
            [u, D, B, er, w, es, eg, W, en],
        ),
        ew = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((nJ(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, _.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = nQ(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${n2}${r}${n3}${n1(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        et(),
                        N(null)));
            },
            [u, D, et],
        ),
        eN = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, ea.vX)(u, e)), [u]),
        eC = i.useCallback(() => {
            if (null != u && null != B && null != p && nJ(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = n8(u)).annotations.find((t) => t.id === e)) &&
                        lr(l, p) &&
                        n9(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, p]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != p) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = n8(u)).annotations.find((t) => t.id === e)) &&
                        lr(n, p) &&
                        n9(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
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
        eE = H && null != W,
        eI = C && null == B,
        eM = D?.target ?? ed?.target ?? null,
        e_ = D ?? O,
        eP = D ?? (O?.instant === !0 ? null : O),
        eT =
            null != ed && null != W
                ? (function (e, t) {
                      let { left: n, top: l } = hN(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(hw(ed.target, ed.anchor, W, en), W)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (ed?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ed;
            hj(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ed, r]),
        (0, rJ.createPortal)(
            (0, a.jsxs)("div", {
                ref: ey,
                className: hb.Li,
                children: [
                    (0, a.jsx)(aH.A, {
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
                                      className: hb.MT,
                                      style: { left: W.left, top: W.top, width: W.width, height: W.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": E.intl.string(S.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ec,
                                      onMouseLeave: ef,
                                      onClick: eh,
                                      onKeyDown: ek,
                                  }),
                                  null != w && null == w.marker && null == D && null == B
                                      ? (0, a.jsx)(hR, { box: hk(w, W, en) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: hb.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: hb.xz,
                                          "data-shown": null != w && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: hb.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, a.jsx)("span", { className: hb.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: hb.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: hb.Y,
                                      children: eI ? (0, a.jsx)("div", { className: hb.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: hb.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: hb.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: hb.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: hb.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: hb.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, a.jsx)("div", { className: hb.D0, style: hk(eM, W, en), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = hw(e.target, e.anchor, W, en),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: hb.xL,
                                              style: { ...hN(n, W), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(S.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: n0(e.target),
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
                                                  (e.stopPropagation(), et(), K(l));
                                              },
                                              children: (0, a.jsx)(hS, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == e_ || null == u
                                      ? null
                                      : (0, a.jsx)(r2, {
                                            projectId: u,
                                            at: { x: e_.at.x + 20, y: e_.at.y + 20 },
                                            bounds: W,
                                            kind: e_.label.kind,
                                            value: e_.draft,
                                            canSubmit: null != D && nJ(e_.draft),
                                            onChange: (e) => {
                                                null != D && q({ ...D, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: et,
                                            onUploadFile: eN,
                                            closing: null == D,
                                        }),
                                  null != ed && null != B && null != eT
                                      ? (0, a.jsxs)(hE, {
                                            point: eT,
                                            frame: W,
                                            authorId: ed.authorId,
                                            title: n0(ed.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? K({ ...B, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || K(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(rv.f, {
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
                                                          className: hb.aC,
                                                          children: ed.comment,
                                                      }),
                                                lr(ed, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: hb.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: hb.nv,
                                                                            children: E.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(eR.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(eR.$, {
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
                                                                        (0, a.jsx)(eR.$, {
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
                                                                            ? (0, a.jsx)(eR.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nJ(B.draft),
                                                                                  text: E.intl.string(S.default.iicRP9),
                                                                                  onClick: eC,
                                                                              })
                                                                            : (0, a.jsx)(eR.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: E.intl.string(
                                                                                      S.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
                                                                                          ...B,
                                                                                          editing: !0,
                                                                                          draft: ed.comment,
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
function hS(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([ig.default], () => ig.default.getUser(t), [t]);
    return (0, a.jsx)(oj.eu, {
        src: null == n ? null : eL.Ay.getUserAvatarURL(n),
        size: ob._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function hE(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(hy);
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
        className: hb.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: hb.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: hb.ip, children: (0, a.jsx)(hS, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: hb.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: hb.zI, children: g }),
        ],
    });
}
let hI = 300,
    hM = 2;
function h_(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function hP(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function hR(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: hb.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var hT = n(659723),
    hL = n(697744),
    h$ = n(130324);
function hD(e) {
    let t = (0, hL.c)(),
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
    let r = (0, aq.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function hq(e) {
    let { className: t } = e,
        { Component: n, events: l } = hD(3e4);
    return (0, a.jsxs)("div", {
        className: h()(t, h$.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: h$.ol,
                children: E.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var hO = n(251363),
    hz = n(944142),
    hF = n(532247),
    hU = n(501628);
function hG(e) {
    let { progress: t } = e,
        { Component: n } = hD(1500),
        l = lF.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: hU.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: hU.PM,
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
function hB(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([hz.A], () => (s ? hz.A.getLiveReload(t) : null), [s, t]),
        c = (0, ro.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, hF.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, hF.QP)(e, s)));
            let m = (0, o.bG)(
                    [lI.A],
                    () => {
                        let e = lI.A.getFrame(n);
                        return (0, l7.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, hO.ow)(null, n) && e();
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
        h = m ? null : (0, hF.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(aH.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: hU.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(hG, { progress: h }),
                  })
                : null,
        ],
    });
}
var hK = n(357858),
    hH = n(343030),
    hV = n(317608),
    hW = n(35367),
    hX = n(771293);
let hZ = { width: 1 / 0, height: 1 / 0 };
function hY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hZ;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var hJ = n(702083);
function hQ(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([ru.A], () => ({
            mobile: ru.A.isBuilderPreviewMobile(),
            landscape: ru.A.isBuilderPreviewLandscape(),
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
        d = n ? hY(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: h()(hJ.dw, { [hJ.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: h()(hJ.R9, { [hJ.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var h0 = n(347927);
function h1(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: h()(h0.Bf, l && h0.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: h0.Ux,
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
var h2 = n(957272);
function h3(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, hW.A)({ applicationId: t, surface: n, launch: l });
    if (((0, hX.A)(t, n), s === hW.n.Launched)) {
        let e = (0, a.jsx)(hV.A, { frameId: i.id, level: hH.A.WithinAppContent, className: h2.Z7, overlay: r });
        return (0, rc.Q5)(n) ? (0, a.jsx)(hQ, { children: e }) : e;
    }
    return (0, a.jsx)(h5, { state: s });
}
function h5(e) {
    let { state: t } = e;
    switch (t) {
        case hW.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: h2.qs,
                children: (0, a.jsx)(h1, {
                    title: E.intl.string(S.default["9kpdo7"]),
                    body: E.intl.string(S.default.iIA8Nj),
                }),
            });
        case hW.n.NoApplication:
            return (0, a.jsx)(hq, { className: h2.qs });
        case hW.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: h2.qs,
                children: (0, a.jsx)(h1, {
                    title: E.intl.string(S.default["7k4GyN"]),
                    body: E.intl.string(S.default.zdIy3R),
                }),
            });
        case hW.n.Error:
            return (0, a.jsxs)("div", {
                className: h2.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: h2.tj,
                        children: E.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case hW.n.AwaitingLaunch:
        case hW.n.Loading:
            return (0, a.jsx)("div", { className: h2.qs, children: (0, a.jsx)(t7.y, {}) });
    }
}
var h4 = n(308528),
    h6 = n(334738),
    h7 = n(688438),
    h8 = n(365971),
    h9 = n(703462);
function pe(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: h9.f,
        children: [
            (0, a.jsx)(eD.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function pt() {
    return (0, a.jsx)("div", { className: h9.f, children: (0, a.jsx)(t7.y, {}) });
}
function pn(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        c = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, o.bG)([ip.A], () => (null != c ? ip.A.getChannel(c) : null), [c]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && h4.A.preload(D.ME, t);
        }, [t]),
        (n = (0, o.bG)([t3.A], () => t3.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, h8.Xg)();
            return (
                (0, h6.yl)(t, e),
                () => {
                    (0, h6.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, lH.CN)(l).then(
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
        ? (0, a.jsx)(pe, { message: E.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(pt, {})
          : (0, a.jsx)("div", {
                className: h9.g,
                children: (0, a.jsx)(h7.A, { channel: d, guild: null, chatInputType: cc.oU.SIDEBAR }, d.id),
            });
}
var pl = n(887909),
    pr = n(570962),
    pa = n(998475);
function pi(e) {
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
    } = (0, pl.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: pa.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: pa.rf,
                children: (0, a.jsx)(pr.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: pa.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: pa.z3,
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
                                className: h()(pa.Qs, c ? pa.cw : null, d ? pa.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: pa.o1,
                      children: s.map((e, t) => (0, a.jsx)(eR.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var ps = n(765671),
    po = n(269094),
    pu = n(714917),
    pc = n(463660),
    pd = n(582063);
let pm = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function pf() {
    (0, eV.P0)({ text: E.intl.string(S.default.jj3abP), variant: "critical" });
}
function ph(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = E.intl.string(S.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eX.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(pp, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: pd.m2,
                        children: (0, a.jsx)(N.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tv.K, {
                                "aria-label": r,
                                icon: tx.SettingsIcon,
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
                accept: pm.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (pm.includes(n.type)
                                ? n.size > er.aI
                                    ? (0, eV.P0)({ text: E.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, pc.M$)(t, n).catch(pf)
                                : (0, eV.P0)({ text: E.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function pp(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([pu.A], () => pu.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eZ.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": E.intl.string(S.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eY.rX, {
                children: [
                    (0, a.jsx)(eY.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: E.intl.string(S.default.uQpDky),
                        icon: rg.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eY.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(S.default.AiAz8J),
                        icon: fz.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, pc.Og)(t).catch(pf));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eY.rX, {
                children: (0, a.jsx)(eY.fP, {
                    id: "conjure-overlay-background-blur",
                    label: E.intl.string(S.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, pc.Y1)(t, !i) || pf();
                    },
                }),
            }),
        ],
    });
}
let pg = "/assets/7cec34541705c795.webp";
function px(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, hW.A)({ applicationId: t, surface: l7.ZN });
    return (i.useEffect(() => {
        let e = (0, l7.VA)(t, l7.ZN);
        return () => (0, lM.r)(e);
    }, [t]),
    r.state !== hW.n.Launched)
        ? (0, a.jsx)(h5, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(h5, { state: hW.n.Loading })
          : (0, a.jsx)(pv, { lifecycle: r, projectId: n, size: l });
}
function pv(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, ps.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: pd.JH,
        children: [
            (0, a.jsx)(pj, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: pd.dw,
                children: (0, a.jsx)("div", {
                    className: pd.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(po.A, { frame: t.frame, application: t.application, className: pd.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(ph, { projectId: n }) : null,
        ],
    });
}
function pj(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([pu.A], () => (null != t ? pu.A.getBackground(t) : null)),
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
                (0, pc.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(pg);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        p = null == l || (null != f && f === u) ? pg : f;
    return null != p && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: h()(pd.LO, { [pd.Ty]: n?.blur === !0 }),
              src: p,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  p === f && c(f);
              },
          })
        : null;
}
var pb = n(409478),
    py = n(652227);
function pk(e) {
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
            overlayWidgetSize: m = lW,
            projectId: f,
            frameOverlay: h,
            paused: p = !1,
            onResume: g,
        } = e,
        x = (0, o.bG)([i2.A], () => null != f && null != i2.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: py.qs, children: (0, a.jsx)(t7.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: py.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(t7.y, {}) : (0, a.jsx)(pi, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: py.RG,
                      children: [
                          (0, lZ.yf)(u, c)
                              ? p
                                  ? (0, a.jsx)(pw, { projectId: f, onResume: g })
                                  : (0, a.jsx)(h3, { applicationId: t, surface: l, launch: r, frameOverlay: h })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: py.qs,
                                        children: (0, a.jsx)(h1, {
                                            wide: !0,
                                            title: E.intl.string(S.default["08U+YO"]),
                                            body: E.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(pb.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(px, { applicationId: t, projectId: f, size: m })
                              : null,
                          "bot" === c && null != n && null != f
                              ? (0, a.jsx)(pn, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: py.qs, children: (0, a.jsx)(t7.y, {}) })
              : (0, a.jsx)(hq, { className: py.qs });
}
function pw(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, hK.Pu)(t),
        (0, a.jsx)("div", {
            className: py.qs,
            children: (0, a.jsx)(h1, {
                wide: !0,
                title: E.intl.string(S.default.MMWEH2),
                body: E.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(eR.$, {
                              size: "sm",
                              variant: "primary",
                              icon: td.PlayIcon,
                              text: E.intl.string(S.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var pN = n(750506),
    pC = n(867193),
    pA = n(539197),
    pS = n(977020);
function pE(e) {
    let { projectId: t } = e,
        n = (0, pA.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, pA.Ie)(e);
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
        className: pS.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [pA.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: h()(pS.hN, pS.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: h()(pS.hN, pS.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: h()(pS.UE, { [pS.SP]: n.shown, [pS.Vq]: n.pressed, [pS.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var pI = n(417760);
function pM(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, o.bG)([W.A], () => null != e && W.A.isThinking(e)),
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
        u = (0, lP.CU)(n),
        c = "controlling" === t,
        d = E.intl.string(c ? (u ? S.default["VJW/5P"] : S.default["+hD2Iz"]) : S.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(eR.$, {
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
              className: h()(pI.M0, pI.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(mu.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(up.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: pI.ID, children: d }),
                  c ? (0, a.jsx)(aH.A, { children: E.intl.string(S.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: pI.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: pI.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: pI.sp,
                      children: [
                          (0, a.jsx)(up.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(mu.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: pI.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: pI.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: pI.Rb,
                                            children: E.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: pI.lC, children: m }) : null,
              ],
          });
}
function p_(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, lP.Zv)(null != n && n === l ? t : null),
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
        c = (0, tT.useHasAnyModalOpen)(),
        d = (0, l5.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, l5.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = r3(r());
            f((t) => (r5(t, e) ? t : e));
            let t = null == h ? null : r3(h);
            (x((e) => (r5(e, t) ? e : t)), null != h && (0, pC.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, pC.C)(0));
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
            let [e] = i.useContext(pN.uY),
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
                      className: pI.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: pI.QF,
                          children: (0, a.jsx)(pM, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, rJ.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(aH.A, {
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
                ? (0, rJ.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: pI.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: pI.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(pE, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var pP = n(399503),
    pR = n(853555),
    pT = n(271982),
    pL = n(187645);
let p$ = new Map(),
    pD = !1;
function pq() {
    let e = new Map();
    for (let t of new Set([...W.A.getActivityOrderedProjectIds(), ...(0, lP.T7)()])) {
        if (!lR(t) || l_.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = z.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, rc.Rc)(t);
            return (0, l7.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [t, n] of [...p$])
        e.get(t) !== n.frameId &&
            (function (e, t) {
                (p$.delete(e), t.unregisterLookup(), pT.A.removeFrameTarget(t.frameId, t.element), t.element.remove());
                let n = lI.A.getFrame(t.frameId)?.applicationId;
                null != n && setTimeout(() => lD(e, n), 0);
            })(t, n);
    for (let [t, n] of e)
        p$.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = pL.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    pO(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (p$.set(e, l),
                    (l.unregisterLookup = (0, pR.Ng)(e, () => (0, hO.n5)(n, t))),
                    pT.A.registerFrameTarget(t, n, hH.A.Backstage, void 0));
            })(t, n);
    for (let e of p$.values()) pO(e.element);
}
function pO(e) {
    let t = ru.A.isBuilderPreviewMobile();
    e.classList.toggle(pL.L, !t);
    let n = t ? hY(ru.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var pz = n(873727),
    pF = n(147248),
    pU = n(418842),
    pG = n(363195),
    pB = n(818023);
let pK = null;
var pH = n(517461),
    pV = n(761929),
    pW = n(487336);
function pX(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, pH.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, X.clamp)(u, 360, n),
        m = (0, pV.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: pV.R.HORIZONTAL_LEFT,
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
        className: pW.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: pW.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: pW.kL, style: { width: d }, children: l }),
        ],
    });
}
var pZ = n(541940);
function pY(e) {
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
        v = (0, ro.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([pG.A], () => (0, pz.x4)(pG.A.theme)),
            l = (0, o.bG)([pF.A], () => pF.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([eT.Ay], () => ({
                reducedMotion: eT.Ay.useReducedMotion,
                fontScale: (0, pz.U0)(),
                highContrast: eT.Ay.isHighContrastModeEnabled,
                forcedColors: eT.Ay.useForcedColors,
                underlineLinks: eT.Ay.alwaysShowLinkDecorations,
            })),
            d = lF.hH.useSetting(),
            m = (0, pU.C)(),
            f = (0, o.bG)(
                [lI.A, ru.A],
                () =>
                    ru.A.isBuilderPreviewMobile() &&
                    lI.A.getFrame(t)?.applicationId === ru.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            p = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, hO.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, pz.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, hv.W)(l, "set-env", i, {
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
                let n = (0, hO.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, hO.n5)(e, t) && ((x.current = null), b());
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
            if (null != t) return (0, pR.Ng)(t, () => (0, hO.n5)(g, j));
        }, [t, g, j]));
    let b = i.useCallback(() => (0, hO.ow)(g, j), [g, j]),
        y = i.useCallback(() => (f ? (0, hO.ow)(g, j) : g), [f, g, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: h()(pZ.Mh, c),
                children: [
                    u,
                    p
                        ? null
                        : (0, a.jsx)(p_, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: pZ.fm, children: d }),
                ],
            }),
            m,
            p
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(hA, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(aR, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function pJ(e) {
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
    (0, pP.k)(t, N);
    let M = s.type === lY.U.MAIN || (0, rc.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([ru.A], () => ({
            mobile: ru.A.isBuilderPreviewMobile(),
            landscape: ru.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? pB.aX.LANDSCAPE : pB.aX.PORTRAIT), (pK = e));
                else {
                    if (pK !== e) return;
                    ((l = pB.aX.UNHANDLED), (pK = null));
                }
                K.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let P = i.useRef(null),
        [R, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, aL.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, aL.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, lH.HV)(l), () => (0, lH.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, _.ensureConnection)(t),
                pD ||
                    ((pD = !0),
                    W.A.addChangeListener(pq),
                    z.Ay.addChangeListener(pq),
                    lI.A.addChangeListener(pq),
                    ru.A.addChangeListener(pq),
                    l_.A.addChangeListener(pq),
                    (0, lP.W3)(pq),
                    pq()));
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
        className: pZ.LB,
        children: (0, a.jsx)(pY, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, lZ.yf)(k, w),
            paused: A,
            mainClassName: null == c ? void 0 : h()(pZ.ez, { [pZ.zt]: d }),
            content: (0, a.jsx)(pk, {
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
                frameOverlay: (0, a.jsx)(hB, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && $
                    ? (0, a.jsx)(pX, {
                          open: d,
                          maxWidth: L,
                          children: (0, a.jsx)("div", {
                              className: pZ.cO,
                              children: x
                                  ? (0, a.jsx)(hm, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(hT.Ay, { projectId: t }),
                                            (0, a.jsx)(rY.Ay, {
                                                "aria-label": E.intl.string(E.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(rY.Ay.Icon, {
                                                                  icon: eW.P,
                                                                  tooltip: E.intl.string(S.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(rY.Ay.Title, {
                                                    children: E.intl.string(E.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: pZ.cb,
                                                children: (0, a.jsx)(
                                                    m_,
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
var pQ = n(323140);
function p0(e) {
    var t, l;
    let r,
        s,
        c,
        { project: d, projectsLoaded: m, onBack: f, guildId: p } = e,
        [g, j] = i.useState(!0),
        [b, k] = i.useState(!1),
        w = lU(),
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
                                (0, lB.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, eV.P0)({
                                                        text: E.intl.formatToPlainString(S.default.Z4n6LX, {
                                                            title: (0, lG.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, lK.c)(u, r);
                                                null != e && (0, eV.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, eV.P0)({
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
        P = d?.id ?? null;
    ((t = d?.preview_application_id ?? null),
        i.useEffect(() => {
            if (null != P && null != t)
                return (
                    l$.add(t),
                    () => {
                        (l$.delete(t), lD(P, t));
                    }
                );
        }, [P, t]));
    let {
            integrationStatus: T,
            isPreviewApplicationLoading: L,
            checkingIntegration: $,
            previewReady: O,
            hasFrame: F,
            needsPermissionReview: U,
            installAuthorizeProps: G,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)(
                    [z.Ay, rr.A],
                    () => (null == r ? null : (z.Ay.getIntegrationStatus(r) ?? rr.A.getIntegrationStatus(r))),
                    [r],
                ),
                { data: c, isLoading: d } = (0, rl.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                p = (0, lZ.Qg)({
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
            let x = (0, ra.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, ra.$)(e, x));
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
                              ...(0, ri.i)({ applicationId: t, application: c ?? null, guildId: x }),
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
        })(d, p),
        B =
            (0, o.bG)([rd.A], () => (null == P ? void 0 : rd.A.getPublishStatus(P)?.previewAppChannels), [P]) ??
            T?.preview_app_channels,
        {
            availability: K,
            activeMode: H,
            setMode: V,
            frameSurface: X,
            frameSurfaceOptions: Z,
            setFrameSurface: Y,
            appChannel: J,
            setAppChannel: Q,
            frameLaunchParams: ee,
            widgetApplicationId: et,
        } = (0, l1.p)({
            applicationId: d?.preview_application_id ?? null,
            previewApplicationId: d?.preview_application_id ?? null,
            declaredActivity: F,
            previewSupportedSurfaces: d?.preview_supported_surfaces,
            installScope: d?.install_scope ?? null,
            ownerAuthorizationRevoked: T?.owner_authorization_revoked === !0,
            supportsOverlay: d?.preview_supported_surfaces?.includes(lV.q7.OVERLAY) === !0,
            previewAppChannels: B,
        }),
        en =
            ((l = (0, o.bG)(
                [W.A],
                () =>
                    null == P
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(W.A.getMessages(P)),
                [P],
            )),
            null != (r = l?.default_size) &&
            Number.isFinite(r.width) &&
            Number.isFinite(r.height) &&
            r.width > 0 &&
            r.height > 0
                ? r
                : lW);
    ((0, lX.x)(P, (e) => {
        K.modes.includes(e) && V(e);
    }),
        lz(P, () => {
            (j(!0), k(!0));
        }));
    let el = K.modes.includes("frame"),
        er = (0, o.bG)([l_.A], () => l_.A.isPaused(P), [P]),
        ea = el && !er,
        {
            previewTargetOptions: ei,
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
                                          t === lY.U.APP_CHANNEL && n.length > 1
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
                f = (0, o.bG)([ru.A], () => ru.A.isBuilderPreviewMobile()),
                h = E.intl.string(f ? S.default.tKGF0Q : S.default.peqEOY),
                p = i.useCallback(() => (0, lH.GG)(!f), [f]),
                g = (0, o.bG)([ru.A], () => ru.A.isBuilderPreviewLandscape()),
                x = E.intl.string(g ? S.default.tunI2l : S.default.DoNdjA),
                v = i.useCallback(() => (0, lH.Lw)(!g), [g]),
                j = (0, rc.jS)(t),
                b = i.useMemo(() => (0, rc.Op)(j, l), [j, l]),
                y = (0, ro.A)(t?.preview_application_id ?? null, b),
                k = (0, l7.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || rs.A.refreshProxyTicket(y.id);
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
            project: d,
            modes: K.modes,
            frameSurface: X,
            frameSurfaceOptions: Z,
            previewAppChannels: B,
            setMode: V,
            setFrameSurface: Y,
            setAppChannel: Q,
        }),
        ev = g && !b,
        ej = E.intl.string(ev ? S.default.JD6Oit : S.default.xjJAQm),
        eb = i.useCallback(() => {
            if (b) {
                (k(!1), j(!0));
                return;
            }
            j((e) => !e);
        }, [b]),
        ey = i.useCallback(() => j(!1), []),
        {
            designFeedbackActive: ek,
            designFeedbackToggleRef: ew,
            agentDrivingPreview: eN,
            designFeedbackLabel: eC,
            handleToggleDesignFeedback: eA,
        } = (function (e, t, n) {
            let { active: l } = li(e);
            i.useEffect(() => {
                null != e && l && !t && ln(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, lP.Zv)(e),
                s = E.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void ln(e);
                        (n(), le(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(P, ea, C),
        [eS] = i.useState(() => e0.isPlatformEmbedded && (0, rn.qM)()),
        eE = null != lA(P);
    i.useEffect(() => {
        null != P && eE && !ea && lw(P);
    }, [P, eE, ea]);
    let eI = i.useCallback(() => {
            null != P &&
                (C(),
                (function (e) {
                    if (null != ly(e)) return;
                    let { byProject: t } = lj.getState();
                    lj.setState({ byProject: { ...t, [e]: lb } });
                })(P));
        }, [P, C]),
        eM = i.useCallback(() => {
            null != P && lw(P);
        }, [P]),
        e_ = eE ? E.intl.string(S.default.tuQ5f3) : eC,
        eP = i.useCallback(() => {
            k((e) => !e && (j(!0), !0));
        }, []),
        eT = i.useCallback(() => k(!1), []),
        eL = i.useCallback(() => {
            null != P && (0, lH._j)(P);
        }, [P]),
        e$ = i.useCallback(() => {
            null != P && (er ? (0, lH._j)(P) : (0, lH.di)(P, ep?.id));
        }, [P, er, ep?.id]),
        eD = i.useCallback(() => {
            var e, t;
            (null != d && ((e = d.id), (t = ep?.id), (0, _.closeConnection)(e), (0, lM.r)(t)), f());
        }, [d, ep?.id, f]),
        eq =
            ((s = i.useCallback(() => {
                null != d && (N(), (0, _.sendUserMessage)(d.id, E.intl.string(S.default.oU20rd)));
            }, [d, N])),
            {
                onExport: s,
                onImport: (c = e9(
                    i.useCallback(
                        (e) => {
                            if (null == d) return;
                            let t = d.id,
                                n = e7(e);
                            null != n
                                ? (0, eV.P0)({ text: n, variant: "critical" })
                                : (0, to.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: d.name }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          N();
                                          try {
                                              await e6(t, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, eV.P0)({
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
        eO = i.useCallback(() => {
            null != d && (0, tH.A)(d, p);
        }, [d, p]),
        ez = (0, lZ.JR)(H, U)
            ? { type: "permissions", authorizeProps: G }
            : $ && null == T
              ? { type: "checking" }
              : void 0,
        eF = (0, o.bG)([z.Ay], () => null != P && z.Ay.isProjectDeleting(P), [P]);
    i.useEffect(() => {
        ((null == d && m) || eF) && (0, u.bG)(D.BVt.CHANNEL(p, q.VV.CONJURE));
    }, [p, d, m, eF]);
    let {
            publishOptions: eU,
            publish: eG,
            publishing: eB,
            confirmation: eK,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...rZ,
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
                c = (0, tS.Ay)(e, u),
                d = c?.publishing === !0;
            i.useEffect(() => {
                d && (s(), r(null));
            }, [d, s]);
            let m = d ? null : l;
            return { publishOptions: u, publish: c, publishing: d, confirmation: m };
        })(P, p, $ || L),
        eH =
            null == d
                ? null
                : (0, a.jsx)(tK, {
                      projectId: d.id,
                      projectName: d.name,
                      guildId: p,
                      projectGuildId: d.guild_id,
                      isOwner: (0, z.PV)(d),
                      canRemix: (0, z.H_)(d),
                      onRefresh: (0, l7.x1)(ep) ? ex : void 0,
                      isRefreshing: eg,
                      onTogglePreviewPaused: "frame" === H ? e$ : void 0,
                      previewPaused: er,
                      previewPauseDisabled: !er && eN,
                      onClose: eD,
                      onExport: eq.onExport,
                      onImport: eq.onImport,
                      onRemix: eO,
                      onConnectTool: () => {
                          var e;
                          return (
                              (e = d.id),
                              void (0, tT.openModalLazy)(async () => {
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
                              void (0, tT.openModalLazy)(async () => {
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
                          K.modes.includes("widget") && "unavailable-authorization-revoked" !== K.profileState
                              ? et
                              : null,
                      previewProjectId: d.id,
                  }),
        eW =
            null == eG || null == d
                ? null
                : (0, a.jsx)("div", {
                      className: pQ.As,
                      onMouseDown:
                          null == P || eG.disabled || eB
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, rm.dx)(P);
                                },
                      children: (0, a.jsx)(rU, {
                          project: d,
                          publish: eG,
                          menu: eH,
                          children: (e) =>
                              (0, a.jsx)(eR.$, {
                                  size: "sm",
                                  variant: eG.status?.publishState === "live_current" ? "secondary" : "primary",
                                  icon: eB ? p1 : null != eK ? nG.U : void 0,
                                  text: eK ?? eG.label,
                                  ...e,
                              }),
                      }),
                  }),
        eX = null == d ? void 0 : () => (0, tI.A)(d.id, { guildId: p, isPreview: !0, publishOptions: eU }),
        eZ = (0, a.jsx)(M, {
            title: d?.name ?? E.intl.string(S.default.G1WwgK),
            breadcrumb: { title: E.intl.string(S.default.uk6jhJ), onClick: f },
            project: d,
            onOpenProjectSettings: eX,
            actions:
                null == d
                    ? null
                    : (0, a.jsxs)("div", {
                          className: pQ.FO,
                          children: [
                              (0, a.jsx)(rt, {
                                  targets: ei,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(H, X, J),
                                  onChange: es,
                              }),
                              el
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === H
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: eo ? p5 : p3,
                                                      tooltip: eu,
                                                      "aria-label": eu,
                                                      selected: eo,
                                                      onClick: ec,
                                                  })
                                                : null,
                                            eo && "frame" === H
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: p4,
                                                      tooltip: em,
                                                      "aria-label": em,
                                                      selected: ed,
                                                      onClick: ef,
                                                  })
                                                : null,
                                            (0, a.jsx)(lE, {
                                                enabled: eS && !eE && !eN && !er,
                                                onLongPress: eI,
                                                children: (0, a.jsx)(y.A.Icon, {
                                                    ref: ew,
                                                    icon: nB.x,
                                                    iconClassName: pQ.D8,
                                                    tooltip: e_,
                                                    "aria-label": e_,
                                                    selected: eE || ek,
                                                    disabled: er || (eN && !eE),
                                                    onClick: eE ? eM : eA,
                                                }),
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" !== H || er
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(nZ.A, { frame: ep }),
                                            (0, a.jsx)(l8, { frame: ep, controlProjectId: d.id }),
                                        ],
                                    }),
                              (0, a.jsx)("div", { className: pQ.YJ }),
                              w
                                  ? (0, a.jsx)(y.A.Icon, {
                                        icon: nK.BugIcon,
                                        tooltip: E.intl.string(S.default.Mt5k9d),
                                        "aria-label": E.intl.string(S.default.Mt5k9d),
                                        selected: b,
                                        onClick: eP,
                                    })
                                  : null,
                              (0, a.jsx)(y.A.Icon, {
                                  icon: tx.SettingsIcon,
                                  tooltip: E.intl.string(S.default.I2XSKe),
                                  "aria-label": E.intl.string(S.default.I2XSKe),
                                  onClick: eX,
                              }),
                              eH,
                              ev
                                  ? null
                                  : (0, a.jsx)(y.A.Icon, { icon: p2, tooltip: ej, "aria-label": ej, onClick: eb }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: h()(pQ.nj, nO.T),
        children: [
            eq.importInput,
            (0, a.jsx)("main", {
                className: pQ.JX,
                children:
                    null == d
                        ? (0, a.jsxs)("div", {
                              className: pQ.j5,
                              children: [
                                  eZ,
                                  (0, a.jsxs)("div", {
                                      className: pQ.sD,
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
                                          (0, a.jsx)(eR.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: E.intl.string(S.default["WFJ/vb"]),
                                              onClick: () => (0, R.hF)(p),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tS.bI.Provider, {
                              value: eU,
                              children: (0, a.jsx)(
                                  pJ,
                                  {
                                      projectId: d.id,
                                      designFeedbackToggleRef: ew,
                                      applicationId: d.preview_application_id,
                                      previewApplicationId: d.preview_application_id,
                                      surface: eh,
                                      frameLaunchParams: ee,
                                      header: eZ,
                                      chatOpen: g,
                                      onCloseChat: ey,
                                      chatHeaderAction: eW,
                                      debugOpen: w && b,
                                      onCloseDebug: eT,
                                      onRestoreVersion: I,
                                      onImportProject: (0, z.PV)(d) ? eq.onImport : void 0,
                                      restoreState: A,
                                      previewReady: O,
                                      previewGate: ez,
                                      availability: K,
                                      activeMode: H,
                                      widgetApplicationId: et,
                                      overlayWidgetSize: en,
                                      previewPaused: er,
                                      onResumePreview: eL,
                                  },
                                  d.id,
                              ),
                          }),
            }),
        ],
    });
}
function p1() {
    return (0, a.jsx)(t7.y, { type: t7.t.SPINNING_CIRCLE_SIMPLE, className: pQ.Hv, itemClassName: pQ.C5 });
}
function p2(e) {
    return (0, a.jsx)(nH.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function p3(e) {
    return (0, a.jsx)(nV.u, { ...e, size: "custom", width: 20, height: 20 });
}
function p5(e) {
    return (0, a.jsx)(nW.k, { ...e, size: "custom", width: 20, height: 20 });
}
function p4(e) {
    return (0, a.jsx)(nX.H, { ...e, size: "custom", width: 20, height: 20 });
}
function p6(e) {
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
        (0, R.hF)(t);
    }, [t, l, r]),
        i.useEffect(() => {
            (0, R.dm)(t, s);
        }, [t, s]));
    let f = i.useCallback(() => {
            (0, u.pX)(D.BVt.CHANNEL(t, q.VV.CONJURE));
        }, [t]),
        h = (0, o.bG)(
            [z.Ay],
            () => {
                if (null == s) return null;
                let e = z.Ay.getProject(s);
                return null == e || (0, z.PV)(e) || e.guild_id === t ? e : null;
            },
            [s, t],
        ),
        p = (0, o.bG)([z.Ay], () => z.Ay.hasFetchedGuildProjects(t), [t]);
    return null != s
        ? (0, a.jsx)(p0, { project: h, projectsLoaded: p, onBack: f, guildId: t }, s)
        : (0, a.jsx)(nU, { guildId: t });
}
