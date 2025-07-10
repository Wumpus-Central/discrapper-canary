(n.d(t, { y: () => o }), n(388685), n(704826), n(35282));
var r = n(255367),
    l = n(73800),
    a = n(481060),
    i = n(388032),
    s = n(139797);
let o = (e) => {
    let { name: t, onNameChange: n } = e,
        o = l.useRef(null),
        c = l.useRef(null),
        [u, d] = l.useState(!1),
        m = l.useCallback(
            (e) => {
                var t;
                ((c.current = null == (t = o.current) ? void 0 : t.selectionStart), n((e = e.replace(/\s/g, '_'))));
            },
            [n]
        );
    l.useEffect(() => {
        if (null != c.current) {
            var e;
            (null == (e = o.current) || e.setSelectionRange(c.current, c.current), (c.current = null));
        }
    });
    let p = l.useCallback(() => {
            d(!1);
        }, []),
        g = l.useCallback(() => {
            d(!0);
        }, []);
    return (0, r.jsx)(a.oil, {
        inputRef: o,
        inputClassName: s.input,
        error: u ? '' : void 0,
        minLength: 2,
        value: t,
        onChange: m,
        placeholder: i.intl.string(i.t.U2JFHR),
        name: 'emoji_name',
        onBlur: p,
        onFocus: g,
        required: !0
    });
};
