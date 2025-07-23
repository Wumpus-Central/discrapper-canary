n.d(t, {
    HR: () => b,
    L5: () => g,
    ZP: () => h
});
var a = n(255367),
    i = n(73800),
    o = n(120356),
    r = n.n(o),
    c = n(653603),
    l = n.n(c),
    s = n(902704),
    u = n(453687),
    d = n(328966),
    m = n(981631),
    p = n(388032),
    _ = n(848697),
    f = n(73433);
function g(e, t) {
    return e.type === m.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(m.iLy.SOURCE_MESSAGE_DELETED) ? p.intl.string(p.t.JOtgS0) : t;
}
function b(e, t) {
    var n, a;
    let { message: i } = t,
        { message: o } = e;
    return (0, s.Z)(e, t, ['message']) && i.content === o.content && i.state === o.state && (null == (n = i.editedTimestamp) ? void 0 : n.toString()) === (null == (a = o.editedTimestamp) ? void 0 : a.toString());
}
let h = i.memo(function (e) {
    var t;
    let { className: n, message: o, children: c, content: s, onUpdate: p, contentRef: b, compact: h } = e,
        T = o.state === m.yb.SEND_FAILED,
        y = o.state === m.yb.SENDING,
        C = o.isCommandType(),
        x = null == (t = o.editedTimestamp) ? void 0 : t.toString(),
        O = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            O.current ? null != p && p() : (O.current = !0);
        }, [p, o.content, s, x, c]),
        (0, a.jsxs)('div', {
            id: (0, u.ut)(o),
            ref: b,
            className: r()(n, f.markup, {
                [_.messageContent]: !0,
                [_.isSending]: y && !C,
                [_.markupRtl]: 'rtl' === l()(o.content),
                [_.isFailed]: T,
                [_.isUnsupported]: o.isUnsupported
            }),
            children: [
                null != c ? c : g(o, s),
                (0, a.jsx)(d.Z, {
                    message: o,
                    compact: h,
                    location: d.H.WITH_CONTENT
                })
            ]
        })
    );
}, b);
