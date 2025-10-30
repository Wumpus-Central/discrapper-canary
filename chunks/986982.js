n.d(t, { Z: () => s });
var r = n(325854),
    i = n(86465),
    a = n(344368),
    o = n(89199);
class s extends a.F {
    innerPatternString(e) {
        return `(ці|останні|минулі|майбутні|наступні|після|через|\\+|-)\\s*(${r.km})`;
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            a = (0, r.RA)(t[3]);
        switch (n) {
            case "останні":
            case "минулі":
            case "-":
                a = (0, o.de)(a);
        }
        return i.L.createRelativeFromReference(e.reference, a);
    }
}
