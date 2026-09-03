r.d(t, { P: () => H, YW: () => q });
let n = Symbol.for("@ts-pattern/matcher"),
    i = Symbol.for("@ts-pattern/isVariadic"),
    o = "@ts-pattern/anonymous-select-key",
    a = (e) => !!(e && "object" == typeof e),
    s = (e) => e && !!e[n],
    l = (e, t, r) => {
        if (s(e)) {
            let { matched: i, selections: o } = e[n]().match(t);
            return i && o && Object.keys(o).forEach((e) => r(e, o[e])), i;
        }
        if (a(e)) {
            if (!a(t)) return !1;
            if (Array.isArray(e)) {
                if (!Array.isArray(t)) return !1;
                let n = [],
                    o = [],
                    a = [];
                for (let t of e.keys()) {
                    let r = e[t];
                    s(r) && r[i] ? a.push(r) : a.length ? o.push(r) : n.push(r);
                }
                if (a.length) {
                    if (a.length > 1)
                        throw Error(
                            "Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.",
                        );
                    if (t.length < n.length + o.length) return !1;
                    let e = t.slice(0, n.length),
                        i = 0 === o.length ? [] : t.slice(-o.length),
                        s = t.slice(n.length, 0 === o.length ? 1 / 0 : -o.length);
                    return (
                        n.every((t, n) => l(t, e[n], r)) &&
                        o.every((e, t) => l(e, i[t], r)) &&
                        (0 === a.length || l(a[0], s, r))
                    );
                }
                return e.length === t.length && e.every((e, n) => l(e, t[n], r));
            }
            return Object.keys(e).every((i) => {
                let o = e[i];
                return (i in t || (s(o) && "optional" === o[n]().matcherType)) && l(o, t[i], r);
            });
        }
        return Object.is(t, e);
    },
    u = (e) => {
        var t, r, i;
        return a(e)
            ? s(e)
                ? null != (t = null == (r = (i = e[n]()).getSelectionKeys) ? void 0 : r.call(i))
                    ? t
                    : []
                : Array.isArray(e)
                  ? c(e, u)
                  : c(Object.values(e), u)
            : [];
    },
    c = (e, t) => e.reduce((e, r) => e.concat(t(r)), []);
