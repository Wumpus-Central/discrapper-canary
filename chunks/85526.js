e.iI = function (t) {
    for (var e, s = t.length, i = s % 3, n = [], o = 0, h = s - i; o < h; o += 16383)
        n.push(
            (function (t, e, s) {
                for (var i, n = [], o = e; o < s; o += 3)
                    ((i = ((t[o] << 16) & 0xff0000) + ((t[o + 1] << 8) & 65280) + (255 & t[o + 2])),
                        n.push(r[(i >> 18) & 63] + r[(i >> 12) & 63] + r[(i >> 6) & 63] + r[63 & i]));
                return n.join("");
            })(t, o, o + 16383 > h ? h : o + 16383),
        );
    return (
        1 === i
            ? n.push(r[(e = t[s - 1]) >> 2] + r[(e << 4) & 63] + "==")
            : 2 === i && n.push(r[(e = (t[s - 2] << 8) + t[s - 1]) >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="),
        n.join("")
    );
};
for (
    var r = [],
        s = [],
        i = ("u" > typeof Uint8Array && Uint8Array, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
        n = 0,
        o = i.length;
    n < o;
    ++n
)
    ((r[n] = i[n]), (s[i.charCodeAt(n)] = n));
((s[45] = 62), (s[95] = 63));
