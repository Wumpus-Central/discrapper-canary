n.d(t, {
    A: () => a,
});
var r = n(322811),
    i = n(985971);
class a extends i.B {
    constructor(e) {
        super(e);
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|to|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:alle|dalle)\\s*)??";
    }
    primarySuffix() {
        return "(?:\\s*(?:o\\W*in punto|alle\\s*sera|in\\s*del\\s*(?:mattina|pomeriggio)))?(?!/)(?=\\W|$)";
    }
    extractPrimaryTimeComponents(e, t) {
        let n = super.extractPrimaryTimeComponents(e, t);
        if (n) {
            if (t[0].endsWith("sera")) {
                let e = n.get("hour");
                e >= 6 && e < 12
                    ? (n.assign("hour", n.get("hour") + 12), n.assign("meridiem", r.FF.PM))
                    : e < 6 && n.assign("meridiem", r.FF.AM);
            }
            if (t[0].endsWith("pomeriggio")) {
                n.assign("meridiem", r.FF.PM);
                let e = n.get("hour");
                e >= 0 && e <= 6 && n.assign("hour", n.get("hour") + 12);
            }
            t[0].endsWith("mattina") &&
                (n.assign("meridiem", r.FF.AM), 12 > n.get("hour") && n.assign("hour", n.get("hour")));
        }
        return n;
    }
}
