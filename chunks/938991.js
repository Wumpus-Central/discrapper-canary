(l.r(t), l.d(t, { default: () => dV }), l(321073));
var n,
    a,
    r = l(477900),
    i = l(582128),
    s = l(503698),
    o = l.n(s),
    u = l(536637),
    c = l.n(u),
    d = l(478104),
    m = l(17928),
    f = l(314116),
    h = l(534890),
    g = l(646270),
    x = l(31300),
    p = l(831453),
    v = l(739187),
    j = l(857250),
    b = l(97483),
    y = l(834730),
    k = l(939249),
    w = l(866665),
    N = l(140735),
    A = l(289873),
    S = l(821609),
    C = l(604525),
    E = l(92446),
    I = l(625903),
    M = l(297264),
    T = l(97893),
    _ = l(364522),
    P = l(103557),
    R = l(691885),
    L = l(789645),
    D = l(152367),
    $ = l(661531),
    F = l(442433),
    z = l(458518),
    O = l(627363),
    U = l(47167),
    G = l(713654),
    q = l(625180),
    B = l(672929),
    H = l(775946),
    K = l(742589),
    V = l(976860),
    W = l(402860),
    J = l(885386),
    X = l(734057),
    Y = l(696451),
    Q = l(71393),
    Z = l(576705),
    ee = l(164892),
    et = l(922016),
    el = l(980707),
    en = l(477782),
    ea = l(81369),
    er = l(712808);
(l(323874), l(14289), l(35956));
var ei = l(77729),
    es = l(723702),
    eo = l(264572).Buffer;
