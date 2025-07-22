(n.d(t, { y: () => c }), n(388685), n(704826), n(35282));
var r = n(255367),
    l = n(73800),
    a = n(755721),
    i = n(176354),
    s = n(388032),
    o = n(139797);
let c = (e) => {
    let { name: t, onNameChange: n } = e,
        c = l.useRef(null),
        u = l.useRef(null),
        [d, m] = l.useState(!1),
        g = l.useCallback(
            (e) => {
                var t;
                ((u.current = null == (t = c.current) ? void 0 : t.selectionStart), n((e = (e = e.replace(/\s/g, '_')).length < 2 ? e : i.ZP.sanitizeEmojiName(e))));
            },
            [n]
        );
    l.useEffect(() => {
        if (null != u.current) {
            var e;
            (null == (e = c.current) || e.setSelectionRange(u.current, u.current), (u.current = null));
        }
    });
    let p = l.useCallback(() => {
            m(!1);
        }, []),
        h = l.useCallback(() => {
            m(!0);
        }, []);
    return (0, r.jsx)(a.Is, {
        inputRef: c,
        inputClassName: o.input,
        error: d ? '' : void 0,
        minLength: 2,
        value: t,
        onChange: g,
        placeholder: s.intl.string(s.t.U2JFHR),
        name: 'emoji_name',
        onBlur: p,
        onFocus: h,
        required: !0
    });
};
