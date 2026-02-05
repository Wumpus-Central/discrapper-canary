"use strict";
n.d(t, { A: () => g, n: () => i });
var r = n(741918),
    i = (function (e) {
        return (e.UPDATE_COLUMN_COUNTS = "UPDATE_COLUMN_COUNTS"), (e.SET_FOCUSED_POSITION = "SET_FOCUSED_POSITION"), e;
    })({});
function a(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t);
}
function s(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t);
}
function o(e, t) {
    let { columnCounts: n } = t,
        r = s(a(0, n.length - 1), e.focusedY);
    return { ...e, columnCounts: n, focusedX: s(null == n[r] ? 0 : n[r] - 1, e.focusedX), focusedY: r };
}
function l(e, t) {
    let { x: n, y: r } = t,
        i = a(0, s(r, e.columnCounts.length - 1));
    return { ...e, focusedX: a(0, s(n, e.columnCounts[i] - 1)), focusedY: i };
}
function u(e, t) {
    let n = a(0, e.focusedY - 1);
    return { ...e, focusedX: s(e.columnCounts[n] - 1, e.focusedX), focusedY: n };
}
function c(e, t) {
    let n = s(e.focusedY + 1, e.columnCounts.length - 1);
    return { ...e, focusedX: s(e.columnCounts[n] - 1, e.focusedX), focusedY: n };
}
function d(e, t) {
    let n = e.focusedY !== e.columnCounts.length - 1 && e.focusedX + 1 === e.columnCounts[e.focusedY],
        r = n ? 0 : s(e.focusedX + 1, e.columnCounts[e.focusedY] - 1),
        i = n ? e.focusedY + 1 : e.focusedY;
    return { ...e, focusedX: r, focusedY: i };
}
function _(e, t) {
    let n = 0 !== e.focusedY && 0 === e.focusedX,
        r = n ? e.focusedY - 1 : e.focusedY,
        i = n ? e.columnCounts[r] - 1 : a(0, e.focusedX - 1);
    return { ...e, focusedX: i, focusedY: r };
}
function f(e, t) {
    return { ...e, focusedX: 0 };
}
function p(e, t) {
    return { ...e, focusedX: e.columnCounts[e.focusedY] - 1 };
}
function h(e, t) {
    return { ...e, focusedX: 0, focusedY: 0 };
}
function m(e, t) {
    let n = e.columnCounts.length - 1;
    return { ...e, focusedX: e.columnCounts[n] - 1, focusedY: n };
}
function g(e, t) {
    switch (t.type) {
        case r.X2.NAVIGATE_UP:
            return u(e, t);
        case r.X2.NAVIGATE_DOWN:
            return c(e, t);
        case r.X2.NAVIGATE_RIGHT:
            return d(e, t);
        case r.X2.NAVIGATE_LEFT:
            return _(e, t);
        case r.X2.NAVIGATE_INLINE_START:
            return f(e, t);
        case r.X2.NAVIGATE_INLINE_END:
            return p(e, t);
        case r.X2.NAVIGATE_START:
            return h(e, t);
        case r.X2.NAVIGATE_END:
            return m(e, t);
        case "UPDATE_COLUMN_COUNTS":
            return o(e, t);
        case "SET_FOCUSED_POSITION":
            return l(e, t);
        case r.X2.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn(`Grid navigator was given an unhandled action ${t.type}`);
    }
    return e;
}
