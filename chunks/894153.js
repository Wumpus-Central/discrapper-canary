t.d(a, { d: () => i });
var u = t(184334);
let n = RegExp("^.*\\(.*\\).*$"),
    r = ["latn", "arab", "hanidec", "deva", "beng", "fullwide"];
class i {
    parse(e) {
        return l(this.locale, this.options, e).parse(e);
    }
    isValidPartialNumber(e, a, t) {
        return l(this.locale, this.options, e).isValidPartialNumber(e, a, t);
    }
    getNumberingSystem(e) {
        return l(this.locale, this.options, e).options.numberingSystem;
    }
    constructor(e, a = {}) {
        (this.locale = e), (this.options = a);
    }
}
let o = new Map();
function l(e, a, t) {
    let u = s(e, a);
    if (!e.includes("-nu-") && !u.isValidPartialNumber(t)) {
        for (let n of r)
            if (n !== u.options.numberingSystem) {
                let u = s(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + n, a);
                if (u.isValidPartialNumber(t)) return u;
            }
    }
    return u;
}
function s(e, a) {
    let t =
            e +
            (a
                ? Object.entries(a)
                      .sort((e, a) => (e[0] < a[0] ? -1 : 1))
                      .join()
                : ""),
        u = o.get(t);
    return u || ((u = new d(e, a)), o.set(t, u)), u;
}
class d {
    parse(e) {
        let a = this.sanitize(e);
        if (
            (this.symbols.group && (a = D(a, this.symbols.group, "")),
            this.symbols.decimal && (a = a.replace(this.symbols.decimal, ".")),
            this.symbols.minusSign && (a = a.replace(this.symbols.minusSign, "-")),
            (a = a.replace(this.symbols.numeral, this.symbols.index)),
            "percent" === this.options.style)
        ) {
            let e = a.indexOf("-"),
                t = (a = (a = a.replace("-", "")).replace("+", "")).indexOf(".");
            -1 === t && (t = a.length),
                (a = a.replace(".", "")),
                (a =
                    t - 2 == 0
                        ? `0.${a}`
                        : t - 2 == -1
                          ? `0.0${a}`
                          : t - 2 == -2
                            ? "0.00"
                            : `${a.slice(0, t - 2)}.${a.slice(t - 2)}`),
                e > -1 && (a = `-${a}`);
        }
        let t = a ? +a : NaN;
        if (isNaN(t)) return NaN;
        if ("percent" === this.options.style) {
            var r, o;
            let e = {
                ...this.options,
                style: "decimal",
                minimumFractionDigits: Math.min((null != (r = this.options.minimumFractionDigits) ? r : 0) + 2, 20),
                maximumFractionDigits: Math.min((null != (o = this.options.maximumFractionDigits) ? o : 0) + 2, 20),
            };
            return new i(this.locale, e).parse(new (0, u.e)(this.locale, e).format(t));
        }
        return "accounting" === this.options.currencySign && n.test(e) && (t *= -1), t;
    }
    sanitize(e) {
        return (
            (e = e.replace(this.symbols.literals, "")),
            this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)),
            "arab" === this.options.numberingSystem &&
                (this.symbols.decimal &&
                    (e = (e = e.replace(",", this.symbols.decimal)).replace(
                        String.fromCharCode(1548),
                        this.symbols.decimal,
                    )),
                this.symbols.group && (e = D(e, ".", this.symbols.group))),
            "\u2019" === this.symbols.group && e.includes("'") && (e = D(e, "'", this.symbols.group)),
            "fr-FR" === this.options.locale &&
                this.symbols.group &&
                ((e = D(e, " ", this.symbols.group)), (e = D(e, /\u00A0/g, this.symbols.group))),
            e
        );
    }
    isValidPartialNumber(e, a = -1 / 0, t = 1 / 0) {
        return (
            (e = this.sanitize(e)),
            this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && a < 0
                ? (e = e.slice(this.symbols.minusSign.length))
                : this.symbols.plusSign &&
                  e.startsWith(this.symbols.plusSign) &&
                  t > 0 &&
                  (e = e.slice(this.symbols.plusSign.length)),
            !(
                (this.symbols.group && e.startsWith(this.symbols.group)) ||
                (this.symbols.decimal &&
                    e.indexOf(this.symbols.decimal) > -1 &&
                    0 === this.options.maximumFractionDigits)
            ) &&
                (this.symbols.group && (e = D(e, this.symbols.group, "")),
                (e = e.replace(this.symbols.numeral, "")),
                this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")),
                0 === e.length)
        );
    }
    constructor(e, a = {}) {
        var t, u;
        (this.locale = e),
            1 !== a.roundingIncrement &&
                null != a.roundingIncrement &&
                (null == a.maximumFractionDigits && null == a.minimumFractionDigits
                    ? ((a.maximumFractionDigits = 0), (a.minimumFractionDigits = 0))
                    : null == a.maximumFractionDigits
                      ? (a.maximumFractionDigits = a.minimumFractionDigits)
                      : null == a.minimumFractionDigits && (a.minimumFractionDigits = a.maximumFractionDigits)),
            (this.formatter = new Intl.NumberFormat(e, a)),
            (this.options = this.formatter.resolvedOptions()),
            (this.symbols = (function (e, a, t, u) {
                var n, r, i, o, l;
                let s = new Intl.NumberFormat(e, {
                        ...t,
                        minimumSignificantDigits: 1,
                        maximumSignificantDigits: 21,
                        roundingIncrement: 1,
                        roundingPriority: "auto",
                        roundingMode: "halfExpand",
                    }),
                    d = s.formatToParts(-10000.111),
                    D = s.formatToParts(10000.111),
                    f = m.map((e) => s.formatToParts(e)),
                    y = null != (l = null == (n = d.find((e) => "minusSign" === e.type)) ? void 0 : n.value) ? l : "-",
                    p = null == (r = D.find((e) => "plusSign" === e.type)) ? void 0 : r.value;
                p ||
                    ((null == u ? void 0 : u.signDisplay) !== "exceptZero" &&
                        (null == u ? void 0 : u.signDisplay) !== "always") ||
                    (p = "+");
                let g =
                        null ==
                        (i = new Intl.NumberFormat(e, {
                            ...t,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })
                            .formatToParts(0.001)
                            .find((e) => "decimal" === e.type))
                            ? void 0
                            : i.value,
                    v = null == (o = d.find((e) => "group" === e.type)) ? void 0 : o.value,
                    b = [
                        ...new Set([
                            ...d.filter((e) => !c.has(e.type)).map((e) => h(e.value)),
                            ...f.flatMap((e) => e.filter((e) => !c.has(e.type)).map((e) => h(e.value))),
                        ]),
                    ].sort((e, a) => a.length - e.length),
                    C =
                        0 === b.length
                            ? RegExp("[\\p{White_Space}]", "gu")
                            : RegExp(`${b.join("|")}|[\\p{White_Space}]`, "gu"),
                    x = [...new Intl.NumberFormat(t.locale, { useGrouping: !1 }).format(9876543210)].reverse(),
                    B = new Map(x.map((e, a) => [e, a]));
                return {
                    minusSign: y,
                    plusSign: p,
                    decimal: g,
                    group: v,
                    literals: C,
                    numeral: RegExp(`[${x.join("")}]`, "g"),
                    index: (e) => String(B.get(e)),
                };
            })(e, this.formatter, this.options, a)),
            "percent" === this.options.style &&
                ((null != (t = this.options.minimumFractionDigits) ? t : 0) > 18 ||
                    (null != (u = this.options.maximumFractionDigits) ? u : 0) > 18) &&
                console.warn(
                    "NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.",
                );
    }
}
let c = new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]),
    m = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, 0.1, 1.1];
function D(e, a, t) {
    return e.replaceAll ? e.replaceAll(a, t) : e.split(a).join(t);
}
function h(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
