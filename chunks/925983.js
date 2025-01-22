var i = r(767172),
    a = /%[sdv%]/g,
    o = function (e) {
        var n = 1,
            r = arguments,
            i = r.length;
        return e.replace(a, function (e) {
            if (n >= i) return e;
            var a = r[n];
            switch (((n += 1), e)) {
                case '%%':
                    return '%';
                case '%s':
                    return String(a);
                case '%d':
                    return Number(a);
                case '%v':
                    return '';
            }
        });
    },
    s = function (e, n, r) {
        var i = [e + '=' + (n.format instanceof Function ? n.format(n.push ? r : r[n.name]) : n.format)];
        if (n.names)
            for (var a = 0; a < n.names.length; a += 1) {
                var s = n.names[a];
                n.name ? i.push(r[n.name][s]) : i.push(r[n.names[a]]);
            }
        else i.push(r[n.name]);
        return o.apply(null, i);
    },
    l = ['v', 'o', 's', 'i', 'u', 'e', 'p', 'c', 'b', 't', 'r', 'z', 'a'],
    u = ['i', 'c', 'b', 'a'];
e.exports = function (e, n) {
    (n = n || {}),
        null == e.version && (e.version = 0),
        null == e.name && (e.name = ' '),
        e.media.forEach(function (e) {
            null == e.payloads && (e.payloads = '');
        });
    var r = n.outerOrder || l,
        a = n.innerOrder || u,
        o = [];
    return (
        r.forEach(function (n) {
            i[n].forEach(function (r) {
                r.name in e && null != e[r.name]
                    ? o.push(s(n, r, e))
                    : r.push in e &&
                      null != e[r.push] &&
                      e[r.push].forEach(function (e) {
                          o.push(s(n, r, e));
                      });
            });
        }),
        e.media.forEach(function (e) {
            o.push(s('m', i.m[0], e)),
                a.forEach(function (n) {
                    i[n].forEach(function (r) {
                        r.name in e && null != e[r.name]
                            ? o.push(s(n, r, e))
                            : r.push in e &&
                              null != e[r.push] &&
                              e[r.push].forEach(function (e) {
                                  o.push(s(n, r, e));
                              });
                    });
                });
        }),
        o.join('\r\n') + '\r\n'
    );
};
