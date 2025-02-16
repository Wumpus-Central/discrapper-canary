Object.defineProperty(t, '__esModule', { value: !0 }), (t.InternalIntlMessage = void 0);
let i = n(772660);
class r {
    constructor(e, t) {
        (this.locale = t), (this.ast = (0, i.isCompressedAst)(e) ? e : (0, i.compressFormatJsToAst)(e));
    }
    reserialize() {
        if ('string' == typeof this.ast) return this.ast;
        let e = { value: '' };
        return a(this.ast, e), e.value;
    }
}
function a(e, t) {
    for (let n of e) {
        if ('string' == typeof n) {
            t.value += n;
            continue;
        }
        switch (n[0]) {
            case i.FormatJsNodeType.Argument:
                t.value += '{' + n[1] + '}';
                break;
            case i.FormatJsNodeType.Date:
                (t.value += '{' + n[1] + ', date'), null != n[2] && (t.value += ', ' + n[2]), (t.value += '}');
                break;
            case i.FormatJsNodeType.Time:
                (t.value += '{' + n[1] + ', time'), null != n[2] && (t.value += ', ' + n[2]), (t.value += '}');
                break;
            case i.FormatJsNodeType.Number:
                (t.value += '{' + n[1] + ', number'), null != n[2] && (t.value += ', ' + n[2]), (t.value += '}');
                break;
            case i.FormatJsNodeType.Plural: {
                let e = 'ordinal' == n[4] ? 'selectordinal' : 'plural';
                for (let [i, r] of ((t.value += '{' + n[1] + ', ' + e + ','), n[3] && (t.value += ' offset:' + n[3]), Object.entries(n[2]))) (t.value += ' ' + i + ' {'), a(r, t), (t.value += '}');
                t.value += '}';
                break;
            }
            case i.FormatJsNodeType.Pound:
                t.value += '#';
                break;
            case i.FormatJsNodeType.Select:
                for (let [e, i] of ((t.value += '{' + n[1] + ', select,'), Object.entries(n[2]))) (t.value += ' ' + e + ' {'), a(i, t), (t.value += '}');
                t.value += '}';
                break;
            case i.FormatJsNodeType.Tag:
                s(n, t);
        }
    }
}
function s(e, t) {
    switch (e[1]) {
        case '$b':
            (t.value += '**'), a(e[2], t), (t.value += '**');
            break;
        case '$i':
            (t.value += '*'), a(e[2], t), (t.value += '*');
            break;
        case '$code':
            (t.value += '`'), a(e[2], t), (t.value += '`');
            break;
        case '$p':
            a(e[2], t), (t.value += '\n\n');
            break;
        case '$link':
            let n = e[2],
                i = e[3];
            (t.value += '['), a(n, t), (t.value += ']('), null != i && a(i, t), (t.value += ')');
            break;
        default:
            (t.value += '$['), a(e[2], t), (t.value += '](' + e[1] + ')');
    }
}
t.InternalIntlMessage = r;
