(n.d(t, { A: () => p }), n(321073), n(134528), n(947204));
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(218394),
    o = n(390870);
let u = 1e3 / 30,
    d = [
        { hz: 0.285, stagger: 0.17, weight: 0.62, salt: 47 },
        { hz: 0.1245, stagger: -0.29, weight: 0.38, salt: 91 },
    ],
    c = 2 * Math.PI;
function f(e, t) {
    let n = Math.imul(e, 0x165667b1) + Math.imul(t, 0x27d4eb2f);
    return (((n = Math.imul(n ^ (n >>> 13), 0x4bf19f61)) ^ (n >>> 16)) >>> 0) / 0xffffffff;
}
function h() {
    let e = l.useRef(null),
        t = (0, s.j)();
    return (
        l.useEffect(() => {
            let n = e.current,
                r = n?.getContext("2d");
            if (null == n || null == r || !t || !document.documentElement.classList.contains("full-motion")) return;
            let l = getComputedStyle(n).getPropertyValue("color").trim(),
                i = n.closest('[role="group"]'),
                a = i?.querySelector("[data-conjure-effort-handle]") ?? null,
                s = 0,
                o = [],
                h = 0,
                m = 0,
                p = 8,
                g = 9,
                x = 0,
                b = 0,
                v = !1,
                y = 0,
                M = 0,
                w = performance.now();
            function A() {
                if (null == r) return;
                ((r.textAlign = "center"),
                    (r.textBaseline = "middle"),
                    (r.font = `${p}px 'AI Visual Identity Glyphs', monospace`));
                let e = 0;
                for (let t of "123456789ABC") {
                    let n = r.measureText(t);
                    e = Math.max(e, n.actualBoundingBoxAscent + n.actualBoundingBoxDescent);
                }
                let t = e > 0 ? Math.max(4, (p * p) / e) : p;
                r.font = `${t}px 'AI Visual Identity Glyphs', monospace`;
            }
            function C() {
                if (null == n || null == r) return;
                let e = n.clientWidth,
                    t = n.clientHeight;
                if (e === h && t === m) return;
                ((h = e), (g = (p = ((m = t) - 2 - 2) / 3) + 1));
                let l = i?.querySelectorAll("[data-stop]"),
                    a = l?.[l.length - 1];
                (null != a && (s = a.offsetLeft + a.offsetWidth / 2),
                    (o = null == l ? [] : Array.from(l, (e) => e.offsetLeft + e.offsetWidth / 2)));
                let u = window.devicePixelRatio,
                    d = Number.isFinite(u) && u > 0 ? u : 1;
                ((n.width = Math.round(h * d)), (n.height = Math.round(m * d)), r.setTransform(d, 0, 0, d, 0, 0), A());
            }
            (C(),
                (x = requestAnimationFrame(function e(t) {
                    if (((x = requestAnimationFrame(e)), t - b < u)) return;
                    let i = t - b;
                    if (((b = t), null == n || null == r || 0 === h || null == a)) return;
                    let A = Number(a.dataset.effortCentre),
                        C = a.hasAttribute("data-effort-live"),
                        j = Number.isFinite(A) && Math.abs(A - s) > 16;
                    if (!v && (!C || j)) return;
                    y = Math.min(1, Math.max(0, y + ((C ? 1 : -1) * i) / 260));
                    let E = n.getBoundingClientRect(),
                        L = E.width > 0 ? E.width / h : 1,
                        P = a.getBoundingClientRect(),
                        R = (P.left - E.left) / L,
                        S = (1 - Math.min(1, Math.abs(R + P.width / L / 2 - s) / 16)) * y;
                    if (S < 0.01) {
                        (v && r.clearRect(0, 0, h, m), (v = !1));
                        return;
                    }
                    (v || (M = t), (v = !0), r.clearRect(0, 0, h, m));
                    let k = R - 1 - (1 - S) * 16,
                        W = (t - w) / 1e3,
                        I = 0.1 + 0.9 * (1 - (1 - Math.min(1, Math.max(0, (t - M) / 1500))) ** 3),
                        N = Math.ceil(k / g);
                    r.fillStyle = l;
                    for (let e = 0; e < 3; e++) {
                        let t = 72 * (0.825 + 0.35 * f(e, 11)),
                            n = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(W * c * 0.13 + f(e, 29) * c))) * I,
                            l = 0;
                        for (let t of d) {
                            let n = (e * t.stagger + 0.07 * f(e, t.salt)) * c;
                            l += t.weight * Math.sin(W * c * t.hz + n);
                        }
                        let i = 0.30000000000000004 + 0.7 * (1 + l),
                            a = Math.floor((W * t) / g),
                            s = 1 + e * g + p / 2,
                            u = p / 2 + 3,
                            h = Math.abs(s - m / 2) < u;
                        for (let t = 0; t < N; t++) {
                            let l,
                                d = k - (t * g + p / 2);
                            if (d < 0) break;
                            let c = (k - d) / n;
                            if (c >= 1) break;
                            let m = Math.min(6, Math.floor(7 * (1 - c ** i)));
                            ((l =
                                0.07 > f(t - a, e + 613)
                                    ? "123456".charAt(0)
                                    : m < 6
                                      ? "123456".charAt(m)
                                      : "789ABC".charAt(Math.floor(6 * f(e, 977)))),
                                (h && o.some((e) => Math.abs(d - e) < u)) ||
                                    ((r.globalAlpha =
                                        0.5 *
                                        (function (e) {
                                            let t = Math.min(1, Math.max(0, e));
                                            return t * t * (3 - 2 * t);
                                        })((1 - c) / 0.34) *
                                        S),
                                    r.fillText(l, d, s)));
                        }
                    }
                    r.globalAlpha = 1;
                })));
            let j = document.fonts;
            null != j && j.load(`${p}px 'AI Visual Identity Glyphs'`, "123456789ABC").then(A, () => void 0);
            let E = "u" < typeof ResizeObserver ? null : new ResizeObserver(C);
            return (
                E?.observe(n),
                () => {
                    (cancelAnimationFrame(x), E?.disconnect());
                }
            );
        }, [t]),
        (0, r.jsx)("canvas", { ref: e, className: o.Z, "aria-hidden": "true" })
    );
}
var m = n(841479);
function p(e) {
    let { activeIndex: t, stops: n, ariaLabel: i, disabled: s, onSelect: o, className: u } = e,
        d = l.useRef(null),
        c = l.useRef(null),
        f = l.useRef(null),
        [p, g] = l.useState(-1),
        x = l.useRef(!1),
        b = l.useRef(t),
        v = l.useRef({ activeIndex: t, disabled: s, onSelect: o, stopCount: n.length }),
        y = l.useRef(!1),
        M = t >= 0 ? t : p,
        w = t < 0 && p >= 0,
        A = l.useCallback((e, t, n, r) => {
            let l = c.current,
                i = f.current;
            null != l &&
                null != i &&
                ("arrive" === r
                    ? ((l.style.transitionProperty = "opacity, background-color"),
                      (i.style.transitionProperty = "opacity"))
                    : "snap" === r || "drag" === r
                      ? ((l.style.transitionProperty = "none"), (i.style.transitionProperty = "none"))
                      : ((l.style.transitionProperty = ""), (i.style.transitionProperty = "")),
                (l.style.transform = `translateX(${e}px)`),
                (l.style.width = `${t}px`),
                (l.dataset.effortCentre = String(e + t / 2)),
                (i.style.transform = `translateX(${e + t - n}px)`),
                ("arrive" === r || "snap" === r) &&
                    (l.getBoundingClientRect(), (l.style.transitionProperty = ""), (i.style.transitionProperty = "")));
        }, []),
        C = l.useCallback(
            (e, t) => {
                let n = d.current,
                    r = e >= 0 ? n?.querySelector(`[data-stop='${e}']`) : null;
                null != r && A(r.offsetLeft, r.offsetWidth, n?.offsetWidth ?? 0, t);
            },
            [A],
        );
    function j(e) {
        if (s) return;
        let r = "ArrowRight" === e.key ? 1 : "ArrowLeft" === e.key ? -1 : 0;
        if (0 === r) return;
        e.preventDefault();
        let l = t >= 0 ? t : r > 0 ? -1 : n.length,
            i = Math.min(n.length - 1, Math.max(0, l + r));
        i !== t && (o(i), d.current?.querySelector(`[data-stop='${i}']`)?.focus());
    }
    return (
        l.useLayoutEffect(() => {
            let e = M >= 0,
                r = e && x.current;
            ((x.current = e),
                (b.current = M),
                (v.current = { activeIndex: t, disabled: s, onSelect: o, stopCount: n.length }),
                y.current || C(M, r ? "animate" : "arrive"));
        }, [M, t, s, o, n.length, v, C]),
        l.useEffect(() => {
            let e = d.current;
            if (null == e || "u" < typeof ResizeObserver) return;
            let t = new ResizeObserver(() => C(b.current, "snap"));
            return (t.observe(e), () => t.disconnect());
        }, [C]),
        l.useEffect(() => {
            let e = d.current,
                t = c.current;
            if (null == e || null == t) return;
            let n = null;
            function r(e, t) {
                return Math.min(Math.max(t - e.rowLeft - e.handleWidth / 2, 0), e.rowWidth - e.handleWidth);
            }
            function l(e, t) {
                let n = null;
                for (let r = 0; r < e.stops.length; r += 1) {
                    let l = e.stops[r];
                    if (null == l) continue;
                    let i = t - l;
                    (null == n || Math.abs(i) < Math.abs(n.offset)) && (n = { index: r, left: l, offset: i });
                }
                return n;
            }
            function i() {
                if (null == n) return;
                n.frame = 0;
                let { metrics: e } = n,
                    t = r(e, n.x),
                    i = l(e, t);
                if (null == i) return;
                if (24 >= Math.abs(i.offset)) {
                    var a;
                    let t;
                    n.snapped !== i.index &&
                        ((n.snapped = i.index),
                        (n.snappedAt = n.at),
                        i.index !== v.current.activeIndex && v.current.onSelect(i.index));
                    let r = n.at - n.snappedAt < 300;
                    A(
                        i.left +
                            ((t = Math.min(Math.abs((a = i.offset)) / 24, 1)), 12 * Math.sign(a) * (1 - (1 - t) ** 2)),
                        e.handleWidth,
                        e.rowWidth,
                        r ? "animate" : "drag",
                    );
                    return;
                }
                (null != n.snapped && (n.releasedAt = n.at), (n.snapped = null));
                let s = n.at - n.releasedAt < 300;
                A(t, e.handleWidth, e.rowWidth, s ? "animate" : "drag");
            }
            function a(r) {
                if (v.current.disabled || v.current.activeIndex < 0 || null == t) return;
                let l = (function () {
                    if (null == e || null == t) return null;
                    let n = e.getBoundingClientRect(),
                        r = [];
                    for (let t = 0; t < v.current.stopCount; t += 1)
                        r.push(e.querySelector(`[data-stop='${t}']`)?.offsetLeft ?? 0);
                    return { rowLeft: n.left, rowWidth: n.width, handleWidth: t.offsetWidth, stops: r };
                })();
                null != l &&
                    (r.preventDefault(),
                    t.setPointerCapture(r.pointerId),
                    (n = {
                        pointerId: r.pointerId,
                        metrics: l,
                        snapped: v.current.activeIndex,
                        snappedAt: r.timeStamp,
                        releasedAt: 0,
                        x: r.clientX,
                        at: r.timeStamp,
                        frame: 0,
                    }),
                    (y.current = !0));
            }
            function s(e) {
                if (null != n) {
                    if (0 === e.buttons) return void o(e.clientX);
                    ((n.x = e.clientX), (n.at = e.timeStamp), 0 === n.frame && (n.frame = requestAnimationFrame(i)));
                }
            }
            function o(e) {
                let i = n;
                if (((n = null), (y.current = !1), null == i)) return;
                (0 !== i.frame && cancelAnimationFrame(i.frame),
                    null != t && t.hasPointerCapture(i.pointerId) && t.releasePointerCapture(i.pointerId));
                let a = l(i.metrics, r(i.metrics, e ?? i.x));
                null != a &&
                    (A(a.left, i.metrics.handleWidth, i.metrics.rowWidth, "animate"),
                    a.index !== v.current.activeIndex && v.current.onSelect(a.index));
            }
            function u(e) {
                o(e.clientX);
            }
            function f() {
                o(null);
            }
            return (
                t.addEventListener("pointerdown", a),
                t.addEventListener("pointermove", s),
                t.addEventListener("pointerup", u),
                t.addEventListener("pointercancel", u),
                t.addEventListener("lostpointercapture", f),
                window.addEventListener("pointerup", u),
                window.addEventListener("blur", f),
                () => {
                    (null != n && 0 !== n.frame && cancelAnimationFrame(n.frame),
                        t.removeEventListener("pointerdown", a),
                        t.removeEventListener("pointermove", s),
                        t.removeEventListener("pointerup", u),
                        t.removeEventListener("pointercancel", u),
                        t.removeEventListener("lostpointercapture", f),
                        window.removeEventListener("pointerup", u),
                        window.removeEventListener("blur", f));
                }
            );
        }, [v, y, A]),
        (0, r.jsx)("div", {
            className: a()(m.u4, u),
            role: "group",
            "aria-label": i,
            children: (0, r.jsxs)("div", {
                ref: d,
                className: m.Gb,
                children: [
                    (0, r.jsx)("span", {
                        className: m.Ek,
                        "aria-hidden": "true",
                        children: (0, r.jsx)("span", { ref: f, className: a()(m.GS, { [m.eG]: t < 0 }) }),
                    }),
                    (0, r.jsx)("span", {
                        ref: c,
                        "data-conjure-effort-handle": "",
                        "data-effort-live": t >= 0 ? "" : void 0,
                        className: a()(m.p$, { [m.Jb]: M < 0, [m.jz]: w, [m.al]: t >= 0 && !s }),
                        "aria-hidden": "true",
                    }),
                    n.map((e, n) =>
                        (0, r.jsx)(
                            "button",
                            {
                                type: "button",
                                "data-stop": n,
                                "aria-pressed": n === t,
                                "aria-label": e,
                                disabled: s,
                                className: m.ds,
                                onKeyDown: j,
                                onPointerEnter: () => g(n),
                                onPointerLeave: () => g((e) => (e === n ? -1 : e)),
                                onFocus: () => g(n),
                                onBlur: () => g((e) => (e === n ? -1 : e)),
                                onClick: () => o(n),
                                children: (0, r.jsx)("span", { className: m.Om, "aria-hidden": "true" }),
                            },
                            e,
                        ),
                    ),
                    (0, r.jsx)("span", { className: m.jN, "aria-hidden": "true", children: (0, r.jsx)(h, {}) }),
                ],
            }),
        })
    );
}
