r.d(t, { A: () => a });
var n = r(322811),
    s = r(985971);
class a extends s.B {
    constructor(e) {
        super(e);
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|to|until|through|till|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:at|from)\\s*)??";
    }
    primarySuffix() {
        return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)";
    }
    extractPrimaryTimeComponents(e, t) {
        let r = super.extractPrimaryTimeComponents(e, t);
        if (!r) return r;
        if (t[0].endsWith("night")) {
            let e = r.get("hour");
            e >= 6 && e < 12
                ? (r.assign("hour", r.get("hour") + 12), r.assign("meridiem", n.FF.PM))
                : e < 6 && r.assign("meridiem", n.FF.AM);
        }
        if (t[0].endsWith("afternoon")) {
            r.assign("meridiem", n.FF.PM);
            let e = r.get("hour");
            e >= 0 && e <= 6 && r.assign("hour", r.get("hour") + 12);
        }
        return (
            t[0].endsWith("morning") &&
                (r.assign("meridiem", n.FF.AM), 12 > r.get("hour") && r.assign("hour", r.get("hour"))),
            r.addTag("parser/ENTimeExpressionParser")
        );
    }
    extractFollowingTimeComponents(e, t, r) {
        let n = super.extractFollowingTimeComponents(e, t, r);
        return n && n.addTag("parser/ENTimeExpressionParser"), n;
    }
}
