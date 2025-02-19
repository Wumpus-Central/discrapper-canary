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
    p = n(603528),
    _ = n(24033),
    h = n(767587),
    m = n(892725),
    g = n(33995),
    E = n(905145),
    v = n(644659),
    b = n(325008),
    y = n(992051),
    O = 'DOMException',
    S = 'DATA_CLONE_ERR',
    I = o('Error'),
    T =
        o(O) ||
        (function () {
            try {
                new (o('MessageChannel') || i('worker_threads').MessageChannel)().port1.postMessage(new WeakMap());
            } catch (e) {
                if (e.name === S && 25 === e.code) return e.constructor;
            }
        })(),
    N = T && T.prototype,
    A = I.prototype,
    C = v.set,
    R = v.getterFor(O),
    P = 'stack' in I(O),
    w = function (e) {
        return f(g, e) && g[e].m ? g[e].c : 0;
    },
    D = function () {
        p(this, x);
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
            b || ((this.name = n), (this.message = t), (this.code = r)),
            P)
        ) {
            var i = I(t);
            (i.name = O), c(this, 'stack', l(1, E(i.stack, 1)));
        }
    },
    x = (D.prototype = s(A)),
    L = function (e) {
        return {
            enumerable: !0,
            configurable: !0,
            get: e
        };
    },
    M = function (e) {
        return L(function () {
            return R(this)[e];
        });
    };
b && (d(x, 'code', M('code')), d(x, 'message', M('message')), d(x, 'name', M('name'))), c(x, 'constructor', l(1, D));
var k = a(function () {
        return !(new T() instanceof I);
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
    G = k || 25 !== T[S] || 25 !== N[S],
    B = y ? j || U || G : k;
r(
    {
        global: !0,
        constructor: !0,
        forced: B
    },
    { DOMException: B ? D : T }
);
var Z = o(O),
    F = Z.prototype;
for (var V in (j && (y || T === Z) && u(F, 'toString', h),
U &&
    b &&
    T === Z &&
    d(
        F,
        'code',
        L(function () {
            return w(_(this).name);
        })
    ),
g))
    if (f(g, V)) {
        var H = g[V],
            W = H.s,
            Y = l(6, H.c);
        f(Z, W) || c(Z, W, Y), f(F, W) || c(F, W, Y);
    }
