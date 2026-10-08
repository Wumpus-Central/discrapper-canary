n.d(t, { A: () => s });
var r = n(582128),
    i = n(17928),
    l = n(638128);
function s(e) {
    let t = (0, i.bG)([l.A], () => l.A.isEnabled());
    r.useEffect(() => {
        null != e && (t ? e.removeAttribute("spellcheck") : e.setAttribute("spellcheck", "false"));
    }, [e, t]);
}
