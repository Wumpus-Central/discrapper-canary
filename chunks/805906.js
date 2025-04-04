var r = n(745872)('%Array%'),
    i = !r.isArray && n(166691)('Object.prototype.toString');
e.exports =
    r.isArray ||
    function (e) {
        return '[object Array]' === i(e);
    };
