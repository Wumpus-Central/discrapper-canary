n.d(t, { Z: () => s });
var r = n(325854),
    i = n(86465),
    a = n(727916);
let o = `(?:(?:приблизно|орієнтовно)\\s*(?:~\\s*)?)?(${r.km})${r.f.rightBoundary}`;
class s extends a.Z {
    patternLeftBoundary() {
        return r.f.leftBoundary;
    }
    innerPattern(e) {
        return e.option.forwardDate
            ? RegExp(o, "i")
            : RegExp(`(?:протягом|на протязі|протягом|упродовж|впродовж)\\s*${o}`, r.f.flags);
    }
    innerExtract(e, t) {
        let n = (0, r.RA)(t[1]);
        return i.L.createRelativeFromReference(e.reference, n);
    }
}
