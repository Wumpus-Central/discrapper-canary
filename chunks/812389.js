"use strict";
var r,
    a,
    o,
    i,
    s = n(834647),
    l = n(780940),
    c = n(184110),
    u = n(308227),
    d = n(664886),
    p = n(735811),
    h = n(740628),
    f = n(469516),
    m = n(337082),
    y = n(999843),
    v = n(309270),
    g = n(407057),
    b = n(443216),
    A = n(304334),
    _ = n(282532).set,
    k = n(848320),
    C = n(518292),
    w = n(564904),
    S = n(74414),
    N = n(605944),
    x = n(145595),
    P = n(976467),
    R = n(794938),
    F = "Promise",
    O = P.CONSTRUCTOR,
    E = P.REJECTION_EVENT,
    I = P.SUBCLASSING,
    M = N.getterFor(F),
    T = N.set,
    B = x && x.prototype,
    D = x,
    L = B,
    V = u.TypeError,
    j = u.document,
    U = u.process,
    q = R.f,
    K = q,
    H = !!(j && j.createEvent && u.dispatchEvent),
    z = "unhandledrejection",
    W = function (e) {
        var t;
        return !!(g(e) && v((t = e.then))) && t;
    },
    G = function (e, t) {
        var n,
            r,
            a,
            o = t.value,
            i = 1 === t.state,
            s = i ? e.ok : e.fail,
            l = e.resolve,
            c = e.reject,
            u = e.domain;
        try {
            s
                ? (i || (2 === t.rejection && J(t), (t.rejection = 1)),
                  !0 === s ? (n = o) : (u && u.enter(), (n = s(o)), u && (u.exit(), (a = !0))),
                  n === e.promise ? c(new V("Promise-chain cycle")) : (r = W(n)) ? d(r, n, l, c) : l(n))
                : c(o);
        } catch (e) {
            u && !a && u.exit(), c(e);
        }
    },
    $ = function (e, t) {
        e.notified ||
            ((e.notified = !0),
            k(function () {
                for (var n, r = e.reactions; (n = r.get()); ) G(n, e);
                (e.notified = !1), t && !e.rejection && Q(e);
            }));
    },
    Y = function (e, t, n) {
        var r, a;
        H
            ? (((r = j.createEvent("Event")).promise = t), (r.reason = n), r.initEvent(e, !1, !0), u.dispatchEvent(r))
            : (r = { promise: t, reason: n }),
            !E && (a = u["on" + e]) ? a(r) : e === z && C("Unhandled promise rejection", n);
    },
    Q = function (e) {
        d(_, u, function () {
            var t,
                n = e.facade,
                r = e.value;
            if (
                Z(e) &&
                ((t = w(function () {
                    c ? U.emit("unhandledRejection", r, n) : Y(z, n, r);
                })),
                (e.rejection = c || Z(e) ? 2 : 1),
                t.error)
            )
                throw t.value;
        });
    },
    Z = function (e) {
        return 1 !== e.rejection && !e.parent;
    },
    J = function (e) {
        d(_, u, function () {
            var t = e.facade;
            c ? U.emit("rejectionHandled", t) : Y("rejectionhandled", t, e.value);
        });
    },
    X = function (e, t, n) {
        return function (r) {
            e(t, r, n);
        };
    },
    ee = function (e, t, n) {
        e.done || ((e.done = !0), n && (e = n), (e.value = t), (e.state = 2), $(e, !0));
    },
    et = function (e, t, n) {
        if (!e.done) {
            (e.done = !0), n && (e = n);
            try {
                if (e.facade === t) throw new V("Promise can't be resolved itself");
                var r = W(t);
                r
                    ? k(function () {
                          var n = { done: !1 };
                          try {
                              d(r, t, X(et, n, e), X(ee, n, e));
                          } catch (t) {
                              ee(n, t, e);
                          }
                      })
                    : ((e.value = t), (e.state = 1), $(e, !1));
            } catch (t) {
                ee({ done: !1 }, t, e);
            }
        }
    };
if (
    O &&
    ((L = (D = function (e) {
        b(this, L), y(e), d(r, this);
        var t = M(this);
        try {
            e(X(et, t), X(ee, t));
        } catch (e) {
            ee(t, e);
        }
    }).prototype),
    ((r = function (e) {
        T(this, {
            type: F,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new S(),
            rejection: !1,
            state: 0,
            value: null,
        });
    }).prototype = p(L, "then", function (e, t) {
        var n = M(this),
            r = q(A(this, D));
        return (
            (n.parent = !0),
            (r.ok = !v(e) || e),
            (r.fail = v(t) && t),
            (r.domain = c ? U.domain : void 0),
            0 === n.state
                ? n.reactions.add(r)
                : k(function () {
                      G(r, n);
                  }),
            r.promise
        );
    })),
    (a = function () {
        var e = new r(),
            t = M(e);
        (this.promise = e), (this.resolve = X(et, t)), (this.reject = X(ee, t));
    }),
    (R.f = q =
        function (e) {
            return e === D || e === o ? new a(e) : K(e);
        }),
    !l && v(x) && B !== Object.prototype)
) {
    (i = B.then),
        I ||
            p(
                B,
                "then",
                function (e, t) {
                    var n = this;
                    return new D(function (e, t) {
                        d(i, n, e, t);
                    }).then(e, t);
                },
                { unsafe: !0 },
            );
    try {
        delete B.constructor;
    } catch (e) {}
    h && h(B, L);
}
s({ global: !0, constructor: !0, wrap: !0, forced: O }, { Promise: D }), f(D, F, !1, !0), m(F);
