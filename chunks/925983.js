var i = n(767172),
    r = /%[sdv%]/g,
    a = function (e) {
        var t = 1,
            n = arguments,
            i = n.length;
        return e.replace(r, function (e) {
            if (t >= i) return e;
            var r = n[t];
            switch (((t += 1), e)) {
                case '%%':
                    return '%';
                case '%s':
                    return String(r);
                case '%d':
                    return Number(r);
                case '%v':
                    return '';
            }
        });
    },
    s = function (e, t, n) {
        var i = [e + '=' + (t.format instanceof Function ? t.format(t.push ? n : n[t.name]) : t.format)];
        if (t.names)
            for (var r = 0; r < t.names.length; r += 1) {
                var s = t.names[r];
                t.name ? i.push(n[t.name][s]) : i.push(n[t.names[r]]);
            }
        else i.push(n[t.name]);
        return a.apply(null, i);
    },
    o = ['v', 'o', 's', 'i', 'u', 'e', 'p', 'c', 'b', 't', 'r', 'z', 'a'],
    l = ['i', 'c', 'b', 'a'];
e.exports = function (e, t) {
    (t = t || {}),
        null == e.version && (e.version = 0),
        null == e.name && (e.name = ' '),
        e.media.forEach(function (e) {
            null == e.payloads && (e.payloads = '');
        });
    var n = t.outerOrder || o,
        r = t.innerOrder || l,
        a = [];
    return (
        n.forEach(function (t) {
            i[t].forEach(function (n) {
                n.name in e && null != e[n.name]
                    ? a.push(s(t, n, e))
                    : n.push in e &&
                      null != e[n.push] &&
                      e[n.push].forEach(function (e) {
                          a.push(s(t, n, e));
                      });
            });
        }),
        e.media.forEach(function (e) {
            a.push(s('m', i.m[0], e)),
                r.forEach(function (t) {
                    i[t].forEach(function (n) {
                        n.name in e && null != e[n.name]
                            ? a.push(s(t, n, e))
                            : n.push in e &&
                              null != e[n.push] &&
                              e[n.push].forEach(function (e) {
                                  a.push(s(t, n, e));
                              });
                    });
                });
        }),
        a.join('\r\n') + '\r\n'
    );
};
