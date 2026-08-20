n.d(t, { A: () => _ });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(296704),
    o = n(17928),
    c = n(717421),
    d = n(775602),
    u = n(734057),
    h = n(446243),
    p = n(558076),
    m = n(360729),
    f = n(967388),
    A = n(781137),
    x = n(950075),
    g = n(996752),
    C = n(665802),
    y = n(375708),
    j = n(232059);
let I = { x: 50, y: 50 };
function v(e) {
    return Math.min(100, Math.max(0, e));
}
function N(e) {
    let { channelId: t, roomWidth: n, onPlace: a } = e,
        s = (0, l.useRef)(null),
        o = (0, l.useRef)(I),
        [d, u] = (0, c.z)(() => ({ x: I.x, y: I.y, config: { clamp: !0, tension: 300 } }));
    function p(e, t) {
        let n = { x: v(o.current.x + e), y: v(o.current.y + t) };
        (o.current = n), u({ x: n.x, y: n.y });
    }
    return (
        (0, l.useEffect)(() => {
            s.current?.focus();
        }, []),
        (0, i.jsx)(r.animated.div, {
            ref: s,
            role: "application",
            tabIndex: -1,
            "aria-label": y.intl.string(C.default.xyO7AD),
            className: j.GZ,
            style: { left: d.x.to((e) => `${e}%`), top: d.y.to((e) => `${e}%`) },
            onKeyDown: function (e) {
                switch (e.key) {
                    case "ArrowUp":
                        e.preventDefault(), p(0, -2);
                        break;
                    case "ArrowDown":
                        e.preventDefault(), p(0, 2);
                        break;
                    case "ArrowLeft":
                        e.preventDefault(), p(-2, 0);
                        break;
                    case "ArrowRight":
                        e.preventDefault(), p(2, 0);
                        break;
                    case "Enter":
                        e.preventDefault(), a(o.current);
                        break;
                    case "Escape":
                        e.preventDefault(), (0, h.HW)(t);
                }
            },
            children: (0, i.jsx)(A.A, { roomWidth: n }),
        })
    );
}
function E(e) {
    let { channelId: t, roomWidth: n, containerRef: a, pointerRef: s, onPlace: o } = e,
        d = (0, g.F)(n).numericAvatarSize / 2,
        [u, p] = (0, c.z)(() => ({ x: -1 * d, y: -1 * d, config: { clamp: !0, tension: 300 } })),
        m = (0, l.useRef)(!1);
    return (
        (0, l.useEffect)(() => {
            let e = a.current;
            if (null != e && s.current.hasValue) {
                let t = e.getBoundingClientRect();
                p({ x: s.current.x - t.left, y: s.current.y - t.top, immediate: !0 }), (m.current = !0);
            }
            function n(e) {
                p({ x: e.offsetX, y: e.offsetY, immediate: !m.current }), (m.current = !0);
            }
            function i(t) {
                t.stopPropagation(),
                    o({ x: (100 * t.offsetX) / (e?.clientWidth ?? 1), y: (100 * t.offsetY) / (e?.clientHeight ?? 1) });
            }
            function l(e) {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (0, h.HW)(t));
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
        }, [a, s, t, p, o]),
        (0, i.jsx)(r.animated.div, {
            className: j.Dy,
            style: { left: u.x.to((e) => e - d / 2), top: u.y.to((e) => e - d / 2) },
            children: (0, i.jsx)(A.A, { roomWidth: n }),
        })
    );
}
function b(e) {
    let { channelId: t, roomWidth: n, containerRef: a, pointerRef: s } = e,
        r = (0, o.bG)([d.Ay], () => d.Ay.keyboardModeEnabled),
        c = (0, l.useRef)(!1),
        u = (0, l.useCallback)(
            (e) => {
                c.current || ((c.current = !0), (0, h.Dr)(t, e));
            },
            [t],
        );
    return r
        ? (0, i.jsx)(N, { channelId: t, roomWidth: n, onPlace: u })
        : (0, i.jsx)(E, { channelId: t, roomWidth: n, containerRef: a, pointerRef: s, onPlace: u });
}
function _(e) {
    let { channelId: t, roomWidth: n } = e,
        a = (0, l.useRef)(null),
        r = (0, l.useRef)({ x: 0, y: 0, hasValue: !1 }),
        c = (0, o.bG)([p.A], () => p.A.getPendingNote(t)),
        d = (0, o.bG)([p.A], () => p.A.getCreatingNotes(t)),
        h = (0, o.bG)([p.A], () => p.A.getNotes(t));
    (0, l.useEffect)(() => {
        function e(e) {
            r.current = { x: e.clientX, y: e.clientY, hasValue: !0 };
        }
        return (
            document.addEventListener("mousemove", e, { passive: !0 }),
            () => document.removeEventListener("mousemove", e)
        );
    }, []);
    let { interactionsEnabled: g } = m.A.useExperiment({ guildId: u.A.getChannel(t)?.guild_id, location: "GuildRoom" });
    if (!g || (0 === h.length && null == c && 0 === d.length)) return null;
    let I = null != c && null == c.position;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            I &&
                (0, i.jsx)("div", {
                    ref: a,
                    className: j.kL,
                    children: (0, i.jsx)(b, { channelId: t, roomWidth: n, containerRef: a, pointerRef: r }),
                }),
            c?.position != null && (0, i.jsx)(x.A, { channelId: t, position: c.position, roomWidth: n }),
            d.map((e) =>
                (0, i.jsx)(
                    "div",
                    {
                        className: j.wD,
                        style: { left: `${e.position.x}%`, top: `${e.position.y}%` },
                        children: (0, i.jsx)(A.A, { roomWidth: n }),
                    },
                    e.localId,
                ),
            ),
            h.length > 0 &&
                (0, i.jsx)("div", {
                    role: "list",
                    "aria-label": y.intl.string(C.default.zzZaRe),
                    className: s()({ [j.IU]: I }),
                    children: h.map((e) => (0, i.jsx)(f.A, { channelId: t, note: e, roomWidth: n }, e.objectId)),
                }),
        ],
    });
}
