function r(e, t, r, n) {
    var o = [],
        a = {},
        s = {},
        l = {};
    return function u(c) {
        (a[c] = !0), o.push(c), (l[c] = !0);
        for (let t = 0; t < e[c].length; t++) {
            let r = e[c][t];
            if (a[r]) {
                if (l[r] && (o.push(r), !n)) throw new i(o);
            } else u(r);
        }
        o.pop(), delete l[c], (t && 0 !== e[c].length) || s[c] || (r.push(c), (s[c] = !0));
    };
}
var n = (t.DepGraph = function (e) {
    (this.nodes = {}), (this.outgoingEdges = {}), (this.incomingEdges = {}), (this.circular = e && !!e.circular);
});
n.prototype = {
    size: function () {
        return Object.keys(this.nodes).length;
    },
    addNode: function (e, t) {
        this.hasNode(e) ||
            (2 == arguments.length ? (this.nodes[e] = t) : (this.nodes[e] = e),
            (this.outgoingEdges[e] = []),
            (this.incomingEdges[e] = []));
    },
    removeNode: function (e) {
        this.hasNode(e) &&
            (delete this.nodes[e],
            delete this.outgoingEdges[e],
            delete this.incomingEdges[e],
            [this.incomingEdges, this.outgoingEdges].forEach(function (t) {
                Object.keys(t).forEach(function (r) {
                    var n = t[r].indexOf(e);
                    n >= 0 && t[r].splice(n, 1);
                }, this);
            }));
    },
    hasNode: function (e) {
        return this.nodes.hasOwnProperty(e);
    },
    getNodeData: function (e) {
        if (this.hasNode(e)) return this.nodes[e];
        throw Error("Node does not exist: " + e);
    },
    setNodeData: function (e, t) {
        if (this.hasNode(e)) this.nodes[e] = t;
        else throw Error("Node does not exist: " + e);
    },
    addDependency: function (e, t) {
        if (!this.hasNode(e)) throw Error("Node does not exist: " + e);
        if (!this.hasNode(t)) throw Error("Node does not exist: " + t);
        return (
            -1 === this.outgoingEdges[e].indexOf(t) && this.outgoingEdges[e].push(t),
            -1 === this.incomingEdges[t].indexOf(e) && this.incomingEdges[t].push(e),
            !0
        );
    },
    removeDependency: function (e, t) {
        var r;
        this.hasNode(e) && (r = this.outgoingEdges[e].indexOf(t)) >= 0 && this.outgoingEdges[e].splice(r, 1),
            this.hasNode(t) && (r = this.incomingEdges[t].indexOf(e)) >= 0 && this.incomingEdges[t].splice(r, 1);
    },
    clone: function () {
        var e = this,
            t = new n();
        return (
            Object.keys(e.nodes).forEach(function (r) {
                (t.nodes[r] = e.nodes[r]),
                    (t.outgoingEdges[r] = e.outgoingEdges[r].slice(0)),
                    (t.incomingEdges[r] = e.incomingEdges[r].slice(0));
            }),
            t
        );
    },
    dependenciesOf: function (e, t) {
        if (this.hasNode(e)) {
            var n = [];
            r(this.outgoingEdges, t, n, this.circular)(e);
            var i = n.indexOf(e);
            return i >= 0 && n.splice(i, 1), n;
        }
        throw Error("Node does not exist: " + e);
    },
    dependantsOf: function (e, t) {
        if (this.hasNode(e)) {
            var n = [];
            r(this.incomingEdges, t, n, this.circular)(e);
            var i = n.indexOf(e);
            return i >= 0 && n.splice(i, 1), n;
        }
        throw Error("Node does not exist: " + e);
    },
    overallOrder: function (e) {
        var t = this,
            n = [],
            i = Object.keys(this.nodes);
        if (0 === i.length) return n;
        var o = r(this.outgoingEdges, !1, [], this.circular);
        i.forEach(function (e) {
            o(e);
        });
        var a = r(this.outgoingEdges, e, n, this.circular);
        return (
            i
                .filter(function (e) {
                    return 0 === t.incomingEdges[e].length;
                })
                .forEach(function (e) {
                    a(e);
                }),
            n
        );
    },
};
var i = function (e) {
    var t = Error("Dependency Cycle Found: " + e.join(" -> "));
    return (
        (t.cyclePath = e),
        Object.setPrototypeOf(t, Object.getPrototypeOf(this)),
        Error.captureStackTrace && Error.captureStackTrace(t, i),
        t
    );
};
(i.prototype = Object.create(Error.prototype, {
    constructor: { value: Error, enumerable: !1, writable: !0, configurable: !0 },
})),
    Object.setPrototypeOf(i, Error);
