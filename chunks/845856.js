n.d(t, { f: () => a });
var r = n(442837);
function i(e, t, n) {
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
class a extends r.yh {
    setKv(e) {
        this.kv = e;
    }
    constructor(e, t) {
        super(
            e,
            null == t
                ? void 0
                : t({
                      reset: () => {
                          this.setKv({});
                      },
                      set: (e, t) => {
                          this.kv[e] = t;
                      },
                      remove: (e) => {
                          delete this.kv[e];
                      }
                  })
        ),
            i(this, 'actionsHandledByLibdiscore', void 0),
            i(this, 'kv', {}),
            (this.actionsHandledByLibdiscore = null == t);
    }
}
