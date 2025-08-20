n.d(t, {
    JE: () => l,
    ab: () => o,
    iG: () => c,
    lL: () => d,
    rC: () => u,
});
var r = n(293810),
    i = n(474936),
    a = n(388032);
function o(e) {
    return "roles" in e
        ? "emoji-".concat(e.id)
        : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id);
}
function s(e) {
    switch (e) {
        case i.rV.DAY:
            return a.t["3rUmPT"];
        case i.rV.MONTH:
            return a.t["zuN54+"];
        case i.rV.YEAR:
            return a.t.cuSp8f;
    }
}
function l(e) {
    let { interval: t, interval_count: n } = e;
    return a.intl.format(s(t), { count: n });
}
function c(e) {
    let { interval: t, interval_count: n } = e;
    switch (t) {
        case i.rV.DAY:
            if (n > 0 && n % 7 == 0) return a.intl.formatToPlainString(a.t.iVZYys, { weeks: n / 7 });
            return a.intl.formatToPlainString(a.t.jzH70d, { days: n });
        case i.rV.MONTH:
            return a.intl.formatToPlainString(a.t.erUSmJ, { months: n });
        case i.rV.YEAR:
            return a.intl.formatToPlainString(a.t.IfYQVF, { years: n });
    }
}
function u(e) {
    return e.ref_type === r.Qs.CHANNEL;
}
function d(e) {
    return e.ref_type === r.Qs.INTANGIBLE;
}
