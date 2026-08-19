var n = r(150594),
    o = /%[sdv%]/g,
    i = function (e) {
        var t = 1,
            r = arguments,
            n = r.length;
        return e.replace(o, function (e) {
            if (t >= n) return e;
            var o = r[t];
            switch (((t += 1), e)) {
                case "%%":
                    return "%";
                case "%s":
                    return String(o);
                case "%d":
                    return Number(o);
                case "%v":
                    return "";
            }
        });
    },
    a = function (e, t, r) {
        var n = [e + "=" + (t.format instanceof Function ? t.format(t.push ? r : r[t.name]) : t.format)];
        if (t.names)
            for (var o = 0; o < t.names.length; o += 1) {
                var a = t.names[o];
                t.name ? n.push(r[t.name][a]) : n.push(r[t.names[o]]);
            }
        else n.push(r[t.name]);
        return i.apply(null, n);
    },
    s = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
    l = ["i", "c", "b", "a"];
e.exports = function (e, t) {
    (t = t || {}),
        null == e.version && (e.version = 0),
        null == e.name && (e.name = " "),
        e.media.forEach(function (e) {
            null == e.payloads && (e.payloads = "");
        });
    var r = t.outerOrder || s,
        o = t.innerOrder || l,
        i = [];
    return (
        r.forEach(function (t) {
            n[t].forEach(function (r) {
                r.name in e && null != e[r.name]
                    ? i.push(a(t, r, e))
                    : r.push in e &&
                      null != e[r.push] &&
                      e[r.push].forEach(function (e) {
                          i.push(a(t, r, e));
                      });
            });
        }),
        e.media.forEach(function (e) {
            i.push(a("m", n.m[0], e)),
                o.forEach(function (t) {
                    n[t].forEach(function (r) {
                        r.name in e && null != e[r.name]
                            ? i.push(a(t, r, e))
                            : r.push in e &&
                              null != e[r.push] &&
                              e[r.push].forEach(function (e) {
                                  i.push(a(t, r, e));
                              });
                    });
                });
        }),
        i.join("\r\n") + "\r\n"
    );
};
