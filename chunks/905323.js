"use strict";
n.d(t, { A: () => s });
var r = n(355418),
    i = n(996483);
let a = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class s extends r.c {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        let n = null;
        switch (t[1].toLowerCase()) {
            case "afternoon":
                n = i.ZB(e.reference);
                break;
            case "evening":
            case "night":
                n = i.Jp(e.reference);
                break;
            case "midnight":
                n = i.Bm(e.reference);
                break;
            case "morning":
                n = i.F1(e.reference);
                break;
            case "noon":
            case "midday":
                n = i.zW(e.reference);
        }
        return n && n.addTag("parser/ENCasualTimeParser"), n;
    }
}
