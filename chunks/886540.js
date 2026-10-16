n.d(t, {
    B0: () => d,
    B5: () => p,
    BL: () => s,
    DZ: () => u,
    Ji: () => r,
    Si: () => f,
    _D: () => _,
    gi: () => c,
    pZ: () => h,
    q2: () => o,
    s3: () => a,
});
var l = n(891784),
    i = n(149987);
function s(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        null != e.clarification ||
        null != e.intake ||
        (0, i.T3)(e.steps)
    );
}
function r(e) {
    if (null == e) return null;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let l = e[n];
        if (!("assistant" !== l.role || p(l)) && ((!t && ((t = !0), !s(l))) || (null != l.turn_id && !s(l)))) return l;
    }
    return null;
}
function u(e) {
    let t = r(e);
    if (null == e || null == t) return null;
    for (let n = e.indexOf(t) - 1; n >= 0; n--) if ("user" === e[n].role) return e[n].user_id ?? null;
    return null;
}
function o(e) {
    return null != r(e);
}
function d(e, t) {
    let n = e[t],
        l = n?.turn_id;
    if (null == n || "assistant" !== n.role || null == l || "" !== n.content || s(n)) return !1;
    for (let n = t - 1; n >= 0; n--) {
        let t = e[n];
        if ("user" === t.role) break;
        if (a(t, l)) return s(t) && !0 !== t.continued;
    }
    return !1;
}
function a(e, t) {
    return e.turn_id === t || e.id === `${l.o_}${t}`;
}
function c(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (a(e[n], t)) return n;
    return -1;
}
function f(e, t) {
    let n = c(e, t);
    if (-1 !== n) return n;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (!("assistant" !== n.role || s(n)) && null == n.turn_id) return t;
    }
    return -1;
}
function _(e, t, n) {
    let l = e.slice();
    return ((l[t] = n), l);
}
function p(e) {
    return (
        "side_reply" === e.kind ||
        "publish_notice" === e.kind ||
        "project_event" === e.kind ||
        "context_boundary" === e.kind
    );
}
function h(e) {
    return "assistant" === e.role && !p(e) && !s(e) && !0 !== e.stopRequested;
}
