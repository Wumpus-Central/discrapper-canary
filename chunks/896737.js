var r = n(220159),
    o = n(764908),
    a = n(691593),
    i = n(475424),
    s = n(174344),
    c = n(691840),
    l = n(565130),
    u = n(779688),
    d = n(862097),
    p = n(271537),
    h = n(761762),
    f = n(882854),
    m = n(306983),
    y = n(569314),
    v = [],
    g = o(v.sort),
    b = o(v.push),
    _ = u(function () {
        v.sort(void 0);
    }),
    k = u(function () {
        v.sort(null);
    }),
    C = p('sort'),
    Z = !u(function () {
        if (m) return m < 70;
        if (!h || !(h > 3)) {
            if (f) return !0;
            if (y) return y < 603;
            var e,
                t,
                n,
                r,
                o = '';
            for (e = 65; e < 76; e++) {
                switch (((t = String.fromCharCode(e)), e)) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                        n = 3;
                        break;
                    case 68:
                    case 71:
                        n = 4;
                        break;
                    default:
                        n = 2;
                }
                for (r = 0; r < 47; r++)
                    v.push({
                        k: t + r,
                        v: n
                    });
            }
            for (
                v.sort(function (e, t) {
                    return t.v - e.v;
                }),
                    r = 0;
                r < v.length;
                r++
            )
                (t = v[r].k.charAt(0)), o.charAt(o.length - 1) !== t && (o += t);
            return 'DGBEFHACIJK' !== o;
        }
    });
r(
    {
        target: 'Array',
        proto: !0,
        forced: _ || !k || !C || !Z
    },
    {
        sort: function (e) {
            void 0 !== e && a(e);
            var t,
                n,
                r = i(this);
            if (Z) return void 0 === e ? g(r) : g(r, e);
            var o = [],
                u = s(r);
            for (n = 0; n < u; n++) n in r && b(o, r[n]);
            for (
                d(o, function (t, n) {
                    return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : l(t) > l(n) ? 1 : -1;
                }),
                    t = s(o),
                    n = 0;
                n < t;

            )
                r[n] = o[n++];
            for (; n < u; ) c(r, n++);
            return r;
        }
    }
);
