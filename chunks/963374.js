n.d(t, { nC: () => d }), n(47120), n(757143), n(301563), n(653041);
var i = n(392711),
    r = n.n(i),
    o = n(697741);
let a = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with']);
function s(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, '');
}
function l(e) {
    return e.toLowerCase();
}
function c(e) {
    return a.has(e);
}
function u(e) {
    return 0 === e.length;
}
function d(e) {
    let t = new Set(r()(e.split(/\W+/)).map(s).reject(u).map(l).reject(c).map(o.$).value());
    return (e) =>
        (function e(t, n) {
            if (Array.isArray(t)) t.forEach((t) => e(t, n));
            else if ('string' == typeof t.content && 'codeBlock' !== t.type) {
                let e = [],
                    i = '';
                t.content.split(/(\W+)/g).forEach((t) => {
                    var r;
                    !u((r = l(s((r = t))))) && !c(r) && n.has((0, o.$)(r))
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
