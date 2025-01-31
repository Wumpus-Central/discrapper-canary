function o() {
    var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
    null != e && this.setState(e);
}
function r(e) {
    this.setState(
        function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null != n ? n : null;
        }.bind(this)
    );
}
function i(e, t) {
    try {
        var n = this.props,
            o = this.state;
        (this.props = e), (this.state = t), (this.__reactInternalSnapshotFlag = !0), (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, o));
    } finally {
        (this.props = n), (this.state = o);
    }
}
function a(e) {
    var t = e.prototype;
    if (!t || !t.isReactComponent) throw Error('Can only polyfill class components');
    if ('function' != typeof e.getDerivedStateFromProps && 'function' != typeof t.getSnapshotBeforeUpdate) return e;
    var n = null,
        a = null,
        u = null;
    if (('function' == typeof t.componentWillMount ? (n = 'componentWillMount') : 'function' == typeof t.UNSAFE_componentWillMount && (n = 'UNSAFE_componentWillMount'), 'function' == typeof t.componentWillReceiveProps ? (a = 'componentWillReceiveProps') : 'function' == typeof t.UNSAFE_componentWillReceiveProps && (a = 'UNSAFE_componentWillReceiveProps'), 'function' == typeof t.componentWillUpdate ? (u = 'componentWillUpdate') : 'function' == typeof t.UNSAFE_componentWillUpdate && (u = 'UNSAFE_componentWillUpdate'), null !== n || null !== a || null !== u)) throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + (e.displayName || e.name) + ' uses ' + ('function' == typeof e.getDerivedStateFromProps ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()') + ' but also contains the following legacy lifecycles:' + (null !== n ? '\n  ' + n : '') + (null !== a ? '\n  ' + a : '') + (null !== u ? '\n  ' + u : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks');
    if (('function' == typeof e.getDerivedStateFromProps && ((t.componentWillMount = o), (t.componentWillReceiveProps = r)), 'function' == typeof t.getSnapshotBeforeUpdate)) {
        if ('function' != typeof t.componentDidUpdate) throw Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
        t.componentWillUpdate = i;
        var s = t.componentDidUpdate;
        t.componentDidUpdate = function (e, t, n) {
            var o = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
            s.call(this, e, t, o);
        };
    }
    return e;
}
n.r(t), n.d(t, { polyfill: () => a }), (o.__suppressDeprecationWarning = !0), (r.__suppressDeprecationWarning = !0), (i.__suppressDeprecationWarning = !0);
