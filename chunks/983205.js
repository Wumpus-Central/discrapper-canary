n.d(t, { y: () => u }), n(388685), n(704826), n(35282);
var l = n(255367),
    r = n(73800),
    i = n(755721),
    a = n(176354),
    o = n(388032),
    s = n(342745);
let u = (e) => {
    let { name: t, onNameChange: n } = e,
        u = r.useRef(null),
        c = r.useRef(null),
        [d, m] = r.useState(!1),
        h = r.useCallback(
            (e) => {
                var t;
                (c.current = null == (t = u.current) ? void 0 : t.selectionStart),
                    n((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : a.ZP.sanitizeEmojiName(e)));
            },
            [n],
        );
    r.useEffect(() => {
        if (null != c.current) {
            var e;
            null == (e = u.current) || e.setSelectionRange(c.current, c.current), (c.current = null);
        }
    });
    let g = r.useCallback(() => {
            m(!1);
        }, []),
        f = r.useCallback(() => {
            m(!0);
        }, []);
    return (0, l.jsx)(i.Is, {
        inputRef: u,
        inputClassName: s.input,
        error: d ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: h,
        placeholder: o.intl.string(o.t.U2JFHR),
        name: "emoji_name",
        onBlur: g,
        onFocus: f,
        required: !0,
    });
};
