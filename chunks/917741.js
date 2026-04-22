r.d(t, { A: () => a });
var n = r(322811),
    s = r(355418);
class a extends s.c {
    innerPattern(e) {
        return /(cet?)?\s*(matin|soir|après-midi|aprem|a midi|à minuit)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase(),
            s = e.createParsingComponents();
        switch (r) {
            case "apr\xe8s-midi":
            case "aprem":
                s.imply("hour", 14), s.imply("minute", 0), s.imply("meridiem", n.FF.PM);
                break;
            case "soir":
                s.imply("hour", 18), s.imply("minute", 0), s.imply("meridiem", n.FF.PM);
                break;
            case "matin":
                s.imply("hour", 8), s.imply("minute", 0), s.imply("meridiem", n.FF.AM);
                break;
            case "a midi":
                s.imply("hour", 12), s.imply("minute", 0), s.imply("meridiem", n.FF.AM);
                break;
            case "\xe0 minuit":
                s.imply("hour", 0), s.imply("meridiem", n.FF.AM);
        }
        return s;
    }
}
