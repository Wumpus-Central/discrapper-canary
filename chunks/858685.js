!(function (e, t) {
    if ('IntersectionObserver' in e && 'IntersectionObserverEntry' in e && 'intersectionRatio' in e.IntersectionObserverEntry.prototype) {
        'isIntersecting' in e.IntersectionObserverEntry.prototype ||
            Object.defineProperty(e.IntersectionObserverEntry.prototype, 'isIntersecting', {
                get: function () {
                    return this.intersectionRatio > 0;
                }
            });
        return;
    }
    var n = [];
    function r(e) {
        (this.time = e.time), (this.target = e.target), (this.rootBounds = e.rootBounds), (this.boundingClientRect = e.boundingClientRect), (this.intersectionRect = e.intersectionRect || d()), (this.isIntersecting = !!e.intersectionRect);
        var t = this.boundingClientRect,
            n = t.width * t.height,
            r = this.intersectionRect,
            i = r.width * r.height;
        n ? (this.intersectionRatio = i / n) : (this.intersectionRatio = +!!this.isIntersecting);
    }
    function i(e, t) {
        var n = t || {};
        if ('function' != typeof e) throw Error('callback must be a function');
        if (n.root && 1 != n.root.nodeType) throw Error('root must be an Element');
        (this._checkForIntersections = a(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT)),
            (this._callback = e),
            (this._observationTargets = []),
            (this._queuedEntries = []),
            (this._rootMarginValues = this._parseRootMargin(n.rootMargin)),
            (this.thresholds = this._initThresholds(n.threshold)),
            (this.root = n.root || null),
            (this.rootMargin = this._rootMarginValues
                .map(function (e) {
                    return e.value + e.unit;
                })
                .join(' '));
    }
    function o() {
        return e.performance && performance.now && performance.now();
    }
    function a(e, t) {
        var n = null;
        return function () {
            n ||
                (n = setTimeout(function () {
                    e(), (n = null);
                }, t));
        };
    }
    function s(e, t, n, r) {
        'function' == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : 'function' == typeof e.attachEvent && e.attachEvent('on' + t, n);
    }
    function l(e, t, n, r) {
        'function' == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : 'function' == typeof e.detatchEvent && e.detatchEvent('on' + t, n);
    }
    function c(e, t) {
        var n = Math.max(e.top, t.top),
            r = Math.min(e.bottom, t.bottom),
            i = Math.max(e.left, t.left),
            o = Math.min(e.right, t.right),
            a = o - i,
            s = r - n;
        return (
            a >= 0 &&
            s >= 0 && {
                top: n,
                bottom: r,
                left: i,
                right: o,
                width: a,
                height: s
            }
        );
    }
    function u(e) {
        var t;
        try {
            t = e.getBoundingClientRect();
        } catch (e) {}
        return t
            ? ((t.width && t.height) ||
                  (t = {
                      top: t.top,
                      right: t.right,
                      bottom: t.bottom,
                      left: t.left,
                      width: t.right - t.left,
                      height: t.bottom - t.top
                  }),
              t)
            : d();
    }
    function d() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        };
    }
    function f(e, t) {
        for (var n = t; n; ) {
            if (n == e) return !0;
            n = _(n);
        }
        return !1;
    }
    function _(e) {
        var t = e.parentNode;
        return t && 11 == t.nodeType && t.host ? t.host : t;
    }
    (i.prototype.THROTTLE_TIMEOUT = 100),
        (i.prototype.POLL_INTERVAL = null),
        (i.prototype.USE_MUTATION_OBSERVER = !0),
        (i.prototype.observe = function (e) {
            if (
                !this._observationTargets.some(function (t) {
                    return t.element == e;
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
        (i.prototype.unobserve = function (e) {
            (this._observationTargets = this._observationTargets.filter(function (t) {
                return t.element != e;
            })),
                this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance());
        }),
        (i.prototype.disconnect = function () {
            (this._observationTargets = []), this._unmonitorIntersections(), this._unregisterInstance();
        }),
        (i.prototype.takeRecords = function () {
            var e = this._queuedEntries.slice();
            return (this._queuedEntries = []), e;
        }),
        (i.prototype._initThresholds = function (e) {
            var t = e || [0];
            return (
                Array.isArray(t) || (t = [t]),
                t.sort().filter(function (e, t, n) {
                    if ('number' != typeof e || isNaN(e) || e < 0 || e > 1) throw Error('threshold must be a number between 0 and 1 inclusively');
                    return e !== n[t - 1];
                })
            );
        }),
        (i.prototype._parseRootMargin = function (e) {
            var t = (e || '0px').split(/\s+/).map(function (e) {
                var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                if (!t) throw Error('rootMargin must be specified in pixels or percent');
                return {
                    value: parseFloat(t[1]),
                    unit: t[2]
                };
            });
            return (t[1] = t[1] || t[0]), (t[2] = t[2] || t[0]), (t[3] = t[3] || t[1]), t;
        }),
        (i.prototype._monitorIntersections = function () {
            !this._monitoringIntersections &&
                ((this._monitoringIntersections = !0),
                this.POLL_INTERVAL
                    ? (this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL))
                    : (s(e, 'resize', this._checkForIntersections, !0),
                      s(t, 'scroll', this._checkForIntersections, !0),
                      this.USE_MUTATION_OBSERVER &&
                          'MutationObserver' in e &&
                          ((this._domObserver = new MutationObserver(this._checkForIntersections)),
                          this._domObserver.observe(t, {
                              attributes: !0,
                              childList: !0,
                              characterData: !0,
                              subtree: !0
                          }))));
        }),
        (i.prototype._unmonitorIntersections = function () {
            this._monitoringIntersections && ((this._monitoringIntersections = !1), clearInterval(this._monitoringInterval), (this._monitoringInterval = null), l(e, 'resize', this._checkForIntersections, !0), l(t, 'scroll', this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), (this._domObserver = null)));
        }),
        (i.prototype._checkForIntersections = function () {
            var e = this._rootIsInDom(),
                t = e ? this._getRootRect() : d();
            this._observationTargets.forEach(function (n) {
                var i = n.element,
                    a = u(i),
                    s = this._rootContainsTarget(i),
                    l = n.entry,
                    c = e && s && this._computeTargetAndRootIntersection(i, t),
                    d = (n.entry = new r({
                        time: o(),
                        target: i,
                        boundingClientRect: a,
                        rootBounds: t,
                        intersectionRect: c
                    }));
                l ? (e && s ? this._hasCrossedThreshold(l, d) && this._queuedEntries.push(d) : l && l.isIntersecting && this._queuedEntries.push(d)) : this._queuedEntries.push(d);
            }, this),
                this._queuedEntries.length && this._callback(this.takeRecords(), this);
        }),
        (i.prototype._computeTargetAndRootIntersection = function (n, r) {
            if ('none' != e.getComputedStyle(n).display) {
                for (var i = u(n), o = i, a = _(n), s = !1; !s; ) {
                    var l = null,
                        d = 1 == a.nodeType ? e.getComputedStyle(a) : {};
                    if ('none' == d.display) return;
                    if ((a == this.root || a == t ? ((s = !0), (l = r)) : a != t.body && a != t.documentElement && 'visible' != d.overflow && (l = u(a)), l && !(o = c(l, o)))) break;
                    a = _(a);
                }
                return o;
            }
        }),
        (i.prototype._getRootRect = function () {
            var e;
            if (this.root) e = u(this.root);
            else {
                var n = t.documentElement,
                    r = t.body;
                e = {
                    top: 0,
                    left: 0,
                    right: n.clientWidth || r.clientWidth,
                    width: n.clientWidth || r.clientWidth,
                    bottom: n.clientHeight || r.clientHeight,
                    height: n.clientHeight || r.clientHeight
                };
            }
            return this._expandRectByRootMargin(e);
        }),
        (i.prototype._expandRectByRootMargin = function (e) {
            var t = this._rootMarginValues.map(function (t, n) {
                    return 'px' == t.unit ? t.value : (t.value * (n % 2 ? e.width : e.height)) / 100;
                }),
                n = {
                    top: e.top - t[0],
                    right: e.right + t[1],
                    bottom: e.bottom + t[2],
                    left: e.left - t[3]
                };
            return (n.width = n.right - n.left), (n.height = n.bottom - n.top), n;
        }),
        (i.prototype._hasCrossedThreshold = function (e, t) {
            var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
            if (n !== r)
                for (var i = 0; i < this.thresholds.length; i++) {
                    var o = this.thresholds[i];
                    if (o == n || o == r || o < n != o < r) return !0;
                }
        }),
        (i.prototype._rootIsInDom = function () {
            return !this.root || f(t, this.root);
        }),
        (i.prototype._rootContainsTarget = function (e) {
            return f(this.root || t, e);
        }),
        (i.prototype._registerInstance = function () {
            0 > n.indexOf(this) && n.push(this);
        }),
        (i.prototype._unregisterInstance = function () {
            var e = n.indexOf(this);
            -1 != e && n.splice(e, 1);
        }),
        (e.IntersectionObserver = i),
        (e.IntersectionObserverEntry = r);
})(window, document);
