n.d(t, { p: () => u });
var r = n(573654);
function i(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function a(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r));
    }
}
function o(e, t, n) {
    return (t && a(e.prototype, t), n && a(e, n), e);
}
function s(e, t, n) {
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
var l = !1,
    c = !1,
    u = (function () {
        function e(t) {
            (i(this, e), s(this, 'internalMonitor', void 0), s(this, 'sourceId', null), (this.internalMonitor = t.getMonitor()));
        }
        return (
            o(e, [
                {
                    key: 'receiveHandlerId',
                    value: function (e) {
                        this.sourceId = e;
                    }
                },
                {
                    key: 'getHandlerId',
                    value: function () {
                        return this.sourceId;
                    }
                },
                {
                    key: 'canDrag',
                    value: function () {
                        (0, r.k)(!l, 'You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
                        try {
                            return ((l = !0), this.internalMonitor.canDragSource(this.sourceId));
                        } finally {
                            l = !1;
                        }
                    }
                },
                {
                    key: 'isDragging',
                    value: function () {
                        if (!this.sourceId) return !1;
                        (0, r.k)(!c, 'You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
                        try {
                            return ((c = !0), this.internalMonitor.isDraggingSource(this.sourceId));
                        } finally {
                            c = !1;
                        }
                    }
                },
                {
                    key: 'subscribeToStateChange',
                    value: function (e, t) {
                        return this.internalMonitor.subscribeToStateChange(e, t);
                    }
                },
                {
                    key: 'isDraggingSource',
                    value: function (e) {
                        return this.internalMonitor.isDraggingSource(e);
                    }
                },
                {
                    key: 'isOverTarget',
                    value: function (e, t) {
                        return this.internalMonitor.isOverTarget(e, t);
                    }
                },
                {
                    key: 'getTargetIds',
                    value: function () {
                        return this.internalMonitor.getTargetIds();
                    }
                },
                {
                    key: 'isSourcePublic',
                    value: function () {
                        return this.internalMonitor.isSourcePublic();
                    }
                },
                {
                    key: 'getSourceId',
                    value: function () {
                        return this.internalMonitor.getSourceId();
                    }
                },
                {
                    key: 'subscribeToOffsetChange',
                    value: function (e) {
                        return this.internalMonitor.subscribeToOffsetChange(e);
                    }
                },
                {
                    key: 'canDragSource',
                    value: function (e) {
                        return this.internalMonitor.canDragSource(e);
                    }
                },
                {
                    key: 'canDropOnTarget',
                    value: function (e) {
                        return this.internalMonitor.canDropOnTarget(e);
                    }
                },
                {
                    key: 'getItemType',
                    value: function () {
                        return this.internalMonitor.getItemType();
                    }
                },
                {
                    key: 'getItem',
                    value: function () {
                        return this.internalMonitor.getItem();
                    }
                },
                {
                    key: 'getDropResult',
                    value: function () {
                        return this.internalMonitor.getDropResult();
                    }
                },
                {
                    key: 'didDrop',
                    value: function () {
                        return this.internalMonitor.didDrop();
                    }
                },
                {
                    key: 'getInitialClientOffset',
                    value: function () {
                        return this.internalMonitor.getInitialClientOffset();
                    }
                },
                {
                    key: 'getInitialSourceClientOffset',
                    value: function () {
                        return this.internalMonitor.getInitialSourceClientOffset();
                    }
                },
                {
                    key: 'getSourceClientOffset',
                    value: function () {
                        return this.internalMonitor.getSourceClientOffset();
                    }
                },
                {
                    key: 'getClientOffset',
                    value: function () {
                        return this.internalMonitor.getClientOffset();
                    }
                },
                {
                    key: 'getDifferenceFromInitialOffset',
                    value: function () {
                        return this.internalMonitor.getDifferenceFromInitialOffset();
                    }
                }
            ]),
            e
        );
    })();
