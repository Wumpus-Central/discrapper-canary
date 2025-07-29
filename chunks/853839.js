var r = n(98405),
    i = n(154028),
    a = n(10693),
    o = n(621523),
    s = n(713411),
    l = n(530575),
    c = n(117895).f,
    u = n(556585),
    d = n(573078),
    _ = n(77025),
    f = n(170322),
    p = n(179122),
    h = n(266101),
    m = n(759319),
    g = n(17204),
    E = n(742850),
    b = n(199838),
    y = n(507604),
    O = n(511696),
    v = 'DOMException',
    I = 'DATA_CLONE_ERR',
    T = i('Error'),
    S =
        i(v) ||
        (function () {
            try {
                new (i('MessageChannel') || a('worker_threads').MessageChannel)().port1.postMessage(new WeakMap());
            } catch (e) {
                if (e.name === I && 25 === e.code) return e.constructor;
            }
        })(),
    A = S && S.prototype,
    N = T.prototype,
    C = b.set,
    R = b.getterFor(v),
    P = 'stack' in new T(v),
    w = function (e) {
        return _(g, e) && g[e].m ? g[e].c : 0;
    },
    D = function () {
        f(this, L);
        var e = arguments.length,
            t = m(e < 1 ? void 0 : arguments[0]),
            n = m(e < 2 ? void 0 : arguments[1], 'Error'),
            r = w(n);
        if (
            (C(this, {
                type: v,
                name: n,
                message: t,
                code: r
            }),
            y || ((this.name = n), (this.message = t), (this.code = r)),
            P)
        ) {
            var i = new T(t);
            ((i.name = v), c(this, 'stack', l(1, E(i.stack, 1))));
        }
    },
    L = (D.prototype = s(N)),
    x = function (e) {
        return {
            enumerable: !0,
            configurable: !0,
            get: e
        };
    },
    M = function (e) {
        return x(function () {
            return R(this)[e];
        });
    };
(y && (d(L, 'code', M('code')), d(L, 'message', M('message')), d(L, 'name', M('name'))), c(L, 'constructor', l(1, D)));
var k = o(function () {
        return !(new S() instanceof T);
    }),
    j =
        k ||
        o(function () {
            return N.toString !== h || '2: 1' !== String(new S(1, 2));
        }),
    U =
        k ||
        o(function () {
            return 25 !== new S(1, 'DataCloneError').code;
        }),
    G = k || 25 !== S[I] || 25 !== A[I],
    B = O ? j || U || G : k;
r(
    {
        global: !0,
        constructor: !0,
        forced: B
    },
    { DOMException: B ? D : S }
);
var V = i(v),
    F = V.prototype;
for (var Z in (j && (O || S === V) && u(F, 'toString', h),
U &&
    y &&
    S === V &&
    d(
        F,
        'code',
        x(function () {
            return w(p(this).name);
        })
    ),
g))
    if (_(g, Z)) {
        var H = g[Z],
            Y = H.s,
            W = l(6, H.c);
        (_(V, Y) || c(V, Y, W), _(F, Y) || c(F, Y, W));
    }
