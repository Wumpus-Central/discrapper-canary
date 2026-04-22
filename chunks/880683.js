r.d(t, { u: () => a });
var n = r(374372),
    s = r(579926);
class a {
    parsers;
    refiners;
    defaultConfig = new s.A();
    constructor(e) {
        (e = e || this.defaultConfig.createCasualConfiguration()),
            (this.parsers = [...e.parsers]),
            (this.refiners = [...e.refiners]);
    }
    clone() {
        return new a({ parsers: [...this.parsers], refiners: [...this.refiners] });
    }
    parseDate(e, t, r) {
        let n = this.parse(e, t, r);
        return n.length > 0 ? n[0].start.date() : null;
    }
    parse(e, t, r) {
        let n = new i(e, t, r),
            s = [];
        return (
            this.parsers.forEach((e) => {
                let t = a.executeParser(n, e);
                s = s.concat(t);
            }),
            s.sort((e, t) => e.index - t.index),
            this.refiners.forEach(function (e) {
                s = e.refine(n, s);
            }),
            s
        );
    }
    static executeParser(e, t) {
        let r = [],
            s = t.pattern(e),
            a = e.text,
            i = e.text,
            o = s.exec(i);
        for (; o; ) {
            let l = o.index + a.length - i.length;
            o.index = l;
            let u = t.extract(e, o);
            if (!u) {
                (i = a.substring(o.index + 1)), (o = s.exec(i));
                continue;
            }
            let d = null;
            u instanceof n.s4
                ? (d = u)
                : u instanceof n.BP
                  ? ((d = e.createParsingResult(o.index, o[0])).start = u)
                  : (d = e.createParsingResult(o.index, o[0], u));
            let m = d.index,
                c = d.text;
            e.debug(() => console.log(`${t.constructor.name} extracted (at index=${m}) '${c}'`)),
                r.push(d),
                (i = a.substring(m + c.length)),
                (o = s.exec(i));
        }
        return r;
    }
}
class i {
    text;
    option;
    reference;
    refDate;
    constructor(e, t, r) {
        (this.text = e),
            (this.option = r ?? {}),
            (this.reference = n.b5.fromInput(t, this.option.timezones)),
            (this.refDate = this.reference.instant);
    }
    createParsingComponents(e) {
        return e instanceof n.BP ? e : new n.BP(this.reference, e);
    }
    createParsingResult(e, t, r, s) {
        let a = "string" == typeof t ? t : this.text.substring(e, t),
            i = r ? this.createParsingComponents(r) : null,
            o = s ? this.createParsingComponents(s) : null;
        return new n.s4(this.reference, e, a, i, o);
    }
    debug(e) {
        this.option.debug &&
            (this.option.debug instanceof Function ? this.option.debug(e) : this.option.debug.debug(e));
    }
}
