t.d(a, { J: () => o });
var u = t(616868),
    n = t(594886),
    r = t(970185),
    i = t(647438);
function o() {
    var e;
    let { locale: a } = (0, n.j)(),
        t = (0, r.K)((e = u.Z) && e.__esModule ? e.default : e, "@react-aria/datepicker");
    return (0, i.useMemo)(() => {
        try {
            return new Intl.DisplayNames(a, { type: "dateTimeField" });
        } catch {
            return new l(a, t);
        }
    }, [a, t]);
}
class l {
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale);
    }
    constructor(e, a) {
        (this.locale = e), (this.dictionary = a);
    }
}
