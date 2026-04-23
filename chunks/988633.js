"use strict";
n.d(t, { W: () => o });
var r = n(321733),
    i = n(294292),
    s = n(522311),
    a = n(441870),
    o = (function () {
        var e;
        function t(e, n) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (this.store = e), (this.registry = n);
        }
        return (
            (e = [
                {
                    key: "subscribeToStateChange",
                    value: function (e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { handlerIds: void 0 },
                            i = n.handlerIds;
                        (0, r.V)("function" == typeof e, "listener must be a function."),
                            (0, r.V)(
                                void 0 === i || Array.isArray(i),
                                "handlerIds, when specified, must be an array of strings.",
                            );
                        var s = this.store.getState().stateId;
                        return this.store.subscribe(function () {
                            var n = t.store.getState(),
                                r = n.stateId;
                            try {
                                r !== s && (r !== s + 1 || (0, a.Dk)(n.dirtyHandlerIds, i)) && e();
                            } finally {
                                s = r;
                            }
                        });
                    },
                },
                {
                    key: "subscribeToOffsetChange",
                    value: function (e) {
                        var t = this;
                        (0, r.V)("function" == typeof e, "listener must be a function.");
                        var n = this.store.getState().dragOffset;
                        return this.store.subscribe(function () {
                            var r = t.store.getState().dragOffset;
                            r !== n && ((n = r), e());
                        });
                    },
                },
                {
                    key: "canDragSource",
                    value: function (e) {
                        if (!e) return !1;
                        var t = this.registry.getSource(e);
                        return (
                            (0, r.V)(t, "Expected to find a valid source. sourceId=".concat(e)),
                            !this.isDragging() && t.canDrag(this, e)
                        );
                    },
                },
                {
                    key: "canDropOnTarget",
                    value: function (e) {
                        if (!e) return !1;
                        var t = this.registry.getTarget(e);
                        if (
                            ((0, r.V)(t, "Expected to find a valid target. targetId=".concat(e)),
                            !this.isDragging() || this.didDrop())
                        )
                            return !1;
                        var n = this.registry.getTargetType(e),
                            s = this.getItemType();
                        return (0, i.k)(n, s) && t.canDrop(this, e);
                    },
                },
                {
                    key: "isDragging",
                    value: function () {
                        return !!this.getItemType();
                    },
                },
                {
                    key: "isDraggingSource",
                    value: function (e) {
                        if (!e) return !1;
                        var t = this.registry.getSource(e, !0);
                        return (
                            (0, r.V)(t, "Expected to find a valid source. sourceId=".concat(e)),
                            !!this.isDragging() &&
                                !!this.isSourcePublic() &&
                                this.registry.getSourceType(e) === this.getItemType() &&
                                t.isDragging(this, e)
                        );
                    },
                },
                {
                    key: "isOverTarget",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shallow: !1 };
                        if (!e) return !1;
                        var n = t.shallow;
                        if (!this.isDragging()) return !1;
                        var r = this.registry.getTargetType(e),
                            s = this.getItemType();
                        if (s && !(0, i.k)(r, s)) return !1;
                        var a = this.getTargetIds();
                        if (!a.length) return !1;
                        var o = a.indexOf(e);
                        return n ? o === a.length - 1 : o > -1;
                    },
                },
                {
                    key: "getItemType",
                    value: function () {
                        return this.store.getState().dragOperation.itemType;
                    },
                },
                {
                    key: "getItem",
                    value: function () {
                        return this.store.getState().dragOperation.item;
                    },
                },
                {
                    key: "getSourceId",
                    value: function () {
                        return this.store.getState().dragOperation.sourceId;
                    },
                },
                {
                    key: "getTargetIds",
                    value: function () {
                        return this.store.getState().dragOperation.targetIds;
                    },
                },
                {
                    key: "getDropResult",
                    value: function () {
                        return this.store.getState().dragOperation.dropResult;
                    },
                },
                {
                    key: "didDrop",
                    value: function () {
                        return this.store.getState().dragOperation.didDrop;
                    },
                },
                {
                    key: "isSourcePublic",
                    value: function () {
                        return !!this.store.getState().dragOperation.isSourcePublic;
                    },
                },
                {
                    key: "getInitialClientOffset",
                    value: function () {
                        return this.store.getState().dragOffset.initialClientOffset;
                    },
                },
                {
                    key: "getInitialSourceClientOffset",
                    value: function () {
                        return this.store.getState().dragOffset.initialSourceClientOffset;
                    },
                },
                {
                    key: "getClientOffset",
                    value: function () {
                        return this.store.getState().dragOffset.clientOffset;
                    },
                },
                {
                    key: "getSourceClientOffset",
                    value: function () {
                        return (0, s.kO)(this.store.getState().dragOffset);
                    },
                },
                {
                    key: "getDifferenceFromInitialOffset",
                    value: function () {
                        return (0, s.ne)(this.store.getState().dragOffset);
                    },
                },
            ]),
            (function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            })(t.prototype, e),
            t
        );
    })();
