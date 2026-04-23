"use strict";
n.d(t, { W: () => N });
var i = n(627968);
n(64700);
var r = n(676999),
    s = n(96620),
    a = n(765178),
    o = n(425763),
    l = n(985018);
class d {
    announcer;
    constructor(e) {
        if (null != e) this.announcer = e;
        else {
            const e = n(620557);
            this.announcer = { announce: e.announce, clearAnnouncements: e.clearAnnouncer };
        }
    }
    announce(e, t, n) {
        this.announcer.announce(e, t, n);
    }
    announceDrag(e, t) {
        if (null == e) return;
        let n = this.getName(e, t);
        this.announce(l.intl.formatToPlainString(l.t["vHD/Je"], { itemName: n }));
    }
    announceHover(e, t) {
        null != e && this.announce(this.getName(e, t));
    }
    announceDrop() {
        this.announce(l.intl.string(l.t.lMkmz7));
    }
    announceCancel() {
        this.announce(l.intl.string(l.t["u4d/eC"]));
    }
    clear() {
        this.announcer.clearAnnouncements();
    }
    getName(e, t) {
        return e.getAttribute("data-dnd-name") ?? e.getAttribute("aria-label") ?? t;
    }
}
class _ {
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
        let i = e.cloneNode(!0);
        this.foreignObject.appendChild(i);
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
var u = n(52724);
let c = "dndOriginalRole";
class E {
    targetNodes;
    manager;
    previewer;
    announcer;
    currentHoveredNode;
    focusManager;
    actions;
    monitor;
    constructor(e, t, n, i, r) {
        (this.targetNodes = t),
            (this.manager = n),
            (this.previewer = i),
            (this.announcer = r),
            (this.currentHoveredNode = e),
            (this.focusManager = (0, u.C)({
                getFocusableElements: () => this.getViableTargets(t),
                getActiveElement: () => e.ownerDocument.activeElement,
            })),
            (this.actions = n.getActions()),
            (this.monitor = n.getMonitor()),
            this.overrideRoleToApplicationForHoveredNode(),
            window.addEventListener("keydown", this.handleDraggedElementKeyDown, { capture: !0 });
    }
    restoreRoleOfHoveredNode() {
        if (null == this.currentHoveredNode) return;
        let e = this.currentHoveredNode.dataset[c];
        null != e &&
            ("" === e
                ? this.currentHoveredNode.removeAttribute("role")
                : this.currentHoveredNode.setAttribute("role", e),
            delete this.currentHoveredNode.dataset[c]);
    }
    overrideRoleToApplicationForHoveredNode() {
        null != this.currentHoveredNode &&
            ((this.currentHoveredNode.dataset[c] = this.currentHoveredNode.getAttribute("role") ?? ""),
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
            let [n, i] = t;
            return e === i;
        })?.[0];
        null != t &&
            (this.restoreRoleOfHoveredNode(),
            this.actions.hover([t], {
                clientOffset: (function (e) {
                    if (null == e) return { x: 0, y: 0 };
                    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
                    if (null == t) return { x: 0, y: 0 };
                    let { top: n, left: i } = t.getBoundingClientRect();
                    return { x: i, y: n };
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
                  let [n, i] = t;
                  return this.manager.getMonitor().canDropOnTarget(n) && e.push(i), e;
              }, []);
    }
}
let h = [" ", "Enter"],
    m = ["Escape"];
function f(e) {
    e.preventDefault(), e.stopImmediatePropagation();
}
function g(e, t) {
    return t.includes(e.key);
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (!!t && !1 === e.isTrusted) || (e.key?.toLowerCase() === "d" && (e.metaKey || e.ctrlKey) && !e.altKey);
}
class A {
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
            (this._previewer = new _(t.document)),
            (this._announcer = new d(n?.announcer));
    }
    setup() {
        if (A.isSetUp) throw Error("Cannot have two Keyboard backends at the same time.");
        (A.isSetUp = !0),
            (this._handlingFirstEvent = !0),
            this.context.window?.addEventListener("keydown", this.handleGlobalKeyDown, { capture: !0 });
    }
    teardown() {
        (A.isSetUp = !1),
            this.context.window?.removeEventListener("keydown", this.handleGlobalKeyDown, { capture: !0 }),
            this.endDrag();
    }
    handleGlobalKeyDown = (e) => {
        this.monitor.isDragging() && g(e, m) && (this.endDrag(e), this._announcer.announceCancel());
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
            let { top: n, left: i } = t.getBoundingClientRect();
            return { x: i, y: n };
        })(this.sourceNodes.get(e));
    handleDragStart = (e, t) => {
        if (!p(t, this._handlingFirstEvent) || ((this._handlingFirstEvent = !1), !this.monitor.canDragSource(e)))
            return;
        if (this.monitor.isDragging()) return void this.actions.publishDragSource();
        f(t);
        let n = this.sourceNodes.get(e);
        null != n &&
            ((this._navigator = new E(n, this.targetNodes, this.manager, this._previewer, this._announcer)),
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
        g(e, h) && (this.actions.drop(), this.endDrag(e), this._announcer.announceDrop());
    };
    endDrag(e) {
        null != e && f(e),
            this._navigator?.disconnect(),
            this._previewer.clear(),
            this.monitor.isDragging() && this.actions.endDrag(),
            this.setDndMode(!1);
    }
}
let I = (0, s.eV)("keydown", (e) => !!p(e) && (e.preventDefault(), !0)),
    T = (0, s.eV)(
        "mousedown",
        (e) => -1 === e.type.indexOf("touch") && -1 !== e.type.indexOf("mouse") && ((0, o.ef)(!1), !0),
    ),
    S = {
        backends: [
            { id: "html5", backend: r.t, transition: T },
            {
                id: "keyboard",
                backend: (e, t, n) => new A(e, t, n),
                context: { window, document },
                options: { onDndModeChanged: o.ef, announcer: a.O },
                preview: !0,
                transition: I,
            },
        ],
    };
function N(e) {
    let { children: t } = e;
    return (0, i.jsx)(s.QP, { options: S, children: t });
}
