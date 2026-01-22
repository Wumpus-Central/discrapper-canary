n.d(t, { A: () => a });
var r = n(322811),
    i = n(355418);
class a extends i.c {
    innerPattern(e) {
        return /(cet?)?\s*(matin|soir|après-midi|aprem|a midi|à minuit)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let n = t[2].toLowerCase(),
            i = e.createParsingComponents();
        switch (n) {
            case "après-midi":
            case "aprem":
                i.imply("hour", 14), i.imply("minute", 0), i.imply("meridiem", r.FF.PM);
                break;
            case "soir":
                i.imply("hour", 18), i.imply("minute", 0), i.imply("meridiem", r.FF.PM);
                break;
            case "matin":
                i.imply("hour", 8), i.imply("minute", 0), i.imply("meridiem", r.FF.AM);
                break;
            case "a midi":
                i.imply("hour", 12), i.imply("minute", 0), i.imply("meridiem", r.FF.AM);
                break;
            case "à minuit":
                i.imply("hour", 0), i.imply("meridiem", r.FF.AM);
        }
        return i;
    }
}
