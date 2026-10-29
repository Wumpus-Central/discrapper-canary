r.d(t, { P: () => d });
var n = r(291513),
    i = r(519837),
    o = r(478793),
    a = r(867085),
    s = r(514912),
    l = r(379880),
    u = r(363948),
    c = r(594946),
    f = r(582128);
function d(e, t, r) {
    let { labelProps: d, fieldProps: p } = (0, s.M)(e),
        h = "vertical" === e.orientation;
    n.S.set(t, { id: d.id ?? p.id, "aria-describedby": e["aria-describedby"], "aria-details": e["aria-details"] });
    let { direction: m } = (0, l.Y)(),
        { addGlobalListener: v, removeGlobalListener: y } = (0, a.A)(),
        g = (0, f.useRef)(null),
        b = "rtl" === m,
        w = (0, f.useRef)(null),
        { moveProps: _ } = (0, u.f)({
            onMoveStart() {
                w.current = null;
            },
            onMove(e) {
                let { deltaX: n, deltaY: i } = e;
                if (!r.current) return;
                let { height: o, width: a } = r.current.getBoundingClientRect(),
                    s = h ? o : a;
                null == w.current && null != g.current && (w.current = t.getThumbPercent(g.current) * s);
                let l = h ? i : n;
                if (((h || b) && (l = -l), (w.current += l), null != g.current && r.current)) {
                    let e = (0, c.qE)(w.current / s, 0, 1);
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
                let d = t.getPercentValue(f),
                    p = t.values.findIndex((e) => d - e < 0);
                (e =
                    0 === p
                        ? p
                        : -1 === p
                          ? t.values.length - 1
                          : Math.abs(t.values[p - 1] - d) < Math.abs(t.values[p] - d)
                            ? p - 1
                            : p) >= 0 && t.isThumbEditable(e)
                    ? (n.preventDefault(),
                      (g.current = e),
                      t.setFocusedThumb(e),
                      (S.current = i),
                      t.setThumbDragging(g.current, !0),
                      t.setThumbValue(e, d),
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
        "htmlFor" in d &&
            d.htmlFor &&
            (delete d.htmlFor,
            (d.onClick = () => {
                (document.getElementById((0, n.h)(t, 0))?.focus(), (0, o.Cl)("keyboard"));
            })),
        {
            labelProps: d,
            groupProps: { role: "group", ...p },
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