async function eu(e, t) {
    if (es.isPlatformEmbedded) {
        let l = eo.from(await e.arrayBuffer());
        if ("function" == typeof ei.A.fileManager.saveWithDialog2) await ei.A.fileManager.saveWithDialog2(l, t);
        else
            try {
                await ei.A.fileManager.saveWithDialog(l, t);
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
var ec = l(261425),
    ed = l(660183);
async function em(e, t, l) {
    (0, er.Hc)(e);
    let n = await (0, er.vX)(e, t);
    (0, er.dv)(e, l, [n]);
}
function ef(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, ee.Oq)(e.size, t)
        ? null
        : ed.intl.formatToPlainString(ec.default.ThxcOX, { size: (0, ee.sM)((0, ee.Ju)(t)) });
}
async function eh(e, t) {
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
        a = await (0, er.cS)(e, n);
    await eu(a, n);
}
function eg(e) {
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
var ex = l(950305),
    ep = l(664121);
let ev = [
    { value: "user", icon: ex.UserIcon, nameMessage: ec.default.s1TsXl },
    { value: "guild", icon: ep.R, nameMessage: ec.default.LlLIJw },
];
function ej(e) {
    let { importing: t, onImport: l } = e,
        n = i.useRef(null),
        a = eg(i.useCallback((e) => l(e, "user"), [l])),
        s = eg(i.useCallback((e) => l(e, "guild"), [l])),
        o = { user: a.open, guild: s.open };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(et.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: et.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(el.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": ed.intl.string(ec.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, r.jsx)(en.rX, {
                            label: ed.intl.string(ec.default.NyVn6T),
                            children: ev
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: ed.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, r.jsx)(
                                        en.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, l) => {
                    let { isShown: a } = l;
                    return (0, r.jsx)(S.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: ea.H,
                        text: ed.intl.string(ec.default.NJGZA3),
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
var eb = l(652215),
    ey = l(746080),
    ek = l(245179),
    ew = l(404373),
    eN = l(639519),
    eA = l(361504);
function eS(e) {
    let { idea: t, installScope: l, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var eC = l(371169),
    eE = l(260498);
function eI(e) {
    let { className: t, ariaLabel: l, disabled: n, onClick: a, children: i } = e;
    return (0, r.jsx)(k.D, { "aria-disabled": n, "aria-label": l, className: t, onClick: n ? void 0 : a, children: i });
}
var eM = l(865665),
    eT = l(373913);
let e_ = { x: 5, y: 7 },
    eP = { x: 5, y: 4 };
function eR(e) {
    let { listClassName: t, radius: l, children: n } = e,
        [a, s] = i.useState(!1);
    return (0, r.jsxs)("div", {
        className: eT.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, r.jsx)("ol", { className: t, children: n }),
            a ? (0, r.jsx)(eM.C, { area: 64, radius: l, color: $.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eL = l(864970),
    eD = l(707554),
    e$ = l(770178),
    eF = l(765548),
    ez = l(595528),
    eO = l(885576),
    eU = l(662429);
let eG = "heading-xxl/semibold",
    eq = !1;
function eB() {
    let e = i.useRef(null),
        [t, l] = i.useState(!0),
        n = (0, eF.A)((e) => {
            l(e.target.clientWidth >= 500);
        }),
        a = (0, e$.w)(n, [], { fireOnMount: !0 }),
        s = (0, m.bG)([ez.A], () => ez.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || eq) return;
        let l = !1,
            n = 0;
        function a() {
            l ||
                (n = window.setTimeout(() => {
                    ((eq = !0), e.current?.play());
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
    let o = (0, m.bG)([eO.A], () => eO.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && eq && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let c = ed.intl.string(ec.default["+5XyCR"]);
    return (0, r.jsx)("div", {
        ref: a,
        className: eU.x,
        children: t
            ? (0, r.jsx)(eD.H, { children: (0, r.jsx)(eL.o, { ref: e, text: c, variant: eG, delay: null }) })
            : (0, r.jsx)(M.D, { variant: eG, children: c }),
    });
}
var eH = l(548118);
let eK = "user",
    eV = Object.freeze({ x: 0.5, y: 0.5 });
function eW(e) {
    return "" !== e.trim();
}
function eJ(e) {
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
    let { kind: t, name: l } = eJ(e);
    return [t, l].filter((e) => "" !== e).join(" ");
}
function eY(e) {
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
    eZ = " \u2014 ";
function e0(e) {
    if (!e.startsWith(eQ)) return null;
    let t = e.indexOf("\n"),
        l = -1 === t ? e : e.slice(0, t),
        n = -1 === t ? "" : e.slice(t + 1),
        a = l.slice(eQ.length),
        r = a.indexOf(eZ),
        i = (-1 === r ? a : a.slice(0, r)).trim();
    return "" === i ? null : { label: i, body: n };
}
let e1 = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    e2 = new Map(),
    e3 = new Set();
function e4(e) {
    return e2.get(e) ?? e1;
}
function e5(e, t) {
    for (let l of (t.active || 0 !== t.annotations.length ? e2.set(e, t) : e2.delete(e), [...e3]))
        try {
            l();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function e6(e) {
    e2.has(e) && e5(e, e1);
}
function e7(e, t) {
    let l = e4(e);
    l.active && e5(e, { ...l, context: t });
}
function e8(e, t) {
    return null != t && e.authorId === t;
}
function e9(e) {
    return (
        e3.add(e),
        () => {
            e3.delete(e);
        }
    );
}
function te(e) {
    let t = i.useCallback(() => (null == e ? e1 : e4(e)), [e]);
    return i.useSyncExternalStore(e9, t, t);
}
var tt = l(192308),
    tl = l(855793),
    tn = l(128761),
    ta = l(744627),
    tr = l(900797),
    ti = l(320448),
    ts = l(783977),
    to = l(344587),
    tu = l(534554),
    tc = l(837984),
    td = l(359589),
    tm = l(254575);
function tf(e) {
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
function th(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: s, placement: u, open: c, entered: d } = e,
        [m, f] = i.useState(!1),
        h = tf(m),
        g = ee.PY.indexOf(t.tier),
        x = m ? tr.t : ti._,
        p = ee.PY.map(tu.D0),
        v = (0, tu.Tc)(t.tier),
        { text: j, phase: b } = (0, to.Q)(v);
    return (0, r.jsx)("div", {
        className: tm.qd,
        "data-placement": u ?? void 0,
        children: (0, r.jsxs)("div", {
            className: o()(tm.t$, { [tm.Zr]: c && d, [tm.GF]: !c }),
            role: "dialog",
            "aria-label": ed.intl.string(ec.default["3E7Yc0"]),
            children: [
                h.mounted
                    ? (0, r.jsx)("div", {
                          className: o()(tm.Nr, tm.uO, { [tm.Zr]: m && h.entered, [tm.GF]: !m }),
                          children: (0, r.jsx)(td.bR, { settings: t, tiers: l, choices: n, disabled: a, onChange: s }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: `${tm.Nr} ${tm.rF}`,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tm.wx,
                            children: [
                                (0, r.jsxs)("button", {
                                    type: "button",
                                    className: tm.y6,
                                    "aria-expanded": m,
                                    "aria-label": ed.intl.string(ec.default.eGqPbV),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: ed.intl.string(ec.default.aBPQxX),
                                        }),
                                        (0, r.jsx)(x, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: tm.vg,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(y.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: o()(tm.Z, { [tm.xQ]: "exit" === b, [tm.lm]: "enter" === b }),
                                    children: j,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tm.hs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: tm.Nb,
                                    children: [
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ed.intl.string(ec.default["/tlOR5"]),
                                        }),
                                        (0, r.jsx)(y.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ed.intl.string(ec.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(tc.A, {
                                    activeIndex: g,
                                    stops: p,
                                    ariaLabel: ed.intl.string(ec.default.aBPQxX),
                                    disabled: a,
                                    onSelect: function (e) {
                                        let l = ee.PY[e];
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
function tg(e) {
    let { settings: t, tiers: l, choices: n, disabled: a, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, td.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: x } = tf(f);
    return (0, r.jsx)(et.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: et.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, r.jsx)(th, {
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
            return (0, r.jsx)(w.m, {
                text: ed.intl.string(ec.default["k2JN/p"]),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, r.jsx)(k.D, {
                    innerRef: c,
                    className: o ?? tm.hZ,
                    "aria-label": ed.intl.string(ec.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, r.jsx)(ts.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var tx = l(111534);
let tp = { width: 320, height: 240 };
var tv = l(573083),
    tj = l(855859),
    tb = l(238490),
    ty = l(754027),
    tk = l(696645);
function tw(e) {
    return "frame" === e.mode ? `frame-${e.surface}` : e.mode;
}
function tN(e) {
    switch (e.mode) {
        case "frame":
            return (0, tk.XV)(e.surface);
        case "widget":
            return ed.intl.string(ec.default.y5GiL1);
        case "overlay":
            return ed.intl.string(ec.default["2940LX"]);
        case "bot":
            return ed.intl.string(ec.default.tjpaGN);
    }
}
var tA = l(598748),
    tS = l(294323),
    tC = l(25451),
    tE = l(580954),
    tI = l(280450),
    tM = l(373677),
    tT = l(86147),
    t_ = l(729475),
    tP = l(91242),
    tR = l(869146),
    tL = l(475815),
    tD = l(621466);
function t$(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function tF(e) {
    let t, l;
    return (
        null != e &&
        ((l =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, tD.vq)(l, Element) ? l.getAttribute("data-frame-id") : null) === e)
    );
}
function tz(e) {
    return (0, tL.a3)(document, e);
}
function tO(e) {
    return i.useSyncExternalStore(tz, () => tF(e));
}
var tU = l(165610);
function tG(e) {
    let { frame: t, controlProjectId: l } = e,
        n = tO(t?.id ?? null),
        a = (0, tv.Zv)(l),
        i = (0, m.bG)(
            [tR.A, tP.A],
            () => null != t && tR.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT) && tP.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, tU.x1)(t) || i || a) return null;
    let s = t$(t.id);
    if (null == s || !(0, tL.Ub)(s)) return null;
    let o = ed.intl.string(n ? ed.t.Z7MyNB : ed.t.OIDkcp);
    return (0, r.jsx)(K.A.Icon, {
        tooltip: o,
        icon: n ? tT.z : t_.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": n,
        selected: n,
        onClick: () => {
            var e;
            let l;
            null != (l = t$((e = t.id))) && (0, tL.Ub)(l) && (tF(e) ? (0, tL.sP)(l) : (0, tL.tl)(l));
        },
    });
}
var tq = l(559106),
    tB = l(847374),
    tH = l(704745);
function tK(e) {
    let { targets: t, target: l, onChange: n } = e,
        [a, s] = i.useState(!1),
        o = null != l && t.length > 1;
    a && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = ed.intl.string(ec.default.I2ucou);
    return (0, r.jsx)(et.Y, {
        targetElementRef: d,
        shouldShow: a,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: et.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(el.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: a,
                onSelect: a,
                children: (0, r.jsx)(en.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = tw(e);
                        return (0, r.jsx)(
                            en.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: tN(e),
                                checked: t === tw(l),
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
            return (0, r.jsx)(tq.vN, {
                children: (0, r.jsxs)("button", {
                    ...a,
                    ref: d,
                    type: "button",
                    className: tH.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, r.jsx)(y.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: ed.intl.string(ec.default["N+VA1J"]),
                        }),
                        (0, r.jsx)(y.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: tN(l),
                        }),
                        (0, r.jsx)(tB.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var tV = l(226178),
    tW = l(434279),
    tJ = l(941985),
    tX = l(287809),
    tY = l(427262),
    tQ = l(803306);
let tZ = new Set(),
    t0 = new Map();
function t1(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
function t2(e) {
    if (null == e || tZ.has(e) || null != tX.default.getUser(e)) return;
    let t = t0.get(e) ?? 0;
    t >= 3 ||
        (t0.set(e, t + 1),
        tZ.add(e),
        tQ
            .wz(e)
            .finally(() => tZ.delete(e))
            .catch(() => {}));
}
var t3 = l(16619),
    t4 = l(782603),
    t5 = l(780338),
    t6 = l(663417),
    t7 = l(70688),
    t8 = l(173936),
    t9 = l(473935),
    le = l(408278),
    lt = l(365199),
    ll = l(7437),
    ln = l(147036),
    la = l(957565),
    lr = l(785389),
    li = l(123917);
let ls = new Set();
var lo = l(289106),
    lu = l(616334),
    lc = l(189714),
    ld = l(435558),
    lm = l.n(ld),
    lf = l(587895),
    lh = l(321191),
    lg = l(808728),
    lx = l(994500),
    lp = l(426035);
function lv(e) {
    let { channelNames: t } = e;
    return t.map((e) => ({ key: `channel:${e}`, kind: "channel", label: `#${e}` }));
}
var lj = l(189213),
    lb = l(331322),
    ly = l(150934),
    lk = l(323384),
    lw = l(430392),
    lN = l(678708),
    lA = l(709066),
    lS = l(319725);
function lC(e, t) {
    return ed.intl.format(e, {
        app: (0, r.jsxs)(
            "span",
            {
                className: lS.Kh,
                children: [t, " ", (0, r.jsx)("span", { className: lS.Tc, children: (0, r.jsx)(lA.A, {}) })],
            },
            "app",
        ),
    });
}
function lE(e) {
    let { kind: t } = e;
    switch (t) {
        case "channel":
            return (0, r.jsx)(lk.k, { size: "sm", color: "currentColor", "aria-hidden": !0 });
        case "app":
            return (0, r.jsx)(lw.RobotIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
        case "project":
            return (0, r.jsx)(lN.FolderIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 });
    }
}
function lI(e) {
    let { items: t } = e;
    return (0, r.jsxs)(lb.B, {
        gap: 8,
        children: [
            (0, r.jsx)(y.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ed.intl.string(ec.default["+E2PqP"]),
            }),
            (0, r.jsx)("div", {
                className: lS.aP,
                children: t.map((e) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: lS.nM,
                            children: [
                                (0, r.jsx)(lE, { kind: e.kind }),
                                (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-subtle", children: e.label }),
                            ],
                        },
                        e.key,
                    ),
                ),
            }),
        ],
    });
}
function lM(e) {
    let t,
        { project: l, target: n, action: a, ...s } = e,
        [o, u] = i.useState(!0),
        [c, d] = i.useState(!1),
        [m, f] = i.useState(null),
        h = "delete" === a,
        g = h
            ? ((t = [{ key: "project", kind: "project", label: n.projectName }]).push(...lv(n)),
              null != n.previewAppName && t.push({ key: "preview-app", kind: "app", label: n.previewAppName }),
              t)
            : lv(n),
        x = h
            ? ed.intl.formatToPlainString(ec.default.CJBhb2, { name: n.projectName })
            : ed.intl.formatToPlainString(ec.default.x6FvsZ, { app: n.appName });
    async function p() {
        (d(!0), f(null));
        let e = h ? (0, eC.xx)(l.id) : (0, eC.YI)(l.id, { alsoRemovePreviewBot: o }),
            t = await e.catch(() => null);
        (d(!1), t?.ok !== !0)
            ? f(ed.intl.string(h ? ec.default["0XDHob"] : ec.default.PJ2Fkn))
            : (h ||
                  (0, v.P)(
                      (0, j.o)(
                          (function (e) {
                              let { appName: t, guildName: l } = e;
                              return ed.intl.formatToPlainString(ec.default.SNFGxP, { app: t, server: l });
                          })(n),
                          b.Ck.SUCCESS,
                      ),
                  ),
              s.onClose());
    }
    return (0, r.jsx)(lj.a, {
        ...s,
        role: "alertdialog",
        title: h ? x : lC(ec.default.x6FvsZ, n.appName),
        subtitle: h
            ? (function (e) {
                  let { appName: t, guildName: l } = e;
                  return ed.intl.formatToPlainString(ec.default["9CvVB9"], { app: t, server: l });
              })(n)
            : ed.intl.string(ec.default["8OKM1N"]),
        "aria-label": x,
        notice: null == m ? void 0 : { message: m, type: "critical" },
        actions: [
            { text: ed.intl.string(ed.t["ETE/oC"]), variant: "secondary", onClick: s.onClose },
            {
                text: ed.intl.string(h ? ec.default.aC42bN : ec.default.BGF8VT),
                variant: "critical-primary",
                loading: c,
                disabled: c,
                onClick: () => {
                    p().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(lb.B, {
            gap: 12,
            children: [
                g.length > 0 ? (0, r.jsx)(lI, { items: g }) : null,
                h || null == n.previewAppName
                    ? null
                    : (0, r.jsx)(ly.S, { checked: o, onChange: u, label: lC(ec.default["87CtcA"], n.previewAppName) }),
            ],
        }),
    });
}
function lT(e) {
    (0, tt.openModal)((t) => (0, r.jsx)(lM, { ...t, ...e }));
}
var l_ = l(552821);
let lP = [];
function lR(e) {
    (0, v.P)((0, j.o)(e, b.Ck.FAILURE));
}
function lL(e) {
    let {
            projectId: t,
            projectName: l,
            guildId: n,
            projectGuildId: a,
            isOwner: s,
            canRemix: o,
            onExport: u,
            onImport: c,
            onRemix: d,
            onConnectTool: h,
            onHistory: g,
            onRefresh: x,
            isRefreshing: p = !1,
            onClose: y,
            refreshApplicationId: k,
            previewProjectId: w,
            onCloseMenu: N,
        } = e,
        A = (0, lc.iI)(t),
        S = i.useContext(lo.bI),
        { pending: C, refresh: E } = (0, ll.A)(k ?? null),
        { pending: M, connect: T } = (function (e, t) {
            let [l, n] = i.useState(ls),
                a = i.useRef(ls),
                r = i.useCallback((e) => {
                    ((a.current = (0, lr.Q6)(a.current, e)), n(a.current));
                }, []);
            return {
                pending: l,
                connect: i.useCallback(
                    (l) => {
                        if (null == e) return;
                        let i = (0, lr.K9)(a.current, l.type);
                        async function s() {
                            let n = await (0, er.JI)(e, l.type);
                            (r(l.type), "url" === n.type)
                                ? (0, li.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, lr.rq)(n.error)
                                          ? ed.intl.string(ec.default["jCQ/1B"])
                                          : ed.intl.string(ec.default.POxkSh),
                                  );
                        }
                        null != i && ((a.current = i), n(i), s().catch(() => r(l.type)));
                    },
                    [t, e, r],
                ),
            };
        })(w ?? null, lR),
        _ = (0, m.bG)([er.Ay], () => (null == w ? lP : er.Ay.getDeclaredConnections(w))),
        P = i.useMemo(() => (0, lr.Xl)(_), [_]),
        R = (0, m.bG)(
            [eE.Ay, Q.A, lg.Ay, lh.A, lf.A, tX.default, lx.A],
            () => {
                let e,
                    l = null == t ? null : eE.Ay.getProject(t);
                return null == l
                    ? null
                    : null != (e = null == l.guild_id ? null : Q.A.getGuild(l.guild_id)) &&
                        (0, eE.jf)(l) &&
                        "in_server" === (0, lp.kF)(l)
                      ? {
                            projectName: l.name,
                            appName: lf.A.getApplication(l.application_id)?.name ?? l.name,
                            previewAppName:
                                null == l.preview_application_id
                                    ? null
                                    : (lf.A.getApplication(l.preview_application_id)?.name ?? `${l.name} (Preview)`),
                            guildName: e.name,
                            channelNames: (0, lp.xI)(e.id, l.application_id).map((e) => (0, U.m1)(e, tX.default, lx.A)),
                        }
                      : null;
            },
            [t],
            ld.isEqual,
        ),
        L = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: n, connectPending: a } = e,
                r = [];
            for (let { connection: e, offer: i } of (t &&
                r.push({
                    id: "preview-refresh",
                    label: ed.intl.string(ec.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: l,
                }),
            n))
                r.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ed.intl.formatToPlainString(ec.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ed.intl.formatToPlainString(ec.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return r;
        })({ canRefresh: null != k, refreshPending: C, offers: P, connectPending: M }),
        D = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        $ = null != d && o,
        F = s && null != c,
        z = $ || null != u || F || null != h || null != g,
        O = la.p5 && null != n,
        G = la.p5,
        q = A ? t4.BellIcon : t5.BellSlashIcon;
    return (0, r.jsxs)(el.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": ed.intl.string(ed.t.ogxXGq),
        onClose: N,
        onSelect: N,
        children: [
            null != x || null != y
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          null != x
                              ? (0, r.jsx)(en.Dr, {
                                    id: "refresh",
                                    icon: t6.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: t6.RefreshIcon },
                                    label: ed.intl.string(ec.default["p4B/7M"]),
                                    disabled: p,
                                    action: x,
                                })
                              : null,
                          null != y
                              ? (0, r.jsx)(en.Dr, {
                                    id: "close",
                                    icon: t7.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: t7.DoorExitIcon },
                                    label: ed.intl.string(ec.default["/TlGcK"]),
                                    action: y,
                                })
                              : null,
                      ],
                  })
                : null,
            L.length > 0
                ? (0, r.jsx)(en.rX, {
                      children: L.map((e) =>
                          (0, r.jsx)(
                              en.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void E();
                                      let t = null == e.connectionType ? null : D.get(e.connectionType);
                                      null != t && T(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, r.jsx)(en.rX, {
                children: (0, r.jsx)(en.Dr, {
                    id: "mute",
                    label: ed.intl.string(A ? ec.default.s9rCuH : ec.default["a+i/As"]),
                    icon: q,
                    leadingAccessory: { type: "icon", icon: q },
                    action: () => (0, lc.$L)(t, !A),
                }),
            }),
            z
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          $
                              ? (0, r.jsx)(en.Dr, { id: "remix", label: ed.intl.string(ec.default.XWgAfc), action: d })
                              : null,
                          null != u
                              ? (0, r.jsx)(en.Dr, { id: "export", label: ed.intl.string(ec.default.WsEEP7), action: u })
                              : null,
                          F
                              ? (0, r.jsx)(en.Dr, { id: "import", label: ed.intl.string(ec.default.rWGY3e), action: c })
                              : null,
                          null != h
                              ? (0, r.jsx)(en.Dr, {
                                    id: "connect-tool",
                                    label: ed.intl.string(ec.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, r.jsx)(en.Dr, {
                                    id: "history",
                                    label: ed.intl.string(ec.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            G
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          O
                              ? (0, r.jsx)(en.Dr, {
                                    id: "copy-link",
                                    label: ed.intl.string(ed.t.WqhZss),
                                    icon: t8.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: t8.LinkIcon },
                                    action: () =>
                                        (0, la.C)((0, ln.n)(n, ey.VV.CONJURE, t), () =>
                                            (0, v.P)((0, j.o)(ed.intl.string(ed.t["L/PwZf"]), b.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(en.Dr, {
                              id: "copy-project-id",
                              label: ed.intl.string(ec.default["nm/zuU"]),
                              icon: t9.L,
                              leadingAccessory: { type: "icon", icon: t9.L },
                              action: () =>
                                  (0, la.C)(t, () =>
                                      (0, v.P)((0, j.o)(ed.intl.string(ec.default.CmfaZG), b.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || null != R
                ? (0, r.jsxs)(en.rX, {
                      children: [
                          s
                              ? (0, r.jsx)(en.Dr, {
                                    id: "settings",
                                    label: ed.intl.string(ec.default.FzfmQ8),
                                    icon: I.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: I.SettingsIcon },
                                    action: () =>
                                        (0, lu.A)(t, {
                                            guildId: a ?? n,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: S,
                                        }),
                                })
                              : null,
                          null != R
                              ? (0, r.jsx)(en.Dr, {
                                    id: "remove-from-server",
                                    label: ed.intl.formatToPlainString(ec.default["3gKG2j"], { server: R.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = eE.Ay.getProject(t);
                                        null != e && lT({ project: e, target: R, action: "remove" });
                                    },
                                })
                              : null,
                          s
                              ? (0, r.jsx)(en.Dr, {
                                    id: "delete",
                                    label: ed.intl.string(ed.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = eE.Ay.getProject(t);
                                        if (null != e && null != R) lT({ project: e, target: R, action: "delete" });
                                        else
                                            (0, f.A)({
                                                title: ed.intl.formatToPlainString(ec.default.CJBhb2, { name: l }),
                                                subtitle: ed.intl.string(ec.default["0OmrVn"]),
                                                confirmText: ed.intl.string(ed.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, eC.K)(t, () =>
                                                        (0, v.P)(
                                                            (0, j.o)(
                                                                ed.intl.string(ec.default["0XDHob"]),
                                                                b.Ck.FAILURE,
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
function lD(e) {
    let { trigger: t = "header", ...l } = e,
        n = i.useRef(null);
    return (0, r.jsx)(et.Y, {
        targetElementRef: n,
        position: "bottom",
        align: "right",
        animation: et.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(lL, { ...l, onCloseMenu: t });
        },
        children: (e, l) => {
            let { onClick: a } = e,
                { isShown: i } = l;
            return (0, r.jsx)("div", {
                ref: n,
                className: l_.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(w.m, {
                              text: ed.intl.string(ed.t["UKOtz+"]),
                              children: (0, r.jsx)(le.K, {
                                  icon: lt.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: a,
                              }),
                          })
                        : (0, r.jsx)(K.A.Icon, {
                              icon: lt.MoreHorizontalIcon,
                              tooltip: ed.intl.string(ed.t["UKOtz+"]),
                              "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: a,
                          }),
            });
        },
    });
}
var l$ = l(845079),
    lF = l(104171),
    lz = l(286739);
function lO(e) {
    let { creator: t, className: l } = e;
    return (0, r.jsx)("div", {
        className: o()(lz.c, l),
        "aria-hidden": !0,
        children: (0, r.jsx)(lF.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: lF.DN.SIZE_16 }),
    });
}
var lU = l(246338);
let lG = "user",
    lq = "no-server",
    lB = new Map();
function lH(e) {
    return lB.get(e) ?? null;
}
function lK(e) {
    switch (e) {
        case "all":
        case lG:
        case lq:
            return null;
        default:
            return e;
    }
}
function lV(e, t) {
    switch (t) {
        case "all":
            return !0;
        case lG:
            return "user" === e.install_scope;
        case lq:
            return null == (0, tW.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var lW = l(506774);
let lJ = "VibegrationsProjectsPanelOpen";
function lX() {
    return lW.w.get(lJ) ?? null;
}
function lY(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var lQ = l(803101),
    lZ = l(516288);
function l0(e) {
    let { reason: t, transitionState: l, onClose: n } = e,
        a = t === lZ.k.PERMISSIONS;
    return (0, r.jsx)(lj.a, {
        transitionState: l,
        onClose: n,
        title: ed.intl.string(a ? ec.default.wQ4UyJ : ec.default.ZNGLFE),
        subtitle: ed.intl.string(a ? ec.default.Agqmbt : ec.default.ffxKGK),
        size: "sm",
        actions: [{ text: ed.intl.string(a ? ed.t.BddRzS : ec.default["/omTNx"]), variant: "primary", onClick: n }],
    });
}
var l1 = l(951465),
    l2 = l(95264),
    l3 = l(952644),
    l4 = l(991690),
    l5 = l(58736),
    l6 = l(689175),
    l7 = l(65593),
    l8 = l(115982);
function l9(e) {
    return !(0, ek.BL)(e) && !0 !== e.stopRequested;
}
var ne = l(104317),
    nt = l(643278),
    nl = l(566424),
    nn = l(683063),
    na = l(138212);
function nr(e) {
    let { title: t, trailing: l, children: n, className: a, headerClassName: i, ...s } = e;
    return (0, r.jsxs)("section", {
        className: o()(na.Nr, a),
        ...s,
        children: [
            (0, r.jsxs)("header", {
                className: o()(na.wx, null != l && na.o5, i),
                children: [
                    (0, r.jsx)(y.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            n,
        ],
    });
}
var ni = l(148590);
function ns(e) {
    let { children: t } = e;
    return (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function no(e) {
    let {
            title: t,
            meta: l,
            superseded: n = !1,
            showLabel: a,
            hideLabel: s,
            bodyClassName: u,
            beforeBody: c,
            children: d,
            ...m
        } = e,
        f = i.useId(),
        [h, g] = i.useState(!n),
        [x, p] = i.useState(n);
    x !== n && (p(n), g(!n));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? tB.a : ti._,
        b = null != l || n;
    return (0, r.jsxs)(nr, {
        ...m,
        title: t,
        trailing: b
            ? (0, r.jsxs)("span", {
                  className: ni.ZY,
                  children: [
                      l,
                      n
                          ? (0, r.jsx)(k.D, {
                                className: ni.L$,
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
        headerClassName: h ? void 0 : ni.RG,
        "data-superseded": n ? "true" : void 0,
        children: [c, (0, r.jsx)("div", { id: f, className: o()(ni.rf, u), hidden: !h, children: d })],
    });
}
var nu = l(883646);
let nc = [];
function nd(e) {
    let { status: t } = e;
    return (0, r.jsxs)("span", {
        className: o()(nu.xL, {
            [nu.Vb]: "in_progress" === t,
            [nu.cT]: "completed" === t,
            [nu.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ed.intl.string(ec.default.KvBdun);
                case "in_progress":
                    return ed.intl.string(ec.default["m5G9+S"]);
                case "unfinished":
                    return ed.intl.string(ec.default.lRpwhD);
                default:
                    return ed.intl.string(ec.default.sPGeWi);
            }
        })(t),
        children: [
            (0, r.jsx)(A.y, {
                type: A.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: nu.Qd,
                itemClassName: nu.xB,
                "aria-hidden": !0,
            }),
            (0, r.jsx)("svg", {
                className: nu.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, r.jsx)("path", { className: nu.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nm(e) {
    let { agents: t, active: l } = e,
        n = i.useMemo(() => (l ? t : nc), [l, t]),
        a = i.useMemo(() => new Set(n.map((e) => e.key)), [n]),
        s = n.map((e) => e.key).join("\0"),
        [o, u] = i.useState(n),
        [c, d] = i.useState(s),
        [m, f] = i.useState(!1);
    c !== s && (d(s), u([...n, ...o.filter((e) => !a.has(e.key))]), 0 === n.length && f(!1));
    let h = o.some((e) => !a.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(n), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, n, l]),
        i.useEffect(() => {
            if (!l || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, r.jsxs)("span", {
        className: nu.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: n, task: i } = e,
                    { Illocon: s } = l;
                return (0, r.jsx)(
                    nn.u,
                    {
                        asset: (0, r.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: n,
                        body: i,
                        position: "top",
                        children: (0, r.jsx)("span", {
                            className: nu.MA,
                            "data-leaving": a.has(t) ? void 0 : "true",
                            children: (0, r.jsx)(s, { size: 16, alt: n, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: nu.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function nf(e) {
    let t,
        { todos: l, provisional: n, agents: a, live: s = !0 } = e,
        u = (function (e) {
            let t = e.join("\0"),
                [l, n] = i.useState(() => new Set(e)),
                [a, r] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                a !== t && (r(t), n(new Set(e)), o(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
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
        })(i.useMemo(() => l.map((e) => e.id), [l])),
        c =
            ((t = (a ?? nc).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of a ?? nc) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, r.jsxs)("ul", {
        className: nu.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, r.jsxs)(
                    "li",
                    {
                        className: o()(nu.AS, { [nu.J1]: "completed" === l }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, r.jsx)(nd, { status: l }),
                            (0, r.jsx)(y.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nu.iV,
                                selectable: !0,
                                children: (0, r.jsx)("span", {
                                    className: nu.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, r.jsx)(nm, { agents: c.get(e.id) ?? nc, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != n
                ? (0, r.jsxs)("li", {
                      className: nu.AS,
                      "data-provisional": !0,
                      children: [
                          (0, r.jsx)(nd, { status: "pending" }),
                          (0, r.jsx)(y.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nu.iV,
                              selectable: !0,
                              children: (0, r.jsx)("span", { className: nu.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nh(e) {
    let { todos: t, provisional: l, agents: n, announceProgress: a = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = ed.intl.formatToPlainString(ec.default["P/I+JW"], { completed: o, total: u }),
        d = ed.intl.formatToPlainString(ec.default["7tzwKB"], { completed: o, total: u });
    return (0, r.jsx)(no, {
        title: ed.intl.string(ec.default.RtzECX),
        meta: (0, r.jsx)(ns, { children: c }),
        superseded: s,
        showLabel: ed.intl.string(ec.default.RKyN9q),
        hideLabel: ed.intl.string(ec.default.xydHoj),
        className: nu.Nr,
        bodyClassName: nu.rf,
        beforeBody: a && !s ? (0, r.jsx)(N.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, r.jsx)(nf, { todos: t, provisional: l, agents: n, live: i }),
    });
}
var ng = l(308665),
    nx = l(59678),
    np = l(903847);
function nv(e) {
    let { line: t, placement: l, todos: n, todosLive: a = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != l,
        [m, f] = i.useState(l ?? "top"),
        [h, g] = i.useState(d),
        [x, p] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(d);
    (b !== d && (y(d), null != l ? (f(l), g(!0)) : (p(!1), j(!1))),
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
              className: np.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, r.jsxs)("div", {
                      className: o()(np.vK, { [np.ho]: x && d, [np.ET]: !d }),
                      children: [
                          null == c
                              ? (0, r.jsx)("ol", {
                                    className: o()(np.Rk, nx.pj),
                                    "data-live": "true",
                                    children: (0, r.jsx)(nl.A, {
                                        glyph: (0, r.jsx)(ng.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, r.jsx)(k.D, {
                                    className: np.pZ,
                                    onClick: c,
                                    "aria-label": ed.intl.string(ec.default.hEK6qu),
                                    children: (0, r.jsx)("ol", {
                                        className: o()(np.Rk, nx.pj),
                                        "data-live": "true",
                                        children: (0, r.jsx)(nl.A, {
                                            glyph: (0, r.jsx)(ng.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          M
                              ? (0, r.jsx)(w.m, {
                                    text: ed.intl.string(ec.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, r.jsx)(k.D, {
                                        className: np.BO,
                                        onClick: T,
                                        "aria-expanded": v,
                                        "aria-label": ed.intl.string(ec.default.RtzECX),
                                        children: (0, r.jsx)(nt.ClipboardListIcon, {
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
                            className: o()(np.vB, { [np.pg]: v && S, [np.ui]: !v }),
                            children: (0, r.jsx)(nh, {
                                todos: n,
                                provisional: s,
                                agents: u,
                                live: a,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var nj = l(658675),
    nb = l(22231),
    ny = l(826745),
    nk = l(123292),
    nw = l(155078);
function nN(e) {
    return e.options.some((e) => null != e.image);
}
let nA = [];
function nS(e, t) {
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
var nC = l(87221),
    nE = l(144228),
    nI = l(241326),
    nM = l(26430),
    nT = l(750943),
    n_ = l(95477),
    nP = l(256905),
    nR = l(73153),
    nL = l(839214);
let nD = [],
    n$ = 1,
    nF = (0, nL.D)(() => ({ draftsByProject: {} }));
function nz(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? nD;
}
function nO(e, t) {
    return nz(nF.getState(), e, t);
}
function nU(e, t, l) {
    let { draftsByProject: n } = nF.getState();
    nF.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function nG(e, t, l, n) {
    let a = nO(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (nU(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function nq(e, t) {
    (0, er.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function nB(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && nq(e, t.ref.id));
}
function nH(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = nF.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? nD) l ? nB(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    nF.setState({ draftsByProject: i });
}
function nK(e) {
    return ed.intl.formatToPlainString(ec.default.JZ59Bo, { size: (0, ee.sM)((0, ee.Ju)(e)) });
}
function nV(e, t) {
    let l = nO(e, t);
    if (0 !== l.length) {
        for (let t of l) nB(e, t);
        nU(e, t, nD);
    }
}
function nW(e, t) {
    let l = nO(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (nU(e, t, nD), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function nJ(e, t) {
    let { clarificationAnswers: l, attachments: n = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = nO(e, "chat"),
        r = a.length > 0 && a.every((e) => "ready" === e.status) ? nW(e, "chat") : [];
    (0, er.dv)(e, t, [...n, ...r], { clarificationAnswers: l });
}
function nX(e, t) {
    let [l, n] = i.useState(null),
        [a, r] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let l = !1;
            return (
                (0, er.PK)(e, t).then(
                    (e) => {
                        l || n(e);
                    },
                    () => {
                        l || (0 === s ? o(1) : r(!0));
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
                    (0, er.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : r(!0);
                        },
                        () => r(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
(nR.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(nF.getState().draftsByProject)) nH(e, { deleteFromWorker: !0 });
}),
    nR.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        nH(t, { deleteFromWorker: !1 });
    }));
var nY = l(907702);
function nQ(e) {
    let { projectId: t, attachmentId: l, alt: n, onMeasured: a } = e,
        { src: s, gone: u, handleError: c } = nX(t, l),
        [d, m] = i.useState(null),
        f = null != s && d === s;
    return u
        ? (0, r.jsxs)("span", {
              className: o()(nY.Gt, nY.b6),
              children: [
                  (0, r.jsx)(nC.D, { size: "md", color: "currentColor" }),
                  (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: ed.intl.string(ec.default.lhgD88),
                  }),
              ],
          })
        : (0, r.jsx)("span", {
              className: o()(nY.Gt, { [nY.iP]: !f }),
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
function nZ(e) {
    let t,
        l,
        {
            projectId: n,
            option: a,
            multi: i,
            selected: s,
            disabled: u,
            reachable: c,
            tabbable: d,
            onPick: m,
            onView: f,
            onArrow: h,
            onMeasured: g,
            onRemove: x,
        } = e,
        p = ed.intl.formatToPlainString(ec.default.JGjZMs, { answer: a.label });
    return (0, r.jsxs)("div", {
        className: o()(nY.Vs, { [nY.Q9]: s, [nY.RX]: u }),
        "data-conjure-clarification-option": a.id,
        children: [
            (0, r.jsxs)(k.D, {
                className: nY.Up,
                "data-conjure-image-option-pick": !0,
                onClick: u ? void 0 : () => m(a),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(a, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ed.intl.formatToPlainString(ec.default.AQbxhf, { answer: a.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, r.jsxs)("span", {
                        className: nY.$_,
                        children: [
                            null != a.image
                                ? (0, r.jsx)(nQ, {
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
                                    ? (0, r.jsx)(nj.P, { checked: s, disabled: u })
                                    : (0, r.jsx)(nE.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(y.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: nY.pG,
                        children:
                            "" !== (l = null != (t = a.image?.page_url ?? a.image?.url) ? (0, nw.E)(t) : "")
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
                      children: (0, r.jsx)(w.m, {
                          text: ed.intl.string(ec.default.HQEXJM),
                          children: (0, r.jsx)(le.K, {
                              icon: nI.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: u,
                              "aria-label": ed.intl.string(ec.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != a.image
                  ? (0, r.jsx)("span", {
                        className: nY.B4,
                        children: (0, r.jsx)(w.m, {
                            text: ed.intl.string(ec.default["4/eeDD"]),
                            children: (0, r.jsx)(le.K, {
                                icon: nM._,
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
function n0(e) {
    var t;
    let { projectId: l, question: n, selectedIds: a, disabled: s, reachable: u = !0, onPick: c, own: d } = e,
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
                    Promise.all(t.map((e) => (0, er.PK)(l, e.image.attachment_id))).then(
                        (e) => {
                            (0, nP.R)({
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
                      label: ed.intl.string(ec.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, r.jsxs)("div", {
        className: nY.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, r.jsxs)("div", {
                ref: g,
                className: o()(nY.fF, "gallery" === h ? nY.nV : nY.nM, { [nY.m3]: m }),
                role: m ? "group" : "radiogroup",
                "aria-labelledby": `${n.id}-label`,
                "data-layout": h,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, r.jsx)(
                            nZ,
                            {
                                projectId: l,
                                option: e,
                                multi: m,
                                selected: a.includes(e.id),
                                disabled: s,
                                reachable: u,
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
                              nZ,
                              {
                                  projectId: l,
                                  option: k,
                                  multi: m,
                                  selected: d.selected,
                                  disabled: s,
                                  reachable: u,
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
            (0, r.jsx)(n1, {
                projectId: l,
                own: d,
                disabled: s,
                reachable: u,
                uploadText: ed.intl.string(/\bicons?\b/i.test(n.question) ? ec.default.qU4WN6 : ec.default.cbMDDB),
            }),
        ],
    });
}
function n1(e) {
    let { projectId: t, own: l, disabled: n, reachable: a, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
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
                    (0, r.jsx)(S.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: nT.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: n || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, r.jsx)(S.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: t8.LinkIcon,
                              text: ed.intl.string(ec.default["1TgOO+"]),
                              disabled: n || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, r.jsx)("input", {
                        ref: o,
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
                                        (0, ee.Oq)(r.size, a)
                                            ? (0, er.c9)(t, r, n, a)
                                            : Promise.resolve({ errorText: nK(a) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, r.jsxs)("div", {
                      className: nY.vG,
                      children: [
                          (0, r.jsx)("div", {
                              className: nY.Hs,
                              children: (0, r.jsx)(n_.k, {
                                  label: ed.intl.string(ec.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ed.intl.string(ec.default.AVhvn8),
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
                                  (0, r.jsx)(S.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ed.intl.string(ec.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: n || "" === d.trim(),
                                      onClick: g,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, r.jsx)(nk.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: ed.intl.string(ec.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            l.error?.source === "upload"
                ? (0, r.jsx)(y.E, {
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
var n2 = l(29073),
    n3 = l(384017);
function n4(e) {
    let { option: t, position: l, disabled: n, onPick: a, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, r.jsxs)(k.D, {
        className: o()(n3.uK, { [n3.ue]: n, [n3.h4]: !0 === u }),
        onClick: n ? void 0 : () => a(t),
        "aria-label": ed.intl.formatToPlainString(d ? ec.default["2p6UFz"] : ec.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": n,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, r.jsx)("span", { className: n3.dy, children: (0, r.jsx)(nj.P, { checked: u, disabled: n }) })
                : (0, r.jsx)("span", { className: n3.Gy, "aria-hidden": !0, children: l }),
            (0, r.jsxs)("span", {
                className: n3.qO,
                children: [
                    (0, r.jsx)("span", {
                        className: n3.l8,
                        children: (0, r.jsx)(y.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: n3.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, r.jsx)(y.E, {
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
                ? (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: n3.rM,
                      children: ed.intl.string(ec.default.zku6r1),
                  })
                : null,
        ],
    });
}
function n5(e) {
    let { projectId: t, question: l, selected: n, disabled: a, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === l.multi_select;
    return nN(l)
        ? (0, r.jsx)(n0, { projectId: t, question: l, selectedIds: n, disabled: a, reachable: i, onPick: s, own: o })
        : (0, r.jsx)(r.Fragment, {
              children: l.options.map((e, t) =>
                  (0, r.jsx)(
                      n4,
                      {
                          option: e,
                          position: t + 1,
                          disabled: a,
                          selected: u ? n.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let n6 = [];
function n7(e) {
    let {
            projectId: t,
            question: l,
            draft: n,
            selected: a,
            direction: i,
            disabled: s,
            ownImage: u,
            ownSelected: c,
        } = e,
        d = "" === n.trim() ? null : n,
        m = !0 === l.multi_select;
    return (0, r.jsxs)("div", {
        className: o()(n3.Ge, n3.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            m
                ? (0, r.jsx)(y.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: n3.aK,
                      children: ed.intl.string(ec.default.tE8qbz),
                  })
                : null,
            (0, r.jsx)(n5, {
                projectId: t,
                question: l,
                selected: a,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: nS(u, c),
            }),
            nN(l)
                ? null
                : (0, r.jsxs)("div", {
                      className: n3.Xy,
                      children: [
                          (0, r.jsx)("span", {
                              className: n3.Gy,
                              "aria-hidden": !0,
                              children: (0, r.jsx)(nb.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, r.jsx)("span", { className: o()(n3.Pu, n3.es), children: d }),
                      ],
                  }),
        ],
    });
}
function n8(e) {
    var t;
    let { projectId: l, clarification: n, onSubmit: a, onDismiss: s } = e,
        [u, c] = i.useState({}),
        [d, m] = i.useState({}),
        [f, h] = i.useState({}),
        [g, x] = i.useState(0),
        [p, v] = i.useState(null),
        [j, b] = i.useState(null),
        [N, A] = i.useState(null),
        [C, E] = i.useState(!1),
        I = i.useRef(null),
        [M, T] = i.useState(null),
        _ = i.useRef(null),
        P = i.useRef(0),
        R = null == a,
        D = n.questions.length,
        $ = Math.min(g, D - 1),
        F = n.questions[$],
        [z, O] = i.useState({ id: F.id, expanded: !1 }),
        U = z.id === F.id && z.expanded,
        [G, q] = i.useState(null),
        B = d[F.id] ?? "",
        H = !0 === F.multi_select,
        K = nN(F),
        V = H ? (f[F.id] ?? n6) : ((t = u[F.id]), t?.kind === "option" ? [t.optionId] : nA),
        W = (function (e, t, l) {
            let [n, a] = i.useState({}),
                [r, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = ed.intl.string(ec.default.wTsP5l),
                d = i.useCallback((e) => n[e] ?? null, [n]),
                m = i.useCallback(
                    (e) => null != n[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
                    [t, n, o],
                ),
                f = i.useCallback(
                    (e) => {
                        let t = n[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, n, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let d = i.id,
                            f = !0 === i.multi_select,
                            h = n[d] ?? null;
                        if (o) return nS(h, m(i));
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
                                    null != n && (0, er.Vm)(e, n.attachment.id).catch(() => void 0), { ...l, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : l((e) => (e[d] === p ? { ...e, [d]: x(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: r[d]?.busy ?? null,
                            error: r[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : l((e) => ({ ...e, [d]: x(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, er.Vm)(e, h.attachment.id).catch(() => void 0),
                                    a((e) => {
                                        let { [d]: t, ...l } = e;
                                        return l;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
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
                                                error: { source: "upload", text: ed.intl.string(ec.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, er.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : ed.intl.string(ec.default.l79PMc),
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
        })(l, u, c),
        J = W.imageFor(F.id),
        X = W.selectedFor(F),
        { text: Y, phase: Q } = (0, to.Q)(F.question),
        Z = Y === F.question,
        ee = Z && G?.id === F.id && G.truncated;
    i.useLayoutEffect(() => {
        if (null == M || U || !Z) return;
        function e() {
            if (null == M) return;
            let e = M.scrollHeight > M.clientHeight + 1;
            q((t) => (t?.id === F.id && t.truncated === e ? t : { id: F.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(M), () => t.disconnect());
    }, [Z, M, F.id, U]);
    let et = ed.intl.string(U ? ed.t.iTcuma : ed.t.dcl9MQ),
        el = i.useCallback(
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
                                a = "custom" === l.kind ? l.text.trim() : "multi" === l.kind ? l.custom : void 0,
                                r = "image" === l.kind || "multi" === l.kind ? l.attachment : void 0;
                            return [
                                {
                                    question_id: t.id,
                                    option_ids: n,
                                    ...(null != a && "" !== a ? { custom: a } : {}),
                                    ...(null != r ? { attachment_id: r.id } : {}),
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
        en = i.useCallback(
            (e, t) => {
                P.current += 1;
                let l = P.current;
                (v({ direction: t, moves: l }),
                    b({ question: F, draft: B, selected: V, ownImage: J, ownSelected: X, direction: t, moves: l }),
                    E(!0),
                    x(e));
            },
            [B, J, X, F, V],
        ),
        ea = i.useCallback(() => {
            let e = I.current,
                t = _.current;
            null != e && null != t && A({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = I.current,
            t = _.current;
        if (null == e || null == t) return;
        ea();
        let l = new ResizeObserver(ea);
        return (l.observe(e), l.observe(t), () => l.disconnect());
    }, [ea]);
    let ei = p?.moves;
    i.useEffect(() => {
        if (null == ei) return;
        let e = setTimeout(() => b(null), 400),
            t = setTimeout(() => E(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ei]);
    let es = i.useCallback(
            (e) => {
                if (R) return;
                let t = { ...u, [F.id]: e };
                c(t);
                let l =
                    $ < n.questions.length - 1
                        ? $ + 1
                        : (function (e, t, l) {
                              let { questions: n } = e;
                              for (let e = 1; e <= n.length; e++) {
                                  let a = (l + e) % n.length,
                                      r = t[n[a].id];
                                  if (null == r || "" === r.text.trim()) return a;
                              }
                              return null;
                          })(n, t, $);
                null == l ? el(t) : en(l, l < $ ? "back" : "forward");
            },
            [u, n, R, $, F.id, el, en],
        ),
        eo = i.useCallback(() => {
            R || 0 === $ || en($ - 1, "back");
        }, [R, $, en]),
        eu = $ > 0 && !R,
        em = i.useCallback(
            (e) => {
                m((e) => ({ ...e, [F.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                K ? R || c((e) => ({ ...e, [F.id]: t })) : es(t);
            },
            [R, K, F.id, es],
        ),
        { multiPartFor: ef } = W,
        eh = i.useMemo(() => {
            var e;
            let t, l;
            return H
                ? ((e = ef(F)),
                  (t = B.trim()),
                  (l = F.options.filter((e) => V.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: V,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...l, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [B, H, ef, F, V]),
        eg = W.controlsFor(F, R),
        ex = i.useCallback(() => {
            if (null != eh) {
                "" !== eh.text && es(eh);
                return;
            }
            let e = B.trim();
            "" !== e && es({ kind: "custom", text: e });
        }, [B, eh, es]),
        [ep, ev] = i.useState(!1),
        [ej, eb] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ev(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ey = i.useCallback(() => {
            null != s && (eb(!0), setTimeout(s, 150));
        }, [s]),
        ek = i.useMemo(
            () =>
                null != eh
                    ? "" !== eh.text
                        ? eh
                        : null
                    : "" !== B.trim()
                      ? { kind: "custom", text: B.trim() }
                      : (u[F.id] ?? null),
            [u, B, eh, F.id],
        ),
        ew = null != ek && !R,
        eN = $ === D - 1,
        eA = i.useCallback(() => {
            null == ek || R || es(ek);
        }, [R, ek, es]),
        eS = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tD.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tD.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tD.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eu
                            ? (e.preventDefault(), eo())
                            : "ArrowRight" === e.key && ew && (e.preventDefault(), eA())));
            },
            [eu, ew, eo, eA],
        );
    return (0, r.jsxs)("section", {
        className: o()(n3.$O, { [n3.fI]: ep && !ej, [n3.Oh]: ej }),
        role: "dialog",
        "aria-label": F.question,
        "data-conjure-clarification": n.id,
        "data-state": R ? "inert" : "open",
        "data-question-expanded": U ? "true" : void 0,
        "data-step": $,
        tabIndex: -1,
        onKeyDown: eS,
        children: [
            (0, r.jsxs)("div", {
                className: n3.rf,
                style: null == N ? void 0 : { height: N.heading + N.rows },
                "data-moving": C ? "" : void 0,
                children: [
                    (0, r.jsxs)("div", {
                        ref: I,
                        className: n3.wx,
                        children: [
                            (0, r.jsx)(y.E, {
                                ref: T,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: U ? void 0 : 5,
                                className: o()(n2.TK, n3.R_, { [n3.TB]: "exit" === Q, [n3.JU]: "enter" === Q }),
                                children: Y,
                            }),
                            ee || U
                                ? (0, r.jsx)("div", {
                                      className: n2.Q7,
                                      children: (0, r.jsx)(w.m, {
                                          text: et,
                                          children: (0, r.jsx)(le.K, {
                                              icon: U ? tr.t : tB.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => O({ id: F.id, expanded: !U }),
                                              "aria-label": et,
                                              "aria-controls": `${F.id}-label`,
                                              "aria-expanded": U,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, r.jsx)(k.D, {
                                      className: o()(n2.gb, n2.Q7),
                                      onClick: ey,
                                      "aria-label": ed.intl.string(ec.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, r.jsx)(L.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: n3.Cg,
                        style: null == N ? void 0 : { insetBlockStart: N.heading },
                        children: (0, r.jsxs)("div", {
                            className: n3.I,
                            children: [
                                (0, r.jsxs)("div", {
                                    ref: _,
                                    className: n3.Ge,
                                    role: "group",
                                    "aria-labelledby": `${F.id}-label`,
                                    "data-direction": p?.direction,
                                    "data-parity": null == p ? void 0 : p.moves % 2,
                                    children: [
                                        H
                                            ? (0, r.jsx)(y.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: n3.aK,
                                                  children: ed.intl.string(ec.default.tE8qbz),
                                              })
                                            : null,
                                        (0, r.jsx)(n5, {
                                            projectId: l,
                                            question: F,
                                            selected: V,
                                            disabled: R,
                                            onPick: (e) =>
                                                H
                                                    ? h((t) => {
                                                          var l, n;
                                                          let a;
                                                          return {
                                                              ...t,
                                                              [F.id]:
                                                                  ((l = t[F.id] ?? n6),
                                                                  (n = e.id),
                                                                  (a = l.includes(n)
                                                                      ? l.filter((e) => e !== n)
                                                                      : [...l, n]),
                                                                  F.options
                                                                      .filter((e) => a.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : em(e),
                                            own: eg,
                                        }),
                                        K
                                            ? null
                                            : (0, r.jsxs)("div", {
                                                  className: n3.Xy,
                                                  children: [
                                                      (0, r.jsx)("span", {
                                                          className: n3.Gy,
                                                          "aria-hidden": !0,
                                                          children: (0, r.jsx)(nb.PencilIcon, {
                                                              size: "custom",
                                                              width: 20,
                                                              height: 20,
                                                              color: "currentColor",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(ny.y, {
                                                          value: B,
                                                          onChange: (e) => {
                                                              let { value: t } = e.currentTarget;
                                                              m((e) => ({ ...e, [F.id]: t }));
                                                          },
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  e.nativeEvent.isComposing ||
                                                                  (e.preventDefault(), ex());
                                                          },
                                                          placeholder: ed.intl.string(ec.default["tOC+tn"]),
                                                          "aria-label": ed.intl.formatToPlainString(
                                                              ec.default["4JeYPB"],
                                                              { question: F.question },
                                                          ),
                                                          disabled: R,
                                                          rows: 1,
                                                          className: n3.Pu,
                                                          "data-conjure-clarification-other": F.id,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                                null == j
                                    ? null
                                    : (0, r.jsx)(
                                          n7,
                                          {
                                              projectId: l,
                                              question: j.question,
                                              draft: j.draft,
                                              selected: j.selected,
                                              ownImage: j.ownImage,
                                              ownSelected: j.ownSelected,
                                              direction: j.direction,
                                              disabled: R,
                                          },
                                          j.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            D > 1 || H || K
                ? (0, r.jsxs)("div", {
                      className: n2.qr,
                      children: [
                          (0, r.jsx)(y.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  D > 1
                                      ? ed.intl.formatToPlainString(ec.default.yzYUjq, { index: $ + 1, total: D })
                                      : null,
                          }),
                          (0, r.jsxs)("div", {
                              className: n2.zt,
                              children: [
                                  eu
                                      ? (0, r.jsx)(nk.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: ed.intl.string(ec.default.Pk5lfA),
                                            onClick: eo,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, r.jsx)(S.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ed.intl.string(eN ? ed.t.geKm7t : ec.default.w1nRmT),
                                      disabled: !ew,
                                      onClick: eA,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": eN ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var n9 = l(856059),
    ae = l(411236);
function at(e) {
    let { projectId: t, request: l, onDismiss: n } = e,
        a = null != l.note && "" !== l.note ? l.note : ed.intl.string(ec.default.XuOf5s);
    return (0, r.jsx)(n9.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: l, saving: i, submit: s } = e;
            function u(e) {
                (e.preventDefault(), s());
            }
            let c = (0, r.jsx)(S.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !l,
                text: ed.intl.string(ec.default.A7dQd9),
            });
            return null == n
                ? (0, r.jsxs)("form", {
                      className: ae.Mk,
                      onSubmit: u,
                      children: [
                          (0, r.jsx)(y.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ed.intl.string(ec.default["jZjP+I"]),
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: a,
                          }),
                          t,
                          (0, r.jsx)("div", { className: ae.p0, children: c }),
                      ],
                  })
                : (0, r.jsxs)("form", {
                      className: o()(n2.nd, n2.jx),
                      "aria-label": ed.intl.string(ec.default["jZjP+I"]),
                      onSubmit: u,
                      children: [
                          (0, r.jsxs)("div", {
                              className: n2.wx,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: n2.TK,
                                      children: ed.intl.string(ec.default["jZjP+I"]),
                                  }),
                                  (0, r.jsx)(k.D, {
                                      className: o()(n2.gb, n2.Q7),
                                      onClick: n,
                                      "aria-label": ed.intl.string(ec.default["iq+Pte"]),
                                      children: (0, r.jsx)(L.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: ae.DQ,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: a,
                                  }),
                                  t,
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: n2.qr,
                              children: (0, r.jsx)("div", { className: n2.zt, children: c }),
                          }),
                      ],
                  });
        },
    });
}
var al = l(935208);
let an = "VibegrationsComposerDrafts";
function aa() {
    return lW.w.get(an) ?? {};
}
let ar = new Map(),
    ai = lm().throttle(() => {
        if (0 === ar.size) return;
        let e = aa();
        for (let [t, l] of ar) "" === l ? delete e[t] : (e[t] = l);
        (ar.clear(), lW.w.set(an, e));
    }, 1e3);
class as extends m.Ay.Store {
    getDraft(e) {
        let t = ar.get(e);
        return null != t ? t : (aa()[e] ?? "");
    }
}
let ao = new as(nR.h, {
    LOGOUT: function () {
        return (ar.clear(), ai.cancel(), lW.w.remove(an), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (ar.set(t, l), ai(), "" === l && ai.flush(), !1);
    },
});
function au(e) {
    return "" !== ao.getDraft(e).trim();
}
var ac = l(29080),
    ad = l(46054),
    am = l(615839);
function af(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ed.intl.string(ec.default.KcFvbo);
}
function ah(e) {
    var t;
    let l,
        n,
        { steps: a, content: r, hasProposal: i, hasAttachments: s } = e,
        o = (0, l8.B4)(a),
        u = o.filter((e) => "message" === e.type).at(-1),
        c =
            !i &&
            null != u &&
            ((t = u.content),
            (l = t.trim()),
            (n = r.trim()),
            "" !== l && "" !== n && (l === n || (t.length >= 16e3 && n.startsWith(l))))
                ? u
                : null,
        d = o.filter((e) => e !== c),
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
        })({ hasAttachments: s, showsClosingMessage: f, endsOnStreamedMessage: (0, l8.Lf)(a) }),
    };
}
(l(134528), l(947204));
let ag = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ax = {
        snail: () => ec.default.ABeVsS,
        goat: () => ec.default.dhXay8,
        frog: () => ec.default.SHeweG,
        bunny: () => ec.default.FytFE1,
        cat: () => ec.default["5c+sHs"],
        caterpillar: () => ec.default["/FYcne"],
        butterfly: () => ec.default["Ib/AxK"],
        dog: () => ec.default.zDjBR1,
        spider: () => ec.default["6sxyrN"],
        bee: () => ec.default.cVtefg,
        bot: () => ec.default.MjCw0v,
    },
    ap = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
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
                let { alt: t, ariaLabel: l, ariaHidden: n, role: a, size: i = 64 } = e;
                return (0, r.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": n,
                    role: a ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function av(e) {
    return { ...ap[e], name: ed.intl.string(ax[e]()) };
}
function aj(e) {
    return ag.includes(e) ? av(e) : void 0;
}
function ab(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % ag.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, ag[(t + l) % ag.length]);
            }),
            n
        );
    })(e))
        t.set(l, av(n));
    return t;
}
var ay = l(60160),
    ak = l(16634);
function aw(e) {
    let { projectId: t, lane: l, Illocon: n, tint: a, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        c = (0, l8.SY)(l.steps),
        d = u
            ? null != c
                ? (0, l8.WQ)(c)
                : af(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(af(e));
                  switch (e.status) {
                      case "failed":
                          return ed.intl.formatToPlainString(ec.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ed.intl.formatToPlainString(ec.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return ed.intl.formatToPlainString(ec.default["++9woZ"], {
                                  task: t,
                                  duration: (0, am.MB)(e.durationMs),
                              });
                          return ed.intl.formatToPlainString(ec.default.nmI9Uh, { task: t });
                      default:
                          return ed.intl.formatToPlainString(ec.default.nmI9Uh, { task: t });
                  }
              })(o),
        m = u ? c : void 0,
        f =
            o.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, r.jsx)("ol", {
                                    className: nx.dO,
                                    children: l.steps.map((e) =>
                                        (0, r.jsx)(
                                            ak.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: nx.iq,
                                      children: (0, r.jsx)(ay.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, r.jsx)(nl.A, {
        glyph: (0, r.jsx)(nn.u, {
            asset: (0, r.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: af(o),
            position: "left",
            children: (0, r.jsx)("span", {
                className: nx.nC,
                children: (0, r.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: a,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
var aN = l(998445),
    aA = l(643210),
    aS = l(648127),
    aC = l(372795),
    aE = l(163897);
let aI = "conjure-browser-viewer";
function aM(e) {
    let { projectId: t, sessionIds: l } = e,
        n = (0, m.yK)(
            [aA.A],
            () =>
                l.flatMap((e) => {
                    let l = aA.A.getTab(t, e);
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
        className: aE.kR,
        "aria-label": ed.intl.string(ec.default.Uvkr1G),
        children: n.map((e) =>
            (0, r.jsx)("li", { children: (0, r.jsx)(aT, { projectId: t, tab: e, sessionIds: a }) }, e.session.id),
        ),
    });
}
function aT(e) {
    let { projectId: t, tab: n, sessionIds: a } = e,
        [s, u] = (function () {
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
        c = (0, tt.useHasModalOpen)(aI),
        [d, m] = i.useState(!1),
        f = i.useCallback((e, t) => m(t), []),
        { ended: h } = n,
        g = (0, aS.i)(n.session);
    return (0, r.jsxs)(k.D, {
        innerRef: s,
        className: o()(aE.Nr, h && aE.Xj),
        onClick: () => {
            var e;
            return (
                (e = n.session.id),
                void (0, tt.openModalLazy)(
                    async () => {
                        let { default: n } = await Promise.all([
                            l.e("459368"),
                            l.e("513843"),
                            l.e("501962"),
                            l.e("531527"),
                        ]).then(l.bind(l, 273594));
                        return (l) => (0, r.jsx)(n, { ...l, projectId: t, sessionId: e, sessionIds: a });
                    },
                    { modalKey: aI },
                )
            );
        },
        "aria-label": ed.intl.formatToPlainString(ec.default.G3a822, { title: g }),
        children: [
            (0, r.jsxs)("div", {
                className: aE.Gt,
                children: [
                    (0, r.jsx)(aC.A, {
                        projectId: t,
                        sessionId: n.session.id,
                        fps: 1,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: aE.Ji,
                        "aria-label": ed.intl.formatToPlainString(ec.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, r.jsx)("div", {
                              className: aE.qf,
                              children: (0, r.jsx)(aN.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, r.jsx)("div", {
                              className: aE.HS,
                              children: (0, r.jsx)(y.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: ed.intl.string(ec.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("span", {
                className: aE.pG,
                children: [
                    (0, r.jsx)("span", { className: o()(aE.W9, h && aE.oM) }),
                    (0, r.jsx)(y.E, {
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
var a_ = l(268409);
let aP = new WeakMap();
function aR(e) {
    let { projectId: t, steps: l, tree: n, segment: a } = e,
        s = (0, m.bG)([ek.Ay], () =>
            (function (e) {
                let t = aP.get(e);
                if (null != t) return t;
                let l = new Map();
                for (let t of e)
                    for (let e of t.steps)
                        if ("node" === e.kind) for (let n of e.node?.browser_sessions ?? []) l.set(n, t.steps);
                return (aP.set(e, l), l);
            })(ek.Ay.getMessages(t)),
        ),
        o = i.useMemo(
            () =>
                (function (e) {
                    let { latest: t, steps: l, tree: n, segment: a } = e,
                        r = new Map();
                    for (let e of [...n.steps, ...n.tasks.flatMap((e) => e.steps)])
                        for (let t of e.browserSessions) r.has(t) || r.set(t, e.segment);
                    return [...r]
                        .filter((e) => {
                            let [n, r] = e;
                            return t.get(n) === l && (null == a || r === a);
                        })
                        .map((e) => {
                            let [t] = e;
                            return t;
                        });
                })({ latest: s, steps: l, tree: n, segment: a }),
            [s, l, n, a],
        );
    return 0 === o.length
        ? null
        : (0, r.jsx)("li", { className: a_.h, children: (0, r.jsx)(aM, { projectId: t, sessionIds: o }) });
}
var aL = l(469393);
function aD(e) {
    let { proposal: t, onRestore: l } = e,
        n = (0, tn.lG)(t.authored_at);
    return (0, r.jsx)(nr, {
        title: ed.intl.string(ec.default["t+b0rz"]),
        children: (0, r.jsxs)("div", {
            className: aL.r,
            children: [
                (0, r.jsxs)("div", {
                    className: aL.z,
                    children: [
                        (0, r.jsx)(y.E, { variant: "text-md/medium", children: t.subject }),
                        null != n.relative
                            ? (0, r.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: n.absolute ?? void 0,
                                  children: n.relative,
                              })
                            : null,
                    ],
                }),
                null != l
                    ? (0, r.jsx)(S.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ed.intl.string(ec.default.H8Jfhu),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
var a$ = l(231483),
    aF = l(687966),
    az = l(632015),
    aO = l(633018),
    aU = l(885574);
let aG = {
    automod: ec.default.DnWMLj,
    overlay: ec.default.liTNf3,
    widget: ec.default["EswAi+"],
    activity: ed.t.IC5Ann,
    commands: ec.default.w7JaEP,
    chat_bot: ec.default["5QSvrP"],
    bot: ec.default.VFWfz1,
};
var aq = l(176999),
    aB = (((n = {}).IMAGE = "image"), n),
    aH = (((a = {}).PRIVATE = "private"), (a.PUBLIC = "public"), a),
    aK = l(773669);
let aV = [],
    aW = {};
function aJ(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aX(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aB.IMAGE,
        visibility: aH.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aY = l(127258),
    aQ = l(320095),
    aZ = l(963852),
    a0 = l(95701),
    a1 = l(889227),
    a2 = l(155718);
let a3 = ["command", "user_command", "message_command", "message"],
    a4 = new Set([a2.kc.CHAT, a2.kc.USER, a2.kc.MESSAGE]);
function a5(e) {
    return e.type ?? a2.kc.CHAT;
}
function a6(e) {
    return "launch" !== e.kind && a4.has(a5(e));
}
function a7(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function a8(e, t) {
    let l = a3.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        n = [...l.filter((e) => !a7(e)), ...l.filter(a7)].slice(0, 3);
    for (let a of t || 1 === l.length ? e : []) {
        if (n.length >= 3) break;
        n.includes(a) || a7(a) || n.push(a);
    }
    return a3.flatMap((t) => e.filter((e) => e.kind === t && n.includes(e)));
}
let a9 = new a0.nA({ id: "1337", guild_id: "1337", type: eb.rbe.GUILD_TEXT, name: "preview" });
function re(e, t) {
    let {
            bot: l = !1,
            discriminator: n = "0000",
            enabled: a = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = (0, m.bG)([tX.default], () => tX.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            a && r?.username !== t && (0, tQ.nj)(new a1.A({ id: e, username: t, discriminator: n, bot: l }));
        }, [a, r, e, t, n, l]),
        r
    );
}
let rt = /^@\S+/;
var rl = l(628284),
    rn = l(97808),
    ra = l(778712),
    rr = l(809115),
    ri = l(486020),
    rs = l(200700);
let ro = {
        alert: { label: () => ed.intl.string(ec.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ed.intl.string(ec.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ed.intl.string(ec.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ed.intl.string(ec.default.RGzFNK), blockedStyle: !1 },
    },
    ru = {
        blocked: { label: () => ed.intl.string(ec.default.YdnZ8q), tone: "red" },
        alert: { label: () => ed.intl.string(ec.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ed.intl.string(ec.default.RGzFNK), tone: "green" },
    },
    rc = ["blocked", "alert", "allowed"],
    rd = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var rm = l(984097),
    rf = l(13673);
let rh = { blocked: a$.ShieldIcon, alert: t4.BellIcon, allowed: rl.y },
    rg = {
        blurple: { text: "text-brand", icon: $.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: $.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: $.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function rx(e) {
    var t, l;
    let n,
        a,
        { example: i } = e,
        s =
            "" ===
            (a = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : ed.intl.formatToPlainString(ed.t["3LYql6"], {
                          duration:
                              ((l = t.timeout_seconds),
                              null != (n = (0, rs.getFriendlyDurationString)(l))
                                  ? n
                                  : l % 604800 == 0
                                    ? ed.intl.formatToPlainString(ed.t.EmoBD2, { weeks: l / 604800 })
                                    : l % 86400 == 0
                                      ? ed.intl.formatToPlainString(ed.t["k2UNz+"], { days: l / 86400 })
                                      : l % 3600 == 0
                                        ? ed.intl.formatToPlainString(ed.t.xCjYxK, { hours: l / 3600 })
                                        : l % 60 == 0
                                          ? ed.intl.formatToPlainString(ed.t.opVZ9q, { mins: l / 60 })
                                          : ed.intl.formatToPlainString(ed.t["4zv/jq"], { secs: l })),
                      }),
                i.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : a;
    return null == s
        ? null
        : (0, r.jsx)(y.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function rp(e) {
    var t;
    let { example: l } = e,
        { label: n, blockedStyle: a } = ro[l.outcome];
    return (0, r.jsxs)("li", {
        className: o()(rm.nM, { [o()(rm.HV, rf.DX)]: a }),
        children: [
            (0, r.jsx)(N.A, { children: `${n()}: ` }),
            (0, r.jsx)("span", {
                className: rm.my,
                children: (0, r.jsx)(rn.eu, {
                    src: (0, ri.AE)(void 0, void 0),
                    size: ra._3.SIZE_24,
                    "aria-label": ed.intl.string(ec.default["1yI0xV"]),
                }),
            }),
            (0, r.jsxs)("div", {
                className: rm.fw,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = l.content), ad.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, r.jsx)(rx, { example: l }),
                ],
            }),
        ],
    });
}
function rv(e) {
    let { group: t } = e,
        l = i.useId(),
        n = ru[t.section],
        a = rh[t.section],
        s = rg[n.tone];
    return (0, r.jsxs)("div", {
        className: rm.uW,
        children: [
            (0, r.jsxs)("div", {
                className: rm.bV,
                children: [
                    (0, r.jsx)(a, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, r.jsx)(y.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: rm.a9,
                        children: n.label(),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: rm.Ge,
                "aria-labelledby": l,
                children: t.examples.map((e, t) => (0, r.jsx)(rp, { example: e }, t)),
            }),
        ],
    });
}
function rj() {
    let { avatarSrc: e, eventHandlers: t } = (0, rr.a)(!0);
    return (0, r.jsx)("span", {
        className: rm.Gy,
        ...t,
        children: (0, r.jsx)(rn.eu, { src: e, size: ra._3.SIZE_16, "aria-label": ed.intl.string(ed.t.hG1StD) }),
    });
}
function rb(e) {
    var t;
    let { automod: l } = e;
    return (0, r.jsx)("div", {
        className: rm.K1,
        children: ((t = l.examples),
        rc
            .map((e) => ({ section: e, examples: t.filter((t) => rd[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, r.jsx)(rv, { group: e }, e.section)),
    });
}
var ry = l(460905),
    rk = l(110384),
    rw = l(763754),
    rN = l(217424),
    rA = l(194085),
    rS = l(20851),
    rC = l(692508),
    rE = l(798819);
function rI(e) {
    let { item: t } = e,
        { iconLeft: l, icon: n } = t;
    return (0, r.jsxs)("div", {
        className: o()(rE.item, rE.labelContainer, rE.colorDefault, {
            [rE.focused]: !0 === t.highlighted,
            [rE.disabled]: !0 === t.muted,
        }),
        children: [
            null != l
                ? (0, r.jsx)("div", {
                      className: rE.iconContainerLeft,
                      children: (0, r.jsx)(l, { color: "currentColor", className: rE.icon }),
                  })
                : null,
            (0, r.jsx)("div", { className: o()(rE.label, rC.Gy), children: t.label }),
            null != n
                ? (0, r.jsx)("div", {
                      className: rE.iconContainer,
                      children: (0, r.jsx)(n, { color: "currentColor", className: rE.icon }),
                  })
                : null,
        ],
    });
}
function rM(e) {
    let { target: t, commandName: l, appIconSrc: n } = e,
        a = i.useMemo(
            () =>
                null != n
                    ? (e) => {
                          let { className: t } = e;
                          return (0, r.jsx)("img", { src: n, alt: "", className: o()(t, rC.ak) });
                      }
                    : void 0,
            [n],
        ),
        s =
            "message" === t
                ? { label: ed.intl.string(ed.t["5IEsGx"]), icon: rk.W, muted: !0 }
                : { label: ed.intl.string(ed.t.LYju5J), muted: !0 };
    return (0, r.jsx)("div", {
        className: o()(rE.menu, rC.MK),
        "aria-hidden": !0,
        children: (0, r.jsxs)("div", {
            className: rE.scroller,
            children: [
                (0, r.jsx)(rI, { item: s }),
                (0, r.jsx)("div", { className: rE.separator }),
                (0, r.jsx)(rI, { item: { label: l, iconLeft: a, highlighted: !0 } }),
            ],
        }),
    });
}
var rT = l(381941);
function r_() {}
function rP(e) {
    let t,
        l,
        n,
        a,
        s,
        u,
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
        (l = (0, m.bG)([eE.Ay], () => eE.Ay.getProject(x))),
        (n = l?.application_id),
        (a = (0, m.bG)([lf.A], () => lf.A.getApplication(n)?.getIconURL(80) ?? null, [n])),
        (s = l?.name ?? ed.intl.string(ec.default.JEYq8M)),
        (u = (0, m.bG)([tX.default], () => (null != n ? tX.default.getUser(n) : void 0), [n])),
        (d = re("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (f = c ? u : d),
        (h = re("31338", ed.intl.string(ec.default["9iAOsw"]), { discriminator: "0003" })),
        (g = re("31339", (0, tY.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == f || null == h
                        ? []
                        : (function (e, t, l) {
                              var n, a, r;
                              let { bot: i, currentUser: s, viewer: o, member: u } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: l,
                                          messageType: n,
                                          menu: a,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      r = String(c.length + 1),
                                      i = (0, aQ.rh)({
                                          ...(0, aZ.Ay)({
                                              channelId: a9.id,
                                              content: e,
                                              author: t,
                                              type: n ?? eb.lAJ.DEFAULT,
                                          }),
                                          id: r,
                                          state: eb.cmJ.SENT,
                                          ...(null != l
                                              ? {
                                                    interaction: {
                                                        id: r,
                                                        name: l,
                                                        type: aY.G.APPLICATION_COMMAND,
                                                        user: (0, aZ.Vi)(s),
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
                                              messageType: eb.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? l.memberMessage : l.targetMessage, e ? u : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: eb.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((n = t.user), n.trim().replace(rt, `<@${i.id}>`)), s),
                                              d(((a = t.bot), a.includes("<@") ? a : `<@${o.id}> ${a}`), i));
                                          break;
                                      case "event":
                                          d(((r = t.bot), r.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              p,
                              { bot: f, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: ed.intl.string(ec.default["y+QYes"]),
                                  memberMessage: ed.intl.string(ec.default.BUTRDc),
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
              className: o()(rC.TE, `group-spacing-${rT.ES}`),
              children: v.map((e) => {
                  let { key: t, record: l, isCommandReply: n, menu: a } = e;
                  return (0, r.jsxs)(
                      "li",
                      {
                          className: null != a ? rC.Rz : void 0,
                          children: [
                              (0, r.jsx)(rS.A, {
                                  message: l,
                                  channel: a9,
                                  author: (0, rw.FT)(l.author, a9),
                                  isGroupStart: !0,
                                  avatarOverride: l.author.bot ? (j ?? void 0) : void 0,
                                  childrenExecutedCommand: n ? (0, r.jsx)(rN.A, { message: l, channel: a9 }) : void 0,
                                  usernameClassName: a?.target === "user" ? rC.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              a?.target === "message"
                                  ? (0, r.jsx)("div", {
                                        className: rC.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, r.jsxs)(rA.Ay, {
                                            children: [
                                                (0, r.jsx)(rA.qv, {
                                                    label: ed.intl.string(ed.t.lfIHs4),
                                                    icon: ry.n,
                                                    onClick: r_,
                                                }),
                                                (0, r.jsx)(rA.qv, {
                                                    label: ed.intl.string(ed.t["5IEsGx"]),
                                                    icon: rk.W,
                                                    onClick: r_,
                                                }),
                                                (0, r.jsx)(rA.qv, {
                                                    label: ed.intl.string(ed.t["UKOtz+"]),
                                                    icon: lt.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: r_,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != a
                                  ? (0, r.jsx)("div", {
                                        className: "user" === a.target ? rC.ET : rC.je,
                                        inert: !0,
                                        children: (0, r.jsx)(rM, {
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
var rR = l(633075),
    rL = l(946356),
    rD = l(58216),
    r$ = l(27399);
function rF(e) {
    let { applicationId: t, rendererProps: l } = e,
        n = (0, m.bG)([tX.default], () => tX.default.getCurrentUser()),
        a = i.useMemo(() => new rR.R({ applicationId: t }), [t]);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: r$.H,
              children: (0, r.jsx)(rL.A.Overlay, {
                  className: r$.w,
                  children: (0, r.jsx)(rD.A, {
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
var rz = l(443863);
let rO = {
    automod: a$.ShieldIcon,
    overlay: aF.GameControllerIcon,
    widget: az.f,
    activity: lk.k,
    commands: aO.k,
    chat_bot: h.ChatIcon,
    bot: lw.RobotIcon,
};
function rU(e) {
    let { label: t, icon: l, info: n, children: a } = e;
    return (0, r.jsxs)("section", {
        className: rz.uW,
        children: [
            (0, r.jsxs)("span", {
                className: rz.a9,
                children: [
                    l,
                    (0, r.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    n,
                ],
            }),
            a,
        ],
    });
}
function rG(e) {
    let { text: t, label: l } = e;
    return (0, r.jsx)(w.m, {
        text: t,
        children: (0, r.jsx)(k.D, {
            className: rz.bk,
            "aria-label": l,
            children: (0, r.jsx)(aU.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function rq(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, r.jsx)(rU, {
              label: t,
              children: (0, r.jsx)("div", {
                  className: rz.Ip,
                  children: l.map((e) =>
                      (0, r.jsx)(
                          "span",
                          {
                              className: rz.jw,
                              children: (0, r.jsx)(y.E, {
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
function rB(e) {
    let { tags: t } = e;
    return (0, r.jsx)("span", {
        className: rz.K2,
        children: t.map((e) => {
            let t = rO[e];
            return (0, r.jsxs)(
                "span",
                {
                    className: rz.L6,
                    children: [
                        (0, r.jsx)(t, {
                            size: "custom",
                            width: 16,
                            height: 16,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(y.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            tag: "span",
                            children: ed.intl.string(aG[e]),
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
function rH(e) {
    let { projectId: t, design: l } = e,
        { id: n } = l,
        { src: a, gone: s, handleError: o } = nX(t, n),
        u = ed.intl.string(ec.default["3/aHX6"]),
        c = i.useCallback(() => {
            (0, er.PK)(t, n).then(
                (e) => {
                    (0, nP.R)({
                        items: [{ type: "IMAGE", url: e, alt: u }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, n, u]);
    return s
        ? null
        : (0, r.jsx)(rU, {
              label: ed.intl.string(ec.default.X15LLY),
              info: (0, r.jsx)(rG, {
                  text: ed.intl.string(ec.default.nR4B8P),
                  label: ed.intl.string(ec.default.nc0SNY),
              }),
              children: (0, r.jsx)(k.D, {
                  className: rz.xX,
                  onClick: c,
                  "aria-label": ed.intl.string(ec.default.TvAPIm),
                  children: null != a ? (0, r.jsx)("img", { src: a, alt: u, className: rz.sN, onError: o }) : null,
              }),
          });
}
function rK(e) {
    let t,
        l,
        { projectId: n, proposal: a, version: s, onApprove: o } = e,
        { automod: u } = a,
        { botInteraction: c, botExchanges: d } =
            ((t = (function (e) {
                if (null != e.bot) return e.bot.interaction;
                let t = e.commands.some(a6),
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
                              let s = e.commands.filter(a6).map((e) =>
                                      (function (e, t) {
                                          let l = e.description?.trim() ?? "",
                                              n = "" !== l ? l : t.reply;
                                          switch (a5(e)) {
                                              case a2.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: n };
                                              case a2.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: n };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: n };
                                          }
                                      })(e, l),
                                  ),
                                  o = "messages" === t ? [] : s.filter(a7),
                                  u = r.length > 0 ? a8([...r, ...o], !0) : a8("both" === t ? [...s, i] : s, !1);
                              return u.length > 0 ? u : [a];
                          })(a, t, {
                              message: ed.intl.string(ec.default.J7qggf),
                              reply: ed.intl.string(ec.default.nqYtiy),
                              event: ed.intl.string(ec.default["05lU9W"]),
                          }),
                [a, t],
            )),
            { botInteraction: t, botExchanges: l }),
        f = (function (e, t) {
            let { widget_config: l, widget_preview: n } = t,
                a = (0, m.bG)([aK.default], () => aK.default.locale),
                r = (0, m.bG)([eE.Ay], () => {
                    let t = eE.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [l, n] = i.useState(aW);
                    return (
                        i.useEffect(() => {
                            let l = Object.entries(t ?? {});
                            if (0 === l.length) return;
                            let a = !1;
                            return (
                                Promise.all(
                                    l.map((t) => {
                                        let [l, n] = t;
                                        return (0, er.PK)(e, n.id).then(
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
                o = i.useMemo(
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
                                                          ...aJ(l),
                                                          ...(null != l.fallback ? { fallback: aJ(l.fallback) } : {}),
                                                      };
                                                  t[l] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(l));
                                  let r = aq.uW.safeParse(a);
                                  if (!r.success) return null;
                                  let i = r.data;
                                  return null == i[tA.m.WIDGET_TOP] || null == i[tA.m.WIDGET_BOTTOM]
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
                                                                    type: aq.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof r
                                                                ? (a[e] = { type: aq.oG.NUMBER, value: r })
                                                                : (a[e] = { type: aq.oG.STRING, value: r });
                                                    return a;
                                                })(e, t, l),
                                                applicationAssets: Object.keys(l).map(aX),
                                                getApplicationAssetUrl: (e) => l[e.key] ?? "",
                                                localizedStrings: aV,
                                            },
                                        };
                              })(l, n, s, a),
                    [l, n, s, a],
                );
            return i.useMemo(() => (null == r || null == o ? null : { applicationId: r, rendererProps: o }), [r, o]);
        })(n, a),
        h = s?.superseded === !0,
        g = a.what_changed?.trim() ?? "";
    return (0, r.jsxs)(no, {
        title:
            h && null != s
                ? ed.intl.formatToPlainString(ec.default.YZ3qJs, { version: s.version })
                : ed.intl.string(ec.default["3b6e7o"]),
        meta: h
            ? (0, r.jsx)(ns, { children: ed.intl.string(ec.default.hF2c41) })
            : (0, r.jsx)(rB, {
                  tags: (function (e, t) {
                      if (null != e.automod) return ["automod"];
                      let l = [];
                      return (e.supported_surfaces?.includes(ee.q7.OVERLAY) === !0 && l.push("overlay"),
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
        showLabel: ed.intl.string(ec.default.yD8EJS),
        hideLabel: ed.intl.string(ec.default.nSPGNb),
        bodyClassName: rz.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== g
                ? (0, r.jsx)(rU, {
                      label: ed.intl.string(ec.default.iNS4dl),
                      children: (0, r.jsx)(y.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: g,
                      }),
                  })
                : null,
            (0, r.jsx)(y.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: a.summary,
            }),
            null != u && u.examples.length > 0
                ? (0, r.jsx)(rU, {
                      label: ed.intl.string(ec.default.z4ZKYG),
                      icon: (0, r.jsx)(rj, {}),
                      info: (0, r.jsx)(rG, {
                          text: ed.intl.string(ec.default.bo4MOx),
                          label: ed.intl.string(ec.default.VPLNot),
                      }),
                      children: (0, r.jsx)(rb, { automod: u }),
                  })
                : null,
            null == u && null != a.design_image ? (0, r.jsx)(rH, { projectId: n, design: a.design_image }) : null,
            d.length > 0
                ? (0, r.jsx)(rU, {
                      label: ed.intl.string(ec.default.sA1lTv),
                      info: (0, r.jsx)(rG, {
                          text: ed.intl.string(ec.default.NnmbJu),
                          label: ed.intl.string(ec.default.KsqQJX),
                      }),
                      children: (0, r.jsx)(rP, { projectId: n, exchanges: d }),
                  })
                : null,
            null == u && null != f
                ? (0, r.jsx)(rU, {
                      label: ed.intl.string(ec.default.ove4zH),
                      info: (0, r.jsx)(rG, {
                          text: ed.intl.string(ec.default.XcIrHx),
                          label: ed.intl.string(ec.default["TwT+ht"]),
                      }),
                      children: (0, r.jsx)(rF, { ...f }),
                  })
                : null,
            a.changes.length > 0
                ? (0, r.jsx)(rU, {
                      label: ed.intl.string(ec.default["5+mG1z"]),
                      children: (0, r.jsx)("ul", {
                          className: rz.p_,
                          children: a.changes.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: rz.Aw,
                                      children: (0, r.jsx)(y.E, {
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
                ? (0, r.jsx)(rU, {
                      label: ed.intl.string(ed.t["0hKkS+"]),
                      children: (0, r.jsx)("ul", {
                          className: rz.p_,
                          children: a.commands.map((e, t) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: rz.uX,
                                      children: [
                                          (0, r.jsxs)(y.E, {
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
                                          (0, r.jsx)(y.E, {
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
            (0, r.jsx)(rq, { label: ed.intl.string(ec.default["2UbW6r"]), names: a.bot_permissions ?? [] }),
            (0, r.jsx)(rq, { label: ed.intl.string(ec.default["7TKfpj"]), names: a.privileged_intents ?? [] }),
            null == o || h
                ? null
                : (0, r.jsxs)("div", {
                      className: rz.o1,
                      children: [
                          (0, r.jsx)(S.$, {
                              variant: "primary",
                              size: "sm",
                              text: ed.intl.string(ec.default["6S+wRM"]),
                              onClick: o,
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: ed.intl.string(ec.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
function rV(e) {
    return null != e && e.status?.state === "unpublished";
}
function rW(e) {
    let { publish: t } = e,
        l = t.guildId,
        n = (0, m.bG)([Q.A], () => (null == l ? null : Q.A.getGuild(l)));
    return (0, r.jsx)(lb.B, {
        gap: 8,
        align: "start",
        children: (0, r.jsxs)(lb.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, r.jsx)(w.m, {
                    text: t.disabledReason,
                    asContainer: !0,
                    children: (0, r.jsx)(S.$, {
                        variant: "primary",
                        size: "sm",
                        loading: t.publishing,
                        disabled: t.disabled,
                        onClick: () => t.run("card"),
                        text: t.label,
                    }),
                }),
                null != n
                    ? (0, r.jsxs)(lb.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, r.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ed.intl.string(ec.default["+HGTlC"]),
                              }),
                              (0, r.jsx)(eH.Ay, { guild: n, size: eH.Ay.Sizes.SMOL }),
                              (0, r.jsx)(y.E, {
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
function rJ(e) {
    let { projectId: t } = e,
        l = (0, lo.Ay)(t);
    return null != l && rV(l) ? (0, r.jsx)(rW, { publish: l }) : null;
}
var rX = l(478016),
    rY = l(989271);
function rQ(e) {
    let { idea: t, selected: l, onPick: n } = e,
        a = i.useId(),
        s = null == n;
    return (0, r.jsxs)(k.D, {
        className: o()(rY.nM, { [rY.f1]: s, [rY.CZ]: l }),
        onClick: s ? void 0 : () => n(t),
        "aria-label": ed.intl.formatToPlainString(ec.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : a,
        "aria-disabled": s,
        "aria-pressed": l,
        children: [
            (0, r.jsxs)("div", {
                className: rY.jo,
                children: [
                    l
                        ? (0, r.jsx)(rX.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: rY.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, r.jsx)(y.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: rY.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, r.jsx)(y.E, {
                      tag: "div",
                      id: a,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function rZ(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: n } = e,
        [a, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), n?.(e));
            },
            [n],
        );
    return (0, r.jsx)(nr, {
        title: ed.intl.string(ec.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, r.jsx)(
                rQ,
                { idea: e, selected: a.has(e.id) || l?.has(e.id) === !0, onPick: null == n ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function r0(e) {
    let { onAsk: t } = e;
    return (0, r.jsx)(lb.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, r.jsx)(S.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: ed.intl.string(ec.default["U/bLzU"]),
        }),
    });
}
var r1 = l(530557),
    r2 = l(872162);
function r3(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var r4 = l(202723);
function r5(e) {
    let { projectId: t, cardId: n, request: a, status: s, awaiting: u } = e,
        c = i.useCallback(() => {
            (0, tt.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("291953"), l.e("408337")]).then(l.bind(l, 789864));
                return (l) => (0, r.jsx)(e, { ...l, projectId: t, request: a });
            });
        }, [t, a]),
        d = i.useMemo(() => a.fields.map((e) => ({ id: e.name, label: e.label, icon: r1.R })), [a.fields]),
        m = (function (e, t) {
            let [l, n] = i.useState(() => r3(e, t));
            return l.cardId !== e || (null == l.status && "pending" !== t)
                ? (n(r3(e, t)), !1)
                : null != l.status && t !== l.status;
        })(n, s),
        f = o()(r4.Lo, { [r4.jY]: m });
    return "superseded" === s
        ? (0, r.jsx)(
              "article",
              {
                  className: f,
                  children: (0, r.jsx)(y.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: ed.intl.string(ec.default.CTxtdV),
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
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: ed.intl.string(ec.default.HCQvpO),
                        }),
                        (0, r.jsx)(r2.C, { label: ed.intl.string(ec.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, r.jsx)(
                  "article",
                  {
                      className: r4.Lo,
                      children: (0, r.jsx)(r2.C, { label: ed.intl.string(ec.default.HCQvpO), size: "xs", items: d }),
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
                                className: r4.$h,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: r4.c9,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(rl.y, {
                                            size: "xs",
                                            color: $.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, r.jsx)(y.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: ed.intl.string(ec.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(r2.C, { label: ed.intl.string(ec.default.sfp7Up), size: "xs", items: d }),
                        ],
                    },
                    s,
                )
              : (0, r.jsxs)("article", {
                    className: r4.Lo,
                    children: [
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: ed.intl.string(null != u ? ec.default.O0QIqj : ec.default.HCQvpO),
                        }),
                        (0, r.jsx)(y.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != a.note && "" !== a.note ? a.note : ed.intl.string(ec.default.MPGSHL),
                        }),
                        (0, r.jsx)(r2.C, { label: ed.intl.string(ec.default.HCQvpO), size: "xs", items: d }),
                        (0, r.jsx)("div", {
                            className: r4.sq,
                            children: (0, r.jsx)(S.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: ed.intl.string(ec.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var r6 = l(919790),
    r7 = l(971824),
    r8 = l(162052),
    r9 = l(165648);
function ie(e) {
    let t = ab(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? aj(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: af(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function it(e) {
    let {
            projectId: t,
            steps: l,
            active: n = !1,
            turnActive: a = n,
            checklistSuperseded: s = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: c,
            provisionalTodo: d,
            segment: m,
            hostsChecklist: f = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: x,
        } = e,
        p = i.useMemo(() => (0, l8.GO)(l, { turnActive: n }), [l, n]),
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
    if (u)
        return (0, r.jsx)("ol", {
            className: nx.pj,
            "data-live": !1,
            children: (0, r.jsx)(nl.A, {
                glyph: (0, r.jsx)(ac.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ed.intl.string(ec.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = n ? void 0 : (x ?? (h ? (p.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, l8.lt)(l) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = ab(k.map((e) => e.taskId)),
        N = !g && (n || k.some((e) => "running" === e.task.status)),
        A = ie(k);
    return (0, r.jsx)(nl.E.Provider, {
        value: k.length,
        children: (0, r.jsxs)("ol", {
            className: nx.pj,
            "data-live": N,
            children: [
                (0, r.jsx)(ne.A, {
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
                    let n = null != e.task.helperMark ? aj(e.task.helperMark) : void 0,
                        a = n ?? w.get(e.taskId);
                    return null == a
                        ? null
                        : (0, r.jsx)(
                              aw,
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
                (0, r.jsx)(aR, { projectId: t, steps: l, tree: p, segment: m }),
                y
                    ? (0, r.jsx)("li", {
                          className: nx.YO,
                          children: (0, r.jsx)(nh, { todos: b, provisional: d, agents: A, live: a, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function il(e) {
    let {
            projectId: t,
            steps: l,
            content: n,
            proposal: a,
            planVersion: s,
            ideas: u,
            attachments: c,
            secretRequest: d,
            secretRequestId: m,
            secretRequestAwaiting: f,
            secretRequestStatus: h = "open",
            settingsRequest: g,
            publishCta: x,
            onPickIdea: p,
            pickedIdeaIds: v,
            onApprovePlan: j,
            sideReply: b = !1,
            sideReplyAcknowledges: k,
            hoistedProse: w = !1,
            hoistedAttachmentsHost: N,
            restoreProposal: A,
            onRestoreProposal: S,
        } = e,
        C = i.useMemo(
            () => ah({ steps: l, content: n, hasProposal: null != a, hasAttachments: null != c && c.length > 0 }),
            [l, n, a, c],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: T } = C,
        _ = (w ? N : void 0) ?? C.attachmentsHost,
        P = M && !w,
        R = null == c ? null : (0, r.jsx)(r6.A, { projectId: t, attachments: c }),
        L = null == R ? null : (0, r.jsx)("div", { className: nx.MT, children: R }),
        D = b
            ? (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ed.intl.string(ec.default.Mv5OmK);
                          case "queued":
                              return ed.intl.string(ec.default["Po/2mi"]);
                          case "restarting":
                              return ed.intl.string(ec.default.Vj0woh);
                          default:
                              return ed.intl.string(ec.default.gY3L8p);
                      }
                  })(k),
              })
            : null;
    return (0, r.jsxs)("div", {
        className: nx.ue,
        children: [
            E.length > 0 && !w
                ? (0, r.jsx)("ol", {
                      className: nx.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: nx.DV,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: r9.PT,
                                          children: ad.A.parse(e.content, !0, {
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
                ? (0, r.jsx)(rK, { projectId: t, proposal: a, version: s, onApprove: j })
                : P
                  ? (0, r.jsxs)("div", {
                        className: o()(nx.ky, r8.XR),
                        children: [
                            (0, r.jsx)("div", {
                                className: o()(r9.PT, nx.cW),
                                children: ad.A.parse(T, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === _ ? L : null,
                            D,
                        ],
                    })
                  : null,
            null != d
                ? (0, r.jsx)("div", {
                      className: o()(nx.ky, r8.XR, { [r7.O]: null != f && "open" === h }),
                      children: (0, r.jsx)(r5, {
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
                      className: o()(nx.ky, r8.XR),
                      children: (0, r.jsx)(at, { projectId: t, request: g }),
                  })
                : null,
            "standalone" !== _ && ("closing" !== _ || P) ? null : R,
            null != x ? (0, r.jsx)(rJ, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, r.jsx)(rZ, { ideas: u, pickedIdeaIds: v, onPick: p }) : null,
            null != A ? (0, r.jsx)(aD, { proposal: A, onRestore: S }) : null,
            P ? null : D,
        ],
    });
}
var ia = l(146806),
    ir = l(477262),
    ii = l(432017),
    is = l(475358),
    io = l(717400),
    iu = l(663341),
    ic = l(559647),
    id = l(775602),
    im = l(234320),
    ih = l(285796),
    ig = l(922329);
async function ix(e) {
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
var ip = l(153171);
let iv = ee.lN;
function ij(e, t, l, n) {
    let a = nO(e, t).length;
    !(function (e, t, l) {
        if (0 === l.length) return;
        let n = l.map((e) => {
            let { draft: t, upload: l } = e;
            return { draft: { ...t, localId: n$++ }, upload: l };
        });
        for (let { draft: l, upload: a } of (nU(e, t, [
            ...nO(e, t),
            ...n.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        n))
            a?.().then(
                (n) => {
                    if ("errorText" in n) return void nG(e, t, l.localId, { status: "error", errorText: n.errorText });
                    let { converted: a, ...r } = n;
                    nG(e, t, l.localId, { ...a, status: "ready", ref: r })
                        ? setTimeout(
                              () =>
                                  nG(e, t, l.localId, {
                                      status: "error",
                                      errorText: ed.intl.string(ec.default.E7dS5n),
                                  }),
                              ee.o2 - 3e5,
                          )
                        : nq(e, r.id);
                },
                (n) => {
                    (console.error("[vibegrations] attachment upload failed", n),
                        nG(e, t, l.localId, { status: "error", errorText: ed.intl.string(ec.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        l.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                l = { name: e.name, contentType: t };
            if (a++ >= iv)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: ed.intl.formatToPlainString(ec.default.Q0aCVZ, { count: iv }),
                    },
                };
            if (!(0, ee.Oq)(e.size, t))
                return "image/png" === t && e.size <= ee.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...l, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let l = await ix(e).catch(() => null);
                              return null != l && (0, ee.Oq)(l.size, l.type)
                                  ? { ...(await n(l)), converted: { name: l.name, contentType: l.type } }
                                  : { errorText: nK(t) };
                          },
                      }
                    : { draft: { ...l, status: "error", errorText: nK(t) } };
            let r = ee.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: r }, upload: () => n(e) };
        }),
    );
}
function ib(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        a = nF.useState((e) => nz(e, t, l)),
        r = i.useCallback((e) => ij(t, l, e, n), [t, l, n]),
        s = i.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), r(t));
            },
            [r],
        ),
        o = i.useCallback(
            (e) => {
                let n, a;
                null != (a = (n = nO(t, l)).find((t) => t.localId === e)) &&
                    (nB(t, a),
                    nU(
                        t,
                        l,
                        n.filter((t) => t.localId !== e),
                    ));
            },
            [t, l],
        ),
        u = i.useCallback(() => nW(t, l), [t, l]);
    return {
        drafts: a,
        addFiles: r,
        pasteFiles: s,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function iy(e) {
    let { draft: t, onRemove: l } = e;
    return (0, r.jsxs)(ig.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, r.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE, className: ip.Rk }) : null,
            (0, r.jsx)("button", {
                type: "button",
                className: ip.o1,
                onClick: () => l(t.localId),
                "aria-label": ed.intl.string(ec.default.Slam9g),
                children: (0, r.jsx)(ih.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var ik = l(497437);
let iw = [
        {
            id: "add-images-videos",
            label: ec.default["51+9lc"],
            icon: ir.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: ec.default["10ljr2"],
            icon: ii.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: ec.default.aotDee, icon: ea.H, accept: "" },
    ],
    iN = "text-md/normal",
    iA = null;
function iS(e) {
    let { text: t, offering: l, typed: n } = e,
        [a, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [f, h] = i.useState(0),
        [g, x] = i.useState(0),
        [p, v] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let l = d.current;
        function n() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let n = c.current;
            if (null == n) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                r = Number.isNaN(a) ? 0 : a,
                i = e.offsetWidth,
                s = n.offsetWidth + r;
            (x(i + r), h(s));
            let o = s + i,
                d = Math.max(l, n.offsetWidth) + r + i,
                m = 0 === d ? 1 : s / d,
                f = 0 === d ? 1 : o / d;
            v({
                frontFrom: 1e3 * (0, ia._R)(m),
                frontTo: 1e3 * (0, ia._R)(f),
                backFrom: 1e3 * (0, ia.T)(m),
                backTo: 1e3 * (0, ia.T)(f),
            });
        }
        let a = new ResizeObserver(n);
        return (n(), a.observe(e), a.observe(t), null != c.current && a.observe(c.current), () => a.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, b] = i.useState(0),
        [k, w] = i.useState(null),
        N = i.useRef(!1),
        A = i.useCallback(() => {
            (w(N.current ? (l ? "through" : "out") : l ? "in" : null), b((e) => e + 1));
        }, [l]);
    i.useEffect(() => {
        N.current = l;
    }, [l, t]);
    let S = "in" === k ? p.backFrom : p.frontFrom,
        C = "out" === k ? p.frontTo : p.backTo,
        E = (0, m.bG)([id.Ay], () => id.Ay.useReducedMotion),
        I = t === ed.intl.string(ec.default.Zc7gML),
        M = a === t && I;
    function T(e, t, l) {
        let n = null != l;
        return (0, r.jsx)("span", {
            ref: l,
            className: o()(ik.VT, { [ik.qk]: n }),
            style: n
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": n && j > 0 && null != k ? j % 2 : void 0,
            "data-wipe-kind": n ? (k ?? void 0) : void 0,
            children: (0, r.jsx)(is.e, { shortcut: "tab", className: ik.xT, keyClassName: e }),
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eL.o, {
                text: t,
                variant: iN,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(ik.xM, { [ik.s2]: n }),
                onStart: A,
                onComplete: () => s(t),
            }),
            T(ik.IS, l || (!E && "out" === k), u),
            (0, r.jsx)("span", {
                ref: c,
                className: ik.QI,
                "aria-hidden": !0,
                children: (0, r.jsx)(y.E, { variant: iN, tag: "span", children: t }),
            }),
            M
                ? (0, r.jsxs)("span", {
                      className: ik.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, r.jsx)(y.E, { variant: iN, tag: "span", className: ik.xM, children: t }),
                          T(ik.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function iC(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: n,
            running: a,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
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
        [b, y] = i.useState(() => ao.getDraft(t)),
        k = i.useCallback(
            (e) => {
                ((0, eC.I$)(t, e), y(e));
            },
            [t],
        ),
        A = "" !== b.trim();
    i.useEffect(() => p?.(A), [A, p]);
    let [S, C] = i.useState(t);
    S !== t && (C(t), y(ao.getDraft(t)));
    let E = (0, m.bG)([id.Ay], () => id.Ay.isSubmitButtonEnabled),
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
        } = ib({ projectId: t, surface: "chat", onUploadFile: c }),
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
            o(b, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == iA && (iA = document.createElement("canvas").getContext("2d"));
                let i = iA;
                if (null == i) return r;
                let s = getComputedStyle(e);
                i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                let o =
                    t > 0
                        ? t
                        : ((n = parseFloat(s.paddingInlineStart)),
                          (a = parseFloat(s.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(n) ? 0 : n) - (Number.isNaN(a) ? 0 : a));
                if (o <= 0 || i.measureText(r).width <= o) return r;
                let u = 0,
                    c = r.length;
                for (; u < c;) {
                    let e = Math.ceil((u + c) / 2);
                    i.measureText(r.slice(0, e)).width <= o ? (u = e) : (c = e - 1);
                }
                let d = r.slice(0, u),
                    m = d.lastIndexOf(" ");
                return (m > 0 ? d.slice(0, m) : d).trimEnd();
            })(J.current?.querySelector("textarea") ?? null, eo.current, b);
            ("" !== t && U(t), k(""));
        }, [z, b, o, $, k]),
        q = i.useCallback(
            (e) => {
                (e.preventDefault(), G());
            },
            [G],
        ),
        B = i.useCallback(() => {
            null == u || I || (M(!0), u());
        }, [u, I]),
        H = null == h || "" !== b || !l || n || s || x ? null : h,
        K = i.useCallback(
            (e) => {
                if ("Escape" === e.key && a && null != u && !I) {
                    (e.preventDefault(), e.stopPropagation(), B());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != H) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(H));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != d && (e.preventDefault(), d());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
            },
            [G, d, a, u, I, B, H, k],
        ),
        V = i.useCallback(
            (e) => {
                l && R(e);
            },
            [l, R],
        );
    (0, im.Vo)({
        event: eb.jej.GLOBAL_CLIPBOARD_PASTE,
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
        J = i.useRef(null),
        X = i.useRef(null),
        Y = i.useCallback((e) => {
            let t = T.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        [Q, Z] = i.useState(0),
        [ee, ea] = i.useState(!1);
    i.useEffect(() => {
        if (0 === b.length) return void ea(!1);
        let e = J.current?.querySelector("textarea");
        if (null != e) {
            let t = iM(e);
            null != t && Z(t);
        }
        ea(!0);
        let t = setTimeout(() => ea(!1), iE);
        return () => clearTimeout(t);
    }, [b]);
    let er = i.useMemo(() => ({ "--custom-glow-x": `${Q}px` }), [Q]),
        ei = ee ? ` ${ik.EB}` : "",
        es = s
            ? ed.intl.string(ec.default.qqlUiW)
            : n
              ? ed.intl.string(ec.default.mPB3eo)
              : l
                ? x
                    ? ed.intl.string(ec.default.knUjL3)
                    : g
                      ? ed.intl.string(ec.default.IevBEw)
                      : ed.intl.string(a ? ec.default["0BJa/0"] : ec.default.TEeU7z)
                : ed.intl.string(ec.default.zZ9NgM),
        eo = i.useRef(0),
        eu = i.useRef(null),
        em = i.useCallback((e) => {
            if ((eu.current?.disconnect(), null == e)) return;
            eo.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                eo.current = e.clientWidth;
            });
            (t.observe(e), (eu.current = t));
        }, []),
        ef = i.useId(),
        eh = null != H,
        eg = O ?? H ?? es,
        ex = "" === b && "" !== eg;
    return (0, r.jsxs)("form", {
        onSubmit: q,
        className: ik.DA,
        children: [
            _.length > 0
                ? (0, r.jsx)("div", {
                      className: ik.lN,
                      children: _.map((e) => (0, r.jsx)(iy, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, r.jsx)("span", { className: `${ik.wg} ${ik.LP}${ei}`, style: er, "aria-hidden": !0 }),
            (0, r.jsx)("span", { className: `${ik.wg} ${ik.L3}${ei}`, style: er, "aria-hidden": !0 }),
            (0, r.jsxs)("div", {
                className: ik.VA,
                ref: J,
                children: [
                    (0, r.jsx)("input", {
                        ref: T,
                        type: "file",
                        multiple: !0,
                        onChange: W,
                        className: ik.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(et.Y, {
                        targetElementRef: X,
                        position: "top",
                        align: "left",
                        animation: et.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(el.W, {
                                "data-menu-migrated": !0,
                                navId: "conjure-composer-attach",
                                "aria-label": ed.intl.string(ed.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, r.jsxs)(en.rX, {
                                    children: [
                                        iw.map((e) =>
                                            (0, r.jsx)(
                                                en.Dr,
                                                {
                                                    id: e.id,
                                                    label: ed.intl.string(e.label),
                                                    iconLeft: e.icon,
                                                    leadingAccessory: { type: "icon", icon: e.icon },
                                                    action: () => Y(e.accept),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        null != f
                                            ? (0, r.jsx)(en.Dr, {
                                                  id: "import-project",
                                                  label: ed.intl.string(ec.default["p/k5i7"]),
                                                  iconLeft: io.q,
                                                  leadingAccessory: { type: "icon", icon: io.q },
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
                                ref: X,
                                type: "button",
                                className: `${ik.Y0} ${ik.nu}`,
                                disabled: !l,
                                "aria-label": ed.intl.string(ed.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": n,
                                children: (0, r.jsx)(iu.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: ik.Qu,
                                }),
                            });
                        },
                    }),
                    ex
                        ? (0, r.jsx)("div", {
                              ref: em,
                              className: ik.ar,
                              "aria-hidden": "true",
                              children: (0, r.jsx)(iS, { text: eg, offering: eh && null == O, typed: null != O }),
                          })
                        : null,
                    (0, r.jsx)(ny.y, {
                        value: b,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: K,
                        onPaste: V,
                        placeholder: ex ? "" : es,
                        disabled: !l,
                        "aria-label": ed.intl.string(ec.default.ldNl9x),
                        "aria-describedby": ex ? ef : void 0,
                        rows: 1,
                        className: ik.jp,
                    }),
                    ex ? (0, r.jsx)(N.A, { id: ef, children: es }) : null,
                    (0, r.jsx)("div", {
                        className: ik.Sz,
                        children:
                            a && null != u
                                ? (0, r.jsx)(w.m, {
                                      text: ed.intl.string(ec.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, r.jsx)("button", {
                                          type: "button",
                                          className: `${ik.Y0} ${ik.$E}`,
                                          disabled: I,
                                          onClick: B,
                                          "aria-label": ed.intl.string(ec.default.wiguT0),
                                          children: (0, r.jsx)(ac.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : v?.tierSettings != null && null != j
                                  ? (0, r.jsx)(tg, {
                                        settings: v.tierSettings,
                                        tiers: v.tiers,
                                        choices: v.choices,
                                        disabled: !l,
                                        onChange: j,
                                        className: `${ik.Y0} ${ik.$E}`,
                                        icon: (0, r.jsx)(ts.R, {
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
                              className: ik.fF,
                              children: [
                                  (0, r.jsx)("div", { className: ik.MT }),
                                  (0, r.jsx)("button", {
                                      type: "submit",
                                      className: ik.rt,
                                      disabled: !z,
                                      "aria-label": ed.intl.string(ec.default.rxW2cl),
                                      children: (0, r.jsx)(ic.SendMessageIcon, {
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
}
let iE = 1500,
    iI = [
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
function iM(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = iM.mirror;
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
                (iM.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of iI) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
iM.mirror = null;
var iT = l(155899),
    i_ = l(148087);
let iP = [6e4, 18e4, 6e5],
    iR = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: iP,
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
                    (0, ek.BL)(t) &&
                    !(null != l.publishCta && rV(n))
                );
            },
        },
    ];
function iL(e, t) {
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
let iD = new Map();
function i$(e) {
    return (0, m.bG)([eE.Ay, lf.A], () => {
        let t = eE.Ay.getProject(e);
        return null == t ? "" : (lf.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function iF(e) {
    let { projectId: t, notice: l } = e;
    return "outdated" === l ? (0, r.jsx)(iO, { projectId: t }) : (0, r.jsx)(iz, { projectId: t, notice: l });
}
function iz(e) {
    let { projectId: t, notice: l } = e,
        n = i.useContext(lo.bI),
        a = i$(t),
        s = i.useCallback(() => {
            null != n && (0, lo.ub)(t, n);
        }, [n, t]);
    return (0, r.jsx)(y.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: ed.intl.format(
            (function (e) {
                if (!e.update) return ec.default.MOrR29;
                switch (e.surface) {
                    case "bot":
                        return ec.default.zfpeIL;
                    case "widget":
                        return ec.default.DxCfTh;
                    case "automod":
                        return ec.default["8ytGC3"];
                    case "activity":
                    case null:
                        return ec.default.WSmpBT;
                }
            })(l),
            { name: a, onOpen: s },
        ),
    });
}
function iO(e) {
    let { projectId: t } = e,
        l = (0, lo.Ay)(t),
        [n, a] = i.useState(!1);
    return null == l
        ? null
        : n && (l.publishing || !l.isUpdate)
          ? (0, r.jsx)(iU, {})
          : (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ed.intl.format(ec.default.X8tdbS, {
                    action: l.label,
                    onUpdate: () => {
                        (a(!0), iD.get(t)?.forEach((e) => e()), l.run("outdated_notice"));
                    },
                }),
            });
}
function iU() {
    let e = ed.intl.string(ec.default.lexcBN),
        t = (function () {
            let e = (0, m.bG)([id.Ay], () => id.Ay.useReducedMotion),
                [t, l] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (e) return;
                    let t = setInterval(() => l((e) => (e % 3) + 1), 400);
                    return () => clearInterval(t);
                }, [e]),
                ".".repeat(e ? 3 : t)
            );
        })();
    return (0, r.jsxs)(y.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, r.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var iG = l(248798);
function iq(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function iB(e) {
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
        u = i.useRef(null),
        c = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = u.current;
            if (null == e || s) return;
            e.getBoundingClientRect();
            let t = c.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            iq(e, t);
            let l = new ResizeObserver(() => iq(e, t));
            return (l.observe(t), () => l.disconnect());
        }, [a, s]),
        (0, r.jsx)("div", {
            ref: u,
            className: o()(iG.NI, { [iG.Jg]: null == a }),
            "aria-live": "polite",
            children: (0, r.jsx)("div", {
                className: iG.t$,
                children: n.map((e) =>
                    (0, r.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : c,
                            "aria-hidden": e.leaving || void 0,
                            className: o()(iG.qd, e.leaving ? iG.cu : iG.We),
                            children: l(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var iH = l(521981),
    iK = l(491182),
    iV = l(438729),
    iW = l(622868),
    iJ = l(448368),
    iX = l(837528),
    iY = l(439762),
    iQ = l(715628),
    iZ = l(752636),
    i0 = l(9842),
    i1 = l(589022),
    i2 = l(967198),
    i3 = l(7584);
let i4 = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function i5(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function i6(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function i7(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = i6(e, t),
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
    if (i5(a) && i5(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && i5(i6(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function i8(e, t) {
    let { streaming: l } = t,
        n = (0, m.bG)([id.Ay], () => id.Ay.useReducedMotion),
        a = l && !n,
        [r, s] = i.useState(() => ({ target: e, length: e.length })),
        o = r;
    (o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r);) r++;
                      for (; r > 0 && i7(t, r);) r--;
                      return r;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== r && s(o));
    let u = a && o.length < e.length,
        c = i.useRef(o);
    i.useLayoutEffect(() => {
        c.current = o;
    });
    let d = i.useRef(0),
        f = i.useRef(0);
    (i.useEffect(() => {
        if (u)
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
                                    for (; n > t + 1 && l - n < 12 && i4.has(e.charAt(n - 1));) n--;
                                    return i4.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && i7(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && s({ target: e.target, length: n });
                    }
                    d.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(d.current)
            );
    }, [u]),
        i.useEffect(() => {
            if (u)
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
        }, [u]));
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var i9 = l(565645),
    se = l(981879);
function st(e) {
    let { emoji: t, label: l } = e;
    return (0, r.jsx)("div", {
        className: se.H,
        children: (0, r.jsx)(i9.A, { emojiName: t, alt: l, size: "reaction" }),
    });
}
var sl = l(734495),
    sn = l(180227);
function sa(e) {
    let { message: t, onClose: l } = e,
        n = (0, sl.A)(t);
    return (0, r.jsx)(el.W, {
        navId: "conjure-message-actions",
        "aria-label": ed.intl.string(ed.t.Lv7LxN),
        onClose: l,
        onSelect: l,
        children: (0, r.jsx)(en.rX, { children: n }),
    });
}
function sr(e) {
    let { groupStart: t, renderMenu: l } = e,
        [n, a] = i.useState(!1),
        s = i.useRef(null),
        u = i.useCallback(() => a((e) => !e), []),
        c = i.useCallback(() => a(!1), []);
    return (0, r.jsx)("div", {
        className: o()(sn.QE, { [sn.Rn]: t, [sn.vg]: n }),
        children: (0, r.jsx)(rA.Ay, {
            children: (0, r.jsx)(et.Y, {
                targetElementRef: s,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return l(t);
                },
                shouldShow: n,
                onRequestClose: c,
                position: "left",
                align: "top",
                animation: et.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: l, ...n } = e,
                        { isShown: a } = t;
                    return (0, r.jsx)(rA.qv, {
                        ref: s,
                        label: ed.intl.string(ed.t["UKOtz+"]),
                        icon: lt.MoreHorizontalIcon,
                        selected: a,
                        onClick: u,
                        ...n,
                    });
                },
            }),
        }),
    });
}
function si(e) {
    let { message: t, groupStart: l } = e,
        n = i.useCallback((e) => (0, r.jsx)(sa, { message: t, onClose: e }), [t]);
    return null == (0, sl.A)(t) ? null : (0, r.jsx)(sr, { groupStart: l, renderMenu: n });
}
let ss = (0, a0.createChannelRecord)({ id: "conjure-builder", type: eb.rbe.DM }),
    so = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function su(e, t) {
    return null == e ? e : (0, r.jsx)("div", { className: o()(sn.Yq, { [sn.x1]: t }), children: e });
}
function sc(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function sd(e, t, l) {
    let { content: n } = (0, iY.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        a = i.useMemo(() => ({ message: e, channel: ss, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, r.jsx)(iV.Ay, { className: l, message: e, content: n, compact: !1 })
          : (0, iQ.A)(a, n);
}
function sm(e) {
    let [t, l] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        n = i.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        a = i.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, iX.m)(e, ss, t.usernameProfile, n),
        o = (0, iX.Jo)(t.avatarProfile, n),
        u = (0, m.bG)([i2.A], () => i2.A.getGuildId()),
        c = (0, m.bG)([tX.default], () => tX.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let l = tX.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, r.jsx)(i1.A, { ...t, user: l, currentUser: c, guildId: u ?? void 0 });
            },
            [c, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: a,
        renderPopout: d,
        guildId: u ?? void 0,
    };
}
function sf(e) {
    let { baseMessage: t, referenced: l, selected: n, onJumpToReplied: a } = e,
        s = i.useMemo(() => {
            let e = "" !== l.content ? (0, iH.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == n
                ? e
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("span", {
                              className: sn.GV,
                              children: [
                                  (0, r.jsx)(C.x, {
                                      className: sn.Rj,
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
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, m.cf)(
            [lx.A],
            () => ({
                isReplyAuthorBlocked: lx.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lx.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        c = (0, rw.X4)(l),
        d = (0, rw.X4)(t),
        f = sm(l);
    return (0, r.jsx)(iJ.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: ss,
        referencedMessage: { state: i0.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
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
function sh(e) {
    let { message: t, author: l } = e,
        n = sm(t);
    return (0, r.jsx)(iW.Ay, {
        message: t,
        channel: ss,
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
function sg(e) {
    let { content: t, createdAt: l, userId: n, accessories: a, agentReaction: s, groupStart: o } = e;
    i.useEffect(() => t2(n), [n]);
    let u = (0, m.bG)(
            [tX.default],
            () => t1(n, null != n ? tX.default.getUser(n) : null, tX.default.getCurrentUser()),
            [n],
        ),
        c = i.useMemo(() => (0, rw.FT)(u, null), [u]),
        d = i.useMemo(() => e0(t), [t]),
        f = d?.body ?? t,
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, aZ.Ay)({ channelId: ss.id, content: f, author: u });
            return (0, aQ.rh)({ ...e, timestamp: sc(l, e.timestamp), state: eb.cmJ.SENT });
        }, [f, u, l]),
        g = (function (e) {
            if (null == e || "" === e) return null;
            let t = i3.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : ed.intl.formatToPlainString(ec.default.lxXLho, { emojiName: t });
        })(s);
    return null == h
        ? null
        : (0, r.jsx)(sx, {
              message: h,
              author: c,
              content: f,
              selected: d?.label,
              accessories:
                  null != s && null != g
                      ? (0, r.jsxs)(r.Fragment, { children: [a, (0, r.jsx)(st, { emoji: s, label: g })] })
                      : a,
              groupStart: o,
          });
}
function sx(e) {
    let { message: t, author: l, content: n, selected: a, accessories: i, groupStart: s = !0 } = e,
        o = sd(t, n);
    return (0, r.jsx)(iK.A, {
        className: sn.yE,
        author: l,
        childrenHeader: s ? (0, r.jsx)(sh, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == a
                ? o
                : (0, r.jsxs)("div", {
                      className: sn.zq,
                      children: [
                          (0, r.jsxs)("span", {
                              className: sn.GV,
                              children: [
                                  (0, r.jsx)(C.x, {
                                      className: sn.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  a,
                              ],
                          }),
                          (0, r.jsx)("span", { className: sn.WO, children: o }),
                      ],
                  }),
        childrenAccessories: su(i, "" !== n),
        childrenButtons: (0, r.jsx)(si, { message: t, groupStart: s }),
    });
}
function sp(e) {
    let {
            content: t,
            createdAt: l,
            accessories: n,
            replyTo: a,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
            buttons: c,
        } = e,
        { text: d, revealing: f } = i8(t, { streaming: u }),
        h = i.useMemo(() => (0, rw.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        x = a?.userId,
        p = (0, m.bG)(
            [tX.default],
            () => t1(x, null != x ? tX.default.getUser(x) : null, tX.default.getCurrentUser()),
            [x],
        ),
        v = i.useMemo(() => (null == a ? null : e0(a.content)), [a]),
        j = i.useMemo(() => {
            if (null == a || null == p) return null;
            let e = (0, aZ.Ay)({ channelId: ss.id, content: v?.body ?? a.content, author: p });
            return (0, aQ.rh)({ ...e, id: a.id, timestamp: sc(a.createdAt, e.timestamp), state: eb.cmJ.SENT });
        }, [a, v, p]),
        b = i.useMemo(() => (null == a ? void 0 : { channel_id: ss.id, message_id: a.id }), [a]),
        y = i.useMemo(() => {
            let e = (0, aZ.Ay)({ channelId: ss.id, content: d, author: so });
            return (0, aQ.rh)({
                ...e,
                timestamp: sc(l, e.timestamp),
                state: eb.cmJ.SENT,
                ...(null != b ? { type: eb.lAJ.REPLY, message_reference: b } : {}),
            });
        }, [d, l, b]),
        k = sd(y, d, sn.OS);
    return (0, r.jsxs)("div", {
        className: sn.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, r.jsx)(iK.A, {
                className: sn.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, r.jsx)(sf, { baseMessage: y, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: (0, iZ.A)({ message: y, channel: ss, author: g, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: k,
                childrenAccessories: su(n, "" !== d),
                disableInteraction: !0,
            }),
            c,
            o
                ? (0, r.jsx)("span", {
                      className: sn.st,
                      "aria-hidden": "true",
                      children: (0, r.jsx)(lk.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let sv = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var sj = l(288539);
function sb(e, t, l) {
    return (0, r.jsx)(sj.A, { userId: e, content: `@${t}` }, l);
}
function sy(e) {
    let { projectId: t, event: l } = e,
        n = (function (e, t, l) {
            let n = t.actor_user_id;
            i.useEffect(() => t2(n), [n]);
            let a = (0, m.bG)([tX.default], () => (null == n ? null : tX.default.getUser(n)), [n]),
                r = (0, tY.tx)(a),
                s = i$(e),
                o =
                    (0, m.bG)([Q.A], () => (null == t.guild_id ? null : Q.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? ed.intl.string(ec.default.R1tPlP),
                u = null == a || null == r ? null : { user: r, userHook: (e, t) => l(a.id, r, t) };
            switch (t.type) {
                case "app_removed":
                    return null == u
                        ? ed.intl.format(ec.default.Lwsrhg, { app: s, server: o })
                        : ed.intl.format(ec.default.qqePfT, { app: s, server: o, ...u });
                case "bot_removed":
                    return null == u
                        ? ed.intl.format(ec.default.mT7EQG, { app: s, server: o })
                        : ed.intl.format(ec.default["lA/crI"], { app: s, server: o, ...u });
                case "preview_bot_removed":
                    return null == u
                        ? ed.intl.format(ec.default["4LVIeo"], { app: s, server: o })
                        : ed.intl.format(ec.default.YJOV6D, { app: s, server: o, ...u });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == u
                        ? ed.intl.format(ec.default["4VQfid"], { channel: e, server: o })
                        : ed.intl.format(ec.default.RlMIJN, { channel: e, server: o, ...u });
                }
            }
        })(t, l, sb);
    return (0, r.jsx)(y.E, { variant: "text-md/normal", color: "text-default", children: n });
}
var sk = l(744898);
function sw(e) {
    let { onSelect: t, onClose: l = F.Z_, onRestoreVersion: n } = e;
    return (0, r.jsx)(el.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: l,
        "aria-label": ed.intl.string(ed.t.ogxXGq),
        onSelect: t,
        children: (0, r.jsx)(en.rX, {
            children: (0, r.jsx)(en.Dr, {
                id: "restore-version",
                label: ed.intl.string(ec.default.H8Jfhu),
                icon: sk.e,
                action: n,
            }),
        }),
    });
}
var sN = l(986109);
function sA(e, t) {
    (0, iT.F)({ onConfirm: () => t(e) });
}
function sS(e) {
    let {
            projectId: t,
            messages: l,
            emptyState: n,
            ref: a,
            onPickIdea: s,
            onAskForIdeas: u,
            draftHasText: c,
            onApprovePlan: d,
            floatingSettingsMessageId: f,
            onRestoreVersion: h,
        } = e,
        g = i.useRef(null),
        x = i.useCallback(
            (e) => {
                ((g.current = e), "function" == typeof a ? a(e) : null != a && (a.current = e));
            },
            [a],
        ),
        [p, v] = i.useState(null),
        j = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(j.current), []);
    let b = i.useCallback((e) => {
            let t = g.current?.querySelector(`[data-conjure-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                v(e),
                window.clearTimeout(j.current),
                (j.current = window.setTimeout(() => v(null), 1600)));
        }, []),
        k = (0, m.bG)([eE.Ay], () => eE.Ay.getPublishStatus(t)?.state ?? null),
        w = i.useMemo(() => {
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
                                        let t = (0, l8.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(a) &&
                                (l && t.add(a.render_id), (l = !0));
                        }
                        return t;
                    })(e);
                function n(e, l) {
                    t.push({ row: e, groupable: { key: e.key, ...l } });
                }
                for (let t of e) {
                    if ("user" === t.role) {
                        n(
                            { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                            { actor: "user", authorId: t.user_id, boundary: void 0 },
                        );
                        continue;
                    }
                    if ("publish_notice" === t.kind) {
                        let e = `${t.render_id}:publish`;
                        n(
                            { kind: "publishNotice", key: e, message: t, groupStart: !1 },
                            { actor: "assistant", boundary: e },
                        );
                        continue;
                    }
                    if ("project_event" === t.kind) {
                        let e = `${t.render_id}:projectEvent`;
                        n(
                            { kind: "projectEvent", key: e, message: t, groupStart: !1 },
                            { actor: "assistant", boundary: e },
                        );
                        continue;
                    }
                    let e = !(0, ek.BL)(t),
                        a = ah({
                            steps: t.steps,
                            content: t.content,
                            hasProposal: null != t.proposal,
                            hasAttachments: (t.attachments?.length ?? 0) > 0,
                        }),
                        r = a.lastStreamedMessage?.key,
                        i = (0, l8.C6)(t.steps, { turnActive: e }),
                        { lastWork: s, open: o } = (0, l8.CT)(i, { turnActive: e }),
                        u = i.at(-1)?.index,
                        c = !1;
                    for (let d of i) {
                        if (null != d.prose && sv.test(d.prose.content)) c = !0;
                        else if (null != d.prose && d.prose.key !== a.replyKey) {
                            let l = `${t.render_id}:${d.key}`;
                            n(
                                {
                                    kind: "prose",
                                    key: l,
                                    message: t,
                                    groupStart: !1,
                                    content: d.prose.content,
                                    hostsAttachments:
                                        "streamed" === a.attachmentsHost && d.prose.key === r && null != t.attachments,
                                    streaming: e && d.index === u && !d.hasWork,
                                },
                                { actor: "assistant", boundary: l },
                            );
                        }
                        (d.hasWork || d.hasTodos) &&
                            n(
                                {
                                    kind: "activity",
                                    key: `${t.render_id}:work-${d.index}`,
                                    message: t,
                                    groupStart: !1,
                                    segment: d.index,
                                    active: d.index === o,
                                    closed: d.index !== o,
                                    ...(null != d.durationMs ? { segmentDurationMs: d.durationMs } : {}),
                                    reportsDuration: d.index === s,
                                    hostsChecklist: d.hasTodos,
                                    turnActive: l9(t),
                                    checklistSuperseded: d.hasTodos && l.has(t.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let d = sv.test(t.content ?? "");
                    if (
                        (!0 === t.interrupted || c || d
                            ? n(
                                  {
                                      kind: "interrupted",
                                      key: `${t.render_id}:interrupted`,
                                      message: t,
                                      groupStart: !1,
                                  },
                                  { actor: null, boundary: void 0 },
                              )
                            : i.every((e) => !e.hasTodos) &&
                              (t.todos?.length ?? 0) > 0 &&
                              n(
                                  {
                                      kind: "legacyTodos",
                                      key: `${t.render_id}:todos`,
                                      message: t,
                                      groupStart: !1,
                                      checklistSuperseded: l.has(t.render_id),
                                  },
                                  { actor: null, boundary: void 0 },
                              ),
                        (a.showsClosingMessage && !d) ||
                            null != t.proposal ||
                            null != t.clarification ||
                            null != t.restoreProposal ||
                            (!e &&
                                (null != t.ideas ||
                                    null != t.publishCta ||
                                    null != t.secretRequest ||
                                    null != t.settingsRequest)) ||
                            "standalone" === a.attachmentsHost)
                    ) {
                        let l = `${t.render_id}:closing`;
                        n(
                            {
                                kind: "closing",
                                key: l,
                                message: t,
                                groupStart: !1,
                                active: e,
                                attachmentsHost: a.attachmentsHost,
                                content: a.closingContent,
                                sideReply: "side_reply" === t.kind,
                            },
                            {
                                actor: "assistant",
                                boundary: l,
                                separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                            },
                        );
                    }
                }
                let a = (function (e) {
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
                        let e = !r || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || i;
                        (e && ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (l = s.boundary)),
                            n.push(e));
                    }
                    return n;
                })(t.map((e) => e.groupable));
                return t.map((e, t) => ({ ...e.row, groupStart: a[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    if ("unpublished" !== t) return null;
                    for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                    return null;
                })(l, k)),
                l.every((t) => null == t.publishCta || t.id === e)
                    ? l
                    : l.map((t) => (null == t.publishCta || t.id === e ? t : { ...t, publishCta: null }))),
            );
        }, [l, k]),
        N = l.at(-1),
        S = (function (e, t, l) {
            var n;
            let a = (0, lo.Ay)(e),
                r = (0, i_.A)(),
                s = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let l = e[t];
                        if ("publish_notice" !== l.kind && "project_event" !== l.kind) {
                            if ("user" === l.role) return null;
                            if ((0, ek.BL)(l)) return l;
                            if (!(0, ek.B0)(e, t)) break;
                        }
                    }
                    return null;
                })(t),
                o = t.at(-1),
                u = {
                    projectId: e,
                    draftHasText: l,
                    publishing: a?.publishing === !0,
                    drift: a?.isUpdate === !0,
                    messageAt: null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    visible: r,
                },
                [c, d] = i.useState(() => iL(u, Date.now())),
                m = (function (e, t, l) {
                    if (e.projectId !== t.projectId) return iL(t, l());
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
                            let t = Math.min(e.outdatedBackoff + 1, iP.length - 1);
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
                })(c, u, Date.now),
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
                    iR.map((e) => ({
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
                    let l = iD.get(e) ?? new Set();
                    return (
                        iD.set(e, l),
                        l.add(t),
                        () => {
                            (l.delete(t), 0 === l.size && iD.delete(e));
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
        })(t, l, !0 === c),
        C = i.useCallback(
            (e) => {
                switch (e) {
                    case "outdated":
                        return (0, r.jsx)(sp, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, r.jsx)(iF, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, r.jsx)("div", {
                            className: sN.u$,
                            children: (0, r.jsx)(sp, {
                                content: ed.intl.string(ec.default.s96AWB),
                                accessories: (0, r.jsx)(r0, { onAsk: u }),
                            }),
                        });
                }
            },
            [t, u],
        ),
        E = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let l = e[t];
                        if ("assistant" === l.role) {
                            if (!(0, ek.BL)(l) || "plan_implemented" === l.kind) return null;
                            if (null != l.proposal) return l.render_id;
                        }
                    }
                    return null;
                })(l),
            [l],
        ),
        I = i.useMemo(
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
        M =
            (N?.role !== "assistant" || null == N.awaitingUser || null == N.secretRequest
                ? null
                : (0, ek.BL)(N)
                  ? N.awaitingUser
                  : null) ?? void 0,
        T = (0, m.bG)([er.Ay], () => er.Ay.getSettings(t)?.secrets, [t]),
        _ = i.useMemo(
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
                                        t === ed.intl.string(ec.default.UGqnoV) ||
                                        t === ed.intl.string(ec.default.sMQt5O)
                                    );
                                })(s);
                            continue;
                        }
                        let o = s.secretRequest?.fields ?? [];
                        if (0 === o.length || !(0, ek.BL)(s)) continue;
                        let u = i;
                        for (let e of (u && null == l
                            ? n.set(s.render_id, "pending")
                            : u && null != l && o.every((e) => l.has(e.name))
                              ? n.set(s.render_id, "received")
                              : r
                                ? n.set(s.render_id, o.some((e) => a.has(e.name)) ? "superseded" : "inactive")
                                : n.set(s.render_id, "open"),
                        o))
                            a.add(e.name);
                        ((r = !0), (i = !1));
                    }
                    return n;
                })(l, T),
            [l, T],
        );
    if (0 === l.length) {
        if ("loading" === n)
            return (0, r.jsx)("ol", {
                ref: a,
                className: o()(sN.x7, sN.jH),
                "aria-busy": !0,
                children: (0, r.jsx)("li", { className: sN.Ub, children: (0, r.jsx)(A.y, {}) }),
            });
        let e = "unavailable" === n ? ec.default.Td4Sf4 : ec.default.V1QiNz;
        return (0, r.jsx)("ol", {
            ref: a,
            className: sN.x7,
            children: (0, r.jsx)(sC, { role: "assistant", children: (0, r.jsx)(sp, { content: ed.intl.string(e) }) }),
        });
    }
    return (0, r.jsxs)("ol", {
        ref: x,
        className: sN.x7,
        children: [
            w.map((e) => {
                let n = e.message;
                switch (e.kind) {
                    case "user": {
                        let l = null != n.attachments && n.attachments.length > 0 ? n.attachments : null;
                        return (0, r.jsx)(
                            sC,
                            {
                                role: "user",
                                anchorId: n.id,
                                highlighted: p === n.id,
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(sg, {
                                    groupStart: e.groupStart,
                                    content: n.content,
                                    createdAt: n.created_at,
                                    userId: n.user_id,
                                    agentReaction: n.agentReaction,
                                    accessories:
                                        null != l ? (0, r.jsx)(r6.A, { projectId: t, attachments: l }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, r.jsx)(
                            sC,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(sp, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: n.created_at,
                                    accessories:
                                        e.hostsAttachments && null != n.attachments
                                            ? (0, r.jsx)(r6.A, { projectId: t, attachments: n.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, r.jsx)(
                            sC,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(it, {
                                    projectId: t,
                                    steps: n.steps,
                                    segment: e.segment,
                                    active: e.active,
                                    closed: e.closed,
                                    segmentDurationMs: e.segmentDurationMs,
                                    reportsDuration: e.reportsDuration,
                                    hostsChecklist: e.hostsChecklist,
                                    turnActive: e.turnActive,
                                    checklistSuperseded: e.checklistSuperseded,
                                    durationMs: null != n.finished_at ? n.finished_at - n.created_at : void 0,
                                    todos: n.todos,
                                    provisionalTodo: n.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "publishNotice":
                        return (0, r.jsx)(
                            sC,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(sp, {
                                    groupStart: e.groupStart,
                                    content: null == n.publishNotice ? n.content : "",
                                    createdAt: n.created_at,
                                    accessories:
                                        null == n.publishNotice
                                            ? void 0
                                            : (0, r.jsx)(iF, { projectId: t, notice: n.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "projectEvent":
                        return (0, r.jsx)(
                            sC,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, r.jsx)(sp, {
                                    groupStart: e.groupStart,
                                    content: null == n.projectEvent ? n.content : "",
                                    createdAt: n.created_at,
                                    accessories:
                                        null == n.projectEvent
                                            ? void 0
                                            : (0, r.jsx)(sy, { projectId: t, event: n.projectEvent }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, r.jsx)(
                            sC,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(it, { projectId: t, interrupted: !0, steps: n.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, r.jsx)(
                            sC,
                            {
                                role: "assistant",
                                children: (0, r.jsx)(it, {
                                    projectId: t,
                                    steps: [],
                                    active: !1,
                                    checklistSuperseded: e.checklistSuperseded,
                                    todos: n.todos,
                                    provisionalTodo: n.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "closing": {
                        let a =
                                null != h
                                    ? "assistant" !== n.role || null == n.sourceSha
                                        ? null
                                        : {
                                              sha: n.sourceSha,
                                              authorName: "",
                                              authorEmail: "",
                                              authoredAt: new Date(n.created_at).toISOString(),
                                              subject: n.content,
                                          }
                                    : null,
                            i = null != a && null != h ? () => sA(a, h) : void 0,
                            o = n.restoreProposal;
                        return (0, r.jsx)(
                            sC,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != i
                                        ? (e) => {
                                              (0, F.jA)(e, (e) => (0, r.jsx)(sw, { ...e, onRestoreVersion: i }));
                                          }
                                        : void 0,
                                children: (0, r.jsx)(sp, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != i
                                            ? (0, r.jsx)(sr, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, r.jsx)(sw, { onClose: e, onSelect: e, onRestoreVersion: i }),
                                              })
                                            : void 0,
                                    content: e.content,
                                    createdAt: n.created_at,
                                    replyTo: (function (e, t) {
                                        if (null == t) return;
                                        let l = e.find((e) => e.id === t && "user" === e.role);
                                        if (null != l)
                                            return {
                                                id: l.id,
                                                content: l.content,
                                                ...(null != l.user_id ? { userId: l.user_id } : {}),
                                                createdAt: l.created_at,
                                            };
                                    })(l, n.in_reply_to),
                                    onJumpToReplied: null != n.in_reply_to ? () => b(n.in_reply_to) : void 0,
                                    accessories: (0, r.jsx)(il, {
                                        projectId: t,
                                        steps: n.steps,
                                        content: "",
                                        proposal: n.proposal,
                                        planVersion: I.get(n.render_id),
                                        interrupted: !0 === n.interrupted,
                                        hoistedProse: !0,
                                        hoistedAttachmentsHost: e.attachmentsHost,
                                        sideReply: e.sideReply,
                                        sideReplyAcknowledges: n.acknowledges,
                                        active: e.active,
                                        ideas: e.active ? void 0 : n.ideas,
                                        pickedIdeaIds:
                                            null == n.ideas
                                                ? void 0
                                                : (function (e, t, l) {
                                                      let n = new Set();
                                                      for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                          let t = e[a];
                                                          if ("user" === t.role)
                                                              for (let e of l)
                                                                  e.implementation_prompt.trim() === t.content.trim() &&
                                                                      n.add(e.id);
                                                      }
                                                      return n;
                                                  })(l, n, n.ideas),
                                        attachments: n.attachments,
                                        secretRequest: e.active ? void 0 : n.secretRequest,
                                        secretRequestId: n.render_id,
                                        secretRequestAwaiting: n === N ? M : void 0,
                                        secretRequestStatus: _.get(n.render_id),
                                        settingsRequest: e.active || n.id === f ? void 0 : n.settingsRequest,
                                        publishCta: e.active ? null : n.publishCta,
                                        onPickIdea: s,
                                        onApprovePlan: n.render_id === E ? d : void 0,
                                        restoreProposal: o,
                                        onRestoreProposal:
                                            null != o && null != h && n === N
                                                ? () =>
                                                      sA(
                                                          {
                                                              sha: o.sha,
                                                              authorName: "",
                                                              authorEmail: "",
                                                              authoredAt: o.authored_at,
                                                              subject: o.subject,
                                                          },
                                                          h,
                                                      )
                                                : void 0,
                                    }),
                                }),
                            },
                            e.key,
                        );
                    }
                }
            }),
            null != M
                ? (0, r.jsx)(sC, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, r.jsx)(sp, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: ed.intl.string(ec.default.YR8A2v),
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)("li", {
                role: "none",
                className: sN.q3,
                children: (0, r.jsx)(iB, { reminder: S, renderReminder: C }),
            }),
        ],
    });
}
function sC(e) {
    let { role: t, children: l, anchorId: n, highlighted: a = !1, continuation: i = !1, onContextMenu: s } = e;
    return (0, r.jsx)("li", {
        onContextMenu: s,
        "data-role": t,
        "data-conjure-message": n,
        className: o()(sN.xk, { [sN.Qo]: a, [sN.q3]: i }),
        children: l,
    });
}
let sE = [ec.default["AX+5lk"], ec.default.VAU6A7, ec.default["1emysd"], ec.default.EXHX3L, ec.default.ChslmX];
function sI(e) {
    return sE.some((t) => ed.intl.string(t) === e);
}
function sM(e) {
    switch (e) {
        case "connecting":
            return ed.intl.string(ec.default["ECl+Dx"]);
        case "closed":
            return ed.intl.string(ec.default.mQZSp1);
        case "failed":
            return ed.intl.string(ec.default.xzJSZ6);
    }
}
var sT = l(823376),
    s_ = l(187447);
function sP(e) {
    let { activity: t, id: l } = e,
        { text: n, revealing: a } = i8(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            s.current?.scrollToBottom();
        }, [n]),
        (0, r.jsx)("div", {
            id: l,
            role: "tooltip",
            className: s_.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, r.jsx)(l6.Ch, {
                ref: s,
                className: s_.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, r.jsx)("div", {
                    className: o()(r9.PT, s_.bb),
                    "data-conjure-revealing": a ? "true" : void 0,
                    children: ad.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var sR = l(53659);
function sL(e) {
    let {
            activity: t,
            compacting: l = !1,
            saving: n = !1,
            restoring: a = !1,
            recalling: s = !1,
            controlling: u = !1,
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
                ? ec.default["1jqaAc"]
                : a
                  ? ec.default.M4KI5F
                  : r
                    ? sE[0]
                    : n
                      ? ec.default.mKK6wB
                      : l
                        ? ec.default.xnCAaP
                        : s
                          ? ec.default.izrt52
                          : ec.default.L9EDub;
        })({ activity: t, compacting: l, saving: n, restoring: a, recalling: s, controlling: u }),
        p = ed.intl.string(x),
        v = x === sE["0"],
        [j, b] = i.useState(c ?? p);
    n && j !== p && b(p);
    let y = i.useRef(p);
    (i.useEffect(() => {
        y.current = p;
    }, [p]),
        i.useEffect(() => {
            d?.(j);
        }, [j, d]));
    let w = i.useRef(null),
        N = i.useRef(j);
    i.useEffect(() => {
        N.current = j;
    }, [j]);
    let A = i.useRef(v),
        S = i.useRef(0);
    (i.useEffect(() => {
        ((A.current = v), !v && sI(N.current) && b(y.current));
    }, [v]),
        i.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                if (A.current) {
                    var e;
                    ((S.current = sI(N.current) ? S.current + 1 : 0),
                        b(((e = S.current), ed.intl.string(sE[e % sE.length]))));
                } else y.current !== N.current ? b(y.current) : w.current?.play();
            }
            function n() {
                (window.clearTimeout(e), window.clearInterval(t), (e = 0), (t = 0));
            }
            function a() {
                (n(),
                    (e = window.setTimeout(() => {
                        (l(), (t = window.setInterval(l, 2400)));
                    }, 1800)));
            }
            function r() {
                (w.current?.stop(), a());
            }
            return (
                ("u" < typeof document || document.hasFocus()) && a(),
                window.addEventListener("focus", r),
                window.addEventListener("blur", n),
                () => {
                    (n(), window.removeEventListener("focus", r), window.removeEventListener("blur", n));
                }
            );
        }, []));
    let C = null != t && "" !== t.text,
        E = t?.session ?? null,
        I = C && null != E && h === E,
        M = i.useCallback(() => {
            C && null != E && g((e) => (e === E ? null : E));
        }, [C, E]),
        T = i.useCallback(() => g(null), []);
    return (0, r.jsx)(et.Y, {
        targetElementRef: m,
        position: "top",
        align: "left",
        shouldShow: I,
        onRequestClose: T,
        renderPopout: () => (0, r.jsx)(sP, { id: f, activity: t }),
        children: () =>
            (0, r.jsxs)(k.D, {
                innerRef: m,
                className: o()(sR.hF, C && sR.Xd),
                "aria-label": ed.intl.string(a ? ec.default.qqlUiW : v ? sE["0"] : ec.default["Uuj/gh"]),
                "aria-expanded": I,
                "aria-describedby": I ? f : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ed.intl.string(x),
                onClick: M,
                children: [
                    (0, r.jsx)("span", {
                        className: sR.bl,
                        children: (0, r.jsx)(sT.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", {
                        className: sR.xu,
                        "aria-hidden": !!u || !!v || void 0,
                        children: (0, r.jsx)(eL.o, {
                            ref: w,
                            text: j,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: sR.yE,
                        }),
                    }),
                ],
            }),
    });
}
let sD = { second: 1e3, minute: 6e4 };
function s$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let l;
            if (null == e) return;
            let a = sD[t];
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
var sF = l(719374);
function sz(e) {
    let { startedAt: t } = e,
        l = s$(t);
    return (0, r.jsx)(y.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: sF.$,
        "data-conjure-turn-timer": !0,
        children: (0, am.C7)(l),
    });
}
function sO(e) {
    let { startedAt: t } = e,
        l = s$(t, "minute");
    return (0, r.jsx)(N.A, { role: "timer", children: (0, am.Us)(l) });
}
var sU = l(436804);
function sG(e) {
    return e.toLocaleString();
}
function sq(e) {
    let { label: t, usage: l, cached: n = !0 } = e;
    return (0, r.jsxs)("div", {
        className: sU.Q$,
        children: [
            (0, r.jsxs)("div", {
                className: sU.mf,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, r.jsxs)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [sG((0, ee.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, r.jsxs)(y.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    sG(l.input_tokens),
                    " in \xb7 ",
                    sG(l.output_tokens),
                    " out",
                    n
                        ? ` \xb7 ${sG(l.cache_creation_input_tokens)} cache write \xb7 ${sG(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function sB(e) {
    let { project: t } = e,
        l = (0, ee.wU)(t.compaction),
        n = (0, ee.wU)(t.classifier),
        a = (0, ee.wV)(t.orchestrator, t.codegen),
        i = (0, ee.wV)(a, l);
    return (0, r.jsxs)("div", {
        className: sU.si,
        role: "dialog",
        "aria-label": ed.intl.string(ec.default.p5EGzq),
        children: [
            (0, r.jsx)("div", {
                className: sU.Q$,
                children: (0, r.jsxs)("div", {
                    className: sU.mf,
                    children: [
                        (0, r.jsxs)(y.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [sG((0, ee.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, r.jsxs)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(sq, { label: ed.intl.string(ec.default["9Sj3SX"]), usage: a }),
            (0, r.jsx)(sq, { label: ed.intl.string(ec.default.ANCEo3), usage: l }),
            (0, r.jsx)(sq, { label: ed.intl.string(ec.default.ugL6D4), usage: n, cached: !1 }),
            (0, r.jsxs)("div", {
                className: sU.mf,
                children: [
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: ed.intl.string(ec.default["8OUg09"]),
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ee.sj)(i) ? "\u2014" : `${Math.round(100 * (0, ee.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function sH(e) {
    let { project: t } = e,
        l = i.useRef(null);
    return (0, r.jsx)(et.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, r.jsx)(sB, { project: t }),
        children: (e) =>
            (0, r.jsx)(k.D, {
                innerRef: l,
                className: sU.Y$,
                "aria-label": ed.intl.string(ec.default.Z96gxQ),
                ...e,
                children: (0, r.jsx)(aU.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var sK = l(997421);
function sV(e) {
    let t,
        {
            projectId: l,
            thinking: n,
            turnStartedAt: a,
            restoring: s = !1,
            recalling: o = !1,
            thinkingActivity: u,
            compacting: c,
            saving: d,
            projectUsage: m,
            connState: f,
        } = e,
        h = (0, tv.Zv)(l),
        [g, x] = i.useState(null),
        p = i.useCallback((e) => x(sI(e) || e === ed.intl.string(ec.default.mKK6wB) ? null : e), []),
        v =
            null == m
                ? null
                : ((t = (0, ee.a7)(m.cost_usd)),
                  {
                      text: ed.intl.formatToPlainString(ec.default.gMuw5d, { runes: t.toLocaleString() }),
                      aria: ed.intl.formatToPlainString(ec.default.Z4LvGa, { runes: t, turns: m.turns }),
                  }),
        j = n && null != a;
    return (0, r.jsxs)("div", {
        className: sK.jf,
        children: [
            (0, r.jsxs)("div", {
                className: sK.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    n || s || o || h || !0 === d
                        ? (0, r.jsx)(sL, {
                              activity: u,
                              compacting: c,
                              saving: d,
                              restoring: s,
                              recalling: o,
                              controlling: h,
                              spoken: g,
                              onSpokenChange: p,
                          })
                        : null,
                    j ? (0, r.jsx)(sz, { startedAt: a }) : null,
                ],
            }),
            j ? (0, r.jsx)(sO, { startedAt: a }) : null,
            null == m || null == v
                ? null
                : (0, r.jsxs)("span", {
                      className: sK.BP,
                      children: [
                          (0, r.jsx)(y.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": v.aria,
                              children: v.text,
                          }),
                          (0, r.jsx)(sH, { project: m }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, r.jsx)(y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ed.intl.formatToPlainString(ec.default["tCo+ZM"], { status: sM(f) }),
                      "data-conjure-conn": !0,
                      "data-state": f,
                      className: sK.XF,
                      children: sM(f),
                  }),
        ],
    });
}
var sW = l(698638),
    sJ = l(608711);
let sX = [ed.intl.string(ec.default["9w+Chc"]), ed.intl.string(ec.default.WAvmdq), ed.intl.string(ec.default.SKsrzl)];
function sY(e) {
    var t;
    let { projectId: l, restoreState: n, onRestoreVersion: a, onImportProject: s } = e,
        o = (0, m.bG)([ek.Ay], () => ek.Ay.getMessages(l), [l]),
        u = (0, m.bG)([er.Ay], () => er.Ay.getConnState(l), [l]),
        c = (0, m.bG)([er.Ay], () => er.Ay.isChatStopped(l), [l]),
        d = (0, m.bG)([ek.Ay], () => ek.Ay.getProjectUsage(l), [l]),
        f = (0, m.bG)([ek.Ay], () => ek.Ay.getThinkingActivity(l), [l]),
        h = (0, m.bG)([ek.Ay], () => ek.Ay.isCompacting(l), [l]),
        g = (0, m.bG)([ek.Ay], () => ek.Ay.isSaving(l), [l]),
        x = (0, m.bG)([er.Ay], () => er.Ay.getModelSettings(l), [l]),
        p = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(!0),
        [k, w] = i.useState(!0),
        N = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = v.current?.getScrollerNode();
        if (null == e) return;
        let t = N.current;
        b.current
            ? v.current?.scrollToBottom()
            : t?.row.isConnected === !0 && (e.scrollTop += t.row.getBoundingClientRect().top + e.scrollTop - t.top);
        let n = j.current?.firstElementChild;
        ((N.current = null != n ? { row: n, top: n.getBoundingClientRect().top + e.scrollTop } : null),
            e.scrollTop < 600 && (0, er.P6)(l));
    }, [o, l]);
    let A = i.useCallback(() => {
            let e = p.current;
            if (null == e) return;
            let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        C = i.useCallback(() => {
            let e = v.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            b.current = t < 32;
            let n = t > 1;
            w((e) => (!n === e ? e : !n));
            let a = e.getScrollerNode();
            null != a && a.scrollTop < 600 && (0, er.P6)(l);
        }, [l]);
    (i.useLayoutEffect(() => {
        let e = p.current,
            t = j.current;
        if (null == e) return;
        let l = v.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            i = null;
        function s() {
            b.current &&
                (null != i && cancelAnimationFrame(i), (i = requestAnimationFrame(() => v.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let i of t)
                if (i.target === e) {
                    let e = i.contentRect.width;
                    if (e === n) continue;
                    ((n = e), s());
                } else if (i.target === l) {
                    let e = i.contentRect.height;
                    if (e === r) continue;
                    ((r = e), s());
                } else {
                    let e = i.contentRect.height;
                    if (e === a) continue;
                    ((a = e), s());
                }
        });
        return (
            o.observe(e),
            null != l && o.observe(l),
            null != t && o.observe(t),
            () => {
                (o.disconnect(), null != i && cancelAnimationFrame(i));
            }
        );
    }, []),
        i.useEffect(() => {
            (0, er.Hc)(l);
        }, [l]),
        (0, ew.E1)(l));
    let E = te(l),
        I = i.useCallback(
            (e, t) => {
                (0, er.dv)(l, e, t);
            },
            [l],
        ),
        M = i.useCallback(
            (e, t) => {
                0 === E.annotations.length
                    ? I(e, t)
                    : (I(
                          (function (e) {
                              let { annotations: t, metaComment: l, context: n } = e,
                                  a = t.filter((e) => eW(e.comment)),
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
                                      r.push(`${t + 1}. ${eY(e.target)}`),
                                      r.push(
                                          `   Feedback: ${(l = e.comment.trim()).length <= 1e3 ? l : `${l.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = l.trim();
                              return ("" !== i && (r.push(""), r.push(`Note for the whole batch: ${i}`)), r.join("\n"));
                          })({ annotations: E.annotations, metaComment: e, context: E.context }),
                          t,
                      ),
                      e6(l));
            },
            [E, I, l],
        ),
        T = i.useCallback(() => (0, er.fu)(l), [l]),
        _ = i.useCallback((e) => nJ(l, e.implementation_prompt), [l]),
        [P, R] = (function (e) {
            let [t, l] = i.useState(() => au(e)),
                [n, a] = i.useState(e),
                r = n !== e,
                s = r ? au(e) : t;
            return (r && (a(e), l(s)), [s, l]);
        })(l),
        L = i.useCallback(() => I(ed.intl.string(ec.default["t5CN3+"])), [I]),
        D = i.useCallback((e, t, n) => nJ(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        $ = i.useCallback((e) => (0, er.XZ)(l, e), [l]),
        F = i.useCallback((e) => (0, er.vX)(l, e), [l]),
        z = i.useCallback((e) => ij(l, "chat", Array.from(e), F), [l, F]),
        O = i.useCallback(() => nJ(l, ed.intl.string(ec.default.Zc7gML)), [l]),
        U = n?.status === "restoring",
        G = "open" === u && !c && !U,
        q = o[o.length - 1],
        B = null != q && "assistant" === q.role && null != q.proposal,
        [H, K] = i.useState(null),
        V = q?.clarification != null && q.clarification.id !== H ? q.clarification : null,
        W = i.useCallback(() => {
            null != V && K(V.id);
        }, [V]),
        J = (0, m.bG)([er.Ay], () => er.Ay.getSettings(l), [l]),
        [X, Y] = i.useState(null),
        Q =
            null != q &&
            "assistant" === q.role &&
            null != q.settingsRequest &&
            (0, ek.BL)(q) &&
            q.id !== X &&
            ((t = q.settingsRequest),
            null != J &&
                (t.keys ?? []).some((e) => {
                    let t = J.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return J.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = J.values[e];
                    return null == l || "" === l;
                }))
                ? q
                : null,
        Z = Q?.settingsRequest ?? null,
        ee = i.useCallback(() => {
            null != Q && Y(Q.id);
        }, [Q]),
        et = null != Z,
        el = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, m.bG)([ek.Ay], () => ek.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, m.bG)([ek.Ay], () => ek.Ay.isHistoryUnavailable(l), [l]),
            connState: u,
        }),
        en = "loading" === el && 0 === o.length,
        ea = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return sX[e % sX.length];
        }, [l]),
        ei = B ? ed.intl.string(ec.default.Zc7gML) : "greeting" === el && 0 === o.length ? ea : null,
        es = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, ek.BL)(t)) return t;
            }
        }, [o]),
        eo = null != es,
        eu =
            null != es
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = al.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(es)
                : void 0,
        em = B && G ? O : void 0,
        ef = i.useCallback(() => nJ(l, ed.intl.string(ec.default.EMgIuY)), [l]),
        [eh, eg] = i.useState(null),
        [ex, ep] = i.useState(eo);
    (ex !== eo && (ep(eo), eo || eg(null)),
        i.useEffect(() => {
            if (!eo) return;
            let e = v.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eg(null)
                        : eg(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [eo, es?.steps]));
    let ev = i.useMemo(() => (null != es ? (0, ne.b)(es.steps) : ""), [es]),
        ej = i.useMemo(() => (null != es ? ((0, l8.lt)(es.steps) ?? es.todos) : void 0), [es]),
        eb = es?.provisionalTodo,
        ey = null != es && l9(es),
        eN = i.useMemo(() => {
            var e;
            return null != es ? ((e = es.steps), ie((0, l8.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [es]);
    return (0, r.jsxs)("section", {
        ref: p,
        "data-conjure-chat": !0,
        className: sJ.TE,
        children: [
            G
                ? (0, r.jsx)(l7.A, {
                      title: ed.intl.string(ec.default.gy7byi),
                      description: ed.intl.string(ec.default["dkv/WO"]),
                      icons: sW.ir,
                      onDrop: z,
                  })
                : null,
            (0, r.jsx)(nv, {
                onJumpToActivity: A,
                line: ev,
                placement: eo && "top" === eh ? "top" : null,
                todos: ej,
                todosLive: ey,
                provisionalTodo: eb,
                agents: eN,
            }),
            (0, r.jsxs)("div", {
                className: sJ.JX,
                children: [
                    (0, r.jsx)(l6.Ch, {
                        ref: v,
                        onScroll: C,
                        scrollbarGutter: en ? "both-edges" : "stable",
                        className: [sJ.N$, k ? null : sJ.hB, et ? sJ.J9 : null].filter(Boolean).join(" "),
                        children: (0, r.jsx)(sS, {
                            ref: j,
                            projectId: l,
                            messages: o,
                            emptyState: el,
                            floatingSettingsMessageId: Q?.id,
                            onPickIdea: G ? _ : void 0,
                            onAskForIdeas: G ? L : void 0,
                            draftHasText: P,
                            onApprovePlan: G ? ef : void 0,
                            onRestoreVersion: U || eo ? void 0 : a,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: sJ.NJ,
                        children: (0, r.jsx)(sV, {
                            projectId: l,
                            thinking: eo,
                            turnStartedAt: eu,
                            restoring: U,
                            recalling: en,
                            thinkingActivity: f,
                            compacting: h,
                            saving: g,
                            projectUsage: d,
                            connState: u,
                        }),
                    }),
                    null == V
                        ? null
                        : (0, r.jsx)("div", {
                              className: et ? `${sJ.B5} ${sJ.J9}` : sJ.B5,
                              children: (0, r.jsx)(
                                  n8,
                                  { projectId: l, clarification: V, onSubmit: G ? D : void 0, onDismiss: W },
                                  V.id,
                              ),
                          }),
                    null == Z
                        ? null
                        : (0, r.jsx)("div", {
                              className: sJ.B5,
                              children: (0, r.jsx)(at, { projectId: l, request: Z, onDismiss: ee }, Q?.id),
                          }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: sJ.Jx,
                children: [
                    (0, r.jsx)(nv, {
                        onJumpToActivity: A,
                        line: ev,
                        placement: eo && "bottom" === eh ? "bottom" : null,
                        todos: ej,
                        todosLive: ey,
                        provisionalTodo: eb,
                        agents: eN,
                    }),
                    0 === E.annotations.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: sJ.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: ed.intl.formatToPlainString(ec.default["7b49dS"], {
                                          count: E.annotations.length,
                                      }),
                                  }),
                                  (0, r.jsx)(y.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ed.intl.string(ec.default["5zG+CR"]),
                                  }),
                                  (0, r.jsx)(S.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ed.intl.string(ec.default["/zOv9+"]),
                                      onClick: () => e6(l),
                                  }),
                              ],
                          }),
                    (0, r.jsx)(iC, {
                        projectId: l,
                        canSend: G,
                        stopped: c,
                        running: eo,
                        restoring: U,
                        onSend: M,
                        hasPendingContext: E.annotations.length > 0,
                        onInterrupt: G ? T : void 0,
                        onUploadFile: F,
                        onImport: s,
                        onApprove: em,
                        suggestion: ei,
                        questionOpen: null != V || null != Z,
                        modelSettings: x,
                        onModelSettingsChange: $,
                        onDraftHasTextChange: R,
                    }),
                ],
            }),
        ],
    });
}
var sQ = l(624479),
    sZ = l(761508),
    s0 = l(540999);
let s1 = [],
    s2 = [],
    s3 = new Map(),
    s4 = new Map(),
    s5 = new Map(),
    s6 = new Map(),
    s7 = new Map(),
    s8 = new Map(),
    s9 = new Map(),
    oe = new Map();
class ot extends m.Ay.Store {
    getStatus(e) {
        return s3.get(e) ?? null;
    }
    getFetchState(e) {
        return s4.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return s6.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return s8.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return s7.get(e) ?? null;
    }
    getModelCalls(e) {
        return s9.get(e) ?? s1;
    }
    getForceCompactionState(e) {
        return s5.get(e) ?? "idle";
    }
    getTimingTraces(e) {
        return oe.get(e) ?? s2;
    }
    getTimingTrace(e, t) {
        return oe.get(e)?.find((e) => e.id === t) ?? null;
    }
}
let ol = new ot(nR.h, {
    LOGOUT: function () {
        if (
            0 === s3.size &&
            0 === s4.size &&
            0 === s5.size &&
            0 === s6.size &&
            0 === s7.size &&
            0 === s8.size &&
            0 === s9.size &&
            0 === oe.size
        )
            return !1;
        (s3.clear(), s4.clear(), s5.clear(), s6.clear(), s7.clear(), s8.clear(), s9.clear(), oe.clear());
    },
    CONJURE_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        s4.set(t, "loading");
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === s5.get(t);
        n &&
            s5.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === s4.get(t);
        if ((a && s4.set(t, "failed"), !n && !a)) return !1;
    },
    CONJURE_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? s4.set(t, "failed") : (s3.set(t, l), s4.set(t, "loaded"));
    },
    CONJURE_DEBUG_COMPACTION_REPORT: function (e) {
        s6.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_COMPACTION_DECLINED: function (e) {
        s7.set(e.projectId, {
            promptCeiling: e.promptCeiling,
            threshold: e.threshold,
            projected: e.projected,
            headroom: e.headroom,
            retainedMessages: e.retainedMessages,
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_FORCE_COMPACTION_REQUESTED: function (e) {
        let { projectId: t } = e;
        s5.set(t, "pending");
    },
    CONJURE_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        s5.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    CONJURE_DEBUG_MODEL_CALL: function (e) {
        let t = s9.get(e.projectId);
        if (null != t && t.some((t) => t.id === e.id)) return !1;
        let l = {
                id: e.id,
                role: e.role,
                model: e.model,
                stopReason: e.stopReason,
                durationMs: e.durationMs,
                inputTokens: e.inputTokens,
                outputTokens: e.outputTokens,
                cacheReadTokens: e.cacheReadTokens,
                cacheWriteTokens: e.cacheWriteTokens,
                taskId: e.taskId,
                observedAt: e.observedAt,
            },
            n = null == t ? [l] : t.concat(l);
        s9.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    CONJURE_DEBUG_TIMING_TRACE: function (e) {
        let { projectId: t, trace: l } = e,
            n = (oe.get(t) ?? [])
                .filter((e) => e.id !== l.id)
                .concat(l)
                .sort((e, t) => e.started_at - t.started_at);
        oe.set(t, n.slice(-100));
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, ee.aM)(l.total)) return !1;
        s8.set(t, l);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (s3.delete(t),
            s4.delete(t),
            s5.delete(t),
            s6.delete(t),
            s7.delete(t),
            s8.delete(t),
            s9.delete(t),
            oe.delete(t));
    },
});
function on(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function oa(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function or(e) {
    switch (e) {
        case "subagent":
            return ed.intl.string(ec.default.PbKt9r);
        case "context":
            return ed.intl.string(ec.default["tNk/P2"]);
        case "tool":
            return ed.intl.string(ec.default.NBOJcw);
        case "delegated":
            return ed.intl.string(ec.default.QgrFdt);
        default:
            return ed.intl.string(ec.default.LsLVUy);
    }
}
var oi = l(536113);
let os = { started: oi.Vf, ok: oi.mo, error: oi.Sr };
function oo(e) {
    let { status: t } = e;
    return (0, r.jsx)("span", {
        className: `${oi.Om} ${os[t] ?? oi.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return ed.intl.string(ec.default["2wyRDK"]);
                case "error":
                    return ed.intl.string(ec.default["2Cu8n+"]);
                default:
                    return ed.intl.string(ec.default["6kgw6D"]);
            }
        })(t),
    });
}
function ou(e, t) {
    return String(e).padStart(t, "0");
}
function oc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${ou(n.getHours(), 2)}:${ou(n.getMinutes(), 2)}:${ou(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${ou(n.getMilliseconds(), 3)}` : a;
}
let od = ["op", "model", "tool", "setup", "worktree", "sandbox", "build", "platform", "other"],
    om = {
        op: "op",
        ws: "op",
        turn: "op",
        alarm: "op",
        side_chat: "op",
        session: "op",
        step: "op",
        model: "model",
        version_note: "model",
        tool: "tool",
        mcp: "tool",
        sandbox: "sandbox",
        worktree: "worktree",
        build: "build",
        deps: "build",
        api: "platform",
        state: "platform",
        publish: "platform",
        preview: "platform",
        healthcheck: "platform",
        usage: "platform",
        live: "platform",
        replay: "platform",
        template: "setup",
        workspace: "setup",
        declarations: "setup",
        manifest: "setup",
        storage: "setup",
        conversation: "setup",
        runtime: "setup",
        attachments: "setup",
        upstream: "setup",
        remix: "setup",
        repo: "setup",
    };
function of(e) {
    return e.spans.find((e) => null == e.parent) ?? null;
}
function oh(e) {
    return { collapsed: oj(e, (e) => e.depth > 0 && !e.children.some((e) => e.significant)), revealed: new Set() };
}
function og(e) {
    return null == e
        ? ""
        : Object.entries(e)
              .map((e) => {
                  let [t, l] = e;
                  return !0 === l ? t : `${t}=${String(l)}`;
              })
              .join(" ");
}
function ox(e) {
    return e.count > 1 ? e.totalMs : e.end - e.start;
}
function op(e, t) {
    for (let l of (t(e), e.children)) op(l, t);
}
function ov(e) {
    let t = e.name.search(/[.:]/),
        l = -1 === t ? e.name : e.name.slice(0, t),
        n = (-1 === t ? "" : e.name.slice(t + 1))
            .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
            .replace(/_/g, " ")
            .toLowerCase(),
        a = e.attrs?.cmd ?? e.attrs?.model;
    return {
        service: l,
        operation: "string" == typeof a && "" !== a ? `${n} \xb7 ${a}` : n,
        category: om[l] ?? "other",
    };
}
function oj(e, t) {
    let l = new Set();
    return (
        !(function e(n) {
            for (let a of (n.children.length > 0 && t(n) && l.add(n.key), n.children)) e(a);
        })(e),
        l
    );
}
function ob(e) {
    return `${e.name} ${og(e.attrs)}`;
}
function oy(e) {
    let t = new Map();
    for (let l of e.spans) {
        let e = t.get(l.parent) ?? [];
        (e.push(l), t.set(l.parent, e));
    }
    for (let e of t.values()) e.sort((e, t) => e.start - t.start);
    return t;
}
function ok(e, t) {
    return t.end ?? e.reported_at;
}
function ow(e, t, l, n) {
    let a = t
            .map((t) => [Math.max(t.start, l), Math.min(ok(e, t), n)])
            .filter((e) => {
                let [t, l] = e;
                return l > t;
            })
            .sort((e, t) => e[0] - t[0]),
        r = 0,
        i = -1 / 0;
    for (let [e, t] of a) t <= i || ((r += t - Math.max(e, i)), (i = t));
    return r;
}
let oN = {
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
function oA(e) {
    return on(Math.round(e));
}
function oS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function oC(e) {
    return oA(e.count > 1 ? e.totalMs : e.end - e.start);
}
function oE(e) {
    let t = of(e)?.end;
    return null == t ? null : on(t);
}
function oI(e) {
    return [oc(new Date(e.started_at).toISOString()) ?? "", oS(e.spans.length), og(of(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
var oM = l(738188),
    oT = l(430993),
    o_ = l(364840),
    oP = l(224640),
    oR = l(20742);
let oL = { collapsed: new Set(), revealed: new Set() };
var oD = l(872892);
let o$ = {
    op: oD.Q,
    model: oD.i3,
    tool: oD.dH,
    setup: oD.kc,
    worktree: oD.Qx,
    sandbox: oD.QH,
    build: oD.F1,
    platform: oD.Op,
    other: oD.fv,
};
function oF(e) {
    return `conjure-perf-trace-${e}`;
}
function oz(e) {
    let { start: t, end: l, extent: n, barClass: a, duration: i } = e,
        s = (t / n) * 100,
        o = ((l - t) / n) * 100;
    return (0, r.jsxs)("div", {
        className: oD.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, r.jsx)("div", { className: a }),
            (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${oD.p0} ${s + o > 85 ? oD.EU : oD.jh}`,
                children: i,
            }),
        ],
    });
}
function oO(e) {
    let { node: t, extent: l, collapsed: n, selected: a, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = n ? ti._ : tB.a,
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
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "treeitem",
        id: oF(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !n : void 0,
        "aria-selected": a,
        className: `${oD.$y} ${a ? oD.wQ : ""}`,
        onClick: m,
        children: [
            (0, r.jsxs)("div", {
                className: oD.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, r.jsx)(k.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: oD.ai,
                              onClick: f,
                              children: (0, r.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, r.jsx)("span", { className: oD.YJ }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: oD.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, r.jsx)("span", { className: `${oD.nf} ${o$[t.category]}` }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: oD.eu,
                        children: t.service,
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: oD.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, r.jsx)(y.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: oD.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, r.jsx)(oM.WarningIcon, { size: "xs", color: "currentColor", className: oD.ik })
                        : null,
                ],
            }),
            (0, r.jsx)(oz, {
                start: t.start,
                end: t.end,
                extent: l,
                barClass: t.failed
                    ? `${oD.M0} ${oD.Nh}`
                    : t.running
                      ? `${oD.M0} ${oD.rF}`
                      : `${oD.M0} ${o$[t.category]}`,
                duration: oC(t),
            }),
        ],
    });
}
function oU(e) {
    let { row: t, extent: l, selected: n, onReveal: a } = e;
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "treeitem",
        id: oF(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": n,
        className: `${oD.$y} ${n ? oD.wQ : ""}`,
        onClick: () => a(t.parentKey),
        children: [
            (0, r.jsxs)("div", {
                className: oD.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, r.jsx)("span", {
                        className: oD.ai,
                        children: (0, r.jsx)(ti._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, r.jsx)("span", { className: oD.U9 }),
                    (0, r.jsx)("span", { className: `${oD.nf} ${oD.dL}` }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: oD.MQ,
                        children: oS(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, r.jsx)(oz, {
                start: t.start,
                end: t.end,
                extent: l,
                barClass: `${oD.M0} ${oD.ab} ${oD.dL}`,
                duration: oA(t.totalMs),
            }),
        ],
    });
}
function oG(e) {
    let { node: t } = e;
    return null == t
        ? (0, r.jsx)(y.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, r.jsxs)("div", {
              className: oD._0,
              children: [
                  (0, r.jsxs)("div", {
                      className: oD.TQ,
                      children: [
                          (0, r.jsx)("span", { className: `${oD.nf} ${o$[t.category]}` }),
                          (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [
                          { label: "Start", value: `+${oA(e.start)}` },
                          { label: "Duration", value: oC(e) },
                      ];
                      for (let [l, n] of (e.count > 1
                          ? t.push(
                                { label: "Calls", value: String(e.count) },
                                { label: "Longest call", value: oA(e.maxMs) },
                                { label: "Spread over", value: oA(e.end - e.start) },
                            )
                          : e.children.length > 0 && t.push({ label: "Self time", value: oA(e.selfMs) }),
                      Object.entries(e.span.attrs ?? {})))
                          t.push({ label: l, value: String(n) });
                      let l = e.span.waits_on;
                      null != l && t.push({ label: "Waited on", value: `${l.span_name} in ${l.trace_name}` });
                      let n = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      return (
                          n.length > 0 && t.push({ label: "Notes", value: n.join(", ") }),
                          null != e.span.error && t.push({ label: "Error", value: e.span.error }),
                          t
                      );
                  })(t).map((e) => {
                      let { label: t, value: l } = e;
                      return (0, r.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "text-muted", children: t }),
                                  (0, r.jsx)(y.E, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      tabularNumbers: !0,
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
function oq(e) {
    let { trace: t } = e,
        l = (function (e) {
            let t = i.useMemo(
                    () =>
                        null == e
                            ? null
                            : (function (e) {
                                  let t = oy(e);
                                  function l(e) {
                                      return !t.has(e.id) && null != e.end && null == e.error;
                                  }
                                  let n = of(e);
                                  if (null == n) return null;
                                  let a = (function n(a, r, i, s) {
                                          let o = a[0],
                                              u = Math.min(...a.map((e) => e.start)),
                                              c = Math.max(...a.map((t) => ok(e, t))),
                                              d = a.map((t) => ok(e, t) - t.start),
                                              m = 1 === a.length ? (t.get(o.id) ?? []) : [],
                                              f = {
                                                  key: 1 === a.length ? `span-${o.id}` : `fold-${o.id}`,
                                                  depth: r,
                                                  span: o,
                                                  count: a.length,
                                                  start: u,
                                                  end: c,
                                                  totalMs: d.reduce((e, t) => e + t, 0),
                                                  maxMs: Math.max(...d),
                                                  selfMs: c - u - ow(e, m, u, c),
                                                  running: null == o.end,
                                                  failed: null != o.error,
                                                  parallel: a.some((t) =>
                                                      i.some((l) => {
                                                          var n, r, i;
                                                          return (
                                                              !a.includes(l) &&
                                                              ((n = e),
                                                              (r = t),
                                                              (i = l),
                                                              r.start < ok(n, i) && i.start < ok(n, r))
                                                          );
                                                      }),
                                                  ),
                                                  outlivedParent: c > s,
                                                  ...ov(o),
                                                  significant: !1,
                                                  children: [],
                                                  descendants: 0,
                                              },
                                              h = new Map();
                                          for (let e of m) l(e) && h.set(ob(e), (h.get(ob(e)) ?? 0) + 1);
                                          let g = new Set();
                                          for (let e of m) {
                                              let t = ob(e);
                                              if (l(e) && (h.get(t) ?? 0) >= 4) {
                                                  if (g.has(t)) continue;
                                                  g.add(t);
                                                  let e = m.filter((e) => l(e) && ob(e) === t);
                                                  f.children.push(n(e, r + 1, m, c));
                                              } else f.children.push(n([e], r + 1, m, c));
                                          }
                                          return (
                                              (f.descendants = f.children.reduce(
                                                  (e, t) => e + t.count + t.descendants,
                                                  0,
                                              )),
                                              f
                                          );
                                      })([n], 0, [], 1 / 0),
                                      r = 0.1 * (a.end - a.start);
                                  return (
                                      op(a, (e) => {
                                          e.significant = ox(e) >= r;
                                      }),
                                      a
                                  );
                              })(e),
                    [e],
                ),
                [l, n] = i.useState(() => (null == t ? oL : oh(t))),
                [a, r] = i.useState(null),
                s = i.useMemo(() => {
                    let e;
                    return null == t
                        ? []
                        : ((e = []),
                          !(function t(n) {
                              if ((e.push({ kind: "node", key: n.key, node: n }), l.collapsed.has(n.key))) return;
                              let a = l.revealed.has(n.key),
                                  r = [];
                              function i() {
                                  (1 === r.length
                                      ? t(r[0])
                                      : r.length > 1 &&
                                        e.push({
                                            kind: "smaller",
                                            key: `smaller-${r[0].key}`,
                                            parentKey: n.key,
                                            depth: n.depth + 1,
                                            count: r.reduce((e, t) => e + t.count, 0),
                                            start: Math.min(...r.map((e) => e.start)),
                                            end: Math.max(...r.map((e) => e.end)),
                                            totalMs: r.reduce((e, t) => e + ox(t), 0),
                                        }),
                                      (r = []));
                              }
                              for (let e of n.children) a || e.significant ? (i(), t(e)) : r.push(e);
                              i();
                          })(t),
                          e);
                }, [t, l]),
                o = i.useCallback((e) => {
                    n((t) => {
                        let l = new Set(t.collapsed);
                        return (l.has(e) ? l.delete(e) : l.add(e), { ...t, collapsed: l });
                    });
                }, []),
                u = i.useCallback((e) => {
                    n((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                c = i.useCallback(
                    (e) => {
                        let l,
                            a =
                                null == t
                                    ? null
                                    : ((l = null),
                                      op(t, (t) => {
                                          t.key === e && (l = t);
                                      }),
                                      l);
                        null != a &&
                            n((e) => {
                                let t, l;
                                return (
                                    (t = new Set(e.collapsed)),
                                    (l = new Set(e.revealed)),
                                    op(a, (e) => {
                                        (t.delete(e.key), l.add(e.key));
                                    }),
                                    { collapsed: t, revealed: l }
                                );
                            });
                    },
                    [t],
                ),
                d = i.useCallback(() => {
                    null != t && n({ collapsed: new Set(), revealed: oj(t, () => !0) });
                }, [t]),
                m = i.useCallback(() => {
                    null != t && n({ collapsed: oj(t, (e) => e.depth > 0), revealed: new Set() });
                }, [t]),
                f = i.useCallback(() => {
                    null != t && n(oh(t));
                }, [t]),
                h = s.find((e) => e.key === a);
            return {
                rows: s,
                collapsed: l.collapsed,
                selectedKey: a,
                selected: h?.kind === "node" ? h.node : null,
                toggle: o,
                reveal: u,
                expandSubtree: c,
                select: r,
                expandAll: d,
                collapseAll: m,
                reset: f,
            };
        })(t),
        { rows: n, collapsed: a, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: m } = l,
        f = Math.max(1, ...t.spans.map((e) => ok(t, e))),
        h = i.useMemo(
            () =>
                (function (e) {
                    let t = e / 6,
                        l = 10 ** Math.floor(Math.log10(t)),
                        n = [1, 2, 5, 10].map((e) => e * l).find((e) => e >= t) ?? t,
                        a = [];
                    for (let t = 0; t <= e; t += n) a.push(t);
                    return a;
                })(f),
            [f],
        ),
        g = i.useMemo(
            () =>
                (function (e) {
                    let t = oy(e),
                        l = new Map();
                    for (let n of e.spans) {
                        if (null == n.parent) continue;
                        let a = ok(e, n),
                            r = a - n.start - ow(e, t.get(n.id) ?? [], n.start, a),
                            { service: i, operation: s } = ov(n),
                            o = `${i} ${s}`;
                        l.set(o, (l.get(o) ?? 0) + r);
                    }
                    return [...l.entries()]
                        .map((e) => {
                            let [t, l] = e;
                            return { name: t, ms: l };
                        })
                        .sort((e, t) => t.ms - e.ms)
                        .slice(0, 6);
                })(t),
            [t],
        ),
        x = h.length > 1 ? ((h[1] - h[0]) / f) * 100 : 100,
        p = i.useCallback(
            (e) => {
                let t,
                    l = n.findIndex((e) => e.key === o),
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
                    null != t && (u(t.key), document.getElementById(oF(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [a, m, d, n, u, o, c],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(oT.c, {
                children: [
                    (0, r.jsxs)("div", {
                        className: oD.z,
                        children: [
                            (0, r.jsx)(y.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: oE(t) ?? "still running",
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: oI(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, r.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, r.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${oS(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: oD.KE,
                        children: [
                            (0, r.jsx)(S.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: l.reset }),
                            (0, r.jsx)(S.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: l.expandAll,
                            }),
                            (0, r.jsx)(S.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: l.collapseAll,
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                            (0, r.jsx)("div", {
                                className: oD.o1,
                                children: od.map((e) =>
                                    (0, r.jsxs)(
                                        "span",
                                        {
                                            className: oD.fI,
                                            children: [
                                                (0, r.jsx)("span", { className: `${oD.nf} ${o$[e]}` }),
                                                (0, r.jsx)(y.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: oN[e],
                                                }),
                                            ],
                                        },
                                        e,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == o ? void 0 : oF(o),
                        className: oD.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(x) },
                        onKeyDown: p,
                        children: [
                            (0, r.jsxs)("div", {
                                className: oD.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: oD.So,
                                        children: (0, r.jsx)(y.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: oD.c1,
                                        children: h.map((e) =>
                                            (0, r.jsx)(
                                                y.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${oD.io} ${(e / f) * 100 > 85 ? oD.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : oA(e),
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
                                          oO,
                                          {
                                              node: e.node,
                                              extent: f,
                                              collapsed: a.has(e.key),
                                              selected: e.key === o,
                                              onSelect: u,
                                              onToggle: c,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, r.jsx)(oU, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                    0 === g.length
                        ? null
                        : (0, r.jsxs)("div", {
                              className: oD.xZ,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-default",
                                      children: "Most time",
                                  }),
                                  g.map((e) => {
                                      let { name: t, ms: l } = e;
                                      return (0, r.jsx)(
                                          y.E,
                                          {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              tabularNumbers: !0,
                                              children: `${t} ${oA(l)}`,
                                          },
                                          t,
                                      );
                                  }),
                              ],
                          }),
                ],
            }),
            (0, r.jsx)(o_.j, { children: (0, r.jsx)(oG, { node: s }) }),
        ],
    });
}
function oB(e) {
    let { transitionState: t, onClose: l, projectId: n, traceId: a } = e,
        i = (0, m.bG)([ol], () => ol.getTimingTrace(n, a), [n, a]),
        s = i?.name ?? "Perf Trace";
    return (0, r.jsxs)(oP.d, {
        transitionState: t,
        onClose: l,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, r.jsx)(oR.rQ, { title: s }),
            null == i
                ? (0, r.jsx)(oT.c, {
                      children: (0, r.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, r.jsx)(oq, { trace: i }),
        ],
    });
}
function oH(e) {
    let { projectId: t, trace: l } = e,
        n = l.spans.find((e) => null != e.error)?.error,
        a = i.useCallback(() => {
            (0, tt.openModal)((e) => (0, r.jsx)(oB, { ...e, projectId: t, traceId: l.id }));
        }, [t, l.id]);
    return (0, r.jsxs)(k.D, {
        className: oD.nM,
        onClick: a,
        children: [
            (0, r.jsxs)("div", {
                className: oD.sU,
                children: [
                    (0, r.jsx)(oo, {
                        status:
                            l.spans.some((e) => null != e.error) || of(l)?.attrs?.ok === !1
                                ? "error"
                                : l.spans.some((e) => null == e.end)
                                  ? "started"
                                  : "ok",
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: oD._k,
                        children: l.name,
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: oE(l) ?? "still running",
                    }),
                ],
            }),
            (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: oI(l) }),
            null == n
                ? null
                : (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
function oK(e) {
    let { projectId: t } = e,
        l = (0, m.yK)([ol], () => ol.getTimingTraces(t), [t]),
        n = i.useMemo(() => [...l].reverse(), [l]);
    return 0 === l.length
        ? (0, r.jsxs)("div", {
              className: oD.Ie,
              children: [
                  (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: "No perf traces yet" }),
                  (0, r.jsx)(y.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: "Turns and project operations over 100ms record a timing trace here when they finish.",
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: oD.nd,
              children: (0, r.jsx)(l6.Ch, {
                  className: oD.XG,
                  children: (0, r.jsx)("ul", {
                      className: oD.p_,
                      "aria-label": "Perf traces",
                      children: n.map((e) =>
                          (0, r.jsx)("li", { children: (0, r.jsx)(oH, { projectId: t, trace: e }) }, e.id),
                      ),
                  }),
              }),
          });
}
function oV(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function oW(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function oJ(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function oX(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function oY(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function oQ(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function oZ(e) {
    return ed.intl.string("preview" === e ? ec.default["2yLYlG"] : ec.default.eiAi57);
}
let o0 = ["all", "preview", "stable", "web"],
    o1 = new Set(["error", "aborted", "length"]);
function o2(e) {
    switch (e.reason) {
        case "local":
            return ed.intl.string(ec.default.mUeKML);
        case "unconfigured":
            return ed.intl.string(ec.default.bGefb5);
        case "unauthorized":
            return ed.intl.string(ec.default.KLx6Bb);
        default:
            return null != e.detail
                ? ed.intl.formatToPlainString(ec.default.t09Q6q, { detail: e.detail })
                : ed.intl.string(ec.default["t+tG59"]);
    }
}
function o3(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ed.intl.formatToPlainString(ec.default["XO/bN4"], {
              p50: oV(e.memory_p50_bytes ?? 0),
              p999: oV(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let o4 = {
    db: () => ec.default["7l+DFG"],
    db_preview: () => ec.default.FAuffi,
    runtime: () => ec.default["Gkl+ab"],
    runtime_preview: () => ec.default.ynpJzv,
    bot: () => ec.default["5/i0cj"],
    bot_preview: () => ec.default.m2jsnw,
};
var o5 = l(911608),
    o6 = l(177427);
function o7(e) {
    let { generatedAt: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: o6.KE,
        children: [
            (0, r.jsx)("div", {
                className: o6.IQ,
                children:
                    "loading" === l
                        ? (0, r.jsx)(A.y, { type: A.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ed.intl.string(ec.default.ZVByPX),
                            })
                          : null != t
                            ? (0, r.jsx)(y.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ed.intl.formatToPlainString(ec.default.INVO50, { time: oY(t) }),
                              })
                            : null,
            }),
            (0, r.jsx)(S.$, { variant: "secondary", size: "sm", text: ed.intl.string(ec.default.oKEgiu), onClick: n }),
        ],
    });
}
function o8(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("section", {
        className: o6.uW,
        "aria-label": t,
        children: [
            (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "text-muted", className: o6.Gf, children: t }),
            l,
        ],
    });
}
function o9(e) {
    let { label: t, value: l, hint: n, critical: a = !1 } = e;
    return (0, r.jsxs)("div", {
        className: o6.N8,
        children: [
            (0, r.jsxs)("div", {
                className: o6.x7,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: a ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != n && (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
        ],
    });
}
function ue(e) {
    let { label: t, used: l, max: n, formatValue: a } = e,
        i = n > 0 ? Math.min(1, Math.max(0, l / n)) : 0,
        s = i >= 0.9;
    return (0, r.jsxs)("div", {
        className: o6.N8,
        children: [
            (0, r.jsxs)("div", {
                className: o6.x7,
                children: [
                    (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${a(l)} / ${a(n)}`,
                    }),
                ],
            }),
            (0, r.jsx)(o5.z, {
                value: 100 * i,
                valueLabel: `${a(l)} of ${a(n)}`,
                "aria-label": t,
                className: s ? o6.dh : void 0,
            }),
        ],
    });
}
function ut(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, r.jsx)(o9, {
            label: ed.intl.string(ec.default.SXP7pD),
            value: ed.intl.string(ec.default.E5hKVi),
            hint: o2(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, r.jsx)(o9, {
            label: ed.intl.string(ec.default.SXP7pD),
            value: "\u2014",
            hint: ed.intl.string(ec.default.AGvoMJ),
        });
    let n = o3(l);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o9, { label: ed.intl.string(ec.default["H/X+FI"]), value: oW(l.cpu_ms) }),
            null != n && (0, r.jsx)(o9, { label: ed.intl.string(ec.default.lmFmMO), value: n }),
        ],
    });
}
function ul(e) {
    let { analytics: t } = e,
        l = ed.intl.string(ec.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, r.jsx)(o8, {
            title: l,
            children: (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: o2(t) }),
        });
    let n = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? o4[t] : null) ? ed.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, r.jsx)(o8, {
        title: l,
        children:
            0 === n.length
                ? (0, r.jsx)(y.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: ed.intl.string(ec.default.AGvoMJ),
                  })
                : n.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, r.jsx)(
                          o9,
                          {
                              label: l,
                              value: ed.intl.formatToPlainString(ec.default["w/2voO"], { cpu: oW(t.cpu_ms) }),
                              hint: o3(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var un = l(400154);
let ua = [];
function ur(e) {
    let t,
        { call: l } = e,
        { text: n, bad: a } =
            ((t = null != l.stopReason && o1.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? oW(l.durationMs) : null,
                    `${oJ(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${oJ(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, r.jsxs)("div", {
        className: un.p5,
        children: [
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: un.Q5,
                children: oX(l.observedAt),
            }),
            (0, r.jsxs)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: un.qN,
                children: [l.role, " \xb7 ", l.model],
            }),
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: a ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
function ui(e, t) {
    return (0, r.jsx)(o9, {
        label: e,
        value: ed.intl.formatToPlainString(ec.default.yHJxuP, { count: oJ((0, ee.aM)(t)) }),
        hint: `${oJ(t.input_tokens)} in \xb7 ${oJ(t.output_tokens)} out \xb7 ${oJ(t.cache_read_input_tokens)} cache read`,
    });
}
function us(e) {
    let { projectId: t, status: l, fetchState: n, onRefresh: a, traceVisible: s = !1 } = e,
        o = (0, m.bG)([ol], () => ol.getLastTurnUsage(t), [t]),
        u = (0, m.bG)([ol], () => ol.getLastCompaction(t), [t]),
        c = (0, m.bG)([ol], () => ol.getLastCompactionDecline(t), [t]),
        d = (0, m.bG)([ol], () => ol.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, er.Lj)(t), [t]),
        h = i.useCallback(() => (0, er.Lj)(t, !0), [t]),
        g = (0, m.bG)([ol], () => (s ? ua : ol.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        v = l?.agent?.session ?? null,
        j = u?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, r.jsxs)("div", {
        className: un.Mf,
        children: [
            (0, r.jsx)(o7, { generatedAt: l?.generated_at ?? null, fetchState: n, onRefresh: a }),
            (0, r.jsx)(o8, {
                title: ed.intl.string(ec.default.JghNal),
                children:
                    null == x
                        ? (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ed.intl.string(ec.default.s0U5Fv),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(o9, {
                                      label: ed.intl.string(ec.default["9nqym2"]),
                                      value: oJ((0, ee.a7)(x.cost_usd)),
                                      hint: ed.intl.formatToPlainString(ec.default.NCdUIh, { count: oJ(x.turns) }),
                                  }),
                                  ui(ed.intl.string(ec.default.xtxP0e), x.orchestrator),
                                  ui(ed.intl.string(ec.default["9Sj3SX"]), x.codegen),
                                  ui(ed.intl.string(ec.default.ANCEo3), (0, ee.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, r.jsx)(o9, {
                                          label: ed.intl.string(ec.default.SQHm7C),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${oJ(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, r.jsx)(o8, {
                title: ed.intl.string(ec.default.dZHPE5),
                children:
                    null == o
                        ? (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: ed.intl.string(ec.default.DfVjal),
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  ui(ed.intl.string(ec.default["7X3i9d"]), o.total),
                                  (0, r.jsx)(o9, {
                                      label: ed.intl.string(ec.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, ee.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, r.jsxs)(o8, {
                title: ed.intl.string(ec.default.NbRk9a),
                children: [
                    null != u && null != j
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(ue, {
                                      label: ed.intl.string(ec.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: oJ,
                                  }),
                                  (0, r.jsx)(o9, {
                                      label: ed.intl.string(ec.default.mRbSns),
                                      value: `${oJ(u.tokensBefore)} \u{2192} ${oJ(u.tokensAfter)}`,
                                      hint: ed.intl.formatToPlainString(ec.default.Vq3skS, {
                                          count: oJ(u.retainedMessages),
                                          time: oY(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? ed.intl.formatToPlainString(ec.default.GMLCNv, { ceiling: oJ(j) })
                                      : ed.intl.string(ec.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, r.jsx)(o9, {
                            label: ed.intl.string(ec.default["4BX5KK"]),
                            value: `${oJ(c.projected)} / ${oJ(c.threshold)}`,
                            critical: !0,
                            hint: ed.intl.formatToPlainString(ec.default["6ngCax"], { time: oY(c.observedAt) }),
                        }),
                    (0, r.jsxs)("div", {
                        className: un.Lj,
                        children: [
                            (0, r.jsx)(S.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ed.intl.string(ec.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: f,
                            }),
                            (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof d && "compacted" !== d.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ed.intl.string(ec.default.wox6Ev);
                                    if ("pending" === e) return ed.intl.string(ec.default.OcPHQ1);
                                    let t = oY(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ed.intl.formatToPlainString(ec.default.BhRjZZ, { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? ec.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? ec.default.YZb4hK
                                              : ec.default.ZoUSVK;
                                    return ed.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(d),
                            }),
                            "object" == typeof d &&
                                !0 === d.pendingTurn &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(S.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: ed.intl.string(ec.default.ZxG2AI),
                                            onClick: h,
                                        }),
                                        (0, r.jsx)(y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: ed.intl.string(ec.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, r.jsx)(o8, {
                    title: ed.intl.string(ec.default.TkTRdW),
                    children:
                        0 === g.length
                            ? (0, r.jsx)(y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: ed.intl.string(ec.default["r3/FhI"]),
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      g
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, r.jsx)(ur, { call: e }, e.id)),
                                      g.length > 30 &&
                                          (0, r.jsx)(y.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: ed.intl.formatToPlainString(ec.default["uZ9P/O"], {
                                                  shown: 30,
                                                  total: g.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != v || l?.analytics != null) &&
                (0, r.jsxs)(o8, {
                    title: ed.intl.string(ec.default.EsSzCS),
                    children: [
                        null != v &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(o9, {
                                        label: ed.intl.string(ec.default.CLXHAs),
                                        value: oY(v.instance_since),
                                        hint: ed.intl.string(ec.default.UCwUEX),
                                    }),
                                    (0, r.jsx)(o9, {
                                        label: ed.intl.string(ec.default["8V8e1Z"]),
                                        value: oJ(v.sockets),
                                    }),
                                    (0, r.jsx)(o9, {
                                        label: ed.intl.string(ec.default["4pBzYW"]),
                                        value: v.turn_inflight
                                            ? ed.intl.string(ec.default.Wv025I)
                                            : ed.intl.string(ec.default["7/lsFY"]),
                                    }),
                                    v.queued_messages > 0 &&
                                        (0, r.jsx)(o9, {
                                            label: ed.intl.string(ec.default["3oUYnv"]),
                                            value: oJ(v.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, r.jsx)(ut, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, r.jsxs)(o8, {
                    title: ed.intl.string(ec.default["LEIhp/"]),
                    children: [
                        (0, r.jsx)(o9, {
                            label: ed.intl.string(ec.default.IlDBN3),
                            value: oJ(p.max_subagent_iterations),
                        }),
                        (0, r.jsx)(o9, {
                            label: ed.intl.string(ec.default["ZdzKR+"]),
                            value: ed.intl.formatToPlainString(ec.default.yHJxuP, {
                                count: oJ(p.context_window_tokens),
                            }),
                        }),
                        (0, r.jsx)(o9, {
                            label: ed.intl.string(ec.default.cIhN2W),
                            value: ed.intl.formatToPlainString(ec.default.yHJxuP, {
                                count: oJ(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, r.jsx)(o9, {
                            label: ed.intl.string(ec.default["+fOn/q"]),
                            value: oJ(p.max_user_message_chars),
                        }),
                        (0, r.jsx)(o9, { label: ed.intl.string(ec.default.kIHga0), value: oJ(p.max_build_attempts) }),
                        (0, r.jsx)(o9, { label: ed.intl.string(ec.default.Iw03yW), value: oJ(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var uo = l(237528),
    uu = l(629584),
    uc = l(683438),
    ud = l(531893);
function um(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, r.jsx)("div", {
              className: ud.ut,
              children: (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: ed.intl.string(ec.default.h1SE6R),
              }),
          });
}
function uf(e) {
    let { state: t, emptyTitle: l, emptyBody: n } = e;
    return "failed" === t.status
        ? (0, r.jsxs)("div", {
              className: ud.qf,
              children: [
                  (0, r.jsx)(y.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: ed.intl.string(ec.default.h1SE6R),
                  }),
                  (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ed.intl.string(ec.default["8SErdg"]),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: ud.qf,
              children: [
                  (0, r.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
              ],
          });
}
function uh(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, r.jsx)("div", {
              className: ud.ps,
              children: (0, r.jsx)(y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: ed.intl.string(ec.default.V7Ri8H),
              }),
          })
        : null;
}
var ug = l(109079);
let ux = i.memo(function (e) {
    var t;
    let { entry: l, showSource: n } = e,
        [a, s] = i.useState(!1),
        o = i.useId(),
        u = i.useMemo(
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
        className: ug.vK,
        children: [
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ug.Mt,
                selectable: !0,
                children: oX(l.ts),
            }),
            (0, r.jsx)(y.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = l.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: ug.dm,
                children: l.level,
            }),
            (0, r.jsxs)("div", {
                className: ug.t4,
                children: [
                    n &&
                        null != l.source &&
                        (0, r.jsx)("span", { className: ug.Cq, children: (0, r.jsx)(uo.v, { text: l.source }) }),
                    null != l.kind &&
                        (0, r.jsx)("span", {
                            className: ug.Cq,
                            title: l.build ?? void 0,
                            children: (0, r.jsx)(uo.v, {
                                text: ed.intl.string(ec.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, r.jsxs)(y.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, r.jsxs)(k.D, {
                                      className: ug.Pq,
                                      "aria-expanded": a,
                                      "aria-controls": o,
                                      "aria-label": ed.intl.string(ec.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          a
                                              ? (0, r.jsx)(tB.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, r.jsx)(ti._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, r.jsxs)(y.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  ed.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? ec.default.kUhyUv
                                                          : ec.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  a &&
                                      (0, r.jsx)(y.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: ug.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, r.jsx)(y.E, {
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
function up(e) {
    let { projectId: t } = e,
        l = (0, m.bG)([eE.Ay], () => eE.Ay.getLogs(t), [t]),
        n = (0, m.bG)([eE.Ay], () => eE.Ay.getHistoryState(t, "logs")),
        [a, s] = i.useState("all"),
        [o, u] = i.useState(""),
        c = i.useMemo(() => {
            let e = o.trim().toLowerCase();
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
        }, [l, a, o]),
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
                o0.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return oZ(e);
                            case "web":
                                return ed.intl.string(ec.default.IVzfVV);
                            default:
                                return ed.intl.string(ec.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, r.jsxs)("div", {
        className: ug.$F,
        children: [
            (0, r.jsxs)("div", {
                className: ug.y4,
                children: [
                    (0, r.jsx)(uu.I, {
                        look: "pill",
                        "aria-label": ed.intl.string(ec.default.MhvyUU),
                        options: g,
                        value: a,
                        onChange: (e) => s(e.value),
                    }),
                    (0, r.jsx)("div", {
                        className: ug.KT,
                        children: (0, r.jsx)(uc.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: ed.intl.string(ec.default["m2+37Y"]),
                            "aria-label": ed.intl.string(ec.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, r.jsx)(um, { state: n }),
            (0, r.jsxs)(l6.Ch, {
                ref: d,
                onScroll: h,
                overflow: "auto",
                className: ug.sx,
                children: [
                    (0, r.jsx)(uh, { state: n }),
                    0 === l.length
                        ? (0, r.jsx)(uf, {
                              state: n,
                              emptyTitle: ed.intl.string(ec.default.S7qlPG),
                              emptyBody: ed.intl.string(ec.default.nD0S9z),
                          })
                        : 0 === c.length
                          ? (0, r.jsx)(y.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ed.intl.string(ec.default["4SIdrX"]),
                            })
                          : c.map((e) => (0, r.jsx)(ux, { entry: e.log, showSource: "all" === a }, e.key)),
                ],
            }),
        ],
    });
}
function uv(e) {
    let { title: t, preview: l, stable: n, renderEnv: a } = e,
        s = [];
    return (
        null != l && s.push((0, r.jsx)(i.Fragment, { children: a("preview", l) }, "preview")),
        null != n && s.push((0, r.jsx)(i.Fragment, { children: a("stable", n) }, "stable")),
        (0, r.jsx)(o8, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, r.jsx)(y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: ed.intl.string(ec.default.umcjif),
                      }),
        })
    );
}
function uj(e) {
    var t;
    let { env: l, bot: n } = e;
    return n.ever_started
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o9, {
                      label: ed.intl.formatToPlainString(ec.default["01ZMS4"], { env: oZ(l) }),
                      value: ((t = n.connected), ed.intl.string(t ? ec.default.Wv025I : ec.default["7/lsFY"])),
                      critical: !n.connected && null != n.fatal_reason,
                      hint: n.fatal_reason ?? (n.connected ? void 0 : (n.last_start_reason ?? void 0)),
                  }),
                  (0, r.jsx)(o9, {
                      label: ed.intl.string(ec.default["z1dh+F"]),
                      value: oJ(n.events_received),
                      hint:
                          null != n.last_event_type && null != n.last_event_at
                              ? `${n.last_event_type} \xb7 ${oY(n.last_event_at)}`
                              : void 0,
                  }),
                  (0, r.jsx)(o9, { label: ed.intl.string(ec.default.Iz5GnJ), value: oJ(n.guild_count) }),
                  (0, r.jsx)(o9, {
                      label: ed.intl.string(ec.default["7UqtNv"]),
                      value: oJ(n.reconnects),
                      hint:
                          null != n.last_close_code && null != n.last_close_at
                              ? ed.intl.formatToPlainString(ec.default.MasSly, {
                                    code: n.last_close_code,
                                    time: oY(n.last_close_at),
                                })
                              : void 0,
                  }),
                  n.dispatch_errors > 0 &&
                      (0, r.jsx)(o9, {
                          label: ed.intl.string(ec.default["x3+JXJ"]),
                          value: oJ(n.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, r.jsx)(o9, { label: oZ(l), value: ed.intl.string(ec.default.lTHQss) });
}
function ub(e) {
    let { env: t, metrics: l } = e,
        n = l.status_4xx + l.status_5xx;
    return (0, r.jsx)(o9, {
        label: oZ(t),
        value: ed.intl.formatToPlainString(ec.default["Xq+wHT"], {
            requests: oJ(l.requests),
            failures: oJ(n + l.errors),
        }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? ed.intl.formatToPlainString(ec.default["o/ZBm4"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: oY(l.last_failure.at),
                  })
                : ed.intl.formatToPlainString(ec.default["7KlGT6"], { time: oY(l.since) }),
    });
}
function uy(e) {
    let { env: t, runtime: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o9, {
                label: ed.intl.formatToPlainString(ec.default["92gVTm"], { env: oZ(t) }),
                value: oJ(l.connections),
            }),
            l.schedules.map((e) =>
                (0, r.jsx)(
                    o9,
                    {
                        label: ed.intl.formatToPlainString(ec.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ed.intl.formatToPlainString(ec.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ed.intl.formatToPlainString(ec.default.wxAWNv, { time: oY(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function uk(e) {
    let { env: t, metrics: l } = e;
    return (0, r.jsx)(o9, {
        label: oZ(t),
        value: ed.intl.formatToPlainString(ec.default.suAOj9, { calls: oJ(l.calls), errors: oJ(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function uw(e) {
    let { title: t, metrics: l, limits: n } = e;
    if (null == l || 0 === l.requests)
        return (0, r.jsx)(o8, {
            title: t,
            children: (0, r.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ed.intl.string(ec.default["Noami/"]),
            }),
        });
    let a = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, r.jsxs)(o8, {
        title: t,
        children: [
            (0, r.jsx)(o9, {
                label: ed.intl.string(ec.default.xtD4Zp),
                value: oJ(l.requests),
                hint: ed.intl.formatToPlainString(ec.default["7KlGT6"], { time: oY(l.since) }),
            }),
            (0, r.jsx)(o9, { label: ed.intl.string(ec.default.gfRhR3), value: oJ(l.errors), critical: l.errors > 0 }),
            i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(ue, {
                              label: ed.intl.string(ec.default.LEJ5r3),
                              used: l.cpu_ms_max,
                              max: n.cpu_ms_per_request,
                              formatValue: oW,
                          }),
                          (0, r.jsx)(o9, {
                              label: ed.intl.string(ec.default.mSKImM),
                              value: oW(a),
                              hint: ed.intl.formatToPlainString(ec.default.JqMU05, {
                                  total: oW(l.cpu_ms_total),
                                  wall: oW(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, r.jsx)(o9, {
                      label: ed.intl.string(ec.default.LEJ5r3),
                      value: ed.intl.string(ec.default["2Ekb2b"]),
                      hint: ed.intl.string(ec.default.G0aq7i),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, r.jsx)(o9, { label: ed.intl.string(ec.default.xvmL1D), value: oW(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, r.jsx)(o9, {
                    label: ed.intl.string(ec.default["4sQYwH"]),
                    value: oJ(l.exceeded_cpu),
                    critical: !0,
                }),
            (0, r.jsx)(o9, {
                label: ed.intl.string(ec.default.bQenOy),
                value: oJ(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: ed.intl.formatToPlainString(ec.default["5jIZwv"], { limit: `${n.memory_mb} MB` }),
            }),
            null != l.build && (0, r.jsx)(o9, { label: ed.intl.string(ec.default.xgpn4Y), value: oQ(l.build) }),
        ],
    });
}
function uN(e) {
    let { status: t } = e,
        { stable: l, preview: n, shared_data: a } = t.storage,
        s = t.worker.limits,
        o = a
            ? [{ key: "shared", label: ed.intl.string(ec.default.V5kbaH), metrics: l }]
            : [
                  { key: "preview", label: ed.intl.string(ec.default["2yLYlG"]), metrics: n },
                  { key: "stable", label: ed.intl.string(ec.default.eiAi57), metrics: l },
              ];
    return (0, r.jsx)(o8, {
        title: ed.intl.string(ec.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: l, metrics: n } = e;
            return null == n
                ? (0, r.jsx)(o9, { label: l, value: "\u2014" }, t)
                : (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)(o9, {
                                  label: ed.intl.formatToPlainString(ec.default.u7kJJ4, { env: l }),
                                  value: oV(n.r2_bytes),
                                  hint: ed.intl.formatToPlainString(
                                      n.r2_truncated ? ec.default.lH0oQw : ec.default.m9h02S,
                                      { count: oJ(n.r2_objects) },
                                  ),
                              }),
                              null != n.db_bytes &&
                                  (0, r.jsx)(ue, {
                                      label: ed.intl.formatToPlainString(ec.default.mnbPqt, { env: l }),
                                      used: n.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: oV,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function uA(e) {
    let { status: t, fetchState: l, onRefresh: n } = e;
    return (0, r.jsxs)("div", {
        className: un.Mf,
        children: [
            (0, r.jsx)(o7, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: n }),
            null != t &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(uw, {
                            title: ed.intl.string(ec.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uw, {
                            title: ed.intl.string(ec.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, r.jsx)(uN, { status: t }),
                        null != t.bot &&
                            (0, r.jsx)(uv, {
                                title: ed.intl.string(ec.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uj, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, r.jsx)(uv, {
                                title: ed.intl.string(ec.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, r.jsx)(ub, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, r.jsx)(uv, {
                                title: ed.intl.string(ec.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uy, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, r.jsx)(uv, {
                                title: ed.intl.string(ec.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, r.jsx)(uk, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, r.jsx)(ul, { analytics: t.analytics }),
                        (0, r.jsxs)(o8, {
                            title: ed.intl.string(ec.default.fQMpFp),
                            children: [
                                (0, r.jsx)(o9, {
                                    label: ed.intl.string(ec.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? oQ(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, r.jsx)(o9, {
                                    label: ed.intl.string(ec.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? oQ(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var uS = l(761929),
    uC = l(382541);
let uE = new Map(),
    uI = new Map(),
    uM = 0,
    uT = 0;
async function u_(e, t, l) {
    let n = uM,
        a = uE.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < uT) return { status: "forbidden" };
    let r = uI.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, uC.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((uT = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== uM) return { status: "failed" };
            var l = o.rich;
            for (uE.set(t, l); uE.size > 100;) {
                let e = uE.keys().next();
                if (!0 === e.done) break;
                uE.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    uI.set(t, i);
    let s = await i;
    return (uI.get(t) === i && uI.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function uP() {
    ((uM += 1), uE.clear(), uI.clear(), (uT = 0));
}
function uR(e) {
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
let uL = ["model", "tool", "subagent", "delegated", "context"];
function uD(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(uR(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function u$(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let uF = {
    model: "blurpleLight",
    subagent: "greenLight",
    context: "grayLight",
    tool: "grayMedium",
    delegated: "orangeLight",
};
function uz(e) {
    let { category: t } = e;
    return (0, r.jsx)(uo.v, { text: or(t), variant: uF[t] });
}
var uO = l(28863);
let uU = ["arguments", "result", "usage", "diagnostics"];
function uG(e) {
    let { label: t, value: l } = e;
    return (0, r.jsxs)("div", {
        className: oi.wV,
        children: [
            (0, r.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", className: oi.D6, children: t }),
            (0, r.jsx)("div", { className: oi.zL, children: l }),
        ],
    });
}
function uq(e) {
    let { label: t, value: l } = e;
    return (0, r.jsx)(uG, {
        label: t,
        value: (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function uB(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: oi.WA, children: t });
}
function uH(e) {
    let { title: t, children: l } = e,
        n = i.useId();
    return (0, r.jsxs)("section", {
        "aria-labelledby": n,
        className: oi.xd,
        children: [
            (0, r.jsx)(y.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: n,
                className: oi.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function uK(e) {
    let { title: t, children: l } = e;
    return (0, r.jsxs)("details", {
        className: oi.XK,
        children: [
            (0, r.jsxs)("summary", {
                className: oi.It,
                children: [
                    (0, r.jsx)(ti._, { className: oi.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, r.jsx)(y.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, r.jsx)("div", { className: oi.bG, children: l }),
        ],
    });
}
function uV(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, r.jsx)(uG, {
            label: t.key,
            value: (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? ed.intl.formatToPlainString(ec.default.ib7All, { count: t.chars })
            : null != t.items
              ? ed.intl.formatToPlainString(ec.default.cIqKbA, { count: t.items })
              : null;
    return (0, r.jsx)(uG, {
        label: t.key,
        value: (0, r.jsxs)("div", {
            className: oi.Kv,
            children: [
                (0, r.jsx)(y.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return ed.intl.string(ec.default["6oDpz5"]);
                            case "content":
                                return ed.intl.string(ec.default.kSGhxQ);
                            default:
                                return ed.intl.string(ec.default.JwGtRz);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == l
                    ? null
                    : (0, r.jsx)(y.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: l,
                      }),
            ],
        }),
    });
}
function uW(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: oi.QR,
                      children: (0, r.jsx)(uo.v, { text: ed.intl.string(ec.default.LRIpHQ), variant: "orangeLight" }),
                  }),
                  t.map((e) =>
                      (0, r.jsx)(
                          uG,
                          {
                              label: e.key,
                              value: (0, r.jsxs)("div", {
                                  className: oi.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: oi.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: ed.intl.string(ec.default["+kQ+K3"]),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, r.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? ed.intl.string(ec.default.ijkkUh)
                                                        : ed.intl.formatToPlainString(ec.default.PRt8I0, {
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
function uJ(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : ed.intl.string(
                      "loading" === t.status
                          ? ec.default.SKbSyo
                          : "unavailable" === t.status
                            ? ec.default.tdq5Zn
                            : ec.default["Dw1JW/"],
                  );
    return null == l
        ? null
        : (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-subtle", className: oi.E7, children: l });
}
function uX(e) {
    let { projectId: t, entry: l, onClose: n, parent: a, onSelect: s, childCount: o } = e,
        u = (function (e) {
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
                uU.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != a }),
        c = (function (e, t) {
            let [l, n] = i.useState(null);
            if (
                (i.useEffect(() => {
                    if (null == t || null != uE.get(t)) return;
                    let l = new AbortController();
                    return (
                        u_(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = uE.get(t);
            return null != a ? { status: "loaded", rich: a } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        d = "model" === l.kind ? l.model : l.tool,
        m = oc(l.startedAt, "millis"),
        f = uR(l),
        h = i.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        );
    return (0, r.jsxs)(l6.Ch, {
        className: oi._0,
        onKeyDown: h,
        role: "region",
        "aria-label": ed.intl.formatToPlainString(ec.default.Qiaeyz, { name: d }),
        children: [
            (0, r.jsx)("div", {
                className: oi.sy,
                children: (0, r.jsxs)("div", {
                    className: oi.HI,
                    children: [
                        (0, r.jsx)(oo, { status: l.status }),
                        (0, r.jsx)(uz, { category: f }),
                        (0, r.jsx)(y.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: oi.kc,
                            children: d,
                        }),
                        (0, r.jsx)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: oi.l5,
                            children: null == l.durationMs ? ed.intl.string(ec.default["2wyRDK"]) : on(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: oi.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, r.jsxs)(uH, {
                      title: ed.intl.string(ec.default["G/4JST"]),
                      children: [
                          (l.fields ?? []).map((e) => (0, r.jsx)(uV, { field: e }, e.key)),
                          c?.status === "loaded" && null != c.rich.args
                              ? (0, r.jsx)(uW, { entries: c.rich.args })
                              : null,
                          (0, r.jsx)(uJ, { detail: c }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, r.jsxs)(uH, {
                      title: ed.intl.string(ec.default.Dgg25Y),
                      children: [
                          (0, r.jsx)(uq, {
                              label: ed.intl.string(ec.default["U+OQCo"]),
                              value: ed.intl.formatToPlainString(ec.default.ib7All, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, r.jsx)(uq, {
                                    label: ed.intl.string(ec.default["MQYS+n"]),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, r.jsx)(uG, {
                                    label: ed.intl.string(ec.default.t7GJFc),
                                    value: (0, r.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: ed.intl.string(ec.default.ijkkUh),
                                    }),
                                }),
                          c?.status === "loaded" && null != c.rich.result
                              ? (0, r.jsx)(uW, { entries: c.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, r.jsxs)(uH, {
                      title: ed.intl.string(ec.default.NXmRw1),
                      children: [
                          (0, r.jsxs)(uB, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, r.jsx)(uq, {
                                            label: ed.intl.string(ec.default.iq3T1q),
                                            value: ed.intl.formatToPlainString(ec.default["6GQUgQ"], {
                                                tokens: oa(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, r.jsx)(uq, {
                                            label: ed.intl.string(ec.default.ZELAZn),
                                            value: ed.intl.formatToPlainString(ec.default.Te7mPn, {
                                                system: oa(l.systemTokens),
                                                tools: oa(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: oa(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, r.jsx)(uq, {
                                            label: ed.intl.string(ec.default["LENc/T"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, r.jsx)(uq, {
                                            label: ed.intl.string(ec.default.ewRHwx),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, r.jsx)(uq, {
                                            label: ed.intl.string(ec.default.heVFQD),
                                            value: ed.intl.formatToPlainString(ec.default.VO3gdd, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, r.jsx)(uq, {
                                            label: ed.intl.string(ec.default.aBw2Vm),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: oi.E7,
                              children: ed.intl.string(ec.default["foF/Bc"]),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: oi.E7,
                      children: ed.intl.string(ec.default.o24IFK),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, r.jsx)(uK, {
                      title: ed.intl.string(ec.default["dix/W4"]),
                      children: (0, r.jsxs)(uB, {
                          children: [
                              null == a
                                  ? null
                                  : (0, r.jsx)(uG, {
                                        label: ed.intl.string(ec.default.soPsOJ),
                                        value: (0, r.jsx)(uO.Anchor, {
                                            onClick: () => s(a.id),
                                            children: (0, r.jsx)(y.E, {
                                                tag: "span",
                                                variant: "text-xs/normal",
                                                color: "none",
                                                children: "model" === a.kind ? a.model : a.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, r.jsx)(uq, {
                                        label: ed.intl.string(ec.default.kNZBxr),
                                        value: ed.intl.formatToPlainString(ec.default["6LoCUh"], { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, r.jsx)(uq, { label: ed.intl.string(ec.default.bL1r5J), value: l.turnId }),
                              (0, r.jsx)(uq, { label: ed.intl.string(ec.default.Ndwr7X), value: l.id }),
                              null == m ? null : (0, r.jsx)(uq, { label: ed.intl.string(ec.default.sO8ghW), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, r.jsx)(uq, { label: ed.intl.string(ec.default.VfYxPF), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(y.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: oi.Hm,
                                                children: ed.intl.string(ec.default.mSm8iy),
                                            }),
                                            l.schema.map((e) =>
                                                (0, r.jsx)(
                                                    uq,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? ed.intl.formatToPlainString(ec.default["6aSRPA"], {
                                                                  type: e.type,
                                                              })
                                                            : ed.intl.formatToPlainString(ec.default.q2B975, {
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
            (0, r.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: oi.E7,
                children: ed.intl.string(ec.default.FloyTQ),
            }),
        ],
    });
}
let uY = { model: oi.WI, subagent: oi.uM, context: oi.eH, tool: oi.pw, delegated: oi.C8 };
function uQ(e) {
    let { entries: t } = e,
        l = i.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = uR(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return uL.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        n = l.reduce((e, t) => e + t.ms, 0);
    return (0, r.jsxs)("div", {
        className: oi.M0,
        children: [
            (0, r.jsx)("div", {
                className: oi.pZ,
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
                                            className: `${oi.dL} ${uY[t]}`,
                                            style: { "--custom-conjure-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, r.jsx)("div", {
                className: oi.z4,
                role: "group",
                "aria-label": ed.intl.string(ec.default["Gioq+C"]),
                children: uL.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === n ? 0 : Math.round((a / n) * 100);
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: oi.fI,
                            children: [
                                (0, r.jsx)("span", { className: `${oi.A9} ${uY[e]}`, "aria-hidden": !0 }),
                                (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-muted", children: or(e) }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ed.intl.formatToPlainString(ec.default["3dQ1ly"], { percent: s }),
                                }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: ed.intl.formatToPlainString(ec.default.Ow0k34, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, r.jsx)(y.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: on(a),
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
function uZ(e) {
    let { entry: t, selected: l, tabbable: n, onSelect: a, onKeyDown: i, nested: s } = e,
        o = uR(t),
        u = "model" === t.kind ? t.model : t.tool,
        c =
            "model" === t.kind && null != t.promptTokens
                ? ed.intl.formatToPlainString(ec.default["6GQUgQ"], { tokens: oa(t.promptTokens) })
                : null != t.durationMs
                  ? on(t.durationMs)
                  : null;
    return (0, r.jsxs)(k.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: n ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${oi.nM} ${s ? oi.A5 : ""} ${"error" === t.status ? oi.Cr : ""} ${l ? oi.CZ : ""}`,
        onKeyDown: i,
        onClick: () => a(t.id),
        children: [
            (0, r.jsxs)("div", {
                className: oi.sU,
                children: [
                    (0, r.jsx)(oo, { status: t.status }),
                    (0, r.jsx)(uz, { category: o }),
                    (0, r.jsx)(y.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: oi.G9,
                        children: u,
                    }),
                    null == c
                        ? null
                        : (0, r.jsx)(y.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: oi.j2,
                              children: c,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: oi.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, r.jsx)(y.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: oi.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function u0(e) {
    var t;
    let { projectId: l, query: n } = e,
        a = (0, m.yK)([eE.Ay], () => eE.Ay.getTrace(l), [l]),
        s = (0, m.bG)([eE.Ay], () => eE.Ay.getHistoryState(l, "trace"));
    i.useEffect(() => uP, [l]);
    let [o, u] = i.useState(null),
        [c, d] = i.useState(40),
        [f, h] = i.useState(!1),
        g = i.useRef(null),
        x = i.useRef(null),
        p = i.useRef(null),
        v = i.useRef(null),
        j = i.useId(),
        b = i.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        k = i.useCallback((e) => u((t) => (t === e ? null : e)), []),
        w = i.useCallback((e) => {
            let t = g.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, ld.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = i.useCallback((e) => {
            let t = g.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, ld.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        A = (0, uS.A)({
            resizableDomNodeRef: x,
            orientation: uS.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), d((e) => (0, ld.clamp)(e + t, 25, 75)));
        }, []),
        E = i.useCallback(() => {
            (u(null), b(o));
        }, [o, b]),
        I = i.useMemo(() => uD(a, n), [a, n]),
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
                    .map((e, t) => ({ ...e, index: t, entries: uD(e.entries, n) }))
                    .filter((e) => e.entries.length > 0),
            [a, n],
        ),
        T = u$(I, o),
        _ = T?.kind === "tool" ? u$(a, T.parentId ?? null) : null,
        P = null == T ? 0 : ((t = T.id), a.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        R = I[I.length - 1];
    i.useLayoutEffect(() => {
        if (null != o) return;
        let e = p.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [R, o]);
    let L = i.useCallback(
        (e) => {
            if (0 === I.length) return;
            let t = I.findIndex((e) => e.id === o);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(I.length - 1, t));
                (u(I[l].id), document.getElementById(`trace-${I[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? I.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(I.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), b(o));
        },
        [I, o, b],
    );
    return 0 === a.length
        ? (0, r.jsx)("div", {
              className: oi.uP,
              ref: g,
              children: (0, r.jsx)(uf, {
                  state: s,
                  emptyTitle: ed.intl.string(ec.default["Tpvy/s"]),
                  emptyBody: ed.intl.string(ec.default.J0WcVA),
              }),
          })
        : (0, r.jsxs)("div", {
              className: `${oi.uP} ${f ? oi.F4 : ""}`,
              ref: g,
              children: [
                  (0, r.jsxs)("div", {
                      className: oi.DK,
                      children: [
                          (0, r.jsx)(uQ, { entries: a }),
                          (0, r.jsx)(um, { state: s }),
                          0 === I.length
                              ? (0, r.jsx)("div", {
                                    className: oi.Ie,
                                    children: (0, r.jsx)(y.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: ed.intl.string(ec.default.tDB4lC),
                                    }),
                                })
                              : (0, r.jsxs)(l6.Ch, {
                                    ref: p,
                                    className: oi.Ns,
                                    children: [
                                        (0, r.jsx)(uh, { state: s }),
                                        (0, r.jsx)("div", {
                                            ref: v,
                                            id: j,
                                            role: "listbox",
                                            "aria-label": ed.intl.string(ec.default.SGbiNE),
                                            className: oi.p_,
                                            children: M.map((e) => {
                                                let t = oc(e.startedAt),
                                                    l = ed.intl.formatToPlainString(ec.default.gPwGYA, {
                                                        number: e.index + 1,
                                                    });
                                                return (0, r.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: oi.mf,
                                                                children: [
                                                                    (0, r.jsx)(y.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, r.jsx)(y.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, r.jsx)(y.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: on(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: oi.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, r.jsx)(
                                                                        uZ,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? I[0]?.id),
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
                                    "aria-label": ed.intl.string(ec.default.DtSORy),
                                    "aria-valuenow": Math.round(c),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: oi.b1,
                                    onPointerDown: S,
                                    onKeyDown: C,
                                }),
                                (0, r.jsx)("div", {
                                    ref: x,
                                    className: oi.Or,
                                    style: { "--custom-conjure-trace-detail-share": String(c) },
                                    children: (0, r.jsx)(uX, {
                                        projectId: l,
                                        entry: T,
                                        parent: _,
                                        childCount: P,
                                        onSelect: u,
                                        onClose: E,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
function u1(e) {
    let { projectId: t, query: l, onQueryChange: n } = e,
        a = (0, m.yK)([eE.Ay], () => eE.Ay.getTrace(t), [t]),
        s = i.useRef(null),
        o = i.useCallback(() => {
            eu(
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
                className: oi.ED,
                children: (0, r.jsx)(uc.I, {
                    query: l,
                    onChange: n,
                    onClear: () => n(""),
                    size: "sm",
                    placeholder: ed.intl.string(ec.default["EY8/Mt"]),
                    "aria-label": ed.intl.string(ec.default["EY8/Mt"]),
                }),
            }),
            (0, r.jsx)(et.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: et.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, r.jsx)(el.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-trace-actions-${t}`,
                        "aria-label": ed.intl.string(ed.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, r.jsx)(en.rX, {
                            children: (0, r.jsx)(en.Dr, {
                                id: "export",
                                label: ed.intl.string(ec.default.WXrPRZ),
                                disabled: 0 === a.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, r.jsx)(le.K, {
                        ...e,
                        buttonRef: s,
                        icon: lt.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var u2 = l(592465);
function u3(e) {
    let { projectId: t, onClose: l } = e,
        [n, a] = i.useState("logs"),
        [s, o] = i.useState(""),
        u = (0, m.bG)([s0.A], () => s0.A.isDeveloper),
        c = (0, m.bG)([ol], () => ol.getStatus(t), [t]),
        d = (0, m.bG)([ol], () => ol.getFetchState(t), [t]);
    i.useEffect(() => {
        (0, er.R7)(t);
    }, [t]);
    let f = i.useCallback(() => (0, er.R7)(t), [t]),
        h = i.useCallback(() => {
            (0, la.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: ol.getStatus(t),
                        last_turn_usage: ol.getLastTurnUsage(t),
                        last_compaction: ol.getLastCompaction(t),
                        last_compaction_decline: ol.getLastCompactionDecline(t),
                        model_calls: ol.getModelCalls(t),
                        logs: eE.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, v.P)((0, j.o)(ed.intl.string(ec.default.wI6fhl), b.Ck.SUCCESS)),
            );
        }, [t]),
        g = ed.intl.string(ec.default["Q4FN+H"]);
    return (0, r.jsxs)("section", {
        className: u2.nd,
        "aria-label": g,
        children: [
            (0, r.jsxs)(l5.Ay, {
                "aria-label": g,
                toolbar: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l5.Ay.Icon, {
                            icon: sQ.CopyIcon,
                            tooltip: ed.intl.string(ec.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, r.jsx)(l5.Ay.Icon, { icon: L.P, tooltip: ed.intl.string(ed.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, r.jsx)(l5.Ay.ChannelIcon, { icon: E.BugIcon, "aria-hidden": !0 }),
                    (0, r.jsx)(l5.Ay.Title, { children: g }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: u2.rf,
                children: [
                    (0, r.jsxs)(sZ.V, {
                        selectedItem: n,
                        type: "top",
                        onItemSelect: (e) => a(e),
                        "aria-label": ed.intl.string(ec.default.RvvWIh),
                        className: u2.vR,
                        children: [
                            (0, r.jsx)(sZ.V.Item, { id: "logs", children: ed.intl.string(ec.default["+VRYCm"]) }),
                            (0, r.jsx)(sZ.V.Item, { id: "worker", children: ed.intl.string(ec.default["50D0FZ"]) }),
                            (0, r.jsx)(sZ.V.Item, { id: "agent", children: ed.intl.string(ec.default.UkbTK1) }),
                            u
                                ? (0, r.jsx)(sZ.V.Item, { id: "trace", children: ed.intl.string(ec.default.O6nNjP) })
                                : null,
                            u ? (0, r.jsx)(sZ.V.Item, { id: "perf", children: "Perf Trace" }) : null,
                        ],
                    }),
                    "logs" === n
                        ? (0, r.jsx)(up, { projectId: t })
                        : "worker" === n
                          ? (0, r.jsx)(uA, { status: c, fetchState: d, onRefresh: f })
                          : "trace" === n && u
                            ? (0, r.jsxs)("div", {
                                  className: u2.uP,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: u2.XH,
                                          children: (0, r.jsx)(u1, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, r.jsx)(u0, { projectId: t, query: s }),
                                  ],
                              })
                            : "perf" === n && u
                              ? (0, r.jsx)(oK, { projectId: t })
                              : (0, r.jsx)(us, {
                                    projectId: t,
                                    status: c,
                                    fetchState: d,
                                    onRefresh: f,
                                    traceVisible: u,
                                }),
                ],
            }),
        ],
    });
}
var u4 = l(333007),
    u5 = l(365912),
    u6 = l(775121),
    u7 = l(873715);
function u8(e) {
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
let u9 = Object.freeze({ x: -1, y: -1 });
function ce(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = u8(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var ct = l(470779);
function cl(e) {
    let {
            projectId: t,
            at: l,
            bounds: n,
            kind: a,
            value: s,
            onChange: u,
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
        } = ib({ projectId: t, surface: "design", onUploadFile: h }),
        y = i.useRef(null),
        k = (m || g.length > 0) && j && !f,
        N = i.useCallback(() => {
            if (!k) return;
            let e = b();
            c(e.length > 0 ? e : void 0);
        }, [k, b, c]),
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
        className: o()(ct.M0, { [ct.ho]: A && !f, [ct.ET]: f }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, r.jsx)("input", {
                ref: y,
                type: "file",
                multiple: !0,
                className: ct.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, r.jsx)(w.m, {
                position: "bottom",
                text: ed.intl.string(ec.default.lgvqSB),
                ariaHidden: !0,
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: ct.tY,
                    onClick: () => y.current?.click(),
                    "aria-label": ed.intl.string(ec.default.lgvqSB),
                    children: (0, r.jsx)(ea.H, { size: "custom", color: "currentColor", className: ct.WW }),
                }),
            }),
            (0, r.jsx)(ny.y, {
                autoFocus: !0,
                rows: 1,
                className: ct.hF,
                value: s,
                placeholder: "" === a ? ed.intl.string(ec.default.MPPV1Q) : `Edit ${a}`,
                "aria-label": ed.intl.string(ec.default.KCYqWL),
                onChange: (e) => u(e.target.value),
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
                      className: ct.ZO,
                      children: g.map((e) => (0, r.jsx)(iy, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var cn = l(192888);
function ca(e, t) {
    return (0, cn.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(ce, () => ({ status: "failed" }));
}
var cr = l(108308);
let ci = { x: 25, y: 21 };
function cs(e, t) {
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
function cu(e, t, l, n) {
    let a = co(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function cc(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function cd(e) {
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
function cm(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, resolveIframe: a, toggleRef: s } = e,
        o = null != l && l === n ? t : null,
        { active: u, annotations: c } = te(o),
        d = (0, tv.Zv)(o),
        f = (0, tt.useHasAnyModalOpen)(),
        h = (0, m.bG)([tX.default], () => tX.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = i.useState(null),
        [v, j] = i.useState(null),
        [b, k] = i.useState(!1),
        [w, N] = i.useState(!1),
        [A, C] = i.useState(null),
        [E, I] = i.useState(!1),
        M = i.useRef(null),
        T = i.useRef(null),
        _ = i.useRef(null),
        [R, L] = i.useState(null),
        [D, $] = i.useState(!1),
        [F, z] = i.useState(null),
        [O, U] = i.useState(null),
        G = i.useRef(!1),
        [q, B] = i.useState(!1),
        [H, K] = i.useState(null),
        V = u && !d && !f;
    null == F || (V && F.projectId === o) || z(null);
    let W = F?.projectId ?? null;
    (i.useEffect(() => {
        if (null != W) return () => nV(W, "design");
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
                p((t) => (cs(t, e) ? t : e));
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
            if (!V || null == o) return;
            let e = !0,
                t = a();
            if (null == t) return void N(!0);
            (k(!0), N(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, u7.J)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? cd(t.response) : null;
                        null == l ? N(!0) : (j(l), e7(o, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (k(!1), N(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [V, a, o]));
    let J = i.useRef(null);
    (i.useEffect(() => {
        if (!V || null == x || null == o) return;
        if (null == v) {
            J.current = x;
            return;
        }
        if (cs(J.current, x)) return;
        let e = window.setTimeout(() => {
            let e = a();
            if (null == e) return;
            J.current = x;
            let t = [];
            for (let e = 0; e < c.length; e += 24) t.push(c.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, u7.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let l;
                        if ("completed" !== e.status || !Z.current) return;
                        let n = cd(e.response);
                        null != n && (j(n), e7(o, { url: n.url, title: n.title, viewport: n.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, l) => {
                            let n = t[l];
                            if (null == n || "locate" !== e.action || !e.ok) return;
                            let r = u8(e.element);
                            null != r && a.set(n.id, r);
                        }),
                            (l = e4(o)).active &&
                                0 !== a.size &&
                                e5(o, {
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
    }, [V, x, v, c, o, a]),
        i.useEffect(() => {
            if (!V)
                return () => {
                    (C(null), z(null), K(null), j(null));
                };
        }, [V]));
    let X = i.useRef(null),
        Y = i.useRef(null),
        Q = i.useRef(!1),
        Z = i.useRef(!1);
    i.useEffect(() => {
        ((Z.current = V), V || ((X.current = null), (Y.current = null), (_.current = null), I(!1)));
    }, [V]);
    let ee = i.useCallback(
            function e() {
                if (Q.current) return;
                let t = X.current;
                if (null == t) return;
                X.current = null;
                let l = a();
                null != l &&
                    ((Q.current = !0),
                    ca(l, t).then((t) => {
                        if (((Q.current = !1), Z.current)) {
                            if ("picked" !== t.status || cv(t.target, ei.current.rect, ei.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? C(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = eJ(t.target);
                                (L((t) => (cp(t, e) ? t : e)),
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
            let e = setTimeout(() => U(null), cg);
            return () => clearTimeout(e);
        }, [O]));
    let el = null == v || null == x || v.viewport.width < 1 ? 1 : x.width / v.viewport.width,
        en = null != v || w,
        ea = i.useMemo(() => v?.elements ?? [], [v]),
        ei = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ei.current = { rect: x, scale: el };
    }, [x, el]);
    let es = i.useCallback(
            (e, t, l) => {
                null != o &&
                    (nV(o, "design"),
                    K(null),
                    (G.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: l, label: eJ(e) }));
            },
            [o],
        ),
        eo = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / el, y: (e.clientY - t.top) / el }), [el]),
        eu = i.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let l = T.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(eu);
    let em = i.useCallback(
            (e) => {
                if (null == x || null != H) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), eu(), I(!0), null != F)) {
                    (Math.abs(e.clientX - F.at.x) > cx || Math.abs(e.clientY - F.at.y) > cx) && (G.current = !0);
                    return;
                }
                if (!en) return void C(null);
                let t = eo(e, x);
                if (D) {
                    let e = (function (e, t, l) {
                            let n = null,
                                a = 1 / 0;
                            for (let r of e) {
                                let { x: e, y: i, width: s, height: o } = r.rect;
                                if (s < 1 || o < 1 || t < e || l < i || t > e + s || l > i + o) continue;
                                let u = s * o;
                                u < a && ((n = r), (a = u));
                            }
                            return n;
                        })(ea, t.x, t.y),
                        l = null != e && cv(e, x, el) ? null : e;
                    if (null != l) {
                        let e = eJ(l);
                        L((t) => (cp(t, e) ? t : e));
                    }
                    C((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Y.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Y.current = l), (X.current = l), ee());
            },
            [x, el, en, eo, D, ea, F, H, eu, ee],
        ),
        ef = null == H ? null : c.find((e) => e.id === H.id),
        eh = V && (E || F?.target.marker != null || ef?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = a();
                null != e && ca(e, u9);
            };
    }, [eh, a]);
    let eg = i.useCallback(() => {
        (I(!1), C(null), (Y.current = null), (X.current = null));
    }, []);
    i.useEffect(() => {
        if (!V || !E || !en || D || null != F || null != H) return;
        let e = _.current,
            { rect: t, scale: l } = ei.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Y.current = n), (X.current = n), ee());
    }, [V, E, en, D, F, H, ee]);
    let ex = i.useCallback(
            (e) => {
                if (null != F || null != H) {
                    (et(), K(null));
                    return;
                }
                if (null == A || null == x) return;
                let t = eo(e, x);
                es(
                    A,
                    (function (e, t, l) {
                        let { x: n, y: a, width: r, height: i } = e.rect;
                        return r < 1 || i < 1
                            ? eV
                            : { x: Math.min(1, Math.max(0, (t - n) / r)), y: Math.min(1, Math.max(0, (l - a) / i)) };
                    })(A, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [A, x, eo, F, H, es, et],
        ),
        ep = i.useCallback(() => {
            null != o && (C(null), e6(o));
        }, [o]),
        ev = i.useCallback(() => {
            null != o &&
                (null != F
                    ? et()
                    : H?.confirmingRemove === !0
                      ? K({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? K(null)
                        : ep());
        }, [o, F, H, et, ep]),
        ej = i.useRef(ev),
        eb = i.useRef(ep);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = ep));
    });
    let ey = i.useRef(null);
    i.useEffect(() => {
        if (V)
            return (
                u6.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        u6.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            (0, tD.vq)(t) &&
                ey.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, u5.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                eb.current();
        }
    }, [V, s]);
    let ek = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != F || null != H || 0 === ea.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == A ? -1 : ea.findIndex((e) => e.ref === A.ref);
                    C(ea[(l + (t ? 1 : -1) + ea.length) % ea.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    es(A, eV, { x: (x?.left ?? 0) + A.rect.x * el, y: (x?.top ?? 0) + A.rect.y * el }));
            },
            [o, F, H, ea, A, es, ev, x, el],
        ),
        ew = i.useCallback(
            (e) => {
                null == o ||
                    null == F ||
                    ((eW(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, er.dv)(
                            o,
                            (function (e, t) {
                                let { kind: l, name: n } = eJ(e),
                                    a = [l, n].filter((e) => "" !== e).join(": ");
                                return `${eQ}${a}${eZ}${eY(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        et(),
                        C(null)));
            },
            [o, F, et],
        ),
        eN = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, er.vX)(o, e)), [o]),
        eA = i.useCallback(() => {
            if (null != o && null != H && null != g && eW(H.draft)) {
                var e, t;
                let l, n;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (n = (l = e4(o)).annotations.find((t) => t.id === e)) &&
                        e8(n, g) &&
                        e5(o, { ...l, annotations: l.annotations.map((l) => (l.id === e ? { ...l, comment: t } : l)) }),
                    K({ ...H, editing: !1 }));
            }
        }, [o, H, g]),
        eS = i.useCallback(() => {
            if (null != o && null != H && null != g) {
                var e;
                let t, l;
                ((e = H.id),
                    null != (l = (t = e4(o)).annotations.find((t) => t.id === e)) &&
                        e8(l, g) &&
                        e5(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [o, H, g]),
        eC = u
            ? b
                ? ed.intl.string(ec.default["Eb/YV9"])
                : w
                  ? ed.intl.string(ec.default.FD30bh)
                  : ed.intl.formatToPlainString(ec.default.dTSqLF, { count: c.length })
            : "",
        eE = V && null != x,
        eI = E && null == H,
        eM = F?.target ?? ef?.target ?? null,
        eT = F ?? O,
        e_ = F ?? (O?.instant === !0 ? null : O),
        eP =
            null != ef && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = cc(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(cu(ef.target, ef.anchor, x, el), x)
                : null;
    return (
        i.useEffect(() => {
            let e = a();
            if (ef?.target.marker == null || null == e) return;
            let { target: t, anchor: l } = ef;
            ca(e, { x: Math.round(t.rect.x + t.rect.width * l.x), y: Math.round(t.rect.y + t.rect.height * l.y) });
        }, [ef, a]),
        (0, u4.createPortal)(
            (0, r.jsxs)("div", {
                ref: ey,
                className: cr.Li,
                children: [
                    (0, r.jsx)("div", {
                        className: cr.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eC,
                    }),
                    eE
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: cr.MT,
                                      style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                      "data-plain-cursor": eI ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ed.intl.string(ec.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: eg,
                                      onClick: ex,
                                      onKeyDown: ek,
                                  }),
                                  null != A && null == A.marker && null == F && null == H
                                      ? (0, r.jsx)(cj, { box: co(A, x, el) })
                                      : null,
                                  (0, r.jsx)("div", {
                                      ref: M,
                                      className: cr.aZ,
                                      children: (0, r.jsx)("div", {
                                          className: cr.xz,
                                          "data-shown": null != A && null == H && null == F ? "" : void 0,
                                          "data-instant": q ? "" : void 0,
                                          children: (0, r.jsxs)(y.E, {
                                              variant: "text-xs/medium",
                                              className: cr.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, r.jsx)("span", { className: cr.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, r.jsxs)("span", {
                                                            className: cr.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      ref: T,
                                      className: cr.Y,
                                      children: eI ? (0, r.jsx)("div", { className: cr.u }) : null,
                                  }),
                                  null == e_
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: cr.aZ,
                                            style: {
                                                transform: `translate3d(${e_.at.x + 20}px, ${e_.at.y + 20}px, 0)`,
                                            },
                                            children: (0, r.jsx)("div", {
                                                className: cr.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == F ? "" : void 0,
                                                children: (0, r.jsxs)(y.E, {
                                                    variant: "text-xs/medium",
                                                    className: cr.Ux,
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className: cr.Tl,
                                                            children: e_.label.kind,
                                                        }),
                                                        "" === e_.label.name
                                                            ? null
                                                            : (0, r.jsxs)("span", {
                                                                  className: cr.kh,
                                                                  children: [" ", e_.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, r.jsx)("div", { className: cr.D0, style: co(eM, x, el), "aria-hidden": !0 })
                                      : null,
                                  c.map((e, t) => {
                                      let l = cu(e.target, e.anchor, x, el),
                                          n = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, r.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: cr.xL,
                                              style: { ...cc(l, x), width: 24, height: 24 },
                                              "aria-label": ed.intl.formatToPlainString(ec.default.SxaIQA, {
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
                                              children: (0, r.jsx)(cf, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == o
                                      ? null
                                      : (0, r.jsx)(cl, {
                                            projectId: o,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: x,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != F && eW(eT.draft),
                                            onChange: (e) => {
                                                null != F && z({ ...F, draft: e });
                                            },
                                            onSubmit: ew,
                                            onDismiss: et,
                                            onUploadFile: eN,
                                            closing: null == F,
                                        }),
                                  null != ef && null != H && null != eP
                                      ? (0, r.jsxs)(ch, {
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
                                                    ? (0, r.jsx)(P.f, {
                                                          autoFocus: !0,
                                                          label: ed.intl.string(ec.default.KCYqWL),
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
                                                    : (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: cr.aC,
                                                          children: ef.comment,
                                                      }),
                                                e8(ef, g)
                                                    ? (0, r.jsx)("div", {
                                                          className: cr.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(y.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: cr.nv,
                                                                            children: ed.intl.string(ec.default.wOHvts),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ed.intl.string(ec.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...H, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ed.intl.string(ec.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        (0, r.jsx)(S.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: ed.intl.string(ec.default.friIzR),
                                                                            onClick: () =>
                                                                                K({
                                                                                    ...H,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        H.editing
                                                                            ? (0, r.jsx)(S.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !eW(H.draft),
                                                                                  text: ed.intl.string(
                                                                                      ec.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, r.jsx)(S.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ed.intl.string(
                                                                                      ec.default["6eW9lg"],
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
function cf(e) {
    let { authorId: t } = e,
        l = (0, m.bG)([tX.default], () => tX.default.getUser(t), [t]);
    return (0, r.jsx)(rn.eu, {
        src: null == l ? null : ri.Ay.getUserAvatarURL(l),
        size: ra._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function ch(e) {
    let t,
        l,
        n,
        a,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(ci);
    i.useLayoutEffect(() => {
        let e = p.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let l = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        b((e) => (0.5 > Math.abs(e.x - l.x) && 0.5 > Math.abs(e.y - l.y) ? e : l));
    }, []);
    let {
            left: k,
            top: w,
            originX: N,
            originY: A,
        } = ((l = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (a = Math.max((n = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), l)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, n), a)), originX: u.x - s, originY: u.y - o }),
        S = { left: k, top: w, "--custom-conjure-card-origin-x": `${N}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, r.jsxs)("div", {
        ref: p,
        className: cr.Nr,
        style: S,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, r.jsxs)("div", {
                className: cr.MY,
                children: [
                    (0, r.jsx)("span", { ref: v, className: cr.ip, children: (0, r.jsx)(cf, { authorId: d }) }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: cr.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: cr.zI, children: x }),
        ],
    });
}
let cg = 300,
    cx = 2;
function cp(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function cv(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function cj(e) {
    let { box: t } = e;
    return (0, r.jsx)("div", { className: cr.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var cb = l(659723),
    cy = l(697744),
    ck = l(130324);
function cw(e) {
    let t = (0, cy.c)(),
        { events: l, getDuration: n } = t;
    return (
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
        }, [l, n]),
        i.useEffect(() => {
            let t = setInterval(l.onMouseEnter, e);
            return () => clearInterval(t);
        }, [l, e]),
        t
    );
}
function cN(e) {
    let { className: t } = e,
        { Component: l, events: n } = cw(3e4);
    return (0, r.jsxs)("div", {
        className: t,
        onMouseEnter: n.onMouseEnter,
        onMouseLeave: n.onMouseLeave,
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, r.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: ck.o,
                children: ed.intl.string(ec.default.AyiQEp),
            }),
        ],
    });
}
var cA = l(251363),
    cS = l(944142),
    cC = l(532247),
    cE = l(501628);
function cI(e) {
    let { progress: t } = e,
        { Component: l } = cw(1500),
        n = J.Q_.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, r.jsx)("div", {
                className: cE.Ci,
                children: Array.from({ length: t.stepCount }, (e, l) =>
                    (0, r.jsx)(
                        "span",
                        {
                            className: cE.PM,
                            "data-state": l < t.stepIndex ? "done" : l === t.stepIndex ? "current" : "todo",
                        },
                        l,
                    ),
                ),
            }),
            n && null != t.stepLabel
                ? (0, r.jsx)(y.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function cM(e) {
    let { projectId: t, applicationId: l, previewApplicationId: n, surface: a } = e,
        s = null != t && null != l && l === n,
        o = (0, m.bG)([cS.A], () => (s ? cS.A.getLiveReload(t) : null), [s, t]),
        u = (0, B.A)(l, a)?.id ?? null,
        c = o?.phase ?? null,
        d = (function (e, t) {
            let l = (0, cC.dv)(e),
                [n, a] = i.useState(null),
                [r, s] = i.useState(l);
            r !== l && (s(l), a(null == l ? (0, cC.QP)(e, r) : null));
            let o = (0, m.bG)(
                    [tP.A],
                    () => {
                        let e = tP.A.getFrame(t);
                        return (0, tU.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                u = i.useRef(o),
                c = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((u.current = o), o && (c.current = !0));
                }, [o]),
                i.useEffect(() => {
                    if (null == n) return;
                    function e() {
                        return a(null);
                    }
                    function l(l) {
                        null != l.target && l.target === (0, cA.o)(null, t) && e();
                    }
                    ((c.current = u.current), document.addEventListener("load", l, !0));
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
        })(c, u),
        f = (0, cC.h_)(c, o?.step ?? null, d);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, r.jsx)("div", {
                      className: cE.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, r.jsx)(cI, { progress: f }),
                  })
                : null,
        ],
    });
}
var cT = l(343030),
    c_ = l(317608),
    cP = l(338941),
    cR = l(964404);
let cL = { width: 1 / 0, height: 1 / 0 };
function cD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cL;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var c$ = l(702083);
function cF(e) {
    let { children: t } = e,
        { mobile: l, landscape: n } = (0, m.cf)([tx.A], () => ({
            mobile: tx.A.isBuilderPreviewMobile(),
            landscape: tx.A.isBuilderPreviewLandscape(),
        })),
        a = i.useRef(null),
        [s, u] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = a.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            u((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let l = new ResizeObserver(t);
        return (l.observe(e), () => l.disconnect());
    }, []);
    let c = null != s && s.width > 0 ? s : null,
        d = l ? cD(n, c ?? void 0) : null;
    return (0, r.jsx)("div", {
        ref: a,
        className: o()(c$.dw, { [c$.PQ]: null != d }),
        children: (0, r.jsx)("div", { className: o()(c$.R9, { [c$.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var cz = l(347927);
function cO(e) {
    let { title: t, body: l, wide: n = !1, children: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(cz.Bf, n && cz.Qx),
        children: [
            (0, r.jsxs)("div", {
                className: cz.Ux,
                children: [
                    (0, r.jsx)(M.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, r.jsx)(y.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            a,
        ],
    });
}
var cU = l(957272);
function cG(e) {
    let { applicationId: t, surface: l, frameOverlay: n } = e,
        { frame: a, state: s } = (0, cP.A)({ applicationId: t, surface: l }),
        o = (0, tU.VA)(t, l);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tP.A.getFrame(e);
                    if (null == t || tR.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT)) return;
                    let l = tP.A.getMainFrame()?.id === e;
                    t.intent === tU.sV.MAIN
                        ? (l || q.A.promoteFrame(e), q.A.resetFrameLayoutModes(e))
                        : l && q.A.clearMainFrameSlot();
                })(o),
                () => {
                    let e;
                    null != (e = tP.A.getFrame(o)) &&
                        ((0, tU.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        cR.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === tU.sV.INLINE && q.A.promoteFrame(o),
                              q.A.updateFrameLayoutMode({ frameId: o, layoutMode: tU.y0.PIP }))
                            : e.intent === tU.sV.MAIN && q.A.demoteMainFrame(o));
                }
            ),
            [o],
        ),
        s === cP.n.Launched)
    ) {
        let e = (0, r.jsx)(c_.A, { frameId: a.id, level: cT.A.WithinAppContent, className: cU.Z7, overlay: n });
        return (0, ty.Q5)(l) ? (0, r.jsx)(cF, { children: e }) : e;
    }
    return (0, r.jsx)(cq, { state: s });
}
function cq(e) {
    let { state: t } = e;
    switch (t) {
        case cP.n.RenderingElsewhere:
            return (0, r.jsx)("div", {
                className: cU.qs,
                children: (0, r.jsx)(cO, {
                    title: ed.intl.string(ec.default["9kpdo7"]),
                    body: ed.intl.string(ec.default.iIA8Nj),
                }),
            });
        case cP.n.NoApplication:
            return (0, r.jsx)(cN, { className: cU.qs });
        case cP.n.DoesNotSupportSurface:
            return (0, r.jsx)("div", {
                className: cU.qs,
                children: (0, r.jsx)(cO, {
                    title: ed.intl.string(ec.default["7k4GyN"]),
                    body: ed.intl.string(ec.default.zdIy3R),
                }),
            });
        case cP.n.Error:
            return (0, r.jsxs)("div", {
                className: cU.qs,
                children: [
                    (0, r.jsx)(M.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: ed.intl.string(ec.default.lTPbnG),
                    }),
                    (0, r.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: cU.tj,
                        children: ed.intl.string(ec.default.e6GiAZ),
                    }),
                ],
            });
        case cP.n.AwaitingLaunch:
        case cP.n.Loading:
            return (0, r.jsx)("div", { className: cU.qs, children: (0, r.jsx)(A.y, {}) });
    }
}
var cB = l(308528),
    cH = l(334738),
    cK = l(688438),
    cV = l(355622),
    cW = l(531685),
    cJ = l(365971),
    cX = l(703462);
function cY(e) {
    let { message: t } = e;
    return (0, r.jsxs)("div", {
        className: cX.f,
        children: [
            (0, r.jsx)(lk.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, r.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function cQ() {
    return (0, r.jsx)("div", { className: cX.f, children: (0, r.jsx)(A.y, {}) });
}
function cZ(e) {
    let t,
        l,
        { previewApplicationId: n } = e,
        { data: a, isLoading: s } = (0, O.YY)(n),
        o = a?.bot?.id ?? null,
        u = (0, m.bG)([X.A], () => {
            if (null == o) return null;
            let e = X.A.getDMFromUserId(o);
            return null != e ? X.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && cB.A.preload(eb.ME, t);
        }, [t]),
        (l = (0, m.bG)([cW.A], () => cW.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, cJ.Xg)();
            return (
                (0, cH.yl)(t, e),
                () => {
                    (0, cH.dm)(t, e);
                }
            );
        }, [t, l]));
    let [c, d] = i.useState(null),
        f = null != o && c === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            cB.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || d(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s && null == a)
        ? (0, r.jsx)(cQ, {})
        : null == o || f
          ? (0, r.jsx)(cY, { message: ed.intl.string(ec.default["VP/O8s"]) })
          : null == u
            ? (0, r.jsx)(cQ, {})
            : (0, r.jsx)("div", {
                  className: cX.g,
                  children: (0, r.jsx)(cK.A, { channel: u, guild: null, chatInputType: cV.oU.SIDEBAR }, u.id),
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
        nextStep: u,
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
                                          (0, r.jsx)(M.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: l,
                                          }),
                                          null != n
                                              ? (0, r.jsx)(y.E, {
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
                                className: o()(c2.Qs, d ? c2.cw : null, m ? c2.pN : null),
                                children: [i, null == u ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: c2.o1,
                      children: s.map((e, t) => (0, r.jsx)(S.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var c4 = l(765671),
    c5 = l(269094),
    c6 = l(582063);
function c7(e) {
    let { applicationId: t, size: l } = e,
        n = (0, cP.A)({ applicationId: t, surface: tU.ZN });
    return (i.useEffect(() => {
        let e = (0, tU.VA)(t, tU.ZN);
        return () => (0, tE.A)().leaveFrame(e);
    }, [t]),
    n.state !== cP.n.Launched)
        ? (0, r.jsx)(cq, { state: n.state })
        : n.frame.data.proxyTicketRefreshing
          ? (0, r.jsx)(cq, { state: cP.n.Loading })
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
        className: c6.JH,
        children: [
            (0, r.jsx)("div", { className: c6.LO, "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                ref: n,
                className: c6.dw,
                children: (0, r.jsx)("div", {
                    className: c6.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(s),
                    },
                    children: (0, r.jsx)(c5.A, { frame: t.frame, application: t.application, className: c6.Gt }),
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
        activeMode: o,
        widgetApplicationId: u,
        overlayWidgetSize: c = tp,
        frameOverlay: d,
    } = e;
    return i?.type === "checking"
        ? (0, r.jsx)("div", { className: de.q, children: (0, r.jsx)(A.y, {}) })
        : i?.type === "permissions"
          ? (0, r.jsx)("div", {
                className: de.q,
                children: null == i.authorizeProps ? (0, r.jsx)(A.y, {}) : (0, r.jsx)(c3, { ...i.authorizeProps }),
            })
          : a
            ? null == t
                ? null
                : (0, r.jsxs)("div", {
                      className: de.R,
                      children: [
                          (0, tb.yf)(s, o) ? (0, r.jsx)(cG, { applicationId: t, surface: n, frameOverlay: d }) : null,
                          "widget" === o && null != u
                              ? "unavailable-authorization-revoked" === s.profileState
                                  ? (0, r.jsx)("div", {
                                        className: de.q,
                                        children: (0, r.jsx)(cO, {
                                            wide: !0,
                                            title: ed.intl.string(ec.default["08U+YO"]),
                                            body: ed.intl.string(ec.default.pKBfrc),
                                        }),
                                    })
                                  : (0, r.jsx)(c9.A, { applicationId: u })
                              : null,
                          "overlay" === o && s.modes.includes("overlay")
                              ? (0, r.jsx)(c7, { applicationId: t, size: c })
                              : null,
                          "bot" === o && null != l ? (0, r.jsx)(cZ, { previewApplicationId: l }) : null,
                      ],
                  })
            : (0, r.jsx)(cN, { className: de.q });
}
var dl = l(175841),
    dn = l(750506),
    da = l(867193),
    dr = l(417760);
function di(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function ds(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function du(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: n, compact: a } = e,
        { stop: s, stopping: u } = (function (e) {
            let t = (0, m.bG)([ek.Ay], () => null != e && ek.Ay.isThinking(e)),
                [l, n] = i.useState(!1),
                [a, r] = i.useState(t);
            (t !== a && (r(t), t || n(!1)),
                i.useEffect(() => {
                    if (!l) return;
                    let e = setTimeout(() => n(!1), 5e3);
                    return () => clearTimeout(e);
                }, [l]));
            let s = i.useCallback(() => {
                null != e && (n(!0), (0, er.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: l };
        })(l),
        c = (0, tv.CU)(l),
        d = "controlling" === t,
        f = ed.intl.string(d ? (c ? ec.default["VJW/5P"] : ec.default["+hD2Iz"]) : ec.default["h+i1r9"]),
        h =
            null != n
                ? (0, r.jsx)(S.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: ed.intl.string(ec.default["1NcO7H"]),
                      onClick: n,
                  })
                : null,
        g =
            null != s
                ? (0, r.jsx)(S.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ed.intl.string(ec.default.oU59sU),
                      loading: u,
                      onClick: s,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return a
        ? (0, r.jsxs)("div", {
              className: o()(dr.M0, dr.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, r.jsx)(sT.i, { size: 12, color: "currentColor" })
                      : (0, r.jsx)(dl.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, r.jsx)(y.E, { variant: "text-sm/semibold", color: "none", className: dr.ID, children: f }),
                  d ? (0, r.jsx)(N.A, { children: ed.intl.string(ec.default.fg1sor) }) : null,
                  d ? (0, r.jsxs)("div", { className: dr.lC, children: [h, g] }) : null,
              ],
          })
        : (0, r.jsxs)("div", {
              className: dr.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, r.jsxs)("div", {
                      className: dr.sp,
                      children: [
                          (0, r.jsx)(dl.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, r.jsx)(sT.i, { size: 12, color: "currentColor" }) : null,
                          (0, r.jsxs)("div", {
                              className: dr.f4,
                              children: [
                                  (0, r.jsx)(y.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: dr.w9,
                                      children: f,
                                  }),
                                  d
                                      ? (0, r.jsx)(y.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: dr.Rb,
                                            children: ed.intl.string(ec.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, r.jsxs)("div", { className: dr.lC, children: [h, g] }) : null,
              ],
          });
}
function dc(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: n,
            resolveTarget: a,
            frameId: s,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, tv.Zv)(null != l && l === n ? t : null),
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
        })(u),
        d = (0, tt.useHasAnyModalOpen)(),
        m = tO(s);
    i.useEffect(() => {
        u &&
            m &&
            null != s &&
            (function (e) {
                if (!tF(e)) return;
                let t = t$(e);
                null != t && (0, tL.sP)(t);
            })(s);
    }, [u, m, s]);
    let [f, h] = i.useState(null),
        [g, x] = i.useState(null),
        [p, v] = i.useState(null),
        j = "idle" !== c;
    i.useEffect(() => {
        if (!j) return;
        function e() {
            let e = di(a());
            h((t) => (ds(t, e) ? t : e));
            let t = null == g ? null : di(g);
            (v((e) => (ds(e, t) ? e : t)), null != g && (0, da.C)(g.getBoundingClientRect().height));
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
                      className: dr.D,
                      "data-phase": c,
                      children: (0, r.jsx)("div", {
                          className: dr.QF,
                          children: (0, r.jsx)(du, { phase: c, projectId: t, onOpenPublishedApp: o, compact: k }),
                      }),
                  })
                : null,
            (0, u4.createPortal)(
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: dr.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === c
                                ? ed.intl.string(ec.default.oWcemF)
                                : "handoff" === c
                                  ? ed.intl.string(ec.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            y
                ? (0, u4.createPortal)(
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: dr.ys,
                                  style: N,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, r.jsx)("div", {
                                  className: dr.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var dd = l(399503),
    dm = l(853555),
    df = l(558960),
    dh = l(187645);
let dg = new Map(),
    dx = !1;
function dp() {
    let e = new Map();
    for (let t of new Set([...ek.Ay.getActivityOrderedProjectIds(), ...(0, tv.T7)()])) {
        if (!ek.Ay.isThinking(t) && !(0, tv.wK)(t)) continue;
        let l = (function (e) {
            let t = eE.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let l = (0, ty.Rc)(t);
            return (0, tU.x1)(l) ? l.id : null;
        })(t);
        null != l && e.set(t, l);
    }
    for (let [n, a] of [...dg]) {
        var t, l;
        e.get(n) !== a.frameId &&
            ((t = n),
            (l = a),
            dg.delete(t),
            l.unregisterLookup(),
            df.A.removeFrameTarget(l.frameId, l.element),
            l.element.remove());
    }
    for (let [t, l] of e)
        dg.has(t) ||
            (function (e, t) {
                let l = document.createElement("div");
                ((l.className = dh.t),
                    l.setAttribute("inert", ""),
                    l.setAttribute("aria-hidden", "true"),
                    dv(l),
                    document.body.appendChild(l));
                let n = { frameId: t, element: l, unregisterLookup: () => {} };
                (dg.set(e, n),
                    (n.unregisterLookup = (0, dm.Ng)(e, () => (0, cA.o)(l, t))),
                    df.A.registerFrameTarget(t, l, cT.A.Backstage, void 0));
            })(t, l);
    for (let e of dg.values()) dv(e.element);
}
function dv(e) {
    let t = tx.A.isBuilderPreviewMobile();
    e.classList.toggle(dh.L, !t);
    let l = t ? cD(tx.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != l ? `${l.width}px` : ""), (e.style.height = null != l ? `${l.height}px` : ""));
}
var dj = l(873727),
    db = l(147248),
    dy = l(418842),
    dk = l(363195),
    dw = l(818023);
let dN = null;
var dA = l(602853),
    dS = l(517461),
    dC = l(487336);
function dE(e) {
    let { open: t, maxWidth: l, onWidthChange: n, children: a } = e,
        s = (0, dA.r)($.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, dS.V)("VibegrationsChatSidebarWidth", 460),
        [d, m] = i.useState(u ?? 460),
        f = (0, ld.clamp)(d, 360, l);
    i.useLayoutEffect(() => {
        n(t ? f + s : 0);
    }, [f, t, s, n]);
    let h = (0, uS.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: c,
            orientation: uS.R.HORIZONTAL_LEFT,
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
        className: dC.pz,
        hidden: !t,
        children: [
            (0, r.jsx)("div", { className: dC.Di, onPointerDown: g }),
            (0, r.jsx)("div", { ref: o, className: dC.kL, style: { width: f }, children: a }),
        ],
    });
}
var dI = l(541940);
function dM(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: u,
            mainClassName: c,
            content: d,
            sidebar: f,
            onOpenPublishedApp: h,
            showsFrame: g,
        } = e,
        [x, p] = i.useState(null),
        v = (0, B.A)(n, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let l = (0, m.bG)([dk.A], () => (0, dj.x4)(dk.A.theme)),
            n = (0, m.bG)([db.A], () => db.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, m.cf)([id.Ay], () => ({
                reducedMotion: id.Ay.useReducedMotion,
                fontScale: (0, dj.U0)(),
                highContrast: id.Ay.isHighContrastModeEnabled,
                forcedColors: id.Ay.useForcedColors,
                underlineLinks: id.Ay.alwaysShowLinkDecorations,
            })),
            c = J.hH.useSetting(),
            d = (0, dy.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            p = i.useCallback(() => {
                let n = (0, cA.o)(e, t);
                if (null == n) return;
                x.current = n;
                let i = {
                    revision: ++g.current,
                    baseTheme: l,
                    customTheme: (0, dj.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, cn.W)(n, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, r, t, s, c, e, a, d, u]),
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
                let l = (0, cA.o)(e, t);
                null != l && l !== x.current && j();
            }),
            i.useEffect(() => {
                function l(l) {
                    l.target === (0, cA.o)(e, t) && ((x.current = null), j());
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
            if (null != t) return (0, dm.Ng)(t, () => (0, cA.o)(x, j));
        }, [t, x, j]));
    let b = i.useCallback(() => (0, cA.o)(x, j), [x, j]),
        y = i.useCallback(() => (g ? (0, cA.o)(x, j) : x), [g, x, j]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(dI.Mh, c),
                children: [
                    u,
                    (0, r.jsx)(dc, {
                        projectId: t ?? null,
                        applicationId: n,
                        previewApplicationId: a,
                        resolveTarget: y,
                        frameId: j,
                        onOpenPublishedApp: h,
                    }),
                    (0, r.jsx)("div", { ref: p, className: dI.fm, children: d }),
                ],
            }),
            f,
            (0, r.jsx)(cm, {
                projectId: t ?? null,
                applicationId: n,
                previewApplicationId: a,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function dT(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: l,
        applicationId: n,
        previewApplicationId: a,
        surface: s,
        header: u,
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
    (0, dd.k)(t, w);
    let S = s.type === l4.U.MAIN || (0, ty.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: l } = (0, m.cf)([tx.A], () => ({
            mobile: tx.A.isBuilderPreviewMobile(),
            landscape: tx.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let n;
            if (null != e) {
                if (t) ((n = l ? dw.aX.LANDSCAPE : dw.aX.PORTRAIT), (dN = e));
                else {
                    if (dN !== e) return;
                    ((n = dw.aX.UNHANDLED), (dN = null));
                }
                nR.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: n, applicationId: e });
            }
        }, [e, t, l]);
    })(S ? n : null);
    let C = i.useRef(null),
        [E, I] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, er.TP)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, er.TP)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (S) return ((0, eC.HV)(n), () => (0, eC.HV)(null));
        }, [n, S]),
        i.useEffect(() => {
            null != t &&
                ((0, er.Hc)(t),
                dx ||
                    ((dx = !0),
                    ek.Ay.addChangeListener(dp),
                    eE.Ay.addChangeListener(dp),
                    tP.A.addChangeListener(dp),
                    tx.A.addChangeListener(dp),
                    (0, tv.W3)(dp),
                    dp()));
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
        i.useLayoutEffect(() => () => (0, eC.Zq)(0), []));
    let M = Math.max(360, E - 320),
        T = c || S;
    return (0, r.jsx)("div", {
        ref: C,
        className: dI.LB,
        children: (0, r.jsx)(dM, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: n,
            previewApplicationId: a,
            surface: s,
            header: u,
            onOpenPublishedApp: A,
            showsFrame: (0, tb.yf)(y, k),
            mainClassName: null == u ? void 0 : o()(dI.ez, { [dI.zt]: c }),
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
                frameOverlay: (0, r.jsx)(cM, { projectId: t, applicationId: n, previewApplicationId: a, surface: s }),
            }),
            sidebar:
                null != t && T
                    ? (0, r.jsx)(dE, {
                          open: c,
                          maxWidth: M,
                          onWidthChange: eC.Zq,
                          children: (0, r.jsx)("div", {
                              className: dI.cO,
                              children: x
                                  ? (0, r.jsx)(u3, { projectId: t, onClose: p ?? (() => {}) }, t)
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(cb.A, { projectId: t }),
                                            (0, r.jsx)(l5.Ay, {
                                                "aria-label": ed.intl.string(ed.t["/VQax8"]),
                                                toolbar: (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        f,
                                                        null == d
                                                            ? null
                                                            : (0, r.jsx)(l5.Ay.Icon, {
                                                                  icon: L.P,
                                                                  tooltip: ed.intl.string(ec.default.JD6Oit),
                                                                  onClick: d,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, r.jsx)(l5.Ay.Title, {
                                                    children: ed.intl.string(ed.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: dI.cb,
                                                children: (0, r.jsx)(
                                                    sY,
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
var d_ = l(631417);
function dP(e) {
    let { title: t, actions: l, breadcrumb: n } = e;
    return (0, r.jsx)(K.A, {
        hideSearch: !0,
        toolbar: l,
        className: d_.wx,
        "aria-label": t,
        children: (0, r.jsxs)("div", {
            className: d_.QF,
            children: [
                (0, r.jsx)(D.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: $.A.colors.TEXT_STRONG,
                    className: d_.Kk,
                }),
                null != n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(K.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, r.jsx)(K.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(K.A.Title, { className: d_.Qw, wrapperClassName: d_.DD, children: t }),
            ],
        }),
    });
}
var dR = l(683071);
let dL = "conjuring-help";
var dD = l(173114);
function d$() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: l,
            } = (0, m.cf)([tX.default, Q.A, lg.Ay, lx.A], () => {
                let e = tX.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of Q.A.getGuildsArray()) {
                    if (!t.features.has(eb.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let l = lg.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, U.m1)(t, tX.default, lx.A) === dL;
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
                    ? (0, V.pX)(eb.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, li.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, r.jsx)("div", {
              className: dD.l,
              children: (0, r.jsx)(dR.w, {
                  type: "info",
                  iconAlign: "center",
                  message: ed.intl.format(ec.default["6anmu1"], { channel: dL, onNavigate: t }),
                  role: "static",
              }),
          });
}
var dF = l(323140);
function dz(e) {
    return (0, r.jsx)(h.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function dO(e) {
    return (0, r.jsx)(g.u, { ...e, size: "custom", width: 20, height: 20 });
}
function dU(e) {
    return (0, r.jsx)(x.k, { ...e, size: "custom", width: 20, height: 20 });
}
function dG(e) {
    return (0, r.jsx)(p.H, { ...e, size: "custom", width: 20, height: 20 });
}
let dq = {
    showPublishBlocked: function (e) {
        (0, tt.openModal)((t) => (0, r.jsx)(l0, { ...t, reason: e }));
    },
    openPublishNotes: l1.A,
    showError: (e) => (0, v.P)((0, j.o)(e, b.Ck.FAILURE)),
    openProfile: (e) => {
        (0, W.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(l.bind(l, 468689))
            .then((t) => {
                let { default: l } = t;
                return l.open(e, eb.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function dB(e) {
    var t;
    let l,
        n,
        a,
        s,
        u,
        h,
        g,
        x,
        p,
        S,
        { project: C, guildId: E, onSelect: I, onRemix: M, shared: T = !1 } = e,
        _ =
            ((l = C.id),
            (n = C.name),
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, v.P)((0, j.o)(ed.intl.formatToPlainString(ec.default.aN2JdD, { name: n }), b.Ck.MESSAGE)),
                    eh(l, n)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", l, e),
                                (0, v.P)(
                                    (0, j.o)(
                                        409 === (t = e instanceof er.xE ? e.status : null)
                                            ? ed.intl.string(ec.default["9oqbEw"])
                                            : 404 === t
                                              ? ed.intl.string(ec.default["0W8uLq"])
                                              : ed.intl.string(ec.default.N8753A),
                                        b.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [l, n])),
            {
                onExport: s,
                onImport: (u = eg(
                    i.useCallback(
                        (e) => {
                            let t = ef(e);
                            null != t
                                ? (0, v.P)((0, j.o)(t, b.Ck.FAILURE))
                                : (0, f.A)({
                                      title: ed.intl.formatToPlainString(ec.default["Gm+u1+"], { name: n }),
                                      subtitle: ed.intl.string(ec.default.M7H3sJ),
                                      confirmText: ed.intl.string(ec.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, V.pX)(eb.BVt.CHANNEL(E, ey.VV.CONJURE, l));
                                          try {
                                              await em(l, e, ed.intl.string(ec.default.Owerd3));
                                          } catch {
                                              (0, v.P)((0, j.o)(ed.intl.string(ec.default["Q+l4Hv"]), b.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [l, n, E],
                    ),
                )).open,
                importInput: u.input,
            }),
        P =
            null == C.updated_at
                ? null
                : ed.intl.formatToPlainString(ec.default.AXydi3, { time: c()(C.updated_at).fromNow() }),
        R = (0, tW.wu)(C),
        L =
            (0, m.bG)([Q.A], () => (null == R ? null : (Q.A.getGuild(R)?.name ?? null)), [R]) ??
            ed.intl.string(ec.default["3QFps8"]),
        D = (0, m.bG)([eE.Ay], () => eE.Ay.isProjectDeleting(C.id), [C.id]),
        $ =
            ((t = T ? C : null),
            (h = t?.id),
            (g = t?.owner_user_id),
            (x = (0, m.yK)(
                [ek.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  ek.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== g ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, g],
            )),
            i.useEffect(() => {
                null != g && (t2(g), x.forEach(t2));
            }, [g, x]),
            (p = (0, m.bG)([tX.default], () => (null == g ? null : tX.default.getUser(g)), [g])),
            (S = (0, m.yK)([tX.default], () => x.map((e) => tX.default.getUser(e)).filter((e) => null != e), [x])),
            i.useMemo(
                () =>
                    null == p
                        ? null
                        : {
                              creator: p,
                              collaborators: S,
                              label: (function (e, t) {
                                  let l;
                                  return 0 === t.length
                                      ? ed.intl.formatToPlainString(ec.default.t5RWBS, { creator: e })
                                      : ed.intl.formatToPlainString(ec.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (l = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === l
                                                      ? ed.intl.formatToPlainString(ed.t["8s9z8P"], { first: t[0] })
                                                      : 2 === l
                                                        ? ed.intl.formatToPlainString(ed.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === l
                                                          ? ed.intl.formatToPlainString(ed.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : ed.intl.formatToPlainString(ed.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: l - 3,
                                                            }),
                                        });
                              })(
                                  (0, tY.mG)(p),
                                  S.map((e) => (0, tY.mG)(e)),
                              ),
                          },
                [p, S],
            )),
        z = i.useId(),
        O = (0, r.jsx)(y.E, { variant: "text-md/semibold", color: "text-strong", className: dF.j1, children: C.name }),
        U = (0, ew.oF)(C.id),
        G = {
            projectId: C.id,
            projectName: C.name,
            guildId: E,
            projectGuildId: C.guild_id,
            isOwner: (0, eE.PV)(C),
            canRemix: (0, eE.H_)(C),
            onRemix: M,
            onExport: _.onExport,
            onImport: _.onImport,
        };
    return (0, r.jsxs)("div", {
        className: o()(dF.OY, { [dF.Wy]: D }),
        "aria-busy": D,
        children: [
            (0, r.jsx)(tl.Ay, { projectId: C.id }),
            null == U || D ? null : (0, r.jsx)("div", { className: dF.SB, "aria-hidden": !0 }),
            (0, r.jsxs)(k.D, {
                className: dF.W6,
                onClick: D ? void 0 : I,
                onContextMenu: function (e) {
                    D || (0, F.jA)(e, () => (0, r.jsx)(lL, { ...G, onCloseMenu: F.Z_ }));
                },
                tabIndex: D ? -1 : void 0,
                "aria-describedby": null != $ ? z : void 0,
                children: [
                    (0, r.jsx)(l$.A, { project: C, size: "md", className: dF.VJ }),
                    (0, r.jsxs)("div", {
                        className: dF.MM,
                        children: [
                            (0, r.jsxs)("div", {
                                className: dF.Ub,
                                children: [
                                    null != $ ? (0, r.jsx)(w.m, { text: $.label, ariaHidden: !0, children: O }) : O,
                                    null == $ || D ? null : (0, r.jsx)(lO, { creator: $, className: dF.rb }),
                                    U !== d.I.NEEDS_INPUT || D
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: dF.fs,
                                              children: [
                                                  (0, r.jsx)(H.A, { mentionsCount: 1 }),
                                                  (0, r.jsx)(N.A, { children: ed.intl.string(ec.default.hfIuc7) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: dF.h3,
                                children: [
                                    (0, r.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: dF.Wb,
                                        children: D ? ed.intl.string(ec.default.Yh5pAc) : L,
                                    }),
                                    null == P || D
                                        ? null
                                        : (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("span", {
                                                      className: dF.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, r.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: dF.zM,
                                                      children: P,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != $ ? (0, r.jsx)(N.A, { id: z, children: $.label }) : null,
            (0, r.jsx)("div", {
                className: dF.M2,
                children: D
                    ? (0, r.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, r.jsxs)("div", {
                          className: dF.Pl,
                          children: [(0, r.jsx)(lD, { ...G, trigger: "iconButton" }), _.importInput],
                      }),
            }),
        ],
    });
}
function dH(e) {
    var t, n;
    let a,
        { project: s, projectsLoaded: o, onBack: u, guildId: c } = e,
        [d, h] = i.useState(!0),
        [g, x] = i.useState(!1),
        p = J.Q_.useSetting(),
        [k, N] = i.useState(null),
        [A, T] = i.useState(null),
        _ = s?.id ?? null,
        P = i.useRef(_),
        R = i.useRef(!0),
        L = i.useRef(!1),
        D = i.useRef(null);
    ((P.current = _),
        i.useEffect(
            () => (
                (R.current = !0),
                () => {
                    R.current = !1;
                }
            ),
            [],
        ));
    let $ = (0, m.bG)([eE.Ay], () => (null == _ ? null : eE.Ay.getIntegrationStatus(_)), [_]),
        { data: F, isLoading: z } = (0, O.YY)(s?.preview_application_id ?? void 0),
        H = null != _ && A !== _,
        W = $?.preview_ready === !0,
        Y = $?.has_activity === !0,
        {
            availability: Q,
            activeMode: Z,
            setMode: et,
            frameSurface: el,
            frameSurfaceOptions: en,
            setFrameSurface: ea,
            widgetApplicationId: ei,
        } = (function (e) {
            let {
                    applicationId: t,
                    previewApplicationId: l,
                    declaredActivity: n,
                    previewSupportedSurfaces: a,
                    installScope: r,
                    ownerAuthorizationRevoked: s,
                    mainCardOnly: o = !1,
                    supportsOverlay: u = !1,
                } = e,
                [c, d] = i.useState(null),
                [f, h] = i.useState(null),
                [g, x] = i.useState(t);
            g !== t && (x(t), d(null), h(null));
            let p = null != l && l === t ? l : null,
                v = (0, m.bG)([tI.default], () => tI.default.getId()),
                { applicationWidgetConfig: j } = (0, tS.A)(v, p ?? void 0),
                b = j?.surfaces,
                y = (0, tb.yZ)({
                    widgetTop: b?.[tA.m.WIDGET_TOP] != null,
                    widgetBottom: b?.[tA.m.WIDGET_BOTTOM] != null,
                    miniProfile: b?.[tA.m.MINI_PROFILE] != null,
                }),
                k = null != p && (o ? y.hasMainCard : y.hasAny),
                { data: w } = (0, O.YY)(l ?? void 0),
                N = null != l && w?.bot?.id != null,
                { data: A, isLoading: S } = (0, O.YY)(t ?? void 0),
                C = n || (0, tC.X)(A),
                E = null != t && S && null == A,
                I = (0, tb.P5)(a, {
                    legacy: { hasFrame: C, hasProfileWidget: k, hasBotDm: N },
                    widgetResolvable: null != p,
                    botDmResolvable: N,
                }),
                M = (0, tb.Xm)({ installScope: r, ...I, hasOverlay: u, ownerAuthorizationRevoked: s }),
                T = i.useMemo(() => (0, tM.hR)(a), [a]),
                _ = (0, tM.PH)(f, T);
            return (
                i.useEffect(() => {
                    if (null != t) for (let e of (0, ty.Mm)(t)) e.surface.type !== _ && (0, tE.A)().leaveFrame(e.id);
                }, [t, _]),
                {
                    availability: M,
                    isResolving: E,
                    activeMode: E ? null : (0, tb.Qs)(c, M),
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
            declaredActivity: Y,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: $?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(ee.q7.OVERLAY) === !0,
        }),
        es =
            ((t = (0, m.bG)(
                [ek.Ay],
                () =>
                    null == _
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let l = e[t].proposal?.overlay_widget;
                                  if (null != l) return l;
                              }
                              return null;
                          })(ek.Ay.getMessages(_)),
                [_],
            )),
            null != (a = t?.default_size) &&
            Number.isFinite(a.width) &&
            Number.isFinite(a.height) &&
            a.width > 0 &&
            a.height > 0
                ? a
                : tp);
    (0, tj.x)(_, (e) => {
        Q.modes.includes(e) && et(e);
    });
    let eo = Q.modes.includes("frame"),
        eu = i.useMemo(() => {
            var e;
            return (
                (e = Q.modes),
                e.flatMap((e) => ("frame" === e ? en.map((t) => ({ mode: e, surface: t })) : [{ mode: e }]))
            );
        }, [Q.modes, en]),
        eh = i.useCallback(
            (e) => {
                ("frame" === e.mode && ea(e.surface), et(e.mode));
            },
            [ea, et],
        ),
        ex = (0, tb.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: W,
            integrationInstalled: $?.integration_installed ?? null,
            botPermissionsChanged: $?.bot_permissions_changed === !0,
        }),
        ep = d && !g,
        ev = ed.intl.string(ep ? ec.default.JD6Oit : ec.default.xjJAQm),
        ej = i.useCallback(() => {
            if (g) {
                (x(!1), h(!0));
                return;
            }
            h((e) => !e);
        }, [g]),
        ew = i.useCallback(() => h(!1), []),
        { active: eN } = te(_);
    i.useEffect(() => {
        null != _ && eN && !eo && e6(_);
    }, [_, eN, eo]);
    let eA = i.useRef(null),
        eS = (0, tv.Zv)(_),
        eI = ed.intl.string(eS ? ec.default.Sme0T0 : eN ? ec.default.vn5Rzu : ec.default["cl/Jyl"]),
        eM = i.useCallback(() => {
            if (null != _) {
                let e;
                if (eN) return void e6(_);
                (x(!1), h(!0), (e = e4(_)).active || e5(_, { ...e, active: !0 }));
            }
        }, [_, eN]),
        eT = i.useCallback(() => {
            x((e) => !e && (h(!0), !0));
        }, []),
        e_ = i.useCallback(() => x(!1), []),
        eP = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == s || L.current) return;
                let n = s.id;
                function a() {
                    return R.current && P.current === n;
                }
                ((L.current = !0),
                    x(!1),
                    h(!0),
                    N({ entry: e, status: "restoring" }),
                    (0, er.oB)(n, e.sha)
                        .then(
                            async () => {
                                if (
                                    (l &&
                                        a() &&
                                        (0, v.P)(
                                            (0, j.o)(
                                                ed.intl.formatToPlainString(ec.default.Z4n6LX, {
                                                    title: (0, tn.T4)(e.subject).short,
                                                }),
                                                b.Ck.SUCCESS,
                                            ),
                                        ),
                                    null != t)
                                ) {
                                    let e = await (0, ta.c)(n, t);
                                    null != e && (0, v.P)((0, j.o)(e, b.Ck.FAILURE));
                                }
                                a() && N({ entry: e, status: "restored" });
                            },
                            (t) => {
                                a() &&
                                    (N({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", n, t),
                                    (0, v.P)((0, j.o)(ed.intl.string(ec.default["PSdo+w"]), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (L.current = !1);
                        }));
            },
            [s],
        ),
        eR = (0, m.bG)([tx.A], () => tx.A.isBuilderPreviewMobile()),
        eL = ed.intl.string(eR ? ec.default.tKGF0Q : ec.default.peqEOY),
        eD = i.useCallback(() => (0, eC.GG)(!eR), [eR]),
        e$ = (0, m.bG)([tx.A], () => tx.A.isBuilderPreviewLandscape()),
        eF = ed.intl.string(e$ ? ec.default.tunI2l : ec.default.DoNdjA),
        ez = i.useCallback(() => (0, eC.Lw)(!e$), [e$]),
        eO = (0, ty.jS)(s),
        eU = i.useMemo(() => (0, ty.Op)(eO, el), [eO, el]),
        eG = (0, B.A)(s?.preview_application_id ?? null, eU),
        eq = (0, tU.x1)(eG) && eG.data.proxyTicketRefreshing,
        eB = i.useCallback(() => {
            null == eG || eq || q.A.refreshProxyTicket(eG.id);
        }, [eG, eq]),
        eH = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eG?.id), (0, er.Bn)(e), (0, tE.A)().leaveFrame(t)), u());
        }, [s, eG?.id, u]),
        eK = i.useCallback(() => {
            null != s && (h(!0), (0, er.dv)(s.id, ed.intl.string(ec.default.oU20rd)));
        }, [s]),
        eV = eg(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        l = ef(e);
                    null != l
                        ? (0, v.P)((0, j.o)(l, b.Ck.FAILURE))
                        : (0, f.A)({
                              title: ed.intl.formatToPlainString(ec.default["Gm+u1+"], { name: s.name }),
                              subtitle: ed.intl.string(ec.default.M7H3sJ),
                              confirmText: ed.intl.string(ec.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  h(!0);
                                  try {
                                      await em(t, e, ed.intl.string(ec.default.Owerd3));
                                  } catch {
                                      (0, v.P)((0, j.o)(ed.intl.string(ec.default["Q+l4Hv"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eW = i.useCallback(() => {
            null != s && (0, l2.A)(s, c);
        }, [s, c]),
        eJ = i.useCallback(async () => {
            if (null == _ || P.current !== _) return;
            D.current?.abort();
            let e = new AbortController();
            ((D.current = e), T(null));
            try {
                await (0, eC.U1)(_, e.signal);
            } catch {
            } finally {
                e.signal.aborted || D.current !== e || P.current !== _ || T(_);
            }
        }, [_]);
    i.useEffect(
        () => (
            eJ(),
            () => {
                (D.current?.abort(), (D.current = null));
            }
        ),
        [eJ],
    );
    let eX = (0, lQ.a)(s ?? null, $ ?? null, c),
        eY = ((n = s?.application_id ?? null), (0, m.bG)([lg.Ay], () => (null == n ? null : (0, lU.i8)(c, n)), [c, n])),
        eQ = i.useMemo(() => (null == eY ? null : () => (0, V.pX)(eb.BVt.CHANNEL(c, eY))), [c, eY]),
        eZ = i.useCallback(async () => {
            null != s && (await (0, lQ.$)(s, eX));
        }, [eX, s]),
        e0 = i.useCallback(async () => {
            try {
                await eZ();
            } catch {}
            await eJ();
        }, [eJ, eZ]),
        e1 = i.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || z || H
                ? null
                : {
                      ...(0, tV.i)({ applicationId: e, application: F ?? null, guildId: eX }),
                      onClose: () => {
                          e0();
                      },
                  };
        }, [H, e0, eX, z, F, s?.preview_application_id]),
        e2 = (0, tb.JR)(Z, ex)
            ? { type: "permissions", authorizeProps: e1 }
            : H && null == $
              ? { type: "checking" }
              : void 0,
        e3 = (0, m.bG)([eE.Ay], () => null != _ && eE.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == s && o) || e3) && (0, V.bG)(eb.BVt.CHANNEL(c, ey.VV.CONJURE));
    }, [c, s, o, e3]);
    let e7 = i.useMemo(() => ({ guildId: c, platform: dq, busy: H || z }), [c, H, z]),
        e8 = (0, lo.Ay)(_, e7),
        e9 = e8?.intent === "open" && "channel" === e8.destination ? e8.appChannelId : null,
        tl = (0, m.bG)([X.A], () => (null == e9 ? null : X.A.getChannel(e9)), [e9]),
        tr = (0, U.Ay)(tl),
        ti = (0, G.gU)(tl),
        ts =
            null != tr && null != ti
                ? ed.intl.format(ec.default.gR7PUV, {
                      channel: tr,
                      channelIconHook: (e, t) =>
                          (0, r.jsx)(ti, { size: "xs", color: "currentColor", className: dF.Y2 }, t),
                  })
                : e8?.label,
        to = e8?.upToDate === !0 ? ed.intl.string(ec.default.X0kGp2) : (e8?.disabledReason ?? null),
        tu =
            null == e8
                ? null
                : (0, r.jsx)("div", {
                      className: dF.As,
                      children: (0, r.jsx)(w.m, {
                          text: to,
                          asContainer: !0,
                          children: (0, r.jsx)(S.$, {
                              size: "sm",
                              variant: e8.upToDate ? "secondary" : "primary",
                              loading: e8.publishing,
                              disabled: e8.disabled,
                              onClick: () => e8.run("header"),
                              text: ts,
                          }),
                      }),
                  }),
        tc = (0, r.jsx)(dP, {
            title: s?.name ?? ed.intl.string(ec.default.G1WwgK),
            breadcrumb: { title: ed.intl.string(ec.default.uk6jhJ), onClick: u },
            actions:
                null == s
                    ? null
                    : (0, r.jsxs)("div", {
                          className: dF.FO,
                          children: [
                              (0, r.jsx)(tK, {
                                  targets: eu,
                                  target: null == Z ? null : "frame" === Z ? { mode: Z, surface: el } : { mode: Z },
                                  onChange: eh,
                              }),
                              eo
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            "overlay" === Z
                                                ? null
                                                : (0, r.jsx)(K.A.Icon, {
                                                      icon: eR ? dU : dO,
                                                      tooltip: eL,
                                                      "aria-label": eL,
                                                      selected: eR,
                                                      onClick: eD,
                                                  }),
                                            eR && "overlay" !== Z
                                                ? (0, r.jsx)(K.A.Icon, {
                                                      icon: dG,
                                                      tooltip: eF,
                                                      "aria-label": eF,
                                                      selected: e$,
                                                      onClick: ez,
                                                  })
                                                : null,
                                            (0, r.jsx)(K.A.Icon, {
                                                ref: eA,
                                                icon: C.x,
                                                iconClassName: dF.D8,
                                                tooltip: eI,
                                                "aria-label": eI,
                                                selected: eN,
                                                disabled: eS,
                                                onClick: eM,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === Z ? (0, r.jsx)(tG, { frame: eG, controlProjectId: s.id }) : null,
                              (0, r.jsx)("div", { className: dF.YJ }),
                              p
                                  ? (0, r.jsx)(K.A.Icon, {
                                        icon: E.BugIcon,
                                        tooltip: ed.intl.string(ec.default.Mt5k9d),
                                        "aria-label": ed.intl.string(ec.default.Mt5k9d),
                                        selected: g,
                                        onClick: eT,
                                    })
                                  : null,
                              (0, r.jsx)(K.A.Icon, {
                                  icon: I.SettingsIcon,
                                  tooltip: ed.intl.string(ec.default.I2XSKe),
                                  "aria-label": ed.intl.string(ec.default.I2XSKe),
                                  onClick: () => (0, lu.A)(s.id, { guildId: c, isPreview: !0, publishOptions: e7 }),
                              }),
                              (0, r.jsx)(lD, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: c,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, eE.PV)(s),
                                  canRemix: (0, eE.H_)(s),
                                  onRefresh: (0, tU.x1)(eG) ? eB : void 0,
                                  isRefreshing: eq,
                                  onClose: eH,
                                  onExport: eK,
                                  onImport: eV.open,
                                  onRemix: eW,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, tt.openModalLazy)(async () => {
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
                                              onRestoreVersion: (e, t) => eP(e, t, !0),
                                          }),
                                          void (0, tt.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("323079"),
                                                  l.e("437655"),
                                                  l.e("620019"),
                                                  l.e("586467"),
                                                  l.e("231782"),
                                                  l.e("551087"),
                                              ]).then(l.bind(l, 438834));
                                              return (l) => (0, r.jsx)(t, { ...l, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      Q.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== Q.profileState
                                          ? ei
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              ep
                                  ? null
                                  : (0, r.jsx)(K.A.Icon, { icon: dz, tooltip: ev, "aria-label": ev, onClick: ej }),
                          ],
                      }),
        });
    return (0, r.jsxs)("div", {
        className: dF.nj,
        children: [
            eV.input,
            (0, r.jsx)("main", {
                className: dF.JX,
                children:
                    null == s
                        ? (0, r.jsxs)("div", {
                              className: dF.j5,
                              children: [
                                  tc,
                                  (0, r.jsxs)("div", {
                                      className: dF.sD,
                                      children: [
                                          (0, r.jsx)(M.D, {
                                              variant: "heading-lg/semibold",
                                              children: ed.intl.string(ec.default.G1WwgK),
                                          }),
                                          (0, r.jsx)(y.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ed.intl.string(ec.default.fINulo),
                                          }),
                                          (0, r.jsx)(S.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ed.intl.string(ec.default["WFJ/vb"]),
                                              onClick: () => (0, eC.hF)(c),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, r.jsx)(lo.bI.Provider, {
                              value: e7,
                              children: (0, r.jsx)(
                                  dT,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: eA,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eU,
                                      header: tc,
                                      chatOpen: d,
                                      onCloseChat: ew,
                                      chatHeaderAction: tu,
                                      debugOpen: p && g,
                                      onCloseDebug: e_,
                                      onRestoreVersion: eP,
                                      onImportProject: (0, eE.PV)(s) ? eV.open : void 0,
                                      restoreState: k,
                                      previewReady: W,
                                      previewGate: e2,
                                      availability: Q,
                                      activeMode: Z,
                                      widgetApplicationId: ei,
                                      overlayWidgetSize: es,
                                      onOpenPublishedApp: eQ,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function dK(e) {
    let {
            projects: t,
            idea: n,
            guildId: a,
            submitting: s,
            createError: u,
            createDisabled: c,
            conjureTarget: d,
            onConjureTargetChange: f,
            eligibleGuilds: h,
            modelSettings: g,
            onModelSettingsChange: x,
            onSelectProject: p,
            onIdeaChange: k,
            onCreate: w,
            onCreateFromTemplate: N,
            onStartTemplate: C,
            onSubmitTemplate: E,
            onCancelTemplate: I,
            onSkipTemplate: M,
            onImportNewProject: F,
            importing: z,
        } = e,
        [O, U] = i.useState(() => ({ guildId: a, filter: lH(a) })),
        G = (O.guildId === a ? O.filter : lH(a)) ?? a,
        q = i.useCallback(
            (e) => {
                (lB.set(a, e), U({ guildId: a, filter: e }));
            },
            [a],
        ),
        B = (0, m.yK)(
            [Q.A],
            () =>
                (function (e, t) {
                    let l = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && l.add(t.guild_id),
                            null != t.preview_guild_id && l.add(t.preview_guild_id));
                    let n = [];
                    for (let e of l) {
                        let t = Q.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, a),
            [t, a],
        ),
        H = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: D.D, label: ed.intl.string(ec.default["Xi/oIC"]) },
                {
                    id: "conjure-filter-user",
                    value: lG,
                    leading: ex.UserIcon,
                    label: ed.intl.string(ec.default.kCSgmG),
                },
                {
                    id: "conjure-filter-no-server",
                    value: lq,
                    leading: ep.R,
                    label: ed.intl.string(ec.default["3QFps8"]),
                },
                ...B.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, r.jsx)(eH.Ay, { guild: e, size: eH.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [B],
        ),
        V = (0, m.yK)(
            [eE.Ay, Q.A],
            () => {
                let e = lK(G);
                if (null != e) return eE.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(Q.A.getGuilds()))
                    eE.Ay.hasFetchedGuildProjects(e.id) && t.push(...eE.Ay.getSharedProjects(e.id));
                return t;
            },
            [G],
        );
    i.useEffect(() => {
        let e = lK(G);
        null == e || eE.Ay.hasFetchedGuildProjects(e) || (0, eC.hF)(e);
    }, [G]);
    let W = i.useMemo(
            () =>
                V.filter((e) => lV(e, G)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [V, G],
        ),
        J = i.useMemo(
            () => [
                {
                    label: ed.intl.string(ec.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: eK,
                            label: ed.intl.string(ec.default.UPLaGM),
                            leading: ex.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, r.jsx)(eH.Ay, { guild: e, size: eH.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        X = i.useMemo(
            () =>
                t
                    .filter((e) => lV(e, G))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, G],
        ),
        Y = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, lU.Ot)(e, a)
                    ? p(e.id)
                    : (0, v.P)((0, j.o)(ed.intl.string(ec.default["XUl/cs"]), b.Ck.MESSAGE));
            },
            [a, p],
        ),
        Z = ed.intl.string(ec.default.ab1sMf),
        et = [
            ed.intl.string(ec.default["9w+Chc"]),
            ed.intl.string(ec.default.WAvmdq),
            ed.intl.string(ec.default.SKsrzl),
        ],
        el = [
            {
                id: "moderation-bot",
                name: ed.intl.string(ec.default.lGLnE8),
                description: ed.intl.string(ec.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: ed.intl.string(ec.default.uJKQTs),
                description: ed.intl.string(ec.default["+dKy/B"]),
            },
            {
                id: "rust-sphere",
                name: ed.intl.string(ec.default.iF5Oru),
                description: ed.intl.string(ec.default.NbDDO6),
            },
        ],
        en = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: a,
                        eligibleGuilds: h,
                        onStart: (t) => C(e.name, t),
                        onSubmit: (t, l, n) => E(e, t, l, n),
                        onCancel: I,
                        onSkip: M,
                    }),
                    (0, tt.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([l.e("881965"), l.e("166781")]).then(
                                l.bind(l, 790028),
                            );
                            return (l) => (0, r.jsx)(e, { ...l, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                N(e);
            },
            [h, a, I, N, M, C, E],
        ),
        ea = ed.intl.string(ec.default.zzYLlW),
        er =
            (i.useEffect(() => {
                (0, eC.b8)();
            }, []),
            (0, m.bG)([eE.Ay], () => {
                let e = eE.Ay.getMaxProjects();
                return null != e && eE.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - eE.Ay.getOwnedProjects().length)
                    : null;
            })),
        ei = ed.intl.string(ec.default["2XcV3x"]),
        es = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || w());
            },
            [c, w],
        ),
        eo = lK(G) ?? a,
        eu = (0, m.bG)([eE.Ay], () => eE.Ay.getGuildProjectsFetchState(eo), [eo]),
        em = (0, m.bG)([eE.Ay], () => eE.Ay.getGuildProjectsFetchState(a), [a]),
        [ef, eh] = i.useState(lX),
        eg = i.useMemo(() => lW.w.get(lY(a)) ?? !1, [a]),
        ev = "success" === em,
        eb = (0, m.yK)([eE.Ay], () => eE.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => lV(e, a)),
        ey = ef ?? (!!eb || "error" === em || (!ev && eg));
    i.useEffect(() => {
        ev && lW.w.set(lY(a), eb);
    }, [ev, eb, a]);
    let ek = i.useCallback((e) => {
            (lW.w.set(lJ, e), eh(e));
        }, []),
        ew = i.useCallback(() => ek(!ey), [ek, ey]),
        eN = i.useCallback(() => ek(!1), [ek]),
        eS = ed.intl.string(ec.default.kar7jh),
        eM = ey ? eS : ed.intl.string(ec.default.WSc5Y2);
    return (0, r.jsx)("div", {
        className: o()(dF.nj, dF.a0),
        children: (0, r.jsxs)("div", {
            className: dF.Yo,
            children: [
                (0, r.jsxs)("main", {
                    className: dF.ps,
                    children: [
                        (0, r.jsx)(dP, {
                            title: ed.intl.string(ec.default.uk6jhJ),
                            actions: (0, r.jsx)(K.A.Icon, {
                                icon: T.Z,
                                tooltip: eM,
                                "aria-label": eM,
                                selected: ey,
                                onClick: ew,
                            }),
                        }),
                        (0, r.jsx)(_.Ip, {
                            className: dF.Yy,
                            children: (0, r.jsx)("div", {
                                className: dF.Mo,
                                children: (0, r.jsxs)("section", {
                                    className: o()(dF.Qs, dF.Ix),
                                    children: [
                                        (0, r.jsx)(d$, {}),
                                        (0, r.jsx)(eB, {}),
                                        (0, r.jsxs)("section", {
                                            className: dF.WI,
                                            "aria-label": ea,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dF.G9,
                                                    children: [
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ea,
                                                        }),
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ed.intl.string(ec.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eR, {
                                                    listClassName: dF.Aw,
                                                    radius: e_,
                                                    children: el.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dF.EA,
                                                                children: (0, r.jsxs)(eI, {
                                                                    disabled: s,
                                                                    ariaLabel: ed.intl.formatToPlainString(
                                                                        ec.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(dF.nx, dF.rz),
                                                                    onClick: () => en(e),
                                                                    children: [
                                                                        (0, r.jsx)(y.E, {
                                                                            className: dF.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, r.jsx)(y.E, {
                                                                            className: dF.BK,
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
                                            className: dF.WI,
                                            "aria-label": ei,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: dF.G9,
                                                    children: [
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ei,
                                                        }),
                                                        (0, r.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: ed.intl.string(ec.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(eR, {
                                                    listClassName: dF.Aw,
                                                    radius: eP,
                                                    children: et.map((e) =>
                                                        (0, r.jsx)(
                                                            "li",
                                                            {
                                                                className: dF.EA,
                                                                children: (0, r.jsx)(eI, {
                                                                    disabled: s,
                                                                    className: dF.nx,
                                                                    onClick: () => w(e),
                                                                    children: (0, r.jsx)(y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: dF.un,
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
                            className: dF.Yl,
                            children: (0, r.jsxs)("div", {
                                className: o()(dF.Qs, dF.DA),
                                children: [
                                    (0, r.jsx)(P.f, {
                                        label: Z,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: Z,
                                        error: u,
                                        onChange: k,
                                        onKeyDown: es,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: dF.VP,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: dF.gH,
                                                children: (0, r.jsx)(R.l, {
                                                    selectionMode: "single",
                                                    label: ed.intl.string(ec.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: ed.intl.string(ec.default.NyVn6T),
                                                    options: J,
                                                    value: d,
                                                    onSelectionChange: f,
                                                    disabled: s,
                                                }),
                                            }),
                                            null != er
                                                ? (0, r.jsx)(y.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === er ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === er
                                                              ? ed.intl.string(ec.default.s28pGG)
                                                              : ed.intl.formatToPlainString(ec.default.Wy5aK4, {
                                                                    count: er,
                                                                }),
                                                  })
                                                : null,
                                            (0, r.jsx)(tg, {
                                                settings: g ?? ee.A4,
                                                tiers: ee.lO,
                                                choices: (0, eA.b)()
                                                    ? {
                                                          main: [...ee.vC.main, ...ee.XE.main],
                                                          subagent: [...ee.vC.subagent, ...ee.XE.subagent],
                                                          thinking: ee.vC.thinking,
                                                      }
                                                    : ee.vC,
                                                disabled: s,
                                                onChange: x,
                                            }),
                                            (0, r.jsx)(S.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: ed.intl.string(ed.t.CumH4u),
                                                disabled: c,
                                                loading: s,
                                                onClick: () => w(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("aside", {
                    className: dF.pA,
                    hidden: !ey,
                    "aria-label": ed.intl.string(ec.default.dWgSAa),
                    children: [
                        (0, r.jsxs)("div", {
                            className: dF.IR,
                            children: [
                                (0, r.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: dF.RM,
                                    children: ed.intl.string(ec.default.dWgSAa),
                                }),
                                (0, r.jsxs)("div", {
                                    className: dF.Ss,
                                    children: [
                                        (0, r.jsx)(ej, { importing: z, onImport: F }),
                                        (0, r.jsx)(K.A.Icon, { icon: L.P, tooltip: eS, "aria-label": eS, onClick: eN }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(_.Ip, {
                            className: dF.xe,
                            children: [
                                (0, r.jsx)("div", {
                                    className: dF.Vw,
                                    children: (0, r.jsx)(R.l, {
                                        selectionMode: "single",
                                        label: ed.intl.string(ec.default.U6TqU9),
                                        hideLabel: !0,
                                        options: H,
                                        value: G,
                                        onSelectionChange: q,
                                    }),
                                }),
                                (0, r.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: dF.wE,
                                    children: ed.intl.string(ec.default.JQpNkh),
                                }),
                                ("unattempted" === eu || "loading" === eu) && 0 === X.length
                                    ? (0, r.jsx)("div", { className: dF.E8, children: (0, r.jsx)(A.y, {}) })
                                    : "error" === eu && 0 === X.length
                                      ? (0, r.jsxs)("div", {
                                            className: dF.E8,
                                            children: [
                                                (0, r.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: dF.JS,
                                                    children: ed.intl.string(ec.default.DJAPMO),
                                                }),
                                                (0, r.jsx)(S.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: ed.intl.string(ec.default["WFJ/vb"]),
                                                    onClick: () => (0, eC.hF)(eo),
                                                }),
                                            ],
                                        })
                                      : 0 === X.length
                                        ? (0, r.jsx)("div", {
                                              className: dF.D1,
                                              children: (0, r.jsxs)("div", {
                                                  className: dF.ST,
                                                  children: [
                                                      (0, r.jsx)(D.D, { size: "lg", color: $.A.colors.TEXT_SUBTLE }),
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: dF.sI,
                                                          children: ed.intl.string(ec.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, r.jsx)("div", {
                                              className: dF.Dq,
                                              children: X.map((e) =>
                                                  (0, r.jsx)(
                                                      dB,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => Y(e),
                                                          onRemix: () => (0, l2.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                W.length > 0
                                    ? (0, r.jsxs)("div", {
                                          className: dF.qx,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: dF.uc,
                                                  children: [
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: ed.intl.string(ec.default["wFi8+o"]),
                                                      }),
                                                      (0, r.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: ed.intl.string(ec.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: dF.Dq,
                                                  children: W.map((e) =>
                                                      (0, r.jsx)(
                                                          dB,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => Y(e),
                                                              onRemix: () => (0, l2.A)(e, a),
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
function dV(e) {
    let t,
        { guildId: l, projectId: n } = e,
        a = (0, m.yK)([eE.Ay], () => eE.Ay.getOwnedProjects()),
        s = (0, m.yK)([Y.Ay], () => Y.Ay.getSelfMember(l)?.roles ?? [], [l]),
        o = (0, m.bG)(
            [Q.A, Z.A],
            () => {
                let e = Q.A.getGuild(l);
                return null != e && Z.A.can(eb.xBc.MANAGE_GUILD, e);
            },
            [l],
        ),
        [u, c] = i.useState(""),
        d = n ?? null,
        [f, h] = i.useState(!1),
        [g, x] = i.useState(null),
        p = (0, t3.z9)("VibegrationsScreen"),
        [y, k] = i.useState(null),
        w = (0, z.o)().get(tJ.f_) === eK;
    i.useEffect(() => {
        k(null);
    }, [l, w]);
    let N = i.useMemo(() => (!w && p.some((e) => e.id === l) ? l : eK), [p, l, w]),
        A = y ?? N,
        S = A === eK ? "user" : "guild",
        C = A === eK ? l : A,
        [E, I] = i.useState(null);
    (i.useEffect(() => {
        (0, eC.hF)(l);
    }, [l, s, o]),
        i.useEffect(() => {
            (0, eC.dm)(l, d);
        }, [l, d]));
    let M = i.useCallback(
            async (e, t, l) => {
                let n = await (0, eC.gA)({ guild_id: t, install_scope: l });
                ((0, er.Hc)(n),
                    (0, er.r2)(n, E ?? ee.A4),
                    e(n),
                    (0, V.pX)(eb.BVt.CHANNEL(t, ey.VV.CONJURE, n)),
                    c(""),
                    I(null));
            },
            [E],
        ),
        T = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    l = eS({ idea: t, installScope: S, submitting: f });
                if ("idea" !== l && "submitting" !== l) {
                    (null != e && c(e), h(!0), x(null));
                    try {
                        await M((e) => (0, er.dv)(e, t), C, S);
                    } catch (e) {
                        x((0, eN.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [M, S, C, u, f],
        ),
        _ = i.useCallback(
            async (e) => {
                if (!f) {
                    (h(!0), x(null));
                    try {
                        await M(
                            (t) => {
                                var l;
                                (0, er.dv)(
                                    t,
                                    ((l = e.name),
                                    ed.intl.formatToPlainString(ec.default["0PQip6"], { templateName: l })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            C,
                            S,
                        );
                    } catch (e) {
                        x((0, eN.mG)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [M, S, C, f],
        ),
        P = i.useCallback(
            async (e, t) => {
                let l = await (0, eC.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, er.Hc)(l), (0, er.r2)(l, E ?? ee.A4), (0, er.dv)(l, (0, l3.Wl)(e)), l);
            },
            [E],
        ),
        R = i.useCallback(async (e, t, l, n) => {
            if (eE.Ay.getProject(t)?.guild_id !== l) {
                let e = await (0, eC.M7)(t, { guild_id: l, preview_guild_id: l });
                if (!e.ok) throw new eN.DS((0, eN.hj)(e), e.status);
            }
            ((0, er.dv)(t, n, void 0, { templateId: e.id }), (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, t)), I(null));
        }, []),
        L = i.useCallback((e) => {
            (0, eC.xx)(e).catch(() => void 0);
        }, []),
        D = i.useCallback(
            (e) => {
                let t = eE.Ay.getProject(e)?.guild_id ?? l;
                ((0, V.pX)(eb.BVt.CHANNEL(t, ey.VV.CONJURE, e)), I(null));
            },
            [l],
        ),
        [$, F] = i.useState(!1),
        O = i.useCallback(
            async (e, t) => {
                let n = ef(e);
                if (null != n) return void (0, v.P)((0, j.o)(n, b.Ck.FAILURE));
                F(!0);
                let a = null;
                try {
                    ((a = await (0, eC.gA)({ guild_id: l, install_scope: t })),
                        (0, er.Hc)(a),
                        (0, er.r2)(a, E ?? ee.A4),
                        await em(a, e, ed.intl.string(ec.default["LUc7/5"])),
                        (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, a)),
                        I(null));
                } catch {
                    (null != a && (await (0, eC.xx)(a).catch(() => void 0)),
                        (0, v.P)((0, j.o)(ed.intl.string(ec.default["Q+l4Hv"]), b.Ck.FAILURE)));
                } finally {
                    F(!1);
                }
            },
            [l, E],
        ),
        U = i.useCallback(
            (e) => {
                (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE, e));
            },
            [l],
        ),
        G = i.useCallback(() => {
            (0, V.pX)(eb.BVt.CHANNEL(l, ey.VV.CONJURE));
        }, [l]),
        q = i.useCallback((e) => {
            (c(e), x(null));
        }, []),
        B = (0, m.bG)(
            [eE.Ay],
            () => {
                if (null == d) return null;
                let e = eE.Ay.getProject(d);
                return null == e || (0, eE.PV)(e) || e.guild_id === l ? e : null;
            },
            [d, l],
        ),
        H = (0, m.bG)([eE.Ay], () => eE.Ay.hasFetchedGuildProjects(l), [l]);
    return null != d
        ? (0, r.jsx)(dH, { project: B, projectsLoaded: H, onBack: G, guildId: l }, d)
        : (0, r.jsx)(dK, {
              projects: a,
              modelSettings: E,
              onModelSettingsChange: I,
              idea: u,
              guildId: l,
              submitting: f,
              createError: g,
              createDisabled: "idea" === (t = eS({ idea: u, installScope: S, submitting: f })) || "submitting" === t,
              onSelectProject: U,
              onIdeaChange: q,
              onCreate: T,
              onCreateFromTemplate: _,
              onStartTemplate: P,
              onSubmitTemplate: R,
              onCancelTemplate: L,
              onSkipTemplate: D,
              onImportNewProject: O,
              importing: $,
              conjureTarget: A,
              onConjureTargetChange: k,
              eligibleGuilds: p,
          });
}
