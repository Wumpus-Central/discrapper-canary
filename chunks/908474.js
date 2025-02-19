var n = e(581031),
    o = e(676125),
    i = e(714050),
    u = e(751234),
    a = n(''.replace),
    c = RegExp('^[' + u + ']+'),
    s = RegExp('(^|[^' + u + '])[' + u + ']+$'),
    f = function (t) {
        return function (r) {
            var e = i(o(r));
            return 1 & t && (e = a(e, c, '')), 2 & t && (e = a(e, s, '$1')), e;
        };
    };
t.exports = {
    start: f(1),
    end: f(2),
    trim: f(3)
};
