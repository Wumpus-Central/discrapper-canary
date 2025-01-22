r.d(n, {
    S: function () {
        return d;
    }
});
var i = r(573654),
    a = r(778010),
    o = r(112457),
    s = r(603565);
function l(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function u(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function c(e, n, r) {
    return n && u(e.prototype, n), r && u(e, r), e;
}
var d = (function () {
    function e(n, r) {
        l(this, e), (this.store = n), (this.registry = r);
    }
    return (
        c(e, [
            {
                key: 'subscribeToStateChange',
                value: function (e) {
                    var n = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { handlerIds: void 0 },
                        a = r.handlerIds;
                    (0, i.k)('function' == typeof e, 'listener must be a function.'), (0, i.k)(void 0 === a || Array.isArray(a), 'handlerIds, when specified, must be an array of strings.');
                    var o = this.store.getState().stateId,
                        l = function () {
                            var r = n.store.getState(),
                                i = r.stateId;
                            try {
                                !(i === o || (i === o + 1 && !(0, s.co)(r.dirtyHandlerIds, a))) && e();
                            } finally {
                                o = i;
                            }
                        };
                    return this.store.subscribe(l);
                }
            },
            {
                key: 'subscribeToOffsetChange',
                value: function (e) {
                    var n = this;
                    (0, i.k)('function' == typeof e, 'listener must be a function.');
                    var r = this.store.getState().dragOffset,
                        a = function () {
                            var i = n.store.getState().dragOffset;
                            if (i !== r) (r = i), e();
                        };
                    return this.store.subscribe(a);
                }
            },
            {
                key: 'canDragSource',
                value: function (e) {
                    if (!e) return !1;
                    var n = this.registry.getSource(e);
                    return (0, i.k)(n, 'Expected to find a valid source. sourceId='.concat(e)), !this.isDragging() && n.canDrag(this, e);
                }
            },
            {
                key: 'canDropOnTarget',
                value: function (e) {
                    if (!e) return !1;
                    var n = this.registry.getTarget(e);
                    if (((0, i.k)(n, 'Expected to find a valid target. targetId='.concat(e)), !this.isDragging() || this.didDrop())) return !1;
                    var r = this.registry.getTargetType(e),
                        o = this.getItemType();
                    return (0, a.s)(r, o) && n.canDrop(this, e);
                }
            },
            {
                key: 'isDragging',
                value: function () {
                    return !!this.getItemType();
                }
            },
            {
                key: 'isDraggingSource',
                value: function (e) {
                    if (!e) return !1;
                    var n = this.registry.getSource(e, !0);
                    return (0, i.k)(n, 'Expected to find a valid source. sourceId='.concat(e)), !!(this.isDragging() && this.isSourcePublic()) && this.registry.getSourceType(e) === this.getItemType() && n.isDragging(this, e);
                }
            },
            {
                key: 'isOverTarget',
                value: function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shallow: !1 };
                    if (!e) return !1;
                    var r = n.shallow;
                    if (!this.isDragging()) return !1;
                    var i = this.registry.getTargetType(e),
                        o = this.getItemType();
                    if (o && !(0, a.s)(i, o)) return !1;
                    var s = this.getTargetIds();
                    if (!s.length) return !1;
                    var l = s.indexOf(e);
                    return r ? l === s.length - 1 : l > -1;
                }
            },
            {
                key: 'getItemType',
                value: function () {
                    return this.store.getState().dragOperation.itemType;
                }
            },
            {
                key: 'getItem',
                value: function () {
                    return this.store.getState().dragOperation.item;
                }
            },
            {
                key: 'getSourceId',
                value: function () {
                    return this.store.getState().dragOperation.sourceId;
                }
            },
            {
                key: 'getTargetIds',
                value: function () {
                    return this.store.getState().dragOperation.targetIds;
                }
            },
            {
                key: 'getDropResult',
                value: function () {
                    return this.store.getState().dragOperation.dropResult;
                }
            },
            {
                key: 'didDrop',
                value: function () {
                    return this.store.getState().dragOperation.didDrop;
                }
            },
            {
                key: 'isSourcePublic',
                value: function () {
                    return !!this.store.getState().dragOperation.isSourcePublic;
                }
            },
            {
                key: 'getInitialClientOffset',
                value: function () {
                    return this.store.getState().dragOffset.initialClientOffset;
                }
            },
            {
                key: 'getInitialSourceClientOffset',
                value: function () {
                    return this.store.getState().dragOffset.initialSourceClientOffset;
                }
            },
            {
                key: 'getClientOffset',
                value: function () {
                    return this.store.getState().dragOffset.clientOffset;
                }
            },
            {
                key: 'getSourceClientOffset',
                value: function () {
                    return (0, o.YY)(this.store.getState().dragOffset);
                }
            },
            {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                    return (0, o.ar)(this.store.getState().dragOffset);
                }
            }
        ]),
        e
    );
})();
