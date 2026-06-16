"use strict";
n.d(t, { So: () => r, c5: () => o, iP: () => s, pA: () => a });
let i = null;
function r(e = null) {
    i || (i = new l(e));
}
function s(e, t = "assertive", n = 7e3) {
    i
        ? i.announce(e, t, n)
        : ((i = new l()),
          ("boolean" == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : "u" > typeof jest)
              ? i.announce(e, t, n)
              : setTimeout(() => {
                    (null == i ? void 0 : i.isAttached()) && (null == i || i.announce(e, t, n));
                }, 100));
}
function a(e) {
    i && i.clear(e);
}
function o() {
    i && (i.destroy(), (i = null));
}
class l {
    isAttached() {
        var e;
        return null == (e = this.node) ? void 0 : e.isConnected;
    }
    createLog(e) {
        let t = document.createElement("div");
        return (
            t.setAttribute("role", "log"),
            t.setAttribute("aria-live", e),
            t.setAttribute("aria-relevant", "additions"),
            t
        );
    }
    destroy() {
        this.node && this.parentNode && (this.parentNode.removeChild(this.node), (this.node = null));
    }
    announce(e, t = "assertive", n = 7e3) {
        var i, r;
        if (!this.node) return;
        let s = document.createElement("div");
        "object" == typeof e
            ? (s.setAttribute("role", "img"), s.setAttribute("aria-labelledby", e["aria-labelledby"]))
            : (s.textContent = e),
            "assertive" === t
                ? null == (i = this.assertiveLog) || i.appendChild(s)
                : null == (r = this.politeLog) || r.appendChild(s),
            "" !== e &&
                setTimeout(() => {
                    s.remove();
                }, n);
    }
    clear(e) {
        this.node &&
            ((!e || "assertive" === e) && this.assertiveLog && (this.assertiveLog.innerHTML = ""),
            (!e || "polite" === e) && this.politeLog && (this.politeLog.innerHTML = ""));
    }
    constructor(e = null) {
        (this.node = null),
            (this.parentNode = null),
            (this.assertiveLog = null),
            (this.politeLog = null),
            "u" > typeof document &&
                ((this.node = document.createElement("div")),
                (this.parentNode = null != e ? e : document.body),
                (this.node.dataset.liveAnnouncer = "true"),
                Object.assign(this.node.style, {
                    border: 0,
                    clip: "rect(0 0 0 0)",
                    clipPath: "inset(50%)",
                    height: "1px",
                    margin: "-1px",
                    overflow: "hidden",
                    padding: 0,
                    position: "absolute",
                    width: "1px",
                    whiteSpace: "nowrap",
                }),
                (this.assertiveLog = this.createLog("assertive")),
                this.node.appendChild(this.assertiveLog),
                (this.politeLog = this.createLog("polite")),
                this.node.appendChild(this.politeLog),
                this.parentNode.prepend(this.node));
    }
}
