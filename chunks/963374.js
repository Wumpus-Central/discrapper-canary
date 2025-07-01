(n.d(t, { nC: () => d }), n(388685), n(704826), n(35282), n(539854));
var r = n(392711),
    l = n.n(r),
    i = n(697741);
let s = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with']);
function a(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, '');
}
function o(e) {
    return e.toLowerCase();
}
function u(e) {
    return s.has(e);
}
function c(e) {
    return 0 === e.length;
}
function d(e) {
    let t = new Set(l()(e.split(/\W+/)).map(a).reject(c).map(o).reject(u).map(i.$).value());
    return (e) =>
        (function e(t, n) {
            if (Array.isArray(t)) t.forEach((t) => e(t, n));
            else if ('string' == typeof t.content && 'codeBlock' !== t.type) {
                let e = [],
                    r = '';
                (t.content.split(/(\W+)/g).forEach((t) => {
                    var l;
                    !c((l = o(a((l = t))))) && !u(l) && n.has((0, i.$)(l))
                        ? (r.length > 0 &&
                              e.push({
                                  type: 'text',
                                  content: r
                              }),
                          e.push({
                              type: 'highlight',
                              content: t
                          }),
                          (r = ''))
                        : (r += t);
                }),
                    e.length > 0 &&
                        (r.length > 0 &&
                            e.push({
                                type: 'text',
                                content: r
                            }),
                        'text' === t.type
                            ? (t.content = e)
                            : (t.content = [
                                  {
                                      type: 'text',
                                      content: e
                                  }
                              ])));
            } else null != t.content && e(t.content, n);
            return t;
        })(e, t);
}
