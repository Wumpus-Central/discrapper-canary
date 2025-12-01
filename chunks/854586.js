n.d(t, { tL: () => f }), n(388685), n(539854), n(642613), n(49124);
var r = n(843991),
    i = n(625306),
    a = n(902704),
    o = n(626135),
    s = n(981631);
let l = 15,
    c = 3;
function u(e, t, n, i) {
    if (e === t || (i && void 0 === e && null === t)) return !0;
    if ("object" != typeof e || "object" != typeof t || null === e || null === t) return !1;
    if (n.has(e)) return n.get(e) === t;
    if ((n.set(e, t), e instanceof Date && t instanceof Date)) return e.getTime() === t.getTime();
    if (e instanceof Set && t instanceof Set) return (0, r.O)(e, t);
    if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) return !1;
        for (let r = 0; r < e.length; r++) if (!u(e[r], t[r], n, !1)) return !1;
        return !0;
    }
    if (Array.isArray(e) || Array.isArray(t)) return !1;
    let a = Object.keys(e),
        o = Object.keys(t);
    if (a.length !== o.length) return !1;
    for (let r of a) if (!Object.prototype.hasOwnProperty.call(t, r) || !u(e[r], t[r], n, !1)) return !1;
    return !0;
}
function d(e, t) {
    return u(e, t, new Map(), !0);
}
function f(e, t, n) {
    let r = [];
    n((e, t) => {
        p(r, e, t);
    }),
        g(e, t, r),
        b(e, r);
}
function p(e, t, n) {
    t.derived.length !== n.derived.length &&
        e.push({
            type: "length-mismatch",
            primaryLength: t.derived.length,
            shadowLength: n.derived.length,
        });
    let r = Object.keys(t.root),
        i = Object.keys(n.root);
    for (let i of r) {
        if (!Object.prototype.hasOwnProperty.call(n.root, i)) {
            e.push({
                type: "missing-record",
                key: i,
            });
            continue;
        }
        let r = _(i, t.root[i], n.root[i]);
        null != r && e.push(r);
    }
    for (let n of i)
        Object.prototype.hasOwnProperty.call(t.root, n) ||
            e.push({
                type: "extra-record",
                key: n,
            });
}
function _(e, t, n) {
    let r = [];
    for (let e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            let i = t[e];
            if (!Object.prototype.hasOwnProperty.call(n, e)) {
                r.push({
                    type: "field-missing",
                    field: e,
                });
                continue;
            }
            let a = n[e];
            d(i, a) ||
                r.push({
                    type: "value-mismatch",
                    field: e,
                    primaryValue: i,
                    shadowValue: a,
                });
        }
    if (r.length > 0)
        return {
            type: "record-mismatch",
            key: e,
            primaryRecord: t,
            shadowRecord: n,
            mismatches: r,
        };
}
function m(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e) && !(e instanceof Date) && !(e instanceof Set);
}
function h(e, t) {
    let n = new Map();
    function r(e, t) {
        if (!d(e, t)) {
            if ("object" == typeof e && null !== e && "object" == typeof t && null !== t) {
                if (n.has(e))
                    return void (n.get(e) === t
                        ? console.info("Cycle detected, already compared")
                        : console.info("Cycle detected but different corresponding object"));
                n.set(e, t);
            }
            if (e instanceof Date && t instanceof Date)
                return void console.info("Date mismatch: primary ".concat(e, ", shadow ").concat(t));
            if (e instanceof Set && t instanceof Set) {
                let n = [...e].filter((e) => !t.has(e)),
                    r = [...t].filter((t) => !e.has(t));
                n.length > 0 && console.info("Only in primary: ", n),
                    r.length > 0 && console.info("Only in shadow: ", r);
                return;
            }
            if (Array.isArray(e) && Array.isArray(t)) {
                let n = Math.min(e.length, t.length);
                for (let i = 0; i < n; i++)
                    d(e[i], t[i]) ||
                        (console.group("Array index ".concat(i, " mismatch:")), r(e[i], t[i]), console.groupEnd());
                e.length > t.length
                    ? console.info("Extra in primary: ", e.slice(t.length))
                    : t.length > e.length && console.info("Extra in shadow: ", t.slice(e.length));
                return;
            }
            if (m(e) && m(t)) {
                let n = new Set(Object.keys(e)),
                    i = new Set(Object.keys(t));
                for (let a of Array.from(new Set([...n, ...i])).sort())
                    n.has(a)
                        ? i.has(a)
                            ? d(e[a], t[a]) ||
                              (console.group("Field ".concat(a, " mismatch:")), r(e[a], t[a]), console.groupEnd())
                            : console.info("Missing field in shadow: ".concat(a, " = "), e[a])
                        : console.info("Extra field in shadow: ".concat(a, " = "), t[a]);
                return;
            }
            console.info("Value mismatch: primary ", e, " shadow ", t);
        }
    }
    r(e, t);
}
function g(e, t, n) {
    if (0 === n.length) return;
    console.groupCollapsed(
        "[".concat(t, "Store:").concat(e, "] Dual-read validation found ").concat(n.length, " error(s)"),
    ),
        console.info("Last Few Actions: ", i.qC());
    let r = [],
        a = [];
    n.forEach((e) => {
        switch (e.type) {
            case "length-mismatch":
                console.info(
                    "Length mismatch \u2192 primary = ".concat(e.primaryLength, ", shadow = ").concat(e.shadowLength),
                );
                break;
            case "missing-record":
                r.push(e.key);
                break;
            case "extra-record":
                a.push(e.key);
                break;
            case "record-mismatch":
                console.groupCollapsed('Record mismatch for key "'.concat(e.key, '"')),
                    e.mismatches.forEach((e) => {
                        "field-missing" === e.type
                            ? console.info("Field missing: ".concat(String(e.field)))
                            : (console.groupCollapsed('Field "'.concat(String(e.field), '" value mismatch')),
                              h(e.primaryValue, e.shadowValue),
                              console.groupEnd());
                    }),
                    console.groupEnd();
        }
    }),
        r.length > 0 && console.info("Missing records in shadow state: ".concat(r.join(", "))),
        a.length > 0 && console.info("Extra records in shadow state: ".concat(a.join(", "))),
        console.groupEnd();
}
let E = new Map();
function b(e, t) {
    var n, r;
    if (0 === t.length) return;
    let a = i.Z$();
    if (null == a) return void console.error("Trying to log mismatches, but no last dispatched action found");
    let u =
        null != (n = E.get(e))
            ? n
            : {
                  mismatchesReported: 0,
                  mismatchesByLastAction: new Map(),
                  visitedEntries: new WeakSet(),
                  seenMismatches: new Set(),
              };
    if ((E.set(e, u), u.mismatchesReported >= l)) return;
    let d = null != (r = u.mismatchesByLastAction.get(a)) ? r : 0;
    if (d >= c) return;
    let f = O(u, t);
    null != f &&
        (u.mismatchesByLastAction.set(a, d + 1),
        u.mismatchesReported++,
        o.default.track(s.rMx.LIBDISCORE_KV_DUAL_READ_ERROR, {
            store_name: e,
            action_type: a,
            num_missing_keys: f.numMissingKeys,
            num_extra_keys: f.numExtraKeys,
            mismatched_fields: JSON.stringify(f.mismatchedFields),
        }));
}
function y(e) {
    return null === e ? "null" : "object" != typeof e ? typeof e : Array.isArray(e) ? "array" : "object";
}
function O(e, t) {
    let n = {
        numExtraKeys: 0,
        numMissingKeys: 0,
        mismatchedFields: [],
    };
    for (let a of t)
        switch (a.type) {
            case "extra-record":
                n.numExtraKeys++;
                break;
            case "missing-record":
                n.numMissingKeys++;
                break;
            case "record-mismatch":
                if (e.visitedEntries.has(a.primaryRecord)) continue;
                for (let t of (e.visitedEntries.add(a.primaryRecord), a.mismatches)) {
                    let e = t.field.toString();
                    switch (t.type) {
                        case "field-missing":
                            n.mismatchedFields.push({
                                fieldName: e,
                                primaryType: y(a.primaryRecord[t.field]),
                                shadowType: "missing",
                            });
                            break;
                        case "value-mismatch":
                            null !== t.primaryValue &&
                            null !== t.shadowValue &&
                            "object" == typeof t.primaryValue &&
                            "object" == typeof t.shadowValue
                                ? Array.isArray(t.primaryValue) && Array.isArray(t.shadowValue)
                                    ? o(e, t.primaryValue, t.shadowValue)
                                    : i(e, t.primaryValue, t.shadowValue)
                                : r({
                                      fieldName: e,
                                      primaryType: y(t.primaryValue),
                                      shadowType: y(t.shadowValue),
                                  });
                    }
                }
        }
    if (n.mismatchedFields.length + n.numExtraKeys + n.numMissingKeys === 0) return null;
    return n;
    function r() {
        for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
        for (let t of r) {
            let r = "".concat(t.fieldName, ":").concat(t.primaryType, ":").concat(t.shadowType);
            e.seenMismatches.has(r) || (e.seenMismatches.add(r), n.mismatchedFields.push(t));
        }
    }
    function i(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Set();
        for (let s of Object.keys(t)) {
            let l = "".concat(e, ".").concat(s),
                c = t[s];
            if (!Object.prototype.hasOwnProperty.call(n, s)) {
                r({
                    fieldName: l,
                    primaryType: y(c),
                    shadowType: "missing",
                });
                continue;
            }
            let u = n[s];
            c !== u &&
                ("object" == typeof c && "object" == typeof u
                    ? Array.isArray(c) && Array.isArray(u)
                        ? o(l, c, u)
                        : null == c || null == u || a.has(c) || (a.add(c), i(l, c, u, a))
                    : r({
                          fieldName: l,
                          primaryType: y(c),
                          shadowType: y(u),
                      }));
        }
    }
    function o(e, t, n) {
        (0, a.E)(t, n) ||
            r({
                fieldName: e,
                primaryType: "array",
                shadowType: "array",
                primaryArrayLength: t.length,
                secondaryArrayLength: n.length,
            });
    }
}
