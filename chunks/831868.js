var i,
    a,
    o,
    s = r(754793),
    l = 4,
    u = 0,
    c = 1,
    d = 2;
function f(e) {
    for (var n = e.length; --n >= 0; ) e[n] = 0;
}
var p = 0,
    h = 1,
    _ = 2,
    m = 3,
    g = 258,
    E = 29,
    v = 256,
    y = 286,
    b = 30,
    I = 19,
    T = 573,
    S = 15,
    A = 16,
    C = 7,
    N = 256,
    R = 16,
    O = 17,
    D = 18,
    L = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    x = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    w = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    P = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    M = 512,
    k = Array(576);
f(k);
var U = Array(2 * b);
f(U);
var B = Array(M);
f(B);
var G = Array(g - m + 1);
f(G);
var Z = Array(E);
f(Z);
var F = Array(b);
function V(e, n, r, i, a) {
    (this.static_tree = e), (this.extra_bits = n), (this.extra_base = r), (this.elems = i), (this.max_length = a), (this.has_stree = e && e.length);
}
function j(e, n) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = n);
}
function H(e) {
    return e < 256 ? B[e] : B[256 + (e >>> 7)];
}
function Y(e, n) {
    (e.pending_buf[e.pending++] = 255 & n), (e.pending_buf[e.pending++] = (n >>> 8) & 255);
}
function W(e, n, r) {
    e.bi_valid > A - r ? ((e.bi_buf |= (n << e.bi_valid) & 65535), Y(e, e.bi_buf), (e.bi_buf = n >> (A - e.bi_valid)), (e.bi_valid += r - A)) : ((e.bi_buf |= (n << e.bi_valid) & 65535), (e.bi_valid += r));
}
function K(e, n, r) {
    W(e, r[2 * n], r[2 * n + 1]);
}
function z(e, n) {
    var r = 0;
    do (r |= 1 & e), (e >>>= 1), (r <<= 1);
    while (--n > 0);
    return r >>> 1;
}
function q(e) {
    16 === e.bi_valid ? (Y(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0)) : e.bi_valid >= 8 && ((e.pending_buf[e.pending++] = 255 & e.bi_buf), (e.bi_buf >>= 8), (e.bi_valid -= 8));
}
function Q(e, n) {
    var r,
        i,
        a,
        o,
        s,
        l,
        u = n.dyn_tree,
        c = n.max_code,
        d = n.stat_desc.static_tree,
        f = n.stat_desc.has_stree,
        p = n.stat_desc.extra_bits,
        h = n.stat_desc.extra_base,
        _ = n.stat_desc.max_length,
        m = 0;
    for (o = 0; o <= S; o++) e.bl_count[o] = 0;
    for (u[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < T; r++) {
        if (((o = u[2 * u[2 * (i = e.heap[r]) + 1] + 1] + 1) > _ && ((o = _), m++), (u[2 * i + 1] = o), !(i > c))) e.bl_count[o]++, (s = 0), i >= h && (s = p[i - h]), (l = u[2 * i]), (e.opt_len += l * (o + s)), f && (e.static_len += l * (d[2 * i + 1] + s));
    }
    if (0 !== m) {
        do {
            for (o = _ - 1; 0 === e.bl_count[o]; ) o--;
            e.bl_count[o]--, (e.bl_count[o + 1] += 2), e.bl_count[_]--, (m -= 2);
        } while (m > 0);
        for (o = _; 0 !== o; o--)
            for (i = e.bl_count[o]; 0 !== i; ) {
                if (!((a = e.heap[--r]) > c)) u[2 * a + 1] !== o && ((e.opt_len += (o - u[2 * a + 1]) * u[2 * a]), (u[2 * a + 1] = o)), i--;
            }
    }
}
function X(e, n, r) {
    var i,
        a,
        o = Array(S + 1),
        s = 0;
    for (i = 1; i <= S; i++) o[i] = s = (s + r[i - 1]) << 1;
    for (a = 0; a <= n; a++) {
        var l = e[2 * a + 1];
        if (0 !== l) e[2 * a] = z(o[l]++, l);
    }
}
function J() {
    var e,
        n,
        r,
        s,
        l,
        u = Array(S + 1);
    for (s = 0, r = 0; s < E - 1; s++) for (e = 0, Z[s] = r; e < 1 << L[s]; e++) G[r++] = s;
    for (G[r - 1] = s, l = 0, s = 0; s < 16; s++) for (e = 0, F[s] = l; e < 1 << x[s]; e++) B[l++] = s;
    for (l >>= 7; s < b; s++) for (e = 0, F[s] = l << 7; e < 1 << (x[s] - 7); e++) B[256 + l++] = s;
    for (n = 0; n <= S; n++) u[n] = 0;
    for (e = 0; e <= 143; ) (k[2 * e + 1] = 8), e++, u[8]++;
    for (; e <= 255; ) (k[2 * e + 1] = 9), e++, u[9]++;
    for (; e <= 279; ) (k[2 * e + 1] = 7), e++, u[7]++;
    for (; e <= 287; ) (k[2 * e + 1] = 8), e++, u[8]++;
    for (X(k, y + 1, u), e = 0; e < b; e++) (U[2 * e + 1] = 5), (U[2 * e] = z(e, 5));
    (i = new V(k, L, v + 1, y, S)), (a = new V(U, x, 0, b, S)), (o = new V([], w, 0, I, C));
}
function $(e) {
    var n;
    for (n = 0; n < y; n++) e.dyn_ltree[2 * n] = 0;
    for (n = 0; n < b; n++) e.dyn_dtree[2 * n] = 0;
    for (n = 0; n < I; n++) e.bl_tree[2 * n] = 0;
    (e.dyn_ltree[2 * N] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0);
}
function ee(e) {
    e.bi_valid > 8 ? Y(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0);
}
function et(e, n, r, i) {
    ee(e), i && (Y(e, r), Y(e, ~r)), s.arraySet(e.pending_buf, e.window, n, r, e.pending), (e.pending += r);
}
function en(e, n, r, i) {
    var a = 2 * n,
        o = 2 * r;
    return e[a] < e[o] || (e[a] === e[o] && i[n] <= i[r]);
}
function er(e, n, r) {
    for (var i = e.heap[r], a = r << 1; a <= e.heap_len && (a < e.heap_len && en(n, e.heap[a + 1], e.heap[a], e.depth) && a++, !en(n, i, e.heap[a], e.depth)); ) {
        (e.heap[r] = e.heap[a]), (r = a), (a <<= 1);
    }
    e.heap[r] = i;
}
function ei(e, n, r) {
    var i,
        a,
        o,
        s,
        l = 0;
    if (0 !== e.last_lit)
        do (i = (e.pending_buf[e.d_buf + 2 * l] << 8) | e.pending_buf[e.d_buf + 2 * l + 1]), (a = e.pending_buf[e.l_buf + l]), l++, 0 === i ? K(e, a, n) : (K(e, (o = G[a]) + v + 1, n), 0 !== (s = L[o]) && W(e, (a -= Z[o]), s), K(e, (o = H(--i)), r), 0 !== (s = x[o]) && W(e, (i -= F[o]), s));
        while (l < e.last_lit);
    K(e, N, n);
}
function ea(e, n) {
    var r,
        i,
        a,
        o = n.dyn_tree,
        s = n.stat_desc.static_tree,
        l = n.stat_desc.has_stree,
        u = n.stat_desc.elems,
        c = -1;
    for (r = 0, e.heap_len = 0, e.heap_max = T; r < u; r++) 0 !== o[2 * r] ? ((e.heap[++e.heap_len] = c = r), (e.depth[r] = 0)) : (o[2 * r + 1] = 0);
    for (; e.heap_len < 2; ) (o[2 * (a = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1), (e.depth[a] = 0), e.opt_len--, l && (e.static_len -= s[2 * a + 1]);
    for (n.max_code = c, r = e.heap_len >> 1; r >= 1; r--) er(e, o, r);
    a = u;
    do (r = e.heap[1]), (e.heap[1] = e.heap[e.heap_len--]), er(e, o, 1), (i = e.heap[1]), (e.heap[--e.heap_max] = r), (e.heap[--e.heap_max] = i), (o[2 * a] = o[2 * r] + o[2 * i]), (e.depth[a] = (e.depth[r] >= e.depth[i] ? e.depth[r] : e.depth[i]) + 1), (o[2 * r + 1] = o[2 * i + 1] = a), (e.heap[1] = a++), er(e, o, 1);
    while (e.heap_len >= 2);
    (e.heap[--e.heap_max] = e.heap[1]), Q(e, n), X(o, c, e.bl_count);
}
function eo(e, n, r) {
    var i,
        a,
        o = -1,
        s = n[1],
        l = 0,
        u = 7,
        c = 4;
    for (0 === s && ((u = 138), (c = 3)), n[(r + 1) * 2 + 1] = 65535, i = 0; i <= r; i++) {
        if (((a = s), (s = n[(i + 1) * 2 + 1]), !(++l < u) || a !== s)) {
            l < c ? (e.bl_tree[2 * a] += l) : 0 !== a ? (a !== o && e.bl_tree[2 * a]++, e.bl_tree[2 * R]++) : l <= 10 ? e.bl_tree[2 * O]++ : e.bl_tree[2 * D]++;
            (l = 0), (o = a), 0 === s ? ((u = 138), (c = 3)) : a === s ? ((u = 6), (c = 3)) : ((u = 7), (c = 4));
        }
    }
}
function es(e, n, r) {
    var i,
        a,
        o = -1,
        s = n[1],
        l = 0,
        u = 7,
        c = 4;
    for (0 === s && ((u = 138), (c = 3)), i = 0; i <= r; i++) {
        if (((a = s), (s = n[(i + 1) * 2 + 1]), !(++l < u) || a !== s)) {
            if (l < c)
                do K(e, a, e.bl_tree);
                while (0 != --l);
            else 0 !== a ? (a !== o && (K(e, a, e.bl_tree), l--), K(e, R, e.bl_tree), W(e, l - 3, 2)) : l <= 10 ? (K(e, O, e.bl_tree), W(e, l - 3, 3)) : (K(e, D, e.bl_tree), W(e, l - 11, 7));
            (l = 0), (o = a), 0 === s ? ((u = 138), (c = 3)) : a === s ? ((u = 6), (c = 3)) : ((u = 7), (c = 4));
        }
    }
}
function el(e) {
    var n;
    for (eo(e, e.dyn_ltree, e.l_desc.max_code), eo(e, e.dyn_dtree, e.d_desc.max_code), ea(e, e.bl_desc), n = I - 1; n >= 3 && 0 === e.bl_tree[2 * P[n] + 1]; n--);
    return (e.opt_len += 3 * (n + 1) + 5 + 5 + 4), n;
}
function eu(e, n, r, i) {
    var a;
    for (W(e, n - 257, 5), W(e, r - 1, 5), W(e, i - 4, 4), a = 0; a < i; a++) W(e, e.bl_tree[2 * P[a] + 1], 3);
    es(e, e.dyn_ltree, n - 1), es(e, e.dyn_dtree, r - 1);
}
function ec(e) {
    var n,
        r = 4093624447;
    for (n = 0; n <= 31; n++, r >>>= 1) if (1 & r && 0 !== e.dyn_ltree[2 * n]) return u;
    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return c;
    for (n = 32; n < v; n++) if (0 !== e.dyn_ltree[2 * n]) return c;
    return u;
}
f(F);
var ed = !1;
function ef(e) {
    !ed && (J(), (ed = !0)), (e.l_desc = new j(e.dyn_ltree, i)), (e.d_desc = new j(e.dyn_dtree, a)), (e.bl_desc = new j(e.bl_tree, o)), (e.bi_buf = 0), (e.bi_valid = 0), $(e);
}
function ep(e, n, r, i) {
    W(e, (p << 1) + (i ? 1 : 0), 3), et(e, n, r, !0);
}
function eh(e) {
    W(e, h << 1, 3), K(e, N, k), q(e);
}
function e_(e, n, r, i) {
    var a,
        o,
        s = 0;
    e.level > 0 ? (e.strm.data_type === d && (e.strm.data_type = ec(e)), ea(e, e.l_desc), ea(e, e.d_desc), (s = el(e)), (a = (e.opt_len + 3 + 7) >>> 3), (o = (e.static_len + 3 + 7) >>> 3) <= a && (a = o)) : (a = o = r + 5), r + 4 <= a && -1 !== n ? ep(e, n, r, i) : e.strategy === l || o === a ? (W(e, (h << 1) + (i ? 1 : 0), 3), ei(e, k, U)) : (W(e, (_ << 1) + (i ? 1 : 0), 3), eu(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), ei(e, e.dyn_ltree, e.dyn_dtree)), $(e), i && ee(e);
}
function em(e, n, r) {
    return (e.pending_buf[e.d_buf + 2 * e.last_lit] = (n >>> 8) & 255), (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & n), (e.pending_buf[e.l_buf + e.last_lit] = 255 & r), e.last_lit++, 0 === n ? e.dyn_ltree[2 * r]++ : (e.matches++, n--, e.dyn_ltree[(G[r] + v + 1) * 2]++, e.dyn_dtree[2 * H(n)]++), e.last_lit === e.lit_bufsize - 1;
}
(n._tr_init = ef), (n._tr_stored_block = ep), (n._tr_flush_block = e_), (n._tr_tally = em), (n._tr_align = eh);
