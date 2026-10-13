n.d(t, {
    B0: () => d,
    B5: () => p,
    BL: () => s,
    DZ: () => u,
    Ji: () => r,
    Si: () => c,
    _D: () => _,
    gi: () => f,
    pZ: () => h,
    q2: () => o,
    s3: () => a,
});
var i = n(891784),
    l = n(149987);
function s(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        null != e.clarification ||
        null != e.intake ||
        (0, l.T3)(e.steps)
    );
}
function r(e) {
    if (null == e) return null;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (!("assistant" !== i.role || p(i)) && ((!t && ((t = !0), !s(i))) || (null != i.turn_id && !s(i)))) return i;
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
        i = n?.turn_id;
    if (null == n || "assistant" !== n.role || null == i || "" !== n.content || s(n)) return !1;
    for (let n = t - 1; n >= 0; n--) {
        let t = e[n];
        if ("user" === t.role) break;
        if (a(t, i)) return s(t) && !0 !== t.continued;
    }
    return !1;
}
function a(e, t) {
    return e.turn_id === t || e.id === `${i.o_}${t}`;
}
function f(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (a(e[n], t)) return n;
    return -1;
}
function c(e, t) {
    let n = f(e, t);
    if (-1 !== n) return n;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (!("assistant" !== n.role || s(n)) && null == n.turn_id) return t;
    }
    return -1;
}
function _(e, t, n) {
    let i = e.slice();
    return ((i[t] = n), i);
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
