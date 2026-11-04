var r = n(582128),
    i = n(855986),
    l = n(638128);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, i.bG)([l.A], () => l.A.isEnabled());
            r.useEffect(() => {
                null != e && (t ? e.removeAttribute("spellcheck") : e.setAttribute("spellcheck", "false"));
            }, [e, t]);
        },
    },
);
