r.d(t, { A: () => i });
var n = r(355418),
    s = r(996483);
let a = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class i extends n.c {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        let r = null;
        switch (t[1].toLowerCase()) {
            case "afternoon":
                r = s.ZB(e.reference);
                break;
            case "evening":
            case "night":
                r = s.Jp(e.reference);
                break;
            case "midnight":
                r = s.Bm(e.reference);
                break;
            case "morning":
                r = s.F1(e.reference);
                break;
            case "noon":
            case "midday":
                r = s.zW(e.reference);
        }
        return r && r.addTag("parser/ENCasualTimeParser"), r;
    }
}
