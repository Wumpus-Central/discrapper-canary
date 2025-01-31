n.d(t, { N: () => l });
var i = n(812975),
    r = n(686942),
    a = n(713267),
    s = n(695170),
    o = n(829105);
function l(e) {
    for (var t = [], n = '', o = Object.keys(e), l = Object.keys(i.WN), c = 0; c < o.length; c++)
        if ('tzid' !== o[c] && (0, r.q9)(l, o[c])) {
            var d = o[c].toUpperCase(),
                f = e[o[c]],
                _ = '';
            if (!(!(0, r.EN)(f) || ((0, r.kJ)(f) && !f.length))) {
                switch (d) {
                    case 'FREQ':
                        _ = i.Ci.FREQUENCIES[e.freq];
                        break;
                    case 'WKST':
                        _ = (0, r.hj)(f) ? new a.O(f).toString() : f.toString();
                        break;
                    case 'BYWEEKDAY':
                        (d = 'BYDAY'),
                            (_ = (0, r.qo)(f)
                                .map(function (e) {
                                    return e instanceof a.O ? e : (0, r.kJ)(e) ? new a.O(e[0], e[1]) : new a.O(e);
                                })
                                .toString());
                        break;
                    case 'DTSTART':
                        n = u(f, e.tzid);
                        break;
                    case 'UNTIL':
                        _ = (0, s.Od)(f, !e.tzid);
                        break;
                    default:
                        if ((0, r.kJ)(f)) {
                            for (var p = [], h = 0; h < f.length; h++) p[h] = String(f[h]);
                            _ = p.toString();
                        } else _ = String(f);
                }
                _ && t.push([d, _]);
            }
        }
    var m = t
            .map(function (e) {
                var t = e[0],
                    n = e[1];
                return ''.concat(t, '=').concat(n.toString());
            })
            .join(';'),
        g = '';
    return (
        '' !== m && (g = 'RRULE:'.concat(m)),
        [n, g]
            .filter(function (e) {
                return !!e;
            })
            .join('\n')
    );
}
function u(e, t) {
    return e ? 'DTSTART' + new o.M(new Date(e), t).toString() : '';
}
