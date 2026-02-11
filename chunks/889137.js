"use strict";
n.d(t, { P: () => Q, YW: () => ee });
let r = Symbol.for("@ts-pattern/matcher"),
    i = Symbol.for("@ts-pattern/isVariadic"),
    a = "@ts-pattern/anonymous-select-key",
    s = (e) => !!(e && "object" == typeof e),
    o = (e) => e && !!e[r],
    l = (e, t, n) => {
        if (o(e)) {
            let { matched: i, selections: a } = e[r]().match(t);
            return i && a && Object.keys(a).forEach((e) => n(e, a[e])), i;
        }
        if (s(e)) {
            if (!s(t)) return !1;
            if (Array.isArray(e)) {
                if (!Array.isArray(t)) return !1;
                let r = [],
                    a = [],
                    s = [];
                for (let t of e.keys()) {
                    let n = e[t];
                    o(n) && n[i] ? s.push(n) : s.length ? a.push(n) : r.push(n);
                }
                if (s.length) {
                    if (s.length > 1)
                        throw Error(
                            "Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.",
                        );
                    if (t.length < r.length + a.length) return !1;
                    let e = t.slice(0, r.length),
                        i = 0 === a.length ? [] : t.slice(-a.length),
                        o = t.slice(r.length, 0 === a.length ? 1 / 0 : -a.length);
                    return (
                        r.every((t, r) => l(t, e[r], n)) &&
                        a.every((e, t) => l(e, i[t], n)) &&
                        (0 === s.length || l(s[0], o, n))
                    );
                }
                return e.length === t.length && e.every((e, r) => l(e, t[r], n));
            }
            return Object.keys(e).every((i) => {
                var a;
                let s = e[i];
                return (i in t || (o((a = s)) && "optional" === a[r]().matcherType)) && l(s, t[i], n);
            });
        }
        return Object.is(t, e);
    },
    u = (e) => {
        var t, n, i;
        return s(e)
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
        optional: () => h(e),
        and: (t) => E(e, t),
        or: (t) => A(e, t),
        select: (t) => (void 0 === t ? T(e) : T(t, e)),
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
        { optional: () => f(h(e)), select: (t) => f(void 0 === t ? T(e) : T(t, e)) },
    );
}
function h(e) {
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
let p = (e, t) => {
        for (let n of e) if (!t(n)) return !1;
        return !0;
    },
    g = (e, t) => {
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
function A(...e) {
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
function I(e) {
    return { [r]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function T(...e) {
    let t = "string" == typeof e[0] ? e[0] : void 0,
        n = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
    return _({
        [r]: () => ({
            match: (e) => {
                let r = { [null != t ? t : a]: e };
                return {
                    matched:
                        void 0 === n ||
                        l(n, e, (e, t) => {
                            r[e] = t;
                        }),
                    selections: r,
                };
            },
            getSelectionKeys: () => [null != t ? t : a].concat(void 0 === n ? [] : u(n)),
        }),
    });
}
function y(e) {
    return "number" == typeof e;
}
function S(e) {
    return "string" == typeof e;
}
function v(e) {
    return "bigint" == typeof e;
}
let C = _(
        I(function (e) {
            return !0;
        }),
    ),
    b = C,
    N = (e) =>
        Object.assign(_(e), {
            startsWith: (t) => {
                var n;
                return N(E(e, ((n = t), I((e) => S(e) && e.startsWith(n)))));
            },
            endsWith: (t) => {
                var n;
                return N(E(e, ((n = t), I((e) => S(e) && e.endsWith(n)))));
            },
            minLength: (t) => N(E(e, ((e) => I((t) => S(t) && t.length >= e))(t))),
            maxLength: (t) => N(E(e, ((e) => I((t) => S(t) && t.length <= e))(t))),
            includes: (t) => {
                var n;
                return N(E(e, ((n = t), I((e) => S(e) && e.includes(n)))));
            },
            regex: (t) => {
                var n;
                return N(E(e, ((n = t), I((e) => S(e) && !!e.match(n)))));
            },
        }),
    R = N(I(S)),
    O = (e, t) => I((n) => y(n) && e <= n && t >= n),
    D = (e) => I((t) => y(t) && t < e),
    L = (e) => I((t) => y(t) && t > e),
    w = (e) => I((t) => y(t) && t <= e),
    x = (e) => I((t) => y(t) && t >= e),
    P = () => I((e) => y(e) && Number.isInteger(e)),
    M = () => I((e) => y(e) && Number.isFinite(e)),
    k = () => I((e) => y(e) && e > 0),
    U = () => I((e) => y(e) && e < 0),
    G = (e) =>
        Object.assign(_(e), {
            between: (t, n) => G(E(e, O(t, n))),
            lt: (t) => G(E(e, D(t))),
            gt: (t) => G(E(e, L(t))),
            lte: (t) => G(E(e, w(t))),
            gte: (t) => G(E(e, x(t))),
            int: () => G(E(e, P())),
            finite: () => G(E(e, M())),
            positive: () => G(E(e, k())),
            negative: () => G(E(e, U())),
        }),
    F = G(I(y)),
    V = (e, t) => I((n) => v(n) && e <= n && t >= n),
    B = (e) => I((t) => v(t) && t < e),
    j = (e) => I((t) => v(t) && t > e),
    H = (e) => I((t) => v(t) && t <= e),
    Y = (e) => I((t) => v(t) && t >= e),
    W = () => I((e) => v(e) && e > 0),
    K = () => I((e) => v(e) && e < 0),
    $ = (e) =>
        Object.assign(_(e), {
            between: (t, n) => $(E(e, V(t, n))),
            lt: (t) => $(E(e, B(t))),
            gt: (t) => $(E(e, j(t))),
            lte: (t) => $(E(e, H(t))),
            gte: (t) => $(E(e, Y(t))),
            positive: () => $(E(e, W())),
            negative: () => $(E(e, K())),
        }),
    z = $(I(v)),
    q = _(
        I(function (e) {
            return "boolean" == typeof e;
        }),
    ),
    X = _(
        I(function (e) {
            return "symbol" == typeof e;
        }),
    ),
    Z = _(
        I(function (e) {
            return null == e;
        }),
    );
var Q = {
    __proto__: null,
    matcher: r,
    optional: h,
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
                    return { matched: p(t, (e) => l(i, e, r)), selections: n };
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
                    let [a, s] = e;
                    return {
                        matched: g(t, (e, t) => {
                            let n = l(a, t, i),
                                r = l(s, e, i);
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
    union: A,
    not: function (e) {
        return _({
            [r]: () => ({
                match: (t) => ({ matched: !l(e, t, () => {}) }),
                getSelectionKeys: () => [],
                matcherType: "not",
            }),
        });
    },
    when: I,
    select: T,
    any: C,
    _: b,
    string: R,
    between: O,
    lt: D,
    gt: L,
    lte: w,
    gte: x,
    int: P,
    finite: M,
    positive: k,
    negative: U,
    number: F,
    betweenBigInt: V,
    ltBigInt: B,
    gtBigInt: j,
    lteBigInt: H,
    gteBigInt: Y,
    positiveBigInt: W,
    negativeBigInt: K,
    bigint: z,
    boolean: q,
    symbol: X,
    nullish: Z,
    instanceOf: function (e) {
        return _(
            I(
                (function (e) {
                    return (t) => t instanceof e;
                })(e),
            ),
        );
    },
    shape: function (e) {
        return _(I(d(e)));
    },
};
let J = { matched: !1, value: void 0 };
function ee(e) {
    return new et(e, J);
}
class et {
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
            s = {},
            o = (e, t) => {
                (i = !0), (s[e] = t);
            },
            u =
                r.some((e) => l(e, this.input, o)) && (!t || t(this.input))
                    ? { matched: !0, value: n(i ? (a in s ? s[a] : s) : this.input, this.input) }
                    : J;
        return new et(this.input, u);
    }
    when(e, t) {
        if (this.state.matched) return this;
        let n = !!e(this.input);
        return new et(this.input, n ? { matched: !0, value: t(this.input, this.input) } : J);
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
