n.d(t, { J: () => l });
var r = n(616868),
    i = n(594886),
    a = n(970185),
    o = n(647438);
function s(e) {
    return e && e.__esModule ? e.default : e;
}
function l() {
    let { locale: e } = (0, i.j)(),
        t = (0, a.K)(s(r.Z), "@react-aria/datepicker");
    return (0, o.useMemo)(() => {
        try {
            return new Intl.DisplayNames(e, { type: "dateTimeField" });
        } catch {
            return new c(e, t);
        }
    }, [e, t]);
}
class c {
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale);
    }
    constructor(e, t) {
        (this.locale = e), (this.dictionary = t);
    }
}
