var r,
    i,
    o,
    a = n(754793),
    s = 4,
    l = 0,
    c = 1,
    u = 2;
function d(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
}
var f = 0,
    _ = 1,
    p = 2,
    h = 3,
    m = 258,
    g = 29,
    E = 256,
    b = 286,
    y = 30,
    v = 19,
    O = 573,
    I = 15,
    S = 16,
    T = 7,
    N = 256,
    A = 16,
    C = 17,
    R = 18,
    P = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    w = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    D = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    L = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    x = 512,
    M = Array(576);
d(M);
var k = Array(2 * y);
d(k);
var j = Array(x);
d(j);
var U = Array(m - h + 1);
d(U);
var G = Array(g);
d(G);
var B = Array(y);
function F(e, t, n, r, i) {
    (this.static_tree = e), (this.extra_bits = t), (this.extra_base = n), (this.elems = r), (this.max_length = i), (this.has_stree = e && e.length);
}
function V(e, t) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
}
function Z(e) {
    return e < 256 ? j[e] : j[256 + (e >>> 7)];
}
function H(e, t) {
    (e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255);
}
function W(e, t, n) {
    e.bi_valid > S - n ? ((e.bi_buf |= (t << e.bi_valid) & 65535), H(e, e.bi_buf), (e.bi_buf = t >> (S - e.bi_valid)), (e.bi_valid += n - S)) : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
}
function Y(e, t, n) {
    W(e, n[2 * t], n[2 * t + 1]);
}
function K(e, t) {
    var n = 0;
    do (n |= 1 & e), (e >>>= 1), (n <<= 1);
    while (--t > 0);
    return n >>> 1;
}
function z(e) {
    16 === e.bi_valid ? (H(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0)) : e.bi_valid >= 8 && ((e.pending_buf[e.pending++] = 255 & e.bi_buf), (e.bi_buf >>= 8), (e.bi_valid -= 8));
}
function q(e, t) {
    var n,
        r,
        i,
        o,
        a,
        s,
        l = t.dyn_tree,
        c = t.max_code,
        u = t.stat_desc.static_tree,
        d = t.stat_desc.has_stree,
        f = t.stat_desc.extra_bits,
        _ = t.stat_desc.extra_base,
        p = t.stat_desc.max_length,
        h = 0;
    for (o = 0; o <= I; o++) e.bl_count[o] = 0;
    for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < O; n++) (o = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > p && ((o = p), h++), (l[2 * r + 1] = o), !(r > c) && (e.bl_count[o]++, (a = 0), r >= _ && (a = f[r - _]), (s = l[2 * r]), (e.opt_len += s * (o + a)), d && (e.static_len += s * (u[2 * r + 1] + a)));
    if (0 !== h) {
        do {
            for (o = p - 1; 0 === e.bl_count[o]; ) o--;
            e.bl_count[o]--, (e.bl_count[o + 1] += 2), e.bl_count[p]--, (h -= 2);
        } while (h > 0);
        for (o = p; 0 !== o; o--) for (r = e.bl_count[o]; 0 !== r; ) !((i = e.heap[--n]) > c) && (l[2 * i + 1] !== o && ((e.opt_len += (o - l[2 * i + 1]) * l[2 * i]), (l[2 * i + 1] = o)), r--);
    }
}
function Q(e, t, n) {
    var r,
        i,
        o = Array(I + 1),
        a = 0;
    for (r = 1; r <= I; r++) o[r] = a = (a + n[r - 1]) << 1;
    for (i = 0; i <= t; i++) {
        var s = e[2 * i + 1];
        0 !== s && (e[2 * i] = K(o[s]++, s));
    }
}
function X() {
    var e,
        t,
        n,
        a,
        s,
        l = Array(I + 1);
    for (a = 0, n = 0; a < g - 1; a++) for (e = 0, G[a] = n; e < 1 << P[a]; e++) U[n++] = a;
    for (U[n - 1] = a, s = 0, a = 0; a < 16; a++) for (e = 0, B[a] = s; e < 1 << w[a]; e++) j[s++] = a;
    for (s >>= 7; a < y; a++) for (e = 0, B[a] = s << 7; e < 1 << (w[a] - 7); e++) j[256 + s++] = a;
    for (t = 0; t <= I; t++) l[t] = 0;
    for (e = 0; e <= 143; ) (M[2 * e + 1] = 8), e++, l[8]++;
    for (; e <= 255; ) (M[2 * e + 1] = 9), e++, l[9]++;
    for (; e <= 279; ) (M[2 * e + 1] = 7), e++, l[7]++;
    for (; e <= 287; ) (M[2 * e + 1] = 8), e++, l[8]++;
    for (Q(M, b + 1, l), e = 0; e < y; e++) (k[2 * e + 1] = 5), (k[2 * e] = K(e, 5));
    (r = new F(M, P, E + 1, b, I)), (i = new F(k, w, 0, y, I)), (o = new F([], D, 0, v, T));
}
function J(e) {
    var t;
    for (t = 0; t < b; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < y; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < v; t++) e.bl_tree[2 * t] = 0;
    (e.dyn_ltree[2 * N] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0);
}
function $(e) {
    e.bi_valid > 8 ? H(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0);
}
function ee(e, t, n, r) {
    $(e), r && (H(e, n), H(e, ~n)), a.arraySet(e.pending_buf, e.window, t, n, e.pending), (e.pending += n);
}
function et(e, t, n, r) {
    var i = 2 * t,
        o = 2 * n;
    return e[i] < e[o] || (e[i] === e[o] && r[t] <= r[n]);
}
function en(e, t, n) {
    for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && et(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !et(t, r, e.heap[i], e.depth)); ) (e.heap[n] = e.heap[i]), (n = i), (i <<= 1);
    e.heap[n] = r;
}
function er(e, t, n) {
    var r,
        i,
        o,
        a,
        s = 0;
    if (0 !== e.last_lit)
        do (r = (e.pending_buf[e.d_buf + 2 * s] << 8) | e.pending_buf[e.d_buf + 2 * s + 1]), (i = e.pending_buf[e.l_buf + s]), s++, 0 === r ? Y(e, i, t) : (Y(e, (o = U[i]) + E + 1, t), 0 !== (a = P[o]) && W(e, (i -= G[o]), a), Y(e, (o = Z(--r)), n), 0 !== (a = w[o]) && W(e, (r -= B[o]), a));
        while (s < e.last_lit);
    Y(e, N, t);
}
function ei(e, t) {
    var n,
        r,
        i,
        o = t.dyn_tree,
        a = t.stat_desc.static_tree,
        s = t.stat_desc.has_stree,
        l = t.stat_desc.elems,
        c = -1;
    for (n = 0, e.heap_len = 0, e.heap_max = O; n < l; n++) 0 !== o[2 * n] ? ((e.heap[++e.heap_len] = c = n), (e.depth[n] = 0)) : (o[2 * n + 1] = 0);
    for (; e.heap_len < 2; ) (o[2 * (i = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1), (e.depth[i] = 0), e.opt_len--, s && (e.static_len -= a[2 * i + 1]);
    for (t.max_code = c, n = e.heap_len >> 1; n >= 1; n--) en(e, o, n);
    i = l;
    do (n = e.heap[1]), (e.heap[1] = e.heap[e.heap_len--]), en(e, o, 1), (r = e.heap[1]), (e.heap[--e.heap_max] = n), (e.heap[--e.heap_max] = r), (o[2 * i] = o[2 * n] + o[2 * r]), (e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1), (o[2 * n + 1] = o[2 * r + 1] = i), (e.heap[1] = i++), en(e, o, 1);
    while (e.heap_len >= 2);
    (e.heap[--e.heap_max] = e.heap[1]), q(e, t), Q(o, c, e.bl_count);
}
function eo(e, t, n) {
    var r,
        i,
        o = -1,
        a = t[1],
        s = 0,
        l = 7,
        c = 4;
    for (0 === a && ((l = 138), (c = 3)), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++) (i = a), (a = t[(r + 1) * 2 + 1]), (++s < l && i === a) || (s < c ? (e.bl_tree[2 * i] += s) : 0 !== i ? (i !== o && e.bl_tree[2 * i]++, e.bl_tree[2 * A]++) : s <= 10 ? e.bl_tree[2 * C]++ : e.bl_tree[2 * R]++, (s = 0), (o = i), 0 === a ? ((l = 138), (c = 3)) : i === a ? ((l = 6), (c = 3)) : ((l = 7), (c = 4)));
}
function ea(e, t, n) {
    var r,
        i,
        o = -1,
        a = t[1],
        s = 0,
        l = 7,
        c = 4;
    for (0 === a && ((l = 138), (c = 3)), r = 0; r <= n; r++)
        if (((i = a), (a = t[(r + 1) * 2 + 1]), !(++s < l) || i !== a)) {
            if (s < c)
                do Y(e, i, e.bl_tree);
                while (0 != --s);
            else 0 !== i ? (i !== o && (Y(e, i, e.bl_tree), s--), Y(e, A, e.bl_tree), W(e, s - 3, 2)) : s <= 10 ? (Y(e, C, e.bl_tree), W(e, s - 3, 3)) : (Y(e, R, e.bl_tree), W(e, s - 11, 7));
            (s = 0), (o = i), 0 === a ? ((l = 138), (c = 3)) : i === a ? ((l = 6), (c = 3)) : ((l = 7), (c = 4));
        }
}
function es(e) {
    var t;
    for (eo(e, e.dyn_ltree, e.l_desc.max_code), eo(e, e.dyn_dtree, e.d_desc.max_code), ei(e, e.bl_desc), t = v - 1; t >= 3 && 0 === e.bl_tree[2 * L[t] + 1]; t--);
    return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
}
function el(e, t, n, r) {
    var i;
    for (W(e, t - 257, 5), W(e, n - 1, 5), W(e, r - 4, 4), i = 0; i < r; i++) W(e, e.bl_tree[2 * L[i] + 1], 3);
    ea(e, e.dyn_ltree, t - 1), ea(e, e.dyn_dtree, n - 1);
}
function ec(e) {
    var t,
        n = 4093624447;
    for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return l;
    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return c;
    for (t = 32; t < E; t++) if (0 !== e.dyn_ltree[2 * t]) return c;
    return l;
}
d(B);
var eu = !1;
function ed(e, t, n, r) {
    W(e, (f << 1) + +!!r, 3), ee(e, t, n, !0);
}
function ef(e) {
    W(e, _ << 1, 3), Y(e, N, M), z(e);
}
function e_(e, t, n, r) {
    var i,
        o,
        a = 0;
    e.level > 0 ? (e.strm.data_type === u && (e.strm.data_type = ec(e)), ei(e, e.l_desc), ei(e, e.d_desc), (a = es(e)), (i = (e.opt_len + 3 + 7) >>> 3), (o = (e.static_len + 3 + 7) >>> 3) <= i && (i = o)) : (i = o = n + 5), n + 4 <= i && -1 !== t ? ed(e, t, n, r) : e.strategy === s || o === i ? (W(e, (_ << 1) + +!!r, 3), er(e, M, k)) : (W(e, (p << 1) + +!!r, 3), el(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), er(e, e.dyn_ltree, e.dyn_dtree)), J(e), r && $(e);
}
function ep(e, t, n) {
    return (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255), (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t), (e.pending_buf[e.l_buf + e.last_lit] = 255 & n), e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[(U[n] + E + 1) * 2]++, e.dyn_dtree[2 * Z(t)]++), e.last_lit === e.lit_bufsize - 1;
}
(t._tr_init = function (e) {
    eu || (X(), (eu = !0)), (e.l_desc = new V(e.dyn_ltree, r)), (e.d_desc = new V(e.dyn_dtree, i)), (e.bl_desc = new V(e.bl_tree, o)), (e.bi_buf = 0), (e.bi_valid = 0), J(e);
}),
    (t._tr_stored_block = ed),
    (t._tr_flush_block = e_),
    (t._tr_tally = ep),
    (t._tr_align = ef);
