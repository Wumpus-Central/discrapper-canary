n.d(t, { W: () => C });
var r = n(627968);
n(64700);
var i = n(676999),
    s = n(96620),
    o = n(765178),
    l = n(425763),
    a = n(375708);
class c {
    announcer;
    constructor(e) {
        if (null != e) this.announcer = e;
        else {
            const e = n(756942);
            this.announcer = { announce: e.announce, clearAnnouncements: e.clearAnnouncer };
        }
    }
    announce(e, t, n) {
        this.announcer.announce(e, t, n);
    }
    announceDrag(e, t) {
        if (null == e) return;
        let n = this.getName(e, t);
        this.announce(a.intl.formatToPlainString(a.t["vHD/Je"], { itemName: n }));
    }
    announceHover(e, t) {
        null != e && this.announce(this.getName(e, t));
    }
    announceDrop() {
        this.announce(a.intl.string(a.t.lMkmz7));
    }
    announceCancel() {
        this.announce(a.intl.string(a.t["u4d/eC"]));
    }
    clear() {
        this.announcer.clearAnnouncements();
    }
    getName(e, t) {
        return e.getAttribute("data-dnd-name") ?? e.getAttribute("aria-label") ?? t;
    }
}
class u {
    container;
    svg;
    foreignObject;
    constructor(e) {
        this.container = e?.createElement("div");
        const t = (this.svg = e?.createElement("svg"));
        null != t && (t.style.contain = "paint"),
            (this.foreignObject = e?.createElement("foreignObject")),
            null != this.container &&
                null != this.svg &&
                null != this.foreignObject &&
                ((this.container.className = "drag-previewer"),
                (this.container.style.cssText =
                    "z-index: 1000; filter: drop-shadow(0 0 0 var(--background-surface-high)) drop-shadow(var(--elevation-high))"),
                this.svg.appendChild(this.foreignObject),
                this.container.appendChild(this.svg),
                e?.body.appendChild(this.container));
    }
    createDragPreview(e) {
        if (null == this.container || null == this.svg || null == this.foreignObject) return;
        let { width: t, height: n } = e.getBoundingClientRect();
        this.svg.setAttribute("viewBox", `0 0 ${t} ${n}`),
            this.svg.setAttribute("width", `${t}`),
            this.svg.setAttribute("height", `${n}`),
            this.foreignObject.setAttribute("x", "0"),
            this.foreignObject.setAttribute("y", "0"),
            this.foreignObject.setAttribute("width", `${t}`),
            this.foreignObject.setAttribute("height", `${n}`);
        let r = e.cloneNode(!0);
        this.foreignObject.appendChild(r);
    }
    render(e) {
        let t = this.container;
        if (null == t) return;
        let n = e.getSourceClientOffset();
        null == n ||
            (e.isDragging() &&
                ((t.style.position = "fixed"), (t.style.left = `${n.x + 30}px`), (t.style.top = `${n.y + 15}px`)));
    }
    clear() {
        null != this.foreignObject && (this.foreignObject.innerHTML = "");
    }
}
n(321073);
var d = n(52724);
let h = "dndOriginalRole";
class f {
    targetNodes;
    manager;
    previewer;
    announcer;
    currentHoveredNode;
    focusManager;
    actions;
    monitor;
    constructor(e, t, n, r, i) {
        (this.targetNodes = t),
            (this.manager = n),
            (this.previewer = r),
            (this.announcer = i),
            (this.currentHoveredNode = this.findInitialHoveredNode(e, t)),
            (this.focusManager = (0, d.C)({
                getFocusableElements: () => this.getViableTargets(t),
                getActiveElement: () => e.ownerDocument.activeElement,
            })),
            (this.actions = n.getActions()),
            (this.monitor = n.getMonitor()),
            this.overrideRoleToApplicationForHoveredNode(),
            window.addEventListener("keydown", this.handleDraggedElementKeyDown, { capture: !0 });
    }
    findInitialHoveredNode(e, t) {
        let n = null;
        for (let r of t.values())
            (e.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING) != 0 &&
                (null == n || (r.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING) != 0) &&
                (n = r);
        return n;
    }
    restoreRoleOfHoveredNode() {
        if (null == this.currentHoveredNode) return;
        let e = this.currentHoveredNode.dataset[h];
        null != e &&
            ("" === e
                ? this.currentHoveredNode.removeAttribute("role")
                : this.currentHoveredNode.setAttribute("role", e),
            delete this.currentHoveredNode.dataset[h]);
    }
    overrideRoleToApplicationForHoveredNode() {
        null != this.currentHoveredNode &&
            ((this.currentHoveredNode.dataset[h] = this.currentHoveredNode.getAttribute("role") ?? ""),
            this.currentHoveredNode.setAttribute("role", "application"),
            this.currentHoveredNode.focus());
    }
    disconnect() {
        window.removeEventListener("keydown", this.handleDraggedElementKeyDown, { capture: !0 }),
            this.restoreRoleOfHoveredNode();
    }
    handleDraggedElementKeyDown = async (e) => {
        switch (e.key) {
            case "ArrowUp":
            case "ArrowLeft":
                e.preventDefault(), e.stopPropagation(), this.hoverNode(await this.getPreviousDropTarget());
                return;
            case "ArrowDown":
            case "ArrowRight":
                e.preventDefault(), e.stopPropagation(), this.hoverNode(await this.getNextDropTarget());
        }
    };
    hoverNode(e) {
        let t = Array.from(this.targetNodes.entries()).find((t) => {
            let [n, r] = t;
            return e === r;
        })?.[0];
        null != t &&
            (this.restoreRoleOfHoveredNode(),
            this.actions.hover([t], {
                clientOffset: (function (e) {
                    if (null == e) return { x: 0, y: 0 };
                    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
                    if (null == t) return { x: 0, y: 0 };
                    let { top: n, left: r } = t.getBoundingClientRect();
                    return { x: r, y: n };
                })(e),
            }),
            (this.currentHoveredNode = e),
            this.overrideRoleToApplicationForHoveredNode(),
            this.previewer.render(this.monitor),
            this.announcer.announceHover(e, t));
    }
    getNextDropTarget() {
        return this.focusManager.getNextFocusableElement({ wrap: !1, from: this.currentHoveredNode ?? void 0 });
    }
    getPreviousDropTarget() {
        return this.focusManager.getPreviousFocusableElement({ wrap: !1, from: this.currentHoveredNode ?? void 0 });
    }
    getViableTargets(e) {
        return this.getAllowedTargets(e).sort((e, t) => {
            if (e === t) return 0;
            let n = e.compareDocumentPosition(t);
            return (n & (Node.DOCUMENT_POSITION_FOLLOWING | (n & Node.DOCUMENT_POSITION_CONTAINED_BY))) != 0
                ? -1
                : +((n & (Node.DOCUMENT_POSITION_PRECEDING | (n & Node.DOCUMENT_POSITION_CONTAINS))) != 0);
        });
    }
    getAllowedTargets(e) {
        return null == this.monitor.getItemType()
            ? Array.from(e.values())
            : Array.from(e).reduce((e, t) => {
                  let [n, r] = t;
                  return this.manager.getMonitor().canDropOnTarget(n) && e.push(r), e;
              }, []);
    }
}
let p = [" ", "Enter"],
    m = ["Escape"];
