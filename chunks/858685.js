!(function (e, n) {
    if ('IntersectionObserver' in e && 'IntersectionObserverEntry' in e && 'intersectionRatio' in e.IntersectionObserverEntry.prototype) {
        !('isIntersecting' in e.IntersectionObserverEntry.prototype) &&
            Object.defineProperty(e.IntersectionObserverEntry.prototype, 'isIntersecting', {
                get: function () {
                    return this.intersectionRatio > 0;
                }
            });
        return;
    }
    var r = [];
    function i(e) {
        (this.time = e.time), (this.target = e.target), (this.rootBounds = e.rootBounds), (this.boundingClientRect = e.boundingClientRect), (this.intersectionRect = e.intersectionRect || f()), (this.isIntersecting = !!e.intersectionRect);
        var n = this.boundingClientRect,
            r = n.width * n.height,
            i = this.intersectionRect,
            a = i.width * i.height;
        r ? (this.intersectionRatio = a / r) : (this.intersectionRatio = this.isIntersecting ? 1 : 0);
    }
    function a(e, n) {
        var r = n || {};
        if ('function' != typeof e) throw Error('callback must be a function');
        if (r.root && 1 != r.root.nodeType) throw Error('root must be an Element');
        (this._checkForIntersections = s(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT)),
            (this._callback = e),
            (this._observationTargets = []),
            (this._queuedEntries = []),
            (this._rootMarginValues = this._parseRootMargin(r.rootMargin)),
            (this.thresholds = this._initThresholds(r.threshold)),
            (this.root = r.root || null),
            (this.rootMargin = this._rootMarginValues
                .map(function (e) {
                    return e.value + e.unit;
                })
                .join(' '));
    }
    function o() {
        return e.performance && performance.now && performance.now();
    }
    function s(e, n) {
        var r = null;
        return function () {
            !r &&
                (r = setTimeout(function () {
                    e(), (r = null);
                }, n));
        };
    }
    function l(e, n, r, i) {
        'function' == typeof e.addEventListener ? e.addEventListener(n, r, i || !1) : 'function' == typeof e.attachEvent && e.attachEvent('on' + n, r);
    }
    function u(e, n, r, i) {
        'function' == typeof e.removeEventListener ? e.removeEventListener(n, r, i || !1) : 'function' == typeof e.detatchEvent && e.detatchEvent('on' + n, r);
    }
    function c(e, n) {
        var r = Math.max(e.top, n.top),
            i = Math.min(e.bottom, n.bottom),
            a = Math.max(e.left, n.left),
            o = Math.min(e.right, n.right),
            s = o - a,
            l = i - r;
        return (
            s >= 0 &&
            l >= 0 && {
                top: r,
                bottom: i,
                left: a,
                right: o,
                width: s,
                height: l
            }
        );
    }
    function d(e) {
        var n;
        try {
            n = e.getBoundingClientRect();
        } catch (e) {}
        return n
            ? (!(n.width && n.height) &&
                  (n = {
                      top: n.top,
                      right: n.right,
                      bottom: n.bottom,
                      left: n.left,
                      width: n.right - n.left,
                      height: n.bottom - n.top
                  }),
              n)
            : f();
    }
    function f() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        };
    }
    function p(e, n) {
        for (var r = n; r; ) {
            if (r == e) return !0;
            r = h(r);
        }
        return !1;
    }
    function h(e) {
        var n = e.parentNode;
        return n && 11 == n.nodeType && n.host ? n.host : n;
    }
    (a.prototype.THROTTLE_TIMEOUT = 100),
        (a.prototype.POLL_INTERVAL = null),
        (a.prototype.USE_MUTATION_OBSERVER = !0),
        (a.prototype.observe = function (e) {
            if (
                !this._observationTargets.some(function (n) {
                    return n.element == e;
                })
            ) {
                if (!(e && 1 == e.nodeType)) throw Error('target must be an Element');
                this._registerInstance(),
                    this._observationTargets.push({
                        element: e,
                        entry: null
                    }),
                    this._monitorIntersections(),
                    this._checkForIntersections();
            }
        }),
        (a.prototype.unobserve = function (e) {
            (this._observationTargets = this._observationTargets.filter(function (n) {
                return n.element != e;
            })),
                !this._observationTargets.length && (this._unmonitorIntersections(), this._unregisterInstance());
        }),
        (a.prototype.disconnect = function () {
            (this._observationTargets = []), this._unmonitorIntersections(), this._unregisterInstance();
        }),
        (a.prototype.takeRecords = function () {
            var e = this._queuedEntries.slice();
            return (this._queuedEntries = []), e;
        }),
        (a.prototype._initThresholds = function (e) {
            var n = e || [0];
            return (
                !Array.isArray(n) && (n = [n]),
                n.sort().filter(function (e, n, r) {
                    if ('number' != typeof e || isNaN(e) || e < 0 || e > 1) throw Error('threshold must be a number between 0 and 1 inclusively');
                    return e !== r[n - 1];
                })
            );
        }),
        (a.prototype._parseRootMargin = function (e) {
            var n = (e || '0px').split(/\s+/).map(function (e) {
                var n = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                if (!n) throw Error('rootMargin must be specified in pixels or percent');
                return {
                    value: parseFloat(n[1]),
                    unit: n[2]
                };
            });
            return (n[1] = n[1] || n[0]), (n[2] = n[2] || n[0]), (n[3] = n[3] || n[1]), n;
        }),
        (a.prototype._monitorIntersections = function () {
            !this._monitoringIntersections &&
                ((this._monitoringIntersections = !0),
                this.POLL_INTERVAL
                    ? (this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL))
                    : (l(e, 'resize', this._checkForIntersections, !0),
                      l(n, 'scroll', this._checkForIntersections, !0),
                      this.USE_MUTATION_OBSERVER &&
                          'MutationObserver' in e &&
                          ((this._domObserver = new MutationObserver(this._checkForIntersections)),
                          this._domObserver.observe(n, {
                              attributes: !0,
                              childList: !0,
                              characterData: !0,
                              subtree: !0
                          }))));
        }),
        (a.prototype._unmonitorIntersections = function () {
            this._monitoringIntersections && ((this._monitoringIntersections = !1), clearInterval(this._monitoringInterval), (this._monitoringInterval = null), u(e, 'resize', this._checkForIntersections, !0), u(n, 'scroll', this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), (this._domObserver = null)));
        }),
        (a.prototype._checkForIntersections = function () {
            var e = this._rootIsInDom(),
                n = e ? this._getRootRect() : f();
            this._observationTargets.forEach(function (r) {
                var a = r.element,
                    s = d(a),
                    l = this._rootContainsTarget(a),
                    u = r.entry,
                    c = e && l && this._computeTargetAndRootIntersection(a, n),
                    f = (r.entry = new i({
                        time: o(),
                        target: a,
                        boundingClientRect: s,
                        rootBounds: n,
                        intersectionRect: c
                    }));
                u ? (e && l ? this._hasCrossedThreshold(u, f) && this._queuedEntries.push(f) : u && u.isIntersecting && this._queuedEntries.push(f)) : this._queuedEntries.push(f);
            }, this),
                this._queuedEntries.length && this._callback(this.takeRecords(), this);
        }),
        (a.prototype._computeTargetAndRootIntersection = function (r, i) {
            if ('none' != e.getComputedStyle(r).display) {
                for (var a = d(r), o = a, s = h(r), l = !1; !l; ) {
                    var u = null,
                        f = 1 == s.nodeType ? e.getComputedStyle(s) : {};
                    if ('none' == f.display) return;
                    if ((s == this.root || s == n ? ((l = !0), (u = i)) : s != n.body && s != n.documentElement && 'visible' != f.overflow && (u = d(s)), u && !(o = c(u, o)))) break;
                    s = h(s);
                }
                return o;
            }
        }),
        (a.prototype._getRootRect = function () {
            var e;
            if (this.root) e = d(this.root);
            else {
                var r = n.documentElement,
                    i = n.body;
                e = {
                    top: 0,
                    left: 0,
                    right: r.clientWidth || i.clientWidth,
                    width: r.clientWidth || i.clientWidth,
                    bottom: r.clientHeight || i.clientHeight,
                    height: r.clientHeight || i.clientHeight
                };
            }
            return this._expandRectByRootMargin(e);
        }),
        (a.prototype._expandRectByRootMargin = function (e) {
            var n = this._rootMarginValues.map(function (n, r) {
                    return 'px' == n.unit ? n.value : (n.value * (r % 2 ? e.width : e.height)) / 100;
                }),
                r = {
                    top: e.top - n[0],
                    right: e.right + n[1],
                    bottom: e.bottom + n[2],
                    left: e.left - n[3]
                };
            return (r.width = r.right - r.left), (r.height = r.bottom - r.top), r;
        }),
        (a.prototype._hasCrossedThreshold = function (e, n) {
            var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                i = n.isIntersecting ? n.intersectionRatio || 0 : -1;
            if (r !== i)
                for (var a = 0; a < this.thresholds.length; a++) {
                    var o = this.thresholds[a];
                    if (o == r || o == i || o < r != o < i) return !0;
                }
        }),
        (a.prototype._rootIsInDom = function () {
            return !this.root || p(n, this.root);
        }),
        (a.prototype._rootContainsTarget = function (e) {
            return p(this.root || n, e);
        }),
        (a.prototype._registerInstance = function () {
            0 > r.indexOf(this) && r.push(this);
        }),
        (a.prototype._unregisterInstance = function () {
            var e = r.indexOf(this);
            -1 != e && r.splice(e, 1);
        }),
        (e.IntersectionObserver = a),
        (e.IntersectionObserverEntry = i);
})(window, document);
