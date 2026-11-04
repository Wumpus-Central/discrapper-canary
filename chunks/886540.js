n(891784);
var l = n(149987);
function i(e) {
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
function s(e) {
    if (null == e) return null;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let l = e[n];
        if (!("assistant" !== l.role || o(l)) && ((!t && ((t = !0), !i(l))) || (null != l.turn_id && !i(l)))) return l;
    }
    return null;
}
function r(e, t) {
    return e.turn_id === t || e.id === `turn:${t}`;
}
function u(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (r(e[n], t)) return n;
    return -1;
}
function o(e) {
    return (
        "side_reply" === e.kind ||
        "publish_notice" === e.kind ||
        "project_event" === e.kind ||
        "context_boundary" === e.kind
    );
}
n.d(
    t,
    {},
    {
        B0: function (e, t) {
            let n = e[t],
                l = n?.turn_id;
            if (null == n || "assistant" !== n.role || null == l || "" !== n.content || i(n)) return !1;
            for (let n = t - 1; n >= 0; n--) {
                let t = e[n];
                if ("user" === t.role) break;
                if (r(t, l)) return i(t) && !0 !== t.continued;
            }
            return !1;
        },
        B5: o,
        BL: i,
        Ji: s,
        Si: function (e, t) {
            let n = u(e, t);
            if (-1 !== n) return n;
            for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (!("assistant" !== n.role || i(n)) && null == n.turn_id) return t;
            }
            return -1;
        },
        _D: function (e, t, n) {
            let l = e.slice();
            return ((l[t] = n), l);
        },
        gi: u,
        lb: function (e) {
            return null != e.turn_id ? e.turn_id : e.id.startsWith("turn:") ? e.id.slice(5) : null;
        },
        pZ: function (e) {
            return "assistant" === e.role && !o(e) && !i(e) && !0 !== e.stopRequested;
        },
        q2: function (e) {
            return null != s(e);
        },
        s3: r,
    },
);