function g(e) {
    e.preventDefault(), e.stopImmediatePropagation();
}
function A(e, t) {
    return t.includes(e.key);
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (!!t && !1 === e.isTrusted) || (e.key?.toLowerCase() === "d" && (e.metaKey || e.ctrlKey) && !e.altKey);
}
class y {
    static isSetUp;
    manager;
    actions;
    monitor;
    context;
    options;
    sourceNodes;
    sourcePreviewNodes;
    sourcePreviewNodeOptions;
    targetNodes;
    _navigator;
    _previewer;
    _announcer;
    _handlingFirstEvent = !1;
    constructor(e, t, n) {
        (this.manager = e),
            (this.actions = e.getActions()),
            (this.monitor = e.getMonitor()),
            (this.context = t),
            (this.options = n),
            (this.sourceNodes = new Map()),
            (this.sourcePreviewNodes = new Map()),
            (this.sourcePreviewNodeOptions = new Map()),
            (this.targetNodes = new Map()),
            (this._previewer = new u(t.document)),
            (this._announcer = new c(n?.announcer));
    }
    setup() {
        if (y.isSetUp) throw Error("Cannot have two Keyboard backends at the same time.");
        (y.isSetUp = !0),
            (this._handlingFirstEvent = !0),
            this.context.window?.addEventListener("keydown", this.handleGlobalKeyDown, { capture: !0 });
    }
    teardown() {
        (y.isSetUp = !1),
            this.context.window?.removeEventListener("keydown", this.handleGlobalKeyDown, { capture: !0 }),
            this.endDrag();
    }
    handleGlobalKeyDown = (e) => {
        this.monitor.isDragging() && A(e, m) && (this.endDrag(e), this._announcer.announceCancel());
    };
    setDndMode(e) {
        this.options?.onDndModeChanged(e);
    }
    profile() {
        return {
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            sourceNodes: this.sourceNodes.size,
        };
    }
    connectDragSource(e, t) {
        let n = this.handleDragStart.bind(this, e);
        return (
            this.sourceNodes.set(e, t),
            t.addEventListener("keydown", n),
            () => {
                this.sourceNodes.delete(e), t.removeEventListener("keydown", n);
            }
        );
    }
    connectDragPreview(e, t, n) {
        return (
            this.sourcePreviewNodeOptions.set(e, n),
            this.sourcePreviewNodes.set(e, t),
            () => {
                this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e);
            }
        );
    }
    connectDropTarget(e, t) {
        return (
            this.targetNodes.set(e, t),
            t.addEventListener("keydown", this.handleDrop),
            (t.tabIndex = Math.max(-1, t.tabIndex)),
            () => {
                this.targetNodes.delete(e), t.removeEventListener("keydown", this.handleDrop);
            }
        );
    }
    getSourceClientOffset = (e) =>
        (function (e) {
            if (null == e) return { x: 0, y: 0 };
            let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
            if (null == t) return { x: 0, y: 0 };
            let { top: n, left: r } = t.getBoundingClientRect();
            return { x: r, y: n };
        })(this.sourceNodes.get(e));
    handleDragStart = (e, t) => {
        if (!v(t, this._handlingFirstEvent) || ((this._handlingFirstEvent = !1), !this.monitor.canDragSource(e)))
            return;
        if (this.monitor.isDragging()) return void this.actions.publishDragSource();
        g(t);
        let n = this.sourceNodes.get(e);
        null != n &&
            ((this._navigator = new f(n, this.targetNodes, this.manager, this._previewer, this._announcer)),
            this._previewer.createDragPreview(this.sourcePreviewNodes.get(e) ?? n),
            this.actions.beginDrag([e], {
                clientOffset: this.getSourceClientOffset(e),
                getSourceClientOffset: this.getSourceClientOffset,
                publishSource: !1,
            }),
            this._previewer.render(this.monitor),
            this.setDndMode(!0),
            this._announcer.announceDrag(n, e));
    };
    handleDrop = (e) => {
        A(e, p) && (this.actions.drop(), this.endDrag(e), this._announcer.announceDrop());
    };
    endDrag(e) {
        null != e && g(e),
            this._navigator?.disconnect(),
            this._previewer.clear(),
            this.monitor.isDragging() && this.actions.endDrag(),
            this.setDndMode(!1);
    }
}
let x = (0, s.eV)("keydown", (e) => !!v(e) && (e.preventDefault(), !0)),
    w = (0, s.eV)(
        "mousedown",
        (e) => -1 === e.type.indexOf("touch") && -1 !== e.type.indexOf("mouse") && ((0, l.ef)(!1), !0),
    ),
    E = {
        backends: [
            { id: "html5", backend: i.t, transition: w },
            {
                id: "keyboard",
                backend: (e, t, n) => new y(e, t, n),
                context: { window, document },
                options: { onDndModeChanged: l.ef, announcer: o.O },
                preview: !0,
                transition: x,
            },
        ],
    };
function C(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.QP, { options: E, children: t });
}
