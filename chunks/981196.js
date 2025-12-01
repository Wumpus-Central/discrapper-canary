n.d(t, { N: () => l });
var r = n(812975),
    i = n(686942),
    a = n(713267),
    o = n(695170),
    s = n(829105);
function l(e) {
    for (var t = [], n = "", s = Object.keys(e), l = Object.keys(r.WN), u = 0; u < s.length; u++)
        if ("tzid" !== s[u] && (0, i.q9)(l, s[u])) {
            var d = s[u].toUpperCase(),
                f = e[s[u]],
                p = "";
            if (!(!(0, i.EN)(f) || ((0, i.kJ)(f) && !f.length))) {
                switch (d) {
                    case "FREQ":
                        p = r.Ci.FREQUENCIES[e.freq];
                        break;
                    case "WKST":
                        p = (0, i.hj)(f) ? new a.O(f).toString() : f.toString();
                        break;
                    case "BYWEEKDAY":
                        (d = "BYDAY"),
                            (p = (0, i.qo)(f)
                                .map(function (e) {
                                    return e instanceof a.O ? e : (0, i.kJ)(e) ? new a.O(e[0], e[1]) : new a.O(e);
                                })
                                .toString());
                        break;
                    case "DTSTART":
                        n = c(f, e.tzid);
                        break;
                    case "UNTIL":
                        p = (0, o.Od)(f, !e.tzid);
                        break;
                    default:
                        if ((0, i.kJ)(f)) {
                            for (var _ = [], m = 0; m < f.length; m++) _[m] = String(f[m]);
                            p = _.toString();
                        } else p = String(f);
                }
                p && t.push([d, p]);
            }
        }
    var h = t
            .map(function (e) {
                var t = e[0],
                    n = e[1];
                return "".concat(t, "=").concat(n.toString());
            })
            .join(";"),
        g = "";
    return (
        "" !== h && (g = "RRULE:".concat(h)),
        [n, g]
            .filter(function (e) {
                return !!e;
            })
            .join("\n")
    );
}
function c(e, t) {
    return e ? "DTSTART" + new s.M(new Date(e), t).toString() : "";
}
