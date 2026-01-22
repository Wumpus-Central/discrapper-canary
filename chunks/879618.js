var r = n(147205),
    i = "u" < typeof globalThis ? n.g : globalThis;
e.exports = function () {
    for (var e = [], t = 0; t < r.length; t++) "function" == typeof i[r[t]] && (e[e.length] = r[t]);
    return e;
};
