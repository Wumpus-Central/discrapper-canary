var r = n(735471),
    i = String,
    o = TypeError;
e.exports = function (e) {
    if ('object' == typeof e || r(e)) return e;
    throw new o("Can't set " + i(e) + ' as a prototype');
};
