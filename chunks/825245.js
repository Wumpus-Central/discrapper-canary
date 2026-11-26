var r = n(477900);
n(582128);
var a = n(772838),
    i = n(775602),
    l = n(510163);
n.d(
    t,
    {},
    {
        L: function () {
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", { className: l.n_, "aria-hidden": !0 }),
                    (0, r.jsx)("div", {
                        className: l.p$,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(a.DragIcon, { size: "xs", color: "currentColor", className: l.OD }),
                    }),
                ],
            });
        },
        v: function (e, t) {
            let n = e.ownerDocument,
                r = n.defaultView;
            if (null == r || null == t.dataTransfer) return () => {};
            let a = i.Ay.useReducedMotion,
                s = e.getBoundingClientRect(),
                o = t.clientX - s.left,
                u = t.clientY - s.top,
                c = n.createElement("div");
            ((c.className = a ? `${l.VH} ${l.VN}` : l.VH),
                c.setAttribute("aria-hidden", "true"),
                c.setAttribute("inert", ""),
                Object.assign(c.style, {
                    width: `${s.width}px`,
                    height: `${s.height}px`,
                    transform: `translate3d(${s.left}px, ${s.top}px, 0)`,
                    transformOrigin: `${o}px ${u}px`,
                }));
            let d = n.createElement("div");
            d.className = l.DE;
            let m = e.cloneNode(!0);
            (m.removeAttribute("id"),
                m.removeAttribute("draggable"),
                m.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")),
                m.querySelectorAll("[data-clip-actions]").forEach((e) => e.remove()),
                Object.assign(m.style, {
                    width: `${s.width}px`,
                    height: `${s.height}px`,
                    boxSizing: "border-box",
                    position: "relative",
                    inset: "auto",
                    margin: "0",
                    transform: "none",
                    animation: "none",
                    transition: "none",
                    opacity: r.getComputedStyle(e).opacity,
                    direction: r.getComputedStyle(e).direction,
                }),
                d.appendChild(m),
                c.appendChild(d));
            let p = n.createElement("canvas");
            ((p.width = p.height = 1), (p.className = l.j_), n.body.append(c, p), t.dataTransfer.setDragImage(p, 0, 0));
            let f = t.clientX,
                v = t.clientY,
                h = f,
                g = 0,
                x = 0,
                y = 0,
                b = 0;
            function C(e) {
                ("drag" !== e.type || 0 !== e.clientX || 0 !== e.clientY) && ((f = e.clientX), (v = e.clientY));
            }
            return (
                n.addEventListener("dragover", C, !0),
                n.addEventListener("drag", C, !0),
                !(function e() {
                    (a ||
                        (f !== h && ((x = Math.max(-10, Math.min(10, (f - h) * 2))), (g = performance.now())),
                        (h = f),
                        performance.now() - g > 80 && (x = 0),
                        (y += (x - y) * 0.18)),
                        (c.style.transform = `translate3d(${f - o}px, ${v - u}px, 0) rotate(${y}deg)`),
                        (b = r.requestAnimationFrame(e)));
                })(),
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    (n.removeEventListener("dragover", C, !0),
                        n.removeEventListener("drag", C, !0),
                        r.cancelAnimationFrame(b),
                        p.remove(),
                        e && !a ? (c.classList.add(l.yU), r.setTimeout(() => c.remove(), 150)) : c.remove());
                }
            );
        },
    },
);
