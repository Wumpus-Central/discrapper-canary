r.d(t, { A: () => u });
var n = r(355418),
    s = r(658809),
    a = r(620695),
    i = r(996483),
    o = r(632434);
let l = RegExp(
    "(jetzt|heute|morgen|\xfcbermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)",
    "i",
);
class u extends n.c {
    innerPattern(e) {
        return l;
    }
    innerExtract(e, t) {
        let r = e.reference.getDateWithAdjustedTimezone(),
            n = (t[1] || "").toLowerCase(),
            l = (t[2] || "").toLowerCase(),
            u = e.createParsingComponents();
        switch (n) {
            case "jetzt":
                u = i.tB(e.reference);
                break;
            case "heute":
                u = i.Ec(e.reference);
                break;
            case "morgen":
                (r = (0, o.Gw)(r, { day: 1 })), (0, s.Pl)(u, r), (0, s.A4)(u, r);
                break;
            case "\xfcbermorgen":
            case "uebermorgen":
                (r = (0, o.Gw)(r, { day: 2 })), (0, s.Pl)(u, r), (0, s.A4)(u, r);
                break;
            case "gestern":
                (r = (0, o.Gw)(r, { day: -1 })), (0, s.Pl)(u, r), (0, s.A4)(u, r);
                break;
            case "vorgestern":
                (r = (0, o.Gw)(r, { day: -2 })), (0, s.Pl)(u, r), (0, s.A4)(u, r);
                break;
            default:
                n.match(/letzte\s*nacht/) &&
                    (r.getHours() > 6 && (r = (0, o.Gw)(r, { day: -1 })), (0, s.Pl)(u, r), u.imply("hour", 0));
        }
        return l && (u = a.A.extractTimeComponents(u, l)), u;
    }
}
