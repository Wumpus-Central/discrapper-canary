r.d(n, {
    q: function () {
        return p;
    },
    v: function () {
        return h;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(731965);
function u(e, n, r) {
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
let c = 100,
    d = 0.7;
class f {
    handleVisible(e, n) {
        var r, i;
        if (this.visibleComponents.has(e.target)) return;
        let a = Math.abs(e.intersectionRect.bottom - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.top));
        a ? (this.visibleComponents = new Set([e.target, ...this.visibleComponents])) : this.visibleComponents.add(e.target);
        let o = a || this.animatingComponents.size < c;
        o ? this.animatingComponents.add(e.target) : this.animatingComponents.delete(e.target), n.updateState(o), o && this.visibleComponents.size > c && this.stopNodeFromAnimating();
    }
    handleNotVisible(e, n) {
        this.visibleComponents.has(e.target) && (n.updateState(!1), this.visibleComponents.delete(e.target), this.animatingComponents.delete(e.target), this.potentiallyAnimateNewNode());
    }
    stopNodeFromAnimating() {
        let e = Array.from(this.visibleComponents);
        for (let n = e.length - 1; n >= 0; n--) {
            let r = e[n];
            if (this.animatingComponents.has(r)) {
                let e = this.registeredNodes.get(r);
                null == e || e.updateState(!1), this.animatingComponents.delete(r);
                return;
            }
        }
    }
    potentiallyAnimateNewNode() {
        if (this.animatingComponents.size < c && this.visibleComponents.size > this.animatingComponents.size) {
            for (let e of this.visibleComponents)
                if (!this.animatingComponents.has(e)) {
                    let n = this.registeredNodes.get(e);
                    null == n || n.updateState(!0), this.animatingComponents.add(e);
                    return;
                }
        }
    }
    registerNode(e, n) {
        var r;
        if (this.registeredNodes.has(e)) throw Error('ThoughtfullyAnimated.registeredNode: Unable to register an already registered node...');
        return (
            this.registeredNodes.set(e, { updateState: n }),
            null === (r = this.observer) || void 0 === r || r.observe(e),
            () => {
                this.unregisterNode(e);
            }
        );
    }
    unregisterNode(e) {
        var n;
        this.registeredNodes.delete(e), this.animatingComponents.delete(e), this.visibleComponents.delete(e), null === (n = this.observer) || void 0 === n || n.unobserve(e), this.potentiallyAnimateNewNode();
    }
    cleanUp() {
        var e;
        null === (e = this.observer) || void 0 === e || e.disconnect(), this.registeredNodes.clear(), this.visibleComponents.clear();
    }
    constructor(e = !1) {
        if ((u(this, 'registeredNodes', new Map()), u(this, 'visibleComponents', new Set()), u(this, 'animatingComponents', new Set()), u(this, 'observer', void 0), e)) return;
        this.observer = new window.IntersectionObserver(
            (e) => {
                (0, l.j)(() => {
                    e.forEach((e) => {
                        let n = this.registeredNodes.get(e.target);
                        if (null != n) e.intersectionRatio >= d ? this.handleVisible(e, n) : this.handleNotVisible(e, n);
                    });
                });
            },
            { threshold: d }
        );
    }
}
let p = s.createContext({
    manager: new f(!0),
    useThoughtfullyAnimated: () => ({
        animate: !0,
        registerRef: () => {}
    })
});
function h(e) {
    let { children: n } = e,
        [r] = s.useState(() => {
            let e = new f();
            return {
                manager: e,
                useThoughtfullyAnimated() {
                    let n = s.useRef(null),
                        [r, i] = s.useState(!1);
                    return {
                        animate: r,
                        registerRef: s.useCallback((r) => {
                            null != n.current && e.unregisterNode(n.current), (n.current = r), null != n.current && e.registerNode(n.current, i);
                        }, [])
                    };
                }
            };
        });
    return (
        s.useEffect(() => () => r.manager.cleanUp(), [r.manager]),
        (0, o.jsx)(p.Provider, {
            value: r,
            children: n
        })
    );
}
