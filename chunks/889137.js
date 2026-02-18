"use strict";
n.d(t, { P: () => X, YW: () => J });
let r = Symbol.for("@ts-pattern/matcher"),
    i = Symbol.for("@ts-pattern/isVariadic"),
    s = "@ts-pattern/anonymous-select-key",
    a = (e) => !!(e && "object" == typeof e),
    o = (e) => e && !!e[r],
    l = (e, t, n) => {
        if (o(e)) {
            let { matched: i, selections: s } = e[r]().match(t);
            return i && s && Object.keys(s).forEach((e) => n(e, s[e])), i;
        }
        if (a(e)) {
            if (!a(t)) return !1;
            if (Array.isArray(e)) {
                if (!Array.isArray(t)) return !1;
                let r = [],
                    s = [],
                    a = [];
                for (let t of e.keys()) {
                    let n = e[t];
                    o(n) && n[i] ? a.push(n) : a.length ? s.push(n) : r.push(n);
                }
                if (a.length) {
                    if (a.length > 1)
                        throw Error(
                            "Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.",
                        );
                    if (t.length < r.length + s.length) return !1;
                    let e = t.slice(0, r.length),
                        i = 0 === s.length ? [] : t.slice(-s.length),
                        o = t.slice(r.length, 0 === s.length ? 1 / 0 : -s.length);
                    return (
                        r.every((t, r) => l(t, e[r], n)) &&
                        s.every((e, t) => l(e, i[t], n)) &&
                        (0 === a.length || l(a[0], o, n))
                    );
                }
                return e.length === t.length && e.every((e, r) => l(e, t[r], n));
            }
            return Object.keys(e).every((i) => {
                var s;
                let a = e[i];
                return (i in t || (o((s = a)) && "optional" === s[r]().matcherType)) && l(a, t[i], n);
            });
        }
        return Object.is(t, e);
    },
    u = (e) => {
        var t, n, i;
        return a(e)
            ? o(e)
                ? null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i))
                    ? t
                    : []
                : Array.isArray(e)
                  ? c(e, u)
                  : c(Object.values(e), u)
            : [];
    },
    c = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);
