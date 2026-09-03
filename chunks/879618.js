var n = r(147205),
    i = "u" < typeof globalThis ? r.g : globalThis;
e.exports = function () {
    for (var e = [], t = 0; t < n.length; t++) "function" == typeof i[n[t]] && (e[e.length] = n[t]);
    return e;
};