function f(e) {
    return Object.assign(e, {
        optional: () => d(e),
        and: (t) => p(e, t),
        or: (t) => h(e, t),
        select: (t) => (void 0 === t ? v(e) : v(t, e)),
    });
}
function d(e) {
    return f({
        [n]: () => ({
            match: (t) => {
                let r = {},
                    n = (e, t) => {
                        r[e] = t;
                    };
                return void 0 === t
                    ? (u(e).forEach((e) => n(e, void 0)), { matched: !0, selections: r })
                    : { matched: l(e, t, n), selections: r };
            },
            getSelectionKeys: () => u(e),
            matcherType: "optional",
        }),
    });
}
function p(...e) {
    return f({
        [n]: () => ({
            match: (t) => {
                let r = {},
                    n = (e, t) => {
                        r[e] = t;
                    };
                return { matched: e.every((e) => l(e, t, n)), selections: r };
            },
            getSelectionKeys: () => c(e, u),
            matcherType: "and",
        }),
    });
}
function h(...e) {
    return f({
        [n]: () => ({
            match: (t) => {
                let r = {},
                    n = (e, t) => {
                        r[e] = t;
                    };
                return c(e, u).forEach((e) => n(e, void 0)), { matched: e.some((e) => l(e, t, n)), selections: r };
            },
            getSelectionKeys: () => c(e, u),
            matcherType: "or",
        }),
    });
}
function m(e) {
    return { [n]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function v(...e) {
    let t = "string" == typeof e[0] ? e[0] : void 0,
        r = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
    return f({
        [n]: () => ({
            match: (e) => {
                let n = { [null != t ? t : o]: e };
                return {
                    matched:
                        void 0 === r ||
                        l(r, e, (e, t) => {
                            n[e] = t;
                        }),
                    selections: n,
                };
            },
            getSelectionKeys: () => [null != t ? t : o].concat(void 0 === r ? [] : u(r)),
        }),
    });
}
function y(e) {
    return "number" == typeof e;
}
function g(e) {
    return "string" == typeof e;
}
function b(e) {
    return "bigint" == typeof e;
}
let w = f(
        m(function (e) {
            return !0;
        }),
    ),
    _ = (e) =>
        Object.assign(f(e), {
            startsWith: (t) =>
                _(
                    p(
                        e,
                        m((e) => g(e) && e.startsWith(t)),
                    ),
                ),
            endsWith: (t) =>
                _(
                    p(
                        e,
                        m((e) => g(e) && e.endsWith(t)),
                    ),
                ),
            minLength: (t) =>
                _(
                    p(
                        e,
                        m((e) => g(e) && e.length >= t),
                    ),
                ),
            maxLength: (t) =>
                _(
                    p(
                        e,
                        m((e) => g(e) && e.length <= t),
                    ),
                ),
            includes: (t) =>
                _(
                    p(
                        e,
                        m((e) => g(e) && e.includes(t)),
                    ),
                ),
            regex: (t) =>
                _(
                    p(
                        e,
                        m((e) => g(e) && !!e.match(t)),
                    ),
                ),
        }),
    S = _(m(g)),
    x = (e, t) => m((r) => y(r) && e <= r && t >= r),
    E = (e) => m((t) => y(t) && t < e),
    k = (e) => m((t) => y(t) && t > e),
    C = (e) => m((t) => y(t) && t <= e),
    T = (e) => m((t) => y(t) && t >= e),
    M = () => m((e) => y(e) && Number.isInteger(e)),
    P = () => m((e) => y(e) && Number.isFinite(e)),
    A = () => m((e) => y(e) && e > 0),
    I = () => m((e) => y(e) && e < 0),
    O = (e) =>
        Object.assign(f(e), {
            between: (t, r) => O(p(e, x(t, r))),
            lt: (t) => O(p(e, E(t))),
            gt: (t) => O(p(e, k(t))),
            lte: (t) => O(p(e, C(t))),
            gte: (t) => O(p(e, T(t))),
            int: () => O(p(e, M())),
            finite: () => O(p(e, P())),
            positive: () => O(p(e, A())),
            negative: () => O(p(e, I())),
        }),
    D = O(m(y)),
    R = (e, t) => m((r) => b(r) && e <= r && t >= r),
    L = (e) => m((t) => b(t) && t < e),
    F = (e) => m((t) => b(t) && t > e),
    N = (e) => m((t) => b(t) && t <= e),
    j = (e) => m((t) => b(t) && t >= e),
    B = () => m((e) => b(e) && e > 0),
    K = () => m((e) => b(e) && e < 0),
    $ = (e) =>
        Object.assign(f(e), {
            between: (t, r) => $(p(e, R(t, r))),
            lt: (t) => $(p(e, L(t))),
            gt: (t) => $(p(e, F(t))),
            lte: (t) => $(p(e, N(t))),
            gte: (t) => $(p(e, j(t))),
            positive: () => $(p(e, B())),
            negative: () => $(p(e, K())),
        }),
    V = $(m(b)),
    U = f(
        m(function (e) {
            return "boolean" == typeof e;
        }),
    ),
    z = f(
        m(function (e) {
            return "symbol" == typeof e;
        }),
    ),
    W = f(
        m(function (e) {
            return null == e;
        }),
    );
var H = {
    __proto__: null,
    matcher: n,
    optional: d,
    array: function (...e) {
        return (function e(t) {
            return Object.assign(
                Object.assign(t, {
                    *[Symbol.iterator]() {
                        yield Object.assign(t, { [i]: !0 });
                    },
                }),
                { optional: () => e(d(t)), select: (r) => e(void 0 === r ? v(t) : v(r, t)) },
            );
        })({
            [n]: () => ({
                match: (t) => {
                    if (!Array.isArray(t)) return { matched: !1 };
                    if (0 === e.length) return { matched: !0 };
                    let r = e[0],
                        n = {};
                    if (0 === t.length)
                        return (
                            u(r).forEach((e) => {
                                n[e] = [];
                            }),
                            { matched: !0, selections: n }
                        );
                    let i = (e, t) => {
                        n[e] = (n[e] || []).concat([t]);
                    };
                    return { matched: t.every((e) => l(r, e, i)), selections: n };
                },
                getSelectionKeys: () => (0 === e.length ? [] : u(e[0])),
            }),
        });
    },
    set: function (...e) {
        return f({
            [n]: () => ({
                match: (t) => {
                    if (!(t instanceof Set)) return { matched: !1 };
                    let r = {};
                    if (0 === t.size) return { matched: !0, selections: r };
                    if (0 === e.length) return { matched: !0 };
                    let n = (e, t) => {
                            r[e] = (r[e] || []).concat([t]);
                        },
                        i = e[0];
                    return {
                        matched: ((e, t) => {
                            for (let r of e) if (!t(r)) return !1;
                            return !0;
                        })(t, (e) => l(i, e, n)),
                        selections: r,
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : u(e[0])),
            }),
        });
    },
    map: function (...e) {
        return f({
            [n]: () => ({
                match: (t) => {
                    var r;
                    if (!(t instanceof Map)) return { matched: !1 };
                    let n = {};
                    if (0 === t.size) return { matched: !0, selections: n };
                    let i = (e, t) => {
                        n[e] = (n[e] || []).concat([t]);
                    };
                    if (0 === e.length) return { matched: !0 };
                    if (1 === e.length)
                        throw Error(
                            `\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null == ((r = e[0])) ? void 0 : r.toString()}`,
                        );
                    let [o, a] = e;
                    return {
                        matched: ((e, t) => {
                            for (let [r, n] of e.entries()) if (!t(n, r)) return !1;
                            return !0;
                        })(t, (e, t) => {
                            let r = l(o, t, i),
                                n = l(a, e, i);
                            return r && n;
                        }),
                        selections: n,
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : [...u(e[0]), ...u(e[1])]),
            }),
        });
    },
    intersection: p,
    union: h,
    not: function (e) {
        return f({
            [n]: () => ({
                match: (t) => ({ matched: !l(e, t, () => {}) }),
                getSelectionKeys: () => [],
                matcherType: "not",
            }),
        });
    },
    when: m,
    select: v,
    any: w,
    _: w,
    string: S,
    between: x,
    lt: E,
    gt: k,
    lte: C,
    gte: T,
    int: M,
    finite: P,
    positive: A,
    negative: I,
    number: D,
    betweenBigInt: R,
    ltBigInt: L,
    gtBigInt: F,
    lteBigInt: N,
    gteBigInt: j,
    positiveBigInt: B,
    negativeBigInt: K,
    bigint: V,
    boolean: U,
    symbol: z,
    nullish: W,
    instanceOf: function (e) {
        return f(m((t) => t instanceof e));
    },
    shape: function (e) {
        return f(
            m(
                (function (...e) {
                    if (1 === e.length) {
                        let [t] = e;
                        return (e) => l(t, e, () => {});
                    }
                    if (2 === e.length) {
                        let [t, r] = e;
                        return l(t, r, () => {});
                    }
                    throw Error(
                        `isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`,
                    );
                })(e),
            ),
        );
    },
};
let G = { matched: !1, value: void 0 };
function q(e) {
    return new Y(e, G);
}
class Y {
    constructor(e, t) {
        (this.input = void 0), (this.state = void 0), (this.input = e), (this.state = t);
    }
    with(...e) {
        let t;
        if (this.state.matched) return this;
        let r = e[e.length - 1],
            n = [e[0]];
        3 === e.length && "function" == typeof e[1]
            ? (n.push(e[0]), (t = e[1]))
            : e.length > 2 && n.push(...e.slice(1, e.length - 1));
        let i = !1,
            a = {},
            s = (e, t) => {
                (i = !0), (a[e] = t);
            },
            u =
                n.some((e) => l(e, this.input, s)) && (!t || t(this.input))
                    ? { matched: !0, value: r(i ? (o in a ? a[o] : a) : this.input, this.input) }
                    : G;
        return new Y(this.input, u);
    }
    when(e, t) {
        if (this.state.matched) return this;
        let r = !!e(this.input);
        return new Y(this.input, r ? { matched: !0, value: t(this.input, this.input) } : G);
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
