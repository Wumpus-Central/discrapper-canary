var r = n(581079),
    i = /\.textClipping$/,
    o = {
        'text/plain': !0,
        'text/html': !0,
        'text/rtf': !0
    },
    a = 5000;
function s(e, t) {
    if (!n.g.FileReader || (e.type && !(e.type in o))) return void t('');
    if ('' === e.type) {
        var a = '';
        (i.test(e.name) && (a = e.name.replace(i, '')), t(a));
        return;
    }
    var s = new FileReader();
    ((s.onload = function () {
        var e = s.result;
        ('string' != typeof e && r(!1), t(e));
    }),
        (s.onerror = function () {
            t('');
        }),
        s.readAsText(e));
}
e.exports = function (e, t) {
    var n = 0,
        r = [];
    e.forEach(function (i) {
        s(i, function (i) {
            (n++, i && r.push(i.slice(0, a)), n == e.length && t(r.join('\r')));
        });
    });
};
