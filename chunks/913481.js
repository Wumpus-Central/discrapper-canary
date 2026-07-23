n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    a = n(617498),
    s = n(17928),
    r = n(717421),
    o = n(775602),
    c = n(734057),
    d = n(446243),
    u = n(558076),
    p = n(360729),
    h = n(967388),
    m = n(781137),
    A = n(950075),
    f = n(996752),
    x = n(662731),
    g = n(375708),
    C = n(241986);
let y = { x: 50, y: 50 };
function j(e) {
    return Math.min(100, Math.max(0, e));
}
function v(e) {
    let { channelId: t, roomWidth: n, onPlace: s } = e,
        o = (0, l.useRef)(null),
        c = (0, l.useRef)(y),
        [u, p] = (0, r.z)(() => ({ x: y.x, y: y.y, config: { clamp: !0, tension: 300 } }));
    function h(e, t) {
        let n = { x: j(c.current.x + e), y: j(c.current.y + t) };
        (c.current = n), p({ x: n.x, y: n.y });
    }
    return (
        (0, l.useEffect)(() => {
            o.current?.focus();
        }, []),
        (0, i.jsx)(a.animated.div, {
            ref: o,
            role: "application",
            tabIndex: -1,
            "aria-label": g.intl.string(x.default.xyO7AD),
            className: C.GZ,
            style: { left: u.x.to((e) => `${e}%`), top: u.y.to((e) => `${e}%`) },
            onKeyDown: function (e) {
                switch (e.key) {
                    case "ArrowUp":
                        e.preventDefault(), h(0, -2);
                        break;
                    case "ArrowDown":
                        e.preventDefault(), h(0, 2);
                        break;
                    case "ArrowLeft":
                        e.preventDefault(), h(-2, 0);
                        break;
                    case "ArrowRight":
                        e.preventDefault(), h(2, 0);
                        break;
                    case "Enter":
                        e.preventDefault(), s(c.current);
                        break;
                    case "Escape":
                        e.preventDefault(), (0, d.HW)(t);
                }
            },
            children: (0, i.jsx)(m.A, { roomWidth: n }),
        })
    );
}
function E(e) {
    let { channelId: t, roomWidth: n, containerRef: s, pointerRef: o, onPlace: c } = e,
        u = (0, f.F)(n).numericAvatarSize / 2,
        [p, h] = (0, r.z)(() => ({ x: -1 * u, y: -1 * u, config: { clamp: !0, tension: 300 } })),
        A = (0, l.useRef)(!1);
    return (
        (0, l.useEffect)(() => {
            let e = s.current;
            if (null != e && o.current.hasValue) {
                let t = e.getBoundingClientRect();
                h({ x: o.current.x - t.left, y: o.current.y - t.top, immediate: !0 }), (A.current = !0);
            }
            function n(e) {
                h({ x: e.offsetX, y: e.offsetY, immediate: !A.current }), (A.current = !0);
            }
            function i(t) {
                t.stopPropagation(),
                    c({ x: (100 * t.offsetX) / (e?.clientWidth ?? 1), y: (100 * t.offsetY) / (e?.clientHeight ?? 1) });
            }
            function l(e) {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (0, d.HW)(t));
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
        }, [s, o, t, h, c]),
        (0, i.jsx)(a.animated.div, {
            className: C.Dy,
            style: { left: p.x.to((e) => e - u / 2), top: p.y.to((e) => e - u / 2) },
            children: (0, i.jsx)(m.A, { roomWidth: n }),
        })
    );
}
function N(e) {
    let { channelId: t, roomWidth: n, containerRef: a, pointerRef: r } = e,
        c = (0, s.bG)([o.Ay], () => o.Ay.keyboardModeEnabled),
        u = (0, l.useRef)(!1),
        p = (0, l.useCallback)(
            (e) => {
                u.current || ((u.current = !0), (0, d.Dr)(t, e));
            },
            [t],
        );
    return c
        ? (0, i.jsx)(v, { channelId: t, roomWidth: n, onPlace: p })
        : (0, i.jsx)(E, { channelId: t, roomWidth: n, containerRef: a, pointerRef: r, onPlace: p });
}
function I(e) {
    let { channelId: t, roomWidth: n } = e,
        a = (0, l.useRef)(null),
        r = (0, l.useRef)({ x: 0, y: 0, hasValue: !1 }),
        o = (0, s.bG)([u.A], () => u.A.getPendingNote(t)),
        d = (0, s.bG)([u.A], () => u.A.getNotes(t));
    (0, l.useEffect)(() => {
        function e(e) {
            r.current = { x: e.clientX, y: e.clientY, hasValue: !0 };
        }
        return (
            document.addEventListener("mousemove", e, { passive: !0 }),
            () => document.removeEventListener("mousemove", e)
        );
    }, []);
    let { interactionsEnabled: m, experimental: f } = p.A.useExperiment({
        guildId: c.A.getChannel(t)?.guild_id,
        location: "GuildRoom",
    });
    if (!f || !m || (0 === d.length && null == o)) return null;
    let x = null != o && null == o.position;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            x &&
                (0, i.jsx)("div", {
                    ref: a,
                    className: C.kL,
                    children: (0, i.jsx)(N, { channelId: t, roomWidth: n, containerRef: a, pointerRef: r }),
                }),
            o?.position != null && (0, i.jsx)(A.A, { channelId: t, position: o.position, roomWidth: n }),
            d.map((e) => (0, i.jsx)(h.A, { channelId: t, note: e, roomWidth: n }, e.objectId)),
        ],
    });
}
