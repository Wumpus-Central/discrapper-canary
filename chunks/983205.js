n.d(t, { y: () => s }), n(388685), n(704826), n(35282);
var l = n(54381),
    r = n(473749),
    i = n(481060),
    a = n(176354),
    o = n(388032);
let s = (e) => {
    let { name: t, onNameChange: n, label: s } = e,
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
    return (0, l.jsx)(i.oil, {
        inputRef: u,
        error: d ? "" : void 0,
        minLength: 2,
        value: t,
        onChange: h,
        placeholder: o.intl.string(o.t.U2JFHZ),
        name: "emoji_name",
        onBlur: g,
        onFocus: f,
        label: s,
        clearable: !0,
        required: !0,
    });
};
