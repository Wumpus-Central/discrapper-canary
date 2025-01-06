n.d(e, {
    JE: function () {
        return u;
    },
    ab: function () {
        return o;
    },
    iG: function () {
        return a;
    },
    lL: function () {
        return c;
    },
    rC: function () {
        return s;
    }
});
var i = n(293810),
    r = n(474936),
    l = n(388032);
function o(t) {
    return 'roles' in t ? 'emoji-'.concat(t.id) : ''.concat(t.ref_type, '-').concat(t.emoji_id, '-').concat(t.name, '-').concat(t.ref_id);
}
function u(t) {
    let { interval: e, interval_count: n } = t;
    return l.intl.format(
        (function (t) {
            switch (t) {
                case r.rV.DAY:
                    return l.t['3rUmPT'];
                case r.rV.MONTH:
                    return l.t['zuN54+'];
                case r.rV.YEAR:
                    return l.t.cuSp8f;
            }
        })(e),
        { count: n }
    );
}
function a(t) {
    let { interval: e, interval_count: n } = t;
    switch (e) {
        case r.rV.DAY:
            if (n > 0 && n % 7 == 0) return l.intl.formatToPlainString(l.t.iVZYys, { weeks: n / 7 });
            return l.intl.formatToPlainString(l.t.jzH70d, { days: n });
        case r.rV.MONTH:
            return l.intl.formatToPlainString(l.t.erUSmJ, { months: n });
        case r.rV.YEAR:
            return l.intl.formatToPlainString(l.t.IfYQVF, { years: n });
    }
}
function s(t) {
    return t.ref_type === i.Qs.CHANNEL;
}
function c(t) {
    return t.ref_type === i.Qs.INTANGIBLE;
}
