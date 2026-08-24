var n = r(150594),
    i = /%[sdv%]/g,
    o = function (e) {
        var t = 1,
            r = arguments,
            n = r.length;
        return e.replace(i, function (e) {
            if (t >= n) return e;
            var i = r[t];
            switch (((t += 1), e)) {
                case "%%":
                    return "%";
                case "%s":
                    return String(i);
                case "%d":
                    return Number(i);
                case "%v":
                    return "";
            }
        });
    },
    a = function (e, t, r) {
        var n = [e + "=" + (t.format instanceof Function ? t.format(t.push ? r : r[t.name]) : t.format)];
        if (t.names)
            for (var i = 0; i < t.names.length; i += 1) {
                var a = t.names[i];
                t.name ? n.push(r[t.name][a]) : n.push(r[t.names[i]]);
            }
        else n.push(r[t.name]);
        return o.apply(null, n);
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
        i = t.innerOrder || l,
        o = [];
    return (
        r.forEach(function (t) {
            n[t].forEach(function (r) {
                r.name in e && null != e[r.name]
                    ? o.push(a(t, r, e))
                    : r.push in e &&
                      null != e[r.push] &&
                      e[r.push].forEach(function (e) {
                          o.push(a(t, r, e));
                      });
            });
        }),
        e.media.forEach(function (e) {
            o.push(a("m", n.m[0], e)),
                i.forEach(function (t) {
                    n[t].forEach(function (r) {
                        r.name in e && null != e[r.name]
                            ? o.push(a(t, r, e))
                            : r.push in e &&
                              null != e[r.push] &&
                              e[r.push].forEach(function (e) {
                                  o.push(a(t, r, e));
                              });
                    });
                });
        }),
        o.join("\r\n") + "\r\n"
    );
};
