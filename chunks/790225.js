"use strict";
n.d(t, {
    CU: () => S,
    Ou: () => A,
    PT: () => f,
    RJ: () => p,
    Yc: () => h,
    __: () => _,
    lO: () => I,
    vt: () => T,
    wJ: () => y,
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
    l = n(905228),
    u = n(931280),
    c = n(346640),
    d = n(985018);
function _(e) {
    let t = c.l8[e];
    s()("basic" === t.type, "unlockAchievement can only be used with basic achievements");
    let n = a.A.getAchievement(e);
    if (null != n && "basic" === n.type && n.unlocked) return;
    let r = { type: t.type, id: e, unlocked: !0 };
    (0, o.ik)(r), (0, u.b)(e, r), f(l.R.TWELVE, 1);
}
function f(e, t) {
    let { additive: n = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = c.l8[e];
    s()("basic" !== r.type, "progressAchievement cannot be used with basic achievements");
    let i = a.A.getAchievement(e);
    if (i?.unlocked) return;
    let d = i?.type === "basic" ? 0 : (i?.total ?? 0),
        _ = n ? d + t : t,
        p = A(r, i),
        h = { type: r.type, id: e, total: Math.min(_, m(r)), unlocked: i?.unlocked ?? !1 };
    if ("progress" === r.type)
        h.total >= r.requirement && ((0, u.b)(e, h), (h.unlocked = !0), e !== l.R.TWELVE && f(l.R.TWELVE, 1));
    else {
        let t = A(r, h);
        if (p !== t) {
            (0, u.b)(e, h);
            let n = r.levels.at(-1);
            null != n && h.total >= n.requirement && (h.unlocked = !0),
                0 === p && null != t && t > 1 && f(l.R.TWELVE, 1);
        }
    }
    (0, o.ik)(h);
}
function p(e) {
    (0, r.useEffect)(() => {
        let t = a.A.getAchievement(e);
        s()(null == t || "basic" === t.type, "useUnlockAchievement can only be used with basic achievements"),
            (null != t && ("basic" !== t.type || t.unlocked)) || _(e);
    }, [e]);
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    (0, r.useEffect)(() => {
        let n = a.A.getAchievement(e);
        s()(null == n || "basic" !== n.type, "useProgressAchievement can only be used with non-basic achievements"),
            (null == n || "basic" !== n.type) && f(e, t);
    }, [e, t]);
}
function m(e) {
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
function E(e, t) {
    return t?.type !== "multi-title-levels" && t?.type !== "single-title-levels"
        ? e.levels[0]
        : e.levels.find((e) => t.total < e.requirement);
}
function g(e, t) {
    if ((t?.type !== "multi-title-levels" && t?.type !== "single-title-levels") || t.total < e.levels[0].requirement)
        return e.levels[0];
    let n = e.levels.findLast((e) => t.total >= e.requirement),
        r = e.levels[e.levels.length - 1];
    return n ?? r;
}
function A(e, t) {
    return null != t && t?.type !== "multi-title-levels" && t?.type !== "single-title-levels"
        ? null
        : "multi-title-levels" === e.type || "single-title-levels" === e.type
          ? null == t
              ? 0
              : e.levels.findLastIndex((e) => t.total >= e.requirement) + 1
          : null;
}
function I(e, t) {
    switch (e.type) {
        case "basic":
        case "progress":
        case "single-title-levels":
            return d.intl.string(e.name);
        case "multi-title-levels":
            if (t?.type !== "multi-title-levels") return d.intl.string(e.levels[0].name);
            let n = g(e, t);
            return d.intl.string(n.name);
    }
}
function T(e, t) {
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
function y(e, t) {
    switch (e.type) {
        case "basic":
            return;
        case "progress":
            return e.requirement;
        case "single-title-levels":
        case "multi-title-levels":
            let n = g(e, t);
            return n?.requirement;
    }
}
