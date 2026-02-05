"use strict";
n.d(t, { A: () => c });
var r = n(322811);
let i = RegExp(
        "(^|\\s|T)(?:(?:[\xe0a])\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)",
        "i",
    ),
    a = RegExp(
        "^\\s*(\\-|\\–|\\~|\\〜|[\xe0a]|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)",
        "i",
    ),
    s = 2,
    o = 3,
    l = 4,
    u = 5;
class c {
    pattern(e) {
        return i;
    }
    extract(e, t) {
        let n = e.createParsingResult(t.index + t[1].length, t[0].substring(t[1].length));
        if (n.text.match(/^\d{4}$/) || ((n.start = c.extractTimeComponent(n.start.clone(), t)), !n.start))
            return (t.index += t[0].length), null;
        let r = e.text.substring(t.index + t[0].length),
            i = a.exec(r);
        return i && ((n.end = c.extractTimeComponent(n.start.clone(), i)), n.end && (n.text += i[0])), n;
    }
    static extractTimeComponent(e, t) {
        let n = 0,
            i = 0,
            a = null;
        if (((n = parseInt(t[s])), null != t[o] && (i = parseInt(t[o])), i >= 60 || n > 24)) return null;
        if ((n >= 12 && (a = r.FF.PM), null != t[u])) {
            if (n > 12) return null;
            let e = t[u][0].toLowerCase();
            "a" == e && ((a = r.FF.AM), 12 == n && (n = 0)), "p" == e && ((a = r.FF.PM), 12 != n && (n += 12));
        }
        if (
            (e.assign("hour", n),
            e.assign("minute", i),
            null !== a ? e.assign("meridiem", a) : n < 12 ? e.imply("meridiem", r.FF.AM) : e.imply("meridiem", r.FF.PM),
            null != t[l])
        ) {
            let n = parseInt(t[l]);
            if (n >= 60) return null;
            e.assign("second", n);
        }
        return e;
    }
}
