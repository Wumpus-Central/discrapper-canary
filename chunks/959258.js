n.d(t, {
    q: () => u,
    v: () => d
}),
    n(411104),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(731965);
function a(e, t, n) {
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
let s = 100,
    l = 0.7;
class c {
    handleVisible(e, t) {
        var n, r;
        if (this.visibleComponents.has(e.target)) return;
        let i = Math.abs(e.intersectionRect.bottom - Number(null == (n = e.rootBounds) ? void 0 : n.bottom)) < Math.abs(e.intersectionRect.top - Number(null == (r = e.rootBounds) ? void 0 : r.top));
        i ? (this.visibleComponents = new Set([e.target, ...this.visibleComponents])) : this.visibleComponents.add(e.target);
        let o = i || this.animatingComponents.size < s;
        o ? this.animatingComponents.add(e.target) : this.animatingComponents.delete(e.target), t.updateState(o), o && this.visibleComponents.size > s && this.stopNodeFromAnimating();
    }
    handleNotVisible(e, t) {
        this.visibleComponents.has(e.target) && (t.updateState(!1), this.visibleComponents.delete(e.target), this.animatingComponents.delete(e.target), this.potentiallyAnimateNewNode());
    }
    stopNodeFromAnimating() {
        let e = Array.from(this.visibleComponents);
        for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            if (this.animatingComponents.has(n)) {
                let e = this.registeredNodes.get(n);
                null == e || e.updateState(!1), this.animatingComponents.delete(n);
                return;
            }
        }
    }
    potentiallyAnimateNewNode() {
        if (this.animatingComponents.size < s && this.visibleComponents.size > this.animatingComponents.size) {
            for (let e of this.visibleComponents)
                if (!this.animatingComponents.has(e)) {
                    let t = this.registeredNodes.get(e);
                    null == t || t.updateState(!0), this.animatingComponents.add(e);
                    return;
                }
        }
    }
    registerNode(e, t) {
        var n;
        if (this.registeredNodes.has(e)) throw Error('ThoughtfullyAnimated.registeredNode: Unable to register an already registered node...');
        return (
            this.registeredNodes.set(e, { updateState: t }),
            null == (n = this.observer) || n.observe(e),
            () => {
                this.unregisterNode(e);
            }
        );
    }
    unregisterNode(e) {
        var t;
        this.registeredNodes.delete(e), this.animatingComponents.delete(e), this.visibleComponents.delete(e), null == (t = this.observer) || t.unobserve(e), this.potentiallyAnimateNewNode();
    }
    cleanUp() {
        var e;
        null == (e = this.observer) || e.disconnect(), this.registeredNodes.clear(), this.visibleComponents.clear();
    }
    constructor(e = !1) {
        if ((a(this, 'registeredNodes', new Map()), a(this, 'visibleComponents', new Set()), a(this, 'animatingComponents', new Set()), a(this, 'observer', void 0), e)) return;
        this.observer = new window.IntersectionObserver(
            (e) => {
                (0, o.j)(() => {
                    e.forEach((e) => {
                        let t = this.registeredNodes.get(e.target);
                        null != t && (e.intersectionRatio >= l ? this.handleVisible(e, t) : this.handleNotVisible(e, t));
                    });
                });
            },
            { threshold: l }
        );
    }
}
let u = i.createContext({
    manager: new c(!0),
    useThoughtfullyAnimated: () => ({
        animate: !0,
        registerRef: () => {}
    })
});
function d(e) {
    let { children: t } = e,
        [n] = i.useState(() => {
            let e = new c();
            return {
                manager: e,
                useThoughtfullyAnimated() {
                    let t = i.useRef(null),
                        [n, r] = i.useState(!1);
                    return {
                        animate: n,
                        registerRef: i.useCallback((n) => {
                            null != t.current && e.unregisterNode(t.current), (t.current = n), null != t.current && e.registerNode(t.current, r);
                        }, [])
                    };
                }
            };
        });
    return (
        i.useEffect(() => () => n.manager.cleanUp(), [n.manager]),
        (0, r.jsx)(u.Provider, {
            value: n,
            children: t
        })
    );
}
