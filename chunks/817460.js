e.d(n, {
    JE: function () {
        return o;
    },
    ab: function () {
        return u;
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
var i = e(293810),
    r = e(474936),
    l = e(388032);
function u(t) {
    return 'roles' in t ? 'emoji-'.concat(t.id) : ''.concat(t.ref_type, '-').concat(t.emoji_id, '-').concat(t.name, '-').concat(t.ref_id);
}
function o(t) {
    let { interval: n, interval_count: e } = t;
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
        })(n),
        { count: e }
    );
}
function a(t) {
    let { interval: n, interval_count: e } = t;
    switch (n) {
        case r.rV.DAY:
            if (e > 0 && e % 7 == 0) return l.intl.formatToPlainString(l.t.iVZYys, { weeks: e / 7 });
            return l.intl.formatToPlainString(l.t.jzH70d, { days: e });
        case r.rV.MONTH:
            return l.intl.formatToPlainString(l.t.erUSmJ, { months: e });
        case r.rV.YEAR:
            return l.intl.formatToPlainString(l.t.IfYQVF, { years: e });
    }
}
function s(t) {
    return t.ref_type === i.Qs.CHANNEL;
}
function c(t) {
    return t.ref_type === i.Qs.INTANGIBLE;
}
