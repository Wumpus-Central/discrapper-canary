r.d(t, { d: () => a, w: () => i });
var n = r(355418),
    s = r(147426);
class a extends n.c {
    patternLeftBoundary() {
        return s.pW.leftBoundary;
    }
    innerPattern(e) {
        return new RegExp(this.innerPatternString(e), s.pW.flags);
    }
    innerPatternHasChange(e, t) {
        return !1;
    }
}
class i extends a {
    innerPattern(e) {
        return RegExp(`${this.innerPatternString(e)}${s.pW.rightBoundary}`, s.pW.flags);
    }
}
