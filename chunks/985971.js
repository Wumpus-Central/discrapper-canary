r.d(t, { B: () => s });
var n = r(322811);
class s {
    strictMode;
    constructor(e = !1) {
        this.strictMode = e;
    }
    patternFlags() {
        return "i";
    }
    primaryPatternLeftBoundary() {
        return "(^|\\s|T|\\b)";
    }
    primarySuffix() {
        return "(?!/)(?=\\W|$)";
    }
    followingSuffix() {
        return "(?!/)(?=\\W|$)";
    }
    pattern(e) {
        return this.getPrimaryTimePatternThroughCache();
    }
    extract(e, t) {
        let r = this.extractPrimaryTimeComponents(e, t);
        if (!r) return t[0].match(/^\d{4}/) ? (t.index += 4) : (t.index += t[0].length), null;
        let n = t.index + t[1].length,
            s = t[0].substring(t[1].length),
            a = e.createParsingResult(n, s, r);
        t.index += t[0].length;
        let i = e.text.substring(t.index),
            o = this.getFollowingTimePatternThroughCache().exec(i);
        return s.match(/^\d{3,4}/) &&
            o &&
            (o[0].match(/^\s*([+-])\s*\d{2,4}$/) || o[0].match(/^\s*([+-])\s*\d{2}\W\d{2}/))
            ? null
            : !o || o[0].match(/^\s*([+-])\s*\d{3,4}$/)
              ? this.checkAndReturnWithoutFollowingPattern(a)
              : ((a.end = this.extractFollowingTimeComponents(e, o, a)),
                a.end && (a.text += o[0]),
                this.checkAndReturnWithFollowingPattern(a));
    }
    extractPrimaryTimeComponents(e, t, r = !1) {
        let s = e.createParsingComponents(),
            a = 0,
            i = null,
            o = parseInt(t[2]);
        if (o > 100) {
            if ((4 == t[2].length && null == t[3] && !t[6]) || this.strictMode || null != t[3]) return null;
            (a = o % 100), (o = Math.floor(o / 100));
        }
        if (o > 24) return null;
        if (null != t[3]) {
            if (1 == t[3].length && !t[6]) return null;
            a = parseInt(t[3]);
        }
        if (a >= 60) return null;
        if ((o > 12 && (i = n.FF.PM), null != t[6])) {
            if (o > 12) return null;
            let e = t[6][0].toLowerCase();
            "a" == e && ((i = n.FF.AM), 12 == o && (o = 0)), "p" == e && ((i = n.FF.PM), 12 != o && (o += 12));
        }
        if (
            (s.assign("hour", o),
            s.assign("minute", a),
            null !== i ? s.assign("meridiem", i) : o < 12 ? s.imply("meridiem", n.FF.AM) : s.imply("meridiem", n.FF.PM),
            null != t[5])
        ) {
            let e = parseInt(t[5].substring(0, 3));
            if (e >= 1e3) return null;
            s.assign("millisecond", e);
        }
        if (null != t[4]) {
            let e = parseInt(t[4]);
            if (e >= 60) return null;
            s.assign("second", e);
        }
        return s;
    }
    extractFollowingTimeComponents(e, t, r) {
        let s = e.createParsingComponents();
        if (null != t[5]) {
            let e = parseInt(t[5].substring(0, 3));
            if (e >= 1e3) return null;
            s.assign("millisecond", e);
        }
        if (null != t[4]) {
            let e = parseInt(t[4]);
            if (e >= 60) return null;
            s.assign("second", e);
        }
        let a = parseInt(t[2]),
            i = 0,
            o = -1;
        if (
            (null != t[3] ? (i = parseInt(t[3])) : a > 100 && ((i = a % 100), (a = Math.floor(a / 100))),
            i >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (o = n.FF.PM), null != t[6])) {
            if (a > 12) return null;
            let e = t[6][0].toLowerCase();
            "a" == e && ((o = n.FF.AM), 12 == a && ((a = 0), s.isCertain("day") || s.imply("day", s.get("day") + 1))),
                "p" == e && ((o = n.FF.PM), 12 != a && (a += 12)),
                r.start.isCertain("meridiem") ||
                    (o == n.FF.AM
                        ? (r.start.imply("meridiem", n.FF.AM), 12 == r.start.get("hour") && r.start.assign("hour", 0))
                        : (r.start.imply("meridiem", n.FF.PM),
                          12 != r.start.get("hour") && r.start.assign("hour", r.start.get("hour") + 12)));
        }
        return (
            s.assign("hour", a),
            s.assign("minute", i),
            o >= 0
                ? s.assign("meridiem", o)
                : r.start.isCertain("meridiem") && r.start.get("hour") > 12
                  ? r.start.get("hour") - 12 > a
                      ? s.imply("meridiem", n.FF.AM)
                      : a <= 12 && (s.assign("hour", a + 12), s.assign("meridiem", n.FF.PM))
                  : a > 12
                    ? s.imply("meridiem", n.FF.PM)
                    : a <= 12 && s.imply("meridiem", n.FF.AM),
            s.date().getTime() < r.start.date().getTime() && s.imply("day", s.get("day") + 1),
            s
        );
    }
    checkAndReturnWithoutFollowingPattern(e) {
        if (e.text.match(/^\d$/) || e.text.match(/^\d\d\d+$/) || e.text.match(/\d[apAP]$/)) return null;
        let t = e.text.match(/[^\d:.](\d[\d.]+)$/);
        if (t) {
            let e = t[1];
            if (this.strictMode || (e.includes(".") && !e.match(/\d(\.\d{2})+$/)) || parseInt(e) > 24) return null;
        }
        return e;
    }
    checkAndReturnWithFollowingPattern(e) {
        if (e.text.match(/^\d+-\d+$/)) return null;
        let t = e.text.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
        if (t) {
            if (this.strictMode) return null;
            let e = t[1],
                r = t[2];
            if (r.includes(".") && !r.match(/\d(\.\d{2})+$/)) return null;
            let n = parseInt(r),
                s = parseInt(e);
            if (n > 24 || s > 24) return null;
        }
        return e;
    }
    cachedPrimaryPrefix = null;
    cachedPrimarySuffix = null;
    cachedPrimaryTimePattern = null;
    getPrimaryTimePatternThroughCache() {
        var e;
        let t = this.primaryPrefix(),
            r = this.primarySuffix();
        return this.cachedPrimaryPrefix === t && this.cachedPrimarySuffix === r
            ? this.cachedPrimaryTimePattern
            : ((this.cachedPrimaryTimePattern =
                  ((e = this.primaryPatternLeftBoundary()),
                  RegExp(
                      `${e}${t}(\\d{1,4})(?:(?:\\.|:|\u{FF1A})(\\d{1,2})(?:(?::|\u{FF1A})(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${r}`,
                      this.patternFlags(),
                  ))),
              (this.cachedPrimaryPrefix = t),
              (this.cachedPrimarySuffix = r),
              this.cachedPrimaryTimePattern);
    }
    cachedFollowingPhase = null;
    cachedFollowingSuffix = null;
    cachedFollowingTimePatten = null;
    getFollowingTimePatternThroughCache() {
        let e = this.followingPhase(),
            t = this.followingSuffix();
        return this.cachedFollowingPhase === e && this.cachedFollowingSuffix === t
            ? this.cachedFollowingTimePatten
            : ((this.cachedFollowingTimePatten = RegExp(
                  `^(${e})(\\d{1,4})(?:(?:\\.|\\:|\\\u{FF1A})(\\d{1,2})(?:(?:\\.|\\:|\\\u{FF1A})(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${t}`,
                  "i",
              )),
              (this.cachedFollowingPhase = e),
              (this.cachedFollowingSuffix = t),
              this.cachedFollowingTimePatten);
    }
}
