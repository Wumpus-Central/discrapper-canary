r.d(n, {
    HR: function () {
        return v;
    },
    L5: function () {
        return g;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(653603),
    u = r.n(l),
    c = r(902704),
    d = r(453687),
    f = r(318713),
    p = r(981631),
    h = r(388032),
    _ = r(507304),
    m = r(665162);
function g(e, n) {
    return e.type === p.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(p.iLy.SOURCE_MESSAGE_DELETED) ? h.intl.string(h.t.JOtgS0) : n;
}
function E(e) {
    var n;
    let { className: r, message: o, children: l, content: c, onUpdate: E, contentRef: v } = e,
        y = o.isEdited(),
        b = o.state === p.yb.SEND_FAILED,
        I = o.state === p.yb.SENDING,
        T = o.isCommandType(),
        S = null === (n = o.editedTimestamp) || void 0 === n ? void 0 : n.toString(),
        A = a.useRef(!1);
    return (
        a.useLayoutEffect(() => {
            A.current ? null != E && E() : (A.current = !0);
        }, [E, o.content, c, S, l]),
        (0, i.jsxs)('div', {
            id: (0, d.ut)(o),
            ref: v,
            className: s()(r, m.markup, {
                [_.messageContent]: !0,
                [_.isSending]: I && !T,
                [_.markupRtl]: 'rtl' === u()(o.content),
                [_.isFailed]: b,
                [_.isUnsupported]: o.isUnsupported
            }),
            children: [
                null != l ? l : g(o, c),
                y &&
                    null != o.editedTimestamp &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            ' ',
                            (0, i.jsx)(f.Z, {
                                timestamp: o.editedTimestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, i.jsxs)('span', {
                                    className: _.edited,
                                    children: ['(', h.intl.string(h.t.C8sXIC), ')']
                                })
                            })
                        ]
                    })
            ]
        })
    );
}
function v(e, n) {
    var r, i;
    let { message: a } = n,
        { message: o } = e;
    return (0, c.Z)(e, n, ['message']) && a.content === o.content && a.state === o.state && (null === (r = a.editedTimestamp) || void 0 === r ? void 0 : r.toString()) === (null === (i = o.editedTimestamp) || void 0 === i ? void 0 : i.toString());
}
n.ZP = a.memo(E, v);
