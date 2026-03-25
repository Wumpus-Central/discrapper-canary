"use strict";
n.d(t, { c: () => a }), n(321073);
var r = n(52724);
let i = "dndOriginalRole";
function s(e) {
    if (null == e) return { x: 0, y: 0 };
    let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
    if (null == t) return { x: 0, y: 0 };
    let { top: n, left: r } = t.getBoundingClientRect();
    return { x: r, y: n };
}
class a {
    targetNodes;
    manager;
    previewer;
    announcer;
    currentHoveredNode;
    focusManager;
    actions;
    monitor;
    constructor(e, t, n, i, s) {
        (this.targetNodes = t),
            (this.manager = n),
            (this.previewer = i),
            (this.announcer = s),
            (this.currentHoveredNode = e),
            (this.focusManager = (0, r.C)({
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
        let e = this.currentHoveredNode.dataset[i];
        null != e &&
            ("" === e
                ? this.currentHoveredNode.removeAttribute("role")
                : this.currentHoveredNode.setAttribute("role", e),
            delete this.currentHoveredNode.dataset[i]);
    }
    overrideRoleToApplicationForHoveredNode() {
        null != this.currentHoveredNode &&
            ((this.currentHoveredNode.dataset[i] = this.currentHoveredNode.getAttribute("role") ?? ""),
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
            this.actions.hover([t], { clientOffset: s(e) }),
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
