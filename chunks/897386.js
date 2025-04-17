n.d(t, {
    FK: () => s,
    JG: () => d,
    QU: () => S,
    Qb: () => x,
    Tb: () => p,
    Ud: () => m,
    cE: () => O,
    dH: () => c,
    fj: () => v,
    iF: () => w,
    kq: () => Z,
    lp: () => h,
    mp: () => f,
    q6: () => C,
    r: () => b,
    tP: () => g,
    un: () => y
});
var o = n(810119),
    r = 1,
    i = 1,
    a = 0,
    s = 0,
    u = 0,
    l = '';
function c(e, t, n, o, a, s, u) {
    return {
        value: e,
        root: t,
        parent: n,
        type: o,
        props: a,
        children: s,
        line: r,
        column: i,
        length: u,
        return: ''
    };
}
function d(e, t) {
    return (0, o.f0)(c('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function p() {
    return u;
}
function f() {
    return (u = s > 0 ? (0, o.uO)(l, --s) : 0), i--, 10 === u && ((i = 1), r--), u;
}
function h() {
    return (u = s < a ? (0, o.uO)(l, s++) : 0), i++, 10 === u && ((i = 1), r++), u;
}
function v() {
    return (0, o.uO)(l, s);
}
function m() {
    return s;
}
function g(e, t) {
    return (0, o.tb)(l, e, t);
}
function b(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function y(e) {
    return (r = i = 1), (a = (0, o.to)((l = e))), (s = 0), [];
}
function O(e) {
    return (l = ''), e;
}
function w(e) {
    return (0, o.fy)(
        g(
            s - 1,
            (function e(t) {
                for (; h(); )
                    switch (u) {
                        case t:
                            return s;
                        case 34:
                        case 39:
                            34 !== t && 39 !== t && e(u);
                            break;
                        case 40:
                            41 === t && e(t);
                            break;
                        case 92:
                            h();
                    }
                return s;
            })(91 === e ? e + 2 : 40 === e ? e + 1 : e)
        )
    );
}
function x(e) {
    for (; (u = v()); )
        if (u < 33) h();
        else break;
    return b(e) > 2 || b(u) > 3 ? '' : ' ';
}
function Z(e, t) {
    for (; --t && h() && !(u < 48) && !(u > 102) && (!(u > 57) || !(u < 65)) && (!(u > 70) || !(u < 97)); );
    return g(e, s + (t < 6 && 32 == v() && 32 == h()));
}
function C(e, t) {
    for (; h(); )
        if (e + u === 57) break;
        else if (e + u === 84 && 47 === v()) break;
    return '/*' + g(t, s - 1) + '*' + (0, o.Dp)(47 === e ? e : h());
}
function S(e) {
    for (; !b(v()); ) h();
    return g(e, s);
}
