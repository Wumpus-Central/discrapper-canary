(n.d(t, { y: () => u }), n(388685), n(704826), n(35282));
var r = n(255367),
    l = n(73800),
    a = n(755721),
    i = n(176354),
    s = n(388032),
    o = n(139797);
let u = (e) => {
    let { name: t, onNameChange: n } = e,
        u = l.useRef(null),
        c = l.useRef(null),
        [d, m] = l.useState(!1),
        h = l.useCallback(
            (e) => {
                var t;
                ((c.current = null == (t = u.current) ? void 0 : t.selectionStart), n((e = (e = e.replace(/\s/g, '_')).length < 2 ? e : i.ZP.sanitizeEmojiName(e))));
            },
            [n]
        );
    l.useEffect(() => {
        if (null != c.current) {
            var e;
            (null == (e = u.current) || e.setSelectionRange(c.current, c.current), (c.current = null));
        }
    });
    let g = l.useCallback(() => {
            m(!1);
        }, []),
        p = l.useCallback(() => {
            m(!0);
        }, []);
    return (0, r.jsx)(a.Is, {
        inputRef: u,
        inputClassName: o.input,
        error: d ? '' : void 0,
        minLength: 2,
        value: t,
        onChange: h,
        placeholder: s.intl.string(s.t.U2JFHR),
        name: 'emoji_name',
        onBlur: g,
        onFocus: p,
        required: !0
    });
};
