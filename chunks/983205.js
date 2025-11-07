n.d(t, { y: () => o }), n(388685), n(704826), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(176354),
    s = n(388032);
let o = (e) => {
    let { name: t, onNameChange: n, label: o } = e,
        u = i.useRef(null),
        c = i.useRef(null),
        [d, h] = i.useState(!1),
        m = i.useCallback(
            (e) => {
                var t;
                (c.current = null == (t = u.current) ? void 0 : t.selectionStart),
                    n((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : a.ZP.sanitizeEmojiName(e)));
            },
            [n],
        );
    i.useEffect(() => {
        if (null != c.current) {
            var e;
            null == (e = u.current) || e.setSelectionRange(c.current, c.current), (c.current = null);
        }
    });
    let g = i.useCallback(() => {
            h(!1);
        }, []),
        p = i.useCallback(() => {
            h(!0);
        }, []);
    return (0, r.jsx)(l.oil, {
        inputRef: u,
        error: d ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: m,
        placeholder: s.intl.string(s.t.U2JFHZ),
        name: "emoji_name",
        onBlur: g,
        onFocus: p,
        label: o,
        required: !0,
    });
};
