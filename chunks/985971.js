"use strict";
n.d(t, { B: () => d });
var r = n(322811);
function i(e, t, n, r) {
    return RegExp(
        `${e}${t}(\\d{1,4})(?:(?:\\.|:|：)(\\d{1,2})(?:(?::|：)(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${n}`,
        r,
    );
}
function a(e, t) {
    return RegExp(
        `^(${e})(\\d{1,4})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${t}`,
        "i",
    );
}
let s = 2,
    o = 3,
    l = 4,
    u = 5,
    c = 6;
class d {
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
        let n = this.extractPrimaryTimeComponents(e, t);
        if (!n) return t[0].match(/^\d{4}/) ? (t.index += 4) : (t.index += t[0].length), null;
        let r = t.index + t[1].length,
            i = t[0].substring(t[1].length),
            a = e.createParsingResult(r, i, n);
        t.index += t[0].length;
        let s = e.text.substring(t.index),
            o = this.getFollowingTimePatternThroughCache().exec(s);
        return i.match(/^\d{3,4}/) &&
            o &&
            (o[0].match(/^\s*([+-])\s*\d{2,4}$/) || o[0].match(/^\s*([+-])\s*\d{2}\W\d{2}/))
            ? null
            : !o || o[0].match(/^\s*([+-])\s*\d{3,4}$/)
              ? this.checkAndReturnWithoutFollowingPattern(a)
              : ((a.end = this.extractFollowingTimeComponents(e, o, a)),
                a.end && (a.text += o[0]),
                this.checkAndReturnWithFollowingPattern(a));
    }
    extractPrimaryTimeComponents(e, t, n = !1) {
        let i = e.createParsingComponents(),
            a = 0,
            d = null,
            _ = parseInt(t[s]);
        if (_ > 100) {
            if ((4 == t[s].length && null == t[o] && !t[c]) || this.strictMode || null != t[o]) return null;
            (a = _ % 100), (_ = Math.floor(_ / 100));
        }
        if (_ > 24) return null;
        if (null != t[o]) {
            if (1 == t[o].length && !t[c]) return null;
            a = parseInt(t[o]);
        }
        if (a >= 60) return null;
        if ((_ > 12 && (d = r.FF.PM), null != t[c])) {
            if (_ > 12) return null;
            let e = t[c][0].toLowerCase();
            "a" == e && ((d = r.FF.AM), 12 == _ && (_ = 0)), "p" == e && ((d = r.FF.PM), 12 != _ && (_ += 12));
        }
        if (
            (i.assign("hour", _),
            i.assign("minute", a),
            null !== d ? i.assign("meridiem", d) : _ < 12 ? i.imply("meridiem", r.FF.AM) : i.imply("meridiem", r.FF.PM),
            null != t[u])
        ) {
            let e = parseInt(t[u].substring(0, 3));
            if (e >= 1e3) return null;
            i.assign("millisecond", e);
        }
        if (null != t[l]) {
            let e = parseInt(t[l]);
            if (e >= 60) return null;
            i.assign("second", e);
        }
        return i;
    }
    extractFollowingTimeComponents(e, t, n) {
        let i = e.createParsingComponents();
        if (null != t[u]) {
            let e = parseInt(t[u].substring(0, 3));
            if (e >= 1e3) return null;
            i.assign("millisecond", e);
        }
        if (null != t[l]) {
            let e = parseInt(t[l]);
            if (e >= 60) return null;
            i.assign("second", e);
        }
        let a = parseInt(t[s]),
            d = 0,
            _ = -1;
        if (
            (null != t[o] ? (d = parseInt(t[o])) : a > 100 && ((d = a % 100), (a = Math.floor(a / 100))),
            d >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (_ = r.FF.PM), null != t[c])) {
            if (a > 12) return null;
            let e = t[c][0].toLowerCase();
            "a" == e && ((_ = r.FF.AM), 12 == a && ((a = 0), i.isCertain("day") || i.imply("day", i.get("day") + 1))),
                "p" == e && ((_ = r.FF.PM), 12 != a && (a += 12)),
                n.start.isCertain("meridiem") ||
                    (_ == r.FF.AM
                        ? (n.start.imply("meridiem", r.FF.AM), 12 == n.start.get("hour") && n.start.assign("hour", 0))
                        : (n.start.imply("meridiem", r.FF.PM),
                          12 != n.start.get("hour") && n.start.assign("hour", n.start.get("hour") + 12)));
        }
        return (
            i.assign("hour", a),
            i.assign("minute", d),
            _ >= 0
                ? i.assign("meridiem", _)
                : n.start.isCertain("meridiem") && n.start.get("hour") > 12
                  ? n.start.get("hour") - 12 > a
                      ? i.imply("meridiem", r.FF.AM)
                      : a <= 12 && (i.assign("hour", a + 12), i.assign("meridiem", r.FF.PM))
                  : a > 12
                    ? i.imply("meridiem", r.FF.PM)
                    : a <= 12 && i.imply("meridiem", r.FF.AM),
            i.date().getTime() < n.start.date().getTime() && i.imply("day", i.get("day") + 1),
            i
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
                n = t[2];
            if (n.includes(".") && !n.match(/\d(\.\d{2})+$/)) return null;
            let r = parseInt(n),
                i = parseInt(e);
            if (r > 24 || i > 24) return null;
        }
        return e;
    }
    cachedPrimaryPrefix = null;
    cachedPrimarySuffix = null;
    cachedPrimaryTimePattern = null;
    getPrimaryTimePatternThroughCache() {
        let e = this.primaryPrefix(),
            t = this.primarySuffix();
        return (
            (this.cachedPrimaryPrefix === e && this.cachedPrimarySuffix === t) ||
                ((this.cachedPrimaryTimePattern = i(this.primaryPatternLeftBoundary(), e, t, this.patternFlags())),
                (this.cachedPrimaryPrefix = e),
                (this.cachedPrimarySuffix = t)),
            this.cachedPrimaryTimePattern
        );
    }
    cachedFollowingPhase = null;
    cachedFollowingSuffix = null;
    cachedFollowingTimePatten = null;
    getFollowingTimePatternThroughCache() {
        let e = this.followingPhase(),
            t = this.followingSuffix();
        return (
            (this.cachedFollowingPhase === e && this.cachedFollowingSuffix === t) ||
                ((this.cachedFollowingTimePatten = a(e, t)),
                (this.cachedFollowingPhase = e),
                (this.cachedFollowingSuffix = t)),
            this.cachedFollowingTimePatten
        );
    }
}
