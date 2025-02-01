var i = n(735471),
    r = String,
    a = TypeError;
e.exports = function (e) {
    if ('object' == typeof e || i(e)) return e;
    throw new a("Can't set " + r(e) + ' as a prototype');
};
