(n.d(t, { nC: () => h }), n(388685), n(704826), n(35282), n(539854));
var r = n(392711),
    i = n.n(r),
    a = n(697741),
    o = n(193995);
let s = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with']);
function l(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, '');
}
function c(e) {
    return e.toLowerCase();
}
function u(e) {
    return s.has(e);
}
function d(e) {
    return 0 === e.length;
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.$;
    return i()(e.split(/\W+/)).map(l).reject(d).map(c).reject(u).map(t).value();
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (d((e = c(l(e)))) || u(e)) return !1;
    if (n) {
        for (let n of t.values()) if (e.includes(n)) return !0;
        return !1;
    }
    return t.has((0, a.$)(e));
}
function p(e, t, n) {
    if (Array.isArray(e)) e.forEach((e) => p(e, t, n));
    else if ('string' == typeof e.content && 'codeBlock' !== e.type) {
        let r = [],
            i = '';
        (e.content.split(/(\W+)/g).forEach((e) => {
            _(e, t, n)
                ? (i.length > 0 &&
                      r.push({
                          type: 'text',
                          content: i
                      }),
                  r.push({
                      type: 'highlight',
                      content: e
                  }),
                  (i = ''))
                : (i += e);
        }),
            r.length > 0 &&
                (i.length > 0 &&
                    r.push({
                        type: 'text',
                        content: i
                    }),
                'text' === e.type
                    ? (e.content = r)
                    : (e.content = [
                          {
                              type: 'text',
                              content: r
                          }
                      ])));
    } else null != e.content && p(e.content, t, n);
    return e;
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = new Set(f(e, t ? o.a : a.$));
    return (e) => p(e, n, t);
}
