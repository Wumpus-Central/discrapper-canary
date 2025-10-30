n.d(t, { Z: () => o });
var r = n(745901),
    i = n(86465),
    a = n(727916);
class o extends a.Z {
    innerPattern() {
        return RegExp("(?:binnen|in|binnen de|voor)\\s*(" + r.km + ")(?=\\W|$)", "i");
    }
    innerExtract(e, t) {
        let n = (0, r.RA)(t[1]);
        return i.L.createRelativeFromReference(e.reference, n);
    }
}
