var r = n(557939),
    i = n(230606),
    a = n(53132),
    s = n(503628),
    o = n(482779),
    l = n(231977),
    c = n(4940).f,
    u = n(693655),
    d = n(485155),
    f = n(210140),
    p = n(61132),
    _ = n(101968),
    h = n(515655),
    m = n(862784),
    g = n(753609),
    E = n(949186),
    b = n(883972),
    y = n(257943),
    O = n(105712),
    A = "DOMException",
    v = "DATA_CLONE_ERR",
    S = i("Error"),
    I =
        i(A) ||
        (function () {
            try {
                new (i("MessageChannel") || a("worker_threads").MessageChannel)().port1.postMessage(new WeakMap());
            } catch (e) {
                if (e.name === v && 25 === e.code) return e.constructor;
            }
        })(),
    T = I && I.prototype,
    C = S.prototype,
    N = b.set,
    R = b.getterFor(A),
    w = "stack" in new S(A),
    P = function (e) {
        return f(g, e) && g[e].m ? g[e].c : 0;
    },
    D = function () {
        p(this, x);
        var e = arguments.length,
            t = m(e < 1 ? void 0 : arguments[0]),
            n = m(e < 2 ? void 0 : arguments[1], "Error"),
            r = P(n);
        if (
            (N(this, {
                type: A,
                name: n,
                message: t,
                code: r,
            }),
            y || ((this.name = n), (this.message = t), (this.code = r)),
            w)
        ) {
            var i = new S(t);
            (i.name = A), c(this, "stack", l(1, E(i.stack, 1)));
        }
    },
    x = (D.prototype = o(C)),
    L = function (e) {
        return {
            enumerable: !0,
            configurable: !0,
            get: e,
        };
    },
    j = function (e) {
        return L(function () {
            return R(this)[e];
        });
    };
y && (d(x, "code", j("code")), d(x, "message", j("message")), d(x, "name", j("name"))), c(x, "constructor", l(1, D));
var M = s(function () {
        return !(new I() instanceof S);
    }),
    k =
        M ||
        s(function () {
            return C.toString !== h || "2: 1" !== String(new I(1, 2));
        }),
    U =
        M ||
        s(function () {
            return 25 !== new I(1, "DataCloneError").code;
        }),
    G = M || 25 !== I[v] || 25 !== T[v],
    V = O ? k || U || G : M;
r(
    {
        global: !0,
        constructor: !0,
        forced: V,
    },
    { DOMException: V ? D : I },
);
var F = i(A),
    B = F.prototype;
for (var H in (k && (O || I === F) && u(B, "toString", h),
U &&
    y &&
    I === F &&
    d(
        B,
        "code",
        L(function () {
            return P(_(this).name);
        }),
    ),
g))
    if (f(g, H)) {
        var Y = g[H],
            W = Y.s,
            K = l(6, Y.c);
        f(F, W) || c(F, W, K), f(B, W) || c(B, W, K);
    }
