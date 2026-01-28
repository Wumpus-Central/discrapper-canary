var n = e(985848),
    i = e(446474),
    o = e(410323),
    a = e(350445),
    u = e(503628),
    c = e(101968),
    s = e(339626),
    l = e(652320),
    f = e(120394),
    v = e(370001),
    p = e(304880),
    d = e(321727),
    g = e(929880),
    h = e(95959),
    x = e(470103),
    y = e(17755),
    b = e(380744)("replace"),
    I = Math.max,
    E = Math.min,
    R = o([].concat),
    m = o([].push),
    $ = o("".indexOf),
    S = o("".slice),
    w = "$0" === "a".replace(/./, "$0"),
    O = !!/./[b] && "" === /./[b]("a", "$0");
a(
    "replace",
    function (t, r, e) {
        var o = O ? "$" : "$0";
        return [
            function (t, e) {
                var n = d(this),
                    o = l(t) ? void 0 : h(t, b);
                return o ? i(o, t, n, e) : i(r, p(n), t, e);
            },
            function (t, i) {
                var a = c(this),
                    u = p(t);
                if ("string" == typeof i && -1 === $(i, o) && -1 === $(i, "$<")) {
                    var l = e(r, a, u, i);
                    if (l.done) return l.value;
                }
                var d = s(i);
                d || (i = p(i));
                var h = a.global;
                h && ((C = a.unicode), (a.lastIndex = 0));
                for (var b = []; null !== (T = y(a, u)) && (m(b, T), h); ) {
                    "" === p(T[0]) && (a.lastIndex = g(u, v(a.lastIndex), C));
                }
                for (var w = "", O = 0, A = 0; A < b.length; A++) {
                    for (
                        var k, C, P, T = b[A], _ = p(T[0]), F = I(E(f(T.index), u.length), 0), U = [], M = 1;
                        M < T.length;
                        M++
                    )
                        m(U, void 0 === (k = T[M]) ? k : String(k));
                    var j = T.groups;
                    if (d) {
                        var D = R([_], U, F, u);
                        void 0 !== j && m(D, j), (P = p(n(i, void 0, D)));
                    } else P = x(_, u, F, U, j, i);
                    F >= O && ((w += S(u, O, F) + P), (O = F + _.length));
                }
                return w + S(u, O);
            },
        ];
    },
    !!u(function () {
        var t = /./;
        return (
            (t.exec = function () {
                var t = [];
                return (
                    (t.groups = {
                        a: "7",
                    }),
                    t
                );
            }),
            "7" !== "".replace(t, "$<a>")
        );
    }) ||
        !w ||
        O,
);
