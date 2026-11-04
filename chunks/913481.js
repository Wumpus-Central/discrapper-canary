n.d(t, { A: () => I });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(775602),
    d = n(734057),
    c = n(446243),
    u = n(558076),
    h = n(360729),
    p = n(967388),
    m = n(781137),
    A = n(743943),
    f = n(950075),
    g = n(618922),
    x = n(105292),
    C = n(232059);
function y(e, t) {
    return { x: (100 * t.offsetX) / e.clientWidth, y: (100 * t.offsetY) / e.clientHeight };
}
function j(e) {
    let { channelId: t, roomWidth: n, containerRef: a, pointerRef: s } = e,
        [r, o] = (0, l.useState)(null),
        d = (0, l.useRef)(!1);
    return ((0, l.useEffect)(() => {
        let e = a.current;
        if (null != e) {
            if (s.current.hasValue) {
                let t = e.getBoundingClientRect();
                o({ x: ((s.current.x - t.left) * 100) / t.width, y: ((s.current.y - t.top) * 100) / t.height });
            }
            return (
                e.addEventListener("mousemove", n),
                e.addEventListener("click", i),
                () => {
                    (e.removeEventListener("mousemove", n), e.removeEventListener("click", i));
                }
            );
        }
        function n(e) {
            let t = a.current;
            null != t && o(y(t, e));
        }
        function i(e) {
            if ((e.stopPropagation(), d.current)) return;
            let n = a.current;
            null != n && ((d.current = !0), (0, c.Dr)(t, y(n, e)));
        }
    }, [a, s, t]),
    null == r)
        ? null
        : (0, i.jsx)(A.A, { position: r, roomWidth: n });
}
function I(e) {
    let { channelId: t, roomWidth: n } = e,
        a = (0, l.useRef)(null),
        c = (0, l.useRef)({ x: 0, y: 0, hasValue: !1 }),
        A = (0, r.bG)([u.A], () => u.A.getPendingNote(t)),
        y = (0, r.bG)([u.A], () => u.A.getCreatingNotes(t)),
        I = (0, r.bG)([u.A], () => u.A.getNotes(t)),
        N = (0, r.bG)([o.Ay], () => o.Ay.keyboardModeEnabled);
    (0, l.useEffect)(() => {
        function e(e) {
            c.current = { x: e.clientX, y: e.clientY, hasValue: !0 };
        }
        return (
            document.addEventListener("mousemove", e, { passive: !0 }),
            () => document.removeEventListener("mousemove", e)
        );
    }, []);
    let { interactionsEnabled: v } = (0, h.mf)({ guildId: d.A.getChannel(t)?.guild_id, location: "GuildRoom" });
    if (!v || (0 === I.length && null == A && 0 === y.length)) return null;
    let E = null != A && null == A.position;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            E &&
                !N &&
                (0, i.jsx)("div", {
                    ref: a,
                    className: C.kL,
                    children: (0, i.jsx)(j, { channelId: t, roomWidth: n, containerRef: a, pointerRef: c }),
                }),
            A?.position != null && (0, i.jsx)(f.A, { channelId: t, position: A.position, roomWidth: n }),
            y.map((e) =>
                (0, i.jsx)(
                    "div",
                    {
                        className: C.wD,
                        style: { left: `${e.position.x}%`, top: `${e.position.y}%` },
                        children: (0, i.jsx)(m.A, { roomWidth: n }),
                    },
                    e.localId,
                ),
            ),
            I.length > 0 &&
                (0, i.jsx)("div", {
                    role: "list",
                    "aria-label": x.intl.string(g.default.zzZaRe),
                    className: s()({ [C.IU]: E }),
                    children: I.map((e) => (0, i.jsx)(p.A, { channelId: t, note: e, roomWidth: n }, e.objectId)),
                }),
        ],
    });
}
