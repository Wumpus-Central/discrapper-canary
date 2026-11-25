n.d(t, { A: () => h5 });
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    o = n(503698),
    u = n.n(o),
    c = n(855986),
    d = n(866665),
    f = n(821609),
    m = n(625903),
    h = n(259730),
    g = n(604525),
    p = n(534514),
    x = n(834730),
    v = n(289873),
    b = n(646973),
    j = n(742589),
    y = n(287809),
    k = n(723702),
    w = n(839214);
n(321073);
let A = Object.freeze({ x: 0.5, y: 0.5 });
function S(e) {
    return "" !== e.trim();
}
function C(e) {
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
function N(e) {
    let { kind: t, name: n } = C(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function I(e) {
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
let E = "[conjure:selected] ",
    _ = " \u2014 ";
function M(e) {
    if (!e.startsWith(E)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(E.length),
        a = r.indexOf(_),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let R = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    P = new Map(),
    T = new Set();
function L(e) {
    return P.get(e) ?? R;
}
function $(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? P.set(e, t) : P.delete(e), [...T]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function D(e) {
    let t = L(e);
    t.active || $(e, { ...t, active: !0 });
}
function q(e) {
    let t = L(e);
    t.active && $(e, { ...t, active: !1 });
}
function F(e) {
    P.has(e) && $(e, R);
}
function O(e, t) {
    let n = L(e);
    n.active && $(e, { ...n, context: t });
}
function G(e, t) {
    return null != t && e.authorId === t;
}
function z(e) {
    return (
        T.add(e),
        () => {
            T.delete(e);
        }
    );
}
function U(e) {
    let t = i.useCallback(() => (null == e ? R : L(e)), [e]);
    return i.useSyncExternalStore(z, t, t);
}
(n(134528), n(947204));
let B = { past: [], present: [], future: [] };
function K(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function H(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function W(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => H(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: H(e.from, t, n), to: H(e.to, t, n) };
        case "text":
            return { ...e, at: H(e.at, t, n) };
    }
}
function V(e) {
    return e.some((e) => "erase" !== e.kind);
}
function X(e, t) {
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
function Y(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function Q(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function Z(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => Q(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = Q(e.from, t),
                l = Q(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = Q(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function J(e) {
    return V(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let ee = [3, 6, 12],
    et = [10, 20, 40],
    en = new Map(),
    el = (0, w.D)(() => ({ byProject: {} })),
    er = {
        active: !0,
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: B,
        sketchDismissedFor: null,
        chatFocusRequest: 0,
        keptStill: null,
    };
function ea(e) {
    return el.getState().byProject[e] ?? null;
}
function ei(e, t) {
    let n = ea(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = el.getState();
    el.setState({ byProject: { ...r, [e]: l } });
}
function es(e, t) {
    null == t ? en.delete(e) : en.set(e, t);
}
function eo(e) {
    return en.get(e)?.() ?? Promise.resolve(null);
}
function eu(e) {
    let t = ea(e);
    if (null != t) {
        if (!J(t)) return void ec(e);
        (t.active && ei(e, (t) => ({ ...t, active: !1, keptStill: eo(e) })), F(e));
    }
}
function ec(e) {
    if (null == ea(e)) return;
    let { [e]: t, ...n } = el.getState().byProject;
    (el.setState({ byProject: n }), F(e));
}
function ed(e, t) {
    null != ea(e) &&
        (ei(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? D(e) : q(e));
}
function ef(e, t) {
    ei(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return K(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return K(
                        e,
                        e.present.map((e) => (e.id === t.id ? W(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : K(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : K(e, []);
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
function em(e) {
    ei(e, (e) => ({ ...e, chatFocusRequest: e.chatFocusRequest + 1 }));
}
function eh(e) {
    return el.useState((t) => null != e && t.byProject[e]?.active === !0);
}
var eg = n(314116),
    ep = n(858899),
    ex = n(949757),
    ev = n(800202),
    eb = n(191850),
    ej = n(792996),
    ey = n(540665);
let ek = new Set(),
    ew = null;
function eA(e, t) {
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
                ek.add(t),
                () => {
                    ek.delete(t);
                }
            );
        }, [e]));
}
var eS = n(400421),
    eC = n(573083),
    eN = n(971079),
    eI = n(61577),
    eE = n(686507),
    e_ = n(192308),
    eM = n(128761),
    eR = n(503922),
    eP = n(967008),
    eT = n(777847),
    eL = n(227007),
    e$ = n(398773),
    eD = n(735769),
    eq = n(513845),
    eF = n(802905),
    eO = n(951178);
let eG = { width: 320, height: 240 };
function ez(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : eG;
}
function eU(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function eB(e) {
    return ez(e?.preview_overlay_widget ?? null);
}
var eK = n(855859),
    eH = n(238490),
    eW = n(991690);
function eV(e) {
    return e
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .replace(/^-+|-+$/g, "");
}
var eX = n(696645);
function eY(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function eQ(e, t) {
    if ("bot" === e.mode) return ej.intl.string(eb.default.gThNz6);
    if ("frame" === e.mode && e.surface === eW.U.APP_CHANNEL) {
        let n = e.appChannel ?? eV(t);
        if ("" !== n) return `#${n}`;
    }
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, eX.X)(e.surface)
                : ej.intl.formatToPlainString(eb.default["6xVl+N"], {
                      surface: (0, eX.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return ej.intl.string(eb.default.y5GiL1);
        case "overlay":
            return ej.intl.string(eb.default["2940LX"]);
        case "bot":
            return ej.intl.string(eb.default.tjpaGN);
    }
}
var eZ = n(939398),
    eJ = n(52724),
    e0 = n(323384),
    e1 = n(983851),
    e2 = n(794083),
    e3 = n(861004),
    e4 = n(687966),
    e5 = n(430392),
    e7 = n(939249),
    e8 = n(789645),
    e9 = n(388155);
function e6(e, t) {
    return `${e}-tab-${eY(t).replace(/\s+/g, "-")}`;
}
function te(e, t) {
    let n = e.getBoundingClientRect(),
        l = t.getBoundingClientRect();
    l.left < n.left ? (e.scrollLeft -= n.left - l.left) : l.right > n.right && (e.scrollLeft += l.right - n.right);
}
let tt = { [eW.U.APP_CHANNEL]: e0.AppsIcon, [eW.U.VOICE_CHANNEL]: e1.VoiceNormalIcon, [eW.U.MAIN]: e2.ActivitiesIcon };
function tn(e) {
    let { targets: t, activeTarget: n, projectName: l, onSelect: r, closableTarget: s, onClose: o, panelId: c } = e,
        f = null == n ? null : eY(n),
        m = null == s ? null : eY(s),
        h = t.findIndex((e) => eY(e) === m),
        g = t.some((e) => eY(e) === f) ? f : t.length > 0 ? eY(t[0]) : null,
        p = ej.intl.string(eb.default["/TlGcK"]),
        v = i.useRef(null),
        b = i.useRef(null),
        j = i.useRef(null);
    i.useEffect(() => {
        let e = v.current;
        if (null != e)
            return (e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t));
        function t(t) {
            if (null == e || Math.abs(t.deltaY) <= Math.abs(t.deltaX)) return;
            let n = Math.abs(e.scrollLeft);
            (t.deltaY > 0 ? n < e.scrollWidth - e.clientWidth - 1 : n > 1) &&
                (t.preventDefault(), (e.scrollLeft += "rtl" === getComputedStyle(e).direction ? -t.deltaY : t.deltaY));
        }
    }, [v]);
    let y = (function (e, t) {
        let [n, l] = i.useState(!1),
            [r, a] = i.useState(!1);
        return (
            i.useLayoutEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = "rtl" === getComputedStyle(t).direction;
                function r() {
                    if (null == t) return;
                    let e = Math.abs(t.scrollLeft),
                        r = e > 1,
                        i = e < t.scrollWidth - t.clientWidth - 1;
                    (l(n ? i : r), a(n ? r : i));
                }
                r();
                let i = new ResizeObserver(r);
                for (let e of (i.observe(t), t.querySelectorAll(`.${e9.Mf}`))) i.observe(e);
                return (
                    t.addEventListener("scroll", r, { passive: !0 }),
                    () => {
                        (i.disconnect(), t.removeEventListener("scroll", r));
                    }
                );
            }, [e, t]),
            { left: n, right: r }
        );
    })(v, t);
    async function k(e) {
        let t,
            n = b.current;
        if (null == n) return;
        let l = (0, eJ.C)({
                getFocusableElements: () => Array.from(n.querySelectorAll('[role="tab"]')),
                getActiveElement: () => n.ownerDocument.activeElement,
            }),
            r = "rtl" === getComputedStyle(n).direction;
        switch (e.key) {
            case "ArrowLeft":
            case "ArrowRight":
                t =
                    ("ArrowRight" === e.key) !== r
                        ? l.getNextFocusableElement({ wrap: !0 })
                        : l.getPreviousFocusableElement({ wrap: !0 });
                break;
            case "Home":
                t = l.getFirstFocusableElement();
                break;
            case "End":
                t = l.getLastFocusableElement();
                break;
            default:
                return;
        }
        (e.preventDefault(), (await t)?.focus());
    }
    function w(e) {
        let t = v.current,
            n = e.currentTarget.closest(`.${e9.Mf}`);
        null != t && null != n && te(t, n);
    }
    i.useLayoutEffect(() => {
        let e = v.current,
            t = j.current;
        null != e && null != t && te(e, t);
    }, [f]);
    let A = h < 0 ? null : eQ(t[h], l);
    return (0, a.jsxs)("div", {
        ref: v,
        className: u()(e9.vR, { [e9.e$]: y.left, [e9.Rh]: y.right }),
        children: [
            (0, a.jsx)("div", {
                ref: b,
                className: e9.gj,
                role: "tablist",
                "aria-label": ej.intl.string(eb.default.I2ucou),
                children: t.map((e, t) => {
                    let n = eY(e),
                        i = n === f,
                        s = eQ(e, l),
                        o = (function (e) {
                            switch (e.mode) {
                                case "frame":
                                    return tt[e.surface];
                                case "widget":
                                    return e3.UserSquareIcon;
                                case "overlay":
                                    return e4.GameControllerIcon;
                                case "bot":
                                    return e5.RobotIcon;
                            }
                        })(e);
                    return (0, a.jsx)(
                        "div",
                        {
                            ref: i ? j : void 0,
                            className: u()(e9.Mf, { [e9.yR]: i, [e9.P5]: t === h, [e9.h5]: h >= 0 && t > h }),
                            children: (0, a.jsxs)(e7.D, {
                                id: e6(c, e),
                                className: e9.eg,
                                role: "tab",
                                "aria-selected": i,
                                "aria-controls": i ? c : void 0,
                                tabIndex: n === g ? 0 : -1,
                                onClick: () => r(e),
                                onKeyDown: k,
                                onFocus: w,
                                children: [
                                    (0, a.jsx)(o, { size: "sm", color: "currentColor", className: e9.Ll }),
                                    (0, a.jsx)(x.E, {
                                        variant: "body-sm/medium",
                                        color: "none",
                                        lineClamp: 1,
                                        className: e9.Gn,
                                        children: s,
                                    }),
                                ],
                            }),
                        },
                        n,
                    );
                }),
            }),
            null != A
                ? (0, a.jsx)(d.m, {
                      position: "bottom",
                      text: p,
                      ariaHidden: !0,
                      children: (0, a.jsx)(e7.D, {
                          className: e9.b,
                          onClick: o,
                          "aria-label": `${p}, ${A}`,
                          children: (0, a.jsx)(e8.XSmallIcon, { size: "sm", color: "currentColor" }),
                      }),
                  })
                : null,
        ],
    });
}
var tl = n(27184),
    tr = n(627363),
    ta = n(233470),
    ti = n(153207),
    ts = n(260498),
    to = n(625180),
    tu = n(672929),
    tc = n(111534),
    td = n(754027),
    tf = n(165610),
    tm = n(738604),
    th = n(485104),
    tg = n(141299),
    tp = n(530165),
    tx = n(457827),
    tv = n(722701),
    tb = n(962998),
    tj = n(585412),
    ty = n(165862),
    tk = n(477782),
    tw = n(442433),
    tA = n(167483),
    tS = n(719593),
    tC = n(265872),
    tN = n(405433),
    tI = n(42473),
    tE = n(811587),
    t_ = n(95264),
    tM = n(412073);
function tR(e) {
    var t;
    let l,
        r,
        { project: s, guildId: o } = e,
        d =
            ((l = s?.id),
            (null !=
            (r = (0, c.bG)([tv.A], () => (null == l ? null : (tv.A.getPublishStatus(l)?.publishState ?? null)), [l]))
                ? (0, tE.l)(r)
                : (s?.supported_surfaces?.length ?? 0) > 0) && (0, ts.H_)(s)),
        { canShare: f } =
            ((t = s.id),
            (0, c.cf)(
                [ts.Ay, tv.A],
                () => {
                    let e = ts.Ay.getProject(t),
                        n = tv.A.getPublishStatus(t)?.publishState,
                        l = null != e && (0, ts.PV)(e);
                    return { canShare: null != e && null != n && (l ? "nothing_built" !== n : (0, tE.l)(n)) };
                },
                [t],
            )),
        m = i.useCallback(() => {
            null != s && (0, t_.A)(s, o);
        }, [s, o]),
        h = i.useRef(null);
    if (!d && !f) return null;
    let g = ej.intl.string(eb.default.XWgAfc),
        p = ej.intl.string(ej.t.RDE0Sc);
    return (0, a.jsx)(tC.Q, {
        targetElementRef: h,
        position: "bottom",
        align: "right",
        ignoreModalClicks: !0,
        renderPopout: async () => {
            let { default: e } = await Promise.all([n.e(440720), n.e(159957), n.e(441532), n.e(838858)]).then(
                n.bind(n, 958234),
            );
            return () => (0, a.jsx)(e, { projectId: s.id });
        },
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, a.jsxs)("div", {
                ref: h,
                className: u()(tM.Os, { [tM.q6]: l }),
                children: [
                    d
                        ? (0, a.jsx)(tI.A, {
                              className: u()(tM.MX, tM.mz, { [tM.JA]: f }),
                              icon: (0, a.jsx)(x.E, { variant: "body-sm/medium", color: "none", children: g }),
                              "aria-label": g,
                              tooltipText: null,
                              onClick: m,
                          })
                        : null,
                    f
                        ? (0, a.jsx)(tI.A, {
                              className: u()(tM.MX, tM.uM, { [tM.w9]: d }),
                              icon: tN.ShareIcon,
                              tooltipText: p,
                              tooltipShouldShow: !l,
                              onClick: n,
                          })
                        : null,
                ],
            });
        },
    });
}
var tP = n(616334),
    tT = n(450030),
    tL = n(812771),
    t$ = n(58736),
    tD = n(743898),
    tq = n(333007),
    tF = n(621466),
    tO = n(775121),
    tG = n(989145),
    tz = n(81369),
    tU = n(826745),
    tB = n(34595),
    tK = n(470779);
function tH(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: o,
            onSubmit: c,
            onDismiss: f,
            canSubmit: m,
            closing: h,
            onUploadFile: g,
            anchor: p = "chip",
            allowAttachments: x = !0,
            placeholder: v,
            label: b,
        } = e,
        {
            drafts: j,
            addFiles: y,
            pasteFiles: k,
            removeDraft: w,
            settled: A,
            takeRefs: S,
        } = (0, tB.FM)({ projectId: t, surface: "design", onUploadFile: g }),
        C = i.useRef(null),
        N = (m || j.length > 0) && A && !h,
        I = i.useCallback(() => {
            if (!N) return;
            let e = S();
            c(e.length > 0 ? e : void 0);
        }, [N, S, c]),
        [E, _] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => _(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let M = i.useRef(null),
        [R, P] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = M.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => P({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let T = R?.height ?? 44,
        L = l.left + 8,
        $ = l.top + 8,
        D = Math.max(n.x, L),
        q = Math.min(Math.max("point" === p ? n.y : n.y + 32 + 4, $), Math.max($, l.top + l.height - T - 8));
    return (0, a.jsxs)("div", {
        ref: M,
        className: u()(tK.M0, { [tK.ho]: E && !h, [tK.ET]: h }),
        style: { left: D, top: q },
        "data-testid": "conjure-design-compose-bar",
        children: [
            x
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: C,
                              type: "file",
                              multiple: !0,
                              className: tK.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (y(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(d.m, {
                              position: "bottom",
                              text: ej.intl.string(eb.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: tK.tY,
                                  onClick: () => C.current?.click(),
                                  "aria-label": ej.intl.string(eb.default.lgvqSB),
                                  children: (0, a.jsx)(tz.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: tK.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(tU.y, {
                autoFocus: !0,
                rows: 1,
                className: tK.hF,
                value: s,
                placeholder: v ?? ("" === r ? ej.intl.string(eb.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": b ?? ej.intl.string(eb.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: h || !x ? void 0 : k,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), f());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), I());
                },
            }),
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: tK.ZO,
                      children: j.map((e) => (0, a.jsx)(tB.Nl, { draft: e, onRemove: w }, e.localId)),
                  })
                : null,
        ],
    });
}
function tW(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function tV(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tX(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? tW(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = tW(e());
                l((e) => (tV(e, t) ? e : t));
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
var tY = n(876798),
    tQ = n(408278),
    tZ = n(48507),
    tJ = n(193885),
    t0 = n(744898),
    t1 = n(803656),
    t2 = n(241326),
    t3 = n(972213),
    t4 = n(646514);
function t5(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function t7(e, t, n) {
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
let t8 = t7("red", t5(t4.A.unsafe_rawColors.RED_400), () => ej.intl.string(eb.default.tvXfjt)),
    t9 = [
        t8,
        t7("yellow", t5(t4.A.unsafe_rawColors.YELLOW_300), () => ej.intl.string(eb.default.FYuaJ1)),
        t7("green", t5(t4.A.unsafe_rawColors.GREEN_360), () => ej.intl.string(eb.default["Vv+paS"])),
        t7("blue", t5(t4.A.unsafe_rawColors.BLUE_345), () => ej.intl.string(eb.default.k9b1QJ)),
        t7("white", t5(t4.A.unsafe_rawColors.WHITE), () => ej.intl.string(eb.default["1sOXwH"])),
    ];
function t6(e) {
    return t9.find((t) => t.id === e) ?? t8;
}
var ne = n(39416);
function nt(e) {
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
function nn(e) {
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
function nl(e) {
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
function nr(e) {
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
let na = ee.map((e) => nr(Math.min(16, e + 3))),
    ni = et.map((e) => nr(Math.min(16, e / 2.5))),
    ns = [eb.default.jZtZUr, eb.default.cTQdD0, eb.default.J3ucEg],
    no = {
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
            label: () => ej.intl.string(eb.default.oIZQbm),
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
            label: () => ej.intl.string(eb.default.ARNVr7),
        },
    };
function nu(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(d.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: ne.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(tY.k, {
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
function nc(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(d.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tQ.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function nd(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: ne.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: ne.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function nf(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: f } = n,
        m = t6(n.colorId),
        h = no[u],
        g = ej.intl.string(eb.default.hUm825),
        p = ej.intl.string(eb.default.n5IA3a),
        x = ej.intl.string(eb.default.r5dX6t),
        v = ej.intl.string(eb.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: ne.t$,
        children: [
            (0, a.jsx)("div", {
                className: ne.NT,
                children: (0, a.jsx)(nu, {
                    icon: nn,
                    label: ej.intl.string(eb.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => ed(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ne.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": ej.intl.string(eb.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(nu, {
                        icon: nt,
                        label: ej.intl.string(eb.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => ed(t, "move"),
                    }),
                    (0, a.jsx)(nu, {
                        icon: tZ.LettersIcon,
                        label: ej.intl.string(eb.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => ed(t, "text"),
                    }),
                    (0, a.jsx)(nd, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(nu, {
                                icon: tJ.PaintbrushThinIcon,
                                label: g,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (ed(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            na.map((n, l) =>
                                (0, a.jsx)(
                                    nu,
                                    {
                                        icon: n,
                                        label: ej.intl.string(ns[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (ei(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), q(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(nd, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(nu, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (ed(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(no).map((n) =>
                                (0, a.jsx)(
                                    nu,
                                    {
                                        icon: no[n].icon,
                                        label: no[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (ed(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(nd, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(nu, {
                                icon: nl,
                                label: p,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (ed(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            ni.map((n, l) =>
                                (0, a.jsx)(
                                    nu,
                                    {
                                        icon: n,
                                        label: ej.intl.string(ns[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (ei(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), q(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(nd, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(nc, { icon: m.icon, label: v, onClick: e }),
                        children: (e) =>
                            t9.map((n) =>
                                (0, a.jsx)(
                                    nu,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === m.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                ei(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: ne.Gz, role: "separator" }),
                    (0, a.jsx)(nc, {
                        icon: t0.UndoIcon,
                        label: ej.intl.string((0, k.cX)() ? eb.default["j/XmBQ"] : eb.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(nc, {
                        icon: t1.RedoIcon,
                        label: ej.intl.string((0, k.cX)() ? eb.default.C7jhpn : eb.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(nc, {
                        icon: t2.TrashIcon,
                        label: ej.intl.string(eb.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: ne.Gz, role: "separator" }),
                    (0, a.jsx)(nc, { icon: t3.XLargeIcon, label: ej.intl.string(eb.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let nm = t4.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    nh = t4.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    ng = t4.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function np(e, t, n) {
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
                    (e.strokeStyle = ng),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function nx(e) {
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
let nv = { dx: 0, dy: 0 },
    nb = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    nj = 1;
function ny(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = el.useState((e) => (null == s ? null : (e.byProject[s] ?? null))),
        { active: u } = U(s),
        c = (0, e_.Rv)(),
        [d, f] = i.useState(!1);
    i.useEffect(() => {
        if (null != s)
            return () => {
                ea(s)?.active === !0 && ec(s);
            };
    }, [s]);
    let m = o?.active === !0 && "pick" === o.tool;
    i.useEffect(() => {
        null != s && m && !u && D(s);
    }, [s, m, u]);
    let h = i.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, tl.wn)(e);
        if (null != t) return t;
        function n() {
            f(!1);
        }
        (0, tq.flushSync)(() => f(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, tl.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (i.useEffect(() => {
        if (null != s) return (es(s, h), () => es(s, null));
    }, [s, h]),
    null == s || null == o || !o.active || c)
        ? null
        : (0, a.jsx)(nk, { projectId: s, state: o, capturing: d, resolveIframe: r });
}
function nk(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tX(r),
        [o, u] = i.useState(null),
        [c, d] = i.useState(0),
        [f, m] = i.useState(null),
        [h, g] = i.useState(nv),
        p = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(null),
        b = i.useRef(null),
        j = i.useRef(null),
        { tool: y, history: k } = n,
        w = t6(n.colorId),
        A = "pick" !== y,
        S = "marker" === n.tool ? ee[n.markerSize] : "eraser" === n.tool ? et[n.eraserSize] : null,
        C = "eraser" === y ? null : w.value,
        N = i.useMemo(
            () =>
                null == S
                    ? void 0
                    : (function (e, t) {
                          let n = Math.ceil(Math.max(e, 24) / 2),
                              l = 2 * n + 4;
                          if (l > 128) return "crosshair";
                          let r = l / 2,
                              a = (e, t) => `<circle cx="${r}" cy="${r}" r="${e}" ${t}/>`,
                              i = [
                                  `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${l}" viewBox="0 0 ${l} ${l}">`,
                                  a(n, `fill="none" stroke="${nh}" stroke-width="4"`),
                                  a(n, `fill="none" stroke="${nm}" stroke-width="2"`),
                                  a(3, `fill="${t ?? nm}" stroke="${nh}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(i)}") ${r} ${r}, crosshair`;
                      })(S, C),
            [S, C],
        ),
        I = "move" === y ? (k.present.find((e) => e.id === f) ?? null) : null,
        E = null != s;
    (i.useLayoutEffect(() => {
        d(x.current?.offsetWidth ?? 0);
    }, [E]),
        i.useLayoutEffect(() => {
            j.current = o;
        }, [o]));
    let _ = i.useCallback(() => {
        let e = p.current;
        if (null == e || null == s) return;
        let t = window.devicePixelRatio,
            n = Math.round(s.width * t),
            l = Math.round(s.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let r = e.getContext("2d");
        if (null == r) return;
        (r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, n, l), r.setTransform(t, 0, 0, t, 0, 0));
        let a = b.current,
            i = null == a ? k.present : k.present.map((e) => (e.id === a.id ? W(e, h.dx, h.dy) : e)),
            o = v.current;
        np(r, null == o ? i : [...i, o], { width: s.width, height: s.height });
    }, [s, k.present, h]);
    i.useLayoutEffect(_, [_]);
    let M = i.useCallback(
            (e) =>
                null == s ? { x: 0, y: 0 } : { x: (e.clientX - s.left) / s.width, y: (e.clientY - s.top) / s.height },
            [s],
        ),
        R = i.useCallback(() => {
            let e = j.current;
            if (null == e || null == s) return;
            j.current = null;
            let n = {
                id: `mark-${nj++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            (X(n, s) && ef(t, { type: "commit", shape: n }), u(null), em(t));
        }, [t, w, s]),
        P = i.useCallback(() => {
            ((j.current = null), u(null), em(t));
        }, [t]),
        T = i.useCallback(
            (e) => {
                if (0 !== e.button || null == s) return;
                if (null != j.current) return void R();
                let t = M(e);
                switch (y) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * s.width, y: t.y * s.height },
                            l = null == I ? null : Z(I, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? I
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = Q(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => Q(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (Y(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = Q(e.from, n),
                                                                  r = Q(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => Y(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = Q(e.from, n),
                                                                  r = Q(e.to, n),
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
                                                              let t = Z(e, n);
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
                                      })(k.present, t, s);
                        if ((m(r?.id ?? null), null == r)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (b.current = { id: r.id, origin: t }));
                        return;
                    }
                    case "text":
                        u({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!V(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${nj++}`,
                                kind: "erase",
                                width: et[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${nj++}`,
                                kind: "marker",
                                color: w.value,
                                width: ee[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${nj++}`,
                                kind: y,
                                color: w.value,
                                width: 4 / s.width,
                                from: t,
                                to: t,
                            }));
                }
                _();
            },
            [s, y, w, I, k.present, n.markerSize, n.eraserSize, M, R, _],
        ),
        L = i.useCallback(
            (e) => {
                let t = M(e),
                    n = b.current;
                if (null != n) return void g({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = v.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (v.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (v.current = { ...l, to: t }),
                    _());
            },
            [M, _],
        ),
        $ = i.useCallback(() => {
            p.current?.removeAttribute("data-dragging");
            let e = b.current;
            if (null != e) {
                ((b.current = null), g(nv), ef(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && X(n, s) ? (ef(t, { type: "commit", shape: n }), em(t)) : _());
        }, [t, s, h, _]),
        D = i.useCallback(() => eu(t), [t]),
        q = i.useCallback(() => ef(t, { type: "undo" }), [t]),
        F = i.useCallback(() => ef(t, { type: "redo" }), [t]),
        O = i.useCallback(() => ef(t, { type: "clear" }), [t]),
        G = i.useRef({ tool: y, selected: I, exit: D, undo: q, redo: F });
    if (
        (i.useLayoutEffect(() => {
            G.current = { tool: y, selected: I, exit: D, undo: q, redo: F };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, tF.Cw)((0, tF.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != j.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = G.current,
                    s = e.key.toLowerCase();
                if (e.metaKey || e.ctrlKey) {
                    if (e.altKey || ("z" !== s && "y" !== s)) return;
                    (e.preventDefault(), "y" === s || e.shiftKey ? i() : a());
                    return;
                }
                if (e.altKey) return;
                if ("Escape" === e.key) {
                    if ("pick" === n) return;
                    (e.preventDefault(), null != l ? m(null) : r());
                    return;
                }
                if (("Delete" === e.key || "Backspace" === e.key) && null != l) {
                    (e.preventDefault(), ef(t, { type: "remove", id: l.id }), m(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = nb[s];
                null != o && (e.preventDefault(), ed(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (A) return (tO.A.disable(), () => tO.A.enable());
        }, [A]),
        null == s)
    )
        return null;
    let z = Math.max(8, s.left - c - 8),
        U = null == I ? null : Z(null == b.current ? I : W(I, h.dx, h.dy), s);
    return (0, tq.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: ne.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: ne.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: p,
                            className: ne.Ji,
                            "data-tool": y,
                            "data-interactive": A && !l ? "" : void 0,
                            "aria-label": ej.intl.string(eb.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            style: { cursor: l ? void 0 : N },
                            onPointerDown: T,
                            onPointerMove: L,
                            onPointerUp: $,
                            onPointerCancel: $,
                        }),
                        null == U
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: ne.r1,
                                  style: { left: U.x, top: U.y, width: U.width, height: U.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: ne.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: ne.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: ne.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: ne.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == o
                    ? null
                    : (0, a.jsx)(tH, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + o.at.x * s.width, y: s.top + o.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: ej.intl.string(eb.default["8gX1lw"]),
                          label: ej.intl.string(eb.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: o.value,
                          onChange: (e) => u((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: R,
                          onUploadFile: (e) => (0, tG.vX)(t, e),
                          onDismiss: P,
                          canSubmit: "" !== o.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: x,
                    className: ne.ej,
                    style: { left: z, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(nf, { projectId: t, state: n, onExit: D, onUndo: q, onRedo: F, onClear: O }),
                }),
            ],
        }),
        document.body,
    );
}
var nw = n(308081),
    nA = n(516521),
    nS = n(683071),
    nC = n(65593),
    nN = n(218394),
    nI = n(115982),
    nE = n(886540);
function n_(e) {
    return !(0, nE.BL)(e) && !0 !== e.stopRequested;
}
var nM = n(104317),
    nR = n(643278),
    nP = n(566424),
    nT = n(683063),
    nL = n(140735),
    n$ = n(847374),
    nD = n(320448),
    nq = n(138212);
function nF(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: u()(nq.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: u()(nq.wx, null != n && nq.o5, i),
                children: [
                    (0, a.jsx)(x.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nO = n(148590);
function nG(e) {
    let { children: t } = e;
    return (0, a.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nz(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: o,
            beforeBody: c,
            children: d,
            ...f
        } = e,
        m = i.useId(),
        [h, g] = i.useState(!l),
        [p, x] = i.useState(l);
    p !== l && (x(l), g(!l));
    let v = i.useCallback(() => g((e) => !e), []),
        b = h ? n$.ChevronSmallDownIcon : nD.ChevronSmallRightIcon,
        j = null != n || l;
    return (0, a.jsxs)(nF, {
        ...f,
        title: t,
        trailing: j
            ? (0, a.jsxs)("span", {
                  className: nO.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(e7.D, {
                                className: nO.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": m,
                                "aria-label": h ? s : r,
                                children: (0, a.jsx)(b, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : nO.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: m, className: u()(nO.rf, o), hidden: !h, children: d })],
    });
}
var nU = n(883646);
let nB = [];
function nK(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: u()(nU.xL, {
            [nU.Vb]: "in_progress" === t,
            [nU.cT]: "completed" === t,
            [nU.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ej.intl.string(eb.default.KvBdun);
                case "in_progress":
                    return ej.intl.string(eb.default["m5G9+S"]);
                case "unfinished":
                    return ej.intl.string(eb.default.lRpwhD);
                default:
                    return ej.intl.string(eb.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(v.y, {
                type: v.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: nU.Qd,
                itemClassName: nU.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: nU.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: nU.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nH(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : nB), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [c, d] = i.useState(s),
        [f, m] = i.useState(!1);
    c !== s && (d(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && m(!1));
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
                    e = requestAnimationFrame(() => m(!0));
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
        className: nU.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    nT.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: nU.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      className: nU.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function nW(e) {
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
        c =
            ((t = (r ?? nB).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? nB),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: nU.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: u()(nU.AS, { [nU.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(nK, { status: n }),
                            (0, a.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nU.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: nU.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(nH, { agents: c.get(e.id) ?? nB, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: nU.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(nK, { status: "pending" }),
                          (0, a.jsx)(x.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nU.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: nU.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nV(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = ej.intl.formatToPlainString(eb.default["P/I+JW"], { completed: o, total: u }),
        d = ej.intl.formatToPlainString(eb.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(nz, {
        title: ej.intl.string(eb.default.RtzECX),
        meta: (0, a.jsx)(nG, { children: c }),
        superseded: s,
        showLabel: ej.intl.string(eb.default.RKyN9q),
        hideLabel: ej.intl.string(eb.default.xydHoj),
        className: nU.Nr,
        bodyClassName: nU.rf,
        beforeBody: r && !s ? (0, a.jsx)(nL.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(nW, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nX = n(308665),
    nY = n(59678),
    nQ = n(903847);
function nZ(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: c } = e,
        f = null != n,
        [m, h] = i.useState(n ?? "top"),
        [g, p] = i.useState(f),
        [x, v] = i.useState(!1),
        [b, j] = i.useState(!1),
        [y, k] = i.useState(f);
    (y !== f && (k(f), null != n ? (h(n), p(!0)) : (v(!1), j(!1))),
        i.useEffect(() => {
            if (f || !g) return;
            let e = setTimeout(() => p(!1), 150);
            return () => clearTimeout(e);
        }, [f, g]),
        i.useEffect(() => {
            if (!g || !f) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => v(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [g, f]));
    let [w, A] = i.useState(!1),
        [S, C] = i.useState(!1),
        [N, I] = i.useState(b);
    (N !== b && (I(b), b ? A(!0) : C(!1)),
        i.useEffect(() => {
            if (b || !w) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [b, w]),
        i.useEffect(() => {
            if (!w || !b) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => C(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [w, b]));
    let E = null != l && l.length > 0,
        _ = i.useCallback(() => j((e) => !e), []);
    return g
        ? (0, a.jsxs)("div", {
              className: nQ.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: u()(nQ.vK, { [nQ.ho]: x && f, [nQ.ET]: !f }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: u()(nQ.Rk, nY.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(nP.A, {
                                        glyph: (0, a.jsx)(nX.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(e7.D, {
                                    className: nQ.pZ,
                                    onClick: c,
                                    "aria-label": ej.intl.string(eb.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: u()(nQ.Rk, nY.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(nP.A, {
                                            glyph: (0, a.jsx)(nX.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          E
                              ? (0, a.jsx)(d.m, {
                                    text: ej.intl.string(eb.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(e7.D, {
                                        className: nQ.BO,
                                        onClick: _,
                                        "aria-expanded": b,
                                        "aria-label": ej.intl.string(eb.default.RtzECX),
                                        children: (0, a.jsx)(nR.ClipboardListIcon, {
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
                  w && E
                      ? (0, a.jsx)("div", {
                            className: u()(nQ.vB, { [nQ.pg]: b && S, [nQ.ui]: !b }),
                            children: (0, a.jsx)(nV, {
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
(n(323874), n(14289), n(35956));
let nJ = new Map(),
    n0 = (0, w.D)(() => ({ byMessageKey: {} }));
function n1(e, t) {
    let { [e]: n, ...l } = n0.getState().byMessageKey;
    n0.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var n2 = n(195880),
    n3 = n(287111),
    n4 = n(16619);
function n5(e) {
    let t = (0, n4.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var n7 = n(337232),
    n8 = n(890497),
    n9 = n(103557),
    n6 = n(29073),
    le = n(590077);
function lt(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = n5(e),
                [s, o] = i.useState(null),
                [u, c] = i.useState([]),
                [d, f] = i.useState(t.prompt),
                [m, h] = i.useState(!1),
                [g, p] = i.useState(!1),
                x = i.useRef(new Map()),
                v = i.useRef(!1),
                b = i.useRef(!1),
                j = i.useMemo(() => a.filter((e) => !u.some((t) => t.target.projectId === e.projectId)), [a, u]),
                y = i.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                k = i.useMemo(() => {
                    let e = s ?? y;
                    return j.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, j]),
                w = i.useMemo(() => j.filter((e) => k.includes(e.projectId)), [j, k]),
                A = i.useCallback((e) => {
                    o(e.slice(0, 10));
                }, []),
                S = d.trim(),
                C = n && !m && (w.length > 0 ? "" !== S : u.length > 0),
                N = i.useCallback(
                    (t) => {
                        b.current ||
                            ((b.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, n3.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          ej.intl.formatToPlainString(eb.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = ej.intl.formatToPlainString(eb.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                I = i.useCallback(() => {
                    let t, n;
                    if (!C) return;
                    if (0 === w.length) return void N(u);
                    (h(!0), p(!1));
                    let l =
                        ((t = ts.Ay.getProject(e)?.name ?? e),
                        (n = ej.intl.formatToPlainString(eb.default.ScoZLp, { name: t, projectId: e })),
                        `${S}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, n2.m)() }), x.current.set(e.projectId, t)),
                                (0, n7.s)(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: S }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && N(n);
                            return;
                        }
                        (c(n), o(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [C, N, u, e, w, S]),
                E = i.useCallback(() => {
                    ((v.current = !0), u.length > 0 && !m && N(u), l());
                }, [N, u, l, m]);
            return {
                projects: j,
                targetIds: k,
                setTargetIds: A,
                prompt: d,
                setPrompt: f,
                sending: m,
                failed: g,
                canSubmit: C,
                submit: I,
                dismiss: E,
            };
        })(t, n, l, r, s),
        c = i.useMemo(
            () =>
                o.projects.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [o.projects],
        ),
        d = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: u()(n6.nd, n6.jx),
        "aria-labelledby": d,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: n6.wx,
                children: [
                    (0, a.jsx)(x.E, {
                        tag: "span",
                        id: d,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: n6.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tQ.K, {
                        icon: e8.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": ej.intl.string(eb.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: le.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ej.intl.string(eb.default.TbbzW5),
                          })
                        : (0, a.jsx)(n8.Z, {
                              label: ej.intl.string(eb.default["29gr8j"]),
                              placeholder: ej.intl.string(eb.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(n9.f, {
                        label: ej.intl.string(eb.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? ej.intl.string(eb.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: n6.qr,
                children: (0, a.jsx)("div", {
                    className: n6.zt,
                    children: (0, a.jsx)(f.$, {
                        variant: "primary",
                        size: "sm",
                        text: ej.intl.string(eb.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
                    }),
                }),
            }),
        ],
    });
}
var ln = n(47167),
    ll = n(734057),
    lr = n(994500),
    la = n(360047);
function li(e, t, n) {
    let l = n[0]?.id;
    return null == l
        ? null
        : !0 === t.link
          ? { target: l, caller: e, key: `${l}:${e}` }
          : "incoming" === t.link
            ? { target: e, caller: l, key: `${e}:${l}` }
            : null;
}
var ls = n(652215);
function lo(e) {
    return 0 === e.options.length && null == e.input;
}
function lu(e) {
    return !1 !== e.allow_custom && !0 !== e.link && "incoming" !== e.link;
}
function lc(e, t, n) {
    return n < e.questions.length - 1
        ? n + 1
        : (function (e, t, n) {
              let { questions: l } = e;
              for (let e = 1; e <= l.length; e++) {
                  var r, a;
                  let i = (n + e) % l.length;
                  if (((r = l[i]), (a = t[l[i].id]), !0 !== r.optional && (null == a || "" === a.text.trim())))
                      return i;
              }
              return null;
          })(e, t, n);
}
function ld(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function lf(e, t, n, l) {
    let r = n.trim(),
        a = e.options.filter((e) => t.includes(e.id)).map((e) => e.label);
    return {
        kind: "multi",
        optionIds: t,
        ...("" === r ? {} : { custom: r }),
        ...(null == l ? {} : { attachment: l.attachment }),
        text: [...a, ...(null == l ? [] : [l.text]), ...("" === r ? [] : [r])].join(", "),
    };
}
let lm = {
    [ls.rbe.GUILD_TEXT]: "text",
    [ls.rbe.GUILD_VOICE]: "voice",
    [ls.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [ls.rbe.GUILD_STAGE_VOICE]: "stage",
    [ls.rbe.GUILD_FORUM]: "forum",
    [ls.rbe.GUILD_MEDIA]: "media",
};
function lh(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = ll.A.getChannel(t)?.type) ? void 0 : lm[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = y.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let lg = { channel: "#", role: "@", user: "@", project: "", server: "" },
    lp = {
        channel: [eb.default["9+dfPT"], eb.default.pGSJqE],
        role: [eb.default["2VkCoD"], eb.default.c8YlX8],
        user: [eb.default.GZIAxl, eb.default["4bptbQ"]],
        project: [eb.default.twlOb6, eb.default.twlOb6],
        server: [eb.default.ZWXDeI, eb.default.ZWXDeI],
    };
function lx(e, t) {
    return ej.intl.string(lp[e][+!!t]);
}
var lv = n(658675),
    lb = n(22231),
    lj = n(123292),
    ly = n(900797),
    lk = n(331322),
    lw = n(771871),
    lA = n(700915),
    lS = n(985965),
    lC = n(831819);
function lN(e) {
    let { link: t, disabled: n } = e,
        l = i.useId(),
        [r, s] = i.useState(!1),
        o = i.useRef(null),
        { sentence: u, options: c } = t.data,
        d = c.length > 1,
        f = i.useMemo(() => c.map((e) => ({ name: e.label, value: e.build })), [c]);
    return (
        i.useEffect(() => {
            r && o.current?.querySelector("input:checked")?.focus();
        }, [r]),
        (0, a.jsx)("div", {
            className: lC.Nz,
            children: (0, a.jsxs)(lk.B, {
                gap: 4,
                children: [
                    (0, a.jsx)(lA.A, {
                        caller: t.sides.caller,
                        target: t.sides.target,
                        callerProject: t.callerProject,
                        targetProject: t.targetProject,
                        flow: t.flow,
                    }),
                    null != t.purpose ? (0, a.jsx)(lS.A, { purpose: t.purpose }) : null,
                    null != u
                        ? (0, a.jsxs)("div", {
                              className: lC.em,
                              children: [
                                  (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-subtle", children: u }),
                                  d && !r
                                      ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(x.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    "aria-hidden": !0,
                                                    children: "\xb7",
                                                }),
                                                (0, a.jsx)(lj.Q, {
                                                    text: ej.intl.string(eb.default.I5F6YX),
                                                    textVariant: "body-sm/medium",
                                                    disabled: n,
                                                    onClick: () => s(!0),
                                                }),
                                            ],
                                        })
                                      : null,
                              ],
                          })
                        : null,
                    r && d
                        ? (0, a.jsxs)("div", {
                              ref: o,
                              className: lC.zM,
                              children: [
                                  (0, a.jsx)("span", { id: l, hidden: !0, children: t.aria }),
                                  (0, a.jsx)(lw.z, {
                                      "aria-labelledby": l,
                                      options: f,
                                      value: t.value,
                                      disabled: n,
                                      onChange: t.onChange,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        })
    );
}
var lI = n(344587),
    lE = n(155078);
function l_(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let lM = [];
function lR(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? ej.intl.string(eb.default.ZZ641e)
          : ej.intl.string(1 === e.options.length ? eb.default["2g3gk9"] : eb.default.dkzChE);
}
var lP = n(762026);
function lT(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function lL(e, t) {
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
var l$ = n(682163),
    lD = n(300344),
    lq = n(614733),
    lF = n(904363),
    lO = n(950902),
    lG = n(136722),
    lz = n(778858),
    lU = n(808728),
    lB = n(696451),
    lK = n(71393),
    lH = n(488926),
    lW = n(426035),
    lV = n(246338);
let lX = lG.kg(ls.xBc.VIEW_CHANNEL, ls.xBc.SEND_MESSAGES);
var lY = n(384017);
function lQ(e) {
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
            matchSorterOptions: f,
        } = e,
        m = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function g(e) {
        return lh(n.input ?? "channel", e, (e) => u.find((t) => t.value === e)?.label, l);
    }
    let p = {
        options: u,
        placeholder: c,
        disabled: r,
        onQueryChange: d,
        matchSorterOptions: f,
        onFocus: s,
        onBlur: o,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, a.jsx)("div", {
        className: lY.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, a.jsx)(n8.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(n8.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function lZ(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, lD.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: o, onChange: u } = e,
            d =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, c.bG)(
                    [ts.Ay],
                    () => {
                        let e = t ? ts.Ay.getProject(l) : null;
                        return null == e ? null : (0, lW.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || lB.Ay.isMember(r, n) || lz.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [lU.A, lB.Ay, lK.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lK.A.getGuild(r)?.safetyAlertsChannelId,
                            l = lU.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, lV.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && lB.Ay.isMember(r, n))
                            return lH.$3({ permission: lX, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? lG.BY;
                        return lG.X8(s, lX) ? null : i;
                    },
                    [r, n, t, a.channel_filter],
                )),
            f = i.useRef(null),
            m = i.useRef(!1);
        i.useEffect(() => {
            if (!m.current && !o && null != r) {
                if (null == f.current) {
                    if (s.length > 0) m.current = !0;
                    else if (null != d) {
                        var e;
                        ((f.current = d.id),
                            u(((e = []), lh("channel", [d.id], () => (0, ln.m1)(d, y.default, lr.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== f.current ? (m.current = !0) : null == d && ((m.current = !0), u([], r));
            }
        }, [d, o, r, u, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(lQ, { ...r, guildId: n, options: s, placeholder: lx("channel", !0 === r.question.multi_select) });
}
function lJ(e) {
    let { guildId: t, ...n } = e,
        l = (0, lF.A)(t);
    return (0, a.jsx)(lQ, { ...n, guildId: t, options: l, placeholder: lx("role", !0 === n.question.multi_select) });
}
function l0(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, lq.A)(t);
    return (0, a.jsx)(lQ, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lx("user", !0 === n.question.multi_select),
    });
}
function l1(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = n5(t),
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
    return 0 === s.length ? n : (0, a.jsx)(lQ, { ...l, options: s, placeholder: lx("project", !1) });
}
function l2(e) {
    let t = e.target;
    (0, tF.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function l3(e) {
    let { fallback: t, ...n } = e,
        l = (0, n4.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(l$.Ay, { guild: e, size: l$.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: l2,
              onMouseUp: l2,
              children: (0, a.jsx)(lQ, { ...n, options: r, placeholder: lx("server", !1) }),
          });
}
function l4(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lO.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(l1, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(l3, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lZ, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lJ, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(l0, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var l5 = n(87221),
    l7 = n(26430),
    l8 = n(750943),
    l9 = n(173936),
    l6 = n(95477),
    re = n(256905),
    rt = n(490707),
    rn = n(907702);
function rl(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: c } = (0, rt._)(t, n),
        [d, f] = i.useState(null),
        m = null != s && d === s;
    return o
        ? (0, a.jsxs)("span", {
              className: u()(rn.Gt, rn.b6),
              children: [
                  (0, a.jsx)(l5.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: ej.intl.string(eb.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: u()(rn.Gt, { [rn.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: rn.Sl,
                            onLoad: (e) => {
                                f(s);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && r({ width: t, height: n });
                            },
                            onError: c,
                            draggable: !1,
                        })
                      : null,
          });
}
function rr(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: i,
            selected: s,
            disabled: o,
            reachable: c,
            tabbable: f,
            onPick: m,
            onView: h,
            onArrow: g,
            onMeasured: p,
            onRemove: v,
        } = e,
        b = ej.intl.formatToPlainString(eb.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: u()(rn.Vs, { [rn.Q9]: s, [rn.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(e7.D, {
                className: u()(rn.Up, { [rn.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: o ? (null != r.image ? () => h(r) : void 0) : () => m(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), g(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ej.intl.formatToPlainString(eb.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: c && f ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: rn.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(rl, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: rn.Gt }),
                            (0, a.jsx)("span", {
                                className: rn.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(lv.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(lw.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(x.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: rn.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, lE.E)(t) : "")
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
            null != v
                ? (0, a.jsx)("span", {
                      className: rn.B4,
                      children: (0, a.jsx)(d.m, {
                          text: ej.intl.string(eb.default.HQEXJM),
                          children: (0, a.jsx)(tQ.K, {
                              icon: t2.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: v,
                              disabled: o,
                              "aria-label": ej.intl.string(eb.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: rn.B4,
                        children: (0, a.jsx)(d.m, {
                            text: ej.intl.string(eb.default["4/eeDD"]),
                            children: (0, a.jsx)(tQ.K, {
                                icon: l7.MaximizeIcon,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => h(r),
                                "aria-label": b,
                                tabIndex: c && f ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function ra(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: o, own: c } = e,
        d = !0 === n.multi_select,
        { options: f } = n,
        m = f.length > 4 ? "gallery" : "row",
        h = i.useRef(null),
        g = i.useRef(new Map()),
        [p, x] = i.useState(null),
        v = null != p && f.some((e) => e.id === p) ? p : (f.find((e) => l.includes(e.id)) ?? f[0])?.id,
        b = i.useMemo(() => {
            var e;
            return null == c.image
                ? null
                : ((e = c.image),
                  {
                      id: `own:${e.attachment.id}`,
                      label: ej.intl.string(eb.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        j = i.useCallback(
            (e) => {
                let n = (null == b ? f : [...f, b]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, tG.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, re.R)({
                                items: e.map((e, t) => {
                                    let l,
                                        r = g.current.get(n[t].id);
                                    return {
                                        type: "IMAGE",
                                        url: e,
                                        original: e,
                                        alt: n[t].label,
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
            [f, b, t],
        ),
        y = i.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || o(l));
            },
            [r, d, o, f],
        );
    return (0, a.jsxs)("div", {
        className: rn.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === f.length && null == b
                ? null
                : (0, a.jsxs)("div", {
                      ref: h,
                      className: u()(rn.fF, "gallery" === m ? rn.nV : rn.nM, { [rn.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": m,
                      "data-count": f.length,
                      children: [
                          f.map((e) =>
                              (0, a.jsx)(
                                  rr,
                                  {
                                      projectId: t,
                                      option: e,
                                      multi: d,
                                      selected: l.includes(e.id),
                                      disabled: r,
                                      reachable: s,
                                      tabbable: d || e.id === v,
                                      onPick: (e) => {
                                          (x(e.id), o(e));
                                      },
                                      onView: j,
                                      onArrow: y,
                                      onMeasured: (t) => g.current.set(e.id, t),
                                  },
                                  e.id,
                              ),
                          ),
                          null != b
                              ? (0, a.jsx)(
                                    rr,
                                    {
                                        projectId: t,
                                        option: b,
                                        multi: d,
                                        selected: c.selected,
                                        disabled: r,
                                        reachable: s,
                                        tabbable: !0,
                                        onPick: c.onPick,
                                        onView: j,
                                        onArrow: () => void 0,
                                        onMeasured: (e) => g.current.set(b.id, e),
                                        onRemove: c.onRemove,
                                    },
                                    b.id,
                                )
                              : null,
                      ],
                  }),
            (0, a.jsx)(ri, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: ej.intl.string(/\bicons?\b/i.test(n.question) ? eb.default.qU4WN6 : eb.default.cbMDDB),
            }),
        ],
    });
}
function ri(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(""),
        h = r ? 0 : -1,
        g = n.busy;
    function p() {
        "" !== d.trim() &&
            null == g &&
            n.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, a.jsxs)("div", {
        className: rn.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: rn.QJ,
                children: [
                    (0, a.jsx)(f.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: l8.ImagePlusIcon,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => o.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: l9.LinkIcon,
                              text: ej.intl.string(eb.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: rn.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, n3.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: rn.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: rn.Hs,
                              children: (0, a.jsx)(l6.k, {
                                  label: ej.intl.string(eb.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ej.intl.string(eb.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), p())
                                          : "Escape" === e.key && (e.stopPropagation(), c(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == g && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                              className: rn.gd,
                              children: [
                                  (0, a.jsx)(f.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ej.intl.string(eb.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === d.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lj.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: ej.intl.string(eb.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      "data-conjure-own-image-error": !0,
                      children: n.error.text,
                  })
                : null,
        ],
    });
}
function rs(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(e7.D, {
        className: u()(lY.uK, { [lY.ue]: l, [lY.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": ej.intl.formatToPlainString(d ? eb.default["2p6UFz"] : eb.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: lY.dy, children: (0, a.jsx)(lv.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: lY.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lY.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lY.l8,
                        children: (0, a.jsx)(x.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: lY.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, a.jsx)(x.E, {
                              tag: "span",
                              id: c,
                              variant: "body-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            d
                ? (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      className: lY.rM,
                      children: ej.intl.string(eb.default.zku6r1),
                  })
                : null,
        ],
    });
}
function ro(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return l_(n)
        ? (0, a.jsx)(ra, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      rs,
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
let ru = [],
    rc = [];
function rd(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: i,
            disabled: s,
            ownImage: o,
            ownSelected: c,
        } = e,
        d = "" === l.trim() ? null : l,
        f = !0 === n.multi_select ? ej.intl.string(eb.default.tE8qbz) : lR(n);
    return (0, a.jsxs)("div", {
        className: u()(lY.Ge, lY.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            null == f
                ? null
                : (0, a.jsx)(x.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: lY.aK,
                      children: f,
                  }),
            (0, a.jsx)(ro, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lL(o, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && l_(n))
                ? null
                : (0, a.jsxs)("div", {
                      className: lY.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lY.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lb.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: u()(lY.Pu, lY.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, a.jsx)("div", {
                      className: lY.$0,
                      children: (0, a.jsx)(lj.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: ej.intl.string(eb.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function rf(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: o,
            onBack: m,
            backText: h,
            hideSubmit: g = !1,
            headingLines: p = 5,
        } = e,
        [v, b] = i.useState({}),
        [j, y] = i.useState({}),
        [k, w] = i.useState({}),
        [A, S] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [C, N] = i.useState({}),
        { builds: I, linkFor: E } = (function (e, t, n) {
            let l = i.useMemo(
                    () =>
                        Object.fromEntries(
                            t.questions.flatMap((t) => {
                                let l = li(e, t, n[t.id] ?? []);
                                return null == l ? [] : [[t.id, l]];
                            }),
                        ),
                    [t, n, e],
                ),
                [r, a] = i.useState({}),
                [s, o] = i.useState({}),
                u = i.useRef(new Set());
            i.useEffect(() => {
                for (let e of Object.values(l))
                    u.current.has(e.key) ||
                        (u.current.add(e.key),
                        (async function (e, t, n) {
                            try {
                                let l = await (0, la.LW)(e, t);
                                a((e) => ({ ...e, [n]: l }));
                            } catch {}
                        })(e.target, e.caller, e.key));
            }, [l]);
            let d = (0, c.cf)(
                [ts.Ay],
                () =>
                    Object.fromEntries(
                        Object.values(l).flatMap((e) => [e.target, e.caller].map((e) => [e, ts.Ay.getProject(e)])),
                    ),
                [l],
            );
            return {
                builds: i.useMemo(
                    () =>
                        Object.fromEntries(
                            Object.entries(l).flatMap((e) => {
                                let [t, n] = e,
                                    l = s[n.key];
                                return null == l ? [] : [[t, l]];
                            }),
                        ),
                    [s, l],
                ),
                linkFor: i.useCallback(
                    (a) => {
                        let i = l[a],
                            u = null == i ? null : r[i.key],
                            c = n[a]?.[0]?.name,
                            f = d[e]?.name;
                        if (null == i || null == u || null == c || null == f) return null;
                        let m = i.caller === e,
                            h = d[i.caller],
                            g = {
                                caller: m ? f : c,
                                target: m ? c : f,
                                targetLive: u.live,
                                targetHasPreview: u.hasPreview,
                                callerHasPreview: null == h || (0, eO._7)(h),
                                callerLiveOnVibeyard: !1,
                            },
                            p = s[i.key] ?? u.build,
                            x = t.questions.find((e) => e.id === a);
                        return {
                            sides: g,
                            callerProject: h ?? null,
                            targetProject: d[i.target] ?? null,
                            flow: x?.link_flow ?? u.flow,
                            purpose: (0, lP.xP)(x?.link_purpose ?? u.purpose),
                            data: (0, lP.Bw)(g, p),
                            value: p,
                            aria: (0, lP.sr)(g),
                            onChange: (e) => o((t) => ({ ...t, [i.key]: e })),
                        };
                    },
                    [s, t, n, l, e, d, r],
                ),
            };
        })(n, l, A),
        [_, M] = i.useState(!1),
        [R, P] = i.useState(0),
        [T, L] = i.useState(null),
        [$, D] = i.useState(null),
        [q, F] = i.useState(null),
        [O, G] = i.useState(!1),
        z = i.useRef(null),
        [U, B] = i.useState(null),
        K = i.useRef(null),
        H = i.useRef(0),
        W = null == r,
        V = l.questions.length,
        X = Math.min(R, V - 1),
        Y = l.questions[X],
        [Q, Z] = i.useState({ id: Y.id, expanded: !1 }),
        J = Q.id === Y.id && Q.expanded,
        [ee, et] = i.useState(null),
        en = j[Y.id] ?? "",
        el = !0 === Y.multi_select,
        er = l_(Y),
        ea = el ? ej.intl.string(eb.default.tE8qbz) : lR(Y),
        ei = el
            ? (k[Y.id] ?? ru)
            : ((t = v[Y.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : lM),
        es = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = ej.intl.string(eb.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                f = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : lT(t[e.id])),
                    [t, l, o],
                ),
                m = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let d = i.id,
                            m = !0 === i.multi_select,
                            h = l[d] ?? null;
                        if (o) return lL(h, f(i));
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
                                    null != l && (0, tG.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                m ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: f(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (m ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, tG.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (m || !lT(e[d])) return e;
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
                                                error: { source: "upload", text: ej.intl.string(eb.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, tG.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : ej.intl.string(eb.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, l, e, f, n, a],
                );
            return { imageFor: d, selectedFor: f, multiPartFor: m, controlsFor: h };
        })(n, v, b),
        eo = es.imageFor(Y.id),
        eu = es.selectedFor(Y),
        { text: ec, phase: ed } = (0, lI.Q)(Y.question),
        ef = ec === Y.question,
        em = ef && ee?.id === Y.id && ee.truncated;
    i.useLayoutEffect(() => {
        if (null == U || J || !ef) return;
        function e() {
            if (null == U) return;
            let e = U.scrollHeight > U.clientHeight + 1;
            et((t) => (t?.id === Y.id && t.truncated === e ? t : { id: Y.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(U), () => t.disconnect());
    }, [ef, U, Y.id, J]);
    let eh = ej.intl.string(J ? ej.t.iTcuma : ej.t.dcl9MQ),
        eg = i.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let a = ld(t, n);
                        if ("" !== a) {
                            var i;
                            let s;
                            ((i = () => {
                                let e;
                                return r(
                                    a,
                                    (e = t.questions.flatMap((e) => {
                                        let t = n[e.id];
                                        if (null == t || "" === t.text.trim()) return [];
                                        let l =
                                                "option" === t.kind
                                                    ? [t.optionId]
                                                    : "multi" === t.kind
                                                      ? t.optionIds
                                                      : [],
                                            r =
                                                "custom" === t.kind
                                                    ? t.text.trim()
                                                    : "multi" === t.kind || "entities" === t.kind
                                                      ? t.custom
                                                      : void 0,
                                            a = "entities" === t.kind ? t.entities : [],
                                            i = "entities" === t.kind && a.length > 0 ? t.guildId : void 0,
                                            s = "image" === t.kind || "multi" === t.kind ? t.attachment : void 0;
                                        return [
                                            {
                                                question_id: e.id,
                                                option_ids: l,
                                                ...(null != r && "" !== r ? { custom: r } : {}),
                                                ...(null != s ? { attachment_id: s.id } : {}),
                                                ...(a.length > 0 ? { entities: a } : {}),
                                                ...(null != i ? { guild_id: i } : {}),
                                            },
                                        ];
                                    })).length > 0
                                        ? { clarification_id: t.id, answers: e }
                                        : null,
                                    t.questions.flatMap((e) => {
                                        let t = n[e.id];
                                        return null == t || "" === t.text.trim()
                                            ? []
                                            : "image" === t.kind || ("multi" === t.kind && null != t.attachment)
                                              ? [t.attachment]
                                              : [];
                                    }),
                                );
                            }),
                                0 ===
                                (s = t.questions.flatMap((t) => {
                                    let r = n[t.id];
                                    return r?.kind !== "entities"
                                        ? []
                                        : r.entities.flatMap((n) => {
                                              let r = li(e, t, [n]);
                                              return null == r
                                                  ? []
                                                  : [
                                                        {
                                                            ...r,
                                                            build: l[t.id],
                                                            purpose: t.link_purpose,
                                                            flow: t.link_flow,
                                                        },
                                                    ];
                                          });
                                })).length
                                    ? i()
                                    : Promise.allSettled(
                                          s.map((e) => {
                                              let { target: t, caller: n, ...l } = e;
                                              return (0, la.Ol)(t, n, l);
                                          }),
                                      ).then(i));
                        }
                    })(n, l, e, I, r);
            },
            [l, I, r, n],
        ),
        ep = i.useCallback(
            (e, t) => {
                H.current += 1;
                let n = H.current;
                (L({ direction: t, moves: n }),
                    D({ question: Y, draft: en, selected: ei, ownImage: eo, ownSelected: eu, direction: t, moves: n }),
                    G(!0),
                    P(e));
            },
            [en, eo, eu, Y, ei],
        ),
        ex = i.useCallback(() => {
            let e = z.current,
                t = K.current;
            null != e && null != t && F({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = z.current,
            t = K.current;
        if (null == e || null == t) return;
        ex();
        let n = new ResizeObserver(ex);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ex]);
    let ev = T?.moves;
    i.useEffect(() => {
        if (null == ev) return;
        let e = setTimeout(() => D(null), 400),
            t = setTimeout(() => G(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ev]);
    let ey = i.useCallback(
            (e) => {
                let t = lc(l, e, X);
                null == t ? eg(e) : ep(t, t < X ? "back" : "forward");
            },
            [l, X, eg, ep],
        ),
        ek = i.useCallback(
            (e) => {
                if (W) return;
                let t = { ...v, [Y.id]: e };
                (b(t), ey(t));
            },
            [ey, v, W, Y.id],
        ),
        ew = i.useCallback(() => {
            W || 0 === X || ep(X - 1, "back");
        }, [W, X, ep]),
        eA = 0 !== X || W ? void 0 : m,
        eS = (X > 0 && !W) || null != eA,
        eC = i.useCallback(
            (e) => {
                y((e) => ({ ...e, [Y.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                er ? W || b((e) => ({ ...e, [Y.id]: t })) : ek(t);
            },
            [W, er, Y.id, ek],
        ),
        eN = i.useCallback(() => {
            (y((e) => ({ ...e, [Y.id]: "" })), ek({ kind: "custom", text: ej.intl.string(eb.default.zxSq2q) }));
        }, [Y.id, ek]),
        { multiPartFor: eI } = es,
        eE = i.useMemo(() => (el ? lf(Y, ei, en, eI(Y)) : null), [en, el, eI, Y, ei]),
        e_ = A[Y.id] ?? rc,
        eM = E(Y.id),
        eR = i.useMemo(() => {
            var e, t;
            let n;
            return null != Y.input
                ? ((e = Y.input),
                  (t = C[Y.id]),
                  (n = en.trim()),
                  {
                      kind: "entities",
                      entities: e_,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...e_.map((t) => (t.name.startsWith(lg[e]) ? t.name : `${lg[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [en, C, e_, Y.id, Y.input]),
        eP = i.useCallback(
            (e, t) => {
                (S((t) => ({ ...t, [Y.id]: e })), N((e) => ({ ...e, [Y.id]: t })));
            },
            [Y.id],
        ),
        eT = i.useCallback(() => M(!0), []),
        eL = i.useCallback(() => M(!1), []),
        e$ = es.controlsFor(Y, W),
        eD = i.useMemo(() => {
            var e;
            let t;
            return (
                (e = v[Y.id]),
                null ==
                (t = (function (e, t) {
                    if (!0 !== e.upload || !0 === e.multi_select || null == t) return null;
                    if ("option" === t.kind || "image" === t.kind) return t;
                    if ("multi" !== t.kind) return null;
                    if (null != t.attachment)
                        return { kind: "image", attachment: t.attachment, text: ej.intl.string(eb.default.wTsP5l) };
                    let n = e.options.find((e) => {
                        let { id: n } = e;
                        return t.optionIds.includes(n);
                    });
                    return null != n ? { kind: "option", optionId: n.id, text: n.label } : null;
                })(Y, e))
                    ? null
                    : "" === en.trim()
                      ? e?.kind === "multi"
                          ? t
                          : null
                      : "option" === t.kind
                        ? lf(Y, [t.optionId], en)
                        : lf(Y, [], en, t)
            );
        }, [v, en, Y]),
        eq = i.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eR, eE ?? eD, en),
            [en, eE, eD, eR],
        ),
        eF = i.useCallback(() => {
            null != eq && ek(eq);
        }, [eq, ek]),
        [eG, ez] = i.useState(!1),
        [eU, eB] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ez(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eK = i.useCallback(() => {
            null != s && (eB(!0), setTimeout(s, 150));
        }, [s]),
        eH = eq ?? (null == eR && null == eE ? (v[Y.id] ?? null) : null),
        eW = i.useMemo(
            () =>
                null == eH
                    ? (function (e, t, n) {
                          let l = e.questions[n];
                          if (l?.optional !== !0) return null;
                          let r = Object.fromEntries(
                              Object.entries(t).filter((e) => {
                                  let [t] = e;
                                  return t !== l.id;
                              }),
                          );
                          return null == lc(e, r, n) && "" === ld(e, r) ? null : r;
                      })(l, v, X)
                    : null,
            [v, l, X, eH],
        ),
        eV = null != eW,
        eX = (null != eH || eV) && !W,
        eY = X === V - 1,
        eQ = i.useCallback(() => {
            W || (null != eH ? ek(eH) : null != eW && (b(eW), ey(eW)));
        }, [ey, W, eH, ek, eW]),
        eZ = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tF.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tF.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tF.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eS
                            ? (e.preventDefault(), (eA ?? ew)())
                            : "ArrowRight" === e.key && eX && (e.preventDefault(), eQ())));
            },
            [eA, eS, eX, ew, eQ],
        ),
        eJ =
            er && !0 !== Y.upload
                ? null
                : (0, a.jsxs)("div", {
                      className: lY.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lY.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lb.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, a.jsx)(tU.y, {
                              value: en,
                              onChange: (e) => {
                                  let { value: t } = e.currentTarget;
                                  y((e) => ({ ...e, [Y.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), eF());
                              },
                              placeholder: ej.intl.string(lo(Y) ? eb.default.yLN1x6 : eb.default["tOC+tn"]),
                              "aria-label": ej.intl.formatToPlainString(eb.default["4JeYPB"], { question: Y.question }),
                              disabled: W,
                              rows: 1,
                              className: lY.Pu,
                              "data-conjure-clarification-other": Y.id,
                          }),
                      ],
                  });
    return (0, a.jsxs)("section", {
        className: u()(lY.$O, { [lY.fI]: eG && !eU, [lY.Oh]: eU }),
        role: "dialog",
        "aria-label": Y.question,
        "data-conjure-clarification": l.id,
        "data-state": W ? "inert" : "open",
        "data-question-expanded": J ? "true" : void 0,
        "data-picker-open": _ && !O ? "true" : void 0,
        "data-step": X,
        tabIndex: -1,
        onKeyDown: eZ,
        children: [
            (0, a.jsxs)("div", {
                className: lY.rf,
                style: null == q ? void 0 : { height: q.heading + q.rows },
                "data-moving": O ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: z,
                        className: lY.wx,
                        children: [
                            (0, a.jsx)(x.E, {
                                ref: B,
                                tag: "span",
                                id: `${Y.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: J ? void 0 : p,
                                className: u()(n6.TK, lY.R_, { [lY.TB]: "exit" === ed, [lY.JU]: "enter" === ed }),
                                children: ec,
                            }),
                            em || J
                                ? (0, a.jsx)("div", {
                                      className: n6.Q7,
                                      children: (0, a.jsx)(d.m, {
                                          text: eh,
                                          children: (0, a.jsx)(tQ.K, {
                                              icon: J ? ly.ChevronSmallUpIcon : n$.ChevronSmallDownIcon,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => Z({ id: Y.id, expanded: !J }),
                                              "aria-label": eh,
                                              "aria-controls": `${Y.id}-label`,
                                              "aria-expanded": J,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(e7.D, {
                                      className: u()(n6.gb, n6.Q7),
                                      onClick: eK,
                                      "aria-label": ej.intl.string(eb.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(e8.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: lY.Cg,
                        style: null == q ? void 0 : { insetBlockStart: q.heading },
                        children: (0, a.jsxs)("div", {
                            className: lY.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: K,
                                    className: lY.Ge,
                                    role: "group",
                                    "aria-labelledby": `${Y.id}-label`,
                                    "data-direction": T?.direction,
                                    "data-parity": null == T ? void 0 : T.moves % 2,
                                    children: [
                                        null == ea
                                            ? null
                                            : (0, a.jsx)(x.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lY.aK,
                                                  children: ea,
                                              }),
                                        (0, a.jsx)(ro, {
                                            projectId: n,
                                            question: Y,
                                            selected: ei,
                                            disabled: W,
                                            onPick: (e) =>
                                                el
                                                    ? w((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [Y.id]:
                                                                  ((n = t[Y.id] ?? ru),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  Y.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eC(e),
                                            own: e$,
                                        }),
                                        null != Y.input
                                            ? (0, a.jsx)(l4, {
                                                  projectId: n,
                                                  question: Y,
                                                  value: e_,
                                                  disabled: W,
                                                  onChange: eP,
                                                  onFocus: eT,
                                                  onBlur: eL,
                                                  fallback: lu(Y) ? null : eJ,
                                              })
                                            : null,
                                        null != eM ? (0, a.jsx)(lN, { link: eM, disabled: W }) : null,
                                        null != Y.note
                                            ? (0, a.jsx)(x.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lY.aK,
                                                  children: Y.note,
                                              })
                                            : null,
                                        lu(Y) ? eJ : null,
                                        !0 === Y.upload
                                            ? (0, a.jsx)("div", {
                                                  className: lY.$0,
                                                  children: (0, a.jsx)(lj.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: ej.intl.string(eb.default.zxSq2q),
                                                      disabled: W,
                                                      onClick: eN,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == $
                                    ? null
                                    : (0, a.jsx)(
                                          rd,
                                          {
                                              projectId: n,
                                              question: $.question,
                                              draft: $.draft,
                                              selected: $.selected,
                                              ownImage: $.ownImage,
                                              ownSelected: $.ownSelected,
                                              direction: $.direction,
                                              disabled: W,
                                          },
                                          $.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            V > 1 || el || er || null != Y.input || null != m || !0 === Y.optional || lo(Y)
                ? (0, a.jsxs)("div", {
                      className: n6.qr,
                      children: [
                          (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  V > 1
                                      ? ej.intl.formatToPlainString(eb.default.yzYUjq, { index: X + 1, total: V })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: n6.zt,
                              children: [
                                  eS
                                      ? (0, a.jsx)(lj.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: h ?? ej.intl.string(eb.default.Pk5lfA),
                                            onClick: eA ?? ew,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  g
                                      ? null
                                      : (0, a.jsx)(f.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eY
                                                ? (o ?? ej.intl.string(ej.t.geKm7t))
                                                : ej.intl.string(eV ? eb.default.ZcrbKz : eb.default.w1nRmT),
                                            disabled: !eX,
                                            onClick: eQ,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eY ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var rm = n(557744),
    rh = n(223347),
    rg = n(890698),
    rp = n(27232),
    rx = n(505930);
let rv = [1, 2, 3, 4, 5];
n(786986);
var rb = n(693654);
function rj(e) {
    let { dimension: t, value: n, disabled: l, onChange: r } = e,
        s = i.useId(),
        o = i.useId();
    return (0, a.jsxs)("div", {
        className: rb.zm,
        children: [
            (0, a.jsx)(x.E, { id: s, variant: "body-sm/medium", color: "text-default", children: (0, rg.wy)(t) }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": s,
                "aria-required": !0,
                className: rb.uf,
                children: rv.map((e) => {
                    let i = null != n && e <= n,
                        s = i ? rp.StarIcon : rx.StarOutlineIcon;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: rb.uK,
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: o,
                                    value: e,
                                    checked: n === e,
                                    disabled: l,
                                    onChange: () => r(e),
                                    className: rb.hF,
                                    "aria-label": (0, rg.MF)(t, e),
                                }),
                                (0, a.jsx)("span", {
                                    className: u()(rb.d4, { [rb.cO]: i }),
                                    children: (0, a.jsx)(s, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
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
function ry(e) {
    let { pending: t } = e,
        n = (0, rg.PM)(t),
        l = i.useId();
    return (0, a.jsx)("section", {
        className: rb.Nr,
        "aria-labelledby": l,
        children: (0, a.jsxs)(lk.B, {
            gap: 12,
            children: [
                (0, a.jsxs)(lk.B, {
                    gap: 4,
                    children: [
                        (0, a.jsx)(p.D, {
                            id: l,
                            variant: "heading-md/semibold",
                            children: ej.intl.string(eb.default.GVLtfq),
                        }),
                        (0, a.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: ej.intl.string(eb.default["Zj4E+A"]),
                        }),
                    ],
                }),
                (0, a.jsxs)(lk.B, {
                    gap: 4,
                    children: [
                        n.dimensions.map((e) =>
                            (0, a.jsx)(
                                rj,
                                {
                                    dimension: e,
                                    value: n.scores[e],
                                    disabled: n.submitting,
                                    onChange: (t) => n.setScore(e, t),
                                },
                                e,
                            ),
                        ),
                        (0, a.jsx)(x.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: ej.intl.string(eb.default.BvaFUc),
                        }),
                    ],
                }),
                (0, a.jsx)(n9.f, {
                    label: ej.intl.string(eb.default.d28g0o),
                    placeholder: ej.intl.string(eb.default.EBB7lL),
                    value: n.feedback,
                    onChange: n.setFeedback,
                    rows: 3,
                    maxLength: 2e3,
                    disabled: n.submitting,
                }),
                null != n.error
                    ? (0, a.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: n.error,
                      })
                    : null,
                (0, a.jsx)(lk.B, {
                    direction: "horizontal",
                    justify: "end",
                    children: (0, a.jsx)(f.$, {
                        variant: "primary",
                        size: "sm",
                        text: ej.intl.string(eb.default.CYQood),
                        disabled: !n.canSubmit,
                        loading: n.submitting,
                        onClick: n.submit,
                    }),
                }),
            ],
        }),
    });
}
var rk = n(894443),
    rw = n(525530),
    rA = n(564963),
    rS = n(530557),
    rC = n(431527),
    rN = n(628284);
let rI = new Set(["select", "channel", "role", "user"]);
function rE(e, t) {
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
function r_(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
var rM = n(914250),
    rR = n(202723);
function rP(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o, onDismiss: c } = e,
        d = i.useCallback(() => {
            (0, e_.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        m = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: rS.KeyIcon })), [r.fields]),
        h = (0, rA.bB)(l, s),
        g = u()(rR.Lo, { [rR.jY]: h });
    if ("superseded" === s)
        return (0, a.jsx)(
            "article",
            {
                className: g,
                children: (0, a.jsx)(x.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: ej.intl.string(eb.default.CTxtdV),
                }),
            },
            s,
        );
    if ("inactive" === s)
        return (0, a.jsxs)(
            "article",
            {
                className: g,
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "body-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: ej.intl.string(eb.default.HCQvpO),
                    }),
                    (0, a.jsx)(rC.C, { label: ej.intl.string(eb.default.HCQvpO), size: "xs", items: m }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, a.jsx)(
            "article",
            {
                className: rR.Lo,
                children: (0, a.jsx)(rC.C, { label: ej.intl.string(eb.default.HCQvpO), size: "xs", items: m }),
            },
            s,
        );
    if ("received" === s)
        return (0, a.jsxs)(
            "article",
            {
                className: g,
                children: [
                    (0, a.jsxs)("div", {
                        className: rR.$h,
                        children: [
                            (0, a.jsx)("span", {
                                className: rR.c9,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(rN.CircleCheckIcon, {
                                    size: "xs",
                                    color: t4.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: ej.intl.string(eb.default.sfp7Up),
                            }),
                        ],
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: r.fields
                            .map((e) => e.label)
                            .map((e) =>
                                ej.intl.formatToPlainString(eb.default["Z+FC3j"], {
                                    label: e,
                                    value: ej.intl.string(eb.default.CJq1rY),
                                }),
                            )
                            .join(" \xb7 "),
                    }),
                ],
            },
            s,
        );
    let p = null != r.note && "" !== r.note ? r.note : ej.intl.string(eb.default.MPGSHL),
        v = (0, a.jsx)(f.$, { variant: "primary", size: "sm", onClick: d, text: ej.intl.string(eb.default.EK8tKY) });
    return null != c
        ? (0, a.jsxs)("section", {
              className: u()(n6.nd, rR.fw),
              "aria-label": ej.intl.string(eb.default.O0QIqj),
              children: [
                  (0, a.jsxs)("div", {
                      className: n6.wx,
                      children: [
                          (0, a.jsx)(rS.KeyIcon, { size: "xs", color: t4.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: n6.TK,
                              children: ej.intl.string(eb.default.O0QIqj),
                          }),
                          (0, a.jsx)(e7.D, {
                              className: u()(n6.gb, n6.Q7),
                              onClick: c,
                              "aria-label": ej.intl.string(eb.default.Hl7rif),
                              children: (0, a.jsx)(e8.XSmallIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: rR.DQ,
                      children: [
                          (0, a.jsx)(rM.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                          (0, a.jsx)(rC.C, { label: ej.intl.string(eb.default.HCQvpO), size: "xs", items: m }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: n6.qr,
                      children: [
                          (0, a.jsx)(x.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: rR.xE,
                              children: ej.intl.string(eb.default["2OdXdn"]),
                          }),
                          (0, a.jsx)("div", { className: n6.zt, children: v }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("article", {
              className: rR.Lo,
              children: [
                  (0, a.jsx)(x.E, {
                      variant: "body-xs/semibold",
                      color: null != o ? "text-brand" : "text-muted",
                      tag: "span",
                      children: ej.intl.string(null != o ? eb.default.O0QIqj : eb.default.HCQvpO),
                  }),
                  (0, a.jsx)(rM.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, a.jsx)(rC.C, { label: ej.intl.string(eb.default.HCQvpO), size: "xs", items: m }),
                  (0, a.jsx)("div", { className: rR.sq, children: v }),
              ],
          });
}
var rT = n(442331),
    rL = n(513425);
let r$ = new Set(),
    rD = new Set();
function rq(e) {
    return (
        rD.add(e),
        () => {
            rD.delete(e);
        }
    );
}
function rF() {
    return i.useSyncExternalStore(rq, () => r$);
}
function rO(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, nE.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function rG(e, t, n) {
    if (!n || null == t) return !1;
    let l = r_(e, t);
    return l.length > 0 && !rE({ keys: l }, t);
}
var rz = n(782973),
    rU = n(290713),
    rB = n(411236);
function rK(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: o,
            superseded: d,
            summary: m,
            markSaved: h,
        } = (function (e, t, n) {
            let l = rF(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                o = i.useCallback(() => {
                    if (null != n) {
                        if (!r$.has(n)) for (let e of ((r$ = new Set([...r$, n])), rD)) e();
                    } else a(!0);
                }, [n]),
                u = (0, c.bG)([rT.A], () => rG(t, rT.A.getSettings(e), s), [e, t, s]);
            return {
                done: u,
                superseded: (0, c.bG)([rL.A], () => null != n && rO(rL.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [rT.A, ll.A],
                    () => {
                        var n;
                        let l = rT.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => ll.A.getChannel(e)?.name ?? null),
                              r_(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: ej.intl.formatToPlainString(eb.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return ej.intl.string(eb.default.CJq1rY);
                                                      case "checkbox":
                                                          return ej.intl.string(
                                                              !0 === t ? eb.default.nXtpn3 : eb.default["0vfaMW"],
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
                                                                      : ej.intl.string(eb.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? ej.intl.string(eb.default.nEv677)
                                                              : ej.intl.string(eb.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return ej.intl.string(eb.default.Fw9G9A);
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
                markSaved: o,
            };
        })(t, n, l),
        g = null == r && o;
    if (d && !g)
        return (0, a.jsx)("article", {
            className: rB.Mk,
            children: (0, a.jsx)(x.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: ej.intl.string(eb.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, a.jsxs)("article", {
            className: rB.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: rB.Ol,
                    children: [
                        (0, a.jsx)(rN.CircleCheckIcon, {
                            size: "xs",
                            color: t4.A.colors.ICON_FEEDBACK_POSITIVE,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(x.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: ej.intl.string(eb.default.AxBLLy),
                        }),
                    ],
                }),
                m.length > 0
                    ? (0, a.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: m.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let p = n.keys?.length === 1 && n.keys[0] === rz.B,
        v = null != n.note && "" !== n.note ? n.note : p ? null : ej.intl.string(eb.default.XuOf5s);
    return (0, a.jsx)(rU.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: s,
        onSaved: h,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: l, submit: i } = e;
            async function s(e) {
                (e.preventDefault(), await i());
            }
            let o = (0, a.jsx)(f.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: ej.intl.string(eb.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: rB.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(x.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ej.intl.string(eb.default["jZjP+I"]),
                          }),
                          null != v
                              ? (0, a.jsx)(rM.A, { text: v, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: rB.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: u()(n6.nd, n6.jx),
                      "aria-label": ej.intl.string(eb.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: n6.wx,
                              children: [
                                  (0, a.jsx)(x.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: n6.TK,
                                      children: ej.intl.string(eb.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(e7.D, {
                                      className: u()(n6.gb, n6.Q7),
                                      onClick: r,
                                      "aria-label": ej.intl.string(eb.default["iq+Pte"]),
                                      children: (0, a.jsx)(e8.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: rB.DQ,
                              children: [
                                  null != v
                                      ? (0, a.jsx)(rM.A, { text: v, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: n6.qr,
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: rB.xE,
                                      children: ej.intl.string(eb.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: n6.zt,
                                      children: [
                                          (0, a.jsx)(f.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: ej.intl.string(eb.default["9J3OG8"]),
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
var rH = n(975571),
    rW = n(427123);
let rV = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rX = n(874421),
    rY = n(932111),
    rQ = n(940874),
    rZ = n(404373),
    rJ = n(89222);
function r0(e) {
    return "" !== rJ.A.getDraft(e).trim();
}
var r1 = n(29080);
function r2(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, nI.B4)(r),
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
        f = u.filter((e) => e !== d),
        m = f.filter((e) => "message" === e.type).at(-1),
        h = !i && !s && "" !== a.trim();
    return {
        streamed: f,
        lastStreamedMessage: m,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? a.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, nI.Lf)(r) }),
    };
}
var r3 = n(62617),
    r4 = n(182368);
let r5 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    r7 = {
        snail: () => eb.default.ABeVsS,
        goat: () => eb.default.dhXay8,
        frog: () => eb.default.SHeweG,
        bunny: () => eb.default.FytFE1,
        cat: () => eb.default["5c+sHs"],
        caterpillar: () => eb.default["/FYcne"],
        butterfly: () => eb.default["Ib/AxK"],
        dog: () => eb.default.zDjBR1,
        spider: () => eb.default["6sxyrN"],
        bee: () => eb.default.cVtefg,
        bot: () => eb.default.MjCw0v,
    },
    r8 = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, r3.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, r3.Z)(),
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
                        () => (0, r3.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, r3.Z)(),
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
                        () => (0, r3.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, r3.Z)(),
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
                        () => (0, r3.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, r3.Z)(),
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
                        () => (0, r3.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, r3.Z)(),
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
                        () => (0, r3.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, r3.Z)(),
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
                        () => (0, r3.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, r3.Z)(),
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
                        () => (0, r3.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, r3.Z)(),
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
                        () => (0, r3.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, r3.Z)(),
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
                        () => (0, r3.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, r3.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: r4.u, tint: "var(--illo-purple-40)" },
    };
function r9(e) {
    return { ...r8[e], name: ej.intl.string(r7[e]()) };
}
function r6(e) {
    return r5.includes(e) ? r9(e) : void 0;
}
function ae(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % r5.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, r5[(t + n) % r5.length]);
            }),
            l
        );
    })(e))
        t.set(n, r9(l));
    return t;
}
var at = n(615839);
function an(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ej.intl.string(eb.default.KcFvbo);
}
var al = n(60160),
    ar = n(101147);
function aa(e) {
    let t = (0, nI.SY)(e.steps);
    return null != t ? (0, nI.WQ)(t) : an(e.task);
}
function ai(e) {
    let t = ae(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? r6(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: an(e.task),
                      todoId: e.task.todoId,
                      line: aa(e),
                  },
              ];
    });
}
function as(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, nI.SY)(n.steps),
        d = u
            ? aa(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(an(e));
                  switch (e.status) {
                      case "failed":
                          return ej.intl.formatToPlainString(eb.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ej.intl.formatToPlainString(eb.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return ej.intl.formatToPlainString(eb.default["++9woZ"], {
                                  task: t,
                                  duration: (0, at.MB)(e.durationMs),
                              });
                          return ej.intl.formatToPlainString(eb.default.nmI9Uh, { task: t });
                      default:
                          return ej.intl.formatToPlainString(eb.default.nmI9Uh, { task: t });
                  }
              })(o),
        f = u ? c : void 0,
        m =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: nY.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            ar.A,
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
                                      className: nY.iq,
                                      children: (0, a.jsx)(al.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(nP.A, {
        glyph: (0, a.jsx)(nT.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: an(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: nY.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: r,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
var ao = n(998445),
    au = n(643210),
    ac = n(648127),
    ad = n(372795),
    af = n(163897);
let am = "conjure-browser-viewer";
function ah(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [au.A],
            () =>
                n.flatMap((e) => {
                    let n = au.A.getTab(t, e);
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
        className: af.kR,
        "aria-label": ej.intl.string(eb.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(ag, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function ag(e) {
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
        c = (0, e_.Ry)(am),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, ac.i)(l.session);
    return (0, a.jsxs)(e7.D, {
        innerRef: s,
        className: u()(af.Nr, h && af.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, e_.mM)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e(409495),
                            n.e(513843),
                            n.e(501962),
                            n.e(531527),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: am },
                )
            );
        },
        "aria-label": ej.intl.formatToPlainString(eb.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: af.Gt,
                children: [
                    (0, a.jsx)(ad.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || h,
                        className: af.Ji,
                        "aria-label": ej.intl.formatToPlainString(eb.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: af.qf,
                              children: (0, a.jsx)(ao.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: af.HS,
                              children: (0, a.jsx)(x.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: ej.intl.string(eb.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: af.pG,
                children: [
                    (0, a.jsx)("span", { className: u()(af.W9, h && af.oM) }),
                    (0, a.jsx)(x.E, {
                        tag: "span",
                        variant: "body-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: g,
                    }),
                ],
            }),
        ],
    });
}
var ap = n(268409);
let ax = new WeakMap(),
    av = new WeakMap();
function ab(e) {
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
        o = (0, c.yK)(
            [rL.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = ax.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = av.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), av.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (ax.set(e, n), n);
                })(rL.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === o.length
        ? null
        : (0, a.jsx)("li", { className: ap.h, children: (0, a.jsx)(ah, { projectId: t, sessionIds: o }) });
}
var aj = n(469393);
function ay(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, eM.lG)(t.authored_at);
    return (0, a.jsx)(nF, {
        title: ej.intl.string(eb.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: aj.r,
            children: [
                (0, a.jsxs)("div", {
                    className: aj.z,
                    children: [
                        (0, a.jsx)(x.E, { variant: "body-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(f.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ej.intl.string(eb.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var ak = n(288610),
    aw = n(493490),
    aA = n(17742);
let aS = [];
function aC(e) {
    let t = (0, c.bG)([aw.A], () => (null != e ? aw.A.getCaptures(e) : aS)),
        n = (0, c.bG)([aw.A], () => (null != e ? aw.A.getSelectedCapture(e) : null)),
        [l, r] = i.useState(null),
        a = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        i.useEffect(() => {
            if (null == e || null == n || null == a) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, aA._F)(e, n);
                        t || r({ key: a, url: l });
                    } catch {}
                })(),
                () => {
                    t = !0;
                }
            );
        }, [e, n, a]),
        { captures: t, selected: n, src: null != l && l.key === a ? l.url : null }
    );
}
var aN = n(714917),
    aI = n(463660),
    aE = n(970211);
function a_(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([aN.A], () => (null != e ? aN.A.getBackground(e) : null)),
                l = n?.imageEtag ?? null,
                [r, a] = i.useState(null),
                [s, o] = i.useState(null),
                [u, d] = i.useState(!1);
            (i.useEffect(() => {
                if (null != n) return;
                let e = setTimeout(() => d(!0), 2e3);
                return () => clearTimeout(e);
            }, [n]),
                i.useEffect(() => {
                    if (null == e || null == l) return;
                    let n = !1;
                    return (
                        !(async function (e, l) {
                            let r;
                            try {
                                r = await (0, aI.Mg)(e, l);
                            } catch {
                                r = t;
                            }
                            n || a(r);
                        })(e, l),
                        () => {
                            n = !0;
                        }
                    );
                }, [e, l, t]));
            let f = null != l ? r : null,
                m = null == l || (null != f && f === s) ? t : f,
                h = i.useCallback(() => {
                    m === f && o(f);
                }, [m, f]);
            return { src: null == e || null != n || u ? m : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        o = aC(n ? t : null);
    return null != o.selected
        ? null != o.src
            ? (0, a.jsx)("img", { className: aE.F1, src: o.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, a.jsx)("img", {
                className: u()(aE.LO, { [aE.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var aM = n(155718);
function aR(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let aP = ["command", "user_command", "message_command", "message"],
    aT = new Set([aM.kc.CHAT, aM.kc.USER, aM.kc.MESSAGE]);
function aL(e) {
    return e.type ?? aM.kc.CHAT;
}
function a$(e) {
    return aT.has(aL(e));
}
function aD(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function aq(e, t) {
    let n = aP.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !aD(e)), ...n.filter(aD)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || aD(r) || l.push(r);
    }
    return aP.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function aF(e, t, n) {
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
    let s = e.commands.filter(a$).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (aL(e)) {
                    case aM.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case aM.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(aD),
        u = a.length > 0 ? aq([...a, ...o], !0) : aq("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var aO = n(377941),
    aG = n.n(aO);
function az(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
n(205816);
let aU = { READ_MESSAGES: "VIEW_CHANNEL", VIEW_GUILD_INSIGHTS: "VIEW_GUILD_ANALYTICS" };
function aB(e) {
    return e.type === aM.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === aM.kc.USER || e.type === aM.kc.MESSAGE
          ? ""
          : "/";
}
let aK = {
        [eO.q7.APP_CHANNEL]: eb.default["3/aHX6"],
        [eO.q7.VOICE_CHANNEL]: eb.default["3/aHX6"],
        [eO.q7.ACTIVITY]: eb.default["3/aHX6"],
        [eO.q7.OVERLAY]: eb.default["rPpf5/"],
        [eO.q7.PROFILE_WIDGET]: null,
        [eO.q7.AUTOMOD]: null,
        [eO.q7.BOT]: null,
        [eO.q7.APPLICATION_COMMANDS]: null,
    },
    aH = [eO.q7.ACTIVITY, eO.q7.APP_CHANNEL, eO.q7.VOICE_CHANNEL, eO.q7.OVERLAY];
function aW(e) {
    return aH.find((t) => aR(e, t)) ?? null;
}
let aV = 1920 / 1018;
function aX(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let aY = aX(24, 1018),
    aQ = aX(24, 1920);
function aZ(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var aJ = n(90947),
    a0 = (((l = {}).IMAGE = "image"), l),
    a1 = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    a2 = n(598748),
    a3 = n(773669);
let a4 = [],
    a5 = {},
    a7 = {};
function a8(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function a9(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: a0.IMAGE,
        visibility: a1.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var a6 = n(127258),
    ie = n(803306),
    it = n(587895),
    il = n(432005),
    ir = n(963852),
    ia = n(95701),
    ii = n(619019),
    is = n(427262);
let io = new ia.nA({ id: "1337", guild_id: "1337", type: ls.rbe.GUILD_TEXT, name: "preview" });
function iu(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, c.bG)([y.default], () => y.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, ie.nj)(new ii.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let ic = /^@\S+/;
var id = n(775602);
let im = [eb.default["3eTjcV"], eb.default.l3j5nS];
var ih = n(97808),
    ig = n(778712),
    ip = n(486020),
    ix = n(46054),
    iv = n(200700);
let ib = {
        alert: { label: () => ej.intl.string(eb.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ej.intl.string(eb.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ej.intl.string(eb.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ej.intl.string(eb.default.RGzFNK), blockedStyle: !1 },
    },
    ij = {
        blocked: { label: () => ej.intl.string(eb.default.YdnZ8q), tone: "red" },
        alert: { label: () => ej.intl.string(eb.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ej.intl.string(eb.default.RGzFNK), tone: "green" },
    },
    iy = ["blocked", "alert", "allowed"],
    ik = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function iw(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : ej.intl.formatToPlainString(ej.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, iv.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? ej.intl.formatToPlainString(ej.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? ej.intl.formatToPlainString(ej.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? ej.intl.formatToPlainString(ej.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? ej.intl.formatToPlainString(ej.t.opVZ9q, { mins: n / 60 })
                                      : ej.intl.formatToPlainString(ej.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var iA = n(984097),
    iS = n(13673);
let iC = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function iN(e) {
    let { example: t } = e,
        n = iw(t);
    return null == n
        ? null
        : (0, a.jsx)(x.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let iI = ["glazedgamer", "sprinkles", "donutking"];
function iE(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = ib[n.outcome];
    return (0, a.jsxs)("li", {
        className: u()(iA.nM, { [u()(iA.HV, iS.DX)]: s }),
        children: [
            (0, a.jsx)(nL.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: iA.my,
                children: (0, a.jsx)(ih.eu, {
                    src: (0, ip.AE)(void 0, void 0),
                    size: ig._3.SIZE_24,
                    "aria-label": ej.intl.string(eb.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: iA.fw,
                children: [
                    (0, a.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), ix.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(iN, { example: n }) : null,
                ],
            }),
        ],
    });
}
function i_(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = ij[t.section],
        s = new Set(t.examples.map(iw)),
        o = 1 === s.size ? t.examples.map(iw)[0] : null;
    return (0, a.jsxs)("div", {
        className: iA.UO,
        children: [
            (0, a.jsxs)("div", {
                className: iA.RZ,
                children: [
                    (0, a.jsx)(x.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: iC[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: iA.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(x.E, {
                                      variant: "body-xs/semibold",
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
                className: iA.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(iE, { example: e, username: iI[(n + t) % iI.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function iM(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            iy
                .map((e) => ({ section: e, examples: t.filter((t) => ik[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: iA.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: iA.hk,
                      children: (0, a.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    i_,
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
var iR = n(276293),
    iP = n(460905),
    iT = n(110384),
    iL = n(365199),
    i$ = n(633018),
    iD = n(763754),
    iq = n(267508),
    iF = n(194085),
    iO = n(20851),
    iG = n(692508),
    iz = n(798819);
function iU(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: u()(iz.item, iz.labelContainer, iz.colorDefault, {
            [iz.focused]: !0 === t.highlighted,
            [iz.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: iz.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: iz.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: u()(iz.label, iG.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: iz.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: iz.icon }),
                  })
                : null,
        ],
    });
}
function iB(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: u()(t, iG.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: ej.intl.string(ej.t["5IEsGx"]), icon: iT.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: ej.intl.string(ej.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: u()(iz.menu, iG.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: iz.scroller,
            children: [
                (0, a.jsx)(iU, { item: s }),
                (0, a.jsx)("div", { className: iz.separator }),
                (0, a.jsx)(iU, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function iK() {}
function iH(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        d,
        f,
        m,
        h,
        g,
        { projectId: p, exchanges: v } = e,
        {
            items: b,
            botIcon: j,
            appIconSrc: k,
        } = ((t = (0, c.bG)([y.default], () => y.default.getCurrentUser())),
        (n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([it.A], () => it.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? ej.intl.string(eb.default.JEYq8M)),
        (o = (0, c.bG)([y.default], () => (null != l ? y.default.getUser(l) : void 0), [l])),
        (f = iu("31337", s, { bot: !0, enabled: !(d = o?.bot === !0) })),
        (m = d ? o : f),
        (h = iu("31338", ej.intl.string(eb.default["9iAOsw"]), { discriminator: "0003" })),
        (g = iu("31339", (0, is.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == m || null == h
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
                                      i = (0, il.rh)({
                                          ...(0, ir.Ay)({
                                              channelId: io.id,
                                              content: e,
                                              author: t,
                                              type: l ?? ls.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: ls.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: a6.G.APPLICATION_COMMAND,
                                                        user: (0, ir.Vi)(s),
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
                                              messageType: ls.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: ls.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(ic, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              v,
                              { bot: m, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: ej.intl.string(eb.default["y+QYes"]),
                                  memberMessage: ej.intl.string(eb.default.BUTRDc),
                              },
                          ),
                [v, m, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === b.length) return null;
    let w = io.name;
    return (0, a.jsxs)("div", {
        className: iG.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: iG.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(iR.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: w }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: u()(iG.TE, "group-spacing-16"),
                children: b.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? iG.Rz : void 0,
                            children: [
                                (0, a.jsx)(iO.A, {
                                    message: n,
                                    channel: io,
                                    author: (0, iD.FT)(n.author, io),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(iq.A, { message: n, channel: io }) : void 0,
                                    usernameClassName: r?.target === "user" ? iG.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: iG.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(iF.Ay, {
                                              children: [
                                                  (0, a.jsx)(iF.qv, {
                                                      label: ej.intl.string(ej.t.lfIHs4),
                                                      icon: iP.ReactionIcon,
                                                      onClick: iK,
                                                  }),
                                                  (0, a.jsx)(iF.qv, {
                                                      label: ej.intl.string(ej.t["5IEsGx"]),
                                                      icon: iT.ArrowAngleLeftUpIcon,
                                                      onClick: iK,
                                                  }),
                                                  (0, a.jsx)(iF.qv, {
                                                      label: ej.intl.string(ej.t["UKOtz+"]),
                                                      icon: iL.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: iK,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? iG.ET : iG.je,
                                          inert: !0,
                                          children: (0, a.jsx)(iB, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: k,
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
                className: iG.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(i$.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: ej.intl.formatToPlainString(ej.t["8lzR/R"], { channel: `#${w}` }),
                    }),
                ],
            }),
        ],
    });
}
n(381941);
var iW = n(332173);
function iV(e) {
    let { name: t } = e;
    return (0, a.jsxs)(iW.A, { children: ["/", t] });
}
function iX(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(aG());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(iV, { name: e.name }, e.start) : e.text));
}
n(827669);
var iY = n(757789),
    iQ = n(26137),
    iZ = n(231483),
    iJ = n(558393);
let i0 = { frame: eb.default.Z2bt4u, bot: eb.default.EbvC13, commands: eb.default.EbvC13, automod: eb.default.tiMvei },
    i1 = {
        user_widget: { server: eb.default.VlI3et, personal: eb.default.njJ4YL },
        overlay_widget: { server: eb.default.nUcjJ1, personal: eb.default.RDpKqP },
    };
function i2(e) {
    return "frame" === e.kind && !0 !== e.game;
}
var i3 = n(573634);
let i4 = {
    frame: e4.GameControllerIcon,
    overlay_widget: iY.WindowTopIcon,
    user_widget: iQ.UserCircleIcon,
    bot: e5.RobotIcon,
    commands: e5.RobotIcon,
    automod: iZ.ShieldIcon,
};
function i5(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: u()(i3.e7, l),
        children: [(0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function i7(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: i3.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: i3.jw,
                    children: (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
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
function i8(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: i3.lj,
        children: [
            (0, a.jsx)("span", {
                className: u()(i3.Vo, i3.G),
                children: (0, a.jsx)(e0.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: i3.aV,
                children: [
                    (0, a.jsx)(x.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function i9(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: i3.wZ,
        children: t.map((e, t) => {
            let n = aB(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(iV, { name: e.name })
                                : (0, a.jsx)(iW.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function i6(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: i3.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: i3.Aw,
                    children: (0, a.jsx)(x.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(iX, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function se(e) {
    let { experience: t, inServer: n, bullets: l, preview: r, blocks: i, commandNames: s } = e,
        o = i2(t) ? e0.AppsIcon : i4[t.kind],
        u = (function (e, t) {
            if (i2(e)) return ej.intl.string(eb.default.BM4Ymz);
            if ("user_widget" === e.kind || "overlay_widget" === e.kind) {
                let n = i1[e.kind];
                return ej.intl.string(t ? n.server : n.personal);
            }
            return ej.intl.string(i0[e.kind]);
        })(t, n),
        c = n && t.kind in i1 ? ej.intl.string(eb.default.UXJCSG) : null;
    return (0, a.jsxs)("section", {
        className: i3.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: i3.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: i3.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(x.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != c ? (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            null != r ? (0, a.jsx)("div", { className: i3.VH, children: r }) : null,
            "automod" === t.kind && 1 === l.length
                ? (0, a.jsx)(x.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(iX, { text: l[0], commandNames: s }),
                  })
                : l.length > 0
                  ? (0, a.jsx)(i6, { bullets: l, commandNames: s })
                  : null,
            i.length > 0 ? (0, a.jsx)("div", { className: i3.PG, children: i }) : null,
        ],
    });
}
function st(e) {
    var t;
    let n,
        l,
        r,
        { appName: s, inServer: o, guild: u, intro: c, proposal: d, renderPreview: f, commandNames: m } = e,
        h =
            ((t = d.experiences ?? []),
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
                                let n = t.map(aG()).join("|");
                                return RegExp(`(?<![\\p{L}\\p{N}/.:])/(?:${n})(?![\\p{L}\\p{N}_-])`, "iu").test(e);
                            })(e, m),
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
            )),
        g =
            ((r =
                h.find((e) => {
                    let { experience: t } = e;
                    return "bot" === t.kind || "commands" === t.kind;
                }) ?? h[0]),
            r?.experience.id);
    return (0, a.jsxs)("div", {
        className: i3.aN,
        children: [
            (0, a.jsxs)("div", {
                className: i3.Lv,
                children: [(0, a.jsx)(p.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), c],
            }),
            h.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: i3.yF, role: "separator" }),
                            (0, a.jsx)(se, {
                                experience: t,
                                inServer: o,
                                bullets: n,
                                preview: f(t),
                                blocks: (function (e, t, n, l) {
                                    let r,
                                        i = n
                                            ? ((r = null != l ? iJ.A.getGuildPermissionSpecMap(l) : null),
                                              [
                                                  {
                                                      key: "permissions",
                                                      caption: eb.default["2UbW6r"],
                                                      names: e.bot_permissions,
                                                      label: (e) => {
                                                          let t, n;
                                                          return (
                                                              (t = Object.hasOwn(aU, e) ? aU[e] : e),
                                                              (null != (n = Object.hasOwn(ls.xBc, t) ? ls.xBc[t] : null)
                                                                  ? r?.[n.toString()]?.title
                                                                  : null) ?? az(e)
                                                          );
                                                      },
                                                  },
                                                  {
                                                      key: "intents",
                                                      caption: eb.default["7TKfpj"],
                                                      names: e.privileged_intents,
                                                      label: az,
                                                  },
                                              ].flatMap((e) => {
                                                  let { key: t, caption: n, names: l, label: r } = e;
                                                  return null != l && l.length > 0
                                                      ? [
                                                            {
                                                                key: t,
                                                                caption: ej.intl.string(n),
                                                                labels: [...new Set(l.map(r))],
                                                            },
                                                        ]
                                                      : [];
                                              })).map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      i5,
                                                      { caption: n, children: (0, a.jsx)(i7, { labels: l }) },
                                                      t,
                                                  );
                                              })
                                            : [];
                                    switch (t.kind) {
                                        case "frame":
                                            return [
                                                ...(function (e, t) {
                                                    let n = (function (e, t) {
                                                        if ("frame" !== t.kind) return null;
                                                        let n = ej.intl.string(eb.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(eO.q7.APP_CHANNEL)) {
                                                            let r = e.app_channel_names ?? [];
                                                            l = (
                                                                null != t.app_channels && t.app_channels.length > 0
                                                                    ? t.app_channels
                                                                    : r.length > 0
                                                                      ? r.map((e) => ({ name: e }))
                                                                      : [{ name: eV(t.name) }]
                                                            ).map((e) => {
                                                                let { name: t, description: l } = e,
                                                                    r = l?.trim() ?? "";
                                                                return { name: t, description: "" !== r ? r : n };
                                                            });
                                                        }
                                                        return {
                                                            channels: l,
                                                            launchableAnywhere: t.surfaces.includes(eO.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(eO.q7.VOICE_CHANNEL),
                                                        };
                                                    })(e, t);
                                                    if (null == n) return [];
                                                    let l = [];
                                                    n.channels.length > 0 &&
                                                        l.push(
                                                            (0, a.jsx)(
                                                                i5,
                                                                {
                                                                    className: i3.Iw,
                                                                    caption: ej.intl.formatToPlainString(
                                                                        eb.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: i3.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                i8,
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
                                                        ...(n.usableInVoice
                                                            ? [ej.intl.string(eb.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [ej.intl.string(eb.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, a.jsx)(
                                                                    i5,
                                                                    {
                                                                        caption: ej.intl.string(eb.default.MY6UGJ),
                                                                        children: (0, a.jsx)(i7, { labels: r }),
                                                                    },
                                                                    "features",
                                                                ),
                                                            ),
                                                        l
                                                    );
                                                })(e, t),
                                                ...i,
                                            ];
                                        case "bot":
                                        case "commands":
                                            return [
                                                ...(0 === e.commands.length
                                                    ? []
                                                    : [
                                                          (0, a.jsx)(
                                                              i5,
                                                              {
                                                                  caption: ej.intl.string(ej.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(i9, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...i,
                                            ];
                                        default:
                                            return i;
                                    }
                                })(d, t, t.id === g, u),
                                commandNames: m,
                            }),
                        ],
                    },
                    t.id,
                );
            }),
        ],
    });
}
var sn = n(633075),
    sl = n(591410),
    sr = n(27399);
function sa(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
        r = i.useMemo(() => new sn.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: sr.H,
              children: (0, a.jsx)(sl.A, {
                  user: l,
                  widget: r,
                  allowEditing: !1,
                  disableInteraction: !0,
                  interactiveLinks: !0,
                  disableCTA: !0,
                  rendererProps: n,
              }),
          });
}
var si = n(443863);
function ss(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        o =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: aX(i.width * t, 1920), height: aX(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(a_, { projectId: n }),
            (0, a.jsx)("div", {
                className: si.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": aY,
                    "--custom-conjure-plan-overlay-widget-end": aQ,
                    "--custom-conjure-plan-overlay-widget-width": o.width,
                    "--custom-conjure-plan-overlay-widget-height": o.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: si.M7, onError: s }),
            }),
        ],
    });
}
function so(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, tG.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, re.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function su(e) {
    return new Promise((t) => setTimeout(t, e));
}
function sc(e) {
    let { projectId: t, src: n, alt: l, size: r, generateImageRef: s } = e,
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = o.current;
            if (null == e) return;
            let t = !1,
                n = [];
            return (
                !(async function (e) {
                    (await (async function (e) {
                        let t = Date.now() + 3e3;
                        for (; e.querySelectorAll("img").length < 2 && Date.now() < t;) await su(50);
                    })(e),
                        await Promise.all(
                            Array.from(e.querySelectorAll("img"), async (e) => {
                                try {
                                    await e.decode();
                                    let l = await fetch(e.currentSrc, { cache: "reload" });
                                    if (!l.ok) return;
                                    let r = URL.createObjectURL(await l.blob());
                                    if (t) return void URL.revokeObjectURL(r);
                                    (n.push(r), (e.src = r), await e.decode());
                                } catch {}
                            }),
                        ),
                        t || s(e));
                })(e),
                () => {
                    ((t = !0), n.forEach((e) => URL.revokeObjectURL(e)));
                }
            );
        }, [s]),
        (0, a.jsx)("div", {
            ref: o,
            className: u()(si.nj, si.d9),
            style: { "--custom-conjure-plan-overlay-scene-aspect": String(aV) },
            children: (0, a.jsx)(ss, { projectId: t, src: n, alt: l, size: r, onError: () => {} }),
        })
    );
}
function sd(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: o } = (0, rt._)(t, r);
    return s
        ? null
        : (0, a.jsx)(e7.D, {
              className: si.xX,
              onClick: () => so(t, [{ id: r, alt: l }], 0),
              "aria-label": ej.intl.string(eb.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: si.sN, onError: o }),
          });
}
function sf(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: d } = (0, rt._)(t, r),
        [f, m] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: p,
            labels: v,
            pick: b,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([id.Ay], () => id.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, o] = i.useState(!1),
                u = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!u) return;
                let e = setInterval(() => a((e) => (e + 1) % im.length), 4e3);
                return () => clearInterval(e);
            }, [u]);
            let f = i.useCallback((e) => {
                    (o(!0), a(e));
                }, []),
                m = i.useCallback(() => f(d), [f, d]);
            return { slide: d, labels: im.map((e) => ej.intl.string(e)), pick: f, hold: m };
        })({ ready: null != s, paused: f || h }),
        j = ej.intl.string(eb.default.mjryK4),
        y = ej.intl.string(eb.default["rPpf5/"]),
        { generateImage: k } = (0, ak.R)({
            renderComponent: (e) =>
                null == s ? null : (0, a.jsx)(sc, { ...e, projectId: t, src: s, alt: y, size: l }),
            imageOptions: { width: 1920 },
        });
    return o
        ? null
        : (0, a.jsxs)("div", {
              className: si.RM,
              onMouseEnter: () => m(!0),
              onMouseLeave: () => m(!1),
              onFocus: () => g(!0),
              onBlur: (e) => {
                  e.currentTarget.contains(e.relatedTarget) || g(!1);
              },
              children: [
                  (0, a.jsx)(e7.D, {
                      className: u()(si.xX, si.nj, { [si.qQ]: 0 === p }),
                      style: { "--custom-conjure-plan-overlay-scene-aspect": String(aV) },
                      onClick: () =>
                          (async function (e) {
                              let t,
                                  {
                                      projectId: n,
                                      id: l,
                                      widgetAlt: r,
                                      sceneAlt: a,
                                      startingIndex: i,
                                      captureScene: s,
                                  } = e;
                              try {
                                  t = await (0, tG.PK)(n, l);
                              } catch {
                                  return;
                              }
                              let o = null;
                              if (null != s)
                                  try {
                                      let e = await Promise.race([s(), su(8e3)]);
                                      null != e && (o = URL.createObjectURL(e));
                                  } catch {}
                              let u = o;
                              (0, re.R)({
                                  items: [
                                      { type: "IMAGE", url: t, alt: r },
                                      ...(null == u ? [] : [{ type: "IMAGE", url: u, alt: a }]),
                                  ],
                                  startingIndex: null == u ? 0 : i,
                                  shouldHideMediaOptions: !0,
                                  location: "ConjureChat",
                                  onClose: null == u ? void 0 : () => URL.revokeObjectURL(u),
                              });
                          })({
                              projectId: t,
                              id: r,
                              widgetAlt: j,
                              sceneAlt: y,
                              startingIndex: p,
                              captureScene: null == s ? null : k,
                          }),
                      "aria-label": ej.intl.string(eb.default.TvAPIm),
                      children:
                          null == s
                              ? null
                              : 0 === p
                                ? (0, a.jsx)("img", { src: s, alt: j, className: si.Ac, onError: d })
                                : (0, a.jsx)(ss, { projectId: t, src: s, alt: y, size: l, onError: d }),
                  }),
                  (0, a.jsx)("div", {
                      className: si._4,
                      role: "group",
                      "aria-label": ej.intl.string(eb.default.EH36X6),
                      children: v.map((e, t) =>
                          (0, a.jsx)(
                              e7.D,
                              {
                                  className: u()(si.c, { [si.Cw]: p === t }),
                                  "aria-pressed": p === t,
                                  onClick: () => b(t),
                                  children: (0, a.jsx)(x.E, {
                                      variant: "body-xs/medium",
                                      color: "none",
                                      tag: "span",
                                      children: e,
                                  }),
                              },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
function sm(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: o } = (0, rt._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(e7.D, {
                  className: si.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: si.rA, onError: o }),
              }),
          });
}
function sh(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: ej.intl.formatToPlainString(eb.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: si.Op,
              children: (0, a.jsxs)("div", {
                  className: si.uW,
                  children: [
                      (0, a.jsx)(x.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: ej.intl.string(eb.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: si.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(sm, { projectId: t, id: r, alt: i, onOpen: () => so(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function sg(e) {
    var t;
    let n,
        l,
        r,
        s,
        o,
        u,
        d,
        m,
        h,
        g,
        { projectId: p, proposal: v, version: b, onApprove: j } = e,
        { botExchanges: y } =
            ((n = aR(v, eO.q7.APPLICATION_COMMANDS)),
            (l =
                aR(v, eO.q7.BOT) || n
                    ? null != v.bot
                        ? v.bot.interaction
                        : n && v.commands.some(a$)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : aF(v, l, {
                              message: ej.intl.string(eb.default.J7qggf),
                              reply: ej.intl.string(eb.default.nqYtiy),
                              event: ej.intl.string(eb.default["05lU9W"]),
                          }),
                [v, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = a7 } = t,
                r = (0, c.bG)([a3.default], () => a3.default.locale),
                a = (0, c.bG)([ts.Ay], () => {
                    let t = ts.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(a5);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, tG.PK)(e, l.id).then(
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
                o = i.useMemo(
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
                                                          ...a8(n),
                                                          ...(null != n.fallback ? { fallback: a8(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = aJ.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[a2.m.WIDGET_TOP] || null == i[a2.m.WIDGET_BOTTOM]
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
                                                                    type: aJ.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: aJ.oG.NUMBER, value: a })
                                                                : (r[e] = { type: aJ.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(a9),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: a4,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == o ? null : { applicationId: a, rendererProps: o }), [a, o]);
        })(p, v),
        w = b?.superseded === !0,
        A = v.what_changed?.trim() ?? "",
        S =
            ((t = v.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === aB(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((o =
                null == (s = aW(v))
                    ? null
                    : (v.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (u = v.design_image) && u.id !== aZ(v)?.id ? u : null),
            (m = aZ(v)),
            (h =
                v.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "frame" === t;
                })?.id ?? o),
            (g =
                v.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "overlay_widget" === t;
                })?.id ?? o),
            {
                ui: null != d && null != h ? { experienceId: h, design: d } : null,
                overlay:
                    null != m && null != g ? { experienceId: g, design: m, size: ez(v.overlay_widget ?? null) } : null,
            }),
        N = i.useMemo(
            () =>
                v.commands.some(a$)
                    ? aF({ ...v, bot: void 0 }, "commands", {
                          message: ej.intl.string(eb.default.J7qggf),
                          reply: ej.intl.string(eb.default.nqYtiy),
                          event: ej.intl.string(eb.default["05lU9W"]),
                      })
                    : [],
            [v],
        ),
        I = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(p)?.name, [p]),
        E = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(p)?.install_scope === "guild", [p]),
        _ = (0, c.bG)(
            [ts.Ay, lK.A],
            () => {
                let e = ts.Ay.getProject(p)?.guild_id;
                return null != e ? (lK.A.getGuild(e) ?? null) : null;
            },
            [p],
        ),
        M =
            w && null != b
                ? ej.intl.formatToPlainString(eb.default.YZ3qJs, { version: b.version })
                : ej.intl.string(eb.default["3b6e7o"]),
        R = w ? (0, a.jsx)(nG, { children: ej.intl.string(eb.default.hF2c41) }) : null;
    return (0, a.jsxs)(nz, {
        title: M,
        meta: R,
        superseded: w,
        showLabel: ej.intl.string(eb.default.yD8EJS),
        hideLabel: ej.intl.string(eb.default.nSPGNb),
        bodyClassName: si.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: si.Qs,
                children: (0, a.jsx)(st, {
                    appName: I ?? v.experiences?.[0]?.name ?? "",
                    inServer: E,
                    guild: _,
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(iX, { text: v.summary, commandNames: S }),
                            }),
                            (0, a.jsx)(sh, { projectId: p, proposal: v }),
                            "" !== A
                                ? (0, a.jsxs)("section", {
                                      className: si.uW,
                                      children: [
                                          (0, a.jsx)(x.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: ej.intl.string(eb.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(x.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(iX, { text: A, commandNames: S }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    proposal: v,
                    renderPreview: function (e) {
                        switch (e.kind) {
                            case "frame":
                            case "overlay_widget": {
                                let t,
                                    n =
                                        e.id === C.ui?.experienceId
                                            ? (0, a.jsx)(sd, {
                                                  projectId: p,
                                                  design: C.ui.design,
                                                  alt: ej.intl.string(
                                                      null == (t = aW(v)) ? eb.default["3/aHX6"] : aK[t],
                                                  ),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, a.jsx)(sf, {
                                                  projectId: p,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(sa, { ...k }) : null;
                            case "automod":
                                return null != v.automod && v.automod.examples.length > 0
                                    ? (0, a.jsx)(iM, { automod: v.automod })
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
                                        (r = l.some((e) => "command" === e.kind || aD(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, N);
                                return t.length > 0 ? (0, a.jsx)(iH, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: S,
                }),
            }),
            null == j || w
                ? null
                : (0, a.jsxs)("div", {
                      className: si.qr,
                      children: [
                          (0, a.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              text: ej.intl.string(eb.default["6S+wRM"]),
                              onClick: j,
                          }),
                          (0, a.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: ej.intl.string(eb.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var sp = n(289565);
function sx(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: sp.m, children: n })
        : (0, a.jsxs)("div", {
              className: sp.Z,
              children: [
                  n,
                  (0, a.jsx)(d.m, {
                      text: ej.intl.string(ej.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tQ.K, {
                          "aria-label": ej.intl.string(ej.t.WAI6xu),
                          icon: e8.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function sv(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function sb(e, t) {
    return (e?.state === "action_needed" || e?.state === "publishing") && sv(t, e.status);
}
let sj = new WeakMap();
function sy(e) {
    let { projectId: t, publish: n } = e,
        l = (0, tj.A)(t, n);
    return (0, a.jsx)(f.$, {
        variant: "primary",
        size: "sm",
        loading: "publishing" === n.state && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function sk(e) {
    let { projectId: t, cta: n } = e,
        l = (0, tm.Ay)(t);
    return null != l && sb(l, n)
        ? (0, a.jsx)(sx, {
              children: (0, a.jsxs)(lk.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(sy, { projectId: t, publish: l }),
                      null != l.failure
                          ? (0, a.jsx)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: l.failure,
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var sw = n(303345),
    sA = n(44255),
    sS = n(416473),
    sC = n(289830);
function sN(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, c.bG)(
                    [ts.Ay],
                    () => {
                        let t = ts.Ay.getProject(e);
                        return null != t && (0, ts.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, o] = i.useState(null),
                u = i.useCallback(async () => {
                    (a("sending"), o(null));
                    try {
                        (await (0, sS.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (o(e instanceof sw.A ? e.message : ej.intl.string(eb.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                f =
                    t.next_run_at > d
                        ? ej.intl.formatToPlainString(eb.default.orZDqY, { time: (0, sA.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, sA.lD)(t.trigger),
                firstPublish: f,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? u : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(nF, {
        title: ej.intl.string(eb.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: sC.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sC.z,
                    children: [
                        (0, a.jsx)(x.E, { variant: "body-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: ej.intl.string(eb.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: ej.intl.string(eb.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, a.jsx)(f.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ej.intl.string(eb.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var sI = n(478016),
    sE = n(989271);
function s_(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(e7.D, {
        className: u()(sE.nM, { [sE.f1]: s, [sE.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": ej.intl.formatToPlainString(eb.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: sE.jo,
                children: [
                    n
                        ? (0, a.jsx)(sI.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sE.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(x.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: sE.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(x.E, {
                      tag: "div",
                      id: r,
                      variant: "body-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function sM(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(nF, {
        title: ej.intl.string(eb.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                s_,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var sR = n(313537),
    sP = n(125372);
let sT = {
        add_to_server: eb.default["7SD3ul"],
        remove_from_server: eb.default.ErhKil,
        change_server: eb.default["1E5/ay"],
    },
    sL = {
        add_to_server: eb.default["Wy+mGW"],
        remove_from_server: eb.default.vUWHZe,
        change_server: eb.default.MfnSEe,
    };
var s$ = n(831913),
    sD = n(618785);
function sq(e) {
    var t;
    let n,
        l,
        r,
        i,
        s,
        o,
        u,
        d,
        m,
        h,
        g,
        p,
        { projectId: v, change: b, current: j, onReply: y } = e,
        {
            project: k,
            action: w,
            done: A,
            note: S,
        } = ((n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(v), [v])),
        (l = (0, sR.fL)(n)),
        (r = n?.install_scope === "guild"),
        (t = "remove_from_server" === b.action ? b.guild_id : l),
        (i = (0, c.bG)([lK.A], () => lK.A.getGuild(t)?.name, [t]) ?? ej.intl.string(eb.default["6bhivN"])),
        (s = (0, sP.Y)(v).length > 0),
        (o =
            (0, c.bG)(
                [rL.A],
                () =>
                    (function (e, t, n) {
                        let l = e.findIndex((e) => e.serverChange === t);
                        if (-1 === l) return !1;
                        let r = [];
                        for (let t of e.slice(l + 1)) {
                            if (null != t.serverChange) return !1;
                            t.projectEvent?.type === "app_removed" && r.push(t.projectEvent);
                        }
                        if ("add_to_server" === t.action) return 0 === r.length;
                        if ("remove_from_server" === t.action && 0 === r.length) return !0;
                        if (1 !== r.length) return !1;
                        let [a] = r;
                        return "change_server" === t.action
                            ? null != n &&
                                  a.moved_to_guild_id === n &&
                                  (null == t.guild_id || a.guild_id === t.guild_id)
                            : null == a.moved_to_guild_id && a.guild_id === t.guild_id;
                    })(rL.A.getMessages(v), b, l),
                [v, b, l],
            ) &&
            null != n &&
            ("remove_from_server" === b.action ? !r : r)),
        (u = "change_server" !== b.action || null == b.guild_id || l === b.guild_id),
        (d = null != n && ("add_to_server" === b.action ? !r : r) && u && !o),
        (m = null != n && (0, ts.PV)(n)),
        (h = "remove_from_server" !== b.action),
        (g = d && m ? { kind: b.action, label: ej.intl.string(sT[b.action]), disabled: h && !s } : null),
        (p = null),
        d && !m
            ? (p = ej.intl.string(eb.default.Kt9exT))
            : g?.disabled === !0 && (p = ej.intl.string(eb.default.NXvmoQ)),
        { project: n, action: g, done: o ? ej.intl.formatToPlainString(sL[b.action], { server: i }) : null, note: p }),
        C = b.keep_label,
        N = j && null != w,
        I = N && null != C && null != y,
        E = A ?? (j ? S : null);
    return null != E || N
        ? (0, a.jsxs)(lk.B, {
              gap: 8,
              children: [
                  N
                      ? (0, a.jsxs)(lk.B, {
                            direction: "horizontal",
                            gap: 8,
                            wrap: !0,
                            children: [
                                (0, a.jsx)(f.$, {
                                    variant: "remove_from_server" === w.kind ? "critical-secondary" : "primary",
                                    size: "sm",
                                    text: w.label,
                                    disabled: w.disabled,
                                    onClick: () => {
                                        null != k &&
                                            (w?.kind === "remove_from_server"
                                                ? (0, s$.A)({ project: k })
                                                : (0, sD.A)({ projectId: v }));
                                    },
                                }),
                                I
                                    ? (0, a.jsx)(f.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: C,
                                          onClick: () => y(C),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  null != E ? (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: E }) : null,
              ],
          })
        : null;
}
var sF = n(919790),
    sO = n(908492),
    sG = n(971824),
    sz = n(162052),
    sU = n(165648);
function sB(e) {
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
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = i.useMemo(() => (0, nI.Jf)(n, l), [n, l]),
        v = i.useMemo(
            () =>
                null == f
                    ? x
                    : {
                          ...x,
                          steps: x.steps.filter((e) => e.segment === f),
                          tasks: x.tasks.filter((e) => e.task.segment === f),
                      },
            [x, f],
        );
    if (u)
        return (0, a.jsx)("ol", {
            className: nY.pj,
            "data-live": !1,
            children: (0, a.jsx)(nP.A, {
                glyph: (0, a.jsx)(r1.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ej.intl.string(eb.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let b = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        j = m ? ((0, nI.lt)(n) ?? c ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = ae(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        S = ai(k);
    return (0, a.jsxs)("ol", {
        className: nY.pj,
        "data-live": A,
        children: [
            (0, a.jsx)(nM.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: b,
                connectsDown: k.length > 0,
                tier: x.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? r6(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          as,
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
            (0, a.jsx)(ab, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: nY.YO,
                      children: (0, a.jsx)(nV, { todos: j, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sK(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: o,
            attachments: c,
            secretRequest: d,
            secretRequestId: f,
            secretRequestAwaiting: m,
            secretRequestStatus: h = "open",
            settingsRequest: g,
            settingsAskId: p,
            publishCta: v,
            onPickIdea: b,
            pickedIdeaIds: j,
            onApprovePlan: y,
            sideReply: k = !1,
            sideReplyAcknowledges: w,
            hoistedProse: A = !1,
            hoistedAttachmentsHost: S,
            restoreProposal: C,
            onRestoreProposal: N,
            publishScheduleProposal: I,
            publishScheduleProposalCurrent: E = !1,
            serverChange: _,
            serverChangeCurrent: M = !1,
            onCardReply: R,
        } = e,
        P = i.useMemo(
            () => r2({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: T, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = P,
        q = (A ? S : void 0) ?? P.attachmentsHost,
        F = $ && !A,
        O = null == c ? null : (0, a.jsx)(sF.A, { projectId: t, attachments: c }),
        G = null == O ? null : (0, a.jsx)("div", { className: nY.MT, children: O }),
        z = k
            ? (0, a.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ej.intl.string(eb.default.Mv5OmK);
                          case "queued":
                              return ej.intl.string(eb.default["Po/2mi"]);
                          case "restarting":
                              return ej.intl.string(eb.default.Vj0woh);
                          default:
                              return ej.intl.string(eb.default.gY3L8p);
                      }
                  })(w),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: nY.ue,
        children: [
            T.length > 0 && !A
                ? (0, a.jsx)("ol", {
                      className: nY.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: nY.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: sU.PT,
                                          children: (0, sO.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === q && e === L ? G : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(sg, { projectId: t, proposal: r, version: s, onApprove: y })
                : F
                  ? (0, a.jsxs)("div", {
                        className: u()(nY.ky, sz.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: u()(sU.PT, nY.cW),
                                children: (0, sO.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === q ? G : null,
                            z,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: u()(nY.ky, nY.k1, sz.XR, { [sG.O]: null != m && "open" === h }),
                      children: (0, a.jsx)(rP, {
                          projectId: t,
                          cardId: f ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? m : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, a.jsx)("div", {
                      className: u()(nY.ky, nY.k1, sz.XR),
                      children: (0, a.jsx)(rK, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== q && ("closing" !== q || F) ? null : O,
            null != v ? (0, a.jsx)(sk, { projectId: t, cta: v }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(sM, { ideas: o, pickedIdeaIds: j, onPick: b }) : null,
            null != C ? (0, a.jsx)(ay, { proposal: C, onRestore: N }) : null,
            null != _ ? (0, a.jsx)(sq, { projectId: t, change: _, current: M, onReply: R }) : null,
            null != I ? (0, a.jsx)(sN, { projectId: t, proposal: I, current: E }) : null,
            F ? null : z,
        ],
    });
}
var sH = n(286251),
    sW = n(146806),
    sV = n(475358),
    sX = n(783977),
    sY = n(559647),
    sQ = n(787564),
    sZ = n(339200),
    sJ = n(234320),
    s0 = n(191023),
    s1 = n(285796),
    s2 = n(922329),
    s3 = n(153171);
function s4(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(s2.p, {
        name: ej.intl.string(eb.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: ne.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(s0.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: ne.OY,
                    children: (0, a.jsx)(lb.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(x.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: ej.intl.string(eb.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: s3.o1,
            onClick: () => {
                ea(t)?.active === !1 ? ec(t) : ei(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": ej.intl.string(eb.default.N852dj),
            children: (0, a.jsx)(s1.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function s5(e) {
    let { send: t } = e;
    return (0, a.jsxs)(s2.p, {
        compact: !0,
        name: ej.intl.string(eb.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: ej.intl.string(eb.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: s3.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(lj.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: ej.intl.string(eb.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var s7 = n(587157),
    s8 = n(347111),
    s9 = n(120234),
    s6 = n(901173),
    oe = n(161431),
    ot = n(46653),
    on = n(695184),
    ol = n(661191),
    or = n(502472);
function oa(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(e), [e]),
        { creator: r, collaborators: a } = (0, or.yv)(l),
        s = (0, c.bG)([ot.default], () => ot.default.getId()),
        o = null != l && (0, eO.pL)(l) ? l.guild_id : void 0,
        u = t?.toLowerCase() ?? null;
    return (
        i.useEffect(() => {
            n && null != o && null != u && on.A.requestMembers(o, u, 100);
        }, [n, o, u]),
        (0, c.yK)(
            [lB.Ay, lK.A, y.default],
            () => {
                if (null == u) return [];
                let e = null != o ? lK.A.getGuild(o) : null,
                    t = (t) => (0, s6.mO)(t, u, null != e ? lB.Ay.getNick(e.id, t.id) : null),
                    n = new Set(l?.collaborator_role_ids ?? []),
                    i = null != e && n.has(ol.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                    c =
                        null == e
                            ? []
                            : lB.Ay.getMemberIds(e.id)
                                  .map((e) => y.default.getUser(e))
                                  .filter(
                                      (l) =>
                                          null != l &&
                                          t(l) &&
                                          (i ||
                                              (lB.Ay.getMember(e.id, l.id)?.roles ?? []).some((e) => n.has(e)) ||
                                              lH.$3({ permission: ls.xBc.MANAGE_GUILD, user: l, context: e })),
                                  ),
                    d = new Set();
                return [...[...(null != r ? [r] : []), ...a].filter(t), ...c].filter(
                    (e) => !(e.id === s || e.bot || d.has(e.id)) && (d.add(e.id), !0),
                );
            },
            [l, o, u, r, a, s],
        )
    );
}
var oi = n(957071),
    os = n(927659),
    oo = n(351906),
    ou = n(407653),
    oc = n(322915);
function od(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        o = (0, c.bG)([oo.A], () => oo.A.hidePersonalInformation ?? !1),
        u = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let f = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      os.Ay.User,
                      {
                          index: t,
                          user: e.user,
                          nick: null,
                          status: null,
                          hidePersonalInformation: o,
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.user.id,
                  )
                : (0, a.jsx)(
                      os.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(ou.A, { projectId: n, file: e.file, className: oc.Vk }),
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        m = l.findIndex((e) => "file" === e.kind),
        h = -1 === m ? f : f.slice(0, m),
        g = -1 === m ? [] : f.slice(m);
    return (0, a.jsx)(os.Ay, {
        id: t,
        className: oc.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": ej.intl.string(eb.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(of, { titleId: u, title: ej.intl.string(eb.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(of, { titleId: d, title: ej.intl.string(eb.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function of(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(x.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: oc.Gf, children: n }),
            l,
        ],
    });
}
var om = n(719442),
    oh = n(355622),
    og = n(408018),
    op = n(186306),
    ox = n(323350),
    ov = n(35277),
    ob = n(68059),
    oj = n(267102),
    oy = n(259691);
let ok = (0, ia.createChannelRecord)({ id: "1", type: ls.rbe.DM });
function ow(e) {
    let t = sZ.VW.end(e, []);
    return { anchor: t, focus: t };
}
function oA(e) {
    return (0, ox.WO)(sZ.VW.richValue(e), { mode: "raw" });
}
function oS(e, t) {
    ((e.children = (0, og.x7)(t)), (e.selection = ow(e)), e.onChange());
}
function oC(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rY.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(oy.A, { attachmentId: r }), n] });
}
var oN = n(366811);
function oI(e, t) {
    return e.split("/").some((e, n, l) => e === t && "conjure" === l[n - 1]);
}
function oE(e) {
    let t = oN.A.getState().path;
    return oI(window.location.pathname, e) && (null == t || oI(t, e));
}
function o_(e, t) {
    return null != t && (0, tF.vq)(e) && t.contains(e);
}
var oM = n(497437),
    oR = n(465410);
let oP = "body-md/normal",
    oT = null;
function oL(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        o = i.useRef(null),
        d = i.useRef(null),
        f = i.useRef(0),
        [m, h] = i.useState(0),
        [g, p] = i.useState(0),
        [v, b] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = o.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = f.current;
        function l() {
            let e = o.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = d.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (p(i + a), h(s));
            let u = s + i,
                c = Math.max(n, l.offsetWidth) + a + i,
                f = 0 === c ? 1 : s / c,
                m = 0 === c ? 1 : u / c;
            b({
                frontFrom: 1e3 * (0, sW._R)(f),
                frontTo: 1e3 * (0, sW._R)(m),
                backFrom: 1e3 * (0, sW.T)(f),
                backTo: 1e3 * (0, sW.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            f.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, y] = i.useState(0),
        [k, w] = i.useState(null),
        A = i.useRef(!1),
        S = i.useCallback(() => {
            (w(A.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        A.current = n;
    }, [n, t]);
    let C = "in" === k ? v.backFrom : v.frontFrom,
        N = "out" === k ? v.frontTo : v.backTo,
        I = (0, c.bG)([id.Ay], () => id.Ay.useReducedMotion),
        E = t === ej.intl.string(eb.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: u()(oM.VT, { [oM.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, N - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && j > 0 && null != k ? j % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(sV.e, { shortcut: "tab", className: oM.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sH.o, {
                text: t,
                variant: oP,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(oM.xM, { [oM.s2]: l }),
                onStart: S,
                onComplete: () => s(t),
            }),
            M(oM.IS, n || (!I && "out" === k), o),
            (0, a.jsx)("span", {
                ref: d,
                className: oM.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(x.E, { variant: oP, tag: "span", children: t }),
            }),
            _
                ? (0, a.jsxs)("span", {
                      className: oM.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(x.E, { variant: oP, tag: "span", className: oM.xM, children: t }),
                          M(oM.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let o$ = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                aiPaused: l = !1,
                running: r,
                restoring: s = !1,
                onSend: o,
                onInterrupt: f,
                escapeScopeRef: m,
                onUploadFile: h,
                onApprove: g,
                onImport: p,
                onSendToOtherProjects: x,
                suggestion: v,
                questionOpen: b = !1,
                secretPending: j = !1,
                hasPendingContext: y = !1,
                onDraftHasTextChange: k,
                modelSettings: w,
                onModelSettingsChange: A,
                visible: S = !0,
            } = e,
            C = n && !l,
            N = (function (e) {
                let t = i.useContext(oj.Ay),
                    [n] = i.useState(() => {
                        let n = (0, om.ie)();
                        return (
                            (n.children = (0, og.x7)(e)),
                            (n.selection = ow(n)),
                            (0, ob.a)({
                                editor: n,
                                chatInputType: oh.oU.GENERIC_RICH_TEXTAREA,
                                channel: ok,
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
                                    for (let [t, l] of sZ.VW.nodes(e, { at: [], match: sZ.l5.isText }))
                                        for (let e of t.text.matchAll(rY.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        op.o.withMergedEntry(e, () =>
                                            sZ.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    ov.b.textToVoid(
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
            })(rJ.A.getDraft(t)),
            [I, E] = i.useState(() => oA(N));
        (0, s9.N$)(I);
        let _ = i.useRef(I),
            [M, R] = i.useState(null),
            P = i.useCallback(() => {
                let e = oA(N);
                (e !== _.current && ((_.current = e), (0, s8.I)(t, e), E(e)),
                    R(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sZ.ZF.isCollapsed(t)) return null;
                            let [n] = sZ.VW.node(e, t.anchor.path);
                            return sZ.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(N),
                    ));
            }, [N, t]),
            T = i.useCallback((e) => oS(N, e), [N]),
            $ = "" !== I.trim();
        i.useEffect(() => k?.($), [$, k]);
        let D = i.useRef(t);
        i.useLayoutEffect(() => {
            D.current !== t && ((D.current = t), oS(N, rJ.A.getDraft(t)));
        }, [N, t]);
        let q = (0, c.bG)([id.Ay], () => id.Ay.isSubmitButtonEnabled),
            [F, O] = i.useState(!1),
            [G, z] = i.useState(!1);
        (i.useEffect(() => {
            r ? z(!1) : (F && z(!0), O(!1));
        }, [r, F]),
            i.useEffect(() => {
                if (!G) return;
                let e = setTimeout(() => z(!1), oq);
                return () => clearTimeout(e);
            }, [G]));
        let {
                drafts: U,
                addFiles: K,
                pasteFiles: H,
                removeDraft: W,
                settled: V,
                takeRefs: X,
            } = (0, tB.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            Y = el.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && J(n);
            }),
            Q = el.useState((e) => (null == t ? null : (e.byProject[t]?.chatFocusRequest ?? null))),
            Z = i.useRef(Q);
        i.useEffect(() => {
            let e = Z.current;
            ((Z.current = Q), C && null != e && null != Q && Q !== e && sZ.VW.focus(N));
        }, [Q, C, N]);
        let ee = "" !== I.trim() || U.length > 0 || y || Y,
            et = C && ee && V,
            [en, er] = i.useState(null);
        i.useEffect(() => {
            if (null == en) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => er(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [en]);
        let es = (0, oe.rU)(t),
            [ed, ef] = i.useState(null),
            [em, eh] = i.useState(0),
            eg = i.useMemo(() => (null != M && C ? (0, s6.OG)(M, M.length) : null), [M, C]),
            ep = eg?.start ?? null;
        i.useEffect(() => {
            null == ep ? ef(null) : (0, oe.IP)(t);
        }, [ep, t]);
        let ex = ep === ed ? null : eg,
            ev = oa(t, ex?.text ?? null),
            ek = oa(t, I.includes("@") ? "" : null, !1),
            ew = i.useMemo(() => (null == ex ? [] : (0, s6.l$)(ev, es, ex.text)), [ex, ev, es]),
            eA = ex?.text;
        i.useEffect(() => eh(0), [eA]);
        let eS = ew.length > 0,
            eC = Math.min(em, Math.max(0, ew.length - 1)),
            eN = i.useId(),
            eI = i.useCallback(
                (e) => {
                    let t = ew[e];
                    null != ex &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (ov.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                ov.b.insertText(e, `${n} `));
                        })(N, ex.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ew, ex, N],
            ),
            eE = i.useCallback(() => {
                if (!et) return;
                let e = X(),
                    n = Y
                        ? (function (e) {
                              let t = ea(e);
                              if (null == t || !J(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? eo(e);
                              return (
                                  ea(e)?.active === !1
                                      ? ec(e)
                                      : ei(e, (e) => ({ ...e, history: B, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, ey.Wx)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (nJ.set(i, s),
                                          (s.job = (function (e) {
                                              let t = 0,
                                                  n = null,
                                                  l = null,
                                                  r = null,
                                                  a = !1,
                                                  i = !1,
                                                  s = !1;
                                              function o() {
                                                  (async function () {
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
                                                  })().catch(() => {});
                                              }
                                              return (
                                                  o(),
                                                  {
                                                      retry: o,
                                                      cancel: () => {
                                                          s = !0;
                                                      },
                                                  }
                                              );
                                          })({
                                              capture: (t) => (0 === t ? l : eo(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = nx(e),
                                                              r = nx(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              np(r.ctx, t, e),
                                                              l.ctx.drawImage(n, 0, 0),
                                                              l.ctx.drawImage(r.canvas, 0, 0),
                                                              await l.toBlob()
                                                          );
                                                      } finally {
                                                          n.close();
                                                      }
                                                  })(e, n),
                                              upload: (t) =>
                                                  (0, tG.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, tG.n6)(e, t.id),
                                              send: (n) => (0, ey.dv)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      n1(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (nJ.delete(i),
                                                          window.setTimeout(() => {
                                                              (n1(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                o((0, s6.wl)(I, ek), e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == oT && (oT = document.createElement("canvas").getContext("2d"));
                    let i = oT;
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
                        f = d.lastIndexOf(" ");
                    return (f > 0 ? d.slice(0, f) : d).trimEnd();
                })(oO(e$.current), eK.current, (0, s6.Lj)(I));
                ("" !== l && er(l), T(""), ef(null));
            }, [et, Y, t, I, ek, o, X, T]),
            e_ = i.useCallback(
                (e) => {
                    (e.preventDefault(), eE());
                },
                [eE],
            ),
            eM = i.useCallback(() => {
                null != f && !F && (O(!0), f(), C && sZ.VW.focus(N));
            }, [f, F, C, N]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                a = i.useRef(r);
            (i.useEffect(() => {
                a.current = r;
            }),
                i.useEffect(() => {
                    if (!t) return;
                    let e = o_(document.activeElement, l?.current);
                    function r(t) {
                        e = o_(t.target, l?.current);
                    }
                    function i(t) {
                        var r, i, s;
                        "Escape" === t.key &&
                            !t.isComposing &&
                            oE(n) &&
                            ea(n)?.active !== !0 &&
                            !L(n).active &&
                            ((r = t.target),
                            (i = l?.current),
                            (s = e),
                            ((0, tF.vq)(r) && r !== document.body && r !== document.documentElement
                                ? !!o_(r, i) && null == r.closest('input, textarea, [contenteditable="true"]')
                                : s) && (t.preventDefault(), t.stopPropagation(), a.current()));
                    }
                    return (
                        window.addEventListener("keydown", i, !0),
                        window.addEventListener("pointerdown", r, !0),
                        window.addEventListener("focusin", r, !0),
                        () => {
                            (window.removeEventListener("keydown", i, !0),
                                window.removeEventListener("pointerdown", r, !0),
                                window.removeEventListener("focusin", r, !0));
                        }
                    );
                }, [t, n, l]));
        })({ active: r && null != f && S, projectId: t, scopeRef: m, onEscape: eM });
        let eR = (r && null != f) || G,
            eP = null == v || "" !== I || !C || s || y ? null : v,
            eT = i.useCallback(
                (e) => {
                    if (eS && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ew.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eh((eC + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), eI(eC));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), ef(ex?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && ea(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), eu(t));
                        return;
                    }
                    if ("Escape" === e.key && r && null != f && oE(t)) {
                        (e.preventDefault(), e.stopPropagation(), eM());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eP) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), T(eP));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eE());
                },
                [eE, g, r, f, eM, eP, T, eS, ew.length, eC, eI, ex, t],
            ),
            eL = i.useCallback(
                (e) => {
                    C && H(e);
                },
                [C, H],
            );
        (0, sJ.Vo)({
            event: ls.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eL(t);
            },
        });
        let e$ = i.useRef(null),
            eD = i.useCallback(() => {
                let e = _.current;
                x?.((0, s6.Lj)(e), () => {
                    _.current === e && T("");
                });
            }, [x, T]),
            [eq, eF] = i.useState(0),
            [eO, eG] = i.useState(!1);
        i.useEffect(() => {
            if (0 === I.length) return void eG(!1);
            let e = oO(e$.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eF(t);
            }
            eG(!0);
            let t = setTimeout(() => eG(!1), oD);
            return () => clearTimeout(t);
        }, [I]);
        let ez = i.useMemo(() => ({ "--custom-glow-x": `${eq}px` }), [eq]),
            eU = eO ? ` ${oM.EB}` : "",
            eB = s
                ? ej.intl.string(eb.default.qqlUiW)
                : l
                  ? ej.intl.string(eb.default.Z0hyNL)
                  : C
                    ? y
                        ? ej.intl.string(eb.default.knUjL3)
                        : Y
                          ? ej.intl.string(eb.default["6rXxwa"])
                          : j
                            ? ej.intl.string(eb.default.VxH5vv)
                            : b
                              ? ej.intl.string(eb.default.IevBEw)
                              : ej.intl.string(r ? eb.default["0BJa/0"] : eb.default.TEeU7z)
                    : ej.intl.string(eb.default.zZ9NgM),
            eK = i.useRef(0),
            eH = i.useRef(null),
            eW = i.useCallback((e) => {
                if ((eH.current?.disconnect(), null == e)) return;
                eK.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eK.current = e.clientWidth;
                });
                (t.observe(e), (eH.current = t));
            }, []),
            eV = i.useId(),
            eX = i.useId(),
            eY = null != eP,
            eQ = en ?? eP ?? eB,
            eZ = "" === I && "" !== eQ;
        return (0, a.jsxs)("form", {
            onSubmit: e_,
            className: oM.DA,
            children: [
                eS
                    ? (0, a.jsx)(od, {
                          id: eN,
                          projectId: t,
                          suggestions: ew,
                          selectedIndex: eC,
                          onHover: eh,
                          onSelect: eI,
                      })
                    : null,
                U.length > 0 || Y
                    ? (0, a.jsxs)("div", {
                          className: oM.lN,
                          children: [
                              U.map((e) => (0, a.jsx)(tB.Nl, { draft: e, onRemove: W }, e.localId)),
                              Y ? (0, a.jsx)(s4, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${oM.wg} ${oM.LP}${eU}`, style: ez, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${oM.wg} ${oM.L3}${eU}`, style: ez, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: oM.VA,
                    ref: e$,
                    children: [
                        (0, a.jsx)(oi.A, {
                            navId: "conjure-composer-attach",
                            disabled: !C,
                            buttonClassName: `${oM.Y0} ${oM.nu}`,
                            iconClassName: oM.Qu,
                            onAddFiles: K,
                            onImport: p,
                            onSendToOtherProjects: null != x ? eD : void 0,
                        }),
                        eZ
                            ? (0, a.jsx)("div", {
                                  ref: eW,
                                  className: oM.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(
                                      oL,
                                      { text: eQ, offering: eY && null == en, typed: null != en },
                                      S ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, a.jsx)(nL.A, { id: eX, children: ej.intl.string(eb.default.ldNl9x) }),
                        (0, a.jsx)(rY.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sQ.A, {
                                editor: N,
                                containerClassName: u()(oM.sq, oR.dv),
                                className: oM.jp,
                                readOnly: !C,
                                canFocus: C,
                                onChange: P,
                                onBlur: () => R(null),
                                onKeyDown: eT,
                                onPaste: eL,
                                renderExtraElement: oC,
                                "aria-labelledby": eX,
                                "aria-describedby": eZ ? eV : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": eS,
                                "aria-controls": eS ? eN : void 0,
                                "aria-activedescendant": eS ? ((0, os.aI)(eC) ?? void 0) : void 0,
                            }),
                        }),
                        eZ ? (0, a.jsx)(nL.A, { id: eV, children: eB }) : null,
                        (0, a.jsx)("div", {
                            className: oM.Sz,
                            onMouseDown: eR ? oF : void 0,
                            children: eR
                                ? (0, a.jsx)(d.m, {
                                      text: ej.intl.string(eb.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${oM.Y0} ${oM.$E} ${oM.PG}`,
                                          disabled: F || !r,
                                          onClick: eM,
                                          "aria-label": ej.intl.string(eb.default.wiguT0),
                                          children: (0, a.jsx)(r1.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : w?.tierSettings != null && null != A
                                  ? (0, a.jsx)(s7.A, {
                                        settings: w.tierSettings,
                                        tiers: w.tiers,
                                        choices: w.choices,
                                        disabled: !C,
                                        onChange: A,
                                        className: `${oM.Y0} ${oM.$E}`,
                                        icon: (0, a.jsx)(sX.FiltersHorizontalIcon, {
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
                                  className: oM.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: oM.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: oM.rt,
                                          disabled: !et,
                                          "aria-label": ej.intl.string(eb.default.rxW2cl),
                                          children: (0, a.jsx)(sY.SendMessageIcon, {
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
    oD = 1500,
    oq = 1e3;
function oF(e) {
    e.preventDefault();
}
function oO(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var oG = n(709753),
    oz = n(540338);
function oU(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, nE.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var oB = n(986109);
let oK = i.createContext(null);
function oH(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(oK),
        [f, m] = i.useState(() => id.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
        h = i.useCallback((e) => {
            e.target === e.currentTarget && m(!0);
        }, []);
    return (0, a.jsx)("li", {
        onContextMenu: c,
        onAnimationEnd: f ? void 0 : h,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: u()(oB.xk, { [oB.g5]: f, [oB.Qo]: s, [oB.q3]: o }),
        children: n,
    });
}
let oW = new Map();
function oV(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let oX = "live_behind";
var oY = n(165963);
function oQ(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([rT.A], () => null != n && n.length > 0 && rE({ keys: n }, rT.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: ej.intl.string(eb.default.F2yVHg) }
        : null;
}
function oZ(e) {
    return (
        null != e.awaitingUser ||
        null != e.secretRequest ||
        null != e.settingsRequest ||
        (e.intake?.questions.length ?? 0) > 0 ||
        null != e.clarification ||
        null != e.appBuildRequest ||
        null != e.restoreProposal ||
        null != e.serverChange ||
        null != e.publishScheduleProposal
    );
}
let oJ = [12e4];
var o0 = n(292771);
function o1(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([id.Ay], () => id.Ay.useReducedMotion),
        [r, s] = i.useState([{ presentation: t, leaving: !1 }]),
        o = r.find((e) => !e.leaving)?.presentation;
    o !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let d = i.useRef(null),
        f = i.useRef(null),
        m = i.useRef(null),
        h = i.useRef(o);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = d.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = f.current,
            s = m.current,
            u = r?.offsetHeight ?? 0,
            c =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((f.current = c), (m.current = u));
        let g = h.current !== o;
        if (((h.current = o), !g || l || null == s || null == i || null == a || null == c)) return;
        let p = i.width / Math.max(1, c.width);
        (a.animate(
            [
                {
                    transform: `translate(${i.left - c.left}px, ${i.top - c.top}px) scale(${p})`,
                    transformOrigin: "top left",
                },
                { transform: "none", transformOrigin: "top left" },
            ],
            { duration: 260, easing: "cubic-bezier(0.2, 0, 0, 1)" },
        ),
            n.animate([{ height: `${s}px` }, { height: `${u}px` }], {
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
            ref: d,
            className: o0.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: u()(o0.qd, e.leaving ? o0.dv : o0.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function o2(e) {
    return e?.state === "action_needed" && e.permissionsChanged;
}
var o3 = n(247171);
function o4(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: u()(o3.row, r),
        children: [
            (0, a.jsx)(x.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: u()(o3.gutter, o3[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: o3.content, children: i }),
        ],
    });
}
var o5 = n(830205);
function o7(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(o4, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: o5.aK,
        children: (0, a.jsxs)("div", {
            className: o5.n8,
            children: [
                (0, a.jsx)(x.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: o5.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: o5.X8,
                          children: (0, a.jsx)(d.m, {
                              text: ej.intl.string(ej.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tQ.K, {
                                  "aria-label": ej.intl.string(ej.t.WAI6xu),
                                  icon: e8.XSmallIcon,
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
function o8(e) {
    let { projectId: t } = e,
        n = i.useContext(tm.bI);
    return (0, a.jsx)(o7, {
        icon: iZ.ShieldIcon,
        children: ej.intl.format(eb.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tm.vL)(t, n.guildId));
            },
        }),
    });
}
var o9 = n(443865),
    o6 = n(716502);
function ue(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(o4, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: o6.Nr,
        children: (0, a.jsxs)("section", {
            className: o6.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: o6.X8,
                          children: (0, a.jsx)(d.m, {
                              text: ej.intl.string(ej.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tQ.K, {
                                  "aria-label": ej.intl.string(ej.t.WAI6xu),
                                  icon: e8.XSmallIcon,
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
function ut(e) {
    let { children: t } = e;
    return (0, a.jsx)(x.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: o6.DD,
        children: t,
    });
}
function un(e) {
    let { children: t } = e;
    return (0, a.jsx)(x.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: o6.rf,
        children: t,
    });
}
function ul(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: o6.o1, children: t });
}
var ur = n(95635);
function ua(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, tj.A)(t, n);
    return (0, a.jsx)(o7, {
        icon: ur.UploadIcon,
        onDismiss: l,
        children: ej.intl.format(eb.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let ui = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && o2(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(o8, { projectId: n });
        },
    },
    {
        id: oX,
        priority: 2,
        resolve: function (e) {
            var t;
            let { turn: n, publish: l, draftHasText: r, idleMs: a } = e;
            return null == n ||
                r ||
                l?.state !== "action_needed" ||
                !l.isUpdate ||
                null != l.disabledReason ||
                a < 12e4 ||
                (null != n.publishCta && sb(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(oX)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(ua, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || o2(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(ue, {
                icon: o9.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(ut, { children: ej.intl.string(eb.default.OJlbhX) }),
                    (0, a.jsx)(un, { children: ej.intl.string(eb.default["3vJBni"]) }),
                    (0, a.jsx)(ul, {
                        children: (0, a.jsx)(f.$, {
                            variant: "primary",
                            size: "sm",
                            text: ej.intl.string(eb.default["U/bLzU"]),
                            disabled: null == n,
                            onClick: () => {
                                (l?.(), n?.());
                            },
                        }),
                    }),
                ],
            });
        },
    },
];
var us = n(817921);
function uo(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, tm.Ay)(e),
                    o = (0, c.bG)([y.default], () => y.default.getCurrentUser()?.id),
                    u = t.at(-1),
                    d = null != u ? Math.max(u.created_at, u.finished_at ?? 0, u.settled_at ?? 0) : null,
                    f = (function (e, t) {
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
                    })(d, r),
                    m = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (
                                "publish_notice" !== n.kind &&
                                "project_event" !== n.kind &&
                                "context_boundary" !== n.kind
                            ) {
                                if ("user" === n.role) return null;
                                if ((0, nE.BL)(n)) return n;
                                if (!(0, nE.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == m || oZ(m) ? null : m,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === oV(t, g.created_at, o) ? g.id : null,
                    x = u?.projectEvent?.type === "remixed" ? u.projectEvent : null,
                    v = x?.id ?? p,
                    b = oQ(e, x),
                    j = x?.settings_keys?.length ?? 0,
                    k = (0, c.bG)([rT.A], () => j > 0 && null == rT.A.getSettings(e), [j, e]),
                    w = (0, oG.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, nE.Ji)(t)) || !!(0, nE.B0)(t, t.lastIndexOf(a))) &&
                        (null == m || !oZ(m)) &&
                        null == oU(t) &&
                        null == b &&
                        !k &&
                        0 === w.length,
                    idleMs: null != d ? Math.max(0, f - d) : 0,
                    justRemixed: null != x,
                    noTurnsYet: t.every(
                        (e) =>
                            "publish_notice" === e.kind || "project_event" === e.kind || "context_boundary" === e.kind,
                    ),
                    ideasIntroAnchorId: v,
                    messagesSinceShown: (n) => {
                        let l = oW.get(`${e}:${n}`);
                        return null != l ? oV(t, l, o) : null;
                    },
                    isDismissed: (t) => (0, oY.VS)(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, oJ);
            (0, oY.$p)();
            let { callout: s, hint: o } = (function (e, t, n) {
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
                })(e, a, a.isDismissed),
                u = [s, o].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of u)
                        0 !== a.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                oW.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                u.map((e) => ({
                    ...e,
                    options: {
                        context: a,
                        dismiss: null != e.tip.dismissal ? () => (0, oY.qv)(e.tip, t, a.ideasIntroAnchorId) : void 0,
                    },
                }))
            );
        })(ui, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(oH, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: us.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(o1, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var uu = n(52133),
    uc = n(732159),
    ud = n(888366),
    uf = n(862026),
    um = n(291192);
function uh(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, uf.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: um.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: um.Sp,
                children: [
                    (0, a.jsx)("span", { className: um.q3 }),
                    (0, a.jsxs)("span", {
                        className: um.g8,
                        children: [
                            (0, a.jsx)(ud.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(x.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: um.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: um.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(lj.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, e_.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(uc.u, {
                                                                    ...t,
                                                                    title: ej.intl.string(eb.default["i+xjZM"]),
                                                                    subtitle: ej.intl.string(eb.default.fMBZmD),
                                                                    confirmText: ej.intl.string(eb.default.i5f3Uo),
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
                        ? (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var ug = n(345942),
    up = n(727419),
    ux = n(576705);
function uv(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            ej.intl.format(n ? eb.default.esEGL5 : eb.default["XrN+Bg"], {
                onOpen: () => up.A.open(t, ls.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var ub = n(976860);
function uj(e) {
    return (0, c.bG)([ts.Ay, it.A], () => {
        let t = ts.Ay.getProject(e);
        return null == t ? "" : (it.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var uy = n(951465),
    uk = n(369455);
function uw(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: o } = e,
        u = uj(s),
        d =
            null ==
            (i = (0, c.bG)([ts.Ay, lK.A], () => {
                let e = ts.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (lK.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        f = (0, c.cf)([ts.Ay, tv.A, lK.A, ux.A], () => {
            let e = ts.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(eO.q7.AUTOMOD) === !0 ||
                    tv.A.getPublishStatus(s)?.surface === "automod",
                n = lK.A.getGuild(e.guild_id),
                l = null != n && ux.A.can(ls.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(x.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            ej.intl.format(
                ((t = o),
                (n = d?.name ?? null),
                (l = f.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? eb.default.ESu5eZ
                        : eb.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? eb.default.ZnQW4S
                          : eb.default.ev23Cw
                      : t.update
                        ? r
                            ? eb.default["LuS8a/"]
                            : eb.default.gQzuLC
                        : l
                          ? eb.default.KORRGl
                          : r
                            ? eb.default["/npn7F"]
                            : eb.default.MOrR29),
                {
                    name: u,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, ug.u)(d.guildId);
                    },
                },
            ),
            null != f.guildId
                ? (0, a.jsx)(uv, { guildId: f.guildId, update: o.update })
                : !f.automod && o.update && null != o.published_revision
                  ? (0, a.jsx)(uA, { projectId: s, notice: o })
                  : null,
        ],
    });
}
function uA(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tm.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, c.cf)(
                    [tv.A, ts.Ay],
                    () => {
                        let r = tv.A.getPublishStatus(e),
                            a = ts.Ay.getProject(e);
                        return {
                            sent:
                                null == l ? null : (r?.patchNotesSent?.find((e) => e.publishedRevision === l) ?? null),
                            canOffer:
                                null != l &&
                                t.update &&
                                l === r?.publishedRevision &&
                                null != n &&
                                null != a &&
                                "guild" === a.install_scope &&
                                (0, ts.jf)(a),
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
                      ? ej.intl.format(eb.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    e7.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: uk.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, ub.pX)(ls.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : ej.intl.format(eb.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = ts.Ay.getProject(e),
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
                                null != e && (0, uy.A)(e);
                            },
                        }),
              ],
          });
}
var uS = n(73153),
    uC = n(505527),
    uN = n(367790),
    uI = n(354777),
    uE = n(491182),
    u_ = n(74096),
    uM = n(549587),
    uR = n(448368),
    uP = n(21299),
    uT = n(538355),
    uL = n(715628),
    u$ = n(752636),
    uD = n(9842),
    uq = n(589022),
    uF = n(967198),
    uO = n(531685),
    uG = n(503275);
let uz = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function uU(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function uB(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function uK(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = uB(e, t),
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
    if (uU(r) && uU(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && uU(uB(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function uH(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([id.Ay], () => id.Ay.useReducedMotion),
        r = n && !l,
        [a, s] = i.useState(() => ({ target: e, length: e.length })),
        o = a;
    (o.target !== e &&
        (o = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let r = Math.min(l, t.length),
                          a = 0;
                      for (; a < r && e.charCodeAt(a) === t.charCodeAt(a);) a++;
                      for (; a > 0 && uK(t, a);) a--;
                      return a;
                  })(o.target, e, o.length)
                : e.length,
        }),
        r || o.length === e.length || (o = { target: e, length: e.length }),
        o !== a && s(o));
    let u = r && o.length < e.length,
        d = i.useRef(o);
    i.useLayoutEffect(() => {
        d.current = o;
    });
    let f = i.useRef(0),
        m = i.useRef(0);
    (i.useEffect(() => {
        if (u)
            return (
                (m.current = 0),
                (f.current = requestAnimationFrame(function e(t) {
                    let n = 0 === m.current ? 32 : t - m.current;
                    if (n >= 32) {
                        m.current = t;
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
                                    for (; l > t + 1 && n - l < 12 && uz.has(e.charAt(l - 1));) l--;
                                    return uz.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && uK(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    f.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(f.current)
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
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [u]));
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var uW = n(624479),
    uV = n(890377),
    uX = n(92446),
    uY = n(957565),
    uQ = n(180227);
function uZ(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: u()(uQ.QE, { [uQ.Rn]: t }),
              children: (0, a.jsx)(iF.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          iF.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function uJ(e) {
    return uY.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: ej.intl.string(ej.t.JrGD7E), icon: uW.CopyIcon, onClick: () => (0, uY.C)(e) }]
        : [];
}
function u0(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: ej.intl.string(eb.default.CXtLD2),
                          tooltip: ej.intl.string(eb.default.DOb1HM),
                          icon: uV.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: ej.intl.string(eb.default.urZwpN),
                          icon: e8.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(uZ, { groupStart: n, actions: [...r, ...uJ(t)] });
}
function u1(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: ej.intl.string(eb.default.H8Jfhu), icon: t0.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: uX.BugIcon, onClick: r }];
    return (0, a.jsx)(uZ, { groupStart: n, actions: [...i, ...uJ(t), ...s] });
}
let u2 = (0, ia.createChannelRecord)({ id: "conjure-builder", type: ls.rbe.DM }),
    u3 = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function u4(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: u()(uQ.Yq, { [uQ.x1]: t }), children: e });
}
function u5(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let u7 = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function u8(e, t, n) {
    let { content: l } = (0, uT.A)(e, u7),
        r = i.useMemo(() => ((0, rY.aW)(e.content) ? (0, uI.z2)(sO.U, e, u7).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: u2, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(u_.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, uL.A)(s, r);
}
function u9(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, uP.m)(e, u2, t.usernameProfile, l),
        o = (0, uP.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([uF.A], () => uF.A.getGuildId()),
        d = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
        f = i.useCallback(
            (t) => {
                let n = y.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(uq.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: f,
        guildId: u ?? void 0,
    };
}
let u6 = { formatInline: !0, allowGameMentions: !0 };
function ce(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, uT.A)(n, u6),
        o = i.useMemo(() => {
            let e = "" === n.content ? null : (0, rY.aW)(n.content) ? (0, uI.z2)(sO.U, n, u6).content : s;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: uQ.GV,
                              children: [
                                  (0, a.jsx)(g.ExperimentalDirectSelectIcon, {
                                      className: uQ.Rj,
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
        }, [n, s, l]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: d } = (0, c.cf)(
            [lr.A],
            () => ({
                isReplyAuthorBlocked: lr.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: lr.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        f = (0, iD.X4)(n),
        m = (0, iD.X4)(t),
        h = u9(n);
    return (0, a.jsx)(uR.A, {
        repliedAuthor: f,
        baseAuthor: m,
        baseMessage: t,
        channel: u2,
        referencedMessage: { state: uD.a.LOADED, message: n },
        content: o,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: d,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: h.renderPopout,
        showAvatarPopout: h.showAvatarPopout,
        showUsernamePopout: h.showUsernamePopout,
        onClickAvatar: h.onClickAvatar,
        onClickUsername: h.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: h.onPopoutRequestClose,
    });
}
function ct(e) {
    let { message: t, author: n } = e,
        l = u9(t);
    return (0, a.jsx)(uM.Ay, {
        message: t,
        channel: u2,
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
function cn(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, uG.vm)(l),
        c = i.useMemo(() => (0, iD.FT)(u, null), [u]),
        d = i.useMemo(() => M(t), [t]),
        f = d?.body ?? t,
        m = (0, s6.Qu)(f),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, ir.Ay)({ channelId: u2.id, content: f, author: u });
            return (0, il.rh)({ ...e, timestamp: u5(n, e.timestamp), state: ls.cmJ.SENT });
        }, [f, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              cl,
              {
                  message: h,
                  author: c,
                  content: f,
                  selected: d?.label,
                  accessories: r,
                  groupStart: s,
                  onQueuedAction: o,
              },
              m,
          );
}
function cl(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = u8(t, l);
    return (0, a.jsx)(uE.A, {
        className: uQ.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(ct, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: uQ.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: uQ.GV,
                              children: [
                                  (0, a.jsx)(g.ExperimentalDirectSelectIcon, {
                                      className: uQ.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: uQ.WO, children: u }),
                      ],
                  }),
        childrenAccessories: u4(i, "" !== l),
        childrenButtons: (0, a.jsx)(u0, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function cr(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
            buttons: d,
        } = e,
        { text: f, revealing: m } = uH(t, { streaming: (0, c.bG)([uO.A], () => u && uO.A.isFocused(), [u]) }),
        h = i.useMemo(() => (0, iD.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, uG.vm)(p),
        v = i.useMemo(() => (null == r ? null : M(r.content)), [r]),
        b = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, ir.Ay)({ channelId: u2.id, content: v?.body ?? r.content, author: x });
            return (0, il.rh)({ ...e, id: r.id, timestamp: u5(r.createdAt, e.timestamp), state: ls.cmJ.SENT });
        }, [r, v, x]),
        j = i.useMemo(() => (null == r ? void 0 : { channel_id: u2.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, ir.Ay)({ channelId: u2.id, content: "", author: u3 })),
        k = i.useMemo(
            () =>
                (0, il.rh)({
                    ...y,
                    timestamp: u5(n, y.timestamp),
                    state: ls.cmJ.SENT,
                    ...(null != j ? { type: ls.lAJ.REPLY, message_reference: j } : {}),
                }),
            [y, n, j],
        ),
        w = i.useMemo(() => k.set("content", f), [k, f]),
        A = i.useMemo(
            () => (0, u$.A)({ message: k, channel: u2, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        S = u8(w, f, uQ.OS);
    return (0, a.jsxs)("div", {
        className: uQ.$4,
        "data-replying": null != b ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, a.jsx)(uE.A, {
                className: uQ.yE,
                author: g,
                childrenRepliedMessage:
                    null == b
                        ? null
                        : (0, a.jsx)(ce, { baseMessage: k, referenced: b, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: S,
                childrenAccessories: u4(l, "" !== f),
                disableInteraction: !0,
            }),
            d,
            o ? (0, a.jsx)("img", { className: uQ.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var ca = n(981879);
function ci(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, il.rh)(
                    { ...(0, ir.Ay)({ channelId: u2.id, content: "" }), id: `conjure:${t}`, state: ls.cmJ.SENT },
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
                (uS.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: u2.id,
                    messageId: l.id,
                    users: [u3],
                    emoji: e,
                    reactionType: uC.v6.NORMAL,
                }),
                    uS.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: u2.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: uC.v6.NORMAL,
                    }));
            }
            return (
                t(),
                uS.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    uS.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: ca.H,
            children: (0, a.jsx)(uN.A, {
                message: l,
                channel: u2,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
n(775443);
var cs = n(990779),
    co = n(155899);
function cu(e) {
    let { onSelect: t, onClose: n = tw.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(ty.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": ej.intl.string(ej.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(tk.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(tk.Dr, {
                          id: "restore-version",
                          label: ej.intl.string(eb.default.H8Jfhu),
                          icon: t0.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(tk.Dr, { id: "view-trace", label: "View Trace", icon: uX.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cc(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: i,
            planVersion: s,
            pickedIdeaIds: o,
            secretRequestAwaiting: u,
            secretRequestStatus: d,
            settingsFloating: f = !1,
            secretFloating: m = !1,
            isNewest: h = !1,
            onPickIdea: g,
            onApprovePlan: p,
            onRestoreVersion: x,
            onCardReply: v,
        } = e,
        b = n.message,
        j =
            null != x
                ? "assistant" !== b.role || null == b.sourceSha
                    ? null
                    : {
                          sha: b.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(b.created_at).toISOString(),
                          subject: b.content,
                      }
                : null,
        y = null != j && null != x ? () => cd(j, x) : void 0,
        k =
            ((t =
                (0, eS.BQ)() && "assistant" === b.role && (0, nE.BL)(b)
                    ? (b.turn_id ?? b.steps.find((e) => null != e.turn_id)?.turn_id ?? b.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [cs.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : cs.A.getTimingTraces(l).findLast((e) => {
                                  let { name: n, spans: l } = e;
                                  return "turn" === n && l.find((e) => null == e.parent)?.attrs?.turn_id === t;
                              });
                    return null == e || e.live ? null : e.id;
                },
                [l, t],
            )),
        w =
            null != k
                ? () =>
                      (function (e, t) {
                          for (let n of ((ew = { projectId: e, traceId: t }), [...ek])) n(e);
                      })(l, k)
                : void 0,
        A = b.in_reply_to,
        S = b.restoreProposal;
    return (0, a.jsx)(oH, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != y || null != w
                ? (e) => {
                      var t, n, l;
                      return (
                          (t = e),
                          (n = y),
                          (l = w),
                          void (0, tw.jA)(t, (e) => (0, a.jsx)(cu, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(cr, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(u1, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: y,
                onViewTrace: w,
            }),
            content: n.content,
            createdAt: b.created_at,
            replyTo: r,
            onJumpToReplied: null != A && null != i ? () => i(A) : void 0,
            accessories: (0, a.jsx)(sK, {
                projectId: l,
                steps: b.steps,
                content: "",
                proposal: b.proposal,
                planVersion: s,
                interrupted: !0 === b.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: b.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : b.ideas,
                pickedIdeaIds: null == b.ideas ? void 0 : o,
                attachments: b.attachments,
                secretRequest: n.active || m ? void 0 : b.secretRequest,
                secretRequestId: b.render_id,
                secretRequestAwaiting: u,
                secretRequestStatus: d,
                settingsRequest: n.active || f ? void 0 : b.settingsRequest,
                settingsAskId: b.id,
                publishCta: n.active ? null : b.publishCta,
                onPickIdea: g,
                onApprovePlan: p,
                restoreProposal: S,
                publishScheduleProposal: b.publishScheduleProposal,
                publishScheduleProposalCurrent: h,
                serverChange: n.active ? void 0 : b.serverChange,
                serverChangeCurrent: h,
                onCardReply: v,
                onRestoreProposal:
                    null != S && null != x && h
                        ? () =>
                              cd(
                                  {
                                      sha: S.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: S.authored_at,
                                      subject: S.subject,
                                  },
                                  x,
                              )
                        : void 0,
            }),
        }),
    });
}
function cd(e, t) {
    (0, co.F)({ onConfirm: () => t(e) });
}
var cf = n(288539),
    cm = n(677683),
    ch = n(677690),
    cg = n(159711);
function cp(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, c.bG)([cm.A], () => cm.A.getOutcome(l))),
            (n = (0, c.bG)(
                [ll.A, y.default, lr.A],
                () => {
                    let e = t?.status === "pinned" ? ll.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, ln.m1)(e, y.default, lr.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = ej.intl.string(eb.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(nF, {
              title: s,
              children: (0, a.jsx)(x.E, {
                  className: cg.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? ej.intl.formatToPlainString(eb.default.gKe6Lw, { channelName: i ?? "" })
                          : ej.intl.string(eb.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(nF, { title: s, children: (0, a.jsx)(cx, { projectId: l }) });
}
function cx(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: o,
            failed: u,
            pin: d,
            skip: m,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [lU.A, ux.A],
                        () =>
                            null == t
                                ? []
                                : lU.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === ls.rbe.GUILD_VOICE && ux.A.can(ls.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, a] = i.useState(null),
                [s, o] = i.useState(!1),
                [u, d] = i.useState(!1),
                f = l.find((e) => e.id === r) ?? null,
                m = n?.application_id,
                h = i.useCallback(async () => {
                    if (null == f || null == m) return;
                    (o(!0), d(!1));
                    let t = await (0, ch.pk)(f.id, m);
                    (o(!1), t ? (0, ch.tg)(e, { status: "pinned", channelId: f.id }) : d(!0));
                }, [m, e, f]),
                g = i.useCallback(() => (0, ch.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: f,
                setPicked: a,
                pinning: s,
                failed: u,
                pin: h,
                skip: g,
            };
        })(t),
        h = (0, lD.A)(n, "voice"),
        g = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, a.jsx)("div", {
        className: cg.r,
        children: (0, a.jsxs)(lk.B, {
            gap: 12,
            children: [
                (0, a.jsx)(x.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: ej.intl.string(eb.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, a.jsx)(n8.Z, {
                          selectionMode: "single",
                          label: ej.intl.string(eb.default.peOi1H),
                          placeholder: ej.intl.string(eb.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: u ? ej.intl.string(eb.default.d7EeAm) : void 0,
                          disabled: o,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: ej.intl.string(eb.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: cg.o,
                    children: [
                        (0, a.jsx)(f.$, {
                            variant: "secondary",
                            size: "sm",
                            text: ej.intl.string(eb.default.Iw0l8o),
                            disabled: o,
                            onClick: m,
                        }),
                        g.length > 0
                            ? (0, a.jsx)(f.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: ej.intl.string(eb.default.FYI3qr),
                                  disabled: null == r,
                                  loading: o,
                                  onClick: d,
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function cv(e, t, n) {
    return (0, a.jsx)(cf.A, { userId: e, content: `@${t}` }, n);
}
function cb(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, uG.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([y.default], () => (null == l ? null : y.default.getUser(l)), [l]),
                a = (0, is.tx)(r),
                s = uj(e),
                o =
                    (0, c.bG)([lK.A], () => (null == t.guild_id ? null : lK.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    ej.intl.string(eb.default.R1tPlP),
                u = "app_removed" === t.type ? t.moved_to_guild_id : void 0,
                d = (0, c.bG)([lK.A], () => (null == u ? null : lK.A.getGuild(u)?.name), [u]),
                f = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    if (null != u) {
                        let e = d ?? t.moved_to_guild_name ?? ej.intl.string(eb.default.R1tPlP);
                        return null == f
                            ? ej.intl.format(eb.default.NVM0sD, { app: s, server: o, newServer: e })
                            : ej.intl.format(eb.default["/hlliy"], { app: s, server: o, newServer: e, ...f });
                    }
                    return null == f
                        ? ej.intl.format(eb.default.Lwsrhg, { app: s, server: o })
                        : ej.intl.format(eb.default.qqePfT, { app: s, server: o, ...f });
                case "bot_removed":
                    return null == f
                        ? ej.intl.format(eb.default.mT7EQG, { app: s, server: o })
                        : ej.intl.format(eb.default["lA/crI"], { app: s, server: o, ...f });
                case "preview_bot_removed":
                    return null == f
                        ? ej.intl.format(eb.default["4LVIeo"], { app: s, server: o })
                        : ej.intl.format(eb.default.YJOV6D, { app: s, server: o, ...f });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == f
                        ? ej.intl.format(eb.default["4VQfid"], { channel: e, server: o })
                        : ej.intl.format(eb.default.RlMIJN, { channel: e, server: o, ...f });
                }
                case "remixed":
                    return ej.intl.format(eb.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return ej.intl.string(eb.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, n, cv),
        r = oQ(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(cp, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(x.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rK, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let cj = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    n0.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rY.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(oH, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cn, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(sF.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(s5, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(ci, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, rQ.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(oH, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cr, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(sF.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(oH, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sB, {
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
                    return (0, a.jsx)(oH, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cr, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(uw, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(oH, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cr, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(cb, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(oH, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(uh, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(oH, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sB, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(oH, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sB, {
                            projectId: l,
                            steps: cy,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(cc, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, uu.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, uu.A)(e.row, t.row, ["message"]) &&
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
                (0, uu.A)(e.replyTo, t.replyTo) &&
                (0, uu.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    cy = [],
    ck = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cw = new WeakMap();
function cA(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cS(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cC = ["wheel", "touchstart", "pointerdown", "keydown"];
function cN(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let cI = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: o,
            onApprovePlan: d,
            floatingSettingsMessageId: f,
            floatingSecretRenderId: m,
            liveClarificationId: h,
            onRestoreVersion: g,
            onCardReply: p,
            scrollerRef: b,
            stickToBottomRef: j,
            pinned: k,
            onUnpin: w,
            handleRef: A,
            onShowsLatestChange: S,
        } = e,
        C = i.useRef(null),
        [N, I] = i.useState(null),
        E = i.useCallback((e) => {
            ((C.current = e), I(e));
        }, []),
        [_, M] = i.useState(null),
        R = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(R.current), []);
    let P = i.useCallback((e) => {
            (M(e), window.clearTimeout(R.current), (R.current = window.setTimeout(() => M(null), 1600)));
        }, []),
        T = (0, c.bG)([tv.A], () => tv.A.getPublishStatus(t)),
        L = (0, c.bG)([y.default], () => y.default.getCurrentUser()?.id),
        $ = i.useMemo(() => {
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
                                        let t = (0, nI.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = cw.get(r);
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
                                (0, nE.ST)(e) ||
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
                        let a = !(0, nE.BL)(e),
                            i = r2({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, nI.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, nI.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            f = !1;
                        for (let n of o) {
                            if (null != n.prose && ck.test(n.prose.content)) f = !0;
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
                                        turnActive: n_(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = ck.test(e.content ?? "");
                        if (
                            (!0 === e.interrupted || f || m
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
                            (i.showsClosingMessage && !m) ||
                                null != e.proposal ||
                                (null != e.clarification && !n) ||
                                null != e.restoreProposal ||
                                null != e.publishScheduleProposal ||
                                (!a &&
                                    (null != e.ideas ||
                                        null != e.publishCta ||
                                        null != e.secretRequest ||
                                        null != e.settingsRequest ||
                                        null != e.serverChange)) ||
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
                    (cw.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return sv(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, T)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = sj.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), sj.set(t, n)), n);
                      })),
                h,
            );
        }, [n, T, h]),
        D = i.useMemo(() => $.map((e) => e.key), [$]),
        [q, F] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return cA(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cS(e, t.endKey, t.end - 1) + 1,
                a = cS(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), cA(e, a, r));
        })(D, q, k),
        G = i.useRef(O),
        z = i.useRef(D),
        U = i.useRef($),
        B = i.useRef(null),
        K = i.useRef(null),
        H = i.useRef(new Set()),
        W = i.useRef(null),
        V = i.useRef(!1),
        X = i.useCallback(() => {
            let e = b.current?.getScrollerNode(),
                t = V.current ? cN(C.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [b]);
    i.useLayoutEffect(() => {
        let e = b.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            V.current = !1;
        };
        for (let n of cC) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cC) e.removeEventListener(n, t);
        };
    }, [b]);
    let Y = i.useCallback(() => {
            let e = b.current?.getScrollerNode(),
                t = C.current;
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
            B.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [b]),
        Q = i.useCallback(() => {
            let e = b.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cA(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cA(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? cA(e, i, t.end) : null;
            })(z.current, G.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: j.current,
            });
            "older" === n ? (0, ey.P6)(t) : null != n && F(n);
        }, [b, j, t]);
    i.useImperativeHandle(
        A,
        () => ({
            handleScroll() {
                (Y(),
                    F((e) => {
                        let t = G.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    Q());
            },
            recordAnchor: Y,
            showLatest(e) {
                ((V.current = !1), (K.current = e ?? null), F(null));
            },
            snapshot() {
                let e = B.current;
                return null == e ? null : { window: G.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!z.current.includes(n.key)) return !1;
                (w(), (B.current = n));
                let l = G.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = b.current?.getScrollerNode(),
                        t = C.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else F(t);
                return !0;
            },
        }),
        [Y, Q, w, b],
    );
    let Z = i.useRef(null),
        J = i.useCallback(
            (e) => {
                var n;
                let l;
                ((Z.current = null), (V.current = !1));
                let r = C.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (w(), F(G.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), P(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, ey.P6)(t) && (Z.current = e);
                    return;
                }
                (w(),
                    (K.current = () => {
                        (C.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            P(e));
                    }),
                    F(((n = z.current), cA(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [P, w, t],
        );
    (i.useEffect(() => {
        let e = Z.current;
        null != e && J(e);
    }, [$, J]),
        i.useLayoutEffect(() => {
            if (null == N) return;
            let e = N.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), j.current)) return void b.current?.scrollToBottom();
                        (X(), Y());
                    }
                });
            return (t.observe(N), () => t.disconnect());
        }, [N, X, Y, b, j]));
    let ee = null == O.endKey;
    (i.useEffect(() => S?.(ee), [ee, S]),
        i.useLayoutEffect(() => {
            ((G.current = O), (z.current = D), (U.current = $));
        }),
        i.useLayoutEffect(() => {
            let e = b.current?.getScrollerNode(),
                l = C.current,
                r =
                    null !=
                    (function (e, t, n) {
                        if (0 === n.length) return null;
                        let l = n[n.length - 1],
                            r = "assistant" === l.role && null != l.proposal ? l.render_id : null,
                            a = e.current;
                        return (
                            (e.current = { projectId: t, planId: r }),
                            a?.projectId === t && null != r && r !== a.planId ? r : null
                        );
                    })(W, t, n);
            if (null != e && null != l) {
                let t = B.current;
                if (r && j.current && null != cN(l)) (w(), F(G.current), (V.current = !0), X());
                else if (j.current) b.current?.scrollToBottom();
                else if (V.current) X();
                else if (null != t) {
                    let n = Array.from(l.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === t.key,
                        ),
                        r = null == n ? 0 : n.getBoundingClientRect().top - e.getBoundingClientRect().top - t.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let n = K.current;
                ((K.current = null), n?.(), Y(), Q());
            }
            H.current = new Set(D);
        }, [t, n, $, D, O.start, O.end, b, j, w, X, Y, Q]));
    let et = i.useMemo(() => oU(n), [n]),
        en = i.useMemo(
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
        el = i.useMemo(
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
        er = i.useMemo(
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
        ea = n.at(-1),
        ei =
            (ea?.role !== "assistant" || null == ea.awaitingUser || null == ea.secretRequest
                ? null
                : (0, nE.BL)(ea)
                  ? ea.awaitingUser
                  : null) ?? void 0,
        es = (0, c.bG)([rT.A], () => rT.A.getSettings(t)?.secrets, [t]),
        eo = (0, oG.WT)(t),
        eu = i.useMemo(() => (0, rA.Mv)(n, es), [n, es]);
    if (!(0, nE.i_)(n)) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: u()(oB.x7, oB.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: oB.Ub, children: (0, a.jsx)(v.y, {}) }),
            });
        let e = "unavailable" === l ? eb.default.Td4Sf4 : eb.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: oB.x7,
            children: (0, a.jsx)(oH, { role: "assistant", children: (0, a.jsx)(cr, { content: ej.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(oK.Provider, {
        value: H,
        children: (0, a.jsxs)("ol", {
            ref: E,
            className: oB.x7,
            children: [
                $.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cj,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && _ === n.id,
                                currentUserId: "user" === e.kind ? L : void 0,
                            },
                            e.key,
                        );
                    let l = n === ea;
                    return (0, a.jsx)(
                        cj,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? er.get(n.in_reply_to) : void 0,
                            onJumpTo: J,
                            planVersion: en.get(n.render_id),
                            pickedIdeaIds: el.get(n.render_id),
                            secretRequestAwaiting: l ? ei : void 0,
                            secretRequestStatus: eu.get(n.render_id),
                            settingsFloating: n.id === f,
                            secretFloating: n.render_id === m,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === et ? d : void 0,
                            onRestoreVersion: g,
                            onCardReply: p,
                        },
                        e.key,
                    );
                }),
                ee
                    ? eo.map((e) =>
                          (0, a.jsx)(
                              oH,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(cr, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(oz.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ei && ee
                    ? (0, a.jsx)(oH, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(cr, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(x.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: ej.intl.string(eb.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                ee ? (0, a.jsx)(uo, { projectId: t, messages: n, draftHasText: !0 === o, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cE = n(731084),
    c_ = n(336288),
    cM = n(187447);
function cR(e) {
    let { activity: t, id: n } = e,
        l = (0, nN.j)(),
        { text: r, revealing: s } = uH(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null),
        c = i.useRef(!0),
        d = i.useRef(0),
        f = i.useCallback(() => {
            let e = o.current,
                t = e?.getScrollerNode();
            if (null != e && null != t) {
                var n, l, r;
                ((n = c.current),
                    (l = e.getDistanceFromBottom()),
                    (r = t.scrollTop < d.current),
                    (c.current = l < 1 || (!r && (n || l < 16))),
                    (d.current = t.scrollTop));
            }
        }, []);
    return (
        i.useLayoutEffect(() => {
            if (!c.current) return;
            let e = o.current;
            e?.scrollToBottom({
                callback: () => {
                    let t = e.getScrollerNode();
                    null != t && (d.current = t.scrollTop);
                },
            });
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: cM.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(nA.Ch, {
                ref: o,
                onScroll: f,
                className: cM.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: u()(sU.PT, cM.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: ix.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cP = n(53659);
function cT(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: s = !1,
            recalling: o = !1,
            controlling: c = !1,
            publishPending: d = !1,
            publishing: f = !1,
            spoken: m,
            onSpokenChange: h,
        } = e,
        g = i.useRef(null),
        p = i.useId(),
        [v, b] = i.useState(null),
        j = (0, cE.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            remixing: s,
            recalling: o,
            controlling: c,
            publishPending: d,
            publishing: f,
        }),
        y = ej.intl.string(j),
        k = j === cE.kx["0"],
        [w, A] = i.useState(m ?? y),
        S = (0, nN.j)();
    (l || (0, cE.E4)(y, w) || (!S && !k)) && w !== y && A(y);
    let C = i.useRef(y);
    (i.useEffect(() => {
        C.current = y;
    }, [y]),
        i.useEffect(() => {
            h?.(w);
        }, [w, h]));
    let N = i.useRef(null),
        I = i.useRef(w);
    i.useEffect(() => {
        I.current = w;
    }, [w]);
    let E = i.useRef(k),
        _ = i.useRef(0);
    (i.useEffect(() => {
        ((E.current = k), !k && (0, cE.E8)(I.current) && A(C.current));
    }, [k]),
        i.useEffect(() => {
            if (!S) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, cE.E8)(I.current) ? _.current + 1 : 0), A((0, cE.Ov)(_.current)))
                    : C.current !== I.current
                      ? A(C.current)
                      : N.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, 1800)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [S]));
    let M = null != t && "" !== t.text,
        R = t?.session ?? null,
        P = M && null != R && v === R,
        T = i.useCallback(() => {
            M && null != R && b((e) => (e === R ? null : R));
        }, [M, R]),
        L = i.useCallback(() => b(null), []);
    return (0, a.jsx)(tC.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, a.jsx)(cR, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(e7.D, {
                innerRef: g,
                className: u()(cP.hF, M && cP.Xd),
                "aria-label": ej.intl.string(
                    r
                        ? eb.default.qqlUiW
                        : j === eb.default.j8tmjK
                          ? eb.default.j8tmjK
                          : k
                            ? cE.kx["0"]
                            : eb.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ej.intl.string(j),
                onClick: T,
                children: [
                    (0, a.jsx)("span", {
                        className: cP.bl,
                        children: (0, a.jsx)(c_.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: cP.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: S
                            ? (0, a.jsx)(sH.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: cP.yE,
                              })
                            : (0, a.jsx)(x.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: cP.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cL = { second: 1e3, minute: 6e4 };
function c$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cL[t];
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
var cD = n(719374);
function cq(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = c$(t);
    return (0, a.jsx)(x.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cD.$,
        "data-conjure-turn-timer": !0,
        children: (0, at.C7)(l),
    });
}
function cF(e) {
    let { startedAt: t } = e,
        n = c$(t, "minute");
    return (0, a.jsx)(nL.A, { role: "timer", children: (0, at.Us)(n) });
}
var cO = n(885574),
    cG = n(242779),
    cz = n(436804);
function cU(e) {
    return e.toLocaleString();
}
function cB(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cz.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cz.mf,
                children: [
                    (0, a.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cU((0, cG.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(x.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cU(n.input_tokens),
                    " in \xb7 ",
                    cU(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cU(n.cache_creation_input_tokens)} cache write \xb7 ${cU(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cK(e) {
    let { project: t } = e,
        n = (0, cG.wU)(t.compaction),
        l = (0, cG.wU)(t.classifier),
        r = (0, cG.wU)(t.image),
        i = (0, cG.wV)(t.orchestrator, t.codegen),
        s = (0, cG.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: cz.si,
        role: "dialog",
        "aria-label": ej.intl.string(eb.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cz.Q$,
                children: (0, a.jsxs)("div", {
                    className: cz.mf,
                    children: [
                        (0, a.jsxs)(x.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cU((0, cG.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(x.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cB, { label: ej.intl.string(eb.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cB, { label: ej.intl.string(eb.default.ANCEo3), usage: n }),
            (0, a.jsx)(cB, { label: ej.intl.string(eb.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cB, { label: ej.intl.string(eb.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cz.mf,
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: ej.intl.string(eb.default["8OUg09"]),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cG.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cG.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cH(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(tC.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cK, { project: t }),
        children: (e) =>
            (0, a.jsx)(e7.D, {
                innerRef: n,
                className: cz.Y$,
                "aria-label": ej.intl.string(eb.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cO.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cW = n(990250);
function cV(e) {
    let { queued: t } = e,
        n = ej.intl.string(eb.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: cW.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: cW.wx,
                children: [
                    (0, a.jsx)(x.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(nA.Ch, {
                className: cW.XG,
                children: (0, a.jsx)("ul", {
                    className: cW.p_,
                    children: t.map((e) => (0, a.jsx)(cX, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cX(e) {
    let { content: t } = e,
        n = i.useRef(null),
        [l, r] = i.useState(!1),
        [s, o] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = n.current;
        null == e || l || o(e.scrollHeight > e.clientHeight);
    }, [t, l]),
    "" === t)
        ? (0, a.jsx)("li", {
              className: cW.AS,
              children: (0, a.jsx)(x.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: ej.intl.string(eb.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: cW.AS,
              children: [
                  (0, a.jsx)(x.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cW.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(lj.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: ej.intl.string(l ? eb.default.nEMoeN : eb.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cY(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(tC.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cV, { queued: t }),
        children: (e) =>
            (0, a.jsx)(e7.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, a.jsx)(x.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: ej.intl.formatToPlainString(eb.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cQ = n(997421);
function cZ(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: o = !1,
            thinkingActivity: d,
            compacting: f,
            saving: m,
            projectUsage: h,
            connState: g,
            queued: p,
        } = e,
        v = (0, eC.Zv)(t),
        b = (0, c.bG)([tv.A], () => tv.A.getPublishStatus(t)?.publishing === !0, [t]),
        [j, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, cE.E8)(e) || e === ej.intl.string(eb.default.mKK6wB) || e === ej.intl.string(eb.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, cE.uc)(h),
        A = null != s,
        S = s ?? (n ? l : void 0),
        C = n || r || A || !0 === m;
    return (0, a.jsxs)("div", {
        className: cQ.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cQ.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    C || o || v || b
                        ? (0, a.jsx)(cT, {
                              activity: d,
                              compacting: f,
                              saving: m,
                              restoring: r,
                              remixing: A,
                              recalling: o,
                              controlling: v,
                              publishPending: b && C,
                              publishing: b,
                              spoken: j,
                              onSpokenChange: k,
                          })
                        : null,
                    null != S ? (0, a.jsx)(cq, { startedAt: S }) : null,
                ],
            }),
            null != S ? (0, a.jsx)(cF, { startedAt: S }) : null,
            0 === p.length ? null : (0, a.jsx)(cY, { queued: p, className: u()(cQ.BP, cQ.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cQ.BP,
                      children: [
                          (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(cH, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ej.intl.formatToPlainString(eb.default["tCo+ZM"], { status: (0, cE.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cQ.XF,
                      children: (0, cE.Db)(g),
                  }),
        ],
    });
}
var cJ = n(698638),
    c0 = n(608711);
let c1 = [ej.intl.string(eb.default["9w+Chc"]), ej.intl.string(eb.default.WAvmdq), ej.intl.string(eb.default.SKsrzl)];
function c2(e) {
    var t, n;
    let l,
        r,
        s,
        o,
        u,
        {
            projectId: m,
            restoreState: h,
            onRestoreVersion: g,
            onImportProject: p,
            escapeScopeRef: v,
            visible: b = !0,
        } = e,
        j = (0, c.bG)([rL.A], () => rL.A.getMessages(m), [m]),
        y = (0, c.bG)([ey.Ay], () => ey.Ay.getConnState(m), [m]),
        k = (0, c.bG)([rL.A], () => rL.A.getProjectUsage(m), [m]),
        w = (0, c.bG)([rL.A], () => rL.A.getThinkingActivity(m), [m]),
        A = (0, c.bG)([rL.A], () => rL.A.isCompacting(m), [m]),
        C = (0, c.bG)([rL.A], () => rL.A.isSaving(m), [m]),
        N = (0, c.bG)([rm.A], () => rm.A.getModelSettings(m), [m]),
        E = i.useRef(null),
        _ = i.useRef(null),
        M = i.useRef(null),
        R = i.useRef(null),
        {
            stickToBottomRef: P,
            pinned: T,
            atBottom: L,
            unpin: $,
            releasePinHold: D,
            showsLatest: q,
            showsLatestRef: O,
            handleShowsLatestChange: G,
            updatePin: z,
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
                f = i.useRef(!0),
                m = i.useCallback((e) => {
                    ((f.current = e), d(e));
                }, []);
            i.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of cC) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of cC) t.removeEventListener(e, u);
                    };
                }
            }, [e, u]);
            let h = i.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    i = !s.current && r < 32 && f.current;
                t.current = i;
                let o = r > 1 || !f.current;
                (a((e) => (!o === e ? e : !o)), l((e) => (e === i ? e : i)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: o,
                releasePinHold: u,
                showsLatest: c,
                showsLatestRef: f,
                handleShowsLatestChange: m,
                updatePin: h,
            };
        })(_),
        B = i.useCallback(() => {
            function e() {
                let e = E.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (D(), O.current ? e() : M.current?.showLatest(e));
        }, [D, O]),
        K = i.useCallback(() => {
            (z(), M.current?.handleScroll());
            let e = R.current;
            null != e && (e.position = P.current ? null : (M.current?.snapshot() ?? null));
        }, [z, P]),
        H = i.useContext(eL.A) === m;
    i.useLayoutEffect(() => {
        if (!H) return;
        let e = { position: eD.A.getProjectView(m).chatScroll };
        return ((R.current = e), () => (0, e$.g7)(m, { chatScroll: e.position }));
    }, [H, m]);
    let W = i.useRef(!H);
    (i.useLayoutEffect(() => {
        if (W.current || !(0, nE.i_)(j)) return;
        W.current = !0;
        let e = eD.A.getProjectView(m).chatScroll;
        null != e && M.current?.restore(e) !== !0 && null != R.current && (R.current.position = null);
    }, [j, m]),
        i.useLayoutEffect(() => {
            let e = E.current;
            if (null == e) return;
            let t = _.current?.getScrollerNode(),
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
                    r && (P.current ? _.current?.scrollToBottom() : M.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [P]),
        i.useEffect(() => {
            (0, ey.ensureConnection)(m);
        }, [m]),
        (0, rZ.E1)(m, (0, nN.j)()));
    let V = U(m),
        X = (function (e) {
            let t = (0, tm.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([lK.A], () => (null == n ? null : (lK.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: ej.intl.format("channel" === s ? eb.default["1cm4fj"] : eb.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(m),
        Y = (function (e) {
            let t = (0, c.bG)([rW.A], () => rW.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rV.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rH.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? ej.intl.format(eb.default["bw/n4C"], { helpdeskURL: e })
                            : ej.intl.format(eb.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: ej.intl.formatToPlainString(eb.default.GHgG2B, { percent: l, limit: n }) };
        })(m),
        Q =
            ((l = (0, c.bG)([rk.A], () => rk.A.getFailure(m))),
            (r = i.useCallback(() => (0, rw.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: ej.intl.format(eb.default.Up6Ssw, { reason: l }),
                      retry: { text: ej.intl.string(eb.default["ywA+ET"]), onClick: r },
                  }),
        Z = (0, rg.E8)(m),
        J = (0, c.bG)([rk.A], () => rk.A.getSetupStartedAt(m), [m]),
        ee = i.useCallback(
            (e, t) => {
                (0, ey.dv)(m, e, t);
            },
            [m],
        ),
        et = i.useCallback(
            (e, t, n) => {
                let l = n ?? ee;
                0 === V.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => S(e.comment)),
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
                                      a.push(`${t + 1}. ${I(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: V.annotations, metaComment: e, context: V.context }),
                          t,
                      ),
                      F(m));
            },
            [V, ee, m],
        ),
        en = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of nJ)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, ey.re)(e, l.nonce),
                        (function (e) {
                            let t = nJ.get(e);
                            (nJ.delete(e), n1(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                rL.A.isThinking(m)) &&
                (0, ey.fu)(m);
        }, [m]),
        el = i.useCallback((e) => (0, n3.RQ)(m, e.implementation_prompt), [m]),
        er = i.useCallback((e) => (0, n3.RQ)(m, e), [m]),
        [ea, ei] = (function (e) {
            let [t, n] = i.useState(() => r0(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? r0(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(m),
        es = i.useCallback(() => ee(ej.intl.string(eb.default["t5CN3+"])), [ee]),
        eo = i.useCallback((e, t, n) => (0, n3.RQ)(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        eu = i.useCallback((e) => (0, rh.X)(m, e), [m]),
        ec = i.useCallback((e) => (0, tG.vX)(m, e), [m]),
        ed = i.useCallback((e) => (0, tB.gn)(m, "chat", Array.from(e), ec), [m, ec]),
        ef = i.useCallback(() => (0, n3.RQ)(m, ej.intl.string(eb.default.Zc7gML)), [m]),
        em = h?.status === "restoring",
        eh = "open" === y && !em,
        eg = j[j.length - 1],
        ex = null != eg && "assistant" === eg.role && null != eg.proposal,
        [ev, ek] = i.useState(null),
        ew = i.useMemo(
            () =>
                (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if (null == n.clarification || 0 === n.clarification.questions.length) continue;
                        let l = n.clarificationAt ?? n.settled_at;
                        for (let n = t + 1; n < e.length; n++)
                            if ("user" === e[n].role && (null == l || e[n].created_at > l)) return null;
                        return n.clarification;
                    }
                    return null;
                })(j),
            [j],
        ),
        eA = null != ew && ew.id !== ev ? ew : null,
        eS = i.useCallback(() => {
            null != eA && ek(eA.id);
        }, [eA]),
        [eC, eN] = i.useState(null),
        eI = (function (e) {
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
                                summary: ej.intl.string(eb.default["o2++BO"]),
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
        eE = eg?.appBuildRequest != null && (0, nE.BL)(eg) && eg.appBuildRequest.id !== eC ? eg.appBuildRequest : null,
        e_ = eI.request ?? (null == eA ? eE : null),
        eM = null == eI.request ? eA : null,
        eR = null != e_ && e_ === eI.request,
        { close: eP, sent: eT } = eI,
        eq = eI.request?.id,
        eF = i.useCallback(() => {
            eR ? eP() : null != e_ && eN(e_.id);
        }, [e_, eR, eP]),
        eO = i.useCallback(
            (e) => {
                (null != eq && eT(eq),
                    (0, ep.P0)({
                        text: ej.intl.formatToPlainString(eb.default.RZO35O, {
                            names: e.map((e) => e.name).join(", "),
                        }),
                        variant: "success",
                    }));
            },
            [eq, eT],
        ),
        eG = (0, c.bG)([rT.A], () => rT.A.getSettings(m), [m]),
        [ez, eU] = i.useState(null),
        eB = rF(),
        eK =
            null != eg &&
            ((t = eg.id),
            (s = (0, rA.Mv)(j, eG?.secrets)),
            (o = rO(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, nE.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !o.has(e.id) && !rG(e.settingsRequest, eG, eB.has(e.id)))),
            )),
        eH =
            null != eg &&
            "assistant" === eg.role &&
            null != eg.settingsRequest &&
            null == eg.secretRequest &&
            (0, nE.BL)(eg) &&
            eg.id !== ez &&
            ((n = eg.settingsRequest),
            (u = n.keys ?? []),
            null != eG &&
                0 !== u.length &&
                u.every((e) => {
                    let t = eG.schema.find((t) => t.key === e);
                    return null != t && rI.has(t.type);
                })) &&
            rE(eg.settingsRequest, eG) &&
            !eK
                ? eg
                : null,
        eW = null == eI.request ? eH : null,
        eV = eW?.settingsRequest ?? null,
        eX = i.useCallback(() => {
            null != eH && eU(eH.id);
        }, [eH]),
        eY = null != eV,
        [eQ, eZ] = i.useState(null),
        eJ = eG?.secrets,
        e0 = i.useMemo(() => (0, rA.Qr)(j, (0, rA.Mv)(j, eJ)), [j, eJ]),
        e1 = null != e0 && e0.render_id !== eQ ? e0 : null,
        e2 = null == eM && null == e_ ? e1 : null,
        e3 = i.useCallback(() => {
            null != e1 && eZ(e1.render_id);
        }, [e1]),
        [e4, e5] = i.useState(null),
        e7 = eM?.id ?? e_?.id ?? e2?.render_id ?? eW?.id,
        e9 = null != eA || null != e_ || null != e1 || null != eH;
    i.useLayoutEffect(() => {
        let e = _.current?.getScrollerNode(),
            t = e4?.firstElementChild;
        if (null == e4 || null == e || !(0, tF.vq)(t, HTMLElement) || null == e7) return;
        function n() {
            P.current && _.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - e4.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [e4, e7, _, P]);
    let e6 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([rL.A], () => rL.A.hasLoadedHistory(m), [m]),
            historyUnavailable: (0, c.bG)([rL.A], () => rL.A.isHistoryUnavailable(m), [m]),
            connState: y,
        }),
        te = !(0, nE.i_)(j),
        tt = "loading" === e6 && te,
        tn = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return c1[e % c1.length];
        }, [m]),
        tl = ex ? ej.intl.string(eb.default.Zc7gML) : "greeting" === e6 && te ? tn : null,
        tr = i.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, nE.BL)(t)) return t;
            }
        }, [j]),
        ta = null != tr,
        ti = i.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        ts = null != tr ? (0, rX.S)(tr) : void 0,
        to = ex && eh ? ef : void 0,
        tu = i.useCallback(() => (0, n3.RQ)(m, ej.intl.string(eb.default.EMgIuY)), [m]),
        [tc, td] = i.useState(null),
        [tf, th] = i.useState(ta);
    (tf !== ta && (th(ta), ta || td(null)),
        i.useEffect(() => {
            if (!ta) return;
            let e = _.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? td(null)
                        : td(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [ta, tr?.steps, q]));
    let tg = q ? tc : "bottom",
        tp = i.useMemo(() => (null != tr ? (0, nM.b9)(tr.steps) : ""), [tr]),
        tx = i.useMemo(() => (null != tr ? ((0, nI.lt)(tr.steps) ?? tr.todos) : void 0), [tr]),
        tv = tr?.provisionalTodo,
        tb = null != tr && n_(tr),
        tj = i.useMemo(() => {
            var e;
            return null != tr ? ((e = tr.steps), ai((0, nI.Jf)(e, !0).tasks)) : void 0;
        }, [tr]);
    return (0, a.jsxs)("section", {
        ref: E,
        "data-conjure-chat": !0,
        className: c0.TE,
        children: [
            eh
                ? (0, a.jsx)(nC.A, {
                      title: ej.intl.string(eb.default.gy7byi),
                      description: ej.intl.string(eb.default["dkv/WO"]),
                      icons: cJ.ir,
                      onDrop: ed,
                  })
                : null,
            (0, a.jsx)(nZ, {
                onJumpToActivity: B,
                line: tp,
                placement: ta && "top" === tg ? "top" : null,
                todos: tx,
                todosLive: tb,
                provisionalTodo: tv,
                agents: tj,
            }),
            (0, a.jsxs)("div", {
                className: c0.JX,
                children: [
                    (0, a.jsx)(nA.Ch, {
                        ref: _,
                        onScroll: K,
                        scrollbarGutter: tt ? "both-edges" : "stable",
                        className: [c0.N$, L ? null : c0.hB, eY ? c0.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rY.Fu.Provider, {
                            value: m,
                            children: (0, a.jsx)(cI, {
                                projectId: m,
                                messages: j,
                                emptyState: e6,
                                floatingSettingsMessageId: eH?.id,
                                floatingSecretRenderId: e2?.render_id,
                                liveClarificationId: eM?.id,
                                onPickIdea: eh ? el : void 0,
                                onAskForIdeas: eh ? es : void 0,
                                draftHasText: ea,
                                onApprovePlan: eh ? tu : void 0,
                                onRestoreVersion: em || ta ? void 0 : g,
                                onCardReply: eh ? er : void 0,
                                scrollerRef: _,
                                stickToBottomRef: P,
                                pinned: T,
                                onUnpin: $,
                                handleRef: M,
                                onShowsLatestChange: G,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: c0.NJ,
                        children: (0, a.jsx)(cZ, {
                            projectId: m,
                            thinking: ta,
                            turnStartedAt: ts,
                            restoring: em,
                            remixStartedAt: J,
                            recalling: tt,
                            thinkingActivity: w,
                            compacting: A,
                            saving: C,
                            projectUsage: k,
                            connState: y,
                            queued: ti,
                        }),
                    }),
                    null == eM
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e5,
                              className: eY ? `${c0.B5} ${c0.J9}` : c0.B5,
                              children: (0, a.jsx)(
                                  rf,
                                  { projectId: m, clarification: eM, onSubmit: eh ? eo : void 0, onDismiss: eS },
                                  eM.id,
                              ),
                          }),
                    null == e_
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e5,
                              className: c0.B5,
                              children: (0, a.jsx)(
                                  lt,
                                  { projectId: m, request: e_, canSend: eh, onDismiss: eF, onSent: eR ? eO : void 0 },
                                  e_.id,
                              ),
                          }),
                    e2?.secretRequest == null
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e5,
                              className: c0.B5,
                              children: (0, a.jsx)(
                                  rP,
                                  {
                                      projectId: m,
                                      cardId: e2.render_id,
                                      request: e2.secretRequest,
                                      status: "open",
                                      onDismiss: e3,
                                  },
                                  e2.render_id,
                              ),
                          }),
                    null == eV
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eM && null == e_ ? e5 : void 0,
                              className: c0.B5,
                              children: (0, a.jsx)(
                                  rK,
                                  { askId: eW?.id, projectId: m, request: eV, onDismiss: eX },
                                  eW?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: c0.Jx,
                children: [
                    (0, a.jsx)(nZ, {
                        onJumpToActivity: B,
                        line: tp,
                        placement: ta && "bottom" === tg ? "bottom" : null,
                        todos: tx,
                        todosLive: tb,
                        provisionalTodo: tv,
                        agents: tj,
                    }),
                    0 === V.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: c0.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: ej.intl.formatToPlainString(eb.default["7b49dS"], {
                                          count: V.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(x.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: ej.intl.string(eb.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(f.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ej.intl.string(eb.default["/zOv9+"]),
                                      onClick: () => F(m),
                                  }),
                              ],
                          }),
                    null == Z ? null : (0, a.jsx)(ry, { pending: Z }, Z.publishTurnId),
                    null == Q
                        ? null
                        : (0, a.jsx)("div", {
                              className: c0.qB,
                              children: (0, a.jsx)(nS.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: Q.message,
                                  action: Q.retry,
                              }),
                          }),
                    null == X
                        ? null
                        : (0, a.jsxs)("div", {
                              className: c0.Db,
                              children: [
                                  (0, a.jsx)(nS.w, { type: "warning", role: "status", message: X.message }),
                                  (0, a.jsx)("div", {
                                      className: c0.jU,
                                      children: (0, a.jsx)(d.m, {
                                          text: ej.intl.string(ej.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tQ.K, {
                                              "aria-label": ej.intl.string(ej.t.WAI6xu),
                                              icon: e8.XSmallIcon,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: X.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == Y
                        ? null
                        : (0, a.jsx)("div", {
                              className: c0.qB,
                              children: (0, a.jsx)(nS.w, {
                                  type: Y.blocked ? "critical" : "warning",
                                  role: Y.blocked ? "alert" : "status",
                                  message: Y.message,
                              }),
                          }),
                    (0, a.jsx)(o$, {
                        projectId: m,
                        escapeScopeRef: v,
                        canSend: eh,
                        running: ta,
                        restoring: em,
                        onSend: et,
                        hasPendingContext: V.annotations.length > 0,
                        onInterrupt: eh ? en : void 0,
                        onUploadFile: ec,
                        onImport: p,
                        onSendToOtherProjects: e9 ? void 0 : eI.open,
                        onApprove: to,
                        suggestion: tl,
                        questionOpen: e9,
                        secretPending: null != e2,
                        modelSettings: N,
                        onModelSettingsChange: eu,
                        onDraftHasTextChange: ei,
                        aiPaused: Y?.blocked === !0,
                        visible: b,
                    }),
                ],
            }),
        ],
    });
}
var c3 = n(761508),
    c4 = n(209695),
    c5 = n(207438),
    c7 = n(683438),
    c8 = n(564218);
function c9(e, t) {
    return String(e).padStart(t, "0");
}
function c6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${c9(l.getHours(), 2)}:${c9(l.getMinutes(), 2)}:${c9(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${c9(l.getMilliseconds(), 3)}` : r;
}
var de = n(667931);
let dt = {
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
    dn = { running: "Running", ok: "Done", error: "Failed" };
function dl(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function dr(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function da(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function di(e) {
    return dr(e.count > 1 ? e.totalMs : e.end - e.start);
}
let ds = ["Arguments", "Result", "Usage", "Details"];
function du(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function dc(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function dd(e) {
    let t = (0, de.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, de.lp)(e) ? "interrupted" : "still running";
}
function df(e) {
    return [c6(new Date(e.started_at).toISOString()) ?? "", da(e.spans.length), (0, de.Sj)((0, de.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function dm(e) {
    let t = (0, de.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, de.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += dh(r, "in")),
                (l.output += dh(r, "out")),
                (l.cacheRead += dh(r, "cache_read")),
                (l.cacheWrite += dh(r, "cache_write")),
                (l.costUsd += dh(r, "cost_usd"))));
    }
    let r = de.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function dh(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var dg = n(738188),
    dp = n(430993),
    dx = n(364840),
    dv = n(224640),
    db = n(20742);
let dj = { collapsed: new Set(), revealed: new Set() };
var dy = n(872892);
let dk = {
    op: dy.Q,
    model: dy.i3,
    tool: dy.dH,
    setup: dy.kc,
    worktree: dy.Qx,
    sandbox: dy.QH,
    build: dy.F1,
    platform: dy.Op,
    other: dy.fv,
};
function dw(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      da(t.calls, "model call"),
                      `${dl(t.input)} in`,
                      `${dl(t.output)} out`,
                      `${dl(t.cacheRead)} cache read`,
                      `${dl(t.cacheWrite)} cache write`,
                      dc(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: dy.M1,
        children: [
            (0, a.jsx)("div", {
                className: dy.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${dy.DJ} ${dk[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: dy.o1,
                children: de.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${dr(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: dy.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${dy.nf} ${dk[e]}` }),
                                (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: dt[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(x.E, {
                                          variant: "body-xs/normal",
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
                : (0, a.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function dA(e) {
    return `conjure-perf-trace-${e}`;
}
function dS(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: dy.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(x.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${dy.p0} ${s + o > 85 ? dy.EU : dy.jh}`,
                children: i,
            }),
        ],
    });
}
function dC(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? nD.ChevronSmallRightIcon : n$.ChevronSmallDownIcon,
        f = i.useCallback(
            (e) => {
                (e.shiftKey && u(t.key), s(t.key));
            },
            [t.key, u, s],
        ),
        m = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? u(t.key) : o(t.key));
            },
            [t.key, u, o],
        );
    return (0, a.jsxs)(e7.D, {
        tag: "div",
        role: "treeitem",
        id: dA(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${dy.$y} ${r ? dy.wQ : ""}`,
        onClick: f,
        children: [
            (0, a.jsxs)("div", {
                className: dy.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(e7.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: dy.ai,
                              onClick: m,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: dy.YJ }),
                    (0, a.jsx)(x.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: dy.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${dy.nf} ${dk[t.category]}` }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: dy.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: dy.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(x.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: dy.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(dg.WarningIcon, { size: "xs", color: "currentColor", className: dy.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dS, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${dy.M0} ${dy.Nh}`
                    : t.running
                      ? `${dy.M0} ${dy.rF}`
                      : `${dy.M0} ${dk[t.category]}`,
                duration: di(t),
            }),
        ],
    });
}
function dN(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(e7.D, {
        tag: "div",
        role: "treeitem",
        id: dA(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${dy.$y} ${l ? dy.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: dy.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: dy.ai,
                        children: (0, a.jsx)(nD.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: dy.U9 }),
                    (0, a.jsx)("span", { className: `${dy.nf} ${dy.dL}` }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: dy.MQ,
                        children: da(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dS, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${dy.M0} ${dy.ab} ${dy.dL}`,
                duration: dr(t.totalMs),
            }),
        ],
    });
}
function dI(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(x.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: dy._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: dy.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${dy.nf} ${dk[t.category]}` }),
                          (0, a.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [du("Start", `+${dr(e.start)}`), du("Duration", di(e))];
                      e.count > 1
                          ? t.push(
                                du("Calls", String(e.count)),
                                du("Longest call", dr(e.maxMs)),
                                du("Spread over", dr(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(du("Self time", dr(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(du("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(du("Notes", l.join(", "))),
                          null != e.span.error && t.push(du("Error", e.span.error)));
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
                              s = "cost_usd" === t ? dc(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), du(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...ds.flatMap((e) => {
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
                                      : (0, a.jsx)(x.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-strong",
                                            className: dy.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(x.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(x.E, {
                                                            variant: "mono-md/bold",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: dy.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(x.E, {
                                                            variant: "body-xs/normal",
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
function dE(e) {
    let { trace: t } = e,
        n = i.useMemo(() => dm(t), [t]);
    return (0, a.jsx)(dw, { stats: n });
}
function d_(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, de.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? dj : (0, de.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, de.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, de.x7)(t)), l((n) => (0, de._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, de.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, de.IE)(t, e);
                        null != n && l((e) => (0, de.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, de.IE)(t, e);
                        null != n && l((e) => (0, de.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, de.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, de.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, de.hB)(t));
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
                expandAll: f,
                collapseAll: m,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: m } = n,
        h = (0, de.dj)(t),
        g = i.useMemo(() => (0, de.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        v = i.useCallback(
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
                    null != t && (u(t.key), document.getElementById(dA(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(dp.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: dy.z,
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: dd(t),
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: df(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(x.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(x.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${da(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dE, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: dy.KE,
                        children: [
                            (0, a.jsx)(f.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(f.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(f.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == o ? void 0 : dA(o),
                        className: dy.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: v,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dy.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: dy.So,
                                        children: (0, a.jsx)(x.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: dy.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                x.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${dy.io} ${(e / h) * 100 > 85 ? dy.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : dr(e),
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
                                          dC,
                                          {
                                              node: e.node,
                                              extent: h,
                                              collapsed: r.has(e.key),
                                              selected: e.key === o,
                                              onSelect: u,
                                              onToggle: c,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(dN, { row: e, extent: h, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(dx.j, { children: (0, a.jsx)(dI, { node: s }) }),
        ],
    });
}
function dM(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, c.bG)([cs.A], () => cs.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(dv.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(db.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(dp.c, {
                      children: (0, a.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(d_, { trace: i }),
        ],
    });
}
let dR = { running: dy.Vf, ok: dy.mo, error: dy.Sr };
function dP(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${dy.Om} ${dR[t]}`, role: "img", "aria-label": dn[t] });
}
function dT(e, t) {
    (0, e_.qf)((n) => (0, a.jsx)(dM, { ...n, projectId: e, traceId: t }));
}
function dL(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => dT(t, n.id), [t, n.id]);
    return (0, a.jsxs)(e7.D, {
        className: dy.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: dy.sU,
                children: [
                    (0, a.jsx)(dP, { status: (0, de.lQ)(n) }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: dy._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: dd(n),
                    }),
                ],
            }),
            (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: df(n) }),
            null == l
                ? null
                : (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function d$(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            let e = JSON.stringify({
                kind: "conjure.timing_traces",
                version: 1,
                project_id: t,
                exported_at: new Date().toISOString(),
                traces: n,
            });
            (0, c8.H)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(tC.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: tC.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(ty.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(tk.rX, {
                    children: (0, a.jsx)(tk.Dr, {
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
            return (0, a.jsx)(tQ.K, {
                ...e,
                buttonRef: l,
                icon: iL.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dD(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([cs.A], () => cs.A.getTimingTraces(t), [t]),
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
        o = i.useMemo(() => [...s].reverse(), [s]),
        u = i.useMemo(
            () =>
                (function (e) {
                    let t = e.map(dm);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: de.BF.map((e) => ({
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
              className: dy.Ie,
              children: [
                  (0, a.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: dy.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: dy.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: dy.fH,
                              children: (0, a.jsx)(c7.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(d$, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(nA.Ch, {
                      className: dy.XG,
                      children: [
                          (0, a.jsx)(dw, { stats: u }),
                          0 === o.length
                              ? (0, a.jsx)(x.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: dy.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(dL, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dq(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dF(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dO(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dG(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dz(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dU(e) {
    return ej.intl.string("preview" === e ? eb.default["2yLYlG"] : eb.default.eiAi57);
}
let dB = ["all", "preview", "stable", "web"];
function dK(e) {
    switch (e.reason) {
        case "local":
            return ej.intl.string(eb.default.mUeKML);
        case "unconfigured":
            return ej.intl.string(eb.default.bGefb5);
        case "unauthorized":
            return ej.intl.string(eb.default.KLx6Bb);
        default:
            return null != e.detail
                ? ej.intl.formatToPlainString(eb.default.t09Q6q, { detail: e.detail })
                : ej.intl.string(eb.default["t+tG59"]);
    }
}
function dH(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ej.intl.formatToPlainString(eb.default["XO/bN4"], {
              p50: dq(e.memory_p50_bytes ?? 0),
              p999: dq(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dW = {
    db: () => eb.default["7l+DFG"],
    db_preview: () => eb.default.FAuffi,
    runtime: () => eb.default["Gkl+ab"],
    runtime_preview: () => eb.default.ynpJzv,
    bot: () => eb.default["5/i0cj"],
    bot_preview: () => eb.default.m2jsnw,
};
var dV = n(911608),
    dX = n(177427);
function dY(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dX.KE,
        children: [
            (0, a.jsx)("div", {
                className: dX.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(v.y, { type: v.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ej.intl.string(eb.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(x.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: ej.intl.formatToPlainString(eb.default.INVO50, { time: dG(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(f.$, { variant: "secondary", size: "sm", text: ej.intl.string(eb.default.oKEgiu), onClick: l }),
        ],
    });
}
function dQ(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dX.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(x.E, { variant: "body-xs/semibold", color: "text-muted", className: dX.Gf, children: t }),
            n,
        ],
    });
}
function dZ(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dX.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dX.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dX.kS,
                        children: [i, (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dX.kS,
                        children: [
                            s,
                            (0, a.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function dJ(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dX.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dX.x7,
                children: [
                    (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dV.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dX.dh : void 0,
            }),
        ],
    });
}
function d0(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dZ, {
            label: ej.intl.string(eb.default.SXP7pD),
            value: ej.intl.string(eb.default.E5hKVi),
            hint: dK(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dZ, {
            label: ej.intl.string(eb.default.SXP7pD),
            value: "\u2014",
            hint: ej.intl.string(eb.default.AGvoMJ),
        });
    let l = dH(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dZ, { label: ej.intl.string(eb.default["H/X+FI"]), value: dF(n.cpu_ms) }),
            null != l && (0, a.jsx)(dZ, { label: ej.intl.string(eb.default.lmFmMO), value: l }),
        ],
    });
}
function d1(e) {
    let { analytics: t } = e,
        n = ej.intl.string(eb.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dQ, {
            title: n,
            children: (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: dK(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dW[t] : null) ? ej.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dQ, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: ej.intl.string(eb.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dZ,
                          {
                              label: n,
                              value: ej.intl.formatToPlainString(eb.default["w/2voO"], { cpu: dF(t.cpu_ms) }),
                              hint: dH(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var d2 = n(678708),
    d3 = n(414499),
    d4 = n(714800),
    d5 = n(81466),
    d7 = n(424383),
    d8 = n(664121),
    d9 = n(816943),
    d6 = n(268791),
    fe = n(514042),
    ft = n(872351),
    fn = n(708988),
    fl = n(150934),
    fr = n(417270);
let fa = "Restart Agent",
    fi = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fs(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function fo(e, t) {
    return { label: e, value: null != t && "" !== t ? dG(t) : "Unknown", icon: "calendar" };
}
function fu(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function fc(e, t, n, l) {
    let [r, a] = fi[n.status];
    return { label: e, value: `${fu(n.bytes)} of ${fu(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function fd(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dG(e.at);
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
let ff = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fm(e) {
    let t = `container ${fs(e.local)} \xb7 remote ${fs(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: ff[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dO(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dO(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dO(n)} Ahead, ${dO(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fh = ["main", "wip"];
var fg = n(400154);
let fp = {
        checkout: d2.FolderIcon,
        edit: lb.PencilIcon,
        remote: d3.CloudIcon,
        commits: d4.ListNumberedIcon,
        calendar: d5.CalendarIcon,
        save: d7.SaveIcon,
        objects: d8.ServerIcon,
        download: d9.CloudDownloadIcon,
        size: d6.SpeedometerIcon,
        file: fe.FileIcon,
    },
    fx = {
        ok: [rN.CircleCheckIcon, t4.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [dg.WarningIcon, t4.A.colors.ICON_FEEDBACK_WARNING],
        error: [s1.CircleXIcon, t4.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [ft.ArrowSmallUpIcon, t4.A.colors.ICON_MUTED],
        behind: [fn.ArrowSmallDownIcon, t4.A.colors.ICON_MUTED],
    };
function fv(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([cs.A], () => cs.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, c5.DK)(t), [t]),
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
                    `Updated ${dG(r)}`,
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
    return (0, a.jsxs)(dQ, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fg.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(x.E, {
                        variant: "body-xs/normal",
                        role: "status",
                        color: l.critical ? "text-feedback-critical" : "text-muted",
                        children: l.line,
                    }),
            }),
            null != n.info &&
                (function (e) {
                    var t;
                    let n;
                    if (!e.running || null != e.localError) return [fd(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            fd(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dO(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fh.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fm))
                        : l.push(
                              { label: "Main", value: fs(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fs(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dO(e.commits) : "Unknown", icon: "commits" },
                            fo("Oldest Commit", e.oldest),
                            fo("Newest Commit", e.newest),
                            fd(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dO(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dO(t.loose)} loose (${dq(t.looseBytes)}) \xb7 ${dO(t.packed)} packed in ${n} (${dq(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dO(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dO(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                fc(
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
                                  fc("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fp[r],
                        [o, u] = null != i ? fx[i] : [null, void 0];
                    return (0, a.jsx)(
                        dZ,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: t4.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function fb(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: u,
        } = (function (e) {
            let t = (0, c.bG)([cs.A], () => cs.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, c5.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = cs.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, c5.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                uS.h.dispatch({
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
            let o = i.useCallback(() => (0, c5.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: fa,
                },
                restart: o,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eg.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: u });
        }, [o, u]);
    return (0, a.jsxs)("div", {
        className: fg.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fg.nM,
                children: [
                    (0, a.jsx)(fl.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(f.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: fr.RetryIcon,
                        text: fa,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, a.jsx)(x.E, {
                variant: "body-xs/normal",
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
                            return `Restarted \xb7 new instance since ${dG(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dG(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fj(e, t) {
    return (0, a.jsx)(dZ, {
        label: e,
        value: ej.intl.formatToPlainString(eb.default.yHJxuP, { count: dO((0, cG.aM)(t)) }),
        hint: `${dO(t.input_tokens)} in \xb7 ${dO(t.output_tokens)} out \xb7 ${dO(t.cache_read_input_tokens)} cache read`,
    });
}
function fy(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        u,
        d,
        m,
        h,
        { projectId: g, status: p, fetchState: v, onRefresh: b } = e,
        {
            lastTurn: j,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: A,
            turnRunning: S,
            handleForceCompaction: C,
            handleForceCompactionOverride: N,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: _,
            session: M,
            contextCeiling: R,
        } = ((t = (0, c.bG)([cs.A], () => cs.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([cs.A], () => cs.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([cs.A], () => cs.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([cs.A], () => cs.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([cs.A], () => cs.A.getSandboxRestartState(g), [g])),
        (o = (0, c.bG)([rL.A], () => rL.A.isThinking(g), [g])),
        (u = i.useCallback(() => (0, c5.Lj)(g), [g])),
        (d = i.useCallback(() => (0, c5.Lj)(g, !0), [g])),
        (m = i.useCallback(() => (0, c5.bq)(g), [g])),
        (h = p?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: o,
            handleForceCompaction: u,
            handleForceCompactionOverride: d,
            handleRestartWorkspace: m,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, a.jsxs)("div", {
        className: fg.Mf,
        children: [
            (0, a.jsx)(dY, { generatedAt: p?.generated_at ?? null, fetchState: v, onRefresh: b }),
            (0, a.jsx)(dQ, {
                title: ej.intl.string(eb.default.JghNal),
                children:
                    null == E
                        ? (0, a.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ej.intl.string(eb.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dZ, {
                                      label: ej.intl.string(eb.default["9nqym2"]),
                                      value: dO((0, cG.a7)(E.cost_usd)),
                                      hint: ej.intl.formatToPlainString(eb.default.NCdUIh, { count: dO(E.turns) }),
                                  }),
                                  fj(ej.intl.string(eb.default.xtxP0e), E.orchestrator),
                                  fj(ej.intl.string(eb.default["9Sj3SX"]), E.codegen),
                                  fj(ej.intl.string(eb.default.ANCEo3), (0, cG.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dZ, {
                                          label: ej.intl.string(eb.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dO(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dQ, {
                title: ej.intl.string(eb.default.dZHPE5),
                children:
                    null == j
                        ? (0, a.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ej.intl.string(eb.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  fj(ej.intl.string(eb.default["7X3i9d"]), j.total),
                                  (0, a.jsx)(dZ, {
                                      label: ej.intl.string(eb.default["8OUg09"]),
                                      value: `${Math.round((j.cache_hit_rate ?? (0, cG.CA)(j.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dQ, {
                title: ej.intl.string(eb.default.NbRk9a),
                children: [
                    null != y && null != R
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dJ, {
                                      label: ej.intl.string(eb.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: R,
                                      formatValue: dO,
                                  }),
                                  (0, a.jsx)(dZ, {
                                      label: ej.intl.string(eb.default.mRbSns),
                                      value: `${dO(y.tokensBefore)} \u{2192} ${dO(y.tokensAfter)}`,
                                      hint: ej.intl.formatToPlainString(eb.default.Vq3skS, {
                                          count: dO(y.retainedMessages),
                                          time: dG(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != R
                                      ? ej.intl.formatToPlainString(eb.default.GMLCNv, { ceiling: dO(R) })
                                      : ej.intl.string(eb.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dZ, {
                            label: ej.intl.string(eb.default["4BX5KK"]),
                            value: `${dO(k.projected)} / ${dO(k.threshold)}`,
                            critical: !0,
                            hint: ej.intl.formatToPlainString(eb.default["6ngCax"], { time: dG(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fg.Lj,
                        children: [
                            (0, a.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ej.intl.string(eb.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: C,
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ej.intl.string(eb.default.wox6Ev);
                                    if ("pending" === e) return ej.intl.string(eb.default.OcPHQ1);
                                    let t = dG(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ej.intl.formatToPlainString(eb.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? eb.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? eb.default.YZb4hK
                                              : eb.default.ZoUSVK;
                                    return ej.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(f.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: ej.intl.string(eb.default.ZxG2AI),
                                            onClick: N,
                                        }),
                                        (0, a.jsx)(x.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: ej.intl.string(eb.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: fg.Lj,
                        children: [
                            (0, a.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ej.intl.string(eb.default["5qCjBu"]),
                                loading: "pending" === A,
                                disabled: "pending" === A || S,
                                onClick: I,
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof A && "restarted" !== A.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ej.intl.string(eb.default.mlok8D);
                                    if ("pending" === e) return ej.intl.string(eb.default["1ugSyK"]);
                                    let t = dG(e.observedAt);
                                    return ej.intl.formatToPlainString(
                                        "restarted" === e.outcome ? eb.default["76mfqO"] : eb.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(A),
                            }),
                        ],
                    }),
                    (0, a.jsx)(fb, { projectId: g }),
                ],
            }),
            (0, a.jsx)(fv, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, a.jsxs)(dQ, {
                    title: ej.intl.string(eb.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dZ, {
                                        label: ej.intl.string(eb.default.CLXHAs),
                                        value: dG(M.instance_since),
                                        hint: ej.intl.string(eb.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dZ, {
                                        label: ej.intl.string(eb.default["8V8e1Z"]),
                                        value: dO(M.sockets),
                                    }),
                                    (0, a.jsx)(dZ, {
                                        label: ej.intl.string(eb.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? ej.intl.string(eb.default.Wv025I)
                                            : ej.intl.string(eb.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, a.jsx)(dZ, {
                                            label: ej.intl.string(eb.default["3oUYnv"]),
                                            value: dO(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, a.jsx)(d0, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, a.jsxs)(dQ, {
                    title: ej.intl.string(eb.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dZ, {
                            label: ej.intl.string(eb.default.IlDBN3),
                            value: dO(_.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dZ, {
                            label: ej.intl.string(eb.default["ZdzKR+"]),
                            value: ej.intl.formatToPlainString(eb.default.yHJxuP, {
                                count: dO(_.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(dZ, {
                            label: ej.intl.string(eb.default.cIhN2W),
                            value: ej.intl.formatToPlainString(eb.default.yHJxuP, {
                                count: dO(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dZ, {
                            label: ej.intl.string(eb.default["+fOn/q"]),
                            value: dO(_.max_user_message_chars),
                        }),
                        (0, a.jsx)(dZ, { label: ej.intl.string(eb.default.kIHga0), value: dO(_.max_build_attempts) }),
                        (0, a.jsx)(dZ, { label: ej.intl.string(eb.default.Iw03yW), value: dO(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fk = n(237528),
    fw = n(629584),
    fA = n(531893);
function fS(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fA.ut,
              children: (0, a.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: ej.intl.string(eb.default.h1SE6R),
              }),
          });
}
function fC(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fA.qf,
              children: [
                  (0, a.jsx)(x.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: ej.intl.string(eb.default.h1SE6R),
                  }),
                  (0, a.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: ej.intl.string(eb.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: fA.qf,
              children: [
                  (0, a.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fN(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fA.ps,
              children: (0, a.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: ej.intl.string(eb.default.V7Ri8H),
              }),
          })
        : null;
}
var fI = n(109079);
let fE = i.memo(function (e) {
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
        className: fI.vK,
        children: [
            (0, a.jsx)(x.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: fI.Mt,
                selectable: !0,
                children: c6(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(x.E, {
                tag: "span",
                variant: "footnote/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: fI.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fI.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fI.Cq, children: (0, a.jsx)(fk.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fI.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fk.v, {
                                text: ej.intl.string(eb.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(x.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(e7.D, {
                                      className: fI.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": ej.intl.string(eb.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(n$.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nD.ChevronSmallRightIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(x.E, {
                                              tag: "span",
                                              variant: "body-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  ej.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? eb.default.kUhyUv
                                                          : eb.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(x.E, {
                                          tag: "div",
                                          variant: "body-xs/normal",
                                          color: c,
                                          className: fI.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "body-xs/normal",
                              color: c,
                              selectable: !0,
                              children: n.message,
                          }),
                ],
            }),
        ],
    });
});
function f_(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([c4.A], () => c4.A.getLogs(t), [t]),
        l = (0, c.bG)([c4.A], () => c4.A.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [o, u] = i.useState(""),
        d = i.useMemo(() => {
            let e;
            return (
                (e = o.trim().toLowerCase()),
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
        }, [n, r, o]),
        f = i.useRef(null),
        m = i.useRef(!0);
    i.useEffect(() => {
        m.current && f.current?.scrollToBottom();
    }, [d]);
    let h = i.useCallback(() => {
            let e = f.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = i.useMemo(
            () =>
                dB.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dU(e);
                            case "web":
                                return ej.intl.string(eb.default.IVzfVV);
                            default:
                                return ej.intl.string(eb.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: fI.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fI.y4,
                children: [
                    (0, a.jsx)(fw.I, {
                        look: "pill",
                        "aria-label": ej.intl.string(eb.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fI.KT,
                        children: (0, a.jsx)(c7.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: ej.intl.string(eb.default["m2+37Y"]),
                            "aria-label": ej.intl.string(eb.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(fS, { state: l }),
            (0, a.jsxs)(nA.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: fI.sx,
                children: [
                    (0, a.jsx)(fN, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fC, {
                              state: l,
                              emptyTitle: ej.intl.string(eb.default.S7qlPG),
                              emptyBody: ej.intl.string(eb.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: ej.intl.string(eb.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(fE, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fM(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dQ, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: ej.intl.string(eb.default.umcjif),
                      }),
        })
    );
}
function fR(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dZ, {
                      label: ej.intl.formatToPlainString(eb.default["01ZMS4"], { env: dU(n) }),
                      value: ((t = l.connected), ej.intl.string(t ? eb.default.Wv025I : eb.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dZ, {
                      label: ej.intl.string(eb.default["z1dh+F"]),
                      value: dO(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dG(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dZ, { label: ej.intl.string(eb.default.Iz5GnJ), value: dO(l.guild_count) }),
                  (0, a.jsx)(dZ, {
                      label: ej.intl.string(eb.default["7UqtNv"]),
                      value: dO(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? ej.intl.formatToPlainString(eb.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dG(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dZ, {
                          label: ej.intl.string(eb.default["x3+JXJ"]),
                          value: dO(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dZ, { label: dU(n), value: ej.intl.string(eb.default.lTHQss) });
}
function fP(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dZ, {
        label: dU(t),
        value: ej.intl.formatToPlainString(eb.default["Xq+wHT"], {
            requests: dO(n.requests),
            failures: dO(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? ej.intl.formatToPlainString(eb.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dG(n.last_failure.at),
                  })
                : ej.intl.formatToPlainString(eb.default["7KlGT6"], { time: dG(n.since) }),
    });
}
function fT(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dZ, {
                label: ej.intl.formatToPlainString(eb.default["92gVTm"], { env: dU(t) }),
                value: dO(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dZ,
                    {
                        label: ej.intl.formatToPlainString(eb.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ej.intl.formatToPlainString(eb.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ej.intl.formatToPlainString(eb.default.wxAWNv, { time: dG(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fL(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dZ, {
        label: dU(t),
        value: ej.intl.formatToPlainString(eb.default.suAOj9, { calls: dO(n.calls), errors: dO(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function f$(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dQ, {
            title: t,
            children: (0, a.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: ej.intl.string(eb.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dQ, {
        title: t,
        children: [
            (0, a.jsx)(dZ, {
                label: ej.intl.string(eb.default.xtD4Zp),
                value: dO(n.requests),
                hint: ej.intl.formatToPlainString(eb.default["7KlGT6"], { time: dG(n.since) }),
            }),
            (0, a.jsx)(dZ, { label: ej.intl.string(eb.default.gfRhR3), value: dO(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dJ, {
                              label: ej.intl.string(eb.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dF,
                          }),
                          (0, a.jsx)(dZ, {
                              label: ej.intl.string(eb.default.mSKImM),
                              value: dF(r),
                              hint: ej.intl.formatToPlainString(eb.default.JqMU05, {
                                  total: dF(n.cpu_ms_total),
                                  wall: dF(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dZ, {
                      label: ej.intl.string(eb.default.LEJ5r3),
                      value: ej.intl.string(eb.default["2Ekb2b"]),
                      hint: ej.intl.string(eb.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dZ, { label: ej.intl.string(eb.default.xvmL1D), value: dF(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dZ, {
                    label: ej.intl.string(eb.default["4sQYwH"]),
                    value: dO(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(dZ, {
                label: ej.intl.string(eb.default.bQenOy),
                value: dO(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: ej.intl.formatToPlainString(eb.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dZ, { label: ej.intl.string(eb.default.xgpn4Y), value: dz(n.build) }),
        ],
    });
}
function fD(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: ej.intl.string(eb.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: ej.intl.string(eb.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: ej.intl.string(eb.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dQ, {
        title: ej.intl.string(eb.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dZ, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dZ, {
                                  label: ej.intl.formatToPlainString(eb.default.u7kJJ4, { env: n }),
                                  value: dq(l.r2_bytes),
                                  hint: ej.intl.formatToPlainString(
                                      l.r2_truncated ? eb.default.lH0oQw : eb.default.m9h02S,
                                      { count: dO(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dJ, {
                                      label: ej.intl.formatToPlainString(eb.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dq,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fq(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fg.Mf,
        children: [
            (0, a.jsx)(dY, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(f$, {
                            title: ej.intl.string(eb.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(f$, {
                            title: ej.intl.string(eb.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fD, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(fM, {
                                title: ej.intl.string(eb.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fR, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(fM, {
                                title: ej.intl.string(eb.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fP, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(fM, {
                                title: ej.intl.string(eb.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fT, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(fM, {
                                title: ej.intl.string(eb.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fL, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(d1, { analytics: t.analytics }),
                        (0, a.jsxs)(dQ, {
                            title: ej.intl.string(eb.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dZ, {
                                    label: ej.intl.string(eb.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dz(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dZ, {
                                    label: ej.intl.string(eb.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dz(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fF = n(592465);
function fO(e) {
    let { projectId: t, onClose: n } = e,
        l = (0, eS.BQ)(),
        [r, s] = i.useState(() => (l && ew?.projectId === t ? "trace" : "logs")),
        o = (0, c.bG)([cs.A], () => cs.A.getStatus(t), [t]),
        u = (0, c.bG)([cs.A], () => cs.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, c5.R7)(t), (0, c5.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, ey.Rw)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == ew || ew.projectId !== e) return null;
            let { traceId: t } = ew;
            return ((ew = null), t);
        })(t);
        return null != e && (dT(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        eA(t, () => {
            f() && s("trace");
        }));
    let m = i.useCallback(() => {
            (0, uY.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: cs.A.getStatus(t),
                        last_turn_usage: cs.A.getLastTurnUsage(t),
                        last_compaction: cs.A.getLastCompaction(t),
                        last_compaction_decline: cs.A.getLastCompactionDecline(t),
                        timing_traces: cs.A.getTimingTraces(t),
                        logs: c4.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, ep.P0)({ text: ej.intl.string(eb.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = ej.intl.string(eb.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: fF.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(t$.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(t$.Ay.Icon, {
                            icon: uW.CopyIcon,
                            tooltip: ej.intl.string(eb.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, a.jsx)(t$.Ay.Icon, {
                            icon: e8.XSmallIcon,
                            tooltip: ej.intl.string(ej.t.cpT0Cq),
                            onClick: n,
                        }),
                    ],
                }),
                children: [
                    (0, a.jsx)(t$.Ay.ChannelIcon, { icon: uX.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(t$.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: fF.rf,
                children: [
                    (0, a.jsxs)(c3.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": ej.intl.string(eb.default.RvvWIh),
                        className: fF.vR,
                        children: [
                            (0, a.jsx)(c3.V.Item, { id: "logs", children: ej.intl.string(eb.default["+VRYCm"]) }),
                            (0, a.jsx)(c3.V.Item, { id: "worker", children: ej.intl.string(eb.default["50D0FZ"]) }),
                            (0, a.jsx)(c3.V.Item, { id: "agent", children: ej.intl.string(eb.default.UkbTK1) }),
                            l ? (0, a.jsx)(c3.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(f_, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(fq, { status: o, fetchState: u, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(dD, { projectId: t })
                            : (0, a.jsx)(fy, { projectId: t, status: o, fetchState: u, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fG = n(365912),
    fz = n(873715);
function fU(e) {
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
let fB = Object.freeze({ x: -1, y: -1 });
function fK(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fU(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fH = n(192888);
function fW(e, t) {
    return (0, fH.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fK, () => ({ status: "failed" }));
}
var fV = n(108308);
let fX = { x: 25, y: 21 };
function fY(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fQ(e, t, n, l) {
    let r = fY(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fZ(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fJ(e) {
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
function f0(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: d } = U(o),
        m = (0, eC.Zv)(o),
        h = (0, e_.Rv)(),
        g = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
        p = g?.id ?? null,
        [v, b] = i.useState(null),
        [j, k] = i.useState(!1),
        [w, M] = i.useState(!1),
        [R, P] = i.useState(null),
        [T, D] = i.useState(!1),
        q = i.useRef(null),
        z = i.useRef(null),
        B = i.useRef(null),
        [K, H] = i.useState(null),
        [W, V] = i.useState(!1),
        [X, Y] = i.useState(null),
        [Q, Z] = i.useState(null),
        J = i.useRef(!1),
        [ee, et] = i.useState(!1),
        [en, el] = i.useState(null),
        er = u && !m && !h;
    null == X || (er && X.projectId === o) || Y(null);
    let ei = X?.projectId ?? null;
    i.useEffect(() => {
        if (null != ei) return () => (0, n3.xJ)(ei, "design");
    }, [ei]);
    let es = tX(r, er);
    i.useEffect(() => {
        if (!er || null == o) return;
        let e = !0,
            t = r();
        if (null == t) return void M(!0);
        (k(!0), M(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fz.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    k(!1);
                    let n = "completed" === t.status ? fJ(t.response) : null;
                    null == n ? M(!0) : (b(n), O(o, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (k(!1), M(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [er, r, o]);
    let eo = i.useRef(null);
    (i.useEffect(() => {
        if (!er || null == es || null == o) return;
        if (null == v) {
            eo.current = es;
            return;
        }
        if (tV(eo.current, es)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            eo.current = es;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fz.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !em.current) return;
                        let l = fJ(e.response);
                        null != l && (b(l), O(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fU(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = L(o)).active &&
                                0 !== r.size &&
                                $(o, {
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
    }, [er, es, v, d, o, r]),
        i.useEffect(() => {
            if (!er)
                return () => {
                    (P(null), Y(null), el(null), b(null));
                };
        }, [er]));
    let ec = i.useRef(null),
        ed = i.useRef(null),
        ef = i.useRef(!1),
        em = i.useRef(!1);
    i.useEffect(() => {
        ((em.current = er), er || ((ec.current = null), (ed.current = null), (B.current = null), D(!1)));
    }, [er]);
    let eh = i.useCallback(
            function e() {
                if (ef.current) return;
                let t = ec.current;
                if (null == t) return;
                ec.current = null;
                let n = r();
                null != n &&
                    ((ef.current = !0),
                    fW(n, t).then((t) => {
                        if (((ef.current = !1), em.current)) {
                            if ("picked" !== t.status || f7(t.target, ek.current.rect, ek.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? P(null)
                                    : "unsupported" === t.status && V(!0);
                            else {
                                let e = C(t.target);
                                (H((t) => (f5(t, e) ? t : e)),
                                    P((e) => {
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
        eg = i.useCallback(() => {
            if (null == X) return;
            let e = !J.current;
            (Z({ at: X.at, label: X.label, draft: X.draft, instant: e }), et(e), Y(null));
        }, [X]);
    (i.useEffect(() => {
        if (!ee) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => et(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [ee]),
        i.useEffect(() => {
            if (null == Q) return;
            let e = setTimeout(() => Z(null), f3);
            return () => clearTimeout(e);
        }, [Q]));
    let ep = null == v || null == es || v.viewport.width < 1 ? 1 : es.width / v.viewport.width,
        ex = null != v || w,
        ev = i.useMemo(() => v?.elements ?? [], [v]),
        ek = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ek.current = { rect: es, scale: ep };
    }, [es, ep]);
    let ew = i.useCallback(
            (e, t, n) => {
                null != o &&
                    ((0, n3.xJ)(o, "design"),
                    el(null),
                    (J.current = !1),
                    Y({ projectId: o, target: e, anchor: t, draft: "", at: n, label: C(e) }));
            },
            [o],
        ),
        eA = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ep, y: (e.clientY - t.top) / ep }), [ep]),
        eS = i.useCallback(() => {
            let e = B.current;
            if (null == e) return;
            let t = q.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = z.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(eS);
    let eN = i.useCallback(
            (e) => {
                if (null == es || null != en) return;
                if (((B.current = { x: e.clientX, y: e.clientY }), eS(), D(!0), null != X)) {
                    (Math.abs(e.clientX - X.at.x) > f4 || Math.abs(e.clientY - X.at.y) > f4) && (J.current = !0);
                    return;
                }
                if (!ex) return void P(null);
                let t = eA(e, es);
                if (W) {
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
                        })(ev, t.x, t.y),
                        n = null != e && f7(e, es, ep) ? null : e;
                    if (null != n) {
                        let e = C(n);
                        H((t) => (f5(t, e) ? t : e));
                    }
                    P((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = ed.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((ed.current = n), (ec.current = n), eh());
            },
            [es, ep, ex, eA, W, ev, X, en, eS, eh],
        ),
        eI = null == en ? null : d.find((e) => e.id === en.id),
        eE = er && (T || X?.target.marker != null || eI?.target.marker != null);
    i.useEffect(() => {
        if (eE)
            return () => {
                let e = r();
                null != e && fW(e, fB);
            };
    }, [eE, r]);
    let eM = i.useCallback(() => {
        (D(!1), P(null), (ed.current = null), (ec.current = null));
    }, []);
    i.useEffect(() => {
        if (!er || !T || !ex || W || null != X || null != en) return;
        let e = B.current,
            { rect: t, scale: n } = ek.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((ed.current = l), (ec.current = l), eh());
    }, [er, T, ex, W, X, en, eh]);
    let eR = i.useCallback(
            (e) => {
                if (null != X || null != en) {
                    (eg(), el(null));
                    return;
                }
                if (null == R || null == es) return;
                let t = eA(e, es);
                ew(
                    R,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? A
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(R, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [R, es, eA, X, en, ew, eg],
        ),
        eP = i.useCallback(() => {
            null != o && (P(null), ea(o)?.active === !0 ? eu(o) : F(o));
        }, [o]),
        eT = i.useCallback(() => {
            null != o &&
                (null != X
                    ? eg()
                    : en?.confirmingRemove === !0
                      ? el({ ...en, confirmingRemove: !1 })
                      : null != en
                        ? el(null)
                        : eP());
        }, [o, X, en, eg, eP]),
        eL = i.useRef(eT),
        e$ = i.useRef(o),
        eD = i.useRef(eP);
    i.useLayoutEffect(() => {
        ((eL.current = eT), (e$.current = o), (eD.current = eP));
    });
    let eq = i.useRef(null);
    i.useEffect(() => {
        if (er)
            return (
                tO.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        tO.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eL.current());
        }
        function t(e) {
            let t = e.target;
            !(0, tF.vq)(t) ||
                eq.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fG.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == e$.current || ea(e$.current)?.active !== !0) && eD.current());
        }
    }, [er, s]);
    let eF = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eT());
                    return;
                }
                if (null != X || null != en || 0 === ev.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == R ? -1 : ev.findIndex((e) => e.ref === R.ref);
                    P(ev[(n + (t ? 1 : -1) + ev.length) % ev.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != R &&
                    (e.preventDefault(),
                    ew(R, A, { x: (es?.left ?? 0) + R.rect.x * ep, y: (es?.top ?? 0) + R.rect.y * ep }));
            },
            [o, X, en, ev, R, ew, eT, es, ep],
        ),
        eO = i.useCallback(
            (e) => {
                null == o ||
                    null == X ||
                    ((S(X.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, ey.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = C(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${E}${r}${_}${I(e)}
${t.trim()}`;
                            })(X.target, X.draft),
                            e,
                        ),
                        eg(),
                        P(null)));
            },
            [o, X, eg],
        ),
        eG = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, tG.vX)(o, e)), [o]),
        ez = i.useCallback(() => {
            if (null != o && null != en && null != p && S(en.draft)) {
                var e, t;
                let n, l;
                ((e = en.id),
                    (t = en.draft.trim()),
                    null != (l = (n = L(o)).annotations.find((t) => t.id === e)) &&
                        G(l, p) &&
                        $(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    el({ ...en, editing: !1 }));
            }
        }, [o, en, p]),
        eU = i.useCallback(() => {
            if (null != o && null != en && null != p) {
                var e;
                let t, n;
                ((e = en.id),
                    null != (n = (t = L(o)).annotations.find((t) => t.id === e)) &&
                        G(n, p) &&
                        $(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    el(null));
            }
        }, [o, en, p]),
        eB = u
            ? j
                ? ej.intl.string(eb.default["Eb/YV9"])
                : w
                  ? ej.intl.string(eb.default.FD30bh)
                  : ej.intl.formatToPlainString(eb.default.dTSqLF, { count: d.length })
            : "",
        eK = er && null != es,
        eH = T && null == en,
        eW = X?.target ?? eI?.target ?? null,
        eV = X ?? Q,
        eX = X ?? (Q?.instant === !0 ? null : Q),
        eY =
            null != eI && null != es
                ? (function (e, t) {
                      let { left: n, top: l } = fZ(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fQ(eI.target, eI.anchor, es, ep), es)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eI?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eI;
            fW(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eI, r]),
        (0, tq.createPortal)(
            (0, a.jsxs)("div", {
                ref: eq,
                className: fV.Li,
                children: [
                    (0, a.jsx)(nL.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eB,
                    }),
                    eK
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: fV.MT,
                                      style: { left: es.left, top: es.top, width: es.width, height: es.height },
                                      "data-plain-cursor": eH ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ej.intl.string(eb.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: eN,
                                      onMouseLeave: eM,
                                      onClick: eR,
                                      onKeyDown: eF,
                                  }),
                                  null != R && null == R.marker && null == X && null == en
                                      ? (0, a.jsx)(f8, { box: fY(R, es, ep) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: q,
                                      className: fV.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fV.xz,
                                          "data-shown": null != R && null == en && null == X ? "" : void 0,
                                          "data-instant": ee ? "" : void 0,
                                          children: (0, a.jsxs)(x.E, {
                                              variant: "body-xs/medium",
                                              className: fV.Ux,
                                              children: [
                                                  null == K
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fV.Tl, children: K.kind }),
                                                  null == K || "" === K.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fV.kh,
                                                            children: [" ", K.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: z,
                                      className: fV.Y,
                                      children: eH ? (0, a.jsx)("div", { className: fV.u }) : null,
                                  }),
                                  null == eX
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fV.aZ,
                                            style: {
                                                transform: `translate3d(${eX.at.x + 20}px, ${eX.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fV.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == X ? "" : void 0,
                                                children: (0, a.jsxs)(x.E, {
                                                    variant: "body-xs/medium",
                                                    className: fV.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fV.Tl,
                                                            children: eX.label.kind,
                                                        }),
                                                        "" === eX.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fV.kh,
                                                                  children: [" ", eX.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eW && null == eW.marker
                                      ? (0, a.jsx)("div", {
                                            className: fV.D0,
                                            style: fY(eW, es, ep),
                                            "aria-hidden": !0,
                                        })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fQ(e.target, e.anchor, es, ep),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fV.xL,
                                              style: { ...fZ(n, es), width: 24, height: 24 },
                                              "aria-label": ej.intl.formatToPlainString(eb.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: N(e.target),
                                              }),
                                              "aria-expanded": en?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == X && el(l);
                                              },
                                              onFocus: () => {
                                                  null == X && el(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), eg(), el(l));
                                              },
                                              children: (0, a.jsx)(f1, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eV || null == o
                                      ? null
                                      : (0, a.jsx)(tH, {
                                            projectId: o,
                                            at: { x: eV.at.x + 20, y: eV.at.y + 20 },
                                            bounds: es,
                                            kind: eV.label.kind,
                                            value: eV.draft,
                                            canSubmit: null != X && S(eV.draft),
                                            onChange: (e) => {
                                                null != X && Y({ ...X, draft: e });
                                            },
                                            onSubmit: eO,
                                            onDismiss: eg,
                                            onUploadFile: eG,
                                            closing: null == X,
                                        }),
                                  null != eI && null != en && null != eY
                                      ? (0, a.jsxs)(f2, {
                                            point: eY,
                                            frame: es,
                                            authorId: eI.authorId,
                                            title: N(eI.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                en.confirmingRemove ? el({ ...en, confirmingRemove: !1 }) : el(null);
                                            },
                                            onMouseLeave: () => {
                                                en.editing || en.confirmingRemove || el(null);
                                            },
                                            children: [
                                                en.editing
                                                    ? (0, a.jsx)(n9.f, {
                                                          autoFocus: !0,
                                                          label: ej.intl.string(eb.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: en.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => el({ ...en, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), ez());
                                                          },
                                                      })
                                                    : (0, a.jsx)(x.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: fV.aC,
                                                          children: eI.comment,
                                                      }),
                                                G(eI, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: fV.eB,
                                                          children: en.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(x.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fV.nv,
                                                                            children: ej.intl.string(eb.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(f.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ej.intl.string(eb.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                el({ ...en, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(f.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ej.intl.string(eb.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eU,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(f.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: ej.intl.string(eb.default.friIzR),
                                                                            onClick: () =>
                                                                                el({
                                                                                    ...en,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        en.editing
                                                                            ? (0, a.jsx)(f.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !S(en.draft),
                                                                                  text: ej.intl.string(
                                                                                      eb.default.iicRP9,
                                                                                  ),
                                                                                  onClick: ez,
                                                                              })
                                                                            : (0, a.jsx)(f.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ej.intl.string(
                                                                                      eb.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      el({
                                                                                          ...en,
                                                                                          editing: !0,
                                                                                          draft: eI.comment,
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
function f1(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([y.default], () => y.default.getUser(t), [t]);
    return (0, a.jsx)(ih.eu, {
        src: null == n ? null : ip.Ay.getUserAvatarURL(n),
        size: ig._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function f2(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        v = i.useRef(null),
        b = i.useRef(null),
        [j, y] = i.useState(fX);
    i.useLayoutEffect(() => {
        let e = v.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: k,
            top: w,
            originX: A,
            originY: S,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, l), r)), originX: u.x - s, originY: u.y - o }),
        C = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${S}px` };
    return (0, a.jsxs)("div", {
        ref: v,
        className: fV.Nr,
        style: C,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fV.MY,
                children: [
                    (0, a.jsx)("span", { ref: b, className: fV.ip, children: (0, a.jsx)(f1, { authorId: d }) }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: fV.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fV.zI, children: p }),
        ],
    });
}
let f3 = 300,
    f4 = 2;
function f5(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function f7(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function f8(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fV.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var f9 = n(318774),
    f6 = n(91242),
    me = n(253932),
    mt = n(697744),
    mn = n(130324);
function ml(e) {
    let t = (0, mt.c)(),
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
    let r = (0, nN.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mr(e) {
    let { className: t } = e,
        { Component: n, events: l } = ml(3e4);
    return (0, a.jsxs)("div", {
        className: u()(t, mn.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: mn.ol,
                children: ej.intl.string(eb.default.AyiQEp),
            }),
        ],
    });
}
var ma = n(251363),
    mi = n(944142),
    ms = n(532247),
    mo = n(501628);
function mu(e) {
    let { progress: t } = e,
        { Component: n } = ml(1500),
        l = me.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(x.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: mo.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: mo.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function mc(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, c.bG)([mi.A], () => (s ? mi.A.getLiveReload(t) : null), [s, t]),
        u = (0, tu.A)(n, r)?.id ?? null,
        d = o?.phase ?? null,
        f = o?.background === !0,
        m = (function (e, t, n) {
            let l = (0, ms.dv)(e),
                [r, a] = i.useState(null),
                [s, o] = i.useState(l),
                [u, d] = i.useState(t);
            s !== l && (o(l), d(t), a(null != l || u ? null : (0, ms.QP)(e, s)));
            let f = (0, c.bG)(
                    [f6.A],
                    () => {
                        let e = f6.A.getFrame(n);
                        return (0, tf.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                m = i.useRef(f),
                h = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((m.current = f), f && (h.current = !0));
                }, [f]),
                i.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return a(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, ma.ow)(null, n) && e();
                    }
                    ((h.current = m.current), document.addEventListener("load", t, !0));
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
        })(d, f, u),
        h = f ? null : (0, ms.h_)(d, o?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(nL.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: mo.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(mu, { progress: h }),
                  })
                : null,
        ],
    });
}
let md = 0;
var mf = n(782134),
    mm = n(357858),
    mh = n(343030),
    mg = n(11411),
    mp = n(111518),
    mx = n(240666);
let mv = { width: 1 / 0, height: 1 / 0 };
function mb(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mv;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var mj = n(702083);
function my(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([tc.A], () => ({
            mobile: tc.A.isBuilderPreviewMobile(),
            landscape: tc.A.isBuilderPreviewLandscape(),
        })),
        r = i.useRef(null),
        [s, o] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = r.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            o((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
    }, []);
    let d = null != s && s.width > 0 ? s : null,
        f = n ? mb(l, d ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: u()(mj.dw, { [mj.PQ]: null != f }),
        children: (0, a.jsx)("div", { className: u()(mj.R9, { [mj.Vg]: null != f }), style: f ?? void 0, children: t }),
    });
}
var mk = n(347927);
function mw(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: u()(mk.Bf, l && mk.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: mk.Ux,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-sm/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(x.E, { variant: "body-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var mA = n(957272);
function mS(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, mp.A)({ applicationId: t, surface: n, launch: l });
    if (((0, mx.A)(t, n), s === mp.n.Launched)) {
        let e = (0, a.jsx)(mg.A, { frameId: i.id, level: mh.A.WithinAppContent, className: mA.Z7, overlay: r });
        return (0, td.Q5)(n) ? (0, a.jsx)(my, { children: e }) : e;
    }
    return (0, a.jsx)(mC, { state: s });
}
function mC(e) {
    let { state: t } = e;
    switch (t) {
        case mp.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: mA.qs,
                children: (0, a.jsx)(mw, {
                    title: ej.intl.string(eb.default["9kpdo7"]),
                    body: ej.intl.string(eb.default.iIA8Nj),
                }),
            });
        case mp.n.NoApplication:
            return (0, a.jsx)(mr, { className: mA.qs });
        case mp.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: mA.qs,
                children: (0, a.jsx)(mw, {
                    title: ej.intl.string(eb.default["7k4GyN"]),
                    body: ej.intl.string(eb.default.zdIy3R),
                }),
            });
        case mp.n.Error:
            return (0, a.jsxs)("div", {
                className: mA.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: ej.intl.string(eb.default.lTPbnG),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: mA.tj,
                        children: ej.intl.string(eb.default.e6GiAZ),
                    }),
                ],
            });
        case mp.n.AwaitingLaunch:
        case mp.n.Loading:
            return (0, a.jsx)("div", { className: mA.qs, children: (0, a.jsx)(v.y, {}) });
    }
}
var mN = n(308528),
    mI = n(334738),
    mE = n(5206),
    m_ = n(365971),
    mM = n(703462);
function mR(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: mM.f,
        children: [
            (0, a.jsx)(e0.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mP() {
    return (0, a.jsx)("div", { className: mM.f, children: (0, a.jsx)(v.y, {}) });
}
function mT(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, o] = i.useState(null),
        u = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([ll.A], () => (null != u ? ll.A.getChannel(u) : null), [u]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && mN.A.preload(ls.ME, t);
        }, [t]),
        (n = (0, c.bG)([uO.A], () => uO.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, m_.Xg)();
            return (
                (0, mI.yl)(t, e),
                () => {
                    (0, mI.dm)(t, e);
                }
            );
        }, [t, n]));
    let [f, m] = i.useState(null),
        h = f === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, eq.CN)(l).then(
                (t) => {
                    e || o({ previewApplicationId: r, channelId: t });
                },
                () => {
                    e || m(r);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [l, r, d, h]),
    h)
        ? (0, a.jsx)(mR, { message: ej.intl.string(eb.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(mP, {})
          : (0, a.jsx)("div", {
                className: mM.g,
                children: (0, a.jsx)(mE.A, { channel: d, guild: null, chatInputType: oh.oU.SIDEBAR }, d.id),
            });
}
var mL = n(765671),
    m$ = n(596977),
    mD = n(921853),
    mq = n(582063);
function mF(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        i = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(i + e + r.length) % r.length];
        (0, eq.vX)(t, n?.id ?? null);
    }
    let o = ej.intl.string(eb.default.Gl3XtE),
        u = ej.intl.string(eb.default["3FvcrY"]);
    return (0, a.jsxs)("div", {
        className: mq.aF,
        children: [
            (0, a.jsx)(d.m, {
                text: o,
                position: "top",
                children: (0, a.jsx)(tQ.K, {
                    icon: mD.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(-1),
                }),
            }),
            (0, a.jsx)("div", {
                className: mq.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: ej.intl.formatToPlainString(eb.default["140n5k"], {
                                  name: l.name,
                                  index: i + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: ej.intl.string(eb.default.wVJL0P),
                          }),
            }),
            (0, a.jsx)(d.m, {
                text: u,
                position: "top",
                children: (0, a.jsx)(tQ.K, {
                    icon: nD.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var mO = n(666476);
let mG = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mz() {
    (0, ep.P0)({ text: ej.intl.string(eb.default.jj3abP), variant: "critical" });
}
function mU(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = ej.intl.string(eb.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tC.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(mB, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: mq.m2,
                        children: (0, a.jsx)(d.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tQ.K, {
                                "aria-label": r,
                                icon: m.SettingsIcon,
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
                accept: mG.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mG.includes(n.type)
                                ? n.size > mO.aI
                                    ? (0, ep.P0)({ text: ej.intl.string(eb.default.T8Spiu), variant: "critical" })
                                    : (0, aI.M$)(t, n).catch(mz)
                                : (0, ep.P0)({ text: ej.intl.string(eb.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mB(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([aN.A], () => aN.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(ty.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": ej.intl.string(eb.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(tk.rX, {
                children: [
                    (0, a.jsx)(tk.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: ej.intl.string(eb.default.uQpDky),
                        icon: l8.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(tk.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: ej.intl.string(eb.default.AiAz8J),
                        icon: fr.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, aI.Og)(t).catch(mz));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(tk.rX, {
                children: (0, a.jsx)(tk.fP, {
                    id: "conjure-overlay-background-blur",
                    label: ej.intl.string(eb.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, aI.Y1)(t, !i) || mz();
                    },
                }),
            }),
        ],
    });
}
function mK(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: o, height: u } = (0, mL.Ay)(),
        { captures: c, selected: d } = aC(n),
        f = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: eU({ width: l - 48, height: r - 48 }, n) };
            let a = t.width / t.height,
                i = Math.min(l, r * a),
                s = i / 1920,
                o = eU({ width: 1872, height: 1920 / a - 48 }, n);
            return { top: (r - i / a) / 2 + 24 * s, end: (l - i) / 2 + 24 * s, scale: o * s };
        })({ width: o, height: u }, d, l);
    return (
        i.useEffect(() => (0, m$.L0)(), []),
        (0, a.jsxs)("div", {
            className: mq.JH,
            children: [
                (0, a.jsx)(a_, { projectId: n, gameCaptures: !0 }),
                (0, a.jsx)("div", {
                    ref: s,
                    className: mq.dw,
                    children: (0, a.jsx)("div", {
                        className: mq.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${f.top}px`,
                            "--custom-conjure-overlay-widget-end": `${f.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(f.scale),
                        },
                        children: (0, a.jsx)(mS, { applicationId: t, surface: td.p$, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, a.jsx)(mU, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, a.jsx)(mF, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
var mH = n(825484);
function mW(e) {
    let { onAddBot: t, loading: n = !1, agentPrompt: l } = e,
        r = (0, a.jsx)(f.$, {
            size: "sm",
            variant: "primary",
            text: ej.intl.string(eb.default.RGeB11),
            onClick: t,
            loading: n,
        });
    return null == l
        ? (0, a.jsx)(mw, {
              title: ej.intl.string(eb.default.xlEjZ8),
              body: ej.intl.string(eb.default["4ByPbd"]),
              children: r,
          })
        : (0, a.jsx)(mw, {
              title: ej.intl.string(eb.default.sRzJdk),
              body: ej.intl.formatToPlainString(eb.default.cbU1iq, { reason: l.reason }),
              children: (0, a.jsxs)(mH.e, {
                  size: "sm",
                  children: [
                      r,
                      (0, a.jsx)(f.$, {
                          size: "sm",
                          variant: "secondary",
                          text: ej.intl.string(eb.default.Vmb0K4),
                          onClick: l.onSkip,
                          disabled: n,
                      }),
                  ],
              }),
          });
}
var mV = n(409478),
    mX = n(652227);
function mY(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            frameLaunchParams: r,
            previewReady: i,
            previewGate: s,
            availability: o,
            activeMode: u,
            widgetApplicationId: d,
            overlayWidgetSize: f = eG,
            projectId: m,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([rk.A], () => null != m && null != rk.A.getSetupStartedAt(m), [m]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: mX.qs, children: (0, a.jsx)(v.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: mX.qs,
                children: (0, a.jsx)(mW, { onAddBot: s.onAddBot, loading: s.loading, agentPrompt: s.agentPrompt }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: mX.RG,
                      children: [
                          (0, eH.yf)(o, u)
                              ? g
                                  ? (0, a.jsx)(mQ, { projectId: m, onResume: p })
                                  : (0, a.jsx)(mS, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === u && null != d
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: mX.qs,
                                        children: (0, a.jsx)(mw, {
                                            wide: !0,
                                            title: ej.intl.string(eb.default["08U+YO"]),
                                            body: ej.intl.string(eb.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(mV.A, { applicationId: d })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(mK, { applicationId: t, projectId: m, size: f, frameOverlay: h?.(tf.ZN) })
                              : null,
                          "bot" === u && null != n && null != m
                              ? (0, a.jsx)(mT, { projectId: m, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: mX.qs, children: (0, a.jsx)(v.y, {}) })
              : (0, a.jsx)(mr, { className: mX.qs });
}
function mQ(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mm.Pu)(t),
        (0, a.jsx)("div", {
            className: mX.qs,
            children: (0, a.jsx)(mw, {
                wide: !0,
                title: ej.intl.string(eb.default.MMWEH2),
                body: ej.intl.string(eb.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(f.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mf.PlayIcon,
                              text: ej.intl.string(eb.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var mZ = n(175841),
    mJ = n(156548),
    m0 = n(750506),
    m1 = n(867193),
    m2 = n(539197),
    m3 = n(977020);
function m4(e) {
    let { projectId: t } = e,
        n = (0, m2.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, m2.Ie)(e);
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
    let { left: r, top: s, width: o, height: c, scale: d } = l;
    function f(e, t) {
        return { "--custom-conjure-cursor-x": `${e * d}px`, "--custom-conjure-cursor-y": `${t * d}px` };
    }
    return (0, a.jsxs)("div", {
        className: m3.$Q,
        style: { left: r, top: s, width: o, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [m2.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: u()(m3.hN, m3.vW), style: f(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: u()(m3.hN, m3.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: u()(m3.UE, { [m3.SP]: n.shown, [m3.Vq]: n.pressed, [m3.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var m5 = n(417760);
function m7(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([rL.A], () => null != e && rL.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, ey.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        o = (0, eC.CU)(n),
        d = "controlling" === t,
        m = ej.intl.string(d ? (o ? eb.default["VJW/5P"] : eb.default["+hD2Iz"]) : eb.default["h+i1r9"]),
        h =
            null != r
                ? (0, a.jsx)(f.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ej.intl.string(eb.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: u()(m5.M0, m5.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, a.jsx)(c_.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(mZ.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(x.E, { variant: "body-sm/semibold", color: "none", className: m5.ID, children: m }),
                  d ? (0, a.jsx)(nL.A, { children: ej.intl.string(eb.default.fg1sor) }) : null,
                  d ? (0, a.jsx)("div", { className: m5.lC, children: h }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: m5.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: m5.sp,
                      children: [
                          (0, a.jsx)(mZ.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, a.jsx)(c_.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: m5.f4,
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: m5.w9,
                                      children: m,
                                  }),
                                  d
                                      ? (0, a.jsx)(x.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: m5.Rb,
                                            children: ej.intl.string(eb.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, a.jsx)("div", { className: m5.lC, children: h }) : null,
              ],
          });
}
function m8(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, eC.Zv)(null != n && n === l ? t : null),
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
        c = (0, e_.Rv)(),
        d = (0, mJ.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, mJ.BL)(s);
    }, [o, d, s]);
    let [f, m] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = tW(r());
            m((t) => (tV(t, e) ? t : e));
            let t = null == h ? null : tW(h);
            (x((e) => (tV(e, t) ? e : t)), null != h && (0, m1.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, m1.C)(0));
            }
        );
    }, [v, r, h]);
    let b = "idle" !== u && null != f,
        j = b && "controlling" === u && !c,
        y = null != f && f.width < 420,
        k = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        w =
            null == f
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
                  })(f, p),
        A = (function () {
            let [e] = i.useContext(m0.uY),
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
            b
                ? (0, a.jsx)("div", {
                      ref: g,
                      className: m5.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: m5.QF,
                          children: (0, a.jsx)(m7, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, tq.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(nL.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? ej.intl.string(eb.default.oWcemF)
                                : "handoff" === u
                                  ? ej.intl.string(eb.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            j
                ? (0, tq.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: m5.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: m5.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(m4, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var m9 = n(399503),
    m6 = n(853555),
    he = n(944100),
    ht = n(327152),
    hn = n(187645);
let hl = { width: 1280, height: 720 },
    hr = new Map(),
    ha = !1;
function hi() {
    let e = new Map();
    for (let t of new Set([...rL.A.getActivityOrderedProjectIds(), ...(0, eC.T7)()])) {
        if (!(rL.A.isThinking(t) || (0, eC.wK)(t)) || eF.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = ts.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, td.Rc)(t), (0, td.Th)(t)].find(tf.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...hr]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            hr.delete(t),
            n.unregisterLookup(),
            he.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, ht.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        hr.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = hn.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    hs(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (hr.set(e, l),
                    (l.unregisterLookup = (0, m6.Ng)(e, () => (0, ma.n5)(n, t))),
                    he.A.registerFrameTarget(t, n, mh.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of hr) hs(t.element, e, t.frameId);
}
function hs(e, t, n) {
    if (f6.A.getFrame(n)?.surface.type === eW.U.OVERLAY) {
        let l = eB(ts.Ay.getProject(t));
        (e.classList.remove(hn.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, ht.Pn)(n, l));
        return;
    }
    let l = tc.A.isBuilderPreviewMobile();
    e.classList.toggle(hn.L, !l);
    let r = l ? mb(tc.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, ht.Pn)(n, r ?? hl));
}
var ho = n(873727),
    hu = n(47671),
    hc = n(418842),
    hd = n(413599);
let hf = 0;
var hm = n(487887);
let hh = null;
var hg = n(780338),
    hp = n(782603),
    hx = n(189714);
function hv(e) {
    let { projectId: t } = e,
        n = (0, hx.iI)(t),
        l = i.useRef(null),
        r = ej.intl.string(ej.t.h850Ss);
    return (0, a.jsx)(tC.Y, {
        targetElementRef: l,
        animation: tC.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(ty.W, {
                "data-menu-migrated": !0,
                navId: `conjure-project-notifications-${t}`,
                "aria-label": r,
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(tk.rX, {
                    children: (0, a.jsx)(tk.Dr, {
                        id: n ? "unmute" : "mute",
                        label: ej.intl.string(n ? eb.default.s9rCuH : eb.default["a+i/As"]),
                        action: () => (0, hx.$L)(t, !n),
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: i } = e,
                { isShown: s } = t;
            return (0, a.jsx)(t$.Ay.Icon, {
                ref: l,
                onClick: i,
                tooltip: s ? null : r,
                icon: n ? hg.BellSlashIcon : hp.BellIcon,
                "aria-label": r,
                "aria-haspopup": "menu",
                "aria-expanded": s,
                selected: s,
            });
        },
    });
}
var hb = n(541940);
function hj(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            mainClassName: o,
            header: d,
            controlBar: f,
            previewPanelId: m,
            previewPanelLabelledBy: h,
            content: g,
            sidebar: p,
            showsFrame: x,
            paused: v,
        } = e,
        [b, j] = i.useState(null),
        y = (0, tu.A)(l, s),
        k = y?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([hd.A], () => (0, ho.x4)(hd.A.theme)),
            l = (0, c.bG)([hu.A], () => hu.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([id.Ay], () => ({
                reducedMotion: id.Ay.useReducedMotion,
                fontScale: (0, ho.U0)(),
                highContrast: id.Ay.isHighContrastModeEnabled,
                forcedColors: id.Ay.useForcedColors,
                underlineLinks: id.Ay.alwaysShowLinkDecorations,
            })),
            d = me.hH.useSetting(),
            f = (0, c.bG)([oo.A], () => oo.A.hidePersonalInformation),
            m = (0, hc.C)(),
            h = (0, c.bG)(
                [f6.A, tc.A],
                () =>
                    tc.A.isBuilderPreviewMobile() &&
                    f6.A.getFrame(t)?.applicationId === tc.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = i.useRef(!1),
            p = i.useRef(!1),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, ma.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++hf,
                    baseTheme: n,
                    customTheme: (0, ho.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                    formFactor: h,
                    hidePersonalInformation: f,
                };
                (0, fH.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, a, h, t, f, s, d, e, r, m, u]),
            b = i.useRef(v);
        i.useLayoutEffect(() => {
            b.current = v;
        });
        let j = i.useCallback(() => {
            g.current ||
                ((g.current = !0),
                queueMicrotask(() => {
                    ((g.current = !1), p.current || b.current());
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
                j();
            }, [l, j]),
            i.useLayoutEffect(() => {
                (v(), j());
            }, [j, v]),
            i.useLayoutEffect(() => {
                let n = (0, ma.n5)(e, t);
                null != n && n !== x.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, ma.n5)(e, t) && ((x.current = null), j());
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
    })(b, k),
        i.useEffect(() => {
            if (null != t) return (0, m6.Ng)(t, () => (0, ma.n5)(b, k));
        }, [t, b, k]));
    let w = i.useCallback(() => (0, ma.ow)(b, k), [b, k]),
        A = i.useCallback(() => (x ? (0, ma.ow)(b, k) : b), [x, b, k]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: u()(hb.Mh, o),
                children: [
                    d,
                    f,
                    v
                        ? null
                        : (0, a.jsx)(m8, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: A,
                              frameId: k,
                          }),
                    (0, a.jsx)("div", {
                        ref: j,
                        id: m,
                        role: null == m ? void 0 : "tabpanel",
                        "aria-labelledby": h,
                        className: hb.fm,
                        children: g,
                    }),
                ],
            }),
            p,
            v
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(f0, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: w,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(ny, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: w }),
                      ],
                  }),
        ],
    });
}
function hy(e) {
    let t,
        {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: o,
            frameLaunchParams: d,
            header: f,
            controlBar: m,
            previewPanelId: h,
            previewPanelLabelledBy: g,
            chatOpen: p,
            onCloseChat: x,
            onRestoreVersion: v,
            onImportProject: b,
            debugOpen: j = !1,
            onCloseDebug: y,
            restoreState: k,
            previewReady: w,
            previewGate: A,
            availability: S,
            activeMode: C,
            widgetApplicationId: N,
            overlayWidgetSize: I,
            previewPaused: E = !1,
            onResumePreview: _,
        } = e;
    (0, m9.k)(n, N);
    let M = o.type === eW.U.MAIN || (0, td.Q5)(o);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([tc.A], () => ({
            mobile: tc.A.isBuilderPreviewMobile(),
            landscape: tc.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? hm.aX.LANDSCAPE : hm.aX.PORTRAIT), (hh = e));
                else {
                    if (hh !== e) return;
                    ((l = hm.aX.UNHANDLED), (hh = null));
                }
                uS.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? r : null);
    let R = i.useRef(null),
        [P, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == n) return;
        (0, nw.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, nw.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = i.useRef(0)),
        i.useLayoutEffect(() => {
            M && ((t.current = ++md), (0, eq.HV)(r));
        }, [r, M]),
        i.useEffect(() => {
            if (!M) return;
            let e = t.current;
            return () => {
                e === md && (0, eq.HV)(null);
            };
        }, [r, M]),
        i.useEffect(() => {
            null != n &&
                ((0, ey.ensureConnection)(n),
                ha ||
                    ((ha = !0),
                    rL.A.addChangeListener(hi),
                    ts.Ay.addChangeListener(hi),
                    f6.A.addChangeListener(hi),
                    tc.A.addChangeListener(hi),
                    eF.A.addChangeListener(hi),
                    (0, eC.W3)(hi),
                    hi()));
        }, [n]),
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
    let L = Math.max(450, P - 320),
        $ = (0, tD.P)({ maxWidth: L, minWidth: 450 }),
        D = p || M;
    return (0, a.jsx)("div", {
        className: hb.cL,
        children: (0, a.jsx)("div", {
            ref: R,
            className: hb.LB,
            children: (0, a.jsx)(hj, {
                projectId: n,
                designFeedbackToggleRef: l,
                applicationId: r,
                previewApplicationId: s,
                surface: o,
                header: f,
                controlBar: m,
                previewPanelId: h,
                previewPanelLabelledBy: g,
                showsFrame: (0, eH.yf)(S, C),
                paused: E,
                mainClassName: null == f ? void 0 : u()(hb.ez, { [hb.zt]: p }),
                content: (0, a.jsx)(mY, {
                    applicationId: r,
                    previewApplicationId: s,
                    surface: o,
                    frameLaunchParams: d,
                    previewReady: w,
                    previewGate: A,
                    availability: S,
                    activeMode: C,
                    widgetApplicationId: N,
                    overlayWidgetSize: I,
                    projectId: n,
                    paused: E,
                    onResume: _,
                    renderFrameOverlay: (e) =>
                        (0, a.jsx)(mc, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
                }),
                sidebar:
                    null != n && D
                        ? (0, a.jsx)("div", {
                              className: p ? u()(hb.v7, { [hb.z4]: $, [hb.iu]: $ && null != m }) : hb.LL,
                              children: (0, a.jsx)(tL.A, {
                                  sidebarType: tL.X.CallChatSidebar,
                                  maxWidth: L,
                                  capturePointer: !0,
                                  children: (0, a.jsx)("div", {
                                      className: hb.cO,
                                      children: j
                                          ? (0, a.jsx)(fO, { projectId: n, onClose: y ?? (() => {}) }, n)
                                          : (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(f9.Ay, { projectId: n }),
                                                    (0, a.jsx)(hk, { projectId: n, onClose: x }),
                                                    (0, a.jsx)("div", {
                                                        className: hb.cb,
                                                        children: (0, a.jsx)(
                                                            c2,
                                                            {
                                                                projectId: n,
                                                                restoreState: k,
                                                                onRestoreVersion: v,
                                                                onImportProject: b,
                                                                escapeScopeRef: R,
                                                                visible: p,
                                                            },
                                                            n,
                                                        ),
                                                    }),
                                                ],
                                            }),
                                  }),
                              }),
                          })
                        : null,
            }),
        }),
    });
}
function hk(e) {
    let { projectId: t, onClose: n } = e,
        l = ej.intl.string(eb.default.vLoFRs),
        r = ej.intl.string(eb.default.JD6Oit);
    return (0, a.jsx)(t$.Ay, {
        "aria-label": l,
        toolbar: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(hv, { projectId: t }),
                (0, a.jsx)(t$.Ay.Icon, { icon: tT.PanelClosedIcon, tooltip: r, "aria-label": r, onClick: n }),
            ],
        }),
        children: (0, a.jsx)(t$.Ay.Title, { children: l }),
    });
}
var hw = n(473935),
    hA = n(785389),
    hS = n(889558),
    hC = n(860402);
let hN = new Set();
var hI = n(733791),
    hE = n(127139),
    h_ = n(256616),
    hM = n(719588);
function hR(e) {
    (0, ep.P0)({ text: e, variant: "critical" });
}
function hP(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            isOwner: r,
            onExport: s,
            onHistory: o,
            onConnectTool: u,
            onToggleDebug: d,
            debugOpen: f,
            onCloseMenu: m,
        } = e,
        h = (0, hM.A)(t, n),
        g = (0, hI.CU)(t),
        p = (0, tp.UC)(t),
        { pending: x, connect: v } = (function (e, t) {
            let [n, l] = i.useState(hN),
                r = i.useRef(hN),
                a = i.useCallback((e) => {
                    ((r.current = (0, hA.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, hA.K9)(r.current, n.type);
                        null != i &&
                            ((r.current = i),
                            l(i),
                            (async function () {
                                let l = await (0, hC.JI)(e, n.type);
                                (a(n.type), "url" === l.type)
                                    ? (0, hS.h)({ href: l.url, trusted: !1 })
                                    : t(
                                          "setup" === (0, hA.rq)(l.error)
                                              ? ej.intl.string(eb.default["jCQ/1B"])
                                              : ej.intl.string(eb.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(t, hR),
        b = (0, c.bG)([rT.A], () => rT.A.getDeclaredConnections(t), [t]),
        j = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: ej.intl.string(eb.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ej.intl.formatToPlainString(eb.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ej.intl.formatToPlainString(eb.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: !1, refreshPending: !1, offers: i.useMemo(() => (0, hA.Xl)(b), [b]), connectPending: x }),
        y = i.useMemo(() => new Map(b.map((e) => [e.type, e])), [b]);
    return (0, a.jsxs)(ty.W, {
        "data-menu-migrated": !0,
        navId: `conjure-editor-actions-${t}`,
        "aria-label": ej.intl.string(ej.t.ogxXGq),
        onClose: m,
        onSelect: m,
        children: [
            (0, a.jsxs)(tk.rX, {
                children: [
                    (0, a.jsx)(tk.Dr, { id: "export", label: ej.intl.string(eb.default.WsEEP7), action: s }),
                    (0, a.jsx)(tk.Dr, { id: "history", label: ej.intl.string(eb.default["3hIVou"]), action: o }),
                ],
            }),
            uY.p5 || null != d
                ? (0, a.jsxs)(tk.rX, {
                      children: [
                          uY.p5
                              ? (0, a.jsx)(tk.Dr, {
                                    id: "copy-link",
                                    label: ej.intl.string(ej.t.WqhZss),
                                    icon: l9.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: l9.LinkIcon },
                                    action: () => (0, hE.V)(l, t),
                                })
                              : null,
                          uY.p5
                              ? (0, a.jsx)(tk.Dr, {
                                    id: "copy-project-id",
                                    label: ej.intl.string(eb.default["nm/zuU"]),
                                    icon: hw.IdIcon,
                                    leadingAccessory: { type: "icon", icon: hw.IdIcon },
                                    action: () => (0, hE.o)(t),
                                })
                              : null,
                          null != d
                              ? (0, a.jsx)(tk.sL, {
                                    id: "debug",
                                    label: ej.intl.string(eb.default.Mt5k9d),
                                    leftIcon: uX.BugIcon,
                                    leadingAccessory: { type: "icon", icon: uX.BugIcon },
                                    checked: f,
                                    action: d,
                                })
                              : null,
                      ],
                  })
                : null,
            null != u || j.length > 0
                ? (0, a.jsxs)(tk.rX, {
                      children: [
                          null != u
                              ? (0, a.jsx)(tk.Dr, {
                                    id: "connect-tool",
                                    label: ej.intl.string(eb.default.yOIql5),
                                    action: u,
                                })
                              : null,
                          j.map((e) =>
                              (0, a.jsx)(
                                  tk.Dr,
                                  {
                                      id: e.id,
                                      label: e.label,
                                      disabled: e.disabled,
                                      dontCloseOnAction: !0,
                                      action: () => {
                                          let t = null == e.connectionType ? null : y.get(e.connectionType);
                                          null != t && v(t);
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                      ],
                  })
                : null,
            r
                ? (0, a.jsxs)(tk.rX, {
                      children: [
                          g
                              ? (0, a.jsx)(tk.Dr, {
                                    id: "unpublish",
                                    label: ej.intl.string(eb.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        let e = ts.Ay.getProject(t);
                                        null != e && (0, h_.A)({ project: e });
                                    },
                                })
                              : null,
                          (0, a.jsx)(tk.Dr, {
                              id: "delete",
                              label: ej.intl.string(ej.t.oyYWHE),
                              color: "danger",
                              action: h,
                          }),
                      ],
                  })
                : null,
            null != p
                ? (0, a.jsx)(tk.rX, {
                      children: (0, a.jsx)(tk.Dr, {
                          id: "unpublish-from-server",
                          label: ej.intl.string(eb.default.mS61Dm),
                          color: "danger",
                          action: () => {
                              let e = ts.Ay.getProject(t);
                              null != e && (0, tA.A)({ project: e, target: p, action: "remove" });
                          },
                      }),
                  })
                : null,
        ],
    });
}
function hT(e) {
    let t = i.useRef(null),
        n = ej.intl.string(ej.t["UKOtz+"]);
    return (0, a.jsx)(tC.Y, {
        targetElementRef: t,
        position: "bottom",
        align: "right",
        animation: tC.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, a.jsx)(hP, { ...e, onCloseMenu: n });
        },
        children: (e, l) => {
            let { onClick: r } = e,
                { isShown: i } = l;
            return (0, a.jsx)(j.A.Icon, {
                ref: t,
                icon: iL.MoreHorizontalIcon,
                tooltip: i ? null : n,
                "aria-label": n,
                "aria-haspopup": "menu",
                "aria-expanded": i,
                selected: i,
                onClick: r,
            });
        },
    });
}
var hL = n(663417),
    h$ = n(646270),
    hD = n(31300),
    hq = n(831453),
    hF = n(872344),
    hO = n(64656),
    hG = n(766367),
    hz = n(113494),
    hU = n(86147),
    hB = n(729475),
    hK = n(12470),
    hH = n(811893),
    hW = n(387758),
    hV = n(715482),
    hX = n(429582),
    hY = n(869146),
    hQ = n(475815);
function hZ(e) {
    let {
            projectId: t,
            previewPaused: n,
            pauseDisabled: l,
            onTogglePreviewPaused: r,
            drawing: i,
            fullscreenFrame: s,
            onTogglePopout: o,
            poppedOut: u,
            onCloseMenu: d,
        } = e,
        f = (function (e, t) {
            let n = (0, mJ.cR)(e?.id ?? null),
                l = (0, eC.Zv)(t),
                r = (0, c.bG)(
                    [hY.A, f6.A],
                    () => null != e && hY.A.getWindowOpen(ls.MLl.ACTIVITY_POPOUT) && f6.A.getMainFrame()?.id === e.id,
                    [e],
                );
            if (!(0, tf.x1)(e) || r || l) return null;
            let a = (0, mJ.fl)(e.id);
            return null != a && (0, hQ.Ub)(a) ? { active: n, toggle: () => (0, mJ.U8)(e.id) } : null;
        })(s, t),
        m = n ? mf.PlayIcon : hz.PauseIcon,
        h = f?.active === !0 ? hU.FullscreenExitIcon : hB.FullscreenEnterIcon,
        g = u ? hK.WindowReturnIcon : hH.WindowLaunchIcon,
        p = ej.intl.string(eb.default.WjdaFw),
        x = (0, m6.UJ)(t),
        v = null != x ? (0, hX.FO)(x) : null;
    return (0, a.jsx)(ty.W, {
        "data-menu-migrated": !0,
        navId: `conjure-frame-actions-${t}`,
        "aria-label": ej.intl.string(ej.t.ogxXGq),
        onClose: d,
        onSelect: d,
        children: (0, a.jsxs)(tk.rX, {
            children: [
                (0, a.jsx)(tk.Dr, {
                    id: "toggle-pause",
                    icon: m,
                    leadingAccessory: { type: "icon", icon: m },
                    label: ej.intl.string(n ? eb.default.ZKd2Cw : eb.default.VHxerm),
                    subtext: i ? p : void 0,
                    disabled: l || i,
                    action: r,
                }),
                null != f
                    ? (0, a.jsx)(tk.Dr, {
                          id: "toggle-fullscreen",
                          icon: h,
                          leadingAccessory: { type: "icon", icon: h },
                          label: ej.intl.string(f.active ? ej.t.Z7MyNB : ej.t.OIDkcp),
                          action: f.toggle,
                      })
                    : null,
                null != o
                    ? (0, a.jsx)(tk.Dr, {
                          id: "toggle-popout",
                          icon: g,
                          leadingAccessory: { type: "icon", icon: g },
                          label: ej.intl.string(u ? ej.t["NKV/MO"] : ej.t["3Zypbv"]),
                          subtext: i && !u ? p : void 0,
                          disabled: i && !u,
                          action: o,
                      })
                    : null,
                null != v
                    ? (0, a.jsx)(tk.Dr, {
                          id: "open-devtools",
                          icon: hW.AngleBracketsIcon,
                          leadingAccessory: { type: "icon", icon: hW.AngleBracketsIcon },
                          label: ej.intl.string(eb.default.gQB2mY),
                          action: v,
                      })
                    : null,
            ],
        }),
    });
}
function hJ(e) {
    let t = i.useRef(null),
        n = ej.intl.string(ej.t["UKOtz+"]);
    return (0, a.jsx)(tC.Y, {
        targetElementRef: t,
        position: "bottom",
        align: "right",
        animation: tC.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, a.jsx)(hZ, { ...e, onCloseMenu: n });
        },
        children: (e, l) => {
            let { onClick: r } = e,
                { isShown: i } = l;
            return (0, a.jsx)(t$.Ay.Icon, {
                ref: t,
                icon: hV.ChevronLargeDownIcon,
                tooltip: i ? null : n,
                "aria-label": n,
                "aria-haspopup": "menu",
                "aria-expanded": i,
                selected: i,
                onClick: r,
            });
        },
    });
}
var h0 = n(705609);
function h1(e) {
    let {
            projectId: t,
            projectName: n,
            toolbar: l,
            activeMode: r,
            activeTarget: i,
            frameTarget: s,
            onCloseApp: o,
            widgetRefreshApplicationId: u,
            previewPaused: c,
            onTogglePreviewPaused: d,
            onTogglePopout: f,
            poppedOut: m,
            agentDrivingPreview: h,
            previewControlsBlocked: g,
            blockedPreviewControlLabel: p,
            previewPanelId: x,
            editToggle: v,
        } = e,
        {
            previewTargetOptions: b,
            handleSelectPreviewTarget: j,
            previewFrame: y,
            refreshFrame: k,
            isRefreshing: w,
            handleRefresh: A,
            mobilePreview: S,
            mobilePreviewLabel: C,
            handleToggleMobilePreview: N,
            landscapePreview: I,
            rotatePreviewLabel: E,
            handleRotatePreview: _,
        } = l,
        M = (0, hO.A)(y?.id),
        { pending: R, refresh: P } = (0, hF.A)(u),
        T = eh(t) && !c,
        L = null;
    if ("widget" === r) {
        if (null != u) {
            let e = ej.intl.string(eb.default["/nOi5n"]);
            L = (0, a.jsx)(t$.Ay.Icon, { icon: hL.RefreshIcon, tooltip: e, "aria-label": e, disabled: R, onClick: P });
        }
    } else if ((0, tf.x1)(k)) {
        let e = ej.intl.string(eb.default.FZIHQN);
        L = (0, a.jsx)(t$.Ay.Icon, { icon: hL.RefreshIcon, tooltip: e, "aria-label": e, disabled: w, onClick: A });
    }
    let $ = p(C),
        D = p(E),
        q = S ? h$.MobilePhoneIcon : hD.ScreenIcon;
    return (0, a.jsxs)("div", {
        className: h0.M,
        children: [
            (0, a.jsx)(tn, {
                targets: b,
                activeTarget: i,
                projectName: n,
                onSelect: j,
                closableTarget: M ? s : null,
                onClose: o,
                panelId: x,
            }),
            (0, a.jsxs)("div", {
                className: h0.o,
                children: [
                    v,
                    L,
                    "frame" === r
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(hG.A, { frame: y }),
                                  S
                                      ? (0, a.jsx)(t$.Ay.Icon, {
                                            icon: hq.RotateIcon,
                                            tooltip: D,
                                            "aria-label": D,
                                            selected: I,
                                            disabled: g,
                                            onClick: _,
                                        })
                                      : null,
                                  (0, a.jsx)(t$.Ay.Icon, {
                                      icon: q,
                                      tooltip: $,
                                      "aria-label": $,
                                      disabled: g,
                                      onClick: N,
                                  }),
                                  (0, a.jsx)(hJ, {
                                      projectId: t,
                                      previewPaused: c,
                                      pauseDisabled: !c && h,
                                      onTogglePreviewPaused: d,
                                      drawing: T,
                                      fullscreenFrame: c ? null : y,
                                      onTogglePopout: f,
                                      poppedOut: m,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
var h2 = n(705427),
    h3 = n(606128),
    h4 = n(323140);
function h5(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: o, onBack: v, guildId: w } = e,
        A = i.useContext(eL.A),
        [S] = i.useState(() => (null != A ? eD.A.getProjectView(A) : null)),
        [C, N] = i.useState(S?.chatOpen ?? !0),
        [I, E] = i.useState(S?.debugOpen ?? !1);
    i.useEffect(() => {
        null != A && (0, e$.g7)(A, { chatOpen: C, debugOpen: I });
    }, [A, C, I]);
    let _ = i.useCallback(
            (e) => {
                null != A && (0, e$.g7)(A, { previewSelection: e });
            },
            [A],
        ),
        M = (0, eS.Qy)(),
        R = (0, eN.f)("ConjureSelectedProjectScreen"),
        P = i.useCallback(() => N(!0), []),
        T = i.useCallback(() => {
            (E(!1), N(!0));
        }, []),
        { restoreState: L, handleRestoreVersion: $ } = (function (e, t) {
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
                                (0, eR.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, ep.P0)({
                                                        text: ej.intl.formatToPlainString(eb.default.Z4n6LX, {
                                                            title: (0, eM.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, eP.c)(u, r);
                                                null != e && (0, ep.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, ep.P0)({
                                                    text: ej.intl.string(eb.default["PSdo+w"]),
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
        })(s, T),
        q = s?.id ?? null,
        O = (0, eT.bP)(),
        G = O?.blocking === !0 && O.projectId === q,
        {
            integrationStatus: z,
            isPreviewApplicationLoading: B,
            checkingIntegration: K,
            previewReady: H,
            hasFrame: W,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [ts.Ay, ti.A],
                    () => (null == l ? null : (ts.Ay.getIntegrationStatus(l) ?? ti.A.getIntegrationStatus(l))),
                    [l],
                ),
                o = e?.preview_application_id ?? null,
                { isLoading: u } = (0, tr.YY)(o ?? void 0),
                d = null != l && t !== l,
                f = s?.preview_ready === !0,
                m = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, eH.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: s?.integration_installed ?? null,
                    botPermissionsChanged: h,
                });
            i.useEffect(() => {
                g &&
                    !d &&
                    null != o &&
                    (async function (e) {
                        try {
                            await (0, tr.TA)(e);
                        } catch {}
                    })(o);
            }, [h, d, g, o]);
            let p = i.useCallback(async () => {
                if (null == l || r.current !== l) return;
                a.current?.abort();
                let e = new AbortController();
                ((a.current = e), n(null));
                try {
                    await ((0, ta.CG)(l)?.catch(() => (0, ta.U1)(l, e.signal)) ?? (0, ta.U1)(l, e.signal));
                } catch {
                } finally {
                    e.signal.aborted || a.current !== e || r.current !== l || n(l);
                }
            }, [l]);
            return (
                i.useEffect(
                    () => (
                        p(),
                        () => {
                            (a.current?.abort(), (a.current = null));
                        }
                    ),
                    [p],
                ),
                {
                    integrationStatus: s,
                    isPreviewApplicationLoading: u,
                    checkingIntegration: d,
                    previewReady: f,
                    hasFrame: m,
                }
            );
        })(s),
        V =
            (0, c.bG)([tv.A], () => (null == q ? void 0 : tv.A.getPublishStatus(q)?.previewAppChannels), [q]) ??
            z?.preview_app_channels,
        X = (0, c.bG)([tv.A], () => (null == q ? null : (tv.A.getPublishStatus(q)?.publishState ?? null)), [q]),
        Y = (0, c.bG)(
            [ey.Ay],
            () => {
                if (null == q) return !1;
                let e = ey.Ay.getConnState(q);
                return "failed" === e || "closed" === e;
            },
            [q],
        ),
        Q = (0, c.bG)([y.default], () => y.default.getCurrentUser()?.id),
        Z = (0, c.bG)([ey.Ay], () => null != q && ey.Ay.isAccessRefused(q, Q), [q, Q]),
        {
            availability: J,
            activeMode: ee,
            setMode: et,
            frameSurface: en,
            frameSurfaceOptions: es,
            setFrameSurface: eo,
            appChannel: ef,
            setAppChannel: em,
            frameLaunchParams: ek,
            widgetApplicationId: ew,
        } = (0, eZ.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: W,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: z?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(eO.q7.OVERLAY) === !0,
            previewAppChannels: V,
            initialSelection: S?.previewSelection,
            onSelectionChange: _,
        }),
        eG = eB(s);
    ((0, eK.x)(q, (e) => {
        J.modes.includes(e) && et(e);
    }),
        eA(q, () => {
            (N(!0), E(!0));
        }));
    let ez = J.modes.includes("frame"),
        eU = (0, c.bG)([eF.A], () => eF.A.isPaused(q), [q]),
        eV = (function (e) {
            let {
                    project: t,
                    modes: n,
                    activeMode: l,
                    frameSurface: r,
                    frameSurfaceOptions: a,
                    previewAppChannels: s,
                    setMode: o,
                    setFrameSurface: u,
                    setAppChannel: d,
                } = e,
                f = i.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return e.flatMap((e) =>
                                "frame" === e
                                    ? t.flatMap((t) =>
                                          t === eW.U.APP_CHANNEL && n.length > 1
                                              ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                              : [{ mode: e, surface: t }],
                                      )
                                    : [{ mode: e }],
                            );
                        })(n, a, s),
                    [n, a, s],
                ),
                m = i.useCallback(
                    (e) => {
                        ("frame" === e.mode && (u(e.surface), null != e.appChannel && d?.(e.appChannel)), o(e.mode));
                    },
                    [d, u, o],
                ),
                h = (0, c.bG)([tc.A], () => tc.A.isBuilderPreviewMobile()),
                g = ej.intl.string(h ? eb.default.tKGF0Q : eb.default.peqEOY),
                p = i.useCallback(() => (0, eq.GG)(!h), [h]),
                x = (0, c.bG)([tc.A], () => tc.A.isBuilderPreviewLandscape()),
                v = ej.intl.string(x ? eb.default.tunI2l : eb.default.DoNdjA),
                b = i.useCallback(() => (0, eq.Lw)(!x), [x]),
                j = (0, td.jS)(t),
                y = i.useMemo(() => (0, td.Op)(j, r), [j, r]),
                k = (0, tu.A)(t?.preview_application_id ?? null, y),
                w = (0, tu.A)(t?.preview_application_id ?? null, tf.ZN),
                A = "overlay" === l ? w : k,
                S = (0, tf.x1)(A) && A.data.proxyTicketRefreshing,
                C = i.useCallback(() => {
                    null == A || S || to.A.refreshProxyTicket(A.id);
                }, [A, S]);
            return {
                previewTargetOptions: f,
                handleSelectPreviewTarget: m,
                mobilePreview: h,
                mobilePreviewLabel: g,
                handleToggleMobilePreview: p,
                landscapePreview: x,
                rotatePreviewLabel: v,
                handleRotatePreview: b,
                previewSurface: y,
                previewFrame: k,
                refreshFrame: A,
                isRefreshing: S,
                handleRefresh: C,
            };
        })({
            project: s,
            modes: J.modes,
            activeMode: ee,
            frameSurface: en,
            frameSurfaceOptions: es,
            previewAppChannels: V,
            setMode: et,
            setFrameSurface: eo,
            setAppChannel: em,
        }),
        { previewSurface: eX, previewFrame: eY } = eV,
        eQ = (0, b.A)(eY),
        eJ = ez && !eU,
        e0 = eh(q),
        e1 = eQ.isPoppedOut ? eb.default.pmkK8i : eU ? eb.default.Yet11p : null,
        e2 = null != e1;
    function e3(e) {
        return null == e1 ? e : ej.intl.formatToPlainString(e1, { label: e });
    }
    let e4 = i.useCallback(() => N(!1), []),
        {
            designFeedbackActive: e5,
            designFeedbackToggleRef: e7,
            agentDrivingPreview: e8,
            designFeedbackLabel: e9,
            handleToggleDesignFeedback: te,
        } = (function (e, t, n) {
            let { active: l } = U(e);
            i.useEffect(() => {
                null != e && l && !t && F(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, eC.Zv)(e),
                s = ej.intl.string(a ? eb.default.Sme0T0 : l ? eb.default.vn5Rzu : eb.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void F(e);
                        (n(), D(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(q, eJ && (!eQ.isPoppedOut || e0), T),
        [tt] = i.useState(() => k.isPlatformEmbedded && (0, tl.qM)());
    i.useEffect(() => {
        null != q && e0 && !eJ && ec(q);
    }, [q, e0, eJ]);
    let tn = i.useCallback(() => {
            null != q &&
                (T(),
                (function (e) {
                    let t = ea(e);
                    if (null != t) {
                        t.active || ei(e, (e) => ({ ...e, active: !0, keptStill: null }));
                        return;
                    }
                    let { byProject: n } = el.getState();
                    el.setState({ byProject: { ...n, [e]: er } });
                })(q),
                ed(q, "marker"));
        }, [q, T]),
        tC = i.useCallback(() => {
            null != q && eu(q);
        }, [q]),
        tN =
            e2 && !e0
                ? e3(ej.intl.string(eb.default["XWU+XF"]))
                : ej.intl.string(e0 ? eb.default.tuQ5f3 : e8 ? eb.default.agwlrD : eb.default["XWU+XF"]),
        tI = e2 ? e3(ej.intl.string(eb.default["cl/Jyl"])) : e9,
        tE = i.useCallback(() => {
            E((e) => !e && (N(!0), !0));
        }, []),
        t_ = i.useCallback(() => E(!1), []),
        tM = i.useCallback(() => {
            null != q && (0, eq._j)(q);
        }, [q]),
        tT = i.useCallback(() => {
            null != q && (eU ? (0, eq._j)(q) : (0, eq.di)(q, eY?.id));
        }, [q, eU, eY?.id]),
        tL = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eY?.id), (0, ey.Bn)(e), (0, tx.r)(t)), v());
        }, [s, eY?.id, v]),
        t$ =
            ((t = (0, ev.z)(s)),
            (l = i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, ex.vt)(e);
                    null != n
                        ? (0, ep.P0)({ text: n, variant: "critical" })
                        : (0, eg.A)({
                              title: ej.intl.formatToPlainString(eb.default["Gm+u1+"], { name: s.name }),
                              subtitle: ej.intl.string(eb.default.M7H3sJ),
                              confirmText: ej.intl.string(eb.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  P();
                                  try {
                                      await (0, ex.Hj)(t, e, ej.intl.string(eb.default.Owerd3));
                                  } catch {
                                      (0, ep.P0)({ text: ej.intl.string(eb.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, P],
            )),
            { onExport: t, onImport: (r = (0, ex.yN)(l)).open, importInput: r.input }),
        tD = i.useCallback(async () => {
            null != q && (await (0, tm.vL)(q, w));
        }, [w, q]),
        tq = (function (e, t) {
            let n = (0, c.bG)([th.A], () => (null == e ? null : th.A.getPrompt(e)), [e]),
                [l, r] = i.useState(!1),
                a = n?.id ?? null,
                s = i.useCallback(async () => {
                    if (null != e && null != a) {
                        r(!0);
                        try {
                            await (0, tm.vL)(e, t);
                        } finally {
                            r(!1);
                        }
                        (0, tg.aS)(e) && (0, tg.xy)(e, a, "added");
                    }
                }, [a, t, e]),
                o = i.useCallback(() => {
                    null != e && null != a && (0, tg.xy)(e, a, "skipped");
                }, [a, e]);
            return i.useMemo(() => (null == n ? null : { prompt: n, adding: l, onAddBot: s, onSkip: o }), [n, l, s, o]);
        })(q, w),
        tF =
            null != tq
                ? {
                      type: "bot_install",
                      onAddBot: tq.onAddBot,
                      loading: tq.adding || B,
                      agentPrompt: { reason: tq.prompt.reason, onSkip: tq.onSkip },
                  }
                : (0, eH.aN)(ee, {
                        installScope: s?.install_scope ?? null,
                        previewReady: H,
                        integrationInstalled: z?.integration_installed ?? null,
                    })
                  ? { type: "bot_install", onAddBot: tD, loading: B }
                  : K && null == z
                    ? { type: "checking" }
                    : void 0,
        tO = (0, c.bG)([ts.Ay], () => null != q && ts.Ay.isProjectDeleting(q), [q]);
    i.useEffect(() => {
        ((null == s && o) || tO) && v();
    }, [s, o, tO, v]);
    let {
            publishOptions: tG,
            publish: tz,
            state: tU,
            variant: tB,
            text: tK,
            hint: tH,
            pendingChanges: tW,
        } = (0, tS.A)(q, w, K || B),
        tV = (0, tj.A)(q, tz, tG),
        tX = (0, tp.UC)(q),
        tY = "frame" === ee && !eU && (0, tf.x1)(eY) && (eQ.isPoppedOut || eQ.canPopout),
        tQ = i.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: L?.status === "restoring",
                    onRestoreVersion: (e, t) => $(e, t, !0),
                }),
                    (0, e_.mM)(async () => {
                        let { default: t } = await Promise.all([
                            n.e(323079),
                            n.e(437655),
                            n.e(420238),
                            n.e(795807),
                            n.e(231782),
                            n.e(587883),
                        ]).then(n.bind(n, 247270));
                        return (n) => (0, a.jsx)(t, { ...n, ...e });
                    }));
            }
        }, [s, L?.status, $]);
    (0, eE.z)(q, tQ);
    let tZ = null == s || Z ? void 0 : () => (0, tP.A)(s.id, { guildId: w, isPreview: !0, publishOptions: tG }),
        tJ = J.modes.includes("widget") && "unavailable-authorization-revoked" !== J.profileState ? ew : null,
        t0 =
            null == tz || null == s
                ? null
                : (0, a.jsx)("div", {
                      className: h4.As,
                      onMouseDown:
                          null == q || tz.disabled
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, tb.dx)(q);
                                },
                      onContextMenu:
                          null == tX
                              ? void 0
                              : (e) => {
                                    (0, tw.jA)(e, () =>
                                        (0, a.jsx)(ty.W, {
                                            "data-menu-migrated": !0,
                                            navId: `conjure-publish-actions-${s.id}`,
                                            "aria-label": ej.intl.string(ej.t.ogxXGq),
                                            onClose: tw.Z_,
                                            onSelect: tw.Z_,
                                            children: (0, a.jsx)(tk.Dr, {
                                                id: "unpublish-from-server",
                                                label: ej.intl.string(eb.default.mS61Dm),
                                                color: "danger",
                                                action: () => (0, tA.A)({ project: s, target: tX, action: "remove" }),
                                            }),
                                        }),
                                    );
                                },
                      children: (0, a.jsx)(d.m, {
                          text: tH,
                          children: (0, a.jsx)(f.$, {
                              size: "sm",
                              variant: tB,
                              icon: "publishing" === tU ? h7 : void 0,
                              text: tK,
                              onClick: () => tV("header"),
                          }),
                      }),
                  }),
        t1 = ej.intl.string(eb.default.FzfmQ8),
        t2 = ej.intl.string(eb.default.xjJAQm),
        t3 = (0, a.jsx)(h2.A, {
            title: s?.name ?? ej.intl.string(eb.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tZ,
            draft: tW,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: h4.FO,
                          children: [
                              null != tZ
                                  ? (0, a.jsx)(j.A.Icon, {
                                        icon: m.SettingsIcon,
                                        tooltip: t1,
                                        "aria-label": t1,
                                        onClick: tZ,
                                    })
                                  : null,
                              (0, a.jsx)(hT, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: w,
                                  isOwner: (0, ts.PV)(s),
                                  onExport: t$.onExport,
                                  onHistory: tQ,
                                  onConnectTool: R ? () => (0, eI.A)(s.id) : void 0,
                                  onToggleDebug: M ? tE : void 0,
                                  debugOpen: I,
                              }),
                              (0, a.jsxs)("div", {
                                  className: h4.Cl,
                                  children: [(0, a.jsx)(tR, { project: s, guildId: w }), t0],
                              }),
                              C || Z
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)("div", { className: h4.YJ, "aria-hidden": !0 }),
                                            (0, a.jsx)(j.A.Icon, {
                                                icon: h.PanelOpenIcon,
                                                tooltip: t2,
                                                "aria-label": t2,
                                                onClick: P,
                                            }),
                                        ],
                                    }),
                          ],
                      }),
        }),
        t4 = i.useId(),
        t5 = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return null == e
                ? null
                : "frame" !== e
                  ? { mode: e }
                  : null == n
                    ? { mode: e, surface: t }
                    : { mode: e, surface: t, appChannel: n };
        })(ee, en, ef),
        t7 = ez
            ? tt
                ? (0, a.jsx)(j.A.Icon, {
                      icon: g.ExperimentalDirectSelectIcon,
                      iconClassName: h4.D8,
                      tooltip: tN,
                      "aria-label": tN,
                      selected: e0,
                      disabled: (e2 || e8) && !e0,
                      onClick: e0 ? tC : tn,
                  })
                : (0, a.jsx)(j.A.Icon, {
                      ref: e7,
                      icon: g.ExperimentalDirectSelectIcon,
                      iconClassName: h4.D8,
                      tooltip: tI,
                      "aria-label": tI,
                      selected: e5,
                      disabled: e2 || e8,
                      onClick: te,
                  })
            : null,
        t8 =
            null != s && (null == X ? Y : "nothing_built" !== X)
                ? (0, a.jsx)(h1, {
                      editToggle: t7,
                      projectId: s.id,
                      projectName: s.name,
                      toolbar: eV,
                      activeMode: ee,
                      activeTarget: t5,
                      frameTarget: { mode: "frame", surface: en, ...(null == ef ? {} : { appChannel: ef }) },
                      onCloseApp: tL,
                      widgetRefreshApplicationId: tJ,
                      previewPaused: eU,
                      onTogglePreviewPaused: tT,
                      onTogglePopout: tY ? (eQ.isPoppedOut ? eQ.popIn : eQ.popOut) : void 0,
                      poppedOut: eQ.isPoppedOut,
                      agentDrivingPreview: e8,
                      previewControlsBlocked: e2,
                      blockedPreviewControlLabel: e3,
                      previewPanelId: t4,
                  })
                : null;
    return (0, a.jsxs)("div", {
        className: u()(h4.nj, h3.T),
        children: [
            t$.importInput,
            (0, a.jsx)("main", {
                className: h4.JX,
                children: G
                    ? (0, a.jsx)("div", {
                          className: h4.j5,
                          children: (0, a.jsx)("div", {
                              className: h4.sD,
                              children: (0, a.jsx)(p.D, {
                                  variant: "heading-lg/semibold",
                                  children: ej.intl.string(eb.default.i7PaZ5),
                              }),
                          }),
                      })
                    : null == s
                      ? (0, a.jsxs)("div", {
                            className: h4.j5,
                            children: [
                                t3,
                                (0, a.jsxs)("div", {
                                    className: h4.sD,
                                    children: [
                                        (0, a.jsx)(p.D, {
                                            variant: "heading-lg/semibold",
                                            children: ej.intl.string(eb.default.G1WwgK),
                                        }),
                                        (0, a.jsx)(x.E, {
                                            variant: "body-md/normal",
                                            color: "text-muted",
                                            children: ej.intl.string(eb.default.fINulo),
                                        }),
                                        (0, a.jsx)(f.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: ej.intl.string(eb.default["WFJ/vb"]),
                                            onClick: () => (0, ta.listProjects)(w),
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : Z
                        ? (0, a.jsxs)("div", {
                              className: h4.j5,
                              children: [
                                  t3,
                                  (0, a.jsx)("div", {
                                      className: h4.sD,
                                      children: (0, a.jsx)(p.D, {
                                          variant: "heading-lg/semibold",
                                          children: ej.intl.string(eb.default.Y2sGrh),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tm.bI.Provider, {
                              value: tG,
                              children: (0, a.jsx)(
                                  hy,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: e7,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eX,
                                      frameLaunchParams: ek,
                                      header: t3,
                                      controlBar: t8,
                                      previewPanelId: null == t8 ? void 0 : t4,
                                      previewPanelLabelledBy: null == t8 || null == t5 ? void 0 : e6(t4, t5),
                                      chatOpen: C,
                                      onCloseChat: e4,
                                      debugOpen: M && I,
                                      onCloseDebug: t_,
                                      onRestoreVersion: $,
                                      onImportProject: (0, ts.PV)(s) ? t$.onImport : void 0,
                                      restoreState: L,
                                      previewReady: H,
                                      previewGate: tF,
                                      availability: J,
                                      activeMode: ee,
                                      widgetApplicationId: ew,
                                      overlayWidgetSize: eG,
                                      previewPaused: eU,
                                      onResumePreview: tM,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function h7() {
    return (0, a.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: h4.Hv, itemClassName: h4.C5 });
}
