(e = n.nmd(e)),
    (e.exports = (function () {
        return function (e) {
            var t = '/*|*/',
                n = t + '}';
            function o(t) {
                if (t)
                    try {
                        e(t + '}');
                    } catch (e) {}
            }
            return function (r, i, a, u, s, l, c, p, d, f) {
                switch (r) {
                    case 1:
                        if (0 === d && 64 === i.charCodeAt(0)) return e(i + ';'), '';
                        break;
                    case 2:
                        if (0 === p) return i + t;
                        break;
                    case 3:
                        switch (p) {
                            case 102:
                            case 112:
                                return e(a[0] + i), '';
                            default:
                                return i + (0 === f ? t : '');
                        }
                    case -2:
                        i.split(n).forEach(o);
                }
            };
        };
    })());
