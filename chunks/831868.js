var i,
    r,
    a,
    s = n(754793),
    o = 4,
    l = 0,
    u = 1,
    c = 2;
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
    v = 286,
    y = 30,
    I = 19,
    T = 573,
    b = 15,
    S = 16,
    A = 7,
    N = 256,
    C = 16,
    R = 17,
    O = 18,
    D = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    x = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    L = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    P = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    w = 512,
    M = Array(576);
d(M);
var k = Array(2 * y);
d(k);
var U = Array(w);
d(U);
var G = Array(m - h + 1);
d(G);
var B = Array(g);
d(B);
var Z = Array(y);
function F(e, t, n, i, r) {
    (this.static_tree = e), (this.extra_bits = t), (this.extra_base = n), (this.elems = i), (this.max_length = r), (this.has_stree = e && e.length);
}
function V(e, t) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
}
function j(e) {
    return e < 256 ? U[e] : U[256 + (e >>> 7)];
}
function H(e, t) {
    (e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255);
}
function Y(e, t, n) {
    e.bi_valid > S - n ? ((e.bi_buf |= (t << e.bi_valid) & 65535), H(e, e.bi_buf), (e.bi_buf = t >> (S - e.bi_valid)), (e.bi_valid += n - S)) : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
}
function W(e, t, n) {
    Y(e, n[2 * t], n[2 * t + 1]);
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
        i,
        r,
        a,
        s,
        o,
        l = t.dyn_tree,
        u = t.max_code,
        c = t.stat_desc.static_tree,
        d = t.stat_desc.has_stree,
        f = t.stat_desc.extra_bits,
        _ = t.stat_desc.extra_base,
        p = t.stat_desc.max_length,
        h = 0;
    for (a = 0; a <= b; a++) e.bl_count[a] = 0;
    for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < T; n++) (a = l[2 * l[2 * (i = e.heap[n]) + 1] + 1] + 1) > p && ((a = p), h++), (l[2 * i + 1] = a), !(i > u) && (e.bl_count[a]++, (s = 0), i >= _ && (s = f[i - _]), (o = l[2 * i]), (e.opt_len += o * (a + s)), d && (e.static_len += o * (c[2 * i + 1] + s)));
    if (0 !== h) {
        do {
            for (a = p - 1; 0 === e.bl_count[a]; ) a--;
            e.bl_count[a]--, (e.bl_count[a + 1] += 2), e.bl_count[p]--, (h -= 2);
        } while (h > 0);
        for (a = p; 0 !== a; a--) for (i = e.bl_count[a]; 0 !== i; ) !((r = e.heap[--n]) > u) && (l[2 * r + 1] !== a && ((e.opt_len += (a - l[2 * r + 1]) * l[2 * r]), (l[2 * r + 1] = a)), i--);
    }
}
function Q(e, t, n) {
    var i,
        r,
        a = Array(b + 1),
        s = 0;
    for (i = 1; i <= b; i++) a[i] = s = (s + n[i - 1]) << 1;
    for (r = 0; r <= t; r++) {
        var o = e[2 * r + 1];
        0 !== o && (e[2 * r] = K(a[o]++, o));
    }
}
function X() {
    var e,
        t,
        n,
        s,
        o,
        l = Array(b + 1);
    for (s = 0, n = 0; s < g - 1; s++) for (e = 0, B[s] = n; e < 1 << D[s]; e++) G[n++] = s;
    for (G[n - 1] = s, o = 0, s = 0; s < 16; s++) for (e = 0, Z[s] = o; e < 1 << x[s]; e++) U[o++] = s;
    for (o >>= 7; s < y; s++) for (e = 0, Z[s] = o << 7; e < 1 << (x[s] - 7); e++) U[256 + o++] = s;
    for (t = 0; t <= b; t++) l[t] = 0;
    for (e = 0; e <= 143; ) (M[2 * e + 1] = 8), e++, l[8]++;
    for (; e <= 255; ) (M[2 * e + 1] = 9), e++, l[9]++;
    for (; e <= 279; ) (M[2 * e + 1] = 7), e++, l[7]++;
    for (; e <= 287; ) (M[2 * e + 1] = 8), e++, l[8]++;
    for (Q(M, v + 1, l), e = 0; e < y; e++) (k[2 * e + 1] = 5), (k[2 * e] = K(e, 5));
    (i = new F(M, D, E + 1, v, b)), (r = new F(k, x, 0, y, b)), (a = new F([], L, 0, I, A));
}
function J(e) {
    var t;
    for (t = 0; t < v; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < y; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < I; t++) e.bl_tree[2 * t] = 0;
    (e.dyn_ltree[2 * N] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0);
}
function $(e) {
    e.bi_valid > 8 ? H(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0);
}
function ee(e, t, n, i) {
    $(e), i && (H(e, n), H(e, ~n)), s.arraySet(e.pending_buf, e.window, t, n, e.pending), (e.pending += n);
}
function et(e, t, n, i) {
    var r = 2 * t,
        a = 2 * n;
    return e[r] < e[a] || (e[r] === e[a] && i[t] <= i[n]);
}
function en(e, t, n) {
    for (var i = e.heap[n], r = n << 1; r <= e.heap_len && (r < e.heap_len && et(t, e.heap[r + 1], e.heap[r], e.depth) && r++, !et(t, i, e.heap[r], e.depth)); ) (e.heap[n] = e.heap[r]), (n = r), (r <<= 1);
    e.heap[n] = i;
}
function ei(e, t, n) {
    var i,
        r,
        a,
        s,
        o = 0;
    if (0 !== e.last_lit)
        do (i = (e.pending_buf[e.d_buf + 2 * o] << 8) | e.pending_buf[e.d_buf + 2 * o + 1]), (r = e.pending_buf[e.l_buf + o]), o++, 0 === i ? W(e, r, t) : (W(e, (a = G[r]) + E + 1, t), 0 !== (s = D[a]) && Y(e, (r -= B[a]), s), W(e, (a = j(--i)), n), 0 !== (s = x[a]) && Y(e, (i -= Z[a]), s));
        while (o < e.last_lit);
    W(e, N, t);
}
function er(e, t) {
    var n,
        i,
        r,
        a = t.dyn_tree,
        s = t.stat_desc.static_tree,
        o = t.stat_desc.has_stree,
        l = t.stat_desc.elems,
        u = -1;
    for (n = 0, e.heap_len = 0, e.heap_max = T; n < l; n++) 0 !== a[2 * n] ? ((e.heap[++e.heap_len] = u = n), (e.depth[n] = 0)) : (a[2 * n + 1] = 0);
    for (; e.heap_len < 2; ) (a[2 * (r = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1), (e.depth[r] = 0), e.opt_len--, o && (e.static_len -= s[2 * r + 1]);
    for (t.max_code = u, n = e.heap_len >> 1; n >= 1; n--) en(e, a, n);
    r = l;
    do (n = e.heap[1]), (e.heap[1] = e.heap[e.heap_len--]), en(e, a, 1), (i = e.heap[1]), (e.heap[--e.heap_max] = n), (e.heap[--e.heap_max] = i), (a[2 * r] = a[2 * n] + a[2 * i]), (e.depth[r] = (e.depth[n] >= e.depth[i] ? e.depth[n] : e.depth[i]) + 1), (a[2 * n + 1] = a[2 * i + 1] = r), (e.heap[1] = r++), en(e, a, 1);
    while (e.heap_len >= 2);
    (e.heap[--e.heap_max] = e.heap[1]), q(e, t), Q(a, u, e.bl_count);
}
function ea(e, t, n) {
    var i,
        r,
        a = -1,
        s = t[1],
        o = 0,
        l = 7,
        u = 4;
    for (0 === s && ((l = 138), (u = 3)), t[(n + 1) * 2 + 1] = 65535, i = 0; i <= n; i++) (r = s), (s = t[(i + 1) * 2 + 1]), (!(++o < l) || r !== s) && (o < u ? (e.bl_tree[2 * r] += o) : 0 !== r ? (r !== a && e.bl_tree[2 * r]++, e.bl_tree[2 * C]++) : o <= 10 ? e.bl_tree[2 * R]++ : e.bl_tree[2 * O]++, (o = 0), (a = r), 0 === s ? ((l = 138), (u = 3)) : r === s ? ((l = 6), (u = 3)) : ((l = 7), (u = 4)));
}
function es(e, t, n) {
    var i,
        r,
        a = -1,
        s = t[1],
        o = 0,
        l = 7,
        u = 4;
    for (0 === s && ((l = 138), (u = 3)), i = 0; i <= n; i++)
        if (((r = s), (s = t[(i + 1) * 2 + 1]), !(++o < l) || r !== s)) {
            if (o < u)
                do W(e, r, e.bl_tree);
                while (0 != --o);
            else 0 !== r ? (r !== a && (W(e, r, e.bl_tree), o--), W(e, C, e.bl_tree), Y(e, o - 3, 2)) : o <= 10 ? (W(e, R, e.bl_tree), Y(e, o - 3, 3)) : (W(e, O, e.bl_tree), Y(e, o - 11, 7));
            (o = 0), (a = r), 0 === s ? ((l = 138), (u = 3)) : r === s ? ((l = 6), (u = 3)) : ((l = 7), (u = 4));
        }
}
function eo(e) {
    var t;
    for (ea(e, e.dyn_ltree, e.l_desc.max_code), ea(e, e.dyn_dtree, e.d_desc.max_code), er(e, e.bl_desc), t = I - 1; t >= 3 && 0 === e.bl_tree[2 * P[t] + 1]; t--);
    return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
}
function el(e, t, n, i) {
    var r;
    for (Y(e, t - 257, 5), Y(e, n - 1, 5), Y(e, i - 4, 4), r = 0; r < i; r++) Y(e, e.bl_tree[2 * P[r] + 1], 3);
    es(e, e.dyn_ltree, t - 1), es(e, e.dyn_dtree, n - 1);
}
function eu(e) {
    var t,
        n = 4093624447;
    for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return l;
    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return u;
    for (t = 32; t < E; t++) if (0 !== e.dyn_ltree[2 * t]) return u;
    return l;
}
d(Z);
var ec = !1;
function ed(e) {
    ec || (X(), (ec = !0)), (e.l_desc = new V(e.dyn_ltree, i)), (e.d_desc = new V(e.dyn_dtree, r)), (e.bl_desc = new V(e.bl_tree, a)), (e.bi_buf = 0), (e.bi_valid = 0), J(e);
}
function ef(e, t, n, i) {
    Y(e, (f << 1) + (i ? 1 : 0), 3), ee(e, t, n, !0);
}
function e_(e) {
    Y(e, _ << 1, 3), W(e, N, M), z(e);
}
function ep(e, t, n, i) {
    var r,
        a,
        s = 0;
    e.level > 0 ? (e.strm.data_type === c && (e.strm.data_type = eu(e)), er(e, e.l_desc), er(e, e.d_desc), (s = eo(e)), (r = (e.opt_len + 3 + 7) >>> 3), (a = (e.static_len + 3 + 7) >>> 3) <= r && (r = a)) : (r = a = n + 5), n + 4 <= r && -1 !== t ? ef(e, t, n, i) : e.strategy === o || a === r ? (Y(e, (_ << 1) + (i ? 1 : 0), 3), ei(e, M, k)) : (Y(e, (p << 1) + (i ? 1 : 0), 3), el(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), ei(e, e.dyn_ltree, e.dyn_dtree)), J(e), i && $(e);
}
function eh(e, t, n) {
    return (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255), (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t), (e.pending_buf[e.l_buf + e.last_lit] = 255 & n), e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[(G[n] + E + 1) * 2]++, e.dyn_dtree[2 * j(t)]++), e.last_lit === e.lit_bufsize - 1;
}
(t._tr_init = ed), (t._tr_stored_block = ef), (t._tr_flush_block = ep), (t._tr_tally = eh), (t._tr_align = e_);
