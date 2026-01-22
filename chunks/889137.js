n.d(t, {
    P: () => Q,
    YW: () => J,
});
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
    c = (e) => {
        var t, n, i;
        return s(e)
            ? o(e)
                ? null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i))
                    ? t
                    : []
                : Array.isArray(e)
                  ? u(e, c)
                  : u(Object.values(e), c)
            : [];
    },
    u = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);
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
function f(e) {
    return Object.assign(e, {
        optional: () => _(e),
        and: (t) => g(e, t),
        or: (t) => E(e, t),
        select: (t) => (void 0 === t ? y(e) : y(t, e)),
    });
}
function p(e) {
    let t;
    return Object.assign(
        Object.assign((t = e), {
            *[Symbol.iterator]() {
                yield Object.assign(t, { [i]: !0 });
            },
        }),
        {
            optional: () => p(_(e)),
            select: (t) => p(void 0 === t ? y(e) : y(t, e)),
        },
    );
}
function _(e) {
    return f({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return void 0 === t
                    ? (c(e).forEach((e) => r(e, void 0)),
                      {
                          matched: !0,
                          selections: n,
                      })
                    : {
                          matched: l(e, t, r),
                          selections: n,
                      };
            },
            getSelectionKeys: () => c(e),
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
function g(...e) {
    return f({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return {
                    matched: e.every((e) => l(e, t, r)),
                    selections: n,
                };
            },
            getSelectionKeys: () => u(e, c),
            matcherType: "and",
        }),
    });
}
function E(...e) {
    return f({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return (
                    u(e, c).forEach((e) => r(e, void 0)),
                    {
                        matched: e.some((e) => l(e, t, r)),
                        selections: n,
                    }
                );
            },
            getSelectionKeys: () => u(e, c),
            matcherType: "or",
        }),
    });
}
function b(e) {
    return { [r]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function y(...e) {
    let t = "string" == typeof e[0] ? e[0] : void 0,
        n = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
    return f({
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
            getSelectionKeys: () => [null != t ? t : a].concat(void 0 === n ? [] : c(n)),
        }),
    });
}
function O(e) {
    return "number" == typeof e;
}
function A(e) {
    return "string" == typeof e;
}
function v(e) {
    return "bigint" == typeof e;
}
let S = f(
        b(function (e) {
            return !0;
        }),
    ),
    I = S,
    T = (e) =>
        Object.assign(f(e), {
            startsWith: (t) => {
                var n;
                return T(g(e, ((n = t), b((e) => A(e) && e.startsWith(n)))));
            },
            endsWith: (t) => {
                var n;
                return T(g(e, ((n = t), b((e) => A(e) && e.endsWith(n)))));
            },
            minLength: (t) => T(g(e, ((e) => b((t) => A(t) && t.length >= e))(t))),
            maxLength: (t) => T(g(e, ((e) => b((t) => A(t) && t.length <= e))(t))),
            includes: (t) => {
                var n;
                return T(g(e, ((n = t), b((e) => A(e) && e.includes(n)))));
            },
            regex: (t) => {
                var n;
                return T(g(e, ((n = t), b((e) => A(e) && !!e.match(n)))));
            },
        }),
    C = T(b(A)),
    N = (e, t) => b((n) => O(n) && e <= n && t >= n),
    R = (e) => b((t) => O(t) && t < e),
    w = (e) => b((t) => O(t) && t > e),
    P = (e) => b((t) => O(t) && t <= e),
    D = (e) => b((t) => O(t) && t >= e),
    x = () => b((e) => O(e) && Number.isInteger(e)),
    L = () => b((e) => O(e) && Number.isFinite(e)),
    j = () => b((e) => O(e) && e > 0),
    M = () => b((e) => O(e) && e < 0),
    k = (e) =>
        Object.assign(f(e), {
            between: (t, n) => k(g(e, N(t, n))),
            lt: (t) => k(g(e, R(t))),
            gt: (t) => k(g(e, w(t))),
            lte: (t) => k(g(e, P(t))),
            gte: (t) => k(g(e, D(t))),
            int: () => k(g(e, x())),
            finite: () => k(g(e, L())),
            positive: () => k(g(e, j())),
            negative: () => k(g(e, M())),
        }),
    U = k(b(O)),
    G = (e, t) => b((n) => v(n) && e <= n && t >= n),
    V = (e) => b((t) => v(t) && t < e),
    F = (e) => b((t) => v(t) && t > e),
    B = (e) => b((t) => v(t) && t <= e),
    H = (e) => b((t) => v(t) && t >= e),
    Y = () => b((e) => v(e) && e > 0),
    W = () => b((e) => v(e) && e < 0),
    K = (e) =>
        Object.assign(f(e), {
            between: (t, n) => K(g(e, G(t, n))),
            lt: (t) => K(g(e, V(t))),
            gt: (t) => K(g(e, F(t))),
            lte: (t) => K(g(e, B(t))),
            gte: (t) => K(g(e, H(t))),
            positive: () => K(g(e, Y())),
            negative: () => K(g(e, W())),
        }),
    z = K(b(v)),
    q = f(
        b(function (e) {
            return "boolean" == typeof e;
        }),
    ),
    X = f(
        b(function (e) {
            return "symbol" == typeof e;
        }),
    ),
    Z = f(
        b(function (e) {
            return null == e;
        }),
    );
