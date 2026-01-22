var r = n(675879),
    a = n(693755),
    o = n(57284),
    i = n(564399),
    s = r("".replace),
    l = RegExp("^[" + i + "]+"),
    c = RegExp("(^|[^" + i + "])[" + i + "]+$"),
    u = function (e) {
        return function (t) {
            var n = o(a(t));
            return 1 & e && (n = s(n, l, "")), 2 & e && (n = s(n, c, "$1")), n;
        };
    };
e.exports = {
    start: u(1),
    end: u(2),
    trim: u(3),
};
