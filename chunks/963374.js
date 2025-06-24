i.d(e, { nC: () => c }), i(388685), i(704826), i(35282), i(539854);
var n = i(392711),
    r = i.n(n),
    s = i(697741);
let o = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with']);
function l(t) {
    return t.replace(/('|\u2019|\uFF07)(s|S)$/, '');
}
function a(t) {
    return t.toLowerCase();
}
function d(t) {
    return o.has(t);
}
function u(t) {
    return 0 === t.length;
}
function c(t) {
    let e = new Set(r()(t.split(/\W+/)).map(l).reject(u).map(a).reject(d).map(s.$).value());
    return (t) =>
        (function t(e, i) {
            if (Array.isArray(e)) e.forEach((e) => t(e, i));
            else if ('string' == typeof e.content && 'codeBlock' !== e.type) {
                let t = [],
                    n = '';
                e.content.split(/(\W+)/g).forEach((e) => {
                    var r;
                    !u((r = a(l((r = e))))) && !d(r) && i.has((0, s.$)(r))
                        ? (n.length > 0 &&
                              t.push({
                                  type: 'text',
                                  content: n
                              }),
                          t.push({
                              type: 'highlight',
                              content: e
                          }),
                          (n = ''))
                        : (n += e);
                }),
                    t.length > 0 &&
                        (n.length > 0 &&
                            t.push({
                                type: 'text',
                                content: n
                            }),
                        'text' === e.type
                            ? (e.content = t)
                            : (e.content = [
                                  {
                                      type: 'text',
                                      content: t
                                  }
                              ]));
            } else null != e.content && t(e.content, i);
            return e;
        })(t, e);
}
