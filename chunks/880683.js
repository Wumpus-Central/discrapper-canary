"use strict";
n.d(t, { u: () => a });
var r = n(374372),
    i = n(579926);
class a {
    parsers;
    refiners;
    defaultConfig = new i.A();
    constructor(e) {
        (e = e || this.defaultConfig.createCasualConfiguration()),
            (this.parsers = [...e.parsers]),
            (this.refiners = [...e.refiners]);
    }
    clone() {
        return new a({ parsers: [...this.parsers], refiners: [...this.refiners] });
    }
    parseDate(e, t, n) {
        let r = this.parse(e, t, n);
        return r.length > 0 ? r[0].start.date() : null;
    }
    parse(e, t, n) {
        let r = new s(e, t, n),
            i = [];
        return (
            this.parsers.forEach((e) => {
                let t = a.executeParser(r, e);
                i = i.concat(t);
            }),
            i.sort((e, t) => e.index - t.index),
            this.refiners.forEach(function (e) {
                i = e.refine(r, i);
            }),
            i
        );
    }
    static executeParser(e, t) {
        let n = [],
            i = t.pattern(e),
            a = e.text,
            s = e.text,
            o = i.exec(s);
        for (; o; ) {
            let l = o.index + a.length - s.length;
            o.index = l;
            let u = t.extract(e, o);
            if (!u) {
                (s = a.substring(o.index + 1)), (o = i.exec(s));
                continue;
            }
            let c = null;
            u instanceof r.s4
                ? (c = u)
                : u instanceof r.BP
                  ? ((c = e.createParsingResult(o.index, o[0])).start = u)
                  : (c = e.createParsingResult(o.index, o[0], u));
            let d = c.index,
                _ = c.text;
            e.debug(() => console.log(`${t.constructor.name} extracted (at index=${d}) '${_}'`)),
                n.push(c),
                (s = a.substring(d + _.length)),
                (o = i.exec(s));
        }
        return n;
    }
}
class s {
    text;
    option;
    reference;
    refDate;
    constructor(e, t, n) {
        (this.text = e),
            (this.option = n ?? {}),
            (this.reference = r.b5.fromInput(t, this.option.timezones)),
            (this.refDate = this.reference.instant);
    }
    createParsingComponents(e) {
        return e instanceof r.BP ? e : new r.BP(this.reference, e);
    }
    createParsingResult(e, t, n, i) {
        let a = "string" == typeof t ? t : this.text.substring(e, t),
            s = n ? this.createParsingComponents(n) : null,
            o = i ? this.createParsingComponents(i) : null;
        return new r.s4(this.reference, e, a, s, o);
    }
    debug(e) {
        this.option.debug &&
            (this.option.debug instanceof Function ? this.option.debug(e) : this.option.debug.debug(e));
    }
}
