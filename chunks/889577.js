function r(e, t, n) {
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
n.d(t, { X: () => i });
class i {
    static fromServer(e) {
        return new i(e);
    }
    toDesktopStyles() {
        if (null != this.desktopMaxHeight) return { maxHeight: this.desktopMaxHeight };
    }
    constructor(e) {
        (r(this, 'desktopMaxHeight', void 0), (this.desktopMaxHeight = e.desktop_max_height));
    }
}
