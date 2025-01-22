var i = r(47120);
var a = r(724458);
var o = r(852437);
var s = r(653041);
var l = r(733860);
var u = r(757143);
var c = r(392711),
    d = r.n(c),
    f = r(612002),
    p = r(593472),
    h = r(513418),
    _ = r(710845),
    m = r(786761),
    g = r(709054),
    E = r(697479),
    v = r(981631);
function y(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = new _.Z('ChannelMessages'),
    I = !0;
function T(e, n) {
    var r, i;
    let a = null != e.editedTimestamp ? +e.editedTimestamp : 0;
    return !!((null != n.edited_timestamp ? +new Date(n.edited_timestamp) : 0) > a) || !!(e.embeds.length < (null !== (i = null === (r = n.embeds) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0)) || e.content !== n.content;
}
function S(e, n) {
    let r = e.get(n.id);
    return null == r || T(r, n) || e.cached ? (0, m.e5)(n) : r;
}
class A {
    clone() {
        let e = new A(this._isCacheBefore);
        return (e._map = { ...this._map }), (e._messages = [...this._messages]), (e._wasAtEdge = this._wasAtEdge), e;
    }
    get wasAtEdge() {
        return this._wasAtEdge;
    }
    set wasAtEdge(e) {
        this._wasAtEdge = e;
    }
    get length() {
        return this._messages.length;
    }
    clear() {
        (this._map = {}), (this._messages = []), (this._wasAtEdge = !1);
    }
    remove(e) {
        (this._messages = d().filter(this._messages, (n) => {
            let { id: r } = n;
            return r !== e;
        })),
            delete this._map[e];
    }
    removeMany(e) {
        d().each(e, (e) => {
            delete this._map[e];
        }),
            (this._messages = this._messages.filter((n) => -1 === e.indexOf(n.id)));
    }
    replace(e, n) {
        let r = this._map[e];
        null != r && (delete this._map[e], (this._map[n.id] = n), (this._messages[this._messages.indexOf(r)] = n));
    }
    update(e, n) {
        let r = this._map[e];
        if (null == r) return;
        let i = n(r);
        (this._map[r.id] = i), (this._messages[this._messages.indexOf(r)] = i);
    }
    has(e) {
        return null != this._map[e];
    }
    get(e) {
        return this._map[e];
    }
    forEach(e, n) {
        this._messages.forEach(e, n);
    }
    cache(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((0 === this.length && (this._wasAtEdge = n), this._messages.length + e.length > v.FD8)) {
            if (((this._wasAtEdge = !1), e.length > v.FD8)) {
                this._isCacheBefore ? (this._messages = e.slice(e.length - v.FD8)) : (this._messages = e.slice(0, v.FD8)), (this._map = {}), this._messages.forEach((e) => (this._map[e.id] = e));
                return;
            }
            let n = v.FD8 - e.length;
            this._isCacheBefore ? (this._messages = this._messages.slice(Math.max(this._messages.length - n, 0))) : (this._messages = this._messages.slice(0, n));
        }
        (this._messages = this._isCacheBefore ? [...this._messages, ...e] : [...e, ...this._messages]), (this._map = {}), this._messages.forEach((e) => (this._map[e.id] = e));
    }
    extractAll() {
        let e = this._messages;
        return (this._messages = []), (this._map = {}), e;
    }
    extract(e) {
        let n;
        if (this._isCacheBefore) {
            let r = Math.max(this.length - e, 0),
                i = this.length;
            (n = this._messages.slice(r, i)), this._messages.splice(r);
        } else {
            let r = 0,
                i = Math.min(e, this.length);
            (n = this._messages.slice(r, i)), this._messages.splice(r, e);
        }
        return n.forEach((e) => delete this._map[e.id]), n;
    }
    constructor(e) {
        y(this, '_messages', void 0), y(this, '_map', void 0), y(this, '_wasAtEdge', void 0), y(this, '_isCacheBefore', void 0), (this._messages = []), (this._map = {}), (this._wasAtEdge = !1), (this._isCacheBefore = e);
    }
}
class C {
    static forEach(e) {
        d().forEach(C._channelMessages, e);
    }
    static get(e) {
        return C._channelMessages[e];
    }
    static hasPresent(e) {
        let n = C.get(e);
        return null != n && n.hasPresent();
    }
    static getOrCreate(e) {
        let n = C._channelMessages[e];
        return null == n && ((n = new C(e)), (C._channelMessages[e] = n)), n;
    }
    static clear(e) {
        delete C._channelMessages[e];
    }
    static clearCache(e) {
        let n = C._channelMessages[e];
        null != n && (n._before.clear(), n._after.clear(), this.commit(n));
    }
    static commit(e) {
        C._channelMessages[e.channelId] = e;
    }
    mutate(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = new C(this.channelId);
        return (r._array = n ? [...this._array] : this._array), (r._map = n ? { ...this._map } : this._map), (r._after = n ? this._after.clone() : this._after), (r._before = n ? this._before.clone() : this._before), e instanceof Function ? ((r.ready = this.ready), (r.jumpType = this.jumpType), (r.jumpTargetId = this.jumpTargetId), (r.jumpTargetOffset = this.jumpTargetOffset), (r.jumpSequenceId = this.jumpSequenceId), (r.jumped = this.jumped), (r.jumpedToPresent = this.jumpedToPresent), (r.jumpFlash = this.jumpFlash), (r.jumpReturnTargetId = this.jumpReturnTargetId), (r.focusTargetId = this.focusTargetId), (r.hasMoreBefore = this.hasMoreBefore), (r.hasMoreAfter = this.hasMoreAfter), (r.loadingMore = this.loadingMore), (r.revealedMessageId = this.revealedMessageId), (r.cached = this.cached), (r.hasFetched = this.hasFetched), (r.error = this.error), e(r)) : 'object' == typeof e && ((r.ready = void 0 !== e.ready ? !0 === e.ready : this.ready), (r.jumpType = void 0 !== e.jumpType ? e.jumpType : this.jumpType), (r.jumpTargetId = void 0 !== e.jumpTargetId ? e.jumpTargetId : this.jumpTargetId), (r.jumpTargetOffset = void 0 !== e.jumpTargetOffset ? e.jumpTargetOffset : this.jumpTargetOffset), (r.jumpSequenceId = void 0 !== e.jumpSequenceId ? e.jumpSequenceId : this.jumpSequenceId), (r.jumped = void 0 !== e.jumped ? !0 === e.jumped : this.jumped), (r.jumpedToPresent = void 0 !== e.jumpedToPresent ? !0 === e.jumpedToPresent : this.jumpedToPresent), (r.jumpFlash = void 0 !== e.jumpFlash ? !0 === e.jumpFlash : this.jumpFlash), (r.jumpReturnTargetId = void 0 !== e.jumpReturnTargetId ? e.jumpReturnTargetId : this.jumpReturnTargetId), (r.focusTargetId = void 0 !== e.focusTargetId ? e.focusTargetId : this.focusTargetId), (r.hasMoreBefore = void 0 !== e.hasMoreBefore ? !0 === e.hasMoreBefore : this.hasMoreBefore), (r.hasMoreAfter = void 0 !== e.hasMoreAfter ? !0 === e.hasMoreAfter : this.hasMoreAfter), (r.loadingMore = void 0 !== e.loadingMore ? e.loadingMore : this.loadingMore), (r.revealedMessageId = void 0 !== e.revealedMessageId ? e.revealedMessageId : this.revealedMessageId), (r.cached = void 0 !== e.cached ? e.cached : this.cached), (r.hasFetched = void 0 !== e.hasFetched ? e.hasFetched : this.hasFetched), (r.error = void 0 !== e.error ? e.error : this.error)), r;
    }
    get length() {
        return this._array.length;
    }
    toArray() {
        return [...this._array];
    }
    forEach(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (r) {
            let r = this._array;
            for (let i = r.length - 1; i >= 0 && !1 !== e.call(n, r[i], i); i--);
        } else this._array.forEach(e, n);
    }
    reduce(e, n) {
        return this._array.reduce(e, n);
    }
    some(e, n) {
        return this._array.some(e, n);
    }
    filter(e, n) {
        return this._array.filter(e, n);
    }
    forAll(e, n) {
        this._before.forEach(e, n), this._array.forEach(e, n), this._after.forEach(e, n);
    }
    findOldest(e) {
        var n, r;
        return null !== (r = null !== (n = d().find(this._before._messages, e)) && void 0 !== n ? n : d().find(this._array, e)) && void 0 !== r ? r : d().find(this._after._messages, e);
    }
    findNewest(e) {
        var n, r;
        return null !== (r = null !== (n = d().findLast(this._after._messages, e)) && void 0 !== n ? n : d().findLast(this._array, e)) && void 0 !== r ? r : d().findLast(this._before._messages, e);
    }
    map(e, n) {
        return this._array.map(e, n);
    }
    first() {
        return this._array[0];
    }
    last() {
        return this._array[this._array.length - 1];
    }
    get(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = this._map[e];
        return null == i && r ? (null !== (n = this._before.get(e)) && void 0 !== n ? n : this._after.get(e)) : i;
    }
    getByIndex(e) {
        return this._array[e];
    }
    getAfter(e) {
        let n = this.get(e);
        if (null == n) return null;
        let r = this._array.indexOf(n);
        return -1 === r || r === this.length - 1 ? null : this._array[r + 1];
    }
    getManyAfter(e, n, r) {
        let i = this.get(e);
        if (null == i) return null;
        let a = this._array.indexOf(i);
        if (-1 === a) return null;
        let o = [];
        for (let e = a + 1; e < this.length && (-1 === n || o.length < n); e++) (null == r || r(this._array[e])) && o.push(this._array[e]);
        return o;
    }
    getManyBefore(e, n, r) {
        let i = this.get(e);
        if (null == i) return null;
        let a = this._array.indexOf(i);
        if (-1 === a) return null;
        let o = [];
        for (let e = a - 1; e >= 0 && (-1 === n || o.length < n); e--) (null == r || r(this._array[e])) && o.unshift(this._array[e]);
        return o;
    }
    has(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return null != this._map[e] || (n && (this._before.has(e) || this._after.has(e)));
    }
    indexOf(e) {
        let n = -1;
        return this._array.find((r, i) => r.id === e && ((n = i), !0)), n;
    }
    hasPresent() {
        return (this._after.length > 0 && this._after.wasAtEdge) || !this.hasMoreAfter;
    }
    hasBeforeCached(e) {
        if (this.length > 0 && this._before.length > 0) {
            let n = this.first();
            return null != n && n.id === e;
        }
        return !1;
    }
    hasAfterCached(e) {
        if (this.length > 0 && this._after.length > 0) {
            let n = this.last();
            return null != n && n.id === e;
        }
        return !1;
    }
    update(e, n) {
        let r = this._map[e];
        if (null == r) return this._before.has(e) ? this.mutate((r) => r._before.update(e, n), !0) : this._after.has(e) ? this.mutate((r) => r._after.update(e, n), !0) : this;
        let i = n(r);
        return this.mutate((e) => {
            (e._map[r.id] = i), (e._array[e._array.indexOf(r)] = i);
        }, !0);
    }
    replace(e, n) {
        let r = this._map[e];
        if (null == r) return this._before.has(e) ? this.mutate((r) => r._before.replace(e, n), !0) : this._after.has(e) ? this.mutate((r) => r._after.replace(e, n), !0) : this;
        return this.mutate((i) => {
            delete i._map[e], (i._map[n.id] = n), (i._array[i._array.indexOf(r)] = n);
        }, !0);
    }
    remove(e) {
        return this.mutate((n) => {
            delete n._map[e], (n._array = n._array.filter((n) => n.id !== e)), n._before.remove(e), n._after.remove(e);
        }, !0);
    }
    removeMany(e) {
        return e.some((e) => this.has(e))
            ? this.mutate((n) => {
                  d().each(e, (e) => {
                      delete n._map[e];
                  }),
                      (n._array = n._array.filter((n) => -1 === e.indexOf(n.id))),
                      n._before.removeMany(e),
                      n._after.removeMany(e);
              }, !0)
            : this;
    }
    merge(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this.mutate((i) => {
            i._merge(e, n, r);
        }, !0);
    }
    _merge(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (e = e.filter((e) => {
            let n = this._map[e.id];
            return (this._map[e.id] = e), null == n || ((this._array[this._array.indexOf(n)] = e), !1);
        })),
            r && (n ? this._before : this._after).clear(),
            (this._array = n ? [...e, ...this._array] : [...this._array, ...e]);
    }
    mergeDelta() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        return this.mutate((i) => {
            i._before.clear(), i._after.clear();
            let a = new Set(r);
            e.forEach((e) => a.add(e.id)),
                n.forEach((e) => a.add(e.id)),
                (i._array = i._array
                    .filter((e) => !a.has(e.id))
                    .concat(
                        e.map((e) => (0, m.e5)(e)),
                        n.map((e) => (0, m.e5)(e))
                    )
                    .sort((e, n) => g.default.compare(e.id, n.id)));
        });
    }
    _clearMessages() {
        (this._array = []), (this._map = {});
    }
    reset(e) {
        return this.mutate((n) => {
            (n._array = e), (n._map = {}), e.forEach((e) => (n._map[e.id] = e)), n._before.clear(), n._after.clear();
        });
    }
    truncateTop(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = this._array.length - e;
        return r <= 0
            ? this
            : this.mutate((e) => {
                  for (let n = 0; n < r; n++) delete e._map[e._array[n].id];
                  e._before.cache(e._array.slice(0, r), !e.hasMoreBefore), (e._array = e._array.slice(r)), (e.hasMoreBefore = !0);
              }, n);
    }
    truncateBottom(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return !I || this._array.length <= e
            ? this
            : this.mutate((n) => {
                  for (let r = e; r < this._array.length; r++) delete n._map[n._array[r].id];
                  n._after.cache(n._array.slice(e, this._array.length), !n.hasMoreAfter), (n._array = n._array.slice(0, e)), (n.hasMoreAfter = !0);
              }, n);
    }
    jumpToPresent(e) {
        return this.mutate((n) => {
            let r = n._after.extractAll();
            n.hasMoreAfter = !1;
            let i = Math.max(r.length - e, 0),
                a = r.slice(i);
            r.splice(i), n._before.cache(n._array), n._before.cache(r), n._clearMessages(), n._merge(a), (n.hasMoreBefore = n._before.length > 0), (n.jumped = !0), (n.jumpTargetId = null), (n.jumpTargetOffset = 0), (n.jumpedToPresent = !0), (n.jumpFlash = !1), (n.jumpReturnTargetId = null), (n.jumpSequenceId = n.jumpSequenceId + 1), (n.ready = !0), (n.loadingMore = !1);
        }, !0);
    }
    jumpToMessage(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0;
        return this.mutate((o) => {
            (o.jumped = !0), (o.jumpedToPresent = !1), (o.jumpType = null != a ? a : p.SR.ANIMATED), (o.jumpTargetId = e), (o.jumpTargetOffset = null != e && null != r ? r : 0), (o.jumpSequenceId = o.jumpSequenceId + 1), (o.jumpFlash = n), (o.jumpReturnTargetId = i), (o.ready = !0), (o.loadingMore = !1);
        }, !1);
    }
    focusOnMessage(e) {
        return this.mutate((n) => {
            (n.focusTargetId = e), (n.ready = !0), (n.loadingMore = !1);
        }, !1);
    }
    loadFromCache(e, n) {
        return this.mutate((r) => {
            let i = e ? r._before : r._after;
            r._merge(i.extract(n), e);
            let a = i.length > 0 || !i.wasAtEdge;
            e ? (r.hasMoreBefore = a) : (r.hasMoreAfter = a), (r.ready = !0), (r.loadingMore = !1);
        }, !0);
    }
    truncate(e, n) {
        return this.length <= v.PNu ? this : e ? this.truncateBottom(v.j3N) : n ? this.truncateTop(v.j3N) : this;
    }
    receiveMessage(e) {
        var n, r;
        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            a = null == e.nonce ? null : this.get(e.nonce, !0);
        if (null != a && ((null === (n = e.author) || void 0 === n ? void 0 : n.id) === (null === (r = a.author) || void 0 === r ? void 0 : r.id) || (null != e.interaction && e.interaction.user.id === a.author.id)) && null != e.nonce && a.id === e.nonce) {
            let n = (0, m.e5)(e);
            return null != a.interactionData && (n.interactionData = a.interactionData), this.replace(e.nonce, n);
        }
        if (this.hasMoreAfter) this._after.wasAtEdge && (this._after.wasAtEdge = !1);
        else {
            let n = f.Z.getCurrentConfig({ location: '2ecb25_1' }, { autoTrackExposure: !1 }).enabled ? (0, m.e5)(e) : S(this, e),
                r = this.merge([n]);
            return i ? r.truncateTop(v.j3N, !1) : this.length > v.PNu ? r.truncateBottom(v.j3N, !1) : r;
        }
        return this;
    }
    receivePushNotification(e) {
        return null != (null == e.nonce ? null : this.get(e.nonce, !0))
            ? this
            : this.mutate({
                  ready: !0,
                  cached: !0
              }).merge([S(this, e)]);
    }
    receiveReactionInAppNotification(e) {
        return null != (null == e.nonce ? null : this.get(e.nonce, !0))
            ? this
            : this.mutate({
                  ready: !0,
                  cached: !0
              }).merge([S(this, e)]);
    }
    loadStart(e) {
        var n, r, i, a;
        return this.mutate({
            loadingMore: !0,
            jumped: null != e,
            jumpedToPresent: null !== (n = null == e ? void 0 : e.present) && void 0 !== n && n,
            jumpTargetId: null !== (r = null == e ? void 0 : e.messageId) && void 0 !== r ? r : null,
            jumpTargetOffset: null !== (i = null == e ? void 0 : e.offset) && void 0 !== i ? i : 0,
            jumpReturnTargetId: null !== (a = null == e ? void 0 : e.returnMessageId) && void 0 !== a ? a : null,
            ready: null == e && this.ready
        });
    }
    loadComplete(e) {
        var n, r, i, a, o, s, l, u, c, h, _;
        let g = [...e.newMessages],
            E = null !== (n = e.isBefore) && void 0 !== n && n,
            y = null !== (r = e.isAfter) && void 0 !== r && r,
            I = null !== (i = e.jump) && void 0 !== i ? i : null,
            T = null !== (a = e.hasMoreBefore) && void 0 !== a && a,
            A = null !== (o = e.hasMoreAfter) && void 0 !== o && o,
            C = null !== (s = e.cached) && void 0 !== s && s,
            N = d()(g)
                .reverse()
                .map(f.Z.getCurrentConfig({ location: '2ecb25_2' }, { autoTrackExposure: !1 }).enabled ? (e) => (0, m.e5)(e) : (e) => S(this, e))
                .value(),
            R = null;
        if ((E || y) && null == I && this.ready) R = this.merge(N, E, !0);
        else {
            let e = this._array.filter((e) => e.state === v.yb.SENDING),
                n = this._array.filter((e) => e.state === v.yb.SEND_FAILED),
                r = e.length > 0 || n.length > 0;
            (R = this.reset(N)), !r || E || y || (null == I ? void 0 : I.messageId) != null || (null == I ? void 0 : I.offset) != null ? b.info('loadComplete: resetting state for channelId='.concat(this.channelId, ', sending.length=').concat(e.length)) : (n.length > 0 && (b.info('loadComplete: merging with SEND_FAILED messages for channelId='.concat(this.channelId)), (R = R.merge(n))), e.length > 0 && (b.info('loadComplete: merging with SENDING messages for channelId='.concat(this.channelId)), (R = R.merge(e))));
        }
        return (R = R.mutate({
            ready: !0,
            loadingMore: !1,
            jumpType: null !== (l = null == I ? void 0 : I.jumpType) && void 0 !== l ? l : p.SR.ANIMATED,
            jumpFlash: null !== (u = null == I ? void 0 : I.flash) && void 0 !== u && u,
            jumped: null != I,
            jumpedToPresent: null !== (c = null == I ? void 0 : I.present) && void 0 !== c && c,
            jumpTargetId: null !== (h = null == I ? void 0 : I.messageId) && void 0 !== h ? h : null,
            jumpTargetOffset: null != I && null != I.messageId && null != I.offset ? I.offset : 0,
            jumpSequenceId: null != I ? R.jumpSequenceId + 1 : R.jumpSequenceId,
            jumpReturnTargetId: null !== (_ = null == I ? void 0 : I.returnMessageId) && void 0 !== _ ? _ : null,
            hasMoreBefore: null == I && y ? R.hasMoreBefore : T,
            hasMoreAfter: null == I && E ? R.hasMoreAfter : A,
            cached: C,
            hasFetched: e.hasFetched,
            error: !1
        }));
    }
    addCachedMessages(e, n) {
        (0, h.Z)(e);
        let r = e.map((e) => S(this, e)).reverse();
        return (
            this._array.filter((e) => !r.some((n) => n.id === e.id)).forEach((e) => E.$(r, e, (e, n) => g.default.compare(e.id, n.id))),
            this.reset(r).mutate({
                ready: !0,
                cached: n,
                error: !1
            })
        );
    }
    constructor(e) {
        y(this, 'channelId', void 0), y(this, 'ready', void 0), y(this, 'jumpType', void 0), y(this, 'jumpTargetId', void 0), y(this, 'jumpTargetOffset', void 0), y(this, 'jumpSequenceId', void 0), y(this, 'jumped', void 0), y(this, 'jumpedToPresent', void 0), y(this, 'jumpFlash', void 0), y(this, 'jumpReturnTargetId', void 0), y(this, 'focusTargetId', void 0), y(this, 'hasMoreBefore', void 0), y(this, 'hasMoreAfter', void 0), y(this, 'loadingMore', void 0), y(this, 'revealedMessageId', void 0), y(this, 'cached', void 0), y(this, 'hasFetched', void 0), y(this, 'error', void 0), y(this, '_array', []), y(this, '_before', void 0), y(this, '_after', void 0), y(this, '_map', {}), (this.channelId = e), (this.ready = !1), (this.jumpTargetId = null), (this.jumpTargetOffset = 0), (this.jumpSequenceId = 1), (this.jumped = !1), (this.jumpedToPresent = !1), (this.jumpType = p.SR.ANIMATED), (this.jumpFlash = !0), (this.jumpReturnTargetId = null), (this.hasMoreBefore = !0), (this.hasMoreAfter = !1), (this.loadingMore = !1), (this.revealedMessageId = null), this._clearMessages(), (this._before = new A(!0)), (this._after = new A(!1)), (this.cached = !1), (this.hasFetched = !1), (this.error = !1);
    }
}
y(C, '_channelMessages', {}), (n.Z = C);
