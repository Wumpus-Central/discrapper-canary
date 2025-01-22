function n(e, n, r, i) {
    for (var a = e.length, o = r + (i ? 1 : -1); i ? o-- : ++o < a; ) if (n(e[o], o, e)) return o;
    return -1;
}
e.exports = n;
