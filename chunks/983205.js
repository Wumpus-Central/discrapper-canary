n.d(t, { y: () => o }), n(388685), n(704826), n(35282);
var r = n(951288),
    l = n(647438),
    a = n(481060),
    i = n(176354),
    s = n(388032);
let o = (e) => {
    let { name: t, onNameChange: n } = e,
        o = l.useRef(null),
        u = l.useRef(null),
        [c, d] = l.useState(!1),
        m = l.useCallback(
            (e) => {
                var t;
                (u.current = null == (t = o.current) ? void 0 : t.selectionStart),
                    n((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : i.ZP.sanitizeEmojiName(e)));
            },
            [n],
        );
    l.useEffect(() => {
        if (null != u.current) {
            var e;
            null == (e = o.current) || e.setSelectionRange(u.current, u.current), (u.current = null);
        }
    });
    let h = l.useCallback(() => {
            d(!1);
        }, []),
        g = l.useCallback(() => {
            d(!0);
        }, []);
    return (0, r.jsx)(a.oil, {
        inputRef: o,
        error: c ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: m,
        placeholder: s.intl.string(s.t.U2JFHR),
        name: "emoji_name",
        onBlur: h,
        onFocus: g,
        required: !0,
    });
};
