var n = e(735811);
t.exports = function (t, r, e) {
    for (var o in r) e && e.unsafe && t[o] ? (t[o] = r[o]) : n(t, o, r[o], e);
    return t;
};
