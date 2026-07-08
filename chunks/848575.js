t.d(n, { P: () => s });
var a = t(816885),
    r = t(611886),
    i = t(251874);
function u(e, n, t) {
    return (
        n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t),
        e
    );
}
var s = (function () {
    var e;
    function n(e) {
        var t = this;
        if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
        u(
            this,
            "hooks",
            (0, r.i)({
                dropTarget: function (e, n) {
                    t.clearDropTarget(),
                        (t.dropTargetOptions = n),
                        (0, i.i)(e) ? (t.dropTargetRef = e) : (t.dropTargetNode = e),
                        t.reconnect();
                },
            }),
        ),
            u(this, "handlerId", null),
            u(this, "dropTargetRef", null),
            u(this, "dropTargetNode", void 0),
            u(this, "dropTargetOptionsInternal", null),
            u(this, "unsubscribeDropTarget", void 0),
            u(this, "lastConnectedHandlerId", null),
            u(this, "lastConnectedDropTarget", null),
            u(this, "lastConnectedDropTargetOptions", null),
            u(this, "backend", void 0),
            (this.backend = e);
    }
    return (
        (e = [
            {
                key: "connectTarget",
                get: function () {
                    return this.dropTarget;
                },
            },
            {
                key: "reconnect",
                value: function () {
                    var e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
                    e && this.disconnectDropTarget();
                    var n = this.dropTarget;
                    if (this.handlerId) {
                        if (!n) {
                            this.lastConnectedDropTarget = n;
                            return;
                        }
                        e &&
                            ((this.lastConnectedHandlerId = this.handlerId),
                            (this.lastConnectedDropTarget = n),
                            (this.lastConnectedDropTargetOptions = this.dropTargetOptions),
                            (this.unsubscribeDropTarget = this.backend.connectDropTarget(
                                this.handlerId,
                                n,
                                this.dropTargetOptions,
                            )));
                    }
                },
            },
            {
                key: "receiveHandlerId",
                value: function (e) {
                    e !== this.handlerId && ((this.handlerId = e), this.reconnect());
                },
            },
            {
                key: "dropTargetOptions",
                get: function () {
                    return this.dropTargetOptionsInternal;
                },
                set: function (e) {
                    this.dropTargetOptionsInternal = e;
                },
            },
            {
                key: "didHandlerIdChange",
                value: function () {
                    return this.lastConnectedHandlerId !== this.handlerId;
                },
            },
            {
                key: "didDropTargetChange",
                value: function () {
                    return this.lastConnectedDropTarget !== this.dropTarget;
                },
            },
            {
                key: "didOptionsChange",
                value: function () {
                    return !(0, a.b)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
                },
            },
            {
                key: "disconnectDropTarget",
                value: function () {
                    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), (this.unsubscribeDropTarget = void 0));
                },
            },
            {
                key: "dropTarget",
                get: function () {
                    return this.dropTargetNode || (this.dropTargetRef && this.dropTargetRef.current);
                },
            },
            {
                key: "clearDropTarget",
                value: function () {
                    (this.dropTargetRef = null), (this.dropTargetNode = null);
                },
            },
        ]),
        (function (e, n) {
            for (var t = 0; t < n.length; t++) {
                var a = n[t];
                (a.enumerable = a.enumerable || !1),
                    (a.configurable = !0),
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a);
            }
        })(n.prototype, e),
        n
    );
})();
