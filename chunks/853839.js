var r = n(98405),
    i = n(154028),
    a = n(10693),
    o = n(621523),
    s = n(713411),
    l = n(530575),
    c = n(117895).f,
    u = n(556585),
    d = n(573078),
    f = n(77025),
    _ = n(170322),
    p = n(179122),
    h = n(266101),
    m = n(759319),
    g = n(17204),
    E = n(742850),
    b = n(199838),
    y = n(507604),
    O = n(511696),
    v = "DOMException",
    I = "DATA_CLONE_ERR",
    T = i("Error"),
    S =
        i(v) ||
        (function () {
            try {
                new (i("MessageChannel") || a("worker_threads").MessageChannel)().port1.postMessage(new WeakMap());
            } catch (e) {
                if (e.name === I && 25 === e.code) return e.constructor;
            }
        })(),
    A = S && S.prototype,
    C = T.prototype,
    N = b.set,
    R = b.getterFor(v),
    P = "stack" in new T(v),
    D = function (e) {
        return f(g, e) && g[e].m ? g[e].c : 0;
    },
    w = function () {
        _(this, x);
        var e = arguments.length,
            t = m(e < 1 ? void 0 : arguments[0]),
            n = m(e < 2 ? void 0 : arguments[1], "Error"),
            r = D(n);
        if (
            (N(this, {
                type: v,
                name: n,
                message: t,
                code: r,
            }),
            y || ((this.name = n), (this.message = t), (this.code = r)),
            P)
        ) {
            var i = new T(t);
            (i.name = v), c(this, "stack", l(1, E(i.stack, 1)));
        }
    },
    x = (w.prototype = s(C)),
    L = function (e) {
        return {
            enumerable: !0,
            configurable: !0,
            get: e,
        };
    },
    M = function (e) {
        return L(function () {
            return R(this)[e];
        });
    };
y && (d(x, "code", M("code")), d(x, "message", M("message")), d(x, "name", M("name"))), c(x, "constructor", l(1, w));
var j = o(function () {
        return !(new S() instanceof T);
    }),
    k =
        j ||
        o(function () {
            return C.toString !== h || "2: 1" !== String(new S(1, 2));
        }),
    U =
        j ||
        o(function () {
            return 25 !== new S(1, "DataCloneError").code;
        }),
    G = j || 25 !== S[I] || 25 !== A[I],
    B = O ? k || U || G : j;
r(
    {
        global: !0,
        constructor: !0,
        forced: B,
    },
    { DOMException: B ? w : S },
);
var Z = i(v),
    F = Z.prototype;
for (var V in (k && (O || S === Z) && u(F, "toString", h),
U &&
    y &&
    S === Z &&
    d(
        F,
        "code",
        L(function () {
            return D(p(this).name);
        }),
    ),
g))
    if (f(g, V)) {
        var H = g[V],
            Y = H.s,
            W = l(6, H.c);
        f(Z, Y) || c(Z, Y, W), f(F, Y) || c(F, Y, W);
    }
