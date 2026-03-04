"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    s = n(311907),
    l = n(967198),
    a = n(957300),
    r = n(652215);
function o() {
    let e = (0, a.E)((e) => e.isPreviewMode),
        t = (0, s.bG)([l.A], () => l.A.getGuildId()),
        n = i.useRef(t);
    i.useEffect(() => {
        let i = n.current;
        e && i === r.YYv && t !== r.YYv && a.E.getState().exitPreview(), (n.current = t);
    }, [e, t]);
}
