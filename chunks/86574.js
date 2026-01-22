n.d(t, { A: () => d });
var r = n(355418),
    i = n(658809),
    a = n(620695),
    s = n(996483),
    o = n(632434);
let l = RegExp(
        "(jetzt|heute|morgen|übermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)",
        "i",
    ),
    c = 1,
    u = 2;
class d extends r.c {
    innerPattern(e) {
        return l;
    }
    innerExtract(e, t) {
        let n = e.reference.getDateWithAdjustedTimezone(),
            r = (t[c] || "").toLowerCase(),
            l = (t[u] || "").toLowerCase(),
            d = e.createParsingComponents();
        switch (r) {
            case "jetzt":
                d = s.tB(e.reference);
                break;
            case "heute":
                d = s.Ec(e.reference);
                break;
            case "morgen":
                (n = (0, o.Gw)(n, { day: 1 })), (0, i.Pl)(d, n), (0, i.A4)(d, n);
                break;
            case "übermorgen":
            case "uebermorgen":
                (n = (0, o.Gw)(n, { day: 2 })), (0, i.Pl)(d, n), (0, i.A4)(d, n);
                break;
            case "gestern":
                (n = (0, o.Gw)(n, { day: -1 })), (0, i.Pl)(d, n), (0, i.A4)(d, n);
                break;
            case "vorgestern":
                (n = (0, o.Gw)(n, { day: -2 })), (0, i.Pl)(d, n), (0, i.A4)(d, n);
                break;
            default:
                r.match(/letzte\s*nacht/) &&
                    (n.getHours() > 6 && (n = (0, o.Gw)(n, { day: -1 })), (0, i.Pl)(d, n), d.imply("hour", 0));
        }
        return l && (d = a.A.extractTimeComponents(d, l)), d;
    }
}
