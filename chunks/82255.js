n.d(t, {
    $k: () => R,
    Dp: () => D,
    Gx: () => C,
    HN: () => y,
    HR: () => f,
    Hb: () => T,
    Tt: () => h,
    XU: () => N,
    _4: () => O,
    ed: () => m,
    i0: () => p,
    j5: () => g,
    ve: () => d,
    wy: () => I,
    yc: () => P,
});
var r = n(886649),
    i = n(490990),
    a = n(343573),
    o = n(805666),
    _ = n(732418),
    s = n(509440),
    c = n(608692),
    E = n(8062),
    l = n(366000),
    u = n(354023);
let d = 0,
    p = 1;
function f(e) {
    let { spanId: t, traceId: n } = e.spanContext(),
        { data: i, op: a, parent_span_id: o, status: _, origin: s } = N(e);
    return (0, r.Jr)({
        parent_span_id: o,
        span_id: t,
        trace_id: n,
        data: i,
        op: a,
        status: _,
        origin: s,
    });
}
function I(e) {
    let { spanId: t, traceId: n } = e.spanContext(),
        { parent_span_id: i } = N(e);
    return (0, r.Jr)({
        parent_span_id: i,
        span_id: t,
        trace_id: n,
    });
}
function T(e) {
    let { traceId: t, spanId: n } = e.spanContext(),
        r = h(e);
    return (0, i.$p)(t, n, r);
}
function R(e) {
    return "number" == typeof e
        ? A(e)
        : Array.isArray(e)
          ? e[0] + e[1] / 1000000000
          : e instanceof Date
            ? A(e.getTime())
            : (0, a.ph)();
}
function A(e) {
    return e > 9999999999 ? e / 1000 : e;
}
function N(e) {
    if ("function" == typeof e.getSpanJSON) return e.getSpanJSON();
    try {
        var t;
        let { spanId: n, traceId: i } = e.spanContext();
        if ((t = e).attributes && t.startTime && t.name && t.endTime && t.status) {
            let { attributes: t, startTime: a, name: o, endTime: _, parentSpanId: s, status: l } = e;
            return (0, r.Jr)({
                span_id: n,
                trace_id: i,
                data: t,
                description: o,
                parent_span_id: s,
                start_timestamp: R(a),
                timestamp: R(_) || void 0,
                status: O(l),
                op: t[E.$J],
                origin: t[E.S3],
                _metrics_summary: (0, c.y)(e),
            });
        }
        return {
            span_id: n,
            trace_id: i,
        };
    } catch (e) {
        return {};
    }
}
function h(e) {
    let { traceFlags: t } = e.spanContext();
    return t === p;
}
function O(e) {
    if (e && e.code !== l.pq) return e.code === l.OP ? "ok" : e.message || "unknown_error";
}
let S = "_sentryChildSpans",
    L = "_sentryRootSpan";
function g(e, t) {
    let n = e[L] || e;
    (0, r.xp)(t, L, n), e[S] ? e[S].add(t) : (0, r.xp)(e, S, new Set([t]));
}
function m(e, t) {
    e[S] && e[S].delete(t);
}
function D(e) {
    let t = new Set();
    return (
        !(function e(n) {
            if (!t.has(n) && h(n)) for (let r of (t.add(n), n[S] ? Array.from(n[S]) : [])) e(r);
        })(e),
        Array.from(t)
    );
}
function C(e) {
    return e[L] || e;
}
function y() {
    let e = (0, _.c)(),
        t = (0, o.G)(e);
    return t.getActiveSpan ? t.getActiveSpan() : (0, u.Y)((0, s.nZ)());
}
function P(e, t, n, r, i, a) {
    let o = y();
    o && (0, c.V)(o, e, t, n, r, i, a);
}
