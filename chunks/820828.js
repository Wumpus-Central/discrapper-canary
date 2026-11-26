n.d(t, { YG: () => A, bd: () => v, zp: () => E, jB: () => C, Oc: () => x, Zs: () => g, Td: () => h, bg: () => p });
var i = n(582128),
    l = n(196765),
    r = n(621466),
    a = n(723702);
let s = (0, n(945810).mj)({
    kind: "user",
    name: "2026-10-clips-drag-and-drop",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var o = n(419490),
    u = n(825245),
    c = n(510163);
let d = "application/x-discord-clip",
    m = null,
    f = (0, l.v)(() => ({ phase: "idle" }));
function p() {
    return f((e) => "idle" !== e.phase);
}
function h() {
    return f((e) => "dragging" === e.phase);
}
function g(e) {
    let t = p(),
        n = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            t ? (n.current = !0) : n.current && ((n.current = !1), e());
        }, [t, e]),
        h()
    );
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    m?.finish(e);
}
function E() {
    return null != m;
}
function C(e) {
    return (0, a.xl)() && e.types.includes(d) && s.getConfig({ location: "isClipDrag" }).enabled;
}
function v(e) {
    if (!C(e)) return;
    let t = e.getData(d);
    if (m?.clipId !== t) return;
    let n = o.Ay.getClipById(t);
    if (null != n && !0 !== n.pending && !(o.Ay.getExportingClipIds().size > 0)) return n;
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { enabled: n } = s.useConfig({ location: "useClipDrag" }),
        l = (0, a.xl)() && n,
        p = l && !t && !0 !== e.pending,
        h = i.useRef(null),
        g = i.useRef(null),
        E = i.useCallback(
            (t) => {
                let n = (0, r.vq)(t.target, Element)
                        ? t.target.closest('button, a, [role="button"], [data-clips-progress], [data-clips-avatars]')
                        : null,
                    i = h.current,
                    l = null != n && n !== i && i?.contains(n) === !0;
                if (!p || l || null == i || null == t.dataTransfer || o.Ay.getExportingClipIds().size > 0)
                    return void t.preventDefault();
                (A(),
                    t.dataTransfer.clearData(),
                    t.dataTransfer.setData(d, e.id),
                    (t.dataTransfer.effectAllowed = "copy"),
                    t.stopPropagation());
                let a = (0, u.v)(i, t),
                    s = i.ownerDocument,
                    c = (e) => {
                        null != e.dataTransfer && (e.dataTransfer.dropEffect = "none");
                    },
                    E = (e) => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), v());
                    },
                    C = () => v(),
                    v = function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        (clearTimeout(x),
                            a(e),
                            s.removeEventListener("dragover", c, !0),
                            s.removeEventListener("dragend", C, !0),
                            s.removeEventListener("keydown", E, !0),
                            delete i.dataset.clipDragging,
                            (m = null),
                            f.setState({ phase: "idle" }),
                            (g.current = null));
                    };
                ((m = { clipId: e.id, finish: v }),
                    f.setState({ phase: "starting" }),
                    (g.current = v),
                    s.addEventListener("dragover", c, !0),
                    s.addEventListener("dragend", C, !0),
                    s.addEventListener("keydown", E, !0));
                let x = setTimeout(() => {
                    (f.setState({ phase: "dragging" }), (i.dataset.clipDragging = "true"));
                }, 0);
            },
            [p, e.id],
        );
    return (
        i.useEffect(() => {
            let e = h.current;
            if (null != e && l)
                return (
                    (e.draggable = p),
                    e.classList.add(c.sP),
                    e.addEventListener("dragstart", E),
                    () => {
                        (g.current?.(),
                            (e.draggable = !1),
                            e.classList.remove(c.sP),
                            e.removeEventListener("dragstart", E));
                    }
                );
        }, [l, p, E]),
        h
    );
}
