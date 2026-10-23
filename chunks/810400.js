r.d(t, { P: () => p });
var n = r(351225),
    i = r(184093),
    o = r(225801),
    a = r(635597),
    s = r(66464),
    l = r(366632),
    u = r(747884),
    c = r(753154),
    f = r(582128);
function p(e, t, r) {
    let { labelProps: p, fieldProps: d } = (0, s.M)(e),
        h = "vertical" === e.orientation;
    n.S.set(t, { id: p.id ?? d.id, "aria-describedby": e["aria-describedby"], "aria-details": e["aria-details"] });
    let { direction: m } = (0, l.Y)(),
        { addGlobalListener: v, removeGlobalListener: y } = (0, a.A)(),
        g = (0, f.useRef)(null),
        b = "rtl" === m,
        w = (0, f.useRef)(null),
        { moveProps: _ } = (0, u.f)({
            onMoveStart() {
                w.current = null;
            },
            onMove({ deltaX: e, deltaY: n }) {
                if (!r.current) return;
                let { height: i, width: o } = r.current.getBoundingClientRect(),
                    a = h ? i : o;
                null == w.current && null != g.current && (w.current = t.getThumbPercent(g.current) * a);
                let s = h ? n : e;
                if (((h || b) && (s = -s), (w.current += s), null != g.current && r.current)) {
                    let e = (0, c.qE)(w.current / a, 0, 1);
                    t.setThumbPercent(g.current, e);
                }
            },
            onMoveEnd() {
                null != g.current && (t.setThumbDragging(g.current, !1), (g.current = null));
            },
        }),
        S = (0, f.useRef)(void 0),
        E = (n, i, o, a) => {
            if (r.current && !e.isDisabled && t.values.every((e, r) => !t.isThumbDragging(r))) {
                let e,
                    { height: s, width: l, top: u, left: c } = r.current.getBoundingClientRect(),
                    f = ((h ? a : o) - (h ? u : c)) / (h ? s : l);
                ("rtl" === m || h) && (f = 1 - f);
                let p = t.getPercentValue(f),
                    d = t.values.findIndex((e) => p - e < 0);
                (e =
                    0 === d
                        ? d
                        : -1 === d
                          ? t.values.length - 1
                          : Math.abs(t.values[d - 1] - p) < Math.abs(t.values[d] - p)
                            ? d - 1
                            : d) >= 0 && t.isThumbEditable(e)
                    ? (n.preventDefault(),
                      (g.current = e),
                      t.setFocusedThumb(e),
                      (S.current = i),
                      t.setThumbDragging(g.current, !0),
                      t.setThumbValue(e, p),
                      v(window, "mouseup", x, !1),
                      v(window, "touchend", x, !1),
                      v(window, "pointerup", x, !1))
                    : (g.current = null);
            }
        },
        x = (e) => {
            (e.pointerId ?? e.changedTouches?.[0].identifier) === S.current &&
                (null != g.current && (t.setThumbDragging(g.current, !1), (g.current = null)),
                y(window, "mouseup", x, !1),
                y(window, "touchend", x, !1),
                y(window, "pointerup", x, !1));
        };
    return (
        "htmlFor" in p &&
            p.htmlFor &&
            (delete p.htmlFor,
            (p.onClick = () => {
                (document.getElementById((0, n.h)(t, 0))?.focus(), (0, o.Cl)("keyboard"));
            })),
        {
            labelProps: p,
            groupProps: { role: "group", ...d },
            trackProps: (0, i.v)(
                {
                    onMouseDown(e) {
                        0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || E(e, void 0, e.clientX, e.clientY);
                    },
                    onPointerDown(e) {
                        ("mouse" === e.pointerType && (0 !== e.button || e.altKey || e.ctrlKey || e.metaKey)) ||
                            E(e, e.pointerId, e.clientX, e.clientY);
                    },
                    onTouchStart(e) {
                        E(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                    },
                    style: { position: "relative", touchAction: "none" },
                },
                _,
            ),
            outputProps: { htmlFor: t.values.map((e, r) => (0, n.h)(t, r)).join(" "), "aria-live": "off" },
        }
    );
}
