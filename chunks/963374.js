(n.d(t, { nC: () => _ }), n(388685), n(704826), n(35282), n(539854));
var r = n(392711),
    i = n.n(r),
    l = n(697741),
    a = n(193995);
let o = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with']);
function s(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, '');
}
function c(e) {
    return e.toLowerCase();
}
function u(e) {
    return o.has(e);
}
function d(e) {
    return 0 === e.length;
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = new Set(
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.$;
                return i()(e.split(/\W+/)).map(s).reject(d).map(c).reject(u).map(t).value();
            })(e, t ? a.a : l.$)
        );
    return (e) =>
        (function e(t, n, r) {
            if (Array.isArray(t)) t.forEach((t) => e(t, n, r));
            else if ('string' == typeof t.content && 'codeBlock' !== t.type) {
                let e = [],
                    i = '';
                (t.content.split(/(\W+)/g).forEach((t) => {
                    !(function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (d((e = c(s(e)))) || u(e)) return !1;
                        if (n) {
                            for (let n of t.values()) if (e.includes(n)) return !0;
                            return !1;
                        }
                        return t.has((0, l.$)(e));
                    })(t, n, r)
                        ? (i += t)
                        : (i.length > 0 &&
                              e.push({
                                  type: 'text',
                                  content: i
                              }),
                          e.push({
                              type: 'highlight',
                              content: t
                          }),
                          (i = ''));
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
                              ])));
            } else null != t.content && e(t.content, n, r);
            return t;
        })(e, n, t);
}
