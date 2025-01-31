n.d(t, { S: () => c });
var i = n(573654),
    r = n(778010),
    a = n(112457),
    s = n(603565);
function o(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function l(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function u(e, t, n) {
    return t && l(e.prototype, t), n && l(e, n), e;
}
var c = (function () {
    function e(t, n) {
        o(this, e), (this.store = t), (this.registry = n);
    }
    return (
        u(e, [
            {
                key: 'subscribeToStateChange',
                value: function (e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { handlerIds: void 0 },
                        r = n.handlerIds;
                    (0, i.k)('function' == typeof e, 'listener must be a function.'), (0, i.k)(void 0 === r || Array.isArray(r), 'handlerIds, when specified, must be an array of strings.');
                    var a = this.store.getState().stateId,
                        o = function () {
                            var n = t.store.getState(),
                                i = n.stateId;
                            try {
                                i === a || (i === a + 1 && !(0, s.co)(n.dirtyHandlerIds, r)) || e();
                            } finally {
                                a = i;
                            }
                        };
                    return this.store.subscribe(o);
                }
            },
            {
                key: 'subscribeToOffsetChange',
                value: function (e) {
                    var t = this;
                    (0, i.k)('function' == typeof e, 'listener must be a function.');
                    var n = this.store.getState().dragOffset,
                        r = function () {
                            var i = t.store.getState().dragOffset;
                            i !== n && ((n = i), e());
                        };
                    return this.store.subscribe(r);
                }
            },
            {
                key: 'canDragSource',
                value: function (e) {
                    if (!e) return !1;
                    var t = this.registry.getSource(e);
                    return (0, i.k)(t, 'Expected to find a valid source. sourceId='.concat(e)), !this.isDragging() && t.canDrag(this, e);
                }
            },
            {
                key: 'canDropOnTarget',
                value: function (e) {
                    if (!e) return !1;
                    var t = this.registry.getTarget(e);
                    if (((0, i.k)(t, 'Expected to find a valid target. targetId='.concat(e)), !this.isDragging() || this.didDrop())) return !1;
                    var n = this.registry.getTargetType(e),
                        a = this.getItemType();
                    return (0, r.s)(n, a) && t.canDrop(this, e);
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
                    var t = this.registry.getSource(e, !0);
                    return (0, i.k)(t, 'Expected to find a valid source. sourceId='.concat(e)), !!(this.isDragging() && this.isSourcePublic()) && this.registry.getSourceType(e) === this.getItemType() && t.isDragging(this, e);
                }
            },
            {
                key: 'isOverTarget',
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shallow: !1 };
                    if (!e) return !1;
                    var n = t.shallow;
                    if (!this.isDragging()) return !1;
                    var i = this.registry.getTargetType(e),
                        a = this.getItemType();
                    if (a && !(0, r.s)(i, a)) return !1;
                    var s = this.getTargetIds();
                    if (!s.length) return !1;
                    var o = s.indexOf(e);
                    return n ? o === s.length - 1 : o > -1;
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
                    return (0, a.YY)(this.store.getState().dragOffset);
                }
            },
            {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                    return (0, a.ar)(this.store.getState().dragOffset);
                }
            }
        ]),
        e
    );
})();
