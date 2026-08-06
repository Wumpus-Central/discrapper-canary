"use strict";
n.d(t, { A: () => r, G: () => d });
var i,
    r = (((i = {}).WithinAppContent = "within-app-content"), (i.AboveAppContent = "above-app-content"), i);
let a = { "within-app-content": 1, "above-app-content": 1002 };
class s {
    _pool = null;
    setPool(e) {
        this._pool = e;
    }
    get pool() {
        if (null == this._pool) throw Error("FramePlacementStrategy: pool accessed before setPool");
        return this._pool;
    }
}
class l extends s {
    placed = new Map();
    rafHandle = null;
    initialize(e) {
        (e.style.position = "fixed"),
            (e.style.top = "0"),
            (e.style.left = "0"),
            (e.style.pointerEvents = "none"),
            (e.style.display = "none"),
            this.pool.appendChild(e);
    }
    place(e, t, n) {
        this.placed.set(e, { target: t, level: n }), this.position(e, t, n), this.ensureTicking();
    }
    unplace(e) {
        this.placed.delete(e), (e.style.display = "none");
    }
    ensureTicking() {
        null == this.rafHandle && (this.rafHandle = requestAnimationFrame(this.tick));
    }
    position(e, t, n) {
        let i = t.getBoundingClientRect();
        (e.style.display = "block"),
            (e.style.zIndex = String(a[n])),
            (e.style.transform = `translate(${i.left}px, ${i.top}px)`),
            (e.style.width = `${i.width}px`),
            (e.style.height = `${i.height}px`);
    }
    tick = () => {
        for (let [e, { target: t, level: n }] of this.placed) this.position(e, t, n);
        this.rafHandle = this.placed.size > 0 ? requestAnimationFrame(this.tick) : null;
    };
}
class o extends s {
    initialize(e) {
        (e.style.width = "100%"),
            (e.style.height = "100%"),
            (e.style.pointerEvents = "none"),
            (e.style.display = "none"),
            this.pool.appendChild(e);
    }
    place(e, t, n) {
        e.parentElement !== t && t.moveBefore(e, null), (e.style.display = "block");
    }
    unplace(e) {
        e.parentElement !== this.pool && this.pool.moveBefore(e, null), (e.style.display = "none");
    }
}
function d() {
    return "function" == typeof Element.prototype.moveBefore ? new o() : new l();
}
