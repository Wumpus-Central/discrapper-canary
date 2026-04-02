"use strict";
n.d(t, {
    CU: () => T,
    Ou: () => g,
    PT: () => _,
    RJ: () => f,
    Yc: () => p,
    __: () => d,
    lO: () => A,
    vt: () => I,
    wJ: () => S,
}),
    n(134528),
    n(947204),
    n(775443),
    n(30146);
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(845255),
    o = n(251358),
    l = n(931280),
    u = n(346640),
    c = n(985018);
function d(e) {
    let t = u.l8[e];
    s()("basic" === t.type, "unlockAchievement can only be used with basic achievements");
    let n = a.A.getAchievement(e);
    if (null != n && "basic" === n.type && n.unlocked) return;
    let r = { type: t.type, id: e, unlocked: !0 };
    (0, o.ik)(r), (0, l.b)(e, r);
}
function _(e, t) {
    let { additive: n = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = u.l8[e];
    s()("basic" !== r.type, "progressAchievement cannot be used with basic achievements");
    let i = a.A.getAchievement(e);
    if (i?.unlocked) return;
    let c = i?.type === "basic" ? 0 : (i?.total ?? 0),
        d = n ? c + t : t,
        _ = g(r, i),
        f = { type: r.type, id: e, total: Math.min(d, h(r)), unlocked: i?.unlocked ?? !1 };
    if ("progress" === r.type) f.total >= r.requirement && ((0, l.b)(e, f), (f.unlocked = !0));
    else if (_ !== g(r, f)) {
        (0, l.b)(e, f);
        let t = r.levels.at(-1);
        null != t && f.total >= t.requirement && (f.unlocked = !0);
    }
    (0, o.ik)(f);
}
function f(e) {
    (0, r.useEffect)(() => {
        let t = a.A.getAchievement(e);
        s()(null == t || "basic" === t.type, "useUnlockAchievement can only be used with basic achievements"),
            (null != t && ("basic" !== t.type || t.unlocked)) || d(e);
    }, [e]);
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    (0, r.useEffect)(() => {
        let n = a.A.getAchievement(e);
        s()(null == n || "basic" !== n.type, "useProgressAchievement can only be used with non-basic achievements"),
            (null == n || "basic" !== n.type) && _(e, t);
    }, [e, t]);
}
function h(e) {
    switch (e.type) {
        case "basic":
            return 1;
        case "progress":
            return e.requirement;
        case "single-title-levels":
        case "multi-title-levels":
            return e.levels[e.levels.length - 1].requirement;
    }
}
function m(e, t) {
    return t?.type !== "multi-title-levels" && t?.type !== "single-title-levels"
        ? e.levels[0]
        : e.levels.find((e) => t.total < e.requirement);
}
function E(e, t) {
    if ((t?.type !== "multi-title-levels" && t?.type !== "single-title-levels") || t.total < e.levels[0].requirement)
        return e.levels[0];
    let n = e.levels.findLast((e) => t.total >= e.requirement),
        r = e.levels[e.levels.length - 1];
    return n ?? r;
}
function g(e, t) {
    return null != t && t?.type !== "multi-title-levels" && t?.type !== "single-title-levels"
        ? null
        : "multi-title-levels" === e.type || "single-title-levels" === e.type
          ? null == t
              ? 0
              : e.levels.findLastIndex((e) => t.total >= e.requirement) + 1
          : null;
}
function A(e, t) {
    switch (e.type) {
        case "basic":
        case "progress":
        case "single-title-levels":
            return c.intl.string(e.name);
        case "multi-title-levels":
            if (t?.type !== "multi-title-levels") return c.intl.string(e.levels[0].name);
            let n = E(e, t);
            return c.intl.string(n.name);
    }
}
function I(e, t) {
    switch (e.type) {
        case "basic":
            return;
        case "progress":
        case "single-title-levels":
        case "multi-title-levels":
            switch (t?.type) {
                case "progress":
                case "single-title-levels":
                case "multi-title-levels":
                    return t.total;
                default:
                    return 0;
            }
    }
}
function T(e, t) {
    switch (e.type) {
        case "basic":
            return;
        case "progress":
            return e.requirement;
        case "single-title-levels":
        case "multi-title-levels":
            let n = m(e, t);
            return n?.requirement;
    }
}
function S(e, t) {
    switch (e.type) {
        case "basic":
            return;
        case "progress":
            return e.requirement;
        case "single-title-levels":
        case "multi-title-levels":
            let n = E(e, t);
            return n?.requirement;
    }
}
