var r = n(381538);
function i(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function o(e, t) {
    ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t));
}
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var s = n(846434),
    l = n(73800),
    c = n(581079),
    u = n(318720),
    d = n(609627).setDraftEditorSelection;
e.exports = (function (e) {
    function t() {
        for (var t, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return (a(i((t = e.call.apply(e, [this].concat(r)) || this)), 'leaf', void 0), t);
    }
    o(t, e);
    var n = t.prototype;
    return (
        (n._setSelection = function () {
            var e,
                t = this.props.selection;
            if (null != t && t.getHasFocus()) {
                var n = this.props,
                    r = n.block,
                    i = n.start,
                    o = n.text,
                    a = r.getKey(),
                    s = i + o.length;
                if (t.hasEdgeWithin(a, i, s)) {
                    var l = this.leaf;
                    l || c(!1);
                    var f = l.firstChild;
                    (f || c(!1), f.nodeType === Node.TEXT_NODE ? (e = f) : u(f) ? (e = l) : (e = f.firstChild) || c(!1), d(t, e, a, i, s));
                }
            }
        }),
        (n.shouldComponentUpdate = function (e) {
            var t = this.leaf;
            return (t || c(!1), t.textContent !== e.text || e.styleSet !== this.props.styleSet || e.forceSelection);
        }),
        (n.componentDidUpdate = function () {
            this._setSelection();
        }),
        (n.componentDidMount = function () {
            this._setSelection();
        }),
        (n.render = function () {
            var e = this,
                t = this.props.block,
                n = this.props.text;
            n.endsWith('\n') && this.props.isLast && (n += '\n');
            var i = this.props,
                o = i.customStyleMap,
                a = i.customStyleFn,
                c = i.offsetKey,
                u = i.styleSet,
                d = u.reduce(function (e, t) {
                    var n = {},
                        i = o[t];
                    return (void 0 !== i && e.textDecoration !== i.textDecoration && (n.textDecoration = [e.textDecoration, i.textDecoration].join(' ').trim()), r(e, i, n));
                }, {});
            return (
                a && (d = r(d, a(u, t))),
                l.createElement(
                    'span',
                    {
                        'data-offset-key': c,
                        ref: function (t) {
                            return (e.leaf = t);
                        },
                        style: d
                    },
                    l.createElement(s, null, n)
                )
            );
        }),
        t
    );
})(l.Component);