var Q = {
    __proto__: null,
    matcher: r,
    optional: _,
    array: function (...e) {
        return p({
            [r]: () => ({
                match: (t) => {
                    if (!Array.isArray(t)) return { matched: !1 };
                    if (0 === e.length) return { matched: !0 };
                    let n = e[0],
                        r = {};
                    if (0 === t.length)
                        return (
                            c(n).forEach((e) => {
                                r[e] = [];
                            }),
                            {
                                matched: !0,
                                selections: r,
                            }
                        );
                    let i = (e, t) => {
                        r[e] = (r[e] || []).concat([t]);
                    };
                    return {
                        matched: t.every((e) => l(n, e, i)),
                        selections: r,
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : c(e[0])),
            }),
        });
    },
    set: function (...e) {
        return f({
            [r]: () => ({
                match: (t) => {
                    if (!(t instanceof Set)) return { matched: !1 };
                    let n = {};
                    if (0 === t.size)
                        return {
                            matched: !0,
                            selections: n,
                        };
                    if (0 === e.length) return { matched: !0 };
                    let r = (e, t) => {
                            n[e] = (n[e] || []).concat([t]);
                        },
                        i = e[0];
                    return {
                        matched: h(t, (e) => l(i, e, r)),
                        selections: n,
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : c(e[0])),
            }),
        });
    },
    map: function (...e) {
        return f({
            [r]: () => ({
                match: (t) => {
                    var n;
                    if (!(t instanceof Map)) return { matched: !1 };
                    let r = {};
                    if (0 === t.size)
                        return {
                            matched: !0,
                            selections: r,
                        };
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
                        matched: m(t, (e, t) => {
                            let n = l(a, t, i),
                                r = l(s, e, i);
                            return n && r;
                        }),
                        selections: r,
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : [...c(e[0]), ...c(e[1])]),
            }),
        });
    },
    intersection: g,
    union: E,
    not: function (e) {
        return f({
            [r]: () => ({
                match: (t) => ({
                    matched: !l(e, t, () => {}),
                }),
                getSelectionKeys: () => [],
                matcherType: "not",
            }),
        });
    },
    when: b,
    select: y,
    any: S,
    _: I,
    string: C,
    between: N,
    lt: R,
    gt: w,
    lte: P,
    gte: D,
    int: x,
    finite: L,
    positive: j,
    negative: M,
    number: U,
    betweenBigInt: G,
    ltBigInt: V,
    gtBigInt: F,
    lteBigInt: B,
    gteBigInt: H,
    positiveBigInt: Y,
    negativeBigInt: W,
    bigint: z,
    boolean: q,
    symbol: X,
    nullish: Z,
    instanceOf: function (e) {
        return f(
            b(
                (function (e) {
                    return (t) => t instanceof e;
                })(e),
            ),
        );
    },
    shape: function (e) {
        return f(b(d(e)));
    },
};
let $ = {
    matched: !1,
    value: void 0,
};
function J(e) {
    return new ee(e, $);
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
            s = {},
            o = (e, t) => {
                (i = !0), (s[e] = t);
            },
            c =
                r.some((e) => l(e, this.input, o)) && (!t || t(this.input))
                    ? {
                          matched: !0,
                          value: n(i ? (a in s ? s[a] : s) : this.input, this.input),
                      }
                    : $;
        return new ee(this.input, c);
    }
    when(e, t) {
        if (this.state.matched) return this;
        let n = !!e(this.input);
        return new ee(
            this.input,
            n
                ? {
                      matched: !0,
                      value: t(this.input, this.input),
                  }
                : $,
        );
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
