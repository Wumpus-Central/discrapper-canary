n.d(t, { y: () => s }), n(388685), n(704826), n(35282);
var r = n(951288),
    l = n(647438),
    i = n(481060),
    a = n(176354),
    o = n(388032);
let s = (e) => {
    let { name: t, onNameChange: n } = e,
        s = l.useRef(null),
        u = l.useRef(null),
        [c, d] = l.useState(!1),
        m = l.useCallback(
            (e) => {
                var t;
                (u.current = null == (t = s.current) ? void 0 : t.selectionStart),
                    n((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : a.ZP.sanitizeEmojiName(e)));
            },
            [n],
        );
    l.useEffect(() => {
        if (null != u.current) {
            var e;
            null == (e = s.current) || e.setSelectionRange(u.current, u.current), (u.current = null);
        }
    });
    let f = l.useCallback(() => {
            d(!1);
        }, []),
        g = l.useCallback(() => {
            d(!0);
        }, []);
    return (0, r.jsx)(i.oil, {
        inputRef: s,
        error: c ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: m,
        placeholder: o.intl.string(o.t.U2JFHR),
        name: "emoji_name",
        onBlur: f,
        onFocus: g,
        required: !0,
    });
};
