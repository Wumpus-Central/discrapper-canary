n(891784);
var i = n(149987);
function r(e) {
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
function a(e) {
    if (null == e) return null;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (!("assistant" !== i.role || o(i)) && ((!t && ((t = !0), !r(i))) || (null != i.turn_id && !r(i)))) return i;
    }
    return null;
}
function s(e, t) {
    return e.turn_id === t || e.id === `turn:${t}`;
}
function l(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (s(e[n], t)) return n;
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
function d(e) {
    return "user" === e.role && "" === e.content && (e.attachments?.length ?? 0) === 0;
}
n.d(
    t,
    {},
    {
        B0: function (e, t) {
            let n = e[t],
                i = n?.turn_id;
            if (null == n || "assistant" !== n.role || null == i || "" !== n.content || r(n)) return !1;
            for (let n = t - 1; n >= 0; n--) {
                let t = e[n];
                if ("user" === t.role) break;
                if (s(t, i)) return r(t) && !0 !== t.continued;
            }
            return !1;
        },
        B5: o,
        BL: r,
        Ji: a,
        ST: d,
        Si: function (e, t) {
            let n = l(e, t);
            if (-1 !== n) return n;
            for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (!("assistant" !== n.role || r(n)) && null == n.turn_id) return t;
            }
            return -1;
        },
        _D: function (e, t, n) {
            let i = e.slice();
            return ((i[t] = n), i);
        },
        gi: l,
        i_: function (e) {
            return e.some((e) => !d(e));
        },
        lb: function (e) {
            return null != e.turn_id ? e.turn_id : e.id.startsWith("turn:") ? e.id.slice(5) : null;
        },
        pZ: function (e) {
            return "assistant" === e.role && !o(e) && !r(e) && !0 !== e.stopRequested;
        },
        q2: function (e) {
            return null != a(e);
        },
        s3: s,
    },
);
