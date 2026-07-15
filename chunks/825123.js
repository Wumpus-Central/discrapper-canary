d.d(t, { t: () => i });
function i(l, t) {
    if ("u" < typeof document) throw Error("Document not available");
    let d = t?.keepStreamAlive ?? !1,
        i = document.createElement("video");
    return (
        (i.autoplay = !0),
        (i.playsInline = !0),
        (i.muted = !0),
        (i.srcObject = l),
        (i.style.width = "0px"),
        (i.style.height = "0px"),
        (i.style.position = "absolute"),
        (i.style.top = "0"),
        (i.style.left = "0"),
        (i.style.zIndex = "-1"),
        document.body.appendChild(i),
        {
            element: i,
            dispose: () => {
                let l = i.srcObject;
                if (!d && l instanceof MediaStream) for (let t of l.getTracks()) t.stop();
                (i.srcObject = null), i.parentElement && i.parentElement.removeChild(i);
            },
        }
    );
}
