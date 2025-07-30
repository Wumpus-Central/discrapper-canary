(n.d(t, { nC: () => _ }), n(388685), n(704826), n(35282), n(539854));
var i = n(392711),
    r = n.n(i),
    l = n(697741),
    o = n(193995);
let s = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with']);
function a(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, '');
}
function c(e) {
    return e.toLowerCase();
}
function d(e) {
    return s.has(e);
}
function u(e) {
    return 0 === e.length;
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = new Set(
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.$;
                return r()(e.split(/\W+/)).map(a).reject(u).map(c).reject(d).map(t).value();
            })(e, t ? o.a : l.$)
        );
    return (e) =>
        (function e(t, n, i) {
            if (Array.isArray(t)) t.forEach((t) => e(t, n, i));
            else if ('string' == typeof t.content && 'codeBlock' !== t.type) {
                let e = [],
                    r = '';
                (t.content.split(/(\W+)/g).forEach((t) => {
                    !(function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (u((e = c(a(e)))) || d(e)) return !1;
                        if (n) {
                            for (let n of t.values()) if (e.includes(n)) return !0;
                            return !1;
                        }
                        return t.has((0, l.$)(e));
                    })(t, n, i)
                        ? (r += t)
                        : (r.length > 0 &&
                              e.push({
                                  type: 'text',
                                  content: r
                              }),
                          e.push({
                              type: 'highlight',
                              content: t
                          }),
                          (r = ''));
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
            } else null != t.content && e(t.content, n, i);
            return t;
        })(e, n, t);
}
