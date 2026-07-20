n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    a = n(523939),
    s = n(17928),
    r = n(717421),
    o = n(775602),
    c = n(446243),
    d = n(558076),
    u = n(967388),
    p = n(781137),
    h = n(950075),
    m = n(996752),
    A = n(189090),
    x = n(375708),
    f = n(211178);
let g = { x: 50, y: 50 };
function C(e) {
    return Math.min(100, Math.max(0, e));
}
function y(e) {
    let { channelId: t, roomWidth: n, onPlace: s } = e,
        o = (0, l.useRef)(null),
        d = (0, l.useRef)(g),
        [u, h] = (0, r.z)(() => ({ x: g.x, y: g.y, config: { clamp: !0, tension: 300 } }));
    (0, l.useEffect)(() => {
        o.current?.focus();
    }, []);
    let m = (e, t) => {
        let n = { x: C(d.current.x + e), y: C(d.current.y + t) };
        (d.current = n), h({ x: n.x, y: n.y });
    };
    return (0, i.jsx)(a.animated.div, {
        ref: o,
        role: "application",
        tabIndex: -1,
        "aria-label": x.intl.string(A.default.xyO7AD),
        className: f.GZ,
        style: { left: u.x.to((e) => `${e}%`), top: u.y.to((e) => `${e}%`) },
        onKeyDown: (e) => {
            switch (e.key) {
                case "ArrowUp":
                    e.preventDefault(), m(0, -2);
                    break;
                case "ArrowDown":
                    e.preventDefault(), m(0, 2);
                    break;
                case "ArrowLeft":
                    e.preventDefault(), m(-2, 0);
                    break;
                case "ArrowRight":
                    e.preventDefault(), m(2, 0);
                    break;
                case "Enter":
                    e.preventDefault(), s(d.current);
                    break;
                case "Escape":
                    e.preventDefault(), (0, c.HW)(t);
            }
        },
        children: (0, i.jsx)(p.A, { roomWidth: n }),
    });
}
function j(e) {
    let { channelId: t, roomWidth: n, containerRef: s, pointerRef: o, onPlace: d } = e,
        u = (0, m.F)(n).numericAvatarSize / 2,
        [h, A] = (0, r.z)(() => ({ x: -1 * u, y: -1 * u, config: { clamp: !0, tension: 300 } })),
        x = (0, l.useRef)(!1);
    return (
        (0, l.useEffect)(() => {
            let e = s.current;
            if (null != e && o.current.hasValue) {
                let t = e.getBoundingClientRect();
                A({ x: o.current.x - t.left, y: o.current.y - t.top, immediate: !0 }), (x.current = !0);
            }
            let n = (e) => {
                    A({ x: e.offsetX, y: e.offsetY, immediate: !x.current }), (x.current = !0);
                },
                i = (t) => {
                    t.stopPropagation(),
                        d({
                            x: (100 * t.offsetX) / (e?.clientWidth ?? 1),
                            y: (100 * t.offsetY) / (e?.clientHeight ?? 1),
                        });
                };
            function l(e) {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (0, c.HW)(t));
            }
            return (
                e?.addEventListener("mousemove", n),
                e?.addEventListener("click", i),
                document.addEventListener("keydown", l),
                () => {
                    e?.removeEventListener("mousemove", n),
                        e?.removeEventListener("click", i),
                        document.removeEventListener("keydown", l);
                }
            );
        }, [s, o, t, A, d]),
        (0, i.jsx)(a.animated.div, {
            className: f.Dy,
            style: { left: h.x.to((e) => e - u / 2), top: h.y.to((e) => e - u / 2) },
            children: (0, i.jsx)(p.A, { roomWidth: n }),
        })
    );
}
function v(e) {
    let { channelId: t, roomWidth: n, containerRef: a, pointerRef: r } = e,
        d = (0, s.bG)([o.Ay], () => o.Ay.keyboardModeEnabled),
        u = (0, l.useRef)(!1),
        p = (0, l.useCallback)(
            (e) => {
                u.current || ((u.current = !0), (0, c.Dr)(t, e));
            },
            [t],
        );
    return d
        ? (0, i.jsx)(y, { channelId: t, roomWidth: n, onPlace: p })
        : (0, i.jsx)(j, { channelId: t, roomWidth: n, containerRef: a, pointerRef: r, onPlace: p });
}
function E(e) {
    let { channelId: t, roomWidth: n } = e,
        a = (0, l.useRef)(null),
        r = (0, l.useRef)({ x: 0, y: 0, hasValue: !1 }),
        o = (0, s.bG)([d.A], () => d.A.getPendingNote(t)),
        c = (0, s.bG)([d.A], () => d.A.getNotes(t));
    if (
        ((0, l.useEffect)(() => {
            let e = (e) => {
                r.current = { x: e.clientX, y: e.clientY, hasValue: !0 };
            };
            return (
                document.addEventListener("mousemove", e, { passive: !0 }),
                () => document.removeEventListener("mousemove", e)
            );
        }, []),
        0 === c.length && null == o)
    )
        return null;
    let p = null != o && null == o.position;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            p &&
                (0, i.jsx)("div", {
                    ref: a,
                    className: f.kL,
                    children: (0, i.jsx)(v, { channelId: t, roomWidth: n, containerRef: a, pointerRef: r }),
                }),
            o?.position != null && (0, i.jsx)(h.A, { channelId: t, position: o.position, roomWidth: n }),
            c.map((e) => (0, i.jsx)(u.A, { channelId: t, note: e, roomWidth: n }, e.objectId)),
        ],
    });
}
