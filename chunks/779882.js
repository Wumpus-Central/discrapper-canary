var i = n(911081),
    r = n(44091),
    a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    s = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
function o(e) {
    return (e = r(e)) && e.replace(a, i).replace(s, '');
}
e.exports = o;
