n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(996106),
    r = n(631467),
    l = n(76238),
    a = n(186901),
    s = n(981631);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class c extends l.Z {
    send(e) {
        var t;
        null === (t = this.onSendingToRPCClient) || void 0 === t || t.call(this, e, this.id), this.postMessageToRPCClient([r.Z.FRAME, e], this.origin);
    }
    close(e, t) {
        !this.closed &&
            this.postClose(
                this.origin,
                {
                    code: e,
                    message: t
                },
                this.postMessageToRPCClient
            ),
            (this.closed = !0);
    }
    constructor({ origin: e, postMessageToRPCClient: t, frameId: n, version: r, encoding: l, logger: c, postClose: d, onSendingToRPCClient: u }) {
        if ((super(a.He.POST_MESSAGE, r, l), o(this, 'origin', void 0), o(this, 'frameId', void 0), o(this, 'postMessageToRPCClient', void 0), o(this, 'logger', void 0), o(this, 'postClose', void 0), o(this, 'onSendingToRPCClient', void 0), o(this, 'closed', void 0), -1 === ['etf', 'json'].indexOf(l))) throw new i.Z({ closeCode: s.$VG.INVALID_ENCODING }, 'Invalid Encoding: '.concat(l));
        if ('etf' === l) throw new i.Z({ closeCode: s.$VG.INVALID_ENCODING }, 'Erlpack cannot be used on this client');
        (this.origin = e), (this.postMessageToRPCClient = t), (this.frameId = n), (this.logger = c), (this.postClose = d), (this.onSendingToRPCClient = u), (this.closed = !1);
    }
}
