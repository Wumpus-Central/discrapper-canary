let i;
r.d(n, {
    UL: function () {
        return s;
    }
}),
    r(192379);
class a {
    copy() {
        let e = new a(this.type, this.key, this.rect.copy());
        return (e.estimatedSize = this.estimatedSize), (e.opacity = this.opacity), (e.transform = this.transform), (e.parentKey = this.parentKey), (e.isSticky = this.isSticky), (e.zIndex = this.zIndex), (e.allowOverflow = this.allowOverflow), e;
    }
    constructor(e, n, r) {
        (this.type = e), (this.key = n), (this.parentKey = null), (this.rect = r), (this.estimatedSize = !1), (this.isSticky = !1), (this.opacity = 1), (this.transform = null), (this.zIndex = 0), (this.allowOverflow = !1);
    }
}
class o {
    copy() {
        return new o(this.x, this.y);
    }
    equals(e) {
        return this.x === e.x && this.y === e.y;
    }
    isOrigin() {
        return 0 === this.x && 0 === this.y;
    }
    constructor(e = 0, n = 0) {
        (this.x = e), (this.y = n);
    }
}
class s {
    get maxX() {
        return this.x + this.width;
    }
    get maxY() {
        return this.y + this.height;
    }
    get area() {
        return this.width * this.height;
    }
    get topLeft() {
        return new o(this.x, this.y);
    }
    get topRight() {
        return new o(this.maxX, this.y);
    }
    get bottomLeft() {
        return new o(this.x, this.maxY);
    }
    get bottomRight() {
        return new o(this.maxX, this.maxY);
    }
    intersects(e) {
        return this.x <= e.x + e.width && e.x <= this.x + this.width && this.y <= e.y + e.height && e.y <= this.y + this.height;
    }
    containsRect(e) {
        return this.x <= e.x && this.y <= e.y && this.maxX >= e.maxX && this.maxY >= e.maxY;
    }
    containsPoint(e) {
        return this.x <= e.x && this.y <= e.y && this.maxX >= e.x && this.maxY >= e.y;
    }
    getCornerInRect(e) {
        for (let n of ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']) if (e.containsPoint(this[n])) return n;
        return null;
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.width === this.width && e.height === this.height;
    }
    pointEquals(e) {
        return this.x === e.x && this.y === e.y;
    }
    sizeEquals(e) {
        return this.width === e.width && this.height === e.height;
    }
    union(e) {
        let n = Math.min(this.x, e.x),
            r = Math.min(this.y, e.y),
            i = Math.max(this.maxX, e.maxX) - n,
            a = Math.max(this.maxY, e.maxY) - r;
        return new s(n, r, i, a);
    }
    intersection(e) {
        if (!this.intersects(e)) return new s(0, 0, 0, 0);
        let n = Math.max(this.x, e.x),
            r = Math.max(this.y, e.y);
        return new s(n, r, Math.min(this.maxX, e.maxX) - n, Math.min(this.maxY, e.maxY) - r);
    }
    copy() {
        return new s(this.x, this.y, this.width, this.height);
    }
    constructor(e = 0, n = 0, r = 0, i = 0) {
        (this.x = e), (this.y = n), (this.width = r), (this.height = i);
    }
}
class l {
    copy() {
        return new l(this.width, this.height);
    }
    equals(e) {
        return this.width === e.width && this.height === e.height;
    }
    get area() {
        return this.width * this.height;
    }
    constructor(e = 0, n = 0) {
        (this.width = e), (this.height = n);
    }
}
let u = 0;
class c {
    prepareForReuse() {
        (this.content = null), (this.rendered = null), (this.layoutInfo = null);
    }
    constructor(e) {
        (this.virtualizer = e), (this.key = ++u);
    }
}
let d = 'undefined' != typeof window ? window.performance : null,
    f = d && (d.now || d.webkitNow || d.msNow || d.mozNow),
    p = f
        ? f.bind(d)
        : function () {
              return Date.now ? Date.now() : new Date().getTime();
          };
function h(e, n, r, a, s) {
    let l,
        u = !1,
        c = new Promise((c) => {
            let d = p(),
                f = n.x - e.x,
                h = n.y - e.y;
            l = requestAnimationFrame(function _(m) {
                null == i && (i = m > 1000000000000 != p() > 1000000000000), i && (m = p());
                let g = m - d;
                g > r ? (s(n), c()) : !1 !== s(new o(e.x + f * a(g / r), e.y + h * a(g / r))) && !u && (l = requestAnimationFrame(_));
            });
        });
    return (
        (c.cancel = function () {
            (u = !0), cancelAnimationFrame(l);
        }),
        c
    );
}
function _(e) {
    return Math.sin((e * Math.PI) / 2);
}
function m(e, n) {
    let r = new Set();
    for (let i of e.keys()) !n.has(i) && r.add(i);
    return r;
}
function g(e, n) {
    let r = m(e, n),
        i = m(n, e),
        a = new Set();
    for (let r of e.keys()) n.has(r) && a.add(r);
    return {
        toRemove: r,
        toAdd: i,
        toUpdate: a
    };
}
function* E(...e) {
    for (let n of e) yield* n;
}
function v(e, n) {
    if (e === n) return !0;
    if (e.size !== n.size) return !1;
    for (let r of e) if (!n.has(r)) return !1;
    return !0;
}
class y {
    addSample(e) {
        this.count++, (this.value += (e - this.value) / this.count);
    }
    constructor() {
        (this.count = 0), (this.value = 0);
    }
}
class b {
    setVisibleRect(e) {
        let n = performance.now() - this.startTime;
        n < 500 && (this.averageTime.addSample(n), e.x !== this.visibleRect.x && n > 0 && (this.velocity.x = (e.x - this.visibleRect.x) / n), e.y !== this.visibleRect.y && n > 0 && (this.velocity.y = (e.y - this.visibleRect.y) / n)), (this.startTime = performance.now()), (this.visibleRect = e);
    }
    collectMetrics() {
        let e = performance.now() - this.startTime;
        if ((e < 500 && this.averagePerf.addSample(e), this.visibleRect.height > 0)) {
            let e = Math.abs(this.velocity.y * (this.averageTime.value + this.averagePerf.value));
            this.overscanY.addSample(e);
        }
        if (this.visibleRect.width > 0) {
            let e = Math.abs(this.velocity.x * (this.averageTime.value + this.averagePerf.value));
            this.overscanX.addSample(e);
        }
    }
    getOverscannedRect() {
        let e = this.visibleRect.copy(),
            n = 100 * Math.round(Math.min(2 * this.visibleRect.height, this.overscanY.value) / 100);
        this.velocity.y > 0 ? (e.y -= 0.2 * n) : (e.y -= n), (e.height += n + 0.2 * n);
        let r = 100 * Math.round(Math.min(2 * this.visibleRect.width, this.overscanX.value) / 100);
        return this.velocity.x > 0 ? (e.x -= 0.2 * r) : (e.x -= r), (e.width += r + 0.2 * r), e;
    }
    constructor() {
        (this.startTime = 0), (this.averagePerf = new y()), (this.averageTime = new y()), (this.velocity = new o(5, 5)), (this.overscanX = new y()), (this.overscanY = new y()), (this.visibleRect = new s());
    }
}
class I {
    constructor() {
        (this.level = 0), (this.actions = []), (this.animated = !0), (this.initialMap = new Map()), (this.finalMap = new Map()), (this.initialLayoutInfo = new Map()), (this.finalLayoutInfo = new Map()), (this.removed = new Map()), (this.toRemove = new Map());
    }
}
class T {
    _setContentSize(e) {
        (this._contentSize = e), this.delegate.setContentSize(e);
    }
    _setContentOffset(e) {
        let n = new s(e.x, e.y, this._visibleRect.width, this._visibleRect.height);
        this.delegate.setVisibleRect(n);
    }
    get contentSize() {
        return this._contentSize;
    }
    get visibleRect() {
        return this._visibleRect;
    }
    set visibleRect(e) {
        this._setVisibleRect(e);
    }
    _setVisibleRect(e, n = !1) {
        let r = this._visibleRect;
        if (e.equals(r)) return;
        this.shouldOverscan && this._overscanManager.setVisibleRect(e);
        let i = this.layout && this.layout.shouldInvalidate(e, this._visibleRect);
        this._resetAnimatedContentOffset(),
            (this._visibleRect = e),
            i
                ? this.relayoutNow({
                      offsetChanged: !e.pointEquals(r),
                      sizeChanged: !e.sizeEquals(r)
                  })
                : this.updateSubviews(n);
    }
    get collection() {
        return this._collection;
    }
    set collection(e) {
        this._setData(e);
    }
    _setData(e) {
        e !== this._collection &&
            (this._collection
                ? this._runTransaction(() => {
                      this._collection = e;
                  }, this.transitionDuration > 0)
                : ((this._collection = e), this.reloadData()));
    }
    reloadData() {
        this.relayout({ contentChanged: !0 });
    }
    getItem(e) {
        return this._collection ? this._collection.getItem(e) : null;
    }
    get persistedKeys() {
        return this._persistedKeys;
    }
    set persistedKeys(e) {
        !v(e, this._persistedKeys) && ((this._persistedKeys = e), this.updateSubviews());
    }
    isPersistedKey(e) {
        if (this._persistedKeys.has(e)) return !0;
        for (let n of this._persistedKeys)
            for (; null != n; ) {
                let r = this.layout.getLayoutInfo(n);
                if (!r) break;
                if ((n = r.parentKey) === e) return !0;
            }
        return !1;
    }
    get layout() {
        return this._layout;
    }
    set layout(e) {
        this.setLayout(e);
    }
    setLayout(e, n = !1) {
        if (e === this._layout) return;
        let r = () => {
            this._layout && (this._layout.virtualizer = null), (e.virtualizer = this), (this._layout = e);
        };
        n ? this._runTransaction(r) : (r(), this.relayout());
    }
    _getReuseType(e, n) {
        if ('item' === e.type && n) {
            let r = this.delegate.getType ? this.delegate.getType(n) : 'item',
                i = 'item' === r ? 'item' : e.type + '_' + r;
            return {
                type: r,
                reuseType: i
            };
        }
        return {
            type: e.type,
            reuseType: e.type
        };
    }
    getReusableView(e) {
        let n = this.getItem(e.key),
            { reuseType: r } = this._getReuseType(e, n);
        !this._reusableViews[r] && (this._reusableViews[r] = []);
        let i = this._reusableViews[r],
            a = i.length > 0 ? i.pop() : new c(this);
        return (a.viewType = r), !this._animatedContentOffset.isOrigin() && ((e = e.copy()), (e.rect.x += this._animatedContentOffset.x), (e.rect.y += this._animatedContentOffset.y)), (a.layoutInfo = e), this._renderView(a), a;
    }
    _renderView(e) {
        let { type: n, key: r } = e.layoutInfo;
        (e.content = this.getItem(r)), (e.rendered = this._renderContent(n, e.content));
    }
    _renderContent(e, n) {
        let r = this._renderedContent.get(n);
        if (null != r) return r;
        let i = this.delegate.renderView(e, n);
        return n && this._renderedContent.set(n, i), i;
    }
    get visibleViews() {
        return Array.from(this._visibleViews.values());
    }
    getView(e) {
        return this._visibleViews.get(e) || null;
    }
    getViewsOfType(e) {
        return this.visibleViews.filter((n) => n.layoutInfo && n.layoutInfo.type === e);
    }
    keyForView(e) {
        return e && e.layoutInfo ? e.layoutInfo.key : null;
    }
    keyAtPoint(e) {
        let n = new s(e.x, e.y, 1, 1);
        for (let e of this.layout.getVisibleLayoutInfos(n)) if (e.rect.intersects(n)) return e.key;
        return null;
    }
    willUnmount() {
        cancelAnimationFrame(this._relayoutRaf);
    }
    relayout(e = {}) {
        if (!this._scrollAnimation && 'undefined' != typeof requestAnimationFrame) {
            if (this._invalidationContext) {
                Object.assign(this._invalidationContext, e);
                return;
            }
            this._invalidationContext = e;
        }
    }
    relayoutNow(e = this._invalidationContext || {}) {
        if (
            (this._relayoutRaf &&
                (cancelAnimationFrame(this._relayoutRaf),
                (this._relayoutRaf = null),
                (e = {
                    ...this._invalidationContext,
                    ...e
                })),
            (this._invalidationContext = null),
            !this.layout || !this._collection || this._scrollAnimation)
        )
            return;
        let n = this._getScrollAnchor();
        'function' == typeof e.beforeLayout && e.beforeLayout(), this.layout.validate(e), this._setContentSize(this.layout.getContentSize()), 'function' == typeof e.afterLayout && e.afterLayout();
        let r = this.getVisibleRect(),
            i = this._restoreScrollAnchor(n, e),
            a = e.contentChanged ? 0 : i.x,
            s = e.contentChanged ? 0 : i.y;
        (a = Math.max(0, Math.min(this.contentSize.width - r.width, a))), (s = Math.max(0, Math.min(this.contentSize.height - r.height, s)));
        let l = !1;
        if ((a !== r.x || s !== r.y ? (e.animated || !this._animatedContentOffset.isOrigin() ? ((this._animatedContentOffset.x += r.x - a), (this._animatedContentOffset.y += r.y - s), (l = this.updateSubviews(e.contentChanged))) : this._setContentOffset(new o(a, s))) : (l = this.updateSubviews(e.contentChanged)), !(e.transaction && e.animated) && this._applyLayoutInfos(), e.animated && l)) {
            this._enableTransitions(),
                setTimeout(() => {
                    if ((this._disableTransitions(), !this._animatedContentOffset.isOrigin())) {
                        let { x: e, y: n } = this.getVisibleRect();
                        this._resetAnimatedContentOffset(), this._setContentOffset(new o(e, n));
                    }
                    'function' == typeof e.afterAnimation && e.afterAnimation();
                }, this.transitionDuration + 100);
            return;
        }
        'function' == typeof e.afterAnimation && e.afterAnimation();
    }
    _correctItemOrder() {
        if (!this._isScrolling && !this._transaction)
            for (let e of this._visibleLayoutInfos.keys()) {
                let n = this._visibleViews.get(e);
                this._children.delete(n), this._children.add(n);
            }
    }
    _enableTransitions() {
        this.delegate.beginAnimations();
    }
    _disableTransitions() {
        this.delegate.endAnimations();
    }
    _getScrollAnchor() {
        if (!this.anchorScrollPosition) return null;
        let e = this.getVisibleRect();
        if (this.delegate.getScrollAnchor) {
            let n = this.delegate.getScrollAnchor(e);
            if (null != n) {
                let r = this.layout.getLayoutInfo(n),
                    i = r.rect.getCornerInRect(e);
                if (i) {
                    let n = r.key,
                        a = r.rect[i].y - e.y;
                    return {
                        key: n,
                        layoutInfo: r,
                        corner: i,
                        offset: a
                    };
                }
            }
        }
        if (0 === e.y && !this.anchorScrollPositionAtTop) return null;
        let n = null;
        for (let [r, i] of this._visibleViews) {
            let a = i.layoutInfo;
            if (a && a.rect.area > 0) {
                let i = a.rect.getCornerInRect(e);
                if (i) {
                    let o = a.rect[i].y - e.y;
                    (!n || o < n.offset) &&
                        (n = {
                            key: r,
                            layoutInfo: a,
                            corner: i,
                            offset: o
                        });
                }
            }
        }
        return n;
    }
    _restoreScrollAnchor(e, n) {
        let r = this.getVisibleRect();
        if (e) {
            var i;
            let a = (null === (i = n.transaction) || void 0 === i ? void 0 : i.animated) ? n.transaction.finalMap.get(e.key) : this.layout.getLayoutInfo(e.layoutInfo.key);
            if (a) {
                let n = a.rect[e.corner].y - r.y - e.offset;
                r.y += n;
            }
        }
        return r;
    }
    getVisibleRect() {
        let e = this.visibleRect;
        return new s(e.x - this._animatedContentOffset.x, e.y - this._animatedContentOffset.y, e.width, e.height);
    }
    getVisibleLayoutInfos() {
        let e = this.shouldOverscan ? this._overscanManager.getOverscannedRect() : this.getVisibleRect();
        return (this._visibleLayoutInfos = this._getLayoutInfoMap(e)), this._visibleLayoutInfos;
    }
    _getLayoutInfoMap(e, n = !1) {
        let r = this.layout.getVisibleLayoutInfos(e),
            i = new Map();
        for (let e of r) n && (e = e.copy()), i.set(e.key, e);
        return i;
    }
    updateSubviews(e = !1) {
        let n, r, i;
        if (!this._collection) return;
        let a = this.getVisibleLayoutInfos(),
            o = this._visibleViews;
        if (e) (n = a), (r = o), (i = new Set());
        else {
            for (let e of (({ toAdd: n, toRemove: r, toUpdate: i } = g(o, a)), i)) {
                let s = o.get(e);
                if (!s || !s.layoutInfo) continue;
                let l = this.getItem(a.get(e).key);
                if (s.content === l) i.delete(e);
                else {
                    let { reuseType: a } = this._getReuseType(s.layoutInfo, l);
                    s.viewType !== a && (i.delete(e), n.add(e), r.add(e));
                }
            }
            if (0 === n.size && 0 === r.size && 0 === i.size) {
                this._transaction && this._applyLayoutInfos();
                return;
            }
        }
        let s = new Set();
        for (let e of r.keys()) {
            let n = this._visibleViews.get(e);
            n && (s.add(n), this._visibleViews.delete(e), this._transaction ? this._transaction.toRemove.set(e, n) : this.reuseView(n));
        }
        for (let e of n.keys()) {
            let n,
                r = a.get(e);
            this._transaction && (this._transaction.initialLayoutInfo.has(e) && (r = this._transaction.initialLayoutInfo.get(e)), (n = this._transaction.toRemove.get(e)) && (this._transaction.toRemove.delete(e), this._applyLayoutInfo(n, r))), !n && ((n = this.getReusableView(r)), !s.has(n) && this._children.add(n)), this._visibleViews.set(e, n), s.delete(n);
        }
        for (let e of i) {
            let n = o.get(e);
            this._renderedContent.delete(e), this._renderView(n);
        }
        !this._transaction && this.removeViews(s), this._correctItemOrder(), this._flushVisibleViews();
        let l = this._transaction && (n.size > 0 || r.size > 0 || this._hasLayoutUpdates());
        return (
            l &&
                requestAnimationFrame(() => {
                    this._transaction && requestAnimationFrame(() => this._applyLayoutInfos());
                }),
            l
        );
    }
    afterRender() {
        this._transactionQueue.length > 0 ? this._processTransactionQueue() : this._invalidationContext && this.relayoutNow(), this.shouldOverscan && this._overscanManager.collectMetrics();
    }
    _flushVisibleViews() {
        let e = new Map([[null, []]]);
        for (let s of this._children) {
            var n, r, i, a, o;
            (null === (n = s.layoutInfo) || void 0 === n ? void 0 : n.parentKey) != null && !e.has(s.layoutInfo.parentKey) && e.set(s.layoutInfo.parentKey, []), null === (r = e.get(null === (i = s.layoutInfo) || void 0 === i ? void 0 : i.parentKey)) || void 0 === r || r.push(s), !e.has(null === (a = s.layoutInfo) || void 0 === a ? void 0 : a.key) && e.set(null === (o = s.layoutInfo) || void 0 === o ? void 0 : o.key, []);
        }
        let s = (n, r) =>
                r.map((r) => {
                    let i = e.get(r.layoutInfo.key);
                    return this.delegate.renderWrapper(n, r, i, (e) => s(r, e));
                }),
            l = s(null, e.get(null));
        this.delegate.setVisibleViews(l);
    }
    _applyLayoutInfo(e, n) {
        return e.layoutInfo !== n && ((e.layoutInfo = n), !0);
    }
    _applyLayoutInfos() {
        let e = !1;
        for (let n of this._visibleViews.values()) {
            let r = n.layoutInfo;
            if ((null == r ? void 0 : r.key) != null) {
                let i = this.layout.getLayoutInfo(r.key);
                this._applyLayoutInfo(n, i) && (e = !0);
            }
        }
        if (this._transaction) {
            for (let n of this._transaction.toRemove.values()) {
                let r = n.layoutInfo;
                if ((null == r ? void 0 : r.key) != null) {
                    let i = this.layout.getLayoutInfo(r.key);
                    this._applyLayoutInfo(n, i) && (e = !0);
                }
            }
            for (let n of this._transaction.removed.values()) {
                let r = n.layoutInfo,
                    i = this._transaction.finalLayoutInfo.get(r.key) || r;
                (i = this.layout.getFinalLayoutInfo(i.copy())), this._applyLayoutInfo(n, i) && (e = !0);
            }
        }
        e && this._flushVisibleViews();
    }
    _hasLayoutUpdates() {
        if (!this._transaction) return !1;
        for (let e of this._visibleViews.values()) {
            let n = e.layoutInfo;
            if (!n) return !0;
            let r = this.layout.getLayoutInfo(n.key);
            if (!n.rect.equals(r.rect) || n.opacity !== r.opacity || n.transform !== r.transform) return !0;
        }
        return !1;
    }
    reuseView(e) {
        e.prepareForReuse(), this._reusableViews[e.viewType].push(e);
    }
    removeViews(e) {
        for (let n of e) this._children.delete(n);
    }
    updateItemSize(e, n) {
        if (!!this.layout.updateItemSize) {
            if (this._scrollAnimation) {
                this._sizeUpdateQueue.set(e, n);
                return;
            }
            this.layout.updateItemSize(e, n) && this.relayout();
        }
    }
    startScrolling() {
        this._isScrolling = !0;
    }
    endScrolling() {
        (this._isScrolling = !1), this._correctItemOrder(), this._flushVisibleViews();
    }
    _resetAnimatedContentOffset() {
        !this._animatedContentOffset.isOrigin() && ((this._animatedContentOffset = new o(0, 0)), this._applyLayoutInfos());
    }
    scrollToItem(e, n) {
        if (null == e) return;
        let r = this.layout.getLayoutInfo(e);
        if (!r) return;
        let { duration: i = 300, shouldScrollX: a = !0, shouldScrollY: s = !0, offsetX: l = 0, offsetY: u = 0 } = n,
            c = this.visibleRect.x,
            d = this.visibleRect.y,
            f = r.rect.x - l,
            p = r.rect.y - u,
            h = c + this.visibleRect.width,
            _ = d + this.visibleRect.height;
        return a && (f <= c || 0 === h ? (c = f) : r.rect.maxX > h && (c += r.rect.maxX - h)), s && (p <= d || 0 === _ ? (d = p) : r.rect.maxY > _ && (d += r.rect.maxY - _)), this.scrollTo(new o(c, d), i);
    }
    scrollTo(e, n = 300) {
        return (this._scrollAnimation && (this._scrollAnimation.cancel(), (this._scrollAnimation = null)), n <= 0 || this.visibleRect.pointEquals(e))
            ? (this._setContentOffset(e), Promise.resolve())
            : (this.startScrolling(),
              (this._scrollAnimation = h(this.visibleRect, e, n, _, (e) => {
                  this._setContentOffset(e);
              })),
              this._scrollAnimation.then(() => {
                  for (let [e, n] of ((this._scrollAnimation = null), this._sizeUpdateQueue)) this.updateItemSize(e, n);
                  this._sizeUpdateQueue.clear(), this.relayout(), this._processTransactionQueue(), this.endScrolling();
              }),
              this._scrollAnimation);
    }
    _runTransaction(e, n) {
        this._startTransaction(), this._nextTransaction && this._nextTransaction.actions.push(e), this._endTransaction(n);
    }
    _startTransaction() {
        !this._nextTransaction && (this._nextTransaction = new I()), this._nextTransaction.level++;
    }
    _endTransaction(e) {
        return !!this._nextTransaction && (null != e && (this._nextTransaction.animated = e), !(--this._nextTransaction.level > 0) && (0 === this._nextTransaction.actions.length ? ((this._nextTransaction = null), !1) : (null == this._nextTransaction.animated && (this._nextTransaction.animated = !0), this._transactionQueue.push(this._nextTransaction), (this._nextTransaction = null), !0)));
    }
    _processTransactionQueue() {
        if (this._transaction || this._scrollAnimation) return;
        let e = this._transactionQueue.shift();
        e && this._performTransaction(e);
    }
    _getContentRect() {
        return new s(0, 0, this.contentSize.width, this.contentSize.height);
    }
    _performTransaction(e) {
        (this._transaction = e),
            this.relayoutNow({
                transaction: e,
                animated: e.animated,
                beforeLayout: () => {
                    for (let n of (e.animated && (e.initialMap = this._getLayoutInfoMap(this._getContentRect(), !0)), e.actions)) n();
                },
                afterLayout: () => {
                    e.animated ? ((e.finalMap = this._getLayoutInfoMap(this._getContentRect())), this._setupTransactionAnimations(e)) : (this._transaction = null);
                },
                afterAnimation: () => {
                    if (e.toRemove.size > 0 || e.removed.size > 0) for (let n of E(e.toRemove.values(), e.removed.values())) this._children.delete(n), this.reuseView(n);
                    (this._transaction = null), this._correctItemOrder(), this._flushVisibleViews(), this._processTransactionQueue();
                }
            });
    }
    _setupTransactionAnimations(e) {
        let { initialMap: n, finalMap: r } = e;
        for (let [i, a] of n) r.has(i) ? e.initialLayoutInfo.set(i, a) : e.finalLayoutInfo.set(a.key, a);
        for (let [i, a] of r)
            if (!n.has(i)) {
                let n = this.layout.getInitialLayoutInfo(a.copy());
                e.initialLayoutInfo.set(i, n);
            }
        for (let [n, i] of this._visibleViews) !r.has(n) && i.layoutInfo.rect.width > 0 && (e.removed.set(n, i), this._visibleViews.delete(n), i.layoutInfo && !e.finalLayoutInfo.has(i.layoutInfo.key) && e.finalLayoutInfo.set(i.layoutInfo.key, i.layoutInfo));
    }
    constructor(e = {}) {
        var n;
        for (let r of ((this._contentSize = new l()), (this._visibleRect = new s()), (this._reusableViews = {}), (this._visibleLayoutInfos = new Map()), (this._visibleViews = new Map()), (this._renderedContent = new WeakMap()), (this._children = new Set()), (this._invalidationContext = null), (this._overscanManager = new b()), (this._persistedKeys = new Set()), (this._scrollAnimation = null), (this._isScrolling = !1), (this._sizeUpdateQueue = new Map()), (this._animatedContentOffset = new o(0, 0)), (this._transaction = null), (this._nextTransaction = null), (this._transactionQueue = []), (this.transitionDuration = null !== (n = e.transitionDuration) && void 0 !== n ? n : 500), (this.anchorScrollPosition = e.anchorScrollPosition || !1), (this.anchorScrollPositionAtTop = e.anchorScrollPositionAtTop || !1), (this.shouldOverscan = !1 !== e.shouldOverscan), ['delegate', 'size', 'layout', 'collection'])) e[r] && (this[r] = e[r]);
    }
}
