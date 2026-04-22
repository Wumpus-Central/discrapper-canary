"use strict";
n.d(t, { P: () => K, YW: () => z });
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
                let s = e[i];
                return (i in t || (o(s) && "optional" === s[r]().matcherType)) && l(s, t[i], n);
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
                  ? d(e, u)
                  : d(Object.values(e), u)
            : [];
    },
    d = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);
function c(e) {
    return Object.assign(e, {
        optional: () => _(e),
        and: (t) => f(e, t),
        or: (t) => E(e, t),
        select: (t) => (void 0 === t ? p(e) : p(t, e)),
    });
}
function _(e) {
    return c({
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
function f(...e) {
    return c({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return { matched: e.every((e) => l(e, t, r)), selections: n };
            },
            getSelectionKeys: () => d(e, u),
            matcherType: "and",
        }),
    });
}
function E(...e) {
    return c({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return d(e, u).forEach((e) => r(e, void 0)), { matched: e.some((e) => l(e, t, r)), selections: n };
            },
            getSelectionKeys: () => d(e, u),
            matcherType: "or",
        }),
    });
}
function h(e) {
    return { [r]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function p(...e) {
    let t = "string" == typeof e[0] ? e[0] : void 0,
        n = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
    return c({
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
function m(e) {
    return "number" == typeof e;
}
function g(e) {
    return "string" == typeof e;
}
function A(e) {
    return "bigint" == typeof e;
}
let I = c(
        h(function (e) {
            return !0;
        }),
    ),
    T = (e) =>
        Object.assign(c(e), {
            startsWith: (t) =>
                T(
                    f(
                        e,
                        h((e) => g(e) && e.startsWith(t)),
                    ),
                ),
            endsWith: (t) =>
                T(
                    f(
                        e,
                        h((e) => g(e) && e.endsWith(t)),
                    ),
                ),
            minLength: (t) =>
                T(
                    f(
                        e,
                        h((e) => g(e) && e.length >= t),
                    ),
                ),
            maxLength: (t) =>
                T(
                    f(
                        e,
                        h((e) => g(e) && e.length <= t),
                    ),
                ),
            includes: (t) =>
                T(
                    f(
                        e,
                        h((e) => g(e) && e.includes(t)),
                    ),
                ),
            regex: (t) =>
                T(
                    f(
                        e,
                        h((e) => g(e) && !!e.match(t)),
                    ),
                ),
        }),
    S = T(h(g)),
    y = (e, t) => h((n) => m(n) && e <= n && t >= n),
    N = (e) => h((t) => m(t) && t < e),
    O = (e) => h((t) => m(t) && t > e),
    R = (e) => h((t) => m(t) && t <= e),
    v = (e) => h((t) => m(t) && t >= e),
    C = () => h((e) => m(e) && Number.isInteger(e)),
    b = () => h((e) => m(e) && Number.isFinite(e)),
    D = () => h((e) => m(e) && e > 0),
    L = () => h((e) => m(e) && e < 0),
    w = (e) =>
        Object.assign(c(e), {
            between: (t, n) => w(f(e, y(t, n))),
            lt: (t) => w(f(e, N(t))),
            gt: (t) => w(f(e, O(t))),
            lte: (t) => w(f(e, R(t))),
            gte: (t) => w(f(e, v(t))),
            int: () => w(f(e, C())),
            finite: () => w(f(e, b())),
            positive: () => w(f(e, D())),
            negative: () => w(f(e, L())),
        }),
    M = w(h(m)),
    P = (e, t) => h((n) => A(n) && e <= n && t >= n),
    U = (e) => h((t) => A(t) && t < e),
    k = (e) => h((t) => A(t) && t > e),
    x = (e) => h((t) => A(t) && t <= e),
    G = (e) => h((t) => A(t) && t >= e),
    V = () => h((e) => A(e) && e > 0),
    F = () => h((e) => A(e) && e < 0),
    B = (e) =>
        Object.assign(c(e), {
            between: (t, n) => B(f(e, P(t, n))),
            lt: (t) => B(f(e, U(t))),
            gt: (t) => B(f(e, k(t))),
            lte: (t) => B(f(e, x(t))),
            gte: (t) => B(f(e, G(t))),
            positive: () => B(f(e, V())),
            negative: () => B(f(e, F())),
        }),
    H = B(h(A)),
    Y = c(
        h(function (e) {
            return "boolean" == typeof e;
        }),
    ),
    W = c(
        h(function (e) {
            return "symbol" == typeof e;
        }),
    ),
    j = c(
        h(function (e) {
            return null == e;
        }),
    );
var K = {
    __proto__: null,
    matcher: r,
    optional: _,
    array: function (...e) {
        return (function e(t) {
            return Object.assign(
                Object.assign(t, {
                    *[Symbol.iterator]() {
                        yield Object.assign(t, { [i]: !0 });
                    },
                }),
                { optional: () => e(_(t)), select: (n) => e(void 0 === n ? p(t) : p(n, t)) },
            );
        })({
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
        return c({
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
                    return {
                        matched: ((e, t) => {
                            for (let n of e) if (!t(n)) return !1;
                            return !0;
                        })(t, (e) => l(i, e, r)),
                        selections: n,
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : u(e[0])),
            }),
        });
    },
    map: function (...e) {
        return c({
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
                        matched: ((e, t) => {
                            for (let [n, r] of e.entries()) if (!t(r, n)) return !1;
                            return !0;
                        })(t, (e, t) => {
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
    intersection: f,
    union: E,
    not: function (e) {
        return c({
            [r]: () => ({
                match: (t) => ({ matched: !l(e, t, () => {}) }),
                getSelectionKeys: () => [],
                matcherType: "not",
            }),
        });
    },
    when: h,
    select: p,
    any: I,
    _: I,
    string: S,
    between: y,
    lt: N,
    gt: O,
    lte: R,
    gte: v,
    int: C,
    finite: b,
    positive: D,
    negative: L,
    number: M,
    betweenBigInt: P,
    ltBigInt: U,
    gtBigInt: k,
    lteBigInt: x,
    gteBigInt: G,
    positiveBigInt: V,
    negativeBigInt: F,
    bigint: H,
    boolean: Y,
    symbol: W,
    nullish: j,
    instanceOf: function (e) {
        return c(h((t) => t instanceof e));
    },
    shape: function (e) {
        return c(
            h(
                (function (...e) {
                    if (1 === e.length) {
                        let [t] = e;
                        return (e) => l(t, e, () => {});
                    }
                    if (2 === e.length) {
                        let [t, n] = e;
                        return l(t, n, () => {});
                    }
                    throw Error(
                        `isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`,
                    );
                })(e),
            ),
        );
    },
};
let $ = { matched: !1, value: void 0 };
function z(e) {
    return new q(e, $);
}
class q {
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
                    : $;
        return new q(this.input, u);
    }
    when(e, t) {
        if (this.state.matched) return this;
        let n = !!e(this.input);
        return new q(this.input, n ? { matched: !0, value: t(this.input, this.input) } : $);
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