function d(...e) {
    if (1 === e.length) {
        let [t] = e;
        return (e) => l(t, e, () => {});
    }
    if (2 === e.length) {
        let [t, n] = e;
        return l(t, n, () => {});
    }
    throw Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`);
}
function _(e) {
    return Object.assign(e, {
        optional: () => p(e),
        and: (t) => E(e, t),
        or: (t) => g(e, t),
        select: (t) => (void 0 === t ? I(e) : I(t, e)),
    });
}
function f(e) {
    let t;
    return Object.assign(
        Object.assign((t = e), {
            *[Symbol.iterator]() {
                yield Object.assign(t, { [i]: !0 });
            },
        }),
        { optional: () => f(p(e)), select: (t) => f(void 0 === t ? I(e) : I(t, e)) },
    );
}
function p(e) {
    return _({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return void 0 === t
                    ? (u(e).forEach((e) => r(e, void 0)), { matched: !0, selections: n })
                    : { matched: l(e, t, r), selections: n };
            },
            getSelectionKeys: () => u(e),
            matcherType: "optional",
        }),
    });
}
let h = (e, t) => {
        for (let n of e) if (!t(n)) return !1;
        return !0;
    },
    m = (e, t) => {
        for (let [n, r] of e.entries()) if (!t(r, n)) return !1;
        return !0;
    };
function E(...e) {
    return _({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return { matched: e.every((e) => l(e, t, r)), selections: n };
            },
            getSelectionKeys: () => c(e, u),
            matcherType: "and",
        }),
    });
}
function g(...e) {
    return _({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return c(e, u).forEach((e) => r(e, void 0)), { matched: e.some((e) => l(e, t, r)), selections: n };
            },
            getSelectionKeys: () => c(e, u),
            matcherType: "or",
        }),
    });
}
function A(e) {
    return { [r]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function I(...e) {
    let t = "string" == typeof e[0] ? e[0] : void 0,
        n = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
    return _({
        [r]: () => ({
            match: (e) => {
                let r = { [null != t ? t : s]: e };
                return {
                    matched:
                        void 0 === n ||
                        l(n, e, (e, t) => {
                            r[e] = t;
                        }),
                    selections: r,
                };
            },
            getSelectionKeys: () => [null != t ? t : s].concat(void 0 === n ? [] : u(n)),
        }),
    });
}
function T(e) {
    return "number" == typeof e;
}
function S(e) {
    return "string" == typeof e;
}
function y(e) {
    return "bigint" == typeof e;
}
let v = _(
        A(function (e) {
            return !0;
        }),
    ),
    N = v,
    C = (e) =>
        Object.assign(_(e), {
            startsWith: (t) => {
                var n;
                return C(E(e, ((n = t), A((e) => S(e) && e.startsWith(n)))));
            },
            endsWith: (t) => {
                var n;
                return C(E(e, ((n = t), A((e) => S(e) && e.endsWith(n)))));
            },
            minLength: (t) => C(E(e, ((e) => A((t) => S(t) && t.length >= e))(t))),
            maxLength: (t) => C(E(e, ((e) => A((t) => S(t) && t.length <= e))(t))),
            includes: (t) => {
                var n;
                return C(E(e, ((n = t), A((e) => S(e) && e.includes(n)))));
            },
            regex: (t) => {
                var n;
                return C(E(e, ((n = t), A((e) => S(e) && !!e.match(n)))));
            },
        }),
    b = C(A(S)),
    R = (e, t) => A((n) => T(n) && e <= n && t >= n),
    O = (e) => A((t) => T(t) && t < e),
    D = (e) => A((t) => T(t) && t > e),
    L = (e) => A((t) => T(t) && t <= e),
    w = (e) => A((t) => T(t) && t >= e),
    x = () => A((e) => T(e) && Number.isInteger(e)),
    M = () => A((e) => T(e) && Number.isFinite(e)),
    P = () => A((e) => T(e) && e > 0),
    k = () => A((e) => T(e) && e < 0),
    U = (e) =>
        Object.assign(_(e), {
            between: (t, n) => U(E(e, R(t, n))),
            lt: (t) => U(E(e, O(t))),
            gt: (t) => U(E(e, D(t))),
            lte: (t) => U(E(e, L(t))),
            gte: (t) => U(E(e, w(t))),
            int: () => U(E(e, x())),
            finite: () => U(E(e, M())),
            positive: () => U(E(e, P())),
            negative: () => U(E(e, k())),
        }),
    G = U(A(T)),
    F = (e, t) => A((n) => y(n) && e <= n && t >= n),
    V = (e) => A((t) => y(t) && t < e),
    B = (e) => A((t) => y(t) && t > e),
    H = (e) => A((t) => y(t) && t <= e),
    j = (e) => A((t) => y(t) && t >= e),
    Y = () => A((e) => y(e) && e > 0),
    W = () => A((e) => y(e) && e < 0),
    K = (e) =>
        Object.assign(_(e), {
            between: (t, n) => K(E(e, F(t, n))),
            lt: (t) => K(E(e, V(t))),
            gt: (t) => K(E(e, B(t))),
            lte: (t) => K(E(e, H(t))),
            gte: (t) => K(E(e, j(t))),
            positive: () => K(E(e, Y())),
            negative: () => K(E(e, W())),
        }),
    z = K(A(y)),
    $ = _(
        A(function (e) {
            return "boolean" == typeof e;
        }),
    ),
    q = _(
        A(function (e) {
            return "symbol" == typeof e;
        }),
    ),
    Z = _(
        A(function (e) {
            return null == e;
        }),
    );
var X = {
    __proto__: null,
    matcher: r,
    optional: p,
    array: function (...e) {
        return f({
            [r]: () => ({
                match: (t) => {
                    if (!Array.isArray(t)) return { matched: !1 };
                    if (0 === e.length) return { matched: !0 };
                    let n = e[0],
                        r = {};
                    if (0 === t.length)
                        return (
                            u(n).forEach((e) => {
                                r[e] = [];
                            }),
                            { matched: !0, selections: r }
                        );
                    let i = (e, t) => {
                        r[e] = (r[e] || []).concat([t]);
                    };
                    return { matched: t.every((e) => l(n, e, i)), selections: r };
                },
                getSelectionKeys: () => (0 === e.length ? [] : u(e[0])),
            }),
        });
    },
    set: function (...e) {
        return _({
            [r]: () => ({
                match: (t) => {
                    if (!(t instanceof Set)) return { matched: !1 };
                    let n = {};
                    if (0 === t.size) return { matched: !0, selections: n };
                    if (0 === e.length) return { matched: !0 };
                    let r = (e, t) => {
                            n[e] = (n[e] || []).concat([t]);
                        },
                        i = e[0];
                    return { matched: h(t, (e) => l(i, e, r)), selections: n };
                },
                getSelectionKeys: () => (0 === e.length ? [] : u(e[0])),
            }),
        });
    },
    map: function (...e) {
        return _({
            [r]: () => ({
                match: (t) => {
                    var n;
                    if (!(t instanceof Map)) return { matched: !1 };
                    let r = {};
                    if (0 === t.size) return { matched: !0, selections: r };
                    let i = (e, t) => {
                        r[e] = (r[e] || []).concat([t]);
                    };
                    if (0 === e.length) return { matched: !0 };
                    if (1 === e.length)
                        throw Error(
                            `\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null == ((n = e[0])) ? void 0 : n.toString()}`,
                        );
                    let [s, a] = e;
                    return {
                        matched: m(t, (e, t) => {
                            let n = l(s, t, i),
                                r = l(a, e, i);
                            return n && r;
                        }),
                        selections: r,
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : [...u(e[0]), ...u(e[1])]),
            }),
        });
    },
    intersection: E,
    union: g,
    not: function (e) {
        return _({
            [r]: () => ({
                match: (t) => ({ matched: !l(e, t, () => {}) }),
                getSelectionKeys: () => [],
                matcherType: "not",
            }),
        });
    },
    when: A,
    select: I,
    any: v,
    _: N,
    string: b,
    between: R,
    lt: O,
    gt: D,
    lte: L,
    gte: w,
    int: x,
    finite: M,
    positive: P,
    negative: k,
    number: G,
    betweenBigInt: F,
    ltBigInt: V,
    gtBigInt: B,
    lteBigInt: H,
    gteBigInt: j,
    positiveBigInt: Y,
    negativeBigInt: W,
    bigint: z,
    boolean: $,
    symbol: q,
    nullish: Z,
    instanceOf: function (e) {
        return _(
            A(
                (function (e) {
                    return (t) => t instanceof e;
                })(e),
            ),
        );
    },
    shape: function (e) {
        return _(A(d(e)));
    },
};
let Q = { matched: !1, value: void 0 };
function J(e) {
    return new ee(e, Q);
}
class ee {
    constructor(e, t) {
        (this.input = void 0), (this.state = void 0), (this.input = e), (this.state = t);
    }
    with(...e) {
        let t;
        if (this.state.matched) return this;
        let n = e[e.length - 1],
            r = [e[0]];
        3 === e.length && "function" == typeof e[1]
            ? (r.push(e[0]), (t = e[1]))
            : e.length > 2 && r.push(...e.slice(1, e.length - 1));
        let i = !1,
            a = {},
            o = (e, t) => {
                (i = !0), (a[e] = t);
            },
            u =
                r.some((e) => l(e, this.input, o)) && (!t || t(this.input))
                    ? { matched: !0, value: n(i ? (s in a ? a[s] : a) : this.input, this.input) }
                    : Q;
        return new ee(this.input, u);
    }
    when(e, t) {
        if (this.state.matched) return this;
        let n = !!e(this.input);
        return new ee(this.input, n ? { matched: !0, value: t(this.input, this.input) } : Q);
    }
    otherwise(e) {
        return this.state.matched ? this.state.value : e(this.input);
    }
    exhaustive() {
        return this.run();
    }
    run() {
        let e;
        if (this.state.matched) return this.state.value;
        try {
            e = JSON.stringify(this.input);
        } catch (t) {
            e = this.input;
        }
        throw Error(`Pattern matching error: no pattern matches value ${e}`);
    }
    returnType() {
        return this;
    }
}
