Object.defineProperty(t, "__esModule", { value: !0 });
let r = RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i");
t.default = class {
    refine(e, t) {
        return (
            t.forEach(function (t) {
                if (t.start.isCertain("timezoneOffset")) return;
                let n = e.text.substring(t.index + t.text.length),
                    a = r.exec(n);
                if (!a) return;
                e.debug(() => {
                    console.log(`Extracting timezone: '${a[0]}' into : ${t}`);
                });
                let i = 60 * parseInt(a[2]) + parseInt(a[3] || "0");
                i > 840 ||
                    ("-" === a[1] && (i = -i),
                    null != t.end && t.end.assign("timezoneOffset", i),
                    t.start.assign("timezoneOffset", i),
                    (t.text += a[0]));
            }),
            t
        );
    }
};
