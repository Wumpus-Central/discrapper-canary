(l.r(t), l.d(t, { default: () => dQ }), l(321073));
var n,
    a,
    r = l(477900),
    i = l(582128),
    s = l(503698),
    u = l.n(s),
    o = l(536637),
    c = l.n(o),
    d = l(478104),
    m = l(17928),
    f = l(314116),
    h = l(534890),
    g = l(646270),
    x = l(31300),
    p = l(831453),
    v = l(376357),
    j = l(834730),
    b = l(939249),
    y = l(866665),
    k = l(140735),
    w = l(289873),
    N = l(821609),
    A = l(604525),
    S = l(92446),
    C = l(625903),
    E = l(297264),
    I = l(97893),
    M = l(364522),
    T = l(103557),
    _ = l(691885),
    P = l(789645),
    R = l(152367),
    L = l(661531),
    D = l(442433),
    $ = l(458518),
    F = l(627363),
    z = l(47167),
    O = l(713654),
    U = l(625180),
    G = l(672929),
    q = l(775946),
    B = l(742589),
    H = l(976860),
    K = l(402860),
    V = l(734057),
    W = l(696451),
    X = l(71393),
    J = l(576705),
    Q = l(164892),
    Y = l(922016),
    Z = l(980707),
    ee = l(477782),
    et = l(81369),
    el = l(712808);
(l(323874), l(14289), l(35956));
var en = l(77729),
    ea = l(723702),
    er = l(264572).Buffer;
async function ei(e, t) {
    if (ea.isPlatformEmbedded) {
        let l = er.from(await e.arrayBuffer());
        if ("function" == typeof en.A.fileManager.saveWithDialog2) await en.A.fileManager.saveWithDialog2(l, t);
        else
            try {
                await en.A.fileManager.saveWithDialog(l, t);
            } catch {}
        return;
    }
    let l = URL.createObjectURL(e);
    try {
        let e = document.createElement("a");
        ((e.href = l), (e.download = t), (e.rel = "noopener"), e.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(l), 0);
    }
}
var es = l(248675),
    eu = l(660183);
async function eo(e, t, l) {
    (0, el.Hc)(e);
    let n = await (0, el.vX)(e, t);
    (0, el.dv)(e, l, [n]);
}
function ec(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, Q.Oq)(e.size, t)
        ? null
        : eu.intl.formatToPlainString(es.default.ThxcOX, { size: (0, Q.sM)((0, Q.Ju)(t)) });
}
async function ed(e, t) {
    let l,
        n =
            ((l = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === l ? "vibegration" : l}.zip`),
        a = await (0, el.cS)(e, n);
    await ei(a, n);
}
function em(e) {
    let t = i.useRef(null),
        l = i.useCallback(
            (t) => {
                let l = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != l && e(l));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, r.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: l,
        }),
    };
}
var ef = l(950305),
    eh = l(664121);
let eg = [
    { value: "user", icon: ef.UserIcon, nameMessage: es.default.s1TsXl },
    { value: "guild", icon: eh.R, nameMessage: es.default.LlLIJw },
];
function ex(e) {
    let { importing: t, onImport: l } = e,
        n = i.useRef(null),
        a = em(i.useCallback((e) => l(e, "user"), [l])),
        s = em(i.useCallback((e) => l(e, "guild"), [l])),
        u = { user: a.open, guild: s.open };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Y.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: Y.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(Z.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": eu.intl.string(es.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, r.jsx)(ee.rX, {
                            label: eu.intl.string(es.default.NyVn6T),
                            children: eg
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: eu.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, r.jsx)(
                                        ee.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: u[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, l) => {
                    let { isShown: a } = l;
                    return (0, r.jsx)(N.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: et.H,
                        text: eu.intl.string(es.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": a,
                    });
                },
            }),
            a.input,
            s.input,
        ],
    });
}
var ep = l(652215),
    ev = l(746080),
    ej = l(245179),
    eb = l(404373),
    ey = l(639519),
    ek = l(361504);
function ew(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var eN = l(371169),
    eA = l(260498);
function eS(e) {
    let { className: t, ariaLabel: l, disabled: n, onClick: a, children: i } = e;
    return (0, r.jsx)(b.D, { "aria-disabled": n, "aria-label": l, className: t, onClick: n ? void 0 : a, children: i });
}
var eC = l(865665),
    eE = l(373913);
let eI = { x: 5, y: 7 },
    eM = { x: 5, y: 4 };
function eT(e) {
    let { listClassName: t, radius: l, children: n } = e,
        [a, s] = i.useState(!1);
    return (0, r.jsxs)("div", {
        className: eE.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, r.jsx)("ol", { className: t, children: n }),
            a ? (0, r.jsx)(eC.C, { area: 64, radius: l, color: L.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var e_ = l(864970),
    eP = l(707554),
    eR = l(770178),
    eL = l(765548),
    eD = l(595528),
    e$ = l(885576),
    eF = l(662429);
let ez = "heading-xxl/semibold",
    eO = !1;
function eU() {
    let e = i.useRef(null),
        [t, l] = i.useState(!0),
        n = (0, eL.A)((e) => {
            l(e.target.clientWidth >= 500);
        }),
        a = (0, eR.w)(n, [], { fireOnMount: !0 }),
        s = (0, m.bG)([eD.A], () => eD.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || eO) return;
        let l = !1,
            n = 0;
        function a() {
            l ||
                (n = window.setTimeout(() => {
                    ((eO = !0), e.current?.play());
                }, 400));
        }
        let r = document.fonts;
        return (
            null == r ? a() : r.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(a, a),
            () => {
                ((l = !0), window.clearTimeout(n));
            }
        );
    }, [s, t]);
    let u = (0, m.bG)([e$.A], () => e$.A.isIdle()),
        o = i.useRef(u);
    i.useEffect(() => {
        let t = o.current && !u;
        ((o.current = u), t && eO && (e.current?.stop(), e.current?.play()));
    }, [u]);
    let c = eu.intl.string(es.default["+5XyCR"]);
    return (0, r.jsx)("div", {
        ref: a,
        className: eF.x,
        children: t
            ? (0, r.jsx)(eP.H, { children: (0, r.jsx)(e_.o, { ref: e, text: c, variant: ez, delay: null }) })
            : (0, r.jsx)(E.D, { variant: ez, children: c }),
    });
}
var eG = l(548118);
let eq = "user";
var eB = l(885386),
    eH = l(540999);
let eK = Object.freeze({ x: 0.5, y: 0.5 });
function eV(e) {
    return "" !== e.trim();
}
function eW(e) {
    let t = e.name.trim(),
        l = (function (e) {
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
    return null == l
        ? "" === t
            ? { kind: "" !== e.role ? e.role : e.tag, name: "" }
            : { kind: "", name: t }
        : { kind: l, name: t };
}
function eX(e) {
    let { kind: t, name: l } = eW(e);
    return [t, l].filter((e) => "" !== e).join(" ");
}
function eJ(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let l = e.name.trim();
    return (
        "" !== l && t.push(`name="${l}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        null != e.marker && t.push(`marker="${e.marker}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let eQ = "[vibegrations:selected] ",
    eY = " \u2014 ";
function eZ(e) {
    if (!e.startsWith(eQ)) return null;
    let t = e.indexOf("\n"),
        l = -1 === t ? e : e.slice(0, t),
        n = -1 === t ? "" : e.slice(t + 1),
        a = l.slice(eQ.length),
        r = a.indexOf(eY),
        i = (-1 === r ? a : a.slice(0, r)).trim();
    return "" === i ? null : { label: i, body: n };
}
let e0 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e1 = new Map(),
    e2 = new Set();
function e3(e) {
    return e1.get(e) ?? e0;
}
function e4(e, t) {
    for (let l of (t.active || 0 !== t.annotations.length ? e1.set(e, t) : e1.delete(e), [...e2]))
        try {
            l();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function e6(e) {
    e1.has(e) && e4(e, e0);
}
function e5(e, t) {
    let l = e3(e);
    l.active && e4(e, { ...l, context: t });
}
function e7(e, t) {
    return null != t && e.authorId === t;
}
function e8(e) {
    return (
        e2.add(e),
        () => {
            e2.delete(e);
        }
    );
}
function e9(e) {
    let t = i.useCallback(() => (null == e ? e0 : e3(e)), [e]);
    return i.useSyncExternalStore(e8, t, t);
}
var te = l(192308),
    tt = l(855793),
    tl = l(128761),
    tn = l(967008),
    ta = l(900797),
    tr = l(320448),
    ti = l(783977),
    ts = l(344587),
    tu = l(534554),
    to = l(837984),
    tc = l(359589),
    td = l(254575);
function tm(e) {
    let [t, l] = i.useState(e),
        [n, a] = i.useState(!1),
        [r, s] = i.useState(e);
    return (
        r !== e && (s(e), e ? l(!0) : a(!1)),
        i.useEffect(() => {
            if (e || !t) return;
            let n = setTimeout(() => l(!1), 150);
            return () => clearTimeout(n);
        }, [e, t]),
        i.useEffect(() => {
            if (!t || !e) return;
            let l = 0,
                n = requestAnimationFrame(() => {
                    l = requestAnimationFrame(() => a(!0));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(l));
            };
        }, [t, e]),
        { mounted: t, entered: n }
    );
}
function tf(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: s, placement: o, open: c, entered: d } = e,
        [m, f] = i.useState(!1),
        h = tm(m),
        g = Q.PY.indexOf(t.tier),
        x = m ? ta.t : tr._,
        p = Q.PY.map(tu.D0),
        v = (0, tu.Tc)(t.tier),
        { text: b, phase: y } = (0, ts.Q)(v);
    return (0, r.jsx)("div", {
        className: td.qd,
        "data-placement": o ?? void 0,
        children: (0, r.jsxs)("div", {
            className: u()(td.t$, { [td.Zr]: c && d, [td.GF]: !c }),
            role: "dialog",
            "aria-label": eu.intl.string(es.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, r.jsx)("div", {
                          className: u()(td.Nr, td.uO, { [td.Zr]: m && h.entered, [td.GF]: !m }),
                          children: (0, r.jsx)(tc.bR, { settings: t, tiers: l, choices: n, disabled: a, onChange: s }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: `${td.Nr} ${td.rF}`,
                    children: [
                        (0, r.jsxs)("div", {
                            className: td.wx,
                            children: [
                                (0, r.jsxs)("button", {
                                    type: "button",
                                    className: td.y6,
                                    "aria-expanded": m,
                                    "aria-label": eu.intl.string(es.default.eGqPbV),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, r.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: eu.intl.string(es.default.aBPQxX),
                                        }),
                                        (0, r.jsx)(x, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: td.vg,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(j.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: u()(td.Z, { [td.xQ]: "exit" === y, [td.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: td.hs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: td.Nb,
                                    children: [
                                        (0, r.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: eu.intl.string(es.default["/tlOR5"]),
                                        }),
                                        (0, r.jsx)(j.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: eu.intl.string(es.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(to.A, {
                                    activeIndex: g,
                                    stops: p,
                                    ariaLabel: eu.intl.string(es.default.aBPQxX),
                                    disabled: a,
                                    onSelect: function (e) {
                                        let l = Q.PY[e];
                                        null != l && l !== t.tier && s((0, tu.CM)((0, tu.j6)(t, l)));
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
function th(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: s, className: u, icon: o } = e,
        c = i.useRef(null),
        [d, m] = (0, tc.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: x } = tm(f);
    return (0, r.jsx)(Y.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: Y.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, r.jsx)(tf, {
                settings: d,
                tiers: l ?? null,
                choices: n,
                disabled: a,
                onChange: m,
                placement: t,
                open: f,
                entered: x,
            });
        },
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, r.jsx)(y.m, {
                text: eu.intl.string(es.default["k2JN/p"]),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, r.jsx)(b.D, {
                    innerRef: c,
                    className: u ?? td.hZ,
                    "aria-label": eu.intl.string(es.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: o ?? (0, r.jsx)(ti.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tg = l(111534);
let tx = { width: 320, height: 240 };
var tp = l(573083),
    tv = l(855859),
    tj = l(238490),
    tb = l(754027),
    ty = l(696645);
function tk(e) {
    return "frame" === e.mode ? `frame-${e.surface}` : e.mode;
}
function tw(e) {
    switch (e.mode) {
        case "frame":
            return (0, ty.XV)(e.surface);
        case "widget":
            return eu.intl.string(es.default.y5GiL1);
        case "overlay":
            return eu.intl.string(es.default["2940LX"]);
        case "bot":
            return eu.intl.string(es.default.tjpaGN);
    }
}
var tN = l(598748),
    tA = l(294323),
    tS = l(457827),
    tC = l(25451),
    tE = l(280450),
    tI = l(373677),
    tM = l(86147),
    tT = l(729475),
    t_ = l(91242),
    tP = l(869146),
    tR = l(475815),
    tL = l(621466);
function tD(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function t$(e) {
    let t, l;
    return (
        null != e &&
        ((l =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, tL.vq)(l, Element) ? l.getAttribute("data-frame-id") : null) === e)
    );
}
function tF(e) {
    return (0, tR.a3)(document, e);
}
function tz(e) {
    return i.useSyncExternalStore(tF, () => t$(e));
}
var tO = l(165610);
function tU(e) {
    let { frame: t, controlProjectId: l } = e,
        n = tz(t?.id ?? null),
        a = (0, tp.Zv)(l),
        i = (0, m.bG)(
            [tP.A, t_.A],
            () => null != t && tP.A.getWindowOpen(ep.MLl.ACTIVITY_POPOUT) && t_.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tO.x1)(t) || i || a) return null;
    let s = tD(t.id);
    if (null == s || !(0, tR.Ub)(s)) return null;
    let u = eu.intl.string(n ? eu.t.Z7MyNB : eu.t.OIDkcp);
    return (0, r.jsx)(B.A.Icon, {
        tooltip: u,
        icon: n ? tM.z : tT.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": n,
        selected: n,
        onClick: () => {
            var e;
            let l;
            null != (l = tD((e = t.id))) && (0, tR.Ub)(l) && (t$(e) ? (0, tR.sP)(l) : (0, tR.tl)(l));
        },
    });
}
var tG = l(559106),
    tq = l(847374),
    tB = l(704745);
function tH(e) {
    let { targets: t, target: l, onChange: n } = e,
        [a, s] = i.useState(!1),
        u = null != l && t.length > 1;
    a && !u && s(!1);
    let o = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!u) return null;
    let m = eu.intl.string(es.default.I2ucou);
    return (0, r.jsx)(Y.Y, {
        targetElementRef: d,
        shouldShow: a,
        onRequestClose: o,
        position: "bottom",
        align: "right",
        animation: Y.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(Z.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: a,
                onSelect: a,
                children: (0, r.jsx)(ee.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = tk(e);
                        return (0, r.jsx)(
                            ee.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: tw(e),
                                checked: t === tk(l),
                                action: () => n(e),
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: n, ...a } = e,
                { isShown: i } = t;
            return (0, r.jsx)(tG.vN, {
                children: (0, r.jsxs)("button", {
                    ...a,
                    ref: d,
                    type: "button",
                    className: tB.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, r.jsx)(j.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eu.intl.string(es.default["N+VA1J"]),
                        }),
                        (0, r.jsx)(j.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: tw(l),
                        }),
                        (0, r.jsx)(tq.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var tK = l(226178),
    tV = l(434279),
    tW = l(941985),
    tX = l(287809),
    tJ = l(427262),
    tQ = l(803306);
let tY = new Set(),
    tZ = new Map();
function t0(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
function t1(e) {
    if (null == e || tY.has(e) || null != tX.default.getUser(e)) return;
    let t = tZ.get(e) ?? 0;
    t >= 3 ||
        (tZ.set(e, t + 1),
        tY.add(e),
        tQ
            .wz(e)
            .finally(() => tY.delete(e))
            .catch(() => {}));
}
var t2 = l(16619),
    t3 = l(782603),
    t4 = l(780338),
    t6 = l(663417),
    t5 = l(70688),
    t7 = l(173936),
    t8 = l(473935),
    t9 = l(408278),
    le = l(365199),
    lt = l(7437),
    ll = l(147036),
    ln = l(957565),
    la = l(785389),
    lr = l(123917);
let li = new Set();
var ls = l(289106),
    lu = l(616334),
    lo = l(189714),
    lc = l(733791),
    ld = l(189213),
    lm = l(331322),
    lf = l(150934),
    lh = l(706935);
function lg(e) {
    let { project: t, target: l, action: n, ...a } = e,
        [s, u] = i.useState(l.canRemovePreviewBot),
        [o, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = "delete" === n,
        h = f ? (0, lc.fI)(l) : (0, lc.Kd)(l),
        g = f ? null : (0, lc.Mi)(l),
        x = f
            ? eu.intl.formatToPlainString(es.default.CJBhb2, { name: l.projectName })
            : eu.intl.formatToPlainString(es.default.x6FvsZ, { app: l.appName });
    async function p() {
        (c(!0), m(null));
        let e = f ? (0, eN.xx)(t.id) : (0, eN.YI)(t.id, { alsoRemovePreviewBot: s }),
            n = await e.catch(() => null);
        (c(!1), n?.ok !== !0)
            ? m(eu.intl.string(f ? es.default["0XDHob"] : es.default.PJ2Fkn))
            : (f || (0, v.P0)((0, v.ox)((0, lc.p_)(l), v.Ck.SUCCESS)), a.onClose());
    }
    return (0, r.jsx)(ld.a, {
        ...a,
        role: "alertdialog",
        title: f ? x : (0, lc.WX)((0, lh.tb)(es.default.x6FvsZ, l.appName)),
        subtitle: f ? (0, lc.J)(l) : eu.intl.string(es.default["8OKM1N"]),
        "aria-label": x,
        notice: null == d ? void 0 : { message: d, type: "critical" },
        actions: [
            { text: eu.intl.string(eu.t["ETE/oC"]), variant: "secondary", onClick: a.onClose },
            {
                text: eu.intl.string(f ? es.default.aC42bN : es.default.BGF8VT),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    p().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(lm.B, {
            gap: 12,
            children: [
                h.length > 0 ? (0, r.jsx)(lh.Ay, { items: h }) : null,
                null != g ? (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: g }) : null,
                f || null == l.previewAppName
                    ? null
                    : (0, r.jsx)(lf.S, {
                          checked: s,
                          onChange: u,
                          disabled: !l.canRemovePreviewBot,
                          label: (0, lh.tb)(es.default["87CtcA"], l.previewAppName),
                      }),
            ],
        }),
    });
}
function lx(e) {
    (0, te.openModal)((t) => (0, r.jsx)(lg, { ...t, ...e }));
}
var lp = l(552821);
let lv = [];
function lj(e) {
    (0, v.P0)((0, v.ox)(e, v.Ck.FAILURE));
}
function lb(e) {
    let {
            projectId: t,
            projectName: l,
            guildId: n,
            projectGuildId: a,
            isOwner: s,
            canRemix: u,
            onExport: o,
            onImport: c,
            onRemix: d,
            onConnectTool: h,
            onHistory: g,
            onRefresh: x,
            isRefreshing: p = !1,
            onClose: j,
            refreshApplicationId: b,
            previewProjectId: y,
            onCloseMenu: k,
        } = e,
        w = (0, lo.iI)(t),
        N = i.useContext(ls.bI),
        { pending: A, refresh: S } = (0, lt.A)(b ?? null),
        { pending: E, connect: I } = (function (e, t) {
            let [l, n] = i.useState(li),
                a = i.useRef(li),
                r = i.useCallback((e) => {
                    ((a.current = (0, la.Q6)(a.current, e)), n(a.current));
                }, []);
            return {
                pending: l,
                connect: i.useCallback(
                    (l) => {
                        if (null == e) return;
                        let i = (0, la.K9)(a.current, l.type);
                        async function s() {
                            let n = await (0, el.JI)(e, l.type);
                            (r(l.type), "url" === n.type)
                                ? (0, lr.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, la.rq)(n.error)
                                          ? eu.intl.string(es.default["jCQ/1B"])
                                          : eu.intl.string(es.default.POxkSh),
                                  );
                        }
                        null != i && ((a.current = i), n(i), s().catch(() => r(l.type)));
                    },
                    [t, e, r],
                ),
            };
        })(y ?? null, lj),
        M = (0, m.bG)([el.Ay], () => (null == y ? lv : el.Ay.getDeclaredConnections(y))),
        T = i.useMemo(() => (0, la.Xl)(M), [M]),
        _ = (0, lc.Bs)(t),
        P = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: a } = e,
                r = [];
            for (let { connection: e, offer: i } of (t &&
                r.push({
                    id: "preview-refresh",
                    label: eu.intl.string(es.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
                r.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: eu.intl.formatToPlainString(es.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: eu.intl.formatToPlainString(es.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return r;
        })({ canRefresh: null != b, refreshPending: A, offers: T, connectPending: E }),
        R = i.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        L = null != d && u,
        D = s && null != c,
        $ = L || null != o || D || null != h || null != g,
        F = ln.p5 && null != n,
        z = ln.p5,
        O = w ? t3.BellIcon : t4.BellSlashIcon;
    return (0, r.jsxs)(Z.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": eu.intl.string(eu.t.ogxXGq),
        onClose: k,
        onSelect: k,
        children: [
            null != x || null != j
                ? (0, r.jsxs)(ee.rX, {
                      children: [
                          null != x
                              ? (0, r.jsx)(ee.Dr, {
                                    id: "refresh",
                                    icon: t6.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t6.RefreshIcon },
                                    label: eu.intl.string(es.default["p4B/7M"]),
                                    disabled: p,
                                    action: x,
                                })
                              : null,
                          null != j
                              ? (0, r.jsx)(ee.Dr, {
                                    id: "close",
                                    icon: t5.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t5.DoorExitIcon },
                                    label: eu.intl.string(es.default["/TlGcK"]),
                                    action: j,
                                })
                              : null,
                      ],
                  })
                : null,
            P.length > 0
                ? (0, r.jsx)(ee.rX, {
                      children: P.map((e) =>
                          (0, r.jsx)(
                              ee.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void S();
                                      let t = null == e.connectionType ? null : R.get(e.connectionType);
                                      null != t && I(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, r.jsx)(ee.rX, {
                children: (0, r.jsx)(ee.Dr, {
                    id: "mute",
                    label: eu.intl.string(w ? es.default.s9rCuH : es.default["a+i/As"]),
                    icon: O,
                    leadingAccessory: { type: "icon", icon: O },
                    action: () => (0, lo.$L)(t, !w),
                }),
            }),
            $
                ? (0, r.jsxs)(ee.rX, {
                      children: [
                          L
                              ? (0, r.jsx)(ee.Dr, { id: "remix", label: eu.intl.string(es.default.XWgAfc), action: d })
                              : null,
                          null != o
                              ? (0, r.jsx)(ee.Dr, { id: "export", label: eu.intl.string(es.default.WsEEP7), action: o })
                              : null,
                          D
                              ? (0, r.jsx)(ee.Dr, { id: "import", label: eu.intl.string(es.default.rWGY3e), action: c })
                              : null,
                          null != h
                              ? (0, r.jsx)(ee.Dr, {
                                    id: "connect-tool",
                                    label: eu.intl.string(es.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, r.jsx)(ee.Dr, {
                                    id: "history",
                                    label: eu.intl.string(es.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            z
                ? (0, r.jsxs)(ee.rX, {
                      children: [
                          F
                              ? (0, r.jsx)(ee.Dr, {
                                    id: "copy-link",
                                    label: eu.intl.string(eu.t.WqhZss),
                                    icon: t7.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t7.LinkIcon },
                                    action: () =>
                                        (0, ln.C)((0, ll.n)(n, ev.VV.CONJURE, t), () =>
                                            (0, v.P0)((0, v.ox)(eu.intl.string(eu.t["L/PwZf"]), v.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(ee.Dr, {
                              id: "copy-project-id",
                              label: eu.intl.string(es.default["nm/zuU"]),
                              icon: t8.L,
                              leadingAccessory: { type: "icon", icon: t8.L },
                              action: () =>
                                  (0, ln.C)(t, () =>
                                      (0, v.P0)((0, v.ox)(eu.intl.string(es.default.CmfaZG), v.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || _?.canRemoveBot === !0
                ? (0, r.jsxs)(ee.rX, {
                      children: [
                          s
                              ? (0, r.jsx)(ee.Dr, {
                                    id: "settings",
                                    label: eu.intl.string(es.default.FzfmQ8),
                                    icon: C.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: C.SettingsIcon },
                                    action: () =>
                                        (0, lu.A)(t, {
                                            guildId: a ?? n,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: N,
                                        }),
                                })
                              : null,
                          _?.canRemoveBot === !0
                              ? (0, r.jsx)(ee.Dr, {
                                    id: "remove-from-server",
                                    label: eu.intl.formatToPlainString(es.default["3gKG2j"], { server: _.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = eA.Ay.getProject(t);
                                        null != e && lx({ project: e, target: _, action: "remove" });
                                    },
                                })
                              : null,
                          s
                              ? (0, r.jsx)(ee.Dr, {
                                    id: "delete",
                                    label: eu.intl.string(eu.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = eA.Ay.getProject(t);
                                        if (null != e && null != _) lx({ project: e, target: _, action: "delete" });
                                        else
                                            (0, f.A)({
                                                title: eu.intl.formatToPlainString(es.default.CJBhb2, { name: l }),
                                                subtitle: eu.intl.string(es.default["0OmrVn"]),
                                                confirmText: eu.intl.string(eu.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, eN.K)(t, () =>
                                                        (0, v.P0)(
                                                            (0, v.ox)(
                                                                eu.intl.string(es.default["0XDHob"]),
                                                                v.Ck.FAILURE,
                                                            ),
                                                        ),
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
function ly(e) {
    let { trigger: t = "header", ...l } = e,
        n = i.useRef(null);
    return (0, r.jsx)(Y.Y, {
        targetElementRef: n,
        position: "bottom",
        align: "right",
        animation: Y.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(lb, { ...l, onCloseMenu: t });
        },
        children: (e, l) => {
            let { onClick: a } = e,
                { isShown: i } = l;
            return (0, r.jsx)("div", {
                ref: n,
                className: lp.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(y.m, {
                              text: eu.intl.string(eu.t["UKOtz+"]),
                              children: (0, r.jsx)(t9.K, {
                                  icon: le.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: a,
                              }),
                          })
                        : (0, r.jsx)(B.A.Icon, {
                              icon: le.MoreHorizontalIcon,
                              tooltip: eu.intl.string(eu.t["UKOtz+"]),
                              "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: a,
                          }),
            });
        },
    });
}
var lk = l(497183),
    lw = l(104171),
    lN = l(286739);
function lA(e) {
    let { creator: t, className: l } = e;
    return (0, r.jsx)("div", {
        className: u()(lN.c, l),
        "aria-hidden": !0,
        children: (0, r.jsx)(lw.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: lw.DN.SIZE_16 }),
    });
}
var lS = l(246338);
let lC = "user",
    lE = "no-server",
    lI = new Map();
function lM(e) {
    return lI.get(e) ?? null;
}
function lT(e) {
    switch (e) {
        case "all":
        case lC:
        case lE:
            return null;
        default:
            return e;
    }
}
function l_(e, t) {
    switch (t) {
        case "all":
            return !0;
        case lC:
            return "user" === e.install_scope;
        case lE:
            return null == (0, tV.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var lP = l(506774);
let lR = "VibegrationsProjectsPanelOpen";
function lL() {
    return lP.w.get(lR) ?? null;
}
function lD(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var l$ = l(803101),
    lF = l(808728),
    lz = l(516288);
function lO(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = t === lz.k.PERMISSIONS;
    return (0, r.jsx)(ld.a, {
        transitionState: l,
        onClose: n,
        title: eu.intl.string(a ? es.default.wQ4UyJ : es.default.ZNGLFE),
        subtitle: eu.intl.string(a ? es.default.Agqmbt : es.default.ffxKGK),
        size: "sm",
        actions: [{ text: eu.intl.string(a ? eu.t.BddRzS : es.default["/omTNx"]), variant: "primary", onClick: n }],
    });
}
var lU = l(951465),
    lG = l(95264),
    lq = l(952644),
    lB = l(991690),
    lH = l(58736),
    lK = l(689175),
    lV = l(65593),
    lW = l(115982);
function lX(e) {
    return !(0, ej.BL)(e) && !0 !== e.stopRequested;
}
var lJ = l(104317),
    lQ = l(643278),
    lY = l(566424),
    lZ = l(683063),
    l0 = l(138212);
function l1(e) {
    let { title: t, trailing: l, children: n, className: a, headerClassName: i, ...s } = e;
    return (0, r.jsxs)("section", {
        className: u()(l0.Nr, a),
        ...s,
        children: [
            (0, r.jsxs)("header", {
                className: u()(l0.wx, null != l && l0.o5, i),
                children: [
                    (0, r.jsx)(j.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            n,
        ],
    });
}
var l2 = l(148590);
function l3(e) {
    let { children: t } = e;
    return (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function l4(e) {
    let {
            title: t,
            meta: l,
            superseded: n = !1,
            showLabel: a,
            hideLabel: s,
            bodyClassName: o,
            beforeBody: c,
            children: d,
            ...m
        } = e,
        f = i.useId(),
        [h, g] = i.useState(!n),
        [x, p] = i.useState(n);
    x !== n && (p(n), g(!n));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? tq.a : tr._,
        y = null != l || n;
    return (0, r.jsxs)(l1, {
        ...m,
        title: t,
        trailing: y
            ? (0, r.jsxs)("span", {
                  className: l2.ZY,
                  children: [
                      l,
                      n
                          ? (0, r.jsx)(b.D, {
                                className: l2.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": f,
                                "aria-label": h ? s : a,
                                children: (0, r.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : l2.RG,
        "data-superseded": n ? "true" : void 0,
        children: [c, (0, r.jsx)("div", { id: f, className: u()(l2.rf, o), hidden: !h, children: d })],
    });
}
var l6 = l(883646);
let l5 = [];
function l7(e) {
    let { status: t } = e;
    return (0, r.jsxs)("span", {
        className: u()(l6.xL, {
            [l6.Vb]: "in_progress" === t,
            [l6.cT]: "completed" === t,
            [l6.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return eu.intl.string(es.default.KvBdun);
                case "in_progress":
                    return eu.intl.string(es.default["m5G9+S"]);
                case "unfinished":
                    return eu.intl.string(es.default.lRpwhD);
                default:
                    return eu.intl.string(es.default.sPGeWi);
            }
        })(t),
        children: [
            (0, r.jsx)(w.y, {
                type: w.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: l6.Qd,
                itemClassName: l6.xB,
                "aria-hidden": !0,
            }),
            (0, r.jsx)("svg", {
                className: l6.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, r.jsx)("path", { className: l6.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function l8(e) {
    let { agents: t, active: l } = e,
        n = i.useMemo(() => (l ? t : l5), [l, t]),
        a = i.useMemo(() => new Set(n.map((e) => e.key)), [n]),
        s = n.map((e) => e.key).join("\0"),
        [u, o] = i.useState(n),
        [c, d] = i.useState(s),
        [m, f] = i.useState(!1);
    c !== s && (d(s), o([...n, ...u.filter((e) => !a.has(e.key))]), 0 === n.length && f(!1));
    let h = u.some((e) => !a.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => o(n), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, n, l]),
        i.useEffect(() => {
            if (!l || 0 === u.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, u.length]),
        0 === u.length)
    )
        return null;
    let g = u.slice(0, 3),
        x = u.length - g.length;
    return (0, r.jsxs)("span", {
        className: l6.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: n, task: i } = e,
                    { Illocon: s } = l;
                return (0, r.jsx)(
                    lZ.u,
                    {
                        asset: (0, r.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: n,
                        body: i,
                        position: "top",
                        children: (0, r.jsx)("span", {
                            className: l6.MA,
                            "data-leaving": a.has(t) ? void 0 : "true",
                            children: (0, r.jsx)(s, { size: 16, alt: n, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, r.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: l6.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function l9(e) {
    let t,
        { todos: l, provisional: n, agents: a, live: s = !0 } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [l, n] = i.useState(() => new Set(e)),
                [a, r] = i.useState(t),
                [s, u] = i.useState(() => new Set());
            return (
                a !== t && (r(t), n(new Set(e)), u(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
                i.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => u(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(i.useMemo(() => l.map((e) => e.id), [l])),
        c =
            ((t = (a ?? l5).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of a ?? l5) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, r.jsxs)("ul", {
        className: l6.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, r.jsxs)(
                    "li",
                    {
                        className: u()(l6.AS, { [l6.J1]: "completed" === l }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, r.jsx)(l7, { status: l }),
                            (0, r.jsx)(j.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: l6.iV,
                                selectable: !0,
                                children: (0, r.jsx)("span", {
                                    className: l6.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, r.jsx)(l8, { agents: c.get(e.id) ?? l5, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != n
                ? (0, r.jsxs)("li", {
                      className: l6.AS,
                      "data-provisional": !0,
                      children: [
                          (0, r.jsx)(l7, { status: "pending" }),
                          (0, r.jsx)(j.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: l6.iV,
                              selectable: !0,
                              children: (0, r.jsx)("span", { className: l6.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ne(e) {
    let { todos: t, provisional: l, agents: n, announceProgress: a = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = eu.intl.formatToPlainString(es.default["P/I+JW"], { completed: u, total: o }),
        d = eu.intl.formatToPlainString(es.default["7tzwKB"], { completed: u, total: o });
    return (0, r.jsx)(l4, {
        title: eu.intl.string(es.default.RtzECX),
        meta: (0, r.jsx)(l3, { children: c }),
        superseded: s,
        showLabel: eu.intl.string(es.default.RKyN9q),
        hideLabel: eu.intl.string(es.default.xydHoj),
        className: l6.Nr,
        bodyClassName: l6.rf,
        beforeBody: a && !s ? (0, r.jsx)(k.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, r.jsx)(l9, { todos: t, provisional: l, agents: n, live: i }),
    });
}
var nt = l(308665),
    nl = l(59678),
    nn = l(903847);
function na(e) {
    let { line: t, placement: l, todos: n, todosLive: a = !0, provisionalTodo: s, agents: o, onJumpToActivity: c } = e,
        d = null != l,
        [m, f] = i.useState(l ?? "top"),
        [h, g] = i.useState(d),
        [x, p] = i.useState(!1),
        [v, j] = i.useState(!1),
        [k, w] = i.useState(d);
    (k !== d && (w(d), null != l ? (f(l), g(!0)) : (p(!1), j(!1))),
        i.useEffect(() => {
            if (d || !h) return;
            let e = setTimeout(() => g(!1), 150);
            return () => clearTimeout(e);
        }, [d, h]),
        i.useEffect(() => {
            if (!h || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, d]));
    let [N, A] = i.useState(!1),
        [S, C] = i.useState(!1),
        [E, I] = i.useState(v);
    (E !== v && (I(v), v ? A(!0) : C(!1)),
        i.useEffect(() => {
            if (v || !N) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [v, N]),
        i.useEffect(() => {
            if (!N || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => C(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [N, v]));
    let M = null != n && n.length > 0,
        T = i.useCallback(() => j((e) => !e), []);
    return h
        ? (0, r.jsxs)("div", {
              className: nn.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, r.jsxs)("div", {
                      className: u()(nn.vK, { [nn.ho]: x && d, [nn.ET]: !d }),
                      children: [
                          null == c
                              ? (0, r.jsx)("ol", {
                                    className: u()(nn.Rk, nl.pj),
                                    "data-live": "true",
                                    children: (0, r.jsx)(lY.A, {
                                        glyph: (0, r.jsx)(nt.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, r.jsx)(b.D, {
                                    className: nn.pZ,
                                    onClick: c,
                                    "aria-label": eu.intl.string(es.default.hEK6qu),
                                    children: (0, r.jsx)("ol", {
                                        className: u()(nn.Rk, nl.pj),
                                        "data-live": "true",
                                        children: (0, r.jsx)(lY.A, {
                                            glyph: (0, r.jsx)(nt.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          M
                              ? (0, r.jsx)(y.m, {
                                    text: eu.intl.string(es.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, r.jsx)(b.D, {
                                        className: nn.BO,
                                        onClick: T,
                                        "aria-expanded": v,
                                        "aria-label": eu.intl.string(es.default.RtzECX),
                                        children: (0, r.jsx)(lQ.ClipboardListIcon, {
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
                  N && M
                      ? (0, r.jsx)("div", {
                            className: u()(nn.vB, { [nn.pg]: v && S, [nn.ui]: !v }),
                            children: (0, r.jsx)(ne, {
                                todos: n,
                                provisional: s,
                                agents: o,
                                live: a,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var nr = l(658675),
    ni = l(22231),
    ns = l(826745),
    nu = l(123292);
let no = {
        [ep.rbe.GUILD_TEXT]: "text",
        [ep.rbe.GUILD_VOICE]: "voice",
        [ep.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [ep.rbe.GUILD_STAGE_VOICE]: "stage",
        [ep.rbe.GUILD_FORUM]: "forum",
        [ep.rbe.GUILD_MEDIA]: "media",
    },
    nc = { channel: "#", role: "@", user: "@" };
var nd = l(155078);
function nm(e) {
    return e.options.some((e) => null != e.image);
}
let nf = [];
function nh(e, t) {
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
var ng = l(890497),
    nx = l(300344),
    np = l(614733),
    nv = l(904363),
    nj = l(950902),
    nb = l(384017);
function ny(e) {
    let {
            guildId: t,
            question: l,
            value: n,
            disabled: a,
            onChange: i,
            onFocus: s,
            onBlur: u,
            options: o,
            placeholder: c,
            onQueryChange: d,
            matchSorterOptions: m,
        } = e,
        f = !0 === l.multi_select,
        h = n.map((e) => e.id);
    function g(e) {
        let t = l.input ?? "channel";
        return e.slice(0, 10).map((e) => ({
            id: e,
            name: o.find((t) => t.value === e)?.label ?? n.find((t) => t.id === e)?.name ?? e,
            ...(function (e, t) {
                if ("channel" === e) {
                    var l;
                    let n = null == (l = V.A.getChannel(t)?.type) ? void 0 : no[l];
                    return { kind: e, ...(null == n ? {} : { channel_type: n }) };
                }
                if ("user" === e) {
                    let l = tX.default.getUser(t)?.username;
                    return { kind: e, ...(null == l ? {} : { username: l }) };
                }
                return { kind: e };
            })(t, e),
        }));
    }
    let x = {
        options: o,
        placeholder: c,
        disabled: a,
        onQueryChange: d,
        matchSorterOptions: m,
        onFocus: s,
        onBlur: u,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: l.question,
        hideLabel: !0,
    };
    return (0, r.jsx)("div", {
        className: nb.YX,
        "data-conjure-clarification-picker": l.input,
        children: f
            ? (0, r.jsx)(ng.Z, {
                  ...x,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, r.jsx)(ng.Z, {
                  ...x,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
let nk = {
    channel: [es.default["9+dfPT"], es.default.pGSJqE],
    role: [es.default["2VkCoD"], es.default.c8YlX8],
    user: [es.default.GZIAxl, es.default["4bptbQ"]],
};
function nw(e, t) {
    return eu.intl.string(nk[e][+!!t]);
}
function nN(e) {
    let { guildId: t, fallback: l, ...n } = e,
        a = (0, nx.A)(t, n.question.channel_filter);
    return null == a
        ? l
        : (0, r.jsx)(ny, { ...n, guildId: t, options: a, placeholder: nw("channel", !0 === n.question.multi_select) });
}
function nA(e) {
    let { guildId: t, ...l } = e,
        n = (0, nv.A)(t);
    return (0, r.jsx)(ny, { ...l, guildId: t, options: n, placeholder: nw("role", !0 === l.question.multi_select) });
}
function nS(e) {
    let { guildId: t, ...l } = e,
        { options: n, onQueryChange: a, matchSorterOptions: i } = (0, np.A)(t);
    return (0, r.jsx)(ny, {
        ...l,
        guildId: t,
        options: n,
        onQueryChange: a,
        matchSorterOptions: i,
        placeholder: nw("user", !0 === l.question.multi_select),
    });
}
function nC(e) {
    let { projectId: t, fallback: l = null, ...n } = e,
        a = (0, nj.Tj)(t, !0);
    if (null == a) return l;
    switch (n.question.input) {
        case "channel":
            return (0, r.jsx)(nN, { guildId: a, fallback: l, ...n }, n.question.id);
        case "role":
            return (0, r.jsx)(nA, { guildId: a, ...n }, n.question.id);
        case "user":
            return (0, r.jsx)(nS, { guildId: a, ...n }, n.question.id);
        default:
            return l;
    }
}
var nE = l(87221),
    nI = l(144228),
    nM = l(241326),
    nT = l(26430),
    n_ = l(750943),
    nP = l(95477),
    nR = l(256905),
    nL = l(73153),
    nD = l(839214);
let n$ = [],
    nF = 1,
    nz = (0, nD.D)(() => ({ draftsByProject: {} }));
function nO(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? n$;
}
function nU(e, t) {
    return nO(nz.getState(), e, t);
}
function nG(e, t, l) {
    let { draftsByProject: n } = nz.getState();
    nz.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function nq(e, t, l, n) {
    let a = nU(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (nG(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function nB(e, t) {
    (0, el.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function nH(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && nB(e, t.ref.id));
}
function nK(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = nz.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? n$) l ? nH(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    nz.setState({ draftsByProject: i });
}
function nV(e) {
    return eu.intl.formatToPlainString(es.default.JZ59Bo, { size: (0, Q.sM)((0, Q.Ju)(e)) });
}
function nW(e, t) {
    let l = nU(e, t);
    if (0 !== l.length) {
        for (let t of l) nH(e, t);
        nG(e, t, n$);
    }
}
function nX(e, t) {
    let l = nU(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (nG(e, t, n$), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function nJ(e, t) {
    let { clarificationAnswers: l, attachments: n = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = nU(e, "chat"),
        r = a.length > 0 && a.every((e) => "ready" === e.status) ? nX(e, "chat") : [];
    (0, el.dv)(e, t, [...n, ...r], { clarificationAnswers: l });
}
function nQ(e, t) {
    let [l, n] = i.useState(null),
        [a, r] = i.useState(!1),
        [s, u] = i.useState(0);
    return (
        i.useEffect(() => {
            let l = !1;
            return (
                (0, el.PK)(e, t).then(
                    (e) => {
                        l || n(e);
                    },
                    () => {
                        l || (0 === s ? u(1) : r(!0));
                    },
                ),
                () => {
                    l = !0;
                }
            );
        }, [e, t, s]),
        {
            src: l,
            gone: a,
            handleError: i.useCallback(() => {
                (n(null),
                    (0, el.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? u(1) : r(!0);
                        },
                        () => r(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(nL.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(nz.getState().draftsByProject)) nK(e, { deleteFromWorker: !0 });
}),
    nL.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        nK(t, { deleteFromWorker: !1 });
    }));
var nY = l(907702);
function nZ(e) {
    let { projectId: t, attachmentId: l, alt: n, onMeasured: a } = e,
        { src: s, gone: o, handleError: c } = nQ(t, l),
        [d, m] = i.useState(null),
        f = null != s && d === s;
    return o
        ? (0, r.jsxs)("span", {
              className: u()(nY.Gt, nY.b6),
              children: [
                  (0, r.jsx)(nE.D, { size: "md", color: "currentColor" }),
                  (0, r.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: eu.intl.string(es.default.lhgD88),
                  }),
              ],
          })
        : (0, r.jsx)("span", {
              className: u()(nY.Gt, { [nY.iP]: !f }),
              children:
                  null != s
                      ? (0, r.jsx)("img", {
                            src: s,
                            alt: n,
                            className: nY.Sl,
                            onLoad: (e) => {
                                m(s);
                                let { naturalWidth: t, naturalHeight: l } = e.currentTarget;
                                t > 0 && l > 0 && a({ width: t, height: l });
                            },
                            onError: c,
                            draggable: !1,
                        })
                      : null,
          });
}
function n0(e) {
    let t,
        l,
        {
            projectId: n,
            option: a,
            multi: i,
            selected: s,
            disabled: o,
            reachable: c,
            tabbable: d,
            onPick: m,
            onView: f,
            onArrow: h,
            onMeasured: g,
            onRemove: x,
        } = e,
        p = eu.intl.formatToPlainString(es.default.JGjZMs, { answer: a.label });
    return (0, r.jsxs)("div", {
        className: u()(nY.Vs, { [nY.Q9]: s, [nY.RX]: o }),
        "data-conjure-clarification-option": a.id,
        children: [
            (0, r.jsxs)(b.D, {
                className: nY.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => m(a),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(a, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": eu.intl.formatToPlainString(es.default.AQbxhf, { answer: a.label }),
                "aria-disabled": o,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, r.jsxs)("span", {
                        className: nY.$_,
                        children: [
                            null != a.image
                                ? (0, r.jsx)(nZ, {
                                      projectId: n,
                                      attachmentId: a.image.attachment_id,
                                      alt: a.label,
                                      onMeasured: g,
                                  })
                                : (0, r.jsx)("span", { className: nY.Gt }),
                            (0, r.jsx)("span", {
                                className: nY.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, r.jsx)(nr.P, { checked: s, disabled: o })
                                    : (0, r.jsx)(nI.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: nY.pG,
                        children:
                            "" !== (l = null != (t = a.image?.page_url ?? a.image?.url) ? (0, nd.E)(t) : "")
                                ? (function (e) {
                                      let t = e.toLowerCase().split(".");
                                      if (t.length < 2 || /^\d+$/.test(t[t.length - 1]) || e.includes(":")) return e;
                                      let [l, n] = t.slice(-2),
                                          a = t.length > 2 && 2 === n.length && l.length <= 3;
                                      return t.slice(a ? -3 : -2).join(".");
                                  })(l)
                                : a.label,
                    }),
                ],
            }),
            null != x
                ? (0, r.jsx)("span", {
                      className: nY.B4,
                      children: (0, r.jsx)(y.m, {
                          text: eu.intl.string(es.default.HQEXJM),
                          children: (0, r.jsx)(t9.K, {
                              icon: nM.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: o,
                              "aria-label": eu.intl.string(es.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != a.image
                  ? (0, r.jsx)("span", {
                        className: nY.B4,
                        children: (0, r.jsx)(y.m, {
                            text: eu.intl.string(es.default["4/eeDD"]),
                            children: (0, r.jsx)(t9.K, {
                                icon: nT._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => f(a),
                                "aria-label": p,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function n1(e) {
    var t;
    let { projectId: l, question: n, selectedIds: a, disabled: s, reachable: o = !0, onPick: c, own: d } = e,
        m = !0 === n.multi_select,
        { options: f } = n,
        h = f.length > 4 ? "gallery" : "row",
        g = i.useRef(null),
        x = i.useRef(new Map()),
        [p, v] = i.useState(null),
        j = null != p && f.some((e) => e.id === p) ? p : (f.find((e) => a.includes(e.id)) ?? f[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = f.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    n = t.findIndex((t) => t.id === e.id);
                n < 0 ||
                    Promise.all(t.map((e) => (0, el.PK)(l, e.image.attachment_id))).then(
                        (e) => {
                            (0, nR.R)({
                                items: e.map((e, l) => {
                                    let n,
                                        a = x.current.get(t[l].id);
                                    return {
                                        type: "IMAGE",
                                        url: e,
                                        original: e,
                                        alt: t[l].label,
                                        ...(null != a
                                            ? ((n = Math.max(1, 480 / Math.max(a.width, a.height))),
                                              { width: Math.round(a.width * n), height: Math.round(a.height * n) })
                                            : {}),
                                    };
                                }),
                                startingIndex: n,
                                shouldHideMediaOptions: !0,
                                location: "VibegrationsClarificationImageOptions",
                            });
                        },
                        () => {},
                    );
            },
            [f, l],
        ),
        y = i.useCallback(
            (e, t) => {
                let l = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    n = f[l];
                (v(n.id), g.current?.querySelectorAll("[data-conjure-image-option-pick]")[l]?.focus(), m || s || c(n));
            },
            [s, m, c, f],
        ),
        k =
            null == d.image
                ? null
                : ((t = d.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: eu.intl.string(es.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, r.jsxs)("div", {
        className: nY.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, r.jsxs)("div", {
                ref: g,
                className: u()(nY.fF, "gallery" === h ? nY.nV : nY.nM, { [nY.m3]: m }),
                role: m ? "group" : "radiogroup",
                "aria-labelledby": `${n.id}-label`,
                "data-layout": h,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, r.jsx)(
                            n0,
                            {
                                projectId: l,
                                option: e,
                                multi: m,
                                selected: a.includes(e.id),
                                disabled: s,
                                reachable: o,
                                tabbable: m || e.id === j,
                                onPick: (e) => {
                                    (v(e.id), c(e));
                                },
                                onView: b,
                                onArrow: y,
                                onMeasured: (t) => x.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != k
                        ? (0, r.jsx)(
                              n0,
                              {
                                  projectId: l,
                                  option: k,
                                  multi: m,
                                  selected: d.selected,
                                  disabled: s,
                                  reachable: o,
                                  tabbable: !0,
                                  onPick: d.onPick,
                                  onView: () => void 0,
                                  onArrow: () => void 0,
                                  onMeasured: () => void 0,
                                  onRemove: d.onRemove,
                              },
                              k.id,
                          )
                        : null,
                ],
            }),
            (0, r.jsx)(n2, {
                projectId: l,
                own: d,
                disabled: s,
                reachable: o,
                uploadText: eu.intl.string(/\bicons?\b/i.test(n.question) ? es.default.qU4WN6 : es.default.cbMDDB),
            }),
        ],
    });
}
function n2(e) {
    let { projectId: t, own: l, disabled: n, reachable: a, uploadText: s } = e,
        u = i.useRef(null),
        [o, c] = i.useState(!1),
        [d, m] = i.useState(""),
        f = a ? 0 : -1,
        h = l.busy;
    function g() {
        "" !== d.trim() &&
            null == h &&
            l.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, r.jsxs)("div", {
        className: nY.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, r.jsxs)("div", {
                className: nY.QJ,
                children: [
                    (0, r.jsx)(N.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: n_.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: n || "link" === h,
                        onClick: () => u.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    o
                        ? null
                        : (0, r.jsx)(N.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t7.LinkIcon,
                              text: eu.intl.string(es.default["1TgOO+"]),
                              disabled: n || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, r.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: nY.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            var n, a;
                            let r = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""),
                                null != r &&
                                    l.onUpload(
                                        ((n = r.name),
                                        (a = r.type),
                                        (0, Q.Oq)(r.size, a)
                                            ? (0, el.c9)(t, r, n, a)
                                            : Promise.resolve({ errorText: nV(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            o
                ? (0, r.jsxs)("div", {
                      className: nY.vG,
                      children: [
                          (0, r.jsx)("div", {
                              className: nY.Hs,
                              children: (0, r.jsx)(nP.k, {
                                  label: eu.intl.string(es.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: eu.intl.string(es.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), g())
                                          : "Escape" === e.key && (e.stopPropagation(), c(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == h && l.error?.source === "link" ? l.error.text : null,
                                  disabled: n,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: nY.gd,
                              children: [
                                  (0, r.jsx)(N.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eu.intl.string(es.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: n || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, r.jsx)(nu.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: eu.intl.string(es.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            l.error?.source === "upload"
                ? (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      "data-conjure-own-image-error": !0,
                      children: l.error.text,
                  })
                : null,
        ],
    });
}
var n3 = l(29073);
function n4(e) {
    let { option: t, position: l, disabled: n, onPick: a, reachable: s = !0, selected: o } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, r.jsxs)(b.D, {
        className: u()(nb.uK, { [nb.ue]: n, [nb.h4]: !0 === o }),
        onClick: n ? void 0 : () => a(t),
        "aria-label": eu.intl.formatToPlainString(d ? es.default["2p6UFz"] : es.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": n,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, r.jsx)("span", { className: nb.dy, children: (0, r.jsx)(nr.P, { checked: o, disabled: n }) })
                : (0, r.jsx)("span", { className: nb.Gy, "aria-hidden": !0, children: l }),
            (0, r.jsxs)("span", {
                className: nb.qO,
                children: [
                    (0, r.jsx)("span", {
                        className: nb.l8,
                        children: (0, r.jsx)(j.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nb.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, r.jsx)(j.E, {
                              tag: "span",
                              id: c,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            d
                ? (0, r.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: nb.rM,
                      children: eu.intl.string(es.default.zku6r1),
                  })
                : null,
        ],
    });
}
function n6(e) {
    let { projectId: t, question: l, selected: n, disabled: a, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === l.multi_select;
    return nm(l)
        ? (0, r.jsx)(n1, { projectId: t, question: l, selectedIds: n, disabled: a, reachable: i, onPick: s, own: u })
        : (0, r.jsx)(r.Fragment, {
              children: l.options.map((e, t) =>
                  (0, r.jsx)(
                      n4,
                      {
                          option: e,
                          position: t + 1,
                          disabled: a,
                          selected: o ? n.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let n5 = [],
    n7 = [];
function n8(e) {
    let {
            projectId: t,
            question: l,
            draft: n,
            selected: a,
            direction: i,
            disabled: s,
            ownImage: o,
            ownSelected: c,
        } = e,
        d = "" === n.trim() ? null : n,
        m = !0 === l.multi_select;
    return (0, r.jsxs)("div", {
        className: u()(nb.Ge, nb.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            m
                ? (0, r.jsx)(j.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: nb.aK,
                      children: eu.intl.string(es.default.tE8qbz),
                  })
                : null,
            (0, r.jsx)(n6, {
                projectId: t,
                question: l,
                selected: a,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: nh(o, c),
            }),
            nm(l) || !1 === l.allow_custom
                ? null
                : (0, r.jsxs)("div", {
                      className: nb.Xy,
                      children: [
                          (0, r.jsx)("span", {
                              className: nb.Gy,
                              "aria-hidden": !0,
                              children: (0, r.jsx)(ni.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, r.jsx)("span", { className: u()(nb.Pu, nb.es), children: d }),
                      ],
                  }),
        ],
    });
}
function n9(e) {
    var t;
    let { projectId: l, clarification: n, onSubmit: a, onDismiss: s } = e,
        [o, c] = i.useState({}),
        [d, m] = i.useState({}),
        [f, h] = i.useState({}),
        [g, x] = i.useState({}),
        [p, v] = i.useState({}),
        [k, w] = i.useState(!1),
        [A, S] = i.useState(0),
        [C, E] = i.useState(null),
        [I, M] = i.useState(null),
        [T, _] = i.useState(null),
        [R, L] = i.useState(!1),
        D = i.useRef(null),
        [$, F] = i.useState(null),
        z = i.useRef(null),
        O = i.useRef(0),
        U = null == a,
        G = n.questions.length,
        q = Math.min(A, G - 1),
        B = n.questions[q],
        [H, K] = i.useState({ id: B.id, expanded: !1 }),
        V = H.id === B.id && H.expanded,
        [W, X] = i.useState(null),
        J = d[B.id] ?? "",
        Q = !0 === B.multi_select,
        Y = nm(B),
        Z = Q ? (f[B.id] ?? n5) : ((t = o[B.id]), t?.kind === "option" ? [t.optionId] : nf),
        ee = (function (e, t, l) {
            let [n, a] = i.useState({}),
                [r, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = eu.intl.string(es.default.wTsP5l),
                d = i.useCallback((e) => n[e] ?? null, [n]),
                m = i.useCallback(
                    (e) => null != n[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : t[e.id]?.kind === "image"),
                    [t, n, u],
                ),
                f = i.useCallback(
                    (e) => {
                        let t = n[e.id];
                        return null != t && !0 === u[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, n, u],
                ),
                h = i.useCallback(
                    (i, u) => {
                        let d = i.id,
                            f = !0 === i.multi_select,
                            h = n[d] ?? null;
                        if (u) return nh(h, m(i));
                        function g(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function x(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let p = t[d];
                        function v(t) {
                            (a((l) => {
                                let n = l[d];
                                return (
                                    null != n && (0, el.Vm)(e, n.attachment.id).catch(() => void 0), { ...l, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                f ? o((e) => ({ ...e, [d]: !0 })) : l((e) => (e[d] === p ? { ...e, [d]: x(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: r[d]?.busy ?? null,
                            error: r[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? o((e) => ({ ...e, [d]: !0 !== e[d] })) : l((e) => ({ ...e, [d]: x(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, el.Vm)(e, h.attachment.id).catch(() => void 0),
                                    a((e) => {
                                        let { [d]: t, ...l } = e;
                                        return l;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
                                    l((e) => {
                                        if (e[d]?.kind !== "image") return e;
                                        let { [d]: t, ...l } = e;
                                        return l;
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
                                                error: { source: "upload", text: eu.intl.string(es.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, el.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : eu.intl.string(es.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, n, e, m, l, r],
                );
            return { imageFor: d, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(l, o, c),
        et = ee.imageFor(B.id),
        en = ee.selectedFor(B),
        { text: ea, phase: er } = (0, ts.Q)(B.question),
        ei = ea === B.question,
        eo = ei && W?.id === B.id && W.truncated;
    i.useLayoutEffect(() => {
        if (null == $ || V || !ei) return;
        function e() {
            if (null == $) return;
            let e = $.scrollHeight > $.clientHeight + 1;
            X((t) => (t?.id === B.id && t.truncated === e ? t : { id: B.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe($), () => t.disconnect());
    }, [ei, $, B.id, V]);
    let ec = eu.intl.string(V ? eu.t.iTcuma : eu.t.dcl9MQ),
        ed = i.useCallback(
            (e) => {
                if (null == a) return;
                let t = n.questions
                    .map((t, l) => ({ question: t, index: l, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: l, answer: n } = e;
                        return `${l + 1}. ${t.question} \u{2192} ${n.text.trim()}`;
                    })
                    .join("\n");
                if ("" !== t) {
                    let l;
                    a(
                        t,
                        (l = n.questions.flatMap((t) => {
                            let l = e[t.id];
                            if (null == l || "" === l.text.trim()) return [];
                            let n = "option" === l.kind ? [l.optionId] : "multi" === l.kind ? l.optionIds : [],
                                a =
                                    "custom" === l.kind
                                        ? l.text.trim()
                                        : "multi" === l.kind || "entities" === l.kind
                                          ? l.custom
                                          : void 0,
                                r = "entities" === l.kind ? l.entities : [],
                                i = "entities" === l.kind && r.length > 0 ? l.guildId : void 0,
                                s = "image" === l.kind || "multi" === l.kind ? l.attachment : void 0;
                            return [
                                {
                                    question_id: t.id,
                                    option_ids: n,
                                    ...(null != a && "" !== a ? { custom: a } : {}),
                                    ...(null != s ? { attachment_id: s.id } : {}),
                                    ...(r.length > 0 ? { entities: r } : {}),
                                    ...(null != i ? { guild_id: i } : {}),
                                },
                            ];
                        })).length > 0
                            ? { clarification_id: n.id, answers: l }
                            : null,
                        n.questions.flatMap((t) => {
                            let l = e[t.id];
                            return null == l || "" === l.text.trim()
                                ? []
                                : "image" === l.kind || ("multi" === l.kind && null != l.attachment)
                                  ? [l.attachment]
                                  : [];
                        }),
                    );
                }
            },
            [n, a],
        ),
        em = i.useCallback(
            (e, t) => {
                O.current += 1;
                let l = O.current;
                (E({ direction: t, moves: l }),
                    M({ question: B, draft: J, selected: Z, ownImage: et, ownSelected: en, direction: t, moves: l }),
                    L(!0),
                    S(e));
            },
            [J, et, en, B, Z],
        ),
        ef = i.useCallback(() => {
            let e = D.current,
                t = z.current;
            null != e && null != t && _({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = D.current,
            t = z.current;
        if (null == e || null == t) return;
        ef();
        let l = new ResizeObserver(ef);
        return (l.observe(e), l.observe(t), () => l.disconnect());
    }, [ef]);
    let eh = C?.moves;
    i.useEffect(() => {
        if (null == eh) return;
        let e = setTimeout(() => M(null), 400),
            t = setTimeout(() => L(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [eh]);
    let eg = i.useCallback(
            (e) => {
                if (U) return;
                let t = { ...o, [B.id]: e };
                c(t);
                let l =
                    q < n.questions.length - 1
                        ? q + 1
                        : (function (e, t, l) {
                              let { questions: n } = e;
                              for (let e = 1; e <= n.length; e++) {
                                  let a = (l + e) % n.length,
                                      r = t[n[a].id];
                                  if (null == r || "" === r.text.trim()) return a;
                              }
                              return null;
                          })(n, t, q);
                null == l ? ed(t) : em(l, l < q ? "back" : "forward");
            },
            [o, n, U, q, B.id, ed, em],
        ),
        ex = i.useCallback(() => {
            U || 0 === q || em(q - 1, "back");
        }, [U, q, em]),
        ep = q > 0 && !U,
        ev = i.useCallback(
            (e) => {
                m((e) => ({ ...e, [B.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                Y ? U || c((e) => ({ ...e, [B.id]: t })) : eg(t);
            },
            [U, Y, B.id, eg],
        ),
        { multiPartFor: ej } = ee,
        eb = i.useMemo(() => {
            var e;
            let t, l;
            return Q
                ? ((e = ej(B)),
                  (t = J.trim()),
                  (l = B.options.filter((e) => Z.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: Z,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...l, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [J, Q, ej, B, Z]),
        ey = g[B.id] ?? n7,
        ek = i.useMemo(() => {
            var e, t;
            let l;
            return null != B.input
                ? ((e = B.input),
                  (t = p[B.id]),
                  (l = J.trim()),
                  {
                      kind: "entities",
                      entities: ey,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === l ? {} : { custom: l }),
                      text: [...ey.map((t) => `${nc[e]}${t.name}`), ...("" === l ? [] : [l])].join(", "),
                  })
                : null;
        }, [J, p, ey, B.id, B.input]),
        ew = i.useCallback(
            (e, t) => {
                (x((t) => ({ ...t, [B.id]: e })), v((e) => ({ ...e, [B.id]: t })));
            },
            [B.id],
        ),
        eN = i.useCallback(() => w(!0), []),
        eA = i.useCallback(() => w(!1), []),
        eS = ee.controlsFor(B, U),
        eC = i.useCallback(() => {
            if (null != ek) {
                "" !== ek.text && eg(ek);
                return;
            }
            if (null != eb) {
                "" !== eb.text && eg(eb);
                return;
            }
            let e = J.trim();
            "" !== e && eg({ kind: "custom", text: e });
        }, [J, eb, ek, eg]),
        [eE, eI] = i.useState(!1),
        [eM, eT] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eI(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let e_ = i.useCallback(() => {
            null != s && (eT(!0), setTimeout(s, 150));
        }, [s]),
        eP = i.useMemo(
            () =>
                null != ek
                    ? "" !== ek.text
                        ? ek
                        : null
                    : null != eb
                      ? "" !== eb.text
                          ? eb
                          : null
                      : "" !== J.trim()
                        ? { kind: "custom", text: J.trim() }
                        : (o[B.id] ?? null),
            [o, J, eb, ek, B.id],
        ),
        eR = null != eP && !U,
        eL = q === G - 1,
        eD = i.useCallback(() => {
            null == eP || U || eg(eP);
        }, [U, eP, eg]),
        e$ = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tL.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tL.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tL.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ep
                            ? (e.preventDefault(), ex())
                            : "ArrowRight" === e.key && eR && (e.preventDefault(), eD())));
            },
            [ep, eR, ex, eD],
        ),
        eF = Y
            ? null
            : (0, r.jsxs)("div", {
                  className: nb.Xy,
                  children: [
                      (0, r.jsx)("span", {
                          className: nb.Gy,
                          "aria-hidden": !0,
                          children: (0, r.jsx)(ni.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, r.jsx)(ns.y, {
                          value: J,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              m((e) => ({ ...e, [B.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eC());
                          },
                          placeholder: eu.intl.string(es.default["tOC+tn"]),
                          "aria-label": eu.intl.formatToPlainString(es.default["4JeYPB"], { question: B.question }),
                          disabled: U,
                          rows: 1,
                          className: nb.Pu,
                          "data-conjure-clarification-other": B.id,
                      }),
                  ],
              });
    return (0, r.jsxs)("section", {
        className: u()(nb.$O, { [nb.fI]: eE && !eM, [nb.Oh]: eM }),
        role: "dialog",
        "aria-label": B.question,
        "data-conjure-clarification": n.id,
        "data-state": U ? "inert" : "open",
        "data-question-expanded": V ? "true" : void 0,
        "data-picker-open": k && !R ? "true" : void 0,
        "data-step": q,
        tabIndex: -1,
        onKeyDown: e$,
        children: [
            (0, r.jsxs)("div", {
                className: nb.rf,
                style: null == T ? void 0 : { height: T.heading + T.rows },
                "data-moving": R ? "" : void 0,
                children: [
                    (0, r.jsxs)("div", {
                        ref: D,
                        className: nb.wx,
                        children: [
                            (0, r.jsx)(j.E, {
                                ref: F,
                                tag: "span",
                                id: `${B.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: V ? void 0 : 5,
                                className: u()(n3.TK, nb.R_, { [nb.TB]: "exit" === er, [nb.JU]: "enter" === er }),
                                children: ea,
                            }),
                            eo || V
                                ? (0, r.jsx)("div", {
                                      className: n3.Q7,
                                      children: (0, r.jsx)(y.m, {
                                          text: ec,
                                          children: (0, r.jsx)(t9.K, {
                                              icon: V ? ta.t : tq.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => K({ id: B.id, expanded: !V }),
                                              "aria-label": ec,
                                              "aria-controls": `${B.id}-label`,
                                              "aria-expanded": V,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, r.jsx)(b.D, {
                                      className: u()(n3.gb, n3.Q7),
                                      onClick: e_,
                                      "aria-label": eu.intl.string(es.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, r.jsx)(P.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: nb.Cg,
                        style: null == T ? void 0 : { insetBlockStart: T.heading },
                        children: (0, r.jsxs)("div", {
                            className: nb.I,
                            children: [
                                (0, r.jsxs)("div", {
                                    ref: z,
                                    className: nb.Ge,
                                    role: "group",
                                    "aria-labelledby": `${B.id}-label`,
                                    "data-direction": C?.direction,
                                    "data-parity": null == C ? void 0 : C.moves % 2,
                                    children: [
                                        Q
                                            ? (0, r.jsx)(j.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: nb.aK,
                                                  children: eu.intl.string(es.default.tE8qbz),
                                              })
                                            : null,
                                        (0, r.jsx)(n6, {
                                            projectId: l,
                                            question: B,
                                            selected: Z,
                                            disabled: U,
                                            onPick: (e) =>
                                                Q
                                                    ? h((t) => {
                                                          var l, n;
                                                          let a;
                                                          return {
                                                              ...t,
                                                              [B.id]:
                                                                  ((l = t[B.id] ?? n5),
                                                                  (n = e.id),
                                                                  (a = l.includes(n)
                                                                      ? l.filter((e) => e !== n)
                                                                      : [...l, n]),
                                                                  B.options
                                                                      .filter((e) => a.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ev(e),
                                            own: eS,
                                        }),
                                        null != B.input
                                            ? (0, r.jsx)(nC, {
                                                  projectId: l,
                                                  question: B,
                                                  value: ey,
                                                  disabled: U,
                                                  onChange: ew,
                                                  onFocus: eN,
                                                  onBlur: eA,
                                                  fallback: !1 === B.allow_custom ? eF : null,
                                              })
                                            : null,
                                        !1 === B.allow_custom ? null : eF,
                                    ],
                                }),
                                null == I
                                    ? null
                                    : (0, r.jsx)(
                                          n8,
                                          {
                                              projectId: l,
                                              question: I.question,
                                              draft: I.draft,
                                              selected: I.selected,
                                              ownImage: I.ownImage,
                                              ownSelected: I.ownSelected,
                                              direction: I.direction,
                                              disabled: U,
                                          },
                                          I.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            G > 1 || Q || Y || null != B.input
                ? (0, r.jsxs)("div", {
                      className: n3.qr,
                      children: [
                          (0, r.jsx)(j.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  G > 1
                                      ? eu.intl.formatToPlainString(es.default.yzYUjq, { index: q + 1, total: G })
                                      : null,
                          }),
                          (0, r.jsxs)("div", {
                              className: n3.zt,
                              children: [
                                  ep
                                      ? (0, r.jsx)(nu.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: eu.intl.string(es.default.Pk5lfA),
                                            onClick: ex,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, r.jsx)(N.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eu.intl.string(eL ? eu.t.geKm7t : es.default.w1nRmT),
                                      disabled: !eR,
                                      onClick: eD,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": eL ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var ae = l(572253),
    at = l(411236);
function al(e) {
    let { projectId: t, request: l, onDismiss: n } = e,
        a = null != l.note && "" !== l.note ? l.note : eu.intl.string(es.default.XuOf5s);
    return (0, r.jsx)(ae.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: l, saving: i, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let c = (0, r.jsx)(N.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !l,
                text: eu.intl.string(es.default.A7dQd9),
            });
            return null == n
                ? (0, r.jsxs)("form", {
                      className: at.Mk,
                      onSubmit: o,
                      children: [
                          (0, r.jsx)(j.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: eu.intl.string(es.default["jZjP+I"]),
                          }),
                          (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: a,
                          }),
                          t,
                          (0, r.jsx)("div", { className: at.p0, children: c }),
                      ],
                  })
                : (0, r.jsxs)("form", {
                      className: u()(n3.nd, n3.jx),
                      "aria-label": eu.intl.string(es.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, r.jsxs)("div", {
                              className: n3.wx,
                              children: [
                                  (0, r.jsx)(j.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: n3.TK,
                                      children: eu.intl.string(es.default["jZjP+I"]),
                                  }),
                                  (0, r.jsx)(b.D, {
                                      className: u()(n3.gb, n3.Q7),
                                      onClick: n,
                                      "aria-label": eu.intl.string(es.default["iq+Pte"]),
                                      children: (0, r.jsx)(P.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: at.DQ,
                              children: [
                                  (0, r.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: a,
                                  }),
                                  t,
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: n3.qr,
                              children: (0, r.jsx)("div", { className: n3.zt, children: c }),
                          }),
                      ],
                  });
        },
    });
}
var an = l(935208),
    aa = l(435558),
    ar = l.n(aa);
let ai = "VibegrationsComposerDrafts";
function as() {
    return lP.w.get(ai) ?? {};
}
let au = new Map(),
    ao = ar().throttle(() => {
        if (0 === au.size) return;
        let e = as();
        for (let [t, l] of au) "" === l ? delete e[t] : (e[t] = l);
        (au.clear(), lP.w.set(ai, e));
    }, 1e3);
class ac extends m.Ay.Store {
    getDraft(e) {
        let t = au.get(e);
        return null != t ? t : (as()[e] ?? "");
    }
}
let ad = new ac(nL.h, {
    LOGOUT: function () {
        return (au.clear(), ao.cancel(), lP.w.remove(ai), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (au.set(t, l), ao(), "" === l && ao.flush(), !1);
    },
});
function am(e) {
    return "" !== ad.getDraft(e).trim();
}
var af = l(29080),
    ah = l(46054),
    ag = l(615839);
function ax(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : eu.intl.string(es.default.KcFvbo);
}
function ap(e) {
    var t;
    let l,
        n,
        { steps: a, content: r, hasProposal: i, hasAttachments: s } = e,
        u = (0, lW.B4)(a),
        o = u.filter((e) => "message" === e.type).at(-1),
        c =
            !i &&
            null != o &&
            ((t = o.content),
            (l = t.trim()),
            (n = r.trim()),
            "" !== l && "" !== n && (l === n || (t.length >= 16e3 && n.startsWith(l))))
                ? o
                : null,
        d = u.filter((e) => e !== c),
        m = d.filter((e) => "message" === e.type).at(-1),
        f = !i && "" !== r.trim();
    return {
        streamed: d,
        lastStreamedMessage: m,
        replyKey: c?.key,
        showsClosingMessage: f,
        closingContent: f ? r.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: s, showsClosingMessage: f, endsOnStreamedMessage: (0, lW.Lf)(a) }),
    };
}
(l(134528), l(947204));
var av = l(62617);
let aj = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ab = {
        snail: () => es.default.ABeVsS,
        goat: () => es.default.dhXay8,
        frog: () => es.default.SHeweG,
        bunny: () => es.default.FytFE1,
        cat: () => es.default["5c+sHs"],
        caterpillar: () => es.default["/FYcne"],
        butterfly: () => es.default["Ib/AxK"],
        dog: () => es.default.zDjBR1,
        spider: () => es.default["6sxyrN"],
        bee: () => es.default.cVtefg,
        bot: () => es.default.MjCw0v,
    },
    ay = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, av.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, av.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, av.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, av.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, av.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, av.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, av.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, av.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, av.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, av.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, av.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, av.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, av.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, av.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, av.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, av.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, av.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, av.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, av.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, av.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, av.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, r.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, av.Z)(),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function ak(e) {
    return { ...ay[e], name: eu.intl.string(ab[e]()) };
}
function aw(e) {
    return aj.includes(e) ? ak(e) : void 0;
}
function aN(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % aj.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, aj[(t + l) % aj.length]);
            }),
            n
        );
    })(e))
        t.set(l, ak(n));
    return t;
}
var aA = l(60160),
    aS = l(16634);
function aC(e) {
    let { projectId: t, lane: l, Illocon: n, tint: a, name: i, connectsDown: s } = e,
        u = l.task,
        o = "running" === u.status,
        c = (0, lW.SY)(l.steps),
        d = o
            ? null != c
                ? (0, lW.WQ)(c)
                : ax(u)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ax(e));
                  switch (e.status) {
                      case "failed":
                          return eu.intl.formatToPlainString(es.default.YrVgOf, { task: t });
                      case "cancelled":
                          return eu.intl.formatToPlainString(es.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return eu.intl.formatToPlainString(es.default["++9woZ"], {
                                  task: t,
                                  duration: (0, ag.MB)(e.durationMs),
                              });
                          return eu.intl.formatToPlainString(es.default.nmI9Uh, { task: t });
                      default:
                          return eu.intl.formatToPlainString(es.default.nmI9Uh, { task: t });
                  }
              })(u),
        m = o ? c : void 0,
        f =
            u.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, r.jsx)("ol", {
                                    className: nl.dO,
                                    children: l.steps.map((e) =>
                                        (0, r.jsx)(
                                            aS.A,
                                            { projectId: t, node: e, presentation: "detail", active: o && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          u.detail.map((e, t) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: nl.iq,
                                      children: (0, r.jsx)(aA.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, r.jsx)(lY.A, {
        glyph: (0, r.jsx)(lZ.u, {
            asset: (0, r.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: ax(u),
            position: "left",
            children: (0, r.jsx)("span", {
                className: nl.nC,
                children: (0, r.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: o,
        settled: !o,
        tint: a,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
var aE = l(998445),
    aI = l(643210),
    aM = l(648127),
    aT = l(372795),
    a_ = l(163897);
let aP = "conjure-browser-viewer";
function aR(e) {
    let { projectId: t, sessionIds: l } = e,
        n = (0, m.yK)(
            [aI.A],
            () =>
                l.flatMap((e) => {
                    let l = aI.A.getTab(t, e);
                    return null == l ? [] : [l];
                }),
            [t, l],
        );
    if (0 === n.length) return null;
    let a = n.map((e) => {
        let { session: t } = e;
        return t.id;
    });
    return (0, r.jsx)("ul", {
        className: a_.kR,
        "aria-label": eu.intl.string(es.default.Uvkr1G),
        children: n.map((e) =>
            (0, r.jsx)("li", { children: (0, r.jsx)(aL, { projectId: t, tab: e, sessionIds: a }) }, e.session.id),
        ),
    });
}
function aL(e) {
    let { projectId: t, tab: n, sessionIds: a } = e,
        [s, o] = (function () {
            let [e, t] = i.useState(null),
                [l, n] = i.useState(!1);
            return (
                i.useEffect(() => {
                    if (null == e) return;
                    let t = new IntersectionObserver(
                        (e) => {
                            let [t] = e;
                            return n(t?.isIntersecting ?? !1);
                        },
                        { rootMargin: "200px" },
                    );
                    return (t.observe(e), () => t.disconnect());
                }, [e]),
                [t, l]
            );
        })(),
        c = (0, te.useHasModalOpen)(aP),
        [d, m] = i.useState(!1),
        f = i.useCallback((e, t) => m(t), []),
        { ended: h } = n,
        g = (0, aM.i)(n.session);
    return (0, r.jsxs)(b.D, {
        innerRef: s,
        className: u()(a_.Nr, h && a_.Xj),
        onClick: () => {
            var e;
            return (
                (e = n.session.id),
                void (0, te.openModalLazy)(
                    async () => {
                        let { default: n } = await Promise.all([
                            l.e("459368"),
                            l.e("513843"),
                            l.e("501962"),
                            l.e("531527"),
                        ]).then(l.bind(l, 273594));
                        return (l) => (0, r.jsx)(n, { ...l, projectId: t, sessionId: e, sessionIds: a });
                    },
                    { modalKey: aP },
                )
            );
        },
        "aria-label": eu.intl.formatToPlainString(es.default.G3a822, { title: g }),
        children: [
            (0, r.jsxs)("div", {
                className: a_.Gt,
                children: [
                    (0, r.jsx)(aT.A, {
                        projectId: t,
                        sessionId: n.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || h,
                        className: a_.Ji,
                        "aria-label": eu.intl.formatToPlainString(es.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, r.jsx)("div", {
                              className: a_.qf,
                              children: (0, r.jsx)(aE.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, r.jsx)("div", {
                              className: a_.HS,
                              children: (0, r.jsx)(j.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: eu.intl.string(es.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("span", {
                className: a_.pG,
                children: [
                    (0, r.jsx)("span", { className: u()(a_.W9, h && a_.oM) }),
                    (0, r.jsx)(j.E, {
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
var aD = l(268409);
let a$ = new WeakMap(),
    aF = new WeakMap();
function az(e) {
    let { projectId: t, steps: l, tree: n, segment: a } = e,
        s = i.useMemo(
            () =>
                (function (e, t) {
                    let l = new Map();
                    for (let t of [...e.steps, ...e.tasks.flatMap((e) => e.steps)])
                        for (let e of t.browserSessions) l.has(e) || l.set(e, t.segment);
                    return [...l]
                        .filter((e) => {
                            let [, l] = e;
                            return null == t || l === t;
                        })
                        .map((e) => {
                            let [t] = e;
                            return t;
                        });
                })(n, a),
            [n, a],
        ),
        u = (0, m.yK)(
            [ej.Ay],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = a$.get(e);
                    if (null != t) return t;
                    let l = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = aF.get(e);
                            if (null == t) {
                                let l = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) l.push(e);
                                ((t = l), aF.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            l.set(e, t.steps);
                    return (a$.set(e, l), l);
                })(ej.Ay.getMessages(t));
                return s.filter((t) => e.get(t) === l);
            },
            [s, t, l],
        );
    return 0 === u.length
        ? null
        : (0, r.jsx)("li", { className: aD.h, children: (0, r.jsx)(aR, { projectId: t, sessionIds: u }) });
}
var aO = l(469393);
function aU(e) {
    let { proposal: t, onRestore: l } = e,
        n = (0, tl.lG)(t.authored_at);
    return (0, r.jsx)(l1, {
        title: eu.intl.string(es.default["t+b0rz"]),
        children: (0, r.jsxs)("div", {
            className: aO.r,
            children: [
                (0, r.jsxs)("div", {
                    className: aO.z,
                    children: [
                        (0, r.jsx)(j.E, { variant: "text-md/medium", children: t.subject }),
                        null != n.relative
                            ? (0, r.jsx)(j.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: n.absolute ?? void 0,
                                  children: n.relative,
                              })
                            : null,
                    ],
                }),
                null != l
                    ? (0, r.jsx)(N.$, {
                          variant: "secondary",
                          size: "sm",
                          text: eu.intl.string(es.default.H8Jfhu),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
var aG = l(231483),
    aq = l(687966),
    aB = l(632015),
    aH = l(323384),
    aK = l(633018),
    aV = l(430392),
    aW = l(885574);
let aX = {
    automod: es.default.DnWMLj,
    overlay: es.default.liTNf3,
    widget: es.default["EswAi+"],
    activity: eu.t.IC5Ann,
    commands: es.default.w7JaEP,
    chat_bot: es.default["5QSvrP"],
    bot: es.default.VFWfz1,
};
var aJ = l(176999),
    aQ = (((n = {}).IMAGE = "image"), n),
    aY = (((a = {}).PRIVATE = "private"), (a.PUBLIC = "public"), a),
    aZ = l(773669);
let a0 = [],
    a1 = {};
function a2(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function a3(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aQ.IMAGE,
        visibility: aY.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var a4 = l(127258),
    a6 = l(587895),
    a5 = l(320095),
    a7 = l(963852),
    a8 = l(95701),
    a9 = l(889227),
    re = l(155718);
let rt = ["command", "user_command", "message_command", "message"],
    rl = new Set([re.kc.CHAT, re.kc.USER, re.kc.MESSAGE]);
function rn(e) {
    return e.type ?? re.kc.CHAT;
}
function ra(e) {
    return "launch" !== e.kind && rl.has(rn(e));
}
function rr(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function ri(e, t) {
    let l = rt.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        n = [...l.filter((e) => !rr(e)), ...l.filter(rr)].slice(0, 3);
    for (let a of t || 1 === l.length ? e : []) {
        if (n.length >= 3) break;
        n.includes(a) || rr(a) || n.push(a);
    }
    return rt.flatMap((t) => e.filter((e) => e.kind === t && n.includes(e)));
}
let rs = new a8.nA({ id: "1337", guild_id: "1337", type: ep.rbe.GUILD_TEXT, name: "preview" });
function ru(e, t) {
    let {
            bot: l = !1,
            discriminator: n = "0000",
            enabled: a = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = (0, m.bG)([tX.default], () => tX.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            a && r?.username !== t && (0, tQ.nj)(new a9.A({ id: e, username: t, discriminator: n, bot: l }));
        }, [a, r, e, t, n, l]),
        r
    );
}
let ro = /^@\S+/;
var rc = l(628284),
    rd = l(97808),
    rm = l(778712),
    rf = l(809115),
    rh = l(486020),
    rg = l(200700);
let rx = {
        alert: { label: () => eu.intl.string(es.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => eu.intl.string(es.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => eu.intl.string(es.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => eu.intl.string(es.default.RGzFNK), blockedStyle: !1 },
    },
    rp = {
        blocked: { label: () => eu.intl.string(es.default.YdnZ8q), tone: "red" },
        alert: { label: () => eu.intl.string(es.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => eu.intl.string(es.default.RGzFNK), tone: "green" },
    },
    rv = ["blocked", "alert", "allowed"],
    rj = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var rb = l(984097),
    ry = l(13673);
let rk = { blocked: aG.ShieldIcon, alert: t3.BellIcon, allowed: rc.y },
    rw = {
        blurple: { text: "text-brand", icon: L.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: L.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: L.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function rN(e) {
    var t, l;
    let n,
        a,
        { example: i } = e,
        s =
            "" ===
            (a = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : eu.intl.formatToPlainString(eu.t["3LYql6"], {
                          duration:
                              ((l = t.timeout_seconds),
                              null != (n = (0, rg.getFriendlyDurationString)(l))
                                  ? n
                                  : l % 604800 == 0
                                    ? eu.intl.formatToPlainString(eu.t.EmoBD2, { weeks: l / 604800 })
                                    : l % 86400 == 0
                                      ? eu.intl.formatToPlainString(eu.t["k2UNz+"], { days: l / 86400 })
                                      : l % 3600 == 0
                                        ? eu.intl.formatToPlainString(eu.t.xCjYxK, { hours: l / 3600 })
                                        : l % 60 == 0
                                          ? eu.intl.formatToPlainString(eu.t.opVZ9q, { mins: l / 60 })
                                          : eu.intl.formatToPlainString(eu.t["4zv/jq"], { secs: l })),
                      }),
                i.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : a;
    return null == s
        ? null
        : (0, r.jsx)(j.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function rA(e) {
    var t;
    let { example: l } = e,
        { label: n, blockedStyle: a } = rx[l.outcome];
    return (0, r.jsxs)("li", {
        className: u()(rb.nM, { [u()(rb.HV, ry.DX)]: a }),
        children: [
            (0, r.jsx)(k.A, { children: `${n()}: ` }),
            (0, r.jsx)("span", {
                className: rb.my,
                children: (0, r.jsx)(rd.eu, {
                    src: (0, rh.AE)(void 0, void 0),
                    size: rm._3.SIZE_24,
                    "aria-label": eu.intl.string(es.default["1yI0xV"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: rb.fw,
                children: [
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = l.content), ah.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, r.jsx)(rN, { example: l }),
                ],
            }),
        ],
    });
}
function rS(e) {
    let { group: t } = e,
        l = i.useId(),
        n = rp[t.section],
        a = rk[t.section],
        s = rw[n.tone];
    return (0, r.jsxs)("div", {
        className: rb.uW,
        children: [
            (0, r.jsxs)("div", {
                className: rb.bV,
                children: [
                    (0, r.jsx)(a, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, r.jsx)(j.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: rb.a9,
                        children: n.label(),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: rb.Ge,
                "aria-labelledby": l,
                children: t.examples.map((e, t) => (0, r.jsx)(rA, { example: e }, t)),
            }),
        ],
    });
}
function rC() {
    let { avatarSrc: e, eventHandlers: t } = (0, rf.a)(!0);
    return (0, r.jsx)("span", {
        className: rb.Gy,
        ...t,
        children: (0, r.jsx)(rd.eu, { src: e, size: rm._3.SIZE_16, "aria-label": eu.intl.string(eu.t.hG1StD) }),
    });
}
function rE(e) {
    var t;
    let { automod: l } = e;
    return (0, r.jsx)("div", {
        className: rb.K1,
        children: ((t = l.examples),
        rv
            .map((e) => ({ section: e, examples: t.filter((t) => rj[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, r.jsx)(rS, { group: e }, e.section)),
    });
}
var rI = l(460905),
    rM = l(110384),
    rT = l(763754),
    r_ = l(217424),
    rP = l(194085),
    rR = l(20851),
    rL = l(692508),
    rD = l(798819);
function r$(e) {
    let { item: t } = e,
        { iconLeft: l, icon: n } = t;
    return (0, r.jsxs)("div", {
        className: u()(rD.item, rD.labelContainer, rD.colorDefault, {
            [rD.focused]: !0 === t.highlighted,
            [rD.disabled]: !0 === t.muted,
        }),
        children: [
            null != l
                ? (0, r.jsx)("div", {
                      className: rD.iconContainerLeft,
                      children: (0, r.jsx)(l, { color: "currentColor", className: rD.icon }),
                  })
                : null,
            (0, r.jsx)("div", { className: u()(rD.label, rL.Gy), children: t.label }),
            null != n
                ? (0, r.jsx)("div", {
                      className: rD.iconContainer,
                      children: (0, r.jsx)(n, { color: "currentColor", className: rD.icon }),
                  })
                : null,
        ],
    });
}
function rF(e) {
    let { target: t, commandName: l, appIconSrc: n } = e,
        a = i.useMemo(
            () =>
                null != n
                    ? (e) => {
                          let { className: t } = e;
                          return (0, r.jsx)("img", { src: n, alt: "", className: u()(t, rL.ak) });
                      }
                    : void 0,
            [n],
        ),
        s =
            "message" === t
                ? { label: eu.intl.string(eu.t["5IEsGx"]), icon: rM.W, muted: !0 }
                : { label: eu.intl.string(eu.t.LYju5J), muted: !0 };
    return (0, r.jsx)("div", {
        className: u()(rD.menu, rL.MK),
        "aria-hidden": !0,
        children: (0, r.jsxs)("div", {
            className: rD.scroller,
            children: [
                (0, r.jsx)(r$, { item: s }),
                (0, r.jsx)("div", { className: rD.separator }),
                (0, r.jsx)(r$, { item: { label: l, iconLeft: a, highlighted: !0 } }),
            ],
        }),
    });
}
var rz = l(381941);
function rO() {}
function rU(e) {
    let t,
        l,
        n,
        a,
        s,
        o,
        c,
        d,
        f,
        h,
        g,
        { projectId: x, exchanges: p } = e,
        {
            items: v,
            botIcon: j,
            appIconSrc: b,
        } = ((t = (0, m.bG)([tX.default], () => tX.default.getCurrentUser())),
        (l = (0, m.bG)([eA.Ay], () => eA.Ay.getProject(x))),
        (n = l?.application_id),
        (a = (0, m.bG)([a6.A], () => a6.A.getApplication(n)?.getIconURL(80) ?? null, [n])),
        (s = l?.name ?? eu.intl.string(es.default.JEYq8M)),
        (o = (0, m.bG)([tX.default], () => (null != n ? tX.default.getUser(n) : void 0), [n])),
        (d = ru("31337", s, { bot: !0, enabled: !(c = o?.bot === !0) })),
        (f = c ? o : d),
        (h = ru("31338", eu.intl.string(es.default["9iAOsw"]), { discriminator: "0003" })),
        (g = ru("31339", (0, tJ.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == f || null == h
                        ? []
                        : (function (e, t, l) {
                              var n, a, r;
                              let { bot: i, currentUser: s, viewer: u, member: o } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: l,
                                          messageType: n,
                                          menu: a,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      r = String(c.length + 1),
                                      i = (0, a5.rh)({
                                          ...(0, a7.Ay)({
                                              channelId: rs.id,
                                              content: e,
                                              author: t,
                                              type: n ?? ep.lAJ.DEFAULT,
                                          }),
                                          id: r,
                                          state: ep.cmJ.SENT,
                                          ...(null != l
                                              ? {
                                                    interaction: {
                                                        id: r,
                                                        name: l,
                                                        type: a4.G.APPLICATION_COMMAND,
                                                        user: (0, a7.Vi)(s),
                                                    },
                                                }
                                              : {}),
                                      });
                                  c.push({ key: r, record: i, isCommandReply: null != l, menu: a });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          d(t.bot, i, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: ep.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? l.memberMessage : l.targetMessage, e ? o : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: ep.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((n = t.user), n.trim().replace(ro, `<@${i.id}>`)), s),
                                              d(((a = t.bot), a.includes("<@") ? a : `<@${u.id}> ${a}`), i));
                                          break;
                                      case "event":
                                          d(((r = t.bot), r.split(`@${o.username}`).join(`<@${o.id}>`)), i);
                                  }
                              return c;
                          })(
                              p,
                              { bot: f, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: eu.intl.string(es.default["y+QYes"]),
                                  memberMessage: eu.intl.string(es.default.BUTRDc),
                              },
                          ),
                [p, f, t, g, h],
            ),
            botIcon: a,
            appIconSrc: a ?? f?.getAvatarURL(void 0, 80),
        });
    return 0 === v.length
        ? null
        : (0, r.jsx)("ol", {
              className: u()(rL.TE, `group-spacing-${rz.ES}`),
              children: v.map((e) => {
                  let { key: t, record: l, isCommandReply: n, menu: a } = e;
                  return (0, r.jsxs)(
                      "li",
                      {
                          className: null != a ? rL.Rz : void 0,
                          children: [
                              (0, r.jsx)(rR.A, {
                                  message: l,
                                  channel: rs,
                                  author: (0, rT.FT)(l.author, rs),
                                  isGroupStart: !0,
                                  avatarOverride: l.author.bot ? (j ?? void 0) : void 0,
                                  childrenExecutedCommand: n ? (0, r.jsx)(r_.A, { message: l, channel: rs }) : void 0,
                                  usernameClassName: a?.target === "user" ? rL.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              a?.target === "message"
                                  ? (0, r.jsx)("div", {
                                        className: rL.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)(rP.Ay, {
                                            children: [
                                                (0, r.jsx)(rP.qv, {
                                                    label: eu.intl.string(eu.t.lfIHs4),
                                                    icon: rI.n,
                                                    onClick: rO,
                                                }),
                                                (0, r.jsx)(rP.qv, {
                                                    label: eu.intl.string(eu.t["5IEsGx"]),
                                                    icon: rM.W,
                                                    onClick: rO,
                                                }),
                                                (0, r.jsx)(rP.qv, {
                                                    label: eu.intl.string(eu.t["UKOtz+"]),
                                                    icon: le.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: rO,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != a
                                  ? (0, r.jsx)("div", {
                                        className: "user" === a.target ? rL.ET : rL.je,
                                        inert: !0,
                                        children: (0, r.jsx)(rF, {
                                            target: a.target,
                                            commandName: a.commandName,
                                            appIconSrc: b,
                                        }),
                                    })
                                  : null,
                          ],
                      },
                      t,
                  );
              }),
          });
}
var rG = l(633075),
    rq = l(946356),
    rB = l(58216),
    rH = l(27399);
function rK(e) {
    let { applicationId: t, rendererProps: l } = e,
        n = (0, m.bG)([tX.default], () => tX.default.getCurrentUser()),
        a = i.useMemo(() => new rG.R({ applicationId: t }), [t]);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: rH.H,
              children: (0, r.jsx)(rq.A.Overlay, {
                  className: rH.w,
                  children: (0, r.jsx)(rB.A, {
                      user: n,
                      widget: a,
                      allowEditing: !1,
                      disableInteraction: !0,
                      interactiveLinks: !0,
                      disableCTA: !0,
                      rendererProps: l,
                  }),
              }),
          });
}
var rV = l(443863);
let rW = {
    automod: aG.ShieldIcon,
    overlay: aq.GameControllerIcon,
    widget: aB.f,
    activity: aH.k,
    commands: aK.k,
    chat_bot: h.ChatIcon,
    bot: aV.RobotIcon,
};
function rX(e) {
    let { label: t, icon: l, info: n, children: a } = e;
    return (0, r.jsxs)("section", {
        className: rV.uW,
        children: [
            (0, r.jsxs)("span", {
                className: rV.a9,
                children: [
                    l,
                    (0, r.jsx)(j.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    n,
                ],
            }),
            a,
        ],
    });
}
function rJ(e) {
    let { text: t, label: l } = e;
    return (0, r.jsx)(y.m, {
        text: t,
        children: (0, r.jsx)(b.D, {
            className: rV.bk,
            "aria-label": l,
            children: (0, r.jsx)(aW.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function rQ(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, r.jsx)(rX, {
              label: t,
              children: (0, r.jsx)("div", {
                  className: rV.Ip,
                  children: l.map((e) =>
                      (0, r.jsx)(
                          "span",
                          {
                              className: rV.jw,
                              children: (0, r.jsx)(j.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  tag: "span",
                                  children: e
                                      .split("_")
                                      .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                      .join(" "),
                              }),
                          },
                          e,
                      ),
                  ),
              }),
          });
}
function rY(e) {
    let { tags: t } = e;
    return (0, r.jsx)("span", {
        className: rV.K2,
        children: t.map((e) => {
            let t = rW[e];
            return (0, r.jsxs)(
                "span",
                {
                    className: rV.L6,
                    children: [
                        (0, r.jsx)(t, {
                            size: "custom",
                            width: 16,
                            height: 16,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(j.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            tag: "span",
                            children: eu.intl.string(aX[e]),
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
function rZ(e) {
    let { projectId: t, design: l } = e,
        { id: n } = l,
        { src: a, gone: s, handleError: u } = nQ(t, n),
        o = eu.intl.string(es.default["3/aHX6"]),
        c = i.useCallback(() => {
            (0, el.PK)(t, n).then(
                (e) => {
                    (0, nR.R)({
                        items: [{ type: "IMAGE", url: e, alt: o }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, n, o]);
    return s
        ? null
        : (0, r.jsx)(rX, {
              label: eu.intl.string(es.default.X15LLY),
              info: (0, r.jsx)(rJ, {
                  text: eu.intl.string(es.default.nR4B8P),
                  label: eu.intl.string(es.default.nc0SNY),
              }),
              children: (0, r.jsx)(b.D, {
                  className: rV.xX,
                  onClick: c,
                  "aria-label": eu.intl.string(es.default.TvAPIm),
                  children: null != a ? (0, r.jsx)("img", { src: a, alt: o, className: rV.sN, onError: u }) : null,
              }),
          });
}
function r0(e) {
    let t,
        l,
        { projectId: n, proposal: a, version: s, onApprove: u } = e,
        { automod: o } = a,
        { botInteraction: c, botExchanges: d } =
            ((t = (function (e) {
                if (null != e.bot) return e.bot.interaction;
                let t = e.commands.some(ra),
                    l = e.privileged_intents?.includes("MESSAGE_CONTENT") === !0;
                return t && l
                    ? "both"
                    : t
                      ? "commands"
                      : l
                        ? "messages"
                        : !0 === e.is_activity || null != e.automod || null != e.widget_config
                          ? null
                          : "events";
            })(a)),
            (l = i.useMemo(
                () =>
                    null == t
                        ? []
                        : (function (e, t, l) {
                              let n = e.bot?.example_exchanges ?? [],
                                  a = { kind: "event", user: "", bot: l.event };
                              if ("events" === t) {
                                  let e = n.slice(0, 3).map((e) => {
                                      let { bot: t } = e;
                                      return "" !== t.trim() ? { ...a, bot: t } : a;
                                  });
                                  return e.length > 0 ? e : [a];
                              }
                              let r = n.flatMap((e) => {
                                      let { user: l, bot: n } = e;
                                      return "" === l.trim()
                                          ? []
                                          : [
                                                {
                                                    kind:
                                                        "messages" !== t && l.trimStart().startsWith("/")
                                                            ? "command"
                                                            : "message",
                                                    user: l,
                                                    bot: n,
                                                },
                                            ];
                                  }),
                                  i = { kind: "message", user: l.message, bot: l.reply };
                              if ("messages" === t && 0 === r.length) return [i];
                              let s = e.commands.filter(ra).map((e) =>
                                      (function (e, t) {
                                          let l = e.description?.trim() ?? "",
                                              n = "" !== l ? l : t.reply;
                                          switch (rn(e)) {
                                              case re.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: n };
                                              case re.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: n };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: n };
                                          }
                                      })(e, l),
                                  ),
                                  u = "messages" === t ? [] : s.filter(rr),
                                  o = r.length > 0 ? ri([...r, ...u], !0) : ri("both" === t ? [...s, i] : s, !1);
                              return o.length > 0 ? o : [a];
                          })(a, t, {
                              message: eu.intl.string(es.default.J7qggf),
                              reply: eu.intl.string(es.default.nqYtiy),
                              event: eu.intl.string(es.default["05lU9W"]),
                          }),
                [a, t],
            )),
            { botInteraction: t, botExchanges: l }),
        f = (function (e, t) {
            let { widget_config: l, widget_preview: n } = t,
                a = (0, m.bG)([aZ.default], () => aZ.default.locale),
                r = (0, m.bG)([eA.Ay], () => {
                    let t = eA.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [l, n] = i.useState(a1);
                    return (
                        i.useEffect(() => {
                            let l = Object.entries(t ?? {});
                            if (0 === l.length) return;
                            let a = !1;
                            return (
                                Promise.all(
                                    l.map((t) => {
                                        let [l, n] = t;
                                        return (0, el.PK)(e, n.id).then(
                                            (e) => [l, e],
                                            () => null,
                                        );
                                    }),
                                ).then(
                                    (e) => {
                                        a || n(Object.fromEntries(e.filter((e) => null != e)));
                                    },
                                    () => {},
                                ),
                                () => {
                                    a = !0;
                                }
                            );
                        }, [e, t]),
                        l
                    );
                })(e, n?.images),
                u = i.useMemo(
                    () =>
                        null == l || null == n
                            ? null
                            : (function (e, t, l, n) {
                                  let a = {};
                                  for (let [t, l] of Object.entries(e.surfaces))
                                      null != l &&
                                          (a[t] = (function (e) {
                                              let t = {};
                                              for (let [l, n] of Object.entries(e.components)) {
                                                  let e = {};
                                                  for (let [t, l] of Object.entries(n.fields))
                                                      e[t] = {
                                                          ...a2(l),
                                                          ...(null != l.fallback ? { fallback: a2(l.fallback) } : {}),
                                                      };
                                                  t[l] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(l));
                                  let r = aJ.uW.safeParse(a);
                                  if (!r.success) return null;
                                  let i = r.data;
                                  return null == i[tN.m.WIDGET_TOP] || null == i[tN.m.WIDGET_BOTTOM]
                                      ? null
                                      : {
                                            locale: n,
                                            surfaceConfigs: i,
                                            isLoading: !1,
                                            hasIdentity: !0,
                                            resolutionContext: {
                                                data: (function (e, t, l) {
                                                    let n = (function (e) {
                                                            let t = new Map();
                                                            for (let l of Object.values(e.surfaces))
                                                                for (let e of Object.values(l?.components ?? {}))
                                                                    for (let l of Object.values(e.fields))
                                                                        "data" !== l.value_type ||
                                                                            t.has(l.value) ||
                                                                            t.set(l.value, l.presentation_type);
                                                            return t;
                                                        })(e),
                                                        a = {};
                                                    for (let [e, r] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === n.get(e)) {
                                                            let t = l[String(r)];
                                                            null != t &&
                                                                (a[e] = {
                                                                    type: aJ.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof r
                                                                ? (a[e] = { type: aJ.oG.NUMBER, value: r })
                                                                : (a[e] = { type: aJ.oG.STRING, value: r });
                                                    return a;
                                                })(e, t, l),
                                                applicationAssets: Object.keys(l).map(a3),
                                                getApplicationAssetUrl: (e) => l[e.key] ?? "",
                                                localizedStrings: a0,
                                            },
                                        };
                              })(l, n, s, a),
                    [l, n, s, a],
                );
            return i.useMemo(() => (null == r || null == u ? null : { applicationId: r, rendererProps: u }), [r, u]);
        })(n, a),
        h = s?.superseded === !0,
        g = a.what_changed?.trim() ?? "";
    return (0, r.jsxs)(l4, {
        title:
            h && null != s
                ? eu.intl.formatToPlainString(es.default.YZ3qJs, { version: s.version })
                : eu.intl.string(es.default["3b6e7o"]),
        meta: h
            ? (0, r.jsx)(l3, { children: eu.intl.string(es.default.hF2c41) })
            : (0, r.jsx)(rY, {
                  tags: (function (e, t) {
                      if (null != e.automod) return ["automod"];
                      let l = [];
                      return (e.supported_surfaces?.includes(Q.q7.OVERLAY) === !0 && l.push("overlay"),
                      null != e.widget_config && l.push("widget"),
                      !0 === e.is_activity)
                          ? [...l, "activity"]
                          : null == t
                            ? [...l, "bot"]
                            : (("commands" === t || "both" === t) && l.push("commands"),
                              "commands" !== t && l.push("chat_bot"),
                              l);
                  })(a, c),
              }),
        superseded: h,
        showLabel: eu.intl.string(es.default.yD8EJS),
        hideLabel: eu.intl.string(es.default.nSPGNb),
        bodyClassName: rV.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== g
                ? (0, r.jsx)(rX, {
                      label: eu.intl.string(es.default.iNS4dl),
                      children: (0, r.jsx)(j.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: g,
                      }),
                  })
                : null,
            (0, r.jsx)(j.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: a.summary,
            }),
            null != o && o.examples.length > 0
                ? (0, r.jsx)(rX, {
                      label: eu.intl.string(es.default.z4ZKYG),
                      icon: (0, r.jsx)(rC, {}),
                      info: (0, r.jsx)(rJ, {
                          text: eu.intl.string(es.default.bo4MOx),
                          label: eu.intl.string(es.default.VPLNot),
                      }),
                      children: (0, r.jsx)(rE, { automod: o }),
                  })
                : null,
            null == o && null != a.design_image ? (0, r.jsx)(rZ, { projectId: n, design: a.design_image }) : null,
            d.length > 0
                ? (0, r.jsx)(rX, {
                      label: eu.intl.string(es.default.sA1lTv),
                      info: (0, r.jsx)(rJ, {
                          text: eu.intl.string(es.default.NnmbJu),
                          label: eu.intl.string(es.default.KsqQJX),
                      }),
                      children: (0, r.jsx)(rU, { projectId: n, exchanges: d }),
                  })
                : null,
            null == o && null != f
                ? (0, r.jsx)(rX, {
                      label: eu.intl.string(es.default.ove4zH),
                      info: (0, r.jsx)(rJ, {
                          text: eu.intl.string(es.default.XcIrHx),
                          label: eu.intl.string(es.default["TwT+ht"]),
                      }),
                      children: (0, r.jsx)(rK, { ...f }),
                  })
                : null,
            a.changes.length > 0
                ? (0, r.jsx)(rX, {
                      label: eu.intl.string(es.default["5+mG1z"]),
                      children: (0, r.jsx)("ul", {
                          className: rV.p_,
                          children: a.changes.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: rV.Aw,
                                      children: (0, r.jsx)(j.E, {
                                          variant: "experimental/body-md/normal",
                                          color: "text-default",
                                          tag: "span",
                                          selectable: !0,
                                          children: e,
                                      }),
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            a.commands.length > 0
                ? (0, r.jsx)(rX, {
                      label: eu.intl.string(eu.t["0hKkS+"]),
                      children: (0, r.jsx)("ul", {
                          className: rV.p_,
                          children: a.commands.map((e, t) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: rV.uX,
                                      children: [
                                          (0, r.jsxs)(j.E, {
                                              variant: "experimental/body-md/medium",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: [
                                                  "launch" === e.kind || 4 === e.type
                                                      ? "\u21EA /"
                                                      : 2 === e.type || 3 === e.type
                                                        ? ""
                                                        : "/",
                                                  e.name,
                                              ],
                                          }),
                                          (0, r.jsx)(j.E, {
                                              variant: "experimental/body-md/normal",
                                              color: "text-muted",
                                              tag: "span",
                                              selectable: !0,
                                              children: e.description,
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            (0, r.jsx)(rQ, { label: eu.intl.string(es.default["2UbW6r"]), names: a.bot_permissions ?? [] }),
            (0, r.jsx)(rQ, { label: eu.intl.string(es.default["7TKfpj"]), names: a.privileged_intents ?? [] }),
            null == u || h
                ? null
                : (0, r.jsxs)("div", {
                      className: rV.o1,
                      children: [
                          (0, r.jsx)(N.$, {
                              variant: "primary",
                              size: "sm",
                              text: eu.intl.string(es.default["6S+wRM"]),
                              onClick: u,
                          }),
                          (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: eu.intl.string(es.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
function r1(e) {
    return null != e && e.status?.state === "unpublished";
}
let r2 = new WeakMap();
function r3(e) {
    let { publish: t } = e,
        l = t.guildId,
        n = (0, m.bG)([X.A], () => (null == l ? null : X.A.getGuild(l)));
    return (0, r.jsx)(lm.B, {
        gap: 8,
        align: "start",
        children: (0, r.jsxs)(lm.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, r.jsx)(y.m, {
                    text: t.disabledReason ?? t.notice,
                    asContainer: !0,
                    children: (0, r.jsx)(N.$, {
                        variant: "primary",
                        size: "sm",
                        loading: t.publishing,
                        disabled: t.disabled,
                        onClick: () => t.run("card"),
                        text: t.label,
                    }),
                }),
                null != n
                    ? (0, r.jsxs)(lm.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, r.jsx)(j.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: eu.intl.string(es.default["+HGTlC"]),
                              }),
                              (0, r.jsx)(eG.Ay, { guild: n, size: eG.Ay.Sizes.SMOL }),
                              (0, r.jsx)(j.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  lineClamp: 1,
                                  children: (function (e) {
                                      let t = Array.from(e);
                                      if (t.length <= 24) return e;
                                      let l = t.slice(0, 23).join("");
                                      return `${l.trimEnd()}\u{2026}`;
                                  })(n.name),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function r4(e) {
    let { projectId: t } = e,
        l = (0, ls.Ay)(t);
    return null != l && r1(l) ? (0, r.jsx)(r3, { publish: l }) : null;
}
var r6 = l(478016),
    r5 = l(989271);
function r7(e) {
    let { idea: t, selected: l, onPick: n } = e,
        a = i.useId(),
        s = null == n;
    return (0, r.jsxs)(b.D, {
        className: u()(r5.nM, { [r5.f1]: s, [r5.CZ]: l }),
        onClick: s ? void 0 : () => n(t),
        "aria-label": eu.intl.formatToPlainString(es.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : a,
        "aria-disabled": s,
        "aria-pressed": l,
        children: [
            (0, r.jsxs)("div", {
                className: r5.jo,
                children: [
                    l
                        ? (0, r.jsx)(r6.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: r5.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, r.jsx)(j.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: r5.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, r.jsx)(j.E, {
                      tag: "div",
                      id: a,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function r8(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: n } = e,
        [a, s] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), n?.(e));
            },
            [n],
        );
    return (0, r.jsx)(l1, {
        title: eu.intl.string(es.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, r.jsx)(
                r7,
                { idea: e, selected: a.has(e.id) || l?.has(e.id) === !0, onPick: null == n ? void 0 : u },
                e.id,
            ),
        ),
    });
}
function r9(e) {
    let { onAsk: t } = e;
    return (0, r.jsx)(lm.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, r.jsx)(N.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: eu.intl.string(es.default["U/bLzU"]),
        }),
    });
}
var ie = l(530557),
    it = l(872162);
function il(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var ia = l(202723);
function ir(e) {
    let { projectId: t, cardId: n, request: a, status: s, awaiting: o } = e,
        c = i.useCallback(() => {
            (0, te.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("291953"), l.e("408337")]).then(l.bind(l, 789864));
                return (l) => (0, r.jsx)(e, { ...l, projectId: t, request: a });
            });
        }, [t, a]),
        d = i.useMemo(() => a.fields.map((e) => ({ id: e.name, label: e.label, icon: ie.R })), [a.fields]),
        m = (function (e, t) {
            let [l, n] = i.useState(() => il(e, t));
            return l.cardId !== e || (null == l.status && "pending" !== t)
                ? (n(il(e, t)), !1)
                : null != l.status && t !== l.status;
        })(n, s),
        f = u()(ia.Lo, { [ia.jY]: m });
    return "superseded" === s
        ? (0, r.jsx)(
              "article",
              {
                  className: f,
                  children: (0, r.jsx)(j.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: eu.intl.string(es.default.CTxtdV),
                  }),
              },
              s,
          )
        : "inactive" === s
          ? (0, r.jsxs)(
                "article",
                {
                    className: f,
                    children: [
                        (0, r.jsx)(j.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: eu.intl.string(es.default.HCQvpO),
                        }),
                        (0, r.jsx)(it.C, { label: eu.intl.string(es.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, r.jsx)(
                  "article",
                  {
                      className: ia.Lo,
                      children: (0, r.jsx)(it.C, { label: eu.intl.string(es.default.HCQvpO), size: "xs", items: d }),
                  },
                  s,
              )
            : "received" === s
              ? (0, r.jsxs)(
                    "article",
                    {
                        className: f,
                        children: [
                            (0, r.jsxs)("div", {
                                className: ia.$h,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: ia.c9,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(rc.y, {
                                            size: "xs",
                                            color: L.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, r.jsx)(j.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: eu.intl.string(es.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(it.C, { label: eu.intl.string(es.default.sfp7Up), size: "xs", items: d }),
                        ],
                    },
                    s,
                )
              : (0, r.jsxs)("article", {
                    className: ia.Lo,
                    children: [
                        (0, r.jsx)(j.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: eu.intl.string(null != o ? es.default.O0QIqj : es.default.HCQvpO),
                        }),
                        (0, r.jsx)(j.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != a.note && "" !== a.note ? a.note : eu.intl.string(es.default.MPGSHL),
                        }),
                        (0, r.jsx)(it.C, { label: eu.intl.string(es.default.HCQvpO), size: "xs", items: d }),
                        (0, r.jsx)("div", {
                            className: ia.sq,
                            children: (0, r.jsx)(N.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: eu.intl.string(es.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var ii = l(919790),
    is = l(971824),
    iu = l(162052),
    io = l(165648);
function ic(e) {
    let t = aN(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? aw(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: ax(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function id(e) {
    let {
            projectId: t,
            steps: l,
            active: n = !1,
            turnActive: a = n,
            checklistSuperseded: s = !1,
            durationMs: u,
            interrupted: o = !1,
            todos: c,
            provisionalTodo: d,
            segment: m,
            hostsChecklist: f = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: x,
        } = e,
        p = i.useMemo(() => (0, lW.Jf)(l, n), [l, n]),
        v = i.useMemo(
            () =>
                null == m
                    ? p
                    : {
                          ...p,
                          steps: p.steps.filter((e) => e.segment === m),
                          tasks: p.tasks.filter((e) => e.task.segment === m),
                      },
            [p, m],
        );
    if (o)
        return (0, r.jsx)("ol", {
            className: nl.pj,
            "data-live": !1,
            children: (0, r.jsx)(lY.A, {
                glyph: (0, r.jsx)(af.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: eu.intl.string(es.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = n ? void 0 : (x ?? (h ? (p.turn?.durationMs ?? u) : void 0)),
        b = f ? ((0, lW.lt)(l) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = aN(k.map((e) => e.taskId)),
        N = !g && (n || k.some((e) => "running" === e.task.status)),
        A = ic(k);
    return (0, r.jsxs)("ol", {
        className: nl.pj,
        "data-live": N,
        children: [
            (0, r.jsx)(lJ.A, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: n,
                closed: g,
                durationMs: j,
                connectsDown: k.length > 0,
                tier: p.turn?.tier,
            }),
            k.map((e, l) => {
                let n = null != e.task.helperMark ? aw(e.task.helperMark) : void 0,
                    a = n ?? w.get(e.taskId);
                return null == a
                    ? null
                    : (0, r.jsx)(
                          aC,
                          {
                              projectId: t,
                              lane: e,
                              Illocon: a.Illocon,
                              tint: a.tint,
                              name: null != n && null != e.task.helperName ? e.task.helperName : a.name,
                              connectsDown: l < k.length - 1,
                          },
                          e.taskId,
                      );
            }),
            (0, r.jsx)(az, { projectId: t, steps: l, tree: p, segment: m }),
            y
                ? (0, r.jsx)("li", {
                      className: nl.YO,
                      children: (0, r.jsx)(ne, { todos: b, provisional: d, agents: A, live: a, superseded: s }),
                  })
                : null,
        ],
    });
}
function im(e) {
    let {
            projectId: t,
            steps: l,
            content: n,
            proposal: a,
            planVersion: s,
            ideas: o,
            attachments: c,
            secretRequest: d,
            secretRequestId: m,
            secretRequestAwaiting: f,
            secretRequestStatus: h = "open",
            settingsRequest: g,
            publishCta: x,
            onPickIdea: p,
            pickedIdeaIds: v,
            onApprovePlan: b,
            sideReply: y = !1,
            sideReplyAcknowledges: k,
            hoistedProse: w = !1,
            hoistedAttachmentsHost: N,
            restoreProposal: A,
            onRestoreProposal: S,
        } = e,
        C = i.useMemo(
            () => ap({ steps: l, content: n, hasProposal: null != a, hasAttachments: null != c && c.length > 0 }),
            [l, n, a, c],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: T } = C,
        _ = (w ? N : void 0) ?? C.attachmentsHost,
        P = M && !w,
        R = null == c ? null : (0, r.jsx)(ii.A, { projectId: t, attachments: c }),
        L = null == R ? null : (0, r.jsx)("div", { className: nl.MT, children: R }),
        D = y
            ? (0, r.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return eu.intl.string(es.default.Mv5OmK);
                          case "queued":
                              return eu.intl.string(es.default["Po/2mi"]);
                          case "restarting":
                              return eu.intl.string(es.default.Vj0woh);
                          default:
                              return eu.intl.string(es.default.gY3L8p);
                      }
                  })(k),
              })
            : null;
    return (0, r.jsxs)("div", {
        className: nl.ue,
        children: [
            E.length > 0 && !w
                ? (0, r.jsx)("ol", {
                      className: nl.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: nl.DV,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: io.PT,
                                          children: ah.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === _ && e === I ? L : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != a
                ? (0, r.jsx)(r0, { projectId: t, proposal: a, version: s, onApprove: b })
                : P
                  ? (0, r.jsxs)("div", {
                        className: u()(nl.ky, iu.XR),
                        children: [
                            (0, r.jsx)("div", {
                                className: u()(io.PT, nl.cW),
                                children: ah.A.parse(T, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === _ ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != d
                ? (0, r.jsx)("div", {
                      className: u()(nl.ky, iu.XR, { [is.O]: null != f && "open" === h }),
                      children: (0, r.jsx)(ir, {
                          projectId: t,
                          cardId: m ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? f : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, r.jsx)("div", {
                      className: u()(nl.ky, iu.XR),
                      children: (0, r.jsx)(al, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== _ && ("closing" !== _ || P) ? null : R,
            null != x ? (0, r.jsx)(r4, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, r.jsx)(r8, { ideas: o, pickedIdeaIds: v, onPick: p }) : null,
            null != A ? (0, r.jsx)(aU, { proposal: A, onRestore: S }) : null,
            P ? null : D,
        ],
    });
}
var ih = l(146806),
    ig = l(477262),
    ix = l(432017),
    ip = l(475358),
    iv = l(717400),
    ij = l(663341),
    ib = l(559647),
    iy = l(775602),
    ik = l(234320),
    iw = l(285796),
    iN = l(922329);
async function iA(e) {
    let t = new Worker(new URL("/assets/" + l.u("638664"), l.b));
    try {
        let l = await new Promise((l) => {
            (t.addEventListener("message", (e) => {
                let { data: t } = e;
                return l(t);
            }),
                t.addEventListener("error", () => l(null)),
                t.addEventListener("messageerror", () => l(null)),
                t.postMessage(e));
        });
        if (null == l) return null;
        return new File([l], `${e.name.replace(/\.png$/i, "")}.webp`, {
            type: "image/webp",
            lastModified: e.lastModified,
        });
    } finally {
        t.terminate();
    }
}
var iS = l(153171);
let iC = Q.lN;
function iE(e, t, l, n) {
    let a = nU(e, t).length;
    !(function (e, t, l) {
        if (0 === l.length) return;
        let n = l.map((e) => {
            let { draft: t, upload: l } = e;
            return { draft: { ...t, localId: nF++ }, upload: l };
        });
        for (let { draft: l, upload: a } of (nG(e, t, [
            ...nU(e, t),
            ...n.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        n))
            a?.().then(
                (n) => {
                    if ("errorText" in n) return void nq(e, t, l.localId, { status: "error", errorText: n.errorText });
                    let { converted: a, ...r } = n;
                    nq(e, t, l.localId, { ...a, status: "ready", ref: r })
                        ? setTimeout(
                              () =>
                                  nq(e, t, l.localId, {
                                      status: "error",
                                      errorText: eu.intl.string(es.default.E7dS5n),
                                  }),
                              Q.o2 - 3e5,
                          )
                        : nB(e, r.id);
                },
                (n) => {
                    (console.error("[vibegrations] attachment upload failed", n),
                        nq(e, t, l.localId, { status: "error", errorText: eu.intl.string(es.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        l.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                l = { name: e.name, contentType: t };
            if (a++ >= iC)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: eu.intl.formatToPlainString(es.default.Q0aCVZ, { count: iC }),
                    },
                };
            if (!(0, Q.Oq)(e.size, t))
                return "image/png" === t && e.size <= Q.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...l, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let l = await iA(e).catch(() => null);
                              return null != l && (0, Q.Oq)(l.size, l.type)
                                  ? { ...(await n(l)), converted: { name: l.name, contentType: l.type } }
                                  : { errorText: nV(t) };
                          },
                      }
                    : { draft: { ...l, status: "error", errorText: nV(t) } };
            let r = Q.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: r }, upload: () => n(e) };
        }),
    );
}
function iI(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        a = nz.useState((e) => nO(e, t, l)),
        r = i.useCallback((e) => iE(t, l, e, n), [t, l, n]),
        s = i.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), r(t));
            },
            [r],
        ),
        u = i.useCallback(
            (e) => {
                let n, a;
                null != (a = (n = nU(t, l)).find((t) => t.localId === e)) &&
                    (nH(t, a),
                    nG(
                        t,
                        l,
                        n.filter((t) => t.localId !== e),
                    ));
            },
            [t, l],
        ),
        o = i.useCallback(() => nX(t, l), [t, l]);
    return {
        drafts: a,
        addFiles: r,
        pasteFiles: s,
        removeDraft: u,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: o,
    };
}
function iM(e) {
    let { draft: t, onRemove: l } = e;
    return (0, r.jsxs)(iN.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, r.jsx)(w.y, { type: w.t.SPINNING_CIRCLE_SIMPLE, className: iS.Rk }) : null,
            (0, r.jsx)("button", {
                type: "button",
                className: iS.o1,
                onClick: () => l(t.localId),
                "aria-label": eu.intl.string(es.default.Slam9g),
                children: (0, r.jsx)(iw.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var iT = l(497437);
let i_ = [
        {
            id: "add-images-videos",
            label: es.default["51+9lc"],
            icon: ig.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: es.default["10ljr2"],
            icon: ix.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: es.default.aotDee, icon: et.H, accept: "" },
    ],
    iP = "text-md/normal",
    iR = null;
function iL(e) {
    let { text: t, offering: l, typed: n } = e,
        [a, s] = i.useState(t),
        o = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [f, h] = i.useState(0),
        [g, x] = i.useState(0),
        [p, v] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = o.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let l = d.current;
        function n() {
            let e = o.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let n = c.current;
            if (null == n) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                r = Number.isNaN(a) ? 0 : a,
                i = e.offsetWidth,
                s = n.offsetWidth + r;
            (x(i + r), h(s));
            let u = s + i,
                d = Math.max(l, n.offsetWidth) + r + i,
                m = 0 === d ? 1 : s / d,
                f = 0 === d ? 1 : u / d;
            v({
                frontFrom: 1e3 * (0, ih._R)(m),
                frontTo: 1e3 * (0, ih._R)(f),
                backFrom: 1e3 * (0, ih.T)(m),
                backTo: 1e3 * (0, ih.T)(f),
            });
        }
        let a = new ResizeObserver(n);
        return (n(), a.observe(e), a.observe(t), null != c.current && a.observe(c.current), () => a.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = i.useState(0),
        [k, w] = i.useState(null),
        N = i.useRef(!1),
        A = i.useCallback(() => {
            (w(N.current ? (l ? "through" : "out") : l ? "in" : null), y((e) => e + 1));
        }, [l]);
    i.useEffect(() => {
        N.current = l;
    }, [l, t]);
    let S = "in" === k ? p.backFrom : p.frontFrom,
        C = "out" === k ? p.frontTo : p.backTo,
        E = (0, m.bG)([iy.Ay], () => iy.Ay.useReducedMotion),
        I = t === eu.intl.string(es.default.Zc7gML),
        M = a === t && I;
    function T(e, t, l) {
        let n = null != l;
        return (0, r.jsx)("span", {
            ref: l,
            className: u()(iT.VT, { [iT.qk]: n }),
            style: n
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": n && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": n ? (k ?? void 0) : void 0,
            children: (0, r.jsx)(ip.e, { shortcut: "tab", className: iT.xT, keyClassName: e }),
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e_.o, {
                text: t,
                variant: iP,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(iT.xM, { [iT.s2]: n }),
                onStart: A,
                onComplete: () => s(t),
            }),
            T(iT.IS, l || (!E && "out" === k), o),
            (0, r.jsx)("span", {
                ref: c,
                className: iT.QI,
                "aria-hidden": !0,
                children: (0, r.jsx)(j.E, { variant: iP, tag: "span", children: t }),
            }),
            M
                ? (0, r.jsxs)("span", {
                      className: iT.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, r.jsx)(j.E, { variant: iP, tag: "span", className: iT.xM, children: t }),
                          T(iT.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let iD = i.memo(function (e) {
        let {
                projectId: t,
                canSend: l,
                stopped: n,
                running: a,
                restoring: s = !1,
                onSend: u,
                onInterrupt: o,
                onUploadFile: c,
                onApprove: d,
                onImport: f,
                suggestion: h,
                questionOpen: g = !1,
                hasPendingContext: x = !1,
                onDraftHasTextChange: p,
                modelSettings: v,
                onModelSettingsChange: j,
            } = e,
            [b, w] = i.useState(() => ad.getDraft(t)),
            N = i.useCallback(
                (e) => {
                    ((0, eN.I$)(t, e), w(e));
                },
                [t],
            ),
            A = "" !== b.trim();
        i.useEffect(() => p?.(A), [A, p]);
        let [S, C] = i.useState(t);
        S !== t && (C(t), w(ad.getDraft(t)));
        let E = (0, m.bG)([iy.Ay], () => iy.Ay.isSubmitButtonEnabled),
            [I, M] = i.useState(!1);
        i.useEffect(() => {
            a || M(!1);
        }, [a]);
        let T = i.useRef(null),
            {
                drafts: _,
                addFiles: P,
                pasteFiles: R,
                removeDraft: L,
                settled: D,
                takeRefs: $,
            } = iI({ projectId: t, surface: "chat", onUploadFile: c }),
            F = "" !== b.trim() || _.length > 0 || x,
            z = l && F && D,
            [O, U] = i.useState(null);
        i.useEffect(() => {
            if (null == O) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => U(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [O]);
        let G = i.useCallback(() => {
                if (!z) return;
                let e = $();
                u(b, e.length > 0 ? e : void 0);
                let t = (function (e, t, l) {
                    let n,
                        a,
                        r = l.split("\n", 1)[0] ?? "";
                    if (null == e || "" === r) return r;
                    null == iR && (iR = document.createElement("canvas").getContext("2d"));
                    let i = iR;
                    if (null == i) return r;
                    let s = getComputedStyle(e);
                    i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let u =
                        t > 0
                            ? t
                            : ((n = parseFloat(s.paddingInlineStart)),
                              (a = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(n) ? 0 : n) - (Number.isNaN(a) ? 0 : a));
                    if (u <= 0 || i.measureText(r).width <= u) return r;
                    let o = 0,
                        c = r.length;
                    for (; o < c;) {
                        let e = Math.ceil((o + c) / 2);
                        i.measureText(r.slice(0, e)).width <= u ? (o = e) : (c = e - 1);
                    }
                    let d = r.slice(0, o),
                        m = d.lastIndexOf(" ");
                    return (m > 0 ? d.slice(0, m) : d).trimEnd();
                })(X.current?.querySelector("textarea") ?? null, ec.current, b);
                ("" !== t && U(t), N(""));
            }, [z, b, u, $, N]),
            q = i.useCallback(
                (e) => {
                    (e.preventDefault(), G());
                },
                [G],
            ),
            B = i.useCallback(() => {
                null == o || I || (M(!0), o());
            }, [o, I]),
            H = null == h || "" !== b || !l || n || s || x ? null : h,
            K = i.useCallback(
                (e) => {
                    if ("Escape" === e.key && a && null != o && !I) {
                        (e.preventDefault(), e.stopPropagation(), B());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != H) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), N(H));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
                },
                [G, d, a, o, I, B, H, N],
            ),
            V = i.useCallback(
                (e) => {
                    l && R(e);
                },
                [l, R],
            );
        (0, ik.Vo)({
            event: ep.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return V(t);
            },
        });
        let W = i.useCallback(
                (e) => {
                    (P(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [P],
            ),
            X = i.useRef(null),
            J = i.useRef(null),
            Q = i.useCallback((e) => {
                let t = T.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [et, el] = i.useState(0),
            [en, ea] = i.useState(!1);
        i.useEffect(() => {
            if (0 === b.length) return void ea(!1);
            let e = X.current?.querySelector("textarea");
            if (null != e) {
                let t = iz(e);
                null != t && el(t);
            }
            ea(!0);
            let t = setTimeout(() => ea(!1), i$);
            return () => clearTimeout(t);
        }, [b]);
        let er = i.useMemo(() => ({ "--custom-glow-x": `${et}px` }), [et]),
            ei = en ? ` ${iT.EB}` : "",
            eo = s
                ? eu.intl.string(es.default.qqlUiW)
                : n
                  ? eu.intl.string(es.default.mPB3eo)
                  : l
                    ? x
                        ? eu.intl.string(es.default.knUjL3)
                        : g
                          ? eu.intl.string(es.default.IevBEw)
                          : eu.intl.string(a ? es.default["0BJa/0"] : es.default.TEeU7z)
                    : eu.intl.string(es.default.zZ9NgM),
            ec = i.useRef(0),
            ed = i.useRef(null),
            em = i.useCallback((e) => {
                if ((ed.current?.disconnect(), null == e)) return;
                ec.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    ec.current = e.clientWidth;
                });
                (t.observe(e), (ed.current = t));
            }, []),
            ef = i.useId(),
            eh = null != H,
            eg = O ?? H ?? eo,
            ex = "" === b && "" !== eg;
        return (0, r.jsxs)("form", {
            onSubmit: q,
            className: iT.DA,
            children: [
                _.length > 0
                    ? (0, r.jsx)("div", {
                          className: iT.lN,
                          children: _.map((e) => (0, r.jsx)(iM, { draft: e, onRemove: L }, e.localId)),
                      })
                    : null,
                (0, r.jsx)("span", { className: `${iT.wg} ${iT.LP}${ei}`, style: er, "aria-hidden": !0 }),
                (0, r.jsx)("span", { className: `${iT.wg} ${iT.L3}${ei}`, style: er, "aria-hidden": !0 }),
                (0, r.jsxs)("div", {
                    className: iT.VA,
                    ref: X,
                    children: [
                        (0, r.jsx)("input", {
                            ref: T,
                            type: "file",
                            multiple: !0,
                            onChange: W,
                            className: iT.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(Y.Y, {
                            targetElementRef: J,
                            position: "top",
                            align: "left",
                            animation: Y.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(Z.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": eu.intl.string(eu.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, r.jsxs)(ee.rX, {
                                        children: [
                                            i_.map((e) =>
                                                (0, r.jsx)(
                                                    ee.Dr,
                                                    {
                                                        id: e.id,
                                                        label: eu.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => Q(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != f
                                                ? (0, r.jsx)(ee.Dr, {
                                                      id: "import-project",
                                                      label: eu.intl.string(es.default["p/k5i7"]),
                                                      iconLeft: iv.q,
                                                      leadingAccessory: { type: "icon", icon: iv.q },
                                                      action: f,
                                                  })
                                                : null,
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) => {
                                let { isShown: n } = t;
                                return (0, r.jsx)("button", {
                                    ...e,
                                    ref: J,
                                    type: "button",
                                    className: `${iT.Y0} ${iT.nu}`,
                                    disabled: !l,
                                    "aria-label": eu.intl.string(eu.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": n,
                                    children: (0, r.jsx)(ij.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: iT.Qu,
                                    }),
                                });
                            },
                        }),
                        ex
                            ? (0, r.jsx)("div", {
                                  ref: em,
                                  className: iT.ar,
                                  "aria-hidden": "true",
                                  children: (0, r.jsx)(iL, { text: eg, offering: eh && null == O, typed: null != O }),
                              })
                            : null,
                        (0, r.jsx)(ns.y, {
                            value: b,
                            onChange: (e) => N(e.currentTarget.value),
                            onKeyDown: K,
                            onPaste: V,
                            placeholder: ex ? "" : eo,
                            disabled: !l,
                            "aria-label": eu.intl.string(es.default.ldNl9x),
                            "aria-describedby": ex ? ef : void 0,
                            rows: 1,
                            className: iT.jp,
                        }),
                        ex ? (0, r.jsx)(k.A, { id: ef, children: eo }) : null,
                        (0, r.jsx)("div", {
                            className: iT.Sz,
                            children:
                                a && null != o
                                    ? (0, r.jsx)(y.m, {
                                          text: eu.intl.string(es.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, r.jsx)("button", {
                                              type: "button",
                                              className: `${iT.Y0} ${iT.$E}`,
                                              disabled: I,
                                              onClick: B,
                                              "aria-label": eu.intl.string(es.default.wiguT0),
                                              children: (0, r.jsx)(af.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : v?.tierSettings != null && null != j
                                      ? (0, r.jsx)(th, {
                                            settings: v.tierSettings,
                                            tiers: v.tiers,
                                            choices: v.choices,
                                            disabled: !l,
                                            onChange: j,
                                            className: `${iT.Y0} ${iT.$E}`,
                                            icon: (0, r.jsx)(ti.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        E
                            ? (0, r.jsxs)("div", {
                                  className: iT.fF,
                                  children: [
                                      (0, r.jsx)("div", { className: iT.MT }),
                                      (0, r.jsx)("button", {
                                          type: "submit",
                                          className: iT.rt,
                                          disabled: !z,
                                          "aria-label": eu.intl.string(es.default.rxW2cl),
                                          children: (0, r.jsx)(ib.SendMessageIcon, {
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
    i$ = 1500,
    iF = [
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
function iz(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = iz.mirror;
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
                (iz.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of iF) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
iz.mirror = null;
var iO = l(52133),
    iU = l(531685),
    iG = l(155899),
    iq = l(148087);
let iB = [6e4, 18e4, 6e5],
    iH = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: iB,
            clock: "persistent",
            eligible: (e) => {
                var t;
                let { publish: l, draftTyped: n, outdatedUpdating: a } = e;
                return a
                    ? l?.isUpdate === !0
                    : !n && null != (t = l) && t.isUpdate && null == t.disabledReason && !0 !== t.publishing;
            },
        },
        {
            key: "ideas",
            priority: 1,
            idleDelayMs: 6e4,
            clock: "visit",
            eligible: (e) => {
                var t;
                let { turn: l, publish: n, draftHasText: a } = e;
                return (
                    !a &&
                    n?.publishing !== !0 &&
                    "plan_implemented" === (t = l).kind &&
                    (0, ej.BL)(t) &&
                    !(null != l.publishCta && r1(n))
                );
            },
        },
    ];
function iK(e, t) {
    return {
        ...e,
        now: t,
        visitStartedAt: t,
        draftTyped: !1,
        lastActivityAt: null,
        lastMessageAt: null == e.messageAt ? null : Math.min(e.messageAt, t),
        seenAt: null,
        unseen: !1,
        hiddenAt: e.visible ? null : t,
        outdatedShown: !1,
        outdatedBackoff: 0,
        outdatedUpdating: !1,
    };
}
let iV = new Map();
function iW(e) {
    return (0, m.bG)([eA.Ay, a6.A], () => {
        let t = eA.Ay.getProject(e);
        return null == t ? "" : (a6.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function iX(e) {
    let { projectId: t, notice: l } = e;
    return "outdated" === l ? (0, r.jsx)(iQ, { projectId: t }) : (0, r.jsx)(iJ, { projectId: t, notice: l });
}
function iJ(e) {
    let { projectId: t, notice: l } = e,
        n = i.useContext(ls.bI),
        a = iW(t),
        s = (0, m.bG)([eA.Ay, X.A], () => {
            let e = eA.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (X.A.getGuild(e.guild_id)?.name ?? null);
        }),
        u = i.useCallback(() => {
            null != n && (0, ls.ub)(t, n);
        }, [n, t]);
    return (0, r.jsx)(j.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: eu.intl.format(
            (function (e, t) {
                if (!e.update) return null == t ? es.default.MOrR29 : es.default["/npn7F"];
                switch (e.surface) {
                    case "bot":
                        return es.default.zfpeIL;
                    case "widget":
                        return es.default.DxCfTh;
                    case "automod":
                        return es.default["8ytGC3"];
                    case "activity":
                    case null:
                        return es.default.WSmpBT;
                }
            })(l, s),
            { name: a, server: s ?? "", onOpen: u },
        ),
    });
}
function iQ(e) {
    let { projectId: t } = e,
        l = (0, ls.Ay)(t),
        [n, a] = i.useState(!1);
    return null == l
        ? null
        : n && (l.publishing || !l.isUpdate)
          ? (0, r.jsx)(iY, {})
          : (0, r.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: eu.intl.format(es.default.X8tdbS, {
                    action: l.label,
                    onUpdate: () => {
                        (a(!0), iV.get(t)?.forEach((e) => e()), l.run("outdated_notice"));
                    },
                }),
            });
}
function iY() {
    let e = eu.intl.string(es.default.lexcBN),
        t = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, m.bG)([iy.Ay], () => iy.Ay.useReducedMotion),
                [l, n] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (t || e) return;
                    let l = setInterval(() => n((e) => (e % 3) + 1), 400);
                    return () => clearInterval(l);
                }, [t, e]),
                ".".repeat(t ? 3 : l)
            );
        })(!(0, iq.A)());
    return (0, r.jsxs)(j.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, r.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var iZ = l(248798);
function i0(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function i1(e) {
    let { reminder: t, renderReminder: l } = e,
        n = (function (e) {
            let t,
                [l, n] = i.useState([]);
            (l.find((e) => !e.leaving)?.key ?? null) !== e &&
                n(
                    ((t = l.filter((t) => t.key !== e).map((e) => ({ ...e, leaving: !0 }))),
                    null != e ? [...t, { key: e, leaving: !1 }] : t),
                );
            let a = l.some((e) => e.leaving);
            return (
                i.useEffect(() => {
                    if (!a) return;
                    let e = setTimeout(() => n((e) => e.filter((e) => !e.leaving)), 180);
                    return () => clearTimeout(e);
                }, [a, l]),
                l
            );
        })(t),
        a = n.find((e) => !e.leaving)?.key ?? null,
        s = null == a && n.length > 0,
        o = i.useRef(null),
        c = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = o.current;
            if (null == e || s) return;
            e.getBoundingClientRect();
            let t = c.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            i0(e, t);
            let l = new ResizeObserver(() => i0(e, t));
            return (l.observe(t), () => l.disconnect());
        }, [a, s]),
        (0, r.jsx)("div", {
            ref: o,
            className: u()(iZ.NI, { [iZ.Jg]: null == a }),
            "aria-live": "polite",
            children: (0, r.jsx)("div", {
                className: iZ.t$,
                children: n.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : c,
                            "aria-hidden": e.leaving || void 0,
                            className: u()(iZ.qd, e.leaving ? iZ.cu : iZ.We),
                            children: l(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var i2 = l(521981),
    i3 = l(491182),
    i4 = l(438729),
    i6 = l(622868),
    i5 = l(448368),
    i7 = l(837528),
    i8 = l(470964),
    i9 = l(715628),
    se = l(752636),
    st = l(9842),
    sl = l(589022),
    sn = l(994500),
    sa = l(967198),
    sr = l(7584);
let si = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function ss(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function su(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function so(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = su(e, t),
        r = e.codePointAt(t);
    if (
        (null != r &&
            (8205 === r ||
                (r >= 65024 && r <= 65039) ||
                (r >= 127995 && r <= 127999) ||
                (r >= 768 && r <= 879) ||
                (r >= 8400 && r <= 8447) ||
                (r >= 65056 && r <= 65071) ||
                (r >= 917536 && r <= 917631))) ||
        8205 === a
    )
        return !0;
    if (ss(a) && ss(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && ss(su(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function sc(e, t) {
    let { streaming: l } = t,
        n = (0, m.bG)([iy.Ay], () => iy.Ay.useReducedMotion),
        a = l && !n,
        [r, s] = i.useState(() => ({ target: e, length: e.length })),
        u = r;
    (u.target !== e &&
        (u = {
            target: e,
            length: a
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r);) r++;
                      for (; r > 0 && so(t, r);) r--;
                      return r;
                  })(u.target, e, u.length)
                : e.length,
        }),
        a || u.length === e.length || (u = { target: e, length: e.length }),
        u !== r && s(u));
    let o = a && u.length < e.length,
        c = i.useRef(u);
    i.useLayoutEffect(() => {
        c.current = u;
    });
    let d = i.useRef(0),
        f = i.useRef(0);
    (i.useEffect(() => {
        if (o)
            return (
                (f.current = 0),
                (d.current = requestAnimationFrame(function e(t) {
                    let l = 0 === f.current ? 32 : t - f.current;
                    if (l >= 32) {
                        f.current = t;
                        let e = c.current,
                            n = (function (e) {
                                let { target: t, revealed: l, elapsedMs: n } = e,
                                    a = Math.min(Math.max(l, 0), t.length),
                                    r = t.length - a;
                                if (r <= 0) return a;
                                if (r > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, r / 280) * Math.max(n, 0))),
                                );
                                var s = (function (e, t, l) {
                                    if (l >= e.length) return l;
                                    let n = l;
                                    for (; n > t + 1 && l - n < 12 && si.has(e.charAt(n - 1));) n--;
                                    return si.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && so(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && s({ target: e.target, length: n });
                    }
                    d.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(d.current)
            );
    }, [o]),
        i.useEffect(() => {
            if (o)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = c.current;
                s({ target: e, length: e.length });
            }
        }, [o]));
    let h = Math.min(u.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var sd = l(565645),
    sm = l(981879);
function sf(e) {
    let { emoji: t, label: l } = e;
    return (0, r.jsx)("div", {
        className: sm.H,
        children: (0, r.jsx)(sd.A, { emojiName: t, alt: l, size: "reaction" }),
    });
}
var sh = l(624479),
    sg = l(890377),
    sx = l(744898),
    sp = l(180227);
function sv(e) {
    let { groupStart: t, actions: l } = e;
    return 0 === l.length
        ? null
        : (0, r.jsx)("div", {
              className: u()(sp.QE, { [sp.Rn]: t }),
              children: (0, r.jsx)(rP.Ay, {
                  children: l.map((e) =>
                      (0, r.jsx)(
                          rP.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function sj(e) {
    return ln.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: eu.intl.string(eu.t.JrGD7E), icon: sh.CopyIcon, onClick: () => (0, ln.C)(e) }]
        : [];
}
function sb(e) {
    let { content: t, groupStart: l, onQueuedAction: n } = e,
        a =
            null == n
                ? []
                : [
                      {
                          id: "steer",
                          label: eu.intl.string(es.default.CXtLD2),
                          tooltip: eu.intl.string(es.default.DOb1HM),
                          icon: sg.V,
                          onClick: () => n("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: eu.intl.string(es.default.urZwpN),
                          icon: P.P,
                          onClick: () => n("cancel"),
                      },
                  ];
    return (0, r.jsx)(sv, { groupStart: l, actions: [...a, ...sj(t)] });
}
function sy(e) {
    let { content: t, groupStart: l, onRestoreVersion: n } = e,
        a =
            null == n
                ? []
                : [{ id: "restore-version", label: eu.intl.string(es.default.H8Jfhu), icon: sx.e, onClick: n }];
    return (0, r.jsx)(sv, { groupStart: l, actions: [...a, ...sj(t)] });
}
let sk = (0, a8.createChannelRecord)({ id: "conjure-builder", type: ep.rbe.DM }),
    sw = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function sN(e, t) {
    return null == e ? e : (0, r.jsx)("div", { className: u()(sp.Yq, { [sp.x1]: t }), children: e });
}
function sA(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function sS(e, t, l) {
    let { content: n } = (0, i8.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        a = i.useMemo(() => ({ message: e, channel: sk, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, r.jsx)(i4.Ay, { className: l, message: e, content: n, compact: !1 })
          : (0, i9.A)(a, n);
}
function sC(e) {
    let [t, l] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        n = i.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        a = i.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, i7.m)(e, sk, t.usernameProfile, n),
        u = (0, i7.Jo)(t.avatarProfile, n),
        o = (0, m.bG)([sa.A], () => sa.A.getGuildId()),
        c = (0, m.bG)([tX.default], () => tX.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let l = tX.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, r.jsx)(sl.A, { ...t, user: l, currentUser: c, guildId: o ?? void 0 });
            },
            [c, o, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: a,
        renderPopout: d,
        guildId: o ?? void 0,
    };
}
function sE(e) {
    let { baseMessage: t, referenced: l, selected: n, onJumpToReplied: a } = e,
        s = i.useMemo(() => {
            let e = "" !== l.content ? (0, i2.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == n
                ? e
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("span", {
                              className: sp.GV,
                              children: [
                                  (0, r.jsx)(A.x, {
                                      className: sp.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  n,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, n]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, m.cf)(
            [sn.A],
            () => ({
                isReplyAuthorBlocked: sn.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: sn.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        c = (0, rT.X4)(l),
        d = (0, rT.X4)(t),
        f = sC(l);
    return (0, r.jsx)(i5.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: sk,
        referencedMessage: { state: st.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != a,
        showReplySpine: !0,
        renderPopout: f.renderPopout,
        showAvatarPopout: f.showAvatarPopout,
        showUsernamePopout: f.showUsernamePopout,
        onClickAvatar: f.onClickAvatar,
        onClickUsername: f.onClickUsername,
        onClickReply: a,
        onPopoutRequestClose: f.onPopoutRequestClose,
    });
}
function sI(e) {
    let { message: t, author: l } = e,
        n = sC(t);
    return (0, r.jsx)(i6.Ay, {
        message: t,
        channel: sk,
        author: l,
        guildId: n.guildId,
        subscribeToGroupId: t.id,
        renderPopout: n.renderPopout,
        showAvatarPopout: n.showAvatarPopout,
        showUsernamePopout: n.showUsernamePopout,
        onClickAvatar: n.onClickAvatar,
        onClickUsername: n.onClickUsername,
        onPopoutRequestClose: n.onPopoutRequestClose,
    });
}
function sM(e) {
    let { content: t, createdAt: l, userId: n, accessories: a, agentReaction: s, groupStart: u, onQueuedAction: o } = e;
    i.useEffect(() => t1(n), [n]);
    let c = (0, m.bG)(
            [tX.default],
            () => t0(n, null != n ? tX.default.getUser(n) : null, tX.default.getCurrentUser()),
            [n],
        ),
        d = i.useMemo(() => (0, rT.FT)(c, null), [c]),
        f = i.useMemo(() => eZ(t), [t]),
        h = f?.body ?? t,
        g = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, a7.Ay)({ channelId: sk.id, content: h, author: c });
            return (0, a5.rh)({ ...e, timestamp: sA(l, e.timestamp), state: ep.cmJ.SENT });
        }, [h, c, l]),
        x = (function (e) {
            if (null == e || "" === e) return null;
            let t = sr.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : eu.intl.formatToPlainString(es.default.lxXLho, { emojiName: t });
        })(s);
    return null == g
        ? null
        : (0, r.jsx)(sT, {
              message: g,
              author: d,
              content: h,
              selected: f?.label,
              accessories:
                  null != s && null != x
                      ? (0, r.jsxs)(r.Fragment, { children: [a, (0, r.jsx)(sf, { emoji: s, label: x })] })
                      : a,
              groupStart: u,
              onQueuedAction: o,
          });
}
function sT(e) {
    let { message: t, author: l, content: n, selected: a, accessories: i, groupStart: s = !0, onQueuedAction: u } = e,
        o = sS(t, n);
    return (0, r.jsx)(i3.A, {
        className: sp.yE,
        author: l,
        childrenHeader: s ? (0, r.jsx)(sI, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == a
                ? o
                : (0, r.jsxs)("div", {
                      className: sp.zq,
                      children: [
                          (0, r.jsxs)("span", {
                              className: sp.GV,
                              children: [
                                  (0, r.jsx)(A.x, {
                                      className: sp.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  a,
                              ],
                          }),
                          (0, r.jsx)("span", { className: sp.WO, children: o }),
                      ],
                  }),
        childrenAccessories: sN(i, "" !== n),
        childrenButtons: (0, r.jsx)(sb, { content: n, groupStart: s, onQueuedAction: u }),
    });
}
function s_(e) {
    let {
            content: t,
            createdAt: l,
            accessories: n,
            replyTo: a,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: o = !1,
            buttons: c,
        } = e,
        { text: d, revealing: f } = sc(t, { streaming: (0, m.bG)([iU.A], () => o && iU.A.isFocused(), [o]) }),
        h = i.useMemo(() => (0, rT.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        x = a?.userId,
        p = (0, m.bG)(
            [tX.default],
            () => t0(x, null != x ? tX.default.getUser(x) : null, tX.default.getCurrentUser()),
            [x],
        ),
        v = i.useMemo(() => (null == a ? null : eZ(a.content)), [a]),
        j = i.useMemo(() => {
            if (null == a || null == p) return null;
            let e = (0, a7.Ay)({ channelId: sk.id, content: v?.body ?? a.content, author: p });
            return (0, a5.rh)({ ...e, id: a.id, timestamp: sA(a.createdAt, e.timestamp), state: ep.cmJ.SENT });
        }, [a, v, p]),
        b = i.useMemo(() => (null == a ? void 0 : { channel_id: sk.id, message_id: a.id }), [a]),
        [y] = i.useState(() => (0, a7.Ay)({ channelId: sk.id, content: "", author: sw })),
        k = i.useMemo(
            () =>
                (0, a5.rh)({
                    ...y,
                    timestamp: sA(l, y.timestamp),
                    state: ep.cmJ.SENT,
                    ...(null != b ? { type: ep.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, l, b],
        ),
        w = i.useMemo(() => k.set("content", d), [k, d]),
        N = i.useMemo(
            () => (0, se.A)({ message: k, channel: sk, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        A = sS(w, d, sp.OS);
    return (0, r.jsxs)("div", {
        className: sp.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, r.jsx)(i3.A, {
                className: sp.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, r.jsx)(sE, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: A,
                childrenAccessories: sN(n, "" !== d),
                disableInteraction: !0,
            }),
            c,
            u
                ? (0, r.jsx)("span", {
                      className: sp.st,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(aH.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let sP = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    sR = new WeakMap();
var sL = l(288539);
function sD(e, t, l) {
    return (0, r.jsx)(sL.A, { userId: e, content: `@${t}` }, l);
}
function s$(e) {
    let { projectId: t, event: l } = e,
        n = (function (e, t, l) {
            let n = t.actor_user_id;
            i.useEffect(() => t1(n), [n]);
            let a = (0, m.bG)([tX.default], () => (null == n ? null : tX.default.getUser(n)), [n]),
                r = (0, tJ.tx)(a),
                s = iW(e),
                u =
                    (0, m.bG)([X.A], () => (null == t.guild_id ? null : X.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? eu.intl.string(es.default.R1tPlP),
                o = null == a || null == r ? null : { user: r, userHook: (e, t) => l(a.id, r, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? eu.intl.format(es.default.Lwsrhg, { app: s, server: u })
                        : eu.intl.format(es.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? eu.intl.format(es.default.mT7EQG, { app: s, server: u })
                        : eu.intl.format(es.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? eu.intl.format(es.default["4LVIeo"], { app: s, server: u })
                        : eu.intl.format(es.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? eu.intl.format(es.default["4VQfid"], { channel: e, server: u })
                        : eu.intl.format(es.default.RlMIJN, { channel: e, server: u, ...o });
                }
            }
        })(t, l, sD);
    return (0, r.jsx)(j.E, { variant: "text-md/normal", color: "text-default", children: n });
}
function sF(e) {
    let { onSelect: t, onClose: l = D.Z_, onRestoreVersion: n } = e;
    return (0, r.jsx)(Z.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: l,
        "aria-label": eu.intl.string(eu.t.ogxXGq),
        onSelect: t,
        children: (0, r.jsx)(ee.rX, {
            children: (0, r.jsx)(ee.Dr, {
                id: "restore-version",
                label: eu.intl.string(es.default.H8Jfhu),
                icon: sx.e,
                action: n,
            }),
        }),
    });
}
function sz(e, t, l) {
    let n = Math.max(0, Math.min(e.length, l)),
        a = Math.max(0, Math.min(n, t));
    return { start: a, end: n, startKey: e[a] ?? null, endKey: n >= e.length ? null : (e[n - 1] ?? null) };
}
function sO(e, t, l) {
    if (null == t) return l;
    let n = e.indexOf(t);
    return -1 === n ? l : n;
}
var sU = l(986109);
let sG = i.createContext(null);
function sq(e, t) {
    (0, iG.F)({ onConfirm: () => t(e) });
}
let sB = i.memo(function (e) {
        let {
                projectId: t,
                messages: l,
                emptyState: n,
                onPickIdea: a,
                onAskForIdeas: s,
                draftHasText: o,
                onApprovePlan: c,
                floatingSettingsMessageId: d,
                onRestoreVersion: f,
                scrollerRef: h,
                stickToBottomRef: g,
                pinned: x,
                onUnpin: p,
                handleRef: v,
                onShowsLatestChange: b,
            } = e,
            y = i.useRef(null),
            [k, N] = i.useState(null),
            A = i.useCallback((e) => {
                ((y.current = e), N(e));
            }, []),
            [S, C] = i.useState(null),
            E = i.useRef(0);
        i.useEffect(() => () => window.clearTimeout(E.current), []);
        let I = i.useCallback((e) => {
                (C(e), window.clearTimeout(E.current), (E.current = window.setTimeout(() => C(null), 1600)));
            }, []),
            M = (0, m.bG)([eA.Ay], () => eA.Ay.getPublishStatus(t)?.state ?? null),
            T = (0, m.bG)([tX.default], () => tX.default.getCurrentUser()?.id),
            _ = i.useMemo(() => {
                let e;
                return (function (e) {
                    let t = [],
                        l = (function (e) {
                            let t = new Set(),
                                l = !1;
                            for (let n = e.length - 1; n >= 0; n--) {
                                let a = e[n];
                                null != a &&
                                    null !=
                                        (function (e) {
                                            if ("assistant" !== e.role) return null;
                                            let t = (0, lW.lt)(e.steps);
                                            return null != t
                                                ? t
                                                : null != e.todos && e.todos.length > 0
                                                  ? e.todos
                                                  : null;
                                        })(a) &&
                                    (l && t.add(a.render_id), (l = !0));
                            }
                            return t;
                        })(e);
                    for (let n of e) {
                        let e = l.has(n.render_id),
                            a = sR.get(n);
                        if (null != a && a.superseded === e) {
                            t.push(...a.planned);
                            continue;
                        }
                        let r = (function (e, t) {
                            let l = [];
                            function n(e, t) {
                                l.push({ row: e, groupable: { key: e.key, ...t } });
                            }
                            if ("user" === e.role)
                                return (
                                    n(
                                        { kind: "user", key: e.render_id, message: e, groupStart: !1 },
                                        { actor: "user", authorId: e.user_id, boundary: void 0 },
                                    ),
                                    l
                                );
                            if ("publish_notice" === e.kind) {
                                let t = `${e.render_id}:publish`;
                                return (
                                    n(
                                        { kind: "publishNotice", key: t, message: e, groupStart: !1 },
                                        { actor: "assistant", boundary: t },
                                    ),
                                    l
                                );
                            }
                            if ("project_event" === e.kind) {
                                let t = `${e.render_id}:projectEvent`;
                                return (
                                    n(
                                        { kind: "projectEvent", key: t, message: e, groupStart: !1 },
                                        { actor: "assistant", boundary: t },
                                    ),
                                    l
                                );
                            }
                            let a = !(0, ej.BL)(e),
                                r = ap({
                                    steps: e.steps,
                                    content: e.content,
                                    hasProposal: null != e.proposal,
                                    hasAttachments: (e.attachments?.length ?? 0) > 0,
                                }),
                                i = r.lastStreamedMessage?.key,
                                s = (0, lW.C6)(e.steps, { turnActive: a }),
                                { lastWork: u, open: o } = (0, lW.CT)(s, { turnActive: a }),
                                c = s.at(-1)?.index,
                                d = !1;
                            for (let l of s) {
                                if (null != l.prose && sP.test(l.prose.content)) d = !0;
                                else if (null != l.prose && l.prose.key !== r.replyKey) {
                                    let t = `${e.render_id}:${l.key}`;
                                    n(
                                        {
                                            kind: "prose",
                                            key: t,
                                            message: e,
                                            groupStart: !1,
                                            content: l.prose.content,
                                            hostsAttachments:
                                                "streamed" === r.attachmentsHost &&
                                                l.prose.key === i &&
                                                null != e.attachments,
                                            streaming: a && l.index === c && !l.hasWork,
                                        },
                                        { actor: "assistant", boundary: t },
                                    );
                                }
                                (l.hasWork || l.hasTodos) &&
                                    n(
                                        {
                                            kind: "activity",
                                            key: `${e.render_id}:work-${l.index}`,
                                            message: e,
                                            groupStart: !1,
                                            segment: l.index,
                                            active: l.index === o,
                                            closed: l.index !== o,
                                            ...(null != l.durationMs ? { segmentDurationMs: l.durationMs } : {}),
                                            reportsDuration: l.index === u,
                                            hostsChecklist: l.hasTodos,
                                            turnActive: lX(e),
                                            checklistSuperseded: l.hasTodos && t,
                                        },
                                        { actor: null, boundary: void 0 },
                                    );
                            }
                            let m = sP.test(e.content ?? "");
                            if (
                                (!0 === e.interrupted || d || m
                                    ? n(
                                          {
                                              kind: "interrupted",
                                              key: `${e.render_id}:interrupted`,
                                              message: e,
                                              groupStart: !1,
                                          },
                                          { actor: null, boundary: void 0 },
                                      )
                                    : s.every((e) => !e.hasTodos) &&
                                      (e.todos?.length ?? 0) > 0 &&
                                      n(
                                          {
                                              kind: "legacyTodos",
                                              key: `${e.render_id}:todos`,
                                              message: e,
                                              groupStart: !1,
                                              checklistSuperseded: t,
                                          },
                                          { actor: null, boundary: void 0 },
                                      ),
                                (r.showsClosingMessage && !m) ||
                                    null != e.proposal ||
                                    null != e.clarification ||
                                    null != e.restoreProposal ||
                                    (!a &&
                                        (null != e.ideas ||
                                            null != e.publishCta ||
                                            null != e.secretRequest ||
                                            null != e.settingsRequest)) ||
                                    "standalone" === r.attachmentsHost)
                            ) {
                                let t = `${e.render_id}:closing`;
                                n(
                                    {
                                        kind: "closing",
                                        key: t,
                                        message: e,
                                        groupStart: !1,
                                        active: a,
                                        attachmentsHost: r.attachmentsHost,
                                        content: r.closingContent,
                                        sideReply: "side_reply" === e.kind,
                                    },
                                    {
                                        actor: "assistant",
                                        boundary: t,
                                        separate:
                                            null != e.proposal || null != e.clarification || "side_reply" === e.kind,
                                    },
                                );
                            }
                            return l;
                        })(n, e);
                        (sR.set(n, { superseded: e, planned: r }), t.push(...r));
                    }
                    let n = (function (e) {
                        let t,
                            l,
                            n = [],
                            a = null,
                            r = !1,
                            i = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                (n.push(!1), (a = null), (t = void 0), (r = !1), (i = !1), (l = void 0));
                                continue;
                            }
                            let e =
                                !r || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || i;
                            (e &&
                                ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (l = s.boundary)),
                                n.push(e));
                        }
                        return n;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: n[t] ?? !0 }));
                })(
                    ((e = (function (e, t) {
                        if ("unpublished" !== t) return null;
                        for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                        return null;
                    })(l, M)),
                    l.every((t) => null == t.publishCta || t.id === e)
                        ? l
                        : l.map((t) => {
                              if (null == t.publishCta || t.id === e) return t;
                              let l = r2.get(t);
                              return (null == l && ((l = { ...t, publishCta: null }), r2.set(t, l)), l);
                          })),
                );
            }, [l, M]),
            P = i.useMemo(() => _.map((e) => e.key), [_]),
            [R, L] = i.useState(null),
            D = (function (e, t, l) {
                if (null == t) return sz(e, e.length - 60, e.length);
                let n = null == t.endKey,
                    a = n ? e.length : sO(e, t.endKey, t.end - 1) + 1,
                    r = sO(e, t.startKey, t.start);
                return (n && l && a - r > 120 && (r = a - 60), sz(e, r, a));
            })(P, R, x),
            $ = i.useRef(D),
            F = i.useRef(P),
            z = i.useRef(_),
            O = i.useRef(null),
            U = i.useRef(null),
            G = i.useRef(new Set()),
            q = i.useCallback(() => {
                let e = h.current?.getScrollerNode(),
                    t = y.current;
                if (null == e || null == t) return;
                let l = e.getBoundingClientRect().top,
                    n = t.querySelectorAll("[data-conjure-row-key]"),
                    a = 0,
                    r = n.length - 1,
                    i = null;
                for (; a <= r;) {
                    let e = (a + r) >> 1;
                    n[e].getBoundingClientRect().bottom > l ? ((i = n[e]), (r = e - 1)) : (a = e + 1);
                }
                let s = i?.dataset.conjureRowKey;
                O.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - l } : null;
            }, [h]),
            B = i.useCallback(() => {
                let e = h.current?.getScrollerNode();
                if (null == e) return;
                let l = (function (e, t, l) {
                    let { nearTop: n, nearBottom: a, pinned: r } = l;
                    if (a && null != t.endKey) {
                        let l;
                        return ((l = Math.min(e.length, t.end + 30)), sz(e, Math.max(t.start, l - 120), l));
                    }
                    if (!n) return null;
                    if (0 === t.start) return "older";
                    if (!r && !a) {
                        let l, n;
                        return ((l = t.start - 30), (n = Math.min(t.end, Math.max(l, 0) + 120)), sz(e, l, n));
                    }
                    let i = Math.max(t.start - 30, t.end - 120);
                    return i < t.start ? sz(e, i, t.end) : null;
                })(F.current, $.current, {
                    nearTop: e.scrollTop < 600,
                    nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                    pinned: g.current,
                });
                "older" === l ? (0, el.P6)(t) : null != l && L(l);
            }, [h, g, t]);
        i.useImperativeHandle(
            v,
            () => ({
                handleScroll() {
                    (q(),
                        L((e) => {
                            let t = $.current;
                            return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                        }),
                        B());
                },
                recordAnchor: q,
                showLatest(e) {
                    ((U.current = e ?? null), L(null));
                },
            }),
            [q, B],
        );
        let H = i.useRef(null),
            K = i.useCallback(
                (e) => {
                    var l;
                    let n;
                    H.current = null;
                    let a = y.current?.querySelector(`[data-conjure-message="${e}"]`);
                    if (null != a) {
                        (p(), L($.current), a.scrollIntoView({ block: "center", behavior: "smooth" }), I(e));
                        return;
                    }
                    let r = z.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                    if (-1 === r) {
                        (0, el.P6)(t) && (H.current = e);
                        return;
                    }
                    (p(),
                        (U.current = () => {
                            (y.current
                                ?.querySelector(`[data-conjure-message="${e}"]`)
                                ?.scrollIntoView({ block: "center" }),
                                I(e));
                        }),
                        L(((l = F.current), sz(l, (n = Math.max(0, r - 30)), n + 60))));
                },
                [I, p, t],
            );
        (i.useEffect(() => {
            let e = H.current;
            null != e && K(e);
        }, [_, K]),
            i.useLayoutEffect(() => {
                if (null == k) return;
                let e = k.getBoundingClientRect().height,
                    t = new ResizeObserver((t) => {
                        let [l] = t,
                            n = l?.contentRect.height;
                        null != n && n !== e && ((e = n), g.current ? h.current?.scrollToBottom() : q());
                    });
                return (t.observe(k), () => t.disconnect());
            }, [k, q, h, g]));
        let V = null == D.endKey;
        (i.useEffect(() => b?.(V), [V, b]),
            i.useLayoutEffect(() => {
                (($.current = D), (F.current = P), (z.current = _));
            }),
            i.useLayoutEffect(() => {
                let e = h.current?.getScrollerNode(),
                    t = y.current;
                if (null != e && null != t) {
                    let l = O.current;
                    if (g.current) h.current?.scrollToBottom();
                    else if (null != l) {
                        let n = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                                (e) => e.dataset.conjureRowKey === l.key,
                            ),
                            a =
                                null == n
                                    ? 0
                                    : n.getBoundingClientRect().top - e.getBoundingClientRect().top - l.offset;
                        0 !== a && (e.scrollTop += a);
                    }
                    let n = U.current;
                    ((U.current = null), n?.(), q(), B());
                }
                G.current = new Set(P);
            }, [_, P, D.start, D.end, h, g, q, B]));
        let W = l.at(-1),
            X = (function (e, t, l) {
                var n;
                let a = (0, ls.Ay)(e),
                    r = (0, iq.A)(),
                    s = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let l = e[t];
                            if ("publish_notice" !== l.kind && "project_event" !== l.kind) {
                                if ("user" === l.role) return null;
                                if ((0, ej.BL)(l)) return l;
                                if (!(0, ej.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    u = t.at(-1),
                    o = {
                        projectId: e,
                        draftHasText: l,
                        publishing: a?.publishing === !0,
                        drift: a?.isUpdate === !0,
                        messageAt: null != u ? Math.max(u.created_at, u.finished_at ?? 0, u.settled_at ?? 0) : null,
                        visible: r,
                    },
                    [c, d] = i.useState(() => iK(o, Date.now())),
                    m = (function (e, t, l) {
                        if (e.projectId !== t.projectId) return iK(t, l());
                        if (
                            e.draftHasText === t.draftHasText &&
                            e.publishing === t.publishing &&
                            e.drift === t.drift &&
                            e.messageAt === t.messageAt &&
                            e.visible === t.visible
                        )
                            return e;
                        let n = l(),
                            a = { ...e, now: n };
                        if (
                            (e.draftHasText !== t.draftHasText &&
                                (a = {
                                    ...a,
                                    draftHasText: t.draftHasText,
                                    draftTyped: t.draftHasText,
                                    lastActivityAt: n,
                                    outdatedUpdating: t.publishing && a.outdatedUpdating,
                                }),
                            e.publishing !== t.publishing)
                        ) {
                            let e = a.outdatedUpdating && (t.publishing || t.drift);
                            a = {
                                ...a,
                                publishing: t.publishing,
                                lastActivityAt: e ? a.lastActivityAt : n,
                                outdatedShown: !1,
                                outdatedBackoff: 0,
                                outdatedUpdating: t.publishing && a.outdatedUpdating,
                            };
                        }
                        if (
                            (e.drift !== t.drift &&
                                ((a = { ...a, drift: t.drift }),
                                t.drift || (a = { ...a, outdatedShown: !1, outdatedBackoff: 0 })),
                            e.messageAt !== t.messageAt)
                        ) {
                            let l = null == t.messageAt ? null : Math.min(t.messageAt, n);
                            ((a = (function (e) {
                                if (!e.outdatedShown || e.publishing) return e;
                                let t = Math.min(e.outdatedBackoff + 1, iB.length - 1);
                                return { ...e, outdatedShown: !1, outdatedBackoff: t };
                            })({ ...a, messageAt: t.messageAt, lastMessageAt: l })).publishing ||
                                (a = { ...a, outdatedUpdating: !1 }),
                                t.visible || null == e.messageAt || (a = { ...a, unseen: !0 }));
                        }
                        return (
                            e.visible !== t.visible &&
                                ((a = { ...a, visible: t.visible }),
                                t.visible
                                    ? (n - (e.hiddenAt ?? n) >= 6e5
                                          ? (a = { ...a, visitStartedAt: n })
                                          : a.unseen && (a = { ...a, seenAt: n }),
                                      (a = { ...a, hiddenAt: null, unseen: !1 }))
                                    : (a = { ...a, hiddenAt: n, unseen: !1 })),
                            a
                        );
                    })(c, o, Date.now),
                    f =
                        null == s ||
                        null != (n = s).awaitingUser ||
                        null != n.secretRequest ||
                        null != n.settingsRequest ||
                        (n.intake?.questions.length ?? 0) > 0
                            ? null
                            : {
                                  turn: s,
                                  publish: a,
                                  draftHasText: l,
                                  draftTyped: m.draftTyped && l,
                                  outdatedUpdating: m.outdatedUpdating,
                              },
                    { shown: h, nextDueAt: g } = (function (e, t) {
                        var l;
                        let n;
                        if (t.unseen) return { shown: null, nextDueAt: null };
                        let a = e.filter((e) => e.eligible).sort((e, t) => t.priority - e.priority)[0];
                        if (null == a) return { shown: null, nextDueAt: null };
                        let r =
                            ((n = Math.max(
                                0,
                                t.now -
                                    ((l = a.clock),
                                    Math.max(
                                        t.lastMessageAt ?? -1 / 0,
                                        t.lastActivityAt ?? -1 / 0,
                                        t.seenAt ?? -1 / 0,
                                        "visit" === l ? t.visitStartedAt : -1 / 0,
                                    )),
                            )),
                            t.now + Math.max(0, a.idleDelayMs - n));
                        return r <= t.now ? { shown: a.key, nextDueAt: null } : { shown: null, nextDueAt: r };
                    })(
                        iH.map((e) => ({
                            ...e,
                            idleDelayMs:
                                "outdated" === e.key && m.outdatedUpdating
                                    ? 0
                                    : (e.backoffDelaysMs?.[m.outdatedBackoff] ?? e.idleDelayMs),
                            eligible: null != f && e.eligible(f),
                        })),
                        m,
                    );
                return (
                    "outdated" !== h || m.outdatedShown ? m !== c && d(m) : d({ ...m, outdatedShown: !0 }),
                    i.useEffect(() => {
                        function t() {
                            d((e) => ({ ...e, outdatedUpdating: !0 }));
                        }
                        let l = iV.get(e) ?? new Set();
                        return (
                            iV.set(e, l),
                            l.add(t),
                            () => {
                                (l.delete(t), 0 === l.size && iV.delete(e));
                            }
                        );
                    }, [e]),
                    i.useEffect(() => {
                        if (null == g) return;
                        let e = setTimeout(() => d((e) => ({ ...e, now: Date.now() })), Math.max(0, g - Date.now()));
                        return () => clearTimeout(e);
                    }, [g, m.now]),
                    h
                );
            })(t, l, !0 === o),
            J = i.useCallback(
                (e) => {
                    switch (e) {
                        case "outdated":
                            return (0, r.jsx)(s_, {
                                groupStart: !1,
                                content: "",
                                accessories: (0, r.jsx)(iX, { projectId: t, notice: "outdated" }),
                            });
                        case "ideas":
                            return (0, r.jsx)("div", {
                                className: sU.u$,
                                children: (0, r.jsx)(s_, {
                                    content: eu.intl.string(es.default.s96AWB),
                                    accessories: (0, r.jsx)(r9, { onAsk: s }),
                                }),
                            });
                    }
                },
                [t, s],
            ),
            Q = i.useMemo(
                () =>
                    (function (e) {
                        if (e.at(-1)?.role !== "assistant") return null;
                        for (let t = e.length - 1; t >= 0; t--) {
                            let l = e[t];
                            if ("assistant" === l.role) {
                                if (!(0, ej.BL)(l) || "plan_implemented" === l.kind) return null;
                                if (null != l.proposal) return l.render_id;
                            }
                        }
                        return null;
                    })(l),
                [l],
            ),
            Y = i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map(),
                            l = null,
                            n = 0;
                        for (let a of e)
                            if ("assistant" === a.role) {
                                if ("plan_implemented" === a.kind) {
                                    ((l = null), (n = 0));
                                    continue;
                                }
                                null != a.proposal &&
                                    (null != l && t.set(l, { version: n, superseded: !0 }),
                                    (n += 1),
                                    t.set(a.render_id, { version: n, superseded: !1 }),
                                    (l = a.render_id));
                            }
                        return t;
                    })(l),
                [l],
            ),
            Z = i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map(),
                            l = new Set();
                        for (let n = e.length - 1; n >= 0; n--) {
                            let a = e[n];
                            if ("user" === a.role) {
                                l.add(a.content.trim());
                                continue;
                            }
                            if (null == a.ideas) continue;
                            let r = new Set();
                            for (let e of a.ideas) l.has(e.implementation_prompt.trim()) && r.add(e.id);
                            t.set(a.render_id, r);
                        }
                        return t;
                    })(l),
                [l],
            ),
            ee = i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map();
                        for (let l of e)
                            "user" !== l.role ||
                                t.has(l.id) ||
                                t.set(l.id, {
                                    id: l.id,
                                    content: l.content,
                                    ...(null != l.user_id ? { userId: l.user_id } : {}),
                                    createdAt: l.created_at,
                                });
                        return t;
                    })(l),
                [l],
            ),
            et =
                (W?.role !== "assistant" || null == W.awaitingUser || null == W.secretRequest
                    ? null
                    : (0, ej.BL)(W)
                      ? W.awaitingUser
                      : null) ?? void 0,
            en = (0, m.bG)([el.Ay], () => el.Ay.getSettings(t)?.secrets, [t]),
            ea = i.useMemo(
                () =>
                    (function (e, t) {
                        let l = null != t ? new Set(t.filter((e) => e.set).map((e) => e.name)) : null,
                            n = new Map(),
                            a = new Set(),
                            r = !1,
                            i = !1;
                        for (let t = e.length - 1; t >= 0; t--) {
                            let s = e[t];
                            if (null == s) continue;
                            if ("user" === s.role) {
                                i =
                                    i ||
                                    (function (e) {
                                        let t = e.content.trim();
                                        return (
                                            t === eu.intl.string(es.default.UGqnoV) ||
                                            t === eu.intl.string(es.default.sMQt5O)
                                        );
                                    })(s);
                                continue;
                            }
                            let u = s.secretRequest?.fields ?? [];
                            if (0 === u.length || !(0, ej.BL)(s)) continue;
                            let o = i;
                            for (let e of (o && null == l
                                ? n.set(s.render_id, "pending")
                                : o && null != l && u.every((e) => l.has(e.name))
                                  ? n.set(s.render_id, "received")
                                  : r
                                    ? n.set(s.render_id, u.some((e) => a.has(e.name)) ? "superseded" : "inactive")
                                    : n.set(s.render_id, "open"),
                            u))
                                a.add(e.name);
                            ((r = !0), (i = !1));
                        }
                        return n;
                    })(l, en),
                [l, en],
            );
        if (0 === l.length) {
            if ("loading" === n)
                return (0, r.jsx)("ol", {
                    className: u()(sU.x7, sU.jH),
                    "aria-busy": !0,
                    children: (0, r.jsx)("li", { className: sU.Ub, children: (0, r.jsx)(w.y, {}) }),
                });
            let e = "unavailable" === n ? es.default.Td4Sf4 : es.default.V1QiNz;
            return (0, r.jsx)("ol", {
                className: sU.x7,
                children: (0, r.jsx)(sW, {
                    role: "assistant",
                    children: (0, r.jsx)(s_, { content: eu.intl.string(e) }),
                }),
            });
        }
        return (0, r.jsx)(sG.Provider, {
            value: G,
            children: (0, r.jsxs)("ol", {
                ref: A,
                className: sU.x7,
                children: [
                    _.slice(D.start, D.end).map((e) => {
                        let l = e.message;
                        if ("closing" !== e.kind)
                            return (0, r.jsx)(
                                sH,
                                {
                                    row: e,
                                    projectId: t,
                                    highlighted: "user" === e.kind && S === l.id,
                                    currentUserId: "user" === e.kind ? T : void 0,
                                },
                                e.key,
                            );
                        let n = l === W;
                        return (0, r.jsx)(
                            sH,
                            {
                                row: e,
                                projectId: t,
                                highlighted: !1,
                                replyTo: null != l.in_reply_to ? ee.get(l.in_reply_to) : void 0,
                                onJumpTo: K,
                                planVersion: Y.get(l.render_id),
                                pickedIdeaIds: Z.get(l.render_id),
                                secretRequestAwaiting: n ? et : void 0,
                                secretRequestStatus: ea.get(l.render_id),
                                settingsFloating: l.id === d,
                                isNewest: n,
                                onPickIdea: a,
                                onApprovePlan: l.render_id === Q ? c : void 0,
                                onRestoreVersion: f,
                            },
                            e.key,
                        );
                    }),
                    null != et && V
                        ? (0, r.jsx)(sW, {
                              role: "assistant",
                              continuation: !0,
                              children: (0, r.jsx)(s_, {
                                  groupStart: !1,
                                  content: "",
                                  accessories: (0, r.jsx)(j.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eu.intl.string(es.default.YR8A2v),
                                  }),
                              }),
                          })
                        : null,
                    V
                        ? (0, r.jsx)("li", {
                              role: "none",
                              className: sU.q3,
                              children: (0, r.jsx)(i1, { reminder: X, renderReminder: J }),
                          })
                        : null,
                ],
            }),
        });
    }),
    sH = i.memo(
        function (e) {
            let { row: t, projectId: l, highlighted: n, currentUserId: a, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, r.jsx)(sW, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: n,
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(sM, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            agentReaction: s.agentReaction,
                            accessories: null != e ? (0, r.jsx)(ii.A, { projectId: l, attachments: e }) : void 0,
                            onQueuedAction: (function (e, t, l) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === l
                                )
                                    return (l) => (0, el.tp)(e, t.id, l);
                            })(l, s, a),
                        }),
                    });
                }
                case "prose":
                    return (0, r.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(s_, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, r.jsx)(ii.A, { projectId: l, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, r.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(id, {
                            projectId: l,
                            steps: s.steps,
                            segment: t.segment,
                            active: t.active,
                            closed: t.closed,
                            segmentDurationMs: t.segmentDurationMs,
                            reportsDuration: t.reportsDuration,
                            hostsChecklist: t.hostsChecklist,
                            turnActive: t.turnActive,
                            checklistSuperseded: t.checklistSuperseded,
                            durationMs: null != s.finished_at ? s.finished_at - s.created_at : void 0,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "publishNotice":
                    return (0, r.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(s_, {
                            groupStart: t.groupStart,
                            content: null == s.publishNotice ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.publishNotice
                                    ? void 0
                                    : (0, r.jsx)(iX, { projectId: l, notice: s.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, r.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, r.jsx)(s_, {
                            groupStart: t.groupStart,
                            content: null == s.projectEvent ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.projectEvent
                                    ? void 0
                                    : (0, r.jsx)(s$, { projectId: l, event: s.projectEvent }),
                        }),
                    });
                case "interrupted":
                    return (0, r.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(id, { projectId: l, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, r.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, r.jsx)(id, {
                            projectId: l,
                            steps: sK,
                            active: !1,
                            checklistSuperseded: t.checklistSuperseded,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, r.jsx)(sV, { row: t, projectId: l, ...i });
            }
        },
        function (e, t) {
            return (
                (0, iO.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, iO.A)(e.row, t.row, ["message"]) &&
                e.row.kind === t.row.kind &&
                (function (e, t, l) {
                    if (t === l) return !0;
                    switch (e) {
                        case "user":
                            return (
                                t.id === l.id &&
                                t.content === l.content &&
                                t.created_at === l.created_at &&
                                t.user_id === l.user_id &&
                                t.agentReaction === l.agentReaction &&
                                t.attachments === l.attachments &&
                                t.disposition === l.disposition
                            );
                        case "prose":
                            return t.created_at === l.created_at && t.attachments === l.attachments;
                        case "publishNotice":
                            return (
                                t.content === l.content &&
                                t.created_at === l.created_at &&
                                t.publishNotice === l.publishNotice
                            );
                        case "projectEvent":
                            return (
                                t.content === l.content &&
                                t.created_at === l.created_at &&
                                t.projectEvent === l.projectEvent
                            );
                        default:
                            return !1;
                    }
                })(e.row.kind, e.row.message, t.row.message) &&
                (0, iO.A)(e.replyTo, t.replyTo) &&
                (0, iO.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let l of e) if (!t.has(l)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    sK = [];
function sV(e) {
    let {
            row: t,
            projectId: l,
            replyTo: n,
            onJumpTo: a,
            planVersion: i,
            pickedIdeaIds: s,
            secretRequestAwaiting: u,
            secretRequestStatus: o,
            settingsFloating: c = !1,
            isNewest: d = !1,
            onPickIdea: m,
            onApprovePlan: f,
            onRestoreVersion: h,
        } = e,
        g = t.message,
        x =
            null != h
                ? "assistant" !== g.role || null == g.sourceSha
                    ? null
                    : {
                          sha: g.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(g.created_at).toISOString(),
                          subject: g.content,
                      }
                : null,
        p = null != x && null != h ? () => sq(x, h) : void 0,
        v = g.in_reply_to,
        j = g.restoreProposal;
    return (0, r.jsx)(sW, {
        rowKey: t.key,
        role: "assistant",
        continuation: !t.groupStart,
        onContextMenu:
            null != p
                ? (e) => {
                      (0, D.jA)(e, (e) => (0, r.jsx)(sF, { ...e, onRestoreVersion: p }));
                  }
                : void 0,
        children: (0, r.jsx)(s_, {
            groupStart: t.groupStart,
            buttons: (0, r.jsx)(sy, { groupStart: t.groupStart, content: t.content, onRestoreVersion: p }),
            content: t.content,
            createdAt: g.created_at,
            replyTo: n,
            onJumpToReplied: null != v && null != a ? () => a(v) : void 0,
            accessories: (0, r.jsx)(im, {
                projectId: l,
                steps: g.steps,
                content: "",
                proposal: g.proposal,
                planVersion: i,
                interrupted: !0 === g.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: t.attachmentsHost,
                sideReply: t.sideReply,
                sideReplyAcknowledges: g.acknowledges,
                active: t.active,
                ideas: t.active ? void 0 : g.ideas,
                pickedIdeaIds: null == g.ideas ? void 0 : s,
                attachments: g.attachments,
                secretRequest: t.active ? void 0 : g.secretRequest,
                secretRequestId: g.render_id,
                secretRequestAwaiting: u,
                secretRequestStatus: o,
                settingsRequest: t.active || c ? void 0 : g.settingsRequest,
                publishCta: t.active ? null : g.publishCta,
                onPickIdea: m,
                onApprovePlan: f,
                restoreProposal: j,
                onRestoreProposal:
                    null != j && null != h && d
                        ? () =>
                              sq(
                                  {
                                      sha: j.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: j.authored_at,
                                      subject: j.subject,
                                  },
                                  h,
                              )
                        : void 0,
            }),
        }),
    });
}
function sW(e) {
    let {
            role: t,
            children: l,
            rowKey: n,
            anchorId: a,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(sG),
        [m] = i.useState(() => !iU.A.isFocused() || (null != n && d?.current.has(n) === !0));
    return (0, r.jsx)("li", {
        onContextMenu: c,
        "data-role": t,
        "data-conjure-message": a,
        "data-conjure-row-key": n,
        className: u()(sU.xk, { [sU.g5]: m, [sU.Qo]: s, [sU.q3]: o }),
        children: l,
    });
}
let sX = [es.default["AX+5lk"], es.default.VAU6A7, es.default["1emysd"], es.default.EXHX3L, es.default.ChslmX];
function sJ(e) {
    return sX.some((t) => eu.intl.string(t) === e);
}
function sQ(e) {
    switch (e) {
        case "connecting":
            return eu.intl.string(es.default["ECl+Dx"]);
        case "closed":
            return eu.intl.string(es.default.mQZSp1);
        case "failed":
            return eu.intl.string(es.default.xzJSZ6);
    }
}
var sY = l(823376),
    sZ = l(187447);
function s0(e) {
    let { activity: t, id: l } = e,
        n = (0, iq.A)(),
        { text: a, revealing: s } = sc(t?.text ?? "", { streaming: n && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [a]),
        (0, r.jsx)("div", {
            id: l,
            role: "tooltip",
            className: sZ.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, r.jsx)(lK.Ch, {
                ref: o,
                className: sZ.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, r.jsx)("div", {
                    className: u()(io.PT, sZ.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: ah.A.parse(a, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var s1 = l(53659);
function s2(e) {
    let {
            activity: t,
            compacting: l = !1,
            saving: n = !1,
            restoring: a = !1,
            recalling: s = !1,
            controlling: o = !1,
            spoken: c,
            onSpokenChange: d,
        } = e,
        m = i.useRef(null),
        f = i.useId(),
        [h, g] = i.useState(null),
        x = (function (e) {
            let {
                    activity: t,
                    compacting: l = !1,
                    saving: n = !1,
                    restoring: a = !1,
                    recalling: r = !1,
                    controlling: i = !1,
                } = e,
                s = null != t && "end" !== t.phase;
            return i
                ? es.default["1jqaAc"]
                : a
                  ? es.default.M4KI5F
                  : r
                    ? sX[0]
                    : n
                      ? es.default.mKK6wB
                      : l
                        ? es.default.xnCAaP
                        : s
                          ? es.default.izrt52
                          : es.default.L9EDub;
        })({ activity: t, compacting: l, saving: n, restoring: a, recalling: s, controlling: o }),
        p = eu.intl.string(x),
        v = x === sX["0"],
        [y, k] = i.useState(c ?? p),
        w = (0, iq.A)();
    (!n && (w || v)) || y === p || k(p);
    let N = i.useRef(p);
    (i.useEffect(() => {
        N.current = p;
    }, [p]),
        i.useEffect(() => {
            d?.(y);
        }, [y, d]));
    let A = i.useRef(null),
        S = i.useRef(y);
    i.useEffect(() => {
        S.current = y;
    }, [y]);
    let C = i.useRef(v),
        E = i.useRef(0);
    (i.useEffect(() => {
        ((C.current = v), !v && sJ(S.current) && k(N.current));
    }, [v]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function l() {
                if (C.current) {
                    var e;
                    ((E.current = sJ(S.current) ? E.current + 1 : 0),
                        k(((e = E.current), eu.intl.string(sX[e % sX.length]))));
                } else N.current !== S.current ? k(N.current) : A.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (l(), (t = window.setInterval(l, 2400)));
                }, 1800)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [w]));
    let I = null != t && "" !== t.text,
        M = t?.session ?? null,
        T = I && null != M && h === M,
        _ = i.useCallback(() => {
            I && null != M && g((e) => (e === M ? null : M));
        }, [I, M]),
        P = i.useCallback(() => g(null), []);
    return (0, r.jsx)(Y.Y, {
        targetElementRef: m,
        position: "top",
        align: "left",
        shouldShow: T,
        onRequestClose: P,
        renderPopout: () => (0, r.jsx)(s0, { id: f, activity: t }),
        children: () =>
            (0, r.jsxs)(b.D, {
                innerRef: m,
                className: u()(s1.hF, I && s1.Xd),
                "aria-label": eu.intl.string(a ? es.default.qqlUiW : v ? sX["0"] : es.default["Uuj/gh"]),
                "aria-expanded": T,
                "aria-describedby": T ? f : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": eu.intl.string(x),
                onClick: _,
                children: [
                    (0, r.jsx)("span", {
                        className: s1.bl,
                        children: (0, r.jsx)(sY.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", {
                        className: s1.xu,
                        "aria-hidden": !!o || !!v || void 0,
                        children: w
                            ? (0, r.jsx)(e_.o, {
                                  ref: A,
                                  text: y,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: s1.yE,
                              })
                            : (0, r.jsx)(j.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: s1.yE,
                                  children: y,
                              }),
                    }),
                ],
            }),
    });
}
let s3 = { second: 1e3, minute: 6e4 };
function s4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let l;
            if (null == e) return;
            let a = s3[t];
            return (
                !(function t() {
                    let r = Date.now();
                    (n(r), (l = setTimeout(t, a - ((((r - e) % a) + a) % a))));
                })(),
                () => clearTimeout(l)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, l - e)
    );
}
var s6 = l(719374);
function s5(e) {
    let { startedAt: t } = e,
        l = s4(t);
    return (0, r.jsx)(j.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: s6.$,
        "data-conjure-turn-timer": !0,
        children: (0, ag.C7)(l),
    });
}
function s7(e) {
    let { startedAt: t } = e,
        l = s4(t, "minute");
    return (0, r.jsx)(k.A, { role: "timer", children: (0, ag.Us)(l) });
}
var s8 = l(436804);
function s9(e) {
    return e.toLocaleString();
}
function ue(e) {
    let { label: t, usage: l, cached: n = !0 } = e;
    return (0, r.jsxs)("div", {
        className: s8.Q$,
        children: [
            (0, r.jsxs)("div", {
                className: s8.mf,
                children: [
                    (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, r.jsxs)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [s9((0, Q.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, r.jsxs)(j.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    s9(l.input_tokens),
                    " in \xb7 ",
                    s9(l.output_tokens),
                    " out",
                    n
                        ? ` \xb7 ${s9(l.cache_creation_input_tokens)} cache write \xb7 ${s9(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function ut(e) {
    let { project: t } = e,
        l = (0, Q.wU)(t.compaction),
        n = (0, Q.wU)(t.classifier),
        a = (0, Q.wV)(t.orchestrator, t.codegen),
        i = (0, Q.wV)(a, l);
    return (0, r.jsxs)("div", {
        className: s8.si,
        role: "dialog",
        "aria-label": eu.intl.string(es.default.p5EGzq),
        children: [
            (0, r.jsx)("div", {
                className: s8.Q$,
                children: (0, r.jsxs)("div", {
                    className: s8.mf,
                    children: [
                        (0, r.jsxs)(j.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [s9((0, Q.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, r.jsxs)(j.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(ue, { label: eu.intl.string(es.default["9Sj3SX"]), usage: a }),
            (0, r.jsx)(ue, { label: eu.intl.string(es.default.ANCEo3), usage: l }),
            (0, r.jsx)(ue, { label: eu.intl.string(es.default.ugL6D4), usage: n, cached: !1 }),
            (0, r.jsxs)("div", {
                className: s8.mf,
                children: [
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eu.intl.string(es.default["8OUg09"]),
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, Q.sj)(i) ? "\u2014" : `${Math.round(100 * (0, Q.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function ul(e) {
    let { project: t } = e,
        l = i.useRef(null);
    return (0, r.jsx)(Y.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, r.jsx)(ut, { project: t }),
        children: (e) =>
            (0, r.jsx)(b.D, {
                innerRef: l,
                className: s8.Y$,
                "aria-label": eu.intl.string(es.default.Z96gxQ),
                ...e,
                children: (0, r.jsx)(aW.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var un = l(997421);
function ua(e) {
    let t,
        {
            projectId: l,
            thinking: n,
            turnStartedAt: a,
            restoring: s = !1,
            recalling: u = !1,
            thinkingActivity: o,
            compacting: c,
            saving: d,
            projectUsage: m,
            connState: f,
        } = e,
        h = (0, tp.Zv)(l),
        [g, x] = i.useState(null),
        p = i.useCallback((e) => x(sJ(e) || e === eu.intl.string(es.default.mKK6wB) ? null : e), []),
        v =
            null == m
                ? null
                : ((t = (0, Q.a7)(m.cost_usd)),
                  {
                      text: eu.intl.formatToPlainString(es.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: eu.intl.formatToPlainString(es.default.Z4LvGa, { runes: t, turns: m.turns }),
                  }),
        b = n && null != a;
    return (0, r.jsxs)("div", {
        className: un.jf,
        children: [
            (0, r.jsxs)("div", {
                className: un.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    n || s || u || h || !0 === d
                        ? (0, r.jsx)(s2, {
                              activity: o,
                              compacting: c,
                              saving: d,
                              restoring: s,
                              recalling: u,
                              controlling: h,
                              spoken: g,
                              onSpokenChange: p,
                          })
                        : null,
                    b ? (0, r.jsx)(s5, { startedAt: a }) : null,
                ],
            }),
            b ? (0, r.jsx)(s7, { startedAt: a }) : null,
            null == m || null == v
                ? null
                : (0, r.jsxs)("span", {
                      className: un.BP,
                      children: [
                          (0, r.jsx)(j.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": v.aria,
                              children: v.text,
                          }),
                          (0, r.jsx)(ul, { project: m }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, r.jsx)(j.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": eu.intl.formatToPlainString(es.default["tCo+ZM"], { status: sQ(f) }),
                      "data-conjure-conn": !0,
                      "data-state": f,
                      className: un.XF,
                      children: sQ(f),
                  }),
        ],
    });
}
let ur = ["wheel", "touchstart", "pointerdown", "keydown"];
var ui = l(698638),
    us = l(608711);
let uu = [eu.intl.string(es.default["9w+Chc"]), eu.intl.string(es.default.WAvmdq), eu.intl.string(es.default.SKsrzl)];
function uo(e) {
    var t;
    let { projectId: l, restoreState: n, onRestoreVersion: a, onImportProject: s } = e,
        u = (0, m.bG)([ej.Ay], () => ej.Ay.getMessages(l), [l]),
        o = (0, m.bG)([el.Ay], () => el.Ay.getConnState(l), [l]),
        c = (0, m.bG)([el.Ay], () => el.Ay.isChatStopped(l), [l]),
        d = (0, m.bG)([ej.Ay], () => ej.Ay.getProjectUsage(l), [l]),
        f = (0, m.bG)([ej.Ay], () => ej.Ay.getThinkingActivity(l), [l]),
        h = (0, m.bG)([ej.Ay], () => ej.Ay.isCompacting(l), [l]),
        g = (0, m.bG)([ej.Ay], () => ej.Ay.isSaving(l), [l]),
        x = (0, m.bG)([el.Ay], () => el.Ay.getModelSettings(l), [l]),
        p = i.useRef(null),
        v = i.useRef(null),
        b = i.useRef(null),
        {
            stickToBottomRef: y,
            pinned: k,
            atBottom: w,
            unpin: A,
            releasePinHold: S,
            showsLatest: C,
            showsLatestRef: E,
            handleShowsLatestChange: I,
            updatePin: M,
        } = (function (e) {
            let t = i.useRef(!0),
                [l, n] = i.useState(!0),
                [a, r] = i.useState(!0),
                s = i.useRef(!1),
                u = i.useCallback(() => {
                    ((s.current = !0), (t.current = !1), n(!1));
                }, []),
                o = i.useCallback(() => {
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
                    for (let e of ur) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of ur) t.removeEventListener(e, o);
                    };
                }
            }, [e, o]);
            let h = i.useCallback(() => {
                let l = e.current;
                if (null == l) return;
                let a = l.getDistanceFromBottom(),
                    i = !s.current && a < 32 && m.current;
                t.current = i;
                let u = a > 1 || !m.current;
                (r((e) => (!u === e ? e : !u)), n((e) => (e === i ? e : i)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: l,
                atBottom: a,
                unpin: u,
                releasePinHold: o,
                showsLatest: c,
                showsLatestRef: m,
                handleShowsLatestChange: f,
                updatePin: h,
            };
        })(v),
        T = i.useCallback(() => {
            function e() {
                let e = p.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    l = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    n = t ?? l[l.length - 1];
                if (null == n) return;
                let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
            }
            (S(), E.current ? e() : b.current?.showLatest(e));
        }, [S, E]),
        _ = i.useCallback(() => {
            (M(), b.current?.handleScroll());
        }, [M]);
    (i.useLayoutEffect(() => {
        let e = p.current;
        if (null == e) return;
        let t = v.current?.getScrollerNode(),
            l = e.getBoundingClientRect().width,
            n = t?.getBoundingClientRect().height,
            a = new ResizeObserver((t) => {
                let a = !1;
                for (let r of t)
                    if (r.target === e) {
                        let e = r.contentRect.width;
                        if (e === l) continue;
                        ((l = e), (a = !0));
                    } else {
                        let e = r.contentRect.height;
                        if (e === n) continue;
                        ((n = e), (a = !0));
                    }
                a && (y.current ? v.current?.scrollToBottom() : b.current?.recordAnchor());
            });
        return (a.observe(e), null != t && a.observe(t), () => a.disconnect());
    }, [y]),
        i.useEffect(() => {
            (0, el.Hc)(l);
        }, [l]),
        (0, eb.E1)(l));
    let P = e9(l),
        R = i.useCallback(
            (e, t) => {
                (0, el.dv)(l, e, t);
            },
            [l],
        ),
        L = i.useCallback(
            (e, t) => {
                0 === P.annotations.length
                    ? R(e, t)
                    : (R(
                          (function (e) {
                              let { annotations: t, metaComment: l, context: n } = e,
                                  a = t.filter((e) => eV(e.comment)),
                                  r = [];
                              if (
                                  (r.push(
                                      `My design feedback: ${1 === a.length ? "1 comment" : `${a.length} comments`} on the app.`,
                                  ),
                                  null != n)
                              ) {
                                  let e = n.title.trim(),
                                      t = "" !== e ? `${e} (${n.url})` : n.url;
                                  (r.push(`Page: ${t}, viewport ${n.viewport.width}x${n.viewport.height}.`),
                                      r.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              a.forEach((e, t) => {
                                  let l;
                                  (r.push(""),
                                      r.push(`${t + 1}. ${eJ(e.target)}`),
                                      r.push(
                                          `   Feedback: ${(l = e.comment.trim()).length <= 1e3 ? l : `${l.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = l.trim();
                              return ("" !== i && (r.push(""), r.push(`Note for the whole batch: ${i}`)), r.join("\n"));
                          })({ annotations: P.annotations, metaComment: e, context: P.context }),
                          t,
                      ),
                      e6(l));
            },
            [P, R, l],
        ),
        D = i.useCallback(() => (0, el.fu)(l), [l]),
        $ = i.useCallback((e) => nJ(l, e.implementation_prompt), [l]),
        [F, z] = (function (e) {
            let [t, l] = i.useState(() => am(e)),
                [n, a] = i.useState(e),
                r = n !== e,
                s = r ? am(e) : t;
            return (r && (a(e), l(s)), [s, l]);
        })(l),
        O = i.useCallback(() => R(eu.intl.string(es.default["t5CN3+"])), [R]),
        U = i.useCallback((e, t, n) => nJ(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        G = i.useCallback((e) => (0, el.XZ)(l, e), [l]),
        q = i.useCallback((e) => (0, el.vX)(l, e), [l]),
        B = i.useCallback((e) => iE(l, "chat", Array.from(e), q), [l, q]),
        H = i.useCallback(() => nJ(l, eu.intl.string(es.default.Zc7gML)), [l]),
        K = n?.status === "restoring",
        V = "open" === o && !c && !K,
        W = u[u.length - 1],
        X = null != W && "assistant" === W.role && null != W.proposal,
        [J, Q] = i.useState(null),
        Y = W?.clarification != null && W.clarification.id !== J ? W.clarification : null,
        Z = i.useCallback(() => {
            null != Y && Q(Y.id);
        }, [Y]),
        ee = (0, m.bG)([el.Ay], () => el.Ay.getSettings(l), [l]),
        [et, en] = i.useState(null),
        ea =
            null != W &&
            "assistant" === W.role &&
            null != W.settingsRequest &&
            (0, ej.BL)(W) &&
            W.id !== et &&
            ((t = W.settingsRequest),
            null != ee &&
                (t.keys ?? []).some((e) => {
                    let t = ee.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return ee.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = ee.values[e];
                    return null == l || "" === l;
                }))
                ? W
                : null,
        er = ea?.settingsRequest ?? null,
        ei = i.useCallback(() => {
            null != ea && en(ea.id);
        }, [ea]),
        eo = null != er,
        ec = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, m.bG)([ej.Ay], () => ej.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, m.bG)([ej.Ay], () => ej.Ay.isHistoryUnavailable(l), [l]),
            connState: o,
        }),
        ed = "loading" === ec && 0 === u.length,
        em = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return uu[e % uu.length];
        }, [l]),
        ef = X ? eu.intl.string(es.default.Zc7gML) : "greeting" === ec && 0 === u.length ? em : null,
        eh = i.useMemo(() => {
            for (let e = u.length - 1; e >= 0; e--) {
                let t = u[e];
                if ("assistant" === t.role && !(0, ej.BL)(t)) return t;
            }
        }, [u]),
        eg = null != eh,
        ex =
            null != eh
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = an.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(eh)
                : void 0,
        ep = X && V ? H : void 0,
        ev = i.useCallback(() => nJ(l, eu.intl.string(es.default.EMgIuY)), [l]),
        [ey, ek] = i.useState(null),
        [ew, eN] = i.useState(eg);
    (ew !== eg && (eN(eg), eg || ek(null)),
        i.useEffect(() => {
            if (!eg) return;
            let e = v.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? ek(null)
                        : ek(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [eg, eh?.steps, C]));
    let eA = C ? ey : "bottom",
        eS = i.useMemo(() => (null != eh ? (0, lJ.b)(eh.steps) : ""), [eh]),
        eC = i.useMemo(() => (null != eh ? ((0, lW.lt)(eh.steps) ?? eh.todos) : void 0), [eh]),
        eE = eh?.provisionalTodo,
        eI = null != eh && lX(eh),
        eM = i.useMemo(() => {
            var e;
            return null != eh ? ((e = eh.steps), ic((0, lW.Jf)(e, !0).tasks)) : void 0;
        }, [eh]);
    return (0, r.jsxs)("section", {
        ref: p,
        "data-conjure-chat": !0,
        className: us.TE,
        children: [
            V
                ? (0, r.jsx)(lV.A, {
                      title: eu.intl.string(es.default.gy7byi),
                      description: eu.intl.string(es.default["dkv/WO"]),
                      icons: ui.ir,
                      onDrop: B,
                  })
                : null,
            (0, r.jsx)(na, {
                onJumpToActivity: T,
                line: eS,
                placement: eg && "top" === eA ? "top" : null,
                todos: eC,
                todosLive: eI,
                provisionalTodo: eE,
                agents: eM,
            }),
            (0, r.jsxs)("div", {
                className: us.JX,
                children: [
                    (0, r.jsx)(lK.Ch, {
                        ref: v,
                        onScroll: _,
                        scrollbarGutter: ed ? "both-edges" : "stable",
                        className: [us.N$, w ? null : us.hB, eo ? us.J9 : null].filter(Boolean).join(" "),
                        children: (0, r.jsx)(sB, {
                            projectId: l,
                            messages: u,
                            emptyState: ec,
                            floatingSettingsMessageId: ea?.id,
                            onPickIdea: V ? $ : void 0,
                            onAskForIdeas: V ? O : void 0,
                            draftHasText: F,
                            onApprovePlan: V ? ev : void 0,
                            onRestoreVersion: K || eg ? void 0 : a,
                            scrollerRef: v,
                            stickToBottomRef: y,
                            pinned: k,
                            onUnpin: A,
                            handleRef: b,
                            onShowsLatestChange: I,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: us.NJ,
                        children: (0, r.jsx)(ua, {
                            projectId: l,
                            thinking: eg,
                            turnStartedAt: ex,
                            restoring: K,
                            recalling: ed,
                            thinkingActivity: f,
                            compacting: h,
                            saving: g,
                            projectUsage: d,
                            connState: o,
                        }),
                    }),
                    null == Y
                        ? null
                        : (0, r.jsx)("div", {
                              className: eo ? `${us.B5} ${us.J9}` : us.B5,
                              children: (0, r.jsx)(
                                  n9,
                                  { projectId: l, clarification: Y, onSubmit: V ? U : void 0, onDismiss: Z },
                                  Y.id,
                              ),
                          }),
                    null == er
                        ? null
                        : (0, r.jsx)("div", {
                              className: us.B5,
                              children: (0, r.jsx)(al, { projectId: l, request: er, onDismiss: ei }, ea?.id),
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: us.Jx,
                children: [
                    (0, r.jsx)(na, {
                        onJumpToActivity: T,
                        line: eS,
                        placement: eg && "bottom" === eA ? "bottom" : null,
                        todos: eC,
                        todosLive: eI,
                        provisionalTodo: eE,
                        agents: eM,
                    }),
                    0 === P.annotations.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: us.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, r.jsx)(j.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: eu.intl.formatToPlainString(es.default["7b49dS"], {
                                          count: P.annotations.length,
                                      }),
                                  }),
                                  (0, r.jsx)(j.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eu.intl.string(es.default["5zG+CR"]),
                                  }),
                                  (0, r.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: eu.intl.string(es.default["/zOv9+"]),
                                      onClick: () => e6(l),
                                  }),
                              ],
                          }),
                    (0, r.jsx)(iD, {
                        projectId: l,
                        canSend: V,
                        stopped: c,
                        running: eg,
                        restoring: K,
                        onSend: L,
                        hasPendingContext: P.annotations.length > 0,
                        onInterrupt: V ? D : void 0,
                        onUploadFile: q,
                        onImport: s,
                        onApprove: ep,
                        suggestion: ef,
                        questionOpen: null != Y || null != er,
                        modelSettings: x,
                        onModelSettingsChange: G,
                        onDraftHasTextChange: z,
                    }),
                ],
            }),
        ],
    });
}
var uc = l(761508),
    ud = l(616e3);
function um(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function uf(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function uh(e) {
    switch (e) {
        case "subagent":
            return eu.intl.string(es.default.PbKt9r);
        case "context":
            return eu.intl.string(es.default["tNk/P2"]);
        case "tool":
            return eu.intl.string(es.default.NBOJcw);
        case "delegated":
            return eu.intl.string(es.default.QgrFdt);
        default:
            return eu.intl.string(es.default.LsLVUy);
    }
}
var ug = l(536113);
let ux = { started: ug.Vf, ok: ug.mo, error: ug.Sr };
function up(e) {
    let { status: t } = e;
    return (0, r.jsx)("span", {
        className: `${ug.Om} ${ux[t] ?? ug.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return eu.intl.string(es.default["2wyRDK"]);
                case "error":
                    return eu.intl.string(es.default["2Cu8n+"]);
                default:
                    return eu.intl.string(es.default["6kgw6D"]);
            }
        })(t),
    });
}
function uv(e, t) {
    return String(e).padStart(t, "0");
}
function uj(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${uv(n.getHours(), 2)}:${uv(n.getMinutes(), 2)}:${uv(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${uv(n.getMilliseconds(), 3)}` : a;
}
var ub = l(667931);
let uy = {
    op: "Operation",
    model: "Model",
    tool: "Tool",
    setup: "Setup",
    worktree: "Git worktree",
    sandbox: "Sandbox",
    build: "Build",
    platform: "Platform",
    other: "Other",
};
function uk(e) {
    return um(Math.round(e));
}
function uw(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function uN(e) {
    return uk(e.count > 1 ? e.totalMs : e.end - e.start);
}
function uA(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function uS(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function uC(e) {
    let t = (0, ub.bM)(e)?.end;
    return null != t ? um(t) : (0, ub.lp)(e) ? "interrupted" : "still running";
}
function uE(e) {
    return [uj(new Date(e.started_at).toISOString()) ?? "", uw(e.spans.length), (0, ub.Sj)((0, ub.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
var uI = l(738188),
    uM = l(430993),
    uT = l(364840),
    u_ = l(224640),
    uP = l(20742);
function uR(e, t) {
    let l = e.attrs?.[t];
    return "number" == typeof l ? l : 0;
}
let uL = { collapsed: new Set(), revealed: new Set() };
var uD = l(872892);
let u$ = {
    op: uD.Q,
    model: uD.i3,
    tool: uD.dH,
    setup: uD.kc,
    worktree: uD.Qx,
    sandbox: uD.QH,
    build: uD.F1,
    platform: uD.Op,
    other: uD.fv,
};
function uF(e) {
    return `conjure-perf-trace-${e}`;
}
function uz(e) {
    let { start: t, end: l, extent: n, barClass: a, duration: i } = e,
        s = (t / n) * 100,
        u = ((l - t) / n) * 100;
    return (0, r.jsxs)("div", {
        className: uD.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, r.jsx)("div", { className: a }),
            (0, r.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${uD.p0} ${s + u > 85 ? uD.EU : uD.jh}`,
                children: i,
            }),
        ],
    });
}
function uO(e) {
    let { node: t, extent: l, collapsed: n, selected: a, onSelect: s, onToggle: u, onExpandSubtree: o } = e,
        c = t.children.length > 0,
        d = n ? tr._ : tq.a,
        m = i.useCallback(
            (e) => {
                (e.shiftKey && o(t.key), s(t.key));
            },
            [t.key, o, s],
        ),
        f = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? o(t.key) : u(t.key));
            },
            [t.key, o, u],
        );
    return (0, r.jsxs)(b.D, {
        tag: "div",
        role: "treeitem",
        id: uF(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !n : void 0,
        "aria-selected": a,
        className: `${uD.$y} ${a ? uD.wQ : ""}`,
        onClick: m,
        children: [
            (0, r.jsxs)("div", {
                className: uD.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, r.jsx)(b.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: uD.ai,
                              onClick: f,
                              children: (0, r.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, r.jsx)("span", { className: uD.YJ }),
                    (0, r.jsx)(j.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: uD.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, r.jsx)("span", { className: `${uD.nf} ${u$[t.category]}` }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: uD.eu,
                        children: t.service,
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: uD.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, r.jsx)(j.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: uD.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, r.jsx)(uI.WarningIcon, { size: "xs", color: "currentColor", className: uD.ik })
                        : null,
                ],
            }),
            (0, r.jsx)(uz, {
                start: t.start,
                end: t.end,
                extent: l,
                barClass: t.failed
                    ? `${uD.M0} ${uD.Nh}`
                    : t.running
                      ? `${uD.M0} ${uD.rF}`
                      : `${uD.M0} ${u$[t.category]}`,
                duration: uN(t),
            }),
        ],
    });
}
function uU(e) {
    let { row: t, extent: l, selected: n, onReveal: a } = e;
    return (0, r.jsxs)(b.D, {
        tag: "div",
        role: "treeitem",
        id: uF(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": n,
        className: `${uD.$y} ${n ? uD.wQ : ""}`,
        onClick: () => a(t.parentKey),
        children: [
            (0, r.jsxs)("div", {
                className: uD.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, r.jsx)("span", {
                        className: uD.ai,
                        children: (0, r.jsx)(tr._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", { className: uD.U9 }),
                    (0, r.jsx)("span", { className: `${uD.nf} ${uD.dL}` }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: uD.MQ,
                        children: uw(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, r.jsx)(uz, {
                start: t.start,
                end: t.end,
                extent: l,
                barClass: `${uD.M0} ${uD.ab} ${uD.dL}`,
                duration: uk(t.totalMs),
            }),
        ],
    });
}
function uG(e) {
    let { node: t } = e;
    return null == t
        ? (0, r.jsx)(j.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, r.jsxs)("div", {
              className: uD._0,
              children: [
                  (0, r.jsxs)("div", {
                      className: uD.TQ,
                      children: [
                          (0, r.jsx)("span", { className: `${uD.nf} ${u$[t.category]}` }),
                          (0, r.jsx)(j.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [uA("Start", `+${uk(e.start)}`), uA("Duration", uN(e))];
                      for (let [l, n] of (e.count > 1
                          ? t.push(
                                uA("Calls", String(e.count)),
                                uA("Longest call", uk(e.maxMs)),
                                uA("Spread over", uk(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(uA("Self time", uk(e.selfMs))),
                      Object.entries({ ...e.span.attrs, ...(1 === e.count ? e.span.details : null) })))
                          t.push(uA(l.replace(/_/g, " "), "cost_usd" === l ? uS(Number(n)) : String(n)));
                      let l = e.span.waits_on;
                      null != l && t.push(uA("Waited on", `${l.span_name} in ${l.trace_name}`));
                      let n = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      return (
                          n.length > 0 && t.push(uA("Notes", n.join(", "))),
                          null != e.span.error && t.push(uA("Error", e.span.error)),
                          t
                      );
                  })(t).map((e) => {
                      let { label: t, value: l, block: n } = e;
                      return (0, r.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  (0, r.jsx)(j.E, { variant: "text-xs/semibold", color: "text-muted", children: t }),
                                  n
                                      ? (0, r.jsx)(j.E, {
                                            variant: "code",
                                            color: "text-default",
                                            selectable: !0,
                                            className: uD.vl,
                                            children: l,
                                        })
                                      : (0, r.jsx)(j.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            tabularNumbers: !0,
                                            selectable: !0,
                                            children: l,
                                        }),
                              ],
                          },
                          t,
                      );
                  }),
              ],
          });
}
function uq(e) {
    let { trace: t } = e,
        l = i.useMemo(
            () =>
                (function (e) {
                    let t = (0, ub.W7)(e),
                        l = new Map(),
                        n = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 },
                        a = { count: 0, ms: 0 },
                        r = 0;
                    for (let i of e.spans) {
                        let { service: s, category: u } = (0, ub.N5)(i);
                        (l.set(u, (l.get(u) ?? 0) + (t.get(i.id) ?? 0)),
                            "model" === s
                                ? ((n.calls += 1),
                                  (n.input += uR(i, "in")),
                                  (n.output += uR(i, "out")),
                                  (n.cacheRead += uR(i, "cache_read")),
                                  (n.cacheWrite += uR(i, "cache_write")),
                                  (n.costUsd += uR(i, "cost_usd")))
                                : "tool" === s
                                  ? (r += 1)
                                  : "sandbox.exec" === i.name &&
                                    ((a.count += 1), (a.ms += (i.end ?? e.as_of) - i.start)));
                    }
                    let i = ub.BF.map((e) => ({ category: e, ms: l.get(e) ?? 0 }));
                    return { categories: i, busyMs: i.reduce((e, t) => e + t.ms, 0), model: n, toolCalls: r, execs: a };
                })(t),
            [t],
        ),
        n = i.useMemo(() => (0, ub.$N)(t, 6), [t]);
    return (0, r.jsxs)("div", {
        className: uD.M1,
        children: [
            (0, r.jsx)("div", {
                className: uD.Fc,
                "aria-hidden": !0,
                children: l.categories.map((e) => {
                    let { category: t, ms: l } = e;
                    return 0 === l
                        ? null
                        : (0, r.jsx)(
                              "div",
                              {
                                  className: `${uD.DJ} ${u$[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(l) },
                              },
                              t,
                          );
                }),
            }),
            (0, r.jsx)("div", {
                className: uD.o1,
                children: ub.BF.map((e) => {
                    let t,
                        n =
                            0 === (t = l.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === l.busyMs
                                ? null
                                : `${Math.round((t / l.busyMs) * 100)}% \xb7 ${uk(t)}`;
                    return (0, r.jsxs)(
                        "span",
                        {
                            className: uD.fI,
                            children: [
                                (0, r.jsx)("span", { className: `${uD.nf} ${u$[e]}` }),
                                (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: uy[e] }),
                                null == n
                                    ? null
                                    : (0, r.jsx)(j.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: n,
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            (0, r.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: "Time outside child spans, by category. Parallel work adds up.",
            }),
            (function (e) {
                let { model: t, execs: l } = e;
                return [
                    0 === t.calls
                        ? null
                        : [
                              uw(t.calls, "model call"),
                              `${uf(t.input)} in`,
                              `${uf(t.output)} out`,
                              `${uf(t.cacheRead)} cache read`,
                              `${uf(t.cacheWrite)} cache write`,
                              uS(t.costUsd),
                          ].join(" \xb7 "),
                    0 === e.toolCalls ? null : uw(e.toolCalls, "tool call"),
                    0 === l.count ? null : `${uw(l.count, "sandbox exec")} \xb7 ${uk(l.ms)}`,
                ].filter((e) => null != e);
            })(l).map((e) =>
                (0, r.jsx)(
                    j.E,
                    { variant: "text-sm/normal", color: "text-default", tabularNumbers: !0, children: e },
                    e,
                ),
            ),
            0 === n.length
                ? null
                : (0, r.jsxs)("div", {
                      className: uD.xZ,
                      children: [
                          (0, r.jsx)(j.E, {
                              variant: "text-sm/semibold",
                              color: "text-default",
                              children: "Most time",
                          }),
                          n.map((e) => {
                              let { name: t, ms: l } = e;
                              return (0, r.jsx)(
                                  j.E,
                                  {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      tabularNumbers: !0,
                                      children: `${t} ${uk(l)}`,
                                  },
                                  t,
                              );
                          }),
                      ],
                  }),
        ],
    });
}
function uB(e) {
    let { trace: t } = e,
        l = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, ub.TK)(e)), [e]),
                [l, n] = i.useState(() => (null == t ? uL : (0, ub.hB)(t))),
                [a, r] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, ub.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, ub.x7)(t)), n((l) => (0, ub._0)(l, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, ub.wu)(t, l)), [t, l]),
                o = i.useCallback(
                    (e) => {
                        let l = null == t ? null : (0, ub.IE)(t, e);
                        null != l && n((e) => (0, ub.TN)(e, l));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    n((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let l = null == t ? null : (0, ub.IE)(t, e);
                        null != l && n((e) => (0, ub.H$)(e, l));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && n((0, ub.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && n((0, ub.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && n((0, ub.hB)(t));
                }, [t]),
                g = u.find((e) => e.key === a);
            return {
                rows: u,
                collapsed: l.collapsed,
                selectedKey: a,
                selected: g?.kind === "node" ? g.node : null,
                toggle: o,
                reveal: c,
                expandSubtree: d,
                select: r,
                expandAll: m,
                collapseAll: f,
                reset: h,
            };
        })(t),
        { rows: n, collapsed: a, selected: s, selectedKey: u, select: o, toggle: c, reveal: d, expandSubtree: m } = l,
        f = (0, ub.dj)(t),
        h = i.useMemo(() => (0, ub.nF)(f), [f]),
        g = h.length > 1 ? ((h[1] - h[0]) / f) * 100 : 100,
        x = i.useCallback(
            (e) => {
                let t,
                    l = n.findIndex((e) => e.key === u),
                    r = n[l];
                if ("ArrowDown" === e.key) t = n[Math.min(n.length - 1, l + 1)];
                else if ("ArrowUp" === e.key) t = n[Math.max(0, l - 1)];
                else if (null == r) return;
                else if ("smaller" === r.kind && ("ArrowRight" === e.key || "Enter" === e.key)) d(r.parentKey);
                else if ("node" === r.kind && "ArrowRight" === e.key && e.shiftKey) m(r.key);
                else if ("node" === r.kind && "ArrowRight" === e.key && a.has(r.key)) c(r.key);
                else {
                    if ("node" !== r.kind || "ArrowLeft" !== e.key || !(r.node.children.length > 0) || a.has(r.key))
                        return;
                    c(r.key);
                }
                (e.preventDefault(),
                    null != t && (o(t.key), document.getElementById(uF(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [a, m, d, n, o, u, c],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(uM.c, {
                children: [
                    (0, r.jsxs)("div", {
                        className: uD.z,
                        children: [
                            (0, r.jsx)(j.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: uC(t),
                            }),
                            (0, r.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: uE(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, r.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, r.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${uw(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(uq, { trace: t }),
                    (0, r.jsxs)("div", {
                        className: uD.KE,
                        children: [
                            (0, r.jsx)(N.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: l.reset }),
                            (0, r.jsx)(N.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: l.expandAll,
                            }),
                            (0, r.jsx)(N.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: l.collapseAll,
                            }),
                            (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == u ? void 0 : uF(u),
                        className: uD.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: x,
                        children: [
                            (0, r.jsxs)("div", {
                                className: uD.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: uD.So,
                                        children: (0, r.jsx)(j.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: uD.c1,
                                        children: h.map((e) =>
                                            (0, r.jsx)(
                                                j.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${uD.io} ${(e / f) * 100 > 85 ? uD.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : uk(e),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            n.map((e) =>
                                "node" === e.kind
                                    ? (0, r.jsx)(
                                          uO,
                                          {
                                              node: e.node,
                                              extent: f,
                                              collapsed: a.has(e.key),
                                              selected: e.key === u,
                                              onSelect: o,
                                              onToggle: c,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, r.jsx)(uU, { row: e, extent: f, selected: e.key === u, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(uT.j, { children: (0, r.jsx)(uG, { node: s }) }),
        ],
    });
}
function uH(e) {
    let { transitionState: t, onClose: l, projectId: n, traceId: a } = e,
        i = (0, m.bG)([ud.A], () => ud.A.getTimingTrace(n, a), [n, a]),
        s = i?.name ?? "Perf Trace";
    return (0, r.jsxs)(u_.d, {
        transitionState: t,
        onClose: l,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, r.jsx)(uP.rQ, { title: s }),
            null == i
                ? (0, r.jsx)(uM.c, {
                      children: (0, r.jsx)(j.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, r.jsx)(uB, { trace: i }),
        ],
    });
}
function uK(e) {
    let { projectId: t, trace: l } = e,
        n = l.spans.find((e) => null != e.error)?.error,
        a = i.useCallback(() => {
            (0, te.openModal)((e) => (0, r.jsx)(uH, { ...e, projectId: t, traceId: l.id }));
        }, [t, l.id]);
    return (0, r.jsxs)(b.D, {
        className: uD.nM,
        onClick: a,
        children: [
            (0, r.jsxs)("div", {
                className: uD.sU,
                children: [
                    (0, r.jsx)(up, { status: (0, ub.lQ)(l) }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: uD._k,
                        children: l.name,
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: uC(l),
                    }),
                ],
            }),
            (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: uE(l) }),
            null == n
                ? null
                : (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
function uV(e) {
    let { projectId: t } = e,
        l = (0, m.yK)([ud.A], () => ud.A.getTimingTraces(t), [t]),
        n = i.useMemo(() => [...l].reverse(), [l]);
    return 0 === l.length
        ? (0, r.jsxs)("div", {
              className: uD.Ie,
              children: [
                  (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: "No perf traces yet" }),
                  (0, r.jsx)(j.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: "Turns and project operations over 100ms record a timing trace here when they finish.",
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: uD.nd,
              children: (0, r.jsx)(lK.Ch, {
                  className: uD.XG,
                  children: (0, r.jsx)("ul", {
                      className: uD.p_,
                      "aria-label": "Perf traces",
                      children: n.map((e) =>
                          (0, r.jsx)("li", { children: (0, r.jsx)(uK, { projectId: t, trace: e }) }, e.id),
                      ),
                  }),
              }),
          });
}
function uW(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function uX(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function uJ(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function uQ(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function uY(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function uZ(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function u0(e) {
    return eu.intl.string("preview" === e ? es.default["2yLYlG"] : es.default.eiAi57);
}
let u1 = ["all", "preview", "stable", "web"],
    u2 = new Set(["error", "aborted", "length"]);
function u3(e) {
    switch (e.reason) {
        case "local":
            return eu.intl.string(es.default.mUeKML);
        case "unconfigured":
            return eu.intl.string(es.default.bGefb5);
        case "unauthorized":
            return eu.intl.string(es.default.KLx6Bb);
        default:
            return null != e.detail
                ? eu.intl.formatToPlainString(es.default.t09Q6q, { detail: e.detail })
                : eu.intl.string(es.default["t+tG59"]);
    }
}
function u4(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : eu.intl.formatToPlainString(es.default["XO/bN4"], {
              p50: uW(e.memory_p50_bytes ?? 0),
              p999: uW(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let u6 = {
    db: () => es.default["7l+DFG"],
    db_preview: () => es.default.FAuffi,
    runtime: () => es.default["Gkl+ab"],
    runtime_preview: () => es.default.ynpJzv,
    bot: () => es.default["5/i0cj"],
    bot_preview: () => es.default.m2jsnw,
};
var u5 = l(911608),
    u7 = l(177427);
function u8(e) {
    let { generatedAt: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: u7.KE,
        children: [
            (0, r.jsx)("div", {
                className: u7.IQ,
                children:
                    "loading" === l
                        ? (0, r.jsx)(w.y, { type: w.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: eu.intl.string(es.default.ZVByPX),
                            })
                          : null != t
                            ? (0, r.jsx)(j.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eu.intl.formatToPlainString(es.default.INVO50, { time: uY(t) }),
                              })
                            : null,
            }),
            (0, r.jsx)(N.$, { variant: "secondary", size: "sm", text: eu.intl.string(es.default.oKEgiu), onClick: n }),
        ],
    });
}
function u9(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("section", {
        className: u7.uW,
        "aria-label": t,
        children: [
            (0, r.jsx)(j.E, { variant: "text-xs/semibold", color: "text-muted", className: u7.Gf, children: t }),
            l,
        ],
    });
}
function oe(e) {
    let { label: t, value: l, hint: n, critical: a = !1 } = e;
    return (0, r.jsxs)("div", {
        className: u7.N8,
        children: [
            (0, r.jsxs)("div", {
                className: u7.x7,
                children: [
                    (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: a ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != n && (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
        ],
    });
}
function ot(e) {
    let { label: t, used: l, max: n, formatValue: a } = e,
        i = n > 0 ? Math.min(1, Math.max(0, l / n)) : 0,
        s = i >= 0.9;
    return (0, r.jsxs)("div", {
        className: u7.N8,
        children: [
            (0, r.jsxs)("div", {
                className: u7.x7,
                children: [
                    (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${a(l)} / ${a(n)}`,
                    }),
                ],
            }),
            (0, r.jsx)(u5.z, {
                value: 100 * i,
                valueLabel: `${a(l)} of ${a(n)}`,
                "aria-label": t,
                className: s ? u7.dh : void 0,
            }),
        ],
    });
}
function ol(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, r.jsx)(oe, {
            label: eu.intl.string(es.default.SXP7pD),
            value: eu.intl.string(es.default.E5hKVi),
            hint: u3(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, r.jsx)(oe, {
            label: eu.intl.string(es.default.SXP7pD),
            value: "\u2014",
            hint: eu.intl.string(es.default.AGvoMJ),
        });
    let n = u4(l);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(oe, { label: eu.intl.string(es.default["H/X+FI"]), value: uX(l.cpu_ms) }),
            null != n && (0, r.jsx)(oe, { label: eu.intl.string(es.default.lmFmMO), value: n }),
        ],
    });
}
function on(e) {
    let { analytics: t } = e,
        l = eu.intl.string(es.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, r.jsx)(u9, {
            title: l,
            children: (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: u3(t) }),
        });
    let n = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? u6[t] : null) ? eu.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, r.jsx)(u9, {
        title: l,
        children:
            0 === n.length
                ? (0, r.jsx)(j.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: eu.intl.string(es.default.AGvoMJ),
                  })
                : n.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, r.jsx)(
                          oe,
                          {
                              label: l,
                              value: eu.intl.formatToPlainString(es.default["w/2voO"], { cpu: uX(t.cpu_ms) }),
                              hint: u4(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var oa = l(400154);
let or = [];
function oi(e) {
    let t,
        { call: l } = e,
        { text: n, bad: a } =
            ((t = null != l.stopReason && u2.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? uX(l.durationMs) : null,
                    `${uJ(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${uJ(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, r.jsxs)("div", {
        className: oa.p5,
        children: [
            (0, r.jsx)(j.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: oa.Q5,
                children: uQ(l.observedAt),
            }),
            (0, r.jsxs)(j.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: oa.qN,
                children: [l.role, " \xb7 ", l.model],
            }),
            (0, r.jsx)(j.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: a ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
function os(e, t) {
    return (0, r.jsx)(oe, {
        label: e,
        value: eu.intl.formatToPlainString(es.default.yHJxuP, { count: uJ((0, Q.aM)(t)) }),
        hint: `${uJ(t.input_tokens)} in \xb7 ${uJ(t.output_tokens)} out \xb7 ${uJ(t.cache_read_input_tokens)} cache read`,
    });
}
function ou(e) {
    let { projectId: t, status: l, fetchState: n, onRefresh: a, traceVisible: s = !1 } = e,
        u = (0, m.bG)([ud.A], () => ud.A.getLastTurnUsage(t), [t]),
        o = (0, m.bG)([ud.A], () => ud.A.getLastCompaction(t), [t]),
        c = (0, m.bG)([ud.A], () => ud.A.getLastCompactionDecline(t), [t]),
        d = (0, m.bG)([ud.A], () => ud.A.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, el.Lj)(t), [t]),
        h = i.useCallback(() => (0, el.Lj)(t, !0), [t]),
        g = (0, m.bG)([ud.A], () => (s ? or : ud.A.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        v = l?.agent?.session ?? null,
        b = o?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, r.jsxs)("div", {
        className: oa.Mf,
        children: [
            (0, r.jsx)(u8, { generatedAt: l?.generated_at ?? null, fetchState: n, onRefresh: a }),
            (0, r.jsx)(u9, {
                title: eu.intl.string(es.default.JghNal),
                children:
                    null == x
                        ? (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eu.intl.string(es.default.s0U5Fv),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(oe, {
                                      label: eu.intl.string(es.default["9nqym2"]),
                                      value: uJ((0, Q.a7)(x.cost_usd)),
                                      hint: eu.intl.formatToPlainString(es.default.NCdUIh, { count: uJ(x.turns) }),
                                  }),
                                  os(eu.intl.string(es.default.xtxP0e), x.orchestrator),
                                  os(eu.intl.string(es.default["9Sj3SX"]), x.codegen),
                                  os(eu.intl.string(es.default.ANCEo3), (0, Q.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, r.jsx)(oe, {
                                          label: eu.intl.string(es.default.SQHm7C),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${uJ(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, r.jsx)(u9, {
                title: eu.intl.string(es.default.dZHPE5),
                children:
                    null == u
                        ? (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eu.intl.string(es.default.DfVjal),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  os(eu.intl.string(es.default["7X3i9d"]), u.total),
                                  (0, r.jsx)(oe, {
                                      label: eu.intl.string(es.default["8OUg09"]),
                                      value: `${Math.round((u.cache_hit_rate ?? (0, Q.CA)(u.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, r.jsxs)(u9, {
                title: eu.intl.string(es.default.NbRk9a),
                children: [
                    null != o && null != b
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(ot, {
                                      label: eu.intl.string(es.default.Kw5wiQ),
                                      used: o.tokensAfter,
                                      max: b,
                                      formatValue: uJ,
                                  }),
                                  (0, r.jsx)(oe, {
                                      label: eu.intl.string(es.default.mRbSns),
                                      value: `${uJ(o.tokensBefore)} \u{2192} ${uJ(o.tokensAfter)}`,
                                      hint: eu.intl.formatToPlainString(es.default.Vq3skS, {
                                          count: uJ(o.retainedMessages),
                                          time: uY(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(j.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != b
                                      ? eu.intl.formatToPlainString(es.default.GMLCNv, { ceiling: uJ(b) })
                                      : eu.intl.string(es.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, r.jsx)(oe, {
                            label: eu.intl.string(es.default["4BX5KK"]),
                            value: `${uJ(c.projected)} / ${uJ(c.threshold)}`,
                            critical: !0,
                            hint: eu.intl.formatToPlainString(es.default["6ngCax"], { time: uY(c.observedAt) }),
                        }),
                    (0, r.jsxs)("div", {
                        className: oa.Lj,
                        children: [
                            (0, r.jsx)(N.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eu.intl.string(es.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: f,
                            }),
                            (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof d && "compacted" !== d.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eu.intl.string(es.default.wox6Ev);
                                    if ("pending" === e) return eu.intl.string(es.default.OcPHQ1);
                                    let t = uY(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return eu.intl.formatToPlainString(es.default.BhRjZZ, { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? es.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? es.default.YZb4hK
                                              : es.default.ZoUSVK;
                                    return eu.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(d),
                            }),
                            "object" == typeof d &&
                                !0 === d.pendingTurn &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(N.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: eu.intl.string(es.default.ZxG2AI),
                                            onClick: h,
                                        }),
                                        (0, r.jsx)(j.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: eu.intl.string(es.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, r.jsx)(u9, {
                    title: eu.intl.string(es.default.TkTRdW),
                    children:
                        0 === g.length
                            ? (0, r.jsx)(j.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: eu.intl.string(es.default["r3/FhI"]),
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      g
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, r.jsx)(oi, { call: e }, e.id)),
                                      g.length > 30 &&
                                          (0, r.jsx)(j.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: eu.intl.formatToPlainString(es.default["uZ9P/O"], {
                                                  shown: 30,
                                                  total: g.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != v || l?.analytics != null) &&
                (0, r.jsxs)(u9, {
                    title: eu.intl.string(es.default.EsSzCS),
                    children: [
                        null != v &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(oe, {
                                        label: eu.intl.string(es.default.CLXHAs),
                                        value: uY(v.instance_since),
                                        hint: eu.intl.string(es.default.UCwUEX),
                                    }),
                                    (0, r.jsx)(oe, {
                                        label: eu.intl.string(es.default["8V8e1Z"]),
                                        value: uJ(v.sockets),
                                    }),
                                    (0, r.jsx)(oe, {
                                        label: eu.intl.string(es.default["4pBzYW"]),
                                        value: v.turn_inflight
                                            ? eu.intl.string(es.default.Wv025I)
                                            : eu.intl.string(es.default["7/lsFY"]),
                                    }),
                                    v.queued_messages > 0 &&
                                        (0, r.jsx)(oe, {
                                            label: eu.intl.string(es.default["3oUYnv"]),
                                            value: uJ(v.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, r.jsx)(ol, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, r.jsxs)(u9, {
                    title: eu.intl.string(es.default["LEIhp/"]),
                    children: [
                        (0, r.jsx)(oe, {
                            label: eu.intl.string(es.default.IlDBN3),
                            value: uJ(p.max_subagent_iterations),
                        }),
                        (0, r.jsx)(oe, {
                            label: eu.intl.string(es.default["ZdzKR+"]),
                            value: eu.intl.formatToPlainString(es.default.yHJxuP, {
                                count: uJ(p.context_window_tokens),
                            }),
                        }),
                        (0, r.jsx)(oe, {
                            label: eu.intl.string(es.default.cIhN2W),
                            value: eu.intl.formatToPlainString(es.default.yHJxuP, {
                                count: uJ(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, r.jsx)(oe, {
                            label: eu.intl.string(es.default["+fOn/q"]),
                            value: uJ(p.max_user_message_chars),
                        }),
                        (0, r.jsx)(oe, { label: eu.intl.string(es.default.kIHga0), value: uJ(p.max_build_attempts) }),
                        (0, r.jsx)(oe, { label: eu.intl.string(es.default.Iw03yW), value: uJ(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var oo = l(237528),
    oc = l(629584),
    od = l(683438),
    om = l(531893);
function of(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, r.jsx)("div", {
              className: om.ut,
              children: (0, r.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: eu.intl.string(es.default.h1SE6R),
              }),
          });
}
function oh(e) {
    let { state: t, emptyTitle: l, emptyBody: n } = e;
    return "failed" === t.status
        ? (0, r.jsxs)("div", {
              className: om.qf,
              children: [
                  (0, r.jsx)(j.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: eu.intl.string(es.default.h1SE6R),
                  }),
                  (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: eu.intl.string(es.default["8SErdg"]),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: om.qf,
              children: [
                  (0, r.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
              ],
          });
}
function og(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, r.jsx)("div", {
              className: om.ps,
              children: (0, r.jsx)(j.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: eu.intl.string(es.default.V7Ri8H),
              }),
          })
        : null;
}
var ox = l(109079);
let op = i.memo(function (e) {
    var t;
    let { entry: l, showSource: n } = e,
        [a, s] = i.useState(!1),
        u = i.useId(),
        o = i.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let l = e.indexOf("{"),
                        n = e.indexOf("["),
                        a = -1 === l ? n : -1 === n ? l : Math.min(l, n);
                    if (-1 === a) return null;
                    let r = e.slice(a).trim();
                    if (r.length < 2) return null;
                    try {
                        t = JSON.parse(r);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let i = e.slice(0, a).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: i, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: i, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(l.message),
            [l.message],
        ),
        c = "error" === l.level ? "text-feedback-critical" : "text-default";
    return (0, r.jsxs)("div", {
        className: ox.vK,
        children: [
            (0, r.jsx)(j.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ox.Mt,
                selectable: !0,
                children: uQ(l.ts),
            }),
            (0, r.jsx)(j.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = l.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: ox.dm,
                children: l.level,
            }),
            (0, r.jsxs)("div", {
                className: ox.t4,
                children: [
                    n &&
                        null != l.source &&
                        (0, r.jsx)("span", { className: ox.Cq, children: (0, r.jsx)(oo.v, { text: l.source }) }),
                    null != l.kind &&
                        (0, r.jsx)("span", {
                            className: ox.Cq,
                            title: l.build ?? void 0,
                            children: (0, r.jsx)(oo.v, {
                                text: eu.intl.string(es.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != o
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, r.jsxs)(j.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, r.jsxs)(b.D, {
                                      className: ox.Pq,
                                      "aria-expanded": a,
                                      "aria-controls": u,
                                      "aria-label": eu.intl.string(es.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          a
                                              ? (0, r.jsx)(tq.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, r.jsx)(tr._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, r.jsxs)(j.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  o.marker,
                                                  " ",
                                                  eu.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker
                                                          ? es.default.kUhyUv
                                                          : es.default["N+fphl"],
                                                      { count: o.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  a &&
                                      (0, r.jsx)(j.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: ox.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
                                      }),
                              ],
                          })
                        : (0, r.jsx)(j.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: c,
                              selectable: !0,
                              children: l.message,
                          }),
                ],
            }),
        ],
    });
});
function ov(e) {
    let { projectId: t } = e,
        l = (0, m.bG)([eA.Ay], () => eA.Ay.getLogs(t), [t]),
        n = (0, m.bG)([eA.Ay], () => eA.Ay.getHistoryState(t, "logs")),
        [a, s] = i.useState("all"),
        [u, o] = i.useState(""),
        c = i.useMemo(() => {
            let e = u.trim().toLowerCase();
            return l.filter((t) => {
                var l, n;
                return (
                    "string" == typeof (l = t.log).message &&
                    "string" == typeof l.level &&
                    "string" == typeof l.ts &&
                    ("all" === a ||
                        ("preview" === (n = t.log.source) || "stable" === n || "web" === n ? n : "other") === a) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [l, a, u]),
        d = i.useRef(null),
        f = i.useRef(!0);
    i.useEffect(() => {
        f.current && d.current?.scrollToBottom();
    }, [c]);
    let h = i.useCallback(() => {
            let e = d.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = i.useMemo(
            () =>
                u1.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return u0(e);
                            case "web":
                                return eu.intl.string(es.default.IVzfVV);
                            default:
                                return eu.intl.string(es.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, r.jsxs)("div", {
        className: ox.$F,
        children: [
            (0, r.jsxs)("div", {
                className: ox.y4,
                children: [
                    (0, r.jsx)(oc.I, {
                        look: "pill",
                        "aria-label": eu.intl.string(es.default.MhvyUU),
                        options: g,
                        value: a,
                        onChange: (e) => s(e.value),
                    }),
                    (0, r.jsx)("div", {
                        className: ox.KT,
                        children: (0, r.jsx)(od.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: eu.intl.string(es.default["m2+37Y"]),
                            "aria-label": eu.intl.string(es.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, r.jsx)(of, { state: n }),
            (0, r.jsxs)(lK.Ch, {
                ref: d,
                onScroll: h,
                overflow: "auto",
                className: ox.sx,
                children: [
                    (0, r.jsx)(og, { state: n }),
                    0 === l.length
                        ? (0, r.jsx)(oh, {
                              state: n,
                              emptyTitle: eu.intl.string(es.default.S7qlPG),
                              emptyBody: eu.intl.string(es.default.nD0S9z),
                          })
                        : 0 === c.length
                          ? (0, r.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eu.intl.string(es.default["4SIdrX"]),
                            })
                          : c.map((e) => (0, r.jsx)(op, { entry: e.log, showSource: "all" === a }, e.key)),
                ],
            }),
        ],
    });
}
function oj(e) {
    let { title: t, preview: l, stable: n, renderEnv: a } = e,
        s = [];
    return (
        null != l && s.push((0, r.jsx)(i.Fragment, { children: a("preview", l) }, "preview")),
        null != n && s.push((0, r.jsx)(i.Fragment, { children: a("stable", n) }, "stable")),
        (0, r.jsx)(u9, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, r.jsx)(j.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eu.intl.string(es.default.umcjif),
                      }),
        })
    );
}
function ob(e) {
    var t;
    let { env: l, bot: n } = e;
    return n.ever_started
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(oe, {
                      label: eu.intl.formatToPlainString(es.default["01ZMS4"], { env: u0(l) }),
                      value: ((t = n.connected), eu.intl.string(t ? es.default.Wv025I : es.default["7/lsFY"])),
                      critical: !n.connected && null != n.fatal_reason,
                      hint: n.fatal_reason ?? (n.connected ? void 0 : (n.last_start_reason ?? void 0)),
                  }),
                  (0, r.jsx)(oe, {
                      label: eu.intl.string(es.default["z1dh+F"]),
                      value: uJ(n.events_received),
                      hint:
                          null != n.last_event_type && null != n.last_event_at
                              ? `${n.last_event_type} \xb7 ${uY(n.last_event_at)}`
                              : void 0,
                  }),
                  (0, r.jsx)(oe, { label: eu.intl.string(es.default.Iz5GnJ), value: uJ(n.guild_count) }),
                  (0, r.jsx)(oe, {
                      label: eu.intl.string(es.default["7UqtNv"]),
                      value: uJ(n.reconnects),
                      hint:
                          null != n.last_close_code && null != n.last_close_at
                              ? eu.intl.formatToPlainString(es.default.MasSly, {
                                    code: n.last_close_code,
                                    time: uY(n.last_close_at),
                                })
                              : void 0,
                  }),
                  n.dispatch_errors > 0 &&
                      (0, r.jsx)(oe, {
                          label: eu.intl.string(es.default["x3+JXJ"]),
                          value: uJ(n.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, r.jsx)(oe, { label: u0(l), value: eu.intl.string(es.default.lTHQss) });
}
function oy(e) {
    let { env: t, metrics: l } = e,
        n = l.status_4xx + l.status_5xx;
    return (0, r.jsx)(oe, {
        label: u0(t),
        value: eu.intl.formatToPlainString(es.default["Xq+wHT"], {
            requests: uJ(l.requests),
            failures: uJ(n + l.errors),
        }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? eu.intl.formatToPlainString(es.default["o/ZBm4"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: uY(l.last_failure.at),
                  })
                : eu.intl.formatToPlainString(es.default["7KlGT6"], { time: uY(l.since) }),
    });
}
function ok(e) {
    let { env: t, runtime: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(oe, {
                label: eu.intl.formatToPlainString(es.default["92gVTm"], { env: u0(t) }),
                value: uJ(l.connections),
            }),
            l.schedules.map((e) =>
                (0, r.jsx)(
                    oe,
                    {
                        label: eu.intl.formatToPlainString(es.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? eu.intl.formatToPlainString(es.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? eu.intl.formatToPlainString(es.default.wxAWNv, { time: uY(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function ow(e) {
    let { env: t, metrics: l } = e;
    return (0, r.jsx)(oe, {
        label: u0(t),
        value: eu.intl.formatToPlainString(es.default.suAOj9, { calls: uJ(l.calls), errors: uJ(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function oN(e) {
    let { title: t, metrics: l, limits: n } = e;
    if (null == l || 0 === l.requests)
        return (0, r.jsx)(u9, {
            title: t,
            children: (0, r.jsx)(j.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eu.intl.string(es.default["Noami/"]),
            }),
        });
    let a = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, r.jsxs)(u9, {
        title: t,
        children: [
            (0, r.jsx)(oe, {
                label: eu.intl.string(es.default.xtD4Zp),
                value: uJ(l.requests),
                hint: eu.intl.formatToPlainString(es.default["7KlGT6"], { time: uY(l.since) }),
            }),
            (0, r.jsx)(oe, { label: eu.intl.string(es.default.gfRhR3), value: uJ(l.errors), critical: l.errors > 0 }),
            i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(ot, {
                              label: eu.intl.string(es.default.LEJ5r3),
                              used: l.cpu_ms_max,
                              max: n.cpu_ms_per_request,
                              formatValue: uX,
                          }),
                          (0, r.jsx)(oe, {
                              label: eu.intl.string(es.default.mSKImM),
                              value: uX(a),
                              hint: eu.intl.formatToPlainString(es.default.JqMU05, {
                                  total: uX(l.cpu_ms_total),
                                  wall: uX(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, r.jsx)(oe, {
                      label: eu.intl.string(es.default.LEJ5r3),
                      value: eu.intl.string(es.default["2Ekb2b"]),
                      hint: eu.intl.string(es.default.G0aq7i),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, r.jsx)(oe, { label: eu.intl.string(es.default.xvmL1D), value: uX(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, r.jsx)(oe, {
                    label: eu.intl.string(es.default["4sQYwH"]),
                    value: uJ(l.exceeded_cpu),
                    critical: !0,
                }),
            (0, r.jsx)(oe, {
                label: eu.intl.string(es.default.bQenOy),
                value: uJ(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: eu.intl.formatToPlainString(es.default["5jIZwv"], { limit: `${n.memory_mb} MB` }),
            }),
            null != l.build && (0, r.jsx)(oe, { label: eu.intl.string(es.default.xgpn4Y), value: uZ(l.build) }),
        ],
    });
}
function oA(e) {
    let { status: t } = e,
        { stable: l, preview: n, shared_data: a } = t.storage,
        s = t.worker.limits,
        u = a
            ? [{ key: "shared", label: eu.intl.string(es.default.V5kbaH), metrics: l }]
            : [
                  { key: "preview", label: eu.intl.string(es.default["2yLYlG"]), metrics: n },
                  { key: "stable", label: eu.intl.string(es.default.eiAi57), metrics: l },
              ];
    return (0, r.jsx)(u9, {
        title: eu.intl.string(es.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: l, metrics: n } = e;
            return null == n
                ? (0, r.jsx)(oe, { label: l, value: "\u2014" }, t)
                : (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)(oe, {
                                  label: eu.intl.formatToPlainString(es.default.u7kJJ4, { env: l }),
                                  value: uW(n.r2_bytes),
                                  hint: eu.intl.formatToPlainString(
                                      n.r2_truncated ? es.default.lH0oQw : es.default.m9h02S,
                                      { count: uJ(n.r2_objects) },
                                  ),
                              }),
                              null != n.db_bytes &&
                                  (0, r.jsx)(ot, {
                                      label: eu.intl.formatToPlainString(es.default.mnbPqt, { env: l }),
                                      used: n.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: uW,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function oS(e) {
    let { status: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: oa.Mf,
        children: [
            (0, r.jsx)(u8, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: n }),
            null != t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(oN, {
                            title: eu.intl.string(es.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(oN, {
                            title: eu.intl.string(es.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(oA, { status: t }),
                        null != t.bot &&
                            (0, r.jsx)(oj, {
                                title: eu.intl.string(es.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ob, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, r.jsx)(oj, {
                                title: eu.intl.string(es.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, r.jsx)(oy, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, r.jsx)(oj, {
                                title: eu.intl.string(es.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ok, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, r.jsx)(oj, {
                                title: eu.intl.string(es.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ow, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, r.jsx)(on, { analytics: t.analytics }),
                        (0, r.jsxs)(u9, {
                            title: eu.intl.string(es.default.fQMpFp),
                            children: [
                                (0, r.jsx)(oe, {
                                    label: eu.intl.string(es.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? uZ(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, r.jsx)(oe, {
                                    label: eu.intl.string(es.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? uZ(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var oC = l(761929),
    oE = l(382541);
let oI = new Map(),
    oM = new Map(),
    oT = 0,
    o_ = 0;
async function oP(e, t, l) {
    let n = oT,
        a = oI.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < o_) return { status: "forbidden" };
    let r = oM.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, oE.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((o_ = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let u = await s.json();
            if (!0 !== u.available || null == u.rich) return { status: "unavailable" };
            if (n !== oT) return { status: "failed" };
            var l = u.rich;
            for (oI.set(t, l); oI.size > 100;) {
                let e = oI.keys().next();
                if (!0 === e.done) break;
                oI.delete(e.value);
            }
            return { status: "loaded", rich: u.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    oM.set(t, i);
    let s = await i;
    return (oM.get(t) === i && oM.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function oR() {
    ((oT += 1), oI.clear(), oM.clear(), (o_ = 0));
}
function oL(e) {
    return "model" === e.kind
        ? "compaction" === e.agent
            ? "context"
            : "subagent" === e.agent
              ? "subagent"
              : "model"
        : "subagent" === e.agent
          ? "delegated"
          : "tool";
}
let oD = ["model", "tool", "subagent", "delegated", "context"];
function o$(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(oL(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function oF(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let oz = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function oO(e) {
    let { category: t } = e;
    return (0, r.jsx)(oo.v, { text: uh(t), variant: oz[t] });
}
var oU = l(28863);
let oG = ["arguments", "result", "usage", "diagnostics"];
function oq(e) {
    let { label: t, value: l } = e;
    return (0, r.jsxs)("div", {
        className: ug.wV,
        children: [
            (0, r.jsx)(j.E, { variant: "text-xs/medium", color: "text-muted", className: ug.D6, children: t }),
            (0, r.jsx)("div", { className: ug.zL, children: l }),
        ],
    });
}
function oB(e) {
    let { label: t, value: l } = e;
    return (0, r.jsx)(oq, {
        label: t,
        value: (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function oH(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: ug.WA, children: t });
}
function oK(e) {
    let { title: t, children: l } = e,
        n = i.useId();
    return (0, r.jsxs)("section", {
        "aria-labelledby": n,
        className: ug.xd,
        children: [
            (0, r.jsx)(j.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: n,
                className: ug.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function oV(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("details", {
        className: ug.XK,
        children: [
            (0, r.jsxs)("summary", {
                className: ug.It,
                children: [
                    (0, r.jsx)(tr._, { className: ug.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, r.jsx)(j.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, r.jsx)("div", { className: ug.bG, children: l }),
        ],
    });
}
function oW(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, r.jsx)(oq, {
            label: t.key,
            value: (0, r.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? eu.intl.formatToPlainString(es.default.ib7All, { count: t.chars })
            : null != t.items
              ? eu.intl.formatToPlainString(es.default.cIqKbA, { count: t.items })
              : null;
    return (0, r.jsx)(oq, {
        label: t.key,
        value: (0, r.jsxs)("div", {
            className: ug.Kv,
            children: [
                (0, r.jsx)(j.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return eu.intl.string(es.default["6oDpz5"]);
                            case "content":
                                return eu.intl.string(es.default.kSGhxQ);
                            default:
                                return eu.intl.string(es.default.JwGtRz);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == l
                    ? null
                    : (0, r.jsx)(j.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: l,
                      }),
            ],
        }),
    });
}
function oX(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: ug.QR,
                      children: (0, r.jsx)(oo.v, { text: eu.intl.string(es.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, r.jsx)(
                          oq,
                          {
                              label: e.key,
                              value: (0, r.jsxs)("div", {
                                  className: ug.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, r.jsx)(j.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: ug.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, r.jsx)(j.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: eu.intl.string(es.default["+kQ+K3"]),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, r.jsx)(j.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? eu.intl.string(es.default.ijkkUh)
                                                        : eu.intl.formatToPlainString(es.default.PRt8I0, {
                                                              count: e.chars,
                                                          }),
                                            }),
                                  ],
                              }),
                          },
                          e.key,
                      ),
                  ),
              ],
          });
}
function oJ(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : eu.intl.string(
                      "loading" === t.status
                          ? es.default.SKbSyo
                          : "unavailable" === t.status
                            ? es.default.tdq5Zn
                            : es.default["Dw1JW/"],
                  );
    return null == l
        ? null
        : (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-subtle", className: ug.E7, children: l });
}
function oQ(e) {
    let { projectId: t, entry: l, onClose: n, parent: a, onSelect: s, childCount: u } = e,
        o = (function (e) {
            let { childCount: t = 0, hasParent: l = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = new Set();
            if ("tool" === e.kind)
                (((null != e.fields && e.fields.length > 0) || null != e.detailId) && n.add("arguments"),
                    "started" !== e.status && n.add("result"));
            else
                (null != e.promptTokens ||
                    null != e.inputTokens ||
                    null != e.outputTokens ||
                    null != e.cacheReadTokens ||
                    null != e.costUsd ||
                    null != e.stopReason) &&
                    n.add("usage");
            return (
                (l || t > 0 || null != e.turnId || "" !== e.startedAt || "" !== e.id) && n.add("diagnostics"),
                oG.filter((e) => n.has(e))
            );
        })(l, { childCount: u, hasParent: null != a }),
        c = (function (e, t) {
            let [l, n] = i.useState(null);
            if (
                (i.useEffect(() => {
                    if (null == t || null != oI.get(t)) return;
                    let l = new AbortController();
                    return (
                        oP(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = oI.get(t);
            return null != a ? { status: "loaded", rich: a } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        d = "model" === l.kind ? l.model : l.tool,
        m = uj(l.startedAt, "millis"),
        f = oL(l),
        h = i.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        );
    return (0, r.jsxs)(lK.Ch, {
        className: ug._0,
        onKeyDown: h,
        role: "region",
        "aria-label": eu.intl.formatToPlainString(es.default.Qiaeyz, { name: d }),
        children: [
            (0, r.jsx)("div", {
                className: ug.sy,
                children: (0, r.jsxs)("div", {
                    className: ug.HI,
                    children: [
                        (0, r.jsx)(up, { status: l.status }),
                        (0, r.jsx)(oO, { category: f }),
                        (0, r.jsx)(j.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: ug.kc,
                            children: d,
                        }),
                        (0, r.jsx)(j.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: ug.l5,
                            children: null == l.durationMs ? eu.intl.string(es.default["2wyRDK"]) : um(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: ug.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            o.includes("arguments") && "tool" === l.kind
                ? (0, r.jsxs)(oK, {
                      title: eu.intl.string(es.default["G/4JST"]),
                      children: [
                          (l.fields ?? []).map((e) => (0, r.jsx)(oW, { field: e }, e.key)),
                          c?.status === "loaded" && null != c.rich.args
                              ? (0, r.jsx)(oX, { entries: c.rich.args })
                              : null,
                          (0, r.jsx)(oJ, { detail: c }),
                      ],
                  })
                : null,
            o.includes("result") && "tool" === l.kind
                ? (0, r.jsxs)(oK, {
                      title: eu.intl.string(es.default.Dgg25Y),
                      children: [
                          (0, r.jsx)(oB, {
                              label: eu.intl.string(es.default["U+OQCo"]),
                              value: eu.intl.formatToPlainString(es.default.ib7All, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, r.jsx)(oB, {
                                    label: eu.intl.string(es.default["MQYS+n"]),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, r.jsx)(oq, {
                                    label: eu.intl.string(es.default.t7GJFc),
                                    value: (0, r.jsx)(j.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: eu.intl.string(es.default.ijkkUh),
                                    }),
                                }),
                          c?.status === "loaded" && null != c.rich.result
                              ? (0, r.jsx)(oX, { entries: c.rich.result })
                              : null,
                      ],
                  })
                : null,
            o.includes("usage") && "model" === l.kind
                ? (0, r.jsxs)(oK, {
                      title: eu.intl.string(es.default.NXmRw1),
                      children: [
                          (0, r.jsxs)(oH, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, r.jsx)(oB, {
                                            label: eu.intl.string(es.default.iq3T1q),
                                            value: eu.intl.formatToPlainString(es.default["6GQUgQ"], {
                                                tokens: uf(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, r.jsx)(oB, {
                                            label: eu.intl.string(es.default.ZELAZn),
                                            value: eu.intl.formatToPlainString(es.default.Te7mPn, {
                                                system: uf(l.systemTokens),
                                                tools: uf(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: uf(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, r.jsx)(oB, {
                                            label: eu.intl.string(es.default["LENc/T"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, r.jsx)(oB, {
                                            label: eu.intl.string(es.default.ewRHwx),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, r.jsx)(oB, {
                                            label: eu.intl.string(es.default.heVFQD),
                                            value: eu.intl.formatToPlainString(es.default.VO3gdd, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, r.jsx)(oB, {
                                            label: eu.intl.string(es.default.aBw2Vm),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, r.jsx)(j.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: ug.E7,
                              children: eu.intl.string(es.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            o.includes("arguments") || o.includes("result")
                ? (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: ug.E7,
                      children: eu.intl.string(es.default.o24IFK),
                  })
                : null,
            o.includes("diagnostics")
                ? (0, r.jsx)(oV, {
                      title: eu.intl.string(es.default["dix/W4"]),
                      children: (0, r.jsxs)(oH, {
                          children: [
                              null == a
                                  ? null
                                  : (0, r.jsx)(oq, {
                                        label: eu.intl.string(es.default.soPsOJ),
                                        value: (0, r.jsx)(oU.Anchor, {
                                            onClick: () => s(a.id),
                                            children: (0, r.jsx)(j.E, {
                                                tag: "span",
                                                variant: "text-xs/normal",
                                                color: "none",
                                                children: "model" === a.kind ? a.model : a.tool,
                                            }),
                                        }),
                                    }),
                              0 === u
                                  ? null
                                  : (0, r.jsx)(oB, {
                                        label: eu.intl.string(es.default.kNZBxr),
                                        value: eu.intl.formatToPlainString(es.default["6LoCUh"], { count: u }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, r.jsx)(oB, { label: eu.intl.string(es.default.bL1r5J), value: l.turnId }),
                              (0, r.jsx)(oB, { label: eu.intl.string(es.default.Ndwr7X), value: l.id }),
                              null == m ? null : (0, r.jsx)(oB, { label: eu.intl.string(es.default.sO8ghW), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, r.jsx)(oB, { label: eu.intl.string(es.default.VfYxPF), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(j.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: ug.Hm,
                                                children: eu.intl.string(es.default.mSm8iy),
                                            }),
                                            l.schema.map((e) =>
                                                (0, r.jsx)(
                                                    oB,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? eu.intl.formatToPlainString(es.default["6aSRPA"], {
                                                                  type: e.type,
                                                              })
                                                            : eu.intl.formatToPlainString(es.default.q2B975, {
                                                                  type: e.type,
                                                              }),
                                                    },
                                                    e.name,
                                                ),
                                            ),
                                        ],
                                    }),
                          ],
                      }),
                  })
                : null,
            (0, r.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ug.E7,
                children: eu.intl.string(es.default.FloyTQ),
            }),
        ],
    });
}
let oY = { model: ug.WI, subagent: ug.uM, context: ug.eH, tool: ug.pw, delegated: ug.C8 };
function oZ(e) {
    let { entries: t } = e,
        l = i.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = oL(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return oD.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        n = l.reduce((e, t) => e + t.ms, 0);
    return (0, r.jsxs)("div", {
        className: ug.M0,
        children: [
            (0, r.jsx)("div", {
                className: ug.pZ,
                "aria-hidden": !0,
                children:
                    0 === n
                        ? null
                        : l.map((e) => {
                              let { category: t, ms: l } = e;
                              return 0 === l
                                  ? null
                                  : (0, r.jsx)(
                                        "div",
                                        {
                                            className: `${ug.dL} ${oY[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, r.jsx)("div", {
                className: ug.z4,
                role: "group",
                "aria-label": eu.intl.string(es.default["Gioq+C"]),
                children: oD.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === n ? 0 : Math.round((a / n) * 100);
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: ug.fI,
                            children: [
                                (0, r.jsx)("span", { className: `${ug.A9} ${oY[e]}`, "aria-hidden": !0 }),
                                (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-muted", children: uh(e) }),
                                (0, r.jsx)(j.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: eu.intl.formatToPlainString(es.default["3dQ1ly"], { percent: s }),
                                }),
                                (0, r.jsx)(j.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: eu.intl.formatToPlainString(es.default.Ow0k34, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, r.jsx)(j.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: um(a),
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function o0(e) {
    let { entry: t, selected: l, tabbable: n, onSelect: a, onKeyDown: i, nested: s } = e,
        u = oL(t),
        o = "model" === t.kind ? t.model : t.tool,
        c =
            "model" === t.kind && null != t.promptTokens
                ? eu.intl.formatToPlainString(es.default["6GQUgQ"], { tokens: uf(t.promptTokens) })
                : null != t.durationMs
                  ? um(t.durationMs)
                  : null;
    return (0, r.jsxs)(b.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: n ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${ug.nM} ${s ? ug.A5 : ""} ${"error" === t.status ? ug.Cr : ""} ${l ? ug.CZ : ""}`,
        onKeyDown: i,
        onClick: () => a(t.id),
        children: [
            (0, r.jsxs)("div", {
                className: ug.sU,
                children: [
                    (0, r.jsx)(up, { status: t.status }),
                    (0, r.jsx)(oO, { category: u }),
                    (0, r.jsx)(j.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: ug.G9,
                        children: o,
                    }),
                    null == c
                        ? null
                        : (0, r.jsx)(j.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: ug.j2,
                              children: c,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: ug.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, r.jsx)(j.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: ug.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function o1(e) {
    var t;
    let { projectId: l, query: n } = e,
        a = (0, m.yK)([eA.Ay], () => eA.Ay.getTrace(l), [l]),
        s = (0, m.bG)([eA.Ay], () => eA.Ay.getHistoryState(l, "trace"));
    i.useEffect(() => oR, [l]);
    let [u, o] = i.useState(null),
        [c, d] = i.useState(40),
        [f, h] = i.useState(!1),
        g = i.useRef(null),
        x = i.useRef(null),
        p = i.useRef(null),
        v = i.useRef(null),
        b = i.useId(),
        y = i.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        k = i.useCallback((e) => o((t) => (t === e ? null : e)), []),
        w = i.useCallback((e) => {
            let t = g.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, aa.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = i.useCallback((e) => {
            let t = g.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, aa.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        A = (0, oC.A)({
            resizableDomNodeRef: x,
            orientation: oC.R.VERTICAL_TOP,
            getClampedValue: N,
            onElementResize: (e) => d(w(e)),
            onElementResizeStart: () => h(!0),
            onElementResizeEnd: () => h(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        S = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), A(e));
            },
            [A],
        ),
        C = i.useCallback((e) => {
            let t =
                "ArrowUp" === e.key
                    ? 5
                    : "ArrowDown" === e.key
                      ? -5
                      : "Home" === e.key
                        ? 75
                        : "End" === e.key
                          ? -75
                          : null;
            null != t && (e.preventDefault(), d((e) => (0, aa.clamp)(e + t, 25, 75)));
        }, []),
        E = i.useCallback(() => {
            (o(null), y(u));
        }, [u, y]),
        I = i.useMemo(() => o$(a, n), [a, n]),
        M = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = null;
                    for (let n of e) {
                        let e = n.turnId ?? null;
                        ((null == l || l.turnId !== e) &&
                            ((l = { turnId: e, entries: [] }),
                            t.push({ turnId: e, entries: l.entries, startedAt: n.startedAt, spanMs: null })),
                            l.entries.push(n));
                    }
                    return t.map((e) => ({
                        ...e,
                        spanMs: (function (e) {
                            let t = 1 / 0,
                                l = -1 / 0;
                            for (let n of e) {
                                let e = Date.parse(n.startedAt);
                                Number.isNaN(e) ||
                                    ((t = Math.min(t, e)), null != n.durationMs && (l = Math.max(l, e + n.durationMs)));
                            }
                            return Number.isFinite(t) && Number.isFinite(l) ? Math.max(0, l - t) : null;
                        })(e.entries),
                    }));
                })(a)
                    .map((e, t) => ({ ...e, index: t, entries: o$(e.entries, n) }))
                    .filter((e) => e.entries.length > 0),
            [a, n],
        ),
        T = oF(I, u),
        _ = T?.kind === "tool" ? oF(a, T.parentId ?? null) : null,
        P = null == T ? 0 : ((t = T.id), a.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        R = I[I.length - 1];
    i.useLayoutEffect(() => {
        if (null != u) return;
        let e = p.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [R, u]);
    let L = i.useCallback(
        (e) => {
            if (0 === I.length) return;
            let t = I.findIndex((e) => e.id === u);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(I.length - 1, t));
                (o(I[l].id), document.getElementById(`trace-${I[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? I.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(I.length - 1)
                      : "Escape" === e.key && null != u && (e.preventDefault(), o(null), y(u));
        },
        [I, u, y],
    );
    return 0 === a.length
        ? (0, r.jsx)("div", {
              className: ug.uP,
              ref: g,
              children: (0, r.jsx)(oh, {
                  state: s,
                  emptyTitle: eu.intl.string(es.default["Tpvy/s"]),
                  emptyBody: eu.intl.string(es.default.J0WcVA),
              }),
          })
        : (0, r.jsxs)("div", {
              className: `${ug.uP} ${f ? ug.F4 : ""}`,
              ref: g,
              children: [
                  (0, r.jsxs)("div", {
                      className: ug.DK,
                      children: [
                          (0, r.jsx)(oZ, { entries: a }),
                          (0, r.jsx)(of, { state: s }),
                          0 === I.length
                              ? (0, r.jsx)("div", {
                                    className: ug.Ie,
                                    children: (0, r.jsx)(j.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: eu.intl.string(es.default.tDB4lC),
                                    }),
                                })
                              : (0, r.jsxs)(lK.Ch, {
                                    ref: p,
                                    className: ug.Ns,
                                    children: [
                                        (0, r.jsx)(og, { state: s }),
                                        (0, r.jsx)("div", {
                                            ref: v,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": eu.intl.string(es.default.SGbiNE),
                                            className: ug.p_,
                                            children: M.map((e) => {
                                                let t = uj(e.startedAt),
                                                    l = eu.intl.formatToPlainString(es.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: ug.mf,
                                                                children: [
                                                                    (0, r.jsx)(j.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, r.jsx)(j.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, r.jsx)(j.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: um(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: ug.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, r.jsx)(
                                                                        o0,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === u,
                                                                            tabbable: e.id === (u ?? I[0]?.id),
                                                                            onSelect: k,
                                                                            onKeyDown: L,
                                                                            nested:
                                                                                "tool" === e.kind && null != e.parentId,
                                                                        },
                                                                        e.id,
                                                                    ),
                                                                ),
                                                            }),
                                                        ],
                                                    },
                                                    e.turnId ?? `ungrouped-${e.index}`,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                      ],
                  }),
                  null == T
                      ? null
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": eu.intl.string(es.default.DtSORy),
                                    "aria-valuenow": Math.round(c),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: ug.b1,
                                    onPointerDown: S,
                                    onKeyDown: C,
                                }),
                                (0, r.jsx)("div", {
                                    ref: x,
                                    className: ug.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(c) },
                                    children: (0, r.jsx)(oQ, {
                                        projectId: l,
                                        entry: T,
                                        parent: _,
                                        childCount: P,
                                        onSelect: o,
                                        onClose: E,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
function o2(e) {
    let { projectId: t, query: l, onQueryChange: n } = e,
        a = (0, m.yK)([eA.Ay], () => eA.Ay.getTrace(t), [t]),
        s = i.useRef(null),
        u = i.useCallback(() => {
            ei(
                new Blob(
                    [
                        JSON.stringify(
                            {
                                kind: "vibegrations.trace",
                                version: 1,
                                project_id: t,
                                exported_at: new Date().toISOString(),
                                note: 'Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked "estimated" are a chars/4 heuristic measured before sending.',
                                entries: a,
                            },
                            null,
                            2,
                        ),
                    ],
                    { type: "application/json" },
                ),
                `vibegrations-trace-${t}.json`,
            ).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [a, t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: ug.ED,
                children: (0, r.jsx)(od.I, {
                    query: l,
                    onChange: n,
                    onClear: () => n(""),
                    size: "sm",
                    placeholder: eu.intl.string(es.default["EY8/Mt"]),
                    "aria-label": eu.intl.string(es.default["EY8/Mt"]),
                }),
            }),
            (0, r.jsx)(Y.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: Y.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, r.jsx)(Z.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-trace-actions-${t}`,
                        "aria-label": eu.intl.string(eu.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, r.jsx)(ee.rX, {
                            children: (0, r.jsx)(ee.Dr, {
                                id: "export",
                                label: eu.intl.string(es.default.WXrPRZ),
                                disabled: 0 === a.length,
                                action: u,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, r.jsx)(t9.K, {
                        ...e,
                        buttonRef: s,
                        icon: le.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var o3 = l(592465);
function o4(e) {
    let { projectId: t, onClose: l } = e,
        [n, a] = i.useState("logs"),
        [s, u] = i.useState(""),
        o = (0, m.bG)([eH.A], () => eH.A.isDeveloper) || !1,
        c = (0, m.bG)([ud.A], () => ud.A.getStatus(t), [t]),
        d = (0, m.bG)([ud.A], () => ud.A.getFetchState(t), [t]);
    (i.useEffect(() => {
        (0, el.R7)(t);
    }, [t]),
        i.useEffect(() => (0, el.Rw)(t), [t]));
    let f = i.useCallback(() => (0, el.R7)(t), [t]),
        h = i.useCallback(() => {
            (0, ln.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: ud.A.getStatus(t),
                        last_turn_usage: ud.A.getLastTurnUsage(t),
                        last_compaction: ud.A.getLastCompaction(t),
                        last_compaction_decline: ud.A.getLastCompactionDecline(t),
                        model_calls: ud.A.getModelCalls(t),
                        logs: eA.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, v.P0)((0, v.ox)(eu.intl.string(es.default.wI6fhl), v.Ck.SUCCESS)),
            );
        }, [t]),
        g = eu.intl.string(es.default["Q4FN+H"]);
    return (0, r.jsxs)("section", {
        className: o3.nd,
        "aria-label": g,
        children: [
            (0, r.jsxs)(lH.Ay, {
                "aria-label": g,
                toolbar: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(lH.Ay.Icon, {
                            icon: sh.CopyIcon,
                            tooltip: eu.intl.string(es.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, r.jsx)(lH.Ay.Icon, { icon: P.P, tooltip: eu.intl.string(eu.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, r.jsx)(lH.Ay.ChannelIcon, { icon: S.BugIcon, "aria-hidden": !0 }),
                    (0, r.jsx)(lH.Ay.Title, { children: g }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: o3.rf,
                children: [
                    (0, r.jsxs)(uc.V, {
                        selectedItem: n,
                        type: "top",
                        onItemSelect: (e) => a(e),
                        "aria-label": eu.intl.string(es.default.RvvWIh),
                        className: o3.vR,
                        children: [
                            (0, r.jsx)(uc.V.Item, { id: "logs", children: eu.intl.string(es.default["+VRYCm"]) }),
                            (0, r.jsx)(uc.V.Item, { id: "worker", children: eu.intl.string(es.default["50D0FZ"]) }),
                            (0, r.jsx)(uc.V.Item, { id: "agent", children: eu.intl.string(es.default.UkbTK1) }),
                            o
                                ? (0, r.jsx)(uc.V.Item, { id: "trace", children: eu.intl.string(es.default.O6nNjP) })
                                : null,
                            o ? (0, r.jsx)(uc.V.Item, { id: "perf", children: "Perf Trace" }) : null,
                        ],
                    }),
                    "logs" === n
                        ? (0, r.jsx)(ov, { projectId: t })
                        : "worker" === n
                          ? (0, r.jsx)(oS, { status: c, fetchState: d, onRefresh: f })
                          : "trace" === n && o
                            ? (0, r.jsxs)("div", {
                                  className: o3.uP,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: o3.XH,
                                          children: (0, r.jsx)(o2, { projectId: t, query: s, onQueryChange: u }),
                                      }),
                                      (0, r.jsx)(o1, { projectId: t, query: s }),
                                  ],
                              })
                            : "perf" === n && o
                              ? (0, r.jsx)(uV, { projectId: t })
                              : (0, r.jsx)(ou, {
                                    projectId: t,
                                    status: c,
                                    fetchState: d,
                                    onRefresh: f,
                                    traceVisible: o,
                                }),
                ],
            }),
        ],
    });
}
var o6 = l(333007),
    o5 = l(365912),
    o7 = l(775121),
    o8 = l(873715);
function o9(e) {
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
    let l = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (l.value = e.value),
        "string" == typeof e.path && "" !== e.path && (l.path = e.path),
        "string" == typeof e.marker && (l.marker = e.marker),
        l
    );
}
l(884868);
let ce = Object.freeze({ x: -1, y: -1 });
function ct(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = o9(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var cl = l(470779);
function cn(e) {
    let {
            projectId: t,
            at: l,
            bounds: n,
            kind: a,
            value: s,
            onChange: o,
            onSubmit: c,
            onDismiss: d,
            canSubmit: m,
            closing: f,
            onUploadFile: h,
        } = e,
        {
            drafts: g,
            addFiles: x,
            pasteFiles: p,
            removeDraft: v,
            settled: j,
            takeRefs: b,
        } = iI({ projectId: t, surface: "design", onUploadFile: h }),
        k = i.useRef(null),
        w = (m || g.length > 0) && j && !f,
        N = i.useCallback(() => {
            if (!w) return;
            let e = b();
            c(e.length > 0 ? e : void 0);
        }, [w, b, c]),
        [A, S] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => S(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let C = i.useRef(null),
        [E, I] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = C.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = E?.height ?? 44,
        T = n.left + 8,
        _ = n.top + 8,
        P = Math.max(l.x, T),
        R = Math.min(Math.max(l.y + 32 + 4, _), Math.max(_, n.top + n.height - M - 8));
    return (0, r.jsxs)("div", {
        ref: C,
        className: u()(cl.M0, { [cl.ho]: A && !f, [cl.ET]: f }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, r.jsx)("input", {
                ref: k,
                type: "file",
                multiple: !0,
                className: cl.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, r.jsx)(y.m, {
                position: "bottom",
                text: eu.intl.string(es.default.lgvqSB),
                ariaHidden: !0,
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: cl.tY,
                    onClick: () => k.current?.click(),
                    "aria-label": eu.intl.string(es.default.lgvqSB),
                    children: (0, r.jsx)(et.H, { size: "custom", color: "currentColor", className: cl.WW }),
                }),
            }),
            (0, r.jsx)(ns.y, {
                autoFocus: !0,
                rows: 1,
                className: cl.hF,
                value: s,
                placeholder: "" === a ? eu.intl.string(es.default.MPPV1Q) : `Edit ${a}`,
                "aria-label": eu.intl.string(es.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: f ? void 0 : p,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N());
                },
            }),
            g.length > 0
                ? (0, r.jsx)("div", {
                      className: cl.ZO,
                      children: g.map((e) => (0, r.jsx)(iM, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var ca = l(192888);
function cr(e, t) {
    return (0, ca.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(ct, () => ({ status: "failed" }));
}
var ci = l(108308);
let cs = { x: 25, y: 21 };
function cu(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function co(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function cc(e, t, l, n) {
    let a = co(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function cd(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function cm(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let l = t.viewport?.width,
        n = t.viewport?.height;
    return "number" != typeof l || "number" != typeof n || l < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: l, height: n },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function cf(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, resolveIframe: a, toggleRef: s } = e,
        u = null != l && l === n ? t : null,
        { active: o, annotations: c } = e9(u),
        d = (0, tp.Zv)(u),
        f = (0, te.useHasAnyModalOpen)(),
        h = (0, m.bG)([tX.default], () => tX.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = i.useState(null),
        [v, b] = i.useState(null),
        [y, k] = i.useState(!1),
        [w, A] = i.useState(!1),
        [S, C] = i.useState(null),
        [E, I] = i.useState(!1),
        M = i.useRef(null),
        _ = i.useRef(null),
        P = i.useRef(null),
        [R, L] = i.useState(null),
        [D, $] = i.useState(!1),
        [F, z] = i.useState(null),
        [O, U] = i.useState(null),
        G = i.useRef(!1),
        [q, B] = i.useState(!1),
        [H, K] = i.useState(null),
        V = o && !d && !f;
    null == F || (V && F.projectId === u) || z(null);
    let W = F?.projectId ?? null;
    (i.useEffect(() => {
        if (null != W) return () => nW(W, "design");
    }, [W]),
        i.useEffect(() => {
            if (!V) return;
            function e() {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })(a());
                p((t) => (cu(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [V, a]),
        i.useEffect(() => {
            if (!V || null == u) return;
            let e = !0,
                t = a();
            if (null == t) return void A(!0);
            (k(!0), A(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, o8.J)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? cm(t.response) : null;
                        null == l ? A(!0) : (b(l), e5(u, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (k(!1), A(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [V, a, u]));
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!V || null == x || null == u) return;
        if (null == v) {
            X.current = x;
            return;
        }
        if (cu(X.current, x)) return;
        let e = window.setTimeout(() => {
            let e = a();
            if (null == e) return;
            X.current = x;
            let t = [];
            for (let e = 0; e < c.length; e += 24) t.push(c.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, o8.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let l;
                        if ("completed" !== e.status || !Z.current) return;
                        let n = cm(e.response);
                        null != n && (b(n), e5(u, { url: n.url, title: n.title, viewport: n.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, l) => {
                            let n = t[l];
                            if (null == n || "locate" !== e.action || !e.ok) return;
                            let r = o9(e.element);
                            null != r && a.set(n.id, r);
                        }),
                            (l = e3(u)).active &&
                                0 !== a.size &&
                                e4(u, {
                                    ...l,
                                    annotations: l.annotations.map((e) => {
                                        let t = a.get(e.id);
                                        return null == t ? e : { ...e, target: t };
                                    }),
                                }));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [V, x, v, c, u, a]),
        i.useEffect(() => {
            if (!V)
                return () => {
                    (C(null), z(null), K(null), b(null));
                };
        }, [V]));
    let J = i.useRef(null),
        Q = i.useRef(null),
        Y = i.useRef(!1),
        Z = i.useRef(!1);
    i.useEffect(() => {
        ((Z.current = V), V || ((J.current = null), (Q.current = null), (P.current = null), I(!1)));
    }, [V]);
    let ee = i.useCallback(
            function e() {
                if (Y.current) return;
                let t = J.current;
                if (null == t) return;
                J.current = null;
                let l = a();
                null != l &&
                    ((Y.current = !0),
                    cr(l, t).then((t) => {
                        if (((Y.current = !1), Z.current)) {
                            if ("picked" !== t.status || cj(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? C(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = eW(t.target);
                                (L((t) => (cv(t, e) ? t : e)),
                                    C((e) => {
                                        var l;
                                        return ((l = t.target),
                                        null == e || null == l
                                            ? e === l
                                            : e.ref === l.ref &&
                                              e.rect.x === l.rect.x &&
                                              e.rect.y === l.rect.y &&
                                              e.rect.width === l.rect.width &&
                                              e.rect.height === l.rect.height)
                                            ? e
                                            : t.target;
                                    }));
                            }
                            e();
                        }
                    }));
            },
            [a],
        ),
        et = i.useCallback(() => {
            if (null == F) return;
            let e = !G.current;
            (U({ at: F.at, label: F.label, draft: F.draft, instant: e }), B(e), z(null));
        }, [F]);
    (i.useEffect(() => {
        if (!q) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => B(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [q]),
        i.useEffect(() => {
            if (null == O) return;
            let e = setTimeout(() => U(null), cx);
            return () => clearTimeout(e);
        }, [O]));
    let en = null == v || null == x || v.viewport.width < 1 ? 1 : x.width / v.viewport.width,
        ea = null != v || w,
        er = i.useMemo(() => v?.elements ?? [], [v]),
        ei = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ei.current = { rect: x, scale: en };
    }, [x, en]);
    let eo = i.useCallback(
            (e, t, l) => {
                null != u &&
                    (nW(u, "design"),
                    K(null),
                    (G.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: l, label: eW(e) }));
            },
            [u],
        ),
        ec = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / en, y: (e.clientY - t.top) / en }), [en]),
        ed = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let l = _.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ed);
    let em = i.useCallback(
            (e) => {
                if (null == x || null != H) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ed(), I(!0), null != F)) {
                    (Math.abs(e.clientX - F.at.x) > cp || Math.abs(e.clientY - F.at.y) > cp) && (G.current = !0);
                    return;
                }
                if (!ea) return void C(null);
                let t = ec(e, x);
                if (D) {
                    let e = (function (e, t, l) {
                            let n = null,
                                a = 1 / 0;
                            for (let r of e) {
                                let { x: e, y: i, width: s, height: u } = r.rect;
                                if (s < 1 || u < 1 || t < e || l < i || t > e + s || l > i + u) continue;
                                let o = s * u;
                                o < a && ((n = r), (a = o));
                            }
                            return n;
                        })(er, t.x, t.y),
                        l = null != e && cj(e, x, en) ? null : e;
                    if (null != l) {
                        let e = eW(l);
                        L((t) => (cv(t, e) ? t : e));
                    }
                    C((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Q.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Q.current = l), (J.current = l), ee());
            },
            [x, en, ea, ec, D, er, F, H, ed, ee],
        ),
        ef = null == H ? null : c.find((e) => e.id === H.id),
        eh = V && (E || F?.target.marker != null || ef?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = a();
                null != e && cr(e, ce);
            };
    }, [eh, a]);
    let eg = i.useCallback(() => {
        (I(!1), C(null), (Q.current = null), (J.current = null));
    }, []);
    i.useEffect(() => {
        if (!V || !E || !ea || D || null != F || null != H) return;
        let e = P.current,
            { rect: t, scale: l } = ei.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Q.current = n), (J.current = n), ee());
    }, [V, E, ea, D, F, H, ee]);
    let ex = i.useCallback(
            (e) => {
                if (null != F || null != H) {
                    (et(), K(null));
                    return;
                }
                if (null == S || null == x) return;
                let t = ec(e, x);
                eo(
                    S,
                    (function (e, t, l) {
                        let { x: n, y: a, width: r, height: i } = e.rect;
                        return r < 1 || i < 1
                            ? eK
                            : { x: Math.min(1, Math.max(0, (t - n) / r)), y: Math.min(1, Math.max(0, (l - a) / i)) };
                    })(S, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [S, x, ec, F, H, eo, et],
        ),
        ep = i.useCallback(() => {
            null != u && (C(null), e6(u));
        }, [u]),
        ev = i.useCallback(() => {
            null != u &&
                (null != F
                    ? et()
                    : H?.confirmingRemove === !0
                      ? K({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? K(null)
                        : ep());
        }, [u, F, H, et, ep]),
        ej = i.useRef(ev),
        eb = i.useRef(ep);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = ep));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (V)
            return (
                o7.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        o7.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            (0, tL.vq)(t) &&
                ey.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, o5.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                eb.current();
        }
    }, [V, s]);
    let ek = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != F || null != H || 0 === er.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == S ? -1 : er.findIndex((e) => e.ref === S.ref);
                    C(er[(l + (t ? 1 : -1) + er.length) % er.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != S &&
                    (e.preventDefault(),
                    eo(S, eK, { x: (x?.left ?? 0) + S.rect.x * en, y: (x?.top ?? 0) + S.rect.y * en }));
            },
            [u, F, H, er, S, eo, ev, x, en],
        ),
        ew = i.useCallback(
            (e) => {
                null == u ||
                    null == F ||
                    ((eV(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, el.dv)(
                            u,
                            (function (e, t) {
                                let { kind: l, name: n } = eW(e),
                                    a = [l, n].filter((e) => "" !== e).join(": ");
                                return `${eQ}${a}${eY}${eJ(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        et(),
                        C(null)));
            },
            [u, F, et],
        ),
        eN = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, el.vX)(u, e)), [u]),
        eA = i.useCallback(() => {
            if (null != u && null != H && null != g && eV(H.draft)) {
                var e, t;
                let l, n;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (n = (l = e3(u)).annotations.find((t) => t.id === e)) &&
                        e7(n, g) &&
                        e4(u, { ...l, annotations: l.annotations.map((l) => (l.id === e ? { ...l, comment: t } : l)) }),
                    K({ ...H, editing: !1 }));
            }
        }, [u, H, g]),
        eS = i.useCallback(() => {
            if (null != u && null != H && null != g) {
                var e;
                let t, l;
                ((e = H.id),
                    null != (l = (t = e3(u)).annotations.find((t) => t.id === e)) &&
                        e7(l, g) &&
                        e4(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, H, g]),
        eC = o
            ? y
                ? eu.intl.string(es.default["Eb/YV9"])
                : w
                  ? eu.intl.string(es.default.FD30bh)
                  : eu.intl.formatToPlainString(es.default.dTSqLF, { count: c.length })
            : "",
        eE = V && null != x,
        eI = E && null == H,
        eM = F?.target ?? ef?.target ?? null,
        eT = F ?? O,
        e_ = F ?? (O?.instant === !0 ? null : O),
        eP =
            null != ef && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = cd(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(cc(ef.target, ef.anchor, x, en), x)
                : null;
    return (
        i.useEffect(() => {
            let e = a();
            if (ef?.target.marker == null || null == e) return;
            let { target: t, anchor: l } = ef;
            cr(e, { x: Math.round(t.rect.x + t.rect.width * l.x), y: Math.round(t.rect.y + t.rect.height * l.y) });
        }, [ef, a]),
        (0, o6.createPortal)(
            (0, r.jsxs)("div", {
                ref: ey,
                className: ci.Li,
                children: [
                    (0, r.jsx)("div", {
                        className: ci.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eC,
                    }),
                    eE
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: ci.MT,
                                      style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": eu.intl.string(es.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: eg,
                                      onClick: ex,
                                      onKeyDown: ek,
                                  }),
                                  null != S && null == S.marker && null == F && null == H
                                      ? (0, r.jsx)(cb, { box: co(S, x, en) })
                                      : null,
                                  (0, r.jsx)("div", {
                                      ref: M,
                                      className: ci.aZ,
                                      children: (0, r.jsx)("div", {
                                          className: ci.xz,
                                          "data-shown": null != S && null == H && null == F ? "" : void 0,
                                          "data-instant": q ? "" : void 0,
                                          children: (0, r.jsxs)(j.E, {
                                              variant: "text-xs/medium",
                                              className: ci.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, r.jsx)("span", { className: ci.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, r.jsxs)("span", {
                                                            className: ci.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      ref: _,
                                      className: ci.Y,
                                      children: eI ? (0, r.jsx)("div", { className: ci.u }) : null,
                                  }),
                                  null == e_
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: ci.aZ,
                                            style: {
                                                transform: `translate3d(${e_.at.x + 20}px, ${e_.at.y + 20}px, 0)`,
                                            },
                                            children: (0, r.jsx)("div", {
                                                className: ci.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == F ? "" : void 0,
                                                children: (0, r.jsxs)(j.E, {
                                                    variant: "text-xs/medium",
                                                    className: ci.Ux,
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className: ci.Tl,
                                                            children: e_.label.kind,
                                                        }),
                                                        "" === e_.label.name
                                                            ? null
                                                            : (0, r.jsxs)("span", {
                                                                  className: ci.kh,
                                                                  children: [" ", e_.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, r.jsx)("div", { className: ci.D0, style: co(eM, x, en), "aria-hidden": !0 })
                                      : null,
                                  c.map((e, t) => {
                                      let l = cc(e.target, e.anchor, x, en),
                                          n = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, r.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: ci.xL,
                                              style: { ...cd(l, x), width: 24, height: 24 },
                                              "aria-label": eu.intl.formatToPlainString(es.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: eX(e.target),
                                              }),
                                              "aria-expanded": H?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == F && K(n);
                                              },
                                              onFocus: () => {
                                                  null == F && K(n);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), et(), K(n));
                                              },
                                              children: (0, r.jsx)(ch, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, r.jsx)(cn, {
                                            projectId: u,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: x,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != F && eV(eT.draft),
                                            onChange: (e) => {
                                                null != F && z({ ...F, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: et,
                                            onUploadFile: eN,
                                            closing: null == F,
                                        }),
                                  null != ef && null != H && null != eP
                                      ? (0, r.jsxs)(cg, {
                                            point: eP,
                                            frame: x,
                                            authorId: ef.authorId,
                                            title: eX(ef.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                H.confirmingRemove ? K({ ...H, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                H.editing || H.confirmingRemove || K(null);
                                            },
                                            children: [
                                                H.editing
                                                    ? (0, r.jsx)(T.f, {
                                                          autoFocus: !0,
                                                          label: eu.intl.string(es.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: H.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => K({ ...H, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eA());
                                                          },
                                                      })
                                                    : (0, r.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: ci.aC,
                                                          children: ef.comment,
                                                      }),
                                                e7(ef, g)
                                                    ? (0, r.jsx)("div", {
                                                          className: ci.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(j.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: ci.nv,
                                                                            children: eu.intl.string(es.default.wOHvts),
                                                                        }),
                                                                        (0, r.jsx)(N.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: eu.intl.string(es.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, r.jsx)(N.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: eu.intl.string(es.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(N.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: eu.intl.string(es.default.friIzR),
                                                                            onClick: () =>
                                                                                K({
                                                                                    ...H,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        H.editing
                                                                            ? (0, r.jsx)(N.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eV(H.draft),
                                                                                  text: eu.intl.string(
                                                                                      es.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, r.jsx)(N.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: eu.intl.string(
                                                                                      es.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
                                                                                          ...H,
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
function ch(e) {
    let { authorId: t } = e,
        l = (0, m.bG)([tX.default], () => tX.default.getUser(t), [t]);
    return (0, r.jsx)(rd.eu, {
        src: null == l ? null : rh.Ay.getUserAvatarURL(l),
        size: rm._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function cg(e) {
    let t,
        l,
        n,
        a,
        s,
        u,
        { point: o, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = i.useRef(null),
        v = i.useRef(null),
        [b, y] = i.useState(cs);
    i.useLayoutEffect(() => {
        let e = p.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let l = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - l.x) && 0.5 > Math.abs(e.y - l.y) ? e : l));
    }, []);
    let {
            left: k,
            top: w,
            originX: N,
            originY: A,
        } = ((l = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (a = Math.max((n = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - b.x, t), l)),
        { left: s, top: (u = Math.min(Math.max(o.y - b.y, n), a)), originX: o.x - s, originY: o.y - u }),
        S = { left: k, top: w, "--custom-conjure-card-origin-x": `${N}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, r.jsxs)("div", {
        ref: p,
        className: ci.Nr,
        style: S,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, r.jsxs)("div", {
                className: ci.MY,
                children: [
                    (0, r.jsx)("span", { ref: v, className: ci.ip, children: (0, r.jsx)(ch, { authorId: d }) }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: ci.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: ci.zI, children: x }),
        ],
    });
}
let cx = 300,
    cp = 2;
function cv(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function cj(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function cb(e) {
    let { box: t } = e;
    return (0, r.jsx)("div", { className: ci.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var cy = l(659723),
    ck = l(697744),
    cw = l(130324);
function cN(e) {
    let t = (0, ck.c)(),
        { events: l, getDuration: n } = t;
    i.useEffect(() => {
        let e = null,
            t = 0;
        return (
            (e = requestAnimationFrame(function a() {
                ((e = null), null != n()) ? l.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(a));
            })),
            () => {
                null != e && cancelAnimationFrame(e);
            }
        );
    }, [l, n]);
    let a = (0, iq.A)();
    return (
        i.useEffect(() => {
            if (!a) return;
            let t = setInterval(l.onMouseEnter, e);
            return () => clearInterval(t);
        }, [l, e, a]),
        t
    );
}
function cA(e) {
    let { className: t } = e,
        { Component: l, events: n } = cN(3e4);
    return (0, r.jsxs)("div", {
        className: t,
        onMouseEnter: n.onMouseEnter,
        onMouseLeave: n.onMouseLeave,
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, r.jsx)(j.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: cw.o,
                children: eu.intl.string(es.default.AyiQEp),
            }),
        ],
    });
}
var cS = l(251363),
    cC = l(944142),
    cE = l(532247),
    cI = l(501628);
function cM(e) {
    let { progress: t } = e,
        { Component: l } = cN(1500),
        n = eB.Q_.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, r.jsx)(j.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, r.jsx)("div", {
                className: cI.Ci,
                children: Array.from({ length: t.stepCount }, (e, l) =>
                    (0, r.jsx)(
                        "span",
                        {
                            className: cI.PM,
                            "data-state": l < t.stepIndex ? "done" : l === t.stepIndex ? "current" : "todo",
                        },
                        l,
                    ),
                ),
            }),
            n && null != t.stepLabel
                ? (0, r.jsx)(j.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function cT(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, surface: a } = e,
        s = null != t && null != l && l === n,
        u = (0, m.bG)([cC.A], () => (s ? cC.A.getLiveReload(t) : null), [s, t]),
        o = (0, G.A)(l, a)?.id ?? null,
        c = u?.phase ?? null,
        d = (function (e, t) {
            let l = (0, cE.dv)(e),
                [n, a] = i.useState(null),
                [r, s] = i.useState(l);
            r !== l && (s(l), a(null == l ? (0, cE.QP)(e, r) : null));
            let u = (0, m.bG)(
                    [t_.A],
                    () => {
                        let e = t_.A.getFrame(t);
                        return (0, tO.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                o = i.useRef(u),
                c = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((o.current = u), u && (c.current = !0));
                }, [u]),
                i.useEffect(() => {
                    if (null == n) return;
                    function e() {
                        return a(null);
                    }
                    function l(l) {
                        null != l.target && l.target === (0, cS.o)(null, t) && e();
                    }
                    ((c.current = o.current), document.addEventListener("load", l, !0));
                    let r = window.setTimeout(() => {
                            c.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", l, !0), window.clearTimeout(r), window.clearTimeout(i));
                    };
                }, [n, t]),
                n
            );
        })(c, o),
        f = (0, cE.h_)(c, u?.step ?? null, d);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(k.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, r.jsx)("div", {
                      className: cI.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, r.jsx)(cM, { progress: f }),
                  })
                : null,
        ],
    });
}
var c_ = l(343030),
    cP = l(317608),
    cR = l(338941),
    cL = l(964404);
let cD = { width: 1 / 0, height: 1 / 0 };
function c$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cD;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var cF = l(702083);
function cz(e) {
    let { children: t } = e,
        { mobile: l, landscape: n } = (0, m.cf)([tg.A], () => ({
            mobile: tg.A.isBuilderPreviewMobile(),
            landscape: tg.A.isBuilderPreviewLandscape(),
        })),
        a = i.useRef(null),
        [s, o] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = a.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            o((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let l = new ResizeObserver(t);
        return (l.observe(e), () => l.disconnect());
    }, []);
    let c = null != s && s.width > 0 ? s : null,
        d = l ? c$(n, c ?? void 0) : null;
    return (0, r.jsx)("div", {
        ref: a,
        className: u()(cF.dw, { [cF.PQ]: null != d }),
        children: (0, r.jsx)("div", { className: u()(cF.R9, { [cF.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var cO = l(347927);
function cU(e) {
    let { title: t, body: l, wide: n = !1, children: a } = e;
    return (0, r.jsxs)("div", {
        className: u()(cO.Bf, n && cO.Qx),
        children: [
            (0, r.jsxs)("div", {
                className: cO.Ux,
                children: [
                    (0, r.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != l
                        ? (0, r.jsx)(j.E, { variant: "text-md/medium", color: "text-subtle", children: l })
                        : null,
                ],
            }),
            a,
        ],
    });
}
var cG = l(957272);
function cq(e) {
    let { applicationId: t, surface: l, frameOverlay: n } = e,
        { frame: a, state: s } = (0, cR.A)({ applicationId: t, surface: l }),
        u = (0, tO.VA)(t, l);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = t_.A.getFrame(e);
                    if (null == t || tP.A.getWindowOpen(ep.MLl.ACTIVITY_POPOUT)) return;
                    let l = t_.A.getMainFrame()?.id === e;
                    t.intent === tO.sV.MAIN
                        ? (l || U.A.promoteFrame(e), U.A.resetFrameLayoutModes(e))
                        : l && U.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = t_.A.getFrame(u)) &&
                        ((0, tO.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        cL.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tO.sV.INLINE && U.A.promoteFrame(u),
                              U.A.updateFrameLayoutMode({ frameId: u, layoutMode: tO.y0.PIP }))
                            : e.intent === tO.sV.MAIN && U.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        s === cR.n.Launched)
    ) {
        let e = (0, r.jsx)(cP.A, { frameId: a.id, level: c_.A.WithinAppContent, className: cG.Z7, overlay: n });
        return (0, tb.Q5)(l) ? (0, r.jsx)(cz, { children: e }) : e;
    }
    return (0, r.jsx)(cB, { state: s });
}
function cB(e) {
    let { state: t } = e;
    switch (t) {
        case cR.n.RenderingElsewhere:
            return (0, r.jsx)("div", {
                className: cG.qs,
                children: (0, r.jsx)(cU, {
                    title: eu.intl.string(es.default["9kpdo7"]),
                    body: eu.intl.string(es.default.iIA8Nj),
                }),
            });
        case cR.n.NoApplication:
            return (0, r.jsx)(cA, { className: cG.qs });
        case cR.n.DoesNotSupportSurface:
            return (0, r.jsx)("div", {
                className: cG.qs,
                children: (0, r.jsx)(cU, {
                    title: eu.intl.string(es.default["7k4GyN"]),
                    body: eu.intl.string(es.default.zdIy3R),
                }),
            });
        case cR.n.Error:
            return (0, r.jsxs)("div", {
                className: cG.qs,
                children: [
                    (0, r.jsx)(E.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: eu.intl.string(es.default.lTPbnG),
                    }),
                    (0, r.jsx)(j.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: cG.tj,
                        children: eu.intl.string(es.default.e6GiAZ),
                    }),
                ],
            });
        case cR.n.AwaitingLaunch:
        case cR.n.Loading:
            return (0, r.jsx)("div", { className: cG.qs, children: (0, r.jsx)(w.y, {}) });
    }
}
var cH = l(308528),
    cK = l(334738),
    cV = l(688438),
    cW = l(355622),
    cX = l(365971),
    cJ = l(703462);
function cQ(e) {
    let { message: t } = e;
    return (0, r.jsxs)("div", {
        className: cJ.f,
        children: [
            (0, r.jsx)(aH.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, r.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function cY() {
    return (0, r.jsx)("div", { className: cJ.f, children: (0, r.jsx)(w.y, {}) });
}
function cZ(e) {
    let t,
        l,
        { previewApplicationId: n } = e,
        { data: a, isLoading: s } = (0, F.YY)(n),
        u = a?.bot?.id ?? null,
        o = (0, m.bG)([V.A], () => {
            if (null == u) return null;
            let e = V.A.getDMFromUserId(u);
            return null != e ? V.A.getChannel(e) : null;
        });
    ((t = o?.id ?? null),
        i.useEffect(() => {
            null != t && cH.A.preload(ep.ME, t);
        }, [t]),
        (l = (0, m.bG)([iU.A], () => iU.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, cX.Xg)();
            return (
                (0, cK.yl)(t, e),
                () => {
                    (0, cK.dm)(t, e);
                }
            );
        }, [t, l]));
    let [c, d] = i.useState(null),
        f = null != u && c === u;
    return (i.useEffect(() => {
        if (null == u || null != o) return;
        let e = !1;
        return (
            cH.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || d(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, o]),
    s && null == a)
        ? (0, r.jsx)(cY, {})
        : null == u || f
          ? (0, r.jsx)(cQ, { message: eu.intl.string(es.default["VP/O8s"]) })
          : null == o
            ? (0, r.jsx)(cY, {})
            : (0, r.jsx)("div", {
                  className: cJ.g,
                  children: (0, r.jsx)(cV.A, { channel: o, guild: null, chatInputType: cW.oU.SIDEBAR }, o.id),
              });
}
var c0 = l(887909),
    c1 = l(570962),
    c2 = l(998475);
function c3(e) {
    let {
        label: t,
        title: l,
        subtitle: n,
        header: a,
        body: i,
        actions: s,
        nextStep: o,
        appDetails: c,
        hasContentBackground: d,
        noPadding: m,
        obscured: f,
    } = (0, c0.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, r.jsxs)("section", {
        className: c2.Nr,
        "aria-label": t,
        children: [
            (0, r.jsx)("div", {
                className: c2.rf,
                children: (0, r.jsx)(c1.A, {
                    obscured: !0 === f,
                    children: (0, r.jsxs)("div", {
                        className: c2.Gq,
                        children: [
                            null != l
                                ? (0, r.jsxs)("div", {
                                      className: c2.z3,
                                      children: [
                                          (0, r.jsx)(E.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: l,
                                          }),
                                          null != n
                                              ? (0, r.jsx)(j.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: n,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            a,
                            (0, r.jsxs)("div", {
                                className: u()(c2.Qs, d ? c2.cw : null, m ? c2.pN : null),
                                children: [i, null == o ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: c2.o1,
                      children: s.map((e, t) => (0, r.jsx)(N.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var c4 = l(765671),
    c6 = l(269094),
    c5 = l(582063);
function c7(e) {
    let { applicationId: t, size: l } = e,
        n = (0, cR.A)({ applicationId: t, surface: tO.ZN });
    return (i.useEffect(() => {
        let e = (0, tO.VA)(t, tO.ZN);
        return () => (0, tS.r)(e);
    }, [t]),
    n.state !== cR.n.Launched)
        ? (0, r.jsx)(cB, { state: n.state })
        : n.frame.data.proxyTicketRefreshing
          ? (0, r.jsx)(cB, { state: cR.n.Loading })
          : (0, r.jsx)(c8, { lifecycle: n, size: l });
}
function c8(e) {
    let { lifecycle: t, size: l } = e,
        { ref: n, width: a, height: i } = (0, c4.Ay)(),
        s = (function (e, t) {
            let { width: l, height: n } = e;
            return null == l || null == n || l <= 0 || n <= 0 ? 1 : Math.min(1, l / t.width, n / t.height);
        })({ width: a, height: i }, l);
    return (0, r.jsxs)("div", {
        className: c5.JH,
        children: [
            (0, r.jsx)("div", { className: c5.LO, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                ref: n,
                className: c5.dw,
                children: (0, r.jsx)("div", {
                    className: c5.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(s),
                    },
                    children: (0, r.jsx)(c6.A, { frame: t.frame, application: t.application, className: c5.Gt }),
                }),
            }),
        ],
    });
}
var c9 = l(409478),
    de = l(652227);
function dt(e) {
    let {
        applicationId: t,
        previewApplicationId: l,
        surface: n,
        previewReady: a,
        previewGate: i,
        availability: s,
        activeMode: u,
        widgetApplicationId: o,
        overlayWidgetSize: c = tx,
        frameOverlay: d,
    } = e;
    return i?.type === "checking"
        ? (0, r.jsx)("div", { className: de.q, children: (0, r.jsx)(w.y, {}) })
        : i?.type === "permissions" && null != i.onAddPreviewBot
          ? (0, r.jsx)("div", {
                className: de.q,
                children: (0, r.jsx)(cU, {
                    title: eu.intl.string(es.default.SWXbpN),
                    children: (0, r.jsx)(N.$, {
                        size: "md",
                        text: eu.intl.string(es.default.FH2Udn),
                        onClick: i.onAddPreviewBot,
                    }),
                }),
            })
          : i?.type === "permissions"
            ? (0, r.jsx)("div", {
                  className: de.q,
                  children: null == i.authorizeProps ? (0, r.jsx)(w.y, {}) : (0, r.jsx)(c3, { ...i.authorizeProps }),
              })
            : a
              ? null == t
                  ? null
                  : (0, r.jsxs)("div", {
                        className: de.R,
                        children: [
                            (0, tj.yf)(s, u) ? (0, r.jsx)(cq, { applicationId: t, surface: n, frameOverlay: d }) : null,
                            "widget" === u && null != o
                                ? "unavailable-authorization-revoked" === s.profileState
                                    ? (0, r.jsx)("div", {
                                          className: de.q,
                                          children: (0, r.jsx)(cU, {
                                              wide: !0,
                                              title: eu.intl.string(es.default["08U+YO"]),
                                              body: eu.intl.string(es.default.pKBfrc),
                                          }),
                                      })
                                    : (0, r.jsx)(c9.A, { applicationId: o })
                                : null,
                            "overlay" === u && s.modes.includes("overlay")
                                ? (0, r.jsx)(c7, { applicationId: t, size: c })
                                : null,
                            "bot" === u && null != l ? (0, r.jsx)(cZ, { previewApplicationId: l }) : null,
                        ],
                    })
              : (0, r.jsx)(cA, { className: de.q });
}
var dl = l(175841),
    dn = l(750506),
    da = l(867193),
    dr = l(539197),
    di = l(977020);
function ds(e) {
    let { projectId: t } = e,
        l = (0, dr.X2)(t),
        n = (function (e) {
            let [t, l] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, dr.Ie)(e);
                        l((e) =>
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
                    let n = window.setInterval(t, 250);
                    return (
                        window.addEventListener("resize", t),
                        () => {
                            (window.clearInterval(n), window.removeEventListener("resize", t));
                        }
                    );
                }, [e]),
                null == e ? null : t
            );
        })(l?.iframe ?? null);
    if (null == l || null == n) return null;
    let { left: a, top: s, width: o, height: c, scale: d } = n;
    function m(e, t) {
        return { "--custom-conjure-cursor-x": `${e * d}px`, "--custom-conjure-cursor-y": `${t * d}px` };
    }
    return (0, r.jsxs)("div", {
        className: di.$Q,
        style: { left: a, top: s, width: o, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [dr.t$]: "",
        children: [
            l.presses > 0
                ? (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)("div", { className: u()(di.hN, di.vW), style: m(l.pressX, l.pressY) }),
                              (0, r.jsx)("div", { className: u()(di.hN, di.A7), style: m(l.pressX, l.pressY) }),
                          ],
                      },
                      l.presses,
                  )
                : null,
            (0, r.jsx)("svg", {
                className: u()(di.UE, { [di.SP]: l.shown, [di.Vq]: l.pressed, [di.GP]: l.dipping }),
                style: m(l.x, l.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, r.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var du = l(417760);
function dc(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function dd(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function dm(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: n, compact: a } = e,
        { stop: s, stopping: o } = (function (e) {
            let t = (0, m.bG)([ej.Ay], () => null != e && ej.Ay.isThinking(e)),
                [l, n] = i.useState(!1),
                [a, r] = i.useState(t);
            (t !== a && (r(t), t || n(!1)),
                i.useEffect(() => {
                    if (!l) return;
                    let e = setTimeout(() => n(!1), 5e3);
                    return () => clearTimeout(e);
                }, [l]));
            let s = i.useCallback(() => {
                null != e && (n(!0), (0, el.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: l };
        })(l),
        c = (0, tp.CU)(l),
        d = "controlling" === t,
        f = eu.intl.string(d ? (c ? es.default["VJW/5P"] : es.default["+hD2Iz"]) : es.default["h+i1r9"]),
        h =
            null != n
                ? (0, r.jsx)(N.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: eu.intl.string(es.default["1NcO7H"]),
                      onClick: n,
                  })
                : null,
        g =
            null != s
                ? (0, r.jsx)(N.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: eu.intl.string(es.default.oU59sU),
                      loading: o,
                      onClick: s,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return a
        ? (0, r.jsxs)("div", {
              className: u()(du.M0, du.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, r.jsx)(sY.i, { size: 12, color: "currentColor" })
                      : (0, r.jsx)(dl.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, r.jsx)(j.E, { variant: "text-sm/semibold", color: "none", className: du.ID, children: f }),
                  d ? (0, r.jsx)(k.A, { children: eu.intl.string(es.default.fg1sor) }) : null,
                  d ? (0, r.jsxs)("div", { className: du.lC, children: [h, g] }) : null,
              ],
          })
        : (0, r.jsxs)("div", {
              className: du.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, r.jsxs)("div", {
                      className: du.sp,
                      children: [
                          (0, r.jsx)(dl.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, r.jsx)(sY.i, { size: 12, color: "currentColor" }) : null,
                          (0, r.jsxs)("div", {
                              className: du.f4,
                              children: [
                                  (0, r.jsx)(j.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: du.w9,
                                      children: f,
                                  }),
                                  d
                                      ? (0, r.jsx)(j.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: du.Rb,
                                            children: eu.intl.string(es.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, r.jsxs)("div", { className: du.lC, children: [h, g] }) : null,
              ],
          });
}
function df(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: n,
            resolveTarget: a,
            frameId: s,
            onOpenPublishedApp: u = null,
        } = e,
        o = (0, tp.Zv)(null != l && l === n ? t : null),
        c = (function (e) {
            let [t, l] = i.useState(e),
                [n, a] = i.useState(!1);
            return (e !== t && (l(e), a(!e)),
            i.useEffect(() => {
                if (!n) return;
                let e = setTimeout(() => a(!1), 2400);
                return () => clearTimeout(e);
            }, [n]),
            e)
                ? "controlling"
                : n
                  ? "handoff"
                  : "idle";
        })(o),
        d = (0, te.useHasAnyModalOpen)(),
        m = tz(s);
    i.useEffect(() => {
        o &&
            m &&
            null != s &&
            (function (e) {
                if (!t$(e)) return;
                let t = tD(e);
                null != t && (0, tR.sP)(t);
            })(s);
    }, [o, m, s]);
    let [f, h] = i.useState(null),
        [g, x] = i.useState(null),
        [p, v] = i.useState(null),
        j = "idle" !== c;
    i.useEffect(() => {
        if (!j) return;
        function e() {
            let e = dc(a());
            h((t) => (dd(t, e) ? t : e));
            let t = null == g ? null : dc(g);
            (v((e) => (dd(e, t) ? e : t)), null != g && (0, da.C)(g.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let l = null == g ? null : new ResizeObserver(e);
        return (
            null != g && l?.observe(g),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    l?.disconnect(),
                    null != g && (0, da.C)(0));
            }
        );
    }, [j, a, g]);
    let b = "idle" !== c && null != f,
        y = b && "controlling" === c && !d,
        k = null != f && f.width < 420,
        w = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        N =
            null == f
                ? void 0
                : (function (e, t) {
                      if (null == t) return { left: e.left, top: e.top, width: e.width, height: e.height };
                      let l = Math.min(e.left, t.left),
                          n = Math.min(e.top, t.top);
                      return {
                          left: l,
                          top: n,
                          width: Math.max(e.left + e.width, t.left + t.width) - l,
                          height: Math.max(e.top + e.height, t.top + t.height) - n,
                      };
                  })(f, p),
        A = (function () {
            let [e] = i.useContext(dn.uY),
                [t] = i.useState(() => document.createElement("div"));
            return (
                i.useLayoutEffect(() => {
                    if (null != e) return (e.prepend(t), () => t.remove());
                }, [e, t]),
                null == e ? document.body : t
            );
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            b
                ? (0, r.jsx)("div", {
                      ref: x,
                      className: du.D,
                      "data-phase": c,
                      children: (0, r.jsx)("div", {
                          className: du.QF,
                          children: (0, r.jsx)(dm, { phase: c, projectId: t, onOpenPublishedApp: u, compact: k }),
                      }),
                  })
                : null,
            (0, o6.createPortal)(
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: du.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === c
                                ? eu.intl.string(es.default.oWcemF)
                                : "handoff" === c
                                  ? eu.intl.string(es.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            y
                ? (0, o6.createPortal)(
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: du.ys,
                                  style: N,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)("div", {
                                  className: du.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)(ds, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var dh = l(399503),
    dg = l(853555),
    dx = l(558960),
    dp = l(187645);
let dv = new Map(),
    dj = !1;
function db() {
    let e = new Map();
    for (let t of new Set([...ej.Ay.getActivityOrderedProjectIds(), ...(0, tp.T7)()])) {
        if (!ej.Ay.isThinking(t) && !(0, tp.wK)(t)) continue;
        let l = (function (e) {
            let t = eA.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let l = (0, tb.Rc)(t);
            return (0, tO.x1)(l) ? l.id : null;
        })(t);
        null != l && e.set(t, l);
    }
    for (let [n, a] of [...dv]) {
        var t, l;
        e.get(n) !== a.frameId &&
            ((t = n),
            (l = a),
            dv.delete(t),
            l.unregisterLookup(),
            dx.A.removeFrameTarget(l.frameId, l.element),
            l.element.remove());
    }
    for (let [t, l] of e)
        dv.has(t) ||
            (function (e, t) {
                let l = document.createElement("div");
                ((l.className = dp.t),
                    l.setAttribute("inert", ""),
                    l.setAttribute("aria-hidden", "true"),
                    dy(l),
                    document.body.appendChild(l));
                let n = { frameId: t, element: l, unregisterLookup: () => {} };
                (dv.set(e, n),
                    (n.unregisterLookup = (0, dg.Ng)(e, () => (0, cS.o)(l, t))),
                    dx.A.registerFrameTarget(t, l, c_.A.Backstage, void 0));
            })(t, l);
    for (let e of dv.values()) dy(e.element);
}
function dy(e) {
    let t = tg.A.isBuilderPreviewMobile();
    e.classList.toggle(dp.L, !t);
    let l = t ? c$(tg.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != l ? `${l.width}px` : ""), (e.style.height = null != l ? `${l.height}px` : ""));
}
var dk = l(873727),
    dw = l(147248),
    dN = l(418842),
    dA = l(363195),
    dS = l(818023);
let dC = null;
var dE = l(602853),
    dI = l(517461),
    dM = l(487336);
function dT(e) {
    let { open: t, maxWidth: l, onWidthChange: n, children: a } = e,
        s = (0, dE.r)(L.A.modules.chat.RESIZE_HANDLE_WIDTH),
        u = i.useRef(null),
        [o, c] = (0, dI.V)("VibegrationsChatSidebarWidth", 460),
        [d, m] = i.useState(o ?? 460),
        f = (0, aa.clamp)(d, 360, l);
    i.useLayoutEffect(() => {
        n(t ? f + s : 0);
    }, [f, t, s, n]);
    let h = (0, oC.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: u,
            onElementResize: m,
            onElementResizeEnd: c,
            orientation: oC.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: dM.pz,
        hidden: !t,
        children: [
            (0, r.jsx)("div", { className: dM.Di, onPointerDown: g }),
            (0, r.jsx)("div", { ref: u, className: dM.kL, style: { width: f }, children: a }),
        ],
    });
}
var d_ = l(541940);
function dP(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: o,
            mainClassName: c,
            content: d,
            sidebar: f,
            onOpenPublishedApp: h,
            showsFrame: g,
        } = e,
        [x, p] = i.useState(null),
        v = (0, G.A)(n, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let l = (0, m.bG)([dA.A], () => (0, dk.x4)(dA.A.theme)),
            n = (0, m.bG)([dw.A], () => dw.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, m.cf)([iy.Ay], () => ({
                reducedMotion: iy.Ay.useReducedMotion,
                fontScale: (0, dk.U0)(),
                highContrast: iy.Ay.isHighContrastModeEnabled,
                forcedColors: iy.Ay.useForcedColors,
                underlineLinks: iy.Ay.alwaysShowLinkDecorations,
            })),
            c = eB.hH.useSetting(),
            d = (0, dN.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            p = i.useCallback(() => {
                let n = (0, cS.o)(e, t);
                if (null == n) return;
                x.current = n;
                let i = {
                    revision: ++g.current,
                    baseTheme: l,
                    customTheme: (0, dk.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                };
                (0, ca.W)(n, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, u, r, t, s, c, e, a, d, o]),
            v = i.useRef(p);
        i.useLayoutEffect(() => {
            v.current = p;
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
            }, [n, j]),
            i.useLayoutEffect(() => {
                (p(), j());
            }, [j, p]),
            i.useLayoutEffect(() => {
                let l = (0, cS.o)(e, t);
                null != l && l !== x.current && j();
            }),
            i.useEffect(() => {
                function l(l) {
                    l.target === (0, cS.o)(e, t) && ((x.current = null), j());
                }
                return (document.addEventListener("load", l, !0), () => document.removeEventListener("load", l, !0));
            }, [t, e, j]),
            i.useEffect(() => {
                let e = new MutationObserver(j);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [j]));
    })(x, j),
        i.useEffect(() => {
            if (null != t) return (0, dg.Ng)(t, () => (0, cS.o)(x, j));
        }, [t, x, j]));
    let b = i.useCallback(() => (0, cS.o)(x, j), [x, j]),
        y = i.useCallback(() => (g ? (0, cS.o)(x, j) : x), [g, x, j]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: u()(d_.Mh, c),
                children: [
                    o,
                    (0, r.jsx)(df, {
                        projectId: t ?? null,
                        applicationId: n,
                        previewApplicationId: a,
                        resolveTarget: y,
                        frameId: j,
                        onOpenPublishedApp: h,
                    }),
                    (0, r.jsx)("div", { ref: p, className: d_.fm, children: d }),
                ],
            }),
            f,
            (0, r.jsx)(cf, {
                projectId: t ?? null,
                applicationId: n,
                previewApplicationId: a,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function dR(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: l,
        applicationId: n,
        previewApplicationId: a,
        surface: s,
        header: o,
        chatOpen: c,
        onCloseChat: d,
        chatHeaderAction: f,
        onRestoreVersion: h,
        onImportProject: g,
        debugOpen: x = !1,
        onCloseDebug: p,
        restoreState: v,
        previewReady: j,
        previewGate: b,
        availability: y,
        activeMode: k,
        widgetApplicationId: w,
        overlayWidgetSize: N,
        onOpenPublishedApp: A = null,
    } = e;
    (0, dh.k)(t, w);
    let S = s.type === lB.U.MAIN || (0, tb.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: l } = (0, m.cf)([tg.A], () => ({
            mobile: tg.A.isBuilderPreviewMobile(),
            landscape: tg.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let n;
            if (null != e) {
                if (t) ((n = l ? dS.aX.LANDSCAPE : dS.aX.PORTRAIT), (dC = e));
                else {
                    if (dC !== e) return;
                    ((n = dS.aX.UNHANDLED), (dC = null));
                }
                nL.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: n, applicationId: e });
            }
        }, [e, t, l]);
    })(S ? n : null);
    let C = i.useRef(null),
        [E, I] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, el.TP)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, el.TP)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (S) return ((0, eN.HV)(n), () => (0, eN.HV)(null));
        }, [n, S]),
        i.useEffect(() => {
            null != t &&
                ((0, el.Hc)(t),
                dj ||
                    ((dj = !0),
                    ej.Ay.addChangeListener(db),
                    eA.Ay.addChangeListener(db),
                    t_.A.addChangeListener(db),
                    tg.A.addChangeListener(db),
                    (0, tp.W3)(db),
                    db()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = C.current;
            if (null == e) return;
            function t() {
                null != e && I(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        i.useLayoutEffect(() => () => (0, eN.Zq)(0), []));
    let M = Math.max(360, E - 320),
        T = c || S;
    return (0, r.jsx)("div", {
        ref: C,
        className: d_.LB,
        children: (0, r.jsx)(dP, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: o,
            onOpenPublishedApp: A,
            showsFrame: (0, tj.yf)(y, k),
            mainClassName: null == o ? void 0 : u()(d_.ez, { [d_.zt]: c }),
            content: (0, r.jsx)(dt, {
                applicationId: n,
                previewApplicationId: a,
                surface: s,
                previewReady: j,
                previewGate: b,
                availability: y,
                activeMode: k,
                widgetApplicationId: w,
                overlayWidgetSize: N,
                frameOverlay: (0, r.jsx)(cT, { projectId: t, applicationId: n, previewApplicationId: a, surface: s }),
            }),
            sidebar:
                null != t && T
                    ? (0, r.jsx)(dT, {
                          open: c,
                          maxWidth: M,
                          onWidthChange: eN.Zq,
                          children: (0, r.jsx)("div", {
                              className: d_.cO,
                              children: x
                                  ? (0, r.jsx)(o4, { projectId: t, onClose: p ?? (() => {}) }, t)
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(cy.A, { projectId: t }),
                                            (0, r.jsx)(lH.Ay, {
                                                "aria-label": eu.intl.string(eu.t["/VQax8"]),
                                                toolbar: (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        f,
                                                        null == d
                                                            ? null
                                                            : (0, r.jsx)(lH.Ay.Icon, {
                                                                  icon: P.P,
                                                                  tooltip: eu.intl.string(es.default.JD6Oit),
                                                                  onClick: d,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, r.jsx)(lH.Ay.Title, {
                                                    children: eu.intl.string(eu.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: d_.cb,
                                                children: (0, r.jsx)(
                                                    uo,
                                                    {
                                                        projectId: t,
                                                        restoreState: v,
                                                        onRestoreVersion: h,
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
var dL = l(631417);
function dD(e) {
    let { title: t, actions: l, breadcrumb: n, project: a, onOpenProjectSettings: i } = e,
        s = eu.intl.string(es.default.FzfmQ8);
    return (0, r.jsx)(B.A, {
        hideSearch: !0,
        toolbar: l,
        className: dL.wx,
        "aria-label": t,
        children: (0, r.jsxs)("div", {
            className: dL.QF,
            children: [
                (0, r.jsx)(R.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: L.A.colors.TEXT_STRONG,
                    className: dL.Kk,
                }),
                null != n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(B.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, r.jsx)(B.A.Caret, {}),
                          ],
                      })
                    : null,
                null != a && null != i
                    ? (0, r.jsx)(y.m, {
                          asContainer: !0,
                          text: s,
                          position: "bottom",
                          children: (0, r.jsx)(b.D, {
                              className: dL.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, r.jsx)(lk.A, { project: a, size: "header" }),
                          }),
                      })
                    : null,
                (0, r.jsx)(B.A.Title, { className: dL.Qw, wrapperClassName: dL.DD, children: t }),
            ],
        }),
    });
}
var d$ = l(683071);
let dF = "conjuring-help";
var dz = l(173114);
function dO() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: l,
            } = (0, m.cf)([tX.default, X.A, lF.Ay, sn.A], () => {
                let e = tX.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of X.A.getGuildsArray()) {
                    if (!t.features.has(ep.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let l = lF.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, z.m1)(t, tX.default, sn.A) === dF;
                    });
                    if (null != l) return { isStaff: e, guildId: t.id, channelId: l.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != l
                    ? { kind: "channel", guildId: t, channelId: l }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = i.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, H.pX)(ep.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, lr.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, r.jsx)("div", {
              className: dz.l,
              children: (0, r.jsx)(d$.w, {
                  type: "info",
                  iconAlign: "center",
                  message: eu.intl.format(es.default["6anmu1"], { channel: dF, onNavigate: t }),
                  role: "static",
              }),
          });
}
var dU = l(606128),
    dG = l(323140);
function dq(e) {
    return (0, r.jsx)(h.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dB(e) {
    return (0, r.jsx)(g.u, { ...e, size: "custom", width: 20, height: 20 });
}
function dH(e) {
    return (0, r.jsx)(x.k, { ...e, size: "custom", width: 20, height: 20 });
}
function dK(e) {
    return (0, r.jsx)(p.H, { ...e, size: "custom", width: 20, height: 20 });
}
let dV = {
    showPublishBlocked: function (e) {
        (0, te.openModal)((t) => (0, r.jsx)(lO, { ...t, reason: e }));
    },
    openPublishNotes: lU.A,
    showError: (e) => (0, v.P0)((0, v.ox)(e, v.Ck.FAILURE)),
    openProfile: (e) => {
        (0, K.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(l.bind(l, 468689))
            .then((t) => {
                let { default: l } = t;
                return l.open(e, ep.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function dW(e) {
    var t;
    let l,
        n,
        a,
        s,
        o,
        h,
        g,
        x,
        p,
        N,
        { project: A, guildId: S, onSelect: C, onRemix: E, shared: I = !1 } = e,
        M =
            ((l = A.id),
            (n = A.name),
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, v.P0)((0, v.ox)(eu.intl.formatToPlainString(es.default.aN2JdD, { name: n }), v.Ck.MESSAGE)),
                    ed(l, n)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", l, e),
                                (0, v.P0)(
                                    (0, v.ox)(
                                        409 === (t = e instanceof el.xE ? e.status : null)
                                            ? eu.intl.string(es.default["9oqbEw"])
                                            : 404 === t
                                              ? eu.intl.string(es.default["0W8uLq"])
                                              : eu.intl.string(es.default.N8753A),
                                        v.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [l, n])),
            {
                onExport: s,
                onImport: (o = em(
                    i.useCallback(
                        (e) => {
                            let t = ec(e);
                            null != t
                                ? (0, v.P0)((0, v.ox)(t, v.Ck.FAILURE))
                                : (0, f.A)({
                                      title: eu.intl.formatToPlainString(es.default["Gm+u1+"], { name: n }),
                                      subtitle: eu.intl.string(es.default.M7H3sJ),
                                      confirmText: eu.intl.string(es.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, H.pX)(ep.BVt.CHANNEL(S, ev.VV.CONJURE, l));
                                          try {
                                              await eo(l, e, eu.intl.string(es.default.Owerd3));
                                          } catch {
                                              (0, v.P0)((0, v.ox)(eu.intl.string(es.default["Q+l4Hv"]), v.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [l, n, S],
                    ),
                )).open,
                importInput: o.input,
            }),
        T =
            null == A.updated_at
                ? null
                : eu.intl.formatToPlainString(es.default.AXydi3, { time: c()(A.updated_at).fromNow() }),
        _ = (0, tV.wu)(A),
        P =
            (0, m.bG)([X.A], () => (null == _ ? null : (X.A.getGuild(_)?.name ?? null)), [_]) ??
            eu.intl.string(es.default["3QFps8"]),
        R = (0, m.bG)([eA.Ay], () => eA.Ay.isProjectDeleting(A.id), [A.id]),
        L =
            ((t = I ? A : null),
            (h = t?.id),
            (g = t?.owner_user_id),
            (x = (0, m.yK)(
                [ej.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  ej.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== g ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, g],
            )),
            i.useEffect(() => {
                null != g && (t1(g), x.forEach(t1));
            }, [g, x]),
            (p = (0, m.bG)([tX.default], () => (null == g ? null : tX.default.getUser(g)), [g])),
            (N = (0, m.yK)([tX.default], () => x.map((e) => tX.default.getUser(e)).filter((e) => null != e), [x])),
            i.useMemo(
                () =>
                    null == p
                        ? null
                        : {
                              creator: p,
                              collaborators: N,
                              label: (function (e, t) {
                                  let l;
                                  return 0 === t.length
                                      ? eu.intl.formatToPlainString(es.default.t5RWBS, { creator: e })
                                      : eu.intl.formatToPlainString(es.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (l = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === l
                                                      ? eu.intl.formatToPlainString(eu.t["8s9z8P"], { first: t[0] })
                                                      : 2 === l
                                                        ? eu.intl.formatToPlainString(eu.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === l
                                                          ? eu.intl.formatToPlainString(eu.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : eu.intl.formatToPlainString(eu.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: l - 3,
                                                            }),
                                        });
                              })(
                                  (0, tJ.mG)(p),
                                  N.map((e) => (0, tJ.mG)(e)),
                              ),
                          },
                [p, N],
            )),
        $ = i.useId(),
        F = (0, r.jsx)(j.E, { variant: "text-md/semibold", color: "text-strong", className: dG.j1, children: A.name }),
        z = (0, eb.oF)(A.id),
        O = {
            projectId: A.id,
            projectName: A.name,
            guildId: S,
            projectGuildId: A.guild_id,
            isOwner: (0, eA.PV)(A),
            canRemix: (0, eA.H_)(A),
            onRemix: E,
            onExport: M.onExport,
            onImport: M.onImport,
        };
    return (0, r.jsxs)("div", {
        className: u()(dG.OY, { [dG.Wy]: R }),
        "aria-busy": R,
        children: [
            (0, r.jsx)(tt.Ay, { projectId: A.id }),
            null == z || R ? null : (0, r.jsx)("div", { className: dG.SB, "aria-hidden": !0 }),
            (0, r.jsxs)(b.D, {
                className: dG.W6,
                onClick: R ? void 0 : C,
                onContextMenu: function (e) {
                    R || (0, D.jA)(e, () => (0, r.jsx)(lb, { ...O, onCloseMenu: D.Z_ }));
                },
                tabIndex: R ? -1 : void 0,
                "aria-describedby": null != L ? $ : void 0,
                children: [
                    (0, r.jsx)(lk.A, { project: A, size: "card", className: dG.VJ }),
                    (0, r.jsxs)("div", {
                        className: dG.MM,
                        children: [
                            (0, r.jsxs)("div", {
                                className: dG.Ub,
                                children: [
                                    null != L ? (0, r.jsx)(y.m, { text: L.label, ariaHidden: !0, children: F }) : F,
                                    null == L || R ? null : (0, r.jsx)(lA, { creator: L, className: dG.rb }),
                                    z !== d.I.NEEDS_INPUT || R
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: dG.fs,
                                              children: [
                                                  (0, r.jsx)(q.A, { mentionsCount: 1 }),
                                                  (0, r.jsx)(k.A, { children: eu.intl.string(es.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: dG.h3,
                                children: [
                                    (0, r.jsx)(j.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: dG.Wb,
                                        children: R ? eu.intl.string(es.default.Yh5pAc) : P,
                                    }),
                                    null == T || R
                                        ? null
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("span", {
                                                      className: dG.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, r.jsx)(j.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: dG.zM,
                                                      children: T,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != L ? (0, r.jsx)(k.A, { id: $, children: L.label }) : null,
            (0, r.jsx)("div", {
                className: dG.M2,
                children: R
                    ? (0, r.jsx)(w.y, { type: w.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, r.jsxs)("div", {
                          className: dG.Pl,
                          children: [(0, r.jsx)(ly, { ...O, trigger: "iconButton" }), M.importInput],
                      }),
            }),
        ],
    });
}
function dX(e) {
    var t, n;
    let a,
        { project: s, projectsLoaded: o, onBack: c, guildId: d } = e,
        [h, g] = i.useState(!0),
        [x, p] = i.useState(!1),
        b = eB.Q_.useSetting() || !1,
        [k, w] = i.useState(null),
        [I, M] = i.useState(null),
        T = s?.id ?? null,
        _ = i.useRef(T),
        P = i.useRef(!0),
        R = i.useRef(!1),
        L = i.useRef(null);
    ((_.current = T),
        i.useEffect(
            () => (
                (P.current = !0),
                () => {
                    P.current = !1;
                }
            ),
            [],
        ));
    let D = (0, m.bG)([eA.Ay], () => (null == T ? null : eA.Ay.getIntegrationStatus(T)), [T]),
        { data: $, isLoading: q } = (0, F.YY)(s?.preview_application_id ?? void 0),
        K = null != T && I !== T,
        W = D?.preview_ready === !0,
        X = D?.has_activity === !0,
        {
            availability: J,
            activeMode: Y,
            setMode: Z,
            frameSurface: ee,
            frameSurfaceOptions: et,
            setFrameSurface: en,
            widgetApplicationId: ea,
        } = (function (e) {
            let {
                    applicationId: t,
                    previewApplicationId: l,
                    declaredActivity: n,
                    previewSupportedSurfaces: a,
                    installScope: r,
                    ownerAuthorizationRevoked: s,
                    mainCardOnly: u = !1,
                    supportsOverlay: o = !1,
                } = e,
                [c, d] = i.useState(null),
                [f, h] = i.useState(null),
                [g, x] = i.useState(t);
            g !== t && (x(t), d(null), h(null));
            let p = null != l && l === t ? l : null,
                v = (0, m.bG)([tE.default], () => tE.default.getId()),
                { applicationWidgetConfig: j } = (0, tA.A)(v, p ?? void 0),
                b = j?.surfaces,
                y = (0, tj.yZ)({
                    widgetTop: b?.[tN.m.WIDGET_TOP] != null,
                    widgetBottom: b?.[tN.m.WIDGET_BOTTOM] != null,
                    miniProfile: b?.[tN.m.MINI_PROFILE] != null,
                }),
                k = null != p && (u ? y.hasMainCard : y.hasAny),
                { data: w } = (0, F.YY)(l ?? void 0),
                N = null != l && w?.bot?.id != null,
                { data: A, isLoading: S } = (0, F.YY)(t ?? void 0),
                C = n || (0, tC.X)(A),
                E = null != t && S && null == A,
                I = (0, tj.P5)(a, {
                    legacy: { hasFrame: C, hasProfileWidget: k, hasBotDm: N },
                    widgetResolvable: null != p,
                    botDmResolvable: N,
                }),
                M = (0, tj.Xm)({ installScope: r, ...I, hasOverlay: o, ownerAuthorizationRevoked: s }),
                T = i.useMemo(() => (0, tI.hR)(a), [a]),
                _ = (0, tI.PH)(f, T);
            return (
                i.useEffect(() => {
                    if (null != t) for (let e of (0, tb.Mm)(t)) e.surface.type !== (0, tI.BR)(_) && (0, tS.r)(e.id);
                }, [t, _]),
                {
                    availability: M,
                    isResolving: E,
                    activeMode: E ? null : (0, tj.Qs)(c, M),
                    setMode: d,
                    frameSurface: _,
                    frameSurfaceOptions: T,
                    setFrameSurface: h,
                    widgetApplicationId: p,
                }
            );
        })({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: X,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: D?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(Q.q7.OVERLAY) === !0,
        }),
        er =
            ((t = (0, m.bG)(
                [ej.Ay],
                () =>
                    null == T
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let l = e[t].proposal?.overlay_widget;
                                  if (null != l) return l;
                              }
                              return null;
                          })(ej.Ay.getMessages(T)),
                [T],
            )),
            null != (a = t?.default_size) &&
            Number.isFinite(a.width) &&
            Number.isFinite(a.height) &&
            a.width > 0 &&
            a.height > 0
                ? a
                : tx);
    (0, tv.x)(T, (e) => {
        J.modes.includes(e) && Z(e);
    });
    let ei = J.modes.includes("frame"),
        ed = i.useMemo(() => {
            var e;
            return (
                (e = J.modes),
                e.flatMap((e) => ("frame" === e ? et.map((t) => ({ mode: e, surface: t })) : [{ mode: e }]))
            );
        }, [J.modes, et]),
        ef = i.useCallback(
            (e) => {
                ("frame" === e.mode && en(e.surface), Z(e.mode));
            },
            [en, Z],
        ),
        eh = (0, tj.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: W,
            integrationInstalled: D?.integration_installed ?? null,
            botPermissionsChanged: D?.bot_permissions_changed === !0,
        }),
        eg = h && !x,
        ex = eu.intl.string(eg ? es.default.JD6Oit : es.default.xjJAQm),
        eb = i.useCallback(() => {
            if (x) {
                (p(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [x]),
        ey = i.useCallback(() => g(!1), []),
        { active: ek } = e9(T);
    i.useEffect(() => {
        null != T && ek && !ei && e6(T);
    }, [T, ek, ei]);
    let ew = i.useRef(null),
        eS = (0, tp.Zv)(T),
        eC = eu.intl.string(eS ? es.default.Sme0T0 : ek ? es.default.vn5Rzu : es.default["cl/Jyl"]),
        eE = i.useCallback(() => {
            if (null != T) {
                let e;
                if (ek) return void e6(T);
                (p(!1), g(!0), (e = e3(T)).active || e4(T, { ...e, active: !0 }));
            }
        }, [T, ek]),
        eI = i.useCallback(() => {
            p((e) => !e && (g(!0), !0));
        }, []),
        eM = i.useCallback(() => p(!1), []),
        eT = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == s || R.current) return;
                let n = s.id;
                function a() {
                    return P.current && _.current === n;
                }
                ((R.current = !0),
                    p(!1),
                    g(!0),
                    w({ entry: e, status: "restoring" }),
                    (0, el.oB)(n, e.sha)
                        .then(
                            async () => {
                                if (
                                    (l &&
                                        a() &&
                                        (0, v.P0)(
                                            (0, v.ox)(
                                                eu.intl.formatToPlainString(es.default.Z4n6LX, {
                                                    title: (0, tl.T4)(e.subject).short,
                                                }),
                                                v.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, tn.c)(n, t);
                                    null != e && (0, v.P0)((0, v.ox)(e, v.Ck.FAILURE));
                                }
                                a() && w({ entry: e, status: "restored" });
                            },
                            (t) => {
                                a() &&
                                    (w({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", n, t),
                                    (0, v.P0)((0, v.ox)(eu.intl.string(es.default["PSdo+w"]), v.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (R.current = !1);
                        }));
            },
            [s],
        ),
        e_ = (0, m.bG)([tg.A], () => tg.A.isBuilderPreviewMobile()),
        eP = eu.intl.string(e_ ? es.default.tKGF0Q : es.default.peqEOY),
        eR = i.useCallback(() => (0, eN.GG)(!e_), [e_]),
        eL = (0, m.bG)([tg.A], () => tg.A.isBuilderPreviewLandscape()),
        eD = eu.intl.string(eL ? es.default.tunI2l : es.default.DoNdjA),
        e$ = i.useCallback(() => (0, eN.Lw)(!eL), [eL]),
        eF = (0, tb.jS)(s),
        ez = i.useMemo(() => (0, tb.Op)(eF, ee), [eF, ee]),
        eO = (0, G.A)(s?.preview_application_id ?? null, ez),
        eU = (0, tO.x1)(eO) && eO.data.proxyTicketRefreshing,
        eG = i.useCallback(() => {
            null == eO || eU || U.A.refreshProxyTicket(eO.id);
        }, [eO, eU]),
        eq = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eO?.id), (0, el.Bn)(e), (0, tS.r)(t)), c());
        }, [s, eO?.id, c]),
        eH = i.useCallback(() => {
            null != s && (g(!0), (0, el.dv)(s.id, eu.intl.string(es.default.oU20rd)));
        }, [s]),
        eK = em(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        l = ec(e);
                    null != l
                        ? (0, v.P0)((0, v.ox)(l, v.Ck.FAILURE))
                        : (0, f.A)({
                              title: eu.intl.formatToPlainString(es.default["Gm+u1+"], { name: s.name }),
                              subtitle: eu.intl.string(es.default.M7H3sJ),
                              confirmText: eu.intl.string(es.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  g(!0);
                                  try {
                                      await eo(t, e, eu.intl.string(es.default.Owerd3));
                                  } catch {
                                      (0, v.P0)((0, v.ox)(eu.intl.string(es.default["Q+l4Hv"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eV = i.useCallback(() => {
            null != s && (0, lG.A)(s, d);
        }, [s, d]),
        eW = i.useCallback(async () => {
            if (null == T || _.current !== T) return;
            L.current?.abort();
            let e = new AbortController();
            ((L.current = e), M(null));
            try {
                await (0, eN.U1)(T, e.signal);
            } catch {
            } finally {
                e.signal.aborted || L.current !== e || _.current !== T || M(T);
            }
        }, [T]);
    i.useEffect(
        () => (
            eW(),
            () => {
                (L.current?.abort(), (L.current = null));
            }
        ),
        [eW],
    );
    let eX = (0, l$.a)(s ?? null, D ?? null, d),
        eJ = ((n = s?.application_id ?? null), (0, m.bG)([lF.Ay], () => (null == n ? null : (0, lS.i8)(d, n)), [d, n])),
        eQ = i.useMemo(() => (null == eJ ? null : () => (0, H.pX)(ep.BVt.CHANNEL(d, eJ))), [d, eJ]),
        eY = i.useCallback(async () => {
            null != s && (await (0, l$.$)(s, eX));
        }, [eX, s]),
        eZ = i.useCallback(async () => {
            try {
                await eY();
            } catch {}
            await eW();
        }, [eW, eY]),
        e0 = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || q || K
                ? null
                : {
                      ...(0, tK.i)({ applicationId: e, application: $ ?? null, guildId: eX }),
                      onClose: () => {
                          eZ();
                      },
                  };
        }, [K, eZ, eX, q, $, s?.preview_application_id]),
        e1 = D?.integration_installed === !1,
        e2 = i.useCallback(() => {
            null != s && (0, ls.vL)(s.id, d).catch(() => {});
        }, [d, s]),
        e5 = (0, tj.JR)(Y, eh)
            ? { type: "permissions", authorizeProps: e0, onAddPreviewBot: e1 ? e2 : void 0 }
            : K && null == D
              ? { type: "checking" }
              : void 0,
        e7 = (0, m.bG)([eA.Ay], () => null != T && eA.Ay.isProjectDeleting(T), [T]);
    i.useEffect(() => {
        ((null == s && o) || e7) && (0, H.bG)(ep.BVt.CHANNEL(d, ev.VV.CONJURE));
    }, [d, s, o, e7]);
    let e8 = i.useMemo(() => ({ guildId: d, platform: dV, busy: K || q }), [d, K, q]),
        tt = (0, ls.Ay)(T, e8),
        ta = tt?.intent === "open" && "channel" === tt.destination ? tt.appChannelId : null,
        tr = (0, m.bG)([V.A], () => (null == ta ? null : V.A.getChannel(ta)), [ta]),
        ti = (0, z.Ay)(tr),
        ts = (0, O.gU)(tr),
        tu =
            null != ti && null != ts
                ? eu.intl.format(es.default.gR7PUV, {
                      channel: ti,
                      channelIconHook: (e, t) =>
                          (0, r.jsx)(ts, { size: "xs", color: "currentColor", className: dG.Y2 }, t),
                  })
                : tt?.label,
        to = tt?.upToDate === !0 ? eu.intl.string(es.default.X0kGp2) : (tt?.disabledReason ?? tt?.notice ?? null),
        tc =
            null == tt
                ? null
                : (0, r.jsx)("div", {
                      className: dG.As,
                      children: (0, r.jsx)(y.m, {
                          text: to,
                          asContainer: !0,
                          children: (0, r.jsx)(N.$, {
                              size: "sm",
                              variant: tt.upToDate ? "secondary" : "primary",
                              loading: tt.publishing,
                              disabled: tt.disabled,
                              onClick: () => tt.run("header"),
                              text: tu,
                          }),
                      }),
                  }),
        td = null == s ? void 0 : () => (0, lu.A)(s.id, { guildId: d, isPreview: !0, publishOptions: e8 }),
        tm = (0, r.jsx)(dD, {
            title: s?.name ?? eu.intl.string(es.default.G1WwgK),
            breadcrumb: { title: eu.intl.string(es.default.uk6jhJ), onClick: c },
            project: s,
            onOpenProjectSettings: td,
            actions:
                null == s
                    ? null
                    : (0, r.jsxs)("div", {
                          className: dG.FO,
                          children: [
                              (0, r.jsx)(tH, {
                                  targets: ed,
                                  target: null == Y ? null : "frame" === Y ? { mode: Y, surface: ee } : { mode: Y },
                                  onChange: ef,
                              }),
                              ei
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            "overlay" === Y
                                                ? null
                                                : (0, r.jsx)(B.A.Icon, {
                                                      icon: e_ ? dH : dB,
                                                      tooltip: eP,
                                                      "aria-label": eP,
                                                      selected: e_,
                                                      onClick: eR,
                                                  }),
                                            e_ && "overlay" !== Y
                                                ? (0, r.jsx)(B.A.Icon, {
                                                      icon: dK,
                                                      tooltip: eD,
                                                      "aria-label": eD,
                                                      selected: eL,
                                                      onClick: e$,
                                                  })
                                                : null,
                                            (0, r.jsx)(B.A.Icon, {
                                                ref: ew,
                                                icon: A.x,
                                                iconClassName: dG.D8,
                                                tooltip: eC,
                                                "aria-label": eC,
                                                selected: ek,
                                                disabled: eS,
                                                onClick: eE,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === Y ? (0, r.jsx)(tU, { frame: eO, controlProjectId: s.id }) : null,
                              (0, r.jsx)("div", { className: dG.YJ }),
                              b
                                  ? (0, r.jsx)(B.A.Icon, {
                                        icon: S.BugIcon,
                                        tooltip: eu.intl.string(es.default.Mt5k9d),
                                        "aria-label": eu.intl.string(es.default.Mt5k9d),
                                        selected: x,
                                        onClick: eI,
                                    })
                                  : null,
                              (0, r.jsx)(B.A.Icon, {
                                  icon: C.SettingsIcon,
                                  tooltip: eu.intl.string(es.default.I2XSKe),
                                  "aria-label": eu.intl.string(es.default.I2XSKe),
                                  onClick: td,
                              }),
                              (0, r.jsx)(ly, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, eA.PV)(s),
                                  canRemix: (0, eA.H_)(s),
                                  onRefresh: (0, tO.x1)(eO) ? eG : void 0,
                                  isRefreshing: eU,
                                  onClose: eq,
                                  onExport: eH,
                                  onImport: eK.open,
                                  onRemix: eV,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, te.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("834460"),
                                                  l.e("960521"),
                                              ]).then(l.bind(l, 699760));
                                              return (l) => (0, r.jsx)(t, { ...l, projectId: e });
                                          })
                                      );
                                  },
                                  onHistory: () => {
                                      var e;
                                      return (
                                          (e = {
                                              projectId: s.id,
                                              installScope: s.install_scope,
                                              restoreDisabled: k?.status === "restoring",
                                              onRestoreVersion: (e, t) => eT(e, t, !0),
                                          }),
                                          void (0, te.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("323079"),
                                                  l.e("437655"),
                                                  l.e("620019"),
                                                  l.e("586467"),
                                                  l.e("231782"),
                                                  l.e("526192"),
                                                  l.e("551087"),
                                              ]).then(l.bind(l, 438834));
                                              return (l) => (0, r.jsx)(t, { ...l, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      J.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== J.profileState
                                          ? ea
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              eg
                                  ? null
                                  : (0, r.jsx)(B.A.Icon, { icon: dq, tooltip: ex, "aria-label": ex, onClick: eb }),
                          ],
                      }),
        });
    return (0, r.jsxs)("div", {
        className: u()(dG.nj, dU.T),
        children: [
            eK.input,
            (0, r.jsx)("main", {
                className: dG.JX,
                children:
                    null == s
                        ? (0, r.jsxs)("div", {
                              className: dG.j5,
                              children: [
                                  tm,
                                  (0, r.jsxs)("div", {
                                      className: dG.sD,
                                      children: [
                                          (0, r.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: eu.intl.string(es.default.G1WwgK),
                                          }),
                                          (0, r.jsx)(j.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: eu.intl.string(es.default.fINulo),
                                          }),
                                          (0, r.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: eu.intl.string(es.default["WFJ/vb"]),
                                              onClick: () => (0, eN.hF)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, r.jsx)(ls.bI.Provider, {
                              value: e8,
                              children: (0, r.jsx)(
                                  dR,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: ew,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: ez,
                                      header: tm,
                                      chatOpen: h,
                                      onCloseChat: ey,
                                      chatHeaderAction: tc,
                                      debugOpen: b && x,
                                      onCloseDebug: eM,
                                      onRestoreVersion: eT,
                                      onImportProject: (0, eA.PV)(s) ? eK.open : void 0,
                                      restoreState: k,
                                      previewReady: W,
                                      previewGate: e5,
                                      availability: J,
                                      activeMode: Y,
                                      widgetApplicationId: ea,
                                      overlayWidgetSize: er,
                                      onOpenPublishedApp: eQ,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function dJ(e) {
    let {
            projects: t,
            idea: n,
            guildId: a,
            submitting: s,
            createError: o,
            createDisabled: c,
            conjureTarget: d,
            onConjureTargetChange: f,
            eligibleGuilds: h,
            modelSettings: g,
            onModelSettingsChange: x,
            onSelectProject: p,
            onIdeaChange: b,
            onCreate: y,
            onCreateFromTemplate: k,
            onStartTemplate: A,
            onSubmitTemplate: S,
            onCancelTemplate: C,
            onSkipTemplate: E,
            onImportNewProject: D,
            importing: $,
        } = e,
        [F, z] = i.useState(() => ({ guildId: a, filter: lM(a) })),
        O = (F.guildId === a ? F.filter : lM(a)) ?? a,
        U = i.useCallback(
            (e) => {
                (lI.set(a, e), z({ guildId: a, filter: e }));
            },
            [a],
        ),
        G = (0, m.yK)(
            [X.A],
            () =>
                (function (e, t) {
                    let l = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && l.add(t.guild_id),
                            null != t.preview_guild_id && l.add(t.preview_guild_id));
                    let n = [];
                    for (let e of l) {
                        let t = X.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, a),
            [t, a],
        ),
        q = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: R.D, label: eu.intl.string(es.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: lC,
                    leading: ef.UserIcon,
                    label: eu.intl.string(es.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: lE,
                    leading: eh.R,
                    label: eu.intl.string(es.default["3QFps8"]),
                },
                ...G.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, r.jsx)(eG.Ay, { guild: e, size: eG.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [G],
        ),
        H = (0, m.yK)(
            [eA.Ay, X.A],
            () => {
                let e = lT(O);
                if (null != e) return eA.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(X.A.getGuilds()))
                    eA.Ay.hasFetchedGuildProjects(e.id) && t.push(...eA.Ay.getSharedProjects(e.id));
                return t;
            },
            [O],
        );
    i.useEffect(() => {
        let e = lT(O);
        null == e || eA.Ay.hasFetchedGuildProjects(e) || (0, eN.hF)(e);
    }, [O]);
    let K = i.useMemo(
            () =>
                H.filter((e) => l_(e, O)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [H, O],
        ),
        V = i.useMemo(
            () => [
                {
                    label: eu.intl.string(es.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eq,
                            label: eu.intl.string(es.default.UPLaGM),
                            leading: ef.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, r.jsx)(eG.Ay, { guild: e, size: eG.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        W = i.useMemo(
            () =>
                t
                    .filter((e) => l_(e, O))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, O],
        ),
        J = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, lS.Ot)(e, a)
                    ? p(e.id)
                    : (0, v.P0)((0, v.ox)(eu.intl.string(es.default["XUl/cs"]), v.Ck.MESSAGE));
            },
            [a, p],
        ),
        Y = eu.intl.string(es.default.ab1sMf),
        Z = [
            eu.intl.string(es.default["9w+Chc"]),
            eu.intl.string(es.default.WAvmdq),
            eu.intl.string(es.default.SKsrzl),
        ],
        ee = [
            {
                id: "moderation-bot",
                name: eu.intl.string(es.default.lGLnE8),
                description: eu.intl.string(es.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: eu.intl.string(es.default.uJKQTs),
                description: eu.intl.string(es.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: eu.intl.string(es.default.iF5Oru),
                description: eu.intl.string(es.default.NbDDO6),
            },
        ],
        et = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: a,
                        eligibleGuilds: h,
                        onStart: (t) => A(e.name, t),
                        onSubmit: (t, l, n) => S(e, t, l, n),
                        onCancel: C,
                        onSkip: E,
                    }),
                    (0, te.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([l.e("881965"), l.e("166781")]).then(
                                l.bind(l, 790028),
                            );
                            return (l) => (0, r.jsx)(e, { ...l, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                k(e);
            },
            [h, a, C, k, E, A, S],
        ),
        el = eu.intl.string(es.default.zzYLlW),
        en =
            (i.useEffect(() => {
                (0, eN.b8)();
            }, []),
            (0, m.bG)([eA.Ay], () => {
                let e = eA.Ay.getMaxProjects();
                return null != e && eA.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eA.Ay.getOwnedProjects().length)
                    : null;
            })),
        ea = eu.intl.string(es.default["2XcV3x"]),
        er = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || y());
            },
            [c, y],
        ),
        ei = lT(O) ?? a,
        eo = (0, m.bG)([eA.Ay], () => eA.Ay.getGuildProjectsFetchState(ei), [ei]),
        ec = (0, m.bG)([eA.Ay], () => eA.Ay.getGuildProjectsFetchState(a), [a]),
        [ed, em] = i.useState(lL),
        eg = i.useMemo(() => lP.w.get(lD(a)) ?? !1, [a]),
        ep = "success" === ec,
        ev = (0, m.yK)([eA.Ay], () => eA.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => l_(e, a)),
        ej = ed ?? (!!ev || "error" === ec || (!ep && eg));
    i.useEffect(() => {
        ep && lP.w.set(lD(a), ev);
    }, [ep, ev, a]);
    let eb = i.useCallback((e) => {
            (lP.w.set(lR, e), em(e));
        }, []),
        ey = i.useCallback(() => eb(!ej), [eb, ej]),
        ew = i.useCallback(() => eb(!1), [eb]),
        eC = eu.intl.string(es.default.kar7jh),
        eE = ej ? eC : eu.intl.string(es.default.WSc5Y2);
    return (0, r.jsx)("div", {
        className: u()(dG.nj, dG.a0, dU.T),
        children: (0, r.jsxs)("div", {
            className: dG.Yo,
            children: [
                (0, r.jsxs)("main", {
                    className: dG.ps,
                    children: [
                        (0, r.jsx)(dD, {
                            title: eu.intl.string(es.default.uk6jhJ),
                            actions: (0, r.jsx)(B.A.Icon, {
                                icon: I.Z,
                                tooltip: eE,
                                "aria-label": eE,
                                selected: ej,
                                onClick: ey,
                            }),
                        }),
                        (0, r.jsx)(M.Ip, {
                            className: dG.Yy,
                            children: (0, r.jsx)("div", {
                                className: dG.Mo,
                                children: (0, r.jsxs)("section", {
                                    className: u()(dG.Qs, dG.Ix),
                                    children: [
                                        (0, r.jsx)(dO, {}),
                                        (0, r.jsx)(eU, {}),
                                        (0, r.jsxs)("section", {
                                            className: dG.WI,
                                            "aria-label": el,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dG.G9,
                                                    children: [
                                                        (0, r.jsx)(j.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: el,
                                                        }),
                                                        (0, r.jsx)(j.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: eu.intl.string(es.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eT, {
                                                    listClassName: dG.Aw,
                                                    radius: eI,
                                                    children: ee.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dG.EA,
                                                                children: (0, r.jsxs)(eS, {
                                                                    disabled: s,
                                                                    ariaLabel: eu.intl.formatToPlainString(
                                                                        es.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: u()(dG.nx, dG.rz),
                                                                    onClick: () => et(e),
                                                                    children: [
                                                                        (0, r.jsx)(j.E, {
                                                                            className: dG.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, r.jsx)(j.E, {
                                                                            className: dG.BK,
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
                                        (0, r.jsxs)("section", {
                                            className: dG.WI,
                                            "aria-label": ea,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dG.G9,
                                                    children: [
                                                        (0, r.jsx)(j.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ea,
                                                        }),
                                                        (0, r.jsx)(j.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: eu.intl.string(es.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eT, {
                                                    listClassName: dG.Aw,
                                                    radius: eM,
                                                    children: Z.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dG.EA,
                                                                children: (0, r.jsx)(eS, {
                                                                    disabled: s,
                                                                    className: dG.nx,
                                                                    onClick: () => y(e),
                                                                    children: (0, r.jsx)(j.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: dG.un,
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
                        (0, r.jsx)("div", {
                            className: dG.Yl,
                            children: (0, r.jsxs)("div", {
                                className: u()(dG.Qs, dG.DA),
                                children: [
                                    (0, r.jsx)(T.f, {
                                        label: Y,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: Y,
                                        error: o,
                                        onChange: b,
                                        onKeyDown: er,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: dG.VP,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: dG.gH,
                                                children: (0, r.jsx)(_.l, {
                                                    selectionMode: "single",
                                                    label: eu.intl.string(es.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: eu.intl.string(es.default.NyVn6T),
                                                    options: V,
                                                    value: d,
                                                    onSelectionChange: f,
                                                    disabled: s,
                                                }),
                                            }),
                                            null != en
                                                ? (0, r.jsx)(j.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === en ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === en
                                                              ? eu.intl.string(es.default.s28pGG)
                                                              : eu.intl.formatToPlainString(es.default.Wy5aK4, {
                                                                    count: en,
                                                                }),
                                                  })
                                                : null,
                                            (0, r.jsx)(th, {
                                                settings: g ?? Q.A4,
                                                tiers: Q.lO,
                                                choices: (0, ek.b)()
                                                    ? {
                                                          main: [...Q.vC.main, ...Q.XE.main],
                                                          subagent: [...Q.vC.subagent, ...Q.XE.subagent],
                                                          thinking: Q.vC.thinking,
                                                      }
                                                    : Q.vC,
                                                disabled: s,
                                                onChange: x,
                                            }),
                                            (0, r.jsx)(N.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: eu.intl.string(eu.t.CumH4u),
                                                disabled: c,
                                                loading: s,
                                                onClick: () => y(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("aside", {
                    className: dG.pA,
                    hidden: !ej,
                    "aria-label": eu.intl.string(es.default.dWgSAa),
                    children: [
                        (0, r.jsxs)("div", {
                            className: dG.IR,
                            children: [
                                (0, r.jsx)(j.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: dG.RM,
                                    children: eu.intl.string(es.default.dWgSAa),
                                }),
                                (0, r.jsxs)("div", {
                                    className: dG.Ss,
                                    children: [
                                        (0, r.jsx)(ex, { importing: $, onImport: D }),
                                        (0, r.jsx)(B.A.Icon, { icon: P.P, tooltip: eC, "aria-label": eC, onClick: ew }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(M.Ip, {
                            className: dG.xe,
                            children: [
                                (0, r.jsx)("div", {
                                    className: dG.Vw,
                                    children: (0, r.jsx)(_.l, {
                                        selectionMode: "single",
                                        label: eu.intl.string(es.default.U6TqU9),
                                        hideLabel: !0,
                                        options: q,
                                        value: O,
                                        onSelectionChange: U,
                                    }),
                                }),
                                (0, r.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: dG.wE,
                                    children: eu.intl.string(es.default.JQpNkh),
                                }),
                                ("unattempted" === eo || "loading" === eo) && 0 === W.length
                                    ? (0, r.jsx)("div", { className: dG.E8, children: (0, r.jsx)(w.y, {}) })
                                    : "error" === eo && 0 === W.length
                                      ? (0, r.jsxs)("div", {
                                            className: dG.E8,
                                            children: [
                                                (0, r.jsx)(j.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: dG.JS,
                                                    children: eu.intl.string(es.default.DJAPMO),
                                                }),
                                                (0, r.jsx)(N.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: eu.intl.string(es.default["WFJ/vb"]),
                                                    onClick: () => (0, eN.hF)(ei),
                                                }),
                                            ],
                                        })
                                      : 0 === W.length
                                        ? (0, r.jsx)("div", {
                                              className: dG.D1,
                                              children: (0, r.jsxs)("div", {
                                                  className: dG.ST,
                                                  children: [
                                                      (0, r.jsx)(R.D, { size: "lg", color: L.A.colors.TEXT_SUBTLE }),
                                                      (0, r.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: dG.sI,
                                                          children: eu.intl.string(es.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, r.jsx)("div", {
                                              className: dG.Dq,
                                              children: W.map((e) =>
                                                  (0, r.jsx)(
                                                      dW,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => J(e),
                                                          onRemix: () => (0, lG.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                K.length > 0
                                    ? (0, r.jsxs)("div", {
                                          className: dG.qx,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: dG.uc,
                                                  children: [
                                                      (0, r.jsx)(j.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: eu.intl.string(es.default["wFi8+o"]),
                                                      }),
                                                      (0, r.jsx)(j.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: eu.intl.string(es.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: dG.Dq,
                                                  children: K.map((e) =>
                                                      (0, r.jsx)(
                                                          dW,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => J(e),
                                                              onRemix: () => (0, lG.A)(e, a),
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
function dQ(e) {
    let t,
        { guildId: l, projectId: n } = e,
        a = (0, m.yK)([eA.Ay], () => eA.Ay.getOwnedProjects()),
        s = (0, m.yK)([W.Ay], () => W.Ay.getSelfMember(l)?.roles ?? [], [l]),
        u = (0, m.bG)(
            [X.A, J.A],
            () => {
                let e = X.A.getGuild(l);
                return null != e && J.A.can(ep.xBc.MANAGE_GUILD, e);
            },
            [l],
        ),
        [o, c] = i.useState(""),
        d = n ?? null,
        [f, h] = i.useState(!1),
        [g, x] = i.useState(null),
        p = (0, t2.z9)("VibegrationsScreen"),
        [j, b] = i.useState(null),
        y = (0, $.o)().get(tW.f_) === eq;
    i.useEffect(() => {
        b(null);
    }, [l, y]);
    let k = i.useMemo(() => (!y && p.some((e) => e.id === l) ? l : eq), [p, l, y]),
        w = j ?? k,
        N = w === eq ? "user" : "guild",
        A = w === eq ? l : w,
        [S, C] = i.useState(null);
    (i.useEffect(() => {
        (0, eN.hF)(l);
    }, [l, s, u]),
        i.useEffect(() => {
            (0, eN.dm)(l, d);
        }, [l, d]));
    let E = i.useCallback(
            async (e, t, l) => {
                let n = await (0, eN.gA)({ guild_id: t, install_scope: l });
                ((0, el.Hc)(n),
                    (0, el.r2)(n, S ?? Q.A4),
                    e(n),
                    (0, H.pX)(ep.BVt.CHANNEL(t, ev.VV.CONJURE, n)),
                    c(""),
                    C(null));
            },
            [S],
        ),
        I = i.useCallback(
            async (e) => {
                let t = (e ?? o).trim(),
                    l = ew({ idea: t, installScope: N, submitting: f });
                if ("idea" !== l && "submitting" !== l) {
                    (null != e && c(e), h(!0), x(null));
                    try {
                        await E((e) => (0, el.dv)(e, t), A, N);
                    } catch (e) {
                        x((0, ey.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, N, A, o, f],
        ),
        M = i.useCallback(
            async (e) => {
                if (!f) {
                    (h(!0), x(null));
                    try {
                        await E(
                            (t) => {
                                var l;
                                (0, el.dv)(
                                    t,
                                    ((l = e.name),
                                    eu.intl.formatToPlainString(es.default["0PQip6"], { templateName: l })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            A,
                            N,
                        );
                    } catch (e) {
                        x((0, ey.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, N, A, f],
        ),
        T = i.useCallback(
            async (e, t) => {
                let l = await (0, eN.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, el.Hc)(l), (0, el.r2)(l, S ?? Q.A4), (0, el.dv)(l, (0, lq.Wl)(e)), l);
            },
            [S],
        ),
        _ = i.useCallback(async (e, t, l, n) => {
            if (eA.Ay.getProject(t)?.guild_id !== l) {
                let e = await (0, eN.M7)(t, { guild_id: l, preview_guild_id: l });
                if (!e.ok) throw new ey.DS((0, ey.hj)(e), e.status);
            }
            ((0, el.dv)(t, n, void 0, { templateId: e.id }), (0, H.pX)(ep.BVt.CHANNEL(l, ev.VV.CONJURE, t)), C(null));
        }, []),
        P = i.useCallback((e) => {
            (0, eN.xx)(e).catch(() => void 0);
        }, []),
        R = i.useCallback(
            (e) => {
                let t = eA.Ay.getProject(e)?.guild_id ?? l;
                ((0, H.pX)(ep.BVt.CHANNEL(t, ev.VV.CONJURE, e)), C(null));
            },
            [l],
        ),
        [L, D] = i.useState(!1),
        F = i.useCallback(
            async (e, t) => {
                let n = ec(e);
                if (null != n) return void (0, v.P0)((0, v.ox)(n, v.Ck.FAILURE));
                D(!0);
                let a = null;
                try {
                    ((a = await (0, eN.gA)({ guild_id: l, install_scope: t })),
                        (0, el.Hc)(a),
                        (0, el.r2)(a, S ?? Q.A4),
                        await eo(a, e, eu.intl.string(es.default["LUc7/5"])),
                        (0, H.pX)(ep.BVt.CHANNEL(l, ev.VV.CONJURE, a)),
                        C(null));
                } catch {
                    (null != a && (await (0, eN.xx)(a).catch(() => void 0)),
                        (0, v.P0)((0, v.ox)(eu.intl.string(es.default["Q+l4Hv"]), v.Ck.FAILURE)));
                } finally {
                    D(!1);
                }
            },
            [l, S],
        ),
        z = i.useCallback(
            (e) => {
                (0, H.pX)(ep.BVt.CHANNEL(l, ev.VV.CONJURE, e));
            },
            [l],
        ),
        O = i.useCallback(() => {
            (0, H.pX)(ep.BVt.CHANNEL(l, ev.VV.CONJURE));
        }, [l]),
        U = i.useCallback((e) => {
            (c(e), x(null));
        }, []),
        G = (0, m.bG)(
            [eA.Ay],
            () => {
                if (null == d) return null;
                let e = eA.Ay.getProject(d);
                return null == e || (0, eA.PV)(e) || e.guild_id === l ? e : null;
            },
            [d, l],
        ),
        q = (0, m.bG)([eA.Ay], () => eA.Ay.hasFetchedGuildProjects(l), [l]);
    return null != d
        ? (0, r.jsx)(dX, { project: G, projectsLoaded: q, onBack: O, guildId: l }, d)
        : (0, r.jsx)(dJ, {
              projects: a,
              modelSettings: S,
              onModelSettingsChange: C,
              idea: o,
              guildId: l,
              submitting: f,
              createError: g,
              createDisabled: "idea" === (t = ew({ idea: o, installScope: N, submitting: f })) || "submitting" === t,
              onSelectProject: z,
              onIdeaChange: U,
              onCreate: I,
              onCreateFromTemplate: M,
              onStartTemplate: T,
              onSubmitTemplate: _,
              onCancelTemplate: P,
              onSkipTemplate: R,
              onImportNewProject: F,
              importing: L,
              conjureTarget: w,
              onConjureTargetChange: b,
              eligibleGuilds: p,
          });
}
