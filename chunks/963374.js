n.d(t, {
    nC: function () {
        return u;
    }
}),
    n(47120),
    n(757143),
    n(653041);
var i = n(392711),
    o = n.n(i),
    a = n(697741);
let l = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with']);
function s(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, '');
}
function r(e) {
    return e.toLowerCase();
}
function c(e) {
    return l.has(e);
}
function d(e) {
    return 0 === e.length;
}
function u(e) {
    var t;
    let n = new Set(((t = e), o()(t.split(/\W+/)).map(s).reject(d).map(r).reject(c).map(a.$).value()));
    return (e) =>
        (function e(t, n) {
            if (Array.isArray(t)) t.forEach((t) => e(t, n));
            else if ('string' == typeof t.content && 'codeBlock' !== t.type) {
                let e = [],
                    i = '';
                t.content.split(/(\W+)/g).forEach((t) => {
                    var o, l;
                    if (((o = t), (l = n), !d((o = r(s(o)))) && !c(o) && l.has((0, a.$)(o))))
                        i.length > 0 &&
                            e.push({
                                type: 'text',
                                content: i
                            }),
                            e.push({
                                type: 'highlight',
                                content: t
                            }),
                            (i = '');
                    else i += t;
                }),
                    e.length > 0 &&
                        (i.length > 0 &&
                            e.push({
                                type: 'text',
                                content: i
                            }),
                        'text' === t.type
                            ? (t.content = e)
                            : (t.content = [
                                  {
                                      type: 'text',
                                      content: e
                                  }
                              ]));
            } else null != t.content && e(t.content, n);
            return t;
        })(e, n);
}
