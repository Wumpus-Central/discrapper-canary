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
    p = n(170322),
    _ = n(179122),
    m = n(266101),
    h = n(759319),
    g = n(17204),
    E = n(742850),
    b = n(199838),
    y = n(507604),
    O = n(511696),
    v = "DOMException",
    S = "DATA_CLONE_ERR",
    I = i("Error"),
    T =
        i(v) ||
        (function () {
            try {
                new (i("MessageChannel") || a("worker_threads").MessageChannel)().port1.postMessage(new WeakMap());
            } catch (e) {
                if (e.name === S && 25 === e.code) return e.constructor;
            }
        })(),
    C = T && T.prototype,
    A = I.prototype,
    N = b.set,
    P = b.getterFor(v),
    R = "stack" in new I(v),
    D = function (e) {
        return f(g, e) && g[e].m ? g[e].c : 0;
    },
    w = function () {
        p(this, x);
        var e = arguments.length,
            t = h(e < 1 ? void 0 : arguments[0]),
            n = h(e < 2 ? void 0 : arguments[1], "Error"),
            r = D(n);
        if (
            (N(this, {
                type: v,
                name: n,
                message: t,
                code: r,
            }),
            y || ((this.name = n), (this.message = t), (this.code = r)),
            R)
        ) {
            var i = new I(t);
            (i.name = v), c(this, "stack", l(1, E(i.stack, 1)));
        }
    },
    x = (w.prototype = s(A)),
    L = function (e) {
        return {
            enumerable: !0,
            configurable: !0,
            get: e,
        };
    },
    j = function (e) {
        return L(function () {
            return P(this)[e];
        });
    };
y && (d(x, "code", j("code")), d(x, "message", j("message")), d(x, "name", j("name"))), c(x, "constructor", l(1, w));
var M = o(function () {
        return !(new T() instanceof I);
    }),
    k =
        M ||
        o(function () {
            return A.toString !== m || "2: 1" !== String(new T(1, 2));
        }),
    U =
        M ||
        o(function () {
            return 25 !== new T(1, "DataCloneError").code;
        }),
    G = M || 25 !== T[S] || 25 !== C[S],
    Z = O ? k || U || G : M;
r(
    {
        global: !0,
        constructor: !0,
        forced: Z,
    },
    { DOMException: Z ? w : T },
);
var B = i(v),
    F = B.prototype;
for (var V in (k && (O || T === B) && u(F, "toString", m),
U &&
    y &&
    T === B &&
    d(
        F,
        "code",
        L(function () {
            return D(_(this).name);
        }),
    ),
g))
    if (f(g, V)) {
        var H = g[V],
            Y = H.s,
            W = l(6, H.c);
        f(B, Y) || c(B, Y, W), f(F, Y) || c(F, Y, W);
    }
