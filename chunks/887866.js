var i = r(444675);
function a(e, n) {
    var r = this,
        a = this._readableState && this._readableState.destroyed,
        l = this._writableState && this._writableState.destroyed;
    return a || l
        ? (n ? n(e) : e && (this._writableState ? !this._writableState.errorEmitted && ((this._writableState.errorEmitted = !0), i.nextTick(u, this, e)) : i.nextTick(u, this, e)), this)
        : (this._readableState && (this._readableState.destroyed = !0),
          this._writableState && (this._writableState.destroyed = !0),
          this._destroy(e || null, function (e) {
              !n && e ? (r._writableState ? (r._writableState.errorEmitted ? i.nextTick(s, r) : ((r._writableState.errorEmitted = !0), i.nextTick(o, r, e))) : i.nextTick(o, r, e)) : n ? (i.nextTick(s, r), n(e)) : i.nextTick(s, r);
          }),
          this);
}
function o(e, n) {
    u(e, n), s(e);
}
function s(e) {
    if (!e._writableState || !!e._writableState.emitClose) (!e._readableState || e._readableState.emitClose) && e.emit('close');
}
function l() {
    this._readableState && ((this._readableState.destroyed = !1), (this._readableState.reading = !1), (this._readableState.ended = !1), (this._readableState.endEmitted = !1)), this._writableState && ((this._writableState.destroyed = !1), (this._writableState.ended = !1), (this._writableState.ending = !1), (this._writableState.finalCalled = !1), (this._writableState.prefinished = !1), (this._writableState.finished = !1), (this._writableState.errorEmitted = !1));
}
function u(e, n) {
    e.emit('error', n);
}
function c(e, n) {
    var r = e._readableState,
        i = e._writableState;
    (r && r.autoDestroy) || (i && i.autoDestroy) ? e.destroy(n) : e.emit('error', n);
}
e.exports = {
    destroy: a,
    undestroy: l,
    errorOrDestroy: c
};
