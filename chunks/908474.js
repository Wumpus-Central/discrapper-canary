var r = n(581031),
    i = n(676125),
    o = n(714050),
    a = n(751234),
    s = r(''.replace),
    l = RegExp('^[' + a + ']+'),
    c = RegExp('(^|[^' + a + '])[' + a + ']+$'),
    u = function (e) {
        return function (t) {
            var n = o(i(t));
            return 1 & e && (n = s(n, l, '')), 2 & e && (n = s(n, c, '$1')), n;
        };
    };
e.exports = {
    start: u(1),
    end: u(2),
    trim: u(3)
};
