r.d(t, { A: () => o });
var n = r(355418),
    s = r(658809),
    a = r(996483);
let i = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class o extends n.c {
    innerPattern(e) {
        return i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            i = e.createParsingComponents();
        switch (n) {
            case "now":
                i = a.tB(e.reference);
                break;
            case "today":
                i = a.Ec(e.reference);
                break;
            case "yesterday":
                i = a.jI(e.reference);
                break;
            case "tomorrow":
            case "tmr":
            case "tmrw":
                i = a.uf(e.reference);
                break;
            case "tonight":
                i = a.A_(e.reference);
                break;
            case "overmorrow":
                i = a.AV(e.reference, 2);
                break;
            default:
                if (n.match(/last\s*night/)) {
                    if (r.getHours() > 6) {
                        let e = new Date(r.getTime());
                        e.setDate(e.getDate() - 1), (r = e);
                    }
                    (0, s.Pl)(i, r), i.imply("hour", 0);
                }
        }
        return i.addTag("parser/ENCasualDateParser"), i;
    }
}
