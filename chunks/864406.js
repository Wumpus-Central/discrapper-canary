n.d(t, { R: () => d });
var r = n(160871),
    i = n(473749),
    a = n(112683);
let o = Symbol.for("react-aria.i18n.locale");
function s() {
    let e =
        ("undefined" != typeof window && window[o]) ||
        ("undefined" != typeof navigator && (navigator.language || navigator.userLanguage)) ||
        "en-US";
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e]);
    } catch {
        e = "en-US";
    }
    return {
        locale: e,
        direction: (0, r.d)(e) ? "rtl" : "ltr",
    };
}
let l = s(),
    c = new Set();
function u() {
    for (let e of ((l = s()), c)) e(l);
}
function d() {
    let e = (0, a.Av)(),
        [t, n] = (0, i.useState)(l);
    return ((0, i.useEffect)(
        () => (
            0 === c.size && window.addEventListener("languagechange", u),
            c.add(n),
            () => {
                c.delete(n), 0 === c.size && window.removeEventListener("languagechange", u);
            }
        ),
        [],
    ),
    e)
        ? {
              locale: "en-US",
              direction: "ltr",
          }
        : t;
}
