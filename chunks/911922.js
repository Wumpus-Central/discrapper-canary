r.d(t, { a: () => u });
var n = r(573654),
    o = r(670543);
function i(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
var a = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'],
    s = ['beginDrag'],
    c = (function () {
        var e;
        function t(e, r, n) {
            var o = this;
            if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
            i(this, 'props', null),
                i(this, 'spec', void 0),
                i(this, 'monitor', void 0),
                i(this, 'ref', void 0),
                i(this, 'beginDrag', function () {
                    if (o.props) return o.spec.beginDrag(o.props, o.monitor, o.ref.current);
                }),
                (this.spec = e),
                (this.monitor = r),
                (this.ref = n);
        }
        return (
            (e = [
                {
                    key: 'receiveProps',
                    value: function (e) {
                        this.props = e;
                    }
                },
                {
                    key: 'canDrag',
                    value: function () {
                        return !!this.props && (!this.spec.canDrag || this.spec.canDrag(this.props, this.monitor));
                    }
                },
                {
                    key: 'isDragging',
                    value: function (e, t) {
                        return !!this.props && (this.spec.isDragging ? this.spec.isDragging(this.props, this.monitor) : t === e.getSourceId());
                    }
                },
                {
                    key: 'endDrag',
                    value: function () {
                        this.props && this.spec.endDrag && this.spec.endDrag(this.props, this.monitor, (0, o.Al)(this.ref));
                    }
                }
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            })(t.prototype, e),
            t
        );
    })();
function u(e) {
    return (
        Object.keys(e).forEach(function (t) {
            (0, n.k)(a.indexOf(t) > -1, 'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', a.join(', '), t), (0, n.k)('function' == typeof e[t], 'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t, t, e[t]);
        }),
        s.forEach(function (t) {
            (0, n.k)('function' == typeof e[t], 'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t, t, e[t]);
        }),
        function (t, r) {
            return new c(e, t, r);
        }
    );
}
