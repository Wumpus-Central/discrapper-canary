n.d(t, {
    A: () => o,
});
var r = n(355418),
    i = n(658809),
    a = n(996483);
let s = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class o extends r.c {
    innerPattern(e) {
        return s;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            r = t[0].toLowerCase(),
            s = e.createParsingComponents();
        switch (r) {
            case "now":
                s = a.tB(e.reference);
                break;
            case "today":
                s = a.Ec(e.reference);
                break;
            case "yesterday":
                s = a.jI(e.reference);
                break;
            case "tomorrow":
            case "tmr":
            case "tmrw":
                s = a.uf(e.reference);
                break;
            case "tonight":
                s = a.A_(e.reference);
                break;
            case "overmorrow":
                s = a.AV(e.reference, 2);
                break;
            default:
                if (r.match(/last\s*night/)) {
                    if (n.getHours() > 6) {
                        let e = new Date(n.getTime());
                        e.setDate(e.getDate() - 1), (n = e);
                    }
                    (0, i.Pl)(s, n), s.imply("hour", 0);
                }
        }
        return s.addTag("parser/ENCasualDateParser"), s;
    }
}
