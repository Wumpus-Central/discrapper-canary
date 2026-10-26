(l.d(t, { A: () => m }), l(321073), l(134528), l(947204));
var n = l(477900),
    a = l(582128),
    i = l(503698),
    r = l.n(i),
    u = l(218394),
    s = l(390870);
let o = 1e3 / 30,
    d = [
        { hz: 0.285, stagger: 0.17, weight: 0.62, salt: 47 },
        { hz: 0.1245, stagger: -0.29, weight: 0.38, salt: 91 },
    ],
    c = 2 * Math.PI;
function f(e, t) {
    let l = Math.imul(e, 0x165667b1) + Math.imul(t, 0x27d4eb2f);
    return (((l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)) ^ (l >>> 16)) >>> 0) / 0xffffffff;
}
function p() {
    let e = a.useRef(null),
        t = (0, u.j)();
    return (
        a.useEffect(() => {
            let l = e.current,
                n = l?.getContext("2d");
            if (null == l || null == n || !t || !document.documentElement.classList.contains("full-motion")) return;
            let a = getComputedStyle(l).getPropertyValue("color").trim(),
                i = l.closest('[role="group"]'),
                r = i?.querySelector("[data-conjure-effort-handle]") ?? null,
                u = 0,
                s = [],
                p = 0,
                h = 0,
                m = 8,
                g = 9,
                x = 0,
                b = 0,
                v = !1,
                y = 0,
                A = 0,
                j = performance.now();
            function k() {
                if (null == n) return;
                ((n.textAlign = "center"),
                    (n.textBaseline = "middle"),
                    (n.font = `${m}px 'AI Visual Identity Glyphs', monospace`));
                let e = 0;
                for (let t of "123456789ABC") {
                    let l = n.measureText(t);
                    e = Math.max(e, l.actualBoundingBoxAscent + l.actualBoundingBoxDescent);
                }
                let t = e > 0 ? Math.max(4, (m * m) / e) : m;
                n.font = `${t}px 'AI Visual Identity Glyphs', monospace`;
            }
            function C() {
                if (null == l || null == n) return;
                let e = l.clientWidth,
                    t = l.clientHeight;
                if (e === p && t === h) return;
                ((p = e), (g = (m = ((h = t) - 2 - 2) / 3) + 1));
                let a = i?.querySelectorAll("[data-stop]"),
                    r = a?.[a.length - 1];
                (null != r && (u = r.offsetLeft + r.offsetWidth / 2),
                    (s = null == a ? [] : Array.from(a, (e) => e.offsetLeft + e.offsetWidth / 2)));
                let o = window.devicePixelRatio,
                    d = Number.isFinite(o) && o > 0 ? o : 1;
                ((l.width = Math.round(p * d)), (l.height = Math.round(h * d)), n.setTransform(d, 0, 0, d, 0, 0), k());
            }
            (C(),
                (x = requestAnimationFrame(function e(t) {
                    if (((x = requestAnimationFrame(e)), t - b < o)) return;
                    let i = t - b;
                    if (((b = t), null == l || null == n || 0 === p || null == r)) return;
                    let k = Number(r.dataset.effortCentre),
                        C = r.hasAttribute("data-effort-live"),
                        S = Number.isFinite(k) && Math.abs(k - u) > 16;
                    if (!v && (!C || S)) return;
                    y = Math.min(1, Math.max(0, y + ((C ? 1 : -1) * i) / 260));
                    let w = l.getBoundingClientRect(),
                        E = w.width > 0 ? w.width / p : 1,
                        M = r.getBoundingClientRect(),
                        P = (M.left - w.left) / E,
                        _ = (1 - Math.min(1, Math.abs(P + M.width / E / 2 - u) / 16)) * y;
                    if (_ < 0.01) {
                        (v && n.clearRect(0, 0, p, h), (v = !1));
                        return;
                    }
                    (v || (A = t), (v = !0), n.clearRect(0, 0, p, h));
                    let N = P - 1 - (1 - _) * 16,
                        I = (t - j) / 1e3,
                        R = 0.1 + 0.9 * (1 - (1 - Math.min(1, Math.max(0, (t - A) / 1500))) ** 3),
                        T = Math.ceil(N / g);
                    n.fillStyle = a;
                    for (let e = 0; e < 3; e++) {
                        let t = 72 * (0.825 + 0.35 * f(e, 11)),
                            l = 224 * (0.88 + 0.12 * (0.5 + 0.5 * Math.sin(I * c * 0.13 + f(e, 29) * c))) * R,
                            a = 0;
                        for (let t of d) {
                            let l = (e * t.stagger + 0.07 * f(e, t.salt)) * c;
                            a += t.weight * Math.sin(I * c * t.hz + l);
                        }
                        let i = 0.30000000000000004 + 0.7 * (1 + a),
                            r = Math.floor((I * t) / g),
                            u = 1 + e * g + m / 2,
                            o = m / 2 + 3,
                            p = Math.abs(u - h / 2) < o;
                        for (let t = 0; t < T; t++) {
                            let a,
                                d = N - (t * g + m / 2);
                            if (d < 0) break;
                            let c = (N - d) / l;
                            if (c >= 1) break;
                            let h = Math.min(6, Math.floor(7 * (1 - c ** i)));
                            ((a =
                                0.07 > f(t - r, e + 613)
                                    ? "123456".charAt(0)
                                    : h < 6
                                      ? "123456".charAt(h)
                                      : "789ABC".charAt(Math.floor(6 * f(e, 977)))),
                                (p && s.some((e) => Math.abs(d - e) < o)) ||
                                    ((n.globalAlpha =
                                        0.5 *
                                        (function (e) {
                                            let t = Math.min(1, Math.max(0, e));
                                            return t * t * (3 - 2 * t);
                                        })((1 - c) / 0.34) *
                                        _),
                                    n.fillText(a, d, u)));
                        }
                    }
                    n.globalAlpha = 1;
                })));
            let S = document.fonts;
            null != S && S.load(`${m}px 'AI Visual Identity Glyphs'`, "123456789ABC").then(k, () => void 0);
            let w = "u" < typeof ResizeObserver ? null : new ResizeObserver(C);
            return (
                w?.observe(l),
                () => {
                    (cancelAnimationFrame(x), w?.disconnect());
                }
            );
        }, [t]),
        (0, n.jsx)("canvas", { ref: e, className: s.Z, "aria-hidden": "true" })
    );
}
var h = l(841479);
function m(e) {
    let { activeIndex: t, stops: l, ariaLabel: i, disabled: u, onSelect: s, className: o } = e,
        d = a.useRef(null),
        c = a.useRef(null),
        f = a.useRef(null),
        [m, g] = a.useState(-1),
        x = a.useRef(!1),
        b = a.useRef(t),
        v = a.useRef({ activeIndex: t, disabled: u, onSelect: s, stopCount: l.length }),
        y = a.useRef(!1),
        A = t >= 0 ? t : m,
        j = t < 0 && m >= 0,
        k = a.useCallback((e, t, l, n) => {
            let a = c.current,
                i = f.current;
            null != a &&
                null != i &&
                ("arrive" === n
                    ? ((a.style.transitionProperty = "opacity, background-color"),
                      (i.style.transitionProperty = "opacity"))
                    : "snap" === n || "drag" === n
                      ? ((a.style.transitionProperty = "none"), (i.style.transitionProperty = "none"))
                      : ((a.style.transitionProperty = ""), (i.style.transitionProperty = "")),
                (a.style.transform = `translateX(${e}px)`),
                (a.style.width = `${t}px`),
                (a.dataset.effortCentre = String(e + t / 2)),
                (i.style.transform = `translateX(${e + t - l}px)`),
                ("arrive" === n || "snap" === n) &&
                    (a.getBoundingClientRect(), (a.style.transitionProperty = ""), (i.style.transitionProperty = "")));
        }, []),
        C = a.useCallback(
            (e, t) => {
                let l = d.current,
                    n = e >= 0 ? l?.querySelector(`[data-stop='${e}']`) : null;
                null != n && k(n.offsetLeft, n.offsetWidth, l?.offsetWidth ?? 0, t);
            },
            [k],
        );
    function S(e) {
        if (u) return;
        let n = "ArrowRight" === e.key ? 1 : "ArrowLeft" === e.key ? -1 : 0;
        if (0 === n) return;
        e.preventDefault();
        let a = t >= 0 ? t : n > 0 ? -1 : l.length,
            i = Math.min(l.length - 1, Math.max(0, a + n));
        i !== t && (s(i), d.current?.querySelector(`[data-stop='${i}']`)?.focus());
    }
    return (
        a.useLayoutEffect(() => {
            let e = A >= 0,
                n = e && x.current;
            ((x.current = e),
                (b.current = A),
                (v.current = { activeIndex: t, disabled: u, onSelect: s, stopCount: l.length }),
                y.current || C(A, n ? "animate" : "arrive"));
        }, [A, t, u, s, l.length, v, C]),
        a.useEffect(() => {
            let e = d.current;
            if (null == e || "u" < typeof ResizeObserver) return;
            let t = new ResizeObserver(() => C(b.current, "snap"));
            return (t.observe(e), () => t.disconnect());
        }, [C]),
        a.useEffect(() => {
            let e = d.current,
                t = c.current;
            if (null == e || null == t) return;
            let l = null;
            function n(e, t) {
                return Math.min(Math.max(t - e.rowLeft - e.handleWidth / 2, 0), e.rowWidth - e.handleWidth);
            }
            function a(e, t) {
                let l = null;
                for (let n = 0; n < e.stops.length; n += 1) {
                    let a = e.stops[n];
                    if (null == a) continue;
                    let i = t - a;
                    (null == l || Math.abs(i) < Math.abs(l.offset)) && (l = { index: n, left: a, offset: i });
                }
                return l;
            }
            function i() {
                if (null == l) return;
                l.frame = 0;
                let { metrics: e } = l,
                    t = n(e, l.x),
                    i = a(e, t);
                if (null == i) return;
                if (24 >= Math.abs(i.offset)) {
                    var r;
                    let t;
                    l.snapped !== i.index &&
                        ((l.snapped = i.index),
                        (l.snappedAt = l.at),
                        i.index !== v.current.activeIndex && v.current.onSelect(i.index));
                    let n = l.at - l.snappedAt < 300;
                    k(
                        i.left +
                            ((t = Math.min(Math.abs((r = i.offset)) / 24, 1)), 12 * Math.sign(r) * (1 - (1 - t) ** 2)),
                        e.handleWidth,
                        e.rowWidth,
                        n ? "animate" : "drag",
                    );
                    return;
                }
                (null != l.snapped && (l.releasedAt = l.at), (l.snapped = null));
                let u = l.at - l.releasedAt < 300;
                k(t, e.handleWidth, e.rowWidth, u ? "animate" : "drag");
            }
            function r(n) {
                if (v.current.disabled || v.current.activeIndex < 0 || null == t) return;
                let a = (function () {
                    if (null == e || null == t) return null;
                    let l = e.getBoundingClientRect(),
                        n = [];
                    for (let t = 0; t < v.current.stopCount; t += 1)
                        n.push(e.querySelector(`[data-stop='${t}']`)?.offsetLeft ?? 0);
                    return { rowLeft: l.left, rowWidth: l.width, handleWidth: t.offsetWidth, stops: n };
                })();
                null != a &&
                    (n.preventDefault(),
                    t.setPointerCapture(n.pointerId),
                    (l = {
                        pointerId: n.pointerId,
                        metrics: a,
                        snapped: v.current.activeIndex,
                        snappedAt: n.timeStamp,
                        releasedAt: 0,
                        x: n.clientX,
                        at: n.timeStamp,
                        frame: 0,
                    }),
                    (y.current = !0));
            }
            function u(e) {
                if (null != l) {
                    if (0 === e.buttons) return void s(e.clientX);
                    ((l.x = e.clientX), (l.at = e.timeStamp), 0 === l.frame && (l.frame = requestAnimationFrame(i)));
                }
            }
            function s(e) {
                let i = l;
                if (((l = null), (y.current = !1), null == i)) return;
                (0 !== i.frame && cancelAnimationFrame(i.frame),
                    null != t && t.hasPointerCapture(i.pointerId) && t.releasePointerCapture(i.pointerId));
                let r = a(i.metrics, n(i.metrics, e ?? i.x));
                null != r &&
                    (k(r.left, i.metrics.handleWidth, i.metrics.rowWidth, "animate"),
                    r.index !== v.current.activeIndex && v.current.onSelect(r.index));
            }
            function o(e) {
                s(e.clientX);
            }
            function f() {
                s(null);
            }
            return (
                t.addEventListener("pointerdown", r),
                t.addEventListener("pointermove", u),
                t.addEventListener("pointerup", o),
                t.addEventListener("pointercancel", o),
                t.addEventListener("lostpointercapture", f),
                window.addEventListener("pointerup", o),
                window.addEventListener("blur", f),
                () => {
                    (null != l && 0 !== l.frame && cancelAnimationFrame(l.frame),
                        t.removeEventListener("pointerdown", r),
                        t.removeEventListener("pointermove", u),
                        t.removeEventListener("pointerup", o),
                        t.removeEventListener("pointercancel", o),
                        t.removeEventListener("lostpointercapture", f),
                        window.removeEventListener("pointerup", o),
                        window.removeEventListener("blur", f));
                }
            );
        }, [v, y, k]),
        (0, n.jsx)("div", {
            className: r()(h.u4, o),
            role: "group",
            "aria-label": i,
            children: (0, n.jsxs)("div", {
                ref: d,
                className: h.Gb,
                children: [
                    (0, n.jsx)("span", {
                        className: h.Ek,
                        "aria-hidden": "true",
                        children: (0, n.jsx)("span", { ref: f, className: r()(h.GS, { [h.eG]: t < 0 }) }),
                    }),
                    (0, n.jsx)("span", {
                        ref: c,
                        "data-conjure-effort-handle": "",
                        "data-effort-live": t >= 0 ? "" : void 0,
                        className: r()(h.p$, { [h.Jb]: A < 0, [h.jz]: j, [h.al]: t >= 0 && !u }),
                        "aria-hidden": "true",
                    }),
                    l.map((e, l) =>
                        (0, n.jsx)(
                            "button",
                            {
                                type: "button",
                                "data-stop": l,
                                "aria-pressed": l === t,
                                "aria-label": e,
                                disabled: u,
                                className: h.ds,
                                onKeyDown: S,
                                onPointerEnter: () => g(l),
                                onPointerLeave: () => g((e) => (e === l ? -1 : e)),
                                onFocus: () => g(l),
                                onBlur: () => g((e) => (e === l ? -1 : e)),
                                onClick: () => s(l),
                                children: (0, n.jsx)("span", { className: h.Om, "aria-hidden": "true" }),
                            },
                            e,
                        ),
                    ),
                    (0, n.jsx)("span", { className: h.jN, "aria-hidden": "true", children: (0, n.jsx)(p, {}) }),
                ],
            }),
        })
    );
}
