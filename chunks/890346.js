n.d(t, { Z: () => a });
var r = n(715870),
    i = n(522677);
class a extends i.F {
    innerPatternString(e) {
        return `(?:с|со)?\\s*(сегодня|вчера|завтра|послезавтра|послепослезавтра|позапозавчера|позавчера)`;
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            i = e.createParsingComponents();
        switch (n) {
            case "сегодня":
                return r.Lg(e.reference);
            case "вчера":
                return r.Cv(e.reference);
            case "завтра":
                return r.Ro(e.reference);
            case "послезавтра":
                return r.o1(e.reference, 2);
            case "послепослезавтра":
                return r.o1(e.reference, 3);
            case "позавчера":
                return r.MQ(e.reference, 2);
            case "позапозавчера":
                return r.MQ(e.reference, 3);
        }
        return i;
    }
}
