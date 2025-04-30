n.d(t, { N: () => l });
var r = n(812975),
    i = n(686942),
    o = n(713267),
    a = n(695170),
    s = n(829105);
function l(e) {
    for (var t = [], n = '', s = Object.keys(e), l = Object.keys(r.WN), u = 0; u < s.length; u++)
        if ('tzid' !== s[u] && (0, i.q9)(l, s[u])) {
            var d = s[u].toUpperCase(),
                f = e[s[u]],
                _ = '';
            if (!(!(0, i.EN)(f) || ((0, i.kJ)(f) && !f.length))) {
                switch (d) {
                    case 'FREQ':
                        _ = r.Ci.FREQUENCIES[e.freq];
                        break;
                    case 'WKST':
                        _ = (0, i.hj)(f) ? new o.O(f).toString() : f.toString();
                        break;
                    case 'BYWEEKDAY':
                        (d = 'BYDAY'),
                            (_ = (0, i.qo)(f)
                                .map(function (e) {
                                    return e instanceof o.O ? e : (0, i.kJ)(e) ? new o.O(e[0], e[1]) : new o.O(e);
                                })
                                .toString());
                        break;
                    case 'DTSTART':
                        n = c(f, e.tzid);
                        break;
                    case 'UNTIL':
                        _ = (0, a.Od)(f, !e.tzid);
                        break;
                    default:
                        if ((0, i.kJ)(f)) {
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
function c(e, t) {
    return e ? 'DTSTART' + new s.M(new Date(e), t).toString() : '';
}
