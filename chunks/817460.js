n.d(t, {
    JE: () => l,
    ab: () => o,
    iG: () => a,
    lL: () => u,
    rC: () => c
});
var r = n(293810),
    s = n(474936),
    i = n(388032);
function o(e) {
    return 'roles' in e ? 'emoji-'.concat(e.id) : ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}
function l(e) {
    let { interval: t, interval_count: n } = e;
    return i.intl.format(
        (function (e) {
            switch (e) {
                case s.rV.DAY:
                    return i.t['3rUmPT'];
                case s.rV.MONTH:
                    return i.t['zuN54+'];
                case s.rV.YEAR:
                    return i.t.cuSp8f;
            }
        })(t),
        { count: n }
    );
}
function a(e) {
    let { interval: t, interval_count: n } = e;
    switch (t) {
        case s.rV.DAY:
            if (n > 0 && n % 7 == 0) return i.intl.formatToPlainString(i.t.iVZYys, { weeks: n / 7 });
            return i.intl.formatToPlainString(i.t.jzH70d, { days: n });
        case s.rV.MONTH:
            return i.intl.formatToPlainString(i.t.erUSmJ, { months: n });
        case s.rV.YEAR:
            return i.intl.formatToPlainString(i.t.IfYQVF, { years: n });
    }
}
function c(e) {
    return e.ref_type === r.Qs.CHANNEL;
}
function u(e) {
    return e.ref_type === r.Qs.INTANGIBLE;
}
