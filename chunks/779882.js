var i = r(911081),
    a = r(44091),
    o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    s = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
function l(e) {
    return (e = a(e)) && e.replace(o, i).replace(s, '');
}
e.exports = l;
