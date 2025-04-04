var r = n(147018),
    i = n(367958),
    o = n(545576),
    a = n(936940),
    s = n(803938),
    l = n(879),
    c = n(97131).f,
    u = n(859209),
    d = n(4340),
    f = n(740362),
    _ = n(603528),
    p = n(24033),
    h = n(767587),
    m = n(892725),
    g = n(33995),
    E = n(905145),
    b = n(644659),
    y = n(325008),
    v = n(992051),
    O = 'DOMException',
    I = 'DATA_CLONE_ERR',
    S = o('Error'),
    T =
        o(O) ||
        (function () {
            try {
                new (o('MessageChannel') || i('worker_threads').MessageChannel)().port1.postMessage(new WeakMap());
            } catch (e) {
                if (e.name === I && 25 === e.code) return e.constructor;
            }
        })(),
    N = T && T.prototype,
    A = S.prototype,
    C = b.set,
    R = b.getterFor(O),
    P = 'stack' in S(O),
    w = function (e) {
        return f(g, e) && g[e].m ? g[e].c : 0;
    },
    D = function () {
        _(this, L);
        var e = arguments.length,
            t = m(e < 1 ? void 0 : arguments[0]),
            n = m(e < 2 ? void 0 : arguments[1], 'Error'),
            r = w(n);
        if (
            (C(this, {
                type: O,
                name: n,
                message: t,
                code: r
            }),
            y || ((this.name = n), (this.message = t), (this.code = r)),
            P)
        ) {
            var i = S(t);
            (i.name = O), c(this, 'stack', l(1, E(i.stack, 1)));
        }
    },
    L = (D.prototype = s(A)),
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
y && (d(L, 'code', M('code')), d(L, 'message', M('message')), d(L, 'name', M('name'))), c(L, 'constructor', l(1, D));
var k = a(function () {
        return !(new T() instanceof S);
    }),
    j =
        k ||
        a(function () {
            return A.toString !== h || '2: 1' !== String(new T(1, 2));
        }),
    U =
        k ||
        a(function () {
            return 25 !== new T(1, 'DataCloneError').code;
        }),
    G = k || 25 !== T[I] || 25 !== N[I],
    B = v ? j || U || G : k;
r(
    {
        global: !0,
        constructor: !0,
        forced: B
    },
    { DOMException: B ? D : T }
);
var F = o(O),
    V = F.prototype;
for (var Z in (j && (v || T === F) && u(V, 'toString', h),
U &&
    y &&
    T === F &&
    d(
        V,
        'code',
        x(function () {
            return w(p(this).name);
        })
    ),
g))
    if (f(g, Z)) {
        var H = g[Z],
            W = H.s,
            Y = l(6, H.c);
        f(F, W) || c(F, W, Y), f(V, W) || c(V, W, Y);
    }
