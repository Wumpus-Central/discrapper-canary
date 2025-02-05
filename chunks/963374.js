i.d(t, { nC: () => u }), i(47120), i(757143), i(653041);
var n = i(392711),
    a = i.n(n),
    o = i(697741);
let s = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with']);
function l(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, '');
}
function r(e) {
    return e.toLowerCase();
}
function c(e) {
    return s.has(e);
}
function d(e) {
    return 0 === e.length;
}
function u(e) {
    let t = new Set(a()(e.split(/\W+/)).map(l).reject(d).map(r).reject(c).map(o.$).value());
    return (e) =>
        (function e(t, i) {
            if (Array.isArray(t)) t.forEach((t) => e(t, i));
            else if ('string' == typeof t.content && 'codeBlock' !== t.type) {
                let e = [],
                    n = '';
                t.content.split(/(\W+)/g).forEach((t) => {
                    var a;
                    !d((a = r(l((a = t))))) && !c(a) && i.has((0, o.$)(a))
                        ? (n.length > 0 &&
                              e.push({
                                  type: 'text',
                                  content: n
                              }),
                          e.push({
                              type: 'highlight',
                              content: t
                          }),
                          (n = ''))
                        : (n += t);
                }),
                    e.length > 0 &&
                        (n.length > 0 &&
                            e.push({
                                type: 'text',
                                content: n
                            }),
                        'text' === t.type
                            ? (t.content = e)
                            : (t.content = [
                                  {
                                      type: 'text',
                                      content: e
                                  }
                              ]));
            } else null != t.content && e(t.content, i);
            return t;
        })(e, t);
}
