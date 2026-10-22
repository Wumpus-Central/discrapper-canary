n.d(t, { P: () => h });
var r = n(351225),
    i = n(184093),
    l = n(225801),
    a = n(635597),
    o = n(66464),
    s = n(366632),
    u = n(747884),
    c = n(753154),
    d = n(582128);
function h(e, t, n) {
    let { labelProps: h, fieldProps: b } = (0, o.M)(e),
        p = "vertical" === e.orientation;
    r.S.set(t, { id: h.id ?? b.id, "aria-describedby": e["aria-describedby"], "aria-details": e["aria-details"] });
    let { direction: g } = (0, s.Y)(),
        { addGlobalListener: f, removeGlobalListener: m } = (0, a.A)(),
        y = (0, d.useRef)(null),
        v = "rtl" === g,
        K = (0, d.useRef)(null),
        { moveProps: P } = (0, u.f)({
            onMoveStart() {
                K.current = null;
            },
            onMove({ deltaX: e, deltaY: r }) {
                if (!n.current) return;
                let { height: i, width: l } = n.current.getBoundingClientRect(),
                    a = p ? i : l;
                null == K.current && null != y.current && (K.current = t.getThumbPercent(y.current) * a);
                let o = p ? r : e;
                if (((p || v) && (o = -o), (K.current += o), null != y.current && n.current)) {
                    let e = (0, c.qE)(K.current / a, 0, 1);
                    t.setThumbPercent(y.current, e);
                }
            },
            onMoveEnd() {
                null != y.current && (t.setThumbDragging(y.current, !1), (y.current = null));
            },
        }),
        T = (0, d.useRef)(void 0),
        w = (r, i, l, a) => {
            if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
                let e,
                    { height: o, width: s, top: u, left: c } = n.current.getBoundingClientRect(),
                    d = ((p ? a : l) - (p ? u : c)) / (p ? o : s);
                ("rtl" === g || p) && (d = 1 - d);
                let h = t.getPercentValue(d),
                    b = t.values.findIndex((e) => h - e < 0);
                (e =
                    0 === b
                        ? b
                        : -1 === b
                          ? t.values.length - 1
                          : Math.abs(t.values[b - 1] - h) < Math.abs(t.values[b] - h)
                            ? b - 1
                            : b) >= 0 && t.isThumbEditable(e)
                    ? (r.preventDefault(),
                      (y.current = e),
                      t.setFocusedThumb(e),
                      (T.current = i),
                      t.setThumbDragging(y.current, !0),
                      t.setThumbValue(e, h),
                      f(window, "mouseup", D, !1),
                      f(window, "touchend", D, !1),
                      f(window, "pointerup", D, !1))
                    : (y.current = null);
            }
        },
        D = (e) => {
            (e.pointerId ?? e.changedTouches?.[0].identifier) === T.current &&
                (null != y.current && (t.setThumbDragging(y.current, !1), (y.current = null)),
                m(window, "mouseup", D, !1),
                m(window, "touchend", D, !1),
                m(window, "pointerup", D, !1));
        };
    return (
        "htmlFor" in h &&
            h.htmlFor &&
            (delete h.htmlFor,
            (h.onClick = () => {
                (document.getElementById((0, r.h)(t, 0))?.focus(), (0, l.Cl)("keyboard"));
            })),
        {
            labelProps: h,
            groupProps: { role: "group", ...b },
            trackProps: (0, i.v)(
                {
                    onMouseDown(e) {
                        0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || w(e, void 0, e.clientX, e.clientY);
                    },
                    onPointerDown(e) {
                        ("mouse" === e.pointerType && (0 !== e.button || e.altKey || e.ctrlKey || e.metaKey)) ||
                            w(e, e.pointerId, e.clientX, e.clientY);
                    },
                    onTouchStart(e) {
                        w(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                    },
                    style: { position: "relative", touchAction: "none" },
                },
                P,
            ),
            outputProps: { htmlFor: t.values.map((e, n) => (0, r.h)(t, n)).join(" "), "aria-live": "off" },
        }
    );
}
