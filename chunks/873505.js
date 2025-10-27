n.d(t, {
    gb: () => o,
    xQ: () => a,
});
let r = 7000,
    i = null;
function a(e, t = "assertive", n = r) {
    i
        ? i.announce(e, t, n)
        : ((i = new s()),
          ("boolean" == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : "undefined" != typeof jest)
              ? i.announce(e, t, n)
              : setTimeout(() => {
                    (null == i ? void 0 : i.isAttached()) && (null == i || i.announce(e, t, n));
                }, 100));
}
function o(e) {
    i && i.clear(e);
}
class s {
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
        this.node && (document.body.removeChild(this.node), (this.node = null));
    }
    announce(e, t = "assertive", n = r) {
        var i, a;
        if (!this.node) return;
        let o = document.createElement("div");
        "object" == typeof e
            ? (o.setAttribute("role", "img"), o.setAttribute("aria-labelledby", e["aria-labelledby"]))
            : (o.textContent = e),
            "assertive" === t
                ? null == (i = this.assertiveLog) || i.appendChild(o)
                : null == (a = this.politeLog) || a.appendChild(o),
            "" !== e &&
                setTimeout(() => {
                    o.remove();
                }, n);
    }
    clear(e) {
        this.node &&
            ((!e || "assertive" === e) && this.assertiveLog && (this.assertiveLog.innerHTML = ""),
            (!e || "polite" === e) && this.politeLog && (this.politeLog.innerHTML = ""));
    }
    constructor() {
        (this.node = null),
            (this.assertiveLog = null),
            (this.politeLog = null),
            "undefined" != typeof document &&
                ((this.node = document.createElement("div")),
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
                document.body.prepend(this.node));
    }
}
