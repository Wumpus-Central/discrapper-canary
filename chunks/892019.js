n.d(t, { A: () => o });
var r = n(582128),
    i = n(17928),
    s = n(638128);
function o(e) {
    let t = (0, i.bG)([s.A], () => s.A.isEnabled());
    r.useEffect(() => {
        null != e && (t ? e.removeAttribute("spellcheck") : e.setAttribute("spellcheck", "false"));
    }, [e, t]);
}
