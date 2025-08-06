function n(e) {
    if (e && 'object' == typeof e) {
        var t = e.which || e.keyCode || e.charCode;
        t && (e = t);
    }
    if ('number' == typeof e) return a[e];
    var n = String(e),
        o = r[n.toLowerCase()];
    if (o) return o;
    var o = i[n.toLowerCase()];
    return o || (1 === n.length ? n.charCodeAt(0) : void 0);
}
n.isEventKey = function (e, t) {
    if (e && 'object' == typeof e) {
        var n = e.which || e.keyCode || e.charCode;
        if (null == n) return !1;
        if ('string' == typeof t) {
            var o = r[t.toLowerCase()];
            if (o) return o === n;
            var o = i[t.toLowerCase()];
            if (o) return o === n;
        } else if ('number' == typeof t) return t === n;
        return !1;
    }
};
var r =
        ((t = e.exports = n).code =
        t.codes =
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
    i = (t.aliases = {
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
for (o = 97; o < 123; o++) r[String.fromCharCode(o)] = o - 32;
for (var o = 48; o < 58; o++) r[o - 48] = o;
for (o = 1; o < 13; o++) r['f' + o] = o + 111;
for (o = 0; o < 10; o++) r['numpad ' + o] = o + 96;
var a = (t.names = t.title = {});
for (o in r) a[r[o]] = o;
for (var s in i) r[s] = i[s];
