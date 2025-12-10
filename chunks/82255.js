r.d(t, {
    $k: () => A,
    Dp: () => g,
    Gx: () => m,
    HN: () => y,
    HR: () => p,
    Hb: () => T,
    Tt: () => O,
    XU: () => N,
    _4: () => h,
    ed: () => L,
    i0: () => I,
    j5: () => C,
    ve: () => d,
    wy: () => R,
    yc: () => P,
});
var n = r(886649),
    a = r(490990),
    i = r(343573),
    o = r(805666),
    _ = r(732418),
    s = r(509440),
    c = r(608692),
    E = r(8062),
    l = r(366000),
    u = r(354023);
let d = 0,
    I = 1;
function p(e) {
    let { spanId: t, traceId: r } = e.spanContext(),
        { data: a, op: i, parent_span_id: o, status: _, origin: s } = N(e);
    return (0, n.Jr)({
        parent_span_id: o,
        span_id: t,
        trace_id: r,
        data: a,
        op: i,
        status: _,
        origin: s,
    });
}
function R(e) {
    let { spanId: t, traceId: r } = e.spanContext(),
        { parent_span_id: a } = N(e);
    return (0, n.Jr)({
        parent_span_id: a,
        span_id: t,
        trace_id: r,
    });
}
function T(e) {
    let { traceId: t, spanId: r } = e.spanContext(),
        n = O(e);
    return (0, a.$p)(t, r, n);
}
function A(e) {
    return "number" == typeof e
        ? f(e)
        : Array.isArray(e)
          ? e[0] + e[1] / 1000000000
          : e instanceof Date
            ? f(e.getTime())
            : (0, i.ph)();
}
function f(e) {
    return e > 9999999999 ? e / 1000 : e;
}
function N(e) {
    if ("function" == typeof e.getSpanJSON) return e.getSpanJSON();
    try {
        var t;
        let { spanId: r, traceId: a } = e.spanContext();
        if ((t = e).attributes && t.startTime && t.name && t.endTime && t.status) {
            let { attributes: t, startTime: i, name: o, endTime: _, parentSpanId: s, status: l } = e;
            return (0, n.Jr)({
                span_id: r,
                trace_id: a,
                data: t,
                description: o,
                parent_span_id: s,
                start_timestamp: A(i),
                timestamp: A(_) || void 0,
                status: h(l),
                op: t[E.$J],
                origin: t[E.S3],
                _metrics_summary: (0, c.y)(e),
            });
        }
        return {
            span_id: r,
            trace_id: a,
        };
    } catch (e) {
        return {};
    }
}
function O(e) {
    let { traceFlags: t } = e.spanContext();
    return t === I;
}
function h(e) {
    if (e && e.code !== l.pq) return e.code === l.OP ? "ok" : e.message || "unknown_error";
}
let S = "_sentryChildSpans",
    D = "_sentryRootSpan";
function C(e, t) {
    let r = e[D] || e;
    (0, n.xp)(t, D, r), e[S] ? e[S].add(t) : (0, n.xp)(e, S, new Set([t]));
}
function L(e, t) {
    e[S] && e[S].delete(t);
}
function g(e) {
    let t = new Set();
    return (
        !(function e(r) {
            if (!t.has(r) && O(r)) for (let n of (t.add(r), r[S] ? Array.from(r[S]) : [])) e(n);
        })(e),
        Array.from(t)
    );
}
function m(e) {
    return e[D] || e;
}
function y() {
    let e = (0, _.c)(),
        t = (0, o.G)(e);
    return t.getActiveSpan ? t.getActiveSpan() : (0, u.Y)((0, s.nZ)());
}
function P(e, t, r, n, a, i) {
    let o = y();
    o && (0, c.V)(o, e, t, r, n, a, i);
}
