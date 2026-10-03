e.d(n, { k: () => m, o: () => A });
var i = e(477900),
    s = e(582128),
    a = e(503698),
    l = e.n(a),
    o = e(508602),
    r = e(189213),
    c = e(700058),
    d = e(607470),
    u = e(59318),
    I = e(633387),
    E = e(390248),
    _ = e(961440),
    C = e(375708),
    h = e(383999);
function p(t) {
    let { attachment: n } = t,
        { url: e, description: s } = n;
    return null == e ? null : (0, i.jsx)(v, { url: e, description: s });
}
function S(t) {
    let { embed: n } = t;
    if (!_.Tj.has(n.type)) return null;
    let e = void 0 !== n.video && n.type !== o.A.GIFV ? n.video.url : (n.thumbnail?.url ?? n.image?.url);
    return null == e ? null : (0, i.jsx)(v, { url: e });
}
function v(t) {
    let { url: n, description: e } = t,
        s = (0, u.r1)(n);
    return (0, i.jsx)("div", {
        className: h.il,
        children: s
            ? (0, i.jsx)(d.A, { className: l()(h.Ki, h.$_), controls: !0, src: n })
            : (0, i.jsx)("img", { className: l()(h.Sl, h.$_), src: n, alt: e }),
    });
}
function A(t) {
    (c.A.pop(), (0, I.r)({ id: "explicit-media-false-positive-modal", text: C.intl.string(C.t.gFsTKu) }), t());
}
function m(t) {
    let {
            channelId: n,
            messageId: e,
            isReportFalsePositiveLoading: a,
            analyticsContext: l,
            attachmentPreview: o,
            embedPreview: c,
            onConfirmPress: d,
            transitionState: u,
            onClose: I,
        } = t,
        _ = s.useCallback(() => {
            ((0, E.hv)({
                action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: n,
                messageId: e,
                context: l,
            }),
                I());
        }, [n, e, l, I]),
        h = s.useCallback(() => {
            (d?.(),
                (0, E.hv)({
                    action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: n,
                    messageId: e,
                    context: l,
                }));
        }, [n, e, l, d]);
    return (
        s.useEffect(() => {
            (0, E.hv)({ action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId: n, messageId: e, context: l });
        }, [n, e, l]),
        (0, i.jsxs)(r.a, {
            transitionState: u,
            onClose: I,
            title: C.intl.string(C.t.TPpVkI),
            subtitle: C.intl.string(C.t["z4du/I"]),
            actions: [
                { text: C.intl.string(C.t["ETE/oC"]), onClick: _, variant: "secondary", disabled: a },
                { text: C.intl.string(C.t["cY+Oob"]), onClick: h, loading: a, disabled: a },
            ],
            children: [null != o && (0, i.jsx)(p, { attachment: o }), null != c && (0, i.jsx)(S, { embed: c })],
        })
    );
}
