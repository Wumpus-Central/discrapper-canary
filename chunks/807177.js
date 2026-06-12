"use strict";
n.d(t, { I: () => o });
var i = n(3388),
    r = n(64700);
let s = 0,
    a = new Map();
function o(e) {
    let [t, n] = (0, r.useState)();
    return (
        (0, i.N)(() => {
            if (!e) return;
            let t = a.get(e);
            if (t) n(t.element.id);
            else {
                let i = `react-aria-description-${s++}`;
                n(i);
                let r = document.createElement("div");
                (r.id = i),
                    (r.style.display = "none"),
                    (r.textContent = e),
                    document.body.appendChild(r),
                    (t = { refCount: 0, element: r }),
                    a.set(e, t);
            }
            return (
                t.refCount++,
                () => {
                    t && 0 == --t.refCount && (t.element.remove(), a.delete(e));
                }
            );
        }, [e]),
        { "aria-describedby": e ? t : void 0 }
    );
}
