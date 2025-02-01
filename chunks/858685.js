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
    function i(e) {
        (this.time = e.time), (this.target = e.target), (this.rootBounds = e.rootBounds), (this.boundingClientRect = e.boundingClientRect), (this.intersectionRect = e.intersectionRect || d()), (this.isIntersecting = !!e.intersectionRect);
        var t = this.boundingClientRect,
            n = t.width * t.height,
            i = this.intersectionRect,
            r = i.width * i.height;
        n ? (this.intersectionRatio = r / n) : (this.intersectionRatio = this.isIntersecting ? 1 : 0);
    }
    function r(e, t) {
        var n = t || {};
        if ('function' != typeof e) throw Error('callback must be a function');
        if (n.root && 1 != n.root.nodeType) throw Error('root must be an Element');
        (this._checkForIntersections = s(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT)),
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
    function a() {
        return e.performance && performance.now && performance.now();
    }
    function s(e, t) {
        var n = null;
        return function () {
            n ||
                (n = setTimeout(function () {
                    e(), (n = null);
                }, t));
        };
    }
    function o(e, t, n, i) {
        'function' == typeof e.addEventListener ? e.addEventListener(t, n, i || !1) : 'function' == typeof e.attachEvent && e.attachEvent('on' + t, n);
    }
    function l(e, t, n, i) {
        'function' == typeof e.removeEventListener ? e.removeEventListener(t, n, i || !1) : 'function' == typeof e.detatchEvent && e.detatchEvent('on' + t, n);
    }
    function u(e, t) {
        var n = Math.max(e.top, t.top),
            i = Math.min(e.bottom, t.bottom),
            r = Math.max(e.left, t.left),
            a = Math.min(e.right, t.right),
            s = a - r,
            o = i - n;
        return (
            s >= 0 &&
            o >= 0 && {
                top: n,
                bottom: i,
                left: r,
                right: a,
                width: s,
                height: o
            }
        );
    }
    function c(e) {
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
    (r.prototype.THROTTLE_TIMEOUT = 100),
        (r.prototype.POLL_INTERVAL = null),
        (r.prototype.USE_MUTATION_OBSERVER = !0),
        (r.prototype.observe = function (e) {
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
        (r.prototype.unobserve = function (e) {
            (this._observationTargets = this._observationTargets.filter(function (t) {
                return t.element != e;
            })),
                this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance());
        }),
        (r.prototype.disconnect = function () {
            (this._observationTargets = []), this._unmonitorIntersections(), this._unregisterInstance();
        }),
        (r.prototype.takeRecords = function () {
            var e = this._queuedEntries.slice();
            return (this._queuedEntries = []), e;
        }),
        (r.prototype._initThresholds = function (e) {
            var t = e || [0];
            return (
                Array.isArray(t) || (t = [t]),
                t.sort().filter(function (e, t, n) {
                    if ('number' != typeof e || isNaN(e) || e < 0 || e > 1) throw Error('threshold must be a number between 0 and 1 inclusively');
                    return e !== n[t - 1];
                })
            );
        }),
        (r.prototype._parseRootMargin = function (e) {
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
        (r.prototype._monitorIntersections = function () {
            !this._monitoringIntersections &&
                ((this._monitoringIntersections = !0),
                this.POLL_INTERVAL
                    ? (this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL))
                    : (o(e, 'resize', this._checkForIntersections, !0),
                      o(t, 'scroll', this._checkForIntersections, !0),
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
        (r.prototype._unmonitorIntersections = function () {
            this._monitoringIntersections && ((this._monitoringIntersections = !1), clearInterval(this._monitoringInterval), (this._monitoringInterval = null), l(e, 'resize', this._checkForIntersections, !0), l(t, 'scroll', this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), (this._domObserver = null)));
        }),
        (r.prototype._checkForIntersections = function () {
            var e = this._rootIsInDom(),
                t = e ? this._getRootRect() : d();
            this._observationTargets.forEach(function (n) {
                var r = n.element,
                    s = c(r),
                    o = this._rootContainsTarget(r),
                    l = n.entry,
                    u = e && o && this._computeTargetAndRootIntersection(r, t),
                    d = (n.entry = new i({
                        time: a(),
                        target: r,
                        boundingClientRect: s,
                        rootBounds: t,
                        intersectionRect: u
                    }));
                l ? (e && o ? this._hasCrossedThreshold(l, d) && this._queuedEntries.push(d) : l && l.isIntersecting && this._queuedEntries.push(d)) : this._queuedEntries.push(d);
            }, this),
                this._queuedEntries.length && this._callback(this.takeRecords(), this);
        }),
        (r.prototype._computeTargetAndRootIntersection = function (n, i) {
            if ('none' != e.getComputedStyle(n).display) {
                for (var r = c(n), a = r, s = _(n), o = !1; !o; ) {
                    var l = null,
                        d = 1 == s.nodeType ? e.getComputedStyle(s) : {};
                    if ('none' == d.display) return;
                    if ((s == this.root || s == t ? ((o = !0), (l = i)) : s != t.body && s != t.documentElement && 'visible' != d.overflow && (l = c(s)), l && !(a = u(l, a)))) break;
                    s = _(s);
                }
                return a;
            }
        }),
        (r.prototype._getRootRect = function () {
            var e;
            if (this.root) e = c(this.root);
            else {
                var n = t.documentElement,
                    i = t.body;
                e = {
                    top: 0,
                    left: 0,
                    right: n.clientWidth || i.clientWidth,
                    width: n.clientWidth || i.clientWidth,
                    bottom: n.clientHeight || i.clientHeight,
                    height: n.clientHeight || i.clientHeight
                };
            }
            return this._expandRectByRootMargin(e);
        }),
        (r.prototype._expandRectByRootMargin = function (e) {
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
        (r.prototype._hasCrossedThreshold = function (e, t) {
            var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
            if (n !== i)
                for (var r = 0; r < this.thresholds.length; r++) {
                    var a = this.thresholds[r];
                    if (a == n || a == i || a < n != a < i) return !0;
                }
        }),
        (r.prototype._rootIsInDom = function () {
            return !this.root || f(t, this.root);
        }),
        (r.prototype._rootContainsTarget = function (e) {
            return f(this.root || t, e);
        }),
        (r.prototype._registerInstance = function () {
            0 > n.indexOf(this) && n.push(this);
        }),
        (r.prototype._unregisterInstance = function () {
            var e = n.indexOf(this);
            -1 != e && n.splice(e, 1);
        }),
        (e.IntersectionObserver = r),
        (e.IntersectionObserverEntry = i);
})(window, document);
