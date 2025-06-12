n.d(t, { N: () => l });
var r = n(812975),
    i = n(686942),
    a = n(713267),
    o = n(695170),
    s = n(829105);
function l(e) {
    for (var t = [], n = '', s = Object.keys(e), l = Object.keys(r.WN), u = 0; u < s.length; u++)
        if ('tzid' !== s[u] && (0, i.q9)(l, s[u])) {
            var d = s[u].toUpperCase(),
                _ = e[s[u]],
                f = '';
            if (!(!(0, i.EN)(_) || ((0, i.kJ)(_) && !_.length))) {
                switch (d) {
                    case 'FREQ':
                        f = r.Ci.FREQUENCIES[e.freq];
                        break;
                    case 'WKST':
                        f = (0, i.hj)(_) ? new a.O(_).toString() : _.toString();
                        break;
                    case 'BYWEEKDAY':
                        (d = 'BYDAY'),
                            (f = (0, i.qo)(_)
                                .map(function (e) {
                                    return e instanceof a.O ? e : (0, i.kJ)(e) ? new a.O(e[0], e[1]) : new a.O(e);
                                })
                                .toString());
                        break;
                    case 'DTSTART':
                        n = c(_, e.tzid);
                        break;
                    case 'UNTIL':
                        f = (0, o.Od)(_, !e.tzid);
                        break;
                    default:
                        if ((0, i.kJ)(_)) {
                            for (var p = [], h = 0; h < _.length; h++) p[h] = String(_[h]);
                            f = p.toString();
                        } else f = String(_);
                }
                f && t.push([d, f]);
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
