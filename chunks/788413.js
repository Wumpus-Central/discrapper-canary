n.d(t, { A: () => o, n: () => r });
var i,
    s = n(741918),
    r =
        (((i = {}).UPDATE_COLUMN_COUNTS = "UPDATE_COLUMN_COUNTS"),
        (i.SET_FOCUSED_POSITION = "SET_FOCUSED_POSITION"),
        i);
function l(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t);
}
function a(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t);
}
function o(e, t) {
    switch (t.type) {
        case s.X2.NAVIGATE_UP:
            let n;
            return ((n = l(0, e.focusedY - 1)), { ...e, focusedX: a(e.columnCounts[n] - 1, e.focusedX), focusedY: n });
        case s.X2.NAVIGATE_DOWN:
            let i;
            return (
                (i = a(e.focusedY + 1, e.columnCounts.length - 1)),
                { ...e, focusedX: a(e.columnCounts[i] - 1, e.focusedX), focusedY: i }
            );
        case s.X2.NAVIGATE_RIGHT:
            let r, o, c;
            return (
                (o = (r = e.focusedY !== e.columnCounts.length - 1 && e.focusedX + 1 === e.columnCounts[e.focusedY])
                    ? 0
                    : a(e.focusedX + 1, e.columnCounts[e.focusedY] - 1)),
                (c = r ? e.focusedY + 1 : e.focusedY),
                { ...e, focusedX: o, focusedY: c }
            );
        case s.X2.NAVIGATE_LEFT:
            let u, d, m;
            return (
                (d = (u = 0 !== e.focusedY && 0 === e.focusedX) ? e.focusedY - 1 : e.focusedY),
                (m = u ? e.columnCounts[d] - 1 : l(0, e.focusedX - 1)),
                { ...e, focusedX: m, focusedY: d }
            );
        case s.X2.NAVIGATE_INLINE_START:
            return { ...e, focusedX: 0 };
        case s.X2.NAVIGATE_INLINE_END:
            return { ...e, focusedX: e.columnCounts[e.focusedY] - 1 };
        case s.X2.NAVIGATE_START:
            return { ...e, focusedX: 0, focusedY: 0 };
        case s.X2.NAVIGATE_END:
            let f;
            return ((f = e.columnCounts.length - 1), { ...e, focusedX: e.columnCounts[f] - 1, focusedY: f });
        case "UPDATE_COLUMN_COUNTS":
            return (function (e, t) {
                let { columnCounts: n } = t,
                    i = a(l(0, n.length - 1), e.focusedY);
                return { ...e, columnCounts: n, focusedX: a(null == n[i] ? 0 : n[i] - 1, e.focusedX), focusedY: i };
            })(e, t);
        case "SET_FOCUSED_POSITION":
            return (function (e, t) {
                let { x: n, y: i } = t,
                    s = l(0, a(i, e.columnCounts.length - 1));
                return { ...e, focusedX: l(0, a(n, e.columnCounts[s] - 1)), focusedY: s };
            })(e, t);
        case s.X2.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn(`Grid navigator was given an unhandled action ${t.type}`);
    }
    return e;
}
