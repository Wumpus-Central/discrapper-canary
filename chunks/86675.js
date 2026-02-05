"use strict";
n.d(t, { A: () => r });
class r {
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
