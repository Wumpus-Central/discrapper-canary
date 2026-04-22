r.d(t, { A: () => i });
var n = r(322811);
let s = RegExp(
        "(^|\\s|T)(?:(?:[\xe0a])\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)",
        "i",
    ),
    a = RegExp(
        "^\\s*(\\-|\\–|\\~|\\〜|[\xe0a]|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)",
        "i",
    );
class i {
    pattern(e) {
        return s;
    }
    extract(e, t) {
        let r = e.createParsingResult(t.index + t[1].length, t[0].substring(t[1].length));
        if (r.text.match(/^\d{4}$/) || ((r.start = i.extractTimeComponent(r.start.clone(), t)), !r.start))
            return (t.index += t[0].length), null;
        let n = e.text.substring(t.index + t[0].length),
            s = a.exec(n);
        return s && ((r.end = i.extractTimeComponent(r.start.clone(), s)), r.end && (r.text += s[0])), r;
    }
    static extractTimeComponent(e, t) {
        let r = 0,
            s = 0,
            a = null;
        if (((r = parseInt(t[2])), null != t[3] && (s = parseInt(t[3])), s >= 60 || r > 24)) return null;
        if ((r >= 12 && (a = n.FF.PM), null != t[5])) {
            if (r > 12) return null;
            let e = t[5][0].toLowerCase();
            "a" == e && ((a = n.FF.AM), 12 == r && (r = 0)), "p" == e && ((a = n.FF.PM), 12 != r && (r += 12));
        }
        if (
            (e.assign("hour", r),
            e.assign("minute", s),
            null !== a ? e.assign("meridiem", a) : r < 12 ? e.imply("meridiem", n.FF.AM) : e.imply("meridiem", n.FF.PM),
            null != t[4])
        ) {
            let r = parseInt(t[4]);
            if (r >= 60) return null;
            e.assign("second", r);
        }
        return e;
    }
}
