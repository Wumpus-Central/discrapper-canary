n.d(t, { nC: () => u }), n(47120), n(757143), n(653041);
var i = n(392711),
    a = n.n(i),
    o = n(697741);
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
        (function e(t, n) {
            if (Array.isArray(t)) t.forEach((t) => e(t, n));
            else if ('string' == typeof t.content && 'codeBlock' !== t.type) {
                let e = [],
                    i = '';
                t.content.split(/(\W+)/g).forEach((t) => {
                    var a;
                    !d((a = r(l((a = t))))) && !c(a) && n.has((0, o.$)(a))
                        ? (i.length > 0 &&
                              e.push({
                                  type: 'text',
                                  content: i
                              }),
                          e.push({
                              type: 'highlight',
                              content: t
                          }),
                          (i = ''))
                        : (i += t);
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
        })(e, t);
}
