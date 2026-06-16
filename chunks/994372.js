r.r(t),
    r.d(t, {
        parseDate: () => A,
        casual: () => R,
        ReferenceWithTimezone: () => a.b5,
        ParsingResult: () => a.s4,
        createCasualConfiguration: () => k,
        Weekday: () => i.Bw,
        strict: () => E,
        Chrono: () => s.u,
        Meridiem: () => i.FF,
        ParsingComponents: () => a.BP,
        createConfiguration: () => j,
        parse: () => b,
    });
var n = r(132588),
    s = r(880683),
    a = r(374372),
    i = r(322811),
    o = r(774188);
let l = {
        domingo: 0,
        dom: 0,
        segunda: 1,
        "segunda-feira": 1,
        seg: 1,
        "ter\xe7a": 2,
        "ter\xe7a-feira": 2,
        ter: 2,
        quarta: 3,
        "quarta-feira": 3,
        qua: 3,
        quinta: 4,
        "quinta-feira": 4,
        qui: 4,
        sexta: 5,
        "sexta-feira": 5,
        sex: 5,
        "s\xe1bado": 6,
        sabado: 6,
        sab: 6,
    },
    u = {
        janeiro: 1,
        jan: 1,
        "jan.": 1,
        fevereiro: 2,
        fev: 2,
        "fev.": 2,
        "mar\xe7o": 3,
        mar: 3,
        "mar.": 3,
        abril: 4,
        abr: 4,
        "abr.": 4,
        maio: 5,
        mai: 5,
        "mai.": 5,
        junho: 6,
        jun: 6,
        "jun.": 6,
        julho: 7,
        jul: 7,
        "jul.": 7,
        agosto: 8,
        ago: 8,
        "ago.": 8,
        setembro: 9,
        set: 9,
        "set.": 9,
        outubro: 10,
        out: 10,
        "out.": 10,
        novembro: 11,
        nov: 11,
        "nov.": 11,
        dezembro: 12,
        dez: 12,
        "dez.": 12,
    };
var m = r(476858),
    d = r(355418),
    c = r(1673);
let g = RegExp(
    `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:(este|esta|passado|pr[o\xf3]ximo)\\s*)?(${(0, m.uJ)(l)})(?:\\s*(?:\\,|\\)|\\\u{FF09}))?(?:\\s*(este|esta|passado|pr[\xf3o]ximo)\\s*semana)?(?=\\W|\\d|$)`,
    "i",
);
class h extends d.c {
    innerPattern() {
        return g;
    }
    innerExtract(e, t) {
        let r = l[t[2].toLowerCase()];
        if (void 0 === r) return null;
        let n = t[1],
            s = t[3],
            a = n || s || "";
        a = a.toLowerCase();
        let i = null;
        return (
            "passado" == a
                ? (i = "this")
                : "pr\xf3ximo" == a || "proximo" == a
                  ? (i = "next")
                  : "este" == a && (i = "this"),
            (0, c.Y5)(e.reference, r, i)
        );
    }
}
var f = r(985971);
class p extends f.B {
    primaryPrefix() {
        return "(?:(?:ao?|\xe0s?|das|da|de|do)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|a(?:o)?|\\?)\\s*";
    }
}
var y = r(230205);
class x extends y.A {
    patternBetween() {
        return RegExp("^\\s*(?:,|\xe0)?\\s*$");
    }
}
var w = r(172609);
class D extends w.A {
    patternBetween() {
        return /^\s*(?:-)\s*$/i;
    }
}
var P = r(364242);
let F = RegExp(
    `([0-9]{1,2})(?:\xba|\xaa|\xb0)?(?:\\s*(?:desde|de|\\-|\\\u{2013}|ao?|\\s)\\s*([0-9]{1,2})(?:\xba|\xaa|\xb0)?)?\\s*(?:de)?\\s*(?:-|/|\\s*(?:de|,)?\\s*)(${(0, m.uJ)(u)})(?:\\s*(?:de|,)?\\s*([0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?))?(?=\\W|$)`,
    "i",
);
class C extends d.c {
    innerPattern() {
        return F;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = u[t[3].toLowerCase()],
            s = parseInt(t[1]);
        if (s > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", n), r.start.assign("day", s), t[4])) {
            let e = (function (e) {
                if (e.match(/^[0-9]{1,4}$/)) {
                    let t = parseInt(e);
                    return t < 100 && (t > 50 ? (t += 1900) : (t += 2e3)), t;
                }
                return e.match(/a\.?\s*c\.?/i) ? -parseInt((e = e.replace(/a\.?\s*c\.?/i, ""))) : parseInt(e);
            })(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, P.Y)(e.refDate, s, n);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = parseInt(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
var T = r(996483);
class v extends d.c {
    innerPattern(e) {
        return /(agora|hoje|amanha|amanh\xe3|ontem)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[0].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "agora":
                return T.tB(e.reference);
            case "hoje":
                return T.Ec(e.reference);
            case "amanha":
            case "amanh\xe3":
                return T.uf(e.reference);
            case "ontem":
                return T.jI(e.reference);
        }
        return n;
    }
}
var M = r(881190);
class $ extends d.c {
    innerPattern() {
        return /(?:esta\s*)?(manha|manh\xe3|tarde|meia-noite|meio-dia|noite)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = e.createParsingComponents();
        switch (t[1].toLowerCase()) {
            case "tarde":
                n.imply("meridiem", i.FF.PM), n.imply("hour", 15);
                break;
            case "noite":
                n.imply("meridiem", i.FF.PM), n.imply("hour", 22);
                break;
            case "manha":
            case "manh\xe3":
                n.imply("meridiem", i.FF.AM), n.imply("hour", 6);
                break;
            case "meia-noite":
                let s = new Date(r.getTime());
                s.setDate(s.getDate() + 1),
                    (0, M.Pl)(n, s),
                    (0, M.A4)(n, s),
                    n.imply("hour", 0),
                    n.imply("minute", 0),
                    n.imply("second", 0);
                break;
            case "meio-dia":
                n.imply("meridiem", i.FF.AM), n.imply("hour", 12);
        }
        return n;
    }
}
let R = new s.u(k()),
    E = new s.u(j(!0));
function b(e, t, r) {
    return R.parse(e, t, r);
}
function A(e, t, r) {
    return R.parseDate(e, t, r);
}
function k(e = !0) {
    let t = j(!1, e);
    return t.parsers.push(new v()), t.parsers.push(new $()), t;
}
function j(e = !0, t = !0) {
    return (0, n.i)({ parsers: [new o.A(t), new h(), new p(), new C()], refiners: [new x(), new D()] }, e);
}
