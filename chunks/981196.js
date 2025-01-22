r.d(n, {
    N: function () {
        return u;
    }
});
var i = r(812975),
    a = r(686942),
    o = r(713267),
    s = r(695170),
    l = r(829105);
function u(e) {
    for (var n = [], r = '', l = Object.keys(e), u = Object.keys(i.WN), d = 0; d < l.length; d++) {
        if ('tzid' !== l[d] && !!(0, a.q9)(u, l[d])) {
            var f = l[d].toUpperCase(),
                p = e[l[d]],
                h = '';
            if (!(!(0, a.EN)(p) || ((0, a.kJ)(p) && !p.length))) {
                switch (f) {
                    case 'FREQ':
                        h = i.Ci.FREQUENCIES[e.freq];
                        break;
                    case 'WKST':
                        h = (0, a.hj)(p) ? new o.O(p).toString() : p.toString();
                        break;
                    case 'BYWEEKDAY':
                        (f = 'BYDAY'),
                            (h = (0, a.qo)(p)
                                .map(function (e) {
                                    return e instanceof o.O ? e : (0, a.kJ)(e) ? new o.O(e[0], e[1]) : new o.O(e);
                                })
                                .toString());
                        break;
                    case 'DTSTART':
                        r = c(p, e.tzid);
                        break;
                    case 'UNTIL':
                        h = (0, s.Od)(p, !e.tzid);
                        break;
                    default:
                        if ((0, a.kJ)(p)) {
                            for (var _ = [], m = 0; m < p.length; m++) _[m] = String(p[m]);
                            h = _.toString();
                        } else h = String(p);
                }
                h && n.push([f, h]);
            }
        }
    }
    var g = n
            .map(function (e) {
                var n = e[0],
                    r = e[1];
                return ''.concat(n, '=').concat(r.toString());
            })
            .join(';'),
        E = '';
    return (
        '' !== g && (E = 'RRULE:'.concat(g)),
        [r, E]
            .filter(function (e) {
                return !!e;
            })
            .join('\n')
    );
}
function c(e, n) {
    return e ? 'DTSTART' + new l.M(new Date(e), n).toString() : '';
}
