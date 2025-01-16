t.r(n),
    t.d(n, {
        default: function () {
            return f;
        }
    });
var r = t(200651),
    l = t(192379),
    a = t(442837),
    o = t(481060),
    i = t(668274),
    c = t(600164),
    s = t(241209),
    u = t(807693),
    d = t(388032),
    h = t(74060);
function f(e) {
    var n;
    let { eulaId: t, transitionState: f, onClose: p } = e,
        g = (0, a.e7)([u.Z], () => u.Z.getEULA(t));
    l.useEffect(() => {
        (0, i.N)(t);
    }, [t]);
    let m = null !== (n = null == g ? void 0 : g.name) && void 0 !== n ? n : d.intl.string(d.t.ZTNur6),
        b =
            null != g
                ? (0, r.jsx)(s.Z, {
                      children: g.content,
                      className: h.markdown
                  })
                : (0, r.jsx)(o.Spinner, { className: h.spinner });
    return (0, r.jsxs)(o.ModalRoot, {
        transitionState: f,
        size: o.ModalSize.SMALL,
        'aria-label': m,
        children: [
            (0, r.jsxs)(o.ModalHeader, {
                justify: c.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: 'heading-lg/semibold',
                        children: m
                    }),
                    (0, r.jsx)(o.ModalCloseButton, { onClick: p })
                ]
            }),
            (0, r.jsx)(o.ModalContent, { children: b })
        ]
    });
}
