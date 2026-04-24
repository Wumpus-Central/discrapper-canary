n.d(t, { W: () => o, t: () => l });
var i = n(627968),
    s = n(64700),
    a = n(121894);
class r {
    registeredNodes = new Map();
    visibleComponents = new Set();
    animatingComponents = new Set();
    observer;
    constructor(e = !1) {
        if (e) return;
        this.observer = new window.IntersectionObserver(
            (e) => {
                (0, a.r)(() => {
                    e.forEach((e) => {
                        let t = this.registeredNodes.get(e.target);
                        null == t ||
                            (e.intersectionRatio >= 0.7 ? this.handleVisible(e, t) : this.handleNotVisible(e, t));
                    });
                });
            },
            { threshold: 0.7 },
        );
    }
    handleVisible(e, t) {
        if (this.visibleComponents.has(e.target)) return;
        let n =
            Math.abs(e.intersectionRect.bottom - Number(e.rootBounds?.bottom)) <
            Math.abs(e.intersectionRect.top - Number(e.rootBounds?.top));
        n
            ? (this.visibleComponents = new Set([e.target, ...this.visibleComponents]))
            : this.visibleComponents.add(e.target);
        let i = n || this.animatingComponents.size < 100;
        i ? this.animatingComponents.add(e.target) : this.animatingComponents.delete(e.target),
            t.updateState(i),
            i && this.visibleComponents.size > 100 && this.stopNodeFromAnimating();
    }
    handleNotVisible(e, t) {
        this.visibleComponents.has(e.target) &&
            (t.updateState(!1),
            this.visibleComponents.delete(e.target),
            this.animatingComponents.delete(e.target),
            this.potentiallyAnimateNewNode());
    }
    stopNodeFromAnimating() {
        let e = Array.from(this.visibleComponents);
        for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            if (this.animatingComponents.has(n)) {
                let e = this.registeredNodes.get(n);
                e?.updateState(!1), this.animatingComponents.delete(n);
                return;
            }
        }
    }
    potentiallyAnimateNewNode() {
        if (this.animatingComponents.size < 100 && this.visibleComponents.size > this.animatingComponents.size) {
            for (let e of this.visibleComponents)
                if (!this.animatingComponents.has(e)) {
                    let t = this.registeredNodes.get(e);
                    t?.updateState(!0), this.animatingComponents.add(e);
                    return;
                }
        }
    }
    registerNode(e, t) {
        if (this.registeredNodes.has(e))
            throw Error("ThoughtfullyAnimated.registeredNode: Unable to register an already registered node...");
        return (
            this.registeredNodes.set(e, { updateState: t }),
            this.observer?.observe(e),
            () => {
                this.unregisterNode(e);
            }
        );
    }
    unregisterNode(e) {
        this.registeredNodes.delete(e),
            this.animatingComponents.delete(e),
            this.visibleComponents.delete(e),
            this.observer?.unobserve(e),
            this.potentiallyAnimateNewNode();
    }
    cleanUp() {
        this.observer?.disconnect(), this.registeredNodes.clear(), this.visibleComponents.clear();
    }
}
let o = s.createContext({
    manager: new r(!0),
    useThoughtfullyAnimated: () => ({ animate: !0, registerRef: () => {} }),
});
function l(e) {
    let { children: t } = e,
        [n] = s.useState(() => {
            let e = new r();
            return {
                manager: e,
                useThoughtfullyAnimated() {
                    let t = s.useRef(null),
                        [n, i] = s.useState(!1);
                    return {
                        animate: n,
                        registerRef: s.useCallback((n) => {
                            null != t.current && e.unregisterNode(t.current),
                                (t.current = n),
                                null != t.current && e.registerNode(t.current, i);
                        }, []),
                    };
                },
            };
        });
    return s.useEffect(() => () => n.manager.cleanUp(), [n.manager]), (0, i.jsx)(o.Provider, { value: n, children: t });
}
