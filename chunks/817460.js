n.d(t, {
    JE: () => l,
    ab: () => o,
    iG: () => a,
    lL: () => u,
    rC: () => c
});
var r = n(293810),
    i = n(474936),
    s = n(388032);
function o(e) {
    return 'roles' in e ? 'emoji-'.concat(e.id) : ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}
function l(e) {
    let { interval: t, interval_count: n } = e;
    return s.intl.format(
        (function (e) {
            switch (e) {
                case i.rV.DAY:
                    return s.t['3rUmPT'];
                case i.rV.MONTH:
                    return s.t['zuN54+'];
                case i.rV.YEAR:
                    return s.t.cuSp8f;
            }
        })(t),
        { count: n }
    );
}
function a(e) {
    let { interval: t, interval_count: n } = e;
    switch (t) {
        case i.rV.DAY:
            if (n > 0 && n % 7 == 0) return s.intl.formatToPlainString(s.t.iVZYys, { weeks: n / 7 });
            return s.intl.formatToPlainString(s.t.jzH70d, { days: n });
        case i.rV.MONTH:
            return s.intl.formatToPlainString(s.t.erUSmJ, { months: n });
        case i.rV.YEAR:
            return s.intl.formatToPlainString(s.t.IfYQVF, { years: n });
    }
}
function c(e) {
    return e.ref_type === r.Qs.CHANNEL;
}
function u(e) {
    return e.ref_type === r.Qs.INTANGIBLE;
}
