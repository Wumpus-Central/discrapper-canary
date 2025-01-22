var i = r(735471),
    a = String,
    o = TypeError;
e.exports = function (e) {
    if ('object' == typeof e || i(e)) return e;
    throw new o("Can't set " + a(e) + ' as a prototype');
};
