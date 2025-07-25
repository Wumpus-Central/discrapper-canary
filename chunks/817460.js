n.d(t, {
    JE: () => o,
    ab: () => s,
    iG: () => a,
    lL: () => u,
    rC: () => c
});
var r = n(293810),
    i = n(474936),
    l = n(388032);
function s(e) {
    return 'roles' in e ? 'emoji-'.concat(e.id) : ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}
function o(e) {
    let { interval: t, interval_count: n } = e;
    return l.intl.format(
        (function (e) {
            switch (e) {
                case i.rV.DAY:
                    return l.t['3rUmPT'];
                case i.rV.MONTH:
                    return l.t['zuN54+'];
                case i.rV.YEAR:
                    return l.t.cuSp8f;
            }
        })(t),
        { count: n }
    );
}
function a(e) {
    let { interval: t, interval_count: n } = e;
    switch (t) {
        case i.rV.DAY:
            if (n > 0 && n % 7 == 0) return l.intl.formatToPlainString(l.t.iVZYys, { weeks: n / 7 });
            return l.intl.formatToPlainString(l.t.jzH70d, { days: n });
        case i.rV.MONTH:
            return l.intl.formatToPlainString(l.t.erUSmJ, { months: n });
        case i.rV.YEAR:
            return l.intl.formatToPlainString(l.t.IfYQVF, { years: n });
    }
}
function c(e) {
    return e.ref_type === r.Qs.CHANNEL;
}
function u(e) {
    return e.ref_type === r.Qs.INTANGIBLE;
}
