function r(e) {
    if (e && 'object' == typeof e) {
        var n = e.which || e.keyCode || e.charCode;
        n && (e = n);
    }
    if ('number' == typeof e) return s[e];
    var r = String(e),
        o = i[r.toLowerCase()];
    if (o) return o;
    var o = a[r.toLowerCase()];
    return o ? o : 1 === r.length ? r.charCodeAt(0) : void 0;
}
r.isEventKey = function (e, n) {
    if (e && 'object' == typeof e) {
        var r = e.which || e.keyCode || e.charCode;
        if (null == r) return !1;
        if ('string' == typeof n) {
            var o = i[n.toLowerCase()];
            if (o) return o === r;
            var o = a[n.toLowerCase()];
            if (o) return o === r;
        } else if ('number' == typeof n) return n === r;
        return !1;
    }
};
var i =
        ((n = e.exports = r).code =
        n.codes =
            {
                backspace: 8,
                tab: 9,
                enter: 13,
                shift: 16,
                ctrl: 17,
                alt: 18,
                'pause/break': 19,
                'caps lock': 20,
                esc: 27,
                space: 32,
                'page up': 33,
                'page down': 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                insert: 45,
                delete: 46,
                command: 91,
                'left command': 91,
                'right command': 93,
                'numpad *': 106,
                'numpad +': 107,
                'numpad -': 109,
                'numpad .': 110,
                'numpad /': 111,
                'num lock': 144,
                'scroll lock': 145,
                'my computer': 182,
                'my calculator': 183,
                ';': 186,
                '=': 187,
                ',': 188,
                '-': 189,
                '.': 190,
                '/': 191,
                '`': 192,
                '[': 219,
                '\\': 220,
                ']': 221,
                "'": 222
            }),
    a = (n.aliases = {
        windows: 91,
        '\u21E7': 16,
        '\u2325': 18,
        '\u2303': 17,
        '\u2318': 91,
        ctl: 17,
        control: 17,
        option: 18,
        pause: 19,
        break: 19,
        caps: 20,
        return: 13,
        escape: 27,
        spc: 32,
        spacebar: 32,
        pgup: 33,
        pgdn: 34,
        ins: 45,
        del: 46,
        cmd: 91
    });
for (o = 97; o < 123; o++) i[String.fromCharCode(o)] = o - 32;
for (var o = 48; o < 58; o++) i[o - 48] = o;
for (o = 1; o < 13; o++) i['f' + o] = o + 111;
for (o = 0; o < 10; o++) i['numpad ' + o] = o + 96;
var s = (n.names = n.title = {});
for (o in i) s[i[o]] = o;
for (var l in a) i[l] = a[l];
