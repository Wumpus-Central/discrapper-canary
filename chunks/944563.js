n.d(t, { Z: () => a });
var r = n(715870),
    i = n(344368);
class a extends i.F {
    innerPatternString(e) {
        return `(?:з|із|від)?\\s*(сьогодні|вчора|завтра|післязавтра|післяпіслязавтра|позапозавчора|позавчора)`;
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            i = e.createParsingComponents();
        switch (n) {
            case "сьогодні":
                return r.Lg(e.reference);
            case "вчора":
                return r.Cv(e.reference);
            case "завтра":
                return r.Ro(e.reference);
            case "післязавтра":
                return r.o1(e.reference, 2);
            case "післяпіслязавтра":
                return r.o1(e.reference, 3);
            case "позавчора":
                return r.MQ(e.reference, 2);
            case "позапозавчора":
                return r.MQ(e.reference, 3);
        }
        return i;
    }
}
