var i = n(444675);
function r(e, t) {
    var n = this,
        r = this._readableState && this._readableState.destroyed,
        o = this._writableState && this._writableState.destroyed;
    return (
        r || o
            ? t
                ? t(e)
                : e && (this._writableState ? this._writableState.errorEmitted || ((this._writableState.errorEmitted = !0), i.nextTick(l, this, e)) : i.nextTick(l, this, e))
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                  !t && e ? (n._writableState ? (n._writableState.errorEmitted ? i.nextTick(s, n) : ((n._writableState.errorEmitted = !0), i.nextTick(a, n, e))) : i.nextTick(a, n, e)) : t ? (i.nextTick(s, n), t(e)) : i.nextTick(s, n);
              })),
        this
    );
}
function a(e, t) {
    l(e, t), s(e);
}
function s(e) {
    (!e._writableState || e._writableState.emitClose) && (!e._readableState || e._readableState.emitClose) && e.emit('close');
}
function o() {
    this._readableState && ((this._readableState.destroyed = !1), (this._readableState.reading = !1), (this._readableState.ended = !1), (this._readableState.endEmitted = !1)), this._writableState && ((this._writableState.destroyed = !1), (this._writableState.ended = !1), (this._writableState.ending = !1), (this._writableState.finalCalled = !1), (this._writableState.prefinished = !1), (this._writableState.finished = !1), (this._writableState.errorEmitted = !1));
}
function l(e, t) {
    e.emit('error', t);
}
function u(e, t) {
    var n = e._readableState,
        i = e._writableState;
    (n && n.autoDestroy) || (i && i.autoDestroy) ? e.destroy(t) : e.emit('error', t);
}
e.exports = {
    destroy: r,
    undestroy: o,
    errorOrDestroy: u
};
