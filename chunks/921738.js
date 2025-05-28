function n(e) {
    if (e && 'object' == typeof e) {
        var t = e.which || e.keyCode || e.charCode;
        t && (e = t);
    }
    if ('number' == typeof e) return o[e];
    var n = String(e),
        a = r[n.toLowerCase()];
    if (a) return a;
    var a = i[n.toLowerCase()];
    return a || (1 === n.length ? n.charCodeAt(0) : void 0);
}
n.isEventKey = function (e, t) {
    if (e && 'object' == typeof e) {
        var n = e.which || e.keyCode || e.charCode;
        if (null == n) return !1;
        if ('string' == typeof t) {
            var a = r[t.toLowerCase()];
            if (a) return a === n;
            var a = i[t.toLowerCase()];
            if (a) return a === n;
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
for (a = 97; a < 123; a++) r[String.fromCharCode(a)] = a - 32;
for (var a = 48; a < 58; a++) r[a - 48] = a;
for (a = 1; a < 13; a++) r['f' + a] = a + 111;
for (a = 0; a < 10; a++) r['numpad ' + a] = a + 96;
var o = (t.names = t.title = {});
for (a in r) o[r[a]] = a;
for (var s in i) r[s] = i[s];
