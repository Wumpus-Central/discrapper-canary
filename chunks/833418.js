Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(180774),
    a = RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
t.default = class {
    constructor(e) {
        this.timezoneOverrides = e;
    }
    refine(e, t) {
        var r;
        let i = null != (r = e.option.timezones) ? r : {};
        return (
            t.forEach((t) => {
                var r, s;
                let o = e.text.substring(t.index + t.text.length),
                    u = a.exec(o);
                if (!u) return;
                let l = u[1].toUpperCase(),
                    d = null != (s = null != (r = t.start.date()) ? r : t.refDate) ? s : new Date(),
                    c = Object.assign(Object.assign({}, this.timezoneOverrides), i),
                    m = (0, n.toTimezoneOffset)(l, d, c);
                if (null == m) return;
                e.debug(() => {
                    console.log(`Extracting timezone: '${l}' into: ${m} for: ${t.start}`);
                });
                let f = t.start.get("timezoneOffset");
                !(null !== f && m != f && (t.start.isCertain("timezoneOffset") || l != u[1])) &&
                    (!t.start.isOnlyDate() || l == u[1]) &&
                    ((t.text += u[0]),
                    t.start.isCertain("timezoneOffset") || t.start.assign("timezoneOffset", m),
                    null == t.end || t.end.isCertain("timezoneOffset") || t.end.assign("timezoneOffset", m));
            }),
            t
        );
    }
};
