var e = n(735471),
    o = String,
    i = TypeError;
t.exports = function (t) {
    if ('object' == typeof t || e(t)) return t;
    throw new i("Can't set " + o(t) + ' as a prototype');
};
