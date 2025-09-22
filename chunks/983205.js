n.d(t, { y: () => s }), n(388685), n(704826), n(35282);
var r = n(951288),
    l = n(647438),
    i = n(481060),
    a = n(176354),
    o = n(388032);
let s = (e) => {
    let { name: t, onNameChange: n, label: s } = e,
        u = l.useRef(null),
        c = l.useRef(null),
        [d, m] = l.useState(!1),
        h = l.useCallback(
            (e) => {
                var t;
                (c.current = null == (t = u.current) ? void 0 : t.selectionStart),
                    n((e = (e = e.replace(/\s/g, "_")).length < 2 ? e : a.ZP.sanitizeEmojiName(e)));
            },
            [n],
        );
    l.useEffect(() => {
        if (null != c.current) {
            var e;
            null == (e = u.current) || e.setSelectionRange(c.current, c.current), (c.current = null);
        }
    });
    let g = l.useCallback(() => {
            m(!1);
        }, []),
        f = l.useCallback(() => {
            m(!0);
        }, []);
    return (0, r.jsx)(i.oil, {
        inputRef: u,
        error: d ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: h,
        placeholder: o.intl.string(o.t.U2JFHR),
        name: "emoji_name",
        onBlur: g,
        onFocus: f,
        label: s,
        required: !0,
    });
};
